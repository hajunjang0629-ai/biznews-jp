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
    id: "from-supermarket-fridges-to-passenger-fl-8694ab5e",
    title: "From supermarket fridges to passenger flights, a wave of threats is testing Europe's defenses",
    titleJa: "From supermarket fridges to passenger flights, a wave of threats is testing Europe's defenses",
    summaryJa: "Cyberattacks on fridges in supermarkets and a wave of bomb threats are testing Europe’s ability to withstand disruption to crucial infrastructure.",
    bodyOriginal: `Cyberattacks, bomb threats against passenger flights, civil unrest and suspected acts of sabotage across Europe have raised questions about the continent's resilience — and how prepared it is to defend itself against modern security threats.
Hackers remotely manipulated refrigeration systems at supermarkets across Europe last week, forcing retailers to discard spoiled food and exposing vulnerabilities in everyday infrastructure.
French blood-bank refrigeration systems were subsequently targeted in what appeared to be a similar incident, while a wave of suspected hoax bomb threats disrupted dozens of flights across the continent, forcing diversions and, in some cases, fighter jet escorts.
The week culminated with bomb threats targeting European news outlets, including the U.K.'s Sky News and Irish public broadcaster RTÉ.
The incidents come against a backdrop of heightened geopolitical tensions and domestic unrest across parts of Europe, with civilian infrastructure potentially becoming an increasingly attractive target for hostile actors.
While authorities have not established who was behind the attacks or whether they were connected, defense and security experts warn that disruption to everyday services can have consequences far beyond the immediate economic damage.
If Russia were responsible, such attacks could be intended to demonstrate the costs of Europe's continued support for Ukraine, said Sidharth Kaushal, a research fellow at the Royal United Services Institute, or RUSI.
"I think it's more about cost imposition," Kaushal told CNBC. "Convincing the European political leadership that the costs of a war can come home to them."
Russia didn't immediately respond to a CNBC request for comment.
Cyberattacks
On Monday, supermarkets in Belgium, Luxembourg, Sweden and the Netherlands found that refrigeration systems had been set to as much as 50 degrees Celsius, or 122 degrees Fahrenheit, affecting retailers including Ahold Delhaize, IKEA, Colruyt Group and Carrefour.
It followed an October cyberattack that targeted hundreds of French supermarkets, causing fires, fridges to overheat and food to spoil. The incidents highlighted vulnerabilities in food-supply infrastructure.
They also highlight the role of private companies in national resilience, as internet-connected equipment can be exploited to cause physical disruption.
Fredrik Blix, cybersecurity expert at Visente and associate professor at Stockholm University, told CNBC that the supermarket attacks required very little technical sophistication since vulnerable refrigeration control systems were connected directly to the public internet, allowing potential attackers to find and exploit them.
"These attacks, they don't really require any specific advanced knowledge to carry out," he said, adding that some systems were protected only by default passwords or easily guessed credentials.
"This is why this is so cheap to do," Blix said, warning that the publicity surrounding the incidents could encourage copycat attacks. "Anyone can do it, and it does not require any resources from a country or anything like that."
Cyberattacks have become more common over the past decade as societies have become more digital and vulnerable systems have become easier to access, Blix said. However, he noted that mounting geopolitical tensions have also made European countries more alert to potential hybrid warfare threats, leading to scrutiny by both governments and media.
While Blix acknowledged the possibility of a state or state-backed actor being behind the attacks, he said the more likely scenario is someone testing the boundaries and "having some fun."
Kaushal said the incidents should be viewed within the larger context of suspected sabotage and hybrid threats across Europe, including damage to undersea cables in the Baltic Sea.
"If this was an event in isolation, one might say 'okay, we should view it on its own merits,' but when you view it in the backdrop of all of that, it becomes less clear," he said, also citing death threats against European defense executives and a bomb placed on a DHL aircraft in 2024.
Can Europe defend itself?
European governments are contending with greater uncertainty over U.S. security guarantees after decades of underinvestment in defense, while facing a rise in unconventional but potentially devastating threats.
Hybrid warfare combines tactics such as cyberattacks, sabotage and disinformation to destabilize adversaries without triggering open military conflict.
Countries' abilities to withstand hybrid threats vary substantially across the continent, according to Kaushal. While Finland and Sweden have well-developed civilian defense programs reflecting their Cold War experience, much of Europe's infrastructure was built around economic efficiency rather than defense needs.
"As one goes further west in Europe, the level of preparation, both against hybrid attacks, but also just simple missile attacks of the kind that we've seen in Ukraine, is far less great," he said.
"Every attack generates a bit of resilience," he said, citing NATO's increased focus on threats to underwater cables and gas pipelines after the 2022 Nord Stream sabotage.
We've been slow in adjusting to a new reality...We still tend to conceptually divide between peace and wartime, and that is no longer the case because we're not at war, but we're also not in peacetime.Oana Popescu-ZamfirRUSI senior research fellow
Oana Popescu-Zamfir, a senior research fellow specializing in European security at RUSI, said the recent incidents showed Europe had lagged in "preparing for something that we have known would be coming."
"We've been slow in adjusting to a new reality," she said. "We still tend to conceptually divide between peace and wartime, and that is no longer the case because we're not at war, but we're also not in peace time."
She said Europe was likely to face sustained hybrid attacks designed to achieve military objectives without conventional military force.
Popescu-Zamfir said Russia could draw on networks of proxies in Europe, some directly controlled and others more loosely coordinated, making responsibility difficult to trace directly to the Kremlin.
She told CNBC that "the damage that can be done is huge" in targeted attacks on internet-connected systems, citing the potential disruption of blood reserves.
The attacks are not a "piece of cake for Russia to carry out, but they're also not rocket science," she said, adding that they "can do tremendous damage in concrete terms and in terms of the psychological impact on our societies and the feeling that we are unprotected."
Blix said companies can take relatively straightforward steps to reduce their exposure.
"These are basic cyber hygiene things... You should not be allowed to connect industrial control systems and this kind of operational technology directly online without any proper security around it," he said.
Responsibility is split among product manufacturers, maintenance providers and grocery chains, making accountability unclear as each points to the others.
Blix said maintenance companies sometimes prioritize convenience by enabling remote access despite manufacturers' security guidance, while retailers may fail to enforce adequate cybersecurity standards among suppliers.
"What worries me is that we don't really do anything," Blix said, adding that "we are shuffling a lot of papers" and "doing a lot of risk assessments" but failing to take meaningful action.
Economic pressure
Europe has also seen widespread unrest in recent months, adding political pressure as households grapple with high living costs.
Domestic political and economic tensions can also give foreign adversaries opportunities to deepen divisions, said Alexander Anderson, president and director of policy at the Centre for International Security and Economic Strategy.
He told CNBC that Russian and potentially Chinese influence operations may work to amplify those divisions.
"But we should be careful not to dismiss legitimate domestic grievances as the product of foreign interference," he said. "Doing so risks misunderstanding both the causes of political instability and the methods through which hostile actors seek to exploit it."
Weeks of nationwide protests, riots and strikes have increased pressure on the French government, complicating efforts to rein in public finances and deepening existing political divisions.
In Spain, demonstrations and a parliamentary impasse over the housing crisis led Prime Minister Pedro Sanchez to call a snap election. The vote is scheduled for Nov. 29. The far-right Vox party is expected to make gains, putting Sanchez's left-leaning government at risk of losing power.
Germany, Italy, Portugal and Albania have also seen unrest over rising living costs in recent weeks.
On Friday, protesters in Amsterdam tried to enter a Microsoft data center, Reuters reported.
Meanwhile, elevated energy prices, persistent inflation, sluggish growth and large budget deficits are pushing up borrowing costs and leaving governments with less room to support struggling households.`,
    bodyJa: `Cyberattacks, bomb threats against passenger flights, civil unrest and suspected acts of sabotage across Europe have raised questions about the continent's resilience — and how prepared it is to defend itself against modern security threats.
Hackers remotely manipulated refrigeration systems at supermarkets across Europe last week, forcing retailers to discard spoiled food and exposing vulnerabilities in everyday infrastructure.
French blood-bank refrigeration systems were subsequently targeted in what appeared to be a similar incident, while a wave of suspected hoax bomb threats disrupted dozens of flights across the continent, forcing diversions and, in some cases, fighter jet escorts.
The week culminated with bomb threats targeting European news outlets, including the U.K.'s Sky News and Irish public broadcaster RTÉ.
The incidents come against a backdrop of heightened geopolitical tensions and domestic unrest across parts of Europe, with civilian infrastructure potentially becoming an increasingly attractive target for hostile actors.
While authorities have not established who was behind the attacks or whether they were connected, defense and security experts warn that disruption to everyday services can have consequences far beyond the immediate economic damage.
If Russia were responsible, such attacks could be intended to demonstrate the costs of Europe's continued support for Ukraine, said Sidharth Kaushal, a research fellow at the Royal United Services Institute, or RUSI.
"I think it's more about cost imposition," Kaushal told CNBC. "Convincing the European political leadership that the costs of a war can come home to them."
Russia didn't immediately respond to a CNBC request for comment.
Cyberattacks
On Monday, supermarkets in Belgium, Luxembourg, Sweden and the Netherlands found that refrigeration systems had been set to as much as 50 degrees Celsius, or 122 degrees Fahrenheit, affecting retailers including Ahold Delhaize, IKEA, Colruyt Group and Carrefour.
It followed an October cyberattack that targeted hundreds of French supermarkets, causing fires, fridges to overheat and food to spoil. The incidents highlighted vulnerabilities in food-supply infrastructure.
They also highlight the role of private companies in national resilience, as internet-connected equipment can be exploited to cause physical disruption.
Fredrik Blix, cybersecurity expert at Visente and associate professor at Stockholm University, told CNBC that the supermarket attacks required very little technical sophistication since vulnerable refrigeration control systems were connected directly to the public internet, allowing potential attackers to find and exploit them.
"These attacks, they don't really require any specific advanced knowledge to carry out," he said, adding that some systems were protected only by default passwords or easily guessed credentials.
"This is why this is so cheap to do," Blix said, warning that the publicity surrounding the incidents could encourage copycat attacks. "Anyone can do it, and it does not require any resources from a country or anything like that."
Cyberattacks have become more common over the past decade as societies have become more digital and vulnerable systems have become easier to access, Blix said. However, he noted that mounting geopolitical tensions have also made European countries more alert to potential hybrid warfare threats, leading to scrutiny by both governments and media.
While Blix acknowledged the possibility of a state or state-backed actor being behind the attacks, he said the more likely scenario is someone testing the boundaries and "having some fun."
Kaushal said the incidents should be viewed within the larger context of suspected sabotage and hybrid threats across Europe, including damage to undersea cables in the Baltic Sea.
"If this was an event in isolation, one might say 'okay, we should view it on its own merits,' but when you view it in the backdrop of all of that, it becomes less clear," he said, also citing death threats against European defense executives and a bomb placed on a DHL aircraft in 2024.
Can Europe defend itself?
European governments are contending with greater uncertainty over U.S. security guarantees after decades of underinvestment in defense, while facing a rise in unconventional but potentially devastating threats.
Hybrid warfare combines tactics such as cyberattacks, sabotage and disinformation to destabilize adversaries without triggering open military conflict.
Countries' abilities to withstand hybrid threats vary substantially across the continent, according to Kaushal. While Finland and Sweden have well-developed civilian defense programs reflecting their Cold War experience, much of Europe's infrastructure was built around economic efficiency rather than defense needs.
"As one goes further west in Europe, the level of preparation, both against hybrid attacks, but also just simple missile attacks of the kind that we've seen in Ukraine, is far less great," he said.
"Every attack generates a bit of resilience," he said, citing NATO's increased focus on threats to underwater cables and gas pipelines after the 2022 Nord Stream sabotage.
We've been slow in adjusting to a new reality...We still tend to conceptually divide between peace and wartime, and that is no longer the case because we're not at war, but we're also not in peacetime.Oana Popescu-ZamfirRUSI senior research fellow
Oana Popescu-Zamfir, a senior research fellow specializing in European security at RUSI, said the recent incidents showed Europe had lagged in "preparing for something that we have known would be coming."
"We've been slow in adjusting to a new reality," she said. "We still tend to conceptually divide between peace and wartime, and that is no longer the case because we're not at war, but we're also not in peace time."
She said Europe was likely to face sustained hybrid attacks designed to achieve military objectives without conventional military force.
Popescu-Zamfir said Russia could draw on networks of proxies in Europe, some directly controlled and others more loosely coordinated, making responsibility difficult to trace directly to the Kremlin.
She told CNBC that "the damage that can be done is huge" in targeted attacks on internet-connected systems, citing the potential disruption of blood reserves.
The attacks are not a "piece of cake for Russia to carry out, but they're also not rocket science," she said, adding that they "can do tremendous damage in concrete terms and in terms of the psychological impact on our societies and the feeling that we are unprotected."
Blix said companies can take relatively straightforward steps to reduce their exposure.
"These are basic cyber hygiene things... You should not be allowed to connect industrial control systems and this kind of operational technology directly online without any proper security around it," he said.
Responsibility is split among product manufacturers, maintenance providers and grocery chains, making accountability unclear as each points to the others.
Blix said maintenance companies sometimes prioritize convenience by enabling remote access despite manufacturers' security guidance, while retailers may fail to enforce adequate cybersecurity standards among suppliers.
"What worries me is that we don't really do anything," Blix said, adding that "we are shuffling a lot of papers" and "doing a lot of risk assessments" but failing to take meaningful action.
Economic pressure
Europe has also seen widespread unrest in recent months, adding political pressure as households grapple with high living costs.
Domestic political and economic tensions can also give foreign adversaries opportunities to deepen divisions, said Alexander Anderson, president and director of policy at the Centre for International Security and Economic Strategy.
He told CNBC that Russian and potentially Chinese influence operations may work to amplify those divisions.
"But we should be careful not to dismiss legitimate domestic grievances as the product of foreign interference," he said. "Doing so risks misunderstanding both the causes of political instability and the methods through which hostile actors seek to exploit it."
Weeks of nationwide protests, riots and strikes have increased pressure on the French government, complicating efforts to rein in public finances and deepening existing political divisions.
In Spain, demonstrations and a parliamentary impasse over the housing crisis led Prime Minister Pedro Sanchez to call a snap election. The vote is scheduled for Nov. 29. The far-right Vox party is expected to make gains, putting Sanchez's left-leaning government at risk of losing power.
Germany, Italy, Portugal and Albania have also seen unrest over rising living costs in recent weeks.
On Friday, protesters in Amsterdam tried to enter a Microsoft data center, Reuters reported.
Meanwhile, elevated energy prices, persistent inflation, sluggish growth and large budget deficits are pushing up borrowing costs and leaving governments with less room to support struggling households.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/09/europe-fridge-hacks-bomb-threats-cyberattack.html",
    publishedAt: "2026-11-09T05:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "china-wholesale-inflation-hits-highest-i-fd60b30c",
    title: "China wholesale inflation hits highest in more than four years as consumer measure slows",
    titleJa: "China wholesale inflation hits highest in more than four years as consumer measure slows",
    summaryJa: "The PPI for October came in at 5.7%, compared to the 5.3% expected by economists polled by Reuters.",
    bodyOriginal: `Producer prices in China grew at the fastest rate since June 2022, accelerating for the third month in a row.
The PPI for October came in at 5.7%, compared to the 5.3% expected by economists polled by Reuters. The increase was driven by a sharp rise in prices in the mining and raw materials industries.
The increase was driven by very strong external demand, Zhang Zhiwei, president and chief economist at Pinpoint Asset Management, told CNBC's "Squawk Box Asia."
Consumer inflation in China slowed to 0.7% in October, its first deceleration after two straight months of increases.
The figure missed expectations of a 0.8% rise from economists polled by Reuters, and was lower than the 0.9% seen in September.
Core inflation, which strips out food and energy prices, came in at 0.8%, down from the 1% seen in the month before.
The rise in consumer prices were still held up by prices of gasoline, which was the largest contributor to the increase in prices, but this was offset by a sharper than expected fall in food prices, according to Dong Lijuan, chief statistician of the urban division at China's National Bureau of Statistics.
The Chinese economy has shown some signs of expansion recently. It grew faster than expected in the third quarter, and September saw a sharp beat in retail sales.
The mainland Chinese CSI 300 index gained 0.56% after the data release.
Pinpoint's Zhang said that domestic demand has been rather weak due to the property market, and this is a key reason why inflation is not picking up in China
"There's no clear sign of stabilization [in that sector] yet," he said, adding this was weighing on the household consumer confidence and local government revenue.
"So the the overall economic momentum has been weak and hasn't really seen [a] clear sign of recovery," Zhang explained.`,
    bodyJa: `Producer prices in China grew at the fastest rate since June 2022, accelerating for the third month in a row.
The PPI for October came in at 5.7%, compared to the 5.3% expected by economists polled by Reuters. The increase was driven by a sharp rise in prices in the mining and raw materials industries.
The increase was driven by very strong external demand, Zhang Zhiwei, president and chief economist at Pinpoint Asset Management, told CNBC's "Squawk Box Asia."
Consumer inflation in China slowed to 0.7% in October, its first deceleration after two straight months of increases.
The figure missed expectations of a 0.8% rise from economists polled by Reuters, and was lower than the 0.9% seen in September.
Core inflation, which strips out food and energy prices, came in at 0.8%, down from the 1% seen in the month before.
The rise in consumer prices were still held up by prices of gasoline, which was the largest contributor to the increase in prices, but this was offset by a sharper than expected fall in food prices, according to Dong Lijuan, chief statistician of the urban division at China's National Bureau of Statistics.
The Chinese economy has shown some signs of expansion recently. It grew faster than expected in the third quarter, and September saw a sharp beat in retail sales.
The mainland Chinese CSI 300 index gained 0.56% after the data release.
Pinpoint's Zhang said that domestic demand has been rather weak due to the property market, and this is a key reason why inflation is not picking up in China
"There's no clear sign of stabilization [in that sector] yet," he said, adding this was weighing on the household consumer confidence and local government revenue.
"So the the overall economic momentum has been weak and hasn't really seen [a] clear sign of recovery," Zhang explained.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/09/china-wholesale-inflation-rises-consumer.html",
    publishedAt: "2026-11-09T02:50:22+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "my-life-could-be-cut-short-i-m-55-marri-aee705ff",
    title: "‘My life could be cut short’: I’m 55, married and have a brain tumor. Should I splash out on a $210,000 Porsche?",
    titleJa: "‘My life could be cut short’: I’m 55, married and have a brain tumor. Should I splash out on a $210,000 Porsche?",
    summaryJa: "“I also want to preserve the opportunity to leave a meaningful legacy for my two sons.”",
    bodyOriginal: `“I also want to preserve the opportunity to leave a meaningful legacy for my two sons.”`,
    bodyJa: `“I also want to preserve the opportunity to leave a meaningful legacy for my two sons.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-life-could-be-cut-short-im-55-married-with-4-3-million-and-have-a-brain-tumor-should-i-buy-a-210-000-custom-porsche-ed825ada?mod=mw_rss_topstories",
    publishedAt: "2026-11-09T01:21:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-49119290",
    readTime: 2,
  },
  {
    id: "nvidia-launches-investigation-into-ceo-s-687e31f1",
    title: "Nvidia launches investigation into CEO's affair with suspected Chinese spy",
    titleJa: "Nvidia launches investigation into CEO's affair with suspected Chinese spy",
    summaryJa: "Jensen Huang also admitted to having been \"unfaithful\" to his wife and says he will cooperate with a security investigation.",
    bodyOriginal: `Nvidia launches investigation into CEO's affair with suspected Chinese spy
- Published
US tech giant Nvidia has opened an independent investigation following reports its CEO Jensen Huang had a relationship with a suspected Chinese spy.
The company, one of the most valuable in the world, said its board had no reason to believe the company's secrets or national security were compromised, adding that the CEO was committed to continuing to lead the company.
Separately, Jensen Huang admitted to having been "unfaithful" to his wife and apologised for hurting her and their children.
US intelligence officials believed that Chinese businesswoman Alice Huang, who had a close relationship with Jensen Huang, was a spy for Beijing, according to a New York Times report.
Jensen Huang said he took "full responsibility" for what he did, adding that he had fallen short of his responsibilities to Nvidia's employees, board and shareholders.
Nvidia is one of the world's largest companies and seen as central to making the hardware for emerging AI technologies, and Jensen Huang has been in charge of it for more than 30 years.
He said: "I was unfaithful to my wife. My actions hurt her and our children. There is no excuse for what I did. I am deeply sorry."
His statement continued: "Regarding the national security concerns raised in news reports, Nvidia's Board of Directors has initiated an independent investigation. I support the investigation and will cooperate fully.
"I love our country and our company. I am committed to protecting Nvidia and supporting America's national security. I am proud and grateful to be an American."
A separate statement issued by Nvidia's board of directors said it would begin an investigation in "light of recent reporting that founder and CEO Jensen Huang has been the target of a foreign intelligence effort".
It continued: "The Board prioritises US national and economic security, which is paramount to the interests of Nvidia and its shareholders.
"While the Board has no reason to believe that either national security or Nvidia secrets were compromised, the Board's inquiry will examine all available information."
US President Donald Trump said he had not spoken to the Nvidia boss since news of the investigation emerged.
"I just know he's a fine person, but you never know what's going on," Trump told reporters, adding that he had "done an amazing job for our country".
The New York Times reported in late October that Trump had been briefed last year on intelligence alleging Alice Huang was spying on China's behalf.
Asked by reporters on Sunday whether he now wished he had "acted on the intelligence" at the time, Trump responded: "No, I don't think so. I think he's an honourable guy."
China has previously rejected allegations of an espionage operation targeting the Nvidia chief, describing the claims as "groundless speculation".
Jensen Huang rescued Nvidia from bankruptcy on more than one occasion, and he took risks on AI a long time before the rest of the world did.
His decision to make Nvidia chips, originally designed for gaming, become the best in the business for AI development, has now paid off in spades and the company is worth trillions.
This is a big blow for a man who is renowned for being a workaholic, a perfectionist and someone who expects incredibly high standards from his staff.
Alice Huang, who is of no relation to Jensen Huang, is linked to Singapore-based data centre firm Megaspeed.
The company told the New York Times last month its current leadership took the allegations seriously and had appointed external legal advisers to conduct an internal investigation.
Nvidia is a central player in AI infrastructure, providing chips to leading AI model developers including OpenAI and Meta.
The microchip manufacturer is worth some $4.5 trillion, making it one of the most valuable companies ever.
US intelligence agencies had been monitoring Alice Huang and concluded that she was acting on behalf of the Chinese government, according to unnamed sources cited by the New York Times.
Surveillance reportedly revealed communications between Alice Huang and an American citizen, who was subsequently identified as Jensen Huang through a process known as "unmasking".
It remains unclear what information Alice Huang – who is also known as Huang Le – allegedly passed to Beijing, how valuable it was, or when she is believed to have begun gathering intelligence.
Alice Huang did not respond to the paper's request for comment.
Last week, members of Congress wrote to Jensen Huang, asking him to appear before them in the light of the reported relationship.
Three House Republican committee leaders asked the CEO to appear later in the month, to talk about Nvidia's "security protocols against foreign adversary espionage" given his reported relationship with Alice Huang.
"Recent reports raise significant national security concerns regarding the PRC's [China's] access to sensitive US technology and information.
"The issue of PRC infiltration and access to cutting-edge US technology is core to the investigative work of our three committees this Congress," the letter said.
Nvidia's AI chips have been a major focus of the rivalry between the US and China, and Washington has previously imposed controls on where its advanced products can be sold.
The H200, Nvidia's second most advanced semiconductor, had previously been restricted by Washington over concerns that it would give China's technology industry an edge over the US.
In January, the Trump administration said it would allow the company to sell its H200 chips to Chinese customers under certain conditions.
Related topics
- Published21 May
- Published25 February
- Published30 October`,
    bodyJa: `Nvidia launches investigation into CEO's affair with suspected Chinese spy
- Published
US tech giant Nvidia has opened an independent investigation following reports its CEO Jensen Huang had a relationship with a suspected Chinese spy.
The company, one of the most valuable in the world, said its board had no reason to believe the company's secrets or national security were compromised, adding that the CEO was committed to continuing to lead the company.
Separately, Jensen Huang admitted to having been "unfaithful" to his wife and apologised for hurting her and their children.
US intelligence officials believed that Chinese businesswoman Alice Huang, who had a close relationship with Jensen Huang, was a spy for Beijing, according to a New York Times report.
Jensen Huang said he took "full responsibility" for what he did, adding that he had fallen short of his responsibilities to Nvidia's employees, board and shareholders.
Nvidia is one of the world's largest companies and seen as central to making the hardware for emerging AI technologies, and Jensen Huang has been in charge of it for more than 30 years.
He said: "I was unfaithful to my wife. My actions hurt her and our children. There is no excuse for what I did. I am deeply sorry."
His statement continued: "Regarding the national security concerns raised in news reports, Nvidia's Board of Directors has initiated an independent investigation. I support the investigation and will cooperate fully.
"I love our country and our company. I am committed to protecting Nvidia and supporting America's national security. I am proud and grateful to be an American."
A separate statement issued by Nvidia's board of directors said it would begin an investigation in "light of recent reporting that founder and CEO Jensen Huang has been the target of a foreign intelligence effort".
It continued: "The Board prioritises US national and economic security, which is paramount to the interests of Nvidia and its shareholders.
"While the Board has no reason to believe that either national security or Nvidia secrets were compromised, the Board's inquiry will examine all available information."
US President Donald Trump said he had not spoken to the Nvidia boss since news of the investigation emerged.
"I just know he's a fine person, but you never know what's going on," Trump told reporters, adding that he had "done an amazing job for our country".
The New York Times reported in late October that Trump had been briefed last year on intelligence alleging Alice Huang was spying on China's behalf.
Asked by reporters on Sunday whether he now wished he had "acted on the intelligence" at the time, Trump responded: "No, I don't think so. I think he's an honourable guy."
China has previously rejected allegations of an espionage operation targeting the Nvidia chief, describing the claims as "groundless speculation".
Jensen Huang rescued Nvidia from bankruptcy on more than one occasion, and he took risks on AI a long time before the rest of the world did.
His decision to make Nvidia chips, originally designed for gaming, become the best in the business for AI development, has now paid off in spades and the company is worth trillions.
This is a big blow for a man who is renowned for being a workaholic, a perfectionist and someone who expects incredibly high standards from his staff.
Alice Huang, who is of no relation to Jensen Huang, is linked to Singapore-based data centre firm Megaspeed.
The company told the New York Times last month its current leadership took the allegations seriously and had appointed external legal advisers to conduct an internal investigation.
Nvidia is a central player in AI infrastructure, providing chips to leading AI model developers including OpenAI and Meta.
The microchip manufacturer is worth some $4.5 trillion, making it one of the most valuable companies ever.
US intelligence agencies had been monitoring Alice Huang and concluded that she was acting on behalf of the Chinese government, according to unnamed sources cited by the New York Times.
Surveillance reportedly revealed communications between Alice Huang and an American citizen, who was subsequently identified as Jensen Huang through a process known as "unmasking".
It remains unclear what information Alice Huang – who is also known as Huang Le – allegedly passed to Beijing, how valuable it was, or when she is believed to have begun gathering intelligence.
Alice Huang did not respond to the paper's request for comment.
Last week, members of Congress wrote to Jensen Huang, asking him to appear before them in the light of the reported relationship.
Three House Republican committee leaders asked the CEO to appear later in the month, to talk about Nvidia's "security protocols against foreign adversary espionage" given his reported relationship with Alice Huang.
"Recent reports raise significant national security concerns regarding the PRC's [China's] access to sensitive US technology and information.
"The issue of PRC infiltration and access to cutting-edge US technology is core to the investigative work of our three committees this Congress," the letter said.
Nvidia's AI chips have been a major focus of the rivalry between the US and China, and Washington has previously imposed controls on where its advanced products can be sold.
The H200, Nvidia's second most advanced semiconductor, had previously been restricted by Washington over concerns that it would give China's technology industry an edge over the US.
In January, the Trump administration said it would allow the company to sell its H200 chips to Chinese customers under certain conditions.
Related topics
- Published21 May
- Published25 February
- Published30 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3dxw10rjn9no?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-09T00:50:06+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4981/live/81f74f50-dbb8-11f1-86cb-c1d83392da32.jpg",
    readTime: 10,
  },
  {
    id: "doing-these-things-now-will-help-you-sav-14b1cd45",
    title: "Doing these things now will help you save money at Christmas",
    titleJa: "Doing these things now will help you save money at Christmas",
    summaryJa: "Small decisions made now can make a big difference to your festive finances, charities say, so here are some tips.",
    bodyOriginal: `Doing these things now will help you save money at Christmas
- Published
How soon is too soon when it comes to thinking about Christmas and your finances?
The answer, of course, is that it is never too soon. Save early and the cost becomes more manageable.
The squeeze is harder for some than others, with charity Barnardo's warning that some parents will skip meals so their kids get a Christmas dinner with the trimmings.
But, debt advice charity StepChange is offering tips to everyone, to avoid Christmas spending leading to a financially painful new year.
What to think about now
The best way to avoid a difficult January, it says, is to make a realistic plan before the spending begins.
Small decisions now can make a big difference later. Its tips include:
Budget for Christmas in full. So, that's not just presents, a budget should include the cost of food and drink, travel, parties, presents, postage, decorations and other festive extras
Spread the cost. Don't just rely on your December paypacket. Also, make a shopping list before Black Friday on 27 November - it is only a discount if you were going to buy it anyway
Book your train journey now. Advance tickets, if available, are cheaper
Set spending limits. Put a cap on the bill for Christmas socialising, and have a quiet conversation with family and friends about how much to spend on presents
Stocktake before the big food shop. Check your cupboards, fridge and freezer before you go shopping and plan meals around food you already have. Make a list of what you need and compare prices.
Think twice. Can you afford what you are going to buy? Can you afford the repayments if it's bought on credit? And, do you really need it?
"Christmas is a time when we want to enjoy ourselves and make things special for the people we care most about," said Vikki Brownridge, chief executive of StepChange.
"But it can also put a lot of pressure on household budgets, and it is key to take steps to get ahead of any January financial blues."
Where to go for help
If you are concerned about Christmas leaving you in debt, then it is best to seek advice well before things become unmanageable.
The independent MoneyHelper website has a guide to finding free debt advice near you, external.
There are also tools to work out if you are receiving all the benefits and grants you are entitled to, and tips on how to draw up a budget.
And it is really important to watch out for scams at this time of year. Fraudsters will take any opportunity to catch you out, especially when you are under pressure financially.
Related topics
- Published12 October
- Published19 October`,
    bodyJa: `Doing these things now will help you save money at Christmas
- Published
How soon is too soon when it comes to thinking about Christmas and your finances?
The answer, of course, is that it is never too soon. Save early and the cost becomes more manageable.
The squeeze is harder for some than others, with charity Barnardo's warning that some parents will skip meals so their kids get a Christmas dinner with the trimmings.
But, debt advice charity StepChange is offering tips to everyone, to avoid Christmas spending leading to a financially painful new year.
What to think about now
The best way to avoid a difficult January, it says, is to make a realistic plan before the spending begins.
Small decisions now can make a big difference later. Its tips include:
Budget for Christmas in full. So, that's not just presents, a budget should include the cost of food and drink, travel, parties, presents, postage, decorations and other festive extras
Spread the cost. Don't just rely on your December paypacket. Also, make a shopping list before Black Friday on 27 November - it is only a discount if you were going to buy it anyway
Book your train journey now. Advance tickets, if available, are cheaper
Set spending limits. Put a cap on the bill for Christmas socialising, and have a quiet conversation with family and friends about how much to spend on presents
Stocktake before the big food shop. Check your cupboards, fridge and freezer before you go shopping and plan meals around food you already have. Make a list of what you need and compare prices.
Think twice. Can you afford what you are going to buy? Can you afford the repayments if it's bought on credit? And, do you really need it?
"Christmas is a time when we want to enjoy ourselves and make things special for the people we care most about," said Vikki Brownridge, chief executive of StepChange.
"But it can also put a lot of pressure on household budgets, and it is key to take steps to get ahead of any January financial blues."
Where to go for help
If you are concerned about Christmas leaving you in debt, then it is best to seek advice well before things become unmanageable.
The independent MoneyHelper website has a guide to finding free debt advice near you, external.
There are also tools to work out if you are receiving all the benefits and grants you are entitled to, and tips on how to draw up a budget.
And it is really important to watch out for scams at this time of year. Fraudsters will take any opportunity to catch you out, especially when you are under pressure financially.
Related topics
- Published12 October
- Published19 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ck7vppll151mo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-09T00:09:14+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/903c/live/8d645510-d9ef-11f1-bb10-cdca6001fbcf.jpg",
    readTime: 7,
  },
  {
    id: "it-feels-like-he-s-quietly-building-a-s-404bc0f7",
    title: "‘It feels like he’s quietly building a separate life’: My husband inherited $500,000, but he refuses to spend it on our home",
    titleJa: "‘It feels like he’s quietly building a separate life’: My husband inherited $500,000, but he refuses to spend it on our home",
    summaryJa: "“Our kitchen dates from 1999 and the oven only works if you hit the door a certain way.”",
    bodyOriginal: `“Our kitchen dates from 1999 and the oven only works if you hit the door a certain way.”`,
    bodyJa: `“Our kitchen dates from 1999 and the oven only works if you hit the door a certain way.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/it-feels-like-hes-quietly-building-a-separate-life-my-husband-inherited-500-000-but-he-refuses-to-spend-it-on-our-home-06535cff?mod=mw_rss_topstories",
    publishedAt: "2026-11-09T00:02:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-88923729",
    readTime: 2,
  },
  {
    id: "funeral-homes-are-finding-new-life-hosti-1bcf66b3",
    title: "Funeral homes are finding new life hosting weddings and golf outings, as the traditional burial business dies out",
    titleJa: "Funeral homes are finding new life hosting weddings and golf outings, as the traditional burial business dies out",
    summaryJa: "“It’s not my funeral — it’s yours — so make it what you want,” one funeral-home operator says.",
    bodyOriginal: `“It’s not my funeral — it’s yours — so make it what you want,” one funeral-home operator says.`,
    bodyJa: `“It’s not my funeral — it’s yours — so make it what you want,” one funeral-home operator says.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/funeral-homes-are-finding-new-life-hosting-weddings-and-golf-outings-as-the-traditional-burial-business-dies-out-15831d13?mod=mw_rss_topstories",
    publishedAt: "2026-11-09T00:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-20210681",
    readTime: 2,
  },
  {
    id: "trump-says-renewed-iran-strikes-highly-u-967d4bbc",
    title: "Trump says renewed Iran strikes ‘highly unlikely’ if talks progress but warns he could still strike",
    titleJa: "Trump says renewed Iran strikes ‘highly unlikely’ if talks progress but warns he could still strike",
    summaryJa: "Trump tied avoiding renewed U.S. strikes to progress in talks over Iran’s nuclear program and the Strait of Hormuz.",
    bodyOriginal: `President Donald Trump said he is "highly unlikely" to restart open war with Iran, but warned he could still strike the country as Washington tries to reach a deal with Tehran to end the conflict.
The now more than eight-month-old war, which stoked inflation and sent oil prices surging, has seen repeated bursts of fighting separated by ceasefires and peace talks for months. It was widely speculated that Trump might restart open conflict after the midterm elections, where his Republican Party lost badly to Democrats.
Trump's comments came during an interview with CNN, where he said restarting the war is unlikely as long as talks to constrain Iran's nuclear program and reopen the Strait of Hormuz make progress.
"It depends on whether or not they sign a very strong agreement," Trump said. "The answer is highly unlikely it's going to be necessary. They're a failing nation."
Trump, however, left the door open for additional strikes if he deems it necessary. The president reiterated his threats to strike bridges and power plants in Iran if the war restarts.
"I've got three aircraft carriers here. The other one just arrived. We have three. They're fully locked and loaded," the president said. "We have 38 bridges in our site that we can knock down in literally one hour."
An end to the war and reopening of the Strait of Hormuz would likely ease oil prices, though finding a truce has proven difficult. All previous attempts to end the war and reopen the strait have been met with disappointment.
Trump is likely to come under increased pressure to end the conflict, however, now that Democrats have won control of both the House and the Senate. Some Republicans are also likely to be eager for an end to the war, given the role high gas prices played in their drubbing at the ballot box.
The president has demanded Iran fully open the Strait of Hormuz and agree to never develop a nuclear weapon as part of any deal.
Later in the day on Truth Social, Trump posted that "Task Force Iron Gate is in full force and effect in the Islamic Republic of Iran."
"Coupled with history's greatest Naval Blockade, very little gets into, or out of, Iran!" he said.
Central Command announced Task Force Iron Gate on Saturday, describing it as an initiative aimed at "preventing the movement of advanced weapons systems, dual-use technologies, sanctioned materials, and illegal revenue streams across Iran's land borders and the Caspian Sea."
The U.S. has maintained a naval blockade of Iranian ports for months.`,
    bodyJa: `President Donald Trump said he is "highly unlikely" to restart open war with Iran, but warned he could still strike the country as Washington tries to reach a deal with Tehran to end the conflict.
The now more than eight-month-old war, which stoked inflation and sent oil prices surging, has seen repeated bursts of fighting separated by ceasefires and peace talks for months. It was widely speculated that Trump might restart open conflict after the midterm elections, where his Republican Party lost badly to Democrats.
Trump's comments came during an interview with CNN, where he said restarting the war is unlikely as long as talks to constrain Iran's nuclear program and reopen the Strait of Hormuz make progress.
"It depends on whether or not they sign a very strong agreement," Trump said. "The answer is highly unlikely it's going to be necessary. They're a failing nation."
Trump, however, left the door open for additional strikes if he deems it necessary. The president reiterated his threats to strike bridges and power plants in Iran if the war restarts.
"I've got three aircraft carriers here. The other one just arrived. We have three. They're fully locked and loaded," the president said. "We have 38 bridges in our site that we can knock down in literally one hour."
An end to the war and reopening of the Strait of Hormuz would likely ease oil prices, though finding a truce has proven difficult. All previous attempts to end the war and reopen the strait have been met with disappointment.
Trump is likely to come under increased pressure to end the conflict, however, now that Democrats have won control of both the House and the Senate. Some Republicans are also likely to be eager for an end to the war, given the role high gas prices played in their drubbing at the ballot box.
The president has demanded Iran fully open the Strait of Hormuz and agree to never develop a nuclear weapon as part of any deal.
Later in the day on Truth Social, Trump posted that "Task Force Iron Gate is in full force and effect in the Islamic Republic of Iran."
"Coupled with history's greatest Naval Blockade, very little gets into, or out of, Iran!" he said.
Central Command announced Task Force Iron Gate on Saturday, describing it as an initiative aimed at "preventing the movement of advanced weapons systems, dual-use technologies, sanctioned materials, and illegal revenue streams across Iran's land borders and the Caspian Sea."
The U.S. has maintained a naval blockade of Iranian ports for months.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/08/trump-iran-strikes-unlikely-talks-hormuz.html",
    publishedAt: "2026-11-08T21:53:02+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "nvidia-s-board-will-probe-ceo-jensen-hua-fc6f5201",
    title: "Nvidia’s board will probe CEO Jensen Huang’s relationship with an alleged spy. Here’s what to know.",
    titleJa: "Nvidia’s board will probe CEO Jensen Huang’s relationship with an alleged spy. Here’s what to know.",
    summaryJa: "“Today’s news will not slow Nvidia,” a spokesperson says. Huang will remain in his role and cooperate with the investigation.",
    bodyOriginal: `“Today’s news will not slow Nvidia,” a spokesperson says. Huang will remain in his role and cooperate with the investigation.`,
    bodyJa: `“Today’s news will not slow Nvidia,” a spokesperson says. Huang will remain in his role and cooperate with the investigation.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/nvidias-board-will-probe-ceo-jensen-huangs-relationship-with-an-alleged-spy-heres-what-to-know-86656cd9?mod=mw_rss_topstories",
    publishedAt: "2026-11-08T21:29:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-62932554",
    readTime: 2,
  },
  {
    id: "nvidia-investigates-ceo-jensen-huang-s-r-18eb0d7a",
    title: "Nvidia investigates CEO Jensen Huang's relationship with alleged Chinese spy",
    titleJa: "Nvidia investigates CEO Jensen Huang's relationship with alleged Chinese spy",
    summaryJa: "Huang told Nvidia staff in an email that he had an affair and that the company's board has opened an investigation into allegations the woman is a Chinese spy.",
    bodyOriginal: `Nvidia has opened an investigation into co-founder and CEO Jensen Huang's relationship with a businesswoman who intelligence agencies say is a Chinese spy.
U.S. intelligence agencies have expressed concerns that the woman, Alice Huang, who is affiliated with a cloud company and an Nvidia customer called Megaspeed, has been passing information to Beijing, according to reports in The New York Times and the Financial Times.
Huang told Nvidia staff in an email on Sunday that he had an affair with the woman and that Nvidia's board of directors had opened an independent investigation into the spying allegations.
"I was unfaithful to my wife. My actions hurt her and our children. There is no excuse for what I did," Huang wrote in the message. "I am deeply sorry."
An Nvidia spokesperson said that Huang was committed to continuing as CEO of Nvidia without interruption.
In a statement, the Nvidia board said it would investigate the allegations that Huang had been the target of a foreign intelligence effort.
"While the Board has no reason to believe that either national security or NVIDIA secrets were compromised, the Board's inquiry will examine all available information," Nvidia's board said in a statement.
The allegations come as Nvidia has become the center of a trade dispute between China and the U.S. as AI is seen as increasingly critical to national security.
The U.S. restricts exports of Nvidia's most advanced AI chips to China, though it has approved exports of certain older, slower models.
Megaspeed, which Ms. Huang is affiliated with, has been accused of helping restricted Chinese companies acquire Nvidia AI chips. Nvidia representatives previously said that Megaspeed had already been investigated for evading export controls.
Nvidia's Huang has pushed for broader AI chip exports to China, saying it is better for the U.S. if the world uses and builds on American technology. He has also aligned with President Donald Trump on American artificial intelligence policy and its infrastructure buildout.
In his note to staff, Huang said he was "proud and grateful" to be an American.
Three House Republican committee chairs sent a letter to Huang on Wednesday asking him to sit for a closed-door briefing with lawmakers on Nov. 18.
Nvidia reports third-quarter earnings on Nov. 17 and will hold a major conference in Washington, D.C., at the end of the month.`,
    bodyJa: `Nvidia has opened an investigation into co-founder and CEO Jensen Huang's relationship with a businesswoman who intelligence agencies say is a Chinese spy.
U.S. intelligence agencies have expressed concerns that the woman, Alice Huang, who is affiliated with a cloud company and an Nvidia customer called Megaspeed, has been passing information to Beijing, according to reports in The New York Times and the Financial Times.
Huang told Nvidia staff in an email on Sunday that he had an affair with the woman and that Nvidia's board of directors had opened an independent investigation into the spying allegations.
"I was unfaithful to my wife. My actions hurt her and our children. There is no excuse for what I did," Huang wrote in the message. "I am deeply sorry."
An Nvidia spokesperson said that Huang was committed to continuing as CEO of Nvidia without interruption.
In a statement, the Nvidia board said it would investigate the allegations that Huang had been the target of a foreign intelligence effort.
"While the Board has no reason to believe that either national security or NVIDIA secrets were compromised, the Board's inquiry will examine all available information," Nvidia's board said in a statement.
The allegations come as Nvidia has become the center of a trade dispute between China and the U.S. as AI is seen as increasingly critical to national security.
The U.S. restricts exports of Nvidia's most advanced AI chips to China, though it has approved exports of certain older, slower models.
Megaspeed, which Ms. Huang is affiliated with, has been accused of helping restricted Chinese companies acquire Nvidia AI chips. Nvidia representatives previously said that Megaspeed had already been investigated for evading export controls.
Nvidia's Huang has pushed for broader AI chip exports to China, saying it is better for the U.S. if the world uses and builds on American technology. He has also aligned with President Donald Trump on American artificial intelligence policy and its infrastructure buildout.
In his note to staff, Huang said he was "proud and grateful" to be an American.
Three House Republican committee chairs sent a letter to Huang on Wednesday asking him to sit for a closed-door briefing with lawmakers on Nov. 18.
Nvidia reports third-quarter earnings on Nov. 17 and will hold a major conference in Washington, D.C., at the end of the month.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/08/nvidia-jensen-huang-investigation-china-spy.html",
    publishedAt: "2026-11-08T21:13:38+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "democrats-amp-up-trump-investigation-thr-008615a6",
    title: "Democrats amp up Trump investigation threats, Blanche counters he may probe lawmakers",
    titleJa: "Democrats amp up Trump investigation threats, Blanche counters he may probe lawmakers",
    summaryJa: "Democrats have vowed to investigate both President Donald Trump's White House and businesses that have worked with the administration.",
    bodyOriginal: `Top Democrats are ramping up oversight of the Trump administration and businesses it has partnered with, while Attorney General Todd Blanche warned he could counterinvestigate lawmakers conducting probes.
Democrats romped to majorities in both the House and the Senate during Tuesday's midterm elections, putting them in position to seize control of committee gavels and subpoena power in January. The electoral rout leaves Democrats with at least 54 Senate seats and 254 seats in the House of Representatives as votes continue to be counted in several states.
Democrats vowed to investigate both President Donald Trump's White House and businesses that have worked with the administration. CNBC reported on Thursday that Democrats are expected to take an aggressive approach to probing businesses, especially those companies with ties to the Trump family. The technology, cryptocurrency and prediction market industries, among others, could immediately be in the crosshairs.
"If you've been making your profits by cheating American families and scamming your investors, you better get ready for some investigations — serious ones," said Sen. Elizabeth Warren, the incoming chair of the Senate Banking Committee, on CBS' "Face the Nation" on Sunday. "The American people are just damn sick of this."
Blanche, Trump's former personal attorney, whom the Senate narrowly confirmed as the nation's top cop earlier this year, took umbrage at the Democrats' plans for investigations and said he may launch his own investigations against members of Congress.
"There could be," Blanche said Sunday when pressed on CNN's "State of the Union" about whether the administration will counterinvestigate Democrats.
"When the threats become so vile and so dangerous that you are telling people in college that they better be careful if they want to work in the Trump administration because somebody will come after them, at some point you have to draw the line."
Blanche was referring to comments made by Sen. Elissa Slotkin, D-Mich., who said during a University of Chicago event that she wants "young people coming out of school to say, 'Should I go work for the Trump administration?'...I want them to be like, 'Lord, that might be buying myself a ton of problems that I don't want. And so let me avoid participating in that.' I want that deterrence message sent."
Trump has ordered the Justice Department to investigate Democrats over the comments.
Blanche also took aim at Rep. Robert Garcia, D-Calif., the likely incoming chair of the House Oversight Committee — appearing to caution lawmakers who sit on the panel. Garcia warned the administration and business leaders to "lawyer up" after the election.
"I would be very worried if I was a member on that committee," Blanche said.
Garcia shot back, saying on CNN: "What Todd Blanche is doing right now is a threat."
"He's trying to stop us from doing real oversight," Garcia said. "He is the person that should be reading the Constitution, because the Constitution makes it very clear that it's our job in Congress to conduct oversight of the executive and the administration."`,
    bodyJa: `Top Democrats are ramping up oversight of the Trump administration and businesses it has partnered with, while Attorney General Todd Blanche warned he could counterinvestigate lawmakers conducting probes.
Democrats romped to majorities in both the House and the Senate during Tuesday's midterm elections, putting them in position to seize control of committee gavels and subpoena power in January. The electoral rout leaves Democrats with at least 54 Senate seats and 254 seats in the House of Representatives as votes continue to be counted in several states.
Democrats vowed to investigate both President Donald Trump's White House and businesses that have worked with the administration. CNBC reported on Thursday that Democrats are expected to take an aggressive approach to probing businesses, especially those companies with ties to the Trump family. The technology, cryptocurrency and prediction market industries, among others, could immediately be in the crosshairs.
"If you've been making your profits by cheating American families and scamming your investors, you better get ready for some investigations — serious ones," said Sen. Elizabeth Warren, the incoming chair of the Senate Banking Committee, on CBS' "Face the Nation" on Sunday. "The American people are just damn sick of this."
Blanche, Trump's former personal attorney, whom the Senate narrowly confirmed as the nation's top cop earlier this year, took umbrage at the Democrats' plans for investigations and said he may launch his own investigations against members of Congress.
"There could be," Blanche said Sunday when pressed on CNN's "State of the Union" about whether the administration will counterinvestigate Democrats.
"When the threats become so vile and so dangerous that you are telling people in college that they better be careful if they want to work in the Trump administration because somebody will come after them, at some point you have to draw the line."
Blanche was referring to comments made by Sen. Elissa Slotkin, D-Mich., who said during a University of Chicago event that she wants "young people coming out of school to say, 'Should I go work for the Trump administration?'...I want them to be like, 'Lord, that might be buying myself a ton of problems that I don't want. And so let me avoid participating in that.' I want that deterrence message sent."
Trump has ordered the Justice Department to investigate Democrats over the comments.
Blanche also took aim at Rep. Robert Garcia, D-Calif., the likely incoming chair of the House Oversight Committee — appearing to caution lawmakers who sit on the panel. Garcia warned the administration and business leaders to "lawyer up" after the election.
"I would be very worried if I was a member on that committee," Blanche said.
Garcia shot back, saying on CNN: "What Todd Blanche is doing right now is a threat."
"He's trying to stop us from doing real oversight," Garcia said. "He is the person that should be reading the Constitution, because the Constitution makes it very clear that it's our job in Congress to conduct oversight of the executive and the administration."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/08/democrats-trump-oversight-blanche-doj-investigations.html",
    publishedAt: "2026-11-08T18:57:56+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "two-months-after-my-father-s-funeral-my-3823ab29",
    title: "Two months after my father’s funeral, my stepmother asked me to repay his $40,000 wedding gift. Should I do what she says?",
    titleJa: "Two months after my father’s funeral, my stepmother asked me to repay his $40,000 wedding gift. Should I do what she says?",
    summaryJa: "“About two months after his funeral, my stepmother called and said she wanted the money back.”",
    bodyOriginal: `“About two months after his funeral, my stepmother called and said she wanted the money back.”`,
    bodyJa: `“About two months after his funeral, my stepmother called and said she wanted the money back.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/shes-a-type-a-personality-my-stepmother-wants-me-to-repay-my-late-fathers-40-000-wedding-gift-should-i-oblige-51fc64f7?mod=mw_rss_topstories",
    publishedAt: "2026-11-08T17:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-80511883",
    readTime: 2,
  },
  {
    id: "how-democrats-will-try-to-end-trump-s-ta-1128c143",
    title: "How Democrats will try to end Trump's tariffs",
    titleJa: "How Democrats will try to end Trump's tariffs",
    summaryJa: "Rep. Hakeem Jeffries, D-N.Y., who is likely the next House speaker, has made clear that ending President Trump's tariffs is one of Democrats' top priorities.",
    bodyOriginal: `The battle for Congress is over. The war over President Donald Trump's tariffs is about to heat up.
The knotted web of tariffs that Trump spent the last two years weaving could soon face its biggest threat, as Democrats prepare to unload their new legislative firepower against the Republican president's signature policy.
Democrats have made no secret of their plans to bombard Trump and his associates with investigations as soon as the next Congress is sworn in. They are also preparing a first-100-hours legislative blitz, putting forward a series of bills that would unwind much of Trump's agenda.
Both prongs of attack will take aim at Trump's unprecedented use of tariffs, which Democrats have quickly identified as a main target following their landslide victory in Tuesday's midterm elections.
Ending Trump's tariff regime, and especially his trade war against Canada, is something Democrats "absolutely have to do immediately," Sen.-elect Abdul El-Sayed, D-Mich., told MS NOW's "Morning Joe" Thursday.
Rep. Hakeem Jeffries of New York, the Democratic minority leader who could be elected House speaker in the next Congress, has made clear that ending Trump's tariffs is a top priority.
"We should restore congressional authority as it relates to tariffs, because the Trump tariffs are making life more expensive for the American people," he said at a press conference in late August.
If picked as speaker, Jeffries would speed legislation to the House floor that reasserts congressional authority over trade.
Democrats are also laying the groundwork for investigations into Trump's tariffs, which the party folded into its winning campaign message linking high costs with alleged Trumpworld corruption.
Rep. Jamie Raskin of Maryland, the top Democrat on the House Judiciary Committee, on Oct. 28 asked Trump to hand over records related to tariff exemptions. Trump, Raskin alleges, has wielded the exemption power to cut "sweetheart deals" for industries whose leaders have plied the president with gifts.
The plans are likely to ratchet up the pressure, both legally and politically, that Trump's tariffs were already facing.
The administration is already embroiled in multiple lawsuits challenging different parts of the government's tariff policy.
The most recent suit, filed Oct. 20, targets Trump's use of a Great Depression-era law to impose 50% tariffs on a range of Canadian goods.
Another court case accuses Trump of trying to recreate the near-global "liberation day" tariffs that the Supreme Court struck down as illegal in late February. The administration has since been ordered to refund $166 billion in tariff revenue it had collected under the scrapped policy.
Congress, not the president, holds the power to levy taxes under the U.S. Constitution. Over decades, the legislative branch has ceded some of those powers to the executive. But Trump has asserted virtually unchecked tariff powers – which Democrats say they are intent on clawing back.
"Every day Trump insists on his indiscriminate taxes on so many of the products Americans need, he digs a deeper hole for Republicans enabling his tariff spree," said Sen. Ron Wyden of Oregon, who is poised to lead the Senate Finance Committee when Democrats take it over.
"If Democrats somehow had a veto-proof majority, or if voters shame Republicans into doing the right thing, there would be no shortage of trade policies to address," Wyden said in a statement to CNBC before Election Day.
"One of the most obvious priorities would be repealing Trump's tariffs on Canada, which are raising prices and harming communities on both sides of the border," he said. "I'll also continue to work to ensure Congress has the final say on tariffs, so future presidents can't reenact Trump's economically disastrous trade taxes."
The Wall Street Journal, citing Wyden, reported Thursday that Democrats are eyeing the Canada trade war as the "first target" in their efforts against his tariff agenda.
Tariff headwinds
As Wyden's statement suggested, the Senate's rules will hamper Democrats' anti-tariff efforts.
Despite their blowout victory Tuesday night, the party will still lack a 60-vote filibuster-proof majority in the Senate, giving Republicans a crucial tool to block legislation even in their diminished state.
Trump is also poised to lean heavily on his veto pen in the next Congress, presenting a major obstacle for Democrats' legislative priorities.
Overriding a presidential veto requires two-thirds majorities in both the House and Senate, meaning that even with their historic electoral gains, Democrats would need significant Republican help to force a bill into law over Trump's objection.
Democrats may consider it worthwhile to pass legislation even if Trump vetoes it, as doing so could help them build political narratives in the 2028 election cycle. But they may have other options available.
"Absent the brute force of a veto-proof coalition, Congress might consider other political solutions, such as adding riders on 'must-pass' bills or negotiation with the administration," Kit Johnson, a senior tax manager for BDO's customs and international trade group, told CNBC in an email.
How Trump might respond
Trump has said he plans to use the veto power to force Democrats to the negotiating table. But when it comes to tariffs, it's hard to imagine what deal Trump might accept.
Trump has tried to reshape U.S. trade, foreign and economic policy around his asserted power to slap steep duties on imported goods. He describes tariffs as a win-win, praising them as both a powerful negotiating tool and a major revenue generator.
After Tuesday's election, Trump seemed to suggest tariffs were non-negotiable.
"If I took tariffs off — we have 3,000 plants under construction right now. Every single plant would stop building," Trump told CNBC's Eamon Javers in a phone call Wednesday.
Since taking office in January 2025, Trump has hiked tariffs on nearly every country on the planet, leading to multiple protracted trade wars, most notably against Canada and China. He insists Americans do not share the burden of the duties, even though tariffs by definition are taxes on foreign goods paid by those importing them. The nonprofit Tax Foundation estimates Trump's tariffs have raised the average U.S. household's tax burden by $820 in 2026.
Trump has also consistently overstated the amount of revenue the government has amassed through his tariffs. He claimed before Election Day that tariffs enabled him to offer every U.S. adult $5,000 "dividend" checks if Republicans were to win both chambers of Congress – a plan that would cost roughly $1.2 trillion. But the duties – which are collected from U.S. importers – have only brought in around $300 billion in total between January 2025 and July 2026, according to the Penn Wharton Budget Model.
What's more, about $138 billion of that total has been refunded since the Supreme Court ruling in February. Nearly $20 billion in tariff collections are still set to be refunded.
Most voters do not share Trump's rosy view of tariffs. Sixty-five percent of respondents to the CNBC Voter Poll on Nov. 3 said the duties have hurt the U.S. economy, while just 22% say they helped.
What remains to be seen is how hard Republicans in Congress will push back on Democrats' efforts.
A number of GOP lawmakers came out against the duties during the campaign, as their opponents gained ground blaming inflation on Trump's tariffs and the Iran war.
As they try to regroup and look forward to the 2028 election cycle, some Republicans – who largely supported free trade prior to Trump's political rise – may be less willing to continue aligning themselves with Trump's aggressive protectionism.`,
    bodyJa: `The battle for Congress is over. The war over President Donald Trump's tariffs is about to heat up.
The knotted web of tariffs that Trump spent the last two years weaving could soon face its biggest threat, as Democrats prepare to unload their new legislative firepower against the Republican president's signature policy.
Democrats have made no secret of their plans to bombard Trump and his associates with investigations as soon as the next Congress is sworn in. They are also preparing a first-100-hours legislative blitz, putting forward a series of bills that would unwind much of Trump's agenda.
Both prongs of attack will take aim at Trump's unprecedented use of tariffs, which Democrats have quickly identified as a main target following their landslide victory in Tuesday's midterm elections.
Ending Trump's tariff regime, and especially his trade war against Canada, is something Democrats "absolutely have to do immediately," Sen.-elect Abdul El-Sayed, D-Mich., told MS NOW's "Morning Joe" Thursday.
Rep. Hakeem Jeffries of New York, the Democratic minority leader who could be elected House speaker in the next Congress, has made clear that ending Trump's tariffs is a top priority.
"We should restore congressional authority as it relates to tariffs, because the Trump tariffs are making life more expensive for the American people," he said at a press conference in late August.
If picked as speaker, Jeffries would speed legislation to the House floor that reasserts congressional authority over trade.
Democrats are also laying the groundwork for investigations into Trump's tariffs, which the party folded into its winning campaign message linking high costs with alleged Trumpworld corruption.
Rep. Jamie Raskin of Maryland, the top Democrat on the House Judiciary Committee, on Oct. 28 asked Trump to hand over records related to tariff exemptions. Trump, Raskin alleges, has wielded the exemption power to cut "sweetheart deals" for industries whose leaders have plied the president with gifts.
The plans are likely to ratchet up the pressure, both legally and politically, that Trump's tariffs were already facing.
The administration is already embroiled in multiple lawsuits challenging different parts of the government's tariff policy.
The most recent suit, filed Oct. 20, targets Trump's use of a Great Depression-era law to impose 50% tariffs on a range of Canadian goods.
Another court case accuses Trump of trying to recreate the near-global "liberation day" tariffs that the Supreme Court struck down as illegal in late February. The administration has since been ordered to refund $166 billion in tariff revenue it had collected under the scrapped policy.
Congress, not the president, holds the power to levy taxes under the U.S. Constitution. Over decades, the legislative branch has ceded some of those powers to the executive. But Trump has asserted virtually unchecked tariff powers – which Democrats say they are intent on clawing back.
"Every day Trump insists on his indiscriminate taxes on so many of the products Americans need, he digs a deeper hole for Republicans enabling his tariff spree," said Sen. Ron Wyden of Oregon, who is poised to lead the Senate Finance Committee when Democrats take it over.
"If Democrats somehow had a veto-proof majority, or if voters shame Republicans into doing the right thing, there would be no shortage of trade policies to address," Wyden said in a statement to CNBC before Election Day.
"One of the most obvious priorities would be repealing Trump's tariffs on Canada, which are raising prices and harming communities on both sides of the border," he said. "I'll also continue to work to ensure Congress has the final say on tariffs, so future presidents can't reenact Trump's economically disastrous trade taxes."
The Wall Street Journal, citing Wyden, reported Thursday that Democrats are eyeing the Canada trade war as the "first target" in their efforts against his tariff agenda.
Tariff headwinds
As Wyden's statement suggested, the Senate's rules will hamper Democrats' anti-tariff efforts.
Despite their blowout victory Tuesday night, the party will still lack a 60-vote filibuster-proof majority in the Senate, giving Republicans a crucial tool to block legislation even in their diminished state.
Trump is also poised to lean heavily on his veto pen in the next Congress, presenting a major obstacle for Democrats' legislative priorities.
Overriding a presidential veto requires two-thirds majorities in both the House and Senate, meaning that even with their historic electoral gains, Democrats would need significant Republican help to force a bill into law over Trump's objection.
Democrats may consider it worthwhile to pass legislation even if Trump vetoes it, as doing so could help them build political narratives in the 2028 election cycle. But they may have other options available.
"Absent the brute force of a veto-proof coalition, Congress might consider other political solutions, such as adding riders on 'must-pass' bills or negotiation with the administration," Kit Johnson, a senior tax manager for BDO's customs and international trade group, told CNBC in an email.
How Trump might respond
Trump has said he plans to use the veto power to force Democrats to the negotiating table. But when it comes to tariffs, it's hard to imagine what deal Trump might accept.
Trump has tried to reshape U.S. trade, foreign and economic policy around his asserted power to slap steep duties on imported goods. He describes tariffs as a win-win, praising them as both a powerful negotiating tool and a major revenue generator.
After Tuesday's election, Trump seemed to suggest tariffs were non-negotiable.
"If I took tariffs off — we have 3,000 plants under construction right now. Every single plant would stop building," Trump told CNBC's Eamon Javers in a phone call Wednesday.
Since taking office in January 2025, Trump has hiked tariffs on nearly every country on the planet, leading to multiple protracted trade wars, most notably against Canada and China. He insists Americans do not share the burden of the duties, even though tariffs by definition are taxes on foreign goods paid by those importing them. The nonprofit Tax Foundation estimates Trump's tariffs have raised the average U.S. household's tax burden by $820 in 2026.
Trump has also consistently overstated the amount of revenue the government has amassed through his tariffs. He claimed before Election Day that tariffs enabled him to offer every U.S. adult $5,000 "dividend" checks if Republicans were to win both chambers of Congress – a plan that would cost roughly $1.2 trillion. But the duties – which are collected from U.S. importers – have only brought in around $300 billion in total between January 2025 and July 2026, according to the Penn Wharton Budget Model.
What's more, about $138 billion of that total has been refunded since the Supreme Court ruling in February. Nearly $20 billion in tariff collections are still set to be refunded.
Most voters do not share Trump's rosy view of tariffs. Sixty-five percent of respondents to the CNBC Voter Poll on Nov. 3 said the duties have hurt the U.S. economy, while just 22% say they helped.
What remains to be seen is how hard Republicans in Congress will push back on Democrats' efforts.
A number of GOP lawmakers came out against the duties during the campaign, as their opponents gained ground blaming inflation on Trump's tariffs and the Iran war.
As they try to regroup and look forward to the 2028 election cycle, some Republicans – who largely supported free trade prior to Trump's political rise – may be less willing to continue aligning themselves with Trump's aggressive protectionism.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/08/trump-tariffs-democrats-congress-canada.html",
    publishedAt: "2026-11-08T13:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "using-miles-to-fly-for-thanksgiving-thes-44420f65",
    title: "Using miles to fly for Thanksgiving? These are the most expensive and cheapest routes",
    titleJa: "Using miles to fly for Thanksgiving? These are the most expensive and cheapest routes",
    summaryJa: "Thanksgiving airfare will cost more than last year as fares rise and strong demand continues.",
    bodyOriginal: `Airline ticket prices have surged this year, especially for travel over the holidays. Don't expect many bargains if you're booking flights with miles, either.
Tickets bought with frequent flyer miles for flights between large U.S. airports over the Thanksgiving travel period will cost 32% more than last year's holiday, according to data from Seats.aero, a miles and points redemption search site. While fares have skyrocketed this year, airline executives last month said demand remains strong.
Airlines have largely gotten rid of static mileage redemption charts in favor of dynamic pricing, making budgeting for an award ticket more difficult. Dynamic pricing means redemption costs change depending on demand, routes and other factors.
Many of the most expensive routes this Thanksgiving are understandably longer, including from Hawaii, but the list also includes a nonstop from New York to Houston.
Here's how mileage redemptions for the holiday are stacking up, based on one-way flights on average as of early November and compared with last year:
Jet fuel prices have surged since the U.S. and Israel attacked Iran on Feb. 28, which has eaten into airline profits. Carriers have sought to pass costs along to consumers as much as possible.
Even some of the cheapest routes for award tickets are more expensive than last year, including for short routes like Tulsa, Oklahoma, to Dallas Fort Worth International Airport.
Here are the routes where award trips are cheapest on average and how they compare with the Thanksgiving holiday last year:`,
    bodyJa: `Airline ticket prices have surged this year, especially for travel over the holidays. Don't expect many bargains if you're booking flights with miles, either.
Tickets bought with frequent flyer miles for flights between large U.S. airports over the Thanksgiving travel period will cost 32% more than last year's holiday, according to data from Seats.aero, a miles and points redemption search site. While fares have skyrocketed this year, airline executives last month said demand remains strong.
Airlines have largely gotten rid of static mileage redemption charts in favor of dynamic pricing, making budgeting for an award ticket more difficult. Dynamic pricing means redemption costs change depending on demand, routes and other factors.
Many of the most expensive routes this Thanksgiving are understandably longer, including from Hawaii, but the list also includes a nonstop from New York to Houston.
Here's how mileage redemptions for the holiday are stacking up, based on one-way flights on average as of early November and compared with last year:
Jet fuel prices have surged since the U.S. and Israel attacked Iran on Feb. 28, which has eaten into airline profits. Carriers have sought to pass costs along to consumers as much as possible.
Even some of the cheapest routes for award tickets are more expensive than last year, including for short routes like Tulsa, Oklahoma, to Dallas Fort Worth International Airport.
Here are the routes where award trips are cheapest on average and how they compare with the Thanksgiving holiday last year:`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/08/frequent-flyer-miles-points-thanksgiving.html",
    publishedAt: "2026-11-08T13:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "amazon-s-astro-home-robot-has-fans-but-l-1ef7b30a",
    title: "Amazon's Astro home robot has fans but looks destined for the 'trash heap.' Why it's trying again",
    titleJa: "Amazon's Astro home robot has fans but looks destined for the 'trash heap.' Why it's trying again",
    summaryJa: "Amazon has formed a new home robotics team and is hiring for a “new-to-world robot product,” according to CNBC’s analysis of job posts.",
    bodyOriginal: `Jeff Bezos made a bold bet in 2017. A sci-fi and robotics enthusiast, Bezos was convinced that consumers would have a robot in their home in the not-too-distant future.
The Amazon founder and then-CEO told a group of the company's top device executives to get to work on building one, and within a few years, the team came up with the $1,450 Astro.
The public got its first look at Astro, essentially an Alexa-equipped tablet on wheels that can autonomously navigate a home, recognize faces and act as a roving security monitor, when it rolled on stage at Amazon's fall 2021 event.
But it never evolved beyond an invite-only product. Astro shipped to just a few thousand customers, some of whom now believe the robot's days are numbered. The company also released an Astro for businesses in 2023, before sunsetting it less than a year later.
Amazon isn't giving up on Bezos' dream of a household robot just yet, despite its stumbles with Astro.
Over the past several months, the company has assembled a new team that's working on a "new-to-world robot product," according to a CNBC analysis of job posts.
"Robots are about to step out of the movies and into our homes," a recent job listing for an engineer, which has since been removed, stated. The post details a product capable of navigating "dynamic home environments" and "autonomous operation alongside family members."
Amazon is known for making long-term bets at the risk of "being misunderstood" in the short term if it gives the company an early advantage in new markets, like it did with the Alexa voice assistant or Kindle e-reader.
CEO Andy Jassy reminded investors of this approach in his latest annual letter, where he said artificial intelligence and robotics were among the "biggest inflections of our lifetime."
"We try to anticipate what will make customers' lives easier and better every day, and invent the next inflection," Jassy wrote.
Analysts also expect the humanoid market to surge in the coming years. Barclays forecast in a January report that the global market, which it currently values at $2 billion to $3 billion, could reach roughly $40 billion by 2035, or as high as $200 billion "under the most optimistic scenarios."
Earlier this year, Amazon redeployed much of the team behind Astro and brought in an MIT roboticist to work on the home robot project, LinkedIn profiles show.
It also made a splashy acquisition to supercharge the effort.
In March, Amazon scooped up New York-based Fauna Robotics, which has built a 3.5-foot-tall humanoid called Sprout. At the time, the company said Fauna would become part of a new division dubbed the Personal Robotics Group.
Some Personal Robotics Group staffers previously worked in Amazon's Lab126 R&D unit, which has been behind many of Amazon's most successful consumer hardware products, like the Kindle e-reader, Echo smart speakers, Fire TV and Fire Tablet. Lab126 was also behind one of Amazon's biggest flops, the Fire Phone.
It's unclear what kind of home robot the group is developing, or the types of tasks it could handle, but a June job posting hinted at an effort to "create robots that are not just functional, but delightful."
Amazon could be looking to adapt Fauna's robots for homes or businesses. The Sprout humanoid, which was designed to be "friendly and capable" with expressive yellow eyebrows, has primarily been used by developers, as well as commercial and academic researchers.
An Amazon job posting published online in October describes a "Field Support Engineer" who can assist with customer support and on-site repair, while another listing seeks a user experience designer to "define what it feels like to live with a Fauna robot."
"Our goal is simple: make robots people actually want to live and interact with in everyday human spaces," the listing states.
Amazon spokesperson Brad Glasser told CNBC in a statement that the company acquired Fauna because it's "committed to tackling the challenges that can unlock the personal robotics category."
"We're optimistic about a future where personal robots are helping people in meaningful ways in everyday life, and we intend to play an important role in making that future a reality," Glasser said.
Glasser noted that there remains a substantial gap between what's possible in a controlled lab and what's possible in settings like the living room or a lobby. Amazon is working with the robotics community to solve these challenges, he said.
Emily Lugo Velez has been living with the Astro in her North Carolina home since 2023. Lugo Velez, who worked in IT and now runs an AI advisory business, said she and her husband weren't fazed by the robot's $1,000-plus price tag and quickly joined the waitlist.
"We spent so much money on this thing," Lugo Velez, 52, said in an interview. "I feel like we're just stuck with it, and we'll let it run around the house until it eventually dies, then send it to the trash heap."
She said she still uses the device to check on her pets and appliances when she's out of the house. But beyond that, Astro has primarily become a party trick and a "trip hazard."
Most days, she tells Astro to go back to its charging dock.
Executives who worked on Astro had discussed making it more capable by attaching an arm to pick up and inspect items without breaking them, said Ken Washington, who served as Amazon's VP of consumer robotics until 2023.
He told CNBC that he pushed for a bipedal robot, but leadership disagreed.
"We had Jeff [Bezos] in for show and tells and reviews, and I watched his body language pretty closely," Washington said. "I think he was disappointed with the lack of functionality, but I think he was impressed with its ability to map and navigate an undefined space under all lighting conditions."
For all the struggles with Astro, Amazon has a rich history in robotics.
The company acquired Kiva Systems for $775 million in 2012, which introduced mobile robots to its vast fulfillment network. Since then, Amazon's warehouse automation efforts have ballooned to over one million robots across its facilities that can pick, sort and ferry items to workers.
But homes offer unique obstacles for robots to navigate.
"The home is a completely different space," said Jeff Burnstein, president of the trade group Association for Advancing Automation, who has been in the robotics industry for 45 years. "Children, pets, grandparents, stairways. Nobody's home is set up exactly the same, so it's a much more challenging environment for a robot, certainly a robot that's walking."
Amazon may have more luck its second time around because the tools for building robots have advanced by "leaps and bounds" over the past few years, said Colin Angle, a co-founder and former CEO of Roomba maker iRobot.
Amazon attempted to acquire iRobot in 2022 before walking away from the deal two years later amid growing regulatory pushback.
"The toolkit that the Astro team had when they did it was clubs with nails in them, just incredibly primitive," Angle said. "It's difficult to understate just how much the robot industry has changed in the last two years."
Advances in AI models, sensors, battery systems and key mechanical components like actuators have spurred a new wave of development around robots for industrial and consumer use.
Elon Musk's Tesla has been developing its bipedal Optimus robots since 2021. Startups including Apptronik, Boston Dynamics, China's Unitree, Figure and 1X are also building humanoids. Agility Robotics, the company behind the bipedal Digit robot that counts Amazon as one of its backers, went public via a SPAC on Thursday.
Venture capital firms poured $33.4 billion into robotics and physical AI companies in the first half of the year, compared with $28.7 billion for all of 2025, according to PitchBook data.
Most humanoids are being developed with the manufacturing, logistics and healthcare industries in mind, but a growing group of companies are attempting to build robots for the home.
Apple is reportedly working on several home robot projects, including a tabletop device that resembles the Pixar lamp. Hugging Face, which Nvidia agreed to acquire for almost $13 billion in September, released the $399 Microduck in August. Angle, in May, launched a startup building fuzzy companion robots called Familiar Machines & Magic. Companies including Sunday, Tau and Nori claim their robots can help with household chores like folding laundry and clearing the table, but they remain mostly prototype or niche devices.
"[Astro] was so ahead of its time," Washington said. "It was such a big, massive leap that I felt like we had the right to own the home."
The robot's limited functionality and its $1,000-plus price tag likely made it a tough sell for many consumers, said a former Amazon employee who worked on Astro, who asked not to be named in order to speak frankly about the project.
"Our poor little Astro was around $2,000 when it came out, and that's a lot," the ex-employee said. "That's a lot for a consumer, and they want a robot that does a lot."
Amazon takes a long term view on new markets like personal robotics, and values what can be gained by being an early entrant, Glasser said.
Astro was designed to help Amazon build competencies and focus its ambition, he added. The company has applied many of the learnings, talent and experience from Astro into its other robotics efforts, Glasser said.
In Facebook groups for Astro owners, users have complained of diminished customer service and griped that Amazon's AIexa+ AI assistant isn't supported on Astro.
Some users have interpreted this to mean Astro could be discontinued. Others have tried to dump their units at a discount on eBay and Facebook Marketplace.
Glasser said Amazon continues to support Astro customers.
Joe Martin, an Astro owner who lives near Tucson, Arizona, said he feels he's gotten his money's worth out of the device over the past four years. He'd welcome another robot into his home if it could do more, like helping out around the house.
"Astro was $1,000 and it was pretty limited, but if it could bring a drink to me or dust furniture, I'd be intrigued by that," Martin, 65, said. "I think that's right around the corner."`,
    bodyJa: `Jeff Bezos made a bold bet in 2017. A sci-fi and robotics enthusiast, Bezos was convinced that consumers would have a robot in their home in the not-too-distant future.
The Amazon founder and then-CEO told a group of the company's top device executives to get to work on building one, and within a few years, the team came up with the $1,450 Astro.
The public got its first look at Astro, essentially an Alexa-equipped tablet on wheels that can autonomously navigate a home, recognize faces and act as a roving security monitor, when it rolled on stage at Amazon's fall 2021 event.
But it never evolved beyond an invite-only product. Astro shipped to just a few thousand customers, some of whom now believe the robot's days are numbered. The company also released an Astro for businesses in 2023, before sunsetting it less than a year later.
Amazon isn't giving up on Bezos' dream of a household robot just yet, despite its stumbles with Astro.
Over the past several months, the company has assembled a new team that's working on a "new-to-world robot product," according to a CNBC analysis of job posts.
"Robots are about to step out of the movies and into our homes," a recent job listing for an engineer, which has since been removed, stated. The post details a product capable of navigating "dynamic home environments" and "autonomous operation alongside family members."
Amazon is known for making long-term bets at the risk of "being misunderstood" in the short term if it gives the company an early advantage in new markets, like it did with the Alexa voice assistant or Kindle e-reader.
CEO Andy Jassy reminded investors of this approach in his latest annual letter, where he said artificial intelligence and robotics were among the "biggest inflections of our lifetime."
"We try to anticipate what will make customers' lives easier and better every day, and invent the next inflection," Jassy wrote.
Analysts also expect the humanoid market to surge in the coming years. Barclays forecast in a January report that the global market, which it currently values at $2 billion to $3 billion, could reach roughly $40 billion by 2035, or as high as $200 billion "under the most optimistic scenarios."
Earlier this year, Amazon redeployed much of the team behind Astro and brought in an MIT roboticist to work on the home robot project, LinkedIn profiles show.
It also made a splashy acquisition to supercharge the effort.
In March, Amazon scooped up New York-based Fauna Robotics, which has built a 3.5-foot-tall humanoid called Sprout. At the time, the company said Fauna would become part of a new division dubbed the Personal Robotics Group.
Some Personal Robotics Group staffers previously worked in Amazon's Lab126 R&D unit, which has been behind many of Amazon's most successful consumer hardware products, like the Kindle e-reader, Echo smart speakers, Fire TV and Fire Tablet. Lab126 was also behind one of Amazon's biggest flops, the Fire Phone.
It's unclear what kind of home robot the group is developing, or the types of tasks it could handle, but a June job posting hinted at an effort to "create robots that are not just functional, but delightful."
Amazon could be looking to adapt Fauna's robots for homes or businesses. The Sprout humanoid, which was designed to be "friendly and capable" with expressive yellow eyebrows, has primarily been used by developers, as well as commercial and academic researchers.
An Amazon job posting published online in October describes a "Field Support Engineer" who can assist with customer support and on-site repair, while another listing seeks a user experience designer to "define what it feels like to live with a Fauna robot."
"Our goal is simple: make robots people actually want to live and interact with in everyday human spaces," the listing states.
Amazon spokesperson Brad Glasser told CNBC in a statement that the company acquired Fauna because it's "committed to tackling the challenges that can unlock the personal robotics category."
"We're optimistic about a future where personal robots are helping people in meaningful ways in everyday life, and we intend to play an important role in making that future a reality," Glasser said.
Glasser noted that there remains a substantial gap between what's possible in a controlled lab and what's possible in settings like the living room or a lobby. Amazon is working with the robotics community to solve these challenges, he said.
Emily Lugo Velez has been living with the Astro in her North Carolina home since 2023. Lugo Velez, who worked in IT and now runs an AI advisory business, said she and her husband weren't fazed by the robot's $1,000-plus price tag and quickly joined the waitlist.
"We spent so much money on this thing," Lugo Velez, 52, said in an interview. "I feel like we're just stuck with it, and we'll let it run around the house until it eventually dies, then send it to the trash heap."
She said she still uses the device to check on her pets and appliances when she's out of the house. But beyond that, Astro has primarily become a party trick and a "trip hazard."
Most days, she tells Astro to go back to its charging dock.
Executives who worked on Astro had discussed making it more capable by attaching an arm to pick up and inspect items without breaking them, said Ken Washington, who served as Amazon's VP of consumer robotics until 2023.
He told CNBC that he pushed for a bipedal robot, but leadership disagreed.
"We had Jeff [Bezos] in for show and tells and reviews, and I watched his body language pretty closely," Washington said. "I think he was disappointed with the lack of functionality, but I think he was impressed with its ability to map and navigate an undefined space under all lighting conditions."
For all the struggles with Astro, Amazon has a rich history in robotics.
The company acquired Kiva Systems for $775 million in 2012, which introduced mobile robots to its vast fulfillment network. Since then, Amazon's warehouse automation efforts have ballooned to over one million robots across its facilities that can pick, sort and ferry items to workers.
But homes offer unique obstacles for robots to navigate.
"The home is a completely different space," said Jeff Burnstein, president of the trade group Association for Advancing Automation, who has been in the robotics industry for 45 years. "Children, pets, grandparents, stairways. Nobody's home is set up exactly the same, so it's a much more challenging environment for a robot, certainly a robot that's walking."
Amazon may have more luck its second time around because the tools for building robots have advanced by "leaps and bounds" over the past few years, said Colin Angle, a co-founder and former CEO of Roomba maker iRobot.
Amazon attempted to acquire iRobot in 2022 before walking away from the deal two years later amid growing regulatory pushback.
"The toolkit that the Astro team had when they did it was clubs with nails in them, just incredibly primitive," Angle said. "It's difficult to understate just how much the robot industry has changed in the last two years."
Advances in AI models, sensors, battery systems and key mechanical components like actuators have spurred a new wave of development around robots for industrial and consumer use.
Elon Musk's Tesla has been developing its bipedal Optimus robots since 2021. Startups including Apptronik, Boston Dynamics, China's Unitree, Figure and 1X are also building humanoids. Agility Robotics, the company behind the bipedal Digit robot that counts Amazon as one of its backers, went public via a SPAC on Thursday.
Venture capital firms poured $33.4 billion into robotics and physical AI companies in the first half of the year, compared with $28.7 billion for all of 2025, according to PitchBook data.
Most humanoids are being developed with the manufacturing, logistics and healthcare industries in mind, but a growing group of companies are attempting to build robots for the home.
Apple is reportedly working on several home robot projects, including a tabletop device that resembles the Pixar lamp. Hugging Face, which Nvidia agreed to acquire for almost $13 billion in September, released the $399 Microduck in August. Angle, in May, launched a startup building fuzzy companion robots called Familiar Machines & Magic. Companies including Sunday, Tau and Nori claim their robots can help with household chores like folding laundry and clearing the table, but they remain mostly prototype or niche devices.
"[Astro] was so ahead of its time," Washington said. "It was such a big, massive leap that I felt like we had the right to own the home."
The robot's limited functionality and its $1,000-plus price tag likely made it a tough sell for many consumers, said a former Amazon employee who worked on Astro, who asked not to be named in order to speak frankly about the project.
"Our poor little Astro was around $2,000 when it came out, and that's a lot," the ex-employee said. "That's a lot for a consumer, and they want a robot that does a lot."
Amazon takes a long term view on new markets like personal robotics, and values what can be gained by being an early entrant, Glasser said.
Astro was designed to help Amazon build competencies and focus its ambition, he added. The company has applied many of the learnings, talent and experience from Astro into its other robotics efforts, Glasser said.
In Facebook groups for Astro owners, users have complained of diminished customer service and griped that Amazon's AIexa+ AI assistant isn't supported on Astro.
Some users have interpreted this to mean Astro could be discontinued. Others have tried to dump their units at a discount on eBay and Facebook Marketplace.
Glasser said Amazon continues to support Astro customers.
Joe Martin, an Astro owner who lives near Tucson, Arizona, said he feels he's gotten his money's worth out of the device over the past four years. He'd welcome another robot into his home if it could do more, like helping out around the house.
"Astro was $1,000 and it was pretty limited, but if it could bring a drink to me or dust furniture, I'd be intrigued by that," Martin, 65, said. "I think that's right around the corner."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/08/amazon-home-robot-fauna-sprout.html",
    publishedAt: "2026-11-08T13:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "this-market-signal-called-the-tech-sello-031f99a2",
    title: "This market signal called the tech selloff. Now it’s sending another warning.",
    titleJa: "This market signal called the tech selloff. Now it’s sending another warning.",
    summaryJa: "Correlations between individual stocks recently hit a record low, and a reversion to the mean may not be a good thing for the market.",
    bodyOriginal: `Correlations between individual stocks recently hit a record low, and a reversion to the mean may not be a good thing for the market.`,
    bodyJa: `Correlations between individual stocks recently hit a record low, and a reversion to the mean may not be a good thing for the market.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/this-market-signal-called-the-tech-selloff-now-its-sending-another-warning-f7f8eb9b?mod=mw_rss_topstories",
    publishedAt: "2026-11-08T12:00:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-68677954",
    readTime: 2,
  },
  {
    id: "government-looking-seriously-at-banning-1fc8f37b",
    title: "Government 'looking seriously' at banning under-16s from Vinted and eBay",
    titleJa: "Government 'looking seriously' at banning under-16s from Vinted and eBay",
    summaryJa: "The culture secretary confirms reports they could be in the list of platforms set to be banned next March.",
    bodyOriginal: `Government 'looking seriously' at banning under-16s from Vinted and eBay
- Published
Vinted and eBay could be included in the list of platforms set to be banned for under-16s, the culture secretary has said.
Lisa Nandy said the government was "looking seriously" at including the retailing websites in the social media ban "in order to keep children safe".
The UK's social media ban for those under the age of 16 is set to come into force in March next year, with children barred from accessing platforms such as Instagram, TikTok and Snapchat.
In response, eBay said it was looking forward to "understanding more and continuing to work constructively with the government". Vinted has not responded to requests for comment.
Asked on the BBC's Sunday with Laura Kuenssberg if the government was looking to ban under-16s from Vinted and eBay, Nandy said: "We are looking seriously at doing so in order to keep children safe."
It came after the Sunday Times reported, external that the UK's social media ban was being expanded to include the platforms, which are popular for selling second-hand goods.
The newspaper said the move was over fears that messaging functions allowed strangers to groom children. It suggested similar reselling platforms, Depop and Facebook Marketplace, would also be included in the list of banned sites.
Businesses and individuals sell a host of goods on eBay, which has been a major global player in the online reselling market for years. The platform states on its website that it currently requires all of its members to be over 18 years old because listings involve "entering into a contract".
Vinted also says its users need to be at least 18 years old. The site, which mostly sees users buy and sell unwanted clothes and other fashion items, has grown rapidly in recent times to reach 17 million UK users.
An eBay spokesperson said the company was "focused on providing a trusted and safe marketplace experience for our millions of customers".
"While the details of the proposed legislation are not yet clear, we look forward to understanding more and continuing to work constructively with the government," they added in a statement.
The government announced it would ban under-16s accessing social media in June this year, with children prevented from accessing 10 of the biggest platforms.
YouTube will also be banned for under-16s, but YouTube Kids - a version of the video-sharing app designed to be safe for children - will not be included.
A complete list of affected platforms has not yet been released, but the government said it would cover those "whose purpose is to enable social interaction and which allow users to post material".
That means platforms which have livestreaming or features that enable the potential for strangers to contact children will also be restricted, which includes gaming sites.
It does not mean that Roblox, the biggest gaming site in the UK for eight to 12-year-olds for example, will be banned for under-16s. However, certain features such as its chat function will be restricted.
The UK's ban comes after a similar one was introduced in Australia last year.
Many children there have found ways to get round it, but the UK has said it intends to take a tougher approach.
In recent weeks, attention has turned to how such a ban would be enforced.
Last month, the communications regulator Ofcom set out its recommendations for the most effective ways to identify which of the UK's millions of social media users are aged over 16.`,
    bodyJa: `Government 'looking seriously' at banning under-16s from Vinted and eBay
- Published
Vinted and eBay could be included in the list of platforms set to be banned for under-16s, the culture secretary has said.
Lisa Nandy said the government was "looking seriously" at including the retailing websites in the social media ban "in order to keep children safe".
The UK's social media ban for those under the age of 16 is set to come into force in March next year, with children barred from accessing platforms such as Instagram, TikTok and Snapchat.
In response, eBay said it was looking forward to "understanding more and continuing to work constructively with the government". Vinted has not responded to requests for comment.
Asked on the BBC's Sunday with Laura Kuenssberg if the government was looking to ban under-16s from Vinted and eBay, Nandy said: "We are looking seriously at doing so in order to keep children safe."
It came after the Sunday Times reported, external that the UK's social media ban was being expanded to include the platforms, which are popular for selling second-hand goods.
The newspaper said the move was over fears that messaging functions allowed strangers to groom children. It suggested similar reselling platforms, Depop and Facebook Marketplace, would also be included in the list of banned sites.
Businesses and individuals sell a host of goods on eBay, which has been a major global player in the online reselling market for years. The platform states on its website that it currently requires all of its members to be over 18 years old because listings involve "entering into a contract".
Vinted also says its users need to be at least 18 years old. The site, which mostly sees users buy and sell unwanted clothes and other fashion items, has grown rapidly in recent times to reach 17 million UK users.
An eBay spokesperson said the company was "focused on providing a trusted and safe marketplace experience for our millions of customers".
"While the details of the proposed legislation are not yet clear, we look forward to understanding more and continuing to work constructively with the government," they added in a statement.
The government announced it would ban under-16s accessing social media in June this year, with children prevented from accessing 10 of the biggest platforms.
YouTube will also be banned for under-16s, but YouTube Kids - a version of the video-sharing app designed to be safe for children - will not be included.
A complete list of affected platforms has not yet been released, but the government said it would cover those "whose purpose is to enable social interaction and which allow users to post material".
That means platforms which have livestreaming or features that enable the potential for strangers to contact children will also be restricted, which includes gaming sites.
It does not mean that Roblox, the biggest gaming site in the UK for eight to 12-year-olds for example, will be banned for under-16s. However, certain features such as its chat function will be restricted.
The UK's ban comes after a similar one was introduced in Australia last year.
Many children there have found ways to get round it, but the UK has said it intends to take a tougher approach.
In recent weeks, attention has turned to how such a ban would be enforced.
Last month, the communications regulator Ofcom set out its recommendations for the most effective ways to identify which of the UK's millions of social media users are aged over 16.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmzxjvpqrjxro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-08T11:25:32+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1427/live/5d17fd80-db61-11f1-adda-c54f54e3ce6a.jpg",
    readTime: 9,
  },
  {
    id: "in-pictures-france-protests-draw-146-000-90b0804b",
    title: "In pictures: France protests draw 146,000 as clashes erupt for fourth straight weekend",
    titleJa: "In pictures: France protests draw 146,000 as clashes erupt for fourth straight weekend",
    summaryJa: "France's Interior Ministry counted 146,000 protesters Saturday as demonstrations over living costs public services entered a fourth consecutive weekend.",
    bodyOriginal: `Protesters clashed with police in France on Saturday as demonstrations over living costs and public services entered a fourth consecutive weekend and drew students, trade unions and members of the revived "Yellow Vest" movement onto the streets.
The country's Interior Ministry counted 146,000 demonstrators nationwide, including 46,000 in Paris. A youth union alliance put attendance at 250,000 nationally and 75,000 in the capital. At least 360 people were arrested across the country, AFP reported, citing a ministry tally.
Police used tear gas against people throwing projectiles as the main Paris march ended at Place de la Nation, per AFP. Garbage cans were set alight as protesters and police clashed in several cities, according to Le Monde.
Police blocked a separate, banned Yellow Vest gathering at Place de la Concorde and arrested two movement leaders, Le Monde reported.
The Yellow Vests emerged in 2018 in opposition to fuel-tax increases, before broadening into a movement protesting high living costs and the policies of President Emmanuel Macron.
The turnout was lower than on the previous three weekends. It was also below union-led demonstrations on Nov. 5, when the Interior Ministry counted 575,000 people nationwide.
The protests began in late September with high-school students demanding better conditions, before university students and unions joined.
This weekend's protests come after French lawmakers rejected the revenue section of the 2027 budget, as the government wrestles with addressing public anger while trying to rein in its finances.
The government's original proposal now goes to the Senate, which is scheduled to begin debating it Nov. 20.
Prime Minister Sébastien Lecornu is due to meet labor and employer representatives Monday to discuss wages and purchasing power.`,
    bodyJa: `Protesters clashed with police in France on Saturday as demonstrations over living costs and public services entered a fourth consecutive weekend and drew students, trade unions and members of the revived "Yellow Vest" movement onto the streets.
The country's Interior Ministry counted 146,000 demonstrators nationwide, including 46,000 in Paris. A youth union alliance put attendance at 250,000 nationally and 75,000 in the capital. At least 360 people were arrested across the country, AFP reported, citing a ministry tally.
Police used tear gas against people throwing projectiles as the main Paris march ended at Place de la Nation, per AFP. Garbage cans were set alight as protesters and police clashed in several cities, according to Le Monde.
Police blocked a separate, banned Yellow Vest gathering at Place de la Concorde and arrested two movement leaders, Le Monde reported.
The Yellow Vests emerged in 2018 in opposition to fuel-tax increases, before broadening into a movement protesting high living costs and the policies of President Emmanuel Macron.
The turnout was lower than on the previous three weekends. It was also below union-led demonstrations on Nov. 5, when the Interior Ministry counted 575,000 people nationwide.
The protests began in late September with high-school students demanding better conditions, before university students and unions joined.
This weekend's protests come after French lawmakers rejected the revenue section of the 2027 budget, as the government wrestles with addressing public anger while trying to rein in its finances.
The government's original proposal now goes to the Senate, which is scheduled to begin debating it Nov. 20.
Prime Minister Sébastien Lecornu is due to meet labor and employer representatives Monday to discuss wages and purchasing power.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/08/france-protests-clashes-arrests.html",
    publishedAt: "2026-11-08T09:29:04+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "cathie-wood-always-feels-better-when-the-3ee3e751",
    title: "Cathie Wood 'always feels better when the market is worried' — here's why",
    titleJa: "Cathie Wood 'always feels better when the market is worried' — here's why",
    summaryJa: "Ark Invest CEO Cathie Wood is shrugging off this week's market jitters, telling CNBC on Friday that concerns among investors actually reinforce her optimism that further gains lie ahead.U.S. equities sold off sharply on Thursday, reversing the initial rally seen in the wake of the midterm elections. AI-related stocks led the rout, sending the tech-heavy Nasdaq Composite into correction territory. On Friday, tech stocks staged a tentative recovery.",
    bodyOriginal: `Ark Invest CEO Cathie Wood is shrugging off this week's market jitters, telling CNBC on Friday that concerns among investors actually reinforce her optimism that further gains lie ahead.
U.S. equities sold off sharply on Thursday, reversing the initial rally seen in the wake of the midterm elections. AI-related stocks led the rout, sending the tech-heavy Nasdaq Composite into correction territory. On Friday, tech stocks staged a tentative recovery.
Much of the sell-off on Thursday was driven by concerns that a Democrat-led Congress would lead to a slowdown in data center construction. But concerns about artificial intelligence – particularly when it comes to capital expenditure, cash flow, debt and circular financing – have sparked multiple bouts of volatility over the course of this year.
Wood, whose firm manages various funds focused on tech and innovation, told CNBC there was a "wall of worry" pervading financial markets right now. But her decades of experience as an investor give her a somewhat unconventional view of the state of play.
"I experienced the tech and telecom bubble, and you know there really wasn't much worry about it," she said. "It was the 80s and the 90s, and it was a bull market, and people were just assuming this would go to the moon, that is not how this [the AI trade] has evolved."
She explained that "from the beginning," many investors have been concerned about how much firms are spending on AI development, how rapidly the spending is taking place, and how the hyperscalers have moved from extreme levels of positive free cash flow to negative free cash flow.
"So it's been unsettling the markets for quite some time," she said. "I always feel better when the market is worried, because that tends to suggest a more durable bull market, and I don't think we've derailed this bull market."
Markets face 'wall of worry'
In 2025, her flagship Ark Innovation ETF gained more than 35%, far outperforming the S&P 500's 16.4% rise and the Nasdaq Composite's 20.5% rally.
Asked on Friday whether markets were anywhere near the end of the current bull run, Wood replied: "I don't think so."
"I think we're in the middle of a technology revolution," she said, pointing to the development of technologies like robotaxis and AI agents.
One thing that did risk becoming a "showstopper," Wood noted, was the rising cost of capital.
Interest rates and bond yields have risen sharply this year as the U.S.-Iran war pushes inflation higher across the globe. Yields on corporate bonds have been rising too, with creditors demanding greater compensation for lending to companies.
"This correction is partly caused by what's going on in the bond markets," Wood said on Friday.
"I had been saying for quite some time that the wall of worry has been built by senior leaders in the financial world who were young during the bubble," she said.
"It's the elder statesmen and women of the industry who are keeping this wall of worry in place, and that's not bad. Now you can add the bond investor to that. Bond investors in the old days weren't necessary for technology. It was software. It was low fixed cost. It was viral apps, very high margins. [AI] is high fixed cost, so bond investors are experiencing or taking a journey into the technology world, really that they haven't very much before."
But she noted that AI hyperscalers were somewhat insulated by opportunities for growth.
"If a company thinks that taking on debt is going to accelerate its momentum, meaning its growth rate, it hardly matters what happens to interest rates for those companies," Wood explained.
Wood said her advice to investors in the current volatile environment was to identify their high-conviction positions and double down on them as the market shifts.
"When you see a rally in a volatile environment, take some profits. When you see a sell-off, you'll have the psychological wherewithal if you have taken profits to move back in," she said.
"That's what we do. So what we do during periods like this is concentrate towards our highest conviction names. So that's what we've been doing in the last week or so. Our SpaceX position has gone up. If anything, the controversy around data centers on Earth is giving data centers in space a bigger opportunity."
In 2027, Wood said she expects the equity rally to continue.
"This is two steps forward, one step back," she said of the post-election turbulence. "The revolution will become clearer and clearer next year, and I think the market will do well."`,
    bodyJa: `Ark Invest CEO Cathie Wood is shrugging off this week's market jitters, telling CNBC on Friday that concerns among investors actually reinforce her optimism that further gains lie ahead.
U.S. equities sold off sharply on Thursday, reversing the initial rally seen in the wake of the midterm elections. AI-related stocks led the rout, sending the tech-heavy Nasdaq Composite into correction territory. On Friday, tech stocks staged a tentative recovery.
Much of the sell-off on Thursday was driven by concerns that a Democrat-led Congress would lead to a slowdown in data center construction. But concerns about artificial intelligence – particularly when it comes to capital expenditure, cash flow, debt and circular financing – have sparked multiple bouts of volatility over the course of this year.
Wood, whose firm manages various funds focused on tech and innovation, told CNBC there was a "wall of worry" pervading financial markets right now. But her decades of experience as an investor give her a somewhat unconventional view of the state of play.
"I experienced the tech and telecom bubble, and you know there really wasn't much worry about it," she said. "It was the 80s and the 90s, and it was a bull market, and people were just assuming this would go to the moon, that is not how this [the AI trade] has evolved."
She explained that "from the beginning," many investors have been concerned about how much firms are spending on AI development, how rapidly the spending is taking place, and how the hyperscalers have moved from extreme levels of positive free cash flow to negative free cash flow.
"So it's been unsettling the markets for quite some time," she said. "I always feel better when the market is worried, because that tends to suggest a more durable bull market, and I don't think we've derailed this bull market."
Markets face 'wall of worry'
In 2025, her flagship Ark Innovation ETF gained more than 35%, far outperforming the S&P 500's 16.4% rise and the Nasdaq Composite's 20.5% rally.
Asked on Friday whether markets were anywhere near the end of the current bull run, Wood replied: "I don't think so."
"I think we're in the middle of a technology revolution," she said, pointing to the development of technologies like robotaxis and AI agents.
One thing that did risk becoming a "showstopper," Wood noted, was the rising cost of capital.
Interest rates and bond yields have risen sharply this year as the U.S.-Iran war pushes inflation higher across the globe. Yields on corporate bonds have been rising too, with creditors demanding greater compensation for lending to companies.
"This correction is partly caused by what's going on in the bond markets," Wood said on Friday.
"I had been saying for quite some time that the wall of worry has been built by senior leaders in the financial world who were young during the bubble," she said.
"It's the elder statesmen and women of the industry who are keeping this wall of worry in place, and that's not bad. Now you can add the bond investor to that. Bond investors in the old days weren't necessary for technology. It was software. It was low fixed cost. It was viral apps, very high margins. [AI] is high fixed cost, so bond investors are experiencing or taking a journey into the technology world, really that they haven't very much before."
But she noted that AI hyperscalers were somewhat insulated by opportunities for growth.
"If a company thinks that taking on debt is going to accelerate its momentum, meaning its growth rate, it hardly matters what happens to interest rates for those companies," Wood explained.
Wood said her advice to investors in the current volatile environment was to identify their high-conviction positions and double down on them as the market shifts.
"When you see a rally in a volatile environment, take some profits. When you see a sell-off, you'll have the psychological wherewithal if you have taken profits to move back in," she said.
"That's what we do. So what we do during periods like this is concentrate towards our highest conviction names. So that's what we've been doing in the last week or so. Our SpaceX position has gone up. If anything, the controversy around data centers on Earth is giving data centers in space a bigger opportunity."
In 2027, Wood said she expects the equity rally to continue.
"This is two steps forward, one step back," she said of the post-election turbulence. "The revolution will become clearer and clearer next year, and I think the market will do well."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/08/cathie-wood-ai-selloff.html",
    publishedAt: "2026-11-08T06:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "houthis-say-at-least-33-killed-in-saudi-d281ebb0",
    title: "Houthis say at least 33 killed in Saudi air strike",
    titleJa: "Houthis say at least 33 killed in Saudi air strike",
    summaryJa: "Saudi Arabia, which leads a coalition fighting the Houthis in Yemen, has not commented.",
    bodyOriginal: `Houthis say at least 33 killed in Saudi air strike
- Published
Media linked to the Houthi movement in Yemen say at least 33 people, including women and children, have been killed in air strikes by Saudi Arabia.
There has been no comment from the Saudi-led coalition backing the internationally recognised government in Yemen.
Live video footage on Al Masirah - a television station run by the Houthis - has shown rescuers pulling bodies out of the rubble of several buildings in al-Shariyah, a town to the east of the capital, Sanaa.
The bodies of young children can be seen among those dug out from the ruins.
The television station has also shown a number of injured people being carried on stretchers to hospital.
Saba news agency, which is also run by the Houthis, said the attack was carried out by Saudi Arabia on Saturday. It added that 39 people had been injured.
The Saudis have led a coalition that has been fighting the Houthis for more than a decade in support of Yemen's internationally recognised government.
The war in Yemen had been dormant for several years but reignited as a result of the Iran war.
A truce began to fall apart when Saudi Arabia struck the airport in Sanaa - which is controlled by the Houthis - to prevent an Iranian plane landing there.
The Tehran-backed Houthis subsequently targeted Abha airport in Saudi Arabia, then began hitting Saudi ships that have been using the Red Sea off the coast of Yemen as an alternative oil export route to the Strait of Hormuz.
Major fighting has since resumed in Yemen between the Houthis and forces fighting for the Saudi-backed government of Yemen.
On Friday, an attack on a market in Taiz province, which has been the focus of much of the recent fighting, is reported to have killed 30 people.
The Houthis accused the Saudis of carrying out the strike, while government forces accused the Houthis of having fired a missile at the site.
The United Nations says more than 1,600 people have been killed and more than 300,000 displaced since fighting resumed.
The Saudis have regularly bombed Houthi positions, while the group has fired multiple missiles at targets inside Saudi Arabia, including airports and oil facilities.
Hours before the strike that hit al-Shariyah, the Saudi-led coalition said it intercepted a missile heading towards Riyadh.
A Houthi leader, Mahdi al-Mashat, has vowed that the group will take revenge for the latest attacks in Yemen.`,
    bodyJa: `Houthis say at least 33 killed in Saudi air strike
- Published
Media linked to the Houthi movement in Yemen say at least 33 people, including women and children, have been killed in air strikes by Saudi Arabia.
There has been no comment from the Saudi-led coalition backing the internationally recognised government in Yemen.
Live video footage on Al Masirah - a television station run by the Houthis - has shown rescuers pulling bodies out of the rubble of several buildings in al-Shariyah, a town to the east of the capital, Sanaa.
The bodies of young children can be seen among those dug out from the ruins.
The television station has also shown a number of injured people being carried on stretchers to hospital.
Saba news agency, which is also run by the Houthis, said the attack was carried out by Saudi Arabia on Saturday. It added that 39 people had been injured.
The Saudis have led a coalition that has been fighting the Houthis for more than a decade in support of Yemen's internationally recognised government.
The war in Yemen had been dormant for several years but reignited as a result of the Iran war.
A truce began to fall apart when Saudi Arabia struck the airport in Sanaa - which is controlled by the Houthis - to prevent an Iranian plane landing there.
The Tehran-backed Houthis subsequently targeted Abha airport in Saudi Arabia, then began hitting Saudi ships that have been using the Red Sea off the coast of Yemen as an alternative oil export route to the Strait of Hormuz.
Major fighting has since resumed in Yemen between the Houthis and forces fighting for the Saudi-backed government of Yemen.
On Friday, an attack on a market in Taiz province, which has been the focus of much of the recent fighting, is reported to have killed 30 people.
The Houthis accused the Saudis of carrying out the strike, while government forces accused the Houthis of having fired a missile at the site.
The United Nations says more than 1,600 people have been killed and more than 300,000 displaced since fighting resumed.
The Saudis have regularly bombed Houthi positions, while the group has fired multiple missiles at targets inside Saudi Arabia, including airports and oil facilities.
Hours before the strike that hit al-Shariyah, the Saudi-led coalition said it intercepted a missile heading towards Riyadh.
A Houthi leader, Mahdi al-Mashat, has vowed that the group will take revenge for the latest attacks in Yemen.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c65yn1v99ypmo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-08T04:03:12+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2670/live/bfaac760-dacc-11f1-bda8-29fb69dbc026.jpg",
    readTime: 6,
  },
  {
    id: "what-we-know-so-far-after-krakow-gun-att-010bedcd",
    title: "What we know so far after Krakow gun attack",
    titleJa: "What we know so far after Krakow gun attack",
    summaryJa: "Six people were killed in a random shooting in the city's main square, and three bodies were later found at the home of the attacker.",
    bodyOriginal: `What we know so far after Krakow gun attack
- Published
At least six people were killed and more than a dozen others injured when a gunman suspected to have ties to the far-right opened fire in central Krakow, the second largest city in Poland.
Three bodies were found at his home when it was searched by police. Here is everything we know so far.
How did the attack unfold?
The attack began shortly before 15:00 local time (14:00 GMT) in Krakow's Main Market Square, the bustling central point of the city which is popular with tourists.
Police said a man drove into the square before beginning to fire "at random people from his car".
Footage from the scene shows scenes of panic as people fled, with the sound of gunfire clearly heard.
A passing tram was shot at during the apparently random attack, shattering windows but no passengers were injured.
Armed officers raced to the scene and engaged in a gunfight with the suspect, who was shot within three minutes of the attack beginning, preventing a further massacre, officials said.
A 25-year-old man who was arrested remains in hospital after having surgery for a gunshot wound.
Distressing footage authenticated by BBC Verify shows the moment a police officer confronts the suspect on the ground before firing his weapon several times.
The officer then falls to the ground, apparently having been injured himself.
Shop windows in the square have signs of damage, seemingly from bullets, with glass shards scattered along the floor.
City officials have urged people who live in the city and tourists to stay away from the area while an investigation continues.
The suspect's car, found at the intersection of Dietla and Stradomska streets, was checked for possible explosive devices, police said, but none were found. Residents of nearby buildings had been evacuated while the operation was under way.
How many people have died and been injured?
Six people - four women and two men - are confirmed to have been killed, including a British national. Three victims are Polish and two have not been identified.
Sixteen people, including five foreigners, two police officers and the attacker, were taken to hospital. The interior ministry later said they were from Austria, Britain, Germany, Portugal and Russia.
Poland's Prime Minister Donald Tusk later named the injured officers as Senior Constable Jakub Kulik and Senior Constable Artur Morański.
One of the police officers was described as being in a "very critical condition" by a Polish government minister after being shot three times while arresting the attacker. The officer is undergoing surgery, he added.
Polish authorities have not confirmed the names and ages of the other victims.
Tusk said three bodies - two women and one man - were found at the gunman's house when it was searched after the attack.
What do we know about the suspect and motive?
Police have identified the attacker as a 25-year-old Polish man but have not confirmed his name.
The suspect was wearing "military-style attire" and had a military-grade weapon, according to a police spokesperson. However, authorities said he was not a soldier.
"Many pieces of weapons and ammunition were found in his vehicle", the spokesperson added.
Polish media has reported the suspect had a firearms permit and may have obtained the weapons from his family home.
A minister has said early investigations indicate he was inspired by "far-right ideologies". The minister also described him as an "ultra-nationalist" without giving further details.
His home in Ostrowiec Świętokrzyski, a city around 200km (125 miles) from Krakow, has been searched with support from counter-terrorism police.
How did witnesses describe the attack?
The shooting happened in one of the largest medieval squares in Europe, a busy location which is also a popular tourist destination.
Jonathan Balshaw from Ipswich was there with his Polish girlfriend Dominika. The couple were outside St Mary's Basilica, in the corner of the square, when the shooting started.
Jonathan said: "We ran down the side of the church and through the side door and hid with several other people until the gunfire died down.
"A lot of shots were fired, more than 20 with it sounding like multiple different firearms - there were two distinctly different noises."
Caitlin Shasby from Newcastle arrived in Krakow yesterday with her friend Jon for a long weekend.
She said they heard shots from their hotel room but were not sure what was happening until their hotel rang them and told them to "stay in our rooms until further notice".
What has the reaction been in Poland and internationally?
After travelling to Krakow, Prime Minister Donald Tusk said : "Until now in Poland we haven't had such drastic cases of terrorism...that's what we have to call this cruel attack on people's lives here in Krakow."
Krakow Mayor Łukasz Gibała has signed an order declaring a period of mourning in the city which will last until Wednesday, 11 November.
UK Prime Minister Andy Burnham said: "I'm shocked and saddened by the appalling shooting in Kraków today."
"My thoughts are with the families of those who have lost their lives, everyone injured and all those affected by this senseless violence. The United Kingdom stands in solidarity with the people of Poland," he added.
British foreign secretary Ed Miliband said on social media the UK government "deeply mourns" those who died in the "appalling attack".
US ambassador to Poland Tom Rose described it as a "savage and murderous attack".
The EU's top diplomat, Kaja Kallas, said the shooting was "a tragedy that will be felt far beyond Poland".
President Volodymyr Zelensky of neighbouring Ukraine called the shooting "shocking."
"On behalf of the Ukrainian people, and personally, I extend my sincere condolences to the families and loved ones of the victims," he wrote on social media.`,
    bodyJa: `What we know so far after Krakow gun attack
- Published
At least six people were killed and more than a dozen others injured when a gunman suspected to have ties to the far-right opened fire in central Krakow, the second largest city in Poland.
Three bodies were found at his home when it was searched by police. Here is everything we know so far.
How did the attack unfold?
The attack began shortly before 15:00 local time (14:00 GMT) in Krakow's Main Market Square, the bustling central point of the city which is popular with tourists.
Police said a man drove into the square before beginning to fire "at random people from his car".
Footage from the scene shows scenes of panic as people fled, with the sound of gunfire clearly heard.
A passing tram was shot at during the apparently random attack, shattering windows but no passengers were injured.
Armed officers raced to the scene and engaged in a gunfight with the suspect, who was shot within three minutes of the attack beginning, preventing a further massacre, officials said.
A 25-year-old man who was arrested remains in hospital after having surgery for a gunshot wound.
Distressing footage authenticated by BBC Verify shows the moment a police officer confronts the suspect on the ground before firing his weapon several times.
The officer then falls to the ground, apparently having been injured himself.
Shop windows in the square have signs of damage, seemingly from bullets, with glass shards scattered along the floor.
City officials have urged people who live in the city and tourists to stay away from the area while an investigation continues.
The suspect's car, found at the intersection of Dietla and Stradomska streets, was checked for possible explosive devices, police said, but none were found. Residents of nearby buildings had been evacuated while the operation was under way.
How many people have died and been injured?
Six people - four women and two men - are confirmed to have been killed, including a British national. Three victims are Polish and two have not been identified.
Sixteen people, including five foreigners, two police officers and the attacker, were taken to hospital. The interior ministry later said they were from Austria, Britain, Germany, Portugal and Russia.
Poland's Prime Minister Donald Tusk later named the injured officers as Senior Constable Jakub Kulik and Senior Constable Artur Morański.
One of the police officers was described as being in a "very critical condition" by a Polish government minister after being shot three times while arresting the attacker. The officer is undergoing surgery, he added.
Polish authorities have not confirmed the names and ages of the other victims.
Tusk said three bodies - two women and one man - were found at the gunman's house when it was searched after the attack.
What do we know about the suspect and motive?
Police have identified the attacker as a 25-year-old Polish man but have not confirmed his name.
The suspect was wearing "military-style attire" and had a military-grade weapon, according to a police spokesperson. However, authorities said he was not a soldier.
"Many pieces of weapons and ammunition were found in his vehicle", the spokesperson added.
Polish media has reported the suspect had a firearms permit and may have obtained the weapons from his family home.
A minister has said early investigations indicate he was inspired by "far-right ideologies". The minister also described him as an "ultra-nationalist" without giving further details.
His home in Ostrowiec Świętokrzyski, a city around 200km (125 miles) from Krakow, has been searched with support from counter-terrorism police.
How did witnesses describe the attack?
The shooting happened in one of the largest medieval squares in Europe, a busy location which is also a popular tourist destination.
Jonathan Balshaw from Ipswich was there with his Polish girlfriend Dominika. The couple were outside St Mary's Basilica, in the corner of the square, when the shooting started.
Jonathan said: "We ran down the side of the church and through the side door and hid with several other people until the gunfire died down.
"A lot of shots were fired, more than 20 with it sounding like multiple different firearms - there were two distinctly different noises."
Caitlin Shasby from Newcastle arrived in Krakow yesterday with her friend Jon for a long weekend.
She said they heard shots from their hotel room but were not sure what was happening until their hotel rang them and told them to "stay in our rooms until further notice".
What has the reaction been in Poland and internationally?
After travelling to Krakow, Prime Minister Donald Tusk said : "Until now in Poland we haven't had such drastic cases of terrorism...that's what we have to call this cruel attack on people's lives here in Krakow."
Krakow Mayor Łukasz Gibała has signed an order declaring a period of mourning in the city which will last until Wednesday, 11 November.
UK Prime Minister Andy Burnham said: "I'm shocked and saddened by the appalling shooting in Kraków today."
"My thoughts are with the families of those who have lost their lives, everyone injured and all those affected by this senseless violence. The United Kingdom stands in solidarity with the people of Poland," he added.
British foreign secretary Ed Miliband said on social media the UK government "deeply mourns" those who died in the "appalling attack".
US ambassador to Poland Tom Rose described it as a "savage and murderous attack".
The EU's top diplomat, Kaja Kallas, said the shooting was "a tragedy that will be felt far beyond Poland".
President Volodymyr Zelensky of neighbouring Ukraine called the shooting "shocking."
"On behalf of the Ukrainian people, and personally, I extend my sincere condolences to the families and loved ones of the victims," he wrote on social media.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmd7q15drwgeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-08T01:47:41+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f6c3/live/95455f00-dac5-11f1-bda8-29fb69dbc026.jpg",
    readTime: 10,
  },
  {
    id: "labubu-hype-seemed-unstoppable-now-the-f-8db85b64",
    title: "Labubu hype seemed unstoppable, now the fluffy monster mania is dying",
    titleJa: "Labubu hype seemed unstoppable, now the fluffy monster mania is dying",
    summaryJa: "Parent company Pop Mart's revenue has fallen as appetite for the quirky collectible monsters wanes.",
    bodyOriginal: `Labubu hype seemed unstoppable, now the fluffy monster mania is dying
- Published
For years, Labubu dolls seemed unstoppable.
Collectors young and old energetically snapped up "blind boxes" - sealed, mystery packages containing the quirky monsters - often paying $15 (£11) or more.
Those unable to get the characters they wanted were often prepared to pay much more on the resale market.
The hype around the creatures convinced a mega-fan from North Carolina, who goes by the name Ensito, to leave his tech job in 2024 to create Labubu content full-time, travelling as far as Italy and Spain to seek out the latest releases.
Ensito has spent more than $50,000 (£37,000) to build his collection of more than 400 Labubus, a figure he tells the BBC he's "embarrassed to say".
He even had a row of custom Labubu-like jagged teeth made by a dentist to wear at events.
But in recent months, Ensito's once-viral posts about the furry monsters have struggled. "Those videos used to be able to hit 10,000 really quickly but I'm struggling to do that now."
Ensito's focus has shifted to other trends like Hello Kitty and squishies.
It's a sign that the craze which made parent company Pop Mart worth more than US toy giants Hasbro and Mattel put together may be running out of steam. Analysts believe the Beijing-based brand is struggling to capture excitement beyond a single viral moment.
Pop Mart recently reported that global sales in the three months to the end of September had fallen by as much as 50% on the previous year.
The drop was particularly steep outside mainland China, with US revenue down by at least 70%.
The rise and fall
Pop Mart didn't invent blind boxes but its dolls certainly helped to popularise them around the world.
The sales tactic made collecting feel "nostalgic", evoking the feeling of opening gifts as a child, says marketing professional Katelynn Carlson, who discovered Labubus through social media and now owns 36 of them.
One of her first Labubus was a rare doll, making the experience "even more exciting", she adds.
Labubu, which launched in 2019, has been Pop Mart's most successful line of toys. The monsters became fashion statements and were sported by celebrities including Kim Kardashian and Blackpink's Lisa.
They regularly attracted long queues and became so popular that Pop Mart had to temporarily pull the toys from its UK shops after reports of customers fighting over them. One fan paid more than $150,000 for a human-sized Labubu.
A key part of the allure was how difficult some Labubu dolls were to find, with fans repeatedly buying blind boxes to get the version they wanted, says National University of Singapore marketing lecturer Samer El Hajjar.
Pop Mart now has 500 shops in more than 30 countries and 2,000 vending machines worldwide. The firm, which listed in Hong Kong in 2020, is worth nearly $24bn and remains one of the world's most valuable toymakers, despite its shares having fallen by more than 50% from last year's peak.
Investors worry its global success was just a viral moment rather than sustainable growth driven by long-term customer loyalty, El Hajjar says.
For Ensito, it is clear the dolls' exclusivity helped fuel the craze.
"Now it doesn't feel that way. I walk into a Pop Mart and there's a whole series of Labubus sitting there," he says.
Ashley Dudarenok of China research firm ChoZan says that sense of exclusivity faded as Pop Mart ramped up production to meet demand.
Pop Mart declined to comment on share price moves and did not respond to questions about falling sales.
Rivals take over
As the Labubu mania cools, some of its rivals have become more popular.
Blind box collectables like Sonny Angels - tiny, unclothed cherub-like dolls - and miniature glow-in-the-dark Smiski figurines have been flying off shelves. And you can now find My Little Pony and KPop Demon Hunters in blind boxes too.
Miniso, founded in the southern Chinese city of Guangzhou, sells a range of blind-boxed Disney and Marvel characters in more than 8,000 shops globally.
"Consumers aren't particularly concerned about where the brand comes from," Miniso executive Vincent Huang said earlier this year. "They're more focused on the shopping experience - the designs, value for money, and enjoyment."
Experts say one of Pop Mart's biggest challenges is creating enduring characters.
That's an area where Hello Kitty brand Sanrio, which posted record earnings in the year to March, has a clear advantage, analyst Boustani suggests.
Pop Mart has invested heavily in ways to grow its brand, including setting up a theme park in Beijing and announcing a Labubu film - following in the footsteps of franchising giants like Disney or Lego, some experts believe.
But unlike Disney, which sells a story before it sells a toy, Pop Mart is working in reverse, says Dudarenok. "The real test for next year is whether Pop Mart can make people love a character without a celebrity holding it."
'Now I only buy what I like'
After spending huge sums on the monsters, collector Ensito says he is now questioning how much time and money people invest in collections each time a new trend comes along. "There's always going to be a trend every year. There's always gonna be something that's gonna be really popular."
Melbourne-based content creator Lawrence Yu says that after two years of chasing Labubus, he's likely to be "more selective" before adding to his roughly 50 dolls.
His Labubu shopping and unboxing clips once drew up to a million views but the frenzy has faded and Yu rarely makes videos about them now. "I definitely think the trend has slowed down... People go crazy and then it fizzles."
Clara Barbero from Canada believes Labubus are a "dead trend" but is still keeping an eye out for interesting releases.
"I’m curating my collection more and only buying what I see myself liking for the next few years, and not just buying the newest series that’s out."
But the fluffy monsters still have truly devoted fans.
Hedy Khaled from Liverpool says although the hype around the dolls is cooling, she is just as attached to her collection of 70 Pop Mart figurines.
There's a distinction between those who chase trends and "real fans", she argues, so falling sales do not necessarily mean Labubus have lost their appeal.
For Carlson says it is the happiness the dolls bring, not the viral trend, that keeps her collecting. She still gets excited about new Pop Mart releases, like its recent cat-themed Labubu series, which has become one of her favourites.
"I think there's something special about embracing our inner child and enjoying things simply because they make us happy."
Related topics
- Published9 February 2025
- Published10 September
- Published15 October`,
    bodyJa: `Labubu hype seemed unstoppable, now the fluffy monster mania is dying
- Published
For years, Labubu dolls seemed unstoppable.
Collectors young and old energetically snapped up "blind boxes" - sealed, mystery packages containing the quirky monsters - often paying $15 (£11) or more.
Those unable to get the characters they wanted were often prepared to pay much more on the resale market.
The hype around the creatures convinced a mega-fan from North Carolina, who goes by the name Ensito, to leave his tech job in 2024 to create Labubu content full-time, travelling as far as Italy and Spain to seek out the latest releases.
Ensito has spent more than $50,000 (£37,000) to build his collection of more than 400 Labubus, a figure he tells the BBC he's "embarrassed to say".
He even had a row of custom Labubu-like jagged teeth made by a dentist to wear at events.
But in recent months, Ensito's once-viral posts about the furry monsters have struggled. "Those videos used to be able to hit 10,000 really quickly but I'm struggling to do that now."
Ensito's focus has shifted to other trends like Hello Kitty and squishies.
It's a sign that the craze which made parent company Pop Mart worth more than US toy giants Hasbro and Mattel put together may be running out of steam. Analysts believe the Beijing-based brand is struggling to capture excitement beyond a single viral moment.
Pop Mart recently reported that global sales in the three months to the end of September had fallen by as much as 50% on the previous year.
The drop was particularly steep outside mainland China, with US revenue down by at least 70%.
The rise and fall
Pop Mart didn't invent blind boxes but its dolls certainly helped to popularise them around the world.
The sales tactic made collecting feel "nostalgic", evoking the feeling of opening gifts as a child, says marketing professional Katelynn Carlson, who discovered Labubus through social media and now owns 36 of them.
One of her first Labubus was a rare doll, making the experience "even more exciting", she adds.
Labubu, which launched in 2019, has been Pop Mart's most successful line of toys. The monsters became fashion statements and were sported by celebrities including Kim Kardashian and Blackpink's Lisa.
They regularly attracted long queues and became so popular that Pop Mart had to temporarily pull the toys from its UK shops after reports of customers fighting over them. One fan paid more than $150,000 for a human-sized Labubu.
A key part of the allure was how difficult some Labubu dolls were to find, with fans repeatedly buying blind boxes to get the version they wanted, says National University of Singapore marketing lecturer Samer El Hajjar.
Pop Mart now has 500 shops in more than 30 countries and 2,000 vending machines worldwide. The firm, which listed in Hong Kong in 2020, is worth nearly $24bn and remains one of the world's most valuable toymakers, despite its shares having fallen by more than 50% from last year's peak.
Investors worry its global success was just a viral moment rather than sustainable growth driven by long-term customer loyalty, El Hajjar says.
For Ensito, it is clear the dolls' exclusivity helped fuel the craze.
"Now it doesn't feel that way. I walk into a Pop Mart and there's a whole series of Labubus sitting there," he says.
Ashley Dudarenok of China research firm ChoZan says that sense of exclusivity faded as Pop Mart ramped up production to meet demand.
Pop Mart declined to comment on share price moves and did not respond to questions about falling sales.
Rivals take over
As the Labubu mania cools, some of its rivals have become more popular.
Blind box collectables like Sonny Angels - tiny, unclothed cherub-like dolls - and miniature glow-in-the-dark Smiski figurines have been flying off shelves. And you can now find My Little Pony and KPop Demon Hunters in blind boxes too.
Miniso, founded in the southern Chinese city of Guangzhou, sells a range of blind-boxed Disney and Marvel characters in more than 8,000 shops globally.
"Consumers aren't particularly concerned about where the brand comes from," Miniso executive Vincent Huang said earlier this year. "They're more focused on the shopping experience - the designs, value for money, and enjoyment."
Experts say one of Pop Mart's biggest challenges is creating enduring characters.
That's an area where Hello Kitty brand Sanrio, which posted record earnings in the year to March, has a clear advantage, analyst Boustani suggests.
Pop Mart has invested heavily in ways to grow its brand, including setting up a theme park in Beijing and announcing a Labubu film - following in the footsteps of franchising giants like Disney or Lego, some experts believe.
But unlike Disney, which sells a story before it sells a toy, Pop Mart is working in reverse, says Dudarenok. "The real test for next year is whether Pop Mart can make people love a character without a celebrity holding it."
'Now I only buy what I like'
After spending huge sums on the monsters, collector Ensito says he is now questioning how much time and money people invest in collections each time a new trend comes along. "There's always going to be a trend every year. There's always gonna be something that's gonna be really popular."
Melbourne-based content creator Lawrence Yu says that after two years of chasing Labubus, he's likely to be "more selective" before adding to his roughly 50 dolls.
His Labubu shopping and unboxing clips once drew up to a million views but the frenzy has faded and Yu rarely makes videos about them now. "I definitely think the trend has slowed down... People go crazy and then it fizzles."
Clara Barbero from Canada believes Labubus are a "dead trend" but is still keeping an eye out for interesting releases.
"I’m curating my collection more and only buying what I see myself liking for the next few years, and not just buying the newest series that’s out."
But the fluffy monsters still have truly devoted fans.
Hedy Khaled from Liverpool says although the hype around the dolls is cooling, she is just as attached to her collection of 70 Pop Mart figurines.
There's a distinction between those who chase trends and "real fans", she argues, so falling sales do not necessarily mean Labubus have lost their appeal.
For Carlson says it is the happiness the dolls bring, not the viral trend, that keeps her collecting. She still gets excited about new Pop Mart releases, like its recent cat-themed Labubu series, which has become one of her favourites.
"I think there's something special about embracing our inner child and enjoying things simply because they make us happy."
Related topics
- Published9 February 2025
- Published10 September
- Published15 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmvg652l927lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-07T23:02:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/79bc/live/19d4a530-d90b-11f1-93e1-3b657b665bcf.jpg",
    readTime: 10,
  },
  {
    id: "israel-s-president-tasks-opposition-lead-0f717754",
    title: "Israel's president tasks opposition leader Eisenkot with forming government",
    titleJa: "Israel's president tasks opposition leader Eisenkot with forming government",
    summaryJa: "Neither PM Benjamin Netanyahu's bloc nor that of his rival secured a majority in last week's election.",
    bodyOriginal: `Israel's president tasks opposition leader Eisenkot with forming government
- Published
Israel's president says he will task opposition leader Gadi Eisenkot with forming a new coalition government.
Isaac Herzog has been holding talks with political parties after neither Eisenkot's bloc nor that of Prime Minister Benjamin Netanyahu secured a majority in Israel's parliament, known as the Knesset, following last week's election.
Eisenkot will now have 28 days to try to form a new administration, with a potential 14-day extension.
"Now is the time to form a national emergency government. I will do everything to ensure we are worthy," the former military chief wrote on X.
No political party in Israel has ever won an outright majority, meaning all governments have been coalitions.
Netanyahu's right-wing Likud party and its far-right and ultra-Orthodox Jewish allies won 53 seats in the 120-seat Knesset, while Eisenkot's centrist Yashar party and three other Jewish opposition parties in his bloc won 48.
Two Arab-led alliances, the United Arab List and the Joint List, together won an unprecedented 19 seats following a surge in turnout among Arab voters.
That positions them as potential kingmakers. However, all but one of the Jewish parties pledged before the polls not to work with them to form a government.
Herzog said that, after consulting all parties during the week, he would give Eisenkot the first chance to form a government.
A statement from the president's office said he had informed both Eisenkot and Netanyahu of the decision.
Following consultations with delegations from the incoming Knesset members, Eisenkot received 67 recommendations for the premiership and Netanyahu 46, the statement said.
The president has broad discretion to pick someone they believe has the best chance of building a coalition and does not have to choose the leader of the party with the most seats.
The election results had implied three possible options for the formation of a government: a national unity administration involving both Netanyahu and Eisenkot, a right-wing coalition involving Netanyahu and defectors from Eisenkot's bloc, or an Eisenkot-led government supported by the Arab parties.
Eisenkot and every member of his bloc bar one has previously refused to enter government with Arab parties, but there has been speculation that an agreement could be reached.
He could also attempt to reach a deal with ultra-Orthodox parties, but that too would be difficult.
There is precedent for a unity government. In 2020, following three deadlocked elections, Netanyahu and his centrist rival Benny Gantz agreed a power-sharing deal in which the leadership rotated between the two.
During his consultations with the parties, Herzog had said that to prevent another round of elections and to build a stable government, he expected "factions and their representatives to understand that, in the current reality, not every commitment and promise can be fulfilled".
In the period 2019 to 2022, one of the most politically fractured in Israeli politics, there were five separate elections as Netanyahu and his rivals struggled time and again to co-operate.
Related topics
- Published3 days ago
- Published29 October`,
    bodyJa: `Israel's president tasks opposition leader Eisenkot with forming government
- Published
Israel's president says he will task opposition leader Gadi Eisenkot with forming a new coalition government.
Isaac Herzog has been holding talks with political parties after neither Eisenkot's bloc nor that of Prime Minister Benjamin Netanyahu secured a majority in Israel's parliament, known as the Knesset, following last week's election.
Eisenkot will now have 28 days to try to form a new administration, with a potential 14-day extension.
"Now is the time to form a national emergency government. I will do everything to ensure we are worthy," the former military chief wrote on X.
No political party in Israel has ever won an outright majority, meaning all governments have been coalitions.
Netanyahu's right-wing Likud party and its far-right and ultra-Orthodox Jewish allies won 53 seats in the 120-seat Knesset, while Eisenkot's centrist Yashar party and three other Jewish opposition parties in his bloc won 48.
Two Arab-led alliances, the United Arab List and the Joint List, together won an unprecedented 19 seats following a surge in turnout among Arab voters.
That positions them as potential kingmakers. However, all but one of the Jewish parties pledged before the polls not to work with them to form a government.
Herzog said that, after consulting all parties during the week, he would give Eisenkot the first chance to form a government.
A statement from the president's office said he had informed both Eisenkot and Netanyahu of the decision.
Following consultations with delegations from the incoming Knesset members, Eisenkot received 67 recommendations for the premiership and Netanyahu 46, the statement said.
The president has broad discretion to pick someone they believe has the best chance of building a coalition and does not have to choose the leader of the party with the most seats.
The election results had implied three possible options for the formation of a government: a national unity administration involving both Netanyahu and Eisenkot, a right-wing coalition involving Netanyahu and defectors from Eisenkot's bloc, or an Eisenkot-led government supported by the Arab parties.
Eisenkot and every member of his bloc bar one has previously refused to enter government with Arab parties, but there has been speculation that an agreement could be reached.
He could also attempt to reach a deal with ultra-Orthodox parties, but that too would be difficult.
There is precedent for a unity government. In 2020, following three deadlocked elections, Netanyahu and his centrist rival Benny Gantz agreed a power-sharing deal in which the leadership rotated between the two.
During his consultations with the parties, Herzog had said that to prevent another round of elections and to build a stable government, he expected "factions and their representatives to understand that, in the current reality, not every commitment and promise can be fulfilled".
In the period 2019 to 2022, one of the most politically fractured in Israeli politics, there were five separate elections as Netanyahu and his rivals struggled time and again to co-operate.
Related topics
- Published3 days ago
- Published29 October`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cmy8367lj5xlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-07T22:19:59+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1ff8/live/d9aea170-daf1-11f1-a701-fddedf244c16.jpg",
    readTime: 8,
  },
  {
    id: "trump-offers-ufc-chief-dana-white-press-5591d792",
    title: "Trump offers UFC chief Dana White press secretary job",
    titleJa: "Trump offers UFC chief Dana White press secretary job",
    summaryJa: "President Donald Trump offered the job of press secretary to UFC president and CEO Dana White on Saturday.",
    bodyOriginal: `President Donald Trump offered UFC president and CEO Dana White the job of press secretary on Saturday.
In a post on Truth Social, Trump said: "I am pleased to announce that the Great Dana White, a violent Fighter and Warrior, has been offered the job of Press Secretary of the United States."
"We need these people to defend us against the Lunatic Left," Trump wrote. "Dana will be a Press Secretary like none other. Dana, please take the job!"
Apparently in response to Trump's post, White posted a picture of himself on Instagram stories standing behind the press secretary's lectern in the White House, with the caption, "On to the next chapter."
It was unclear whether White has accepted the position or is simply acknowledging the president's request in jest.
Trump said that he was offering White the job of "Press Secretary of the United States," but the president's spokesperson is called the "White House press secretary." Trump also recently speculated about considering Trump loyalist and rapper Nicki Minaj as White House press secretary, in an interview with podcaster Benny Johnson.
Trump said the job offer to White extended to his assistants, "even though some are not from our Country." The so-called assistants Trump named included current and former UFC mixed martial arts fighters from countries such as Brazil and Russia.
In October, White House press secretary Katie Zacharia left the press secretary position, just five days after her stint as Karoline Leavitt's replacement began.
The president told reporters he suggested Zacharia quit after her first and only press briefing, where, in her six minutes answering questions behind the lectern, she only took questions from three conservative outlets.
"I just spoke to her about it. I said, 'Katie, is this for you?'" Trump said outside the White House on Oct. 16.
The president's appeal to White follows Friday's announcement that Trump's deputy chief of staff, Stephen Miller, would be promoted to chief of staff, replacing Susie Wiles.
Trump's stunning shake-up comes just three days after Democrats won a landslide victory in the midterm elections, gaining majority control in the House and Senate.
The president and White have a longstanding friendship. During Trump's first campaign in 2016, White praised the then-Republican nominee and called him a "fighter."
"Nobody took us seriously. Nobody. Except Donald Trump. Donald was the first guy to recognize the potential we saw in the UFC and encouraged us to build our business," White said.
And for his 80th birthday in June, President Trump hosted a UFC match — dubbed UFC Freedom 250 — on the White House's South Lawn.
The White House and the UFC didn't immediately respond to a request for comment.
— CNBC's Kevin Breuninger contributed to this report.
CORRECTION: This article has been updated to correct the spelling of Karoline Leavitt's name.`,
    bodyJa: `President Donald Trump offered UFC president and CEO Dana White the job of press secretary on Saturday.
In a post on Truth Social, Trump said: "I am pleased to announce that the Great Dana White, a violent Fighter and Warrior, has been offered the job of Press Secretary of the United States."
"We need these people to defend us against the Lunatic Left," Trump wrote. "Dana will be a Press Secretary like none other. Dana, please take the job!"
Apparently in response to Trump's post, White posted a picture of himself on Instagram stories standing behind the press secretary's lectern in the White House, with the caption, "On to the next chapter."
It was unclear whether White has accepted the position or is simply acknowledging the president's request in jest.
Trump said that he was offering White the job of "Press Secretary of the United States," but the president's spokesperson is called the "White House press secretary." Trump also recently speculated about considering Trump loyalist and rapper Nicki Minaj as White House press secretary, in an interview with podcaster Benny Johnson.
Trump said the job offer to White extended to his assistants, "even though some are not from our Country." The so-called assistants Trump named included current and former UFC mixed martial arts fighters from countries such as Brazil and Russia.
In October, White House press secretary Katie Zacharia left the press secretary position, just five days after her stint as Karoline Leavitt's replacement began.
The president told reporters he suggested Zacharia quit after her first and only press briefing, where, in her six minutes answering questions behind the lectern, she only took questions from three conservative outlets.
"I just spoke to her about it. I said, 'Katie, is this for you?'" Trump said outside the White House on Oct. 16.
The president's appeal to White follows Friday's announcement that Trump's deputy chief of staff, Stephen Miller, would be promoted to chief of staff, replacing Susie Wiles.
Trump's stunning shake-up comes just three days after Democrats won a landslide victory in the midterm elections, gaining majority control in the House and Senate.
The president and White have a longstanding friendship. During Trump's first campaign in 2016, White praised the then-Republican nominee and called him a "fighter."
"Nobody took us seriously. Nobody. Except Donald Trump. Donald was the first guy to recognize the potential we saw in the UFC and encouraged us to build our business," White said.
And for his 80th birthday in June, President Trump hosted a UFC match — dubbed UFC Freedom 250 — on the White House's South Lawn.
The White House and the UFC didn't immediately respond to a request for comment.
— CNBC's Kevin Breuninger contributed to this report.
CORRECTION: This article has been updated to correct the spelling of Karoline Leavitt's name.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/trump-ufc-dana-white-press-secretary-offer.html",
    publishedAt: "2026-11-07T21:17:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "this-retired-professor-has-reinvented-hi-7bc421a0",
    title: "This retired professor has reinvented himself — as a Taylor Swift scholar",
    titleJa: "This retired professor has reinvented himself — as a Taylor Swift scholar",
    summaryJa: "His niece convinced him to spend his retirement analyzing Taylor Swift lyrics. Now he’s a successful podcaster at 72.",
    bodyOriginal: `His niece convinced him to spend his retirement analyzing Taylor Swift lyrics. Now he’s a successful podcaster at 72.`,
    bodyJa: `His niece convinced him to spend his retirement analyzing Taylor Swift lyrics. Now he’s a successful podcaster at 72.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/this-retired-professor-has-reinvented-himself-as-a-taylor-swift-scholar-88456c8d?mod=mw_rss_topstories",
    publishedAt: "2026-11-07T20:48:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-69887372",
    readTime: 2,
  },
  {
    id: "second-guessing-my-adviser-is-an-annuity-c0e38bd7",
    title: "Second-guessing my adviser: Is an annuity the right move in this market?",
    titleJa: "Second-guessing my adviser: Is an annuity the right move in this market?",
    summaryJa: "“I haven’t committed to the strategy yet and would appreciate some independent perspectives.”",
    bodyOriginal: `“I haven’t committed to the strategy yet and would appreciate some independent perspectives.”`,
    bodyJa: `“I haven’t committed to the strategy yet and would appreciate some independent perspectives.”`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-adviser-recommended-an-annuity-is-it-the-right-move-in-this-market-environment-00edbbf6?mod=mw_rss_topstories",
    publishedAt: "2026-11-07T20:36:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-97735735",
    readTime: 2,
  },
  {
    id: "trump-targets-slotkin-in-call-for-doj-pr-a648aaaf",
    title: "Trump targets Slotkin in call for DOJ probe of alleged Democratic threats to Republicans",
    titleJa: "Trump targets Slotkin in call for DOJ probe of alleged Democratic threats to Republicans",
    summaryJa: "Trump ordered DOJ to examine alleged threats against Republicans while singling out Slotkin.",
    bodyOriginal: `President Donald Trump said Saturday that he was ordering the Justice Department to investigate Democratic leaders over what he described as threats against Republican officials, donors and supporters, without identifying the alleged communications or providing evidence of criminal conduct.
"The Democrats are going around threatening a lot of people, including the Attorney General of the United States, and others, with Impeachment and many other forms of punishment, even though they admit they have no reason to do so," Trump said in a Truth Social post.
The alleged threats, the president said, are "extortion at the highest level," he wrote. "I am ordering the Department of Justice to look into this criminal act, immediately!"
In his post, Trump claimed that Democratic Sen. Elissa Slotkin of Michigan is planning to "go after all young people that believe in Republican Values."
Trump was apparently referencing a speech Slotkin made at a University of Chicago event on Oct. 13. At the time, Slotkin said: "I want young people coming out of school to say, 'Should I go work for the Trump administration?'...I want them to be like, 'Lord, that might be buying myself a ton of problems that I don't want. And so let me avoid participating in that.' I want that deterrence message sent."
Slotkin alleges that she, her family and her staff faced physical and legal intimidation after the posting of a November 2025 video in which Slotkin and other Democratic leaders called on the U.S. military to "refuse illegal orders" following the airstrikes targeting boats in the Caribbean.
On Nov. 20, Trump called the video treason and said "an example must be set."
The FBI contacted lawmakers, including Slotkin, days later. In February, Slotkin declined to sit for an interview the Justice Department requested about the video.
"The intimidation is the point, and I'm not gonna go along with that," the senator said in February. A federal grand jury later declined to indict the video participants.
Now, Trump alleges Democrats are threatening legal intimidation against Republican leaders and their supporters.
"Republicans should get smart, fast! Threatening letters have been sent to many people, all innocent, from Democrat Political Leaders," the president wrote.
The White House and Slotkin didn't immediately respond to a request for comment.`,
    bodyJa: `President Donald Trump said Saturday that he was ordering the Justice Department to investigate Democratic leaders over what he described as threats against Republican officials, donors and supporters, without identifying the alleged communications or providing evidence of criminal conduct.
"The Democrats are going around threatening a lot of people, including the Attorney General of the United States, and others, with Impeachment and many other forms of punishment, even though they admit they have no reason to do so," Trump said in a Truth Social post.
The alleged threats, the president said, are "extortion at the highest level," he wrote. "I am ordering the Department of Justice to look into this criminal act, immediately!"
In his post, Trump claimed that Democratic Sen. Elissa Slotkin of Michigan is planning to "go after all young people that believe in Republican Values."
Trump was apparently referencing a speech Slotkin made at a University of Chicago event on Oct. 13. At the time, Slotkin said: "I want young people coming out of school to say, 'Should I go work for the Trump administration?'...I want them to be like, 'Lord, that might be buying myself a ton of problems that I don't want. And so let me avoid participating in that.' I want that deterrence message sent."
Slotkin alleges that she, her family and her staff faced physical and legal intimidation after the posting of a November 2025 video in which Slotkin and other Democratic leaders called on the U.S. military to "refuse illegal orders" following the airstrikes targeting boats in the Caribbean.
On Nov. 20, Trump called the video treason and said "an example must be set."
The FBI contacted lawmakers, including Slotkin, days later. In February, Slotkin declined to sit for an interview the Justice Department requested about the video.
"The intimidation is the point, and I'm not gonna go along with that," the senator said in February. A federal grand jury later declined to indict the video participants.
Now, Trump alleges Democrats are threatening legal intimidation against Republican leaders and their supporters.
"Republicans should get smart, fast! Threatening letters have been sent to many people, all innocent, from Democrat Political Leaders," the president wrote.
The White House and Slotkin didn't immediately respond to a request for comment.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/trump-doj-democrats-alleged-threats-slotkin.html",
    publishedAt: "2026-11-07T20:28:17+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "here-are-the-2027-capital-gains-tax-rate-26b6663f",
    title: "Here are the 2027 capital-gains tax rates for each income level",
    titleJa: "Here are the 2027 capital-gains tax rates for each income level",
    summaryJa: "How much will you pay in capital-gains taxes next year? The IRS just released this crucial  information.",
    bodyOriginal: `How much will you pay in capital-gains taxes next year? The IRS just released this crucial  information.`,
    bodyJa: `How much will you pay in capital-gains taxes next year? The IRS just released this crucial  information.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/here-are-the-2027-capital-gains-tax-rates-for-each-income-level-166fc306?mod=mw_rss_topstories",
    publishedAt: "2026-11-07T19:48:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-26428515",
    readTime: 2,
  },
  {
    id: "us-offers-20m-reward-for-information-abo-e42016e1",
    title: "US offers $20m reward for information about Iran's nuclear programme",
    titleJa: "US offers $20m reward for information about Iran's nuclear programme",
    summaryJa: "Donald Trump has repeatedly raised the prospect of renewing strikes against Iran's nuclear facilities.",
    bodyOriginal: `US offers $20m reward for information about Iran's nuclear programme
- Published
The US has announced a reward of up to $20 million for information about Iran's nuclear programme.
The State Department's Rewards for Justice is also offering to potentially relocate the person who provides such details.
President Donald Trump claimed last year that Iran's nuclear facilities had been "completely and totally obliterated" following a bombing campaign by the US and Israel.
Iran insists its nuclear programme is peaceful and that it has no intention of developing a nuclear weapon.
Meanwhile, the US military says it is setting up a task force to enhance Washington's efforts to restrict Iran's movement of weapons and sanctioned material across its borders.
The US military's Central Command (Centcom) said Task Force Iron Gate would operate from Tampa, Florida, and would work with other US government agencies.
As well as the movement of weapons, it will also focus on dual-use and illegal revenue streams.
Centcom estimates that its naval blockade of Iran's ports has prevented the country from exporting more than $25bn in crude oil.
A US State Department statement about its multi-million dollar reward said it was offering the money for information about the Iranian programme, including "facilities, equipment and associated personnel".
It said Iran's "lack of compliance with the IAEA [the International Atomic Energy Agency] on safeguards obligations has led to the agency's loss of 'continuity of knowledge' regarding Iran's production and inventory of key components like [nuclear] centrifuges".
Centrifuges are needed to produce enriched uranium, which can be used to make reactor fuel for civilian use but also for nuclear weapons if enriched to around 90% purity or higher.
There had been mounting speculation that the US might resume significant strikes in Iran after the midterm elections, though Trump told reporters, prior to the polls, that he was in "no rush" to do so.
In an interview with Fox News on the eve of the midterms, the president also said the US "might need to go after Pickaxe [Mountain]", an underground site linked to Iran's nuclear programme.
This was "not a big deal" and could be done in "one hour", Trump said.
The president has repeatedly threatened to bomb the suspected underground site on previous occasions.
However, both Trump and Vice-President JD Vance have said public opposition to the war on Iran fuelled heavy losses for their Republican Party in this week's midterm elections, which has led to speculation the White House may no longer seek an escalation in the conflict.
On Friday, Trump insisted that Iran was keen to end the eight-month conflict with the US, stressing the damage to Tehran's economy and military.
"We're dealing with them now. They want to make a deal very badly," he said.
Qatar's foreign ministry spokesman said on Tuesday that both sides were "reviewing the ideas and proposals we have presented" and that it remained hopeful of a deal being agreed.
Iranian negotiators had discussed with mediators a proposal to reopen the Strait of Hormuz within two days once the US met its seven conditions.
The US and Iran reached a preliminary agreement to end the war and reopen the strait in June, but it collapsed within weeks after Iranian attacks on shipping resumed and the US reinstated its blockade.
Related topics
- Published4 days ago
- Published22 June 2025`,
    bodyJa: `US offers $20m reward for information about Iran's nuclear programme
- Published
The US has announced a reward of up to $20 million for information about Iran's nuclear programme.
The State Department's Rewards for Justice is also offering to potentially relocate the person who provides such details.
President Donald Trump claimed last year that Iran's nuclear facilities had been "completely and totally obliterated" following a bombing campaign by the US and Israel.
Iran insists its nuclear programme is peaceful and that it has no intention of developing a nuclear weapon.
Meanwhile, the US military says it is setting up a task force to enhance Washington's efforts to restrict Iran's movement of weapons and sanctioned material across its borders.
The US military's Central Command (Centcom) said Task Force Iron Gate would operate from Tampa, Florida, and would work with other US government agencies.
As well as the movement of weapons, it will also focus on dual-use and illegal revenue streams.
Centcom estimates that its naval blockade of Iran's ports has prevented the country from exporting more than $25bn in crude oil.
A US State Department statement about its multi-million dollar reward said it was offering the money for information about the Iranian programme, including "facilities, equipment and associated personnel".
It said Iran's "lack of compliance with the IAEA [the International Atomic Energy Agency] on safeguards obligations has led to the agency's loss of 'continuity of knowledge' regarding Iran's production and inventory of key components like [nuclear] centrifuges".
Centrifuges are needed to produce enriched uranium, which can be used to make reactor fuel for civilian use but also for nuclear weapons if enriched to around 90% purity or higher.
There had been mounting speculation that the US might resume significant strikes in Iran after the midterm elections, though Trump told reporters, prior to the polls, that he was in "no rush" to do so.
In an interview with Fox News on the eve of the midterms, the president also said the US "might need to go after Pickaxe [Mountain]", an underground site linked to Iran's nuclear programme.
This was "not a big deal" and could be done in "one hour", Trump said.
The president has repeatedly threatened to bomb the suspected underground site on previous occasions.
However, both Trump and Vice-President JD Vance have said public opposition to the war on Iran fuelled heavy losses for their Republican Party in this week's midterm elections, which has led to speculation the White House may no longer seek an escalation in the conflict.
On Friday, Trump insisted that Iran was keen to end the eight-month conflict with the US, stressing the damage to Tehran's economy and military.
"We're dealing with them now. They want to make a deal very badly," he said.
Qatar's foreign ministry spokesman said on Tuesday that both sides were "reviewing the ideas and proposals we have presented" and that it remained hopeful of a deal being agreed.
Iranian negotiators had discussed with mediators a proposal to reopen the Strait of Hormuz within two days once the US met its seven conditions.
The US and Iran reached a preliminary agreement to end the war and reopen the strait in June, but it collapsed within weeks after Iranian attacks on shipping resumed and the US reinstated its blockade.
Related topics
- Published4 days ago
- Published22 June 2025`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c6d091ev3p0jo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-07T18:14:38+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0b84/live/0f887590-dad0-11f1-93e1-3b657b665bcf.jpg",
    readTime: 9,
  },
  {
    id: "meta-chief-strategy-officer-dave-wehner-daa232a0",
    title: "Meta chief strategy officer Dave Wehner leaves to join AI infrastructure startup Fireworks as CFO",
    titleJa: "Meta chief strategy officer Dave Wehner leaves to join AI infrastructure startup Fireworks as CFO",
    summaryJa: "Dave Wehner, Meta’s chief strategy officer, is leaving the company to become CFO of Fireworks, the AI infrastructure startup valued at $17.5 billion in July.",
    bodyOriginal: `Dave Wehner, Meta's chief strategy officer, is leaving the company for four-year-old AI startup Fireworks.
At Fireworks — an AI inference and model-training platform focused on open models that was valued at $17.5 billion during a Series D fundraising round in July — Wehner will assume the CFO role, he announced on X on Friday.
Wehner will be tasked with scaling the company's finances and operations, Fireworks CEO Lin Qiao said in a statement to CNBC.
"Fireworks has the right mission for the moment," Wehner wrote on X, adding: "I've become increasingly bullish on what they are building. There's a remarkable depth of technical talent here, coupled with a very practical focus on what customers need."
The AI startup, founded in 2022 by former Meta and Google employees, is a platform that lets developers customize and run open models for their businesses. Its latest investment round was led by Atreides Management, Index Ventures and TCV, but Fireworks is also backed by Nvidia and Sequoia Capital. Business Insider reported that it is in early talks to raise funds again at a possible $30 billion to $40 billion valuation.
Wehner joined Meta, then called Facebook, in 2012 and was the company's chief financial officer from 2014 to 2022.
"Dave helped guide Meta through tremendous growth and complexity over 14 years, and brought disciplined thinking to some of our hardest company-level decisions," Meta COO Javier Olivan said in a statement to CNBC.
Fireworks is notably smaller than Meta — the tech giant has about a $1.56 trillion market capitalization as of Friday's close — and its competitors, which include OpenAI and Anthropic.
"Dave told me he wanted to get back to a smaller company where he could build toward a big impact again," Fireworks' Lin wrote in a LinkedIn post on Friday. "He sees AI as the defining technology shift of his lifetime and wants to help shape what comes next."
The company's size has not made it immune to the risks and complications often associated with AI technology. In October, the company found "a security incident involving unauthorized use of internal Fireworks credentials," in which "an unauthorized third party accessed environment variables used in evaluation jobs in a limited number of customer accounts," it said in a press release.
"Based on our investigation at this time, we have not detected evidence of unauthorized access to customer models, datasets, training data, personal information, or inference traffic within the Fireworks security perimeter or control," the release said.`,
    bodyJa: `Dave Wehner, Meta's chief strategy officer, is leaving the company for four-year-old AI startup Fireworks.
At Fireworks — an AI inference and model-training platform focused on open models that was valued at $17.5 billion during a Series D fundraising round in July — Wehner will assume the CFO role, he announced on X on Friday.
Wehner will be tasked with scaling the company's finances and operations, Fireworks CEO Lin Qiao said in a statement to CNBC.
"Fireworks has the right mission for the moment," Wehner wrote on X, adding: "I've become increasingly bullish on what they are building. There's a remarkable depth of technical talent here, coupled with a very practical focus on what customers need."
The AI startup, founded in 2022 by former Meta and Google employees, is a platform that lets developers customize and run open models for their businesses. Its latest investment round was led by Atreides Management, Index Ventures and TCV, but Fireworks is also backed by Nvidia and Sequoia Capital. Business Insider reported that it is in early talks to raise funds again at a possible $30 billion to $40 billion valuation.
Wehner joined Meta, then called Facebook, in 2012 and was the company's chief financial officer from 2014 to 2022.
"Dave helped guide Meta through tremendous growth and complexity over 14 years, and brought disciplined thinking to some of our hardest company-level decisions," Meta COO Javier Olivan said in a statement to CNBC.
Fireworks is notably smaller than Meta — the tech giant has about a $1.56 trillion market capitalization as of Friday's close — and its competitors, which include OpenAI and Anthropic.
"Dave told me he wanted to get back to a smaller company where he could build toward a big impact again," Fireworks' Lin wrote in a LinkedIn post on Friday. "He sees AI as the defining technology shift of his lifetime and wants to help shape what comes next."
The company's size has not made it immune to the risks and complications often associated with AI technology. In October, the company found "a security incident involving unauthorized use of internal Fireworks credentials," in which "an unauthorized third party accessed environment variables used in evaluation jobs in a limited number of customer accounts," it said in a press release.
"Based on our investigation at this time, we have not detected evidence of unauthorized access to customer models, datasets, training data, personal information, or inference traffic within the Fireworks security perimeter or control," the release said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/dave-wehner-meta-fireworks-cfo.html",
    publishedAt: "2026-11-07T17:51:16+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "no-clear-winner-after-tight-new-zealand-577507e4",
    title: "No clear winner after tight New Zealand general election",
    titleJa: "No clear winner after tight New Zealand general election",
    summaryJa: "Weeks of coalition talks could follow after preliminary results pointed to a highly divided national parliament.",
    bodyOriginal: `No clear winner after tight New Zealand general election
- Published
There was no clear winner following New Zealand's election on Saturday, as the leaders of its two major parties preparing for negotiations to form a coalition government.
Prime Minister Christopher Luxon's centre-right National Party won 42 seats but was 19 short of the simple majority needed to form a government, despite being the largest party, preliminary results show.
Combined with their coalition partners ACT and New Zealand First, they would have a slim lead over the left-leaning bloc if a deal could be reached.
But opposition leader Chris Hipkins, whose Labour Party won 36 seats, showed no signs of conceding, saying the "shape of the next government" will remain uncertain "for a while".
The tight result followed a campaign shaped by the cost of living and unemployment.
Projections show the National Party on 42 seats and Labour on 36. The Greens are on 16, with ACT on 13, New Zealand First on 12, the Opportunity Party on 7 and Te Pāti Māori, which represents Māori interests, on 5.
The electoral commission was not due to announce the official result until 27 November.
Luxon congratulated Hipkins on a "very hard-fought race" before addressing party colleagues, saying "whatever the final count, we are incredibly proud of each and everyone for you".
He said he would run a caretaker government until the final results were confirmed later in the month, adding: "With those final results there can then be meaningful negotiations."
Elsewhere, Labour leader Hipkins said "the people have spoken", adding: "It may take a bit longer to work out what they've said."
Hipkins said the results made clear the "next parliament is going to require all of us to compromise, to work together and to find a common ground".
More than 99% of votes have been counted in New Zealand, with National and Labour neck-and-neck in terms of vote share.
But the preliminary results pointed to historically low support for the two major parties, with a combined vote share of around 60%.
They were followed by the Greens, ACT, New Zealand First, centrist party Opportunity and Te Pāti Māori, which represents Māori interests.
New Zealand election 2026: What you need to know
- Published27 October
The Opportunity Party crossed the 5% threshold to enter parliament for the first time, with leader Qiulae Wong saying would work with either side.
It has been described as this election's kingmaker as it remains open to working with either major bloc, but its leaders said they would negotiate first with the party that secures the most seats.
Speaking at Opportunity's watch party, Wong told supporters: "We believe that we can change the way we do politics to focus on the future, on the next generation, and on finding common ground."
Professor Andrew Geddis from the University of Otago, an expert in election law, said "the Opportunity Party as a wildcard player" could "determine which bloc of parties is able to govern".
"It will come down to some very fine vote margins not just between the parties, but in individual electorates. We are going to have to wait for the special votes to be processed and counted over the next three weeks," he said.
Special votes are votes cast outside a voter's electorate, including overseas.
The Greens – who have proposed forcing the country's two main supermarkets to divest stores to create publicly-owned shops – saw their vote rise by a couple of percentage points.
Julian McCrann, head of polling at Roy Morgan, told BBC News the cost of living was the main issue for many New Zealanders
"Three years ago, Luxon came in saying he'd be making New Zealanders' lives better and solving these economic issues, but he hasn't really delivered," he said.
More than half of the country no longer see New Zealand as a land of opportunity, according to an annual social cohesion survey. Record numbers of Kiwis have been leaving the country, with many going to Australia.
New Zealand's mixed-member proportional voting system means most governments are coalitions.
Each voter makes two choices – for the representative of their constituency in parliament and a political party.
Related topics
- Published23 hours ago`,
    bodyJa: `No clear winner after tight New Zealand general election
- Published
There was no clear winner following New Zealand's election on Saturday, as the leaders of its two major parties preparing for negotiations to form a coalition government.
Prime Minister Christopher Luxon's centre-right National Party won 42 seats but was 19 short of the simple majority needed to form a government, despite being the largest party, preliminary results show.
Combined with their coalition partners ACT and New Zealand First, they would have a slim lead over the left-leaning bloc if a deal could be reached.
But opposition leader Chris Hipkins, whose Labour Party won 36 seats, showed no signs of conceding, saying the "shape of the next government" will remain uncertain "for a while".
The tight result followed a campaign shaped by the cost of living and unemployment.
Projections show the National Party on 42 seats and Labour on 36. The Greens are on 16, with ACT on 13, New Zealand First on 12, the Opportunity Party on 7 and Te Pāti Māori, which represents Māori interests, on 5.
The electoral commission was not due to announce the official result until 27 November.
Luxon congratulated Hipkins on a "very hard-fought race" before addressing party colleagues, saying "whatever the final count, we are incredibly proud of each and everyone for you".
He said he would run a caretaker government until the final results were confirmed later in the month, adding: "With those final results there can then be meaningful negotiations."
Elsewhere, Labour leader Hipkins said "the people have spoken", adding: "It may take a bit longer to work out what they've said."
Hipkins said the results made clear the "next parliament is going to require all of us to compromise, to work together and to find a common ground".
More than 99% of votes have been counted in New Zealand, with National and Labour neck-and-neck in terms of vote share.
But the preliminary results pointed to historically low support for the two major parties, with a combined vote share of around 60%.
They were followed by the Greens, ACT, New Zealand First, centrist party Opportunity and Te Pāti Māori, which represents Māori interests.
New Zealand election 2026: What you need to know
- Published27 October
The Opportunity Party crossed the 5% threshold to enter parliament for the first time, with leader Qiulae Wong saying would work with either side.
It has been described as this election's kingmaker as it remains open to working with either major bloc, but its leaders said they would negotiate first with the party that secures the most seats.
Speaking at Opportunity's watch party, Wong told supporters: "We believe that we can change the way we do politics to focus on the future, on the next generation, and on finding common ground."
Professor Andrew Geddis from the University of Otago, an expert in election law, said "the Opportunity Party as a wildcard player" could "determine which bloc of parties is able to govern".
"It will come down to some very fine vote margins not just between the parties, but in individual electorates. We are going to have to wait for the special votes to be processed and counted over the next three weeks," he said.
Special votes are votes cast outside a voter's electorate, including overseas.
The Greens – who have proposed forcing the country's two main supermarkets to divest stores to create publicly-owned shops – saw their vote rise by a couple of percentage points.
Julian McCrann, head of polling at Roy Morgan, told BBC News the cost of living was the main issue for many New Zealanders
"Three years ago, Luxon came in saying he'd be making New Zealanders' lives better and solving these economic issues, but he hasn't really delivered," he said.
More than half of the country no longer see New Zealand as a land of opportunity, according to an annual social cohesion survey. Record numbers of Kiwis have been leaving the country, with many going to Australia.
New Zealand's mixed-member proportional voting system means most governments are coalitions.
Each voter makes two choices – for the representative of their constituency in parliament and a political party.
Related topics
- Published23 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3ewev11g1e0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-07T15:56:28+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3578/live/a76cb0d0-dab5-11f1-a701-fddedf244c16.jpg",
    readTime: 10,
  },
  {
    id: "berkshire-hathaway-more-than-doubles-buy-91a8c3a6",
    title: "Berkshire Hathaway more than doubles buybacks in third quarter as earnings decline",
    titleJa: "Berkshire Hathaway more than doubles buybacks in third quarter as earnings decline",
    summaryJa: "Berkshire Hathaway said Saturday it accelerated its share repurchases during the third quarter, as operating and overall profits took a hit.",
    bodyOriginal: `Berkshire Hathaway said Saturday it accelerated its share repurchases during the third quarter, as operating and overall profits took a hit.
The Greg Abel-led conglomerate bought back $9.6 billion worth of Berkshire stock. That's more than double the $4.5 billion repurchased in the second quarter and brings the company's total buybacks for 2026 to about $14.4 billion.
The sharp increase came as Berkshire's operating earnings — those from wholly-owned businesses — fell year over year, as profits from its insurance business pulled back.
Berkshire operating profits totaled $12.705 billion, down 5.8% from $13.485 billion in the year-earlier period. Insurance underwriting tumbled 43% year on year to $1.352 billion, while insurance investment income declined 14% to $2.734 billion. Berkshire's railroad, energy and manufacturing businesses all saw earnings grow year over year.
The company's overall earnings, which include Berkshire's sprawling stock market portfolio, also dropped 28% in the third quarter to $22.112 billion from $30.796 billion a year prior. Investment gains for the company fell nearly 50% to $9.407 billion.
Despite the earnings pullback, Berkshire stock has outperformed recently amid a massive rotation out of technology stocks. Class A shares are up more than 12% over the past month, while the S&P 500 has dropped 5.5% in that time. Year to date, Berkshire has gained 13%, while the broad market index is up just 7.8%.
Berkshire's five largest equity holdings remained the same in the third quarter: Alphabet, American Express, Apple, Bank of America and Coca-Cola.
Berkshire's cash hoard also grew 3% in the third quarter $377.435 billion from $365.514 billion in the second quarter. However, excluding rail and utility cash along with T-bill payables, the conglomerate's cash holdings totaled $352.3 billion, down 1.9% quarter over quarter.
— CNBC's Alex Crippen contributed reporting.`,
    bodyJa: `Berkshire Hathaway said Saturday it accelerated its share repurchases during the third quarter, as operating and overall profits took a hit.
The Greg Abel-led conglomerate bought back $9.6 billion worth of Berkshire stock. That's more than double the $4.5 billion repurchased in the second quarter and brings the company's total buybacks for 2026 to about $14.4 billion.
The sharp increase came as Berkshire's operating earnings — those from wholly-owned businesses — fell year over year, as profits from its insurance business pulled back.
Berkshire operating profits totaled $12.705 billion, down 5.8% from $13.485 billion in the year-earlier period. Insurance underwriting tumbled 43% year on year to $1.352 billion, while insurance investment income declined 14% to $2.734 billion. Berkshire's railroad, energy and manufacturing businesses all saw earnings grow year over year.
The company's overall earnings, which include Berkshire's sprawling stock market portfolio, also dropped 28% in the third quarter to $22.112 billion from $30.796 billion a year prior. Investment gains for the company fell nearly 50% to $9.407 billion.
Despite the earnings pullback, Berkshire stock has outperformed recently amid a massive rotation out of technology stocks. Class A shares are up more than 12% over the past month, while the S&P 500 has dropped 5.5% in that time. Year to date, Berkshire has gained 13%, while the broad market index is up just 7.8%.
Berkshire's five largest equity holdings remained the same in the third quarter: Alphabet, American Express, Apple, Bank of America and Coca-Cola.
Berkshire's cash hoard also grew 3% in the third quarter $377.435 billion from $365.514 billion in the second quarter. However, excluding rail and utility cash along with T-bill payables, the conglomerate's cash holdings totaled $352.3 billion, down 1.9% quarter over quarter.
— CNBC's Alex Crippen contributed reporting.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/berkshire-hathaway-q3-2026-earnings-buybacks.html",
    publishedAt: "2026-11-07T15:23:46+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "risk-of-iran-war-escalation-remains-high-9d020de0",
    title: "Risk of Iran war escalation remains high despite Democratic sweep in U.S. midterm elections",
    titleJa: "Risk of Iran war escalation remains high despite Democratic sweep in U.S. midterm elections",
    summaryJa: "The U.S. and Iran are on a collision course as tensions in the Middle East simmer.",
    bodyOriginal: `The U.S. and Iran are careening toward renewed war despite growing hopes this week that the Democrats' decisive midterm election victory will bring the conflict to an end, analysts say.
Crude oil prices fell more than 16% over the last five trading days after Vice President JD Vance publicly blamed the Republicans' stinging loss on the war. Vance's remarks raised questions about whether there is still support within the administration to continue the conflict with Iran.
The Democrats plan to use their comfortable majorities in both chambers of Congress to pass a war powers resolution that demands President Donald Trump end the war. But tensions in the Middle East have not eased since the election, and the Democrats aren't sworn in until January, the analysts say.
"Throughout the week, we were struck by the divergence between deepening escalation concerns in the Gulf and the headline driven off-ramp optimism of market participants thousands of miles away," Helima Croft, head of global commodity strategy at RBC Capital Markets, told investors in a note Friday.
More attacks
Several oil tankers have come under attack near Oman since the election, killing one seafarer, according to maritime security agencies. Iran's Houthi allies in Yemen continue to fire missiles at neighboring Saudi Arabia.
Meanwhile, the U.S. military buildup continues, with a third carrier strike group en route to the region. The consulting group Rapidan Energy sees an 80% chance that fighting will resume as diplomacy stalls.
President Donald Trump told reporters Thursday that he will make a decision soon on whether to attack Iran again.
"I would rather not destroy the rest of the country if possible but maybe I'll have to," Trump said in the Oval Office. "You'll know soon enough."
"We're locked and loaded," the president said. "If we have to do the rest of the Iran thing, we're very much locked in."
Price risk
Crude oil prices will vault above $100 a barrel again in response to renewed fighting, said Bob McNally, president of Rapidan and a former energy advisor to President George W. Bush. Brent crude, the international benchmark, was trading above $97 on Friday while U.S. crude was around $90.
"President Donald Trump is determined as a legacy item, almost at all costs, to prevent Iran from getting a nuclear weapon, having them give up their nuclear capabilities," McNally told CNBC's "Squawk Box Asia" on Friday.
"The Iranian regime, on the other hand, is not willing to do it," the analyst said. The escalation dynamic remains in place so long as that core difference between the U.S. and Iran persists, he said.
The risk of war is still alive, especially since Trump doesn't face anymore future elections, said Amos Hochstein, a former energy advisor to President Joe Biden. Gasoline, diesel and jet fuel prices would all surge as a consequence, Hochstein told CNBC's "Power Lunch" Friday.
Iranian taunts
Tehran has been taunting the Trump administration since the election. The social media account of Iran's Supreme Leader Mojtaba Khamenei said the "process of the U.S.'s collapse has accelerated" after the midterm results.
And Congress is unlikely to pass a war powers resolution until Democrats take control in January. Trump can veto such a resolution in any case.
The main leverage Congress will have is the power of the purse, Croft said. Government funding expires on Dec. 11 and negotiations for another continuing resolution could drag into 2027, she said. This would give Democrats more leverage when they take power in January, the analyst said.
"Importantly, deferring funding decisions would not immediately constrain Trump's ability to conduct military operations, but could significantly reshape the administration's longer-term funding outlook," Croft told investors.
Trump discussed diplomatic efforts to de-escalate tensions in the region with the emir of Qatar during a Friday phone call, according to Qatar's state news agency.
An unnamed senior Iranian official told Reuters on Thursday that Tehran sent a nuclear proposal to the U.S. through Qatar. Tehran will only discuss the proposal after the U.S. meets its demands, the Iranian official told Reuters.
Trump seemed to dismiss the diplomatic efforts Thursday.
"Iran will never have a nuclear weapon," the president said. "They're not doing anything without our approval. It doesn't make any difference what they're looking at," he said of the diplomatic efforts.`,
    bodyJa: `The U.S. and Iran are careening toward renewed war despite growing hopes this week that the Democrats' decisive midterm election victory will bring the conflict to an end, analysts say.
Crude oil prices fell more than 16% over the last five trading days after Vice President JD Vance publicly blamed the Republicans' stinging loss on the war. Vance's remarks raised questions about whether there is still support within the administration to continue the conflict with Iran.
The Democrats plan to use their comfortable majorities in both chambers of Congress to pass a war powers resolution that demands President Donald Trump end the war. But tensions in the Middle East have not eased since the election, and the Democrats aren't sworn in until January, the analysts say.
"Throughout the week, we were struck by the divergence between deepening escalation concerns in the Gulf and the headline driven off-ramp optimism of market participants thousands of miles away," Helima Croft, head of global commodity strategy at RBC Capital Markets, told investors in a note Friday.
More attacks
Several oil tankers have come under attack near Oman since the election, killing one seafarer, according to maritime security agencies. Iran's Houthi allies in Yemen continue to fire missiles at neighboring Saudi Arabia.
Meanwhile, the U.S. military buildup continues, with a third carrier strike group en route to the region. The consulting group Rapidan Energy sees an 80% chance that fighting will resume as diplomacy stalls.
President Donald Trump told reporters Thursday that he will make a decision soon on whether to attack Iran again.
"I would rather not destroy the rest of the country if possible but maybe I'll have to," Trump said in the Oval Office. "You'll know soon enough."
"We're locked and loaded," the president said. "If we have to do the rest of the Iran thing, we're very much locked in."
Price risk
Crude oil prices will vault above $100 a barrel again in response to renewed fighting, said Bob McNally, president of Rapidan and a former energy advisor to President George W. Bush. Brent crude, the international benchmark, was trading above $97 on Friday while U.S. crude was around $90.
"President Donald Trump is determined as a legacy item, almost at all costs, to prevent Iran from getting a nuclear weapon, having them give up their nuclear capabilities," McNally told CNBC's "Squawk Box Asia" on Friday.
"The Iranian regime, on the other hand, is not willing to do it," the analyst said. The escalation dynamic remains in place so long as that core difference between the U.S. and Iran persists, he said.
The risk of war is still alive, especially since Trump doesn't face anymore future elections, said Amos Hochstein, a former energy advisor to President Joe Biden. Gasoline, diesel and jet fuel prices would all surge as a consequence, Hochstein told CNBC's "Power Lunch" Friday.
Iranian taunts
Tehran has been taunting the Trump administration since the election. The social media account of Iran's Supreme Leader Mojtaba Khamenei said the "process of the U.S.'s collapse has accelerated" after the midterm results.
And Congress is unlikely to pass a war powers resolution until Democrats take control in January. Trump can veto such a resolution in any case.
The main leverage Congress will have is the power of the purse, Croft said. Government funding expires on Dec. 11 and negotiations for another continuing resolution could drag into 2027, she said. This would give Democrats more leverage when they take power in January, the analyst said.
"Importantly, deferring funding decisions would not immediately constrain Trump's ability to conduct military operations, but could significantly reshape the administration's longer-term funding outlook," Croft told investors.
Trump discussed diplomatic efforts to de-escalate tensions in the region with the emir of Qatar during a Friday phone call, according to Qatar's state news agency.
An unnamed senior Iranian official told Reuters on Thursday that Tehran sent a nuclear proposal to the U.S. through Qatar. Tehran will only discuss the proposal after the U.S. meets its demands, the Iranian official told Reuters.
Trump seemed to dismiss the diplomatic efforts Thursday.
"Iran will never have a nuclear weapon," the president said. "They're not doing anything without our approval. It doesn't make any difference what they're looking at," he said of the diplomatic efforts.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/iran-war-midterm-election-oil-price-trump.html",
    publishedAt: "2026-11-07T13:03:12+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "america-doesn-t-like-socialism-so-why-ar-be57aa78",
    title: "America doesn't like socialism. So why are socialists winning?",
    titleJa: "America doesn't like socialism. So why are socialists winning?",
    summaryJa: "Democratic socialists had their best showing yet at the polls. The problem: Most U.S. voters don't actually like socialism.",
    bodyOriginal: `Democratic socialists just had their biggest election night yet.
There's just one complication: Most American voters don't actually like socialism.
Six candidates backed by the Democratic Socialists of America won House seats Tuesday, giving the movement its largest foothold yet in Congress and greater clout in a Democratic Party already divided over how far left to go.
The victories, coming on the heels of New York City Mayor Zohran Mamdani's rise to power, mark another milestone for a movement that has spent years challenging the party establishment. Now, with Democrats sweeping control of Congress, the question is whether those electoral gains will translate into actual political power.
The results of the new CNBC Voter Poll show the potential hazard of handing too much power to the party's left flank. The survey of roughly 80,000 midterm voters found that 53% view socialism unfavorably, compared with 33% who viewed it favorably. Capitalism fared considerably better, with 56% expressing a positive view. Just 18% of voters identified themselves as democratic socialists.
That disconnect underscores both the opportunity and the challenge facing Democrats and their growing left flank. How the party reconciles the divide between reforming capitalism and fundamentally overhauling it could shape its legislative agenda in Congress, its economic message to voters and, ultimately, its direction heading into the 2028 presidential election.
A mixed night for the left
The DSA's presence in Congress will be quadrupled when Tuesday's victors, all of whom won in safely Democratic districts, are sworn in.
But the projected Democratic landslide of more than 250 House seats could dilute their influence. Party leaders could afford to lose all eight DSA votes on most measures, leaving the group with far less bargaining power than it would wield in a narrowly controlled chamber.
Still, the movement is building financial muscle. While the DSA relies on membership dues, wealthy donors are now backing its candidates through outside groups. The 12 largest donors to American Priorities, a super PAC supporting some DSA-backed candidates, gave nearly $5.9 million this cycle, according to a CNBC analysis of Federal Election Commission filings through Oct. 31.
"We've had success with more donors but also we have an even stronger ground game to spread our message," said Megan Romer, co-chair of the DSA. "Mailers and ads alone just don't do it anymore. You have to knock on more doors and make more phone calls and talk to more people at work and in your union."
The more revealing tests on Tuesday came outside of liberal enclaves.
In Florida, DSA member Angie Nixon came within three percentage points of an upset in a state where Democrats haven't won a Senate race since 2012 and President Donald Trump won by 13 percentage points in 2024. But she lost by a wider margin than Democratic gubernatorial candidate David Jolly, who took a more moderate approach.
Michigan told a similar story. Progressive Abdul El-Sayed – backed by self-described democratic socialist Sen. Bernie Sanders, I-Vt., – won his Senate seat by seven percentage points. Yet he lagged nearly four percentage points behind Democratic Gov.-elect Jocelyn Benson's winning margin.
El-Sayed shares many DSA priorities but neither belongs to the group nor received its endorsement. He says he favors reforming capitalism over replacing it.
State ballot initiatives offered an equally mixed ideological verdict: Nearly two-thirds of voters in ruby-red Montana backed limits on corporate political spending, while deep-blue California rejected a billionaire wealth tax by roughly 10 percentage points, even as voters approved higher income taxes on the wealthy.
The results sharpen the dilemma over Democrats' identity heading into 2028, as Rep. Alexandria Ocasio-Cortez, D-N.Y., the DSA's most prominent standard-bearer, seemingly weighs a White House bid: Can left-wing populism expand the party's coalition without alienating the swing-state moderates it needs to win a presidential election – especially in a less favorable political environment?
"I think a lot of people did vote for Democrats who would not ordinarily and who probably did it ... with their teeth gritted," Romer told CNBC.
Capitalism or socialism?
But it's clear that even voters who reject socialism aren't satisfied with capitalism as it stands.
Three out of every four participants in the CNBC Voter Poll said the condition of the U.S. economy was poor or not so good, compared with just 2% who described it as excellent. And 70% said the economic system favors the wealthy rather than treating most Americans fairly.
That frustration helped fuel a populist message far beyond the socialist left, with victorious Democrats from Adam Hamilton in Kansas to James Talarico in Texas tapping into anger over rising costs, economic inequality and the political influence of wealthy elites. Eighteen Sanders-endorsed candidates also won, including in traditionally right-leaning states like Ohio and Montana.
"The real fight in this country is not left versus right. It is top versus bottom," Talarico, who flipped a Senate seat for Democrats in the Lone Star state, said in his victory speech. "The people at the top work so hard to keep us angry and divided because our unity is a threat to their wealth and their power."
Even politicians who weren't on the ballot took note. Sen. Elizabeth Warren, D-Mass., said in a video posted to X Friday that "Democrats won by being populist economic fighters."
Economists have pointed to measures showing increasing wealth concentration and a shrinking share of the U.S. GDP heading to workers in the form of pay as signs that the divide between the country's rich and poor is widening. Coming out of the pandemic, the "K"-shaped economy has become a common descriptor for the unequal recovery seen by income classes.
Americans displayed their economic dissatisfaction well before they headed to the polls this week. The University of Michigan's closely followed consumer sentiment index hit all-time lows this year.
"We have a rising tide that is not equally lifting all boats," said Joe Brusuelas, chief economist at RSM, a tax firm. "That's not what we used to tell ourselves when we were young."
Rather than signaling a distaste for capitalism as a whole, Brusuelas said this week's results show voters want a system that also includes populist policies like Medicare for all. Or, as he calls it, "capitalism with a human face."
"These things are not mutually exclusive," said Brusuelas, who regularly briefs members of Congress on policy issues. "We can walk and chew gum at the same time."
Wall Street readies
Tuesday's Democratic sweep left some on Wall Street racing to prepare their clients' portfolios for potential policy shifts. Bank of America analysts detailed what heightened scrutiny of social media platforms or artificial intelligence data centers could mean for the shares of companies in those industries. CIBC built a basket of stocks that should benefit from a Democratically controlled Congress.
Still, the reaction of Wall Street veterans and New York City business moguls to this week's election was relatively subdued compared with Mamdani's victory in the mayoral race last year.
After Mamdani clinched his party's nomination, Pershing Square CEO Bill Ackman said he was "a bit depressed." Ahead of Mamdani's victory, Kathryn Wylde, who leads the Partnership for New York City, a nonprofit group of business executives, told CNBC that "terror is the feeling" as he rose in the polls.
Wall Street magnates wondered how a city known as the epicenter of financial markets and global capitalism could survive under a self-described socialist. Some questioned if billionaires would flee the city or whether corporations would move their headquarters — fears that largely haven't materialized since Mamdani took office.
With roughly 10 months of Mamdani's term in the rearview mirror, Anthony Chan, the former chief economist at JPMorgan, said finance moguls have realized that politics don't necessarily result in material policy changes. Chan said it's a message they've carried with them exiting this week, with many understanding that any incoming lawmakers in Washington aligned with democratic socialist policies would be a small minority.
"Many of the people that I meet that were very adamantly against and opposed to his candidacy now are sending their kids to his free daycare centers," Chan said, referencing Mamdani's partnership with the state to expand no-cost programs for 2-year-olds in New York City.
"I thought you felt that the world was going to end if this mayor came in," said Chan, who's also an alumnus of Barclays and the New York Federal Reserve. "Now, you're sending your kids to his free daycare centers."
But the DSA has even bigger ambitions for 2028. With growing political clout, infrastructure and financial backing, the movement is looking to expand its influence nationwide, while one of its most prominent allies, Ocasio-Cortez, weighs a White House run.
"That infrastructure is there, and that will make a big difference for a potential left presidential candidate," Romer said. "It's really kind of do or die time. We really have to deliver."`,
    bodyJa: `Democratic socialists just had their biggest election night yet.
There's just one complication: Most American voters don't actually like socialism.
Six candidates backed by the Democratic Socialists of America won House seats Tuesday, giving the movement its largest foothold yet in Congress and greater clout in a Democratic Party already divided over how far left to go.
The victories, coming on the heels of New York City Mayor Zohran Mamdani's rise to power, mark another milestone for a movement that has spent years challenging the party establishment. Now, with Democrats sweeping control of Congress, the question is whether those electoral gains will translate into actual political power.
The results of the new CNBC Voter Poll show the potential hazard of handing too much power to the party's left flank. The survey of roughly 80,000 midterm voters found that 53% view socialism unfavorably, compared with 33% who viewed it favorably. Capitalism fared considerably better, with 56% expressing a positive view. Just 18% of voters identified themselves as democratic socialists.
That disconnect underscores both the opportunity and the challenge facing Democrats and their growing left flank. How the party reconciles the divide between reforming capitalism and fundamentally overhauling it could shape its legislative agenda in Congress, its economic message to voters and, ultimately, its direction heading into the 2028 presidential election.
A mixed night for the left
The DSA's presence in Congress will be quadrupled when Tuesday's victors, all of whom won in safely Democratic districts, are sworn in.
But the projected Democratic landslide of more than 250 House seats could dilute their influence. Party leaders could afford to lose all eight DSA votes on most measures, leaving the group with far less bargaining power than it would wield in a narrowly controlled chamber.
Still, the movement is building financial muscle. While the DSA relies on membership dues, wealthy donors are now backing its candidates through outside groups. The 12 largest donors to American Priorities, a super PAC supporting some DSA-backed candidates, gave nearly $5.9 million this cycle, according to a CNBC analysis of Federal Election Commission filings through Oct. 31.
"We've had success with more donors but also we have an even stronger ground game to spread our message," said Megan Romer, co-chair of the DSA. "Mailers and ads alone just don't do it anymore. You have to knock on more doors and make more phone calls and talk to more people at work and in your union."
The more revealing tests on Tuesday came outside of liberal enclaves.
In Florida, DSA member Angie Nixon came within three percentage points of an upset in a state where Democrats haven't won a Senate race since 2012 and President Donald Trump won by 13 percentage points in 2024. But she lost by a wider margin than Democratic gubernatorial candidate David Jolly, who took a more moderate approach.
Michigan told a similar story. Progressive Abdul El-Sayed – backed by self-described democratic socialist Sen. Bernie Sanders, I-Vt., – won his Senate seat by seven percentage points. Yet he lagged nearly four percentage points behind Democratic Gov.-elect Jocelyn Benson's winning margin.
El-Sayed shares many DSA priorities but neither belongs to the group nor received its endorsement. He says he favors reforming capitalism over replacing it.
State ballot initiatives offered an equally mixed ideological verdict: Nearly two-thirds of voters in ruby-red Montana backed limits on corporate political spending, while deep-blue California rejected a billionaire wealth tax by roughly 10 percentage points, even as voters approved higher income taxes on the wealthy.
The results sharpen the dilemma over Democrats' identity heading into 2028, as Rep. Alexandria Ocasio-Cortez, D-N.Y., the DSA's most prominent standard-bearer, seemingly weighs a White House bid: Can left-wing populism expand the party's coalition without alienating the swing-state moderates it needs to win a presidential election – especially in a less favorable political environment?
"I think a lot of people did vote for Democrats who would not ordinarily and who probably did it ... with their teeth gritted," Romer told CNBC.
Capitalism or socialism?
But it's clear that even voters who reject socialism aren't satisfied with capitalism as it stands.
Three out of every four participants in the CNBC Voter Poll said the condition of the U.S. economy was poor or not so good, compared with just 2% who described it as excellent. And 70% said the economic system favors the wealthy rather than treating most Americans fairly.
That frustration helped fuel a populist message far beyond the socialist left, with victorious Democrats from Adam Hamilton in Kansas to James Talarico in Texas tapping into anger over rising costs, economic inequality and the political influence of wealthy elites. Eighteen Sanders-endorsed candidates also won, including in traditionally right-leaning states like Ohio and Montana.
"The real fight in this country is not left versus right. It is top versus bottom," Talarico, who flipped a Senate seat for Democrats in the Lone Star state, said in his victory speech. "The people at the top work so hard to keep us angry and divided because our unity is a threat to their wealth and their power."
Even politicians who weren't on the ballot took note. Sen. Elizabeth Warren, D-Mass., said in a video posted to X Friday that "Democrats won by being populist economic fighters."
Economists have pointed to measures showing increasing wealth concentration and a shrinking share of the U.S. GDP heading to workers in the form of pay as signs that the divide between the country's rich and poor is widening. Coming out of the pandemic, the "K"-shaped economy has become a common descriptor for the unequal recovery seen by income classes.
Americans displayed their economic dissatisfaction well before they headed to the polls this week. The University of Michigan's closely followed consumer sentiment index hit all-time lows this year.
"We have a rising tide that is not equally lifting all boats," said Joe Brusuelas, chief economist at RSM, a tax firm. "That's not what we used to tell ourselves when we were young."
Rather than signaling a distaste for capitalism as a whole, Brusuelas said this week's results show voters want a system that also includes populist policies like Medicare for all. Or, as he calls it, "capitalism with a human face."
"These things are not mutually exclusive," said Brusuelas, who regularly briefs members of Congress on policy issues. "We can walk and chew gum at the same time."
Wall Street readies
Tuesday's Democratic sweep left some on Wall Street racing to prepare their clients' portfolios for potential policy shifts. Bank of America analysts detailed what heightened scrutiny of social media platforms or artificial intelligence data centers could mean for the shares of companies in those industries. CIBC built a basket of stocks that should benefit from a Democratically controlled Congress.
Still, the reaction of Wall Street veterans and New York City business moguls to this week's election was relatively subdued compared with Mamdani's victory in the mayoral race last year.
After Mamdani clinched his party's nomination, Pershing Square CEO Bill Ackman said he was "a bit depressed." Ahead of Mamdani's victory, Kathryn Wylde, who leads the Partnership for New York City, a nonprofit group of business executives, told CNBC that "terror is the feeling" as he rose in the polls.
Wall Street magnates wondered how a city known as the epicenter of financial markets and global capitalism could survive under a self-described socialist. Some questioned if billionaires would flee the city or whether corporations would move their headquarters — fears that largely haven't materialized since Mamdani took office.
With roughly 10 months of Mamdani's term in the rearview mirror, Anthony Chan, the former chief economist at JPMorgan, said finance moguls have realized that politics don't necessarily result in material policy changes. Chan said it's a message they've carried with them exiting this week, with many understanding that any incoming lawmakers in Washington aligned with democratic socialist policies would be a small minority.
"Many of the people that I meet that were very adamantly against and opposed to his candidacy now are sending their kids to his free daycare centers," Chan said, referencing Mamdani's partnership with the state to expand no-cost programs for 2-year-olds in New York City.
"I thought you felt that the world was going to end if this mayor came in," said Chan, who's also an alumnus of Barclays and the New York Federal Reserve. "Now, you're sending your kids to his free daycare centers."
But the DSA has even bigger ambitions for 2028. With growing political clout, infrastructure and financial backing, the movement is looking to expand its influence nationwide, while one of its most prominent allies, Ocasio-Cortez, weighs a White House run.
"That infrastructure is there, and that will make a big difference for a potential left presidential candidate," Romer said. "It's really kind of do or die time. We really have to deliver."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/socialism-elections-economy.html",
    publishedAt: "2026-11-07T13:01:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "anthropic-ipo-meets-ai-backlash-after-mi-ad162d5c",
    title: "Anthropic IPO meets AI backlash after midterms show stinging rebuke of data centers",
    titleJa: "Anthropic IPO meets AI backlash after midterms show stinging rebuke of data centers",
    summaryJa: "Anthropic is poised to become the first pure-play AI company to hit the public market at a time when the public is increasingly leary of the industry.",
    bodyOriginal: `Americans were unequivocal at the ballot box this week as they expressed disdain for tech billionaires and mistrust of artificial intelligence. With that backdrop, Anthropic is about to try to go public.
The AI company is gearing up for a potentially historic IPO, likely targeting mid-November for its Nasdaq debut. CNBC reported on Friday that Anthropic investors see the company aiming for a valuation of $1 trillion to $1.5 trillion, down from a target of $2 trillion that had been floated in recent months.
From Wall Street to Main Street, it's becoming a tougher environment for Anthropic. The Nasdaq on Thursday suffered its steepest drop in 19 months, and it's down to start November after October marked its worst month since March 2025. Chipmakers and neoclouds, the companies most closely tied to the AI buildout, are getting hit the hardest.
Voters rebuked AI in Tuesday's midterm elections, while sending Democrats to sweeping congressional victories across the country. Candidates who advocated for more stringent AI regulation won handily in states like Michigan, Ohio, Texas and Georgia, which will all now have Democratic governors, and local communities opposed data center-related ballot measures in 40 out of 41 cases.
More than half of voters said AI data centers were a "crucial" or "major factor" in who they supported for Congress, according to an exit poll from NBC News.
"People don't want a data center going near them if it's just going to house AI that's going to help a big tech company profit," Maura Austin, a behavioral scientist at the University of Virginia, told CNBC. "What Anthropic is doing when they're going public with such a high valuation is they're really leaning into that big tech, billionaire kind of caricature. I expect that's not going to go well with the public."
Anthropic has long tried to position itself as a safety-conscious company that takes AI's potential risks and benefits seriously. CEO Dario Amodei co-founded the company alongside a handful of researchers who defected from OpenAI, now its chief rival. Anthropic is best known for developing a family of AI models called Claude, and it primarily sells its products and services to other businesses.
The company's enterprise focus has helped it avoid becoming the public face of AI, leaving that distinction to OpenAI and CEO Sam Altman. But with Anthropic poised to become the first pure-play AI company to hit the public market, minting a number of new billionaires and many more millionaires in the process, a heightened level of scrutiny is coming.
"Being a public company, just that by itself pushes you in the limelight," Reena Aggarwal, a professor of finance at Georgetown University, said in an interview. "And then AI is such a hot-button issue that Anthropic will be in the limelight even more."
Matt Kennedy, a senior IPO market strategist at Renaissance Capital, said that's not necessarily a bad thing for Anthropic.
Public markets force greater transparency, he said, and the company could attract new users through its debut. And since AI has become such a mainstream conversation topic, several private companies are already household names.
"I would say that a public company does not deserve more criticisms than a comparable private company," Kennedy said. "So Anthropic should not be put in a harsher public spotlight than OpenAI just because it's public."
Anthropic declined to comment.
Data center blowback
AI backlash accelerated over the summer after a series of high-profile safety and security incidents rattled the public. As concerns mounted, the debate over data centers intensified, while tech's hyperscalers simultaneously boosted their forecasts for capital expenditures, each reaching into the hundreds of billions of dollars.
Anthropic and OpenAI depend on state-of-the-art data centers to train models and serve customers, and they're trying to build out capacity as quickly as possible to meet demand. Anthropic said in an amended IPO prospectus this week that it has entered into purchase commitments and lease agreements with an aggregate committed spend of about $895.4 billion, "substantially all of which is related to compute and infrastructure."
Americans grappling with inflation and stubbornly high gas prices have grown worried that the facilities could exacerbate environmental harms, raise utility bills and contribute to job loss. For many, a proposed data center in their backyard became the physical manifestation of the widespread antipathy toward AI.
In the risk factors section of its prospectus, Anthropic said opposition to data center development has become more organized across jurisdictions, and that the company's public profile could draw particular scrutiny to projects associated with it.
Nicole Greene, an analyst at Gartner, said she expects that Anthropic's executives have long been prepared to contend with AI backlash, especially given the disruptive nature of the technology.
"There's going to be big emotions," Greene told CNBC. "With big emotions and feelings — fear and excitement — comes heightened scrutiny."
Amodei acknowledged the souring sentiment around AI in a post on X in August. He said it's the result of a "crisis of trust," and that people believe companies, the government and the tech industry are always "cooking up some new way to screw them over."
Rebuilding public confidence is going to be an uphill battle as the company begins providing quarterly financial updates.
The University of Southern California published a survey on Monday that found that 71% of respondents don't trust big tech companies to act in society's best interest "at all" around data center development.
"Once you've lost trust, it's hard to gain it back," Wändi Bruine de Bruin, a professor at the University of Southern California's Schaeffer Institute, said in an interview. "The numbers are not good."
WATCH: Alex Kantrowitz: Anthropic doesn’t have a lot of flexibility on timing of its IPO`,
    bodyJa: `Americans were unequivocal at the ballot box this week as they expressed disdain for tech billionaires and mistrust of artificial intelligence. With that backdrop, Anthropic is about to try to go public.
The AI company is gearing up for a potentially historic IPO, likely targeting mid-November for its Nasdaq debut. CNBC reported on Friday that Anthropic investors see the company aiming for a valuation of $1 trillion to $1.5 trillion, down from a target of $2 trillion that had been floated in recent months.
From Wall Street to Main Street, it's becoming a tougher environment for Anthropic. The Nasdaq on Thursday suffered its steepest drop in 19 months, and it's down to start November after October marked its worst month since March 2025. Chipmakers and neoclouds, the companies most closely tied to the AI buildout, are getting hit the hardest.
Voters rebuked AI in Tuesday's midterm elections, while sending Democrats to sweeping congressional victories across the country. Candidates who advocated for more stringent AI regulation won handily in states like Michigan, Ohio, Texas and Georgia, which will all now have Democratic governors, and local communities opposed data center-related ballot measures in 40 out of 41 cases.
More than half of voters said AI data centers were a "crucial" or "major factor" in who they supported for Congress, according to an exit poll from NBC News.
"People don't want a data center going near them if it's just going to house AI that's going to help a big tech company profit," Maura Austin, a behavioral scientist at the University of Virginia, told CNBC. "What Anthropic is doing when they're going public with such a high valuation is they're really leaning into that big tech, billionaire kind of caricature. I expect that's not going to go well with the public."
Anthropic has long tried to position itself as a safety-conscious company that takes AI's potential risks and benefits seriously. CEO Dario Amodei co-founded the company alongside a handful of researchers who defected from OpenAI, now its chief rival. Anthropic is best known for developing a family of AI models called Claude, and it primarily sells its products and services to other businesses.
The company's enterprise focus has helped it avoid becoming the public face of AI, leaving that distinction to OpenAI and CEO Sam Altman. But with Anthropic poised to become the first pure-play AI company to hit the public market, minting a number of new billionaires and many more millionaires in the process, a heightened level of scrutiny is coming.
"Being a public company, just that by itself pushes you in the limelight," Reena Aggarwal, a professor of finance at Georgetown University, said in an interview. "And then AI is such a hot-button issue that Anthropic will be in the limelight even more."
Matt Kennedy, a senior IPO market strategist at Renaissance Capital, said that's not necessarily a bad thing for Anthropic.
Public markets force greater transparency, he said, and the company could attract new users through its debut. And since AI has become such a mainstream conversation topic, several private companies are already household names.
"I would say that a public company does not deserve more criticisms than a comparable private company," Kennedy said. "So Anthropic should not be put in a harsher public spotlight than OpenAI just because it's public."
Anthropic declined to comment.
Data center blowback
AI backlash accelerated over the summer after a series of high-profile safety and security incidents rattled the public. As concerns mounted, the debate over data centers intensified, while tech's hyperscalers simultaneously boosted their forecasts for capital expenditures, each reaching into the hundreds of billions of dollars.
Anthropic and OpenAI depend on state-of-the-art data centers to train models and serve customers, and they're trying to build out capacity as quickly as possible to meet demand. Anthropic said in an amended IPO prospectus this week that it has entered into purchase commitments and lease agreements with an aggregate committed spend of about $895.4 billion, "substantially all of which is related to compute and infrastructure."
Americans grappling with inflation and stubbornly high gas prices have grown worried that the facilities could exacerbate environmental harms, raise utility bills and contribute to job loss. For many, a proposed data center in their backyard became the physical manifestation of the widespread antipathy toward AI.
In the risk factors section of its prospectus, Anthropic said opposition to data center development has become more organized across jurisdictions, and that the company's public profile could draw particular scrutiny to projects associated with it.
Nicole Greene, an analyst at Gartner, said she expects that Anthropic's executives have long been prepared to contend with AI backlash, especially given the disruptive nature of the technology.
"There's going to be big emotions," Greene told CNBC. "With big emotions and feelings — fear and excitement — comes heightened scrutiny."
Amodei acknowledged the souring sentiment around AI in a post on X in August. He said it's the result of a "crisis of trust," and that people believe companies, the government and the tech industry are always "cooking up some new way to screw them over."
Rebuilding public confidence is going to be an uphill battle as the company begins providing quarterly financial updates.
The University of Southern California published a survey on Monday that found that 71% of respondents don't trust big tech companies to act in society's best interest "at all" around data center development.
"Once you've lost trust, it's hard to gain it back," Wändi Bruine de Bruin, a professor at the University of Southern California's Schaeffer Institute, said in an interview. "The numbers are not good."
WATCH: Alex Kantrowitz: Anthropic doesn’t have a lot of flexibility on timing of its IPO`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/anthropic-ipo-ai-data-center-backlash.html",
    publishedAt: "2026-11-07T13:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "tech-companies-face-mounting-child-safet-3a560f72",
    title: "Tech companies face mounting child safety lawsuits while pushing AI into schools",
    titleJa: "Tech companies face mounting child safety lawsuits while pushing AI into schools",
    summaryJa: "Lawsuits against Snap, Meta and Google are creating headwinds for tech companies just as artificial intelligence tools expand into classrooms.",
    bodyOriginal: `Tech companies have spent years telling parents they're working to make their products safer for children. But ongoing jury trials, settlements and related litigation against the likes of Meta, Google and Snap suggest that they're not doing enough.
The latest examples landed this week. Snap confidentially settled a case claiming that its technology caused severe psychological distress to two teenage users. Meta, TikTok and YouTube previously settled with the plaintiffs in the same suit. And Google was sued this week by the parents of a child who allegedly suffered a psychological crisis after chatting with the Gemini AI chatbot in Google Classroom.
Concern is intensifying as artificial intelligence companies pursue trillion-dollar valuations, and established internet giants pour money into developing advanced AI models while pushing them into the classroom. Products and features intended to maximize engagement can have detrimental effects on users, thus warranting "broader systemic changes in tech design, particularly when children are using them," said developmental psychologist Kate Blocker.
"I think it's so so important that children's safety is being considered when these products — AI, social media, et cetera — are being designed, and not after the fact as these problems emerge," said Blocker, the director of research and programs for the nonprofit Children and Screens.
Snap's settlement this week, which spared CEO Evan Spiegel from testifying in a Los Angeles court, continues a general trend of tech companies attempting to shield themselves from public scrutiny due to the various high-profile child-safety related trials this year, said Joseph McNally, the director of emerging litigation at McNicholas & McNicholas.
The case was one of several lawsuits related to the social media personal injury trial that Meta and YouTube lost earlier this year. More trials are slated to commence in March.
"I view this settlement and the other settlements in this space as an effort by tech companies to turn a corner, not only because I think that there were real legal challenges, but also the reputation of their products, the reputation of their companies has really been hit," said McNally, a former acting U.S. attorney for the Central District of California.
"The parties are pleased to have been able to resolve this matter in an amicable manner," a Snap spokesperson said in a statement.
"We've built safeguards, launched safety tutorials, and partnered with experts and because safety is never finished, we remain committed to continually strengthening the safety, privacy, and well-being of our community," the Snap spokesperson said.
But there remains a federal case involving Meta, TikTok, Snap and YouTube and a litany of nationwide school districts, along with various state attorneys general suits. In August, Meta agreed to pay nearly $17 billion to settle with a group of state AGs in a child mental health case. Some AGs are still pursuing similar suits against Meta's rivals.
The social media lawsuits have helped inform parents and the public about how the industry designs products used by teenagers and children, McNally said.
"It's the technology arms race that continues," he said. "What is oftentimes missing is how you balance that participation in the arms race with utility and then product safety."
More scrutiny in the classroom
Google ran into more criticism this week for moving too fast. The New York Times reported on Tuesday that K-12 schools that don't allow use of Google's AI tools for students will lose access to search. Chris Phillips, vice president for education at Google, told the Times that, "Search and AI are deeply integrated."
That coincided with the new lawsuit against Google centering on a teen's alleged suicidal crisis that the parents attributed to the company's Gemini AI. The plaintiff's attorneys allege that "despite Gemini's known risks, Google hastily integrated" Gemini into Chromebook computers for school children.
"We are reviewing the claims in the lawsuit and we take this very seriously," a Google spokesperson said in a statement. "We've worked extensively with medical professionals and academic experts to build features that help young people find critical support and trusted resources when they need it."
Google and its internet peers have for decades been able to rely on Section 230.
Passed in 1996, the federal legislation has protected social media companies from being sued over content posted by their users. That's why plaintiffs' attorneys and state AGs have been focused on alleged harms stemming from the design of the tech platforms as opposed to their content.
Some plaintiffs are using the same tactics against AI companies. OpenAI faces several lawsuits from state AGs and plaintiff attorneys, taking cues from the social media suits in alleging that the design of ChatGPT can pose risks to children.
The litigation could become a growing financial risk as the company plans for a potential blockbuster IPO. OpenAI competitor Anthropic, which is planning to go public this month, highlighted the issue in its prospectus, even though the Claude creator prohibits children from using its product.
"This is a clear indication that tech companies anticipate more litigation risks than they did a decade ago," said Michele Neitz, a professor at the University of San Francisco School of Law.
Blocker said that the highly personalized nature of current AI-powered chat apps makes it "a little bit unpredictable" to determine exactly what the apps will say to kids. She stressed the importance of testing and evaluating these products for children's developmental safety from the start, "not after harms start happening."
This collective litigation has helped educate the public on the potential pitfalls of poor product design choices, Blocker said. And it could be a catalyzing force for change in the tech industry.
"Certainly there's a hope that this will motivate real systemic change, both from a regulation standpoint and internal company decision-making standpoint," Blocker said.
If you are having suicidal thoughts or are in distress, contact the Suicide & Crisis Lifeline at 988 for support and assistance from a trained counselor.`,
    bodyJa: `Tech companies have spent years telling parents they're working to make their products safer for children. But ongoing jury trials, settlements and related litigation against the likes of Meta, Google and Snap suggest that they're not doing enough.
The latest examples landed this week. Snap confidentially settled a case claiming that its technology caused severe psychological distress to two teenage users. Meta, TikTok and YouTube previously settled with the plaintiffs in the same suit. And Google was sued this week by the parents of a child who allegedly suffered a psychological crisis after chatting with the Gemini AI chatbot in Google Classroom.
Concern is intensifying as artificial intelligence companies pursue trillion-dollar valuations, and established internet giants pour money into developing advanced AI models while pushing them into the classroom. Products and features intended to maximize engagement can have detrimental effects on users, thus warranting "broader systemic changes in tech design, particularly when children are using them," said developmental psychologist Kate Blocker.
"I think it's so so important that children's safety is being considered when these products — AI, social media, et cetera — are being designed, and not after the fact as these problems emerge," said Blocker, the director of research and programs for the nonprofit Children and Screens.
Snap's settlement this week, which spared CEO Evan Spiegel from testifying in a Los Angeles court, continues a general trend of tech companies attempting to shield themselves from public scrutiny due to the various high-profile child-safety related trials this year, said Joseph McNally, the director of emerging litigation at McNicholas & McNicholas.
The case was one of several lawsuits related to the social media personal injury trial that Meta and YouTube lost earlier this year. More trials are slated to commence in March.
"I view this settlement and the other settlements in this space as an effort by tech companies to turn a corner, not only because I think that there were real legal challenges, but also the reputation of their products, the reputation of their companies has really been hit," said McNally, a former acting U.S. attorney for the Central District of California.
"The parties are pleased to have been able to resolve this matter in an amicable manner," a Snap spokesperson said in a statement.
"We've built safeguards, launched safety tutorials, and partnered with experts and because safety is never finished, we remain committed to continually strengthening the safety, privacy, and well-being of our community," the Snap spokesperson said.
But there remains a federal case involving Meta, TikTok, Snap and YouTube and a litany of nationwide school districts, along with various state attorneys general suits. In August, Meta agreed to pay nearly $17 billion to settle with a group of state AGs in a child mental health case. Some AGs are still pursuing similar suits against Meta's rivals.
The social media lawsuits have helped inform parents and the public about how the industry designs products used by teenagers and children, McNally said.
"It's the technology arms race that continues," he said. "What is oftentimes missing is how you balance that participation in the arms race with utility and then product safety."
More scrutiny in the classroom
Google ran into more criticism this week for moving too fast. The New York Times reported on Tuesday that K-12 schools that don't allow use of Google's AI tools for students will lose access to search. Chris Phillips, vice president for education at Google, told the Times that, "Search and AI are deeply integrated."
That coincided with the new lawsuit against Google centering on a teen's alleged suicidal crisis that the parents attributed to the company's Gemini AI. The plaintiff's attorneys allege that "despite Gemini's known risks, Google hastily integrated" Gemini into Chromebook computers for school children.
"We are reviewing the claims in the lawsuit and we take this very seriously," a Google spokesperson said in a statement. "We've worked extensively with medical professionals and academic experts to build features that help young people find critical support and trusted resources when they need it."
Google and its internet peers have for decades been able to rely on Section 230.
Passed in 1996, the federal legislation has protected social media companies from being sued over content posted by their users. That's why plaintiffs' attorneys and state AGs have been focused on alleged harms stemming from the design of the tech platforms as opposed to their content.
Some plaintiffs are using the same tactics against AI companies. OpenAI faces several lawsuits from state AGs and plaintiff attorneys, taking cues from the social media suits in alleging that the design of ChatGPT can pose risks to children.
The litigation could become a growing financial risk as the company plans for a potential blockbuster IPO. OpenAI competitor Anthropic, which is planning to go public this month, highlighted the issue in its prospectus, even though the Claude creator prohibits children from using its product.
"This is a clear indication that tech companies anticipate more litigation risks than they did a decade ago," said Michele Neitz, a professor at the University of San Francisco School of Law.
Blocker said that the highly personalized nature of current AI-powered chat apps makes it "a little bit unpredictable" to determine exactly what the apps will say to kids. She stressed the importance of testing and evaluating these products for children's developmental safety from the start, "not after harms start happening."
This collective litigation has helped educate the public on the potential pitfalls of poor product design choices, Blocker said. And it could be a catalyzing force for change in the tech industry.
"Certainly there's a hope that this will motivate real systemic change, both from a regulation standpoint and internal company decision-making standpoint," Blocker said.
If you are having suicidal thoughts or are in distress, contact the Suicide & Crisis Lifeline at 988 for support and assistance from a trained counselor.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/snap-social-media-teen-safety-lawsuits.html",
    publishedAt: "2026-11-07T12:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "why-a-wave-of-bomb-threats-is-proving-so-653ca7b3",
    title: "Why a wave of bomb threats is proving so difficult for Europe's aviation authorities to contain",
    titleJa: "Why a wave of bomb threats is proving so difficult for Europe's aviation authorities to contain",
    summaryJa: "The \"weakest point of aviation is targeting it in-flight,\" analysts say — but any change to procedures will be a lengthy process.",
    bodyOriginal: `A spate of bomb threats against passenger flights has forced diversions, emergency landings and military escorts across European airspace this week, stoking fear among passengers and heaping pressure on airlines.
Authorities have described the more than two dozen threats as malicious hoaxes, and no actual attacks have been carried out. But the incidents have highlighted the huge impact that even false claims can have on a tightly scheduled aviation network.
"This is really quite exceptional, I've never seen this before in my whole career," Wilfried Covent, head of security firm Covent Consulting with a specialization in aviation, told CNBC by phone.
"We've had bomb threats in flights and towards airports, but usually maybe a single copycat, one or two max. What we see now is a systematic attack on airlines and airports."
An email sent to European broadcasters on Friday claimed to be from the leader of the group behind the plane hoaxes and also said bombs had been placed in their buildings, prompting evacuations. No bombs were found at the sites.
"What happened this week is just a small part of what awaits Europe in the near future," the message said, according to Reuters.
The news agency said it could not verify the sender's identity, where the emails originated or whether they were linked to the threats against flights.
Covent said the "criminals" — who many security analysts say are likely to be state-backed actors working in coordination to disrupt public life for Europeans, but have not been identified — were well aware that the "weakest point of aviation is targeting it in-flight."
"With a threat on an airport or a general threat to aircraft, you can assess the situation without fully disrupting operations. When the threat is called on a specific flight number that is in the air, even with a hoax, that triggers international regulations which ensure you don't ignore it — it means a quick landing, evacuation and searches by specialist forces," he told CNBC.
"For the context of an assessment, you cannot say that 20 times before it has been a hoax so this time it is a hoax, the safety of passengers and crew is priority number one. The criminals know that."
Coordinated response
Responsibility for dealing with hoax attacks is split, international agencies told CNBC. Assessing security threats and implementing aviation security measures primarily falls to national authorities, working in coordination with airport operators, airlines and law enforcement.
Air traffic control will also be involved in finding aircraft with an appropriate place to land, while the European Union Aviation Safety Agency, or EASA and U.K.'s Civil Aviation Authority more broadly set aviation safety rules and set how airlines prepare their crews to respond to security threats. Within the European Union, the European Commission is involved in aviation security policy and coordination between member states.
The operational decisions also depend on where the threat arises. Joji Waites, director of flight safety, policy and regulation at the British Air Line Pilots Association, said airline assessors grade a threat as red, amber or green, but that an amber verdict would never be given if the plane is airborne.
If assessors judge a threat credible, the crew is informed and the captain takes command of decisions for the aircraft, guided by company procedures. On the ground, that may mean an evacuation, while in the air the priority is to land as soon and as safely as possible.
Read more
As well as the fear and disruption to specific flights, each diversion can then affect the next flight scheduled to use that aircraft, the crew's working hours and passengers with connections.
The network effect can be significant. Philip Baum, a visiting professor of aviation security at Coventry University, told AP that a single diversion could cost an airline as much as $250,000, including replacement crews, missed connections and disruption to the rest of the day's schedule.
"Diversions necessitated by these bomb threats are a disturbance to a system designed for predictability and efficiency, and lead to increased workload for pilots, Air Traffic Controllers and airports," an EASA spokesperson said in emailed comments.
"As these staff have all have been trained to cope with such unexpected developments, the immediate safety threat from individual hoax threats is low. However, the higher number of diversions places an additional strain on the system."
What can change?
National governments will already be looking at their aviation authority regulations and frameworks and there will be discussions at the European and global level, John Edwards, senior consultant at Gates Aviation in London, said by phone.
"Bomb threats to aviation have been going on for decades, what they'll need to be looking at is what's different. Why have there been so many, why have so many been considered sufficiently credible to warrant the kind of action that it's warranted?"
"There's a range of questions they should be able to work through fairly quickly to establish a broad-brush level of credibility. If there is some characteristic that is new, every time there is an event of this kind, it triggers a big collaboration to ensure recurrence is prevented going forward."
"In theory, he said, "the vast majority should be able to assessed and considered non-credible based on routine risk assessment processes and well established procedures."
However, Eric Schouten, a former intelligence liaison officer at the Dutch General Intelligence and Security Service and CEO of security consultancy Dyami, said that changes to existing procedural regulations would take some time and require balancing the views and responsibilities of countries, airports, safety authorities and the European Union, with geopolitics also playing a role.
"There is a high likelihood even more flights are going to be canceled or diverted. It's possible that next to be targeted could be railways and highways," he said.
"But they will figure it out. It's not the first time airlines have had to deal with hoax calls because there are always copycats."
"Whatever measures they come out with to address it, they won't share publicly" for risk of alerting the bad actors, he added.
Wilfried Covent said that while there would not be any quick changes to assessment protocol, "if this is really going on for ever and ever something will need to change or you'd have to stop flying completely."
"Based on what we've seen in the past with other kinds of threats, time goes on and the type of attack may change and move on," he continued, pointing to the wave of cyberattacks that has recently hit supermarket fridges and blood banks.
"As Europeans we need to be prepared."`,
    bodyJa: `A spate of bomb threats against passenger flights has forced diversions, emergency landings and military escorts across European airspace this week, stoking fear among passengers and heaping pressure on airlines.
Authorities have described the more than two dozen threats as malicious hoaxes, and no actual attacks have been carried out. But the incidents have highlighted the huge impact that even false claims can have on a tightly scheduled aviation network.
"This is really quite exceptional, I've never seen this before in my whole career," Wilfried Covent, head of security firm Covent Consulting with a specialization in aviation, told CNBC by phone.
"We've had bomb threats in flights and towards airports, but usually maybe a single copycat, one or two max. What we see now is a systematic attack on airlines and airports."
An email sent to European broadcasters on Friday claimed to be from the leader of the group behind the plane hoaxes and also said bombs had been placed in their buildings, prompting evacuations. No bombs were found at the sites.
"What happened this week is just a small part of what awaits Europe in the near future," the message said, according to Reuters.
The news agency said it could not verify the sender's identity, where the emails originated or whether they were linked to the threats against flights.
Covent said the "criminals" — who many security analysts say are likely to be state-backed actors working in coordination to disrupt public life for Europeans, but have not been identified — were well aware that the "weakest point of aviation is targeting it in-flight."
"With a threat on an airport or a general threat to aircraft, you can assess the situation without fully disrupting operations. When the threat is called on a specific flight number that is in the air, even with a hoax, that triggers international regulations which ensure you don't ignore it — it means a quick landing, evacuation and searches by specialist forces," he told CNBC.
"For the context of an assessment, you cannot say that 20 times before it has been a hoax so this time it is a hoax, the safety of passengers and crew is priority number one. The criminals know that."
Coordinated response
Responsibility for dealing with hoax attacks is split, international agencies told CNBC. Assessing security threats and implementing aviation security measures primarily falls to national authorities, working in coordination with airport operators, airlines and law enforcement.
Air traffic control will also be involved in finding aircraft with an appropriate place to land, while the European Union Aviation Safety Agency, or EASA and U.K.'s Civil Aviation Authority more broadly set aviation safety rules and set how airlines prepare their crews to respond to security threats. Within the European Union, the European Commission is involved in aviation security policy and coordination between member states.
The operational decisions also depend on where the threat arises. Joji Waites, director of flight safety, policy and regulation at the British Air Line Pilots Association, said airline assessors grade a threat as red, amber or green, but that an amber verdict would never be given if the plane is airborne.
If assessors judge a threat credible, the crew is informed and the captain takes command of decisions for the aircraft, guided by company procedures. On the ground, that may mean an evacuation, while in the air the priority is to land as soon and as safely as possible.
Read more
As well as the fear and disruption to specific flights, each diversion can then affect the next flight scheduled to use that aircraft, the crew's working hours and passengers with connections.
The network effect can be significant. Philip Baum, a visiting professor of aviation security at Coventry University, told AP that a single diversion could cost an airline as much as $250,000, including replacement crews, missed connections and disruption to the rest of the day's schedule.
"Diversions necessitated by these bomb threats are a disturbance to a system designed for predictability and efficiency, and lead to increased workload for pilots, Air Traffic Controllers and airports," an EASA spokesperson said in emailed comments.
"As these staff have all have been trained to cope with such unexpected developments, the immediate safety threat from individual hoax threats is low. However, the higher number of diversions places an additional strain on the system."
What can change?
National governments will already be looking at their aviation authority regulations and frameworks and there will be discussions at the European and global level, John Edwards, senior consultant at Gates Aviation in London, said by phone.
"Bomb threats to aviation have been going on for decades, what they'll need to be looking at is what's different. Why have there been so many, why have so many been considered sufficiently credible to warrant the kind of action that it's warranted?"
"There's a range of questions they should be able to work through fairly quickly to establish a broad-brush level of credibility. If there is some characteristic that is new, every time there is an event of this kind, it triggers a big collaboration to ensure recurrence is prevented going forward."
"In theory, he said, "the vast majority should be able to assessed and considered non-credible based on routine risk assessment processes and well established procedures."
However, Eric Schouten, a former intelligence liaison officer at the Dutch General Intelligence and Security Service and CEO of security consultancy Dyami, said that changes to existing procedural regulations would take some time and require balancing the views and responsibilities of countries, airports, safety authorities and the European Union, with geopolitics also playing a role.
"There is a high likelihood even more flights are going to be canceled or diverted. It's possible that next to be targeted could be railways and highways," he said.
"But they will figure it out. It's not the first time airlines have had to deal with hoax calls because there are always copycats."
"Whatever measures they come out with to address it, they won't share publicly" for risk of alerting the bad actors, he added.
Wilfried Covent said that while there would not be any quick changes to assessment protocol, "if this is really going on for ever and ever something will need to change or you'd have to stop flying completely."
"Based on what we've seen in the past with other kinds of threats, time goes on and the type of attack may change and move on," he continued, pointing to the wave of cyberattacks that has recently hit supermarket fridges and blood banks.
"As Europeans we need to be prepared."`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/hoax-bomb-threats-flights-europe.html",
    publishedAt: "2026-11-07T09:01:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "trump-says-u-s-carried-out-minor-strikes-2b9300ec",
    title: "Trump says U.S. carried out ‘minor strikes’ on Iran as missiles hit Qeshm Island",
    titleJa: "Trump says U.S. carried out ‘minor strikes’ on Iran as missiles hit Qeshm Island",
    summaryJa: "Trump said the U.S. carried out ‘minor strikes’ on Iran after Iranian media reported two missiles hit Qeshm Island near the Strait of Hormuz.",
    bodyOriginal: `President Donald Trump told reporters Friday that the U.S. carried out "minor strikes" on Iran, amid reports that two missiles struck Qeshm Island near the Strait of Hormuz.
The missiles struck the island on Friday, Iranian news agency Tasnim reported, according to Reuters. Tasnim said there was no official information on damage, Reuters added.
The island lies off Iran's southern coast, near the Strait of Hormuz, the vital artery for oil and gas that has become a flashpoint in the war.
Speaking to reporters Friday evening after landing in West Palm Beach, Florida, Trump didn't comment specifically on Qeshm Island, saying: "I don't want to talk about it."
But he added: "We do minor strikes, but they knock out. They built a little bit of an anti-aircraft device, and we knocked it out in about 15 minutes, maybe five." He did not explicitly confirm that he was referring to the reported strikes on Qeshm.
The strikes are the first since Tuesday's midterm elections, after analysts and regional officials had debated whether the vote would lead Trump toward further escalation or renewed diplomacy.
The U.S. struck the same island Monday, in what a U.S. official told MS Now was a "defensive measure."
'They want to make a deal very badly'
Trump also told reporters Friday that Iran wants "to make a deal very badly. They have 300% inflation. Their navy's gone. Their airport, everything's gone, and they want to make a deal."
The International Monetary Fund forecast that Iran's consumer prices would rise by an average of 78.6% in 2026, in a report published Oct. 13.
When asked if he wanted to make a deal "really soon," Trump said: "Well, we have nobody getting hurt, nobody getting killed.
"You know, this is a war that we may have been there for seven months, but we probably fought for three or four weeks, really fought. And again, you look at World War One; that's a war. World War Two; that's a war."
Iran has said it wants more than "paper commitments" from the U.S. before entering a new phase of diplomatic talks.
"We must see practical measures by the Americans," Ali Bagheri Kani, deputy secretary of Iran's Supreme National Security Council, told state broadcaster IRIB on Friday, according to Press TV.`,
    bodyJa: `President Donald Trump told reporters Friday that the U.S. carried out "minor strikes" on Iran, amid reports that two missiles struck Qeshm Island near the Strait of Hormuz.
The missiles struck the island on Friday, Iranian news agency Tasnim reported, according to Reuters. Tasnim said there was no official information on damage, Reuters added.
The island lies off Iran's southern coast, near the Strait of Hormuz, the vital artery for oil and gas that has become a flashpoint in the war.
Speaking to reporters Friday evening after landing in West Palm Beach, Florida, Trump didn't comment specifically on Qeshm Island, saying: "I don't want to talk about it."
But he added: "We do minor strikes, but they knock out. They built a little bit of an anti-aircraft device, and we knocked it out in about 15 minutes, maybe five." He did not explicitly confirm that he was referring to the reported strikes on Qeshm.
The strikes are the first since Tuesday's midterm elections, after analysts and regional officials had debated whether the vote would lead Trump toward further escalation or renewed diplomacy.
The U.S. struck the same island Monday, in what a U.S. official told MS Now was a "defensive measure."
'They want to make a deal very badly'
Trump also told reporters Friday that Iran wants "to make a deal very badly. They have 300% inflation. Their navy's gone. Their airport, everything's gone, and they want to make a deal."
The International Monetary Fund forecast that Iran's consumer prices would rise by an average of 78.6% in 2026, in a report published Oct. 13.
When asked if he wanted to make a deal "really soon," Trump said: "Well, we have nobody getting hurt, nobody getting killed.
"You know, this is a war that we may have been there for seven months, but we probably fought for three or four weeks, really fought. And again, you look at World War One; that's a war. World War Two; that's a war."
Iran has said it wants more than "paper commitments" from the U.S. before entering a new phase of diplomatic talks.
"We must see practical measures by the Americans," Ali Bagheri Kani, deputy secretary of Iran's Supreme National Security Council, told state broadcaster IRIB on Friday, according to Press TV.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/07/trump-us-minor-strikes-iran-qeshm-island.html",
    publishedAt: "2026-11-07T07:37:36+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "inside-the-card-grading-empire-shaping-t-2d3ead55",
    title: "Inside the card-grading empire shaping the price of Pokémon cards",
    titleJa: "Inside the card-grading empire shaping the price of Pokémon cards",
    summaryJa: "PSA’s resale premium, backlog and grading-market dominance shape what collectors pay — and how much their Pokémon cards may fetch.",
    bodyOriginal: `Collectors may have more grading options than ever, but many still turn to Professional Sports Authenticator, or PSA — even as the industry leader works through a backlog of millions of cards.
Demand for grading — an act of verifying a card’s authenticity and condition — has grown as collectors increasingly treat trading and vintage sports cards as alternative investments.
PSA reported a backlog of 7.2 million items on Oct. 20, down from 12.4 million in July. The company suspended cheaper submission services in June to ease the backlog before reopening its Value service on Oct. 29.
Even so, some sellers would rather wait for a PSA label than send their cards to a competitor, dealers told CNBC.
“It really all comes down to secondary market values,” said Geoff Wilson, founder and CEO of CardsHQ, which operates one of the world's largest sports card shops.
PSA-graded cards typically command higher prices than equivalent grades from competitors, Wilson said, giving collectors and investors an incentive to choose PSA in hopes of a stronger return.
The financial difference can be substantial.
A 1999 Base Set Charizard graded PSA 9 sold for about $3,440 on eBay on Sept. 29, compared with roughly $1,890 for a CGC 9 copy sold the same day, according to CNBC's review of PriceCharting records.
That pricing gap reinforces PSA's lead and gives its decisions about fees and submission services considerable influence over the resale market.
PSA had not responded to CNBC’s detailed questions at the time of publication. In published updates, the company has attributed service restrictions and pricing changes to demand exceeding capacity, and outlined investments intended to reduce the backlog.
The 'gold standard'
Grading companies verify a card’s authenticity, assess its condition and seal it in a protective plastic case, known as a slab. PSA uses a 10-point scale, with its highest grade, Gem Mint 10, reserved for cards it describes as "virtually perfect."
Like a credit rating in bond markets, a card grade gives buyers and sellers a common benchmark for assessing condition.
That can reduce friction in transactions by giving both sides a reference point based on past sales of the same card at the same grade.
That capability has helped open the trading-card market to more global participation and made cross-border transactions easier, according to an unnamed spokesperson for Singapore-based submission dealer Oxley Grading.
The spokesperson attributed PSA’s position as the industry’s “gold standard” to its early start, brand recognition and extensive history of completed sales.
“They've just built up such a strong branding and a lot of sales records,” the spokesperson said.
They estimated that roughly 90% of the graded cards offered to Oxley Grading for purchase carry PSA’s label.
The dominance creates a self-reinforcing cycle: buyers seek out PSA-graded cards, giving sellers an incentive to use the company. The abundance of PSA slabs in shops and online marketplaces further reinforces the brand's visibility and demand.
For a seller choosing a grader, that established resale demand can outweigh a competitor’s lower fees or faster turnaround times.
The collectible empire
PSA sits within a larger collectibles business.
Its parent company, Collectors, also owns rival grading brands Beckett and SGC, pricing-data platform Card Ladder, the PSA Vault and financial services. The vault links storage with selling through external marketplaces, including eBay.
Together, those businesses span much of a card’s commercial journey — grading, pricing, storage, sales and even financing against collectibles.
Collectors' three card-grading brands accounted for roughly 71% of August grading volume among the major firms tracked by industry analyst GemRate. PSA alone represented about 65%, while the next-largest player, CGC, represented about 28%.
Collectors' consolidation has also drawn legal scrutiny.
A proposed class action filed in April challenges Collectors’ acquisitions of SGC and Beckett, alleging that the deals unlawfully reduced competition in card grading. The allegations have not been proven in court.
Collectors has defended the Beckett acquisition as a way to strengthen a trusted brand while preserving collectors’ ability to choose the grading service that best suits their items.
“We believe that strong, well-supported brands help grow access to the hobby,” Collectors CEO Nat Turner said in the company's 2025 acquisition announcement.
Cost of market dependence
For sellers who prioritize PSA's resale premium, changes to its fees and submission services can alter the economics of grading a card.
PSA raised fees across several existing tiers in February, including Value Bulk from $21.99 to $24.99 and Value from $27.99 to $32.99. It also lengthened estimated turnaround times for some services, saying the changes would help balance submission demand with grading capacity.
The suspension of cheaper tiers in June further narrowed affordable options, while higher costs have made customers more selective about which cards they submit, according to Oxley Grading's spokesperson.
Meanwhile, Wilson said the restrictions have particularly affected collectors and dealers who buy cards ungraded, send them to PSA and then resell them at a higher price.
For cards worth a few hundred dollars or less, that strategy has become harder to justify, he said.
“You're seeing more raw cards bought and sold at card shows,” Wilson added, using the industry term for ungraded cards.
PSA has acknowledged that customers are waiting too long.
In an Oct. 28 update, the company said submissions in April and May were 2.5 times the volume received in the same months a year earlier. It also announced shorter turnaround estimates for Standard and Priority services, while saying new Value submissions would be processed behind existing orders.
“We have added an incredible amount of capacity, but we still have work to do,” Ryan Hoge, president of PSA and grading at Collectors, said in the statement.
For Wilson, those investments in capacity are part of PSA's appeal.
“They've made the collector experience better by doing that,” he said.
Limited bargaining power
The leading graders' dominance may leave collectors with little room to push back.
Collectors' preference for PSA's resale value can make switching graders less attractive, the Oxley Grading's spokesperson said, adding, "PSA's lead comes from resale demand and liquidity, and other labels are still building that."
Overseas customers can face fewer practical grading options as many major graders are based in the U.S., Amber Chuah, operations manager of trading-card platform TCG Marketplace, told CNBC.
The complaints she hears most often involve long waits and disappointment when cards receive lower grades than customers expected.
Challenging a grade can require another round of shipping and waiting, discouraging some collectors from disputing the result, she added.
"If you're really keen on selling, that's a lot of time."
PSA did not respond to CNBC's questions about the sources' claims.
PSA’s terms allow customers to request a paid review of disputed grades, with customers responsible for grading and applicable shipping fees. The company also offers defect notes for eligible submissions to provide more detail on how a grade was determined.
CardsHQ's Wilson said some variation between assessments is an inherent challenge in a process that involves human judgment.
Challenging PSA
Wilson pushes back against the suggestion that PSA’s position leaves customers without alternatives.
“First of all, there are alternatives,” he said, pointing to CGC, Beckett and smaller grading firms such as TAG.
CGC’s grading volume in August was more than double its level a year earlier, according to GemRate, showing that rival graders are attracting business. Beckett also recorded strong growth, although it is owned by Collectors.
Oxley Grading's spokesperson said there may be room for lower-cost services aimed at collectors who care more about a card’s artwork, sentimental value or preservation than maximizing its resale value.
Competing for sellers focused on the strongest financial return remains more difficult.
Building comparable resale acceptance would require substantial investment, with no guarantee that buyers would ultimately value a newcomer's label as highly as PSA's, the spokesperson said.
For Wilson, broader acceptance in the resale market is key to shifting that balance.
“If the market as a whole starts to respect the value of the other grading companies' cards more, then collectors will increasingly submit to those companies,” he said.`,
    bodyJa: `Collectors may have more grading options than ever, but many still turn to Professional Sports Authenticator, or PSA — even as the industry leader works through a backlog of millions of cards.
Demand for grading — an act of verifying a card’s authenticity and condition — has grown as collectors increasingly treat trading and vintage sports cards as alternative investments.
PSA reported a backlog of 7.2 million items on Oct. 20, down from 12.4 million in July. The company suspended cheaper submission services in June to ease the backlog before reopening its Value service on Oct. 29.
Even so, some sellers would rather wait for a PSA label than send their cards to a competitor, dealers told CNBC.
“It really all comes down to secondary market values,” said Geoff Wilson, founder and CEO of CardsHQ, which operates one of the world's largest sports card shops.
PSA-graded cards typically command higher prices than equivalent grades from competitors, Wilson said, giving collectors and investors an incentive to choose PSA in hopes of a stronger return.
The financial difference can be substantial.
A 1999 Base Set Charizard graded PSA 9 sold for about $3,440 on eBay on Sept. 29, compared with roughly $1,890 for a CGC 9 copy sold the same day, according to CNBC's review of PriceCharting records.
That pricing gap reinforces PSA's lead and gives its decisions about fees and submission services considerable influence over the resale market.
PSA had not responded to CNBC’s detailed questions at the time of publication. In published updates, the company has attributed service restrictions and pricing changes to demand exceeding capacity, and outlined investments intended to reduce the backlog.
The 'gold standard'
Grading companies verify a card’s authenticity, assess its condition and seal it in a protective plastic case, known as a slab. PSA uses a 10-point scale, with its highest grade, Gem Mint 10, reserved for cards it describes as "virtually perfect."
Like a credit rating in bond markets, a card grade gives buyers and sellers a common benchmark for assessing condition.
That can reduce friction in transactions by giving both sides a reference point based on past sales of the same card at the same grade.
That capability has helped open the trading-card market to more global participation and made cross-border transactions easier, according to an unnamed spokesperson for Singapore-based submission dealer Oxley Grading.
The spokesperson attributed PSA’s position as the industry’s “gold standard” to its early start, brand recognition and extensive history of completed sales.
“They've just built up such a strong branding and a lot of sales records,” the spokesperson said.
They estimated that roughly 90% of the graded cards offered to Oxley Grading for purchase carry PSA’s label.
The dominance creates a self-reinforcing cycle: buyers seek out PSA-graded cards, giving sellers an incentive to use the company. The abundance of PSA slabs in shops and online marketplaces further reinforces the brand's visibility and demand.
For a seller choosing a grader, that established resale demand can outweigh a competitor’s lower fees or faster turnaround times.
The collectible empire
PSA sits within a larger collectibles business.
Its parent company, Collectors, also owns rival grading brands Beckett and SGC, pricing-data platform Card Ladder, the PSA Vault and financial services. The vault links storage with selling through external marketplaces, including eBay.
Together, those businesses span much of a card’s commercial journey — grading, pricing, storage, sales and even financing against collectibles.
Collectors' three card-grading brands accounted for roughly 71% of August grading volume among the major firms tracked by industry analyst GemRate. PSA alone represented about 65%, while the next-largest player, CGC, represented about 28%.
Collectors' consolidation has also drawn legal scrutiny.
A proposed class action filed in April challenges Collectors’ acquisitions of SGC and Beckett, alleging that the deals unlawfully reduced competition in card grading. The allegations have not been proven in court.
Collectors has defended the Beckett acquisition as a way to strengthen a trusted brand while preserving collectors’ ability to choose the grading service that best suits their items.
“We believe that strong, well-supported brands help grow access to the hobby,” Collectors CEO Nat Turner said in the company's 2025 acquisition announcement.
Cost of market dependence
For sellers who prioritize PSA's resale premium, changes to its fees and submission services can alter the economics of grading a card.
PSA raised fees across several existing tiers in February, including Value Bulk from $21.99 to $24.99 and Value from $27.99 to $32.99. It also lengthened estimated turnaround times for some services, saying the changes would help balance submission demand with grading capacity.
The suspension of cheaper tiers in June further narrowed affordable options, while higher costs have made customers more selective about which cards they submit, according to Oxley Grading's spokesperson.
Meanwhile, Wilson said the restrictions have particularly affected collectors and dealers who buy cards ungraded, send them to PSA and then resell them at a higher price.
For cards worth a few hundred dollars or less, that strategy has become harder to justify, he said.
“You're seeing more raw cards bought and sold at card shows,” Wilson added, using the industry term for ungraded cards.
PSA has acknowledged that customers are waiting too long.
In an Oct. 28 update, the company said submissions in April and May were 2.5 times the volume received in the same months a year earlier. It also announced shorter turnaround estimates for Standard and Priority services, while saying new Value submissions would be processed behind existing orders.
“We have added an incredible amount of capacity, but we still have work to do,” Ryan Hoge, president of PSA and grading at Collectors, said in the statement.
For Wilson, those investments in capacity are part of PSA's appeal.
“They've made the collector experience better by doing that,” he said.
Limited bargaining power
The leading graders' dominance may leave collectors with little room to push back.
Collectors' preference for PSA's resale value can make switching graders less attractive, the Oxley Grading's spokesperson said, adding, "PSA's lead comes from resale demand and liquidity, and other labels are still building that."
Overseas customers can face fewer practical grading options as many major graders are based in the U.S., Amber Chuah, operations manager of trading-card platform TCG Marketplace, told CNBC.
The complaints she hears most often involve long waits and disappointment when cards receive lower grades than customers expected.
Challenging a grade can require another round of shipping and waiting, discouraging some collectors from disputing the result, she added.
"If you're really keen on selling, that's a lot of time."
PSA did not respond to CNBC's questions about the sources' claims.
PSA’s terms allow customers to request a paid review of disputed grades, with customers responsible for grading and applicable shipping fees. The company also offers defect notes for eligible submissions to provide more detail on how a grade was determined.
CardsHQ's Wilson said some variation between assessments is an inherent challenge in a process that involves human judgment.
Challenging PSA
Wilson pushes back against the suggestion that PSA’s position leaves customers without alternatives.
“First of all, there are alternatives,” he said, pointing to CGC, Beckett and smaller grading firms such as TAG.
CGC’s grading volume in August was more than double its level a year earlier, according to GemRate, showing that rival graders are attracting business. Beckett also recorded strong growth, although it is owned by Collectors.
Oxley Grading's spokesperson said there may be room for lower-cost services aimed at collectors who care more about a card’s artwork, sentimental value or preservation than maximizing its resale value.
Competing for sellers focused on the strongest financial return remains more difficult.
Building comparable resale acceptance would require substantial investment, with no guarantee that buyers would ultimately value a newcomer's label as highly as PSA's, the spokesperson said.
For Wilson, broader acceptance in the resale market is key to shifting that balance.
“If the market as a whole starts to respect the value of the other grading companies' cards more, then collectors will increasingly submit to those companies,” he said.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/11/06/card-pokemon-grading-psa-collectors-price.html",
    publishedAt: "2026-11-07T02:00:01+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 10,
  },
  {
    id: "my-mortgage-is-going-up-200-a-month-how-4016238b",
    title: "'My mortgage is going up £200 a month': How rising interest rates are hitting people's pockets",
    titleJa: "'My mortgage is going up £200 a month': How rising interest rates are hitting people's pockets",
    summaryJa: "With UK interest rates set to rise, mortgages, credit cards and loans could get more expensive for millions.",
    bodyOriginal: `'My mortgage is going up £200 a month': How rising interest rates are hitting people's pockets
- Published
On Thursday, the Bank of England increased interest rates for the first time in over three years as it tries to get a grip on rising inflation linked to the Iran war.
Experts say there could be more hikes over the next 18 months, as the conflict continues to push up food, fuel and energy prices across the UK and worldwide.
Higher interest rates affect borrowing costs, however, which means mortgages, credit cards and personal loans could get more expensive for millions, even as savings rates improve.
For some, it could mean extra financial pressure at a time when they are already struggling with the cost of living. The BBC spoke to three people about how they could be affected.
'Our tracker mortgage will go up'
Peter Gill, 48, is one of the around 1.3 million Britons on a variable rate mortgage.
These loans track the Bank of England base rate, with a margin on top determined by the lender, so any rise in interest rates can push up repayments.
Peter, who runs a small tiling business in Halifax, says his monthly repayments will go up by roughly £45 following Thursday's quarter-percentage point increase and he's worried they could climb higher.
But he still thinks it'd be more expensive to move onto a fixed-rate deal - which is when you pay a set amount of monthly interest for a period - and is prepared to stay put for now.
His higher mortgage costs come as the "cost of everything is going up", he says.
The father of two, who has a combined household income of £45,000 with his wife Faye, is having to pay his staff more because of increases in the national minimum wage. Raw material costs have also risen due to the war in Iran.
At home, the family's food, gas and electricity bills have gone up and he says he's working "about six and a half days a week" to shield them from the worst of it.
"From my point of view, inflation goes up which costs you, then interest rates go up and you have even less money."
'My mortgage is going up by £200 a month'
Most UK mortgage holders are on fixed-rate deals, but that doesn't necessarily protect them when the Bank of England puts up rates.
David Hollingworth, from brokers L&C Mortgages, says many people will be shocked at how much higher fixed-rate deals are than they were five years ago following recent increases.
"Fixed rates have already risen due to market anticipation that interest rates would need to rise to combat higher inflation," he says.
Dawn Fazackerley-King is a Pilates instructor who lives near Ipswich and has previously spoken to the BBC about her struggles with the cost of living.
She was on a five-year fixed deal at 1.4%, which she took out in January 2022. But the mother of two is about to refix for two years and the best deal she can find is a 5.69% loan. That will push her costs up by about £200 a month.
"I don't know where that money is going to come from, it's something we are going to have to figure out as a family. It's stressful."
She and her husband, who have a joint income of about £70,000, have already gone through their direct debits and there's "no more obvious fat to trim".
There is also no scope for them to take on additional work, as they both work full time.
"We're still living in the same property, our household costs are remaining the same," Dawn says. "It's an additional cost of several hundred pounds but we're not getting anything extra for that."
'My credit card repayments could rise'
When the Bank of England increases its base rate, credit card borrowing costs also tend to increase, although the impact is not always immediate.
It may affect people with outstanding debts, as providers can increase the interest rates they charge with 30 days' notice.
Ben Thomas, 41, from Shropshire, ditched his career as a chartered accountant during the Covid pandemic after a mental health crisis and retrained as a paramedic.
But the drop in income left him reliant on credit cards and personal loans for everyday living expenses and he is now £52,000 in debt.
Faisal Islam: How high will interest rates go?
- Published2 days ago
Three ways the interest rate rise could affect you
- Published3 days ago
Ben says he's reached an agreement to pause the interest on most of it, but he is still incurring charges on around £2,000 of credit card debt and is worried about his repayments going up.
"With all that's going on, rising interest rates is another cost to deal with," he tells the BBC.
As well as overall debt repayments of around £300 a month, he and his wife pay £760 on their mortgage. They have also struggled with higher food and energy bills.
Simon Trevethick is head of communications at StepChange, which has been helping Ben manage his debt. He says the debt charity has seen a 20% increase in people asking for support this year and warned of tougher times ahead.
"If higher borrowing costs feed through into household budgets over the coming months, we could see further pressure on people seeking support."
Get in touch
Do you have a mortgage, a credit card, a car finance agreement? How are interest rates affecting you?`,
    bodyJa: `'My mortgage is going up £200 a month': How rising interest rates are hitting people's pockets
- Published
On Thursday, the Bank of England increased interest rates for the first time in over three years as it tries to get a grip on rising inflation linked to the Iran war.
Experts say there could be more hikes over the next 18 months, as the conflict continues to push up food, fuel and energy prices across the UK and worldwide.
Higher interest rates affect borrowing costs, however, which means mortgages, credit cards and personal loans could get more expensive for millions, even as savings rates improve.
For some, it could mean extra financial pressure at a time when they are already struggling with the cost of living. The BBC spoke to three people about how they could be affected.
'Our tracker mortgage will go up'
Peter Gill, 48, is one of the around 1.3 million Britons on a variable rate mortgage.
These loans track the Bank of England base rate, with a margin on top determined by the lender, so any rise in interest rates can push up repayments.
Peter, who runs a small tiling business in Halifax, says his monthly repayments will go up by roughly £45 following Thursday's quarter-percentage point increase and he's worried they could climb higher.
But he still thinks it'd be more expensive to move onto a fixed-rate deal - which is when you pay a set amount of monthly interest for a period - and is prepared to stay put for now.
His higher mortgage costs come as the "cost of everything is going up", he says.
The father of two, who has a combined household income of £45,000 with his wife Faye, is having to pay his staff more because of increases in the national minimum wage. Raw material costs have also risen due to the war in Iran.
At home, the family's food, gas and electricity bills have gone up and he says he's working "about six and a half days a week" to shield them from the worst of it.
"From my point of view, inflation goes up which costs you, then interest rates go up and you have even less money."
'My mortgage is going up by £200 a month'
Most UK mortgage holders are on fixed-rate deals, but that doesn't necessarily protect them when the Bank of England puts up rates.
David Hollingworth, from brokers L&C Mortgages, says many people will be shocked at how much higher fixed-rate deals are than they were five years ago following recent increases.
"Fixed rates have already risen due to market anticipation that interest rates would need to rise to combat higher inflation," he says.
Dawn Fazackerley-King is a Pilates instructor who lives near Ipswich and has previously spoken to the BBC about her struggles with the cost of living.
She was on a five-year fixed deal at 1.4%, which she took out in January 2022. But the mother of two is about to refix for two years and the best deal she can find is a 5.69% loan. That will push her costs up by about £200 a month.
"I don't know where that money is going to come from, it's something we are going to have to figure out as a family. It's stressful."
She and her husband, who have a joint income of about £70,000, have already gone through their direct debits and there's "no more obvious fat to trim".
There is also no scope for them to take on additional work, as they both work full time.
"We're still living in the same property, our household costs are remaining the same," Dawn says. "It's an additional cost of several hundred pounds but we're not getting anything extra for that."
'My credit card repayments could rise'
When the Bank of England increases its base rate, credit card borrowing costs also tend to increase, although the impact is not always immediate.
It may affect people with outstanding debts, as providers can increase the interest rates they charge with 30 days' notice.
Ben Thomas, 41, from Shropshire, ditched his career as a chartered accountant during the Covid pandemic after a mental health crisis and retrained as a paramedic.
But the drop in income left him reliant on credit cards and personal loans for everyday living expenses and he is now £52,000 in debt.
Faisal Islam: How high will interest rates go?
- Published2 days ago
Three ways the interest rate rise could affect you
- Published3 days ago
Ben says he's reached an agreement to pause the interest on most of it, but he is still incurring charges on around £2,000 of credit card debt and is worried about his repayments going up.
"With all that's going on, rising interest rates is another cost to deal with," he tells the BBC.
As well as overall debt repayments of around £300 a month, he and his wife pay £760 on their mortgage. They have also struggled with higher food and energy bills.
Simon Trevethick is head of communications at StepChange, which has been helping Ben manage his debt. He says the debt charity has seen a 20% increase in people asking for support this year and warned of tougher times ahead.
"If higher borrowing costs feed through into household budgets over the coming months, we could see further pressure on people seeking support."
Get in touch
Do you have a mortgage, a credit card, a car finance agreement? How are interest rates affecting you?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c617kjqjvk12o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-11-07T01:41:36+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1e6b/live/b1102500-d9fb-11f1-b441-2b33b063138f.png",
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
