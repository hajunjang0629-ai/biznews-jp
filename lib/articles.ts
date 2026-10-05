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
    id: "treasury-yields-rise-to-start-the-week-t-593ce19e",
    title: "Treasury yields rise to start the week; traders look ahead to Fed minutes",
    titleJa: "Treasury yields rise to start the week; traders look ahead to Fed minutes",
    summaryJa: "U.S. Treasury yields are coming off a sharp selloff as investors look ahead to the Federal Reserve's last meeting minutes.",
    bodyOriginal: `U.S. Treasury yields rebounded on Monday following their sharp sell-off last week as investors digested new economic data.
The benchmark 10-year Treasury yield was last up about 2 basis points to 5.296%. The yield on the 30-year Treasury bond was also 3 basis points higher at 5.661%. The yield on the 2-year Treasury fell 1 basis point to 4.814%.
One basis point is equal to 0.01%, and yields and prices move in opposite directions.
The moves came as traders took note of new data on growth in the services sector released Monday by the Institute for Supply Management. The ISM report showed that the Purchasing Manager's Index — a measure of economic activity in the services sector — grew 54.9% in September, or roughly in line with expectations and slightly below its rate of growth for the prior month.
Now, investors are looking ahead to the minutes from the central bank's September meeting, which are slated to come out on Wednesday.
Investors have grappled with a bond market selloff over the past few weeks, while a lackluster monthly jobs report on Friday helped to bring yields down and alleviated concerns about another rate hike.
Traders are now pricing in a nearly 82% chance of the Fed keeping rates unchanged at its next meeting, according to the CME Group's FedWatch Tool.`,
    bodyJa: `U.S. Treasury yields rebounded on Monday following their sharp sell-off last week as investors digested new economic data.
The benchmark 10-year Treasury yield was last up about 2 basis points to 5.296%. The yield on the 30-year Treasury bond was also 3 basis points higher at 5.661%. The yield on the 2-year Treasury fell 1 basis point to 4.814%.
One basis point is equal to 0.01%, and yields and prices move in opposite directions.
The moves came as traders took note of new data on growth in the services sector released Monday by the Institute for Supply Management. The ISM report showed that the Purchasing Manager's Index — a measure of economic activity in the services sector — grew 54.9% in September, or roughly in line with expectations and slightly below its rate of growth for the prior month.
Now, investors are looking ahead to the minutes from the central bank's September meeting, which are slated to come out on Wednesday.
Investors have grappled with a bond market selloff over the past few weeks, while a lackluster monthly jobs report on Friday helped to bring yields down and alleviated concerns about another rate hike.
Traders are now pricing in a nearly 82% chance of the Fed keeping rates unchanged at its next meeting, according to the CME Group's FedWatch Tool.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/05/treasury-yields-bonds-fed-rates.html",
    publishedAt: "2026-10-05T14:24:44+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "cerebras-stock-pops-9-after-sam-altman-c-116d3805",
    title: "Cerebras stock pops 9% after Sam Altman calls the chipmaker a 'close partner'",
    titleJa: "Cerebras stock pops 9% after Sam Altman calls the chipmaker a 'close partner'",
    summaryJa: "Cerebras stock climbed in premarket trading after OpenAI's CEO Sam Altman reassured investors that the firm is a \"close partner.\"",
    bodyOriginal: `Cerebras stock climbed 9% on Monday, rebounding from last week's decline, after OpenAI's CEO Sam Altman reassured investors that the firm is a "close partner."
The AI hardware firm, which made its debut on the Nasdaq in a monster IPO in May, saw its stock plummet 20% to its lowest price last week after it was revealed that OpenAI would power its "Ultrafast" mode for GPT-6.1 Sol with Nvidia's graphics processing units instead of Cerebras' chips.
"There is some speculation about our partnership with Cerebras," Altman said in a post on X on Friday. "Cerebras is a close partner, and we have a deep engagement pushing on the frontiers of speed."
The company's stock rose almost 3% in extended trading on Friday following Altman's comments.
Cerebras has seen its market cap plunge since its May debut and is now valued at about $43 billion, down from $95 billion.
Cerebras, a Nvidia competitor, sells large computer chips and AI systems that are designed to run AI models faster than traditional GPUs. It claimed that its flagship product, the Wafer Scale Engine 3, runs faster than Nvidia's GPU.
Cerebras signed a $10 billion deal with OpenAI in January to supply it with 750 megawatts of computing power through 2028.
Citi analysts said that their view of Cerebras' revenue outlook between 2026 and 2028 remains "unchanged."
"We believe frontier-AI labs' latest models would initially roll out on internal chips before running on third-party or Cerebras cloud, so it's too early to read much into it," they said in a note on Friday morning.
"We believe the stock's ability to outperform is increasingly tied to evidence that gross margins are stabilizing. Any further delay in the gross margin trough would likely weigh on sentiment, particularly given Cerebras' premium valuation," they added.`,
    bodyJa: `Cerebras stock climbed 9% on Monday, rebounding from last week's decline, after OpenAI's CEO Sam Altman reassured investors that the firm is a "close partner."
The AI hardware firm, which made its debut on the Nasdaq in a monster IPO in May, saw its stock plummet 20% to its lowest price last week after it was revealed that OpenAI would power its "Ultrafast" mode for GPT-6.1 Sol with Nvidia's graphics processing units instead of Cerebras' chips.
"There is some speculation about our partnership with Cerebras," Altman said in a post on X on Friday. "Cerebras is a close partner, and we have a deep engagement pushing on the frontiers of speed."
The company's stock rose almost 3% in extended trading on Friday following Altman's comments.
Cerebras has seen its market cap plunge since its May debut and is now valued at about $43 billion, down from $95 billion.
Cerebras, a Nvidia competitor, sells large computer chips and AI systems that are designed to run AI models faster than traditional GPUs. It claimed that its flagship product, the Wafer Scale Engine 3, runs faster than Nvidia's GPU.
Cerebras signed a $10 billion deal with OpenAI in January to supply it with 750 megawatts of computing power through 2028.
Citi analysts said that their view of Cerebras' revenue outlook between 2026 and 2028 remains "unchanged."
"We believe frontier-AI labs' latest models would initially roll out on internal chips before running on third-party or Cerebras cloud, so it's too early to read much into it," they said in a note on Friday morning.
"We believe the stock's ability to outperform is increasingly tied to evidence that gross margins are stabilizing. Any further delay in the gross margin trough would likely weigh on sentiment, particularly given Cerebras' premium valuation," they added.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/05/cerebras-cbrs-sam-altman-close-partner.html",
    publishedAt: "2026-10-05T13:37:15+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "china-shuts-hundreds-of-banks-as-beijing-ce66bd33",
    title: "China shuts hundreds of banks as Beijing moves to shore up its financial system",
    titleJa: "China shuts hundreds of banks as Beijing moves to shore up its financial system",
    summaryJa: "Beijing shuttered 670 mainly rural banks last year in a bid to create fewer, larger and better-capitalized lenders.",
    bodyOriginal: `China is accelerating its consolidation of smaller, mostly rural banks in a bid to shore up its financial system, amid ongoing concerns over an economic slowdown in the country.
Beijing's policy-led consolidation saw a record 670 lenders closed in 2025 — about one-quarter of banks in the country — as authorities ramped up mergers and dissolutions to create fewer, larger and better-capitalized institutions, according to Fitch Ratings analysis.
Small and rural commercial banks "remain the weakest part of the system" in China, Fitch said in a report, which flagged their "poor asset quality, low capitalization and governance shortcomings," especially in less-developed regions of the country.
The rating agency said the return on assets among rural banks fell to 0.45% in the first half, down from 0.56% in 2021. Meanwhile, non-performing loans among such lenders rose to 2.8% in the same period, ahead of the sector average of 1.5%, with greater exposure to smaller companies, property developers and local government funding vehicles.
The consolidation push is aimed at boosting oversight, curbing regulatory arbitrage and improving transparency, Fitch said, noting that stress at smaller lenders is unlikely to lead to system-wide contagion, pointing to their largely localized operations and limited interbank exposure.
The measures could "ultimately reshape competitive dynamics among smaller lenders, although their structural weaknesses may persist in the near term," the rating agency added.
The move comes amid ongoing signs of strain in the world's second-largest economy.
China's GDP grew 4.3% in the second quarter, its slowest pace since 2022, while industrial profits came in at 4.2% annually in August, their weakest pace this year.`,
    bodyJa: `China is accelerating its consolidation of smaller, mostly rural banks in a bid to shore up its financial system, amid ongoing concerns over an economic slowdown in the country.
Beijing's policy-led consolidation saw a record 670 lenders closed in 2025 — about one-quarter of banks in the country — as authorities ramped up mergers and dissolutions to create fewer, larger and better-capitalized institutions, according to Fitch Ratings analysis.
Small and rural commercial banks "remain the weakest part of the system" in China, Fitch said in a report, which flagged their "poor asset quality, low capitalization and governance shortcomings," especially in less-developed regions of the country.
The rating agency said the return on assets among rural banks fell to 0.45% in the first half, down from 0.56% in 2021. Meanwhile, non-performing loans among such lenders rose to 2.8% in the same period, ahead of the sector average of 1.5%, with greater exposure to smaller companies, property developers and local government funding vehicles.
The consolidation push is aimed at boosting oversight, curbing regulatory arbitrage and improving transparency, Fitch said, noting that stress at smaller lenders is unlikely to lead to system-wide contagion, pointing to their largely localized operations and limited interbank exposure.
The measures could "ultimately reshape competitive dynamics among smaller lenders, although their structural weaknesses may persist in the near term," the rating agency added.
The move comes amid ongoing signs of strain in the world's second-largest economy.
China's GDP grew 4.3% in the second quarter, its slowest pace since 2022, while industrial profits came in at 4.2% annually in August, their weakest pace this year.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/05/china-banks-consolidation-economy.html",
    publishedAt: "2026-10-05T13:23:46+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 4,
  },
  {
    id: "gm-says-hybrid-vehicles-are-coming-we-re-0b868bc3",
    title: "GM says hybrid vehicles are coming: 'We're not tone deaf to our customers'",
    titleJa: "GM says hybrid vehicles are coming: 'We're not tone deaf to our customers'",
    summaryJa: "DETROIT — General Motors plans to introduce hybrid models into its U.S. lineup as sales of the vehicles continue to grow amid inflated gas prices and a pullback in all-electric cars.Mike Anderson, GM's vice president of propulsion engineering, reconfirmed the automaker's hybrid plans, but declined to discuss timing for such vehicles, which had previously been expected as soon as next year.",
    bodyOriginal: `DETROIT — General Motors plans to introduce hybrid models into its U.S. lineup as sales of the vehicles continue to grow amid inflated gas prices and a pullback in all-electric cars.
Mike Anderson, GM's vice president of propulsion engineering, reconfirmed the automaker's hybrid plans, but declined to discuss timing for such vehicles, which had previously been expected as soon as next year.
"It's fair to say that [hybrids are] part of the plan," Anderson, a 35-year GM veteran, told CNBC during an interview. "We're not tone deaf to our customers. We know what they want and we want to give that to them as quickly as we can."
GM has largely been absent from the hybrid market this decade, instead using its resources to go "all-in" on all-electric vehicles. But amid lackluster EV demand, industry deregulation and increased hybrid popularity, Anderson said the company needs to meet customer demand wherever it may be.
"Our long-term vision is an all-electric future. That's our goal," Anderson said. "That's the end state, but it's going to be a journey that involves technology diversity."
GM CEO Mary Barra in January said the automaker was still studying plug-in hybrid electric vehicles, or PHEVs, for its U.S. lineup as well as traditional hybrids but remained critical of the technologies. She also told Bloomberg later that month that a "handful" of such models were coming but did not give a timeline.
In mid-2024, GM announced plans to introduce PHEVs by 2027. At that time, GM was under pressure to meet stricter federal tailpipe emissions standards that have since been lowered or eliminated by the Trump administration.
AutoForecast Solutions, an automotive data and consulting firm, expects GM to begin offering PHEVs in late 2027 to early 2028 with a 70-mile EV range "throughout its portfolio," according to Casey Selecman, director of powertrain forecasts for the company.
"GM has several PHEVs planned throughout the portfolio from the Equinox to the Silverado but has been very cautious in rolling them out due to fears of customer technology preference changes that have burned them in the past," he said.
Anderson declined to discuss potential products or timing for GM's first new hybrid model.
"You can see, without me saying what our future plans are, where the customers are clamoring for these things and really, really going for them," he said. "We want to meet them where they want things."
Sales of hybrid models in the U.S. have jumped amid dimming EV demand, inflated gas prices and more offerings in the market, which GM has been missing out on.
Cox Automotive reports hybrid vehicle sales from the second quarter of this year increased 23% from a year earlier to represent a record 16.3% of U.S. sales from April through June. That compares with roughly 5.8% of sales for EVs, Cox said.
The automotive industry has more powertrain and "propulsion" options than ever before. Here's a breakdown:
- Internal combustion engine (ICE): A "traditional" vehicle with an engine that's fueled with gasoline or diesel.
- Mild-hybrid electric vehicle (MHEV): An ICE vehicle that functions largely like a nonhybrid vehicle but may include minimal electrified features such as a small battery, regenerative braking or electric motor.
- Hybrid electric vehicle (HEV): Think of the Toyota Prius, a vehicle that has a hybrid powertrain system combined with an engine.
- Plug-in hybrid electric vehicle (PHEV): These vehicles feature an internal combustion engine combined with a hybrid system, including a larger battery than traditional hybrid vehicles as well as a plug to recharge the vehicle's battery. They typically allow drivers to travel a certain number of miles using the battery before the engine is needed to power the car or truck.
- Battery-electric vehicle (BEV): These all-electric vehicles do not feature an internal combustion engine. Instead, they contain an electric motor that's powered by a large battery. They need to be recharged using an electrical outlet and charging port or charging station.
- Fuel cell electric vehicle (FCEV): Hydrogen fuel cell electric vehicles and equipment operate much like BEVs but are powered by electricity generated from hydrogen and oxygen instead of pure batteries, which commonly include lithium. They're filled up with a nozzle, similar to traditional gas and diesel vehicles.
- Extended-range electric vehicles (EREV): These are an emerging technology that largely function as a PHEV, however after the battery runs out of energy to power the vehicle, an engine works as a generator to exclusively power electric motors. The vehicle still drives like an EV instead of having the engine directly power the vehicle's motion.
There are a growing number of hybrid variants being introduced by automakers but, in general, those vehicles combine a traditional gas-powered engine with electric motors and a battery to offer better fuel economy and, in many cases, better performance.
The fastest-growing segments for hybrids in the U.S. are compact crossover/SUV and mid-size vehicles, according to Cox.
"Hybrid vehicles continue to be the clearest growth story in the electrified market," Stephanie Valdez Streaty, Cox director of industry insights, said during a presentation last week.
There are currently a few types of hybrids available in the U.S. Traditional hybrids, like a Toyota Prius, feature many electrified engine technologies, while PHEVs have a designated all-electric range before using an engine to power the vehicle.
Then there are extended-range electric vehicles, or "series hybrids," that drive like an EV but have an engine that essentially operates like a generator to power electric motors to propel a vehicle.
The combination of two powertrains adds additional complexity and costs, which has been an argument GM has made against hybrids, but it's something many consumers appear willing to pay for as hybrid sales continue to rise.
GM currently offers only one hybrid, a model of its Chevrolet Corvette. The Detroit automaker's last true push into hybrids was the Chevrolet Volt plug-in, which was discontinued in 2019.
GM's crosstown rivals, Ford Motor and Chrysler parent Stellantis, have leaned on suppliers to get hybrid vehicles to market more quickly.
Anderson said GM's strategy "will be a mix" of internal and external technologies based on cost, segment and product.
"We're deliberate because, usually for strategic reasons, we need to control our own destiny. We need to control our own timing," he said. "Or, if it's commodity, go get it. Go get the best price you can."`,
    bodyJa: `DETROIT — General Motors plans to introduce hybrid models into its U.S. lineup as sales of the vehicles continue to grow amid inflated gas prices and a pullback in all-electric cars.
Mike Anderson, GM's vice president of propulsion engineering, reconfirmed the automaker's hybrid plans, but declined to discuss timing for such vehicles, which had previously been expected as soon as next year.
"It's fair to say that [hybrids are] part of the plan," Anderson, a 35-year GM veteran, told CNBC during an interview. "We're not tone deaf to our customers. We know what they want and we want to give that to them as quickly as we can."
GM has largely been absent from the hybrid market this decade, instead using its resources to go "all-in" on all-electric vehicles. But amid lackluster EV demand, industry deregulation and increased hybrid popularity, Anderson said the company needs to meet customer demand wherever it may be.
"Our long-term vision is an all-electric future. That's our goal," Anderson said. "That's the end state, but it's going to be a journey that involves technology diversity."
GM CEO Mary Barra in January said the automaker was still studying plug-in hybrid electric vehicles, or PHEVs, for its U.S. lineup as well as traditional hybrids but remained critical of the technologies. She also told Bloomberg later that month that a "handful" of such models were coming but did not give a timeline.
In mid-2024, GM announced plans to introduce PHEVs by 2027. At that time, GM was under pressure to meet stricter federal tailpipe emissions standards that have since been lowered or eliminated by the Trump administration.
AutoForecast Solutions, an automotive data and consulting firm, expects GM to begin offering PHEVs in late 2027 to early 2028 with a 70-mile EV range "throughout its portfolio," according to Casey Selecman, director of powertrain forecasts for the company.
"GM has several PHEVs planned throughout the portfolio from the Equinox to the Silverado but has been very cautious in rolling them out due to fears of customer technology preference changes that have burned them in the past," he said.
Anderson declined to discuss potential products or timing for GM's first new hybrid model.
"You can see, without me saying what our future plans are, where the customers are clamoring for these things and really, really going for them," he said. "We want to meet them where they want things."
Sales of hybrid models in the U.S. have jumped amid dimming EV demand, inflated gas prices and more offerings in the market, which GM has been missing out on.
Cox Automotive reports hybrid vehicle sales from the second quarter of this year increased 23% from a year earlier to represent a record 16.3% of U.S. sales from April through June. That compares with roughly 5.8% of sales for EVs, Cox said.
The automotive industry has more powertrain and "propulsion" options than ever before. Here's a breakdown:
- Internal combustion engine (ICE): A "traditional" vehicle with an engine that's fueled with gasoline or diesel.
- Mild-hybrid electric vehicle (MHEV): An ICE vehicle that functions largely like a nonhybrid vehicle but may include minimal electrified features such as a small battery, regenerative braking or electric motor.
- Hybrid electric vehicle (HEV): Think of the Toyota Prius, a vehicle that has a hybrid powertrain system combined with an engine.
- Plug-in hybrid electric vehicle (PHEV): These vehicles feature an internal combustion engine combined with a hybrid system, including a larger battery than traditional hybrid vehicles as well as a plug to recharge the vehicle's battery. They typically allow drivers to travel a certain number of miles using the battery before the engine is needed to power the car or truck.
- Battery-electric vehicle (BEV): These all-electric vehicles do not feature an internal combustion engine. Instead, they contain an electric motor that's powered by a large battery. They need to be recharged using an electrical outlet and charging port or charging station.
- Fuel cell electric vehicle (FCEV): Hydrogen fuel cell electric vehicles and equipment operate much like BEVs but are powered by electricity generated from hydrogen and oxygen instead of pure batteries, which commonly include lithium. They're filled up with a nozzle, similar to traditional gas and diesel vehicles.
- Extended-range electric vehicles (EREV): These are an emerging technology that largely function as a PHEV, however after the battery runs out of energy to power the vehicle, an engine works as a generator to exclusively power electric motors. The vehicle still drives like an EV instead of having the engine directly power the vehicle's motion.
There are a growing number of hybrid variants being introduced by automakers but, in general, those vehicles combine a traditional gas-powered engine with electric motors and a battery to offer better fuel economy and, in many cases, better performance.
The fastest-growing segments for hybrids in the U.S. are compact crossover/SUV and mid-size vehicles, according to Cox.
"Hybrid vehicles continue to be the clearest growth story in the electrified market," Stephanie Valdez Streaty, Cox director of industry insights, said during a presentation last week.
There are currently a few types of hybrids available in the U.S. Traditional hybrids, like a Toyota Prius, feature many electrified engine technologies, while PHEVs have a designated all-electric range before using an engine to power the vehicle.
Then there are extended-range electric vehicles, or "series hybrids," that drive like an EV but have an engine that essentially operates like a generator to power electric motors to propel a vehicle.
The combination of two powertrains adds additional complexity and costs, which has been an argument GM has made against hybrids, but it's something many consumers appear willing to pay for as hybrid sales continue to rise.
GM currently offers only one hybrid, a model of its Chevrolet Corvette. The Detroit automaker's last true push into hybrids was the Chevrolet Volt plug-in, which was discontinued in 2019.
GM's crosstown rivals, Ford Motor and Chrysler parent Stellantis, have leaned on suppliers to get hybrid vehicles to market more quickly.
Anderson said GM's strategy "will be a mix" of internal and external technologies based on cost, segment and product.
"We're deliberate because, usually for strategic reasons, we need to control our own destiny. We need to control our own timing," he said. "Or, if it's commodity, go get it. Go get the best price you can."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/05/gm-hybrid-vehicles.html",
    publishedAt: "2026-10-05T12:30:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "shadow-chancellor-to-unveil-tory-plans-t-171c8317",
    title: "Shadow chancellor to unveil Tory plans to cut taxes and regulations",
    titleJa: "Shadow chancellor to unveil Tory plans to cut taxes and regulations",
    summaryJa: "Shadow ministers will unveil a series of policies on day two of the Conservative Party conference in Birmingham.",
    bodyOriginal: `Shadow chancellor to unveil Tory plans to cut taxes and regulations
- Published
Conservative shadow chancellor Andrew Griffith is to outline his plans for the UK economy, including hopes to cut taxes, red tape and house-building costs.
Griffith and his colleagues will also use day two of the party's conference in Birmingham to explain how they would want to reduce food costs, support Heathrow Airport expansion, and abolish Natural England and the Environment Agency.
Another prospective policy is replacing agreements designed to compel developers to fund community projects and services in areas they want to build.
Griffith will describe his approach as the "most ambitious deregulation project in a generation". Reform UK suggested the Tories were "copying our policies".
Griffith's speech comes after Conservative Party leader Kemi Badenoch published a 100-page document, external explaining her guiding principles and how her party would act should it return to government by winning the next general election.
Following their historic defeat in the 2024 general election, the Conservatives have been trying to rebuild and convince voters that they can be trusted again.
The Tories have faced repeated attacks from their opponents for their record in government, including on the economy, between 2010 and 2024.
Speaking to BBC Breakfast, Griffith said infrastructure development was key to his plan, throwing his support behind the expansion of Heathrow airport.
"Someone, sooner or later, has to get serious about getting this country growing again," he said.
"It's a national embarrassment that we can't get that third runway built - we've said we will get full square behind that and the government should do that right now.
"Whether it's reservoirs or reactors we need a system of getting infrastructure in this country that really works."
Pressed on whether he would keep the pensions triple lock, which Prime Minister Andy Burnham has proposed changing, he said: "We are going to keep it."
In 2021, then-backbencher Griffith wrote an article saying that the state pension triple lock was "unfair" as pensioners could "gain from the misfortune of others".
Senior Conservatives including former chancellor Jeremy Hunt and shadow foreign secretary Tom Tugendhat have individually suggested the current triple lock is unsustainable.
Griffith will accuse Burnham of wanting to pursue a "socialist fever dream of the 1970s", adding the Tories want to deliver "cheaper homes, lower taxes, and less red tape".
Labour Party chairwoman Bridget Phillipson said: "The Tories had 14 years in government to grow our economy and help people get on the housing ladder, but they completely failed at every turn."
Chancellor John Healey last week said all promises the government made would be "built on the rock of fiscal discipline" and the Budget on 28 October would "give families and businesses a bit of breathing space".
During a series of speeches on Monday, Conservative shadow ministers will continue to make their case and provide more details of their proposals.
This will include ditching environmental and energy efficiency regulations, including the future homes standard.
The Tories believe their changes could cut the cost of delivering a new home by up to £50,000, which in turn they expect could save money for buyers.
A single levy for developers would be implemented in place of section 106 agreements and the Community Infrastructure Levy, which fund projects in the community when building plans are progressed.
The Conservatives argue this new charge would remove delays and improve how the funds are spent to the benefit of residents.
The party has been critical of the roles of Natural England and the Environment Agency in relation to house building and flood prevention work respectively, and wants to abolish both. Their functions would be looked after by the Department for the Environment, Food and Rural Affairs (Defra).
Prospect general secretary Mike Clancy, whose union represents members in Natural England and the Environment Agency, said: "Conservative budget cuts have left these regulators struggling to perform their vital functions with 'lack of resources' the most common reason for planning delays.
"The solution is to restore their funding to adequate levels, not scrap vital safeguards."
'Fantasy-land' pledges
The Extended Packaging Responsibility (EPR) scheme, which requires firms to cover the cost of collecting, recycling and disposing of packaging it produces, would also be scrapped by the Conservatives.
The party believes this would help lift a "burden" from businesses and in turn could cut the cost of the weekly shop.
On Heathrow, Griffith is expected to say the next Conservative government would do "whatever it takes to end the delays and boost capacity by backing the third runway".
Plans for expansion were scrapped by the Tory-led coalition government in 2010.
Former Chancellor Rachel Reeves championed the runway to boost the economy after Labour won power, although Burnham has refused to say whether he backs the project since becoming prime minister.
Burnham has described it as "principally... a matter for London and Londoners".
Liberal Democrat deputy leader Daisy Cooper said the Conservatives have "cemented their position as a pointless anti-growth, anti-business party" by rejecting closer ties with Europe.
She added: "No-one can take anything the Conservatives say on the economy seriously given their litany of fantasy-land financial pledges."
Reform UK economy spokesman Robert Jenrick accused the Conservatives of "once again copying our policies".
He added the Tories were unable to match Reform's pledge to raise the tax-free personal allowance to £15,000.
Green Party MP Ellie Chowns said scrapping rules that "secure affordable homes and vital community infrastructure is not a plan for growth".
She added: "It is a gift to developers, leaving communities to pick up the bill for new housing while handing ordinary people higher costs and fewer protections."
Get in touch
Do you have any views, comments or questions about this story?
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    bodyJa: `Shadow chancellor to unveil Tory plans to cut taxes and regulations
- Published
Conservative shadow chancellor Andrew Griffith is to outline his plans for the UK economy, including hopes to cut taxes, red tape and house-building costs.
Griffith and his colleagues will also use day two of the party's conference in Birmingham to explain how they would want to reduce food costs, support Heathrow Airport expansion, and abolish Natural England and the Environment Agency.
Another prospective policy is replacing agreements designed to compel developers to fund community projects and services in areas they want to build.
Griffith will describe his approach as the "most ambitious deregulation project in a generation". Reform UK suggested the Tories were "copying our policies".
Griffith's speech comes after Conservative Party leader Kemi Badenoch published a 100-page document, external explaining her guiding principles and how her party would act should it return to government by winning the next general election.
Following their historic defeat in the 2024 general election, the Conservatives have been trying to rebuild and convince voters that they can be trusted again.
The Tories have faced repeated attacks from their opponents for their record in government, including on the economy, between 2010 and 2024.
Speaking to BBC Breakfast, Griffith said infrastructure development was key to his plan, throwing his support behind the expansion of Heathrow airport.
"Someone, sooner or later, has to get serious about getting this country growing again," he said.
"It's a national embarrassment that we can't get that third runway built - we've said we will get full square behind that and the government should do that right now.
"Whether it's reservoirs or reactors we need a system of getting infrastructure in this country that really works."
Pressed on whether he would keep the pensions triple lock, which Prime Minister Andy Burnham has proposed changing, he said: "We are going to keep it."
In 2021, then-backbencher Griffith wrote an article saying that the state pension triple lock was "unfair" as pensioners could "gain from the misfortune of others".
Senior Conservatives including former chancellor Jeremy Hunt and shadow foreign secretary Tom Tugendhat have individually suggested the current triple lock is unsustainable.
Griffith will accuse Burnham of wanting to pursue a "socialist fever dream of the 1970s", adding the Tories want to deliver "cheaper homes, lower taxes, and less red tape".
Labour Party chairwoman Bridget Phillipson said: "The Tories had 14 years in government to grow our economy and help people get on the housing ladder, but they completely failed at every turn."
Chancellor John Healey last week said all promises the government made would be "built on the rock of fiscal discipline" and the Budget on 28 October would "give families and businesses a bit of breathing space".
During a series of speeches on Monday, Conservative shadow ministers will continue to make their case and provide more details of their proposals.
This will include ditching environmental and energy efficiency regulations, including the future homes standard.
The Tories believe their changes could cut the cost of delivering a new home by up to £50,000, which in turn they expect could save money for buyers.
A single levy for developers would be implemented in place of section 106 agreements and the Community Infrastructure Levy, which fund projects in the community when building plans are progressed.
The Conservatives argue this new charge would remove delays and improve how the funds are spent to the benefit of residents.
The party has been critical of the roles of Natural England and the Environment Agency in relation to house building and flood prevention work respectively, and wants to abolish both. Their functions would be looked after by the Department for the Environment, Food and Rural Affairs (Defra).
Prospect general secretary Mike Clancy, whose union represents members in Natural England and the Environment Agency, said: "Conservative budget cuts have left these regulators struggling to perform their vital functions with 'lack of resources' the most common reason for planning delays.
"The solution is to restore their funding to adequate levels, not scrap vital safeguards."
'Fantasy-land' pledges
The Extended Packaging Responsibility (EPR) scheme, which requires firms to cover the cost of collecting, recycling and disposing of packaging it produces, would also be scrapped by the Conservatives.
The party believes this would help lift a "burden" from businesses and in turn could cut the cost of the weekly shop.
On Heathrow, Griffith is expected to say the next Conservative government would do "whatever it takes to end the delays and boost capacity by backing the third runway".
Plans for expansion were scrapped by the Tory-led coalition government in 2010.
Former Chancellor Rachel Reeves championed the runway to boost the economy after Labour won power, although Burnham has refused to say whether he backs the project since becoming prime minister.
Burnham has described it as "principally... a matter for London and Londoners".
Liberal Democrat deputy leader Daisy Cooper said the Conservatives have "cemented their position as a pointless anti-growth, anti-business party" by rejecting closer ties with Europe.
She added: "No-one can take anything the Conservatives say on the economy seriously given their litany of fantasy-land financial pledges."
Reform UK economy spokesman Robert Jenrick accused the Conservatives of "once again copying our policies".
He added the Tories were unable to match Reform's pledge to raise the tax-free personal allowance to £15,000.
Green Party MP Ellie Chowns said scrapping rules that "secure affordable homes and vital community infrastructure is not a plan for growth".
She added: "It is a gift to developers, leaving communities to pick up the bill for new housing while handing ordinary people higher costs and fewer protections."
Get in touch
Do you have any views, comments or questions about this story?
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqj9kje82jm1o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-05T10:44:51+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/feac/live/6d3064e0-b272-11f1-b67f-2b40fa83cfed.png",
    readTime: 10,
  },
  {
    id: "bt-agrees-rescue-deal-to-buy-broadband-o-d3600315",
    title: "BT agrees rescue deal to buy broadband operator TalkTalk",
    titleJa: "BT agrees rescue deal to buy broadband operator TalkTalk",
    summaryJa: "The takeover still needs to be approved by the regulator, but would give certainty to TalkTalk's millions of customers",
    bodyOriginal: `BT agrees rescue deal to buy broadband operator TalkTalk
- Published
The UK's biggest broadband provider, BT, has agreed to buy rival operator TalkTalk to save the company from collapse.
The takeover would end of months of speculation over the future of TalkTalk and mean services for its millions of customers will continue as normal.
BT boss Alison Kirkby said it provided "a safety net" for TalkTalk customers. The administrator, Alvarez & Marsal, said it also provided certainty for TalkTalk's 900 staff based in Salford, Greater Manchester.
However, Virgin Media called it a "stitch-up" which allows BT to "tighten its grip" over the market. The government has given itself the power to have the final say on the deal, citing its importance to vital public services.
TalkTalk has 1.5 million retail customers and one million wholesale customers across the UK.
BT's Kirkby told the BBC's Today programme: "Two and a half million customers, including vulnerable households, and key emergency services might have lost their services if Talk Talk had failed, which it was on track to do.
"So BT stepped in as we were the only viable option to take the business forward."
Ernest Doku from comparison website Uswitch said the deal means "nothing changes today".
"Your broadband and landline carry on as normal, and there is nothing you need to do right now," he added.
However, he said that BT should explain "quickly and plainly what this means for contracts, prices and service in the future, so nobody is left guessing".
The regulator, Ofcom, says broadband customers should have the right to leave a contract without an exit fee, external if a new owner puts the price up beyond what was in the contract.
TalkTalk began as a challenger to BT in the broadband market. It was listed on the London Stock Exchange, but was taken over by private equity in 2021.
Since then, the firm has built up debt while losing customers, leaving it unable to pay some of those it owes money to.
Despite this, TalkTalk remained the fourth biggest broadband provider in the UK, with 6.6% of customers, during the March to June period of this year, according to figures from analytic firm Opensignal.
BT has 32.5% of customers, Sky 19.9%, and Virgin Media 19.1%.
Rivals who were beaten to the deal by BT have said it will be bad for consumers.
Tom O'Hagan, a former TalkTalk executive who was leading a takeover bid for the firm, told the BBC he was worried about "reduced choice and potentially an increase in price for consumers and for businesses" because of the BT deal.
He added that he was particularly concerned about competition in the wholesale market, where TalkTalk's subsidiary PXC was BT's main rival.
Virgin Media, which has also reportedly tried to buy TalkTalk in the past, said the BT takeover has "all the characteristics of a stitch-up masked as a rescue deal in the public interest".
It added that the purchase means BT can "roll its tanks over competition and further tighten its grip on the market. The logic simply doesn't add up."
The Competition Markets Authority (CMA) will need to approve the takeover, which would give BT greater power over the broadband market.
Tom Smith, a competition lawyer and former legal director at the CMA, said the regulator will be balancing that concern with other considerations.
"When the CMA looks at it, it will look at what would have happened if the deal wasn't going through," he told the BBC.
"If TalkTalk would have exited the market, for example, then really any deal is better than TalkTalk exiting, but then there might be alternative bidders as well that would have been less anticompetitive."
However, the Department of Culture, Media, and Sport (DCMS) has given itself the power to make the final decision on the deal in the name of the public interest once the CMA has made its report.
DCMS has given the CMA until 19 October to deliver its verdict.
Culture Secretary Lisa Nandy said: "Phone and broadband services are vital national infrastructure.
"If TalkTalk services fail, there is a genuine risk to life and public services – including to hospitals, schools and emergency care. These are unprecedented circumstances that require action now."
BT has said it welcomed the intervention and would "work constructively with the government and the CMA during their review".
Judith Mackenzie, a partner at investment manager Downing, told the BBC that broadband was "not a regulated industry, unlike electricity and water, but it's also very important to business users and ourselves, consumers".
"It's almost like a commodity now, broadband," she added.
BT has said it will cost the firm £400m to buy TalkTalk out of administration.
This includes the purchase price, fees, TalkTalk's expected £60m loss for this year, and BT effectively writing off the £100m TalkTalk owes BT's Openreach business.
TalkTalk has £1.5bn of debt and made a £100m loss last year.`,
    bodyJa: `BT agrees rescue deal to buy broadband operator TalkTalk
- Published
The UK's biggest broadband provider, BT, has agreed to buy rival operator TalkTalk to save the company from collapse.
The takeover would end of months of speculation over the future of TalkTalk and mean services for its millions of customers will continue as normal.
BT boss Alison Kirkby said it provided "a safety net" for TalkTalk customers. The administrator, Alvarez & Marsal, said it also provided certainty for TalkTalk's 900 staff based in Salford, Greater Manchester.
However, Virgin Media called it a "stitch-up" which allows BT to "tighten its grip" over the market. The government has given itself the power to have the final say on the deal, citing its importance to vital public services.
TalkTalk has 1.5 million retail customers and one million wholesale customers across the UK.
BT's Kirkby told the BBC's Today programme: "Two and a half million customers, including vulnerable households, and key emergency services might have lost their services if Talk Talk had failed, which it was on track to do.
"So BT stepped in as we were the only viable option to take the business forward."
Ernest Doku from comparison website Uswitch said the deal means "nothing changes today".
"Your broadband and landline carry on as normal, and there is nothing you need to do right now," he added.
However, he said that BT should explain "quickly and plainly what this means for contracts, prices and service in the future, so nobody is left guessing".
The regulator, Ofcom, says broadband customers should have the right to leave a contract without an exit fee, external if a new owner puts the price up beyond what was in the contract.
TalkTalk began as a challenger to BT in the broadband market. It was listed on the London Stock Exchange, but was taken over by private equity in 2021.
Since then, the firm has built up debt while losing customers, leaving it unable to pay some of those it owes money to.
Despite this, TalkTalk remained the fourth biggest broadband provider in the UK, with 6.6% of customers, during the March to June period of this year, according to figures from analytic firm Opensignal.
BT has 32.5% of customers, Sky 19.9%, and Virgin Media 19.1%.
Rivals who were beaten to the deal by BT have said it will be bad for consumers.
Tom O'Hagan, a former TalkTalk executive who was leading a takeover bid for the firm, told the BBC he was worried about "reduced choice and potentially an increase in price for consumers and for businesses" because of the BT deal.
He added that he was particularly concerned about competition in the wholesale market, where TalkTalk's subsidiary PXC was BT's main rival.
Virgin Media, which has also reportedly tried to buy TalkTalk in the past, said the BT takeover has "all the characteristics of a stitch-up masked as a rescue deal in the public interest".
It added that the purchase means BT can "roll its tanks over competition and further tighten its grip on the market. The logic simply doesn't add up."
The Competition Markets Authority (CMA) will need to approve the takeover, which would give BT greater power over the broadband market.
Tom Smith, a competition lawyer and former legal director at the CMA, said the regulator will be balancing that concern with other considerations.
"When the CMA looks at it, it will look at what would have happened if the deal wasn't going through," he told the BBC.
"If TalkTalk would have exited the market, for example, then really any deal is better than TalkTalk exiting, but then there might be alternative bidders as well that would have been less anticompetitive."
However, the Department of Culture, Media, and Sport (DCMS) has given itself the power to make the final decision on the deal in the name of the public interest once the CMA has made its report.
DCMS has given the CMA until 19 October to deliver its verdict.
Culture Secretary Lisa Nandy said: "Phone and broadband services are vital national infrastructure.
"If TalkTalk services fail, there is a genuine risk to life and public services – including to hospitals, schools and emergency care. These are unprecedented circumstances that require action now."
BT has said it welcomed the intervention and would "work constructively with the government and the CMA during their review".
Judith Mackenzie, a partner at investment manager Downing, told the BBC that broadband was "not a regulated industry, unlike electricity and water, but it's also very important to business users and ourselves, consumers".
"It's almost like a commodity now, broadband," she added.
BT has said it will cost the firm £400m to buy TalkTalk out of administration.
This includes the purchase price, fees, TalkTalk's expected £60m loss for this year, and BT effectively writing off the £100m TalkTalk owes BT's Openreach business.
TalkTalk has £1.5bn of debt and made a £100m loss last year.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvze4g06526ro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-05T10:25:36+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bb77/live/0d52c410-c0a9-11f1-a64c-550be9e3c66b.jpg",
    readTime: 10,
  },
  {
    id: "average-five-year-mortgage-rate-hits-6-f-894cdc7f",
    title: "Average five-year mortgage rate hits 6% for first time in three years",
    titleJa: "Average five-year mortgage rate hits 6% for first time in three years",
    summaryJa: "The cost of a new fixed-rate mortgage has been rising in recent weeks as lenders face higher costs.",
    bodyOriginal: `Average five-year mortgage rate hits 6% for first time in three years
- Published
The average interest rate on a new five-year fixed mortgage deal has hit 6% for the first time in three years, figures show.
The cost of home loans has been rising in recent weeks, as lenders face higher costs amid international concern over rising prices, interest rates, and government borrowing costs.
It means home buyers and anyone renewing a fixed deal have seen about 1,500 mortgage deals priced below 5% vanish since the start of September, according to the financial information service Moneyfacts.
It described the situation as "brutal" for borrowers, with the average rate on five-year deals now at 6%, and at 5.98% on two-year fixed mortgages.
For borrowers, the interest rate on a fixed mortgage does not change until it expires, usually after two or five years, and a new one is chosen to replace it. The vast majority of homeowners and buyers have this kind of mortgage.
Since the Iran war began, global economic uncertainty has been pushing up the cost of deals.
Moneyfacts said that the biggest High Street lenders had made repeated fixed rate increases during September. Barclays increased selected fixed rates on four occasions, while HSBC, Lloyds Bank, Nationwide, NatWest, Santander and TSB each made three rounds of increases.
It meant that the average rate on a new five-year deal was at its highest since September 2023. On two-year deals, the average rate is at its highest since December 2023.
"Average fixed mortgage rates rising back to three-year highs will be disastrous news for borrowers," said Rachel Springall, finance expert at Moneyfacts.
"Borrowers who were hoping mortgage rates would stabilise will be disappointed."
She said that those coming to the end of a fixed deal would be "wise to seek advice and compare deals carefully".
Some lenders could allow people to lock in a rate three months before their current deal ends, while others could allow six months, she said.
Springall said rate rises were "inevitable" because lenders' wholesale funding costs had climbed as a result of rising gilt yields.
Interest rates - known as the yield - on government bonds have been going up, meaning it costs the government more to borrow over the long term.
The knock-on impact of this on the mortgage market has meant that the number of fixed-rate deals priced below 5% has plunged by 99%, from 1,494 since the start of September 2026 to nine now.
In contrast, the number of sub-5% variable rate mortgages has remained broadly stable, Springall said, leading some borrowers to chose deals that track the Bank of England's base rate.
Cost-of-living blow
Millions of mortgage-holders are coming to the end of their current deals in the next two years.
Just over five million homeowners should expect their monthly mortgage repayments to increase by the end of 2028, according to Bank of England forecasts.
Some may have expected rates to have fallen this year, owing to improved economic conditions, but the Iran war has upended many of those expectations.
It has also led to wider pressure on the cost of essential bills.
On Friday, drivers saw the average cost of diesel rise above £2 a litre in the UK for the first time, according to the RAC motoring group.
Domestic energy prices also rose by 4% at the start of October, and forecasters have predicted a 16% increase when regulator Ofgem sets its next price cap for January.
The government is under pressure to support those most likely to struggle to pay at the Budget later this month.
We bought our £242,000 home without a deposit - here's how
- Published18 September
One million more UK homeowners set to face higher mortgages
- Published7 July
Get in touch
How are you coping with mortgage repayments? Are you trying to get on the housing ladder?`,
    bodyJa: `Average five-year mortgage rate hits 6% for first time in three years
- Published
The average interest rate on a new five-year fixed mortgage deal has hit 6% for the first time in three years, figures show.
The cost of home loans has been rising in recent weeks, as lenders face higher costs amid international concern over rising prices, interest rates, and government borrowing costs.
It means home buyers and anyone renewing a fixed deal have seen about 1,500 mortgage deals priced below 5% vanish since the start of September, according to the financial information service Moneyfacts.
It described the situation as "brutal" for borrowers, with the average rate on five-year deals now at 6%, and at 5.98% on two-year fixed mortgages.
For borrowers, the interest rate on a fixed mortgage does not change until it expires, usually after two or five years, and a new one is chosen to replace it. The vast majority of homeowners and buyers have this kind of mortgage.
Since the Iran war began, global economic uncertainty has been pushing up the cost of deals.
Moneyfacts said that the biggest High Street lenders had made repeated fixed rate increases during September. Barclays increased selected fixed rates on four occasions, while HSBC, Lloyds Bank, Nationwide, NatWest, Santander and TSB each made three rounds of increases.
It meant that the average rate on a new five-year deal was at its highest since September 2023. On two-year deals, the average rate is at its highest since December 2023.
"Average fixed mortgage rates rising back to three-year highs will be disastrous news for borrowers," said Rachel Springall, finance expert at Moneyfacts.
"Borrowers who were hoping mortgage rates would stabilise will be disappointed."
She said that those coming to the end of a fixed deal would be "wise to seek advice and compare deals carefully".
Some lenders could allow people to lock in a rate three months before their current deal ends, while others could allow six months, she said.
Springall said rate rises were "inevitable" because lenders' wholesale funding costs had climbed as a result of rising gilt yields.
Interest rates - known as the yield - on government bonds have been going up, meaning it costs the government more to borrow over the long term.
The knock-on impact of this on the mortgage market has meant that the number of fixed-rate deals priced below 5% has plunged by 99%, from 1,494 since the start of September 2026 to nine now.
In contrast, the number of sub-5% variable rate mortgages has remained broadly stable, Springall said, leading some borrowers to chose deals that track the Bank of England's base rate.
Cost-of-living blow
Millions of mortgage-holders are coming to the end of their current deals in the next two years.
Just over five million homeowners should expect their monthly mortgage repayments to increase by the end of 2028, according to Bank of England forecasts.
Some may have expected rates to have fallen this year, owing to improved economic conditions, but the Iran war has upended many of those expectations.
It has also led to wider pressure on the cost of essential bills.
On Friday, drivers saw the average cost of diesel rise above £2 a litre in the UK for the first time, according to the RAC motoring group.
Domestic energy prices also rose by 4% at the start of October, and forecasters have predicted a 16% increase when regulator Ofgem sets its next price cap for January.
The government is under pressure to support those most likely to struggle to pay at the Budget later this month.
We bought our £242,000 home without a deposit - here's how
- Published18 September
One million more UK homeowners set to face higher mortgages
- Published7 July
Get in touch
How are you coping with mortgage repayments? Are you trying to get on the housing ladder?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8r4yxpry5e9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-05T09:54:57+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bb45/live/ddd7ea70-c0b3-11f1-babe-4199b0e7ccea.jpg",
    readTime: 10,
  },
  {
    id: "the-2029-tipping-point-western-populatio-b754090e",
    title: "The 2029 tipping point: Western populations are about to start shrinking, piling pressure on public finances",
    titleJa: "The 2029 tipping point: Western populations are about to start shrinking, piling pressure on public finances",
    summaryJa: "Moody's predicts that the world's aging populations will have fundamental impacts on the global economy and lead to difficult policy decisions.",
    bodyOriginal: `As Western populations age, fewer workers and higher costs will strain public finances, credit rating agency Moody's has warned.
Europe is at the sharp end of the demographic shift. The European Union's population is projected to peak as soon as 2029, "after which a sustained long-term decline will begin," according to the European Commission.
The U.S. Census Bureau does not expect the American population to peak until 2080 under its main projection, or until 2043 under its low-immigration scenario. Excluding immigration impact, the population decline has already started.
But Moody's says the fiscal pressures from aging emerge long before populations actually start shrinking.
Today, G7 economies have about three working-age people for every person over 65. That ratio is expected to fall to around two by 2050, putting further pressure on growth and public finances, including healthcare systems, according to Moody's.
Aging populations affect economies through slower economic growth, greater pressure on public finances from pension and care costs, changing consumer demand, and shifts in real interest rates and sovereign yields, Olivier Chemla, vice president of credit strategy and standards at Moody's, told CNBC's "Squawk Box Europe" on Friday.
In a report published last week, Moody's forecasts that the world's aging populations will have fundamental impacts on the global economy and lead to difficult policy decisions.
While population growth has long been a tailwind for growth and creditworthiness, falling fertility rates and unprecedented speed of changing age structures are now changing that picture, Moody's writes.
"Fewer workers will limit productive capacity, while fewer households and consumers will weaken demand. As a result, countries will have to rely more on productivity to sustain growth," the report states.
The AI impact
AI and increased productivity can only partially offset the long-term challenge of an aging workforce, Chemla said.
"This is a partial mitigant because you can certainly replace and enhance the supply side of the economy in factories and in services, but at the same time, robots do not consume – at least not yet – and so on the demand side, you will still be having that gap, which will slow growth," he added.
And it's not only Europe and the U.S., but emerging economies are aging rapidly, too. China's share of people aged 65 and over has doubled from 7% to 14% over the past two decades, with Brazil, Thailand and Turkiye on similar trajectories.
These countries will face the costs of aging at much lower income levels than the advanced economies that aged before them, the report says, noting that in Europe, the same shift took several decades.`,
    bodyJa: `As Western populations age, fewer workers and higher costs will strain public finances, credit rating agency Moody's has warned.
Europe is at the sharp end of the demographic shift. The European Union's population is projected to peak as soon as 2029, "after which a sustained long-term decline will begin," according to the European Commission.
The U.S. Census Bureau does not expect the American population to peak until 2080 under its main projection, or until 2043 under its low-immigration scenario. Excluding immigration impact, the population decline has already started.
But Moody's says the fiscal pressures from aging emerge long before populations actually start shrinking.
Today, G7 economies have about three working-age people for every person over 65. That ratio is expected to fall to around two by 2050, putting further pressure on growth and public finances, including healthcare systems, according to Moody's.
Aging populations affect economies through slower economic growth, greater pressure on public finances from pension and care costs, changing consumer demand, and shifts in real interest rates and sovereign yields, Olivier Chemla, vice president of credit strategy and standards at Moody's, told CNBC's "Squawk Box Europe" on Friday.
In a report published last week, Moody's forecasts that the world's aging populations will have fundamental impacts on the global economy and lead to difficult policy decisions.
While population growth has long been a tailwind for growth and creditworthiness, falling fertility rates and unprecedented speed of changing age structures are now changing that picture, Moody's writes.
"Fewer workers will limit productive capacity, while fewer households and consumers will weaken demand. As a result, countries will have to rely more on productivity to sustain growth," the report states.
The AI impact
AI and increased productivity can only partially offset the long-term challenge of an aging workforce, Chemla said.
"This is a partial mitigant because you can certainly replace and enhance the supply side of the economy in factories and in services, but at the same time, robots do not consume – at least not yet – and so on the demand side, you will still be having that gap, which will slow growth," he added.
And it's not only Europe and the U.S., but emerging economies are aging rapidly, too. China's share of people aged 65 and over has doubled from 7% to 14% over the past two decades, with Brazil, Thailand and Turkiye on similar trajectories.
These countries will face the costs of aging at much lower income levels than the advanced economies that aged before them, the report says, noting that in Europe, the same shift took several decades.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/05/aging-population-moodys-public-finances.html",
    publishedAt: "2026-10-05T05:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "trump-unveils-super-intelligence-force-t-c28bf1ed",
    title: "Trump unveils 'Super Intelligence Force' to oversee AI policy",
    titleJa: "Trump unveils 'Super Intelligence Force' to oversee AI policy",
    summaryJa: "The president named his national intelligence chief as the taskforce's head as worries over AI grow.",
    bodyOriginal: `Trump unveils 'Super Intelligence Force' to oversee AI policy
- Published
US President Donald Trump says he has created a new taskforce focused on artificial intelligence, which will be led by Director of National Intelligence Jay Clayton.
The "Super Intelligence Force" will work to ensure that the US continues to lead in the technology's development and will coordinate the government's engagement with the public, Trump posted on Sunday.
It comes after the president signed an executive order on 29 September to rename AI as Super Intelligence, after previously saying the word artificial made it sound "fake".
Trump also said last week that he would set up a board to oversee AI safety after top tech bosses signed what he described as a "morally binding" pact.
"The Super Intelligence Force will coordinate the Federal Government's engagement with Consumers, Public Interest Groups, Religious Organizations, Critical Infrastructure Providers, and Super Intelligence Companies," Trump wrote.
Federal Trade Commission Chair Andrew Ferguson and Undersecretary of Defense for Research, Engineering Emil Michael and Director of the Office of Personnel Management Scott Kupor will also be part of the taskforce.
It will report directly to the president and White House Chief of Staff Susie Wiles.
The taskforce's chief, Clayton, took office as the US national intelligence director in August after Trump's original choice, Bill Pulte, was rejected by lawmakers.
On AI, Clayton has previously said: "When something's both an opportunity and a threat, you better get your arms around it."
Clayton previously served as US attorney for the Southern District of New York, overseeing several prominent cases, including the drug trafficking case against former Venezuelan President Nicholas Maduro.
The announcement of the taskforce follows growing pressure from prominent figures in the industry, including executives of OpenAI and Anthropic, to tighten regulation of the technology.
In an interview published on 4 October, OpenAI chief executive Sam Altman said the benefits of AI justify accepting some of its risks and argued that the technology should remain accessible to the public.
"The world should accept some bad things happening for the benefits of this technology and people having the agency," Altman told Politico's technology-focused newsletter Decoded.
Trump has dismissed calls for stronger oversight and largely left it to AI companies to regulate themselves.
The pact signed on 29 September includes the signatures of executives from top tech firms like OpenAI, Anthropic, SpaceX and Google.
On the same day, the president signed an executive order instructing US government departments and agencies to start using the terms "SI" and "Super Intelligence" and should no longer acknowledge the use of the term artificial intelligence.
SI will take the place of AI in "official correspondence", websites, reports and other forms of communication, the order said.
Some experts have questioned the logic of the rebranding, arguing that the use of "super intelligence" could cause confusion as it refers to more advanced systems.
Some top tech leaders have already started to use the new name, including multi-billionaire Elon Musk, who said on social media on Sunday that he will rename his firm's AI platform SpaceXAI as SpaceXSI.
"SpaceX is a super intelligence company", Musk wrote.
The Tesla boss has recently been brought back into the US government to be part of a project to study the future of war.
Musk previously served in the Trump administration, heading the so-called Department of Government Efficiency, before his tenure ended in a public spat with Trump.
- Published5 days ago
- Published5 days ago`,
    bodyJa: `Trump unveils 'Super Intelligence Force' to oversee AI policy
- Published
US President Donald Trump says he has created a new taskforce focused on artificial intelligence, which will be led by Director of National Intelligence Jay Clayton.
The "Super Intelligence Force" will work to ensure that the US continues to lead in the technology's development and will coordinate the government's engagement with the public, Trump posted on Sunday.
It comes after the president signed an executive order on 29 September to rename AI as Super Intelligence, after previously saying the word artificial made it sound "fake".
Trump also said last week that he would set up a board to oversee AI safety after top tech bosses signed what he described as a "morally binding" pact.
"The Super Intelligence Force will coordinate the Federal Government's engagement with Consumers, Public Interest Groups, Religious Organizations, Critical Infrastructure Providers, and Super Intelligence Companies," Trump wrote.
Federal Trade Commission Chair Andrew Ferguson and Undersecretary of Defense for Research, Engineering Emil Michael and Director of the Office of Personnel Management Scott Kupor will also be part of the taskforce.
It will report directly to the president and White House Chief of Staff Susie Wiles.
The taskforce's chief, Clayton, took office as the US national intelligence director in August after Trump's original choice, Bill Pulte, was rejected by lawmakers.
On AI, Clayton has previously said: "When something's both an opportunity and a threat, you better get your arms around it."
Clayton previously served as US attorney for the Southern District of New York, overseeing several prominent cases, including the drug trafficking case against former Venezuelan President Nicholas Maduro.
The announcement of the taskforce follows growing pressure from prominent figures in the industry, including executives of OpenAI and Anthropic, to tighten regulation of the technology.
In an interview published on 4 October, OpenAI chief executive Sam Altman said the benefits of AI justify accepting some of its risks and argued that the technology should remain accessible to the public.
"The world should accept some bad things happening for the benefits of this technology and people having the agency," Altman told Politico's technology-focused newsletter Decoded.
Trump has dismissed calls for stronger oversight and largely left it to AI companies to regulate themselves.
The pact signed on 29 September includes the signatures of executives from top tech firms like OpenAI, Anthropic, SpaceX and Google.
On the same day, the president signed an executive order instructing US government departments and agencies to start using the terms "SI" and "Super Intelligence" and should no longer acknowledge the use of the term artificial intelligence.
SI will take the place of AI in "official correspondence", websites, reports and other forms of communication, the order said.
Some experts have questioned the logic of the rebranding, arguing that the use of "super intelligence" could cause confusion as it refers to more advanced systems.
Some top tech leaders have already started to use the new name, including multi-billionaire Elon Musk, who said on social media on Sunday that he will rename his firm's AI platform SpaceXAI as SpaceXSI.
"SpaceX is a super intelligence company", Musk wrote.
The Tesla boss has recently been brought back into the US government to be part of a project to study the future of war.
Musk previously served in the Trump administration, heading the so-called Department of Government Efficiency, before his tenure ended in a public spat with Trump.
- Published5 days ago
- Published5 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqj6jenp26zyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-05T03:37:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9a97/live/e8568220-c056-11f1-ba75-170165fdb734.jpg",
    readTime: 9,
  },
  {
    id: "surging-treasury-yields-don-t-signal-a-u-99f2e788",
    title: "Surging Treasury yields don’t signal a U.S. 'fiscal apocalypse' — yet",
    titleJa: "Surging Treasury yields don’t signal a U.S. 'fiscal apocalypse' — yet",
    summaryJa: "Treasury yields above 5% are raising fears that higher borrowing costs could fuel a debt spiral.",
    bodyOriginal: `U.S. government borrowing costs have risen to their highest levels in decades, stoking concerns that the country's growing debt burden could eventually trigger a fiscal crisis. Will it?
The benchmark 10-year Treasury yield is now firmly above 5%, while the government's net interest costs estimated at about $1.05 trillion in the first 11 months of fiscal year 2026.
Experts are voicing concerns over the vicious cycle of rising debt and higher yields. Maya MacGuineas, president of the Committee for a Responsible Federal Budget, a U.S. policy think tank, has warned that higher borrowing costs risk becoming self-reinforcing as mounting interest expenses force the government to borrow still more.
"The real threat is the debt spiral. If interest begets debt, and debt begets interest, eventually debt will spin out of control. A fiscal crisis, once unthinkable, is now a distinct possibility," MacGuineas said in a statement last month after the 10-year Treasury yield crossed 5%.
The nightmare scenario is relatively straightforward: investors demand higher yields to lend to a heavily indebted government; those higher rates push up Washington's interest bill; the government has to borrow more to service its debt obligations; and investors demand even higher yields in response.
Some bond market experts, however, say the U.S. is some distance from a fiscal breaking point, and that the latest surge in yields may have as much to do with a surprisingly resilient economy as fears over government debt.
"A fiscal apocalypse is not upon us just yet," TD Securities strategists Gennadiy Goldberg and Molly Brooks said in a recent note.
The bank estimates U.S. interest expenses in fiscal year 2026 to be around $1.1 trillion and continue rising if rates remain elevated. Its projections show financing costs reaching $1.4 trillion in fiscal 2027, $1.5 trillion in 2028 and $1.6 trillion in 2029, if yields stay around current levels.
An important buffer is that Washington does not have to refinance its entire debt pile at today's higher rates immediately, the investment bank's analysts said.
The weighted-average maturity of U.S. government debt is about 5.9 years, meaning higher borrowing costs feed through gradually as existing bonds mature and new debt is issued. The average coupon on Treasury securities excluding bills is still just 3.1%, according to TD Securities.
Perhaps more importantly, the average interest rate on U.S. debt, at about 3.4%, remains below the rate at which the economy is growing in nominal terms. Nominal U.S. GDP grew at an annualized rate of 8.5% in the second quarter, according to the latest Bureau of Economic Analysis estimate. That helps keep the debt burden manageable even as deficits remain large, TD said.
Matthew Reese, head of global bond strategies at L&G Asset Management, also said fears of an imminent U.S. fiscal crisis were "exaggerated."
"There are valid concerns that the U.S., along with many other developed economies, will suffer from the negative feedback loop caused by higher yield costs increasing their fiscal burden as they refinance their debt and fund their fiscal deficit," he told CNBC in an e-mail.
"However, the US still retains much of the 'exorbitant privilege' of the US dollar and its role as the most liquid and still highly rated economy. Therefore, we are some way away from a fiscal crisis."
Not a crisis — yet
The negative feedback loop becomes more dangerous when nominal economic growth falls to low levels, causing debt relative to the size of the economy to rise persistently, Reese said.
Still, high debt alone does not necessarily trigger a crisis.
"It is important to note that countries such as Japan have coped with significantly higher debt levels than the U.S., with very low nominal growth, without suffering a fiscal crisis," Reese said.
Federal debt held by the public is projected to stand at about 101% of GDP in fiscal 2026, according to the Congressional Budget Office.
While that trajectory is enough to keep investors concerned, TD Securities does not see a fiscal crisis as imminent.
And government finances may not even be the main reason Treasury yields have risen so sharply.
TD pointed to stronger economic growth, expectations for Federal Reserve rate hikes, higher oil prices, corporate bond issuance and repositioning by fast-money investors alongside fiscal concerns, as factors driving yields higher.
Ian Lyngen, head of U.S. rates strategy at BMO Capital Markets, also pointed to the resilience of the U.S. economy as an important driver of higher Treasury yields.
"All else being equal, investors are content with the underlying performance of the real economy and share the Fed's inflation angst," Lyngen wrote. He said the latest jobs data was likely to "confirm the resilience of labor market conditions in the face of sticky inflation and elevated borrowing costs
Lyngen added that the rise in longer-term yields has "largely been a real rates story," with investors pointing to stronger actual and expected economic growth, among other factors, to explain the move.
In BMO's survey, just 1% of respondents said the labor market would be the first area to show clear signs of stress from rising real rates. Housing topped the list at 42%, followed by stocks at 26% and corporate credit at 21%.
The picture could change, however, if higher rates finally begin to inflict significant damage on the economy or financial markets. Lyngen said the "only durable constraint on even higher bond yields would be indisputable evidence that either the economy or risk assets are buckling under the pressure of elevated borrowing costs."`,
    bodyJa: `U.S. government borrowing costs have risen to their highest levels in decades, stoking concerns that the country's growing debt burden could eventually trigger a fiscal crisis. Will it?
The benchmark 10-year Treasury yield is now firmly above 5%, while the government's net interest costs estimated at about $1.05 trillion in the first 11 months of fiscal year 2026.
Experts are voicing concerns over the vicious cycle of rising debt and higher yields. Maya MacGuineas, president of the Committee for a Responsible Federal Budget, a U.S. policy think tank, has warned that higher borrowing costs risk becoming self-reinforcing as mounting interest expenses force the government to borrow still more.
"The real threat is the debt spiral. If interest begets debt, and debt begets interest, eventually debt will spin out of control. A fiscal crisis, once unthinkable, is now a distinct possibility," MacGuineas said in a statement last month after the 10-year Treasury yield crossed 5%.
The nightmare scenario is relatively straightforward: investors demand higher yields to lend to a heavily indebted government; those higher rates push up Washington's interest bill; the government has to borrow more to service its debt obligations; and investors demand even higher yields in response.
Some bond market experts, however, say the U.S. is some distance from a fiscal breaking point, and that the latest surge in yields may have as much to do with a surprisingly resilient economy as fears over government debt.
"A fiscal apocalypse is not upon us just yet," TD Securities strategists Gennadiy Goldberg and Molly Brooks said in a recent note.
The bank estimates U.S. interest expenses in fiscal year 2026 to be around $1.1 trillion and continue rising if rates remain elevated. Its projections show financing costs reaching $1.4 trillion in fiscal 2027, $1.5 trillion in 2028 and $1.6 trillion in 2029, if yields stay around current levels.
An important buffer is that Washington does not have to refinance its entire debt pile at today's higher rates immediately, the investment bank's analysts said.
The weighted-average maturity of U.S. government debt is about 5.9 years, meaning higher borrowing costs feed through gradually as existing bonds mature and new debt is issued. The average coupon on Treasury securities excluding bills is still just 3.1%, according to TD Securities.
Perhaps more importantly, the average interest rate on U.S. debt, at about 3.4%, remains below the rate at which the economy is growing in nominal terms. Nominal U.S. GDP grew at an annualized rate of 8.5% in the second quarter, according to the latest Bureau of Economic Analysis estimate. That helps keep the debt burden manageable even as deficits remain large, TD said.
Matthew Reese, head of global bond strategies at L&G Asset Management, also said fears of an imminent U.S. fiscal crisis were "exaggerated."
"There are valid concerns that the U.S., along with many other developed economies, will suffer from the negative feedback loop caused by higher yield costs increasing their fiscal burden as they refinance their debt and fund their fiscal deficit," he told CNBC in an e-mail.
"However, the US still retains much of the 'exorbitant privilege' of the US dollar and its role as the most liquid and still highly rated economy. Therefore, we are some way away from a fiscal crisis."
Not a crisis — yet
The negative feedback loop becomes more dangerous when nominal economic growth falls to low levels, causing debt relative to the size of the economy to rise persistently, Reese said.
Still, high debt alone does not necessarily trigger a crisis.
"It is important to note that countries such as Japan have coped with significantly higher debt levels than the U.S., with very low nominal growth, without suffering a fiscal crisis," Reese said.
Federal debt held by the public is projected to stand at about 101% of GDP in fiscal 2026, according to the Congressional Budget Office.
While that trajectory is enough to keep investors concerned, TD Securities does not see a fiscal crisis as imminent.
And government finances may not even be the main reason Treasury yields have risen so sharply.
TD pointed to stronger economic growth, expectations for Federal Reserve rate hikes, higher oil prices, corporate bond issuance and repositioning by fast-money investors alongside fiscal concerns, as factors driving yields higher.
Ian Lyngen, head of U.S. rates strategy at BMO Capital Markets, also pointed to the resilience of the U.S. economy as an important driver of higher Treasury yields.
"All else being equal, investors are content with the underlying performance of the real economy and share the Fed's inflation angst," Lyngen wrote. He said the latest jobs data was likely to "confirm the resilience of labor market conditions in the face of sticky inflation and elevated borrowing costs
Lyngen added that the rise in longer-term yields has "largely been a real rates story," with investors pointing to stronger actual and expected economic growth, among other factors, to explain the move.
In BMO's survey, just 1% of respondents said the labor market would be the first area to show clear signs of stress from rising real rates. Housing topped the list at 42%, followed by stocks at 26% and corporate credit at 21%.
The picture could change, however, if higher rates finally begin to inflict significant damage on the economy or financial markets. Lyngen said the "only durable constraint on even higher bond yields would be indisputable evidence that either the economy or risk assets are buckling under the pressure of elevated borrowing costs."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/05/treasury-yields-fiscal-concerns-not-crisis-yet.html",
    publishedAt: "2026-10-05T02:24:07+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "how-india-became-dangerously-addicted-to-e1d74043",
    title: "How India became dangerously addicted to Chinese imports",
    titleJa: "How India became dangerously addicted to Chinese imports",
    summaryJa: "India’s toy shops provide an unlikely barometer by which to measure its economic relationship with China.",
    bodyOriginal: `How India became dangerously addicted to Chinese imports
- Published
Take a walk into an Indian toy shop and as well as picking up a new favourite plaything for a child, you might just get an insight into how the nation is battling for a better economic relationship with its all-powerful neighbour China.
Six years ago, in an attempt to push local manufacturing and keep substandard toys out of its market, India raised tariffs on imported toys from 20% to 60% and eventually to 70%.
Retailers were up in arms and said that domestic firms could never match the foreign-made stuff. But the combination of higher customs duties and quality control standards worked.
Indian imports of toys fell by a third from nearly $300m (£227m) in 2020 to $100m this year, while exports rose from around $129m to $200m in the same period. Moreover, the country was able to drastically reduce its dependence on China, which held a 70% share of the local toy market.
The sector stands out as a rare exception in India's otherwise unsuccessful attempts to rebalance an increasingly lopsided trading relationship with its larger neighbour, which some experts say, is now among the most asymmetric in the world.
Even as diplomatic ties between the two countries completely broke down following the Galwan Valley clashes in 2020 and Delhi announced a slew of anti-dumping duties and a ban on Chinese apps such as Tik Tok, its trade deficit with Beijing has only ballooned - from $44bn in 2020 to an eye-popping $112bn this year.
"India's economic dependence on China continued to deepen while political, security, and investment ties were at their lowest point," Kevin Zongzhe Li, a Washington-based Fellow at the Asia Society Policy Institute's Centre for China Analysis, told the BBC.
More worryingly, exports to China remained below pre-pandemic level even as imports doubled in this period.
"China now supplies over 30% of India's industrial imports, and India depends on it for more than 100 critical products. And the imbalance is worsening," says Ajay Srivastava of the Delhi-based Global Trade and Research Initiative (GTRI).
If the rapid pace of imports continues, bilateral deficit could jump to $134bn, giving Beijing even more leverage over Indian industry, according to Srivastava.
On the sidelines of the Brics summit in Delhi in September, amid a deepening thaw between the Asian giants, Prime Minister Narendra Modi and Chinese President Xi Jinping vowed to address, external these "structural trade imbalances and supply chain issues".
But given how deeply entrenched Chinese imports have become to India's industrial economy, this will be a formidable task for Delhi, experts told the BBC.
That's primarily because India depends on China to not merely consume end-products, but increasingly to produce industrial goods.
To be true, India has reduced its reliance on imports of finished goods such as smartphones and solar equipment, and now produces more than a quarter of the world's iPhones.
"Yet, production remains largely assembly-based and depends heavily on imported components, particularly from China," says Srivastava.
It's the same story with industrial machinery, battery inputs, chemicals, solar cells, and manufacturing equipment.
Electrical machinery and electronics alone account for 36% of imports, followed by machinery and mechanical appliances at 21.7%, while organic chemicals and plastics also have a significant share, according to the Observer Research Foundation (ORF) think tank.
"Their interruption would not merely affect consumption; it would disrupt production itself," according to Soumya Bhowmik, a Fellow at ORF's Centre for New Economic Diplomacy, who argues that this reflects India's difficulty in substituting Chinese inputs with local production.
Besides a growing reliance on inputs and raw material, Chinese imports to India are also being propelled by other macroeconomic trends.
China has huge excess capacity in sectors from steel to solar panels and electric vehicles, while its slowing economy cannot absorb the output.
Manufacturers are therefore increasingly turning to overseas markets, selling goods cheaply. China's trade surplus is expected to top $1tn for a second straight year.
A lot of these goods are coming to Indian shores because it is rapidly expanding manufacturing across segments of the economy, but also as "Western markets impose tariffs and other restrictions", says Srivastava.
On the other hand, lack of access to the Chinese market remains a major challenge for Indian companies.
"Indian products face a variety of tariff and non-tariff hurdles in China that make it difficult to scale exports," says Li.
"If normalisation [of ties] continues without a serious push for reciprocal market access, India risks a situation where the political relationship improves but the economic dependency stays the same."
The long term solution to both reducing avoidable imports and improving exports performance will be to strengthen manufacturing, says Srivastava.
But that requires sector-specific industrial policy and stronger fundamentals – affordable power and credit, efficient logistics and stable regulations – areas where India still falls short.
India has also recently softened foreign direct investment rules, which could open the door to Chinese companies wanting to expand Indian investments. But these too will need careful vetting, he adds.
"Investment that merely expands distribution networks or assembles products using Chinese parts could increase imports and deepen dependence. Approvals should therefore prioritise technology transfer, local value addition, domestic component production and exports from India."
More immediately, India could focus on targeting higher exports to China in specific sectors to reduce its trade asymmetry, says Li. Sectors like pharmaceuticals could be a natural fit with China's population aging and healthcare costs rising.
"But narrowing a $112bn deficit won't come from finding niche export sectors alone," he adds.
"The key question is whether Beijing is ready and willing to make concessions on market access as part of the broader normalisation. Alternatively, India will need to find its own leverage to force that conversation."
Follow BBC News India on Instagram, external, YouTube,, external X, external and Facebook, external.`,
    bodyJa: `How India became dangerously addicted to Chinese imports
- Published
Take a walk into an Indian toy shop and as well as picking up a new favourite plaything for a child, you might just get an insight into how the nation is battling for a better economic relationship with its all-powerful neighbour China.
Six years ago, in an attempt to push local manufacturing and keep substandard toys out of its market, India raised tariffs on imported toys from 20% to 60% and eventually to 70%.
Retailers were up in arms and said that domestic firms could never match the foreign-made stuff. But the combination of higher customs duties and quality control standards worked.
Indian imports of toys fell by a third from nearly $300m (£227m) in 2020 to $100m this year, while exports rose from around $129m to $200m in the same period. Moreover, the country was able to drastically reduce its dependence on China, which held a 70% share of the local toy market.
The sector stands out as a rare exception in India's otherwise unsuccessful attempts to rebalance an increasingly lopsided trading relationship with its larger neighbour, which some experts say, is now among the most asymmetric in the world.
Even as diplomatic ties between the two countries completely broke down following the Galwan Valley clashes in 2020 and Delhi announced a slew of anti-dumping duties and a ban on Chinese apps such as Tik Tok, its trade deficit with Beijing has only ballooned - from $44bn in 2020 to an eye-popping $112bn this year.
"India's economic dependence on China continued to deepen while political, security, and investment ties were at their lowest point," Kevin Zongzhe Li, a Washington-based Fellow at the Asia Society Policy Institute's Centre for China Analysis, told the BBC.
More worryingly, exports to China remained below pre-pandemic level even as imports doubled in this period.
"China now supplies over 30% of India's industrial imports, and India depends on it for more than 100 critical products. And the imbalance is worsening," says Ajay Srivastava of the Delhi-based Global Trade and Research Initiative (GTRI).
If the rapid pace of imports continues, bilateral deficit could jump to $134bn, giving Beijing even more leverage over Indian industry, according to Srivastava.
On the sidelines of the Brics summit in Delhi in September, amid a deepening thaw between the Asian giants, Prime Minister Narendra Modi and Chinese President Xi Jinping vowed to address, external these "structural trade imbalances and supply chain issues".
But given how deeply entrenched Chinese imports have become to India's industrial economy, this will be a formidable task for Delhi, experts told the BBC.
That's primarily because India depends on China to not merely consume end-products, but increasingly to produce industrial goods.
To be true, India has reduced its reliance on imports of finished goods such as smartphones and solar equipment, and now produces more than a quarter of the world's iPhones.
"Yet, production remains largely assembly-based and depends heavily on imported components, particularly from China," says Srivastava.
It's the same story with industrial machinery, battery inputs, chemicals, solar cells, and manufacturing equipment.
Electrical machinery and electronics alone account for 36% of imports, followed by machinery and mechanical appliances at 21.7%, while organic chemicals and plastics also have a significant share, according to the Observer Research Foundation (ORF) think tank.
"Their interruption would not merely affect consumption; it would disrupt production itself," according to Soumya Bhowmik, a Fellow at ORF's Centre for New Economic Diplomacy, who argues that this reflects India's difficulty in substituting Chinese inputs with local production.
Besides a growing reliance on inputs and raw material, Chinese imports to India are also being propelled by other macroeconomic trends.
China has huge excess capacity in sectors from steel to solar panels and electric vehicles, while its slowing economy cannot absorb the output.
Manufacturers are therefore increasingly turning to overseas markets, selling goods cheaply. China's trade surplus is expected to top $1tn for a second straight year.
A lot of these goods are coming to Indian shores because it is rapidly expanding manufacturing across segments of the economy, but also as "Western markets impose tariffs and other restrictions", says Srivastava.
On the other hand, lack of access to the Chinese market remains a major challenge for Indian companies.
"Indian products face a variety of tariff and non-tariff hurdles in China that make it difficult to scale exports," says Li.
"If normalisation [of ties] continues without a serious push for reciprocal market access, India risks a situation where the political relationship improves but the economic dependency stays the same."
The long term solution to both reducing avoidable imports and improving exports performance will be to strengthen manufacturing, says Srivastava.
But that requires sector-specific industrial policy and stronger fundamentals – affordable power and credit, efficient logistics and stable regulations – areas where India still falls short.
India has also recently softened foreign direct investment rules, which could open the door to Chinese companies wanting to expand Indian investments. But these too will need careful vetting, he adds.
"Investment that merely expands distribution networks or assembles products using Chinese parts could increase imports and deepen dependence. Approvals should therefore prioritise technology transfer, local value addition, domestic component production and exports from India."
More immediately, India could focus on targeting higher exports to China in specific sectors to reduce its trade asymmetry, says Li. Sectors like pharmaceuticals could be a natural fit with China's population aging and healthcare costs rising.
"But narrowing a $112bn deficit won't come from finding niche export sectors alone," he adds.
"The key question is whether Beijing is ready and willing to make concessions on market access as part of the broader normalisation. Alternatively, India will need to find its own leverage to force that conversation."
Follow BBC News India on Instagram, external, YouTube,, external X, external and Facebook, external.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5pve834grpno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-05T01:42:11+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/570e/live/a11df9f0-bc83-11f1-8bd0-b38b5eda40be.jpg",
    readTime: 10,
  },
  {
    id: "trump-tells-south-korea-to-sign-on-to-al-f6f1fafb",
    title: "Trump tells South Korea to sign on to Alaska LNG deal or 'I'll just charge them more'",
    titleJa: "Trump tells South Korea to sign on to Alaska LNG deal or 'I'll just charge them more'",
    summaryJa: "Trump is ramping up pressure on South Korea over Alaska LNG as Seoul remains cautious over investment projects announced by the U.S. president.",
    bodyOriginal: `U.S. President Donald Trump said he "didn't jump the gun" in announcing South Korea's participation in a $50 billion Alaska LNG project, warning Seoul could pay "double" if it does not sign on soon.
His remarks come amid a discrepancy between Washington and Seoul over South Korea's planned energy and infrastructure investments in the U.S., with Trump announcing projects that Seoul has said are not yet finalized.
"If they don't want to do it, that's OK with me. I'll just charge them more," Trump told reporters Friday, according to the White House. "Tell them if they don't sign shortly, I'm going to double it up."
Trump did not specify what would be doubled. South Korean local media, though, raised the possibility that he was referring to higher tariffs on the country.
When asked whether he had prematurely announced South Korea's involvement in the Alaska LNG project, Trump said he "didn't jump the gun."
Trump's remarks come after South Korea said it was still assessing the Alaska LNG project, with any participation dependent on its commercial viability and compliance with domestic legal procedures.
Separately, Trump said on Truth Social Friday that South Korea's investment deal "keeps getting BETTER," announcing an additional $8.4 billion enhanced oil recovery project.
Enhanced oil recovery uses techniques such as carbon dioxide injection to increase the amount of crude oil produced from an oil field.
South Korean local media further reported that the oil recovery project was not included in the agreements reached between Seoul and Washington, citing the country's industry ministry. The ministry was seeking to verify Trump's announcement and had contacted the U.S. through trade channels for clarification, according to the report.`,
    bodyJa: `U.S. President Donald Trump said he "didn't jump the gun" in announcing South Korea's participation in a $50 billion Alaska LNG project, warning Seoul could pay "double" if it does not sign on soon.
His remarks come amid a discrepancy between Washington and Seoul over South Korea's planned energy and infrastructure investments in the U.S., with Trump announcing projects that Seoul has said are not yet finalized.
"If they don't want to do it, that's OK with me. I'll just charge them more," Trump told reporters Friday, according to the White House. "Tell them if they don't sign shortly, I'm going to double it up."
Trump did not specify what would be doubled. South Korean local media, though, raised the possibility that he was referring to higher tariffs on the country.
When asked whether he had prematurely announced South Korea's involvement in the Alaska LNG project, Trump said he "didn't jump the gun."
Trump's remarks come after South Korea said it was still assessing the Alaska LNG project, with any participation dependent on its commercial viability and compliance with domestic legal procedures.
Separately, Trump said on Truth Social Friday that South Korea's investment deal "keeps getting BETTER," announcing an additional $8.4 billion enhanced oil recovery project.
Enhanced oil recovery uses techniques such as carbon dioxide injection to increase the amount of crude oil produced from an oil field.
South Korean local media further reported that the oil recovery project was not included in the agreements reached between Seoul and Washington, citing the country's industry ministry. The ministry was seeking to verify Trump's announcement and had contacted the U.S. through trade channels for clarification, according to the report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/05/trump-alaska-lng-south-korea-pay.html",
    publishedAt: "2026-10-05T00:47:47+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "the-job-interview-question-you-don-t-hav-b85fa1a9",
    title: "The job interview question you don't have to answer",
    titleJa: "The job interview question you don't have to answer",
    summaryJa: "Experts explain what you should do if you are asked for your current salary during a job interview.",
    bodyOriginal: `The job interview question you don't have to answer
- Published
Prepare all you like, but there is often still one job interview question that leaves you feeling uncomfortable.
While employers in the UK are within their rights to ask you how much you get paid in your current role, applicants are not obliged to tell them.
Recruiters have been encouraged to stop posing questions about salary history and, in the EU, new rules will prevent them doing so.
But in the UK, there is still a chance of it coming up, so how best should you answer?
What can interviewers ask?
When interviewing or deciding on new staff, employers must not discriminate against an applicant based on so-called protected characteristics, including age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation.
Sometimes it feels like interviewers, and interviewees, tip-toe around the subject of money.
But Louise Rudd, a senior adviser at the workplace advice and conciliation service Acas, says there are no regulations that prevent employers from asking interviewees about their current salary, or their salary expectations.
She says employers, if they do want to know, should ask each applicant the same questions to ensure they are treated fairly.
A few years ago, a campaign was launched urging employers to stop asking new recruits how much they were paid in their previous jobs. It had its own hashtag - #EndSalaryHistory.
The Fawcett Society, which campaigns for women and gender equality, said that asking the question risked maintaining historic unfair differences in pay due to gender, race and disability inequality.
Rather than offering a salary based on skills, experience and performance, it meant employers rewarded an individual's perceived worth and negotiating skills instead, the society said.
The Recruitment and Employment Confederation supported the move, urging recruiters not to ask.
Employers in the EU will be banned from asking about salary history in new rules being rolled out across the bloc.
But that's not featured in Cabinet Office plans in the UK, which instead concentrates on telling employers to publish salary information in job adverts.
What's the best way to answer?
When you're going for a new job, you can reveal your current salary if you are happy to.
Some people asked by BBC News out and about in London suggested they would reply with an inflated salary - so they get paid more in the next job. However, the risks of lying in an interview can far outweigh the possible reward.
There are no requirements for you to disclose your salary if you don't want to.
Rudd says some people might prefer to give their salary expectations, or outline their understanding of the salary range for the role.
Recruitment firms often say applicants could instead focus on their skills and experience, so those are used as a measure of what they should be paid, not their salary history.
Shazia Ejaz, director of campaigns at the Recruitment and Employment Confederation, says jobseekers should approach questions about pay with "realism but also confidence".
"Candidates can focus on showcasing the value they bring, the benefits that matter most to them and to go to the interview knowing the market rate for the role," she says.
"Jobseekers who have done their homework on salaries and can explain the contribution they will make are in the strongest position to secure the right package."
Get in touch
What was your worst job interview? How did you handle it?
Related topics
- Published6 days ago
- Published21 September
- Published7 September`,
    bodyJa: `The job interview question you don't have to answer
- Published
Prepare all you like, but there is often still one job interview question that leaves you feeling uncomfortable.
While employers in the UK are within their rights to ask you how much you get paid in your current role, applicants are not obliged to tell them.
Recruiters have been encouraged to stop posing questions about salary history and, in the EU, new rules will prevent them doing so.
But in the UK, there is still a chance of it coming up, so how best should you answer?
What can interviewers ask?
When interviewing or deciding on new staff, employers must not discriminate against an applicant based on so-called protected characteristics, including age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation.
Sometimes it feels like interviewers, and interviewees, tip-toe around the subject of money.
But Louise Rudd, a senior adviser at the workplace advice and conciliation service Acas, says there are no regulations that prevent employers from asking interviewees about their current salary, or their salary expectations.
She says employers, if they do want to know, should ask each applicant the same questions to ensure they are treated fairly.
A few years ago, a campaign was launched urging employers to stop asking new recruits how much they were paid in their previous jobs. It had its own hashtag - #EndSalaryHistory.
The Fawcett Society, which campaigns for women and gender equality, said that asking the question risked maintaining historic unfair differences in pay due to gender, race and disability inequality.
Rather than offering a salary based on skills, experience and performance, it meant employers rewarded an individual's perceived worth and negotiating skills instead, the society said.
The Recruitment and Employment Confederation supported the move, urging recruiters not to ask.
Employers in the EU will be banned from asking about salary history in new rules being rolled out across the bloc.
But that's not featured in Cabinet Office plans in the UK, which instead concentrates on telling employers to publish salary information in job adverts.
What's the best way to answer?
When you're going for a new job, you can reveal your current salary if you are happy to.
Some people asked by BBC News out and about in London suggested they would reply with an inflated salary - so they get paid more in the next job. However, the risks of lying in an interview can far outweigh the possible reward.
There are no requirements for you to disclose your salary if you don't want to.
Rudd says some people might prefer to give their salary expectations, or outline their understanding of the salary range for the role.
Recruitment firms often say applicants could instead focus on their skills and experience, so those are used as a measure of what they should be paid, not their salary history.
Shazia Ejaz, director of campaigns at the Recruitment and Employment Confederation, says jobseekers should approach questions about pay with "realism but also confidence".
"Candidates can focus on showcasing the value they bring, the benefits that matter most to them and to go to the interview knowing the market rate for the role," she says.
"Jobseekers who have done their homework on salaries and can explain the contribution they will make are in the strongest position to secure the right package."
Get in touch
What was your worst job interview? How did you handle it?
Related topics
- Published6 days ago
- Published21 September
- Published7 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cje3r35p0qeno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-04T23:22:07+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e493/live/17316b80-bd89-11f1-a2ad-3160f44bb180.jpg",
    readTime: 9,
  },
  {
    id: "trump-reiterates-pledge-to-send-5-000-ch-0adc4ad9",
    title: "Trump reiterates pledge to send $5,000 checks, and hands out smaller payments, as midterm elections loom",
    titleJa: "Trump reiterates pledge to send $5,000 checks, and hands out smaller payments, as midterm elections loom",
    summaryJa: "Trump is promoting two federal payment programs already underway while reiterating a $5,000 dividend promise contingent on Republicans retaining Congress.",
    bodyOriginal: `With Election Day less than a month away, President Donald Trump is touting two federal cash-payment programs already underway while renewing a much larger $5,000 check promise contingent on Republicans retaining Congress.
On Friday, Trump announced one-time $90 payments to 20.8 million Medicare beneficiaries. A day later, he revived an earlier promise to give every adult U.S. citizen $5,000 — but only if Republicans retain control of Congress in November.
"If Republicans win the House of Representatives and the Senate in the 2026 Midterm Elections, I'm going to give all Adult Citizens in the United States of America, $5,000," Trump said in a Truth Social video post Saturday. The president made a similar pledge at the Republican National Committee's first midterm convention in Dallas last month.
Trump hasn't provided any details on who would authorize the payments and where the money would come from.
Those claims came on the heels of $500 Obamacare "refund" checks that began going out last week to roughly 950,000 people who bought unsubsidized coverage through the federal marketplace.
The $90 payments to certain eligible Medicare Part B enrollees are scheduled to arrive this month, funded through the Medicare Improvement Fund. The $500 Obamacare payments are already being distributed to certain full-price HealthCare.gov customers.
A Reuters analysis found 71% of the Obamacare money — $339 million — is going to residents of 13 states with some of the country's most competitive Senate and gubernatorial races, though eligibility is based on insurance status, not voting status.
Together, the flurry of offers of direct cash payments comes as Republicans head into the final stretch of a midterm campaign dominated by concerns about prices and the economy.
But the $5,000 "Trump dividend" remains just a promise and Trump has been extremely light on details, particularly on where the money would come from and who would need to authorize it. Sending $5,000 to every adult citizen would cost roughly $1.2 trillion and require congressional approval.
Some Republicans have also raised concerns about its effect on the deficit and inflation.
Rep. David Schweikert, R-Ariz., told Reuters last month he would "throw everything of my heart and soul" into stopping the proposal, warning it could push interest rates higher. And Rep. Jamie Raskin, D-Md., called the plan a "political bribe" in a Sept. 10 interview with CNN, and said Congress controls federal spending.
The White House and offices of Reps. David Schweikert, R-Ariz., and Jamie Raskin, D-Md., did not immediately respond to requests for comment.
Polling suggests the idea isn't a sure-fire political winner.
A Rasmussen Reports survey found likely voters essentially split, 47% to 48%, on the proposal. Just 15% said it would affect their vote. A Marquette Law School poll in Wisconsin found 70% opposed the payments, while an Economist/YouGov survey found 57% of registered voters doubted Trump would actually deliver them even if Republicans retained Congress.
In the past, Trump has made several promises to send cash payments to Americans — and didn't deliver.
In February 2025, the Trump administration floated a $5,000 "DOGE dividend" check, claiming the money would come from savings from the cuts enacted by the now-defunct, Elon Musk-led "Department of Government Efficiency." Those payments never materialized.
Then, in November, Trump proposed a reciprocal tariff-funded dividend payment of at least $2,000 per person. The Supreme Court struck down the tariffs in February of this year, and no checks were ever issued.
The pattern of offering cash payments directly to voters stretches back to Trump's first term. Six weeks before the 2020 election, Trump promised 33 million Medicare beneficiaries $200 prescription-drug cards "in coming weeks" — but the cards never went out.
Still, the Trump administration delivered a $1,776 "Warrior Dividend" to roughly 1.5 million service members last year, and Congress approved pandemic stimulus payments during his first term.`,
    bodyJa: `With Election Day less than a month away, President Donald Trump is touting two federal cash-payment programs already underway while renewing a much larger $5,000 check promise contingent on Republicans retaining Congress.
On Friday, Trump announced one-time $90 payments to 20.8 million Medicare beneficiaries. A day later, he revived an earlier promise to give every adult U.S. citizen $5,000 — but only if Republicans retain control of Congress in November.
"If Republicans win the House of Representatives and the Senate in the 2026 Midterm Elections, I'm going to give all Adult Citizens in the United States of America, $5,000," Trump said in a Truth Social video post Saturday. The president made a similar pledge at the Republican National Committee's first midterm convention in Dallas last month.
Trump hasn't provided any details on who would authorize the payments and where the money would come from.
Those claims came on the heels of $500 Obamacare "refund" checks that began going out last week to roughly 950,000 people who bought unsubsidized coverage through the federal marketplace.
The $90 payments to certain eligible Medicare Part B enrollees are scheduled to arrive this month, funded through the Medicare Improvement Fund. The $500 Obamacare payments are already being distributed to certain full-price HealthCare.gov customers.
A Reuters analysis found 71% of the Obamacare money — $339 million — is going to residents of 13 states with some of the country's most competitive Senate and gubernatorial races, though eligibility is based on insurance status, not voting status.
Together, the flurry of offers of direct cash payments comes as Republicans head into the final stretch of a midterm campaign dominated by concerns about prices and the economy.
But the $5,000 "Trump dividend" remains just a promise and Trump has been extremely light on details, particularly on where the money would come from and who would need to authorize it. Sending $5,000 to every adult citizen would cost roughly $1.2 trillion and require congressional approval.
Some Republicans have also raised concerns about its effect on the deficit and inflation.
Rep. David Schweikert, R-Ariz., told Reuters last month he would "throw everything of my heart and soul" into stopping the proposal, warning it could push interest rates higher. And Rep. Jamie Raskin, D-Md., called the plan a "political bribe" in a Sept. 10 interview with CNN, and said Congress controls federal spending.
The White House and offices of Reps. David Schweikert, R-Ariz., and Jamie Raskin, D-Md., did not immediately respond to requests for comment.
Polling suggests the idea isn't a sure-fire political winner.
A Rasmussen Reports survey found likely voters essentially split, 47% to 48%, on the proposal. Just 15% said it would affect their vote. A Marquette Law School poll in Wisconsin found 70% opposed the payments, while an Economist/YouGov survey found 57% of registered voters doubted Trump would actually deliver them even if Republicans retained Congress.
In the past, Trump has made several promises to send cash payments to Americans — and didn't deliver.
In February 2025, the Trump administration floated a $5,000 "DOGE dividend" check, claiming the money would come from savings from the cuts enacted by the now-defunct, Elon Musk-led "Department of Government Efficiency." Those payments never materialized.
Then, in November, Trump proposed a reciprocal tariff-funded dividend payment of at least $2,000 per person. The Supreme Court struck down the tariffs in February of this year, and no checks were ever issued.
The pattern of offering cash payments directly to voters stretches back to Trump's first term. Six weeks before the 2020 election, Trump promised 33 million Medicare beneficiaries $200 prescription-drug cards "in coming weeks" — but the cards never went out.
Still, the Trump administration delivered a $1,776 "Warrior Dividend" to roughly 1.5 million service members last year, and Congress approved pandemic stimulus payments during his first term.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/04/trump-5000-checks-cash-payments-midterms.html",
    publishedAt: "2026-10-04T20:28:47+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "supreme-court-justice-alito-said-he-s-th-4349f256",
    title: "Supreme Court Justice Alito said he's 'thought about' retirement as Senate control hangs in balance",
    titleJa: "Supreme Court Justice Alito said he's 'thought about' retirement as Senate control hangs in balance",
    summaryJa: "The Senate could flip to Democrats after November's midterm election, jeopardizing a potential Supreme Court nomination by President Donald Trump.",
    bodyOriginal: `Supreme Court Justice Samuel Alito said he has "thought about" retiring after the high court's last term but decided against it, believing he could still make "a valuable contribution," he said in an interview with CBS News.
Alito, 76, is the second-oldest justice on the bench, and speculation had swirled that he would retire while Republicans control the Senate and the White House — when the chances of swiftly confirming a GOP-backed candidate to the bench would be high.
The possibility that the Senate could flip to Democrats after November's midterm election may make confirmation of any potential nominee of President Donald Trump more difficult or impossible if Democrats control the Senate.
"I've been bemused by the retirement speculation; it's not too pleasant to look up and see the vultures circling," Alito said in a separate interview with "Fox News Sunday." "I don't have a calculation for it ... I think it would be foolhardy to make a calculation [that] I'm going to serve for a certain number of additional years."
Alito's status as one of the court's most conservative justices has sparked the speculation that he would retire ahead of the midterms — a decision the justice ultimately has not made. Should Democrats take control of the Senate, they would effectively have veto power over a Supreme Court nomination.
Justice Clarence Thomas, 78 — the court's oldest justice and a member of its conservative bloc — has also been on retirement watch.
The politics and timing of Supreme Court vacancies have been closely watched since Justice Antonin Scalia died in 2016. Then-Senate Majority Leader Mitch McConnell refused to take up President Barack Obama's nomination of Merrick Garland to the Supreme Court until after the 2016 presidential election, allowing Trump the time to nominate and confirm Justice Neil Gorsuch.
Then, after Justice Ruth Bader Ginsburg died in 2020, McConnell moved quickly to confirm Trump's nominee, Amy Coney Barrett, just over a week before the 2020 presidential election.
The Court is now controlled by a 6-3 conservative majority.
Democrats currently hold an edge in national House polling and in the CBS News Battleground Tracker model, which estimates a narrow Democratic majority after the midterm election, which looms just 30 days away. The Senate is also now in play, with Republicans locked in unexpectedly tight races across the country amid voter ire over prices and the economy.
Democrats need to net at least four seats while defending all the seats they currently have to win a Senate majority.`,
    bodyJa: `Supreme Court Justice Samuel Alito said he has "thought about" retiring after the high court's last term but decided against it, believing he could still make "a valuable contribution," he said in an interview with CBS News.
Alito, 76, is the second-oldest justice on the bench, and speculation had swirled that he would retire while Republicans control the Senate and the White House — when the chances of swiftly confirming a GOP-backed candidate to the bench would be high.
The possibility that the Senate could flip to Democrats after November's midterm election may make confirmation of any potential nominee of President Donald Trump more difficult or impossible if Democrats control the Senate.
"I've been bemused by the retirement speculation; it's not too pleasant to look up and see the vultures circling," Alito said in a separate interview with "Fox News Sunday." "I don't have a calculation for it ... I think it would be foolhardy to make a calculation [that] I'm going to serve for a certain number of additional years."
Alito's status as one of the court's most conservative justices has sparked the speculation that he would retire ahead of the midterms — a decision the justice ultimately has not made. Should Democrats take control of the Senate, they would effectively have veto power over a Supreme Court nomination.
Justice Clarence Thomas, 78 — the court's oldest justice and a member of its conservative bloc — has also been on retirement watch.
The politics and timing of Supreme Court vacancies have been closely watched since Justice Antonin Scalia died in 2016. Then-Senate Majority Leader Mitch McConnell refused to take up President Barack Obama's nomination of Merrick Garland to the Supreme Court until after the 2016 presidential election, allowing Trump the time to nominate and confirm Justice Neil Gorsuch.
Then, after Justice Ruth Bader Ginsburg died in 2020, McConnell moved quickly to confirm Trump's nominee, Amy Coney Barrett, just over a week before the 2020 presidential election.
The Court is now controlled by a 6-3 conservative majority.
Democrats currently hold an edge in national House polling and in the CBS News Battleground Tracker model, which estimates a narrow Democratic majority after the midterm election, which looms just 30 days away. The Senate is also now in play, with Republicans locked in unexpectedly tight races across the country amid voter ire over prices and the economy.
Democrats need to net at least four seats while defending all the seats they currently have to win a Senate majority.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/04/supreme-court-justice-alito-thought-about-retiring.html",
    publishedAt: "2026-10-04T17:53:11+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 6,
  },
  {
    id: "a-weird-ipo-pull-a-tainted-reputation-an-e1820884",
    title: "A 'weird' IPO pull, a tainted reputation and the stalled breakout moment for AI wearables",
    titleJa: "A 'weird' IPO pull, a tainted reputation and the stalled breakout moment for AI wearables",
    summaryJa: "Apple, Google and Meta are pushing new AI devices and assistants amid growing privacy concerns around wearables.",
    bodyOriginal: `Two years ago, Bella Nowroozi was on a date at the mall when she noticed something odd: A blinking light on her companion's glasses.
The 24-year-old master's student instantly recognized the frames as the Meta Ray-Ban smart glasses she had seen on social media. She told him to delete the recordings.
"I was honestly pretty shocked," Nowroozi told CNBC, reflecting on the interaction. "I hadn't really experienced anything like that before. I was also scared to go on dates after that as openly as I did before."
Apple, Google, Meta and a swarm of other tech contenders are betting that new artificial intelligence wearables in the form of glasses, rings, charms and pendants can push the market toward its category-defining moment. But as the gadgets have grown in notoriety, they've also been met with privacy backlash and doubts about whether the technology is beneficial enough to become a fixture in everyday life.
Meta made a splash last week with the unveiling of its Tamagotchi-like Muse Charm, a custom housing for its personal agent app that quickly topped Apple's iOS App Store free apps list. The company has continued to release new iterations of its Meta Ray-Ban AI glasses and offers an array of models at different price points.
This week, OpenAI rolled out its own personal assistant called Dots. The ChatGPT maker is also working with iPhone designer Jony Ive on consumer devices, but its first offering does not appear to be a wearable, according to Bloomberg. Apple provided a look at its latest devices at the beginning of September, complete with AI features on the Watch Series 12 that will listen to your conversations.
Besides the plethora of available devices, the market looked set this week to keep the momentum rolling with the debut of smart ring maker Oura.
But on Tuesday, the company delayed its expected initial public offering at the last minute, despite signaling strong demand for its products.
Oura cited "uncertainty in the IPO market" as the reason for the move, but some analysts were skeptical.
"I really believe that there's something else that's causing them to pull out of the IPO, and I don't think it's the market," said Anshel Sag, a principal analyst at Moor Insights & Strategy. "I just can't nail what it is."
"Them jumping out of this IPO is kind of weird," he said.
Branding problems
Meta is navigating pushback to its smart spectacles, which have been dubbed "pervert glasses" on social media because of their discreet cameras that can be used for harassment and other misbehavior.
One social media user said a man took photos of her on a date without her permission. Another said a buyer from Facebook Marketplace took unauthorized videos of her and her children. Meta's own advertising campaign featuring Kylie Jenner filming her everyday life drew further criticism of the surveillance-like nature of the videos.
Meta did not immediately respond to CNBC's request for comment.
DA Davidson analyst Gil Luria said the growing resistance to camera-equipped glasses is a hard battle to overcome.
"It's done for at this moment," said Luria. "We're going to have to revisit this 10 years from now."
When Luria first gifted the spectacles to his twin teenage boys last year, they were "super excited." He says now, they "wouldn't be caught dead in them."
Last month, Meta unveiled a camera-free smart glasses option.
Privacy
The explosion in wearables couldn't come at a more critical time as the policy debate over AI safety risks intensifies in Washington and the blowback takes center stage ahead of the midterm elections in November.
Far from the cute, fuzzy appearance of Meta's Muse character called Jolly, sprawling data centers have become the visual symbol of AI opposition in the U.S. Many argue that wearables and other devices that are always listening or recording have become an extension of that perceived surveillance state.
Flock Safety's license plate scanners are being vandalized and cities have ended contracts with the company over community outcry. Smart glasses have been banned from gyms and other places because of privacy concerns.
In February, the judge in the Meta social media addiction trial in Los Angeles threatened to hold anyone using AI smart glasses during CEO Mark Zuckerberg's testimony in contempt of court. Several people escorting Zuckerberg into the court were wearing the Meta Ray-Ban AI glasses.
"Their value add has to overcome the perception of AI being a technology that people are opposed," said Sag. "It needs to be more helpful and useful than people's apprehensions about it."
Design and execution
GPS delivered maps to a screen, the smartphone created a pocket-sized personal computer and AI promises to bring efficiency and automation to everyday life.
New gadgets in the wearables market are vying to build a new category of devices, but the most futuristic gadgets today aren't necessarily what the consumer wants, said Avi Greengart, founder and tech analyst at market research firm Techsponential.
From sleep readings to exercise tracking and accident detection, health wearables have shown immense promise in a market cornered by big tech giants like Apple and Google, and even startup Oura. Accessibility features added to Apple's AirPods are transforming the popular headphones into hearing aids, Greengart said.
But some of the flashy emerging AI tech, including pins and pendants, has hit significant design and execution roadblocks.
Greengart pointed to the Rabbit r1 personal assistant, which lacked distinct use cases from the smartphone and faced technical and hardware issues. Another failed contender was the Humane AI Pin, discontinued last year following poor customer reviews.
"If you force someone to spend $700 on a device that overheats, has a user interface that doesn't work in sunlight, battery life that is poor, unless what it does is magical, that's not going to work," said Greengart.
Nowroozi, whose sister owns a pair of Meta glasses, is holding off on buying into the AI wearable wave.
"I can't really think of how this would really be different from what a phone could do," she said.`,
    bodyJa: `Two years ago, Bella Nowroozi was on a date at the mall when she noticed something odd: A blinking light on her companion's glasses.
The 24-year-old master's student instantly recognized the frames as the Meta Ray-Ban smart glasses she had seen on social media. She told him to delete the recordings.
"I was honestly pretty shocked," Nowroozi told CNBC, reflecting on the interaction. "I hadn't really experienced anything like that before. I was also scared to go on dates after that as openly as I did before."
Apple, Google, Meta and a swarm of other tech contenders are betting that new artificial intelligence wearables in the form of glasses, rings, charms and pendants can push the market toward its category-defining moment. But as the gadgets have grown in notoriety, they've also been met with privacy backlash and doubts about whether the technology is beneficial enough to become a fixture in everyday life.
Meta made a splash last week with the unveiling of its Tamagotchi-like Muse Charm, a custom housing for its personal agent app that quickly topped Apple's iOS App Store free apps list. The company has continued to release new iterations of its Meta Ray-Ban AI glasses and offers an array of models at different price points.
This week, OpenAI rolled out its own personal assistant called Dots. The ChatGPT maker is also working with iPhone designer Jony Ive on consumer devices, but its first offering does not appear to be a wearable, according to Bloomberg. Apple provided a look at its latest devices at the beginning of September, complete with AI features on the Watch Series 12 that will listen to your conversations.
Besides the plethora of available devices, the market looked set this week to keep the momentum rolling with the debut of smart ring maker Oura.
But on Tuesday, the company delayed its expected initial public offering at the last minute, despite signaling strong demand for its products.
Oura cited "uncertainty in the IPO market" as the reason for the move, but some analysts were skeptical.
"I really believe that there's something else that's causing them to pull out of the IPO, and I don't think it's the market," said Anshel Sag, a principal analyst at Moor Insights & Strategy. "I just can't nail what it is."
"Them jumping out of this IPO is kind of weird," he said.
Branding problems
Meta is navigating pushback to its smart spectacles, which have been dubbed "pervert glasses" on social media because of their discreet cameras that can be used for harassment and other misbehavior.
One social media user said a man took photos of her on a date without her permission. Another said a buyer from Facebook Marketplace took unauthorized videos of her and her children. Meta's own advertising campaign featuring Kylie Jenner filming her everyday life drew further criticism of the surveillance-like nature of the videos.
Meta did not immediately respond to CNBC's request for comment.
DA Davidson analyst Gil Luria said the growing resistance to camera-equipped glasses is a hard battle to overcome.
"It's done for at this moment," said Luria. "We're going to have to revisit this 10 years from now."
When Luria first gifted the spectacles to his twin teenage boys last year, they were "super excited." He says now, they "wouldn't be caught dead in them."
Last month, Meta unveiled a camera-free smart glasses option.
Privacy
The explosion in wearables couldn't come at a more critical time as the policy debate over AI safety risks intensifies in Washington and the blowback takes center stage ahead of the midterm elections in November.
Far from the cute, fuzzy appearance of Meta's Muse character called Jolly, sprawling data centers have become the visual symbol of AI opposition in the U.S. Many argue that wearables and other devices that are always listening or recording have become an extension of that perceived surveillance state.
Flock Safety's license plate scanners are being vandalized and cities have ended contracts with the company over community outcry. Smart glasses have been banned from gyms and other places because of privacy concerns.
In February, the judge in the Meta social media addiction trial in Los Angeles threatened to hold anyone using AI smart glasses during CEO Mark Zuckerberg's testimony in contempt of court. Several people escorting Zuckerberg into the court were wearing the Meta Ray-Ban AI glasses.
"Their value add has to overcome the perception of AI being a technology that people are opposed," said Sag. "It needs to be more helpful and useful than people's apprehensions about it."
Design and execution
GPS delivered maps to a screen, the smartphone created a pocket-sized personal computer and AI promises to bring efficiency and automation to everyday life.
New gadgets in the wearables market are vying to build a new category of devices, but the most futuristic gadgets today aren't necessarily what the consumer wants, said Avi Greengart, founder and tech analyst at market research firm Techsponential.
From sleep readings to exercise tracking and accident detection, health wearables have shown immense promise in a market cornered by big tech giants like Apple and Google, and even startup Oura. Accessibility features added to Apple's AirPods are transforming the popular headphones into hearing aids, Greengart said.
But some of the flashy emerging AI tech, including pins and pendants, has hit significant design and execution roadblocks.
Greengart pointed to the Rabbit r1 personal assistant, which lacked distinct use cases from the smartphone and faced technical and hardware issues. Another failed contender was the Humane AI Pin, discontinued last year following poor customer reviews.
"If you force someone to spend $700 on a device that overheats, has a user interface that doesn't work in sunlight, battery life that is poor, unless what it does is magical, that's not going to work," said Greengart.
Nowroozi, whose sister owns a pair of Meta glasses, is holding off on buying into the AI wearable wave.
"I can't really think of how this would really be different from what a phone could do," she said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/04/ai-wearables-oura-ipo-privacy.html",
    publishedAt: "2026-10-04T13:22:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "sports-betting-is-increasingly-the-norm-c4112a5d",
    title: "Sports betting is increasingly the norm for Gen Z.  Here’s why some financial and mental health experts are worried",
    titleJa: "Sports betting is increasingly the norm for Gen Z.  Here’s why some financial and mental health experts are worried",
    summaryJa: "Surveys show Gen Z increasingly views sports bets as a form of investment, and those who gamble too often face mental health risks.",
    bodyOriginal: `Wagering on sports outcomes has exploded in the 2020s, but recent surveys show just how widespread gambling has become for Generation Z.
A survey of retail investors released in August by Betterment, an investment advisory platform, found that 66% of Gen Z investors participate in sports betting. The Bank of America Institute found in a September report that Gen Z made up almost 50% of all online betting activity in July, during the height of the 2026 FIFA World Cup, outnumbering millennials for the first time.
"It is more unusual for someone not to have, for example, a Kalshi account, DraftKings … than it is" to have such an account, said Cynthia Grant, vice president of clinical at Birches Health, which provides online therapy for online gambling addiction recovery. "It's part of the experience of watching sports now."
Sports betting surged after a 2018 U.S. Supreme Court allowing state-authorized sportsbooks, which have since spread to 30 states. The introduction of sports-related event contracts on prediction markets — which claim they are financial trades, not wagers — in early 2025 further expanded access to additional states without legalized sportsbooks, and to those under 21.
Now, the proliferation of sports betting has many financial and mental health advisors on edge. The average user on both a sportsbook and prediction market loses money, and trying to claw back losses puts users in even deeper financial holes, experts warn. Unsurprisingly, those who lose the most are at the greatest risk of harmful mental health outcomes.
Gambling as investment
The Bank of America Institute survey found that Gen Z was twice as likely to see sports betting as a type of investment, versus 20% of respondents overall. For prediction markets alone, respondents overall saw them as a form of investing, but those numbers were again higher for Gen Z.
In Betterment's retail investor survey, 52% of Gen Z respondents said they moved money originally meant for investment to sports betting, while another 26% saw wagering as a part of their long-term financial strategy.
Management at sportsbooks DraftKings and FanDuel typically say their products are entertainment, not investment. Prediction market platforms say event contracts, no matter the category, are a financial derivative.
Dan Egan, director of behavioral finance and investing at Betterment, said sports betting increasingly appears alongside traditional investments on the same app or device, helping drive the association.
The conflation is concerning because of the highly active behavior required to manage wagers on sports, unlike a long-term investment, Egan said.
"It's not an asset that grows with the economy, that kind of gets better as time goes on, that has a positive expected return, and that you can kind of sit back and not have to do anything with," he said. "It's the exact opposite."
Bank of America also found that the median deposit account balance for households use online betting was 59% of balances for those who didn't.
An August survey by BadCredit found that 44% of survey respondents started trading on prediction market platforms in hopes of scoring extra income. That's despite the fact the majority of sportsbooks and prediction market users lose money.
"People tend to tell other people how much money they've made," said Erica Sandberg, a consumer finance expert at BadCredit. "If you've got people around you who are saying, 'I just made $300 in five minutes on this platform,' you're gonna hear about it. You will not hear that they lost $800 last month."
Mental health worries
How a sports betting addiction develops, and when it gets to the point where treatment is needed, varies by individual. But, there are common warning signs, Grant said.
"It creeps into the way that they're functioning in the world, how they interact with their peers, how they interact with family," she said. "They lose time on work, they lose time in school. So when you start to see what we call clinically, 'functional impairment,' that things are interfering with the way that they're trying to navigate the world, that's when we really start to look at how this is developing into being a problem."
It's little surprise young people are more likely to take up sports wagers as biological development brings a heightened appetite for risk, said Amaura Kemmerer at UWill, a mental health and wellness provider helping to support more than four million students at 500 institutions around the world.
Consequences often arise well short of clinical treatment.
Even players who are only dabbling, and "doing it occasionally … are still having predictable negative effects on academics," Kemmerer said, noting the impact sports betting is having on Gen Z college students.
As a result, the perfect place to help combat the negative effects of gambling is on college campuses, both Kemmerer and Grant said, noting campus counseling services should treat it as they would other types of addiction.
Betting platforms themselves have tried to mitigate risks. All regulated sportsbooks and prediction market exchanges have age verification tools. FanDuel and DraftKings let users set self-imposed deposit or time limits. FanDuel also imposes monthly deposit limits on accounts held by users under age 26.
Polymarket on Wednesday announced optional self-imposed limits and a partnership with Birches Health to give users access to mental health resources. Kalshi does the same, as well as directing 18-to-21-year-old users to risk-management programs after they place their first trades. It donated $2 million in May to the National Council on Problem Gambling.
"We've prioritized making Kalshi the safest venue for people to trade on," spokesperson Elisabeth Diana said in a statement.
Experts stressed that not all forms of sports betting are harmful, but emphasized that motivation and frequency need to be clear, especially for young people.
"Lots of people do it to make things more interesting," Egan said. "It makes the game more exciting. You just have to figure out how to say this is entertainment."
If you or someone you know has a gambling addiction, call the National Council on Problem Gambling hotline: 1-800-522-4700.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `Wagering on sports outcomes has exploded in the 2020s, but recent surveys show just how widespread gambling has become for Generation Z.
A survey of retail investors released in August by Betterment, an investment advisory platform, found that 66% of Gen Z investors participate in sports betting. The Bank of America Institute found in a September report that Gen Z made up almost 50% of all online betting activity in July, during the height of the 2026 FIFA World Cup, outnumbering millennials for the first time.
"It is more unusual for someone not to have, for example, a Kalshi account, DraftKings … than it is" to have such an account, said Cynthia Grant, vice president of clinical at Birches Health, which provides online therapy for online gambling addiction recovery. "It's part of the experience of watching sports now."
Sports betting surged after a 2018 U.S. Supreme Court allowing state-authorized sportsbooks, which have since spread to 30 states. The introduction of sports-related event contracts on prediction markets — which claim they are financial trades, not wagers — in early 2025 further expanded access to additional states without legalized sportsbooks, and to those under 21.
Now, the proliferation of sports betting has many financial and mental health advisors on edge. The average user on both a sportsbook and prediction market loses money, and trying to claw back losses puts users in even deeper financial holes, experts warn. Unsurprisingly, those who lose the most are at the greatest risk of harmful mental health outcomes.
Gambling as investment
The Bank of America Institute survey found that Gen Z was twice as likely to see sports betting as a type of investment, versus 20% of respondents overall. For prediction markets alone, respondents overall saw them as a form of investing, but those numbers were again higher for Gen Z.
In Betterment's retail investor survey, 52% of Gen Z respondents said they moved money originally meant for investment to sports betting, while another 26% saw wagering as a part of their long-term financial strategy.
Management at sportsbooks DraftKings and FanDuel typically say their products are entertainment, not investment. Prediction market platforms say event contracts, no matter the category, are a financial derivative.
Dan Egan, director of behavioral finance and investing at Betterment, said sports betting increasingly appears alongside traditional investments on the same app or device, helping drive the association.
The conflation is concerning because of the highly active behavior required to manage wagers on sports, unlike a long-term investment, Egan said.
"It's not an asset that grows with the economy, that kind of gets better as time goes on, that has a positive expected return, and that you can kind of sit back and not have to do anything with," he said. "It's the exact opposite."
Bank of America also found that the median deposit account balance for households use online betting was 59% of balances for those who didn't.
An August survey by BadCredit found that 44% of survey respondents started trading on prediction market platforms in hopes of scoring extra income. That's despite the fact the majority of sportsbooks and prediction market users lose money.
"People tend to tell other people how much money they've made," said Erica Sandberg, a consumer finance expert at BadCredit. "If you've got people around you who are saying, 'I just made $300 in five minutes on this platform,' you're gonna hear about it. You will not hear that they lost $800 last month."
Mental health worries
How a sports betting addiction develops, and when it gets to the point where treatment is needed, varies by individual. But, there are common warning signs, Grant said.
"It creeps into the way that they're functioning in the world, how they interact with their peers, how they interact with family," she said. "They lose time on work, they lose time in school. So when you start to see what we call clinically, 'functional impairment,' that things are interfering with the way that they're trying to navigate the world, that's when we really start to look at how this is developing into being a problem."
It's little surprise young people are more likely to take up sports wagers as biological development brings a heightened appetite for risk, said Amaura Kemmerer at UWill, a mental health and wellness provider helping to support more than four million students at 500 institutions around the world.
Consequences often arise well short of clinical treatment.
Even players who are only dabbling, and "doing it occasionally … are still having predictable negative effects on academics," Kemmerer said, noting the impact sports betting is having on Gen Z college students.
As a result, the perfect place to help combat the negative effects of gambling is on college campuses, both Kemmerer and Grant said, noting campus counseling services should treat it as they would other types of addiction.
Betting platforms themselves have tried to mitigate risks. All regulated sportsbooks and prediction market exchanges have age verification tools. FanDuel and DraftKings let users set self-imposed deposit or time limits. FanDuel also imposes monthly deposit limits on accounts held by users under age 26.
Polymarket on Wednesday announced optional self-imposed limits and a partnership with Birches Health to give users access to mental health resources. Kalshi does the same, as well as directing 18-to-21-year-old users to risk-management programs after they place their first trades. It donated $2 million in May to the National Council on Problem Gambling.
"We've prioritized making Kalshi the safest venue for people to trade on," spokesperson Elisabeth Diana said in a statement.
Experts stressed that not all forms of sports betting are harmful, but emphasized that motivation and frequency need to be clear, especially for young people.
"Lots of people do it to make things more interesting," Egan said. "It makes the game more exciting. You just have to figure out how to say this is entertainment."
If you or someone you know has a gambling addiction, call the National Council on Problem Gambling hotline: 1-800-522-4700.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/04/gen-z-sports-betting-financial-and-mental-health-risks.html",
    publishedAt: "2026-10-04T12:57:45+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "chick-fil-a-wants-to-stay-a-family-busin-748af2cf",
    title: "Chick-fil-A wants to stay a family business even as it expands in the U.S. and abroad",
    titleJa: "Chick-fil-A wants to stay a family business even as it expands in the U.S. and abroad",
    summaryJa: "Chick-fil-A has been expanding into new international markets and growing its menu under CEO Andrew Cathy.",
    bodyOriginal: `With restaurants as far-flung as Singapore, Chick-fil-A has expanded far beyond its Southeastern stronghold in recent years, but CEO Andrew Cathy still wants the family-owned business to stay true to its roots.
Nearly five years ago, Cathy succeeded his father, Dan, as chief executive of the chicken chain his grandfather, S. Truett, founded. He took the reins as elevated inflation rocked the restaurant industry and a bevy of new chicken rivals looked to challenge Chick-fil-A's dominance. Since then, not much has changed — except for sluggish traffic across the industry as consumers have become more selective about their dining choices.
The challenging conditions have led to disappointing results for McDonald's, Popeyes, KFC and other restaurant competitors. While Chick-fil-A is not immune to these headaches, Cathy told CNBC that the chain's restaurants have not seen the same downturn.
"This has been a good year," the Atlanta-based Cathy said in downtown Manhattan before a planned activation to raise awareness for the chain's Shared Table hunger relief program.
"Our operators have done such a good job executing on the fundamentals and adding the hospitality to it," he added.
As a privately held business, Chick-fil-A does not report quarterly results. However, franchise disclosures reveal that the company's revenue in 2025 rose 14% to $10.3 billion, while its net income ticked up 1% to $1.05 billion. Its roughly 3,000 locations generated $23.92 billion in system sales last year, making it the third-largest U.S. restaurant by sales, trailing only McDonald's and Starbucks.
Chick-fil-A has no plans for an initial public offering or any other opportunities for outside investment. Cathy said the company plans to stick with its "calculated" and "conservative" growth.
But he may be underselling Chick-fil-A's recent expansion. It opened 179 restaurants last year and has launched in international markets like Canada, Singapore and the United Kingdom in recent years.
Staying private also has advantages, particularly as restaurant stocks have broadly struggled this year. Shares of Jersey Mike's have fallen nearly 28% since its initial public offering in July, while Dunkin' owner Inspire Brands is reportedly unlikely to go public this year unless the sector's performance improves.
"We're able to plan for the quarter century, and we don't have to plan for the quarter," Cathy said.
Balancing Chick-fil-A's past and future
During Cathy's tenure so far, Chick-fil-A has pursued bold ideas for future growth, like a $1 billion international expansion plan and Daybright, a new beverage-focused restaurant concept created by its venture arm.
But the company is trying to balance those new strategies with its existing traditions.
"I look at driving this business like driving a race car — there's a reason that the windshield's bigger than the rearview mirror," Cathy said. "It's important for the rear view to be grounded on where you are, and there are things that we think about our purpose, our mission, that won't change, but everything else we have to be able to evolve and change."
Some tenets, like staying closed on Sundays, will never change. Others, like its restaurants' signature Southern hospitality, will evolve as diners change their ordering and eating habits.
Cathy said that Chick-fil-A takes a "human plus" approach to technology in its restaurants.
"We think about all these new things into the future, about how will people want to receive food in the future?" he said. "As you think about drone delivery and all the other kind of things that could be coming, it's a fun time in the industry, to think about all the possibilities of what we can do to make a better experience for our guests."
While Chick-fil-A is exploring opportunities to use artificial intelligence behind the scenes, he said that its restaurants will not pursue AI voice ordering in its drive-thru lanes, unlike many of its industry rivals. McDonald's, for example, said at its investor day in September that it plans to test Archy, its voice AI tech, to take orders in both English and Spanish.
"From our experience, we really want that hospitality to be human to human," Cathy said. "We're not gonna substitute that interaction with technology, because we feel like that hospitality is so important to create that warm environment for consumers."
Other restaurants are also refocusing on hospitality, hoping that the extra effort from employees will encourage customers to come back. Starbucks bought around 200,000 Sharpie markers so its baristas could write friendly messages on customers' coffee cups. Burger King has redefined its restaurant manager role into a "Your Way Champion," who greets diners and fixes botched orders. And starting Monday, McDonald's will begin its "Make It Golden" training program for franchisees and employees, which focuses on hospitality as well as food quality.
Chick-fil-A's long-standing focus on service has made it the fast-food leader in customer satisfaction for more than a decade, according to the annual American Customer Satisfaction Index. That reputation can also help the chain stand out from other dining options as consumers have grown more choosy about how they spend their money. Jersey Mike's recently toppled Chick-fil-A in the 2026 study, although Chick-fil-A's score was unchanged from a year ago.
Waffles and pimento
Another enduring element of Chick-fil-A is its famously simple menu. But the chain has even been carefully expanding its offerings, typically through seasonal limited-time items like chicken and waffles or its Honey Pepper Pimento Chicken Sandwich. If a menu item is a "home run," as Cathy calls it, then Chick-fil-A might add it permanently, like its Pineapple Dragonfruit drink line.
"We're very careful about what we want to do, because we want to keep it really focused on unique Chick-fil-A items that they can only get at Chick-fil-A," Cathy said. "But we do want to bring in new flavors and profiles, and that's what we'll do with a lot of our seasonal items that we do, and we learn a lot from our customers about trying those things."
Other fast-food chains are trying to edge into Chick-fil-A's territory. In 2019, Restaurant Brands International's Popeyes sparked the "chicken sandwich wars" by releasing its own version. Chick-fil-A remains the dominant chicken chain in the U.S., with roughly a 43% market share as of 2024, according to Barclays. However, the chicken sandwich helped catapult Popeyes to the No. 2 spot, with about 11% share.
McDonald's could reignite the battle as it prepares to test hand-breaded chicken strips and sandwiches.
But Cathy said that he loves the competition.
"I'm grateful that there's competition in the chicken space, because that means we're in a good space to be," Cathy said. "Competition just makes us better .... What little details can we do to make that environment even more welcoming for customers?"
Red Wagon Ventures
Chick-fil-A has also innovated outside its restaurants.
In 2017, the company created Red Wagon Ventures, named for the vehicle Truett used to sell bottles of Coca-Cola in his first entrepreneurial gambit at age 6.
"The lion's share of our time and effort is continuing to make sure that we're getting better and better at Chick-fil-A, but we do have a small team that's working and incubating some of these new ideas and thinking about what could be some things that could help us grow into the future," Andrew Cathy said.
Some of those ventures are based in the restaurant industry. Its experimental Little Blue Menu concept served traditional Chick-fil-A menu items along with burgers, pizza and onion rings; the chain will convert its final location into a traditional Chick-fil-A next year. More recently, the subsidiary opened Daybright, which serves coffees, smoothies, juices and doughnuts — but no chicken sandwiches or waffle fries.
Another Red Wagon Ventures bet is even further from Chick-fil-A. Last year, it launched Acrew Home Professionals, a home repair and maintenance business that nodded to the Chick-fil-A ties by promoting "service with a smile," according to its website.
"I think from a family business standpoint, we've got to build off of our core competencies and look at other types of things that we can get into, so we can continue to serve customers in unique ways," Cathy said.
Cathy said that he studies family businesses, and those that have been around for more than 100 years still have to think about innovation and think ahead. At 80 years old, Chick-fil-A still has a few more decades to go before it hits the century mark.
"My grandfather was entrepreneurial to the core. He died at 93, and he opened a new business at 92 years old that he created himself," Cathy said, referring to Truett's Luau, a Hawaiian-themed restaurant concept that opened during the same month that Truett handed over the reins of the family business to his son.
In addition to starting its own brands, Red Wagon Ventures will explore acquisitions of family businesses, Cathy said. Most likely, those will be companies without a succession plan or just looking to sell — in other words, very different from Chick-fil-A.`,
    bodyJa: `With restaurants as far-flung as Singapore, Chick-fil-A has expanded far beyond its Southeastern stronghold in recent years, but CEO Andrew Cathy still wants the family-owned business to stay true to its roots.
Nearly five years ago, Cathy succeeded his father, Dan, as chief executive of the chicken chain his grandfather, S. Truett, founded. He took the reins as elevated inflation rocked the restaurant industry and a bevy of new chicken rivals looked to challenge Chick-fil-A's dominance. Since then, not much has changed — except for sluggish traffic across the industry as consumers have become more selective about their dining choices.
The challenging conditions have led to disappointing results for McDonald's, Popeyes, KFC and other restaurant competitors. While Chick-fil-A is not immune to these headaches, Cathy told CNBC that the chain's restaurants have not seen the same downturn.
"This has been a good year," the Atlanta-based Cathy said in downtown Manhattan before a planned activation to raise awareness for the chain's Shared Table hunger relief program.
"Our operators have done such a good job executing on the fundamentals and adding the hospitality to it," he added.
As a privately held business, Chick-fil-A does not report quarterly results. However, franchise disclosures reveal that the company's revenue in 2025 rose 14% to $10.3 billion, while its net income ticked up 1% to $1.05 billion. Its roughly 3,000 locations generated $23.92 billion in system sales last year, making it the third-largest U.S. restaurant by sales, trailing only McDonald's and Starbucks.
Chick-fil-A has no plans for an initial public offering or any other opportunities for outside investment. Cathy said the company plans to stick with its "calculated" and "conservative" growth.
But he may be underselling Chick-fil-A's recent expansion. It opened 179 restaurants last year and has launched in international markets like Canada, Singapore and the United Kingdom in recent years.
Staying private also has advantages, particularly as restaurant stocks have broadly struggled this year. Shares of Jersey Mike's have fallen nearly 28% since its initial public offering in July, while Dunkin' owner Inspire Brands is reportedly unlikely to go public this year unless the sector's performance improves.
"We're able to plan for the quarter century, and we don't have to plan for the quarter," Cathy said.
Balancing Chick-fil-A's past and future
During Cathy's tenure so far, Chick-fil-A has pursued bold ideas for future growth, like a $1 billion international expansion plan and Daybright, a new beverage-focused restaurant concept created by its venture arm.
But the company is trying to balance those new strategies with its existing traditions.
"I look at driving this business like driving a race car — there's a reason that the windshield's bigger than the rearview mirror," Cathy said. "It's important for the rear view to be grounded on where you are, and there are things that we think about our purpose, our mission, that won't change, but everything else we have to be able to evolve and change."
Some tenets, like staying closed on Sundays, will never change. Others, like its restaurants' signature Southern hospitality, will evolve as diners change their ordering and eating habits.
Cathy said that Chick-fil-A takes a "human plus" approach to technology in its restaurants.
"We think about all these new things into the future, about how will people want to receive food in the future?" he said. "As you think about drone delivery and all the other kind of things that could be coming, it's a fun time in the industry, to think about all the possibilities of what we can do to make a better experience for our guests."
While Chick-fil-A is exploring opportunities to use artificial intelligence behind the scenes, he said that its restaurants will not pursue AI voice ordering in its drive-thru lanes, unlike many of its industry rivals. McDonald's, for example, said at its investor day in September that it plans to test Archy, its voice AI tech, to take orders in both English and Spanish.
"From our experience, we really want that hospitality to be human to human," Cathy said. "We're not gonna substitute that interaction with technology, because we feel like that hospitality is so important to create that warm environment for consumers."
Other restaurants are also refocusing on hospitality, hoping that the extra effort from employees will encourage customers to come back. Starbucks bought around 200,000 Sharpie markers so its baristas could write friendly messages on customers' coffee cups. Burger King has redefined its restaurant manager role into a "Your Way Champion," who greets diners and fixes botched orders. And starting Monday, McDonald's will begin its "Make It Golden" training program for franchisees and employees, which focuses on hospitality as well as food quality.
Chick-fil-A's long-standing focus on service has made it the fast-food leader in customer satisfaction for more than a decade, according to the annual American Customer Satisfaction Index. That reputation can also help the chain stand out from other dining options as consumers have grown more choosy about how they spend their money. Jersey Mike's recently toppled Chick-fil-A in the 2026 study, although Chick-fil-A's score was unchanged from a year ago.
Waffles and pimento
Another enduring element of Chick-fil-A is its famously simple menu. But the chain has even been carefully expanding its offerings, typically through seasonal limited-time items like chicken and waffles or its Honey Pepper Pimento Chicken Sandwich. If a menu item is a "home run," as Cathy calls it, then Chick-fil-A might add it permanently, like its Pineapple Dragonfruit drink line.
"We're very careful about what we want to do, because we want to keep it really focused on unique Chick-fil-A items that they can only get at Chick-fil-A," Cathy said. "But we do want to bring in new flavors and profiles, and that's what we'll do with a lot of our seasonal items that we do, and we learn a lot from our customers about trying those things."
Other fast-food chains are trying to edge into Chick-fil-A's territory. In 2019, Restaurant Brands International's Popeyes sparked the "chicken sandwich wars" by releasing its own version. Chick-fil-A remains the dominant chicken chain in the U.S., with roughly a 43% market share as of 2024, according to Barclays. However, the chicken sandwich helped catapult Popeyes to the No. 2 spot, with about 11% share.
McDonald's could reignite the battle as it prepares to test hand-breaded chicken strips and sandwiches.
But Cathy said that he loves the competition.
"I'm grateful that there's competition in the chicken space, because that means we're in a good space to be," Cathy said. "Competition just makes us better .... What little details can we do to make that environment even more welcoming for customers?"
Red Wagon Ventures
Chick-fil-A has also innovated outside its restaurants.
In 2017, the company created Red Wagon Ventures, named for the vehicle Truett used to sell bottles of Coca-Cola in his first entrepreneurial gambit at age 6.
"The lion's share of our time and effort is continuing to make sure that we're getting better and better at Chick-fil-A, but we do have a small team that's working and incubating some of these new ideas and thinking about what could be some things that could help us grow into the future," Andrew Cathy said.
Some of those ventures are based in the restaurant industry. Its experimental Little Blue Menu concept served traditional Chick-fil-A menu items along with burgers, pizza and onion rings; the chain will convert its final location into a traditional Chick-fil-A next year. More recently, the subsidiary opened Daybright, which serves coffees, smoothies, juices and doughnuts — but no chicken sandwiches or waffle fries.
Another Red Wagon Ventures bet is even further from Chick-fil-A. Last year, it launched Acrew Home Professionals, a home repair and maintenance business that nodded to the Chick-fil-A ties by promoting "service with a smile," according to its website.
"I think from a family business standpoint, we've got to build off of our core competencies and look at other types of things that we can get into, so we can continue to serve customers in unique ways," Cathy said.
Cathy said that he studies family businesses, and those that have been around for more than 100 years still have to think about innovation and think ahead. At 80 years old, Chick-fil-A still has a few more decades to go before it hits the century mark.
"My grandfather was entrepreneurial to the core. He died at 93, and he opened a new business at 92 years old that he created himself," Cathy said, referring to Truett's Luau, a Hawaiian-themed restaurant concept that opened during the same month that Truett handed over the reins of the family business to his son.
In addition to starting its own brands, Red Wagon Ventures will explore acquisitions of family businesses, Cathy said. Most likely, those will be companies without a succession plan or just looking to sell — in other words, very different from Chick-fil-A.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/04/chick-fil-a-ceo-andrew-cathy-family-ownership-growth.html",
    publishedAt: "2026-10-04T12:08:54+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "more-tankers-struck-in-the-middle-east-a-1bb31c6e",
    title: "More tankers struck in the Middle East as Iran reiterates conditions for reopening the Strait of Hormuz",
    titleJa: "More tankers struck in the Middle East as Iran reiterates conditions for reopening the Strait of Hormuz",
    summaryJa: "Tehran's conditions include a halt to U.S. \"acts of aggression,\" an end to the naval blockade  and economic warfare, and the release of Iranian assets.",
    bodyOriginal: `At least two vessels were struck over the weekend in waters near Oman and Iran, the United Kingdom Maritime Trade Operations reported, as Tehran reiterated its position on Sunday that the Strait of Hormuz would not reopen unless its conditions for ending the war with the U.S. are met.
On Saturday, the UKMTO, a British maritime security alert service, said it received a report of a crude oil tanker being hit by an unknown projectile four nautical miles east of Oman. It said another tanker was reported as being similarly struck Sunday in the Strait of Hormuz, causing damage to its engine room.
Attacks on shipping in the strait, through which about a fifth of the world's oil supplies moved before the start of the U.S. and Israel-led war on Feb. 28, have been happening on a regular basis for weeks.
"The Strait of Hormuz will not open until Iran's seven conditions based on the Islamabad Memorandum are met, and Iran will not regulate its national security with tweets from American officials," Iranian state media agency Nour News quoted parliament speaker Mohammad Bagher Ghalibaf as saying Sunday.
President Donald Trump and Iranian President Masoud Pezeshkian signed an interim deal in June, known as the Islamabad Memorandum of Understanding, that resulted in a brief hiatus in fighting.
Tehran's conditions for allowing ships to proceed freely through the Strait of Hormuz include a halt to U.S. "acts of aggression," an end to the U.S. naval blockade of its ports and economic warfare, and the release of Iranian assets.
A key demand of the U.S. has been that Iran dismantle its nuclear weapons program.
Saudi attack
Meanwhile, Saudi Arabia's energy infrastructure reportedly came under renewed attacks.
Reuters reported Saturday that Yemen's Iran-aligned Houthis said they had targeted a facility owned by Saudi Arabian oil giant Aramco in the capital Riyadh with ballistic missiles and drones. The group said the attack was in retaliation for Saudi attacks on Yemen's Sanaa and other provinces.
A large plume of smoke and fire rose above the facility, Reuters quoted a witness as saying.
Saudi authorities have not commented on the reported attack. Aramco did not immediately respond to CNBC's emailed request for comment.
If confirmed, it would be the latest escalation in what has effectively become a second front in the Iran war.
Not if, but when
Some investors say they expect full-scale fighting to resume in the Middle East.
"The situation is fluid and volatile. To me, as we are developing and looking at the situation, it's not a question of if, but when the conflict resumes full force," Bader Al-Saif, founding president of Al-Saif Consulting, told CNBC's Access Middle East show on Friday.
The ongoing attacks and prospect of a further escalation have driven energy prices higher in recent weeks, raising inflation expectations globally and putting upward pressure on government borrowing costs.
Reports that the U.S. is sending a third aircraft carrier strike group to the Middle East, along with an amphibious force carrying 2,000 Marines, pushed crude oil prices higher on Thursday. But prices edged lower Friday, after the Group of Seven nations announced the release of diesel and crude stocks to ease the burden on consumers.
Brent crude futures, the international benchmark, lost 6 cents to close at $102.25 per barrel, while U.S. West Texas Intermediate crude shed $1.76 to settle at $91.11 per barrel.`,
    bodyJa: `At least two vessels were struck over the weekend in waters near Oman and Iran, the United Kingdom Maritime Trade Operations reported, as Tehran reiterated its position on Sunday that the Strait of Hormuz would not reopen unless its conditions for ending the war with the U.S. are met.
On Saturday, the UKMTO, a British maritime security alert service, said it received a report of a crude oil tanker being hit by an unknown projectile four nautical miles east of Oman. It said another tanker was reported as being similarly struck Sunday in the Strait of Hormuz, causing damage to its engine room.
Attacks on shipping in the strait, through which about a fifth of the world's oil supplies moved before the start of the U.S. and Israel-led war on Feb. 28, have been happening on a regular basis for weeks.
"The Strait of Hormuz will not open until Iran's seven conditions based on the Islamabad Memorandum are met, and Iran will not regulate its national security with tweets from American officials," Iranian state media agency Nour News quoted parliament speaker Mohammad Bagher Ghalibaf as saying Sunday.
President Donald Trump and Iranian President Masoud Pezeshkian signed an interim deal in June, known as the Islamabad Memorandum of Understanding, that resulted in a brief hiatus in fighting.
Tehran's conditions for allowing ships to proceed freely through the Strait of Hormuz include a halt to U.S. "acts of aggression," an end to the U.S. naval blockade of its ports and economic warfare, and the release of Iranian assets.
A key demand of the U.S. has been that Iran dismantle its nuclear weapons program.
Saudi attack
Meanwhile, Saudi Arabia's energy infrastructure reportedly came under renewed attacks.
Reuters reported Saturday that Yemen's Iran-aligned Houthis said they had targeted a facility owned by Saudi Arabian oil giant Aramco in the capital Riyadh with ballistic missiles and drones. The group said the attack was in retaliation for Saudi attacks on Yemen's Sanaa and other provinces.
A large plume of smoke and fire rose above the facility, Reuters quoted a witness as saying.
Saudi authorities have not commented on the reported attack. Aramco did not immediately respond to CNBC's emailed request for comment.
If confirmed, it would be the latest escalation in what has effectively become a second front in the Iran war.
Not if, but when
Some investors say they expect full-scale fighting to resume in the Middle East.
"The situation is fluid and volatile. To me, as we are developing and looking at the situation, it's not a question of if, but when the conflict resumes full force," Bader Al-Saif, founding president of Al-Saif Consulting, told CNBC's Access Middle East show on Friday.
The ongoing attacks and prospect of a further escalation have driven energy prices higher in recent weeks, raising inflation expectations globally and putting upward pressure on government borrowing costs.
Reports that the U.S. is sending a third aircraft carrier strike group to the Middle East, along with an amphibious force carrying 2,000 Marines, pushed crude oil prices higher on Thursday. But prices edged lower Friday, after the Group of Seven nations announced the release of diesel and crude stocks to ease the burden on consumers.
Brent crude futures, the international benchmark, lost 6 cents to close at $102.25 per barrel, while U.S. West Texas Intermediate crude shed $1.76 to settle at $91.11 per barrel.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/04/more-tankers-struck-in-gulf-waters-as-iran-reiterates-conditions.html",
    publishedAt: "2026-10-04T12:03:09+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 9,
  },
  {
    id: "a-weird-ipo-pull-a-tainted-reputation-an-75655eea",
    title: "A 'weird' IPO pull, a tainted reputation and the stalled breakout moment for AI wearables",
    titleJa: "A 'weird' IPO pull, a tainted reputation and the stalled breakout moment for AI wearables",
    summaryJa: "Apple, Google and Meta are pushing new AI devices and assistants amid growing privacy concerns around wearables.",
    bodyOriginal: `Apple, Google and Meta are pushing new AI devices and assistants amid growing privacy concerns around wearables.`,
    bodyJa: `Apple, Google and Meta are pushing new AI devices and assistants amid growing privacy concerns around wearables.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/04//ai-wearables-oura-ipo-privacy.html",
    publishedAt: "2026-10-04T12:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "why-brands-like-e-l-f-wendy-s-and-gap-ar-6aff5442",
    title: "Why brands like E.l.f., Wendy's and Gap are branching out into original music",
    titleJa: "Why brands like E.l.f., Wendy's and Gap are branching out into original music",
    summaryJa: "E.l.f. Beauty released an album titled \"Mirror Mix\" as the brand plans to increase its marketing spend for the rest of the year.",
    bodyOriginal: `Watch out Sony, a new music producer is in town. And this time it's the same brand that makes your favorite lip gloss.
E.l.f. Beauty announced late last month the release of "Mirror Mix," an original album featuring music from seven rising artists. The album comes as the makeup company ramps up its marketing spend, fueled in part by tariff refunds.
E.l.f.'s pursuit of music is part of a growing wave of retailers blending shopping with entertainment.
The album features artists including a WNBA player and a Grammy award-winning singer-songwriter. It's available to stream on Spotify, Apple Music, Amazon and Roblox, according to a press release.
In addition to elevating the voices of independent artists, the new music is intended to help E.l.f. better connect with its customers, Chief Integrated Marketing Officer Patrick O'Keefe told CNBC in an interview.
"When you put community at the center of everything … programs and campaigns and building music, which evokes emotion … when you do that, it changes the conversation. And we want to be top of mind with our community," O'Keefe said.
"Mirror Mix" is E.l.f.'s second album, following the company's 2024 release of "Get Ready With Music, The Album." Its first venture into music, the song "eyes.lips.face.," debuted in 2019.
"We were one of the first movers on TikTok, and we created an original song around eyes, lips, face, and it went viral. It propelled the brand into new dimensions," O'Keefe said. "People didn't know what eyes, lips, face — what E.l.f. — stood for, and we created the song to embrace what it stands for and what it means for us as a brand."
The E.l.f.-released music is part of the company's strategy in "disruptive marketing," or marketing that aims to create moments consumers will pay attention to.
E.l.f. has also launched a TikTok reality show and became one of the first brands to launch a channel on Twitch and offer live shopping on the platform.
"Our marketing works best when you start seeing that virality on innovation, our ability to feed that and be able to sustain that demand and build growing franchises," CEO Tarang Amin said at the Deutsche Bank dbAccess Global Consumer Conference in early June.
"We're an entertainment company that happens to sell beauty products," Amin joked.
Where retail meets entertainment
E.l.f. is not alone in its foray into entertainment.
Days before E.l.f.'s album debut, Gap announced a multiyear partnership with boy band Just Your Type, or JYT. The clothing retailer will be responsible for developing a multi-episode docuseries, national mall tour and a clothing collection with the rising pop stars, according to a press release.
The venture is the company's first collaboration under its newly created "fashiontainment" platform. The initiative comes as the company has undergone a multiyear revival after the retailer closed about 2,000 stores and annual sales fell by $3.5 billion between 2001 and 2021.
Pam Kaufman, Gap's chief entertainment officer, will oversee the project and said in a press release the partnership with JYT will "create something much bigger than a campaign."
"Gap has always lived at the intersection of style, music and culture, and our Fashiontainment platform builds on that legacy by putting our brands at the center of the stories and cultural moments people care about," Kaufman said.
Gap CEO Richard Dickson tapped into a similar sentiment earlier this year, saying traditional advertising campaigns are just not cutting it anymore.
"Fashion is entertainment, and today's customers aren't just buying apparel, they're buying into brands that tell compelling stories and drive cultural conversations," Dickson said in a statement in January announcing the creation of the chief entertainment officer role.
In recent weeks, Wendy's also debuted an emo album titled, "Songs to Listen to in a Wendy's Parking Lot." Unlike the earnest attempts of E.l.f. and Gap to create music that would resonate with fans, the fast-food chain created humorous renditions of songs, including "She Said She Didn't Want Fries" and "The Best Combo Meal on the Worst Night of My Life."
The lead song has generated more than 450,000 streams on Spotify, and the announcement gained hundreds of thousands of likes on Instagram.
Wendy's CEO Bob Wright named marketing as one of the company's key areas of focus during its most recent earnings call.
"We have one of the most recognizable brands in the industry, and we need to make our messaging, media and creative drive a meaningful connection with our customers and drive traffic to our restaurants," he said.
That need is particularly true as younger consumers gain spending power.
"Cultural relevance moves the entire purchase funnel — especially for Gen Z," United Talent Agency said in a report released in June. "Consumers who perceive a brand as culturally relevant are more likely to notice it (90% of Gen Z), think favorably of it (87% of Gen Z), consider it (81% of Gen Z), and ultimately buy from it (68% of Gen Z) — proving culture's ROI extends far beyond brand perception."
E.l.f.'s marketing spend
At E.l.f., O'Keefe said the company uses the concept of unaided awareness, or a consumer's ability to name a brand without being prompted, as a metric to measure its marketing's success. Unaided awareness of E.l.f. Beauty has tripled in the last five years, rising to 45% from 13%, he said.
The company reported that profits doubled during its most recently reported quarter, which became the cosmetics brand's 30th consecutive quarter of growth.
At the same time, the company has prioritized spending on innovative marketing campaigns. More than 20% of net sales in the fiscal first quarter were reinvested in marketing and digital, according to the company's most recent earnings call. That percentage is expected to rise throughout the rest of the year, the company said.
The increased marketing push will be funded in part by tariff refunds. The company received $50 million in the three months that ended June 30 after the Supreme Court struck down President Donald Trump's "liberation day" tariffs and a federal judge ordered the money to be returned.
"Our plan is to fully reinvest that money in both pricing, to have a superior value proposition, as well as increased marketing across our entire portfolio of brands," CEO Amin told CNBC in an interview in August. "We feel we never should have had the tariffs to begin with, so let's invest in our brands to drive the strength that we see."`,
    bodyJa: `Watch out Sony, a new music producer is in town. And this time it's the same brand that makes your favorite lip gloss.
E.l.f. Beauty announced late last month the release of "Mirror Mix," an original album featuring music from seven rising artists. The album comes as the makeup company ramps up its marketing spend, fueled in part by tariff refunds.
E.l.f.'s pursuit of music is part of a growing wave of retailers blending shopping with entertainment.
The album features artists including a WNBA player and a Grammy award-winning singer-songwriter. It's available to stream on Spotify, Apple Music, Amazon and Roblox, according to a press release.
In addition to elevating the voices of independent artists, the new music is intended to help E.l.f. better connect with its customers, Chief Integrated Marketing Officer Patrick O'Keefe told CNBC in an interview.
"When you put community at the center of everything … programs and campaigns and building music, which evokes emotion … when you do that, it changes the conversation. And we want to be top of mind with our community," O'Keefe said.
"Mirror Mix" is E.l.f.'s second album, following the company's 2024 release of "Get Ready With Music, The Album." Its first venture into music, the song "eyes.lips.face.," debuted in 2019.
"We were one of the first movers on TikTok, and we created an original song around eyes, lips, face, and it went viral. It propelled the brand into new dimensions," O'Keefe said. "People didn't know what eyes, lips, face — what E.l.f. — stood for, and we created the song to embrace what it stands for and what it means for us as a brand."
The E.l.f.-released music is part of the company's strategy in "disruptive marketing," or marketing that aims to create moments consumers will pay attention to.
E.l.f. has also launched a TikTok reality show and became one of the first brands to launch a channel on Twitch and offer live shopping on the platform.
"Our marketing works best when you start seeing that virality on innovation, our ability to feed that and be able to sustain that demand and build growing franchises," CEO Tarang Amin said at the Deutsche Bank dbAccess Global Consumer Conference in early June.
"We're an entertainment company that happens to sell beauty products," Amin joked.
Where retail meets entertainment
E.l.f. is not alone in its foray into entertainment.
Days before E.l.f.'s album debut, Gap announced a multiyear partnership with boy band Just Your Type, or JYT. The clothing retailer will be responsible for developing a multi-episode docuseries, national mall tour and a clothing collection with the rising pop stars, according to a press release.
The venture is the company's first collaboration under its newly created "fashiontainment" platform. The initiative comes as the company has undergone a multiyear revival after the retailer closed about 2,000 stores and annual sales fell by $3.5 billion between 2001 and 2021.
Pam Kaufman, Gap's chief entertainment officer, will oversee the project and said in a press release the partnership with JYT will "create something much bigger than a campaign."
"Gap has always lived at the intersection of style, music and culture, and our Fashiontainment platform builds on that legacy by putting our brands at the center of the stories and cultural moments people care about," Kaufman said.
Gap CEO Richard Dickson tapped into a similar sentiment earlier this year, saying traditional advertising campaigns are just not cutting it anymore.
"Fashion is entertainment, and today's customers aren't just buying apparel, they're buying into brands that tell compelling stories and drive cultural conversations," Dickson said in a statement in January announcing the creation of the chief entertainment officer role.
In recent weeks, Wendy's also debuted an emo album titled, "Songs to Listen to in a Wendy's Parking Lot." Unlike the earnest attempts of E.l.f. and Gap to create music that would resonate with fans, the fast-food chain created humorous renditions of songs, including "She Said She Didn't Want Fries" and "The Best Combo Meal on the Worst Night of My Life."
The lead song has generated more than 450,000 streams on Spotify, and the announcement gained hundreds of thousands of likes on Instagram.
Wendy's CEO Bob Wright named marketing as one of the company's key areas of focus during its most recent earnings call.
"We have one of the most recognizable brands in the industry, and we need to make our messaging, media and creative drive a meaningful connection with our customers and drive traffic to our restaurants," he said.
That need is particularly true as younger consumers gain spending power.
"Cultural relevance moves the entire purchase funnel — especially for Gen Z," United Talent Agency said in a report released in June. "Consumers who perceive a brand as culturally relevant are more likely to notice it (90% of Gen Z), think favorably of it (87% of Gen Z), consider it (81% of Gen Z), and ultimately buy from it (68% of Gen Z) — proving culture's ROI extends far beyond brand perception."
E.l.f.'s marketing spend
At E.l.f., O'Keefe said the company uses the concept of unaided awareness, or a consumer's ability to name a brand without being prompted, as a metric to measure its marketing's success. Unaided awareness of E.l.f. Beauty has tripled in the last five years, rising to 45% from 13%, he said.
The company reported that profits doubled during its most recently reported quarter, which became the cosmetics brand's 30th consecutive quarter of growth.
At the same time, the company has prioritized spending on innovative marketing campaigns. More than 20% of net sales in the fiscal first quarter were reinvested in marketing and digital, according to the company's most recent earnings call. That percentage is expected to rise throughout the rest of the year, the company said.
The increased marketing push will be funded in part by tariff refunds. The company received $50 million in the three months that ended June 30 after the Supreme Court struck down President Donald Trump's "liberation day" tariffs and a federal judge ordered the money to be returned.
"Our plan is to fully reinvest that money in both pricing, to have a superior value proposition, as well as increased marketing across our entire portfolio of brands," CEO Amin told CNBC in an interview in August. "We feel we never should have had the tariffs to begin with, so let's invest in our brands to drive the strength that we see."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/04/elf-wendys-gap-music-marketing.html",
    publishedAt: "2026-10-04T12:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "ukraine-s-surprise-robot-offensive-expos-aa3765ab",
    title: "Ukraine’s surprise robot offensive exposes a vulnerability in Putin’s war machine",
    titleJa: "Ukraine’s surprise robot offensive exposes a vulnerability in Putin’s war machine",
    summaryJa: "Experts say the offensive is not a decisive breakthrough, but demonstrates how Ukraine’s expanding use of robotic systems is reshaping frontline warfare.",
    bodyOriginal: `A surprise Ukrainian robot offensive in the eastern Donbas region appears to have reversed over a year of Russian territorial gains, according to security experts, dealing a strategic blow to Russian President Vladimir Putin's territorial ambitions.
Details of the Ukrainian counteroffensive, dubbed "Operation Vivaldi," have started to come to light in recent weeks, offering rare insight into the fast-changing nature of frontline combat operations amid Russia's full-scale invasion.
As part of the ongoing operation, which started in May, security experts said Ukraine's Third Army Corps had been able to deploy large bomber drones and remote-controlled robots behind enemy lines around Lyman in the northern Donetsk Oblast, apparently catching Russian forces off guard.
Russian forces have been seeking to encircle Ukraine's so-called fortress belt cities that make up the remaining Ukrainian-held territory in the region for the past 12 months.
The third phase of Operation Vivaldi, however, liberated an additional 51 square kilometers, taking the total area of territory retaken to 176 square kilometers, Ukrainian Brigadier-General Andrii Biletskyi said on Sept. 28. The latest phase of fighting inflicted over 2,000 Russian losses, with over 250 Russian soldiers taken prisoner, he added.
The experience of Operation 'Vivaldi' has demonstrated that the systematic replacement of human personnel with robots is changing the paradigm of modern warfare.Serhii KuzanChairman of the Ukrainian Security and Cooperation Center
Patrick Bolder, a defense expert and strategic advisor at the Hague Center for Strategic Studies (HCSS), described the offensive as a "big bloody nose" to Putin's minimal war aim of seizing Ukraine's Donbas region.
Alongside demonstrating an ability to keep details of the operation secret, running disinformation campaigns against Russia and orchestrating a months-long air operation to disrupt logistical supplies to the frontline, Bolder said Ukrainian forces had managed to secure control of the air in the Lyman area, denying Russia the use of its drones.
Ukrainian forces were then able to deploy their own drones to drop unmanned ground vehicles behind enemy lines to attack the Russian troops from behind, Bolder said, without endangering their own personnel.
"They put this together masterly," Bolder said.
For the Kremlin, "gaining the Donbas is very far away at the moment because the Ukrainians have come into better defendable positions now — which will make it harder for the Russians to try to do this again," he added.
A spokesperson for Russia's Embassy in London was not available to comment when contacted by CNBC on Friday.
'A powerful message to Moscow and Kyiv's partners'
Security experts made it clear that Ukraine's robot offensive should not be seen as a decisive breakthrough.
It does, however, send "a powerful message to Moscow and to Kyiv's partners that the highly innovative Ukrainian military remains capable of defeating Russia on the battlefield," according to David Kirichenko, an associate research fellow at the Henry Jackson Society, a U.K.-based national security think tank.
Ukrainian President Volodymyr Zelenskyy lauded the success of Ukraine's Third Army Corps when he met with soldiers carrying out the counteroffensive, describing the operation as "important in many ways" for Ukraine's defense overall, and the Donbas region especially.
"One particularly promising area now is replacing our warriors with ground robotic systems wherever possible," Zelenskyy said in a social media post on Sept. 30.
"During Vivaldi, this capability allowed us to accomplish many things. We will scale it up so that, more and more often, a drone rather than a warrior carries out the most dangerous tasks at the front," he added.
Russia has stepped up its attacks on Ukraine's capital and major cities in recent days, targeting data centers, communications and energy infrastructure as it seeks to disrupt the flow of information and force power cuts ahead of winter.
Ukrainian officials have expressed deep concern over the attacks, saying there is an urgent need for the country to be able to rapidly respond to missile and drone threats.
Ukraine, for its part, has sought to raise the cost of Russia's more than four-and-a-half-year war against it, targeting the country's oil refineries and logistics hubs.
'Changing the paradigm of modern warfare'
Robotic systems have become one of the key factors in Ukraine's counter-offensive operations, according to Serhii Kuzan, chairman of the Kyiv-based Ukrainian Security and Cooperation Center think tank.
"Their use has not only reduced the risks to personnel but has also changed the very logic of combat: where previously dozens or hundreds of soldiers were required, remotely controlled platforms are increasingly being deployed," Kuzan told CNBC by email.
"The experience of Operation 'Vivaldi' has demonstrated that the systematic replacement of human personnel with robots is changing the paradigm of modern warfare, enabling tasks to be carried out with minimal personnel losses."
Ultimately, Kuzan said Ukraine's counter-offensive in the Lyman area had been aimed at seizing the initiative on the battlefield, "which will ultimately force the Russian army to abandon the objectives set by its political leadership."
Ukrainian officials have reported that Russia's political leadership had previously set an objective to capture the Donetsk region by the end of the year, although the Russian military is said to now be seeking an extension to March next year.
"This is because, according to Ukrainian intelligence, on the main thrust directions of Kostiantynivka, Sloviansk and Kramatorsk, the Russian army is suffering its heaviest losses, accounting for 70–80 per cent of all casualties," Kuzan said.`,
    bodyJa: `A surprise Ukrainian robot offensive in the eastern Donbas region appears to have reversed over a year of Russian territorial gains, according to security experts, dealing a strategic blow to Russian President Vladimir Putin's territorial ambitions.
Details of the Ukrainian counteroffensive, dubbed "Operation Vivaldi," have started to come to light in recent weeks, offering rare insight into the fast-changing nature of frontline combat operations amid Russia's full-scale invasion.
As part of the ongoing operation, which started in May, security experts said Ukraine's Third Army Corps had been able to deploy large bomber drones and remote-controlled robots behind enemy lines around Lyman in the northern Donetsk Oblast, apparently catching Russian forces off guard.
Russian forces have been seeking to encircle Ukraine's so-called fortress belt cities that make up the remaining Ukrainian-held territory in the region for the past 12 months.
The third phase of Operation Vivaldi, however, liberated an additional 51 square kilometers, taking the total area of territory retaken to 176 square kilometers, Ukrainian Brigadier-General Andrii Biletskyi said on Sept. 28. The latest phase of fighting inflicted over 2,000 Russian losses, with over 250 Russian soldiers taken prisoner, he added.
The experience of Operation 'Vivaldi' has demonstrated that the systematic replacement of human personnel with robots is changing the paradigm of modern warfare.Serhii KuzanChairman of the Ukrainian Security and Cooperation Center
Patrick Bolder, a defense expert and strategic advisor at the Hague Center for Strategic Studies (HCSS), described the offensive as a "big bloody nose" to Putin's minimal war aim of seizing Ukraine's Donbas region.
Alongside demonstrating an ability to keep details of the operation secret, running disinformation campaigns against Russia and orchestrating a months-long air operation to disrupt logistical supplies to the frontline, Bolder said Ukrainian forces had managed to secure control of the air in the Lyman area, denying Russia the use of its drones.
Ukrainian forces were then able to deploy their own drones to drop unmanned ground vehicles behind enemy lines to attack the Russian troops from behind, Bolder said, without endangering their own personnel.
"They put this together masterly," Bolder said.
For the Kremlin, "gaining the Donbas is very far away at the moment because the Ukrainians have come into better defendable positions now — which will make it harder for the Russians to try to do this again," he added.
A spokesperson for Russia's Embassy in London was not available to comment when contacted by CNBC on Friday.
'A powerful message to Moscow and Kyiv's partners'
Security experts made it clear that Ukraine's robot offensive should not be seen as a decisive breakthrough.
It does, however, send "a powerful message to Moscow and to Kyiv's partners that the highly innovative Ukrainian military remains capable of defeating Russia on the battlefield," according to David Kirichenko, an associate research fellow at the Henry Jackson Society, a U.K.-based national security think tank.
Ukrainian President Volodymyr Zelenskyy lauded the success of Ukraine's Third Army Corps when he met with soldiers carrying out the counteroffensive, describing the operation as "important in many ways" for Ukraine's defense overall, and the Donbas region especially.
"One particularly promising area now is replacing our warriors with ground robotic systems wherever possible," Zelenskyy said in a social media post on Sept. 30.
"During Vivaldi, this capability allowed us to accomplish many things. We will scale it up so that, more and more often, a drone rather than a warrior carries out the most dangerous tasks at the front," he added.
Russia has stepped up its attacks on Ukraine's capital and major cities in recent days, targeting data centers, communications and energy infrastructure as it seeks to disrupt the flow of information and force power cuts ahead of winter.
Ukrainian officials have expressed deep concern over the attacks, saying there is an urgent need for the country to be able to rapidly respond to missile and drone threats.
Ukraine, for its part, has sought to raise the cost of Russia's more than four-and-a-half-year war against it, targeting the country's oil refineries and logistics hubs.
'Changing the paradigm of modern warfare'
Robotic systems have become one of the key factors in Ukraine's counter-offensive operations, according to Serhii Kuzan, chairman of the Kyiv-based Ukrainian Security and Cooperation Center think tank.
"Their use has not only reduced the risks to personnel but has also changed the very logic of combat: where previously dozens or hundreds of soldiers were required, remotely controlled platforms are increasingly being deployed," Kuzan told CNBC by email.
"The experience of Operation 'Vivaldi' has demonstrated that the systematic replacement of human personnel with robots is changing the paradigm of modern warfare, enabling tasks to be carried out with minimal personnel losses."
Ultimately, Kuzan said Ukraine's counter-offensive in the Lyman area had been aimed at seizing the initiative on the battlefield, "which will ultimately force the Russian army to abandon the objectives set by its political leadership."
Ukrainian officials have reported that Russia's political leadership had previously set an objective to capture the Donetsk region by the end of the year, although the Russian military is said to now be seeking an extension to March next year.
"This is because, according to Ukrainian intelligence, on the main thrust directions of Kostiantynivka, Sloviansk and Kramatorsk, the Russian army is suffering its heaviest losses, accounting for 70–80 per cent of all casualties," Kuzan said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/04/russia-ukraine-war-putin-zelenskyy-donbas-lyman.html",
    publishedAt: "2026-10-04T05:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "cornell-president-says-university-must-d-8c1678f5",
    title: "Cornell president says university 'must do better' after frat house rape allegations",
    titleJa: "Cornell president says university 'must do better' after frat house rape allegations",
    summaryJa: "Michael Kotlikoff described the allegations of a woman who says she was drugged and gang raped as \"deeply disturbing\".",
    bodyOriginal: `Cornell president says university 'must do better' after frat house rape allegations
- Published
Cornell University's president says the school "must do better" after a woman alleged she was drugged and raped by a group of men at a fraternity house.
In an eight-minute video statement released on Saturday night, Michael Kotlikoff described the allegations raised by the woman, identified as Jane Doe, as "deeply disturbing".
The alleged incident has raised questions around the culture on campus of drug and alcohol use, and the way investigations were conducted in the case, Kotlikoff said.
Jane Doe was a 20-year-old student at the university when she says seven men from its Chi Phi fraternity assaulted her for hours in an incident involving alcohol and the drug ketamine on 19 October 2024.
She said she had reported the incident two weeks after it happened to Cornell University police, which investigated, but no charges were laid.
Last month, Jane Doe filed a civil lawsuit against the Ivy League university, in which she alleged Cornell had failed to protect her or adequately punish the men involved.
Kotlikoff said Cornell was "committed to investigating" the way the case was handled, and said the school administration and community "must do better".
"We must foster a culture in which sexual assault is inexcusable and ensure our community is empowered and understands informed consent," he said.
He added that university leaders need to create an environment where victims of sexual assault "feel safe coming forward and are treated with compassion and dignity".
Kotlikoff said it is a "defining moment" in the university's history.
"We must lead the way, we owe it to Jane Doe and to survivors of assault to get this right. And we must keep each other safe," he said.
On the university's campus this week, the BBC saw growing frustration about the situation.
At a public hearing for students to speak about the alleged gang rape, many told the BBC they were ashamed of what happened and said the university had failed Jane Doe.
"Our administration needs to change and it needs to change drastically and it needs to change fast," one student told the BBC. "Something like this never should have happened, this is a disgrace."
As part of "broader work" that needs to happen, Kotlikoff said in his video statement that there should be a "serious look at the role of fraternities and sororities in campus life".
"Being part of a group can never diminish individual responsibility for our own actions, for how we treat others, or for speaking up when someone may be at risk," he said.
The university president also said that at the "appropriate time", the school would speak about how Cornell will "use this moment, this conversation, this anger, to help lead the broader effort to combat sexual assault not only on our campus, but beyond it".
New York Governor Kathy Hochul has said she was "deeply disturbed" by how the investigation was handled, and has appointed New York Attorney General Letitia James to lead a review of the case.
Kotlikoff said he supported the decision to appoint James to lead a criminal investigation, and welcomed an independent review by a law firm of how Cornell has handled the matter.
Jane Doe said in her lawsuit that she was intoxicated during the alleged incident and could not provide consent.
Related topics
- Published1 day ago`,
    bodyJa: `Cornell president says university 'must do better' after frat house rape allegations
- Published
Cornell University's president says the school "must do better" after a woman alleged she was drugged and raped by a group of men at a fraternity house.
In an eight-minute video statement released on Saturday night, Michael Kotlikoff described the allegations raised by the woman, identified as Jane Doe, as "deeply disturbing".
The alleged incident has raised questions around the culture on campus of drug and alcohol use, and the way investigations were conducted in the case, Kotlikoff said.
Jane Doe was a 20-year-old student at the university when she says seven men from its Chi Phi fraternity assaulted her for hours in an incident involving alcohol and the drug ketamine on 19 October 2024.
She said she had reported the incident two weeks after it happened to Cornell University police, which investigated, but no charges were laid.
Last month, Jane Doe filed a civil lawsuit against the Ivy League university, in which she alleged Cornell had failed to protect her or adequately punish the men involved.
Kotlikoff said Cornell was "committed to investigating" the way the case was handled, and said the school administration and community "must do better".
"We must foster a culture in which sexual assault is inexcusable and ensure our community is empowered and understands informed consent," he said.
He added that university leaders need to create an environment where victims of sexual assault "feel safe coming forward and are treated with compassion and dignity".
Kotlikoff said it is a "defining moment" in the university's history.
"We must lead the way, we owe it to Jane Doe and to survivors of assault to get this right. And we must keep each other safe," he said.
On the university's campus this week, the BBC saw growing frustration about the situation.
At a public hearing for students to speak about the alleged gang rape, many told the BBC they were ashamed of what happened and said the university had failed Jane Doe.
"Our administration needs to change and it needs to change drastically and it needs to change fast," one student told the BBC. "Something like this never should have happened, this is a disgrace."
As part of "broader work" that needs to happen, Kotlikoff said in his video statement that there should be a "serious look at the role of fraternities and sororities in campus life".
"Being part of a group can never diminish individual responsibility for our own actions, for how we treat others, or for speaking up when someone may be at risk," he said.
The university president also said that at the "appropriate time", the school would speak about how Cornell will "use this moment, this conversation, this anger, to help lead the broader effort to combat sexual assault not only on our campus, but beyond it".
New York Governor Kathy Hochul has said she was "deeply disturbed" by how the investigation was handled, and has appointed New York Attorney General Letitia James to lead a review of the case.
Kotlikoff said he supported the decision to appoint James to lead a criminal investigation, and welcomed an independent review by a law firm of how Cornell has handled the matter.
Jane Doe said in her lawsuit that she was intoxicated during the alleged incident and could not provide consent.
Related topics
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckly0leelnz4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-04T00:11:25+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1acd/live/708a4390-bf7e-11f1-9b0d-03ed169a0cab.jpg",
    readTime: 8,
  },
  {
    id: "the-government-can-take-15-of-social-sec-cf2759ae",
    title: "The government can take 15% of Social Security benefits to repay student loans. These proposals seek to stop it.",
    titleJa: "The government can take 15% of Social Security benefits to repay student loans. These proposals seek to stop it.",
    summaryJa: "Debt among older Americans is rising, both in terms of the number of older households carrying debt and the amount borrowed.",
    bodyOriginal: `Debt among older Americans is rising, both in terms of the number of older households carrying debt and the amount borrowed.`,
    bodyJa: `Debt among older Americans is rising, both in terms of the number of older households carrying debt and the amount borrowed.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-government-can-take-15-of-social-security-benefits-to-repay-student-loans-these-proposals-seek-to-stop-it-102622fa?mod=mw_rss_topstories",
    publishedAt: "2026-10-04T00:02:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-39540591",
    readTime: 2,
  },
  {
    id: "trump-taps-director-of-national-intellig-f3ca179e",
    title: "Trump taps Director of National Intelligence Jay Clayton as AI czar: WSJ reports",
    titleJa: "Trump taps Director of National Intelligence Jay Clayton as AI czar: WSJ reports",
    summaryJa: "Director of National Intelligence Jay Clayton will lead the administration's AI policy, The Wall Street Journal reported on Saturday.",
    bodyOriginal: `Director of National Intelligence Jay Clayton has been chosen as the Trump administration's new AI czar, leading its response to artificial intelligence amid growing concerns about the risks of this rapidly evolving technology, The Wall Street Journal reported on Saturday.
Clayton told the Journal he will lead a new White House task force, which will have 120 days to research and report on AI's risks and opportunities, and offer recommendations on the federal government's responsibilities regarding the new technology.
"The president asked that a group be put together that was going to ensure exactly what he said, which is that we stay the leaders in superintelligence, and that the interests of the American people are put first," Clayton said, the Journal reported.
The group will be called the "Super Intelligence Force," or SI — the term President Donald Trump prefers over AI — and Clayton will effectively become the new AI czar, the Journal said, citing a senior White House official.
The White House did not immediately respond to a CNBC request for comment.
In September, Trump announced in a Truth Social post that he would create a new "AI Force" to help facilitate the industry and root out bad actors.
"We will not in any way hinder or stifle the Growth of this incredible Industry. Rather, we will cherish it, help it, and watch over it, as it grows!" Trump said the post, which also announced plans to hire an AI czar.
"Only High I.Q. individuals need apply!" the president added.
Clayton is a former chair of the Securities and Exchange Commission and U.S. attorney for the Southern District of New York. The Senate confirmed him in July as DNI, giving him authority over 18 U.S. intelligence agencies.
The announcement comes days after AI industry leaders met with Trump and House Speaker Mike Johnson at the White House. The AI developers signed onto an agreement of voluntary safety standards that Trump said was "morally binding."
Despite dire warnings from within the industry and calls from AI leaders Anthropic CEO Dario Amodei and OpenAI CEO Sam Altman for federal guardrails on frontier AI models, Trump has so far opposed regulation.
In the same September post, Trump suggested AI fears were a hoax and blamed "Radical Left Dumocrats."
Venture capitalist David Sacks had previously served as AI and crypto czar under Trump, but in March said that his time as a special government employee had ended. Sacks is co-chair of the President's Council of Advisors on Science and Technology, a federal advisory committee made up of outside experts on technology, scientific research and innovation policy.`,
    bodyJa: `Director of National Intelligence Jay Clayton has been chosen as the Trump administration's new AI czar, leading its response to artificial intelligence amid growing concerns about the risks of this rapidly evolving technology, The Wall Street Journal reported on Saturday.
Clayton told the Journal he will lead a new White House task force, which will have 120 days to research and report on AI's risks and opportunities, and offer recommendations on the federal government's responsibilities regarding the new technology.
"The president asked that a group be put together that was going to ensure exactly what he said, which is that we stay the leaders in superintelligence, and that the interests of the American people are put first," Clayton said, the Journal reported.
The group will be called the "Super Intelligence Force," or SI — the term President Donald Trump prefers over AI — and Clayton will effectively become the new AI czar, the Journal said, citing a senior White House official.
The White House did not immediately respond to a CNBC request for comment.
In September, Trump announced in a Truth Social post that he would create a new "AI Force" to help facilitate the industry and root out bad actors.
"We will not in any way hinder or stifle the Growth of this incredible Industry. Rather, we will cherish it, help it, and watch over it, as it grows!" Trump said the post, which also announced plans to hire an AI czar.
"Only High I.Q. individuals need apply!" the president added.
Clayton is a former chair of the Securities and Exchange Commission and U.S. attorney for the Southern District of New York. The Senate confirmed him in July as DNI, giving him authority over 18 U.S. intelligence agencies.
The announcement comes days after AI industry leaders met with Trump and House Speaker Mike Johnson at the White House. The AI developers signed onto an agreement of voluntary safety standards that Trump said was "morally binding."
Despite dire warnings from within the industry and calls from AI leaders Anthropic CEO Dario Amodei and OpenAI CEO Sam Altman for federal guardrails on frontier AI models, Trump has so far opposed regulation.
In the same September post, Trump suggested AI fears were a hoax and blamed "Radical Left Dumocrats."
Venture capitalist David Sacks had previously served as AI and crypto czar under Trump, but in March said that his time as a special government employee had ended. Sacks is co-chair of the President's Council of Advisors on Science and Technology, a federal advisory committee made up of outside experts on technology, scientific research and innovation policy.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/03/trump-jay-clayton-ai-czar.html",
    publishedAt: "2026-10-03T23:37:23+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "my-wife-never-went-back-to-work-after-ra-43b2408c",
    title: "My wife never went back to work after raising our kids. Do I have to share my retirement savings 50/50?",
    titleJa: "My wife never went back to work after raising our kids. Do I have to share my retirement savings 50/50?",
    summaryJa: "“For 14 years I have gotten up every morning and gone to work while she has been free to pursue whatever interested her.”",
    bodyOriginal: `“For 14 years I have gotten up every morning and gone to work while she has been free to pursue whatever interested her.”`,
    bodyJa: `“For 14 years I have gotten up every morning and gone to work while she has been free to pursue whatever interested her.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-wife-never-went-back-to-work-after-raising-our-kids-do-i-have-to-share-my-retirement-savings-50-50-f0727f82?mod=mw_rss_topstories",
    publishedAt: "2026-10-03T20:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-90549274",
    readTime: 2,
  },
  {
    id: "these-bond-strategies-can-help-you-get-a-a7daa36d",
    title: "These bond strategies can help you get a safe 5% return on your cash",
    titleJa: "These bond strategies can help you get a safe 5% return on your cash",
    summaryJa: "With U.S. Treasury yields on the rise, financial planners say they’re seeing a growing interest in bonds, especially among investors looking to secure fixed income in retirement.",
    bodyOriginal: `With U.S. Treasury yields on the rise, financial planners say they’re seeing a growing interest in bonds, especially among investors looking to secure fixed income in retirement.`,
    bodyJa: `With U.S. Treasury yields on the rise, financial planners say they’re seeing a growing interest in bonds, especially among investors looking to secure fixed income in retirement.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/these-bond-strategies-can-help-you-get-a-safe-5-return-on-your-cash-5fa45ccd?mod=mw_rss_topstories",
    publishedAt: "2026-10-03T18:49:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-29477851",
    readTime: 2,
  },
  {
    id: "tennessee-prison-chief-to-resign-after-c-2ef41b7a",
    title: "Tennessee prison chief to resign after Christa Pike's failed execution",
    titleJa: "Tennessee prison chief to resign after Christa Pike's failed execution",
    summaryJa: "Pike's lawyers said the failure \"goes far beyond any one person\". Pike is in critical condition after surviving two lethal injections.",
    bodyOriginal: `Tennessee prison chief to resign after Christa Pike's failed execution
- Published
The head of prisons in the US state of Tennessee is resigning after the failed execution of death row inmate Christa Pike on Wednesday.
Governor Bill Lee announced the change on Saturday, sharing the news in a joint statement with Tennessee Department of Correction Commissioner Frank Strada.
Strada said that his stepping down is "in the best interests" of the state, and called the ongoing investigation into the incident "entirely appropriate and necessary".
Pike, who was sentenced to death in 1996 for the murder of Colleen Slemmer, survived two injections and is now in critical condition at a Tennessee hospital as her lawyers seek to commute her sentence.
"Commissioner Strada has served with integrity, and I appreciate his willingness to put the interests of Tennesseans first during this difficult moment," Lee said.
Lee has ordered an independent review into Pike's attempted execution and he halted all executions in the state for the year.
Attorney's for Pike called the resignation "justified" but said "it does nothing to help Christa now".
"What happened to her Wednesday reflects a systemic failure that goes far beyond any one person," Pike's legal team wrote in a statement. "We hope the Governor's call for a full, independent review will expose the profound problems within Tennessee's entire death penalty system."
Pike is being treated at a hospital in Nashville, Tennessee, where doctors are attempting to clear the drugs used during the execution from her body, according to legal filings.
She was injected with two lethal doses of pentobarbital on Wednesday but remained alive. She was then sent to hospital in an ambulance. While receiving the two doses, "she could be heard crying, whimpering, and breathing loudly throughout the procedure", her lawyers said.
As of Thursday night, she was unconscious, intubated and on a ventilator.
The state's Department of Correction has defended the method it used, saying "the protocol does not allow for additional procedures beyond what was carried out".
Authorities have not yet said whether they will try again to execute Pike. They have also not offered an explanation for what went wrong. Her lawyers filed an emergency motion on Friday to preserve "any and all evidence" related to her failed execution.
Pike's attorneys previously warned that her medical history and anatomy - including thrombocytosis (a blood-clotting condition) and small veins - meant there was a risk she would experience "unnecessary" pain and suffering during a lethal injection.
The attempted execution went ahead after multiple failed, last-minute legal challenges by Pike's lawyers.
The US Supreme Court rejected two separate efforts to stop the lethal injection.
Tennessee's governor also denied a clemency request from Pike, the only woman on the state's death row.
Pike was 18 when she and her then-boyfriend, Tadaryl Shipp, beat, tortured and killed 19-year-old Slemmer in 1995.
She was sentenced to death the following year after a media frenzy around the killing in Knoxville, Tennessee.
Related topics
- Published3 hours ago
- Published10 hours ago
- Published1 day ago`,
    bodyJa: `Tennessee prison chief to resign after Christa Pike's failed execution
- Published
The head of prisons in the US state of Tennessee is resigning after the failed execution of death row inmate Christa Pike on Wednesday.
Governor Bill Lee announced the change on Saturday, sharing the news in a joint statement with Tennessee Department of Correction Commissioner Frank Strada.
Strada said that his stepping down is "in the best interests" of the state, and called the ongoing investigation into the incident "entirely appropriate and necessary".
Pike, who was sentenced to death in 1996 for the murder of Colleen Slemmer, survived two injections and is now in critical condition at a Tennessee hospital as her lawyers seek to commute her sentence.
"Commissioner Strada has served with integrity, and I appreciate his willingness to put the interests of Tennesseans first during this difficult moment," Lee said.
Lee has ordered an independent review into Pike's attempted execution and he halted all executions in the state for the year.
Attorney's for Pike called the resignation "justified" but said "it does nothing to help Christa now".
"What happened to her Wednesday reflects a systemic failure that goes far beyond any one person," Pike's legal team wrote in a statement. "We hope the Governor's call for a full, independent review will expose the profound problems within Tennessee's entire death penalty system."
Pike is being treated at a hospital in Nashville, Tennessee, where doctors are attempting to clear the drugs used during the execution from her body, according to legal filings.
She was injected with two lethal doses of pentobarbital on Wednesday but remained alive. She was then sent to hospital in an ambulance. While receiving the two doses, "she could be heard crying, whimpering, and breathing loudly throughout the procedure", her lawyers said.
As of Thursday night, she was unconscious, intubated and on a ventilator.
The state's Department of Correction has defended the method it used, saying "the protocol does not allow for additional procedures beyond what was carried out".
Authorities have not yet said whether they will try again to execute Pike. They have also not offered an explanation for what went wrong. Her lawyers filed an emergency motion on Friday to preserve "any and all evidence" related to her failed execution.
Pike's attorneys previously warned that her medical history and anatomy - including thrombocytosis (a blood-clotting condition) and small veins - meant there was a risk she would experience "unnecessary" pain and suffering during a lethal injection.
The attempted execution went ahead after multiple failed, last-minute legal challenges by Pike's lawyers.
The US Supreme Court rejected two separate efforts to stop the lethal injection.
Tennessee's governor also denied a clemency request from Pike, the only woman on the state's death row.
Pike was 18 when she and her then-boyfriend, Tadaryl Shipp, beat, tortured and killed 19-year-old Slemmer in 1995.
She was sentenced to death the following year after a media frenzy around the killing in Knoxville, Tennessee.
Related topics
- Published3 hours ago
- Published10 hours ago
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8zxl62yzxzxo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-03T17:48:42+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a5d3/live/7d12d1b0-bf45-11f1-babe-4199b0e7ccea.jpg",
    readTime: 8,
  },
  {
    id: "a-tough-job-market-is-pushing-more-young-331db558",
    title: "A tough job market is pushing more young Americans to make a big bet: on themselves",
    titleJa: "A tough job market is pushing more young Americans to make a big bet: on themselves",
    summaryJa: "There has been a rise in entrepreneurship among young Americans as the entry-level labor market has become tougher to join.",
    bodyOriginal: `There has been a rise in entrepreneurship among young Americans as the entry-level labor market has become tougher to join.`,
    bodyJa: `There has been a rise in entrepreneurship among young Americans as the entry-level labor market has become tougher to join.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/a-tough-job-market-is-pushing-more-young-americans-to-make-a-big-bet-on-themselves-1aaddeca?mod=mw_rss_topstories",
    publishedAt: "2026-10-03T17:24:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-69217223",
    readTime: 2,
  },
  {
    id: "switching-jobs-to-get-higher-pay-works-b-5ded3ff1",
    title: "Switching jobs to get higher pay works best in these industries",
    titleJa: "Switching jobs to get higher pay works best in these industries",
    summaryJa: "Finding a new job is one way to get a pay increase at a time when inflation has been outpacing wage growth.",
    bodyOriginal: `Finding a new job is one way to get a pay increase at a time when inflation has been outpacing wage growth.`,
    bodyJa: `Finding a new job is one way to get a pay increase at a time when inflation has been outpacing wage growth.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-best-industry-to-change-jobs-to-get-paid-more-money-and-the-worst-ae33a3a7?mod=mw_rss_topstories",
    publishedAt: "2026-10-03T16:42:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-43794673",
    readTime: 2,
  },
  {
    id: "i-have-400-000-in-equity-i-m-80-should-134693ef",
    title: "‘I have $400,000 in equity’: I’m 80. Should I sell my house because of dangerous stairs — or spend thousands renovating?",
    titleJa: "‘I have $400,000 in equity’: I’m 80. Should I sell my house because of dangerous stairs — or spend thousands renovating?",
    summaryJa: "“Generally, the advice I’ve read says not to sell because I have a low-interest-rate mortgage.”",
    bodyOriginal: `“Generally, the advice I’ve read says not to sell because I have a low-interest-rate mortgage.”`,
    bodyJa: `“Generally, the advice I’ve read says not to sell because I have a low-interest-rate mortgage.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-have-a-low-interest-rate-im-80-years-old-should-i-move-out-of-my-house-because-of-dangerous-stairs-389c3c7b?mod=mw_rss_topstories",
    publishedAt: "2026-10-03T16:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-02929527",
    readTime: 2,
  },
  {
    id: "medical-plane-with-6-on-board-missing-of-2b6709c3",
    title: "Medical plane with 6 on board missing off Massachusetts coast",
    titleJa: "Medical plane with 6 on board missing off Massachusetts coast",
    summaryJa: "The aircraft lost communication with flight controllers after significantly dropping in altitude, according to flight data.",
    bodyOriginal: `Medical plane with 6 on board missing off Massachusetts coast
- Published
US authorities are searching for six people after a medical plane bound for Boston, Massachusetts went missing early Saturday morning.
The Federal Aviation Administration told the BBC that it lost contact with the Gulfstream G-100 plane and put out a search and rescue notice just after 1:00 local time (6:00 GMT).
An air and water search is underway off the coast of Nantucket, a Massachusetts island, according to the US Coast Guard's Northeast District.
The plane departed from Bermuda's L.F. Wade International Airport at 23:40 local time, according to flight data from FlightAware, and was slated to land at Boston's Logan International at 1:30 EDT (6:30 GMT).
According to the tail number released by the Coast Guard, the plane belonged to Latitude Air Ambulances, a company that provides international medical flights for patients returning home.
FlightAware's tracker shows the aircraft significantly dropped in altitude before its communications went dark, plummeting from around 7,300m (24,000ft) to 3,300m (11,000ft).`,
    bodyJa: `Medical plane with 6 on board missing off Massachusetts coast
- Published
US authorities are searching for six people after a medical plane bound for Boston, Massachusetts went missing early Saturday morning.
The Federal Aviation Administration told the BBC that it lost contact with the Gulfstream G-100 plane and put out a search and rescue notice just after 1:00 local time (6:00 GMT).
An air and water search is underway off the coast of Nantucket, a Massachusetts island, according to the US Coast Guard's Northeast District.
The plane departed from Bermuda's L.F. Wade International Airport at 23:40 local time, according to flight data from FlightAware, and was slated to land at Boston's Logan International at 1:30 EDT (6:30 GMT).
According to the tail number released by the Coast Guard, the plane belonged to Latitude Air Ambulances, a company that provides international medical flights for patients returning home.
FlightAware's tracker shows the aircraft significantly dropped in altitude before its communications went dark, plummeting from around 7,300m (24,000ft) to 3,300m (11,000ft).`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cme3x85013llo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-03T15:56:14+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5084/live/3748e6a0-bf41-11f1-8acc-0bb5649ca116.jpg",
    readTime: 3,
  },
  {
    id: "the-no-1-mistake-beginners-make-with-tra-a7684128",
    title: "The No. 1 mistake beginners make with travel cards, according to The Points Guy",
    titleJa: "The No. 1 mistake beginners make with travel cards, according to The Points Guy",
    summaryJa: "The Points Guy’s Brian Kelly gave me a crash course in annual fees and redemptions to offset rising travel costs",
    bodyOriginal: `The Points Guy’s Brian Kelly gave me a crash course in annual fees and redemptions to offset rising travel costs`,
    bodyJa: `The Points Guy’s Brian Kelly gave me a crash course in annual fees and redemptions to offset rising travel costs`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-no-1-mistake-beginners-make-with-travel-cards-according-to-the-points-guy-3502e859?mod=mw_rss_topstories",
    publishedAt: "2026-10-03T15:42:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-41556362",
    readTime: 2,
  },
  {
    id: "protesters-across-spain-demand-action-ov-22a3a70f",
    title: "Protesters across Spain demand action over housing crisis",
    titleJa: "Protesters across Spain demand action over housing crisis",
    summaryJa: "More than 50 protests are taking place on Saturday after the government failed to get emergency legislation through parliament.",
    bodyOriginal: `Protesters across Spain demand action over housing crisis
- Published
Thousands of protesters have taken to the streets across Spain calling for greater protections for tenants after the government failed to get emergency housing legislation through parliament on Friday.
About 50 planned marches are taking place on Saturday in cities including Madrid, Valencia and Barcelona .
"There is a lot of anger in the streets," said a spokesperson for the Valencia Tenants' Union, where a demonstration has already started. Clashes have taken place between some protesters and police in the city.
The measures put forward by Pedro Sánchez's leftist coalition government on Friday followed public outcry over the eviction of an 87-year-old woman from her home last month after she was unable to afford a sharp rent increase.
Her eviction triggered nationwide protests across Spain with protesters demanding lower rents, an end to evictions, and a ban on investment funds - or "vulture funds" as the government has termed them - buying property.
Sanchez's defeat in Congress on Friday heightens speculation that he might call an early general election, which was not due until next summer.
His coalition government, made up of his ruling Socialist party and junior partner the Sumar alliance, does not command a majority in parliament.
Photographs showed protesters in the east coast city of Valencia clashing with police officers on Saturday near arts centre Palau de les Arts Reina Sofía, which was hosting a real estate summit.
Several protesters removed barriers and threw objects at officers, who responded with rubber bullets, Spanish media reported.
One of the biggest demonstration is happening in the capital, Madrid. Estimates of the number of participants varied widely, with the city's Tenants' Union putting it at 500,000, while government officials put the figure at 70,000.
Demonstrators have been camping in one of the city's main squares, Puerta del Sol, for days.
One protester, David, told Spanish public broadcaster RTVE ahead of the protest: "We're not here for pleasure or comfort. We're here out of conviction."
On Friday night, Madrid's Tenants' Union said that although the government's proposed measures were insufficient, the rejection of the proposed legislation "exacerbates the housing crisis which is costing the working class their lives".
It is calling for a general strike over the housing crisis.
The legislation put forward in Congress on Friday was divided into two separate decrees.
The first decree included the suspension of evictions of vulnerable tenants until 2030, a two-year extension to rental leases due to expire before 2028, tax increases for tourist apartments, and a restriction on the purchase of residential properties by so-called "vulture funds".
The second decree included the automatic renewal of rental contracts, a major demand of many on the left and the Tenants' Union.
MPs rejected the first decree by 178 votes to 172 and voted against the second by 184 to 166.
Prior to the vote, the conservative People's Party (PP) and far-right Vox had already said they would vote against both initiatives, leaving the minority government depending on the support of smaller nationalist parties in Catalonia and the Basque Country.
However, by the eve of the parliamentary session, the centre-right, pro-independence Together for Catalonia (JxCat) had signalled its opposition to both laws, condemning them to failure.
Sánchez's ruling coalition hurriedly drew up the decree laws in an effort to defuse the housing protests that were sparked when 87-year-old Maricarmen Abascal was evicted in September.
The social backlash led to the company that owns Abascal's flat, Urbagestión, negotiating her return to the flat on a low rent. However, protests have continued.
Dramatic eviction of woman aged 87 highlights Spain's housing shortage
- Published23 September
The Bank of Spain estimates the country is short of 700,000 homes, based on the gap between demand and new construction.
House prices have risen by 12.2% in the past year, according to figures for the second quarter of 2026 from national statistics institute INE.
The shortage in rental housing means that costs rose by 8.5% in 2025, according to real estate firm Idealista, with Madrid alone seeing an increase of 9.7% in rents.
It said Barcelona and Madrid were Spain's most expensive cities to rent a home, at €23.80 per square metre and €22.70 per square metre respectively.`,
    bodyJa: `Protesters across Spain demand action over housing crisis
- Published
Thousands of protesters have taken to the streets across Spain calling for greater protections for tenants after the government failed to get emergency housing legislation through parliament on Friday.
About 50 planned marches are taking place on Saturday in cities including Madrid, Valencia and Barcelona .
"There is a lot of anger in the streets," said a spokesperson for the Valencia Tenants' Union, where a demonstration has already started. Clashes have taken place between some protesters and police in the city.
The measures put forward by Pedro Sánchez's leftist coalition government on Friday followed public outcry over the eviction of an 87-year-old woman from her home last month after she was unable to afford a sharp rent increase.
Her eviction triggered nationwide protests across Spain with protesters demanding lower rents, an end to evictions, and a ban on investment funds - or "vulture funds" as the government has termed them - buying property.
Sanchez's defeat in Congress on Friday heightens speculation that he might call an early general election, which was not due until next summer.
His coalition government, made up of his ruling Socialist party and junior partner the Sumar alliance, does not command a majority in parliament.
Photographs showed protesters in the east coast city of Valencia clashing with police officers on Saturday near arts centre Palau de les Arts Reina Sofía, which was hosting a real estate summit.
Several protesters removed barriers and threw objects at officers, who responded with rubber bullets, Spanish media reported.
One of the biggest demonstration is happening in the capital, Madrid. Estimates of the number of participants varied widely, with the city's Tenants' Union putting it at 500,000, while government officials put the figure at 70,000.
Demonstrators have been camping in one of the city's main squares, Puerta del Sol, for days.
One protester, David, told Spanish public broadcaster RTVE ahead of the protest: "We're not here for pleasure or comfort. We're here out of conviction."
On Friday night, Madrid's Tenants' Union said that although the government's proposed measures were insufficient, the rejection of the proposed legislation "exacerbates the housing crisis which is costing the working class their lives".
It is calling for a general strike over the housing crisis.
The legislation put forward in Congress on Friday was divided into two separate decrees.
The first decree included the suspension of evictions of vulnerable tenants until 2030, a two-year extension to rental leases due to expire before 2028, tax increases for tourist apartments, and a restriction on the purchase of residential properties by so-called "vulture funds".
The second decree included the automatic renewal of rental contracts, a major demand of many on the left and the Tenants' Union.
MPs rejected the first decree by 178 votes to 172 and voted against the second by 184 to 166.
Prior to the vote, the conservative People's Party (PP) and far-right Vox had already said they would vote against both initiatives, leaving the minority government depending on the support of smaller nationalist parties in Catalonia and the Basque Country.
However, by the eve of the parliamentary session, the centre-right, pro-independence Together for Catalonia (JxCat) had signalled its opposition to both laws, condemning them to failure.
Sánchez's ruling coalition hurriedly drew up the decree laws in an effort to defuse the housing protests that were sparked when 87-year-old Maricarmen Abascal was evicted in September.
The social backlash led to the company that owns Abascal's flat, Urbagestión, negotiating her return to the flat on a low rent. However, protests have continued.
Dramatic eviction of woman aged 87 highlights Spain's housing shortage
- Published23 September
The Bank of Spain estimates the country is short of 700,000 homes, based on the gap between demand and new construction.
House prices have risen by 12.2% in the past year, according to figures for the second quarter of 2026 from national statistics institute INE.
The shortage in rental housing means that costs rose by 8.5% in 2025, according to real estate firm Idealista, with Madrid alone seeing an increase of 9.7% in rents.
It said Barcelona and Madrid were Spain's most expensive cities to rent a home, at €23.80 per square metre and €22.70 per square metre respectively.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm2kej47095no?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-03T13:34:11+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/225b/live/a58f5d00-bf24-11f1-bc2e-018d645d8d21.jpg",
    readTime: 10,
  },
  {
    id: "novig-credits-sydney-sweeney-backed-camp-ca4c61bc",
    title: "Novig credits Sydney Sweeney-backed campaign for platform’s surge in growth",
    titleJa: "Novig credits Sydney Sweeney-backed campaign for platform’s surge in growth",
    summaryJa: "Novig's \"Just Sports\" campaign drew backlash from some female athletes but also brought in a rush of trading volume.",
    bodyOriginal: `How can a nascent prediction market company gain traction against established competitors like Kalshi and Polymarket? Bring in Hollywood's Sydney Sweeney.
The 29-year-old actress starred in Novig's "Just Sports" racy ad campaign in which she highlighted the prediction platform's focus on sports event contracts. Novig launched as a federally regulated prediction market in early August and unveiled its provocative ad on Sept. 9.
"No betting on wars or deaths, and no politics," Sweeney said in the campaign video, explaining how Novig avoids offering event contracts related to these topics. That feature motivated the actress to approach Novig about taking an equity stake in the company, said Jacob Fortinsky, the company's co-founder. The company did not respond to a question on the size of the star's stake.
Between 20 days before and after the campaign launch, Novig's trading volume soared by nearly 94% and first-time depositors surged by more than 218%, Fortinsky exclusively shared with CNBC.
Active users also climbed 96% month over month and 260% year over year in September while app downloads jumped by more than 187%. Fortinsky said he did not expect the ad, along with the official start of the NFL season, to draw in this much volume and this many first-time users.
Backlash against 'Just Sports' ad
Those numbers came with a catch. How Sweeney relayed the platform's message drew backlash from some female athletes, who said that the advertisement hurt progress on the perception of women in sports.
Fortinsky said the ad's purpose was not about representing female athletes but to drill down what Novig provides. He added he respected the opinions circulated around the advertisement and highlighted he and the Novig team are fans of women's sports.
"Ultimately, I think we have nothing to apologize for and are very proud of the work that we did," Fortinsky said. "We honestly were very happy with … how positive the overall reception of the campaign was."
The Sydney Sweeney ad is not the first time the platform made headlines. Shortly after Novig launched, the company slapped multiple states with lawsuits, asserting states cannot regulate the platform's sports event contracts. Further, Novig only allows users aged 21 years and over on its platform, even as it may lose revenue by limiting its user base. Kalshi and Polymarket U.S. allow users above age 18.
These business decisions tie back to the company's culture of taking leaps in a fast-paced industry, Fortinsky said.
"We have to be willing to take outsized risk relative to the size of the company, doing that in a responsible way, of course," he said. "I think we will continue to embody that aggressive risk-taking culture."
The company is raising funding at a $2 billion valuation, The Wall Street Journal reported. In February, Novig raised a $75 million Series B, which valued the company at $500 million, Forbes reported. Novig did not comment on how much capital it will raise in this new round, nor did it share which investors are participating.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `How can a nascent prediction market company gain traction against established competitors like Kalshi and Polymarket? Bring in Hollywood's Sydney Sweeney.
The 29-year-old actress starred in Novig's "Just Sports" racy ad campaign in which she highlighted the prediction platform's focus on sports event contracts. Novig launched as a federally regulated prediction market in early August and unveiled its provocative ad on Sept. 9.
"No betting on wars or deaths, and no politics," Sweeney said in the campaign video, explaining how Novig avoids offering event contracts related to these topics. That feature motivated the actress to approach Novig about taking an equity stake in the company, said Jacob Fortinsky, the company's co-founder. The company did not respond to a question on the size of the star's stake.
Between 20 days before and after the campaign launch, Novig's trading volume soared by nearly 94% and first-time depositors surged by more than 218%, Fortinsky exclusively shared with CNBC.
Active users also climbed 96% month over month and 260% year over year in September while app downloads jumped by more than 187%. Fortinsky said he did not expect the ad, along with the official start of the NFL season, to draw in this much volume and this many first-time users.
Backlash against 'Just Sports' ad
Those numbers came with a catch. How Sweeney relayed the platform's message drew backlash from some female athletes, who said that the advertisement hurt progress on the perception of women in sports.
Fortinsky said the ad's purpose was not about representing female athletes but to drill down what Novig provides. He added he respected the opinions circulated around the advertisement and highlighted he and the Novig team are fans of women's sports.
"Ultimately, I think we have nothing to apologize for and are very proud of the work that we did," Fortinsky said. "We honestly were very happy with … how positive the overall reception of the campaign was."
The Sydney Sweeney ad is not the first time the platform made headlines. Shortly after Novig launched, the company slapped multiple states with lawsuits, asserting states cannot regulate the platform's sports event contracts. Further, Novig only allows users aged 21 years and over on its platform, even as it may lose revenue by limiting its user base. Kalshi and Polymarket U.S. allow users above age 18.
These business decisions tie back to the company's culture of taking leaps in a fast-paced industry, Fortinsky said.
"We have to be willing to take outsized risk relative to the size of the company, doing that in a responsible way, of course," he said. "I think we will continue to embody that aggressive risk-taking culture."
The company is raising funding at a $2 billion valuation, The Wall Street Journal reported. In February, Novig raised a $75 million Series B, which valued the company at $500 million, Forbes reported. Novig did not comment on how much capital it will raise in this new round, nor did it share which investors are participating.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/03/novig-credits-sydney-sweeney-backed-campaign-for-platforms-surge-in-growth.html",
    publishedAt: "2026-10-03T13:30:48+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 8,
  },
  {
    id: "russia-hits-second-major-bridge-in-ukrai-82cec52a",
    title: "Russia hits second major bridge in Ukraine's capital Kyiv",
    titleJa: "Russia hits second major bridge in Ukraine's capital Kyiv",
    summaryJa: "The strike on the Pivnichnyi (Northern) Bridge comes after repeat attacks on another major bridge in Ukraine's capital.",
    bodyOriginal: `Russia hits second major bridge in Ukraine's capital Kyiv
- Published
A Russian strike has hit a second major bridge in Kyiv, Mayor Vitaliy Klitschko has said, as Moscow ramps up attacks on critical infrastructure in Ukraine's capital.
The attack on Saturday morning injured two people, and damaged the road surface and overhead trolleybus wires on the Pivnichnyi (Northern) Bridge, Klitschko said, causing traffic jams.
It comes after the Pivdennyi (Southern) Bridge was hit multiple times by Russian drones this week, with Klitschko warning that "the enemy is tearing Kyiv apart".
Russia said its drones had hit the two bridges used to transfer Ukrainian troops and military cargo. Moscow again urged foreign citizens, including diplomats, to leave Kyiv.
The two Kyiv bridges across the Dnipro River link the western and eastern parts of the capital and had not been hit before Thursday.
The Russian strikes have severed road, rail and trolleybus links across the wide river. The ongoing drone threat means restrictions on other routes, bringing traffic jams to the city's roads for a second day - though Friday's gridlock has not been repeated to the same level.
Many of the city's residents - which number about three million - rely on the metro to travel across the city every day. The fear is this new Russian tactic will result in sustained attacks which could effectively cut the city in two.
Writing on Telegram on Saturday morning, Klitschko said "emergency services are on their way" after the Pivnichnyi Bridge was hit.
"Traffic on the bridge from the left to the right bank is currently blocked," he added.
Earlier attacks on the Pivdennyi Bridge prompted Kyiv's defence council to hold a crisis meeting on Friday.
Klitschko warned afterwards that the city was now in a "very dramatic situation" as Moscow was battering its "critical infrastructure, logistics, housing" and other key facilities.
Experts say Russian drones are unlikely to bring down the bridges - but repeated attacks will force their closure and risk weakening their structure, making them unusable.
More powerful weapons could collapse the bridges, some of which are reported to be in poor condition after years carrying heavier traffic than they were designed for.
It was reported that Ukrainian lawmakers discussed the state of Kyiv's bridges in a recent meeting, setting out contingency plans to use ferries or temporary pontoon bridges to keep the city connected in the event of any bridges being destroyed.
Russian President Vladimir Putin has said Russia is acting in response to Ukraine's strikes on Russian energy facilities, despite the fact that it was Moscow that had first launched such attacks.
After the Pivdennyi Bridge was attacked, passengers described how dust from a blast wave entered their carriage through the ventilation system.
Ukrainian President Volodymyr Zelensky said Putin had decided that there were "no rules now" when attacking Ukraine.
In an interview with the Financial Times, he said: "The Russians have failed to occupy us. So now they are carrying out massive attacks and mass killings."
He added: "They want to destroy our bridges... our data centres, the internet, mobile networks, hospitals, kindergartens, schools, universities - everything. They want people to flee their cities."
Putin on Thursday insisted that Russia's attacks on Ukrainian economic targets were a direct response to Ukraine's strikes on Russia's oil refineries and its ships in the Black Sea.
"Now from every direction we're receiving calls 'let's stop'. But they started it," Putin said after a wide-ranging speech at the Valdai foreign policy forum.
The Kremlin leader admitted Kyiv had "got some results" from its refinery attacks and Russia had lost about 1% of its GDP. Ukraine maintains it began attacking Russian oil infrastructure because it helps the Kremlin finance the war.
Russia has targeted Ukrainian energy infrastructure, ramping up attacks every winter since Putin launched a full-scale invasion in February 2022.
In other developments on Saturday:
A sailor on a Liberia-flagged civilian ship was killed and another three crew members injured in a Russian attack on Ukraine's Black Sea port in the Odesa region, the Ukrainian port authorities said
At least 12 people were injured in overnight Russian strikes on Ukraine's Dnipropetrovsk, Kharkiv and Kyiv regions, local officials said
Two people were killed and three injured in a Ukrainian drone attack in the country's eastern Luhansk region occupied by Russia, the Moscow-installed regional head said
- Published2 days ago
- Published1 day ago`,
    bodyJa: `Russia hits second major bridge in Ukraine's capital Kyiv
- Published
A Russian strike has hit a second major bridge in Kyiv, Mayor Vitaliy Klitschko has said, as Moscow ramps up attacks on critical infrastructure in Ukraine's capital.
The attack on Saturday morning injured two people, and damaged the road surface and overhead trolleybus wires on the Pivnichnyi (Northern) Bridge, Klitschko said, causing traffic jams.
It comes after the Pivdennyi (Southern) Bridge was hit multiple times by Russian drones this week, with Klitschko warning that "the enemy is tearing Kyiv apart".
Russia said its drones had hit the two bridges used to transfer Ukrainian troops and military cargo. Moscow again urged foreign citizens, including diplomats, to leave Kyiv.
The two Kyiv bridges across the Dnipro River link the western and eastern parts of the capital and had not been hit before Thursday.
The Russian strikes have severed road, rail and trolleybus links across the wide river. The ongoing drone threat means restrictions on other routes, bringing traffic jams to the city's roads for a second day - though Friday's gridlock has not been repeated to the same level.
Many of the city's residents - which number about three million - rely on the metro to travel across the city every day. The fear is this new Russian tactic will result in sustained attacks which could effectively cut the city in two.
Writing on Telegram on Saturday morning, Klitschko said "emergency services are on their way" after the Pivnichnyi Bridge was hit.
"Traffic on the bridge from the left to the right bank is currently blocked," he added.
Earlier attacks on the Pivdennyi Bridge prompted Kyiv's defence council to hold a crisis meeting on Friday.
Klitschko warned afterwards that the city was now in a "very dramatic situation" as Moscow was battering its "critical infrastructure, logistics, housing" and other key facilities.
Experts say Russian drones are unlikely to bring down the bridges - but repeated attacks will force their closure and risk weakening their structure, making them unusable.
More powerful weapons could collapse the bridges, some of which are reported to be in poor condition after years carrying heavier traffic than they were designed for.
It was reported that Ukrainian lawmakers discussed the state of Kyiv's bridges in a recent meeting, setting out contingency plans to use ferries or temporary pontoon bridges to keep the city connected in the event of any bridges being destroyed.
Russian President Vladimir Putin has said Russia is acting in response to Ukraine's strikes on Russian energy facilities, despite the fact that it was Moscow that had first launched such attacks.
After the Pivdennyi Bridge was attacked, passengers described how dust from a blast wave entered their carriage through the ventilation system.
Ukrainian President Volodymyr Zelensky said Putin had decided that there were "no rules now" when attacking Ukraine.
In an interview with the Financial Times, he said: "The Russians have failed to occupy us. So now they are carrying out massive attacks and mass killings."
He added: "They want to destroy our bridges... our data centres, the internet, mobile networks, hospitals, kindergartens, schools, universities - everything. They want people to flee their cities."
Putin on Thursday insisted that Russia's attacks on Ukrainian economic targets were a direct response to Ukraine's strikes on Russia's oil refineries and its ships in the Black Sea.
"Now from every direction we're receiving calls 'let's stop'. But they started it," Putin said after a wide-ranging speech at the Valdai foreign policy forum.
The Kremlin leader admitted Kyiv had "got some results" from its refinery attacks and Russia had lost about 1% of its GDP. Ukraine maintains it began attacking Russian oil infrastructure because it helps the Kremlin finance the war.
Russia has targeted Ukrainian energy infrastructure, ramping up attacks every winter since Putin launched a full-scale invasion in February 2022.
In other developments on Saturday:
A sailor on a Liberia-flagged civilian ship was killed and another three crew members injured in a Russian attack on Ukraine's Black Sea port in the Odesa region, the Ukrainian port authorities said
At least 12 people were injured in overnight Russian strikes on Ukraine's Dnipropetrovsk, Kharkiv and Kyiv regions, local officials said
Two people were killed and three injured in a Ukrainian drone attack in the country's eastern Luhansk region occupied by Russia, the Moscow-installed regional head said
- Published2 days ago
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c83vqxzdg1yko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-03T12:59:10+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/554e/live/87c08780-bf1b-11f1-9b47-174f268aae1d.jpg",
    readTime: 10,
  },
  {
    id: "berkshire-buys-more-lennar-shares-but-pa-78291ed6",
    title: "Berkshire buys more Lennar shares, but pace of purchases slows",
    titleJa: "Berkshire buys more Lennar shares, but pace of purchases slows",
    summaryJa: "Berkshire Hathaway added to its bet on Lennar this week, raising its stake in the homebuilder to 11.2%, although the pace of its buying appears to be slowing.",
    bodyOriginal: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Berkshire buys more Lennar shares, but pace of purchases slows
Berkshire Hathaway added to its bet on Lennar this week, raising its stake in the homebuilder to 11.2%, although the pace of its buying appears to be slowing.
In an SEC filing late Wednesday, Berkshire disclosed it bought a total of $53.6 million of Lennar's Class A shares and another $329,000 of the super-voting B shares on Monday, Tuesday, and Wednesday.
That puts the position at a total of 26.6 million shares valued at $2.1 billion based on Friday's closing prices.
At the end of the second quarter, Berkshire owned a 5.4% stake of 13.4 million shares valued at $1.2 billion. That was an increase of almost 30% from the 10.3 million shares it owned at the end of the first quarter, which was, in turn, an increase of 43% from 7.2 million shares at the end of last year.
As the stock continued to falter in the third quarter, Berkshire continued to buy in secret until its stake hit 10% in mid-September, triggering an SEC rule requiring it to disclose additional moves within two business days.
That prompted two filings last week revealing Berkshire bought almost $349 million of Lennar shares on six out of the seven trading days between Sept. 17 and Sept. 25.
That's an average of $58 million per calendar day.
This week the average is just under $18 million through Wednesday.
Since Berkshire has not made a new filing as of publication of the newsletter Friday night, it appears Berkshire didn't do any buying on Thursday.
That would put the 4-day average at $13.5 million.
We won't know if there was activity Friday until after Monday's filing deadline.
While Berkshire is making a bet that Lennar will benefit from a long-term recovery in the nation's troubled housing market, Morgan Stanley is pessimistic about the stock's more immediate future.
It started coverage Thursday with an "underweight" rating and a price target of $65 per share. That's a drop of almost 19% from today's close of $79.81, a 2.8% decline for the day.
The nation's housing market is struggling. Six straight weeks of increases have brought the average 30-year fixed-rate mortgage to 7.30%, according to the Mortgage Bankers Association. That's the highest it's been since late 2023.
CNBC's Diana Olick reports the high rates have deterred potential homebuyers, who are also seeing higher house prices compared to last year.
Buffett is back in the top ten
Warren Buffett has reclaimed the No. 10 slot on the Forbes ranking of the world's richest billionaires.
The publication reports Buffett moved ahead of Amancio Ortega Thursday afternoon after a month-long decline of almost 8% for the shares of Inditex, the fast fashion group the Spaniard founded that is best known for its Zara chain of stores.
As of 5:15 PM ET Friday, Forbes estimates Buffett's net worth is $143 billion, $3 billion more than Ortega's $140 billion.
Buffett is the only non-tech name among the ten richest people in the world.
The Bloomberg Billionaires Index, as of Friday, has the same names in its top 10, but there are some variations in the rankings and net worth.
Its No. 11, however, is Walmart's Jim Walton with $134 billion.
Bloomberg puts Ortega's fortune at $125 billion, dropping him to No.15 on its list.
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Bloomberg (subscription): Ackman Plans to Raise Outside Capital in Push to Emulate Buffett
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
Buffett teaches his kids a lesson with a slot machine (2007)
Warren Buffett explains why he put a slot machine on the third floor of his house when his now-adult children were growing up.
WARREN BUFFETT: The human propensity to gamble is huge.
Now, when it was legalized only in — pretty much in Nevada — you had to go to some distance, or break some laws, to do any serious gambling.
But as the states learned to — you know, what a great source of revenue it was, they gradually made it easier and easier and easier for people to gamble.
And, believe me, the easier it's made, the more people will gamble.
I mean, when I was — my children are here, and 40 years ago, I bought a slot machine and I put it up on our third floor.
And I could give me kids any allowance they wanted as long as it was in dimes. I mean, I had it all back by nightfall. (Laughter)
I thought — I thought it would be a good lesson for them.
Now they weren't going to Las Vegas to do it, but believe me when it was on the third floor, they could find it, you know.
And my payout ratio was terrible, too, but that's the kind of father I was. (Laughter)
The — but gambling, you know, people are always going to want to do it.
And for that reason, I particularly think that access — you know, in terms of friendly gambling or anything like that, I'm not a prude about it.
But I do think that to quite an extent, gambling is a tax on ignorance.
I mean, if you want to tax the ignorant, people who will do things with the odds against them, you know, you just put it in and guys like me don't have to pay taxes.
I really don't — I find that — I find it kind of socially revolting when a government preys on the weaknesses of its citizenry rather than acts to serve them. And, believe me, when a government — (Applause)
When a government makes it easy for people to take their Social Security checks and start pulling handles or participating in lotteries or whatever it may be, it's a pretty cynical act.
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $754,790.00
BRK.B stock price: $502.65
BRK.B P/E (TTM): 12.64
Berkshire Cash as of June 30: $365.5 billion (Down 8.0% from March 31)
Excluding Rail Cash and Subtracting T-Bills Payable: $359.2 billion (Down 3.8% from March 31)
Berkshire repurchased $4.5 billion of its shares in Q2 2026.
BERKSHIRE'S TOP EQUITY HOLDINGS - Oct. 2, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of June 30, 2026, as reported in Berkshire Hathaway's 13F filing on Aug. 14, 2026, except for:
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@cnbc.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    bodyJa: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Berkshire buys more Lennar shares, but pace of purchases slows
Berkshire Hathaway added to its bet on Lennar this week, raising its stake in the homebuilder to 11.2%, although the pace of its buying appears to be slowing.
In an SEC filing late Wednesday, Berkshire disclosed it bought a total of $53.6 million of Lennar's Class A shares and another $329,000 of the super-voting B shares on Monday, Tuesday, and Wednesday.
That puts the position at a total of 26.6 million shares valued at $2.1 billion based on Friday's closing prices.
At the end of the second quarter, Berkshire owned a 5.4% stake of 13.4 million shares valued at $1.2 billion. That was an increase of almost 30% from the 10.3 million shares it owned at the end of the first quarter, which was, in turn, an increase of 43% from 7.2 million shares at the end of last year.
As the stock continued to falter in the third quarter, Berkshire continued to buy in secret until its stake hit 10% in mid-September, triggering an SEC rule requiring it to disclose additional moves within two business days.
That prompted two filings last week revealing Berkshire bought almost $349 million of Lennar shares on six out of the seven trading days between Sept. 17 and Sept. 25.
That's an average of $58 million per calendar day.
This week the average is just under $18 million through Wednesday.
Since Berkshire has not made a new filing as of publication of the newsletter Friday night, it appears Berkshire didn't do any buying on Thursday.
That would put the 4-day average at $13.5 million.
We won't know if there was activity Friday until after Monday's filing deadline.
While Berkshire is making a bet that Lennar will benefit from a long-term recovery in the nation's troubled housing market, Morgan Stanley is pessimistic about the stock's more immediate future.
It started coverage Thursday with an "underweight" rating and a price target of $65 per share. That's a drop of almost 19% from today's close of $79.81, a 2.8% decline for the day.
The nation's housing market is struggling. Six straight weeks of increases have brought the average 30-year fixed-rate mortgage to 7.30%, according to the Mortgage Bankers Association. That's the highest it's been since late 2023.
CNBC's Diana Olick reports the high rates have deterred potential homebuyers, who are also seeing higher house prices compared to last year.
Buffett is back in the top ten
Warren Buffett has reclaimed the No. 10 slot on the Forbes ranking of the world's richest billionaires.
The publication reports Buffett moved ahead of Amancio Ortega Thursday afternoon after a month-long decline of almost 8% for the shares of Inditex, the fast fashion group the Spaniard founded that is best known for its Zara chain of stores.
As of 5:15 PM ET Friday, Forbes estimates Buffett's net worth is $143 billion, $3 billion more than Ortega's $140 billion.
Buffett is the only non-tech name among the ten richest people in the world.
The Bloomberg Billionaires Index, as of Friday, has the same names in its top 10, but there are some variations in the rankings and net worth.
Its No. 11, however, is Walmart's Jim Walton with $134 billion.
Bloomberg puts Ortega's fortune at $125 billion, dropping him to No.15 on its list.
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Bloomberg (subscription): Ackman Plans to Raise Outside Capital in Push to Emulate Buffett
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
Buffett teaches his kids a lesson with a slot machine (2007)
Warren Buffett explains why he put a slot machine on the third floor of his house when his now-adult children were growing up.
WARREN BUFFETT: The human propensity to gamble is huge.
Now, when it was legalized only in — pretty much in Nevada — you had to go to some distance, or break some laws, to do any serious gambling.
But as the states learned to — you know, what a great source of revenue it was, they gradually made it easier and easier and easier for people to gamble.
And, believe me, the easier it's made, the more people will gamble.
I mean, when I was — my children are here, and 40 years ago, I bought a slot machine and I put it up on our third floor.
And I could give me kids any allowance they wanted as long as it was in dimes. I mean, I had it all back by nightfall. (Laughter)
I thought — I thought it would be a good lesson for them.
Now they weren't going to Las Vegas to do it, but believe me when it was on the third floor, they could find it, you know.
And my payout ratio was terrible, too, but that's the kind of father I was. (Laughter)
The — but gambling, you know, people are always going to want to do it.
And for that reason, I particularly think that access — you know, in terms of friendly gambling or anything like that, I'm not a prude about it.
But I do think that to quite an extent, gambling is a tax on ignorance.
I mean, if you want to tax the ignorant, people who will do things with the odds against them, you know, you just put it in and guys like me don't have to pay taxes.
I really don't — I find that — I find it kind of socially revolting when a government preys on the weaknesses of its citizenry rather than acts to serve them. And, believe me, when a government — (Applause)
When a government makes it easy for people to take their Social Security checks and start pulling handles or participating in lotteries or whatever it may be, it's a pretty cynical act.
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $754,790.00
BRK.B stock price: $502.65
BRK.B P/E (TTM): 12.64
Berkshire Cash as of June 30: $365.5 billion (Down 8.0% from March 31)
Excluding Rail Cash and Subtracting T-Bills Payable: $359.2 billion (Down 3.8% from March 31)
Berkshire repurchased $4.5 billion of its shares in Q2 2026.
BERKSHIRE'S TOP EQUITY HOLDINGS - Oct. 2, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of June 30, 2026, as reported in Berkshire Hathaway's 13F filing on Aug. 14, 2026, except for:
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@cnbc.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/03/berkshire-buys-more-lennar-shares-but-pace-of-purchases-slows.html",
    publishedAt: "2026-10-03T12:55:31+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "flydubai-plane-attack-by-co-pilot-was-an-67ca5fa5",
    title: "FlyDubai plane attack by co-pilot was an attempted 'terrorist' act, UAE says",
    titleJa: "FlyDubai plane attack by co-pilot was an attempted 'terrorist' act, UAE says",
    summaryJa: "The FlyDubai co-pilot attacked the pilot inside the cockpit with a crash axe and attempted to take control of the aircraft, the UAE prosecutor general said.",
    bodyOriginal: `The co-pilot of a FlyDubai plane who attacked the flight's captain with an axe this week was attempting a terrorist attack, the United Arab Emirates said Saturday.
"The co-pilot began executing his plan during the flight, attacking the captain inside the flight deck using a crash axe and attempting to take control of the aircraft," UAE Attorney-General Hamad Saif Al Shamsi said in a post on X titled: "Planning and attempted terrorist act behind flydubai flight FZ1073 incident."
Anwar Gargash, senior advisor to the UAE's president, said the region's "struggle with extremism persists, and justifying terrorism through hate speech is part of the danger, not its margins."
"The latest terrorist operation is a new warning that the confrontation has not ended," Gargash said in a post on X.
The flight on Sept. 30 from Dubai to Tel Aviv was carrying 172 passengers and crew, according to UAE-based FlyDubai. Israeli Prime Minister Benjamin Netanyahu said most of those aboard were Israeli citizens, adding that the attacker "tried to crash the plane."
The aircraft landed safely at Tabuk airport in Saudi Arabia.
Media reports and witness accounts say passengers and crew subdued the co-pilot after he attacked the captain.
Crash axes
The UAE's attorney general's statement was the first time authorities have clarified the weapon the attacker used.
Large aircraft are typically equipped with a so-called crash axe that flight crews can use to break out of their cockpit in emergencies, according to the UK Civil Aviation Authority and the Royal Air Force Museum.
"Investigations are ongoing to establish the full circumstances, motives, and any links related to the incident, as well as to complete technical examinations and analysis of physical and digital evidence," the UAE's Al Shamsi said.
The Associated Press identified the co-pilot as Omani national Hamam al-Hammami, citing three people with knowledge of the situation, including a Gulf and Western diplomat, who spoke on condition of anonymity because they were not authorized to speak to the media.
CNBC could not independently verify the co-pilot's identity.
Netanyahu identified the injured pilot as Indian national Smit Machchhar. The Indian embassy in Riyadh said on X that Machchhar was in a hospital in Tabuk and reported to be in stable condition. FlyDubai later said the captain was returned to the UAE.
The Israeli prime minister also identified the passenger who broke into the cockpit as Yaniv Hayun, calling him a "hero" and adding he deserved "a global medal of honor."
Flight data from tracking site FlightRadar24 showed that the plane, a Boeing 737 Max 8, experienced extreme altitude fluctuations before broadcasting a "general emergency" squawk code.
FZ1073 dropped from more than 14,000 feet in just 29 seconds, according to FlightRadar24. Transponder data showed vertical speeds ranging from about -30,000 to +10,000 feet per minute.
Vertical speeds during normal operations rarely exceed plus or minus 4,000 feet per minute, FlightRadar24 said.`,
    bodyJa: `The co-pilot of a FlyDubai plane who attacked the flight's captain with an axe this week was attempting a terrorist attack, the United Arab Emirates said Saturday.
"The co-pilot began executing his plan during the flight, attacking the captain inside the flight deck using a crash axe and attempting to take control of the aircraft," UAE Attorney-General Hamad Saif Al Shamsi said in a post on X titled: "Planning and attempted terrorist act behind flydubai flight FZ1073 incident."
Anwar Gargash, senior advisor to the UAE's president, said the region's "struggle with extremism persists, and justifying terrorism through hate speech is part of the danger, not its margins."
"The latest terrorist operation is a new warning that the confrontation has not ended," Gargash said in a post on X.
The flight on Sept. 30 from Dubai to Tel Aviv was carrying 172 passengers and crew, according to UAE-based FlyDubai. Israeli Prime Minister Benjamin Netanyahu said most of those aboard were Israeli citizens, adding that the attacker "tried to crash the plane."
The aircraft landed safely at Tabuk airport in Saudi Arabia.
Media reports and witness accounts say passengers and crew subdued the co-pilot after he attacked the captain.
Crash axes
The UAE's attorney general's statement was the first time authorities have clarified the weapon the attacker used.
Large aircraft are typically equipped with a so-called crash axe that flight crews can use to break out of their cockpit in emergencies, according to the UK Civil Aviation Authority and the Royal Air Force Museum.
"Investigations are ongoing to establish the full circumstances, motives, and any links related to the incident, as well as to complete technical examinations and analysis of physical and digital evidence," the UAE's Al Shamsi said.
The Associated Press identified the co-pilot as Omani national Hamam al-Hammami, citing three people with knowledge of the situation, including a Gulf and Western diplomat, who spoke on condition of anonymity because they were not authorized to speak to the media.
CNBC could not independently verify the co-pilot's identity.
Netanyahu identified the injured pilot as Indian national Smit Machchhar. The Indian embassy in Riyadh said on X that Machchhar was in a hospital in Tabuk and reported to be in stable condition. FlyDubai later said the captain was returned to the UAE.
The Israeli prime minister also identified the passenger who broke into the cockpit as Yaniv Hayun, calling him a "hero" and adding he deserved "a global medal of honor."
Flight data from tracking site FlightRadar24 showed that the plane, a Boeing 737 Max 8, experienced extreme altitude fluctuations before broadcasting a "general emergency" squawk code.
FZ1073 dropped from more than 14,000 feet in just 29 seconds, according to FlightRadar24. Transponder data showed vertical speeds ranging from about -30,000 to +10,000 feet per minute.
Vertical speeds during normal operations rarely exceed plus or minus 4,000 feet per minute, FlightRadar24 said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/03/flydubai-co-pilot-attacked-pilot-with-axe-uae-says.html",
    publishedAt: "2026-10-03T12:34:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "as-treasury-yields-touch-generational-hi-0b6e31d5",
    title: "As Treasury yields touch generational highs, investors brace for the market fallout",
    titleJa: "As Treasury yields touch generational highs, investors brace for the market fallout",
    summaryJa: "The surge in bond yields to generational highs has investors around the world watching and worrying about what could crack, spiral or leave a trail of carnage in its path.",
    bodyOriginal: `The surge in bond yields to generational highs has investors around the world watching and worrying about what could crack, spiral or leave a trail of carnage in its path.`,
    bodyJa: `The surge in bond yields to generational highs has investors around the world watching and worrying about what could crack, spiral or leave a trail of carnage in its path.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/as-treasury-yields-touch-generational-highs-investors-brace-for-the-market-fallout-0457e698?mod=mw_rss_topstories",
    publishedAt: "2026-10-03T11:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-09795824",
    readTime: 2,
  },
  {
    id: "flydubai-co-pilot-attacked-captain-with-d8408da4",
    title: "Flydubai co-pilot attacked captain with axe, UAE official says",
    titleJa: "Flydubai co-pilot attacked captain with axe, UAE official says",
    summaryJa: "The man accused of trying to take over the Israel-bound jet is named as Hamam al-Hammami by several media outlets.",
    bodyOriginal: `Flydubai co-pilot attacked captain with axe, UAE official says
- Published
The co-pilot who attempted to take control of a Flydubai plane travelling to Israel attacked the pilot with a crash axe, the United Arab Emirates prosecutor general has said.
The flight from Dubai to Tel Aviv carrying more than 170 people plunged 17,000ft (5,200m) two and a half hours into its journey, before passengers managed to overpower the attacker and successfully take control of the plane.
Capt Smit Machchhar said he was lying on the floor injured when he realised the plane was sinking and he had to act, explaining: "I told myself to go for one last push to open the door from inside", which allowed the passengers in.
Two reserve pilots then landed the plane safely in Saudi Arabia.
A crash axe is usually kept in the cockpit in case of emergencies.
The weapon used has been a key question for investigators, given the stringent security on such a sensitive route. Early reports from passengers on board had suggested it might have been a knife.
The UAE attorney general told state media that investigations were ongoing to determine the full circumstances and motives of the incident.
The co-pilot who launched the attack was an Omani national, according to Israeli Prime Minister Benjamin Netanyahu.
Multiple media outlets including Reuters, CNN and The New York Times have named him as Hamam al-Hammami. There has been no official confirmation of this.
While working at another airline, Oman Air, US media reported that Al-Hammami was removed from flight training because of concerns over his radical views, and was given another role at Oman's national airline.
He completed a three-year distance-learning course at Buckinghamshire New University in the UK and graduated with a degree in aviation management in 2023, the university said. It added he did not take any pilot training at the school.
Speaking to Fox News, Netanyahu said that after the attacker was subdued on the flight, he called out to the crew "Kill me, kill me!"
The Israeli prime minister added: "So, it's clear that he was suicidal… It looks very likely that he was going to down the plane."
He also said the attacker "underwent Islamist radical indoctrination".
The UAE has begun investigating whether the "incident was linked to any terrorist activity or purpose", according to the country's state news agency.
Machchhar, who was stabbed in the attack, was taken to a nearby hospital before being airlifted to Abu Dhabi, where he is reported to be in a stable condition.
The pilot, who is from India, was in "good health and recovering well", the Indian embassy in the UAE said on Thursday.
"I am confident that the recovery will be there and I will become fit and healthy again," Machchhar said.
About two and half hours after the plane took off from Dubai International Airport it begun to plunge sharply.
The plane signalled a "general emergency" code, squawk 7700, before switching to squawk 7500, a code reporting "unlawful interference", or hijacking.
In an interview with the BBC, one passenger described the moment he realised that something was wrong.
Almog Itali said: "Suddenly the aeroplane started to, like a rollercoaster, to drop down [with] a massive G-force. It was falling down for 20 or 30 seconds, rapidly, and then balanced, and then started once again to fall down."
People then began to rush to the cockpit, he said.
Israeli President Isaac Herzog said on Thursday that the alarm was raised onboard by an Israeli woman, Tali Manes, who heard a commotion coming from the cockpit.
Her husband, Zvika, along with three other men - Yaniv Hayun, Dr Shota Musayev and Asaf Rajuan - entered the cockpit after Capt Machchhar managed to open the door despite his injuries.
Hayun said, in a video released by the prime minister's office, that the attacker was "trying to destroy the instruments in order to disable the plane".
Hayun then described putting the attacker in a chokehold and pulling him outside the cockpit before other passengers helped to pin him down.
He added that he "pulled the controls" of the plane. "The plane started to level out, a bit more, and then [another] pilot told me he was taking control from there," he said.
In an interview with CNN on Wednesday evening, Netanyahu said the stabbed pilot, passengers and second crew had "managed to prevent a 9/11 disaster".`,
    bodyJa: `Flydubai co-pilot attacked captain with axe, UAE official says
- Published
The co-pilot who attempted to take control of a Flydubai plane travelling to Israel attacked the pilot with a crash axe, the United Arab Emirates prosecutor general has said.
The flight from Dubai to Tel Aviv carrying more than 170 people plunged 17,000ft (5,200m) two and a half hours into its journey, before passengers managed to overpower the attacker and successfully take control of the plane.
Capt Smit Machchhar said he was lying on the floor injured when he realised the plane was sinking and he had to act, explaining: "I told myself to go for one last push to open the door from inside", which allowed the passengers in.
Two reserve pilots then landed the plane safely in Saudi Arabia.
A crash axe is usually kept in the cockpit in case of emergencies.
The weapon used has been a key question for investigators, given the stringent security on such a sensitive route. Early reports from passengers on board had suggested it might have been a knife.
The UAE attorney general told state media that investigations were ongoing to determine the full circumstances and motives of the incident.
The co-pilot who launched the attack was an Omani national, according to Israeli Prime Minister Benjamin Netanyahu.
Multiple media outlets including Reuters, CNN and The New York Times have named him as Hamam al-Hammami. There has been no official confirmation of this.
While working at another airline, Oman Air, US media reported that Al-Hammami was removed from flight training because of concerns over his radical views, and was given another role at Oman's national airline.
He completed a three-year distance-learning course at Buckinghamshire New University in the UK and graduated with a degree in aviation management in 2023, the university said. It added he did not take any pilot training at the school.
Speaking to Fox News, Netanyahu said that after the attacker was subdued on the flight, he called out to the crew "Kill me, kill me!"
The Israeli prime minister added: "So, it's clear that he was suicidal… It looks very likely that he was going to down the plane."
He also said the attacker "underwent Islamist radical indoctrination".
The UAE has begun investigating whether the "incident was linked to any terrorist activity or purpose", according to the country's state news agency.
Machchhar, who was stabbed in the attack, was taken to a nearby hospital before being airlifted to Abu Dhabi, where he is reported to be in a stable condition.
The pilot, who is from India, was in "good health and recovering well", the Indian embassy in the UAE said on Thursday.
"I am confident that the recovery will be there and I will become fit and healthy again," Machchhar said.
About two and half hours after the plane took off from Dubai International Airport it begun to plunge sharply.
The plane signalled a "general emergency" code, squawk 7700, before switching to squawk 7500, a code reporting "unlawful interference", or hijacking.
In an interview with the BBC, one passenger described the moment he realised that something was wrong.
Almog Itali said: "Suddenly the aeroplane started to, like a rollercoaster, to drop down [with] a massive G-force. It was falling down for 20 or 30 seconds, rapidly, and then balanced, and then started once again to fall down."
People then began to rush to the cockpit, he said.
Israeli President Isaac Herzog said on Thursday that the alarm was raised onboard by an Israeli woman, Tali Manes, who heard a commotion coming from the cockpit.
Her husband, Zvika, along with three other men - Yaniv Hayun, Dr Shota Musayev and Asaf Rajuan - entered the cockpit after Capt Machchhar managed to open the door despite his injuries.
Hayun said, in a video released by the prime minister's office, that the attacker was "trying to destroy the instruments in order to disable the plane".
Hayun then described putting the attacker in a chokehold and pulling him outside the cockpit before other passengers helped to pin him down.
He added that he "pulled the controls" of the plane. "The plane started to level out, a bit more, and then [another] pilot told me he was taking control from there," he said.
In an interview with CNN on Wednesday evening, Netanyahu said the stabbed pilot, passengers and second crew had "managed to prevent a 9/11 disaster".`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c61wv7lgex13o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-03T11:20:21+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2448/live/1043b780-befe-11f1-bc2e-018d645d8d21.jpg",
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
