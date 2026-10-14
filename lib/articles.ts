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
    id: "treasury-says-largest-u-s-banks-let-poli-ce3fe828",
    title: "Treasury says largest U.S. banks let politics influence who received banking services",
    titleJa: "Treasury says largest U.S. banks let politics influence who received banking services",
    summaryJa: "New Treasury Department findings may lend weight to President Donald Trump’s long-running grievance that major banks have discriminated against conservatives.",
    bodyOriginal: `The Treasury Department's Office of the Comptroller of the Currency found some of the largest banks serving the U.S. allowed political considerations, public pressure and social concerns to influence decisions about who received banking services, according to a sweeping report released Wednesday.
The OCC said it reviewed the nine largest national banks under its supervision, examining nearly 100,000 complaints and about 420,000 pages of documents. It found that all nine had used "reputation risk" policies that lacked "clear," "objective" standards and could disadvantage customers because of their political or religious views or lawful business activities.
"Banks should make decisions based on financial risk, not the political or social preferences of their employees or executives," Comptroller of the Currency Jonathan Gould said, according to a transcript of his in remarks Wednesday in Lexington, Kentucky.
The findings may lend new regulatory weight to a grievance President Donald Trump has pressed since returning to office. Trump has repeatedly accused and sued major banks for discriminating against conservatives and has said he was personally "debanked" after the Jan. 6, 2021, Capitol insurrection, claims banks have denied.
The report lands a day after the OCC and other Treasury regulators imposed more than $1.2 billion in penalties on Bank of America over separate anti-money-laundering failures. At the same time, the OCC said it is examining whether banks' efforts to comply with anti-money-laundering rules have themselves contributed to debanking.
The review covered JPMorgan Chase, Bank of America, Citibank, Wells Fargo, U.S. Bank, Capital One, PNC Bank, TD Bank and BMO Bank, which together held a majority of assets at OCC-supervised commercial banks when the probe began last year under a Trump executive order.
The OCC stopped short of announcing fines or sanctions Wednesday, but said it is considering additional rules aimed at preventing political or religious discrimination.
Among the cases it highlighted: JPMorgan subsidiary WePay closed accounts belonging to merchants selling Trump and conservative merchandise. An internal screening list included terms such as "MAGA," "Make America Great" and "America First," even though the OCC found neither WePay nor JPMorgan had formal written standards for deciding when flagged material amounted to prohibited hate or violence.
JPMorgan told CNBC its policies prohibit discrimination based on political or religious views and said WePay's process "did not meet our expectations." The bank said it fixed the issue and has since shut down the business.
"We are not forcing these banks to serve every customer," Gould said. "Instead, banks should evaluate every customer on objective, risk-based criteria."
The other banks did not immediately respond to request for comment.
The report also found examples cutting the other way politically.
Capital One declined relationships with an abortion-rights group after noting that about 95% of its political contributions went to Democrats, and with a public education group whose political arm endorsed only Democratic candidates. It also passed on a gun-rights group over concerns that banking it could look like an endorsement.
The practices extended beyond overtly political groups too, the report indicates.
The OCC found restrictions affecting firearms, fossil fuels, private prisons, tobacco and cryptocurrency, and said some banks' appetite for those businesses shifted with the political climate — risking a "whipsaw" effect between administrations.
All nine banks told the OCC they have since revised or consolidated policies aimed at ensuring fair access. But the regulator said none has fully acknowledged past debanking decisions or created a comprehensive program to remediate affected customers.`,
    bodyJa: `The Treasury Department's Office of the Comptroller of the Currency found some of the largest banks serving the U.S. allowed political considerations, public pressure and social concerns to influence decisions about who received banking services, according to a sweeping report released Wednesday.
The OCC said it reviewed the nine largest national banks under its supervision, examining nearly 100,000 complaints and about 420,000 pages of documents. It found that all nine had used "reputation risk" policies that lacked "clear," "objective" standards and could disadvantage customers because of their political or religious views or lawful business activities.
"Banks should make decisions based on financial risk, not the political or social preferences of their employees or executives," Comptroller of the Currency Jonathan Gould said, according to a transcript of his in remarks Wednesday in Lexington, Kentucky.
The findings may lend new regulatory weight to a grievance President Donald Trump has pressed since returning to office. Trump has repeatedly accused and sued major banks for discriminating against conservatives and has said he was personally "debanked" after the Jan. 6, 2021, Capitol insurrection, claims banks have denied.
The report lands a day after the OCC and other Treasury regulators imposed more than $1.2 billion in penalties on Bank of America over separate anti-money-laundering failures. At the same time, the OCC said it is examining whether banks' efforts to comply with anti-money-laundering rules have themselves contributed to debanking.
The review covered JPMorgan Chase, Bank of America, Citibank, Wells Fargo, U.S. Bank, Capital One, PNC Bank, TD Bank and BMO Bank, which together held a majority of assets at OCC-supervised commercial banks when the probe began last year under a Trump executive order.
The OCC stopped short of announcing fines or sanctions Wednesday, but said it is considering additional rules aimed at preventing political or religious discrimination.
Among the cases it highlighted: JPMorgan subsidiary WePay closed accounts belonging to merchants selling Trump and conservative merchandise. An internal screening list included terms such as "MAGA," "Make America Great" and "America First," even though the OCC found neither WePay nor JPMorgan had formal written standards for deciding when flagged material amounted to prohibited hate or violence.
JPMorgan told CNBC its policies prohibit discrimination based on political or religious views and said WePay's process "did not meet our expectations." The bank said it fixed the issue and has since shut down the business.
"We are not forcing these banks to serve every customer," Gould said. "Instead, banks should evaluate every customer on objective, risk-based criteria."
The other banks did not immediately respond to request for comment.
The report also found examples cutting the other way politically.
Capital One declined relationships with an abortion-rights group after noting that about 95% of its political contributions went to Democrats, and with a public education group whose political arm endorsed only Democratic candidates. It also passed on a gun-rights group over concerns that banking it could look like an endorsement.
The practices extended beyond overtly political groups too, the report indicates.
The OCC found restrictions affecting firearms, fossil fuels, private prisons, tobacco and cryptocurrency, and said some banks' appetite for those businesses shifted with the political climate — risking a "whipsaw" effect between administrations.
All nine banks told the OCC they have since revised or consolidated policies aimed at ensuring fair access. But the regulator said none has fully acknowledged past debanking decisions or created a comprehensive program to remediate affected customers.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/treasury-banks-debanking-trump-reputation-risk.html",
    publishedAt: "2026-10-14T16:49:44+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "netflix-to-lay-off-1-000-staff-in-steepe-cf8c3df9",
    title: "Netflix to lay off 1,000 staff in steepest cuts since 2022",
    titleJa: "Netflix to lay off 1,000 staff in steepest cuts since 2022",
    summaryJa: "The cuts equate to around 6% of the streaming giant's total workforce worldwide.",
    bodyOriginal: `Netflix to lay off 1,000 staff in steepest cuts since 2022
- Published
Netflix has said it will cut 1,000 jobs globally as the streaming giant faces competition from rivals.
The cuts - the steepest since 2022 - will mainly affect its human resources, legal, product and technology teams and equates to around 6% of its total workforce.
Last month, Netflix 's co-chief executive, Ted Sarandos, told the Bloomberg Screentime summit that the company was "not growing as fast as I want us to".
The streaming industry is going through a period of consolidation following Paramount's $110bn (£83.6bn) merger with Warner Bros, the owner of HBO, while free platforms such as YouTube and TikTok continue to attract viewers.
In an email to staff, Sarandos and co-chief executive Greg Peters said Netflix would "continue to invest aggressively in high-impact areas to improve our service and further drive growth and innovation".
Netflix had come close to its own deal with Warner Bros but was outbid in the end by Paramount.
Commenting on the "organisational changes", Sarandos and Peters said: "Our mission - to entertain the world - is ambitious, and delivering on it requires us to be disciplined about where we prioritise our people and resources."
Managers will tell employees whether their job has been cut "soon".
The email added that the firm was on track to meet its financial forecasts. The streaming service is due to report its latest results on 20 October.
Investors have been weighing up user engagement - the amount of time customers spend on Netflix - as it competes with platforms such as YouTube and TikTok.
The firm has continued to commission shows - its most popular at the moment is "Below", an underwater mystery series.
It has also been attempting to expand its business, including gaming and allowing adverts to play before and during shows and films.
However, "they haven't been able to find another line of major revenue," said Ross Benes, senior analyst at eMarketer.
He added that the company remains reliant on a subscription business that could be approaching a plateau.
"Eventually, because they're nearing a ceiling with that, they'll need another revenue stream to diversify, and that's where it's been more of a struggle," he said.
The last major redundancy round at Netflix was in 2022, when it cut about 450 jobs after losing subscribers for the first time in more than a decade.`,
    bodyJa: `Netflix to lay off 1,000 staff in steepest cuts since 2022
- Published
Netflix has said it will cut 1,000 jobs globally as the streaming giant faces competition from rivals.
The cuts - the steepest since 2022 - will mainly affect its human resources, legal, product and technology teams and equates to around 6% of its total workforce.
Last month, Netflix 's co-chief executive, Ted Sarandos, told the Bloomberg Screentime summit that the company was "not growing as fast as I want us to".
The streaming industry is going through a period of consolidation following Paramount's $110bn (£83.6bn) merger with Warner Bros, the owner of HBO, while free platforms such as YouTube and TikTok continue to attract viewers.
In an email to staff, Sarandos and co-chief executive Greg Peters said Netflix would "continue to invest aggressively in high-impact areas to improve our service and further drive growth and innovation".
Netflix had come close to its own deal with Warner Bros but was outbid in the end by Paramount.
Commenting on the "organisational changes", Sarandos and Peters said: "Our mission - to entertain the world - is ambitious, and delivering on it requires us to be disciplined about where we prioritise our people and resources."
Managers will tell employees whether their job has been cut "soon".
The email added that the firm was on track to meet its financial forecasts. The streaming service is due to report its latest results on 20 October.
Investors have been weighing up user engagement - the amount of time customers spend on Netflix - as it competes with platforms such as YouTube and TikTok.
The firm has continued to commission shows - its most popular at the moment is "Below", an underwater mystery series.
It has also been attempting to expand its business, including gaming and allowing adverts to play before and during shows and films.
However, "they haven't been able to find another line of major revenue," said Ross Benes, senior analyst at eMarketer.
He added that the company remains reliant on a subscription business that could be approaching a plateau.
"Eventually, because they're nearing a ceiling with that, they'll need another revenue stream to diversify, and that's where it's been more of a struggle," he said.
The last major redundancy round at Netflix was in 2022, when it cut about 450 jobs after losing subscribers for the first time in more than a decade.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6zxj0gzk4x4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-14T16:47:32+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/877e/live/417f8270-c7f0-11f1-a64c-550be9e3c66b.jpg",
    readTime: 6,
  },
  {
    id: "container-ship-sinks-in-strait-of-hormuz-9184fafa",
    title: "Container ship sinks in Strait of Hormuz as Iran steps up attacks",
    titleJa: "Container ship sinks in Strait of Hormuz as Iran steps up attacks",
    summaryJa: "Iran has escalated its strikes on commercial ships transiting Hormuz in recent weeks, as it tries to choke off a rebound in crude oil exports.",
    bodyOriginal: `A container ship sank in the Strait of Hormuz on Wednesday as Iran escalated its attacks on commercial vessels.
The GFS Pride, registered in Singapore, sank after it was struck by an unidentified projectile and caught fire. The ship's 21 crew members were safely evacuated and no injuries were reported, according to the Maritime and Port Authority of Singapore.
"Such attacks are unprovoked, unjustifiable and a breach of international law," the Singapore maritime authority said in a statement Wednesday.
Iran's Revolutionary Guard claimed early Wednesday that a container ship exploded and sank after hitting a naval mine, according to the state news agency Tasnim. But there is no independent evidence to confirm that a mine is what caused the Pride to sink, according to the maritime security firm Marisks.
Iran's claims are "consistent with an ongoing psychological operations campaign aimed at generating fear, increasing uncertainty and discouraging commercial shipping" in Hormuz, Marisks said in a security alert.
Iran has escalated its strikes on commercial ships transiting Hormuz in recent weeks, as it tries to choke off a rebound in crude oil exports through the strait.
More than 20 vessels, mostly oil tankers, have come under attack this month in Hormuz, the Persian Gulf and Gulf of Oman, according to incident reports from the United Kingdom Maritime Trade Operations Centre.
The attacks this month have left two sailors missing and 12 injured, according to the International Maritime Organization, a United Nations' agency.
Crude oil exports through Hormuz hit prewar levels in September as the U.S. military guided tankers through the strait, but shipments have since pulled back as attacks have increased.
Crude exports through Hormuz averaged 8.5 million barrels per day (bpd) in the week ended Oct. 12, nearly 40% below normal levels before the Iran war, according to data from Kpler.
Shipments from the entire region, including pipelines to the Gulf of Oman and Red Sea, stood at 14 million bpd, or nearly 20% below prewar levels, the data showed.
Daily flows are volatile, with only 3 million barrels of crude transiting Hormuz on Monday while 6 million barrels passed through the strait on Friday, according to Kpler.`,
    bodyJa: `A container ship sank in the Strait of Hormuz on Wednesday as Iran escalated its attacks on commercial vessels.
The GFS Pride, registered in Singapore, sank after it was struck by an unidentified projectile and caught fire. The ship's 21 crew members were safely evacuated and no injuries were reported, according to the Maritime and Port Authority of Singapore.
"Such attacks are unprovoked, unjustifiable and a breach of international law," the Singapore maritime authority said in a statement Wednesday.
Iran's Revolutionary Guard claimed early Wednesday that a container ship exploded and sank after hitting a naval mine, according to the state news agency Tasnim. But there is no independent evidence to confirm that a mine is what caused the Pride to sink, according to the maritime security firm Marisks.
Iran's claims are "consistent with an ongoing psychological operations campaign aimed at generating fear, increasing uncertainty and discouraging commercial shipping" in Hormuz, Marisks said in a security alert.
Iran has escalated its strikes on commercial ships transiting Hormuz in recent weeks, as it tries to choke off a rebound in crude oil exports through the strait.
More than 20 vessels, mostly oil tankers, have come under attack this month in Hormuz, the Persian Gulf and Gulf of Oman, according to incident reports from the United Kingdom Maritime Trade Operations Centre.
The attacks this month have left two sailors missing and 12 injured, according to the International Maritime Organization, a United Nations' agency.
Crude oil exports through Hormuz hit prewar levels in September as the U.S. military guided tankers through the strait, but shipments have since pulled back as attacks have increased.
Crude exports through Hormuz averaged 8.5 million barrels per day (bpd) in the week ended Oct. 12, nearly 40% below normal levels before the Iran war, according to data from Kpler.
Shipments from the entire region, including pipelines to the Gulf of Oman and Red Sea, stood at 14 million bpd, or nearly 20% below prewar levels, the data showed.
Daily flows are volatile, with only 3 million barrels of crude transiting Hormuz on Monday while 6 million barrels passed through the strait on Friday, according to Kpler.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/container-ship-sinks-strait-hormuz-as-iran-war-attacks.html",
    publishedAt: "2026-10-14T16:46:08+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "coreweave-shares-tumble-as-bond-yields-n-7ddeb868",
    title: "CoreWeave shares tumble as bond yields near 15% on concern about AI borrowing binge",
    titleJa: "CoreWeave shares tumble as bond yields near 15% on concern about AI borrowing binge",
    summaryJa: "CoreWeave's stock and bonds were both hit on Wednesday as investor fear grew that some technology companies are borrowing too heavily for the artificial intelligence build-out.Shares of the so-called neocloud nosedived 16%, while yields on its debt jumped higher. The yield to maturity on its 9.625% bond due in 2032 is sitting at 14.8%, while that of its 9.75% bond due in 2031 is around 14.9%. Bond yields move inversely to prices.",
    bodyOriginal: `CoreWeave's stock and bonds were both hit on Wednesday as investor fear grew that some technology companies are borrowing too heavily for the artificial intelligence build-out.
Shares of the so-called neocloud nosedived 16%, while yields on its debt jumped higher. The yield to maturity on its 9.625% bond due in 2032 is sitting at 14.8%, while that of its 9.75% bond due in 2031 is around 14.9%. Bond yields move inversely to prices.
While investors were once excited about getting in on the AI action, investor sentiment has started to shift, said Luis Alvarado, co-head of global fixed income strategy at Wells Fargo Investment Institute.
Now, investors are demanding more risk compensation, he said.
"The era of easy money, which we experienced in the first nine months of the year, is starting to disappear and dissipate," Alvarado noted. "Now the extra dollar or the marginal dollar is going to be more looked at with a microscope into the concessions that the issuer is giving you back."
Tech investor Chamath Palihapitiya, founder and CEO of investment firm Social Capital and CEO of AI company 8090, called out the soaring yields on X late Tuesday. That prompted Tesla and SpaceX CEO Elon Musk to respond, "yikes."
Palihapitiya shared a chart of the 2032 bond, noting that the yield "touched 15%" and then "closed at a new high" on Tuesday. He also included part of his deep dive into whether the AI build-out is creating a private credit bubble, in which he noted "how little extra lenders appear to charge for AI risk."
Tech sector hit
CoreWeave isn't the only tech company seeing fallout from concerns over AI debt loads. For instance, shares of Oracle tumbled nearly 7% on Wednesday. Yields on its bonds were also higher, with the yield to maturity on its 6.25% bond due in Nov. 2032 sitting at 7.24%.
The overall tech sector brought down the stock market on Wednesday with the Nasdaq Composite losing 1.4%. The debt concern seems to be hitting the shakier stocks outside of the "Magnificent Seven" the hardest.
Another neocloud stock, Nebius, dropped 9%.
Companies are in a race to build AI infrastructure and have turned to the credit market to finance their projects, leading to a jump in supply. Dell cratered by 10%.
Overall, hyperscalers are on track to spend $800 billion this year, according to JPMorgan. By 2027, it is expected to exceed $1 trillion annually, the bank said.`,
    bodyJa: `CoreWeave's stock and bonds were both hit on Wednesday as investor fear grew that some technology companies are borrowing too heavily for the artificial intelligence build-out.
Shares of the so-called neocloud nosedived 16%, while yields on its debt jumped higher. The yield to maturity on its 9.625% bond due in 2032 is sitting at 14.8%, while that of its 9.75% bond due in 2031 is around 14.9%. Bond yields move inversely to prices.
While investors were once excited about getting in on the AI action, investor sentiment has started to shift, said Luis Alvarado, co-head of global fixed income strategy at Wells Fargo Investment Institute.
Now, investors are demanding more risk compensation, he said.
"The era of easy money, which we experienced in the first nine months of the year, is starting to disappear and dissipate," Alvarado noted. "Now the extra dollar or the marginal dollar is going to be more looked at with a microscope into the concessions that the issuer is giving you back."
Tech investor Chamath Palihapitiya, founder and CEO of investment firm Social Capital and CEO of AI company 8090, called out the soaring yields on X late Tuesday. That prompted Tesla and SpaceX CEO Elon Musk to respond, "yikes."
Palihapitiya shared a chart of the 2032 bond, noting that the yield "touched 15%" and then "closed at a new high" on Tuesday. He also included part of his deep dive into whether the AI build-out is creating a private credit bubble, in which he noted "how little extra lenders appear to charge for AI risk."
Tech sector hit
CoreWeave isn't the only tech company seeing fallout from concerns over AI debt loads. For instance, shares of Oracle tumbled nearly 7% on Wednesday. Yields on its bonds were also higher, with the yield to maturity on its 6.25% bond due in Nov. 2032 sitting at 7.24%.
The overall tech sector brought down the stock market on Wednesday with the Nasdaq Composite losing 1.4%. The debt concern seems to be hitting the shakier stocks outside of the "Magnificent Seven" the hardest.
Another neocloud stock, Nebius, dropped 9%.
Companies are in a race to build AI infrastructure and have turned to the credit market to finance their projects, leading to a jump in supply. Dell cratered by 10%.
Overall, hyperscalers are on track to spend $800 billion this year, according to JPMorgan. By 2027, it is expected to exceed $1 trillion annually, the bank said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/coreweave-stock-bond-yields-ai-debt.html",
    publishedAt: "2026-10-14T16:24:51+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "toilet-paper-and-secret-recorders-what-w-8c5707cc",
    title: "Toilet paper and secret recorders: What we know about the arrest of the Saudi OpenAI engineer",
    titleJa: "Toilet paper and secret recorders: What we know about the arrest of the Saudi OpenAI engineer",
    summaryJa: "Abdulrahman Alfozan had worked for the AI giant for more than a year before he was arrested by the FBI.",
    bodyOriginal: `Toilet paper and secret recorders: What we know about the arrest of the Saudi OpenAI engineer
- Published
A Saudi national who worked for OpenAI appeared in court this week for allegedly planting a secret recording device behind a TV in one of the tech giant's meeting rooms.
Abdulrahman Alfozan, a 35-year-old engineer, was arrested by the FBI and charged with using or attempting to use a device "to intercept oral communications".
As yet, it is not clear what he was planning to do with the recordings.
But, here's we do know so far.
Help from a chatbot
The engineer asked AI to help him listen in to discussions about AI, according to an official complaint (the document filed in court).
Between 17 August and 16 September, Alfozan had reportedly asked a productivity AI assistant several questions about meeting rooms and their availability.
Some detailed in the complaint include "how about external partners, where would they usually meet with OpenAI at" and "can you list today's meeting in this room".
The complaint also claimed that in September, Alfozan used a chatbot associated with his spouse to ask how to build and install a recording device and how to access it remotely.
Alfozan had worked at the firm for around a year before he allegedly made his attempt to plant a recorder.
The room where the device was found was regularly used to hold meetings to discuss "highly confidential technical, commercial and strategic information" as well as OpenAI's "government engagements and commercial relationships", the complaint stated.
Alfozan had no authority to access or be involved with meetings in the room, the complaint states.
But CCTV footage recorded him near the conference room on eight separate occasions in September.
Hiding in plain toilet paper
On 30 September, OpenAI staff discovered a "surreptitious audio recording device" behind a television - which had been wrapped in toilet paper.
A camera was placed in the conference room and on 5 October, Alfozan was filmed entering the room and appeared to look behind the television where the device had been inserted.
The complaint also stated that same day he allegedly left an unattended bag in a different room.
When security personnel opened it, it was found to contain "another recording device" similar to the one discovered, as well as Alfozan's wallet and ID.
In a post on X, external, OpenAI wrote it had used its own AI models to "understand the device and where it had come from".
It also said: "At this time, we have no indications of this individual inappropriately accessing or exfiltrating model weights, source code, or customer data."
Who is Abdulrahman Alfozan?
Alfozan had been employed as an engineer by OpenAI since July 2025. The complaint said he was educated in the US and has been a legal permanent resident since 2020.
He was arrested by the FBI on 9 October and his contract with OpenAI has been terminated.
Alfozan's lawyer William Pernik told the BBC: "Like countless Americans, Mr Alfozan came to this country years ago as a young person with a dream.
"These allegations appear wholly out of character for him, and we will relentlessly investigate all evidence produced by the government in this case to understand what actually happened, who was responsible and any possible reasons why."
Pernik added: "In the meantime, we respectfully ask everyone to withhold judgment until full facts become known. Like every one of us, Mr Alfozan is presumed innocent, and what has been made public is an accusation, not a finding of guilt."
On Tuesday, Alfozan made his initial appearance in a federal court in California. A detention hearing is scheduled on 19 October to determine whether he should remain in custody while proceedings continue.
The FBI investigation is ongoing.
If convicted, Alfozan faces a maximum penalty of five years in prison and a $250,000 (£190,000) fine.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `Toilet paper and secret recorders: What we know about the arrest of the Saudi OpenAI engineer
- Published
A Saudi national who worked for OpenAI appeared in court this week for allegedly planting a secret recording device behind a TV in one of the tech giant's meeting rooms.
Abdulrahman Alfozan, a 35-year-old engineer, was arrested by the FBI and charged with using or attempting to use a device "to intercept oral communications".
As yet, it is not clear what he was planning to do with the recordings.
But, here's we do know so far.
Help from a chatbot
The engineer asked AI to help him listen in to discussions about AI, according to an official complaint (the document filed in court).
Between 17 August and 16 September, Alfozan had reportedly asked a productivity AI assistant several questions about meeting rooms and their availability.
Some detailed in the complaint include "how about external partners, where would they usually meet with OpenAI at" and "can you list today's meeting in this room".
The complaint also claimed that in September, Alfozan used a chatbot associated with his spouse to ask how to build and install a recording device and how to access it remotely.
Alfozan had worked at the firm for around a year before he allegedly made his attempt to plant a recorder.
The room where the device was found was regularly used to hold meetings to discuss "highly confidential technical, commercial and strategic information" as well as OpenAI's "government engagements and commercial relationships", the complaint stated.
Alfozan had no authority to access or be involved with meetings in the room, the complaint states.
But CCTV footage recorded him near the conference room on eight separate occasions in September.
Hiding in plain toilet paper
On 30 September, OpenAI staff discovered a "surreptitious audio recording device" behind a television - which had been wrapped in toilet paper.
A camera was placed in the conference room and on 5 October, Alfozan was filmed entering the room and appeared to look behind the television where the device had been inserted.
The complaint also stated that same day he allegedly left an unattended bag in a different room.
When security personnel opened it, it was found to contain "another recording device" similar to the one discovered, as well as Alfozan's wallet and ID.
In a post on X, external, OpenAI wrote it had used its own AI models to "understand the device and where it had come from".
It also said: "At this time, we have no indications of this individual inappropriately accessing or exfiltrating model weights, source code, or customer data."
Who is Abdulrahman Alfozan?
Alfozan had been employed as an engineer by OpenAI since July 2025. The complaint said he was educated in the US and has been a legal permanent resident since 2020.
He was arrested by the FBI on 9 October and his contract with OpenAI has been terminated.
Alfozan's lawyer William Pernik told the BBC: "Like countless Americans, Mr Alfozan came to this country years ago as a young person with a dream.
"These allegations appear wholly out of character for him, and we will relentlessly investigate all evidence produced by the government in this case to understand what actually happened, who was responsible and any possible reasons why."
Pernik added: "In the meantime, we respectfully ask everyone to withhold judgment until full facts become known. Like every one of us, Mr Alfozan is presumed innocent, and what has been made public is an accusation, not a finding of guilt."
On Tuesday, Alfozan made his initial appearance in a federal court in California. A detention hearing is scheduled on 19 October to determine whether he should remain in custody while proceedings continue.
The FBI investigation is ongoing.
If convicted, Alfozan faces a maximum penalty of five years in prison and a $250,000 (£190,000) fine.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm04054ykqqqo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-14T15:54:04+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9074/live/83100400-c7bc-11f1-9a39-31b474234113.jpg",
    readTime: 10,
  },
  {
    id: "us-inflation-rises-more-than-expected-he-6f43a6d2",
    title: "US inflation rises more than expected - here's what is happening with prices",
    titleJa: "US inflation rises more than expected - here's what is happening with prices",
    summaryJa: "The pace of price rises increased to 3.7% in the year to September, driving by higher motor fuel costs.",
    bodyOriginal: `US inflation rises more than expected - here's what is happening with prices
- Published
US inflation rose by more than expected in the year to September, according to official figures, in the final data release before the midterm elections next month.
The pace of price rises increased to 3.7%, up from 3.4% in the 12 months to August.
Inflation was above forecasts, driven by higher gasoline prices which have risen following disruption to Middle East energy supplies due to the US-Israel conflict with Iran.
The elections are being fought over cost of living pressures across the US.
What is inflation?
Inflation is the rate at which the price of products or services increase over time.
For example, if a bottle of milk costs $1 but rises to $1.10 a year later, then annual inflation for bottled milk is 10%.
Officials from the Bureau of Labor Statistics measure inflation through the consumer price index (CPI).
It tracks the price changes of hundreds of day-to-day items including fresh food, gasoline and medical services to work out the overall level of inflation in the US economy.
The bureau updates this so-called basket of goods over time as peoples' spending and lifestyle habits change.
What causes inflation?
There are several factors that can cause inflation to rise.
If demand for a product outstrips its supply, that can lead to producers raising prices - the craze for Labubu dolls in recent years and the high resale prices are an example.
Higher incomes can also lead to higher demand, for example, which in turn pushes up prices.
Supply can also affect inflation. If supply of a product is reduced, but demand remains constant, that can cause prices to rise. A good example of this is crude oil, which is used to make gasoline and diesel.
Before the US-Israel war with Iran began, it was trading at just over $70 a barrel but when the conflict constricted crude supplies, the price quickly rose and is currently over $100.
What is the current rate of inflation?
Inflation has risen to 3.7% in the year to September, which is a higher-than-expected increase fuelled by gasoline prices.
Car fuel prices jumped by 34.2% over 12 months.
In September alone, they jumped by 9.1%, accounting for more than half of the increase in inflation, according to the Bureau or Labor Statistics.
Overall, energy inflation was up by 20.4% over the year as prices for fuel oil, energy services and electricity climbed. Fuel oil, used in home heating, was up 74.2% over the year.
Experts said the US Federal Reserve - which sets the country's interest rate - will be closely watching to see if energy costs begin to affect other areas of the economy, such as food prices, and drive inflation higher.
At the moment, food inflation remains subdued. It was flat over the month of September, and was 2.5% across the year.
Core inflation, which strips out food and energy prices, was 2.6%.
Will the inflation hike change Social Security payments?
Shortly after the latest inflation figure was released, the Social Security Administration announced that Social Security benefits including old age, survivors and disability insurance would rise by the same amount - 3.6% - in 2027.
The administration said that the 3.6% rise will mean an average retirement benefit increase of $75 a month.
The cost of living adjustment will take effect in January for about 72m people, while increased payments for the 7.2m receiving the supplemental security income will start on 31 December.
How have tariffs affected inflation?
Since coming into office for the second time, President Donald Trump has introduced tariffs on most US trading partners around the world.
While most of the additional global levies were outlawed by the Supreme Court in February, the president immediately announced a new 10% global tariff to replace them.
Trump argued the tariffs would increase America's tax earnings, boost manufacturing and encourage people to buy US-made goods, but the higher import taxes have also had an impact on inflation, according to research from the Federal Reserve Bank of New York.
Higher tariffs - which are levies that businesses pay on the goods they import - directly raise prices for US companies unless the overseas firms they are buying from lower prices to absorb some of the cost.
In response to the new tariffs, the New York Fed found exporters reduced prices very little, meaning US-based businesses ended up absorbing nearly 90% of the cost of the added tax.
Indirectly, higher tariffs also affected the prices of locally made goods, as many US producers rely on parts or materials from overseas.
Overall, the Fed found that every percentage point increase in average tariffs led to nearly a 0.25% price increase for consumer goods after one year.
Has inflation been worse lately?
While inflation is currently above where the US Federal Reserve would like - it has a target of 2% - it has been much higher in previous years.
During the Covid pandemic, issues such as supply chain disruption started pushing inflation up.
Additionally, in early 2022 when Russia launched its full-scale invasion of Ukraine, oil prices surged over $100 a barrel.
Both of these factors helped to drive inflation to a peak of about 9%.
Can inflation ever go down?
It's important to note that if inflation is rising at a slower rate, that does not mean prices are going down - it simply means prices are rising at a slower pace.
A bit of inflation is considered good for an economy as the the Federal Reserve's target rate illustrates.
Many central banks consider inflation of about 2% or a little higher to be stable, and at a level that doesn't impact people's purchasing decisions.
Much below that, people can delay spending if they expect price rises to slow further, or to fall. That can lead to businesses reducing wages, or reducing the number of workers to cope with lower demand.
Related topics
- Published1 hour ago
- Published2 days ago
- Published4 days ago`,
    bodyJa: `US inflation rises more than expected - here's what is happening with prices
- Published
US inflation rose by more than expected in the year to September, according to official figures, in the final data release before the midterm elections next month.
The pace of price rises increased to 3.7%, up from 3.4% in the 12 months to August.
Inflation was above forecasts, driven by higher gasoline prices which have risen following disruption to Middle East energy supplies due to the US-Israel conflict with Iran.
The elections are being fought over cost of living pressures across the US.
What is inflation?
Inflation is the rate at which the price of products or services increase over time.
For example, if a bottle of milk costs $1 but rises to $1.10 a year later, then annual inflation for bottled milk is 10%.
Officials from the Bureau of Labor Statistics measure inflation through the consumer price index (CPI).
It tracks the price changes of hundreds of day-to-day items including fresh food, gasoline and medical services to work out the overall level of inflation in the US economy.
The bureau updates this so-called basket of goods over time as peoples' spending and lifestyle habits change.
What causes inflation?
There are several factors that can cause inflation to rise.
If demand for a product outstrips its supply, that can lead to producers raising prices - the craze for Labubu dolls in recent years and the high resale prices are an example.
Higher incomes can also lead to higher demand, for example, which in turn pushes up prices.
Supply can also affect inflation. If supply of a product is reduced, but demand remains constant, that can cause prices to rise. A good example of this is crude oil, which is used to make gasoline and diesel.
Before the US-Israel war with Iran began, it was trading at just over $70 a barrel but when the conflict constricted crude supplies, the price quickly rose and is currently over $100.
What is the current rate of inflation?
Inflation has risen to 3.7% in the year to September, which is a higher-than-expected increase fuelled by gasoline prices.
Car fuel prices jumped by 34.2% over 12 months.
In September alone, they jumped by 9.1%, accounting for more than half of the increase in inflation, according to the Bureau or Labor Statistics.
Overall, energy inflation was up by 20.4% over the year as prices for fuel oil, energy services and electricity climbed. Fuel oil, used in home heating, was up 74.2% over the year.
Experts said the US Federal Reserve - which sets the country's interest rate - will be closely watching to see if energy costs begin to affect other areas of the economy, such as food prices, and drive inflation higher.
At the moment, food inflation remains subdued. It was flat over the month of September, and was 2.5% across the year.
Core inflation, which strips out food and energy prices, was 2.6%.
Will the inflation hike change Social Security payments?
Shortly after the latest inflation figure was released, the Social Security Administration announced that Social Security benefits including old age, survivors and disability insurance would rise by the same amount - 3.6% - in 2027.
The administration said that the 3.6% rise will mean an average retirement benefit increase of $75 a month.
The cost of living adjustment will take effect in January for about 72m people, while increased payments for the 7.2m receiving the supplemental security income will start on 31 December.
How have tariffs affected inflation?
Since coming into office for the second time, President Donald Trump has introduced tariffs on most US trading partners around the world.
While most of the additional global levies were outlawed by the Supreme Court in February, the president immediately announced a new 10% global tariff to replace them.
Trump argued the tariffs would increase America's tax earnings, boost manufacturing and encourage people to buy US-made goods, but the higher import taxes have also had an impact on inflation, according to research from the Federal Reserve Bank of New York.
Higher tariffs - which are levies that businesses pay on the goods they import - directly raise prices for US companies unless the overseas firms they are buying from lower prices to absorb some of the cost.
In response to the new tariffs, the New York Fed found exporters reduced prices very little, meaning US-based businesses ended up absorbing nearly 90% of the cost of the added tax.
Indirectly, higher tariffs also affected the prices of locally made goods, as many US producers rely on parts or materials from overseas.
Overall, the Fed found that every percentage point increase in average tariffs led to nearly a 0.25% price increase for consumer goods after one year.
Has inflation been worse lately?
While inflation is currently above where the US Federal Reserve would like - it has a target of 2% - it has been much higher in previous years.
During the Covid pandemic, issues such as supply chain disruption started pushing inflation up.
Additionally, in early 2022 when Russia launched its full-scale invasion of Ukraine, oil prices surged over $100 a barrel.
Both of these factors helped to drive inflation to a peak of about 9%.
Can inflation ever go down?
It's important to note that if inflation is rising at a slower rate, that does not mean prices are going down - it simply means prices are rising at a slower pace.
A bit of inflation is considered good for an economy as the the Federal Reserve's target rate illustrates.
Many central banks consider inflation of about 2% or a little higher to be stable, and at a level that doesn't impact people's purchasing decisions.
Much below that, people can delay spending if they expect price rises to slow further, or to fall. That can lead to businesses reducing wages, or reducing the number of workers to cope with lower demand.
Related topics
- Published1 hour ago
- Published2 days ago
- Published4 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwy8lx3pg4k2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-14T15:26:14+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bd50/live/e1cf6860-c7cf-11f1-9e10-4dcbd31d4273.jpg",
    readTime: 10,
  },
  {
    id: "here-s-the-inflation-breakdown-for-septe-d17194a1",
    title: "Here's the inflation breakdown for September 2026 — in one chart",
    titleJa: "Here's the inflation breakdown for September 2026 — in one chart",
    summaryJa: "The consumer price index rose by 3.7% in September, on the back of higher gasoline and energy prices largely due to the Iran war.",
    bodyOriginal: `The inflation rate increased in September on the back of higher gasoline and energy prices amid the Iran war, further squeezing households' budgets and perhaps putting pressure on the Federal Reserve to raise interest rates, economists said.
The consumer price index rose by 3.7% in September from 12 months earlier, the Bureau of Labor Statistics reported Wednesday. That's up from a 3.4% annual pace in August.
Economists may be more concerned about the reading for "core" CPI, a measure that strips out food and energy prices, which can be volatile, and is often used to examine underlying inflation dynamics in the U.S. economy. That reading jumped to 2.6% in September from 2.4% in August.
"The overall report shows inflation is uncomfortably strong," said Mark Zandi, chief economist at Moody's.
"The war's fingerprints are all over the report," he said. "It's driving a lot of the inflationary pickup."
'Frustration' over cost of living
The inflation reading comes less than a month before the upcoming midterm elections, in which affordability is widely seen as a primary issue for voters.
In addition to rising prices for goods and services, Treasury bond yields have increased sharply in recent months, putting upward pressure on rates for mortgages, auto loans and other types of consumer debt.
The Fed — the U.S. central bank, which uses interest-rate policy as a lever to control the trajectory of inflation — may choose to increase its benchmark interest rate at upcoming policy meetings to rein in persistently high inflation, economists said. That benchmark rate has a direct impact on credit card rates and influences other borrowing costs, too.
The central bank aims for a long-term annual inflation target around 2%. Inflation has been above that target for more than five years.
Wednesday's CPI report "gives more support to the argument that the Fed is going to continue raising rates," Zandi said.
Inflation pressures will likely push the Fed to hike rates between now and spring 2027, according to a Wells Fargo Investment Institute analysis published Tuesday.
Barometers of consumer sentiment have plunged to multiyear lows amid rising prices. The University of Michigan's index of consumer sentiment sunk to its second-lowest reading on record in September.
"Frustration over cost-of-living continues to mount, as consumers across the political spectrum believe that the trajectory of the economy has weakened since the beginning of the year," University of Michigan Surveys of Consumers Director Joanne Hsu said of the data.
The Social Security Administration on Wednesday announced a 3.6% cost-of-living adjustment for benefits in 2027. The Social Security COLA calculation is based on a subset of the consumer price index, known as the Consumer Price Index for Urban Wage Earners and Clerical Workers, or CPI-W.
However, a recent AARP survey found 76% of respondents said a 3.5% COLA would not be enough.
Impact of the Iran war, oil prices on inflation
The Iran war — which began at the end of February, when the U.S. and Israel launched strikes on Iran — has pushed up oil prices.
In turn, prices for fuels like gasoline, diesel and jet fuel, which are refined from crude oil, have also increased, generating higher costs across the U.S. economy, economists said.
Inflation is an "oil story," said Michael Reid, head of U.S. economics at the Royal Bank of Canada. "That'll be the story for a few more months."
The war severely crimped oil flowing through the Strait of Hormuz, a key transit artery in the Middle East through which a large volume of the global oil supply passes. The conflict has damaged the region's refining infrastructure and restricted supplies of other materials like fertilizer, putting upward pressure on global food prices.
Russia's war in Ukraine has also contributed to higher diesel prices, largely because Kyiv has bombed Russian refineries, economists said.
"Crude oil is moving through the Strait of Hormuz but remains below its pre-war pace. Even after key waterways fully reopen, lost refining capacity and distribution problems may delay lower energy prices until mid-2027," according to the Wells Fargo Investment Institute analysis.
Gasoline prices rose by 9.1% in September alone, accounting for more than half of the monthly increase in the consumer price index, the Bureau of Labor Statistics reported Wednesday. Gas prices are up 34% over the last year, it said.
The average nationwide price at the pump was $4.33 per gallon on Wednesday, up 45% from $2.98 per gallon on Feb. 27, right before the Iran war began, according to AAA data.
While higher gasoline prices have pinched drivers, high diesel prices are pressuring consumers more broadly.
Diesel is a fuel used by trucks, trains and ships that transport goods to stores. It has many uses beyond transportation, including farming and manufacturing, as well as residential and industrial heating.
Average diesel prices were $6.30 per gallon on Wednesday, up about 68% from $3.76 per gallon before the Iran war, according to AAA data.
"Somebody has to pay for that," Reid said.
But higher fuel prices don't trickle through to consumers quickly — it's a process that may take a few months, he said.
As the winter holiday shopping season approaches, when retailers typically offer enticing discounts to draw consumers, Reid said he'll be looking to see whether businesses offer smaller discounts than usual, or none at all.
Airline fares are up 22% over the past year, according to CPI data, largely reflecting higher jet fuel prices, economists said.
But travel prices are also up because of strong consumer demand, economists said.
For example, hotel and motel prices are up more than 4% over the past year, too, according to CPI data.
"I think a lot of that goes to high-end demand [for travel]," Zandi said. "A lot of wealthy Americans are traveling more because of the runup in stock prices and their net worth. That's powering a lot of spending."
Other sources of inflation
The Iran war and energy prices aren't the only sources of inflationary pressure, economists said.
"It's tariffs on top of that, adding slightly and layering on energy prices," Reid said.
A combination of tariffs and transportation costs is starting to show up in the price of recreation commodities, according to an RBC Economics research note on Wednesday.
"Toys and other recreational goods — products that are largely imported — posted their largest-ever monthly changes," the note said of the September CPI report.
The build-out of data centers supporting artificial intelligence is also a contributor, economists said.
That's because it has increased demand for — and scarcity of — the computer chips used in AI data centers. Manufacturers use those chips in all types of consumer electronics, including in laptops, video game consoles and cars, economists said.
For example, in June, Apple announced higher prices for MacBooks and iPads, citing surging memory and storage costs. Microsoft said shortly afterward that it's increasing Xbox game console prices for a similar reason.
One bright spot in the inflation report, Zandi said: Grocery prices fell over the month by 0.1%, despite higher diesel prices.
Beef prices fell 1% during the month, according to CPI data, which Zandi said was at least partly attributable to a temporary reprieve on beef tariffs that President Donald Trump announced in August.`,
    bodyJa: `The inflation rate increased in September on the back of higher gasoline and energy prices amid the Iran war, further squeezing households' budgets and perhaps putting pressure on the Federal Reserve to raise interest rates, economists said.
The consumer price index rose by 3.7% in September from 12 months earlier, the Bureau of Labor Statistics reported Wednesday. That's up from a 3.4% annual pace in August.
Economists may be more concerned about the reading for "core" CPI, a measure that strips out food and energy prices, which can be volatile, and is often used to examine underlying inflation dynamics in the U.S. economy. That reading jumped to 2.6% in September from 2.4% in August.
"The overall report shows inflation is uncomfortably strong," said Mark Zandi, chief economist at Moody's.
"The war's fingerprints are all over the report," he said. "It's driving a lot of the inflationary pickup."
'Frustration' over cost of living
The inflation reading comes less than a month before the upcoming midterm elections, in which affordability is widely seen as a primary issue for voters.
In addition to rising prices for goods and services, Treasury bond yields have increased sharply in recent months, putting upward pressure on rates for mortgages, auto loans and other types of consumer debt.
The Fed — the U.S. central bank, which uses interest-rate policy as a lever to control the trajectory of inflation — may choose to increase its benchmark interest rate at upcoming policy meetings to rein in persistently high inflation, economists said. That benchmark rate has a direct impact on credit card rates and influences other borrowing costs, too.
The central bank aims for a long-term annual inflation target around 2%. Inflation has been above that target for more than five years.
Wednesday's CPI report "gives more support to the argument that the Fed is going to continue raising rates," Zandi said.
Inflation pressures will likely push the Fed to hike rates between now and spring 2027, according to a Wells Fargo Investment Institute analysis published Tuesday.
Barometers of consumer sentiment have plunged to multiyear lows amid rising prices. The University of Michigan's index of consumer sentiment sunk to its second-lowest reading on record in September.
"Frustration over cost-of-living continues to mount, as consumers across the political spectrum believe that the trajectory of the economy has weakened since the beginning of the year," University of Michigan Surveys of Consumers Director Joanne Hsu said of the data.
The Social Security Administration on Wednesday announced a 3.6% cost-of-living adjustment for benefits in 2027. The Social Security COLA calculation is based on a subset of the consumer price index, known as the Consumer Price Index for Urban Wage Earners and Clerical Workers, or CPI-W.
However, a recent AARP survey found 76% of respondents said a 3.5% COLA would not be enough.
Impact of the Iran war, oil prices on inflation
The Iran war — which began at the end of February, when the U.S. and Israel launched strikes on Iran — has pushed up oil prices.
In turn, prices for fuels like gasoline, diesel and jet fuel, which are refined from crude oil, have also increased, generating higher costs across the U.S. economy, economists said.
Inflation is an "oil story," said Michael Reid, head of U.S. economics at the Royal Bank of Canada. "That'll be the story for a few more months."
The war severely crimped oil flowing through the Strait of Hormuz, a key transit artery in the Middle East through which a large volume of the global oil supply passes. The conflict has damaged the region's refining infrastructure and restricted supplies of other materials like fertilizer, putting upward pressure on global food prices.
Russia's war in Ukraine has also contributed to higher diesel prices, largely because Kyiv has bombed Russian refineries, economists said.
"Crude oil is moving through the Strait of Hormuz but remains below its pre-war pace. Even after key waterways fully reopen, lost refining capacity and distribution problems may delay lower energy prices until mid-2027," according to the Wells Fargo Investment Institute analysis.
Gasoline prices rose by 9.1% in September alone, accounting for more than half of the monthly increase in the consumer price index, the Bureau of Labor Statistics reported Wednesday. Gas prices are up 34% over the last year, it said.
The average nationwide price at the pump was $4.33 per gallon on Wednesday, up 45% from $2.98 per gallon on Feb. 27, right before the Iran war began, according to AAA data.
While higher gasoline prices have pinched drivers, high diesel prices are pressuring consumers more broadly.
Diesel is a fuel used by trucks, trains and ships that transport goods to stores. It has many uses beyond transportation, including farming and manufacturing, as well as residential and industrial heating.
Average diesel prices were $6.30 per gallon on Wednesday, up about 68% from $3.76 per gallon before the Iran war, according to AAA data.
"Somebody has to pay for that," Reid said.
But higher fuel prices don't trickle through to consumers quickly — it's a process that may take a few months, he said.
As the winter holiday shopping season approaches, when retailers typically offer enticing discounts to draw consumers, Reid said he'll be looking to see whether businesses offer smaller discounts than usual, or none at all.
Airline fares are up 22% over the past year, according to CPI data, largely reflecting higher jet fuel prices, economists said.
But travel prices are also up because of strong consumer demand, economists said.
For example, hotel and motel prices are up more than 4% over the past year, too, according to CPI data.
"I think a lot of that goes to high-end demand [for travel]," Zandi said. "A lot of wealthy Americans are traveling more because of the runup in stock prices and their net worth. That's powering a lot of spending."
Other sources of inflation
The Iran war and energy prices aren't the only sources of inflationary pressure, economists said.
"It's tariffs on top of that, adding slightly and layering on energy prices," Reid said.
A combination of tariffs and transportation costs is starting to show up in the price of recreation commodities, according to an RBC Economics research note on Wednesday.
"Toys and other recreational goods — products that are largely imported — posted their largest-ever monthly changes," the note said of the September CPI report.
The build-out of data centers supporting artificial intelligence is also a contributor, economists said.
That's because it has increased demand for — and scarcity of — the computer chips used in AI data centers. Manufacturers use those chips in all types of consumer electronics, including in laptops, video game consoles and cars, economists said.
For example, in June, Apple announced higher prices for MacBooks and iPads, citing surging memory and storage costs. Microsoft said shortly afterward that it's increasing Xbox game console prices for a similar reason.
One bright spot in the inflation report, Zandi said: Grocery prices fell over the month by 0.1%, despite higher diesel prices.
Beef prices fell 1% during the month, according to CPI data, which Zandi said was at least partly attributable to a temporary reprieve on beef tariffs that President Donald Trump announced in August.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/cpi-inflation-breakdown-september-2026.html",
    publishedAt: "2026-10-14T14:56:25+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "driving-test-waits-fall-to-two-year-low-76d649ca",
    title: "Driving test waits fall to two-year low - but still average 20 weeks",
    titleJa: "Driving test waits fall to two-year low - but still average 20 weeks",
    summaryJa: "Learner drivers in September had to wait an average of 19.7 weeks, or around five months, for a practical test.",
    bodyOriginal: `Driving test waits fall to two-year low - but still average 20 weeks
- Published
Waiting times for driving tests have dropped below 20 weeks for the first time since November 2024, according to official figures.
But learner drivers in September still had to wait an average of 19.7 weeks, or around five months, for a practical test.
The Driver and Vehicle Standards Agency (DVSA) has been trying to cut waiting times and clear a backlog which began during the Covid pandemic in 2020.
Commenting on the agency's progress, one driving instructor told the BBC: "I don't think this is anything to boast about."
The DVSA initially had hoped to reduce the average waiting time to seven weeks by the end of last year.
Transport Secretary Heidi Alexander pushed the target back to summer 2026, but subsequently admitted even that would not be possible - with waits not expected to fall to seven weeks until next autumn.
The DVSA conducted 191,682 practical driving tests in September, with more than half of those passing.
Learner drivers have repeatedly told the BBC how a lack of access to driving tests has limited their freedom, education and job prospects.
Until earlier this year, many learner drivers chose to pay inflated prices to access driving tests being resold by third party providers who'd used automated programmes, or bots, to block book tests before learners could access them.
But a number of changes were made to the test booking system earlier this year by the DVSA to stop the system being exploited. Now, only the learner driver is able to book their driving test.
Sophie Stuchfield, a driving instructor in Watford, told the BBC: "Whilst the re-selling of tests does seem to have stopped, which is a massive positive, they've still failed to recruit enough examiners to cope with demand."
She didn't believe that the slight fall in numbers for waiting times "is anything to boast about", adding that in many areas the wait for a driving test when booking is 21 weeks.
"On many occasions, my drivers wake up at 5.45am on a Monday, only to not end up with a test as when they click on something, by the time they put their details in, they are told the test has already been taken."
Sophie added that the waiting time to get a test meant that many learner drivers "who haven't even started driving lessons will book a test knowing it's 5 months away", putting themselves and the instructor under a lot of pressure.
Justin Madders, the minister for roads, said the government "inherited record waiting times and a significant backlog".
"While driving test waiting times are still not where we want them to be, these figures show real progress is being made," he added.
A DVSA spokesperson said the agency was "committed to reducing waiting times" and that "examiner numbers are at their highest level since November 2017".
"But we know there's more to do and we won't stop until every learner can get a test slot when they need one, wherever they're learning to drive," the spokesperson added.
Get in touch
Are you a learner driver waiting for a practical test slot? Tell us your story.`,
    bodyJa: `Driving test waits fall to two-year low - but still average 20 weeks
- Published
Waiting times for driving tests have dropped below 20 weeks for the first time since November 2024, according to official figures.
But learner drivers in September still had to wait an average of 19.7 weeks, or around five months, for a practical test.
The Driver and Vehicle Standards Agency (DVSA) has been trying to cut waiting times and clear a backlog which began during the Covid pandemic in 2020.
Commenting on the agency's progress, one driving instructor told the BBC: "I don't think this is anything to boast about."
The DVSA initially had hoped to reduce the average waiting time to seven weeks by the end of last year.
Transport Secretary Heidi Alexander pushed the target back to summer 2026, but subsequently admitted even that would not be possible - with waits not expected to fall to seven weeks until next autumn.
The DVSA conducted 191,682 practical driving tests in September, with more than half of those passing.
Learner drivers have repeatedly told the BBC how a lack of access to driving tests has limited their freedom, education and job prospects.
Until earlier this year, many learner drivers chose to pay inflated prices to access driving tests being resold by third party providers who'd used automated programmes, or bots, to block book tests before learners could access them.
But a number of changes were made to the test booking system earlier this year by the DVSA to stop the system being exploited. Now, only the learner driver is able to book their driving test.
Sophie Stuchfield, a driving instructor in Watford, told the BBC: "Whilst the re-selling of tests does seem to have stopped, which is a massive positive, they've still failed to recruit enough examiners to cope with demand."
She didn't believe that the slight fall in numbers for waiting times "is anything to boast about", adding that in many areas the wait for a driving test when booking is 21 weeks.
"On many occasions, my drivers wake up at 5.45am on a Monday, only to not end up with a test as when they click on something, by the time they put their details in, they are told the test has already been taken."
Sophie added that the waiting time to get a test meant that many learner drivers "who haven't even started driving lessons will book a test knowing it's 5 months away", putting themselves and the instructor under a lot of pressure.
Justin Madders, the minister for roads, said the government "inherited record waiting times and a significant backlog".
"While driving test waiting times are still not where we want them to be, these figures show real progress is being made," he added.
A DVSA spokesperson said the agency was "committed to reducing waiting times" and that "examiner numbers are at their highest level since November 2017".
"But we know there's more to do and we won't stop until every learner can get a test slot when they need one, wherever they're learning to drive," the spokesperson added.
Get in touch
Are you a learner driver waiting for a practical test slot? Tell us your story.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c94g1kvz006ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-14T13:45:34+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/95a5/live/6ec3c040-c7d5-11f1-9671-5b70c6e774ea.jpg",
    readTime: 8,
  },
  {
    id: "morgan-stanley-tops-estimates-as-equitie-e5f02cdd",
    title: "Morgan Stanley tops estimates as equities trading revenue exceeds expectations by $909 million",
    titleJa: "Morgan Stanley tops estimates as equities trading revenue exceeds expectations by $909 million",
    summaryJa: "Morgan Stanley is expected to benefit from robust investment banking and equities trading revenue.",
    bodyOriginal: `Ted Pick, CEO of Morgan Stanley speaks on CNBC's Squawk Box outside the World Economic Forum in Davos, Switzerland on Jan. 23, 2025.
Gerry Miller | CNBC
Morgan Stanley posted third-quarter results that beat expectations on blockbuster results in its equities trading franchise.
Here's what the company reported:
- Earnings per share: $3.03 vs. $2.91 LSEG estimate
- Revenue: $20.34 billion vs. $19.95 billion estimate
Morgan Stanley is expected to benefit from robust investment banking and equities trading revenue in the quarter, as rivals Goldman Sachs and JPMorgan Chase showed in their reports this week.
Analysts will want to know what CEO Ted Pick has to say on the outlook for mergers and IPOs for the rest of the year amid the churn caused by rising interest rates.
This story is developing. Please check back for updates.`,
    bodyJa: `Ted Pick, CEO of Morgan Stanley speaks on CNBC's Squawk Box outside the World Economic Forum in Davos, Switzerland on Jan. 23, 2025.
Gerry Miller | CNBC
Morgan Stanley posted third-quarter results that beat expectations on blockbuster results in its equities trading franchise.
Here's what the company reported:
- Earnings per share: $3.03 vs. $2.91 LSEG estimate
- Revenue: $20.34 billion vs. $19.95 billion estimate
Morgan Stanley is expected to benefit from robust investment banking and equities trading revenue in the quarter, as rivals Goldman Sachs and JPMorgan Chase showed in their reports this week.
Analysts will want to know what CEO Ted Pick has to say on the outlook for mergers and IPOs for the rest of the year amid the churn caused by rising interest rates.
This story is developing. Please check back for updates.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/morgan-stanley-ms-q3-2026-earnings.html",
    publishedAt: "2026-10-14T11:38:34+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "bank-of-america-posts-third-quarter-prof-97b149ae",
    title: "Bank of America posts third-quarter profit drop due to $1.2 billion Treasury fine; shares decline",
    titleJa: "Bank of America posts third-quarter profit drop due to $1.2 billion Treasury fine; shares decline",
    summaryJa: "The U.S. Treasury Department announced a $1.2 billion penalty against Bank of America on Tuesday.",
    bodyOriginal: `Bank of America posted a sharp decline to third-quarter profit after being hit with a $1.2 billion penalty by the U.S. Treasury Department.
Shares of the bank fell more than 4% in premarket trading.
Here's what the company reported:
- Earnings per share: 91 cents, may not compare with $1.10 LSEG estimate
- Revenue: $30.12 billion vs. $30.69 billion estimate
The bank's profit fell 17% to $6.93 billion, or 91 cents a share. Excluding the penalty, which sapped income by 17 cents, EPS would've been $1.08 a share.
Revenue rose 3.2% to $30.12 billion in the quarter, below expectations by about $570 million, largely on misses from Wall Street trading operations.
Fixed income trading revenue fell 17% to $2.55 billion on weakness in mortgages, municipals, and credit activity. That is roughly $450 million below the StreetAccount estimate.
Equities trading revenue climbed 10% to $2.51 billion, but that was also below analysts' expectations, by nearly $300 million.
The Treasury episode, in which U.S. regulators said the company failed to report billions of dollars in suspicious transactions, will inevitably spark questions as to whether CEO Brian Moynihan has a handle on controls at the second-biggest U.S. bank by assets.
Moynihan took the helm in 2010 and spent the early years of his tenure making amends for mortgage-related abuses in the aftermath of the 2008 financial crisis. Now, questions arise as to whether there are any more risk-management issues waiting to be found.
The Treasury announcement adds 11th-hour intrigue to what was an otherwise fairly routine bank earnings week. On Tuesday, JPMorgan Chase, Goldman Sachs, Citigroup and Wells Fargo posted mixed results, with JPMorgan missing EPS and revenue estimates for the first time in years.
This story is developing. Please check back for updates.
Correction: Bank of America reported third-quarter revenue on an FTE basis of $30.12 billion compared with LSEG estimates of $30.69 billion. An earlier version misstated the comparison.`,
    bodyJa: `Bank of America posted a sharp decline to third-quarter profit after being hit with a $1.2 billion penalty by the U.S. Treasury Department.
Shares of the bank fell more than 4% in premarket trading.
Here's what the company reported:
- Earnings per share: 91 cents, may not compare with $1.10 LSEG estimate
- Revenue: $30.12 billion vs. $30.69 billion estimate
The bank's profit fell 17% to $6.93 billion, or 91 cents a share. Excluding the penalty, which sapped income by 17 cents, EPS would've been $1.08 a share.
Revenue rose 3.2% to $30.12 billion in the quarter, below expectations by about $570 million, largely on misses from Wall Street trading operations.
Fixed income trading revenue fell 17% to $2.55 billion on weakness in mortgages, municipals, and credit activity. That is roughly $450 million below the StreetAccount estimate.
Equities trading revenue climbed 10% to $2.51 billion, but that was also below analysts' expectations, by nearly $300 million.
The Treasury episode, in which U.S. regulators said the company failed to report billions of dollars in suspicious transactions, will inevitably spark questions as to whether CEO Brian Moynihan has a handle on controls at the second-biggest U.S. bank by assets.
Moynihan took the helm in 2010 and spent the early years of his tenure making amends for mortgage-related abuses in the aftermath of the 2008 financial crisis. Now, questions arise as to whether there are any more risk-management issues waiting to be found.
The Treasury announcement adds 11th-hour intrigue to what was an otherwise fairly routine bank earnings week. On Tuesday, JPMorgan Chase, Goldman Sachs, Citigroup and Wells Fargo posted mixed results, with JPMorgan missing EPS and revenue estimates for the first time in years.
This story is developing. Please check back for updates.
Correction: Bank of America reported third-quarter revenue on an FTE basis of $30.12 billion compared with LSEG estimates of $30.69 billion. An earlier version misstated the comparison.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/bank-of-america-bac-q3-2026-earnings.html",
    publishedAt: "2026-10-14T11:28:19+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "wayfair-among-firms-fined-millions-for-m-cf81f582",
    title: "Wayfair among firms fined millions for misleading sales tactics",
    titleJa: "Wayfair among firms fined millions for misleading sales tactics",
    summaryJa: "The Competition and Markets Authority has fined Wayfair, Appliances Direct, and Gold's Gym £6m in total.",
    bodyOriginal: `Wayfair among firms fined millions for misleading sales tactics
- Published
Wayfair is among three firms which have been fined £6m in total by the competition watchdog for illegally using misleading sales tactics – with some customers set to receive refunds.
The online furniture retailer was fined £4.8m for misleading customers with time-limited offers, while online electronics seller Appliances Direct was fined £1.2m for the same practice, the Competition Markets Authority (CMA) said.
Meanwhile, Gold's Gym has been fined £48,000 for not telling customers the total price of its memberships.
It and Appliances Direct have been ordered to refund customers a total of £440,000. Wayfair and Appliances Direct said the CMA's fines were disproportionate.
Gold's Gym has been contacted for comment.
Thousands of Appliances Direct customers will receive refunds of £25 each on average while 726 Gold's Gym customers will get refunds of up to £50, according to the CMA.
The watchdog said customers do not need to take any action and both companies will contact those affected customers about refunds.
Appliances Direct has been told to pay refunds by 11 March, while Gold's Gym has been given a deadline of 29 March.
The CMA said Wayfair, Appliances Direct, and Gold's Gym had "engaged constructively" with its investigation. They all admitted to breaking the law and agreed to settle the case early, it added.
The watchdog said their co-operation reduced the firms' fines by 40%.
The CMA's fines are the result of an investigation it launched last November into online pricing.
Eight firms under investigation over online pricing
- Published18 November 2025
AA and BSM ordered to refund learner drivers for hidden fees
- Published15 April
A Wayfair spokeswoman said the penalty was "excessive" but that "we take the CMA's findings seriously and we chose to settle so we can continue to focus on serving our customers".
Nick Glynne, chief executive of Buy it Direct, which owns Appliances Direct and several other online retailers, accepted that its practices were wrong, but said the firm should have simply been given "a rap on the knuckles" instead.
Glynne said the CMA's process for calculating the fine was a "black box" and that it only settled because appealing was too expensive, accusing the watchdog of pressure tactics.
"When one body is investigator, prosecutor, judge and jury, it needs an exceptional commitment to fairness, restraint and proportionality. That is not what we experienced," he added.
Hayley Fletcher, senior director for consumer protection at the CMA, said: "At a time when many households are carefully managing their budgets, people shouldn't lose out because of misleading sales tactics.
"Businesses must treat their customers fairly and make sure they comply with the law - or risk hefty fines."
The CMA's investigation found that the three companies had misled customers in different ways.
Wayfair had advertised products as if they would disappear the next day, through phrases like "Here Today, Gone Tomorrow" and countdown timers.
However, the CMA said many products remained available at the same price or lower after the stated deadline, meaning the time-limited offer was false.
Meanwhile, the regulator said Appliances Direct had automatically opted customers into services such as recycling old machines.
Gold's Gym was fined for failing to include joining fees in the total price of gym memberships or not making its total price clear to customers, the CMA said.`,
    bodyJa: `Wayfair among firms fined millions for misleading sales tactics
- Published
Wayfair is among three firms which have been fined £6m in total by the competition watchdog for illegally using misleading sales tactics – with some customers set to receive refunds.
The online furniture retailer was fined £4.8m for misleading customers with time-limited offers, while online electronics seller Appliances Direct was fined £1.2m for the same practice, the Competition Markets Authority (CMA) said.
Meanwhile, Gold's Gym has been fined £48,000 for not telling customers the total price of its memberships.
It and Appliances Direct have been ordered to refund customers a total of £440,000. Wayfair and Appliances Direct said the CMA's fines were disproportionate.
Gold's Gym has been contacted for comment.
Thousands of Appliances Direct customers will receive refunds of £25 each on average while 726 Gold's Gym customers will get refunds of up to £50, according to the CMA.
The watchdog said customers do not need to take any action and both companies will contact those affected customers about refunds.
Appliances Direct has been told to pay refunds by 11 March, while Gold's Gym has been given a deadline of 29 March.
The CMA said Wayfair, Appliances Direct, and Gold's Gym had "engaged constructively" with its investigation. They all admitted to breaking the law and agreed to settle the case early, it added.
The watchdog said their co-operation reduced the firms' fines by 40%.
The CMA's fines are the result of an investigation it launched last November into online pricing.
Eight firms under investigation over online pricing
- Published18 November 2025
AA and BSM ordered to refund learner drivers for hidden fees
- Published15 April
A Wayfair spokeswoman said the penalty was "excessive" but that "we take the CMA's findings seriously and we chose to settle so we can continue to focus on serving our customers".
Nick Glynne, chief executive of Buy it Direct, which owns Appliances Direct and several other online retailers, accepted that its practices were wrong, but said the firm should have simply been given "a rap on the knuckles" instead.
Glynne said the CMA's process for calculating the fine was a "black box" and that it only settled because appealing was too expensive, accusing the watchdog of pressure tactics.
"When one body is investigator, prosecutor, judge and jury, it needs an exceptional commitment to fairness, restraint and proportionality. That is not what we experienced," he added.
Hayley Fletcher, senior director for consumer protection at the CMA, said: "At a time when many households are carefully managing their budgets, people shouldn't lose out because of misleading sales tactics.
"Businesses must treat their customers fairly and make sure they comply with the law - or risk hefty fines."
The CMA's investigation found that the three companies had misled customers in different ways.
Wayfair had advertised products as if they would disappear the next day, through phrases like "Here Today, Gone Tomorrow" and countdown timers.
However, the CMA said many products remained available at the same price or lower after the stated deadline, meaning the time-limited offer was false.
Meanwhile, the regulator said Appliances Direct had automatically opted customers into services such as recycling old machines.
Gold's Gym was fined for failing to include joining fees in the total price of gym memberships or not making its total price clear to customers, the CMA said.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqx298e5rr3po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-14T11:05:16+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ae51/live/acad1cb0-c7aa-11f1-a624-a3d8608fc192.jpg",
    readTime: 9,
  },
  {
    id: "faisal-islam-what-surprise-praise-for-uk-d193a53b",
    title: "Faisal Islam: What surprise praise for UK economy tells us about the Budget",
    titleJa: "Faisal Islam: What surprise praise for UK economy tells us about the Budget",
    summaryJa: "On three occasions in the past 24 hours, top IMF officials have praised UK plans to reduce its annual levels of borrowing.",
    bodyOriginal: `Faisal Islam: What surprise praise for UK economy tells us about the Budget
- Published
"Get your fiscal health in order," is a key message at the the International Monetary Fund's (IMF) annual meeting here in Thailand.
The IMF is worried about the debts of the world's biggest economies. It is doing its job as a watchdog, looking for and warning about financial vulnerabilities.
In the meantime, the finance ministers of former crisis countries are boasting about how little their borrowing costs have gone up, compared to the world's biggest economies, such as the US.
On three occasions in the past 24 hours, top IMF officials have praised the UK's plans to reduce its annual levels of borrowing, bucking the trend of the rest of the G7 group of countries, which includes Canada, France, Germany, Italy, Japan and the US.
The IMF clearly seeing the UK in a different light to these major economies is very interesting.
"The UK is actually one country where action to reduce debt and deficit has been taken decisively and we see the UK in that sense enjoying a bit of a better growth prospect," managing director Kristalina Georgieva said earlier.
Her comments followed those of the IMF's chief economist Silvana Tenreyro who told me that UK borrowing reductions "stand out".
Three things we've learnt about the UK economy from the IMF
- Published23 hours ago
The IMF's twice-yearly assessment of global countries' economic prospects showed only the UK among the G7 having a serious plan for consolidation of its annual borrowing over the next few years, worth nearly 4% of the size of the economy. The US, Germany and Japan are increasing borrowing. Canada and Italy are keeping borrowing at the same level.
It appears the UK is now the IMF's model pupil - at the top of the G7 table for reducing deficits.
Leaning into austerity
This matters because for the past half decade the UK has been on the bond market naughty step, often having the highest borrowing rates among the G7 since the Liz Truss mini budget, as political and economic crises afflicted different governments.
While this is good news for the chancellor and the Treasury, it also points to the sort of Budget we will get in a fortnight's time. To keep its plans to reduce debt on track, John Healey is likely to have limited room for extra spending. He will want to marry this with limited tax rises. There could be a modest decrease in the margin for error around meeting debt rules - so-called headroom. If so that will be tied to providing a cushion against an expected rise in energy prices due to the ongoing Middle East conflict and the impact on the cost of living overall - the so called global inflation shock.
This is likely to mean disappointment for many public services expecting cash injections to account for rising inflation, as suggested this week by think tank the Institute for Fiscal Studies. It will mean tough public sector pay discussions.
It won't be "austerity" but the chancellor is likely to lean into the IMF framing of a government with austere plans, relative to other advanced countries. The initial prize is to avoid the direct gaze of the bond markets, whose full glare is on others, such as France now. The bigger prize could be lower relative borrowing costs for government and households.
Ultimately forecasts mean nothing without the underpinning of solid plans. Those plans will be here for everyone to judge soon enough.`,
    bodyJa: `Faisal Islam: What surprise praise for UK economy tells us about the Budget
- Published
"Get your fiscal health in order," is a key message at the the International Monetary Fund's (IMF) annual meeting here in Thailand.
The IMF is worried about the debts of the world's biggest economies. It is doing its job as a watchdog, looking for and warning about financial vulnerabilities.
In the meantime, the finance ministers of former crisis countries are boasting about how little their borrowing costs have gone up, compared to the world's biggest economies, such as the US.
On three occasions in the past 24 hours, top IMF officials have praised the UK's plans to reduce its annual levels of borrowing, bucking the trend of the rest of the G7 group of countries, which includes Canada, France, Germany, Italy, Japan and the US.
The IMF clearly seeing the UK in a different light to these major economies is very interesting.
"The UK is actually one country where action to reduce debt and deficit has been taken decisively and we see the UK in that sense enjoying a bit of a better growth prospect," managing director Kristalina Georgieva said earlier.
Her comments followed those of the IMF's chief economist Silvana Tenreyro who told me that UK borrowing reductions "stand out".
Three things we've learnt about the UK economy from the IMF
- Published23 hours ago
The IMF's twice-yearly assessment of global countries' economic prospects showed only the UK among the G7 having a serious plan for consolidation of its annual borrowing over the next few years, worth nearly 4% of the size of the economy. The US, Germany and Japan are increasing borrowing. Canada and Italy are keeping borrowing at the same level.
It appears the UK is now the IMF's model pupil - at the top of the G7 table for reducing deficits.
Leaning into austerity
This matters because for the past half decade the UK has been on the bond market naughty step, often having the highest borrowing rates among the G7 since the Liz Truss mini budget, as political and economic crises afflicted different governments.
While this is good news for the chancellor and the Treasury, it also points to the sort of Budget we will get in a fortnight's time. To keep its plans to reduce debt on track, John Healey is likely to have limited room for extra spending. He will want to marry this with limited tax rises. There could be a modest decrease in the margin for error around meeting debt rules - so-called headroom. If so that will be tied to providing a cushion against an expected rise in energy prices due to the ongoing Middle East conflict and the impact on the cost of living overall - the so called global inflation shock.
This is likely to mean disappointment for many public services expecting cash injections to account for rising inflation, as suggested this week by think tank the Institute for Fiscal Studies. It will mean tough public sector pay discussions.
It won't be "austerity" but the chancellor is likely to lean into the IMF framing of a government with austere plans, relative to other advanced countries. The initial prize is to avoid the direct gaze of the bond markets, whose full glare is on others, such as France now. The bigger prize could be lower relative borrowing costs for government and households.
Ultimately forecasts mean nothing without the underpinning of solid plans. Those plans will be here for everyone to judge soon enough.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx30eq0vyed4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-14T11:04:12+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/31bf/live/83599ee0-c7b6-11f1-b41f-d7a6cb474575.jpg",
    readTime: 9,
  },
  {
    id: "delta-s-business-class-revamp-new-seats-c8849c2b",
    title: "Delta's business-class revamp: New seats, menus, plates and more Porsches",
    titleJa: "Delta's business-class revamp: New seats, menus, plates and more Porsches",
    summaryJa: "Delta is upgrading its top-tier Delta One cabin with new suites for its largest A350 plane, starting next year.",
    bodyOriginal: `Delta Air Lines, the country's most profitable airline, has a problem serving its top-tier customers: not enough Porsches.
The airline uses a fleet of 40 of the luxury vehicles to drive its high-value flyers right to the plane.
"What's happened over the last several years is the demand has continued to rise, and we realized that the 40 cars that we have weren't enough to meet the demand. So we're moving that fleet to 70," Ranjan Goswami, Delta's chief marketing and product officer, told CNBC.
It's just one of many changes Delta is making for customers who fly in its most luxurious and expensive cabin, known as Delta One. The Porsche service is part of a VIP add-on option.
The carrier on Wednesday unveiled new crockery for the cabins, new Missoni mini pillows and fresh food and beverage menus, including Champagne served over sorbet and Blanton's bourbon. Many of the new items will appear on flights originating in Los Angeles later this month and on other routes in the coming months.
Delta is also planning to debut updated suites with a bigger screen and a more cushioned, lighter lie-flat seat when it starts flying its first Airbus A350-1000 planes early next year.
Delta didn't announce changes to the coach and premium economy cabins.
The airline's executives said the company is already thinking about adjustments on other aircraft, including smaller Airbus jets and on Boeing 787 Dreamliners that Delta has ordered and that will come in the next decade.
Delta has invested heavily in premium service for close to two decades, and United Airlines has followed suit for a little over 10 years. Other carriers are also leaning into demand for higher-priced options.
"You got to keep looking at the next cycle of what customers want, and you got to start planning for it now," Goswami said.
He said Delta focused on details and quality with its latest project for Delta One so that the items, from sliding suite doors to new Delta-logo-emblazoned dinnerware, are made to last. The company tested some of those items to check for chipping, but there are other challenges, like customers liking them too much.
"I think people are going to love a couple of items, although we hope they don't steal them," he said.`,
    bodyJa: `Delta Air Lines, the country's most profitable airline, has a problem serving its top-tier customers: not enough Porsches.
The airline uses a fleet of 40 of the luxury vehicles to drive its high-value flyers right to the plane.
"What's happened over the last several years is the demand has continued to rise, and we realized that the 40 cars that we have weren't enough to meet the demand. So we're moving that fleet to 70," Ranjan Goswami, Delta's chief marketing and product officer, told CNBC.
It's just one of many changes Delta is making for customers who fly in its most luxurious and expensive cabin, known as Delta One. The Porsche service is part of a VIP add-on option.
The carrier on Wednesday unveiled new crockery for the cabins, new Missoni mini pillows and fresh food and beverage menus, including Champagne served over sorbet and Blanton's bourbon. Many of the new items will appear on flights originating in Los Angeles later this month and on other routes in the coming months.
Delta is also planning to debut updated suites with a bigger screen and a more cushioned, lighter lie-flat seat when it starts flying its first Airbus A350-1000 planes early next year.
Delta didn't announce changes to the coach and premium economy cabins.
The airline's executives said the company is already thinking about adjustments on other aircraft, including smaller Airbus jets and on Boeing 787 Dreamliners that Delta has ordered and that will come in the next decade.
Delta has invested heavily in premium service for close to two decades, and United Airlines has followed suit for a little over 10 years. Other carriers are also leaning into demand for higher-priced options.
"You got to keep looking at the next cycle of what customers want, and you got to start planning for it now," Goswami said.
He said Delta focused on details and quality with its latest project for Delta One so that the items, from sliding suite doors to new Delta-logo-emblazoned dinnerware, are made to last. The company tested some of those items to check for chipping, but there are other challenges, like customers liking them too much.
"I think people are going to love a couple of items, although we hope they don't steal them," he said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/delta-one-revamp.html",
    publishedAt: "2026-10-14T11:00:01+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 6,
  },
  {
    id: "ukraine-warns-starlink-limits-are-disrup-aab58d3a",
    title: "Ukraine warns Starlink limits are disrupting military operations as Russia pounds its energy infrastructure",
    titleJa: "Ukraine warns Starlink limits are disrupting military operations as Russia pounds its energy infrastructure",
    summaryJa: "A ballistic missile has struck energy infrastructure supposedly covered by the \"energy ceasefire\" announced by Trump on Sunday, Zelenskyy said.",
    bodyOriginal: `Ukraine has accused Elon Musk's SpaceX of imposing new restrictions on its Starlink satellite internet service without warning, disrupting Ukrainian military operations.
It comes as Russia intensifies attacks on the country's energy infrastructure despite President Donald Trump's proposed "energy ceasefire."
Serhii Beskrestnov, an adviser to President Volodymyr Zelenskyy on defense technology, said Wednesday that SpaceX has implemented a speed limit on Starlink terminals in motion without notifying Ukrainian defense forces, disrupting some missions.
Meanwhile, Russia unleashed an attack on Ukrainian energy infrastructure overnight, leaving at least 600,000 people without power in the Kyiv and Kharkiv regions, raising further questions about the "energy ceasefire" announced by Trump on Sunday.
"There is significant damage to facilities and equipment – at 26 facilities of our power system and four facilities in the oil and gas sector," Zelenskyy said in a post on X early Wednesday.
He highlighted a targeted ballistic missile strike against the energy infrastructure that Zelenskyy said should have been covered by the "energy ceasefire" announced by President Donald Trump on Sunday.
"The strike was entirely deliberate and demonstrative in its scale – Russia has never before shown such ostentatious disrespect toward the United States," Zelenskyy said.
The attack comes after the Ukrainian president on Monday accused Russia of violating Trump's proposal that the adversaries stop attacking each other's energy facilities to help bring down the cost of oil and diesel.
Both Russian and Ukrainian authorities initially denied any knowledge of an energy ceasefire agreement. Ukraine has since welcomed such a deal, while Russian authorities said talks are ongoing, without confirming whether they have reached an agreement.
Russia's Foreign Minister Sergey Lavrov said Monday: "Regarding the status of this agreement, we can refer to Zelensky's reaction. When asked the same question, he said he had not heard of such an agreement, would welcome clarification and was ready for a ceasefire," according to the Russian Ministry of Foreign Affairs.
Starlink disruptions
Zelenskyy also said that for the second time this week, Ukraine received no advance warning about Russian ballistic missile launches. The latest unflagged strike on Kyiv damaged a residential building and killed one person and injured six, Zelenskyy said.
Ukraine's Beskrestnov said that the Starlink speed restriction currently applies to the StarShield military service package and is set at 100 mph, or about 160 km/h.
"It is clear that this action cannot be a coincidence and is related to the current political situation," Beskrestnov said on Telegram. "SpaceX is likely to have taken such measures at the request of the Trump administration," he added in a separate post.
SpaceX and the White House have been contacted for comment.`,
    bodyJa: `Ukraine has accused Elon Musk's SpaceX of imposing new restrictions on its Starlink satellite internet service without warning, disrupting Ukrainian military operations.
It comes as Russia intensifies attacks on the country's energy infrastructure despite President Donald Trump's proposed "energy ceasefire."
Serhii Beskrestnov, an adviser to President Volodymyr Zelenskyy on defense technology, said Wednesday that SpaceX has implemented a speed limit on Starlink terminals in motion without notifying Ukrainian defense forces, disrupting some missions.
Meanwhile, Russia unleashed an attack on Ukrainian energy infrastructure overnight, leaving at least 600,000 people without power in the Kyiv and Kharkiv regions, raising further questions about the "energy ceasefire" announced by Trump on Sunday.
"There is significant damage to facilities and equipment – at 26 facilities of our power system and four facilities in the oil and gas sector," Zelenskyy said in a post on X early Wednesday.
He highlighted a targeted ballistic missile strike against the energy infrastructure that Zelenskyy said should have been covered by the "energy ceasefire" announced by President Donald Trump on Sunday.
"The strike was entirely deliberate and demonstrative in its scale – Russia has never before shown such ostentatious disrespect toward the United States," Zelenskyy said.
The attack comes after the Ukrainian president on Monday accused Russia of violating Trump's proposal that the adversaries stop attacking each other's energy facilities to help bring down the cost of oil and diesel.
Both Russian and Ukrainian authorities initially denied any knowledge of an energy ceasefire agreement. Ukraine has since welcomed such a deal, while Russian authorities said talks are ongoing, without confirming whether they have reached an agreement.
Russia's Foreign Minister Sergey Lavrov said Monday: "Regarding the status of this agreement, we can refer to Zelensky's reaction. When asked the same question, he said he had not heard of such an agreement, would welcome clarification and was ready for a ceasefire," according to the Russian Ministry of Foreign Affairs.
Starlink disruptions
Zelenskyy also said that for the second time this week, Ukraine received no advance warning about Russian ballistic missile launches. The latest unflagged strike on Kyiv damaged a residential building and killed one person and injured six, Zelenskyy said.
Ukraine's Beskrestnov said that the Starlink speed restriction currently applies to the StarShield military service package and is set at 100 mph, or about 160 km/h.
"It is clear that this action cannot be a coincidence and is related to the current political situation," Beskrestnov said on Telegram. "SpaceX is likely to have taken such measures at the request of the Trump administration," he added in a separate post.
SpaceX and the White House have been contacted for comment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/russia-ukraine-energy-ceasefire-power-outages.html",
    publishedAt: "2026-10-14T09:18:18+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "asml-says-it-s-getting-order-interest-th-67792213",
    title: "ASML says it's getting order interest through 2030 as profit smashes expectations",
    titleJa: "ASML says it's getting order interest through 2030 as profit smashes expectations",
    summaryJa: "ASML said some customers are \"expressing an interest\" in placing orders with the company in 2029 and 2030, giving investors a view into longer-term demand.",
    bodyOriginal: `ASML said Wednesday that some of its customers are expressing interest in placing orders for its critical semiconductor tools for 2029 and 2030 as the company reported third-quarter profit that beat expectations.
The comments will likely comfort investors who have been looking to assess the longer-term demand outlook for ASML's lithography machines.
"Our customers continue to increase their short- and medium-term equipment demand forecasts with us, driven primarily by their views on the size and duration of AI-related investments," CEO Christophe Fouquet said in a press release.
"In light of their demand visibility, some customers are expressing an interest in placing orders with us for 2029 and even 2030."
ASML is the only company in the world that produces extreme ultraviolet lithography machines, a key tool used by the likes of TSMC to make the world's most advanced semiconductors.
Investors closely watch the Dutch company's earnings for signs of AI-related chip demand.
Fouquet said current supply planned for 2027 and 2028 will not fully meet the demand of its customers. The company is "investigating ways" to increase capacity for 2028 beyond the 30% increase it had previously forecast.
ASML has now updated its guidance three times this year, upping its full-year forecast for the second time in July, and on Wednesday it raised the lower end of its sales forecast for 2026.
The company now expects net sales of between 44 billion euros and 45 billion euros ($49.3 billion to $50.4 billion). The previous lower end of the forecast was for 43 billion euros.
ASML also said it expects fourth-quarter net sales of between 14.2 billion euros and 15.2 billion euros. The upper end of the range is ahead of LSEG consensus estimates of 14.2 billion euros.
ASML's stock was around 2% higher in early trade in Europe. Shares of the company have rallied 56% this year.
During the quarter, Samsung and TSMC, the world's two biggest chipmakers, committed to using ASML's High NA extreme ultraviolet (EUV) lithography machines. High NA EUV is ASML's next-generation tool, which analysts see as key to the Dutch firm's future growth.
For the third quarter, here's how ASML did versus LSEG consensus estimates:
- Net sales: 11.66 billion euros versus 11.72 billion euros expected
- Net profit: 4.96 billion euros versus 4.1 billion euros expected
ASML sticks to China forecast
The semiconductor equipment maker said it expects China sales to account for 20% of its total business, sticking to a prior forecast.
While ASML holds an effective monopoly on EUV machines, a July report from The Information suggested an unnamed Chinese company had begun manufacturing an immersion deep ultraviolet lithography (DUV) machine, citing people familiar with the matter.
ASML dominates the manufacturing of DUV machines, which are less advanced than EUV. China has been ramping up its domestic semiconductor supply chain, with some investors concerned it could challenge the European and U.S. dominance. However, analysts raised questions about China's ability to ramp up its own DUV technology.
ASML meanwhile has faced challenges in China over the last few years. The company is restricted from selling EUV and some DUV tools to China.`,
    bodyJa: `ASML said Wednesday that some of its customers are expressing interest in placing orders for its critical semiconductor tools for 2029 and 2030 as the company reported third-quarter profit that beat expectations.
The comments will likely comfort investors who have been looking to assess the longer-term demand outlook for ASML's lithography machines.
"Our customers continue to increase their short- and medium-term equipment demand forecasts with us, driven primarily by their views on the size and duration of AI-related investments," CEO Christophe Fouquet said in a press release.
"In light of their demand visibility, some customers are expressing an interest in placing orders with us for 2029 and even 2030."
ASML is the only company in the world that produces extreme ultraviolet lithography machines, a key tool used by the likes of TSMC to make the world's most advanced semiconductors.
Investors closely watch the Dutch company's earnings for signs of AI-related chip demand.
Fouquet said current supply planned for 2027 and 2028 will not fully meet the demand of its customers. The company is "investigating ways" to increase capacity for 2028 beyond the 30% increase it had previously forecast.
ASML has now updated its guidance three times this year, upping its full-year forecast for the second time in July, and on Wednesday it raised the lower end of its sales forecast for 2026.
The company now expects net sales of between 44 billion euros and 45 billion euros ($49.3 billion to $50.4 billion). The previous lower end of the forecast was for 43 billion euros.
ASML also said it expects fourth-quarter net sales of between 14.2 billion euros and 15.2 billion euros. The upper end of the range is ahead of LSEG consensus estimates of 14.2 billion euros.
ASML's stock was around 2% higher in early trade in Europe. Shares of the company have rallied 56% this year.
During the quarter, Samsung and TSMC, the world's two biggest chipmakers, committed to using ASML's High NA extreme ultraviolet (EUV) lithography machines. High NA EUV is ASML's next-generation tool, which analysts see as key to the Dutch firm's future growth.
For the third quarter, here's how ASML did versus LSEG consensus estimates:
- Net sales: 11.66 billion euros versus 11.72 billion euros expected
- Net profit: 4.96 billion euros versus 4.1 billion euros expected
ASML sticks to China forecast
The semiconductor equipment maker said it expects China sales to account for 20% of its total business, sticking to a prior forecast.
While ASML holds an effective monopoly on EUV machines, a July report from The Information suggested an unnamed Chinese company had begun manufacturing an immersion deep ultraviolet lithography (DUV) machine, citing people familiar with the matter.
ASML dominates the manufacturing of DUV machines, which are less advanced than EUV. China has been ramping up its domestic semiconductor supply chain, with some investors concerned it could challenge the European and U.S. dominance. However, analysts raised questions about China's ability to ramp up its own DUV technology.
ASML meanwhile has faced challenges in China over the last few years. The company is restricted from selling EUV and some DUV tools to China.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/asml-3q-earnings-ai-demand-orders-capacity.html",
    publishedAt: "2026-10-14T08:45:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "not-building-third-runway-would-be-huge-d11df616",
    title: "Not building third runway would be 'huge missed opportunity', warns Heathrow boss",
    titleJa: "Not building third runway would be 'huge missed opportunity', warns Heathrow boss",
    summaryJa: "Thomas Woldbye tells the Today progamme it would be \"good to know\" the government's position on the project, after comments made by the prime minister.",
    bodyOriginal: `Not building third runway would be 'huge missed opportunity', warns Heathrow boss
- Published
Not building a third runway at Heathrow Airport would be a "huge missed opportunity" for the UK, the boss of the country's busiest airport has warned.
Thomas Woldbye told BBC Radio 4's Today programme it would be "good to know" the government's position on the project, after Prime Minister Andy Burnham refused to say whether he backed expansion.
The airport's chief executive said if its owners could not invest in a third runway, the money "will be invested somewhere else in the world", suggesting a decision would be made in the new year.
The Department for Transport said it was reviewing responses to a consultation and was "considering the appropriate next steps".
A spokesperson added that the government supported airport expansion "across the country where this can contribute to growth and opportunity, while meeting the tests on the environment".
They said expanding Heathrow had the "potential to deliver around £40 billion in economic benefits across the country".
Building a third runway at Heathrow has been debated for decades. The project has proved controversial, facing steep opposition from local residents, politicians and climate campaigners.
Last year, then-chancellor Rachel Reeves announced the government-backed expansion, saying that "a third runway is badly needed", and that the government could not "duck the decision any longer".
Heathrow Airport is owned by a consortium of investors, the largest of which is French private equity firm Ardian. Others include the Qatar Investment Authority, Saudi Arabia's Public Investment Fund and the China Investment Corporation.
"If they cannot invest in Heathrow... then that money will be invested somewhere else in the world," Woldbye said.
"It's not about allocating this money elsewhere. It's private money. It's not public money. So hence, it will not go into the UK. I think that would be really a sad, huge missed opportunity for this country."
A third runway would mean demolishing hundreds of homes, diverting rivers, and rerouting the M25 motorway between junctions 14 and 15 through a tunnel under the new runway. It is estimated it would cost £33bn to build.
Heathrow serves more than 80 million travellers a year with its four passenger terminals and two runways. The number of flights, currently capped at 480,000 a year, could go up to 720,000 - or nearly 2,000 a day on average, if a third runway is built.
This additional traffic would potentially lead to a huge surge in revenue for the airport's owners, and Heathrow has argued the expansion would provide a "huge economic boost" and create jobs.
The new runway was scheduled to open by 2035, subject to plans being submitted and approved, but Heathrow has since suggested it would be delayed by four years to 2039 due to planning and regulatory issues.
Whether the new-look government still backs a third runway is not yet clear. Burnham, who as Mayor of Greater Manchester opposed the scheme, said he believed the matter was "for London and Londoners".
"I think we ought to hear the voice of people there first. It's not right for me to just jump straight in on the back of the consultation," he said, speaking to the BBC last month.
Woldbye said he hoped the prime minister would "will come along" with the project, pointing out it was backed by the unions.
'Heathrow not just for Londoners'
He added that a third runway was "not just for Londoners". "Benefits will be felt all over the country because our supply chain reaches all the way from the north all the way to the south of the UK."
Downing Street declined to comment on Woldbye's remarks.
Questioned about the noise impact on nearby communities of more planes taking off and landing, Woldbye claimed Heathrow had seen a "stark" reduction in noise over the past 40 years and said the "trend will continue".
"My biggest concern is actually the years of uncertainty. And I think it's time that we give them certainty on what we want with this project so that we can move on and they can move on in their lives," he said.
Andy Burnham refuses to back third runway at Heathrow
- Published27 September
Woldbye told the Today programme he had not yet met the current Chancellor John Healey, but if he did, he would outline that the airport "contributes dramatically to the economy" but that "we are now full".
"That means we will stop contributing or stop growing that contribution. If we want to avoid that, we need to now take this decision, move forward and continue the work of the previous government to move at speed and deliver this," he said.
The Department for Transport said it was still finalising its Airports National Policy Statement, which provides the basis for deciding whether to grant a new runway at Heathrow. It was last updated in 2018.
Woldbye said Heathrow was working on a planning application which has planned to submit in the next couple of years, but said any decision would be guided by government's the national policy statement.
Get in touch
Do you have comments or questions about this story? Get in touch.`,
    bodyJa: `Not building third runway would be 'huge missed opportunity', warns Heathrow boss
- Published
Not building a third runway at Heathrow Airport would be a "huge missed opportunity" for the UK, the boss of the country's busiest airport has warned.
Thomas Woldbye told BBC Radio 4's Today programme it would be "good to know" the government's position on the project, after Prime Minister Andy Burnham refused to say whether he backed expansion.
The airport's chief executive said if its owners could not invest in a third runway, the money "will be invested somewhere else in the world", suggesting a decision would be made in the new year.
The Department for Transport said it was reviewing responses to a consultation and was "considering the appropriate next steps".
A spokesperson added that the government supported airport expansion "across the country where this can contribute to growth and opportunity, while meeting the tests on the environment".
They said expanding Heathrow had the "potential to deliver around £40 billion in economic benefits across the country".
Building a third runway at Heathrow has been debated for decades. The project has proved controversial, facing steep opposition from local residents, politicians and climate campaigners.
Last year, then-chancellor Rachel Reeves announced the government-backed expansion, saying that "a third runway is badly needed", and that the government could not "duck the decision any longer".
Heathrow Airport is owned by a consortium of investors, the largest of which is French private equity firm Ardian. Others include the Qatar Investment Authority, Saudi Arabia's Public Investment Fund and the China Investment Corporation.
"If they cannot invest in Heathrow... then that money will be invested somewhere else in the world," Woldbye said.
"It's not about allocating this money elsewhere. It's private money. It's not public money. So hence, it will not go into the UK. I think that would be really a sad, huge missed opportunity for this country."
A third runway would mean demolishing hundreds of homes, diverting rivers, and rerouting the M25 motorway between junctions 14 and 15 through a tunnel under the new runway. It is estimated it would cost £33bn to build.
Heathrow serves more than 80 million travellers a year with its four passenger terminals and two runways. The number of flights, currently capped at 480,000 a year, could go up to 720,000 - or nearly 2,000 a day on average, if a third runway is built.
This additional traffic would potentially lead to a huge surge in revenue for the airport's owners, and Heathrow has argued the expansion would provide a "huge economic boost" and create jobs.
The new runway was scheduled to open by 2035, subject to plans being submitted and approved, but Heathrow has since suggested it would be delayed by four years to 2039 due to planning and regulatory issues.
Whether the new-look government still backs a third runway is not yet clear. Burnham, who as Mayor of Greater Manchester opposed the scheme, said he believed the matter was "for London and Londoners".
"I think we ought to hear the voice of people there first. It's not right for me to just jump straight in on the back of the consultation," he said, speaking to the BBC last month.
Woldbye said he hoped the prime minister would "will come along" with the project, pointing out it was backed by the unions.
'Heathrow not just for Londoners'
He added that a third runway was "not just for Londoners". "Benefits will be felt all over the country because our supply chain reaches all the way from the north all the way to the south of the UK."
Downing Street declined to comment on Woldbye's remarks.
Questioned about the noise impact on nearby communities of more planes taking off and landing, Woldbye claimed Heathrow had seen a "stark" reduction in noise over the past 40 years and said the "trend will continue".
"My biggest concern is actually the years of uncertainty. And I think it's time that we give them certainty on what we want with this project so that we can move on and they can move on in their lives," he said.
Andy Burnham refuses to back third runway at Heathrow
- Published27 September
Woldbye told the Today programme he had not yet met the current Chancellor John Healey, but if he did, he would outline that the airport "contributes dramatically to the economy" but that "we are now full".
"That means we will stop contributing or stop growing that contribution. If we want to avoid that, we need to now take this decision, move forward and continue the work of the previous government to move at speed and deliver this," he said.
The Department for Transport said it was still finalising its Airports National Policy Statement, which provides the basis for deciding whether to grant a new runway at Heathrow. It was last updated in 2018.
Woldbye said Heathrow was working on a planning application which has planned to submit in the next couple of years, but said any decision would be guided by government's the national policy statement.
Get in touch
Do you have comments or questions about this story? Get in touch.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckdd8egder5ro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-14T04:59:06+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/645d/live/6faaea30-c74c-11f1-a64c-550be9e3c66b.jpg",
    readTime: 10,
  },
  {
    id: "judge-indefinitely-blocks-trump-white-ho-8afde1f9",
    title: "Judge indefinitely blocks Trump White House ban of three media outlets",
    titleJa: "Judge indefinitely blocks Trump White House ban of three media outlets",
    summaryJa: "President Donald Trump had sought to ban media outlets MS NOW, CNN and Politico from reporting from the White House.",
    bodyOriginal: `A federal judge late Tuesday night indefinitely blocked the White House from enforcing a ban on three media outlets that President Donald Trump announced in mid-September.
The preliminary injunction by Judge Timothy Kelly extends his existing block on Trump's ban of MS NOW, CNN and Politico from the White House complex.
"President Trump's own comments suggest that he intended the revocation of Plaintiffs' hard passes to alter their reporting on him," wrote Kelly, who was nominated by Trump for his seat in U.S. District Court in Washington.
Kelly in his written opinion said the three outlets were likely to succeed on the claim in their pending lawsuit challenging the ban, which argues they were denied due process by Trump summarily barring them without giving them a chance to argue against that action.
The judge said the outlets were also likely to succeed on two First Amendment claims in their civil suit, which allege retaliation and viewpoint discrimination.
Kelly brushed aside claims by the Department of Justice that Trump decided to revoke the outlets' access to the White House on national security grounds.
"There is no evidence in the record that President Trump made the decision to revoke Plaintiffs' hard passes on national security grounds from the get-go, nor at any time has he directly stated that national security was the reason for his decision," Kelly wrote.
The judge said the DOJ's "national security" argument appears to be "merely a post-hac justfication for the decision" after the outlets sued.
"Still, no one should interpret the Court's decision to suggest that President Trump's concerns about accuracy and fairness in the media's reporting are unfounded, or that the government is powerless when its true aim is to protect national security when classified information is unlawfully disclosed," Kelly wrote.
"That said, for the reasons explained below, the Court will extend the relief it already ordered, which will continue to preserve the status quo while this case proceeds," Kelly said, referring to his prior order that restored access by the outlets to the White House.
The judge said that without the preliminary injunction, the outlets were "likely to suffer irreparable harm."
His ruling came on the heels of a court hearing last Thursday where the DOJ defended the ban.
Trump last month said he would appeal any decision by Kelly blocking his ban. CNBC has requested comment from the White House and DOJ.
Theodore Boutrous, an attorney for the outlets, said in a statement, "We are grateful that the Court ruled in favor of our clients."
"When the President issued his 'ban on the free press,' he blatantly and explicitly violated due process and the First Amendment," Boutrous said. "Since then, the President has repeatedly, candidly, and consistently admitted in public that he banned our clients from the White House to punish reporting he doesn't like and to try to force journalists to cover him in ways he prefers."
"The harm this ban did to our clients, the First Amendment, and the public as a whole is profound," the attorney said. "The Court was right to enjoin the White House from enforcing this "unconstitutional ban on the free press" for the foreseeable future."
Trump on Sept. 18 said that he was banning the three outlets because of how they have covered him.
In a Truth Social post that day, Trump wrote that the outlets "shouldn't be able to constantly write or report FICTION and LIES when they're covering the President of the United States, the Trump Administration, or the United States of America."
Trump later said that same day that he had become "sick" of "cumulative stories" by the outlets.
The ban took effect on the following day, Sept. 19, when journalists from the outlets were denied access to the White House grounds and had their permanent passes confiscated by Secret Service officers.
The outlets sued Trump on Sept. 21 in a civil complaint that said, "This ban could not be a more direct assault on the First Amendment nor a more blatant violation of our most fundamental constitutional principles."
Kelly, two days later, issued a restraining order that temporarily reversed the ban for at least 14 days. Journalists from the three outlets on Sept. 24 were allowed to return to the White House, and since then Kelly extended the restraining order to allow him time to consider whether to issue Tuesday's preliminary injunction, which has no set expiration date.`,
    bodyJa: `A federal judge late Tuesday night indefinitely blocked the White House from enforcing a ban on three media outlets that President Donald Trump announced in mid-September.
The preliminary injunction by Judge Timothy Kelly extends his existing block on Trump's ban of MS NOW, CNN and Politico from the White House complex.
"President Trump's own comments suggest that he intended the revocation of Plaintiffs' hard passes to alter their reporting on him," wrote Kelly, who was nominated by Trump for his seat in U.S. District Court in Washington.
Kelly in his written opinion said the three outlets were likely to succeed on the claim in their pending lawsuit challenging the ban, which argues they were denied due process by Trump summarily barring them without giving them a chance to argue against that action.
The judge said the outlets were also likely to succeed on two First Amendment claims in their civil suit, which allege retaliation and viewpoint discrimination.
Kelly brushed aside claims by the Department of Justice that Trump decided to revoke the outlets' access to the White House on national security grounds.
"There is no evidence in the record that President Trump made the decision to revoke Plaintiffs' hard passes on national security grounds from the get-go, nor at any time has he directly stated that national security was the reason for his decision," Kelly wrote.
The judge said the DOJ's "national security" argument appears to be "merely a post-hac justfication for the decision" after the outlets sued.
"Still, no one should interpret the Court's decision to suggest that President Trump's concerns about accuracy and fairness in the media's reporting are unfounded, or that the government is powerless when its true aim is to protect national security when classified information is unlawfully disclosed," Kelly wrote.
"That said, for the reasons explained below, the Court will extend the relief it already ordered, which will continue to preserve the status quo while this case proceeds," Kelly said, referring to his prior order that restored access by the outlets to the White House.
The judge said that without the preliminary injunction, the outlets were "likely to suffer irreparable harm."
His ruling came on the heels of a court hearing last Thursday where the DOJ defended the ban.
Trump last month said he would appeal any decision by Kelly blocking his ban. CNBC has requested comment from the White House and DOJ.
Theodore Boutrous, an attorney for the outlets, said in a statement, "We are grateful that the Court ruled in favor of our clients."
"When the President issued his 'ban on the free press,' he blatantly and explicitly violated due process and the First Amendment," Boutrous said. "Since then, the President has repeatedly, candidly, and consistently admitted in public that he banned our clients from the White House to punish reporting he doesn't like and to try to force journalists to cover him in ways he prefers."
"The harm this ban did to our clients, the First Amendment, and the public as a whole is profound," the attorney said. "The Court was right to enjoin the White House from enforcing this "unconstitutional ban on the free press" for the foreseeable future."
Trump on Sept. 18 said that he was banning the three outlets because of how they have covered him.
In a Truth Social post that day, Trump wrote that the outlets "shouldn't be able to constantly write or report FICTION and LIES when they're covering the President of the United States, the Trump Administration, or the United States of America."
Trump later said that same day that he had become "sick" of "cumulative stories" by the outlets.
The ban took effect on the following day, Sept. 19, when journalists from the outlets were denied access to the White House grounds and had their permanent passes confiscated by Secret Service officers.
The outlets sued Trump on Sept. 21 in a civil complaint that said, "This ban could not be a more direct assault on the First Amendment nor a more blatant violation of our most fundamental constitutional principles."
Kelly, two days later, issued a restraining order that temporarily reversed the ban for at least 14 days. Journalists from the three outlets on Sept. 24 were allowed to return to the White House, and since then Kelly extended the restraining order to allow him time to consider whether to issue Tuesday's preliminary injunction, which has no set expiration date.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/trump-white-house-msnow-cnn-politico-media-ban.html",
    publishedAt: "2026-10-14T04:30:18+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "godzilla-el-ni-o-is-wreaking-havoc-with-7dde37aa",
    title: "'Godzilla El Niño' is wreaking havoc with Philippine central bank's inflation forecasts",
    titleJa: "'Godzilla El Niño' is wreaking havoc with Philippine central bank's inflation forecasts",
    summaryJa: "The Philippine central bank is running policy scenarios for a severe El Niño on top of the oil shock, with inflation at a three-year high.",
    bodyOriginal: `BANGKOK — The Philippine central bank is planning for a "Godzilla" El Niño on top of a prolonged oil shock, as the Southeast Asian nation tries to rein in inflation from three-year highs.
Governor Eli Remolona said Bangko Sentral ng Pilipinas now sets policy using scenarios that factor in oil prices and the severity of the weather event. "We have the regular, ordinary El Niño, which is bad, and then we have the Godzilla El Niño, which is really, really bad," he said Wednesday on a panel at the IMF and World Bank annual meetings in Bangkok.
The worst of El Niño's impact on prices is still to come, with the effects expected from November through February, he said, adding that maintaining price stability remains the central bank's priority.
"We're holding our breath," he said, "but we have to be prepared for the worst."
The looming weather risk is adding fresh pressure on one of Southeast Asia's most vulnerable economies. Philippine inflation accelerated to 7.2% in September from 6.1% in August, with rice prices up 18%, according to the Philippine Statistics Authority.
The world's biggest rice importer is also exposed to food supply risk. Agriculture Secretary Francisco Tiu Laurel has warned that a fresh drought could squeeze domestic supply. Larger Philippine purchases could add demand to a global market already jolted by El Niño and export curbs. The UN Food and Agriculture Organization has raised its rice price index for six consecutive months to a 20-month high.
The central bank lifted its benchmark rate by 25 basis points to 5% in August to keep a lid on the runaway inflation.
The BSP should deliver another quarter-percentage hike next week to 5.25%, followed by another same-sized hike in December, according to Aris Dacanay, senior ASEAN economist at HSBC Bank, in a note Wednesday.`,
    bodyJa: `BANGKOK — The Philippine central bank is planning for a "Godzilla" El Niño on top of a prolonged oil shock, as the Southeast Asian nation tries to rein in inflation from three-year highs.
Governor Eli Remolona said Bangko Sentral ng Pilipinas now sets policy using scenarios that factor in oil prices and the severity of the weather event. "We have the regular, ordinary El Niño, which is bad, and then we have the Godzilla El Niño, which is really, really bad," he said Wednesday on a panel at the IMF and World Bank annual meetings in Bangkok.
The worst of El Niño's impact on prices is still to come, with the effects expected from November through February, he said, adding that maintaining price stability remains the central bank's priority.
"We're holding our breath," he said, "but we have to be prepared for the worst."
The looming weather risk is adding fresh pressure on one of Southeast Asia's most vulnerable economies. Philippine inflation accelerated to 7.2% in September from 6.1% in August, with rice prices up 18%, according to the Philippine Statistics Authority.
The world's biggest rice importer is also exposed to food supply risk. Agriculture Secretary Francisco Tiu Laurel has warned that a fresh drought could squeeze domestic supply. Larger Philippine purchases could add demand to a global market already jolted by El Niño and export curbs. The UN Food and Agriculture Organization has raised its rice price index for six consecutive months to a 20-month high.
The central bank lifted its benchmark rate by 25 basis points to 5% in August to keep a lid on the runaway inflation.
The BSP should deliver another quarter-percentage hike next week to 5.25%, followed by another same-sized hike in December, according to Aris Dacanay, senior ASEAN economist at HSBC Bank, in a note Wednesday.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/godzilla-el-nino-asia-inflation-philippines.html",
    publishedAt: "2026-10-14T04:24:28+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "oil-rises-amid-growing-mideast-tensions-0f0a1ca3",
    title: "Oil rises amid growing Mideast tensions between Iran-backed Houthis and Saudi Arabia",
    titleJa: "Oil rises amid growing Mideast tensions between Iran-backed Houthis and Saudi Arabia",
    summaryJa: "Worries over supply disruptions due to escalating tensions in the Middle East helped to push oil prices higher.",
    bodyOriginal: `Oil rises Wednesday, amid worries over supply disruptions as tensions continue to escalate in the Middle East with fighting between Iran-backed Houthis and Saudi Arabia.
Futures for international benchmark Brent crude for December delivery gained 0.61% to $106.33 a barrel. U.S. West Texas Intermediate futures for November advanced 0.63% to $94.73 per barrel.
Fighting between Saudi Arabia and Iran-backed Houthis continued to escalate, following a deadly attack on Riyadh's main airport by Tehran-backed Houthis in Yemen.
According to Al Jazeera, Houthi energy terminals and fuel reserves in Yemen were struck by a Saudi-led coalition, though a spokesperson said that precautions were taken to avoid "collateral damage on civilians."
Meanwhile, tensions also continued to simmer between the U.S. and Iran.
U.S. Central Command rejected claims by the commander of Iran's Islamic Revolutionary Guard Corps Navy that the Strait of Hormuz is under Iran's control and that any approaching U.S. Navy warships would be "sunk."
"RGC's navy commander has no navy," CENTCOM said in an X post, adding that "American forces and regional partners clearly control the Strait of Hormuz."
Oil may rally another $20-$25 due to the Iran conflict, hedge fund manager and noted commodity trader Paul Tudor Jones said on on CNBC's "Squawk Box."
"I am long oil... bullish oil...I think it can rally another $20 or $25 bucks," said the founder and chief investment officer of Tudor Investment.
"If something to ameliorate the situation was going to happen, it would have happened already before the midterms," he added.`,
    bodyJa: `Oil rises Wednesday, amid worries over supply disruptions as tensions continue to escalate in the Middle East with fighting between Iran-backed Houthis and Saudi Arabia.
Futures for international benchmark Brent crude for December delivery gained 0.61% to $106.33 a barrel. U.S. West Texas Intermediate futures for November advanced 0.63% to $94.73 per barrel.
Fighting between Saudi Arabia and Iran-backed Houthis continued to escalate, following a deadly attack on Riyadh's main airport by Tehran-backed Houthis in Yemen.
According to Al Jazeera, Houthi energy terminals and fuel reserves in Yemen were struck by a Saudi-led coalition, though a spokesperson said that precautions were taken to avoid "collateral damage on civilians."
Meanwhile, tensions also continued to simmer between the U.S. and Iran.
U.S. Central Command rejected claims by the commander of Iran's Islamic Revolutionary Guard Corps Navy that the Strait of Hormuz is under Iran's control and that any approaching U.S. Navy warships would be "sunk."
"RGC's navy commander has no navy," CENTCOM said in an X post, adding that "American forces and regional partners clearly control the Strait of Hormuz."
Oil may rally another $20-$25 due to the Iran conflict, hedge fund manager and noted commodity trader Paul Tudor Jones said on on CNBC's "Squawk Box."
"I am long oil... bullish oil...I think it can rally another $20 or $25 bucks," said the founder and chief investment officer of Tudor Investment.
"If something to ameliorate the situation was going to happen, it would have happened already before the midterms," he added.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/oil-rises-amid-growing-tensions-between-saudis-and-iran-backed-houthis.html",
    publishedAt: "2026-10-14T04:07:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "china-s-producer-prices-rise-at-fastest-2dc96d2b",
    title: "China's producer prices rise at fastest pace since June 2022, beating expectations",
    titleJa: "China's producer prices rise at fastest pace since June 2022, beating expectations",
    summaryJa: "The increase was higher than the 4.5% expected by economists polled by Reuters, and higher than the 3.8% seen in the previous month.",
    bodyOriginal: `China's producer price index climbed at its fastest pace in over four years, rising 5% in September as higher fuel prices pushed up costs for businesses.
The increase was higher than the 4.5% expected by economists polled by Reuters, and sharply up from the 3.8% seen in the previous month.
China's National Bureau of Statistics said higher prices were also seen in the country's coal sector, due to increased demand for coal for winter heating, temporary tight supply in major coal-producing areas, and expectations of rising international coal prices.
Consumer prices saw a 0.9% rise, marginally missing expectations of 1%, but up from 0.8% in the month before.
The increase in the consumer inflation rate was due to gasoline prices, which climbed 16.6% and contributed approximately 0.47 percentage points to the year-on-year CPI increase, according to Dong Lijuan, chief statistician of the Urban Division at the NBS.
This was partially offset by a wider fall in food prices, which declined 1.7% and pulled down the CPI by 0.29 percentage points, Dong added.
The core CPI rate, which excludes volatile food and energy prices, climbed 1%.
The lower-than-expected CPI reading indicates that domestic demand remains "lackluster," according to Zhiwei Zhang, president and chief economist at Pinpoint Asset Management, in a note after the data release.
However, the higher PPI is pointing to an economy that is gradually moving away from deflationary pressures even if the recovery remains uneven, said Hao Zhou, chief economist at Guotai Junan International Holdings.
His view was that domestic demand was recovering more gradually than the industrial sector, although the fact that consumer inflation has remained in positive territory indicated at the deflationary environment in 2024 and 2025 "is continuing to fade."
The higher inflation figures come as China's economy grapples with its lowest growth rate in more than three years. GDP growth for the second quarter of the year missed expectations at 4.3%.
While economic data for August showed that retail sales expanded more slowly than expected, industrial output beat expectations.
On Sept 28, a State Council readout signaled that more policy support could be on the way for the Chinese economy, saying that "In response to emerging challenges in the economy's operation, efforts should be made to intensify counter-cyclical adjustment of macro policies."
Lynn Song, chief economist for Greater China at ING, wrote that "It marks a bit of a shift in tone," adding that more policy support rollouts will be coming so as to reach both short- and long-term growth targets.
"These include the 4.5%-5.0% GDP growth target for 2026, and the longstanding goal to double GDP from 2020 to 2035."`,
    bodyJa: `China's producer price index climbed at its fastest pace in over four years, rising 5% in September as higher fuel prices pushed up costs for businesses.
The increase was higher than the 4.5% expected by economists polled by Reuters, and sharply up from the 3.8% seen in the previous month.
China's National Bureau of Statistics said higher prices were also seen in the country's coal sector, due to increased demand for coal for winter heating, temporary tight supply in major coal-producing areas, and expectations of rising international coal prices.
Consumer prices saw a 0.9% rise, marginally missing expectations of 1%, but up from 0.8% in the month before.
The increase in the consumer inflation rate was due to gasoline prices, which climbed 16.6% and contributed approximately 0.47 percentage points to the year-on-year CPI increase, according to Dong Lijuan, chief statistician of the Urban Division at the NBS.
This was partially offset by a wider fall in food prices, which declined 1.7% and pulled down the CPI by 0.29 percentage points, Dong added.
The core CPI rate, which excludes volatile food and energy prices, climbed 1%.
The lower-than-expected CPI reading indicates that domestic demand remains "lackluster," according to Zhiwei Zhang, president and chief economist at Pinpoint Asset Management, in a note after the data release.
However, the higher PPI is pointing to an economy that is gradually moving away from deflationary pressures even if the recovery remains uneven, said Hao Zhou, chief economist at Guotai Junan International Holdings.
His view was that domestic demand was recovering more gradually than the industrial sector, although the fact that consumer inflation has remained in positive territory indicated at the deflationary environment in 2024 and 2025 "is continuing to fade."
The higher inflation figures come as China's economy grapples with its lowest growth rate in more than three years. GDP growth for the second quarter of the year missed expectations at 4.3%.
While economic data for August showed that retail sales expanded more slowly than expected, industrial output beat expectations.
On Sept 28, a State Council readout signaled that more policy support could be on the way for the Chinese economy, saying that "In response to emerging challenges in the economy's operation, efforts should be made to intensify counter-cyclical adjustment of macro policies."
Lynn Song, chief economist for Greater China at ING, wrote that "It marks a bit of a shift in tone," adding that more policy support rollouts will be coming so as to reach both short- and long-term growth targets.
"These include the 4.5%-5.0% GDP growth target for 2026, and the longstanding goal to double GDP from 2020 to 2035."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/producer-prices-in-china-rise-fastest-since-june-2022-on-fuel-costs.html",
    publishedAt: "2026-10-14T03:14:48+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "taiwan-agrees-to-buy-30-of-gas-from-alas-9236c617",
    title: "Taiwan agrees to buy 30% of gas from Alaska LNG project, Trump says",
    titleJa: "Taiwan agrees to buy 30% of gas from Alaska LNG project, Trump says",
    summaryJa: "U.S. President Donald Trump said Tuesday that Taiwan had agreed to buy 30% of the gas from a pipeline project in Alaska.",
    bodyOriginal: `U.S. President Donald Trump said Tuesday that Taiwan had agreed to buy 30% of the gas from a proposed liquefied natural gas project in Alaska.
"Taiwan has just agreed to buy 30% of the gas coming off the pipeline for the next 20 years," Trump said at a rally in Alaska. "That guarantees a success."
His latest remarks follow repeated claims earlier this month that South Korea had agreed to join the $50 billion Alaska LNG project, even as Seoul maintained that its participation had not been finalized. "We'll also invest $4.4 billion into the project, on top of $50 billion already committed by South Korea to Alaska," Trump said.
However, the terms of the Taiwan deal cited by Trump were not immediately clear.
Last year, Taiwan's state-owned energy company CPC Corp reportedly reached an agreement with Alaska Gasline Development Corp to purchase LNG and invest in the pipeline project.
Taiwan, home to critical semiconductor giant TSMC, has seen energy demand climb due to AI-related growth. However, the island relies on imports for more than 90% of its energy supply and this summer projected its average electricity demand growth rate through 2035 would exceed that of Japan and South Korea.
Taiwan's economic affairs ministry said that growth rate would climb by about 2.5% a year, the second-highest forecast in its history. The democratically self-ruled island is still waiting on major new arms sales from the U.S.
Beijing considers Taiwan part of its territory.
Glenfarne, the developer of the Alaska LNG pipeline, told the U.S. government in a report this month the project aims to deliver its first gas in 2029.
Trump has also stepped up pressure on South Korea over its participation in the project, warning earlier this month that he would charge the country more and threatened to double the charges if Seoul failed to sign soon, without specifying what would be doubled. That prompted speculation in South Korean media that he was referring to higher tariffs.
The White House, Taiwan's energy ministry and CPC Corp. did not immediately respond to CNBC's requests for comment.`,
    bodyJa: `U.S. President Donald Trump said Tuesday that Taiwan had agreed to buy 30% of the gas from a proposed liquefied natural gas project in Alaska.
"Taiwan has just agreed to buy 30% of the gas coming off the pipeline for the next 20 years," Trump said at a rally in Alaska. "That guarantees a success."
His latest remarks follow repeated claims earlier this month that South Korea had agreed to join the $50 billion Alaska LNG project, even as Seoul maintained that its participation had not been finalized. "We'll also invest $4.4 billion into the project, on top of $50 billion already committed by South Korea to Alaska," Trump said.
However, the terms of the Taiwan deal cited by Trump were not immediately clear.
Last year, Taiwan's state-owned energy company CPC Corp reportedly reached an agreement with Alaska Gasline Development Corp to purchase LNG and invest in the pipeline project.
Taiwan, home to critical semiconductor giant TSMC, has seen energy demand climb due to AI-related growth. However, the island relies on imports for more than 90% of its energy supply and this summer projected its average electricity demand growth rate through 2035 would exceed that of Japan and South Korea.
Taiwan's economic affairs ministry said that growth rate would climb by about 2.5% a year, the second-highest forecast in its history. The democratically self-ruled island is still waiting on major new arms sales from the U.S.
Beijing considers Taiwan part of its territory.
Glenfarne, the developer of the Alaska LNG pipeline, told the U.S. government in a report this month the project aims to deliver its first gas in 2029.
Trump has also stepped up pressure on South Korea over its participation in the project, warning earlier this month that he would charge the country more and threatened to double the charges if Seoul failed to sign soon, without specifying what would be doubled. That prompted speculation in South Korean media that he was referring to higher tariffs.
The White House, Taiwan's energy ministry and CPC Corp. did not immediately respond to CNBC's requests for comment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/14/taiwan-alaska-lng-project-trump-.html",
    publishedAt: "2026-10-14T02:09:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "how-long-will-humans-be-needed-for-trans-25229a0c",
    title: "How long will humans be needed for translation?",
    titleJa: "How long will humans be needed for translation?",
    summaryJa: "AI dominates the translation business, but for high-stakes work, humans are still needed.",
    bodyOriginal: `How long will humans be needed for translation?
- Published
"Il pleut des cordes," say the French when it's raining hard.
"It's raining ropes," is the direct translation. It's the kind of idiom which can trip up an AI translator.
"You can imagine the dilemma this throws AI into," says François Yvon, a research director specialised in automatic translation with the French National Centre for Scientific Research CNRS.
He says a well-trained system will know that ropes are not literally falling from the sky and use the English phrase "it's raining cats and dogs".
"But is it going to find the equivalent when it's translating into Indonesian?" asks Yvon.
A comment on the weather is pretty low-risk, but more and more translation is being done by machines, and on topics with higher stakes than the weather.
In April, Google said people are now translating, external one trillion words a month with Google Translate.
That doesn't count the others: DeepL, Microsoft, Claude, ChatCGT and Gemini, not to mention made-to-measure corporate translation systems.
Direct sales of machine translation, external (i.e. outside general AI subscriptions) were worth an estimated $1.4bn (£1bn) last year.
"For plenty of use cases, raw AI translation is now the right call: multiplying your costs by 100 to catch the last few percent of errors isn't rational if you're translating internal documents or product listings," says John Zimmerman, founder of OKA (Open Knowledge Association), a Swiss non-profit that translates Wikipedia articles into other languages.
"For an encyclopedia it's different. Wikipedia runs on trust. A wrong fact can sit there for years and get cited by journalists and AI systems," he says.
With more than 10,000 published pieces, mostly into Spanish, Portuguese and English, OKA is, Zimmerman says, the single largest contributor of translated articles to the collaborative online encyclopedia.
Which is something it absolutely could not have become without AI.
"Translating 10,000 articles the traditional way would cost millions. In our process, the AI produces the draft, then a human translator checks every sentence," he explains.
But that human input is required less and less.
"The machine output is now good enough that skipping the human entirely has become a serious option, and a real temptation across the industry. Two or three years ago, with tools like DeepL, our translators still rewrote a good chunk of every draft.
"Today the prose often doesn't need fixing at all. So, the question is no longer whether AI translation is good, it clearly is, but whether it's good enough to remove the human," says Zimmerman.
Not yet, translators argue.
Ariella Baltié is a translator and legal expert specialised in translating court documents from English into French.
She was contacted recently by someone who'd already translated his documents with AI, asking her to check them.
"There were two major errors right at the beginning," she said.
The AI had translated "Le demandeur" (the plaintiff) as "the requester". "Totally awkward for legal papers," says Baltié.
When the AI saw "Madame X, épouse Y" (Ms X, wife of Y'), it came up with "Ms X marries Y".
In other words, it mistook a noun for a verb, completely losing the meaning of the phrase.
The consequences of mistranslation in the legal sphere can be serious. In the US, for example, errors in machine-translated asylum applications have led to delays in the release of detainees.
Accuracy is a matter of life and death in the medical field.
"The units for dosages and blood tests often include Greek letters," says Carol Bereuter, who is a specialist in medical translations.
She came across one automatically-translated text that had translated the greek letter μ as milli (one thousandth) instead of micro (one millionth).
"That's a serious error. If you give someone a milligram when it's meant to be a microgram, you are giving them a thousand times the dose," points out Bereuter.
She also makes the point that, as AI translators have got better, catching errors has got more difficult.
"Whereas in the past, with things like Google Translate, the sentence would jump out at you because there'd be a grammatical error or it would sound clunky, today it sounds perfectly legitimate. It sounds fluid. It sounds natural. So the errors are a lot harder to spot."
"If it's something that will bear your signature, there's a risk for your reputation. And if decisions are going to be taken on the basis of a translation concerning a medical procedure, a contract you might sign or a major purchase you might make, the risk is even greater," warns François Yvon.
Even sentences that seem quite clear to a human can trip up an AI service, he says.
"When you have words with different meanings, it's usually very clear for a human which one applies because they understand the context, but when a machine translator comes across the sentence 'translate into Polish', for example, it is quite capable of deciding it must be all about shoe cream, says Yvon.
Context is often crucial. If an AI translator hasn't grasped that we're talking about a football match it is liable to mis-translate "taking a corner".
Last year OKA ran a study, funded by Wikimedia. It studied 119 articles, 10 language pairs and more than 1,000 hours of translator work.
"27% of the AI-generated text still got corrected before publication. Three quarters of those corrections were errors the AI introduced, and 5 to 6% of errors changed the meaning of the original text," says Zimmerman.
Eradicating those errors is likely to be challenging.
"As things stand, I think the fundamental way these systems function makes it quite hard to imagine how they could become 100% reliable," says François Yvon.
This is because probability is a crucial part of the way AI translates each word rather than another and what is probably correct is not the same as what is correct. Especially in the realm of something as subtle and surprising as language.
He thinks a new generation of tech will be an improvement.
"We will see translation systems that are increasingly capable of evaluating what they do and correcting themselves using different AI tools simultaneously: one to do the translation, a second to criticize it and a third to produce a new version, for example."
But perhaps the big moment will be when AI can show doubt.
"The real breakthrough won't come until these systems are not merely capable of translating but also of telling us when they're not sure," Yvon says.
- Published19 August
- Published12 August
- Published7 August`,
    bodyJa: `How long will humans be needed for translation?
- Published
"Il pleut des cordes," say the French when it's raining hard.
"It's raining ropes," is the direct translation. It's the kind of idiom which can trip up an AI translator.
"You can imagine the dilemma this throws AI into," says François Yvon, a research director specialised in automatic translation with the French National Centre for Scientific Research CNRS.
He says a well-trained system will know that ropes are not literally falling from the sky and use the English phrase "it's raining cats and dogs".
"But is it going to find the equivalent when it's translating into Indonesian?" asks Yvon.
A comment on the weather is pretty low-risk, but more and more translation is being done by machines, and on topics with higher stakes than the weather.
In April, Google said people are now translating, external one trillion words a month with Google Translate.
That doesn't count the others: DeepL, Microsoft, Claude, ChatCGT and Gemini, not to mention made-to-measure corporate translation systems.
Direct sales of machine translation, external (i.e. outside general AI subscriptions) were worth an estimated $1.4bn (£1bn) last year.
"For plenty of use cases, raw AI translation is now the right call: multiplying your costs by 100 to catch the last few percent of errors isn't rational if you're translating internal documents or product listings," says John Zimmerman, founder of OKA (Open Knowledge Association), a Swiss non-profit that translates Wikipedia articles into other languages.
"For an encyclopedia it's different. Wikipedia runs on trust. A wrong fact can sit there for years and get cited by journalists and AI systems," he says.
With more than 10,000 published pieces, mostly into Spanish, Portuguese and English, OKA is, Zimmerman says, the single largest contributor of translated articles to the collaborative online encyclopedia.
Which is something it absolutely could not have become without AI.
"Translating 10,000 articles the traditional way would cost millions. In our process, the AI produces the draft, then a human translator checks every sentence," he explains.
But that human input is required less and less.
"The machine output is now good enough that skipping the human entirely has become a serious option, and a real temptation across the industry. Two or three years ago, with tools like DeepL, our translators still rewrote a good chunk of every draft.
"Today the prose often doesn't need fixing at all. So, the question is no longer whether AI translation is good, it clearly is, but whether it's good enough to remove the human," says Zimmerman.
Not yet, translators argue.
Ariella Baltié is a translator and legal expert specialised in translating court documents from English into French.
She was contacted recently by someone who'd already translated his documents with AI, asking her to check them.
"There were two major errors right at the beginning," she said.
The AI had translated "Le demandeur" (the plaintiff) as "the requester". "Totally awkward for legal papers," says Baltié.
When the AI saw "Madame X, épouse Y" (Ms X, wife of Y'), it came up with "Ms X marries Y".
In other words, it mistook a noun for a verb, completely losing the meaning of the phrase.
The consequences of mistranslation in the legal sphere can be serious. In the US, for example, errors in machine-translated asylum applications have led to delays in the release of detainees.
Accuracy is a matter of life and death in the medical field.
"The units for dosages and blood tests often include Greek letters," says Carol Bereuter, who is a specialist in medical translations.
She came across one automatically-translated text that had translated the greek letter μ as milli (one thousandth) instead of micro (one millionth).
"That's a serious error. If you give someone a milligram when it's meant to be a microgram, you are giving them a thousand times the dose," points out Bereuter.
She also makes the point that, as AI translators have got better, catching errors has got more difficult.
"Whereas in the past, with things like Google Translate, the sentence would jump out at you because there'd be a grammatical error or it would sound clunky, today it sounds perfectly legitimate. It sounds fluid. It sounds natural. So the errors are a lot harder to spot."
"If it's something that will bear your signature, there's a risk for your reputation. And if decisions are going to be taken on the basis of a translation concerning a medical procedure, a contract you might sign or a major purchase you might make, the risk is even greater," warns François Yvon.
Even sentences that seem quite clear to a human can trip up an AI service, he says.
"When you have words with different meanings, it's usually very clear for a human which one applies because they understand the context, but when a machine translator comes across the sentence 'translate into Polish', for example, it is quite capable of deciding it must be all about shoe cream, says Yvon.
Context is often crucial. If an AI translator hasn't grasped that we're talking about a football match it is liable to mis-translate "taking a corner".
Last year OKA ran a study, funded by Wikimedia. It studied 119 articles, 10 language pairs and more than 1,000 hours of translator work.
"27% of the AI-generated text still got corrected before publication. Three quarters of those corrections were errors the AI introduced, and 5 to 6% of errors changed the meaning of the original text," says Zimmerman.
Eradicating those errors is likely to be challenging.
"As things stand, I think the fundamental way these systems function makes it quite hard to imagine how they could become 100% reliable," says François Yvon.
This is because probability is a crucial part of the way AI translates each word rather than another and what is probably correct is not the same as what is correct. Especially in the realm of something as subtle and surprising as language.
He thinks a new generation of tech will be an improvement.
"We will see translation systems that are increasingly capable of evaluating what they do and correcting themselves using different AI tools simultaneously: one to do the translation, a second to criticize it and a third to produce a new version, for example."
But perhaps the big moment will be when AI can show doubt.
"The real breakthrough won't come until these systems are not merely capable of translating but also of telling us when they're not sure," Yvon says.
- Published19 August
- Published12 August
- Published7 August`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c1wxdjx27ypo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-13T23:05:29+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5a40/live/7b9bd230-b0d8-11f1-b1d1-571ed4d7ff2c.jpg",
    readTime: 10,
  },
  {
    id: "is-it-ok-for-jobseekers-or-employers-to-504a4abc",
    title: "Is it OK for jobseekers or employers to use AI?",
    titleJa: "Is it OK for jobseekers or employers to use AI?",
    summaryJa: "Graduates are increasingly using AI to misrepresent themselves in job applications, research suggests. But some say their peer group has no choice.",
    bodyOriginal: `Is it OK for jobseekers or employers to use AI?
- Published
Would you use AI to help you write a CV or cover letter? How about during an online assessment or video interview for a job?
We are increasingly using the technology to help us with job applications, graduates, external and recruiters say, with many employers happy for us to do so within reason.
But when does it cross a line from being acceptable to unethical, or even cheating?
Tom, 22, from Maidstone graduated last year with a geography degree and says he applied for over 200 jobs before finally landing a role last month as a restaurant manager.
He says the process was "exhausting" and "demoralising", with employers often not even getting back to him, and he wouldn't have got through it without some help from AI.
"Employers want you to put your absolute best into the application, but if I'm applying for 10 to 20 jobs in a day, the reality is you can't do that."
While Tom says he never used the technology in an assessment or interview, he did use it to help him with cover letters and CVs or to find the right "buzz words" that early stage screening in a recruitment process will pick up on.
He also thinks it's "hypocritical" for companies to ask candidates not to use AI when some are using it themselves to screen candidates.
"That's where it feels like a weird tightrope. You can't use AI too much because otherwise you're not human. But if you don't write like an AI, you may get skipped by the AI screening."
'More competition for students'
This summer, the Institute of Student Employers (ISE) surveyed 155 of the UK's biggest graduate employers and found they were becoming "more accepting" of candidates using AI during recruitment "at some stages of the recruitment process".
According to the trade group, the most commonly accepted use was writing cover letters or CVs, followed by completing online application questions.
However, it also found some 92% of employers had encountered or suspected AI "misconduct" in the job selection process - up from 85% last year. Most commonly this included using AI as a real-time assistant during online video interviews or to complete online assessments.
On top of this, the tech is also helping candidates write multiple applications at the same time - something known in the industry as "spray and pray". And Stephen Isherwood, joint chief executive of the ISE, says it is "driving up the competition and pressure on students" in an already competitive graduate recruitment market.
'It's not a level playing field'
Hollie Moody, head of early careers recruitment at energy giant EDF, says she doesn't blame graduates for using AI in applications given how "brutal" the jobs market is right now. But she does think it's becoming a problem.
EDF opened its graduate recruitment scheme three weeks ago, but took the decision to close it early after receiving 12,000 applications - a 10% increase on last year.
Moody says AI almost certainly contributed to this, adding that the tech is being used "a lot more freely" in the actual selection process.
"What we don't have is a level playing field, because what you'll find is that some candidates will absolutely use AI throughout the whole process, and other candidates won't."
Like many firms, EDF now issues guidance on the appropriate use of AI in job applications, and is trying to make its recruitment process as "AI-proof" as possible.
It only reads CVs in the later stages of the hiring process and uses skills and behaviour-based online assessments and video interviews to better assess candidates' skills.
But Moody says some applicants still try to bend the rules, particularly in video interviews.
"A lot of the answers [we hear] are the same. Or people might pause whilst they wait for AI to come back to them with an answer. It's almost like people are reading a script."
AI job application rise 'risks hiring incapable staff'
- Published25 March 2025
AI era 'not all doom and gloom' for graduates, say analysts
- Published5 March
Young jobseekers 'discouraged' by ghosting and AI
- Published21 May
One recently employed trainee accountant, who didn't want us to use his real name, told the BBC he'd applied for 50 graduate jobs and used AI in every application. But he says it was only for researching roles, tidying up his CV and generating mock practise questions for video interviews.
While he says he would never use the tech to cheat on assessments he knows people who would.
"I know people who have applied for 100 jobs and after a while they become desperate. If they see everyone else is using AI, they think how can I compete?"
According to the ISE, the graduate market has stabilised after a sharp fall last year but remains tough. Graduate roles currently attract an average of 141 applications each, it says.
And while only 16% of employers it surveyed are using AI to screen candidates, more than half plan to introduce it due to the large volumes of applications they are receiving.
EDF does not currently use AI screening but Hollie Moody says they may have to in future.
She says the use of AI in job applications is a "moral dilemma" that employers and employees will continue to grapple with. But she stresses it cannot replace what her firm is looking for in new recruits.
"It's about authenticity, but also personality. We want diversity of thought in the business."`,
    bodyJa: `Is it OK for jobseekers or employers to use AI?
- Published
Would you use AI to help you write a CV or cover letter? How about during an online assessment or video interview for a job?
We are increasingly using the technology to help us with job applications, graduates, external and recruiters say, with many employers happy for us to do so within reason.
But when does it cross a line from being acceptable to unethical, or even cheating?
Tom, 22, from Maidstone graduated last year with a geography degree and says he applied for over 200 jobs before finally landing a role last month as a restaurant manager.
He says the process was "exhausting" and "demoralising", with employers often not even getting back to him, and he wouldn't have got through it without some help from AI.
"Employers want you to put your absolute best into the application, but if I'm applying for 10 to 20 jobs in a day, the reality is you can't do that."
While Tom says he never used the technology in an assessment or interview, he did use it to help him with cover letters and CVs or to find the right "buzz words" that early stage screening in a recruitment process will pick up on.
He also thinks it's "hypocritical" for companies to ask candidates not to use AI when some are using it themselves to screen candidates.
"That's where it feels like a weird tightrope. You can't use AI too much because otherwise you're not human. But if you don't write like an AI, you may get skipped by the AI screening."
'More competition for students'
This summer, the Institute of Student Employers (ISE) surveyed 155 of the UK's biggest graduate employers and found they were becoming "more accepting" of candidates using AI during recruitment "at some stages of the recruitment process".
According to the trade group, the most commonly accepted use was writing cover letters or CVs, followed by completing online application questions.
However, it also found some 92% of employers had encountered or suspected AI "misconduct" in the job selection process - up from 85% last year. Most commonly this included using AI as a real-time assistant during online video interviews or to complete online assessments.
On top of this, the tech is also helping candidates write multiple applications at the same time - something known in the industry as "spray and pray". And Stephen Isherwood, joint chief executive of the ISE, says it is "driving up the competition and pressure on students" in an already competitive graduate recruitment market.
'It's not a level playing field'
Hollie Moody, head of early careers recruitment at energy giant EDF, says she doesn't blame graduates for using AI in applications given how "brutal" the jobs market is right now. But she does think it's becoming a problem.
EDF opened its graduate recruitment scheme three weeks ago, but took the decision to close it early after receiving 12,000 applications - a 10% increase on last year.
Moody says AI almost certainly contributed to this, adding that the tech is being used "a lot more freely" in the actual selection process.
"What we don't have is a level playing field, because what you'll find is that some candidates will absolutely use AI throughout the whole process, and other candidates won't."
Like many firms, EDF now issues guidance on the appropriate use of AI in job applications, and is trying to make its recruitment process as "AI-proof" as possible.
It only reads CVs in the later stages of the hiring process and uses skills and behaviour-based online assessments and video interviews to better assess candidates' skills.
But Moody says some applicants still try to bend the rules, particularly in video interviews.
"A lot of the answers [we hear] are the same. Or people might pause whilst they wait for AI to come back to them with an answer. It's almost like people are reading a script."
AI job application rise 'risks hiring incapable staff'
- Published25 March 2025
AI era 'not all doom and gloom' for graduates, say analysts
- Published5 March
Young jobseekers 'discouraged' by ghosting and AI
- Published21 May
One recently employed trainee accountant, who didn't want us to use his real name, told the BBC he'd applied for 50 graduate jobs and used AI in every application. But he says it was only for researching roles, tidying up his CV and generating mock practise questions for video interviews.
While he says he would never use the tech to cheat on assessments he knows people who would.
"I know people who have applied for 100 jobs and after a while they become desperate. If they see everyone else is using AI, they think how can I compete?"
According to the ISE, the graduate market has stabilised after a sharp fall last year but remains tough. Graduate roles currently attract an average of 141 applications each, it says.
And while only 16% of employers it surveyed are using AI to screen candidates, more than half plan to introduce it due to the large volumes of applications they are receiving.
EDF does not currently use AI screening but Hollie Moody says they may have to in future.
She says the use of AI in job applications is a "moral dilemma" that employers and employees will continue to grapple with. But she stresses it cannot replace what her firm is looking for in new recruits.
"It's about authenticity, but also personality. We want diversity of thought in the business."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c623dnkn8pkyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-13T23:04:39+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/38df/live/64af4870-c6e7-11f1-bf38-57dc5cd42af2.jpg",
    readTime: 10,
  },
  {
    id: "royal-mail-losing-400-postal-workers-a-w-3195d30a",
    title: "Royal Mail losing 400 postal workers a week, says union",
    titleJa: "Royal Mail losing 400 postal workers a week, says union",
    summaryJa: "The CWU says more posties are leaving since a new delivery system was brought in, that it claims is not working in hundreds of offices.",
    bodyOriginal: `Royal Mail losing 400 postal workers a week, says union
- Published
About 400 postmen and women are leaving Royal Mail per week, according to the Communication Workers Union (CWU), who claims this number has gone up since the company introduced a new delivery system earlier this year.
The CWU says the firm had been losing about 330 postal staff a week from a workforce of 83,000 before it rolled out DM26, which reorganised routes to improve delivery performance.
The union claims the new system is not working in hundreds of offices, and BBC Your Voice has heard from staff warning of a "nightmare" Christmas ahead as the number of parcels increases.
Royal Mail says the reforms are part of its plan to deliver a more "efficient and financially sustainable" service.
Over the last year we've been in touch with more than 30 postal staff in all four nations of the UK, as they have switched over to DM26.
It allows for second class post to only be delivered every other weekday, and is supposed to guarantee first class mail and parcels are delivered every day, by putting workers into groups of three and changing the walking pattern of rounds.
But posties speaking to us anonymously say parcels are still being prioritised, letters left behind, and time wasted in sorting and dividing mail into first and second class.
"I didn't take any first class mail out on my last shift because I was on a road that's been behind for weeks," a worker in the West Midlands told me. "But I'm sure a manager would have ticked a box to say all first class mail went out."
A Royal Mail spokesperson said the company always worked to ensure all mail - both letters and parcels - were delivered on time.
Royal Mail plans to cut 2,500 jobs
- Published6 days ago
Only three-quarters of first class mail delivered on time
- Published29 May
Royal Mail letters sit undelivered 'for weeks' as parcels prioritised, staff say
- Published16 February
Some postal workers we've spoken to say the new model is also increasing their workload.
We asked eight workers in different areas to track their average step counts. Since the switchover all their steps increased by a quarter or even a third, often up to around 25,000 steps a day.
Several fear this Christmas will be a "nightmare".
"We all think this Christmas will be the worst ever, for us and our customers," said one postman in the East Midlands.
Bryn Dymott delivered post in the village of Wootton in Bedfordshire for nine years. For the most part he loved the job. But he left the company in July saying he couldn't face another "shambolic" Christmas.
"People put things in the post for them to be delivered, not for them to be delayed because Royal Mail hasn't got the systems in place and enough people to get them delivered."
Bryn says he wanted to speak out after leaving the company because he was sick of the fact that posties aren't able to say what's really happening.
He says the company is "proving it's impossible to have four people's work done by three people. It shouldn't really come as a surprise."
'A boat taking on water'
So far DM26 has been introduced in about 1,000 of Royal Mail's 1,200 delivery offices.
Now the CWU has told its members to pause further roll-out of the new system until a plan can be agreed with Royal Mail to address problems.
The union says that while it is operating successfully in around 500 offices, it has run into significant problems in hundreds of others.
"Put simply, if a boat is already taking on water, adding more passengers is unlikely to solve the problem," says Martin Walsh of the CWU.
The union said most Royal Mail workers leaving the company were believed to be new starters on part-time contracts, but also said there had been an increase in staff on legacy contracts departing.
Royal Mail, on the other hand, says the new system is on track to be up and running in all offices by Christmas.
It says the roll-out is 90% complete and that it is now delivering to "95% of addresses every day across the UK, up from 88% before the roll-out. The roll-out continues across our network and we expect quality of service to improve as deployment progresses."
The company says it is hiring, as usual, an additional 22,000 temporary workers over the Christmas period.
Royal Mail has battled with increased competition and falling demand for letter deliveries in recent years, and last week announced plans to cut 2,500 head office and other supporting roles by the end of 2027.
The company has also faced years of criticism from politicians and the public over slow letter deliveries - something which has continued since the new system has been rolled out.
The regulator Ofcom has fined Royal Mail more than £37m in the last three years for missing delivery targets.
But some MPs think it is time for a new approach, and a group of them will meet the regulator later on Wednesday.
"We need to think outside the box," Dave Robertson, Labour MP for Lichfield, Burntwood and the Villages in Staffordshire.
"We need to bring as many people to the table on this to make sure we come up with a long-term solution because what's been tried up to now clearly isn't working."
An Ofcom spokesperson said not only has it issued fines to Royal Mail in recent years but it has also demanded an improvement plan and reformed the obligations imposed on the company, adding: "We will continue to hold it to account using the full extent of the powers available to us."
Postal Services Minister Kate Dearden said Royal Mail's improvement plan was "a step in the right direction, but it must deliver tangible improvements for customers. We will continue to hold them to account on their performance."`,
    bodyJa: `Royal Mail losing 400 postal workers a week, says union
- Published
About 400 postmen and women are leaving Royal Mail per week, according to the Communication Workers Union (CWU), who claims this number has gone up since the company introduced a new delivery system earlier this year.
The CWU says the firm had been losing about 330 postal staff a week from a workforce of 83,000 before it rolled out DM26, which reorganised routes to improve delivery performance.
The union claims the new system is not working in hundreds of offices, and BBC Your Voice has heard from staff warning of a "nightmare" Christmas ahead as the number of parcels increases.
Royal Mail says the reforms are part of its plan to deliver a more "efficient and financially sustainable" service.
Over the last year we've been in touch with more than 30 postal staff in all four nations of the UK, as they have switched over to DM26.
It allows for second class post to only be delivered every other weekday, and is supposed to guarantee first class mail and parcels are delivered every day, by putting workers into groups of three and changing the walking pattern of rounds.
But posties speaking to us anonymously say parcels are still being prioritised, letters left behind, and time wasted in sorting and dividing mail into first and second class.
"I didn't take any first class mail out on my last shift because I was on a road that's been behind for weeks," a worker in the West Midlands told me. "But I'm sure a manager would have ticked a box to say all first class mail went out."
A Royal Mail spokesperson said the company always worked to ensure all mail - both letters and parcels - were delivered on time.
Royal Mail plans to cut 2,500 jobs
- Published6 days ago
Only three-quarters of first class mail delivered on time
- Published29 May
Royal Mail letters sit undelivered 'for weeks' as parcels prioritised, staff say
- Published16 February
Some postal workers we've spoken to say the new model is also increasing their workload.
We asked eight workers in different areas to track their average step counts. Since the switchover all their steps increased by a quarter or even a third, often up to around 25,000 steps a day.
Several fear this Christmas will be a "nightmare".
"We all think this Christmas will be the worst ever, for us and our customers," said one postman in the East Midlands.
Bryn Dymott delivered post in the village of Wootton in Bedfordshire for nine years. For the most part he loved the job. But he left the company in July saying he couldn't face another "shambolic" Christmas.
"People put things in the post for them to be delivered, not for them to be delayed because Royal Mail hasn't got the systems in place and enough people to get them delivered."
Bryn says he wanted to speak out after leaving the company because he was sick of the fact that posties aren't able to say what's really happening.
He says the company is "proving it's impossible to have four people's work done by three people. It shouldn't really come as a surprise."
'A boat taking on water'
So far DM26 has been introduced in about 1,000 of Royal Mail's 1,200 delivery offices.
Now the CWU has told its members to pause further roll-out of the new system until a plan can be agreed with Royal Mail to address problems.
The union says that while it is operating successfully in around 500 offices, it has run into significant problems in hundreds of others.
"Put simply, if a boat is already taking on water, adding more passengers is unlikely to solve the problem," says Martin Walsh of the CWU.
The union said most Royal Mail workers leaving the company were believed to be new starters on part-time contracts, but also said there had been an increase in staff on legacy contracts departing.
Royal Mail, on the other hand, says the new system is on track to be up and running in all offices by Christmas.
It says the roll-out is 90% complete and that it is now delivering to "95% of addresses every day across the UK, up from 88% before the roll-out. The roll-out continues across our network and we expect quality of service to improve as deployment progresses."
The company says it is hiring, as usual, an additional 22,000 temporary workers over the Christmas period.
Royal Mail has battled with increased competition and falling demand for letter deliveries in recent years, and last week announced plans to cut 2,500 head office and other supporting roles by the end of 2027.
The company has also faced years of criticism from politicians and the public over slow letter deliveries - something which has continued since the new system has been rolled out.
The regulator Ofcom has fined Royal Mail more than £37m in the last three years for missing delivery targets.
But some MPs think it is time for a new approach, and a group of them will meet the regulator later on Wednesday.
"We need to think outside the box," Dave Robertson, Labour MP for Lichfield, Burntwood and the Villages in Staffordshire.
"We need to bring as many people to the table on this to make sure we come up with a long-term solution because what's been tried up to now clearly isn't working."
An Ofcom spokesperson said not only has it issued fines to Royal Mail in recent years but it has also demanded an improvement plan and reformed the obligations imposed on the company, adding: "We will continue to hold it to account using the full extent of the powers available to us."
Postal Services Minister Kate Dearden said Royal Mail's improvement plan was "a step in the right direction, but it must deliver tangible improvements for customers. We will continue to hold them to account on their performance."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm5ynp0vz3p7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-13T23:03:59+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6236/live/4d710eb0-c71d-11f1-a82f-35874a3aae81.jpg",
    readTime: 10,
  },
  {
    id: "fbi-arrests-saudi-openai-employee-who-al-2b97fd8e",
    title: "FBI arrests Saudi OpenAI employee who allegedly planted recording device in conference room",
    titleJa: "FBI arrests Saudi OpenAI employee who allegedly planted recording device in conference room",
    summaryJa: "The Tuesday incident comes as the ChatGPT-maker, along with competitors, faces heightened scrutiny over its safety practices.",
    bodyOriginal: `An OpenAI employee was arrested after a "sophisticated recording device" was discovered inside its executive conference room, according to the Department of Justice and a post by the company.
Abdulrahman Alfozan, 35, who is a national of the Kingdom of Saudi Arabia, was arrested on Oct. 9 in connection with the matter, the DOJ said in a release on Tuesday.
The company said an employee planted the device a few days before it was found, and the Federal Bureau of Investigation "moved quickly to make an arrest," the post said. The employee was terminated.
FBI Director Kash Patel said in a statement that Alfozan "allegedly concealed a covert recording device inside his employer's executive conference room to secretly capture sensitive communications about the company's super intelligence technology."
"At this time, we have no indications of this individual inappropriately accessing or exfiltrating model weights, source code, or customer data," OpenAI said in the post. "We take protecting our technology, data and people seriously, and as a matter of national importance."
Alfozan was not authorized to access the executive conference room where the device was found, according to the DOJ. The department said footage showed him near the conference room on multiple days before the device was discovered. The DOJ said that on Oct. 5, he went into the room.
The DOJ said a bag was also found in the OpenAI building on or about Oct. 5 that belonged to Alfozan. Inside the bag, security found his wallet, ID and another recording device similar to the one that was in the executive conference room.
The department said a chatbot account associated with Alfozan's spouse that "shared multiple identifiers and attributes with Alfozan's own chatbot account" was used to get information about continuous audio recording and Wi-Fi. The DOJ said promps were submitted related to "building, customizing, installing, audio recording, testing, obfuscating, and remote accessing a device."
The device was concealed in toilet paper, and its contents were encrypted, according to the DOJ.
This security incident comes as the ChatGPT-maker, along with competitors like Anthropic and other big tech names, faces heightened scrutiny over safety protocols after a series of cyber incidents where autonomous agents escaped testing environments and hacked into outside systems.
Last week, OpenAI defended its decision to fire three safety researchers, alleging a "significant breach of trust," saying that the researchers "violated clear policies on handling sensitive information."
Jasmine Wang, Tomek Korbak and Mikita Balesni raised safety concerns in a letter to OpenAI's leadership, saying that communications around their exits "have made our former colleagues afraid to speak and operate in ways that, until last week, were an integral part of working at OpenAI."`,
    bodyJa: `An OpenAI employee was arrested after a "sophisticated recording device" was discovered inside its executive conference room, according to the Department of Justice and a post by the company.
Abdulrahman Alfozan, 35, who is a national of the Kingdom of Saudi Arabia, was arrested on Oct. 9 in connection with the matter, the DOJ said in a release on Tuesday.
The company said an employee planted the device a few days before it was found, and the Federal Bureau of Investigation "moved quickly to make an arrest," the post said. The employee was terminated.
FBI Director Kash Patel said in a statement that Alfozan "allegedly concealed a covert recording device inside his employer's executive conference room to secretly capture sensitive communications about the company's super intelligence technology."
"At this time, we have no indications of this individual inappropriately accessing or exfiltrating model weights, source code, or customer data," OpenAI said in the post. "We take protecting our technology, data and people seriously, and as a matter of national importance."
Alfozan was not authorized to access the executive conference room where the device was found, according to the DOJ. The department said footage showed him near the conference room on multiple days before the device was discovered. The DOJ said that on Oct. 5, he went into the room.
The DOJ said a bag was also found in the OpenAI building on or about Oct. 5 that belonged to Alfozan. Inside the bag, security found his wallet, ID and another recording device similar to the one that was in the executive conference room.
The department said a chatbot account associated with Alfozan's spouse that "shared multiple identifiers and attributes with Alfozan's own chatbot account" was used to get information about continuous audio recording and Wi-Fi. The DOJ said promps were submitted related to "building, customizing, installing, audio recording, testing, obfuscating, and remote accessing a device."
The device was concealed in toilet paper, and its contents were encrypted, according to the DOJ.
This security incident comes as the ChatGPT-maker, along with competitors like Anthropic and other big tech names, faces heightened scrutiny over safety protocols after a series of cyber incidents where autonomous agents escaped testing environments and hacked into outside systems.
Last week, OpenAI defended its decision to fire three safety researchers, alleging a "significant breach of trust," saying that the researchers "violated clear policies on handling sensitive information."
Jasmine Wang, Tomek Korbak and Mikita Balesni raised safety concerns in a letter to OpenAI's leadership, saying that communications around their exits "have made our former colleagues afraid to speak and operate in ways that, until last week, were an integral part of working at OpenAI."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/openai-employee-arrested-recording-device.html",
    publishedAt: "2026-10-13T21:44:46+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "saudi-man-charged-with-planting-sophisti-5f84a153",
    title: "Saudi man charged with planting 'sophisticated' recording device in OpenAI office",
    titleJa: "Saudi man charged with planting 'sophisticated' recording device in OpenAI office",
    summaryJa: "Prosecutors say the device, wrapped in toilet paper, was found inserted in a USB port on the back of a TV in an executive conference room.",
    bodyOriginal: `Saudi man charged with planting 'sophisticated' recording device in OpenAI office
- Published
A Saudi national has been charged with secretly planting a recording device in one of OpenAI's offices in California, federal prosecutors announced.
Abdulrahman Alfozan, who worked at the AI firm as an engineer, was charged federally with using or endeavoring to use an electronic, mechanical, or other device to intercept oral communications.
OpenAI said it had discovered a "sophisticated recording device" hidden in their San Francisco office and alerted the FBI. The company said it used its AI models to track that it had been planted by an employee.
Prosecutors say the device, wrapped in toilet paper, was found inserted in a USB port on the back of a TV in an executive conference room.
OpenAI, the maker of the popular chatbot ChatGPT, said that it has no indication that source code, model weights or customer data were inappropriately accessed or taken in the incident. It said the employee has been fired.
According to the complaint, Alfozan "allegedly concealed a covert recording device inside his employer's executive conference room to secretly capture sensitive communications," FBI Director Kash Patel said in a statement.
Patel said that the alleged goal was to capture information about the company's AI product.
Alfozan has been working as an engineer at OpenAI since July 2025, prosecutors say.
On 30 September, OpenAI employees discovered the device - two days after prosecutors say it had been installed. The device was encrypted, prosecutors said.
OpenAI said they were able to use their AI models "to understand the device and where it had come from, identifying that a specific employee had planted it a few days earlier".
According to the FBI, the suspect used a "productivity tool" and a "chatbot" to research sensitive locations at OpenAI and how to secretly place audio equipment.
Chatbot prompts that he is alleged to have searched include "building, customizing, installing, audio recording, testing, obfuscating, and remote accessing a device", prosecutors allege.
He is also accused of using the chatbot to ask about "'build[ing] a continuous audio recorder,' 'customiz[ing] Wi-Fi . . . connectivity,' 'improv[ing] audio and live listening,' and 'encrypt[ing] the SD card'".
On 5 October, prosecutors say he allegedly returned to inspect the device in the office room. Prosecutors used CCTV camera footage to link him to the scene.
That same day, Alfozan left a bag unattended in a different part of the building. A security team for OpenAI opened it to find his wallet and ID, as well as another recording device that was similar to the one found in the office conference room, prosecutors said.
Alfozan appeared in court on Tuesday. It's unclear whether he has legal representation.
If found guilty, he faces up to five years in prison and a fine of $250,000 (£187,000).
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published4 days ago
- Published17 September`,
    bodyJa: `Saudi man charged with planting 'sophisticated' recording device in OpenAI office
- Published
A Saudi national has been charged with secretly planting a recording device in one of OpenAI's offices in California, federal prosecutors announced.
Abdulrahman Alfozan, who worked at the AI firm as an engineer, was charged federally with using or endeavoring to use an electronic, mechanical, or other device to intercept oral communications.
OpenAI said it had discovered a "sophisticated recording device" hidden in their San Francisco office and alerted the FBI. The company said it used its AI models to track that it had been planted by an employee.
Prosecutors say the device, wrapped in toilet paper, was found inserted in a USB port on the back of a TV in an executive conference room.
OpenAI, the maker of the popular chatbot ChatGPT, said that it has no indication that source code, model weights or customer data were inappropriately accessed or taken in the incident. It said the employee has been fired.
According to the complaint, Alfozan "allegedly concealed a covert recording device inside his employer's executive conference room to secretly capture sensitive communications," FBI Director Kash Patel said in a statement.
Patel said that the alleged goal was to capture information about the company's AI product.
Alfozan has been working as an engineer at OpenAI since July 2025, prosecutors say.
On 30 September, OpenAI employees discovered the device - two days after prosecutors say it had been installed. The device was encrypted, prosecutors said.
OpenAI said they were able to use their AI models "to understand the device and where it had come from, identifying that a specific employee had planted it a few days earlier".
According to the FBI, the suspect used a "productivity tool" and a "chatbot" to research sensitive locations at OpenAI and how to secretly place audio equipment.
Chatbot prompts that he is alleged to have searched include "building, customizing, installing, audio recording, testing, obfuscating, and remote accessing a device", prosecutors allege.
He is also accused of using the chatbot to ask about "'build[ing] a continuous audio recorder,' 'customiz[ing] Wi-Fi . . . connectivity,' 'improv[ing] audio and live listening,' and 'encrypt[ing] the SD card'".
On 5 October, prosecutors say he allegedly returned to inspect the device in the office room. Prosecutors used CCTV camera footage to link him to the scene.
That same day, Alfozan left a bag unattended in a different part of the building. A security team for OpenAI opened it to find his wallet and ID, as well as another recording device that was similar to the one found in the office conference room, prosecutors said.
Alfozan appeared in court on Tuesday. It's unclear whether he has legal representation.
If found guilty, he faces up to five years in prison and a fine of $250,000 (£187,000).
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published4 days ago
- Published17 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwg5jq4vlddzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-13T21:42:49+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/194/cpsprodpb/59c9/live/4ad4e9c0-c74e-11f1-a64c-550be9e3c66b.png",
    readTime: 8,
  },
  {
    id: "judge-says-musk-engaged-in-intimidation-0033939e",
    title: "Judge says Musk engaged in intimidation of ex-FEMA CFO Mary Comans, clears her name",
    titleJa: "Judge says Musk engaged in intimidation of ex-FEMA CFO Mary Comans, clears her name",
    summaryJa: "Ex-FEMA CFO Mary Comans' name was cleared by a federal judge after Elon Musk and other government officials falsely accused her of criminal actions in 2025.",
    bodyOriginal: `A federal magistrate judge in Virginia ruled that Elon Musk engaged in "state sanctioned intimidation" of ex-FEMA CFO Mary Comans when he posted falsehoods on X last year accusing her of "criminal action" and of "funneling $58 million to illegal migrant hotels in Manhattan."
Musk, the world's richest person, was working for the Trump administration as the head of DOGE when he shared those posts on Feb. 11, 2025. The Department of Homeland Security said the next day it was firing Comans and three colleagues, and labeled them "deep state activists."
In Tuesday's order, U.S. Magistrate Judge William Fitzpatrick cleared Comans' name.
Comans served as FEMA CFO from around January 2018 until February 2025, and was also FEMA's operating chief from 2020 to 2021.
Fitzpatrick wrote in the order that, "The facts establish that high-ranking government officials," including Musk, then a special government employee, had "engaged in a coordinated public relations campaign to impugn the personal and professional integrity of Ms. Comans."
"Mr. Musk was the head of DOGE, he knew or should have known that any payments made to state or local governments through a FEMA grant in February 2025 were approved by his subordinates," the judge wrote.
He added that Musk posted a picture of Ms. Comans "to his millions of followers while falsely characterizing her government service as a 'criminal action,'" an act Fitzpatrick described as "little more than state sanctioned intimidation."
CNBC has reached out to Musk and White House attorneys involved in the case for comment.
Democracy Defenders Fund, which was involved in Comans' case, said in a statement that it was pleased with the decision.
"Mary Comans served in the federal government for 21 years," said Craig Becker, the group's head of affirmative litigation. "Career public servants are people, not pawns, and no one who has devoted their life to serving the American public should have their good name destroyed for partisan, political gain."`,
    bodyJa: `A federal magistrate judge in Virginia ruled that Elon Musk engaged in "state sanctioned intimidation" of ex-FEMA CFO Mary Comans when he posted falsehoods on X last year accusing her of "criminal action" and of "funneling $58 million to illegal migrant hotels in Manhattan."
Musk, the world's richest person, was working for the Trump administration as the head of DOGE when he shared those posts on Feb. 11, 2025. The Department of Homeland Security said the next day it was firing Comans and three colleagues, and labeled them "deep state activists."
In Tuesday's order, U.S. Magistrate Judge William Fitzpatrick cleared Comans' name.
Comans served as FEMA CFO from around January 2018 until February 2025, and was also FEMA's operating chief from 2020 to 2021.
Fitzpatrick wrote in the order that, "The facts establish that high-ranking government officials," including Musk, then a special government employee, had "engaged in a coordinated public relations campaign to impugn the personal and professional integrity of Ms. Comans."
"Mr. Musk was the head of DOGE, he knew or should have known that any payments made to state or local governments through a FEMA grant in February 2025 were approved by his subordinates," the judge wrote.
He added that Musk posted a picture of Ms. Comans "to his millions of followers while falsely characterizing her government service as a 'criminal action,'" an act Fitzpatrick described as "little more than state sanctioned intimidation."
CNBC has reached out to Musk and White House attorneys involved in the case for comment.
Democracy Defenders Fund, which was involved in Comans' case, said in a statement that it was pleased with the decision.
"Mary Comans served in the federal government for 21 years," said Craig Becker, the group's head of affirmative litigation. "Career public servants are people, not pawns, and no one who has devoted their life to serving the American public should have their good name destroyed for partisan, political gain."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/judge-says-elon-musk-engaged-intimidation-of-ex-fema-cfo-mary-comans.html",
    publishedAt: "2026-10-13T21:15:32+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "don-t-let-inflation-bite-how-to-hedge-wi-8344223e",
    title: "Don't let inflation bite — how to hedge with TIPS, commodities and infrastructure funds",
    titleJa: "Don't let inflation bite — how to hedge with TIPS, commodities and infrastructure funds",
    summaryJa: "TIPS are looking attractive but they aren't the only way to get inflation protection.",
    bodyOriginal: `Inflation will be in the crosshairs Wednesday as investors digest the latest Consumer Price Index. The reading may be one more sign that inflation remains a problem that isn't going away.
It's a tricky situation for investors looking for protection, but there are some good ways to get it.
Treasury Inflation-Protected securities (TIPS) are one option with "real" yields now at multi-decade highs. Beyond TIPS, analysts suggest commodities, infrastructure, and other assets that can hedge against rising prices.
While inflation is down sharply from its 9.1% peak in 2022 — a supply shock due to the Covid pandemic — it's still well above the Federal Reserve's 2% target. The headline Consumer Price Index is expected to hit 3.6% in September, partly due to rising energy costs stemming from the war with Iran. The Personal Consumption Expenditures index, the Fed's preferred gauge, was at a 3% core rate in August.
Americans' inflation concerns are also rising. The New York Fed's Survey of Consumer Expectations showed the one-year inflation outlook in September climbed to 3.9%, its highest level since May 2023.
TIPS deserve a second look
Despite their name, TIPS haven't provided much inflation protection this year. The iShares TIPS Bond ETF, which tracks the ICE U.S. Treasury Inflation Linked Bond Index, has a total return of -1.16% year-to-date.
Like most other bonds, TIPS have been hit hard by rising interest rates — with the 10-year Treasury note recently hitting multi-year highs around 5.3%. Bond prices and yields move inversely, and as rates climbed many TIPS funds suffered.
But rising yields have made TIPS more attractive. The 10-year TIPS yield is currently at 2.87%, after closing at 2.951% on Oct. 5, levels not seen since November 2008, according to Tradeweb.
"Given where rates are, it's getting interesting," says Jason Draho, head of asset allocation Americas at UBS Global Wealth Management.
TIPS pay a fixed coupon, or interest rate, but as inflation moves higher, the principal value of the bond increases. The adjustments reflect changes in inflation, based on the non-seasonally adjusted CPI for All Urban Consumers, with a three-month lag.
The upshot is that TIPS investors earn interest on a higher principal value over time. That's the essence of the protection compared to traditional Treasuries.
TIPS' poor performance this year isn't because of a surge in inflation expectations. Almost all the increase has been due to rising real yields — the nominal yield minus expected inflation. Real yields are up because of factors like robust economic growth and a U.S. fiscal deficit around 6% of gross domestic product (requiring far more government borrowing).
If nominal rates were rising just due to inflation, then TIPS total return — a mix of yield and price — would be fine, said R.J. Gallo, chief investment officer of global fixed income at Federated Hermes. But that isn't the case.
"TIPS have produced losses in total return because their income accruals have been insufficient to offset the price decline produced by the rising underlying real yields," Gallo explained.
TIPS maturing in 10 years or more are highly sensitive to duration risk, Draho notes. "You're making a big call on rates not rising any further if you buy TIPS, especially longer maturities of 10-year plus," he said.
The bull case is that inflation comes down quicker than expected. That's not the market's expectation, based on short-term Treasury yields, notes Draho. But if inflation does ease next year, which he expects, the yield curve would adjust lower.
One way to manage duration risk is to own individual TIPS rather than a fund that has to maintain duration consistent with a benchmark index. Investors could create a TIPS bond ladder with varying maturities, pegged to their income needs over the next decade, for instance.
If you hold a TIPS to maturity you may experience price volatility, but you'll get the original principal or inflation-adjusted price, whichever is greater, when the bond matures.
Short-term TIPS provide more protection against rate increases and they look attractive, said PIMCO portfolio manager Greg Sharenow.
"While as a firm, our view is that inflation will ultimately come down, that view keeps on being pushed out as real world events unfold," he said. "We've seen over and over again the last five to seven years — where we're now in our third supply shock — that you end up actually underpricing versus realized inflation," he added.
Funds focusing on short-term TIPS include Vanguard Short-Term Inflation-Protected Securities ETF, iShares 0-5 Year TIPS Bond ETF and PIMCO 1-5 Year US TIPS Index ETF.
Stocks and other hedges
TIPS, of course, aren't the only way to go. Rick Rieder, BlackRock's chief investment officer for global fixed income, suggests a multi-pronged strategy, including equities, commodities, and alternative assets.
"I'd start layering in more income, keep interest-rate exposure moderate, and then what a lot of people are doing is use things like alternatives to to create more balance in a portfolio," he said. "That makes a lot of sense to me."
Broad inflation-protection funds include State Street Multi-Asset Real Return ETF, Fidelity Strategic Real Return Fund and PIMCO Inflation Response Multi-Asset Fund.
The PIMCO fund's holdings include TIPS, commodities, gold and real estate investment trusts.
"The idea is to have a number of different exposures so that we can have a more balanced return and not try to be so specific in getting the exact right asset class at any one moment," said Sharenow, a manager on the fund.
He adds that he sees "significant value" in TIPS, which have the heaviest weighting in the portfolio. Commodities are the next largest holding. They have price "pass-throughs," which is how much companies can shift costs to customers through price increases. That is beneficial to investors, he noted.
Separately, the fund holds about 10% each in gold and REITs.
Draho recommends commodities, based partly on long-term asset-allocation studies that include the 1970s when inflation was far higher. "Over a long period they can help reduce risk and improve diversification," he said. "Their benefits have been most pronounced when inflation was overshooting expectations."
Rather than picking individual commodities, he suggests owning a basket that's consistently rebalanced. Gold and oil, for instance, perform well in different economic and monetary policy scenarios, and it can be tricky to get the timing right.
Commodity ETFs to consider include the Invesco Optimum Yield Diversified Commodity Strategy ETF (PDBC) and the iShares S&P GSCI Commodity-Indexed Trust (GSG).
Another asset class Draho suggests is infrastructure — operators of roads, ports, bridges, and other hard assets. Companies in the space tend to be toll takers, collecting long-term revenue under contracts that include inflation riders or built-in price adjustments.
Investors can get exposure to infrastructure through ETFs such as the iShares Global Infrastructure ETF (IGF) and ProShares DJ Brookfield Global Infrastructure ETF (TOLZ).
Draho isn't sounding alarms on inflation but says it makes sense to add protection against another move higher.
"The risk now is there will be supply side shocks that could push up inflation again," he said.
— CNBC's Daren Fonda contributed reporting.`,
    bodyJa: `Inflation will be in the crosshairs Wednesday as investors digest the latest Consumer Price Index. The reading may be one more sign that inflation remains a problem that isn't going away.
It's a tricky situation for investors looking for protection, but there are some good ways to get it.
Treasury Inflation-Protected securities (TIPS) are one option with "real" yields now at multi-decade highs. Beyond TIPS, analysts suggest commodities, infrastructure, and other assets that can hedge against rising prices.
While inflation is down sharply from its 9.1% peak in 2022 — a supply shock due to the Covid pandemic — it's still well above the Federal Reserve's 2% target. The headline Consumer Price Index is expected to hit 3.6% in September, partly due to rising energy costs stemming from the war with Iran. The Personal Consumption Expenditures index, the Fed's preferred gauge, was at a 3% core rate in August.
Americans' inflation concerns are also rising. The New York Fed's Survey of Consumer Expectations showed the one-year inflation outlook in September climbed to 3.9%, its highest level since May 2023.
TIPS deserve a second look
Despite their name, TIPS haven't provided much inflation protection this year. The iShares TIPS Bond ETF, which tracks the ICE U.S. Treasury Inflation Linked Bond Index, has a total return of -1.16% year-to-date.
Like most other bonds, TIPS have been hit hard by rising interest rates — with the 10-year Treasury note recently hitting multi-year highs around 5.3%. Bond prices and yields move inversely, and as rates climbed many TIPS funds suffered.
But rising yields have made TIPS more attractive. The 10-year TIPS yield is currently at 2.87%, after closing at 2.951% on Oct. 5, levels not seen since November 2008, according to Tradeweb.
"Given where rates are, it's getting interesting," says Jason Draho, head of asset allocation Americas at UBS Global Wealth Management.
TIPS pay a fixed coupon, or interest rate, but as inflation moves higher, the principal value of the bond increases. The adjustments reflect changes in inflation, based on the non-seasonally adjusted CPI for All Urban Consumers, with a three-month lag.
The upshot is that TIPS investors earn interest on a higher principal value over time. That's the essence of the protection compared to traditional Treasuries.
TIPS' poor performance this year isn't because of a surge in inflation expectations. Almost all the increase has been due to rising real yields — the nominal yield minus expected inflation. Real yields are up because of factors like robust economic growth and a U.S. fiscal deficit around 6% of gross domestic product (requiring far more government borrowing).
If nominal rates were rising just due to inflation, then TIPS total return — a mix of yield and price — would be fine, said R.J. Gallo, chief investment officer of global fixed income at Federated Hermes. But that isn't the case.
"TIPS have produced losses in total return because their income accruals have been insufficient to offset the price decline produced by the rising underlying real yields," Gallo explained.
TIPS maturing in 10 years or more are highly sensitive to duration risk, Draho notes. "You're making a big call on rates not rising any further if you buy TIPS, especially longer maturities of 10-year plus," he said.
The bull case is that inflation comes down quicker than expected. That's not the market's expectation, based on short-term Treasury yields, notes Draho. But if inflation does ease next year, which he expects, the yield curve would adjust lower.
One way to manage duration risk is to own individual TIPS rather than a fund that has to maintain duration consistent with a benchmark index. Investors could create a TIPS bond ladder with varying maturities, pegged to their income needs over the next decade, for instance.
If you hold a TIPS to maturity you may experience price volatility, but you'll get the original principal or inflation-adjusted price, whichever is greater, when the bond matures.
Short-term TIPS provide more protection against rate increases and they look attractive, said PIMCO portfolio manager Greg Sharenow.
"While as a firm, our view is that inflation will ultimately come down, that view keeps on being pushed out as real world events unfold," he said. "We've seen over and over again the last five to seven years — where we're now in our third supply shock — that you end up actually underpricing versus realized inflation," he added.
Funds focusing on short-term TIPS include Vanguard Short-Term Inflation-Protected Securities ETF, iShares 0-5 Year TIPS Bond ETF and PIMCO 1-5 Year US TIPS Index ETF.
Stocks and other hedges
TIPS, of course, aren't the only way to go. Rick Rieder, BlackRock's chief investment officer for global fixed income, suggests a multi-pronged strategy, including equities, commodities, and alternative assets.
"I'd start layering in more income, keep interest-rate exposure moderate, and then what a lot of people are doing is use things like alternatives to to create more balance in a portfolio," he said. "That makes a lot of sense to me."
Broad inflation-protection funds include State Street Multi-Asset Real Return ETF, Fidelity Strategic Real Return Fund and PIMCO Inflation Response Multi-Asset Fund.
The PIMCO fund's holdings include TIPS, commodities, gold and real estate investment trusts.
"The idea is to have a number of different exposures so that we can have a more balanced return and not try to be so specific in getting the exact right asset class at any one moment," said Sharenow, a manager on the fund.
He adds that he sees "significant value" in TIPS, which have the heaviest weighting in the portfolio. Commodities are the next largest holding. They have price "pass-throughs," which is how much companies can shift costs to customers through price increases. That is beneficial to investors, he noted.
Separately, the fund holds about 10% each in gold and REITs.
Draho recommends commodities, based partly on long-term asset-allocation studies that include the 1970s when inflation was far higher. "Over a long period they can help reduce risk and improve diversification," he said. "Their benefits have been most pronounced when inflation was overshooting expectations."
Rather than picking individual commodities, he suggests owning a basket that's consistently rebalanced. Gold and oil, for instance, perform well in different economic and monetary policy scenarios, and it can be tricky to get the timing right.
Commodity ETFs to consider include the Invesco Optimum Yield Diversified Commodity Strategy ETF (PDBC) and the iShares S&P GSCI Commodity-Indexed Trust (GSG).
Another asset class Draho suggests is infrastructure — operators of roads, ports, bridges, and other hard assets. Companies in the space tend to be toll takers, collecting long-term revenue under contracts that include inflation riders or built-in price adjustments.
Investors can get exposure to infrastructure through ETFs such as the iShares Global Infrastructure ETF (IGF) and ProShares DJ Brookfield Global Infrastructure ETF (TOLZ).
Draho isn't sounding alarms on inflation but says it makes sense to add protection against another move higher.
"The risk now is there will be supply side shocks that could push up inflation again," he said.
— CNBC's Daren Fonda contributed reporting.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/inflation-hedge-tips-commodities-infrastructure.html",
    publishedAt: "2026-10-13T20:52:22+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "bank-of-america-fined-1-2-billion-over-m-af9c3ee1",
    title: "Bank of America fined $1.2 billion over money-laundering violations",
    titleJa: "Bank of America fined $1.2 billion over money-laundering violations",
    summaryJa: "The action by the Treasury Department was announced less than a day before Bank of America reports quarterly earnings.",
    bodyOriginal: `Bank of America was hit with more than $1.2 billion in federal penalties Tuesday after regulators said the nation's second-largest bank failed for years to report more than $5 billion in suspicious transactions and fix longstanding anti-money-laundering problems.
More than $1 billion of the unreported activity involved national security and other high-priority risks, including Chinese money-laundering networks and activity tied to the southwest border, Treasury said in a press release.
The action also lands less than a day before the bank reports quarterly earnings Wednesday morning.
Treasury's Financial Crimes Enforcement Network, which enforces anti-money-laundering rules, said the $1.2 billion penalty is the third-largest in Treasury history. Treasury separately announced an $11.6 million settlement over sanctions violations.
As part of the settlement, Bank of America admitted that it willfully violated the Bank Secrecy Act by failing to maintain a compliant anti-money-laundering program, conduct required due diligence on foreign correspondent accounts and file suspicious activity reports, according to Treasury.
"Today's actions send a clear message that even the biggest financial institutions are not above the law," Treasury Secretary Scott Bessent said in the press release.
Bank of America said in a statement to CNBC that the bank has invested billions in compliance and is "far along" in remediation efforts.
The bank said the penalties will result in a $1.2 billion non-tax-deductible charge in its third-quarter results, reducing net income by about 17 cents per share. It said remediation costs are already reflected in its current expense base.
"Financial crime compliance is serious, and we are responsible for getting it right," spokesperson Christa Robinson said.
The bank's stock was down about 2% in after-hours trading on the news.
The new penalties will put renewed focus on the record of longtime CEO Brian Moynihan, who took over in 2010 and spent the early years of his tenure resolving tens of billions of dollars in mortgage-related legal and regulatory matters tied largely to decisions made before he became CEO.
For much of the past decade, Moynihan has emphasized what he calls "responsible growth," as Bank of America sought to distance itself from the risk-taking and legal problems that followed the 2008 financial crisis.
Moynihan is scheduled to appear on CNBC's "Squawk on the Street" at 10:20 a.m. ET Wednesday following the bank's earnings report.
Treasury says BofA "prioritized its revenues"
Treasury said the bank "prioritized its revenues" while minimizing the impact on compliance resources. The agency said the bank relied so heavily on law-enforcement inquiries and referrals from other financial institutions that regulators said it effectively outsourced part of its responsibility for detecting suspicious activity.
The penalty from Treasury's Financial Crimes Enforcement Network came in coordination with the Office of the Comptroller of the Currency, or OCC, an independent bureau within the department, which announced a $750 million civil money penalty against Bank of America.
That sum, which is credited as part of the $1.21 billion total, is the largest penalty OCC has ever levied, the office said.
The office accused the bank of serious violations of the Bank Secrecy Act and anti-money laundering rules, and of failing to fix its deficiencies in accordance with a cease-and-desist order it signed in 2024.
"Despite its obligation to the American people as a national-chartered, global systemically important bank, the bank's BSA/AML compliance program continues to reflect widespread breakdowns in internal controls, which threatens U.S. national and economic security," Comptroller of the Currency Jonathan Gould said in the OCC press release.
"The bank's poor response to its BSA deficiencies is unacceptable. The second largest bank's egregious and continued BSA violations warrant the OCC imposing its largest [civil money penalty] ever assessed against a bank," Gould said. "The OCC expects all banks to have an effective BSA/AML compliance program. Those that do not can expect swift and significant action from the OCC."
The 2024 order had identified a "breakdown" in Bank of America's systems for detecting and reporting suspicious activity, including a "systemic failure" to set appropriate thresholds for triggering investigations. It also said the bank had failed to make "acceptable substantial progress" correcting an earlier customer due diligence problem.
Treasury said the failures included red flags involving possible narcotics-trafficking proceeds, fraud and potential trade-based money laundering that were not addressed in a timely way.
Bank of America will also be required to conduct a third-party review for suspicious transactions that went undetected and undergo independent reviews of its transaction-monitoring and customer due-diligence programs, Treasury said.
– CNBC's Hugh Son contributed to this report.`,
    bodyJa: `Bank of America was hit with more than $1.2 billion in federal penalties Tuesday after regulators said the nation's second-largest bank failed for years to report more than $5 billion in suspicious transactions and fix longstanding anti-money-laundering problems.
More than $1 billion of the unreported activity involved national security and other high-priority risks, including Chinese money-laundering networks and activity tied to the southwest border, Treasury said in a press release.
The action also lands less than a day before the bank reports quarterly earnings Wednesday morning.
Treasury's Financial Crimes Enforcement Network, which enforces anti-money-laundering rules, said the $1.2 billion penalty is the third-largest in Treasury history. Treasury separately announced an $11.6 million settlement over sanctions violations.
As part of the settlement, Bank of America admitted that it willfully violated the Bank Secrecy Act by failing to maintain a compliant anti-money-laundering program, conduct required due diligence on foreign correspondent accounts and file suspicious activity reports, according to Treasury.
"Today's actions send a clear message that even the biggest financial institutions are not above the law," Treasury Secretary Scott Bessent said in the press release.
Bank of America said in a statement to CNBC that the bank has invested billions in compliance and is "far along" in remediation efforts.
The bank said the penalties will result in a $1.2 billion non-tax-deductible charge in its third-quarter results, reducing net income by about 17 cents per share. It said remediation costs are already reflected in its current expense base.
"Financial crime compliance is serious, and we are responsible for getting it right," spokesperson Christa Robinson said.
The bank's stock was down about 2% in after-hours trading on the news.
The new penalties will put renewed focus on the record of longtime CEO Brian Moynihan, who took over in 2010 and spent the early years of his tenure resolving tens of billions of dollars in mortgage-related legal and regulatory matters tied largely to decisions made before he became CEO.
For much of the past decade, Moynihan has emphasized what he calls "responsible growth," as Bank of America sought to distance itself from the risk-taking and legal problems that followed the 2008 financial crisis.
Moynihan is scheduled to appear on CNBC's "Squawk on the Street" at 10:20 a.m. ET Wednesday following the bank's earnings report.
Treasury says BofA "prioritized its revenues"
Treasury said the bank "prioritized its revenues" while minimizing the impact on compliance resources. The agency said the bank relied so heavily on law-enforcement inquiries and referrals from other financial institutions that regulators said it effectively outsourced part of its responsibility for detecting suspicious activity.
The penalty from Treasury's Financial Crimes Enforcement Network came in coordination with the Office of the Comptroller of the Currency, or OCC, an independent bureau within the department, which announced a $750 million civil money penalty against Bank of America.
That sum, which is credited as part of the $1.21 billion total, is the largest penalty OCC has ever levied, the office said.
The office accused the bank of serious violations of the Bank Secrecy Act and anti-money laundering rules, and of failing to fix its deficiencies in accordance with a cease-and-desist order it signed in 2024.
"Despite its obligation to the American people as a national-chartered, global systemically important bank, the bank's BSA/AML compliance program continues to reflect widespread breakdowns in internal controls, which threatens U.S. national and economic security," Comptroller of the Currency Jonathan Gould said in the OCC press release.
"The bank's poor response to its BSA deficiencies is unacceptable. The second largest bank's egregious and continued BSA violations warrant the OCC imposing its largest [civil money penalty] ever assessed against a bank," Gould said. "The OCC expects all banks to have an effective BSA/AML compliance program. Those that do not can expect swift and significant action from the OCC."
The 2024 order had identified a "breakdown" in Bank of America's systems for detecting and reporting suspicious activity, including a "systemic failure" to set appropriate thresholds for triggering investigations. It also said the bank had failed to make "acceptable substantial progress" correcting an earlier customer due diligence problem.
Treasury said the failures included red flags involving possible narcotics-trafficking proceeds, fraud and potential trade-based money laundering that were not addressed in a timely way.
Bank of America will also be required to conduct a third-party review for suspicious transactions that went undetected and undergo independent reviews of its transaction-monitoring and customer due-diligence programs, Treasury said.
– CNBC's Hugh Son contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/bank-of-america-treasury-money-laundering.html",
    publishedAt: "2026-10-13T20:45:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "more-republicans-come-out-against-trump-a4d58941",
    title: "More Republicans come out against Trump's diesel deal with Putin",
    titleJa: "More Republicans come out against Trump's diesel deal with Putin",
    summaryJa: "Senators told Trump, the deal with Russian President Vladimir Putin \"will not achieve just ends, nor will it benefit Americans.\"",
    bodyOriginal: `More Republicans are speaking out against President Donald Trump's decision to let Vladimir Putin's Russia temporarily export diesel fuel on the global market, expanding the bipartisan blowback over the deal.
Six GOP senators joined six of their Democratic colleagues in a letter Tuesday urging Trump to cancel the arrangement allowing Russia to supply 4.8 million metric tons, or nearly 36 million barrels, of diesel through mid-April.
"This deal is a gift to our adversary and a betrayal of our Allies; it should be rescinded," the lawmakers wrote.
Republican Sens. Thom Tillis of North Carolina, Susan Collins of Maine, Oklahoma's Alan Armstrong, Lisa Murkowski of Alaska, Kentucky's Mitch McConnell and John Cornyn of Texas signed on, adding to the list of of GOP Congress members who had earlier questioned the deal Trump announced Friday. Armstrong has roots in the energy industry, having been CEO of Williams Companies, the largest natural gas-focused company in the U.S.
They joined Democratic Sens. Richard Blumenthal of Connecticut, New Hampshire's Jeanne Shaheen, Richard Durbin of Illinois, Delaware's Chris Coons and Rhode Island's Sheldon Whitehouse and Jack Reed.
The White House did not immediately respond to CNBC's request for comment on the letter.
Collins, Murkowski and Tillis had already spoken out, joining a statement with Democrats on Sunday that urged Trump not to "provide Putin with a financial lifeline while Russia continues to kill Ukrainian civilians."
Republican Sen. John Curtis of Utah had also joined that statement.
Trump announced the Russia diesel deal after a call with Putin. The announcement quickly drew an unusually critical response from Ukrainian President Volodymyr Zelenskyy, who counts on continued U.S. support for his military. Trump, in turn, slammed Zelenskyy, saying Ukraine should get a new president.
Trump claimed in Friday's announcement that the deal will help quickly and sharply bring record-high diesel prices down. But oil analysts don't think the Russian supply will be nearly enough to make a meaningful impact on prices.
The 12 senators who signed Tuesday's letter to Trump agreed, writing that the deal "will not achieve just ends, nor will it benefit Americans."
"Allowing Russian-origin diesel into global markets will offer limited to no relief to Americans," the senators told Trump.
"It will have a negligible impact on fuel prices, but the revenues the Kremlin will receive from this agreement will undoubtedly finance its desired war of attrition and advance its security cooperation with China, Iran, and North Korea," they wrote.
The senators also alleged, as other critics already have, that the diesel deal contradicts the bipartisan Russian sanctions law that Trump signed into law a few weeks before announcing the deal, which required lifting existing sanctions on Russia.
"These authorities require you to apply economic pressure on Russia and the chief enablers of its war, in particular China, and thereby enhance your negotiating position to bring a swift end to this ruinous conflict," their letter read.
"Putin is a tyrant. Withdraw from this agreement, rescind General License No. 135, and execute the authorities provided under the Lindsey O. Graham Sanctioning Russia and Iran Act of 2026," they wrote.
"Maintain our legacy – and the duty America holds – as leader of the free world."
Trump has doubled down on his decision. "I made the right choice for the American People — ALWAYS, AMERICA FIRST!" he wrote on Truth Social on Monday.`,
    bodyJa: `More Republicans are speaking out against President Donald Trump's decision to let Vladimir Putin's Russia temporarily export diesel fuel on the global market, expanding the bipartisan blowback over the deal.
Six GOP senators joined six of their Democratic colleagues in a letter Tuesday urging Trump to cancel the arrangement allowing Russia to supply 4.8 million metric tons, or nearly 36 million barrels, of diesel through mid-April.
"This deal is a gift to our adversary and a betrayal of our Allies; it should be rescinded," the lawmakers wrote.
Republican Sens. Thom Tillis of North Carolina, Susan Collins of Maine, Oklahoma's Alan Armstrong, Lisa Murkowski of Alaska, Kentucky's Mitch McConnell and John Cornyn of Texas signed on, adding to the list of of GOP Congress members who had earlier questioned the deal Trump announced Friday. Armstrong has roots in the energy industry, having been CEO of Williams Companies, the largest natural gas-focused company in the U.S.
They joined Democratic Sens. Richard Blumenthal of Connecticut, New Hampshire's Jeanne Shaheen, Richard Durbin of Illinois, Delaware's Chris Coons and Rhode Island's Sheldon Whitehouse and Jack Reed.
The White House did not immediately respond to CNBC's request for comment on the letter.
Collins, Murkowski and Tillis had already spoken out, joining a statement with Democrats on Sunday that urged Trump not to "provide Putin with a financial lifeline while Russia continues to kill Ukrainian civilians."
Republican Sen. John Curtis of Utah had also joined that statement.
Trump announced the Russia diesel deal after a call with Putin. The announcement quickly drew an unusually critical response from Ukrainian President Volodymyr Zelenskyy, who counts on continued U.S. support for his military. Trump, in turn, slammed Zelenskyy, saying Ukraine should get a new president.
Trump claimed in Friday's announcement that the deal will help quickly and sharply bring record-high diesel prices down. But oil analysts don't think the Russian supply will be nearly enough to make a meaningful impact on prices.
The 12 senators who signed Tuesday's letter to Trump agreed, writing that the deal "will not achieve just ends, nor will it benefit Americans."
"Allowing Russian-origin diesel into global markets will offer limited to no relief to Americans," the senators told Trump.
"It will have a negligible impact on fuel prices, but the revenues the Kremlin will receive from this agreement will undoubtedly finance its desired war of attrition and advance its security cooperation with China, Iran, and North Korea," they wrote.
The senators also alleged, as other critics already have, that the diesel deal contradicts the bipartisan Russian sanctions law that Trump signed into law a few weeks before announcing the deal, which required lifting existing sanctions on Russia.
"These authorities require you to apply economic pressure on Russia and the chief enablers of its war, in particular China, and thereby enhance your negotiating position to bring a swift end to this ruinous conflict," their letter read.
"Putin is a tyrant. Withdraw from this agreement, rescind General License No. 135, and execute the authorities provided under the Lindsey O. Graham Sanctioning Russia and Iran Act of 2026," they wrote.
"Maintain our legacy – and the duty America holds – as leader of the free world."
Trump has doubled down on his decision. "I made the right choice for the American People — ALWAYS, AMERICA FIRST!" he wrote on Truth Social on Monday.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/trump-russia-diesel-republicans.html",
    publishedAt: "2026-10-13T18:19:42+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 9,
  },
  {
    id: "the-latest-inflation-data-is-expected-to-180042ce",
    title: "The latest inflation data is expected to show price increases are accelerating",
    titleJa: "The latest inflation data is expected to show price increases are accelerating",
    summaryJa: "Economists expect the consumer price index for September to rise 0.6% on the month and 3.6% year over year.",
    bodyOriginal: `Wednesday's closely watched reading on consumer prices could show intensifying inflationary pressures as energy costs keep climbing.
Economists polled by Dow Jones expect the headline consumer price index for September to rise 0.6% for the month and to increase 3.6% compared with a year ago. That 12-month number would signal that the rate of price growth is accelerating and moving further from the Federal Reserve's goal of 2%.
So-called core inflation, which strips out volatile food and energy prices, is expected to increase 0.2% from August and 2.5% on a 12-month basis. While that would mark a slight slowdown from the prior month, it would be an uptick in year-over-year inflation.
Upside risk
Oil-related prices could drive the headline figure even higher, said Joe Brusuelas, chief economist at RSM, a tax firm.
Energy costs have been among the biggest drivers of inflation since the U.S. war with Iran began earlier this year. President Donald Trump last week announced loosened diesel restrictions on Russia in a bid to juice the global oil trade, though analysts don't believe it will meaningfully bring down prices.
Prices for Brent crude, the global oil benchmark, climbed more than 14% in September, bringing its third-quarter advance to about 42%. Brent prices on Tuesday traded around $105 per barrel.
"We've got real upside risk on the September CPI," Brusuelas said. "Typically, when we have these moves in inflation, everyone's models undershoot the actual outcome."
Sticky oil prices could also push up costs for items in other, non-energy categories, according to Robert Sockin, chief U.S. economist at asset manager PGIM. In this scenario, it would become harder for the Fed to write off the energy prices surge as a short-term shock that won't necessitate interest rate increases.
After announcing its first increase in three years last month, the Federal Reserve signaled in its minutes from that meeting that it will likely have to hike rates again. Fed funds futures traders anticipate the central bank will next lift rates at its December policy meeting, according to CME's FedWatch tool.
"The list of reasons to hike rates in our view is long," Sockin said. "Ultimately, we have low confidence in the timing of the Fed's next move, but more conviction on the direction of travel."
Wednesday's release is the last reading on CPI before November's midterm elections, which could determine whether the Republican party will keep total control in Washington.
Economic confidence across political affiliation has fallen this year, according to the University of Michigan's consumer sentiment data. Compared with Democrats, Republican and independent voters have posted steeper declines in sentiment since the start of 2026, the data shows.
Economists forecast that the producer price index, a gauge of inflation facing wholesalers due on Thursday, will rise 0.6% from August to September and 5.5% on a 12-month basis. Both of those numbers would mark a modest acceleration in growth compared with August's release.`,
    bodyJa: `Wednesday's closely watched reading on consumer prices could show intensifying inflationary pressures as energy costs keep climbing.
Economists polled by Dow Jones expect the headline consumer price index for September to rise 0.6% for the month and to increase 3.6% compared with a year ago. That 12-month number would signal that the rate of price growth is accelerating and moving further from the Federal Reserve's goal of 2%.
So-called core inflation, which strips out volatile food and energy prices, is expected to increase 0.2% from August and 2.5% on a 12-month basis. While that would mark a slight slowdown from the prior month, it would be an uptick in year-over-year inflation.
Upside risk
Oil-related prices could drive the headline figure even higher, said Joe Brusuelas, chief economist at RSM, a tax firm.
Energy costs have been among the biggest drivers of inflation since the U.S. war with Iran began earlier this year. President Donald Trump last week announced loosened diesel restrictions on Russia in a bid to juice the global oil trade, though analysts don't believe it will meaningfully bring down prices.
Prices for Brent crude, the global oil benchmark, climbed more than 14% in September, bringing its third-quarter advance to about 42%. Brent prices on Tuesday traded around $105 per barrel.
"We've got real upside risk on the September CPI," Brusuelas said. "Typically, when we have these moves in inflation, everyone's models undershoot the actual outcome."
Sticky oil prices could also push up costs for items in other, non-energy categories, according to Robert Sockin, chief U.S. economist at asset manager PGIM. In this scenario, it would become harder for the Fed to write off the energy prices surge as a short-term shock that won't necessitate interest rate increases.
After announcing its first increase in three years last month, the Federal Reserve signaled in its minutes from that meeting that it will likely have to hike rates again. Fed funds futures traders anticipate the central bank will next lift rates at its December policy meeting, according to CME's FedWatch tool.
"The list of reasons to hike rates in our view is long," Sockin said. "Ultimately, we have low confidence in the timing of the Fed's next move, but more conviction on the direction of travel."
Wednesday's release is the last reading on CPI before November's midterm elections, which could determine whether the Republican party will keep total control in Washington.
Economic confidence across political affiliation has fallen this year, according to the University of Michigan's consumer sentiment data. Compared with Democrats, Republican and independent voters have posted steeper declines in sentiment since the start of 2026, the data shows.
Economists forecast that the producer price index, a gauge of inflation facing wholesalers due on Thursday, will rise 0.6% from August to September and 5.5% on a 12-month basis. Both of those numbers would mark a modest acceleration in growth compared with August's release.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/september-consumer-price-index-inflation.html",
    publishedAt: "2026-10-13T18:05:57+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "bumble-bought-for-1-3bn-in-bet-on-the-fu-28bf5453",
    title: "Bumble bought for $1.3bn in 'bet on the future of humanity'",
    titleJa: "Bumble bought for $1.3bn in 'bet on the future of humanity'",
    summaryJa: "The dating app which recently ditched its \"women-first\" chat rule has been bought by an investment firm.",
    bodyOriginal: `Bumble bought for $1.3bn in 'bet on the future of humanity'
- Published
Dating app Bumble has been bought for $1.3bn (£980m) in what the new owners called "a bet on the future of humanity".
Investment firm Ithaca Holdings is taking over the loss-making firm and it directors, Ravi Gupta and John Hegeman, will become co-chief executives of the company which once differentiated itself by having a "women-first" chat rule.
Bumble ditched the rule in August this year.
Whitney Wolfe Herd, Bumble's founder and current chief executive, said she would remain "actively involved" with the business she set up 12 years ago.
While it is unclear what Wolfe Herd's role at the dating app will be, she said she will work closely with the new owners.
Gupta and Hegeman said they wanted to use technology to "renew and accelerate businesses...in a world transformed by AI".
They said: "Technology should work in service of our deepest source of fulfillment, human connection and this investment is a bet on the future of humanity."
This contrasts with a recent debate over the safety of AI, with some experts claiming the speed of its development threatens the future of humanity.
Bumble's share price has soared as news of the deal began to emerge. The jump lifted its company valuation to over $580m but that is still far below a peak of more than $14bn it reached after it floated the business on the Nasdaq stock index in 2021.
Since becoming a public company, it has made an annual pre-tax profit only once, in 2023.
In the following two years, it reported steep losses, though during that period Bumble had been working to incorporate new technology, including AI, into its app.
Its chief executive in 2024, Lidiane Jones, told the BBC she believed AI had "exciting potential" in dating apps related to safety, and Bumble had been looking at research that found Gen Z and milliennials were interested in AI assistance with creating profiles.
This year, the dating app unveiled several new AI features, including profile guidance to help people create dating profiles.
Bumble was launched in 2014 by Wolfe Herd who built the brand around a distinctive feature that only allowed women to initiate conversations with matches.
It recently abandoned that rule, prompting debate among users over whether the app had lost what set it apart from rivals.
"Today, our community is asking for more flexibility, less pressure, and more opportunities to create real, meaningful connections and that is what this new experience provides," Wolfe Herd said in August.
Dating apps like Bumble have come under pressure in recent years as some younger users have grown disillusioned with browsing for dates.
Bumble said in 2025 that it would cut almost a third of its workforce as the industry grappled with what Wolfe Herd described as an "inflection point" in online dating.
Investments in other dating companies have also soured as apps have struggled to convince users to pay for their services.
Match Group - which owns apps including Tinder, OkCupid and Hinge - has also seen its shares fall sharply from their peak in 2021.
According to a report by media watchdog Ofcom in 2025, adults in the UK were spending less time on dating apps compared to three years earlier.
Some single people are instead turning to board game get-togethers, book clubs and other group activities in the hope of finding a partner.
Related topics
- Published2 August 2025
- Published26 July`,
    bodyJa: `Bumble bought for $1.3bn in 'bet on the future of humanity'
- Published
Dating app Bumble has been bought for $1.3bn (£980m) in what the new owners called "a bet on the future of humanity".
Investment firm Ithaca Holdings is taking over the loss-making firm and it directors, Ravi Gupta and John Hegeman, will become co-chief executives of the company which once differentiated itself by having a "women-first" chat rule.
Bumble ditched the rule in August this year.
Whitney Wolfe Herd, Bumble's founder and current chief executive, said she would remain "actively involved" with the business she set up 12 years ago.
While it is unclear what Wolfe Herd's role at the dating app will be, she said she will work closely with the new owners.
Gupta and Hegeman said they wanted to use technology to "renew and accelerate businesses...in a world transformed by AI".
They said: "Technology should work in service of our deepest source of fulfillment, human connection and this investment is a bet on the future of humanity."
This contrasts with a recent debate over the safety of AI, with some experts claiming the speed of its development threatens the future of humanity.
Bumble's share price has soared as news of the deal began to emerge. The jump lifted its company valuation to over $580m but that is still far below a peak of more than $14bn it reached after it floated the business on the Nasdaq stock index in 2021.
Since becoming a public company, it has made an annual pre-tax profit only once, in 2023.
In the following two years, it reported steep losses, though during that period Bumble had been working to incorporate new technology, including AI, into its app.
Its chief executive in 2024, Lidiane Jones, told the BBC she believed AI had "exciting potential" in dating apps related to safety, and Bumble had been looking at research that found Gen Z and milliennials were interested in AI assistance with creating profiles.
This year, the dating app unveiled several new AI features, including profile guidance to help people create dating profiles.
Bumble was launched in 2014 by Wolfe Herd who built the brand around a distinctive feature that only allowed women to initiate conversations with matches.
It recently abandoned that rule, prompting debate among users over whether the app had lost what set it apart from rivals.
"Today, our community is asking for more flexibility, less pressure, and more opportunities to create real, meaningful connections and that is what this new experience provides," Wolfe Herd said in August.
Dating apps like Bumble have come under pressure in recent years as some younger users have grown disillusioned with browsing for dates.
Bumble said in 2025 that it would cut almost a third of its workforce as the industry grappled with what Wolfe Herd described as an "inflection point" in online dating.
Investments in other dating companies have also soured as apps have struggled to convince users to pay for their services.
Match Group - which owns apps including Tinder, OkCupid and Hinge - has also seen its shares fall sharply from their peak in 2021.
According to a report by media watchdog Ofcom in 2025, adults in the UK were spending less time on dating apps compared to three years earlier.
Some single people are instead turning to board game get-togethers, book clubs and other group activities in the hope of finding a partner.
Related topics
- Published2 August 2025
- Published26 July`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm9qzwjgnjxlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-13T15:59:07+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e542/live/77558740-c724-11f1-a64c-550be9e3c66b.jpg",
    readTime: 9,
  },
  {
    id: "micron-seagate-western-digital-sink-as-c-3666b978",
    title: "Micron, Seagate, Western Digital sink as chip sell-off deepens",
    titleJa: "Micron, Seagate, Western Digital sink as chip sell-off deepens",
    summaryJa: "Technology stocks tumbled Tuesday as a sell-off in U.S. semiconductor shares spilled into Asian and European markets.",
    bodyOriginal: `Chip stocks fell on Tuesday, extending a sell-off sparked by worries over artificial intelligence financing and intensifying competition.
Memory chip giant Micron slipped about 5% while other memory-related names such as SanDisk, Seagate and Western Digital also sank. SanDisk fell 5% while Seagate and Western Digital both dropped 6%.
The slide, which followed declines on Wall Street on Monday, comes as investors assessed intensifying competition from China's ChangXin Memory Technologies, or CXMT.
Over the weekend, CXMT announced significant progress in developing a new chip architecture, designed to increase memory density by packing more data into a smaller space.
CXMT is China's leading rival to the likes of Micron and South Korean heavyweights SK Hynix and Samsung Electronics. Analysts broadly see CXMT as trailing the U.S. and South Korean memory leaders, which means any advancement from the Chinese firm could add more competition to the market leaders.
"Investors are jittery and looking for excuses to take profit on AI-related stocks that have outperformed this year, especially memory stocks," said UBP's senior equity advisor Vey-Sern Ling.
"In reality, while the Chinese memory makers can potentially become a threat to global demand-supply balance over time, in the short run they continue to face technology hurdles, especially for more advanced memory like HBM," Ling told CNBC via email.
CXMT shares closed 2.8% lower in Shanghai.
'Vulnerable' AI sentiment?
Phillip Wool, chief market strategist at Rayliant Global Advisors, said CXMT's breakthrough marked a significant milestone for Chinese chipmakers, demonstrating their ability to overcome technology restrictions and potentially challenge established players sooner than expected.
But he cautioned that the market reaction appeared disproportionate to the immediate competitive threat, given that CXMT has yet to demonstrate large-scale production and continues to lag Samsung and SK Hynix in market share.
"More importantly, we're not even talking about HBM here, and the Korean chipmakers are still unquestionably dominating that space, with very little threat at all from the likes of CXMT or anyone else for the foreseeable future," Wool said.
He said the sharp sell-off reflected broader anxiety over the AI trade rather than a fundamental shift in the competitive landscape.
"I read that more as a sign of how vulnerable AI sentiment is at this moment," Wool said, warning that volatility could persist as investors reassess chip demand and how long semiconductor manufacturers can sustain their pricing power.
The chief executives of Intel and Broadcom have warned that access to capital could emerge as a major headwind to the AI boom, even as demand for computing infrastructure continues to outstrip supply.
Investors are also looking ahead to a busy week of corporate earnings and U.S. inflation data, which could provide fresh clues on the outlook for interest rates that often have an inverse correlation with growth stocks.
Global tech stocks slump
Adding fuel to the sell-off was a post by Tesla and SpaceX boss Elon Musk, who said China has the ability to scale production once it figures out how to manufacture something.
"When China figures out how to manufacture a product, their ability to scale is often greater than the rest of the world combined," Musk said on Monday.
European chip stocks also sank in early morning trade, with semiconductor equipment maker ASML down 3.3%, and STMicroelectronics and German chip maker Infineon both down 5%. Dutch firms BE Semiconductor and ASM International were both around 4% lower at the open.
Shares of South Korean chip giant SK Hynix, a leading supplier of high-bandwidth memory chips used in artificial intelligence applications, plunged more than 10%, while rival Samsung Electronics shed 7.4% — both hitting their lowest levels since August. SK Hynix's U.S.-listed stock was down around 5% in premarket trading.
In Japan, shares of tech-focused investment giant SoftBank Group sank 8.5%. The group, which has significant exposure to the global AI industry through its huge investment in OpenAI, led a broader retreat in Japanese semiconductor and electronics shares.
Tokyo Electron, a major supplier of chipmaking equipment, dropped 7.2%, while Advantest, which makes semiconductor testing equipment, declined 2.9%. Other Japanese technology stocks also came under pressure. Lasertec fell over 5%, Disco lost 4.7% and Renesas Electronics shed 5.9%.
The declines followed a weak session for technology stocks on Wall Street, where the Nasdaq Composite dropped 0.44% on Monday. U.S. memory chipmaker Micron Technology slid 3.9% as`,
    bodyJa: `Chip stocks fell on Tuesday, extending a sell-off sparked by worries over artificial intelligence financing and intensifying competition.
Memory chip giant Micron slipped about 5% while other memory-related names such as SanDisk, Seagate and Western Digital also sank. SanDisk fell 5% while Seagate and Western Digital both dropped 6%.
The slide, which followed declines on Wall Street on Monday, comes as investors assessed intensifying competition from China's ChangXin Memory Technologies, or CXMT.
Over the weekend, CXMT announced significant progress in developing a new chip architecture, designed to increase memory density by packing more data into a smaller space.
CXMT is China's leading rival to the likes of Micron and South Korean heavyweights SK Hynix and Samsung Electronics. Analysts broadly see CXMT as trailing the U.S. and South Korean memory leaders, which means any advancement from the Chinese firm could add more competition to the market leaders.
"Investors are jittery and looking for excuses to take profit on AI-related stocks that have outperformed this year, especially memory stocks," said UBP's senior equity advisor Vey-Sern Ling.
"In reality, while the Chinese memory makers can potentially become a threat to global demand-supply balance over time, in the short run they continue to face technology hurdles, especially for more advanced memory like HBM," Ling told CNBC via email.
CXMT shares closed 2.8% lower in Shanghai.
'Vulnerable' AI sentiment?
Phillip Wool, chief market strategist at Rayliant Global Advisors, said CXMT's breakthrough marked a significant milestone for Chinese chipmakers, demonstrating their ability to overcome technology restrictions and potentially challenge established players sooner than expected.
But he cautioned that the market reaction appeared disproportionate to the immediate competitive threat, given that CXMT has yet to demonstrate large-scale production and continues to lag Samsung and SK Hynix in market share.
"More importantly, we're not even talking about HBM here, and the Korean chipmakers are still unquestionably dominating that space, with very little threat at all from the likes of CXMT or anyone else for the foreseeable future," Wool said.
He said the sharp sell-off reflected broader anxiety over the AI trade rather than a fundamental shift in the competitive landscape.
"I read that more as a sign of how vulnerable AI sentiment is at this moment," Wool said, warning that volatility could persist as investors reassess chip demand and how long semiconductor manufacturers can sustain their pricing power.
The chief executives of Intel and Broadcom have warned that access to capital could emerge as a major headwind to the AI boom, even as demand for computing infrastructure continues to outstrip supply.
Investors are also looking ahead to a busy week of corporate earnings and U.S. inflation data, which could provide fresh clues on the outlook for interest rates that often have an inverse correlation with growth stocks.
Global tech stocks slump
Adding fuel to the sell-off was a post by Tesla and SpaceX boss Elon Musk, who said China has the ability to scale production once it figures out how to manufacture something.
"When China figures out how to manufacture a product, their ability to scale is often greater than the rest of the world combined," Musk said on Monday.
European chip stocks also sank in early morning trade, with semiconductor equipment maker ASML down 3.3%, and STMicroelectronics and German chip maker Infineon both down 5%. Dutch firms BE Semiconductor and ASM International were both around 4% lower at the open.
Shares of South Korean chip giant SK Hynix, a leading supplier of high-bandwidth memory chips used in artificial intelligence applications, plunged more than 10%, while rival Samsung Electronics shed 7.4% — both hitting their lowest levels since August. SK Hynix's U.S.-listed stock was down around 5% in premarket trading.
In Japan, shares of tech-focused investment giant SoftBank Group sank 8.5%. The group, which has significant exposure to the global AI industry through its huge investment in OpenAI, led a broader retreat in Japanese semiconductor and electronics shares.
Tokyo Electron, a major supplier of chipmaking equipment, dropped 7.2%, while Advantest, which makes semiconductor testing equipment, declined 2.9%. Other Japanese technology stocks also came under pressure. Lasertec fell over 5%, Disco lost 4.7% and Renesas Electronics shed 5.9%.
The declines followed a weak session for technology stocks on Wall Street, where the Nasdaq Composite dropped 0.44% on Monday. U.S. memory chipmaker Micron Technology slid 3.9% as`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/sk-hynix-softbank-samsung-electronics-shares-tech-stocks-fall.html",
    publishedAt: "2026-10-13T13:51:11+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "martin-shkreli-violated-lifetime-pharma-a09ce3ad",
    title: "Martin Shkreli violated lifetime pharma industry ban, FTC and states say in contempt claim",
    titleJa: "Martin Shkreli violated lifetime pharma industry ban, FTC and states say in contempt claim",
    summaryJa: "Shkreli was banned from the pharmaceutical industry after a trial found that he organized an illegal scheme to perpetuate a monopoly for the drug Daraprim.",
    bodyOriginal: `The Federal Trade Commission and seven states asked a federal judge on Tuesday to hold notorious "Pharma bro" Martin Shkreli in contempt, alleging he "flagrantly and repeatedly violated" a 2022 civil court order that had banned him for life from the pharmaceutical industry.
The FTC and the states say Shkreli, since being released from prison in May 2022, violated that court order by publicly trading in at least 60 pharmaceutical industry stocks and "broadcasting his opinions about the business and management of many pharmaceutical industry companies," according to a press release.
The contempt filing asks a judge to order Shkreli to "divest any pharmaceutical company stocks he currently owns" and "pay a fine equal to his profits from any pharmaceutical company stock trading (plus prejudgment interest) without the ability to account for offsetting losses."
The filing also asks that a judge make Shkreli "face clear and escalating consequences for any future violations, including financial penalties and potential incarceration."
FTC Commissioner Mark Meador said in a statement, "A lifetime industry ban is only effective if breaches are met with consequences commensurate with the seriousness of the order."
The court order stems from a finding that Shkreli organized an anti-competitive scheme to perpetuate his company's monopoly in the anti-parasitic drug Daraprim. Shkreli had hiked the price of Daraprim from $17.50 per tablet to a whopping $750 per pill.
In addition to banning him from the drug industry for life, a judge ordered Shkreli to disgorge more than $64 million.
The civil case that led to the order is unrelated to the criminal case that ended with Shkreli's conviction in 2017 on securities fraud charges related to hedge funds he once operated and another drug company he founded. Shkreli was sentenced to seven years in federal prison in 2018, and was released in 2022 with credit for time locked up before he was sentenced and other factors.
"After a full trial, the court found that Martin Shkreli's conduct drove up prescription drug costs for American patients and blocked the entry of lower-cost generics,"Daniel Guarnera, director of the FTC's Bureau of Competition, said in a statement on Tuesday.
"When judgment is entered by a court, whether it's a settlement or an order following a trial, defendants must fulfill their obligations," Guarnera said. "Today's action should serve as notice that the FTC will not hesitate to enforce violations of court orders."`,
    bodyJa: `The Federal Trade Commission and seven states asked a federal judge on Tuesday to hold notorious "Pharma bro" Martin Shkreli in contempt, alleging he "flagrantly and repeatedly violated" a 2022 civil court order that had banned him for life from the pharmaceutical industry.
The FTC and the states say Shkreli, since being released from prison in May 2022, violated that court order by publicly trading in at least 60 pharmaceutical industry stocks and "broadcasting his opinions about the business and management of many pharmaceutical industry companies," according to a press release.
The contempt filing asks a judge to order Shkreli to "divest any pharmaceutical company stocks he currently owns" and "pay a fine equal to his profits from any pharmaceutical company stock trading (plus prejudgment interest) without the ability to account for offsetting losses."
The filing also asks that a judge make Shkreli "face clear and escalating consequences for any future violations, including financial penalties and potential incarceration."
FTC Commissioner Mark Meador said in a statement, "A lifetime industry ban is only effective if breaches are met with consequences commensurate with the seriousness of the order."
The court order stems from a finding that Shkreli organized an anti-competitive scheme to perpetuate his company's monopoly in the anti-parasitic drug Daraprim. Shkreli had hiked the price of Daraprim from $17.50 per tablet to a whopping $750 per pill.
In addition to banning him from the drug industry for life, a judge ordered Shkreli to disgorge more than $64 million.
The civil case that led to the order is unrelated to the criminal case that ended with Shkreli's conviction in 2017 on securities fraud charges related to hedge funds he once operated and another drug company he founded. Shkreli was sentenced to seven years in federal prison in 2018, and was released in 2022 with credit for time locked up before he was sentenced and other factors.
"After a full trial, the court found that Martin Shkreli's conduct drove up prescription drug costs for American patients and blocked the entry of lower-cost generics,"Daniel Guarnera, director of the FTC's Bureau of Competition, said in a statement on Tuesday.
"When judgment is entered by a court, whether it's a settlement or an order following a trial, defendants must fulfill their obligations," Guarnera said. "Today's action should serve as notice that the FTC will not hesitate to enforce violations of court orders."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/martin-shkreli-ftc-pharma-contempt.html",
    publishedAt: "2026-10-13T13:39:37+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 6,
  },
  {
    id: "paul-tudor-jones-says-2027-could-be-a-re-eefa0875",
    title: "Paul Tudor Jones says 2027 could be a really challenging year for the stock market",
    titleJa: "Paul Tudor Jones says 2027 could be a really challenging year for the stock market",
    summaryJa: "The billionaire investor said that corporate buybacks, along with mergers and acquisitions, that have been a tailwind for the bull market is about to turn.",
    bodyOriginal: `Legendary hedge fund manager Paul Tudor Jones told CNBC that next year could be a tough one for the stock market because of increased equity supply from big tech IPOs coming down the pipe, as well as a potential reckoning from the ballooning U.S. fiscal deficit.
"2027 is going to be really, really challenging for the stock market," Jones told "Squawk Box" on Tuesday. "You've probably got the most negative flow picture for the U.S. stock market that we've had, say, since 2002."
The founder and chief investment officer of Tudor Investment said that corporate buybacks, along with mergers and acquisitions, have been a tailwind for the stock market for most of this four-year bull market as they decreased the equity supply.
That tide is now turning against the market with major offerings ahead in the AI space from Anthropic and OpenAI, along with one just finished in SpaceX. There will also likely be more secondary offerings from companies in order to raise money for the AI buildout, said Jones. It all adds up to an increased equity supply picture that could weight on prices.
The billionaire hedge fund manager's comments come as investors worry that a bull market now in its fourth year could start to dwindle and run out of steam as concerns grow around mounting inflation, higher bond yields and a more hawkish Federal Reserve.
Jones repeated that the current period in the market is akin to 1999, just about a year before the dot-com bubble burst in 2000. He noted the bifurcation in the current market between those companies benefitting from the AI boom and those that aren't.
Deficit concern
He also added that a ballooning fiscal deficit are among the dangers for the current stock market, for which he thinks there could be a reckoning.
"We're never going to fix these deficits until the market makes us to. It's going to be just like 2008 and TARP [Troubled Asset Relief Program]. So that's the reality. No politician is going to voluntarily raise taxes or cut spending. They're going to be forced to," he said.
"And the only question is, are we now at that tipping point where the market's about to do that? And if you put a gun to my head, I'd say 60-40, we're down that path," he continued.
Oil, which he is long, is another headwind for the market, according to the hedge fund manager. He argued that prices could rally another $20 to $25 after the midterms, a scenario that the stock market will "hate" if it comes to pass.
"I'll be short the whole year. There just — there's little value," Jones said. "You had all this issuance, all these IPOs in '98 and '99, and really 2000, 2001, 2002. Those were the easiest years to be short because you kept having these unlocks that just kept adding supply to the market."`,
    bodyJa: `Legendary hedge fund manager Paul Tudor Jones told CNBC that next year could be a tough one for the stock market because of increased equity supply from big tech IPOs coming down the pipe, as well as a potential reckoning from the ballooning U.S. fiscal deficit.
"2027 is going to be really, really challenging for the stock market," Jones told "Squawk Box" on Tuesday. "You've probably got the most negative flow picture for the U.S. stock market that we've had, say, since 2002."
The founder and chief investment officer of Tudor Investment said that corporate buybacks, along with mergers and acquisitions, have been a tailwind for the stock market for most of this four-year bull market as they decreased the equity supply.
That tide is now turning against the market with major offerings ahead in the AI space from Anthropic and OpenAI, along with one just finished in SpaceX. There will also likely be more secondary offerings from companies in order to raise money for the AI buildout, said Jones. It all adds up to an increased equity supply picture that could weight on prices.
The billionaire hedge fund manager's comments come as investors worry that a bull market now in its fourth year could start to dwindle and run out of steam as concerns grow around mounting inflation, higher bond yields and a more hawkish Federal Reserve.
Jones repeated that the current period in the market is akin to 1999, just about a year before the dot-com bubble burst in 2000. He noted the bifurcation in the current market between those companies benefitting from the AI boom and those that aren't.
Deficit concern
He also added that a ballooning fiscal deficit are among the dangers for the current stock market, for which he thinks there could be a reckoning.
"We're never going to fix these deficits until the market makes us to. It's going to be just like 2008 and TARP [Troubled Asset Relief Program]. So that's the reality. No politician is going to voluntarily raise taxes or cut spending. They're going to be forced to," he said.
"And the only question is, are we now at that tipping point where the market's about to do that? And if you put a gun to my head, I'd say 60-40, we're down that path," he continued.
Oil, which he is long, is another headwind for the market, according to the hedge fund manager. He argued that prices could rally another $20 to $25 after the midterms, a scenario that the stock market will "hate" if it comes to pass.
"I'll be short the whole year. There just — there's little value," Jones said. "You had all this issuance, all these IPOs in '98 and '99, and really 2000, 2001, 2002. Those were the easiest years to be short because you kept having these unlocks that just kept adding supply to the market."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/paul-tudor-jones-2027-really-challenging-year.html",
    publishedAt: "2026-10-13T13:33:24+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "poundland-in-rescue-talks-as-owners-seek-ded2f4d9",
    title: "Poundland in rescue talks as owners seek buyer",
    titleJa: "Poundland in rescue talks as owners seek buyer",
    summaryJa: "The leadership team is attempting a buyout, but a union has warned the retailer could fall into administration instead.",
    bodyOriginal: `Poundland in rescue talks as owners seek buyer
- Published
Retail chain Poundland is in talks with potential buyers as it seeks a rescue deal, it has confirmed.
Executives are working with an Irish property development group on a management buyout, as first reported by Sky News, external.
But a union representing shopworkers warned that the retailer could fall into administration if that deal falls through, putting thousands of jobs at risk.
This outcome would be "a disaster for our members", the Usdaw union said.
Poundland has about 600 stores in the UK and Ireland, and 12,000 employees.
The chain has been struggling for a number of years due to pressures including rising costs and competition.
However, it expects sales to have grown more than 3% in 2026 compared with the previous year, which managing director Barry Williams said earlier this month was evidence that its recovery plan "is working".
The retailer was sold for £1 last summer by previous owner Pepco to US investment firm Gordon Brothers.
The current owners are in the process of seeking buyers, with the Poundland management attempting a buyout, a spokesman said.
Mr Williams, along with the firm's leadership team and Andy Bond, a former chairman of Pepco, have been working with Irish real estate firm Martin Property Group on a management buyout.
Martin Property Group is the management team's "preferred partner", the spokesman said, but the team will "work with whoever can deliver the best result for the business, colleagues and suppliers and build on the successful recovery that's already taking shape," he added.
However, Bally Auluk, a national officer at Usdaw, said there are "deep concerns that the business could go into administration" should this buyout fail.
"We are aware that a management buy-out has been attempted and we are told that their offers are being turned down," he added.
A Poundland source disputed this, however, saying the Martin Property Group is part of the sale process and remains the management team's preferred partner.
Retail analyst Catherine Shuttleworth said there were "tough times" on the High Street for all retailers.
She said retailers were struggling with "significantly subdued consumer confidence as prices continue to rise" due to higher fuel costs.
Poundland itself faces intense competition from rivals including B&M, Aldi, Lidl and from online retailers including Temu and TikTok Shop.
The business "lost its strong £1 identity leaving shoppers to think it was getting too expensive", Shuttleworth said, and a costly expansion into clothing and frozen food under past management had not been successful.
However, increased sales this year showed a deal with Mr Williams as boss "would make good sense", she added.`,
    bodyJa: `Poundland in rescue talks as owners seek buyer
- Published
Retail chain Poundland is in talks with potential buyers as it seeks a rescue deal, it has confirmed.
Executives are working with an Irish property development group on a management buyout, as first reported by Sky News, external.
But a union representing shopworkers warned that the retailer could fall into administration if that deal falls through, putting thousands of jobs at risk.
This outcome would be "a disaster for our members", the Usdaw union said.
Poundland has about 600 stores in the UK and Ireland, and 12,000 employees.
The chain has been struggling for a number of years due to pressures including rising costs and competition.
However, it expects sales to have grown more than 3% in 2026 compared with the previous year, which managing director Barry Williams said earlier this month was evidence that its recovery plan "is working".
The retailer was sold for £1 last summer by previous owner Pepco to US investment firm Gordon Brothers.
The current owners are in the process of seeking buyers, with the Poundland management attempting a buyout, a spokesman said.
Mr Williams, along with the firm's leadership team and Andy Bond, a former chairman of Pepco, have been working with Irish real estate firm Martin Property Group on a management buyout.
Martin Property Group is the management team's "preferred partner", the spokesman said, but the team will "work with whoever can deliver the best result for the business, colleagues and suppliers and build on the successful recovery that's already taking shape," he added.
However, Bally Auluk, a national officer at Usdaw, said there are "deep concerns that the business could go into administration" should this buyout fail.
"We are aware that a management buy-out has been attempted and we are told that their offers are being turned down," he added.
A Poundland source disputed this, however, saying the Martin Property Group is part of the sale process and remains the management team's preferred partner.
Retail analyst Catherine Shuttleworth said there were "tough times" on the High Street for all retailers.
She said retailers were struggling with "significantly subdued consumer confidence as prices continue to rise" due to higher fuel costs.
Poundland itself faces intense competition from rivals including B&M, Aldi, Lidl and from online retailers including Temu and TikTok Shop.
The business "lost its strong £1 identity leaving shoppers to think it was getting too expensive", Shuttleworth said, and a costly expansion into clothing and frozen food under past management had not been successful.
However, increased sales this year showed a deal with Mr Williams as boss "would make good sense", she added.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckr5ydvvln0mo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-13T12:17:17+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c9b1/live/c0667080-c6e7-11f1-bf38-57dc5cd42af2.jpg",
    readTime: 7,
  },
  {
    id: "three-things-we-ve-learnt-about-the-uk-e-4fc84634",
    title: "Three things we've learnt about the UK economy from the IMF",
    titleJa: "Three things we've learnt about the UK economy from the IMF",
    summaryJa: "The influential economics body has upgraded its UK growth forecast for this year, but risks remain.",
    bodyOriginal: `Three things we've learnt about the UK economy from the IMF
- Published
Countries around the world have had their future economic prospects assessed by influential body, the International Monetary Fund (IMF).
What the IMF says matters – it aims to keep the global economy stable and its twice-yearly forecasts are one of the most authoritative looks at what is really going on around the world.
Yet like all forecasts they can also turn out to be incorrect, so they shouldn't be treated as gospel.
Here are three things we've learnt about the UK from the IMF's latest report.
1. The UK is weathering the Iran war better than expected
The global economy has been rocked by the US-Israel war with Iran.
The transportation and production of energy in the Middle East has been severely disrupted, causing oil prices to jump and inflation to rise.
To calm the rate of price rises, central banks, including the Bank of England, are expected to hike interest rates in the coming months.
Despite all this, the IMF said the global economy is doing much better than expected, partly because of the surge of investment into artificial intelligence (AI).
And this is good news for the UK. The IMF said its economy would expand by 1.3% in 2026, up from the 1% it predicted in July, before slowing in 2027.
A growing economy means companies are investing more and hiring more people while shoppers have more money to spend. A shrinking economy means the reverse is true.
2. The UK is doing better than other major economies
There is increased concern about how much money countries are borrowing, but the IMF said the UK is doing better than all other major economies at this.
The IMF said the UK "basically stands out, along with India" when it comes to addressing the problem and by 2031 it is projected to have the lowest annual borrowing of the G7 group of countries, which includes Canada, France, Germany, Italy, Japan and the US.
Sir Howard Davies, former deputy governor of the Bank of England, said this was largely because the UK has a government with a majority which has committed to tackling the situation, which it is expected to achieve either through tax rises, cuts to public services, or a mix of both.
By contrast, he says the US has said little about reducing its deficit, while France and Germany don't have majority governments.
"So, we [the UK] are not great students, but we look somewhat better than some of the others we are sharing the class with," he said.
Meanwhile, the IMF's growth forecasts for the UK mean it is expected to have the second-fastest growing economy in the G7 this year along with Germany.
Sir Howard believes this should also be seen in context.
"We're still growing slowly. It's almost like saying we're winning a slow bicycle race here because other people are going backwards a bit more rapidly than we are."
3. But things could get worse
While the IMF boosted its projection for the UK's growth in 2026, it slightly downgraded its forecasts for next year.
While the UK has handled the economic fallout from the Iran war better than expected so far, it says this will change next year as high energy prices and elevated interest rates affect how much people spend in shops and how much companies are willing to invest.
In addition, the IMF has said households are likely to continue feeling the pinch of rising prices. It forecasts inflation in the UK will average 3.3% this year and it has raised its estimate for next year to 2.8% from its previous prediction of 2.4%.
"There will be increasing inflationary pressure put on the UK and the Bank of England will have to consider further rate rises," says Tim Armitage, investment strategist at Quilter Cheviot.
He added that at least one rate rise is predicted this year, with more expected to come next year.
- Published4 hours ago`,
    bodyJa: `Three things we've learnt about the UK economy from the IMF
- Published
Countries around the world have had their future economic prospects assessed by influential body, the International Monetary Fund (IMF).
What the IMF says matters – it aims to keep the global economy stable and its twice-yearly forecasts are one of the most authoritative looks at what is really going on around the world.
Yet like all forecasts they can also turn out to be incorrect, so they shouldn't be treated as gospel.
Here are three things we've learnt about the UK from the IMF's latest report.
1. The UK is weathering the Iran war better than expected
The global economy has been rocked by the US-Israel war with Iran.
The transportation and production of energy in the Middle East has been severely disrupted, causing oil prices to jump and inflation to rise.
To calm the rate of price rises, central banks, including the Bank of England, are expected to hike interest rates in the coming months.
Despite all this, the IMF said the global economy is doing much better than expected, partly because of the surge of investment into artificial intelligence (AI).
And this is good news for the UK. The IMF said its economy would expand by 1.3% in 2026, up from the 1% it predicted in July, before slowing in 2027.
A growing economy means companies are investing more and hiring more people while shoppers have more money to spend. A shrinking economy means the reverse is true.
2. The UK is doing better than other major economies
There is increased concern about how much money countries are borrowing, but the IMF said the UK is doing better than all other major economies at this.
The IMF said the UK "basically stands out, along with India" when it comes to addressing the problem and by 2031 it is projected to have the lowest annual borrowing of the G7 group of countries, which includes Canada, France, Germany, Italy, Japan and the US.
Sir Howard Davies, former deputy governor of the Bank of England, said this was largely because the UK has a government with a majority which has committed to tackling the situation, which it is expected to achieve either through tax rises, cuts to public services, or a mix of both.
By contrast, he says the US has said little about reducing its deficit, while France and Germany don't have majority governments.
"So, we [the UK] are not great students, but we look somewhat better than some of the others we are sharing the class with," he said.
Meanwhile, the IMF's growth forecasts for the UK mean it is expected to have the second-fastest growing economy in the G7 this year along with Germany.
Sir Howard believes this should also be seen in context.
"We're still growing slowly. It's almost like saying we're winning a slow bicycle race here because other people are going backwards a bit more rapidly than we are."
3. But things could get worse
While the IMF boosted its projection for the UK's growth in 2026, it slightly downgraded its forecasts for next year.
While the UK has handled the economic fallout from the Iran war better than expected so far, it says this will change next year as high energy prices and elevated interest rates affect how much people spend in shops and how much companies are willing to invest.
In addition, the IMF has said households are likely to continue feeling the pinch of rising prices. It forecasts inflation in the UK will average 3.3% this year and it has raised its estimate for next year to 2.8% from its previous prediction of 2.4%.
"There will be increasing inflationary pressure put on the UK and the Bank of England will have to consider further rate rises," says Tim Armitage, investment strategist at Quilter Cheviot.
He added that at least one rate rise is predicted this year, with more expected to come next year.
- Published4 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmly05l1g15yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-13T11:58:43+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9039/live/426755d0-c6fd-11f1-b4dd-e786ec6f11b1.jpg",
    readTime: 10,
  },
  {
    id: "iran-reportedly-fortifies-nuclear-sites-da62fb3a",
    title: "Iran reportedly fortifies nuclear sites as it prepares for possible U.S. strikes after midterms",
    titleJa: "Iran reportedly fortifies nuclear sites as it prepares for possible U.S. strikes after midterms",
    summaryJa: "A Saudi-led coalition fighting the Houthis – a Yemeni militant group backed by Tehran – said it had intercepted another attack on Riyadh.",
    bodyOriginal: `Iran is reportedly working to bolster its military capabilities in preparation for possible renewed U.S. attacks after the November midterm elections.
The Wall Street Journal reported Tuesday that the Islamic Republic has been strengthening defenses around sensitive locations like nuclear sites, and telling regional officials that Tehran will respond to any new U.S. strikes with retaliatory measures across the Middle East.
The WSJ's report also said the Iranian regime is preparing its population for war by holding rallies, sending paramilitaries to read war stories to young children and advertising training in firing defensive missiles.
U.S. President Donald Trump said Thursday that American forces would not attack Iran before the congressional midterm elections, which will take place on Nov. 3.
The Iranian and U.S. governments did not immediately respond to requests for comment on the WSJ report.
Houthi attacks on Riyadh
Meanwhile, a Saudi-led coalition fighting the Houthis – a Yemeni militant group backed by Tehran – said it had intercepted a ballistic missile shot at Riyadh, the Saudi capital, on Monday, news agency Reuters reported.
The Houthis have been attacking the Saudi capital since last week, launching multiple strikes on energy facilities and airports. One airport attack resulted in multiple deaths, including a pilot working for Saudi carrier Saudia.
The closure of King Khalid International Airport in Riyadh has been extended until Saturday.
On Monday, the U.S. Federal Aviation Administration urged airlines to exercise caution when flying above or near Saudi Arabia.
Iran-linked U.K. base threat
U.K. Prime Minister Andy Burnham told British lawmakers on Monday that an attempted attack on an air force base in England was "almost certainly directed by Iran's Islamic Revolutionary Guard."
Ed Miliband, the U.K.'s foreign minister, said he had summoned the Iranian ambassador to stress that "Britain will not tolerate threats on our soil."
British police arrested five men on Sept. 27 on suspicion of terrorism offenses over an alleged threat to RAF Fairford in the west of England, a Royal Air Force base that the U.S. Air Force has used to strike Iranian missile sites.
Trump later said the U.S. had moved all its long-range bombers out of the U.K. in response to "a threat."`,
    bodyJa: `Iran is reportedly working to bolster its military capabilities in preparation for possible renewed U.S. attacks after the November midterm elections.
The Wall Street Journal reported Tuesday that the Islamic Republic has been strengthening defenses around sensitive locations like nuclear sites, and telling regional officials that Tehran will respond to any new U.S. strikes with retaliatory measures across the Middle East.
The WSJ's report also said the Iranian regime is preparing its population for war by holding rallies, sending paramilitaries to read war stories to young children and advertising training in firing defensive missiles.
U.S. President Donald Trump said Thursday that American forces would not attack Iran before the congressional midterm elections, which will take place on Nov. 3.
The Iranian and U.S. governments did not immediately respond to requests for comment on the WSJ report.
Houthi attacks on Riyadh
Meanwhile, a Saudi-led coalition fighting the Houthis – a Yemeni militant group backed by Tehran – said it had intercepted a ballistic missile shot at Riyadh, the Saudi capital, on Monday, news agency Reuters reported.
The Houthis have been attacking the Saudi capital since last week, launching multiple strikes on energy facilities and airports. One airport attack resulted in multiple deaths, including a pilot working for Saudi carrier Saudia.
The closure of King Khalid International Airport in Riyadh has been extended until Saturday.
On Monday, the U.S. Federal Aviation Administration urged airlines to exercise caution when flying above or near Saudi Arabia.
Iran-linked U.K. base threat
U.K. Prime Minister Andy Burnham told British lawmakers on Monday that an attempted attack on an air force base in England was "almost certainly directed by Iran's Islamic Revolutionary Guard."
Ed Miliband, the U.K.'s foreign minister, said he had summoned the Iranian ambassador to stress that "Britain will not tolerate threats on our soil."
British police arrested five men on Sept. 27 on suspicion of terrorism offenses over an alleged threat to RAF Fairford in the west of England, a Royal Air Force base that the U.S. Air Force has used to strike Iranian missile sites.
Trump later said the U.S. had moved all its long-range bombers out of the U.K. in response to "a threat."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/13/iran-us-war-houthis-saudi-arabia-airport.html",
    publishedAt: "2026-10-13T11:53:45+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "ba-flight-forced-to-turn-back-over-crack-c02a119d",
    title: "BA flight forced to turn back over cracked window",
    titleJa: "BA flight forced to turn back over cracked window",
    summaryJa: "British Airways said the plane landed safely at Gatwick and passengers were due to resume their journey.",
    bodyOriginal: `BA flight forced to turn back over cracked window
- Published
A British Airways flight en route to Portugal was forced to return to Gatwick Airport on Tuesday due to a minor technical issue, reported to be a cracked window.
Flight BA2660 was heading to Faro in the Algarve but diverted over north-western France in order to return to London Gatwick.
AirNav Radar, a flight data provider, posted on X that "a passenger window is cracked. Flight deck going through checks before deciding were to divert".
A spokesperson for British Airways said the plane landed safely at Gatwick due to a "minor technical issue" and passengers were due to resume their journey.
"We have apologised to customers for the delay to their journey, and our teams are working hard to get their travel plans back on track," they said.
Airnav Radar reported that the BA Airbus A321 squawked the 7700 emergency code, which is used when there are mechanical or technical problems on board aircraft.
Last week, a BA flight bound for Chicago spent five hours circling over Ireland, before turning back and landing at London Heathrow, where it had taken off.
The flight issued an emergency alert and passengers reported oxygen masks dropped in the cabin, as well as turbulence. Tracking data showed it rapidly descended from 37,000 feet to 9,000 feet.
And in August Serbian national Ljubisa Karović's head and right shoulder were sucked out of the window on a Ryanair flight, leaving him "seriously injured and in shock".
Ryanair subsequently said the window may have been damaged by a foreign object.
Additional reporting by Emily Coady-Stemp
Related topics
- Published21 July`,
    bodyJa: `BA flight forced to turn back over cracked window
- Published
A British Airways flight en route to Portugal was forced to return to Gatwick Airport on Tuesday due to a minor technical issue, reported to be a cracked window.
Flight BA2660 was heading to Faro in the Algarve but diverted over north-western France in order to return to London Gatwick.
AirNav Radar, a flight data provider, posted on X that "a passenger window is cracked. Flight deck going through checks before deciding were to divert".
A spokesperson for British Airways said the plane landed safely at Gatwick due to a "minor technical issue" and passengers were due to resume their journey.
"We have apologised to customers for the delay to their journey, and our teams are working hard to get their travel plans back on track," they said.
Airnav Radar reported that the BA Airbus A321 squawked the 7700 emergency code, which is used when there are mechanical or technical problems on board aircraft.
Last week, a BA flight bound for Chicago spent five hours circling over Ireland, before turning back and landing at London Heathrow, where it had taken off.
The flight issued an emergency alert and passengers reported oxygen masks dropped in the cabin, as well as turbulence. Tracking data showed it rapidly descended from 37,000 feet to 9,000 feet.
And in August Serbian national Ljubisa Karović's head and right shoulder were sucked out of the window on a Ryanair flight, leaving him "seriously injured and in shock".
Ryanair subsequently said the window may have been damaged by a foreign object.
Additional reporting by Emily Coady-Stemp
Related topics
- Published21 July`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj1dwrxq1wndo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-13T11:48:07+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0d81/live/e303dfe0-c702-11f1-9783-ed95709f9dec.jpg",
    readTime: 4,
  },
  {
    id: "uk-growth-forecast-upgraded-but-higher-e-4ed04e27",
    title: "UK growth forecast upgraded but higher energy prices to hit economy next year",
    titleJa: "UK growth forecast upgraded but higher energy prices to hit economy next year",
    summaryJa: "The prediction from the IMF comes as final preparations are being made for the first Budget under Prime Minister Andy Burnham.",
    bodyOriginal: `UK growth forecast upgraded but higher energy prices to hit economy next year
- Published
The UK economy is forecast to grow by more than previously expected this year before higher energy prices and interest rates hit the economy in 2027, the International Monetary Fund (IMF) said.
The organisation's latest report, which is closely watched by the government, said the UK economy would expand by 1.3% in 2026, up from the 1% it predicted in July, before slowing in 2027.
Economies across the world have proved more resilient to the energy price shock caused by the US-Iran war, the IMF said, but it warned the economic fallout from the conflict remained "highly uncertain".
Chancellor John Healey said the government would look to "provide some breathing space" for households in the Budget.
Healey is making the final preparations to Andy Burnham's new-look government's tax and spending plans, which will be announced on 28 October.
Government borrowing costs have surged, placing pressure on the chancellor to ensure his plans are credible in the eyes of financial markets, which the UK relies on to borrow money.
But IMF chief economist Silvana Tenreyro told BBC News on Tuesday that the UK's process of managing its debts is now leading the major G7 economies.
"As you know, the UK has already started the consolidation process and it is the country that basically stands out, along with India", she said.
The organisation said the UK is one of the only major economies on course to stabilise levels of national debt. The UK is also projected to have the lowest annual borrowing in the G7 in 2031.
Asked if the UK was one of the countries the IMF was telling to reduce borrowing, Tenreyro said that the country had begun the process already and should "stay the course".
The head of the IMF has previously called on the world's advanced economies to cut borrowing and reduce debt levels.
While the IMF's forecasts are closely watched, the figures are only a prediction, a best estimate, of what will happen in the future. Forecasts often turn out to be incorrect due to world events.
Also, the chancellor's spending decisions at the Budget will be based on predictions from the UK's official forecaster, the Office for Budget Responsibility, not the IMF.
The predictions in the IMF's latest World Economic Outlook suggest:
the UK is expected to have the second-fastest growing economy in the G7 this year along with Germany
UK growth is set to slow next year to 1.2% as higher energy prices and long-term interest rates hit household spending and business investment
UK inflation is expected to average 3.3% this year, and the IMF has increased its forecast for inflation next year to 2.8%.
the IMF said the global economy was "proving resilient" despite the ongoing war in the Middle East, helped by the investment surge in AI.
'Slow bicycle race'
Healey acknowledged that wars in the Middle East and Europe were "hitting people in the UK and around the world", but added that "Britain's economy is showing strong international resilience".
When the economy is growing, businesses tend to invest more, more jobs are created and people, on average, tend to feel better off. The opposite can occur if the economy stagnates or shrinks.
Sir Howard Davies, former deputy governor of the Bank of England, told the BBC the IMF's growth forecast was "better than it might have been", but noted that for 2027 it remained "more pessimistic".
"We're still growing slowly. It's almost like saying we're winning a slow bicycle race here because other people are going backwards a bit more rapidly than we are," he added.
Sir Howard said the UK was "a bit of a sideshow" when it comes to the global economy and the IMF was more focused on how much the US is adding to its debt pile.
"That is what is putting pressure on interest rates all over the world and that is what is affecting us as well. Unless the US does something about its deficit, we can expect interest rates to be higher, which of course increases our debt interest costs," he said.
He added that the IMF was giving the UK credit in its forecast for tax rises which it might not end up actually putting through.
Economists have suggested Healey faces having to find £35bn to avoid cuts to public spending while meeting defence promises in his first Budget.
On Tuesday, the Resolution Foundation called on the chancellor to "make repairs" to the public finances, but said well-targeted support was needed for those "struggling to heat their homes".
Andrew Griffith, Conservative shadow chancellor, said if Healey "reaches for more tax rises" in his Budget, "he is choosing slower growth and working people will pay for it".
Get in touch
How have you been affected by the issues in this story? Share your experience
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    bodyJa: `UK growth forecast upgraded but higher energy prices to hit economy next year
- Published
The UK economy is forecast to grow by more than previously expected this year before higher energy prices and interest rates hit the economy in 2027, the International Monetary Fund (IMF) said.
The organisation's latest report, which is closely watched by the government, said the UK economy would expand by 1.3% in 2026, up from the 1% it predicted in July, before slowing in 2027.
Economies across the world have proved more resilient to the energy price shock caused by the US-Iran war, the IMF said, but it warned the economic fallout from the conflict remained "highly uncertain".
Chancellor John Healey said the government would look to "provide some breathing space" for households in the Budget.
Healey is making the final preparations to Andy Burnham's new-look government's tax and spending plans, which will be announced on 28 October.
Government borrowing costs have surged, placing pressure on the chancellor to ensure his plans are credible in the eyes of financial markets, which the UK relies on to borrow money.
But IMF chief economist Silvana Tenreyro told BBC News on Tuesday that the UK's process of managing its debts is now leading the major G7 economies.
"As you know, the UK has already started the consolidation process and it is the country that basically stands out, along with India", she said.
The organisation said the UK is one of the only major economies on course to stabilise levels of national debt. The UK is also projected to have the lowest annual borrowing in the G7 in 2031.
Asked if the UK was one of the countries the IMF was telling to reduce borrowing, Tenreyro said that the country had begun the process already and should "stay the course".
The head of the IMF has previously called on the world's advanced economies to cut borrowing and reduce debt levels.
While the IMF's forecasts are closely watched, the figures are only a prediction, a best estimate, of what will happen in the future. Forecasts often turn out to be incorrect due to world events.
Also, the chancellor's spending decisions at the Budget will be based on predictions from the UK's official forecaster, the Office for Budget Responsibility, not the IMF.
The predictions in the IMF's latest World Economic Outlook suggest:
the UK is expected to have the second-fastest growing economy in the G7 this year along with Germany
UK growth is set to slow next year to 1.2% as higher energy prices and long-term interest rates hit household spending and business investment
UK inflation is expected to average 3.3% this year, and the IMF has increased its forecast for inflation next year to 2.8%.
the IMF said the global economy was "proving resilient" despite the ongoing war in the Middle East, helped by the investment surge in AI.
'Slow bicycle race'
Healey acknowledged that wars in the Middle East and Europe were "hitting people in the UK and around the world", but added that "Britain's economy is showing strong international resilience".
When the economy is growing, businesses tend to invest more, more jobs are created and people, on average, tend to feel better off. The opposite can occur if the economy stagnates or shrinks.
Sir Howard Davies, former deputy governor of the Bank of England, told the BBC the IMF's growth forecast was "better than it might have been", but noted that for 2027 it remained "more pessimistic".
"We're still growing slowly. It's almost like saying we're winning a slow bicycle race here because other people are going backwards a bit more rapidly than we are," he added.
Sir Howard said the UK was "a bit of a sideshow" when it comes to the global economy and the IMF was more focused on how much the US is adding to its debt pile.
"That is what is putting pressure on interest rates all over the world and that is what is affecting us as well. Unless the US does something about its deficit, we can expect interest rates to be higher, which of course increases our debt interest costs," he said.
He added that the IMF was giving the UK credit in its forecast for tax rises which it might not end up actually putting through.
Economists have suggested Healey faces having to find £35bn to avoid cuts to public spending while meeting defence promises in his first Budget.
On Tuesday, the Resolution Foundation called on the chancellor to "make repairs" to the public finances, but said well-targeted support was needed for those "struggling to heat their homes".
Andrew Griffith, Conservative shadow chancellor, said if Healey "reaches for more tax rises" in his Budget, "he is choosing slower growth and working people will pay for it".
Get in touch
How have you been affected by the issues in this story? Share your experience
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmglw0r21zexo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-13T09:38:54+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5a5e/live/c20b7a80-c6d2-11f1-9a39-31b474234113.jpg",
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
