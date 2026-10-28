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
  {
    id: "grand-jury-rejects-doj-bid-to-indict-ex-34f79190",
    title: "Grand jury rejects DOJ bid to indict ex-Trump WH aide Cassidy Hutchinson: Reports",
    titleJa: "Grand jury rejects DOJ bid to indict ex-Trump WH aide Cassidy Hutchinson: Reports",
    summaryJa: "Cassidy Hutchinson had testified to a House committee about Trump's conduct on the day of the Jan. 6, 2021, U.S. Capitol riot by his supporters.",
    bodyOriginal: `A federal grand jury in Washington, D.C., rejected a request by the Department of Justice to indict former White House aide Cassidy Hutchinson in connection with her congressional testimony about President Donald Trump's conduct during the Jan. 6, 2021, mob attack on the U.S. Capitol, The Washington Post reported Tuesday.
MS NOW confirmed the report and said prosecutors in the DOJ's Civil Rights Division sought to charge Hutchinson with a crime based on claims she made false statements, citing two people with knowledge of the case.
Senior DOJ lawyer Neville Hadley told Magistrate Judge Zia Faruqui in open court on Tuesday afternoon that the grand jury had rejected the requested indictment without naming Hutchinson as the target, according to The Post.
It is extremely rare for a grand jury to refuse to indict when prosecutors present evidence of alleged crimes.
But federal prosecutors in Washington, since Trump took office again in January 2025, several times failed to obtain a grand jury indictment they sought.
Hutchinson testified in June 2022 to the House Select Committee that investigated the Jan. 6 Capitol riot by a mob of Trump supporters, whose attack there delayed for hours the confirmation of former President Joe Biden's electoral victory in the 2020 election.
She said that after Trump spoke at a rally outside the White House that preceded the attack, then-White House official Tony Ornato asked her, "Did you effing hear what happened in [the president's vehicle,] The Beast?"
She testified that Ornato told her that when Trump got in the car, he was under the impression from his then-Chief of Staff Mark Meadows that they going to the Capitol, as he had claimed in his speech to supporters at the rally.
When Robert Engle, the head of Trump's security detail, said the president could not go there becaue the area was not secure, Trump "had a very strong, a very angry response to that," Hutchinson testified that Ornato said.
"Tony described him as being irate," Hutchinson said, noting that Trump had said something like: "I'm the effing president, take me up to the Capitol now, according to Ornato.
When Engel refused again to drive him to the Capitol, Trump "reached up towards the front of the vehicle to grab at the steering wheel. Mr. Engel grabbed his arm, said, 'Sir, you need to take your hand off the steering wheel. We're going back to the West Wing,'" Hutchinson testified.
Trump "then used his free hand to lunge toward Bobby Engel," Hutchinson said she was told by Ornato.
This is breaking news. Please refresh for updates.`,
    bodyJa: `A federal grand jury in Washington, D.C., rejected a request by the Department of Justice to indict former White House aide Cassidy Hutchinson in connection with her congressional testimony about President Donald Trump's conduct during the Jan. 6, 2021, mob attack on the U.S. Capitol, The Washington Post reported Tuesday.
MS NOW confirmed the report and said prosecutors in the DOJ's Civil Rights Division sought to charge Hutchinson with a crime based on claims she made false statements, citing two people with knowledge of the case.
Senior DOJ lawyer Neville Hadley told Magistrate Judge Zia Faruqui in open court on Tuesday afternoon that the grand jury had rejected the requested indictment without naming Hutchinson as the target, according to The Post.
It is extremely rare for a grand jury to refuse to indict when prosecutors present evidence of alleged crimes.
But federal prosecutors in Washington, since Trump took office again in January 2025, several times failed to obtain a grand jury indictment they sought.
Hutchinson testified in June 2022 to the House Select Committee that investigated the Jan. 6 Capitol riot by a mob of Trump supporters, whose attack there delayed for hours the confirmation of former President Joe Biden's electoral victory in the 2020 election.
She said that after Trump spoke at a rally outside the White House that preceded the attack, then-White House official Tony Ornato asked her, "Did you effing hear what happened in [the president's vehicle,] The Beast?"
She testified that Ornato told her that when Trump got in the car, he was under the impression from his then-Chief of Staff Mark Meadows that they going to the Capitol, as he had claimed in his speech to supporters at the rally.
When Robert Engle, the head of Trump's security detail, said the president could not go there becaue the area was not secure, Trump "had a very strong, a very angry response to that," Hutchinson testified that Ornato said.
"Tony described him as being irate," Hutchinson said, noting that Trump had said something like: "I'm the effing president, take me up to the Capitol now, according to Ornato.
When Engel refused again to drive him to the Capitol, Trump "reached up towards the front of the vehicle to grab at the steering wheel. Mr. Engel grabbed his arm, said, 'Sir, you need to take your hand off the steering wheel. We're going back to the West Wing,'" Hutchinson testified.
Trump "then used his free hand to lunge toward Bobby Engel," Hutchinson said she was told by Ornato.
This is breaking news. Please refresh for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/cassidy-hutchinson-doj-grand-jury-trump.html",
    publishedAt: "2026-10-27T22:01:58+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 6,
  },
  {
    id: "trump-administration-may-let-more-russia-c63faac0",
    title: "Trump administration may let more Russian diesel onto market, energy secretary tells CNBC",
    titleJa: "Trump administration may let more Russian diesel onto market, energy secretary tells CNBC",
    summaryJa: "The diesel volumes in the Trump-Putin deal won't materially lower prices because the shipments are small compared to total demand, analysts say.",
    bodyOriginal: `The U.S. may allow more diesel fuel from Russia onto the global market depending on Moscow's behavior, Energy Secretary Chris Wright told CNBC in an interview Tuesday.
Wright framed the Trump administration's suspension of U.S. sanctions against Russian diesel exports earlier this month as "an incentive" for Moscow to end the war in Ukraine. It will help with fuel supplies on the margin, he said.
The Russian-flagged tanker Talisman is expected to arrive on the U.S. East Coast on Nov. 9, according to the ship-tracking platform MarineTraffic. Another tanker, the Leruo, has departed Russia en route to the "Atlantic Coast" without explicitly declaring its destination as the U.S.
More tankers with Russian diesel could "quite possibly" set sail under the U.S. sanctions waiver, Wright told CNBC's Power Lunch. "It's trying to put a carrot in front of Russia," the energy secretary said.
President Donald Trump struck a deal with President Vladimir Putin for Russia to export 800,000 metric tons of diesel in October and November, followed by another million tons.
Trump reached the agreement with Putin as he faces political pressure to reduce surging diesel prices ahead of the U.S. midterm elections next Tuesday. Fuel prices have spiked since the U.S. and Israel attacked Iran on Feb. 28.
But the diesel volumes in the Trump-Putin deal won't materially lower prices because the shipments are small compared to total global demand of around 28 million barrels per day, analysts say.
The first shipment from Russia of 300,000 tons is equivalent to about 75,000 barrels per day (bpd) if rolled out over one month. The second tranche, of 500,000 tons, equals about 124,000 bpd.
Ukraine's President Volodymyr Zelenskyy has sharply criticized the diesel deal. Kyiv has pounded Russian refineries this year in an effort to cut the revenue the Kremlin collects from energy exports and curtail Moscow's ability to wage war.
The strikes forced Moscow to implement a diesel export ban in July. The Kremlin has partially lifted that ban to fulfill the Trump-Putin deal.
Several Republican senators also slammed the deal, signing a letter with Democratic colleagues that condemned the agreement as "a gift to our adversary and a betrayal of our Allies."`,
    bodyJa: `The U.S. may allow more diesel fuel from Russia onto the global market depending on Moscow's behavior, Energy Secretary Chris Wright told CNBC in an interview Tuesday.
Wright framed the Trump administration's suspension of U.S. sanctions against Russian diesel exports earlier this month as "an incentive" for Moscow to end the war in Ukraine. It will help with fuel supplies on the margin, he said.
The Russian-flagged tanker Talisman is expected to arrive on the U.S. East Coast on Nov. 9, according to the ship-tracking platform MarineTraffic. Another tanker, the Leruo, has departed Russia en route to the "Atlantic Coast" without explicitly declaring its destination as the U.S.
More tankers with Russian diesel could "quite possibly" set sail under the U.S. sanctions waiver, Wright told CNBC's Power Lunch. "It's trying to put a carrot in front of Russia," the energy secretary said.
President Donald Trump struck a deal with President Vladimir Putin for Russia to export 800,000 metric tons of diesel in October and November, followed by another million tons.
Trump reached the agreement with Putin as he faces political pressure to reduce surging diesel prices ahead of the U.S. midterm elections next Tuesday. Fuel prices have spiked since the U.S. and Israel attacked Iran on Feb. 28.
But the diesel volumes in the Trump-Putin deal won't materially lower prices because the shipments are small compared to total global demand of around 28 million barrels per day, analysts say.
The first shipment from Russia of 300,000 tons is equivalent to about 75,000 barrels per day (bpd) if rolled out over one month. The second tranche, of 500,000 tons, equals about 124,000 bpd.
Ukraine's President Volodymyr Zelenskyy has sharply criticized the diesel deal. Kyiv has pounded Russian refineries this year in an effort to cut the revenue the Kremlin collects from energy exports and curtail Moscow's ability to wage war.
The strikes forced Moscow to implement a diesel export ban in July. The Kremlin has partially lifted that ban to fulfill the Trump-Putin deal.
Several Republican senators also slammed the deal, signing a letter with Democratic colleagues that condemned the agreement as "a gift to our adversary and a betrayal of our Allies."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/trump-putin-zelenskyy-russia-ukraine-diesel.html",
    publishedAt: "2026-10-27T21:42:29+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "coreweave-and-other-ai-stocks-rise-as-an-e583328f",
    title: "CoreWeave and other AI stocks rise as Anthropic restores the market’s faith in sustained spending",
    titleJa: "CoreWeave and other AI stocks rise as Anthropic restores the market’s faith in sustained spending",
    summaryJa: "Now that investors have been able to dive further into Anthropic’s IPO filing, they’re seeing the same sorts of trends that helped buoy AI stocks for much of this year.",
    bodyOriginal: `Now that investors have been able to dive further into Anthropic’s IPO filing, they’re seeing the same sorts of trends that helped buoy AI stocks for much of this year.`,
    bodyJa: `Now that investors have been able to dive further into Anthropic’s IPO filing, they’re seeing the same sorts of trends that helped buoy AI stocks for much of this year.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/coreweave-and-other-ai-stocks-rise-as-anthropic-restores-the-markets-faith-in-sustained-spending-c71d7186?mod=mw_rss_topstories",
    publishedAt: "2026-10-27T21:41:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-31372691",
    readTime: 2,
  },
  {
    id: "as-trump-touts-energy-companies-fortunes-95e701c3",
    title: "As Trump touts energy companies’ fortunes, U.S. consumers face the most expensive year for gas prices ever",
    titleJa: "As Trump touts energy companies’ fortunes, U.S. consumers face the most expensive year for gas prices ever",
    summaryJa: "President Donald Trump can’t stop touting the fortunes U.S. energy companies have made during the Iran war, while canvassing the country to support Republican candidates ahead of next week’s midterm elections.",
    bodyOriginal: `President Donald Trump can’t stop touting the fortunes U.S. energy companies have made during the Iran war, while canvassing the country to support Republican candidates ahead of next week’s midterm elections.`,
    bodyJa: `President Donald Trump can’t stop touting the fortunes U.S. energy companies have made during the Iran war, while canvassing the country to support Republican candidates ahead of next week’s midterm elections.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/as-trump-touts-energy-companies-fortunes-u-s-consumers-face-the-most-expensive-year-for-gas-prices-ever-c467268c?mod=mw_rss_topstories",
    publishedAt: "2026-10-27T21:29:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-76497917",
    readTime: 2,
  },
  {
    id: "chart-anthropic-s-cash-pile-towers-over-26f6d959",
    title: "Chart: Anthropic's cash pile towers over nearly every U.S. company",
    titleJa: "Chart: Anthropic's cash pile towers over nearly every U.S. company",
    summaryJa: "Anthropic's cash pile $131.7 billion is more than every non-bank U.S. company except for Berkshire Hathaway and Alphabet.",
    bodyOriginal: `Anthropic has more cash than almost every company in America.
The nearly six-year-old artificial intelligence lab disclosed on Monday in an S-1 filing with the Securities and Exchange Commission that it had $112.4 billion in cash, plus another $19.3 billion in short-term investments, as of June 30.
Anthropic's total of $131.7 billion surpasses every non-bank U.S. company, except for Berkshire Hathaway and Alphabet, according to data compiled by CNBC and S&P Capital IQ.
As of midyear, Anthropic had more cash than Amazon, SpaceX, Meta, and Microsoft. It had more than Nvidia and Apple combined.
Depending on how much the company raises in its initial public offering — and reports suggest it could top $100 billion — Anthropic could bump its hoard to more than $230 billion in cash.
So far, Anthropic hasn't shared specific details about its offering size, and it said in the filing that existing investors would also be selling into the IPO – meaning the company itself won't collect the entire fundraise. Those details are expected to be disclosed in about two weeks.
Never before has a company gone public with anywhere near this amount of cash.
Anthropic's trove underscores the fundraising prowess that has allowed it to amass an aggregate of $141 billion in private financing in just six years since its founding. However, given the company's future commitments for computing power that have yet to hit its expenses, Anthropic will have to continue accumulating cash through fundraising or generating profits to fulfill its obligations.
Anthropic's first-half compute and infrastructure expenses totaled $8.95 billion. But the company said it usually buys computing power 12 to 18 months ahead of time, and only recognizes expenses as that capacity becomes available. That means the first-half expense figure doesn't capture the full scale of its future obligations.
As of June 30, Anthropic disclosed $321.4 billion in estimated future undiscounted lease obligations and $265.6 billion in expected future fixed or minimum-guaranteed commitments – more than half a trillion total. These will commence within the next few years, with terms ranging from one year to 20 years.
Additionally, the company said that subsequent to June 30, it entered into new and amended agreements with a minimum future payment obligation of about $245 billion.
The company hasn't shared an aggregate amount of its up-to-date commitments yet.
If Anthropic's cash is king, compute is its biggest claim on the crown.`,
    bodyJa: `Anthropic has more cash than almost every company in America.
The nearly six-year-old artificial intelligence lab disclosed on Monday in an S-1 filing with the Securities and Exchange Commission that it had $112.4 billion in cash, plus another $19.3 billion in short-term investments, as of June 30.
Anthropic's total of $131.7 billion surpasses every non-bank U.S. company, except for Berkshire Hathaway and Alphabet, according to data compiled by CNBC and S&P Capital IQ.
As of midyear, Anthropic had more cash than Amazon, SpaceX, Meta, and Microsoft. It had more than Nvidia and Apple combined.
Depending on how much the company raises in its initial public offering — and reports suggest it could top $100 billion — Anthropic could bump its hoard to more than $230 billion in cash.
So far, Anthropic hasn't shared specific details about its offering size, and it said in the filing that existing investors would also be selling into the IPO – meaning the company itself won't collect the entire fundraise. Those details are expected to be disclosed in about two weeks.
Never before has a company gone public with anywhere near this amount of cash.
Anthropic's trove underscores the fundraising prowess that has allowed it to amass an aggregate of $141 billion in private financing in just six years since its founding. However, given the company's future commitments for computing power that have yet to hit its expenses, Anthropic will have to continue accumulating cash through fundraising or generating profits to fulfill its obligations.
Anthropic's first-half compute and infrastructure expenses totaled $8.95 billion. But the company said it usually buys computing power 12 to 18 months ahead of time, and only recognizes expenses as that capacity becomes available. That means the first-half expense figure doesn't capture the full scale of its future obligations.
As of June 30, Anthropic disclosed $321.4 billion in estimated future undiscounted lease obligations and $265.6 billion in expected future fixed or minimum-guaranteed commitments – more than half a trillion total. These will commence within the next few years, with terms ranging from one year to 20 years.
Additionally, the company said that subsequent to June 30, it entered into new and amended agreements with a minimum future payment obligation of about $245 billion.
The company hasn't shared an aggregate amount of its up-to-date commitments yet.
If Anthropic's cash is king, compute is its biggest claim on the crown.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/anthropic-cash-investments-ipo.html",
    publishedAt: "2026-10-27T21:22:03+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "early-third-quarter-earnings-show-a-resi-9c29294d",
    title: "Early third-quarter earnings show a 'resilient' U.S. consumer, with signs of strain",
    titleJa: "Early third-quarter earnings show a 'resilient' U.S. consumer, with signs of strain",
    summaryJa: "Companies from Royal Caribbean to Coca-Cola and UPS say they are seeing steady consumer spending despite high inflation.",
    bodyOriginal: `One word keeps appearing in third-quarter earnings reports: "resilient."
That's the early read on U.S. consumers from various companies that released their results this week. Many businesses say Americans are still spending despite inflationary pressures, though not every company has enjoyed the same success.
The commentary comes amid fears that diesel fuel prices, which hit an all-time high of $6.52 per gallon in September, would drive up prices on consumer products. Economists also worried that more expensive regular gas, combined with high borrowing costs and continued tension between the U.S. and Iran, would spur a pullback in consumer spending.
Retail sales rose 0.8% in September, following a jump of 1.3% in August. Sales in September were boosted by rising gas station spending. Despite all those challenges, some corporate executives say the headwinds aren't yet affecting sales.
"There's been a lot of noise in the market this year. There's a lot of geopolitical stuff," Royal Caribbean Chairman and CEO Jason Liberty said on the company's earnings call on Tuesday. "But I look at our business [and our results], and I think that really talks to the resilience of the business, the resilience of the consumer."
Royal Caribbean reported an increase in bookings during its third quarter, while Sherwin-Williams' CEO said the quarter was evidence of the company's strength.
Here's how companies are reading the consumer in the most recent three-month period:
Coca-Cola
The food and beverage company beat analysts' expectations for third-quarter earnings and revenue despite what CEO Henrique Braun called an "uneven environment."
Coca-Cola reported that North America unit case volume was flat, indicating demand was steady in the face of higher prices. The company's overall unit case volume was helped by higher demand outside of North America.
"The underlying momentum remains quite strong," Chief Financial Officer John Murphy told CNBC. "Consumer sentiment is largely unchanged in the sense that, wherever you are on the income scale, you're looking for value, and I think our system here has done a good job interpreting that."
The company increased its full-year forecast and now expects its comparable earnings per share to grow at least 11%, up from a prior forecast of growth between 9% and 10%.
Royal Caribbean
The cruise company beat Wall Street's expectations for earnings per share and narrowly missed on revenue.
"Our third quarter results reflect continued strong consumer demand for our vacation experiences and the accelerated momentum across our industry leading brands," CEO Liberty said in the release.
The company reported that the number of guests served in the third quarter increased 9% year over year to 2.7 million vacationers and said booking volumes for 2027 were already "up in the high teens," pacing ahead of historical levels and indicating high travel demand.
"It's not that we don't see points of challenges, but really what we've seen is that even in those points of challenges, the consumer comes roaring back as relates to the vacation experiences," Liberty told CNBC's "Squawk on the Street" following the report.
Royal Caribbean shares closed up more than 5% on Tuesday.
Sherwin-Williams
Sherwin-Williams beat analysts' expectations for revenue but fell short of expected earnings per share.
Sherwin-Williams CEO Heidi Petz said in the company's earnings release that the paint retailer's performance demonstrated "the resilience of our Company and the strength of our strategy in a challenging demand environment."
"Despite muted underlying market volumes, we continued to win new customers, increase share-of-wallet and deliver sales growth across all three reportable segments," she said.
Net sales increased 7.9% from the same period last year. The company attributed the gain to higher selling prices, but the benefits to profits were partially offset by increased costs of raw materials and supply-chain related expenses.
And the company maintained full-year guidance, saying "customer sentiment and the leading indicators we track point to muted demand over the remainder of the year and into 2027."
UPS
UPS beat Wall Street expectations for both earnings per share and revenue in the third quarter.
Revenue in the U.S. rose 4.5% during the period to $14.86 billion.
CEO Carol Tomé told investors on the company's earnings call that consumers remain "resilient" ahead of the holiday season, the company's busiest period. She said the company expects that average daily shipping volume will grow next quarter at a rate consistent with last year. However, fourth-quarter domestic average daily volume will likely fall due to reducing deliveries with Amazon, she said.
UPS has been in the midst of unwinding its partnership with Amazon at the same time it's executing a broad turnaround effort to operate more leanly.
The company raised its full-year forecast for the second quarter in a row, projecting consolidated revenue of approximately $92.6 billion, up from its previous expectations of $91.2 billion.
Shares closed up more than 5% on Tuesday.
Whirlpool
Not every company is seeing the same spending trends, however.
Appliance maker Whirlpool missed on both the top and bottom lines for its third quarter and cut its full-year revenue guidance.
Net sales in North America fell more than 8% year over year during the period ending on Sept. 30.
Even still, the company cited its own read on "resilience."
"Through disciplined working capital management, we are protecting our year end free cash flow and
our balance sheet resilience to navigate challenging market conditions," CFO Roxanne Warner said in the earnings release.
Shares closed up more than 3% on Tuesday.
— CNBC's Amelia Lucas and Laya Neelakandan contributed to this report.`,
    bodyJa: `One word keeps appearing in third-quarter earnings reports: "resilient."
That's the early read on U.S. consumers from various companies that released their results this week. Many businesses say Americans are still spending despite inflationary pressures, though not every company has enjoyed the same success.
The commentary comes amid fears that diesel fuel prices, which hit an all-time high of $6.52 per gallon in September, would drive up prices on consumer products. Economists also worried that more expensive regular gas, combined with high borrowing costs and continued tension between the U.S. and Iran, would spur a pullback in consumer spending.
Retail sales rose 0.8% in September, following a jump of 1.3% in August. Sales in September were boosted by rising gas station spending. Despite all those challenges, some corporate executives say the headwinds aren't yet affecting sales.
"There's been a lot of noise in the market this year. There's a lot of geopolitical stuff," Royal Caribbean Chairman and CEO Jason Liberty said on the company's earnings call on Tuesday. "But I look at our business [and our results], and I think that really talks to the resilience of the business, the resilience of the consumer."
Royal Caribbean reported an increase in bookings during its third quarter, while Sherwin-Williams' CEO said the quarter was evidence of the company's strength.
Here's how companies are reading the consumer in the most recent three-month period:
Coca-Cola
The food and beverage company beat analysts' expectations for third-quarter earnings and revenue despite what CEO Henrique Braun called an "uneven environment."
Coca-Cola reported that North America unit case volume was flat, indicating demand was steady in the face of higher prices. The company's overall unit case volume was helped by higher demand outside of North America.
"The underlying momentum remains quite strong," Chief Financial Officer John Murphy told CNBC. "Consumer sentiment is largely unchanged in the sense that, wherever you are on the income scale, you're looking for value, and I think our system here has done a good job interpreting that."
The company increased its full-year forecast and now expects its comparable earnings per share to grow at least 11%, up from a prior forecast of growth between 9% and 10%.
Royal Caribbean
The cruise company beat Wall Street's expectations for earnings per share and narrowly missed on revenue.
"Our third quarter results reflect continued strong consumer demand for our vacation experiences and the accelerated momentum across our industry leading brands," CEO Liberty said in the release.
The company reported that the number of guests served in the third quarter increased 9% year over year to 2.7 million vacationers and said booking volumes for 2027 were already "up in the high teens," pacing ahead of historical levels and indicating high travel demand.
"It's not that we don't see points of challenges, but really what we've seen is that even in those points of challenges, the consumer comes roaring back as relates to the vacation experiences," Liberty told CNBC's "Squawk on the Street" following the report.
Royal Caribbean shares closed up more than 5% on Tuesday.
Sherwin-Williams
Sherwin-Williams beat analysts' expectations for revenue but fell short of expected earnings per share.
Sherwin-Williams CEO Heidi Petz said in the company's earnings release that the paint retailer's performance demonstrated "the resilience of our Company and the strength of our strategy in a challenging demand environment."
"Despite muted underlying market volumes, we continued to win new customers, increase share-of-wallet and deliver sales growth across all three reportable segments," she said.
Net sales increased 7.9% from the same period last year. The company attributed the gain to higher selling prices, but the benefits to profits were partially offset by increased costs of raw materials and supply-chain related expenses.
And the company maintained full-year guidance, saying "customer sentiment and the leading indicators we track point to muted demand over the remainder of the year and into 2027."
UPS
UPS beat Wall Street expectations for both earnings per share and revenue in the third quarter.
Revenue in the U.S. rose 4.5% during the period to $14.86 billion.
CEO Carol Tomé told investors on the company's earnings call that consumers remain "resilient" ahead of the holiday season, the company's busiest period. She said the company expects that average daily shipping volume will grow next quarter at a rate consistent with last year. However, fourth-quarter domestic average daily volume will likely fall due to reducing deliveries with Amazon, she said.
UPS has been in the midst of unwinding its partnership with Amazon at the same time it's executing a broad turnaround effort to operate more leanly.
The company raised its full-year forecast for the second quarter in a row, projecting consolidated revenue of approximately $92.6 billion, up from its previous expectations of $91.2 billion.
Shares closed up more than 5% on Tuesday.
Whirlpool
Not every company is seeing the same spending trends, however.
Appliance maker Whirlpool missed on both the top and bottom lines for its third quarter and cut its full-year revenue guidance.
Net sales in North America fell more than 8% year over year during the period ending on Sept. 30.
Even still, the company cited its own read on "resilience."
"Through disciplined working capital management, we are protecting our year end free cash flow and
our balance sheet resilience to navigate challenging market conditions," CFO Roxanne Warner said in the earnings release.
Shares closed up more than 3% on Tuesday.
— CNBC's Amelia Lucas and Laya Neelakandan contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/q3-earnings-resilient-consumer.html",
    publishedAt: "2026-10-27T21:12:55+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "speaker-mike-johnson-calls-election-tran-57ffd535",
    title: "Speaker Mike Johnson calls election-transfer concerns ‘absurd’",
    titleJa: "Speaker Mike Johnson calls election-transfer concerns ‘absurd’",
    summaryJa: "Democrats and voting rights groups have raised concerns that President Donald Trump and congressional Republicans could challenge election results if they lose.",
    bodyOriginal: `U.S. House Speaker Mike Johnson, R-La., committed Tuesday to a peaceful postelection transfer of power, calling concerns that President Donald Trump and congressional Republicans could contest the results if Democrats win control of Congress "absurd."
"We're going to follow the Constitution," Johnson said Orangeburg, New York during a campaign stop with Republican Rep. Mike Lawler one week before the Nov. 3 midterm election. "The Constitution says when a state certifies the election of members of Congress, then they're administered the oath. That's what I'll be doing on Jan. 3 to everybody who's there," Johnson said in response to a question from MS NOW.
"I may not like some of those outcomes, but that's our system," he said. "And for anybody to suggest otherwise is absurd."
Democrats and voting rights advocates are bracing for potential challenges if control of the House flips, as is widely projected to happen, or control changes in the Senate, which is more closely contested. Republicans have a majority in both chambers of Congress.
Trump, who has continued to falsely claim that widespread fraud cost him the 2020 election, has fueled those fears by calling to "nationalize" elections earlier this year and repeatedly questioning the security of mail voting, while also suggesting noncitizens could vote in large enough numbers to skew results. His administration sued California on Oct. 15 in a fight over noncitizens voting.
The Department of Justice also sued Alaska on Oct. 22 to block the certification of its results in the event of voter confusion. GOP Sen. Dan Sullivan will appear on the ballot beside Daniel J. Sullivan, a retired teacher whom Republicans have said is on the ballot only as a spoiler candidate.
Johnson, who in the wake of the 2020 election was a key congressional ally of Trump's in his quest to overturn results, on Tuesday said questions about a peaceful transfer were "a little silly."
"Of course we'll have a peaceful transfer of power. But it will not be transferring, because we are going to keep the majority and I'm going to be the speaker of the House and I will keep steady hands at the wheel," Johnson told reporters.`,
    bodyJa: `U.S. House Speaker Mike Johnson, R-La., committed Tuesday to a peaceful postelection transfer of power, calling concerns that President Donald Trump and congressional Republicans could contest the results if Democrats win control of Congress "absurd."
"We're going to follow the Constitution," Johnson said Orangeburg, New York during a campaign stop with Republican Rep. Mike Lawler one week before the Nov. 3 midterm election. "The Constitution says when a state certifies the election of members of Congress, then they're administered the oath. That's what I'll be doing on Jan. 3 to everybody who's there," Johnson said in response to a question from MS NOW.
"I may not like some of those outcomes, but that's our system," he said. "And for anybody to suggest otherwise is absurd."
Democrats and voting rights advocates are bracing for potential challenges if control of the House flips, as is widely projected to happen, or control changes in the Senate, which is more closely contested. Republicans have a majority in both chambers of Congress.
Trump, who has continued to falsely claim that widespread fraud cost him the 2020 election, has fueled those fears by calling to "nationalize" elections earlier this year and repeatedly questioning the security of mail voting, while also suggesting noncitizens could vote in large enough numbers to skew results. His administration sued California on Oct. 15 in a fight over noncitizens voting.
The Department of Justice also sued Alaska on Oct. 22 to block the certification of its results in the event of voter confusion. GOP Sen. Dan Sullivan will appear on the ballot beside Daniel J. Sullivan, a retired teacher whom Republicans have said is on the ballot only as a spoiler candidate.
Johnson, who in the wake of the 2020 election was a key congressional ally of Trump's in his quest to overturn results, on Tuesday said questions about a peaceful transfer were "a little silly."
"Of course we'll have a peaceful transfer of power. But it will not be transferring, because we are going to keep the majority and I'm going to be the speaker of the House and I will keep steady hands at the wheel," Johnson told reporters.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/speaker-johnson-peaceful-transfer-midterms.html",
    publishedAt: "2026-10-27T21:12:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "amazon-s-anti-tokenmaxxing-memo-says-eng-b2484dff",
    title: "Amazon's anti-tokenmaxxing memo says engineers should be pickier about using AI",
    titleJa: "Amazon's anti-tokenmaxxing memo says engineers should be pickier about using AI",
    summaryJa: "Amazon has rapidly integrated AI across the e-commerce giant's sprawling business operations under CEO Andy Jassy.",
    bodyOriginal: `Amazon laid out its AI usage guidelines for software engineers in a memo to staffers, and discouraged employees from turning to "tokenmaxxing" in their push to embrace artificial intelligence tools.
The memo, which was circulated internally in September and posted to the company's website on Tuesday, revises how the company defines the role of software development engineers and managers in the age of AI.
"We're just seeing the beginning of AI's effect on software engineering," the company wrote. "While we have a vision for what the future looks like, there's a lot that's still emerging. We are certain that whatever future best practices are, AI will be at the center of software engineering practice."
Under CEO Andy Jassy, Amazon has rapidly integrated AI across the company's sprawling business operations. Jassy has previously predicted that AI will "change the scope and speed" of day-to-day work, and potentially shrink its corporate workforce in the next few years through automation, though he's noted it will also create "other jobs."
As employees rush to adopt AI tools, companies have grappled with the technology's surging costs and how to reliably measure whether the technology leads to a productivity boost or other valuable returns on investment.
Companies have recently cracked down on tokenmaxxing, in which developers use AI as much as possible with little regard for output. Some companies have set limits on employees' usage of tokens, or the units of data that are processed and generated by AI models, in a bid to slow rising AI bills. Others have switched to cheaper, open-source models for certain tasks.
An Amazon spokesperson said the company hasn't instituted caps on employees' token usage. Amazon in May shut down an internal leaderboard after discovering employees were tokenmaxxing to climb the ranks.
In the memo posted Tuesday, Amazon said metrics like token usage, the rate of adoption of AI tools, and code changes or reviews remain "deeply flawed" ways of measuring teams or organizations' AI usage, adding that they can lead to higher costs and too much complexity.
It stopped short of telling staffers to ignore those metrics altogether, however. Token usage and code generation should be considered "with care and judgment" alongside other data, Amazon said.
"We believe that it is best to measure, and be measured by, long-term outcomes," the company wrote.
Marc Brooker, a vice president and distinguished engineer at Amazon Web Services, told CNBC in an interview that the company has looked to metrics such as "feature velocity" to measure how AI is improving engineer productivity.
The metric looks at things like, "how many launches are we doing, how many successful changes are we making in production," he said.
"Broadly, we think about this as a return on investment," Brooker said. "If there is an important problem to solve for our customers, important problem to solve for our business, we're going to invest tools, time, tokens, human effort, etc. into those."
He added, "What we don't want to see is wasted effort where we are going and spending those tokens solving problems that don't matter and sometimes it's hard to know, so we do need to have some appetite for experimentation."
Amazon also discouraged staffers from using AI when it doesn't make sense for a given task.
"If your work does not benefit from current AI tooling, that is a finding, not a failing," Amazon said in the memo.
The company added, "An engineer who can explain where AI does not yet help their work is demonstrating the judgement we are asking for."`,
    bodyJa: `Amazon laid out its AI usage guidelines for software engineers in a memo to staffers, and discouraged employees from turning to "tokenmaxxing" in their push to embrace artificial intelligence tools.
The memo, which was circulated internally in September and posted to the company's website on Tuesday, revises how the company defines the role of software development engineers and managers in the age of AI.
"We're just seeing the beginning of AI's effect on software engineering," the company wrote. "While we have a vision for what the future looks like, there's a lot that's still emerging. We are certain that whatever future best practices are, AI will be at the center of software engineering practice."
Under CEO Andy Jassy, Amazon has rapidly integrated AI across the company's sprawling business operations. Jassy has previously predicted that AI will "change the scope and speed" of day-to-day work, and potentially shrink its corporate workforce in the next few years through automation, though he's noted it will also create "other jobs."
As employees rush to adopt AI tools, companies have grappled with the technology's surging costs and how to reliably measure whether the technology leads to a productivity boost or other valuable returns on investment.
Companies have recently cracked down on tokenmaxxing, in which developers use AI as much as possible with little regard for output. Some companies have set limits on employees' usage of tokens, or the units of data that are processed and generated by AI models, in a bid to slow rising AI bills. Others have switched to cheaper, open-source models for certain tasks.
An Amazon spokesperson said the company hasn't instituted caps on employees' token usage. Amazon in May shut down an internal leaderboard after discovering employees were tokenmaxxing to climb the ranks.
In the memo posted Tuesday, Amazon said metrics like token usage, the rate of adoption of AI tools, and code changes or reviews remain "deeply flawed" ways of measuring teams or organizations' AI usage, adding that they can lead to higher costs and too much complexity.
It stopped short of telling staffers to ignore those metrics altogether, however. Token usage and code generation should be considered "with care and judgment" alongside other data, Amazon said.
"We believe that it is best to measure, and be measured by, long-term outcomes," the company wrote.
Marc Brooker, a vice president and distinguished engineer at Amazon Web Services, told CNBC in an interview that the company has looked to metrics such as "feature velocity" to measure how AI is improving engineer productivity.
The metric looks at things like, "how many launches are we doing, how many successful changes are we making in production," he said.
"Broadly, we think about this as a return on investment," Brooker said. "If there is an important problem to solve for our customers, important problem to solve for our business, we're going to invest tools, time, tokens, human effort, etc. into those."
He added, "What we don't want to see is wasted effort where we are going and spending those tokens solving problems that don't matter and sometimes it's hard to know, so we do need to have some appetite for experimentation."
Amazon also discouraged staffers from using AI when it doesn't make sense for a given task.
"If your work does not benefit from current AI tooling, that is a finding, not a failing," Amazon said in the memo.
The company added, "An engineer who can explain where AI does not yet help their work is demonstrating the judgement we are asking for."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/amazon-ai-coding-tokenmaxxing.html",
    publishedAt: "2026-10-27T18:57:45+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 9,
  },
  {
    id: "honda-warns-50-canada-auto-tariffs-would-09e607e3",
    title: "Honda warns 50% Canada auto tariffs would be catastrophic for industry",
    titleJa: "Honda warns 50% Canada auto tariffs would be catastrophic for industry",
    summaryJa: "President Donald Trump has threatened to double tariffs on Canadian vehicles and parts from 25% to 50% if a trade deal is not reached between the two countries.",
    bodyOriginal: `DETROIT — The automotive industry faces a "catastrophic" scenario if the U.S. and Canada cannot reach a new trade deal by the end of this year, an executive with Honda Motor warned Tuesday.
President Donald Trump has threatened to double tariffs on Canadian vehicles and parts from 25% to 50% on Jan. 1 if the two countries don't reach a deal.
"That really would be catastrophic for the entire industry," Jennifer Thomas, senior vice president of corporate affairs at American Honda Motor Co., said during a Reuters automotive conference in Detroit.
Thomas said, ideally, the countries would also include Mexico in the arrangement and reach a trilateral deal, like the United States-Mexico-Canada Agreement, or USMCA. Trade associations representing Honda, as well as every major player in the U.S. automotive industry, have been advocating for that more comprehensive accord and against bilateral arrangements between two countries.
Her comments come months after U.S. Trade Representative Jamieson Greer announced that the U.S. would not automatically extend the USMCA, moving the trade pact into an annual review process instead of a 16-year trilateral extension.
Trump negotiated the USMCA to replace the North American Free Trade Agreement during his first term and it took effect in 2020. He later soured on it and accused Canada of "ripping off the United States of America for years."
Thomas said she is "cautiously optimistic" that cooler heads will prevail to avoid the doubling of tariffs, which Trump threatened in August if no deal can be reached.
She said she's encouraged by recent reports that the U.S. and Canada have reestablished trade talks, including easing levies on critical materials such as aluminum.
"Our message has been clear: We need that trilateral agreement to stay in place in order for the U.S. industry to be competitive," Thomas said. "It's integral to our success."
Honda is the second-largest producer of vehicles in Canada behind Toyota Motor, but many automotive officials have voiced concerns about the lack of a North American trade deal and tariff uncertainty due to the number of parts that regularly cross the borders for vehicle production.
While Honda has established large operations in Canada, the company reports that more than 60% of the vehicles it sells in the U.S. are manufactured domestically across multiple U.S. assembly plants.
"I never thought I would see the North American region be put at a disadvantage like this," Thomas said, adding that some overseas countries have better tariff rates.
The Trump administration has negotiated trade deals with other countries such as Japan and South Korea, which are major exporters of vehicles to the U.S., that include 15% tariffs on vehicles.`,
    bodyJa: `DETROIT — The automotive industry faces a "catastrophic" scenario if the U.S. and Canada cannot reach a new trade deal by the end of this year, an executive with Honda Motor warned Tuesday.
President Donald Trump has threatened to double tariffs on Canadian vehicles and parts from 25% to 50% on Jan. 1 if the two countries don't reach a deal.
"That really would be catastrophic for the entire industry," Jennifer Thomas, senior vice president of corporate affairs at American Honda Motor Co., said during a Reuters automotive conference in Detroit.
Thomas said, ideally, the countries would also include Mexico in the arrangement and reach a trilateral deal, like the United States-Mexico-Canada Agreement, or USMCA. Trade associations representing Honda, as well as every major player in the U.S. automotive industry, have been advocating for that more comprehensive accord and against bilateral arrangements between two countries.
Her comments come months after U.S. Trade Representative Jamieson Greer announced that the U.S. would not automatically extend the USMCA, moving the trade pact into an annual review process instead of a 16-year trilateral extension.
Trump negotiated the USMCA to replace the North American Free Trade Agreement during his first term and it took effect in 2020. He later soured on it and accused Canada of "ripping off the United States of America for years."
Thomas said she is "cautiously optimistic" that cooler heads will prevail to avoid the doubling of tariffs, which Trump threatened in August if no deal can be reached.
She said she's encouraged by recent reports that the U.S. and Canada have reestablished trade talks, including easing levies on critical materials such as aluminum.
"Our message has been clear: We need that trilateral agreement to stay in place in order for the U.S. industry to be competitive," Thomas said. "It's integral to our success."
Honda is the second-largest producer of vehicles in Canada behind Toyota Motor, but many automotive officials have voiced concerns about the lack of a North American trade deal and tariff uncertainty due to the number of parts that regularly cross the borders for vehicle production.
While Honda has established large operations in Canada, the company reports that more than 60% of the vehicles it sells in the U.S. are manufactured domestically across multiple U.S. assembly plants.
"I never thought I would see the North American region be put at a disadvantage like this," Thomas said, adding that some overseas countries have better tariff rates.
The Trump administration has negotiated trade deals with other countries such as Japan and South Korea, which are major exporters of vehicles to the U.S., that include 15% tariffs on vehicles.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/honda-warns-50percent-canada-auto-tariffs-would-be-catastrophic.html",
    publishedAt: "2026-10-27T17:53:47+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 7,
  },
  {
    id: "cryptodad-on-stablecoins-bitcoin-s-role-3928209e",
    title: "‘CryptoDad’ on stablecoins, bitcoin’s role in a portfolio and why he does not directly own any crypto",
    titleJa: "‘CryptoDad’ on stablecoins, bitcoin’s role in a portfolio and why he does not directly own any crypto",
    summaryJa: "What former CFTC Chairman Chris Giancarlo tells his own children about buying their first crypto coin.",
    bodyOriginal: `What former CFTC Chairman Chris Giancarlo tells his own children about buying their first crypto coin.`,
    bodyJa: `What former CFTC Chairman Chris Giancarlo tells his own children about buying their first crypto coin.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/cryptodad-on-stablecoins-bitcoins-role-in-a-portfolio-and-why-he-does-not-directly-own-any-crypto-72472bc1?mod=mw_rss_topstories",
    publishedAt: "2026-10-27T17:53:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-96448644",
    readTime: 2,
  },
  {
    id: "judge-blasts-prosecutors-refuses-to-sign-e609dfc6",
    title: "Judge blasts prosecutors, refuses to sign new criminal complaint against ex-FBI officials",
    titleJa: "Judge blasts prosecutors, refuses to sign new criminal complaint against ex-FBI officials",
    summaryJa: "Two ex-FBI officials were initially accused by the DOJ of lying when they testified to Congress in 2023 about their involvement in Hunter Biden investigations.",
    bodyOriginal: `A judge on Tuesday sharply criticized federal prosecutors for failing to get judicial approval before filing a new criminal complaint overnight against two ex-FBI officials accused of lying to Congress about investigations of Hunter Biden.
Magistrate Judge Zia Faruqui said he would not sign off on the new complaint, which added a charge of obstruction against Nikki Floris and Bradley Benavides in U.S. District Court in Washington.
"I am not going to bless it as a superseding complaint," Faruqui said at a court hearing, after Floris' lawyers filed a motion arguing the new complaint was legally deficient and filed in bad faith.
He told prosecutors that if they wanted to file a superseding complaint, a judge first would have to find probable cause that a crime had been committed, instead of sending him the complaint in the middle of the night and expecting him to sign it.
Faruqui said he did not believe that federal prosecutors had previously sought to file a criminal complaint without a judge's signature.
"It is not our court's practice … that unsigned complaints are filed in the docket," Faruqui said.
"I'm concerned with your view as to what the law is," the judge told the prosecutors. "Why today, on this one case, have you changed the entire history of how you charge cases?"
The superseding complaint that prosecutors in the office of D.C. U.S. Attorney Jeanine Pirro filed in court early Tuesday contained a signature block with Faruqui's name typed out. But the judge had not personally signed the complaint.
It was filed hours before prosecutors and defense lawyers were due to appear before Faruqui for a preliminary hearing on the original complaint.
That first complaint, made public last Friday, accuses Floris and Benavides of making false statements to the House Judiciary Committee in 2023 about their involvement in investigations of Hunter Biden, the son of former President Joe Biden.
Floris and Benavides were arrested Friday and have been released.
The new complaint sought to charge them with obstruction and attempted obstruction of a congressional proceeding.
Typically, criminal cases for conduct that occurred well in the past — as this one alleges — are lodged through an indictment, not a criminal complaint. To obtain an indictment, prosecutors must present evidence to a grand jury, which then determines whether the evidence is sufficient to charge a defendant.
A criminal complaint only requires a judge's signature. It is often used to obtain an arrest warrant in situations where prosecutors need to move quickly.
At Tuesday's hearing, Faruqui homed in on the way prosecutors filed charges.
"This case was charged by criminal complaint on Oct. 20, for testimony that occurred over a period of time in 2023," he said. "As I noted, and I think it continues to be the case, that it's unusual in a case that has conduct like this to be charged by criminal complaint."
"This has to get to a grand jury," Faruqui said.
Under federal rules, prosecutors generally must obtain an indictment within 30 days of a person's arrest, or risk the case being dismissed.
Floris' lawyers, in an emailed statement to CNBC on Tuesday morning, criticized the prosecutors' conduct.
"In the middle of the night, the government filed an unsigned and unsworn complaint attempting to fix the issues with their original charge against Ms. Floris and adding a new charge just as meritless as the first one," the attorneys wrote.
"In our combined decades of DOJ service, we have never seen or even heard of something like this being filed. That's because the public lodging of criminal charges must be authorized by the grand jury, a judge, or the defendant herself," they wrote.
"Here, the government has taken that power for itself in a desperate attempt to delay our client's right to challenge the charges in court and litigate this case in the media, rather than the courtroom," they said.
"We have asked to address this outrageous government conduct against a decorated public servant at today's court hearing," Floris' legal team wrote.
In their motion to strike the superseding criminal complaint, the lawyers argued the document "represents a serious abuse of the criminal charging process, a troubling disregard for the judicial safeguards governing the initiation of criminal proceedings, and a calculated effort to evade judicial scrutiny and shield the government's allegations from adversarial testing at the scheduled preliminary hearing."`,
    bodyJa: `A judge on Tuesday sharply criticized federal prosecutors for failing to get judicial approval before filing a new criminal complaint overnight against two ex-FBI officials accused of lying to Congress about investigations of Hunter Biden.
Magistrate Judge Zia Faruqui said he would not sign off on the new complaint, which added a charge of obstruction against Nikki Floris and Bradley Benavides in U.S. District Court in Washington.
"I am not going to bless it as a superseding complaint," Faruqui said at a court hearing, after Floris' lawyers filed a motion arguing the new complaint was legally deficient and filed in bad faith.
He told prosecutors that if they wanted to file a superseding complaint, a judge first would have to find probable cause that a crime had been committed, instead of sending him the complaint in the middle of the night and expecting him to sign it.
Faruqui said he did not believe that federal prosecutors had previously sought to file a criminal complaint without a judge's signature.
"It is not our court's practice … that unsigned complaints are filed in the docket," Faruqui said.
"I'm concerned with your view as to what the law is," the judge told the prosecutors. "Why today, on this one case, have you changed the entire history of how you charge cases?"
The superseding complaint that prosecutors in the office of D.C. U.S. Attorney Jeanine Pirro filed in court early Tuesday contained a signature block with Faruqui's name typed out. But the judge had not personally signed the complaint.
It was filed hours before prosecutors and defense lawyers were due to appear before Faruqui for a preliminary hearing on the original complaint.
That first complaint, made public last Friday, accuses Floris and Benavides of making false statements to the House Judiciary Committee in 2023 about their involvement in investigations of Hunter Biden, the son of former President Joe Biden.
Floris and Benavides were arrested Friday and have been released.
The new complaint sought to charge them with obstruction and attempted obstruction of a congressional proceeding.
Typically, criminal cases for conduct that occurred well in the past — as this one alleges — are lodged through an indictment, not a criminal complaint. To obtain an indictment, prosecutors must present evidence to a grand jury, which then determines whether the evidence is sufficient to charge a defendant.
A criminal complaint only requires a judge's signature. It is often used to obtain an arrest warrant in situations where prosecutors need to move quickly.
At Tuesday's hearing, Faruqui homed in on the way prosecutors filed charges.
"This case was charged by criminal complaint on Oct. 20, for testimony that occurred over a period of time in 2023," he said. "As I noted, and I think it continues to be the case, that it's unusual in a case that has conduct like this to be charged by criminal complaint."
"This has to get to a grand jury," Faruqui said.
Under federal rules, prosecutors generally must obtain an indictment within 30 days of a person's arrest, or risk the case being dismissed.
Floris' lawyers, in an emailed statement to CNBC on Tuesday morning, criticized the prosecutors' conduct.
"In the middle of the night, the government filed an unsigned and unsworn complaint attempting to fix the issues with their original charge against Ms. Floris and adding a new charge just as meritless as the first one," the attorneys wrote.
"In our combined decades of DOJ service, we have never seen or even heard of something like this being filed. That's because the public lodging of criminal charges must be authorized by the grand jury, a judge, or the defendant herself," they wrote.
"Here, the government has taken that power for itself in a desperate attempt to delay our client's right to challenge the charges in court and litigate this case in the media, rather than the courtroom," they said.
"We have asked to address this outrageous government conduct against a decorated public servant at today's court hearing," Floris' legal team wrote.
In their motion to strike the superseding criminal complaint, the lawyers argued the document "represents a serious abuse of the criminal charging process, a troubling disregard for the judicial safeguards governing the initiation of criminal proceedings, and a calculated effort to evade judicial scrutiny and shield the government's allegations from adversarial testing at the scheduled preliminary hearing."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/fbi-hunter-biden-congress-charges-doj.html",
    publishedAt: "2026-10-27T17:39:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "oracle-integrates-chatgpt-codex-into-app-66899c3d",
    title: "Oracle integrates ChatGPT, Codex into apps and expands cloud chip lineup",
    titleJa: "Oracle integrates ChatGPT, Codex into apps and expands cloud chip lineup",
    summaryJa: "Oracle is integrating OpenAI’s ChatGPT and Codex into its applications and plans to add Google TPUs and OpenAI’s Jalapeño chip to OCI.",
    bodyOriginal: `Oracle on Tuesday announced an expanded collaboration with OpenAI that brings the artificial intelligence lab's ChatGPT and Codex into the software maker's applications to make databases more actionable.
Mahesh Thiagarajan, Oracle's president of Cloud Infrastructure, told CNBC at Oracle AI World in Las Vegas that using ChatGPT "allows anybody to build an application, deploy it, manage it."
OpenAI CEO Sam Altman is set to join Oracle co-CEO Clay Magouyrk on stage for an Oracle AI World keynote on Tuesday at 12:40 p.m. ET.
For OpenAI, the announcement represents another example of the frontier lab's push into the enterprise market, just one day after its key competitor, Anthropic, filed its S-1 as it heads toward an initial public offering.
Oracle's database plays a crucial role in underpinning businesses across healthcare and finance in logging and securing data.
Thiagarajan said his team observed OpenAI's GPT-6 Astra model get trained at Oracle's Stargate data center campus in Abilene, Texas, and could see the real-time benefits.
"More businesses are choosing OpenAI as we make it easier to put AI to work through the tools and systems they already use," said Greg Brockman, president and co-founder of OpenAI, in the press release.
Oracle also said Tuesday that it is making different hardware accessible on its cloud infrastructure, including Google's tensor processing unit AI chips and OpenAI's Jalapeño chip.
"Now customers can actually have infinite possibilities in terms of how they can drive AI," Thiagarajan said.
It is the first time Google's custom chips will run on another hyperscaler's cloud, and illustrates how the companies are increasingly looking for opportunities to get their hardware in the hands of the frontier labs.
Thiagarajan added that the scarcity of chips remains an ongoing issue and that customers like OpenAI can benefit from having different accelerators to choose from. When asked whether this marks a pivot away from Nvidia GPUs, Thiagarajan said no, adding that Nvidia chips are "the best, most fungible," and that the AI market remains incredibly large.
OpenAI's Jalapeno chip and Cerebras will also run on Oracle Cloud Infrastructure. The Cerebras deal is material, but the AI chipmaker won't be disclosing the scale because it's in a quiet period, a Cerebras spokesperson said.
Cerebras stock climbed about 8% following the news. Oracle shares were up nearly 5% on Tuesday.
The announcement comes seven months after market-leading cloud Amazon Web Services announced plans to bring Cerebras hardware into its data centers, a major point of validation.
Thiagarajan also addressed Oracle's multibillion New Mexico data center dubbed Project Jupiter and the ongoing pushback it's receiving from the local community. He said Jupiter represents just one of the 30-40 different data center projects in development, per quarter, for the company.
"We're actually not too worried about what we're doing because I think we're building global infrastructure," he said.
A hearing to address air quality permitting is scheduled for Dec. 7 in Sunland Park, where the controversial data center has already broken ground. The political pushback tied to the project prompted Oracle to deliver a force majeure notice to its backer Blue Owl Capital last month. Right now, Oracle maintains that the project is on schedule.
Investors are now counting down to Oracle's investor day, where investors will want to see if the company can back its fiscal year 2030 revenue targets and if the margin profile of its cloud deals has changed due to the rising cost of capital.
Bank of America analysts wrote to clients that updates on Oracle's major data center projects are among the topics they expect clarity on at the meeting.
Oracle shares are down more than 30% this year due in part to concerns about how the company plans to finance its ambitious digital infrastructure pipeline.
—CNBC's Jordan Novet contributed to this article`,
    bodyJa: `Oracle on Tuesday announced an expanded collaboration with OpenAI that brings the artificial intelligence lab's ChatGPT and Codex into the software maker's applications to make databases more actionable.
Mahesh Thiagarajan, Oracle's president of Cloud Infrastructure, told CNBC at Oracle AI World in Las Vegas that using ChatGPT "allows anybody to build an application, deploy it, manage it."
OpenAI CEO Sam Altman is set to join Oracle co-CEO Clay Magouyrk on stage for an Oracle AI World keynote on Tuesday at 12:40 p.m. ET.
For OpenAI, the announcement represents another example of the frontier lab's push into the enterprise market, just one day after its key competitor, Anthropic, filed its S-1 as it heads toward an initial public offering.
Oracle's database plays a crucial role in underpinning businesses across healthcare and finance in logging and securing data.
Thiagarajan said his team observed OpenAI's GPT-6 Astra model get trained at Oracle's Stargate data center campus in Abilene, Texas, and could see the real-time benefits.
"More businesses are choosing OpenAI as we make it easier to put AI to work through the tools and systems they already use," said Greg Brockman, president and co-founder of OpenAI, in the press release.
Oracle also said Tuesday that it is making different hardware accessible on its cloud infrastructure, including Google's tensor processing unit AI chips and OpenAI's Jalapeño chip.
"Now customers can actually have infinite possibilities in terms of how they can drive AI," Thiagarajan said.
It is the first time Google's custom chips will run on another hyperscaler's cloud, and illustrates how the companies are increasingly looking for opportunities to get their hardware in the hands of the frontier labs.
Thiagarajan added that the scarcity of chips remains an ongoing issue and that customers like OpenAI can benefit from having different accelerators to choose from. When asked whether this marks a pivot away from Nvidia GPUs, Thiagarajan said no, adding that Nvidia chips are "the best, most fungible," and that the AI market remains incredibly large.
OpenAI's Jalapeno chip and Cerebras will also run on Oracle Cloud Infrastructure. The Cerebras deal is material, but the AI chipmaker won't be disclosing the scale because it's in a quiet period, a Cerebras spokesperson said.
Cerebras stock climbed about 8% following the news. Oracle shares were up nearly 5% on Tuesday.
The announcement comes seven months after market-leading cloud Amazon Web Services announced plans to bring Cerebras hardware into its data centers, a major point of validation.
Thiagarajan also addressed Oracle's multibillion New Mexico data center dubbed Project Jupiter and the ongoing pushback it's receiving from the local community. He said Jupiter represents just one of the 30-40 different data center projects in development, per quarter, for the company.
"We're actually not too worried about what we're doing because I think we're building global infrastructure," he said.
A hearing to address air quality permitting is scheduled for Dec. 7 in Sunland Park, where the controversial data center has already broken ground. The political pushback tied to the project prompted Oracle to deliver a force majeure notice to its backer Blue Owl Capital last month. Right now, Oracle maintains that the project is on schedule.
Investors are now counting down to Oracle's investor day, where investors will want to see if the company can back its fiscal year 2030 revenue targets and if the margin profile of its cloud deals has changed due to the rising cost of capital.
Bank of America analysts wrote to clients that updates on Oracle's major data center projects are among the topics they expect clarity on at the meeting.
Oracle shares are down more than 30% this year due in part to concerns about how the company plans to finance its ambitious digital infrastructure pipeline.
—CNBC's Jordan Novet contributed to this article`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/oracle-openai-chatgpt-codex-google-tpus.html",
    publishedAt: "2026-10-27T17:36:46+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "anthropic-s-ipo-could-be-speculative-fic-aad06cbd",
    title: "Anthropic's IPO could be 'speculative fiction' or a 'generational moment' — investors are split",
    titleJa: "Anthropic's IPO could be 'speculative fiction' or a 'generational moment' — investors are split",
    summaryJa: "Investors are digesting Anthropic's S-1 filing that the Securities and Exchange Commission released on Monday.",
    bodyOriginal: `Anthropic's IPO prospectus is chock-full of details for investors to celebrate — and worry about.
The company's bulls are cheering its 1,300% annual sales growth, 900% net revenue retention and 85% implied gross margin. But its bears are pointing to roughly $80 billion in half-year net losses, hundreds of billions of dollars' worth of compute commitments and more than 90 pages of risk factors.
From either camp, the numbers are staggering, and they put Anthropic in position to pursue what could be the largest initial stock offering in history. The IPO is also pushing investors firmly into uncharted territory as they work to value the first pure-play artificial intelligence company to go public at a time of rising interest rates and growing concerns about the size of the AI buildout.
Anthropic was valued in May at $965 billion, and is reportedly looking for an IPO valuation in the range of $1.5 trillion to $2 trillion, which would instantly make it one of the 10 most valuable U.S. tech companies.
"This is a generational moment, and we'll look back in a decade, and this was the biggest paradigm shift in technology that will shape our lives like nothing else has," Denny Fish, a portfolio manager at Janus Henderson Investors, told CNBC's "The Exchange" on Monday. "The devil comes down to the details, and we still don't have all the details yet."
Anthropic, founded in 2021 by a group of researchers who defected from OpenAI, is best known for its Claude AI models and services sold through enterprise contracts and subscriptions.
In its long-awaited prospectus on Monday, Anthropic said its enterprise customer base included more than 11,900 customers with at least $100,000 spend over the prior year, more than 1,900 clients spending $1 million or more and roughly 250 customers spending $10 million or more. In the first nine months of 2026, five customers accounted for about a quarter of its revenue.
"I think it's really easy to lose sight of how early it is, and to see a business like Anthropic doing this well this early on in the journey is incredibly impressive," Erica Brescia, a managing director at Redpoint Ventures, told CNBC's "The Exchange" on Monday.
"There's still an astronomical opportunity ahead for Anthropic," said Brescia, whose firm is an investor in the company. "And I think this is a really exciting opportunity for retail investors to get a piece and to get to participate in this transformation outside of buying chip stocks."
For many investors focused on business fundamentals, Anthropic is a tough sell.
The company lost $80.7 billion in the first six months of this year, after reporting a loss of $12.9 billion over the same stretch in 2025, though most of that was due to the change in fair value of convertible notes and derivative liabilities. Meanwhile, its compute commitments are soaring while competition is picking up from lower-cost open-weight models.
David Trainer, CEO of financial research firm New Constructs, describes Anthropic's upcoming offering as "a huge Wall Street grift."
Trainer has built a reputation on Wall Street as a notorious bear on IPOs. His firm published a report last month arguing that Anthropic is the "most ridiculous IPO of 2026" and that it will be an "unprecedented test of investor gullibility."
Having reviewed the prospectus, Trainer told CNBC in an interview on Tuesday that his position hasn't changed. He said AI will be an "amazing tool for society," but not so much for businesses, and he's worried about Anthropic's competitive position, its "opaque" insider selling schedule, and the fact that its commitments and liabilities dwarf its cash.
"All these people have stakes in Anthropic. They want to be able to cash out," Trainer said. "Having lived through the tech bubble, having lived through the great financial crisis, having been on Wall Street during those times, having seen how the sausage is made, it's like a slow-moving train wreck for me."
Roger McNamee, an early investor in both Google and Facebook, told CNBC on Tuesday that the Anthropic IPO is a "very dangerous thing for investors," adding that the industry still has a lot to prove.
"We should view this S-1 as speculative fiction because it's a great story, it's a really great story, but it's hundreds of pages, and those hundreds of pages are not there to clarify the story," McNamee, co-founder of Elevation Partners, told CNBC's "Squawk on the Street." "And based on the feedback I get on [X], a lot of people who disagree with me are sitting there going, 'I love this story,' and I go, 'Look, God bless, it's your money.'"
Anthropic's public filing brings it one step closer to its IPO, but there are still hurdles to clear to reach the starting line.
On its roadshow, the company will have to woo prospective investors, gauge demand, set the IPO offer price and allocate shares. Once all of that is complete, it will finally list on the Nasdaq under the ticker symbol "ANT."
Investors will be watching each development and detail closely.
Gil Luria, managing director at D.A. Davidson, said he wants to know a lot more before the company's debut. That includes the path to long-term profitability and, importantly, the valuation. He said in an interview on Tuesday that if the IPO is priced correctly, it will likely do "very well."
"We can talk about the risks, but as we sit here right now, and based on what we know right now, Anthropic is still the main AI company, and it's a pure play," Luria said. "So the IPO should go well because investors will want exposure to the pure play."
WATCH: Tenacity’s Ben Narasin: Anthropic could price IPO near $2 trillion`,
    bodyJa: `Anthropic's IPO prospectus is chock-full of details for investors to celebrate — and worry about.
The company's bulls are cheering its 1,300% annual sales growth, 900% net revenue retention and 85% implied gross margin. But its bears are pointing to roughly $80 billion in half-year net losses, hundreds of billions of dollars' worth of compute commitments and more than 90 pages of risk factors.
From either camp, the numbers are staggering, and they put Anthropic in position to pursue what could be the largest initial stock offering in history. The IPO is also pushing investors firmly into uncharted territory as they work to value the first pure-play artificial intelligence company to go public at a time of rising interest rates and growing concerns about the size of the AI buildout.
Anthropic was valued in May at $965 billion, and is reportedly looking for an IPO valuation in the range of $1.5 trillion to $2 trillion, which would instantly make it one of the 10 most valuable U.S. tech companies.
"This is a generational moment, and we'll look back in a decade, and this was the biggest paradigm shift in technology that will shape our lives like nothing else has," Denny Fish, a portfolio manager at Janus Henderson Investors, told CNBC's "The Exchange" on Monday. "The devil comes down to the details, and we still don't have all the details yet."
Anthropic, founded in 2021 by a group of researchers who defected from OpenAI, is best known for its Claude AI models and services sold through enterprise contracts and subscriptions.
In its long-awaited prospectus on Monday, Anthropic said its enterprise customer base included more than 11,900 customers with at least $100,000 spend over the prior year, more than 1,900 clients spending $1 million or more and roughly 250 customers spending $10 million or more. In the first nine months of 2026, five customers accounted for about a quarter of its revenue.
"I think it's really easy to lose sight of how early it is, and to see a business like Anthropic doing this well this early on in the journey is incredibly impressive," Erica Brescia, a managing director at Redpoint Ventures, told CNBC's "The Exchange" on Monday.
"There's still an astronomical opportunity ahead for Anthropic," said Brescia, whose firm is an investor in the company. "And I think this is a really exciting opportunity for retail investors to get a piece and to get to participate in this transformation outside of buying chip stocks."
For many investors focused on business fundamentals, Anthropic is a tough sell.
The company lost $80.7 billion in the first six months of this year, after reporting a loss of $12.9 billion over the same stretch in 2025, though most of that was due to the change in fair value of convertible notes and derivative liabilities. Meanwhile, its compute commitments are soaring while competition is picking up from lower-cost open-weight models.
David Trainer, CEO of financial research firm New Constructs, describes Anthropic's upcoming offering as "a huge Wall Street grift."
Trainer has built a reputation on Wall Street as a notorious bear on IPOs. His firm published a report last month arguing that Anthropic is the "most ridiculous IPO of 2026" and that it will be an "unprecedented test of investor gullibility."
Having reviewed the prospectus, Trainer told CNBC in an interview on Tuesday that his position hasn't changed. He said AI will be an "amazing tool for society," but not so much for businesses, and he's worried about Anthropic's competitive position, its "opaque" insider selling schedule, and the fact that its commitments and liabilities dwarf its cash.
"All these people have stakes in Anthropic. They want to be able to cash out," Trainer said. "Having lived through the tech bubble, having lived through the great financial crisis, having been on Wall Street during those times, having seen how the sausage is made, it's like a slow-moving train wreck for me."
Roger McNamee, an early investor in both Google and Facebook, told CNBC on Tuesday that the Anthropic IPO is a "very dangerous thing for investors," adding that the industry still has a lot to prove.
"We should view this S-1 as speculative fiction because it's a great story, it's a really great story, but it's hundreds of pages, and those hundreds of pages are not there to clarify the story," McNamee, co-founder of Elevation Partners, told CNBC's "Squawk on the Street." "And based on the feedback I get on [X], a lot of people who disagree with me are sitting there going, 'I love this story,' and I go, 'Look, God bless, it's your money.'"
Anthropic's public filing brings it one step closer to its IPO, but there are still hurdles to clear to reach the starting line.
On its roadshow, the company will have to woo prospective investors, gauge demand, set the IPO offer price and allocate shares. Once all of that is complete, it will finally list on the Nasdaq under the ticker symbol "ANT."
Investors will be watching each development and detail closely.
Gil Luria, managing director at D.A. Davidson, said he wants to know a lot more before the company's debut. That includes the path to long-term profitability and, importantly, the valuation. He said in an interview on Tuesday that if the IPO is priced correctly, it will likely do "very well."
"We can talk about the risks, but as we sit here right now, and based on what we know right now, Anthropic is still the main AI company, and it's a pure play," Luria said. "So the IPO should go well because investors will want exposure to the pure play."
WATCH: Tenacity’s Ben Narasin: Anthropic could price IPO near $2 trillion`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/27/-anthropic-ipo-investors-growth-losses-s-1.html",
    publishedAt: "2026-10-27T17:26:34+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "jetblue-has-been-losing-money-for-years-28ef13bd",
    title: "JetBlue has been losing money for years. It just charted a path to profitability.",
    titleJa: "JetBlue has been losing money for years. It just charted a path to profitability.",
    summaryJa: "JetBlue’s stock rises more than 20% as a new profit target helps calm fears about the airline’s viability.",
    bodyOriginal: `JetBlue’s stock rises more than 20% as a new profit target helps calm fears about the airline’s viability.`,
    bodyJa: `JetBlue’s stock rises more than 20% as a new profit target helps calm fears about the airline’s viability.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/jetblue-has-been-losing-money-for-years-it-just-charted-a-path-to-profitability-03be75c8?mod=mw_rss_topstories",
    publishedAt: "2026-10-27T16:52:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-70579743",
    readTime: 2,
  },
  {
    id: "when-will-anthropic-go-public-here-s-wha-e52d0648",
    title: "When will Anthropic go public? Here’s what to know about the IPO timeline.",
    titleJa: "When will Anthropic go public? Here’s what to know about the IPO timeline.",
    summaryJa: "By filing IPO paperwork on Monday, Anthropic can conduct its investor roadshow the week of Nov. 9 and would be eligible to go public as soon as the following week.",
    bodyOriginal: `By filing IPO paperwork on Monday, Anthropic can conduct its investor roadshow the week of Nov. 9 and would be eligible to go public as soon as the following week.`,
    bodyJa: `By filing IPO paperwork on Monday, Anthropic can conduct its investor roadshow the week of Nov. 9 and would be eligible to go public as soon as the following week.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/when-will-anthropic-go-public-heres-what-to-know-about-the-ipo-timeline-431eca78?mod=mw_rss_topstories",
    publishedAt: "2026-10-27T16:38:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-23297277",
    readTime: 2,
  },
  {
    id: "bond-investors-are-starting-to-say-anyth-e43f1e2b",
    title: "Bond investors are starting to say ‘anything but tech.’ What that means for the AI boom.",
    titleJa: "Bond investors are starting to say ‘anything but tech.’ What that means for the AI boom.",
    summaryJa: "AI financing has been harder and more expensive to come by as the capital-spending boom comes under more scrutiny.",
    bodyOriginal: `AI financing has been harder and more expensive to come by as the capital-spending boom comes under more scrutiny.`,
    bodyJa: `AI financing has been harder and more expensive to come by as the capital-spending boom comes under more scrutiny.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/ai-debt-trouble-could-help-feds-warsh-get-his-way-with-fewer-rate-hikes-b3dc4525?mod=mw_rss_topstories",
    publishedAt: "2026-10-27T16:24:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-89277748",
    readTime: 2,
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
