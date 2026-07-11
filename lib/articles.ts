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
    id: "us-wants-iran-to-pledge-to-stop-shooting-ad66cae8",
    title: "US wants Iran to pledge to stop shooting at ships in Strait of Hormuz",
    titleJa: "米国はイランに対し、ホルムズ海峡での船舶への射撃をやめるという誓約を求めている",
    summaryJa: "米国はイランに対し、ホルムズ海峡での船舶への射撃をやめるという誓約を求めている- 公開されました",
    bodyOriginal: `US wants Iran to pledge to stop shooting at ships in Strait of Hormuz
- Published
The US wants Iran to publicly state that the Strait of Hormuz is open and to pledge to stop firing on commercial ships as part of negotiations due to be held on Saturday.
US media cited unnamed officials as saying Tehran had privately acknowledged to President Donald Trump's advisers that the shooting at ships was a mistake, though the Iranians reportedly pinned the blame on a rogue internal group.
Trump has said both sides have agreed to continue talks despite this week's fighting over the Strait of Hormuz, which the White House saw as a violation of the ceasefire.
In June the US and Iran signed a ceasefire agreement where Iran would, in part, give safe passage to commercial ships.
Tehran said that an "errant" sect of hardliners was trying to undermine negotiations by firing on the commercial ships, senior US officials told CBS News, the BBC's US partner.
One official told the TV network: "They [the Iranians] came back to the table and said, 'We screwed up. We made a mistake. Let's keep talking.'"
In a briefing for reporters on Friday, the US officials said a message to Tehran's leadership had been conveyed through regional mediators demanding Iran release a statement declaring the strait open and that it will stop shooting at commercial ships, according to multiple media reports.
"They're either going to give us that statement or we're not having a good outcome for them," said one official, quoted by Reuters news agency.
The White House also wants Iran to publicly acknowledge that firing on the shipping was a mistake, CBS reports.
Vice-President JD Vance, Secretary of State Marco Rubio and two people who have been heavily involved in Middle East talks - special envoy Steve Witkoff and Trump's son-in-law Jared Kushner - are expected to lead negotiations, which were expected to take place in Oman on Saturday.
Meanwhile, a delegation from Qatar travelled to Iran on Friday for talks aimed at defusing tensions and easing navigation through the Strait of Hormuz.
Trump wrote in a post on Truth Social earlier on Friday: "The Islamic Republic of Iran has asked us to continue 'talks.'
"We have agreed to do so, but the United States has stated to them, in no uncertain terms, that the Cease Fire is OVER!"
No fresh attacks were reported on Friday after fighting broke out in the Gulf region earlier this week, marking the worst exchange of fire between the US and Iran since the two nations signed an interim deal in June.
Three ships were struck while using a US-recommended route through Omani waters. Iran has repeatedly said the only "safe" passage is a separate route through its waters.
Overall progress came last month when the US and Iran agreed on a 14-point memorandum of understanding, which was aimed at extending a ceasefire and ending conflict "on all fronts".
As part of the agreement Iran and Oman must hold talks "to define the future administration and maritime services" in the strait with other Gulf states.
During the conflict, Iran sought to assert its sovereignty over the strait, including by establishing the "Persian Gulf Strait Authority", which it said would manage "safe passage permits".
Iran's Fars news agency has reported that under the new deal with the US the strait would ultimately be managed by Iran in co-ordination with Oman, including possible "service fees" for ships to transit the waterway.`,
    bodyJa: `米国はイランに対し、ホルムズ海峡での船舶への射撃をやめるという誓約を求めている
- 公開されました
米国はイランに対し、ホルムズ海峡は開いていると公に表明し、土曜日に開催予定の交渉の一環として商船への砲撃を停止することを約束することを求めている。
米メディアは匿名の当局者の話として、イラン政府がドナルド・トランプ大統領の顧問に対し、船舶への銃撃は間違いだったと非公式に認めたと伝えたが、伝えられるところによると、イラン側は責任を国内のならず者集団に負わせていると伝えられている。
トランプ大統領は、ホワイトハウスが停戦違反とみなした今週のホルムズ海峡での戦闘にもかかわらず、双方が協議を継続することで合意したと述べた。
6月に米国とイランは、イランが商船の安全な航行を部分的に認める停戦協定に署名した。
イラン政府は、強硬派の「誤った」一派が商船に発砲することで交渉を弱体化させようとしていると述べたと米国高官がBBCの米国パートナーであるCBSニュースに語った。
ある当局者はテレビ局に対し、「彼ら（イラン人）はテーブルに戻ってきて、『我々は失敗した。我々は間違いを犯した。話を続けよう』と言った」と語った。
複数のメディア報道によると、米当局者らは金曜の記者向け会見で、イランに対し海峡開放を宣言する声明の発表と商船への射撃を中止するよう求めるメッセージが地域の仲介者を通じてテヘラン指導部に伝えられたと述べた。
ロイター通信が伝えたところによると、ある当局者は「彼らが我々にそのような声明を出すか、そうでなければ我々が彼らにとって良い結果をもたらさないかのどちらかだ」と語った。
CBSの報道によると、ホワイトハウスはイランに対し、船舶への発砲は間違いだったと公的に認めることも求めているという。
Ｊ・Ｄ・バンス副大統領、マルコ・ルビオ国務長官、そして中東交渉に深く関与してきた２人、スティーブ・ウィトコフ特使とトランプ大統領の義理の息子ジャレッド・クシュナー氏が交渉を主導するとみられ、土曜日にオマーンで行われる予定だった。
一方、カタールの代表団は金曜日、緊張の緩和とホルムズ海峡の航行の緩和を目的とした協議のためイランを訪れた。
トランプ大統領は金曜日、トゥルース・ソーシャルへの投稿で「イラン・イスラム共和国は我々に『対話』を続けるよう求めてきた」と書いた。
「我々はそうすることに同意したが、米国は不確実な言葉で彼らに対し、停戦は終わったと述べた！」
今週初めに湾岸地域で戦闘が勃発したが、金曜には新たな攻撃は報告されておらず、米国とイランの間での銃撃戦は６月に両国が暫定合意に署名して以来最悪となった。
オマーン海域を通過する米国推奨の航路を利用中に船舶３隻が衝突した。イランは、唯一の「安全な」航路は自国の海域を通る別のルートであると繰り返し述べてきた。
全体的な進展は先月、米国とイランが停戦延長と「あらゆる面で」紛争を終わらせることを目的とした14項目の覚書に合意したことで実現した。
合意の一環として、イランとオマーンは他の湾岸諸国との海峡で「将来の行政と海洋サービスを定義するため」の協議を開催する必要がある。
紛争中、イランは「安全な通航許可」を管理する「ペルシャ湾海峡管理局」を設立するなど、同海峡の主権を主張しようとした。
イランのファルス通信は、米国との新たな合意の下で、この海峡は最終的にはイランがオマーンと連携して管理することになり、これには水路を通過する船舶に「サービス料」がかかる可能性も含まれると報じた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crelyq79x71o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-11T01:24:49+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/83f6/live/e1bcc750-7a4a-11f1-8540-110da73337d9.jpg",
    readTime: 4,
  },
  {
    id: "apple-sues-openai-alleging-trade-secret-25a11045",
    title: "Apple sues OpenAI alleging trade secret theft, says scheme was 'at every level'",
    titleJa: "Apple、営業秘密窃盗の疑いでOpenAIを提訴、計画は「あらゆるレベルで」行われていたと語る",
    summaryJa: "Appleは金曜日、人工知能研究所が独自の消費者向けハードウェアを開発するためにiPhoneメーカーの知的財産を盗んだとして、OpenAIを営業秘密窃盗の疑いで北カリフォルニアの連邦裁判所に訴えた。「しかし、これだけは明らかだ。技術スタッフのメンバーから最高ハードウェア責任者に至るまで、あらゆるレベルで、そしてビジネスパートナーと連携して、OpenAIはAppleの企業秘密や機密情報を盗んでいる」と同社は訴訟書類で述べた。",
    bodyOriginal: `Apple on Friday sued OpenAI in federal court in Northern California, alleging trade secret theft, saying that the artificial intelligence lab took the iPhone maker's intellectual property in order to develop its own consumer hardware.
"This much is clear, however: at every level, from members of its Technical Staff to its Chief Hardware Officer, and in coordination with business partners, OpenAI has been stealing Apple's trade secrets and confidential information," the company said in a legal filing.
It's a shocking reversal for the two companies, which entered into a high-profile partnership in 2024, when ChatGPT was integrated into the iPhone's operating system. OpenAI CEO Sam Altman visited Apple's headquarters for the announcement.
But relations between the two companies have chilled since OpenAI announced plans to enter the hardware industry last year, when it bought former Apple designer Jony Ive's startup, called IO Products, for $6.4 billion.
Apple's updated version of its Siri assistant, which is coming out this fall, is based on Google's Gemini AI models instead of OpenAI's technology.
Most of Apple's allegations involve former employees who have interviewed with or joined OpenAI.
Apple alleged that OpenAI's hardware chief, Tang Tan, who is a former Apple vice president, has directed Apple employees interviewing at OpenAI to share Apple secrets as part of the interviewing process. Tan is named as a defendant in the suit.
"He has directed job candidates still working for Apple to bring 'actual parts' from Apple to their interviews for 'show and tell' sessions in which he and his team at OpenAI can elicit still more Apple confidential information," Apple said in the filing.
Apple alleged that OpenAI coached departing Apple employees in how to evade security processes when leaving the iPhone maker, and that Chang Liu, a former employee who joined OpenAI, stole an Apple laptop. Liu is named as a defendant in the suit.
It also said that Apple believes OpenAI is asking hardware firms to carry out a metal finishing technique that Apple invented, while "misleading the partner to believe they had Apple's permission to do so."
"Recently, significant evidence has emerged suggesting individuals employed by OpenAI wrongfully took Apple's secret and confidential information regarding our unreleased technologies, processes, and products," an Apple representative told CNBC in a statement.
"We have no interest in other companies' trade secrets. We remain focused on building innovative technology that empowers people everywhere," a representative for OpenAI said in a statement.
IO Products is also named in the lawsuit.
OpenAI hasn't announced when or what its hardware products will be, but Altman said in November that it had finished its first prototypes.
Apple didn't comment on whether the lawsuit will affect the partnership with OpenAI, which includes the integration of ChatGPT into Apple Intelligence.
Mounting legal woes present another risk to OpenAI as it gears up for what's expected to be a historic IPO.
Apple's complaint comes two months after OpenAI won a high-profile trial against Tesla and SpaceX CEO Elon Musk. A federal jury found that Musk, who helped start OpenAI, had waited too long to sue the AI lab over claims that Altman, co-founder Greg Brockman and the company reneged on agreements to run it as a nonprofit. Musk said he would appeal.
Apple is seeking damages, injunctions, and an order to force OpenAI to stop using its trade secrets.
WATCH: Apple shares move higher despite losing ground to China`,
    bodyJa: `Appleは金曜日、人工知能研究所が独自の消費者向けハードウェアを開発するためにiPhoneメーカーの知的財産を盗んだとして、OpenAIを営業秘密窃盗の疑いで北カリフォルニアの連邦裁判所に訴えた。
「しかし、これだけは明らかだ。技術スタッフのメンバーから最高ハードウェア責任者に至るまで、あらゆるレベルで、そしてビジネスパートナーと連携して、OpenAIはAppleの企業秘密や機密情報を盗んでいる」と同社は訴訟書類で述べた。
ChatGPTがiPhoneのオペレーティングシステムに統合された2024年に注目を集める提携関係を結んだ両社にとって、これは衝撃的な逆転だ。 OpenAI CEOのサム・アルトマン氏は発表のためにApple本社を訪れた。
しかし、OpenAIが昨年、元Appleデザイナー、ジョニー・アイブ氏のスタートアップ「IO Products」を64億ドルで買収してハードウェア業界への参入計画を発表して以来、両社の関係は冷え込んでいる。
Appleがこの秋に発売するSiriアシスタントの最新版は、OpenAIの技術ではなく、GoogleのGemini AIモデルに基づいている。
Apple の申し立てのほとんどは、OpenAI と面接したり、OpenAI に参加したりした元従業員に関係しています。
Appleは、OpenAIのハードウェア責任者で元Apple副社長のTang Tan氏が、OpenAIで面接を受けるApple従業員に対し、面接プロセスの一環としてAppleの秘密を共有するよう指示したと主張した。タン氏は訴訟の被告として指名されている。
「同氏は、まだAppleで働いている求職者に対し、Appleの『実際の部品』を面接に持ち込んで『見せて伝える』セッションを行うよう指示しており、そこで同氏とOpenAIの彼のチームはさらに多くのAppleの機密情報を引き出すことができる」とAppleは提出書類の中で述べた。
Appleは、OpenAIが退職するApple従業員にiPhoneメーカーを退職する際のセキュリティプロセスを回避する方法を指導し、OpenAIに入社した元従業員のChang Liu氏がAppleのラップトップを盗んだと主張した。劉氏は訴訟の被告として指名されている。
またAppleは、OpenAIがハードウェア企業に対し、Appleが発明した金属仕上げ技術の実施を求めている一方で、「パートナーにAppleの許可を得ていると誤解させている」と考えていると述べた。
「最近、OpenAIに雇用されている個人が、当社の未発表テクノロジー、プロセス、製品に関するAppleの機密情報を不当に持ち出したことを示唆する重要な証拠が明らかになった」とAppleの代表者は声明でCNBCに語った。
OpenAIの代表者は声明で「われわれは他社の企業秘密には興味がない。われわれは引き続き、どこにいても人々に力を与える革新的な技術の構築に注力する」と述べた。
IO Productsも訴訟の対象となっている。
OpenAIはそのハードウェア製品がいつ、どのようなものになるのかについては発表していないが、アルトマン氏は11月に最初のプロトタイプが完成したと述べた。
Appleは、この訴訟がChatGPTのApple Intelligenceへの統合を含むOpenAIとの提携に影響を与えるかどうかについてはコメントしなかった。
歴史的なIPOと予想されるIPOに向けて準備を進めるOpenAIにとって、法的問題の増大は新たなリスクとなっている。
Appleの訴状は、OpenAIがTeslaとSpaceXのCEOであるElon Muskに対する注目を集める裁判に勝った2か月後に出された。連邦陪審は、OpenAIの立ち上げに貢献したマスク氏が、アルトマン氏、共同創設者のグレッグ・ブロックマン氏、そして同社が非営利団体として運営するための契約を反故にしたとの主張をめぐって、AI研究所を訴えるには時間がかかりすぎたと認定した。マスク氏は控訴するつもりだと述べた。
Appleは損害賠償、差し止め、OpenAIに対して企業秘密の使用を停止するよう強制する命令を求めている。
注目：中国に劣勢にもかかわらずアップル株は上昇`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/apple-openai-lawsuit-trade-secrets.html",
    publishedAt: "2026-07-11T00:08:23+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "apple-sues-openai-for-alleged-theft-of-c-871c273b",
    title: "Apple sues OpenAI for alleged theft of confidential info — and says that’s just ‘the tip of the iceberg’",
    titleJa: "Apple、機密情報窃盗容疑でOpenAIを告訴―それは「氷山の一角」にすぎないと主張",
    summaryJa: "iPhoneメーカーは、OpenAIにおける「不正行為は常態化しており、リーダーシップによって模範となっている」と主張している。",
    bodyOriginal: `The iPhone maker claims “misconduct is normalized and exemplified by leadership” at OpenAI.`,
    bodyJa: `iPhoneメーカーは、OpenAIにおける「不正行為は常態化しており、リーダーシップによって模範となっている」と主張している。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/apple-sues-openai-for-institutional-misconduct-and-alleges-thats-just-the-tip-of-the-iceberg-6e803c4d?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T23:06:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-42876452",
    readTime: 2,
  },
  {
    id: "meet-the-crypto-billionaires-building-a-ef14cebb",
    title: "Meet the crypto billionaires building a world where money buys you a vote",
    titleJa: "お金で投票できる世界を構築する仮想通貨億万長者を紹介します",
    summaryJa: "お金で投票できる世界を構築する仮想通貨億万長者を紹介します- 公開されました",
    bodyOriginal: `Meet the crypto billionaires building a world where money buys you a vote
- Published
The Free Republic of Liberland doesn't look like much from the boat.
You would never guess that this flat, muddy stretch of floodplain on the Danube River, dotted with alder trees, tents and treehouses, is connected to some of the world's wealthiest men - including the biggest initial investor in the Trump family's crypto business.
By contrast, the virtual reality version of Liberland I'm currently being shown, designed by Zaha Hadid's ZHA architecture firm, features gleaming towers, floating public parks, and gravity-defying water features.
The person showing it to me is Vít Jedlička, Liberland's president. He founded the micronation on a disputed bit of territory between Serbia and Croatia with the goal of making a truly libertarian, digital country that runs on the same technology as cryptocurrencies.
I've come to Liberland for the past year as part of a BBC Two documentary, The Tech Billionaire Takeover. Liberland may look and sound like a joke. But it is bankrolled by some of the wealthiest men in crypto, and it runs on an idea they are trying to export: that government itself can be replaced.
We arrive at the country by boat because Croatian authorities have stopped people from doing so by land. A few settlers in anoraks come out to wave to us from the shore and President Jedlička, communicating via megaphone, presents one of the settlers with an official medal.
In most modern democracies, everyone has an equal vote. But things are different in Liberland thanks to a purchasable crypto token called Liberland Merits. President Jedlička tells me a person is elected through Merits. "So the people that have more Merits are able to have more say in who is going to be in the leadership of the country," he says. This effectively means you can vote directly with your money.
Liberland is also entirely tax-free, something its interior minister, Ivan Pernar, a controversial Croatian former MP who was kicked out of parliament for spreading conspiracy theories, explains to me.
"Usually, people who believe in freedom, decentralised finances and so on, they tend to be from the upper class of society," Pernar tells me. "If you make zero selection and you say whoever comes on [the] boat is welcome, we would end up like [the] UK. We don't want that."
"So it's liberty, but... some people have more liberty than others?" I ask. One of the main ways to gain power and influence in Liberland appears to be through money, I suggest.
"Of course," says Pernar. He says that if you had "a bunch of bums in your country without anything", others would have to contribute to their benefits. He goes on to compare the poor to animals. "Don't feed the animals, because if you do, they will be accustomed to that and they will lose [the] ability to feed themselves. The same is with people."
To Liberland's wealthy backers, helping the poor - or indeed any form of taxation or centralised redistribution of wealth - is an affront to their individual liberty. This view is shared, unsurprisingly, by people in this world with far more money and influence than Pernar.
The banana billionaire
Over the past year, I've been hanging out with Liberland's prime minister, Chinese crypto titan Justin Sun. With Sun's backing - and that of about 30 other tech billionaires, they claim - the Liberlanders may now actually have access to the money needed to start building the version of their micronation with gleaming towers.
Sun is worth an estimated $8.5bn (£6.4bn). He's perhaps most famous for purchasing an art piece consisting of a banana duct taped to a wall for $6.2m and then eating it. He has also been accused by US regulators of fraud and market manipulation. Sun denies the charges, and recently reached a $10m settlement to resolve them.
His company, Tron, is a blockchain, a global software network on which you can buy and sell crypto currencies. Unlike a bank, it isn't run by one single authority - it's decentralised, existing across many computers all around the world, making it harder to tax and regulate.
This same blockchain technology is being used to run Liberland's government and one day, if Sun gets his way, it could run ours too. Citizens vote on laws and referendums using digital tokens, and the voting itself is automatically tallied and enforced by code, rather than counted by officials. In reality, though, the technology is still in its juvenile phase, and human officials are still required to implement laws.
According to blockchain analytics firm TRM Labs, external, Tron is one of the biggest platforms for moving illicit crypto - reportedly including funds tied to Hamas and Hezbollah, external, alongside those of drug cartels and mafia networks. Sun says Tron has innovated new collaborations with law enforcement to tackle illegal transactions on the blockchain, leading to huge declines in illicit volume on the platform.
The Trump family welcomed him as lead token investor in their own crypto business, World Liberty Financial. Sun invested more than $75m in the company, as well as millions more in Donald Trump's memecoin, which won him a dinner with the US president.
President Trump officially stepped down from the company once he took office but his family trust still owns and profits from it, selling a cryptocurrency coin called USD1. He has made more than $1.4bn from crypto in the past year, and stands to make much more.
A planet without borders?
It's safe to say the Trumps have profited hugely from their relationship to Sun. But what do Sun and other crypto entrepreneurs who have cosied up to the Trumps want in return? Liberland may offer a glimpse.
In person, Sun is warm and friendly. Like other billionaires I met, I sensed that Sun rarely got to hang around people that didn't work for him or desire his money. Most of our conversations centred around sci-fi and video games.
Last summer, when Sun had just landed from space after paying $29m to fly there with Jeff Bezos' Blue Origin company, he rang me to tell me about the experience. He had been struck by the idea that "the planet itself is boundaryless", without borders, and that "there's not even a concept of the country in the first place". The notion that the nation-state is outdated, and could therefore be replaced with blockchain technology, is one of the reasons h e decided to run to become Liberland's prime minister.
Liberland isn't an outlier - it's one of several prototypes of such micronations, areas claimed as independent nations but not legally recognised as such. Prospera in Honduras, Peter Thiel's Seasteading Institute, and Tim Draper's Draper Nation, a fully digital country with Bitcoin as its currency, are all chasing the same idea.
I meet Draper, a billionaire tech investor himself, at Silicon Valley's Draper University, his boot camp for young tech founders, where students pledge to "promote freedom at all costs". Draper tells me he believes government provides "bad service at a high cost", and blockchain will simply replace it: "It's just a matter of time."
Many of these ideas can be traced back to the controversial thinker and tech founder Curtis Yarvin, who has been called the "founder of the Dark Enlightenment". He has won praise from figures on the US right, including tech billionaire Peter Thiel and some in the current Trump administration, including Vice-President JD Vance. His philosophy is notoriously confusing, but it essentially amounts to a criticism of democracy (which has failed, he claims, because immigration is still too high) and concludes we should replace it with an authoritarian structure that sits somewhere in between a corporation, a monarchy, and a blockchain-run micro-nation.
Despite the fact that he views the media as one half of "The Cathedral" - his term for what he believes is the repressive ideological power made up of journalists and academics that secretly runs Western society - he agrees to meet me in Berkeley, California. We go on a short hike while Yarvin, who looks like an ageing punk rocker, speaks in circuitous, long-winded yarns that reference esoteric texts and periods of history to prove his points.
In our conversation, he outlines his "Patchwork" concept, in which traditional nation-states are replaced with a global network of sovereign mini-countries owned by shareholders and competing for citizens like a business competes for customers. He believes blockchain can be used to bring this world about and that the result would be "corporate monarchies" ruled over by "CEO-kings". These corporate monarchs would be accountable to a hidden board of shareholders, who could potentially even control the military and police through something he called a "crypto dingus" that would allow them to essentially disable all guns.
Many of these tech billionaires see Trump, and his office, as outdated, something that will eventually be replaced with their superior technology. Throughout my time meeting tech billionaires, I increasingly got the sense that they saw themselves as the real holders of power.
The crypto lobby has now surpassed the fossil fuel industry to become the most powerful lobby in the US, having contributed $238m in the most recent election cycle, according to Fox Business analysis, external. Yarvin, Sun, Draper, and Liberland all give a glimpse into the future some of them envision for us.
From Justin Sun, to Liberland and Tim Draper, everyone told me how blockchain technology and cryptocurrency can free us - and our money - from government control. But who would we be handing the control to instead? Every example I've seen ends in wealth and power flowing to whoever controls the technology.
Related topics
- Published11 December 2025`,
    bodyJa: `お金で投票できる世界を構築する仮想通貨億万長者を紹介します
- 公開されました
リベルラント自由共和国は船からはあまり見えません。
ハンノキの木、テント、ツリーハウスが点在するドナウ川沿いのこの平らで泥だらけの氾濫原が、トランプ家の仮想通貨ビジネスへの最大の初期投資家を含む世界有数の富裕層とつながっているとは、想像もつかないだろう。
対照的に、私が現在見せている仮想現実バージョンのリベルランドは、ザハ・ハディド氏の建築事務所ZHAが設計したもので、光り輝く塔、水に浮かぶ公共公園、重力に逆らう水の施設を特徴としている。
私にそれを見せてくれたのは、リベルランド社の社長、ヴィット・イェドリチカ氏です。彼は、仮想通貨と同じテクノロジーで運営される真に自由主義的なデジタル国家を作ることを目標に、セルビアとクロアチアの間の係争地域にミクロネーションを設立した。
私はこの 1 年間、BBC Two のドキュメンタリー「The Tech Billionaire Takeover」の一環としてリベルランドに来ました。リベルランドは一見冗談のように聞こえるかもしれません。しかし、この資金は仮想通貨業界で最も裕福な人々によって資金提供されており、彼らが輸出しようとしているアイデア、つまり政府自体を置き換えることができるというアイデアに基づいて実行されています。
クロアチア当局が陸路での渡航を禁止しているため、私たちは船でこの国に到着します。アノラックを着た数人の入植者が海岸から私たちに手を振って出てきて、イェドリチカ大統領がメガホンで通信しながら入植者の一人に公式メダルを授与した。
ほとんどの現代民主主義では、誰もが平等な投票権を持っています。しかし、リベルランドでは、リベルランドメリットと呼ばれる購入可能な暗号トークンのおかげで状況が異なります。イェドリチカ大統領は、人は功績によって選ばれると私に言いました。 「つまり、より多くの功績を持つ人々は、誰が国の指導者になるかについてより多くの発言権を持つことができるのです」と彼は言う。これは事実上、自分のお金で直接投票できることを意味します。
リベルラント州も完全に非課税であると、陰謀論を広めたために議会から追放され、物議を醸したクロアチアの元国会議員イワン・ペルナール内務大臣が私に説明してくれた。
「通常、自由や分散型財政などを信じる人々は、社会の上流階級の出身であることが多いです」とペルナー氏は私に語った。 「もし選択をゼロにして、誰が乗っても歓迎だと言うなら、我々は英国のようになってしまうだろう。我々はそれを望んでいない。」
「だから、それは自由だけど…他の人よりももっと自由を持っている人もいるの？」尋ねます。リベルランドで権力と影響力を獲得する主な方法の 1 つは、お金を利用することだと思われます。
「もちろんです」とペルナールは言う。同氏は、もし「あなたの国に何も持っていない野郎たちがたくさんいる」としたら、他の人たちは彼らの利益に貢献しなければならないだろうと言う。彼は続けて貧しい人々を動物に例えます。 「動物に餌を与えないでください。餌を与えると動物はそれに慣れてしまい、自分で餌を食べる能力を失ってしまいます。人間も同様です。」
リベルランドの裕福な支援者にとって、貧しい人々を助けること、あるいは実際にいかなる形態の課税や集中的な富の再分配も、彼らの個人の自由に対する侮辱である。当然のことながら、この見解は、ペルナールよりもはるかに多くの資金と影響力を持つ世界の人々によって共有されています。
バナナ億万長者
ここ1年、私はリベルランド首相で中国の仮想通貨大手ジャスティン・サン氏と付き合いを続けてきた。 Sun の支援と、その他約 30 人のハイテク億万長者の支援により、リベルランダーは現在、光り輝く塔を備えたミクロネーションのバージョンの構築を開始するのに必要な資金に実際にアクセスできるようになるかもしれません。
サンの価値は推定85億ドル（64億ポンド）に上る。彼はおそらく、壁に貼り付けられたバナナのダクトからなるアート作品を620万ドルで購入し、それを食べたことで最も有名です。同氏は米国の規制当局からも詐欺と市場操作の疑いで告発されている。サンは容疑を否認しており、最近解決のために1000万ドルの和解に達した。
彼の会社である Tron は、暗号通貨を売買できる世界的なソフトウェア ネットワークであるブロックチェーンです。銀行とは異なり、単一の当局によって運営されているわけではありません。分散型で世界中の多くのコンピューターに存在するため、課税や規制が難しくなります。
これと同じブロックチェーン技術がリベルランド政府の運営に使用されており、いつかサンの思い通りになれば、私たちの政府も運営されるようになるかもしれない。国民はデジタルトークンを使用して法律や国民投票に投票し、投票自体は当局による集計ではなく、コードによって自動的に集計および強制されます。しかし実際には、このテクノロジーはまだ初期段階にあり、法律を施行するには人間の役人が依然として必要とされています。
外部のブロックチェーン分析会社TRM Labsによると、トロンは違法暗号通貨を移動させるための最大のプラットフォームの1つであり、麻薬カルテルやマフィアのネットワークの資金と並んで、外部のハマスやヒズボラに関連する資金も含まれていると報じられている。サン氏によると、トロンはブロックチェーン上の違法取引に対処するために法執行機関との新たな連携を考案し、プラットフォーム上の違法取引量の大幅な減少につながったという。
トランプ家は、自身の仮想通貨事業ワールド・リバティ・ファイナンシャルのリードトークン投資家として同氏を歓迎した。サン氏は同社に7,500万ドル以上を投資し、さらにドナルド・トランプ氏のミームコインにも数百万ドルを投資し、それによって米国大統領との夕食会を勝ち取った。
トランプ大統領は就任後正式に同社を辞任したが、同氏の家族信託は依然として同社を所有し、USD1と呼ばれる仮想通貨コインを販売して利益を得ている。彼は過去 1 年間で暗号通貨から 14 億ドル以上を稼ぎ出しており、さらに多くを稼ぐつもりです。
国境のない惑星？
トランプ夫妻がサンとの関係から多大な利益を得ていると言っても過言ではない。しかし、トランプ夫妻に癒着したサンや他の仮想通貨起業家たちは、見返りに何を望んでいるのだろうか？リベルランドはその一端を垣間見せてくれるかもしれない。
実際にサンは温かくてフレンドリーです。私が会った他の億万長者たちと同じように、サンも自分のために働いてくれない人やお金を欲しがらない人たちと付き合うことはほとんどなかったと感じました。私たちの会話のほとんどは SF とビデオ ゲームに集中していました。
昨年の夏、サン氏がジェフ・ベゾス氏のブルー・オリジン社とともに宇宙飛行に2900万ドルを支払って宇宙から着陸したばかりのとき、サン氏は私に電話してその経験について話してくれた。彼は、「地球自体に境界がない」、国境がない、そして「そもそも国家という概念すらない」という考えに衝撃を受けました。国民国家は時代遅れであり、したがってブロックチェーン技術に置き換えられる可能性があるという考えが、彼がリベルラント州の首相に立候補することを決めた理由の1つである。
リベルランドは外れ値ではありません。それは、独立国家として主張されているものの、法的には独立国家として認められていない地域、そのようなミクロネーションのいくつかのプロトタイプの 1 つです。ホンジュラスのプロスペラ、ピーター・ティール氏の海洋研究所、ティム・ドレイパー氏のドレイパー・ネイション（ビットコインを通貨とする完全デジタル国家）は、すべて同じアイデアを追い求めている。
私は、自身も億万長者のハイテク投資家であるドレイパー氏に、若いハイテク創業者向けのブートキャンプであるシリコンバレーのドレイパー大学で会った。そこでは学生たちが「どんな犠牲を払ってでも自由を推進する」と誓う。ドレイパー氏は、政府が「質の悪いサービスを高コストで」提供していると信じており、ブロックチェーンがそれを置き換えるだけだ、「それは時間の問題だ」と語った。
これらのアイデアの多くは、「暗黒啓蒙の創始者」と呼ばれ、物議を醸した思想家でありテクノロジーの創始者であるカーティス・ヤーヴィンに遡ることができます。同氏はハイテク億万長者のピーター・ティール氏や、副大統領のJ・D・バンス氏など現トランプ政権の一部を含む米国右派の人物から賞賛を集めている。彼の哲学はわかりにくいことで有名だが、本質的には民主主義（移民が依然として多すぎるために民主主義は失敗したと彼は主張する）への批判に相当し、民主主義を企業、君主制、ブロックチェーンが運営する小国家の中間に位置する権威主義的構造に置き換えるべきであると結論づけている。
彼はメディアを「大聖堂」（西側社会を密かに運営しているジャーナリストや学者で構成された抑圧的なイデオロギー権力であると彼が信じている用語）の半分と見なしているという事実にもかかわらず、カリフォルニア州バークレーで私と会うことに同意した。年老いたパンクロッカーのように見えるヤーヴィンが、難解な書物や歴史の時代を引き合いに出し、自分の要点を証明するために回りくどい長文で話す間、私たちは短いハイキングに出かける。
私たちの会話の中で、彼は、伝統的な国民国家を、株主が所有する主権ミニ国家の世界的ネットワークに置き換え、企業が顧客を獲得するように国民を獲得するために競争するという、彼の「パッチワーク」コンセプトについて概説しました。彼は、ブロックチェーンを使用してこの世界を実現することができ、その結果は「CEO-王」が統治する「企業君主制」になるだろうと信じています。これらの企業君主たちは、隠れた株主委員会に対して責任を負うことになり、株主委員会は、彼が「暗号通貨」と呼んだものを通じて、軍や警察を実質的にすべての銃を無効化できるようにすることさえも潜在的にコントロールできる可能性がある。
こうしたハイテク億万長者の多くは、トランプ大統領と彼のオフィスは時代遅れであり、最終的には彼らの優れたテクノロジーに取って代わられるだろうと考えている。ハイテク億万長者たちと会ううちに、彼らが自分たちを本当の権力者だとみなしているという感覚がますます強くなった。
フォックス・ビジネス社外の分析によれば、仮想通貨ロビーは今や化石燃料産業を超えて米国で最も強力なロビーとなり、直近の選挙サイクルで2億3,800万ドルを寄付した。ヤーヴィン、サン、ドレイパー、リベルランドは皆、彼らが私たちに思い描く未来を垣間見せてくれます。
ジャスティン・サンからリベルランド、ティム・ドレイパーまで、誰もが私に、ブロックチェーン技術と暗号通貨がどのようにして私たちと私たちのお金を政府の管理から解放できるかを教えてくれました。しかし、代わりに誰に制御を渡すのでしょうか?私が見てきたすべての例は、テクノロジーを制御する者に富と権力が流れ込むという結末に終わります。
関連トピック
- 2025 年 12 月 11 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cly8eqyj8e2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T23:03:11+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/235b/live/fb5baae0-7b68-11f1-936a-038dbfe02d14.jpg",
    readTime: 10,
  },
  {
    id: "meta-s-stock-roars-back-to-life-as-it-no-4bc2807c",
    title: "Meta’s stock roars back to life as it notches its best week in years",
    titleJa: "メタ社の株価はここ数年で最高の週を記録し、活気を取り戻している",
    summaryJa: "投資家はメタの新しい低コストAIの価格設定とインフラストラクチャ計画に強気だ。",
    bodyOriginal: `Investors are bullish on Meta’s new low-cost AI pricing and infrastructure plans.`,
    bodyJa: `投資家はメタの新しい低コストAIの価格設定とインフラストラクチャ計画に強気だ。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/metas-stock-roars-back-to-life-as-it-heads-for-its-best-week-in-years-0ff0fa7d?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T22:24:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-65244158",
    readTime: 2,
  },
  {
    id: "the-ai-race-is-shifting-from-bigger-mode-9a81a267",
    title: "The AI race is shifting from bigger models to cheaper, smarter systems",
    titleJa: "AI 競争は、より大型のモデルから、より安価でスマートなシステムへと移行しています",
    summaryJa: "過去 2 年間、人工知能の競争は、より大きなモデル、より優れたベンチマーク、そして少なくとも次の発売まではどの企業がリードを獲得できるかという点で簡単に得点が決まりました。そのスコアカードは不完全に見え始めています。",
    bodyOriginal: `For the past two years, the artificial intelligence race has been easy to score: bigger models, better benchmarks and whichever company could claim the lead, at least until the next launch.
That scorecard is starting to look incomplete.
As companies move from testing AI to using it in real products and workflows, it's not longer about tapping the best model, but accessing the one that's the best fit for a specific job, at the right cost, with the necessary data and in a chosen environment.
That shift is opening the door for a new kind of AI competition, one focused less on model size and more on routing, cost, control and compute.
"The model alone is no longer the product," Perplexity CEO Aravind Srinivas told CNBC. "It is the harness, the orchestration system that puts the model inside a very capable harness and pairs the model with a lot of tools."
That means AI products are becoming systems that can decide which model to use, when to use it and what outside tools or company data sources are necessary. A customer service task might not need the most expensive model. A complex coding problem might. A routine internal workflow could run on a cheaper open model. A harder step could be escalated to a more powerful one.
"The answer is always use whatever is the best for the task," Srinivas said.
The emergence of alternative models comes as corporate America tightens its belt on AI spending, and presents another challenge for OpenAI and Anthropic, which have flourished over the past few years by selling the most cutting-edge technology.
Perplexity this week previewed a new system for its computer-use product built around GLM 5.2, an open model from China's Z.ai. The system is designed to let a cheaper model handle more of the work while calling in a stronger model only when needed.
That approach reflects a broader change in the market. Open-weight models, which can be downloaded, tuned and run by companies themselves, are becoming more capable. They are also cheaper to run than premium proprietary models from the biggest AI labs.
Benchmark general partner Peter Fenton said the shift could be dramatic.
"A maybe contrarian view that is becoming consensus is our belief that 90-plus percent of the tokens created will come out of open-weight models over the next 18 to 24 months, possibly even by the end of the year," Fenton told CNBC.
Tokens are the units of data AI models process and generate.
"The inference margins generated by the frontier model companies, I think, are going to come under pressure when you can run those without the markup that they're providing, when you have good enough models from open weights," Fenton said.
Fenton said the move to open models is not only about saving money. In some cases, smaller models that are tuned for a specific task can be faster and perform better than larger general-purpose models.
'Where it runs and how it runs'
That is one reason Benchmark invested in Ollama, a company that makes it easier for developers and enterprises to download, run and manage open models.
"One thing is where the model's from and where it was created and trained," Ollama CEO Jeff Morgan said. "But the more important thing to these businesses we speak to is where it runs and how it runs."
Morgan said Ollama has been adopted by more than 85% of the Fortune 500, including companies in regulated industries such as aviation, insurance and health care. He said many companies start with smaller models running close to their own data, then expand to larger open models as they get more comfortable.
The rise of open models also creates a strategic challenge for the U.S. Many of the most competitive open-weight models are coming from Chinese labs, including Z.ai and DeepSeek. That has made open-source AI a business issue, a policy issue and a national competitiveness issue.
Srinivas said the U.S. should support open models because they make AI more affordable and accessible.
"If you want the benefits of AI to be widely distributed to small businesses in America and American allied countries, then you really need AI to be a lot more affordable," Srinivas said. "And open source is the only way to do that."
The shift could also affect the massive data center buildout underway across the tech industry. The current AI boom assumes demand will keep flowing to large cloud data centers filled with high-end chips. Srinivas says some AI work may eventually run locally instead, on devices owned by consumers or businesses.
That wouldn't eliminate the need for data centers, but it could create a more hybrid AI system, with routine tasks run locally and the most difficult work getting sent to a more powerful model in the cloud.
For investors, the question is whether the biggest AI labs can maintain their pricing power as open models get better and companies become more selective about what they use.
WATCH: OpenAI's Sam Altman says Chinese open source models are getting very good`,
    bodyJa: `過去 2 年間、人工知能の競争は、より大きなモデル、より優れたベンチマーク、そして少なくとも次の発売まではどの企業がリードを獲得できるかという点で簡単に得点が決まりました。
そのスコアカードは不完全に見え始めています。
企業が AI のテストから実際の製品やワークフローでの使用に移行するにつれて、もはや最適なモデルを利用することが重要ではなく、特定の業務に最適なモデルに、適切なコストで、必要なデータを備え、選択された環境でアクセスすることが重要になります。
この変化は、モデルのサイズではなく、ルーティング、コスト、制御、コンピューティングに焦点を当てた、新しい種類の AI 競争への扉を開きます。
「もはやモデルだけでは製品ではない」とパープレクシティのCEO、アラビンド・スリニバス氏はCNBCに語った。 「これはハーネスであり、モデルを非常に高性能なハーネスの中に入れ、モデルと多くのツールを組み合わせるオーケストレーション システムです。」
つまり、AI 製品は、どのモデルをいつ使用するか、どのような外部ツールや企業データ ソースが必要かを決定できるシステムになりつつあります。カスタマー サービス タスクには、最も高価なモデルは必要ない場合があります。複雑なコーディングの問題が考えられます。日常的な内部ワークフローは、より安価なオープン モデルで実行できます。より困難なステップは、より強力なステップにエスカレートされる可能性があります。
「答えは常に、そのタスクに最適なものを使用することです」とスリニバス氏は言います。
代替モデルの出現は、アメリカ企業がAIへの支出を強化する中で起こり、最先端のテクノロジーを販売することで過去数年間繁栄してきたOpenAIとAnthropicにとって新たな課題となっている。
Perplexityは今週、中国Z.aiのオープンモデルであるGLM 5.2をベースに構築された同社のコンピュータ用製品の新システムをプレビューした。このシステムは、必要な場合にのみより強力なモデルを呼び出しながら、より安価なモデルでより多くの作業を処理できるように設計されています。
このアプローチは、市場における広範な変化を反映しています。企業自身がダウンロード、調整、実行できるオープンウェイト モデルは、より高性能になっています。また、最大の AI ラボが提供するプレミアムな独自モデルよりも実行コストが安くなります。
ベンチマークのゼネラルパートナーであるピーター・フェントン氏は、この変化は劇的になる可能性があると述べた。
「おそらくコンセンサスになりつつある逆張りの見方は、作成されるトークンの90パーセント以上が今後18～24カ月間、おそらく年末までにオープンウェイトモデルから生成されるだろうという我々の信念だ」とフェントン氏はCNBCに語った。
トークンは、AI モデルが処理および生成するデータの単位です。
「フロンティアモデル企業が提供するマークアップなしでそれらを実行できるようになり、オープンウェイトから十分なモデルが得られるようになると、フロンティアモデル企業が生み出す推論マージンはプレッシャーにさらされることになると思います」とフェントン氏は述べた。
フェントン氏は、オープンモデルへの移行は単にコストを節約するためだけではないと述べた。場合によっては、特定のタスク用に調整された小型のモデルの方が、大型の汎用モデルよりも高速でパフォーマンスが優れている場合があります。
「どこでどのように走るのか」
これが、Benchmark が開発者や企業がオープン モデルをダウンロード、実行、管理することを容易にする会社である Ollama に投資した理由の 1 つです。
Ollama CEO の Jeff Morgan 氏は、「1 つは、モデルがどこから来たのか、どこで作成されトレーニングされたのかということです」と述べています。 「しかし、私たちが話をするこれらの企業にとってより重要なことは、企業がどこでどのように運営されているかということです。」
モーガン氏によると、オラマは航空、保険、ヘルスケアなどの規制産業の企業を含むフォーチュン500企業の85％以上で採用されているという。同氏によると、多くの企業は自社のデータに近い小規模なモデルを実行することから始め、快適になればより大規模なオープンモデルに拡張するという。
オープン モデルの台頭は、米国にとって戦略的な課題も生み出しています。最も競争力のあるオープンウェイト モデルの多くは、Z.ai や DeepSeek などの中国の研究所から提供されています。そのため、オープンソース AI はビジネス上の問題、政策上の問題、そして国家競争力上の問題となっています。
スリニバス氏は、AIをより手頃な価格で利用しやすくするため、米国はオープンモデルをサポートすべきだと述べた。
「AIのメリットを米国や米国の同盟国の中小企業に広く行き渡らせたいなら、AIをもっと手頃な価格にする必要がある」とスリニバス氏は語った。 「そしてオープンソースがそれを実現する唯一の方法です。」
この変化は、テクノロジー業界全体で進行中の大規模なデータセンターの建設にも影響を与える可能性がある。現在の AI ブームでは、ハイエンド チップを搭載した大規模なクラウド データ センターに需要が流れ続けることが想定されています。スリニバス氏は、一部の AI 作業は最終的には、消費者や企業が所有するデバイス上でローカルに実行される可能性があると述べています。
データセンターの必要性がなくなるわけではありませんが、日常的なタスクはローカルで実行され、最も困難な作業はクラウド内のより強力なモデルに送信される、よりハイブリッドな AI システムが構築される可能性があります。
投資家にとって問題は、オープンモデルが改善され、企業が使用するものについてより選択的になる中、最大手のAIラボが価格決定力を維持できるかどうかだ。
注目：OpenAIのサム・アルトマン氏、中国のオープンソースモデルは非常に良くなっていると語る`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/the-ai-race-is-shifting-from-bigger-models-to-cheaper-smarter-systems.html",
    publishedAt: "2026-07-10T21:27:18+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "i-get-1-460-in-social-security-my-milli-98420f49",
    title: "‘I get $1,460 in Social Security’: My millionaire ex-husband, 74, refuses to pay alimony. What can I do?",
    titleJa: "「私は社会保障として 1,460 ドルをもらっています」: 億万長者の元夫 (74 歳) は慰謝料の支払いを拒否しています。私に何ができる？",
    summaryJa: "「私にはほとんどお金がありませんが、元夫の財務諸表には何百万もの資産があることが示されています。」",
    bodyOriginal: `“I have very little money, while my ex’s financial statements show assets in the millions.”`,
    bodyJa: `「私にはほとんどお金がありませんが、元夫の財務諸表には何百万もの資産があることが示されています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-get-1-460-in-social-security-my-millionaire-ex-husband-74-refuses-to-pay-alimony-what-can-i-do-c5e60824?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T21:12:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-22299025",
    readTime: 2,
  },
  {
    id: "trump-admin-eases-export-controls-for-ua-2438b3ba",
    title: "Trump admin eases export controls for UAE; Warren blasts 'corrupt' provision",
    titleJa: "トランプ政権、UAEへの輸出規制を緩和。ウォーレン氏、「腐敗した」条項を激しく非難",
    summaryJa: "商務省は金曜日、バイナンスへの20億ドルの投資にドナルド・トランプ大統領の家族に関連するステーブルコインを使用したUAE支援の投資会社MGXに対する輸出許可申請を「好意的に審査する」と表明するなど、アラブ首長国連邦に対する輸出規制の緩和に向けて動いた。連邦官報で閲覧できる17ページの新規則の未公開版には、商務省産業安全保障局がMGX半導体とUAE向けサーバーに関連する申請を好意的に審査しているという一文が含まれている。",
    bodyOriginal: `The Commerce Department on Friday moved toward easing export controls on the United Arab Emirates, including by saying it will "favorably review" export license applications for MGX, the UAE-backed investment firm that used a stablecoin linked to President Donald Trump's family for its $2 billion investment in Binance.
An unpublished version of a new 17-page rule viewable in the Federal Register includes one sentence about Commerce's Bureau of Industry and Security favorably reviewing applications involving MGX semiconductors and servers bound for the UAE.
The rule is scheduled to be officially published on Tuesday, July 14.
Sen. Elizabeth Warren, a Massachusetts Democrat, quickly blasted the new rule, calling it "corrupt" because of MGX's use of a Trump-connected stablecoin.
MGX used USD1, a stablecoin issued by the Trump family-affiliated World Liberty Financial, to complete its investment in Binance, the world's largest crypto exchange by daily volume.
The transaction provided a major source of business for the newly launched USD1, and fueled questions about whether Trump's financial interests could influence U.S. policy toward the UAE.
The broader rule also gives the UAE government, Abu Dhabi AI conglomerate G42 and its cloud subsidiary Core42 access to license exceptions for certain advanced-computing equipment.
The Commerce Department, in a statement, said that it "will significantly upgrade the status of the United Arab Emirates" under export regulations "in recognition of the UAE's status as a U.S. Major Defense Partner and its support in advancing U.S. national security interests, including Operation Epic Fury," the war against Iran.
Warren, in a statement, said, "We already know that the UAE royal behind G42 and MGX secretly bought a 49% stake in the Trump crypto company, World Liberty Financial."
"It was also just revealed that President Trump made a whopping $263 million windfall related to this deal, part of the $1.4 billion he raked in from his crypto ventures last year alone," Warren said, citing the president's recent financial disclosure.
"Now, Trump's Commerce Department is giving G42 license-free access to advanced AI chips and promising favorable treatment for MGX, despite reported concerns about the diversion of sensitive technology to China and other national security risks," she said.
Warren, who is the ranking Democrat on the Senate Banking Committee, called for Commerce Secretary Howard Lutnick and BIS Under Secretary Jeffrey Kessler to testify before Congress "to explain this corrupt deal and how it could put our national security at risk."
Warren and other Senate Democrats earlier Friday called for hearings into whether UAE-linked investments in World Liberty influenced administration decisions on advanced chips, arms sales and other policies benefiting the country.
Kessler is already scheduled to testify next week before the House Committee on Foreign Affairs.
There is no evidence in the rule that the UAE's financial dealings with World Liberty influenced Commerce's decision.
Amazon, Apple, Google, Meta, Microsoft, OpenAI, Oracle and xAI would receive streamlined treatment for some controlled equipment used in UAE operations and data center projects under the new rule.
The changes could speed chip sales by reducing the need for separate export licenses, but they do not eliminate restrictions intended to prevent sensitive technology from reaching prohibited users or countries such as China.
The rule also eases controls on some military, satellite and spacecraft-related exports.`,
    bodyJa: `商務省は金曜日、バイナンスへの20億ドルの投資にドナルド・トランプ大統領の家族に関連するステーブルコインを使用したUAE支援の投資会社MGXに対する輸出許可申請を「好意的に審査する」と表明するなど、アラブ首長国連邦に対する輸出規制の緩和に向けて動いた。
連邦官報で閲覧できる17ページの新規則の未公開版には、商務省産業安全保障局がMGX半導体とUAE向けサーバーに関連する申請を好意的に審査しているという一文が含まれている。
この規則は7月14日火曜日に正式に発表される予定です。
マサチューセッツ州民主党のエリザベス・ウォーレン上院議員は、MGXがトランプ大統領と関係のあるステーブルコインを使用しているため、この規則は「腐敗している」とすぐに新規則を激しく非難した。
MGXは、トランプ家系のワールド・リバティ・ファイナンシャルが発行したステーブルコインUSD1を使用して、1日の取引高で世界最大の仮想通貨取引所であるバイナンスへの投資を完了した。
この取引は新​​たに発足したUSD1にとって主要なビジネス源となり、トランプ大統領の経済的利益が米国の対UAE政策に影響を与える可能性があるのではないかという疑問が高まった。
このより広範な規則により、UAE政府、アブダビのAI複合企業G42、およびそのクラウド子会社Core42に対し、特定の先端コンピューティング機器に対するライセンス例外へのアクセスも与えられる。
商務省は声明で、「米国の主要防衛パートナーとしてのＵＡＥの地位と、対イラン戦争であるエピック・フューリー作戦を含む米国の国家安全保障上の利益の推進におけるＵＡＥの支援を認め、」輸出規制に基づく「アラブ首長国連邦の地位を大幅に向上させる」と述べた。
ウォーレン氏は声明で、「G42とMGXの背後にあるUAE王室がトランプ大統領の仮想通貨会社ワールド・リバティ・ファイナンシャルの株式49％を秘密裏に購入したことはすでに分かっている」と述べた。
「また、トランプ大統領がこの取引に関連して2億6,300万ドルという途方もない利益を得たことも明らかになりました。これは、昨年だけで仮想通貨ベンチャーから集めた14億ドルの一部です」とウォーレン氏は大統領の最近の財務情報開示を引用して述べた。
同氏は、「中国への機密技術の転用やその他の国家安全保障上のリスクに関する懸念が報じられているにもかかわらず、トランプ商務省は現在、G42に高度なAIチップへのライセンスフリーのアクセスを与え、MGXに有利な待遇を約束している」と述べた。
上院銀行委員会の民主党トップであるウォーレン氏は、ハワード・ラトニック商務長官とジェフリー・ケスラーBIS次官に対し、「この腐敗した取引と、それがいかに国家安全保障を危険にさらす可能性があるかを説明する」議会証言を求めた。
ウォーレン氏と他の上院民主党議員は金曜早朝、ワールド・リバティーへのＵＡＥ関連投資が先端チップや武器売却、その他国に利益をもたらす政策に関する政権の決定に影響を与えたかどうかを調査する公聴会を呼びかけた。
ケスラー氏はすでに来週、下院外交委員会で証言する予定となっている。
この規則には、ワールド・リバティとのUAEの金融取引が商務省の決定に影響を与えたという証拠はない。
Amazon、Apple、Google、Meta、Microsoft、OpenAI、Oracle、および xAI は、新しい規則の下で、UAE の事業およびデータセンタープロジェクトで使用される一部の管理対象機器に対して合理的な扱いを受けることになります。
この変更により、個別の輸出許可の必要性が減り、チップの販売が加速する可能性があるが、機密技術が禁止されているユーザーや中国などの国に届くのを防ぐことを目的とした制限は撤廃されない。
この規則はまた、一部の軍事、衛星、宇宙船関連の輸出に対する規制も緩和する。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/trump-uae-mgx-crypto-export-commerce-warren.html",
    publishedAt: "2026-07-10T19:40:22+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "where-to-put-cash-right-now-should-you-l-289981b6",
    title: "Where to put cash right now: Should you lock in at 4% — or wait for the next Fed rate decision?",
    titleJa: "今すぐ現金をどこに置くべきか: 4% に固定すべきか、それとも次回の FRB 金利決定を待つべきか?",
    summaryJa: "CD金利は停滞しているが、次回あるいはその次のFRB会合後には状況が変わる可能性がある。",
    bodyOriginal: `CD rates are at a standstill, but that could change after the next Fed meeting, or the one after that.`,
    bodyJa: `CD金利は停滞しているが、次回あるいはその次のFRB会合後には状況が変わる可能性がある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/should-you-lock-in-a-4-cd-rate-now-heres-how-to-decide-on-the-next-move-for-your-cash-41a7ef4c?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T19:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-27448246",
    readTime: 2,
  },
  {
    id: "openai-power-consolidates-under-co-found-2a217850",
    title: "OpenAI power consolidates under co-founder Greg Brockman ahead of prospective IPO",
    titleJa: "OpenAI の勢力が IPO に先立って共同創設者 Greg Brockman の下に統合される",
    summaryJa: "OpenAI に新しい副司令官が誕生しました。同社社長のグレッグ・ブロックマン氏は、木曜日にフィジ・シモ氏が慢性疾患のためその職を辞任したことを受け、OpenAIの最も重要かつ収益性の高いプロジェクトの正式責任者となった。",
    bodyOriginal: `There's a new second-in-command at OpenAI.
Greg Brockman, the company's president, is officially responsible for OpenAI's most important and profitable projects after Fidji Simo stepped down from her role on Thursday due to chronic illness.
Simo, a former Meta executive and ex-CEO of Instacart, served as OpenAI's product and business chief for about a year, focusing the company's roadmap and helping it scale. Simo, who was diagnosed with Postural Orthostatic Tachycardia Syndrome, or POTS, in 2019, took a medical leave in April, and said Thursday that she would transition to a position as a part-time advisor.
Brockman, an OpenAI co-founder, took over product responsibilities during Simo's absence, and will continue to lead those efforts, according to a source familiar with the company's plans who asked not to be named due to confidentiality. Brockman will oversee OpenAI's ChatGPT product business, as well as its go-to-market teams, enterprise teams and compute initiatives, the person said.
"I am deeply grateful for all Fidji has done for OpenAI and to advance our mission, and for the opportunity to have worked alongside her for the past few years," Brockman wrote in a post on X on Friday.
Reporting directly to CEO Sam Altman, Brockman is under pressure to bring in revenue and justify OpenAI's $852 billion valuation, especially as the company gears up for what's expected to be a historic IPO. OpenAI confidentially filed its prospectus with regulators in June, but the company hasn't disclosed when it plans to debut and is reportedly delaying until next year.
OpenAI is also facing increasingly stiff competition from rivals, including Anthropic, Google and Elon Musk's SpaceX, along with a host of cheaper open-weight models primarily out of China.
ChatGPT's market share fell below 50% for the first time in March, according to a report from Sensor Tower, and OpenAI has been aggressively touting its AI coding assistant, Codex, in an effort to win over more users.
Sarah Friar, OpenAI's finance chief, and Jason Kwon, the company's strategy chief, will report to Altman. The company doesn't plan to hire anyone to replace Simo, the person familiar said.
Brockman co-founded OpenAI alongside Altman and a group of others, including Musk, in 2015. He and Altman have been close allies, and when Altman was briefly ousted from his role as CEO in 2023, Brockman quit the company in solidarity. Both men rejoined OpenAI days later.
"Greg and I are partners in running this company," Altman wrote in a blog post at the time. "We have never quite figured out how to communicate that on the org chart, but we will."
They were also both at the center of a high-profile legal brawl earlier this year. Musk sued Brockman, Altman and the company, alleging they went back on commitments they made to keep the the AI lab a nonprofit.
In federal court in Oakland, California in May, Brockman testified about the startup's early years and pushed back on Musk's account of events. He was grilled about his personal financial ambitions, his understanding of OpenAI's structure and Musk's involvement at the company.
Musk ultimately lost the case after an advisory jury said he waited too long to sue, a verdict that was immediately adopted by a federal judge.
"I think the tech we are developing is transformative," Brockman said from the witness stand. "This is going to be the most important technological shift in human history."`,
    bodyJa: `OpenAI に新しい副司令官が誕生しました。
同社社長のグレッグ・ブロックマン氏は、木曜日にフィジ・シモ氏が慢性疾患のためその職を辞任したことを受け、OpenAIの最も重要かつ収益性の高いプロジェクトの正式責任者となった。
元 Meta 幹部で Instacart の元 CEO である Simo 氏は、OpenAI の製品およびビジネスの責任者を約 1 年間務め、同社のロードマップに重点を置き、規模の拡大を支援しました。 2019年に体位起立性頻脈症候群（POTS）と診断されたシモ氏は4月に病気休暇をとり、木曜日には非常勤顧問の職に移行すると発表した。
機密保持のため匿名を希望した同社の計画に詳しい関係者によると、OpenAIの共同創設者であるブロックマン氏はシモ氏の不在中に製品責任を引き継ぎ、今後もこうした取り組みを主導していくという。同関係者によると、ブロックマン氏はOpenAIのChatGPT製品ビジネスのほか、市場投入チーム、エンタープライズチーム、コンピューティングイニシアチブを監督する予定だという。
ブロックマン氏は金曜日のXの投稿で、「フィジーがOpenAIと私たちの使命を前進させるために行ってくれたこと、そして過去数年間彼女と一緒に仕事をする機会を与えてくれたことに深く感謝している」と述べた。
CEOのサム・アルトマン直属のブロックマン氏は、特に同社が歴史的と予想されるIPOに向けて準備を進めている中で、収益を上げ、OpenAIの8,520億ドルの評価額を正当化するというプレッシャーにさらされている。 OpenAIは6月に規制当局に目論見書を極秘に提出したが、同社はデビュー予定時期を明らかにしておらず、来年まで延期すると伝えられている。
OpenAIはまた、Anthropic、Google、イーロン・マスク氏のSpaceXなどのライバル企業や、主に中国からの安価なオープンウェイトモデルとの競争も激化している。
Sensor Towerのレポートによると、ChatGPTの市場シェアは3月に初めて50％を下回り、OpenAIはより多くのユーザーを獲得するためにAIコーディングアシスタントのCodexを積極的に宣伝してきた。
OpenAIの財務責任者であるSarah Friar氏と同社の戦略責任者であるJason Kwon氏がAltman氏の直属となる。関係者によると、同社はシモ氏の後任に人材を採用する予定はないという。
ブロックマン氏は、2015年にアルトマン氏やマスク氏を含む他のグループとともにOpenAIを共同設立した。彼とアルトマン氏は親しい同盟関係にあり、2023年にアルトマン氏が一時的にCEOの職を追われたとき、ブロックマン氏は団結して同社を辞めた。両氏は数日後に OpenAI に再参加した。
「グレッグと私はこの会社を経営するパートナーです」とアルトマン氏は当時のブログ投稿に書いた。 「それを組織図上でどのように伝えるかはまだ完全にはわかりませんが、そうするつもりです。」
両者は今年初め、注目を集めた法的争いの中心人物でもあった。マスク氏はブロックマン氏、アルトマン氏、そして同社を訴え、AI研究所を非営利にし続けるという約束を破ったとして訴えた。
5月にカリフォルニア州オークランドの連邦裁判所で、ブロックマン氏はスタートアップの初期について証言し、マスク氏の出来事の説明を押し返した。彼は、個人的な経済的野心、OpenAI の構造に対する理解、そしてマスク氏の会社への関与について憤慨していました。
顧問陪審が訴訟するには時間がかかりすぎると述べ、最終的にマスク氏は敗訴したが、連邦判事はこの評決を直ちに採用した。
ブロックマン氏は証言台で「われわれが開発している技術は革新的だと思う」と語った。 「これは人類の歴史の中で最も重要な技術的変化となるだろう。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/openai-power-consolidates-under-co-founder-greg-brockman-ahead-of-ipo.html",
    publishedAt: "2026-07-10T19:12:46+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "a-hedge-fund-trade-blamed-for-a-massive-4cc6d344",
    title: "A hedge-fund trade blamed for a massive market blowup in 2024 has made a big comeback, Goldman Sachs says",
    titleJa: "ゴールドマン・サックス、2024年の大規模な市場爆発の原因とされたヘッジファンドの取引が大きく復活したと発表",
    summaryJa: "為替市場のキャリー取引が戻ってきましたが、その規模はここ数年よりも大きくなっています。",
    bodyOriginal: `The currency-market carry trade is back — and bigger than it’s been in many years.`,
    bodyJa: `為替市場のキャリー取引が戻ってきましたが、その規模はここ数年よりも大きくなっています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/a-hedge-fund-trade-blamed-for-a-massive-market-blowup-in-2024-has-made-a-big-comeback-goldman-sachs-says-f2308a78?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T19:04:00+00:00",
    category: "貿易",
    imageUrl: "https://images.mktw.net/im-65224365",
    readTime: 2,
  },
  {
    id: "prepare-for-the-fed-to-undo-rate-cuts-th-76170698",
    title: "Prepare for the Fed to undo rate cuts that stabilized the economy, expert cautions",
    titleJa: "FRBが経済を安定させた利下げを取り消す準備をせよ、専門家が警告",
    summaryJa: "RBCウェルス・マネジメントによると、FRBは2025年の「保険削減」をすべて撤回するか、まったく利上げを行わない可能性が高いという。",
    bodyOriginal: `The Federal Reserve likely will take back all the 2025 ‘insurance cuts’ or not raise interest rates at all, according to RBC Wealth Management.`,
    bodyJa: `RBCウェルス・マネジメントによると、FRBは2025年の「保険削減」をすべて撤回するか、まったく利上げを行わない可能性が高いという。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/prepare-for-the-fed-to-undo-rate-cuts-that-stabilized-the-economy-expert-cautions-bc36ea76?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T19:02:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-38767537",
    readTime: 2,
  },
  {
    id: "sk-hynix-s-stock-scores-double-digit-pop-2eeccc0d",
    title: "SK Hynix’s stock scores double-digit pop in Nasdaq debut",
    titleJa: "SKハイニックスの株価がナスダックデビューで2桁の上昇率を記録",
    summaryJa: "韓国のメモリ会社の新しい米国預託証券は金曜日に取引が始まる。",
    bodyOriginal: `The South Korean memory company’s new American depositary receipts begin trading on Friday.`,
    bodyJa: `韓国のメモリ会社の新しい米国預託証券は金曜日に取引が始まる。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/sk-hynixs-stock-looks-primed-for-a-pop-in-its-nasdaq-debut-38054370?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T18:31:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-06135510",
    readTime: 2,
  },
  {
    id: "traders-fall-back-in-love-with-meta-here-92c6f2f1",
    title: "Traders fall back in love with Meta. Here's where bulls see it going",
    titleJa: "トレーダーたちは再びメタに夢中になります。強気派が今後の展開を見据えているのはここだ",
    summaryJa: "Meta Platform の AI への取り組みは、時価総額 1 兆 7,000 億ドルの同社の株式がほぼ 1 年に渡って低迷した後、復活するためのレシピのように見えます。",
    bodyOriginal: `Meta Platform's AI efforts are looking like the recipe for a comeback after an almost year-long drought in shares of the $1.7 trillion market-cap company.
Shares of Mark Zuckerberg's social media giant jumped more than 6% Friday to the highest level since April, extending gains that began earlier this month when the company detailed plans to sell access to its AI computing capacity. On Thursday, the company launched Muse Spark 1.1, an AI coding product that will compete with Anthropic and OpenAI. Shares of Meta are flat on the year, while the tech-heavy Nasdaq-100 is up 18%.
Options traders piled in on Friday, with volume on pace for more than three times the 30-day average and 78% of the stock's $1.8 billion in options premium tied to calls, according to data from Cboe LiveVol and SpotGamma. Some of the call-buying was likely offset with selling as well, with as many calls sold as bought, but more than twice as many calls were bought compared to puts, and eight of the top 10 contracts by volume were calls as of midday.
The five most popular trades were all contracts expiring Friday afternoon, looking for a quick extension of early gains. The top trade, the $675 strike call expiring Friday, trades for about $3 per contract and needs Meta to add on another 2% by the bell.
The most actively traded contract expiring after Friday is the July 17 700-strike, a trade that needs a 6% advance to break even.
While bulls dominated the action in the short-term trades, at least one big trader faded the notion of a big swing in either direction. The second-biggest trade of the session was someone selling a total $29 million of both puts and calls at the 670 strike, a bet the stock will stay right where it is for the next two months.`,
    bodyJa: `Meta Platform の AI への取り組みは、時価総額 1 兆 7,000 億ドルの同社の株式がほぼ 1 年に渡って低迷した後、復活するためのレシピのように見えます。
マーク・ザッカーバーグ氏率いるソーシャルメディア大手の株価は金曜日に6％以上上昇し、4月以来の高値を記録し、同社がAIコンピューティング能力へのアクセスを販売する計画を詳細に発表した今月初めに始まった上昇幅をさらに拡大した。同社は木曜日、Anthropic や OpenAI と競合する AI コーディング製品である Muse Spark 1.1 を発売しました。メタの株価は年初来横ばいで、ハイテク株の多いナスダック100は18％上昇している。
Cboe LiveVolとSpotGammaのデータによると、金曜日にはオプショントレーダーが集まり、出来高は30日間平均の3倍以上のペースで推移し、株価18億ドルのオプションプレミアムのうち78％がコールに結びついていた。コールの買いの一部は売りで相殺された可能性が高く、コールの売りは買いと同数だったが、プットに比べてコールの買いが2倍以上あり、正午の時点で出来高上位10枚のうち8枚がコールだった。
最も人気のある5つの取引はいずれも金曜日の午後に期限が切れる契約で、序盤の利益を素早く延長することを狙っていた。金曜日に期限が切れる最高の取引である675ドルのストライキコールは、1契約あたり約3ドルで取引され、メタはベルまでにさらに2％を追加する必要がある。
金曜日以降に期限が切れる最も活発に取引された契約は、7月17日の700ストライクで、損益分岐点には6％の前払いが必要な取引である。
短期取引では強気派が優勢だったものの、少なくとも1人の大手トレーダーがどちらの方向にも大きく変動するという概念を薄れさせた。このセッションで 2 番目に大きな取引は、670 ストライキでプットとコールの両方で合計 2,900 万ドルを売った人で、株価が今後 2 か月間その位置にとどまることに賭けています。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/traders-fall-back-in-love-with-meta-heres-where-bulls-see-it-going.html",
    publishedAt: "2026-07-10T17:40:29+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "major-car-firms-found-not-to-have-instal-6e261002",
    title: "Major car firms found not to have installed emissions-cheating devices",
    titleJa: "大手自動車会社が排ガス不正装置を設置していなかったことが判明",
    summaryJa: "大手自動車会社が排ガス不正装置を設置していなかったことが判明- 公開されました",
    bodyOriginal: `Major car firms found not to have installed emissions-cheating devices
- Published
Vehicles from a host of major car manufacturers did not contain devices alleged to have allowed them to cheat on emissions tests, a judge at the High Court has ruled.
More than a dozen manufacturers are being sued by around 1.6 million motorists over claims that several diesel vehicles made from 2009 onwards contained "prohibited defeat devices" (PDDs).
The cases involved 20 "sample vehicles" made by five manufacturers: Mercedes-Benz, Renault, Nissan, Ford, and Peugeot and Citroen.
The 880,000 motorists claimed they had been misled about emissions tests.
The ten-week trial concluded in March and, in a 369-page ruling handed down today, Lady Justice Cockerill said most of the strategies did not constitute PDDs, with the exception of one in Mercedes cars that was removed in 2015, and another used in some Peugeot-Citroen vehicles.
The judgement said: "The Court rejected most of the principal allegations advanced against the manufacturers whose vehicles were examined at trial."
It added: "In the majority of instances, the Court found that the relevant strategy did not constitute a prohibited defeat device."
Mercedes welcomed the ruling but said it disagreed with the court judgement that one of its four sample vehicles was not compliant prior to the software update.
The German carmaker said: "In our view, the emission control software functionalities are justifiable on both technical and legal grounds. We are actively considering all of our available options, including a potential appeal."
Peugeot-Citroën has yet to comment.
Those taking legal action either bought, leased or otherwise acquired a diesel vehicle made by one of the companies, with most living in England and Wales.
Barristers for the motorists told the trial the devices installed in the cars allowed the vehicles to detect when they were being tested and alter the amount of harmful emissions produced so they fell within emissions regulations.
However, the court found that not every calibration or emissions-control strategy amounted to a defeat device.
"For a defeat device to be found, there needs to be an intention to cause the emissions control system to operate differently when it senses it is being tested," the judge found.
"It was not enough for the Claimants simply to establish that the challenged strategies reduced the effectiveness of emissions-control systems outside the relevant testing conditions."
Solicitors for the claimants did note that Justice Cockerill said "if an alternative approach to the meaning of 'defeat device' were taken, a larger number of devices would be established, including devices in each of the lead manufacturers cars".
James Oldnall, managing partner at Milberg, which represented some of the claimants, said: "We are pleased that the court has ruled that Mercedes installed illegal defeat devices, just like Volkswagen.
"The fight is not over on this case, but the first domino has fallen. We are on the right path and will continue pushing to hold these carmakers to account."
A further trial is also scheduled for October this year to determine the consequences of any actionable breaches and any issues relating to damages or other remedies.
This case only examined 20 sample vehicles made by Mercedes-Benz, Renault, Nissan, Ford, and Peugeot and Citroen. The wider case also involves models made by Opel and Vauxhall, Volkswagen and Porsche, Jaguar Land Rover, BMW, FCA and Suzuki, Volvo, Hyundai-Kia, Toyota and Mazda.
The dieselgate scandal first emerged in September 2015, when the US Environmental Protection Agency accused Volkswagen of installing software - which became known as "defeat devices" - on diesel cars to lower readings of the cars' nitrogen oxide emissions.
This software recognised when cars were undergoing official emissions tests, and turned on systems designed to reduce their output of nitrogen dioxide, a gas which can cause respiratory problems.
But when the cars were used on the road, the systems were turned off, in order to improve performance. The net result was that cars produced significantly higher levels of pollution in everyday use than official figures suggested.
VW later admitted the defeat devices had been used deliberately to circumvent emissions tests in the US, and had been fitted to some 11 million cars worldwide.
It has paid out some £27.8bn worldwide in fines and compensation over the scandal, mostly in the US. That includes £193m paid to 91,000 British motorists.
As part of the High Court trial in London, barristers for the car owners cited a report from the Centre for Research on Energy and Clean Air.
It found that excess nitrogen oxide - the emission created by diesel engines - had caused 124,000 premature deaths and 98,000 new cases of asthma in children in the UK and Europe between 2009 and 2024.`,
    bodyJa: `大手自動車会社が排ガス不正装置を設置していなかったことが判明
- 公開されました
多くの大手自動車メーカーの車両には、排ガス検査での不正行為を可能にしたとされる装置は搭載されていなかったと高等裁判所の判事が判決した。
2009年以降に製造された数台のディーゼル車に「禁止された無効装置」（PDD）が搭載されていたとして、十数社のメーカーが約160万人の運転者から訴訟を起こされている。
この事件には、メルセデス・ベンツ、ルノー、日産、フォード、プジョーとシトロエンの５社が製造した２０台の「サンプル車両」が関係していた。
88万人の運転者は、排ガス検査について誤解されたと主張した。
10週間に及ぶ裁判は3月に結審し、本日言い渡された369ページの判決の中で、コケリル判事は、2015年にメルセデス車に使用された戦略と、一部のプジョー・シトロエン車に使用された戦略を除いて、ほとんどの戦略はPDDに該当しないと述べた。
判決は、「裁判所は、自動車が裁判で検査されたメーカーに対して提起された主な申し立てのほとんどを棄却した」と述べた。
さらに、「大半の事例において、裁判所は、当該戦略が禁止された敗北手段に該当しないと判断した」と付け加えた。
メルセデスは今回の判決を歓迎したが、4台のサンプル車両のうち1台がソフトウェアアップデート前に適合していなかったとする裁判所の判決には同意できないと述べた。
ドイツの自動車メーカーは、「我々の見解では、排出ガス制御ソフトウェアの機能は技術的および法的根拠の両方で正当化される。我々は、潜在的な控訴を含め、利用可能なすべての選択肢を積極的に検討している」と述べた。
プジョー・シトロエンはまだコメントしていない。
法的措置を講じた人々は、いずれかの会社が製造したディーゼル車を購入、リース、その他の方法で取得しており、大半はイングランドとウェールズに住んでいる。
自動車運転者側の法廷弁護士らは公判で、車に設置された装置により、車両が試験を受けていることを検知し、排出規制内に収まるように発生する有害な排気ガスの量を変更できるようになったと述べた。
しかし、裁判所は、すべての校正や排出制御戦略が敗北装置に相当するとは限らないと認定した。
「無効装置が認定されるためには、排出ガス制御システムがテストされていると感知したときに、異なる動作をさせる意図が必要である」と裁判官は認定した。
「原告らは、問題となった戦略が関連する試験条件外で排出制御システムの有効性を低下させたと立証するだけでは十分ではなかった。」
原告側の弁護士らは、コッケリル判事が「もし『敗北装置』の意味に別のアプローチが取られれば、主要メーカーの各自動車の装置を含め、より多くの装置が確立されるだろう」と述べたことに留意した。
原告の一部を代理したミルバーグ社のマネージングパートナー、ジェームス・オールドナル氏は、「メルセデスがフォルクスワーゲンと同様に違法な無効装置を設置したと裁判所が判断したことを嬉しく思う」と語った。
「この事件の戦いは終わっていないが、最初のドミノは倒れた。私たちは正しい道を歩んでおり、今後もこれらの自動車メーカーの責任を問うよう努めていきます。」
今年10月には、訴訟の対象となる違反行為の結果や、損害賠償やその他の救済策に関する問題を判断するためのさらなる裁判も予定されている。
このケースでは、メルセデス・ベンツ、ルノー、日産、フォード、プジョー、シトロエンが製造した 20 台のサンプル車両のみを調査しました。より広いケースには、オペルとボクソール、フォルクスワーゲンとポルシェ、ジャガー・ランドローバー、BMW、FCA、スズキ、ボルボ、ヒュンダイ・起亜自動車、トヨタ、マツダが製造したモデルも含まれます。
ディーゼルゲートスキャンダルが最初に浮上したのは2015年9月で、米国環境保護庁はフォルクスワーゲンが車両の窒素酸化物排出量の測定値を下げるためにディーゼル車に「ディフィートデバイス」として知られるソフトウェアをインストールしていると非難した。
このソフトウェアは、自動車が公式の排ガス検査を受けていることを認識し、呼吸器系の問題を引き起こす可能性のある二酸化窒素の排出量を減らすように設計されたシステムをオンにしました。
しかし、車が道路で使用されるときは、パフォーマンスを向上させるためにシステムがオフになりました。最終的な結果は、自動車が日常使用で生成する汚染レベルが、公式の数字よりも大幅に高かったということだった。
VWは後に、このディフィート装置が米国での排ガス検査を回避するために意図的に使用され、世界中で約1100万台の車に取り付けられていたことを認めた。
同社はこのスキャンダルをめぐって世界中で約278億ポンドの罰金と賠償金を支払っており、主に米国で支払っている。これには英国の運転手9万1000人に支払われた1億9300万ポンドが含まれる。
ロンドンの高等裁判所での裁判の一環として、自動車所有者側の法廷弁護士らは、エネルギーとクリーンエア研究センターの報告書を引用した。
その結果、2009年から2024年の間に英国とヨーロッパで、ディーゼルエンジンから排出される過剰な窒素酸化物が、12万4,000人の小児の早期死亡と9万8,000人の新たな喘息発症を引き起こしたことが判明した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c0mye0d1297o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T16:18:08+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2090/live/3976f070-7c75-11f1-917a-91e958a7e786.jpg",
    readTime: 6,
  },
  {
    id: "stablecoin-issuer-circle-just-got-the-gr-cfd1ef5f",
    title: "Stablecoin issuer Circle just got the greenlight to operate as a bank. The shares are up 7%",
    titleJa: "ステーブルコイン発行会社Circleは、銀行としての運営にゴーサインを出したところだ。株価は7%上昇",
    summaryJa: "ステーブルコイン発行会社サークルは、金曜日に米国通貨監督庁（OCC）が信託銀行としての運営を認可したことを受けて急騰したと同社は述べた。同社の株価は７％以上上昇した。",
    bodyOriginal: `Stablecoin issuer Circle surged after the U.S. Office of the Comptroller of the Currency, or OCC, granted it approval Friday to operate as a trust bank, the company said.
Shares of the company gained more than 7%.
The approval gives the company the ability to manage reserves directly for its regulated stablecoins, primarily the USDC stablecoin, which has more than $73 billion in circulation. The new bank will operate under the name Circle National Trust. Previously, Circle needed third-party banks and custodians to hold the cash and Treasury assets backing USDC.
The charter does not greenlight Circle to operate as a commercial bank that takes deposits and makes loans.
The news reflects a broader trend in the crypto industry, where companies are trying to make a big shift from being financial applications to financial infrastructure. Recent OCC actions have included approvals or applications from Coinbase, BitGo, Fidelity Digital Assets, Ripple and Paxos, reflecting the race to own more of the regulated financial stack.
Additionally, the charter gives Circle a national bank regulator, rather than being subject to state-based regulation – a major pain point for fast-paced startups playing in the heavily regulated financial services industry. Instead of a single rulebook, companies regularly face 50 slightly different ones that not only can slow growth but also increase costs.
The stablecoin race has been heating up after Washington nearly a year ago brought greater regulatory clarity to digital assets with the GENIUS Act, which established a federal framework for payment stablecoins.
As a result, traditional financial firms increasingly want to issue their own stablecoins – which presents a growing competitive challenge for USDC – because they can capture payment flows, deepen customer relationships and build financial services on top of programmable digital dollars rather than relying on third-party issuers like Circle.
The OCC charter approval comes on the same day global financial messaging network Swift launched a blockchain consortium with 17 banks, including Citi and HSBC, in a 24/7 payments push to help it compete in the stablecoin race.
Also in June, a consortium of more than 140 companies — including Blackrock, Coinbase, Mastercard, Stripe and Visa — joined the new Open USD (OUSD) stablecoin effort, where reserve yields are distributed to participating partners rather than a single issuer.
The OCC has not responded to a CNBC request for comment.`,
    bodyJa: `ステーブルコイン発行会社サークルは、金曜日に米国通貨監督庁（OCC）が信託銀行としての運営を認可したことを受けて急騰したと同社は述べた。
同社の株価は７％以上上昇した。
この承認により、同社は規制対象のステーブルコイン、主に730億ドル以上の流通量があるUSDCステーブルコインの準備金を直接管理できるようになった。新しい銀行はサークル・ナショナル・トラストという名前で運営される。以前、サークルはUSDCを支援する現金と財務資産を保持するために第三者の銀行とカストディアンを必要としていました。
この憲章は、Circle が預金の受け入れと融資を行う商業銀行としての運営にゴーサインを出しているわけではありません。
このニュースは、企業が金融アプリケーションから金融インフラへの大きな転換を図ろうとしている暗号業界の広範な傾向を反映している。最近の OCC の動きには、規制対象の金融スタックをより多く所有する競争を反映して、Coinbase、BitGo、Fidelity Digital Assets、Ripple、Paxos からの承認または申請が含まれています。
さらに、この憲章により、Circle は州ベースの規制の対象となるのではなく、国の銀行規制当局となることになります。これは、規制の厳しい金融サービス業界で活動するペースの速い新興企業にとっては大きな悩みの種です。企業は、単一のルールブックではなく、成長を遅らせるだけでなくコストを増加させる可能性がある、わずかに異なる 50 のルールブックに常に直面しています。
ワシントン州がほぼ1年前、支払いステーブルコインのための連邦枠組みを確立したGENIUS法によりデジタル資産に対する規制の明確化を図って以来、ステーブルコイン競争は激化している。
その結果、従来の金融会社は独自のステーブルコインを発行することをますます望んでいますが、これはUSDCにとってますます競争上の課題となっています。なぜなら、サークルのようなサードパーティの発行会社に依存するのではなく、支払いフローを把握し、顧客との関係を深め、プログラム可能なデジタルドルの上に金融サービスを構築できるからです。
OCC憲章の承認は、世界的な金融メッセージングネットワークであるスウィフトが、ステーブルコイン競争での競争を支援するため、シティやHSBCを含む17銀行と24時間365日の決済を推進するブロックチェーンコンソーシアムを立ち上げたのと同じ日に行われた。
また6月には、Blackrock、Coinbase、Mastercard、Stripe、Visaを含む140社以上の企業からなるコンソーシアムが、単一の発行体ではなく参加パートナーに準備金利回りが分配される新しいOpen USD（OUSD）ステーブルコインの取り組みに参加した。
OCCはCNBCのコメント要請に応じていない。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/circle-gets-an-occ-bank-charter-as-stablecoin-competition-heats-up-shares-surge-14percent.html",
    publishedAt: "2026-07-10T14:42:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "sk-hynix-stock-set-for-nasdaq-debut-open-af6ea921",
    title: "SK Hynix stock set for Nasdaq debut, opening the trillion-dollar chip giant to U.S. investors",
    titleJa: "SKハイニックス株がナスダックデビューを目指し、1兆ドル規模の半導体大手を米国の投資家に開放",
    summaryJa: "SKハイニックスは金曜日にナスダックに上場する予定で、米国の投資家に韓国で2番目に時価総額の高い企業に直接投資する機会が与えられる。同株は火曜日現在、ティッカーシンボルSKHYV、SKHYで取引される。",
    bodyOriginal: `SK Hynix is set to debut on the Nasdaq on Friday, giving U.S. investors an opportunity to invest directly in South Korea's second most valuable company.
The stock will trade under the ticker symbol SKHYV, and SKHY as of Tuesday.
The company's American depositary receipts, or ADRs, were priced at $149, raising $26.5 billion for its aggressive expansion plans, which includes investing in new factories and equipment.
"It's a kind of dream, and now it's a dream come true," SK Hynix Chairman Chey Tae-won told CNBC's Kristina Partsinevelos on Friday.
SK Hynix trails only Samsung by market cap in its home country. Like its larger rival, the company makes computer memory, which is used by phones and PCs to store short-term data. SK Hynix's roster of customers includes some of the biggest names in technology, such as Nvidia and Apple.
Memory, for decades, was tucked in a sleepy corner of the semiconductor world, but the artificial intelligence boom has turned it into a massive growth market.
Tae-won told CNBC that when he meets with customers and partners, everybody expects more chips. He said that even when SK Hynix announced it would double capacity within five years, customers said they still need more.
"All my customers said that, 'Well, that's not enough, man, and, well, we need more,'" Tae-won said Friday.
SK Hynix's valuation has risen more than sevenfold over the past year as demand for AI infrastructure has caused a shortage in computer memory and sent prices skyrocketing.
SK Hynix is the leader in the high-performance memory that's used in AI chips from Nvidia, the world's most valuable company. Compared to RAM for phones or laptops, AI chips require high-bandwidth memory, or HBM, which is created through a complex process that involves stacking many layers of traditional memory together.
Some of that HBM will be packaged in the U.S. after the company announced a $4 billion advanced packaging plant in Indiana. But the vast majority of SK Hynix's planned expansion over the coming years will take place in South Korea. That includes a cluster of chip fabrication plants in Yongin that will cost $390 billion.
SK Hynix's listing comes about a month after Elon Musk's SpaceX went public in the largest IPO on record.`,
    bodyJa: `SKハイニックスは金曜日にナスダックに上場する予定で、米国の投資家に韓国で2番目に時価総額の高い企業に直接投資する機会が与えられる。
同株は火曜日現在、ティッカーシンボルSKHYV、SKHYで取引される。
同社の米国預託証券（ADR）の価格は149ドルで、新しい工場や設備への投資を含む積極的な拡大計画のために265億ドルを調達した。
SKハイニックスのチェイ・テウォン会長は金曜日、CNBCのクリスティーナ・パルシネヴェロスに対し、「これは一種の夢であり、今では夢が実現した」と語った。
SKハイニックスは本国での時価総額でサムスンに唯一及ばない。同社の大手ライバルと同様に、同社は携帯電話や PC が短期データを保存するために使用するコンピューター メモリを製造しています。 SK ハイニックスの顧客名簿には、Nvidia や Apple などのテクノロジー業界の大手企業が含まれています。
メモリは何十年もの間、半導体業界の閑静な片隅に隠されていましたが、人工知能ブームにより、メモリは巨大な成長市場に変わりました。
テウォン氏はCNBCに対し、顧客やパートナーと会うときは誰もがより多くのチップを期待していると語った。同氏は、SKハイニックスが5年以内に生産能力を2倍にすると発表したときでも、顧客はまださらなる生産能力が必要だと述べたと述べた。
「私の顧客は皆、『まあ、それだけでは十分ではない、もっと必要だ』と言いました」とテウォンさんは金曜日に語った。
AIインフラへの需要がコンピューターのメモリ不足を引き起こし、価格が高騰したため、SKハイニックスの評価額は過去1年間で7倍以上に上昇した。
SK Hynix は、世界で最も価値のある企業である Nvidia の AI チップに使用される高性能メモリのリーダーです。携帯電話やラップトップの RAM と比較して、AI チップには高帯域幅メモリ (HBM) が必要です。HBM は、従来のメモリを何層にも積み重ねる複雑なプロセスを通じて作成されます。
同社がインディアナ州に40億ドルを投じて先進的なパッケージング工場を建設すると発表した後、そのHBMの一部は米国でパッケージ化される予定だ。しかし、SKハイニックスが今後数年間に計画している拡大の大部分は韓国で行われる。これには、3,900億ドルの費用がかかる龍仁のチップ製造工場群も含まれる。
SKハイニックスの上場は、イーロン・マスク氏のスペースXが史上最大のIPOで上場してから約1カ月後に行われた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/sk-hynix-skhy-stock-nasdaq.html",
    publishedAt: "2026-07-10T14:38:32+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "can-you-pass-this-money-quiz-1e8fd013",
    title: "Can you pass this money quiz?",
    titleJa: "あなたはこのお金のクイズに合格できますか?",
    summaryJa: "また、若者がどのように住宅を購入するか、トランプ氏のアカウントの詳細、および3つの株式審査も行われます。",
    bodyOriginal: `Also: How young people buy homes, the Trump-account lowdown and three stock screens.`,
    bodyJa: `また、若者がどのように住宅を購入するか、トランプ氏のアカウントの詳細、および3つの株式審査も行われます。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/can-you-pass-this-money-quiz-e1163a9e?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T14:33:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-81123805",
    readTime: 2,
  },
  {
    id: "trump-says-he-won-t-sign-housing-bill-wh-53571a46",
    title: "Trump says he won't sign housing bill, which would become law automatically",
    titleJa: "トランプ大統領、自動的に成立する住宅法案には署名しないと表明",
    summaryJa: "ドナルド・トランプ大統領は金曜日、物議をかもしている選挙法案を共和党が可決できなかったことに抗議して、議会が先月可決した超党派の住宅法案には署名しないと述べた。しかし、「21世紀住宅法への道」と呼ばれる住宅手頃な価格法案は、トランプ大統領が拒否権を発動しない限り、土曜日に自動的に成立する予定である。",
    bodyOriginal: `President Donald Trump on Friday said he will not sign a bipartisan housing bill that Congress passed last month, in protest of Republicans' failure to pass a controversial election measure.
But the housing affordability bill, dubbed the 21st Century ROAD to Housing Act, is nevertheless set to become law automatically on Saturday — unless Trump vetoes it.
The U.S. Constitution says that if the president does not return a bill within 10 days of receiving it, the bill "shall be a Law," as if he had signed it. The White House, when asked if Trump would veto the bill, referred CNBC to the president's Truth Social post saying he would not sign it.
Trump has pushed his GOP allies to make the election bill, called the SAVE America Act, their top legislative priority before the November midterms, when Democrats hope to retake at least one chamber of Congress. The bill purports to cut down on non-citizens voting in U.S. elections, even though that is already federally illegal and happens rarely, among other provisions.
Trump has previously suggested he will refuse to sign other bills until the election legislation becomes law, and last month abruptly canceled a scheduled signing ceremony for the housing bill on those grounds.
In his Truth Social post, Trump wrote, "I will not sign the Housing Bill, which has been fully approved by Congress and sent to the White House, in PROTEST over the fact that the United States Senate is not capable of passing THE SAVE AMERICA ACT."
"THE SAVE AMERICA ACT'S non-passage is CRAZY, and a serious threat to any politician who votes against it!" Trump wrote. He also claimed that the bill has broad support from Americans, despite polls that have shown otherwise.
The president also repeated his demand for Republicans to eliminate the Senate filibuster rules — which require 60 votes to pass most legislation instead of a 51-vote majority — in order to pass the election bill and other GOP priorities.
The Senate's Republican leaders, who have long defended the filibuster, have so far rebuffed Trump's demands to ditch the procedural rules. Senate Majority Leader John Thune, R-S.D., last month said Republicans do not currently have the votes to eliminate the filibuster and ram through the SAVE America Act.
Democrats, who have centered their political messaging around affordability ahead of the midterms, pounced on Trump's initial refusal to sign the housing bill as proof of his indifference to Americans' cost-of-living concerns.
Days after that cancellation, Trump called the housing bill "a big yawn" compared to the SAVE America Act.
Trump's Friday morning announcement that he would not sign the housing bill at all spurred fresh accusations that the president, who reported making more than $2.2 billion in income last year, does not care about housing costs.
"Republicans would rather make it harder to vote than easier to afford a home. When people show you who they are, believe them," House Minority Leader Hakeem Jeffries, D-N.Y., wrote in an X post responding to Trump.
Rep. Jason Crow, D-Colo, wrote on X, "The rising cost of mortgages and rent are hitting Americans hard. Yet Trump refuses to act."
Trump's announcement came one day after the National Association of Realtors reported that home prices last month rose to the highest level on record.
The median price of an existing home sold in June was $440,600, an increase of 1.8% from the year before, according to the association's report.
This is breaking news. Please refresh for updates.`,
    bodyJa: `ドナルド・トランプ大統領は金曜日、物議をかもしている選挙法案を共和党が可決できなかったことに抗議して、議会が先月可決した超党派の住宅法案には署名しないと述べた。
しかし、「21世紀住宅法への道」と呼ばれる住宅手頃な価格法案は、トランプ大統領が拒否権を発動しない限り、土曜日に自動的に成立する予定である。
米国憲法は、大統領が法案を受け取ってから10日以内に法案を返さなかった場合、その法案は大統領が署名したかのように「法律となるものとする」と定めている。ホワイトハウスは、トランプ大統領がこの法案に拒否権を発動するかとの質問に対し、CNBCに大統領の真実ソーシャルへの投稿を紹介し、大統領は法案に署名しないと述べた。
トランプ大統領は、民主党が少なくとも一議院の奪還を目指す11月の中間選挙を前に、「SAVEアメリカ法」と呼ばれる選挙関連法案を立法上の最優先事項とするよう共和党の同盟国に促している。この法案は、他の規定の中でもとりわけ、連邦政府によってすでに違法であり、めったに起こらないにもかかわらず、米国の選挙における非国民の投票を削減することを目的としている。
トランプ大統領はこれまで、選挙法が成立するまでは他の法案への署名を拒否する意向を示唆しており、先月にはそれらを理由に予定されていた住宅法案の署名式を突然キャンセルした。
トランプ大統領は真実ソーシャルへの投稿で、「米国上院が『アメリカ救援法』を通過させる能力がないという事実に抗議して、議会で完全に承認されホワイトハウスに送られた住宅法案には署名しない」と書いた。
「アメリカ救援法の未可決は常軌を逸しており、これに反対票を投じる政治家にとっては深刻な脅威だ！」トランプ氏は書いた。同氏はまた、世論調査ではそうではないことが示されているにもかかわらず、この法案はアメリカ国民から広く支持されていると主張した。
大統領はまた、選挙法案や他の共和党の優先事項を可決するために、ほとんどの法案を可決するには過半数の51票ではなく60票を必要とする上院議事妨害ルールを撤廃するよう共和党に要求を繰り返した。
上院共和党指導部は長年議事妨害を擁護してきたが、これまでのところ手続き規則の廃止を求めるトランプ大統領の要求を拒否している。ジョン・チューン上院多数党院内総務（共和党、SD）は先月、共和党には現時点でフィリバスターを廃止し、SAVE America Actを強行採決するための票を持っていないと述べた。
中間選挙に先立ち、手頃な価格を政治的メッセージの中心に据えてきた民主党は、トランプ大統領が最初に住宅法案への署名を拒否したことは、米国民の生活費の懸念に対するトランプ大統領の無関心の証拠だと激しく非難した。
その中止から数日後、トランプ大統領は住宅法案をSAVE America Actと比較すると「大きなあくび」だと述べた。
トランプ大統領が金曜朝、住宅法案には全く署名しないと発表したことは、昨年の収入が22億ドル以上と報告している大統領が住宅費を気にしていないのではないかという新たな非難に拍車をかけた。
「共和党は、住宅購入を容易にするよりも投票を困難にすることを望んでいる。人々が自分の姿を見せたら、それを信じなさい」と下院少数党院内総務ハキーム・ジェフリーズ（民主党、ニューヨーク州）はトランプ大統領に返信するX投稿で書いた。
民主党のジェイソン・クロウ下院議員はXに「住宅ローンと家賃の上昇がアメリカ国民に大きな打撃を与えている。それなのにトランプは行動を拒否している」と書いた。
トランプ大統領の発表は、全米不動産業者協会が先月の住宅価格が過去最高水準に上昇したと報告した翌日に行われた。
同協会の報告書によると、6月に販売された中古住宅価格の中央値は44万600ドルで、前年比1.8％上昇した。
これは速報です。更新を確認するには更新してください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/trump-housing-bill-save-act-law.html",
    publishedAt: "2026-07-10T14:17:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "wildfire-in-southern-spain-leaves-at-lea-2656e03d",
    title: "Wildfire in southern Spain leaves at least 12 dead and 23 missing",
    titleJa: "スペイン南部の山火事、少なくとも12人が死亡、23人が行方不明",
    summaryJa: "スペイン南部の山火事、少なくとも12人が死亡、23人が行方不明- 公開されました",
    bodyOriginal: `Wildfire in southern Spain leaves at least 12 dead and 23 missing
- Published
At least 12 people have died and 23 others are missing in a wildfire in southern Spain, Andalusia's regional leader Juanma Moreno has said.
Four of the victims may be British, Andalusia officials say.
Hundreds of people are trying to contain the fire, which Moreno said appeared to have been caused by a downed power line. The flames then spread in a wooded area around Los Gallardos, Almería.
A sustained heatwave with temperatures of around 40C (104F) has caused wildfires across Southern Europe this summer. Firefighters have battled major incidents in France, Portugal and Spain, with thousands forced to leave their homes.
The bodies of the victims were found in and around the small village of Bédar, just outside Los Gallardos.
Antonio Sanz, Andalusia's health and emergencies minister, said the fire had been complex and rapid and the majority or even all of the victims may have been foreign nationals.
Four people were found trapped in their car, said Sanz, while eight other victims were found elsewhere, apparently trying to escape the flames.
He said the four in the car were believed to be "of British origin" and that the car had a steering wheel on the right. The UK Foreign Office has contacted Spanish authorities, a Downing Street spokesperson told PA news agency.
Belgian Foreign Minister Maxime Prévot said many Belgians had second homes in Spain and consular services were trying to contact "Belgians with whom they have not been able to get in touch".
Sanz said it was the "most devastating fire" that Andalusia had ever seen and said the victims had tried to escape via a "different route than that designated for evacuation".
Juanma Moreno said the deaths were a tragedy and he warned that the death toll could rise significantly. "Our hearts are heavy and we are devastated by grief," the regional president posted on social media.
Four people have been taken to hospital with serious burns and another four are described as less seriously hurt with minor burns and respiratory problems caused by heavy smoke.
"Everything appears to point to the collapse of a power line pole, although this will still need to be investigated," Moreno said on Cadena Ser radio, adding that those responsible for maintenance would be held accountable.
His remarks were later contested by electricity company Endesa, which said the fallen power line was inactive and did not belong to them.
Peter Chapman and his wife Shelagh, who own a holiday home a short drive from Los Gallardos, said they initially mistook the fire for a storm because of how quickly the smoke darkened the sky.
"The only way I can describe it is by thinking of how my mother used to describe the London bombings during the Second World War. It was surreal," Peter Chapman said.
"It's just terrible. People come away for a holiday and don't imagine something like this happening. To think that people may have lost their lives is very, very sad."
The fire also led to road closures, while 1,000 residents were evacuated, according to emergency services.
Spain's Military Emergency Unit (UME) said it had deployed 220 soldiers and 70 vehicles to the Almería region to combat the blaze.
The country's civil guard added 160 law enforcement personnel were involved in the emergency response, aiding evacuation, traffic control and searching for the origin of the fire.
With at least 12 people dead, this is already among the deadliest wildfires in Spanish history.
In 2005, 11 members of a firefighting team died when they became trapped by flames in the village of Riba de Saelices east of Madrid after a fire went out of control at a barbecue.
In 1984, 20 people died in a fire on the Canary Island of La Gomera.
In 1979, 21 people, including nine children, died in a forest fire near Lloret de Mar in northeastern Spain.
Prime Minister Pedro Sánchez said in May that Spain would deploy its largest-ever summer wildfire response this year, local media reported.
In June, Spain reached its highest daily average since 1950, and had days where it recorded its highest ever temperatures for that month. Temperatures as high as 42C (107.6F) were forecast in some parts of the country.
Last year, a record 393,000 hectares (971,000 acres) burned in Spain, according to the European Forest Fire Information System (EFFIS), more than six times the Spanish average for between 2006 and 2024.
Climate change is driving up temperatures around the world, and Europe is the fastest warming continent, heating up twice as fast as the global average, according to the Copernicus climate service.
This is causing increased summer heatwaves, greater pressure on Europe's water supply, and more intense wildfires.
Last year was the European Union's worst wildfire season since records began in 2006, with more than a record one million hectares - equivalent to about half the land area of Wales - burning across the EU.
The worsening fire season in the Mediterranean has been linked directly to climate change in a separate study by the World Weather Attribution group at Imperial College London.
Experts warn that more frequent and severe fires across Europe are likely to continue in the future.
Are you in the area? If it is safe to do so, share your story.
Get in touch
Have you been affected by the wildfires and extreme heat in Southern Europe? If it is safe to do so, get in touch.
UK bakes in 35C highs as heatwave to continue next week
- Published14 hours ago
Sign up for our Future Earth newsletter to keep up with the latest climate and environment stories with the BBC's Justin Rowlatt. Outside the UK? Sign up to our international newsletter here.`,
    bodyJa: `スペイン南部の山火事、少なくとも12人が死亡、23人が行方不明
- 公開されました
アンダルシア州の地域指導者フアンマ・モレノ氏は、スペイン南部の山火事で少なくとも12人が死亡、23人が行方不明になったと発表した。
アンダルシア当局によると、犠牲者のうち４人は英国人の可能性がある。
数百人が火災の鎮火に努めているが、モレノ氏は、火災は送電線の切れが原因とみられると述べた。その後、炎はアルメリア州ロス・ガヤルドス周辺の森林地帯に燃え広がった。
この夏、気温約40度（104度）の持続的な熱波により、南ヨーロッパ各地で山火事が発生した。消防士たちはフランス、ポルトガル、スペインで数千人が家を追われる大規模な事件と闘ってきた。
犠牲者の遺体はロス・ガヤルドスの郊外にあるベダルという小さな村とその周辺で発見された。
アンダルシア州の保健・緊急事態大臣アントニオ・サンス氏は、火災は複雑かつ急速であり、犠牲者の大半、あるいは全員が外国人だった可能性があると述べた。
サンツ氏によると、車の中に4人が閉じ込められているのが発見され、他の8人の犠牲者は炎から逃れようとしていたとみられる別の場所で発見されたという。
同氏は、車に乗っていた4人は「英国人」とみられ、車のハンドルは右側にあったと述べた。ダウニング街の広報担当者がPA通信に語ったところによると、英国外務省はスペイン当局に連絡を取ったという。
ベルギーのマキシム・プレヴォ外相は、多くのベルギー人がスペインに別荘を持っており、領事館は「連絡が取れないベルギー人」に連絡を取ろうとしていると述べた。
サンツ氏は、アンダルシアでこれまでに見た「最も壊滅的な火災」だったと述べ、犠牲者らは「指定された避難ルートとは別のルート」から逃げようとしたと述べた。
フアンマ・モレノ氏は、死者は悲劇だと述べ、死者数が大幅に増加する可能性があると警告した。同地域の会長はソーシャルメディアに「私たちの心は重く、悲しみに打ちひしがれている」と投稿した。
４人が重度の火傷を負って病院に運ばれ、他の４人は軽度の火傷と濃煙による呼吸器疾患を負った軽傷だという。
モレノ氏はカデナ・セル・ラジオで「すべてが送電線の柱の倒壊を示しているようだが、これについてはまだ調査が必要だ」と述べ、保守の責任者は責任を問われるだろうと付け加えた。
その後、彼の発言は電力会社エンデサによって異議を唱えられ、落電した送電線は停止していて自社のものではないと主張した。
ロス・ガヤルドスから車ですぐの場所に別荘を所有しているピーター・チャップマンさんと妻のシェラグさんは、煙があまりにも早く空を暗くしたため、当初は火災を嵐と間違えたと語った。
「それを説明できる唯一の方法は、母が第二次世界大戦中のロンドン爆撃をどのように説明していたかを考えることです。それは超現実的でした」とピーター・チャップマンは語った。
「本当にひどいことです。人々は休暇に来ていて、このようなことが起こるとは想像もしていません。命が失われたかもしれないと思うと、とてもとても悲しいです。」
救急隊によると、火災により道路が通行止めになり、住民１０００人が避難した。
スペイン軍緊急部隊（UME）は、火災対策のためアルメリア地域に兵士220人と車両70台を派遣したと発表した。
同国の民間警備隊は、法執行官160人が避難支援や交通規制、出火元の捜索などの緊急対応に携わったと付け加えた。
少なくとも12人が死亡し、これはすでにスペインの歴史の中で最も死者数の多い山火事の一つとなっている。
2005年、マドリード東のリバ・デ・サエリセス村でバーベキュー中に火災が発生し、炎に巻き込まれ消防団員11人が死亡した。
1984年、カナリア諸島のラ・ゴメラ島で火災が発生し、20人が死亡した。
1979年、スペイン北東部リョレト・デ・マル近郊の山火事で9人の子供を含む21人が死亡した。
地元メディアによると、ペドロ・サンチェス首相は５月、スペインは今年、史上最大規模の夏季山火事対策を展開すると述べた。
6月、スペインは1950年以来最高の日平均気温を記録し、その月の最高気温を記録した日もあった。国内の一部の地域では最高気温が42℃（107.6F）に達すると予想されている。
欧州森林火災情報システム（EFFIS）によると、昨年スペインでは記録的な39万3,000ヘクタール（97万1,000エーカー）が焼失し、これは2006年から2024年のスペイン平均の6倍以上となった。
コペルニクス気候局によると、気候変動により世界中で気温が上昇しており、ヨーロッパは最も温暖化が進んでいる大陸であり、世界平均の2倍の速さで気温が上昇しているという。
これにより、夏の熱波が増大し、ヨーロッパの水供給への圧力が増大し、山火事の激化が起こっています。
昨年は欧州連合（EU）で2006年の記録開始以来最悪の山火事シーズンとなり、EU全域で過去最高となる100万ヘクタール以上（ウェールズの陸地の約半分に相当）が燃えた。
インペリアル・カレッジ・ロンドンの世界気象帰属グループによる別の研究では、地中海における火災シーズンの悪化は気候変動に直接関係していることが判明した。
専門家らは、ヨーロッパ全土でより頻繁かつ深刻な火災が今後も続く可能性が高いと警告している。
お近くにいらっしゃいますか？安全であれば、あなたのストーリーを共有してください。
連絡する
南ヨーロッパの山火事と猛暑の影響を受けましたか?安全であれば、連絡してください。
英国では最高気温35度の猛暑が来週も続く
- 14 時間前に公開
Future Earth ニュースレターに登録して、BBC のジャスティン ロウラットによる気候と環境に関する最新の話題を入手してください。英国外ですか？こちらから国際ニュースレターにご登録ください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8e2382jk7jo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T14:08:26+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/738c/live/597cfe00-7c8e-11f1-aaf7-dd74e91b17e4.jpg",
    readTime: 6,
  },
  {
    id: "48-year-old-worked-at-a-garden-center-fo-cd1b114c",
    title: "48-year-old worked at a garden center for $17/hour to make ends meet: 'It's one of the best jobs I've ever had'",
    titleJa: "48歳は生計を立てるために園芸センターで時給17ドルで働いていた：「これは私がこれまでに経験した最高の仕事の1つです」",
    summaryJa: "「仕事がないと、自分が見えないと感じていました。仕事があれば、再び見られ、役に立ち、目的があると感じました」と、一時解雇後に職探しをしながら植物や花を販売していたレスリー・フライデーさんは言います。 「毎分が大好きでした。」",
    bodyOriginal: `I spent the spring this year working nearly every day at a local garden center, where I got paid $17 per hour, or slightly over Massachusetts' $15 minimum wage. I didn't make much, but it's one of the best jobs I've ever had.
When I applied, I was running out of funds. I'd been laid off from my job as a senior director of content in June 2025, part of a round of top-to-bottom cuts that affected dozens of positions across the organization. By January, my unemployment benefits had evaporated. My severance was nearly gone. And my bills didn't seem to care about either of those realities.
So I started applying for part-time positions while continuing to search for full-time roles in marketing and communications. I was transparent about all of this with the garden center hiring managers, who kindly added me to their team.
For about two months, I spent nearly nine hours outside multiple days a week, in all types of weather, doing physical labor and helping customers with questions about flowers, herbs, and vegetables. I was exhausted after a shift in ways I never was in my previous roles, and I loved every minute.
I realized after a couple weeks' work why that job meant so much to me.
1. I was surrounded by plants and wildlife
New England had been through a long, cold, snowy winter and I was sick of it. I was also tired of spending fruitless hours online searching for jobs, networking, and applying for positions that ghosted or rejected me. Being at the garden center fed my soul and reset my mind.
2. I got to serve people
I've always enjoyed helping other people, but I'd never worked in retail. During my first days on the job, I realized that everyone visiting the garden center was happy. They came in with a smile, relieved that winter was finally over, and they left with flowers I'd helped them choose. I was selling and sending them home with joy.
3. I regained a sense of purpose and identity
Without a job, I felt invisible. With a job, I felt seen, useful, and purposeful again.
I was devastated when I got laid off from my dream job last year. It felt like a spiritual amputation. The organization's leadership had talked about employees as if we were one big global family, and I'd believed it. When I lost my job, I didn't know who I was anymore.
Working at the garden center gave me an opportunity to return to my roots — pardon the pun — as a farmer's daughter who loves the reward that comes from a hard day's work.
4. I got out of my head and into my body
The days feel endless when you're looking for a job. I spent hours plagued by questions: Am I searching in the right places? Why did they reject me? Do I need to change professions? Will I ever get another job? Is there something wrong with me? It was a total mind game.
Physical labor prevented me from experiencing that endless swirl of questions and allowed me to focus on the task at hand: Water flowers. Unload trucks. Stock tables. Help customers. Repeat. Breathe. Relax.
5. I felt less isolated
Employment provides an automatic community, often with people who have similar interests and ideals. Many of my former coworkers had become good friends over the years. When my colleagues and I were laid off, we weren't allowed a proper goodbye. As time passed, I felt ashamed and isolated by my unemployment.
At the garden center, my new co-workers shared my interests in plants, gardening, and wildlife, and welcomed me wholeheartedly. I made friends, played with customers' dogs, and started recognizing the regulars. I found my people.
6. My managers were kind and caring
I hadn't experienced good management in years. My last bosses had created a toxic work environment in which people hesitated to speak up, question authority, or make mistakes.
In contrast, my garden center managers knew I'm a single mother of three school-age children. They scheduled me as many hours as my co-parenting allowed and remembered which days I had to leave early for school pick-up. I will forever be grateful for their kindness and generosity.
7. I made little money, and it didn't matter
My paychecks were modest. But after my first shifts, I calculated how much I'd made and thought about which bills I could pay. I knew the job would never cover all my expenses, and that I would need to rely on savings to stay afloat. Yet, somehow, it felt like that $17 per hour saved my life.
A new job in bloom
During my time at the garden center, I landed several interviews for full-time roles in my field and scheduled them for my days off. I got a winning offer on the 365th day after my layoff. I am now one month into my new role as a communications director for a health nonprofit, and I couldn't be happier.
It all feels a little surreal. I'm surrounded by kind people and strong managers who want to help others. I work hard and have fun. And I am once again financially stable. But it never was, nor is now, just about the money. It was about finding me again. It took me a year, and a wonderful detour among flowers and new friends, but I'm finally home.
And I still work at the garden center, every Sunday I can.
Leslie Friday is the Director of Communications at The Max Foundation, a global health nonprofit that helps people living with cancer and rare illness get access to medication, diagnostics, and support services across 80+ low- and middle-income countries. She is a writer, advocate, and mother of three children and one lovely mutt. She grew up on a farm in the Midwest but now happily calls New England her home.
Want to get ahead at work? Then you need to learn how to make effective small talk. In CNBC's new online course, How To Talk To People At Work, expert instructors share practical strategies to help you use everyday conversations to gain visibility, build meaningful relationships and accelerate your career growth. Sign up today!`,
    bodyJa: `今年の春、私は地元の園芸センターでほぼ毎日働き、時給は17ドル、つまりマサチューセッツ州の最低賃金15ドルをわずかに上回っていました。あまり稼げなかったけど、今まで経験した中で最高の仕事の一つです。
申請した時点では資金が不足していました。私は 2025 年 6 月にコンテンツ担当シニア ディレクターの職を解雇されました。これは、組織全体の数十の役職に影響を与える一連のトップからボトムへの削減の一環でした。 1月までに失業手当はなくなりました。私の退職金はほとんどなくなりました。そして、私の請求書はそれらの現実のどちらも気にしていないようでした。
そこで私はマーケティングとコミュニケーションのフルタイムの職を探し続けながら、パートタイムの職に応募し始めました。私は園芸センターの採用担当者にこのすべてについて透明性を持って伝え、親切にも私を彼らのチームに加えてくれました。
約 2 か月間、私は週に何日も、どんな天候でも 9 時間近くを屋外で過ごし、肉体労働をしたり、花、ハーブ、野菜に関する顧客の質問に答えたりしました。以前の役割では経験したことのない変化の後、私は疲れきっていましたが、どの瞬間も楽しかったです。
数週間働いた後、なぜその仕事が私にとってそれほど意味があるのか​​が分かりました。
1. 植物や野生動物に囲まれていました
ニューイングランドは長くて寒く、雪の多い冬を経験していて、私はそれにうんざりしていました。また、オンラインで仕事を探したり、ネットワーキングをしたり、幽霊になったり拒否されたりする求人に応募したりして無駄な時間を費やすことにうんざりしていました。園芸店にいると心に栄養が与えられ、心がリセットされました。
2. 人々に奉仕しなければなりません
私はいつも他の人を助けるのが好きでしたが、小売業で働いたことはありませんでした。仕事に就いて最初の数日間、園芸センターを訪れる人は皆幸せであることに気づきました。彼らは笑顔でやって来て、やっと冬が終わったと安心し、私が選ぶのを手伝った花を持って帰っていきました。私は喜んで売って家に送りました。
3. 目的意識とアイデンティティを取り戻しました
仕事がなければ、自分は見えないと感じていました。仕事を持つことで、私は再び注目され、役に立ち、目的を持っていると感じました。
昨年、夢だった仕事を解雇されたとき、私は打ちのめされました。それは精神的な切断のように感じました。組織の指導者たちは従業員について、あたかも私たちを 1 つの大きな世界的な家族であるかのように話しており、私もそれを信じていました。仕事を失ったとき、私はもう自分が何者なのか分かりませんでした。
園芸用品センターで働くことは、一日の苦労から得られる報酬が大好きな農家の娘として、自分のルーツに戻る機会を与えてくれました。
4. 頭から出て体の中に入った
仕事を探していると、日々が終わりのないように感じられます。私は何時間も疑問に悩まされました: 私は正しい場所を探していますか?なぜ彼らは私を拒否したのですか？職業を変える必要がありますか?いつか別の仕事に就くことはできるだろうか？私に何か問題があるのでしょうか？それは完全なマインドゲームでした。
肉体労働のおかげで、終わりのない疑問の渦を経験することがなくなり、花に水をやるという目の前の仕事に集中することができました。トラックから荷物を降ろします。在庫表。顧客を助ける。繰り返す。息をする。リラックス。
5. 孤立感が減った
雇用により自動的にコミュニティが形成され、多くの場合、同じような興味や理想を持つ人々が集まります。私の元同僚の多くは、何年にもわたって良い友達になりました。同僚と私が解雇されたとき、適切な別れの挨拶は許されませんでした。時間が経つにつれて、私は失業していることを恥ずかしく思い、孤独を感じました。
園芸センターでは、新しい同僚が植物、ガーデニング、野生動物に対する私の興味を共有し、私を心から歓迎してくれました。友達ができたり、お客さんの犬と遊んだりして、常連さんたちのことも分かるようになりました。仲間を見つけました。
6. 私のマネージャーは親切で思いやりがありました
私は何年も良い経営を経験していませんでした。私の最後の上司たちは、人々が発言したり、権威に疑問を抱いたり、間違いを犯したりすることをためらう有害な職場環境を作り出していました。
対照的に、園芸センターのマネージャーたちは、私が 3 人の学齢期の子供を持つシングルマザーであることを知っていました。彼らは、私の共育が許す限り私の時間をスケジュールし、学校のお迎えのために早退しなければならない日を覚えていてくれました。私は彼らの優しさと寛大さに永遠に感謝するでしょう。
7. 稼いだお金はほとんどなかったが、それは問題ではなかった
私の給料は控えめでした。しかし、最初のシフトの後、私はいくら稼いだかを計算し、どの請求書を支払えるかを考えました。この仕事ですべての出費を賄えるわけではなく、生活していくためには貯蓄に頼る必要があることはわかっていました。それでも、どういうわけか、その時給 17 ドルが私の命を救ってくれたように感じました。
新しい仕事が開花中
園芸センターで働いている間、私は自分の分野でのフルタイムの仕事の面接をいくつか受け、休日に予定を入れました。解雇から 365 日目に当選オファーを受け取りました。私は現在、医療関連の非営利団体のコミュニケーション ディレクターとして新しい役割に就いて 1 か月が経ちますが、これ以上に幸せなことはありません。
どれも少し現実離れした感じがします。私の周りには、他人を助けたいと願う優しい人々と強いマネージャーがいます。私は一生懸命働き、楽しんでいます。そして私は再び経済的に安定しました。しかし、それは決してお金のためだけではなかったし、今もそうではありません。それは私を再び見つけることでした。 1年かかり、花と新しい友達の間で素晴らしい回り道をしましたが、ついに家に帰りました。
そして私は今でもできる限り毎週日曜日に園芸センターで働いています。
レスリー フライデーは、80 以上の低所得国および中所得国でがんや希少疾患を抱えて生きる人々が医薬品、診断、サポート サービスを利用できるよう支援する世界的保健非営利団体、マックス財団のコミュニケーション ディレクターです。彼女は作家、擁護者であり、3 人の子供と 1 匹の愛らしい雑種犬の母親でもあります。彼女は中西部の農場で育ちましたが、今ではニューイングランドを故郷と喜んで呼んでいます。
仕事で出世したいですか？次に、効果的な世間話をする方法を学ぶ必要があります。 CNBC の新しいオンライン コース「職場の人々と話す方法」では、専門のインストラクターが、日常会話を利用して認知度を高め、有意義な関係を構築し、キャリアの成長を促進するための実践的な戦略を共有します。今すぐサインアップしてください！`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/48-year-old-worked-at-a-garden-center-to-make-ends-meet-one-of-best-jobs-ever-had.html",
    publishedAt: "2026-07-10T13:42:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "man-nearly-sucked-out-of-window-mid-air-0983b925",
    title: "Man nearly sucked out of window mid-air on Ryanair plane, passengers say",
    titleJa: "ライアン航空の飛行機で男性が空中で窓から吸い出されそうになったと乗客が語る",
    summaryJa: "ライアン航空の飛行機で男性が空中で窓から吸い出されそうになったと乗客が語る- 公開されました",
    bodyOriginal: `Man nearly sucked out of window mid-air on Ryanair plane, passengers say
- Published
A passenger was reportedly nearly sucked out of a cabin window in mid-air on a Ryanair plane.
Witnesses told local media the man, said to be a Serbian citizen in his 60s, was left hanging head first out of the window as far as his shoulders for several minutes, before other passengers on the flight managed to pull him back inside.
In a statement, Ryanair said its Friday morning flight from the Greek city of Thessaloniki to Germany's Memmingen returned "shortly after take-off when a passenger window dislodged inflight".
It continued: "The aircraft landed normally and passengers returned to the terminal. One passenger requested and received medical assistance on the ground in Thessaloniki."
The Irish budget airline added that "a replacement aircraft was arranged to bring passengers to Memmingen" several hours later.
Media reports in Greece and Germany quoted passengers describing a loud bang followed by the window breaking and oxygen masks falling from the ceiling shortly after the Boeing 737 had taken off.
They believe the window was smashed by pieces of the jet's engine - although Ryanair has not commented on this.
"We immediately realised there had been a decompression. There were screams... for a moment I thought someone had accidentally opened the emergency door," Christina, a fellow passenger, told Radio Thessaloniki.
"The masks dropped and there was a strong smell. The head and shoulders of one passenger were outside the window. Fortunately, he hadn't taken off his seat belt."
The aircraft - believed to have been an 18 year-old-plane - was operated by Ryanair's subsidiary Malta Air.
The Irish Aviation Authority (IAA) later told the BBC that it "is aware of the incident involving a Ryanair group aircraft, registered and operated by Malta Air, departing Thessaloniki this morning".
"The IAA will provide any requested assistance to the aviation safety investigation authority in Greece and the Maltese Civil Aviation Directorate, to aid their investigation," it said.
In 2018, a passenger died when debris from a damaged engine caused a window to break on a Southwest Airlines flight in the US, and she was partially sucked out.
- Published11 June`,
    bodyJa: `ライアン航空の飛行機で男性が空中で窓から吸い出されそうになったと乗客が語る
- 公開されました
ライアン航空の旅客機で、乗客が空中で客室の窓から吸い出されそうになったという。
目撃者らが地元メディアに語ったところによると、この男性は60代のセルビア国民と言われており、数分間肩まで頭から窓の外にぶら下がったまま放置され、その後飛行機に乗っていた他の乗客が男性をなんとか室内に引き戻したという。
ライアンエアーは声明で、金曜午前のギリシャのテッサロニキ発ドイツのメミンゲン行便が「離陸直後、機内で乗客の窓が外れたため」引き返したと発表した。
さらに「航空機は正常に着陸し、乗客はターミナルに戻った。乗客１人はテッサロニキの地上で医療支援を要請し、受けた」と続けた。
アイルランドの格安航空会社は、数時間後に「乗客をメミンゲンに運ぶ代替機が手配された」と付け加えた。
ギリシャとドイツのメディア報道は、ボーイング737型機が離陸した直後、大きな衝撃音に続いて窓が割れ、酸素マスクが天井から落ちたと乗客が語ったと報じた。
彼らは、窓がジェット機のエンジンの破片によって割られたと信じているが、ライアンエアーはこれについてコメントしていない。
同乗客のクリスティーナさんは、「減圧が起こったことにすぐに気づきました。悲鳴が聞こえました…一瞬、誰かが誤って非常ドアを開けたのかと思いました」とラジオ・テッサロニキに語った。
「マスクが落ち、強い異臭がした。乗客１人の頭と肩が窓の外にあった。幸いシートベルトを外していなかった」。
この航空機は18年前の飛行機とみられ、ライアンエアの子会社マルタ航空が運航していた。
アイルランド航空局（IAA）は後にBBCに対し、「今朝テッサロニキを出発した、マルタ航空が登録・運航するライアンエアーグループの航空機が関与した事故を認識している」と語った。
「IAAは、ギリシャの航空安全調査当局とマルタ民間航空総局の調査を支援するため、要請があればあらゆる援助を提供する」と述べた。
2018年、米国のサウスウエスト航空便で、破損したエンジンの破片で窓が割れ、一部が吸い出された乗客が死亡した。
- 6 月 11 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgk65knkyzdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T12:31:08+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4c20/live/34d39400-7c5d-11f1-802c-e767a91f6051.jpg",
    readTime: 2,
  },
  {
    id: "delta-expects-higher-airfare-to-last-bri-f1ab95c7",
    title: "Delta expects higher airfare to last, bringing 2026 profit goal in reach, CEO says",
    titleJa: "デルタ航空は航空運賃の高騰が続き、2026年の利益目標は達成できるとCEOが語る",
    summaryJa: "デルタ航空の今年の利益目標は、同社が燃料コストの上昇を顧客に転嫁することで達成され、原油価格が数年ぶりの高値から下落しても価格決定権は続くと予想しているとエド・バスティアンCEOは予想している。「それは持続可能だと思う」とバスティアン氏はCNBCのインタビューで語った。同氏は、旺盛な需要、より多様な座席オプション、過去から学んでより規律ある航空業界のおかげで、運賃は堅調に推移する可能性が高く、原油価格が下落してもすぐに供給能力を拡大する可能性は低いと述べた。",
    bodyOriginal: `Delta Air Lines' profit goal is in reach this year as the carrier passes along higher fuel costs to customers, pricing power CEO Ed Bastian expects to last even as oil prices drop from multiyear highs.
"I think it's sustainable," Bastian told CNBC in an interview. He said fares will likely stay strong thanks to robust demand, more diverse seat options, and a more disciplined airline industry that's learned from the past and isn't likely to expand capacity as soon oil falls.
Delta on Friday forecast third-quarter per-share earnings of between $2.00 and $2.50, compared with analysts' estimates of $2.02 a share for the period. The company also projected revenue would be up in the mid-teens compared with the July-through-September period of 2025. For the full-year, the carrier reaffirmed its January per-share earnings forecast of between $6.50 and $7.50.
Here's what Delta reported for the second quarter compared with what Wall Street was expecting, based on consensus estimates from LSEG:
- Earnings per share: $1.56 adjusted vs. $1.48 expected
- Revenue: $17.67 billion adjusted vs. $17.53 billion expected
Bastian said demand is strong across the board, noting that Delta, the most profitable U.S. airline, caters to higher-income customers in the K-shaped economy.
Indeed, its premium seat sales outpaced the back of the plane in coach. Its premium tickets like first class brought in $6.92 billion in revenue for the quarter, while the main cabin reported $6.85 billion in revenue.
Bastian said World Cup demand was stronger than expected, including from inbound visitors to the U.S. In an earnings release, the airline also said corporate travel rose in the second quarter, with the aerospace and defense, banking, and automotive sectors leading growth.
Carriers have scaled back growth plans and pruned unprofitable flights after this year's record run-up in fuel, and airfares have surged. According to the latest federal data, May airfare was up nearly 27% compared with last year, though executives say they still haven't passed the entirety of the higher fuel bill on to consumers. Bastian said Delta was passing along about 60% to consumers, and that should get to close to 100% this quarter.
Delta's second-quarter revenue per available seat mile, a measure of how much an airline is bringing in for each seat it flies, was up 17% from a year earlier, though its cost-per-available seat mile rose 21%. (Delta has other revenue streams including cargo, a maintenance business and its fuel refinery.)
Delta's net income dropped 25% in the second quarter from a year earlier to $1.6 billion, or $2.44 a share, though operating revenue was up 19% from the 2025 period to $19.76 billion. Adjusting for one-time items including third-party refinery sales, Delta posted earnings of $1.03 billion, or $1.56 a share.
Delta's refinery was also a bright spot, with revenue in the Trainer, Pennsylvania, facility surging 83% to $2.09 billion.`,
    bodyJa: `デルタ航空の今年の利益目標は、同社が燃料コストの上昇を顧客に転嫁することで達成され、原油価格が数年ぶりの高値から下落しても価格決定権は続くと予想しているとエド・バスティアンCEOは予想している。
「それは持続可能だと思う」とバスティアン氏はCNBCのインタビューで語った。同氏は、旺盛な需要、より多様な座席オプション、過去から学んでより規律ある航空業界のおかげで、運賃は堅調に推移する可能性が高く、原油価格が下落してもすぐに供給能力を拡大する可能性は低いと述べた。
デルタ航空は金曜日、第3四半期の1株当たり利益が2.00ドルから2.50ドルになると予想したが、これに対しアナリストは同期間の1株当たり利益を2.02ドルと予想していた。同社はまた、収益が2025年の7月から9月までの期間と比較して10分の1台半ばに増加すると予測した。通年については、航空会社は1月の一株当たり利益が6.50ドルから7.50ドルの間であるとの予測を再確認した。
以下は、LSEGからのコンセンサス推定に基づいて、デルタ航空が第2四半期に報告した内容とウォール街の予想を比較したものです。
- 1 株当たり利益: 調整後 1.56 ドル、予想 1.48 ドル
- 収益: 調整後 176 億 7000 万ドル、予想 175 億 3000 万ドル
バスティアン氏は、米国で最も収益性の高い航空会社であるデルタ航空がK字型経済の高所得層顧客に応えていることを指摘し、需要は全体的に強いと述べた。
実際、そのプレミアムシートの売上は、コーチの飛行機の後部を上回りました。ファーストクラスなどのプレミアム航空券は同四半期に69億2000万ドルの収益をもたらし、メインキャビンは68億5000万ドルの収益を報告した。
バスティアン氏は、米国への訪日客を含め、ワールドカップの需要が予想よりも強かったと述べた。同社は決算発表の中で、航空宇宙・防衛、銀行、自動車部門が成長を牽引し、第2四半期に法人旅行が増加したとも述べた。
今年の記録的な燃料高騰を受けて航空会社は成長計画を縮小し、不採算航空便を削減し、航空運賃が高騰した。最新の連邦データによると、5月の航空運賃は前年比27％近く上昇したが、政府幹部らは燃料代の高騰分をまだ全額消費者に転嫁していないとしている。バスティアン氏は、デルタ航空は約60％を消費者に還元しており、今四半期には100％に近づくはずだと述べた。
デルタ航空の第2四半期の空席マイル当たりの収益（航空会社が運航する座席ごとにどれだけの収益をもたらしているかを示す指標）は、前年同期比17％増加したが、空席マイル当たりのコストは21％増加した。 （デルタ航空には、貨物、メンテナンス事業、燃料精製所など、他の収益源もあります。）
デルタ航空の第２・四半期の純利益は前年同期比２５％減の１６億ドル（１株当たり２．４４ドル）となったが、営業収益は２０２５年比１９％増の１９７億６０００万ドルとなった。第三者製油所の売上高など一時項目を調整すると、デルタ航空は10億3000万ドル（1株あたり1.56ドル）の利益を計上した。
デルタ航空の製油所も明るい話題で、ペンシルベニア州トレーナー施設の収益は83％増の20億9000万ドルとなった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/delta-air-lines-dal-q2-2026-earnings.html",
    publishedAt: "2026-07-10T11:59:16+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "meta-found-to-breach-eu-laws-with-addict-d33271ef",
    title: "Meta found to breach EU laws with 'addictive' Instagram, Facebook designs",
    titleJa: "Meta、「中毒性のある」InstagramとFacebookのデザインでEU法に違反していることが判明",
    summaryJa: "InstagramとFacebookの「中毒性のある」デザインにより、Metaは欧州連合のデジタル法に違反しているとEUは金曜日の予備報告書で結論づけた。欧州委員会は、この巨大テクノロジー企業が、未成年者や弱い立場にある成人を含むユーザーの身体的健康に影響を与える設計機能に関連するリスクを適切に考慮しなかったことで、EUのデジタルサービス法に違反したと述べた。",
    bodyOriginal: `Instagram and Facebook's "addictive" designs have put Meta in breach of the European Union's digital laws, the EU concluded Friday in a preliminary report.
The tech giant violated the EU's Digital Services Act by failing to adequately consider the risks associated with design features that affected the physical well-being of its users, including minors and vulnerable adults, the European Commission said.
These features include infinite scroll, which constantly shows fresh content, autoplay, push notifications and highly personalized recommendation systems — feeding users' compulsion to continue using platforms and putting them into "autopilot mode."
The EU Commission also accused Meta of ignoring available information about how much time young people are spending on Instagram or Facebook at night, and how different types of content formats, from reels to stories, could lead to excessive use of its services.
It adds that Meta hasn't done enough to mitigate these risks and needs to change the design of its features, going as far as disabling "autoplay" and "infinite scroll" by default and enforcing "screen time breaks."
Meta is facing a fine of up to 6% of its total annual turnover if the Commission's findings are confirmed.
"We disagree with these preliminary findings, which don't accurately take into account the significant steps we've taken to protect teens," a spokesperson from Meta said.
Since the investigation began, Meta has rolled out Teen Accounts that "automatically protect teens and put parents in control" by allowing them to block access at night and cap daily screen time at 15 minutes, the tech giant said.
"We share the European Commission's commitment to providing teens with safe, positive online experiences and will continue to engage constructively with them," it added.
This is the second time this year that the EU Commission has found Meta to have breached its rules; in April, it said the company had failed to prevent under-13s from accessing its platforms.
Meta has faced a slew of intense scrutiny over its handling of the safety of users on its platforms this year, including two high-profile U.S. court rulings in March. The first found that the platform's design contributed to addiction and mental health harms in young people, while the other determined that it misled users about children's safety on its platforms.
Meta told CNBC at the time that it disagrees with the findings: "We're clear that Instagram and Facebook are intended for people aged 13 and older and we have measures in place to detect and remove accounts from anyone under that age."`,
    bodyJa: `InstagramとFacebookの「中毒性のある」デザインにより、Metaは欧州連合のデジタル法に違反しているとEUは金曜日の予備報告書で結論づけた。
欧州委員会は、この巨大テクノロジー企業が、未成年者や弱い立場にある成人を含むユーザーの身体的健康に影響を与える設計機能に関連するリスクを適切に考慮しなかったことで、EUのデジタルサービス法に違反したと述べた。
これらの機能には、常に新しいコンテンツを表示する無限スクロール、自動再生、プッシュ通知、高度にパーソナライズされたレコメンデーション システムが含まれており、ユーザーがプラットフォームを使い続けたいという衝動に駆り立てられ、ユーザーを「自動操縦モード」にします。
欧州委員会はまた、メタ社が夜間に若者がインスタグラムやフェイスブックにどれだけの時間を費やしているのか、リールからストーリーズまでさまざまな種類のコンテンツ形式がどのように自社サービスの過剰利用につながる可能性があるのか​​などについて、入手可能な情報を無視していると非難した。
さらに、Meta はこれらのリスクを軽減するのに十分ではなく、デフォルトで「自動再生」と「無限スクロール」を無効にし、「スクリーンタイムブレイク」を強制するなど、機能の設計を変更する必要があると付け加えた。
委員会の調査結果が確認された場合、メタは年間総売上高の最大6％の罰金を科されることになる。
メタ社の広報担当者は、「われわれはこれらの予備調査結果に同意できない。この調査結果は、十代の若者たちを守るためにわれわれが講じてきた重要な措置を正確に考慮していない」と述べた。
調査が始まって以来、メタ社は、夜間のアクセスをブロックし、1日のスクリーンタイムを15分に制限できるようにすることで「十代の若者を自動的に保護し、親が管理できるようにする」十代のアカウントを展開したとテクノロジー大手は述べた。
「我々は十代の若者たちに安全で前向きなオンライン体験を提供するという欧州委員会の取り組みを共有しており、今後も彼らと建設的に関わっていく」と付け加えた。
欧州委員会がメタの規則違反を認定するのは今年2回目となる。同社は4月、同社が13歳未満の同社プラットフォームへのアクセスを阻止できなかったと発表した。
メタは今年、3月に注目を集めた2件の米国裁判所の判決を含め、プラットフォーム上でのユーザーの安全への対応をめぐって多くの厳しい監視にさらされている。 1つ目は、プラットフォームの設計が若者の依存症と精神的健康への害に寄与していると判断し、もう1つは、プラットフォーム上での子供の安全についてユーザーに誤解を与えていると判断した。
メタ氏は当時CNBCに対し、調査結果に同意できないと述べ、「インスタグラムとフェイスブックが13歳以上の人々を対象としているのは明らかであり、その年齢未満のアカウントを検出して削除する措置を講じている」と語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/meta-instagram-facebook-addictive-design-breach-eu-laws.html",
    publishedAt: "2026-07-10T11:48:12+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "easyjet-agrees-to-surprise-takeover-bid-0835e377",
    title: "EasyJet agrees to surprise takeover bid as rival US firm swoops in",
    titleJa: "イージージェット、ライバル米国企業の急襲を受けてサプライズ買収案に合意",
    summaryJa: "イージージェット、ライバル米国企業の急襲を受けてサプライズ買収案に合意- 公開されました",
    bodyOriginal: `EasyJet agrees to surprise takeover bid as rival US firm swoops in
- Published
No-frills airline EasyJet says it has agreed in principle to a £5.7bn takeover proposal from US firm Apollo Global Management - just days after accepting an offer from a rival suitor.
The carrier said Apollo's offer delivered "a superior outcome" to investors than the previous bid from US investment firm Castlelake that EasyJet had also agreed to in principle at the weekend.
EasyJet is one of Europe's largest airlines. It employs more than 19,000 people, and flies around 1,200 routes across 35 European countries.
It was founded by Sir Stelios Haji-Ioannou in 1995 to offer cheap air fares to Europe and, together with other carriers such as Ryanair, has transformed UK air travel.
Its first flights took off in November 1995 flying from Luton to Glasgow and Edinburgh, with its first international flights the following year.
Sir Stelios and the Haji-Ioannou family still own about a 15% stake in the airline.
EasyJet said Apollo's offer was worth £7.15 per share, compared with the £6.90 per share proposal from Castlelake which it said it was now "no longer minded" to accept. Castlelake declined to comment on the latest move.
Analysts say EasyJet is an attractive target as it is profitable, has a large fleet of aircraft, and has take-off and landing slots at major airports such as Gatwick and Paris Charles de Gaulle. The most popular slots can be worth tens of millions of pounds when traded between airlines.
Business as usual for passengers right now
Susannah Streeter, chief investment strategist at Wealth Club, said Apollo was focusing on EasyJet's potential.
"While the carrier has been buffeted recently by higher fuel costs and geopolitical turbulence, it has built a resilient European network, a strong balance sheet and, crucially, a fast-growing holidays business. That's likely to be one of Apollo's biggest attractions."
"Package holidays generate higher margins and more predictable revenues than airline tickets alone," she added.
"For passengers, it's very much business as usual for now, with flights, bookings and loyalty schemes unaffected while any deal works its way through the regulatory process."
The latest statement from EasyJet does not mean a deal has been confirmed. Apollo has been set a deadline of 17:00 on 7 August to either make a firm bid for EasyJet or walk away. Castlelake's deadline to make a firm offer is 3 August.
Apollo's move came after Castlelake had made a series of offers for EasyJet, which had initially been rebuffed by the carrier after it accused the US firm of trying to buy it "on the cheap".
However, on Sunday, EasyJet said it had reached an agreement in principle with Castlelake, a US investment firm, over a potential takeover offer worth around £5.2bn.
One significant regulatory hurdle to any EasyJet takeover is that European Union regulations stipulate the carrier must be majority-owned by EU citizens.
Castlelake had proposed going into partnership with two EU nationals, businessmen Peter Bellew and Mark Breen. They would own an EU-based company that would have majority control of the airline.
Apollo said it will take "all necessary steps" to meet any EU conditions surrounding the deal.
Shares in EasyJet jumped nearly 15% on Friday to stand at around 673p.
EasyJet said the offer from Apollo represented an 81% increase from its share price of £3.94 on 28 May, the last day of trading before the takeover interest from Castlelake was made public.
Until EasyJet reached agreement with Castlelake, it had accused the US firm of being "highly opportunistic" with its bids, the first of which was at 560p a share, arguing that its share price had been "temporarily depressed" partly due to the impact of Iran war on the travel sector.
"The bidding war now comes down to price," said Dan Coatsworth, head of markets at AJ Bell.
"The spotlight now turns back to the original suitor [Castlelake] to see if it will dig even deeper to beat Apollo. Shareholders will be putting their feet up and enjoying the ride."
Related topics
- Published4 days ago
- Published10 November 2025`,
    bodyJa: `イージージェット、ライバル米国企業の急襲を受けてサプライズ買収案に合意
- 公開されました
飾り気のない航空会社イージージェットは、ライバルの求婚者からの提案を受け入れてからわずか数日後に、米国企業アポロ・グローバル・マネジメントからの57億ポンドの買収提案に原則合意したと発表した。
同航空は、アポロの提案は、イージージェットも週末に大筋合意した米国の投資会社キャッスルレイクによる前回の入札よりも投資家に「優れた結果」をもたらしたと述べた。
EasyJet はヨーロッパ最大の航空会社の 1 つです。従業員は 19,000 名を超え、ヨーロッパ 35 か国の約 1,200 路線を運航しています。
1995 年にステリオス・ハジ・イオアノウ卿によってヨーロッパへの格安航空運賃を提供するために設立され、ライアンエアーなどの他の航空会社と協力して英国の航空旅行を変革しました。
1995 年 11 月にルートンからグラスゴーとエディンバラへの最初のフライトが離陸し、翌年には最初の国際線が開設されました。
ステリオス卿とハジ・イオアノウ家は今でも航空会社の株式の約15％を所有している。
イージージェットは、アポロの提案は一株当たり7.15ポンドの価値があると述べたが、キャッスルレイクからの提案は1株当たり6.90ポンドであり、現時点では「もはや受け入れる気はない」としている。キャッスルレイク氏は最新の動きについてコメントを控えた。
アナリストらは、イージージェットは収益性が高く、多数の航空機を保有し、ガトウィック空港やパリ・シャルル・ド・ゴール空港などの主要空港に離着陸枠を持っているため、魅力的な標的であるとしている。最も人気のあるスロットは、航空会社間で取引されると数千万ポンドの価値がある場合があります。
現在、乗客は通常通り営業しています
ウェルス・クラブの首席投資ストラテジスト、スザンナ・ストリーター氏は、アポロはイージージェットの可能性に注目していると述べた。
「この航空会社は最近、燃料費の高騰と地政学的な混乱によって打撃を受けているが、回復力のあるヨーロッパのネットワーク、強固なバランスシート、そして重要なことに、急速に成長しているホリデー事業を構築している。それがアポロの最大の魅力の一つだろう。」
「パッケージ旅行は航空券単体よりも高い利益率と予測可能な収益を生み出します」と彼女は付け加えた。
「乗客にとっては、現時点では通常通りの業務であり、航空券、予約、ロイヤルティ制度は影響を受けず、契約は規制手続きを経ている。」
イージージェットの最新の声明は、契約が確認されたことを意味するものではない。アポロ社には、イージージェットにしっかりと入札するか撤退するかの期限が8月7日17時に設定されている。キャッスルレイクが確約を提示する期限は8月3日である。
アポロ社の動きは、キャッスルレイク社がイージージェット社に一連のオファーを出していた後に行われたが、同社は同社がイージージェット社を「安く」買収しようとしていると非難し、当初は断られていた。
しかしイージージェットは日曜日、約52億ポンド相当の買収提案の可能性について米投資会社キャッスルレイクと大筋合意に達したと発表した。
イージージェット買収に対する大きな規制上のハードルの 1 つは、欧州連合の規制により、航空会社は EU 国民によって過半数を所有されなければならないと規定されていることです。
キャッスルレイク氏は、実業家のピーター・ベリュー氏とマーク・ブリーン氏という2人のEU国民と提携することを提案していた。彼らはEUに本拠を置く会社を所有し、その会社が航空会社の過半数を支配することになる。
アポロは、この合意を巡るEUの条件を満たすために「必要なあらゆる措置を講じる」と述べた。
イージージェットの株価は金曜日に15％近く上昇し、約673ペンスとなった。
イージージェットは、アポロからの提案は、キャッスルレイクからの買収権益が公表される前の取引最終日である５月２８日の株価３．９４ポンドから８１％上昇したと述べた。
イージージェット社はキャッスルレイク社と合意に達するまで、同社の入札は「極めて日和見主義的」であり、最初の入札額は1株当たり560ペンスであったと非難し、同社の株価は旅行セクターに対するイラン戦争の影響もあり「一時的に下落」したと主張していた。
ＡＪベルの市場責任者、ダン・コーツワース氏は「入札合戦は今や価格次第だ」と述べた。
「現在、スポットライトは最初の求婚者（キャッスルレイク）に戻り、アポロを倒すためにさらに深く掘り下げるかどうかが確認されています。株主は脚を上げて乗り心地を楽しむでしょう。」
関連トピック
- 4 日前に公開
- 2025 年 11 月 10 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgjxqq9jg8yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T09:38:07+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/18e4/live/9e552290-7c30-11f1-b3bb-a3d4161295ad.jpg",
    readTime: 5,
  },
  {
    id: "world-oil-demand-set-for-first-annual-de-d00d5b6b",
    title: "World oil demand set for first annual decline since 2020, IEA says",
    titleJa: "世界の石油需要、2020年以来初の年間減少に見込まれるとIEAが発表",
    summaryJa: "国際エネルギー機関（IEA）は金曜日、イラン戦争が中東の生産と輸出に大打撃を与えたため、世界の石油需要は2020年以来初めて減少する見通しであると発表した。IEAは最新の石油市場報告書で、2026年の世界の石油需要は前年比で日量100万バレル減少する見通しで、これは2020年の新型コロナウイルス感染症パンデミックの最盛期以来初の年間減少となると述べた。",
    bodyOriginal: `Global oil demand is set to decline for the first time since 2020 as the Iran war wreaked havoc with production and exports in the Middle East, the International Energy Agency (IEA) said Friday.
World oil demand is set to decline by 1 million b/d year-on-year in 2026, which would mark its first annual decrease since the height of the Covid-19 pandemic in 2020, the IEA said in its latest oil market report.
This year's contraction is "highly skewed in both product and regional terms," as the closure of the Strait of Hormuz — the vital shipping route for oil and gas — disrupted exports through the Persian gulf, the agency noted.
A recovery is underway, the researchers added, though they warned renewed escalation in the conflict could complicate matters and further cloud the outlook.
The IEA's forecast rests on the assumption of a ceasefire and the gradual reopening of Hormuz, an outcome that looks increasingly uncertain as the U.S. and Iran traded hostilities this week. A number of ships came under attack and traffic through the Strait has once again slowed to a trickle.
"While the global oil market balance looks set to swing back to surplus towards the end of the year, the forecast hinges on the assumption that tanker flows through the Strait will gradually recover, allowing producers to restart fields and refiners in the Middle East and elsewhere to resume product shipments," the IEA wrote.
"Renewed exchanges of fire in the Gulf this week highlight the risks of not reaching a lasting peace agreement, which is a must for the normalization in oil markets."
Oil prices edged lower on Friday, with global benchmark Brent crude futures for September delivery easing to $76.25 per barrel while U.S. West Texas Intermediate crude futures held steady at $72.09.
Gradual recovery
There will not be a "swift or linear" recovery as the IEA expects a "very uncertain and unstable situation" in the region, Toril Bosoni, IEA's head of oil and markets, told CNBC's "Squawk Box Europe" on Friday.
"But with significant growth from other producers, and with demand levels lower than we were expecting before the war, we could return to a surplus through the end of the year and into next year," she added.
"This would provide welcome relief to the market and allow countries to rebuild their inventories."
The U.S. said it will engage in "technical talks" with Iran and remains committed to finding a solution to the conflict, despite the two countries trading airstrikes in recent days, MS Now reported Thursday, citing a U.S. official.
U.S. President Donald Trump had made his position clear and characterized Iran's attacks on commercial vessels as "acts of terrorism," the official said, according to MS Now.
Those comments come after Trump at the NATO summit in Ankara, Turkey, said that the ceasefire with Iran was "over."`,
    bodyJa: `国際エネルギー機関（IEA）は金曜日、イラン戦争が中東の生産と輸出に大打撃を与えたため、世界の石油需要は2020年以来初めて減少する見通しであると発表した。
IEAは最新の石油市場報告書で、2026年の世界の石油需要は前年比で日量100万バレル減少する見通しで、これは2020年の新型コロナウイルス感染症パンデミックの最盛期以来初の年間減少となると述べた。
石油とガスの重要な輸送ルートであるホルムズ海峡の閉鎖により、ペルシャ湾を通じた輸出が中断されたため、今年の縮小は「製品と地域の両方の点で大きく偏っている」と当局は指摘した。
研究者らは、回復は進行しているが、紛争の新たな激化が事態を複雑にし、見通しをさらに曇らせる可能性があると警告していると付け加えた。
IEAの予測は停戦とホルムズ島の段階的な再開を前提としているが、今週米国とイランが敵対行為を交わす中、その結果はますます不確実になりそうだ。多数の船舶が攻撃を受け、海峡を通る交通は再び細流にまで減速した。
「世界の石油市場の収支は年末にかけて黒字に戻りそうだが、この予測は海峡を通るタンカーの航行量が徐々に回復し、生産者が中東などで油田や精製所を再開して製品の出荷を再開できるようになるという前提にかかっている」とIEAは書いている。
「今週湾岸で新たな銃撃戦が発生し、石油市場の正常化には不可欠な恒久的な和平合意に達しないリスクが浮き彫りになった。」
金曜日の原油価格は若干下落し、世界の指標となるブレント原油先物9月渡しは1バレル当たり76.25ドルまで下落したが、米国ウェスト・テキサス・インターミディエイト原油先物は72.09ドルで安定した。
徐々に回復
IEAの石油・市場責任者トリル・ボゾーニ氏は金曜日、CNBCの番組「スコーク・ボックス・ヨーロッパ」で、IEAはこの地域で「非常に不確実で不安定な状況」が続くと予想しているため、「急速または直線的な」回復はないだろうと語った。
「しかし、他の生産者の大幅な成長と、戦前に予想していたよりも需要レベルが低いため、年末から来年にかけて黒字に戻る可能性があります。」と彼女は付け加えた。
「これは市場に歓迎すべき救済をもたらし、各国が在庫を再構築できるようになるだろう。」
ＭＳナウは木曜、米当局者の話として、両国がここ数日空爆を行っているにもかかわらず、米国はイランと「技術協議」を行うと述べ、紛争解決の解決策を見つけることに引き続き尽力すると述べた。
ＭＳナウによると、ドナルド・トランプ米大統領は自身の立場を明確にし、イランによる商船への攻撃を「テロ行為」と位置づけたと当局者が述べた。
これらのコメントは、トルコのアンカラで行われたNATO首脳会議でトランプ大統領がイランとの停戦は「終わった」と発言した後に出たものである。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/iea-world-oil-demand-declines-iran-war.html",
    publishedAt: "2026-07-10T09:15:22+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "easyjet-pops-13-as-airline-weighs-7-7-bi-030b1cf8",
    title: "EasyJet pops 13% as airline weighs $7.7 billion rival takeover bid from Apollo",
    titleJa: "航空会社がアポロ社からの77億ドルのライバル買収案を検討中、イージージェットは13％急騰",
    summaryJa: "金曜日、格安航空会社がアポロ・グローバル・マネジメントから77億ドルの買収提案を検討していると発表したことを受けて、イージージェットの株価は急騰し、同社はプライベートエクイティ入札合戦の中心となった。現金オファーの条件に基づき、イージージェットの株主は同社の1株当たり7.15ポンド（9.61ドル）を受け取る権利があり、同社の評価額は57億ポンド（約76億6,000万ドル）となる。",
    bodyOriginal: `EasyJet stock soared Friday after the budget carrier said it is considering a $7.7 billion takeover bid from Apollo Global Management, putting the airline at the center of a private equity bidding war.
Under the terms of the cash offer, easyJet shareholders would be entitled to £7.15 ($9.61) per share of the company, valuing the firm at £5.7 billion, around $7.66 billion.
As an alternative to the cash payment, Apollo would also offer shareholders a Stub Equity Alternative – the option to "roll their existing shareholding in easyJet into the vehicle through which the Apollo Funds would hold their investment in easyJet."
The terms of that alternative, which would see shareholders maintain their voting rights, is still subject to further discussion.
The London-listed stock was last trading 13.2% higher. It closed at £5.88 on Thursday, after falling by 0.5% during the trading session. Since the beginning of the year, the shares have risen by 15.2%.
EasyJet's shares jumped on Monday after the airline agreed in principle to a $7.3 billion takeover offer from private equity firm Castlelake. But the company hinted Friday that it was reconsidering the position.
"The Proposed Cash Offer delivers a superior outcome for easyJet shareholders by providing a higher cash value than Castlelake's latest proposal," EasyJet said of Apollo's bid, noting that the board also saw the proposal as "an attractive combination of value, strategic alignment and long-term stewardship of the business."
"Accordingly, the easyJet Board is no longer minded to recommend the Castlelake Proposal," EasyJet said.
Castlelake's bid represents a cash offer of $6.90 per share, with the firm having until Aug. 3 to make a firm offer or walk away from the deal.
The Apollo bid marks around a 22% premium to Thursday's closing price.
Apollo's proposed offer price also represents an 81% premium to easyJet's closing share price of £3.94 per share on May 28, which was the final business day before the offer period began on Castlelake's bid to take over the company.
It comes as the global aviation sector remains under pressure, with jet fuel supplies squeezed in the wake of the U.S.-Iran war. Last month, the International Air Transport Association warned global airline profitability was expected to halve this year as the industry's fuel bills surge.
In the first half of 2026, EasyJet's losses widened as it reported a pre-tax loss of £552 million – down from a loss of £394 million for the same period the previous year. It said its performance in the second half of the year so far had been impacted by the Middle East conflict, with higher fuel costs and lower forward visibility weighing on operations.
An acquisition by Apollo increases the probability of EasyJet's growth path continuing as planned, Bernstein analysts said in a note on Friday morning.
"However, in this case, a heroic cost restructuring and earnings inflection, far above what we currently forecast, would be required for the deal to make sense at this price," they added.
— CNBC's Hugh Leask contributed to this article.`,
    bodyJa: `金曜日、格安航空会社がアポロ・グローバル・マネジメントから77億ドルの買収提案を検討していると発表したことを受けて、イージージェットの株価は急騰し、同社はプライベートエクイティ入札合戦の中心となった。
現金オファーの条件に基づき、イージージェットの株主は同社の1株当たり7.15ポンド（9.61ドル）を受け取る権利があり、同社の評価額は57億ポンド（約76億6,000万ドル）となる。
現金支払いの代替案として、アポロは株主にスタブ・エクイティ・オルタナティブ、つまり「イージージェットの既存株式を、アポロ・ファンドがイージージェットへの投資を保持する手段に転用する」オプションも提供する予定だ。
株主が議決権を維持するという代替案の条件については、まださらなる議論の余地がある。
ロンドン上場株の前回取引は１３．２％高だった。木曜日は取引中に０．５％下落し、５．８８ポンドで取引を終えた。年初以来、株価は15.2％上昇した。
イージージェット航空がプライベートエクイティ会社キャッスルレイクからの73億ドルの買収提案に大筋合意したことを受け、月曜日にイージージェットの株価は急騰した。しかし同社は金曜日、この立場を再検討していることを示唆した。
「提案された現金提案は、キャッスルレイクの最新の提案よりも高い現金価値を提供することで、イージージェットの株主に優れた結果をもたらす」とイージージェットはアポロの買収について述べ、取締役会もこの提案を「価値、戦略的整合性、事業の長期管理の魅力的な組み合わせ」とみなしていると指摘した。
「したがって、イージージェット理事会はもはやキャッスルレイク提案を推奨するつもりはない」とイージージェットは述べた。
キャッスルレイクの入札は1株当たり6.90ドルの現金提示を意味しており、同社は8月3日までに確約を提示するか、取引を放棄するかを決定する必要がある。
アポロ入札は木曜日の終値に約２２％のプレミアムを付けている。
また、アポロ社の提案価格は、キャッスルレイク社による同社買収提案の提案期間開始前の最終営業日である5月28日のイージージェット社の株価終値である1株当たり3.94ポンドに対して81％のプレミアムを上乗せした額となっている。
米国とイランの戦争の影響でジェット燃料の供給が逼迫し、世界の航空業界が依然として圧力にさらされている中での出来事だ。国際航空運送協会は先月、航空業界の燃料代の高騰により、世界の航空会社の収益は今年は半減すると予想されていると警告した。
2026年上半期、イージージェットの損失は拡大し、税引前損失は5億5,200万ポンドとなり、前年同期の3億9,400万ポンドの損失から減少しました。同社は、これまでのところ今年下半期の業績は中東紛争の影響を受けており、燃料費の高騰と前方視界の低下が運航の重しとなっていると述べた。
バーンスタインのアナリストらは金曜朝のメモで、アポロによる買収によりイージージェットの成長路線が計画通り続く可能性が高まると述べた。
「ただし、この場合、この価格で契約を成立させるには、現時点での予想をはるかに上回る壮大なコスト再編と利益の変動が必要となるだろう」と両氏は付け加えた。
— CNBC の Hugh Leask がこの記事に寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/easyjet-apollo-takeover-bid-castlelake-share-price.html",
    publishedAt: "2026-07-10T08:00:03+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 3,
  },
  {
    id: "u-s-to-continue-technical-talks-with-ira-67262c5e",
    title: "U.S. to continue 'technical talks' with Iran after Trump said ceasefire was 'over'",
    titleJa: "トランプ大統領、停戦は「終わった」と発言後、米国、イランとの「技術協議」継続へ",
    summaryJa: "ここ数日、両国が空爆を行っているにもかかわらず、米国はイランと「技術協議」に参加し、紛争の解決策を見つけることに引き続き尽力する、とMSナウが木曜、米国当局者の話として報じた。ＭＳナウによると、同当局者は、ドナルド・トランプ大統領が自身の立場を明確にし、イランによる商船への攻撃を「テロ行為」と位置づけたと述べた。",
    bodyOriginal: `The U.S. will engage in "technical talks" with Iran and remains committed to finding a solution to the conflict, despite the two countries trading airstrikes in recent days, MS Now reported Thursday, citing a U.S. official.
The official said President Donald Trump had made his position clear and characterized Iran's attacks on commercial vessels as "acts of terrorism," according to MS Now.
Those comments come after Trump at the NATO summit in Ankara, Turkey, said that the ceasefire with Iran was "over."
The memorandum of understanding between the two countries is performance-based, and Iran's actions constitute "failed performance at an unacceptable level," the U.S. official told MS Now, adding that talks with Tehran will continue.
The ceasefire signed last month has come under serious strain in recent days with the U.S. and Iranian forces conducting strikes this week. "I don't want to deal with them [Iran] anymore," Trump said at the NATO summit.
On his way back from the summit, Trump said that Iran had called to make a deal to cease the escalating hostilities in the Middle East. "They called a little while ago. They want to make a deal so badly. I just don't know if they're worthy of making a deal. I don't know that they're going to honor the deal. That's the problem," he said.
Iranian officials have accused the U.S. of not honoring the MOU, citing violation of "Iranian adjustments" in the Strait of Hormuz, "persistent threats of further strikes" and reinstating oil sanctions.
The U.S. military conducted renewed rounds of offensive strikes against Iran in retaliation for three commercial vessels transiting the Strait of Hormuz coming under attack. The U.S. Treasury Department subsequently withdrew a waiver that had allowed Iran to sell its oil.
Oil prices were marginally lower on Friday in Asia trading, with global benchmark Brent crude futures for September delivery easing to $76.3 per barrel while U.S. West Texas Intermediate crude futures at $71.87.`,
    bodyJa: `ここ数日、両国が空爆を行っているにもかかわらず、米国はイランと「技術協議」に参加し、紛争の解決策を見つけることに引き続き尽力する、とMSナウが木曜、米国当局者の話として報じた。
ＭＳナウによると、同当局者は、ドナルド・トランプ大統領が自身の立場を明確にし、イランによる商船への攻撃を「テロ行為」と位置づけたと述べた。
これらのコメントは、トルコのアンカラで行われたNATO首脳会議でトランプ大統領がイランとの停戦は「終わった」と発言した後に出たものである。
両国間の覚書は実績ベースであり、イランの行動は「容認できないレベルでの失敗」に相当すると米当局者はMS Nowに語り、テヘランとの協議は継続すると付け加えた。
先月署名された停戦は、米国軍とイラン軍が今週空爆を実施するなど、ここ数日で深刻な緊張にさらされている。トランプ大統領はNATO首脳会議で「彼ら（イラン）とはもう関わりたくない」と語った。
トランプ大統領はサミットからの帰り道、イランが中東で激化する敵対行為を停止するための合意を求めたと述べた。同氏は「彼らは少し前に電話してきた。彼らはとても合意を望んでいる。ただ、彼らが合意を結ぶに値するかどうかは分からない。彼らが合意を遵守するかどうかも分からない。それが問題だ」と述べた。
イラン当局者らは、ホルムズ海峡における「イランの調整」への違反、「更なる攻撃の執拗な脅迫」、石油制裁の復活などを理由に、米国が覚書を遵守していないとして非難している。
米軍は、ホルムズ海峡を通過中の商船３隻が攻撃を受けた報復として、イランに対する新たな攻撃を実施した。その後、米国財務省はイランによる石油販売を許可していた免除を撤回した。
金曜日のアジア取引では原油価格が小幅下落し、世界の指標となるブレント原油先物9月渡しは1バレル当たり76.3ドルに下落し、米国ウエスト・テキサス・インターミディエイト原油先物は71.87ドルとなった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/10/us-iran-war-strikes-strait-of-hormuz-technical-talks-progress-.html",
    publishedAt: "2026-07-10T02:51:57+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "chip-giant-sk-hynix-raises-26-5bn-in-meg-864f2579",
    title: "Chip giant SK Hynix raises $26.5bn in mega US share sale",
    titleJa: "半導体大手SKハイニックス、米国株の大型売却で265億ドルを調達",
    summaryJa: "半導体大手SKハイニックス、米国株の大型売却で265億ドルを調達- 公開されました",
    bodyOriginal: `Chip giant SK Hynix raises $26.5bn in mega US share sale
- Published
South Korean computer chip maker SK Hynix has raised $26.5bn (£19.8bn) in its New York share offering, marking the largest ever listing by a foreign firm in the US.
The company, a key supplier to artificial intelligence (AI) chip giant Nvidia, said on Thursday that it had sold 177.9 million American depositary shares for $149 each. The shares are set to begin trading on Friday on the Nasdaq.
SK Hynix saw its market value top $1tn in its home country in May, lifted by the boom in demand for AI chips.
Its share price has more than tripled in South Korea this year, which along with Samsung Electronics has helped boost the benchmark Kospi index by more than 70% over the same period.
SK Hynix is one of the world's leading memory chip makers. The industry has been given a major boost by the hundreds of billions being spent on AI.
Shares in rivals Samsung Electronics and Micron have more than doubled in recent months.
The US listing gives SK Hynix easier access to huge amounts of potential investment from the world's biggest economy, which has fewer barriers than South Korea, said Seoul National University finance professor Jaewon Choi.
Traders are closely watching the listing as a "yardstick to test the water" for whether investor enthusiasm for memory chip makers will continue, Choi said.
The AI boom has triggered a rush of companies raising money on the the stock market.
In June, GrokAI owner SpaceX became the world's biggest ever listing as it raised $85.7bn.
Meanwhile, AI developers Anthropic and OpenAI are preparing to go public, with valuations of more $1tn.
Demand for SK Hynix's offering was reportedly over seven times more than the number of shares available, highlighting the strong investor appetite for a key company in the AI supply chain.
Each American depositary share is equivalent to a tenth of a Seoul-traded common share, SK Hynix said.
The offering gives US investors a way to buy SK Hynix shares without having to trade via an overseas stock exchange.
The company has pledged major investments to develop South Korea's chip making and AI capabilities in the coming years.
The country's government is likely to be counting on SK Hynix's US listing to raise funds that can support the firm's domestic investments, said Hanyang University business professor Yun Youngjin.
But the Nasdaq listing carries some risks, especially if investors move money towards the US and away from South Korea's stock market, Yun added.
In June, the country's government unveiled plans for more than $880bn of investments in partnership with SK Hynix and Samsung.
Both SK Hynix and Samsung have stock market valuations of more that $1tn, joining growing group of firms which includes tech giants Nvidia, Apple, Microsoft and Google-owner Alphabet.`,
    bodyJa: `半導体大手SKハイニックス、米国株の大型売却で265億ドルを調達
- 公開されました
韓国のコンピューターチップメーカーSKハイニックスはニューヨーク株式売り出しで265億ドル（198億ポンド）を調達し、外国企業による米国上場としては史上最大規模となった。
人工知能（AI）チップ大手エヌビディアへの主要サプライヤーである同社は木曜日、米国預託株式1億7790万株を1株149ドルで売却したと発表した。株式は金曜日にナスダックで取引が開始される予定だ。
SKハイニックスは、AIチップの需要ブームによって5月に本国での時価総額が1兆ドルを超えた。
同社の株価は今年韓国で3倍以上に上昇し、サムスン電子とともに同時期に基準となるコスピ指数を70％以上押し上げることに貢献した。
SK Hynix は世界有数のメモリ チップ メーカーの 1 つです。 AI に数千億ドルが費やされることで、業界は大きな後押しを受けています。
ライバルのサムスン電子とマイクロンの株価はここ数カ月で２倍以上に上昇した。
ソウル国立大学のジェウォン・チョイ金融教授は、米国での上場により、SKハイニックスは韓国よりも障壁が少ない世界最大の経済大国からの巨額の潜在的投資へのアクセスが容易になると述べた。
トレーダーらは、メモリーチップメーカーに対する投資家の熱意が続くかどうかを見極める「見極めの基準」として、今回の上場を注視しているとチョイ氏は語った。
AIブームをきっかけに、株式市場で資金調達を行う企業が殺到している。
6月にはGrokAIの所有者であるSpaceXが857億ドルを調達し、史上最大の上場企業となった。
一方、AI開発者のAnthropicとOpenAIは株式公開の準備を進めており、評価額は1兆ドルを超える。
伝えられるところによると、SKハイニックスの売り出しに対する需要は入手可能な株式数の7倍以上であり、AIサプライチェーンの主要企業に対する投資家の強い意欲を浮き彫りにしている。
SKハイニックスによると、米国の預託株式は1株当たりソウルで取引される普通株の10分の1に相当する。
この提案により、米国の投資家は海外の証券取引所を介して取引することなくSKハイニックスの株を購入する方法が得られる。
同社は、今後数年間で韓国のチップ製造とAI能力を開発するために大規模な投資を約束している。
漢陽大学ビジネス教授のユン・ヨンジン氏は、韓国政府はSKハイニックスの国内投資を支援できる資金を調達するために、SKハイニックスの米国上場を期待している可能性が高いと述べた。
しかし、特に投資家が韓国の株式市場から米国に資金を移した場合、ナスダック上場にはいくつかのリスクが伴うとユン氏は付け加えた。
6月、同国政府はSKハイニックスとサムスンと提携して8,800億ドルを超える投資計画を発表した。
SKハイニックスとサムスンはどちらも株式市場評価額が1兆ドルを超えており、ハイテク大手のエヌビディア、アップル、マイクロソフト、グーグル傘下のアルファベットを含む成長企業グループに加わっている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4gym70r0y4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T02:48:18+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8cb7/live/4865ed80-7c0b-11f1-a0e5-951d7247156a.jpg",
    readTime: 3,
  },
  {
    id: "sk-hynix-raises-26-5-billion-in-u-s-offe-62bd0449",
    title: "SK Hynix raises $26.5 billion in U.S. offering. What to know about the stock.",
    titleJa: "SKハイニックスが米国で265億ドルを調達。株式について知っておくべきこと。",
    summaryJa: "米国の投資家は、メモリチップの激戦市場に参入する別の簡単な方法を手に入れようとしている。",
    bodyOriginal: `U.S. investors are about to get another straightforward way to play the red-hot market for memory chips.`,
    bodyJa: `米国の投資家は、メモリチップの激戦市場に参入する別の簡単な方法を手に入れようとしている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/sk-hynix-is-about-to-hit-the-u-s-market-heres-what-to-know-about-the-deal-1c873fa4?mod=mw_rss_topstories",
    publishedAt: "2026-07-10T02:38:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-18931762",
    readTime: 2,
  },
  {
    id: "vapes-to-have-less-enticing-names-and-fl-fc31a1f5",
    title: "Vapes to have less enticing names and flavours to protect children",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "子どもたちを守るため、電子タバコはあまり魅力的でない名前とフレーバーに変更される- 公開されました",
    bodyOriginal: `Vapes to have less enticing names and flavours to protect children
- Published
Vapes with colourful packaging, or with names or flavours inspired by sweets and cocktails, could be banned as part of plans to stop them being marketed to children.
The government is launching a 12-week consultation about its plans "to make vaping less attractive for children and young people". Health Secretary James Murray said it was clear too many were being lured into experimenting.
Under the new proposals, packs would need to be plain with strict limits on branding and only simple flavour descriptions like "apple" or "cola" used.
Other restrictions would move vapes out of sight in shops, similar to how cigarettes and tobacco are currently sold.
Children as young as 13 admit vaping, say NHS staff
- Published19 January
Vapers overtake smokers for first time in Britain
- Published4 November 2025
There is no legitimate reason for nicotine products to come in neon packaging, feature cartoon images, or use flavours and branding designed to catch a child's eye, say health experts.
Murray said: "The evidence is clear: there are too many young people experimenting with vapes, attracted by the array of flavours, bright colours and marketing displays.
"We must act now to reduce the appeal of addictive vapes to our children.
"Vapes are less harmful than cigarettes and can play an important role in helping adult smokers to quit, but they should never be designed or marketed in ways that tempt children.
"These proposals are about striking the right balance and I urge everyone to have their say."
The 100 day consultation follows the recent passing of the Tobacco and Vapes Act, which sets out proposals to create the UK's first smoke-free generation, protecting children from nicotine addiction, while ensuring adult smokers can still access vaping products to help them quit.
Children aged 17 or younger now face a lifelong ban on buying cigarettes, since it will be illegal for shops to sell tobacco to anyone born after 1 January 2009.
And it gives the power to ban vaping in cars carrying children, in playgrounds and outside schools and at hospitals, expanding smoke-free laws.
It follows a ban on single-use vapes and comes ahead of future bans on the sale of vapes from vending machines and a planned end to the advertising and sponsorship of vapes.
Around one million or nearly one in every five 11-17 year olds in Great Britain reported trying vaping in 2025, according to the charity Action on Smoking and Health.
The consultation also proposes inserts for cigarette packs telling buyers where to get help to quit and plans to make all tobacco products – including cigarette rolling paper and cigars – come in plain packaging.
Get in touch
Are you affected by this issue? Do you have a view on the plans?
Related topics
- Published11 May
- Published9 June`,
    bodyJa: `子どもたちを守るため、電子タバコはあまり魅力的でない名前とフレーバーに変更される
- 公開されました
カラフルなパッケージのVAPEや、お菓子やカクテルからインスピレーションを得た名前やフレーバーのVAPEは、子供向けの販売を阻止する計画の一環として禁止される可能性がある。
政府は「子供や若者にとって電子タバコの魅力を薄める」計画について12週間の協議を開始している。ジェームズ・マレー保健長官は、あまりにも多くの人が実験に誘惑されているのは明らかだと述べた。
新しい提案では、パックはブランド表示を厳格に制限し、「リンゴ」や「コーラ」などの単純なフレーバーの説明のみを使用したプレーンなものにする必要がある。
他の規制により、現在紙巻きタバコが販売されているのと同様に、電子タバコが店頭で見えなくなることになる。
13歳の子供も電子タバコを吸っていることを認めているとNHSスタッフが発表
- 1 月 19 日公開
英国で初めてベイパーが喫煙者を追い抜く
- Published4 November 2025
健康専門家らは、ニコチン製品がネオンのパッケージで提供されたり、漫画の画像が使われたり、子供の目を引くようにデザインされたフレーバーやブランドを使用したりする正当な理由はない、と述べている。
マレー氏は「証拠は明らかだ。さまざまなフレーバー、明るい色、マーケティング表示に惹かれて、ベイプを試している若者が多すぎる」と語った。
「私たちは子供たちにとって中毒性のある電子タバコの魅力を減らすために今すぐ行動しなければなりません。
「VAPEは紙巻きタバコよりも害が少なく、成人喫煙者の禁煙を助ける重要な役割を果たす可能性があるが、決して子供を誘惑するような設計や販売をすべきではない。
「これらの提案は適切なバランスをとることを目的としたものであり、皆さんに意見を求めることを強く求めます。」
この100日間の協議は、最近可決されたタバコ・電子タバコ法に続くもので、同法では英国初の非喫煙世代を創設し、子供たちをニコチン中毒から守り、同時に成人喫煙者が禁煙を支援する電子タバコ製品を引き続き利用できるようにするための提案が定められている。
2009年1月1日以降に生まれた人に店がタバコを販売することは違法となるため、17歳以下の子供はタバコの購入を生涯禁止されることになる。
そして、子供を乗せた車内、遊び場、学校外や病院での電子タバコの使用を禁止する権限を与え、禁煙法を拡大する。
これは使い捨て電子タバコの禁止に続き、今後の自動販売機での電子タバコの販売禁止や電子タバコの広告とスポンサーシップの計画終了に先立って行われる。
慈善団体「喫煙と健康に関するアクション」によると、2025年には英国の11～17歳の約100万人、つまり5人に1人近くが電子タバコを吸おうとしていると報告されている。
この協議ではまた、購入者に禁煙の助けをどこに求めるべきかを示す紙巻きタバコの箱の差し込み物や、紙巻タバコや葉巻を含むすべてのタバコ製品を無地のパッケージにする計画も提案されている。
連絡する
Are you affected by this issue? Do you have a view on the plans?
関連トピック
- 5 月 11 日公開
- 6 月 9 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9v29d7vml7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T02:15:38+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f2b3/live/aaac8d00-7b93-11f1-897a-ebe8a20106d3.jpg",
    readTime: 3,
  },
  {
    id: "cool-in-90-seconds-the-fake-portable-ai-cacf79fa",
    title: "'Cool in 90 seconds' - the fake portable air conditioners sweeping the internet",
    titleJa: "「90秒で涼しい」ネットを席巻する偽ポータブルエアコン",
    summaryJa: "「90秒で涼しい」ネットを席巻する偽ポータブルエアコン- 公開されました",
    bodyOriginal: `'Cool in 90 seconds' - the fake portable air conditioners sweeping the internet
- Published
As parts of the UK brace for another hot weekend, online adverts have been appearing for portable air conditioners claiming to be "designed by former Nasa engineers" and able to "cool a room in 90 seconds".
The adverts have emerged on platforms including Facebook and YouTube, but the Advertising Standards Authority (ASA) has now warned the products are often "too good to be true".
YouTuber Stuart Matthews, who bought several devices to test on his Proper DIY channel, told the BBC that despite paying £70 for one machine, it turned out to be "a small, simple fan worth only a few pounds".
The BBC has approached Meta and YouTube for comment.
The ASA told the BBC that some of the adverts it had seen online in recent weeks made exaggerated claims, including that a small device could cool an entire home within minutes or used very little electricity.
It also said the adverts frequently featured fake customer reviews describing dramatic temperature drops or exceptional performance.
The adverts direct shoppers to websites selling the devices, typically for between £70 and £120.
Many of the adverts also appeared to be AI-generated, using visuals such as copper coils and metallic boxes to make the products seem more sophisticated.
The ASA said there were several ways for customers to tell if an advert for a portable air conditioner was likely to be misleading.
It said people should be sceptical of the following:
Promises which sound too good to be true, like claims a small device can chill large rooms
Dramatic backstories about "secret inventions" or "industry breakthroughs"
Poor grammar, spelling mistakes and inconsistent branding
Customer reviews describing dramatic results or reading as though they're too perfect
The watchdog advised consumers who were unsure to research the retailer and check it provided genuine contact details and a business address.
Customers should also look for independent reviews rather than relying solely on testimonials on the seller's website.
It added that anyone concerned about an air conditioner advert could report it via their website, external.
A closer look
Matthews said he bought several of the devices to see whether they performed as advertised.
The civil engineer and content creator said rather than buying something that would bring the temperature of his room down quickly, he found he had instead bought some "cheap components" made using "flawed science".
One advert described the product as a "reverse-engineered aircon unit" featuring "a liquid-compressed cooling cartridge".
Matthews said the device actually contained "a load of cardboard fins that get wet as the water blows past them".
While so-called "swamp coolers" - machines that chill air by evaporating water - do work reasonably well in hot, dry climates, they also increase humidity and so are much less effective in humid places like much of the UK.
They are also not conventional air conditioners, which work by removing heat from a room via an exhaust hose or external unit.
"I really feel for the people that have been sucked into buying some of this rubbish," Matthews said.
The ASA said it was monitoring sites to spot such adverts and issuing an enforcement notice "instructing advertisers to get their ads in order". It also bans adverts found to have breached its rules.
Although the body regulates paid-for adverts on platforms including YouTube and Facebook, it cannot issue fines itself.
How can I get air conditioning in my home and how much does it cost?
- Published23 hours ago
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Get in touch
Have you been affected by the extreme heat in the UK? Do you have a story to share?
- Published1 day ago
- Published2 days ago
- Published10 June`,
    bodyJa: `「90秒で涼しい」ネットを席巻する偽ポータブルエアコン
- 公開されました
英国では再び暑い週末に備える一環として、「元NASAのエンジニアが設計」し、「90秒で部屋を冷やすことができる」と主張するポータブルエアコンのオンライン広告が登場している。
広告はフェイスブックやユーチューブなどのプラットフォームに掲載されているが、広告基準局（ASA）は今回、こうした商品は「真実すぎる」ことが多いと警告した。
自身の Proper DIY チャンネルでテストするためにいくつかのデバイスを購入したユーチューバーのスチュアート・マシューズ氏は、1 台のマシンに 70 ポンドを支払ったにもかかわらず、それは「数ポンドの価値しかない小型で単純なファン」であることが判明したと BBC に語った。
BBCはMetaとYouTubeにコメントを求めた。
ASAはBBCに対し、ここ数週間オンラインで見た広告の一部には、小型機器で数分以内に家全体を冷やすことができるとか、電気の使用量が非常に少ないなどの誇張した主張が含まれていたと語った。
また、広告には劇的な気温の低下や並外れたパフォーマンスを説明する偽の顧客レビューが頻繁に掲載されていたとも述べた。
広告は買い物客を、通常 70 ポンドから 120 ポンドの間でデバイスを販売する Web サイトに誘導します。
広告の多くも AI によって生成されているようで、製品をより洗練されているように見せるために銅製のコイルや金属製の箱などのビジュアルが使用されていました。
ASAは、ポータブルエアコンの広告が誤解を招く可能性があるかどうかを顧客が見分ける方法はいくつかあると述べた。
それは、人々は以下の点について懐疑的であるべきだと述べています。
小さなデバイスで広い部屋を冷やすことができるというような、うますぎる約束
「秘密の発明」や「業界の躍進」に関する劇的な裏話
不十分な文法、スペルミス、一貫性のないブランド表示
劇的な結果を述べたり、完璧すぎるかのような感想を述べたりする顧客レビュー
監視機関は、小売業者を調べて本物の連絡先の詳細と会社の住所が提供されていることを確認することに自信がない消費者にアドバイスしました。
また、顧客は、販売者の Web サイト上の体験談だけに頼るのではなく、独立したレビューを探す必要があります。
エアコンの広告に懸念を抱いた人は、外部のウェブサイトを通じて通報できるとも付け加えた。
もっと詳しく見る
マシューズ氏は、宣伝どおりに動作するかどうかを確認するためにデバイスをいくつか購入したと述べた。
土木技師でありコンテンツクリエイターでもあるこの男性は、部屋の温度をすぐに下げるものを買うのではなく、「欠陥のある科学」を使って作られた「安価な部品」を買ってしまったことに気づいたと語った。
ある広告では、この製品を「液体圧縮冷却カートリッジ」を特徴とする「リバースエンジニアリングされたエアコンユニット」と説明していました。
マシューズ氏は、この装置には実際には「水が吹き抜けると濡れてしまう大量のボール紙製のフィン」が含まれていたと述べた。
水を蒸発させて空気を冷やす機械、いわゆる「スワンプクーラー」は、暑く乾燥した気候ではそれなりにうまく機能しますが、湿度も上昇させるため、英国の大部分のような湿気の多い場所ではあまり効果がありません。
また、排気ホースや室外機を介して部屋の熱を除去する従来のエアコンでもありません。
「このようなゴミを買うことに巻き込まれた人々に本当に同情します」とマシューズさんは語った。
ASAは、そのような広告を見つけるためにサイトを監視しており、「広告主に広告を適切に掲載するよう指示する」施行通知を発行していると述べた。また、規則に違反していると判明した広告も禁止する。
同団体はYouTubeやFacebookなどのプラットフォーム上の有料広告を規制しているが、自ら罰金を課すことはできない。
家にエアコンを設置するにはどうすればよいですか?また、その費用はどれくらいかかりますか?
- 23 時間前に公開
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。
連絡する
イギリスの猛暑の影響はありましたか？ Do you have a story to share?
- 1 日前に公開
- 2 日前に公開
- 6 月 10 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj6g41pzy41o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-10T01:33:45+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/40f4/live/3731f960-7c3c-11f1-9510-1546718f668b.jpg",
    readTime: 5,
  },
  {
    id: "openai-exec-fidji-simo-says-she-s-steppi-5463df6b",
    title: "OpenAI exec Fidji Simo says she's stepping down due to chronic illness, will transition to advisor",
    titleJa: "OpenAI幹部のフィジー・シモ氏、慢性疾患のため辞任し、アドバイザーに転任すると発表",
    summaryJa: "OpenAIの製品およびビジネス責任者であるフィジ・シモ氏は木曜日、「慢性疾患の重度の悪化」からの回復に専念するため、人工知能企業での役職を辞任すると発表した。シモさんは2019年に体位起立性頻脈症候群（POTS）と診断され、「症状、治療法、保険、不安、そして患者であることに伴う目に見えない仕事すべてに対処しながら、数え切れないほどの時間を診療所で過ごしている」と語った。",
    bodyOriginal: `Fidji Simo, OpenAI's product and business chief, on Thursday announced she is stepping down from her role at the artificial intelligence company to focus on recovery after a "severe exacerbation of a chronic illness."
Simo was diagnosed with Postural Orthostatic Tachycardia Syndrome, or POTS, in 2019, and said she's been spending "countless hours in doctors' offices, dealing with symptoms, treatments, insurance, uncertainty, and all the invisible work that comes with being a patient."
She stepped away from OpenAI in April for a medical leave. OpenAI President Greg Brockman took over product responsibilities in Simo's absence.
"When I went on leave, many people told me I was courageous for prioritizing my health," Simo wrote in a post on X on Thursday. "The truth is that I am only making this decision now because I failed to make it many times before."
Simo said she will transition into a role as a part-time advisor at OpenAI.
OpenAI hired Simo in May of 2025 to lead the company's applications business. OpenAI CEO Sam Altman said in a memo at the time that Simo would "focus on enabling our 'traditional' company functions to scale as we enter a next phase of growth."
Last month OpenAI confidentially filed for an IPO, a week after rival Anthropic did the same. However, the company hasn't offered a timeline for a public market debut and is reportedly putting off those plans until at least next year.
Simo previously served as CEO of Instacart, where she took the company public and helped to break the longest tech IPO drought in three decades. She also spent more than a decade in leadership roles at Meta, acting as the head of Facebook from 2019 until 2021.
"Two years after I got sick, Facebook offered me the opportunity to take a full year of medical leave. I didn't even pause to consider it. I immediately said no," Simo wrote on Thursday. She added that CEO Mark Zuckerberg "told me I should play the long game. I wish I had listened."
Altman said in a post on X that he's grateful for Simo's contributions to the company, "and even grateful for her friendship and who she is as a person."
WATCH: OpenAI CEO Sam Altman on whether the company will go public this year: ‘I don’t know’`,
    bodyJa: `OpenAIの製品およびビジネス責任者であるフィジ・シモ氏は木曜日、「慢性疾患の重度の悪化」からの回復に専念するため、人工知能企業での役職を辞任すると発表した。
シモさんは2019年に体位起立性頻脈症候群（POTS）と診断され、「症状、治療法、保険、不安、そして患者であることに伴う目に見えない仕事すべてに対処しながら、数え切れないほどの時間を診療所で過ごしている」と語った。
彼女は4月に病気療養のためOpenAIを退職した。 OpenAI の社長である Greg Brockman が、Simo 氏の不在中に製品責任を引き継ぎました。
「休暇に入ったとき、多くの人が私が健康を優先するのは勇気があると言ってくれた」とシモさんは木曜日のXに投稿した。 「実を言うと、これまで何度も失敗してきたので、今になってこの決断を下しただけなのです。」
シモ氏は、OpenAI の非常勤アドバイザーとしての役割に移行する予定であると述べた。
OpenAI は 2025 年 5 月に、同社のアプリケーション ビジネスを率いるために Simo を雇用しました。 OpenAIの最高経営責任者（CEO）サム・アルトマン氏は当時のメモで、Simoは「次の成長段階に入る際に『従来の』企業機能を拡張できるようにすることに注力する」と述べた。
先月、OpenAIは極秘にIPOを申請したが、その1週間後にはライバルのAnthropicも同様の申請を行った。しかし、同社は公開市場デビューのスケジュールを提示しておらず、伝えられるところによれば、それらの計画は少なくとも来年まで延期される。
シモ氏は以前、インスタカートのCEOを務め、同社を株式公開し、過去30年間で最長となったテクノロジー関連IPOの干ばつ打破に貢献した。彼女はまた、Meta で 10 年以上にわたって指導的役割を果たし、2019 年から 2021 年まで Facebook の責任者を務めました。
「病気になってから2年後、フェイスブックは私に丸1年間の医療休暇を取る機会を提供してくれた。私は立ち止まって検討することさえしなかった。すぐにノーと答えた」とシモ氏は木曜日に書いた。さらに、CEOのマーク・ザッカーバーグ氏は「長期戦をするべきだと言った。聞いていればよかった」とも付け加えた。
アルトマン氏はXへの投稿で、シモ氏の会社への貢献に感謝しており、「彼女の友情や人間としての彼女にも感謝している」と述べた。
注目：OpenAI CEOのサム・アルトマン氏、同社が今年上場するかどうかについて「分からない」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/openai-exec-fidji-simo-says-she-will-step-down-and-transition-to-part-time-advisor.html",
    publishedAt: "2026-07-09T23:38:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "inside-nato-s-extraordinary-48-hours-tha-4c388d23",
    title: "Inside NATO's extraordinary 48 hours that revealed Trump's grip on global diplomacy",
    titleJa: "世界外交に対するトランプ大統領の支配力を明らかにしたNATOの異例の48時間の内部",
    summaryJa: "トルコのアンカラでは48時間、あたかも世界がドナルド・トランプの予定通りに動いているかのように感じられた。市場は急騰した。 NATO同盟国は対立に備えている。ウクライナは安心感を求めた。イランは議題をひっくり返すと脅した。ある瞬間、指導者たちは外交危機に備えていた。次に、同盟関係がこれまで以上に分裂するのではないかと多くの人が懸念していた大統領との「ラブイン」について説明していた。",
    bodyOriginal: `For 48 hours in Ankara, Turkey, it felt as though the world was moving on Donald Trump's timetable.
Markets lurched. NATO allies braced for confrontation. Ukraine searched for reassurance. Iran threatened to upend the agenda. One moment, leaders were preparing for diplomatic crisis; the next, they were describing a "love-in" with the very president many had feared would leave the alliance more divided than ever.
I've covered hundreds of major international events over my 25 years at CNBC — G7, G8 and G20 summits, OPEC meetings, climate conferences and multiple trips to Ukraine. But I've never witnessed such dramatic reversals of fortune, affecting so many global players, compressed into just 48 hours.
The NATO Summit wasn't simply another diplomatic gathering. It became a real-time demonstration of how quickly the geopolitical landscape can shift when President Trump is at the center of it.
While major summits involving the U.S. inevitably revolve around Washington, this one felt different. It revolved not just around one country, but also around one individual.
Think about everything that was in play. Iran. Russia's war in Ukraine. Greenland. European security. Spain's refusal to meet NATO's military spending targets. President Volodymyr Zelenskyy's uncertain standing with Washington. Every major issue seemed to converge on one summit — and every one of them ultimately revolved around the U.S. president.
To recount, every European NATO member — plus Canada — was effectively on trial coming into this gathering. Trump and Defense Secretary Pete Hegseth had again been aggressively criticizing NATO for its lack of support over Iran and for failing to spend anywhere near enough money on its own security.
In addition, the president took aim at Denmark yet again over its refusal to hand over Greenland for the greater good — whose greater good being a mildly contentious point — and, of course, Spain was getting both barrels for being even worse than the other 30 NATO partners in its military spending.
Zelenskyy was in town, once again to drum up NATO support. And let's be honest, he never really knows what kind of reception he's going to get from the Leader of the Free World.
Then came the absolute bombshell from Mr. Trump that he was done with dealing with the Iranians, done with the memorandum of understanding and the ceasefire. Markets went south and oil went north.
At that point, the summit appeared to be heading toward confrontation.
And yet, then the optics changed on a dime. The mood changed just like that, and suddenly love was in the air.
Even before the big final Trump press conference, world leaders were telling me in quiet asides that the meeting with Trump had gone brilliantly, that he had been very happy, that he had listened — actually listened — to every leader in the big closed-door confab and had left in a good mood.
Hang on, was this the same Donald Trump who had been berating partners only hours earlier?
Yes, apparently so.
I wasn't so sure, but I heard it myself from the horse's mouth only hours later when, in front of a thousand journalists at his summit-closing press conference, the U.S. president confirmed the love-in was real.
Standing alongside Secretary of State Marco Rubio, Treasury Secretary Scott Bessent, Hegseth and Deputy Chief of Staff Stephen Miller, the president spoke of the "tremendous love in the room" during the leaders' meeting. "The unity was amazing," he said. "The love was pretty wild."
It was a remarkable turnaround from the public criticism Trump had directed at many of those same allies only hours earlier.
The summit produced some clear winners and losers. Turkish President Recep Tayyip Erdoğan emerged stronger after hosting a smooth summit and appeared to move closer to securing U.S. approval for F-35 fighter jets.
Mark Rutte, the NATO secretary general, kept up the praise for Trump and, in doing so, helped keep the U.S. engaged with NATO, at least for now. Spain and Denmark, despite early assaults, came away without any major rebuke from the U.S. in Trump's closing press conference.
Another big winner must be Zelenskyy, who appears to have risen in the U.S. president's estimation as Ukraine has stabilized the battlefield and taken the fight deep into Russia despite the odds. The Ukrainian leader may even have secured a deal to produce Patriot missile systems — something Kyiv has long viewed as a priority.
Losers? Well, clearly Putin would have been unhappy with both the show of unity from NATO, its huge progress on defense spending and Ukraine's warmer reception from Trump.
And Iran? Well, that remains the big unknown.
I asked the U.S. president directly when I got the chance to fire a question at him: "What happens next if you really have given up on the ceasefire?"
His answer, I'm afraid, was opaque. He simply returned to the point that Iran would never have a nuclear weapon on his watch.
And perhaps that's the lasting takeaway from these extraordinary 48 hours.
The atmosphere inside NATO changed dramatically over the course of the summit, but the biggest questions remain unanswered. What happens next with Iran? Can the improved mood between Trump and NATO allies last beyond this meeting? And what does it ultimately mean for Ukraine?
Those questions matter far more than the political theater. But if this summit demonstrated anything, it is how quickly the geopolitical landscape can shift when Donald Trump is at the center of it. Allies, adversaries and markets alike are learning to adjust in real time.`,
    bodyJa: `トルコのアンカラでは48時間、あたかも世界がドナルド・トランプの予定通りに動いているかのように感じられた。
市場は急騰した。 NATO同盟国は対立に備えている。ウクライナは安心感を求めた。イランは議題をひっくり返すと脅した。ある瞬間、指導者たちは外交危機に備えていた。次に、同盟関係がこれまで以上に分裂するのではないかと多くの人が懸念していた大統領との「ラブイン」について説明していた。
私はCNBCでの25年間にわたり、G7、G8、G20サミット、OPEC会議、気候会議、ウクライナへの複数回の訪問など、何百もの主要な国際イベントを取材してきました。しかし、これほど劇的な運命の逆転が、わずか 48 時間に圧縮されて、これほど多くの世界的プレーヤーに影響を与えるのを私は見たことがありません。
NATO首脳会議は単なる外交集会ではなかった。これは、トランプ大統領が地政学的な状況の中心にいるときに、地政学的な状況がいかに急速に変化するかをリアルタイムで実証するものとなった。
米国が関与する主要な首脳会談は必然的にワシントンを中心に展開するが、今回は違うと感じた。それは 1 つの国だけでなく、1 人の個人を中心に展開していました。
プレー中に起こったことすべてを考えてください。イラン。ロシアによるウクライナ戦争。グリーンランド。ヨーロッパの安全保障。スペインはNATOの軍事支出目標の達成を拒否した。ウォロディミル・ゼレンスキー大統領のワシントンに対する不確実な立場。すべての主要な問題は 1 つの首脳会談に収束するかのように見えましたが、最終的にはそのどれもが米国大統領を中心に展開しました。
もう一度言いますと、ヨーロッパのすべての NATO 加盟国、さらにカナダもこの集会に参加した事実上の裁判を受けていました。トランプ大統領とピート・ヘグセス国防長官は、NATOがイランに対する支援を欠如し、自国の安全保障に十分な資金をほとんど投じていないとして、再び激しく批判していた。
さらに、大統領は、より大きな利益のためにグリーンランドの引き渡しを拒否したデンマークを再び非難した。そのより大きな利益は、やや議論の余地のある点であるが。そしてもちろん、スペインは軍事支出において他のNATO加盟国30カ国よりもさらに悪いということで、両方の非難を浴びていた。
ゼレンスキー氏は再びNATO支援を強化するために街にいた。そして正直に言うと、彼は自由世界の指導者からどのような歓迎を受けるか全く分かりません。
その後、トランプ氏から、覚書と停戦でイランとの付き合いは終わったという、まったくの爆弾発言があった。市場は南へ、石油は北へ向かいました。
この時点で首脳会談は対立に向かっているように見えた。
それでも、光学系は劇的に変化しました。それだけで雰囲気が変わり、突然恋の空気が漂ってきました。
最後のトランプの大規模な記者会見の前でさえ、世界の指導者たちは、トランプとの会談は見事に終わった、彼はとても幸せだった、大規模な密室会議ですべての指導者の言うことに耳を傾け、実際に耳を傾け、上機嫌で帰っていった、と私に静かに話していた。
ちょっと待って、これはほんの数時間前にパートナーを非難していたドナルド・トランプ氏だったのか？
はい、どうやらそうです。
私にはあまり確信がありませんでしたが、わずか数時間後、首脳会談閉会記者会見で1000人のジャーナリストの前で、米国大統領がラブインが本物であることを認めたとき、馬の口からそれを自分で聞きました。
マルコ・ルビオ国務長官、スコット・ベッセント財務長官、ヘグセス氏、スティーブン・ミラー首席補佐官らと並んで立った大統領は、首脳会談中に「室内の計り知れない愛」について語った。 「団結力は素晴らしかった」と彼は語った。 「その愛はかなりワイルドだった。」
これは、ほんの数時間前にトランプ大統領が同じ同盟国の多くに向けていた国民の批判からの驚くべき転換だった。
このサミットでは、明らかな勝者と敗者が明らかになった。トルコのレジェップ・タイイップ・エルドアン大統領は、首脳会談を円滑に主催した後さらに勢いを増し、F-35戦闘機に対する米国の承認獲得に近づくように見えた。
NATO事務総長のマーク・ルッテ氏はトランプ氏を称賛し続け、そうすることで少なくとも現時点では米国がNATOと関わり続けることに貢献した。スペインとデンマークは、序盤の攻撃にも関わらず、トランプ大統領の閉会記者会見で米国からの大きな叱責も受けずに済んだ。
もう一人の大きな勝者はゼレンスキー氏に違いない。ウクライナが不利な状況にもかかわらず戦場を安定させ、ロシアの奥深くまで戦いを持ち込んだことで、米国大統領の評価が上がったようだ。ウクライナの指導者は、キエフが長い間優先事項として考えていたパトリオット・ミサイル・システムを製造する契約さえ獲得した可能性がある。
敗者？まあ、明らかにプーチン大統領は、NATOの団結の誇示、国防費の大幅な進展、そしてウクライナのトランプからの温かい歓迎の両方に不満を抱いていただろう。
そしてイランは？まあ、それは大きな未知のままです。
私はアメリカ大統領に質問する機会を得たとき、「もし本当に停戦を諦めたら、次に何が起こるのか？」と直接尋ねた。
残念ですが、彼の答えは不透明でした。彼は単に、イランが核兵器を監視することは決してないだろうという点に戻っただけだ。
そしておそらくそれが、この並外れた 48 時間から得られる永続的な収穫です。
NATO内部の雰囲気は首脳会談の過程で劇的に変化したが、最大の疑問は未解決のままだ。イランとの今後はどうなるでしょうか？トランプ大統領とNATO同盟国との間の改善されたムードは今回の会談以降も続くだろうか？そして、それはウクライナにとって最終的に何を意味するのでしょうか？
こうした疑問は、政治劇よりもはるかに重要だ。しかし、今回の首脳会談が何かを示したとすれば、それは、ドナルド・トランプ氏が地政学的状況の中心にいるときに、地政学的な状況がどれだけ早く変化し得るかということだ。同盟国、敵対者、市場は同様にリアルタイムで調整することを学んでいます。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/nato-trump-rutte-ukraine-russia-us-iran.html",
    publishedAt: "2026-07-09T23:00:52+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "pressure-builds-on-europe-s-biggest-port-860c5a02",
    title: "Pressure builds on Europe's biggest port to be greener",
    titleJa: "ヨーロッパ最大の港をより環境に優しいものにするよう圧力が高まる",
    summaryJa: "ヨーロッパ最大の港をより環境に優しいものにするよう圧力が高まる- 公開されました",
    bodyOriginal: `Pressure builds on Europe's biggest port to be greener
- Published
Standing on a grassy verge in the Hook of Holland, I'm overlooking the Port of Rotterdam.
At the delta of the Rhine and Meuse in the Netherlands, on land largely reclaimed from the North Sea, it's the biggest port for freight, external in Europe.
By some measures, Rotterdam alone handles almost as much cargo as all UK ports combined.
The horizon is dominated by cranes, bulk carriers and container stacks – the visible parts of a vast energy and chemicals hub.
Five refineries, including Shell's largest in Europe, process hundreds of thousands of barrels of crude oil a day, while a tight cluster of chemical plants feeds factories across the continent.
According to research by CE Delft, the fossil fuels flowing through the port are ultimately linked to around 600 megatonnes of CO2 a year – many times more than the CO2 output of the Netherlands' biggest airport, Schiphol.
That scale has made Rotterdam a test case for a difficult question: can a port built on fossil fuels ever truly become green?
Pressure is building on the port to do something.
A lawsuit brought by environmental group Advocates for the Future argues that the Port of Rotterdam Authority is not doing enough to phase out fossil-based energy, and wants a concrete plan to wind down the coal, oil and gas flows whose emissions dwarf those of most countries.
Rotterdam's own industrial cluster currently emits about 29 million tonnes of CO2 a year – roughly half of the Netherlands' domestic emissions, says Mark van Dijk, head of external relations at the Port of Rotterdam Authority.
That's the equivalent of tens of thousands of return flights from Amsterdam to Los Angeles. "It's not good," admits van Dijk.
The Port Authority has a plan to cut the emissions of its own activities and encourage businesses on the site to be greener.
It has set targets to cut its own direct and purchased energy emissions by 90% between 2019 and 2030.
The plan includes developing a hydrogen hub where companies can test new fuels, investing in onshore power so ships can plug into the grid instead of burning fuel at berth, and supporting bunkering of alternatives such as LNG, biofuels and methanol.
There is also an effort to mitigate CO2 emissions.
"In the short term we're focusing on CCS [Carbon Capture and Storage] – capturing CO2 and storing it in depleted gas fields," van Dijk says, referring to the Porthos project that will pipe industrial emissions offshore.
Buffeted by the wind, Advocates for the Future director Maikel van Wissen argues that a port of this scale shouldn't just be managing the flow of fossil fuels. Instead, he argues, it has a responsibility to use its clout to speed up the shift to cleaner operations.
"A state-owned enterprise should take legal obligations on states to reduce emissions," Van Wissen says.
"We are asking in the lawsuit to phase out that dependency, to create alternatives. It takes time, but if you don't have a plan, you always choose cheap short-term solutions. This is an important hub, if you do it in a controlled way, you offer an alternative, that will stop industry from moving elsewhere."
The port says it is making efforts to shift its business model.
"We try to work together with the polluters, and slowly phase them out," says Oscar van Veen, director of innovation at the Port of Rotterdam, speaking on a small boat in the harbour. He pauses, then corrects himself: "As fast as possible, of course."
But many of the biggest emitters in the port answer to headquarters in the US or China.
Their loyalty lies with boardrooms abroad. If the rules in Rotterdam become too tight, they can simply move – as Shell shifted its headquarters to the UK and Unilever left Rotterdam altogether.
"The Port of Rotterdam is a key player in this sustainable transition but their sphere of influence is limited," says Bettina Kampman, from environmental consultancy CE Delft, which works for governments, companies and NGOs.
Even transitioning their own activities to lower emissions comes with challenges.
"New developments need physical space. They can speed up the energy infrastructure developments - the electricity needed to electrify the processes. That's all limited at the moment due to the lack of power cables," Kampman says.
Emeritus professor Harry Geerlings, of Erasmus University Rotterdam, has spent more than three decades studying sustainable transport and ports.
He is sceptical that any single port authority can drive a full transition on its own. What is needed, he says, is a global level playing field – the kind of framework provided in Europe by the Emissions Trading System and past rules on sulphur in marine fuels.
He points out how EU sulphur limits changed behaviour: ships calling at European ports had to switch to cleaner fuels or fit scrubbers to reduce pollution.
China initially resisted, he says, but when its ships could no longer enter US and European ports without complying, it followed suit. "If you have the right incentives, you change the behaviour of these companies."
But there are limits to what regional rules can do. Many ships now sail with dual fuel set ups, burning cleaner, low-sulphur fuel as they enter European waters, then flipping back to cheaper, high sulphur heavy fuel oil once they are out on the high seas.
Geerlings believes Rotterdam's port authority genuinely wants to change and is building the infrastructure for a smoother transition.
"But their biggest income is still tied to fossil fuel industries," he notes. "It's not simply a switch you turn on or off. A port needs activity as a logistics node – otherwise it's no longer a port. It's a real dilemma."
The geopolitics are not always helpful. Across the Atlantic, US President Donald Trump has cast doubt on climate policy and railed against wind power, while offering incentives that favour fossil fuels over renewables.
That contrast sharpens Rotterdam's concern about losing energy intensive industry to regions with looser rules and cheaper power.
Advocates for the Future argues that as a publicly owned company, the Port of Rotterdam Authority should be held to a higher standard.
It wants a detailed phase-out plan for fossil activities, not just a long-term promise of climate neutrality by 2050. "We are not asking for anything extraordinary," says director Maikel van Wissen. "We're asking for a plan that really contributes to a sustainable future for the port."
"We do want the same thing," insists Van Dijk. Sharing an electric taxi back towards the city, a 45-minute drive from the edge of the sprawling port. He stresses that Rotterdam and its critics are, on paper at least, heading for the same destination: net zero around mid century. The disagreement is over how fast, and how radically, to change.
More Technology of Business
- Published12 June
- Published26 June
- Published5 June`,
    bodyJa: `ヨーロッパ最大の港をより環境に優しいものにするよう圧力が高まる
- 公開されました
オランダのフックの草が茂った端に立って、私はロッテルダム港を見下ろしています。
オランダのライン川とムーズ川のデルタ地帯にあり、大部分が北海から埋め立てられた土地にあり、ヨーロッパ国外最大の貨物港です。
見方によっては、ロッテルダムだけでも英国のすべての港を合わせた量とほぼ同じ量の貨物を扱っています。
地平線上には、クレーン、ばら積み貨物船、コンテナの積み重ねが占めており、これらは広大なエネルギーと化学の拠点の目に見える部分です。
シェルの欧州最大の製油所を含む 5 つの製油所が 1 日あたり数十万バレルの原油を処理し、化学工場が密集して大陸中の工場に供給されています。
CE デルフトの調査によると、港を流れる化石燃料は最終的に年間約 600 メガトンの CO2 を排出しており、これはオランダ最大のスキポール空港の CO2 排出量の何倍にもなります。
この規模により、ロッテルダムは、化石燃料で建設された港は本当に環境に優しいものになることができるのかという難しい質問に対するテストケースとなっています。
港湾には何かをするよう圧力が高まっている。
環境保護団体「未来のためのアドボケート」が起こした訴訟では、ロッテルダム港湾管理局は化石燃料エネルギーの段階的廃止に十分な努力をしていないと主張し、ほとんどの国に比べて排出量が少ない石炭、石油、ガスの排出量を削減するための具体的な計画を求めている。
ロッテルダム港湾公社の対外関係責任者、マーク・ファン・ダイク氏によると、ロッテルダム自身の産業クラスターは現在、年間約2,900万トンのCO2を排出しているが、これはオランダ国内の排出量の約半分に相当するという。
これはアムステルダムからロサンゼルスまでの往復航空券数万便に相当します。 「それは良くない」とファン・ダイクは認める。
港湾局は、自らの活動による排出量を削減し、敷地内での企業の環境への配慮を奨励する計画を立てています。
同社は2019年から2030年までに自社の直接および購入したエネルギー排出量を90％削減するという目標を設定している。
この計画には、企業が新しい燃料をテストできる水素ハブの開発、船舶が停泊時に燃料を燃やす代わりに送電網に接続できるように陸上電力に投資すること、LNG、バイオ燃料、メタノールなどの代替燃料の補給をサポートすることが含まれている。
CO2排出量を削減する取り組みも行われています。
「短期的には、CO2を回収して枯渇したガス田に貯蔵するCCS（炭素回収・貯蔵）に注力している」とファン・ダイク氏は産業排出物を海洋にパイプするポルトス・プロジェクトについて言及した。
風を受けながらも、「未来のための権利擁護団体」のディレクター、マイケル・ファン・ウィッセン氏は、この規模の港は化石燃料の流れを管理するだけではいけないと主張する。むしろ、その影響力を利用してよりクリーンな運営への移行を加速する責任がある、と同氏は主張する。
「国有企業は州に対して排出量を削減する法的義務を負うべきだ」とヴァン・ウィッセン氏は言う。
「私たちは訴訟でその依存関係を段階的に廃止し、代替案を作成するよう求めています。時間はかかりますが、計画がなければ、常に安価な短期的な解決策を選択します。これは重要な拠点です。管理された方法で実行すれば、代替案を提供することになり、業界が他の場所に移動するのを阻止することになります。」
同港はビジネスモデルの転換に取り組んでいるとしている。
「私たちは汚染者と協力し、徐々に汚染者を排除しようと努めています」とロッテルダム港のイノベーション担当ディレクター、オスカー・ヴァン・フェーン氏は港の小型ボート上で語った。彼は立ち止まり、「もちろんできるだけ早く」と訂正した。
しかし、港湾の最大排出者の多くは米国または中国の本社に回答している。
彼らの忠誠心は海外の役員室にあります。シェルが本社を英国に移転し、ユニリーバがロッテルダムを完全に撤退したため、ロッテルダムの規則が厳しくなりすぎた場合は、移転するだけで済みます。
「ロッテルダム港はこの持続可能な移行において重要な役割を果たしていますが、その影響範囲は限られています」と政府、企業、NGOのために活動する環境コンサルタント会社CEデルフトのベッティーナ・カンプマン氏は言う。
自らの活動を排出量削減に移行するにも課題が伴います。
「新たな開発には物理的なスペースが必要です。エネルギーインフラの開発、つまりプロセスを電動化するために必要な電力の開発をスピードアップすることができます。電力ケーブルが不足しているため、現時点ではそれがすべて制限されています」とカンプマン氏は言う。
エラスムス大学ロッテルダム名誉教授ハリー・ギアリングス氏は、30年以上にわたって持続可能な交通と港湾の研究に取り組んできた。
同氏は、単一の港湾局が単独で完全な移行を推進できるかどうかについては懐疑的である。必要なのは、世界的に平等な競争の場、つまり排出権取引制度や海洋燃料中の硫黄に関する過去の規則によってヨーロッパで提供されているような枠組みだ、と同氏は言う。
同氏は、EUの硫黄制限によって行動がどのように変化したかを指摘し、ヨーロッパの港に寄港する船舶は、汚染を軽減するためによりクリーンな燃料に切り替えるか、スクラバーを装着する必要があった。
同氏によると、中国は当初は抵抗したが、中国の船舶が従わなければ米国や欧州の港に入港できなくなると、それに従ったという。 「適切なインセンティブがあれば、これらの企業の行動を変えることができます。」
しかし、地域のルールにできることには限界があります。現在、多くの船は二重燃料設定で航行しており、ヨーロッパの海域に入る際にはよりクリーンで低硫黄の燃料を燃焼させ、公海上に出るとより安価な高硫黄の重油に切り替えています。
ギアリングス氏は、ロッテルダムの港湾局が本気で変化を望んでおり、よりスムーズな移行のためのインフラを構築していると信じている。
「しかし、彼らの最大の収入は依然として化石燃料産業に依存している」と彼は指摘する。 「それは単にスイッチをオンまたはオフにするものではありません。港には物流ノードとしての活動が必要です。そうでなければ、港はもはや港ではありません。これは本当のジレンマです。」
地政学は必ずしも役に立つとは限りません。大西洋の向こうでは、ドナルド・トランプ米大統領が気候変動政策に疑問を投げかけ、風力発電を激しく非難する一方で、再生可能エネルギーよりも化石燃料を優遇する奨励金を提示している。
このコントラストは、ルールが緩く電力料金が安い地域にエネルギー集約型産業が奪われるのではないかというロッテルダムの懸念をさらに強めている。
Advocates for the Futureは、上場企業としてロッテルダム港管理局はより高い基準を遵守すべきだと主張している。
同政府は、2050年までに気候中立性を保つという長期的な約束だけでなく、化石活動の詳細な段階的廃止計画を求めている。「我々は特別なことを求めているわけではない」とディレクターのマイケル・ファン・ウィッセン氏は言う。 「私たちは港の持続可能な未来に真に貢献する計画を求めています。」
「私たちも同じことを望んでいます」とファン・ダイクは主張する。電気タクシーに乗って、広大な港の端から車で 45 分の市内に戻ります。同氏は、ロッテルダムとその批判者たちは、少なくとも建前上は同じ目的地、つまり今世紀半ば頃にネットゼロを目指していると強調する。意見の相違は、どれだけ早く、どれだけ根本的に変化するかという点にある。
ビジネスのさらなるテクノロジー
- 6 月 12 日発行
- 6 月 26 日発行
- 6 月 5 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c39y78rwrmno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-09T23:00:51+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c82f/live/34e11c20-7397-11f1-b1db-af71d47507d6.jpg",
    readTime: 8,
  },
  {
    id: "we-saved-6-000-on-holidays-by-swapping-h-c1c018dc",
    title: "We saved £6,000 on holidays by swapping homes with strangers",
    titleJa: "休日に見知らぬ人と家を交換して6,000ポンドを節約しました",
    summaryJa: "休日に見知らぬ人と家を交換して6,000ポンドを節約しました- 公開されました",
    bodyOriginal: `We saved £6,000 on holidays by swapping homes with strangers
- Published
Would you swap homes with a stranger in exchange for a cheaper holiday? Or would the idea of someone sleeping in your bed and using your kitchen while you were away put you off?
Henry Vanderpump, 42, his wife Elliw, 39, and their two young children have had two home exchange holidays in the past two years and have another planned this summer.
In each case, they have stayed in another family's home, while that family stays in theirs, a five-bedroom house in Tarporley, rural Cheshire.
Neither side pays anything for their accommodation, although they do pay an annual membership fee to Home Link, the listings site they use to book the trips.
So far, the Vanderpumps have stayed in similarly sized properties in Hamburg and Copenhagen, and Henry says they have saved around £2,500 on accommodation per trip, plus a further £700 on transport, as they also swapped cars.
"We used to have one holiday a summer, now we have two [because of the savings we make from home exchanges]. And the kids love the idea of living in someone else's house while that person is living in theirs."
Home exchanges have been around since at least the 1950s, but an increasing number of people seem to be embracing them because of the rising cost of living, or simply to experience a new type of travel, commentators say.
'We lived like a German family'
Henry says the best thing about swapping homes isn't the savings but getting to visit places off the tourist trail and have a "really authentic experience".
When the family visited Hamburg in 2024, they stayed in a suburb and lived "like a German family" for a week, exploring lakes on the edge of the city recommended by their hosts.
Last year, they stayed in "a very Scandinavian house" in suburban Copenhagen, which was "all on one level and had no clutter".
"They also left us several electric bikes to use," Henry says. "We cycled to the beach, swam in the Baltic and tried restaurants they recommended."
Some people are not comfortable with the idea of strangers staying in their home, and for those who are, there's a lot of preparation and tidying to do before their guests arrive.
Home swappers may also have to be more flexible about when they travel - Home Link says members typically send 10-15 messages before getting an offer.
"Last minute bookings won't always work," says May Burrough, 38, a chief operating officer from London who has done 34 home swaps over the last three years using HomeExchange.
Rather than doing direct exchanges, she hosts people in her central London flat while she's overseas staying with her partner in France.
This way, May builds up points on the platform she can use to book trips at other times.
How to home swap successfully
If you are putting your home on a booking platform, make the listing clear, with plenty of information and appealing photos
Keep in contact before and during the exchange to build trust and avoid misunderstandings
Declutter and make space in wardrobes, drawers and cupboards your guests will use
Leave a comprehensive guide for guests, covering things like appliance instructions, rubbish collection and emergency information
Share local recommendations to help them get the most out of their stay
Lock away items of value to avoid them being damaged
Check that your home insurance policy provides the cover you need
Sources: Home Link, HomeExchange, the Association of British Insurers
May reckons she has saved about £5,000-£8,000 through swaps in places like Barcelona and the Swiss Alps.
She loves the "community feel" of home exchanges and says she's only ever had one "semi-negative experience" when a booking she thought was for a whole flat turned out to be a room in a flat share.
As for preparation before guests arrive, she says she tries to make sure her flat is clean and clears some space in her wardrobe. "I provide clean sheets and towels. I lock away valuables."
The main home-swap listings platforms vet their members and invite them to review one another.
But the Association of British Insurers advises hosts to check that their home and contents insurance provides the cover they need before hosting guests.
It also says it is worth checking your travel insurance before staying in someone else's home to check it covers accidental damage.
Petra Novak, who uses the home swap site Kindred, says the platform's own damage protection policy has covered her on the few occasions something was damaged in her London flat.
The 34-year-old, who uses the platform as she works remotely around Europe, says she has saved some £18,000-£20,000 through home exchanges.
She says she was nervous about swapping homes with strangers at first but has never had a bad experience.
However, for added peace of mind, she likes to check out the social media profiles of prospective guests, adding that a personal touch can help build trust before an exchange.
"I personally like when someone submits their booking request along with a nice introduction letter, telling me about themselves and the reason why they would be visiting London."`,
    bodyJa: `休日に見知らぬ人と家を交換して6,000ポンドを節約しました
- 公開されました
より安価な休暇と引き換えに、見知らぬ人と家を交換しますか?それとも、あなたがいない間に誰かがあなたのベッドで寝ていてキッチンを使うと思うと嫌になりますか?
ヘンリー・ヴァンダーポンプさん（42歳）と妻のエリーさん（39歳）、そして二人の幼い子供たちは、過去2年間に2回自宅交換休暇を過ごしており、この夏にはもう一つの休暇を計画している。
いずれの場合も、彼らは別の家族の家に滞在し、その家族はチェシャーの田舎、ターポーリーにある寝室が5つある自分たちの家に滞在している。
どちらも宿泊費は一切支払わないが、旅行の予約に利用する物件情報サイト「ホームリンク」には年会費を支払っている。
これまでヴァンダーポンプ一家はハンブルクとコペンハーゲンにある同様の広さの物件に滞在しており、ヘンリーさんによると、旅行ごとに宿泊費が約2,500ポンド、さらに車も交換したため、交通費がさらに700ポンド節約できたという。
「以前は夏に1回の休暇がありましたが、今は（住宅交換で得た節約のおかげで）2回あります。そして、子供たちは、その人が自分の家に住んでいる間、他の人の家に住むというアイデアが大好きです。」
コメンテーターらによると、ホームエクスチェンジは少なくとも1950年代から存在しているが、生活費の上昇を理由に、あるいは単に新しいタイプの旅行を体験するためにこれを受け入れる人が増えているようだという。
「私たちはドイツ人の家族のように暮らしました」
ヘンリーさんは、家を交換する一番の利点は節約ではなく、観光コースから外れた場所を訪れて「本当に本物の体験」ができることだと語った。
2024年に家族がハンブルクを訪れたとき、家族は郊外に滞在し、ホストの勧めで市外れの湖を探索しながら「ドイツ人の家族のように」1週間暮らした。
昨年、夫妻はコペンハーゲン郊外にある「まさにスカンジナビア風の家」に滞在したが、そこは「すべてが同じ階にあり、散らかったものは何もなかった」という。
「彼らはまた、私たちに使用できる電動自転車を数台残してくれました」とヘンリーは言います。 「私たちは自転車でビーチに行き、バルト海で泳ぎ、彼らが勧めてくれたレストランを試しました。」
見知らぬ人が家に泊まるという考えに抵抗を感じる人もいます。そのような人にとっては、ゲストが到着する前にたくさんの準備や片付けをしなければなりません。
ホーム交換者は旅行の時期についてもより柔軟になる必要があるかもしれない - Home Link によると、メンバーはオファーを得る前に通常 10 ～ 15 件のメッセージを送信するという。
「直前の予約が常にうまくいくとは限りません」と、HomeExchange を使用して過去 3 年間で 34 件の住宅交換を行ったロンドン在住の最高執行責任者、メイ バロー氏 (38 歳) は言います。
彼女は、フランスにいるパートナーと一緒に海外に滞在している間、直接的な交流を行うのではなく、ロンドン中心部のアパートで人々を受け入れています。
このようにして、メイさんはプラットフォーム上にポイントを貯め、別の機会に旅行を予約するために使用できます。
ホームスワップを成功させる方法
自宅を予約プラットフォームに掲載する場合は、豊富な情報と魅力的な写真を掲載し、明確なリストを作成してください。
信頼を築き、誤解を避けるために、交換前および交換中に連絡を取り続けます。
ゲストが使用するワードローブ、引き出し、食器棚を整理してスペースを作ります
家電製品の説明書、ゴミの収集、緊急情報などを網羅した包括的なガイドをゲスト向けに残してください。
滞在を最大限に楽しむために地元のおすすめ情報を共有する
貴重品は破損しないように鍵をかけて保管してください
住宅保険契約が必要な補償を提供しているかどうかを確認してください
出典: Home Link、HomeExchange、英国保険会社協会
メイさんは、バルセロナやスイスアルプスなどでの交換を通じて、約5000ポンドから8000ポンドを節約したと考えている。
彼女はホームエクスチェンジの「コミュニティ感」が大好きで、アパート全体を予約すると思っていたのにアパートシェアの一室だったことが判明したときの「半否定的な経験」は一度だけだという。
ゲストが到着する前の準備に関しては、アパートを清潔にし、ワードローブにスペースを空けるように努めていると彼女は言います。 「清潔なシーツとタオルを提供します。貴重品は鍵をかけて保管します。」
主要な住宅交換物件プラットフォームは会員を精査し、相互にレビューするよう招待しています。
しかし、英国保険協会はホストに対し、ゲストを迎える前に、住宅保険や生活物品保険が必要な補償を提供しているかどうかを確認するようアドバイスしている。
また、他人の家に滞在する前に、旅行保険が偶発的な損害をカバーしているかどうかを確認する価値があるとも述べています。
住宅交換サイト「Kindred」を利用しているペトラ・ノバクさんは、ロンドンのアパートで何かが破損したことは数回あったが、プラットフォーム独自の損害補償ポリシーでカバーされていると語った。
ヨーロッパ各地でリモートで仕事をする際にこのプラットフォームを利用している34歳の彼女は、ホームエクスチェンジを通じて約1万8000ポンドから2万ポンドを節約したと語る。
最初は見知らぬ人と家を交換することに緊張したが、悪い経験は一度もなかったと彼女は言う。
しかし、さらに安心感を与えるために、彼女は見込み客のソーシャルメディアのプロフィールをチェックするのが好きで、交流の前に個人的なタッチをすることで信頼を築くことができると付け加えました。
「個人的には、誰かが自分自身のことやロンドンを訪れる理由を伝える素敵な紹介状と一緒に予約リクエストを提出するのが好きです。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce8kkerxz74o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-09T23:00:38+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9834/live/74796a60-7b6a-11f1-936a-038dbfe02d14.jpg",
    readTime: 6,
  },
  {
    id: "new-fed-task-force-members-share-chairma-a4b75285",
    title: "New Fed task force members share Chairman Kevin Warsh's embrace of AI",
    titleJa: "FRB特別委員会の新メンバーがケビン・ウォーシュ議長のAIへの支持を共有",
    summaryJa: "ケビン・ウォーシュ議長は木曜日、連邦準備理事会に外部の考え方を導入することを目的とした一連の特別委員会には「最も優れた頭脳」が含まれると述べた。 FRBの経済運営に特に影響を与える可能性のある人工知能に関する特別委員会にとって、外部の人々は皆同じ方向を向いているようだ。ウォーシュ氏の AI タスクフォースのメンバーは全員、AI が成長と生産性に広範囲に影響を与える革新的なテクノロジーになると信じているようだ。それはウォーシュ自身の見解と一致する。彼は特別委員会のメンバーを個人的に選出した。",
    bodyOriginal: `A series of task forces designed to bring outside thinking to the Federal Reserve will include the "best minds," Chairman Kevin Warsh said Thursday. For a task force that could be especially consequential for the Fed's management of the economy — on artificial intelligence — those outside minds all seem to lean in the same direction.
Warsh's AI task force members all appear to believe AI will be a transformative technology, with far-reaching effects on growth and productivity. That lines up with Warsh's own views. He selected the task-force members personally.
The AI task force was one of five the Fed rolled out Thursday. Its formal charge is to "assess the economic impact of new general-purpose technologies, including artificial intelligence, to inform the Federal Reserve's policy judgments." It will be led by three external advisors: venture capitalist Marc Andreessen, economist Charles I. Jones, and Xbox CEO Asha Sharma.
All have recently spoken or written in sharply positive terms about the effects of AI on the economy.
The Fed chairman is a longtime proponent of the potentially transformative economic potential of AI. Its adoption is "perhaps as important a change in the economy and business and households that we've had in my adult lifetime," Warsh said in June at his first press conference as chairman.
He said in 2025 that he believed advancements in AI would be a reason for the Fed to cut interest rates, because it would help the economy to grow quickly without raising inflation.
Warsh has been personal friends with Andreessen for decades. Warsh also ran venture-capital investments for investor Stanley Druckenmiller after a stint at the Fed that ended in 2011. That expanded his Silicon Valley network — and his wealth.
Andreessen made a fortune creating some of the internet's earliest web browsers and is now one of AI's most vocal evangelists. "We've turned sand into thought," Andreessen told podcaster Joe Rogan in May, referencing the silicon that is the physical basis for AI chips.
Jones, the economist, shares much of Andreessen's West Coast optimism. Jones recently went on leave from Stanford University to join the Anthropic Institute, part of leading AI firm Anthropic. Jones's academic work recently has focused on the effects of AI on economic growth, making him an important voice in Warsh's efforts to bring the Fed around to his point of view.
Jones noted in a recent paper that U.S. growth per capita has consistently averaged 2% over much of U.S. history. "Nevertheless, if AI eventually automates away nearly all the weak links in the economy, economic growth could accelerate significantly, with rates potentially exceeding 5 percent per year," he wrote.
The paper analyzes what Jones identifies as weak links — aspects of the economy that will be difficult to automate — and considers lower potential growth rates as well. But Jones writes bluntly that AI "will likely be the most transformative technology of the modern era."
Sharma, who in February became CEO of Microsoft's Xbox gaming business, has made strong statements in support of AI. But as the leader of an operating business, she made the rare decision not to prioritize AI. Even as Microsoft incorporates AI into all aspects of its products, Sharma opted not to put it front and center on Xbox, she said in a recent Bloomberg interview.
"Our console players aren't excited about that experience," Sharma said.
But that doesn't make her a skeptic. "Now, do I believe in AI? Absolutely," she said.
The three task force members didn't immediately respond to a request for comment. The Fed declined to comment.
Where Warsh may encounter skeptics is on the Federal Open Market Committee, which has the power to set interest rates. FOMC members discussed at its June meeting the question of whether AI can raise productivity, minutes from the discussion released this week show. Some FOMC participants bought into the idea that productivity would speed up, the minutes said.
And yet they weren't fully sold. "These participants remarked, however, that considerable uncertainty remained regarding both the timing and magnitude of potential productivity gains, which were expected to lag the ongoing boost of AI adoption on demand."
Meanwhile, U.S. tech firms' headlong embrace of AI is starting to heat the economy. New York Fed President John Williams on Thursday said he was concerned about price increases in electricity and semiconductors from the AI boom.
Prices have risen like a "hockey stick," with some components doubling and tripling, Williams said. AI is a "demand shock," he said, adding that it is unclear if supply will grow alongside it, which would be necessary to keep inflation down.
The Fed meets again at the end of July, when it is expected to hold interest rates steady. The task forces are expected to finish their work by the end of the year.`,
    bodyJa: `ケビン・ウォーシュ議長は木曜日、連邦準備理事会に外部の考え方を導入することを目的とした一連の特別委員会には「最も優れた頭脳」が含まれると述べた。 FRBの経済運営に特に影響を与える可能性のある人工知能に関する特別委員会にとって、外部の人々は皆同じ方向を向いているようだ。
ウォーシュ氏の AI タスクフォースのメンバーは全員、AI が成長と生産性に広範囲に影響を与える革新的なテクノロジーになると信じているようだ。それはウォーシュ自身の見解と一致する。彼は特別委員会のメンバーを個人的に選出した。
AIタスクフォースはFRBが木曜日に展開した5つのうちの1つだった。その正式な任務は、「連邦準備制度の政策判断に情報を提供するために、人工知能を含む新しい汎用技術の経済的影響を評価する」ことである。ベンチャーキャピタリストのマーク・アンドリーセン氏、経済学者のチャールズ・I・ジョーンズ氏、Xbox CEOのアシャ・シャルマ氏という3人の外部アドバイザーが率いることになる。
全員が最近、AI が経済に及ぼす影響について非常に肯定的な言葉で話したり書いたりしています。
FRB議長は長年、AIが経済に変革をもたらす可能性を提唱している。ウォーシュ氏は6月、会長として初めての記者会見で、この政策の導入は「おそらく私が成人してから経験したのと同じくらい重要な経済、企業、家計の変化だ」と述べた。
同氏は、AIの進歩がインフレ率を上昇させることなく経済の急速な成長を促すため、2025年にはFRBが利下げする理由になるとの考えを示した。
ウォーシュはアンドリーセンと数十年来の個人的な友人だ。ウォーシュ氏はまた、2011年にFRB勤務を終えた投資家スタンリー・ドラッケンミラー氏のためにベンチャーキャピタルへの投資も行った。これにより彼のシリコンバレーのネットワークと富が拡大した。
アンドリーセン氏は、インターネットの初期の Web ブラウザーのいくつかを作成して富を築き、現在では AI の最も声高な伝道者の 1 人です。 「私たちは砂を思考に変えました」とアンドリーセン氏は5月にポッドキャスターのジョー・ローガン氏に語り、AIチップの物理的基盤であるシリコンに言及した。
経済学者のジョーンズ氏は、アンドリーセン氏の西海岸の楽観主義に多くの共感を抱いている。ジョーンズ氏は最近、大手AI企業アンスロピック社の一部であるアンスロピック研究所に入社するため、スタンフォード大学を休学した。ジョーンズ氏の学術研究は最近、AIが経済成長に及ぼす影響に焦点を当てており、FRBを自分の視点に近づけようとするウォーシュ氏の取り組みにおいて重要な発言者となっている。
ジョーンズ氏は最近の論文で、米国の歴史の大部分において、米国の一人当たりの成長率は一貫して平均2%であったと指摘した。 「それでも、最終的にAIが経済の脆弱な部分のほぼすべてを自動化すれば、経済成長は大幅に加速し、その率は年間5％を超える可能性がある」と同氏は書いた。
この論文は、ジョーンズ氏が弱点として特定したもの、つまり自動化が困難な経済の側面を分析し、潜在成長率の低下についても考慮しています。しかしジョーンズ氏は、AIは「おそらく現代で最も革新的なテクノロジーになるだろう」と率直に書いている。
2月にマイクロソフトのXboxゲーム事業のCEOに就任したシャルマ氏は、AIを支持する強い発言をしている。しかし、運営ビジネスのリーダーとして、彼女は AI を優先しないという珍しい決断を下しました。マイクロソフトは AI を自社製品のあらゆる側面に組み込んでいますが、シャルマ氏はそれを Xbox の中心に据えることを選択しなかった、と最近のブルームバーグのインタビューで述べました。
「当社のコンソールプレイヤーはその体験に興奮していません」とシャルマ氏は語った。
しかし、だからといって彼女が懐疑的になるわけではない。 「さて、私はAIを信じますか？もちろん信じます」と彼女は言った。
特別委員会のメンバー３人はコメントの要請に応じていない。 FRBはコメントを控えた。
ウォーシュ氏が懐疑論者に遭遇する可能性があるのは、金利を設定する権限を持つ連邦公開市場委員会だ。今週公表された議論の議事録によると、FOMCメンバーらは6月の会合でAIが生産性を向上できるかどうかという問題について議論した。議事要旨によると、一部のＦＯＭＣ参加者は生産性が向上するという考えを支持したという。
しかし、まだ完全には売れていませんでした。 「しかし、これらの参加者は、潜在的な生産性向上のタイミングと規模の両方に関してかなりの不確実性が残っており、オンデマンドでの AI 導入の継続的な促進に遅れることが予想されると述べた。」
その一方で、米国のハイテク企業による AI への真っ向からの取り組みが経済を加熱し始めている。ニューヨーク連銀のウィリアムズ総裁は木曜日、AIブームによる電力と半導体の価格上昇を懸念していると述べた。
ウィリアムズ氏によると、価格は「ホッケーのスティック」のように上昇し、一部の部品では2倍、3倍になっているという。同氏はAIは「需要ショック」であると述べ、インフレ抑制に必要となる供給もそれに伴って増加するかどうかは不透明だと付け加えた。
FRBは7月末に再び会合を開き、金利は据え置かれると予想されている。対策本部は年末までに作業を完了する予定だ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/fed-task-force-member-chairman-kevin-warsh-ai.html",
    publishedAt: "2026-07-09T23:00:10+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "taco-bell-is-reportedly-pulling-produce-9f9b2ad6",
    title: "Taco Bell is reportedly pulling produce from some stores. Here’s what to know.",
    titleJa: "タコベルは一部の店舗から農産物を撤去していると伝えられている。ここで知っておくべきことは次のとおりです。",
    summaryJa: "ミシガン州では、寄生虫が原因の病気が発生し、1,000人以上が罹患している。",
    bodyOriginal: `An outbreak of a parasite-caused illness has sickened more than 1,000 people in Michigan.`,
    bodyJa: `ミシガン州では、寄生虫が原因の病気が発生し、1,000人以上が罹患している。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/taco-bell-is-reportedly-pulling-produce-from-some-stores-heres-what-to-know-a3569cd8?mod=mw_rss_topstories",
    publishedAt: "2026-07-09T22:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-879242",
    readTime: 2,
  },
  {
    id: "why-a-hidden-divergence-between-the-vix-44cc4028",
    title: "Why a hidden divergence between the VIX and Nasdaq volatility has the smart money on edge",
    titleJa: "VIX とナスダックのボラティリティの間に隠れた乖離があり、賢いマネーが危機に瀕している理由",
    summaryJa: "トレーダーは強気市場に完全に魅了されていますが、ナスダックのボラティリティの急上昇は、ヘッジの時期が来たことを示唆しています。",
    bodyOriginal: `Traders are completely enthralled by the bull market — but surging Nasdaq volatility suggests it is time to hedge.`,
    bodyJa: `トレーダーは強気市場に完全に魅了されていますが、ナスダックのボラティリティの急上昇は、ヘッジの時期が来たことを示唆しています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/why-a-hidden-divergence-between-the-vix-and-nasdaq-volatility-has-the-smart-money-on-edge-cda23cc0?mod=mw_rss_topstories",
    publishedAt: "2026-07-09T22:19:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-615981",
    readTime: 2,
  },
  {
    id: "kevin-warsh-names-members-of-his-federal-7d7af9cd",
    title: "Kevin Warsh names members of his Federal Reserve task forces, including Marc Andreessen, Doug McMillon",
    titleJa: "ケビン・ウォーシュはマーク・アンドリーセン、ダグ・マクミロンらを連邦準備制度の特別委員会のメンバーに指名",
    summaryJa: "FRBのケビン・ウォーシュ議長は木曜日、FRBの運営を調査するための5つの特別委員会を構成する専門家の名前を発表した。そのリストにはウォール街の著名人、ビジネスリーダー、そして広範囲にわたる学者や元FRB関係者が含まれている。ウォーシュ氏は先月初めて特別委員会を設置する意向を明らかにし、コミュニケーション、データ、FRBのバランスシート、データ、生産性、雇用、政策立案者のインフレに対する見方の枠組みに取り組むと述べた。同グループは、ウォーシュ氏が約束した金融政策の見直しの一環として、インフレから人工知能まであらゆるものに取り組む予定だ。",
    bodyOriginal: `Federal Reserve Chairman Kevin Warsh on Thursday released names of the experts who will comprise five task forces to examine the institution's operations — a list that includes several prominent Wall Street names, business leaders and a wide expanse of academicians and former Fed officials.
Warsh first disclosed his intention to create the task forces last month, saying they would tackle communications, data, the Fed's balance sheet, data, productivity and jobs and the framework for how the policymakers view inflation. The group's will tackle everything from inflation to artificial intelligence as part of Warsh's promised review of monetary policy.
Among the prominent names involved are venture capitalist Marc Andreessen, former Bank of England Governor Mervin King, and Greg Mankiw, former chairman of the White House's Council of Economic Advisers. Doug McMillon, the former CEO of Walmart, leads the names of business executives involved. Several of the names, including King, had been leaked previously.
"I am honored that the best minds from a range of disciplines have agreed to work with us to sharpen our performance as an institution," Warsh said. "The goal is straightforward: to ensure the Fed is best positioned to achieve our objectives in this consequential time."
A Fed news release did not indicate a timeline of when the task forces would complete their work, though Warsh has said he expects changes to come this year.
The statement also noted that the panels will "operate independently, with a mandate to follow the evidence, provide candid feedback, and produce rigorous findings" that will be reported back to officials on the Federal Open Market Committee.
Members represent a swath of interests, spanning ideologies and backgrounds.
Others named to the task forces include Raghuram Rajan, former governor the Reserve Bank of India; former Fed Governor Jeremy Stein and William White, a Canadian economist who warned about central bank easy money prior to the 2008 global financial crisis.
For Andreesen, this is the second prominent appointment in recent days, having been named in late June to the U.S. Defense Policy Board, a civilian advisory group for the Pentagon. Andreesen is on the productivity and jobs task force.
When he initially announced the task forces, Warsh, who has been chairman for less than two months, said the groups would "start with first principles; ask hard questions; examine current practice; consider alternatives; and, ultimately, propose next steps for policymaker consideration."
The chairman said in the Thursday announcement that the Fed has "resolve to pursue our mandate with rigor."
The task forces are expected to take a sharp look at Fed orthodoxy. Warsh already has had an impact on Fed communications as officials look to provide less guidance about where policy is headed and focus more on their "reaction function," or the conditions under which they will adjust interest rates. The post-meeting statement in June was notably shorter than prior versions.
The members of the task forces are:
Communications: Peter R. Fisher, professor of practice, Foster School of Business, University of Washington; Arminio Fraga, founder and chairman, Gávea Investimentos and the former president of the Central Bank of Brazil; and King.
Balance Sheet Policy: Karen Dynan, Harvard economist; Rajan and Stein.
Data: McMillon, Harvard economist Raj Chetty and University of Chicago economist Kevin Murphy.
Productivity and Jobs: Andreesen, Stanford economist Charles I. Jones, and Asha Sharma, executive vice president and XBOX CEO at Microsoft.
Inflation Frameworks: Mankiw, White and New York University economist Thomas Sargent.
The groups will be supported as well by Fed staff.`,
    bodyJa: `FRBのケビン・ウォーシュ議長は木曜日、FRBの運営を調査するための5つの特別委員会を構成する専門家の名前を発表した。そのリストにはウォール街の著名人、ビジネスリーダー、そして広範囲にわたる学者や元FRB関係者が含まれている。
ウォーシュ氏は先月初めて特別委員会を設置する意向を明らかにし、コミュニケーション、データ、FRBのバランスシート、データ、生産性、雇用、政策立案者のインフレに対する見方の枠組みに取り組むと述べた。同グループは、ウォーシュ氏が約束した金融政策の見直しの一環として、インフレから人工知能まであらゆるものに取り組む予定だ。
関与した著名人の中には、ベンチャーキャピタリストのマーク・アンドリーセン氏、元イングランド銀行総裁マービン・キング氏、元ホワイトハウス経済諮問委員長グレッグ・マンキュー氏などが含まれる。ウォルマートの元最高経営責任者（CEO）であるダグ・マクミロン氏が、関与した企業幹部の名前を率いている。キング氏を含む数人の名前は以前にリークされていた。
「さまざまな分野の最高の人材が、機関としてのパフォーマンスを向上させるために私たちと協力することに同意したことを光栄に思います」とウォーシュ氏は述べた。 「目標は単純明快で、この重大な時期にFRBが目標を達成するために最適な立場にあることを保証することだ。」
FRBのニュースリリースでは、タスクフォースがいつ作業を完了するかについてのスケジュールは示されていないが、ウォーシュ総裁は今年中に変更が加えられると予想していると述べた。
声明ではまた、委員会は「証拠を追跡し、率直なフィードバックを提供し、厳密な調査結果を生み出すという使命のもと、独立して運営」され、それらの調査結果は連邦公開市場委員会の当局者に報告されると述べた。
メンバーは、イデオロギーや背景にまたがる幅広い関心を代表しています。
特別委員会に指名された他のメンバーには、元インド準備銀行総裁のラグラム・ラジャン氏も含まれる。元FRB総裁のジェレミー・スタイン氏と、2008年の世界金融危機前に中央銀行のイージーマネーについて警告したカナダの経済学者ウィリアム・ホワイト氏。
アンドリーセン氏にとって、これは、6月下旬に国防総省の文民諮問機関である米国国防政策委員会のメンバーに指名されて以来、ここ数日で2度目の重要な任命となる。アンドリーセン氏は生産性と雇用の特別委員会に所属している。
委員長に就任して2カ月も経っていないウォーシュ氏は、最初にタスクフォースの設立を発表した際、各グループが「第一原則から始め、厳しい質問をし、現在の慣行を調査し、代替案を検討し、最終的には政策立案者の検討のために次のステップを提案する」と述べた。
議長は木曜日の発表で、FRBは「我々の任務を厳格に遂行する決意」をしていると述べた。
特別委員会はFRBの正統性を厳しく検討すると予想されている。当局者が政策の方向性についてのガイダンスをあまり提供せず、「反応機能」、つまり金利を調整する条件に重点を置く傾向にあるため、ウォーシュ氏はすでにFRBのコミュニケーションに影響を与えている。 6月の会合後の声明は、以前の声明に比べて著しく短かった。
タスクフォースのメンバーは次のとおりです。
コミュニケーション: ピーター R. フィッシャー、ワシントン大学フォスター ビジネス スクール実践教授。アルミニオ・フラガ氏、Gávea Investimentos の創設者兼会長、ブラジル中央銀行の元総裁。そしてキング。
バランスシート政策: カレン・ダイナン、ハーバード大学の経済学者。ラージャンとスタイン。
データ: マクミロン、ハーバード大学の経済学者ラジ・チェッティ、シカゴ大学の経済学者ケビン・マーフィー。
生産性と雇用: アンドリーセン氏、スタンフォード大学の経済学者チャールズ I. ジョーンズ氏、およびマイクロソフトの執行副社長兼 XBOX CEO のアシャ シャルマ氏。
インフレの枠組み: マンキュー、ホワイト、ニューヨーク大学の経済学者トーマス・サージェント。
これらのグループはFRB​​スタッフからも支援される予定だ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/09/kevin-warsh-names-members-of-his-federal-reserve-task-forces-including-marc-andreessen-doug-mcmillon.html",
    publishedAt: "2026-07-09T19:53:20+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
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
