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
    id: "swiss-central-bank-posts-bumper-23bn-pro-4f309980",
    title: "Swiss central bank posts bumper $23bn profit as gold, foreign assets soar",
    titleJa: "Swiss central bank posts bumper $23bn profit as gold, foreign assets soar",
    summaryJa: "Unlike other major central banks, the Swiss National Bank has a significant equity portfolio.",
    bodyOriginal: `The Swiss National Bank said Friday that it made a profit of 19.1 billion Swiss francs ($23.3 billion) on its investments in the third quarter, driven by its gold and foreign currency holdings.
It brought the central bank's year-to-date profit up to 44.2 billion francs, the equivalent of around $53.8 billion, raising the prospect of a payout to Swiss federal and local governments at the end of the year.
But the overall profit in the third quarter of 2026 marked a year-on-year decline of almost 32%.
Profit and loss recorded in the SNB's quarterly accounting updates consists of interest income, dividends, and valuation adjustments resulting from exchange rate movements and market price changes.
The Swiss franc rose around 12% against the U.S. dollar in 2025, having been lifted by investors flocking to the safe-haven currency in the wake of U.S. President Donald Trump's tariff announcements.
So far this year, it has lost around 3.6% versus the greenback.
Profit drivers
In the third quarter of 2025, the SNB saw a 14.3-billion-franc net gain on gold, compared to a net gain on gold of 7.6 billion francs in the three months to September.
The yellow metal saw a record-smashing rally in 2025, with its value surging by around 66% over the course of 2025. But its trajectory has been far more volatile in 2026, and the metal has fallen in value by more than 7% since the start of the year.
Profit on the SNB's foreign currency positions, which include investments in international equities, reached 11.6 billion francs, marking a year-on-year decline of around 15%.
Most of the SNB's foreign currency reserves are held in financial assets denominated in foreign currencies, as opposed to hard currency holdings. It also has a smaller Swiss franc bond portfolio.
At the end of the third quarter, 61% of its foreign currency reserves were allocated to government bonds, including deposits with central banks and the Bank for International Settlements, while 28% were invested in equities and 11% in other bonds.
In terms of currency exposure, 39% of the portfolio was denominated in euros and 37% in U.S. dollars. Japanese yen and British pound exposure accounted for 7% and 6%, respectively.
The SNB's stocks portfolio
The SNB's large equity portfolio makes it unusual compared to other major central banks like the U.S. Federal Reserve and the Bank of England, which do not typically invest directly in equity markets.
However, the SNB is a passive investor, and therefore does not engage in equity selection. Its stock holdings are based on a benchmark index composed of international stock indexes, with its portfolio mostly made up of shares of mid- and large-cap companies in developed markets.
Its profits are mostly distributed to Switzerland's federal and local governments, with shareholders receiving a dividend if its equity capital is large enough. If the investments generate a loss, the SNB may be unable to make payouts.
Despite the country benefiting from a strong investment performance, however, the SNB's investments are not focused on achieving the highest possible return.
"For a conventional company, profits are an important prerequisite for long-term success. The SNB's goal, by contrast, is not to generate profit," it says on its website. "It has another mandate: It must ensure price stability in Switzerland, while taking due account of economic developments."
"The monetary policy mandate always has highest priority. The SNB can thus find itself having to take monetary policy decisions that may have a negative impact on its annual result."
Unlike many other major central banks, the SNB's monetary policy mandate allows it to use interest rates and exchange rates to achieve price stability, and it will use measures to influence the exchange rate if deemed necessary.
The SNB's inflation target also makes it an outlier among its international peers, with its target range for inflation being 0% to 2%.`,
    bodyJa: `The Swiss National Bank said Friday that it made a profit of 19.1 billion Swiss francs ($23.3 billion) on its investments in the third quarter, driven by its gold and foreign currency holdings.
It brought the central bank's year-to-date profit up to 44.2 billion francs, the equivalent of around $53.8 billion, raising the prospect of a payout to Swiss federal and local governments at the end of the year.
But the overall profit in the third quarter of 2026 marked a year-on-year decline of almost 32%.
Profit and loss recorded in the SNB's quarterly accounting updates consists of interest income, dividends, and valuation adjustments resulting from exchange rate movements and market price changes.
The Swiss franc rose around 12% against the U.S. dollar in 2025, having been lifted by investors flocking to the safe-haven currency in the wake of U.S. President Donald Trump's tariff announcements.
So far this year, it has lost around 3.6% versus the greenback.
Profit drivers
In the third quarter of 2025, the SNB saw a 14.3-billion-franc net gain on gold, compared to a net gain on gold of 7.6 billion francs in the three months to September.
The yellow metal saw a record-smashing rally in 2025, with its value surging by around 66% over the course of 2025. But its trajectory has been far more volatile in 2026, and the metal has fallen in value by more than 7% since the start of the year.
Profit on the SNB's foreign currency positions, which include investments in international equities, reached 11.6 billion francs, marking a year-on-year decline of around 15%.
Most of the SNB's foreign currency reserves are held in financial assets denominated in foreign currencies, as opposed to hard currency holdings. It also has a smaller Swiss franc bond portfolio.
At the end of the third quarter, 61% of its foreign currency reserves were allocated to government bonds, including deposits with central banks and the Bank for International Settlements, while 28% were invested in equities and 11% in other bonds.
In terms of currency exposure, 39% of the portfolio was denominated in euros and 37% in U.S. dollars. Japanese yen and British pound exposure accounted for 7% and 6%, respectively.
The SNB's stocks portfolio
The SNB's large equity portfolio makes it unusual compared to other major central banks like the U.S. Federal Reserve and the Bank of England, which do not typically invest directly in equity markets.
However, the SNB is a passive investor, and therefore does not engage in equity selection. Its stock holdings are based on a benchmark index composed of international stock indexes, with its portfolio mostly made up of shares of mid- and large-cap companies in developed markets.
Its profits are mostly distributed to Switzerland's federal and local governments, with shareholders receiving a dividend if its equity capital is large enough. If the investments generate a loss, the SNB may be unable to make payouts.
Despite the country benefiting from a strong investment performance, however, the SNB's investments are not focused on achieving the highest possible return.
"For a conventional company, profits are an important prerequisite for long-term success. The SNB's goal, by contrast, is not to generate profit," it says on its website. "It has another mandate: It must ensure price stability in Switzerland, while taking due account of economic developments."
"The monetary policy mandate always has highest priority. The SNB can thus find itself having to take monetary policy decisions that may have a negative impact on its annual result."
Unlike many other major central banks, the SNB's monetary policy mandate allows it to use interest rates and exchange rates to achieve price stability, and it will use measures to influence the exchange rate if deemed necessary.
The SNB's inflation target also makes it an outlier among its international peers, with its target range for inflation being 0% to 2%.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/30/swiss-national-bank-q3-profit-gold-foreign-asset.html",
    publishedAt: "2026-10-30T12:31:40+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "the-big-questions-remaining-after-anthro-25e33201",
    title: "The big questions remaining after Anthropic’s blockbuster IPO prospectus",
    titleJa: "The big questions remaining after Anthropic’s blockbuster IPO prospectus",
    summaryJa: "Uncertainties remain ahead of one of the most hotly anticipated IPOs in history.",
    bodyOriginal: `This report is from this week's The Tech Download newsletter. Like what you see? You can subscribe here.
Anthropic's over 300 page S-1 filing earlier this week contained a lot of information. It was the most comprehensive public statement to date about how a pure-play AI lab makes its money.
After the prospectus went live on Monday, my U.S.-based colleagues and I went through it with a fine-tooth comb, detailing everything from revenue and risks to competitors and computing costs.
The filing also revealed that CEO Dario Amodei and his six co-founders each own over 200 million shares, which could be worth billions if Anthropic hits the over $1 trillion valuation it's expected to.
But despite all the nuggets, a few big questions remain.
Revenue
Anthropic reported its cost of revenue as $2.38 billion in the first half of 2026, booking $16.29 billion in revenue during the same period and implying a gross margin of 85%.
Violeta Todorova, senior research analyst at Leverage Shares, told CNBC that the first-half revenue compared with just $1.16 billion in the first half of 2025, and asked whether it could grow to "keep pace with expectations."
"It is unclear how much it costs to generate each additional dollar of revenue as computing demand increases," she said.
But Anthropic's meteoric revenue growth slowed in the third quarter. It grew approximately 144% in the second quarter compared to the first quarter, followed by roughly 47% in the third quarter.
"What the prospectus didn't tell us is management's expectations around the sequential slowdown in the growth rate," said Michael Field, chief equity strategist at Morningstar.
Compute
"Substantially all of cost of revenue" is associated with compute and infrastructure costs, the filing states. It also says that operating margin and adjusted operating margin are expected to "fluctuate over time, particularly in periods when substantial incremental compute is delivered to us and we incur the associated expenses."
"Investors can see compute falling as a share of revenue, but not how much of the forward commitment is earmarked for training the next generation of models versus serving customers," Nick Patience, AI lead at the Futurum Group, told CNBC. "That split dictates future margins."
Questions also remain around whether compute costs can keep falling faster than commitments grow and if Anthropic can secure enough capacity to serve customers, he added.
Regarding demand across the AI and hyperscaler sector outstripping supply, the prospectus says that it had previously sought "quantities of compute from [cloud service providers] in excess of what those partners were willing to provide."
Later it says: "We have historically operated in a compute-constrained environment in which demand for compute has exceeded the supply available to us."
Pricing and control
Anthropic's structure as a public benefit corporation raises questions, too. Seven co-founders, including CEO Dario Amodei, have special voting power through a single Class F share equal to 50.1% of total voting power over matters brought to a shareholder vote.
Anthropic describes its capital and corporate governance structure as having "no direct public company precedent," in the filing.
"We also know now that management plans a series of different class share issues," said Morningstar's Field. "But what we don't know is whether investors will be fine with the lack of control implied, or will this impact the share price. Something we won't know until the shares start trading."
And finally the trillion-dollar question: the IPO valuation that Anthropic targets. The AI lab is keeping schtum about that, for now. It says simply it will be "determined by negotiations among us, the selling stockholders, and the representatives."
Given analyst estimates range between $1 trillion and $2 trillion, it will be a huge market event. If it's at the higher end of the range, it could bring back some of the swagger the AI sector has lost in recent weeks. If on the lower end, things could get ugly.
News edit
Apple on Wednesday announced its first laptop with a touchscreen, which it's calling MacBook Pro with ProLED XDR Display.
SK Hynix's shares rose after the company reported record quarterly profit that sharply beat estimates, and announced over $25 billion in dividends and buybacks.
Nvidia and Advanced Micro Devices said they will invest a total of $4 billion in Meta after the social media giant announced plans to raise $95 billion to support its investments in AI infrastructure.
Microsoft said Monday that it's offering buyouts to a wide swath of employees as it strives to balance a costly AI infrastructure build-out with capital efficiency.
SpaceX has closed $40 billion in debt financing to buy graphics processing units, or GPUs, used to power AI systems, Elon Musk said on Sunday.
One more thing
Anthropic's S-1 was a trove of company intel, but one figure really caught my eye. The AI lab has more cash than almost every company in the U.S. And, as my colleague Leslie Picker writes, never before has a company gone public with anywhere near that much.`,
    bodyJa: `This report is from this week's The Tech Download newsletter. Like what you see? You can subscribe here.
Anthropic's over 300 page S-1 filing earlier this week contained a lot of information. It was the most comprehensive public statement to date about how a pure-play AI lab makes its money.
After the prospectus went live on Monday, my U.S.-based colleagues and I went through it with a fine-tooth comb, detailing everything from revenue and risks to competitors and computing costs.
The filing also revealed that CEO Dario Amodei and his six co-founders each own over 200 million shares, which could be worth billions if Anthropic hits the over $1 trillion valuation it's expected to.
But despite all the nuggets, a few big questions remain.
Revenue
Anthropic reported its cost of revenue as $2.38 billion in the first half of 2026, booking $16.29 billion in revenue during the same period and implying a gross margin of 85%.
Violeta Todorova, senior research analyst at Leverage Shares, told CNBC that the first-half revenue compared with just $1.16 billion in the first half of 2025, and asked whether it could grow to "keep pace with expectations."
"It is unclear how much it costs to generate each additional dollar of revenue as computing demand increases," she said.
But Anthropic's meteoric revenue growth slowed in the third quarter. It grew approximately 144% in the second quarter compared to the first quarter, followed by roughly 47% in the third quarter.
"What the prospectus didn't tell us is management's expectations around the sequential slowdown in the growth rate," said Michael Field, chief equity strategist at Morningstar.
Compute
"Substantially all of cost of revenue" is associated with compute and infrastructure costs, the filing states. It also says that operating margin and adjusted operating margin are expected to "fluctuate over time, particularly in periods when substantial incremental compute is delivered to us and we incur the associated expenses."
"Investors can see compute falling as a share of revenue, but not how much of the forward commitment is earmarked for training the next generation of models versus serving customers," Nick Patience, AI lead at the Futurum Group, told CNBC. "That split dictates future margins."
Questions also remain around whether compute costs can keep falling faster than commitments grow and if Anthropic can secure enough capacity to serve customers, he added.
Regarding demand across the AI and hyperscaler sector outstripping supply, the prospectus says that it had previously sought "quantities of compute from [cloud service providers] in excess of what those partners were willing to provide."
Later it says: "We have historically operated in a compute-constrained environment in which demand for compute has exceeded the supply available to us."
Pricing and control
Anthropic's structure as a public benefit corporation raises questions, too. Seven co-founders, including CEO Dario Amodei, have special voting power through a single Class F share equal to 50.1% of total voting power over matters brought to a shareholder vote.
Anthropic describes its capital and corporate governance structure as having "no direct public company precedent," in the filing.
"We also know now that management plans a series of different class share issues," said Morningstar's Field. "But what we don't know is whether investors will be fine with the lack of control implied, or will this impact the share price. Something we won't know until the shares start trading."
And finally the trillion-dollar question: the IPO valuation that Anthropic targets. The AI lab is keeping schtum about that, for now. It says simply it will be "determined by negotiations among us, the selling stockholders, and the representatives."
Given analyst estimates range between $1 trillion and $2 trillion, it will be a huge market event. If it's at the higher end of the range, it could bring back some of the swagger the AI sector has lost in recent weeks. If on the lower end, things could get ugly.
News edit
Apple on Wednesday announced its first laptop with a touchscreen, which it's calling MacBook Pro with ProLED XDR Display.
SK Hynix's shares rose after the company reported record quarterly profit that sharply beat estimates, and announced over $25 billion in dividends and buybacks.
Nvidia and Advanced Micro Devices said they will invest a total of $4 billion in Meta after the social media giant announced plans to raise $95 billion to support its investments in AI infrastructure.
Microsoft said Monday that it's offering buyouts to a wide swath of employees as it strives to balance a costly AI infrastructure build-out with capital efficiency.
SpaceX has closed $40 billion in debt financing to buy graphics processing units, or GPUs, used to power AI systems, Elon Musk said on Sunday.
One more thing
Anthropic's S-1 was a trove of company intel, but one figure really caught my eye. The AI lab has more cash than almost every company in the U.S. And, as my colleague Leslie Picker writes, never before has a company gone public with anywhere near that much.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/30/anthropic-ipo-s1-revenue-compute.html",
    publishedAt: "2026-10-30T12:27:36+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "chevron-and-exxon-beat-earnings-expectat-5c8963fa",
    title: "Chevron and Exxon beat earnings expectations as refining profits soar on high diesel fuel prices",
    titleJa: "Chevron and Exxon beat earnings expectations as refining profits soar on high diesel fuel prices",
    summaryJa: "Diesel prices have surged globally as Ukraine and Iran have bombed refineries in Russia and the Middle East.",
    bodyOriginal: `Chevron and ExxonMobil on Friday reported profits that surged in the third quarter, as their U.S. refineries ran at full capacity to take advantage of high diesel fuel prices.
Chevron's net income surged nearly 200% to $9.9 billion, or $5.06 a share, compared to $3.5 billion, or $1.82 a share, in the same period last year. When adjusted for one-time items, it reported earnings of $5.28 per share, soundly beating Wall Street's expectations of $4.89.
Diesel prices have surged globally as Ukraine and Iran have bombed refineries in Russia and the Middle East. U.S. refiners have ramped up production to fill the supply gap.
ExxonMobil's profits doubled to $15.4 billion, or $3.72 a share, compared to $7.5 billion, or $1.76 a share, in the same period in 2025. When adjusted for one-time items, it posted earnings of $4.23 a share, beating the Street's expectations.
Chevron shares are up about 2% in premarket trading, while Exxon is trading about 1.5% higher.
Here's how Chevron and Exxon did, compared with estimates from analysts polled by LSEG:
- Chevron's earnings per share: $5.28 adjusted, vs. $4.89 expected
- Chevron's revenue: $67.8 billion, vs. $61.6 billion expected
- Exxon's earnings per share: $4.23 adjusted, vs. $4.08 expected
- Exxon's revenue: $113.2 billion, vs. $103.1 billion expected
Chevron's U.S. refineries processed record amounts of crude oil at just above 1 million barrels per day, as the facilities ran at 98% capacity. Diesel and jet fuel yields rose more than 10%, the company said.
Exxon's Gulf Coast refineries operated at 100% utilization with the second-highest diesel production on record at those facilities, the company said.
Profits from Chevron's refining division surged more than 300% to $4.9 billion compared to $1.1 billion in the same period in 2025. Its oil and gas production generated earnings of $5.7 billion, up 70% from $3.3 billion in the year-ago period.
Exxon's refining division generated profits of about $7.2 billion in the quarter, outpacing its production business' earnings of about $7.1 billion. Its refining profits have surged nearly 200% to $11.4 billion so far this year compared to $4 billion during the first nine months of 2025.
Chevron's output actually declined slightly to 3.9 million barrels per day compared to about 4 million bpd in the same period last year. The decline was in its international segment due in part to the conflict in the Middle East, while output was largely flat in the U.S. year over year.
Exxon has produced about 4.5 million bpd this year, a more than 2% decline from nearly 4.7 million during the first nine months of 2025.`,
    bodyJa: `Chevron and ExxonMobil on Friday reported profits that surged in the third quarter, as their U.S. refineries ran at full capacity to take advantage of high diesel fuel prices.
Chevron's net income surged nearly 200% to $9.9 billion, or $5.06 a share, compared to $3.5 billion, or $1.82 a share, in the same period last year. When adjusted for one-time items, it reported earnings of $5.28 per share, soundly beating Wall Street's expectations of $4.89.
Diesel prices have surged globally as Ukraine and Iran have bombed refineries in Russia and the Middle East. U.S. refiners have ramped up production to fill the supply gap.
ExxonMobil's profits doubled to $15.4 billion, or $3.72 a share, compared to $7.5 billion, or $1.76 a share, in the same period in 2025. When adjusted for one-time items, it posted earnings of $4.23 a share, beating the Street's expectations.
Chevron shares are up about 2% in premarket trading, while Exxon is trading about 1.5% higher.
Here's how Chevron and Exxon did, compared with estimates from analysts polled by LSEG:
- Chevron's earnings per share: $5.28 adjusted, vs. $4.89 expected
- Chevron's revenue: $67.8 billion, vs. $61.6 billion expected
- Exxon's earnings per share: $4.23 adjusted, vs. $4.08 expected
- Exxon's revenue: $113.2 billion, vs. $103.1 billion expected
Chevron's U.S. refineries processed record amounts of crude oil at just above 1 million barrels per day, as the facilities ran at 98% capacity. Diesel and jet fuel yields rose more than 10%, the company said.
Exxon's Gulf Coast refineries operated at 100% utilization with the second-highest diesel production on record at those facilities, the company said.
Profits from Chevron's refining division surged more than 300% to $4.9 billion compared to $1.1 billion in the same period in 2025. Its oil and gas production generated earnings of $5.7 billion, up 70% from $3.3 billion in the year-ago period.
Exxon's refining division generated profits of about $7.2 billion in the quarter, outpacing its production business' earnings of about $7.1 billion. Its refining profits have surged nearly 200% to $11.4 billion so far this year compared to $4 billion during the first nine months of 2025.
Chevron's output actually declined slightly to 3.9 million barrels per day compared to about 4 million bpd in the same period last year. The decline was in its international segment due in part to the conflict in the Middle East, while output was largely flat in the U.S. year over year.
Exxon has produced about 4.5 million bpd this year, a more than 2% decline from nearly 4.7 million during the first nine months of 2025.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/30/chevron-exxon-cvx-xom-earnings-q3-2026.html",
    publishedAt: "2026-10-30T11:35:51+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "musk-and-zuckerberg-echo-trump-s-push-to-687ece35",
    title: "Musk and Zuckerberg echo Trump's push to rebrand AI as 'super intelligence' on earnings calls. Others did not",
    titleJa: "Musk and Zuckerberg echo Trump's push to rebrand AI as 'super intelligence' on earnings calls. Others did not",
    summaryJa: "Meta's Mark Zuckerberg and Elon Musk of Tesla and SpaceX adopted President Trump's preferred \"super intelligence\" term on their third-quarter earnings calls.",
    bodyOriginal: `A month after President Donald Trump ordered that the term "super intelligence" replace artificial intelligence within executive branch departments and agencies, his leading tech allies — Elon Musk and Mark Zuckerberg — followed suit on earnings calls. Their fellow tech CEOs were less eager to do the same.
Trump's declaration took place on Sept. 29, while he was hosting an AI luncheon at the White House for industry leaders. At the time, he was working to ensure the growth of AI in the U.S. with limited regulations. The president this week announced on Truth Social that he's banning the use of AI or artificial intelligence in "all relevant documents" and "everything else."
SpaceX and Tesla adhered to Trump's wishes on earnings calls last week after Musk, earlier in October, changed the name of his rocket company's AI division to SpaceXSI. Speaking on Tesla's call about his work on humanoid robots, Musk said, "Some of them look very impressive, but they're not really using any kind of advanced AI or SI."
Zuckerberg was equally compliant on Meta's earnings call on Oct. 21, emphasizing his company's "goal of delivering personal superintelligence to everyone." However, Meta was already using the term, having created a unit called Meta Superintelligence Labs last year.
While Musk and Zuckerberg have been perhaps the fiercest supporters of the Trump administration among tech's CEOs, they're by no means outliers. Leaders of all the tech giants have contributed to Trump's inauguration festivities or his plan for the White House ballroom, and some have been intentional about getting rid of diversity, equity and inclusion (DEI) programs that the president opposed.
But for now at least, they're holding out when it comes to eliminating the term AI.
Amazon CEO Andy Jassy peppered his call with use of AI on Thursday, uttering the acronym well over a dozen times in his introductory remarks. A day earlier, Microsoft CEO Satya Nadella said one of the company's three points of focus is "designing AI to empower people." And Alphabet CEO Sundar Pichai was seconds into his quarterly earnings commentary when he said the search giant's "AI investments are driving increased usage and overall user growth."
Trump's attempted rebrand comes just ahead of the midterm elections next week, with the Republican Party in jeopardy of losing control of both the House and Senate. Trump's job approval has been dropping and his economic approval rating just hit an all-time low, according to the latest CNBC All-America Economic Survey released last week.
'Real-world outcomes'
That's not to suggest tech execs sticking with "AI" on this week's earnings calls are openly defying the president. Trump's preferred term is seeping into other correspondence and documents. Microsoft's annual report filed last week included eight mentions of super intelligence, starting at the top of the letter to shareholders.
"For Microsoft, the central question as we enter this Super Intelligence era is not just how big the opportunity becomes, but how we deliver the real-world outcomes that every country, community, and company demands and deserves," Nadella wrote.
IBM CEO Arvind Krishna, who didn't attend Trump's September lunch, used SI alongside AI during his company's earnings call last week. Krishna said, "technology innovation in both hybrid infrastructure and super intelligence is leading to better business performance," adding that IBM is advancing as a "software-led hybrid cloud and AI platform company."
Lip-Bu Tan, CEO of chipmaker Intel, said on Thursday the supply shortage the chip industry is navigating has been "driven by the unprecedented demand for super intelligence."
Some in the tech industry have been explicit in their support of Trump's terminology ahead of their forthcoming earnings reports next month.
Palo Alto Networks CEO Nikesh Arora repeatedly referred to SI on CNBC, and posted on X on Sept. 30, "The meeting at the WH on SI was an epic moment."
Then there's Nvidia's Jensen Huang, who runs the world's most valuable company and the chipmaker that's powered much of the AI boom. Along with Musk and Zuckerberg, Huang has been one of Trump's most vocal supporters in tech and the president's top ally on the AI safety debate.
Like Arora, Huang took to X after last month's AI meeting to praise the "White House Accord on Super Intelligence."
"Super Intelligence offers an extraordinary opportunity to advance discovery, productivity, security, health, and prosperity," Huang wrote. "The future of Super Intelligence will be shaped not only by what it can do, but by the confidence it earns."`,
    bodyJa: `A month after President Donald Trump ordered that the term "super intelligence" replace artificial intelligence within executive branch departments and agencies, his leading tech allies — Elon Musk and Mark Zuckerberg — followed suit on earnings calls. Their fellow tech CEOs were less eager to do the same.
Trump's declaration took place on Sept. 29, while he was hosting an AI luncheon at the White House for industry leaders. At the time, he was working to ensure the growth of AI in the U.S. with limited regulations. The president this week announced on Truth Social that he's banning the use of AI or artificial intelligence in "all relevant documents" and "everything else."
SpaceX and Tesla adhered to Trump's wishes on earnings calls last week after Musk, earlier in October, changed the name of his rocket company's AI division to SpaceXSI. Speaking on Tesla's call about his work on humanoid robots, Musk said, "Some of them look very impressive, but they're not really using any kind of advanced AI or SI."
Zuckerberg was equally compliant on Meta's earnings call on Oct. 21, emphasizing his company's "goal of delivering personal superintelligence to everyone." However, Meta was already using the term, having created a unit called Meta Superintelligence Labs last year.
While Musk and Zuckerberg have been perhaps the fiercest supporters of the Trump administration among tech's CEOs, they're by no means outliers. Leaders of all the tech giants have contributed to Trump's inauguration festivities or his plan for the White House ballroom, and some have been intentional about getting rid of diversity, equity and inclusion (DEI) programs that the president opposed.
But for now at least, they're holding out when it comes to eliminating the term AI.
Amazon CEO Andy Jassy peppered his call with use of AI on Thursday, uttering the acronym well over a dozen times in his introductory remarks. A day earlier, Microsoft CEO Satya Nadella said one of the company's three points of focus is "designing AI to empower people." And Alphabet CEO Sundar Pichai was seconds into his quarterly earnings commentary when he said the search giant's "AI investments are driving increased usage and overall user growth."
Trump's attempted rebrand comes just ahead of the midterm elections next week, with the Republican Party in jeopardy of losing control of both the House and Senate. Trump's job approval has been dropping and his economic approval rating just hit an all-time low, according to the latest CNBC All-America Economic Survey released last week.
'Real-world outcomes'
That's not to suggest tech execs sticking with "AI" on this week's earnings calls are openly defying the president. Trump's preferred term is seeping into other correspondence and documents. Microsoft's annual report filed last week included eight mentions of super intelligence, starting at the top of the letter to shareholders.
"For Microsoft, the central question as we enter this Super Intelligence era is not just how big the opportunity becomes, but how we deliver the real-world outcomes that every country, community, and company demands and deserves," Nadella wrote.
IBM CEO Arvind Krishna, who didn't attend Trump's September lunch, used SI alongside AI during his company's earnings call last week. Krishna said, "technology innovation in both hybrid infrastructure and super intelligence is leading to better business performance," adding that IBM is advancing as a "software-led hybrid cloud and AI platform company."
Lip-Bu Tan, CEO of chipmaker Intel, said on Thursday the supply shortage the chip industry is navigating has been "driven by the unprecedented demand for super intelligence."
Some in the tech industry have been explicit in their support of Trump's terminology ahead of their forthcoming earnings reports next month.
Palo Alto Networks CEO Nikesh Arora repeatedly referred to SI on CNBC, and posted on X on Sept. 30, "The meeting at the WH on SI was an epic moment."
Then there's Nvidia's Jensen Huang, who runs the world's most valuable company and the chipmaker that's powered much of the AI boom. Along with Musk and Zuckerberg, Huang has been one of Trump's most vocal supporters in tech and the president's top ally on the AI safety debate.
Like Arora, Huang took to X after last month's AI meeting to praise the "White House Accord on Super Intelligence."
"Super Intelligence offers an extraordinary opportunity to advance discovery, productivity, security, health, and prosperity," Huang wrote. "The future of Super Intelligence will be shaped not only by what it can do, but by the confidence it earns."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/30/trump-tech-allies-swap-ai-for-super-intelligence-in-earnings-calls.html",
    publishedAt: "2026-10-30T11:30:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "streeting-denies-kicking-can-down-the-ro-c6757a5e",
    title: "Streeting denies 'kicking can down the road' in defence spending row",
    titleJa: "Streeting denies 'kicking can down the road' in defence spending row",
    summaryJa: "The government is under pressure to set out a path to greater defence spending, as ministers unveil plans to boost UK firms.",
    bodyOriginal: `Streeting denies 'kicking can down the road' in defence spending row
- Published
Defence Secretary Wes Streeting has denied "kicking the can down the road" over how much the UK spends on defence.
The government has faced criticism for not setting out a pathway at Wednesday's Budget to hit its target of spending 3% of GDP on defence by 2030.
Streeting is at odds with MPs on the Commons defence committee over the issue.
It comes as Chancellor John Healey and Streeting announce that foreign firms which are awarded defence contracts of more than £50m will need to invest an equal value back into the UK.
Under the new investment rules, described as an "offset strategy", these companies will need to spend an equivalent amount on British factories, jobs and training.
The Ministry of Defence will apply the rules on a "case-by-case" basis from April 2027, the government said. Healey and Streeting will unveil the policy on a visit to UK defence contractor BAE's shipbuilding site in Glasgow later.
Countries including Poland, Norway and the Netherlands have mandated similar rules to "boost the economic benefit from defence procurement", the government said.
While ministers hope the rules increase investment in Britain's defence industry, they appear designed to do so in a politically palatable way rather than committing to spending cuts.
Tan Dhesi, Labour chair of the cross-party Commons defence committee, said on Wednesday that decisions had been "kicked into the long grass" to next year's government spending review, rather than announced in the Budget.
He warned that without building capabilities now, "we risk leaving ourselves seriously vulnerable in the event of a major conflict".
Streeting hit back at these comments as "unfair" and "unfounded".
Speaking on Thursday, Dhesi said the committee stands by its criticism.
"We had hoped to see that the chancellor would set out a precise pathway to spend 3% of GDP on defence by 2030," Dhesi told BBC Radio 4's Today programme.
"But instead some of those key decisions on defence have lamentably been delayed until next year's spending review."
He praised the government for plugging a £4.7bn hole in the Defence Investment Plan in the Budget, through asking government departments to cut their capital budgets by 1%.
Responding on Thursday, Streeting told Today: "I like Tan very much, he's a friend and I respect him, but I strongly disagree with him.
"And I don't think the charge he makes of delaying or kicking the can down the road stacks up against the extra money that is already going into defence and the capability we're funding right now."
Streeting told BBC Breakfast the new rules, aiming to create "bang for the British buck", would help achieve this target given increasing defence spending "does come at a cost to the country and other things we'd like to spend money on".
He said waiting for the spending review, which does not have a fixed date and could come in the second half of 2027, was "the right thing to do" so ministers can look at "spending in the round".
He added that the UK was ready to deal with hostile threats, but "we're not where we'd want to be".
"There's no sugarcoating the fact that our Armed Forces were under-invested in for more than a decade," he told Breakfast.
Defence analysts have questioned the government's ability to deliver on its 2030 target and the Nato-wide target of 3.5% by 2035. UK defence spending is at an estimated 2.6% of GDP this year.
Some estimates have suggested the government will need to spend an additional £10bn annually to reach its targets.
Tory leader Kemi Badenoch said on Wednesday that Healey "failed his own test" by not setting out a "plan for 3%".
Healey resigned as then-Prime Minister Sir Keir Starmer's defence secretary in June over not spending enough on defence.
In the Budget, Healey said the UK was negotiating with Finland, Poland and the Netherlands to set up an international bank - the Multilateral Defence Mechanism - to boost defence investment and joint procurement.
But Conservative shadow defence secretary James Cartlidge said this amounted to "turning to borrowing at a time when the national debt is over £3 trillion".
"The answer is not more borrowing – it's to cut welfare to fund defence," he said.
Related topics
- Published1 day ago
- Published20 hours ago
- Published11 June`,
    bodyJa: `Streeting denies 'kicking can down the road' in defence spending row
- Published
Defence Secretary Wes Streeting has denied "kicking the can down the road" over how much the UK spends on defence.
The government has faced criticism for not setting out a pathway at Wednesday's Budget to hit its target of spending 3% of GDP on defence by 2030.
Streeting is at odds with MPs on the Commons defence committee over the issue.
It comes as Chancellor John Healey and Streeting announce that foreign firms which are awarded defence contracts of more than £50m will need to invest an equal value back into the UK.
Under the new investment rules, described as an "offset strategy", these companies will need to spend an equivalent amount on British factories, jobs and training.
The Ministry of Defence will apply the rules on a "case-by-case" basis from April 2027, the government said. Healey and Streeting will unveil the policy on a visit to UK defence contractor BAE's shipbuilding site in Glasgow later.
Countries including Poland, Norway and the Netherlands have mandated similar rules to "boost the economic benefit from defence procurement", the government said.
While ministers hope the rules increase investment in Britain's defence industry, they appear designed to do so in a politically palatable way rather than committing to spending cuts.
Tan Dhesi, Labour chair of the cross-party Commons defence committee, said on Wednesday that decisions had been "kicked into the long grass" to next year's government spending review, rather than announced in the Budget.
He warned that without building capabilities now, "we risk leaving ourselves seriously vulnerable in the event of a major conflict".
Streeting hit back at these comments as "unfair" and "unfounded".
Speaking on Thursday, Dhesi said the committee stands by its criticism.
"We had hoped to see that the chancellor would set out a precise pathway to spend 3% of GDP on defence by 2030," Dhesi told BBC Radio 4's Today programme.
"But instead some of those key decisions on defence have lamentably been delayed until next year's spending review."
He praised the government for plugging a £4.7bn hole in the Defence Investment Plan in the Budget, through asking government departments to cut their capital budgets by 1%.
Responding on Thursday, Streeting told Today: "I like Tan very much, he's a friend and I respect him, but I strongly disagree with him.
"And I don't think the charge he makes of delaying or kicking the can down the road stacks up against the extra money that is already going into defence and the capability we're funding right now."
Streeting told BBC Breakfast the new rules, aiming to create "bang for the British buck", would help achieve this target given increasing defence spending "does come at a cost to the country and other things we'd like to spend money on".
He said waiting for the spending review, which does not have a fixed date and could come in the second half of 2027, was "the right thing to do" so ministers can look at "spending in the round".
He added that the UK was ready to deal with hostile threats, but "we're not where we'd want to be".
"There's no sugarcoating the fact that our Armed Forces were under-invested in for more than a decade," he told Breakfast.
Defence analysts have questioned the government's ability to deliver on its 2030 target and the Nato-wide target of 3.5% by 2035. UK defence spending is at an estimated 2.6% of GDP this year.
Some estimates have suggested the government will need to spend an additional £10bn annually to reach its targets.
Tory leader Kemi Badenoch said on Wednesday that Healey "failed his own test" by not setting out a "plan for 3%".
Healey resigned as then-Prime Minister Sir Keir Starmer's defence secretary in June over not spending enough on defence.
In the Budget, Healey said the UK was negotiating with Finland, Poland and the Netherlands to set up an international bank - the Multilateral Defence Mechanism - to boost defence investment and joint procurement.
But Conservative shadow defence secretary James Cartlidge said this amounted to "turning to borrowing at a time when the national debt is over £3 trillion".
"The answer is not more borrowing – it's to cut welfare to fund defence," he said.
Related topics
- Published1 day ago
- Published20 hours ago
- Published11 June`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw62yrzxjnk4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-30T11:23:38+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1e71/live/d6dac2e0-d44c-11f1-93e1-3b657b665bcf.jpg",
    readTime: 10,
  },
  {
    id: "wall-street-braces-for-democratic-gains-55f5d18f",
    title: "Wall Street braces for Democratic gains as 2026 midterm election nears",
    titleJa: "Wall Street braces for Democratic gains as 2026 midterm election nears",
    summaryJa: "Investors are preparing for a blue wave in the midterm election on Tuesday that will determine who controls Congress for the remainder of President Trump's term.",
    bodyOriginal: `Investors expect a blue wave in next week's midterm election, as Democrats surge in polls and President Donald Trump's approval rating remains low.
Public polling suggests Democrats are likely to take control of the House of Representatives, and analysts who parse what politics means for investors are in overdrive to tell their clients how to prepare for what Congress will look like after the Tuesday election.
Concern about the spending plans and priorities of a Democratic-controlled Congress permeates analyst reports reviewed by CNBC. But because Trump has another two years of his presidency, a divided government would likely create gridlock that would prevent congressional leadership in opposition to the president from getting much done, analysts are advising their clients.
Most analysts believe Democrats are also within striking distance of a Senate majority, though that outcome is significantly less likely than a House flip according to the polls. Next Tuesday's elections will determine which party controls both chambers of Congress for the remainder of Trump's presidency, after two years of full Republican control.
Divided government typically makes must-pass legislation, like government funding and raising the debt ceiling, harder to enact. A debt ceiling standoff — or first-ever default on federal debt — could be particularly damaging.
Wall Street watchers are also expecting Democrats to try to advance an ambitious and expensive agenda should they gain control of Congress. An Oct. 29 report from Piper Sandler analyzing Congressional Budget Office data projected that policy proposals from Democrats "would add $5 trillion to the deficit over the coming decade." The analysis assumes repeals of Trump's tariffs and reversing cuts to Medicaid, nutrition programs and Affordable Care Act subsidies.
Major policy swings — and big spending packages — become less likely as a divided government is unlikely to agree on issues. That's a dynamic the market typically enjoys. Trump's veto power would effectively block major Democratic policies from becoming law.
"A blue House is the obvious consensus base case," Wolfe Research said in an Oct. 27 report. The firm surveyed 138 investors and found 96% of those polled believed Democrats would prevail in House control.
"The scale of polling error that would be required for Republicans to retain House control would be unprecedented in modern history, well above the polling error in the famously bad 2020 cycle," Wolfe wrote.
Wolfe is less bullish on a Democratic Senate, though investors clearly see a possibility that Democrats regain control of both chambers of Congress.
Fifty-eight percent of investors the firm surveyed believed Democrats would gain control of the Senate, while 42% believed Republicans would retain control of the chamber. The investors surveyed were more bullish than Wolfe itself, which puts the chances of a Democratic Senate at 49%.
Other analysts are largely coalescing around the potential for a good night for Democrats.
"A blue wave scenario has become our base case," an Oct. 20 report from TD Securities reads. An Oct. 23 Raymond James report says "Democrats are in a solid position to win a majority in the House of Representatives and are increasingly likely to win enough seats to capture a Senate majority."
Even if Democrats sweep both chambers, protracted battles could still play out as Republicans maintain the White House and the Senate must still surpass the 60-vote filibuster threshold.
Democrats winning control of the Senate could allay concerns about the Federal Reserve's independence from Trump, TD predicted.
That's because any new Fed members would need to be confirmed by the Senate, which would be unlikely to support a nominee who wouldn't support the central bank charting its own course.
Democrats are also expected to investigate companies that have done business with the Trump administration should they win control of a chamber. The majority party in Congress holds subpoena power on committees. Some Democrats have already telegraphed their investigative priorities ahead of the election.
The debt ceiling is likely the most critical sticking point for the economy that lawmakers will need to address during the next Congress, unless Republicans raise it during the lame-duck session between the election and the start of the next Congress in January. The Bipartisan Policy Center expects the U.S. will reach the so-called X-date — the point at which Treasury runs out of cash under the debt ceiling — between late-winter and mid-summer 2027.
"While negotiations around the debt ceiling may come down to the wire, a Democratic Congress would make it slightly more likely that a bill is passed than a divided Congress," TD said.
If Congress does not raise the debt ceiling by the X-date, the U.S. could default on its debt, causing catastrophic economic consequences.
Democrats, should they control one slice of government, are expected to demand concessions from Republicans in exchange for their votes to raise the debt ceiling. That sets up a potential standoff, which analysts note Republicans could avoid if they lose next week and raise the debt ceiling during the lame duck.
"[R]aising the debt limit before January could substantially reduce leverage Democrats have over healthcare, Medicaid, SNAP, and broader domestic spending priorities in the next Congress," Raymond James told its clients.`,
    bodyJa: `Investors expect a blue wave in next week's midterm election, as Democrats surge in polls and President Donald Trump's approval rating remains low.
Public polling suggests Democrats are likely to take control of the House of Representatives, and analysts who parse what politics means for investors are in overdrive to tell their clients how to prepare for what Congress will look like after the Tuesday election.
Concern about the spending plans and priorities of a Democratic-controlled Congress permeates analyst reports reviewed by CNBC. But because Trump has another two years of his presidency, a divided government would likely create gridlock that would prevent congressional leadership in opposition to the president from getting much done, analysts are advising their clients.
Most analysts believe Democrats are also within striking distance of a Senate majority, though that outcome is significantly less likely than a House flip according to the polls. Next Tuesday's elections will determine which party controls both chambers of Congress for the remainder of Trump's presidency, after two years of full Republican control.
Divided government typically makes must-pass legislation, like government funding and raising the debt ceiling, harder to enact. A debt ceiling standoff — or first-ever default on federal debt — could be particularly damaging.
Wall Street watchers are also expecting Democrats to try to advance an ambitious and expensive agenda should they gain control of Congress. An Oct. 29 report from Piper Sandler analyzing Congressional Budget Office data projected that policy proposals from Democrats "would add $5 trillion to the deficit over the coming decade." The analysis assumes repeals of Trump's tariffs and reversing cuts to Medicaid, nutrition programs and Affordable Care Act subsidies.
Major policy swings — and big spending packages — become less likely as a divided government is unlikely to agree on issues. That's a dynamic the market typically enjoys. Trump's veto power would effectively block major Democratic policies from becoming law.
"A blue House is the obvious consensus base case," Wolfe Research said in an Oct. 27 report. The firm surveyed 138 investors and found 96% of those polled believed Democrats would prevail in House control.
"The scale of polling error that would be required for Republicans to retain House control would be unprecedented in modern history, well above the polling error in the famously bad 2020 cycle," Wolfe wrote.
Wolfe is less bullish on a Democratic Senate, though investors clearly see a possibility that Democrats regain control of both chambers of Congress.
Fifty-eight percent of investors the firm surveyed believed Democrats would gain control of the Senate, while 42% believed Republicans would retain control of the chamber. The investors surveyed were more bullish than Wolfe itself, which puts the chances of a Democratic Senate at 49%.
Other analysts are largely coalescing around the potential for a good night for Democrats.
"A blue wave scenario has become our base case," an Oct. 20 report from TD Securities reads. An Oct. 23 Raymond James report says "Democrats are in a solid position to win a majority in the House of Representatives and are increasingly likely to win enough seats to capture a Senate majority."
Even if Democrats sweep both chambers, protracted battles could still play out as Republicans maintain the White House and the Senate must still surpass the 60-vote filibuster threshold.
Democrats winning control of the Senate could allay concerns about the Federal Reserve's independence from Trump, TD predicted.
That's because any new Fed members would need to be confirmed by the Senate, which would be unlikely to support a nominee who wouldn't support the central bank charting its own course.
Democrats are also expected to investigate companies that have done business with the Trump administration should they win control of a chamber. The majority party in Congress holds subpoena power on committees. Some Democrats have already telegraphed their investigative priorities ahead of the election.
The debt ceiling is likely the most critical sticking point for the economy that lawmakers will need to address during the next Congress, unless Republicans raise it during the lame-duck session between the election and the start of the next Congress in January. The Bipartisan Policy Center expects the U.S. will reach the so-called X-date — the point at which Treasury runs out of cash under the debt ceiling — between late-winter and mid-summer 2027.
"While negotiations around the debt ceiling may come down to the wire, a Democratic Congress would make it slightly more likely that a bill is passed than a divided Congress," TD said.
If Congress does not raise the debt ceiling by the X-date, the U.S. could default on its debt, causing catastrophic economic consequences.
Democrats, should they control one slice of government, are expected to demand concessions from Republicans in exchange for their votes to raise the debt ceiling. That sets up a potential standoff, which analysts note Republicans could avoid if they lose next week and raise the debt ceiling during the lame duck.
"[R]aising the debt limit before January could substantially reduce leverage Democrats have over healthcare, Medicaid, SNAP, and broader domestic spending priorities in the next Congress," Raymond James told its clients.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/30/2026-midterm-election-wall-street-prepares-for-democratic-gains.html",
    publishedAt: "2026-10-30T11:12:17+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "yorkshire-water-boss-resigns-after-firm-5c89c499",
    title: "Yorkshire Water boss resigns after firm downgraded",
    titleJa: "Yorkshire Water boss resigns after firm downgraded",
    summaryJa: "Nicola Shaw, who has led the company since 2022, will step down in January, it is announced.",
    bodyOriginal: `Yorkshire Water boss resigns after firm downgraded
- Published
Yorkshire Water's chief executive has announced she is to step down, just 24 hours after the company was given the lowest possible environmental rating by the Environment Agency
Nicola Shaw, who has led the firm since 2022, will leave the role on 1 January to be replaced by Nicola Medalova, a chartered environmental health officer who previously worked for the National Grid.
In a statement on Friday, Shaw said it had been a "privilege" to lead the company but that it was "the right time" to leave her post.
Shaw has faced criticism in recent years, including for taking £1.9m in undisclosed payments between 2023 and 2026, while the company has come under scrutiny for its performance.
The payments were made by Yorkshire Water's parent company, Kelda Holdings, for what the firm said was for "investor engagement" and "financial oversight".
On Thursday, the Environment Agency gave the firm one star out of four - its lowest possible rating - meaning Yorkshire Water was classed as a "poorly performing company".
The EA said Yorkshire Water was responsible for 260 pollution incidents in 2025, which was its highest total since 2011.
In 2024, Ofwat announced it was fining the company £47m for historic sewage leaks.
'Extremely proud'
In her statement, Shaw said: "It has been a privilege to lead Yorkshire Water and serve the people of Yorkshire.
"Although there remains a huge amount of work to do, I am extremely proud of what our colleagues have achieved, putting the business on a stronger footing for delivery across all aspects of its work."
Yorkshire Water said Medalova would join the company on Monday as part of a transition period before assuming the chief executive officer role full time in the new year.
She said: "I am delighted to be joining Yorkshire Water and grateful to the Board for the opportunity to lead the business through its next chapter.
"Yorkshire Water faces huge challenges but also great opportunities for continued improvement and I look forward to working with Nicola Shaw, the leadership team and colleagues across the business as I get up to speed."
In December last year Shaw said "not being transparent" about receiving £1.3m in shareholder-funded payments across two instalments had been a "mistake", but had insisted those amounts were "not for me to decide".
She received a further £660,000 earlier this year. Ofwat said the payments were not performance-related.
The previously undisclosed payments had come to light the previous August when the government banned Yorkshire Water and five other water companies from paying "unfair" bonuses to bosses.
Listen to highlights from West Yorkshire on BBC Sounds, catch up with the latest episode of Look North.
Related topics
- Published1 day ago
- Published18 December 2025
- Published6 August 2024
- Published24 February`,
    bodyJa: `Yorkshire Water boss resigns after firm downgraded
- Published
Yorkshire Water's chief executive has announced she is to step down, just 24 hours after the company was given the lowest possible environmental rating by the Environment Agency
Nicola Shaw, who has led the firm since 2022, will leave the role on 1 January to be replaced by Nicola Medalova, a chartered environmental health officer who previously worked for the National Grid.
In a statement on Friday, Shaw said it had been a "privilege" to lead the company but that it was "the right time" to leave her post.
Shaw has faced criticism in recent years, including for taking £1.9m in undisclosed payments between 2023 and 2026, while the company has come under scrutiny for its performance.
The payments were made by Yorkshire Water's parent company, Kelda Holdings, for what the firm said was for "investor engagement" and "financial oversight".
On Thursday, the Environment Agency gave the firm one star out of four - its lowest possible rating - meaning Yorkshire Water was classed as a "poorly performing company".
The EA said Yorkshire Water was responsible for 260 pollution incidents in 2025, which was its highest total since 2011.
In 2024, Ofwat announced it was fining the company £47m for historic sewage leaks.
'Extremely proud'
In her statement, Shaw said: "It has been a privilege to lead Yorkshire Water and serve the people of Yorkshire.
"Although there remains a huge amount of work to do, I am extremely proud of what our colleagues have achieved, putting the business on a stronger footing for delivery across all aspects of its work."
Yorkshire Water said Medalova would join the company on Monday as part of a transition period before assuming the chief executive officer role full time in the new year.
She said: "I am delighted to be joining Yorkshire Water and grateful to the Board for the opportunity to lead the business through its next chapter.
"Yorkshire Water faces huge challenges but also great opportunities for continued improvement and I look forward to working with Nicola Shaw, the leadership team and colleagues across the business as I get up to speed."
In December last year Shaw said "not being transparent" about receiving £1.3m in shareholder-funded payments across two instalments had been a "mistake", but had insisted those amounts were "not for me to decide".
She received a further £660,000 earlier this year. Ofwat said the payments were not performance-related.
The previously undisclosed payments had come to light the previous August when the government banned Yorkshire Water and five other water companies from paying "unfair" bonuses to bosses.
Listen to highlights from West Yorkshire on BBC Sounds, catch up with the latest episode of Look North.
Related topics
- Published1 day ago
- Published18 December 2025
- Published6 August 2024
- Published24 February`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckzd623pldqgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-30T07:54:08+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7dbf/live/d8f7e870-d44a-11f1-b441-2b33b063138f.jpg",
    readTime: 7,
  },
  {
    id: "how-video-game-remakes-tap-the-power-of-2d937aff",
    title: "How video game remakes tap the power of nostalgia",
    titleJa: "How video game remakes tap the power of nostalgia",
    summaryJa: "Video games are good at triggering nostalgia, a key reason why classic games keep getting remade.",
    bodyOriginal: `How video game remakes tap the power of nostalgia
- Published
The moment she saw footage from the remake of The Legend of Zelda: Ocarina of Time, Kacey Doran picked up her phone. She had to tell her sister.
"Have you seen this?" messaged Doran, excitedly.
Nearly 30 years ago, a 10-year-old Doran had sat in front of her family's TV, reading out the dialogue on screen to her sister, a year younger, as they inched their way through the original Nintendo 64 game's sprawling, puzzle-filled dungeons. Ocarina's fantasy-like story, and beautiful music, enthralled them both.
It was also the first game Doran ever completed. Now, countless memories rushed back to her as she devoured clips of the fully redesigned version, due to arrive on the Switch 2 later this year.
Doran's sister messaged back: "I'm not tearing up… YOU'RE tearing up."
This is the power of nostalgia – and a perfect example of how video games can trigger it. Doran now teaches an esports course at Rowan University in New Jersey. She says the original Ocarina of Time, released in 1998, had a "magical" quality that she hopes to rediscover, and also share with her sister's children.
The video games industry has long leaned on remakes. From Mario Kart to the Final Fantasy series, or even Pac-Man, some games just keep coming back in updated forms, as new generations of gamers emerge and as computer hardware improves, enabling more detailed graphics and increasingly expansive game worlds.
While the emotional hook may be the most significant draw, putting out a remake can be a double-edged sword. Some gamers are very protective of their favourite titles and new versions don't always meet certain fans' astronomically high expectations.
Nostalgia is an important but mixed emotion, says Tim Wulf, at the Centre for Advanced Internet Studies in Bochum, Germany. It has positive aspects but also a kind of sadness, too. Happiness in remembering things that were important to us, and also an awareness that that time is now gone.
"It's a social emotion because memories that induce nostalgia for us are connected to other people," he explains, adding that nostalgia can boost our self-esteem while highlighting key social bonds.
Video games, says Wulf, are notoriously good at triggering nostalgia because gamers can "jump into the same environment". In other words, games are like time machines for our emotions, and returning to fondly remembered places can feel stabilising or reassuring in an ever-changing world.
Doran, for one, notes that when you return to a favourite old game, there's something satisfying about deploying previously learned skills. You know what to do here, you're winning again. Just like the old days.
Putting out remasters and remakes has been a "really successful" strategy for the games industry, says Piers Harding-Rolls, head of games research at Ampere Analysis.
"Tying in with established audiences and building on existing content is quite a safe route for a lot of companies," he adds. In many cases, it is cheaper to update an existing game rather than create a new title from scratch.
Among other remakes that have found big audiences recently are those of Resident Evil 4 and Assassin's Creed Black Flag.
But Ocarina of Time perhaps stands out because, ever since its original release, it has been considered by many as one of the greatest games ever made. "The interest from all the Gen Zs that I work with is really high," says Harding-Rolls. The legend of The Legend of Zelda, as it were.
Clearly, nostalgia is not the only driver of interest in the remake, and today's audiences will expect a game that plays to today's standards.
Games companies must keep innovating when linking contemporary audiences to the past, says Wulf, in order satisfy their desire for fresh experiences. And although Wulf himself was a big fan of the original, he has no personal interest in the Ocarina of Time remake. "I want a new game – I don't want to play an old game," he says. Nostalgia isn't always enough for some.
Plus, critics often highlight a tension between originals and remakes. Which is the definitive version? In 2021, Square Enix released the bizarrely titled Nier Replicant ver.1.22474487139... – a remaster of a game first published in 2010. One reviewer wrote, external, "What we're left with is two nearly identical Niers each vying to be the true Nier."
Fans may react badly should a remaster or remake fail to do justice to the source material. And, in the gaming world, angry fan reactions can be serious.
"There's always going to be that fan base or group of people that are going to nit-pick," says Stephanie Ijoma, chief executive and founder of NNESAGA, a consultancy and creative agency.
Ultimately, games developers working on remakes have to "find the right balance" between appealing to fans and allowing themselves to be creative with the material, she adds. "You can't make art in fear, you can't create in fear."
Ijoma gives the example of Final Fantasy VII. First released in 1997, it got a highly anticipated remake in 2020.
This was a game Ijoma played back in the late 1990s and she was thrilled to be able to share it with younger players today.
Remakes enable this sharing of experiences because getting old computer hardware or video games consoles to work, while a pastime loved by some, is not possible for everyone.
"I've tried multiple times to play Silent Hill 2 because I'm interested in older games but it's such a difficult game to come into nowadays," says Niklas Hallin, a solo indie game developer who runs the studio Neckbolt. "They made a remake and it's so smooth, it just works. It works on your modern hardware."
Hallin did not play many games as a child so he says nostalgia isn't much of a motivator for him. However, in his own games, he likes to include subtle stylistic references to classic games because he knows that this appeals to gamers.
Indie developers often lean on retro games aesthetics not just because people respond well to them – but also because they are easier to achieve. "You can't compete with billion dollar budgets, super high-fidelity, Triple A graphics," he says.
One question remains. The visual difference, today, between games released years apart is, arguably, negligible. So will there be any point in remaking a game from 2026 in, say, 2038? Will technology have moved on so much by then that it's actually worth it?
Harding-Rolls predicts that games companies will still seek to connect new audiences with classic titles by offering updates.
Remakes might become less about graphical improvements and more about editorial adjustments. "Reinterpretations," he says. "Or versions with additional content."
It's never really "game over", is it?
Technology of Business
- Published25 September
- Published1 October
- Published30 September`,
    bodyJa: `How video game remakes tap the power of nostalgia
- Published
The moment she saw footage from the remake of The Legend of Zelda: Ocarina of Time, Kacey Doran picked up her phone. She had to tell her sister.
"Have you seen this?" messaged Doran, excitedly.
Nearly 30 years ago, a 10-year-old Doran had sat in front of her family's TV, reading out the dialogue on screen to her sister, a year younger, as they inched their way through the original Nintendo 64 game's sprawling, puzzle-filled dungeons. Ocarina's fantasy-like story, and beautiful music, enthralled them both.
It was also the first game Doran ever completed. Now, countless memories rushed back to her as she devoured clips of the fully redesigned version, due to arrive on the Switch 2 later this year.
Doran's sister messaged back: "I'm not tearing up… YOU'RE tearing up."
This is the power of nostalgia – and a perfect example of how video games can trigger it. Doran now teaches an esports course at Rowan University in New Jersey. She says the original Ocarina of Time, released in 1998, had a "magical" quality that she hopes to rediscover, and also share with her sister's children.
The video games industry has long leaned on remakes. From Mario Kart to the Final Fantasy series, or even Pac-Man, some games just keep coming back in updated forms, as new generations of gamers emerge and as computer hardware improves, enabling more detailed graphics and increasingly expansive game worlds.
While the emotional hook may be the most significant draw, putting out a remake can be a double-edged sword. Some gamers are very protective of their favourite titles and new versions don't always meet certain fans' astronomically high expectations.
Nostalgia is an important but mixed emotion, says Tim Wulf, at the Centre for Advanced Internet Studies in Bochum, Germany. It has positive aspects but also a kind of sadness, too. Happiness in remembering things that were important to us, and also an awareness that that time is now gone.
"It's a social emotion because memories that induce nostalgia for us are connected to other people," he explains, adding that nostalgia can boost our self-esteem while highlighting key social bonds.
Video games, says Wulf, are notoriously good at triggering nostalgia because gamers can "jump into the same environment". In other words, games are like time machines for our emotions, and returning to fondly remembered places can feel stabilising or reassuring in an ever-changing world.
Doran, for one, notes that when you return to a favourite old game, there's something satisfying about deploying previously learned skills. You know what to do here, you're winning again. Just like the old days.
Putting out remasters and remakes has been a "really successful" strategy for the games industry, says Piers Harding-Rolls, head of games research at Ampere Analysis.
"Tying in with established audiences and building on existing content is quite a safe route for a lot of companies," he adds. In many cases, it is cheaper to update an existing game rather than create a new title from scratch.
Among other remakes that have found big audiences recently are those of Resident Evil 4 and Assassin's Creed Black Flag.
But Ocarina of Time perhaps stands out because, ever since its original release, it has been considered by many as one of the greatest games ever made. "The interest from all the Gen Zs that I work with is really high," says Harding-Rolls. The legend of The Legend of Zelda, as it were.
Clearly, nostalgia is not the only driver of interest in the remake, and today's audiences will expect a game that plays to today's standards.
Games companies must keep innovating when linking contemporary audiences to the past, says Wulf, in order satisfy their desire for fresh experiences. And although Wulf himself was a big fan of the original, he has no personal interest in the Ocarina of Time remake. "I want a new game – I don't want to play an old game," he says. Nostalgia isn't always enough for some.
Plus, critics often highlight a tension between originals and remakes. Which is the definitive version? In 2021, Square Enix released the bizarrely titled Nier Replicant ver.1.22474487139... – a remaster of a game first published in 2010. One reviewer wrote, external, "What we're left with is two nearly identical Niers each vying to be the true Nier."
Fans may react badly should a remaster or remake fail to do justice to the source material. And, in the gaming world, angry fan reactions can be serious.
"There's always going to be that fan base or group of people that are going to nit-pick," says Stephanie Ijoma, chief executive and founder of NNESAGA, a consultancy and creative agency.
Ultimately, games developers working on remakes have to "find the right balance" between appealing to fans and allowing themselves to be creative with the material, she adds. "You can't make art in fear, you can't create in fear."
Ijoma gives the example of Final Fantasy VII. First released in 1997, it got a highly anticipated remake in 2020.
This was a game Ijoma played back in the late 1990s and she was thrilled to be able to share it with younger players today.
Remakes enable this sharing of experiences because getting old computer hardware or video games consoles to work, while a pastime loved by some, is not possible for everyone.
"I've tried multiple times to play Silent Hill 2 because I'm interested in older games but it's such a difficult game to come into nowadays," says Niklas Hallin, a solo indie game developer who runs the studio Neckbolt. "They made a remake and it's so smooth, it just works. It works on your modern hardware."
Hallin did not play many games as a child so he says nostalgia isn't much of a motivator for him. However, in his own games, he likes to include subtle stylistic references to classic games because he knows that this appeals to gamers.
Indie developers often lean on retro games aesthetics not just because people respond well to them – but also because they are easier to achieve. "You can't compete with billion dollar budgets, super high-fidelity, Triple A graphics," he says.
One question remains. The visual difference, today, between games released years apart is, arguably, negligible. So will there be any point in remaking a game from 2026 in, say, 2038? Will technology have moved on so much by then that it's actually worth it?
Harding-Rolls predicts that games companies will still seek to connect new audiences with classic titles by offering updates.
Remakes might become less about graphical improvements and more about editorial adjustments. "Reinterpretations," he says. "Or versions with additional content."
It's never really "game over", is it?
Technology of Business
- Published25 September
- Published1 October
- Published30 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm9qz428nnljo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-30T07:45:00+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4f80/live/10dfbd10-c949-11f1-bc2e-018d645d8d21.jpg",
    readTime: 10,
  },
  {
    id: "crypto-giant-binance-hit-by-largest-hack-4ea100d2",
    title: "Crypto giant Binance hit by 'largest hack in history'",
    titleJa: "Crypto giant Binance hit by 'largest hack in history'",
    summaryJa: "Two analytics firms have attributed the incident to a North Korean hacking unit called TraderTraitor.",
    bodyOriginal: `Crypto giant Binance hit by 'largest hack in history'
- Published
Cryptocurrency giant Binance said on Thursday that $6.3bn (£4.7bn) of digital assets have been impacted by what has been described as the "largest hack in history".
The world's biggest crypto exchange said about half of those assets have been frozen with the help of other platforms, adding that it will "cover all losses".
Early checks show the incident may have involved an engineer's laptop that had been compromised, which allowed an attacker to make unauthorised withdrawals, Binance said.
Two analytics firms have attributed the incident, which eclipses a record-setting $1.5bn hack on the Bybit exchange in 2025, to a North Korean hacking unit called TraderTraitor.
AI-powered investigations company TRM Labs said in a report that several elements of the Binance attack resemble earlier North Korean-linked incidents, including the Bybit hack.
The lab's global head of policy Ari Redbord told the BBC the Binance hack is a "watershed moment" that is unlike anything the industry has seen.
The attacker still holds an enormous sum of stolen assets, meaning efforts to trace and recover the funds are far from over, Redbord added.
Chainalysis, another crypto analytics firm, also said it has "high confidence" that the North Korean group are linked to the hack.
Eric Jardine, Chainalysis' Head of Research, urged every exchange to remain vigilant as the platforms are attractive targets for hackers due to the sheer value of assets.
Binance did not directly respond to BBC queries about the incident's potential links to North Korea but said: "We are working closely with our law enforcement partners to confirm the identity of these criminals and bring them to justice."
The incident concerns Binance.com - while much smaller crypto platform Binance.US, which provides trading services specifically for American residents - said its platform is not affected by the issue.
In a series of posts, Yi He, Binance's co-chief executive, thanked various cryptocurrency issuers for freezing the assets.
"Safety first: withdrawals are currently disabled until the environment is confirmed to be secure," she said.
Two other major crypto platforms, Tether and Circle, said they have frozen a total of about $2.4bn of assets in response to the potential Binance hack.
Circle chief executive Jeremy Allaire said his firm is "closely tracking reports of a potential exploit involving Binance" and that his company has frozen more than $800m in assets linked to the incident.
Circle is the issuer and co-creator of the USDC, one of the world's largest US dollar-backed cryptocurrencies.
Tether CEO Paolo Ardoino said his firm has frozen around $1.6bn "related to a potential Binance exchange hack."
"Protecting the industry and our partners is our main priority," said Ardoino, whose company issues a cryptocurrency known as USDT.
World Liberty Financial, a crypto company linked to US President Donald Trump and his family, said it has worked with its partners to freeze stolen funds.
Crypto exchange Coinbase said it was unaffected by the incident and was monitoring the situation.
Several crypto industry observers had flagged concerns about a potential hack on Binance hours before the exchange confirmed the security issue.
Binance, which was founded in China in 2017, allows users to trade digital assets and is estimated to have more than 300 million registered users worldwide.
The exchange has been subject of regulatory scrutiny around the world.
The company said in 2024 that it has more than $160bn in assets under custody.
Bitcoin dropped by more than 4% following the alerts. The price of other major cryptocurrencies including Ethereum and Solana also fell sharply.
Related topics
- Published26 August`,
    bodyJa: `Crypto giant Binance hit by 'largest hack in history'
- Published
Cryptocurrency giant Binance said on Thursday that $6.3bn (£4.7bn) of digital assets have been impacted by what has been described as the "largest hack in history".
The world's biggest crypto exchange said about half of those assets have been frozen with the help of other platforms, adding that it will "cover all losses".
Early checks show the incident may have involved an engineer's laptop that had been compromised, which allowed an attacker to make unauthorised withdrawals, Binance said.
Two analytics firms have attributed the incident, which eclipses a record-setting $1.5bn hack on the Bybit exchange in 2025, to a North Korean hacking unit called TraderTraitor.
AI-powered investigations company TRM Labs said in a report that several elements of the Binance attack resemble earlier North Korean-linked incidents, including the Bybit hack.
The lab's global head of policy Ari Redbord told the BBC the Binance hack is a "watershed moment" that is unlike anything the industry has seen.
The attacker still holds an enormous sum of stolen assets, meaning efforts to trace and recover the funds are far from over, Redbord added.
Chainalysis, another crypto analytics firm, also said it has "high confidence" that the North Korean group are linked to the hack.
Eric Jardine, Chainalysis' Head of Research, urged every exchange to remain vigilant as the platforms are attractive targets for hackers due to the sheer value of assets.
Binance did not directly respond to BBC queries about the incident's potential links to North Korea but said: "We are working closely with our law enforcement partners to confirm the identity of these criminals and bring them to justice."
The incident concerns Binance.com - while much smaller crypto platform Binance.US, which provides trading services specifically for American residents - said its platform is not affected by the issue.
In a series of posts, Yi He, Binance's co-chief executive, thanked various cryptocurrency issuers for freezing the assets.
"Safety first: withdrawals are currently disabled until the environment is confirmed to be secure," she said.
Two other major crypto platforms, Tether and Circle, said they have frozen a total of about $2.4bn of assets in response to the potential Binance hack.
Circle chief executive Jeremy Allaire said his firm is "closely tracking reports of a potential exploit involving Binance" and that his company has frozen more than $800m in assets linked to the incident.
Circle is the issuer and co-creator of the USDC, one of the world's largest US dollar-backed cryptocurrencies.
Tether CEO Paolo Ardoino said his firm has frozen around $1.6bn "related to a potential Binance exchange hack."
"Protecting the industry and our partners is our main priority," said Ardoino, whose company issues a cryptocurrency known as USDT.
World Liberty Financial, a crypto company linked to US President Donald Trump and his family, said it has worked with its partners to freeze stolen funds.
Crypto exchange Coinbase said it was unaffected by the incident and was monitoring the situation.
Several crypto industry observers had flagged concerns about a potential hack on Binance hours before the exchange confirmed the security issue.
Binance, which was founded in China in 2017, allows users to trade digital assets and is estimated to have more than 300 million registered users worldwide.
The exchange has been subject of regulatory scrutiny around the world.
The company said in 2024 that it has more than $160bn in assets under custody.
Bitcoin dropped by more than 4% following the alerts. The price of other major cryptocurrencies including Ethereum and Solana also fell sharply.
Related topics
- Published26 August`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwg7xp8kx4v5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-30T05:15:16+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6a4c/live/ee32b970-d406-11f1-b5d5-035446124886.jpg",
    readTime: 9,
  },
  {
    id: "boj-holds-rates-as-underlying-inflation-55c73de1",
    title: "BOJ holds rates as underlying inflation aligns with 2% target for first time since 2013",
    titleJa: "BOJ holds rates as underlying inflation aligns with 2% target for first time since 2013",
    summaryJa: "The BOJ declared that its underlying inflation target of 2% has been met, the first time the central bank has done so since it set the target in 2013.",
    bodyOriginal: `The Bank of Japan declared that underlying inflation in the country was "generally consistent" with its target of 2%, the first time it has made that assessment since adopting the target in 2013.
Before this, the BOJ used to say that underlying inflation has been "approaching 2 percent."
This comes as the central bank expectedly held rates at 1.25%, still at its highest level since 1995.
The decision was split 8-1, with board member Hajime Takata dissenting. Takata had wanted the bank to hike its policy rate to 1.5%.
The BOJ also upgraded its inflation forecast for its fiscal year 2027 to 2.6% from 2.4%, with the so-called "core-core" inflation forecast also raised to 2.7% from 2.6%. The "core-core" inflation strips out prices of fresh food and energy.
It also flagged a risk that underlying inflation will deviate upward beyond 2%, saying that "firms' behavior has been shifting more toward raising wages and prices and there are various factors that could drive up prices."
Describing this as a "hawkish hold," Krishna Bhimavarapu, APAC economist at State Street Investment Management said that the BOJ sees more hikes ahead and is increasingly confident that the target is being achieved through a "self-sustaining wage-price-consumption cycle."
However, he also added that growth in the country does not justify rushing the next move.
Bhimavarapu forecasts that Japan's third quarter GDP growth is likely to lose momentum, with consumption still the weakest link in the cycle.
A CNBC survey of 16 economists before the decision revealed that all surveyed expect the BOJ to set the stage for a rate hike in December or January next year, as domestic inflation and wages continue to rise.
Thirteen respondents said they expect a terminal rate, or the level at which the BOJ is expected to stop its tightening cycle, of 1.75% to 2% by around mid-2027.
Japan has been grappling with a weak yen and high energy prices that have pushed up inflation.
However, experts have told CNBC that CPI numbers are being held down by energy subsidies from the Takaichi administration.
The most recent inflation numbers for September revealed core inflation hit their highest level in 2026, coming in at 2.1% and overshooting expectations.
Earlier this month, Finance Minister Satsuki Katayama reportedly told parliament that Japan was "on the cusp of shifting to a period of sustained inflation driven by rising wages."
Japan's inflation-adjusted wages rose for the eighth month in a row in August, climbing 1.5% from a year earlier, according to the most recent government data, signaling potential wage-growth-driven inflation as well.
— CNBC's Lisa Kim contributed to this report.`,
    bodyJa: `The Bank of Japan declared that underlying inflation in the country was "generally consistent" with its target of 2%, the first time it has made that assessment since adopting the target in 2013.
Before this, the BOJ used to say that underlying inflation has been "approaching 2 percent."
This comes as the central bank expectedly held rates at 1.25%, still at its highest level since 1995.
The decision was split 8-1, with board member Hajime Takata dissenting. Takata had wanted the bank to hike its policy rate to 1.5%.
The BOJ also upgraded its inflation forecast for its fiscal year 2027 to 2.6% from 2.4%, with the so-called "core-core" inflation forecast also raised to 2.7% from 2.6%. The "core-core" inflation strips out prices of fresh food and energy.
It also flagged a risk that underlying inflation will deviate upward beyond 2%, saying that "firms' behavior has been shifting more toward raising wages and prices and there are various factors that could drive up prices."
Describing this as a "hawkish hold," Krishna Bhimavarapu, APAC economist at State Street Investment Management said that the BOJ sees more hikes ahead and is increasingly confident that the target is being achieved through a "self-sustaining wage-price-consumption cycle."
However, he also added that growth in the country does not justify rushing the next move.
Bhimavarapu forecasts that Japan's third quarter GDP growth is likely to lose momentum, with consumption still the weakest link in the cycle.
A CNBC survey of 16 economists before the decision revealed that all surveyed expect the BOJ to set the stage for a rate hike in December or January next year, as domestic inflation and wages continue to rise.
Thirteen respondents said they expect a terminal rate, or the level at which the BOJ is expected to stop its tightening cycle, of 1.75% to 2% by around mid-2027.
Japan has been grappling with a weak yen and high energy prices that have pushed up inflation.
However, experts have told CNBC that CPI numbers are being held down by energy subsidies from the Takaichi administration.
The most recent inflation numbers for September revealed core inflation hit their highest level in 2026, coming in at 2.1% and overshooting expectations.
Earlier this month, Finance Minister Satsuki Katayama reportedly told parliament that Japan was "on the cusp of shifting to a period of sustained inflation driven by rising wages."
Japan's inflation-adjusted wages rose for the eighth month in a row in August, climbing 1.5% from a year earlier, according to the most recent government data, signaling potential wage-growth-driven inflation as well.
— CNBC's Lisa Kim contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/30/boj-inflation-target-rates.html",
    publishedAt: "2026-10-30T04:19:38+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "israel-faces-weeks-of-coalition-haggling-feb799ed",
    title: "Israel faces weeks of coalition haggling as Netanyahu’s party claims election 'stolen'",
    titleJa: "Israel faces weeks of coalition haggling as Netanyahu’s party claims election 'stolen'",
    summaryJa: "Israel's election leaves the country facing weeks of coalition bargaining and an uphill battle for the opposition party to form a majority government.",
    bodyOriginal: `Israel’s final election count left both Prime Minister Benjamin Netanyahu’s right-wing bloc and the opposition led by former military chief Gadi Eisenkot short of the 61 seats needed to form a government.
The outcome sets up weeks of coalition bargaining and political uncertainty, with the opposition alliance facing an uphill battle to assemble a majority government in the 120-seat Knesset.
Netanyahu’s Likud party and its hard-right allies won 53 seats in the Knesset, according to the Central Elections Committee, short of the 61 needed for a majority and down from 64 seats in the 2022 election.
The main opposition bloc, led by Eisenkot, won 48 seats, falling short of the 61 needed for a majority.
Eisenkot now faces a difficult coalition path. Most parties in his bloc have rejected relying on the Arab-led parties, while Eisenkot has said neither meets his conditions for a partnership. The Joint List and Ra’am won a combined 19 seats, an all-time high for Arab-led parties.
Netanyahu's party has intensified claims that the Arab-led parties "stole" the election, amplifying an allegation that spread after exit polls showed the prime minister's bloc had suffered a setback.
Likud asserted Thursday, without evidence, that foreign interference was "aimed at facilitating a foreign takeover of the Knesset, the Islamization of Israel and toppling of the right wing government."
The statement came a day after Supreme Court Justice Noam Sohlberg, who chairs the Central Elections Committee, asked the Shin Bet security agency to investigate "serious suspicions" of improper influence through funding from foreign entities.
Sohlberg said he couldn't attest to the substance of the suspicions and directed agencies to verify the claims.
Qatar, accused of trying to mobilize Arab voters, has denied interfering in the elections, calling the allegations “ridiculous and dangerous in equal measure.”
Opposition leaders also called for a full investigation, while warning against using the allegations to cast doubt on or otherwise influence the election results.
Although the vote count is complete, the results remain subject to possible “minor corrections” before they are certified and submitted to President Isaac Herzog next Wednesday, according to the Central Elections Committee.
The new Knesset is due to be sworn in Nov. 10, while parties have until Nov. 18 to challenge the results.
'Comeback kid'
A prolonged political stalemate could leave Netanyahu in office as caretaker prime minister through another round of coalition negotiations or potentially another election. A return to war with Iran also remains a key risk.
"Bibi [Netanyahu] is known as a 'comeback kid.' He did not become the longest-serving prime minister by accident," said P R Kumaraswamy, emeritus professor at Jawaharlal Nehru University, adding that he expected Netanyahu to maintain his current approach on Iran and Gaza for now.
Israeli assets have come under pressure this week with the shekel sustaining the worst intraday decline since 2023 on Wednesday before regaining ground. Tel Aviv's key benchmark stock index dropped 4.1% for the week as of Friday morning, according to LSEG data.
"We expect some near-term volatility for Israeli assets until a new government is formed and decides on fiscal consolidation and war-related spending," said Eirini Tsekeridou, a fixed-income analyst at Julius Baer. She added that Israel's economic fundamentals and monetary policy should provide support.
What happens next?
President Herzog will begin consulting with the competing parties next week and name the leader he believes has the best chance of forming a majority government.
Netanyahu may get the first call to kick off the 28-day process to build a coalition that can be extended by up to 14 day.
If those efforts fail, new elections will be called with Netanyahu remaining in office in the interim. The previous government-formation efforts have taken between 20 and 100 days, according to the Israel Democracy Institute.
Netanyahu could also push for a national unity government, arguing that the country should come together as it faces conflict on several fronts, though many of his opponents have ruled out such an arrangement.`,
    bodyJa: `Israel’s final election count left both Prime Minister Benjamin Netanyahu’s right-wing bloc and the opposition led by former military chief Gadi Eisenkot short of the 61 seats needed to form a government.
The outcome sets up weeks of coalition bargaining and political uncertainty, with the opposition alliance facing an uphill battle to assemble a majority government in the 120-seat Knesset.
Netanyahu’s Likud party and its hard-right allies won 53 seats in the Knesset, according to the Central Elections Committee, short of the 61 needed for a majority and down from 64 seats in the 2022 election.
The main opposition bloc, led by Eisenkot, won 48 seats, falling short of the 61 needed for a majority.
Eisenkot now faces a difficult coalition path. Most parties in his bloc have rejected relying on the Arab-led parties, while Eisenkot has said neither meets his conditions for a partnership. The Joint List and Ra’am won a combined 19 seats, an all-time high for Arab-led parties.
Netanyahu's party has intensified claims that the Arab-led parties "stole" the election, amplifying an allegation that spread after exit polls showed the prime minister's bloc had suffered a setback.
Likud asserted Thursday, without evidence, that foreign interference was "aimed at facilitating a foreign takeover of the Knesset, the Islamization of Israel and toppling of the right wing government."
The statement came a day after Supreme Court Justice Noam Sohlberg, who chairs the Central Elections Committee, asked the Shin Bet security agency to investigate "serious suspicions" of improper influence through funding from foreign entities.
Sohlberg said he couldn't attest to the substance of the suspicions and directed agencies to verify the claims.
Qatar, accused of trying to mobilize Arab voters, has denied interfering in the elections, calling the allegations “ridiculous and dangerous in equal measure.”
Opposition leaders also called for a full investigation, while warning against using the allegations to cast doubt on or otherwise influence the election results.
Although the vote count is complete, the results remain subject to possible “minor corrections” before they are certified and submitted to President Isaac Herzog next Wednesday, according to the Central Elections Committee.
The new Knesset is due to be sworn in Nov. 10, while parties have until Nov. 18 to challenge the results.
'Comeback kid'
A prolonged political stalemate could leave Netanyahu in office as caretaker prime minister through another round of coalition negotiations or potentially another election. A return to war with Iran also remains a key risk.
"Bibi [Netanyahu] is known as a 'comeback kid.' He did not become the longest-serving prime minister by accident," said P R Kumaraswamy, emeritus professor at Jawaharlal Nehru University, adding that he expected Netanyahu to maintain his current approach on Iran and Gaza for now.
Israeli assets have come under pressure this week with the shekel sustaining the worst intraday decline since 2023 on Wednesday before regaining ground. Tel Aviv's key benchmark stock index dropped 4.1% for the week as of Friday morning, according to LSEG data.
"We expect some near-term volatility for Israeli assets until a new government is formed and decides on fiscal consolidation and war-related spending," said Eirini Tsekeridou, a fixed-income analyst at Julius Baer. She added that Israel's economic fundamentals and monetary policy should provide support.
What happens next?
President Herzog will begin consulting with the competing parties next week and name the leader he believes has the best chance of forming a majority government.
Netanyahu may get the first call to kick off the 28-day process to build a coalition that can be extended by up to 14 day.
If those efforts fail, new elections will be called with Netanyahu remaining in office in the interim. The previous government-formation efforts have taken between 20 and 100 days, according to the Israel Democracy Institute.
Netanyahu could also push for a national unity government, arguing that the country should come together as it faces conflict on several fronts, though many of his opponents have ruled out such an arrangement.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/30/israel-election-netanyahu-eisenkot-coalition-talks-.html",
    publishedAt: "2026-10-30T03:28:10+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "what-gave-this-city-its-best-place-to-re-e034d767",
    title: "What gave this city its ‘best place to retire’ crown? You can actually afford to live there.",
    titleJa: "What gave this city its ‘best place to retire’ crown? You can actually afford to live there.",
    summaryJa: "Low cost of living, high quality of life and favorable taxes for retirees, for the win.",
    bodyOriginal: `Low cost of living, high quality of life and favorable taxes for retirees, for the win.`,
    bodyJa: `Low cost of living, high quality of life and favorable taxes for retirees, for the win.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/what-gave-this-city-its-best-place-to-retire-crown-you-can-actually-afford-to-live-there-a06f8f4d?mod=mw_rss_topstories",
    publishedAt: "2026-10-30T03:16:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-51699751",
    readTime: 2,
  },
  {
    id: "amazon-s-stock-drops-even-in-the-face-of-5935702c",
    title: "Amazon’s stock drops — even in the face of a bold new cloud forecast",
    titleJa: "Amazon’s stock drops — even in the face of a bold new cloud forecast",
    summaryJa: "Modest AWS results and weak advertising growth left Wall Street disappointed in Amazon’s third-quarter earnings",
    bodyOriginal: `Modest AWS results and weak advertising growth left Wall Street disappointed in Amazon’s third-quarter earnings`,
    bodyJa: `Modest AWS results and weak advertising growth left Wall Street disappointed in Amazon’s third-quarter earnings`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/amazons-bold-cloud-forecast-isnt-enough-to-stave-off-a-stock-drop-ee23c1bb?mod=mw_rss_topstories",
    publishedAt: "2026-10-30T00:15:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-49250014",
    readTime: 2,
  },
  {
    id: "a-starbucks-turnaround-is-brewing-but-pe-2d6176f3",
    title: "A Starbucks turnaround is brewing — but perhaps not quickly enough for investors",
    titleJa: "A Starbucks turnaround is brewing — but perhaps not quickly enough for investors",
    summaryJa: "The coffee chain beat expectations on a key sales metric, but its stock was still moving lower.",
    bodyOriginal: `The coffee chain beat expectations on a key sales metric, but its stock was still moving lower.`,
    bodyJa: `The coffee chain beat expectations on a key sales metric, but its stock was still moving lower.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/a-starbucks-turnaround-is-brewing-but-perhaps-not-quickly-enough-3b5f57ac?mod=mw_rss_topstories",
    publishedAt: "2026-10-30T00:14:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-01171452",
    readTime: 2,
  },
  {
    id: "how-elections-worldwide-are-testing-trum-cd9b4cad",
    title: "How elections worldwide are testing Trump’s influence abroad",
    titleJa: "How elections worldwide are testing Trump’s influence abroad",
    summaryJa: "Recent election losses by leaders linked to Trump have prompted questions about whether his influence over the global right is weakening.",
    bodyOriginal: `In August, President Donald Trump claimed that 97% of Republican candidates he backed had won their primary races.
And it's true that Trump has shown an ability to influence races particularly in Republican primaries, picking off politicians he didn't like such as Sen. John Cornyn, R-Texas, and Rep. Thomas Massie, R-Ky.
But while he hasn't shied away from expressing his opinions on foreign leaders, his influence over other countries' elections is proving less strong.
Brazilian President Luiz Inácio Lula da Silva won reelection on Sunday, defeating Trump-aligned Flávio Bolsonaro, whose father Jair had also been a Trump ally.
Also last weekend, a student-led movement in Serbia defeated the ruling party of Aleksandar Vucic, a populist leader who had cultivated ties with Trump and his circle. Vucic had served as Serbia's president from 2017, and as prime minister from 2014 to 2017.
During his concession speech, Vucic said that the loss was due to a "legitimization of a revolution carried out by the people with direct support from various European countries and the American deep state, the one that opposes President Trump."
Earlier this year, Vice President JD Vance had visited Hungary for two days and publicly backed then-Prime Minister Viktor Orban. However, Orban, who is also a staunch ally and endorsed by Trump, lost that election and was ejected from office after 16 years.
In October, Trump also endorsed Israeli Prime Minister Benjamin Netanyahu for reelection. While the results of the Oct. 27 election are not finalized yet, the Associated Press said that Netanhayu's Likud party had appeared to lose its majority in the country's parliament.
Still, Trump's influence on any one global election remains variable, experts said.
"Elections are always national first and regional or global a very distant second," Cas Mudde, professor of international affairs at the University of Georgia, told CNBC.
Furthermore, it is also not clear that Trump ever had a great influence over far-right actors elsewhere, said Stijn van Kessel, professor of comparative politics at Queen Mary University of London.
"Far-right parties and politicians like to celebrate each others' victories as it allows them to portray themselves as part of a successful global movement," he said, adding that those relationships can sour quickly when national interests collide and the foreign partner turns toxic in the eyes of the domestic electorate.
Van Kessel pointed to the fallout between Trump and Italian Prime Minister Giorgia Meloni earlier this year, which stemmed from Italy's refusal to allow U.S. aircraft to use one of the NATO airbases for its war on Iran.
Trump later claimed that Meloni "begged" him for a photo at the G7 summit, a claim that sparked a denial from Meloni.
Right wing strength
Still, right-wing movements remain strong in numerous places globally. In France, Marine Le Pen is currently the frontrunner to succeed President Emmanuel Macron, according to a compilation of polls by Politico. However, historically she has often started out leading a crowded field of hopefuls before support consolidates around a more moderate candidate.
In Germany, the far-right Alternative fur Deutschland, or AfD party won 20.8% of the vote in the country's February 2025 federal election, making it the country's largest opposition party. Trump ally Javier Milei leads Argentina, and Colombia's new President Abelardo de la Espriella was elected on a far-right platform.
Still, Mudde noted that most far-right leaders disassociate themselves from Trump when he becomes more unpopular in their country. Trump's poll numbers remain near a record low even in the U.S. over issues including the Iran war and the cost of living as energy prices soar.
"Voters are willing to give anyone a shot when they are economically frustrated, but when those experiments fail, they move on to something else," said David Barker, a professor of government at American University in Washington, D.C. At this point, Trump "undermines his allies' ability to maintain support."`,
    bodyJa: `In August, President Donald Trump claimed that 97% of Republican candidates he backed had won their primary races.
And it's true that Trump has shown an ability to influence races particularly in Republican primaries, picking off politicians he didn't like such as Sen. John Cornyn, R-Texas, and Rep. Thomas Massie, R-Ky.
But while he hasn't shied away from expressing his opinions on foreign leaders, his influence over other countries' elections is proving less strong.
Brazilian President Luiz Inácio Lula da Silva won reelection on Sunday, defeating Trump-aligned Flávio Bolsonaro, whose father Jair had also been a Trump ally.
Also last weekend, a student-led movement in Serbia defeated the ruling party of Aleksandar Vucic, a populist leader who had cultivated ties with Trump and his circle. Vucic had served as Serbia's president from 2017, and as prime minister from 2014 to 2017.
During his concession speech, Vucic said that the loss was due to a "legitimization of a revolution carried out by the people with direct support from various European countries and the American deep state, the one that opposes President Trump."
Earlier this year, Vice President JD Vance had visited Hungary for two days and publicly backed then-Prime Minister Viktor Orban. However, Orban, who is also a staunch ally and endorsed by Trump, lost that election and was ejected from office after 16 years.
In October, Trump also endorsed Israeli Prime Minister Benjamin Netanyahu for reelection. While the results of the Oct. 27 election are not finalized yet, the Associated Press said that Netanhayu's Likud party had appeared to lose its majority in the country's parliament.
Still, Trump's influence on any one global election remains variable, experts said.
"Elections are always national first and regional or global a very distant second," Cas Mudde, professor of international affairs at the University of Georgia, told CNBC.
Furthermore, it is also not clear that Trump ever had a great influence over far-right actors elsewhere, said Stijn van Kessel, professor of comparative politics at Queen Mary University of London.
"Far-right parties and politicians like to celebrate each others' victories as it allows them to portray themselves as part of a successful global movement," he said, adding that those relationships can sour quickly when national interests collide and the foreign partner turns toxic in the eyes of the domestic electorate.
Van Kessel pointed to the fallout between Trump and Italian Prime Minister Giorgia Meloni earlier this year, which stemmed from Italy's refusal to allow U.S. aircraft to use one of the NATO airbases for its war on Iran.
Trump later claimed that Meloni "begged" him for a photo at the G7 summit, a claim that sparked a denial from Meloni.
Right wing strength
Still, right-wing movements remain strong in numerous places globally. In France, Marine Le Pen is currently the frontrunner to succeed President Emmanuel Macron, according to a compilation of polls by Politico. However, historically she has often started out leading a crowded field of hopefuls before support consolidates around a more moderate candidate.
In Germany, the far-right Alternative fur Deutschland, or AfD party won 20.8% of the vote in the country's February 2025 federal election, making it the country's largest opposition party. Trump ally Javier Milei leads Argentina, and Colombia's new President Abelardo de la Espriella was elected on a far-right platform.
Still, Mudde noted that most far-right leaders disassociate themselves from Trump when he becomes more unpopular in their country. Trump's poll numbers remain near a record low even in the U.S. over issues including the Iran war and the cost of living as energy prices soar.
"Voters are willing to give anyone a shot when they are economically frustrated, but when those experiments fail, they move on to something else," said David Barker, a professor of government at American University in Washington, D.C. At this point, Trump "undermines his allies' ability to maintain support."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/30/election-trump-brazil-serbia-hungary.html",
    publishedAt: "2026-10-30T00:13:22+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "from-workshops-to-the-catwalk-why-mended-c1508bc8",
    title: "From workshops to the catwalk - why mended clothes are going mainstream",
    titleJa: "From workshops to the catwalk - why mended clothes are going mainstream",
    summaryJa: "From workshops to the catwalk - why mended clothes are going mainstream- Published",
    bodyOriginal: `From workshops to the catwalk - why mended clothes are going mainstream
- Published
If Alice Brown is browsing in second-hand shops and finds a jumper with a hole, that won't stop her buying it.
"I see it as challenge," says the 27-year-old forest ranger from Lincolnshire.
She is a champion of the growing fashion for eye-catching repairs.
Over the last year she has developed her own unique style, needle-felting cute animals and insects to cover moth holes, stains and other imperfections, winning her a huge following online.
"The natural place for decoration is in the centre at the front. If the hole is under the arm or on the shoulder, it forces you to think about the design," she says.
Often dubbed "visible mending" the trend is spreading from hobby crafters and community workshops, even drawing in fast-fashion brands and reaching the designer catwalks this year.
At one Saturday morning workshop in Brighton, Jayne Eagle shows her students how to attach a patch of fabric behind a tear so the cat-face design peeps through.
Then she instructs them in stitching techniques inspired by the traditional Japanese methods Boro and Sashiko. Instead of matching the thread colour to the garment, they make the mend highly decorative using geometric patterns in large white stitching.
She also offers classes in darning using contrasting vibrant colours that celebrate, rather than disguise, the repair.
One student, Nicola, has already used her newfound skills to stitch over sunscreen marks on a T-shirt "making a feature of it" and is now delighted that people "stop seeing the stains and just see the decoration".
Another student, Lisa, says her mother's generation would never have wanted the mends to show. "Now part of it is being proud of what you've done," she says.
Lisa bought a second-hand jacket online, but snipped the fabric with the scissors when she was opening the package. She managed to patch it in a way that "looks intentional".
"I was actually pointing it out to people," she laughs.
In the past mending was primarily about saving money, by wearing clothes for longer, rather than buying new. But visible mending is about celebrating that choice.
The trend took off about six years ago, Jayne says, and has boomed since.
An era of "throwaway" fast fashion from the 1980s onwards undermined the tradition of looking after and mending your clothes and people lost the skills, she says.
The revival of interest feels to her like a backlash against overproduction in the fashion industry and the damage it causes: the pollution, carbon emissions, water use, and poor labour conditions.
So perhaps it is surprising just how popular mended style is proving among retailers, with brands from Ralph Lauren to ultra-fast-fashion firm Shein currently selling stitched and patched garments, albeit in both of those cases brand new off the peg.
Other High Street chains are adopting a more authentic approach, offering in-house repairs and workshops.
"We want to give customers practical ways to extend the life of the clothes they already love, rather than simply replacing them," says Uniqlo's head of sustainability, Maria Ledous.
Primark, often seen as a fast-fashion retailer due to its lower prices, has also joined the trend.
"We don't think that affordability and durability should be opposites," says Vicki Swain, the brand's longevity lead.
Outdoor brand Finisterre says around a fifth of the mends it provides for customers are designed to be eye-catching, while premium artisan clothing store Toast says around a third of customers go for that option.
Part of the "magic" is that customers can bring in a garment and "choose what they'd like it to become next", says Toast chief executive Suzie de Rohan Willner.
Toast's repair services are free, but off-the-peg "renewed" pieces fetch higher prices than the originals to reflect their unique character.
Levi's, which boasts probably the longest tradition of being fixed up by its fans using anything from rhinestones to fringed cuffs, is rolling out a workshop programme this year.
The firm says its research shows younger customers in particular want to repair more but don't know how.
For now, Levi's' workshops focus on traditional mending skills, such as sewing on a button and hemming, rather than visible mends, and at a recent launch event in London, that seemed to be what its Gen Z participants were looking for.
"I'm from East London. If you have holes in your clothes people are like 'Ha ha! You're poor!'," says 16-year-old school student Bianca.
Theo, 19, says he'd rather learn how to mend without it showing.
"I would want [the jeans] to look how I originally bought them," he says.
He has a side hustle selling clothes at car boot sales and thinks traditional repair skills would make it more lucrative.
His friend Nicholas, also 19, says most people want to look "fresh".
"No-one wants to look like they came out of a dumpster," he says.
Still, Paul Dillinger, Levi's head of global design innovation, thinks more creative repairs will win them over as they pick up more skills.
"No-one has time for that perfect 'straight from the shop' thing. That's not cool.
"People crave agency," he says. "Mending is a demonstration of humanity: it's not a mustard stain, it's a memory of a great day in the ballpark."`,
    bodyJa: `From workshops to the catwalk - why mended clothes are going mainstream
- Published
If Alice Brown is browsing in second-hand shops and finds a jumper with a hole, that won't stop her buying it.
"I see it as challenge," says the 27-year-old forest ranger from Lincolnshire.
She is a champion of the growing fashion for eye-catching repairs.
Over the last year she has developed her own unique style, needle-felting cute animals and insects to cover moth holes, stains and other imperfections, winning her a huge following online.
"The natural place for decoration is in the centre at the front. If the hole is under the arm or on the shoulder, it forces you to think about the design," she says.
Often dubbed "visible mending" the trend is spreading from hobby crafters and community workshops, even drawing in fast-fashion brands and reaching the designer catwalks this year.
At one Saturday morning workshop in Brighton, Jayne Eagle shows her students how to attach a patch of fabric behind a tear so the cat-face design peeps through.
Then she instructs them in stitching techniques inspired by the traditional Japanese methods Boro and Sashiko. Instead of matching the thread colour to the garment, they make the mend highly decorative using geometric patterns in large white stitching.
She also offers classes in darning using contrasting vibrant colours that celebrate, rather than disguise, the repair.
One student, Nicola, has already used her newfound skills to stitch over sunscreen marks on a T-shirt "making a feature of it" and is now delighted that people "stop seeing the stains and just see the decoration".
Another student, Lisa, says her mother's generation would never have wanted the mends to show. "Now part of it is being proud of what you've done," she says.
Lisa bought a second-hand jacket online, but snipped the fabric with the scissors when she was opening the package. She managed to patch it in a way that "looks intentional".
"I was actually pointing it out to people," she laughs.
In the past mending was primarily about saving money, by wearing clothes for longer, rather than buying new. But visible mending is about celebrating that choice.
The trend took off about six years ago, Jayne says, and has boomed since.
An era of "throwaway" fast fashion from the 1980s onwards undermined the tradition of looking after and mending your clothes and people lost the skills, she says.
The revival of interest feels to her like a backlash against overproduction in the fashion industry and the damage it causes: the pollution, carbon emissions, water use, and poor labour conditions.
So perhaps it is surprising just how popular mended style is proving among retailers, with brands from Ralph Lauren to ultra-fast-fashion firm Shein currently selling stitched and patched garments, albeit in both of those cases brand new off the peg.
Other High Street chains are adopting a more authentic approach, offering in-house repairs and workshops.
"We want to give customers practical ways to extend the life of the clothes they already love, rather than simply replacing them," says Uniqlo's head of sustainability, Maria Ledous.
Primark, often seen as a fast-fashion retailer due to its lower prices, has also joined the trend.
"We don't think that affordability and durability should be opposites," says Vicki Swain, the brand's longevity lead.
Outdoor brand Finisterre says around a fifth of the mends it provides for customers are designed to be eye-catching, while premium artisan clothing store Toast says around a third of customers go for that option.
Part of the "magic" is that customers can bring in a garment and "choose what they'd like it to become next", says Toast chief executive Suzie de Rohan Willner.
Toast's repair services are free, but off-the-peg "renewed" pieces fetch higher prices than the originals to reflect their unique character.
Levi's, which boasts probably the longest tradition of being fixed up by its fans using anything from rhinestones to fringed cuffs, is rolling out a workshop programme this year.
The firm says its research shows younger customers in particular want to repair more but don't know how.
For now, Levi's' workshops focus on traditional mending skills, such as sewing on a button and hemming, rather than visible mends, and at a recent launch event in London, that seemed to be what its Gen Z participants were looking for.
"I'm from East London. If you have holes in your clothes people are like 'Ha ha! You're poor!'," says 16-year-old school student Bianca.
Theo, 19, says he'd rather learn how to mend without it showing.
"I would want [the jeans] to look how I originally bought them," he says.
He has a side hustle selling clothes at car boot sales and thinks traditional repair skills would make it more lucrative.
His friend Nicholas, also 19, says most people want to look "fresh".
"No-one wants to look like they came out of a dumpster," he says.
Still, Paul Dillinger, Levi's head of global design innovation, thinks more creative repairs will win them over as they pick up more skills.
"No-one has time for that perfect 'straight from the shop' thing. That's not cool.
"People crave agency," he says. "Mending is a demonstration of humanity: it's not a mustard stain, it's a memory of a great day in the ballpark."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmwy9qe5r1z3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-30T00:00:35+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/04bf/live/f3978b70-d08c-11f1-a701-fddedf244c16.jpg",
    readTime: 10,
  },
  {
    id: "circle-tether-freeze-funds-impacted-by-p-e76b98b9",
    title: "Circle, Tether freeze funds impacted by potential Binance 'security issue'",
    titleJa: "Circle, Tether freeze funds impacted by potential Binance 'security issue'",
    summaryJa: "Binance, the world's largest crypto exchange, said it was actively investigating the matter and that funds are \"completley safe.\"",
    bodyOriginal: `Several crypto firms, including Circle Internet Group and Tether, on Thursday froze roughly $1.8 billion worth of funds tied to a potential hack on cryptocurrency exchange Binance.
The world's largest crypto exchange by daily trading volumes has not explicitly confirmed that it has suffered an exploit as of writing time. In a social media post, the company said it was investigating "a potential security issue" on its trading platform.
"Our teams are aware of reports of a potential security issue and are actively investigating," a Binance spokesperson said. "Rest assured that user funds are completely safe. Our security teams are reviewing all relevant information with urgency, and we will provide updates through official Binance channels as soon as we have verified information."
Circle CEO Jeremy Allaire said Thursday evening in a social media post that the company had frozen more than 800 million in USD Coin associated with the incident. USDT stablecoin issuer Tether CEO Paolo Ardoino also said in on X that his firm had frozen more than 1.5 billion of its stablecoin that may have been related to a potential breach.
Later, Binance co-founder Yi He said in a statement that the XRP and RLUSD-tied firm Ripple helped halt the movement of $200 million worth of funds linked to the possible attack.
But those frozen funds could represent only a fraction of those that were potentially stolen off of Binance. Crypto data provider Arkham Intelligence linked nearly $6 billion in digital assets — including bitcoin, ether, solana and various stablecoins — to 55 wallet addresses it has linked to the potential exploit.
Arkham identifies, tracks and flags crypto wallets by analyzing publicly available blockchain data. It also solicits tips from its community members.
Bitcoin — the most widely followed cryptocurrency in the world — slid more than 3% following the executives' statements, breaking below $80,000. Ether fell nearly 4%, while solana shed about 3%.
Shares of Circle also tumbled about 5% in off-hours trading on Thursday.`,
    bodyJa: `Several crypto firms, including Circle Internet Group and Tether, on Thursday froze roughly $1.8 billion worth of funds tied to a potential hack on cryptocurrency exchange Binance.
The world's largest crypto exchange by daily trading volumes has not explicitly confirmed that it has suffered an exploit as of writing time. In a social media post, the company said it was investigating "a potential security issue" on its trading platform.
"Our teams are aware of reports of a potential security issue and are actively investigating," a Binance spokesperson said. "Rest assured that user funds are completely safe. Our security teams are reviewing all relevant information with urgency, and we will provide updates through official Binance channels as soon as we have verified information."
Circle CEO Jeremy Allaire said Thursday evening in a social media post that the company had frozen more than 800 million in USD Coin associated with the incident. USDT stablecoin issuer Tether CEO Paolo Ardoino also said in on X that his firm had frozen more than 1.5 billion of its stablecoin that may have been related to a potential breach.
Later, Binance co-founder Yi He said in a statement that the XRP and RLUSD-tied firm Ripple helped halt the movement of $200 million worth of funds linked to the possible attack.
But those frozen funds could represent only a fraction of those that were potentially stolen off of Binance. Crypto data provider Arkham Intelligence linked nearly $6 billion in digital assets — including bitcoin, ether, solana and various stablecoins — to 55 wallet addresses it has linked to the potential exploit.
Arkham identifies, tracks and flags crypto wallets by analyzing publicly available blockchain data. It also solicits tips from its community members.
Bitcoin — the most widely followed cryptocurrency in the world — slid more than 3% following the executives' statements, breaking below $80,000. Ether fell nearly 4%, while solana shed about 3%.
Shares of Circle also tumbled about 5% in off-hours trading on Thursday.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/circle-tether-freeze-funds-impacted-by-potential-binance-security-issue.html",
    publishedAt: "2026-10-29T22:42:41+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "intel-stock-plunges-21-as-chipmaker-blam-b5ed9695",
    title: "Intel stock plunges 21% as chipmaker blames PC slowdown for weak guidance",
    titleJa: "Intel stock plunges 21% as chipmaker blames PC slowdown for weak guidance",
    summaryJa: "Intel has been a Wall Street darling this year due to its emergence as a player in AI, but the company is being weighed down by a struggling PC market.",
    bodyOriginal: `Intel shares plummeted more than 20% in extended trading on Thursday after the chipmaker issued a weak fourth-quarter forecast, citing continued softness in the global PC market.
Here's how the company did in the third quarter, compared with estimates from analysts polled by LSEG:
- Earnings per share: 52 cents adjusted vs. 40 cents expected
- Revenue: $16.51 billion vs. $16.5 billion expected
Revenue climbed 21% from $13.7 billion a year earlier, the company said in a press release.
However, revenue in Intel's client computing and physical AI group fell 5% from the same quarter a year ago to $8.1 billion, missing estimates, even as data center and AI revenue jumped 78% to $7.3 billion.
Global PC shipments declined 4% in the second quarter from a year earlier due to soaring costs for memory and other components, according to Counterpoint Research.
For the current quarter, Intel said it expects adjusted earnings per share of 25 cents on revenue between $15 billion and $16 billion. Analysts were expecting revenue of $17.1 billion and EPS of 43 cents, according to LSEG.
"We see the PC slowdown continuing at least through the first half of next year," Intel finance chief David Zinsner, said in the release. "We will continue making disciplined investments in capacity and working capital to increase supply and support future growth."
Intel's forecast reflects the effects of an explosion at a fab in Israel that killed two workers and seriously injured a third earlier this month. The incident will cost the company about $600 million in lost revenue over two quarters, Zinsner said on Thursday's earnings. CEO Lip-Bu Tan said the explosion, which he called an "unfortunate and tragic accident," caused an "extended shutdown" at the plant, impacting shipments of 10-nanometer chips.
Intel's stock has been on an upward tear, up about 150% so far this year prior to the earnings report, although it's down roughly 23% in October over growing concern over the size of the artificial intelligence buildout.
"We will remain disciplined as we invest, and we will not spend $1 of capital unless we have confidence in the health of our products and process technologies, and clear evidence of customer demand," Zinsner said on the call.
Nvidia, which has become the world's most valuable company thanks to its dominance in graphics processing units, or GPUs, is scheduled to report results in mid-November. Advanced Micro Devices, a maker of GPUs and central processing units, or CPUs, reports next week.
Known best for its industry-leading CPUs, Intel has been a beneficiary of the rise in agentic AI. While chatbots and large models rely heavily on graphics processors from Nvidia and AMD, agentic applications such as Meta's Muse and OpenAI's Dots lean on CPUs to help orchestrate tasks and data from a computer operating in the cloud.
"Despite near term headwinds affecting the broader PC industry, we continue to see robust demand for CPUs and more broadly, for all our computing platforms in the long term," Tan said in the press release.
Intel's foundry business, meanwhile, has struggled to find its footing.
Intel is the only U.S.-based manufacturer of advanced logic chips, and is now in high-volume production of its most advanced 18A chip out of its new fab in Arizona, providing an alternative to Taiwan Semiconductor Manufacturing Co. Its next fab in Arizona is expected to begin operations by the end of 2028.
For now, Intel has no major external customers for its new chips.
"We're going to have a couple of customers ready to announce the next two quarters," Tan said on the call, adding that Intel is making "tremendous progress" on its coming 14A chips.
The Trump administration took a 10% stake in Intel last year after the company had fallen behind on its 7- and 10-nanometer technologies. Nvidia and Softbank also invested billions in Intel last year.
Tan has taken a more cautious approach to foundry spending than his predecessor, Pat Gelsinger, who launched an ambitious revival of the foundry business.
Last week, Intel said crews have installed the first structural truss at its huge Ohio fab that was originally expected to deliver chips in 2025.
In September, reports surfaced that the world's leading maker of high-bandwidth memory, SK Hynix may team up with Intel in Ohio to lease some foundry space to make memory chips at the new site. Neither company would confirm any plans.
"We continue to evaluate unique and highly differentiated opportunities to accelerate our Ohio build out, and I hope to share more on this in the near future" Tan said on the call.
Intel completed a $23 billion equity offering in August. Tech giants have spent trillions of dollars in recent years to meet insatiable demand for AI and the infrastructure needed to support it.
Tan said he's "disappointed that we were not able to meet strong customer demand in this quarter."
WATCH: Can Intel's New Arizona Chip Fab Bring It Back From The Brink?`,
    bodyJa: `Intel shares plummeted more than 20% in extended trading on Thursday after the chipmaker issued a weak fourth-quarter forecast, citing continued softness in the global PC market.
Here's how the company did in the third quarter, compared with estimates from analysts polled by LSEG:
- Earnings per share: 52 cents adjusted vs. 40 cents expected
- Revenue: $16.51 billion vs. $16.5 billion expected
Revenue climbed 21% from $13.7 billion a year earlier, the company said in a press release.
However, revenue in Intel's client computing and physical AI group fell 5% from the same quarter a year ago to $8.1 billion, missing estimates, even as data center and AI revenue jumped 78% to $7.3 billion.
Global PC shipments declined 4% in the second quarter from a year earlier due to soaring costs for memory and other components, according to Counterpoint Research.
For the current quarter, Intel said it expects adjusted earnings per share of 25 cents on revenue between $15 billion and $16 billion. Analysts were expecting revenue of $17.1 billion and EPS of 43 cents, according to LSEG.
"We see the PC slowdown continuing at least through the first half of next year," Intel finance chief David Zinsner, said in the release. "We will continue making disciplined investments in capacity and working capital to increase supply and support future growth."
Intel's forecast reflects the effects of an explosion at a fab in Israel that killed two workers and seriously injured a third earlier this month. The incident will cost the company about $600 million in lost revenue over two quarters, Zinsner said on Thursday's earnings. CEO Lip-Bu Tan said the explosion, which he called an "unfortunate and tragic accident," caused an "extended shutdown" at the plant, impacting shipments of 10-nanometer chips.
Intel's stock has been on an upward tear, up about 150% so far this year prior to the earnings report, although it's down roughly 23% in October over growing concern over the size of the artificial intelligence buildout.
"We will remain disciplined as we invest, and we will not spend $1 of capital unless we have confidence in the health of our products and process technologies, and clear evidence of customer demand," Zinsner said on the call.
Nvidia, which has become the world's most valuable company thanks to its dominance in graphics processing units, or GPUs, is scheduled to report results in mid-November. Advanced Micro Devices, a maker of GPUs and central processing units, or CPUs, reports next week.
Known best for its industry-leading CPUs, Intel has been a beneficiary of the rise in agentic AI. While chatbots and large models rely heavily on graphics processors from Nvidia and AMD, agentic applications such as Meta's Muse and OpenAI's Dots lean on CPUs to help orchestrate tasks and data from a computer operating in the cloud.
"Despite near term headwinds affecting the broader PC industry, we continue to see robust demand for CPUs and more broadly, for all our computing platforms in the long term," Tan said in the press release.
Intel's foundry business, meanwhile, has struggled to find its footing.
Intel is the only U.S.-based manufacturer of advanced logic chips, and is now in high-volume production of its most advanced 18A chip out of its new fab in Arizona, providing an alternative to Taiwan Semiconductor Manufacturing Co. Its next fab in Arizona is expected to begin operations by the end of 2028.
For now, Intel has no major external customers for its new chips.
"We're going to have a couple of customers ready to announce the next two quarters," Tan said on the call, adding that Intel is making "tremendous progress" on its coming 14A chips.
The Trump administration took a 10% stake in Intel last year after the company had fallen behind on its 7- and 10-nanometer technologies. Nvidia and Softbank also invested billions in Intel last year.
Tan has taken a more cautious approach to foundry spending than his predecessor, Pat Gelsinger, who launched an ambitious revival of the foundry business.
Last week, Intel said crews have installed the first structural truss at its huge Ohio fab that was originally expected to deliver chips in 2025.
In September, reports surfaced that the world's leading maker of high-bandwidth memory, SK Hynix may team up with Intel in Ohio to lease some foundry space to make memory chips at the new site. Neither company would confirm any plans.
"We continue to evaluate unique and highly differentiated opportunities to accelerate our Ohio build out, and I hope to share more on this in the near future" Tan said on the call.
Intel completed a $23 billion equity offering in August. Tech giants have spent trillions of dollars in recent years to meet insatiable demand for AI and the infrastructure needed to support it.
Tan said he's "disappointed that we were not able to meet strong customer demand in this quarter."
WATCH: Can Intel's New Arizona Chip Fab Bring It Back From The Brink?`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/intel-intc-q3-earnings-report-2026-.html",
    publishedAt: "2026-10-29T22:37:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "amazon-posts-negative-free-cash-flow-of-df49b3ac",
    title: "Amazon posts negative free cash flow of $42.4 billion, holds 2026 capex unchanged",
    titleJa: "Amazon posts negative free cash flow of $42.4 billion, holds 2026 capex unchanged",
    summaryJa: "Amazon's negative free cash flow ballooned during the third quarter, while its earnings and revenue fell short of Wall Street's expectations.",
    bodyOriginal: `Amazon shares plunged more than 6% in extended trading Thursday after the company reported disappointing third-quarter results and ballooning negative free cash flow, reflecting its swelling AI investments.
Here's how the company did, compared with estimates from analysts polled by LSEG:
- Earnings per share: $1.89 vs. $1.96 estimated
- Revenue: $201.94 billion vs. $202.31 billion estimated
Wall Street was also looking at other key revenue numbers:
- Amazon Web Services: $45.98 billion vs. $45.29 billion, according to StreetAccount
- Advertising: $19.64 billion vs. $20.82 billion, according to StreetAccount
The company held steady on its capital expenditure forecast for 2026, saying it continues to expect spending will reach $220 billion this year.
Tech's hyperscalers have been on a blistering spending run to meet the surge in demand for artificial intelligence infrastructure, but signs have begun to emerge that the capex splurge is moderating. Earlier this week, Microsoft lowered its capex forecast for the year to $170 billion from $175 billion, while Alphabet maintained its guidance at $195 billion to $205 billion.
CEO Andy Jassy said on a conference call with investors that the company expects to "spend meaningfully more in 2027," and that Amazon has a "clear line of sight to attractive financial returns."
The aggressive AI spending has eaten into Amazon's cash flow. The company posted negative free cash flow for the second consecutive quarter, recording an outflow of $42.4 billion for the trailing twelve month period, a swing of 386% year over year. In the prior quarter, the company reported negative free cash flow of $7.6 billion.
The company said the shortfall was primarily due to an increase in purchases of property and equipment as a result of AI investments.
Capital expenditures reached $77.3 billion during the quarter, ticking up from $35.1 billion one year earlier, and coming in well above analysts' estimated $58.7 billion, according to FactSet.
Amazon said it expects fourth-quarter revenue to be in the range of $240 billion and $247 billion. The midpoint of its guidance was below Wall Street's expectations of $244.5 billion, according to LSEG. The fourth quarter is typically one of Amazon's biggest by revenue, due to the peak holiday shopping season.
Sales in Amazon's cloud segment soared 39% year over year to $45.98 billion. That topped the consensus forecast for $45.29 billion and growth of 38%, according to StreetAccount.
Jassy highlighted AWS acceleration in the earnings release, saying the company expects revenue growth rates of "over 40%" next year and in 2028. He added, "Our AWS investment in functionality and infrastructure is working."
Jassy told investors on the call that he expects AWS will be a $1 trillion revenue business in the next five to 10 years.
Amazon is facing pressure from Wall Street to show that its AI investments are lifting its revenues. The company pointed to growing traction for Bedrock, its AI model marketplace, along with its Trainium and Graviton AI chips.
Jassy said Amazon's chips business "continues to grow triple-digit percentages year over year." He added that the company plans to make its Trainium chips available externally "late in 2027," assigning a timeframe to comments Jassy made earlier this year suggesting such a move.
Third-quarter net income came in at $20.69 billion, or $1.89 per share, vs. $21.19 billion, or $1.95 per share, a year ago. The company said the decrease was driven primarily by a $9.5 billion pre-tax gain from its investment in the AI startup Anthropic, which was recorded in the 2025 third quarter.
While the AWS segment continues to hum along, results weren't as bright in Amazon's retail business, which remains its largest unit by revenue, or its advertising segment.
Online sales gained 2% year over year to $68.47 billion, which fell short of analysts' projected $69.68 billion, according to StreetAccount. It marked a slowdown from one year ago, when sales increased nearly 10%.
Advertising revenue rose 11% year over year to $19.64 billion. That missed StreetAccount consensus estimates of $20.82 billion.
Both units were impacted in part by Amazon's decision to pull its annual Prime Day sale forward in several countries from its typical third quarter timeframe into the second quarter so as to not conflict with the FIFA World Cup in July.`,
    bodyJa: `Amazon shares plunged more than 6% in extended trading Thursday after the company reported disappointing third-quarter results and ballooning negative free cash flow, reflecting its swelling AI investments.
Here's how the company did, compared with estimates from analysts polled by LSEG:
- Earnings per share: $1.89 vs. $1.96 estimated
- Revenue: $201.94 billion vs. $202.31 billion estimated
Wall Street was also looking at other key revenue numbers:
- Amazon Web Services: $45.98 billion vs. $45.29 billion, according to StreetAccount
- Advertising: $19.64 billion vs. $20.82 billion, according to StreetAccount
The company held steady on its capital expenditure forecast for 2026, saying it continues to expect spending will reach $220 billion this year.
Tech's hyperscalers have been on a blistering spending run to meet the surge in demand for artificial intelligence infrastructure, but signs have begun to emerge that the capex splurge is moderating. Earlier this week, Microsoft lowered its capex forecast for the year to $170 billion from $175 billion, while Alphabet maintained its guidance at $195 billion to $205 billion.
CEO Andy Jassy said on a conference call with investors that the company expects to "spend meaningfully more in 2027," and that Amazon has a "clear line of sight to attractive financial returns."
The aggressive AI spending has eaten into Amazon's cash flow. The company posted negative free cash flow for the second consecutive quarter, recording an outflow of $42.4 billion for the trailing twelve month period, a swing of 386% year over year. In the prior quarter, the company reported negative free cash flow of $7.6 billion.
The company said the shortfall was primarily due to an increase in purchases of property and equipment as a result of AI investments.
Capital expenditures reached $77.3 billion during the quarter, ticking up from $35.1 billion one year earlier, and coming in well above analysts' estimated $58.7 billion, according to FactSet.
Amazon said it expects fourth-quarter revenue to be in the range of $240 billion and $247 billion. The midpoint of its guidance was below Wall Street's expectations of $244.5 billion, according to LSEG. The fourth quarter is typically one of Amazon's biggest by revenue, due to the peak holiday shopping season.
Sales in Amazon's cloud segment soared 39% year over year to $45.98 billion. That topped the consensus forecast for $45.29 billion and growth of 38%, according to StreetAccount.
Jassy highlighted AWS acceleration in the earnings release, saying the company expects revenue growth rates of "over 40%" next year and in 2028. He added, "Our AWS investment in functionality and infrastructure is working."
Jassy told investors on the call that he expects AWS will be a $1 trillion revenue business in the next five to 10 years.
Amazon is facing pressure from Wall Street to show that its AI investments are lifting its revenues. The company pointed to growing traction for Bedrock, its AI model marketplace, along with its Trainium and Graviton AI chips.
Jassy said Amazon's chips business "continues to grow triple-digit percentages year over year." He added that the company plans to make its Trainium chips available externally "late in 2027," assigning a timeframe to comments Jassy made earlier this year suggesting such a move.
Third-quarter net income came in at $20.69 billion, or $1.89 per share, vs. $21.19 billion, or $1.95 per share, a year ago. The company said the decrease was driven primarily by a $9.5 billion pre-tax gain from its investment in the AI startup Anthropic, which was recorded in the 2025 third quarter.
While the AWS segment continues to hum along, results weren't as bright in Amazon's retail business, which remains its largest unit by revenue, or its advertising segment.
Online sales gained 2% year over year to $68.47 billion, which fell short of analysts' projected $69.68 billion, according to StreetAccount. It marked a slowdown from one year ago, when sales increased nearly 10%.
Advertising revenue rose 11% year over year to $19.64 billion. That missed StreetAccount consensus estimates of $20.82 billion.
Both units were impacted in part by Amazon's decision to pull its annual Prime Day sale forward in several countries from its typical third quarter timeframe into the second quarter so as to not conflict with the FIFA World Cup in July.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html",
    publishedAt: "2026-10-29T22:24:49+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "google-value-plunges-by-500bn-as-ai-fear-370caab0",
    title: "Google value plunges by $500bn as AI fears rattle Wall Street",
    titleJa: "Google value plunges by $500bn as AI fears rattle Wall Street",
    summaryJa: "Google spooked investors so badly that its stock hit a six-month low, after it revealed its AI search summaries were affecting ad revenue.",
    bodyOriginal: `Google value plunges by $500bn as AI fears rattle Wall Street
- Published
Google parent Alphabet lost just over $500bn (£374bn) in value on Thursday after it rattled Wall Street with its last update of the year on its business operations.
Google spooked investors so badly that its stock hit a six-month low, after it revealed its artificial intelligence (AI) summaries on search were affecting ad revenue.
Microsoft and Amazon also updated investors this week, and joined Google in plans to keep spending astronomical sums of cash in an ongoing AI race.
But investors appeared dismayed at the impacts these plans are having on the ability of each to keep growing their core lines of business.
Google AI is eating its core business - search
At first glance, the quarterly results of Alphabet, the parent company of Google, were not at all bad.
Total revenue grew 25% compared to last year, hitting $127.6bn. It was buoyed by the ongoing success of Google Cloud, where revenue grew by 103% to almost $31bn.
However, profits at the company fell by a considerable 25% during the quarter. And for the second time in its history as a public company, it showed negative free cash flow, this time in excess of $9bn. That's almost twice the loss of cash Alphabet showed just three months ago.
Cash flow represents the money a company retains after paying for operations and investments, meaning Alphabet is now spending more money than it is bringing in. That new level of spending is almost entirely dedicated to Google's AI investments.
By the end of Thursday, the company's total stock market value had fallen to $3.46 trillion from $3.97 trillion the day before.
Google's omnipresent search engine now defaults to AI summaries of a person's query, and that hit the number of advertisements it was able to sell during the quarter.
The sale of ads that appear alongside Google Search results is the vast majority of Alphabet's business.
Tracy Woo, a principal analyst at Forrester, said Alphabet's disappointing search business results "highlights the challenge of funding massive AI investments while maintaining the strength of established businesses."
Although Phillip Schindler, Google's chief business officer, said on Wednesday that he felt "very good about our trajectory" with an AI-focused version of the search engine, the company's stock fell by almost 13% on Thursday, its second lowest showing this year.
Investors not buying Amazon's trillion-dollar business hopes
Amazon's stock also took a hit on Thursday after it shared results that disappointed investors. Shares of the company fell 6% in after hours stock trading.
Alongside quarterly sales growth of 11%, hitting $201bn, the company shared a staggering cash flow figure of negative $42bn.
That number shows that Amazon is not only spending more money than it makes, but that spending has increased six-fold over the span of three months.
Chief executive Andy Jassy claimed the business was spending in part because it had the chance at, not one, but two businesses that could end up bringing in $1 trillion for Amazon the future.
Jassy did not specify what two Amazon businesses those may be. But during a call with financial analysts he repeatedly mentioned the financial opportunity presented by Amazon making and selling its own computer chips, as well as its AI developer platform Bedrock, which offers paying users access to most major AI models and tools.
"One of the lessons we've learned over 20-plus years is that there is not one tool to rule the world," Jassy said. "People always assume whatever is in the lead early on will be the only thing that people use - it's never true."
As Jassy was asked several times to explain the company's spending, he admitted it "would be more convenient" if it were spread over the next 25 years. "That's not the world we live in," he added.
"We can fund this plan, and I think it will forever change the size, the revenue, the free cash flow of Amazon."
Microsoft begs the question of AI's real value
Wall Street reacted less enthusiastically to Microsoft's update, with shares falling by less than 1% on Thursday.
The company, which is also one of OpenAI's largest investors, spent around $5bn less on investments dedicated to AI. It also revealed earlier this week plans to cut thousands of workers, which will further reduce the company's costs.
Meanwhile, its revenue grew 19% from a year earlier, hitting $92.3bn for the quarter. Its crucial cloud business grew by 30% to $63bn.
Chief executive Satya Nadella said the use of Copilot, Microsoft's AI chatbot and tool, has seen "automated tasks nearly double since July" as daily users grew by 500% from a year ago.
Usually lower spending and growing sales earns a positive reaction from investors.
But Woo said Wall Street is trying to look farther into the future when it comes to which businesses will truly make good on their big promises around AI.
"Microsoft's results reinforce that enterprise demand for AI remains strong, but they also highlight a much bigger question facing the technology industry, where AI value will ultimately be captured," Woo said.`,
    bodyJa: `Google value plunges by $500bn as AI fears rattle Wall Street
- Published
Google parent Alphabet lost just over $500bn (£374bn) in value on Thursday after it rattled Wall Street with its last update of the year on its business operations.
Google spooked investors so badly that its stock hit a six-month low, after it revealed its artificial intelligence (AI) summaries on search were affecting ad revenue.
Microsoft and Amazon also updated investors this week, and joined Google in plans to keep spending astronomical sums of cash in an ongoing AI race.
But investors appeared dismayed at the impacts these plans are having on the ability of each to keep growing their core lines of business.
Google AI is eating its core business - search
At first glance, the quarterly results of Alphabet, the parent company of Google, were not at all bad.
Total revenue grew 25% compared to last year, hitting $127.6bn. It was buoyed by the ongoing success of Google Cloud, where revenue grew by 103% to almost $31bn.
However, profits at the company fell by a considerable 25% during the quarter. And for the second time in its history as a public company, it showed negative free cash flow, this time in excess of $9bn. That's almost twice the loss of cash Alphabet showed just three months ago.
Cash flow represents the money a company retains after paying for operations and investments, meaning Alphabet is now spending more money than it is bringing in. That new level of spending is almost entirely dedicated to Google's AI investments.
By the end of Thursday, the company's total stock market value had fallen to $3.46 trillion from $3.97 trillion the day before.
Google's omnipresent search engine now defaults to AI summaries of a person's query, and that hit the number of advertisements it was able to sell during the quarter.
The sale of ads that appear alongside Google Search results is the vast majority of Alphabet's business.
Tracy Woo, a principal analyst at Forrester, said Alphabet's disappointing search business results "highlights the challenge of funding massive AI investments while maintaining the strength of established businesses."
Although Phillip Schindler, Google's chief business officer, said on Wednesday that he felt "very good about our trajectory" with an AI-focused version of the search engine, the company's stock fell by almost 13% on Thursday, its second lowest showing this year.
Investors not buying Amazon's trillion-dollar business hopes
Amazon's stock also took a hit on Thursday after it shared results that disappointed investors. Shares of the company fell 6% in after hours stock trading.
Alongside quarterly sales growth of 11%, hitting $201bn, the company shared a staggering cash flow figure of negative $42bn.
That number shows that Amazon is not only spending more money than it makes, but that spending has increased six-fold over the span of three months.
Chief executive Andy Jassy claimed the business was spending in part because it had the chance at, not one, but two businesses that could end up bringing in $1 trillion for Amazon the future.
Jassy did not specify what two Amazon businesses those may be. But during a call with financial analysts he repeatedly mentioned the financial opportunity presented by Amazon making and selling its own computer chips, as well as its AI developer platform Bedrock, which offers paying users access to most major AI models and tools.
"One of the lessons we've learned over 20-plus years is that there is not one tool to rule the world," Jassy said. "People always assume whatever is in the lead early on will be the only thing that people use - it's never true."
As Jassy was asked several times to explain the company's spending, he admitted it "would be more convenient" if it were spread over the next 25 years. "That's not the world we live in," he added.
"We can fund this plan, and I think it will forever change the size, the revenue, the free cash flow of Amazon."
Microsoft begs the question of AI's real value
Wall Street reacted less enthusiastically to Microsoft's update, with shares falling by less than 1% on Thursday.
The company, which is also one of OpenAI's largest investors, spent around $5bn less on investments dedicated to AI. It also revealed earlier this week plans to cut thousands of workers, which will further reduce the company's costs.
Meanwhile, its revenue grew 19% from a year earlier, hitting $92.3bn for the quarter. Its crucial cloud business grew by 30% to $63bn.
Chief executive Satya Nadella said the use of Copilot, Microsoft's AI chatbot and tool, has seen "automated tasks nearly double since July" as daily users grew by 500% from a year ago.
Usually lower spending and growing sales earns a positive reaction from investors.
But Woo said Wall Street is trying to look farther into the future when it comes to which businesses will truly make good on their big promises around AI.
"Microsoft's results reinforce that enterprise demand for AI remains strong, but they also highlight a much bigger question facing the technology industry, where AI value will ultimately be captured," Woo said.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm9qzdqpxy48o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-29T22:17:52+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3304/live/1c4d6e00-d3d4-11f1-b441-2b33b063138f.jpg",
    readTime: 10,
  },
  {
    id: "servicenow-shares-plunge-27-to-worst-day-033a4973",
    title: "ServiceNow shares plunge 27% to worst day ever after earnings revive AI disruption fears",
    titleJa: "ServiceNow shares plunge 27% to worst day ever after earnings revive AI disruption fears",
    summaryJa: "ServiceNow's stock recorded its worst day ever on underwhelming third-quarter results.",
    bodyOriginal: `ServiceNow shares sank 27% on Thursday and recorded their worst day on record after the enterprise software company's third-quarter results underwhelmed, reigniting artificial intelligence disruption concerns.
"This was a little bit uncharacteristic for ServiceNow standards, just in terms of the lack of upside," Citi's Tyler Radke told CNBC on Thursday.
Revenue grew more than 20% during the period to $4.11 billion, which was roughly in line with a $4.10 billion estimate from analysts polled by LSEG. Adjusted earnings came up short at $1.00 per share, compared to a forecast of $1.02.
The results did little to overturn recent "SaaSpocalypse" fears, or concerns that new AI capabilities will upend traditional software business models.
The stock drop came even after the company slightly lifted its full-year 2026 subscription revenue outlook to between $15.78 billion and $15.79 billion. Net new AI average contract value jumped 65%.
One factor spooking investors is the lack of immediate payoff for the company's investments in its newly formed forward-deployed engineering team that embeds in enterprises to build AI solutions, Radke said.
"It's just going to be a little bit longer of a waiting game, and so I think the market, you know, wanted to see something a little bit sooner," he said. "I think you got to wait until next year to really see that inflection."
WATCH: ServiceNow shares plummet in extended trading on mixed Q3 results`,
    bodyJa: `ServiceNow shares sank 27% on Thursday and recorded their worst day on record after the enterprise software company's third-quarter results underwhelmed, reigniting artificial intelligence disruption concerns.
"This was a little bit uncharacteristic for ServiceNow standards, just in terms of the lack of upside," Citi's Tyler Radke told CNBC on Thursday.
Revenue grew more than 20% during the period to $4.11 billion, which was roughly in line with a $4.10 billion estimate from analysts polled by LSEG. Adjusted earnings came up short at $1.00 per share, compared to a forecast of $1.02.
The results did little to overturn recent "SaaSpocalypse" fears, or concerns that new AI capabilities will upend traditional software business models.
The stock drop came even after the company slightly lifted its full-year 2026 subscription revenue outlook to between $15.78 billion and $15.79 billion. Net new AI average contract value jumped 65%.
One factor spooking investors is the lack of immediate payoff for the company's investments in its newly formed forward-deployed engineering team that embeds in enterprises to build AI solutions, Radke said.
"It's just going to be a little bit longer of a waiting game, and so I think the market, you know, wanted to see something a little bit sooner," he said. "I think you got to wait until next year to really see that inflection."
WATCH: ServiceNow shares plummet in extended trading on mixed Q3 results`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/29/servicenow-now-earnings-q3-2026.html",
    publishedAt: "2026-10-29T20:02:32+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "us-interest-rates-held-steady-and-econom-04f12f4f",
    title: "US interest rates held steady and economy grows - what it means for you",
    titleJa: "US interest rates held steady and economy grows - what it means for you",
    summaryJa: "The Federal Reserve's interest rate decisions affect everything from mortgages to car loans",
    bodyOriginal: `US interest rates held steady and economy grows - what it means for you
- Published
The US Federal Reserve has held interest rates steady at 3.75% - 4%.
The decision comes within a week of the midterm elections and after the central bank raised interest rates for the first time in three years at its September meeting.
"The overwhelming consensus, the overwhelming judgement, is that what we've done in this monetary medicine is starting to work some," Fed Chair Kevin Warsh said, referring to September's interest rate rise.
Figures published after the Fed's announcement showed the US economy growing at a stronger pace than expected, with inflation running above the Fed's target.
What is the Federal Reserve rate?
An interest rate tells people and businesses how much it costs to borrow money – such as with credit cards, mortgages, or business loans – but also what return they get for saving cash.
The Fed influences interest rates in the US through its target range for the federal funds rate, which is the interest rate used by commercial banks for overnight borrowing.
What's happening with US interest rates?
In its decision to hold rates steady this month, the Fed said that while inflation remains high, it wanted to gather more information before making another decision to change rates.
The Fed also noted that while there was uncertainty, the US economy remained resilient.
Warsh acknowledged that inflation remained too high, but noted that there were other signs - such as tightening credit conditions - that the economy was moving in the right direction.
There is plenty more economic data to come between now and the committee's next meeting, the Fed chair added, which should paint a more detailed picture of the state of the economy.
At that point, Warsh said, "we'll be, I think, better positioned to determine the right policy decision and the stance of policy."
While last month the committee signalled there could be one more rate rise this year, Warsh would not be drawn out on where he thinks they will go in six weeks' time.
"A lot of things can happen, so I'm not going to be able to share with you my musings."
The decision to hold rates steady was not unanimous.
While 10 of the 12 committee members voted to keep rates unchanged, Governor Lisa Cook and Cleveland Fed President Beth Hammack voted to increase rates to 4%-4.25%, from its current 3.75%-4%.
The bank's next meeting will be held over 8-9 December.
What is happening in the US economy?
Warsh said things are moving in the right direction, while the US economy is performing very strongly.
The US economy grew by 3.4% on an annualised basis in the three months to September, stronger than analysts had expected.
That strong growth was driven by an acceleration in investment, and strong consumer spending.
While there was an annualised increase in personal spending of 3.8%, the annualised increase in private investment was a huge 19.4% which analysts say was largely due to investment in artificial intelligence.
Inflation is also above the Fed's target range.
Prices increased by 3.7% in the year to September, driven higher by fuel and energy prices which have surged off the back of the war in Iran.
How does the Fed rate affect mortgages, credit cards, and savings?
The Fed uses interest rate changes to try to keep inflation – the rate at which prices change – at 2% a year and keep the job market stable.
When inflation is too high, the Fed tends to raise interest rates.
This tends to mean higher rates from banks and other lenders, which in turn affects spending and saving decisions.
For example, someone refinancing their mortgage or buying a property for the first time could face higher mortgage rates. It could also mean higher interest rates on credit cards or car loans. However, it means higher interest rates on savings as well.
This encourages people and businesses to save more, spend less money, and make less investments. It also encourages companies to hire less people or slow the pace of pay rises.
All of this tends to reduce demand and slow inflation.
When inflation is low or if the Fed believes the economy needs a boost, it cut rates.
The idea is that this will have the opposite affect, with banks dropping rates leading to more spending and less saving from people and businesses.
Leaving the rates unchanged means rates on things like new mortgages or business loans are also less likely to change. It also means interest rates on cash savings are unlikely to rise.
How much have US interest rates changed?
US interest rates have historically moved around quite a bit.
The last time Fed rates were as high as they have been recently was in the lead up to and during the start of the 2008 global financial crisis.
The Fed then dropped rates to historic lows to encourage spending and job creation during the economic slump and kept them at those lows for several years.
They picked up again ahead of the pandemic before dropping to as low as 0%-0.25% during the pandemic. They then rose to highs of 5.25%-5% from the middle of 2023 to August 2024 as inflation jumped.
They had been falling steadily since then, until rates were raised last month.
Related topics
- Published14 October
- Published2 days ago`,
    bodyJa: `US interest rates held steady and economy grows - what it means for you
- Published
The US Federal Reserve has held interest rates steady at 3.75% - 4%.
The decision comes within a week of the midterm elections and after the central bank raised interest rates for the first time in three years at its September meeting.
"The overwhelming consensus, the overwhelming judgement, is that what we've done in this monetary medicine is starting to work some," Fed Chair Kevin Warsh said, referring to September's interest rate rise.
Figures published after the Fed's announcement showed the US economy growing at a stronger pace than expected, with inflation running above the Fed's target.
What is the Federal Reserve rate?
An interest rate tells people and businesses how much it costs to borrow money – such as with credit cards, mortgages, or business loans – but also what return they get for saving cash.
The Fed influences interest rates in the US through its target range for the federal funds rate, which is the interest rate used by commercial banks for overnight borrowing.
What's happening with US interest rates?
In its decision to hold rates steady this month, the Fed said that while inflation remains high, it wanted to gather more information before making another decision to change rates.
The Fed also noted that while there was uncertainty, the US economy remained resilient.
Warsh acknowledged that inflation remained too high, but noted that there were other signs - such as tightening credit conditions - that the economy was moving in the right direction.
There is plenty more economic data to come between now and the committee's next meeting, the Fed chair added, which should paint a more detailed picture of the state of the economy.
At that point, Warsh said, "we'll be, I think, better positioned to determine the right policy decision and the stance of policy."
While last month the committee signalled there could be one more rate rise this year, Warsh would not be drawn out on where he thinks they will go in six weeks' time.
"A lot of things can happen, so I'm not going to be able to share with you my musings."
The decision to hold rates steady was not unanimous.
While 10 of the 12 committee members voted to keep rates unchanged, Governor Lisa Cook and Cleveland Fed President Beth Hammack voted to increase rates to 4%-4.25%, from its current 3.75%-4%.
The bank's next meeting will be held over 8-9 December.
What is happening in the US economy?
Warsh said things are moving in the right direction, while the US economy is performing very strongly.
The US economy grew by 3.4% on an annualised basis in the three months to September, stronger than analysts had expected.
That strong growth was driven by an acceleration in investment, and strong consumer spending.
While there was an annualised increase in personal spending of 3.8%, the annualised increase in private investment was a huge 19.4% which analysts say was largely due to investment in artificial intelligence.
Inflation is also above the Fed's target range.
Prices increased by 3.7% in the year to September, driven higher by fuel and energy prices which have surged off the back of the war in Iran.
How does the Fed rate affect mortgages, credit cards, and savings?
The Fed uses interest rate changes to try to keep inflation – the rate at which prices change – at 2% a year and keep the job market stable.
When inflation is too high, the Fed tends to raise interest rates.
This tends to mean higher rates from banks and other lenders, which in turn affects spending and saving decisions.
For example, someone refinancing their mortgage or buying a property for the first time could face higher mortgage rates. It could also mean higher interest rates on credit cards or car loans. However, it means higher interest rates on savings as well.
This encourages people and businesses to save more, spend less money, and make less investments. It also encourages companies to hire less people or slow the pace of pay rises.
All of this tends to reduce demand and slow inflation.
When inflation is low or if the Fed believes the economy needs a boost, it cut rates.
The idea is that this will have the opposite affect, with banks dropping rates leading to more spending and less saving from people and businesses.
Leaving the rates unchanged means rates on things like new mortgages or business loans are also less likely to change. It also means interest rates on cash savings are unlikely to rise.
How much have US interest rates changed?
US interest rates have historically moved around quite a bit.
The last time Fed rates were as high as they have been recently was in the lead up to and during the start of the 2008 global financial crisis.
The Fed then dropped rates to historic lows to encourage spending and job creation during the economic slump and kept them at those lows for several years.
They picked up again ahead of the pandemic before dropping to as low as 0%-0.25% during the pandemic. They then rose to highs of 5.25%-5% from the middle of 2023 to August 2024 as inflation jumped.
They had been falling steadily since then, until rates were raised last month.
Related topics
- Published14 October
- Published2 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr15jxzv4w24o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-29T17:15:05+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/47d7/live/753fb120-d30d-11f1-ad4f-5d2bbacf0caf.jpg",
    readTime: 10,
  },
  {
    id: "faisal-islam-this-budget-was-micro-and-t-4ef56156",
    title: "Faisal Islam: This Budget was micro and that was deliberate",
    titleJa: "Faisal Islam: This Budget was micro and that was deliberate",
    summaryJa: "Chancellor John Healey's plans fall short of radical action to create a promised new economic model.",
    bodyOriginal: `Faisal Islam: This Budget was micro and that was deliberate
- Published
It was not a mini Budget, but it was rather small. It might be called the "micro Budget".
Small does not necessarily mean bad, but it clearly falls short of radical action to create a promised new economic model.
A new "theory of growth" was not unveiled as promised by the prime minister Andy Burnham.
It was preamble, roadmap, consultation, perhaps the starter to the main course, which appears to be the PM's 10-year plan next month.
It went unsaid, but the clear stategic aim of Healey's statement was to be the "anti-mini Budget".
This "steady as she goes" predictable fiscal event set out to avoid the aftermath seen following Liz Truss's mini-budget, in which unexpected and unfunded tax cuts spooked the bond and currency markets.
The markets didn't even flicker on Healey's announcement of £65bn of extra borrowing over the next five years - government interest costs have actually fallen since Wednesday, against the backdrop of market turmoil due to the US-Iran war.
The core of the Budget was to get Downing Street through the impacts of the Middle East conflict shock on energy and borrowing costs.
If these pressures prove enduring there are some unpalatable decisions that will have to be grasped within the next year. The can will have to be picked up rather than kicked down the road again.
It buys more time, more "breathing space", as it were, for the government and the prime minister's long-term strategic plans.
The detail may come more quickly than feared. On welfare, the Milburn Review process is clearly heading for some sort of welfare-to-work scheme, even a separate system for younger workers.
It will cost money up front to subsidise work opportunities and hope to save more from welfare bills in the future. The chancellor saw at close quarters Gordon Brown do this twice two decades ago.
The Office for Budget Responsbility's (OBR) economic forecast showed the sheer rise in the welfare bill, which is set to jump to £431bn in 2031, if pensioner support is included.
There are two further areas where the chancellor laid down markers, with little fiscal cost, in terms of the long term plan.
On energy, there is some significance to the "cheaper power" mission announced, reshaping what had previously been a focus on clean power.
While still committed to Net Zero, a series of technical changes to powers over levies and renewable auctions, will seek to turn the tide on additional pressures on energy costs.
On devolution, the plan to allow local mayors to keep some extra business rate and income tax revenues, are more radical than expected.
There are trade offs here, but it essentially provides incentives for regional leaders to grow their economies, workforce and tax base, that are normal elsewhere, but have not existed in the UK's very centralised tax system.
How the PM will square other aspects of his "theory of growth" with the chancellor's spending constraints is the other significant challenge.
Can he announce a 10-year plan without detailing the Liverpool to Manchester high speed train line, or a rebirth of some cancelled HS2 lines he championed a year ago?
Away from the long term, the OBR forecast point to a very tricky economic backdrop until the spring, and a trickier spending review, given the need to accommodate the new defence target of 3% of national income by 2030.
The PM's insistence he will not call an election for a year are eminently believable given the risk of 5% inflation and declining household income.
A "focused" Budget at an uncertain time achieved its narrow aim of a bit of "breathing space" for households and also for the government itself.
But the evident gaps in the Budget will need filling in come the PM's upcoming 10-year plan.`,
    bodyJa: `Faisal Islam: This Budget was micro and that was deliberate
- Published
It was not a mini Budget, but it was rather small. It might be called the "micro Budget".
Small does not necessarily mean bad, but it clearly falls short of radical action to create a promised new economic model.
A new "theory of growth" was not unveiled as promised by the prime minister Andy Burnham.
It was preamble, roadmap, consultation, perhaps the starter to the main course, which appears to be the PM's 10-year plan next month.
It went unsaid, but the clear stategic aim of Healey's statement was to be the "anti-mini Budget".
This "steady as she goes" predictable fiscal event set out to avoid the aftermath seen following Liz Truss's mini-budget, in which unexpected and unfunded tax cuts spooked the bond and currency markets.
The markets didn't even flicker on Healey's announcement of £65bn of extra borrowing over the next five years - government interest costs have actually fallen since Wednesday, against the backdrop of market turmoil due to the US-Iran war.
The core of the Budget was to get Downing Street through the impacts of the Middle East conflict shock on energy and borrowing costs.
If these pressures prove enduring there are some unpalatable decisions that will have to be grasped within the next year. The can will have to be picked up rather than kicked down the road again.
It buys more time, more "breathing space", as it were, for the government and the prime minister's long-term strategic plans.
The detail may come more quickly than feared. On welfare, the Milburn Review process is clearly heading for some sort of welfare-to-work scheme, even a separate system for younger workers.
It will cost money up front to subsidise work opportunities and hope to save more from welfare bills in the future. The chancellor saw at close quarters Gordon Brown do this twice two decades ago.
The Office for Budget Responsbility's (OBR) economic forecast showed the sheer rise in the welfare bill, which is set to jump to £431bn in 2031, if pensioner support is included.
There are two further areas where the chancellor laid down markers, with little fiscal cost, in terms of the long term plan.
On energy, there is some significance to the "cheaper power" mission announced, reshaping what had previously been a focus on clean power.
While still committed to Net Zero, a series of technical changes to powers over levies and renewable auctions, will seek to turn the tide on additional pressures on energy costs.
On devolution, the plan to allow local mayors to keep some extra business rate and income tax revenues, are more radical than expected.
There are trade offs here, but it essentially provides incentives for regional leaders to grow their economies, workforce and tax base, that are normal elsewhere, but have not existed in the UK's very centralised tax system.
How the PM will square other aspects of his "theory of growth" with the chancellor's spending constraints is the other significant challenge.
Can he announce a 10-year plan without detailing the Liverpool to Manchester high speed train line, or a rebirth of some cancelled HS2 lines he championed a year ago?
Away from the long term, the OBR forecast point to a very tricky economic backdrop until the spring, and a trickier spending review, given the need to accommodate the new defence target of 3% of national income by 2030.
The PM's insistence he will not call an election for a year are eminently believable given the risk of 5% inflation and declining household income.
A "focused" Budget at an uncertain time achieved its narrow aim of a bit of "breathing space" for households and also for the government itself.
But the evident gaps in the Budget will need filling in come the PM's upcoming 10-year plan.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwx283zynnv3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-29T15:48:44+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8ec0/live/8d883540-d3a3-11f1-a5cd-49637fcbd4e4.jpg",
    readTime: 9,
  },
  {
    id: "painful-years-ahead-think-tanks-warn-as-7646b406",
    title: "'Painful' years ahead, think tanks warn, as living standards set to fall",
    titleJa: "'Painful' years ahead, think tanks warn, as living standards set to fall",
    summaryJa: "'Painful' years ahead, think tanks warn, as living standards set to fall- Published",
    bodyOriginal: `'Painful' years ahead, think tanks warn, as living standards set to fall
- Published
People are facing a "painful" and "depressing" few years ahead, economic think tanks have warned, after forecasts showed growth in living standards grinding almost to a halt.
Typical working-age households would see their disposable income fall by £1,050, or 3%, between now and 2029, according to the Resolution Foundation, while the Institute for Fiscal Studies (IFS) said the current decade would be the worst for household income growth on record.
Chancellor John Healey said his Budget offered "breathing space", but said the government could "never remove completely" cost of living pressures.
The UK's official forecaster said its latest economic forecast painted a "pretty grim picture".
The Office for Budget Responsibility (OBR), blamed the difficult financial situation facing the UK on higher borrowing costs and inflation caused by the US-Iran war.
In response to rising energy prices, Healey has announced measures, including a £100 support payment, aimed at easing pressure on household finances.
But that would not be enough to offset the impact of higher energy bills, the Resolution Foundation said.
"This parliament is increasingly looking like one of two halves," said the think tank's chief executive, Ruth Curtice.
"The first half has been marked by rising living standards, solid economic growth and extra funding for public services," she said.
However, the second half of the parliament would be "tough going", she said.
Treasury will not commit to reducing welfare bill before next election
- Published11 hours ago
What we now know about the UK economy in four charts
- Published1 day ago
Your pay, energy bills and savings: How the Budget affects you
- Published7 hours ago
In response to this "painful" situation the government had provided a "scattergun" Budget that did not do enough to address the challenges facing the country, Curtice said.
Over the course of this parliament, incomes for non-pensioner households, after taxes, benefits, and housing costs are taken into account, will have risen by "a paltry" £600, the Resolution Foundation said, with the gains "already behind us".
Even after the extra support provided by the government, households will be left paying higher energy bills than during the last energy crisis in 2022, according to its analysis.
The Resolution Foundation said the support should have been more targeted at the poorest households.
Lost decade
Alongside the Budget the OBR issued its economic forecast indicating a slowdown in GDP growth from 1.2% in 2026 to 1% in 2027.
The forecast for next year is sharply lower than what was predicted at their last assessment in March.
The OBR also put its forecast for inflation for 2027 up from 2% to 3.4%.
Frozen tax thresholds are also eating into people's take-home pay.
However, the OBR also emphasised the difficulties in economic forecasting, highlighting uncertainty over the future path of inflation, in particular, which could turn out to be either significantly higher or lower than their predictions.
While the Resolution Foundation focused its forecast for living standards on working age households, the OBR looks at all households, including pensioners and reflects a 10-year rolling average growth to take into account short-term fluctuations.
The OBR found that by the end of the decade living standards for all households would have barely grown, by less than 0.1% per year.
Helen Miller, director of the influential think tank, the Institute for Fiscal Studies (IFS) said the outlook was "depressing".
"This decade looks set to be the worst decade for growth in household incomes on record," she said.
"No amount of temporary cost of living packages will fix that. We need a stronger economy."
'Fragile' finances
There would also be growing pressure on the government's spending plans over the parliament, Miller added.
"Spending plans look extremely tight. They don't look to me like plans that this government would want to deliver," she said.
"Whether or not they are delivered matters because the spending plans underpin the plan to bring down borrowing," she added.
Miller said she was left with the impression that Healey was hoping the economy would improve to take the pressure off those spending decisions.
Healey, speaking on the BBC's Today Programme, said "economic storms", including the Iran war and Russia's invasion of Ukraine, were affecting countries around the world and the government was seeking to help where it could.
He said energy bill help would create "breathing space" for most households.
Around 20 million households are set to receive the £100 payment based on which council tax band they are in.
But Conservative shadow chancellor Andrew Griffith said the Budget had left the public finances "more fragile" as Healey had reduced the "headroom" or the buffer that the country has between what it takes in revenues and what it spends.
Liberal Democrat leader Ed Davey said the £100 energy payment would be identified as the best item in the Budget for many people, but said that it was "not good enough" when you considered the "stealth tax rises" that were taking money out of people's pay packets.
Get in touch
Are you affected by issues covered in this story? Share your experiences.`,
    bodyJa: `'Painful' years ahead, think tanks warn, as living standards set to fall
- Published
People are facing a "painful" and "depressing" few years ahead, economic think tanks have warned, after forecasts showed growth in living standards grinding almost to a halt.
Typical working-age households would see their disposable income fall by £1,050, or 3%, between now and 2029, according to the Resolution Foundation, while the Institute for Fiscal Studies (IFS) said the current decade would be the worst for household income growth on record.
Chancellor John Healey said his Budget offered "breathing space", but said the government could "never remove completely" cost of living pressures.
The UK's official forecaster said its latest economic forecast painted a "pretty grim picture".
The Office for Budget Responsibility (OBR), blamed the difficult financial situation facing the UK on higher borrowing costs and inflation caused by the US-Iran war.
In response to rising energy prices, Healey has announced measures, including a £100 support payment, aimed at easing pressure on household finances.
But that would not be enough to offset the impact of higher energy bills, the Resolution Foundation said.
"This parliament is increasingly looking like one of two halves," said the think tank's chief executive, Ruth Curtice.
"The first half has been marked by rising living standards, solid economic growth and extra funding for public services," she said.
However, the second half of the parliament would be "tough going", she said.
Treasury will not commit to reducing welfare bill before next election
- Published11 hours ago
What we now know about the UK economy in four charts
- Published1 day ago
Your pay, energy bills and savings: How the Budget affects you
- Published7 hours ago
In response to this "painful" situation the government had provided a "scattergun" Budget that did not do enough to address the challenges facing the country, Curtice said.
Over the course of this parliament, incomes for non-pensioner households, after taxes, benefits, and housing costs are taken into account, will have risen by "a paltry" £600, the Resolution Foundation said, with the gains "already behind us".
Even after the extra support provided by the government, households will be left paying higher energy bills than during the last energy crisis in 2022, according to its analysis.
The Resolution Foundation said the support should have been more targeted at the poorest households.
Lost decade
Alongside the Budget the OBR issued its economic forecast indicating a slowdown in GDP growth from 1.2% in 2026 to 1% in 2027.
The forecast for next year is sharply lower than what was predicted at their last assessment in March.
The OBR also put its forecast for inflation for 2027 up from 2% to 3.4%.
Frozen tax thresholds are also eating into people's take-home pay.
However, the OBR also emphasised the difficulties in economic forecasting, highlighting uncertainty over the future path of inflation, in particular, which could turn out to be either significantly higher or lower than their predictions.
While the Resolution Foundation focused its forecast for living standards on working age households, the OBR looks at all households, including pensioners and reflects a 10-year rolling average growth to take into account short-term fluctuations.
The OBR found that by the end of the decade living standards for all households would have barely grown, by less than 0.1% per year.
Helen Miller, director of the influential think tank, the Institute for Fiscal Studies (IFS) said the outlook was "depressing".
"This decade looks set to be the worst decade for growth in household incomes on record," she said.
"No amount of temporary cost of living packages will fix that. We need a stronger economy."
'Fragile' finances
There would also be growing pressure on the government's spending plans over the parliament, Miller added.
"Spending plans look extremely tight. They don't look to me like plans that this government would want to deliver," she said.
"Whether or not they are delivered matters because the spending plans underpin the plan to bring down borrowing," she added.
Miller said she was left with the impression that Healey was hoping the economy would improve to take the pressure off those spending decisions.
Healey, speaking on the BBC's Today Programme, said "economic storms", including the Iran war and Russia's invasion of Ukraine, were affecting countries around the world and the government was seeking to help where it could.
He said energy bill help would create "breathing space" for most households.
Around 20 million households are set to receive the £100 payment based on which council tax band they are in.
But Conservative shadow chancellor Andrew Griffith said the Budget had left the public finances "more fragile" as Healey had reduced the "headroom" or the buffer that the country has between what it takes in revenues and what it spends.
Liberal Democrat leader Ed Davey said the £100 energy payment would be identified as the best item in the Budget for many people, but said that it was "not good enough" when you considered the "stealth tax rises" that were taking money out of people's pay packets.
Get in touch
Are you affected by issues covered in this story? Share your experiences.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6z7x8214np7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-29T13:19:24+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7565/live/8d520610-d3cf-11f1-b441-2b33b063138f.jpg",
    readTime: 10,
  },
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
