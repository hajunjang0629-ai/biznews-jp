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
    id: "fancy-cars-hold-no-appeal-we-have-a-99-8eb15447",
    title: "‘Fancy cars hold no appeal’: We have a 99% chance of outliving our life savings. Why not spend, spend, spend?",
    titleJa: "‘Fancy cars hold no appeal’: We have a 99% chance of outliving our life savings. Why not spend, spend, spend?",
    summaryJa: "“I’m 68, she’s 74, and we’re both in good health. We married later in life and have no children.”",
    bodyOriginal: `“I’m 68, she’s 74, and we’re both in good health. We married later in life and have no children.”`,
    bodyJa: `“I’m 68, she’s 74, and we’re both in good health. We married later in life and have no children.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/fancy-cars-hold-no-appeal-my-wife-and-i-have-a-99-chance-of-outliving-our-savings-why-dont-we-spend-it-all-932a2166?mod=mw_rss_topstories",
    publishedAt: "2026-10-29T12:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-21005604",
    readTime: 2,
  },
  {
    id: "third-quarter-u-s-gdp-increases-a-better-529f3b20",
    title: "Third-quarter U.S. GDP increases a better-than-expected 3.4% as September inflation accelerates",
    titleJa: "Third-quarter U.S. GDP increases a better-than-expected 3.4% as September inflation accelerates",
    summaryJa: "The personal consumption expenditures price index was projected to increase 0.5% in September for an annual rate of 3.7%, according to the Dow Jones consensus.",
    bodyOriginal: `The pace of price increases stepped up in September, keeping inflation well above the Federal Reserve's target, while the economy grew faster than expected in the third quarter, according to Commerce Department reports Thursday.
The personal consumption expenditures price index increased a seasonally adjusted 0.5% for the month, putting the annual inflation rate at 3.6%.The monthly increase was in line with the Dow Jones consensus, while the annual rate was 0.1 percentage point below.
Excluding food and energy, core PCE posted respective readings of 0.3% and 3.1%, in line with the consensus. While the Fed follows both measures closely, officials generally see the core reading as more indicative of longer-term inflation trends.
While inflation continued to run ahead of the Fed's 2% target, the Commerce Department also reported that gross domestic product was strong in the third quarter.
GDP increased at a seasonally adjusted annualized pace of 3.4%, better than the 3.1% estimate and well ahead of the 2.2% in the second quarter.
Also, consumer spending proved resilient, increasing 0.5% a bit below the forecast for a 0.6% gain, while personal income rose 0.2%, compared to the forecast for 0.3%.
The reports come the day after the Fed voted to hold its benchmark interest rate in a range between 3.75%-4%. Despite elevated inflation readings, central bank officials insist they can afford to evaluate incoming data before deciding on their next move.
"The period right in front of us is information rich. There is a lot that's happening in the world. My colleagues and I are keen to take notice of it," Fed Chairman Kevin Warsh said.
However, the data deluge from Thursday shows the Fed could have more work to do.
This is breaking news. Please refresh for updates.`,
    bodyJa: `The pace of price increases stepped up in September, keeping inflation well above the Federal Reserve's target, while the economy grew faster than expected in the third quarter, according to Commerce Department reports Thursday.
The personal consumption expenditures price index increased a seasonally adjusted 0.5% for the month, putting the annual inflation rate at 3.6%.The monthly increase was in line with the Dow Jones consensus, while the annual rate was 0.1 percentage point below.
Excluding food and energy, core PCE posted respective readings of 0.3% and 3.1%, in line with the consensus. While the Fed follows both measures closely, officials generally see the core reading as more indicative of longer-term inflation trends.
While inflation continued to run ahead of the Fed's 2% target, the Commerce Department also reported that gross domestic product was strong in the third quarter.
GDP increased at a seasonally adjusted annualized pace of 3.4%, better than the 3.1% estimate and well ahead of the 2.2% in the second quarter.
Also, consumer spending proved resilient, increasing 0.5% a bit below the forecast for a 0.6% gain, while personal income rose 0.2%, compared to the forecast for 0.3%.
The reports come the day after the Fed voted to hold its benchmark interest rate in a range between 3.75%-4%. Despite elevated inflation readings, central bank officials insist they can afford to evaluate incoming data before deciding on their next move.
"The period right in front of us is information rich. There is a lot that's happening in the world. My colleagues and I are keen to take notice of it," Fed Chairman Kevin Warsh said.
However, the data deluge from Thursday shows the Fed could have more work to do.
This is breaking news. Please refresh for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/pce-inflation-report-september-2026-.html",
    publishedAt: "2026-10-29T12:42:19+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "doordash-to-acquire-instacart-for-17-bil-c310f945",
    title: "DoorDash to acquire Instacart for $17 billion",
    titleJa: "DoorDash to acquire Instacart for $17 billion",
    summaryJa: "The deal unites two delivery giants under one roof, with DoorDash's focus on restaurants and Instacart's robust stable of grocery partners.",
    bodyOriginal: `DoorDash will acquire Instacart for about $17 billion, the companies announced Thursday, uniting two delivery giants under one roof.
DoorDash will pay $65 a share in cash and stock, an 11% premium to Instacart's closing price on Wednesday, and about 26% above Instacart's closing price on Oct. 22, the last trading day before reports of a possible sale.
Shares of DoorDash jumped more than 8% in premarket trading following news of the deal, while Instacart traded near the flatline.
The deal is slated to close at the end of 2027 or early 2028, the companies said. DoorDash expects to retain Instacart's brand, enterprise technology products and app once the deal closes.
DoorDash CEO Tony Xu said in a statement that grocery is "one of the hardest things to get right online." He pointed to difficulties around picking the right inventory and delivering perishable goods to customers' doorsteps without damaging them on the way.
"Instacart has spent years learning to do that well for grocers, while DoorDash has built a delivery network and technology that local stores rely on every day," Xu said. "Together, we could give stores of every size more of those tools and unlock the potential of grocery delivery."
DoorDash reported its third-quarter results alongside the deal announcement. Adjusted earnings per share were $1.06, beating the average analyst estimate of 84 cents per share, according to LSEG. Revenue came in at $4.62 billion, topping LSEG estimates of $4.56 billion.
Speculation of a deal has swirled since last week, when The Information reported Instacart was exploring a sale and had held talks with companies including Uber and DoorDash. On Monday, several outlets reported DoorDash was in advanced discussions to acquire Instacart and that the deal could value Instacart at about $17 billion.
Sources familiar with the matter had told CNBC that the deal could be announced as soon as Thursday morning.
Acquiring Instacart would give DoorDash a bigger presence in online grocery delivery. DoorDash got its start in food delivery, and since then it has added more retailers to its marketplace, such as Sephora, Macy's, Staples and Anthropologie. It's recently made grocery a bigger priority, adding a stable of regional grocers after announcing a partnership with Kroger last year.
Instacart, which went public in 2023, was one of the biggest beneficiaries of a pandemic-driven surge in grocery delivery services, but it has struggled to maintain that momentum. In December Instacart agreed to pay $60 million to settle allegations by the Federal Trade Commission that it misled users with false advertising and deployed "unlawful subscription enrollment" practices.
The service has also faced increasingly stiff competition from companies like Amazon and Walmart. After slowing its brick-and-mortar grocery effort, Amazon has doubled down on its online grocery business and leveraged its vast fulfillment footprint to speed up deliveries of household essentials, pantry staples and perishables.
Both Amazon and Walmart have pushed further into same- and next-day delivery, which poses a threat to Instacart and DoorDash's on-demand delivery model.
Analysts have noted that a potential combination of Instacart and DoorDash could attract antitrust scrutiny given the companies' market overlap.
Third-party delivery platforms "remain a minority of total grocery consumption, but slicing and dicing the online market more narrowly or from a perspective of the grocers as enterprise customers can make approvals more challenging," Wedbush analysts wrote in a Monday research note.`,
    bodyJa: `DoorDash will acquire Instacart for about $17 billion, the companies announced Thursday, uniting two delivery giants under one roof.
DoorDash will pay $65 a share in cash and stock, an 11% premium to Instacart's closing price on Wednesday, and about 26% above Instacart's closing price on Oct. 22, the last trading day before reports of a possible sale.
Shares of DoorDash jumped more than 8% in premarket trading following news of the deal, while Instacart traded near the flatline.
The deal is slated to close at the end of 2027 or early 2028, the companies said. DoorDash expects to retain Instacart's brand, enterprise technology products and app once the deal closes.
DoorDash CEO Tony Xu said in a statement that grocery is "one of the hardest things to get right online." He pointed to difficulties around picking the right inventory and delivering perishable goods to customers' doorsteps without damaging them on the way.
"Instacart has spent years learning to do that well for grocers, while DoorDash has built a delivery network and technology that local stores rely on every day," Xu said. "Together, we could give stores of every size more of those tools and unlock the potential of grocery delivery."
DoorDash reported its third-quarter results alongside the deal announcement. Adjusted earnings per share were $1.06, beating the average analyst estimate of 84 cents per share, according to LSEG. Revenue came in at $4.62 billion, topping LSEG estimates of $4.56 billion.
Speculation of a deal has swirled since last week, when The Information reported Instacart was exploring a sale and had held talks with companies including Uber and DoorDash. On Monday, several outlets reported DoorDash was in advanced discussions to acquire Instacart and that the deal could value Instacart at about $17 billion.
Sources familiar with the matter had told CNBC that the deal could be announced as soon as Thursday morning.
Acquiring Instacart would give DoorDash a bigger presence in online grocery delivery. DoorDash got its start in food delivery, and since then it has added more retailers to its marketplace, such as Sephora, Macy's, Staples and Anthropologie. It's recently made grocery a bigger priority, adding a stable of regional grocers after announcing a partnership with Kroger last year.
Instacart, which went public in 2023, was one of the biggest beneficiaries of a pandemic-driven surge in grocery delivery services, but it has struggled to maintain that momentum. In December Instacart agreed to pay $60 million to settle allegations by the Federal Trade Commission that it misled users with false advertising and deployed "unlawful subscription enrollment" practices.
The service has also faced increasingly stiff competition from companies like Amazon and Walmart. After slowing its brick-and-mortar grocery effort, Amazon has doubled down on its online grocery business and leveraged its vast fulfillment footprint to speed up deliveries of household essentials, pantry staples and perishables.
Both Amazon and Walmart have pushed further into same- and next-day delivery, which poses a threat to Instacart and DoorDash's on-demand delivery model.
Analysts have noted that a potential combination of Instacart and DoorDash could attract antitrust scrutiny given the companies' market overlap.
Third-party delivery platforms "remain a minority of total grocery consumption, but slicing and dicing the online market more narrowly or from a perspective of the grocers as enterprise customers can make approvals more challenging," Wedbush analysts wrote in a Monday research note.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/doordash-instacart-maplebear.html",
    publishedAt: "2026-10-29T12:36:49+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "ai-build-out-hits-snag-as-google-and-mic-a2f100bb",
    title: "AI build-out hits snag as Google and Microsoft put off raising capex forecasts",
    titleJa: "AI build-out hits snag as Google and Microsoft put off raising capex forecasts",
    summaryJa: "Microsoft and Alphabet both reported capital expenditures that fell short of estimates, adding to concern over the cost of the AI build-out.",
    bodyOriginal: `The past few quarters of hyperscaler earnings have been marked by ever-increasing capital expenditure forecasts as tech giants race to build out artificial intelligence infrastructure to meet what they describe as insatiable demand.
At least for the moment, Microsoft and Alphabet are telling a slightly different story.
In their earnings reports Wednesday, both companies shared capex figures that came up shy of analysts' estimates. Microsoft reduced its capex forecast for the year to $170 billion from $175 billion, and Alphabet held its guidance at $195 billion to $205 billion.
The numbers suggest a slowdown is nowhere in sight, but they do represent another potential point of concern for the AI build-out. Shares of neoclouds CoreWeave, Nebius and IREN all dropped after the reports, as did Oracle, which is one of the biggest spenders on AI infrastructure.
Microsoft CFO Amy Hood said on the software company's earnings call that third-party providers of graphics processing units had delays that will push out some available capacity until the first half of 2027. She didn't provide names, but Microsoft relies on CoreWeave, IREN and Nebius, among others.
Anat Ashkenazi, Alphabet's finance chief, told analysts that outside computing power "came online only at the very end of Q3." Alphabet shares tumbled about 10% in extended trading as the company missed on earnings and revenue and reported negative free cash flow of more than $9 billion.
Plenty of Alphabet shareholders remain faithful.
"We are pleased with what we see and what we heard, and trust management's approach to their AI spending," Chris Ballard, managing director of Check Capital Management, wrote in an email to CNBC.
Investors will get a final read on hyperscaler capex for the quarter when Amazon reports results after the close Thursday. In Meta's earnings report last week, the company said it expects full-year capex of $135 billion to $145 billion, raising the bottom of the range from $130 billion. Like with Alphabet, Meta shares sank as the company reported negative free cash flow.
Delays from emerging neocloud partners have occurred before at Microsoft, but they're more critical now as Anthropic gets set to go public. Anthropic counts on infrastructure from Amazon, Google and Microsoft for much of its computing needs, alongside capacity from SpaceX, Lambda and Nscale, which filed to go public in September but hasn't updated its prospectus in weeks.
At times this year, Anthropic's Claude assistant has been unavailable due to climbing demand. Rival OpenAI, which has said an initial public offering in 2027 is likely, is also in constant need of more capacity.
One big challenge for the market is that the neoclouds require billions of dollars in outside capital to fuel their build-outs but don't have investment-grade credit ratings. With interest rates rising and concerns about their debt loads mounting, lenders are pulling out of the market.
Last week, analysts at Gartner shared with CNBC the firm's prediction that, by 2030, 80% of neocloud companies will either be absorbed or completely cease operations. Nvidia-backed neocloud Firmus, based in Australia, withdrew plans to go public earlier this month, despite boasting large usage commitments from Meta and OpenAI.
None of that is to suggest the AI build-out is over, or even close to plateauing.
Microsoft's Hood said Wednesday that she sees capital spending accelerating in the first half of 2027 thanks to higher component costs and the delayed deliveries. As a group, hyperscaler capex is expected to top $1 trillion next year and, according to some estimates, continue rising from there.
Despite the third-quarter capex shortfall, investors cheered Microsoft's report on Wednesday as the company beat earnings and revenue estimates, driven by 48% sales growth in its Azure cloud business.
"We view the quarter as further validation of Microsoft's AI-led growth opportunity," Cantor analysts led by Thomas Blakey wrote in a Wednesday note to clients. They recommend buying Microsoft stock, and they pushed up their one-year price target to $630 from $608.
WATCH: Could be Google's worst earnings reaction as a public company, says Bespoke's Hickey`,
    bodyJa: `The past few quarters of hyperscaler earnings have been marked by ever-increasing capital expenditure forecasts as tech giants race to build out artificial intelligence infrastructure to meet what they describe as insatiable demand.
At least for the moment, Microsoft and Alphabet are telling a slightly different story.
In their earnings reports Wednesday, both companies shared capex figures that came up shy of analysts' estimates. Microsoft reduced its capex forecast for the year to $170 billion from $175 billion, and Alphabet held its guidance at $195 billion to $205 billion.
The numbers suggest a slowdown is nowhere in sight, but they do represent another potential point of concern for the AI build-out. Shares of neoclouds CoreWeave, Nebius and IREN all dropped after the reports, as did Oracle, which is one of the biggest spenders on AI infrastructure.
Microsoft CFO Amy Hood said on the software company's earnings call that third-party providers of graphics processing units had delays that will push out some available capacity until the first half of 2027. She didn't provide names, but Microsoft relies on CoreWeave, IREN and Nebius, among others.
Anat Ashkenazi, Alphabet's finance chief, told analysts that outside computing power "came online only at the very end of Q3." Alphabet shares tumbled about 10% in extended trading as the company missed on earnings and revenue and reported negative free cash flow of more than $9 billion.
Plenty of Alphabet shareholders remain faithful.
"We are pleased with what we see and what we heard, and trust management's approach to their AI spending," Chris Ballard, managing director of Check Capital Management, wrote in an email to CNBC.
Investors will get a final read on hyperscaler capex for the quarter when Amazon reports results after the close Thursday. In Meta's earnings report last week, the company said it expects full-year capex of $135 billion to $145 billion, raising the bottom of the range from $130 billion. Like with Alphabet, Meta shares sank as the company reported negative free cash flow.
Delays from emerging neocloud partners have occurred before at Microsoft, but they're more critical now as Anthropic gets set to go public. Anthropic counts on infrastructure from Amazon, Google and Microsoft for much of its computing needs, alongside capacity from SpaceX, Lambda and Nscale, which filed to go public in September but hasn't updated its prospectus in weeks.
At times this year, Anthropic's Claude assistant has been unavailable due to climbing demand. Rival OpenAI, which has said an initial public offering in 2027 is likely, is also in constant need of more capacity.
One big challenge for the market is that the neoclouds require billions of dollars in outside capital to fuel their build-outs but don't have investment-grade credit ratings. With interest rates rising and concerns about their debt loads mounting, lenders are pulling out of the market.
Last week, analysts at Gartner shared with CNBC the firm's prediction that, by 2030, 80% of neocloud companies will either be absorbed or completely cease operations. Nvidia-backed neocloud Firmus, based in Australia, withdrew plans to go public earlier this month, despite boasting large usage commitments from Meta and OpenAI.
None of that is to suggest the AI build-out is over, or even close to plateauing.
Microsoft's Hood said Wednesday that she sees capital spending accelerating in the first half of 2027 thanks to higher component costs and the delayed deliveries. As a group, hyperscaler capex is expected to top $1 trillion next year and, according to some estimates, continue rising from there.
Despite the third-quarter capex shortfall, investors cheered Microsoft's report on Wednesday as the company beat earnings and revenue estimates, driven by 48% sales growth in its Azure cloud business.
"We view the quarter as further validation of Microsoft's AI-led growth opportunity," Cantor analysts led by Thomas Blakey wrote in a Wednesday note to clients. They recommend buying Microsoft stock, and they pushed up their one-year price target to $630 from $608.
WATCH: Could be Google's worst earnings reaction as a public company, says Bespoke's Hickey`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/microsoft-google-ai-capex-estimates.html",
    publishedAt: "2026-10-29T12:10:29+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "alphabet-earnings-miss-reflects-first-re-9ac7db09",
    title: "Alphabet earnings miss reflects first real sign that AI is taking a bite out of search",
    titleJa: "Alphabet earnings miss reflects first real sign that AI is taking a bite out of search",
    summaryJa: "Wall Street hammered Alphabet for an earnings miss that included weaker-than-expected revenue out of the company's core business.",
    bodyOriginal: `In Alphabet's across-the-board earnings miss, one segment stood out above all else: search.
Revenue in the search and other segment grew 12% from a year ago to roughly $63 billion, but came in below estimates for the second straight quarter. At the same time, Google said search query growth on the platform was the strongest it's been in five years.
The gap between usage and revenue within the search giant's flagship business is becoming harder to dismiss as more people turn to artificial intelligence bots and agents, including tools offered by Google. Since the early days of ChatGPT, analysts have predicted that traditional search will get eclipsed by AI, and warned that Google will have to figure out new ways to make money. While search remains a massive business, early signs of a shift are appearing.
"These things are going to be a force," Deepwater Asset Management's Gene Munster told CNBC's "Fast Money" after the earnings report, referring to new AI-powered services. Munster said that if "personalized bots" take off, "that will become for a lot of people the starting point of commerce, which impacts where Google is."
Alphabet executives said foreign exchange was the biggest factor behind the deceleration in search revenue in the period, and said the currency impact would be even greater in the fourth quarter.
The stock plummeted about 10% in extended trading, reflecting the weaker-than-expected earnings report and negative free cash flow of $9 billion for the quarter, three times the estimated deficit. In the second quarter, Alphabet's free cash flow went negative for the first time in its history as a public company, at $5.9 billion.
Google has spent much of the past year telling investors that it needs to pour money into AI infrastructure and services to meet unending demand from consumers and businesses. Google's Gemini model has allowed the company to stay competitive with Anthropic and OpenAI, and its Gemini-powered enterprise services have proven to be a hit with customers.
The company also says that Gemini is strengthening its core digital ads business, as it uses AI to improve its ability to understand user intent and make advertising more relevant.
“We continue to accelerate the deployment of Gemini models across our entire ads infrastructure to boost performance,” Chief Business Officer Philipp Schindler said on the earnings call.
The company made what Schindler called its “biggest update to product listing ads in a decade” during the third quarter, adding new AI capabilities.
“Overall, AI is accelerating our ads development and drives the majority of our product launches,” Schindler said.
Advertisers are also rapidly adopting AI tools. In the third quarter, Gemini models helped advertisers generate more than 1.5 billion campaign assets, up more than sevenfold from a year earlier, Schindler said.
But none of that addresses revenue growth for search, which slid from 19% in the first quarter to 17% in the second, before falling to 12% in the third.
Analysts at UBS wrote in a note that the results are "going to bring Search cannibalization fears right back to the forefront." And Mizuho analyst Jordan Klein said the numbers are an issue for search and YouTube.
"This elevates the fear around AI and agentic taking share from Search and YT and hurting their AI monetization narrative," Klein wrote in a note after the earnings report.
Cloud gives Alphabet its AI payoff
Where Alphabet's AI bet is very much paying off is in its cloud business.
Revenue in that division, which is racing to catch up to Amazon Web Services and Microsoft Azure, more than doubled in the quarter to nearly $31 billion. Cloud backlog also reached roughly $560 billion, reflecting enormous contracted demand for AI infrastructure. Management said it expects just more than half of that backlog to be recognized over the next 24 months.
In Microsoft's quarterly earnings report, which also landed after the bell Wednesday, the software maker said Azure revenue increased 48% from a year earlier to $33.2 billion.
Cloud demand is a big reason for Alphabet to keep spending.
The company maintained its full-year 2026 capital expenditure forecast of $195 billion to $205 billion and said spending will increase significantly in 2027. Some of that is for its tensor processing units, or TPUs, which compete with Nvidia's graphics processing units. Alphabet just started selling them to outside customers in the second quarter.
Customer agreements first show up in Google Cloud’s backlog, and the company has to spend money building the systems before it can deliver them and recognize the associated revenue.
“You see cash going out and we’re building up the inventory base,” Alphabet CFO Anat Ashkenazi said on the earnings call. “As we start delivering and billing customers for these TPU systems, then you see cash coming in.”
Still, Google has to contend with concerns about its longtime cash cow. Gil Luria, an analyst at D.A. Davidson, said the fears that existed from 2023 to 2025 about the AI effect appear to finally be showing up in Google's business.
"Investors will now worry that the miss in Search, YouTube and Subscription, leading to a profit miss, are an indication that AI has finally come for Google," Luria wrote in an email. "We would not rush to conclusions based on one quarter, but will definitely need to reassess what the world of agentic commerce means for Google."`,
    bodyJa: `In Alphabet's across-the-board earnings miss, one segment stood out above all else: search.
Revenue in the search and other segment grew 12% from a year ago to roughly $63 billion, but came in below estimates for the second straight quarter. At the same time, Google said search query growth on the platform was the strongest it's been in five years.
The gap between usage and revenue within the search giant's flagship business is becoming harder to dismiss as more people turn to artificial intelligence bots and agents, including tools offered by Google. Since the early days of ChatGPT, analysts have predicted that traditional search will get eclipsed by AI, and warned that Google will have to figure out new ways to make money. While search remains a massive business, early signs of a shift are appearing.
"These things are going to be a force," Deepwater Asset Management's Gene Munster told CNBC's "Fast Money" after the earnings report, referring to new AI-powered services. Munster said that if "personalized bots" take off, "that will become for a lot of people the starting point of commerce, which impacts where Google is."
Alphabet executives said foreign exchange was the biggest factor behind the deceleration in search revenue in the period, and said the currency impact would be even greater in the fourth quarter.
The stock plummeted about 10% in extended trading, reflecting the weaker-than-expected earnings report and negative free cash flow of $9 billion for the quarter, three times the estimated deficit. In the second quarter, Alphabet's free cash flow went negative for the first time in its history as a public company, at $5.9 billion.
Google has spent much of the past year telling investors that it needs to pour money into AI infrastructure and services to meet unending demand from consumers and businesses. Google's Gemini model has allowed the company to stay competitive with Anthropic and OpenAI, and its Gemini-powered enterprise services have proven to be a hit with customers.
The company also says that Gemini is strengthening its core digital ads business, as it uses AI to improve its ability to understand user intent and make advertising more relevant.
“We continue to accelerate the deployment of Gemini models across our entire ads infrastructure to boost performance,” Chief Business Officer Philipp Schindler said on the earnings call.
The company made what Schindler called its “biggest update to product listing ads in a decade” during the third quarter, adding new AI capabilities.
“Overall, AI is accelerating our ads development and drives the majority of our product launches,” Schindler said.
Advertisers are also rapidly adopting AI tools. In the third quarter, Gemini models helped advertisers generate more than 1.5 billion campaign assets, up more than sevenfold from a year earlier, Schindler said.
But none of that addresses revenue growth for search, which slid from 19% in the first quarter to 17% in the second, before falling to 12% in the third.
Analysts at UBS wrote in a note that the results are "going to bring Search cannibalization fears right back to the forefront." And Mizuho analyst Jordan Klein said the numbers are an issue for search and YouTube.
"This elevates the fear around AI and agentic taking share from Search and YT and hurting their AI monetization narrative," Klein wrote in a note after the earnings report.
Cloud gives Alphabet its AI payoff
Where Alphabet's AI bet is very much paying off is in its cloud business.
Revenue in that division, which is racing to catch up to Amazon Web Services and Microsoft Azure, more than doubled in the quarter to nearly $31 billion. Cloud backlog also reached roughly $560 billion, reflecting enormous contracted demand for AI infrastructure. Management said it expects just more than half of that backlog to be recognized over the next 24 months.
In Microsoft's quarterly earnings report, which also landed after the bell Wednesday, the software maker said Azure revenue increased 48% from a year earlier to $33.2 billion.
Cloud demand is a big reason for Alphabet to keep spending.
The company maintained its full-year 2026 capital expenditure forecast of $195 billion to $205 billion and said spending will increase significantly in 2027. Some of that is for its tensor processing units, or TPUs, which compete with Nvidia's graphics processing units. Alphabet just started selling them to outside customers in the second quarter.
Customer agreements first show up in Google Cloud’s backlog, and the company has to spend money building the systems before it can deliver them and recognize the associated revenue.
“You see cash going out and we’re building up the inventory base,” Alphabet CFO Anat Ashkenazi said on the earnings call. “As we start delivering and billing customers for these TPU systems, then you see cash coming in.”
Still, Google has to contend with concerns about its longtime cash cow. Gil Luria, an analyst at D.A. Davidson, said the fears that existed from 2023 to 2025 about the AI effect appear to finally be showing up in Google's business.
"Investors will now worry that the miss in Search, YouTube and Subscription, leading to a profit miss, are an indication that AI has finally come for Google," Luria wrote in an email. "We would not rush to conclusions based on one quarter, but will definitely need to reassess what the world of agentic commerce means for Google."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/alphabet-google-search-ai-earnings.html",
    publishedAt: "2026-10-29T12:09:47+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "poundland-s-future-hangs-in-the-balance-61f63433",
    title: "Poundland's future hangs in the balance as chain edges towards collapse",
    titleJa: "Poundland's future hangs in the balance as chain edges towards collapse",
    summaryJa: "Poundland's bosses is filing a notice of intention to appoint administrators to the business.",
    bodyOriginal: `Poundland's future hangs in the balance as chain edges towards collapse
- Published
The future of Poundland hangs in the balance as the discount chain edges towards collapse, the BBC understands.
The retailer's bosses are filing a notice of intention to appoint administrators, which if approved by the High Court, will give the business 10 days breathing space to find a rescue deal.
The move comes after Poundland's managing director Barry Williams wrote a memo to his 12,000 staff across its 600 stores in the UK and Ireland saying the chains' US owner had limited Poundland's access to funding.
It is understood the firm's owner, Gordon Brothers, wants to break up the firm, with rivals Poundstretcher, B&M and Lidl interested in potentially buying up stores.
Gordon Brothers bought Poundland, which had been struggling, from the Polish retail group Pepco in June last year for a nominal £1, but a little over a year later it put the business up for sale.
Irish firm Martin Property Group (MPG) put forward a bid to take the business on as a going concern, which was the preferred option for management, but it is understood this did not meet Gordon Brothers' expectations.
Gordon Brothers wants to recoup a £30m shareholder loan it inherited from the previous owners as part of a its deal, but it is understood the Martin Property Group offer was for £5m, with the rest of the payment deferred.
It means Poundland is now heading towards an insolvency process.
Gordon Brothers could secure a new owner through what is known as a pre-pack administration.
But the most likely option for the business to be broken up and for parcels of stores to be sold.
Poundland was founded in 1990 with a store in Burton-upon-Trent, and has around 20 million customers per year.
It sells low-cost everyday products, general merchandise and fashion on local high streets.
The curious case of why Poundland is struggling during a cost-of-living crisis
- Published21 November 2025
Poundland in rescue talks as owners seek buyer
- Published13 October
A Gordon Brothers insider said breaking the firm up would allow creditors to recover more money, and that this process would ultimately offer the best outcome for staff. The US investment firm's position is that current employees may be able to get employment with new store owners.
If this type of insolvency happens, it would let interested parties firm up offers.
These include Poundstretcher owner, Fortress, which according to one insider is interested in taking on between 200 and 250 stores.
Another large retailer is understood to be interested in buying up more than 100 other sites.
More than half a dozen retailers, include Iceland, Lidl, and B&M, have expressed interest in Poundland's store estate.
Situation 'wholly avoidable'
However, there is a split between the owners and the management running Poundland, who described the situation as "unexpected, unwanted and wholly avoidable".
"As you all know, our sales are strong and our recovery is taking root. This business simply does not deserve to go into any kind of administration," the chain's managing director Williams said in a message to staff this week.
He revealed that Gordon Brothers had limited Poundland's access to funds which help it run its day-to-day business.
"I'm disappointed to have to tell you that Gordon Brothers have given instructions that restricts our access to funds that we would, in normal circumstances expect to access fully under our existing loan agreement," he added.
In the memo, seen by the BBC, Williams said the offer from Martin Property Group was a "fully funded, ready to go bid that would have kept the business intact and able to continue the remarkable progress we've made".
Three independent directors who were appointed earlier this month to help oversee a sale resigned with immediate effect after disagreeing with Gordon Brothers' decision not to accept MPG's solvent offer.
The BBC understands Gordon Brothers has lined up AlixPartners as administrators.
Gordon Brothers previously said while MPG was identified as the "preferred bidder" by Poundland's management team, "attention must now turn to other active bids".
"These options will now be objectively evaluated, with a view to minimising uncertainty for Poundland's people and all relevant stakeholders," it said.
Get in touch
Do you work for Poundland? Share your experience.`,
    bodyJa: `Poundland's future hangs in the balance as chain edges towards collapse
- Published
The future of Poundland hangs in the balance as the discount chain edges towards collapse, the BBC understands.
The retailer's bosses are filing a notice of intention to appoint administrators, which if approved by the High Court, will give the business 10 days breathing space to find a rescue deal.
The move comes after Poundland's managing director Barry Williams wrote a memo to his 12,000 staff across its 600 stores in the UK and Ireland saying the chains' US owner had limited Poundland's access to funding.
It is understood the firm's owner, Gordon Brothers, wants to break up the firm, with rivals Poundstretcher, B&M and Lidl interested in potentially buying up stores.
Gordon Brothers bought Poundland, which had been struggling, from the Polish retail group Pepco in June last year for a nominal £1, but a little over a year later it put the business up for sale.
Irish firm Martin Property Group (MPG) put forward a bid to take the business on as a going concern, which was the preferred option for management, but it is understood this did not meet Gordon Brothers' expectations.
Gordon Brothers wants to recoup a £30m shareholder loan it inherited from the previous owners as part of a its deal, but it is understood the Martin Property Group offer was for £5m, with the rest of the payment deferred.
It means Poundland is now heading towards an insolvency process.
Gordon Brothers could secure a new owner through what is known as a pre-pack administration.
But the most likely option for the business to be broken up and for parcels of stores to be sold.
Poundland was founded in 1990 with a store in Burton-upon-Trent, and has around 20 million customers per year.
It sells low-cost everyday products, general merchandise and fashion on local high streets.
The curious case of why Poundland is struggling during a cost-of-living crisis
- Published21 November 2025
Poundland in rescue talks as owners seek buyer
- Published13 October
A Gordon Brothers insider said breaking the firm up would allow creditors to recover more money, and that this process would ultimately offer the best outcome for staff. The US investment firm's position is that current employees may be able to get employment with new store owners.
If this type of insolvency happens, it would let interested parties firm up offers.
These include Poundstretcher owner, Fortress, which according to one insider is interested in taking on between 200 and 250 stores.
Another large retailer is understood to be interested in buying up more than 100 other sites.
More than half a dozen retailers, include Iceland, Lidl, and B&M, have expressed interest in Poundland's store estate.
Situation 'wholly avoidable'
However, there is a split between the owners and the management running Poundland, who described the situation as "unexpected, unwanted and wholly avoidable".
"As you all know, our sales are strong and our recovery is taking root. This business simply does not deserve to go into any kind of administration," the chain's managing director Williams said in a message to staff this week.
He revealed that Gordon Brothers had limited Poundland's access to funds which help it run its day-to-day business.
"I'm disappointed to have to tell you that Gordon Brothers have given instructions that restricts our access to funds that we would, in normal circumstances expect to access fully under our existing loan agreement," he added.
In the memo, seen by the BBC, Williams said the offer from Martin Property Group was a "fully funded, ready to go bid that would have kept the business intact and able to continue the remarkable progress we've made".
Three independent directors who were appointed earlier this month to help oversee a sale resigned with immediate effect after disagreeing with Gordon Brothers' decision not to accept MPG's solvent offer.
The BBC understands Gordon Brothers has lined up AlixPartners as administrators.
Gordon Brothers previously said while MPG was identified as the "preferred bidder" by Poundland's management team, "attention must now turn to other active bids".
"These options will now be objectively evaluated, with a view to minimising uncertainty for Poundland's people and all relevant stakeholders," it said.
Get in touch
Do you work for Poundland? Share your experience.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqrky1p4dlm7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-29T12:09:14+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cd3d/live/2cdccc40-d378-11f1-bf63-739fb2907d03.jpg",
    readTime: 10,
  },
  {
    id: "hegseth-reportedly-fires-u-s-top-militar-02e0934a",
    title: "Hegseth reportedly fires U.S. top military planner as Trump downplays Iran peace talks",
    titleJa: "Hegseth reportedly fires U.S. top military planner as Trump downplays Iran peace talks",
    summaryJa: "Lieutenant General Brett Sylvia was removed as head of strategy, plans and policy on the Joint Chiefs of Staff.",
    bodyOriginal: `U.S. Defense Secretary Pete Hegseth has reportedly fired the Pentagon's top military planner amid concerns that Washington may restart strikes on Iran after the midterm elections.
Lt. Gen. Brett Sylvia was removed as head of strategy, plans and policy on the Joint Staff, according to the Associated Press. No reason was given for his dismissal, and nobody was named as his replacement. Sylvia has now retired, ABC News reported, citing two people familiar with the matter.
The AP also reported that U.S. officials have told some countries in the Middle East to be prepared for potential renewed military action against Iran after next week's midterm elections, as well as for any Iranian retaliation.
Separately, the Wall Street Journal reported that Vice President JD Vance had sent a letter to Iran "engaging one of Iran's most powerful hard-liners to revive peace negotiations."
Trump downplayed the idea of peace talks, telling reporters, "They need help with medical supplies and various things," adding, "he asked me what I thought. I said, 'If you want to do that, that's OK.'"
On Tehran's part, Iranian Foreign Minister Abbas Araghchi wrote on X late Wednesday that "Iran continues to give diplomacy a chance to succeed."
He said that Iran remains in "close and ongoing contact with intermediaries to review ideas that can ensure implementation of our 7-Day Plan in even less than a week."
The 7-day plan was proposed last month, and Tehran said the Strait of Hormuz could be reopened and normal maritime passage restored if the necessary conditions — which reportedly included ending hostilities and releasing frozen Iranian assets — are met.
Tehran then would reopen the Strait to normal commercial shipping and resume negotiations with Washington.`,
    bodyJa: `U.S. Defense Secretary Pete Hegseth has reportedly fired the Pentagon's top military planner amid concerns that Washington may restart strikes on Iran after the midterm elections.
Lt. Gen. Brett Sylvia was removed as head of strategy, plans and policy on the Joint Staff, according to the Associated Press. No reason was given for his dismissal, and nobody was named as his replacement. Sylvia has now retired, ABC News reported, citing two people familiar with the matter.
The AP also reported that U.S. officials have told some countries in the Middle East to be prepared for potential renewed military action against Iran after next week's midterm elections, as well as for any Iranian retaliation.
Separately, the Wall Street Journal reported that Vice President JD Vance had sent a letter to Iran "engaging one of Iran's most powerful hard-liners to revive peace negotiations."
Trump downplayed the idea of peace talks, telling reporters, "They need help with medical supplies and various things," adding, "he asked me what I thought. I said, 'If you want to do that, that's OK.'"
On Tehran's part, Iranian Foreign Minister Abbas Araghchi wrote on X late Wednesday that "Iran continues to give diplomacy a chance to succeed."
He said that Iran remains in "close and ongoing contact with intermediaries to review ideas that can ensure implementation of our 7-Day Plan in even less than a week."
The 7-day plan was proposed last month, and Tehran said the Strait of Hormuz could be reopened and normal maritime passage restored if the necessary conditions — which reportedly included ending hostilities and releasing frozen Iranian assets — are met.
Tehran then would reopen the Strait to normal commercial shipping and resume negotiations with Washington.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/us-iran-war-trump-hormuz.html",
    publishedAt: "2026-10-29T12:06:03+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "eli-lilly-blows-past-estimates-hikes-sal-f6dc978d",
    title: "Eli Lilly blows past estimates, hikes sales outlook as Zepbound and Mounjaro demand surge again",
    titleJa: "Eli Lilly blows past estimates, hikes sales outlook as Zepbound and Mounjaro demand surge again",
    summaryJa: "Eli Lilly reported that sales of obesity drug Zepbound and diabetes treatment Mounjaro surged again in the third quarter.",
    bodyOriginal: `Eli Lilly on Thursday reported third-quarter earnings and revenue that blew past estimates and hiked its full-year sales outlook, as demand for its blockbuster weight loss drug Zepbound and diabetes treatment Mounjaro soared again.
Despite that strength, sales of its new GLP-1 obesity pill Foundayo, which launched in the U.S. in April, were under Wall Street's expectations for the quarter.
The pharmaceutical giant now expects 2026 revenue to come in between $91 billion and $92 billion, up from a previous guidance of $85 billion to $87 billion.
Lilly projects its full-year adjusted earnings will be between $35 and $36 per share, which compares with a previous outlook of $35.50 to $36.50 per share. The company said it raised the underlying profit guidance by $4.07 per share at the midpoint, but noted that it is offset by $4.57 per share in charges tied to deals in the quarter.
The company's shares rose about 4% in premarket trading.
Tune in at 9 a.m. ET as Eli Lilly CEO David Ricks joins CNBC TV to discuss the company's third-quarter earnings. Watch in real time on CNBC+ or the CNBC Pro stream.
Lilly's massive diabetes and obesity windfall – and market share lead over chief rival Novo – shows no signs of slowing down, even as the company grapples with lower net prices in the U.S. The pharma giant is converting its massive profits into a dealmaking spree, most recently striking an agreement to buy Merida Biosciences to develop a new class of treatments for serious autoimmune and allergic diseases.
Here's what Eli Lilly reported for the third quarter compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $7.48 adjusted vs. $6.26 expected
- Revenue: $24.40 billion vs. $22.61 billion expected
Resilient demand for Zepbound and Mounjaro has helped fuel several strong quarters for Lilly despite lower prices for the medications in the U.S., which came after a drug pricing deal struck with the Trump administration last year. In a release, Lilly also pointed to expanded U.S. coverage for obesity care, referring to Medicare's decision to start covering GLP-1s for weight loss in July under a temporary pilot program.
Mounjaro's worldwide revenue rose 65% to $10.72 billion for the quarter, including U.S. sales of about $5 billion. That surpassed the $10.10 billion in worldwide sales and $4.79 billion in U.S. revenue that analysts were expecting for the quarter, according to StreetAccount.
Mounjaro notably saw strength internationally, with sales outside the U.S. jumping 93%.
Zepbound, which entered the market roughly three years ago, posted $5.35 billion in revenue for the third quarter. That's up 49% from the year-earlier period, as demand for the drug also rose while realized prices dropped. The vast majority of those sales came from the U.S.
Analysts were expecting $5.09 billion in global sales for Zepbound, including $4.99 billion from the U.S., according to StreetAccount.
Lilly's newly launched obesity pill, Foundayo, which won U.S. approval in April, took in $184 million in sales for the third quarter. That fell under analyst forecasts of around $229 million in sales, StreetAccount estimates showed.
It marks the second earnings report that includes revenue from the GLP-1 pill, which is competing head-to-head with a rival oral drug from Novo that launched in January.
Lilly is working to maintain its dominance in the booming market for GLP-1 drugs, with the company holding 63% share of the U.S. obesity and diabetes drug market in the third quarter, according to an earnings presentation on Thursday. Novo's market share in the quarter was 36.6%.
Internationally, Lilly held 58.4% share of the market, while Novo had 41.6%, the presentation said.
Eli Lilly's revenue in the U.S. climbed 34% to $15.1 billion. Lilly said it saw a 41% increase in volume — or the number of prescriptions or units sold — for its products, primarily for Mounjaro and Zepbound. That was partially offset by a 7% decrease in realized prices, primarily driven by Zepbound.
Lilly's quarter was also boosted by a sales-based milestone payout of $410 million for its Type 2 diabetes medication Jardiance, related to the company's collaboration with Boehringer Ingelheim.
Sales outside the U.S. jumped 47% to $9.3 billion, propelled by a 76% surge in volume and partly offset by a 29% drop in realized prices.
The pharmaceutical giant booked net income of $6.45 billion, or $7.22 per share, for the third quarter, which includes the $4.57 per share deal charges. That compares with net income of $5.58 billion, or $6.21 per share, a year earlier.
Excluding one-time items associated with the value of intangible assets and other adjustments, Eli Lilly posted earnings of $7.48 per share for the third quarter.`,
    bodyJa: `Eli Lilly on Thursday reported third-quarter earnings and revenue that blew past estimates and hiked its full-year sales outlook, as demand for its blockbuster weight loss drug Zepbound and diabetes treatment Mounjaro soared again.
Despite that strength, sales of its new GLP-1 obesity pill Foundayo, which launched in the U.S. in April, were under Wall Street's expectations for the quarter.
The pharmaceutical giant now expects 2026 revenue to come in between $91 billion and $92 billion, up from a previous guidance of $85 billion to $87 billion.
Lilly projects its full-year adjusted earnings will be between $35 and $36 per share, which compares with a previous outlook of $35.50 to $36.50 per share. The company said it raised the underlying profit guidance by $4.07 per share at the midpoint, but noted that it is offset by $4.57 per share in charges tied to deals in the quarter.
The company's shares rose about 4% in premarket trading.
Tune in at 9 a.m. ET as Eli Lilly CEO David Ricks joins CNBC TV to discuss the company's third-quarter earnings. Watch in real time on CNBC+ or the CNBC Pro stream.
Lilly's massive diabetes and obesity windfall – and market share lead over chief rival Novo – shows no signs of slowing down, even as the company grapples with lower net prices in the U.S. The pharma giant is converting its massive profits into a dealmaking spree, most recently striking an agreement to buy Merida Biosciences to develop a new class of treatments for serious autoimmune and allergic diseases.
Here's what Eli Lilly reported for the third quarter compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $7.48 adjusted vs. $6.26 expected
- Revenue: $24.40 billion vs. $22.61 billion expected
Resilient demand for Zepbound and Mounjaro has helped fuel several strong quarters for Lilly despite lower prices for the medications in the U.S., which came after a drug pricing deal struck with the Trump administration last year. In a release, Lilly also pointed to expanded U.S. coverage for obesity care, referring to Medicare's decision to start covering GLP-1s for weight loss in July under a temporary pilot program.
Mounjaro's worldwide revenue rose 65% to $10.72 billion for the quarter, including U.S. sales of about $5 billion. That surpassed the $10.10 billion in worldwide sales and $4.79 billion in U.S. revenue that analysts were expecting for the quarter, according to StreetAccount.
Mounjaro notably saw strength internationally, with sales outside the U.S. jumping 93%.
Zepbound, which entered the market roughly three years ago, posted $5.35 billion in revenue for the third quarter. That's up 49% from the year-earlier period, as demand for the drug also rose while realized prices dropped. The vast majority of those sales came from the U.S.
Analysts were expecting $5.09 billion in global sales for Zepbound, including $4.99 billion from the U.S., according to StreetAccount.
Lilly's newly launched obesity pill, Foundayo, which won U.S. approval in April, took in $184 million in sales for the third quarter. That fell under analyst forecasts of around $229 million in sales, StreetAccount estimates showed.
It marks the second earnings report that includes revenue from the GLP-1 pill, which is competing head-to-head with a rival oral drug from Novo that launched in January.
Lilly is working to maintain its dominance in the booming market for GLP-1 drugs, with the company holding 63% share of the U.S. obesity and diabetes drug market in the third quarter, according to an earnings presentation on Thursday. Novo's market share in the quarter was 36.6%.
Internationally, Lilly held 58.4% share of the market, while Novo had 41.6%, the presentation said.
Eli Lilly's revenue in the U.S. climbed 34% to $15.1 billion. Lilly said it saw a 41% increase in volume — or the number of prescriptions or units sold — for its products, primarily for Mounjaro and Zepbound. That was partially offset by a 7% decrease in realized prices, primarily driven by Zepbound.
Lilly's quarter was also boosted by a sales-based milestone payout of $410 million for its Type 2 diabetes medication Jardiance, related to the company's collaboration with Boehringer Ingelheim.
Sales outside the U.S. jumped 47% to $9.3 billion, propelled by a 76% surge in volume and partly offset by a 29% drop in realized prices.
The pharmaceutical giant booked net income of $6.45 billion, or $7.22 per share, for the third quarter, which includes the $4.57 per share deal charges. That compares with net income of $5.58 billion, or $6.21 per share, a year earlier.
Excluding one-time items associated with the value of intangible assets and other adjustments, Eli Lilly posted earnings of $7.48 per share for the third quarter.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/eli-lilly-lly-earnings-q3-2026.html",
    publishedAt: "2026-10-29T11:44:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "over-41-000-u-s-homeland-security-offici-bb6a4ca7",
    title: "Over 41,000 U.S. Homeland Security officials' details apparently exposed after massive data breach",
    titleJa: "Over 41,000 U.S. Homeland Security officials' details apparently exposed after massive data breach",
    summaryJa: "CNBC was able to access the database on the website, and saw it contained names alleged to be of officials, titles, agencies, and offices in cities and states.",
    bodyOriginal: `The identities of over 41,000 officials from the Department of Homeland Security have allegedly been exposed in a massive data breach by a hacktivist group calling itself the Department of Peace.
Late Wednesday stateside, the database was posted on Distributed Denial of Secrets, a nonprofit dedicated to news leaks, with claims that it was obtained from an Okta single sign-on service used by the DHS.
It appears to reveal employee names, offices, contact information and assignments, and is searchable.
Okta didn't immediately respond to a request for comment.
DDoS said that "this is not a comprehensive list of all DHS employees," quoting cofounder Emma Best saying, "Rather than an indiscriminate directory of every DHS employee, Icepick identifies many of the architects and drivers of DHS policy and operations."
DHS didn't immediately respond to a request for comment. The agency told the Washington Post that it was "aware of a potential breach" and was "working to address the situation swiftly and effectively."
The searchable database appears to include employees from Immigration and Customs Enforcement, U.S. Citizenship and Immigration Services, Customs and Border Protection and the DHS headquarters.
The hacker group said the leak was carried out in response to DHS Secretary Markwayne Mullin reportedly saying on July 17 that ICE will be "turning up the heat on the streets" by intensifying immigration arrests and traffic stops.
In U.S. President Donald Trump's second term, the backlash to his efforts to intensify arrests and deportations of suspected illegal immigrants has increased as ICE agents have been documented using physical force during operations.
DHS completed 980,000 deportations in the first 18 months of his term, according to the Migration Policy Institute.`,
    bodyJa: `The identities of over 41,000 officials from the Department of Homeland Security have allegedly been exposed in a massive data breach by a hacktivist group calling itself the Department of Peace.
Late Wednesday stateside, the database was posted on Distributed Denial of Secrets, a nonprofit dedicated to news leaks, with claims that it was obtained from an Okta single sign-on service used by the DHS.
It appears to reveal employee names, offices, contact information and assignments, and is searchable.
Okta didn't immediately respond to a request for comment.
DDoS said that "this is not a comprehensive list of all DHS employees," quoting cofounder Emma Best saying, "Rather than an indiscriminate directory of every DHS employee, Icepick identifies many of the architects and drivers of DHS policy and operations."
DHS didn't immediately respond to a request for comment. The agency told the Washington Post that it was "aware of a potential breach" and was "working to address the situation swiftly and effectively."
The searchable database appears to include employees from Immigration and Customs Enforcement, U.S. Citizenship and Immigration Services, Customs and Border Protection and the DHS headquarters.
The hacker group said the leak was carried out in response to DHS Secretary Markwayne Mullin reportedly saying on July 17 that ICE will be "turning up the heat on the streets" by intensifying immigration arrests and traffic stops.
In U.S. President Donald Trump's second term, the backlash to his efforts to intensify arrests and deportations of suspected illegal immigrants has increased as ICE agents have been documented using physical force during operations.
DHS completed 980,000 deportations in the first 18 months of his term, according to the Migration Policy Institute.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/dhs-data-breach-ice-cdp-deportations.html",
    publishedAt: "2026-10-29T04:29:32+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "trump-methane-policy-rollback-may-have-m-89bcdfc9",
    title: "Trump methane policy rollback may have minimal impact on crude prices, EPA says",
    titleJa: "Trump methane policy rollback may have minimal impact on crude prices, EPA says",
    summaryJa: "The EPA projects Trump’s methane rollback would only lower 2027 U.S. crude prices 11 cents a barrel, while lifting domestic oil output 0.09%.",
    bodyOriginal: `U.S. President Donald Trump's proposed rollback of methane emissions rules would do little to lower oil and natural gas prices, according to the Environmental Protection Agency’s own economic modeling.
Trump and EPA Administrator Lee Zeldin announced the proposal Tuesday in Lubbock, Texas, in a bid to lower regulatory costs and support domestic energy production.
“When owners and operators can produce, America benefits with lower prices,” Zeldin said in EPA’s announcement.
The EPA projects that the changes would lower U.S. crude prices by 11 cents a barrel in 2027, or 0.14%, while increasing domestic oil production by 0.09%. That amounts to roughly one extra barrel for every 1,000 the U.S. would otherwise produce, according to CNBC's calculations.
CLSA energy research analyst Baden Moore said uncertainty over implementation and the policy’s durability across administrations could constrain producers’ investment decisions.
That “limits the upside to current production rates in the near term,” including in 2027, he told CNBC.
He added that the changes could instead slow declines in existing production by allowing some wells to remain operational when environmental compliance costs would otherwise make them uneconomic.
Moore anticipates that the policy would affect only a small proportion of the U.S. shale market.
With CLSA expecting oil prices to remain above $80 a barrel, many wells would already be commercially viable, limiting the number whose continued operation would depend on regulatory relief.
The proposal could help many well operators while having a limited effect on overall supply.
Marginal wells — wells that produce small amounts of oil and gas — account for around 80% of active U.S. wells, but less than 10% of production, according to the International Energy Agency.
EPA proposal rollback
The EPA is considering lighter methane requirements based either on a well site’s production levels or whether it uses conventional or unconventional extraction methods.
The agency would also scrap its Super Emitter Program, which relies on approved third-party monitors to identify major methane releases. Separately, operators could manage gas produced alongside oil through flaring that destroys 95% of the methane.
The EPA projects the proposal would result in an additional 60 million short tons of methane emissions from 2027 through 2050.
The agency told CNBC it estimates the changes would save the U.S. economy about $45 billion over that period, including roughly $42 billion in lower compliance costs.
The EPA also expects operators to capture less gas for sale or use, resulting in about $4.2 billion in lost revenue. That figure is already reflected in its estimate of $42 billion in compliance savings.
This proposal remains subject to the rulemaking process, including a public-comment period and further EPA review, before any changes can be finalized.
It comes as the Trump administration has also moved to ease sanctions on Russian diesel exports as part of efforts to address fuel prices. Energy Secretary Chris Wright told CNBC Tuesday that additional shipments could be permitted depending on Moscow’s actions.`,
    bodyJa: `U.S. President Donald Trump's proposed rollback of methane emissions rules would do little to lower oil and natural gas prices, according to the Environmental Protection Agency’s own economic modeling.
Trump and EPA Administrator Lee Zeldin announced the proposal Tuesday in Lubbock, Texas, in a bid to lower regulatory costs and support domestic energy production.
“When owners and operators can produce, America benefits with lower prices,” Zeldin said in EPA’s announcement.
The EPA projects that the changes would lower U.S. crude prices by 11 cents a barrel in 2027, or 0.14%, while increasing domestic oil production by 0.09%. That amounts to roughly one extra barrel for every 1,000 the U.S. would otherwise produce, according to CNBC's calculations.
CLSA energy research analyst Baden Moore said uncertainty over implementation and the policy’s durability across administrations could constrain producers’ investment decisions.
That “limits the upside to current production rates in the near term,” including in 2027, he told CNBC.
He added that the changes could instead slow declines in existing production by allowing some wells to remain operational when environmental compliance costs would otherwise make them uneconomic.
Moore anticipates that the policy would affect only a small proportion of the U.S. shale market.
With CLSA expecting oil prices to remain above $80 a barrel, many wells would already be commercially viable, limiting the number whose continued operation would depend on regulatory relief.
The proposal could help many well operators while having a limited effect on overall supply.
Marginal wells — wells that produce small amounts of oil and gas — account for around 80% of active U.S. wells, but less than 10% of production, according to the International Energy Agency.
EPA proposal rollback
The EPA is considering lighter methane requirements based either on a well site’s production levels or whether it uses conventional or unconventional extraction methods.
The agency would also scrap its Super Emitter Program, which relies on approved third-party monitors to identify major methane releases. Separately, operators could manage gas produced alongside oil through flaring that destroys 95% of the methane.
The EPA projects the proposal would result in an additional 60 million short tons of methane emissions from 2027 through 2050.
The agency told CNBC it estimates the changes would save the U.S. economy about $45 billion over that period, including roughly $42 billion in lower compliance costs.
The EPA also expects operators to capture less gas for sale or use, resulting in about $4.2 billion in lost revenue. That figure is already reflected in its estimate of $42 billion in compliance savings.
This proposal remains subject to the rulemaking process, including a public-comment period and further EPA review, before any changes can be finalized.
It comes as the Trump administration has also moved to ease sanctions on Russian diesel exports as part of efforts to address fuel prices. Energy Secretary Chris Wright told CNBC Tuesday that additional shipments could be permitted depending on Moscow’s actions.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/trump-methane-rollback-oil-prices-epa.html",
    publishedAt: "2026-10-29T04:00:51+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "samsung-electronics-shares-slid-despite-532a9afe",
    title: "Samsung Electronics shares slid despite record profit in the third-quarter",
    titleJa: "Samsung Electronics shares slid despite record profit in the third-quarter",
    summaryJa: "South Korean tech giant Samsung Electronics on Thursday reported third-quarter operating profit that is broadly in line with analysts' expectations, as demand for advanced memory chips used in artificial intelligence applications continued to grow.",
    bodyOriginal: `South Korean tech giant Samsung Electronics on Thursday reported third-quarter operating profit that is broadly in line with analysts' expectations, as demand for advanced memory chips used in artificial intelligence applications continued to grow.
Following the announcement, Samsung shares were trading 5% lower.
The company plans to increase sales of advanced memory chips used in AI applications and secure long-term contracts to meet growing demand.
Here are Samsung's third-quarter results compared with LSEG SmartEstimates, which are weighted toward forecasts from analysts who are more consistently accurate:
- Revenue: 195.25 trillion won ($124 billion) vs. 195.79 trillion won expected
- Operating profit: 107.44 trillion won vs. 107.66 trillion won expected
Samsung's revenue rose 126.88% year-on-year and 13.85% from the previous quarter, while operating profit rose 783.11% from a year earlier.
The company also announced 30 trillion won in cash dividends for the third quarter, equivalent to 4,601 won per common and preferred share.
The company plans to return another 55 trillion to 75 trillion won to shareholders this year through dividends and share buybacks, as the board will finalize the total shareholder returns and specific execution plans at a meeting scheduled for late January 2027.
Samsung said it became the first global technology company to top 100 trillion won in quarterly operating profit, while posting record revenue and profit for a fourth straight quarter.
Its semiconductor business reported 147.1 trillion won in revenue and 106.5 trillion won in operating profit, driven by strong demand for AI-related memory chips.
Furthermore, its memory business also achieved record quarterly revenue and operating profit, supported by a significant ramp-up in HBM4 sales and growing demand for server solid-state drives.
However, Josh Gilbert, lead analyst for APAC at investment platform eToro, appeared unaroused by the numbers, as the results failing to generate much enthusiasm in the market.
The market still was not impressed.Josh GilbertAPAC Lead Analyst, eToro
"Investors have been so spoilt by the AI trade that a record result is now treated as the bare minimum rather than a reason to celebrate," Gilbert said, adding that Samsung's chip business accounted for nearly all of its operating profit in the third quarter, highlighting its growing reliance on memory chips.
"For all the talk of Samsung being a diversified giant, anyone holding the stock today is really holding a memory maker with a phone business attached," he said, stating that the company's fortunes now depend heavily on memory prices.
Looking ahead, the company expects AI infrastructure investment to accelerate in 2027, with rising demand likely to further tighten memory supply.
Samsung also plans to increase sales of HBM, a type of high-performance memory used in AI chips, along with other memory products used in servers and data storage.
In the third quarter, Samsung Electronics and five of its affiliates had announced a combined $1 billion investment in KKR-backed Helix Digital Infrastructure. Samsung Electronics will invest $500 million, with the remaining amount coming from its affiliates.
The tech giant had also announced a partnership with French AI startup Mistral AI to use AI technologies in its semiconductor operations, including chip design and manufacturing. The company also led Mistral's Series D funding round.`,
    bodyJa: `South Korean tech giant Samsung Electronics on Thursday reported third-quarter operating profit that is broadly in line with analysts' expectations, as demand for advanced memory chips used in artificial intelligence applications continued to grow.
Following the announcement, Samsung shares were trading 5% lower.
The company plans to increase sales of advanced memory chips used in AI applications and secure long-term contracts to meet growing demand.
Here are Samsung's third-quarter results compared with LSEG SmartEstimates, which are weighted toward forecasts from analysts who are more consistently accurate:
- Revenue: 195.25 trillion won ($124 billion) vs. 195.79 trillion won expected
- Operating profit: 107.44 trillion won vs. 107.66 trillion won expected
Samsung's revenue rose 126.88% year-on-year and 13.85% from the previous quarter, while operating profit rose 783.11% from a year earlier.
The company also announced 30 trillion won in cash dividends for the third quarter, equivalent to 4,601 won per common and preferred share.
The company plans to return another 55 trillion to 75 trillion won to shareholders this year through dividends and share buybacks, as the board will finalize the total shareholder returns and specific execution plans at a meeting scheduled for late January 2027.
Samsung said it became the first global technology company to top 100 trillion won in quarterly operating profit, while posting record revenue and profit for a fourth straight quarter.
Its semiconductor business reported 147.1 trillion won in revenue and 106.5 trillion won in operating profit, driven by strong demand for AI-related memory chips.
Furthermore, its memory business also achieved record quarterly revenue and operating profit, supported by a significant ramp-up in HBM4 sales and growing demand for server solid-state drives.
However, Josh Gilbert, lead analyst for APAC at investment platform eToro, appeared unaroused by the numbers, as the results failing to generate much enthusiasm in the market.
The market still was not impressed.Josh GilbertAPAC Lead Analyst, eToro
"Investors have been so spoilt by the AI trade that a record result is now treated as the bare minimum rather than a reason to celebrate," Gilbert said, adding that Samsung's chip business accounted for nearly all of its operating profit in the third quarter, highlighting its growing reliance on memory chips.
"For all the talk of Samsung being a diversified giant, anyone holding the stock today is really holding a memory maker with a phone business attached," he said, stating that the company's fortunes now depend heavily on memory prices.
Looking ahead, the company expects AI infrastructure investment to accelerate in 2027, with rising demand likely to further tighten memory supply.
Samsung also plans to increase sales of HBM, a type of high-performance memory used in AI chips, along with other memory products used in servers and data storage.
In the third quarter, Samsung Electronics and five of its affiliates had announced a combined $1 billion investment in KKR-backed Helix Digital Infrastructure. Samsung Electronics will invest $500 million, with the remaining amount coming from its affiliates.
The tech giant had also announced a partnership with French AI startup Mistral AI to use AI technologies in its semiconductor operations, including chip design and manufacturing. The company also led Mistral's Series D funding round.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/samsung-electronics-third-quarter-earnings.html",
    publishedAt: "2026-10-29T02:49:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "why-alphabet-s-stock-could-see-its-worst-9e813071",
    title: "Why Alphabet’s stock could see its worst drop in years after the latest results",
    titleJa: "Why Alphabet’s stock could see its worst drop in years after the latest results",
    summaryJa: "A doubling of cloud revenue wasn’t enough to appease Wall Street as investors grew more concerned that AI is hurting the company’s ability to make money off search queries.",
    bodyOriginal: `A doubling of cloud revenue wasn’t enough to appease Wall Street as investors grew more concerned that AI is hurting the company’s ability to make money off search queries.`,
    bodyJa: `A doubling of cloud revenue wasn’t enough to appease Wall Street as investors grew more concerned that AI is hurting the company’s ability to make money off search queries.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-alphabets-stock-could-see-its-worst-drop-in-years-after-the-latest-results-6b64cf98?mod=mw_rss_topstories",
    publishedAt: "2026-10-29T01:58:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-69922963",
    readTime: 2,
  },
  {
    id: "i-earn-30-000-i-m-angry-there-was-no-fue-364f404f",
    title: "I earn £30,000. I'm angry there was no fuel duty cut in the Budget",
    titleJa: "I earn £30,000. I'm angry there was no fuel duty cut in the Budget",
    summaryJa: "People on a range of incomes from £4,062 to £150,000 a year tell the BBC what they made of this year's Budget.",
    bodyOriginal: `I earn £30,000. I'm angry there was no fuel duty cut in the Budget
- Published
Chancellor John Healey has unveiled his first Budget.
He announced £100 energy payment for millions and a tax rise on banks, among other measures.
BBC News has been speaking to people on a range of incomes on how they feel about their finances and how the Budget affects them.
Dave Herbert, a professional driver who moves cars between showrooms and does deliveries, says fuel prices have been "crazy" this year.
He spends around £350 a month on petrol for work and personal use. That's 40% to 50% more than at the start of the year, he says.
He has to commute into Cardiff, a 62-mile round trip from his home in Ynysddu. "I'd love to have a hybrid car but even an entry-level used car is too expensive."
The 48-year-old, who is married with a 12-year-old daughter, says he has to find the extra money for fuel "from an already tight budget" and "dreads" filling up at the pump.
The only measure Dave wanted to see was a cut to fuel duty, and he was disappointed this didn't happen.
"I'm pretty angry, really. Nothing has been thrown my way," he says.
The main fuel duty rate has been frozen at 57.95p per litre since March 2011, and it will be frozen again, but Dave says: "It sounds like they're giving us something by keeping it frozen but they're actually still taking it off us."
'I get £4,062 a year. I'm frustrated there's no action on NEETs yet'
Emily Nelson completed her A-levels last year and like thousands of her peers has been unable to find a job since leaving college.
The 19-year-old from Swindon wants to be an animator but in the meantime is applying for retail and sales roles and apprenticeships. Most of the time, she doesn't hear back from potential employers.
"I'm trying my best, it's all you really can do. It's kind of suffocating in a way. You see everyone else managing, and you feel like you're not."
Emily was initially disappointed with the Budget, and then frustrated that the government is waiting for the outcome of a review into youth unemployment before legislating next year.
"I'm glad the government is aware, and that they have a plan," she said. "But it's a bit frustrating that we have to wait a little longer to find out what it is."
However, she adds: "It's not happened today, but it will happen."
She wants to see more funding to businesses so they can take on more young employees. She'd also like to see more money for training and the government's Jobs Guarantee, external scheme extended.
The scheme, being rolled out across England, Scotland and Wales, guarantees fully funded, six-month paid jobs for 18 to 24-year-olds who have been on universal credit and looking for work for 18 months. But Emily thinks people should be eligible after a year.
'I earn £22,000. Cost-of-living help doesn't go far enough'
Robert Portlock, 29, has always lived with his parents in Gateshead and would love to move out. But he doesn't think he can afford to.
Rent would be his biggest concern, he says, explaining that a small flat in his area would cost him about two-thirds of his monthly wage.
"Council tax and energy bills would add to it. Food too. I'd need a TV licence, broadband, my car and some money to socialise. By that point I'd be in the minus."
Robert's biggest expense currently is his car, which he says he needs for his 32-mile round trip to work at Newcastle Airport. But he's paying £750 a month in car finance, insurance, fuel and tax.
The Budget "doesn't go far enough", he says, adding he would have liked to have seen more help with the cost of living, including a cut in fuel duty.
The £100 household energy allowance over a year is less than £10 a month, he says, while action on tariffs on food items will save only £21 a year, or £1.75 per month.
"What am I going to buy with that - a Freddo?"
He would like to get on the housing ladder but for now it feels a distant prospect. The government has announced a scheme to help first-time buyers in England who have a deposit of 2.5%, but Robert says: "Saving for a house is impossible at the moment."
'I earn £41,000. Energy support will definitely help'
Chloe Chin-Saad's husband passed away four years ago and her biggest worry is the cost of living.
She's very grateful that the rent she pays on her south London maisonette is set below the market rate as it is housing association accommodation, but says life was easier when she shared the bills. "Two incomes make a massive difference."
She lives with her 16-year-old son, and says her energy bill has risen sharply over the past year and she now pays about £200 a month on gas and electricity.
"We try to be more aware, we think more about how long we run the hot water when we do the dishes."
Chloe, 40, and her son have cut back on luxuries like going to M&S and the cinema, and she now tries to limit the weekly food shop to £40.
But she can't do anything to reduce her £200 council tax bill, the £250 a month she pays on car finance, or the amount she spends on medicines for her various health conditions, including rheumatoid arthritis.
Two mobile phone bills, and food and pet insurance for her dog also add to her costs. She says the amount she has left over at the end of each month varies, and sometimes she is left with as little as £50.
Chloe says she is "pretty happy" with the Budget, and that "small changes give me hope".
Cutting standing charges on gas, and the £100 household energy payment for households in council tax bands A to D this winter are "definitely going to help", she says.
"It was quite a thoughtful Budget," she adds. "I can see, in years to come, light at the end of the tunnel."
'I earn £150,000. Higher earners like me should've been taxed more'
Jonathan Whitwam, who recently joined the Labour Party, works in finance and says, in addition to his mortgage, his biggest outgoing is supporting his two daughters through university. He and his wife, who live in Essex, pay their rent, which is around £18,000 per year.
His daughters will start their working lives with between £45,000 to £60,000 of debt each, plus interest, which will be compounding at £5,000 to £8,000 per year.
"I have no objection to paying for degrees as I think they are a great way of broadening horizons and having great life experience. But I think the interest should be waived or capped below 1%, otherwise it's a noose around their neck for a substantial part of their lifetime."
Jonathan, 52, says the Budget was "very safe", reducing energy costs for his household by getting rid of standing charges, while cutting bills for many people this winter.
However, he wanted taxes to be put up for higher earners like himself in the name of "redistribution" and says there was "nothing" in the Budget on that.
"If we want better roads, hospitals, schools we need to raise more tax," he adds.
'I have a £15,000 pension. I'm even Stevens after the Budget'
Christine Morris, from Worksop, has been retired for eight years and lives on a state pension combined with a small private pension her late husband left her.
"It is very difficult to balance the books," the 78-year-old says. "I do go on holiday, but I'm spending more of my savings to live."
The chancellor said standing charges would be removed from gas bills, but Christine, who has a gas boiler, says it's not clear yet whether she will benefit, because those costs will be added on to the unit rate.
However, she says the £100 household energy payment will help over the winter
"I'm not sure I'll be better off," she says. Instead she thinks she will be "even Stevens".
She was unconvinced by Andy Burnham's pledge to end the triple lock so that from 2030 the state pension will rise at least by inflation or 2.5%, with the money saved used to create a free-at-the-point of use national care service for England sometime "in the next parliament".
Christine thinks the new service will take time to come in. In the meantime, she fears she will "get less pension and still have to pay out the same for any care I need".
Get in touch
What are you hoping for from the Budget? What questions do you have?
- Published2 days ago
- Published5 days ago`,
    bodyJa: `I earn £30,000. I'm angry there was no fuel duty cut in the Budget
- Published
Chancellor John Healey has unveiled his first Budget.
He announced £100 energy payment for millions and a tax rise on banks, among other measures.
BBC News has been speaking to people on a range of incomes on how they feel about their finances and how the Budget affects them.
Dave Herbert, a professional driver who moves cars between showrooms and does deliveries, says fuel prices have been "crazy" this year.
He spends around £350 a month on petrol for work and personal use. That's 40% to 50% more than at the start of the year, he says.
He has to commute into Cardiff, a 62-mile round trip from his home in Ynysddu. "I'd love to have a hybrid car but even an entry-level used car is too expensive."
The 48-year-old, who is married with a 12-year-old daughter, says he has to find the extra money for fuel "from an already tight budget" and "dreads" filling up at the pump.
The only measure Dave wanted to see was a cut to fuel duty, and he was disappointed this didn't happen.
"I'm pretty angry, really. Nothing has been thrown my way," he says.
The main fuel duty rate has been frozen at 57.95p per litre since March 2011, and it will be frozen again, but Dave says: "It sounds like they're giving us something by keeping it frozen but they're actually still taking it off us."
'I get £4,062 a year. I'm frustrated there's no action on NEETs yet'
Emily Nelson completed her A-levels last year and like thousands of her peers has been unable to find a job since leaving college.
The 19-year-old from Swindon wants to be an animator but in the meantime is applying for retail and sales roles and apprenticeships. Most of the time, she doesn't hear back from potential employers.
"I'm trying my best, it's all you really can do. It's kind of suffocating in a way. You see everyone else managing, and you feel like you're not."
Emily was initially disappointed with the Budget, and then frustrated that the government is waiting for the outcome of a review into youth unemployment before legislating next year.
"I'm glad the government is aware, and that they have a plan," she said. "But it's a bit frustrating that we have to wait a little longer to find out what it is."
However, she adds: "It's not happened today, but it will happen."
She wants to see more funding to businesses so they can take on more young employees. She'd also like to see more money for training and the government's Jobs Guarantee, external scheme extended.
The scheme, being rolled out across England, Scotland and Wales, guarantees fully funded, six-month paid jobs for 18 to 24-year-olds who have been on universal credit and looking for work for 18 months. But Emily thinks people should be eligible after a year.
'I earn £22,000. Cost-of-living help doesn't go far enough'
Robert Portlock, 29, has always lived with his parents in Gateshead and would love to move out. But he doesn't think he can afford to.
Rent would be his biggest concern, he says, explaining that a small flat in his area would cost him about two-thirds of his monthly wage.
"Council tax and energy bills would add to it. Food too. I'd need a TV licence, broadband, my car and some money to socialise. By that point I'd be in the minus."
Robert's biggest expense currently is his car, which he says he needs for his 32-mile round trip to work at Newcastle Airport. But he's paying £750 a month in car finance, insurance, fuel and tax.
The Budget "doesn't go far enough", he says, adding he would have liked to have seen more help with the cost of living, including a cut in fuel duty.
The £100 household energy allowance over a year is less than £10 a month, he says, while action on tariffs on food items will save only £21 a year, or £1.75 per month.
"What am I going to buy with that - a Freddo?"
He would like to get on the housing ladder but for now it feels a distant prospect. The government has announced a scheme to help first-time buyers in England who have a deposit of 2.5%, but Robert says: "Saving for a house is impossible at the moment."
'I earn £41,000. Energy support will definitely help'
Chloe Chin-Saad's husband passed away four years ago and her biggest worry is the cost of living.
She's very grateful that the rent she pays on her south London maisonette is set below the market rate as it is housing association accommodation, but says life was easier when she shared the bills. "Two incomes make a massive difference."
She lives with her 16-year-old son, and says her energy bill has risen sharply over the past year and she now pays about £200 a month on gas and electricity.
"We try to be more aware, we think more about how long we run the hot water when we do the dishes."
Chloe, 40, and her son have cut back on luxuries like going to M&S and the cinema, and she now tries to limit the weekly food shop to £40.
But she can't do anything to reduce her £200 council tax bill, the £250 a month she pays on car finance, or the amount she spends on medicines for her various health conditions, including rheumatoid arthritis.
Two mobile phone bills, and food and pet insurance for her dog also add to her costs. She says the amount she has left over at the end of each month varies, and sometimes she is left with as little as £50.
Chloe says she is "pretty happy" with the Budget, and that "small changes give me hope".
Cutting standing charges on gas, and the £100 household energy payment for households in council tax bands A to D this winter are "definitely going to help", she says.
"It was quite a thoughtful Budget," she adds. "I can see, in years to come, light at the end of the tunnel."
'I earn £150,000. Higher earners like me should've been taxed more'
Jonathan Whitwam, who recently joined the Labour Party, works in finance and says, in addition to his mortgage, his biggest outgoing is supporting his two daughters through university. He and his wife, who live in Essex, pay their rent, which is around £18,000 per year.
His daughters will start their working lives with between £45,000 to £60,000 of debt each, plus interest, which will be compounding at £5,000 to £8,000 per year.
"I have no objection to paying for degrees as I think they are a great way of broadening horizons and having great life experience. But I think the interest should be waived or capped below 1%, otherwise it's a noose around their neck for a substantial part of their lifetime."
Jonathan, 52, says the Budget was "very safe", reducing energy costs for his household by getting rid of standing charges, while cutting bills for many people this winter.
However, he wanted taxes to be put up for higher earners like himself in the name of "redistribution" and says there was "nothing" in the Budget on that.
"If we want better roads, hospitals, schools we need to raise more tax," he adds.
'I have a £15,000 pension. I'm even Stevens after the Budget'
Christine Morris, from Worksop, has been retired for eight years and lives on a state pension combined with a small private pension her late husband left her.
"It is very difficult to balance the books," the 78-year-old says. "I do go on holiday, but I'm spending more of my savings to live."
The chancellor said standing charges would be removed from gas bills, but Christine, who has a gas boiler, says it's not clear yet whether she will benefit, because those costs will be added on to the unit rate.
However, she says the £100 household energy payment will help over the winter
"I'm not sure I'll be better off," she says. Instead she thinks she will be "even Stevens".
She was unconvinced by Andy Burnham's pledge to end the triple lock so that from 2030 the state pension will rise at least by inflation or 2.5%, with the money saved used to create a free-at-the-point of use national care service for England sometime "in the next parliament".
Christine thinks the new service will take time to come in. In the meantime, she fears she will "get less pension and still have to pay out the same for any care I need".
Get in touch
What are you hoping for from the Budget? What questions do you have?
- Published2 days ago
- Published5 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmx235r9wr3yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-29T00:00:25+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5570/live/b5261da0-d304-11f1-a9bf-3316693f55f0.jpg",
    readTime: 10,
  },
  {
    id: "i-live-with-a-ghost-japan-s-haunted-hom-4d30f1e3",
    title: "'I live with a ghost': Japan's haunted homes attract bargain hunters",
    titleJa: "'I live with a ghost': Japan's haunted homes attract bargain hunters",
    summaryJa: "Properties where someone has died in tragic circumstances can have big reductions in price.",
    bodyOriginal: `'I live with a ghost': Japan's haunted homes attract bargain hunters
- Published
From the moment Ryua first walked into her rental apartment in Tokyo she believed it to be haunted.
"When I visited the place for a viewing there was a man standing there, glaring at me," she says.
"Since the estate agent couldn't see him, I realised he must be a ghost."
While someone more squeamish would probably have quickly left the flat never to return, Ryua chose to go ahead and move in.
"I'm a bit of a contrarian, so I decided I wanted to become friends with this glaring male ghost," adds Ryua, who works as an aidoru, a young entertainer, and who doesn't wish to share her surname.
Four years later, and still in the same apartment, she says she continues to experience paranormal activity on a daily basis. She says she hears endless footsteps and the ghost talking.
Although Japan has increasingly marked Halloween, external in recent years, many Japanese people take ghosts seriously all year round. The country has a word, "yuurei", which means a lingering, troubled spirit.
These are the ghosts of people who died in violent or tragic circumstances - those who were murdered, killed themselves, or simply were lonely and died alone. If they died at home, then the belief is that their yuurei won't go away.
For house hunters who are not superstitious or squeamish it means there are big bargains to be found. There is a whole category of dwellings called jiko bukken, which means "stigmatised" or "incident" properties.
Under guidelines issued by the government in 2021, Japanese estate agents must disclose suicide, murder, death by fire, and any death where the body was not discovered for an extended period of time.
For rental properties this information must be disclosed for three years, and it must be revealed indefinitely for any property offered for sale.
By contrast, in the UK there is no legal requirement, external to reveal that a person died in a property. And in the US, it differs from state to state., external For example, in California you have to reveal if a person has died in the property in the past three years, while in Arizona and Oregon you do not.
Ryua was told that a man had killed himself in her apartment. It meant that she gets an almost 30% discount on her rent on her tiny, 25 sq m bedsit in the fashionable ward of Setagaya. She says she pays 45,000 yen ($285; £213) a month, instead of what should have been 62,000 yen.
While a house where there had been a murder or suicide would probably be harder to sell or rent out anywhere in the world, Tokyo estate agent Erik Oskamp says that Japanese people are particularly superstitious and averse to stigmatised properties.
"[Even] an apartment next to a cemetery will be difficult to rent out, especially if you can see the tombs from the kitchen," explains Oskamp. "The worst thing is if a suicide has happened in the apartment. Even if somebody has jumped from the roof, many renters will move out. Other issues are a serious crime or a lonely death."
The latter issue, that of a person dying alone, would not generally affect the price of a property in, say, the UK or the US.
But in rural Kagoshima, in Japan's southwest, it enabled Diane Tincher to buy a large three-bedroom house for about half of what would have otherwise been the asking price.
'If there is a ghost I'm thankful to her'
The 79-year-old American has lived in Japan for nearly 40 years, working as a tour guide. She says that the estate agent had been straight with her – there was a heavy discount as an elderly lady had died alone, thereby stigmatising the property.
Tincher paid 20m yen for the house, in a location where similar properties usually sell for up to 45m yen.
"I don't believe in ghosts. But I know that the Japanese are very superstitious," she says. "If there is a ghost I'm thankful to her every day... to live in such a splendid and affordable home."
Researching the house, Tincher had found it on a website called Oshimaland, which lists jiko bukken properties, giving details of the events that occurred. It was launched in 2005 covering Tokyo, before expanding across Japan and then internationally in 2011.
It is crowdsourced, meaning that members of the public add the homes and their details.
Teru Oshima, the founder of Oshimaland, says that in the past such properties were "not very attractive options" in Japan.
Yet as house prices have surged in the country in recent years, as well as a big increase in the wider cost of living, one 2025 survey found that more than half of Japanese people would now rent a jiko bukken if it was cheap., external
Back in Setagaya, Ryua says she is happy living with her ghostly flatmate. "I believe that ghosts were once living human beings, so they deserve our respect," she says.
For support and more information on any of the topics raised in this article, help is available on the BBC Action Line.
- Published13 October
- Published29 September
- Published7 days ago`,
    bodyJa: `'I live with a ghost': Japan's haunted homes attract bargain hunters
- Published
From the moment Ryua first walked into her rental apartment in Tokyo she believed it to be haunted.
"When I visited the place for a viewing there was a man standing there, glaring at me," she says.
"Since the estate agent couldn't see him, I realised he must be a ghost."
While someone more squeamish would probably have quickly left the flat never to return, Ryua chose to go ahead and move in.
"I'm a bit of a contrarian, so I decided I wanted to become friends with this glaring male ghost," adds Ryua, who works as an aidoru, a young entertainer, and who doesn't wish to share her surname.
Four years later, and still in the same apartment, she says she continues to experience paranormal activity on a daily basis. She says she hears endless footsteps and the ghost talking.
Although Japan has increasingly marked Halloween, external in recent years, many Japanese people take ghosts seriously all year round. The country has a word, "yuurei", which means a lingering, troubled spirit.
These are the ghosts of people who died in violent or tragic circumstances - those who were murdered, killed themselves, or simply were lonely and died alone. If they died at home, then the belief is that their yuurei won't go away.
For house hunters who are not superstitious or squeamish it means there are big bargains to be found. There is a whole category of dwellings called jiko bukken, which means "stigmatised" or "incident" properties.
Under guidelines issued by the government in 2021, Japanese estate agents must disclose suicide, murder, death by fire, and any death where the body was not discovered for an extended period of time.
For rental properties this information must be disclosed for three years, and it must be revealed indefinitely for any property offered for sale.
By contrast, in the UK there is no legal requirement, external to reveal that a person died in a property. And in the US, it differs from state to state., external For example, in California you have to reveal if a person has died in the property in the past three years, while in Arizona and Oregon you do not.
Ryua was told that a man had killed himself in her apartment. It meant that she gets an almost 30% discount on her rent on her tiny, 25 sq m bedsit in the fashionable ward of Setagaya. She says she pays 45,000 yen ($285; £213) a month, instead of what should have been 62,000 yen.
While a house where there had been a murder or suicide would probably be harder to sell or rent out anywhere in the world, Tokyo estate agent Erik Oskamp says that Japanese people are particularly superstitious and averse to stigmatised properties.
"[Even] an apartment next to a cemetery will be difficult to rent out, especially if you can see the tombs from the kitchen," explains Oskamp. "The worst thing is if a suicide has happened in the apartment. Even if somebody has jumped from the roof, many renters will move out. Other issues are a serious crime or a lonely death."
The latter issue, that of a person dying alone, would not generally affect the price of a property in, say, the UK or the US.
But in rural Kagoshima, in Japan's southwest, it enabled Diane Tincher to buy a large three-bedroom house for about half of what would have otherwise been the asking price.
'If there is a ghost I'm thankful to her'
The 79-year-old American has lived in Japan for nearly 40 years, working as a tour guide. She says that the estate agent had been straight with her – there was a heavy discount as an elderly lady had died alone, thereby stigmatising the property.
Tincher paid 20m yen for the house, in a location where similar properties usually sell for up to 45m yen.
"I don't believe in ghosts. But I know that the Japanese are very superstitious," she says. "If there is a ghost I'm thankful to her every day... to live in such a splendid and affordable home."
Researching the house, Tincher had found it on a website called Oshimaland, which lists jiko bukken properties, giving details of the events that occurred. It was launched in 2005 covering Tokyo, before expanding across Japan and then internationally in 2011.
It is crowdsourced, meaning that members of the public add the homes and their details.
Teru Oshima, the founder of Oshimaland, says that in the past such properties were "not very attractive options" in Japan.
Yet as house prices have surged in the country in recent years, as well as a big increase in the wider cost of living, one 2025 survey found that more than half of Japanese people would now rent a jiko bukken if it was cheap., external
Back in Setagaya, Ryua says she is happy living with her ghostly flatmate. "I believe that ghosts were once living human beings, so they deserve our respect," she says.
For support and more information on any of the topics raised in this article, help is available on the BBC Action Line.
- Published13 October
- Published29 September
- Published7 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqwy78elyrlzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-29T00:00:15+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5c40/live/5436ab40-cc8d-11f1-bed8-c51b95c602ec.jpg",
    readTime: 10,
  },
  {
    id: "as-waymo-expands-overseas-it-remains-a-n-b0d30a01",
    title: "As Waymo expands overseas, it remains a niche cash-burning business",
    titleJa: "As Waymo expands overseas, it remains a niche cash-burning business",
    summaryJa: "Alphabet's Other Bets segment, which includes Waymo, accounted for 0.3% of total revenue in the quarter.",
    bodyOriginal: `Waymo is dominant in the U.S. and expanding overseas, but it remains immaterial in terms of revenue to parent Alphabet, which is pouring cash into its growth.
In Alphabet's third-quarter earnings report on Wednesday, the company said its Other Bets segment, which includes Waymo, generated $372 million in revenue, up 8% from a year earlier, and accounting for just 0.3% of total sales.
That revenue comes at a steep price. Operating loss in the Other Bets segment widened to $2.05 billion during the quarter from $1.43 billion a year ago. The unit also houses drug design research business Isomorphic, which is using Google's Gemini 4 Argon AI models.
CEO Sundar Pichai touted Waymo's expansion toward the end of his introductory remarks on the earnings call. The company has a commanding lead in the U.S. robotaxi market, where it faces emerging competition from Amazon's Zoox and Tesla. Waymo said in August that it plans to roll out robotaxi rides in Germany in 2027, marking its third international market and first in the EU.
"Waymo now operates in 15 major U.S. cities and just recently opened up service to the public in San Antonio, San Diego and Tampa with planned expansions into Canada, Germany, Singapore and Spain," Pichai said on the call.
Waymo's steepest competition on the global stage comes from Baidu's Apollo Go, which is based in China.
For years, Alphabet was able to operate Waymo as a side project while its core online ads business racked up tens of billions of dollars in annual profit and threw off mounds of cash. But with the company now investing heavily in artificial intelligence, free cash flow has turned negative and Wall Street has shown signs of concern.
Alphabet reported an earnings and revenue miss on Wednesday, sending the stock down almost 10% in extended trading. The company maintained its full-year capital expenditures forecast at between $195 billion and $205 billion, largely for AI infrastructure, and reported negative free cash flow of over $9 billion for the quarter.
Earlier this month, Waymo announced that it had closed a $5 billion term loan, its first debt financing. In February, the robotaxi business announced that it had raised $16 billion at a $126 billion valuation in a funding round led by Alphabet that included support from Andreessen Horowitz, Fidelity, T. Rowe Price, Sequoia Capital, Kleiner Perkins and others.
Last week Waymo started offering driverless rides to and from the Las Vegas airport, after previously announcing airport service in five other cities, including San Francisco and Phoenix.
"Waymo is on a great trajectory," Pichai said on Wednesday. "We have now driven more than 300 million fully autonomous miles."
Tesla says on its website that driverless vehicles in its Robotaxi network have completed about 3.8 million miles "unsupervised," or without a human driver at the wheel. CEO Elon Musk said on the company's earnings call last week that the Robotaxi business should become a "meaningful" revenue contributor by the second half of 2027.`,
    bodyJa: `Waymo is dominant in the U.S. and expanding overseas, but it remains immaterial in terms of revenue to parent Alphabet, which is pouring cash into its growth.
In Alphabet's third-quarter earnings report on Wednesday, the company said its Other Bets segment, which includes Waymo, generated $372 million in revenue, up 8% from a year earlier, and accounting for just 0.3% of total sales.
That revenue comes at a steep price. Operating loss in the Other Bets segment widened to $2.05 billion during the quarter from $1.43 billion a year ago. The unit also houses drug design research business Isomorphic, which is using Google's Gemini 4 Argon AI models.
CEO Sundar Pichai touted Waymo's expansion toward the end of his introductory remarks on the earnings call. The company has a commanding lead in the U.S. robotaxi market, where it faces emerging competition from Amazon's Zoox and Tesla. Waymo said in August that it plans to roll out robotaxi rides in Germany in 2027, marking its third international market and first in the EU.
"Waymo now operates in 15 major U.S. cities and just recently opened up service to the public in San Antonio, San Diego and Tampa with planned expansions into Canada, Germany, Singapore and Spain," Pichai said on the call.
Waymo's steepest competition on the global stage comes from Baidu's Apollo Go, which is based in China.
For years, Alphabet was able to operate Waymo as a side project while its core online ads business racked up tens of billions of dollars in annual profit and threw off mounds of cash. But with the company now investing heavily in artificial intelligence, free cash flow has turned negative and Wall Street has shown signs of concern.
Alphabet reported an earnings and revenue miss on Wednesday, sending the stock down almost 10% in extended trading. The company maintained its full-year capital expenditures forecast at between $195 billion and $205 billion, largely for AI infrastructure, and reported negative free cash flow of over $9 billion for the quarter.
Earlier this month, Waymo announced that it had closed a $5 billion term loan, its first debt financing. In February, the robotaxi business announced that it had raised $16 billion at a $126 billion valuation in a funding round led by Alphabet that included support from Andreessen Horowitz, Fidelity, T. Rowe Price, Sequoia Capital, Kleiner Perkins and others.
Last week Waymo started offering driverless rides to and from the Las Vegas airport, after previously announcing airport service in five other cities, including San Francisco and Phoenix.
"Waymo is on a great trajectory," Pichai said on Wednesday. "We have now driven more than 300 million fully autonomous miles."
Tesla says on its website that driverless vehicles in its Robotaxi network have completed about 3.8 million miles "unsupervised," or without a human driver at the wheel. CEO Elon Musk said on the company's earnings call last week that the Robotaxi business should become a "meaningful" revenue contributor by the second half of 2027.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/as-waymo-expands-overseas-it-remains-a-niche-cash-burning-business.html",
    publishedAt: "2026-10-28T23:53:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "microsoft-stock-jumps-4-as-cloud-growth-aedecf50",
    title: "Microsoft stock jumps 4% as cloud growth drives earnings and revenue beat",
    titleJa: "Microsoft stock jumps 4% as cloud growth drives earnings and revenue beat",
    summaryJa: "Microsoft reported better-than-expected results driven by 48% growth in Azure revenue.",
    bodyOriginal: `Microsoft shares rose 4% in extended trading on Wednesday after the company reported better-than-expected quarterly results, driven by 48% growth in its Azure cloud infrastructure business.
Here's how the company fared relative to LSEG consensus:
- Earnings per share: $4.89 adjusted vs. $4.73 expected
- Revenue: $92.28 billion vs. $90.69 billion expected
Microsoft's revenue grew 19% year over year in the quarter, which ended on Sept. 30, according to a statement, with Azure now its biggest single business.
The software giant has been rapidly building out data center infrastructure to meet artificial intelligence demand, while also maintaining positive free cash flow unlike its fellow hyperscalers. Microsoft reported $45.2 billion worth of capital expenditures and finance leases during the quarter, up about 30% from a year earlier. Analysts surveyed by StreetAccount had projected $50.67 billion.
With respect to guidance, Microsoft called for $96 billion to $97.1 billion in fiscal second-quarter revenue, which works out to 18.8% growth at the middle of the range. Analysts polled by LSEG had predicted $95.60 billion in revenue.
For Azure, Hood said she anticipates 49% to 50% growth at constant currency for the fiscal second quarter, compared with the 45.1% StreetAccount consensus.
"We still have demand that exceeds supply," she said.
During the fiscal first quarter, Microsoft flagged a higher growth rate for cash paid for property and equipment than overall capital expenditures, which include finance leases. "Some third-party capacity deliveries we expected in Q1 were delayed," the company's finance chief, Amy Hood, said on a conference call with analysts.
Around 75% of capital expenditures are now tied to short-lived assets such as Intel chips and Nvidia graphics processing units, up from about 66% in the past three quarters and half in the year-ago quarter. The shift indicates Microsoft's prioritization of infrastructure it can can quickly turn into revenue.
Hood said the company is aiming at over $50 billion in fiscal second-quarter capital expenditures and finance leases, above the StreetAccount consensus of $53.10 billion, with $170 billion for all of calendar 2027 because of the capacity issues.
"In the second half of the fiscal year, we currently expect capex spend to accelerate primarily from CPUs, inclusive of higher memory and storage costs, and GPUs, as well as the 3P capacity deliveries that shifted to H2," she said.
Free cash flow for the fiscal first quarter declined 27% to $18.63 billion. Cloud rival Alphabet reported more than $9 billion in negative free cash flow in the quarter after Meta said last week its cash flow turned negative for the first time.
Microsoft will continue to generate free cash flow through the 2027 fiscal year, but the company will access additional sources of funding when it's attractive to do so, Hood said.
"We're fortunate to have access in the debt markets, given where our rates ratings are, and sort of we haven't been able to — we haven't yet, I would say, tapped that," she said. "And then, of course, there's other options."
Microsoft's net income increased to $36.63 billion, or $4.92 per share, from $27.75 billion, or $3.72 per share, a year ago. Adjusted earnings exclude a roughly $200 million loss on its investment in OpenAI.
For the first time, Microsoft disclosed revenue from its Azure cloud in dollars, at $33.17 billion in the quarter, despite the delays from third-party providers.
Analysts polled by StreetAccount expected $32.32 billion. The growth rate in the June quarter was 42%.
Microsoft reported results under two operating segments — Agents and Infra, and Devices and Consumer. For the past 11 years, the company had three segments that divided up its Azure, Office and Windows businesses.
In Agents and Infra, revenue rose almost 25% to $76.8 billion, more than the $75.63 billion consensus among analysts polled by StreetAccount. The segment contains Azure, along with Microsoft 365 cloud products, productivity and server licensing, industry solutions and frontier and support services.
The number of people using the Microsoft 365 Copilot AI assistant is up 50% from last quarter, CEO Satya Nadella said on the call. The company did not disclose the number of paid seats. The recently announced high-end Microsoft 365 E7 productivity bundle now has millions of seats, Hood said.
Revenue in the Devices and Consumer business slipped 3% to $15.48 billion, beating the StreetAccount consensus of $15.05 billion. The unit includes search and advertising, Xbox, devices and Windows operating system licenses sold to device makers.
Sales of devices and Windows licenses declined 22%, as higher memory and storage costs elevated prices. The company pointed to the end of support for Windows 10 last year and weak PC demand.
As of Wednesday's close, Microsoft shares were up about 10% year to date, trailing the S&P 500 index, which has gained 13% over the same period.
During the fiscal first quarter, Microsoft said it would cut 4,800 jobs, and followed up by announcing on Monday that it's offering buyouts to up to 60,000 employees, as it strives to balance a costly AI build-out with capital efficiency. Microsoft also established, during the quarter, an AI implementation unit and revealed a Copilot AI "super app" with coding abilities.
Executives will discuss the results with analysts and issue guidance on a conference call starting at 5:30 p.m. ET.
This story is developing. Please check back for updates.`,
    bodyJa: `Microsoft shares rose 4% in extended trading on Wednesday after the company reported better-than-expected quarterly results, driven by 48% growth in its Azure cloud infrastructure business.
Here's how the company fared relative to LSEG consensus:
- Earnings per share: $4.89 adjusted vs. $4.73 expected
- Revenue: $92.28 billion vs. $90.69 billion expected
Microsoft's revenue grew 19% year over year in the quarter, which ended on Sept. 30, according to a statement, with Azure now its biggest single business.
The software giant has been rapidly building out data center infrastructure to meet artificial intelligence demand, while also maintaining positive free cash flow unlike its fellow hyperscalers. Microsoft reported $45.2 billion worth of capital expenditures and finance leases during the quarter, up about 30% from a year earlier. Analysts surveyed by StreetAccount had projected $50.67 billion.
With respect to guidance, Microsoft called for $96 billion to $97.1 billion in fiscal second-quarter revenue, which works out to 18.8% growth at the middle of the range. Analysts polled by LSEG had predicted $95.60 billion in revenue.
For Azure, Hood said she anticipates 49% to 50% growth at constant currency for the fiscal second quarter, compared with the 45.1% StreetAccount consensus.
"We still have demand that exceeds supply," she said.
During the fiscal first quarter, Microsoft flagged a higher growth rate for cash paid for property and equipment than overall capital expenditures, which include finance leases. "Some third-party capacity deliveries we expected in Q1 were delayed," the company's finance chief, Amy Hood, said on a conference call with analysts.
Around 75% of capital expenditures are now tied to short-lived assets such as Intel chips and Nvidia graphics processing units, up from about 66% in the past three quarters and half in the year-ago quarter. The shift indicates Microsoft's prioritization of infrastructure it can can quickly turn into revenue.
Hood said the company is aiming at over $50 billion in fiscal second-quarter capital expenditures and finance leases, above the StreetAccount consensus of $53.10 billion, with $170 billion for all of calendar 2027 because of the capacity issues.
"In the second half of the fiscal year, we currently expect capex spend to accelerate primarily from CPUs, inclusive of higher memory and storage costs, and GPUs, as well as the 3P capacity deliveries that shifted to H2," she said.
Free cash flow for the fiscal first quarter declined 27% to $18.63 billion. Cloud rival Alphabet reported more than $9 billion in negative free cash flow in the quarter after Meta said last week its cash flow turned negative for the first time.
Microsoft will continue to generate free cash flow through the 2027 fiscal year, but the company will access additional sources of funding when it's attractive to do so, Hood said.
"We're fortunate to have access in the debt markets, given where our rates ratings are, and sort of we haven't been able to — we haven't yet, I would say, tapped that," she said. "And then, of course, there's other options."
Microsoft's net income increased to $36.63 billion, or $4.92 per share, from $27.75 billion, or $3.72 per share, a year ago. Adjusted earnings exclude a roughly $200 million loss on its investment in OpenAI.
For the first time, Microsoft disclosed revenue from its Azure cloud in dollars, at $33.17 billion in the quarter, despite the delays from third-party providers.
Analysts polled by StreetAccount expected $32.32 billion. The growth rate in the June quarter was 42%.
Microsoft reported results under two operating segments — Agents and Infra, and Devices and Consumer. For the past 11 years, the company had three segments that divided up its Azure, Office and Windows businesses.
In Agents and Infra, revenue rose almost 25% to $76.8 billion, more than the $75.63 billion consensus among analysts polled by StreetAccount. The segment contains Azure, along with Microsoft 365 cloud products, productivity and server licensing, industry solutions and frontier and support services.
The number of people using the Microsoft 365 Copilot AI assistant is up 50% from last quarter, CEO Satya Nadella said on the call. The company did not disclose the number of paid seats. The recently announced high-end Microsoft 365 E7 productivity bundle now has millions of seats, Hood said.
Revenue in the Devices and Consumer business slipped 3% to $15.48 billion, beating the StreetAccount consensus of $15.05 billion. The unit includes search and advertising, Xbox, devices and Windows operating system licenses sold to device makers.
Sales of devices and Windows licenses declined 22%, as higher memory and storage costs elevated prices. The company pointed to the end of support for Windows 10 last year and weak PC demand.
As of Wednesday's close, Microsoft shares were up about 10% year to date, trailing the S&P 500 index, which has gained 13% over the same period.
During the fiscal first quarter, Microsoft said it would cut 4,800 jobs, and followed up by announcing on Monday that it's offering buyouts to up to 60,000 employees, as it strives to balance a costly AI build-out with capital efficiency. Microsoft also established, during the quarter, an AI implementation unit and revealed a Copilot AI "super app" with coding abilities.
Executives will discuss the results with analysts and issue guidance on a conference call starting at 5:30 p.m. ET.
This story is developing. Please check back for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/microsoft-msft-q1-earnings-report-2027.html",
    publishedAt: "2026-10-28T22:29:23+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "alphabet-sinks-10-as-it-holds-2026-capex-0bf5537f",
    title: "Alphabet sinks 10% as it holds 2026 capex unchanged, expects significant increase in 2027",
    titleJa: "Alphabet sinks 10% as it holds 2026 capex unchanged, expects significant increase in 2027",
    summaryJa: "Alphabet missed Q3 expectations on earnings and revenue, its first top-and-bottom-line miss in nearly four years.",
    bodyOriginal: `Alphabet shares slumped more than 10% after the search giant reported a drop in free cash flow during the third quarter, in a worrying sign for the artificial intelligence trade.
Here's how the company did, compared with estimates from analysts polled by LSEG:
- Earnings per share: $2.67 adjusted vs. $3.02 expected
- Revenue: $127.58 billion vs. $128.22 billion
Revenue grew 25% from a year ago, but the company posted its first top-and-bottom-line miss in nearly four years.
Net income fell to $26.17 billion, or $2.12 per share, down from $34.98 billion, or $2.87 per share, a year ago.
The Google parent reported negative free cash flow of $9.07 billion, which fell much further than the $2.70 billion expected by analysts.
As questions mount over heightened spending on the AI buildout, Alphabet's capital expenditures totaled $51.36 billion in Q3, falling short of the $55.09 billion expected by analysts. Investors are looking for a substantial return on investment to warrant the big spending plans from the hyperscalers.
Alphabet maintained its full-year capital expenditures forecast after lifting guidance to between $195 billion and $205 billion during the second quarter from $190 billion. Annual capex is expected to top $200 billion before exceeding $300 billion in 2027.
"We continue to expect our capex to increase significantly in 2027, and will provide further details on our Q4 call," finance chief Anat Ashkenazi told analysts during an earnings call.
The company's borrowing rose sharply during the quarter, with long-term debt climbing to $125.1 billion, up from $21.6 billion a year earlier — an increase of about 479%.
Operating income totaled $40.58 billion, missing a $43.19 billion forecast from FactSet.
Alphabet saw a $99.03 billion windfall in revenue from equity holdings in the second quarter, fueled by stakes in SpaceX and Anthropic. However, the category weighed on results in the third quarter, resulting in a loss of $8.66 billion.
The company continues to open its wallet to fuel the AI expansion, and that has contributed to strong revenue growth in its cloud division, home to its suite of AI offerings.
"We are seeing extraordinary demand and strong growth from both AI labs, capital markets, financial service institutions, and enterprises," said Google Cloud CEO Thomas Kurian in his first public earnings call remarks.
Cloud revenue more than doubled to $30.7 billion, surpassing the $28.7 billion expected by analysts. The company has continued taking market share from larger rivals Amazon Web Services and Microsoft Azure.
The strong cloud results did little to shake off Google's largely negative print.
"The cloud business was the only business that beat at 103% growth," said Jefferies analyst Brent Thill on CNBC's Closing Bell: Overtime. "The Street wanted 100%, so it didn't beat by much, and it missed some of the high-end targets. Everything else missed."
The company's aggressive push on AI models did show signs of consumer adoption. Google said its Gemini app reached 1 billion users, making it the fastest-growing product in its history, the company said.
CEO Sundar Pichai told analysts that the company is already seeing strong demand for its recently launched Argon Gemini model. Its Carbon iteration announced on Wednesday outperforms Argon "on almost every domain," he added.
Alphabet's search revenue grew 12% to $63.35 billion. That fell short of a $64.96 billion estimate. Pichai said the company's AI investments powered the highest query growth rate over the last five years.`,
    bodyJa: `Alphabet shares slumped more than 10% after the search giant reported a drop in free cash flow during the third quarter, in a worrying sign for the artificial intelligence trade.
Here's how the company did, compared with estimates from analysts polled by LSEG:
- Earnings per share: $2.67 adjusted vs. $3.02 expected
- Revenue: $127.58 billion vs. $128.22 billion
Revenue grew 25% from a year ago, but the company posted its first top-and-bottom-line miss in nearly four years.
Net income fell to $26.17 billion, or $2.12 per share, down from $34.98 billion, or $2.87 per share, a year ago.
The Google parent reported negative free cash flow of $9.07 billion, which fell much further than the $2.70 billion expected by analysts.
As questions mount over heightened spending on the AI buildout, Alphabet's capital expenditures totaled $51.36 billion in Q3, falling short of the $55.09 billion expected by analysts. Investors are looking for a substantial return on investment to warrant the big spending plans from the hyperscalers.
Alphabet maintained its full-year capital expenditures forecast after lifting guidance to between $195 billion and $205 billion during the second quarter from $190 billion. Annual capex is expected to top $200 billion before exceeding $300 billion in 2027.
"We continue to expect our capex to increase significantly in 2027, and will provide further details on our Q4 call," finance chief Anat Ashkenazi told analysts during an earnings call.
The company's borrowing rose sharply during the quarter, with long-term debt climbing to $125.1 billion, up from $21.6 billion a year earlier — an increase of about 479%.
Operating income totaled $40.58 billion, missing a $43.19 billion forecast from FactSet.
Alphabet saw a $99.03 billion windfall in revenue from equity holdings in the second quarter, fueled by stakes in SpaceX and Anthropic. However, the category weighed on results in the third quarter, resulting in a loss of $8.66 billion.
The company continues to open its wallet to fuel the AI expansion, and that has contributed to strong revenue growth in its cloud division, home to its suite of AI offerings.
"We are seeing extraordinary demand and strong growth from both AI labs, capital markets, financial service institutions, and enterprises," said Google Cloud CEO Thomas Kurian in his first public earnings call remarks.
Cloud revenue more than doubled to $30.7 billion, surpassing the $28.7 billion expected by analysts. The company has continued taking market share from larger rivals Amazon Web Services and Microsoft Azure.
The strong cloud results did little to shake off Google's largely negative print.
"The cloud business was the only business that beat at 103% growth," said Jefferies analyst Brent Thill on CNBC's Closing Bell: Overtime. "The Street wanted 100%, so it didn't beat by much, and it missed some of the high-end targets. Everything else missed."
The company's aggressive push on AI models did show signs of consumer adoption. Google said its Gemini app reached 1 billion users, making it the fastest-growing product in its history, the company said.
CEO Sundar Pichai told analysts that the company is already seeing strong demand for its recently launched Argon Gemini model. Its Carbon iteration announced on Wednesday outperforms Argon "on almost every domain," he added.
Alphabet's search revenue grew 12% to $63.35 billion. That fell short of a $64.96 billion estimate. Pichai said the company's AI investments powered the highest query growth rate over the last five years.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/alphabet-googl-earnings-q3-2026.html",
    publishedAt: "2026-10-28T22:07:17+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 9,
  },
  {
    id: "here-are-five-key-takeaways-from-the-fed-e70d093a",
    title: "Here are five key takeaways from the Fed rate decision and Warsh news conference",
    titleJa: "Here are five key takeaways from the Fed rate decision and Warsh news conference",
    summaryJa: "Even though the interest-rate vote went as expected, there were a few surprises out of this week's Federal Open Market Committee meeting.",
    bodyOriginal: `The Federal Reserve voted Wednesday to hold its benchmark interest rate steady. At the press conference that followed, Fed Chairman Kevin Warsh disclosed some of his thinking about where the U.S. economy stands, and how that affects monetary policy. But for Fed wonks, the big news may have been Warsh's disclosure of some procedural changes ahead.
Here are five key takeaways:
- No surprises: Markets had been widely expecting the Fed to hold, and it did just that. In explaining its decision, the Federal Open Market Committee emphasized a patient approach, saying, "The accumulation of more information will help the Committee determine the policy stance appropriate to ensure a timely return of inflation to the Committee's 2 percent goal."
- Well, one surprise: If there was one eyebrow-raising moment from the afternoon, it was Warsh's disclosure of changes in how the FOMC will meet. In 2027, the committee will still meet eight times, but one of the meetings will not entail a vote on interest rates, or include a post-meeting statement. The "strategy" meetings will increase to two the next year, leaving just six opportunities to adjust rates — outside of emergency meetings.
- OK, two surprises: The FOMC vote to hold policy where it stands was widely expected. Dissent from multiple members also came as no shock. But one of the "no" votes coming from Governor Lisa Cook was a stunner. Governors rarely dissent from rate votes, and Cook hasn't done so at all since taking her seat in 2022. Cleveland Fed President Beth Hammack also opposed the decision. Both likely will provide statements explaining their votes before the end of the week.
- The AI impact: Warsh took the opportunity to talk about the impact artificial intelligence is having on economic growth, essentially saying that it was just one of several factors driving an expansion that he said was running strong.
- More musical chairs: The September meeting featured a shortened post-meeting news conference — cut from the usual 45 minutes or so down to half an hour, about the time of Wednesday's event. Moreover, reporters have been limited to a single question, a switch from prior practices when media members would take a two-for-one approach. Finally, Warsh has changed the seating in the room, going from a largely arbitrary approach — with representatives of larger outfits up front — to alphabetical order last month. This month featured reverse alphabetical order, keeping the bearers of the microphone on their toes.
What they're saying:
"The Fed is leaning into patience. It seems they prefer to wait for more information on the appropriate level of rates, as uncertainty reigns supreme in light of recent geopolitical developments." —Phil Camporeale, chief investment strategist, JPMorgan Wealth Management.
"The Fed has time on its side ... But the direction of travel remains clear. The Fed is still taking back some of last year's rate cuts, and the two dissents underline that tightening bias. We expect a hike in December and another in early 2027." — Seema Shah, chief global strategist, Principal Asset Management.
"We hesitate to characterize his communication as particularly dovish or hawkish ... The bottom line is that the Fed policy reaction is not a black-and-white, binary thing ... The market has adjusted to Warsh's communication style, but there might be a ways to go before they are fully on the same page." — Thomas Simons, chief U.S. economist, Jefferies.`,
    bodyJa: `The Federal Reserve voted Wednesday to hold its benchmark interest rate steady. At the press conference that followed, Fed Chairman Kevin Warsh disclosed some of his thinking about where the U.S. economy stands, and how that affects monetary policy. But for Fed wonks, the big news may have been Warsh's disclosure of some procedural changes ahead.
Here are five key takeaways:
- No surprises: Markets had been widely expecting the Fed to hold, and it did just that. In explaining its decision, the Federal Open Market Committee emphasized a patient approach, saying, "The accumulation of more information will help the Committee determine the policy stance appropriate to ensure a timely return of inflation to the Committee's 2 percent goal."
- Well, one surprise: If there was one eyebrow-raising moment from the afternoon, it was Warsh's disclosure of changes in how the FOMC will meet. In 2027, the committee will still meet eight times, but one of the meetings will not entail a vote on interest rates, or include a post-meeting statement. The "strategy" meetings will increase to two the next year, leaving just six opportunities to adjust rates — outside of emergency meetings.
- OK, two surprises: The FOMC vote to hold policy where it stands was widely expected. Dissent from multiple members also came as no shock. But one of the "no" votes coming from Governor Lisa Cook was a stunner. Governors rarely dissent from rate votes, and Cook hasn't done so at all since taking her seat in 2022. Cleveland Fed President Beth Hammack also opposed the decision. Both likely will provide statements explaining their votes before the end of the week.
- The AI impact: Warsh took the opportunity to talk about the impact artificial intelligence is having on economic growth, essentially saying that it was just one of several factors driving an expansion that he said was running strong.
- More musical chairs: The September meeting featured a shortened post-meeting news conference — cut from the usual 45 minutes or so down to half an hour, about the time of Wednesday's event. Moreover, reporters have been limited to a single question, a switch from prior practices when media members would take a two-for-one approach. Finally, Warsh has changed the seating in the room, going from a largely arbitrary approach — with representatives of larger outfits up front — to alphabetical order last month. This month featured reverse alphabetical order, keeping the bearers of the microphone on their toes.
What they're saying:
"The Fed is leaning into patience. It seems they prefer to wait for more information on the appropriate level of rates, as uncertainty reigns supreme in light of recent geopolitical developments." —Phil Camporeale, chief investment strategist, JPMorgan Wealth Management.
"The Fed has time on its side ... But the direction of travel remains clear. The Fed is still taking back some of last year's rate cuts, and the two dissents underline that tightening bias. We expect a hike in December and another in early 2027." — Seema Shah, chief global strategist, Principal Asset Management.
"We hesitate to characterize his communication as particularly dovish or hawkish ... The bottom line is that the Fed policy reaction is not a black-and-white, binary thing ... The market has adjusted to Warsh's communication style, but there might be a ways to go before they are fully on the same page." — Thomas Simons, chief U.S. economist, Jefferies.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/fed-rate-decision-warsh-takeaways.html",
    publishedAt: "2026-10-28T21:31:46+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 9,
  },
  {
    id: "what-we-now-know-about-the-uk-economy-in-be5b1d23",
    title: "What we now know about the UK economy in four charts",
    titleJa: "What we now know about the UK economy in four charts",
    summaryJa: "The Office for Budget Responsibility says higher energy prices will impact everything from prices and living standards to economic growth.",
    bodyOriginal: `What we now know about the UK economy in four charts
- Published
The UK may have no involvement in the US-Iran war, but the country is feeling the full force of the conflict on its economy.
Soaring energy prices are set to dent growth in the short term, push up inflation and leave living standards in a "grim" place, according to the latest official forecast from the Office for Budget Responsibility (OBR).
Interest rates are also predicted to rise, making borrowing more expensive, along with government debt repayments.
Chancellor John Healey warned the nation faces "real challenges ahead" as he announced policies that he said would offer "breathing space" for households in the coming months.
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
"What we face today are global economic storms," he said. "We can't wish them away. We must choose the course we steer through them."
In its first assessment of the UK economy since the Middle East conflict started, the OBR said rising energy prices were the biggest risk to the economy in the near future.
Despite raising its growth forecast for this year, it sharply cut its prediction for next year from 1.6% to 1%.
Growth is then set to rebound in the following years.
When an economy grows, businesses tend to invest more, create more jobs and give pay rises to workers, which leaves people feeling better off on average, though it can take time and not everyone necessarily benefits.
Companies making higher profits also pay more in tax, which can enable the government to spend more on public services. When there is slow economic growth, or the economy shrinks, the opposite can occur.
Inflation can weigh on growth and the OBR has forecast that prices are set to rise at a faster pace as higher energy bills filter through supply chains and to consumers, especially in 2027.
High global oil prices have already hit drivers at the pumps, with petrol priced at almost £1.73 per litre on average, while diesel is near £1.99.
Elevated oil prices over time can lead to prices edging upwards across a host of goods, such as food, as companies pass on the higher expenses they face to consumers.
Goods are typically transported to destinations by lorries and vans, so high fuel prices can have far-reaching consequences.
The OBR now thinks inflation will stay higher for longer than previously forecast, peaking at 3.8% in 2027.
Despite the cost-of-living support announced by the government, economists at Pantheon Macroeconomics said the measures were "small beer given the surge in inflation we expect over the winter".
High inflation paints a bleak picture when it comes to living standards and the OBR has forecast a dip next year as energy bills hit the spending power of households.
Those on lower incomes are set to be hit harder, however, because energy costs eat up a bigger share of their monthly budget and disposable income.
Real household disposable income, a measure of living standards, is forecast to grow from 2027, but not by as much as previously thought.
"It's a pretty grim picture," according to the OBR's David Miles, who says there has been "virtually no growth" for individuals since before the Covid pandemic.
"It's been a dismal period in British economic history."
What the Budget offers for under 25s - and what it leaves out
- Published2 hours ago
Inflation is expected to average 3.4% next year, before falling to the Bank of England's 2% target towards the end of the decade.
The Bank is widely expected to raise interest rates next week due to higher inflation in recent months. Rates are currently at 3.75%, but the OBR now forecasts they could rise to as high as 4.5% in the coming years.
It had previously forecast two interest rate cuts this year.
Higher rates makes borrowing money more expensive but can boost returns on savings.
Inflation also raises the cost of borrowing for the government, with spending on debt interest set to rise.
Such repayments are also predicted to increase the overall amount the government borrows, which is set to increase every year by more than had been previously forecast by the OBR.
Higher spending on welfare and pensions due to inflation is also expected to increase borrowing, though it is forecast to fall as a share of the economy over the next five years.
However, forecasts are only a best guess at what might happen in the future. Given the way the conflict in the Middle East has upended previous predictions, the future of the war could alter inflation expectations.
US President Donald Trump has suggested the war will end after the mid-term elections next month.
The OBR admitted there remained "significant uncertainty" around its predictions due to the changing situation in the Middle East.
- Published4 hours ago`,
    bodyJa: `What we now know about the UK economy in four charts
- Published
The UK may have no involvement in the US-Iran war, but the country is feeling the full force of the conflict on its economy.
Soaring energy prices are set to dent growth in the short term, push up inflation and leave living standards in a "grim" place, according to the latest official forecast from the Office for Budget Responsibility (OBR).
Interest rates are also predicted to rise, making borrowing more expensive, along with government debt repayments.
Chancellor John Healey warned the nation faces "real challenges ahead" as he announced policies that he said would offer "breathing space" for households in the coming months.
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
"What we face today are global economic storms," he said. "We can't wish them away. We must choose the course we steer through them."
In its first assessment of the UK economy since the Middle East conflict started, the OBR said rising energy prices were the biggest risk to the economy in the near future.
Despite raising its growth forecast for this year, it sharply cut its prediction for next year from 1.6% to 1%.
Growth is then set to rebound in the following years.
When an economy grows, businesses tend to invest more, create more jobs and give pay rises to workers, which leaves people feeling better off on average, though it can take time and not everyone necessarily benefits.
Companies making higher profits also pay more in tax, which can enable the government to spend more on public services. When there is slow economic growth, or the economy shrinks, the opposite can occur.
Inflation can weigh on growth and the OBR has forecast that prices are set to rise at a faster pace as higher energy bills filter through supply chains and to consumers, especially in 2027.
High global oil prices have already hit drivers at the pumps, with petrol priced at almost £1.73 per litre on average, while diesel is near £1.99.
Elevated oil prices over time can lead to prices edging upwards across a host of goods, such as food, as companies pass on the higher expenses they face to consumers.
Goods are typically transported to destinations by lorries and vans, so high fuel prices can have far-reaching consequences.
The OBR now thinks inflation will stay higher for longer than previously forecast, peaking at 3.8% in 2027.
Despite the cost-of-living support announced by the government, economists at Pantheon Macroeconomics said the measures were "small beer given the surge in inflation we expect over the winter".
High inflation paints a bleak picture when it comes to living standards and the OBR has forecast a dip next year as energy bills hit the spending power of households.
Those on lower incomes are set to be hit harder, however, because energy costs eat up a bigger share of their monthly budget and disposable income.
Real household disposable income, a measure of living standards, is forecast to grow from 2027, but not by as much as previously thought.
"It's a pretty grim picture," according to the OBR's David Miles, who says there has been "virtually no growth" for individuals since before the Covid pandemic.
"It's been a dismal period in British economic history."
What the Budget offers for under 25s - and what it leaves out
- Published2 hours ago
Inflation is expected to average 3.4% next year, before falling to the Bank of England's 2% target towards the end of the decade.
The Bank is widely expected to raise interest rates next week due to higher inflation in recent months. Rates are currently at 3.75%, but the OBR now forecasts they could rise to as high as 4.5% in the coming years.
It had previously forecast two interest rate cuts this year.
Higher rates makes borrowing money more expensive but can boost returns on savings.
Inflation also raises the cost of borrowing for the government, with spending on debt interest set to rise.
Such repayments are also predicted to increase the overall amount the government borrows, which is set to increase every year by more than had been previously forecast by the OBR.
Higher spending on welfare and pensions due to inflation is also expected to increase borrowing, though it is forecast to fall as a share of the economy over the next five years.
However, forecasts are only a best guess at what might happen in the future. Given the way the conflict in the Middle East has upended previous predictions, the future of the war could alter inflation expectations.
US President Donald Trump has suggested the war will end after the mid-term elections next month.
The OBR admitted there remained "significant uncertainty" around its predictions due to the changing situation in the Middle East.
- Published4 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9x28350ly07o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T20:08:45+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/302d/live/da4a7910-d2ea-11f1-8d86-83eebc838351.jpg",
    readTime: 10,
  },
  {
    id: "what-the-budget-offers-for-under-25s-and-610c12f9",
    title: "What the Budget offers for under 25s - and what it leaves out",
    titleJa: "What the Budget offers for under 25s - and what it leaves out",
    summaryJa: "The chancellor announced a series of measures which will impact under-25 year-olds from housing to minimum wage.",
    bodyOriginal: `What the Budget offers for under 25s - and what it leaves out
- Published
Chancellor John Healey has announced his Budget, which includes changes to minimum wage and help for people trying to get onto the housing ladder.
Here is how the Budget could affect you if you are under-25.
Minimum wage rise
If you are an 18-to-20 year-old earning the minimum wage, your pay will go up by 3.9% from next April.
However, the increase may be lower than you had expected. That is because Healey reversed course on how his Labour predecessor, Rachel Reeves, had been increasing the minimum wage for young people.
Labour had promised to do away with "discriminatory age bands", with all adults entitled to the same minimum wage. This year, 18-20 year-olds will see the same increase as older workers, meaning the disparity will remain. So, for 18-to-20 year-olds, your pay will rise to £11.27, while over-20s will be paid a minimum of £13.21 an hour.
The increase also means a 21-year-old, who is working full time on the minimum wage and took out a student loan after 2023, will now earn enough to meet the £25,000 repayment threshold, over which they will start paying back 9% of their earnings.
First-time buyer boost
The Budget contained plans to help people get onto the housing ladder, including the introduction of a "First Time Buyer Isa". This is an account in which savers can build up a deposit, with the government topping up contributions of up to £4,000 each year with a 25% bonus.
The new savings account will be introduced in 2029, replacing the existing Lifetime Isa, which has been criticised by some for imposing harsh penalties on those buying homes for more than the £450,000 cap.
The cap will remain, but the new "First Time Buyer Isa" will ensure savers are not penalised by losing their own money when making withdrawals. Savers will only lose contributions made by the government when making withdrawals which are not eligible for the account.
The penalty for withdrawals from existing Lifetime Isas will be lowered, too, to address concerns about savers being punished.
The government had already revealed a £4.7bn scheme for first-time buyers in England dubbed Your First Home. It is aiming to help 70,000 individuals and couples get on the housing ladder
The scheme will allow people to buy a new-build home with a deposit of 2.5%. It will provide them with a loan worth 20% of their property's value to help pay for the purchase.
Capped at £110,000 outside London and £140,000 in the capital, it is aimed at those hoping to get on the housing ladder without help from "the bank of mum and dad".
Young Entrepreneurs Allowance
If you are a young person hoping to start a business in England, the Budget contained good news for you.
The chancellor wants to level the playing field for young entrepreneurs who have bright ideas, but who might not have the same family financial backing as others.
In an attempt to encourage more young people to start their own businesses, the government will pilot a "Young Entrepreneurs Allowance" in England.
The allowance will see your living costs partly covered by the government for the first year your business is operating. Healey hopes it will encourage more young people to take the plunge and become entrepreneurs.
Details of the scheme are thin at the moment, however, only that it will be rolled out "shortly".
Chris Mason: Budget felt cautious despite its range of small measures
- Published5 hours ago
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
No help yet on jobs
If you are one of more than a million 18-to-24 year-olds not in employment, education or training (Neet), Wednesday's Budget may have been a frustrating watch.
The chancellor acknowledged the scale of the crisis facing young people, but said solutions would not come yet. Ministers are waiting on a series of recommendations from Alan Milburn, who has been looking into why so many young people are Neet in the UK.
Milburn has warned Britain is "at risk of a lost generation" due to the crisis, saying a "round of ammunition" is needed rather than a silver bullet. He will make recommendations to the government later this year.
Healey said he refused to write off young people during his Budget speech and the government was looking forward to Milburn's final report.
Student loans 'under review'
Another group left hanging were those with outstanding student loans, particularly the controversial Plan 2 loans taken out between 2012 and 2023 - which many fear they will never be able to pay off.
If you have student loans, the government has said it is looking at ways to reform the repayment system. But action was not forthcoming at the Budget, despite expectations in the run up that the issue might be addressed.
After the statement, Chief Secretary to the Treasury Emma Reynolds said the loan repayment system is "under review".
"We inherited a system that is difficult and unfair on young people, but we weren't able to move on that today," she told the BBC.
Budget 2026: Key points at a glance
- Published5 hours ago
Healey tells departments to make 1% cuts to fund defence
- Published3 hours ago
Charts by Tommy Lumby and Rob England.`,
    bodyJa: `What the Budget offers for under 25s - and what it leaves out
- Published
Chancellor John Healey has announced his Budget, which includes changes to minimum wage and help for people trying to get onto the housing ladder.
Here is how the Budget could affect you if you are under-25.
Minimum wage rise
If you are an 18-to-20 year-old earning the minimum wage, your pay will go up by 3.9% from next April.
However, the increase may be lower than you had expected. That is because Healey reversed course on how his Labour predecessor, Rachel Reeves, had been increasing the minimum wage for young people.
Labour had promised to do away with "discriminatory age bands", with all adults entitled to the same minimum wage. This year, 18-20 year-olds will see the same increase as older workers, meaning the disparity will remain. So, for 18-to-20 year-olds, your pay will rise to £11.27, while over-20s will be paid a minimum of £13.21 an hour.
The increase also means a 21-year-old, who is working full time on the minimum wage and took out a student loan after 2023, will now earn enough to meet the £25,000 repayment threshold, over which they will start paying back 9% of their earnings.
First-time buyer boost
The Budget contained plans to help people get onto the housing ladder, including the introduction of a "First Time Buyer Isa". This is an account in which savers can build up a deposit, with the government topping up contributions of up to £4,000 each year with a 25% bonus.
The new savings account will be introduced in 2029, replacing the existing Lifetime Isa, which has been criticised by some for imposing harsh penalties on those buying homes for more than the £450,000 cap.
The cap will remain, but the new "First Time Buyer Isa" will ensure savers are not penalised by losing their own money when making withdrawals. Savers will only lose contributions made by the government when making withdrawals which are not eligible for the account.
The penalty for withdrawals from existing Lifetime Isas will be lowered, too, to address concerns about savers being punished.
The government had already revealed a £4.7bn scheme for first-time buyers in England dubbed Your First Home. It is aiming to help 70,000 individuals and couples get on the housing ladder
The scheme will allow people to buy a new-build home with a deposit of 2.5%. It will provide them with a loan worth 20% of their property's value to help pay for the purchase.
Capped at £110,000 outside London and £140,000 in the capital, it is aimed at those hoping to get on the housing ladder without help from "the bank of mum and dad".
Young Entrepreneurs Allowance
If you are a young person hoping to start a business in England, the Budget contained good news for you.
The chancellor wants to level the playing field for young entrepreneurs who have bright ideas, but who might not have the same family financial backing as others.
In an attempt to encourage more young people to start their own businesses, the government will pilot a "Young Entrepreneurs Allowance" in England.
The allowance will see your living costs partly covered by the government for the first year your business is operating. Healey hopes it will encourage more young people to take the plunge and become entrepreneurs.
Details of the scheme are thin at the moment, however, only that it will be rolled out "shortly".
Chris Mason: Budget felt cautious despite its range of small measures
- Published5 hours ago
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
No help yet on jobs
If you are one of more than a million 18-to-24 year-olds not in employment, education or training (Neet), Wednesday's Budget may have been a frustrating watch.
The chancellor acknowledged the scale of the crisis facing young people, but said solutions would not come yet. Ministers are waiting on a series of recommendations from Alan Milburn, who has been looking into why so many young people are Neet in the UK.
Milburn has warned Britain is "at risk of a lost generation" due to the crisis, saying a "round of ammunition" is needed rather than a silver bullet. He will make recommendations to the government later this year.
Healey said he refused to write off young people during his Budget speech and the government was looking forward to Milburn's final report.
Student loans 'under review'
Another group left hanging were those with outstanding student loans, particularly the controversial Plan 2 loans taken out between 2012 and 2023 - which many fear they will never be able to pay off.
If you have student loans, the government has said it is looking at ways to reform the repayment system. But action was not forthcoming at the Budget, despite expectations in the run up that the issue might be addressed.
After the statement, Chief Secretary to the Treasury Emma Reynolds said the loan repayment system is "under review".
"We inherited a system that is difficult and unfair on young people, but we weren't able to move on that today," she told the BBC.
Budget 2026: Key points at a glance
- Published5 hours ago
Healey tells departments to make 1% cuts to fund defence
- Published3 hours ago
Charts by Tommy Lumby and Rob England.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c60e05yn3w9zo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T20:02:38+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f96e/live/0a45b830-d2de-11f1-93e1-3b657b665bcf.jpg",
    readTime: 10,
  },
  {
    id: "dharshini-david-healey-buys-himself-some-c2320242",
    title: "Dharshini David: Healey buys himself some time, but big questions still unanswered",
    titleJa: "Dharshini David: Healey buys himself some time, but big questions still unanswered",
    summaryJa: "The chancellor talked of charting a new course for Britain, but the impact of Iran war has limited his options.",
    bodyOriginal: `Dharshini David: Healey buys himself some time, but big questions still unanswered
- Published
John Healey talked of charting a new course for Britain, but this Budget was more about course-correcting than charging down a new path.
It was abundantly clear that the financial fallout from that conflict in the Middle East has hampered the finances of households and businesses – and the government's ability to help.
While the government targeted those impacted by higher energy and fuel bills, the "breathing space" it aimed to provide was limited; it is a pill that doesn't fully alleviate the pain.
The most telling evidence was that official forecasters predict that while earnings will rise, that is not compensating for higher prices and taxes.
Even after the extra help is taken into account, households' incomes after inflation and tax are set to be typically lower across the next two years than the start of the parliament. On that basis, it could be the second worse parliament for living standards, after the last one, since the 1950s - a sign of how far the war has blown prosperity off course.
But it can't be all be blamed on the war. Taxes haven't helped. Although there were few major measures aimed at households, the policy of previous chancellors of freezing the thresholds at which different rates of tax on income apply - fiscal drag - has been maintained in the background, scooping more money out of pay packets.
Overall, this Budget has the tax burden - the proportion of the nation's income going to the tax office - rising to a new historic high of 38.6%
However, a more generous package of help would have been hard to pull off. The impact of higher inflation and debt have increased borrowing costs by £14bn in the past year alone.
The Chancellor had to prove to the markets which lend the government money that he has a plan to bring down future debt to avoid those costs climbing further.
As it stands, debt interest repayments are due to be £160bn in 2032, more than double the amount spent on schools in England.
And the plans Healey has unveiled already eat into wiggle room he has within the public finances. He says he was right to do so - that's what such safety margins are there for - in times of strife. But the great uncertainty that remains made going further very risky. Energy prices remaining high, for example, could easily chew up all the spare cash.
So the result was what some have termed a beige, safe Budget. As Healey strove to prove his fiscally sound credentials, there wasn't even the customary rabbit pulled out of the hat, the end-of-speech sweetener.
The markets seem reassured – even if some of his tax raising plans involve clamping down on loopholes and those not paying the right tax, which is always highly uncertain.
Budget 2026: Key points at a glance
- Published5 hours ago
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
So the chancellor appears to have bought himself some breathing space. But that means some big questions have been postponed until another day, not least on public services.
Higher-than-expected inflation may mean that if areas such as health and defence are prioritised, budgets for some other "unprotected" areas – justice and higher education for example – are set to lag behind inflation after 2028.
There was a hint too from John Healey that he'd tap into some of those budgets to help out defence spending. To maintain those budgets in 2030 would means finding tens of billions of pounds.
And issues around the other big area of spending – welfare – remain unresolved. Between 2025 and 2032, spending there is set to increase by £100bn.
The official forecasters also noted the rapid rise in sickness and disability caseloads since the start of the pandemic. They warn if that trend continued, spending on such benefits would rise by a further £13bn.
Any suggestion of welfare reform has been postponed until the forthcoming review into the plight of workless young people.
Then there's the issue of boosting growth. There was a bit more detail on the plans for devolution – but there is much to be fleshed out.
And on another key part of the growth strategy, housebuilding, there was disappointing news. Even though first-time buyers are set to get more help, their first home may be more elusive.
Between regulation and higher costs – in part, related to the war - the OBR estimates that 190,000 fewer homes will be built by 2032 compared to what it thought in March, a significant setback.
So the chancellor may have unveiled 98 (relatively small) measures but the to-do list gets longer.
With his official forecasters warning that, in a very uncertain world, his finances face exceptional risks, playing a wait-and-see game feels like a prudent move.
The risks go both ways: the OBR points out that a swift resolution to the war and an improvement in the economy could spell a significant boost to the public finances.
So the chancellor has more reason than most to keep his fingers crossed that happens rapidly.
For as it stands, the official forecasters say incomes after inflation, living standards, are set to be only 1% higher at the end of the decade than at the start.
A series of economic shocks outside out control could thwart plans to turbo-boost prosperity . And as today shows, breathing space only extends so far.`,
    bodyJa: `Dharshini David: Healey buys himself some time, but big questions still unanswered
- Published
John Healey talked of charting a new course for Britain, but this Budget was more about course-correcting than charging down a new path.
It was abundantly clear that the financial fallout from that conflict in the Middle East has hampered the finances of households and businesses – and the government's ability to help.
While the government targeted those impacted by higher energy and fuel bills, the "breathing space" it aimed to provide was limited; it is a pill that doesn't fully alleviate the pain.
The most telling evidence was that official forecasters predict that while earnings will rise, that is not compensating for higher prices and taxes.
Even after the extra help is taken into account, households' incomes after inflation and tax are set to be typically lower across the next two years than the start of the parliament. On that basis, it could be the second worse parliament for living standards, after the last one, since the 1950s - a sign of how far the war has blown prosperity off course.
But it can't be all be blamed on the war. Taxes haven't helped. Although there were few major measures aimed at households, the policy of previous chancellors of freezing the thresholds at which different rates of tax on income apply - fiscal drag - has been maintained in the background, scooping more money out of pay packets.
Overall, this Budget has the tax burden - the proportion of the nation's income going to the tax office - rising to a new historic high of 38.6%
However, a more generous package of help would have been hard to pull off. The impact of higher inflation and debt have increased borrowing costs by £14bn in the past year alone.
The Chancellor had to prove to the markets which lend the government money that he has a plan to bring down future debt to avoid those costs climbing further.
As it stands, debt interest repayments are due to be £160bn in 2032, more than double the amount spent on schools in England.
And the plans Healey has unveiled already eat into wiggle room he has within the public finances. He says he was right to do so - that's what such safety margins are there for - in times of strife. But the great uncertainty that remains made going further very risky. Energy prices remaining high, for example, could easily chew up all the spare cash.
So the result was what some have termed a beige, safe Budget. As Healey strove to prove his fiscally sound credentials, there wasn't even the customary rabbit pulled out of the hat, the end-of-speech sweetener.
The markets seem reassured – even if some of his tax raising plans involve clamping down on loopholes and those not paying the right tax, which is always highly uncertain.
Budget 2026: Key points at a glance
- Published5 hours ago
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
So the chancellor appears to have bought himself some breathing space. But that means some big questions have been postponed until another day, not least on public services.
Higher-than-expected inflation may mean that if areas such as health and defence are prioritised, budgets for some other "unprotected" areas – justice and higher education for example – are set to lag behind inflation after 2028.
There was a hint too from John Healey that he'd tap into some of those budgets to help out defence spending. To maintain those budgets in 2030 would means finding tens of billions of pounds.
And issues around the other big area of spending – welfare – remain unresolved. Between 2025 and 2032, spending there is set to increase by £100bn.
The official forecasters also noted the rapid rise in sickness and disability caseloads since the start of the pandemic. They warn if that trend continued, spending on such benefits would rise by a further £13bn.
Any suggestion of welfare reform has been postponed until the forthcoming review into the plight of workless young people.
Then there's the issue of boosting growth. There was a bit more detail on the plans for devolution – but there is much to be fleshed out.
And on another key part of the growth strategy, housebuilding, there was disappointing news. Even though first-time buyers are set to get more help, their first home may be more elusive.
Between regulation and higher costs – in part, related to the war - the OBR estimates that 190,000 fewer homes will be built by 2032 compared to what it thought in March, a significant setback.
So the chancellor may have unveiled 98 (relatively small) measures but the to-do list gets longer.
With his official forecasters warning that, in a very uncertain world, his finances face exceptional risks, playing a wait-and-see game feels like a prudent move.
The risks go both ways: the OBR points out that a swift resolution to the war and an improvement in the economy could spell a significant boost to the public finances.
So the chancellor has more reason than most to keep his fingers crossed that happens rapidly.
For as it stands, the official forecasters say incomes after inflation, living standards, are set to be only 1% higher at the end of the decade than at the start.
A series of economic shocks outside out control could thwart plans to turbo-boost prosperity . And as today shows, breathing space only extends so far.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqe9l4px0yzxo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T19:51:01+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/426f/live/d5d2d7e0-d21f-11f1-b8e4-17c9744a7f8e.jpg",
    readTime: 10,
  },
  {
    id: "healey-unveils-100-for-energy-bills-and-a80a6dfc",
    title: "Healey unveils £100 for energy bills and bank tax in first Budget",
    titleJa: "Healey unveils £100 for energy bills and bank tax in first Budget",
    summaryJa: "The chancellor targets the cost of living amid global economic turmoil but opposition parties say he has not been bold enough.",
    bodyOriginal: `Healey unveils £100 for energy bills and bank tax in first Budget
- Published
Millions of households will get £100 to help with soaring energy bills to be paid for by a tax on bank profits, John Healey has announced in his first Budget.
The chancellor said he wanted to give hard-pressed families "breathing space now" and "hope for the future" as the UK economy is battered by "global economic storms".
He also unveiled tax breaks to boost high street businesses - but confirmed that many big decisions, including on defence spending and welfare, will not be made until next year.
Conservative leader Kemi Badenoch said Healey's plans were "not bold enough" and the government was "overspent, overborrowed, overtaxed and drowning in an out-of-control welfare system".
In an hour-long speech to a packed House of Commons, with Prime Minister Andy Burnham and other frontbench colleagues cheering him on, the chancellor unveiled a string of measures aimed at cutting the cost of living.
These include:
One-off £100 energy payment for people living in council tax bands A to D in England, with Wales saying it will match the payment and the Scottish government planning to "replicate" it
Gas standing charges in England, Scotland and Wales, to be scrapped during 2027 "or as soon as possible after". These fixed daily fees will be shifted onto the price of each unit of energy, meaning heavy gas users will face higher bills
Extending the 5p "temporary" cut in fuel duty on petrol and diesel to July
Increasing minimum wage rates by 3.9% in April, although there will be no progress on narrowing the gap between rates for older and younger workers
Healey increased the tax on the profits of big banks from 3% to 6%, which will last from January next year to April 2028, and increased taxes on high-stakes gambling machines.
Budget 2026: Key points at a glance
- Published5 hours ago
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
Chris Mason: Budget felt cautious despite its range of small measures
- Published5 hours ago
As part of a package to help business, Healey increased the point at which High Street shops in England start paying business rates from £12,000 to £18,000, with vape shops and adult gaming centres excluded from the relief.
But he had little scope for big giveaways as the public finances remain stretched, with the UK set to spend £14bn more on debt interest payments this year.
Income tax thresholds will remain frozen and the tax on income from savings and property rental will rise to 24% for basic rate taxpayers from April 2027, after it had been scheduled to go up to 22%.
But a cut to the cash ISA allowance from £20,000 a year to £12,000, announced last year by Healey's predecessor Rachel Reeves, will be axed.
The Office for Budget Responsibility (OBR) downgraded its growth forecast for next year to 1%, with slightly higher increases predicted for subsequent years.
In its latest assessment, the OBR said British households were set to be little better off than before the Covid pandemic even a decade after Covid-19 hit, a situation the watchdog's boss David Miles described as "pretty grim".
In his Budget speech, Healey repeatedly stressed that the UK economy was being battered by "global uncertainties" and soaring oil prices caused by conflict in the Middle East.
"Those are the storms we face. We can't wish them away. We must choose the course we steer through them," he told MPs.
Healey also used his speech to announce plans to allow regional mayors to keep 20% of business rates and a share of income tax to spend on local priorities.
The aim was to allow mayors to retain 100% of business rates raised in their areas by the end of the decade, he added, in "the most radical act of devolution in a generation".
And he sought to address opposition claims the Labour government is unwilling to cut benefits, insisting that both he and Burnham were committed to bringing down the welfare bill in a "Labour way".
But he said no decisions would be taken until reviews by Alan Milburn, into young people not in work or training, and Stephen Timms, on Personal Independence Payments, had been published, with legislation to follow next year.
The £4.7bn black hole in the defence investment plan will be funded, the chancellor revealed, in part through taking money from capital budgets across Whitehall.
Healey said he will set out how the government plans to meet its commitment to spend 3% of the national income on defence by 2030, and 3.5% by 2035, at next year's spending review.
But Badenoch said he "should have set out a plan for 3% today," highlighting his claim when he resigned as Sir Keir Starmer's defence secretary in June that UK forces were at risk due to a lack of cash.
"So now he is the man who is increasing risk to personnel on operations, he is the man who is making our country less safe, he has failed his own test," the Conservative leader said.
"This is on him and no-one will ever forget. If he had any decency he would resign again today."
The Tory leader said that with the UK heading for a record tax burden and "spending more on debt interest than on the army and schools combined", Healey's Budget was "not good enough, not strong enough, not bold enough".
Helen Miller, director of the Institute for Fiscal Studies, said the Budget "has a raft of fiddly measures but very little that will move the dial on growth".
Lib Dem leader Sir Ed Davey said that until the government has "the courage" to fix the UK's trading relationship with the EU any Budget will just be "tinkering around the edges" and will not provide the growth the country needs.
Reform UK leader Nigel Farage said the Budget was full of "little giveaways" but "doesn't overall do very much" and did not offer "anything of any value on defence whatsoever".
Healey also faced criticism from the left, with the general secretary of the Unite union, Sharon Graham describing the cost of living measures in the Budget as "baby steps".
"Scrapping standing charges on gas and a £100 energy payment for households in council tax bands, A to D, whilst welcome, will not touch the sides, when many forecasts show bills set to jump over £400 in January," she added.
Green Party leader Zack Polanski said it was a Budget "that betrays the future for young people and the planet they inherit".
He added: "The chancellor didn't mention climate once but praised bankers repeatedly."
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    bodyJa: `Healey unveils £100 for energy bills and bank tax in first Budget
- Published
Millions of households will get £100 to help with soaring energy bills to be paid for by a tax on bank profits, John Healey has announced in his first Budget.
The chancellor said he wanted to give hard-pressed families "breathing space now" and "hope for the future" as the UK economy is battered by "global economic storms".
He also unveiled tax breaks to boost high street businesses - but confirmed that many big decisions, including on defence spending and welfare, will not be made until next year.
Conservative leader Kemi Badenoch said Healey's plans were "not bold enough" and the government was "overspent, overborrowed, overtaxed and drowning in an out-of-control welfare system".
In an hour-long speech to a packed House of Commons, with Prime Minister Andy Burnham and other frontbench colleagues cheering him on, the chancellor unveiled a string of measures aimed at cutting the cost of living.
These include:
One-off £100 energy payment for people living in council tax bands A to D in England, with Wales saying it will match the payment and the Scottish government planning to "replicate" it
Gas standing charges in England, Scotland and Wales, to be scrapped during 2027 "or as soon as possible after". These fixed daily fees will be shifted onto the price of each unit of energy, meaning heavy gas users will face higher bills
Extending the 5p "temporary" cut in fuel duty on petrol and diesel to July
Increasing minimum wage rates by 3.9% in April, although there will be no progress on narrowing the gap between rates for older and younger workers
Healey increased the tax on the profits of big banks from 3% to 6%, which will last from January next year to April 2028, and increased taxes on high-stakes gambling machines.
Budget 2026: Key points at a glance
- Published5 hours ago
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
Chris Mason: Budget felt cautious despite its range of small measures
- Published5 hours ago
As part of a package to help business, Healey increased the point at which High Street shops in England start paying business rates from £12,000 to £18,000, with vape shops and adult gaming centres excluded from the relief.
But he had little scope for big giveaways as the public finances remain stretched, with the UK set to spend £14bn more on debt interest payments this year.
Income tax thresholds will remain frozen and the tax on income from savings and property rental will rise to 24% for basic rate taxpayers from April 2027, after it had been scheduled to go up to 22%.
But a cut to the cash ISA allowance from £20,000 a year to £12,000, announced last year by Healey's predecessor Rachel Reeves, will be axed.
The Office for Budget Responsibility (OBR) downgraded its growth forecast for next year to 1%, with slightly higher increases predicted for subsequent years.
In its latest assessment, the OBR said British households were set to be little better off than before the Covid pandemic even a decade after Covid-19 hit, a situation the watchdog's boss David Miles described as "pretty grim".
In his Budget speech, Healey repeatedly stressed that the UK economy was being battered by "global uncertainties" and soaring oil prices caused by conflict in the Middle East.
"Those are the storms we face. We can't wish them away. We must choose the course we steer through them," he told MPs.
Healey also used his speech to announce plans to allow regional mayors to keep 20% of business rates and a share of income tax to spend on local priorities.
The aim was to allow mayors to retain 100% of business rates raised in their areas by the end of the decade, he added, in "the most radical act of devolution in a generation".
And he sought to address opposition claims the Labour government is unwilling to cut benefits, insisting that both he and Burnham were committed to bringing down the welfare bill in a "Labour way".
But he said no decisions would be taken until reviews by Alan Milburn, into young people not in work or training, and Stephen Timms, on Personal Independence Payments, had been published, with legislation to follow next year.
The £4.7bn black hole in the defence investment plan will be funded, the chancellor revealed, in part through taking money from capital budgets across Whitehall.
Healey said he will set out how the government plans to meet its commitment to spend 3% of the national income on defence by 2030, and 3.5% by 2035, at next year's spending review.
But Badenoch said he "should have set out a plan for 3% today," highlighting his claim when he resigned as Sir Keir Starmer's defence secretary in June that UK forces were at risk due to a lack of cash.
"So now he is the man who is increasing risk to personnel on operations, he is the man who is making our country less safe, he has failed his own test," the Conservative leader said.
"This is on him and no-one will ever forget. If he had any decency he would resign again today."
The Tory leader said that with the UK heading for a record tax burden and "spending more on debt interest than on the army and schools combined", Healey's Budget was "not good enough, not strong enough, not bold enough".
Helen Miller, director of the Institute for Fiscal Studies, said the Budget "has a raft of fiddly measures but very little that will move the dial on growth".
Lib Dem leader Sir Ed Davey said that until the government has "the courage" to fix the UK's trading relationship with the EU any Budget will just be "tinkering around the edges" and will not provide the growth the country needs.
Reform UK leader Nigel Farage said the Budget was full of "little giveaways" but "doesn't overall do very much" and did not offer "anything of any value on defence whatsoever".
Healey also faced criticism from the left, with the general secretary of the Unite union, Sharon Graham describing the cost of living measures in the Budget as "baby steps".
"Scrapping standing charges on gas and a £100 energy payment for households in council tax bands, A to D, whilst welcome, will not touch the sides, when many forecasts show bills set to jump over £400 in January," she added.
Green Party leader Zack Polanski said it was a Budget "that betrays the future for young people and the planet they inherit".
He added: "The chancellor didn't mention climate once but praised bankers repeatedly."
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqpvgxz3y49go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T18:45:09+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ab01/live/ce128db0-d2fc-11f1-a701-fddedf244c16.jpg",
    readTime: 10,
  },
  {
    id: "will-i-get-the-100-energy-payment-and-wh-e2c0cb64",
    title: "Will I get the £100 energy payment and when will I receive it?",
    titleJa: "Will I get the £100 energy payment and when will I receive it?",
    summaryJa: "Here is what you need to know about the payment that millions will receive from January.",
    bodyOriginal: `Will I get the £100 energy payment and when will I receive it?
- Published
Up to 20 million households in England will get a £100 payment to help with their energy bills this winter, Chancellor John Healey has announced in his Budget.
Here's what you need to know about the payment.
How much is it?
For many people, the £100 on offer is a lot of money, but it's worth considering the context.
A typical yearly energy bill is forecast to jump by £276 in January, according to consultants Cornwall Insight.
And some more recent forecasts suggest a typical annual bill could rise by £400 or so to £2,100 in January.
Therefore many people will still feel worse off despite the payment.
Will I get the payment? And how can I check?
Those living in properties which are in council tax bands A to D in England will get the payment, the government has said.
As such, it's worth checking which council tax band your home is in, external. If you live in England, you can use the search function by typing your postcode into the box.
If you get a paper council tax bill, your band will also be printed on there.
Will I get it if I live in Scotland, Wales or Northern Ireland?
The chancellor said the policy was for England but that funding would be given to Scotland, Wales and Northern Ireland to make the payment as well.
He urged the devolved governments to follow suit to "give people of all nations in the UK breathing space on their energy bills this winter".
The Welsh government has said that it will also make a £100 cost-of-living payment to all households in council tax bands A to D.
The Scottish government said it would "seek to replicate" the £100 energy payment.
Meanwhile, the Northern Irish government does not have the legal authority to make the £100 payments unless it agrees its budget, which it has failed to do since the start of this financial year.
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
How do I get the money? Will I get it if I'm a student or don't pay council tax?
If you pay your council tax by direct debit, the money will be paid directly into the bank account that you use to pay it, from the start of January.
Students living in halls will not get the payment because student halls are not in council tax bands A to D.
However, if you're a student living in a property that is in council tax bands A to D, as in a private home or flat let out by a landlord, then you will get the payment.
Students do not pay council tax so the local authority will be responsible for finding a way of giving them the payments.
This is also the case for those who do not pay council tax because of another kind of exemption, or if you do pay council tax but you do it by cash or some other way.
The government said it would give councils guidance on how local authorities should do this in due course.
Do I have to spend the money on my energy bill?
The government has said the support is to help households with the cost of energy.
But the money will appear directly in people's bank accounts. As such, people could choose to spend it on something else.
How is the government funding this payment?
The chancellor said the money for the £100 cash payments is coming from a tax rise on banks.
The surcharge on banks' corporation tax will rise from 3% to 6% for 15 months from 1 January 2027 to 31 March 2028.
- Published5 hours ago`,
    bodyJa: `Will I get the £100 energy payment and when will I receive it?
- Published
Up to 20 million households in England will get a £100 payment to help with their energy bills this winter, Chancellor John Healey has announced in his Budget.
Here's what you need to know about the payment.
How much is it?
For many people, the £100 on offer is a lot of money, but it's worth considering the context.
A typical yearly energy bill is forecast to jump by £276 in January, according to consultants Cornwall Insight.
And some more recent forecasts suggest a typical annual bill could rise by £400 or so to £2,100 in January.
Therefore many people will still feel worse off despite the payment.
Will I get the payment? And how can I check?
Those living in properties which are in council tax bands A to D in England will get the payment, the government has said.
As such, it's worth checking which council tax band your home is in, external. If you live in England, you can use the search function by typing your postcode into the box.
If you get a paper council tax bill, your band will also be printed on there.
Will I get it if I live in Scotland, Wales or Northern Ireland?
The chancellor said the policy was for England but that funding would be given to Scotland, Wales and Northern Ireland to make the payment as well.
He urged the devolved governments to follow suit to "give people of all nations in the UK breathing space on their energy bills this winter".
The Welsh government has said that it will also make a £100 cost-of-living payment to all households in council tax bands A to D.
The Scottish government said it would "seek to replicate" the £100 energy payment.
Meanwhile, the Northern Irish government does not have the legal authority to make the £100 payments unless it agrees its budget, which it has failed to do since the start of this financial year.
Your pay, energy bills and savings: How the Budget affects you
- Published5 hours ago
How do I get the money? Will I get it if I'm a student or don't pay council tax?
If you pay your council tax by direct debit, the money will be paid directly into the bank account that you use to pay it, from the start of January.
Students living in halls will not get the payment because student halls are not in council tax bands A to D.
However, if you're a student living in a property that is in council tax bands A to D, as in a private home or flat let out by a landlord, then you will get the payment.
Students do not pay council tax so the local authority will be responsible for finding a way of giving them the payments.
This is also the case for those who do not pay council tax because of another kind of exemption, or if you do pay council tax but you do it by cash or some other way.
The government said it would give councils guidance on how local authorities should do this in due course.
Do I have to spend the money on my energy bill?
The government has said the support is to help households with the cost of energy.
But the money will appear directly in people's bank accounts. As such, people could choose to spend it on something else.
How is the government funding this payment?
The chancellor said the money for the £100 cash payments is coming from a tax rise on banks.
The surcharge on banks' corporation tax will rise from 3% to 6% for 15 months from 1 January 2027 to 31 March 2028.
- Published5 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c35yn8x748e9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T17:47:37+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c06e/live/66b0c920-d2ed-11f1-8d86-83eebc838351.jpg",
    readTime: 8,
  },
  {
    id: "your-pay-energy-bills-and-savings-how-th-d2638f43",
    title: "Your pay, energy bills and savings: How the Budget affects you",
    titleJa: "Your pay, energy bills and savings: How the Budget affects you",
    summaryJa: "Changes announced by Chancellor John Healey in his first Budget will affect your finances directly. Here's how.",
    bodyOriginal: `Your pay, energy bills and savings: How the Budget affects you
- Published
Families facing cost-of-living pressures are being offered some help, or "breathing space" as Chancellor John Healey is calling it.
The help comes as prices are rising faster than expected with annual energy bills in particular likely to increase by hundreds of pounds in January.
Here's how the key announcements in the Budget affect you and your money.
Energy bills
If you are living in a home in council tax bands A to D in England, you will receive a one-off £100 "Household Energy Payment" from January, funded by extra tax on banks.
It will be paid directly into your bank account.
Council tax bands are listed below - you can check which one you are in by looking at your annual bill or checking the government's website, external, although that was struggling to cope with traffic after the announcement.
Administrations in Scotland, Wales and Northern Ireland will receive the equivalent funding, and they will decide whether to introduce the same payment.
This is designed to help with soaring energy bills, with some forecasts suggesting a typical annual bill could rise by £400 or so to £2,100 in January the saving will be only a portion of that. Although it's designated for energy bills, you can spend the money on anything you wish.
The VAT cut on electricity bills, which was introduced in October, will also be extended to July. It was due to end in April.
Budget 2026: Key points at a glance
- Published5 hours ago
Gas standing charges
The fee for connecting to your gas supply so called standing charges will be scrapped in England, Scotland and Wales, next year "or as soon as possible after", the chancellor said.
These fixed daily charges will then be shifted onto the price you pay for each unit of energy.
The Treasury calculates that 60% of households will save an average of £45 a year, with lower users gaining the most. But the saving will come after the projected big rise in bills in January.
Higher users - in the biggest houses but also large, low-income families - will pay more than they currently do.
The government wants to extend reforms to electricity standing charges later.
Fuel duty
The 5p "temporary" cut in fuel duty on petrol and diesel, introduced by Rishi Sunak in 2022, will be extended to July. It was scheduled to be phased out from January.
It means drivers will still pay the levy at 52.95p per litre.
Motor fuel prices have risen sharply owing to the continued impact of the Iran war on drivers, with diesel having recently hit new records when it moved above £2 per litre.
The cost of filling a typical family car with diesel has gone up by around £30 since late February. A tankful of petrol costs about £23 more.
Changes to cash Isa scrapped
The chancellor has scrapped his predecessor's plans to reduce the annual amount people can save tax-free in cash in Individual Savings Accounts (Isas).
Rachel Reeves had wanted the policy to encourage personal investment in stocks and shares.
It meant, from April 2027, if you're under 65, you would only be able to save £12,000 a year in cash in an Isa, rather than £20,000.
But that plan has now been ditched.
Instead, the government plans to create a new "Starter Isa" for first-time investors.
More tax for some savers and landlords
If you have a large amount in savings, or if you fail to use the tax-free Isa allowance, then you will pay more tax from April.
You do not pay tax on all savings. There is the annual £20,000 Isa allowance, and an annual savings income allowance (in other words, the interest received on a savings pot) of £1,000 for basic rate taxpayers and £500 for higher-rate taxpayers.
But beyond that savings tax rates will rise by four percentage points to 24% and 44% respectively from April.
Landlords could also pay more in tax. In analysis published on Wednesday, the Office for Budget Responsibility (OBR) said these steps along with measures over the past decade that have reduced private landlord returns "collectively risk leading to a steady rise in rents".
Minimum wage rise but you'll pay more tax
Minimum wage rates will rise by 3.9% in April. It means:
Eligible workers aged 21 and over on the National Living Wage will receive £13.21 an hour, up from £12.71
If you are aged 18, 19 or 20, the National Minimum Wage will increase to £11.27 an hour, up from £10.85
For those aged 16 or 17, the minimum wage will rise to £8.31 an hour, up from £8
The separate apprentice rate which applies to eligible people under 19 - or those over 19 in the first year of an apprenticeship – will also increase to £8.31 an hour, from £8
However, these figures mean, this time around, there's no progress on Labour's manifesto promise to narrow the gap in minimum wages between older and younger workers.
For all workers, the ongoing freeze in the income bands, or thresholds, at which income tax is paid went unmentioned in the Budget.
But it means any kind of pay rise could drag you into a higher tax bracket, or see a greater proportion of your income taxed than would otherwise be expected. Scotland has its own income tax bands.
How much is the minimum wage going up by?
- Published7 hours ago
State pension changes
The triple lock policy means that the state pension will go up in line with average wage increases, at 3.9%.
It means:
the flat-rate state pension for those who reached state pension age after April 2016 will be £250.70 a week, or £13,036.40 a year, up £488 on now
the old basic state pension for those who reached state pension age before April 2016 will be £192.10 a week, or £9,989.20 a year, up £374.40 on now
The government had already committed to not taxing people who only get an income from the state pension.
The chancellor said this would be the case until at least 2030, as there will be a new Pension Tax Allowance, so pensioners with an income up to the value of the full new state pension will not pay income tax.
First-time buyers
The First Time Buyer Isa has been in the planning stages with the government for a while.
Healey has confirmed that it is intended to replace the often-criticised Lifetime Isa.
The penalty for withdrawing savings from a Lifetime Isa if you are buying a home above the £450,000 threshold will be scrapped.
Separately, he confirmed the Your First Home equity scheme to allow first-time buyers in England to buy a new-build home with a deposit of 2.5%. It would provide them with a loan worth 20% of their property's value to help pay for the purchase.
Student loans
The government has made no changes to student loan rates - saying only that it is being "kept under review".
There has been some backlash after the previous chancellor froze the repayment threshold for Plan 2 student loans, which were given out for just over a decade in England from 2012.
It means the salary at which borrowers start paying back their loans is due to stay at £29,385 in April and remain there for three years – so graduates start repaying sooner and repay more each month than they would otherwise have done.
What else will affect your money?
Some announcements affecting your finances have already been made by the government.
They include:
Tariffs removed from 100 food items such as baked beans and garlic, which the government calculates could save households up to £21 per year - or 40p a week - when combined with existing tariff suspensions that were introduced in June
Allowing carers to earn more than an existing earnings limit without losing their entire allowance, replacing it with a taper mechanism instead. However, this will not come in until 2030
Giving two weeks of paternity pay to self-employed fathers, who have previously missed out on payments of up to £194 a week for the period
Making permanent a 55p per mile tax-free mileage rate for those driving up to 10,000 miles for work, with the rate rising from 25p per mile to 35p above that
The prime minister's plan to reinstate the £2 cap on bus fares in England from January to be in effect throughout 2027. Some cities already have caps, and funding is being given to the devolved nations`,
    bodyJa: `Your pay, energy bills and savings: How the Budget affects you
- Published
Families facing cost-of-living pressures are being offered some help, or "breathing space" as Chancellor John Healey is calling it.
The help comes as prices are rising faster than expected with annual energy bills in particular likely to increase by hundreds of pounds in January.
Here's how the key announcements in the Budget affect you and your money.
Energy bills
If you are living in a home in council tax bands A to D in England, you will receive a one-off £100 "Household Energy Payment" from January, funded by extra tax on banks.
It will be paid directly into your bank account.
Council tax bands are listed below - you can check which one you are in by looking at your annual bill or checking the government's website, external, although that was struggling to cope with traffic after the announcement.
Administrations in Scotland, Wales and Northern Ireland will receive the equivalent funding, and they will decide whether to introduce the same payment.
This is designed to help with soaring energy bills, with some forecasts suggesting a typical annual bill could rise by £400 or so to £2,100 in January the saving will be only a portion of that. Although it's designated for energy bills, you can spend the money on anything you wish.
The VAT cut on electricity bills, which was introduced in October, will also be extended to July. It was due to end in April.
Budget 2026: Key points at a glance
- Published5 hours ago
Gas standing charges
The fee for connecting to your gas supply so called standing charges will be scrapped in England, Scotland and Wales, next year "or as soon as possible after", the chancellor said.
These fixed daily charges will then be shifted onto the price you pay for each unit of energy.
The Treasury calculates that 60% of households will save an average of £45 a year, with lower users gaining the most. But the saving will come after the projected big rise in bills in January.
Higher users - in the biggest houses but also large, low-income families - will pay more than they currently do.
The government wants to extend reforms to electricity standing charges later.
Fuel duty
The 5p "temporary" cut in fuel duty on petrol and diesel, introduced by Rishi Sunak in 2022, will be extended to July. It was scheduled to be phased out from January.
It means drivers will still pay the levy at 52.95p per litre.
Motor fuel prices have risen sharply owing to the continued impact of the Iran war on drivers, with diesel having recently hit new records when it moved above £2 per litre.
The cost of filling a typical family car with diesel has gone up by around £30 since late February. A tankful of petrol costs about £23 more.
Changes to cash Isa scrapped
The chancellor has scrapped his predecessor's plans to reduce the annual amount people can save tax-free in cash in Individual Savings Accounts (Isas).
Rachel Reeves had wanted the policy to encourage personal investment in stocks and shares.
It meant, from April 2027, if you're under 65, you would only be able to save £12,000 a year in cash in an Isa, rather than £20,000.
But that plan has now been ditched.
Instead, the government plans to create a new "Starter Isa" for first-time investors.
More tax for some savers and landlords
If you have a large amount in savings, or if you fail to use the tax-free Isa allowance, then you will pay more tax from April.
You do not pay tax on all savings. There is the annual £20,000 Isa allowance, and an annual savings income allowance (in other words, the interest received on a savings pot) of £1,000 for basic rate taxpayers and £500 for higher-rate taxpayers.
But beyond that savings tax rates will rise by four percentage points to 24% and 44% respectively from April.
Landlords could also pay more in tax. In analysis published on Wednesday, the Office for Budget Responsibility (OBR) said these steps along with measures over the past decade that have reduced private landlord returns "collectively risk leading to a steady rise in rents".
Minimum wage rise but you'll pay more tax
Minimum wage rates will rise by 3.9% in April. It means:
Eligible workers aged 21 and over on the National Living Wage will receive £13.21 an hour, up from £12.71
If you are aged 18, 19 or 20, the National Minimum Wage will increase to £11.27 an hour, up from £10.85
For those aged 16 or 17, the minimum wage will rise to £8.31 an hour, up from £8
The separate apprentice rate which applies to eligible people under 19 - or those over 19 in the first year of an apprenticeship – will also increase to £8.31 an hour, from £8
However, these figures mean, this time around, there's no progress on Labour's manifesto promise to narrow the gap in minimum wages between older and younger workers.
For all workers, the ongoing freeze in the income bands, or thresholds, at which income tax is paid went unmentioned in the Budget.
But it means any kind of pay rise could drag you into a higher tax bracket, or see a greater proportion of your income taxed than would otherwise be expected. Scotland has its own income tax bands.
How much is the minimum wage going up by?
- Published7 hours ago
State pension changes
The triple lock policy means that the state pension will go up in line with average wage increases, at 3.9%.
It means:
the flat-rate state pension for those who reached state pension age after April 2016 will be £250.70 a week, or £13,036.40 a year, up £488 on now
the old basic state pension for those who reached state pension age before April 2016 will be £192.10 a week, or £9,989.20 a year, up £374.40 on now
The government had already committed to not taxing people who only get an income from the state pension.
The chancellor said this would be the case until at least 2030, as there will be a new Pension Tax Allowance, so pensioners with an income up to the value of the full new state pension will not pay income tax.
First-time buyers
The First Time Buyer Isa has been in the planning stages with the government for a while.
Healey has confirmed that it is intended to replace the often-criticised Lifetime Isa.
The penalty for withdrawing savings from a Lifetime Isa if you are buying a home above the £450,000 threshold will be scrapped.
Separately, he confirmed the Your First Home equity scheme to allow first-time buyers in England to buy a new-build home with a deposit of 2.5%. It would provide them with a loan worth 20% of their property's value to help pay for the purchase.
Student loans
The government has made no changes to student loan rates - saying only that it is being "kept under review".
There has been some backlash after the previous chancellor froze the repayment threshold for Plan 2 student loans, which were given out for just over a decade in England from 2012.
It means the salary at which borrowers start paying back their loans is due to stay at £29,385 in April and remain there for three years – so graduates start repaying sooner and repay more each month than they would otherwise have done.
What else will affect your money?
Some announcements affecting your finances have already been made by the government.
They include:
Tariffs removed from 100 food items such as baked beans and garlic, which the government calculates could save households up to £21 per year - or 40p a week - when combined with existing tariff suspensions that were introduced in June
Allowing carers to earn more than an existing earnings limit without losing their entire allowance, replacing it with a taper mechanism instead. However, this will not come in until 2030
Giving two weeks of paternity pay to self-employed fathers, who have previously missed out on payments of up to £194 a week for the period
Making permanent a 55p per mile tax-free mileage rate for those driving up to 10,000 miles for work, with the rate rising from 25p per mile to 35p above that
The prime minister's plan to reinstate the £2 cap on bus fares in England from January to be in effect throughout 2027. Some cities already have caps, and funding is being given to the devolved nations`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr0j05vxlwjzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T16:43:35+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5846/live/65892820-d2e4-11f1-8d3a-ef62f316044e.jpg",
    readTime: 10,
  },
  {
    id: "google-alters-its-cloud-playbook-enlisti-832c99b5",
    title: "Google alters its cloud playbook, enlisting partners to sell more AI chips",
    titleJa: "Google alters its cloud playbook, enlisting partners to sell more AI chips",
    summaryJa: "Google is opening its TPU business beyond its own cloud as custom chips become a bigger engine for growth.",
    bodyOriginal: `Google has spent years pitching customers on the advantage of buying its chips, models and cloud services in one place, offering a full stack that rivals Amazon and Microsoft have tried to replicate.
Now, the company is pushing its equipment outside of its own walls to reach more customers and build a bigger business around artificial intelligence chips, a market that Nvidia has dominated.
A day ahead of its third-quarter earnings report, Alphabet said on Tuesday that Oracle will offer Google's tensor processing units, or TPUs, the custom chips the internet giant has been developing since 2013. It's the first time customers will be able to access TPUs outside of Google's infrastructure, and shows that cloud boss Thomas Kurian, who previously spent more than 20 years at Oracle, is looking elsewhere for growth.
"They're a very strong competitor, and it's very possible that they could eventually take market share from Nvidia," said Chris Ballard, managing director of Check Capital Management, referring to Google's position in chips.
Kurian, who joined Google in late 2018, is operating from a position of strength. Analysts expect Google Cloud revenue to jump about 90% from a year earlier, after growing 82% in the second quarter, with TPUs contributing to its momentum.
"Google was great at doing its own thing, but it was never able to serve customers," said Uday Cheruvu, a portfolio manager at Harding Loevner, which owns Alphabet shares. "That mindset has changed."
Google opened up TPUs to outside data centers in the second quarter, before this week's announcement with Oracle.
Estimates for the TPU business vary widely, but they all point to significant growth. TD Cowen models $9.4 billion in TPU sales for the second half of this year and $62.5 billion for 2027. Wells Fargo expects about $9 billion in third-quarter sales and $99 billion next year.
CFO Anat Ashkenazi said on the last earnings call in July that only a small portion of TPU revenue from existing agreements will be recognized this year, with the "vast majority" coming in 2027. She also said Google planned to use more outside capacity in the third quarter while the company builds out its own infrastructure.
With $25 billion in second-quarter cloud revenue, Google trailed Amazon Web Services at $42 billion and Microsoft Azure at $29 billion.
But Google is growing the fastest.
"It's almost like the bigger the pie is getting, the faster they're accelerating into it," said Ballard, whose firm owned about $236 million in Alphabet stock as of June 30.
'Optimize the whole stack'
While Kurian aims to get more TPUs into the market by turning to outside partners, he has to balance the benefits of building the customer base with his company's own technology needs.
At a Goldman Sachs conference in September, Kurian said Google's AI servers pay for themselves in under two years, and servers running its own silicon reach payback in roughly half that time.
"It's because we can optimize that whole stack," Kurian said.
Industry research SemiAnalysis estimates that Google's latest Ironwood TPU costs about 44% less to own and operate than an Nvidia GB200 server.
There's also the margin hit that comes with external TPU sales. TD Cowen estimates a 20% operating margin on TPU sales, compared with an overall cloud margin of about 35% last quarter. Cheruvu said he doesn't think Google's cloud operating margin could widen much beyond the mid-30s.
Google declined comment.
Google's biggest TPU customer is one of its top AI competitors.
Anthropic, whose Claude models compete with Gemini, agreed last October to use up to 1 million TPUs in a deal worth tens of billions of dollars. Mizuho says that agreement brings nearly a gigawatt of capacity online this year and describes the relationship as Google "arming its closest model competitor."
OpenAI is also planning to buy TPUs from Google, CNBC confirmed after The Information first reported on the ChatGPT maker's intentions on Tuesday.
Anthropic is getting outside help to finance its Google silicon. This week, Broadcom, which works with Google on TPUs, detailed a $63 billion vehicle backed by Blackstone and three big banks that will buy TPUs and networking gear from Broadcom and lease them to Anthropic for five years. According to analysts from William Blair, the financing plan covers about half of Anthropic's 2027 needs, which suggests more financing is coming.
In its IPO filing on Monday, Anthropic said it uses silicon from Google, Amazon, Nvidia and Advanced Micro Devices, allowing the company to "select chips based on the best price-performance and efficiency characteristics for each workload."
Regarding Google and Broadcom, Anthropic said the partnerships "provide us with access to compute capacity powered by Google TPUs across multiple generations of the TPU platform."
WATCH: Gemini product chief details weeks of company-wide testing ahead of Gemini 4 Argon launch`,
    bodyJa: `Google has spent years pitching customers on the advantage of buying its chips, models and cloud services in one place, offering a full stack that rivals Amazon and Microsoft have tried to replicate.
Now, the company is pushing its equipment outside of its own walls to reach more customers and build a bigger business around artificial intelligence chips, a market that Nvidia has dominated.
A day ahead of its third-quarter earnings report, Alphabet said on Tuesday that Oracle will offer Google's tensor processing units, or TPUs, the custom chips the internet giant has been developing since 2013. It's the first time customers will be able to access TPUs outside of Google's infrastructure, and shows that cloud boss Thomas Kurian, who previously spent more than 20 years at Oracle, is looking elsewhere for growth.
"They're a very strong competitor, and it's very possible that they could eventually take market share from Nvidia," said Chris Ballard, managing director of Check Capital Management, referring to Google's position in chips.
Kurian, who joined Google in late 2018, is operating from a position of strength. Analysts expect Google Cloud revenue to jump about 90% from a year earlier, after growing 82% in the second quarter, with TPUs contributing to its momentum.
"Google was great at doing its own thing, but it was never able to serve customers," said Uday Cheruvu, a portfolio manager at Harding Loevner, which owns Alphabet shares. "That mindset has changed."
Google opened up TPUs to outside data centers in the second quarter, before this week's announcement with Oracle.
Estimates for the TPU business vary widely, but they all point to significant growth. TD Cowen models $9.4 billion in TPU sales for the second half of this year and $62.5 billion for 2027. Wells Fargo expects about $9 billion in third-quarter sales and $99 billion next year.
CFO Anat Ashkenazi said on the last earnings call in July that only a small portion of TPU revenue from existing agreements will be recognized this year, with the "vast majority" coming in 2027. She also said Google planned to use more outside capacity in the third quarter while the company builds out its own infrastructure.
With $25 billion in second-quarter cloud revenue, Google trailed Amazon Web Services at $42 billion and Microsoft Azure at $29 billion.
But Google is growing the fastest.
"It's almost like the bigger the pie is getting, the faster they're accelerating into it," said Ballard, whose firm owned about $236 million in Alphabet stock as of June 30.
'Optimize the whole stack'
While Kurian aims to get more TPUs into the market by turning to outside partners, he has to balance the benefits of building the customer base with his company's own technology needs.
At a Goldman Sachs conference in September, Kurian said Google's AI servers pay for themselves in under two years, and servers running its own silicon reach payback in roughly half that time.
"It's because we can optimize that whole stack," Kurian said.
Industry research SemiAnalysis estimates that Google's latest Ironwood TPU costs about 44% less to own and operate than an Nvidia GB200 server.
There's also the margin hit that comes with external TPU sales. TD Cowen estimates a 20% operating margin on TPU sales, compared with an overall cloud margin of about 35% last quarter. Cheruvu said he doesn't think Google's cloud operating margin could widen much beyond the mid-30s.
Google declined comment.
Google's biggest TPU customer is one of its top AI competitors.
Anthropic, whose Claude models compete with Gemini, agreed last October to use up to 1 million TPUs in a deal worth tens of billions of dollars. Mizuho says that agreement brings nearly a gigawatt of capacity online this year and describes the relationship as Google "arming its closest model competitor."
OpenAI is also planning to buy TPUs from Google, CNBC confirmed after The Information first reported on the ChatGPT maker's intentions on Tuesday.
Anthropic is getting outside help to finance its Google silicon. This week, Broadcom, which works with Google on TPUs, detailed a $63 billion vehicle backed by Blackstone and three big banks that will buy TPUs and networking gear from Broadcom and lease them to Anthropic for five years. According to analysts from William Blair, the financing plan covers about half of Anthropic's 2027 needs, which suggests more financing is coming.
In its IPO filing on Monday, Anthropic said it uses silicon from Google, Amazon, Nvidia and Advanced Micro Devices, allowing the company to "select chips based on the best price-performance and efficiency characteristics for each workload."
Regarding Google and Broadcom, Anthropic said the partnerships "provide us with access to compute capacity powered by Google TPUs across multiple generations of the TPU platform."
WATCH: Gemini product chief details weeks of company-wide testing ahead of Gemini 4 Argon launch`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/google-alters-cloud-playbook-turning-to-partners-to-sell-more-ai-chips.html",
    publishedAt: "2026-10-28T12:37:51+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "my-wife-cried-when-i-found-out-she-had-o-7376d159",
    title: "My wife cried when I found out she had only $80,000 in her 401(k). I have $2.2 million. Am I wrong to be shocked?",
    titleJa: "My wife cried when I found out she had only $80,000 in her 401(k). I have $2.2 million. Am I wrong to be shocked?",
    summaryJa: "“When I brought up retiring last spring, she said she was ready whenever I was, and I took that to mean we were in good shape.”",
    bodyOriginal: `“When I brought up retiring last spring, she said she was ready whenever I was, and I took that to mean we were in good shape.”`,
    bodyJa: `“When I brought up retiring last spring, she said she was ready whenever I was, and I took that to mean we were in good shape.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-wife-has-only-80-000-saved-for-retirement-i-have-2-2-million-am-i-wrong-to-be-shocked-3e27b490?mod=mw_rss_topstories",
    publishedAt: "2026-10-28T12:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-19916000",
    readTime: 2,
  },
  {
    id: "my-abusive-ex-husband-promised-20-000-fo-5f9214bf",
    title: "My abusive ex-husband promised $20,000 for our kids’ education. Now he refuses to pay. Is he legally obligated?",
    titleJa: "My abusive ex-husband promised $20,000 for our kids’ education. Now he refuses to pay. Is he legally obligated?",
    summaryJa: "“Before our divorce, my former mother-in-law entrusted him with $20,000 for each of our daughters to invest on their behalf.”",
    bodyOriginal: `“Before our divorce, my former mother-in-law entrusted him with $20,000 for each of our daughters to invest on their behalf.”`,
    bodyJa: `“Before our divorce, my former mother-in-law entrusted him with $20,000 for each of our daughters to invest on their behalf.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-abusive-ex-husband-promised-20-000-for-our-kids-education-now-he-refuses-to-pay-is-he-legally-obligated-325ef50f?mod=mw_rss_topstories",
    publishedAt: "2026-10-28T12:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-95596293",
    readTime: 2,
  },
  {
    id: "stellantis-reports-4-5-billion-cash-drai-95ff06cd",
    title: "Stellantis reports $4.5 billion cash drain as massive turnaround plan continues",
    titleJa: "Stellantis reports $4.5 billion cash drain as massive turnaround plan continues",
    summaryJa: "European car giant Stellantis said Wednesday that it recorded a 4 billion euro ($4.5 billion) cash shortfall in the third quarter.",
    bodyOriginal: `European car giant Stellantis reported a 4 billion euro ($4.5 billion) cash shortfall in the third quarter as it ploughed ahead with a $70 billion turnaround strategy to restore profitability.
Third-quarter revenues rose 1% to 37.6 billion euros from a year ago, the Chrysler and Jeep owner said on Wednesday, while adjusted operating income rose 184% to 256 million euros from 90 million euros a year earlier.
As the company made progress on its turnaround plan, its industrial free cash flow improved to negative 4 billion euros, up from negative 4.3 billion the year prior.
"During the quarter, we continued to make progress in the early execution of our FaSTLAne 2030 plan, launching new products, accelerating partnerships as planned, and delivering meaningful improvements in manufacturing and quality," Stellantis CEO Antonio Filosa said in a press release.
Wall Street reacted positively to the results as well as the company's ability to maintain its 2026 guidance as other European automakers struggle. Stellantis shares Wednesday were up roughly 6% in Milan as well as premarket trading in New York, but remain sharply down since the beginning of the year.
Stellantis also reconfirmed its target to achieve positive free cash flow next year, which is a main focus for investors.
"Q3 was soft, but consensus expectations were far lower. Key here is that '26 Guidance was maintained while other auto OEMs and suppliers are cutting on elevated costs," RBC Capital Markets analyst Tom Narayan said Wednesday in an investor note.
Stellantis' 2026 guidance includes a mid-single-digit percentage increase in net revenue and a low-single-digit adjusted operating margin.
The third-quarter results came as the transatlantic company continues to implement a 60 billion euro turnaround strategy after years of sales declines, especially in North America.
The plan includes investing 36 billion euros in its portfolio of automotive brands, with 60% of the cash to go towards its struggling North America sector. It also plans to introduce new vehicles, refresh models, and incorporate new technologies in its products.
China competition
European carmakers, including Stellantis, have been struggling in China as domestic brands like Xiaomi, BYD and Geely gain ground and intensify competition.
Just this week, German luxury carmaker Porsche said it would reduce its exposure to China as car sales decline in the region. Meanwhile, Mercedes-Benz said its third-quarter car sales slumped due to a "challenging market environment," in the country.
Earlier this month, Filosa told CNBC that European regulators need to do more to incentivize carmakers to manufacture vehicles in the region to fend off Chinese rivals.
Filosa called for regulation that "incentivizes, rewards, and protects the ones that are able to demonstrate that they design cars, engineer cars."`,
    bodyJa: `European car giant Stellantis reported a 4 billion euro ($4.5 billion) cash shortfall in the third quarter as it ploughed ahead with a $70 billion turnaround strategy to restore profitability.
Third-quarter revenues rose 1% to 37.6 billion euros from a year ago, the Chrysler and Jeep owner said on Wednesday, while adjusted operating income rose 184% to 256 million euros from 90 million euros a year earlier.
As the company made progress on its turnaround plan, its industrial free cash flow improved to negative 4 billion euros, up from negative 4.3 billion the year prior.
"During the quarter, we continued to make progress in the early execution of our FaSTLAne 2030 plan, launching new products, accelerating partnerships as planned, and delivering meaningful improvements in manufacturing and quality," Stellantis CEO Antonio Filosa said in a press release.
Wall Street reacted positively to the results as well as the company's ability to maintain its 2026 guidance as other European automakers struggle. Stellantis shares Wednesday were up roughly 6% in Milan as well as premarket trading in New York, but remain sharply down since the beginning of the year.
Stellantis also reconfirmed its target to achieve positive free cash flow next year, which is a main focus for investors.
"Q3 was soft, but consensus expectations were far lower. Key here is that '26 Guidance was maintained while other auto OEMs and suppliers are cutting on elevated costs," RBC Capital Markets analyst Tom Narayan said Wednesday in an investor note.
Stellantis' 2026 guidance includes a mid-single-digit percentage increase in net revenue and a low-single-digit adjusted operating margin.
The third-quarter results came as the transatlantic company continues to implement a 60 billion euro turnaround strategy after years of sales declines, especially in North America.
The plan includes investing 36 billion euros in its portfolio of automotive brands, with 60% of the cash to go towards its struggling North America sector. It also plans to introduce new vehicles, refresh models, and incorporate new technologies in its products.
China competition
European carmakers, including Stellantis, have been struggling in China as domestic brands like Xiaomi, BYD and Geely gain ground and intensify competition.
Just this week, German luxury carmaker Porsche said it would reduce its exposure to China as car sales decline in the region. Meanwhile, Mercedes-Benz said its third-quarter car sales slumped due to a "challenging market environment," in the country.
Earlier this month, Filosa told CNBC that European regulators need to do more to incentivize carmakers to manufacture vehicles in the region to fend off Chinese rivals.
Filosa called for regulation that "incentivizes, rewards, and protects the ones that are able to demonstrate that they design cars, engineer cars."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/stellantis-45-billion-cash-drain-turnaround.html",
    publishedAt: "2026-10-28T11:45:16+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 7,
  },
  {
    id: "at-least-30-people-reported-dead-in-high-a7a338df",
    title: "At least 30 people reported dead in high-speed Spain train crash",
    titleJa: "At least 30 people reported dead in high-speed Spain train crash",
    summaryJa: "At least 30 people are reported to have been killed in a collision between two trains in the Spanish province of Toledo.The high-speed trains collided shortly before 9:15 a.m. local time (4:15 a.m. ET), when emergency services were deployed to the scene. It occurred on the Madrid to Seville line, with a stationary vehicle reportedly being hit by the other at a speed of over 100 kilometers per hour (62 miles per hour).",
    bodyOriginal: `At least 30 people are reported to have been killed in a collision between two trains in the Spanish province of Toledo.
The high-speed trains collided shortly before 9:15 a.m. local time (4:15 a.m. ET), when emergency services were deployed to the scene. It occurred on the Madrid to Seville line, with a stationary vehicle reportedly being hit by the other at a speed of over 100 kilometers per hour (62 miles per hour).
Authorities said they would open a local sports hall to provide assistance to those affected, with an Advanced Medical Post being set up at the site of the crash to triage the injured, provide medical care and transfer those requiring further treatment to hospitals. It is currently unclear how many people suffered injuries.
Railway infrastructure manager Adif is investigating the sequence of events surrounding the accident, Spanish news agency EFE reported on Wednesday.
Adif said in a post on X on Wednesday morning that traffic on the Madrid to Andalucía high-speed line had been interrupted.
Newspaper El Pais reported that officials fear the number of confirmed fatalities may rise, with sources telling the outlet that the collision could have a worse outcome than a high-speed crash in southern Spain that killed 45 people earlier this year.
"We don't have a figure, but it's going to be a major tragedy," Spain's Health Minister Mónica García told a television news station, according to El Pais.
Officials currently do not know for certain what caused the collision, but local reports said initial analyses pointed to human error. Government sources told El Pais that it appeared an Adif operator made a mistake when railway signaling systems failed. The systems are automated, but they rely on manual operation when signals fail.
The trains were operated by AVE and Iryo, according to local media, with at least two carriages said to have fallen down an embankment after the crash. More than 500 passengers were on board the two trains, El Pais said.
Spanish Prime Minister Pedro Sanchez said in a post on X that he was "shocked" by the accident.
"Emergency services are working on the ground to assist those affected and ensure their safety, in coordination with all the involved administrations," he said, according to a translation. "My affection, solidarity, and support to all the victims and their families."
Sanchez's political future will be tested in a snap election next month, which he called following widespread unrest over Spain's housing crisis.
Santiago Abascal, leader of the far-right Vox party — which is expected to make gains when Spain goes to the polls — pointed the finger at Sanchez's government over the train accident on Wednesday.
"Tragedy again. Rage again over the neglect, the ruin, and the betrayal suffered by the Spanish people," he said in a post on X.
— CNBC's Charlotte Reed contributed to this article.`,
    bodyJa: `At least 30 people are reported to have been killed in a collision between two trains in the Spanish province of Toledo.
The high-speed trains collided shortly before 9:15 a.m. local time (4:15 a.m. ET), when emergency services were deployed to the scene. It occurred on the Madrid to Seville line, with a stationary vehicle reportedly being hit by the other at a speed of over 100 kilometers per hour (62 miles per hour).
Authorities said they would open a local sports hall to provide assistance to those affected, with an Advanced Medical Post being set up at the site of the crash to triage the injured, provide medical care and transfer those requiring further treatment to hospitals. It is currently unclear how many people suffered injuries.
Railway infrastructure manager Adif is investigating the sequence of events surrounding the accident, Spanish news agency EFE reported on Wednesday.
Adif said in a post on X on Wednesday morning that traffic on the Madrid to Andalucía high-speed line had been interrupted.
Newspaper El Pais reported that officials fear the number of confirmed fatalities may rise, with sources telling the outlet that the collision could have a worse outcome than a high-speed crash in southern Spain that killed 45 people earlier this year.
"We don't have a figure, but it's going to be a major tragedy," Spain's Health Minister Mónica García told a television news station, according to El Pais.
Officials currently do not know for certain what caused the collision, but local reports said initial analyses pointed to human error. Government sources told El Pais that it appeared an Adif operator made a mistake when railway signaling systems failed. The systems are automated, but they rely on manual operation when signals fail.
The trains were operated by AVE and Iryo, according to local media, with at least two carriages said to have fallen down an embankment after the crash. More than 500 passengers were on board the two trains, El Pais said.
Spanish Prime Minister Pedro Sanchez said in a post on X that he was "shocked" by the accident.
"Emergency services are working on the ground to assist those affected and ensure their safety, in coordination with all the involved administrations," he said, according to a translation. "My affection, solidarity, and support to all the victims and their families."
Sanchez's political future will be tested in a snap election next month, which he called following widespread unrest over Spain's housing crisis.
Santiago Abascal, leader of the far-right Vox party — which is expected to make gains when Spain goes to the polls — pointed the finger at Sanchez's government over the train accident on Wednesday.
"Tragedy again. Rage again over the neglect, the ruin, and the betrayal suffered by the Spanish people," he said in a post on X.
— CNBC's Charlotte Reed contributed to this article.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/spain-high-speed-train-crash.html",
    publishedAt: "2026-10-28T11:43:12+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 7,
  },
  {
    id: "mortgage-rates-fell-for-the-second-strai-cf559242",
    title: "Mortgage rates fell for the second straight week, but more borrowers still sought savings in riskier loans",
    titleJa: "Mortgage rates fell for the second straight week, but more borrowers still sought savings in riskier loans",
    summaryJa: "Mortgage rates have fallen over the past two weeks, but demand is only slightly higher, and more borrowers are looking for savings in riskier loans.",
    bodyOriginal: `Mortgage rates fell for the second straight week, and that finally brought consumers back to their brokers. A growing share, however, applied for riskier loans at even lower rates.
Total mortgage application volume rose 3.4% last week compared with the previous week, according to the Mortgage Bankers Association's seasonally adjusted index.
The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances, $832,750 or less, decreased to 7.37% from 7.41%, with points increasing to 0.76 from 0.75, including the origination fee, for loans with a 20% down payment.
"The decline in rates gave borrowers some relief, with applications rebounding slightly, particularly conventional applications," said Joel Kan, vice president and deputy chief economist at the MBA, in a release. "Mortgage rates are still more than a percentage point higher than the same week last year and most homeowners still have rates much lower than prevailing market rates."
And that is why refinance is still running well behind where it was last year. Applications to refinance a home loan climbed 3% for the week but were 61% lower than the same week one year ago. About half of all borrowers today have a mortgage rate below 4%, according to data from the Federal Housing Finance Agency's National Mortgage Database.
Applications for a mortgage to purchase a home rose 4% for the week but were still 18% lower than the same week one year ago. While mortgage rates have pulled back some in the last few weeks, they are still much higher than they were just a few months ago, and home prices are still rising. Potential homebuyers are also worried about the broader economy, and, anecdotally, some agents say buyers are waiting to see the results of the midterm elections.
As borrowers search for savings, more are opting for adjustable-rate mortgages. The ARM share of applications increased to 11.3% last week, the highest level in more than a year. The average contract interest rate for 5/1 ARMs decreased to 6.41% from 6.46%. ARMs are considered riskier because they adjust to whatever the current market rate is at the end of their fixed term.
Mortgage rates haven't moved at all to start this week, according to a separate survey from Mortgage News Daily. That is because there has not been much economic data for the bond market to react to. While the Federal Reserve is not expected to announce any change in its interest rate at Wednesday's meeting, markets could move on any commentary from Fed Chairman Kevin Warsh.`,
    bodyJa: `Mortgage rates fell for the second straight week, and that finally brought consumers back to their brokers. A growing share, however, applied for riskier loans at even lower rates.
Total mortgage application volume rose 3.4% last week compared with the previous week, according to the Mortgage Bankers Association's seasonally adjusted index.
The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances, $832,750 or less, decreased to 7.37% from 7.41%, with points increasing to 0.76 from 0.75, including the origination fee, for loans with a 20% down payment.
"The decline in rates gave borrowers some relief, with applications rebounding slightly, particularly conventional applications," said Joel Kan, vice president and deputy chief economist at the MBA, in a release. "Mortgage rates are still more than a percentage point higher than the same week last year and most homeowners still have rates much lower than prevailing market rates."
And that is why refinance is still running well behind where it was last year. Applications to refinance a home loan climbed 3% for the week but were 61% lower than the same week one year ago. About half of all borrowers today have a mortgage rate below 4%, according to data from the Federal Housing Finance Agency's National Mortgage Database.
Applications for a mortgage to purchase a home rose 4% for the week but were still 18% lower than the same week one year ago. While mortgage rates have pulled back some in the last few weeks, they are still much higher than they were just a few months ago, and home prices are still rising. Potential homebuyers are also worried about the broader economy, and, anecdotally, some agents say buyers are waiting to see the results of the midterm elections.
As borrowers search for savings, more are opting for adjustable-rate mortgages. The ARM share of applications increased to 11.3% last week, the highest level in more than a year. The average contract interest rate for 5/1 ARMs decreased to 6.41% from 6.46%. ARMs are considered riskier because they adjust to whatever the current market rate is at the end of their fixed term.
Mortgage rates haven't moved at all to start this week, according to a separate survey from Mortgage News Daily. That is because there has not been much economic data for the bond market to react to. While the Federal Reserve is not expected to announce any change in its interest rate at Wednesday's meeting, markets could move on any commentary from Fed Chairman Kevin Warsh.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/mortgage-rates-fell-for-the-second-straight-week.html",
    publishedAt: "2026-10-28T11:33:43+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "you-may-get-the-right-to-find-out-what-y-cd629619",
    title: "You may get the right to find out what your colleagues earn - here's why",
    titleJa: "You may get the right to find out what your colleagues earn - here's why",
    summaryJa: "Employees should legally be able to find out what their co-workers are earning, the UK's equality watchdog says",
    bodyOriginal: `You may get the right to find out what your colleagues earn - here's why
- Published
Employees should legally be able to find out what their colleagues are earning, the UK's equality watchdog has said.
Bosses should be required to respond to questionaires about colleagues' pay to cut pay discrimination, the Equality and Human Rights Commission (EHRC) has proposed, external.
In addition, employers should be prevented from asking about current salary when offering a job to stop a history of discrimination from carrying on, it said.
Employers in the UK are currently allowed to ask you how much you get paid in your current role, but applicants are under no obligation to tell them.
At present, employers do not have to respond to employee requests for salary information about colleagues.
The EHRC urged lawmakers to make it compulsory for employers to provide information including colleagues' basic pay and hours worked, how employees' pay compares with each other, and information about bonuses, overtime, shift-premiums and performance-related pay, within a specific timeframe.
The rights watchdog argued that this would help cut pay discrimination, especially against women.
Women would also benefit from employers publishing salary details in job adverts, the EHRC has said previously, external.
The job interview question you don't have to answer
- Published5 October
John Kirkpatrick, the EHRC chief executive, told the BBC that employers should not be able to ask about salary history when setting pay.
"When they do, what tends to happen is that can embed a history of disadvantage or discrimination in future salaries," he said.
While employers should be able to offer a competitive salary, this should not "create a pattern that discriminates," he said.
The Fawcett Society, which campaigns for women and gender equality, has previously said that asking the question risked maintaining historic unfair differences in pay due to gender, race and disability inequality.
Rather than offering a salary based on skills, experience and performance, it meant employers rewarded an individual's perceived worth and negotiating skills instead, the society said.
Get in touch
Would you be comfortable with colleagues knowing your pay? How useful would it be?`,
    bodyJa: `You may get the right to find out what your colleagues earn - here's why
- Published
Employees should legally be able to find out what their colleagues are earning, the UK's equality watchdog has said.
Bosses should be required to respond to questionaires about colleagues' pay to cut pay discrimination, the Equality and Human Rights Commission (EHRC) has proposed, external.
In addition, employers should be prevented from asking about current salary when offering a job to stop a history of discrimination from carrying on, it said.
Employers in the UK are currently allowed to ask you how much you get paid in your current role, but applicants are under no obligation to tell them.
At present, employers do not have to respond to employee requests for salary information about colleagues.
The EHRC urged lawmakers to make it compulsory for employers to provide information including colleagues' basic pay and hours worked, how employees' pay compares with each other, and information about bonuses, overtime, shift-premiums and performance-related pay, within a specific timeframe.
The rights watchdog argued that this would help cut pay discrimination, especially against women.
Women would also benefit from employers publishing salary details in job adverts, the EHRC has said previously, external.
The job interview question you don't have to answer
- Published5 October
John Kirkpatrick, the EHRC chief executive, told the BBC that employers should not be able to ask about salary history when setting pay.
"When they do, what tends to happen is that can embed a history of disadvantage or discrimination in future salaries," he said.
While employers should be able to offer a competitive salary, this should not "create a pattern that discriminates," he said.
The Fawcett Society, which campaigns for women and gender equality, has previously said that asking the question risked maintaining historic unfair differences in pay due to gender, race and disability inequality.
Rather than offering a salary based on skills, experience and performance, it meant employers rewarded an individual's perceived worth and negotiating skills instead, the society said.
Get in touch
Would you be comfortable with colleagues knowing your pay? How useful would it be?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmq8nwvj92jdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T10:42:39+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f46a/live/ff9b0180-d2b8-11f1-8cf0-c5d120932f9f.jpg",
    readTime: 6,
  },
  {
    id: "energy-bill-help-minimum-wage-rise-and-b-0be38d30",
    title: "Energy bill help, minimum wage rise and bank taxes - what could be in the Budget?",
    titleJa: "Energy bill help, minimum wage rise and bank taxes - what could be in the Budget?",
    summaryJa: "Energy bill help, minimum wage rise and bank taxes - what could be in the Budget?- Published",
    bodyOriginal: `Energy bill help, minimum wage rise and bank taxes - what could be in the Budget?
- Published
Chancellor John Healey will set out Labour's tax and spending plans when he delivers his first Budget at around 12:30 on Wednesday.
The speech, which usually lasts about an hour, will be broadcast live on BBC iPlayer and on the BBC News website.
He and Prime Minister Andy Burnham are hoping to give households "breathing space" amid the ongoing high cost of living and they have already announced measures to change gas bills.
But Healey has also refused to rule out some tax increases to potentially pay for support he could distribute elsewhere.
The government has run an unusually tight ship, preventing policies leaking out ahead of time, but here are the key measures expected.
Household energy bills are set to see their biggest rise in four years in January, with a typical annual bill forecast to jump by £276.
Healey has announced that standing charges for household gas bills will be removed for about 23 million homes. These charges are fixed daily fees that are paid by households no matter how much gas they use, and average £108 a year.
The government says energy regulator Ofgem will aim to deliver the removal of these charges in 2027 or "as soon as possible after".
However, this will be offset by higher unit costs for gas. Overall the Treasury estimates that three-fifths of households will see an average saving of £45 a year. Lower gas users will save more but higher users will end up with bigger bills than they have now.
The government also plans to remove tariffs from 100 food items, which it calculates could save households up to £21 per year - or 40p a week - when combined with existing tariff suspensions that were introduced in June.
The BBC understands the chancellor will keep fuel duty frozen at the Budget and keep in place the 5p fuel duty cut introduced by Rishi Sunak in 2022, as first reported by The Sun, external.
Household energy bills forecast to see biggest rise in four years
- Published30 September
The Budget will contain more details on Burnham's planned Your First Home scheme, aimed at helping first-time buyers in England to purchase a property.
The scheme will allow people to buy a new-build home with a deposit of 2.5%. It would provide them with a loan worth 20% of their property's value to help pay for the purchase.
The threshold for eligible buyers will be those with combined incomes of £110,000 outside London, and £140,000 in the capital.
Burnham announces scheme to help first-time buyers onto housing ladder
- Published27 September
A minimum wage increase will be announced in the Budget, but 18- to 20-year-olds are set to see lower increases than in previous years, the BBC understands.
Pay for younger workers will rise in line with the increase in minimum pay for employees aged 21 years and over.
However, the increase for younger workers is lower than that seen in the previous two years, when Labour raised the rate to meet a manifesto promise that it would remove "discriminatory age bands" with all adults entitled to the same minimum wage.
Minimum wage set to rise but 18-20 year-olds will not get bigger increase
- Published21 hours ago
Pensioners who only get an income from the state pension are expected to be shielded from paying income tax through a new personal allowance.
But the full state pension is set to rise above the current £12,570 threshold, to £13,036.40 - which would force one million people to pay tax on it.
In his Budget, Healey will explain how these pensioners will be exempted.
State pension likely to top £13,000 a year as UK wage growth slows to 3.9%
- Published15 September
An easy target for a Labour chancellor, bank bosses are expecting Healey to raise the amount of tax they pay in order to offer support with energy bills and costs affecting households elsewhere.
Top executives told the BBC they believe the chancellor could reverse a Conservative cut to the surcharge banks pay on their profits, which lowered it from 8% to 3%. Healey could also raise the levy banks pay on the size of their balance sheets.
Banks expect to be hit with higher taxes in Budget
- Published16 October
Online retail giants such as Amazon and eBay are expected to be made responsible for collecting tax owed by traders using their platforms, according to The Times, external.
The money raised is expected to be used by the government to cut business rates for High Street shops, by raising the threshold at which small companies start paying rates from £12,000 to £18,000.
He is also planning support for small breweries.
Healey has also said the government plans to slash "form-filling and pointless paperwork" to save UK businesses up to £800m. Ministers believe changes in regulations will reduce unnecessary bureaucracy for businesses.
How is the economy doing?
Healey has repeatedly praised the UK's resilience. The UK is the fastest growing G7 country so far this year, and performing better than expected in the face of energy price shocks caused by the US-Israel war with Iran.
But UK growth is expected to slow in the months ahead as those costs continue to weigh on households and businesses.
Prices for goods and services are still rising faster than wanted. Inflation hit 3.5% in the year to September, the highest rate since October 2025 and above the Bank of England's 2% target, driven by higher petrol and diesel prices.
Healey's aim in the Budget is to give people "breathing space" to help them cope with the challenges ahead.
What happens afterwards?
When the chancellor sits down, the Office for Budget Responsibility (OBR) will publish economic forecasts for the next five years.
It will set out whether the government is likely to meet the rules it has set for managing the public finances, and how the economy is expected to perform.
Its judgement on the government's plans is keenly watched by financial markets and can have a significant impact on confidence, in turn affecting government borrowing costs.
Leader of the Opposition Kemi Badenoch will respond to the speech in the House of Commons.
MPs then debate the measures for three days before voting on them.
If approved by MPs, tax changes can come into effect immediately.
However, the government must pass a finance bill to make them permanent.
Get in touch
Do you have any views, comments or questions about this story?
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    bodyJa: `Energy bill help, minimum wage rise and bank taxes - what could be in the Budget?
- Published
Chancellor John Healey will set out Labour's tax and spending plans when he delivers his first Budget at around 12:30 on Wednesday.
The speech, which usually lasts about an hour, will be broadcast live on BBC iPlayer and on the BBC News website.
He and Prime Minister Andy Burnham are hoping to give households "breathing space" amid the ongoing high cost of living and they have already announced measures to change gas bills.
But Healey has also refused to rule out some tax increases to potentially pay for support he could distribute elsewhere.
The government has run an unusually tight ship, preventing policies leaking out ahead of time, but here are the key measures expected.
Household energy bills are set to see their biggest rise in four years in January, with a typical annual bill forecast to jump by £276.
Healey has announced that standing charges for household gas bills will be removed for about 23 million homes. These charges are fixed daily fees that are paid by households no matter how much gas they use, and average £108 a year.
The government says energy regulator Ofgem will aim to deliver the removal of these charges in 2027 or "as soon as possible after".
However, this will be offset by higher unit costs for gas. Overall the Treasury estimates that three-fifths of households will see an average saving of £45 a year. Lower gas users will save more but higher users will end up with bigger bills than they have now.
The government also plans to remove tariffs from 100 food items, which it calculates could save households up to £21 per year - or 40p a week - when combined with existing tariff suspensions that were introduced in June.
The BBC understands the chancellor will keep fuel duty frozen at the Budget and keep in place the 5p fuel duty cut introduced by Rishi Sunak in 2022, as first reported by The Sun, external.
Household energy bills forecast to see biggest rise in four years
- Published30 September
The Budget will contain more details on Burnham's planned Your First Home scheme, aimed at helping first-time buyers in England to purchase a property.
The scheme will allow people to buy a new-build home with a deposit of 2.5%. It would provide them with a loan worth 20% of their property's value to help pay for the purchase.
The threshold for eligible buyers will be those with combined incomes of £110,000 outside London, and £140,000 in the capital.
Burnham announces scheme to help first-time buyers onto housing ladder
- Published27 September
A minimum wage increase will be announced in the Budget, but 18- to 20-year-olds are set to see lower increases than in previous years, the BBC understands.
Pay for younger workers will rise in line with the increase in minimum pay for employees aged 21 years and over.
However, the increase for younger workers is lower than that seen in the previous two years, when Labour raised the rate to meet a manifesto promise that it would remove "discriminatory age bands" with all adults entitled to the same minimum wage.
Minimum wage set to rise but 18-20 year-olds will not get bigger increase
- Published21 hours ago
Pensioners who only get an income from the state pension are expected to be shielded from paying income tax through a new personal allowance.
But the full state pension is set to rise above the current £12,570 threshold, to £13,036.40 - which would force one million people to pay tax on it.
In his Budget, Healey will explain how these pensioners will be exempted.
State pension likely to top £13,000 a year as UK wage growth slows to 3.9%
- Published15 September
An easy target for a Labour chancellor, bank bosses are expecting Healey to raise the amount of tax they pay in order to offer support with energy bills and costs affecting households elsewhere.
Top executives told the BBC they believe the chancellor could reverse a Conservative cut to the surcharge banks pay on their profits, which lowered it from 8% to 3%. Healey could also raise the levy banks pay on the size of their balance sheets.
Banks expect to be hit with higher taxes in Budget
- Published16 October
Online retail giants such as Amazon and eBay are expected to be made responsible for collecting tax owed by traders using their platforms, according to The Times, external.
The money raised is expected to be used by the government to cut business rates for High Street shops, by raising the threshold at which small companies start paying rates from £12,000 to £18,000.
He is also planning support for small breweries.
Healey has also said the government plans to slash "form-filling and pointless paperwork" to save UK businesses up to £800m. Ministers believe changes in regulations will reduce unnecessary bureaucracy for businesses.
How is the economy doing?
Healey has repeatedly praised the UK's resilience. The UK is the fastest growing G7 country so far this year, and performing better than expected in the face of energy price shocks caused by the US-Israel war with Iran.
But UK growth is expected to slow in the months ahead as those costs continue to weigh on households and businesses.
Prices for goods and services are still rising faster than wanted. Inflation hit 3.5% in the year to September, the highest rate since October 2025 and above the Bank of England's 2% target, driven by higher petrol and diesel prices.
Healey's aim in the Budget is to give people "breathing space" to help them cope with the challenges ahead.
What happens afterwards?
When the chancellor sits down, the Office for Budget Responsibility (OBR) will publish economic forecasts for the next five years.
It will set out whether the government is likely to meet the rules it has set for managing the public finances, and how the economy is expected to perform.
Its judgement on the government's plans is keenly watched by financial markets and can have a significant impact on confidence, in turn affecting government borrowing costs.
Leader of the Opposition Kemi Badenoch will respond to the speech in the House of Commons.
MPs then debate the measures for three days before voting on them.
If approved by MPs, tax changes can come into effect immediately.
However, the government must pass a finance bill to make them permanent.
Get in touch
Do you have any views, comments or questions about this story?
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6x2zrjl7kjno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T09:25:19+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c529/live/61181430-d2a9-11f1-b441-2b33b063138f.jpg",
    readTime: 10,
  },
  {
    id: "meta-and-google-backed-jio-platforms-sha-eaf5095f",
    title: "Meta- and Google-backed Jio Platforms’ shares soar over 21% on trading debut after record IPO",
    titleJa: "Meta- and Google-backed Jio Platforms’ shares soar over 21% on trading debut after record IPO",
    summaryJa: "Jio had offered 270 million shares in the IPO priced at 1,119 rupees apiece, raising 302 billion rupees ($3.2 billion) in the country's largest-ever IPO.",
    bodyOriginal: `Jio Platforms' shares rose 21.4% on their trading debut Wednesday after a record initial public offering that was lapped up by retail as well as institutional investors.
India's largest telecom and digital services player had offered 270 million shares in the IPO priced at 1,119 rupees apiece, raising 302 billion rupees ($3.2 billion) in the country's largest-ever IPO.
The public issue was subscribed more than 22 times, with institutional investors leading the demand, according to data from the BSE. The qualified institutional portion was subscribed 70.55 times, while retail investors subscribed 2.72 times.
The IPO was fully subscribed within 95 minutes of its opening on Oct. 21, Akash Ambani, managing director of Jio Platforms and heir of the Indian billionaire Mukesh Ambani, said ahead of the listing.
Global brokerage Nomura on Wednesday gave Jio Platforms a buy rating, setting a target price of 1,340 rupees, implying an upside of 19.7% to its IPO price. The brokerage said in a report that Jio's capex cycle is largely over and there is expected to be a sharp improvement in the company's free cash flow.
Shares were last trading at 1,357 rupees.
Indian billionaire Mukesh Ambani's flagship company, Reliance Industries, owns more than a 66% stake in Jio Platforms, followed by Meta Platforms' affiliate Jaadhu Holdings that owns nearly 10% and Google International, which owns 7.7%, as per LSEG data.
Leading global funds such as BlackRock, Capital Group and GIC participated in Jio's anchor book portion of the total fundraise, which is set aside for large institutional investors before the IPO opens for public bidding. Including anchor investors, the share offering garnered demand of $78 billion.`,
    bodyJa: `Jio Platforms' shares rose 21.4% on their trading debut Wednesday after a record initial public offering that was lapped up by retail as well as institutional investors.
India's largest telecom and digital services player had offered 270 million shares in the IPO priced at 1,119 rupees apiece, raising 302 billion rupees ($3.2 billion) in the country's largest-ever IPO.
The public issue was subscribed more than 22 times, with institutional investors leading the demand, according to data from the BSE. The qualified institutional portion was subscribed 70.55 times, while retail investors subscribed 2.72 times.
The IPO was fully subscribed within 95 minutes of its opening on Oct. 21, Akash Ambani, managing director of Jio Platforms and heir of the Indian billionaire Mukesh Ambani, said ahead of the listing.
Global brokerage Nomura on Wednesday gave Jio Platforms a buy rating, setting a target price of 1,340 rupees, implying an upside of 19.7% to its IPO price. The brokerage said in a report that Jio's capex cycle is largely over and there is expected to be a sharp improvement in the company's free cash flow.
Shares were last trading at 1,357 rupees.
Indian billionaire Mukesh Ambani's flagship company, Reliance Industries, owns more than a 66% stake in Jio Platforms, followed by Meta Platforms' affiliate Jaadhu Holdings that owns nearly 10% and Google International, which owns 7.7%, as per LSEG data.
Leading global funds such as BlackRock, Capital Group and GIC participated in Jio's anchor book portion of the total fundraise, which is set aside for large institutional investors before the IPO opens for public bidding. Including anchor investors, the share offering garnered demand of $78 billion.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/jio-ipo-india-listing-.html",
    publishedAt: "2026-10-28T05:16:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "luxury-cruise-passengers-stranded-in-cam-80819365",
    title: "Luxury cruise passengers stranded in Cambodia due to soaring fuel costs",
    titleJa: "Luxury cruise passengers stranded in Cambodia due to soaring fuel costs",
    summaryJa: "The Villa Vie Odyssey suspends its voyage and is working with passengers on \"temporary living arrangements\".",
    bodyOriginal: `Luxury cruise passengers stranded in Cambodia due to soaring fuel costs
- Published
A luxury cruise ship on a years-long voyage around the world said it suspended operations due to extraordinarily high fuel costs, leaving passengers stranded in Cambodia.
The US-based operator of Villa Vie Odyssey said it was working with passengers on disembarkation plans and "temporary living arrangements".
It is unclear how many were on board but the nearly 200m (656ft) vessel can carry up to 650 passengers. It departed Belfast in October 2024 for a "continuous voyage around the world".
Global fuel prices have soared since the Iran war started earlier this year. The ship's operator said the monthly fuel cost per cabin in parts of Asia has risen to as much as $8,000 (£6,000) from $1,800.
The company said it had taken "significant steps to reduce fuel consumption, including slowing the itinerary and spending more time in port". But those measures turned out to be insufficient to "offset the extraordinary increase in fuel costs".
"Passing the full increase on to residents is not a realistic solution," it said.
The company would spend the next 60 days on "restructuring and recapitalisation", though "no outcome is assured", it said.
The Villa Vie Odyssey's voyage was expected to span 3.5 years and cover nearly 150 countries, according to its website.
Its departure had faced delays as the ship underwent repairs, leaving passengers stranded in Belfast for months and costing the company millions of pounds.
The ship was more than 750 days into its circumnavigation before announcing its suspension of its journey on Tuesday - which means its passengers would now be stranded in Cambodia.
There were around 200 passengers on board when they were ordered to disembark in Cambodia, Bloomberg reported, citing the cruise operator's founder.
The Villa Vie Odyssey is equipped with several bars and restaurants, a pool deck and a pickleball court, according to its website.
Permanent residencies in its cabins range from $120,000 to $440,000. These cabins are also also available for rent from $3,500 a month.
Last year, the company launched a lifetime residence programme for people to spend their retirement years at sea.
In 2024, days after US President Donald Trump won his second term, Villa Vie Residences announced a four-year "Skip Forward" package. Its CEO told Fox Business at the time that it was the "perfect product for those who said they'd leave the country if 'XYZ' wins the election".
Related topics
- Published4 October 2025
- Published18 May
- Published1 October 2024`,
    bodyJa: `Luxury cruise passengers stranded in Cambodia due to soaring fuel costs
- Published
A luxury cruise ship on a years-long voyage around the world said it suspended operations due to extraordinarily high fuel costs, leaving passengers stranded in Cambodia.
The US-based operator of Villa Vie Odyssey said it was working with passengers on disembarkation plans and "temporary living arrangements".
It is unclear how many were on board but the nearly 200m (656ft) vessel can carry up to 650 passengers. It departed Belfast in October 2024 for a "continuous voyage around the world".
Global fuel prices have soared since the Iran war started earlier this year. The ship's operator said the monthly fuel cost per cabin in parts of Asia has risen to as much as $8,000 (£6,000) from $1,800.
The company said it had taken "significant steps to reduce fuel consumption, including slowing the itinerary and spending more time in port". But those measures turned out to be insufficient to "offset the extraordinary increase in fuel costs".
"Passing the full increase on to residents is not a realistic solution," it said.
The company would spend the next 60 days on "restructuring and recapitalisation", though "no outcome is assured", it said.
The Villa Vie Odyssey's voyage was expected to span 3.5 years and cover nearly 150 countries, according to its website.
Its departure had faced delays as the ship underwent repairs, leaving passengers stranded in Belfast for months and costing the company millions of pounds.
The ship was more than 750 days into its circumnavigation before announcing its suspension of its journey on Tuesday - which means its passengers would now be stranded in Cambodia.
There were around 200 passengers on board when they were ordered to disembark in Cambodia, Bloomberg reported, citing the cruise operator's founder.
The Villa Vie Odyssey is equipped with several bars and restaurants, a pool deck and a pickleball court, according to its website.
Permanent residencies in its cabins range from $120,000 to $440,000. These cabins are also also available for rent from $3,500 a month.
Last year, the company launched a lifetime residence programme for people to spend their retirement years at sea.
In 2024, days after US President Donald Trump won his second term, Villa Vie Residences announced a four-year "Skip Forward" package. Its CEO told Fox Business at the time that it was the "perfect product for those who said they'd leave the country if 'XYZ' wins the election".
Related topics
- Published4 October 2025
- Published18 May
- Published1 October 2024`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwj342k62exyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T03:43:38+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7eaf/live/69ded4d0-d26f-11f1-a4f1-4fff2e6cf5f3.jpg",
    readTime: 6,
  },
  {
    id: "trump-says-iran-war-will-end-when-i-want-94569040",
    title: "Trump says Iran war will end 'when I want it to' as costs reportedly balloon to $47 billion",
    titleJa: "Trump says Iran war will end 'when I want it to' as costs reportedly balloon to $47 billion",
    summaryJa: "Trump's statement comes as a report from The Hill revealed that the costs of the Iran conflict has ballooned to $47 billion.",
    bodyOriginal: `U.S. President Donald Trump has reiterated his claim that the Iran war will end "whenever I want it to," but insists that Tehran cannot have a nuclear weapon.
Speaking at a rally in Lubbock, Texas, Trump said "Somebody asked me before, 'When will the war in Iran end?' I said, 'Whenever I want it to end.'"
Trump said it "would be very quick, but we have to have an end properly," with a "total statement" that Iran would never have a nuclear weapon.
His statement comes as the President grapples with poll numbers that are near a record low due to rising energy costs and affordability issues as the U.S. heads into the midterm elections on Nov. 3.
Currently, Trump's approval ratings stand at 32%, according to a Reuters/Ipsos poll on Monday.
Mark Zandi, Moody's Analytics' Chief Economist said on Oct. 12 that the war was costing American families an average of $2,000 so far, where $1,100 comes from higher energy costs, $540 from higher interest rate costs, and $360 due to increased military spending.
The Iran conflict shows no sign of winding down, with Trump saying that he will soon decide whether to "make a deal" with Iran or "finish it off."
Earlier in the month, the U.S. had evacuated diplomats from Saudi Arabia, as the New York Times reported that U.S. and Israeli militaries have drawn up specific plans for a "short but intensive" operation for strikes on Iran after the midterm elections.
An estimate by U.S. Central Command on Oct. 16, according to a report by The Hill, also revealed that the cost of the Iran war has ballooned to $47 billion, about $3 billion more than the previous numbers.
The bulk of the costs was reportedly for munitions replacements at $29 million. Washington's conflict with Iran has caused "shortfalls" in U.S. munitions, despite Trump claiming on Sept. 3 that the U.S. had "virtually unlimited" amounts of ammunition.
The massive price tag on the war does not include the costs of damaged military bases in the Middle East, which is estimated at $184 million as of June 29, according to a lead inspector general report to Congress.
This figure counts damage to U.S. diplomatic facilities in four countries — Iraq, Kuwait, Saudi Arabia and the United Arab Emirates — from Iranian strikes.`,
    bodyJa: `U.S. President Donald Trump has reiterated his claim that the Iran war will end "whenever I want it to," but insists that Tehran cannot have a nuclear weapon.
Speaking at a rally in Lubbock, Texas, Trump said "Somebody asked me before, 'When will the war in Iran end?' I said, 'Whenever I want it to end.'"
Trump said it "would be very quick, but we have to have an end properly," with a "total statement" that Iran would never have a nuclear weapon.
His statement comes as the President grapples with poll numbers that are near a record low due to rising energy costs and affordability issues as the U.S. heads into the midterm elections on Nov. 3.
Currently, Trump's approval ratings stand at 32%, according to a Reuters/Ipsos poll on Monday.
Mark Zandi, Moody's Analytics' Chief Economist said on Oct. 12 that the war was costing American families an average of $2,000 so far, where $1,100 comes from higher energy costs, $540 from higher interest rate costs, and $360 due to increased military spending.
The Iran conflict shows no sign of winding down, with Trump saying that he will soon decide whether to "make a deal" with Iran or "finish it off."
Earlier in the month, the U.S. had evacuated diplomats from Saudi Arabia, as the New York Times reported that U.S. and Israeli militaries have drawn up specific plans for a "short but intensive" operation for strikes on Iran after the midterm elections.
An estimate by U.S. Central Command on Oct. 16, according to a report by The Hill, also revealed that the cost of the Iran war has ballooned to $47 billion, about $3 billion more than the previous numbers.
The bulk of the costs was reportedly for munitions replacements at $29 million. Washington's conflict with Iran has caused "shortfalls" in U.S. munitions, despite Trump claiming on Sept. 3 that the U.S. had "virtually unlimited" amounts of ammunition.
The massive price tag on the war does not include the costs of damaged military bases in the Middle East, which is estimated at $184 million as of June 29, according to a lead inspector general report to Congress.
This figure counts damage to U.S. diplomatic facilities in four countries — Iraq, Kuwait, Saudi Arabia and the United Arab Emirates — from Iranian strikes.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/us-iran-war-trump-hormuz-costs-centcom.html",
    publishedAt: "2026-10-28T03:02:44+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "israel-election-appears-to-have-no-clear-ee25b2f2",
    title: "Israel election appears to have no clear winner with Netanyahu, opponent Eisenkot far short of majorities",
    titleJa: "Israel election appears to have no clear winner with Netanyahu, opponent Eisenkot far short of majorities",
    summaryJa: "Exit polls show Prime Minister Benjamin Netanyahu's alliance and Gadi Eisenkot's opposition bloc both well off the numbers needed to form a governing majority.",
    bodyOriginal: `The outcome of Israel's election hung in the balance as of Wednesday, with both Prime Minister Benjamin Netanyahu and challenger Gadi Eisenkot appearing to be well off the numbers needed to form a governing coalition.
An updated Channel 13 poll early Wednesday put both blocs at 51 seats in the 120-seat Knesset, the Times of Israel reported. A coalition needs 61 to be able to govern. Channel 12 and Kan 11 showed Eisenkot's bloc slightly ahead at 52-50. Arab-led parties, which belong to neither camp, were projected at 17 to 18 seats, their strongest showing ever.
Eisenkot, a former military chief of staff, declared victory and said the preliminary results should give him the first right to try to form a government. "The initial exit poll results indicate a complete lack of confidence in Netanyahu and his October 7 government," he said in a statement on X.
Exit polls are not the official results, which are formally published a week after the election, on Nov. 4. Around 77.7% of eligible voters turned out to cast their ballots, the highest in a Knesset election in 27 years, according to the Central Elections Committee.
The vote came as Israel's first national election since Hamas's Oct. 7, 2023 attack and the subsequent wars in Gaza, Lebanon and Iran, and was widely seen as a referendum on Netanyahu's dominance of Israeli politics since 2009.
Netanyahu's supporters credit him with steering Israel through the war and standing up to international pressure, while critics point to his long-running corruption trial, controversial judicial overhaul efforts, and handling of the Gaza war as evidence that he is unfit for office. Netanyahu faces an International Criminal Court arrest warrant over the Gaza campaign, which he has rejected.
Arab party result
The historic Arab-party result is a factor to watch in coalition talks. Ra'am leader Mansour Abbas said that "our vote will change the government." Joint List faction chairman Ahmad Tibi had previously outlined a plan to prevent Netanyahu from remaining in power after the elections, according to the Jerusalem Post.
The pro-Palestinian stance of Arab-led parties aligns them more closely with Eisenkot than with Netanyahu, said Amin Saikal, an adjunct senior fellow at Singapore's S. Rajaratnam School of International Studies, though neither man has said he would embrace them.
"Even if Eisenkot's alliance wins more seats, it's less likely to be able to form a governing majority without including Arab and left-wing parties," said Michael Feller, chief strategist at Geopolitical Strategy. "The next government's policies on Iran, Palestine and security may otherwise stay the same."
However, Yisrael Beytenu leader Avigdor Liberman, whose party is projected at seven to nine seats and is currently in the opposition bloc with Eisenkot, refused during the campaign to rely on Arab parties.
Earlier on Tuesday, Netanyahu and his far-right coalition partners warned of strong Arab participation in the vote, drawing accusations of racism from opponents.
"If we don't wake up now, we'll find ourselves with a government of Mansour Abbas and Ahmed Tibi," he said, after a series of posts highlighting long queues at polling stations in Arab communities.
Even if Eisenkot ends up with more seats, Netanyahu may use the upcoming weeks or months to his advantage by seeking to stall the formation of the new government, said Amin Saikal, an adjunct senior fellow at Singapore's S. Rajaratnam School of International Studies.
The prime minister will "fight for his political survival," Saikal said.`,
    bodyJa: `The outcome of Israel's election hung in the balance as of Wednesday, with both Prime Minister Benjamin Netanyahu and challenger Gadi Eisenkot appearing to be well off the numbers needed to form a governing coalition.
An updated Channel 13 poll early Wednesday put both blocs at 51 seats in the 120-seat Knesset, the Times of Israel reported. A coalition needs 61 to be able to govern. Channel 12 and Kan 11 showed Eisenkot's bloc slightly ahead at 52-50. Arab-led parties, which belong to neither camp, were projected at 17 to 18 seats, their strongest showing ever.
Eisenkot, a former military chief of staff, declared victory and said the preliminary results should give him the first right to try to form a government. "The initial exit poll results indicate a complete lack of confidence in Netanyahu and his October 7 government," he said in a statement on X.
Exit polls are not the official results, which are formally published a week after the election, on Nov. 4. Around 77.7% of eligible voters turned out to cast their ballots, the highest in a Knesset election in 27 years, according to the Central Elections Committee.
The vote came as Israel's first national election since Hamas's Oct. 7, 2023 attack and the subsequent wars in Gaza, Lebanon and Iran, and was widely seen as a referendum on Netanyahu's dominance of Israeli politics since 2009.
Netanyahu's supporters credit him with steering Israel through the war and standing up to international pressure, while critics point to his long-running corruption trial, controversial judicial overhaul efforts, and handling of the Gaza war as evidence that he is unfit for office. Netanyahu faces an International Criminal Court arrest warrant over the Gaza campaign, which he has rejected.
Arab party result
The historic Arab-party result is a factor to watch in coalition talks. Ra'am leader Mansour Abbas said that "our vote will change the government." Joint List faction chairman Ahmad Tibi had previously outlined a plan to prevent Netanyahu from remaining in power after the elections, according to the Jerusalem Post.
The pro-Palestinian stance of Arab-led parties aligns them more closely with Eisenkot than with Netanyahu, said Amin Saikal, an adjunct senior fellow at Singapore's S. Rajaratnam School of International Studies, though neither man has said he would embrace them.
"Even if Eisenkot's alliance wins more seats, it's less likely to be able to form a governing majority without including Arab and left-wing parties," said Michael Feller, chief strategist at Geopolitical Strategy. "The next government's policies on Iran, Palestine and security may otherwise stay the same."
However, Yisrael Beytenu leader Avigdor Liberman, whose party is projected at seven to nine seats and is currently in the opposition bloc with Eisenkot, refused during the campaign to rely on Arab parties.
Earlier on Tuesday, Netanyahu and his far-right coalition partners warned of strong Arab participation in the vote, drawing accusations of racism from opponents.
"If we don't wake up now, we'll find ourselves with a government of Mansour Abbas and Ahmed Tibi," he said, after a series of posts highlighting long queues at polling stations in Arab communities.
Even if Eisenkot ends up with more seats, Netanyahu may use the upcoming weeks or months to his advantage by seeking to stall the formation of the new government, said Amin Saikal, an adjunct senior fellow at Singapore's S. Rajaratnam School of International Studies.
The prime minister will "fight for his political survival," Saikal said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/israel-election-netanyahu-trump-gaza-.html",
    publishedAt: "2026-10-28T02:15:55+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "sk-hynix-shares-soar-over-8-as-profit-be-da7d098c",
    title: "SK Hynix shares soar over 8% as profit beats, chipmaker to return $25 billion to investors",
    titleJa: "SK Hynix shares soar over 8% as profit beats, chipmaker to return $25 billion to investors",
    summaryJa: "Shares of South Korean chipmaker SK Hynix soared over 8% on Wednesday as third-quarter profit sharply beats estimates.",
    bodyOriginal: `South Korean chipmaker SK Hynix on Wednesday posted a record high quarterly profit, sharply beating estimates, and announced over $25 billion in dividends and buybacks, sending shares more than 8% higher.
Here are SK Hynix's third-quarter results compared with LSEG SmartEstimates, which are weighted toward forecasts from analysts who are more consistently accurate:
- Revenue: 104.62 trillion won ($78.86 billion) vs. 98.34 trillion won expected
- Operating profit: 83.33 trillion won vs. 76.72 trillion won expected
Revenue rose 327.9% from a year earlier, while operating profit climbed 632.1% year on year.
Compared with the previous quarter, revenue climbed 31.9%, while operating profit surged 37.6%.
SK Hynix shares rose more than 8%, outperforming the Kospi's 6.25% gain.
The company posted record quarterly revenue and operating profit, with sales exceeding 100 trillion won for the first time, as it announced plans to return about 100 trillion won to shareholders — including at least 30 trillion won in cash dividends and 60 trillion won in share buybacks and cancellations.
In the earnings call, SK Hynix CEO Kwak Noh-Jung cited financial market volatility and a correction in semiconductor stocks as the main reasons to halt its review of potential pre-IPO fundraising and IPO options for its U.S. subsidiary Solidigm.
Solidigm has concluded that an IPO would not fully deliver the anticipated benefits at this time.Kwak Noh-JungCEO, SK Hynix
The company had said it would continue to assess investment timing, scale and financing options to support Solidigm's growth and enhance shareholder value.
Kwak also outlined plans to return gains from its investment in Japanese chipmaker Kioxia to shareholders, saying that, "We intend to return the gains realized from our investment in Kioxia this year to our shareholders through a special dividend."
The chipmaker approved a third-quarter dividend of 14 trillion won, including a special dividend funded by gains from its investment in Kioxia.
SK Hynix will also buyback 20 trillion won in shares, half of which will be cancelled this year, after completing its previously announced 40 trillion won shares buyback last week — which will be cancelled shortly — as mentioned in the earnings call.
The company also plans to raise its shareholder return target to more than 50% of cumulative free cash flow generated between 2025 and 2027, as it expects AI investment momentum to continue due to greater adoption of AI services and a more diverse investor base.
The company added that it expects the structural supply-demand imbalance in the memory market, where demand outpaces supply, to continue for the time being.
Memory production boost
SK Hynix expects HBM4 to surpass HBM3E in both shipments and revenue in the fourth quarter, as it ramps up production at its M15X facility in Cheongju, South Korea.
HBM, or high-bandwidth memory, is a type of advanced memory used alongside AI processors to handle large amounts of data. HBM4 is the sixth generation of the technology, which started mass productions and shipments in the third quarter.
Average selling prices for DRAM rose by a high-20s percentage from the previous quarter, driven by higher conventional DRAM prices and a growing share of higher-priced HBM4 sales.
Meanwhile, shipments of server DDR5 memory chips — a type of memory used in data center servers — rose more than 40% from the previous quarter, as said in the call.
The company has secured long-term agreements with 14 major customers covering more than 50% of its production capacity for 2027 and 2028, expecting memory demand to outpace supply through 2030 and plans to significantly increase investment next year.`,
    bodyJa: `South Korean chipmaker SK Hynix on Wednesday posted a record high quarterly profit, sharply beating estimates, and announced over $25 billion in dividends and buybacks, sending shares more than 8% higher.
Here are SK Hynix's third-quarter results compared with LSEG SmartEstimates, which are weighted toward forecasts from analysts who are more consistently accurate:
- Revenue: 104.62 trillion won ($78.86 billion) vs. 98.34 trillion won expected
- Operating profit: 83.33 trillion won vs. 76.72 trillion won expected
Revenue rose 327.9% from a year earlier, while operating profit climbed 632.1% year on year.
Compared with the previous quarter, revenue climbed 31.9%, while operating profit surged 37.6%.
SK Hynix shares rose more than 8%, outperforming the Kospi's 6.25% gain.
The company posted record quarterly revenue and operating profit, with sales exceeding 100 trillion won for the first time, as it announced plans to return about 100 trillion won to shareholders — including at least 30 trillion won in cash dividends and 60 trillion won in share buybacks and cancellations.
In the earnings call, SK Hynix CEO Kwak Noh-Jung cited financial market volatility and a correction in semiconductor stocks as the main reasons to halt its review of potential pre-IPO fundraising and IPO options for its U.S. subsidiary Solidigm.
Solidigm has concluded that an IPO would not fully deliver the anticipated benefits at this time.Kwak Noh-JungCEO, SK Hynix
The company had said it would continue to assess investment timing, scale and financing options to support Solidigm's growth and enhance shareholder value.
Kwak also outlined plans to return gains from its investment in Japanese chipmaker Kioxia to shareholders, saying that, "We intend to return the gains realized from our investment in Kioxia this year to our shareholders through a special dividend."
The chipmaker approved a third-quarter dividend of 14 trillion won, including a special dividend funded by gains from its investment in Kioxia.
SK Hynix will also buyback 20 trillion won in shares, half of which will be cancelled this year, after completing its previously announced 40 trillion won shares buyback last week — which will be cancelled shortly — as mentioned in the earnings call.
The company also plans to raise its shareholder return target to more than 50% of cumulative free cash flow generated between 2025 and 2027, as it expects AI investment momentum to continue due to greater adoption of AI services and a more diverse investor base.
The company added that it expects the structural supply-demand imbalance in the memory market, where demand outpaces supply, to continue for the time being.
Memory production boost
SK Hynix expects HBM4 to surpass HBM3E in both shipments and revenue in the fourth quarter, as it ramps up production at its M15X facility in Cheongju, South Korea.
HBM, or high-bandwidth memory, is a type of advanced memory used alongside AI processors to handle large amounts of data. HBM4 is the sixth generation of the technology, which started mass productions and shipments in the third quarter.
Average selling prices for DRAM rose by a high-20s percentage from the previous quarter, driven by higher conventional DRAM prices and a growing share of higher-priced HBM4 sales.
Meanwhile, shipments of server DDR5 memory chips — a type of memory used in data center servers — rose more than 40% from the previous quarter, as said in the call.
The company has secured long-term agreements with 14 major customers covering more than 50% of its production capacity for 2027 and 2028, expecting memory demand to outpace supply through 2030 and plans to significantly increase investment next year.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/sk-hynix-third-quarter-profit.html",
    publishedAt: "2026-10-28T01:56:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "indian-investors-rush-to-nvidia-spacex-a-529a9cf2",
    title: "Indian investors rush to Nvidia, SpaceX, Apple as local trading apps roll out access to U.S. stocks",
    titleJa: "Indian investors rush to Nvidia, SpaceX, Apple as local trading apps roll out access to U.S. stocks",
    summaryJa: "Major Indian brokerages are providing retail investors access to U.S. stocks at a time when the local market has been battered.",
    bodyOriginal: `Major Indian online investment platforms are unlocking access to U.S. stocks for millions of retail investors eager to diversify into global assets as the country's markets continue to underperform.
Earlier, access to U.S. markets and exchange-traded funds was limited to wealthier Indians, via global banks and wealth management firms.
Groww, an Indian investment platform that accounts for more than 29% of the country's 46 million active investors across stock brokerages, rolled out the U.S. equity trading feature earlier this month, Harsh Jain, chief operating officer and co-founder of the company, told CNBC.
NVIDIA, SpaceX, Apple, Alphabet, Amazon, Micron and Meta are the most popular companies among early users, Jain said, whose firm has provided access to more than 10,000 U.S. stocks, exchange-traded funds and fractional share ownership.
Zerodha, the second-largest trading platform with a 15% share of active clients as per NSE data, has also started beta testing access to U.S. stocks and plans to launch in a few weeks, the company told CNBC.
Another popular brokerage with 6.7 million active retail clients, Angel One, is also reportedly planning to launch U.S. stock trading on its platform.
There is a "big interest" among Indians to invest in U.S. stocks, especially in tech companies, Nitin Jain, chief executive and director at Kotak Mahindra Asset Management Singapore, told CNBC. He added that "retail investors like whatever goes up," pointing to the frenzy among Indian investors for investing in crypto a few years back.
U.S. stocks in demand
"There has always been latent demand in India for investing in global companies," Somnath Mukherjee, vice president of corporate development at Zerodha, told CNBC.
He said that the underperformance of the Indian stock market over the past few years and the lack of local artificial intelligence champions is driving the demand for U.S offerings. The depreciation of the Indian rupee against the dollar is also pushing investors "to keep a part of their portfolio in another currency," Mukherjee said.
India's benchmark stock index, the Nifty 50, has dropped nearly 13% since the start of the year while the S&P 500 has gained over 12%. Foreign investors are fleeing the country's markets, with a record $32.5 billion in outflows in direct equities since January, as per data from Indian depository NSDL, pressuring the stock market.
With the absence of any major AI company and relatively expensive valuations, investors have picked markets such as South Korea and Taiwan over India, experts said.
In August, resident Indians sent over $321 million overseas for investing in equity and debt, up 111% from a year ago, according to the Indian central bank's data. In the financial year ended March 2026, outward remittances for investments in equity and debt stood at $2.6 billion.
While the retail outflows are a small fraction of India's currency reserves, the worry is that they rise exactly when the rupee is weak, and US markets look strong, and thereby "amplify pressure at the worst moment," Tanvi Kanchan, associate director, head of international business and strategy, Anand Rathi Shares & Stock Brokers said.
Investment now accounts for about 11.7% of total outward remittances, up from 5.8% a year ago, so Indians are shifting from spending abroad to investing abroad, Kanchan said.
The exit of foreign investors and rising energy bills due to the Iran war have already hit the Indian currency, warranting the central bank to step in. Kotak's Jain cautioned that as participation increases, the Indian regulator could have "second thoughts" around allowing retail access to U.S. markets.`,
    bodyJa: `Major Indian online investment platforms are unlocking access to U.S. stocks for millions of retail investors eager to diversify into global assets as the country's markets continue to underperform.
Earlier, access to U.S. markets and exchange-traded funds was limited to wealthier Indians, via global banks and wealth management firms.
Groww, an Indian investment platform that accounts for more than 29% of the country's 46 million active investors across stock brokerages, rolled out the U.S. equity trading feature earlier this month, Harsh Jain, chief operating officer and co-founder of the company, told CNBC.
NVIDIA, SpaceX, Apple, Alphabet, Amazon, Micron and Meta are the most popular companies among early users, Jain said, whose firm has provided access to more than 10,000 U.S. stocks, exchange-traded funds and fractional share ownership.
Zerodha, the second-largest trading platform with a 15% share of active clients as per NSE data, has also started beta testing access to U.S. stocks and plans to launch in a few weeks, the company told CNBC.
Another popular brokerage with 6.7 million active retail clients, Angel One, is also reportedly planning to launch U.S. stock trading on its platform.
There is a "big interest" among Indians to invest in U.S. stocks, especially in tech companies, Nitin Jain, chief executive and director at Kotak Mahindra Asset Management Singapore, told CNBC. He added that "retail investors like whatever goes up," pointing to the frenzy among Indian investors for investing in crypto a few years back.
U.S. stocks in demand
"There has always been latent demand in India for investing in global companies," Somnath Mukherjee, vice president of corporate development at Zerodha, told CNBC.
He said that the underperformance of the Indian stock market over the past few years and the lack of local artificial intelligence champions is driving the demand for U.S offerings. The depreciation of the Indian rupee against the dollar is also pushing investors "to keep a part of their portfolio in another currency," Mukherjee said.
India's benchmark stock index, the Nifty 50, has dropped nearly 13% since the start of the year while the S&P 500 has gained over 12%. Foreign investors are fleeing the country's markets, with a record $32.5 billion in outflows in direct equities since January, as per data from Indian depository NSDL, pressuring the stock market.
With the absence of any major AI company and relatively expensive valuations, investors have picked markets such as South Korea and Taiwan over India, experts said.
In August, resident Indians sent over $321 million overseas for investing in equity and debt, up 111% from a year ago, according to the Indian central bank's data. In the financial year ended March 2026, outward remittances for investments in equity and debt stood at $2.6 billion.
While the retail outflows are a small fraction of India's currency reserves, the worry is that they rise exactly when the rupee is weak, and US markets look strong, and thereby "amplify pressure at the worst moment," Tanvi Kanchan, associate director, head of international business and strategy, Anand Rathi Shares & Stock Brokers said.
Investment now accounts for about 11.7% of total outward remittances, up from 5.8% a year ago, so Indians are shifting from spending abroad to investing abroad, Kanchan said.
The exit of foreign investors and rising energy bills due to the Iran war have already hit the Indian currency, warranting the central bank to step in. Kotak's Jain cautioned that as participation increases, the Indian regulator could have "second thoughts" around allowing retail access to U.S. markets.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/28/india-us-stocks-retail-access.html",
    publishedAt: "2026-10-28T00:14:24+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 9,
  },
  {
    id: "an-annoying-buzz-the-search-for-stealth-6d7255a2",
    title: "'An annoying buzz': The search for stealthier drones",
    titleJa: "'An annoying buzz': The search for stealthier drones",
    summaryJa: "As drone deliveries become more commonplace, their makers are looking for ways to make them quieter.",
    bodyOriginal: `'An annoying buzz': The search for stealthier drones
- Published
Nature lover Ashley Schmidt no longer spends much time in her garden, in the Dallas suburb of North Garland.
She's also given up on cycling to the local parks where she previously enjoyed taking close-up photos of the bugs, lizards and toads.
It's all because she can't stand the sound of the delivery drones that fly overhead, depositing her neighbours' online orders.
"They emit this very annoying buzz. It triggers my fight or flight response," says the 44-year-old administrative assistant.
"You can hear the drones on approach and you can hear them inside your home when they pass directly overhead and then you hear them as they leave," she says.
Schmidt is one of a growing number of people living with the noise of drones dispatched by companies including Amazon and Walmart as they seek to speed up home deliveries.
Delivery drone services, not long ago a novelty, are becoming part of everyday life for many people in the US.
Among them, Amazon Prime Air is in the process of expanding deliveries to nearly 500 cities and towns, delivering items that fit into a space the size of a shoe box. It has also launched to customers in and around Darlington in the north of England.
Smaller drone delivery services are popping up too: in some US cities, customers can order flying treats from their local pizza joint or ice cream parlour.
Even in cities where noise is already a steady part of life, the sound of drones seems to irk in a particular way.
While the steady passing of traffic might blend into the background, the sudden whine of a drone's rotors can pierce the everyday hum.
The sound tends to be "particularly noticeable, even when overall sound levels are relatively low," says Antonio Torija Martinez, professor in acoustic engineering and psychoacoustics at the University of Salford.
Unlike planes, drones operate at low altitudes and may fly directly over residential areas.
"They can expose communities that have not previously experienced significant aircraft noise, and who may therefore be more sensitive to changes in their local soundscape," says Torija Martinez.
He points to research showing that people respond strongly to a noise when they consider the source to be "novel, intrusive or frequent". People who benefit from a drone delivery service, for example, may be less bothered by the noise.
However, complaints about the sound of drones are likely to grow, he warns: "At the moment we are seeing some of these problems localised in some areas, but… as the drone sector expands, more and more of these complaints will happen."
In the US, the Federal Aviation Administration (FAA) regulates commercial drones, but it has come under fire for allowing noisy drone delivery operations. The FAA says operators and local community leaders have primary responsibility for addressing any community concerns.
Might better technology muffle the irritating buzz?
One startup, Greenjets, set out to tackle both "noise level and the frequency of that noise," as Darren James, future technologies lead at the company, puts it.
The London-based business has designed a propulsion system it claims can reduce drone noise by at least two thirds.
While standard drones use spinning propellers that slice through open air, creating that high-pitched buzz, Greenjets encloses spinning blades inside a pod, to muffle the sound and direct the noise away from the ground.
Its system also quietens things down through slower rotor speed and by using materials that reduce vibration noise.
Making quieter drones isn't just about keeping the noise down for neighbours who are already sick of airborne deliveries.
Greenjets' low-noise tech has been used by police and harbour security teams in Germany. It has also helped conservationists in Africa, who are seeking to track poachers from above without being detected.
Battlefield drone operators also have good reason to keep the noise down, to avoid alerting the enemy of the approach of their unmanned vehicles.
"There are some efforts to reduce the sound of drones. The US Special Forces are interested, at an experimental stage," says Robert Tollast, a research fellow at Whitehall think tank The Royal United Services Institute (RUSI).
But he stresses that drone speed, rather than stealthiness, tends to come first for larger drones used in the war between Russia and Ukraine. "Make it faster, not less quiet, seems to be the approach," says Tollast.
For Detroit-based entrepreneur, Greg Sharrow, it was the challenge of broadcasting a classical music performance back in 2012 that set him on the path to quieter drone design.
He needed to film a violinist from a tricky angle and a drone seemed the only solution – expect that it would be far too noisy.
As a starting point, "I knew that most of the noise from the drone was coming from the propeller, not the motor," he says. Specifically, it was the tips of the blades that he realised were creating the noise as they swiped through the air.
"I asked myself a very simple question, what would a tipless propeller look like and how would it function?"
The result was to create a propeller with twisted loop-shaped blades with no points.
It turned out it was easier to test his propeller in water than it was to repeatedly fly a drone, which led Sharrow to initially develop a less noisy boat propeller. Now, however, his company, Sharrow Engineering, is focusing on developing "ultra-quiet" drone rotors.
"We have validated that the technology works in drone applications and that it is dramatically quieter," says Sharrow.
Companies at the forefront of drone deliveries say they are also working to reduce the noise of their fleets. A spokesperson for Amazon says it has made "measurable sound improvements" to its drones and its latest designs use custom-designed propellers "that produce almost half the perceived sound of the prior generation, with a milder tone".
Drone maker Wing, which provides its vehicles for Walmart deliveries, says its propellers are designed to minimise noise. It also varies its flight paths to prevent repeated overflights over any single home or neighbourhood.
For Schmidt, fed up with the noise of drones, the only truly satisfactory solution would be to halt drone deliveries in her area. "I would like them to completely stop until they figure out how their services stop being a nuisance," she says.
Technology of Business
- Published25 September
- Published30 September
- Published9 October`,
    bodyJa: `'An annoying buzz': The search for stealthier drones
- Published
Nature lover Ashley Schmidt no longer spends much time in her garden, in the Dallas suburb of North Garland.
She's also given up on cycling to the local parks where she previously enjoyed taking close-up photos of the bugs, lizards and toads.
It's all because she can't stand the sound of the delivery drones that fly overhead, depositing her neighbours' online orders.
"They emit this very annoying buzz. It triggers my fight or flight response," says the 44-year-old administrative assistant.
"You can hear the drones on approach and you can hear them inside your home when they pass directly overhead and then you hear them as they leave," she says.
Schmidt is one of a growing number of people living with the noise of drones dispatched by companies including Amazon and Walmart as they seek to speed up home deliveries.
Delivery drone services, not long ago a novelty, are becoming part of everyday life for many people in the US.
Among them, Amazon Prime Air is in the process of expanding deliveries to nearly 500 cities and towns, delivering items that fit into a space the size of a shoe box. It has also launched to customers in and around Darlington in the north of England.
Smaller drone delivery services are popping up too: in some US cities, customers can order flying treats from their local pizza joint or ice cream parlour.
Even in cities where noise is already a steady part of life, the sound of drones seems to irk in a particular way.
While the steady passing of traffic might blend into the background, the sudden whine of a drone's rotors can pierce the everyday hum.
The sound tends to be "particularly noticeable, even when overall sound levels are relatively low," says Antonio Torija Martinez, professor in acoustic engineering and psychoacoustics at the University of Salford.
Unlike planes, drones operate at low altitudes and may fly directly over residential areas.
"They can expose communities that have not previously experienced significant aircraft noise, and who may therefore be more sensitive to changes in their local soundscape," says Torija Martinez.
He points to research showing that people respond strongly to a noise when they consider the source to be "novel, intrusive or frequent". People who benefit from a drone delivery service, for example, may be less bothered by the noise.
However, complaints about the sound of drones are likely to grow, he warns: "At the moment we are seeing some of these problems localised in some areas, but… as the drone sector expands, more and more of these complaints will happen."
In the US, the Federal Aviation Administration (FAA) regulates commercial drones, but it has come under fire for allowing noisy drone delivery operations. The FAA says operators and local community leaders have primary responsibility for addressing any community concerns.
Might better technology muffle the irritating buzz?
One startup, Greenjets, set out to tackle both "noise level and the frequency of that noise," as Darren James, future technologies lead at the company, puts it.
The London-based business has designed a propulsion system it claims can reduce drone noise by at least two thirds.
While standard drones use spinning propellers that slice through open air, creating that high-pitched buzz, Greenjets encloses spinning blades inside a pod, to muffle the sound and direct the noise away from the ground.
Its system also quietens things down through slower rotor speed and by using materials that reduce vibration noise.
Making quieter drones isn't just about keeping the noise down for neighbours who are already sick of airborne deliveries.
Greenjets' low-noise tech has been used by police and harbour security teams in Germany. It has also helped conservationists in Africa, who are seeking to track poachers from above without being detected.
Battlefield drone operators also have good reason to keep the noise down, to avoid alerting the enemy of the approach of their unmanned vehicles.
"There are some efforts to reduce the sound of drones. The US Special Forces are interested, at an experimental stage," says Robert Tollast, a research fellow at Whitehall think tank The Royal United Services Institute (RUSI).
But he stresses that drone speed, rather than stealthiness, tends to come first for larger drones used in the war between Russia and Ukraine. "Make it faster, not less quiet, seems to be the approach," says Tollast.
For Detroit-based entrepreneur, Greg Sharrow, it was the challenge of broadcasting a classical music performance back in 2012 that set him on the path to quieter drone design.
He needed to film a violinist from a tricky angle and a drone seemed the only solution – expect that it would be far too noisy.
As a starting point, "I knew that most of the noise from the drone was coming from the propeller, not the motor," he says. Specifically, it was the tips of the blades that he realised were creating the noise as they swiped through the air.
"I asked myself a very simple question, what would a tipless propeller look like and how would it function?"
The result was to create a propeller with twisted loop-shaped blades with no points.
It turned out it was easier to test his propeller in water than it was to repeatedly fly a drone, which led Sharrow to initially develop a less noisy boat propeller. Now, however, his company, Sharrow Engineering, is focusing on developing "ultra-quiet" drone rotors.
"We have validated that the technology works in drone applications and that it is dramatically quieter," says Sharrow.
Companies at the forefront of drone deliveries say they are also working to reduce the noise of their fleets. A spokesperson for Amazon says it has made "measurable sound improvements" to its drones and its latest designs use custom-designed propellers "that produce almost half the perceived sound of the prior generation, with a milder tone".
Drone maker Wing, which provides its vehicles for Walmart deliveries, says its propellers are designed to minimise noise. It also varies its flight paths to prevent repeated overflights over any single home or neighbourhood.
For Schmidt, fed up with the noise of drones, the only truly satisfactory solution would be to halt drone deliveries in her area. "I would like them to completely stop until they figure out how their services stop being a nuisance," she says.
Technology of Business
- Published25 September
- Published30 September
- Published9 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ck1exgejq3xvo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-28T00:01:10+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a5b2/live/ad407780-c7b4-11f1-a64c-550be9e3c66b.jpg",
    readTime: 10,
  },
  {
    id: "china-s-families-are-now-supporting-more-06de503d",
    title: "China's families are now supporting more old people than kids",
    titleJa: "China's families are now supporting more old people than kids",
    summaryJa: "The latest figures mark a major milestone as Beijing grapples with an ageing population.",
    bodyOriginal: `China's families are now supporting more old people than kids
- Published
Families in China are for the first time supporting more elderly people than children, the country's government has said.
Official data released in the last week, external show the ratio of China's dependent elderly people compared to the working age population rose to 23% last year, overtaking the figure for children, which stood at 22%.
The numbers are closely watched for signs of how China's shrinking workforce will impact both the world's second largest economy and global growth as a whole.
The latest figures mark a significant milestone as China grapples with an ageing population that could have implications for families, pensions and healthcare spending, analysts say.
China has been preparing for a growing proportion of elderly people in recent years, while urging younger generations to get married and for couples to have more children.
The latest data from China's National Bureau of Statistics show there are now more than 223 million people in China aged 65 and above, accounting for nearly 16% of the country's total population.
At the same time there are about 213 million children aged 14 and under.
No official commentary was published with the statistics. But Chinese state-controlled news outlet Global Times wrote that the nation's "entry into a moderately ageing society" is the result of a mix of factors, including the "size of past birth cohorts" and longer life expectancy.
The shift could place added strain on pension, healthcare and long-term care systems, while also creating opportunities in the so-called silver economy that caters to older consumers, the newspaper said.
"It reflects a historical trend in demographic development rather than a short-term phenomenon," Global Times quoted one researcher as saying.
The demographic shift is "symbolic" and could suggest more public spending will move from families and schools to pensions and healthcare, said Professor Stuart Gietel-Basten from The Hong Kong University of Science and Technology.
It may also pose a challenge to the country's ambitions, as it could limit its economic growth as well as people's spending power, said National University of Singapore sociology lecturer Mu Zheng.
China's ageing population has been driven by a mix of factors, including rapid urbanisation and the effects of the controversial one-child policy, which was in place from 1980 to the end of 2015.
The strategy, designed to keep China's rapid population growth under control, is estimated by the country's government to have prevented about 400 million births since it began, though this number has been contested.
The policy played a key role in shrinking the population and means there are fewer younger people to support a growing number of elderly relatives, Mu said.
But despite easing restrictions on the size of families, Beijing has struggled to persuade couples to have more children, with birth rates hitting historic lows.
Other contributing factors include changing gender roles, rising living costs and higher education levels that have put pressure on fertility rates, Mu said.
Beijing made further support for older people a part of the measures in its five-year economic blueprint that was announced earlier this year.
Financial help for pensioners has been a growing part of Chinese government spending. More than 53 million elderly people were receiving senior citizen allowances and subsidies by the end of 2025, according to official figures.
The Global Times noted that many people entering old age who were born between the 1950s and the 1970s have generally higher incomes compared to previous generations, stronger purchasing power and are healthier.
The dependency ratio is widely-used to measure ageing populations but it has also been questioned by some experts who argue that its scope is too limited.
Gietel-Basten said the use of the statistics risks "taking agency away" from older people - many of whom he says have been misrepresented as dependants.
It also does not take into account improvements to healthcare, he added.
Related topics
- Published19 January
- Published31 December 2025`,
    bodyJa: `China's families are now supporting more old people than kids
- Published
Families in China are for the first time supporting more elderly people than children, the country's government has said.
Official data released in the last week, external show the ratio of China's dependent elderly people compared to the working age population rose to 23% last year, overtaking the figure for children, which stood at 22%.
The numbers are closely watched for signs of how China's shrinking workforce will impact both the world's second largest economy and global growth as a whole.
The latest figures mark a significant milestone as China grapples with an ageing population that could have implications for families, pensions and healthcare spending, analysts say.
China has been preparing for a growing proportion of elderly people in recent years, while urging younger generations to get married and for couples to have more children.
The latest data from China's National Bureau of Statistics show there are now more than 223 million people in China aged 65 and above, accounting for nearly 16% of the country's total population.
At the same time there are about 213 million children aged 14 and under.
No official commentary was published with the statistics. But Chinese state-controlled news outlet Global Times wrote that the nation's "entry into a moderately ageing society" is the result of a mix of factors, including the "size of past birth cohorts" and longer life expectancy.
The shift could place added strain on pension, healthcare and long-term care systems, while also creating opportunities in the so-called silver economy that caters to older consumers, the newspaper said.
"It reflects a historical trend in demographic development rather than a short-term phenomenon," Global Times quoted one researcher as saying.
The demographic shift is "symbolic" and could suggest more public spending will move from families and schools to pensions and healthcare, said Professor Stuart Gietel-Basten from The Hong Kong University of Science and Technology.
It may also pose a challenge to the country's ambitions, as it could limit its economic growth as well as people's spending power, said National University of Singapore sociology lecturer Mu Zheng.
China's ageing population has been driven by a mix of factors, including rapid urbanisation and the effects of the controversial one-child policy, which was in place from 1980 to the end of 2015.
The strategy, designed to keep China's rapid population growth under control, is estimated by the country's government to have prevented about 400 million births since it began, though this number has been contested.
The policy played a key role in shrinking the population and means there are fewer younger people to support a growing number of elderly relatives, Mu said.
But despite easing restrictions on the size of families, Beijing has struggled to persuade couples to have more children, with birth rates hitting historic lows.
Other contributing factors include changing gender roles, rising living costs and higher education levels that have put pressure on fertility rates, Mu said.
Beijing made further support for older people a part of the measures in its five-year economic blueprint that was announced earlier this year.
Financial help for pensioners has been a growing part of Chinese government spending. More than 53 million elderly people were receiving senior citizen allowances and subsidies by the end of 2025, according to official figures.
The Global Times noted that many people entering old age who were born between the 1950s and the 1970s have generally higher incomes compared to previous generations, stronger purchasing power and are healthier.
The dependency ratio is widely-used to measure ageing populations but it has also been questioned by some experts who argue that its scope is too limited.
Gietel-Basten said the use of the statistics risks "taking agency away" from older people - many of whom he says have been misrepresented as dependants.
It also does not take into account improvements to healthcare, he added.
Related topics
- Published19 January
- Published31 December 2025`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr20wzwyzl1qo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-27T23:16:08+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/39b9/live/b1569840-d105-11f1-8441-f1b8954c52d9.jpg",
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
