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
  {
    id: "publicly-owned-rail-is-popular-but-is-it-bd39f73f",
    title: "Publicly owned rail is popular. But is it making the trains run on time?",
    titleJa: "Publicly owned rail is popular. But is it making the trains run on time?",
    summaryJa: "The early afternoon of Wednesday 6 August was an unremarkable one on the rail network. Then suddenly, shortly before 14:00, a power failure brought trains across the north-west of England to a halt.Chaos ensued: passengers told the BBC they were stranded on platforms for hours, with some having to book hotels for the night.",
    bodyOriginal: `The early afternoon of Wednesday 6 August was an unremarkable one on the rail network. Then suddenly, shortly before 14:00, a power failure brought trains across the north-west of England to a halt.
Chaos ensued: passengers told the BBC they were stranded on platforms for hours, with some having to book hotels for the night.
This incident, stemming from a short power cut that affected Network Rail's operating centre in Manchester, was, in itself, unusual. But it added to a difficult summer for train passengers.
Repeated heatwaves required risk control measures like speed reductions to avoid tracks being damaged in the heat, leading to delays and cancellations. There was a serious derailment near Lewes, East Sussex, and another smaller-scale incident near Wickford in Essex soon after.
Against a backdrop of relatively high cancellation rates and steep fares compared with previous decades, rail users could be forgiven for forming the impression that things are not working.
Something is changing, though: Labour is steadily bringing nearly all passenger rail services into public hands. Nationalisation is a popular idea - a YouGov tracker poll suggests almost two thirds of the public support public ownership.
But in reality, plans are still in their early stages. Big structural changes have yet to be introduced. And experts caution that it's too early to say how successful these will be.
So can rail nationalisation meet the public's expectations? Or are the ongoing delays and cancellations that we're currently seeing under a part-nationalised network a sign that it might struggle to deliver real improvement?
What the data says
South Western Railway (SWR) was nationalised in May 2025, the first of six services to be brought into public ownership under Labour so far.
At Woking station, which is served by SWR, regular commuter Leo tells me he had been optimistic about public ownership, but hasn't noticed it making any difference so far: "I think the phrase 'emperor's new clothes' comes to mind… it's still unreliable."
SWR saw a clear increase in cancellations during its first year in public hands.
But how much of this was due to nationalisation?
The Conservatives have cited SWR as an example of how public control does not necessarily mean improvements or fix key problems.
But the government argues SWR's early period in public hands was affected by high summer temperatures, signal failures and trespass incidents.
Lord Hendy, the rail minister, says work to turn the operator around has included introducing long-delayed new trains on suburban routes and recruiting more drivers, resulting in a drop in those cancellations that are due to staff shortages.
TransPennine Express was nationalised in May 2023, under the Conservative government. Many passengers had been at their wits' end as the operator struggled to fulfil its timetable and suffered from poor industrial relations.
A plan to improve reliability was put in place, which included cutting some services and even removing one type of train as a way of sorting out staffing problems. A new deal with the drivers' union also helped - something an insider at the former private sector operator claimed to me their company had not been permitted to do.
So has it worked? Cancellations have fallen noticeably. But they were still above the Great Britain average in the year to August.
It's really important to say the data can only tell us so much. There are so many different factors that might affect the performance of each service: for example, the state of the infrastructure it relies on, weather events or simply how well it was working before the government took over.
Plus, of the operators nationalised since Labour came to power, only SWR and c2c have completed a whole year in public hands. Even for those nationalised years earlier, the picture is clouded by the impact of the pandemic, when passenger numbers fell off a cliff.
But according to Alex Hynes, chief executive of DfT Operator Limited (DfTO), the government company that currently owns publicly-run operators, it has been possible to make some short-term changes. Notably, these include making one team jointly responsible for managing infrastructure and passenger train services in some areas including the south-west of England.
"The railway is a system: track, train, people," he says. "So by putting one person in charge, they can fix all elements of the system to deliver a better service to customers."
Hynes also gives examples of changes on the recently nationalised Thameslink; investment in better cleaning, improving toilets and replacing unpopular upright "ironing-board" seats.
But when it comes to the pure performance data of operators nationalised in the past few years - delays, cancellations - can we really draw any conclusions yet to tell us whether the policy is working?
"I think it's completely hopeless to try and do that assessment over such a short period," Stephen Glaister, a former chair of regulator the Office of Rail and Road who is now emeritus professor of transport and infrastructure at Imperial College London. He thinks a decade is needed to assess the impact of nationalisation.
The government argues that official data suggests publicly owned train operators are performing better on punctuality and cancellations overall than those still under DfT contracts to private operators.
Experts point out that whoever is running the passenger trains, some limitations remain. Many delays happen because infrastructure, like signals, fails. There's only so much capacity on the existing network. And getting better trains or more staff can take years.
Beyond the private-public binary
The view that privatisation ultimately failed, leaving unreliable services and high fares, may be widespread. However, Prof Glaister argues that for a few years in the 1990s, the old privatised system actually worked well. Operating costs and subsidies were falling while the number of train services and passengers went up, he says.
And in the current context, it's important to be clear about what nationalisation really means.
The railways Labour inherited weren't, in truth, completely privatised, and nationalisation doesn't mean a return to British Rail.
For example, the infrastructure manager Network Rail has been fully under public control for over two decades. A number of train companies including LNER and Northern had already been nationalised under the Conservatives. Scotrail, Transport for Wales and Caledonian Sleeper are controlled by devolved national governments.
And even those operators still on contracts issued by the DfT at Westminster have been heavily controlled by the government for years. During Covid, private operators started being paid a fixed fee to run services, while the taxpayer took on the financial risk. The terms of the contracts meant train companies had to "ask government for permission to blow their nose", according to one senior industry executive, who asked not to be named so they could speak freely.
Highly profitable rolling stock companies ("ROSCOS") still own the actual trains. Freight companies operate privately too, and there are a handful of fully commercial "open access operators" on the rails like Lumo, Hull Trains and Grand Central - although there are concerns within the industry that these could end up squeezed.
So what is often referred to as the nationalisation of the railways, in fact amounts to gradually returning passenger train operators run by private companies to public hands as their contracts expire - and making this the default.
What will Great British Railways do differently?
This is not all that's happening, though. The government hopes that re-organising the railways under a new publicly run body, Great British Railways (GBR), will make a big difference. This will bring together the running of trains and tracks, ending the current fragmented system.
A botched rail timetable introduction in 2018 was the spark for the then-Conservative government to eventually propose GBR as a new overarching body - although the Tories believe private competition should not be excluded from the system.
Some trains are already covered in distinctive GBR branding, but the organisation still doesn't exist. A new law to create it is making its way through parliament. Unknowns remain, like exactly how GBR will interact with devolved governments, and who its senior leaders will be.
Transport expert and author Prof Jon Shaw, of the University of Plymouth, says the idea of a "single guiding mind" should create "a better planned railway that's more aligned to the customer".
Prof Shaw thinks potential benefits include better long-term planning around rolling-stock and timetables, and the removal of "the compensation merry-go-round", where train companies and Network Rail argue about whose fault a delay was.
Hynes says: "The way you get the railway to work is you get the infrastructure and the trains and the people working in harmony because it's a system. And we can do that in a publicly owned GBR railway in a way that we haven't been able to do for a generation."
But Prof Shaw cautions of potential pitfalls. For example, "there remains very little money", and "a massive issue is whether or not the rail minister or DfT more generally - or the Treasury - will be able to butt out" and leave rail leaders to run the railway.
Prof Glaister also fears politically sensitive aspects such as fares and levels of service could lead to politicians trying to run the railways themselves, because of the amount of public money involved.
"Actually, governments are not very good at running railways," he says. "So you want management who are somewhat independent and able to run it."
Lord Hendy insists that despite the Transport Secretary having ultimate sign-off on GBR's strategy, the body will be genuinely arms-length from government.
"The point of this is to get a cadre of people who are committed to the outcomes that the secretary of state and I want for it, who can go off and run it on their own," he says, adding: "They'll have a lot more chance in the future than they've had in the last 20 years."
A question of cost
The railways are currently subsidised to the tune of around £12bn a year - not including spending on major projects like HS2.
The Transport Secretary Heidi Alexander says that she wants to see subsidy levels fall. Meanwhile, Network Rail has acknowledged a squeezed budget means difficult choices, and shoring up the network against the effects of more extreme weather requires investment.
Prof Glaister says: "When the public is hoping for a better level of service, more reliability, fewer breakdowns and lower fares, what they're really asking for is more money to be put into the railway.
"I don't think it's likely the government is going to be able to find more money, probably [it will have] less, actually. And so I think there's a real problem with ministers raising expectations from this policy."
But Hynes doesn't see a contradiction between reducing taxpayer subsidy and making train services better.
"My two north stars are performance up and subsidy down," he says. "If the service is better, we get more customers, we get more revenue."
Lord Hendy and Hynes also push back on the idea that the answer to improving reliability might be running fewer trains.
Hynes says: "In an industry with high fixed costs, the best way of getting the subsidy down is to go for growth."
Questions also remain about how GBR will manage industrial relations. Terms and conditions currently vary across operators. What will cost-conscious ministers do if unions seek to standardise these at the most generous level across the network?
While ministers argue they are getting on with improvements that people will notice, there's acknowledgement that the speed of improvement will vary between operators.
Lord Hendy says some changes "ought to be dead boring… to make sure tomorrow is a little better than today if you can do it".
But he says "more than 30 years worth of behaviors" will need altering to make the railway run solely in the interests of the customer.
At Woking, is there optimism that things will improve in the long run?
"I really hope so," says Leo, "it would be amazing - as it's not the best service now."
More from InDepth
AI is creating a 'human premium' for art made by people. But will it hold?
- Published2 days ago
Mark Zuckerberg has an image problem - so why is Meta's business booming?
- Published4 days ago
The Republican candidates walking a Trump tightrope
- Published5 days ago
BBC InDepth is the home on the website and app for the best analysis, with fresh perspectives that challenge assumptions and deep reporting on the biggest issues of the day. Emma Barnett and John Simpson bring their pick of the most thought-provoking deep reads and analysis, every Saturday. Sign up for the newsletter here
Get in touch
Are you personally affected by the issues raised in this story?`,
    bodyJa: `The early afternoon of Wednesday 6 August was an unremarkable one on the rail network. Then suddenly, shortly before 14:00, a power failure brought trains across the north-west of England to a halt.
Chaos ensued: passengers told the BBC they were stranded on platforms for hours, with some having to book hotels for the night.
This incident, stemming from a short power cut that affected Network Rail's operating centre in Manchester, was, in itself, unusual. But it added to a difficult summer for train passengers.
Repeated heatwaves required risk control measures like speed reductions to avoid tracks being damaged in the heat, leading to delays and cancellations. There was a serious derailment near Lewes, East Sussex, and another smaller-scale incident near Wickford in Essex soon after.
Against a backdrop of relatively high cancellation rates and steep fares compared with previous decades, rail users could be forgiven for forming the impression that things are not working.
Something is changing, though: Labour is steadily bringing nearly all passenger rail services into public hands. Nationalisation is a popular idea - a YouGov tracker poll suggests almost two thirds of the public support public ownership.
But in reality, plans are still in their early stages. Big structural changes have yet to be introduced. And experts caution that it's too early to say how successful these will be.
So can rail nationalisation meet the public's expectations? Or are the ongoing delays and cancellations that we're currently seeing under a part-nationalised network a sign that it might struggle to deliver real improvement?
What the data says
South Western Railway (SWR) was nationalised in May 2025, the first of six services to be brought into public ownership under Labour so far.
At Woking station, which is served by SWR, regular commuter Leo tells me he had been optimistic about public ownership, but hasn't noticed it making any difference so far: "I think the phrase 'emperor's new clothes' comes to mind… it's still unreliable."
SWR saw a clear increase in cancellations during its first year in public hands.
But how much of this was due to nationalisation?
The Conservatives have cited SWR as an example of how public control does not necessarily mean improvements or fix key problems.
But the government argues SWR's early period in public hands was affected by high summer temperatures, signal failures and trespass incidents.
Lord Hendy, the rail minister, says work to turn the operator around has included introducing long-delayed new trains on suburban routes and recruiting more drivers, resulting in a drop in those cancellations that are due to staff shortages.
TransPennine Express was nationalised in May 2023, under the Conservative government. Many passengers had been at their wits' end as the operator struggled to fulfil its timetable and suffered from poor industrial relations.
A plan to improve reliability was put in place, which included cutting some services and even removing one type of train as a way of sorting out staffing problems. A new deal with the drivers' union also helped - something an insider at the former private sector operator claimed to me their company had not been permitted to do.
So has it worked? Cancellations have fallen noticeably. But they were still above the Great Britain average in the year to August.
It's really important to say the data can only tell us so much. There are so many different factors that might affect the performance of each service: for example, the state of the infrastructure it relies on, weather events or simply how well it was working before the government took over.
Plus, of the operators nationalised since Labour came to power, only SWR and c2c have completed a whole year in public hands. Even for those nationalised years earlier, the picture is clouded by the impact of the pandemic, when passenger numbers fell off a cliff.
But according to Alex Hynes, chief executive of DfT Operator Limited (DfTO), the government company that currently owns publicly-run operators, it has been possible to make some short-term changes. Notably, these include making one team jointly responsible for managing infrastructure and passenger train services in some areas including the south-west of England.
"The railway is a system: track, train, people," he says. "So by putting one person in charge, they can fix all elements of the system to deliver a better service to customers."
Hynes also gives examples of changes on the recently nationalised Thameslink; investment in better cleaning, improving toilets and replacing unpopular upright "ironing-board" seats.
But when it comes to the pure performance data of operators nationalised in the past few years - delays, cancellations - can we really draw any conclusions yet to tell us whether the policy is working?
"I think it's completely hopeless to try and do that assessment over such a short period," Stephen Glaister, a former chair of regulator the Office of Rail and Road who is now emeritus professor of transport and infrastructure at Imperial College London. He thinks a decade is needed to assess the impact of nationalisation.
The government argues that official data suggests publicly owned train operators are performing better on punctuality and cancellations overall than those still under DfT contracts to private operators.
Experts point out that whoever is running the passenger trains, some limitations remain. Many delays happen because infrastructure, like signals, fails. There's only so much capacity on the existing network. And getting better trains or more staff can take years.
Beyond the private-public binary
The view that privatisation ultimately failed, leaving unreliable services and high fares, may be widespread. However, Prof Glaister argues that for a few years in the 1990s, the old privatised system actually worked well. Operating costs and subsidies were falling while the number of train services and passengers went up, he says.
And in the current context, it's important to be clear about what nationalisation really means.
The railways Labour inherited weren't, in truth, completely privatised, and nationalisation doesn't mean a return to British Rail.
For example, the infrastructure manager Network Rail has been fully under public control for over two decades. A number of train companies including LNER and Northern had already been nationalised under the Conservatives. Scotrail, Transport for Wales and Caledonian Sleeper are controlled by devolved national governments.
And even those operators still on contracts issued by the DfT at Westminster have been heavily controlled by the government for years. During Covid, private operators started being paid a fixed fee to run services, while the taxpayer took on the financial risk. The terms of the contracts meant train companies had to "ask government for permission to blow their nose", according to one senior industry executive, who asked not to be named so they could speak freely.
Highly profitable rolling stock companies ("ROSCOS") still own the actual trains. Freight companies operate privately too, and there are a handful of fully commercial "open access operators" on the rails like Lumo, Hull Trains and Grand Central - although there are concerns within the industry that these could end up squeezed.
So what is often referred to as the nationalisation of the railways, in fact amounts to gradually returning passenger train operators run by private companies to public hands as their contracts expire - and making this the default.
What will Great British Railways do differently?
This is not all that's happening, though. The government hopes that re-organising the railways under a new publicly run body, Great British Railways (GBR), will make a big difference. This will bring together the running of trains and tracks, ending the current fragmented system.
A botched rail timetable introduction in 2018 was the spark for the then-Conservative government to eventually propose GBR as a new overarching body - although the Tories believe private competition should not be excluded from the system.
Some trains are already covered in distinctive GBR branding, but the organisation still doesn't exist. A new law to create it is making its way through parliament. Unknowns remain, like exactly how GBR will interact with devolved governments, and who its senior leaders will be.
Transport expert and author Prof Jon Shaw, of the University of Plymouth, says the idea of a "single guiding mind" should create "a better planned railway that's more aligned to the customer".
Prof Shaw thinks potential benefits include better long-term planning around rolling-stock and timetables, and the removal of "the compensation merry-go-round", where train companies and Network Rail argue about whose fault a delay was.
Hynes says: "The way you get the railway to work is you get the infrastructure and the trains and the people working in harmony because it's a system. And we can do that in a publicly owned GBR railway in a way that we haven't been able to do for a generation."
But Prof Shaw cautions of potential pitfalls. For example, "there remains very little money", and "a massive issue is whether or not the rail minister or DfT more generally - or the Treasury - will be able to butt out" and leave rail leaders to run the railway.
Prof Glaister also fears politically sensitive aspects such as fares and levels of service could lead to politicians trying to run the railways themselves, because of the amount of public money involved.
"Actually, governments are not very good at running railways," he says. "So you want management who are somewhat independent and able to run it."
Lord Hendy insists that despite the Transport Secretary having ultimate sign-off on GBR's strategy, the body will be genuinely arms-length from government.
"The point of this is to get a cadre of people who are committed to the outcomes that the secretary of state and I want for it, who can go off and run it on their own," he says, adding: "They'll have a lot more chance in the future than they've had in the last 20 years."
A question of cost
The railways are currently subsidised to the tune of around £12bn a year - not including spending on major projects like HS2.
The Transport Secretary Heidi Alexander says that she wants to see subsidy levels fall. Meanwhile, Network Rail has acknowledged a squeezed budget means difficult choices, and shoring up the network against the effects of more extreme weather requires investment.
Prof Glaister says: "When the public is hoping for a better level of service, more reliability, fewer breakdowns and lower fares, what they're really asking for is more money to be put into the railway.
"I don't think it's likely the government is going to be able to find more money, probably [it will have] less, actually. And so I think there's a real problem with ministers raising expectations from this policy."
But Hynes doesn't see a contradiction between reducing taxpayer subsidy and making train services better.
"My two north stars are performance up and subsidy down," he says. "If the service is better, we get more customers, we get more revenue."
Lord Hendy and Hynes also push back on the idea that the answer to improving reliability might be running fewer trains.
Hynes says: "In an industry with high fixed costs, the best way of getting the subsidy down is to go for growth."
Questions also remain about how GBR will manage industrial relations. Terms and conditions currently vary across operators. What will cost-conscious ministers do if unions seek to standardise these at the most generous level across the network?
While ministers argue they are getting on with improvements that people will notice, there's acknowledgement that the speed of improvement will vary between operators.
Lord Hendy says some changes "ought to be dead boring… to make sure tomorrow is a little better than today if you can do it".
But he says "more than 30 years worth of behaviors" will need altering to make the railway run solely in the interests of the customer.
At Woking, is there optimism that things will improve in the long run?
"I really hope so," says Leo, "it would be amazing - as it's not the best service now."
More from InDepth
AI is creating a 'human premium' for art made by people. But will it hold?
- Published2 days ago
Mark Zuckerberg has an image problem - so why is Meta's business booming?
- Published4 days ago
The Republican candidates walking a Trump tightrope
- Published5 days ago
BBC InDepth is the home on the website and app for the best analysis, with fresh perspectives that challenge assumptions and deep reporting on the biggest issues of the day. Emma Barnett and John Simpson bring their pick of the most thought-provoking deep reads and analysis, every Saturday. Sign up for the newsletter here
Get in touch
Are you personally affected by the issues raised in this story?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ck5yn0n14r8do?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-12T23:37:00+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2e85/live/da60e6b0-c646-11f1-a64c-550be9e3c66b.jpg",
    readTime: 10,
  },
  {
    id: "heating-oil-customers-face-tough-winter-a1e0da67",
    title: "Heating oil customers face tough winter despite shake-up promise",
    titleJa: "Heating oil customers face tough winter despite shake-up promise",
    summaryJa: "Heating oil customers facing soaring bills are promised better regulation of the sector by the government.",
    bodyOriginal: `Heating oil customers face tough winter despite shake-up promise
- Published
Heating oil customers facing soaring bills have been promised better regulation of the sector by the government.
Ministers say they will tighten up rules, promote competition and give customers clearer compensation routes if things go wrong. Minimum order levels, set for some customers, will be reviewed.
With prices close to having doubled in the past year, some campaigners have called for heating oil customers to benefit from the same cap as regular, variable gas and electricity tariffs in England, Scotland and Wales.
But there is no sign of the government proposing such a change, nor when the stricter rules will take effect.
Ministers said they would work with industry to "develop a regulatory regime for the heating oil market, protecting consumers and promoting competition".
In the meantime, oil users have been offered discounts on heat pumps, a code of practice is in place, and industry practices setting minimum order volumes at 500 litres for some consumers will be reviewed. Domestic tanks typically hold between 1,000 and 2,000 litres.
The government said this had left some people having to pay for more heating oil than they might need.
Buy now or wait and hope? Families face gamble on heating oil
- Published10 September
Prices have soared since the start of the US-Israeli war with Iran. In March, the government announced a support package worth £53m for low-income families who use heating oil.
The funding is distributed by local authorities, which set their own criteria for eligibility.
A subsequent inquiry by the UK's competition watchdog, the Competition and Markets Authority, found that 1,700 households were forced to "re-order at significantly higher prices or go without fuel" after the war broke out, costing them up to £350.
But those whose orders were cancelled and prices raised were told they were entitled to compensation.
The government has now announced it will accept the CMA's recommendation to strengthen regulation in the sector.
Energy minister Polly Billington said: "Thousands of heating oil customers felt they had nowhere to turn when they paid the price of rising oil and gas costs earlier this year.
"We won't accept that. Energy is an essential good and people should not have to think twice about whether they're protected in the market. That's why we will reform the sector."
'Blind spot'
Nick, a heating oil customer from West Suffolk, told the BBC's Your Voice that "off-grid households remain a major policy blind spot" for the government.
"Any protection from UK government for domestic heating oil users will be very welcome, providing this is for all domestic heating oil users," the 28-year-old said.
He rents a three-bedroom home with his partner. He said they had seen prices more than double in a year, to quotes of 111p per litre.
"Heating my home is now no longer another household bill, but almost an investment," he said.
He called on tax cuts for customers, or the extension of the price cap to heating oil - a demand also made by charity National Energy Action.
Tim Buckman, chief executive of price comparison site Boiler Juice, told the BBC he wants stronger protections for consumers but the main problem was that heating oil is twice as expensive as it was before the war.
"Just putting regulation in place is not going to reduce the price for customers. What we would like to see is the VAT off heating oil or targeting that specifically."
Some 1.5 million households depend on heating oil, but they do not have the same consumer protections as electricity and gas customers.
However, energy regulator Ofgem, which sets the cap for standard variable tariffs, only covers England, Wales and Scotland.
Most heating oil customers are in Northern Ireland, where 60% of households rely on it, but where regulation is separate.
It is likely Ofgem will regulate heating oil in England, Scotland and Wales, and the UK government said it would "engage with the Northern Ireland Executive as they consider these recommendations in parallel".`,
    bodyJa: `Heating oil customers face tough winter despite shake-up promise
- Published
Heating oil customers facing soaring bills have been promised better regulation of the sector by the government.
Ministers say they will tighten up rules, promote competition and give customers clearer compensation routes if things go wrong. Minimum order levels, set for some customers, will be reviewed.
With prices close to having doubled in the past year, some campaigners have called for heating oil customers to benefit from the same cap as regular, variable gas and electricity tariffs in England, Scotland and Wales.
But there is no sign of the government proposing such a change, nor when the stricter rules will take effect.
Ministers said they would work with industry to "develop a regulatory regime for the heating oil market, protecting consumers and promoting competition".
In the meantime, oil users have been offered discounts on heat pumps, a code of practice is in place, and industry practices setting minimum order volumes at 500 litres for some consumers will be reviewed. Domestic tanks typically hold between 1,000 and 2,000 litres.
The government said this had left some people having to pay for more heating oil than they might need.
Buy now or wait and hope? Families face gamble on heating oil
- Published10 September
Prices have soared since the start of the US-Israeli war with Iran. In March, the government announced a support package worth £53m for low-income families who use heating oil.
The funding is distributed by local authorities, which set their own criteria for eligibility.
A subsequent inquiry by the UK's competition watchdog, the Competition and Markets Authority, found that 1,700 households were forced to "re-order at significantly higher prices or go without fuel" after the war broke out, costing them up to £350.
But those whose orders were cancelled and prices raised were told they were entitled to compensation.
The government has now announced it will accept the CMA's recommendation to strengthen regulation in the sector.
Energy minister Polly Billington said: "Thousands of heating oil customers felt they had nowhere to turn when they paid the price of rising oil and gas costs earlier this year.
"We won't accept that. Energy is an essential good and people should not have to think twice about whether they're protected in the market. That's why we will reform the sector."
'Blind spot'
Nick, a heating oil customer from West Suffolk, told the BBC's Your Voice that "off-grid households remain a major policy blind spot" for the government.
"Any protection from UK government for domestic heating oil users will be very welcome, providing this is for all domestic heating oil users," the 28-year-old said.
He rents a three-bedroom home with his partner. He said they had seen prices more than double in a year, to quotes of 111p per litre.
"Heating my home is now no longer another household bill, but almost an investment," he said.
He called on tax cuts for customers, or the extension of the price cap to heating oil - a demand also made by charity National Energy Action.
Tim Buckman, chief executive of price comparison site Boiler Juice, told the BBC he wants stronger protections for consumers but the main problem was that heating oil is twice as expensive as it was before the war.
"Just putting regulation in place is not going to reduce the price for customers. What we would like to see is the VAT off heating oil or targeting that specifically."
Some 1.5 million households depend on heating oil, but they do not have the same consumer protections as electricity and gas customers.
However, energy regulator Ofgem, which sets the cap for standard variable tariffs, only covers England, Wales and Scotland.
Most heating oil customers are in Northern Ireland, where 60% of households rely on it, but where regulation is separate.
It is likely Ofgem will regulate heating oil in England, Scotland and Wales, and the UK government said it would "engage with the Northern Ireland Executive as they consider these recommendations in parallel".`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cxnv0z09r882o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-12T23:02:24+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5cf5/live/5a237390-c642-11f1-abff-0d918239b2e3.jpg",
    readTime: 10,
  },
  {
    id: "i-earn-120-000-a-year-making-social-medi-f84e822a",
    title: "I earn £120,000 a year making social media videos go viral",
    titleJa: "I earn £120,000 a year making social media videos go viral",
    summaryJa: "Social media \"clippers\" make short, vertical videos that appear on the likes of Instagram and TikTok.",
    bodyOriginal: `I earn £120,000 a year making social media videos go viral
- Published
Eknoor Singh says he only needs his mobile phone and a decent internet connection to earn more than £120,000 a year.
The 22-year-old Londoner is a professional "clipper". He is paid by clients to make short, vertical videos for social media, in the hope of them going viral.
"The more views a clip gets, the more money I make," he says.
The way it typically works is that the client - who could be anyone from a clothing brand to a record label, movie studio, podcaster or influencer - has a longer video that the clipper watches first.
He or she then makes 30 to 60-second clips of what they consider to be the best bit or bits, and uploads them to Instagram, YouTube, TikTok or other platforms.
The idea is that the clippers, who are typically aged from 16 to 25, will have a better understanding of what will connect with that demographic, and get the short videos as many views as possible.
£10,000 a month
With clippers able to earn up to $3 (£2.30) per 1,000 views across platforms, it can be very lucrative if a particular clip does take off.
Singh says he got hooked on clipping last year when he made $300 from posting a short video of popstar Dua Lipa on Instagram.
"I was like, 'OK, this is a lot of money for simply posting a video.' I instantly knew how lucrative it could be."
Now he says he is earning "at least £10,000 a month".
He adds that he looks for clips that are funny, quick to watch and engaging, such as a short video he made in May of Sabrina Carpenter's reaction to having the tails of her dress stepped on at the Met Gala in New York. Singh did not reveal who the client was.
Many make nothing
For 24-year-old clipper Ethan Weems from Wichita, Kansas, it's a lucrative side hustle to his other video-making work. He says he makes "at least $1,000 a month" from clipping.
He does this by making short videos for YouTuber and podcaster Caleb Hammer, who is best known for hosting a show called Financial Audit, which analyses the personal finances of his guests.
Weems says clipping helps him make a living from home – giving him more time to spend with his wife and one-year-old son. "I don't want that typical nine-to-five job where I have to go into an office every day," he says.
Yet while some clippers can make good money, social media consultant Lia Haberman cautions that there are very few of them. "It mirrors the creator economy more broadly. The vast majority make little to nothing," she says.
Meanwhile, streaming industry analyst Devin Nash says it's easy to underestimate the time required to make clipping a success. He warns that successful clippers must "watch hours and hours of content, and they just live in that world".
Connecting clippers with their prospective clients are a number of intermediary websites, where available video jobs are listed.
These range from pages on general online forums such as Reddit and Discord, to dedicated clipping sites such as Clipping Culture, Vyro, Whop and Kick.
The latter websites take a fee from the companies wanting the work done. Clipping Culture lists clients including Capital Records, Universal Music Group and HBO Max.
For firms such as these, hiring a teenager or 20-something working from his or her bedroom is far cheaper than paying for traditional adverts on social media, and likely to be more effective in terms of getting eyeballs.
That's the experience of Boxabl, a Las Vegas-based firm that makes modular homes. "I think we've done probably a billion views [of clips] so far," says founder Galiano Tiramani, who features in many of the company's videos.
In the UK, Jimmy McLoughlin, a former Downing Street adviser and now host of the Jimmy's Jobs of the Future podcast, has also embraced clips.
"The clips are almost like trailers for the main events," he says. For instance, a recent podcast with Prime Minister Andy Burnham "had close to 50,000 long plays, but in terms of clips, it's done millions".
Evan Stanfield, the founder and boss of Clipping Culture, is himself just 21. He set up the business last year after dropping out of the University of Kansas.
Stanfield says that the website connects brands to more than 340,000 clippers from all over the world. He has a simple theory for the popularity of short videos: "People's attention spans are getting shorter and shorter."
He adds that making the clips is a young person's game because "they're most of the consumers of short-form videos".
Back in London, Eknoor Singh says he is "kind of clipping non-stop", wherever he is.
"I could be anywhere. I could go on holiday and make money."
- Published29 September
- Published15 September`,
    bodyJa: `I earn £120,000 a year making social media videos go viral
- Published
Eknoor Singh says he only needs his mobile phone and a decent internet connection to earn more than £120,000 a year.
The 22-year-old Londoner is a professional "clipper". He is paid by clients to make short, vertical videos for social media, in the hope of them going viral.
"The more views a clip gets, the more money I make," he says.
The way it typically works is that the client - who could be anyone from a clothing brand to a record label, movie studio, podcaster or influencer - has a longer video that the clipper watches first.
He or she then makes 30 to 60-second clips of what they consider to be the best bit or bits, and uploads them to Instagram, YouTube, TikTok or other platforms.
The idea is that the clippers, who are typically aged from 16 to 25, will have a better understanding of what will connect with that demographic, and get the short videos as many views as possible.
£10,000 a month
With clippers able to earn up to $3 (£2.30) per 1,000 views across platforms, it can be very lucrative if a particular clip does take off.
Singh says he got hooked on clipping last year when he made $300 from posting a short video of popstar Dua Lipa on Instagram.
"I was like, 'OK, this is a lot of money for simply posting a video.' I instantly knew how lucrative it could be."
Now he says he is earning "at least £10,000 a month".
He adds that he looks for clips that are funny, quick to watch and engaging, such as a short video he made in May of Sabrina Carpenter's reaction to having the tails of her dress stepped on at the Met Gala in New York. Singh did not reveal who the client was.
Many make nothing
For 24-year-old clipper Ethan Weems from Wichita, Kansas, it's a lucrative side hustle to his other video-making work. He says he makes "at least $1,000 a month" from clipping.
He does this by making short videos for YouTuber and podcaster Caleb Hammer, who is best known for hosting a show called Financial Audit, which analyses the personal finances of his guests.
Weems says clipping helps him make a living from home – giving him more time to spend with his wife and one-year-old son. "I don't want that typical nine-to-five job where I have to go into an office every day," he says.
Yet while some clippers can make good money, social media consultant Lia Haberman cautions that there are very few of them. "It mirrors the creator economy more broadly. The vast majority make little to nothing," she says.
Meanwhile, streaming industry analyst Devin Nash says it's easy to underestimate the time required to make clipping a success. He warns that successful clippers must "watch hours and hours of content, and they just live in that world".
Connecting clippers with their prospective clients are a number of intermediary websites, where available video jobs are listed.
These range from pages on general online forums such as Reddit and Discord, to dedicated clipping sites such as Clipping Culture, Vyro, Whop and Kick.
The latter websites take a fee from the companies wanting the work done. Clipping Culture lists clients including Capital Records, Universal Music Group and HBO Max.
For firms such as these, hiring a teenager or 20-something working from his or her bedroom is far cheaper than paying for traditional adverts on social media, and likely to be more effective in terms of getting eyeballs.
That's the experience of Boxabl, a Las Vegas-based firm that makes modular homes. "I think we've done probably a billion views [of clips] so far," says founder Galiano Tiramani, who features in many of the company's videos.
In the UK, Jimmy McLoughlin, a former Downing Street adviser and now host of the Jimmy's Jobs of the Future podcast, has also embraced clips.
"The clips are almost like trailers for the main events," he says. For instance, a recent podcast with Prime Minister Andy Burnham "had close to 50,000 long plays, but in terms of clips, it's done millions".
Evan Stanfield, the founder and boss of Clipping Culture, is himself just 21. He set up the business last year after dropping out of the University of Kansas.
Stanfield says that the website connects brands to more than 340,000 clippers from all over the world. He has a simple theory for the popularity of short videos: "People's attention spans are getting shorter and shorter."
He adds that making the clips is a young person's game because "they're most of the consumers of short-form videos".
Back in London, Eknoor Singh says he is "kind of clipping non-stop", wherever he is.
"I could be anywhere. I could go on holiday and make money."
- Published29 September
- Published15 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c84g12v3lk20o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-12T23:01:45+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1cf2/live/90f60900-c543-11f1-bc2e-018d645d8d21.jpg",
    readTime: 10,
  },
  {
    id: "trump-not-happy-with-kimberly-guilfoyle-3a32c8aa",
    title: "Trump 'not happy' with Kimberly Guilfoyle, weighs firing her as ambassador to Greece",
    titleJa: "Trump 'not happy' with Kimberly Guilfoyle, weighs firing her as ambassador to Greece",
    summaryJa: "The former Fox News personality Guilfoyle was previously engaged to the president's son, Donald Trump Jr.",
    bodyOriginal: `President Donald Trump said Monday that he is "not happy" with Kimberly Guilfoyle, and is considering whether to fire her as U.S. ambassador to Greece.
Trump's comments at the White House after a series of critical articles in The Wall Street Journal about Guilfolye's conduct before and after she became ambassador.
Asked by a reporter if he was weighing firing Guilfolye, Trump replied, "Well, we're looking at it."
"Yeah, we're not happy," the president said.
Guilfoyle previously was engaged to Trump's eldest son, Donald Trump Jr. After the couple broke up, the president appointed the former Fox News personality as ambassador.
CNBC has requested comment from Guilfoyle's attorney about Trump's remark.
The Journal on Sept. 25 published an article under the headline, "The Mystery Man Shadowing Kimberly Guilfoyle as She Pushes Deals Across Europe."
The story detailed Guilfoyle's push to get U.S. allies in Eastern Europe to buy billions of dollars of American natural gas.
The article said that Guilfoyle told people who were the targets of her effort that "they should deal with a Greek construction firm called Aktor Group, a newcomer to the gas business that had teamed up with a Greek state-backed energy company to bring in liquefied natural gas from the U.S."
The article detailed how Guilfoyle had traveled frequently with a top lobbyist for Aktor named Christos Marafatsos, who has been "joining her for meetings at her ambassadorial residence and with government officials in countries around the region—a highly unusual move for a private citizen."
On Oct. 7, the Journal published an article detailing how Guilfoyle allegedly asked a Trump donor named Eric Deters in July 2025 to pay $100,000 for what she said was an American Express bill before her upcoming Senate confirmation hearing for the ambassadorship.
A lawyer for Guilfoyle told the newspaper that Deters owed her a balance for "traveling to and supporting" events where she was hired to speak.
On Saturday, the Journal published another article that said during the January 2026 World Economic Forum in Davos, Switzerland, she had "boasted ... about her close ties to two Greek tycoons and said they were bankrolling her high-rolling trips around the world."
In a statement on Sunday, Guilfoyle's lawyers "denied she had done anything wrong and claimed that the money she was seeking from the Trump donor was payment for services — public appearances and speaking engagements that predate her ambassadorial nomination — that had not been paid," The Associated Press reported.
The lawyers "also rejected allegations of impropriety related to Guilfoyle's travel on private planes, saying that before every such trip she 'sought, obtained and followed State Department guidance and followed the Department's travel regulations,' " The AP reported, citing the statement.`,
    bodyJa: `President Donald Trump said Monday that he is "not happy" with Kimberly Guilfoyle, and is considering whether to fire her as U.S. ambassador to Greece.
Trump's comments at the White House after a series of critical articles in The Wall Street Journal about Guilfolye's conduct before and after she became ambassador.
Asked by a reporter if he was weighing firing Guilfolye, Trump replied, "Well, we're looking at it."
"Yeah, we're not happy," the president said.
Guilfoyle previously was engaged to Trump's eldest son, Donald Trump Jr. After the couple broke up, the president appointed the former Fox News personality as ambassador.
CNBC has requested comment from Guilfoyle's attorney about Trump's remark.
The Journal on Sept. 25 published an article under the headline, "The Mystery Man Shadowing Kimberly Guilfoyle as She Pushes Deals Across Europe."
The story detailed Guilfoyle's push to get U.S. allies in Eastern Europe to buy billions of dollars of American natural gas.
The article said that Guilfoyle told people who were the targets of her effort that "they should deal with a Greek construction firm called Aktor Group, a newcomer to the gas business that had teamed up with a Greek state-backed energy company to bring in liquefied natural gas from the U.S."
The article detailed how Guilfoyle had traveled frequently with a top lobbyist for Aktor named Christos Marafatsos, who has been "joining her for meetings at her ambassadorial residence and with government officials in countries around the region—a highly unusual move for a private citizen."
On Oct. 7, the Journal published an article detailing how Guilfoyle allegedly asked a Trump donor named Eric Deters in July 2025 to pay $100,000 for what she said was an American Express bill before her upcoming Senate confirmation hearing for the ambassadorship.
A lawyer for Guilfoyle told the newspaper that Deters owed her a balance for "traveling to and supporting" events where she was hired to speak.
On Saturday, the Journal published another article that said during the January 2026 World Economic Forum in Davos, Switzerland, she had "boasted ... about her close ties to two Greek tycoons and said they were bankrolling her high-rolling trips around the world."
In a statement on Sunday, Guilfoyle's lawyers "denied she had done anything wrong and claimed that the money she was seeking from the Trump donor was payment for services — public appearances and speaking engagements that predate her ambassadorial nomination — that had not been paid," The Associated Press reported.
The lawyers "also rejected allegations of impropriety related to Guilfoyle's travel on private planes, saying that before every such trip she 'sought, obtained and followed State Department guidance and followed the Department's travel regulations,' " The AP reported, citing the statement.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/trump-kimberly-guilfoyle-ambassador.html",
    publishedAt: "2026-10-12T22:26:59+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "elon-musk-gives-276-million-to-republica-d0b42a1d",
    title: "Elon Musk gives $276 million to Republican groups, becomes biggest known 2026 midterm donor",
    titleJa: "Elon Musk gives $276 million to Republican groups, becomes biggest known 2026 midterm donor",
    summaryJa: "Musk’s record midterm election spending comes as the Tesla and SpaceX CEO rebuilds his relationship with Trump and has business ties to the federal government.",
    bodyOriginal: `Elon Musk spent more than $276 million in newly disclosed donations to Republican groups since July, making him the biggest known donor of the 2026 midterm election as the party fights to hold its majorities in Washington this November.
The largest share – $158 million – went to the Senate Leadership Fund, the main super PAC backing Republican Senate candidates, according to figures provided by Musk's representatives to The New York Times and confirmed Monday to CNBC by Lindsey Curnutte, a spokesperson for Musk's America PAC.
The Tesla and SpaceX CEO also gave more than $76 million to America PAC, the group he founded during the 2024 election, which has built a large voter-turnout operation in competitive Senate and House races.
The new contributions bring Musk's known federal political giving for the 2025-26 cycle to roughly $366 million, already surpassing the approximately $290 million he spent during the 2024 presidential election. The scale of the latest giving is historic: Musk's $158 million contribution to Senate Leadership Fund is among the largest known political donations by an individual in U.S. history.
The new figures were disclosed days ahead of a Thursday Federal Election Commission filing deadline, when political committees are due to report their third-quarter finances.
The Senate Leadership Fund has spent heavily this cycle to defend the Republican majority, including in Texas, where GOP Attorney General Ken Paxton is running against Democrat James Talarico. Talarico leads Paxton 48.4% to 45.0% in FiftyPlusOne's polling average as of Oct. 12.
Musk separately gave $10 million to Lone Star Liberty PAC, which supports Paxton. He also contributed $20 million to the Congressional Leadership Fund, the leading super PAC supporting House Republicans, $10 million to the Republican Governors Association and $2 million to the Republican Attorneys General Association, the Times reported and Curnutte confirmed.
The trillionaire's footprint in Texas has expanded rapidly in recent years, with Tesla, X and The Boring Company now headquartered in the state and SpaceX growing its manufacturing and launch operations there.
The political spending is also a sharp reversal from Musk's public comments last year.
"In terms of political spending, I'm going to do a lot less in the future," Musk said in May 2025.
At the time, Musk was stepping back after a highly visible role in President Donald Trump's administration and a public falling-out with the president. The two have since repaired their relationship, appearing together at several recent events.
Musk also retains deep ties to the federal government through SpaceX, a major NASA and Pentagon contractor. Defense Secretary Pete Hegseth last month also named him co-director of Project Meridian, a Pentagon panel studying the future of warfare.
— Kevin Breuninger contributed to this report.`,
    bodyJa: `Elon Musk spent more than $276 million in newly disclosed donations to Republican groups since July, making him the biggest known donor of the 2026 midterm election as the party fights to hold its majorities in Washington this November.
The largest share – $158 million – went to the Senate Leadership Fund, the main super PAC backing Republican Senate candidates, according to figures provided by Musk's representatives to The New York Times and confirmed Monday to CNBC by Lindsey Curnutte, a spokesperson for Musk's America PAC.
The Tesla and SpaceX CEO also gave more than $76 million to America PAC, the group he founded during the 2024 election, which has built a large voter-turnout operation in competitive Senate and House races.
The new contributions bring Musk's known federal political giving for the 2025-26 cycle to roughly $366 million, already surpassing the approximately $290 million he spent during the 2024 presidential election. The scale of the latest giving is historic: Musk's $158 million contribution to Senate Leadership Fund is among the largest known political donations by an individual in U.S. history.
The new figures were disclosed days ahead of a Thursday Federal Election Commission filing deadline, when political committees are due to report their third-quarter finances.
The Senate Leadership Fund has spent heavily this cycle to defend the Republican majority, including in Texas, where GOP Attorney General Ken Paxton is running against Democrat James Talarico. Talarico leads Paxton 48.4% to 45.0% in FiftyPlusOne's polling average as of Oct. 12.
Musk separately gave $10 million to Lone Star Liberty PAC, which supports Paxton. He also contributed $20 million to the Congressional Leadership Fund, the leading super PAC supporting House Republicans, $10 million to the Republican Governors Association and $2 million to the Republican Attorneys General Association, the Times reported and Curnutte confirmed.
The trillionaire's footprint in Texas has expanded rapidly in recent years, with Tesla, X and The Boring Company now headquartered in the state and SpaceX growing its manufacturing and launch operations there.
The political spending is also a sharp reversal from Musk's public comments last year.
"In terms of political spending, I'm going to do a lot less in the future," Musk said in May 2025.
At the time, Musk was stepping back after a highly visible role in President Donald Trump's administration and a public falling-out with the president. The two have since repaired their relationship, appearing together at several recent events.
Musk also retains deep ties to the federal government through SpaceX, a major NASA and Pentagon contractor. Defense Secretary Pete Hegseth last month also named him co-director of Project Meridian, a Pentagon panel studying the future of warfare.
— Kevin Breuninger contributed to this report.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/elon-musk-republican-donations-2026-midterm-election.html",
    publishedAt: "2026-10-12T21:17:58+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 7,
  },
  {
    id: "earnings-beats-are-now-the-norm-what-the-22c6f0fe",
    title: "Earnings beats are now the norm. What the stock market needs to keep rallying",
    titleJa: "Earnings beats are now the norm. What the stock market needs to keep rallying",
    summaryJa: "Blockbuster profits are coming for the S&amp;P 500. It may not be enough to keep fueling the rally.",
    bodyOriginal: `Will 30% profit growth and upbeat tech guidance be enough to keep the rally going? We'll soon find out.
Third-quarter earnings season kicks into gear Tuesday with JPMorgan Chase and other big banks. Expectations are steep: consensus forecasts call for nearly 30% year-over-year growth, according to FactSet. That's up from around 27% three months ago. But 30% or more should be doable — S&P 500 profits have topped quarterly estimates by healthy margins since mid-2023.
Tech will have to do its part at beating estimates and lifting guidance. For now, the sector shows no signs of slowing. Analysts expect 65% gains for tech profits, up from an estimated 57% growth three months ago. Upward revisions for Nvidia, Micron Technology and Dell Technologies are doing the heavy lifting, according to FactSet.
Also positive, profit growth is broadening beyond the Mag 7. The other 493 stocks in the S&P 500 are forecast to deliver 27% year-over-year gains, topping the Mag-7 average, according to Russell Investments. S&P 400 MidCap operating earnings should rise 19% in 2026, notes Ed Yardeni, head of Yardeni Research.
Banks first at bat
The first earnings test comes with the big banks. JPMorgan, Goldman Sachs, Citigroup, and Wells Fargo, reporting Tuesday, should reveal how steeper interest rates are impacting loan growth, balance sheets, M&A activity and the IPO pipeline. JPMorgan — the largest U.S. bank — will be critical, along with comments from CEO Jamie Dimon who tends to move markets with his outlook.
Financials are on a knife's edge; the sector is hovering around its 200-day moving average, a key technical indicator, after falling 5% since August 31. Analysts see rising interest rates starting to sting loan growth and fixed-income securities held on balance sheets.
The weakness could make for a relief rally, but earnings and guidance could go either way, pushing the stocks up or down, notes Julian Emanuel, senior managing director at Evercore ISI. "There will be volatility as investors hang on every word from the Big Banks this week," he said in a note.
Emanuel remains bullish on the market, however, and tech in particular. Several other strategists concur.
Goldman Sachs shifted to an "overweight" stance on equities Monday, saying "growth remains supportive." The bank's strategists see a favorable macro climate with low recession risk. And they expect inflation to ease in 2027 — all of which points to "more of a 'Goldilocks' backdrop," according to a note by Christian Mueller-Glissmann, head of asset allocation at Goldman Sachs Research.
For positioning, he recommends a "barbell of AI beneficiaries and selective rate-sensitive, high-dividend and low-volatility stocks that could benefit from eventual rate relief."
The setup also looks favorable because multiples have fallen, notes Lisa Shalett, chief investment officer for Morgan Stanley Wealth Management. Stocks are trading at 19 times forward earnings, down from 21 times over the summer, despite the fact that earnings growth has picked up. While rising bond yields have compressed multiples, "that's typical of a midcycle expansion when rate hikes have yet to truly bite," she points out.
Shalett also takes solace in the market's growth drivers. "While many sectors will likely eventually be impacted by higher-for-longer rates, the key growth vectors for this boom — AI capex and wealth-linked consumption — have thus far proved rate-insensitive," she said in a note Monday.
UBS sees gains for equities too. "Investors should remain positioned for market upside, and we forecast the S&P 500 to reach 8,400 by June next year," said Ulrike Hoffmann-Burchardi, CIO Americas and Global Head of Equities for UBS Chief Investment Office in a recent note.
More critical than bank earnings may be tech — a sector accounting for 40% of the S&P 500 and about a third of its estimated $800 billion in profits this quarter. Analysts will be looking for signals that AI chip and infrastructure demand are powering through a tough macro climate and higher energy prices, and the stocks will move on 2027 guidance.
The first clues may come when Taiwan Semiconductor Manufacturing Company reports Thursday. Third-quarter profit estimates for TSM are up to $4.45 a share, from $3.42 in January, according to FactSet consensus forecasts. TSM has beaten forecasts in 19 of the last 20 quarters, including a 10.8% beat in the second quarter. Its outlook on chip demand will be a key indicator for Nvidia and other chipmakers.
The Nasdaq 100 is sitting near record highs, however, thanks to a swath of AI companies issuing upbeat reports and new products — easing some of the consternation about the cycle topping out. Micron delivered a knockout quarter. On the consumer side, Meta Platforms' launch of its Muse agent has set off an arms race to capture AI-enabled consumer e-commerce, while also catapulting its stock.
Trouble below the surface?
Granted, the market's reliance on tech belies weakness elsewhere. Of the 504 stocks in the S&P 500, nearly 38% are off 20% or more from their 52-week high. It's a mark of narrow breadth as investors reward a few hot sectors (primarily tech and energy) while others languish.
Earnings revisions have also turned negative in many cases. Eight sectors have seen negative revisions in bottom-up EPS estimates since June 30, led by materials (-10.2%), consumer staples (-4%) and health care (-3.3%), according to FactSet.
Also of note, earnings will be a test for the market's multiple. While the S&P 500's P/E has dropped to about 19 times, the index "reads expensive" on 17 of 20 valuation measures, according to Bank of America, adding that implies a -3% annualized return over the next decade.
BofA does see a positive setup for the quarter, expecting 32% earnings growth, a roughly 3% beat to consensus. But after two quarters of companies blowing past forecasts, "healthy beats are the status quo and may not be enough to drive stocks higher," BofA says.
It may also take more than a healthy AI outlook to keep the rally going. As BofA notes, "the interplay between geopolitics, rates and Tech may be underestimated — a higher cost of capital and geopolitical bottlenecks could gum up what has so far been a mostly smooth story."
Something to chew on as markets start digesting third-quarter results.`,
    bodyJa: `Will 30% profit growth and upbeat tech guidance be enough to keep the rally going? We'll soon find out.
Third-quarter earnings season kicks into gear Tuesday with JPMorgan Chase and other big banks. Expectations are steep: consensus forecasts call for nearly 30% year-over-year growth, according to FactSet. That's up from around 27% three months ago. But 30% or more should be doable — S&P 500 profits have topped quarterly estimates by healthy margins since mid-2023.
Tech will have to do its part at beating estimates and lifting guidance. For now, the sector shows no signs of slowing. Analysts expect 65% gains for tech profits, up from an estimated 57% growth three months ago. Upward revisions for Nvidia, Micron Technology and Dell Technologies are doing the heavy lifting, according to FactSet.
Also positive, profit growth is broadening beyond the Mag 7. The other 493 stocks in the S&P 500 are forecast to deliver 27% year-over-year gains, topping the Mag-7 average, according to Russell Investments. S&P 400 MidCap operating earnings should rise 19% in 2026, notes Ed Yardeni, head of Yardeni Research.
Banks first at bat
The first earnings test comes with the big banks. JPMorgan, Goldman Sachs, Citigroup, and Wells Fargo, reporting Tuesday, should reveal how steeper interest rates are impacting loan growth, balance sheets, M&A activity and the IPO pipeline. JPMorgan — the largest U.S. bank — will be critical, along with comments from CEO Jamie Dimon who tends to move markets with his outlook.
Financials are on a knife's edge; the sector is hovering around its 200-day moving average, a key technical indicator, after falling 5% since August 31. Analysts see rising interest rates starting to sting loan growth and fixed-income securities held on balance sheets.
The weakness could make for a relief rally, but earnings and guidance could go either way, pushing the stocks up or down, notes Julian Emanuel, senior managing director at Evercore ISI. "There will be volatility as investors hang on every word from the Big Banks this week," he said in a note.
Emanuel remains bullish on the market, however, and tech in particular. Several other strategists concur.
Goldman Sachs shifted to an "overweight" stance on equities Monday, saying "growth remains supportive." The bank's strategists see a favorable macro climate with low recession risk. And they expect inflation to ease in 2027 — all of which points to "more of a 'Goldilocks' backdrop," according to a note by Christian Mueller-Glissmann, head of asset allocation at Goldman Sachs Research.
For positioning, he recommends a "barbell of AI beneficiaries and selective rate-sensitive, high-dividend and low-volatility stocks that could benefit from eventual rate relief."
The setup also looks favorable because multiples have fallen, notes Lisa Shalett, chief investment officer for Morgan Stanley Wealth Management. Stocks are trading at 19 times forward earnings, down from 21 times over the summer, despite the fact that earnings growth has picked up. While rising bond yields have compressed multiples, "that's typical of a midcycle expansion when rate hikes have yet to truly bite," she points out.
Shalett also takes solace in the market's growth drivers. "While many sectors will likely eventually be impacted by higher-for-longer rates, the key growth vectors for this boom — AI capex and wealth-linked consumption — have thus far proved rate-insensitive," she said in a note Monday.
UBS sees gains for equities too. "Investors should remain positioned for market upside, and we forecast the S&P 500 to reach 8,400 by June next year," said Ulrike Hoffmann-Burchardi, CIO Americas and Global Head of Equities for UBS Chief Investment Office in a recent note.
More critical than bank earnings may be tech — a sector accounting for 40% of the S&P 500 and about a third of its estimated $800 billion in profits this quarter. Analysts will be looking for signals that AI chip and infrastructure demand are powering through a tough macro climate and higher energy prices, and the stocks will move on 2027 guidance.
The first clues may come when Taiwan Semiconductor Manufacturing Company reports Thursday. Third-quarter profit estimates for TSM are up to $4.45 a share, from $3.42 in January, according to FactSet consensus forecasts. TSM has beaten forecasts in 19 of the last 20 quarters, including a 10.8% beat in the second quarter. Its outlook on chip demand will be a key indicator for Nvidia and other chipmakers.
The Nasdaq 100 is sitting near record highs, however, thanks to a swath of AI companies issuing upbeat reports and new products — easing some of the consternation about the cycle topping out. Micron delivered a knockout quarter. On the consumer side, Meta Platforms' launch of its Muse agent has set off an arms race to capture AI-enabled consumer e-commerce, while also catapulting its stock.
Trouble below the surface?
Granted, the market's reliance on tech belies weakness elsewhere. Of the 504 stocks in the S&P 500, nearly 38% are off 20% or more from their 52-week high. It's a mark of narrow breadth as investors reward a few hot sectors (primarily tech and energy) while others languish.
Earnings revisions have also turned negative in many cases. Eight sectors have seen negative revisions in bottom-up EPS estimates since June 30, led by materials (-10.2%), consumer staples (-4%) and health care (-3.3%), according to FactSet.
Also of note, earnings will be a test for the market's multiple. While the S&P 500's P/E has dropped to about 19 times, the index "reads expensive" on 17 of 20 valuation measures, according to Bank of America, adding that implies a -3% annualized return over the next decade.
BofA does see a positive setup for the quarter, expecting 32% earnings growth, a roughly 3% beat to consensus. But after two quarters of companies blowing past forecasts, "healthy beats are the status quo and may not be enough to drive stocks higher," BofA says.
It may also take more than a healthy AI outlook to keep the rally going. As BofA notes, "the interplay between geopolitics, rates and Tech may be underestimated — a higher cost of capital and geopolitical bottlenecks could gum up what has so far been a mostly smooth story."
Something to chew on as markets start digesting third-quarter results.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/07/here-comes-third-quarter-earnings-season-booming-profits-could-propel-the-sp-500-to-new-heights.html",
    publishedAt: "2026-10-12T20:35:51+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "trump-defends-russia-diesel-deal-after-b-026ca430",
    title: "Trump defends Russia diesel deal after bipartisan pushback: 'I made the right choice'",
    titleJa: "Trump defends Russia diesel deal after bipartisan pushback: 'I made the right choice'",
    summaryJa: "Ukraine President Volodymyr Zelenskyy said that the U.S. easing sanctions on Moscow \"plays into Russia's hands.\"",
    bodyOriginal: `President Donald Trump on Monday defended last week's decision to temporarily ease restrictions on Russian diesel fuel exports after the announcement drew bipartisan criticism.
Trump, in a Truth Social post, accused the media of hypocrisy for allegedly refusing to cover past purchases of Russian energy by the European Union.
"The European Union paid Russia 250 Billion Dollars for Energy, and the Fake News Media doesn't want to get near that story," Trump wrote.
While the president did not specify, his figure roughly tracks with some estimates of how much the EU has spent importing fossil fuels from Russia since the 2022 invasion of Ukraine. The European Commission has launched a plan to phase out its dependence on Russian energy.
"I made the right choice for the American People — ALWAYS, AMERICA FIRST!" Trump wrote in the social media post.
Lawmakers from both parties raised concerns about Trump's decision to let Russia supply some diesel to the U.S. and global markets for the next six months.
The plan received pushback from multiple congressional Republicans who have urged Trump not to lift the U.S. ban on energy imports from Russia until its president, Vladimir Putin, ends the war against Ukraine.
"The United States should not provide Putin with a financial lifeline while Russia continues to kill Ukrainian civilians," a group of seven senators, including four Republicans, said in a joint statement on Sunday.
Other Republicans have also raised issues with Trump's deal.
"While I understand the desire to bring down diesel prices, I am concerned the lifting of sanctions on Russian oil will only fund the Kremlin's war machine—emboldening more violence and destruction, as we have seen in recent days," Rep. Michael McCaul, R-Texas, said Friday.
Trump, whose party is staring down a potentially tough midterm election that has coincided with widespread economic dissatisfaction, says the plan he coordinated with Putin will help bring down sky-high diesel prices. Some analysts say the policy won't make much of a dent, however.
Ukrainian President Volodymyr Zelenskyy said Friday that the U.S. easing sanctions on Moscow "plays into Russia's hands."`,
    bodyJa: `President Donald Trump on Monday defended last week's decision to temporarily ease restrictions on Russian diesel fuel exports after the announcement drew bipartisan criticism.
Trump, in a Truth Social post, accused the media of hypocrisy for allegedly refusing to cover past purchases of Russian energy by the European Union.
"The European Union paid Russia 250 Billion Dollars for Energy, and the Fake News Media doesn't want to get near that story," Trump wrote.
While the president did not specify, his figure roughly tracks with some estimates of how much the EU has spent importing fossil fuels from Russia since the 2022 invasion of Ukraine. The European Commission has launched a plan to phase out its dependence on Russian energy.
"I made the right choice for the American People — ALWAYS, AMERICA FIRST!" Trump wrote in the social media post.
Lawmakers from both parties raised concerns about Trump's decision to let Russia supply some diesel to the U.S. and global markets for the next six months.
The plan received pushback from multiple congressional Republicans who have urged Trump not to lift the U.S. ban on energy imports from Russia until its president, Vladimir Putin, ends the war against Ukraine.
"The United States should not provide Putin with a financial lifeline while Russia continues to kill Ukrainian civilians," a group of seven senators, including four Republicans, said in a joint statement on Sunday.
Other Republicans have also raised issues with Trump's deal.
"While I understand the desire to bring down diesel prices, I am concerned the lifting of sanctions on Russian oil will only fund the Kremlin's war machine—emboldening more violence and destruction, as we have seen in recent days," Rep. Michael McCaul, R-Texas, said Friday.
Trump, whose party is staring down a potentially tough midterm election that has coincided with widespread economic dissatisfaction, says the plan he coordinated with Putin will help bring down sky-high diesel prices. Some analysts say the policy won't make much of a dent, however.
Ukrainian President Volodymyr Zelenskyy said Friday that the U.S. easing sanctions on Moscow "plays into Russia's hands."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/trump-russia-diesel-putin.html",
    publishedAt: "2026-10-12T18:32:03+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "fridges-in-french-supermarkets-hit-by-cy-29d2e9c0",
    title: "Fridges in French supermarkets hit by cyber attack",
    titleJa: "Fridges in French supermarkets hit by cyber attack",
    summaryJa: "Hundreds of stores were targeted by the overnight hack, which spoiled fresh and frozen food estimated to be worth millions of euros.",
    bodyOriginal: `Fridges in French supermarkets hit by cyber attack
- Published
Hundreds of French supermarkets have been hit by a cyber attack that caused their fridges and freezers to heat up, spoiling fresh and frozen food estimated to be worth millions of euros.
Hackers gained control of the software that regulates the temperatures of the refrigeration units, forcing some to warm to 50C (120F) overnight, according to one supermarket chain affected.
The chief executive of Coopérative U said several of its supermarkets had been hit by the "extremely serious and unprecedented" attack.
More than 100 of the chain's supermarkets were targeted, while 180 stores from Intermarché and its Netto brand were affected, with a spokesman saying that another 100 shops were urgently disconnected from the internet to prevent the same thing happening to them.
Other major food retailers including Carrefour, Monoprix and E.Leclerc were also hit by the attack, which targeted software provided by Danish engineering firm Danfoss.
The software allows retailers to manage their cold units remotely.
Normally, supermarket freezers go through a short period of defrosting overnight, in which temperatures rise slightly. But the hackers ordered the units to heat up and stay hot, although Danfoss did not confirm any reports about just how warm the fridges and freezers could become in that process.
Danfoss said the affected cold units were older models whose security software could not be updated to ward off a risk they had identified.
The firm added in s statement that it had "long advised" businesses to keep supported systems up to date.
"Reliable refrigeration is critical to our customers' operations, and we remain committed to supporting our customers and helping them maintain secure and reliable systems they are used to."
The full scale of the attack is unclear, but figures supplied by individual chains suggest about 400 stores were affected out of 15,000 or so overall in France.
Carrefour said fridges in 80 of its 6,000 stores were hacked, while Monoprix said 5% of its 400-plus stores had been hit, with food removed from sale if its condition could not be guaranteed.
In a statement to the BBC, Mousquetaires Group - which owns Intermarché and Netto - said some fresh and frozen food display units remained out of service on Monday afternoon.
The stores had "taken all necessary precautions to remove the products from these units", it said, adding that staff were working to restock the shelves "as soon as possible".
Intermarché said its fridges had heated up to 50C for six hours overnight into Monday, and the retailer had thrown away all the affected food to avoid health risks, the Reuters news agency reported.
As a result of the attack, managers arriving at branches of several supermarket chains on Monday morning were hit by a wave of hot air from the freezers. In some places there were even small fires.
French broadcaster BFMTV published an image showing a freezer in an ice cream aisle displaying a temperature of 26.5C.
Two supermarkets in the Alsace region reported losses of €270,000 (£228,000) between them, the broadcaster added, meaning the nationwide total could run into the millions.
French prosecutors have opened a specific cyber-crime investigation into the incident, which the Paris prosecutor's office called a "large-scale cyber-attack affecting the refrigerators of several major food retail chains across France".
European Food Commissioner Christophe Hansen condemned the hack in a post on X and added: "Food security requires more attention at all levels. Because the weaponisation of food has become a reality."
In a post on X, Coopérative chief executive Dominique Schelcher said staff were "fully mobilised, in co-ordination with refrigeration specialists, to restore the situation as quickly as possible".
He called for an investigation into the hack and said targeting equipment essential to the French food supply was "unacceptable".
Have you been affected by this cyber attack? Share your experience.
Get in touch
Have you been affected by this cyber attack? Share your experience.`,
    bodyJa: `Fridges in French supermarkets hit by cyber attack
- Published
Hundreds of French supermarkets have been hit by a cyber attack that caused their fridges and freezers to heat up, spoiling fresh and frozen food estimated to be worth millions of euros.
Hackers gained control of the software that regulates the temperatures of the refrigeration units, forcing some to warm to 50C (120F) overnight, according to one supermarket chain affected.
The chief executive of Coopérative U said several of its supermarkets had been hit by the "extremely serious and unprecedented" attack.
More than 100 of the chain's supermarkets were targeted, while 180 stores from Intermarché and its Netto brand were affected, with a spokesman saying that another 100 shops were urgently disconnected from the internet to prevent the same thing happening to them.
Other major food retailers including Carrefour, Monoprix and E.Leclerc were also hit by the attack, which targeted software provided by Danish engineering firm Danfoss.
The software allows retailers to manage their cold units remotely.
Normally, supermarket freezers go through a short period of defrosting overnight, in which temperatures rise slightly. But the hackers ordered the units to heat up and stay hot, although Danfoss did not confirm any reports about just how warm the fridges and freezers could become in that process.
Danfoss said the affected cold units were older models whose security software could not be updated to ward off a risk they had identified.
The firm added in s statement that it had "long advised" businesses to keep supported systems up to date.
"Reliable refrigeration is critical to our customers' operations, and we remain committed to supporting our customers and helping them maintain secure and reliable systems they are used to."
The full scale of the attack is unclear, but figures supplied by individual chains suggest about 400 stores were affected out of 15,000 or so overall in France.
Carrefour said fridges in 80 of its 6,000 stores were hacked, while Monoprix said 5% of its 400-plus stores had been hit, with food removed from sale if its condition could not be guaranteed.
In a statement to the BBC, Mousquetaires Group - which owns Intermarché and Netto - said some fresh and frozen food display units remained out of service on Monday afternoon.
The stores had "taken all necessary precautions to remove the products from these units", it said, adding that staff were working to restock the shelves "as soon as possible".
Intermarché said its fridges had heated up to 50C for six hours overnight into Monday, and the retailer had thrown away all the affected food to avoid health risks, the Reuters news agency reported.
As a result of the attack, managers arriving at branches of several supermarket chains on Monday morning were hit by a wave of hot air from the freezers. In some places there were even small fires.
French broadcaster BFMTV published an image showing a freezer in an ice cream aisle displaying a temperature of 26.5C.
Two supermarkets in the Alsace region reported losses of €270,000 (£228,000) between them, the broadcaster added, meaning the nationwide total could run into the millions.
French prosecutors have opened a specific cyber-crime investigation into the incident, which the Paris prosecutor's office called a "large-scale cyber-attack affecting the refrigerators of several major food retail chains across France".
European Food Commissioner Christophe Hansen condemned the hack in a post on X and added: "Food security requires more attention at all levels. Because the weaponisation of food has become a reality."
In a post on X, Coopérative chief executive Dominique Schelcher said staff were "fully mobilised, in co-ordination with refrigeration specialists, to restore the situation as quickly as possible".
He called for an investigation into the hack and said targeting equipment essential to the French food supply was "unacceptable".
Have you been affected by this cyber attack? Share your experience.
Get in touch
Have you been affected by this cyber attack? Share your experience.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crq5nzxv9q4yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-12T18:31:32+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cfaf/live/a3ced500-c63a-11f1-b99d-0127a94fa1d0.jpg",
    readTime: 10,
  },
  {
    id: "rep-ilhan-omar-s-home-raided-in-federal-180fe649",
    title: "Rep. Ilhan Omar’s home raided in federal criminal investigation",
    titleJa: "Rep. Ilhan Omar’s home raided in federal criminal investigation",
    summaryJa: "The Minnesota Democrat, a Muslim who was born in Somalia, has been targeted for criticism in the past by President Donald Trump.",
    bodyOriginal: `Federal authorities on Monday morning raided the Washington, D.C.-area home of Rep. Ilhan Omar, a Minnesota Democrat, as part of a criminal fraud investigation into her immigration paperwork filled out by her father, Fox News reported, citing a person familiar with the situation.
Homeland Security Investigations, a division of the Department of Homeland Security, conducted the raid, Fox News reported. The Department of Justice later confirmed the raid after being asked about it by CNBC. The Department of Homeland Security declined to comment.
A person familiar with the situation, who spoke on condition of anonymity to discuss the non-public investigation, told CNBC that the investigation into Omar is complex and has been going on for years.
Omar, 44, was born in Somalia and brought to the United States as a child. She became a U.S. citizen in 2000 at the age of 17. She was elected to Congress in November 2018 to represent Minnesota's 5th District, which includes all of Minneapolis.
She and Rep. Rashida Tlaib, D-Mich., became the first two Muslim women elected to Congress.
Omar has been a target of criticism by President Donald Trump, and heckled Trump during his State of the Union address to Congress on Feb. 24, which came on the heels of aggressive immigration enforcement actions in Minneapolis by federal authorities.
The Department of Justice, in a statement to CNBC when asked about the raid, said, "Today in the Washington, D.C., area, Homeland Security Investigations executed a judicially authorized search warrant secured by the Department of Justice."
"This enforcement action is part of an ongoing federal investigation," the statement said.
The raid comes less than a month before November's midterm elections. Omar is seeking another term as a representative for Minnesota's 5th District.
CNBC has requested comment from Omar's office.
The DOJ, for years, has had a policy regarding the announcement and initiation of federal investigations and prosecutions close to elections. The policy discourages beginning an investigation, taking investigative steps, bringing criminal charges, or making public statements for the purpose of affecting an election or to give a candidate an advantage or disadvantage.
A person familiar with the raid on Omar's home told CNBC on Monday that the DOJ does not consider that action to violate the policy because the raid was not meant to be public.
Republican John Nagel is running against Omar in a race the Cook Political Report with Amy Walter rates "solid Democrat." The general election is just over three weeks away on Nov. 3.`,
    bodyJa: `Federal authorities on Monday morning raided the Washington, D.C.-area home of Rep. Ilhan Omar, a Minnesota Democrat, as part of a criminal fraud investigation into her immigration paperwork filled out by her father, Fox News reported, citing a person familiar with the situation.
Homeland Security Investigations, a division of the Department of Homeland Security, conducted the raid, Fox News reported. The Department of Justice later confirmed the raid after being asked about it by CNBC. The Department of Homeland Security declined to comment.
A person familiar with the situation, who spoke on condition of anonymity to discuss the non-public investigation, told CNBC that the investigation into Omar is complex and has been going on for years.
Omar, 44, was born in Somalia and brought to the United States as a child. She became a U.S. citizen in 2000 at the age of 17. She was elected to Congress in November 2018 to represent Minnesota's 5th District, which includes all of Minneapolis.
She and Rep. Rashida Tlaib, D-Mich., became the first two Muslim women elected to Congress.
Omar has been a target of criticism by President Donald Trump, and heckled Trump during his State of the Union address to Congress on Feb. 24, which came on the heels of aggressive immigration enforcement actions in Minneapolis by federal authorities.
The Department of Justice, in a statement to CNBC when asked about the raid, said, "Today in the Washington, D.C., area, Homeland Security Investigations executed a judicially authorized search warrant secured by the Department of Justice."
"This enforcement action is part of an ongoing federal investigation," the statement said.
The raid comes less than a month before November's midterm elections. Omar is seeking another term as a representative for Minnesota's 5th District.
CNBC has requested comment from Omar's office.
The DOJ, for years, has had a policy regarding the announcement and initiation of federal investigations and prosecutions close to elections. The policy discourages beginning an investigation, taking investigative steps, bringing criminal charges, or making public statements for the purpose of affecting an election or to give a candidate an advantage or disadvantage.
A person familiar with the raid on Omar's home told CNBC on Monday that the DOJ does not consider that action to violate the policy because the raid was not meant to be public.
Republican John Nagel is running against Omar in a race the Cook Political Report with Amy Walter rates "solid Democrat." The general election is just over three weeks away on Nov. 3.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/ilhan-omar-home-raided-dhs-immigration-investigation.html",
    publishedAt: "2026-10-12T15:06:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "micron-makes-a-statement-with-the-latest-8d354c29",
    title: "Micron makes a statement with the latest clue about its cash windfall",
    titleJa: "Micron makes a statement with the latest clue about its cash windfall",
    summaryJa: "A new disclosure about Micron’s buyback plans appears meant to show shareholders that Micron is more generous with cash than one of its key rivals, an analyst said.",
    bodyOriginal: `A new disclosure about Micron’s buyback plans appears meant to show shareholders that Micron is more generous with cash than one of its key rivals, an analyst said.`,
    bodyJa: `A new disclosure about Micron’s buyback plans appears meant to show shareholders that Micron is more generous with cash than one of its key rivals, an analyst said.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/micron-makes-a-statement-with-the-latest-clue-about-its-cash-windfall-c9e33f7d?mod=mw_rss_topstories",
    publishedAt: "2026-10-12T15:06:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-54177591",
    readTime: 2,
  },
  {
    id: "ai-minister-warns-likely-uk-s-cyber-defe-23d70b19",
    title: "AI minister warns 'likely' UK's cyber defences will be breached",
    titleJa: "AI minister warns 'likely' UK's cyber defences will be breached",
    summaryJa: "Kanishka Narayan said the government will use advanced AI to strengthen the UK against cyber attacks.",
    bodyOriginal: `AI minister warns 'likely' UK's cyber defences will be breached
- Published
The UK's AI minister has warned it is "likely, if not inevitable" the country's cyber defences will at some point be breached.
Speaking at a press conference, Kanishka Narayan pointed to an incident of a rogue OpenAI agent hacking an Australian government website in June.
He said while no medical records are known to have been accessed in the attack, the incident should still "concern us".
Narayan said the government plans to put advanced AI to work to combat the threat, as he set out how the government plans to prepare for any serious future incidents.
The minister said the move would build on two existing pilots which have helped identify and fix over 1,000 vulnerabilities across government systems.
He said his message to the largest companies behind the world's most powerful AI systems was: "Listen when your scientists warn of serious dangers. Investigate unexpected behaviour. And if you cannot adequately control the risks, do not release the system."
In his speech, Narayan also confirmed scientists at the UK's AI watchdog, the AI Security Institute (AISI), were conducting "rigorous evaluations" of the latest generation of advanced AI models to "identify risks early" and "to test robust safeguards to help keep people safe".
AI testing
AISI began evaluating risks of the latest frontier AI models, prior to their public release, shortly after it was established in November 2023.
But it was reported in September, external that the White House had asked some leading US labs not to share their models with the research organisation until its own tests were completed.
The move was viewed at the time as a blow to AISI - which has been championed by the UK government and its partners for advancing open, constructive and collaborative AI testing.
Microsoft president Brad Smith recently told the BBC the institute had helped cement the UK as the country best-placed to drive forward global regulation.
On Monday, Narayan said that in the last few weeks, the government had worked with the US "to retain access for Britain's AISI to the most powerful AI models before they are released".
He also said the UK would also look into creating stronger protections through the Cyber Security and Resilience bill, particularly at how serious AI incidents can be identified and reported.
Regulation
The announcement follows a series of incidents involving AI agents across major firms such as OpenAI and Anthropic acting outside human control and hacking into external systems.
On 9 September, Evan Hubinger, a top safety researcher at Anthropic, warned in a post on X that AI is advancing so quickly he believed there is a greater than 10% chance it "could kill all humans" within the next decade.
The bosses of the US-based AI giants such as Anthropic, OpenAI and Google DeepMind have all backed the idea of an AI development slowdown.
However, there are currently no global safety rules in place to regulate the companies and their technology. President Trump has called for the sector to regulate itself so that US firms do not lose out to Chinese rivals.
Speaking to the BBC following the announcement, Narayan said the UK needed "to be confident... as a country" when questioned as to how the government can make foreign AI firms abide by UK rules.
"We have the capability, we have the trust, and we have a government that is right on the side of the British public in making sure we don't just have laws but the ability to enforce those laws," he said.
"What we are focused on is delivering the right outcome for the British public, where the law was the answer."
On the question of whether the UK should have its own sovereign AI frontier model, the minister said he was "focused" on securing British sovereignty, which meant "placing the right set of investments".
"It's British chips being made here. It's British models outside of just language, looking at things like drug discovery, materials discovery, computer vision and its areas of adoption, including AI, security and cyber-security," he said.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published7 hours ago
- Published3 days ago
- Published29 September`,
    bodyJa: `AI minister warns 'likely' UK's cyber defences will be breached
- Published
The UK's AI minister has warned it is "likely, if not inevitable" the country's cyber defences will at some point be breached.
Speaking at a press conference, Kanishka Narayan pointed to an incident of a rogue OpenAI agent hacking an Australian government website in June.
He said while no medical records are known to have been accessed in the attack, the incident should still "concern us".
Narayan said the government plans to put advanced AI to work to combat the threat, as he set out how the government plans to prepare for any serious future incidents.
The minister said the move would build on two existing pilots which have helped identify and fix over 1,000 vulnerabilities across government systems.
He said his message to the largest companies behind the world's most powerful AI systems was: "Listen when your scientists warn of serious dangers. Investigate unexpected behaviour. And if you cannot adequately control the risks, do not release the system."
In his speech, Narayan also confirmed scientists at the UK's AI watchdog, the AI Security Institute (AISI), were conducting "rigorous evaluations" of the latest generation of advanced AI models to "identify risks early" and "to test robust safeguards to help keep people safe".
AI testing
AISI began evaluating risks of the latest frontier AI models, prior to their public release, shortly after it was established in November 2023.
But it was reported in September, external that the White House had asked some leading US labs not to share their models with the research organisation until its own tests were completed.
The move was viewed at the time as a blow to AISI - which has been championed by the UK government and its partners for advancing open, constructive and collaborative AI testing.
Microsoft president Brad Smith recently told the BBC the institute had helped cement the UK as the country best-placed to drive forward global regulation.
On Monday, Narayan said that in the last few weeks, the government had worked with the US "to retain access for Britain's AISI to the most powerful AI models before they are released".
He also said the UK would also look into creating stronger protections through the Cyber Security and Resilience bill, particularly at how serious AI incidents can be identified and reported.
Regulation
The announcement follows a series of incidents involving AI agents across major firms such as OpenAI and Anthropic acting outside human control and hacking into external systems.
On 9 September, Evan Hubinger, a top safety researcher at Anthropic, warned in a post on X that AI is advancing so quickly he believed there is a greater than 10% chance it "could kill all humans" within the next decade.
The bosses of the US-based AI giants such as Anthropic, OpenAI and Google DeepMind have all backed the idea of an AI development slowdown.
However, there are currently no global safety rules in place to regulate the companies and their technology. President Trump has called for the sector to regulate itself so that US firms do not lose out to Chinese rivals.
Speaking to the BBC following the announcement, Narayan said the UK needed "to be confident... as a country" when questioned as to how the government can make foreign AI firms abide by UK rules.
"We have the capability, we have the trust, and we have a government that is right on the side of the British public in making sure we don't just have laws but the ability to enforce those laws," he said.
"What we are focused on is delivering the right outcome for the British public, where the law was the answer."
On the question of whether the UK should have its own sovereign AI frontier model, the minister said he was "focused" on securing British sovereignty, which meant "placing the right set of investments".
"It's British chips being made here. It's British models outside of just language, looking at things like drug discovery, materials discovery, computer vision and its areas of adoption, including AI, security and cyber-security," he said.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published7 hours ago
- Published3 days ago
- Published29 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr78pe09y05xo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-12T15:03:42+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/dd68/live/6a2ab470-c646-11f1-bc2e-018d645d8d21.jpg",
    readTime: 10,
  },
  {
    id: "faa-warns-u-s-airlines-of-safety-risks-o-652f8508",
    title: "FAA warns U.S. airlines of safety risks over Saudi Arabia after attacks",
    titleJa: "FAA warns U.S. airlines of safety risks over Saudi Arabia after attacks",
    summaryJa: "The FAA warned U.S. airlines about flight risks over Saudi Arabia as Riyadh airport attacks disrupt travel and Delta weighs an Oct. 23 launch.",
    bodyOriginal: `The Federal Aviation Administration told U.S. airlines to exercise caution when flying in or around Saudi Arabia after deadly attacks claimed by Yemen's Iran-backed Houthis, which have shut down the airport in the Saudi capital.
King Khalid International Airport in Riyadh, Saudi Arabia, remains closed as of Monday after strikes that started last week. The attacks escalated Saturday, when a projectile struck a passenger terminal at the airport, officials said, killing at least 12 people and wounding more than 300.
Airlines suspended flights to the airport, some for the rest of the week.
The U.S., Australia and other countries advised citizens against travel to the region.
The FAA late Sunday said pilots should "exercise caution" in or around Saudi Arabia "due to safety-of-flight risks associated with ongoing military activities" and navigation systems. It said the threats could be a potential risk "to aircraft at all altitudes." The FAA's warning is in effect until Dec. 10.
Most U.S. airlines don't fly to Saudi Arabia.
Delta Air Lines had been scheduled to launch its first nonstop flight from Atlanta to Riyadh on Oct. 23. But after the FAA's warning, the carrier on Monday morning said it would delay that service until March.`,
    bodyJa: `The Federal Aviation Administration told U.S. airlines to exercise caution when flying in or around Saudi Arabia after deadly attacks claimed by Yemen's Iran-backed Houthis, which have shut down the airport in the Saudi capital.
King Khalid International Airport in Riyadh, Saudi Arabia, remains closed as of Monday after strikes that started last week. The attacks escalated Saturday, when a projectile struck a passenger terminal at the airport, officials said, killing at least 12 people and wounding more than 300.
Airlines suspended flights to the airport, some for the rest of the week.
The U.S., Australia and other countries advised citizens against travel to the region.
The FAA late Sunday said pilots should "exercise caution" in or around Saudi Arabia "due to safety-of-flight risks associated with ongoing military activities" and navigation systems. It said the threats could be a potential risk "to aircraft at all altitudes." The FAA's warning is in effect until Dec. 10.
Most U.S. airlines don't fly to Saudi Arabia.
Delta Air Lines had been scheduled to launch its first nonstop flight from Atlanta to Riyadh on Oct. 23. But after the FAA's warning, the carrier on Monday morning said it would delay that service until March.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/faa-saudi-arabia-flight-risks.html",
    publishedAt: "2026-10-12T14:31:32+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "starbucks-says-it-is-not-buying-chipotle-f9061d31",
    title: "Starbucks says it is not buying Chipotle after takeover speculation",
    titleJa: "Starbucks says it is not buying Chipotle after takeover speculation",
    summaryJa: "Starbucks on Monday denied it is considering acquiring Chipotle Mexican Grill in what would be the biggest-ever restaurant takeover.\"Starbucks is not buying Chipotle,\" a Starbucks spokesperson told CNBC's Jim Cramer.",
    bodyOriginal: `Starbucks on Monday denied it is considering acquiring Chipotle Mexican Grill in what would be the biggest-ever restaurant takeover.
"Starbucks is not buying Chipotle," a Starbucks spokesperson told CNBC's Jim Cramer.
Chipotle's stock was down nearly 4% in morning trading Monday following the statement, while Starbucks shares were 1% higher.
The coffee giant's denial comes after days of rumors about a potential megadeal between the two restaurant companies.
On Thursday, the Financial Times reported that Starbucks had been working with advisors on a Chipotle takeover proposal in recent months. The newspaper cited people familiar with the matter.
Earlier in October, Semafor reported that Chipotle had hired advisors to defend against activist investors or an unwanted takeover bid. The fast-casual chain is trying to recover from a rocky 2025, when traffic to its restaurants fell. Chipotle shares are down about 20% over the last year, making it a cheaper target.
The deal rumors sent shares of Chipotle higher, while Starbucks stock fell on the reports.
Chipotle investors were looking forward to a potential reunion with Brian Niccol, who previously led Chipotle and is now CEO of Starbucks. But Starbucks shareholders were largely concerned about an expensive distraction while the coffee chain is in the middle of its own turnaround.`,
    bodyJa: `Starbucks on Monday denied it is considering acquiring Chipotle Mexican Grill in what would be the biggest-ever restaurant takeover.
"Starbucks is not buying Chipotle," a Starbucks spokesperson told CNBC's Jim Cramer.
Chipotle's stock was down nearly 4% in morning trading Monday following the statement, while Starbucks shares were 1% higher.
The coffee giant's denial comes after days of rumors about a potential megadeal between the two restaurant companies.
On Thursday, the Financial Times reported that Starbucks had been working with advisors on a Chipotle takeover proposal in recent months. The newspaper cited people familiar with the matter.
Earlier in October, Semafor reported that Chipotle had hired advisors to defend against activist investors or an unwanted takeover bid. The fast-casual chain is trying to recover from a rocky 2025, when traffic to its restaurants fell. Chipotle shares are down about 20% over the last year, making it a cheaper target.
The deal rumors sent shares of Chipotle higher, while Starbucks stock fell on the reports.
Chipotle investors were looking forward to a potential reunion with Brian Niccol, who previously led Chipotle and is now CEO of Starbucks. But Starbucks shareholders were largely concerned about an expensive distraction while the coffee chain is in the middle of its own turnaround.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/starbucks-denies-chipotle-takeover.html",
    publishedAt: "2026-10-12T14:22:48+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "zelenskyy-accuses-russia-of-violating-tr-05bb46dd",
    title: "Zelenskyy accuses Russia of violating Trump’s energy ceasefire as drone attacks continue",
    titleJa: "Zelenskyy accuses Russia of violating Trump’s energy ceasefire as drone attacks continue",
    summaryJa: "If Russia doesn't agree to Trump's energy ceasefire, Ukraine will respond, Zelenskyy said Monday morning.",
    bodyOriginal: `Ukrainian President Volodymyr Zelenskyy welcomed the U.S.-brokered "energy ceasefire" but warned Monday that Kyiv would retaliate if Moscow failed to comply, as fresh Russian drone attacks targeted Ukraine's energy infrastructure just hours after President Donald Trump announced the agreement.
"It is increasingly evident that Russia is unwilling to accept an energy ceasefire proposed by the United States and intends to continue its terrorist air attacks against our people and communities," Zelenskyy said Monday in a post on X. "Today alone, the Russians have attacked 6 energy facilities in Ukraine."
Speaking earlier in the day via video link at the Warsaw Security Forum, he said Ukraine was prepared to sign guarantees if the U.S. required them to build trust, stressing the importance of a shared understanding of the situation. "If Russia does not agree to an energy ceasefire, we will respond," he cautioned.
"All morning today, more and more Russian jet-powered shaheds have continued to enter our skies over Kyiv and other Ukrainian cities. We shoot down many of them, and if we didn't, there would clearly be even more damage to our energy infrastructure," he said.
"For now, this is Putin's answer to Trump."
It comes after Zelenskyy lamented Russia's continued drone attacks on Ukrainian energy targets on Sunday, including an attack on a power plant in Kharkiv in Eastern Ukraine close to the Russian border.
Overnight, Russia attacked state-owned Ukrainian energy company Naftogaz's gas production infrastructure in Kharkiv region, the company said. No one was injured in the strike by the jet-powered drone, which caused a fire at the facility, it added.
Naftogaz's acting CEO, Sergii Fedorenko, said the attack had damaged critical equipment and that employees were working to repair damage as quickly as possible and prevent any risks to operations of the energy system.
Earlier on Sunday, Trump announced an "energy ceasefire" to lower fuel costs ahead of the U.S. midterm elections.
"Effective immediately, there is an ENERGY CEASEFIRE in the War between Russia and Ukraine. Both parties have agreed. Do not break it!" Trump wrote on social media on Sunday.
The Kremlin said on Monday that contacts are ongoing on an energy ceasefire and that it would provide more information in due course, Reuters reported. It declined to comment on whether any deal would be limited to oil refineries. Russia's presidential office didn't immediately respond to a CNBC request for further information.
Since Russia's full-scale invasion of Ukraine in 2022, ceasefires have repeatedly proved fragile. Trump has tried several times to broker an end to the war, but none have succeeded so far.
"We've been here many times before over the last four and a half years, so I don't think we should build our hopes up too much," former IEA head of oil Neil Atkinson told "Squawk Box Europe" on Monday.
Deal with Russia
On Friday, Trump said he had made a deal with President Vladimir Putin in which Russia would supply more than 4 million tons of diesel to global markets.
"The reality of it is that the volumes talked about are very small," said Atkinson, who is also a visiting fellow at the National Center for Energy Analytics. "The deal that's been agreed is not really market moving in any significant way."
According to Trump, Russia will supply more than 300,000 tons of diesel immediately, followed by 500,000 tons in November, and then another 4 million tons of diesel based on the condition of Russia's refineries.
EU top diplomat Kaja Kallas welcomed an energy ceasefire but said, "This is not the time to ease pressure on Russia."
"Suspending sanctions on Russian diesel provides Moscow with more revenues to wage war," she said in a statement Saturday.
EU's foreign ministers are due to meet in Luxembourg on Monday morning to discuss the Russia-Ukraine war, among other things. The EU will adopt nearly 1,600 new sanctions listings targeting Russia's military-industrial complex, in the single largest expansion of our sanctions list since Russia started its war, Kallas said ahead of the meeting.
Oil prices turned positive after Zelenskyy's Monday comments, after trading about 1.5% lower earlier in the session.
Brent crude futures with December delivery were up 2% to $106.82 a barrel at 10:15 a.m. ET, while West Texas Intermediate futures for November ticked 1.9% higher to $93.60 per barrel.`,
    bodyJa: `Ukrainian President Volodymyr Zelenskyy welcomed the U.S.-brokered "energy ceasefire" but warned Monday that Kyiv would retaliate if Moscow failed to comply, as fresh Russian drone attacks targeted Ukraine's energy infrastructure just hours after President Donald Trump announced the agreement.
"It is increasingly evident that Russia is unwilling to accept an energy ceasefire proposed by the United States and intends to continue its terrorist air attacks against our people and communities," Zelenskyy said Monday in a post on X. "Today alone, the Russians have attacked 6 energy facilities in Ukraine."
Speaking earlier in the day via video link at the Warsaw Security Forum, he said Ukraine was prepared to sign guarantees if the U.S. required them to build trust, stressing the importance of a shared understanding of the situation. "If Russia does not agree to an energy ceasefire, we will respond," he cautioned.
"All morning today, more and more Russian jet-powered shaheds have continued to enter our skies over Kyiv and other Ukrainian cities. We shoot down many of them, and if we didn't, there would clearly be even more damage to our energy infrastructure," he said.
"For now, this is Putin's answer to Trump."
It comes after Zelenskyy lamented Russia's continued drone attacks on Ukrainian energy targets on Sunday, including an attack on a power plant in Kharkiv in Eastern Ukraine close to the Russian border.
Overnight, Russia attacked state-owned Ukrainian energy company Naftogaz's gas production infrastructure in Kharkiv region, the company said. No one was injured in the strike by the jet-powered drone, which caused a fire at the facility, it added.
Naftogaz's acting CEO, Sergii Fedorenko, said the attack had damaged critical equipment and that employees were working to repair damage as quickly as possible and prevent any risks to operations of the energy system.
Earlier on Sunday, Trump announced an "energy ceasefire" to lower fuel costs ahead of the U.S. midterm elections.
"Effective immediately, there is an ENERGY CEASEFIRE in the War between Russia and Ukraine. Both parties have agreed. Do not break it!" Trump wrote on social media on Sunday.
The Kremlin said on Monday that contacts are ongoing on an energy ceasefire and that it would provide more information in due course, Reuters reported. It declined to comment on whether any deal would be limited to oil refineries. Russia's presidential office didn't immediately respond to a CNBC request for further information.
Since Russia's full-scale invasion of Ukraine in 2022, ceasefires have repeatedly proved fragile. Trump has tried several times to broker an end to the war, but none have succeeded so far.
"We've been here many times before over the last four and a half years, so I don't think we should build our hopes up too much," former IEA head of oil Neil Atkinson told "Squawk Box Europe" on Monday.
Deal with Russia
On Friday, Trump said he had made a deal with President Vladimir Putin in which Russia would supply more than 4 million tons of diesel to global markets.
"The reality of it is that the volumes talked about are very small," said Atkinson, who is also a visiting fellow at the National Center for Energy Analytics. "The deal that's been agreed is not really market moving in any significant way."
According to Trump, Russia will supply more than 300,000 tons of diesel immediately, followed by 500,000 tons in November, and then another 4 million tons of diesel based on the condition of Russia's refineries.
EU top diplomat Kaja Kallas welcomed an energy ceasefire but said, "This is not the time to ease pressure on Russia."
"Suspending sanctions on Russian diesel provides Moscow with more revenues to wage war," she said in a statement Saturday.
EU's foreign ministers are due to meet in Luxembourg on Monday morning to discuss the Russia-Ukraine war, among other things. The EU will adopt nearly 1,600 new sanctions listings targeting Russia's military-industrial complex, in the single largest expansion of our sanctions list since Russia started its war, Kallas said ahead of the meeting.
Oil prices turned positive after Zelenskyy's Monday comments, after trading about 1.5% lower earlier in the session.
Brent crude futures with December delivery were up 2% to $106.82 a barrel at 10:15 a.m. ET, while West Texas Intermediate futures for November ticked 1.9% higher to $93.60 per barrel.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/russia-ukraine-energy-ceasefire-trump.html",
    publishedAt: "2026-10-12T14:21:08+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "microsoft-to-rely-more-on-homegrown-ai-c-6791dcf2",
    title: "Microsoft to rely more on homegrown AI chips, reducing dependence on Nvidia",
    titleJa: "Microsoft to rely more on homegrown AI chips, reducing dependence on Nvidia",
    summaryJa: "By increasingly counting on its own chips, Microsoft stands to expand margins and bolster its AI stack.",
    bodyOriginal: `Microsoft will ramp up use of its homegrown artificial intelligence chips after years of reliance on Nvidia's graphics processing units, as the software giant attempts to bolster its AI stack.
Starting with its third-generation Maia AI accelerator, unveiled on Monday, Microsoft said it will mainly rely on its own silicon to handle incoming requests.
Microsoft's greatest strength in AI has been its Azure cloud, which runs a series of models for clients. Its Microsoft 365 Copilot and GitHub Copilot offer AI-powered services to software engineers and other office workers. And the company develops in-house models, though they've yet to make a big splash in a market dominated by OpenAI, Anthropic and Google.
The emerging opportunity in chips stems from unrelenting demand for advanced processors and a desire in the market for choice. Nvidia's GPUs have been the standard for AI workloads and models, and they fill Microsoft's existing data centers, while also serving to train models from OpenAI and Anthropic.
But as demand keeps growing, the model leaders have embraced a variety of silicon from companies including Amazon, Advanced Micro Devices, Cerebras, Google and, in recent months, Microsoft.
For general-purpose use, Microsoft already taps its own central processing units as well as silicon from Intel and AMD. Finance chief Amy Hood said at a Goldman Sachs conference last month that use of its own chips has helped with "margin improvement over the course of a decade."
Microsoft introduced its inaugural AI chip, the Maia 100, in 2023. It touted the Maia 200 this past January, and CEO Satya Nadella told analysts in July that Maia 200 "delivers 30% better performance per dollar than the latest generation hardware in our fleet" and said it was handling OpenAI models.
Production of the Maia 300 starts in 2027. Microsoft is targeting multi-gigawatt deployments of chips in the Maia family, according to a blog post from Executive Vice President Scott Guthrie. But Alistair Speirs, a general manager, declined to provide a timeline.
"We reserve a little bit of optionality there, because this is an industry that's changing very fast, and we want to deploy the right silicon for the right models that we're using at the right time as well," Speirs said.
Microsoft expects to pack 96 Maia 300 chips into each data center rack, double the number for the Maia 200. The new version can run through up to seven times more AI tokens per rack, with 40% more tokens per megawatt when compared with GPUs.
"We need new architectures that will give us essentially better performance, better use of the power that we have," Speirs said. "You can think of power translating pretty directly into operational cost for something like a data center as well."
Parts of Microsoft 365 Copilot should speed up with Maia 300, said Jim Kleewein, a technical fellow at the company.
In a note distributed to clients on Wednesday, Evercore ISI analysts estimated that Maia will represent about 10% of Microsoft's spending on AI chips by the first quarter of 2027. The analysts recommend buying Microsoft shares.
Nvidia will still be a big part of the equation. CEO Jensen Huang spoke at an event last week where Microsoft announced a Surface laptop containing an Nvidia processor. And when it comes to training models, Microsoft partners with Nvidia and AMD, Speirs said.
Unlike Google's tensor processing units or Amazon's Inferentia and Trainium, Microsoft's accelerators can't be rented by the hour to other companies.
"Nobody has tested them outside of Microsoft yet," said Patrick Moorhead, CEO of advisory firm Moor Insights and Strategy.
WATCH: Melissa Otto: Nvidia is the bellwether of the AI trade`,
    bodyJa: `Microsoft will ramp up use of its homegrown artificial intelligence chips after years of reliance on Nvidia's graphics processing units, as the software giant attempts to bolster its AI stack.
Starting with its third-generation Maia AI accelerator, unveiled on Monday, Microsoft said it will mainly rely on its own silicon to handle incoming requests.
Microsoft's greatest strength in AI has been its Azure cloud, which runs a series of models for clients. Its Microsoft 365 Copilot and GitHub Copilot offer AI-powered services to software engineers and other office workers. And the company develops in-house models, though they've yet to make a big splash in a market dominated by OpenAI, Anthropic and Google.
The emerging opportunity in chips stems from unrelenting demand for advanced processors and a desire in the market for choice. Nvidia's GPUs have been the standard for AI workloads and models, and they fill Microsoft's existing data centers, while also serving to train models from OpenAI and Anthropic.
But as demand keeps growing, the model leaders have embraced a variety of silicon from companies including Amazon, Advanced Micro Devices, Cerebras, Google and, in recent months, Microsoft.
For general-purpose use, Microsoft already taps its own central processing units as well as silicon from Intel and AMD. Finance chief Amy Hood said at a Goldman Sachs conference last month that use of its own chips has helped with "margin improvement over the course of a decade."
Microsoft introduced its inaugural AI chip, the Maia 100, in 2023. It touted the Maia 200 this past January, and CEO Satya Nadella told analysts in July that Maia 200 "delivers 30% better performance per dollar than the latest generation hardware in our fleet" and said it was handling OpenAI models.
Production of the Maia 300 starts in 2027. Microsoft is targeting multi-gigawatt deployments of chips in the Maia family, according to a blog post from Executive Vice President Scott Guthrie. But Alistair Speirs, a general manager, declined to provide a timeline.
"We reserve a little bit of optionality there, because this is an industry that's changing very fast, and we want to deploy the right silicon for the right models that we're using at the right time as well," Speirs said.
Microsoft expects to pack 96 Maia 300 chips into each data center rack, double the number for the Maia 200. The new version can run through up to seven times more AI tokens per rack, with 40% more tokens per megawatt when compared with GPUs.
"We need new architectures that will give us essentially better performance, better use of the power that we have," Speirs said. "You can think of power translating pretty directly into operational cost for something like a data center as well."
Parts of Microsoft 365 Copilot should speed up with Maia 300, said Jim Kleewein, a technical fellow at the company.
In a note distributed to clients on Wednesday, Evercore ISI analysts estimated that Maia will represent about 10% of Microsoft's spending on AI chips by the first quarter of 2027. The analysts recommend buying Microsoft shares.
Nvidia will still be a big part of the equation. CEO Jensen Huang spoke at an event last week where Microsoft announced a Surface laptop containing an Nvidia processor. And when it comes to training models, Microsoft partners with Nvidia and AMD, Speirs said.
Unlike Google's tensor processing units or Amazon's Inferentia and Trainium, Microsoft's accelerators can't be rented by the hour to other companies.
"Nobody has tested them outside of Microsoft yet," said Patrick Moorhead, CEO of advisory firm Moor Insights and Strategy.
WATCH: Melissa Otto: Nvidia is the bellwether of the AI trade`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/microsoft-will-mainly-use-its-maia-chips-for-ai-inference.html",
    publishedAt: "2026-10-12T14:04:16+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "banks-are-set-to-report-this-week-here-s-6ebb1b8a",
    title: "Banks are set to report this week. Here's what the options market expects",
    titleJa: "Banks are set to report this week. Here's what the options market expects",
    summaryJa: "Despite being flat on the year, the options market is pricing in some big financial sector moves as investor weigh the impact of higher rates.",
    bodyOriginal: `Bank earnings kick off this week with no fewer than seven of the biggest names set to report. With the S&P 500 near all-time highs, the results could provide a significant market catalyst.
Financials are the third-worst performing S&P 500 sector in 2026. Despite being flat on the year, the options market is pricing in some big moves as investor weigh the impact of higher rates and stretched consumer.
Here's what the options market sees, according to the latest Cboe LiveVol data.
Goldman Sachs - Tuesday, Oct. 13
The options market is pricing in a 2.84% move for Goldman Sachs after it reports earnings. Across the last eight reported quarters, the stock has moved just about 2% on average. Only three of those quarters have seen a negative stock reaction, with the most recent being a 1.87% move lower in April.
The stock rallied a whopping 9% after July's Q2 report, which is the largest post-earnings move since January, 2019.
JPMorgan - Tuesday, Oct. 13
Options are pricing in a move similar to Goldman Sachs for JPMorgan, with a 2.5% implied move inline with its past eight quarter average of 2.22%. Unlike Goldman, JPMorgan's recent reports haven't been met with much positivity. The stock's 2.5% move higher following July's report was its first positive reaction since April, 2025, when it jumped 4% higher.
Citigroup - Tuesday, Oct. 13
Citigroup heads into Tuesday's report up 11% on the year, best performance of any of this week's reporting names. Options are pricing in a tame 3% stock reaction in either direction, well below the 3.8% it has averaged across the last eight reported quarters. There is cause for pause, though. Last quarter, the stock surprised to the downside to the tune of 5.3% against a 3.5% implied move.
Wells Fargo - Tuesday, Oct. 13
Wells Fargo rounds out Tuesday's big bank earnings as a name with a lot to prove. Not only is the stock down 10% this year, but it has also flunked its last three earnings reports, including a 5% move lower in April. This time around, options are implying a 3.5% move in either direction. That's well below its 5.6% average across the last eight quarters.
Bank of America - Wednesday, Oct. 14
The options market thinks Bank of America might be able to sneak into positive territory on the year after Wednesday's report. A move higher would be its third-straight post-earnings win. The current implied stock move is 2.9% in either direction, meaningfully above the 1.8% swing it has averaged across its last eight reported quarters.
Morgan Stanley - Wednesday, Oct. 14
This company has rarely put a foot wrong in its recent earnings history. The stock has only moved lower once in its last eight reported quarters, a 1.3% move lower in July, 2025. This time around, options are implying a 3% move in either direction, compared to its eight-quarter average of 4.3%. A move higher on Wednesday would make it five straight for Morgan Stanley.
BlackRock - Wednesday, Oct. 14
A move higher would also be five in a row for BlackRock, which jumped nearly 7% following July's report. Its last negative reaction came last July – a 6% tumble, This time, options are implying a 3.3% move in either direction. That's tame compared to its 4.4% average across the last eight quarters.`,
    bodyJa: `Bank earnings kick off this week with no fewer than seven of the biggest names set to report. With the S&P 500 near all-time highs, the results could provide a significant market catalyst.
Financials are the third-worst performing S&P 500 sector in 2026. Despite being flat on the year, the options market is pricing in some big moves as investor weigh the impact of higher rates and stretched consumer.
Here's what the options market sees, according to the latest Cboe LiveVol data.
Goldman Sachs - Tuesday, Oct. 13
The options market is pricing in a 2.84% move for Goldman Sachs after it reports earnings. Across the last eight reported quarters, the stock has moved just about 2% on average. Only three of those quarters have seen a negative stock reaction, with the most recent being a 1.87% move lower in April.
The stock rallied a whopping 9% after July's Q2 report, which is the largest post-earnings move since January, 2019.
JPMorgan - Tuesday, Oct. 13
Options are pricing in a move similar to Goldman Sachs for JPMorgan, with a 2.5% implied move inline with its past eight quarter average of 2.22%. Unlike Goldman, JPMorgan's recent reports haven't been met with much positivity. The stock's 2.5% move higher following July's report was its first positive reaction since April, 2025, when it jumped 4% higher.
Citigroup - Tuesday, Oct. 13
Citigroup heads into Tuesday's report up 11% on the year, best performance of any of this week's reporting names. Options are pricing in a tame 3% stock reaction in either direction, well below the 3.8% it has averaged across the last eight reported quarters. There is cause for pause, though. Last quarter, the stock surprised to the downside to the tune of 5.3% against a 3.5% implied move.
Wells Fargo - Tuesday, Oct. 13
Wells Fargo rounds out Tuesday's big bank earnings as a name with a lot to prove. Not only is the stock down 10% this year, but it has also flunked its last three earnings reports, including a 5% move lower in April. This time around, options are implying a 3.5% move in either direction. That's well below its 5.6% average across the last eight quarters.
Bank of America - Wednesday, Oct. 14
The options market thinks Bank of America might be able to sneak into positive territory on the year after Wednesday's report. A move higher would be its third-straight post-earnings win. The current implied stock move is 2.9% in either direction, meaningfully above the 1.8% swing it has averaged across its last eight reported quarters.
Morgan Stanley - Wednesday, Oct. 14
This company has rarely put a foot wrong in its recent earnings history. The stock has only moved lower once in its last eight reported quarters, a 1.3% move lower in July, 2025. This time around, options are implying a 3% move in either direction, compared to its eight-quarter average of 4.3%. A move higher on Wednesday would make it five straight for Morgan Stanley.
BlackRock - Wednesday, Oct. 14
A move higher would also be five in a row for BlackRock, which jumped nearly 7% following July's report. Its last negative reaction came last July – a 6% tumble, This time, options are implying a 3.3% move in either direction. That's tame compared to its 4.4% average across the last eight quarters.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/banks-are-set-to-report-this-week-heres-what-the-options-market-expects.html",
    publishedAt: "2026-10-12T13:27:20+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 8,
  },
  {
    id: "tiktok-ceo-sees-major-scientific-breakth-32b6fb10",
    title: "TikTok CEO sees major scientific breakthroughs from AI within three years",
    titleJa: "TikTok CEO sees major scientific breakthroughs from AI within three years",
    summaryJa: "Chew cautioned that AI's growing capabilities would require stronger safeguards, particularly as autonomous systems become more widely adopted.",
    bodyOriginal: `SINGAPORE — TikTok CEO Shou Zi Chew expects artificial intelligence to drive major scientific breakthroughs within the next three years, transforming a broad range of sectors.
"In the next two to three years, we're going to have a real scientific breakthrough: physics, biotech, chemistry, material science, because of AI. It's very, very, very possible," Chew said at the DBS Asia Future Forward Conference in Singapore on Monday.
Chew's remarks come as ByteDance, TikTok's Chinese parent, expands its artificial intelligence research beyond consumer applications. In April, the company's Seed research team unveiled Protenix-v2, an AI model focused on biomolecular structure prediction and design, with potential applications in drug discovery.
Chew said rapid advances in AI were opening up possibilities far beyond the technology's current applications, even as questions remain over how to ensure increasingly powerful systems operate within human ethical boundaries.
"If that happens, then you know the question would be: how do you align the models? How do you align the machines to be doing things that are obvious to us as human beings?" he said.
Chew highlighted the accelerating pace of technological development, particularly in scientific research, arguing that the longer-term implications of AI could be far greater than currently anticipated.
"The trend is very very clear. It's that we are only at the beginning of what artificial intelligence can probably do," he said. "And if you look at where the trend is, [where] the progress is, particularly in areas of science, it's really trending on a very steep curve at this moment in time."
Chew explained that while the technology's immediate impact could be overstated, its longer-term potential remained underappreciated. "I think in the short term we are probably overestimating it, but in the long term we are probably underestimating it," he said.
His optimism comes at a time when technology giants have been pouring billions of dollars into AI-powered scientific research. Last week, the U.S. government, Meta and Google announced their participation in a $1.8 billion initiative to develop AI models capable of predicting how cells behave, in an effort to accelerate biological research and drug discovery.
TikTok's parent company, ByteDance, is also developing its own AI models and exploring opportunities to collaborate with scientists on research.
"There's an effort to see how we can collaborate with a lot of scientists to make some progress in science as well," Chew added. "There's been some work that we've done in this area, and it is very exciting."
He described scientific discovery as one of the most promising applications of AI, even as the technology increasingly reshapes TikTok's operations, from content creation and recommendations to search and moderation.
Chew cautioned that AI's growing capabilities would require stronger safeguards, particularly as autonomous systems become more widely adopted.
"I think the cybersecurity risks are quite big," he said, warning that users may grant AI agents extensive permissions without fully understanding the potential consequences.
He pointed to the risks of allowing AI agents to make purchases autonomously, saying the systems could end up buying more than users intended in their eagerness to complete a task.
Chew also highlighted the growing cybersecurity challenges facing companies, as increasingly sophisticated AI models make it significantly cheaper for malicious actors to carry out fraudulent activities.
"So you need the right tools to now you know defend against the fast falling cost of creating problems for platforms like us, security problems for us," he emphasized.`,
    bodyJa: `SINGAPORE — TikTok CEO Shou Zi Chew expects artificial intelligence to drive major scientific breakthroughs within the next three years, transforming a broad range of sectors.
"In the next two to three years, we're going to have a real scientific breakthrough: physics, biotech, chemistry, material science, because of AI. It's very, very, very possible," Chew said at the DBS Asia Future Forward Conference in Singapore on Monday.
Chew's remarks come as ByteDance, TikTok's Chinese parent, expands its artificial intelligence research beyond consumer applications. In April, the company's Seed research team unveiled Protenix-v2, an AI model focused on biomolecular structure prediction and design, with potential applications in drug discovery.
Chew said rapid advances in AI were opening up possibilities far beyond the technology's current applications, even as questions remain over how to ensure increasingly powerful systems operate within human ethical boundaries.
"If that happens, then you know the question would be: how do you align the models? How do you align the machines to be doing things that are obvious to us as human beings?" he said.
Chew highlighted the accelerating pace of technological development, particularly in scientific research, arguing that the longer-term implications of AI could be far greater than currently anticipated.
"The trend is very very clear. It's that we are only at the beginning of what artificial intelligence can probably do," he said. "And if you look at where the trend is, [where] the progress is, particularly in areas of science, it's really trending on a very steep curve at this moment in time."
Chew explained that while the technology's immediate impact could be overstated, its longer-term potential remained underappreciated. "I think in the short term we are probably overestimating it, but in the long term we are probably underestimating it," he said.
His optimism comes at a time when technology giants have been pouring billions of dollars into AI-powered scientific research. Last week, the U.S. government, Meta and Google announced their participation in a $1.8 billion initiative to develop AI models capable of predicting how cells behave, in an effort to accelerate biological research and drug discovery.
TikTok's parent company, ByteDance, is also developing its own AI models and exploring opportunities to collaborate with scientists on research.
"There's an effort to see how we can collaborate with a lot of scientists to make some progress in science as well," Chew added. "There's been some work that we've done in this area, and it is very exciting."
He described scientific discovery as one of the most promising applications of AI, even as the technology increasingly reshapes TikTok's operations, from content creation and recommendations to search and moderation.
Chew cautioned that AI's growing capabilities would require stronger safeguards, particularly as autonomous systems become more widely adopted.
"I think the cybersecurity risks are quite big," he said, warning that users may grant AI agents extensive permissions without fully understanding the potential consequences.
He pointed to the risks of allowing AI agents to make purchases autonomously, saying the systems could end up buying more than users intended in their eagerness to complete a task.
Chew also highlighted the growing cybersecurity challenges facing companies, as increasingly sophisticated AI models make it significantly cheaper for malicious actors to carry out fraudulent activities.
"So you need the right tools to now you know defend against the fast falling cost of creating problems for platforms like us, security problems for us," he emphasized.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/tiktok-ceo-bytedance-ai-scientific-breakthroughs.html",
    publishedAt: "2026-10-12T04:24:33+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 9,
  },
  {
    id: "oil-falls-after-trump-declares-energy-ce-59a248d0",
    title: "Oil falls after Trump declares 'energy ceasefire' between Russia and Ukraine",
    titleJa: "Oil falls after Trump declares 'energy ceasefire' between Russia and Ukraine",
    summaryJa: "Ukrainian President Volodymyr Zelenskyy said in a post on social media that \"Ukraine supports the ceasefire, and it is important that Russia support it as well.\"",
    bodyOriginal: `Oil fell Monday on optimism of improved supplies after President Donald Trump said that Russia and Ukraine will not be targeting each other's energy facilities, while Iran reached out to Saudi Arabia after Houthi attacks against the kingdom.
Futures for international benchmark Brent crude for December delivery dropped 1.33% to $103.33 a barrel. U.S. West Texas Intermediate futures for November declined 1.68% to $90.31 per barrel.
"Effective immediately, there is an ENERGY CEASEFIRE in the War between Russia and Ukraine. Both parties have agreed. Do not break it!" Trump said in a social media statement Sunday stateside.
Ukrainian President Volodymyr Zelenskyy said in a post on social media that "Ukraine supports the ceasefire, and it is important that Russia support it as well."
Prospects of more Russian energy hitting markets after a deal with the U.S. have also risen after Trump said Friday that Moscow will supply more than 4 million tons of diesel to the global market under a deal he struck with Putin during a phone call.
According to the Saudi state news agency, Iran's Minister of Foreign Affairs Abbas Araghchi made a phone call to Saudi Arabia's Minister of Foreign Affairs Faisal bin Farhan bin Abdullah, to discuss about the region's recent escalation of events as well as the efforts to address it.
Al Jazeera reported Araghchi had said Iran was ready to provide assistance to help with the start of dialogue between Saudi Arabia and Yemen's Houthis.
Oil prices are expected to remain volatile in the near term as the U.S.-Iran conflict continues, while the impact of Hurricane Isaias on U.S. energy producers could also hurt supplies .
"The pressure on oil prices could remain on the upside as Hurricane Isaias strengthened to Category 3 with 120mph winds as it approached the US Gulf Coast, forcing energy producers to curtail offshore output," UOB said in a note on Monday.
"Separately, Houthi missile strikes on Saudi Arabia's Riyadh airport on Sat which killed 12 people and injured over 300, have materially elevated Middle East risk premia," UOB added.`,
    bodyJa: `Oil fell Monday on optimism of improved supplies after President Donald Trump said that Russia and Ukraine will not be targeting each other's energy facilities, while Iran reached out to Saudi Arabia after Houthi attacks against the kingdom.
Futures for international benchmark Brent crude for December delivery dropped 1.33% to $103.33 a barrel. U.S. West Texas Intermediate futures for November declined 1.68% to $90.31 per barrel.
"Effective immediately, there is an ENERGY CEASEFIRE in the War between Russia and Ukraine. Both parties have agreed. Do not break it!" Trump said in a social media statement Sunday stateside.
Ukrainian President Volodymyr Zelenskyy said in a post on social media that "Ukraine supports the ceasefire, and it is important that Russia support it as well."
Prospects of more Russian energy hitting markets after a deal with the U.S. have also risen after Trump said Friday that Moscow will supply more than 4 million tons of diesel to the global market under a deal he struck with Putin during a phone call.
According to the Saudi state news agency, Iran's Minister of Foreign Affairs Abbas Araghchi made a phone call to Saudi Arabia's Minister of Foreign Affairs Faisal bin Farhan bin Abdullah, to discuss about the region's recent escalation of events as well as the efforts to address it.
Al Jazeera reported Araghchi had said Iran was ready to provide assistance to help with the start of dialogue between Saudi Arabia and Yemen's Houthis.
Oil prices are expected to remain volatile in the near term as the U.S.-Iran conflict continues, while the impact of Hurricane Isaias on U.S. energy producers could also hurt supplies .
"The pressure on oil prices could remain on the upside as Hurricane Isaias strengthened to Category 3 with 120mph winds as it approached the US Gulf Coast, forcing energy producers to curtail offshore output," UOB said in a note on Monday.
"Separately, Houthi missile strikes on Saudi Arabia's Riyadh airport on Sat which killed 12 people and injured over 300, have materially elevated Middle East risk premia," UOB added.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/12/oil-prics-today-iran-us-saudi-arabia-crude-.html",
    publishedAt: "2026-10-12T04:21:21+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "judge-orders-trump-administration-to-imm-7996a912",
    title: "Judge orders Trump administration to immediately stop taxpayer-funded TV ads",
    titleJa: "Judge orders Trump administration to immediately stop taxpayer-funded TV ads",
    summaryJa: "The ads featuring President Trump have been criticized as government propaganda and as aimed at influencing the outcome of the midterm election.",
    bodyOriginal: `A federal judge in New York ordered the Trump administration Sunday night to immediately stop airing controversial government-funded television ads featuring President Donald Trump that critics call political propaganda intended to influence the November midterm election.
The temporary restraining order by Judge Jennifer Rochon in Manhattan federal court also bars the Department of Homeland Security from spending any more of the $20 million allocated for the ad campaign. About $19 million of that allocation has already been spent on the ads.
The order came a day after the Manhattan U.S. Attorney's Office, which is defending the Trump administration in a lawsuit challenging the ads, told Rochon that the ads would not continue being aired past Sunday.
Rochon's order, which lasts 14 days unless extended, directs the Trump administration to cancel all scheduled ads, including those due to air on Sunday evening. The ads have included the caption "Paid for by the U.S. Government" since they began being aired.
The Manhattan U.S. Attorney's Office declined to comment. The White House didn't immediately respond to a request for comment.
The money for the ads came from a large appropriation by Congress for immigration enforcement.
The coalition of plaintiffs that sued to block the ads told Rochon earlier Sunday that she should issue the TRO despite the claim by the U.S. Attorney's Office that the ads would not continue past Sunday.
"Defendants admit that appropriated funds were used to pay for political ads and do not dispute
that this use of taxpayer money is unlawful," the plaintiffs said in a court filing Sunday.
"Instead, much of Defendants' opposition boils down to a single premise: it is too late for the Court to act. That is not because Defendants have stopped airing the ads," the plaintiffs said. "Indeed, Defendants assert — boldly, given their failure to defend the ads on the merits — that ads will continue to air today, including during evening programming that will attract millions of viewers."
Rochon agreed, saying in her order that the TRO request was not rendered moot by the U.S. Attorney's statement that the ads would stop Sunday. The judge also rejected an argument by the Justice Department that the coalition lacked legal standing to challenge the ads.
Rochon said the coalition has shown it was likely to win the lawsuit, that it would suffer irreparable harm if the TRO was not granted, and that "an injunction serves the public interest."
In addition to the other actions, the judge ordered the Trump administration not to enter into any new agreement or expand existing ones for the ads. And she stayed a purchase order for the ads between U.S. Customs and Border Protection and a contractor, Lepugh Inc., doing business as LMD Agency Inc.
Rochon said she would soon issue a full opinion explaining her ruling.
The coalition, which filed its lawsuit on Oct. 7, includes the advocacy group Common Cause and the Service Employees International Union Local 32BJ, which is headquartered in New York City.
A separate lawsuit challenging the ads was filed that same day by the Democratic National Committee.
The ads, which have been airing for weeks, drew criticism from Democrats who said they appear designed to help Trump's fellow Republicans in November's election, which will determine which political party controls both chambers of Congress.
In its lawsuit, the coalition described one ad, titled "The Country He Loves," as featuring "rapid cuts of photos and videos of President Trump mixed in with text touting what the President views as his accomplishments in office," which includes "Largest Tax Cuts in History;" "Reigniting American Manufacturing;" and "Defend Law and Order and Police."
"Between those messages, the screen repeatedly flashes the words "AMERICA WILL NEVER BE A COMMUNIST COUNTRY," the civil complaint noted.
Sen. Maggie Hassan, D-N.H., wrote White House chief of staff Susie Wiles on Sept. 24, a day after that ad first aired.
"The advertisement does not have a clear official government purpose and appears to run afoul of federal prohibitions against the use of appropriated funds as part of 'a general propaganda effort designed to aid a political party or candidates,'" Hassan wrote.
Trump, in the face of that criticism, on Oct. 5 said that going forward he or his super PAC, MAGA Inc., would pay for the ads. The White House later said the president would not reimburse the federal government for the cost of the ads that had already aired.
In a statement Sunday evening on Rochon's order, the coalition said, "We are pleased the court acted swiftly to prevent more taxpayer dollars from being used for such blatantly unlawful political propaganda."
"There is no legal justification — and no precedent — for the president to use the machinery of the government and funds set aside by Congress for other uses to influence electoral outcomes that further his own agenda," the coalition said, referring to President Donald Trump.
"As this case moves forward and voters make their voices heard in this election, we will work to ensure the rule of law continues to be upheld, protecting the rights of voters and our democracy."`,
    bodyJa: `A federal judge in New York ordered the Trump administration Sunday night to immediately stop airing controversial government-funded television ads featuring President Donald Trump that critics call political propaganda intended to influence the November midterm election.
The temporary restraining order by Judge Jennifer Rochon in Manhattan federal court also bars the Department of Homeland Security from spending any more of the $20 million allocated for the ad campaign. About $19 million of that allocation has already been spent on the ads.
The order came a day after the Manhattan U.S. Attorney's Office, which is defending the Trump administration in a lawsuit challenging the ads, told Rochon that the ads would not continue being aired past Sunday.
Rochon's order, which lasts 14 days unless extended, directs the Trump administration to cancel all scheduled ads, including those due to air on Sunday evening. The ads have included the caption "Paid for by the U.S. Government" since they began being aired.
The Manhattan U.S. Attorney's Office declined to comment. The White House didn't immediately respond to a request for comment.
The money for the ads came from a large appropriation by Congress for immigration enforcement.
The coalition of plaintiffs that sued to block the ads told Rochon earlier Sunday that she should issue the TRO despite the claim by the U.S. Attorney's Office that the ads would not continue past Sunday.
"Defendants admit that appropriated funds were used to pay for political ads and do not dispute
that this use of taxpayer money is unlawful," the plaintiffs said in a court filing Sunday.
"Instead, much of Defendants' opposition boils down to a single premise: it is too late for the Court to act. That is not because Defendants have stopped airing the ads," the plaintiffs said. "Indeed, Defendants assert — boldly, given their failure to defend the ads on the merits — that ads will continue to air today, including during evening programming that will attract millions of viewers."
Rochon agreed, saying in her order that the TRO request was not rendered moot by the U.S. Attorney's statement that the ads would stop Sunday. The judge also rejected an argument by the Justice Department that the coalition lacked legal standing to challenge the ads.
Rochon said the coalition has shown it was likely to win the lawsuit, that it would suffer irreparable harm if the TRO was not granted, and that "an injunction serves the public interest."
In addition to the other actions, the judge ordered the Trump administration not to enter into any new agreement or expand existing ones for the ads. And she stayed a purchase order for the ads between U.S. Customs and Border Protection and a contractor, Lepugh Inc., doing business as LMD Agency Inc.
Rochon said she would soon issue a full opinion explaining her ruling.
The coalition, which filed its lawsuit on Oct. 7, includes the advocacy group Common Cause and the Service Employees International Union Local 32BJ, which is headquartered in New York City.
A separate lawsuit challenging the ads was filed that same day by the Democratic National Committee.
The ads, which have been airing for weeks, drew criticism from Democrats who said they appear designed to help Trump's fellow Republicans in November's election, which will determine which political party controls both chambers of Congress.
In its lawsuit, the coalition described one ad, titled "The Country He Loves," as featuring "rapid cuts of photos and videos of President Trump mixed in with text touting what the President views as his accomplishments in office," which includes "Largest Tax Cuts in History;" "Reigniting American Manufacturing;" and "Defend Law and Order and Police."
"Between those messages, the screen repeatedly flashes the words "AMERICA WILL NEVER BE A COMMUNIST COUNTRY," the civil complaint noted.
Sen. Maggie Hassan, D-N.H., wrote White House chief of staff Susie Wiles on Sept. 24, a day after that ad first aired.
"The advertisement does not have a clear official government purpose and appears to run afoul of federal prohibitions against the use of appropriated funds as part of 'a general propaganda effort designed to aid a political party or candidates,'" Hassan wrote.
Trump, in the face of that criticism, on Oct. 5 said that going forward he or his super PAC, MAGA Inc., would pay for the ads. The White House later said the president would not reimburse the federal government for the cost of the ads that had already aired.
In a statement Sunday evening on Rochon's order, the coalition said, "We are pleased the court acted swiftly to prevent more taxpayer dollars from being used for such blatantly unlawful political propaganda."
"There is no legal justification — and no precedent — for the president to use the machinery of the government and funds set aside by Congress for other uses to influence electoral outcomes that further his own agenda," the coalition said, referring to President Donald Trump.
"As this case moves forward and voters make their voices heard in this election, we will work to ensure the rule of law continues to be upheld, protecting the rights of voters and our democracy."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/11/trump-ads-dhs-judge-order.html",
    publishedAt: "2026-10-12T02:28:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "roofing-scammers-con-homeowners-out-of-t-e5c126d3",
    title: "Roofing scammers con homeowners out of thousands of pounds",
    titleJa: "Roofing scammers con homeowners out of thousands of pounds",
    summaryJa: "One in 10 scams reported to Citizens Advice relate to fraudsters charging for work not done, or done badly.",
    bodyOriginal: `Roofing scammers con homeowners out of thousands of pounds
- Published
Scammers pretending to be legitimate workmen are charging homeowners thousands of pounds for roofing work that is not completed, done badly or not necessary, according to Citizens Advice.
The consumer advice charity says one in 10 of all the scams it recorded over the past year were related to roofing, making it the most common type of scam brought to them.
It can leave victims like Crystal, from the Midlands, thousands of pounds out of pocket.
The 68-year-old was frightened and found it hard to sleep after a rogue builder left her roof with dislodged bricks and blocked gutters.
She said she felt pressured into agreeing to having her roof re-done and paid a total of £5,500, only for the original contractor to send his son instead, who left work in the eaves incomplete.
"We had heavy rain a couple of weeks after he did the job, and it ended up like a waterfall coming down the wall," she said.
Her neighbour's house was also damaged.
"They took the lead off my neighbour's side of the chimney, which caused bricks to fall into his attic and the rain to go into his house," she told the BBC.
The experience still haunts her: "I can't sleep. I don't eat properly".
In the year to August the Citizens Advice Consumer Service received 9,000 complaints about roofing work, including problems with construction, repairs and weatherproofing.
Of those 2,205, or about one in four complaints, were suspected scams, up from 2,098 the year before.
Dame Clare Moriarty, chief executive of Citizens Advice, urged consumers to carry out thorough checks on traders before agreeing to hire them.
"Scammers exploit the fact that roofs are out of sight and reach, knowing most people can't easily inspect the work themselves," she said.
Victims also reported aggressive and intimidating behaviour, with three quarters of fraudsters using "doorstep" sales tactics.
Citizens Advice cited the case of Charlotte, 65, who lives alone in north eastern England.
Tradesmen she found online initially offered to fix her leaking gutter for £250. The two men then said there was further work that needed to be done, that would cost £2,500.
"An hour later they said it was sorted, but they'd found another problem," she said.
It was dark and Charlotte felt afraid. "They knew I was alone, I didn't feel like I could deal with anything that might happen after, so I paid £3,500," she said.
But the next day she could see no sign of any work having been done, she said.
To avoid falling victim to roofing scams, Citizens Advice suggests:
Be alert: Always ask for references and for everything to be in writing. Be wary of unsolicited doorknockers and callers
Gather evidence: If a trader causes problems, be sure to take photos and gather the necessary paperwork and receipts
Know your rights: Traders must give you the information about your right to cancel in writing. If the job is not done with "reasonable care and skill," the Consumer Rights Act 2015 also entitles you to ask for the problem to be fixed or a refund
Lord Bichard, chair of National Trading Standards, said rogue traders were "criminals deliberately preying on people in their own homes".
He described roofing fraud as "particularly cruel", and said Trading Standards would pursue fraudsters through legal routes.
"Victims can lose life savings in a matter of hours and be left with damaged homes, financial hardship and a profound sense of vulnerability long after the criminals have gone," he said.`,
    bodyJa: `Roofing scammers con homeowners out of thousands of pounds
- Published
Scammers pretending to be legitimate workmen are charging homeowners thousands of pounds for roofing work that is not completed, done badly or not necessary, according to Citizens Advice.
The consumer advice charity says one in 10 of all the scams it recorded over the past year were related to roofing, making it the most common type of scam brought to them.
It can leave victims like Crystal, from the Midlands, thousands of pounds out of pocket.
The 68-year-old was frightened and found it hard to sleep after a rogue builder left her roof with dislodged bricks and blocked gutters.
She said she felt pressured into agreeing to having her roof re-done and paid a total of £5,500, only for the original contractor to send his son instead, who left work in the eaves incomplete.
"We had heavy rain a couple of weeks after he did the job, and it ended up like a waterfall coming down the wall," she said.
Her neighbour's house was also damaged.
"They took the lead off my neighbour's side of the chimney, which caused bricks to fall into his attic and the rain to go into his house," she told the BBC.
The experience still haunts her: "I can't sleep. I don't eat properly".
In the year to August the Citizens Advice Consumer Service received 9,000 complaints about roofing work, including problems with construction, repairs and weatherproofing.
Of those 2,205, or about one in four complaints, were suspected scams, up from 2,098 the year before.
Dame Clare Moriarty, chief executive of Citizens Advice, urged consumers to carry out thorough checks on traders before agreeing to hire them.
"Scammers exploit the fact that roofs are out of sight and reach, knowing most people can't easily inspect the work themselves," she said.
Victims also reported aggressive and intimidating behaviour, with three quarters of fraudsters using "doorstep" sales tactics.
Citizens Advice cited the case of Charlotte, 65, who lives alone in north eastern England.
Tradesmen she found online initially offered to fix her leaking gutter for £250. The two men then said there was further work that needed to be done, that would cost £2,500.
"An hour later they said it was sorted, but they'd found another problem," she said.
It was dark and Charlotte felt afraid. "They knew I was alone, I didn't feel like I could deal with anything that might happen after, so I paid £3,500," she said.
But the next day she could see no sign of any work having been done, she said.
To avoid falling victim to roofing scams, Citizens Advice suggests:
Be alert: Always ask for references and for everything to be in writing. Be wary of unsolicited doorknockers and callers
Gather evidence: If a trader causes problems, be sure to take photos and gather the necessary paperwork and receipts
Know your rights: Traders must give you the information about your right to cancel in writing. If the job is not done with "reasonable care and skill," the Consumer Rights Act 2015 also entitles you to ask for the problem to be fixed or a refund
Lord Bichard, chair of National Trading Standards, said rogue traders were "criminals deliberately preying on people in their own homes".
He described roofing fraud as "particularly cruel", and said Trading Standards would pursue fraudsters through legal routes.
"Victims can lose life savings in a matter of hours and be left with damaged homes, financial hardship and a profound sense of vulnerability long after the criminals have gone," he said.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6x29kydnzv0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-11T23:19:49+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/da61/live/bdf1b350-c3ef-11f1-913a-eb4b8e15ad15.jpg",
    readTime: 9,
  },
  {
    id: "debt-advice-that-may-leave-you-owing-eve-a6423a03",
    title: "Debt advice that may leave you owing even more money",
    titleJa: "Debt advice that may leave you owing even more money",
    summaryJa: "People are increasingly falling behind on credit card repayments, so here's the best way to get debt advice.",
    bodyOriginal: `Debt advice that may leave you owing even more money
- Published
An increasing number of people are missing credit card repayments as finances are stretched by rising bills.
Lenders have told the Bank of England they expect the number of unpaid credit card debts to keep going up this autumn.
This could lead to more demand for advice on how to deal with debts – but, if you are struggling and need help, there are some traps to avoid.
And it is worth remembering that impartial advice is available free of charge from debt charities. So here's what to think about.
How to find help
If you find yourself with money troubles, it can be tempting to seize any opportunity to get things back on track.
Social media and internet search pages are full of supposed quick-fix debt solutions. Cold calls and WhatsApp messages also promise debt help.
But they may well come with upfront fees, unrealistic claims about writing off debt, and pressure to make a quick decision.
Suggestions on the best way to find help include:
Impartial, authorised debt advice comes free. You can find a provider on the government-backed Moneyhelper website, external
Check whether a firm offering debt help is authorised by the regulator, the Financial Conduct Authority (FCA). You should cross-check the authorisation details they give with the FCA's register, external
Anyone unhappy with the service from an authorised firm can complain and, if you are still not happy, go to the independent Financial Ombudsman Service.
Alison Walters, director of consumer finance at the FCA, said: "Anyone struggling with debt deserves advice that puts their interests first.
"Free, impartial debt advice is available to everyone, and no one should be pressured or misled into paying for a debt solution that may not be right for them."
The warning signs of being misled
The FCA says that some unregulated firms collect people's details, through cold calling or online adverts, sometimes impersonating debt advice charities or debt collectors, and pass this information on to firms offering debt solutions that you pay for.
A quick search online will throw up lots of businesses offering ways to clear your debt, not all of which are trustworthy, according to charities.
Warning signs of unscrupulous firms include pressure tactics, such as repeated contact, often in messages and on the phone, pushing people to agree to a debt solution, the FCA says.
Some people have been encouraged to change financial details on lenders' paperwork, or are "coached" in ways to respond.
Sometimes people are steered towards a fee-charging debt solution, such as Individual Voluntary Arrangements (IVAs) or some debt management plans, without alternative options being properly explained or offered first.
And, do you know who you are talking to? Ask them who they work for, and check if their details match the firm's official details.
"Before making any decisions around how to deal with your debts, it's always worth getting full, free and impartial debt advice first, exploring all options to clear your debt in the safest and most sustainable way," said Vikki Brownridge, chief executive at debt charity StepChange.
Related topics
- Published15 July
- Published10 June`,
    bodyJa: `Debt advice that may leave you owing even more money
- Published
An increasing number of people are missing credit card repayments as finances are stretched by rising bills.
Lenders have told the Bank of England they expect the number of unpaid credit card debts to keep going up this autumn.
This could lead to more demand for advice on how to deal with debts – but, if you are struggling and need help, there are some traps to avoid.
And it is worth remembering that impartial advice is available free of charge from debt charities. So here's what to think about.
How to find help
If you find yourself with money troubles, it can be tempting to seize any opportunity to get things back on track.
Social media and internet search pages are full of supposed quick-fix debt solutions. Cold calls and WhatsApp messages also promise debt help.
But they may well come with upfront fees, unrealistic claims about writing off debt, and pressure to make a quick decision.
Suggestions on the best way to find help include:
Impartial, authorised debt advice comes free. You can find a provider on the government-backed Moneyhelper website, external
Check whether a firm offering debt help is authorised by the regulator, the Financial Conduct Authority (FCA). You should cross-check the authorisation details they give with the FCA's register, external
Anyone unhappy with the service from an authorised firm can complain and, if you are still not happy, go to the independent Financial Ombudsman Service.
Alison Walters, director of consumer finance at the FCA, said: "Anyone struggling with debt deserves advice that puts their interests first.
"Free, impartial debt advice is available to everyone, and no one should be pressured or misled into paying for a debt solution that may not be right for them."
The warning signs of being misled
The FCA says that some unregulated firms collect people's details, through cold calling or online adverts, sometimes impersonating debt advice charities or debt collectors, and pass this information on to firms offering debt solutions that you pay for.
A quick search online will throw up lots of businesses offering ways to clear your debt, not all of which are trustworthy, according to charities.
Warning signs of unscrupulous firms include pressure tactics, such as repeated contact, often in messages and on the phone, pushing people to agree to a debt solution, the FCA says.
Some people have been encouraged to change financial details on lenders' paperwork, or are "coached" in ways to respond.
Sometimes people are steered towards a fee-charging debt solution, such as Individual Voluntary Arrangements (IVAs) or some debt management plans, without alternative options being properly explained or offered first.
And, do you know who you are talking to? Ask them who they work for, and check if their details match the firm's official details.
"Before making any decisions around how to deal with your debts, it's always worth getting full, free and impartial debt advice first, exploring all options to clear your debt in the safest and most sustainable way," said Vikki Brownridge, chief executive at debt charity StepChange.
Related topics
- Published15 July
- Published10 June`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c84g1xz1l9ddo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-11T23:19:07+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a441/live/c56267d0-c31b-11f1-bd97-fbe5a3482cde.jpg",
    readTime: 8,
  },
  {
    id: "trump-faces-growing-backlash-over-plans-87036ac9",
    title: "Trump faces growing backlash over plans to import diesel from Russia",
    titleJa: "Trump faces growing backlash over plans to import diesel from Russia",
    summaryJa: "Both Republican and Democratic lawmakers have criticised the deal, which was announced weeks before the US midterm elections.",
    bodyOriginal: `Trump faces growing backlash over plans to import diesel from Russia
- Published
US President Donald Trump is facing a growing backlash over plans to import diesel from Russia as the Iran war continues to impact global energy prices.
Trump on Friday announced that Russian President Vladimir Putin had agreed to release 300,000 tonnes of diesel immediately "to the American and global marketplace" followed by several other shipments.
That is despite signing legislation to authorise fresh US sanctions and tariffs on nations that import Russian oil and gas just weeks ago.
The move has been criticised by some Republican and Democratic lawmakers, who believe the deal violates US laws.
As well as the initial release of 300,000 tonnes of diesel, Trump said Russia would then supply 500,000 tonnes in November and one million more after that.
This would be followed by a further three million tonnes, which would be delivered "within a short period" dependent on the condition of its refineries, which have been attacked by Ukraine during the ongoing war between the two countries.
"Lower prices for Americans, especially our Great Farmers, Ranchers, and Truckers, is my Greatest Priority," Trump wrote in a Truth Social post.
Russia's Deputy Prime Minister Alexander Novak confirmed these numbers to Tass, the country's state-owned news agency, saying the export volume could reach three million tonnes per month in future.
Ukrainian President Volodymyr Zelensky has called the deal a gift to Putin that amounts to "an investment in a war that must be ended".
It is understood the US Treasury is suspending sanctions on Russian diesel exports until 7 April as part of the deal, but other assets like those in American banks are still frozen.
A group of seven senators - four Republicans and three Democrats – on Sunday said the deal violated US laws, urging Trump to "reverse course".
"The United States should not provide Putin with a financial lifeline while Russia continues to kill Ukrainian civilians," the lawmakers said.
They added that Congress had "explicitly banned Russian energy imports in 2022 to prevent American dollars from financing Putin's brutal war against Ukraine".
The statement was signed by Republicans Susan Collins, Lisa Murkowski, Thom Tillis and John Curtis, as well as Democrats Jeanne Shaheen, Richard Blumenthal and Ron Wyden.
Trump's 'energy ceasefire' claim welcomed by Zelensky but Russia silent
- Published8 hours ago
Trump wants to reduce the cost of fuel as the midterms loom - will it work?
- Published2 days ago
Not everyone is opposed to the deal. Republican Thomas Massie, who has sparred with Trump a number of issues, said the US should lift sanctions on all petroleum products.
Trump's Treasury Secretary Scott Bessent told Fox News the agreement would work through existing legal channels the US has to help bring prices down and that anyone in Congress who said it would not was wrong.
Global fuel prices have soared since the US-Israel war with Iran began at the end of February, with the fighting severely disrupting supplies of crude oil - a key ingredient in petrol and diesel.
The rising prices have become a key issue for Americans ahead of next month's midterms elections, which will determine if Trump's Republican Party maintains control of Congress.
Polls show a majority of Americans disapprove of his handling of the economy and the war in Iran and he has been searching for ways to ease his party's political pain.
The toll the war is taking has been acutely felt by US agricultural states, which rely heavily on diesel to operate farming machinery and to transport their products to market.
The average diesel price in the US is currently $6.28 (£4.74) a gallon, according to the AAA, down from the record high of $6.53 recorded at the end of September.
Analysts have questioned whether Russia is capable of providing that quantity of diesel and the extent to which doing so will ease prices for American consumers.
The US uses approximately 3.6 million barrels of diesel a day, so even if Russia delivers its promised 300,000 tons this month, which amounts to approximately half of the US daily consumption.
It is not only at home that Trump is facing opposition to his diesel deal with Russia. A number of international leaders have criticised it, including Canadian Prime Minister Mark Carney and UK Defence Secretary Wes Streeting, who said the US and other allies of Ukraine should focus on ramping up pressure on Russia to end the war.
Meanwhile, Trump announced in Sunday that Russia and Ukraine had reached an "energy ceasefire" but did not give more details. Ukrainian President Volodymyr Zelensky welcomed this but there was no response from Moscow.
Related topics
- Published18 hours ago`,
    bodyJa: `Trump faces growing backlash over plans to import diesel from Russia
- Published
US President Donald Trump is facing a growing backlash over plans to import diesel from Russia as the Iran war continues to impact global energy prices.
Trump on Friday announced that Russian President Vladimir Putin had agreed to release 300,000 tonnes of diesel immediately "to the American and global marketplace" followed by several other shipments.
That is despite signing legislation to authorise fresh US sanctions and tariffs on nations that import Russian oil and gas just weeks ago.
The move has been criticised by some Republican and Democratic lawmakers, who believe the deal violates US laws.
As well as the initial release of 300,000 tonnes of diesel, Trump said Russia would then supply 500,000 tonnes in November and one million more after that.
This would be followed by a further three million tonnes, which would be delivered "within a short period" dependent on the condition of its refineries, which have been attacked by Ukraine during the ongoing war between the two countries.
"Lower prices for Americans, especially our Great Farmers, Ranchers, and Truckers, is my Greatest Priority," Trump wrote in a Truth Social post.
Russia's Deputy Prime Minister Alexander Novak confirmed these numbers to Tass, the country's state-owned news agency, saying the export volume could reach three million tonnes per month in future.
Ukrainian President Volodymyr Zelensky has called the deal a gift to Putin that amounts to "an investment in a war that must be ended".
It is understood the US Treasury is suspending sanctions on Russian diesel exports until 7 April as part of the deal, but other assets like those in American banks are still frozen.
A group of seven senators - four Republicans and three Democrats – on Sunday said the deal violated US laws, urging Trump to "reverse course".
"The United States should not provide Putin with a financial lifeline while Russia continues to kill Ukrainian civilians," the lawmakers said.
They added that Congress had "explicitly banned Russian energy imports in 2022 to prevent American dollars from financing Putin's brutal war against Ukraine".
The statement was signed by Republicans Susan Collins, Lisa Murkowski, Thom Tillis and John Curtis, as well as Democrats Jeanne Shaheen, Richard Blumenthal and Ron Wyden.
Trump's 'energy ceasefire' claim welcomed by Zelensky but Russia silent
- Published8 hours ago
Trump wants to reduce the cost of fuel as the midterms loom - will it work?
- Published2 days ago
Not everyone is opposed to the deal. Republican Thomas Massie, who has sparred with Trump a number of issues, said the US should lift sanctions on all petroleum products.
Trump's Treasury Secretary Scott Bessent told Fox News the agreement would work through existing legal channels the US has to help bring prices down and that anyone in Congress who said it would not was wrong.
Global fuel prices have soared since the US-Israel war with Iran began at the end of February, with the fighting severely disrupting supplies of crude oil - a key ingredient in petrol and diesel.
The rising prices have become a key issue for Americans ahead of next month's midterms elections, which will determine if Trump's Republican Party maintains control of Congress.
Polls show a majority of Americans disapprove of his handling of the economy and the war in Iran and he has been searching for ways to ease his party's political pain.
The toll the war is taking has been acutely felt by US agricultural states, which rely heavily on diesel to operate farming machinery and to transport their products to market.
The average diesel price in the US is currently $6.28 (£4.74) a gallon, according to the AAA, down from the record high of $6.53 recorded at the end of September.
Analysts have questioned whether Russia is capable of providing that quantity of diesel and the extent to which doing so will ease prices for American consumers.
The US uses approximately 3.6 million barrels of diesel a day, so even if Russia delivers its promised 300,000 tons this month, which amounts to approximately half of the US daily consumption.
It is not only at home that Trump is facing opposition to his diesel deal with Russia. A number of international leaders have criticised it, including Canadian Prime Minister Mark Carney and UK Defence Secretary Wes Streeting, who said the US and other allies of Ukraine should focus on ramping up pressure on Russia to end the war.
Meanwhile, Trump announced in Sunday that Russia and Ukraine had reached an "energy ceasefire" but did not give more details. Ukrainian President Volodymyr Zelensky welcomed this but there was no response from Moscow.
Related topics
- Published18 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjn5v21py07vo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-11T23:18:45+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c44f/live/e68c78a0-c5c9-11f1-9042-5f0794d5e895.jpg",
    readTime: 10,
  },
  {
    id: "ai-is-less-regulated-than-milk-says-micr-145f3d12",
    title: "AI is less regulated than milk, says Microsoft president",
    titleJa: "AI is less regulated than milk, says Microsoft president",
    summaryJa: "Brad Smith calls for global rules on AI, and says the UK is in the \"best position\" to lead the charge.",
    bodyOriginal: `AI is less regulated than milk, says Microsoft president
- Published
Milk and washing machines are currently more regulated than AI, the president of Microsoft has said.
Brad Smith said there needed to be global safety rules in place, including a legal obligation to tell a "victim" if their system is breached by a rogue AI agent as well as deciding when outside evaluators should sign off on an AI product before it is released.
His comments put him at odds with President Donald Trump, who said the sector should regulate itself so US firms don't lose out to Chinese rivals.
But Smith said: "Right now, your washing machine is subject to more safety rules than AI. Every carton of milk that you see in the grocery store is subject to safety rules and inspection."
Demands for laws and rules to control AI have grown after experts in the sector said they believed the technology its a threat to humanity.
The bosses of the US-based AI giants such as Anthropic, OpenAI and Google DeepMind have all backed the idea of an AI development slowdown, but Trump has pushed against this.
Speaking to the BBC's Big Boss Interview, Smith called AI both a "tool and a weapon" that urgently needed to be regulated.
"Let's get started today," he said.
He said firms need "emergency brakes" – often known in the industry as 'kill switches' – to pause or slowdown AI if it got out of control in some way.
He also said there should be a legal requirement for firms to write "incident reports" and tell victims if the technology goes rogue. He also suggested that independent government evaluators should vet new AI technology.
"We know how to do this for other products," Smith said. "We should build on that knowledge and think about how to apply it to AI."
Smith said the UK was best placed to drive forward these global rules for AI because of its AI Security Institute, external, launched during former prime minister Rishi Sunak's government as the AI Safety Institute.
"In the world of technology, in the tech sector, most people that I know would say, if you ask them, name the country that is the leader in having this technical capability, they would say, it's very simple. It's the United Kingdom. They are the best."
'The moment has arrived'
Smith's views are very different to those of his president, who believes the US should be going full-steam ahead on AI.
Trump has repeatedly said that "whoever wins AI, wins".
However, Smith does not believe the US government would be as opposed to UK-led AI regulations as Trump's comments make it seem, suggesting the US would be more accepting of the UK making standards than the EU.
"In Washington DC, people don't look at the UK and they don't look at London the way they look at Brussels – that's a strength," he said.
"When you look at AI agents that have escaped human control, when you look at models that are so powerful that they're putting the world's cybersecurity at risk. I would say: The moment has arrived.
"Let's speak calmly, maybe even softly, but firmly, and start to bring people together. I hope that's the role we can play as a company. I hope that's the role the UK can play as a country."
At the end of last month, Trump hosted the leaders of US tech giants OpenAI, Anthropic, Nvidia, SpaceX, Meta, and Google at the White House where the executives signed a "morally binding" document.
The companies agreed to work with "independent auditors" to assess whether their AI systems are working as intended and make sure they do not "hack or access technical systems in unintended ways".
Smith said he applauds the statement and Microsoft is "happy to sign it".
"It's a good step, it's a necessary step... But I don't think it's sufficient any longer."
He added that the challenge for any "self-regulatory regime" is that "the good companies will do what you want".
"It's the companies that are not as responsible that you need to worry about."`,
    bodyJa: `AI is less regulated than milk, says Microsoft president
- Published
Milk and washing machines are currently more regulated than AI, the president of Microsoft has said.
Brad Smith said there needed to be global safety rules in place, including a legal obligation to tell a "victim" if their system is breached by a rogue AI agent as well as deciding when outside evaluators should sign off on an AI product before it is released.
His comments put him at odds with President Donald Trump, who said the sector should regulate itself so US firms don't lose out to Chinese rivals.
But Smith said: "Right now, your washing machine is subject to more safety rules than AI. Every carton of milk that you see in the grocery store is subject to safety rules and inspection."
Demands for laws and rules to control AI have grown after experts in the sector said they believed the technology its a threat to humanity.
The bosses of the US-based AI giants such as Anthropic, OpenAI and Google DeepMind have all backed the idea of an AI development slowdown, but Trump has pushed against this.
Speaking to the BBC's Big Boss Interview, Smith called AI both a "tool and a weapon" that urgently needed to be regulated.
"Let's get started today," he said.
He said firms need "emergency brakes" – often known in the industry as 'kill switches' – to pause or slowdown AI if it got out of control in some way.
He also said there should be a legal requirement for firms to write "incident reports" and tell victims if the technology goes rogue. He also suggested that independent government evaluators should vet new AI technology.
"We know how to do this for other products," Smith said. "We should build on that knowledge and think about how to apply it to AI."
Smith said the UK was best placed to drive forward these global rules for AI because of its AI Security Institute, external, launched during former prime minister Rishi Sunak's government as the AI Safety Institute.
"In the world of technology, in the tech sector, most people that I know would say, if you ask them, name the country that is the leader in having this technical capability, they would say, it's very simple. It's the United Kingdom. They are the best."
'The moment has arrived'
Smith's views are very different to those of his president, who believes the US should be going full-steam ahead on AI.
Trump has repeatedly said that "whoever wins AI, wins".
However, Smith does not believe the US government would be as opposed to UK-led AI regulations as Trump's comments make it seem, suggesting the US would be more accepting of the UK making standards than the EU.
"In Washington DC, people don't look at the UK and they don't look at London the way they look at Brussels – that's a strength," he said.
"When you look at AI agents that have escaped human control, when you look at models that are so powerful that they're putting the world's cybersecurity at risk. I would say: The moment has arrived.
"Let's speak calmly, maybe even softly, but firmly, and start to bring people together. I hope that's the role we can play as a company. I hope that's the role the UK can play as a country."
At the end of last month, Trump hosted the leaders of US tech giants OpenAI, Anthropic, Nvidia, SpaceX, Meta, and Google at the White House where the executives signed a "morally binding" document.
The companies agreed to work with "independent auditors" to assess whether their AI systems are working as intended and make sure they do not "hack or access technical systems in unintended ways".
Smith said he applauds the statement and Microsoft is "happy to sign it".
"It's a good step, it's a necessary step... But I don't think it's sufficient any longer."
He added that the challenge for any "self-regulatory regime" is that "the good companies will do what you want".
"It's the companies that are not as responsible that you need to worry about."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6rmy7zmvx3lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-11T23:07:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fc1a/live/a75b5120-c40b-11f1-9a39-31b474234113.jpg",
    readTime: 10,
  },
  {
    id: "iran-war-threatens-healey-s-budget-plans-eb1ae5d6",
    title: "Iran war threatens Healey's Budget plans, think tank warns",
    titleJa: "Iran war threatens Healey's Budget plans, think tank warns",
    summaryJa: "The impact of the Iran war poses significant risks for the government’s spending plans, the Institute for Fiscal Studies says.",
    bodyOriginal: `Iran war threatens Healey's Budget plans, think tank warns
- Published
The price spike caused by the US-Israel war in Iran poses a major challenge for Chancellor John Healey as he puts together his first Budget, an influential think tank has warned.
Higher-than-expected inflation could eat into what the government hoped to spend on public services, meaning Healey will have to choose between spending cuts, tax rises, or a mixture of both, the Institute for Fiscal Studies (IFS) said.
It urged the government to ensure its spending plans are credible, as opposed to proposing unrealistic future cuts to make the Budget add up.
The Treasury declined to comment on "rumour and speculation".
However, speaking ahead of the annual International Monetary Fund meeting this week, Healey said: "The consequences of conflict in the Middle East and Europe are hitting countries worldwide, leading to higher prices at the pumps and more expensive mortgages at home.
"But Britain and our allies can face up to these challenges together."
He said his Budget "will build on this approach with fiscal discipline helping to deliver economic resilience" and give people "breathing space".
However, the government is under growing pressure to show financial markets that it has a tight grip on finances as the cost of borrowing rises.
The IFS cautioned Healey about making any spending announcements in the 28 October Budget speech he has no intention of honouring.
"A 'steady-as-she-goes' Budget is not an option available to the chancellor," said IFS director Helen Miller said.
"Choosing to stay the course with the inherited tax and spending plans would mean allowing inflation to blow departments' spending plans off course.
"Simply pencilling in implicit cuts that he has no intention of delivering would make the Budget a work of fiction," she added.
The US-Israel war against Iran and Russia's invasion of Ukraine have together helped drive up energy prices around the world.
These higher costs have been passed to customers via higher prices on shelves and at the pumps.
The wars have also contributed to a rise in the cost of UK government debt interest payments, adding to the pressure on Healey.
Although higher inflation will boost tax revenues, it will also eat into the value of departments' cash budgets, the IFS said.
'Breathing space'
Like other analysts, the IFS thinks recent turbulence on bond markets and higher inflation will add around £10bn to forecasts for the government's borrowing costs in 2029-30.
However, it still expects the government to meet its self-imposed fiscal rules - that it will only borrow for investment projects by the financial year 2029-30 and also be reducing debt as a percentage of GDP - not least as inflation pushes up tax revenues.
But it expects those rules to be met by a smaller buffer - known as "headroom" - of around £20bn. That is less than the £24bn buffer predicted at the time of the Spring Statement by the official forecaster, the Office for Budget Responsibility (OBR).
Recent indications have been that the markets would be comfortable with that degree of reduced headroom. The IFS also expects any "breathing space" help for households to be temporary and limited in scale.
However, the IFS warns that in such a volatile environment, its forecasts are exceptionally uncertain. And the official forecast from the OBR - which the chancellor relies on when making his plans - may come to a very different conclusion.
The IFS reckons that to maintain departments' budgets in the face of higher inflation, the government may need to find an extra £25bn in 2029-30.
That is before consider considering the ambition to raise defence spending. Raising such an amount would point to significant tax rises.
The chancellor does not have to address spending totals in this Budget, and may choose to leave such decisions until future events - for example, next year's Spring Statement or Spending Review - by which time the outlook for the economy could look very different.
But the IFS warned that the spending plans inherited from the previous chancellor, Rachel Reeves, would mean some departments' budgets would not keep pace with inflation in a few years time.
It said not addressing this would cast doubt on the credibility of the government's plans.
However, previous chancellors have relied on a similar strategy of pencilling in unrealistic future spending plans to ensure that they meet the fiscal rules on the day - only to change the plans further down the line.
Related topics
- Published3 days ago`,
    bodyJa: `Iran war threatens Healey's Budget plans, think tank warns
- Published
The price spike caused by the US-Israel war in Iran poses a major challenge for Chancellor John Healey as he puts together his first Budget, an influential think tank has warned.
Higher-than-expected inflation could eat into what the government hoped to spend on public services, meaning Healey will have to choose between spending cuts, tax rises, or a mixture of both, the Institute for Fiscal Studies (IFS) said.
It urged the government to ensure its spending plans are credible, as opposed to proposing unrealistic future cuts to make the Budget add up.
The Treasury declined to comment on "rumour and speculation".
However, speaking ahead of the annual International Monetary Fund meeting this week, Healey said: "The consequences of conflict in the Middle East and Europe are hitting countries worldwide, leading to higher prices at the pumps and more expensive mortgages at home.
"But Britain and our allies can face up to these challenges together."
He said his Budget "will build on this approach with fiscal discipline helping to deliver economic resilience" and give people "breathing space".
However, the government is under growing pressure to show financial markets that it has a tight grip on finances as the cost of borrowing rises.
The IFS cautioned Healey about making any spending announcements in the 28 October Budget speech he has no intention of honouring.
"A 'steady-as-she-goes' Budget is not an option available to the chancellor," said IFS director Helen Miller said.
"Choosing to stay the course with the inherited tax and spending plans would mean allowing inflation to blow departments' spending plans off course.
"Simply pencilling in implicit cuts that he has no intention of delivering would make the Budget a work of fiction," she added.
The US-Israel war against Iran and Russia's invasion of Ukraine have together helped drive up energy prices around the world.
These higher costs have been passed to customers via higher prices on shelves and at the pumps.
The wars have also contributed to a rise in the cost of UK government debt interest payments, adding to the pressure on Healey.
Although higher inflation will boost tax revenues, it will also eat into the value of departments' cash budgets, the IFS said.
'Breathing space'
Like other analysts, the IFS thinks recent turbulence on bond markets and higher inflation will add around £10bn to forecasts for the government's borrowing costs in 2029-30.
However, it still expects the government to meet its self-imposed fiscal rules - that it will only borrow for investment projects by the financial year 2029-30 and also be reducing debt as a percentage of GDP - not least as inflation pushes up tax revenues.
But it expects those rules to be met by a smaller buffer - known as "headroom" - of around £20bn. That is less than the £24bn buffer predicted at the time of the Spring Statement by the official forecaster, the Office for Budget Responsibility (OBR).
Recent indications have been that the markets would be comfortable with that degree of reduced headroom. The IFS also expects any "breathing space" help for households to be temporary and limited in scale.
However, the IFS warns that in such a volatile environment, its forecasts are exceptionally uncertain. And the official forecast from the OBR - which the chancellor relies on when making his plans - may come to a very different conclusion.
The IFS reckons that to maintain departments' budgets in the face of higher inflation, the government may need to find an extra £25bn in 2029-30.
That is before consider considering the ambition to raise defence spending. Raising such an amount would point to significant tax rises.
The chancellor does not have to address spending totals in this Budget, and may choose to leave such decisions until future events - for example, next year's Spring Statement or Spending Review - by which time the outlook for the economy could look very different.
But the IFS warned that the spending plans inherited from the previous chancellor, Rachel Reeves, would mean some departments' budgets would not keep pace with inflation in a few years time.
It said not addressing this would cast doubt on the credibility of the government's plans.
However, previous chancellors have relied on a similar strategy of pencilling in unrealistic future spending plans to ensure that they meet the fiscal rules on the day - only to change the plans further down the line.
Related topics
- Published3 days ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm78pwdp3n5qo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-11T23:04:07+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/48bb/live/aeeccb70-c3e4-11f1-badc-154546719036.jpg",
    readTime: 10,
  },
  {
    id: "trump-s-energy-ceasefire-claim-welcomed-a7255c68",
    title: "Trump's 'energy ceasefire' claim welcomed by Zelensky but Russia silent",
    titleJa: "Trump's 'energy ceasefire' claim welcomed by Zelensky but Russia silent",
    summaryJa: "Trump's 'energy ceasefire' claim welcomed by Zelensky but Russia silent- Published",
    bodyOriginal: `Trump's 'energy ceasefire' claim welcomed by Zelensky but Russia silent
- Published
Donald Trump has claimed that Russia and Ukraine have agreed to an "energy ceasefire", with Kyiv saying it would support such a move but Moscow yet to comment.
The US president insisted that it was "effective immediately" but provided no details.
Ukrainian President Volodymyr Zelensky initially expressed surprise at the announcement, before saying Kyiv would support it if Moscow did. He also accused Russia of striking Ukrainian energy facilities after Trump's post.
Trump has been urging Ukraine to stop strikes on Russian oil infrastructure - which Kyiv says are vital to curtailing revenue for Moscow's war machine - so Russia can fulfil a recently-struck deal to release diesel to the US and the global market.
The diesel deal, temporarily undoing sanctions on Russian imports, is attracting growing criticism. Zelensky called it a gift to Russian President Vladimir Putin. European officials and some US politicians, including from Trump's Republican party, have said they do not support it.
The deal is Trump's latest effort to lower domestic fuel prices ahead of the midterm elections, having spent months grappling with the political consequences of the war with Iran which has pushed up global fuel prices, particularly those for diesel.
That has soured Trump's standing with the American public, who have been stung by the higher pump prices and knock-on effects that led to across-the-board inflation.
Zelensky said it was "news" to him that an energy truce was in effect in comments to news site Axios, before writing on social media that his officials "look forward to clear details of America's dialogue with Russia".
"Ukraine is ready not to strike at Russian energy and we count on Russia's similar readiness and on the agreement of the president of the United States of America on this," he said.
The BBC has asked the White House for further details.
UK Prime Minister Andy Burnham said Britain "strongly supports President Trump's call today for a sustained energy ceasefire to start now", while France, Canada and the EU also expressed support.
Zelensky later said Russia had hit a power plant in Kyiv with a drone, causing power cuts, followed by strikes on energy facilities in the north-eastern Kharkiv region.
"All of this happened after the president of the United States made his statement about an energy ceasefire," he said.
For months, Ukraine and Russia have been exchanging strikes on energy infrastructure.
Moscow said the installations it hits were legitimate targets because they supported Ukraine's military operation, while Zelensky has characterised Ukrainian attacks deep inside Russian territory as part of an effort to "reduce Russia's ability to finance the war".
The attacks have disrupted energy supplies on both sides.
Earlier on Sunday, UK Defence Secretary Wes Streeting told the BBC that the UK did not support it, while EU foreign policy chief Kaja Kallas echoed Zelensky's criticism of it on Saturday.
The deal has also attracted criticism from politicians of both main US parties.
Seven senators, including three Democrats and four Republicans, have published a statement saying Trump's deal "runs directly counter" to a law that had explicitly banned Russian energy imports.
"Congress was clear: the US should not import oil from Russia until it ends its aggression against Ukraine and ceases threats against our Nato Allies," they said, urging the Trump administration to "reverse course".
Republican Senator Thom Tillis, one of the seven, told NBC News that the deal "absolutely will" put American lives at risk.
On Saturday Trump accused Zelensky of wanting to "make problems for the world" by continuing to authorise attacks on Russian refineries following the Ukrainian leader's criticism of the diesel deal.
The US president suggested that it was "time for Ukraine to get a new president".
Zelensky pledged to hold elections - despite them being suspended by the Ukrainian constitution during wartime - if Russia agreed to a 60-day total ceasefire.
The Ukrainian president previously resisted calls from the US for fresh elections, pointing to complications with holding a vote in parts of the country that are active war zones or under Russian occupation.
Trump, however, has repeatedly accused the Ukrainian leader of using the war to stay in power.
Meanwhile, strikes and fighting on the ground continue in the four-year-long war.
Six people were killed in attacks on two Ukrainian cities on Sunday, regional officials said.
One person was killed in Russia's Belgorod region, which borders Ukraine, while another man was killed in a drone attack in the Russian-occupied Donetsk region, officials said.`,
    bodyJa: `Trump's 'energy ceasefire' claim welcomed by Zelensky but Russia silent
- Published
Donald Trump has claimed that Russia and Ukraine have agreed to an "energy ceasefire", with Kyiv saying it would support such a move but Moscow yet to comment.
The US president insisted that it was "effective immediately" but provided no details.
Ukrainian President Volodymyr Zelensky initially expressed surprise at the announcement, before saying Kyiv would support it if Moscow did. He also accused Russia of striking Ukrainian energy facilities after Trump's post.
Trump has been urging Ukraine to stop strikes on Russian oil infrastructure - which Kyiv says are vital to curtailing revenue for Moscow's war machine - so Russia can fulfil a recently-struck deal to release diesel to the US and the global market.
The diesel deal, temporarily undoing sanctions on Russian imports, is attracting growing criticism. Zelensky called it a gift to Russian President Vladimir Putin. European officials and some US politicians, including from Trump's Republican party, have said they do not support it.
The deal is Trump's latest effort to lower domestic fuel prices ahead of the midterm elections, having spent months grappling with the political consequences of the war with Iran which has pushed up global fuel prices, particularly those for diesel.
That has soured Trump's standing with the American public, who have been stung by the higher pump prices and knock-on effects that led to across-the-board inflation.
Zelensky said it was "news" to him that an energy truce was in effect in comments to news site Axios, before writing on social media that his officials "look forward to clear details of America's dialogue with Russia".
"Ukraine is ready not to strike at Russian energy and we count on Russia's similar readiness and on the agreement of the president of the United States of America on this," he said.
The BBC has asked the White House for further details.
UK Prime Minister Andy Burnham said Britain "strongly supports President Trump's call today for a sustained energy ceasefire to start now", while France, Canada and the EU also expressed support.
Zelensky later said Russia had hit a power plant in Kyiv with a drone, causing power cuts, followed by strikes on energy facilities in the north-eastern Kharkiv region.
"All of this happened after the president of the United States made his statement about an energy ceasefire," he said.
For months, Ukraine and Russia have been exchanging strikes on energy infrastructure.
Moscow said the installations it hits were legitimate targets because they supported Ukraine's military operation, while Zelensky has characterised Ukrainian attacks deep inside Russian territory as part of an effort to "reduce Russia's ability to finance the war".
The attacks have disrupted energy supplies on both sides.
Earlier on Sunday, UK Defence Secretary Wes Streeting told the BBC that the UK did not support it, while EU foreign policy chief Kaja Kallas echoed Zelensky's criticism of it on Saturday.
The deal has also attracted criticism from politicians of both main US parties.
Seven senators, including three Democrats and four Republicans, have published a statement saying Trump's deal "runs directly counter" to a law that had explicitly banned Russian energy imports.
"Congress was clear: the US should not import oil from Russia until it ends its aggression against Ukraine and ceases threats against our Nato Allies," they said, urging the Trump administration to "reverse course".
Republican Senator Thom Tillis, one of the seven, told NBC News that the deal "absolutely will" put American lives at risk.
On Saturday Trump accused Zelensky of wanting to "make problems for the world" by continuing to authorise attacks on Russian refineries following the Ukrainian leader's criticism of the diesel deal.
The US president suggested that it was "time for Ukraine to get a new president".
Zelensky pledged to hold elections - despite them being suspended by the Ukrainian constitution during wartime - if Russia agreed to a 60-day total ceasefire.
The Ukrainian president previously resisted calls from the US for fresh elections, pointing to complications with holding a vote in parts of the country that are active war zones or under Russian occupation.
Trump, however, has repeatedly accused the Ukrainian leader of using the war to stay in power.
Meanwhile, strikes and fighting on the ground continue in the four-year-long war.
Six people were killed in attacks on two Ukrainian cities on Sunday, regional officials said.
One person was killed in Russia's Belgorod region, which borders Ukraine, while another man was killed in a drone attack in the Russian-occupied Donetsk region, officials said.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6pvg4jyz1m0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-11T21:36:40+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1cf1/live/a99a3f50-c5a5-11f1-8ef2-31c45d39a4c9.jpg",
    readTime: 10,
  },
  {
    id: "justice-department-investigates-tv-netwo-edbd763b",
    title: "Justice Department investigates TV networks as White House press-access fight escalates",
    titleJa: "Justice Department investigates TV networks as White House press-access fight escalates",
    summaryJa: "The Justice Department said in a statement that it is examining whether the White House TV press pool violated the Sherman Act.",
    bodyOriginal: `The U.S. Department of Justice launched an investigation into whether the White House television press pool's decision to suspend coverage of President Donald Trump violated antitrust laws.
The Justice Department said in a statement that it is examining whether the White House TV press pool — a group of broadcasters including CNN, Fox News, ABC, CBS and NBC — violated the Sherman Act by temporarily halting pooled TV coverage of Trump.
The Sherman Act is a federal law that prohibits certain agreements that unreasonably restrain trade. Introduced in the 1890s, the law has rarely been applied to media organizations, particularly regarding their coverage.
Members of the press pool did not immediately respond to CNBC's requests for comment sent outside of normal business hours.
The DOJ investigation follows the White House television press pool ceased its coverage of Trump on Sept. 21, shortly after he prohibited CNN, MS NOW and Politico from accessing the White House.
In a Truth Social post, the president said then that those outlets "shouldn't be able to constantly write or report FICTION and LIES when they're covering the President of the United States, the Trump Administration, or the United States of America."
A judge lifted restrictions on those reporters on Sept. 24, several days after White House staff confiscated their press passes. Despite the ruling, reporters from CNN and Politico were barred from traveling with the president on Air Force One, the New York Times reported.
The Trump administration now faces a lawsuit from CNN, MS NOW and Politico over its ban of their reporters from the White House grounds.
Television pool coverage of the White House has also resumed.
The DOJ investigation marks another escalation in an ongoing dispute between Trump and the media over press rights.
The Trump administration has moved to restrict news agencies that have produced critical coverage of its policies.
Last year, Trump moved to rescind about $1.1 billion previously approved for the Corporation for Public Broadcasting, federal funding earmarked for public broadcasters NPR and PBS. Trump and his allies have also sued several media organizations, including The New York Times, The Wall Street Journal, and BBC News, over alleged biases or inaccuracies in their reporting.
Seth Stern, chief of advocacy for the Freedom of the Press Foundation, called the DOJ investigation "nonsense."
"Depriving Trump of the attention he craves is not a competitive harm and in any case, antitrust law has long recognized First Amendment exceptions even when there is anticompetitive impact," he said. "After all his 'fake news' rhetoric, Trump is weaponizing the DOJ to pressure the networks he calls the 'enemy of the people' to stay at the White House. It's a weird way of telling the press how much he missed them."
The White House Correspondents' Association did not immediately respond to a request for comment.
Disclosure: CNBC and MS NOW are divisions of Versant Media.`,
    bodyJa: `The U.S. Department of Justice launched an investigation into whether the White House television press pool's decision to suspend coverage of President Donald Trump violated antitrust laws.
The Justice Department said in a statement that it is examining whether the White House TV press pool — a group of broadcasters including CNN, Fox News, ABC, CBS and NBC — violated the Sherman Act by temporarily halting pooled TV coverage of Trump.
The Sherman Act is a federal law that prohibits certain agreements that unreasonably restrain trade. Introduced in the 1890s, the law has rarely been applied to media organizations, particularly regarding their coverage.
Members of the press pool did not immediately respond to CNBC's requests for comment sent outside of normal business hours.
The DOJ investigation follows the White House television press pool ceased its coverage of Trump on Sept. 21, shortly after he prohibited CNN, MS NOW and Politico from accessing the White House.
In a Truth Social post, the president said then that those outlets "shouldn't be able to constantly write or report FICTION and LIES when they're covering the President of the United States, the Trump Administration, or the United States of America."
A judge lifted restrictions on those reporters on Sept. 24, several days after White House staff confiscated their press passes. Despite the ruling, reporters from CNN and Politico were barred from traveling with the president on Air Force One, the New York Times reported.
The Trump administration now faces a lawsuit from CNN, MS NOW and Politico over its ban of their reporters from the White House grounds.
Television pool coverage of the White House has also resumed.
The DOJ investigation marks another escalation in an ongoing dispute between Trump and the media over press rights.
The Trump administration has moved to restrict news agencies that have produced critical coverage of its policies.
Last year, Trump moved to rescind about $1.1 billion previously approved for the Corporation for Public Broadcasting, federal funding earmarked for public broadcasters NPR and PBS. Trump and his allies have also sued several media organizations, including The New York Times, The Wall Street Journal, and BBC News, over alleged biases or inaccuracies in their reporting.
Seth Stern, chief of advocacy for the Freedom of the Press Foundation, called the DOJ investigation "nonsense."
"Depriving Trump of the attention he craves is not a competitive harm and in any case, antitrust law has long recognized First Amendment exceptions even when there is anticompetitive impact," he said. "After all his 'fake news' rhetoric, Trump is weaponizing the DOJ to pressure the networks he calls the 'enemy of the people' to stay at the White House. It's a weird way of telling the press how much he missed them."
The White House Correspondents' Association did not immediately respond to a request for comment.
Disclosure: CNBC and MS NOW are divisions of Versant Media.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/11/trump-doj-white-house-tv-press-pool-antitrust.html",
    publishedAt: "2026-10-11T20:18:38+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 7,
  },
  {
    id: "trump-declares-energy-ceasefire-between-3bbaf502",
    title: "Trump declares 'energy ceasefire' between Russia and Ukraine; Zelenskyy is waiting for details",
    titleJa: "Trump declares 'energy ceasefire' between Russia and Ukraine; Zelenskyy is waiting for details",
    summaryJa: "Ukrainian President Volodymyr Zelenskyy said he is waiting on details from Washington.",
    bodyOriginal: `President Donald Trump claimed Russia and Ukraine had agreed to an "energy ceasefire" as the countries trade blows on energy infrastructure, but it's unclear whether either side has agreed to a truce.
"Effective immediately, there is an ENERGY CEASEFIRE in the War between Russia and Ukraine. Both parties have agreed. Do not break it!" Trump said in a social media statement, without providing details about the alleged pact.
The White House referred CNBC to the social media post when asked for more information on the ceasefire.
Trump's statement on Truth Social comes as energy costs soar globally during the U.S. war with Iran. An energy truce between Ukraine and Russia could help to alleviate the oil and gas crunch ahead of winter.
In a social media post, Ukrainian President Volodymyr Zelenskyy said: "Ukraine supports the ceasefire, and it is important that Russia support it as well."
"We are awaiting details from the American side," Zelenskyy said. "For our part, Ukraine always FULLY supports steps toward de-escalation, the protection of lives, and the decisions needed to end the war and guarantee lasting peace."
Earlier in the week, Trump lashed out at Zelenskyy, suggesting he should be replaced and blaming him for high diesel costs that threaten to complicate the Republican Party's chances ahead of November's midterm election. Trump also said he had cut a deal with Russian President Vladimir Putin to bring Russian diesel to the market.
Zelenskyy said in response that Ukraine would only stop attacking oil refineries if Russia halted its attacks on Kyiv's electric grid.
Ceasefires between Russia and Ukraine have been consistently difficult to hold since Russia invaded its neighbor in 2022. Trump has repeatedly sought to end the conflict, but so far has been unsuccessful.
Zelenskyy on ABC's "This Week" earlier Sunday asked Trump to "give them [a] signal, not [to] attack energy infrastructure of Ukraine."
"If they want energy ceasefire, we are open for this. Don't attack us. Don't kill our children. We will stop attack[ing] your diesel," he said, according to a show transcript.`,
    bodyJa: `President Donald Trump claimed Russia and Ukraine had agreed to an "energy ceasefire" as the countries trade blows on energy infrastructure, but it's unclear whether either side has agreed to a truce.
"Effective immediately, there is an ENERGY CEASEFIRE in the War between Russia and Ukraine. Both parties have agreed. Do not break it!" Trump said in a social media statement, without providing details about the alleged pact.
The White House referred CNBC to the social media post when asked for more information on the ceasefire.
Trump's statement on Truth Social comes as energy costs soar globally during the U.S. war with Iran. An energy truce between Ukraine and Russia could help to alleviate the oil and gas crunch ahead of winter.
In a social media post, Ukrainian President Volodymyr Zelenskyy said: "Ukraine supports the ceasefire, and it is important that Russia support it as well."
"We are awaiting details from the American side," Zelenskyy said. "For our part, Ukraine always FULLY supports steps toward de-escalation, the protection of lives, and the decisions needed to end the war and guarantee lasting peace."
Earlier in the week, Trump lashed out at Zelenskyy, suggesting he should be replaced and blaming him for high diesel costs that threaten to complicate the Republican Party's chances ahead of November's midterm election. Trump also said he had cut a deal with Russian President Vladimir Putin to bring Russian diesel to the market.
Zelenskyy said in response that Ukraine would only stop attacking oil refineries if Russia halted its attacks on Kyiv's electric grid.
Ceasefires between Russia and Ukraine have been consistently difficult to hold since Russia invaded its neighbor in 2022. Trump has repeatedly sought to end the conflict, but so far has been unsuccessful.
Zelenskyy on ABC's "This Week" earlier Sunday asked Trump to "give them [a] signal, not [to] attack energy infrastructure of Ukraine."
"If they want energy ceasefire, we are open for this. Don't attack us. Don't kill our children. We will stop attack[ing] your diesel," he said, according to a show transcript.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/10/11/trump-energy-ceasefire-russia-ukraine-zelenskyy.html",
    publishedAt: "2026-10-11T19:33:51+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "citroen-revives-the-2cv-for-an-electric-609ada39",
    title: "Citroen revives the 2CV for an electric age",
    titleJa: "Citroen revives the 2CV for an electric age",
    summaryJa: "The French firm is reinventing the classic model as carmakers come under pressure from Chinese rivals.",
    bodyOriginal: `Citroen revives the 2CV for an electric age
- Published
French carmaker Citroen has brought back its 2CV brand in a bid to boost sales of electric cars in a difficult market.
The new model, unveiled at the Paris Motor Show, is a small city runabout with retro styling which harks back to one of the company's most famous designs.
As a "concept car" intended to show Citroen's direction of travel, it is not yet ready to go on sale but the plan is to have a version in showrooms by 2028.
As they face mounting competition from Chinese manufacturers, Citroen and other European brands are exploiting their heritage as a means of selling modern motors.
Farmers’ favourite
Citroen chief executive Xavier Chardon described the new car as "a modern, ingenious and refreshing response to the mobility challenges of tomorrow".
The original Citroen 2CV was launched in 1948, as Europe was recovering from the ravages of World War Two. It was designed as a cheap, robust way for French farmers and country folk to get around.
The car had high wheel arches and soft suspension, letting it travel across a ploughed field or rough roads - as legend would have it, without breaking a tray of duck eggs.
Its high roof let drivers wear a hat at the wheel. It was easy to drive and simple to repair.
The car was so popular, it remained in production for more than 40 years. Over time, it went from being a utilitarian tool for the countryside to a cult classic, and a favourite of hippies and counter-culturalists.
Now, Citroen wants to draw on that heritage to sell an electric, small city car that is expected to sell for about £13,000.
The look of the new 2CV may well evolve as Citroen develops its design. But as it stands, it shares plenty of styling features with its famous predecessor.
The high, flared wheel arches, the tall, curved roof and the eye-like headlights are all reminders of the original "deux chevaux" or "two horses".
By using memories of an old car to sell a new one, Citroen is following a well-travelled road.
VW notoriously brought back the Beetle in the late 1990s, with limited success.
BMW's Minis have always carried styling designed to hark back to the very British original. Fiat has been selling a retro-styled Fiat 500 for the past two decades.
Retro-nostalgia
But the retro-nostalgia trend has accelerated recently, as carmakers have looked for ways to sell electric cars to sceptical consumers.
Citroen's French rival, Renault, has led the charge. It started with the Renault 5 E-Tech, which visually echoed the distinctive boxy styling of the original Renault 5, once an ever-present sight on French streets. It has since revived the Renault 4 and Twingo brands as well.
VW has the distinctive ID-Buzz minivan, a throwback to the classic T2 Transporter, while Ford is working on a new EV which is widely expected to be called the Fiesta.
Rachel Burgess, senior editor of Autocar magazine, thinks it is a strategy that makes perfect sense.
"It's a brilliant differentiator from all-new car brands", she says. "An older audience might remember the originals and feel warmly towards them, and a younger audience might find an appeal in the retro aspect."
Finding new ways to make cars appealing has become more important than ever, at a time when European manufacturers are facing growing competition from Chinese brands.
"Many in the industry believe the big automotive players in Europe…face a very serious existential threat from aggressive Chinese manufacturers," says David Leggett, automotive editor at Global Data.
In this hostile business environment, heritage and nostalgia could prove to be powerful weapons for more established brands, thinks automotive researcher and author Dr Paul Nieuwenhuis.
"In a world where a wave of credible decent quality Chinese EVs are hitting Europe, linking European designs back to their history while using the latest powertrain technology is something the Chinese cannot do," he says.
"The Chinese can establish new design trends, but there is limited history there."
But Leggett thinks Citroen will need more than a heady whiff of nostalgia to turn its new car into a best-seller.
"A reimagined Citroën 2CV should give a big nod to its ancestor - especially on price and design simplicity as well as visual cues," he says.
"But it also needs to be a credible modern electric car in terms of functionality and features, with widespread appeal."`,
    bodyJa: `Citroen revives the 2CV for an electric age
- Published
French carmaker Citroen has brought back its 2CV brand in a bid to boost sales of electric cars in a difficult market.
The new model, unveiled at the Paris Motor Show, is a small city runabout with retro styling which harks back to one of the company's most famous designs.
As a "concept car" intended to show Citroen's direction of travel, it is not yet ready to go on sale but the plan is to have a version in showrooms by 2028.
As they face mounting competition from Chinese manufacturers, Citroen and other European brands are exploiting their heritage as a means of selling modern motors.
Farmers’ favourite
Citroen chief executive Xavier Chardon described the new car as "a modern, ingenious and refreshing response to the mobility challenges of tomorrow".
The original Citroen 2CV was launched in 1948, as Europe was recovering from the ravages of World War Two. It was designed as a cheap, robust way for French farmers and country folk to get around.
The car had high wheel arches and soft suspension, letting it travel across a ploughed field or rough roads - as legend would have it, without breaking a tray of duck eggs.
Its high roof let drivers wear a hat at the wheel. It was easy to drive and simple to repair.
The car was so popular, it remained in production for more than 40 years. Over time, it went from being a utilitarian tool for the countryside to a cult classic, and a favourite of hippies and counter-culturalists.
Now, Citroen wants to draw on that heritage to sell an electric, small city car that is expected to sell for about £13,000.
The look of the new 2CV may well evolve as Citroen develops its design. But as it stands, it shares plenty of styling features with its famous predecessor.
The high, flared wheel arches, the tall, curved roof and the eye-like headlights are all reminders of the original "deux chevaux" or "two horses".
By using memories of an old car to sell a new one, Citroen is following a well-travelled road.
VW notoriously brought back the Beetle in the late 1990s, with limited success.
BMW's Minis have always carried styling designed to hark back to the very British original. Fiat has been selling a retro-styled Fiat 500 for the past two decades.
Retro-nostalgia
But the retro-nostalgia trend has accelerated recently, as carmakers have looked for ways to sell electric cars to sceptical consumers.
Citroen's French rival, Renault, has led the charge. It started with the Renault 5 E-Tech, which visually echoed the distinctive boxy styling of the original Renault 5, once an ever-present sight on French streets. It has since revived the Renault 4 and Twingo brands as well.
VW has the distinctive ID-Buzz minivan, a throwback to the classic T2 Transporter, while Ford is working on a new EV which is widely expected to be called the Fiesta.
Rachel Burgess, senior editor of Autocar magazine, thinks it is a strategy that makes perfect sense.
"It's a brilliant differentiator from all-new car brands", she says. "An older audience might remember the originals and feel warmly towards them, and a younger audience might find an appeal in the retro aspect."
Finding new ways to make cars appealing has become more important than ever, at a time when European manufacturers are facing growing competition from Chinese brands.
"Many in the industry believe the big automotive players in Europe…face a very serious existential threat from aggressive Chinese manufacturers," says David Leggett, automotive editor at Global Data.
In this hostile business environment, heritage and nostalgia could prove to be powerful weapons for more established brands, thinks automotive researcher and author Dr Paul Nieuwenhuis.
"In a world where a wave of credible decent quality Chinese EVs are hitting Europe, linking European designs back to their history while using the latest powertrain technology is something the Chinese cannot do," he says.
"The Chinese can establish new design trends, but there is limited history there."
But Leggett thinks Citroen will need more than a heady whiff of nostalgia to turn its new car into a best-seller.
"A reimagined Citroën 2CV should give a big nod to its ancestor - especially on price and design simplicity as well as visual cues," he says.
"But it also needs to be a credible modern electric car in terms of functionality and features, with widespread appeal."`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c620r33plgppo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-11T17:00:05+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b9db/live/c47fea70-c3f4-11f1-97a9-2d4b5e26e282.jpg",
    readTime: 10,
  },
  {
    id: "millions-of-americans-will-have-fewer-op-d26768af",
    title: "Millions of Americans will have fewer options during Medicare open enrollment this year",
    titleJa: "Millions of Americans will have fewer options during Medicare open enrollment this year",
    summaryJa: "There will be no Medicare Advantage plans in 181 counties in 2027, up from 67 in 2026.",
    bodyOriginal: `There will be no Medicare Advantage plans in 181 counties in 2027, up from 67 in 2026.`,
    bodyJa: `There will be no Medicare Advantage plans in 181 counties in 2027, up from 67 in 2026.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/millions-of-americans-will-have-fewer-options-during-medicare-open-enrollment-this-year-6b56698b?mod=mw_rss_topstories",
    publishedAt: "2026-10-11T16:35:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-95277204",
    readTime: 2,
  },
  {
    id: "ukraine-strikes-yandex-data-centre-in-th-efb2c71a",
    title: "Ukraine strikes Yandex data centre in third attack on Russian tech giant",
    titleJa: "Ukraine strikes Yandex data centre in third attack on Russian tech giant",
    summaryJa: "It is the third time this week that Ukraine has targeted Russian tech giant Yandex, forcing the company to suspend its operations.",
    bodyOriginal: `Ukraine strikes Yandex data centre in third attack on Russian tech giant
- Published
Yandex has been forced to pause its operations at a data centre near Moscow after the facility was damaged in a Ukrainian drone strike - the third attack on the Russian tech giant's sites this week.
The company - dubbed "Russia's Google" - said no one was injured at the centre in Vladimir, east of the capital, but some of its services were unavailable to users.
Earlier this week, Yandex said it was struggling to maintain its services after two of its five data centres were hit in Ukrainian strikes.
Both Russia and Ukraine have stepped up attacks on infrastructure in recent months as the war between them continues in its fifth year following Russia's full-scale invasion.
Kyiv said it was targeting places that provide revenue streams for Moscow's war machine, and that the attacks could force Russia to divert its resources to repair the damage at Yandex.
Sunday's attack came hours after US President Donald Trump warned that Ukraine should "damn well stop" attacking Russia's oil refineries so Moscow could release more diesel to the global market - a deal that has drawn criticism from Europe and sparked a diplomatic row with Ukraine's President Volodymyr Zelensky.
Yandex confirmed on Telegram that its data centre in Vladimir had been damaged and that operations had been "completely suspended", although it said it was working to restore connectivity.
The other strikes against Yandex facilities were on Thursday in Sasovo and Friday in in Kaluga, south-west of Moscow, causing problems for some of its services, such as its AI chatbot and smart home devices.
The tech company - which also runs a food-ordering and taxi app used by tens of millions of people - said at the time that its data centres were critical for the normal operation of its services, and that it was "very difficult to predict" when they would be back online.
Meanwhile, Russian strikes on Ukraine have continued through the weekend.
The State Emergency Service of Ukraine said six people were injured in Russian attacks overnight on four districts in its south-eastern Dnipropetrovsk region.
On Saturday, at least 20 people including four children were killed in Russian attacks on Zaporizhzhia, local officials confirmed.
Russia has previously also struck Ukrainian data centres, causing internet outages and prompting some firms to move their servers abroad.
Related topics
- Published1 day ago`,
    bodyJa: `Ukraine strikes Yandex data centre in third attack on Russian tech giant
- Published
Yandex has been forced to pause its operations at a data centre near Moscow after the facility was damaged in a Ukrainian drone strike - the third attack on the Russian tech giant's sites this week.
The company - dubbed "Russia's Google" - said no one was injured at the centre in Vladimir, east of the capital, but some of its services were unavailable to users.
Earlier this week, Yandex said it was struggling to maintain its services after two of its five data centres were hit in Ukrainian strikes.
Both Russia and Ukraine have stepped up attacks on infrastructure in recent months as the war between them continues in its fifth year following Russia's full-scale invasion.
Kyiv said it was targeting places that provide revenue streams for Moscow's war machine, and that the attacks could force Russia to divert its resources to repair the damage at Yandex.
Sunday's attack came hours after US President Donald Trump warned that Ukraine should "damn well stop" attacking Russia's oil refineries so Moscow could release more diesel to the global market - a deal that has drawn criticism from Europe and sparked a diplomatic row with Ukraine's President Volodymyr Zelensky.
Yandex confirmed on Telegram that its data centre in Vladimir had been damaged and that operations had been "completely suspended", although it said it was working to restore connectivity.
The other strikes against Yandex facilities were on Thursday in Sasovo and Friday in in Kaluga, south-west of Moscow, causing problems for some of its services, such as its AI chatbot and smart home devices.
The tech company - which also runs a food-ordering and taxi app used by tens of millions of people - said at the time that its data centres were critical for the normal operation of its services, and that it was "very difficult to predict" when they would be back online.
Meanwhile, Russian strikes on Ukraine have continued through the weekend.
The State Emergency Service of Ukraine said six people were injured in Russian attacks overnight on four districts in its south-eastern Dnipropetrovsk region.
On Saturday, at least 20 people including four children were killed in Russian attacks on Zaporizhzhia, local officials confirmed.
Russia has previously also struck Ukrainian data centres, causing internet outages and prompting some firms to move their servers abroad.
Related topics
- Published1 day ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cw0k0g57mk3zo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-11T14:38:10+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/92b1/live/fca86430-c56c-11f1-a64c-550be9e3c66b.jpg",
    readTime: 6,
  },
  {
    id: "we-re-about-to-get-a-huge-read-on-whethe-8bf1e3f1",
    title: "We’re about to get a huge read on whether earnings can keep propping up the stock market",
    titleJa: "We’re about to get a huge read on whether earnings can keep propping up the stock market",
    summaryJa: "High hopes for third-quarter earnings are outweighing concerns around interest rates and oil prices — but one expert warns markets have gotten “extremely complacent.”",
    bodyOriginal: `High hopes for third-quarter earnings are outweighing concerns around interest rates and oil prices — but one expert warns markets have gotten “extremely complacent.”`,
    bodyJa: `High hopes for third-quarter earnings are outweighing concerns around interest rates and oil prices — but one expert warns markets have gotten “extremely complacent.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/were-about-to-get-a-huge-read-on-whether-earnings-can-keep-propping-up-the-stock-market-459b565b?mod=mw_rss_topstories",
    publishedAt: "2026-10-11T14:00:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-77418112",
    readTime: 2,
  },
  {
    id: "pope-leo-to-have-surgery-after-lump-foun-03457503",
    title: "Pope Leo to have surgery after lump found on lung",
    titleJa: "Pope Leo to have surgery after lump found on lung",
    summaryJa: "Pope Leo to have surgery after lump found on lung- Published",
    bodyOriginal: `Pope Leo to have surgery after lump found on lung
- Published
Pope Leo XIV has announced he will be operated "in the coming days" after a nodule was found on his lung during a medical check up.
"The doctors found an early, well-localised nodule on my lung," he told the public during his weekly Sunday prayers in St Peter's Square in Rome.
The 71-year-old pontiff said his medical team "believe it would be right to intervene" and he had agreed to the operation.
Pope Leo reassured pilgrims that the mass was "well-contained" and caught "at an early stage".
He concluded his Angelus prayer by thanking everyone for their "spiritual closeness" and said he entrusted himself to their prayers.
Holy See Press Office spokesperson Matteo Bruni told the media that "the operation is scheduled for the first days of next week".
Bruni added that the Pope is expected to take about a week to recover.
Vatican News, the Holy See's news portal, said the operation will take place at Gemelli Hospital in Rome.
The hospital set up a special Papal suite following the failed assassination attempt on Pope John Paul II's life in May 1981, which is still in use today.
Italy's Prime Minister Giorgia Meloni expressed her "personal solidarity" to the Pope in a post on X as he "faces the ordeal ahead in the coming days".
Pope Leo, born Robert Francis Provost, succeeded Pope Francis in 2025. He is the 267th occupant of the throne of St Peter – and is the first American.
He was ordained in 1982 and spent years as a missionary in Peru, where he is remembered as a figure who worked with marginalised communities.
During Sunday's service, the Pope confirmed his visit to Uruguay, Argentina and Peru in November will still go ahead.
According to the National Health Service, a lung nodule is a small lump of tissue that is usually detected following an X-ray or CT scan of the chest.
Most nodules are do not cause other symptoms.
Related topics
- Published25 September`,
    bodyJa: `Pope Leo to have surgery after lump found on lung
- Published
Pope Leo XIV has announced he will be operated "in the coming days" after a nodule was found on his lung during a medical check up.
"The doctors found an early, well-localised nodule on my lung," he told the public during his weekly Sunday prayers in St Peter's Square in Rome.
The 71-year-old pontiff said his medical team "believe it would be right to intervene" and he had agreed to the operation.
Pope Leo reassured pilgrims that the mass was "well-contained" and caught "at an early stage".
He concluded his Angelus prayer by thanking everyone for their "spiritual closeness" and said he entrusted himself to their prayers.
Holy See Press Office spokesperson Matteo Bruni told the media that "the operation is scheduled for the first days of next week".
Bruni added that the Pope is expected to take about a week to recover.
Vatican News, the Holy See's news portal, said the operation will take place at Gemelli Hospital in Rome.
The hospital set up a special Papal suite following the failed assassination attempt on Pope John Paul II's life in May 1981, which is still in use today.
Italy's Prime Minister Giorgia Meloni expressed her "personal solidarity" to the Pope in a post on X as he "faces the ordeal ahead in the coming days".
Pope Leo, born Robert Francis Provost, succeeded Pope Francis in 2025. He is the 267th occupant of the throne of St Peter – and is the first American.
He was ordained in 1982 and spent years as a missionary in Peru, where he is remembered as a figure who worked with marginalised communities.
During Sunday's service, the Pope confirmed his visit to Uruguay, Argentina and Peru in November will still go ahead.
According to the National Health Service, a lung nodule is a small lump of tissue that is usually detected following an X-ray or CT scan of the chest.
Most nodules are do not cause other symptoms.
Related topics
- Published25 September`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6m2dnngvw8xo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-10-11T12:32:23+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/13bb/live/c2ac8480-c569-11f1-bd33-db1f7eaf2b30.jpg",
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
