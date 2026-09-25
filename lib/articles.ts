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
    id: "see-which-incumbents-have-the-biggest-ca-b0542418",
    title: "See which incumbents have the biggest cash advantage in the tightest U.S. House races",
    titleJa: "See which incumbents have the biggest cash advantage in the tightest U.S. House races",
    summaryJa: "Incumbents hold commanding cash advantages in many of the U.S. House 2026 midterm election races expected to help decide control of Congress.",
    bodyOriginal: `The most competitive races for control of the House of Representatives in the 2026 midterm election may be toss-ups on the political map. But in the most fiercely contested districts, one candidate often holds a massive financial edge.
In 11 of the 19 incumbent-versus-challenger matchups rated as "toss ups" by The Cook Political Report with Amy Walter, a clear financial divide emerged: One campaign had at least twice as much money available as the other, according to Federal Election Commission data compiled by OpenSecrets, a nonprofit, nonpartisan organization that tracks money in politics. In every one of those races, the incumbent held that commanding lead.
The latest uniform quarterly reports covered activity through June 30, though some candidates have since filed additional reports tied to their states' primary calendars. CNBC used figures from the most recent FEC reporting period available for each candidate as of Sept. 18.
The pattern cuts across party lines, but it matters especially for Republicans because the GOP is defending most of the seats at the center of the House battlefield. The Cook Report currently rates 21 House races as toss-ups, including 16 Republican-held seats and five Democratic-held seats.
In Michigan's 7th District, Republican Rep. Tom Barrett had about $2.9 million on hand compared with roughly $383,000 for Democratic challenger William Lawrence — a more than 7-to-1 advantage.
Republican Rep. Gabe Evans had about $3.9 million available in Colorado's 8th District compared with roughly $601,000 for Democratic challenger Manny Rutinel. And in California's 22nd District, Republican Rep. David Valadao held about $3.4 million, nearly six times the roughly $572,000 held by Democratic challenger Randy Villegas.
Democratic incumbents have built large cushions of their own. Democratic Rep. Marcy Kaptur had about $3.5 million on hand in Ohio's 9th District, more than seven times the amount available to Republican challenger Derek Merrin. Democratic Reps. Jared Moskowitz of Florida and Texas's Vicente Gonzalez also held more than three times as much cash as their Republican opponents.
But incumbency does not guarantee the advantage.
Democratic challengers had more cash than Republican incumbents in both Iowa toss-up races and two of Pennsylvania's three.
Christina Bohannan had about $5.4 million on hand compared with roughly $4.7 million for Republican Rep. Mariannette Miller-Meeks in Iowa's 1st District.
In Pennsylvania's 10th District, Democrat Janelle Stelson had nearly $4.5 million available compared with about $2.8 million for Republican Rep. Scott Perry.
Paige Cognetti also led Republican Rep. Rob Bresnahan in Pennsylvania's 8th District, while Democrat Elaine Luria held a narrow cash advantage over Republican Rep. Jen Kiggans, who defeated Luria in 2024, in Virginia's 2nd District.
Still, the challenger advantages were generally much smaller. Among the 21 races CNBC analyzed, six challengers led incumbents in cash, but none had twice as much money as the sitting member. By contrast, 11 incumbents held at least a 2-to-1 advantage.
Cash on hand offers a different view than top-line fundraising because it shows what campaigns still have available after spending as Election Day approaches. It also captures only part of the money flowing into these contests.
Super PACs and other groups can independently spend to support or oppose candidates without those dollars flowing through the candidates' campaign accounts, under federal campaign finance rules.
The next quarterly reports, covering activity through Sept. 30, are due Oct. 15.`,
    bodyJa: `The most competitive races for control of the House of Representatives in the 2026 midterm election may be toss-ups on the political map. But in the most fiercely contested districts, one candidate often holds a massive financial edge.
In 11 of the 19 incumbent-versus-challenger matchups rated as "toss ups" by The Cook Political Report with Amy Walter, a clear financial divide emerged: One campaign had at least twice as much money available as the other, according to Federal Election Commission data compiled by OpenSecrets, a nonprofit, nonpartisan organization that tracks money in politics. In every one of those races, the incumbent held that commanding lead.
The latest uniform quarterly reports covered activity through June 30, though some candidates have since filed additional reports tied to their states' primary calendars. CNBC used figures from the most recent FEC reporting period available for each candidate as of Sept. 18.
The pattern cuts across party lines, but it matters especially for Republicans because the GOP is defending most of the seats at the center of the House battlefield. The Cook Report currently rates 21 House races as toss-ups, including 16 Republican-held seats and five Democratic-held seats.
In Michigan's 7th District, Republican Rep. Tom Barrett had about $2.9 million on hand compared with roughly $383,000 for Democratic challenger William Lawrence — a more than 7-to-1 advantage.
Republican Rep. Gabe Evans had about $3.9 million available in Colorado's 8th District compared with roughly $601,000 for Democratic challenger Manny Rutinel. And in California's 22nd District, Republican Rep. David Valadao held about $3.4 million, nearly six times the roughly $572,000 held by Democratic challenger Randy Villegas.
Democratic incumbents have built large cushions of their own. Democratic Rep. Marcy Kaptur had about $3.5 million on hand in Ohio's 9th District, more than seven times the amount available to Republican challenger Derek Merrin. Democratic Reps. Jared Moskowitz of Florida and Texas's Vicente Gonzalez also held more than three times as much cash as their Republican opponents.
But incumbency does not guarantee the advantage.
Democratic challengers had more cash than Republican incumbents in both Iowa toss-up races and two of Pennsylvania's three.
Christina Bohannan had about $5.4 million on hand compared with roughly $4.7 million for Republican Rep. Mariannette Miller-Meeks in Iowa's 1st District.
In Pennsylvania's 10th District, Democrat Janelle Stelson had nearly $4.5 million available compared with about $2.8 million for Republican Rep. Scott Perry.
Paige Cognetti also led Republican Rep. Rob Bresnahan in Pennsylvania's 8th District, while Democrat Elaine Luria held a narrow cash advantage over Republican Rep. Jen Kiggans, who defeated Luria in 2024, in Virginia's 2nd District.
Still, the challenger advantages were generally much smaller. Among the 21 races CNBC analyzed, six challengers led incumbents in cash, but none had twice as much money as the sitting member. By contrast, 11 incumbents held at least a 2-to-1 advantage.
Cash on hand offers a different view than top-line fundraising because it shows what campaigns still have available after spending as Election Day approaches. It also captures only part of the money flowing into these contests.
Super PACs and other groups can independently spend to support or oppose candidates without those dollars flowing through the candidates' campaign accounts, under federal campaign finance rules.
The next quarterly reports, covering activity through Sept. 30, are due Oct. 15.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/house-midterms-toss-ups-campaign-cash-incumbents.html",
    publishedAt: "2026-09-25T11:17:27+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "iran-offers-to-reopen-strait-of-hormuz-w-fb84d05f",
    title: "Iran offers to reopen Strait of Hormuz within 7 days and restart nuclear talks",
    titleJa: "Iran offers to reopen Strait of Hormuz within 7 days and restart nuclear talks",
    summaryJa: "The remarks came as the Houthis launched a new wave of missile and drone attacks at Saudi targets Friday morning.",
    bodyOriginal: `Iran's Foreign Minister Abbas Araghchi has proposed reopening the strategically vital Strait of Hormuz and resuming nuclear talks with the U.S. within seven days if the Trump administration accepts its conditions.
The latest offer comes shortly after Iranian President Masoud Pezeshkian delivered a defiant response to President Donald Trump's "annihilation" threat at the United Nations General Assembly (UNGA) this week, and nearly seven months after the U.S. and Israel launched their war against Tehran.
"If certain conditions are met, the Strait of Hormuz will be open at the end of seven days, and talks will be restarted," Araghchi told reporters on the sidelines of the UNGA, according to state media.
"The conditions we have asked the U.S. to meet are nothing new, nothing more than what was already in the Islamabad MOU, which was signed by the U.S. President," he added.
The Islamabad Memorandum of Understanding refers to a June ceasefire agreement between the U.S. and Iran that ultimately collapsed in early July. The Trump administration has previously said it will not return to the terms of the June agreement.
Oil prices were slightly lower on Friday. International benchmark Brent crude futures with November expiry traded 1% lower at $105.56 per barrel, while U.S. West Texas Intermediate futures with November expiry were last seen down 1.8% at $92.94.
Iran's Pezeshkian said Thursday that it is up to the U.S. to decide whether to end their seven-month war, amid continued missile strikes in the Middle East and a fresh push by China to help broker a peace resolution.
"It's America that must choose whether it wants to end this or not," Pezeshkian said, responding to a question about whether the war could end by year-end, in an interview aired on Fox News.
The remarks came as the Houthis fired dozens of missiles and drones at Saudi targets on Friday morning, according to Saudi authorities, who said they intercepted six ballistic missiles.
Emergency alerts were issued in Mecca, Jeddah and Yanbu. Saudi Arabia, Turkey and Pakistan planned an urgent meeting of their chiefs of staff to discuss ways to support the kingdom under the Mecca Joint Defense Agreement.
Pezeshkian has sought to distance Tehran from the escalation, telling Fox News "the Houthis are responsible for their own actions" and that Iran is "not at war with Saudi Arabia." The Houthis, he said, "have their own issues."
Saudi Arabia's Grand Mufti struck a starkly different tone, telling troops to be ready "to lay down their lives" to fight the Houthis until the group is ousted from power.
Trump-Xi talks
Vessel transits through the Strait of Hormuz, normally the route for about a fifth of global oil supply, fell to 9, far below peacetime levels, according to Reuters, citing preliminary ship-tracking data showed on Friday.
Diplomatically, the war has become entangled with this week's U.S.-China summit in Washington. Chinese President Xi Jinping is on a three-day state visit to the U.S., meeting with President Donald Trump on issues spanning trade, artificial intelligence, Taiwan and Iran.
Zhai Jun, China's special envoy for the Middle East, said at an event in Singapore that "the Middle East situation was a big issue in the leaders' discussion that just took place, and the consensus they reached there will be critical to cooling the temperature in the conflict."
Trump has sought Beijing's help pressuring Tehran toward a settlement, after indirect U.S.-Iran talks resumed on the sidelines of the UN General Assembly in New York this week.`,
    bodyJa: `Iran's Foreign Minister Abbas Araghchi has proposed reopening the strategically vital Strait of Hormuz and resuming nuclear talks with the U.S. within seven days if the Trump administration accepts its conditions.
The latest offer comes shortly after Iranian President Masoud Pezeshkian delivered a defiant response to President Donald Trump's "annihilation" threat at the United Nations General Assembly (UNGA) this week, and nearly seven months after the U.S. and Israel launched their war against Tehran.
"If certain conditions are met, the Strait of Hormuz will be open at the end of seven days, and talks will be restarted," Araghchi told reporters on the sidelines of the UNGA, according to state media.
"The conditions we have asked the U.S. to meet are nothing new, nothing more than what was already in the Islamabad MOU, which was signed by the U.S. President," he added.
The Islamabad Memorandum of Understanding refers to a June ceasefire agreement between the U.S. and Iran that ultimately collapsed in early July. The Trump administration has previously said it will not return to the terms of the June agreement.
Oil prices were slightly lower on Friday. International benchmark Brent crude futures with November expiry traded 1% lower at $105.56 per barrel, while U.S. West Texas Intermediate futures with November expiry were last seen down 1.8% at $92.94.
Iran's Pezeshkian said Thursday that it is up to the U.S. to decide whether to end their seven-month war, amid continued missile strikes in the Middle East and a fresh push by China to help broker a peace resolution.
"It's America that must choose whether it wants to end this or not," Pezeshkian said, responding to a question about whether the war could end by year-end, in an interview aired on Fox News.
The remarks came as the Houthis fired dozens of missiles and drones at Saudi targets on Friday morning, according to Saudi authorities, who said they intercepted six ballistic missiles.
Emergency alerts were issued in Mecca, Jeddah and Yanbu. Saudi Arabia, Turkey and Pakistan planned an urgent meeting of their chiefs of staff to discuss ways to support the kingdom under the Mecca Joint Defense Agreement.
Pezeshkian has sought to distance Tehran from the escalation, telling Fox News "the Houthis are responsible for their own actions" and that Iran is "not at war with Saudi Arabia." The Houthis, he said, "have their own issues."
Saudi Arabia's Grand Mufti struck a starkly different tone, telling troops to be ready "to lay down their lives" to fight the Houthis until the group is ousted from power.
Trump-Xi talks
Vessel transits through the Strait of Hormuz, normally the route for about a fifth of global oil supply, fell to 9, far below peacetime levels, according to Reuters, citing preliminary ship-tracking data showed on Friday.
Diplomatically, the war has become entangled with this week's U.S.-China summit in Washington. Chinese President Xi Jinping is on a three-day state visit to the U.S., meeting with President Donald Trump on issues spanning trade, artificial intelligence, Taiwan and Iran.
Zhai Jun, China's special envoy for the Middle East, said at an event in Singapore that "the Middle East situation was a big issue in the leaders' discussion that just took place, and the consensus they reached there will be critical to cooling the temperature in the conflict."
Trump has sought Beijing's help pressuring Tehran toward a settlement, after indirect U.S.-Iran talks resumed on the sidelines of the UN General Assembly in New York this week.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/us-iran-trump-hormuz-.html",
    publishedAt: "2026-09-25T11:14:24+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 9,
  },
  {
    id: "uk-diesel-price-close-to-all-time-high-8fc7b7c0",
    title: "UK diesel price close to all-time high",
    titleJa: "UK diesel price close to all-time high",
    summaryJa: "The average price of a litre of diesel at the pump stands at 198.32p, according to the RAC motoring body.",
    bodyOriginal: `UK diesel price close to all-time high
- Published
Diesel prices in the UK are expected to hit record levels over the weekend as the fallout from the US-Israel war with Iran continues to drive up costs.
The average price of a litre of diesel at the pump stands at 198.32p, according to the RAC motoring body. That's close to the all-time high of 199.09p recorded on 25 June 2022, following Russia's full-scale invasion of Ukraine.
Simon Williams, head of policy at RAC, said the June 2022 high would "almost certainly be surpassed over the weekend as retailers continue to pass on the increases they're seeing when they buy new supply".
Over the past seven months, the Iran war has severely disrupted the production and transportation of wholesale oil across the region, causing the price of fuels made from oil to surge.
Motor fuel prices fell back when the US and Iran agreed in June to a framework deal to end the fighting, but rose again as tensions resurfaced.
Meanwhile, US President Donald Trump has responded to rising diesel prices by mulling a ban on US diesel producers selling overseas, in a move which could push up the UK price even higher.
How do wholesale oil prices affect the cost of petrol and diesel at the pump?
Crude oil is a key ingredient in petrol and diesel, which means that higher wholesale costs make filling up a car more expensive. The price of petrol and diesel is also heavily influenced by demand and refining capacity.
Analysts say every $10 (£7.44) per barrel increase in the oil price pushes up pump prices by roughly 7p a litre.
Since the war began, the price of a barrel of Brent crude – the global benchmark for wholesale oil prices – has been very volatile.
Generally speaking, news of further conflict drives the price up while hopes of an end to the war pushes the price down.
Before the conflict, Brent was about $70 a barrel, but the fighting saw it peak at above $120.
In early July, after the framework deal was signed, prices fell back to near the $70 a barrel mark.
The price climbed back up again after peace talks collapsed and it is now above $100 a barrel.
What has happened to petrol and diesel prices in the UK?
Before the war began, the average price of petrol was 132.83p per litre and diesel was 142.38p.
At 198.32p for a litre of diesel, the price is now near a record high.
Meanwhile, petrol has hit an average 173.6p a litre, which is the highest in more than four years but lower than its peak of 191.5p during the summer of 2022.
Williams said: "Sadly for drivers, there appears to be no end in sight to high prices at the pumps."
Because transporting oil is a slow process, price movements in wholesale oil markets take about a fortnight to show at the pump.
Fuel retailers have denied accusations of price gouging during the conflict. The official markets regulator said it had "not seen evidence of retailers actively changing their pricing strategies to take advantage of the crisis".
A government scheme called Fuel Finder, external lets drivers compare the cost of fuel offered by petrol stations across the UK.
In May, the then Prime Minister Sir Keir Starmer said a planned 5p increase in fuel duty due in September would be postponed until the end of December because of the conflict.
RAC has said there is "a very strong case" for leaving fuel duty at its current level, at least until the end of the Parliament.
Why has the Iran war had a big impact on oil prices?
The Middle East conflict sent global oil prices soaring as it effectively closed the Strait of Hormuz — one of the world's key water transport routes for oil, liquid natural gas and other essential commodities — limiting global supplies.
About 20% of the world's oil and liquefied natural gas normally passes through the waterway.
Even if a deal is agreed to reopen the strait, experts warn it will take time before normal levels of shipping through the Strait of Hormuz resume, and the impact of the war will continue to affect the global economy for potentially months to come.
Will Trump ban US diesel exports?
While Trump has suggested he might ban US producers from selling diesel overseas, he has not done it yet and views differ on how serious this threat is.
If it does happen, many agree it would hurt the countries which heavily depend on US diesel, such as the UK and several European countries.
Others note that, while the ban would be likely to reduce US diesel prices in the short-term, it could have unintended effects that could hurt US production – and put pressure on US diesel prices – in the long-term.
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
    bodyJa: `UK diesel price close to all-time high
- Published
Diesel prices in the UK are expected to hit record levels over the weekend as the fallout from the US-Israel war with Iran continues to drive up costs.
The average price of a litre of diesel at the pump stands at 198.32p, according to the RAC motoring body. That's close to the all-time high of 199.09p recorded on 25 June 2022, following Russia's full-scale invasion of Ukraine.
Simon Williams, head of policy at RAC, said the June 2022 high would "almost certainly be surpassed over the weekend as retailers continue to pass on the increases they're seeing when they buy new supply".
Over the past seven months, the Iran war has severely disrupted the production and transportation of wholesale oil across the region, causing the price of fuels made from oil to surge.
Motor fuel prices fell back when the US and Iran agreed in June to a framework deal to end the fighting, but rose again as tensions resurfaced.
Meanwhile, US President Donald Trump has responded to rising diesel prices by mulling a ban on US diesel producers selling overseas, in a move which could push up the UK price even higher.
How do wholesale oil prices affect the cost of petrol and diesel at the pump?
Crude oil is a key ingredient in petrol and diesel, which means that higher wholesale costs make filling up a car more expensive. The price of petrol and diesel is also heavily influenced by demand and refining capacity.
Analysts say every $10 (£7.44) per barrel increase in the oil price pushes up pump prices by roughly 7p a litre.
Since the war began, the price of a barrel of Brent crude – the global benchmark for wholesale oil prices – has been very volatile.
Generally speaking, news of further conflict drives the price up while hopes of an end to the war pushes the price down.
Before the conflict, Brent was about $70 a barrel, but the fighting saw it peak at above $120.
In early July, after the framework deal was signed, prices fell back to near the $70 a barrel mark.
The price climbed back up again after peace talks collapsed and it is now above $100 a barrel.
What has happened to petrol and diesel prices in the UK?
Before the war began, the average price of petrol was 132.83p per litre and diesel was 142.38p.
At 198.32p for a litre of diesel, the price is now near a record high.
Meanwhile, petrol has hit an average 173.6p a litre, which is the highest in more than four years but lower than its peak of 191.5p during the summer of 2022.
Williams said: "Sadly for drivers, there appears to be no end in sight to high prices at the pumps."
Because transporting oil is a slow process, price movements in wholesale oil markets take about a fortnight to show at the pump.
Fuel retailers have denied accusations of price gouging during the conflict. The official markets regulator said it had "not seen evidence of retailers actively changing their pricing strategies to take advantage of the crisis".
A government scheme called Fuel Finder, external lets drivers compare the cost of fuel offered by petrol stations across the UK.
In May, the then Prime Minister Sir Keir Starmer said a planned 5p increase in fuel duty due in September would be postponed until the end of December because of the conflict.
RAC has said there is "a very strong case" for leaving fuel duty at its current level, at least until the end of the Parliament.
Why has the Iran war had a big impact on oil prices?
The Middle East conflict sent global oil prices soaring as it effectively closed the Strait of Hormuz — one of the world's key water transport routes for oil, liquid natural gas and other essential commodities — limiting global supplies.
About 20% of the world's oil and liquefied natural gas normally passes through the waterway.
Even if a deal is agreed to reopen the strait, experts warn it will take time before normal levels of shipping through the Strait of Hormuz resume, and the impact of the war will continue to affect the global economy for potentially months to come.
Will Trump ban US diesel exports?
While Trump has suggested he might ban US producers from selling diesel overseas, he has not done it yet and views differ on how serious this threat is.
If it does happen, many agree it would hurt the countries which heavily depend on US diesel, such as the UK and several European countries.
Others note that, while the ban would be likely to reduce US diesel prices in the short-term, it could have unintended effects that could hurt US production – and put pressure on US diesel prices – in the long-term.
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
    publishedAt: "2026-09-25T10:50:49+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8143/live/f8d0c8b0-7572-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 10,
  },
  {
    id: "trump-and-xi-exchange-warm-words-at-stat-7b2b1868",
    title: "Trump and Xi exchange warm words at state dinner but little progress on key issues",
    titleJa: "Trump and Xi exchange warm words at state dinner but little progress on key issues",
    summaryJa: "Despite diplomatic niceties and gifts, little was shared on substantial issues separating the leaders.",
    bodyOriginal: `Trump and Xi exchange warm words at state dinner but little progress on key issues
- Published
US President Donald Trump and China's President Xi Jinping exchanged warm words at a lavish White House state dinner but gave little indication of progress on pressing issues.
Xi stressed that they should ensure AI remain "under human control" and act "as responsible major countries", while Trump toasted a future of "harmony, peace and success" for both nations.
But tensions remain despite the diplomatic niceties, including over Taiwan - with Xi urging Trump earlier in the day to take the "correct position" on the self-governing island which Beijing claims, amid a weapons package paused by Trump.
Billionaire business leaders and US tech CEOs joined the leaders at the extravagant dinner late on Thursday.
Their arrival was marked by protesters shouting from just outside the White House gates, some of whom were arrested.
Trump lavished praise on Xi during his first visit to the US in over a decade, telling those attending the dinner that while the two countries had "different systems", they had "never gotten along better".
Xi meanwhile welcomed the "historic juncture" in US-China relations - and said both leaders' ambitions could "surely be mutually reinforcing".
"China and the United States must act as responsible major countries to meet the expectations of our peoples, keep pace with the trend of our times, and explore a new approach for major countries to get along with each other," he said.
While Xi said he and Trump had shared "in-depth exchanges and reached common understanding on many issues", little to no mention was made of the crucial matters which divide the leaders of the world's two most powerful countries.
China believes the US is trying to contain its rise as a superpower, and it wants Washington to stay out of its way - particularly when it comes to trade, technology and Taiwan.
Trump has meanwhile been expected to aim for deals around trade and tariffs during the visit – like lowering Chinese tariffs on American goods, increasing imports of Chinese rare earth minerals, and increasing exports of US agricultural products.
Trump has been blunt about his ambitions for artificial intelligence (AI) - and clear that he considers China to be the US's main rival for its development.
But beyond Xi's reference to AI remaining under "human control", little indication was given of what progress the two leaders may have made on the issue - if any - during their talks.
The dinner also came just hours after Chinese state media reported Xi had, behind closed doors, advised Washington to handle "with prudence" its approach to Taiwan.
Washington is yet to comment publicly on the remarks, and the matter was another neither leader addressed late on Thursday.
The US is legally bound to provide Taiwan with the means to defend itself, but Trump delayed approving a $14bn (£11bn) arms package for it after Xi in May warned that mishandling the issue could cause the two countries to "collide or even enter into conflict".
At the time, Trump called it a "very good negotiating chip" with Beijing.
Xi visit to Washington all pomp but little progress so far
- Published13 hours ago
Trump and Xi come face-to-face as US and China battle to win the AI race
- Published1 day ago
Xi got Trump's red carpet welcome - but not everything he wanted
- Published7 hours ago
The evening instead marked a continuation of the lavish welcome Xi has so far received in the US.
Trump presented the Chinese president with a sculpture of a bald eagle - America's national symbol - saying it embodied "the free and soaring spirit of America". First Lady Melania had participated in its design, Trump added.
Others in attendance included key White House figures, such as Defence Secretary Pete Hegseth, chief of staff Monica Crowley, and Trump's son-in-law Jared Kushner.
They were joined by scores of US officials, as well as conservative broadcasters, tech industry bosses, social media CEOs and corporate executives.
Apple's Tim Cook and Nvidia's Jensen Huang were seated at the same table as Trump and Xi, as was Elon Musk, who previously worked in Trump's administration leading the effort to shrink government.
OpenAI's Sam Altman, Google's Sundar Pichai, and Amazon's Jeff Bezos were also present, as were Mark Zuckerberg and Jeff Yass, the American billionaire who owns a share of TikTok.
The leaders of companies including General Motors, Visa, Paramount Skydance and ExxonMobil could also be seen in the room.
"Everybody wanted to be there," Trump said ahead of the event. "I would say you have the entire tech world, the entire banking world, and a lot more."
One notable absence was Anthropic - one of the biggest and most valuable AI firms in the world. The BBC has asked Anthropic if it was invited, or if they chose not to be there.
The office of the First Lady Melania Trump, which planned the event, said the dinner menu would showcase "American ingredients with subtle Chinese influence".
The first course was yellow squash, wild mushrooms and crispy pancetta. The guests ate off red tablecloths - red being a symbol of luck and good fortune in China.
For their main course they dined on a sesame-crusted sea bass, braised bok choy and roasted eggplant.
Dessert featured the two leaders and their fellow diners tucking into vanilla crémeux with sour cherry confit, with an accompanying ice cream "made with harvested White House honey".
The wine chosen by the first lady included Schramsberg Blanc De Noir - a nod to President Nixon's 1972 "Toast to Peace" with former Chinese Premier Zhou Enlai, when they used a bottle from the same vineyard.
Trump and Xi will begin the final day of their visit on Friday with tea at the White House's Red Room with their wives.
The group will then head to the US National Archives for a tour of the building and its exhibits.
Formally called the National Archives and Records Administration, the building holds some of the most important documents regarding the founding of the United States - including the US Constitution, the Declaration of Independence and the Bill of Rights.
Xi and his wife will depart Washington later in the day.`,
    bodyJa: `Trump and Xi exchange warm words at state dinner but little progress on key issues
- Published
US President Donald Trump and China's President Xi Jinping exchanged warm words at a lavish White House state dinner but gave little indication of progress on pressing issues.
Xi stressed that they should ensure AI remain "under human control" and act "as responsible major countries", while Trump toasted a future of "harmony, peace and success" for both nations.
But tensions remain despite the diplomatic niceties, including over Taiwan - with Xi urging Trump earlier in the day to take the "correct position" on the self-governing island which Beijing claims, amid a weapons package paused by Trump.
Billionaire business leaders and US tech CEOs joined the leaders at the extravagant dinner late on Thursday.
Their arrival was marked by protesters shouting from just outside the White House gates, some of whom were arrested.
Trump lavished praise on Xi during his first visit to the US in over a decade, telling those attending the dinner that while the two countries had "different systems", they had "never gotten along better".
Xi meanwhile welcomed the "historic juncture" in US-China relations - and said both leaders' ambitions could "surely be mutually reinforcing".
"China and the United States must act as responsible major countries to meet the expectations of our peoples, keep pace with the trend of our times, and explore a new approach for major countries to get along with each other," he said.
While Xi said he and Trump had shared "in-depth exchanges and reached common understanding on many issues", little to no mention was made of the crucial matters which divide the leaders of the world's two most powerful countries.
China believes the US is trying to contain its rise as a superpower, and it wants Washington to stay out of its way - particularly when it comes to trade, technology and Taiwan.
Trump has meanwhile been expected to aim for deals around trade and tariffs during the visit – like lowering Chinese tariffs on American goods, increasing imports of Chinese rare earth minerals, and increasing exports of US agricultural products.
Trump has been blunt about his ambitions for artificial intelligence (AI) - and clear that he considers China to be the US's main rival for its development.
But beyond Xi's reference to AI remaining under "human control", little indication was given of what progress the two leaders may have made on the issue - if any - during their talks.
The dinner also came just hours after Chinese state media reported Xi had, behind closed doors, advised Washington to handle "with prudence" its approach to Taiwan.
Washington is yet to comment publicly on the remarks, and the matter was another neither leader addressed late on Thursday.
The US is legally bound to provide Taiwan with the means to defend itself, but Trump delayed approving a $14bn (£11bn) arms package for it after Xi in May warned that mishandling the issue could cause the two countries to "collide or even enter into conflict".
At the time, Trump called it a "very good negotiating chip" with Beijing.
Xi visit to Washington all pomp but little progress so far
- Published13 hours ago
Trump and Xi come face-to-face as US and China battle to win the AI race
- Published1 day ago
Xi got Trump's red carpet welcome - but not everything he wanted
- Published7 hours ago
The evening instead marked a continuation of the lavish welcome Xi has so far received in the US.
Trump presented the Chinese president with a sculpture of a bald eagle - America's national symbol - saying it embodied "the free and soaring spirit of America". First Lady Melania had participated in its design, Trump added.
Others in attendance included key White House figures, such as Defence Secretary Pete Hegseth, chief of staff Monica Crowley, and Trump's son-in-law Jared Kushner.
They were joined by scores of US officials, as well as conservative broadcasters, tech industry bosses, social media CEOs and corporate executives.
Apple's Tim Cook and Nvidia's Jensen Huang were seated at the same table as Trump and Xi, as was Elon Musk, who previously worked in Trump's administration leading the effort to shrink government.
OpenAI's Sam Altman, Google's Sundar Pichai, and Amazon's Jeff Bezos were also present, as were Mark Zuckerberg and Jeff Yass, the American billionaire who owns a share of TikTok.
The leaders of companies including General Motors, Visa, Paramount Skydance and ExxonMobil could also be seen in the room.
"Everybody wanted to be there," Trump said ahead of the event. "I would say you have the entire tech world, the entire banking world, and a lot more."
One notable absence was Anthropic - one of the biggest and most valuable AI firms in the world. The BBC has asked Anthropic if it was invited, or if they chose not to be there.
The office of the First Lady Melania Trump, which planned the event, said the dinner menu would showcase "American ingredients with subtle Chinese influence".
The first course was yellow squash, wild mushrooms and crispy pancetta. The guests ate off red tablecloths - red being a symbol of luck and good fortune in China.
For their main course they dined on a sesame-crusted sea bass, braised bok choy and roasted eggplant.
Dessert featured the two leaders and their fellow diners tucking into vanilla crémeux with sour cherry confit, with an accompanying ice cream "made with harvested White House honey".
The wine chosen by the first lady included Schramsberg Blanc De Noir - a nod to President Nixon's 1972 "Toast to Peace" with former Chinese Premier Zhou Enlai, when they used a bottle from the same vineyard.
Trump and Xi will begin the final day of their visit on Friday with tea at the White House's Red Room with their wives.
The group will then head to the US National Archives for a tour of the building and its exhibits.
Formally called the National Archives and Records Administration, the building holds some of the most important documents regarding the founding of the United States - including the US Constitution, the Declaration of Independence and the Bill of Rights.
Xi and his wife will depart Washington later in the day.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cxq63dqp93n1o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T10:36:55+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/602f/live/4a515750-b8a7-11f1-a430-4d16ee157c41.jpg",
    readTime: 10,
  },
  {
    id: "warsh-s-regime-change-at-the-fed-pushes-17276369",
    title: "Warsh's regime change at the Fed pushes ahead – and meets resistance",
    titleJa: "Warsh's regime change at the Fed pushes ahead – and meets resistance",
    summaryJa: "Fed Chairman Kevin Warsh is driving rapid change in some areas, while his emerging policy framework suggests further rate hikes remain possible.",
    bodyOriginal: `Chairman Kevin Warsh likes to measure his tenure as Federal Reserve chairman in days, and 127 days in, his promise of regime change is taking shape. He's moving fast on some easy and very visible items directly in his control but is constrained from making bigger changes by the state of the economy and by his colleagues on the Fed.
Warsh has quickly put his stamp on the way the Fed communicates. Some changes appear cosmetic, such as shortening the news conference that occurs after meetings of the Fed's rate-setting Federal Open Market Committee and changing the seating arrangements for reporters to be alphabetical by news organization. But those cosmetic changes hide a more profound shift: the way Warsh thinks about and communicates his views on monetary policy represents a sharp break from his predecessors.
Warsh hasn't been able to act yet on one of his key priorities, cutting the Fed's balance sheet, in part because inflation is a more pressing concern. And he constrained himself on other priorities by appointing five task forces to examine Fed practices. They are supposed to report back early next year.
Last week's unanimous quarter-point interest rate increase and any ones that follow will likely be the highlights of Warsh's early tenure in a move that answered his critics' concern about his independence from President Donald Trump. Based on how he has explained his way of thinking about markets and the economy, Warsh seems likely to support additional hikes if inflation remains a problem. Last week's increase was the first since 2023.
For a Fed chairman who prides himself on taking signals from the market, Wall Street is sending a strong one. The 2-year Treasury yield traded nearly a full percentage point above the effective federal funds rate on Wednesday, indicating traders expect more rate increases. It's the largest spread of the 2-year over the funds rate since 2023. Inflation is running at 3.7% as measured by the Fed's preferred personal consumption expenditures indicator in July, the most recent reading. It has been above the central bank's 2% target for more than 5½ years.
Fed chairs for years described the funds rate as either accommodative, neutral or restrictive. But asked at his Sept. 16 news conference where the Fed was relative to neutral, Warsh dismissed the very premise. He responded that the concept is "useful academically" but had no bearing on the decision to hike.
The comments caused consternation among some in the central banking world who had been accustomed to thinking of the funds rate in those terms.
"What is odd is that Warsh framed the decision as 'removing a dose of accommodation' and then distanced himself from the concept that defines accommodation,'' wrote economist Claudia Sahm. "But now that the Fed has hiked, how will he judge whether to hike again, and when to stop?"
Warsh's critics argued after his vague performance in July that he lacked credibility because he hadn't articulated a consistent theory for how to set interest rates. Yet a careful look at Warsh's public comments suggests a new regime for determining policy is being gradually articulated.
That regime encompasses a broad array of financial and market indicators. Three times in his Jackson Hole, Wyoming, speech and three more times in his most recent news conference, Warsh highlighted "financial conditions" as a key to his thinking. He said a review of market conditions indicated to him that conditions were not restrictive.
He pointed in Jackson Hole to "the level and change in asset prices across sectors ... the prices and trading volumes of Treasury securities ... the foreign exchange value of the dollar ... the cost and availability of credit ... and the price of a broad set of commodities." Warsh went on to say: "These and other indicators should inform the Fed's near-term outlook on economic activity and inflation throughout the business cycle. They should also reveal the state of broader financial conditions ... and the risks and uncertainties in the financial cycle.''
That logic may strike some as circular, since expectations for the Fed form a large part of financial conditions. So the feedback can amount to the market telling the Fed what it expects the central bank to do.
But taken at face value, the comments indicate scope for further hikes. The stock market remains buoyant; the labor market is robust; most financial conditions indicators continue to show little restraint, either in lending or borrowing. Growth looks to be strong.
The market is sending the same message with the probability of a follow-on hike in October at 70%, and as many as two more priced in from now until March.
Warsh's focus on sometimes arcane market indicators is more intense than previous chairs and somewhat reminiscent of former Fed Chair Alan Greenspan, who was famous for digging deeply into everything from company capital expenditures plans to scrap metal prices.
In his Jackson Hole speech, Warsh said he was watching a suite of indicators for monetary expansion including credit spreads, the Fed's Senior Loan Officer Opinion Survey, which gauges the willingness of banks to lend, and credit availability and demand. His conclusion? Money is easy.
"That helps explain the growth we've seen this year in those loans," he said. "Credit and loan markets are showing few signs of policy restraint." Easy credit conditions would not necessarily require rate hikes. In Warsh's formulation, the central bank could need to lean against a private credit system making credit too easy when inflation is running above target.
"We should pay attention to money created by the central bank and money that comes from the banking and financial systems," Warsh said at Jackson Hole. Continuing loose credit conditions clear the way for further rate increases in Warsh's framework. But hikes will be likely only if inflation remains high along with oil and diesel prices.
"The recent rise in overall commodity prices also bears watching," Warsh said at Jackson Hole. The Bloomberg Commodity Index, a broad measure of commodity prices, is up more than 30% this year. Some energy products are faring worse: diesel has risen 83%.
A slower pace for other Fed officials
It's unclear if other members of the FOMC have cast off the neutral framework and adopted one more closely aligned with Warsh's broad concept of financial conditions. While those conditions have always been part of the way Fed officials have evaluated policy, few speak about them now as much more than just a part of their decision-making. Former Fed Chair Jerome Powell often noted how difficult it was to determine the neutral rate, but still often described rates as "modestly restrictive."
So far, Warsh has been virtually alone in refusing to forecast the outlook for the funds rate in the Summary of Economic Projections, the so-called dot plot. And many board members also continue to offer their outlooks for the economy and rates in speeches and interviews, a practice Warsh has rejected.
That reluctance highlights the slower parts of regime change so far. Warsh inherited his committee and the economy he has to steward, both of which work together to slow the reforms Warsh wants to put in place.
Reform has arguably been slowest on what may be Warsh's longest-standing policy priority. Since at least 2011, Warsh said the Fed should reverse the growth in its balance sheet, now at $6.7 trillion. He hasn't committed to a plan for making that happen, which could mean selling securities the Fed already owns or allowing bonds to mature without replacing them. He quit his first stint on the Fed's board that year because he was uncomfortable with the growth in the balance sheet, though he said he voted for expanding it out of loyalty to the institution.
Now, back and in control of the Fed's agenda, Warsh finds himself unable to quickly follow through on his plans for balance sheet cuts, even though that could in theory have taken more accommodation out of the economy. The FOMC's minutes for July show other voters were reluctant to move quickly toward cutting the balance sheet, preferring to wait for Warsh's task forces to report back.
The state of the economy and the markets also may have complicated Warsh's plans. With inflation above the Fed's target and oil surging, the committee had an immediate need to address prices, making it the wrong time to experiment with whether Warsh was right that cutting the balance sheet would meaningfully restrain the economy.
Meanwhile, the yield on the 10-year Treasury has risen above 5%, pulling up rates on mortgages and other consumer debt with it. That makes this a particularly inopportune time for the Fed to start asking the market to take on additional supply of mortgages and Treasury notes if the Fed were to reduce the balance sheet.`,
    bodyJa: `Chairman Kevin Warsh likes to measure his tenure as Federal Reserve chairman in days, and 127 days in, his promise of regime change is taking shape. He's moving fast on some easy and very visible items directly in his control but is constrained from making bigger changes by the state of the economy and by his colleagues on the Fed.
Warsh has quickly put his stamp on the way the Fed communicates. Some changes appear cosmetic, such as shortening the news conference that occurs after meetings of the Fed's rate-setting Federal Open Market Committee and changing the seating arrangements for reporters to be alphabetical by news organization. But those cosmetic changes hide a more profound shift: the way Warsh thinks about and communicates his views on monetary policy represents a sharp break from his predecessors.
Warsh hasn't been able to act yet on one of his key priorities, cutting the Fed's balance sheet, in part because inflation is a more pressing concern. And he constrained himself on other priorities by appointing five task forces to examine Fed practices. They are supposed to report back early next year.
Last week's unanimous quarter-point interest rate increase and any ones that follow will likely be the highlights of Warsh's early tenure in a move that answered his critics' concern about his independence from President Donald Trump. Based on how he has explained his way of thinking about markets and the economy, Warsh seems likely to support additional hikes if inflation remains a problem. Last week's increase was the first since 2023.
For a Fed chairman who prides himself on taking signals from the market, Wall Street is sending a strong one. The 2-year Treasury yield traded nearly a full percentage point above the effective federal funds rate on Wednesday, indicating traders expect more rate increases. It's the largest spread of the 2-year over the funds rate since 2023. Inflation is running at 3.7% as measured by the Fed's preferred personal consumption expenditures indicator in July, the most recent reading. It has been above the central bank's 2% target for more than 5½ years.
Fed chairs for years described the funds rate as either accommodative, neutral or restrictive. But asked at his Sept. 16 news conference where the Fed was relative to neutral, Warsh dismissed the very premise. He responded that the concept is "useful academically" but had no bearing on the decision to hike.
The comments caused consternation among some in the central banking world who had been accustomed to thinking of the funds rate in those terms.
"What is odd is that Warsh framed the decision as 'removing a dose of accommodation' and then distanced himself from the concept that defines accommodation,'' wrote economist Claudia Sahm. "But now that the Fed has hiked, how will he judge whether to hike again, and when to stop?"
Warsh's critics argued after his vague performance in July that he lacked credibility because he hadn't articulated a consistent theory for how to set interest rates. Yet a careful look at Warsh's public comments suggests a new regime for determining policy is being gradually articulated.
That regime encompasses a broad array of financial and market indicators. Three times in his Jackson Hole, Wyoming, speech and three more times in his most recent news conference, Warsh highlighted "financial conditions" as a key to his thinking. He said a review of market conditions indicated to him that conditions were not restrictive.
He pointed in Jackson Hole to "the level and change in asset prices across sectors ... the prices and trading volumes of Treasury securities ... the foreign exchange value of the dollar ... the cost and availability of credit ... and the price of a broad set of commodities." Warsh went on to say: "These and other indicators should inform the Fed's near-term outlook on economic activity and inflation throughout the business cycle. They should also reveal the state of broader financial conditions ... and the risks and uncertainties in the financial cycle.''
That logic may strike some as circular, since expectations for the Fed form a large part of financial conditions. So the feedback can amount to the market telling the Fed what it expects the central bank to do.
But taken at face value, the comments indicate scope for further hikes. The stock market remains buoyant; the labor market is robust; most financial conditions indicators continue to show little restraint, either in lending or borrowing. Growth looks to be strong.
The market is sending the same message with the probability of a follow-on hike in October at 70%, and as many as two more priced in from now until March.
Warsh's focus on sometimes arcane market indicators is more intense than previous chairs and somewhat reminiscent of former Fed Chair Alan Greenspan, who was famous for digging deeply into everything from company capital expenditures plans to scrap metal prices.
In his Jackson Hole speech, Warsh said he was watching a suite of indicators for monetary expansion including credit spreads, the Fed's Senior Loan Officer Opinion Survey, which gauges the willingness of banks to lend, and credit availability and demand. His conclusion? Money is easy.
"That helps explain the growth we've seen this year in those loans," he said. "Credit and loan markets are showing few signs of policy restraint." Easy credit conditions would not necessarily require rate hikes. In Warsh's formulation, the central bank could need to lean against a private credit system making credit too easy when inflation is running above target.
"We should pay attention to money created by the central bank and money that comes from the banking and financial systems," Warsh said at Jackson Hole. Continuing loose credit conditions clear the way for further rate increases in Warsh's framework. But hikes will be likely only if inflation remains high along with oil and diesel prices.
"The recent rise in overall commodity prices also bears watching," Warsh said at Jackson Hole. The Bloomberg Commodity Index, a broad measure of commodity prices, is up more than 30% this year. Some energy products are faring worse: diesel has risen 83%.
A slower pace for other Fed officials
It's unclear if other members of the FOMC have cast off the neutral framework and adopted one more closely aligned with Warsh's broad concept of financial conditions. While those conditions have always been part of the way Fed officials have evaluated policy, few speak about them now as much more than just a part of their decision-making. Former Fed Chair Jerome Powell often noted how difficult it was to determine the neutral rate, but still often described rates as "modestly restrictive."
So far, Warsh has been virtually alone in refusing to forecast the outlook for the funds rate in the Summary of Economic Projections, the so-called dot plot. And many board members also continue to offer their outlooks for the economy and rates in speeches and interviews, a practice Warsh has rejected.
That reluctance highlights the slower parts of regime change so far. Warsh inherited his committee and the economy he has to steward, both of which work together to slow the reforms Warsh wants to put in place.
Reform has arguably been slowest on what may be Warsh's longest-standing policy priority. Since at least 2011, Warsh said the Fed should reverse the growth in its balance sheet, now at $6.7 trillion. He hasn't committed to a plan for making that happen, which could mean selling securities the Fed already owns or allowing bonds to mature without replacing them. He quit his first stint on the Fed's board that year because he was uncomfortable with the growth in the balance sheet, though he said he voted for expanding it out of loyalty to the institution.
Now, back and in control of the Fed's agenda, Warsh finds himself unable to quickly follow through on his plans for balance sheet cuts, even though that could in theory have taken more accommodation out of the economy. The FOMC's minutes for July show other voters were reluctant to move quickly toward cutting the balance sheet, preferring to wait for Warsh's task forces to report back.
The state of the economy and the markets also may have complicated Warsh's plans. With inflation above the Fed's target and oil surging, the committee had an immediate need to address prices, making it the wrong time to experiment with whether Warsh was right that cutting the balance sheet would meaningfully restrain the economy.
Meanwhile, the yield on the 10-year Treasury has risen above 5%, pulling up rates on mortgages and other consumer debt with it. That makes this a particularly inopportune time for the Fed to start asking the market to take on additional supply of mortgages and Treasury notes if the Fed were to reduce the balance sheet.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/kevin-warsh-fed-interest-rates-balance-sheet.html",
    publishedAt: "2026-09-25T10:30:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "china-saw-surprise-jump-in-u-s-orders-ah-f82c0644",
    title: "China saw 'surprise' jump in U.S. orders ahead of Trump-Xi summit, private survey shows",
    titleJa: "China saw 'surprise' jump in U.S. orders ahead of Trump-Xi summit, private survey shows",
    summaryJa: "A private survey shows a rebound in China's exports to the U.S. as companies position for continued stability between the world's two largest economies.",
    bodyOriginal: `American businesses ramped up orders for Chinese goods in the weeks leading up to the high-stakes summit this week, as companies positioned for continued stability between the world's two largest economies.
The jump in orders was a "surprise," with shipments to the U.S. rising on both a yearly and monthly basis "as China's relative tariff position improved," according to China Beige Book, a New York-based research firm that surveyed 1,295 Chinese companies between Sept. 1-22.
The gauge measuring orders from the U.S. — calculated as the proportion of surveyed firms reporting an increase minus the share reporting a decrease — jumped to 13 in September, from negative-12 a year earlier and 3 in August, according to the report.
Even so, overall Chinese domestic and export orders remained below their levels a year earlier, and new orders weakened from August, the report showed.
The upswing in U.S.-bound orders came as businesses positioned for a friendlier outcome at the summit between President Donald Trump and Chinese leader Xi Jinping, who is in Washington this week for his first state visit in more than a decade.
The two countries agreed to extend by two months to January a trade truce that keeps tariffs lower, suspends restrictive controls on rare earth exports and holds off higher port fees on ships.
The U.S. also reportedly planned to delay a threatened round of tariffs tied to industrial overcapacity until at least after this week's summit, easing near-term pressure on Chinese exporters.
The effective U.S. tariff rate on Chinese goods of around 23% remains well above the average levy the U.S. imposes on other major trading partners, according to Barclays.
The export order figures align with recent official data that showed China's ports saw their busiest week on record in the run-up to the summit, another sign that trade flows were recovering amid hopes for a further thaw in bilateral relations.
Following the truce extension, Eurasia Group raised its odds of continued stability in the bilateral relationship to the highest level since Trump returned to office. The shorter-than-expected extension of the truce is also unlikely to reignite tensions, the consultancy firm said.
"Neither government has an interest in renewed escalation," said Dan Wang, China director at Eurasia Group, who expects both sides to press each other for near-term commitments to maintain the fragile stability.
Washington is likely to seek further progress on expedited Chinese approval of rare-earth export licenses for U.S. end users, as well as increased purchases of U.S. agricultural goods, Wang said, and in return, Beijing would expect the White House to maintain its current pause on arms sales to Taiwan.
The two leaders are expected to meet again at the APEC summit in Shenzhen in November, and potentially on the sidelines of the G20 summit the U.S. is hosting in Miami in December. No bilateral meeting after this week's summit has been confirmed.`,
    bodyJa: `American businesses ramped up orders for Chinese goods in the weeks leading up to the high-stakes summit this week, as companies positioned for continued stability between the world's two largest economies.
The jump in orders was a "surprise," with shipments to the U.S. rising on both a yearly and monthly basis "as China's relative tariff position improved," according to China Beige Book, a New York-based research firm that surveyed 1,295 Chinese companies between Sept. 1-22.
The gauge measuring orders from the U.S. — calculated as the proportion of surveyed firms reporting an increase minus the share reporting a decrease — jumped to 13 in September, from negative-12 a year earlier and 3 in August, according to the report.
Even so, overall Chinese domestic and export orders remained below their levels a year earlier, and new orders weakened from August, the report showed.
The upswing in U.S.-bound orders came as businesses positioned for a friendlier outcome at the summit between President Donald Trump and Chinese leader Xi Jinping, who is in Washington this week for his first state visit in more than a decade.
The two countries agreed to extend by two months to January a trade truce that keeps tariffs lower, suspends restrictive controls on rare earth exports and holds off higher port fees on ships.
The U.S. also reportedly planned to delay a threatened round of tariffs tied to industrial overcapacity until at least after this week's summit, easing near-term pressure on Chinese exporters.
The effective U.S. tariff rate on Chinese goods of around 23% remains well above the average levy the U.S. imposes on other major trading partners, according to Barclays.
The export order figures align with recent official data that showed China's ports saw their busiest week on record in the run-up to the summit, another sign that trade flows were recovering amid hopes for a further thaw in bilateral relations.
Following the truce extension, Eurasia Group raised its odds of continued stability in the bilateral relationship to the highest level since Trump returned to office. The shorter-than-expected extension of the truce is also unlikely to reignite tensions, the consultancy firm said.
"Neither government has an interest in renewed escalation," said Dan Wang, China director at Eurasia Group, who expects both sides to press each other for near-term commitments to maintain the fragile stability.
Washington is likely to seek further progress on expedited Chinese approval of rare-earth export licenses for U.S. end users, as well as increased purchases of U.S. agricultural goods, Wang said, and in return, Beijing would expect the White House to maintain its current pause on arms sales to Taiwan.
The two leaders are expected to meet again at the APEC summit in Shenzhen in November, and potentially on the sidelines of the G20 summit the U.S. is hosting in Miami in December. No bilateral meeting after this week's summit has been confirmed.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/china-exports-surplus-trade-tariffs-.html",
    publishedAt: "2026-09-25T10:25:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "us-backs-elon-musk-s-bid-to-overturn-120-d0fede88",
    title: "US backs Elon Musk's bid to overturn €120m EU fine against X",
    titleJa: "US backs Elon Musk's bid to overturn €120m EU fine against X",
    summaryJa: "The EU had said X \"deceives users\" by selling blue ticks without \"meaningfully verifying\" accounts.",
    bodyOriginal: `US backs Elon Musk's bid to overturn €120m EU fine against X
- Published
The US government is seeking to join Elon Musk's legal challenge to overturn a €120m (£105m) EU fine against X over its blue tick badges.
In December 2025, the European Commission said the platform "deceives users" by allowing people to pay for a blue verified check mark, because it is not "meaningfully verifying" who is behind the account.
But US Assistant Attorney General Brett A. Shumate said on Thursday that the commission had "inappropriately attempted" to expand its reach to American companies outside its control.
Musk, who spent millions helping elect Donald Trump and other Republicans, has previously claimed EU tech regulation "inhibits progress" for companies.
The US Department of Justice (DOJ) has filed an application, external with the EU's General Court in support of Musk's and X's attempts to dismiss the case.
It claims that under a section of law in the Statute of the Court of Justice of the EU, a state may intervene in disputes before the court if it "can establish an interest in the result of the case to the court".
The DOJ said the US "has a clear interest" in ensuring any decision by the commission was applied consistently with "how territorial jurisdiction is generally understood in international law".
It also wants to make sure it would not "otherwise prejudice" US-headquartered digital services that "contribute significantly" to its economy.
In a press briefing on Friday, external, European Commission spokesperson Thomas Regnier said it was "ready to defend" its position in court.
He added that the commission had an "solid case" at its disposal, due to the alleged breach of its Digital Services Act.
They are carrying out, of course, the hearing and the ruling, but I can tell you from our side is that we have a very solid case that we have advanced indeed with the €120 million fine against X last year in December,
and the Commission is of course absolutely ready to defend its position in court. And a follow up.
In addition to its use of blue ticks, EU regulators accused X of failing to provide transparency around its adverts and denying researchers access to public data.
Henna Virkkunen, the regulator's executive vice-president for tech sovereignty, said at the time of the fine's issue it was "holding X responsible for undermining users' rights and evading accountability".
"Deceiving users with blue checkmarks, obscuring information on ads and shutting out researchers have no place online in the EU," she said.
US Secretary of State Marco Rubio and the Federal Communications Commission (FCC) had criticised the EU regulator, accusing it of attacking and censoring US firms.
"The European Commission's fine isn't just an attack on X, it's an attack on all American tech platforms and the American people by foreign governments," Rubio wrote in a post on X.
"The days of censoring Americans online are over."
His remarks were reposted by Musk, who added "absolutely".
The European Commission denied targeting any specific nationality, stating it is simply protecting its digital and democratic standards to maintain its role as a global benchmark.
The action marked the Commission's first official non-compliance decision under the Digital Services Act (DSA), one of two mandatory rulebooks governing online platforms in the EU.
However, the EU is also conducting several other investigations into the platform, including one into its integrated AI assistant Grok over concerns it was used to create sexualised images of real people.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
- Published15 January
- Published12 July 2024
- Published24 November 2025`,
    bodyJa: `US backs Elon Musk's bid to overturn €120m EU fine against X
- Published
The US government is seeking to join Elon Musk's legal challenge to overturn a €120m (£105m) EU fine against X over its blue tick badges.
In December 2025, the European Commission said the platform "deceives users" by allowing people to pay for a blue verified check mark, because it is not "meaningfully verifying" who is behind the account.
But US Assistant Attorney General Brett A. Shumate said on Thursday that the commission had "inappropriately attempted" to expand its reach to American companies outside its control.
Musk, who spent millions helping elect Donald Trump and other Republicans, has previously claimed EU tech regulation "inhibits progress" for companies.
The US Department of Justice (DOJ) has filed an application, external with the EU's General Court in support of Musk's and X's attempts to dismiss the case.
It claims that under a section of law in the Statute of the Court of Justice of the EU, a state may intervene in disputes before the court if it "can establish an interest in the result of the case to the court".
The DOJ said the US "has a clear interest" in ensuring any decision by the commission was applied consistently with "how territorial jurisdiction is generally understood in international law".
It also wants to make sure it would not "otherwise prejudice" US-headquartered digital services that "contribute significantly" to its economy.
In a press briefing on Friday, external, European Commission spokesperson Thomas Regnier said it was "ready to defend" its position in court.
He added that the commission had an "solid case" at its disposal, due to the alleged breach of its Digital Services Act.
They are carrying out, of course, the hearing and the ruling, but I can tell you from our side is that we have a very solid case that we have advanced indeed with the €120 million fine against X last year in December,
and the Commission is of course absolutely ready to defend its position in court. And a follow up.
In addition to its use of blue ticks, EU regulators accused X of failing to provide transparency around its adverts and denying researchers access to public data.
Henna Virkkunen, the regulator's executive vice-president for tech sovereignty, said at the time of the fine's issue it was "holding X responsible for undermining users' rights and evading accountability".
"Deceiving users with blue checkmarks, obscuring information on ads and shutting out researchers have no place online in the EU," she said.
US Secretary of State Marco Rubio and the Federal Communications Commission (FCC) had criticised the EU regulator, accusing it of attacking and censoring US firms.
"The European Commission's fine isn't just an attack on X, it's an attack on all American tech platforms and the American people by foreign governments," Rubio wrote in a post on X.
"The days of censoring Americans online are over."
His remarks were reposted by Musk, who added "absolutely".
The European Commission denied targeting any specific nationality, stating it is simply protecting its digital and democratic standards to maintain its role as a global benchmark.
The action marked the Commission's first official non-compliance decision under the Digital Services Act (DSA), one of two mandatory rulebooks governing online platforms in the EU.
However, the EU is also conducting several other investigations into the platform, including one into its integrated AI assistant Grok over concerns it was used to create sexualised images of real people.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
- Published15 January
- Published12 July 2024
- Published24 November 2025`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cq0m373ee0v0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T09:48:33+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fed0/live/93ad40c0-b8c1-11f1-ad1f-538855f30ba1.jpg",
    readTime: 9,
  },
  {
    id: "farmers-down-240-million-litres-of-milk-bd8beab9",
    title: "Farmers down 240 million litres of milk after heat",
    titleJa: "Farmers down 240 million litres of milk after heat",
    summaryJa: "Milk yield was affected by a series of extreme heatwaves which led to poor grazing conditions, researchers say.",
    bodyOriginal: `Farmers down 240 million litres of milk after heat
- Published
Extreme heat this summer has led to dairy farmers delivering 240 million fewer litres of milk than expected, researchers have said.
Farmers delivered four fewer days of milk supply than would be expected between May and August, according to the Energy and Climate Intelligence Unit (ECIU).
With the heat leading to poor grazing conditions, stunted harvests and heat strain on livestock in England and Wales, many farmers have started giving winter feed to cattle, including Debbie Wilkins, a dairy and beef farmer in Gloucestershire.
"The costs pile up when you have to bring the cows indoors and the loss of milk production compounds the issue," she said.
More from Gloucestershire
Council leader voted out after no confidence motion
- Published35 minutes ago
Cotswolds home to UK's first air taxi centre
- Published6 hours ago
Rare Bronze Age finds unearthed in city dig
- Published17 hours ago
Wilkins, who farms in Prior's Norton, said it had been a "difficult" summer.
In total, the ECIU said dairy farmers lost milk valued at more than £83m - enough milk to fill more than one billion school milk cartons.
It follows the UK's hottest summer on record in 2026, with five intense heatwaves and drought declarations.
But while farmers delivered significantly less than expected over the summer, the ECIU said UK milk production could still hit near record levels in 2026.
It said this was because farmers built up a cushion earlier in 2026 which had partially offset the litres lost over the summer.
ECIU said the consolidation of dairy farms in recent years had allowed for "economies of scale and mechanisation to increase milk outputs while the herd size reduces".
Tom Cantillon, a senior analyst at ECIU, said future heatwaves would become progressively harder to recover from, especially as milk was an "unforgiving product in farming" as it cannot be stockpiled.
"The costs don't stop now that the rain has come," Cantillon said.
"A second bad year for grass has pushed farmers into their winter forage early, with feed prices to follow."
Cantillon said farmers needed help to roll out climate resilience measures such as more shade, trees and water.
Get in touch
Your Voice
Related topics
- Published30 July
- Published28 August 2025
- Published14 January 2025`,
    bodyJa: `Farmers down 240 million litres of milk after heat
- Published
Extreme heat this summer has led to dairy farmers delivering 240 million fewer litres of milk than expected, researchers have said.
Farmers delivered four fewer days of milk supply than would be expected between May and August, according to the Energy and Climate Intelligence Unit (ECIU).
With the heat leading to poor grazing conditions, stunted harvests and heat strain on livestock in England and Wales, many farmers have started giving winter feed to cattle, including Debbie Wilkins, a dairy and beef farmer in Gloucestershire.
"The costs pile up when you have to bring the cows indoors and the loss of milk production compounds the issue," she said.
More from Gloucestershire
Council leader voted out after no confidence motion
- Published35 minutes ago
Cotswolds home to UK's first air taxi centre
- Published6 hours ago
Rare Bronze Age finds unearthed in city dig
- Published17 hours ago
Wilkins, who farms in Prior's Norton, said it had been a "difficult" summer.
In total, the ECIU said dairy farmers lost milk valued at more than £83m - enough milk to fill more than one billion school milk cartons.
It follows the UK's hottest summer on record in 2026, with five intense heatwaves and drought declarations.
But while farmers delivered significantly less than expected over the summer, the ECIU said UK milk production could still hit near record levels in 2026.
It said this was because farmers built up a cushion earlier in 2026 which had partially offset the litres lost over the summer.
ECIU said the consolidation of dairy farms in recent years had allowed for "economies of scale and mechanisation to increase milk outputs while the herd size reduces".
Tom Cantillon, a senior analyst at ECIU, said future heatwaves would become progressively harder to recover from, especially as milk was an "unforgiving product in farming" as it cannot be stockpiled.
"The costs don't stop now that the rain has come," Cantillon said.
"A second bad year for grass has pushed farmers into their winter forage early, with feed prices to follow."
Cantillon said farmers needed help to roll out climate resilience measures such as more shade, trees and water.
Get in touch
Your Voice
Related topics
- Published30 July
- Published28 August 2025
- Published14 January 2025`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjvgy7qd20wgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-25T05:30:13+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3125/live/7d6b4f20-b838-11f1-bc1f-3f186ca4140c.jpg",
    readTime: 6,
  },
  {
    id: "oracle-japan-shares-surge-7-after-record-e4e655df",
    title: "Oracle Japan shares surge 7% after record fiscal first quarter, bucking selloff of U.S. parent",
    titleJa: "Oracle Japan shares surge 7% after record fiscal first quarter, bucking selloff of U.S. parent",
    summaryJa: "Oracle Japan shares surged after the company reported record fiscal first-quarter sales and profits.",
    bodyOriginal: `Shares of Oracle Corp Japan surged more than 7% Friday after the company reported record fiscal first-quarter sales and profits, as its cloud business posted strong growth.
The rally in Tokyo stood in contrast to a more than 3% drop in U.S.-listed Oracle shares overnight, after the company sent a "force majeure" notice tied to its New Mexico data center project.
The Japanese arm said Thursday that net sales for the June-August quarter rose 13% from a year earlier to 74.86 billion yen ($472 million), while operating profit jumped 22.7% to 25.92 billion yen. Net profit climbed 23.2% to 18.25 billion yen.
Net sales and all profit items hit record highs for a fiscal first quarter, the company said.
Cloud revenue jumped 31.7% year on year to 25.14 billion yen, increasing its share of total sales to 33.6% from 28.8% a year earlier.
Oracle Japan said demand for cloud infrastructure had driven usage of its Tokyo and Osaka data centers. The company also said it plans to expand its sovereign cloud offering and strengthen its AI solutions in Japan.
The company maintained its full-year outlook for sales growth of 6-10%.
Oracle in 2024 committed more than $8 billion to cloud and AI infrastructure in Japan over a decade, while SoftBank has rolled out sovereign cloud and generative AI services using Oracle technology.`,
    bodyJa: `Shares of Oracle Corp Japan surged more than 7% Friday after the company reported record fiscal first-quarter sales and profits, as its cloud business posted strong growth.
The rally in Tokyo stood in contrast to a more than 3% drop in U.S.-listed Oracle shares overnight, after the company sent a "force majeure" notice tied to its New Mexico data center project.
The Japanese arm said Thursday that net sales for the June-August quarter rose 13% from a year earlier to 74.86 billion yen ($472 million), while operating profit jumped 22.7% to 25.92 billion yen. Net profit climbed 23.2% to 18.25 billion yen.
Net sales and all profit items hit record highs for a fiscal first quarter, the company said.
Cloud revenue jumped 31.7% year on year to 25.14 billion yen, increasing its share of total sales to 33.6% from 28.8% a year earlier.
Oracle Japan said demand for cloud infrastructure had driven usage of its Tokyo and Osaka data centers. The company also said it plans to expand its sovereign cloud offering and strengthen its AI solutions in Japan.
The company maintained its full-year outlook for sales growth of 6-10%.
Oracle in 2024 committed more than $8 billion to cloud and AI infrastructure in Japan over a decade, while SoftBank has rolled out sovereign cloud and generative AI services using Oracle technology.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/oracle-japan-shares-earnings.html",
    publishedAt: "2026-09-25T01:56:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "china-s-xi-urges-u-s-to-cooperate-on-ai-8ba6c48f",
    title: "China's Xi urges U.S. to cooperate on AI",
    titleJa: "China's Xi urges U.S. to cooperate on AI",
    summaryJa: "U.S. President Donald Trump hosted Chinese President Xi Jinping on Thursday at the White House.",
    bodyOriginal: `BEIJING — Chinese President Xi Jinping told U.S. President Donald Trump that there is more opportunity for cooperation than competition on artificial intelligence.
That's according to a state media readout of the two leaders' meeting in the White House Oval Office Thursday local time.
"The two sides can continue AI dialogue, exchange views on risks and benefits, and together guard against the misuse or malicious use of AI," Xi said in Chinese, according to a CNBC translation of the state media readout.
He noted AI is important to both the U.S. and China. "Both sides have competition. Cooperation, even more so," he said.
Xi also emphasized that humans should maintain control of the technology, and that AI should support human progress.
The U.S. has restricted China's ability to access advanced semiconductors for training AI models, and criticized Chinese companies for allegedly taking part in illicit distillation of American AI capabilities.
Recent incidents have raised fears that increasingly autonomous AI models could make attacks faster and harder to contain.
Following a meeting with Chinese negotiators in New York, U.S. Treasury Secretary Scott Bessent said earlier this week the two sides had discussed setting up a "U.S.-China AI Dialogue." He said the U.S. proposed introducing an alert system for AI incidents.
China's Commerce Ministry confirmed Thursday that its senior trade negotiators had held their first talks with the U.S. on artificial intelligence.`,
    bodyJa: `BEIJING — Chinese President Xi Jinping told U.S. President Donald Trump that there is more opportunity for cooperation than competition on artificial intelligence.
That's according to a state media readout of the two leaders' meeting in the White House Oval Office Thursday local time.
"The two sides can continue AI dialogue, exchange views on risks and benefits, and together guard against the misuse or malicious use of AI," Xi said in Chinese, according to a CNBC translation of the state media readout.
He noted AI is important to both the U.S. and China. "Both sides have competition. Cooperation, even more so," he said.
Xi also emphasized that humans should maintain control of the technology, and that AI should support human progress.
The U.S. has restricted China's ability to access advanced semiconductors for training AI models, and criticized Chinese companies for allegedly taking part in illicit distillation of American AI capabilities.
Recent incidents have raised fears that increasingly autonomous AI models could make attacks faster and harder to contain.
Following a meeting with Chinese negotiators in New York, U.S. Treasury Secretary Scott Bessent said earlier this week the two sides had discussed setting up a "U.S.-China AI Dialogue." He said the U.S. proposed introducing an alert system for AI incidents.
China's Commerce Ministry confirmed Thursday that its senior trade negotiators had held their first talks with the U.S. on artificial intelligence.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/chinas-xi-urges-us-to-cooperate-on-ai.html",
    publishedAt: "2026-09-25T01:22:17+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "atlanta-is-getting-pandas-china-s-xi-rev-fb70a251",
    title: "Atlanta is getting pandas: China's Xi revives a longtime diplomatic strategy at summit with U.S.",
    titleJa: "Atlanta is getting pandas: China's Xi revives a longtime diplomatic strategy at summit with U.S.",
    summaryJa: "Chinese President Xi Jinping promised two giant pandas to Zoo Atlanta, reviving Beijing's decades-old charm offensive.",
    bodyOriginal: `Chinese leader Xi Jinping promised two giant pandas to Zoo Atlanta, reviving Beijing's decades-old charm offensive on the opening day of his first state visit to the U.S. in more than a decade.
Two giant pandas, Ping Ping and Fu Shuang, from a research base in Chengdu will arrive at the Georgia zoo "in the coming days," Xi said. They would be Zoo Atlanta's first pandas since its previous four returned to China in November 2024, when it became the last U.S. zoo to lose its bears.
The Chinese president made the announcement at the start of his state visit in Washington, where he and President Donald Trump are meeting through Friday on an agenda spanning artificial intelligence, tariffs, critical minerals, Taiwan and the Iran war.
"The giant panda has been an envoy of friendship between the Chinese and Americans," he said at a White House ceremony.
China has used pandas as a diplomatic barometer since Mao Zedong sent a pair to Washington's National Zoo following Richard Nixon's 1972 visit, a gift so anticipated that more than a million people came to see the animals in their first year.
Beijing shifted from gifting pandas outright to leasing them in 1984, and the loans have since tracked the temperature of the relationship — thinning as trade and Taiwan tensions rose, then resuming as San Diego and the Washington DC National Zoo took in new pairs in 2024.
Pandas on loan to the U.S. have bred 17 cubs, including six in San Diego, four in Washington and seven in Atlanta, according to Chinese state media.
"Panda diplomacy conveys a message of friendship and goodwill from China," said Wu Xinbo, director of the Center for American Studies at Fudan University. "Americans may not like China, but they will certainly like pandas."
The gesture would improve the atmosphere between the world's two largest economies and generate positive momentum in bilateral relations, he said.
Experts have kept expectations muted for a summit likely to yield few major deliverables, even as the leaders' first meeting carries real geopolitical risk.
"For Beijing, the message is friendship without requiring major policy concessions. For Washington, it's a reminder that even amid intense competition, there is room for visible, people-to-people engagement," said Han Shen Lin, associate professor at NYU Shanghai.
Xi also said China would invite 100,000 young Americans to study there over the next five years.
Trump greeted Xi planeside at Joint Base Andrews on Wednesday, a welcome rarely extended to visiting heads of state. It is Xi's first state visit to the U.S. since Barack Obama's presidency more than a decade ago. He arrived in the U.S. on Wednesday and is scheduled to leave Friday.`,
    bodyJa: `Chinese leader Xi Jinping promised two giant pandas to Zoo Atlanta, reviving Beijing's decades-old charm offensive on the opening day of his first state visit to the U.S. in more than a decade.
Two giant pandas, Ping Ping and Fu Shuang, from a research base in Chengdu will arrive at the Georgia zoo "in the coming days," Xi said. They would be Zoo Atlanta's first pandas since its previous four returned to China in November 2024, when it became the last U.S. zoo to lose its bears.
The Chinese president made the announcement at the start of his state visit in Washington, where he and President Donald Trump are meeting through Friday on an agenda spanning artificial intelligence, tariffs, critical minerals, Taiwan and the Iran war.
"The giant panda has been an envoy of friendship between the Chinese and Americans," he said at a White House ceremony.
China has used pandas as a diplomatic barometer since Mao Zedong sent a pair to Washington's National Zoo following Richard Nixon's 1972 visit, a gift so anticipated that more than a million people came to see the animals in their first year.
Beijing shifted from gifting pandas outright to leasing them in 1984, and the loans have since tracked the temperature of the relationship — thinning as trade and Taiwan tensions rose, then resuming as San Diego and the Washington DC National Zoo took in new pairs in 2024.
Pandas on loan to the U.S. have bred 17 cubs, including six in San Diego, four in Washington and seven in Atlanta, according to Chinese state media.
"Panda diplomacy conveys a message of friendship and goodwill from China," said Wu Xinbo, director of the Center for American Studies at Fudan University. "Americans may not like China, but they will certainly like pandas."
The gesture would improve the atmosphere between the world's two largest economies and generate positive momentum in bilateral relations, he said.
Experts have kept expectations muted for a summit likely to yield few major deliverables, even as the leaders' first meeting carries real geopolitical risk.
"For Beijing, the message is friendship without requiring major policy concessions. For Washington, it's a reminder that even amid intense competition, there is room for visible, people-to-people engagement," said Han Shen Lin, associate professor at NYU Shanghai.
Xi also said China would invite 100,000 young Americans to study there over the next five years.
Trump greeted Xi planeside at Joint Base Andrews on Wednesday, a welcome rarely extended to visiting heads of state. It is Xi's first state visit to the U.S. since Barack Obama's presidency more than a decade ago. He arrived in the U.S. on Wednesday and is scheduled to leave Friday.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/china-us-xi-trump-visit-panda-student-visa-.html",
    publishedAt: "2026-09-25T01:12:19+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 7,
  },
  {
    id: "here-s-who-is-attending-the-trump-xi-sta-b9486453",
    title: "Here's who is attending the Trump-Xi state dinner",
    titleJa: "Here's who is attending the Trump-Xi state dinner",
    summaryJa: "U.S. President Donald Trump hosted a dinner Thursday for Chinese President Xi Jinping.",
    bodyOriginal: `U.S. government officials, business leaders and their spouses dominated a list of more than 100 people who will attend a state dinner Thursday, according to a White House press release.
On the Chinese side, the delegation consisted primarily of government officials, accompanying Chinese President Xi Jinping and U.S. President Donald Trump and their wives.
Talks with Trump have "added new substance" to U.S.-China relations, Xi said in a toast, according to an official translation. Trump gave Xi a statue of a bald eagle.
The U.S. and Chinese presidential couples were seated with Apple's Tim Cook, Nvidia's Jensen Huang and his wife, Elon Musk and AMD's Lisa Su.
Meta and OpenAI were among the other major U.S. tech companies represented. Anthropic was not on the list.
The two-course menu included a silky yellow squash velouté with crispy pancetta, sesame-crusted sea bass served over braised baby bok choy, and a fruit-shaped vanilla cremeux with ice cream made with White House honey.
Other attendees included members of Trump's extended family, including Melania's father Viktor Knavs.
Chinese business leaders were previously expected to attend the dinner. Earlier, CNBC reported that someone briefed about the preparations but who wasn't authorized to speak on the record said they weren't aware of any Chinese companies who have been invited to join Xi on his trip.
Xi is making his first state visit to the U.S. since Barack Obama's presidency more than a decade ago. He arrived in the U.S. on Wednesday and is scheduled to leave Friday.
Here's the full list:
- President Donald J. Trump
- First Lady Melania Trump
- President Xi Jinping
- Madame Peng Liyuan
- Vice President JD Vance
- Second Lady Usha Vance
- Secretary of State Marco Rubio
- Jeanette Rubio, Spouse of the Secretary of State
- Chief of Staff Susie Wiles
- U.S. Ambassador to China David Perdue
- Bonnie Perdue, Spouse of the U.S. Ambassador to China
- Secretary of the Treasury Scott Bessent
- John Freeman, Spouse of the Secretary of the Treasury
- Secretary of War Pete Hegseth
- Ambassador Jamieson Greer, United States Trade Representative
- Marlo Greer, Spouse of Ambassador Greer
- Cai Qi, CPC Political Bureau Standing Committee Member, Chief of Staff to President Xi
- Wang Yi, CPC Political Bureau Central Committee Member
- He Lifeng, CPC Political Bureau Central Committee, Vice Premier of State Council
- Zheng Shanjie, Chairman of the National Development and Reform Commission
- Wang Wentao, Minister of Commerce
- Ma Zhaoxu, Executive Vice Foreign Minister
- Ambassador Xie Feng, Chinese Ambassador to the United States
- Hong Lei, Assistant Foreign Minister Director General, Protocol Department
- Cai Wei, Assistant Foreign Minister Director General, Department of North American and Oceanian Affairs
- Mao Ning, Director General, Department of Press, Communication and Public Diplomacy, Ministry of Foreign Affairs
- Zhang Quan, Secretary to Madame Peng
- Zhang Yongchao, Deputy Director General, Department of North American and Oceanian Affairs, Ministry of Foreign Affairs
- Tang Fangyu, Director, Central Policy Research Office of the CPC Central Committee
- Lan Fo'an, Minister of Finance
- Wang Dan, Wife of Ambassador Xie Feng
- Zhou Hongxu, Deputy Director, General Office of the CPC Central Committee Director, Central Security Bureau
- Ms. Ivanka Trump
- Mr. Eric Trump
- Ms. Lara Trump
- Ms. Tiffany Trump
- Mr. Michael Boulos
- Mr. Viktor Knavs
- Ms. Arabella Kushner
- Jensen Huang, Nvidia, CEO
- Lori Huang, Spouse of Jensen Huang
- Mark Zuckerberg, Meta, CEO
- Dr. Lisa Su, Advanced Micro Devices, CEO
- Daniel Lin, Spouse of Lisa Su
- Tim Cook, Chairman of the Board of Apple
- John F.W. Rogers, Goldman Sachs EVP and Secretary to the Board
- Lynn Martin, President of the NYSE
- Linda Mills, President of New York University
- Eric Yuan, Zoom, CEO
- Lyu Luhua, Secretary to the President
- Kelly Ortberg, Boeing, CEO
- Larry Fink, Blackrock, CEO
- Stephen Schwarzman, Blackstone, CEO
- Sam Altman, OpenAI, CEO
- Greg Brockman, OpenAI, President & Co-Founder
- Anna Brockman, Wife of Greg Brockman
- Dr. Miriam Adelson, Las Vegas Sand, Controlling Shareholder
- Sergey Brin, Google/Alphabet, Co-Founder
- Gerelyn Gilbert-Soto, Partner of Sergey Brin
- Satya Nadella, Microsoft, Chairman & CEO
- Jim Taiclet, Lockheed Martin, Chairman, President & CEO
- Sundar Pichai, Google, CEO
- Larry Culp, GE Aerospace, CEO
- Sanjay Mehrotra, Micron, CEO
- Cristiano Amon, Qualcomm, CEO
- Jeff Bezos, Amazon, Chairman
- Lauren Sanchez-Bezos, Spouse of Jeff Bezos
- Jeff Yass, TikTok
- Jamie Dimon, JP Morgan, CEO
- Michael Dell, Dell, CEO
- Mary Barra, General Motors, CEO
- David Solomon, Goldman Sachs, CEO
- Jane Fraser, Citi, CEO
- Elon Musk, SpaceX & Tesla, CEO
- Darren Woods, ExxonMobil, CEO
- Chief Justice John Roberts, Chief Supreme Court Justice
- Jane Sullivan Roberts, Chief Supreme Court Justice Spouse
- Justice Amy Coney Barrett, Supreme Court Justice
- Jesse Barrett, Supreme Court Justice Spouse
- Justice Brett Kavanaugh, Supreme Court Justice
- Ashley Estes Kavanaugh, Spouse of Supreme Court Justice
- Speaker Mike Johnson, United States House of Representatives, Louisiana
- Kelly Johnson, Spouse of Speaker Mike Johnson
- Bret Baier, FOX News, American Journalist and Host
- Amy Baier, Spouse of Brett Baier
- Laura Ingraham, FOX News, American Television Presenter
- Representative Richard McCormick, United States House of Representatives, Georgia
- Jesse Watters, FOX News Host
- Emma Watters, Spouse of Jesse Watters
- David Ellison, Paramount Skydance, CEO
- Susan Dell, Spouse to Michael Dell
- Kevin Warsh, Chairman of the Federal Reserve
- Jane Lauder, Spouse to Kevin Warsh
- Secretary Howard Lutnick, Secretary of Commerce
- Allison Lutnick, Spouse to Secretary Lutnick
- Director John Ratcliffe, Director of the Central Intelligence Agency
- Michelle Ratcliffe, Spouse to Director Ratcliffe
- Special Envoy Steve Witkoff, U.S. Special Envoy to Middle East
- Stephen Miller, Deputy Chief of Staff for Policy and Homeland Security Advisor, Assistant to the President
- Katie Miller, Spouse of Stephen Miller
- Dan Scavino, Deputy Chief of Staff, Assistant to the President
- Erin Scavino, Spouse to Dan Scavino
- Attorney General Todd Blanche, Attorney General of the United States
- Kristine Blanche, Spouse to Attorney General Todd Blanche
- Meredith O'Rourke, The O'Rourke Group
- Secretary Chris Wright, Secretary of Energy
- Secretary Robert F. Kennedy, Secretary of Health & Human Services
- Secretary Linda McMahon, Secretary of Education
- Secretary Doug Burgum, Secretary of Interior
- Kathryn Burgum, Spouse to Secretary Burgum
- Secretary Sean Duffy, Secretary of Transportation
- Rachel Campos-Duffy, Spouse of Sean Duffy
- Director Russell Vought, Director of Office of Management & Budget
- Administrator Lee Zeldin, Administrator of the Environmental Protection Agency
- Acting Secretary Keith Sonderling, Acting Secretary of Labor
- Brad Gerstner, Altimeter, CEO
- Sangeeta Mehrota, Spouse of Sanjay Mehrotra
- Anthony Barra, Spouse of Mary Barra
- Kathy Woods, Spouse of Darren Woods
- Albert Bourla, Pfizer, CEO
- David Sacks, Co-chair, President's Council of Advisors on Science and Technology
- Administrator Kelly Loeffler, Small Business Administrator
- Jeff Sprecher, Spouse of Kelly Loeffler
- Katie Simpson, Fiancé to Brad Gerstner
- Representative Jason Smith, United States House of Representatives, Missouri
- Senator Steven Daines, United States Senator, Montana
- General Dan Caine, Chairman of the Joint Chiefs of Staff
- Director Jay Clayton, Director of Office of the Director of National Intelligence
- Bernard Arnault, LVMH, CEO
- Alexandre Arnault, Son of Bernard Arnault
- Ryan McInerey, Visa, CEO
- Michael Miebach, Mastercard, CEO
- Sandra Lynn Ellison, Spouse of David Ellison
- Cheryl Hines, Spouse of Secretary Kennedy
—CNBC's Hui Jie Lim, David Sucherman and Bria Cousins contributed to this report
Correction: This story has been updated to remove an incorrect reference to the number of Chinese officials present.`,
    bodyJa: `U.S. government officials, business leaders and their spouses dominated a list of more than 100 people who will attend a state dinner Thursday, according to a White House press release.
On the Chinese side, the delegation consisted primarily of government officials, accompanying Chinese President Xi Jinping and U.S. President Donald Trump and their wives.
Talks with Trump have "added new substance" to U.S.-China relations, Xi said in a toast, according to an official translation. Trump gave Xi a statue of a bald eagle.
The U.S. and Chinese presidential couples were seated with Apple's Tim Cook, Nvidia's Jensen Huang and his wife, Elon Musk and AMD's Lisa Su.
Meta and OpenAI were among the other major U.S. tech companies represented. Anthropic was not on the list.
The two-course menu included a silky yellow squash velouté with crispy pancetta, sesame-crusted sea bass served over braised baby bok choy, and a fruit-shaped vanilla cremeux with ice cream made with White House honey.
Other attendees included members of Trump's extended family, including Melania's father Viktor Knavs.
Chinese business leaders were previously expected to attend the dinner. Earlier, CNBC reported that someone briefed about the preparations but who wasn't authorized to speak on the record said they weren't aware of any Chinese companies who have been invited to join Xi on his trip.
Xi is making his first state visit to the U.S. since Barack Obama's presidency more than a decade ago. He arrived in the U.S. on Wednesday and is scheduled to leave Friday.
Here's the full list:
- President Donald J. Trump
- First Lady Melania Trump
- President Xi Jinping
- Madame Peng Liyuan
- Vice President JD Vance
- Second Lady Usha Vance
- Secretary of State Marco Rubio
- Jeanette Rubio, Spouse of the Secretary of State
- Chief of Staff Susie Wiles
- U.S. Ambassador to China David Perdue
- Bonnie Perdue, Spouse of the U.S. Ambassador to China
- Secretary of the Treasury Scott Bessent
- John Freeman, Spouse of the Secretary of the Treasury
- Secretary of War Pete Hegseth
- Ambassador Jamieson Greer, United States Trade Representative
- Marlo Greer, Spouse of Ambassador Greer
- Cai Qi, CPC Political Bureau Standing Committee Member, Chief of Staff to President Xi
- Wang Yi, CPC Political Bureau Central Committee Member
- He Lifeng, CPC Political Bureau Central Committee, Vice Premier of State Council
- Zheng Shanjie, Chairman of the National Development and Reform Commission
- Wang Wentao, Minister of Commerce
- Ma Zhaoxu, Executive Vice Foreign Minister
- Ambassador Xie Feng, Chinese Ambassador to the United States
- Hong Lei, Assistant Foreign Minister Director General, Protocol Department
- Cai Wei, Assistant Foreign Minister Director General, Department of North American and Oceanian Affairs
- Mao Ning, Director General, Department of Press, Communication and Public Diplomacy, Ministry of Foreign Affairs
- Zhang Quan, Secretary to Madame Peng
- Zhang Yongchao, Deputy Director General, Department of North American and Oceanian Affairs, Ministry of Foreign Affairs
- Tang Fangyu, Director, Central Policy Research Office of the CPC Central Committee
- Lan Fo'an, Minister of Finance
- Wang Dan, Wife of Ambassador Xie Feng
- Zhou Hongxu, Deputy Director, General Office of the CPC Central Committee Director, Central Security Bureau
- Ms. Ivanka Trump
- Mr. Eric Trump
- Ms. Lara Trump
- Ms. Tiffany Trump
- Mr. Michael Boulos
- Mr. Viktor Knavs
- Ms. Arabella Kushner
- Jensen Huang, Nvidia, CEO
- Lori Huang, Spouse of Jensen Huang
- Mark Zuckerberg, Meta, CEO
- Dr. Lisa Su, Advanced Micro Devices, CEO
- Daniel Lin, Spouse of Lisa Su
- Tim Cook, Chairman of the Board of Apple
- John F.W. Rogers, Goldman Sachs EVP and Secretary to the Board
- Lynn Martin, President of the NYSE
- Linda Mills, President of New York University
- Eric Yuan, Zoom, CEO
- Lyu Luhua, Secretary to the President
- Kelly Ortberg, Boeing, CEO
- Larry Fink, Blackrock, CEO
- Stephen Schwarzman, Blackstone, CEO
- Sam Altman, OpenAI, CEO
- Greg Brockman, OpenAI, President & Co-Founder
- Anna Brockman, Wife of Greg Brockman
- Dr. Miriam Adelson, Las Vegas Sand, Controlling Shareholder
- Sergey Brin, Google/Alphabet, Co-Founder
- Gerelyn Gilbert-Soto, Partner of Sergey Brin
- Satya Nadella, Microsoft, Chairman & CEO
- Jim Taiclet, Lockheed Martin, Chairman, President & CEO
- Sundar Pichai, Google, CEO
- Larry Culp, GE Aerospace, CEO
- Sanjay Mehrotra, Micron, CEO
- Cristiano Amon, Qualcomm, CEO
- Jeff Bezos, Amazon, Chairman
- Lauren Sanchez-Bezos, Spouse of Jeff Bezos
- Jeff Yass, TikTok
- Jamie Dimon, JP Morgan, CEO
- Michael Dell, Dell, CEO
- Mary Barra, General Motors, CEO
- David Solomon, Goldman Sachs, CEO
- Jane Fraser, Citi, CEO
- Elon Musk, SpaceX & Tesla, CEO
- Darren Woods, ExxonMobil, CEO
- Chief Justice John Roberts, Chief Supreme Court Justice
- Jane Sullivan Roberts, Chief Supreme Court Justice Spouse
- Justice Amy Coney Barrett, Supreme Court Justice
- Jesse Barrett, Supreme Court Justice Spouse
- Justice Brett Kavanaugh, Supreme Court Justice
- Ashley Estes Kavanaugh, Spouse of Supreme Court Justice
- Speaker Mike Johnson, United States House of Representatives, Louisiana
- Kelly Johnson, Spouse of Speaker Mike Johnson
- Bret Baier, FOX News, American Journalist and Host
- Amy Baier, Spouse of Brett Baier
- Laura Ingraham, FOX News, American Television Presenter
- Representative Richard McCormick, United States House of Representatives, Georgia
- Jesse Watters, FOX News Host
- Emma Watters, Spouse of Jesse Watters
- David Ellison, Paramount Skydance, CEO
- Susan Dell, Spouse to Michael Dell
- Kevin Warsh, Chairman of the Federal Reserve
- Jane Lauder, Spouse to Kevin Warsh
- Secretary Howard Lutnick, Secretary of Commerce
- Allison Lutnick, Spouse to Secretary Lutnick
- Director John Ratcliffe, Director of the Central Intelligence Agency
- Michelle Ratcliffe, Spouse to Director Ratcliffe
- Special Envoy Steve Witkoff, U.S. Special Envoy to Middle East
- Stephen Miller, Deputy Chief of Staff for Policy and Homeland Security Advisor, Assistant to the President
- Katie Miller, Spouse of Stephen Miller
- Dan Scavino, Deputy Chief of Staff, Assistant to the President
- Erin Scavino, Spouse to Dan Scavino
- Attorney General Todd Blanche, Attorney General of the United States
- Kristine Blanche, Spouse to Attorney General Todd Blanche
- Meredith O'Rourke, The O'Rourke Group
- Secretary Chris Wright, Secretary of Energy
- Secretary Robert F. Kennedy, Secretary of Health & Human Services
- Secretary Linda McMahon, Secretary of Education
- Secretary Doug Burgum, Secretary of Interior
- Kathryn Burgum, Spouse to Secretary Burgum
- Secretary Sean Duffy, Secretary of Transportation
- Rachel Campos-Duffy, Spouse of Sean Duffy
- Director Russell Vought, Director of Office of Management & Budget
- Administrator Lee Zeldin, Administrator of the Environmental Protection Agency
- Acting Secretary Keith Sonderling, Acting Secretary of Labor
- Brad Gerstner, Altimeter, CEO
- Sangeeta Mehrota, Spouse of Sanjay Mehrotra
- Anthony Barra, Spouse of Mary Barra
- Kathy Woods, Spouse of Darren Woods
- Albert Bourla, Pfizer, CEO
- David Sacks, Co-chair, President's Council of Advisors on Science and Technology
- Administrator Kelly Loeffler, Small Business Administrator
- Jeff Sprecher, Spouse of Kelly Loeffler
- Katie Simpson, Fiancé to Brad Gerstner
- Representative Jason Smith, United States House of Representatives, Missouri
- Senator Steven Daines, United States Senator, Montana
- General Dan Caine, Chairman of the Joint Chiefs of Staff
- Director Jay Clayton, Director of Office of the Director of National Intelligence
- Bernard Arnault, LVMH, CEO
- Alexandre Arnault, Son of Bernard Arnault
- Ryan McInerey, Visa, CEO
- Michael Miebach, Mastercard, CEO
- Sandra Lynn Ellison, Spouse of David Ellison
- Cheryl Hines, Spouse of Secretary Kennedy
—CNBC's Hui Jie Lim, David Sucherman and Bria Cousins contributed to this report
Correction: This story has been updated to remove an incorrect reference to the number of Chinese officials present.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/25/heres-who-is-attending-the-trump-xi-state-dinner.html",
    publishedAt: "2026-09-25T01:02:40+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "3-things-micron-investors-need-to-watch-c4188a59",
    title: "3 things Micron investors need to watch as the stakes get higher",
    titleJa: "3 things Micron investors need to watch as the stakes get higher",
    summaryJa: "When Micron reports earnings next week, a Rosenblatt analyst expects to hear about additional customer agreements, rising prices and stock buybacks.",
    bodyOriginal: `When Micron reports earnings next week, a Rosenblatt analyst expects to hear about additional customer agreements, rising prices and stock buybacks.`,
    bodyJa: `When Micron reports earnings next week, a Rosenblatt analyst expects to hear about additional customer agreements, rising prices and stock buybacks.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/3-things-micron-investors-need-to-watch-as-the-stakes-get-higher-e53fde7e?mod=mw_rss_topstories",
    publishedAt: "2026-09-24T23:28:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-54177591",
    readTime: 2,
  },
  {
    id: "x-planes-are-they-needed-in-the-new-era-041d8f44",
    title: "X-planes: Are they needed in the new era of drones?",
    titleJa: "X-planes: Are they needed in the new era of drones?",
    summaryJa: "X-planes: Are they needed in the new era of drones?- Published",
    bodyOriginal: `X-planes: Are they needed in the new era of drones?
- Published
There's a weird and wonderful jet flying over the US. It has the nose of anteater, parts cannibalised from other planes and a cockpit so far back the pilot depends on a camera to see where he's going.
This contraption, the X-59, might just be the future of air travel.
The X-59's owes its eccentric design to the problem of sonic booms. The shockwave created by a jet breaking the sound barrier restricted Concorde to flights over the sea and barred it from lucrative routes across the US.
Now Nasa is working around that problem using the X-59's elongated snout to flatten supersonic booms into tolerable bumps in the background.
On top of its bizarre appearance the X-59 boasts a remarkable lineage. It's the latest in a series of experimental Nasa aircraft dating back to 1947 and the first plane to break the sound barrier, the Bell X-1.
Peter Coen, a 43-year Nasa veteran who manages the programme, explains the thinking behind 80 years of X-planes. "Our approach is to pick small goals we aim to prove with flight data and we construct an airframe for that one task."
The X-plane philosophy is to "minimise goals, the more goals you have the more expensive it gets." For the X-59 it's about suppressing sonic booms on a budget and nothing else.
In the case of the X-1, flown through the sound barrier in 1947 by the legendary test pilot Chuck Yeager, Nasa knew a .50 calibre bullet travelled faster than the speed of sound. So the stumpy little aircraft was shaped like a bullet with wings added.
A mere 20 years later the X-15 rocket plane, a cylinder with tiny wings dropped from a B-52 bomber, flew to 6.7 times the speed of sound (4,520 mph) and the edge of space, paving the way for heat-resistant materials vital to the Space Shuttle.
Nasa is flying the X-59 in conjunction with community surveys to assess what people think when a supersonic boom is bent by the planes stretched nose and hushed up.
"We want to figure out what level of boom is acceptable to people on a regular basis," says Coen, who reckons his machine will sound "like a car door being closed across the street" when it flies past Mach 1, around 660mph at airline cruising altitude.
With its cockpit and ejector seat taken from a T-38 training jet, its landing gear from an F-16 fighter and engine courtesy of the F-18 this jigsaw of an aircraft was assembled by Lockheed Martin for Nasa.
A camera feeding a screen in front of the pilot relies on instantaneous computer processing to get round the lack of forward vision. It first flew in 2025 and is now breaking the sound barrier over chosen US towns.
But is there still a place for X-plane projects in a world where relatively cheap drones are being rapidly developed - not least in Ukraine's war against Russia.
Even Nasa considered an uncrewed X-59. But drones are not always a cheaper option.
Removing the pilot would have added the cost and complication of certifying a robot jet to fly fast over urban areas.
Plus the X-59 had to be big enough to resemble an airliner punching through the sound barrier, which in turn allowed space for a cockpit.
Nasa is no stranger to drone X-planes. The X-48, a scaled down model of an airliner that blends wing and fuselage to create a single lifting body, flew in 2007.
Small was beautiful for the tiny X-48 with its 20ft wingspan as this kept the programme within budget.
"It's likely that future X-planes will be uncrewed," says Coen, before adding the vital caveats "unless the technology we're researching relates to piloting or if crewing it is more cost-effective".
Guy Gratton, professor of Aircraft Test and Evaluation at Cranfield University, gets frustrated at the suggestion crewed test planes have had their day.
"There's a belief in certain quarters that drones can do everything. In Ukraine they've done amazing things with drones, but if you want to carry people you can't take short-cuts."
Gratton has tested light aircraft and stresses the importance of a human in the loop. "You lose a huge amount without pilots, you miss lessons a pilot would identify, plus it can take four times as many people on the ground to test a drone."
Staff monitoring signals from a drone are an indirect cost that keeps some piloted X-planes relatively affordable.
The UK has flown its own technology testbeds and Chris Yeo was in the pilot's seat of one. The Experimental Aircraft Programme (EAP) flew from Lancashire in 1986 and tried out core systems for the Typhoon fighter.
Yeo acknowledges the EAP's shared heritage with X-planes. "They all research some facet of flight, and demonstrate the design is working correctly. A lot of people say they can do something, but you only know it works when the design has been tested and certified."
Forty years on from Yeo's EAP flights a new UK technology demonstrator is taking shape. It is, says Tony Godbold who runs the project for BAE Systems, "the X-plane of our generation".
This BAE Systems initiative pulls together 100 UK suppliers including Rolls-Royce to test out ideas that might make it into the Global Combat Air Programme (GCAP), a fighter due to fly in the 2030s. The technology demonstrator will borrow engines from the existing Typhoon and fly sometime in 2028.
This has triggered great excitement in the UK's small community of qualified fast jet test pilots. Almost every one, around 14 of them says Godbold, has already tried out this plane on a flight simulator.
For many in the aerospace industry, the human element still matters as much as it did in Yeager's day. "You can model a lot on computers and simulators, but the experience of test pilots is when stuff gets real, we only really learn things when we get their feedback," Godbold admits.
There's a political dimension to such jets too. Godbold says his plane underlines the UK's commitment to GCAP, a joint effort with Italy and Japan. "This proves we are serious in this space."
- Published3 July
- Published30 July
- Published28 July`,
    bodyJa: `X-planes: Are they needed in the new era of drones?
- Published
There's a weird and wonderful jet flying over the US. It has the nose of anteater, parts cannibalised from other planes and a cockpit so far back the pilot depends on a camera to see where he's going.
This contraption, the X-59, might just be the future of air travel.
The X-59's owes its eccentric design to the problem of sonic booms. The shockwave created by a jet breaking the sound barrier restricted Concorde to flights over the sea and barred it from lucrative routes across the US.
Now Nasa is working around that problem using the X-59's elongated snout to flatten supersonic booms into tolerable bumps in the background.
On top of its bizarre appearance the X-59 boasts a remarkable lineage. It's the latest in a series of experimental Nasa aircraft dating back to 1947 and the first plane to break the sound barrier, the Bell X-1.
Peter Coen, a 43-year Nasa veteran who manages the programme, explains the thinking behind 80 years of X-planes. "Our approach is to pick small goals we aim to prove with flight data and we construct an airframe for that one task."
The X-plane philosophy is to "minimise goals, the more goals you have the more expensive it gets." For the X-59 it's about suppressing sonic booms on a budget and nothing else.
In the case of the X-1, flown through the sound barrier in 1947 by the legendary test pilot Chuck Yeager, Nasa knew a .50 calibre bullet travelled faster than the speed of sound. So the stumpy little aircraft was shaped like a bullet with wings added.
A mere 20 years later the X-15 rocket plane, a cylinder with tiny wings dropped from a B-52 bomber, flew to 6.7 times the speed of sound (4,520 mph) and the edge of space, paving the way for heat-resistant materials vital to the Space Shuttle.
Nasa is flying the X-59 in conjunction with community surveys to assess what people think when a supersonic boom is bent by the planes stretched nose and hushed up.
"We want to figure out what level of boom is acceptable to people on a regular basis," says Coen, who reckons his machine will sound "like a car door being closed across the street" when it flies past Mach 1, around 660mph at airline cruising altitude.
With its cockpit and ejector seat taken from a T-38 training jet, its landing gear from an F-16 fighter and engine courtesy of the F-18 this jigsaw of an aircraft was assembled by Lockheed Martin for Nasa.
A camera feeding a screen in front of the pilot relies on instantaneous computer processing to get round the lack of forward vision. It first flew in 2025 and is now breaking the sound barrier over chosen US towns.
But is there still a place for X-plane projects in a world where relatively cheap drones are being rapidly developed - not least in Ukraine's war against Russia.
Even Nasa considered an uncrewed X-59. But drones are not always a cheaper option.
Removing the pilot would have added the cost and complication of certifying a robot jet to fly fast over urban areas.
Plus the X-59 had to be big enough to resemble an airliner punching through the sound barrier, which in turn allowed space for a cockpit.
Nasa is no stranger to drone X-planes. The X-48, a scaled down model of an airliner that blends wing and fuselage to create a single lifting body, flew in 2007.
Small was beautiful for the tiny X-48 with its 20ft wingspan as this kept the programme within budget.
"It's likely that future X-planes will be uncrewed," says Coen, before adding the vital caveats "unless the technology we're researching relates to piloting or if crewing it is more cost-effective".
Guy Gratton, professor of Aircraft Test and Evaluation at Cranfield University, gets frustrated at the suggestion crewed test planes have had their day.
"There's a belief in certain quarters that drones can do everything. In Ukraine they've done amazing things with drones, but if you want to carry people you can't take short-cuts."
Gratton has tested light aircraft and stresses the importance of a human in the loop. "You lose a huge amount without pilots, you miss lessons a pilot would identify, plus it can take four times as many people on the ground to test a drone."
Staff monitoring signals from a drone are an indirect cost that keeps some piloted X-planes relatively affordable.
The UK has flown its own technology testbeds and Chris Yeo was in the pilot's seat of one. The Experimental Aircraft Programme (EAP) flew from Lancashire in 1986 and tried out core systems for the Typhoon fighter.
Yeo acknowledges the EAP's shared heritage with X-planes. "They all research some facet of flight, and demonstrate the design is working correctly. A lot of people say they can do something, but you only know it works when the design has been tested and certified."
Forty years on from Yeo's EAP flights a new UK technology demonstrator is taking shape. It is, says Tony Godbold who runs the project for BAE Systems, "the X-plane of our generation".
This BAE Systems initiative pulls together 100 UK suppliers including Rolls-Royce to test out ideas that might make it into the Global Combat Air Programme (GCAP), a fighter due to fly in the 2030s. The technology demonstrator will borrow engines from the existing Typhoon and fly sometime in 2028.
This has triggered great excitement in the UK's small community of qualified fast jet test pilots. Almost every one, around 14 of them says Godbold, has already tried out this plane on a flight simulator.
For many in the aerospace industry, the human element still matters as much as it did in Yeager's day. "You can model a lot on computers and simulators, but the experience of test pilots is when stuff gets real, we only really learn things when we get their feedback," Godbold admits.
There's a political dimension to such jets too. Godbold says his plane underlines the UK's commitment to GCAP, a joint effort with Italy and Japan. "This proves we are serious in this space."
- Published3 July
- Published30 July
- Published28 July`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9q92x359xdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-24T23:03:53+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/44d0/live/25738d60-97e9-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 10,
  },
  {
    id: "we-re-all-broke-would-you-chase-a-frien-e54e0f17",
    title: "'We're all broke': Would you chase a friend for £5?",
    titleJa: "'We're all broke': Would you chase a friend for £5?",
    summaryJa: "'We're all broke': Would you chase a friend for £5?- Published",
    bodyOriginal: `'We're all broke': Would you chase a friend for £5?
- Published
You pick up the bill for dinner, pay for the taxi home or grab a friend's coffee with the promise they'll pay you back later, but days go by and the money never arrives.
At what point do you ask them for it again and how small is too small to chase?
For some, $5 (£3.70) is worth a reminder, while for others, asking a friend to repay anything under $20 (£15) feels more awkward than simply taking the hit.
Henry Payne says he's "sent a request for $8.50, but I wouldn't go lower than $8".
The 21-year-old New Yorker adds that he will chase someone once but "two requests is insane".
"I would rather swallow the $8.50 than send another request."
He does admit that he's sometimes the person on the other side of the transaction and can be forgetful himself.
"For everyone that I haven't sent back money to, I just forgot, feel free to double request me."
Kaz Jahanbini, 19, says needing to ask to be paid back in the first place can be frustrating.
"If someone bought me something, I'm immediately paying them back. So then I'm thinking for them, what's the delay?"
His rule for navigating friendship and finances is to "keep your wallet close but your friends closer".
His friend Nouria agrees and says as a student "every extra dollar counts" but she would usually only ask for money back from a friend if it was more than $10.
A recent study, external found that 76% of Gen Z who have fronted money for a group expense, like a trip or event, say they were not fully repaid, and 55% say it created tension or negatively affected a relationship.
For British student Betsie Brooke-Taylor, 19, the threshold to ask for money back is a fiver as she says "every little helps".
She sees a cultural difference between the UK and US and even though "we are all broke, I think Americans are a bit more generous".
Betsie also thinks technology makes settling small debts easier in the US, where payment apps such as Venmo are widely used.
Venmo lets users send and request money through an app which includes the function of sending a reminder if someone hasn't paid you. In the US, more than 95 million people have a Venmo account, external.
"In the UK you have to ask for the account number and sort code, and not everyone has that on hand," she says.
For 19-year-old Annika Violet, the amount she would ask back from a friend depends on whether she's consistently paying for them.
"I prefer to do something where I get them this time and they get me next time but if I'm consistently paying and you're not, then I will request the $5."
Unlike many, Annika doesn't find money conversations uncomfortable.
"I am so confrontational, I do not find it awkward. If you're my friend, you would pay me back."
Annika's friend Hanako Stepper says she finds it awkward asking for money but wishes she didn't.
"I've never chased anyone - I'm just sad if I don't get paid back."
Annika's advice to those who do struggle to ask is to "be brave and bold".
"If they are going to give you flak about it, maybe it's a sign they are not a good friend."
How do you ask for money back without making it awkward?
Money expert Laura Pomfret says many people feel embarrassed about asking to be paid back, and Britons in particular can find it awkward.
"We're often very British about asking for money back," she says, suggesting people may be worried about being judged as a "cheapskate".
Her top tips for asking friends to pay up are:
She adds that you shouldn't convince yourself that a debt is too small to justify asking for it as "if you want the money paid back then the amount shouldn't matter".
And if the same friend repeatedly fails to pay, Pomfret suggests remembering it the next time you're about to pay for them and think twice.
Several people the BBC spoke to said the amount itself mattered less when somebody repeatedly failed to pay.
New York student Ella Feuille, 21, says $15 is roughly the point at which she would consider requesting money.
If a significant amount was owed, Ella says she would ask around three times before giving up but wouldn't necessarily forget about it.
"I have friends who I know now it has to go on their card because they're not going to pay me back."
Her friend Katrina Dimingot agrees and says she much prefers a method where "we don't pay each other back, we just take it in turns to get things for each other".`,
    bodyJa: `'We're all broke': Would you chase a friend for £5?
- Published
You pick up the bill for dinner, pay for the taxi home or grab a friend's coffee with the promise they'll pay you back later, but days go by and the money never arrives.
At what point do you ask them for it again and how small is too small to chase?
For some, $5 (£3.70) is worth a reminder, while for others, asking a friend to repay anything under $20 (£15) feels more awkward than simply taking the hit.
Henry Payne says he's "sent a request for $8.50, but I wouldn't go lower than $8".
The 21-year-old New Yorker adds that he will chase someone once but "two requests is insane".
"I would rather swallow the $8.50 than send another request."
He does admit that he's sometimes the person on the other side of the transaction and can be forgetful himself.
"For everyone that I haven't sent back money to, I just forgot, feel free to double request me."
Kaz Jahanbini, 19, says needing to ask to be paid back in the first place can be frustrating.
"If someone bought me something, I'm immediately paying them back. So then I'm thinking for them, what's the delay?"
His rule for navigating friendship and finances is to "keep your wallet close but your friends closer".
His friend Nouria agrees and says as a student "every extra dollar counts" but she would usually only ask for money back from a friend if it was more than $10.
A recent study, external found that 76% of Gen Z who have fronted money for a group expense, like a trip or event, say they were not fully repaid, and 55% say it created tension or negatively affected a relationship.
For British student Betsie Brooke-Taylor, 19, the threshold to ask for money back is a fiver as she says "every little helps".
She sees a cultural difference between the UK and US and even though "we are all broke, I think Americans are a bit more generous".
Betsie also thinks technology makes settling small debts easier in the US, where payment apps such as Venmo are widely used.
Venmo lets users send and request money through an app which includes the function of sending a reminder if someone hasn't paid you. In the US, more than 95 million people have a Venmo account, external.
"In the UK you have to ask for the account number and sort code, and not everyone has that on hand," she says.
For 19-year-old Annika Violet, the amount she would ask back from a friend depends on whether she's consistently paying for them.
"I prefer to do something where I get them this time and they get me next time but if I'm consistently paying and you're not, then I will request the $5."
Unlike many, Annika doesn't find money conversations uncomfortable.
"I am so confrontational, I do not find it awkward. If you're my friend, you would pay me back."
Annika's friend Hanako Stepper says she finds it awkward asking for money but wishes she didn't.
"I've never chased anyone - I'm just sad if I don't get paid back."
Annika's advice to those who do struggle to ask is to "be brave and bold".
"If they are going to give you flak about it, maybe it's a sign they are not a good friend."
How do you ask for money back without making it awkward?
Money expert Laura Pomfret says many people feel embarrassed about asking to be paid back, and Britons in particular can find it awkward.
"We're often very British about asking for money back," she says, suggesting people may be worried about being judged as a "cheapskate".
Her top tips for asking friends to pay up are:
She adds that you shouldn't convince yourself that a debt is too small to justify asking for it as "if you want the money paid back then the amount shouldn't matter".
And if the same friend repeatedly fails to pay, Pomfret suggests remembering it the next time you're about to pay for them and think twice.
Several people the BBC spoke to said the amount itself mattered less when somebody repeatedly failed to pay.
New York student Ella Feuille, 21, says $15 is roughly the point at which she would consider requesting money.
If a significant amount was owed, Ella says she would ask around three times before giving up but wouldn't necessarily forget about it.
"I have friends who I know now it has to go on their card because they're not going to pay me back."
Her friend Katrina Dimingot agrees and says she much prefers a method where "we don't pay each other back, we just take it in turns to get things for each other".`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmly439q4y27o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-24T23:00:45+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0a1b/live/c8b49cd0-b053-11f1-89e4-0bbff5cb7e23.png",
    readTime: 10,
  },
  {
    id: "why-investors-aren-t-buying-yet-another-2eae9466",
    title: "Why investors aren’t buying yet another attempt by the Treasury to calm the rattled bond market",
    titleJa: "Why investors aren’t buying yet another attempt by the Treasury to calm the rattled bond market",
    summaryJa: "Back-to-back weak auctions for Treasury notes show that government repurchases haven’t spurred demand for bonds.",
    bodyOriginal: `Back-to-back weak auctions for Treasury notes show that government repurchases haven’t spurred demand for bonds.`,
    bodyJa: `Back-to-back weak auctions for Treasury notes show that government repurchases haven’t spurred demand for bonds.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-investors-arent-buying-yet-another-attempt-by-the-treasury-to-calm-the-rattled-bond-market-b168cac3?mod=mw_rss_topstories",
    publishedAt: "2026-09-24T21:23:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-28958175",
    readTime: 2,
  },
  {
    id: "meta-gets-to-consumer-ai-device-market-b-55588a56",
    title: "Meta gets to consumer AI device market before OpenAI, but Zuckerberg's strategy remains unproven",
    titleJa: "Meta gets to consumer AI device market before OpenAI, but Zuckerberg's strategy remains unproven",
    summaryJa: "Meta CEO Mark Zuckerberg's new Muse Charm device is intended to put his company ahead of rivals like OpenAI and Google in AI agents and consumer hardware.",
    bodyOriginal: `Meta CEO Mark Zuckerberg has long been set on owning the hardware that consumers use to access his company's apps. As he pushes to make the Muse AI agent the "centerpiece" of Meta's AI strategy, he's counting on a slew of forthcoming devices to turn his dream into reality.
At Meta's annual Connect conference, which landed a week before OpenAI's big event for developers, the company said that by the end of 2026, "there will be over 100 styles of AI glasses," and Zuckerberg on Wednesday revealed a pendant called the Muse Charm, though he didn't offer a price.
Meta was late to the generative AI game, badly trailing OpenAI, Anthropic and Google, which all have popular AI models and a host of services used by consumers and businesses. Zuckerberg is trying to make up for lost time with Muse, an app that can act as a personal assistant, responding to emails, booking travel and shopping on a user's behalf.
Investors are buying in, lifting the stock 4.5% on Thursday and more than 25% since Meta announced Muse earlier this month. They're betting that, while Zuckerberg never found a big market for virtual reality after changing his company's name to Meta five years ago and shifting its strategy to the metaverse, he's now on the right track.
"Meta Connect 2026 more explicitly attached Muse AI as a killer app fused deeply into the hardware strategy, from AR glasses and extending into Muse Charm, a dedicated keychain-like device providing rapid access to Muse," wrote analysts at Mizuho, in a report on Thursday. The firm, which recommends buying the stock, said Meta's AI advancements will continue "to drive multiple expansion in Meta shares."
The Muse Charm resembles a cross between a kid's Tamagotchi keychain and a wearable medical buzzer. Zuckerberg said Meta still needs to finalize the "finishing material" and "laying out the components" to have it ready to ship for the holidays.
As ChatGPT creator OpenAI gears up for its DevDay conference next week, anticipation has been building that Sam Altman's company may show off its long-awaited hardware product, which will reportedly be a hockey puck-like speaker.
OpenAI didn't respond to a request for comment.
In getting out ahead of OpenAI, Zuckerberg is building on the momentum of Muse, which skyrocketed to the top of Apple's App Store, eclipsing ChatGPT. Meanwhile, OpenAI and Anthropic are dealing with intensifying concerns about their market-leading AI models, as critics and company execs sound the alarm about potential harms to humanity.
Getting off Apple
For Zuckerberg, the Muse Charm is just his latest hardware endeavor as he tries to end his company's reliance on Apple for distribution. It's been a particularly sticky matter since Apple changed its privacy policy in 2021, limiting the ability for app developers to target users with adds.
Meta has found some success in smart glasses through a partnership with Ray-Ban parent EssilorLuxottica. The company said Wednesday that in the coming months it will be bringing Muse to its smart glasses, offering "hands-free access, activated by saying your agent's name."
Meta also unveiled Meta VR Glasses, which are slimmer and lighter than the older Quest-branded VR headsets, but are also more expensive, costing $1,299 when they go on sale next year. It's Meta's first VR device since 2024, when the company debuted the $299 Quest 3S.
The pendant represents an entirely new device category, but many experts say there's no clear sense of market demand given the ubiquity and capability of smartphones. Zuckerberg said it will contain a fingerprint sensor that, when activated, lets people talk to their AI agent.
"Why would I carry another device?" said Anthony Ferry, CEO of the e-commerce company Wayvia, in an interview after watching the Connect presentation. For it to be valuable, it has to be "easier than using my phone," he said, adding that, "If I still have to pull out my phone to finish the job or fix the order, it's just another thing to charge."
Anshika Jain, an analyst at Counterpoint Research, said she can see the appeal.
"Meta's Muse Charm reflects a broader shift in how consumers may interact with AI in real time, with a more convenient and simpler interface for everyday life," Jain said in an email. "At the core is the Muse AI agent, which is designed to understand context and take actions in a faster way rather than just responding to queries."
Jain said the Muse Charm could find "use cases such as asking questions, getting reminders, planning or accessing information while on the go."
In addition to proving that the sudden emergence of Muse isn't just a passing fad, Zuckerberg also has to find a workable economic model for the AI agent. Amazon blocked Meta's Muse from scanning its site to shop on behalf of customers, following similar moves against Perplexity, OpenAI and Google.
Zuckerberg said he expects that "over time we will profit by taking a small fee from transactions."
Ferry said companies will "need to look at whether this is actually growing their business," and not merely benefiting Meta's bottom line.
"If it brings you a customer you wouldn't have reached, great," Ferry said. "But if the same customer buys the same product through another channel, that isn't automatically a new sale. You have to understand what it costs and whether you're getting additional business for that money."
Ralph Schackart, an analyst at William Blair, wrote in a report Thursday that, "Meta outlined a clear monetization framework, with the company expecting to generate revenue primarily by taking a small fee on transactions completed through Muse while keeping the product free for most users."
WATCH: Meta has successfully integrated AI, hardware and data.`,
    bodyJa: `Meta CEO Mark Zuckerberg has long been set on owning the hardware that consumers use to access his company's apps. As he pushes to make the Muse AI agent the "centerpiece" of Meta's AI strategy, he's counting on a slew of forthcoming devices to turn his dream into reality.
At Meta's annual Connect conference, which landed a week before OpenAI's big event for developers, the company said that by the end of 2026, "there will be over 100 styles of AI glasses," and Zuckerberg on Wednesday revealed a pendant called the Muse Charm, though he didn't offer a price.
Meta was late to the generative AI game, badly trailing OpenAI, Anthropic and Google, which all have popular AI models and a host of services used by consumers and businesses. Zuckerberg is trying to make up for lost time with Muse, an app that can act as a personal assistant, responding to emails, booking travel and shopping on a user's behalf.
Investors are buying in, lifting the stock 4.5% on Thursday and more than 25% since Meta announced Muse earlier this month. They're betting that, while Zuckerberg never found a big market for virtual reality after changing his company's name to Meta five years ago and shifting its strategy to the metaverse, he's now on the right track.
"Meta Connect 2026 more explicitly attached Muse AI as a killer app fused deeply into the hardware strategy, from AR glasses and extending into Muse Charm, a dedicated keychain-like device providing rapid access to Muse," wrote analysts at Mizuho, in a report on Thursday. The firm, which recommends buying the stock, said Meta's AI advancements will continue "to drive multiple expansion in Meta shares."
The Muse Charm resembles a cross between a kid's Tamagotchi keychain and a wearable medical buzzer. Zuckerberg said Meta still needs to finalize the "finishing material" and "laying out the components" to have it ready to ship for the holidays.
As ChatGPT creator OpenAI gears up for its DevDay conference next week, anticipation has been building that Sam Altman's company may show off its long-awaited hardware product, which will reportedly be a hockey puck-like speaker.
OpenAI didn't respond to a request for comment.
In getting out ahead of OpenAI, Zuckerberg is building on the momentum of Muse, which skyrocketed to the top of Apple's App Store, eclipsing ChatGPT. Meanwhile, OpenAI and Anthropic are dealing with intensifying concerns about their market-leading AI models, as critics and company execs sound the alarm about potential harms to humanity.
Getting off Apple
For Zuckerberg, the Muse Charm is just his latest hardware endeavor as he tries to end his company's reliance on Apple for distribution. It's been a particularly sticky matter since Apple changed its privacy policy in 2021, limiting the ability for app developers to target users with adds.
Meta has found some success in smart glasses through a partnership with Ray-Ban parent EssilorLuxottica. The company said Wednesday that in the coming months it will be bringing Muse to its smart glasses, offering "hands-free access, activated by saying your agent's name."
Meta also unveiled Meta VR Glasses, which are slimmer and lighter than the older Quest-branded VR headsets, but are also more expensive, costing $1,299 when they go on sale next year. It's Meta's first VR device since 2024, when the company debuted the $299 Quest 3S.
The pendant represents an entirely new device category, but many experts say there's no clear sense of market demand given the ubiquity and capability of smartphones. Zuckerberg said it will contain a fingerprint sensor that, when activated, lets people talk to their AI agent.
"Why would I carry another device?" said Anthony Ferry, CEO of the e-commerce company Wayvia, in an interview after watching the Connect presentation. For it to be valuable, it has to be "easier than using my phone," he said, adding that, "If I still have to pull out my phone to finish the job or fix the order, it's just another thing to charge."
Anshika Jain, an analyst at Counterpoint Research, said she can see the appeal.
"Meta's Muse Charm reflects a broader shift in how consumers may interact with AI in real time, with a more convenient and simpler interface for everyday life," Jain said in an email. "At the core is the Muse AI agent, which is designed to understand context and take actions in a faster way rather than just responding to queries."
Jain said the Muse Charm could find "use cases such as asking questions, getting reminders, planning or accessing information while on the go."
In addition to proving that the sudden emergence of Muse isn't just a passing fad, Zuckerberg also has to find a workable economic model for the AI agent. Amazon blocked Meta's Muse from scanning its site to shop on behalf of customers, following similar moves against Perplexity, OpenAI and Google.
Zuckerberg said he expects that "over time we will profit by taking a small fee from transactions."
Ferry said companies will "need to look at whether this is actually growing their business," and not merely benefiting Meta's bottom line.
"If it brings you a customer you wouldn't have reached, great," Ferry said. "But if the same customer buys the same product through another channel, that isn't automatically a new sale. You have to understand what it costs and whether you're getting additional business for that money."
Ralph Schackart, an analyst at William Blair, wrote in a report Thursday that, "Meta outlined a clear monetization framework, with the company expecting to generate revenue primarily by taking a small fee on transactions completed through Muse while keeping the product free for most users."
WATCH: Meta has successfully integrated AI, hardware and data.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/meta-mark-zuckerberg-muse-charm-openai-agent.html",
    publishedAt: "2026-09-24T21:17:08+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "history-shows-financial-calamities-occur-e28f116e",
    title: "History shows financial calamities occur when rates rise rapidly like this: 'Something always breaks'",
    titleJa: "History shows financial calamities occur when rates rise rapidly like this: 'Something always breaks'",
    summaryJa: "The 10-year Treasury note yield is spiking to levels not seen in years, and that may be a bad omen for financial markets.",
    bodyOriginal: `The yield on the 10-year Treasury note is rising to levels not seen in years. But it's not necessarily the outright level that's most concerning for those on Wall Street, it's the speed of the move.
When rates climb at such a rapid pace, history tells them something bad tends to happen.
The 10-year yield saw its most rapid one-day increase since April 7, 2025, on Wednesday, rising further on Thursday to top 5.17%, quite a move considering two weeks ago it was below 4.8% and at one point in August, it was below 4.6%.
"Something always breaks," proclaimed a recent note from John Roque, head of technical analysis at 22V Research.
Roque pointed out on a chart of the 10-year Treasury yield going back the last five decades 16 instances where it experienced a rapid advance like it is now. During each and every move, some sort of financial calamity resulted. While the scale of the crises varied in their market impact (from the jarring-but-short-lived Silicon Valley Bank failure of 2023 to the 1987 stock market crash), the jump in yields almost always led to some sort of disruption to financial markets that weighed on risk assets.
"As sure as day follows night, when the 10-year Treasury yield rises, something gets knocked out," Roque remarked to CNBC. "It just pays to be cautious."
The 10-year Treasury yield is a benchmark for borrowing costs across the economy. Everything from mortgage rates to sophisticated hedge fund trades can become contingent on a stable 10-year yield. When it soars quickly, it can unravel risky plans by companies or investors that were counting on a stable borrowing rate.
What will crack this time around? It's usually not evident until it is too late and it is not always directly related to borrowing costs on the surface. The Dotcom Bubble burst was because of a multitude of reasons, mostly unrealistic valuations for many tech businesses earning zero profits. But higher rates played their part. During the housing crisis, rising rates directly exposed the lax lending standards by banks as borrowers using floating-rate debt increasingly couldn't pay.
This time around, traders often cite the booming (and opaque) private credit market and AI datacenter plans funded too much by debt — some of it off balance sheet — as likely breaking points.
Watch the regional banks
Regional banks will be particularly important to pay attention to this time around, Roque believes, as they must perform well for the market to maintain its footing, he said. The State Street SPDR S&P Regional Banking ETF (KRE) has already fallen nearly 10% below its recent high, just a hair away from correction territory. Looking at the past mishaps sparked by high rates, the banking sector is typically punished the hardest.
"It is incumbent that the regional banks especially remain firm or have a minimal or not problematic decline," he said. "If regional banks continue to go down, and then of course banks in general, you cannot have a strong market. You cannot."
Cracks are also starting to show in utilities and homebuilders, the analyst pointed out. In the past week alone, the S&P 500 utilities sector has fallen more than 4%, becoming far and away the biggest laggard out of the index's 11 groups.
"It's taken some work for the bond market to do to convince people that rates are rising because we collectively have been conditioned to believe that rate rises are only temporary, but I think that this is different," Roque said. "This is a secular rate rise for bond yields and a secular bond bear market."
"We should be prepared or forewarned that rates are rising and something is going to break," he stressed.
JPMorgan's trading desk in a Thursday note that investors should "keep an eye on bond [volatility]," because that is usually a "bigger" headwind to stocks than their absolute levels.`,
    bodyJa: `The yield on the 10-year Treasury note is rising to levels not seen in years. But it's not necessarily the outright level that's most concerning for those on Wall Street, it's the speed of the move.
When rates climb at such a rapid pace, history tells them something bad tends to happen.
The 10-year yield saw its most rapid one-day increase since April 7, 2025, on Wednesday, rising further on Thursday to top 5.17%, quite a move considering two weeks ago it was below 4.8% and at one point in August, it was below 4.6%.
"Something always breaks," proclaimed a recent note from John Roque, head of technical analysis at 22V Research.
Roque pointed out on a chart of the 10-year Treasury yield going back the last five decades 16 instances where it experienced a rapid advance like it is now. During each and every move, some sort of financial calamity resulted. While the scale of the crises varied in their market impact (from the jarring-but-short-lived Silicon Valley Bank failure of 2023 to the 1987 stock market crash), the jump in yields almost always led to some sort of disruption to financial markets that weighed on risk assets.
"As sure as day follows night, when the 10-year Treasury yield rises, something gets knocked out," Roque remarked to CNBC. "It just pays to be cautious."
The 10-year Treasury yield is a benchmark for borrowing costs across the economy. Everything from mortgage rates to sophisticated hedge fund trades can become contingent on a stable 10-year yield. When it soars quickly, it can unravel risky plans by companies or investors that were counting on a stable borrowing rate.
What will crack this time around? It's usually not evident until it is too late and it is not always directly related to borrowing costs on the surface. The Dotcom Bubble burst was because of a multitude of reasons, mostly unrealistic valuations for many tech businesses earning zero profits. But higher rates played their part. During the housing crisis, rising rates directly exposed the lax lending standards by banks as borrowers using floating-rate debt increasingly couldn't pay.
This time around, traders often cite the booming (and opaque) private credit market and AI datacenter plans funded too much by debt — some of it off balance sheet — as likely breaking points.
Watch the regional banks
Regional banks will be particularly important to pay attention to this time around, Roque believes, as they must perform well for the market to maintain its footing, he said. The State Street SPDR S&P Regional Banking ETF (KRE) has already fallen nearly 10% below its recent high, just a hair away from correction territory. Looking at the past mishaps sparked by high rates, the banking sector is typically punished the hardest.
"It is incumbent that the regional banks especially remain firm or have a minimal or not problematic decline," he said. "If regional banks continue to go down, and then of course banks in general, you cannot have a strong market. You cannot."
Cracks are also starting to show in utilities and homebuilders, the analyst pointed out. In the past week alone, the S&P 500 utilities sector has fallen more than 4%, becoming far and away the biggest laggard out of the index's 11 groups.
"It's taken some work for the bond market to do to convince people that rates are rising because we collectively have been conditioned to believe that rate rises are only temporary, but I think that this is different," Roque said. "This is a secular rate rise for bond yields and a secular bond bear market."
"We should be prepared or forewarned that rates are rising and something is going to break," he stressed.
JPMorgan's trading desk in a Thursday note that investors should "keep an eye on bond [volatility]," because that is usually a "bigger" headwind to stocks than their absolute levels.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/history-shows-financial-calamities-occur-when-rates-rise-rapidly-like-this-something-always-breaks.html",
    publishedAt: "2026-09-24T20:57:11+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "here-s-how-to-position-your-portfolio-fo-03b3156f",
    title: "Here’s how to position your portfolio for the next AI wave, according to Morgan Stanley",
    titleJa: "Here’s how to position your portfolio for the next AI wave, according to Morgan Stanley",
    summaryJa: "There’s still room for AI hardware stocks to rise,  but analysts at Morgan Stanley say it’s time to diversify into a wide variety of industries that are starting to realize AI benefits.",
    bodyOriginal: `There’s still room for AI hardware stocks to rise,  but analysts at Morgan Stanley say it’s time to diversify into a wide variety of industries that are starting to realize AI benefits.`,
    bodyJa: `There’s still room for AI hardware stocks to rise,  but analysts at Morgan Stanley say it’s time to diversify into a wide variety of industries that are starting to realize AI benefits.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/heres-how-to-position-your-portfolio-for-the-next-ai-wave-according-to-morgan-stanley-ac8f8a4a?mod=mw_rss_topstories",
    publishedAt: "2026-09-24T20:50:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-10451752",
    readTime: 2,
  },
  {
    id: "senate-narrowly-votes-down-resolution-ca-9a175302",
    title: "Senate narrowly votes down resolution calling for end to Iran war",
    titleJa: "Senate narrowly votes down resolution calling for end to Iran war",
    summaryJa: "The vote came weeks before the midterm election, where President Donald Trump's fellow Republicans are trying to retain their majorities in Congress.",
    bodyOriginal: `The Senate on Thursday narrowly voted down a measure demanding an end to the U.S. war with Iran.
The chamber voted 49-50 on the resolution, the latest to call for an end to the war.
All but four Republicans voted against the measure despite concerns that GOP candidates will face fallout in November's midterm elections from the war's economic costs. Some Republicans running in tight races have recently broken with President Donald Trump and called for an end to the war to bring gas prices down, a sign of potential voter discontent over the war's impact on the economy.
The Republicans who voted for the resolution were Sens. Thom Tillis of North Carolina, Maine's Susan Collins, Lisa Murkowski of Alaska and Rand Paul of Kentucky. Sen. John Fetterman of Pennsylvania was the lone Democrat to vote against it.
Sen. Angela Alsobrooks, D-Md., did not vote despite having been in the Senate earlier Thursday. Alsobrooks has previously voted for similar resolutions. But if she had again voted that way on Thursday, the resolution still would have failed.
"Senator Alsobrooks has voted 13 times to end the war in Iran. Unfortunately, she was dealing with an urgent family matter during today's vote so was unable to cast her fourteenth vote to end the war in Iran," Alsobrooks' spokesperson Meredith Happy said in a statement to CNBC. "She believes every day that this war rages on, Americans are paying for it at the gas pump and the grocery store—and too many American service members have paid with their lives. She continues to urge this President to end this war once and for all."
An affirmative vote on the measure, known as a War Powers Resolution, would have directed Trump to remove U.S. troops from hostilities in Iran unless Congress explicitly approves the war.
The Senate has voted repeatedly on similar measures since the war began, approving one of them. The White House has effectively ignored that vote, arguing that the War Powers Act is unconstitutional.
The measure voted on Thursday, which like the one adopted was a so-called "concurrent resolution," did not carry the force of law and is never signed by the president, making the vote largely symbolic even if it had passed.
The Democratic leaders of the legislative push, however, argue that the Constitution vests authority to declare war in Congress, not the executive branch, and that the president must abide by their disapproval whether or not he signs it.
"The president right now is in violation of the Constitution and the War Powers Act and the concurrent resolution that we've already passed," said Sen. Tim Kaine, D-Va., who has led a number of the votes to end the war.
"We shouldn't have to do a second one because the president should follow the law, but we are doing a second one on the theory that maybe after a number of months more people will join us, the American public is even more deeply opposed to this war."
The measure cleared the House in July and faced just a 50-vote threshold to clear the Senate. Democrats have seen an uptick in Republican support in recent votes to end the war, as the administration has blown through timelines to seek congressional approval for the conflict.
The war has also created a challenging political environment for incumbent Republicans, who could lose control of the House and Senate in the midterm elections that loom less than six weeks away.
Gas prices, which have spiked throughout the conflict, currently average $4.48 per gallon nationwide, according to AAA. Recently, runaway diesel prices have begun stressing farmers and truckers and have alarmed Republicans in midwestern states, who have begun to distance themselves from the White House and call for an end to the war.
Lawmakers are set to hit the campaign trail for nearly all of October, and will need to explain to voters what they are doing to bring down prices.
"There are a lot of good things we can talk about; the problem is what you did for me recently doesn't even hardly count," said Sen. Kevin Cramer, R-N.D., when asked about how Republicans can message to economically anxious voters. "The other thing that we get to talk about ... is that at least we're not socialists."`,
    bodyJa: `The Senate on Thursday narrowly voted down a measure demanding an end to the U.S. war with Iran.
The chamber voted 49-50 on the resolution, the latest to call for an end to the war.
All but four Republicans voted against the measure despite concerns that GOP candidates will face fallout in November's midterm elections from the war's economic costs. Some Republicans running in tight races have recently broken with President Donald Trump and called for an end to the war to bring gas prices down, a sign of potential voter discontent over the war's impact on the economy.
The Republicans who voted for the resolution were Sens. Thom Tillis of North Carolina, Maine's Susan Collins, Lisa Murkowski of Alaska and Rand Paul of Kentucky. Sen. John Fetterman of Pennsylvania was the lone Democrat to vote against it.
Sen. Angela Alsobrooks, D-Md., did not vote despite having been in the Senate earlier Thursday. Alsobrooks has previously voted for similar resolutions. But if she had again voted that way on Thursday, the resolution still would have failed.
"Senator Alsobrooks has voted 13 times to end the war in Iran. Unfortunately, she was dealing with an urgent family matter during today's vote so was unable to cast her fourteenth vote to end the war in Iran," Alsobrooks' spokesperson Meredith Happy said in a statement to CNBC. "She believes every day that this war rages on, Americans are paying for it at the gas pump and the grocery store—and too many American service members have paid with their lives. She continues to urge this President to end this war once and for all."
An affirmative vote on the measure, known as a War Powers Resolution, would have directed Trump to remove U.S. troops from hostilities in Iran unless Congress explicitly approves the war.
The Senate has voted repeatedly on similar measures since the war began, approving one of them. The White House has effectively ignored that vote, arguing that the War Powers Act is unconstitutional.
The measure voted on Thursday, which like the one adopted was a so-called "concurrent resolution," did not carry the force of law and is never signed by the president, making the vote largely symbolic even if it had passed.
The Democratic leaders of the legislative push, however, argue that the Constitution vests authority to declare war in Congress, not the executive branch, and that the president must abide by their disapproval whether or not he signs it.
"The president right now is in violation of the Constitution and the War Powers Act and the concurrent resolution that we've already passed," said Sen. Tim Kaine, D-Va., who has led a number of the votes to end the war.
"We shouldn't have to do a second one because the president should follow the law, but we are doing a second one on the theory that maybe after a number of months more people will join us, the American public is even more deeply opposed to this war."
The measure cleared the House in July and faced just a 50-vote threshold to clear the Senate. Democrats have seen an uptick in Republican support in recent votes to end the war, as the administration has blown through timelines to seek congressional approval for the conflict.
The war has also created a challenging political environment for incumbent Republicans, who could lose control of the House and Senate in the midterm elections that loom less than six weeks away.
Gas prices, which have spiked throughout the conflict, currently average $4.48 per gallon nationwide, according to AAA. Recently, runaway diesel prices have begun stressing farmers and truckers and have alarmed Republicans in midwestern states, who have begun to distance themselves from the White House and call for an end to the war.
Lawmakers are set to hit the campaign trail for nearly all of October, and will need to explain to voters what they are doing to bring down prices.
"There are a lot of good things we can talk about; the problem is what you did for me recently doesn't even hardly count," said Sen. Kevin Cramer, R-N.D., when asked about how Republicans can message to economically anxious voters. "The other thing that we get to talk about ... is that at least we're not socialists."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/iran-war-powers-senate-vote-fuel.html",
    publishedAt: "2026-09-24T20:36:15+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "stop-trying-to-beat-the-market-even-the-2f545a4e",
    title: "Stop trying to beat the market: Even the richest Americans can’t do it consistently",
    titleJa: "Stop trying to beat the market: Even the richest Americans can’t do it consistently",
    summaryJa: "The 400 richest Americans would collectively have performed better over the past 12 months had they invested their net worths in an S&amp;P 500 index fund.",
    bodyOriginal: `The 400 richest Americans would collectively have performed better over the past 12 months had they invested their net worths in an S&amp;P 500 index fund.`,
    bodyJa: `The 400 richest Americans would collectively have performed better over the past 12 months had they invested their net worths in an S&amp;P 500 index fund.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/stop-trying-to-beat-the-market-even-the-richest-americans-cant-do-it-consistently-4560e275?mod=mw_rss_topstories",
    publishedAt: "2026-09-24T20:20:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-09710041",
    readTime: 2,
  },
  {
    id: "pete-hegseth-reports-at-least-3-1-millio-8aa63b11",
    title: "Pete Hegseth reports at least $3.1 million in cash, investments and bitcoin",
    titleJa: "Pete Hegseth reports at least $3.1 million in cash, investments and bitcoin",
    summaryJa: "Defense Secretary Pete Hegseth reported at least $3.1 million in assets as he faces an impeachment push in Congress over his handling of the Iran war.",
    bodyOriginal: `Defense Secretary Pete Hegseth reported at least $3.1 million in cash, retirement investments and bitcoin in his newly released 2025 annual financial disclosure, including more than $1 million in cash held in a single bank account.
The Office of Government Ethics filing provides the latest look at the finances of the former firebrand Fox News host, who was confirmed as defense secretary in January 2025. Hegseth is facing calls to be impeached from members of his own party related to his handling of the war in Iran.
The disclosure lists five retirement accounts containing investments worth roughly $2.05 million to $4.35 million. Hegseth's three accounts accounted for about $500,000 to $1.25 million of that total, while his wife, Jennifer Hegseth, reported roughly $1.55 million to $3.1 million in two rollover IRAs.
The household also reported three cash accounts, including one worth more than $1 million, and bitcoin valued at between roughly $16,000 and $65,000.
Because financial disclosures report assets in broad ranges rather than exact amounts, it is not possible to determine whether Hegseth’s total wealth increased or decreased from a year earlier. His December 2024 nominee disclosure listed roughly $1.4 million to $3.4 million in financial assets. His new filing shows at least $3.1 million, but no comparable upper limit because one bank account is reported only as "worth more than $1 million."
The clearest change is in cash. In Hegseth's 2024 filing, an account listed as "U.S. bank #2" held between $15,001 and $50,000. His new filing lists an account under the same description at more than $1 million.
The disclosure also shows a broad reshuffling of the family's investments after Hegseth joined the administration, typical of new Cabinet secretaries to avoid the appearance of conflicts of interest.
Hegseth and his family made 16 purchases of exchange-traded funds in 2025 worth between about $1.41 million and $3.05 million, according to a CNBC analysis of the reported ranges.
Those purchases followed sales of dozens of individual stocks, including shares of defense contractors Lockheed Martin and Northrop Grumman, each sold in February 2025 for between $1,001 and $15,000. Hegseth's ethics agreement required him to consult with ethics officials over potential conflicts but did not specifically direct him to sell those holdings.
Hegseth also reported two mortgages valued at between $1 million and $5 million each, including a mortgage taken out in 2025 on his personal residence carrying an 8.5% interest rate.
— Correction: This story has been corrected to clarify the number of retirement accounts held by Pete Hegseth.`,
    bodyJa: `Defense Secretary Pete Hegseth reported at least $3.1 million in cash, retirement investments and bitcoin in his newly released 2025 annual financial disclosure, including more than $1 million in cash held in a single bank account.
The Office of Government Ethics filing provides the latest look at the finances of the former firebrand Fox News host, who was confirmed as defense secretary in January 2025. Hegseth is facing calls to be impeached from members of his own party related to his handling of the war in Iran.
The disclosure lists five retirement accounts containing investments worth roughly $2.05 million to $4.35 million. Hegseth's three accounts accounted for about $500,000 to $1.25 million of that total, while his wife, Jennifer Hegseth, reported roughly $1.55 million to $3.1 million in two rollover IRAs.
The household also reported three cash accounts, including one worth more than $1 million, and bitcoin valued at between roughly $16,000 and $65,000.
Because financial disclosures report assets in broad ranges rather than exact amounts, it is not possible to determine whether Hegseth’s total wealth increased or decreased from a year earlier. His December 2024 nominee disclosure listed roughly $1.4 million to $3.4 million in financial assets. His new filing shows at least $3.1 million, but no comparable upper limit because one bank account is reported only as "worth more than $1 million."
The clearest change is in cash. In Hegseth's 2024 filing, an account listed as "U.S. bank #2" held between $15,001 and $50,000. His new filing lists an account under the same description at more than $1 million.
The disclosure also shows a broad reshuffling of the family's investments after Hegseth joined the administration, typical of new Cabinet secretaries to avoid the appearance of conflicts of interest.
Hegseth and his family made 16 purchases of exchange-traded funds in 2025 worth between about $1.41 million and $3.05 million, according to a CNBC analysis of the reported ranges.
Those purchases followed sales of dozens of individual stocks, including shares of defense contractors Lockheed Martin and Northrop Grumman, each sold in February 2025 for between $1,001 and $15,000. Hegseth's ethics agreement required him to consult with ethics officials over potential conflicts but did not specifically direct him to sell those holdings.
Hegseth also reported two mortgages valued at between $1 million and $5 million each, including a mortgage taken out in 2025 on his personal residence carrying an 8.5% interest rate.
— Correction: This story has been corrected to clarify the number of retirement accounts held by Pete Hegseth.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/pete-hegseth-financial-disclosure-cash-investments-bitcoin.html",
    publishedAt: "2026-09-24T19:57:28+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "surging-treasury-yields-pose-a-brand-new-50526c76",
    title: "Surging Treasury yields pose a brand new problem for Kevin Warsh and the Fed",
    titleJa: "Surging Treasury yields pose a brand new problem for Kevin Warsh and the Fed",
    summaryJa: "Markets expect the central bank will take a firmer hand on inflation. It's not that easy.",
    bodyOriginal: `The bond market is yelling at the Federal Reserve, but the messages are coming from different directions and pose a dilemma for policymakers as they seek to strike a balance that won't tank the economy.
Treasury yields continued their upward march Thursday as investors sought to price in a variety of factors: inflation still hovering well above the Fed's 2% goal, another bump up in energy prices and the impact of a global hyperscaler financial arms race and accompanying debt issuance.
In the past, policymakers have been willing to look through inflation spurts from temporary shocks like high energy prices and tariffs. And the narrative not so long ago was that the artificial intelligence investing boom was a story that would last a year or two and ultimately prove disinflationary.
But now Fed officials are rethinking the impact of those factors and seeing the danger of more durable inflation.
At the same time, markets are grappling with a central bank that suddenly has no interest in telegraphing its next moves, leaving an uncertain calculus on who is calling the shots — policymakers or market players.
"The time of looking through the initial supply shock has come to an end," said Joseph Brusuelas, chief economist at RSM. "The bias has to be towards restoring price stability, and they should take what's going on seriously."
Markets expect the central bank will indeed take a firmer hand on inflation.
Over the past day or so, traders raised the odds of a rate hike in October, which would come only a month or so after last week's quarter percentage point increase. They also see a third increase either late this year or early in 2027, with additional hikes possible in subsequent months.
Big switch
That's a big switch from a Fed that in June projected it might hike once this year and then be done before starting to cut in the next couple of years.
"My view coming out of the [September] meeting was that we're going to get three rate hikes," Brusuelas said. But modeling performed at his firm about the potential for higher yields, along with a prolonged cycle of AI investment, changed that view.
The modeling indicated that sharply higher long-term yields could slow growth and increase unemployment and still not get inflation back to 2%. RSM found that even a 5.5% 10-year yield — it was around 5.15% on Thursday — would lower growth to 1.5% and lift unemployment to 4.7% while core inflation remained stuck at 2.4%.
"The Fed is underestimating what's going to be necessary to restore price stability — that we're probably not talking two or three hikes. We're talking five or six," Brusuelas said.
Not everyone on Wall Street agrees. Some strategists think the market is getting ahead of itself — that yields now essentially are pricing in stronger economic growth and are overly sensitive to the vagaries of oil prices amid the ongoing tensions in the Middle East.
"The rise in yields has not been due to expectations of a too-dovish Fed allowing inflation to persistently exceed target. Instead, the rise has been in real yields as investors priced-in the Fed setting higher policy rates," Citigroup economist Andrew Hollenhorst said in a note. "It should not be surprising that this has led to both higher shorter-term and longer-term yields."
Indeed, several key Fed officials, while endorsing near-term rate hikes, also are counseling patience.
Case for restraint
New York Fed President John Williams, whose position puts him in the vice chair slot of the rate-setting Federal Open Market Committee, said Thursday that it's "reasonable" to expect another hike by the end of the year, but also noted that officials need to be keep watching the data before getting on a pre-set "forward guidance" track of locking in rate hikes.
Similarly, Philadelphia Fed President Anna Paulson also indicated additional policy tightening is likely but characterized the potential moves as "modest," hardly an indication that she thinks a string of hikes is likely.
Still, the Fed faces a policy crossroads: Tighten too much and risk cutting off the expansion, or tighten too little and risk losing the market's faith that it is sufficiently tuned into inflation risks.
"Weak guidance guardrails risk putting both central banks in a position where they may have to decide between a sub-optimal hike and disappointing the market and risking hard-won credibility," Krishna Guha, head of economics and central bank strategy at Evercore ISI, said in a note. "Lack of guidance also means whatever decision they take risks generating an outsized market response – either substantially further tightening or easing market rates."
Guha is in the camp that the market's expectations are "too aggressive" while also seeing the Fed's dilemma.
"Delivering back-to-back hikes – particularly without forward guidance as to how to interpret them – would risk sending a very hawkish signal that would reprice the rates curve further and to an unpredictable extent," Guha said. "But, skipping a hike priced odds-on in the market could also lead to a large repricing in the other dovish direction."
The Fed at odds
The conflict is critical now because Federal Reserve Chairman Kevin Warsh has emphasized letting markets help guide policy. That's a big reversal from central bank policy since the global financial crisis in 2008, when the Fed used its forward-guidance tool to signal to investors which way rates were headed.
"His framework appears significantly less rooted in economic measurement details and significantly more reflective of market narratives," UBS economist Jonathan Pingle wrote of Warsh. "No Chairman of the Board of Governors of the Federal Reserve has emphasized considering the signals from financial markets as an input into monetary policy decisions as strongly as Chairman Warsh."
With a yield surge that has taken the 30-year bond to its highest level since 2004, market dynamics have swung Warsh from someone calling for cuts prior to taking the job in May, to a chair who seems to have forged a hawkish coalition on the FOMC.
In fact, Pingle speculated that Warsh, following last week's post-meeting news conference, "left little doubt to us that his views more closely align" with Cleveland Fed President Beth Hammack, arguably one of the most hawkish of this year's voting group, "than anyone else on the FOMC."
For now, at least, markets are going with the interpretation that Warsh will let the Treasury market guide him toward progressively higher benchmark rates.
"There's a good reason why central bankers are beginning to be concerned about overheating in the investment section of the economy," said Brusuelas, the RSM economist. "Mr. Market is signaling something to policymakers like Kevin Warsh that they ought to listen to."`,
    bodyJa: `The bond market is yelling at the Federal Reserve, but the messages are coming from different directions and pose a dilemma for policymakers as they seek to strike a balance that won't tank the economy.
Treasury yields continued their upward march Thursday as investors sought to price in a variety of factors: inflation still hovering well above the Fed's 2% goal, another bump up in energy prices and the impact of a global hyperscaler financial arms race and accompanying debt issuance.
In the past, policymakers have been willing to look through inflation spurts from temporary shocks like high energy prices and tariffs. And the narrative not so long ago was that the artificial intelligence investing boom was a story that would last a year or two and ultimately prove disinflationary.
But now Fed officials are rethinking the impact of those factors and seeing the danger of more durable inflation.
At the same time, markets are grappling with a central bank that suddenly has no interest in telegraphing its next moves, leaving an uncertain calculus on who is calling the shots — policymakers or market players.
"The time of looking through the initial supply shock has come to an end," said Joseph Brusuelas, chief economist at RSM. "The bias has to be towards restoring price stability, and they should take what's going on seriously."
Markets expect the central bank will indeed take a firmer hand on inflation.
Over the past day or so, traders raised the odds of a rate hike in October, which would come only a month or so after last week's quarter percentage point increase. They also see a third increase either late this year or early in 2027, with additional hikes possible in subsequent months.
Big switch
That's a big switch from a Fed that in June projected it might hike once this year and then be done before starting to cut in the next couple of years.
"My view coming out of the [September] meeting was that we're going to get three rate hikes," Brusuelas said. But modeling performed at his firm about the potential for higher yields, along with a prolonged cycle of AI investment, changed that view.
The modeling indicated that sharply higher long-term yields could slow growth and increase unemployment and still not get inflation back to 2%. RSM found that even a 5.5% 10-year yield — it was around 5.15% on Thursday — would lower growth to 1.5% and lift unemployment to 4.7% while core inflation remained stuck at 2.4%.
"The Fed is underestimating what's going to be necessary to restore price stability — that we're probably not talking two or three hikes. We're talking five or six," Brusuelas said.
Not everyone on Wall Street agrees. Some strategists think the market is getting ahead of itself — that yields now essentially are pricing in stronger economic growth and are overly sensitive to the vagaries of oil prices amid the ongoing tensions in the Middle East.
"The rise in yields has not been due to expectations of a too-dovish Fed allowing inflation to persistently exceed target. Instead, the rise has been in real yields as investors priced-in the Fed setting higher policy rates," Citigroup economist Andrew Hollenhorst said in a note. "It should not be surprising that this has led to both higher shorter-term and longer-term yields."
Indeed, several key Fed officials, while endorsing near-term rate hikes, also are counseling patience.
Case for restraint
New York Fed President John Williams, whose position puts him in the vice chair slot of the rate-setting Federal Open Market Committee, said Thursday that it's "reasonable" to expect another hike by the end of the year, but also noted that officials need to be keep watching the data before getting on a pre-set "forward guidance" track of locking in rate hikes.
Similarly, Philadelphia Fed President Anna Paulson also indicated additional policy tightening is likely but characterized the potential moves as "modest," hardly an indication that she thinks a string of hikes is likely.
Still, the Fed faces a policy crossroads: Tighten too much and risk cutting off the expansion, or tighten too little and risk losing the market's faith that it is sufficiently tuned into inflation risks.
"Weak guidance guardrails risk putting both central banks in a position where they may have to decide between a sub-optimal hike and disappointing the market and risking hard-won credibility," Krishna Guha, head of economics and central bank strategy at Evercore ISI, said in a note. "Lack of guidance also means whatever decision they take risks generating an outsized market response – either substantially further tightening or easing market rates."
Guha is in the camp that the market's expectations are "too aggressive" while also seeing the Fed's dilemma.
"Delivering back-to-back hikes – particularly without forward guidance as to how to interpret them – would risk sending a very hawkish signal that would reprice the rates curve further and to an unpredictable extent," Guha said. "But, skipping a hike priced odds-on in the market could also lead to a large repricing in the other dovish direction."
The Fed at odds
The conflict is critical now because Federal Reserve Chairman Kevin Warsh has emphasized letting markets help guide policy. That's a big reversal from central bank policy since the global financial crisis in 2008, when the Fed used its forward-guidance tool to signal to investors which way rates were headed.
"His framework appears significantly less rooted in economic measurement details and significantly more reflective of market narratives," UBS economist Jonathan Pingle wrote of Warsh. "No Chairman of the Board of Governors of the Federal Reserve has emphasized considering the signals from financial markets as an input into monetary policy decisions as strongly as Chairman Warsh."
With a yield surge that has taken the 30-year bond to its highest level since 2004, market dynamics have swung Warsh from someone calling for cuts prior to taking the job in May, to a chair who seems to have forged a hawkish coalition on the FOMC.
In fact, Pingle speculated that Warsh, following last week's post-meeting news conference, "left little doubt to us that his views more closely align" with Cleveland Fed President Beth Hammack, arguably one of the most hawkish of this year's voting group, "than anyone else on the FOMC."
For now, at least, markets are going with the interpretation that Warsh will let the Treasury market guide him toward progressively higher benchmark rates.
"There's a good reason why central bankers are beginning to be concerned about overheating in the investment section of the economy," said Brusuelas, the RSM economist. "Mr. Market is signaling something to policymakers like Kevin Warsh that they ought to listen to."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/surging-treasury-yields-are-posing-a-brand-new-problem-for-kevin-warsh-and-the-fed.html",
    publishedAt: "2026-09-24T18:35:11+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "why-australia-chose-the-world-s-biggest-c7e9debd",
    title: "Why Australia chose the world's biggest political stage to reveal OpenAI hack",
    titleJa: "Why Australia chose the world's biggest political stage to reveal OpenAI hack",
    summaryJa: "Australia, which has strict social media restrictions and has proposed controls on algorithms and smart glasses, announced the breach at the UN.",
    bodyOriginal: `Why Australia chose the world's biggest political stage to reveal OpenAI hack
- Published
Australia made a dramatic revelation on Wednesday during the United Nations General Assembly.
Rogue AI agents had hacked one of its government bodies - the first known incident of its kind in the world. Private data, but not sensitive information, was taken from Medicare, Australia's universal healthcare scheme.
The breach happened in June, but OpenAI says it only became aware of it in August - and then took until 10 September to alert Australia's government, by sending an email to an address used by researchers and academics to alert authorities to concerns of vulnerabilities.
While worrying, the timing of the incident is somewhat of a gift for Australia.
A middle power that doesn't usually get as much of a platform as its influential allies, the country wants to be seen as punching above its weight on one of the most defining issues of our time - big tech regulation.
In the past year alone, it has implemented the world's strictest social media ban, announced what it says are the world's strongest algorithm controls, floated the possibility of "world-leading" limits on smart glasses, and is now the first government to confront AI firms over a rogue attack on its data.
It's entirely possible other governments have been the victim of rogue AI agents.
Former Australian government cybersecurity adviser Alastair MacGibbon told the BBC he'd heard whispers that several others have been notified of similar recent breaches by OpenAI agents.
"Some have chosen to not be public – that's every government's choice on how it wants to handle these things," the CyberCX chief strategy officer said. "The [Australian] government chose a time to release this to gain maximum publicity which is their wont to do."
Revealing a data breach can of course be a risky strategy for governments - it leaves them vulnerable to criticism that their security systems aren't up to scratch. But the fact that no sensitive information was leaked put Australia in a stronger position to use the incident.
"Nobody has died," says the University of Queensland's associate professor Michael Noetel, who studies AI risks. "This is another canary in the coal mine. This sort of loss-of-control incident, even though it's minor now, is what CEOs are worried about getting worse over time."
Though Australia has made a name for itself by taking a stand against social media companies, taking up the AI mantle now is another way for Australia to rein in big tech, says Tama Leaver, professor of internet studies at Curtin University in Perth.
"It's impossible to say for sure, but it seems incredibly likely that this was very carefully planned."
The fact that leaders were all together in New York this week has probably helped.
Albanese says he had a "frank" discussion with OpenAI CEO Sam Altman to express Australia's "extreme concern" about what happened. Altman acknowledged "issues with protocols" at OpenAI, he said.
The Australian leader also posed with Donald Trump for a selfie - and the two may have had face-to-face talks. But Australia risks the ire of the US president, who wants to encourage AI, "not rein it in", and even rename it "super intelligence".
Earlier this week, Albanese had to deflect criticism from the Trump administration over his government's proposal to give users the ability to opt out of social media algorithms. The US said it amounted to "censorship of protected speech".
Back home, Australia's very own eSafety commission is currently arming itself with lawyers, preparing to take on social media platforms objecting to its social media law for under 16s.
Australia isn't popular with big tech. But its bold policies on social media and internet safety have been largely supported among Australians themselves, especially parents.
The government is taking advantage of the hack to position itself as a leader on one of the biggest talking points of our time. And it's wasting no time in using the incident to advance the country's broader crusade.
Within hours of the announcement, Communications Minister Anika Wells told reporters: "This is an example of an unregulated industry where big tech clearly feels like they can do whatever they like, and that's not going to wash here in Australia."
Related topics
- Published17 September
- Published1 day ago`,
    bodyJa: `Why Australia chose the world's biggest political stage to reveal OpenAI hack
- Published
Australia made a dramatic revelation on Wednesday during the United Nations General Assembly.
Rogue AI agents had hacked one of its government bodies - the first known incident of its kind in the world. Private data, but not sensitive information, was taken from Medicare, Australia's universal healthcare scheme.
The breach happened in June, but OpenAI says it only became aware of it in August - and then took until 10 September to alert Australia's government, by sending an email to an address used by researchers and academics to alert authorities to concerns of vulnerabilities.
While worrying, the timing of the incident is somewhat of a gift for Australia.
A middle power that doesn't usually get as much of a platform as its influential allies, the country wants to be seen as punching above its weight on one of the most defining issues of our time - big tech regulation.
In the past year alone, it has implemented the world's strictest social media ban, announced what it says are the world's strongest algorithm controls, floated the possibility of "world-leading" limits on smart glasses, and is now the first government to confront AI firms over a rogue attack on its data.
It's entirely possible other governments have been the victim of rogue AI agents.
Former Australian government cybersecurity adviser Alastair MacGibbon told the BBC he'd heard whispers that several others have been notified of similar recent breaches by OpenAI agents.
"Some have chosen to not be public – that's every government's choice on how it wants to handle these things," the CyberCX chief strategy officer said. "The [Australian] government chose a time to release this to gain maximum publicity which is their wont to do."
Revealing a data breach can of course be a risky strategy for governments - it leaves them vulnerable to criticism that their security systems aren't up to scratch. But the fact that no sensitive information was leaked put Australia in a stronger position to use the incident.
"Nobody has died," says the University of Queensland's associate professor Michael Noetel, who studies AI risks. "This is another canary in the coal mine. This sort of loss-of-control incident, even though it's minor now, is what CEOs are worried about getting worse over time."
Though Australia has made a name for itself by taking a stand against social media companies, taking up the AI mantle now is another way for Australia to rein in big tech, says Tama Leaver, professor of internet studies at Curtin University in Perth.
"It's impossible to say for sure, but it seems incredibly likely that this was very carefully planned."
The fact that leaders were all together in New York this week has probably helped.
Albanese says he had a "frank" discussion with OpenAI CEO Sam Altman to express Australia's "extreme concern" about what happened. Altman acknowledged "issues with protocols" at OpenAI, he said.
The Australian leader also posed with Donald Trump for a selfie - and the two may have had face-to-face talks. But Australia risks the ire of the US president, who wants to encourage AI, "not rein it in", and even rename it "super intelligence".
Earlier this week, Albanese had to deflect criticism from the Trump administration over his government's proposal to give users the ability to opt out of social media algorithms. The US said it amounted to "censorship of protected speech".
Back home, Australia's very own eSafety commission is currently arming itself with lawyers, preparing to take on social media platforms objecting to its social media law for under 16s.
Australia isn't popular with big tech. But its bold policies on social media and internet safety have been largely supported among Australians themselves, especially parents.
The government is taking advantage of the hack to position itself as a leader on one of the biggest talking points of our time. And it's wasting no time in using the incident to advance the country's broader crusade.
Within hours of the announcement, Communications Minister Anika Wells told reporters: "This is an example of an unregulated industry where big tech clearly feels like they can do whatever they like, and that's not going to wash here in Australia."
Related topics
- Published17 September
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr3eqk15ld14o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-24T18:06:40+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/50c6/live/2164cc30-b804-11f1-97e1-83bf52ec4acd.jpg",
    readTime: 10,
  },
  {
    id: "philadelphia-fed-s-anna-paulson-says-mod-79511e56",
    title: "Philadelphia Fed's Anna Paulson says 'modest' rate moves likely ahead to tame inflation",
    titleJa: "Philadelphia Fed's Anna Paulson says 'modest' rate moves likely ahead to tame inflation",
    summaryJa: "The policymaker said she and her colleagues may need to raise interest rates further to bring inflation back to target.",
    bodyOriginal: `Philadelphia Federal Reserve President Anna Paulson said Thursday that she and her colleagues may need to raise interest rates further to bring inflation back to target.
Speaking a week after the Federal Open Market Committee raised benchmark borrowing rates by a quarter percentage point, Paulson said inflation trends are still worrying.
The rate hike, which took the key funds rate to a target range of 3.75%-4%, "brings policy closer to what I believe is needed to return inflation to 2% at a pace that balances inflation with risks to the labor market. Looking ahead, if conditions evolve as I expect, some modest further tightening may be warranted."
Though the summer showed some moderating in price pressures, she said underlying inflation is still running around 2.5%-3%, "well above our 2% target, and the gap has shown little signs of closing."
"The best I can say about underlying inflation this year is that it hasn't gotten worse," Paulson said in prepared remarks for a fintech conference in her home district. She noted that inflation has held higher even outside of the oil supply shocks from the Iran war and tariffs.
Outside of inflation, Paulson said economic output "has been solid" while the labor market is "holding steady."
The comments come as markets have raised their expectations for Fed tightening dramatically.
Another leg up this week has taken longer-duration Treasury yields to highs not seen since 2004. Traders are now pricing in a 64% chance the FOMC hikes again in October, then expect another move in January, according to the CME Group's FedWatch tool. Fed funds futures contracts are implying a rate of 4.8% by the end of 2027, which would indicate the expectation of as many as four quarter-point increases ahead.
New York Fed President John Williams said earlier Thursday that he thinks it's "reasonable" to expect another hike before the end of the year.`,
    bodyJa: `Philadelphia Federal Reserve President Anna Paulson said Thursday that she and her colleagues may need to raise interest rates further to bring inflation back to target.
Speaking a week after the Federal Open Market Committee raised benchmark borrowing rates by a quarter percentage point, Paulson said inflation trends are still worrying.
The rate hike, which took the key funds rate to a target range of 3.75%-4%, "brings policy closer to what I believe is needed to return inflation to 2% at a pace that balances inflation with risks to the labor market. Looking ahead, if conditions evolve as I expect, some modest further tightening may be warranted."
Though the summer showed some moderating in price pressures, she said underlying inflation is still running around 2.5%-3%, "well above our 2% target, and the gap has shown little signs of closing."
"The best I can say about underlying inflation this year is that it hasn't gotten worse," Paulson said in prepared remarks for a fintech conference in her home district. She noted that inflation has held higher even outside of the oil supply shocks from the Iran war and tariffs.
Outside of inflation, Paulson said economic output "has been solid" while the labor market is "holding steady."
The comments come as markets have raised their expectations for Fed tightening dramatically.
Another leg up this week has taken longer-duration Treasury yields to highs not seen since 2004. Traders are now pricing in a 64% chance the FOMC hikes again in October, then expect another move in January, according to the CME Group's FedWatch tool. Fed funds futures contracts are implying a rate of 4.8% by the end of 2027, which would indicate the expectation of as many as four quarter-point increases ahead.
New York Fed President John Williams said earlier Thursday that he thinks it's "reasonable" to expect another hike before the end of the year.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/philadelphia-feds-anna-paulson-says-modest-rate-moves-likely-ahead-to-tame-inflation.html",
    publishedAt: "2026-09-24T17:00:36+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "oracle-sends-force-majeure-notice-about-1798a854",
    title: "Oracle sends 'force majeure' notice about data center project — stock sinks 4%",
    titleJa: "Oracle sends 'force majeure' notice about data center project — stock sinks 4%",
    summaryJa: "Oracle is reportedly looking to delay payment on Project Jupiter if it the data center fails to come online in 2028",
    bodyOriginal: `Oracle shares fell 4% on Thursday following news that the company sent a "force majeure" notice tied to its New Mexico data center project to protect itself from higher expenses.
"Project Jupiter remains on our planned schedule," Oracle said in a statement to CNBC. "We are fully committed to New Mexico and confident in our path forward."
Bloomberg was first to report the news, citing sources familiar with the matter.
The company is looking to delay payment on the campus, dubbed Project Jupiter, if it fails to come online as expected in 2028, according to the report.
Oracle sent the notice to the developer, which is a unit of Blue Owl Capital, CNBC confirmed. Blue Owl also saw its shares fall on Thursday.
"This notice does not change the financial commitments to this multi-year project," Blue Owl Capital said in a statement to CNBC.
The New Mexico data center project, which is part of the broader Stargate artificial intelligence infrastructure build-out with President Donald Trump, has been riddled with setbacks and regulatory hurdles.
That includes local opposition to data centers ahead of the upcoming midterm elections and concerns from environmental groups.
Oracle co-CEO Clay Magouyrk told analysts on the company's earnings call on Sept. 10 that Project Jupiter would not affect its previously stated fiscal 2027 revenue or earnings guidance.
Concerns have also mounted over Oracle's $18 billion in debt tied to the data center, which is already trading at stressed levels, according to the Financial Times.
— CNBC's Seema Mody and Leslie Picker contributed reporting.`,
    bodyJa: `Oracle shares fell 4% on Thursday following news that the company sent a "force majeure" notice tied to its New Mexico data center project to protect itself from higher expenses.
"Project Jupiter remains on our planned schedule," Oracle said in a statement to CNBC. "We are fully committed to New Mexico and confident in our path forward."
Bloomberg was first to report the news, citing sources familiar with the matter.
The company is looking to delay payment on the campus, dubbed Project Jupiter, if it fails to come online as expected in 2028, according to the report.
Oracle sent the notice to the developer, which is a unit of Blue Owl Capital, CNBC confirmed. Blue Owl also saw its shares fall on Thursday.
"This notice does not change the financial commitments to this multi-year project," Blue Owl Capital said in a statement to CNBC.
The New Mexico data center project, which is part of the broader Stargate artificial intelligence infrastructure build-out with President Donald Trump, has been riddled with setbacks and regulatory hurdles.
That includes local opposition to data centers ahead of the upcoming midterm elections and concerns from environmental groups.
Oracle co-CEO Clay Magouyrk told analysts on the company's earnings call on Sept. 10 that Project Jupiter would not affect its previously stated fiscal 2027 revenue or earnings guidance.
Concerns have also mounted over Oracle's $18 billion in debt tied to the data center, which is already trading at stressed levels, according to the Financial Times.
— CNBC's Seema Mody and Leslie Picker contributed reporting.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/oracle-data-center-force-majeure.html",
    publishedAt: "2026-09-24T16:48:38+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "my-husband-and-i-are-in-our-50s-and-have-eda0d7ac",
    title: "My husband and I are in our 50s and have no kids. We have $2 million in IRAs and 401(k)s. Do we really need a will?",
    titleJa: "My husband and I are in our 50s and have no kids. We have $2 million in IRAs and 401(k)s. Do we really need a will?",
    summaryJa: "“We have no debt and own our primary home, a vacation home, as well as my mother’s home in another state.”",
    bodyOriginal: `“We have no debt and own our primary home, a vacation home, as well as my mother’s home in another state.”`,
    bodyJa: `“We have no debt and own our primary home, a vacation home, as well as my mother’s home in another state.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-husband-and-i-are-in-our-50s-and-have-no-kids-we-have-2-million-do-we-need-a-will-62fb422f?mod=mw_rss_topstories",
    publishedAt: "2026-09-24T16:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-79889315",
    readTime: 2,
  },
  {
    id: "new-york-sues-polymarket-u-s-two-months-14259a61",
    title: "New York sues Polymarket U.S., two months after filing lawsuit against Kalshi",
    titleJa: "New York sues Polymarket U.S., two months after filing lawsuit against Kalshi",
    summaryJa: "State attorney general Letitia James claims Polymarket has violated the state's gambling laws.",
    bodyOriginal: `New York State filed suit against Polymarket U.S. on Thursday, nearly two months after the state sued the platform's competitor, Kalshi.
"By skirting New York's laws, Polymarket is targeting the most vulnerable and depriving New York families of critical services and support," state Attorney General Letitia James said in a statement.
The lawsuit claims Polymarket operates an illegal gambling platform and is in violation of state gambling laws, including having no license with the New York State Gaming Commission. The lawsuit further claims Polymarket allows activity by users over 18 and cited a report from the state's Office of Addiction Services and Supports that those between 18 and 24 are at "high-risk" of gambling addictions.
"By running an unlicensed gambling operation, Polymarket has done more than just knowingly violate state law, they have put New Yorkers at risk, especially those underage who are most vulnerable to problem gaming," Governor Kathy Hochul said in a statement.
Penalties and earnings
The lawsuit asks for penalties, including three times the amount of any Polymarket gains, and to pay $100,000 for each attempt or offer of "sports wagering or mobile sports wagering" in New York. The lawsuit also asks Polymarket U.S. to provide an account of all trades placed on the platform, the money lost by users and the amount Polymarket U.S. earned.
Polymarket U.S. debuted in December 2025 and is regulated by the Commodity Futures Trading Commission, the federal agency that regulates prediction markets platforms. The company also runs an offshore predictions platform, which was founded in 2020. The CFTC has not responded to a request for comment.
The lawsuit is the latest in the escalating regulatory feud between states and the platforms. The CFTC has retaliated, suing several states and asserting it has the right to regulate the markets.
Polymarket defended itself against the latest New York action.
""Polymarket was founded in a tiny NYC apartment and now has more than 350 employees here, embodying why people and businesses come here to make it. We believe in New York and we're staying here. While the AG's decision to copy/paste a recycled lawsuit is disappointing, we'll fight for our users," said Neal Kumar, the chief legal officer for the platform.
- Davis Giangiulio contributed to this report.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `New York State filed suit against Polymarket U.S. on Thursday, nearly two months after the state sued the platform's competitor, Kalshi.
"By skirting New York's laws, Polymarket is targeting the most vulnerable and depriving New York families of critical services and support," state Attorney General Letitia James said in a statement.
The lawsuit claims Polymarket operates an illegal gambling platform and is in violation of state gambling laws, including having no license with the New York State Gaming Commission. The lawsuit further claims Polymarket allows activity by users over 18 and cited a report from the state's Office of Addiction Services and Supports that those between 18 and 24 are at "high-risk" of gambling addictions.
"By running an unlicensed gambling operation, Polymarket has done more than just knowingly violate state law, they have put New Yorkers at risk, especially those underage who are most vulnerable to problem gaming," Governor Kathy Hochul said in a statement.
Penalties and earnings
The lawsuit asks for penalties, including three times the amount of any Polymarket gains, and to pay $100,000 for each attempt or offer of "sports wagering or mobile sports wagering" in New York. The lawsuit also asks Polymarket U.S. to provide an account of all trades placed on the platform, the money lost by users and the amount Polymarket U.S. earned.
Polymarket U.S. debuted in December 2025 and is regulated by the Commodity Futures Trading Commission, the federal agency that regulates prediction markets platforms. The company also runs an offshore predictions platform, which was founded in 2020. The CFTC has not responded to a request for comment.
The lawsuit is the latest in the escalating regulatory feud between states and the platforms. The CFTC has retaliated, suing several states and asserting it has the right to regulate the markets.
Polymarket defended itself against the latest New York action.
""Polymarket was founded in a tiny NYC apartment and now has more than 350 employees here, embodying why people and businesses come here to make it. We believe in New York and we're staying here. While the AG's decision to copy/paste a recycled lawsuit is disappointing, we'll fight for our users," said Neal Kumar, the chief legal officer for the platform.
- Davis Giangiulio contributed to this report.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/new-york-sues-polymarket-us-two-months-after-filing-suit-against-kalshi-.html",
    publishedAt: "2026-09-24T16:37:02+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "rogue-openai-agent-infiltrated-australia-37782ca2",
    title: "Rogue OpenAI agent 'infiltrated' Australian government website in world first",
    titleJa: "Rogue OpenAI agent 'infiltrated' Australian government website in world first",
    summaryJa: "Australia criticised OpenAI for taking \"too long\" to tell them about the breach which happened in June.",
    bodyOriginal: `Rogue OpenAI agent 'infiltrated' Australian government website in world first
- Published
A rogue OpenAI agent hacked an Australian government website in June and accessed private data in what experts say is the first known case of its kind in the world.
The agent "infiltrated" a statistics portal containing "non-sensitive" data from Australia's universal healthcare scheme Medicare, Prime Minister Anthony Albanese said in New York on Wednesday, local time.
He had a "very frank discussion" with OpenAI boss Sam Altman for taking "too long" to disclose the breach and said there would be "legal consequences".
OpenAI said it only learnt of the breach in August while reviewing "misaligned model activity" and emailed a general inbox of an Australian government agency on 10 September.
Five days later, that government agency, Services Australia, escalated the email to Australia's cybersecurity centre before a government minister was notified and the prime minister alerted.
Albanese said he spoke to Altman and raised "Australia's extreme concern about this incident" as well as his "disappointment" that the company had taken months to reveal the breach and "the nature of the way" it did so.
The Australian leader said Altman had acknowledged there were "issues with protocols" at OpenAI.
A "forensic investigation" led by the country's cybersecurity agency would aim to find out if other government systems were affected, Albanese said.
The probe would also assess if the matter needed to be dealt with by police, he said, noting there "will obviously be legal consequences".
Detailing the breach, Albanese said it had involved "public and non-public files" on the Medicare Statistics Reporting Service portal, home to "non-sensitive" data and statistics.
Three other government systems "may" also have been affected: the Australian Institute of Health and Welfare and two state-based agencies - the New South Wales Bureau of Crime Statistics and Research and the Victorian Department of Health.
"No personal information is believed to have been accessed at this stage, but investigations are ongoing," Albanese said.
"Nonetheless this situation is obviously unacceptable," he said.
OpenAI, in a statement, said it had "identified activity involving several Australian government websites and services as our models attempted to look up answers, and available statistics for questions about Australia during an internal evaluation".
"In the course of that, our models took actions we did not intend," the statement said.
It has also emerged that OpenAI's systems tried, and failed, to hack a digital library at the University of New Mexico in May, according to Transluce, a not-for-profit AI research lab.
It said the systems also attempted to hack Data USA, a repository of public government data that same month. This also failed.
Albanese declined to answer whether he raised the matter with US President Donald Trump during their face-to-face meeting on Tuesday night in New York, where world leaders have gathered for the UN General Assembly.
Australia was one of 22 countries that earlier this week signed a joint statement calling for global oversight and guardrails for the development of AI.
Cybersecurity experts told the BBC the incident is a wake up call for regulators, given that AI agents are becoming more widely available for individual and commercial use.
Dr Hammond Pearce, senior lecturer at the University of NSW Institute for Cyber Security, told the BBC that though this is the first known incident where AI agents have chosen to breach a government body of their own volition, there'll be more to come.
"I expect that these kinds of attacks will keep occurring," he said, adding that they would likely "grow in severity and in frequency".
"I do hope that this incident does start ringing alarm bells in governments around the world."
Earlier this year, OpenAI revealed a group of AI agents it had been testing had escaped from their controls and secretly worked together to hack another tech firm named Hugging Face.
And a string of other rogue AI incidents have also been made public this year, including a case where a digital assistant - without instruction - booted someone off a pilates class waiting list in a bid to get an Australian man in.
Several AI firm leaders themselves - including Altman, Anthropic's Dario Amodei, and Elon Musk - have said the speed at which AI is developing is dangerous to humanity and needs to be reined in.
But the US and China, who are vying for AI supremacy, are roadblocks. Both are hostile to greater regulation, wanting the economic and technological spoils of AI, and have downplayed safety concerns.
Related topics
- Published4 September
- Published18 hours ago
- Published1 day ago`,
    bodyJa: `Rogue OpenAI agent 'infiltrated' Australian government website in world first
- Published
A rogue OpenAI agent hacked an Australian government website in June and accessed private data in what experts say is the first known case of its kind in the world.
The agent "infiltrated" a statistics portal containing "non-sensitive" data from Australia's universal healthcare scheme Medicare, Prime Minister Anthony Albanese said in New York on Wednesday, local time.
He had a "very frank discussion" with OpenAI boss Sam Altman for taking "too long" to disclose the breach and said there would be "legal consequences".
OpenAI said it only learnt of the breach in August while reviewing "misaligned model activity" and emailed a general inbox of an Australian government agency on 10 September.
Five days later, that government agency, Services Australia, escalated the email to Australia's cybersecurity centre before a government minister was notified and the prime minister alerted.
Albanese said he spoke to Altman and raised "Australia's extreme concern about this incident" as well as his "disappointment" that the company had taken months to reveal the breach and "the nature of the way" it did so.
The Australian leader said Altman had acknowledged there were "issues with protocols" at OpenAI.
A "forensic investigation" led by the country's cybersecurity agency would aim to find out if other government systems were affected, Albanese said.
The probe would also assess if the matter needed to be dealt with by police, he said, noting there "will obviously be legal consequences".
Detailing the breach, Albanese said it had involved "public and non-public files" on the Medicare Statistics Reporting Service portal, home to "non-sensitive" data and statistics.
Three other government systems "may" also have been affected: the Australian Institute of Health and Welfare and two state-based agencies - the New South Wales Bureau of Crime Statistics and Research and the Victorian Department of Health.
"No personal information is believed to have been accessed at this stage, but investigations are ongoing," Albanese said.
"Nonetheless this situation is obviously unacceptable," he said.
OpenAI, in a statement, said it had "identified activity involving several Australian government websites and services as our models attempted to look up answers, and available statistics for questions about Australia during an internal evaluation".
"In the course of that, our models took actions we did not intend," the statement said.
It has also emerged that OpenAI's systems tried, and failed, to hack a digital library at the University of New Mexico in May, according to Transluce, a not-for-profit AI research lab.
It said the systems also attempted to hack Data USA, a repository of public government data that same month. This also failed.
Albanese declined to answer whether he raised the matter with US President Donald Trump during their face-to-face meeting on Tuesday night in New York, where world leaders have gathered for the UN General Assembly.
Australia was one of 22 countries that earlier this week signed a joint statement calling for global oversight and guardrails for the development of AI.
Cybersecurity experts told the BBC the incident is a wake up call for regulators, given that AI agents are becoming more widely available for individual and commercial use.
Dr Hammond Pearce, senior lecturer at the University of NSW Institute for Cyber Security, told the BBC that though this is the first known incident where AI agents have chosen to breach a government body of their own volition, there'll be more to come.
"I expect that these kinds of attacks will keep occurring," he said, adding that they would likely "grow in severity and in frequency".
"I do hope that this incident does start ringing alarm bells in governments around the world."
Earlier this year, OpenAI revealed a group of AI agents it had been testing had escaped from their controls and secretly worked together to hack another tech firm named Hugging Face.
And a string of other rogue AI incidents have also been made public this year, including a case where a digital assistant - without instruction - booted someone off a pilates class waiting list in a bid to get an Australian man in.
Several AI firm leaders themselves - including Altman, Anthropic's Dario Amodei, and Elon Musk - have said the speed at which AI is developing is dangerous to humanity and needs to be reined in.
But the US and China, who are vying for AI supremacy, are roadblocks. Both are hostile to greater regulation, wanting the economic and technological spoils of AI, and have downplayed safety concerns.
Related topics
- Published4 September
- Published18 hours ago
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6vgy0333dppo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-24T15:42:07+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f010/live/69f3ee00-b795-11f1-a430-4d16ee157c41.jpg",
    readTime: 10,
  },
  {
    id: "analysis-higher-treasury-yields-deliver-b19322a2",
    title: "Analysis: Higher Treasury yields deliver a reality check on a hot, inflation-prone economy",
    titleJa: "Analysis: Higher Treasury yields deliver a reality check on a hot, inflation-prone economy",
    summaryJa: "Elevated Treasury yields will complicate both Federal Reserve policy and Treasury financing.",
    bodyOriginal: `The jump in Treasury yields this week is delivering a reality check about a strong economy, stubborn inflation, and the growing cost of the national debt.
That will put the squeeze on the debt-heavy Trump administration as it tries to find a path forward for the economy.
It also highlights the tension between the nation's top two economic policymakers. Federal Reserve Chairman Kevin Warsh wants to hear what markets are saying. Treasury Secretary Scott Bessent wants to use his tools to change the message when he believes it's wrong.
Bond yields jumped Wednesday, and were trading near multiple-decade highs Thursday, as traders digested surprisingly positive purchasing managers indices against the backdrop of a Fed that as of last week has started hiking its short-term policy rate. The 2-year Treasury yield rose 10 basis points to 4.87%, while the 10-year Treasury rose 17 basis points to 5.12% Thursday morning.
Those yields are extraordinary by recent standards but less so over a longer horizon. The 10-year Treasury averaged about 5.9% from 1990 through 2006, before years of slow growth and usually low interest rates reset Americans' expectations about borrowing costs.
Now the economy looks stronger, propelled in part by a surge in investment in artificial intelligence. Competition for capital has contributed to higher interest rates.
The boom appears to go deeper. The Census Bureau reported last week that real median household income rose 2.6% to $87,460 and the poverty rate fell by half a percentage point to 10.2%.
The economy's recent strength has also come on the back of a flood of government deficit spending, driven in part by large tax cuts under the first and second Trump administrations, with Iran war spending piling on. The federal deficit is set to come in above 6% of gross domestic product this year, based on data from the Congressional Budget Office. The agency projects that the tax-and-policy law passed last year will raise deficits by $4.7 trillion over 10 years, though tariffs will offset some of that.
The nation is awash in credit. Warsh pointed to heavy debt issuance by banks and other financial institutions and tight credit spreads — suggesting borrowers have little trouble seeking loans — as among the key factors that prompted him to vote with the rest of the Fed's policymakers to raise interest rates.
In the days since, several other Fed officials, including Governor Michael Barr on Wednesday, said they thought more rate increases would likely be needed.
Bond yields likely benefitted from Warsh's decision to raise interest rates this week. Had Warsh not acted on inflation, traders would have run up long-term yields to account for the uncertainty of when and how the Fed might act.
But Warsh will only go so far to influence the 10-year. "Ensuring continuous, sustainable, durable, economic growth, that's the business we're in," he said last week. Warsh and the Fed will act to try to tamp down the risk of inflation, but he doesn't want to induce a recession.
The Fed's decision to move up interest rates highlights the possibility for tension with the Treasury Department.
Warsh treats the 10-year Treasury as a vital source of information about the economy. He called it "the most important asset anywhere in the world" at his most recent press conference. He has changed the way the Fed communicates to make it easier for him to read the market's unfiltered signal.
Bessent, on the other hand, has shown willingness to intervene when he believes markets have moved away from equilibrium. He recently ramped up the Treasury's efforts to buy back some long-term debt maturities because he saw a "fever" in the markets.
"I don't believe that I can change the equilibrium price, but nothing's ever in equilibrium," Bessent said at a Breitbart event on Sept. 8. "When there's a disequilibrium, my job is to try to push things back towards equilibrium," he said.
The stakes are growing because the Treasury must refinance a huge stock of debt while continuing to refinance large deficits. Some in the markets expect the Treasury to cut the supply of long-term debt it issues in favor of more short-term bills.
That can get expensive for the U.S. government, and the taxpayer, when the Fed is raising short-term interest rates.
Higher long-term rates compound the risks. The Committee for a Responsible Federal Budget calculates that the 10-year Treasury at 5% is about 80 basis points above CBO's baseline. If it stays that way over the coming decade, interest costs would rise to an annual $2.7 trillion — more than Social Security or Medicare, the nonpartisan group said.
Higher average interest rates also mean U.S. growth has to stay higher for longer for the nation to have any chance at growing its way out of debt.
That already looks unlikely. The International Monetary Fund estimated earlier this year that the U.S. government would need to run a primary budget surplus of 1% of GDP to put U.S. debt on a downward trajectory.
With President Donald Trump promising $5,000 checks if Republicans sweep the midterm election, a turn toward fiscal rectitude looks unlikely.
The bond market doesn't care about the politics. It's rendering a verdict about the cost of capital in a strong economy with continuing inflation pressure and vast government borrowing needs.
Policymakers may not like that judgment, but they can't ignore it.`,
    bodyJa: `The jump in Treasury yields this week is delivering a reality check about a strong economy, stubborn inflation, and the growing cost of the national debt.
That will put the squeeze on the debt-heavy Trump administration as it tries to find a path forward for the economy.
It also highlights the tension between the nation's top two economic policymakers. Federal Reserve Chairman Kevin Warsh wants to hear what markets are saying. Treasury Secretary Scott Bessent wants to use his tools to change the message when he believes it's wrong.
Bond yields jumped Wednesday, and were trading near multiple-decade highs Thursday, as traders digested surprisingly positive purchasing managers indices against the backdrop of a Fed that as of last week has started hiking its short-term policy rate. The 2-year Treasury yield rose 10 basis points to 4.87%, while the 10-year Treasury rose 17 basis points to 5.12% Thursday morning.
Those yields are extraordinary by recent standards but less so over a longer horizon. The 10-year Treasury averaged about 5.9% from 1990 through 2006, before years of slow growth and usually low interest rates reset Americans' expectations about borrowing costs.
Now the economy looks stronger, propelled in part by a surge in investment in artificial intelligence. Competition for capital has contributed to higher interest rates.
The boom appears to go deeper. The Census Bureau reported last week that real median household income rose 2.6% to $87,460 and the poverty rate fell by half a percentage point to 10.2%.
The economy's recent strength has also come on the back of a flood of government deficit spending, driven in part by large tax cuts under the first and second Trump administrations, with Iran war spending piling on. The federal deficit is set to come in above 6% of gross domestic product this year, based on data from the Congressional Budget Office. The agency projects that the tax-and-policy law passed last year will raise deficits by $4.7 trillion over 10 years, though tariffs will offset some of that.
The nation is awash in credit. Warsh pointed to heavy debt issuance by banks and other financial institutions and tight credit spreads — suggesting borrowers have little trouble seeking loans — as among the key factors that prompted him to vote with the rest of the Fed's policymakers to raise interest rates.
In the days since, several other Fed officials, including Governor Michael Barr on Wednesday, said they thought more rate increases would likely be needed.
Bond yields likely benefitted from Warsh's decision to raise interest rates this week. Had Warsh not acted on inflation, traders would have run up long-term yields to account for the uncertainty of when and how the Fed might act.
But Warsh will only go so far to influence the 10-year. "Ensuring continuous, sustainable, durable, economic growth, that's the business we're in," he said last week. Warsh and the Fed will act to try to tamp down the risk of inflation, but he doesn't want to induce a recession.
The Fed's decision to move up interest rates highlights the possibility for tension with the Treasury Department.
Warsh treats the 10-year Treasury as a vital source of information about the economy. He called it "the most important asset anywhere in the world" at his most recent press conference. He has changed the way the Fed communicates to make it easier for him to read the market's unfiltered signal.
Bessent, on the other hand, has shown willingness to intervene when he believes markets have moved away from equilibrium. He recently ramped up the Treasury's efforts to buy back some long-term debt maturities because he saw a "fever" in the markets.
"I don't believe that I can change the equilibrium price, but nothing's ever in equilibrium," Bessent said at a Breitbart event on Sept. 8. "When there's a disequilibrium, my job is to try to push things back towards equilibrium," he said.
The stakes are growing because the Treasury must refinance a huge stock of debt while continuing to refinance large deficits. Some in the markets expect the Treasury to cut the supply of long-term debt it issues in favor of more short-term bills.
That can get expensive for the U.S. government, and the taxpayer, when the Fed is raising short-term interest rates.
Higher long-term rates compound the risks. The Committee for a Responsible Federal Budget calculates that the 10-year Treasury at 5% is about 80 basis points above CBO's baseline. If it stays that way over the coming decade, interest costs would rise to an annual $2.7 trillion — more than Social Security or Medicare, the nonpartisan group said.
Higher average interest rates also mean U.S. growth has to stay higher for longer for the nation to have any chance at growing its way out of debt.
That already looks unlikely. The International Monetary Fund estimated earlier this year that the U.S. government would need to run a primary budget surplus of 1% of GDP to put U.S. debt on a downward trajectory.
With President Donald Trump promising $5,000 checks if Republicans sweep the midterm election, a turn toward fiscal rectitude looks unlikely.
The bond market doesn't care about the politics. It's rendering a verdict about the cost of capital in a strong economy with continuing inflation pressure and vast government borrowing needs.
Policymakers may not like that judgment, but they can't ignore it.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/treasury-yields-warsh-bessent-fed-national-debt-analysis.html",
    publishedAt: "2026-09-24T15:40:19+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "reported-assaults-on-britain-s-rail-serv-6ccddc97",
    title: "Reported assaults on Britain's rail services rise by more than a third",
    titleJa: "Reported assaults on Britain's rail services rise by more than a third",
    summaryJa: "Recorded incidents of violence and harassment against passengers and rail workers showed a sharp increase in the year to March.",
    bodyOriginal: `Reported assaults on Britain's rail services rise by more than a third
- Published
Reports of violent incidents and harassment on rail services "rose substantially" last year, figures from the rail regulator show.
Reported assaults, including physical and verbal, were up 36% in the year to March 2026 compared with the previous year, according to the Office of Rail and Road (ORR).
In total 13,464 assaults against passengers and members of the public were recorded on Britain's mainline railway, the highest number recorded since the series began in 2004.
The ORR said the figures were "concerning" and that it was working with the industry to address the problem.
According to the figures, harassment increased by 52% compared with the previous year and common assaults rose by 30%.
The increase comes against a backdrop of five years of rising reports of incidents and industry campaigns to raise awareness.
Assaults on the mainline railway are recorded according to their type. As a result each incident can lead to reports in more than one category, for example if someone is harassed and then physically assaulted.
There were also 11,289 reported assaults against members of the workforce on the mainline railway, up 12% compared with the previous year.
Of those 2,487 were physical assaults, while more than half (6,390 incidents) involved verbal abuse. The rest were threats.
"We're working with industry and our trade union colleagues to address work-related violence and harassment," said Richard Hines, the ORR's chief inspector of railways.
"This includes understanding where the risks are, putting effective controls in place, encouraging staff to report incidents and providing appropriate support afterwards," he said.
The statistics include mainline rail services in England, Scotland and Wales, but not Northern Ireland. The data release also covers the London Underground, trams, metros and other light rail services.
On the London Underground, recorded assaults increased 20% to 5,534 in the latest year, but reported workforce assaults fell 3% to 3,525.
Transport for London does not record multiple aspects of each incident. Instead it records the most severe aspect reported.
A spokesperson responding on behalf of Network Rail and the train companies said all operators were working to reduce risk and prevent harm by sharing information, improving reporting processes and deploying body-worn cameras.
"Keeping passengers and colleagues safe is at the heart of everything we do," the spokesperson said.
"Violence, abuse and intimidation directed at passengers or staff are completely unacceptable. The rail industry works closely with British Transport Police to investigate incidents, support victims and bring offenders to justice."
The passenger body, Transport Focus, said the ORR's figures supported research it conducted which found personal security was "one of the highest priorities" for passengers. However, only 3% of passengers it surveyed said they were dissatisfied with personal safety at the station.
Transport Focus acknowledged that some of the increase might reflect better reporting. Nevertheless, every incident represented someone negatively affected, it said, adding it would like to see "a much more strategic approach" to tackling the issue.
The RMT union, representing rail industry workers, said the figures corresponded with the union's own figures indicating two-thirds of its members had experienced violence at work.
RMT general secretary Eddie Dempsey called for an increase in staffing on public transport, including an end to lone working, to combat the problem.
"We also clearly need stronger legal protections for public transport workers against assaults at work," he said.
He said cuts to British Transport Police funding had been "disastrous" and called for outsourced security and enforcement staff to be brought in-house "as a matter of urgency".
Other notable figures from the statistical release include that 11 members of the public died at mainline level crossings in the latest year, six more than the previous year. Eight were pedestrians and the others were road vehicle users.
Get in touch
Have you experienced an assault on rail services? How safe do you feel? What measures would reassure you of your safety? Tell us.
Related topics
- Published16 September
- Published6 August`,
    bodyJa: `Reported assaults on Britain's rail services rise by more than a third
- Published
Reports of violent incidents and harassment on rail services "rose substantially" last year, figures from the rail regulator show.
Reported assaults, including physical and verbal, were up 36% in the year to March 2026 compared with the previous year, according to the Office of Rail and Road (ORR).
In total 13,464 assaults against passengers and members of the public were recorded on Britain's mainline railway, the highest number recorded since the series began in 2004.
The ORR said the figures were "concerning" and that it was working with the industry to address the problem.
According to the figures, harassment increased by 52% compared with the previous year and common assaults rose by 30%.
The increase comes against a backdrop of five years of rising reports of incidents and industry campaigns to raise awareness.
Assaults on the mainline railway are recorded according to their type. As a result each incident can lead to reports in more than one category, for example if someone is harassed and then physically assaulted.
There were also 11,289 reported assaults against members of the workforce on the mainline railway, up 12% compared with the previous year.
Of those 2,487 were physical assaults, while more than half (6,390 incidents) involved verbal abuse. The rest were threats.
"We're working with industry and our trade union colleagues to address work-related violence and harassment," said Richard Hines, the ORR's chief inspector of railways.
"This includes understanding where the risks are, putting effective controls in place, encouraging staff to report incidents and providing appropriate support afterwards," he said.
The statistics include mainline rail services in England, Scotland and Wales, but not Northern Ireland. The data release also covers the London Underground, trams, metros and other light rail services.
On the London Underground, recorded assaults increased 20% to 5,534 in the latest year, but reported workforce assaults fell 3% to 3,525.
Transport for London does not record multiple aspects of each incident. Instead it records the most severe aspect reported.
A spokesperson responding on behalf of Network Rail and the train companies said all operators were working to reduce risk and prevent harm by sharing information, improving reporting processes and deploying body-worn cameras.
"Keeping passengers and colleagues safe is at the heart of everything we do," the spokesperson said.
"Violence, abuse and intimidation directed at passengers or staff are completely unacceptable. The rail industry works closely with British Transport Police to investigate incidents, support victims and bring offenders to justice."
The passenger body, Transport Focus, said the ORR's figures supported research it conducted which found personal security was "one of the highest priorities" for passengers. However, only 3% of passengers it surveyed said they were dissatisfied with personal safety at the station.
Transport Focus acknowledged that some of the increase might reflect better reporting. Nevertheless, every incident represented someone negatively affected, it said, adding it would like to see "a much more strategic approach" to tackling the issue.
The RMT union, representing rail industry workers, said the figures corresponded with the union's own figures indicating two-thirds of its members had experienced violence at work.
RMT general secretary Eddie Dempsey called for an increase in staffing on public transport, including an end to lone working, to combat the problem.
"We also clearly need stronger legal protections for public transport workers against assaults at work," he said.
He said cuts to British Transport Police funding had been "disastrous" and called for outsourced security and enforcement staff to be brought in-house "as a matter of urgency".
Other notable figures from the statistical release include that 11 members of the public died at mainline level crossings in the latest year, six more than the previous year. Eight were pedestrians and the others were road vehicle users.
Get in touch
Have you experienced an assault on rail services? How safe do you feel? What measures would reassure you of your safety? Tell us.
Related topics
- Published16 September
- Published6 August`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6z0z5dz884lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-24T15:38:50+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b070/live/bbedba70-b811-11f1-9172-17f860da9de7.jpg",
    readTime: 10,
  },
  {
    id: "big-business-warns-trump-against-diesel-8cdcb3c3",
    title: "Big business warns Trump against diesel export ban in joint letter",
    titleJa: "Big business warns Trump against diesel export ban in joint letter",
    summaryJa: "The national average for a gallon of diesel reached $6.51 on Thursday, nearly $3 more than the same period a year ago, according to data from AAA.",
    bodyOriginal: `The biggest business groups in the U.S. warned President Trump against a diesel export ban this week, saying in a joint letter that such an action would prove counterproductive and raise fuel prices rather than lower them.
The U.S. Chamber of Commerce, Business Roundtable, National Association of Manufacturers, American Petroleum Institute and dozens of other groups told Trump that an export ban would "lead to less fuel production, tighter supplies and rising costs for American families, farmers and truckers."
"You have been asked by some to ban or limit the export of diesel to help lower prices, when in fact the opposite would occur," the groups warned in the letter sent to Trump on Wednesday.
You can download the letter here
Trump is facing growing political pressure from Republican lawmakers in farm states including Iowa to take action to lower fuel prices ahead of the U.S. midterm elections. Diesel cost a national average of $6.51 per gallon Thursday, $2.82 more expensive than the same period last year, according to data from AAA.
Trump said Tuesday that he has advocated for an export ban during deliberations within the administration. The remarks took the oil industry and business groups by surprise.
"I've said let's not send out the diesel. We make a lot of diesel," Trump told reporters on the sidelines of the U.N. General Assembly in New York. "I've called for it within my people. I've been talking about it."
Feasibility study
Asked by Trump to explain the administration's deliberations to the press, Treasury Secretary Scott Bessent said the White House was examining whether an export ban is "feasible in terms of the overall refining capacity and whether a full or partial ban would work."
A report on Politico Wednesday citing unnamed sources that the administration was preparing a plan to ban diesel exports for 90 days drove down diesel futures and shares of U.S. oil refiners.
But U.S. Energy Secretary Chris Wright told The New York Times later Wednesday that "nobody wants a full blanket ban or zero exports of diesel."
"That's not being discussed," Wright told the Times. "What's being discussed is what's the most efficient way to get more diesel into the United States of America and continue maximum flows of gasoline and jet fuel and all that."
Wright, an oil industry veteran who previoulsy served as CEO of oilfield servicer Liberty Energy, has said a diesel export ban would raise U.S. gasoline prices.
Energy experts say an export ban would lead to a brief collapse in diesel prices in some U.S. regions but fuel prices would then shoot higher as refiners cut production in response to the restrictions.
Diesel prices have soared as Ukraine's attacks on Russian refineries have forced Moscow to ban diesel exports. Russia was previously the second-largest diesel exporter in the world. A ban on U.S. diesel exports would remove the global market's largest source of supply.
Iran and its Houthi allies have also attacked refineries in the Middle East, and exports through the Strait of Hormuz are constrained as Iran continues to threaten and attack tankers.`,
    bodyJa: `The biggest business groups in the U.S. warned President Trump against a diesel export ban this week, saying in a joint letter that such an action would prove counterproductive and raise fuel prices rather than lower them.
The U.S. Chamber of Commerce, Business Roundtable, National Association of Manufacturers, American Petroleum Institute and dozens of other groups told Trump that an export ban would "lead to less fuel production, tighter supplies and rising costs for American families, farmers and truckers."
"You have been asked by some to ban or limit the export of diesel to help lower prices, when in fact the opposite would occur," the groups warned in the letter sent to Trump on Wednesday.
You can download the letter here
Trump is facing growing political pressure from Republican lawmakers in farm states including Iowa to take action to lower fuel prices ahead of the U.S. midterm elections. Diesel cost a national average of $6.51 per gallon Thursday, $2.82 more expensive than the same period last year, according to data from AAA.
Trump said Tuesday that he has advocated for an export ban during deliberations within the administration. The remarks took the oil industry and business groups by surprise.
"I've said let's not send out the diesel. We make a lot of diesel," Trump told reporters on the sidelines of the U.N. General Assembly in New York. "I've called for it within my people. I've been talking about it."
Feasibility study
Asked by Trump to explain the administration's deliberations to the press, Treasury Secretary Scott Bessent said the White House was examining whether an export ban is "feasible in terms of the overall refining capacity and whether a full or partial ban would work."
A report on Politico Wednesday citing unnamed sources that the administration was preparing a plan to ban diesel exports for 90 days drove down diesel futures and shares of U.S. oil refiners.
But U.S. Energy Secretary Chris Wright told The New York Times later Wednesday that "nobody wants a full blanket ban or zero exports of diesel."
"That's not being discussed," Wright told the Times. "What's being discussed is what's the most efficient way to get more diesel into the United States of America and continue maximum flows of gasoline and jet fuel and all that."
Wright, an oil industry veteran who previoulsy served as CEO of oilfield servicer Liberty Energy, has said a diesel export ban would raise U.S. gasoline prices.
Energy experts say an export ban would lead to a brief collapse in diesel prices in some U.S. regions but fuel prices would then shoot higher as refiners cut production in response to the restrictions.
Diesel prices have soared as Ukraine's attacks on Russian refineries have forced Moscow to ban diesel exports. Russia was previously the second-largest diesel exporter in the world. A ban on U.S. diesel exports would remove the global market's largest source of supply.
Iran and its Houthi allies have also attacked refineries in the Middle East, and exports through the Strait of Hormuz are constrained as Iran continues to threaten and attack tankers.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/chamber-commerce-business-roundtable-trump-diesel-export-ban-iran-war.html",
    publishedAt: "2026-09-24T14:23:33+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "trump-xi-expected-to-talk-taiwan-ai-trad-3dfdd4a4",
    title: "Trump, Xi expected to talk Taiwan, AI, trade and Iran as DC summit kicks off",
    titleJa: "Trump, Xi expected to talk Taiwan, AI, trade and Iran as DC summit kicks off",
    summaryJa: "Trump greeted China's Xi at Joint Base Andrews, his first time traveling to the facility to welcome a foreign leader.",
    bodyOriginal: `President Donald Trump and Chinese Leader Xi Jinping are expected to meet at the White House on Thursday for high-stakes talks about trade, artificial intelligence and the Iran war — in between displays of military fanfare and a lavish banquet.
While China analysts broadly predict the leaders' personal relationship and policy goals will result in a cautious summit that yields few major deliverables, their latest face-to-face nevertheless carries real geopolitical risk.
That significance was on display the moment Xi arrived Wednesday evening at Maryland's Joint Base Andrews, where he was greeted on the tarmac by Trump — who met him at the airplane stairs after walking down a red carpet that U.S. service members had rolled out.
It was Trump's first time traveling to the base to welcome a foreign leader, a source familiar confirmed to CNBC on condition of anonymity to discuss the president's plans for the summit. The last president to make the gesture was Barack Obama, who greeted then-Pope Francis on the Andrews tarmac 11 years years ago this week.
On Thursday morning, Trump and First Lady Melania Trump are set to welcome Xi and Chinese First Lady Peng Liyuan at the White House for an "arrival ceremony" on the State Floor. It is Xi's first visit to Washington since September 2015, coming to the capital city right after the pope.
The leaders will then head to the Rose Garden for a military review, after which Trump and Xi will hold a bilateral meeting, while Melania Trump and Madame Peng branch off for a separate event.
That evening, Trump and the first lady will host the Chinese delegation for a state dinner in the White House's East Room, with both countries' leaders expected to give remarks at the top of the event.
A slew of U.S. business executives are slated to join the dinner. Reuters had reported that Xi was expected to bring along his own crew of CEOs, but that entourage did not materialize.
On Friday, the presidents and first ladies will hold a private tea at the White House, then take a tour of the National Archives before Xi's departure.
"President Xi hosted President Trump in China for a historic summit this summer, and President Trump is reciprocating his hospitality by welcoming the Chinese delegation for a reciprocal visit this week," White House spokeswoman Anna Kelly told CNBC in a statement.
"The President will forge relationships with anyone in order to advance our national interests and make good deals for the American people," Kelly added.
This is developing news. Please check back for updates.`,
    bodyJa: `President Donald Trump and Chinese Leader Xi Jinping are expected to meet at the White House on Thursday for high-stakes talks about trade, artificial intelligence and the Iran war — in between displays of military fanfare and a lavish banquet.
While China analysts broadly predict the leaders' personal relationship and policy goals will result in a cautious summit that yields few major deliverables, their latest face-to-face nevertheless carries real geopolitical risk.
That significance was on display the moment Xi arrived Wednesday evening at Maryland's Joint Base Andrews, where he was greeted on the tarmac by Trump — who met him at the airplane stairs after walking down a red carpet that U.S. service members had rolled out.
It was Trump's first time traveling to the base to welcome a foreign leader, a source familiar confirmed to CNBC on condition of anonymity to discuss the president's plans for the summit. The last president to make the gesture was Barack Obama, who greeted then-Pope Francis on the Andrews tarmac 11 years years ago this week.
On Thursday morning, Trump and First Lady Melania Trump are set to welcome Xi and Chinese First Lady Peng Liyuan at the White House for an "arrival ceremony" on the State Floor. It is Xi's first visit to Washington since September 2015, coming to the capital city right after the pope.
The leaders will then head to the Rose Garden for a military review, after which Trump and Xi will hold a bilateral meeting, while Melania Trump and Madame Peng branch off for a separate event.
That evening, Trump and the first lady will host the Chinese delegation for a state dinner in the White House's East Room, with both countries' leaders expected to give remarks at the top of the event.
A slew of U.S. business executives are slated to join the dinner. Reuters had reported that Xi was expected to bring along his own crew of CEOs, but that entourage did not materialize.
On Friday, the presidents and first ladies will hold a private tea at the White House, then take a tour of the National Archives before Xi's departure.
"President Xi hosted President Trump in China for a historic summit this summer, and President Trump is reciprocating his hospitality by welcoming the Chinese delegation for a reciprocal visit this week," White House spokeswoman Anna Kelly told CNBC in a statement.
"The President will forge relationships with anyone in order to advance our national interests and make good deals for the American people," Kelly added.
This is developing news. Please check back for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/trump-xi-meeting-china-washington.html",
    publishedAt: "2026-09-24T11:20:52+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "china-confirms-first-ai-talks-with-u-s-h-8032eea8",
    title: "China confirms first AI talks with U.S. have taken place, hints at trade truce extension",
    titleJa: "China confirms first AI talks with U.S. have taken place, hints at trade truce extension",
    summaryJa: "Chinese confirmation of the AI discussions came just hours before President Xi Jinping was scheduled to begin talks with U.S. President Donald Trump.",
    bodyOriginal: `BEIJING—China's Commerce Ministry confirmed Thursday that its senior trade negotiators had held their first talks with the U.S. on artificial intelligence.
Spokesperson He Yadong told reporters the two sides also discussed plans for reducing tariffs, and extending trade arrangements agreed in Kuala Lumpur last October.
He was referring to China's Vice Premier He Lifeng meeting with his counterpart, Treasury Secretary Scott Bessent, in New York in the runup to the summit this week between U.S. President Donald Trump and Chinese President Xi Jinping.
As Xi landed in the U.S., Bessent told Fox News on Wednesday the two countries agreed to extend a trade truce to January. The truce, reached in October 2025, kept tariffs lower and limited China's export controls on rare earths, which are critical components of semiconductors and many household goods, as well as defense products.
Earlier in the week, Bessent said the two sides discussed establishing an AI dialogue and a mechanism to alert each other about AI risks.
The Chinese confirmation of the AI talks came just hours before Xi and Trump were scheduled to begin talks in Washington, D.C., as part of a state visit.
The ministry added the two sides held constructive, candid talks, and reached multiple points of consensus.
Both countries are weighing how to address the risks posed by rapidly advancing technology after recent incidents involving AI systems raised fears that increasingly autonomous models could make attacks faster and harder to contain.`,
    bodyJa: `BEIJING—China's Commerce Ministry confirmed Thursday that its senior trade negotiators had held their first talks with the U.S. on artificial intelligence.
Spokesperson He Yadong told reporters the two sides also discussed plans for reducing tariffs, and extending trade arrangements agreed in Kuala Lumpur last October.
He was referring to China's Vice Premier He Lifeng meeting with his counterpart, Treasury Secretary Scott Bessent, in New York in the runup to the summit this week between U.S. President Donald Trump and Chinese President Xi Jinping.
As Xi landed in the U.S., Bessent told Fox News on Wednesday the two countries agreed to extend a trade truce to January. The truce, reached in October 2025, kept tariffs lower and limited China's export controls on rare earths, which are critical components of semiconductors and many household goods, as well as defense products.
Earlier in the week, Bessent said the two sides discussed establishing an AI dialogue and a mechanism to alert each other about AI risks.
The Chinese confirmation of the AI talks came just hours before Xi and Trump were scheduled to begin talks in Washington, D.C., as part of a state visit.
The ministry added the two sides held constructive, candid talks, and reached multiple points of consensus.
Both countries are weighing how to address the risks posed by rapidly advancing technology after recent incidents involving AI systems raised fears that increasingly autonomous models could make attacks faster and harder to contain.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/china-confirms-first-ai-talks-with-us-have-taken-place-hints-at-trade-truce-extension.html",
    publishedAt: "2026-09-24T10:18:19+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "rolls-royce-signs-multi-million-engine-d-01f4a1e8",
    title: "Rolls-Royce signs 'multi-million' engine deal",
    titleJa: "Rolls-Royce signs 'multi-million' engine deal",
    summaryJa: "The order will see 18 engines built and maintained by the company from its Derby aerospace centre.",
    bodyOriginal: `Rolls-Royce signs 'multi-million' engine deal
- Published
Rolls-Royce has moved forward with a deal to power a new fleet of Airbus long-haul jets for Philippine Airlines.
The FTSE-100 firm will provide 18 engines for nine new Airbus A350-1000 aircraft in a deal worth "hundreds of millions of pounds".
The agreement, once finalised, also includes a maintenance package, meaning Rolls-Royce will continue servicing and monitoring the engines throughout their operational life, officials said.
The government welcomed the deal, saying it would bring "good quality jobs" to the company's Derby base.
The order was first announced as a memorandum of understanding at the Farnborough International Airshow in July.
At the time, Rob Watson, president of civil airspace at Rolls-Royce, said the company was "proud to continue strengthening our long-standing relationship with Philippine Airlines".
While the deal is described as being worth "hundreds of millions", the precise value has not been confirmed.
Airbus designs and manufactures wings for all its commercial aircraft at its Broughton site in North Wales.
Minister for trade Anas Sarwar said: "This news shows British engineering is flying high with world-class innovation that puts our companies at the front of the pack.
"Building these engines and wings brings good quality jobs to Derby and Broughton, and means UK expertise is at the heart of thousands of flights by one of the fastest-growing airlines around the world."
The engine involved, the Trent XWB-97, can operate using a 50% sustainable aviation fuel blend, with plans for it to run on 100% sustainable aviation fuel in the future.
This order follows Philippine Airlines's previous order for nine Trent XWB-97-powered Airbus A350-1000 in 2023.
Get in touch
Tell us which stories we should cover in Derby
Listen to BBC Radio Derby on Sounds and follow BBC Derby on Facebook, external, on X, external, or on Instagram, external. Send your story ideas to eastmidsnews@bbc.co.uk, external or via WhatsApp, external on 0808 100 2210.
Related topics
- Published2 days ago
- Published24 July
- Published2 July
- Published21 November 2025`,
    bodyJa: `Rolls-Royce signs 'multi-million' engine deal
- Published
Rolls-Royce has moved forward with a deal to power a new fleet of Airbus long-haul jets for Philippine Airlines.
The FTSE-100 firm will provide 18 engines for nine new Airbus A350-1000 aircraft in a deal worth "hundreds of millions of pounds".
The agreement, once finalised, also includes a maintenance package, meaning Rolls-Royce will continue servicing and monitoring the engines throughout their operational life, officials said.
The government welcomed the deal, saying it would bring "good quality jobs" to the company's Derby base.
The order was first announced as a memorandum of understanding at the Farnborough International Airshow in July.
At the time, Rob Watson, president of civil airspace at Rolls-Royce, said the company was "proud to continue strengthening our long-standing relationship with Philippine Airlines".
While the deal is described as being worth "hundreds of millions", the precise value has not been confirmed.
Airbus designs and manufactures wings for all its commercial aircraft at its Broughton site in North Wales.
Minister for trade Anas Sarwar said: "This news shows British engineering is flying high with world-class innovation that puts our companies at the front of the pack.
"Building these engines and wings brings good quality jobs to Derby and Broughton, and means UK expertise is at the heart of thousands of flights by one of the fastest-growing airlines around the world."
The engine involved, the Trent XWB-97, can operate using a 50% sustainable aviation fuel blend, with plans for it to run on 100% sustainable aviation fuel in the future.
This order follows Philippine Airlines's previous order for nine Trent XWB-97-powered Airbus A350-1000 in 2023.
Get in touch
Tell us which stories we should cover in Derby
Listen to BBC Radio Derby on Sounds and follow BBC Derby on Facebook, external, on X, external, or on Instagram, external. Send your story ideas to eastmidsnews@bbc.co.uk, external or via WhatsApp, external on 0808 100 2210.
Related topics
- Published2 days ago
- Published24 July
- Published2 July
- Published21 November 2025`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmpwle47zxgyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-09-24T10:14:47+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/dc85/live/41e196b0-748d-11f1-bb8c-7bdd252343cb.jpg",
    readTime: 5,
  },
  {
    id: "30-year-treasury-yield-hits-highest-leve-36652917",
    title: "30-year Treasury yield hits highest level since 2004",
    titleJa: "30-year Treasury yield hits highest level since 2004",
    summaryJa: "U.S. Treasury yields continued their upward momentum after hitting a 19-year high on Wednesday.",
    bodyOriginal: `Treasury yields were trading at multi-decade highs early Thursday morning, as investor bets on another rate hike from the Federal Reserve mounted.
The benchmark 10-year Treasury note yield, which is tied to rates on mortgages, surged to 5.139% — its highest level since July 2007. The yield on the 2-year note climbed to 4.897% for its highest since 2023, while the 30-year Treasury yield was up more than 3 basis points to reach a post-2004 peak of 5.438%.
One basis point equals 0.01%, and yields and prices move in opposite directions.
It comes amid a global government bond selloff, with Japan's 10-year JGB yield rising 8 basis points to 3.055%, the highest since August 1996. U.K. Gilts and German Bunds also moved higher, with yields on various European bonds hitting fresh multi-year highs.
Several factors drove the Treasury selloff, including stronger-than-expected U.S. economic activity, hawkish commentary from a Federal Reserve official, and high oil prices.
S&P Global's purchasing managers' index, released on Wednesday, showed that services PMI rose to 58.7 in September, the highest level in almost five years. Its manufacturing counterpart was up to 56.7, a level not seen in over four years.
The data drove expectations of more rate hikes, with traders last pricing in a more-than-75 % chance that the Federal Open Market Committee will increase rates again at its October meeting, per the CME Group's FedWatch tool. That compares to a roughly 49% probability just a week ago.
Michael Barr, a member of the Fed's Board of Governors, said in a speech on Wednesday that "further policy adjustments" are likely to come to bring inflation down to target.
Speaking in London on Thursday, New York Federal Reserve President John Williams said it would be "reasonable" to expect another Fed interest rate hike by the end of the year.
"The main driver was a strong batch of PMIs, along with a rebound in oil prices, which both led to mounting speculation about faster rate hikes," Deutsche Bank analysts said of the Treasurys selloff in a note Thursday.
"So [PMI results] played into the narrative of resilient growth, which in turn would enable the Fed to keep hiking rates to deal with inflation," they added.
Thursday's moves came as oil prices rose sharply. International Brent crude futures rose about 2.8% to trade at $105.95 a barrel, while West Texas Intermediate crude gained 2.2% to $94.40.
Investors will await the weekly jobless claims and new home sales for August on Thursday as they look for further insights on the state of the U.S. economy.`,
    bodyJa: `Treasury yields were trading at multi-decade highs early Thursday morning, as investor bets on another rate hike from the Federal Reserve mounted.
The benchmark 10-year Treasury note yield, which is tied to rates on mortgages, surged to 5.139% — its highest level since July 2007. The yield on the 2-year note climbed to 4.897% for its highest since 2023, while the 30-year Treasury yield was up more than 3 basis points to reach a post-2004 peak of 5.438%.
One basis point equals 0.01%, and yields and prices move in opposite directions.
It comes amid a global government bond selloff, with Japan's 10-year JGB yield rising 8 basis points to 3.055%, the highest since August 1996. U.K. Gilts and German Bunds also moved higher, with yields on various European bonds hitting fresh multi-year highs.
Several factors drove the Treasury selloff, including stronger-than-expected U.S. economic activity, hawkish commentary from a Federal Reserve official, and high oil prices.
S&P Global's purchasing managers' index, released on Wednesday, showed that services PMI rose to 58.7 in September, the highest level in almost five years. Its manufacturing counterpart was up to 56.7, a level not seen in over four years.
The data drove expectations of more rate hikes, with traders last pricing in a more-than-75 % chance that the Federal Open Market Committee will increase rates again at its October meeting, per the CME Group's FedWatch tool. That compares to a roughly 49% probability just a week ago.
Michael Barr, a member of the Fed's Board of Governors, said in a speech on Wednesday that "further policy adjustments" are likely to come to bring inflation down to target.
Speaking in London on Thursday, New York Federal Reserve President John Williams said it would be "reasonable" to expect another Fed interest rate hike by the end of the year.
"The main driver was a strong batch of PMIs, along with a rebound in oil prices, which both led to mounting speculation about faster rate hikes," Deutsche Bank analysts said of the Treasurys selloff in a note Thursday.
"So [PMI results] played into the narrative of resilient growth, which in turn would enable the Fed to keep hiking rates to deal with inflation," they added.
Thursday's moves came as oil prices rose sharply. International Brent crude futures rose about 2.8% to trade at $105.95 a barrel, while West Texas Intermediate crude gained 2.2% to $94.40.
Investors will await the weekly jobless claims and new home sales for August on Thursday as they look for further insights on the state of the U.S. economy.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/us-treasury-yields-bonds-fed-inflation.html",
    publishedAt: "2026-09-24T09:36:19+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "new-york-fed-s-williams-says-it-s-reason-54bb6613",
    title: "New York Fed’s Williams says it's 'reasonable' to expect another rate hike by year-end",
    titleJa: "New York Fed’s Williams says it's 'reasonable' to expect another rate hike by year-end",
    summaryJa: "It would be \"reasonable\" to expect another interest rate hike from the Federal Reserve by the end of the year, New York Federal Reserve President John Williams said on Thursday.Williams said investor sentiment suggests that \"it's likely that another rate hike may be appropriate by the end of the year.\"",
    bodyOriginal: `It would be "reasonable" to expect another interest rate hike from the Federal Reserve by the end of the year, New York Federal Reserve President John Williams said on Thursday.
Williams said investor sentiment suggests that "it's likely that another rate hike may be appropriate by the end of the year."
"That seems to me a reasonable way of thinking about it. But we have to see. We're going to collect the data and do what we did between July and September," he said.
Williams also said the time for explicit forward guidance was "over," echoing the approach of Fed Chairman Kevin Warsh, who has said the central bank will refrain from directly signalling to the market what it intends to do at coming meetings.
He was speaking at the London Macro Policy Forum.
The Federal Reserve raised its benchmark interest rate by a quarter percentage point earlier this month, taking the overnight funds rate to a target range of 3.75%-4%.
Commentary from Warsh and from other central bank officials following that decision has fueled market expectations that another hike will follow in the coming months. CME Group's FedWatch tool put the probability of an October raise at 77.5% on Thursday, up from around 53% on Wednesday.
Recent data suggests the U.S. economy remains strong while inflation remains above 3%.
Boston Federal Reserve President Susan Collins on Wednesday warned there was "an increased likelihood" that inflation will stay "notably" above the Federal Reserve's 2% target.
Fed Governor Michael Barr said Wednesday that "further policy adjustments are likely to be needed to ensure inflation comes down to target in a timely fashion."`,
    bodyJa: `It would be "reasonable" to expect another interest rate hike from the Federal Reserve by the end of the year, New York Federal Reserve President John Williams said on Thursday.
Williams said investor sentiment suggests that "it's likely that another rate hike may be appropriate by the end of the year."
"That seems to me a reasonable way of thinking about it. But we have to see. We're going to collect the data and do what we did between July and September," he said.
Williams also said the time for explicit forward guidance was "over," echoing the approach of Fed Chairman Kevin Warsh, who has said the central bank will refrain from directly signalling to the market what it intends to do at coming meetings.
He was speaking at the London Macro Policy Forum.
The Federal Reserve raised its benchmark interest rate by a quarter percentage point earlier this month, taking the overnight funds rate to a target range of 3.75%-4%.
Commentary from Warsh and from other central bank officials following that decision has fueled market expectations that another hike will follow in the coming months. CME Group's FedWatch tool put the probability of an October raise at 77.5% on Thursday, up from around 53% on Wednesday.
Recent data suggests the U.S. economy remains strong while inflation remains above 3%.
Boston Federal Reserve President Susan Collins on Wednesday warned there was "an increased likelihood" that inflation will stay "notably" above the Federal Reserve's 2% target.
Fed Governor Michael Barr said Wednesday that "further policy adjustments are likely to be needed to ensure inflation comes down to target in a timely fashion."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/feds-williams-another-rate-hike-by-year-end.html",
    publishedAt: "2026-09-24T09:06:18+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "judge-lifts-trump-ban-on-cnn-ms-now-poli-f7979d91",
    title: "Judge lifts Trump ban on CNN, MS NOW, Politico from White House",
    titleJa: "Judge lifts Trump ban on CNN, MS NOW, Politico from White House",
    summaryJa: "District Judge Tim Kelly said the three outlets should have their access immediately restored from the ban that the president had announced on Sept. 18.",
    bodyOriginal: `A federal judge on Thursday ordered White House access to journalists from CNN, MS Now and Politico to be temporarily restored, saying U.S. President Donald Trump's media ban was likely unconstitutional.
The ruling represents a victory for the three media outlets, who had argued the ban violated their First Amendment rights, and comes as Trump hosts Chinese President Xi Jinping for a high-stakes meeting.
In his ruling, District Judge Tim Kelly said the three outlets should have their access immediately restored from the ban that the president had announced on Sept. 18, rejecting a request by the Justice Department to delay it for at least two days. The judge was nominated by Trump to the federal bench in 2017.
Kelly said the Trump administration must return, reinstate and restore the White House "hard pass" press credentials held by employees of the three outlets that had been revoked. The temporary restraining order remains in effect for 14 days, with Kelly noting that such orders are "generally unappealable."
"Simply put—the record lacks factual support for Defendants' contention that the revocation of Plaintiffs' hard passes will in fact protect national security or that national security will be endangered if the Court orders their passes reinstated while this litigation proceeds," Kelly said.
In a Truth Social post last week, Trump said he was banning the outlets from the White House effective immediately, warning that other "Fake News Media Outlets" could follow. The president cited what he called "cumulative stories" by the three news organizations, adding, "You get sick of it."
In his ruling, Kelly said the court declined "to stay" the temporary restraining order's entry or effective date, as the defendants had requested.
"Doing so runs against the purpose of such an order, which is to immediately—but temporarily—preserve the last uncontested status quo while the litigation proceeds," he added.
Disclosure: CNBC and MS NOW are divisions of Versant Media.`,
    bodyJa: `A federal judge on Thursday ordered White House access to journalists from CNN, MS Now and Politico to be temporarily restored, saying U.S. President Donald Trump's media ban was likely unconstitutional.
The ruling represents a victory for the three media outlets, who had argued the ban violated their First Amendment rights, and comes as Trump hosts Chinese President Xi Jinping for a high-stakes meeting.
In his ruling, District Judge Tim Kelly said the three outlets should have their access immediately restored from the ban that the president had announced on Sept. 18, rejecting a request by the Justice Department to delay it for at least two days. The judge was nominated by Trump to the federal bench in 2017.
Kelly said the Trump administration must return, reinstate and restore the White House "hard pass" press credentials held by employees of the three outlets that had been revoked. The temporary restraining order remains in effect for 14 days, with Kelly noting that such orders are "generally unappealable."
"Simply put—the record lacks factual support for Defendants' contention that the revocation of Plaintiffs' hard passes will in fact protect national security or that national security will be endangered if the Court orders their passes reinstated while this litigation proceeds," Kelly said.
In a Truth Social post last week, Trump said he was banning the outlets from the White House effective immediately, warning that other "Fake News Media Outlets" could follow. The president cited what he called "cumulative stories" by the three news organizations, adding, "You get sick of it."
In his ruling, Kelly said the court declined "to stay" the temporary restraining order's entry or effective date, as the defendants had requested.
"Doing so runs against the purpose of such an order, which is to immediately—but temporarily—preserve the last uncontested status quo while the litigation proceeds," he added.
Disclosure: CNBC and MS NOW are divisions of Versant Media.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/judge-lifts-trumps-white-house-ban-on-cnn-ms-now-and-politico.html",
    publishedAt: "2026-09-24T06:22:46+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "world-heads-into-food-crises-blind-as-u-f0599505",
    title: "World heads into food crises 'blind' as U.S. aid cuts squeeze UN food agency, experts warn",
    titleJa: "World heads into food crises 'blind' as U.S. aid cuts squeeze UN food agency, experts warn",
    summaryJa: "Climate shocks, conflict and a global fuel crisis, on top of surging interest rates and donor cuts, leave agencies less able to help those facing higher food prices.",
    bodyOriginal: `SINGAPORE — Other nations will have to fill the funding gap at the UN Food and Agriculture Organization as Washington pulls back, according to Phil Hogan, a former European Union commissioner who is now running to lead the world's biggest food agency.
"It is important to continue to support [the agency] financially ... as the United States pulls back from some of these programs, other member countries of the FAO will have to step in to ensure all the animal disease issues and food safety issues remain in place," Hogan told CNBC in an exclusive interview in Singapore on Wednesday.
The Trump administration has drastically scaled back U.S. foreign aid by dismantling the U.S. Agency for International Development (USAID), once the world's largest humanitarian donor.
Hogan, Ireland's former EU agriculture and trade commissioner, is now the frontrunner to become director-general of the Rome-based agency that oversees global rules for food security and sounds alarms over looming famines. He is on a weeks-long tour in Asia to meet regional leaders, ahead of a vote among member countries next summer when current chief Qu Dongyu's term expires in July.
UN agencies and virtually all international humanitarian response NGOs and research organizations are struggling for funding as donors, notably but not only the U.S., have sharply reduced foreign assistance, said Chris Barrett, an agricultural and development economist at Cornell University.
The funding shortfalls mean "less monitoring and surveillance for early warning of looming problems," and limit the world's ability to cushion the blows to poor families suddenly facing higher food prices," said Barrett. That ultimately leads to more severe hunger problems and sociopolitical unrest as populations grow frustrated with governments that cannot safeguard their food security, he warned.
More than a quarter of the world's population faced moderate or severe food insecurity in 2025, and over 266 million people face acute hunger this year, according to the World Health Organization and UN World Food Programme.
Food 'disasters' loom
The conflict around the Strait of Hormuz and the war in Ukraine are "contributing towards potential disasters in 2027 in many parts of the world," Hogan said, adding that El Niño would compound the risk.
The Middle East war and the subsequent crisis in the strategically vital Strait of Hormuz have stoked fears of a global agrifood catastrophe as flows of fertilizer and energy exports essentially ground to a halt. The FAO sounded the alarm that poor countries were most exposed, as delayed commodity supplies could lead to lower output, higher inflation and weaker global growth.
The prolonged war in Ukraine has also snarled global wheat trade through the Black Sea, compounding economic effects and undermining food security in vulnerable countries. Forecasts of a powerful El Niño weather event may further threaten global food security.
We're going into this on our way to being blind and with one hand tied behind our back, in terms of global capacity to foresee and respond to major food crises.Chris NewtonFood security analyst, International Crisis Group
Any reform plan for the agency must reckon with a tighter budget, Hogan said. "We have to be conscious of the fact that we have less money." His first 100 days would focus on moving staff out of headquarters and into offices in so-called "hunger hotspots" characterized by severe food shortages.
The candidate also stressed cost efficiency and collaborations with other UN agencies in implementing the organization's mandate of providing regular access to enough high-quality food and ending hunger and malnutrition.
He argued the agency had been too quiet in the Black Sea Grain Initiative — a now-suspended agreement between Russia, Ukraine, Turkey and the UN to get food and fertilizer exports from Ukraine flowing after Russia's attacks since 2022 largely halted vessel traffic through Ukraine's Black Sea ports, previously responsible for around 90% of Ukraine's agricultural exports.
"Perhaps the FAO was a bit behind the curve in not elevating this issue and becoming more centrally involved in solutions around food security within the United Nations family," he said. The UN played a key role in the Black Sea agreement but the FAO "was not at the table."
Climate shocks, geopolitical conflict and a global fuel crisis, on top of surging interest rates and donor cuts, leave the world poorly placed to respond, said Chris Newton, food security analyst at International Crisis Group.
"We're going into this on our way to being blind and with one hand tied behind our back, in terms of global capacity to foresee and respond to major food crises."
Some experts are less alarmed. Even with an "exceptionally strong" El Niño, "we are currently well short of the conditions for a global food crisis," said Ian Mitchell, a senior policy fellow at the Center for Global Development. Global grain stockpiles remain healthy by historical standards, and futures markets aren't signaling a supply crunch, he said.`,
    bodyJa: `SINGAPORE — Other nations will have to fill the funding gap at the UN Food and Agriculture Organization as Washington pulls back, according to Phil Hogan, a former European Union commissioner who is now running to lead the world's biggest food agency.
"It is important to continue to support [the agency] financially ... as the United States pulls back from some of these programs, other member countries of the FAO will have to step in to ensure all the animal disease issues and food safety issues remain in place," Hogan told CNBC in an exclusive interview in Singapore on Wednesday.
The Trump administration has drastically scaled back U.S. foreign aid by dismantling the U.S. Agency for International Development (USAID), once the world's largest humanitarian donor.
Hogan, Ireland's former EU agriculture and trade commissioner, is now the frontrunner to become director-general of the Rome-based agency that oversees global rules for food security and sounds alarms over looming famines. He is on a weeks-long tour in Asia to meet regional leaders, ahead of a vote among member countries next summer when current chief Qu Dongyu's term expires in July.
UN agencies and virtually all international humanitarian response NGOs and research organizations are struggling for funding as donors, notably but not only the U.S., have sharply reduced foreign assistance, said Chris Barrett, an agricultural and development economist at Cornell University.
The funding shortfalls mean "less monitoring and surveillance for early warning of looming problems," and limit the world's ability to cushion the blows to poor families suddenly facing higher food prices," said Barrett. That ultimately leads to more severe hunger problems and sociopolitical unrest as populations grow frustrated with governments that cannot safeguard their food security, he warned.
More than a quarter of the world's population faced moderate or severe food insecurity in 2025, and over 266 million people face acute hunger this year, according to the World Health Organization and UN World Food Programme.
Food 'disasters' loom
The conflict around the Strait of Hormuz and the war in Ukraine are "contributing towards potential disasters in 2027 in many parts of the world," Hogan said, adding that El Niño would compound the risk.
The Middle East war and the subsequent crisis in the strategically vital Strait of Hormuz have stoked fears of a global agrifood catastrophe as flows of fertilizer and energy exports essentially ground to a halt. The FAO sounded the alarm that poor countries were most exposed, as delayed commodity supplies could lead to lower output, higher inflation and weaker global growth.
The prolonged war in Ukraine has also snarled global wheat trade through the Black Sea, compounding economic effects and undermining food security in vulnerable countries. Forecasts of a powerful El Niño weather event may further threaten global food security.
We're going into this on our way to being blind and with one hand tied behind our back, in terms of global capacity to foresee and respond to major food crises.Chris NewtonFood security analyst, International Crisis Group
Any reform plan for the agency must reckon with a tighter budget, Hogan said. "We have to be conscious of the fact that we have less money." His first 100 days would focus on moving staff out of headquarters and into offices in so-called "hunger hotspots" characterized by severe food shortages.
The candidate also stressed cost efficiency and collaborations with other UN agencies in implementing the organization's mandate of providing regular access to enough high-quality food and ending hunger and malnutrition.
He argued the agency had been too quiet in the Black Sea Grain Initiative — a now-suspended agreement between Russia, Ukraine, Turkey and the UN to get food and fertilizer exports from Ukraine flowing after Russia's attacks since 2022 largely halted vessel traffic through Ukraine's Black Sea ports, previously responsible for around 90% of Ukraine's agricultural exports.
"Perhaps the FAO was a bit behind the curve in not elevating this issue and becoming more centrally involved in solutions around food security within the United Nations family," he said. The UN played a key role in the Black Sea agreement but the FAO "was not at the table."
Climate shocks, geopolitical conflict and a global fuel crisis, on top of surging interest rates and donor cuts, leave the world poorly placed to respond, said Chris Newton, food security analyst at International Crisis Group.
"We're going into this on our way to being blind and with one hand tied behind our back, in terms of global capacity to foresee and respond to major food crises."
Some experts are less alarmed. Even with an "exceptionally strong" El Niño, "we are currently well short of the conditions for a global food crisis," said Ian Mitchell, a senior policy fellow at the Center for Global Development. Global grain stockpiles remain healthy by historical standards, and futures markets aren't signaling a supply crunch, he said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/hormuz-blacksea-ukraine-iran-food-security-united-nations-.html",
    publishedAt: "2026-09-24T04:02:26+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "u-s-china-trade-truce-extended-for-two-m-0e8c5fd0",
    title: "U.S.-China trade truce extended for two months, Bessent says, as Xi begins state visit",
    titleJa: "U.S.-China trade truce extended for two months, Bessent says, as Xi begins state visit",
    summaryJa: "The deal, which was set to expire in November, will now be extended to Jan. 10, Bessent said, noting the need for Beijing to fulfill more deliverables.",
    bodyOriginal: `The U.S. and China have extended a truce to keep tariffs lower for longer and rare earths flowing, U.S. Treasury Secretary Scott Bessent said Wednesday local time.
He was speaking on Fox News, as Chinese President Xi Jinping landed in Washington, D.C. for a state visit through Friday.
Xi and Trump agreed to a one-year trade truce at a meeting in South Korea last October. The deal, which was set to expire in November, will now be extended to Jan. 10, Bessent said. He added that Beijing needs to fulfill more deliverables.
Ahead of this week's summit, many had expected the truce would be extended by six months or longer.
Chinese state media did not immediately note Bessent's comments on the trade truce.
The two-month extension "suggests to me the U.S. is unsatisfied with China's offers and wants to keep the heat on, with a bonus being it is more likely that Xi goes to the G20 in Miami," said Scott Kennedy of the U.S.-based think tank Center for Strategic and International Studies.
Trump visited Beijing in May. The two leaders could also meet alongside an APEC meeting in Shenzhen in November, and the G20 summit in Miami in December.
However, Jens Eskelund, president of the European Chamber of Commerce in China, pointed out that simply extending the trade truce does not address challenges companies face, including the lack of a standardized approach to apply for rare earths export licenses.
Xi said in an official readout for his arrival that he is confident the visit will produce "fruitful results" for both sides. He said the two countries should be partners, not rivals, and work to build a stable relationship where competition and differences are managed. The readout did not mention tariffs, rare earths or artificial intelligence.
Footage streamed on China's state broadcaster showed U.S. President Donald Trump and First Lady Melania Trump meeting Xi and First Lady of China Peng Liyuan at the foot of the Chinese leader's jet. The video did not show the U.S. and Chinese leaders shaking hands — it focused on Xi and his wife shaking hands with two children presenting them each with bouquets.
After greeting Xi, Trump told reporters he would discuss the Iran war with the Chinese leader, among "many other subjects."
Bessent met with Chinese Vice Premier He Lifeng in New York ahead of Xi's arrival in the U.S. The two sides discussed setting up an alert system for AI incidents, according to Bessent.
While executives of major U.S. tech companies plan to join a summit dinner on Thursday, none of their Chinese counterparts are expected to attend.
Politburo Standing Committee Member Cai Qi and China's top diplomat Wang Yi accompanied Xi, according to state media.
—CNBC's Eunice Yoon and Ashlee Trujillo contributed to this report.`,
    bodyJa: `The U.S. and China have extended a truce to keep tariffs lower for longer and rare earths flowing, U.S. Treasury Secretary Scott Bessent said Wednesday local time.
He was speaking on Fox News, as Chinese President Xi Jinping landed in Washington, D.C. for a state visit through Friday.
Xi and Trump agreed to a one-year trade truce at a meeting in South Korea last October. The deal, which was set to expire in November, will now be extended to Jan. 10, Bessent said. He added that Beijing needs to fulfill more deliverables.
Ahead of this week's summit, many had expected the truce would be extended by six months or longer.
Chinese state media did not immediately note Bessent's comments on the trade truce.
The two-month extension "suggests to me the U.S. is unsatisfied with China's offers and wants to keep the heat on, with a bonus being it is more likely that Xi goes to the G20 in Miami," said Scott Kennedy of the U.S.-based think tank Center for Strategic and International Studies.
Trump visited Beijing in May. The two leaders could also meet alongside an APEC meeting in Shenzhen in November, and the G20 summit in Miami in December.
However, Jens Eskelund, president of the European Chamber of Commerce in China, pointed out that simply extending the trade truce does not address challenges companies face, including the lack of a standardized approach to apply for rare earths export licenses.
Xi said in an official readout for his arrival that he is confident the visit will produce "fruitful results" for both sides. He said the two countries should be partners, not rivals, and work to build a stable relationship where competition and differences are managed. The readout did not mention tariffs, rare earths or artificial intelligence.
Footage streamed on China's state broadcaster showed U.S. President Donald Trump and First Lady Melania Trump meeting Xi and First Lady of China Peng Liyuan at the foot of the Chinese leader's jet. The video did not show the U.S. and Chinese leaders shaking hands — it focused on Xi and his wife shaking hands with two children presenting them each with bouquets.
After greeting Xi, Trump told reporters he would discuss the Iran war with the Chinese leader, among "many other subjects."
Bessent met with Chinese Vice Premier He Lifeng in New York ahead of Xi's arrival in the U.S. The two sides discussed setting up an alert system for AI incidents, according to Bessent.
While executives of major U.S. tech companies plan to join a summit dinner on Thursday, none of their Chinese counterparts are expected to attend.
Politburo Standing Committee Member Cai Qi and China's top diplomat Wang Yi accompanied Xi, according to state media.
—CNBC's Eunice Yoon and Ashlee Trujillo contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/09/24/us-china-trade-truce-bessent-trump-xi.html",
    publishedAt: "2026-09-24T03:50:24+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
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
