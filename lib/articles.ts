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
    id: "end-of-an-era-for-this-long-term-bond-bu-a606187d",
    title: "End of an era for this long-term bond bull as inflation takes hold and yields trend higher",
    titleJa: "インフレが定着し、利回りが上昇傾向にあるため、この長期債券強気の時代は終わりを迎える",
    summaryJa: "ホイジントン・インベストメント・マネジメントとそのチーフエコノミスト、レイシー・ハント氏は30年以上にわたり、債券に対して強気の姿勢を示してきた。しかし今、彼らの意見は変わりました。",
    bodyOriginal: `For more than three decades, Hoisington Investment Management and its chief economist Lacy Hunt have been bullish on bonds. But now their opinion has changed.`,
    bodyJa: `ホイジントン・インベストメント・マネジメントとそのチーフエコノミスト、レイシー・ハント氏は30年以上にわたり、債券に対して強気の姿勢を示してきた。しかし今、彼らの意見は変わりました。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/end-of-an-era-for-this-long-term-bond-bull-as-inflation-takes-hold-and-yields-trend-higher-a7f59e1f?mod=mw_rss_topstories",
    publishedAt: "2026-07-17T13:39:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-56597806",
    readTime: 2,
  },
  {
    id: "import-prices-post-surprise-gain-as-cost-cb35b9ec",
    title: "Import prices post surprise gain as costs of goods from China hit highest since 2008",
    titleJa: "中国からの商品コストが2008年以来最高値に達する中、輸入価格が予想外の上昇を記録",
    summaryJa: "中国からの商品価格が18年以上ぶりの月次レベルで上昇したため、米国に持ち込まれる商品のコストは6月に予想外の上昇を記録したと労働統計局が金曜日に報告した。エネルギーの下落が他の地域の上昇で相殺され、輸入物価は同月で０．３％上昇した。年率ベースでは、価格は7.1％上昇し、2022年8月以来の大幅な上昇となった。ダウ・ジョーンズが調査したエコノミストらは6月に0.8％下落すると予想していた。",
    bodyOriginal: `The cost of goods brought into the U.S. posted an unexpected increase in June as the price of goods from China rose by their largest monthly level in more than 18 years, the Bureau of Labor Statistics reported Friday.
Import prices were up 0.3% for the month, as a drop in energy was more than offset by increases elsewhere. On an annual basis, prices jumped 7.1%, the biggest move higher since August 2022. Economists surveyed by Dow Jones had been looking for a decline of 0.8% in June.
The report indicated that the artificial intelligence buildout could be hitting prices, as costs rose for computers, peripherals and semiconductors.
Beyond those areas, the BLS said industrial and service machinery drove costs higher, offsetting a 0.4% decrease in fuels and lubricants. The group posted a 12.6% jump in May.
China also played a role, with import prices rising 0.9%, the biggest monthly move since January 2008, a possible reflection of tariff impacts. The 12-month increase was 1.3%, the largest yearly gain since the period from November 2021 to November 2022. Export prices to China actually fell 0.2% in June, but were up 7.4% annually, the biggest monthly increase dating back to August 2022.
The report broadly showed that while a decline in oil costs helped lower prices in June, inflation is showing signs of broadening beyond energy as businesses face a variety of rising costs. Export prices broadly decreased 0.6%, the first monthly drop since May 2025. However, export prices rose 10.2% annually.
Earlier this week, the BLS reported that both consumer and wholesale prices declined, largely on the back of sliding energy costs as tensions between the U.S. and Iran briefly softened.
Federal Reserve officials have been grappling with the inflation question since prices spiked following the U.S. and Israel attacks on Iran that began in late February.
In congressional hearings earlier this week, Fed Chairman Kevin Warsh said he didn't view the softer June inflation reports as an indication that the central bank's work is finished in returning inflation back to the 2% goal. Indeed, the reports showed consumer prices up 3.5% from a year ago and wholesale costs rising 5.5%, despite both measures declining in June.
On Thursday, Dallas Fed President Lorie Logan said she thinks benchmark interest rates should be "modestly higher" to address the inflation problem. Similarly, Cleveland Fed President Beth Hammack on Friday also suggested that policy needs to be tighter.
"For the first time in my tenure, I'm hearing from businesses who say they think we need to take action to curb inflation, and from consumers who can't make ends meet about a growing sense of despair," Hammack said in a LinkedIn post.`,
    bodyJa: `中国からの商品価格が18年以上ぶりの月次レベルで上昇したため、米国に持ち込まれる商品のコストは6月に予想外の上昇を記録したと労働統計局が金曜日に報告した。
エネルギーの下落が他の地域の上昇で相殺され、輸入物価は同月で０．３％上昇した。年率ベースでは、価格は7.1％上昇し、2022年8月以来の大幅な上昇となった。ダウ・ジョーンズが調査したエコノミストらは6月に0.8％下落すると予想していた。
報告書は、コンピューター、周辺機器、半導体のコストが上昇し、人工知能の強化が価格に影響を及ぼしている可能性があると指摘した。
BLSは、これらの分野以外では、産業機械やサービス機械がコストを押し上げ、燃料と潤滑油の0.4％減少を相殺したと述べた。同グループは5月に12.6％の上昇を記録した。
中国も影響し、輸入物価は0.9％上昇し、2008年1月以来最大の月間上昇率となったが、これは関税の影響を反映している可能性がある。 12カ月間の上昇率は1.3％で、2021年11月から2022年11月以来最大の年間上昇率となった。中国への輸出価格は6月に実際には0.2％下落したが、年間では7.4％上昇し、月間上昇率としては2022年8月以来最大だった。
同報告書は、原油価格の下落が6月の物価下落に寄与した一方で、企業がさまざまなコスト上昇に直面しているため、インフレがエネルギー以外にも拡大する兆候を示していることを大まかに示した。輸出価格は全体的に0.6%下落し、2025年5月以来初めて月間下落となった。しかし、輸出価格は年間10.2%上昇した。
今週初め、BLSは、米国とイラン間の緊張が一時的に緩和したことによるエネルギーコストの下落を主因として、消費者物価と卸売物価がともに下落したと報告した。
2月末に始まった米国とイスラエルのイラン攻撃を受けて物価が急騰して以来、FRB当局者らはインフレ問題に取り組んでいる。
今週初めの議会公聴会で、FRBのケビン・ウォーシュ議長は、6月のインフレ報告が軟調だったことは、インフレ率を2％の目標に戻す中銀の取り組みが終了したことを示すものとは考えていないと述べた。実際、報告書によれば、6月はいずれの指標も低下したにもかかわらず、消費者物価は前年比​​3.5％上昇、卸売コストは5.5％上昇した。
ダラス連銀のローリー・ローガン総裁は木曜日、インフレ問題に対処するために指標金利は「適度に高め」であるべきだとの考えを述べた。同様に、クリーブランド連銀のベス・ハンマック総裁も金曜日、政策をより引き締める必要があると示唆した。
ハマック氏はリンクトインへの投稿で、「私の在任中初めて、インフレを抑制するために行動を起こす必要があると考える企業や、生活のやりくりができない消費者から絶望感が高まっているという声を聞いた」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/import-prices-post-surprise-gain-as-costs-of-goods-from-china-hit-highest-since-2008.html",
    publishedAt: "2026-07-17T13:34:48+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "iran-says-civilian-infrastructure-hit-by-0fbeb562",
    title: "Iran says civilian infrastructure hit by latest U.S. strikes, expands attacks to Syria, Bahrain",
    titleJa: "イラン、米国の最近の攻撃で民間インフラが打撃を受け、攻撃をシリアとバーレーンに拡大と発表",
    summaryJa: "イランは金曜日、米国がイスラム共和国に対する6夜連続の攻撃を完了する中、シリアとバーレーンの米軍を標的にし、地域への攻撃を拡大したと主張した。対立の激化は、米国とイランが先月署名した脆弱な停戦協定がさらに崩れる兆しを見せている中で起きている。暫定合意は、戦略的に重要なホルムズ海峡を再開し、戦闘を停止することを目的としていた。",
    bodyOriginal: `Iran on Friday claimed it had targeted U.S. military forces in Syria and Bahrain, widening its attacks in the region as the U.S. completed its sixth consecutive night of strikes on the Islamic Republic.
The escalating standoff comes as the fragile truce signed by the U.S. and Iran last month showed further signs of unravelling. The interim agreement was intended to reopen the strategically vital Strait of Hormuz and stop the fighting.
U.S. Central Command said overnight that it had completed its latest major wave of strikes against Iran, hitting dozens of military targets, including air defenses, logistics infrastructure and maritime capabilities.
In a social media post, Centcom said more than 50,000 service members were operating across the Middle East, adding that they "remain vigilant, lethal, and ready."
Iranian state media said the U.S. air attacks overnight had killed eight people and wounded 20, reportedly alleging that American strikes had hit civilian infrastructure, including bridges, a train station and an airport. CNBC could not independently verify the report.
Iran's Revolutionary Guard, meanwhile, said that it attacked a U.S. command center in Syria's al-Tanf region, according to state media. There was no immediate comment from the U.S. military or the Syrian government.
The U.S. military said in February that it had completed the withdrawal of forces from the strategic al-Tanf military base, which sits near the Syrian border with Iraq and Jordan.
Syria has sought to avoid being drawn into regional hostilities, with President Ahmed al-Sharaa telling a Chatham House event in March that the country would "remain outside" the conflict unless it is subjected to direct attacks.
Kuwaiti authorities said Friday that one of the country's power generation and water desalination stations was hit in an Iranian attack, causing widespread damage.
Kuwait's Electricity Water and Renewable Energy Ministry said via social media that it had extinguished a blaze triggered by the attack and was working to assess the damage and get the station working again.
Kuwait is known to be overwhelmingly dependent on desalination for drinking water, with almost 90% of the arid nation's water demand satisfied through seawater desalination plants.
Air raid sirens were activated in Bahrain overnight, with the country's Defence Force saying it had intercepted multiple aerial attacks from Iran. The alert followed a claim by Iran that it had targeted U.S. aircraft at the Sakhir airbase in Bahrain.
Jordan and Qatar also both said they had intercepted Iranian missiles.
Trump: 'We are likewise winning big in Iran'
U.S. President Donald Trump has insisted the war with Iran is going well, saying Thursday in a primetime address to the American public: "We are likewise winning big in Iran, and you will see the fruits of that labor very, very shortly."
The U.S. president had threatened to strike Iran's bridges and power plants next week if the country refused to return to the negotiating table.
Ian Lesser, distinguished fellow at GMF, a Washington-based think tank, said there appears to be a risk of the U.S. and Iran becoming mired in a so-called forever war.
"There's a risk of this, but of course we were in essentially a cold and occasionally hot war with Iran for decades," Lesser told CNBC by video call.
"I think in some sense this is misjudgment by the current administration. But it is also part of a pattern in the American approach to the use of force, that we have enormous capability and enormous operational prowess and we are hobbled by strategic mistakes," he added.
Oil prices were higher on Friday, firmly on track to register bumper weekly gains.
International benchmark Brent crude futures with September delivery advanced 1.7% to trade at $85.72 per barrel, while U.S. West Texas Intermediate futures with August delivery gained 2.2% to trade at $80.63.
Both oil contracts are up more than 11% so far this week and on track for their best weekly performance since late April.`,
    bodyJa: `イランは金曜日、米国がイスラム共和国に対する6夜連続の攻撃を完了する中、シリアとバーレーンの米軍を標的にし、地域への攻撃を拡大したと主張した。
対立の激化は、米国とイランが先月署名した脆弱な停戦協定がさらに崩れる兆しを見せている中で起きている。暫定合意は、戦略的に重要なホルムズ海峡を再開し、戦闘を停止することを目的としていた。
米中央軍は一夜にして、イランに対する最新の大規模攻撃を完了し、防空、兵站インフラ、海洋能力を含む数十の軍事目標を攻撃したと発表した。
セントコムはソーシャルメディアへの投稿で、5万人以上の軍人が中東全域で活動していると述べ、「警戒し、危険を冒し、備えを続けている」と付け加えた。
イラン国営メディアは、米軍による一晩の空襲で８人が死亡、２０人が負傷したと伝え、米軍の空爆で橋や駅、空港などの民間インフラが破壊されたと報じた。 CNBCはこの報道を独自に検証できなかった。
一方、国営メディアによると、イラン革命防衛隊はシリアのアル・タンフ地域にある米軍司令部を攻撃したと発表した。米軍やシリア政府から直ちにコメントは得られていない。
米軍は２月、イラクとヨルダンとのシリア国境近くにある戦略的アルタンフ軍事基地からの部隊の撤退を完了したと発表した。
シリアは地域的な敵対関係に巻き込まれることを避けようとしており、アハメド・アル・シャラー大統領は３月のチャタム・ハウスのイベントで、直接攻撃を受けない限り紛争の「外側に留まる」と述べた。
クウェート当局は金曜日、同国の発電所と淡水化施設の1つがイランの攻撃により攻撃され、広範囲に被害が生じたと発表した。
クウェートの電力・水・再生可能エネルギー省はソーシャルメディアを通じて、攻撃によって引き起こされた火災は鎮火し、被害状況を調査して発電所を再稼働させるべく取り組んでいると述べた。
クウェートは飲料水の淡水化に圧倒的に依存していることで知られており、乾燥国の水需要のほぼ90％が海水淡水化プラントによって満たされている。
バーレーンでは夜空襲警報が鳴り響き、同国国防軍はイランからの複数回の空襲を迎撃したと発表した。この警報は、バーレーンのサクヒール空軍基地にある米軍機を標的にしたとのイランの主張を受けてのことだった。
ヨルダンとカタールもイランのミサイルを迎撃したと発表した。
トランプ大統領「我々はイランでも同様に大きな勝利を収めている」
ドナルド・トランプ米大統領は、イランとの戦争は順調に進んでいると主張し、木曜、米国民に向けたゴールデンタイムの演説で「我々も同様にイランで大きな勝利を収めており、その努力の成果が間もなく現れるだろう」と述べた。
米国大統領は、イランが交渉のテーブルに戻ることを拒否した場合、来週イランの橋と発電所を攻撃すると脅していた。
ワシントンに本拠を置くシンクタンクGMFの著名研究員イアン・レッサー氏は、米国とイランがいわゆる永遠の戦争に陥るリスクがあるようだと述べた。
レッサー氏はビデオ通話でＣＮＢＣに対し、「リスクはあるが、もちろん我々は数十年にわたりイランと本質的に冷戦、時には熱戦を繰り広げていた」と語った。
「これはある意味、現政権の誤った判断だと思う。しかし、これは米国の武力行使アプローチのパターンの一部でもある。われわれは膨大な能力と膨大な作戦能力を持っているのに、戦略上の誤りによって足かせを食われているということだ」と同氏は付け加えた。
金曜日の原油価格は上昇し、毎週大幅な上昇を記録する軌道にしっかりと乗っています。
国際ベンチマークであるブレント原油先物（9月渡し）は1.7％上昇して1バレル当たり85.72ドルで取引され、8月渡しの米国ウェスト・テキサス・インターミディエイト先物は2.2％上昇して80.63ドルで取引された。
両石油契約は今週これまでに11％以上上昇しており、4月下旬以来最高の週間パフォーマンスを記録する軌道に乗っている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/iran-war-us-trump-syria-bahrain.html",
    publishedAt: "2026-07-17T13:34:42+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "inside-the-chinese-fraud-rings-stealing-a10b1af1",
    title: "Inside the Chinese fraud rings stealing billions from banks and retailers",
    titleJa: "銀行や小売業者から数十億ドルを盗む中国の詐欺グループの内部",
    summaryJa: "昨年の春、黒いエア ジョーダン T シャツを着た男性がルイジアナ州ロウズ店のセルフ レジ キオスクに歩いてきたとき、その男性は他の客と同じように見えました。約7分間にわたって、彼は系統的に1枚95ドルのさまざまなギフトカードを呼び出し、赤いベストを着た従業員が近くを取り囲む中、携帯電話を使ってタップして各カードの代金を支払ったことが監視ビデオに映った。",
    bodyOriginal: `When a man in a black Air Jordan T-shirt walked up to a self-checkout kiosk at a Louisiana Lowe's last spring, he looked like any other customer.
Over the course of about seven minutes, he methodically rang up different gift cards for $95 each, using his phone to tap-to-pay for each card as a red-vested associate circled nearby, surveillance video showed.
Unknown to the employee, the man was part of a sprawling Chinese crime ring, using stolen credit cards to buy the gift cards while a Southeast Asian scam compound coached him through each transaction through the wireless headphones in his ears, police say.
"We know that there are hundreds of individuals at any one time doing this across the country," said Adam Parks, an assistant special agent in charge with U.S. Homeland Security Investigations, who investigated the case. "Even though you think that's $95 every transaction, that adds up to a lot of money."
After the man left the hardware store, he purchased more gift cards with stolen credit card information at other retailers only to return to the original Lowe's the same day to repeat the act, Parks said. He was not arrested and is still a suspect, he added. Lowe's didn't respond to repeated requests for comment from CNBC.
While credit card theft and fraud isn't new, with the proliferation of tap-to-pay and growing use of retail apps, these digital thefts are shaping the next wave of organized retail crime and earning Chinese gangs as much as $1 billion annually, police said. Unlike typical retail theft operations — where criminals clear out shelves in big box stores and resell merchandise piece by piece on online marketplaces — the crimes can be carried out right under a store employee's nose or from a computer anywhere in the world.
"It's very low risk for the bad actors," said Scott Glenn, vice president of asset protection at The Home Depot. "It's not the same thing as walking into a Home Depot, filling up a cart full of power tools, and then walking out. It's just not as visible, it's not as obvious to what's happening out there and so it's become a more preferred method over the last several years."
Fraudsters have selected retailers as their targets because their platforms carry sensitive information such as stored credit cards and personal data but they do not have the same level of security as banks, according to industry experts and law enforcement.
There's no firm data on how much retailers are losing from digital forms of retail crime, but CNBC found around a dozen criminal cases across the country affecting a wide variety of retailers that police said involve a combination of organized groups and low-level fraudsters.
The cases are complex and often hard for local authorities to handle, said Capt. Matt Lawson of the Knox County Sheriff's Office in Tennessee, who said he's been investigating a fraud ring with ties to Chinese organized crime.
Unless the theft hits a certain dollar threshold or rises to the level of a federal crime, "it's kind of like they get away with it almost," he said.
Unpaid toll bills and pending criminal judgments
Tap-to-pay fraud, which involves a fraudster adding a stolen credit card to their digital wallet and using it to buy gift cards or merchandise, often starts with a familiar text message and can end with an unwitting consumer's identity up for sale on platforms such as Telegram.
Fraudsters send out mass text messages warning about unpaid tolls, expiring car registrations or pending arrests that are designed to scare consumers into providing their credit card information, email credentials or other sensitive data. AI has only made the schemes easier, as crime groups can scale the scams more quickly and make the messages appear more legitimate, experts said.
"Once a fraudster has a person's email password and credit card, they can load that credit card into a device that they control," said Jeff Otto, the chief marketing officer of Riskified, a tech company that works with retailers including Foot Locker, Peloton and BJ's Wholesale Club to fight fraud.
"When the bank reaches out to say, 'Hey, is that you loading the card?' They've already got access to the victim's email" and can often check it for a one-time passcode before the consumer notices, he said.
Low-level opportunists engaging in tap-to-pay schemes can operate independently, using the practice to either buy merchandise or purchase gift cards and resell them at a discount for cash.
But on the Chinese organized crime level, the practice involves an entire criminal network, Parks said. In order to get profits back to China, crime groups use tap-to-pay fraud to buy gift cards and then use those gift cards to purchase high-value goods that can be resold at a premium in China, such as iPhones with American settings, Parks said. The practice allows gangs to skirt strict banking laws both in the U.S. and China and convert higher amounts of cash into the legitimate economy.
At the heart of the strategy are foot soldiers such as the customer at Lowe's who police say helped carry out the fraud, which in the years since the Covid-19 pandemic has ramped up along with a surge of Chinese nationals at U.S. land crossings, Parks said.
People looking to enter the country illegally often rely on smugglers and organized crime networks, and they then owe a debt that crime groups require them to pay off once they're in the U.S.
"So [they're] going to instruct you on how to go into a store, convert the stolen credit card information into acquiring goods and then now you're going to ship those goods back to China," Parks said. "That's where a lot of times we get our arrests, but that is the lowest level of the organization."
Tap-to-pay schemes also can include retail app fraud, which involves stealing someone's credentials, logging into their account and using stored credit card information to purchase merchandise or gift cards.
Riskified's Otto showed CNBC how data breaches, phishing and social engineering, which involves piecing together publicly available information about someone to steal their identity, can give fraudsters access to a consumer's retail account.
CNBC saw that login credentials for Walmart's app and website were being sold on various Telegram channels for between $1.50 and $2.50 with information about how long the accounts had been active.
"They have Yahoo addresses that are 10 years old, Gmails that are 10 years old," Otto said. "These are older accounts that often get past some of the more rudimentary fraud checks [because] we tend to trust accounts that have been with us for a long time. And in this case, these can be sold."
Telegram didn't return a request for comment.
Compounding the issue is the fact that many retail apps and websites don't always have the same level of security as platforms like banking apps, Otto said. On their face, retail apps are for shopping, places for consumers to buy clothes, household necessities or makeup.
But they also contain stored credit cards, sensitive personal information and sometimes, access to a consumer's store-branded credit card. For example, Macy's customers can shop on its app and use the same platform to pay their Macy's credit card bill.
"It has a lot to do with the fact that they are focused on convenience and they're focused on conversion, generating the maximum amount of online revenue, and because of that, they do not use bank-grade security," Otto said of the retail industry. "They don't want to add additional friction."
In a statement to CNBC, Walmart said "customer privacy and safety is a top priority."
"While we won't disclose specific security measures, Walmart has systems in place to help detect bad actors, prevent, and respond to unauthorized account access and is continuously enhancing these protections," the company said. "In addition, full payment card information is not stored in an unprotected form."
Using anime to disguise fraud
In a review of tap-to-pay cases across the country, CNBC found a mix of low-level opportunists and organized crime rings.
In January, Dancliff Labady was arrested in Miami and accused of stealing nearly $95,000 primarily using TJX Companies' store-branded credit cards for TJ Maxx, Marshall's and Home Goods, according to a police report. Police allege he obtained access to about 15 different customer accounts by calling Synchrony Bank, the card issuer, and adding a phone number he controlled to the accounts. It's unclear what customer information Labady needed to provide to Synchrony to make the account changes.
Once Labady added his number to the accounts, he was able to add the cards to his digital wallet and conduct dozens of transactions at TJX stores across the Miami area over the holiday shopping season without having a physical card, police said. He was arrested after TJX's asset protection team reported the suspicious activity to Synchrony Bank.
Labady has pleaded not guilty and his attorney declined to comment. A spokesperson for Synchrony said it doesn't comment on ongoing investigations and is "cooperating fully with law enforcement."
In a statement, a TJX spokesperson said "protecting our customers' personal information and our technology systems is very important to us."
"We have measures in place across our systems and stores designed to identify and address potential fraudulent account activity," the spokesperson said. "We would also encourage our customers to maintain strong online account security practices, including not re-using passwords across websites or apps, and to report any suspected fraudulent activity to their bank or credit card company immediately."
There have been broader efforts to root out the fraud schemes, as well.
Since spring 2025, the Knox County Sheriff's Office arrested more than a dozen suspects with alleged ties to Chinese organized crime who officials said were traveling across the country and using stolen credit card information to purchase gift cards and launder money.
In a review of cell phones seized in connection with the cases, investigators found the suspects were using special apps that contained the stolen credit card information but disguised them as games to evade detection.
"They look like anime games. They kind of look like Pokemon characters," said Lawson, who's been investigating the fraud ring. "We would just kind of start tapping on them … and we would find the ones that were the actual tap-to-pay apps."
On a national level, Homeland Security Investigations' Project Red Hook targets gift card fraud and other forms of digital retail crime. So far, it has led to at least 239 arrests since January 2024 and is targeting some of the largest Chinese organized crime groups operating in the U.S., HSI said.
For several years, the retail industry and law enforcement organizations have been lobbying Congress to pass the Combating Organized Retail Crime Act, which they say would increase information sharing and make these types of complex cases easier to tackle. It passed the House in May and was recently included as part of an amendment to the National Defense Authorization Act in the Senate. It's expected to be voted on before the end of the year.
Lawson said he'd like to see better sharing of information.
"Law enforcement sometimes likes to hold information and not share everything and kind of compartmentalize it ... even the retailers are guilty of this."
"The more information that we get out when we notice these people are breaking these laws" the easier it will be to catch them, he said.
— Additional reporting by Paige Tortorelli`,
    bodyJa: `昨年の春、黒いエア ジョーダン T シャツを着た男性がルイジアナ州ロウズ店のセルフ レジ キオスクに歩いてきたとき、その男性は他の客と同じように見えました。
約7分間にわたって、彼は系統的に1枚95ドルのさまざまなギフトカードを呼び出し、赤いベストを着た従業員が近くを取り囲む中、携帯電話を使ってタップして各カードの代金を支払ったことが監視ビデオに映った。
警察によると、この男は従業員には知らされていなかったが、東南アジアの詐欺集団が彼の耳にワイヤレスヘッドフォンを介して各取引を指導していた間、盗んだクレジットカードを使用してギフトカードを購入していた、無秩序に広がる中国の犯罪組織の一員だったという。
この事件を捜査した米国土安全保障捜査担当特別捜査官補のアダム・パークス氏は、「全国で一度に何百人もの人物がこのような行為を行っていることを知っている」と語った。 「取引ごとに 95 ドルだと思っていても、合計するとかなりの金額になります。」
パークス氏によると、男性は金物店を出た後、他の小売店で盗んだクレジットカード情報を含むギフトカードをさらに購入したが、その日のうちに元のロウズ店に戻って同じ行為を繰り返したという。彼は逮捕されておらず、依然として容疑者であると付け加えた。ロウズはCNBCからの度重なるコメント要請に応じなかった。
クレジットカードの盗難や詐欺は新しいものではないが、タップ・ツー・ペイの普及と小売アプリの利用の増加により、これらのデジタル窃盗が組織的な小売犯罪の次の波を形成し、中国のギャングは年間10億ドルもの収益を上げていると警察は述べた。犯罪者が大型店の棚を空にしてオンライン市場で商品を少しずつ転売する典型的な小売窃盗とは異なり、この犯罪は店舗従業員の目の前で、または世界中のどこにいてもコンピュータから実行可能です。
ホーム・デポの資産保護担当バイスプレジデント、スコット・グレン氏は「悪者にとってリスクは非常に低い」と述べた。 「これは、ホームセンターに足を運び、電動工具をカートにいっぱい詰めてから出ていくのと同じではありません。単に目に見えにくいだけでなく、そこで何が起こっているかがそれほど明白ではないため、ここ数年でより好まれる方法になっています。」
業界の専門家や法執行機関によると、詐欺師が小売業者をターゲットに選んだのは、小売業者のプラットフォームには保存されているクレジットカードや個人データなどの機密情報が保存されているものの、銀行と同レベルのセキュリティーが備わっていないためだという。
デジタル形式の小売犯罪によって小売業者がどれだけの損失を被っているかについて、確かなデータはないが、CNBCは、全米でさまざまな小売業者に影響を及ぼした約12件の刑事事件を発見し、警察は組織的グループと低レベルの詐欺師が関与していると発表した。
テネシー州ノックス郡保安官事務所のマット・ローソン警部は、事件は複雑で、地方当局にとって対処が難しい場合が多いと述べ、中国の組織犯罪と関係のある詐欺組織を捜査していると述べた。
窃盗額が一定の基準に達するか、連邦犯罪のレベルに達しない限り、「ほぼ無罪を免れるようなものだ」と同氏は語った。
未払いの料金請求と保留中の刑事判決
タップトゥペイ詐欺は、詐欺師が盗んだクレジット カードを自分のデジタル ウォレットに追加し、それを使ってギフトカードや商品を購入するというもので、多くの場合、見慣れたテキスト メッセージで始まり、最終的にはテレグラムなどのプラットフォームで気付かないうちに消費者の身元が売りに出されることもあります。
詐欺師は、消費者を脅してクレジット カード情報、電子メール資格情報、その他の機密データを提供させることを目的として、料金未払い、自動車登録の有効期限切れ、逮捕保留などについて警告するテキスト メッセージを大量に送信します。専門家らによると、犯罪グループはより迅速に詐欺を拡大し、メッセージをより正当なものに見せかけることができるため、AIによってこの計画は容易になっただけだという。
「詐欺師は、人の電子メールパスワードとクレジットカードを入手すると、そのクレジットカードを自分が管理するデバイスに読み込むことができます」と、フットロッカー、ペロトン、BJズホールセールクラブなどの小売業者と協力して詐欺と闘うハイテク企業リスクファイド社の最高マーケティング責任者ジェフ・オットー氏は語る。
「銀行が『カードをチャージしているのはあなたですか？』と手を差し伸べたとき、彼らはすでに被害者の電子メールにアクセスできており、消費者が気づく前にワンタイム パスコードをチェックできることがよくあると同氏は述べた。
タップ・ツー・ペイ方式に関与する低レベルの日和見主義者は、商品を購入したり、ギフトカードを購入して割引価格で転売して現金を得るという手法を利用して、独立して活動することができます。
しかし、中国の組織犯罪レベルでは、この行為には犯罪ネットワーク全体が関与しているとパークス氏は述べた。パークス氏によると、犯罪グループは利益を中国に還元するために、タップ・トゥ・ペイ詐欺を利用してギフトカードを購入し、そのギフトカードを使って米国仕様のiPhoneなど、中国で高額で転売できる高額商品を購入しているという。この慣行により、ギャングは米国と中国の両方で厳格な銀行法を回避し、より多額の現金を合法的な経済に換金することができます。
戦略の中心にいるのはロウズ店の顧客のような歩兵たちで、警察は詐欺の手助けをしたとしているが、新型コロナウイルス感染症のパンデミック以来、米国陸路を通過する中国人の急増に伴いその数も増加しているとパークス氏は述べた。
不法入国を狙う人々は密輸業者や組織犯罪ネットワークに頼ることが多く、犯罪組織から米国到着後に返済を求められる借金を抱えている。
「つまり、（彼らは）店に入り、盗まれたクレジットカード情報を変換して商品を入手する方法を指導し、その後、その商品を中国に送り返すことになるのです」とパークス氏は語った。 「そこで逮捕されることがよくありますが、それは組織の最下層です。」
タップツーペイ方式には、誰かの資格情報を盗み、そのアカウントにログインし、保存されているクレジット カード情報を使用して商品やギフト カードを購入する小売アプリ詐欺も含まれる可能性があります。
Riskified のオットー氏は CNBC に対し、データ侵害、フィッシング、ソーシャル エンジニアリング（誰かについて公開されている情報をつなぎ合わせて個人情報を盗むことを含む）によって、詐欺師が消費者の小売アカウントにどのようにアクセスできるかを示しました。
CNBC は、ウォルマートのアプリとウェブサイトのログイン認証情報が、アカウントがアクティブであった期間に関する情報とともにさまざまなテレグラム チャネルで 1.50 ドルから 2.50 ドルで販売されていることを確認しました。
「彼らは10年前のYahooアドレスや10年前のGmailを持っている」とオットー氏は語った。 「これらは古いアカウントであり、多くの場合、より初歩的な不正チェックを通過します。なぜなら、私たちは長期間使用しているアカウントを信頼する傾向があるからです。そして、この場合、これらは売却される可能性があります。」
テレグラムはコメント要請に応じていない。
オットー氏によると、多くの小売アプリやウェブサイトが銀行アプリなどのプラットフォームと同じレベルのセキュリティを常に備えているわけではないという事実が、問題をさらに悪化させているという。表面的には、小売アプリはショッピングのためのものであり、消費者が衣服、家庭用品、化粧品を購入する場所です。
ただし、保存されたクレジット カードや機密の個人情報、場合によっては消費者のストア ブランドのクレジット カードへのアクセスも含まれています。たとえば、Macy's の顧客はアプリで買い物をし、同じプラットフォームを使用して Macy's のクレジット カード請求書を支払うことができます。
オットー氏は小売業界について、「利便性を重視し、オンライン収益を最大化するコンバージョンに重点を置いているという事実と大きく関係しており、そのため銀行レベルのセキュリティを採用していない」と述べた。 「彼らはさらなる摩擦を加えたくないのです。」
ウォルマートはCNBCへの声明で、「顧客のプライバシーと安全は最優先事項だ」と述べた。
「具体的なセキュリティ対策については明らかにしないが、ウォルマートは不正行為の検出、不正なアカウントアクセスの防止、対応を支援するシステムを導入しており、これらの保護を継続的に強化している」と同社は述べた。 「さらに、完全な支払いカード情報が保護されていない形式で保存されることはありません。」
アニメを利用して詐欺を装う
CNBCは全米のタップ・トゥ・ペイ事件を調査した結果、低レベルの日和見主義者と組織犯罪組織が混在していることを発見した。
警察の報告書によると、ダンクリフ・ラバディ容疑者は1月にマイアミで逮捕され、主にTJX CompaniesのTJ Maxx、Marshall's、Home Goodsの店舗ブランドのクレジットカードを使用して9万5,000ドル近くを盗んだ疑いで起訴された。警察は、カード発行会社のシンクロニー銀行に電話し、管理していた電話番号をアカウントに追加することで、約15の異なる顧客アカウントにアクセスしたと主張している。アカウントを変更するために、Labady が Synchrony にどのような顧客情報を提供する必要があったのかは不明です。
警察によると、ラバディ容疑者は自分の番号をアカウントに追加すると、デジタルウォレットにカードを追加し、物理的なカードを持たずにホリデーショッピングシーズン中にマイアミ地域のTJX店舗で数十件の取引を行うことができたという。同氏は、TJXの資産保護チームが不審な行為をシンクロニー銀行に報告した後に逮捕された。
ラバディ氏は無罪を主張しているが、弁護士はコメントを拒否した。シンクロニーの広報担当者は、進行中の捜査についてはコメントせず、「法執行機関に全面的に協力している」と述べた。
TJXの広報担当者は声明で、「顧客の個人情報と当社の技術システムを保護することは当社にとって非常に重要だ」と述べた。
「当社では、潜在的な不正アカウント活動を特定して対処するための対策をシステムと店舗全体で実施している」と広報担当者は述べた。 「また、ウェブサイトやアプリ間でパスワードを再利用しないなど、強力なオンラインアカウントセキュリティ慣行を維持し、不正行為の疑いがある場合は直ちに銀行またはクレジットカード会社に報告することを顧客に推奨します。」
詐欺計画を根絶するための広範な取り組みも行われている。
ノックス郡保安官事務所は2025年春以降、中国の組織犯罪と関係がある疑いで十数人の容疑者を逮捕しており、当局者らによると、容疑者らは国中を旅し、盗んだクレジットカード情報を使ってギフトカードの購入やマネーロンダリングを行っていたという。
捜査当局は、事件に関連して押収した携帯電話を調べたところ、容疑者らが盗んだクレジットカード情報を含む特殊なアプリをゲームに見せかけて検出を逃れていたことを発見した。
「それらはアニメゲームのように見えます。ポケモンのキャラクターのようにも見えます」と詐欺組織を捜査しているローソン氏は語った。 「私たちはそれらをちょっとタップし始めました…そして実際のタップ・トゥ・ペイ・アプリであるものを見つけました。」
国家レベルでは、国土安全保障調査局のプロジェクト レッドフックは、ギフトカード詐欺やその他の形式のデジタル小売犯罪をターゲットにしています。 HSIによると、2024年1月以降これまでに少なくとも239人の逮捕につながり、米国で活動する最大規模の中国組織犯罪グループの一部が標的となっているという。
小売業界と法執行機関は数年にわたり、情報共有が強化され、この種の複雑な事件への取り組みが容易になるとして、組織的小売犯罪対策法を可決するよう議会に働きかけてきた。この法案は5月に下院を通過し、最近上院で国防権限法改正案の一部として盛り込まれた。年末までに採決される予定だ。
ローソン氏は、情報共有の改善を望むと述べた。
「法執行機関は、情報を保持することを好み、すべてを共有せず、ある種の区分化を行うことがあります。小売業者でさえもこの罪を犯しています。」
「これらの人々が法律を破っていることに気付いたときに得られる情報が多ければ多いほど、彼らを捕まえるのは容易になるだろう」と彼は述べた。
— Paige Tortorelli による追加レポート`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/tap-pay-fraud-retail-crime.html",
    publishedAt: "2026-07-17T13:12:11+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "economic-outlook-is-worsening-and-trump-8869b0b6",
    title: "Economic outlook is worsening and Trump is getting blamed, CNBC survey finds",
    titleJa: "経済見通しは悪化し、トランプ大統領が非難されていることがCNBCの調査で判明",
    summaryJa: "最新のCNBC全米経済調査によると、株式市場の活況とインフレ率の改善にも関わらず、国民はパンデミック直後の数年間と同様に経済に憂鬱であり、日用品のコストに対する懸念が高まっているという。その結果、ドナルド・トランプ大統領の支持率は大幅にマイナスが続いたが、議会の支配を求める国民の意向という点では民主党にとってはささやかな優位に過ぎなかった。",
    bodyOriginal: `Despite a booming stock market and improving inflation numbers, the public is as depressed about the economy as it has been since the years just after the pandemic and increasingly concerned about the cost of everyday goods, according to the latest CNBC All-America Economic Survey.
The result: continued deeply negative approval numbers for President Donald Trump yet only a modest advantage for Democrats when it comes to the public's preference for control of Congress.
The survey of 1,000 adults nationwide, with a margin of error of plus or minus 3.1%, found that 61% of the public is pessimistic about the current state of the economy and about the outlook for the future. That is the highest percentage since December 2023, when the country was just emerging from the pandemic-era inflation. Only 25% are optimistic about the economy now and for the future.
Here are the full results from the survey
"More voters expect things to get worse by a 41/29% margin, leaving the electorate in a distinctly sour mood heading into the midterm election cycle,'' said Micah Roberts, partner at Public Opinion Strategies, the Republican pollsters for the survey.
In response to higher prices, 47% of the public report cutting back on essential items, like food and medical care, up 6 points from the April survey.
Two-thirds say they are reducing purchases of nonessentials, like eating out and entertainment, up 5 points. Americans also say they are reducing travel and using credit cards in greater percentages than they did in April.
These numbers come amid a recent decline in oil and gasoline prices and stand in contrast to steady and modest growth reported in national retail sales.
But the national numbers could be driven by spending from the wealthy. The All-America survey finds that 60% of those with incomes below $30,000 are reducing their outlays for essentials, compared with just 35% of those with incomes above $100,000.
The survey's Democratic and Republican pollsters both say the modest drop in gasoline prices over the past several weeks is not enough to offset the lingering effects of both the recent and past surges in prices.
"People are still paying a lot more for stuff than they were a year and a half ago, two years ago, and that's recent enough in memory that it still hurts and it still drives a lot of anger,'' said Jay Campbell, partner at Hart Research, the Democratic pollster for the survey. "When gas prices drop 50 cents for a month, that's just not enough to make up the difference."
Low marks on the economy
Trump's approval ratings remain deeply underwater, though largely unchanged from the CNBC April survey.
The latest survey found the president's net approval rating at 40%, with 59% disapproving, 1 point worse than the April survey. Sixty percent disapprove of his handling of the economy, compared with 38% approving. Both changes are within the poll's margin of error but, at -22, place the president the most underwater he has been in his political career.
The survey also found the public disapproving of Trump's handling of the war with Iran by a 63% to 35% margin, and his handling of inflation and the cost of living by a 68% to 31% margin.
Still the Democratic Party has just a 4-point advantage on congressional preference, unchanged from April, as it appears the party is only benefiting modestly from the dissatisfaction with the economy and the Iran war.
"It means Democrats have an advantage at this point now, five months out from the election, but it's not an overwhelming advantage," Campbell said. "It doesn't point to a wave at the moment and I think that's what my baseline is."
Both pollsters pointed to a sharply divided electorate being "locked into" their parties and reluctant to switch sides however much concern they may have with the economy. The survey found, for example, partisans digging in and increasing their support for their chosen party compared with April, largely offsetting each other and leading to no change in the overall preference for congressional control.
It's also an environment where each party has been defining the other by their extremes and having some success doing so.
Half of all voters say they are unlikely to support a democratic socialist candidate, with 32% saying they would support one. An endorsement by the president is somewhat worse, with 52% saying they would not support such a candidate. Worst of all are self-described MAGA candidates, which the survey found 57% of the public said they would be unlikely to support.
Split on the issues
On the most pressing issues, both parties have their own advantages.
Democrats have a 7-point lead on the most important concern, the cost of food and groceries, and a 3-point lead on the second-most important issue, "protecting democracy."
But Republicans lead by 22 points on the third issue — immigration and border security — the largest advantage on any of the 10 issues on the list. That's followed by a 6-point Democratic lead on housing and an 18-point advantage on the cost of healthcare.
Democrats, independents and women, especially women 18-49, put the cost of food as the top issue. So do white voters and voters of color, along with voters in all income groups, except the very top income group who single out "protecting democracy."
Republicans are the only major demographic group for whom immigration is the top issue. Meanwhile, voters aged 18-34 elevate housing to the top spot, with 46% saying it's a major issue. The cost of food for the youngest cohort is a distant second at 33%.
Among the starkest divisions in the survey are those surrounding the war with Iran, which has lost support compared with the April survey.
Just 48% of the public believe the military action against Iran is worth it to disrupt the country's ability to develop nuclear weapons, down from 53% in April. Half the country say it's not worth it, up from 44% in the prior survey. The president's net approval on dealing with Iran fell to -28, 3 points worse than the prior survey.
Trump is underwater with parts of his own party on the Iran war. Just 47% of non-MAGA Republicans, who represent about a third of the GOP, approve of the president's handling of Iran, with 50% approving. By contrast, 86% of MAGA Republicans support the president's handling of the issue.`,
    bodyJa: `最新のCNBC全米経済調査によると、株式市場の活況とインフレ率の改善にも関わらず、国民はパンデミック直後の数年間と同様に経済に憂鬱であり、日用品のコストに対する懸念が高まっているという。
その結果、ドナルド・トランプ大統領の支持率は大幅にマイナスが続いたが、議会の支配を求める国民の意向という点では民主党にとってはささやかな優位に過ぎなかった。
全国の成人1,000人を対象としたこの調査では、プラスマイナス3.1％の誤差の範囲で、国民の61％が経済の現状と将来の見通しについて悲観的であることが判明した。この割合は、同国がパンデミック時代のインフレから脱却しつつあった2023年12月以来最高となった。現在および将来の経済について楽観的としている人はわずか 25% です。
調査結果の全文はこちら
同調査の共和党世論調査会社パブリック・オピニオン・ストラテジーズのパートナー、ミカ・ロバーツ氏は「より多くの有権者が41/29％の差で状況が悪化すると予想しており、中間選挙サイクルに向けて有権者のムードは明らかに険悪になっている」と述べた。
物価上昇に対応して、国民の47％が食品や医療などの必需品の削減を回答しており、4月の調査から6ポイント増加した。
3 分の 2 は、外食や娯楽などの必需品以外の購入を減らしていると回答しており、5 ポイント増加しています。米国人はまた、旅行を減らし、クレジットカードの使用率が4月よりも増加していると述べている。
これらの数字は最近の石油とガソリン価格の下落の中で出たもので、全国小売売上高が安定的かつ緩やかな成長を報告していることとは対照的である。
しかし、全国的な数字は富裕層の支出によって左右される可能性がある。全米調査では、収入が 30,000 ドル未満の人の 60% が必需品への支出を削減しているのに対し、収入が 100,000 ドルを超える人ではわずか 35% であることがわかりました。
調査対象となった民主党と共和党の世論調査担当者はいずれも、過去数週間のガソリン価格の小幅な下落だけでは、最近および過去の価格高騰による長引く影響を相殺するには不十分だと指摘している。
同調査の民主党世論調査会社ハート・リサーチのパートナー、ジェイ・キャンベル氏は、「人々は今でも1年半前、2年前よりもずっと多くのものにお金を払っている。それは記憶に新しいことであり、今でも傷つき、大きな怒りを引き起こしている」と述べた。 「ガソリン価格が 1 か月で 50 セント下がっても、その差を補うには十分ではありません。」
経済の評価が低い
トランプ大統領の支持率は、CNBCの4月の調査からはほとんど変わっていないものの、依然として深刻な状況にある。
最新の調査では、大統領の純支持率は40％、不支持率は59％で、4月の調査より1ポイント悪化した。同氏の経済政策への対応については６０％が不支持、３８％が支持している。どちらの変化も世論調査の誤差の範囲内だが、-22という数字は、大統領の政治キャリアの中で最も水面下にあるものとなる。
この調査ではまた、国民がイランとの戦争へのトランプ大統領の対応について63％対35％の差で不支持を示し、インフレと生活費への対応については68％対31％の差で不支持を示していることも判明した。
それでも民主党は、経済とイラン戦争に対する不満からささやかな恩恵を受けているだけとみられるため、議会選好度で4ポイントの優位にとどまっており、4月から変わっていない。
キャンベル氏は「選挙まで５カ月となった現時点で民主党が有利であることを意味するが、圧倒的な有利というわけではない」と述べた。 「現時点では波を示唆していませんし、それが私のベースラインだと思います。」
両世論調査機関は、大きく分裂した有権者が自分たちの政党に「固定」されており、経済にどれほどの懸念を抱いていても党派を変えることに消極的であると指摘した。この調査では、例えば、4月と比較して党派が自分の選んだ政党への支持を深め、増加していることが判明したが、それらは互いにほぼ相殺され、議会支配に対する全体的な選好に変化は見られなかった。
また、各当事者が極端な考え方で相手を定義し、それによって一定の成功を収めている環境でもあります。
全有権者の半数は民主社会主義者の候補者を支持する可能性は低いと回答し、32％が民主社会主義者の候補者を支持すると回答した。大統領の支持はやや悪く、52％がそのような候補者は支持しないと答えた。最も最悪なのは自称MAGA候補者で、調査では国民の57％が支持する可能性は低いと答えていることが判明した。
問題を分割する
最も差し迫った問題に関しては、双方にそれぞれの利点があります。
民主党は最も重要な懸案事項である食料品や食料品のコストで７ポイントリードし、２番目に重要な問題である「民主主義の保護」では３ポイントリードしている。
しかし、3番目の問題である移民と国境警備では共和党が22ポイントリードしており、リストにある10の問題の中で最大の優位性となっている。次いで、住宅分野で民主党が6ポイント、医療費で18ポイントリードしている。
民主党、無党派層、女性、特に18～49歳の女性は食費を最優先課題に挙げている。白人有権者と有色人種の有権者はもちろん、「民主主義の保護」を強調する最上位所得層を除くすべての所得層の有権者も同様である。
共和党は移民が最重要課題となっている唯一の主要な人口集団である。一方、18～34歳の有権者は住宅問題をトップの座に押し上げており、46％が住宅問題が主要な問題だと回答している。最年少コホートの食費は 33% で大きく 2 番目です。
この調査で最も鮮明な意見の一つに、イランとの戦争をめぐる意見があり、4月の調査と比較して支持を失っている。
イランに対する軍事行動が同国の核兵器開発能力を妨害する価値があると考える国民はわずか48％で、4月の53％から減少した。国の半数が価値がないと回答しており、前回調査の44％から増加した。イランへの対応に関する大統領の純支持率はマイナス２８に低下し、前回調査より３ポイント悪化した。
トランプ大統領はイラン戦争に関して自身の党の一部との関係に疑問を抱いている。共和党の約3分の1を占める非MAGA共和党員のうち、大統領のイラン対応を支持しているのはわずか47％で、50％が支持している。対照的に、MAGA共和党員の86％は大統領の問題への対応を支持している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/economic-outlook-is-worsening-and-trump-is-getting-blamed-cnbc-survey-finds.html",
    publishedAt: "2026-07-17T12:50:35+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "democratic-socialists-top-maga-candidate-1c59e1c4",
    title: "Democratic socialists top MAGA candidates among voters in CNBC's All-America poll",
    titleJa: "CNBCの全米世論調査で、有権者の中で民主社会主義者がMAGA候補者トップに",
    summaryJa: "金曜発表のCNBC全米経済調査で、より多くの有権者が「Make America Great Again」支持者やドナルド・トランプ大統領支持の候補者よりも、民主社会主義者の候補者を支持する可能性が高いことが判明した。この調査結果は、11月のニューヨーク市長ゾーラン・マムダニ氏の選挙に続き、全米で民主社会主義者の候補者が民主党予備選で勝利する中で発表された。この変化は、民主党を共産主義者だと攻撃的に決めつけている共和党にとって避雷針となった。",
    bodyOriginal: `More voters would be more likely to support a democratic socialist candidate than a Make America Great Again supporter or a candidate endorsed by President Donald Trump, the CNBC All-America Economic Survey released Friday found.
The survey's findings come as democratic socialist candidates win Democratic primaries across the country following the November election of New York City Mayor Zohran Mamdani. The shift has become a lightning rod for Republicans, who are aggressively branding Democrats as communists.
The results indicate that even with a number of self-described democratic socialists on the ballot, Democrats will have the upper hand heading into November's midterm election, which is widely viewed as a referendum on Trump. It also suggests voters are warming to the idea of a more muscular federal government that provides more services in exchange for higher taxes.
The poll found that 32% of registered voters would be more likely to vote for a candidate if they describe themselves as a Democratic socialist, while 50% would be less likely to vote for such a candidate. Twenty-nine percent of voters would be more likely to vote for a candidate with Trump's endorsement, while 52% would be less likely. A candidate who describes themself as a supporter of the MAGA movement does even worse, with only 27% of voters saying that would make them more likely to vote for them and 57% saying it would make their vote less likely.
CNBC's All America poll was conducted on July 8-12 with 1,000 registered voters in the U.S., in conjunction with Hart Research Associates and Public Opinion Strategies. It has a margin of error of +/-3.1%.
Many of the democratic socialists set to be on the ballot this year are calling for increased taxes on the wealthiest in America to fund universal healthcare, a higher minimum wage and universal basic income.
Their elections would be unlikely to spur an immediate change in policy, given Republicans' control of the White House through 2028. But it would mean a more adversarial relationship between Congress and the executive branch that could stall legislation the Trump administration favors, while offering a window into how Democrats would govern if they retake the White House in 2028.
Democrats also notch a four percentage-point lead in the generic ballot, with 49% of voters saying they would prefer a Democrat-controlled Congress and 45% preferring Republican control.
The survey found the president's approval rating at 40%, with 59% disapproving, one point worse than the April survey. Sixty percent disapprove of his handling of the economy, also a point worse than April, compared with 38% approving. Both changes are within the poll's margin of error, but are consistent with other recent polls on the president's standing.
Capitalism remains more popular than socialism in the U.S., the poll found, but has declined in public sentiment in recent years as socialism has gained.
Twenty-eight percent of registered voters polled viewed socialism positively, a leap up from 18% in 2024. Fifty percent of registered voters viewed capitalism positively, little changed from 51% in 2024. Forty-eight percent of voters viewed socialism negatively, while 27% viewed capitalism negatively in the poll released Friday.
Voters aged 18-34 preferred socialism by a margin of 18% points, while older age demographics preferred capitalism. That could reshape the electorate in the future. Or today's younger voters could evolve their preferences as they age.
"If these current attitudes were to persist over time, and the 18-49 year-olds of today were going to keep those types of attitudes, we're going to have a seismic shift in terms of the national conversation and economic policy prescriptions that we see coming out of Congress and different places over time," said Micah Roberts, a partner at Public Opinion Strategies, the Republican pollster for the survey. "The attitudes of 18-34 year-olds today are the reality of our country in 20 years."
Voters polled did not believe some form of socialism would be a good idea for the country, but by an extremely narrow margin. Forty-four percent of voters polled said some form of socialism would be a bad thing, while 40% said it would be a good thing — winnowing the gap by half from the last time it was polled. In a 2019 Gallup poll, 43% of adults viewed socialism as a good thing and 51% viewed it as a bad thing.
And in 1942, one of the first times the question was polled and as the world was embroiled in World War II, 25% of voters thought socialism was a good idea. Forty percent thought it was a bad idea, and 34% were undecided.`,
    bodyJa: `金曜発表のCNBC全米経済調査で、より多くの有権者が「Make America Great Again」支持者やドナルド・トランプ大統領支持の候補者よりも、民主社会主義者の候補者を支持する可能性が高いことが判明した。
この調査結果は、11月のニューヨーク市長ゾーラン・マムダニ氏の選挙に続き、全米で民主社会主義者の候補者が民主党予備選で勝利する中で発表された。この変化は、民主党を共産主義者だと攻撃的に決めつけている共和党にとって避雷針となった。
この結果は、民主社会主義者を自称する人物が多数投票に参加しているとしても、トランプ氏に対する国民投票と広く見られている11月の中間選挙に向けて民主党が優位に立つことを示している。また、増税と引き換えにより多くのサービスを提供する、より力強い連邦政府という考えに有権者が好意を寄せていることも示唆している。
この世論調査では、登録有権者の32％が自分を民主社会主義者だと称する候補者に投票する可能性が高い一方、50％はそのような候補者に投票する可能性が低いことが判明した。有権者の２９％はトランプ氏の支持があれば候補者に投票する可能性が高いが、５２％はその可能性が低いと予想した。 MAGA運動の支持者であると自称する候補者の状況はさらに悪く、そうすることで自分たちに投票する可能性が高まると答えた有権者はわずか27％で、57％は投票する可能性が低くなるだろうと答えた。
CNBCのオールアメリカ世論調査は、ハート・リサーチ・アソシエイツとパブリック・オピニオン・ストラテジーズの協力により、米国の登録有権者1,000人を対象に7月8日から12日にかけて実施された。誤差は +/-3.1% です。
今年投票予定の民主社会主義者の多くは、国民皆保険、最低賃金の引き上げ、ユニバーサル・ベーシックインカムの財源として米国の最も裕福な人々への増税を求めている。
2028年まで共和党がホワイトハウスを支配していることを考えると、両党の選挙が直ちに政策変更を促す可能性は低いだろう。しかし、それは議会と行政府との敵対関係がさらに高まることを意味し、トランプ政権が好む法案を遅らせる可能性がある一方、民主党が2028年にホワイトハウスを奪回した場合にどのように統治するかについてのヒントとなるだろう。
また、一般投票でも民主党が4ポイントリードしており、有権者の49％が民主党主導の議会を希望し、45％が共和党主導を好むと回答した。
調査によると、大統領の支持率は４０％、不支持率は５９％で、４月の調査より１ポイント悪化した。同氏の経済対応については６０％が不支持で、これも支持する３８％に対し、４月よりも悪い結果となった。どちらの変化も世論調査の誤差の範囲内だが、大統領の地位に関する最近の他の世論調査と一致している。
世論調査によると、米国では依然として資本主義が社会主義よりも人気があるが、社会主義の台頭により近年は国民感情が低下している。
調査対象となった登録有権者の28％は社会主義を肯定的に捉えており、2024年の18％から大幅に増加した。登録有権者の50％は資本主義を肯定的に捉えており、2024年の51％からほとんど変化がない。金曜日に発表された世論調査では、有権者の48％が社会主義を否定的に捉えているのに対し、27％は資本主義を否定的に捉えている。
18～34歳の有権者は18％ポイントの差で社会主義を支持したが、それよりも高い年齢層は資本主義を支持した。そうなると、将来的には選挙区の形が変わる可能性がある。あるいは、今日の若い有権者は年齢を重ねるにつれて好みが進化する可能性もあります。
同調査の共和党世論調査会社パブリック・オピニオン・ストラテジーズのパートナー、ミカ・ロバーツ氏は、「こうした現在の態度が長期にわたって持続し、今日の18～49歳がそのような態度を維持するとしたら、国民的対話や経済政策の処方箋という点で地殻変動が起きるだろう。それは時間の経過とともに議会やさまざまな場所から出てくるだろう」と述べた。 「今日の18歳から34歳の若者の態度が、20年後の我が国の現実だ。」
調査対象となった有権者は、何らかの形の社会主義がこの国にとって良いアイデアであるとは考えていなかったが、僅差であった。世論調査に参加した有権者の44％は、何らかの形の社会主義は悪いことだと答えたが、40％はそれが良いことだと答え、前回の世論調査と比べてその差は半分になった。 2019年のギャラップ世論調査では、成人の43％が社会主義を良いものとみなし、51％は社会主義を悪いものとみなしていた。
そして、最初の世論調査の 1 つである 1942 年には、世界が第二次世界大戦に巻き込まれていたため、有権者の 25% が社会主義は良い考えだと考えていました。 40％はそれは悪い考えだと考えており、34％は未定だった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/democratic-socialists-top-maga-candidates-all-america-poll.html",
    publishedAt: "2026-07-17T11:33:06+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 5,
  },
  {
    id: "why-has-british-steel-been-nationalised-a4309230",
    title: "Why has British Steel been nationalised?",
    titleJa: "なぜブリティッシュ・スチールは国有化されたのでしょうか？",
    summaryJa: "なぜブリティッシュ・スチールは国有化されたのでしょうか？- 公開されました",
    bodyOriginal: `Why has British Steel been nationalised?
- Published
British Steel has been taken into public ownership after years of uncertainty over the future of the steelworks.
It comes months after the UK government took control of the company's plant in Scunthorpe, Lincolnshire, though it was still owned by China's Jingye Group.
What is British Steel and why is it important?
British Steel's Scunthorpe plant employs 2,700 people, about three-quarters of the company's workforce.
It is the last plant in the UK producing virgin steel, which is used in major construction projects like buildings and railways. It has fewer imperfections than the recycled steel made elsewhere in the country.
Were the plant to stop producing virgin steel, the UK would be the only member of the G7 group of leading economies without the ability to make it. The government views that as a risk to the UK's economic security.
Who has owned British Steel?
In 2016, Tata Steel sold the loss-making part of its business that made "long products" like transport rails and steel sections for construction.
Private investment firm Greybull Capital bought it for £1 and renamed the business British Steel.
However, following financial collapse in 2019, British Steel was taken over by the government's insolvency service.
It was sold to Chinese steel-making firm Jingye the following year.
On 16 July this year, the UK government brought it into public ownership, and Jingye is now seeking compensation for nationalisation.
China's commerce ministry has hit out at the nationalisation, saying it "firmly opposes and is strongly dissatisfied with the British government's decision".
Why is the Scunthorpe plant losing money?
In late March 2025, Jingye said the plant was losing around £700,000 a day and launched a consultation on its closure.
It said the blast furnaces were "no longer financially sustainable," blaming "highly challenging" market conditions, tariffs and costs associated with moving to lower-carbon production techniques.
A later report from the National Audit Office in March this year noted that the Scunthorpe steelworks was costing the government about £1.3m a day.
UK steel production has been falling for several decades and the financial pressures facing the industry were heightened last March when the US imposed a 25% tariff on any steel it imports.
Global over-production has created "a glut of steel on the international market", according to a UK government briefing,, external which has pushed prices down. British manufacturers also face higher costs, particularly on electricity, than firms in other countries.
What has the government said?
The government says nationalisation will protect jobs and safeguard "a vital national capability".
Nationalisation buys it time and gives it the power and freedom to decide on the future of the plant, while keeping the blast furnaces going.
Ultimately it is unlikely the government will want to remain in charge of a business that is costing it more than a million pounds a day.
The question over whether Jingye should be compensated for the nationalisation based on the value of the company will be determined by an independent assessor, Business Secretary Peter Kyle told the BBC.
"But let me be really clear, there is an alternative here - that we let this business go bust," he said.
"If that business disappears, we will lose the ability for primary steel production in our country, we will become entirely dependent on global supply."
Can British Steel's blast furnaces keep running?
Scunthorpe's skyline has four blast furnaces, all named after English Queens - Bess, Mary, Anne and Victoria. Bess and Anne are the only two still working.
Both are very old - Bess started producing steel in 1938 and Anne in 1954 - and are approaching the end of their operational lives.
Blast furnaces are designed to run continuously. Allowing them to cool can cause serious damage, and extensive work is required to restart them. Even a planned refurbishment can cost tens of millions of pounds.
The supplies needed to keep them running - coking coal and iron pellets - are also running low.
Why can't a blast furnace easily be restarted?
Turning off a blast furnace without making it permanently unusable is notoriously difficult.
The furnaces operate at extreme temperatures, with iron ore and coking coal poured in at the top and liquid iron extracted at the bottom. This iron goes to the steel plant to make steel.
If a furnace stops working, the molten metal will cool and solidify. This is called a "salamander".
When the furnace is turned back on this metal heats up again and expands which can crack the furnace.
A so-called "Salamander Tap" process can be used to temporarily shut down a blast furnace by drilling a hole to remove any remaining hot metal. However, this can be a dangerous process.
Who else produces steel in the UK?
There are 1,160 businesses in the UK steel industry, directly supporting 40,000 other firms, according to government figures., external
Tata Steel at Port Talbot in Wales was once the UK's largest virgin steel producer but it turned off its blast furnace in September 2024, saying it was losing £1.7m a day.
An agreement with the UK government was reached which saw it commit £500m to help the company move to greener forms of steelmaking.
Other steelmakers in the UK include Liberty Steel, Celsa, Marcegaglia and Outokumpu.
Liberty Steel also has a plant in Scunthorpe that is facing closure. The government took control of its Speciality Steels UK (SSUK) division in August last year, and agreed to cover the ongoing wages and costs of the plant while a buyer is sought.
In 2024 the UK steel industry contributed £1.7bn to the UK economy - equivalent to 0.1% of total UK economic output and 0.8% of manufacturing output.
The latest figures for 2023 show the UK produced 5.6 million tonnes of crude steel, or 0.3% of the world's total. In comparison, China produced more than 1,000 million tonnes, 54% of global production.
The EU produced 126 million tonnes of steel in 2023, about 7% of the world's total. Compared with EU countries, the UK ranked as the eighth largest steel producer, after Germany, Italy, Spain, France, Austria, Poland and Belgium.
Where else does the UK get its steel from?
In 2024, the UK imported nearly 7 million tonnes of steel. About two-thirds of that came from the EU.
The Netherlands, Spain and Germany were the top three countries of origin for imports of finished steel in 2024, according to industry body UK Steel.
The UK also gets some steel from Asia, from countries such as India, South Korea, Vietnam and China.
Related topics
- Published1 day ago
- Published2 hours ago`,
    bodyJa: `なぜブリティッシュ・スチールは国有化されたのでしょうか？
- 公開されました
ブリティッシュ・スチールは、製鉄所の将来に対する長年の不確実性を経て、株式公開された。
これは、英国政府がリンカンシャー州スカンソープにある同社の工場を掌握した数か月後のことであるが、同工場は依然として中国の京業集団の所有下にあった。
British Steelとは何ですか?なぜそれが重要ですか?
British Steel のスカンソープ工場では、同社従業員の約 4 分の 3 に相当する 2,700 人が雇用されています。
これは、建物や鉄道などの主要な建設プロジェクトに使用されるバージンスチールを生産する英国最後の工場です。国内の他の場所で製造されたリサイクル鋼よりも欠陥が少ない。
もし同工場がバージンスチールの生産を停止すれば、主要経済国のG7メンバーの中で英国だけがバージンスチールの生産能力を持たないことになる。政府はこれを英国の経済安全保障に対するリスクとみなしている。
ブリティッシュ・スチールを所有したのは誰ですか?
タタ・スチールは2016年、輸送用レールや建設用鋼材などの「長尺製品」を製造する事業の赤字部分を売却した。
民間投資会社グレイブル・キャピタルがそれを1ポンドで買収し、社名をブリティッシュ・スチールに変更した。
しかし、2019年の財政破綻を受け、ブリティッシュ・スチールは政府の破産処理サービスに引き継がれた。
翌年、中国の製鉄会社京業に売却された。
今年7月16日、英国政府はこの施設を公有化し、ジンゲさんは現在、国有化に対する補償を求めている。
中国商務省は「英国政府の決定に断固反対し、強く不満を抱いている」と国有化を激しく非難した。
なぜスカンソープ工場は赤字になっているのでしょうか?
2025年3月下旬、ジンゲ氏は工場が1日あたり約70万ポンドを損失していると述べ、閉鎖についての協議を開始した。
同報告書は、高炉は「もはや財政的に持続可能ではない」と述べ、低炭素生産技術への移行に伴う「非常に困難な」市況、関税、コストを理由に挙げた。
その後、今年3月に国家会計検査院が発表した報告書では、スカンソープ製鉄所が政府に1日あたり約130万ポンドの費用を支払っていたと指摘した。
英国の鉄鋼生産は数十年にわたり減少しており、昨年３月に米国が輸入する鉄鋼に２５％の関税を課したことで業界が直面する財政的圧力は高まった。
英国政府の会見によれば、世界的な過剰生産により「国際市場で鉄鋼の供給過剰」が生じており、外部からのそれが価格を押し下げているという。英国の製造業はまた、他国の企業に比べて、特に電力コストの上昇に直面している。
政府は何と言っていますか？
政府は、国有化により雇用が保護され、「重要な国家能力」が保護されると述べている。
国有化により時間を稼ぎ、高炉を稼働させながら工場の将来を決定する権限と自由が与えられる。
結局のところ、政府が 1 日あたり 100 万ポンド以上の費用がかかる事業を担当し続けたいとは考えにくい。
企業価値に基づいてジンゲに国有化の補償をすべきかどうかの問題は、独立した評価機関によって決定されるだろうとピーター・カイルビジネス長官はBBCに語った。
「しかし、はっきり言っておきたいのですが、代替案はここにあります。この事業を潰すということです」と同氏は語った。
「もしその事業が消滅すれば、我が国の一次鉄鋼生産能力を失い、完全に世界供給に依存することになるだろう。」
ブリティッシュ・スチールの高炉は稼働し続けることができるのか？
スカンソープのスカイラインには 4 つの高炉があり、すべて英国の女王、ベス、メアリー、アン、ヴィクトリアにちなんで名付けられています。ベスとアンはまだ働いている二人だけです。
どちらも非常に古く、ベスは 1938 年、アンは 1954 年に鉄鋼の生産を開始しており、操業寿命の終わりに近づいています。
高炉は連続稼働するように設計されています。冷却すると重大な損傷が生じる可能性があり、再起動するには大規模な作業が必要です。計画的な改修でも数千万ポンドかかる場合があります。
コークス炭や鉄ペレットなど、操業に必要な物資も不足している。
なぜ高炉は簡単に再稼働できないのでしょうか？
高炉を永久に使用できなくすることなく停止させることは、非常に難しいことで知られています。
炉は極端な温度で稼働し、上部から鉄鉱石とコークス炭が注入され、下部から液体鉄が抽出されます。この鉄は鉄を作るために製鉄所へ行きます。
炉が停止すると、溶けた金属は冷えて固まります。これを「サラマンダー」といいます。
炉の電源を入れると、この金属が再び加熱されて膨張し、炉に亀裂が入る可能性があります。
いわゆる「サラマンダータップ」プロセスは、残っている溶銑を除去するために穴を開けて高炉を一時的に停止するために使用できます。ただし、これは危険なプロセスになる可能性があります。
英国で鉄鋼を生産している企業は他にありますか?
政府の統計によると、英国の鉄鋼産業には 1,160 社の企業があり、他の 40,000 社を直接支援しています。
ウェールズのポートタルボットにあるタタ・スチールは、かつては英国最大の未使用鉄鋼生産会社だったが、1日当たり170万ポンドの損失が出ているとして、2024年9月に高炉を停止した。
英国政府との合意に達し、同社がより環境に優しい製鉄形態への移行を支援するために5億ポンドを拠出することが合意に達した。
英国の他の鉄鋼メーカーには、リバティ スチール、セルサ、マルセガリア、オウトクンプなどがあります。
リバティ・スチールもスカンソープにある工場が閉鎖の危機に瀕している。政府は昨年8月に英国特殊鋼部門（SSUK）の経営権を掌握し、買い手を探している間の工場の継続的な賃金とコストを負担することに同意した。
2024 年、英国の鉄鋼産業は英国経済に 17 億ポンド貢献しました。これは英国の総経済生産高の 0.1%、製造業生産高の 0.8% に相当します。
2023年の最新の統計によると、英国の粗鋼生産量は560万トンで、世界総生産量の0.3％に相当する。これに対し、中国の生産量は10億トン以上で、世界生産量の54％を占めた。
EUの2023年の鉄鋼生産量は1億2600万トンで、世界総生産量の約7％に相当する。 EU諸国と比較すると、英国はドイツ、イタリア、スペイン、フランス、オーストリア、ポーランド、ベルギーに次いで第8位の鉄鋼生産国となっている。
英国は他にどこから鉄鋼を入手しているのでしょうか?
2024年、英国は700万トン近くの鉄鋼を輸入した。このうち約3分の2はEUからのものだった。
業界団体UKスチールによると、2024年の完成鋼材輸入原産国トップ3はオランダ、スペイン、ドイツとなった。
英国はまた、インド、韓国、ベトナム、中国などのアジア諸国からも鉄鋼の一部を入手している。
関連トピック
- 1 日前に公開
- 2 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5y66y40kgpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-17T09:57:02+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/dd74/live/2edfb1c0-81e2-11f1-bee8-53ce494e1abc.jpg",
    readTime: 7,
  },
  {
    id: "bp-conocophillips-to-back-iraq-with-majo-b9747e79",
    title: "BP, ConocoPhillips to back Iraq with major investments as U.S. seeks to weaken Iran's energy hold",
    titleJa: "米国がイランのエネルギー保持力を弱めようとする中、BPとコノコフィリップスが大規模投資でイラクを支援",
    summaryJa: "計画に詳しい関係者によると、ワシントンが同国のエネルギー部門を強化し、イランによる混乱に脆弱な路線への地域の依存を減らすことを目指している中、BPとコノコフィリップスは金曜、イラクへの数十億ドル規模の新規投資を発表する予定だという。CNBCのブライアン・サリバン氏が情報筋の話としてアクセス・ミドル・イーストに語ったところによると、発表はワシントンで開催される米国・イラク・ビジネス・サミット中に行われる予定だという。イラクのアリ・アル・ザイディ首相はサミットで米高官や大手エネルギー会社幹部らと会談する。",
    bodyOriginal: `BP and ConocoPhillips are set to announce billions of dollars of new investments in Iraq on Friday as Washington seeks to bolster the country's energy sector and reduce the region's reliance on routes vulnerable to Iranian disruption, according to people familiar with the plans.
The announcements are expected during the U.S.-Iraq Business Summit in Washington, CNBC's Brian Sullivan told Access Middle East, citing sources. Iraqi Prime Minister Ali Al-Zaidi will meet senior U.S. officials and executives from major energy companies at the summit.
The event is expected to feature more than $60 billion in agreements and memorandums of understanding between U.S. companies and the Iraqi government.
The investments by BP, ConocoPhillips and other companies will be in billions of dollars, and might even be in tens of billions, the people said. Details of the individual commitments were not immediately available.
The deals come as the U.S seeks to expand investment in Iraq's energy sector, boost the country's oil production and diversify export routes vulnerable to regional disruption.
The Strait of Hormuz handled roughly a fifth of global oil before the war broke out and has become an increasingly important focus for energy markets after renewed tensions between the United States and Iran.
BP has a history in Iraq dating back about a century and has in recent years focused on the giant Rumaila oilfield. In 2025, the company finalized an agreement with Baghdad to redevelop oil and gas resources in Kirkuk, covering the Baba and Avanah domes of the Kirkuk field and the nearby Bai Hassan, Jambur and Khabbaz fields.
Iraq is courting some of the world's largest energy-services and industrial companies as it seeks to expand oil and gas production and accelerate development of its natural gas resources.
Al-Zaidi met representatives from Halliburton, Shell, Honeywell, Weatherford and Baker Hughes in Houston on Thursday, with talks covering investment, technology and potential participation in large energy projects, according to his office.
— CNBC's Emma Graham contributed to this report.`,
    bodyJa: `計画に詳しい関係者によると、ワシントンが同国のエネルギー部門を強化し、イランによる混乱に脆弱な路線への地域の依存を減らすことを目指している中、BPとコノコフィリップスは金曜、イラクへの数十億ドル規模の新規投資を発表する予定だという。
CNBCのブライアン・サリバン氏が情報筋の話としてアクセス・ミドル・イーストに語ったところによると、発表はワシントンで開催される米国・イラク・ビジネス・サミット中に行われる予定だという。イラクのアリ・アル・ザイディ首相はサミットで米高官や大手エネルギー会社幹部らと会談する。
このイベントでは、米国企業とイラク政府との間で600億ドル以上の合意や覚書が交わされることが見込まれている。
BPやコノコフィリップスなどによる投資額は数十億ドル、場合によっては数百億ドルに上る可能性もあるという。個々の約束の詳細はすぐには入手できなかった。
この協定は、米国がイラクのエネルギー部門への投資を拡大し、同国の石油生産を増やし、地域の混乱に脆弱な輸出ルートを多様化しようとしている中で行われた。
ホルムズ海峡は戦争勃発前に世界の石油の約5分の1を扱っており、米国とイランの間の緊張が新たになったことで、エネルギー市場にとってますます重要な焦点となっている。
BPはイラクで約1世紀に遡る歴史があり、近年は巨大なルマイラ油田に注力している。同社は2025年に、キルクーク油田のババドームとアヴァナドーム、および近隣のバイハッサン油田、ジャンブール油田、ハバズ油田を対象とするキルクークの石油・ガス資源再開発に関するバグダッドとの合意を最終的に締結した。
イラクは、石油とガスの生産を拡大し、天然ガス資源の開発を加速することを目指して、世界最大のエネルギーサービスおよび産業企業数社と提携している。
同氏の事務所によると、アル・ザイディ氏は木曜日、ヒューストンでハリバートン、シェル、ハネウェル、ウェザーフォード、ベーカー・ヒューズの代表者と会談し、投資、技術、大規模エネルギープロジェクトへの参加の可能性などについて協議した。
— CNBC の Emma Graham がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/bp-conocophillips-to-back-iraq-with-major-energy-investment-.html",
    publishedAt: "2026-07-17T08:10:21+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "xi-pitches-china-as-ai-partner-to-develo-2de9f2dd",
    title: "Xi pitches China as AI partner to developing world, warns against risks and security overreach",
    titleJa: "習主席、発展途上国のAIパートナーとして中国を売り込み、リスクと安全保障上の行き過ぎを警告",
    summaryJa: "中国の習近平国家主席は金曜日、中国をグローバル・サウスの人工知能のパートナーと位置づけ、各国が団結してAIを構築し、発展途上国も支援すべきだと述べた。上海で開催された世界AI会議で講演した習主席は、中国が発展途上国にAIトレーニングやセミナープログラムの5,000件の機会を提供するとともに、東南アジア諸国連合、アラブ連盟、アフリカ連合を含むさまざまなブロックとのAI協力を発展させると発表した。",
    bodyOriginal: `Chinese President Xi Jinping on Friday positioned China as a partner in artificial intelligence to the Global South, saying that countries should come together to build AI and help developing countries as well.
Speaking at the World AI Conference in Shanghai, Xi announced that China will provide developing countries with 5,000 opportunities in AI training and seminar programs, as well as develop AI cooperation with various blocs, including the Association of Southeast Asian Nations, the League of Arab States and the African Union.
"China is willing to work with all parties to seize and address the opportunities and challenges of artificial intelligence development with a more open attitude, more pragmatic actions, and a longer-term vision,," according to a Google translation of his speech in Mandarin.
Xi said that AI development should not be a "solo performance" by a single country, but a "symphony of international cooperation" and China was "ready to be more open, take more practical actions, and assume a more visionary perspective."
The remarks come a day after 29 countries signed an agreement in Shanghai to establish the World Artificial Intelligence Cooperation Organization, or WAICO, which will be headquartered in the city, according to Chinese state media outlet Xinhua.
Xi also urged to strengthen risk awareness, and ensure that AI was "secure and controllable," and was "always remains under human control," adding that countries should oppose "overstretching the national security concept in the field of AI, or placing one country's security over that of others."
While the Chinese president did not name a specific country, the U.S. has implemented various export controls measures aimed at curbing China's access to high-end tech. The U.S. began tightening restrictions during President Donald Trump's first term, including placing Huawei on the Commerce Department's Entity List in 2019.
The Biden administration later introduced export controls in 2022 to restrict China's ability to buy advanced computing chips and manufacture advanced semiconductors, citing national security risks.
Chip giant Nvidia has seen its market share in China plummet, saying in its annual report that it was unable to create and deliver a competitive product for China's data center market that is approved by both Beijing and Washington.
"As of the end of fiscal year 2026, we were effectively foreclosed from competing in China's data center computing/compute market, and our effective foreclosure from the China market helped our competitors build larger developer and customer ecosystems to challenge us worldwide," it added.
At the event, Chinese tech heavyweight Huawei showcased its Atlas 950 SuperPoD supernode, which is designed to link multiple chips together to boost computing power. The company said it addresses the computing power needs of large-scale data center construction and large-scale model training.`,
    bodyJa: `中国の習近平国家主席は金曜日、中国をグローバル・サウスの人工知能のパートナーと位置づけ、各国が団結してAIを構築し、発展途上国も支援すべきだと述べた。
上海で開催された世界AI会議で講演した習主席は、中国が発展途上国にAIトレーニングやセミナープログラムの5,000件の機会を提供するとともに、東南アジア諸国連合、アラブ連盟、アフリカ連合を含むさまざまなブロックとのAI協力を発展させると発表した。
北京語での演説のグーグル翻訳によると、「中国は、よりオープンな姿勢、より現実的な行動、そして長期的なビジョンをもって、あらゆる関係者と協力して人工知能開発の機会と課題を捉え、対処する用意がある」と述べた。
習主席は、AI開発は一国による「単独パフォーマンス」ではなく、「国際協力のシンフォニー」であるべきであり、中国は「よりオープンで、より実践的な行動をとり、より先見的な視点を持つ用意がある」と述べた。
中国国営メディア新華社によると、この発言は、29カ国が上海に本部を置く世界人工知能協力機構（WAICO）設立協定に署名した翌日に行われた。
習主席はまた、リスク認識を強化し、AIが「安全で制御可能」であり「常に人間の制御下にある」ことを確保するよう促し、各国は「AI分野における国家安全保障の概念を過度に拡大したり、ある国の安全保障を他国の安全保障よりも優先したりすること」に反対すべきだと付け加えた。
中国大統領は特定の国には言及しなかったが、米国は中国のハイエンド技術へのアクセスを制限することを目的としたさまざまな輸出規制措置を実施してきた。米国はドナルド・トランプ大統領の1期目に規制強化を開始し、2019年にファーウェイを商務省のエンティティリストに載せた。
その後、バイデン政権は国家安全保障上のリスクを理由に、中国による先端コンピューティングチップの購入や先端半導体の製造能力を制限する輸出規制を2022年に導入した。
半導体大手エヌビディアは中国での市場シェアが急落しており、中国のデータセンター市場向けに北京とワシントンの両国が承認する競争力のある製品を開発、提供できなかったと年次報告書で述べた。
「2026年度末の時点で、当社は中国のデータセンターコンピューティング/コンピューティング市場での競争から事実上差し押さえられ、中国市場からの事実上の差し押さえにより、競合他社はより大規模な開発者と顧客のエコシステムを構築し、世界中で当社に挑戦することができた」と付け加えた。
このイベントでは、中国のハイテク大手ファーウェイは、複数のチップをリンクしてコンピューティング能力を向上させるように設計されたスーパーノード「Atlas 950 SuperPoD」を展示した。同社は、大規模なデータセンターの建設や大規模なモデルのトレーニングにおけるコンピューティング能力のニーズに対応すると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/x-china-ai-summit-risks-security.html",
    publishedAt: "2026-07-17T06:16:04+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "five-headaches-andy-burnham-will-have-to-4670eafa",
    title: "Five headaches Andy Burnham will have to deal with as PM",
    titleJa: "アンディ・バーナムが首相として対処しなければならない5つの頭痛",
    summaryJa: "アンディ・バーナムが首相として対処しなければならない5つの頭痛- 公開されました",
    bodyOriginal: `Five headaches Andy Burnham will have to deal with as PM
- Published
When Andy Burnham enters No 10 Downing Street, he will inherit some formidable and complex problems that successive prime ministers and governments have attempted to address - mostly without success.
BBC Verify has looked at five big policy challenges Burnham will face and the approaches he might take to address them.
Welfare: Cutting £58bn sickness and disability bill
The cost of sickness and disability benefits for people of working age has grown rapidly since the Covid pandemic and now stands at around £58bn a year, external.
And it's projected to rise to £78bn a year by 2030, external.
The biggest driver of the increase is the number of people claiming Personal Independence Payments (Pip) - a working age benefit designed to support people with disabilities that increase their living costs.
The number of people claiming Pip is forecast to rise from four million today, to five million by 2030, external.
The share of people who are younger and claiming Pip for mental health problems or neurodevelopmental disorders such as ADHD is also rising fast.
The previous Conservative government attempted to reform the working age disability welfare system but the cost continued to rise during their time in office, external.
Last year, Sir Keir Starmer's government tried to reduce the Pip bill by £5bn a year by 2030 by tightening eligibility - but had to do a U-turn after a revolt by Labour MPs.
A recent interim report by the disability minister, Sir Stephen Timms, external, co-produced with disability groups, accepts that Pip is "not fit for purpose".
The final Timms report is expected to propose reforms to the system later this year, which Burnham could adopt.
There has been speculation, external this could involve offering young people with mental health problems therapy or other support rather than cash.
But there remains the risk of backlash from disability groups and potentially Labour MPs if the reforms are considered unfair.
Burnham has recently said, external he does want to reduce the welfare bill, but by encouraging people into work and not through "crude cuts".
Defence: Finding £9bn extra a year
After a delay of almost a year, Starmer finally published the government's Defence Investment Plan in June.
This led to an outcry in some quarters because it only took defence spending to 2.7% of GDP by 2030.
And it was not fully funded, requiring savings to be extracted from other Whitehall departments.
The pressure on Burnham to lift defence spending to 3% of GDP by 2030 from the former defence secretary John Healey, who resigned over the issue, and the defence establishment will continue.
But this would cost an additional £9bn a year relative to the current plans.
Another challenge for Burnham is the new Nato target of raising defence spending to 3.5% by 2035. That would cost an additional £24bn a year relative to current plans.
Some have suggested, external this could be paid for by the Treasury issuing special "war bonds", to avoid the need to raise taxes or cut spending elsewhere.
Another challenge for Burnham if he does spend more on defence is reforming defence procurement - buying and developing planes, ships, vehicles and weapons - which has been historically wasteful.
Of 47 major defence investment spending projects only three were rated "green" by the National Infrastructure & Service Transformation Authority, external in 2025, meaning likely to be successfully delivered on time and at the right quality.
Social care: Two million older people living with unmet care needs
The social care system in England - which is delivered mainly by independent providers rather than the NHS - is widely perceived as underfunded and unfair.
Public funding is means tested and it is estimated, external that there are two million older people in England now living with some unmet need for social care.
And around 10% of people aged 65 and over face lifetime care costs above £100,000 for their care.
Burnham has himself described it as a "broken" system., external
And , externalhe made an attempt to reform it, external when he was health secretary in Gordon Brown's cabinet, though his plan was abandoned after Labour lost the 2010 election.
A government-commissioned report by the economist Andrew Dilnot in 2011, external proposed a state-funded cap on lifetime care costs, of around £35,000, meaning no one would be required to pay more than that to fund their own care.
The principle of a state-funded cap was accepted by Conservative ministers, but the Dilnot system was never implemented.
Former Prime Minister Theresa May put a separate plan for a new system of social care support into the 2017 Tory manifesto, which proposed including the value of a person's home in the means test for care received in an individual's home - and did not initially mention a cap on lifetime contributions.
This proved controversial because homeowners could have been required to contribute more towards their care costs, external based on the value of their property.
But the former PM was forced to reverse course within days and the proposal was blamed for the loss of the Tory majority in that election.
Labour's 2024 manifesto, external pledged a new "national care service".
But Starmer kicked the reform can down the road when he became PM and commissioned Baroness Casey to produce a review on options for reform, external, instructing her to deliver her final report by 2028.
Burnham has suggested he will ask Baroness Casey to report back sooner - by the end of 2026 - and could choose to implement her recommendations.
But any reform is likely to cost money, likely billions of pounds a year.
In the past, Burnham has suggested changing inheritance tax to pay for social care reform, external, floating the idea of a 10% levy on all estates.
However, polling frequently suggests inheritance tax is widely regarded as the least fair tax, external. It should be said more recently he has said he is open to getting rid of inheritance tax completely, external and instead moving to tax "the wealthy properly while they are alive".
Housing: 1.5m new homes promised, only 204,000 delivered last year
The government promised to deliver 1.5m new homes in England over the five years of this Parliament, which would imply an average annual rate of 300,000.
But it is badly off track, with only 204,000 delivered in the 12 months to March 2026.
Burnham has said he wants to deliver "the biggest council house building programme since the post-war period", though he has not defined what this means.
But the facts are stark. English councils built just 1,970 homes to rent in 2025, external, down from a construction rate of almost 200,000 a year in the 1950s.
The Starmer government has already committed to spend around £4bn a year in state subsidies, external to deliver around 30,000 "social and affordable" homes a year, which includes homes for people to buy.
Burnham could devote all of this money to councils or housing associations to try to increase the amount of new council and social housing being built.
But it is estimated that to deliver major uplift in these forms of housing would require an extra £13bn per year of state subsidy, external on top of the existing £4bn per year spending commitments.
Burnham could potentially attempt to borrow to fund more public housing, but he would have to ensure this was consistent with the fiscal rules he has also said he will retain.
Neets: Getting a million young people into work
Just over one million young people in the UK aged 16-24 are not in employment, education or training (Neets), external, around one in seven of the total.
The UK's Neet rate was in the middle of the pack of European Union countries in 2015. But in 2025 it had risen to the second highest, after Romania.
One of the possible contributing factors, external to that rising Neet rate is that the number of 19- to 24-year-olds starting apprenticeship courses has fallen by a fifth, external since what is widely regarded as a botched reform of the system in 2016 by the previous government.
A recent government-commissioned report by former Labour cabinet minister Alan Milburn described the Neet rate as an "urgent national crisis"; he will propose policy recommendations later this year.
Burnham will be able to pick up these proposals, although they might come with an up-front cost attached if they involve greater investment in training opportunities or guaranteed work placements.
Is it possible we will see more support for vocational training?
Burnham has said recently, external that the school system is too focused on the university route.
But many governments in recent decades have proclaimed a need for a greater focus on support for non-graduates, yet have often still tended to focus more attention and resources on university students and higher education, external, rather than on vocational qualifications and further education.`,
    bodyJa: `アンディ・バーナムが首相として対処しなければならない5つの頭痛
- 公開されました
アンディ・バーナムがダウニング街10番街に参入するとき、彼は歴代の首相や政府が対処しようとしてきたものの、ほとんどが成功しなかったいくつかの恐るべき複雑な問題を引き継ぐことになる。
BBC Verifyは、バーナムが直面する5つの大きな政策課題と、それらに対処するために彼が採り得るアプローチを検討した。
福祉: 580億ポンドの疾病・障害関連法案を削減
生産年齢の人々に対する病気や障害給付金の費用は、新型コロナウイルスのパンデミック以来急速に増加しており、現在、対外的には年間約580億ポンドに達している。
そして、対外的には 2030 年までに年間 780 億ポンドに増加すると予測されています。
この増加の最大の要因は、生活費を増加させる障害のある人々を支援するために設計された労働年齢手当である個人独立手当（Pip）を請求する人の数です。
ピップを主張する人の数は、現在の 400 万人から 2030 年までに 500 万人に増加すると予測されています。
精神的健康上の問題やADHDなどの神経発達障害を理由にPipを主張する若年層の割合も急速に上昇している。
前保守党政権は労働年齢障害福祉制度の改革を試みたが、その費用は政権在任中に対外的に上昇し続けた。
昨年、キア・スターマー卿の政府は受給資格を厳格化することで、2030年までにピップ請求額を年間50億ポンド削減しようとしたが、労働党議員らの反乱を受けて方向転換を余儀なくされた。
障害大臣であるスティーブン・ティムズ卿による最近の中間報告書は、障害者団体と共同で作成した外部の報告書で、ピップが「目的に適していない」ことを認めている。
ティムズの最終報告書は今年後半にシステムの改革を提案する予定で、バーナムがそれを採用する可能性がある。
対外的には、メンタルヘルス上の問題を抱える若者に現金ではなくセラピーやその他の支援を提供することが含まれるのではないかという憶測もある。
しかし、改革が不公平であるとみなされた場合、障害者団体や潜在的には労働党議員からの反発を受けるリスクが依然としてある。
バーナム氏は最近、対外的には生活保護費を削減したいが、「粗削り」ではなく人々の就労を奨励することによって削減したいと述べた。
防衛：年間90億ポンドの追加資金を見つける
1年近くの遅れを経て、スターマー氏はようやく6月に政府の国防投資計画を発表した。
2030年までに防衛費がGDPの2.7％にとどまるため、これは一部で反発を招いた。
また、十分な資金が提供されていなかったため、ホワイトホールの他の部門から節約を引き出す必要がありました。
この問題で辞任したジョン・ヒーリー前国防長官と国防体制から、バーナムに対し、2030年までに国防支出を国内総生産（GDP）比3％まで引き上げるよう圧力は続くだろう。
しかし、これには現在の計画と比較して年間90億ポンドの追加費用がかかることになる。
バーナムにとってのもう一つの課題は、2035年までに国防支出を3.5%に引き上げるというNATOの新たな目標である。これには、現在の計画と比べて年間240億ポンドの追加費用がかかることになる。
対外的には、増税や他の支出削減の必要性を避けるために、財務省が特別な「戦時公債」を発行することでこの費用をまかなえるのではないかと示唆する人もいる。
バーナムが防衛にさらに支出する場合のもう一つの課題は、歴史的に無駄だった航空機、船舶、車両、兵器の購入と開発といった防衛調達の改革だ。
主要な防衛投資支出プロジェクト 47 件のうち、2025 年に外部の国家インフラ・サービス変革局によって「グリーン」と評価されたのは 3 件のみであり、これは、予定どおり適切な品質で正常に実行される可能性が高いことを意味します。
社会的ケア：満たされていないケアニーズを抱えて暮らす200万人の高齢者
英国の社会保障制度は、主にNHSではなく独立した医療提供者によって提供されているが、資金不足で不公平であると広く認識されている。
公的資金の投入は資力を試されており、英国には現在200万人の高齢者が満たされていない社会的ケアのニーズを抱えて暮らしていると外部から推定されている。
また、65 歳以上の人の約 10% が、生涯にわたって 10 万ポンドを超える介護費用に直面しています。
バーナム自身、これを「壊れた」システムだと述べています。
そして、彼はゴードン・ブラウン内閣の保健長官だったときに外部的に改革を試みたが、2010年の選挙で労働党が負けた後、彼の計画は放棄された。
経済学者のアンドリュー・ディルノット氏が政府に委託した2011年の報告書では、国が負担する生涯介護費用の上限を約3万5000ポンドとすることを提案しており、これは誰も自分の介護に資金を提供するためにそれ以上支払う必要はないことを意味している。
国家資金による上限の原則は保守党閣僚によって受け入れられたが、ディルノット制度は決して実施されなかった。
テリーザ・メイ前首相は、2017年の保守党マニフェストに新たな社会的養護支援システムに関する別の計画を盛り込み、個人の自宅で受けられるケアの資力調査に自宅の価値を含めることを提案したが、当初は生涯拠出金の上限については言及していなかった。
これは物議を醸した。なぜなら、住宅所有者は、その財産の価値に基づいて、外部から介護費用に対してより多くの拠出を求められる可能性があったからである。
しかし、前首相は数日以内に方向転換を余儀なくされ、この提案がその選挙で保守党の過半数を失った原因だと非難された。
労働党の2024年マニフェストでは、新たな「国民介護サービス」を対外的に約束した。
しかし、スターマー氏は首相に就任すると改革の可能性を蹴り、ケイシー男爵夫人に改革のオプションに関する外部レビューの作成を依頼し、2028年までに最終報告書を提出するよう指示した。
バーナム氏は、ケイシー男爵夫人にもっと早く（2026年末までに）報告するよう依頼し、彼女の勧告を実行することを選択する可能性があると示唆した。
しかし、どのような改革にも費用がかかる可能性が高く、おそらく年間数十億ポンドに上るだろう。
バーナム氏は過去に、社会的養護改革の費用として相続税を変更することを提案し、すべての遺産に10％課税するという考えを浮上させた。
しかし、世論調査では、相続税が対外的に最も不公平な税金であると広く考えられていることが頻繁に示唆されています。さらに最近では、相続税を対外的に完全に廃止し、その代わりに「富裕層が生きている間に適切に」課税する方向に移行することに前向きであると述べたことは注目すべきだろう。
住宅: 150万戸の新築住宅が約束されているが、昨年引き渡されたのは20万4,000戸のみ
政府は、この議会の5年間で英国に150万戸の新築住宅を供給すると約束したが、これは平均年間30万戸を意味する。
しかし、軌道からは大きく外れており、2026年3月までの12カ月で納入台数はわずか20万4000台にとどまっている。
バーナム氏は「戦後最大の議会建設計画」を実現したいと述べたが、これが何を意味するのかは明らかにしていない。
しかし事実は厳然たるものだ。英国の市議会が2025年に建設した外部賃貸住宅はわずか1,970戸で、1950年代の年間約20万戸の建設率に比べて減少した。
スターマー政府はすでに、国民が購入できる住宅を含む年間約3万戸の「社会的で手頃な価格」住宅を提供するために、国からの補助金として年間約40億ポンドを支出することを約束している。
バーナムはこの資金をすべて市議会や住宅協会に充てて、新しい市営住宅や公営住宅の建設量を増やそうとする可能性がある。
しかし、これらの形式の住宅を大幅に改善するには、既存の年間 40 億ポンドの支出約束に加えて、年間 130 億ポンドの追加の国補助金が必要になると推定されています。
バーナム首相は、より多くの公営住宅に資金を提供するために借り入れを試みる可能性があるが、それが維持するとも述べた財政規則と一致しているかどうかを確認する必要があるだろう。
ニート: 100 万人の若者を就労させる
英国では16～24歳の若者100万人強が社外で雇用、教育、訓練を受けていない（ニート）、つまり全体の約7人に1人に相当する。
英国のニート率は2015年には欧州連合諸国の中で中位だったが、2025年にはルーマニアに次いで2番目に高い水準にまで上昇した。
ニート率の上昇以外に考えられる要因の1つは、前政権による2016年の制度改革が失敗だったと広くみなされて以来、実習コースを開始する19歳から24歳の人口が5分の1減少したことだ。
元労働党閣僚のアラン・ミルバーン氏による最近の政府委託報告書では、ニート率を「差し迫った国家危機」と表現している。同氏は今年後半に政策提言を提案する予定だ。
バーナムはこれらの提案を受け入れることができるが、訓練の機会や就職の保証に対する多額の投資が伴う場合には、前払い費用がかかる可能性がある。
職業訓練への支援がさらに増える可能性はあるでしょうか?
バーナム氏は最近、学校制度が大学進学に重点を置きすぎていると対外的に述べた。
しかしここ数十年、多くの政府は非卒業生への支援にさらに重点を置く必要があると宣言してきたにもかかわらず、職業資格やさらなる教育よりも、大学生や外部の高等教育により多くの関心とリソースを集中させる傾向が続いている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c62122pgjqdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-17T05:59:36+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/70f2/live/c74af560-8119-11f1-926f-c90d1bcfbc84.png",
    readTime: 10,
  },
  {
    id: "burnham-s-manchesterism-got-him-to-no-10-d0c20cf3",
    title: "Burnham's 'Manchesterism' got him to No 10 - but will it work for the UK?",
    titleJa: "バーナムの「マンチェスタリズム」は彼を10位につけたが、それはイギリスでもうまくいくだろうか？",
    summaryJa: "アンディ・バーナムが労働党の与党執行部によって議会に立候補することを阻止され、マンチェスター市長室に引きこもったのはわずか5か月前のことだった。数週間後、そこで彼に会ったとき、彼は自分の失望を自分の都市地域のためのいくつかの野心的な計画で乗り切るつもりだと言いました。",
    bodyOriginal: `It was just five months ago when Andy Burnham retreated to his mayor's office in Manchester, having been blocked by Labour's ruling executive from standing for parliament.
When I met him there a few weeks later, he told me he planned to deal with his disappointment with some ambitious plans for his city region.
Burnham told me he wanted to appeal directly to Fifa to host the final of women's football World Cup in 2035 Manchester instead of Wembley. "Imagine how electrifying that is for any girl growing up in the north of England," he said.
He said he was also joining forces with other mayors for a "Great Northern" Olympic bid across the north of England, and a plan was also afoot to host the Ryder Cup in Bolton. Sports bodies needed "re-educating" about the rest of the country, he said.
Manchester has already poached the Brit Awards from London after half a century in the capital.
Big, bold gestures like these tell part of the story of what has happened in the city. Burnham's civic ambition is a byproduct of Manchester's status as the fastest-growing city economy in the country. As Burnham prepares to become prime minister, will he be able to apply the same model to the whole of the nation?
Manchester's rise
Even before Burnham returned to parliament in June, there has been talk of Manchesterism as a political-economic philosophy that offers a programme for national transformation, rooted in a critique of a currently unresponsive, over-centralised British state.
The city has a long history of blending the freest of free markets with a strong social spirit. Manchester's cotton traders championed free trade and liberal economics, at the same time as the emergence of the co-operative movement, the trade unions and the Suffragettes. Even the Manchester Ship Canal, the emblem of monopoly-breaking free trade, required local government intervention backed by the workers.
But for an understanding of contemporary Manchester, you need to go back to the summer of 1996.
Andy Burnham had left the north-west by then. He told me how when he first looked for a local media job after graduating in the early 1990s, all he could get was a role as an unpaid reporter on the Middleton Guardian.
"I had to do what so many people of my generation, born in the 60s or 70s in the north-west of England had to do to get on in life," he said. "We had to go south."
By 1996, Burnham was an MP's researcher. That year, back in Manchester, the IRA detonated the largest bomb in the UK since World War Two, devastating the city centre,
The reconstruction in the aftermath of the attack marked the start of Manchester's ascent from the doldrums of de-industrialisation. The essential idea provided by a group of local political, cultural and business leaders, and an architect called Ian Simpson, was that the city centre should be reshaped by demolishing, not repairing, many of the damaged buildings.
From disaster could then arise a great opportunity to reshape the city's geography and economy. Council leader Sir Richard Leese and his top civil servant, the late Sir Howard Bernstein set the tone for a variety of bold centrally driven strategic plans that were actually largely delivered by private capital and then significant international investment.
The council leadership was ruthlessly focused on transforming brownfield industrial sites. The private sector would go nowhere near these, but the council de-risked those investments with public money. It also sometimes stepped in to tide projects over during financial crises.
At the end of this process, private capital poured in, lining up the cranes and the hard hats. The council offered a flexible interpretation of requirements to build a proportion of "affordable housing", sometimes effectively waived, sometimes met by funding building in cheaper areas of the city.
Paul Thwaite, the chief executive of NatWest, which has funded some of these projects, and who is on the board of the University of Manchester, says Manchester's success story over the past 20 years was "built on there being a clear plan the private sector can get behind".
Why hanging on to students matters
Such a shift would have been unthinkable a generation ago. The model of Manchester's city centre development has succeeded in creating a critical mass of population, housing, jobs and service sector activity that has allowed it to turn its significant undergraduate population into a goldmine.
According to the mayor, more people from London had moved to Manchester (13,000) than the other way round (11,800) in the latest set of internal migration figures.
He put this down to a flow of young workers into the Manchester city centre service economy.
In a reverse from the 1990s, "no-one here has to leave to get on in life", Burnham told me. "And in fact, there's a net inflow of young people from London."
Manchester now retains over half its graduates, more than any other city apart from London, according to the Centre for Cities, and Manchester also attracts almost as many young graduates as it produces.
Tom Beahon, the CEO of Manchester-based sports brand Castore, who has not been shy about criticising some of the government's business policies, told our Big Boss podcast earlier this year that the mayor had helped "attract inbound investment, making it a place that students want to stay after they graduate from the fantastic universities". That in turn means more businesses want to launch in the city, he added.
It is a case study in agglomeration effects - the economic power of locating similar types of jobs close together. And if its infrastructure can keep up, Manchester's economy will continue to fly.
Burnham's Manchester
Andy Burnham is a product of this Greater Manchester and spent his decade as its first mayor trying to shape it. As Andy Spinoza, the foremost chronicler of Manchester's turnaround, puts it: "Burnham jumped into a moving car, and by the end he was driving it."
But what else is there to Burnham beyond driving that moving car?
While he has managed to ascend to the Labour leadership and the cusp of No 10 without revealing his wider policy plans, there is a fairly recent text already out there. In 2024 with his fellow north-west regional mayor, Merseyside's Steve Rotherham, he published a book called Head North: A Rallying Cry for a More Equal Britain.
It was the basis for Burnham's speech earlier this month on Manchesterism and remains his national political-economic-constitutional prospectus. The 10-point plan to "rewire" the country argues that better "homes, transport and jobs" across the country can only come from "a new set of principles and rules for the running of the British state".
What underpins this is a determination to tear up two formulas that have long formed the backbone of how UK governments allocate money. The first is the Treasury's Green Book, which decides infrastructure spending and which has traditionally valued existing areas of high growth and land value the most. In Burnham's view, this drags investment in transport to the south of England.
The tangible example of all of this can be found on Platforms 13 and 14 of Piccadilly station in central Manchester. The only east-west train link for the entire region is here, and it is often jam-packed with trains and 40,000 daily commuters attempting to cross the Pennines and get to the airport. Burnham has long advocated for an underground four-platform "Kings Cross of the North" with a northern version of London's Elizabeth Line.
He relays a story about his time as chief secretary to the Treasury in 2007 when he was told: "No project in the north passed the Green Book, Minister." He told me the same in 2020 when there were murmurings of reform to the formula. Chancellor Rachel Reeves pursued pilot projects to change the approach that could favour local investment.
In the book, Burnham also advocates tearing up the Barnett formula, which allocates public spending, topping up spend for Scotland, Wales and Northern Ireland so they do not lose out to England as a whole. The effect, Burnham argues, is that the north of England is left squeezed in a "pincer".
In Head North and his recent speech, Burnham points to Germany's "Basic Law", with its duty of "equivalent living standards" across the regions. Such a law, he argued, would protect local government and give regions a right to be consulted on long-term decisions.
Burnham also advocates significant constitutional change, including a form of proportional representation and the replacement of the House of Lords with a "Senate of the Nations and the Regions", alongside devolution of powers over large swathes of public services to regional level.
On Net Zero he proposes a "Northern Way", which subsidises the transition, retrofits, cutting bills, and building exportable locally owned industry. He contrasts this with a "Whitehall way", which he characterises as bans, charges and taxes that hit the poorest.
The actual policy consequence of this will have to reckon with rising global energy prices, pressure on household budgets, and some impatience from North Sea energy interests to pump more oil and gas. There are some contradictions in for example, full tax and spend devolution for every region. Would the south-east get to keep the taxes it raises? Some aides recently played down any changes to the Barnett formula amid concerns from Scottish politicians.
The national stage
The fundamental difference between running a city region and a country is the need to raise the entire spectrum of tax revenues to fund spending. Or to borrow more money. The picture is rather constrained on both right now. Manchester has been agile in attracting private capital to build infrastructure, especially housing, partly because it had to. Can that stretch across the whole country?
With Manchester's cotton traders in mind, I asked Burnham back in February if he considered the Manchester model to be politically left or right - an example of statism, perhaps?
"When it comes to right versus left, well, we've always been very pro-business, pro-enterprise here. We want people to succeed individually and businesses to succeed, but give back at the same time," he said.
Some campaigners say that the dash for the gleaming towers and spires in the centre has left behind much of the rest of the region, and that the centre of Manchester is becoming a mini-London. While Burnham has criticised decades of "neoliberalism" and the "trickle-down effect", the reality is it has been core to the Manchester model.
At the same time, Margaret Thatcher's 1985 bus deregulation has been reversed and over the years public money from central and local government, from the EU, as well as from the partly council-owned airport, has been spent on trams - a nod to the importance of spreading the proceeds of growth in the centre around the region.
To greater or lesser degrees Burnham has floated more "public control", cost of living support, small business rates relief, and higher infrastructure investment and higher defence spending. They sound difficult to reconcile with sticking to promises to limit borrowing and not raise major taxes.
For example, the Defence Investment Plan is "funded" by cuts to capital investment in transport, energy and elsewhere. These are precisely the areas that Manchesterism would suggest might get more central capital investment.
Burnham the mayor has beaten the drum for the new Liverpool-Manchester Northern Powerhouse Rail and the high speed Manchester-Birmingham line he worked up with former West Midlands Mayor Andy Street. But what will Prime Minister Burnham do?
More from InDepth
We are living fewer years in good health: Is the NHS part of the problem?
- Published5 days ago
The youth clubs fighting to stay relevant in the social media age
- Published7 days ago
And what about the paused Brexit reset? There was a deal ready to go for closer relations at a UK-EU summit originally planned for next week. The government had started to explore different red lines for the next Labour manifesto and a turn back towards Europe's single market. Does he go with Remainy Manchester? Or do the feelings of his Leave constituency, Makerfield, trump all?
NatWest's Paul Thwaite says there could be a "powerful recipe for sustained growth" from the private capital that flows from "long-term certainty and genuine collaboration". There isn't, however, a "single blueprint" from Manchester or anywhere, he says. For devolution to work "the institutions, the leadership and the commercial capability matter as much as the powers themselves".
Burnham in his speech quoted the famous line attributed to Tony Wilson in the film 24 Hour Party People: "It's Manchester, we do things differently here." Now it's time to reveal what exactly it means for the nation.
BBC InDepth is the home on the website and app for the best analysis, with fresh perspectives that challenge assumptions and deep reporting on the biggest issues of the day. Emma Barnett and John Simpson bring their pick of the most thought-provoking deep reads and analysis, every Saturday. Sign up for the newsletter here
Get in touch
Are you personally affected by the issues raised in this story?`,
    bodyJa: `アンディ・バーナムが労働党の与党執行部によって議会に立候補することを阻止され、マンチェスター市長室に引きこもったのはわずか5か月前のことだった。
数週間後、そこで彼に会ったとき、彼は自分の失望を自分の都市地域のためのいくつかの野心的な計画で乗り切るつもりだと言いました。
バーナム氏は、2035年女子サッカーワールドカップの決勝戦をウェンブリーではなくマンチェスターで開催するようFIFAに直接訴えたいと語った。 「イングランド北部で育った少女にとって、それがどれほど衝撃的なことか想像してみてください」と彼は語った。
同氏は、イングランド北部全域での「グレート・ノーザン」オリンピック招致に向けて他の市長らと協力しており、ボルトンでライダーカップを開催する計画も進行中であると述べた。スポーツ団体は国内の他の地域について「再教育」する必要があると同氏は述べた。
マンチェスターは首都で半世紀を経て、すでにロンドンからブリット・アワードを奪い取っている。
このような大きく大胆なジェスチャーは、この街で何が起こったのかの一端を物語っています。バーナムの市民的野心は、国内で最も急成長している都市経済としてのマンチェスターの地位の副産物である。バーナムは首相になる準備をしているが、同じモデルを全国民に適用できるだろうか?
マンチェスターの台頭
バーナム氏が6月に議会に復帰する前から、現在無反応で過度に集中化した英国国家への批判に根ざした国家変革プログラムを提供する政治経済哲学としてのマンチェステリズムについての話題があった。
この都市には、最も自由な市場と強い社会的精神が融合してきた長い歴史があります。マンチェスターの綿花商人は、協同組合運動、労働組合、参政権運動の台頭と同時に、自由貿易と自由主義経済を擁護した。独占を打破する自由貿易の象徴であるマンチェスター運河でさえ、労働者の支援を受けた地方政府の介入を必要とした。
しかし、現代のマンチェスターを理解するには、1996 年の夏に戻る必要があります。
アンディ・バーナムはその時までに北西部を去っていた。彼は、1990 年代初頭に大学を卒業した後、初めて地元メディアの仕事を探したとき、得られたのはミドルトン・ガーディアン紙の無給記者の役だけだった、と語った。
「60年代か70年代にイングランド北西部で生まれた同世代の多くの人たちが、人生を生きていくためにしなければならなかったのと同じことを、私もやらなければならなかった」と彼は語った。 「私たちは南に行かなければなりませんでした。」
1996年までに、バーナムは国会議員の研究者になった。その年、マンチェスターに戻って、IRAは第二次世界大戦以来英国で最大の爆弾を爆発させ、市の中心部を壊滅させた。
攻撃後の復興は、マンチェスターの産業空洞化による低迷からの浮上の始まりとなった。地元の政治、文化、ビジネスのリーダーのグループとイアン・シンプソンという建築家が提供した本質的なアイデアは、損傷した建物の多くを修復するのではなく、取り壊すことによって市の中心部を再形成すべきだというものでした。
災害からは、都市の地理と経済を再構築する絶好の機会が生まれる可能性があります。評議会指導者リチャード・リース卿とそのトップ公務員である故ハワード・バーンスタイン卿は、中央主導型のさまざまな大胆な戦略計画の方向性を定め、実際には主に民間資本と、その後多大な国際投資によって実現されました。
市議会指導部は、ブラウンフィールドの工業用地を変革することに容赦なく焦点を当てました。民間部門はこれらに近づくことはできませんでしたが、評議会は公的資金を使ってこれらの投資のリスクを軽減しました。金融危機の際にはプロジェクトを終わらせるために介入することもあった。
このプロセスの最後に民間資本が注ぎ込まれ、クレーンとヘルメットが並べられました。同市議会は、一部の「手頃な価格の住宅」を建設するための要件を柔軟に解釈することを提案し、場合によっては事実上免除され、場合によっては市内の安価な地域での建設に資金を提供することで満たされた。
これらのプロジェクトの一部に資金を提供しているナットウェスト社の最高経営責任者であり、マンチェスター大学の理事でもあるポール・スウェイト氏は、過去20年間にわたるマンチェスターの成功物語は「民間部門が後押しできる明確な計画に基づいて築かれた」と語る。
生徒に寄り添うことが重要な理由
このような変化は一世代前には考えられなかったでしょう。マンチェスター市中心部の開発モデルは、クリティカルマスの人口、住宅、雇用、サービス部門の活動を創出することに成功し、そのおかげで、かなりの学部人口を宝の山に変えることができました。
市長によると、最新の国内移住者数ではロンドンからマンチェスターへの移住者（1万3000人）の方がその逆（1万1800人）よりも多かったという。
同氏はこれを、マンチェスター市中心部のサービス経済への若い労働者の流れのせいだと説明した。
1990年代とは逆に、「ここにいる誰も、人生を生きていくためにここを離れる必要はない」とバーナム氏は私に語った。 「そして実際、ロンドンからは若者が純流入している。」
都市センターによると、マンチェスターは現在卒業生の半数以上を保持しており、これはロンドンを除けば他のどの都市よりも多く、またマンチェスターには輩出したのとほぼ同じ数の若い卒業生が集まっている。
マンチェスターに本拠を置くスポーツブランド、カスストアの最高経営責任者（CEO）トム・ビーホン氏は、政府の事業政策の一部を批判することを躊躇しなかったが、今年初めにビッグボス・ポッドキャストで市長が「インバウンド投資を呼び込み、学生たちが素晴らしい大学を卒業した後に滞在したいと思う場所にする」ことに貢献したと語った。それはつまり、より多くの企業が市内で立ち上げを希望することを意味すると彼は付け加えた。
これは、集積効果、つまり類似した種類の仕事を近くに配置することによる経済力のケーススタディです。そして、そのインフラが維持できれば、マンチェスターの経済は成長し続けるでしょう。
バーナムのマンチェスター
アンディ・バーナムはこのグレーター・マンチェスターの出身者であり、初代市長として 10 年間をマンチェスターの形成に努めてきました。マンチェスターの逆転記録の第一人者であるアンディ・スピノザは、「バーナムは走行中の車に飛び込み、最後には車を運転していた」と述べている。
しかし、バーナムには、その動く車を運転する以外に何があるでしょうか?
同氏は広範な政策計画を明らかにすることなく、なんとか労働党指導部と第10位の頂点に上り詰めたが、かなり最近の文書がすでに世に出ている。 2024年、彼は同じ北西部地方市長であるマージーサイドのスティーブ・ロザラム氏とともに、『Head North：より平等な英国を求める結集する叫び』という本を出版した。
これはマンチェステリズムに関する今月初めのバーナムの演説の基礎となったものであり、今でも彼の国家政治経済憲法に関する目論見書である。国の「配線を変える」ための10項目の計画は、国中の「住宅、交通、雇用」の改善は「英国国家運営のための新たな原則と規則」からのみもたらされると主張している。
これを支えているのは、英国政府が資金を配分する方法の根幹を長い間形成してきた 2 つの方式を打ち破るという決意です。 1 つ目は財務省のグリーンブックです。これはインフラ支出を決定し、伝統的に既存の高成長地域と地価を最も高く評価してきました。バーナム氏の見解では、これによりイングランド南部への輸送への投資が滞るという。
これらすべての具体的な例は、マンチェスター中心部のピカデリー駅の 13 番線と 14 番線にあります。この地域全体を東西に結ぶ唯一の鉄道がここにあり、ペナイン山脈を越えて空港に行こうとする毎日 40,000 人の通勤客と電車で混雑することがよくあります。バーナム氏は長年、ロンドンのエリザベス線の北版を備えた地下4プラットホーム「キングス・クロス・オブ・ザ・ノース」の建設を提唱してきた。
彼は、2007年に財務省首席秘書官を務めていたとき、「北部のプロジェクトはグリーンブックを通過しなかった、大臣」と言われたときの話を伝えた。方式の改革がささやかれていた2020年にも、彼は私に同じことを言った。レイチェル・リーブス首相は、地元投資を促進するアプローチを変えるためのパイロットプロジェクトを推進した。
同書の中でバーナムはまた、公共支出を配分するバーネット方式を廃止し、スコットランド、ウェールズ、北アイルランドがイングランド全体に負けないように支出を補充することを主張している。その結果、イングランド北部が「挟み撃ち」にされたままになっているとバーナムは主張する。
『ヘッド・ノース』と最近の演説の中で、バーナムは地域全体で「同等の生活水準」を義務づけたドイツの「基本法」を指摘している。このような法律は地方自治体を保護し、地域に長期的な決定について協議する権利を与えるだろうと彼は主張した。
バーナムはまた、比例代表制の導入や貴族院を「国家と地域の上院」に置き換えるとともに、広範な公共サービスに対する権限を地域レベルに移譲することなど、大幅な憲法改正を主張している。
Net Zero では、移行、改修、経費削減、輸出可能な地元所有産業の構築に補助金を与える「Northern Way」を提案しています。同氏はこれを、最も貧しい人々に打撃を与える禁止、課徴金、税金として特徴づける「ホワイトホール方式」と対比している。
この政策の実際の結果は、世界的なエネルギー価格の上昇、家計への圧力、さらに石油とガスを汲み上げたいという北海のエネルギー利権からの焦りを考慮する必要があるだろう。たとえば、すべての地域に対する税金と歳出の完全な地方分権にはいくつかの矛盾があります。南東部は引き上げた税金を維持できるだろうか？一部の側近は最近、スコットランドの政治家らの懸念を背景に、バーネット方式の変更を軽視した。
全国の舞台
都市地域の運営と国の運営の根本的な違いは、支出を賄うためにあらゆる範囲の税収を集める必要があることです。あるいは、さらにお金を借りるためです。現時点では、どちらのイメージもかなり制限されています。マンチェスターは、そうしなければならなかったという理由もあり、インフラ、特に住宅を建設する民間資本の誘致に機敏に取り組んできた。それが全国に広がる可能性はあるのでしょうか？
マンチェスターの綿花商人を念頭に置いて、私は2月にバーナムに、マンチェスターモデルは政治的に左派か右派か、と尋ねた。国家主義の一例だろうか？
「右派と左派に関して言えば、そうですね、ここでは私たちは常に非常にビジネス寄り、企業寄りでした。私たちは人々が個人で成功し、企業が成功することを望んでいますが、同時に恩​​返しもしたいのです」と彼は語った。
運動家の中には、中心部にある輝く塔や尖塔を目指して突進するあまり、この地域の他の地域の大部分が取り残されており、マンチェスターの中心部はミニ・ロンドンになりつつあると言う人もいる。バーナムは数十年にわたる「新自由主義」と「トリクルダウン効果」を批判しているが、実際にはそれがマンチェスター・モデルの中核であった。
同時に、マーガレット・サッチャー政権の1985年のバス規制緩和は撤回され、長年にわたって中央政府、地方政府、EU、そして一部市営空港からの公的資金が路面電車に費やされてきたが、これは中心部の成長による収益を地域周辺に分散させることの重要性へのうなずきである。
多かれ少なかれ、バーナムはさらなる「公的管理」、生活費支援、中小企業料金の軽減、インフラ投資と国防支出の拡大を打ち出してきた。借入を制限し、大型増税は行わないという約束を守ることと、折り合いをつけるのは難しいように思える。
たとえば、国防投資計画は、輸送、エネルギーなどへの設備投資の削減によって「資金調達」されています。これらはまさに、マンチェステリズムがより集中的な資本投資を受ける可能性があると示唆する分野である。
バーナム市長は、新しいリバプール-マンチェスター・ノーザン・パワーハウス鉄道と、元ウェスト・ミッドランズ市長のアンディ・ストリート氏と共同で開発したマンチェスター-バーミンガム高速線の建設を成功させた。しかし、バーナム首相はどうするでしょうか？
InDepthのその他の作品
私たちが健康で過ごせる年数は減ってきています。NHS も問題の一部なのでしょうか?
- 5 日前に公開
ソーシャルメディア時代においても関連性を維持するために奮闘する青少年クラブ
- 7 日前に公開
そして、一時停止されたBrexitリセットはどうなるでしょうか？当初来週予定されていた英国・EU首脳会議では、関係緊密化に向けた合意が準備されていた。政府は次期労働党マニフェストと欧州単一市場への回帰に向けて、さまざまな越えてはならない一線を模索し始めていた。彼は残留マンチェスターに行くのか？それとも、離脱派の支持者であるメイカーフィールドの感情がすべてに優先するのだろうか？
ナットウェストのポール・スウェイト氏は、「長期的な確実性と真の協力」から流れる民間資本から「持続的成長のための強力なレシピ」が見つかる可能性があると述べた。しかし、マンチェスターやどこにも「単一の青写真」はない、と彼は言う。地方分権が機能するためには、「権力そのものと同じくらい制度、指導力、商業能力が重要である」。
バーナムはスピーチの中で、映画『24時間パーティー・ピープル』のトニー・ウィルソンによる有名なセリフ「ここはマンチェスターだ、ここでは違うやり方をしている」を引用した。今こそ、それが国家にとって正確に何を意味するのかを明らかにする時です。
BBC InDepth は、思い込みに疑問を投げかける新鮮な視点と、その日の最大の問題についての深いレポートを提供する、最高の分析を提供する Web サイトとアプリです。エマ・バーネットとジョン・シンプソンが、毎週土曜日に、最も示唆に富んだ深い読み物と分析を厳選して紹介します。ニュースレターへの登録はこちらから
連絡する
この話で提起された問題によってあなたは個人的に影響を受けていますか?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyl3z2xld8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-17T05:00:08+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/06f7/live/70ecfc50-811d-11f1-bee8-53ce494e1abc.jpg",
    readTime: 10,
  },
  {
    id: "china-hits-out-at-british-steel-national-ef9625bd",
    title: "China hits out at British Steel nationalisation",
    titleJa: "中国が英国鉄鋼国有化を非難",
    summaryJa: "中国が英国鉄鋼国有化を非難- 公開されました",
    bodyOriginal: `China hits out at British Steel nationalisation
- Published
China has hit out at the nationalisation of British Steel, saying it "firmly opposes and is strongly dissatisfied with the British government's decision".
On Thursday, the UK government said that taking the loss-making firm into public hands would protect jobs and safeguard a "vital national capability".
The UK took control of British Steel's operations in Scunthorpe last year, though it was still owned by China's Jingye Group, limiting the government's ability to steer its future.
China's commerce ministry said on Friday that the moves "seriously infringed upon Jingye's legitimate rights and interests and severely undermined the confidence of Chinese companies investing in the UK".
It also called on Britain to "faithfully fulfil" its obligations under the China–UK Bilateral Investment Treaty.
"Disregarding Jingye's significant contribution to the UK economy and society, the British side forcibly took control of the company in the name of national security," the ministry said.
The statement added that Beijing would monitor developments closely and support Chinese firms to protect their rights, but did not specify what protecting Chinese companies' rights might involve.
The decision to nationalise British Steel threatens to strain the relationship between London and Beijing just as Andy Burnham is set to become the prime minister on Monday.
The incoming PM will have to weigh his approach to the issue with the economic benefits of ties with the world's second largest economy.
The nationalisation came after Parliament on Wednesday passed legislation allowing the government to bring the steel industry into public ownership under circumstances where it met a public interest test.
Jingye is seeking compensation, having previously said the business was losing £700,000 a day. The BBC has been unable to get a response from Jingye itself to Thursday's announcement.
By taking British Steel into public ownership the government now has the power and freedom to decide on the future of the plant, while keeping the blast furnaces going.
It is unlikely the government will want to continue running the business in the long term as it is costing it more than a million pounds a day.
In March, the National Audit Office said the Scunthorpe steelworks was costing the government about £1.3m a day.
Business Secretary Peter Kyle told the BBC the government would need to cover the running costs "for the immediate future".
Related topics
- Published15 hours ago`,
    bodyJa: `中国が英国鉄鋼国有化を非難
- 公開されました
中国はブリティッシュ・スチールの国有化を激しく非難し、「英国政府の決定に断固反対し、強い不満を持っている」と述べた。
木曜日、英国政府は、赤字企業を公的手に委ねることが雇用を守り、「極めて重要な国家能力」を守ることになると述べた。
英国は昨年、スカンソープでのブリティッシュ・スチールの経営管理を掌握したが、同社はまだ中国の京業集団の所有下にあり、政府の将来の舵取り能力は制限されていた。
中国商務省は金曜日、今回の措置は「景業の正当な権利と利益を著しく侵害し、英国に投資している中国企業の信頼を著しく損なった」と述べた。
また英国に対し、中英二国間投資協定に基づく義務を「忠実に履行」するよう求めた。
同省は「英国の経済と社会に対するジンゲの多大な貢献を無視し、英国側は国家安全保障の名の下に同社を強制的に掌握した」と述べた。
声明は、中国政府が動向を注意深く監視し、中国企業の権利を保護するよう支援すると付け加えたが、中国企業の権利の保護に何が含まれるかについては明らかにしなかった。
月曜日にはアンディ・バーナム氏が首相に就任する予定であるが、ブリティッシュ・スチール国有化の決定はロンドンと北京の関係を緊張させる恐れがある。
次期首相は、この問題に対する自身のアプローチと、世界第2位の経済大国との関係がもたらす経済的利益を比較検討する必要があるだろう。
この国有化は、水曜日に議会が公益性のテストに適合する状況下で政府が鉄鋼産業を公有化することを許可する法案を可決した後に行われた。
ジンゲ氏は以前、同事業が1日あたり70万ポンドの損失を被っていると述べ、補償を求めている。 BBCは木曜日の発表に対してジンゲ氏自身からの返答を得ることができていない。
ブリティッシュ・スチールを公有化することにより、政府は高炉を稼働し続けながら、工場の将来を決定する権限と自由を手に入れた。
1日あたり100万ポンド以上の費用がかかるため、政府が長期的に事業を継続したいとは考えにくい。
3月、国家会計検査院は、スカンソープ製鉄所が政府に1日あたり約130万ポンドの損害を与えていると発表した。
ピーター・カイル商務長官はBBCに対し、政府は「当面の」運営費を負担する必要があると語った。
関連トピック
- 15 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjd4kvxpd3do?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-17T02:50:36+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/72e5/live/17d2eee0-8181-11f1-a117-633a3b1f8a33.jpg",
    readTime: 2,
  },
  {
    id: "micron-has-turned-into-the-most-importan-59227a8e",
    title: "Micron has turned into ‘the most important stock in the market.’ So is it time to worry?",
    titleJa: "マイクロンは「市場で最も重要な株」になった。それで心配する時期が来たのだろうか?",
    summaryJa: "投資家はメモリーのピークを懸念しているが、アナリストらは、さまざまな収益シナリオと比較すると株価はまだ割安に見えると述べている。",
    bodyOriginal: `While investors are concerned about a memory peak, analysts say the stock still looks cheap relative to various earnings scenarios.`,
    bodyJa: `投資家はメモリーのピークを懸念しているが、アナリストらは、さまざまな収益シナリオと比較すると株価はまだ割安に見えると述べている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/micron-has-turned-into-the-most-important-stock-in-the-market-so-is-it-time-to-worry-71e335bf?mod=mw_rss_topstories",
    publishedAt: "2026-07-17T02:11:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-40268001",
    readTime: 2,
  },
  {
    id: "oil-rises-as-iran-threatens-retaliation-3fc45945",
    title: "Oil rises as Iran threatens retaliation if Trump targets country's critical infrastructure",
    titleJa: "トランプ大統領が国の重要インフラを標的にすればイランが報復すると脅し、原油上昇",
    summaryJa: "イラン政府が、ドナルド・トランプ大統領が国の主要施設を攻撃するとの脅しを実行すれば地域のインフラを標的にすることを明言したことを受け、投資家が米国とイランの間の緊張激化を検討する中、金曜日の原油価格は上昇した。米国ウエスト・テキサス・インターミディエート先物８月限は１．３２％上昇し、１バレル＝８０．０９ドルとなった。国際ベンチマークであるブレント原油先物９月限は１．３３％上昇し、１バレル＝８５．３５ドルとなった。",
    bodyOriginal: `Oil prices rose Friday as investors weighed escalating tensions between the United States and Iran after Tehran vowed to target regional infrastructure if President Donald Trump followed through on threats to strike the country's key facilities.
U.S. West Texas Intermediate futures for August delivery rose 1.32% to $80.09 per barrel. September futures for international benchmark Brent advanced 1.33% to $85.35 per barrel.
In an interview with Fox News on Tuesday, Trump said U.S. forces would target Iran's infrastructure next week unless the two sides reached a diplomatic breakthrough.
Responding in a statement posted on Telegram on Thursday, a spokesperson for Iran's top military command warned that if Trump's threats were carried out, "everything that is still intact … that is, all the infrastructure in the region – will be crushed."
Jorge León, senior vice president at Rystad Energy, wrote in a note on Friday that a limited agreement between Washington and Tehran remained the firm's base case scenario, though confidence in that outcome had weakened.
He added that both sides still had strong economic incentives to avoid a complete breakdown in talks, with the U.S. seeking lower oil prices ahead of the November midterm elections and Iran reluctant to forgo economic incentives.
"Tehran has a substantial economic package on the table, including access to frozen assets and export waivers, that it does not want to walk away from permanently," León said.`,
    bodyJa: `イラン政府が、ドナルド・トランプ大統領が国の主要施設を攻撃するとの脅しを実行すれば地域のインフラを標的にすることを明言したことを受け、投資家が米国とイランの間の緊張激化を検討する中、金曜日の原油価格は上昇した。
米国ウエスト・テキサス・インターミディエート先物８月限は１．３２％上昇し、１バレル＝８０．０９ドルとなった。国際ベンチマークであるブレント原油先物９月限は１．３３％上昇し、１バレル＝８５．３５ドルとなった。
トランプ大統領は火曜日のFOXニュースとのインタビューで、両国が外交的打開策に達しない限り、米軍は来週イランのインフラを標的にするだろうと語った。
これに応じて、イラン軍最高司令部の報道官は、木曜テレグラムに掲載された声明で、トランプ大統領の脅しが実行されれば、「無傷で残っているすべてのもの、つまり地域内のすべてのインフラが破壊されるだろう」と警告した。
ライスタッド・エナジーの上級副社長、ホルヘ・レオン氏は金曜日のメモで、ワシントンとイラン政府の間の限定的な合意が同社の基本シナリオのままであるが、その結果に対する信頼は弱まったと述べた。
同氏は、米国は11月の中間選挙を前に原油価格の引き下げを求める一方、イランは経済的インセンティブを放棄することに消極的であり、双方には交渉の完全な決裂を避ける強い経済的インセンティブがまだあると付け加えた。
「イラン政府は凍結資産へのアクセスや輸出免除などの実質的な経済対策を検討しており、それを永久に放棄することは望んでいない」とレオン氏は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/oil-price-today-brent-wti.html",
    publishedAt: "2026-07-17T01:51:48+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "trump-media-to-sell-early-access-to-key-11943fca",
    title: "Trump Media to sell early access to key social posts",
    titleJa: "トランプメディア、主要なソーシャル投稿への早期アクセスを販売",
    summaryJa: "トランプメディア、主要なソーシャル投稿への早期アクセスを販売- 公開されました",
    bodyOriginal: `Trump Media to sell early access to key social posts
- Published
Trump Media & Technology Group, which owns Truth Social, is launching a paid service to give Wall Street firms high-speed access to its most influential posts.
Launching on 1 August, instant updates will be delivered from key accounts, it said. US President Donald Trump currently has the most followers on the platform.
The company behind the app hopes it will create a steady new source of money for the firm which is currently loss-making.
It is likely to be aimed at financial traders who want to see market-moving news fast. Trump’s social media posts often cause sudden swings in global markets, especially when he writes about trade and tariffs. For firms, a delay of even seconds can be costly.
Until now, banks and traders had to monitor the app manually. The new system will send posts directly to paying clients.
"Markets already move on Truth Social posts", said Kevin McGurn, the interim boss of Trump Media, adding that the service will create a steady profit.
The new commercial data feed, named Truth API, promises to deliver posts to paying institutional clients in "milliseconds".
The service will run 24 hours a day, seven days a week.
The company, which launched its social media app in 2022, said some firms have been copying its data for months without permission.
McGurn warned that Trump Media will soon block these methods, forcing firms to buy the official feed instead.
Trump could benefit substantially from the move. Since his family remains the majority shareholder in the company, the president stands to profit directly from selling expedited access to his own public statements.
The BBC has contacted Trump Media and the White House for comment on whether or not the president's posts will be included in the paid feed.
While other social media networks already sell data, the move highlights the unique overlap between Trump’s private businesses and his public role as president.
It would be "unprecedented" if the feature did include the president's posts, said Mark Spiegel, an investment expert from Stanphyl Capital Management.
Companies that trade off the latest headlines would be "at a disadvantage" if they did not pay for quick access as they could miss out on posts that could move markets, Spiegel said.
"But to put this in context, remember that Trump's posts constitute just a tiny fraction of what moves markets," he added.
Additional reporting by Osmond Chia`,
    bodyJa: `トランプメディア、主要なソーシャル投稿への早期アクセスを販売
- 公開されました
Truth Socialを所有するトランプ・メディア＆テクノロジー・グループは、ウォール街の企業が同社の最も影響力のある投稿に高速アクセスできるようにする有料サービスを開始している。
8月1日に開始され、主要アカウントからインスタントアップデートが配信されるという。現在、このプラットフォームで最も多くのフォロワーを抱えているのはドナルド・トランプ米国大統領だ。
このアプリを開発した会社は、現在赤字を出している同社に安定した新たな資金源を生み出すことを期待している。
市場の動きのニュースを素早く知りたい金融トレーダーをターゲットにしている可能性が高い。トランプ氏のソーシャルメディアへの投稿は、特に貿易や関税について書いた場合、世界市場に突然の変動を引き起こすことが多い。企業にとっては、ほんの数秒の遅れでもコストがかかる可能性があります。
これまで、銀行やトレーダーはアプリを手動で監視する必要がありました。新しいシステムでは、料金を支払っているクライアントに投稿が直接送信されます。
トランプ・メディアの暫定責任者ケビン・マクガーン氏は「市場はすでに真実ソーシャルの投稿に注目している」と述べ、このサービスは安定した利益を生み出すだろうと付け加えた。
Truth APIと名付けられた新しい商用データフィードは、料金を支払っている機関顧客に「ミリ秒」で投稿を配信すると約束している。
このサービスは 24 時間年中無休で提供されます。
2022年にソーシャルメディアアプリを立ち上げた同社は、一部の企業が数カ月にわたり同社のデータを無断でコピーしていたと述べた。
マクガーン氏は、トランプ・メディアが間もなくこうした手法を阻止し、代わりに企業に公式フィードの購入を強制すると警告した。
トランプ氏はこの動きから大きな恩恵を受ける可能性がある。彼の家族が依然として同社の大株主であるため、大統領は自身の公式声明への迅速なアクセスを販売することで直接利益を得る立場にある。
BBCはトランプ・メディアとホワイトハウスに連絡し、大統領の投稿が有料フィードに含まれるかどうかについてコメントを求めた。
他のソーシャルメディアネットワークはすでにデータを販売しているが、今回の動きは、トランプ氏の民間事業と大統領としての公的な役割との間の独特の重複を浮き彫りにしている。
スタンフィル・キャピタル・マネジメントの投資専門家マーク・シュピーゲル氏は、特集に大統領のポストが含まれていれば「前例のない」ことになるだろうと述べた。
最新のヘッドラインをトレードオフにしている企業は、迅速なアクセスに料金を支払わなければ、市場を動かす可能性のある投稿を見逃す可能性があり「不利な立場にある」とシュピーゲル氏は述べた。
「しかし、これを文脈で説明すると、トランプ大統領の投稿は市場を動かすもののほんの一部に過ぎないことを忘れないでください」と彼は付け加えた。
オズモンド・チアによる追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c79gw4lj89eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-17T01:27:36+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3a36/live/a22ce670-817e-11f1-a087-3f9df20b4f8a.jpg",
    readTime: 3,
  },
  {
    id: "elon-musk-s-memphis-ai-empire-is-the-epi-8a4ade7d",
    title: "Elon Musk's Memphis AI empire is the epicenter of the data center backlash",
    titleJa: "イーロン・マスク氏のメンフィス AI 帝国はデータセンターの反発の中心地である",
    summaryJa: "イーロン・マスクがグレーター・メンフィスを人工知能の野望の中心地とし、データセンターとエネルギーインフラを猛スピードで建設してから2年が経ち、住民は騒音や天然ガス燃焼タービンからの排出物などの望ましくない影響と格闘している。現在、Colossus および Colossus II として知られる SpaceXAI サイトに対する世論の反対が、AI 開発に反対する全国の他のコミュニティに青写真を提供しています。",
    bodyOriginal: `Two years after Elon Musk made Greater Memphis the center of his artificial intelligence ambitions, building data centers and energy infrastructure at breakneck speed, residents are grappling with unwanted effects, including noise and emissions from the natural gas-burning turbines.
Now, public opposition to the SpaceXAI sites, known as Colossus and Colossus II, is providing a blueprint for other communities across the country opposed to AI developments.
This week, New York Gov. Kathy Hochul enacted a one-year moratorium on the construction of AI data centers in her state, drawing the ire of U.S. President Donald Trump, an ally of Musk.
And last week, New Jersey Gov. Mikie Sherrill enacted legislation to ensure data center operators pay a fair share for electricity, instead of shifting costs to residents and businesses.
Other policy proposals, protests and litigation are underway, many directly citing Memphis and SpaceXAI, which was acquired by Musk's defense contractor, SpaceX, in February.
"When you think about what precedent Colossus has set, it hasn't been a great one," said Jigar Shah, the former director of the U.S. Department of Energy loan program office, and a long-time energy entrepreneur. "It certainly is a case study for what not to do in most of the rest of the country. But from a capitalist standpoint, they got rewarded."
In June, SpaceX pulled off a record-setting IPO, with AI and its Colossus I and II facilities at the heart of its growth narrative.
Google, Anthropic and Reflection AI have all inked agreements with SpaceX to rent excess computing capacity at Colossus and Colossus II, deals worth up to $2.32 billion per month.
Residents don't feel the same benefits. Several told CNBC that SpaceXAI never consulted with them about their plans before they broke ground, though it was clear the data centers would profoundly impact nearby neighborhoods.
Today, the noise from Colossus II and its gas-burning turbines is "like a form of torture," said Jason Haley of Southaven, Miss., whose house is within a mile of the site. Southaven is part of the Greater Memphis area.
Opposition rising
Opposition to data centers is rising, and not just against xAI, but also in response to developments planned or underway from Microsoft, Meta, Google, OpenAI and other so-called hyperscalers.
In May, seven in 10 Americans said they oppose the construction of data centers for AI in their local area, according to a Gallup poll. Nearly half, or 48%, said they were strongly opposed.
Even Musk has acknowledged the public distaste for AI data centers and power plants to run them.
"There are very few people who want a power plant in their backyard," Musk said in an interview with JPMorgan CEO Jamie Dimon in the road show ahead of SpaceX's IPO. "If we wanted to, say, double the electricity usage of the United States," he said, "we would have to build twice as many power plants. Most communities are not super excited about that."
Musk and SpaceX did not respond to multiple requests for comment about the backlash to their buildout in Memphis.
SpaceXAI has purchased over 1,100 acres in Greater Memphis for its data centers and power plant.
The data centers were initially built to train and run xAI's Grok AI models and chatbot, which was steeped in controversy.
Data centers have been around for decades, but a building boom started after generative AI triggered an explosion in the need for data processing and power. The facilities typically require vast plots of land, energy to power the chips and servers inside, and water to cool high-tech equipment.
For all their complexity, once built, data centers don't require a large workforce for operations, and don't always generate a huge number of new jobs or vast amounts of tax revenue.
Memphis residents and climate advocates are sharing their experiences as a cautionary tale, using lessons learned to help other communities push for updated regulations, or more favorable deals with data center developers.
Their testimonies have directly and indirectly influenced policies, lawsuits, elections and movements taking shape beyond Memphis.
Communities in nearby Olive Branch and Jackson, for example, updated their zoning laws, citing a wish to avoid the pitfalls Memphis residents faced when Musk moved to town.
In June, Utah state Senate president Stuart Adams lost in the Republican primary after he supported a proposed data center backed by investor Kevin O'Leary. Two other local officials who backed the project also lost in primary elections.
Musk's Colossus I data center was completed in just 122 days, he said in a post on Sept. 2, 2024, announcing that the data center had been brought online.
During its first year in operation, SpaceXAI paid $25 million in taxes, making it the second largest tax-paying property in Shelby County after FedEx, said Memphis Mayor Paul Young, who helped bring the data center business to the county.
"Ever since this project began, we were looking at how to mitigate the potential negative impacts and how to amplify the positives," Young said. He acknowledged that SpaceX has not yet delivered everything it promised, such as the delayed construction of a water recycling plant meant to reduce the company's need for huge amounts of water to cool equipment at Colossus.
Residents around Greater Memphis told CNBC their water and electricity bills have gone up after SpaceXAI moved to town.
Memphis Light Gas & Water said that water and electricity rates "have not been impacted" by SpaceXAI.
An "electric rate increase plan of 4% for 3 years beginning in 2024 was not due to any data center load," a spokesperson for the utility told CNBC via email.
Legal battles
Last year, Haley joined a neighborhood group called the Safe and Sound Coalition, to take noise measurements, raise awareness and push the company and municipal leaders to make changes.
In March, Southaven Mayor Darren Musselwhite pledged to "step-up tougher enforcement" on the noise but told Haley, in e-mails read by CNBC, "you may want to consider selling your home."
Musselwhite told CNBC in an email on Thursday that he has "worked countless hours to mitigate noise concerns," and "never told a citizen to move."
Haley and other Southaven residents sued SpaceX in a proposed class action lawsuit filed in June this year, alleging the company created a "public nuisance" with noise from Colossus II.
Following in their footsteps, neighbors to Microsoft's Fairwater Data Center in Mt. Pleasant, Wisconsin, this month filed a proposed class action suit over noise issues.
In April, the Southern Environmental Law Center and Earthjustice sued Musk's company on behalf of the NAACP in a federal court in Mississippi. They allege the company has violated the federal Clean Air Act by using dozens of gas-burning turbines without required permits, and without pollution controls in place from the start to power its facilities.
The types of turbines SpaceXAI used in Memphis can emit thousands of tons of smog-forming nitrogen oxides per year, according to manufacturers' spec sheets. SpaceXAI also emits particulate matter called "PM 2.5," or "particle pollution," from construction and operations.
NAACP's lawyers asked a judge for an emergency injunction in May to stop SpaceX from using dozens of turbines in Southaven. The U.S. Department of Justice swiftly stepped in, asking the court to toss the suit.
As part of their motion to intervene last month, the DOJ said SpaceXAI's technology had been used in American military operations in Iran, and was now crucial for national security. They also argued the suit "threatens" America's national, economic and energy security.
SpaceX is defending against the NAACP lawsuit, arguing the turbines currently on site are only temporary, and plans are in place for permitted turbines with pollution controls.
The NAACP released a guide for communities in January on how to protect themselves from "dirty data," and a framework companies can follow to avoid clashes with neighbors like SpaceXAI experienced in Memphis.
Attorney Abre' Conner, who leads the NAACP Center for Environmental and Climate Justice, said SpaceXAI and other companies are moving to areas that have already experienced industrial pollution, "deepening the sacrifice zones that many of these community members have been fighting to get out of for so long."
In Whitehaven, Tennessee, where a majority of residents are black, long-time resident Loretta Thornton said she had invested some retirement and savings into reframing her house, which borders the fence line of Colossus II.
She said suggestions to sell and move away don't seem viable, especially with housing costs and interest rates rising.
"You just have to endure this. And that's all I'm doing," Thornton said. "I know I cannot sell my property. Who will want to buy it, living beside this thing?"
-- CNBC producer Andrew Evers contributed reporting.`,
    bodyJa: `イーロン・マスクがグレーター・メンフィスを人工知能の野望の中心地とし、データセンターとエネルギーインフラを猛スピードで建設してから2年が経ち、住民は騒音や天然ガス燃焼タービンからの排出物などの望ましくない影響と格闘している。
現在、Colossus および Colossus II として知られる SpaceXAI サイトに対する世論の反対が、AI 開発に反対する全国の他のコミュニティに青写真を提供しています。
ニューヨーク州のキャシー・ホチョル知事は今週、同州でのAIデータセンター建設を1年間停止する法律を制定し、マスク氏の同盟者であるドナルド・トランプ米大統領の怒りを買った。
そして先週、ニュージャージー州のミキエ・シェリル知事は、住民や企業にコストを転嫁するのではなく、データセンター運営者が電気代の公平な負担を確保する法案を制定した。
他の政策提案、抗議活動、訴訟も進行中であり、その多くはメンフィスとマスク氏の防衛請負業者であるスペースXが2月に買収したスペースXAIを直接引用している。
「コロッサスがど​​んな前例を作ったかを考えてみると、それは決して素晴らしいものではなかった」と、元米国エネルギー省融資プログラム局長であり、長年のエネルギー起業家であるジガー・シャー氏は言う。 「これは確かに、国内の他のほとんどの地域でしてはいけないことの事例研究だ。しかし、資本主義の観点からすれば、彼らは報われたのである。」
6月、SpaceXはAIとそのColossus IおよびColossus II施設を成長物語の中心に据え、記録的なIPOを成功させた。
Google、Anthropic、Reflection AIはいずれも、ColossusとColossus IIの余剰コンピューティング能力をレンタルするというSpaceXとの契約を締結しており、月額最大23億2000万ドル相当の契約となっている。
住民は同じ恩恵を感じていない。データセンターが近隣地域に重大な影響を与えることは明らかだったが、着工前にSpaceXAIが計画について一度も相談しなかった、と数人はCNBCに語った。
現在、コロッサス II とそのガス燃焼タービンから出る騒音は「一種の拷問のようだ」と、現場から 1 マイル以内に家があるミシガン州サウスヘブンのジェイソン・ヘイリー氏は語った。サウスヘイブンはグレーター メンフィス地域の一部です。
反対派の台頭
データセンターに対する反対は高まっており、それは xAI に対する反対だけでなく、Microsoft、Meta、Google、OpenAI、およびその他のいわゆるハイパースケーラーによる計画または進行中の開発に対抗するものでもあります。
ギャラップの世論調査によると、5月にはアメリカ人の10人中7人が地元でのAI用データセンターの建設に反対していると回答した。ほぼ半数の48％が「強く反対」と回答した。
マスク氏ですら、AIデータセンターやそれを運営する発電所に対する国民の嫌悪感を認めている。
マスク氏はスペースXのIPOに先立つロードショーでJPモルガンのジェイミー・ダイモン最高経営責任者（CEO）とのインタビューで「自宅の裏庭に発電所を置きたいと思う人はほとんどいない」と語った。 「例えば、米国の電力使用量を2倍にしたければ、2倍の発電所を建設しなければならないだろう。ほとんどの地域社会はそれについてあまり乗り気ではない」と彼は言う。
マスク氏とスペースX社は、メンフィスでの建設に対する反発について複数のコメント要請に応じなかった。
SpaceXAI は、データセンターと発電所のためにグレーター メンフィスにある 1,100 エーカー以上の土地を購入しました。
データセンターは当初、xAI の Grok AI モデルとチャットボットをトレーニングおよび実行するために建設されましたが、これについては論争が巻き起こりました。
データセンターは何十年も前から存在していましたが、生成 AI がデータ処理と電力の需要の爆発的な増加を引き起こした後、建設ブームが始まりました。通常、施設には広大な土地、内部のチップやサーバーに電力を供給するためのエネルギー、ハイテク機器を冷却するための水を必要とします。
データセンターはその複雑さにもかかわらず、一度構築されてしまえば、運用に大規模な労働力を必要とせず、常に膨大な数の新たな雇用や巨額の税収を生み出すわけでもありません。
メンフィスの住民と気候変動擁護者は、他のコミュニティが最新の規制を推進したり、データセンター開発者とのより有利な取引を推進したりするために学んだ教訓を活用して、自分たちの経験を教訓として共有しています。
彼らの証言は、メンフィスを超えて形を成す政策、訴訟、選挙、運動に直接的および間接的に影響を与えてきました。
たとえば、近くのオリーブブランチやジャクソンのコミュニティは、マスク氏が町に引っ越してきたときにメンフィスの住民が直面した落とし穴を避けたいという願いを理由に、ゾーニング法を更新した。
6月、ユタ州上院議長のスチュアート・アダムスは、投資家のケビン・オレアリーが支援するデータセンター計画を支持したため、共和党予備選で敗北した。このプロジェクトを支持した他の地方公務員2人も予備選挙で敗れた。
マスク氏のColossus Iデータセンターはわずか122日で完成したと同氏は2024年9月2日の投稿で述べ、データセンターがオンラインになったと発表した。
データセンター事業の同郡への導入に尽力したメンフィス市長のポール・ヤング氏によると、スペースXAIは運営初年度に2500万ドルの税金を支払い、シェルビー郡内ではフェデックスに次いで2番目に大きな納税施設となったという。
「このプロジェクトが始まって以来、私たちは潜在的なマイナスの影響をどのように軽減し、プラスの影響をどのように増幅するかを検討していました」とヤング氏は語った。同氏は、スペースX社がコロッサスの設備を冷却するための大量の水の必要性を減らすことを目的とした水リサイクルプラントの建設の遅れなど、約束したすべてをまだ達成していないことを認めた。
グレーターメンフィス周辺の住民はCNBCに対し、SpaceXAIが町に移転してから水道代と電気代が上がったと語った。
メンフィス・ライト・ガス・アンド・ウォーターは、水道料金と電気料金はSpaceXAIによって「影響を受けていない」と述べた。
電力会社の広報担当者は電子メールでＣＮＢＣに対し、「２０２４年から３年間で４％の電気料金値上げ計画はデータセンターの負荷によるものではない」と語った。
法廷闘争
昨年、ヘイリーさんは騒音測定を行い、意識を高め、会社や自治体の指導者に変革を促すために、Safe and Sound Coalition と呼ばれる近隣団体に参加しました。
サウスヘイブン市長のダレン・マッセルホワイト氏は3月、騒音に対する「取り締まりをさらに強化する」と約束したが、CNBCが読んだ電子メールの中でヘイリー氏に「家を売却することを検討したほうがいいかもしれない」と語った。
マッセルホワイト氏は木曜日、CNBCに電子メールで「騒音の懸念を軽減するために数え切れないほどの時間を費やしてきた」と述べ、「市民に移動するように言ったことは一度もなかった」と語った。
ヘイリー氏と他のサウスヘイブン住民は、スペースX社がコロッサスIIの騒音で「公共迷惑」を引き起こしたとして、今年6月に提起された集団訴訟で同社を訴えた。
彼らの足跡をたどり、ウィスコンシン州マウントプレザントにあるマイクロソフトのフェアウォーターデータセンターの近隣住民は今月、騒音問題をめぐって集団訴訟を提起した。
4月、南部環境法センターとアースジャスティスはNAACPを代表してマスク氏の会社をミシシッピ州の連邦裁判所に告訴した。彼らは、同社が必要​​な許可なしに数十台のガス燃焼タービンを使用し、施設に電力を供給するために最初から汚染対策を講じずに連邦大気浄化法に違反したと主張している。
メーカーの仕様書によると、SpaceXAIがメンフィスで使用しているタービンの種類は、スモッグを形成する窒素酸化物を年間数千トン排出する可能性がある。 SpaceXAIはまた、建設や運営から「PM 2.5」または「粒子汚染」と呼ばれる粒子状物質を排出している。
NAACPの弁護士らは5月、スペースX社がサウスヘイブンで数十基のタービンを使用することを差し止める緊急差し止め命令を判事に求めた。米国司法省はすぐに介入し、裁判所に訴訟を放棄するよう求めた。
先月の介入動議の一環として司法省は、スペースXAIの技術はイランにおけるアメリカの軍事作戦に使用されており、今や国家安全保障にとって極めて重要であると述べた。彼らはまた、この訴訟は米国の国家、経済、エネルギーの安全保障を「脅かしている」と主張した。
SpaceXはNAACP訴訟に対して弁護しており、現在敷地内に設置されているタービンは一時的なものにすぎず、汚染防止を備えた許可されたタービンの計画が策定されていると主張している。
NAACPは1月、「ダーティデータ」から身を守る方法についてのコミュニティ向けガイドと、メンフィスで経験したSpaceXAIのような近隣住民との衝突を避けるために企業が従うことができる枠組みを発表した。
NAACP環境・気候正義センターを率いるエイブレ・コナー弁護士は、SpaceXAIやその他の企業がすでに産業汚染が発生している地域に移転しており、「地域住民の多くが長い間そこから抜け出すために戦ってきた犠牲ゾーンをさらに深めている」と述べた。
住民の大多数が黒人であるテネシー州ホワイトヘブンで、長年住んでいるロレッタ・ソーントンさんは、退職金と貯蓄の一部をコロッサス2世のフェンスラインに接する自宅の建て替えに投資したと語った。
同氏は、特に住宅費と金利が上昇している状況では、売却して引っ越しするという提案は実現可能ではないと思われると述べた。
「あなたはただこれに耐えなければなりません。そしてそれが私がしているすべてです」とソーントンは言いました。 「自分の不動産を売却できないことはわかっています。この物件の隣に住んで、誰がそれを買いたいと思うでしょうか？」
-- CNBCプロデューサーのアンドリュー・エヴァーズ氏が報道に貢献した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/elon-musk-memphis-ai-colossus-data-center.html",
    publishedAt: "2026-07-17T00:49:45+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "spacex-aborts-starship-test-flight-sendi-bd966a0d",
    title: "SpaceX aborts Starship test flight, sending stock lower",
    titleJa: "スペースX、スターシップの試験飛行を中止、株価下落",
    summaryJa: "スペースXは木曜日、巨大ロケット「スターシップ」の打ち上げを取り消し、最高経営責任者（CEO）のイーロン・マスク氏は「できれば数日以内に」再挑戦することを約束した。90分間の打ち上げ枠は午後6時45分に開いた。東部時間後、数分以内に、この再利用ロケットメーカーはライブストリームでその日は活動を休止すると発表した。",
    bodyOriginal: `SpaceX scrubbed the launch of its Starship mega rocket on Thursday, with CEO Elon Musk pledging to make another attempt "hopefully in a few days."
A 90-minute launch window opened at 6:45 p.m. ET, and within minutes, the reusable rocket maker announced on a livestream that it was standing down for the day.
"Some of the engines didn't start, triggering an automatic launch abort," Musk wrote in a post on X. He added later in another X post: "To be confident of a good flight, 2 Raptors will be removed & replaced. Most probable launch timing is early next week."
Shares of SpaceX fell more than 3% in extended trading, sinking further beneath its IPO price of $135. The stock is on a five-day losing streak.
The rocket was poised for takeoff from SpaceX's Starbase complex in South Texas when a hold was triggered on the booster, which "shut down the engines right as they were starting to ignite," a SpaceX employee said on the livestream.
It would've been the first test flight of Starship V3, an upgraded version of its roughly 400-foot-tall rocket, since SpaceX's blockbuster initial public offering last month.
An earlier V3 test launch in May did not go perfectly.
After a successful liftoff, several engines in the bottom stage of the rocket failed to reignite to help guide it to a soft landing, causing it to plummet into the Gulf of Mexico.
The Federal Aviation Administration ordered SpaceX to investigate the anomaly, and on Monday, the agency cleared Starship to fly again.
"The final mishap report cites two most probable root causes for the loss of the Super Heavy booster as heat effects on propulsion system components during the ascent and erroneous engine alarm system settings," the FAA said in a statement.
SpaceX identified four corrective actions, including vehicle hardware and software updates, "to prevent a reoccurrence of the event," the agency said.
As part of Thursday's mission, Starship planned to ferry 20 functioning, next-generation Starlink satellites, which were expected to extend their solar arrays and antennas, then attempt to connect with the broader Starlink constellation, SpaceX said. The satellites are expected to "demise upon reentry approximately 20 minutes after deployment," the company noted.
Investors are closely watching the 13th Starship test flight as the giant rocket is key to SpaceX ambitions to scale its Starlink satellite internet service, and to complete Artemis test flights with NASA as it aims for the U.S. space agency's next moon landing.
Since they hit the public markets last month, SpaceX shares have skyrocketed, then fallen, and briefly dipped below their $135 IPO price on Wednesday. The stock continued to fall on Thursday, sliding more than 3% to close at $131.11.
With the IPO, SpaceX raised a total of $85.7 billion, including the underwriters' option, making it the largest IPO on record.
— CNBC's Lora Kolodny contributed reporting to this article.`,
    bodyJa: `スペースXは木曜日、巨大ロケット「スターシップ」の打ち上げを取り消し、最高経営責任者（CEO）のイーロン・マスク氏は「できれば数日以内に」再挑戦することを約束した。
90分間の打ち上げ枠は午後6時45分に開いた。東部時間後、数分以内に、この再利用ロケットメーカーはライブストリームでその日は活動を休止すると発表した。
マスク氏はXへの投稿で「エンジンの一部が始動せず、自動打ち上げ中止を引き起こした」と書き、その後別のXへの投稿で「良好な飛行を確信するため、2機のラプターを取り外して交換する。最も可能性の高い打ち上げ時期は来週初めだ」と付け加えた。
スペースXの株価は延長取引で3％以上下落し、IPO価格の135ドルをさらに下回った。株価は5日連続で下落している。
ロケットはテキサス州南部にあるスペースXのスターベース複合施設から離陸の準備をしていたところ、ブースターのホールドが作動し、「点火が始まると同時にエンジンが停止した」とスペースXの従業員がライブストリームで語った。
これは、高さ約400フィートのロケットのアップグレード版であるスターシップV3の、先月の大ヒット株式公開以来、初の試験飛行となるはずだった。
5 月に行われた V3 テストの開始は完全には完了しませんでした。
打ち上げが成功した後、ロケットの下段にあるいくつかのエンジンが再点火して軟着陸に導くことができず、ロケットはメキシコ湾に急落した。
米連邦航空局はスペースXに異常の調査を命じ、月曜日、同局はスターシップの再飛行を許可した。
FAAは声明で、「最終事故報告書では、スーパーヘビーブースター喪失の最も考えられる根本原因として、上昇中の推進システム部品への熱影響と、エンジン警報システムの設定ミスの2つを挙げている」と述べた。
スペースXは「事故の再発を防ぐ」ため、車両のハードウェアとソフトウェアのアップデートを含む4つの是正措置を特定したと同局は述べた。
木曜日のミッションの一環として、スターシップは、太陽電池アレイとアンテナを拡張し、より広範なスターリンク星座との接続を試みることが期待される、機能する次世代スターリンク衛星20基を輸送することを計画していた、とスペースXは述べた。同社は、衛星は「展開後約20分後に再突入時に消滅」すると予想されていると述べた。
巨大ロケットは、スターリンク衛星インターネットサービスを拡大し、米国宇宙機関の次の月面着陸を目指すNASAとのアルテミス試験飛行を完了するというスペースXの野望の鍵となるため、投資家は13回目のスターシップ試験飛行に注目している。
先月公開市場に登場して以来、スペースX株は急騰した後下落し、水曜日には一時公開価格の135ドルを下回った。株価は木曜日も下落を続け、3％以上下落して131.11ドルで取引を終えた。
今回のIPOでスペースXは引受会社オプションを含め総額857億ドルを調達し、史上最大のIPOとなった。
— CNBC の Lora Kolodny がこの記事にレポートを寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/spacex-spcx-stock-starship-test-flight.html",
    publishedAt: "2026-07-17T00:16:37+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "netflix-is-getting-stingier-about-its-vi-034703e8",
    title: "Netflix is getting stingier about its viewing data, and Wall Street isn’t happy",
    titleJa: "Netflixは視聴データについてますますケチになっているが、ウォール街は不満を抱いている",
    summaryJa: "Netflixの株価は、業績がまちまちであることと、「私たちが見たもの」レポートの発行を削減するという新たな計画を受けて下落している。",
    bodyOriginal: `Netflix’s stock is falling in the wake of mixed earnings and a new plan to cut back on the publication of ‘What We Watched’ reports.`,
    bodyJa: `Netflixの株価は、業績がまちまちであることと、「私たちが見たもの」レポートの発行を削減するという新たな計画を受けて下落している。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/netflix-is-getting-stingier-about-its-viewing-data-and-wall-street-isnt-happy-15033db1?mod=mw_rss_topstories",
    publishedAt: "2026-07-17T00:14:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-80154349",
    readTime: 2,
  },
  {
    id: "10-u-s-metro-areas-where-builders-are-sl-c286e326",
    title: "10 U.S. metro areas where builders are slashing prices on new homes",
    titleJa: "建設業者が新築住宅の価格を値下げしている米国の10の大都市圏",
    summaryJa: "中古住宅の価格は過去最高値を更新したばかりだが、必死の建設業者が価格を引き下げたため、多くの新築住宅が割引価格で販売されている。",
    bodyOriginal: `Existing-home prices just hit a new record high — but there are plenty of newly built homes selling at a discount, as desperate builders cut prices.`,
    bodyJa: `中古住宅の価格は過去最高値を更新したばかりだが、必死の建設業者が価格を引き下げたため、多くの新築住宅が割引価格で販売されている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/10-u-s-metro-areas-where-builders-are-slashing-prices-on-new-homes-1eb19355?mod=mw_rss_topstories",
    publishedAt: "2026-07-17T00:10:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-882577",
    readTime: 2,
  },
  {
    id: "microsoft-s-nadella-criticizes-anthropic-ab847f66",
    title: "Microsoft's Nadella criticizes Anthropic's Fable for being 'editorially controlled'",
    titleJa: "Microsoftのナデラ氏、Anthropicの寓話は「編集管理されている」と批判",
    summaryJa: "Microsoftの最高経営責任者（CEO）サティア・ナデラ氏は水曜日、同社のハイエンド人工知能モデル「Fable」に対してユーザーが送信するリクエストに対するAnthropicの制限は意味がないと従業員に語った。「Fable を使用する場合、何らかのランダムな理由で拒否されると、これほど編集的に管理された作成ツールを最後に使用したのはいつ以来だろうかというような気分になります。」 CNBCに提供された発言のコピーによると、ナデラ氏はマイクロソフトのAIソフトウェア「Copilot」に取り組むエンジニアらにこう語ったという。 「それは意味がありません。」",
    bodyOriginal: `Microsoft CEO Satya Nadella told employees Wednesday that Anthropic's limits on requests that users submit to the startup's high-end Fable artificial intelligence model don't make sense.
"If you use Fable, when it refuses for any random thing, it just is like, when was the last time you had a creation tool that was so editorially controlled?" Nadella told engineers working on Microsoft's Copilot AI software, according to a copy of his remarks that was provided to CNBC. "It doesn't make sense."
Microsoft declined to comment. An Anthropic spokesperson did not immediately respond to a request for comment.
When end users ask Fable about some aspects of creating large-scale models, among other topics, Anthropic might send responses from an older version, according to a support page. Some people have called out the rejections on social media.
Anthropic said when it announced Fable 5 in early June that it was attempting to reduce false positives for blocked requests. Three days after the introduction, Anthropic cut off Fable access to comply with a U.S. government export control directive, and on July 1 the company restored the model, saying "the new safeguards will flag a slightly higher fraction of harmless requests than the previous Fable safeguards."
Nadella's comments come as executives have looked more toward cost-efficient models that don't come from the most well-funded labs, but can handle software development and other tasks inside companies.
On Thursday, Chinese startup Moonshot AI announced an open-source model that it said surpasses recent releases from Anthropic and OpenAI.
The Microsoft chief's remarks represent criticism of a valued partner and client.
Anthropic's Claude Code software development tool has become popular among programmers and people with less technical talent. In November, Microsoft said it was making a $5 billion investment in Anthropic, as the startup agreed to spend $30 billion on Microsoft's Azure cloud. This year Microsoft unveiled Copilot Cowork, a business productivity assistant that draws on the startup's models.
Investors have worried that Microsoft could face disruption from models that quickly write software, as the company allocates tens of billions per quarter to data center expansion. Shares have fallen 17% so far this year, while the Nasdaq Composite index has gained 11%.
Lately Nadella has argued that companies should be able to cost-efficiently develop custom models and draw on internal data, without letting it flow out to other entities, such as companies in the business of building models. In a Sunday blog post, he invoked Palantir CEO Alex Karp, who said on CNBC that technical organizations "want to know they own the means of production."
Microsoft offers the Foundry service where developers can adopt over 11,000 models, including some from Anthropic and OpenAI.
"It can't be that there are only two companies in the world with token capital, and everybody else is renting it," Nadella told the engineers. "It makes no economic sense." Tokens measure computing usage of AI models.
Microsoft tied itself tightly to OpenAI through a series of investments, but the two companies drifted and became competing with each other after the abrupt 2023 ousting and reinstatement of OpenAI's CEO, Sam Altman, with little notice to Nadella.
OpenAI said in April it would bring its models beyond Azure to cloud infrastructure leader Amazon Web Services. Microsoft, for its part, announced a series of in-house models, including one for coding, in June. Its stake in OpenAI's for-profit business was worth $135 billion as of October.
Nadella also said it's good Microsoft is merging products for consumer and corporate workers. In March, he announced that former Snap executive Jacob Andreou would take charge of Copilot across both categories.
The unification is something "we should have done maybe day one," he said. In April Microsoft said it had over 20 million paid seats for the work-centric Copilot, or 4% of the cloud-based Office customer base.
WATCH: We see Microsoft accelerating growth in next few years, says Wolfe's Zukin`,
    bodyJa: `Microsoftの最高経営責任者（CEO）サティア・ナデラ氏は水曜日、同社のハイエンド人工知能モデル「Fable」に対してユーザーが送信するリクエストに対するAnthropicの制限は意味がないと従業員に語った。
「Fable を使用する場合、何らかのランダムな理由で拒否されると、これほど編集的に管理された作成ツールを最後に使用したのはいつ以来だろうかというような気分になります。」 CNBCに提供された発言のコピーによると、ナデラ氏はマイクロソフトのAIソフトウェア「Copilot」に取り組むエンジニアらにこう語ったという。 「それは意味がありません。」
マイクロソフトはコメントを控えた。アンスロピック社の広報担当者はコメント要請に応じなかった。
サポートページによると、エンドユーザーが大規模モデル作成のいくつかの側面などについてFableに質問すると、Anthropicは古いバージョンからの応答を送信する可能性があるという。ソーシャルメディア上で拒否を批判する人もいる。
Anthropic は 6 月初旬に Fable 5 を発表した際、ブロックされたリクエストの誤検知を削減しようとしていると述べました。導入の3日後、アンスロピックは米国政府の輸出規制指令に従うためにフェイブルへのアクセスを遮断し、7月1日に同社はモデルを復元し、「新しい安全措置は以前のフェイブルの安全措置よりもわずかに高い割合の無害なリクエストにフラグを立てるだろう」と述べた。
ナデラ氏のコメントは、経営陣が資金効率の高いモデルに注目している中で出たもので、そのモデルは最も潤沢な資金を持つ研究所からのものではないが、企業内でソフトウェア開発やその他のタスクを処理できる。
木曜日、中国の新興企業Moonshot AIは、AnthropicやOpenAIの最近のリリースを上回るオープンソースモデルを発表した。
マイクロソフトのトップの発言は、大切なパートナーと顧客に対する批判を表している。
Anthropic の Claude Code ソフトウェア開発ツールは、プログラマーや技術的才能に恵まれない人々の間で人気を集めています。 11月、MicrosoftはAnthropicがMicrosoftのAzureクラウドに300億ドルを投じることに合意したため、同社に50億ドル投資すると発表した。今年、Microsoft は、スタートアップのモデルを活用したビジネス生産性アシスタント Copilot Cowork を発表しました。
投資家らは、マイクロソフトが四半期ごとに数百億ドルをデータセンター拡張に割り当てているため、ソフトウェアを迅速に作成するモデルによる混乱に直面する可能性があると懸念している。株価は年初から17％下落したが、ナスダック総合指数は11％上昇した。
最近ナデラ氏は、企業はコスト効率よくカスタム モデルを開発し、内部データをモデル構築ビジネスの企業など他の組織に流出させることなく活用できるべきだと主張している。同氏は日曜のブログ投稿で、パランティアのCEOアレックス・カープ氏を引き合いに出して、技術組織は「生産手段を自分たちが所有していることを知りたがっている」とCNBCで述べた。
Microsoft は、開発者が Anthropic や OpenAI のモデルを含む 11,000 以上のモデルを採用できる Foundry サービスを提供しています。
「トークン資本を持っている企業が世界で 2 社だけで、他の企業がすべてそれを借りているということはあり得ません」とナデラ氏はエンジニアたちに語った。 「それは経済的に意味がありません。」トークンは、AI モデルのコンピューティング使用量を測定します。
Microsoftは一連の投資を通じてOpenAIと緊密に連携したが、2023年にOpenAIのCEOであるサム・アルトマン氏がナデラ氏にほとんど通知することなく突然解任され復帰した後、両社は漂流して互いに競争するようになった。
OpenAIは4月、自社のモデルをAzureを超えてクラウドインフラストラクチャのリーダーであるAmazon Web Servicesに提供すると発表した。 Microsoftも6月にコーディング用を含む一連の社内モデルを発表した。 OpenAIの営利事業への出資額は10月時点で1350億ドル相当だった。
ナデラ氏はまた、マイクロソフトが消費者向けと企業従業員向けの製品を統合するのは良いことだと述べた。同氏は3月、スナップの元幹部ジェイコブ・アンドレウ氏が両方のカテゴリーのコパイロットを担当すると発表した。
統一は「おそらく最初からやっておくべきだった」と同氏は語った。 Microsoftは4月、仕事中心のCopilotの有料シート数が2000万を超え、これはクラウドベースのOffice顧客ベースの4％に相当すると発表した。
注目: Microsoft は今後数年間で成長を加速するとみている、と Wolfe の Zukin 氏は語る`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/microsoft-ceo-says-anthropic-fable-request-policy-doesnt-make-sense.html",
    publishedAt: "2026-07-16T23:45:16+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "the-financial-winners-and-losers-from-th-28609859",
    title: "The financial winners and losers from the World Cup",
    titleJa: "ワールドカップの経済的勝者と敗者",
    summaryJa: "ワールドカップの経済的勝者と敗者- 公開されました",
    bodyOriginal: `The financial winners and losers from the World Cup
- Published
This World Cup has been bigger than any tournament before it.
More countries taking part and more matches means more eyeballs on the action - as well as more opportunities to make money.
As the planet's footballing stars create historic moments on the pitch, billions of dollars are being generated off it.
But not everyone is raking in the big bucks with financial winners and losers.
Fifa - winner
The amount of money world football's governing body Fifa makes from the World Cup is astronomical. It generated a record $7.6bn (£5.6bn) from Qatar 2022 and is expected to top that in US, Canada and Mexico 2026, especially with the expanded 48-team tournament.
Marion Laboure, senior strategist at Deutsche Bank Research, says Fifa is "without question" the main winner with its revenues over the four-year cycle period approaching $13bn.
Fifa's income comes from the sale of broadcasting, licensing and hospitality rights, sponsorship deals and ticket sales.
"Fifa also moved into the secondary market with its official resale marketplace, taking a 15% fee from both buyer and seller," adds Laboure.
We should expect more of this in tournaments to come, with Fifa considering expanding the tournament yet again to 64 teams, which could include the likes of China and India - and the billions more viewers that come with it.
Fans - losers
While fans may have achieved lifelong dreams, financially speaking, this tournament has been tough.
The vast sums being forked out to pay for the tickets alone and criticism of Fifa's dynamic pricing strategy, which raises prices when demand is high, have been well-documented.
Even US President Donald Trump admitted he "wouldn't pay" when asked about the potential $1,000 ticket price for his country's tournament opener against Paraguay.
Tickets for the final at New Jersey's MetLife Stadium were officially offered at $32,970, while some resale tickets have been listed for more than $2m.
Fifa president Infantino defended ticket costs, arguing they were in line with other US sporting events.
Away from tickets, fans have also been squeezed through flights, food and accommodation.
One example that hit the headlines was the hike in New Jersey Transit train tickets. A 30-minute train journey to the MetLife Stadium rose to $150 for the tournament from the usual $12.90 for a return fare. A backlash led to prices being cut, but they still remained higher than normal.
Broadcasters and sponsors - winners
While broadcasters have had to shell out big bucks to televise the tournament, the viewing figures - and sponsors wanting their brands on show - mean they are also likely to make a killing in selling advertising slots.
Fifa brought in hydration breaks for this World Cup - a move Infantino said was "purely a sporting matter" with no additional revenue for the governing body.
However, the 90 seconds for players to get fluids on board has provided a new commercial opportunity for broadcasters and sponsors wanting to show off their brand, especially in the US, where American sports fans have been long used to games effectively being played around the ad breaks.
Fox Sports, who reportedly paid $485m for the US broadcast rights, introduced the hydration intervals as "sponsored by" a brand.
According to experts, an average 30-second World Cup advertising slot on Fox costs between $200,000 and $300,000. It reached as high as $750,000 during US matches the final stages.
It means hydration break ads could net $250m in the US alone, prompting speculation that they will be here to stay.
"The hydration breaks are pure advertising inventory. I'd be extremely surprised if they disappear. The expanded format will stay because scale is now Fifa's business model," says Laboure of Deutsche Bank Research.
Fans in the UK watching games on the BBC or ITV have been shielded from hydration break adverts due to the former not using any advertising and the latter being restricted by regulator rules on the amount of commercials used in a 60-minute period.
The official sponsors of the World Cup pay eye-watering sums to associate brands with the competition, but no doubt end up benefiting financially, with the likes of Adidas and Coca-Cola plastered everywhere.
The German sportswear brand has been locked in a battle with its arch-rival Nike, spending some £50m on their "backyard legends" ad featuring Lamine Yamal, Jude Bellingham and Lionel Messi.
However, some unofficial brands have benefited from Fifa trying to make sure fans see less of them, such as the Levi's logo outside the Levi's stadium in San Francisco being covered up.
David Beckham - winner
Adidas's main ad also features an AI version of Sir David Beckham - who, to be honest, might not have had time to attend filming in person.
The UK's first billionaire sportsman has been in so many adverts from Home Depot to Bank of America, you could be forgiven for forgetting what brand he is actually representing.
Despite hanging up his boots more than a decade ago, Beckham continues to be the face of US soccer, with the American club he co-owns, Inter Miami, estimated to be Major League Soccer's most valuable franchise at $1.45bn.
He may not have managed to win the World Cup on the pitch, but he's arguably won the commercial game off it.
Host cities - losers
The 16 host cities across the US, Canada and Mexico have been welcoming an influx of fans and tourists boosting hospitality, hotels and local businesses.
But while the Scots drank Boston dry and have won the heart of the city and its people, experts say the long-term economic benefits are minimal.
Fifa estimated some $41bn would be added to the global economy, of which $17bn would boost the US economy alone, with 185,000 jobs created, mostly in hospitality and accommodation.
But Alexander Budzier, a fellow in management practice at Oxford University and chief executive of project management company Oxford Global Projects, says the long-term economic benefits of hosting such a big sporting event just do not materialise.
Host cities actually typically see a big drop in visitors, he says, as many seek to avoid the tournament chaos.
And while there may be a spike in hiring, he argues it is typically only for lower-paid jobs in hospitality. "It creates jobs, but it does not create wealth," he says.
Official figures show that hiring in US pubs, bars and restaurants ramped up ahead of the tournament in May, but the boom was short-lived.
The only "worthwhile" economic benefit, Budzier argues, is the regeneration projects that can be done, such as the redevelopment and housing built in Stratford in London following the 2012 Olympic Games.
But due to much of this World Cup using existing stadia, hotels, training complexes and travel infrastructure, "there won't be any economic benefits from development".
Hotels - losers
The expected demand for hotel rooms did not materialise, with industry bodies reporting lower bookings in host cities this year than last.
The British Columbia Hotel Association says that while final booking figures are yet to be confirmed, June and July were "pacing well behind previous years", despite Vancouver hosting seven of the games in Canada.
It says tournaments "do not create 40 straight days of sold-out hotels", but rather lead to high-demand around specific dates.
For American hoteliers, the pre-tournament buzz did also not turn deliver.
The American Hotel and Lodging Association (AHLA) accused Fifa of block-booking too many rooms for its own use and creating false demand. Fifa has said it does not recognise the accusation.
Laboure of Deutsche Bank Research says the same thing happened in France in 1998 when demand did not meet expectations.
"By April, 80% of US hotel operators said bookings were tracking below their initial forecasts - two-thirds of New York hoteliers reported softer-than-expected bookings, and in Seattle nearly 80% did, with many calling the tournament a 'non-event'," she adds.
Betting companies - winners
The 2026 World Cup is on track to be the biggest gambling event of all time, with an estimated $50bn placed in bets - around $500m wagered per match, according to financial services firm Macquarie, which has interests in the gambling industry.
It says this is primarily down to the expansion in teams, meaning there will be more than 100 matches played, up from 64 in 2022.
Flutter Entertainment, which owns Paddy Power, Betfair and Sky Bet, forecast the amount placed in bets would be double that of the previous tournament because of growth in the US and also Brazil.
Chad Beynon, an analyst at Macquarie, said in-play betting had taken over from the more traditional pre-match punt.
"Now it's all about reacting to what you're seeing on the field, adjusting your views. Whereas before it was kind of sit, watch, wait - you had to place your bet before the match," he says.
Sports betting in the US is still a relatively new industry. Until 2018, betting on sports was only legal in Nevada, the home of Las Vegas, but a Supreme Court ruling paved the way for many states to legalise it.
However, there are still some states where it remains illegal, including California and Texas. In those areas there has been big engagement in prediction markets - a fast-growing, billion-dollar industry popular with young men - which are not classified as gambling, meaning they can be used to place bets on sport regardless of which state someone is in.`,
    bodyJa: `ワールドカップの経済的勝者と敗者
- 公開されました
このワールドカップは、これまでのどの大会よりも盛大でした。
より多くの国が参加し、より多くの試合が行われるということは、より多くの注目が集まり、お金を稼ぐ機会も増えることを意味します。
地球上のサッカー界のスター選手たちがピッチ上で歴史的瞬間を生み出すにつれ、ピッチからは数十億ドルが生み出されています。
しかし、誰もが経済的な勝者と敗者の関係で大金をかき集めているわけではありません。
FIFA - 勝者
世界サッカーの統括団体であるFIFAがワールドカップで稼ぐ金額は天文学的だ。 2022年のカタール大会では記録的な76億ドル（56億ポンド）を生み出し、特に48チーム参加のトーナメントが拡大されたことにより、2026年の米国、カナダ、メキシコではそれを上回ると予想されている。
ドイツ銀行リサーチのシニアストラテジスト、マリオン・ラブール氏は、FIFAが4年間のサイクル期間での収益が130億ドルに近づき、「疑いなく」主な勝者であると述べた。
FIFA の収入は、放送、ライセンス、接待権の販売、スポンサー契約、チケット販売から得ています。
「FIFAはまた、買い手と売り手の両方から15％の手数料を取って、公式の再販市場で流通市場に参入しました」とラブール氏は付け加えた。
FIFAはトーナメントを再び64チームに拡大することを検討しており、その中には中国やインドなども含まれる可能性があり、それに伴う数十億人以上の視聴者も含まれる可能性がある。
ファン - 敗者
ファンは生涯の夢を達成したかもしれないが、経済的に言えば、このトーナメントは厳しいものだった。
チケット代だけで巨額のお金が徴収されていることや、需要が高いときに価格を上げるFIFAのダイナミックプライシング戦略への批判は十分に文書化されている。
ドナルド・トランプ米大統領でさえ、パラグアイとの自国のトーナメント開幕戦のチケット価格が1000ドルになる可能性について尋ねられたとき、「払いたくない」と認めた。
ニュージャージーのメットライフ・スタジアムで行われる決勝戦のチケットは公式には3万2970ドルで販売されているが、一部の転売チケットは200万ドル以上で取引されている。
FIFAのインファンティーノ会長は、チケット代は米国の他のスポーツイベントと同額だと主張し、擁護した。
チケット以外にも、航空券、食事、宿泊施設などでもファンは圧迫されている。
見出しを飾った一例は、ニュージャージー州交通機関の鉄道チケットの値上げでした。メットライフスタジアムまでの30分の電車移動は、往復運賃が通常の12.90ドルから、トーナメントの場合は150ドルに値上がりした。反発を受けて価格は引き下げられたが、それでも通常より高い水準にとどまった。
放送局とスポンサー - 勝者
放送局はトーナメントをテレビ放映するために大金をつぎ込まなければならなかったが、視聴者数と自社ブランドの放映を望んでいるスポンサーは、広告枠の販売でも儲かる可能性が高いことを意味している。
FIFAは今回のワールドカップに向けて水分補給休憩を導入したが、インファンティーノ氏はこれは「純粋にスポーツの問題」であり、運営団体に追加の収入はないと述べた。
しかし、選手が水分補給するまでの90秒は、特に米国において、自社のブランドをアピールしたい放送局やスポンサーにとって新たな商業機会となった。米国のスポーツファンは広告休憩を挟んで効果的に試合が行われることに長い間慣れていたからだ。
米国の放映権料として4億8500万ドルを支払ったと伝えられるフォックス・スポーツは、水分補給の間隔をブランドの「スポンサー」として紹介した。
専門家によると、FOXの平均30秒ワールドカップ広告枠の費用は20万ドルから30万ドルだという。米国戦終盤ではその額は75万ドルに達した。
これは、水分補給休憩の広告が米国だけで 2 億 5,000 万ドルの利益をもたらす可能性があることを意味しており、この広告は今後も存続するとの憶測を呼んでいます。
「水分補給休憩は純粋な広告在庫だ。もしそれがなくなったら、私は非常に驚くだろう。今や規模がFIFAのビジネスモデルになっているので、拡張フォーマットは残るだろう」とドイツ銀行リサーチのラブール氏は言う。
BBCまたはITVで試合を観戦する英国のファンは、前者が広告を一切使用していないのに対し、後者は60分間に使用されるコマーシャルの量に関する規制当局の規則によって制限されているため、水分補給休憩の広告から保護されている。
ワールドカップの公式スポンサーは、ブランドを大会と結び付けるために目がくらむような金額を払っているが、至る所にアディダスやコカ・コーラのようなブランドが張り巡らされており、最終的には経済的に利益を得ていることは間違いない。
ドイツのスポーツウェア ブランドは、最大のライバルであるナイキとの戦いに閉じ込められており、ラミネ ヤマル、ジュード ベリンガム、リオネル メッシをフィーチャーした「バックヤード レジェンド」広告に約 5,000 万ポンドを費やしています。
しかし、一部の非公式ブランドは、サンフランシスコのリーバイス・スタジアムの外にあるリーバイスのロゴが隠蔽されるなど、FIFAがファンの目に触れる機会を減らそうとすることで恩恵を受けている。
デビッド・ベッカム - 勝者
アディダスのメイン広告には、デイビッド・ベッカム卿のAI版も登場しているが、正直に言うと、撮影に直接参加する時間がなかったかもしれない。
英国初の億万長者のスポーツマンは、ホーム・デポからバンク・オブ・アメリカまで数多くの広告に出演しているため、実際にどのブランドを代表しているのか忘れても仕方がありません。
10年以上前に引退したにもかかわらず、ベッカムは米国サッカーの顔であり続けており、彼が共同オーナーを務めるアメリカのクラブ、インテル・マイアミはメジャーリーグサッカーで最も価値のあるフランチャイズで14億5000万ドルと推定されている。
彼はピッチ上でワールドカップに勝つことはできなかったかもしれないが、ピッチ外の商業ゲームでは間違いなく勝利を収めた。
開催都市 - 敗者
米国、カナダ、メキシコの 16 の開催都市はファンや観光客の流入を歓迎し、ホスピタリティ、ホテル、地元企業を後押ししています。
しかし、スコットランド人はボストンを辛口で飲み、都市と人々の中心を獲得したが、専門家らは長期的な経済効果は最小限だと指摘する。
FIFAは、世界経済に約410億ドルが追加され、そのうち170億ドルが米国経済だけを押し上げ、主に接客業や宿泊業で18万5000人の雇用が創出されると見積もっている。
しかし、オックスフォード大学の経営実務研究員であり、プロジェクト管理会社オックスフォード・グローバル・プロジェクツの最高経営責任者であるアレクサンダー・ブジア氏は、このような大規模なスポーツイベントを開催することによる長期的な経済的利益はまったく実現しないと言う。
実際、開催都市の多くは大会の混乱を避けようとするため、実際には来場者数が大幅に減少するのが一般的だ、と同氏は言う。
また、雇用の急増はあるかもしれないが、それは通常、接客業の低賃金の仕事に限られると同氏は主張する。 「それは雇用を生み出しますが、富は生み出しません」と彼は言います。
公式統計によると、米国のパブ、バー、レストランでの雇用は5月のトーナメントに先立って増加したが、そのブームは長くは続かなかった。
唯一の「価値のある」経済的利益は、2012年のオリンピック後にロンドンのストラットフォードに建設される再開発や住宅など、実行可能な再生プロジェクトだ、とブジャー氏は主張する。
しかし、今回のワールドカップの大部分は既存のスタジアム、ホテル、トレーニング複合施設、旅行インフラを使用しているため、「開発による経済的利益はまったくない」。
ホテル - 敗者
ホテル客室に対する予想された需要は実現せず、業界団体は今年の開催都市での予約が昨年よりも減少したと報告している。
ブリティッシュコロンビア州ホテル協会は、最終的な予約数はまだ確認されていないが、カナダで開催される試合のうち7試合がバンクーバーで開催されているにもかかわらず、6月と7月は「例年より大幅に遅れたペース」だったと述べた。
同誌は、トーナメントによって「40日連続でホテルが満室になることはない」が、むしろ特定の日付付近での高い需要につながるとしている。
アメリカのホテル経営者にとっても、大会前の話題は的中しなかった。
アメリカホテル宿泊協会（AHLA）は、FIFAが自社使用のためにあまりにも多くの部屋をブロックブッキングし、誤った需要を生み出していると非難した。 FIFAは告発を認めないとしている。
ドイツ銀行リサーチのラブール氏は、需要が予想に達しなかった1998年にフランスでも同じことが起こったと述べている。
「4月までに、米国のホテル経営者の80％は、予約が当初の予測を下回っていると述べた。ニューヨークのホテル経営者の3分の2は、予約が予想よりも少なかったと報告し、シアトルでは80％近くがそうで、多くの人がトーナメントを『イベントではない』と呼んだ」と彼女は付け加えた。
賭博会社 - 勝者
ギャンブル業界に利害関係を持つ金融サービス会社マッコーリーによると、2026年ワールドカップは史上最大のギャンブルイベントになる見込みで、推定500億ドルが賭けられ、1試合あたり約5億ドルが賭けられるという。
これは主にチームの拡大によるもので、2022年の64試合から100試合以上が開催されることになるとしている。
パディ・パワー、ベットフェア、スカイ・ベットを所有するフラッター・エンターテインメントは、米国とブラジルの成長により、賭け金が前回大会の２倍になると予想した。
マッコーリーのアナリスト、チャド・ベイノン氏は、インプレー賭博が伝統的な試合前のパントに取って代わられたと述べた。
「今では、フィールド上で見ているものに反応し、自分の見解を調整することがすべてです。以前は、座って見て、待つという感じでしたが、試合前に賭けをしなければなりませんでした。」と彼は言います。
米国におけるスポーツ賭博はまだ比較的新しい業界です。 2018年までスポーツ賭博はラスベガスのあるネバダ州でのみ合法だったが、最高裁判所の判決により多くの州で合法化への道が開かれた。
しかし、カリフォルニア州やテキサス州など、依然として違法な州がいくつかある。これらの分野では、予測市場（若い男性に人気の急成長している10億ドル規模の産業）への大きな関与があり、ギャンブルとして分類されていないため、誰かがどの州にいるかに関係なく、スポーツに賭けることができます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgrkek8lrzvo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-16T23:16:14+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/99ff/live/e74f4460-8065-11f1-bf5f-a7a6eeea7412.jpg",
    readTime: 10,
  },
  {
    id: "i-wouldn-t-marry-him-until-he-paid-off-h-80c531a0",
    title: "I wouldn't marry him until he paid off his debt, now I'm in charge of our money",
    titleJa: "彼が借金を完済するまでは結婚しない、今は私がお金の管理をしている",
    summaryJa: "彼が借金を完済するまでは結婚しない、今は私がお金の管理をしている- 公開されました",
    bodyOriginal: `I wouldn't marry him until he paid off his debt, now I'm in charge of our money
- Published
When Sarah Reeve got engaged she gave fiance Lee an ultimatum: he had to pay off his debt before she would marry him.
"I was paying my mortgage and bills whereas he was giving his mum some rent," Sarah says of their situations when they met in their early 20s.
"I told him I wouldn't marry him if he had any debts," says the 45-year-old.
So they set a wedding date for two years ahead which gave Lee the time to pay off the £2,000 bank loan - £4,000 in today's money, external - he had taken out to buy a car.
Once Lee's debt was cleared, the couple paid everything into a joint account and Sarah took charge of bills, saving and budgeting.
"He said 'you can sort it all out and take charge with money because I'm rubbish with it,'" she says.
Sarah's experience reflects a wider trend of more than four fifths of women being actively involved in managing daily finances like day-to-day spending and household budgeting, according to St James's Place's Women and Wealth Report.
Sarah earns £24,000 working part-time in insurance and Lee worked in maintenance at the same factory for 27 years, earning about £26,000, before being made redundant four years ago.
He now works for himself in property maintenance and earns about £30,000.
The couple, who have been together for 25 years and have two daughters, aged 19 and 21, have always thought of money as shared.
"It's very much our money rather than mine or yours which is really nice especially as I took four years off work when we had children," says Sarah.
After getting out of debt, Sarah says she and Lee have never overstretched themselves and have made regular overpayments on their mortgage.
"We've also always been savers - well, I've been the saver for us," she adds.
Every month Sarah writes down how much money is in their accounts.
"That really helps as if we've had a bad month, at least you know and can find the reason."
How to manage money as a couple
Family Action, a charity that offers financial support to families, says that when money is tight the first step "is getting a clear picture of what's going on as this helps you understand your current position so you can make the best decisions possible together going forward".
'Always down to me'
But being the financially responsible one has not always been easy and Sarah wishes Lee would take more ownership as "I feel like it's all down to me", she says.
She says Lee is not money-orientated and is happy for her to make the decisions.
"He says, 'I met you and I had nothing, so I don't care if I have nothing,'" she says.
But Sarah says she felt the pressure of planning for their future.
They had "a little pot of money" but "I never knew what to do with it, I didn't have the confidence and I wouldn't even know where to start," she says.
St James's Place's research of 6,000 people found only 44% of women feel confident making changes to investments on their own, compared with 63% of men.
After her widowed mother saw a financial adviser, Sarah decided to seek advice.
"I thought deep down that I didn't have enough money to see a financial adviser. In my mind, I thought you needed half a million to do that."
The adviser talked through their spending, attitude to risk and future costs, including holidays, a new car and home improvements.
Sarah says this made her feel more secure and helped shift their thinking from day-to-day saving to longer-term planning.
Sarah says their daughters have absorbed her attitude towards money.
Her eldest saved while working part-time at Waitrose and has bought her first home. Sarah has spoken to her about overpaying on the mortgage and protecting herself financially now that her boyfriend has moved in.
"We've rubbed off on them," Sarah says. "My daughters will probably end up being more in control of their money."
Looking back, Sarah says the biggest lesson is not to ignore debt or assume money habits will simply sort themselves out.
"You have to think about a goal, what you want and how you're going to get there".
Get in touch
Tell us your experience of combining finances and managing money as a couple.`,
    bodyJa: `彼が借金を完済するまでは結婚しない、今は私がお金の管理をしている
- 公開されました
サラ・リーブが婚約したとき、彼女は婚約者のリーに最後通告をした。結婚する前に借金を返済しなければならないというものだった。
「私は住宅ローンと請求書を支払っていましたが、彼は母親に家賃を渡していました」とサラは、20代前半に出会ったときの状況について語ります。
「借金があるなら結婚しないって言いました」と45歳の彼は言う。
そこで彼らは結婚式の日取りを2年先に設定し、リーさんに車を買うために借りた2000ポンド（現在のお金で4000ポンド）の銀行ローンを返済する時間を与えた。
リーさんの借金が返済されると、夫婦は全額を共同口座に支払い、サラさんが請求書や貯蓄、予算の管理を担当した。
「彼は『私はお金にくだらないから、あなたがすべてを整理してお金の管理をしていいよ』と言いました」と彼女は言う。
セント・ジェームズ・プレイスの女性と富に関するレポートによると、サラさんの経験は、女性の5分の4以上が日々の支出や家計簿などの日々のお金の管理に積極的に関わっているという広範な傾向を反映しているという。
サラさんは保険会社のパートタイムで2万4000ポンドを稼ぎ、リーさんは4年前に解雇されるまで同じ工場で27年間メンテナンスの仕事をして約2万6000ポンドを稼いでいた。
彼は現在、不動産管理の仕事をして、約 30,000 ポンドを稼いでいます。
25年間連れ添っており、19歳と21歳の2人の娘がいるこの夫婦は、お金は常に共有するものだと考えてきた。
「私のお金やあなたのお金ではなく、ほとんど私たちのお金です。特に私は子供ができたときに4年間仕事を休んでいたので、本当にうれしいです」とサラは言います。
サラさんは借金から抜け出した後も、リーさんも無理をしたこともなく、定期的に住宅ローンを過払いしてきたと語る。
「私たちはいつも節約者でもありました。そうですね、私は私たちにとって節約者でした」と彼女は付け加えた。
サラは毎月、口座にいくら入っているかを書き留めます。
「それは、まるで悪い月を過ごしたかのように本当に助かります。少なくともあなたはその理由を知っていて、見つけることができます。」
夫婦でお金を管理する方法
家族に経済的支援を提供する慈善団体ファミリー・アクションは、お金が厳しいときの最初のステップは「何が起こっているのかを明確に把握することだ。これは自分の現在の立場を理解し、今後一緒に最善の決断を下すのに役立つ」と述べている。
「常に私次第です」
しかし、経済的責任を負うことは必ずしも簡単なことではなく、サラさんは「すべては自分にかかっていると感じている」ため、リーさんにもっと主導権を握ってほしいと願っていると言う。
彼女は、リーは金銭志向ではなく、彼女が決断を下すことに満足していると語った。
「彼はこう言います、『私はあなたと出会って、何も持っていなかったので、何も持っていなくても大丈夫』と。
しかしサラさんは、将来の計画を立てるプレッシャーを感じていたという。
彼らは「なけなしのお金」を持っていたが、「それをどうしたらいいのかまったくわからなかったし、自信もなかったし、どこから始めればいいのかさえわからなかった」と彼女は言う。
セント・ジェームス・プレイスが6,000人を対象に行った調査では、自分で投資を変更する自信があると感じている女性は44％のみであるのに対し、男性は63％であることが判明した。
未亡人となった母親が金融アドバイザーに相談した後、サラさんはアドバイスを求めることにしました。
「ファイナンシャルアドバイザーに相談するのに十分なお金がないと心の底では思っていました。心の中では、そのためには50万も必要だと思っていました。」
アドバイザーは、彼らの支出、リスクに対する考え方、休暇、新車、家の改修などの将来の費用について話しました。
サラさんは、これによって安心感が増し、日々の貯蓄から長期的な計画へと考え方を変えることができたと言います。
サラさんは、娘たちが彼女のお金に対する考え方を吸収していると語った。
彼女の長男はウェイトローズでパートタイムで働きながら貯金し、最初の家を購入した。サラは、ボーイフレンドが引っ越してきたので、住宅ローンを払いすぎていることと、経済的に自分を守ることについて話しました。
「私たちは彼らをこすりつけてきました」とサラは言います。 「娘たちはおそらく最終的にはもっと自分のお金を管理できるようになるでしょう。」
振り返ってみると、最大の教訓は借金を無視したり、お金の習慣は自然​​に治ると思い込んではいけないことだ、とサラは言います。
「目標、何を望んでいるのか、そしてそこにどうやって到達するのかを考えなければなりません。」
連絡する
夫婦で家計を組み合わせたり、お金を管理したりした経験を教えてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5yz4wnz6jdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-16T23:14:11+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/254d/live/67655330-7934-11f1-8d20-776ad947bebb.jpg",
    readTime: 5,
  },
  {
    id: "netflix-stock-falls-as-earnings-forecast-b504dcdb",
    title: "Netflix stock falls as earnings forecast disappoints, company says it will give fewer engagement updates",
    titleJa: "収益予想が期待外れでNetflix株下落、同社はエンゲージメントに関する最新情報の提供を減らすと発表",
    summaryJa: "ウォール街が同社の広告とエンゲージメントの指標を注視している中、ネットフリックスは木曜、第2四半期の売上高と利益がアナリストの予想とほぼ一致したと報告した。投資家が同社の収益予想に再び失望したようで、木曜日の時間外取引でネットフリックスの株価は8％以上下落した。",
    bodyOriginal: `Netflix reported second-quarter revenue and earnings that were roughly in line with analyst estimates on Thursday as Wall Street is keeping a close eye on the company's advertising and engagement metrics.
Netflix stock fell more than 8% in after-hours trading Thursday as investors appeared disappointed once again in the company's earnings forecast.
Here's how Netflix performed for the period ended June 30 compared with estimates from analysts polled by LSEG:
- Earnings per share: 80 cents vs. 79 cents estimated
- Revenue: $12.56 billion vs. $12.59 billion estimated
Netflix reported $12.56 billion in revenue, up 13% year over year and just slightly missing analyst expectations. The rise was attributed to membership growth, pricing and increased ad revenue.
Earlier this year, Netflix raised its subscription prices across all its streaming plans. The company said Thursday the results of those price hikes were consistent with prior changes and expectations.
Net income for the second quarter was $3.40 billion, or 80 cents per share, compared with $3.13 billion, or 72 cents a share in the same period last year.
Netflix expects third-quarter revenue to grow 12% and called its 2026 outlook consistent with earlier forecasts. The company said it was narrowing its 2026 forecast revenue range to $51 billion to $51.4 billion for the full fiscal year, from earlier guidance of between $50.7 billion to $51.7 billion.
Engagement focus
Questions about engagement were top of mind for analysts during Thursday's earnings call.
The streaming giant called engagement with its content "healthy," saying live events were a top draw for members, who watched more than 97 billion hours of total content in the first half of this year. The engagement metric has come into focus after reports that viewership for Netflix series drops following the first season.
"I'll start by saying there is not a linear relationship between viewing hours and revenue and profit, because all hours are not created equal," co-CEO Greg Peters said during the call.
Co-CEO Ted Sarandos also said Thursday that there isn't "any material change" in second season viewership of series versus the first season, following an earlier report that said there was a drop-off. "Our season two fall off has actually slightly improved this year relative to last year, so no changes in release strategies," Sarandos said on the call.
Yet, on Thursday, the company said it would cut back on the frequency of its "What We Watched" reports, which provide a picture of engagement. Following the release of Thursday's report – which gives information on viewership for the first half of 2026 – Netflix will shift to publishing the report annually in the first quarter beginning in 2027.
The company said its goal in separating out when "What We Watched" is published from its earnings results is to keep the focus on financial metrics like revenue and operating profit.
In general, Netflix called out live events as some of its top programming this year, with live events accounting for six of the top 10 new member sign-up days over the past five years.
Still, Netflix noted that while live programming accounts for more than 5% of its content spending, it makes up about 1% of viewing hours.
Netflix noted that it only got into live programming in 2023, following years of growth solely on original content and licensed TV series and movies. Since then, the company has been bulking up on sports rights.
Live sports often pull in the biggest advertising dollars — something that has become important to driving revenue growth for Netflix, particularly as streaming subscriber growth has slowed.
On Thursday, the company said it still expects to roughly double its ad revenue year over year to $3 billion.
Netflix added that it is in "advanced stages" of discussions with advertisers in the U.S. as part of its Upfront negotiations, with the expectation that commitments will close in the coming weeks. Live sports, such as the Women's World Cup, more NFL games, MLB events and WWE, have attracted solid demand for the company.
The company introduced its cheaper, ad-supported plan to customers in recent years as a new revenue driver. On Thursday, Peters said it was often thinking about its pricing and plan choices, and how to expand offerings.
One option could be a free tier, which Peters said "could make sense in some markets, but we have to be thoughtful about cannibalization of paid tiers."
"It's probably also worth noting that having an effective scaled ads business in any candidate country for such an offering is clearly an important enabling factor to make those economics work," Peters said. "So that's all to say that free is something that we're going to continue to consider, but we have no near-term plans to launch something."
Such changes have come in response to increased competition across the media landscape. In Thursday's shareholder letter, Netflix noted that the "entertainment industry remains dynamic and competitive."
Late last year, Netflix made a play for Warner Bros. Discovery's film and streaming business before ultimately walking away from the deal. The proposed deal set off a flurry of speculation about if Netflix is now interested in buying other assets.
Netflix said in its earnings report its approach hasn't changed as it will "prioritize reinvestment in the business, both organically and through selective M&A, while maintaining a health balance sheet and ample liquidity." Prior to its bid for WBD's assets, Netflix had long called itself a builder, not a buyer.
On the call, Netflix executives said they wouldn't comment on speculation, but reiterated their past mantra.
"As Ted said, we are primarily builders, not buyers," CFO Spencer Neumann said. "We have a really high bar."`,
    bodyJa: `ウォール街が同社の広告とエンゲージメントの指標を注視している中、ネットフリックスは木曜、第2四半期の売上高と利益がアナリストの予想とほぼ一致したと報告した。
投資家が同社の収益予想に再び失望したようで、木曜日の時間外取引でネットフリックスの株価は8％以上下落した。
LSEGが調査したアナリストの予想と比較した6月30日までの期間のNetflixの業績は次のとおりです。
- 1 株当たり利益: 推定 79 セントに対し 80 セント
- 収益: 125.6億ドル対推定125.9億ドル
Netflixは、売上高が125億6000万ドルと前年比13％増と報告したが、アナリストの予想をわずかに下回った。この増加は、会員数の増加、価格設定、広告収入の増加によるものです。
今年初め、Netflixはすべてのストリーミングプランのサブスクリプション価格を値上げした。同社は木曜日、これらの値上げの結果は以前の変更や予想と一致していると発表した。
第 2 四半期の純利益は 34 億ドル (1 株あたり 80 セント) で、前年同期の純利益は 31 億 3000 万ドル (1 株あたり 72 セント) でした。
Netflixは第3四半期の収益が12％増加すると予想しており、2026年の見通しは以前の予測と一致していると述べた。同社は、2026年の通期売上高予想範囲を従来の見通しの507億ドル～517億ドルから510億ドル～514億ドルに縮小すると発表した。
エンゲージメントの焦点
木曜日の決算会見では、エンゲージメントに関する質問がアナリストの最大の関心事だった。
ストリーミング大手の同社は、自社のコンテンツへのエンゲージメントは「健全」だとし、今年上半期に合計970億時間以上のコンテンツを視聴した会員にとってライブイベントが最大の魅力だと述べた。 Netflixシリーズの視聴者数が最初のシーズン後に減少したとの報告を受けて、エンゲージメント指標が注目されるようになった。
共同最高経営責任者（CEO）のグレッグ・ピーターズ氏は電話会議で、「最初に言っておきたいのは、視聴時間と収益と利益の間には直線的な関係はないということだ。なぜなら、すべての時間が平等に作られるわけではないからだ」と語った。
共同最高経営責任者（CEO）のテッド・サランドス氏も木曜日、シリーズ第2シーズンの視聴者数が第1シーズンと比べて「大きな変化」はないと述べた。 「シーズン2の落ち込みは実際、昨年に比べて今年は若干改善しているので、リリース戦略に変更はない」とサランドス氏は電話会議で語った。
しかし同社は木曜日、エンゲージメントの全体像を提供する「What We Watched」レポートの頻度を減らすと発表した。 2026年上半期の視聴者数に関する情報を提供する木曜日のレポートの発表を受けて、Netflixは2027年から毎年第1四半期にレポートを公開する方針に移行する。
同社は、「What We Watched」の公表時期を業績結果から切り離す目的は、売上高や営業利益などの財務指標に焦点を当て続けるためだと述べた。
概して、Netflix は今年のトップ番組としてライブ イベントを挙げており、過去 5 年間の新規会員登録日数トップ 10 のうち 6 日をライブ イベントが占めています。
それでも、Netflixは、ライブ番組がコンテンツ支出の5％以上を占める一方で、視聴時間に占める割合は約1％であると指摘した。
Netflixは、オリジナルコンテンツとライセンスを受けたテレビシリーズや映画のみで長年成長を続けてきたが、2023年になって初めてライブ番組に参入したと述べた。それ以来、同社はスポーツの権利を強化してきた。
スポーツの生中継は、多くの場合、最大の広告費を集めますが、特にストリーミング加入者数の伸びが鈍化している中で、これは Netflix の収益成長を促進する上で重要になっています。
同社は木曜日、広告収入が前年比で約2倍の30億ドルになると依然として見込んでいると述べた。
Netflixは、アップフロント交渉の一環として米国の広告主との協議が「進んだ段階」にあり、今後数週間以内に契約が完了する見込みだと付け加えた。女子ワールドカップ、その他の NFL ゲーム、MLB イベント、WWE などのライブ スポーツは、同社に対する堅実な需要を引き付けています。
同社は近年、新たな収益源として、より安価な広告付きプランを顧客に導入した。ピーターズ氏は木曜日、価格設定やプランの選択、提供内容の拡大方法について頻繁に検討していると述べた。
選択肢の1つは無料利用枠であり、ピーターズ氏は「一部の市場では合理的かもしれないが、有料利用枠の共食いについては考慮する必要がある」と述べた。
「このようなサービスの候補国で効果的な大規模な広告ビジネスを展開することが、経済性を機能させるための重要な要素であることは明らかだということもおそらく注目に値するだろう」とピーターズ氏は語った。 「つまり、無料化については引き続き検討していくつもりですが、何かを開始するという短期的な計画はありません。」
このような変化は、メディア環境全体での競争の激化に応じて生じました。木曜日の株主への書簡の中で、ネットフリックスは「エンターテインメント業界は依然としてダイナミックで競争力がある」と指摘した。
昨年末、ネットフリックスはワーナー・ブラザース・ディスカバリーの映画・ストリーミング事業を買収したが、最終的には契約を破棄した。この提案された取引は、Netflixが他の資産の買収に興味を持っているかどうかについての憶測を引き起こした。
Netflixは決算報告で、自社のアプローチは変わっておらず、「健全なバランスシートと十分な流動性を維持しながら、有機的かつ選択的なM&Aを通じて事業への再投資を優先する」と述べた。 WBDの資産を入札する前、ネットフリックスは長らく自らを買い手ではなく構築者と呼んでいた。
電話会議で、ネットフリックス幹部らは憶測にはコメントしないと述べたが、これまでの信念を繰り返した。
「テッドが言ったように、我々は主に買い手ではなく建設者だ」と最高財務責任者（CFO）のスペンサー・ニューマン氏は語った。 「私たちのハードルは非常に高いです。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/netflix-nflx-earnings-q2-2026.html",
    publishedAt: "2026-07-16T21:53:56+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 7,
  },
  {
    id: "oil-pipelines-around-the-strait-of-hormu-c82e55df",
    title: "Oil pipelines around the Strait of Hormuz won't end the threat Iran poses to Middle East crude exports",
    titleJa: "ホルムズ海峡周囲の石油パイプラインはイランが中東の原油輸出にもたらす脅威を終わらせない",
    summaryJa: "イランがほぼ毎日タンカーを攻撃し、湾岸諸国の海上原油輸出を妨害する中、中東の産油国はホルムズ海峡への依存を減らすため、新たなパイプラインの建設を計画している。しかしアナリストらは、新たなパイプラインによってこの地域のエネルギー輸出に対する脅威がなくなるわけではないと述べた。このインフラは、ホルムズの船舶を標的とした低コストの非対称攻撃に対して同様に脆弱であると彼らは述べた。",
    bodyOriginal: `Middle East oil producers plan to build new pipelines to reduce their dependence on the Strait of Hormuz, as Iran disrupts the Gulf states' seaborne crude exports with near daily attacks on tankers.
But new pipelines will not end the threat to the region's energy exports, analysts said. This infrastructure is just as vulnerable to the low-cost, asymmetric attacks that have targeted ships in Hormuz, they said.
The U.S. is supporting Iraq's effort to rebuild a crude oil pipeline that runs from its northern city of Kirkuk through Syria to the Mediterranean Sea, a State Department official told CNBC Thursday. U.S. companies are expected to play a role in the pipeline's construction, the official said.
The disruption in Hormuz has hit Iraq, OPEC's second largest producer, particularly hard because it exports mostly through the southern port city of Basra with limited alternatives. Its production was more than 50% in June to 1.9 million barrels per day compared to the 4.2 million bpd it pumped in February before the U.S. and Israel launched the war against Iran.
The United Arab Emirates, meanwhile, plans to double its export capacity outside Hormuz with the completion of a second pipeline to the Port of Fujairah on the Gulf of Oman. Saudi Arabia is considering expanding its pipeline to the Red Sea by 2 million bpd, people close to the matter told Reuters last week.
These projects are just three of the seven pipelines in the Middle East that are either under construction or in the planning phase, Goldman Sachs analysts said in a note Sunday. Pipeline capacity in region could grow to more than 14 million bpd by the end of 2028, the analysts said. This is more than 60% of the seven Gulf states' pre-war export volume of 23 million bpd, they said.
But the pipelines are more of a geopolitical hedge against disruptions in Hormuz than a replacement for the strait, said Jennifer Li, a geopolitical analyst at the energy consulting firm Rystad.
The UAE's existing West-East pipeline to Gulf of Oman and Saudi's East-West pipeline to the Red Sea have acted as crucial relief valves for the oil market during the Iran war. Abu Dhabi and Riyadh have ramped exports through those pipelines, diverting millions of barrels per day around Hormuz.
The Gulf states need to diversify their export routes as much as possible but pipelines are vulnerable, Li said. Iran struck a pumping station on Saudi's pipeline to the Red Sea in April, which slashed throughput by 700,000 bpd.
"The problem isn't the waterway," Bob McNally, founder of Rapidan Energy, told CNBC's "Power Lunch" on Monday. "It's that Iran can use weapons to attack loading facilities, pumping stations, the end stations, these terminals, and the storage units of these pipelines."
Iran and its Houthi allies in Yemen are now threatening to disrupt oil exports through the Red Sea. A senior Houthi political official, Mohammed al-Farah, said earlier this week that the militant group is prepared to shut down the Bab el-Mandeb Strait in coordination with Iran, according to state media.
Tehran has asked the Houthis to close the strait if the U.S. bombs Iran's power infrastructure, sources told Reuters Thursday. The Bab el-Mandeb connects the Red Sea to the Gulf of Aden and world markets.
Shutting the strait down would block in the millions of barrels per day of oil that the Saudis have diverted through their pipeline to the Red Sea export terminal of Yanbu.
"The importance of of Yanbu to both Saudi Arabia and to the the global oil market can't be underestimated," said Michelle Wiese Bockmann, senior maritime intelligence analyst at Windward.`,
    bodyJa: `イランがほぼ毎日タンカーを攻撃し、湾岸諸国の海上原油輸出を妨害する中、中東の産油国はホルムズ海峡への依存を減らすため、新たなパイプラインの建設を計画している。
しかしアナリストらは、新たなパイプラインによってこの地域のエネルギー輸出に対する脅威がなくなるわけではないと述べた。このインフラは、ホルムズの船舶を標的とした低コストの非対称攻撃に対して同様に脆弱であると彼らは述べた。
米国はイラク北部の都市キルクークからシリアを通って地中海に至る原油パイプラインを再建するイラクの取り組みを支援していると国務省当局者が木曜日CNBCに語った。同当局者によると、パイプラインの建設には米国企業が役割を果たすことが期待されている。
ホルムズでの混乱は、OPEC第2位の生産国であるイラクに特に大きな打撃を与えている。イラクは主に南部の港湾都市バスラ経由で輸出しており、代替手段は限られているからだ。 6月の生産量は日量190万バレルと、米国とイスラエルが対イラン戦争を開始する前の2月の日量420万バレルに比べて50％以上増加した。
一方、アラブ首長国連邦は、オマーン湾のフジャイラ港への2本目のパイプラインの完成により、ホルムズ国外の輸出能力を倍増する計画を立てている。関係者が先週ロイターに語ったところによると、サウジアラビアは紅海へのパイプラインを日量２００万バレル拡張することを検討している。
ゴールドマン・サックスのアナリストらは日曜日のメモで、これらのプロジェクトは中東の7本のパイプラインのうち建設中または計画段階にある3本にすぎないと述べた。アナリストらは、この地域のパイプライン能力は2028年末までに日量1400万バレル以上に増加する可能性があると述べた。これは湾岸７カ国の戦前の輸出量日量２３００万バレルの６０％以上に相当するという。
しかし、エネルギーコンサルティング会社ライスタッドの地政学アナリスト、ジェニファー・リー氏は、パイプラインは海峡の代わりというよりも、ホルムズでの混乱に対する地政学的なヘッジであると述べた。
UAEのオマーン湾への既存の西-東パイプラインと紅海へのサウジの東西パイプラインは、イラン戦争中に石油市場の重要な救援弁として機能した。アブダビとリヤドはこれらのパイプラインを通じた輸出を増やし、一日あたり数百万バレルをホルムズ周辺に迂回させている。
湾岸諸国は可能な限り輸出ルートを多様化する必要があるが、パイプラインは脆弱であるとリー氏は述べた。イランは4月にサウジアラビアの紅海へのパイプラインのポンプ所を攻撃し、処理量が日量70万バレル減少した。
「問題は水路ではない」とラピダン・エナジーの創設者ボブ・マクナリー氏は月曜日、CNBCの「パワーランチ」で語った。 「それは、イランが兵器を使用して荷積み施設、ポンプ場、終着駅、これらのターミナル、そしてこれらのパイプラインの保管ユニットを攻撃できるということだ。」
イランとイエメンのフーシ派同盟国は現在、紅海を通じた石油輸出を妨害すると脅している。国営メディアによると、フーシ派の政治高官モハメド・アル・ファラー氏は今週初め、武装勢力がイランと連携してバブ・エル・マンデブ海峡を封鎖する用意があると述べた。
関係筋が木曜日、ロイターに明らかにしたところによると、イラン政府は、米国がイランの電力インフラを爆撃した場合、海峡を封鎖するようフーシ派に要請した。バブ・エル・マンデブは紅海とアデン湾および世界市場を結んでいます。
海峡を封鎖すれば、サウジアラビアがパイプラインを通じてヤンブーの紅海輸出ターミナルに迂回させた日量数百万バレルの石油が遮断されることになる。
「サウジアラビアと世界の石油市場の両方にとってヤンブーの重要性を過小評価することはできない」とウィンドワード社の上級海事情報アナリスト、ミシェル・ウィーゼ・ボックマン氏は語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/oil-pipeline-iran-strait-hormuz-red-sea-iraq-uae-saudi.html",
    publishedAt: "2026-07-16T19:13:07+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "these-cities-are-blanketed-with-wildfire-a051fc94",
    title: "These cities are blanketed with wildfire smoke. Here’s what to know about bad air quality.",
    titleJa: "これらの都市は山火事の煙で覆われています。空気の質が悪い場合に知っておくべきことは次のとおりです。",
    summaryJa: "「心臓血管への脅威は増大している」：木曜日、シカゴ、デトロイト、ミネアポリス、ニューヨーク市は世界で最も汚染された都市の一部とみなされている。",
    bodyOriginal: `“It is a growing cardiovascular threat”: Chicago, Detroit, Minneapolis and New York City are considered some of the world’s most polluted cities Thursday.`,
    bodyJa: `「心臓血管への脅威は増大している」：木曜日、シカゴ、デトロイト、ミネアポリス、ニューヨーク市は世界で最も汚染された都市の一部とみなされている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/these-cities-are-blanketed-with-wildfire-smoke-heres-what-to-know-about-bad-air-quality-cd3a8fa7?mod=mw_rss_topstories",
    publishedAt: "2026-07-16T19:10:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-64333084",
    readTime: 2,
  },
  {
    id: "alphabet-shares-fall-on-report-its-most-9492771d",
    title: "Alphabet shares fall on report its most powerful AI model Gemini 3.5 Pro is delayed",
    titleJa: "最も強力なAIモデルGemini 3.5 Proの発売が遅れるとの報道でアルファベット株が下落",
    summaryJa: "同社が主力の人工知能モデルの発売を延期したとの報道を受け、木曜日のアルファベット株は４％下落した。ブルームバーグが関係筋の話として伝えたところによると、検索大手のジェミニ3.5プロAIモデルは、業績向上に向けた同社の取り組みにより予定より数カ月遅れているという。特にこのモデルのコーディング能力は社内の期待を下回っており、OpenAIやMetaなどのライバル企業がソフトウェアコードの生成においてGoogleの現行製品を上回る新しいAIモデルを最近デビューさせている時期に登場したと報告書は述べている。",
    bodyOriginal: `Alphabet shares sank 4% on Thursday following a report that the company has delayed releasing its flagship artificial intelligence model.
The search giant's Gemini 3.5 Pro AI model is months behind schedule due to the company's efforts to improve its performance, according to Bloomberg, citing sources familiar with the matter. The model's coding capabilities, in particular, were short of internal expectations and come at a time when rivals like OpenAI and Meta have recently debuted new AI models that outpace Google's current offerings in generating software code, the report said.
The company previously announced the Gemini 3.5 Pro AI model in May as part of the company's annual Google I/O developer conference, saying at the time that it was being used internally, but wouldn't be ready for a broader rollout until the following month.
An Alphabet spokesperson told CNBC in an emailed statement that the company is "shipping quickly across a wide range of models while keeping them highly cost-effective for customers."
"We're currently testing 3.5 Pro, an upgraded Flash model, and other models with partners, and we're productively engaged with the U.S. government," the spokesperson said.
Code-generation has become one of the biggest use cases for AI model providers like Anthropic and OpenAI and Chinese AI labs like Z.ai that offer so-called open-weight variants that developers can access for free via the open-source ecosystem.
Meta debuted last week its Muse Spark 1.1 AI model, which the company's AI chief Alexandr Wang described as the social media giant's "strongest model for agentic and coding work yet."
OpenAI last week released its GPT-5.6 Sol AI model, which CEO Sam Altman said is 54% more token efficient on agentic coding tasks, underscoring how AI labs are pitching their respective AI coding models as being cost-effective relative to their performance.`,
    bodyJa: `同社が主力の人工知能モデルの発売を延期したとの報道を受け、木曜日のアルファベット株は４％下落した。
ブルームバーグが関係筋の話として伝えたところによると、検索大手のジェミニ3.5プロAIモデルは、業績向上に向けた同社の取り組みにより予定より数カ月遅れているという。特にこのモデルのコーディング能力は社内の期待を下回っており、OpenAIやMetaなどのライバル企業がソフトウェアコードの生成においてGoogleの現行製品を上回る新しいAIモデルを最近デビューさせている時期に登場したと報告書は述べている。
同社は以前、年次Google I/O開発者カンファレンスの一環として5月にGemini 3.5 Pro AIモデルを発表しており、当時は社内で使用されているが、広範な展開の準備が整うのは翌月になると述べていた。
アルファベットの広報担当者はＣＮＢＣに対し、電子メールでの声明で、同社は「顧客にとって高い費用対効果を維持しながら、幅広いモデルを迅速に出荷している」と述べた。
「我々は現在、パートナーと協力して3.5 Pro、アップグレードされたFlashモデル、その他のモデルをテストしており、米国政府と生産的に取り組んでいる」と広報担当者は述べた。
コード生成は、Anthropic や OpenAI などの AI モデル プロバイダーや、開発者がオープンソース エコシステムを介して無料でアクセスできる、いわゆるオープンウェイト バリアントを提供する Z.ai などの中国の AI ラボにとって、最大のユースケースの 1 つとなっています。
Meta は先週、Muse Spark 1.1 AI モデルをデビューさせました。同社の AI 責任者 Alexandr Wang 氏は、これをソーシャル メディア巨人の「エージェントおよびコーディング作業にとってこれまでで最も強力なモデル」と表現しました。
OpenAIは先週、GPT-5.6 Sol AIモデルをリリースしたが、CEOのサム・アルトマン氏は、このモデルはエージェントコーディングタスクでのトークン効率が54%向上していると述べ、AIラボがそれぞれのAIコーディングモデルをパフォーマンスに比べて費用対効果が高いと売り込んでいることを強調した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/alphabet-stock-gemini-3-5-pro-ai.html",
    publishedAt: "2026-07-16T19:07:42+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "white-house-teleprompter-operator-accuse-e3b8d931",
    title: "White House teleprompter operator accused of making $100k off Trump speech bets",
    titleJa: "ホワイトハウスのプロンプターオペレーター、トランプ演説の賭けで10万ドル稼いだ疑い",
    summaryJa: "ホワイトハウスのプロンプターオペレーター、トランプ演説の賭けで10万ドル稼いだ疑い- 公開されました",
    bodyOriginal: `White House teleprompter operator accused of making $100k off Trump speech bets
- Published
A White House teleprompter operator is being investigated over allegedly using inside information to place bets and make nearly $100,000 on US President Donald Trump's speeches.
Gabriel Perez, who had worked at the White House since 2016, is accused of placing bets on words the president would use during major public addresses, including the State of the Union speech.
The trades were made on Kalshi, a prediction markets platform where users can bet on real-world events. The firm confirmed it reported the activity to the Commodity Futures Trading Commission (CFTC), which regulates the platform.
Kalshi froze Perez's account before any profits could be withdrawn, according to reports.
The platform told the BBC its analysts noticed unusual betting on "mention markets" - contracts where users predict whether a speaker will use common terms, such as specific countries, economic words, or campaign slogans, in March.
"The words of political leaders like Presidents and Fed chairs cause billions of dollars of movement in FX markets, oil futures, [and] the stock market," Kalshi said.
Using account data, the company found the user was a federal employee operating White House teleprompters.
The exchange froze more than $90,000 before it could be withdrawn.
Robert DeNault, Kalshi's head of enforcement, said the firm flagged the trades and had handed evidence to regulators.
White House press secretary Karoline Leavitt said President Trump was aware of the teleprompter operator and that staffer was now on unpaid leave, before adding Perez would no longer work at the White House.
The story, first reported by ABC News, has been confirmed by the BBC's US partner, CBS News.
Sources said Perez has been "fully cooperative" with the CFTC.
ABC said federal prosecutors in Manhattan declined to open a criminal case.
When contacted by the BBC to confirm it was investigating, the CFTC said it could not "confirm or deny" any probe.`,
    bodyJa: `ホワイトハウスのプロンプターオペレーター、トランプ演説の賭けで10万ドル稼いだ疑い
- 公開されました
ホワイトハウスのテレプロンプターオペレーターが、内部情報を利用してドナルド・トランプ米大統領の演説に賭けて10万ドル近くを稼いだ疑いで捜査を受けている。
2016年からホワイトハウスで働いていたガブリエル・ペレス氏は、一般教書演説を含む主要な演説で大統領が使用する言葉に賭けた疑いで告発されている。
取引は、ユーザーが現実世界の出来事に賭けることができる予測市場プラットフォームである Kalshi で行われました。同社は、プラットフォームを規制する商品先物取引委員会（CFTC）にこの行為を報告したことを認めた。
報道によると、カルシ氏は利益が引き出される前にペレス氏の口座を凍結したという。
同プラットフォームはBBCに対し、アナリストが「メンションマーケット」（講演者が3月に特定の国、経済用語、キャンペーンスローガンなどの一般的な用語を使用するかどうかをユーザーが予測する契約）における異常な賭けに気づいたと語った。
「大統領やFRB議長などの政治指導者の発言は、外国為替市場、原油先物、そして株式市場に数十億ドルの動きを引き起こす」とカルシ氏は語った。
同社はアカウントデータを使用して、ユーザーがホワイトハウスのテレプロンプターを操作する連邦職員であることを突き止めた。
取引所は9万ドル以上が引き出し前に凍結された。
カルシの執行責任者ロバート・デノール氏は、同社が取引に警告を発し、証拠を規制当局に提出したと述べた。
ホワイトハウス報道官のキャロライン・レビット氏は、トランプ大統領はプロンプターオペレーターの存在を認識しており、そのスタッフは現在無給休暇中であると述べた上で、ペレス氏は今後ホワイトハウスで勤務しないと付け加えた。
この記事はABCニュースが最初に報じたもので、BBCの米国パートナーであるCBSニュースが認めた。
関係者によると、ペレス氏はCFTCに「全面的に協力」しているという。
ABCは、マンハッタンの連邦検察当局が刑事事件の立件を拒否したと伝えた。
BBCが調査中であることを確認するためにBBCから連絡を受けたとき、CFTCはいかなる調査も「肯定も否定」もできないと述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjrvdqyr5d5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-16T18:52:35+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/499c/live/7e558130-8147-11f1-badc-afcab3cff8b6.jpg",
    readTime: 2,
  },
  {
    id: "dallas-fed-president-logan-calls-for-mod-7fb71465",
    title: "Dallas Fed President Logan calls for 'modestly' higher interest rates",
    titleJa: "ダラス連銀のローガン総裁、「適度な」金利引き上げを呼びかけ",
    summaryJa: "ダラス地区連銀のローリー・ローガン総裁は木曜日、今週の良いインフレニュースだけでは十分ではないと主張し、中央銀行が過去5年間負け続けている戦いに勝つために「適度な」金利引き上げを求めた。金利設定を決定する連邦公開市場委員会の今年の投票権を持つメンバーであるローガン氏は、米国の家計にとってインフレは依然大きな問題であり、政策当局の行動が求められていると主張した。他のFRB当局者らはインフレ指標が改善しない場合には利上げを支持すると表明しているが、ローガン氏は利上げを最も具体的に求めている。",
    bodyOriginal: `Dallas Federal Reserve President Lorie Logan, asserting that this week's good inflation news wasn't good enough, called Thursday for "modestly" higher interest rates to win a battle the central bank has been losing for the past five years.
A voting member this year on the rate-setting Federal Open Market Committee, Logan insisted that inflation is still a major problem for U.S. households that demands action from policymakers. While other Fed officials have expressed a preference for higher rates if inflation metrics don't improve, Logan's is the most specific call for a hike.
"I currently believe modestly higher interest rates would better balance the outlook and risks for the FOMC's dual mandate goals," Logan said in prepared remarks for a speech in Houston. "Every month of above-target inflation has compounded the strain on Americans' budgets."
Earlier in the week, the Bureau of Labor Statistics reported some progress on that front: Consumer prices for June dropped 0.4%, the biggest monthly decline since April 2020, while wholesale prices slipped 0.3%. Both gauges benefited from slumping oil prices, though costs in several other key categories, most notably housing, also softened.
Still, Logan said there's more work to do for the Fed to meet its 2% inflation goal. Despite the monthly decline, consumer prices rose 3.5% from a year ago, while wholesale costs increased 5.5%. Inflation has been above the central bank's target since early 2021.
"One month of relief is not enough. It is time to finish the job of restoring price stability," she said. "In monetary policy as in hockey, you have to skate where the puck is going. Unfortunately, inflation does not appear to be headed sustainably back all the way to 2 percent."
Markets already expect the FOMC to raise its key overnight borrowing rate by a quarter percentage point later this year — possibly as soon as September, but more likely October, according to the CME Group's FedWatch tracker of fed funds futures pricing.
The committee next meets July 28-29, with traders pricing in just 12.3% odds of a hike.
Logan pointed to a number of widely cited gauges as well as alternative measures such as core prices less housing to show that inflation is mired well ahead of the Fed's target even with the recent slide in energy prices and waning tariff impacts.
"If inflation is not heading all the way to 2 percent on its own, then at least some policy restriction is needed to help get it there," she said. "If higher inflation becomes entrenched, we'd need sharper rate increases to bring it back to target, with a larger cost for the labor market. Better modest restriction now than severe restriction later."
Logan did not specifically state that she would push for an increase at this month's meeting or quantify how much higher she thinks rates need to go.`,
    bodyJa: `ダラス地区連銀のローリー・ローガン総裁は木曜日、今週の良いインフレニュースだけでは十分ではないと主張し、中央銀行が過去5年間負け続けている戦いに勝つために「適度な」金利引き上げを求めた。
金利設定を決定する連邦公開市場委員会の今年の投票権を持つメンバーであるローガン氏は、米国の家計にとってインフレは依然大きな問題であり、政策当局の行動が求められていると主張した。他のFRB当局者らはインフレ指標が改善しない場合には利上げを支持すると表明しているが、ローガン氏は利上げを最も具体的に求めている。
ローガン総裁はヒューストンでの講演に向けて準備した発言の中で「金利を小幅に引き上げたほうが、見通しとＦＯＭＣの２つの責務目標に対するリスクのバランスがより良くなると現在考えている」と述べた。 「毎月目標を上回るインフレが米国民の予算への負担を増大させている。」
今週初めに、労働統計局はこの面での進展を報告した。6月の消費者物価は0.4％下落し、月間としては2020年4月以来最大の下落となった一方、卸売物価は0.3％下落した。どちらの指標も原油価格低迷の恩恵を受けたが、他のいくつかの主要カテゴリー、特に住宅関連のコストも軟化した。
それでもローガン氏は、FRBが2％のインフレ目標を達成するためにやるべきことはまだあると述べた。毎月の下落にもかかわらず、消費者物価は前年比​​3.5％上昇し、卸売コストは5.5％上昇した。インフレ率は２０２１年初めから中銀の目標を上回っている。
同首相は「１カ月の救済では十分ではない。物価安定を回復する仕事を終える時が来た」と述べた。 「ホッケーと同じように金融政策でも、パックが行く方向にスケートをしなければならない。残念ながら、インフレは持続的に２％まで回復に向かっているようには見えない。」
市場ではすでに、FOMCが年内に主要翌日物借入金利を4分の1ポイント引き上げると予想されており、CMEグループのフェデラル・ファンド先物価格動向調査会社フェドウォッチによると、早ければ9月になる可能性が高いが、10月になる可能性が高いという。
委員会は次回７月２８─２９日に会合するが、トレーダーらは利上げの確率をわずか１２．３％織り込んでいる。
ローガン氏は、最近のエネルギー価格の下落や関税の影響が薄れているにもかかわらず、インフレ率がFRBの目標を大きく上回る水準で泥沼化していることを示すために、広く引用されている多くの指標や住宅価格を差し引いたコア価格などの代替策を指摘した。
同氏は「インフレ率が単独で２％に到達しないのであれば、そこに到達するためには少なくとも何らかの政策制限が必要だ」と述べた。 「インフレ率の上昇が定着すれば、インフレ率を目標に戻すためにはより急激な利上げが必要となり、労働市場へのコストはより大きくなるだろう。後で厳しい制限を設けるよりも、今は控えめな制限を行う方がよい」と述べた。
ローガン総裁は、今月の会合で利上げを推進することや、金利をどの程度引き上げる必要があると考えるかについて具体的に明言しなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/dallas-fed-president-logan-calls-for-modestly-higher-interest-rates.html",
    publishedAt: "2026-07-16T18:50:42+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "here-s-why-the-housing-market-is-hurting-bb593b13",
    title: "Here's why the housing market is hurting so much this summer",
    titleJa: "この夏、住宅市場がこれほどまでに打撃を受けている理由がここにある",
    summaryJa: "木曜日に発表された住宅市場に関する2つの異なる見解は同じ問題を指摘しており、1つは悪化しているように見える。住宅は所有するのも建てるのも高価すぎます。全米不動産業者協会によると、既存住宅の契約済み件数を示す6月の保留住宅販売件数は5月から5.4％減少した。売上高は２０２５年６月比０．３％減少し、アナリスト予想を大きく下回った。",
    bodyOriginal: `Two different reads on the housing market released Thursday point to the same problem, one that appears to be getting worse. Housing is just too expensive — to own and to build.
Pending home sales in June, a measure of signed contracts on existing homes, fell 5.4% from May, according to the National Association of Realtors. Sales were down 0.3% from June 2025 and were well below analysts' expectations.
This read is based on people out shopping for homes in June and making the decision to sign a deal, so it is the most timely measure on the state of the market.
"The highest mortgage rates in nearly a year and the record-high national median home price together are contributing to a tepid housing market that is especially difficult for first-time homebuyers," NAR Chief Economist Lawrence Yun said in a release.
Mortgage rates in June bounced around a narrow but higher range, with the average rate on the popular 30-year fixed mortgage starting the month at 6.6% and ending at the exact same rate, according to Mortgage News Daily. It had been as low as 5.99% at the end of February, the day before the Iran war started.
Mortgage demand from homebuyers has been weakening in the past month. Last week, applications for a mortgage to buy a home were 2% lower than they were the same week the year before, even though mortgage rates were slightly higher last year.
Meanwhile, sentiment among the nation's single-family builders fell in July, according to another report released Thursday from the National Association of Home Builders. It dropped to 34, down from an upwardly revised reading of 36 in June. Sentiment has stayed below 40 for 15 consecutive months, the longest such stretch since 2012. Anything below 50 is considered negative sentiment.
"Affordability remains the home building industry's primary challenge, as elevated mortgage rates, costly land, rising material prices, and persistent skilled labor shortages continue to affect the market," Robert Dietz, NAHB's chief economist, said in a release.
A rising share of builders, 37%, cut prices in July, up from 35% in June and 32% in May. The use of sales incentives was 63% in July, up slightly from 62% in June, and marking the 16th consecutive month that share has reached 60% or higher, according to the NAHB.
Dietz said the newly enacted housing legislation from Congress, which attempts to cut red tape and help localities speed up permitting for housing, "is a positive step that will help expand housing supply and lower overall housing costs, although more policy change is needed at the state and local level."
Prices for existing homes continue to rise, with the median hitting a new record in June, according to the NAR. While there are local pockets of weakness, low supply of housing in general is keeping upward pressure on prices.
"Bottom line, housing remains the downer in the US economy and according to the NAHB makes up about 15-18% of the US economy all in," wrote Peter Boockvar, chief investment officer of OnePoint BFG Wealth.`,
    bodyJa: `木曜日に発表された住宅市場に関する2つの異なる見解は同じ問題を指摘しており、1つは悪化しているように見える。住宅は所有するのも建てるのも高価すぎます。
全米不動産業者協会によると、既存住宅の契約済み件数を示す6月の保留住宅販売件数は5月から5.4％減少した。売上高は２０２５年６月比０．３％減少し、アナリスト予想を大きく下回った。
この数値は、6月に住宅を購入し、契約を結ぶ決定をした人々に基づいているため、市場の状況に関して最もタイムリーな指標となります。
ＮＡＲのチーフエコノミスト、ローレンス・ユン氏はリリースで「ここ１年近くで最高の住宅ローン金利と過去最高の全国住宅中央値が住宅市場の低迷に寄与しており、特に初めての住宅購入者にとっては困難だ」と述べた。
モーゲージ・ニュース・デイリーによると、6月の住宅ローン金利は狭いながらも高いレンジ内で推移し、人気の30年固定住宅ローンの平均金利は月初の6.6％から終了まで全く同じ金利となった。イラン戦争が始まる前日の２月末には５．９９％まで低かった。
住宅購入者からの住宅ローン需要は過去１カ月で弱まっていた。住宅ローン金利は昨年若干高かったにもかかわらず、先週、住宅購入のための住宅ローンの申請件数は前年の同じ週と比べて２％減少した。
一方、全米住宅建設業者協会が木曜日に発表した別の報告書によると、国内の一戸建て住宅建設業者のセンチメントは7月に低下した。 ６月に上方修正された３６からは３４に低下した。センチメントは 15 か月連続で 40 を下回っており、この期間は 2012 年以来最長となっています。50 を下回るとネガティブなセンチメントとみなされます。
NAHBのチーフエコノミスト、ロバート・ディーツ氏はリリース文で「住宅ローン金利の上昇、高価な土地、資材価格の上昇、根強い熟練労働者不足が市場に影響を与え続けているため、住宅建築業界にとって住宅価格の手頃さが依然として主要な課題となっている」と述べた。
7月に価格を引き下げた建設業者の割合は37％と、6月の35％、5月の32％から上昇した。 NAHBによると、7月の販売奨励金の利用率は63％で、6月の62％から若干上昇し、16カ月連続でその割合が60％以上に達した。
ディーツ氏は、議会で新たに成立した住宅法は煩雑な手続きを解消し、地方自治体による住宅許可の迅速化を図るもので、「州や地方レベルでさらなる政策変更が必要だが、住宅供給の拡大と住宅コスト全体の低下につながる前向きな一歩だ」と述べた。
NARによると、中古住宅価格は上昇を続けており、6月には中央値が新記録を更新した。地域的に弱い部分はあるものの、一般的に住宅供給が少ないため、価格上昇圧力が続いている。
ワンポイントＢＦＧウェルスの最高投資責任者ピーター・ブックバー氏は、「結局のところ、住宅は引き続き米国経済の低迷要因であり、ＮＡＨＢによると米国経済全体の約１５─１８％を占めている」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/housing-market-mortgages-homebuilding.html",
    publishedAt: "2026-07-16T18:38:03+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "trump-suspends-teleprompter-operator-ove-c6c2b2c8",
    title: "Trump suspends teleprompter operator over Kalshi bets allegations, White House says",
    titleJa: "トランプ大統領、カルシ賭け疑惑でテレプロンプターのオペレーターを停職処分 ホワイトハウス発表",
    summaryJa: "ドナルド・トランプ大統領のテレプロンプターのオペレーターを長年務めている人物が、トランプ大統領の発言に関連して予測市場プラットフォーム「カルシ」で行った賭けに関連して、連邦規制当局の捜査を受けている。同社によると、この運営者は取引で9万ドル以上の利益を得たとされているが、プラットフォームの「メンション」市場での賭けに不審なフラグが立てられた後、その資金のほとんどがカルシによって凍結されたという。この市場には、予定されている演説中にトランプ氏が発言する単語やフレーズに関する契約が含まれている。",
    bodyOriginal: `President Donald Trump's longtime teleprompter operator is under investigation by federal regulators in connection with bets they allegedly made on the prediction market platform Kalshi related to statements made by Trump.
The operator allegedly made more than $90,000 in profits on the trades, but most of that money was frozen by Kalshi after the bets on the platform's "Mentions" market were flagged as suspicious, according to the company. That market includes contracts on words or phrases that Trump will say during a scheduled speech.
A person familiar with the investigation of the trades by the Commodity Futures Trading Commission, who spoke on the condition of anonymity, identified the operator as Gabriel Perez, who has handled teleprompters for Trump speeches since the 2016 presidential campaign.
White House Press Secretary Karoline Leavitt, without naming Perez, said the teleprompter operator under investigation has been places on unpaid leave, and is not handling the device for Trump's address to the nation on Thursday night.
"Obviously, I'm aware of the report," Leavitt told reporters at a news conference.
"The president is too. I spoke with him about it. He believes it's deeply unfortunate and, frankly, a disgrace.
"The individual that was cited in that report is complying with the CFTC, but has been put on paid administrative leave," Leavitt said. "So, there will be a teleprompter operator tonight, of course, but it will not be the one, unfortunately."
She said that the "White House has extremely strict ethical guidelines with respect to issues like this, and as I just told you, this individual will no longer be here."
"That was a decision by the president, so I think that speaks for itself," Leavitt said.
Robert DeNault, Kalshi's head of enforcement, in a statement to CNBC, said "Our surveillance team promptly flagged and referred these trades to the CFTC after an exchange investigation."
"We have been assisting regulators on this matter and provided evidence we collected, as we do in any referral," DeNault said.
The CFTC declined to comment.
According to Kalshi, the company's surveillance in March flagged trades on contracts related to public statements by Trump that did not follow typical patterns of buying and selling.
Some of the trades were separately flagged by market makers in so-called whistleblower channels.
Kalshi's surveillance analysts used data collected during the onboarding of customers and monitoring procedures to discover that the account holder worked for the federal government and a teleprompter operator, according to the company.
Kalshi then froze the account, retaining almost all of the profits.
The investigation of Perez was first reported by ABC News.
The media outlet, citing sources, reported that in addition to Trump's State of the Union address to Congress in February "CFTC investigators discovered that Perez placed bets on more than a dozen Trump speeches over a three-month period, including a December primetime address, a January speech at the World Economic Forum in Davos, Switzerland, and Trump's remarks in March during a Medal of Honor ceremony."
Perez's LinkedIn page identifies him as an employee of VIP Prompting, a company that reportedly has operated White House teleprompters since the 1960s.
A person who answered the phone at VIP Prompting on Thursday declined to comment.
Kalshi bans insider trading on its platforms, and has taken steps throughout 2026 to crack down on speculators using material, nonpublic information to trade on its markets.
The company recently instituted new requirements for traders in certain markets to submit details on their employment status. Those changes were announced in June, and Perez's trades were allegedly caught in March.
The CFTC's investigation of Perez comes on the heels of two major insider trading cases involving prediction market platforms.
In April, a U.S. Army Special Forces master sergeant was arrested on federal criminal charges in a case where prosecutors alleged he made hugely profitable trades on event contracts on the Polymarket platform related to the American military mission to capture Venezuelan leader Nicolás Maduro.
The sergeant, Gannon Ken Van Dyke, allegedly was involved in the planning and execution of that successful raid. Van Dyke is being sued in a civil complaint by the CFTC for his alleged conduct.
In May, federal prosecutors charged a Google employee, Michele Spagnuolo, with fraud in connection with Polymarket contracts that allegedly were based on internal company data related to Google's "Year in Search" lists.
— CNBC's Megan Cassella contributed to this article
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `ドナルド・トランプ大統領のテレプロンプターのオペレーターを長年務めている人物が、トランプ大統領の発言に関連して予測市場プラットフォーム「カルシ」で行った賭けに関連して、連邦規制当局の捜査を受けている。
同社によると、この運営者は取引で9万ドル以上の利益を得たとされているが、プラットフォームの「メンション」市場での賭けに不審なフラグが立てられた後、その資金のほとんどがカルシによって凍結されたという。この市場には、予定されている演説中にトランプ氏が発言する単語やフレーズに関する契約が含まれている。
商品先物取引委員会による取引の調査に詳しい関係者は匿名を条件に、そのオペレーターは2016年の大統領選挙以来トランプ演説のテレプロンプターを担当してきたガブリエル・ペレス氏であると明らかにした。
ホワイトハウスのキャロライン・レビット報道官は、ペレス氏の名前は出さなかったが、捜査中のテレプロンプター操作者は無給休暇中であり、木曜夜のトランプ大統領の国民向け演説では装置を扱っていないと述べた。
レビット氏は記者会見で「報道はもちろん承知している」と語った。
「大統領も同様だ。私はこの件について彼と話した。彼はこれが非常に残念であり、率直に言って恥ずべきことだと信じている」
「その報告書で引用された人物はCFTCに従っているが、有給休暇を取得している」とレビット氏は述べた。 「ですから、今夜はもちろんテレプロンプターのオペレーターが来ますが、残念ながらオペレーターではありません。」
彼女は「ホワイトハウスはこのような問題に関して非常に厳格な倫理ガイドラインを設けており、先ほども話したように、この人物はもうここにはいない」と述べた。
「それは大統領の決断だったので、それがすべてを物語っていると思う」とレビット氏は語った。
カルシの法執行責任者ロバート・デノール氏はCNBCへの声明で、「当社の監視チームは為替調査後、直ちにこれらの取引に警告を発し、CFTCに付託した」と述べた。
「我々はこの問題に関して規制当局を支援しており、他の照会時と同様に収集した証拠を提供してきた」とデノール氏は述べた。
CFTCはコメントを控えた。
カルシ氏によると、3月の同社の監視では、典型的な売買パターンに従わないトランプ大統領の公式声明に関連した契約の取引に警告が発せられたという。
一部の取引は、いわゆる内部告発チャネルのマーケットメーカーによって個別に報告されました。
同社によると、カルシの監視アナリストは、顧客のオンボーディングと監視手順中に収集したデータを使用して、アカウント所有者が連邦政府とテレプロンプターのオペレーターに勤務していることを発見した。
その後、カルシは口座を凍結し、利益のほぼすべてを保持した。
ペレス氏の捜査はABCニュースが最初に報じた。
同メディアは関係者の話として、2月のトランプ大統領の議会一般教書演説に加え、「CFTCの捜査当局は、ペレス氏が12月のゴールデンタイム演説、スイスのダボスでの1月の世界経済フォーラムでの演説、3月の名誉勲章授与式でのトランプ大統領の発言など、3カ月間で十数回のトランプ演説に賭けていたことを発見した」と報じた。
ペレス氏の LinkedIn ページでは、同氏が VIP Prompting 社の従業員であると特定されており、同社は 1960 年代からホワイトハウスのテレプロンプターを運用してきたと伝えられている。
木曜日のVIPプロンプティングで電話に出た関係者はコメントを拒否した。
カルシは自社プラットフォームでのインサイダー取引を禁止しており、2026年を通じて市場での取引に重要な非公開情報を利用する投機家を取り締まる措置を講じている。
同社は最近、特定の市場のトレーダーに対し、雇用状況の詳細を提出するという新たな要件を設けた。こうした変更は6月に発表され、ペレス氏のトレードは3月に発覚したと言われている。
CFTCによるペレス氏への捜査は、予測市場プラットフォームに関わる2つの大規模なインサイダー取引事件に続いて行われた。
4月、米陸軍特殊部隊の曹長が、ベネズエラ指導者ニコラス・マドゥロ捕獲という米軍任務に関連したポリマーケット・プラットフォーム上のイベント契約で巨額の利益を得る取引を行ったと検察当局が主張した事件で、連邦刑事告訴で逮捕された。
ギャノン・ケン・ヴァン・ダイク軍曹は、成功した襲撃の計画と実行に関与したと言われている。ヴァン・ダイク氏は、その行為の疑いでCFTCから民事訴訟を起こされている。
5月、連邦検察はGoogle社員のMichele Spagnuolo氏を、Googleの「検索年」リストに関連する社内データに基づいていたとされるPolymarket契約に関連した詐欺容疑で起訴した。
— CNBC の Megan Cassella がこの記事に寄稿しました
開示: CNBC とカルシには、顧客の獲得と少数出資を含む商業関係があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/trump-kalshi-teleprompter-cftc-investigation.html",
    publishedAt: "2026-07-16T18:32:27+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "trump-is-set-to-deliver-an-election-focu-abe12a8c",
    title: "Trump is set to deliver an election-focused national address tonight. Here's what to know",
    titleJa: "トランプ大統領は今夜、選挙に焦点を当てた国民演説を行う予定だ。知っておくべきことは次のとおりです",
    summaryJa: "ドナルド・トランプ大統領は、木曜日午後9時に予定されている国民向けのゴールデンタイム演説で、米国選挙の健全性に対する脅迫疑惑に焦点を当てる。 ET。彼がそうしたのは初めてではないだろう。トランプ氏は約6年前にジョー・バイデン前大統領に敗れて以来、「不正」で「盗まれた」選挙の被害者であると主張し続けており、共和党が敗れた最近の選挙戦についても同様の主張をしている。",
    bodyOriginal: `President Donald Trump will home in on alleged threats to the integrity of U.S. elections in a primetime address to the nation set for Thursday at 9 p.m. ET.
It would hardly be his first time doing so. Trump has continuously claimed to be the victim of a "rigged" and "stolen" election since his loss to former President Joe Biden nearly six years earlier, and he has made similar claims about more recent contests that Republicans lost.
Trump's decision to give his election claims the spotlight treatment coincides with multi-level efforts by the president and his allies to reshape U.S. elections ahead of the November midterms. Polls show Democrats are favored to retake the U.S. House amid Trump's slumping popularity.
Trump is expected to repeat his false claims about the 2020 presidential results, while alleging foreign adversaries, including China, have engaged in election influence operations, administration officials told MS NOW.
White House press secretary Karoline Leavitt said Thursday that news outlets are "misreporting" what Trump's speech will entail. But she hinted that Trump will make claims about U.S. election security.
"The president will be making a very important announcement with respect to the integrity of our elections," she told reporters at the White House.
"We should have the safest and most secure elections in the history of the world. And what the president will be speaking about tonight will show you that perhaps that is not the case, and we need to make some adjustments moving forward," she said.
Trump could also mention a "range" of other topics, including Iran and the economy, Leavitt noted.
Trump has kept mum on specifics about the speech, his first formal address since early April, when he claimed the Iran war — which is still going — was nearly over.
But he has repeatedly suggested his remarks Thursday night will focus on his gripes about U.S. elections and his plans to change them.
"It's really, really big news, and our country has to shape up," Trump said at the White House on Tuesday when asked about the speech. "Without free and fair elections, you don't have a country."
Asked in a Monday night interview on Newsmax for a preview of the address, Trump brought up last month's Los Angeles mayoral primary election as what he saw as an example of a "rigged" race.
Trump had made baseless claims of mass ballot fraud in the race even before his preferred candidate, former reality TV star Spencer Pratt, officially lost.
"Our elections are crooked, and we've gotta straighten them out," Trump told Newsmax.
The way to do that, Trump insists, is for Congress to pass the "SAVE America Act," the controversial bill that purports to crack down on noncitizens meddling in U.S. elections by requiring photo identification to vote and proof of citizenship to register, among other provisions. Opponents say the measure would disenfranchise voters, particularly those who are low-income or people of color.
Federal law already requires citizenship to vote in U.S. elections, and data show very few instances in which ballots are cast by noncitizens.
But Trump has made the election bill his top priority ahead of the next elections. He has even refused to sign other legislation into law until the SAVE America Act reaches his desk. And his allies in the House have stalled other measures from reaching the president as they press to pass the election law, which doesn't have the votes to clear Congress.
Trump's Republican Party seeks to keep its majorities in the House and Senate past the midterms, but it faces major challenges. The party holding the White House historically underperforms in midterm elections, and Democrats aim to capitalize on what polls have shown are Americans' negative views on the economy, the Iran war and Trump himself.
Trump's election efforts
Trump has sought to challenge election results he opposes using every lever at his disposal.
After his 2020 election loss, Trump and his allies filed dozens of lawsuits challenging states' tallies, but none of the results were overturned and no credible evidence of election-flipping fraud was presented.
The efforts to overturn the 2020 outcome culminated in the Jan. 6, 2021, Capitol riot, when a mob of Trump's supporters stormed the center of U.S. government and forced lawmakers to temporarily flee their chambers for safety. Trump later pardoned or commuted the sentences of virtually all defendants involved in the riot.
In late January, an election office in Georgia — a top target of Trump's attempts to overturn the 2020 race — was raided by the FBI, which sought 2020 election-related records. Trump's then-Director of National Intelligence, Tulsi Gabbard, was spotted at that raid.
After Gabbard announced her resignation in May, Trump picked federal housing regulatory chief Bill Pulte as her acting replacement.
Pulte, who has gained a reputation as a loyal attack dog for Trump, is expected to join the president for the speech, MS NOW previously reported.
The Department of Justice, meanwhile, has filed lawsuits in numerous states seeking to obtain detailed voter registration data. The DOJ has argued it needs the information to ensure compliance with federal election laws. More than a dozen such cases have been dismissed by federal judges so far.`,
    bodyJa: `ドナルド・トランプ大統領は、木曜日午後9時に予定されている国民向けのゴールデンタイム演説で、米国選挙の健全性に対する脅迫疑惑に焦点を当てる。 ET。
彼がそうしたのは初めてではないだろう。トランプ氏は約6年前にジョー・バイデン前大統領に敗れて以来、「不正」で「盗まれた」選挙の被害者であると主張し続けており、共和党が敗れた最近の選挙戦についても同様の主張をしている。
トランプ大統領の選挙にスポットライトを当てる決定は、11月の中間選挙に先立って米国の選挙を再編しようとする大統領とその同盟国による多層的な取り組みと一致すると主張している。世論調査によると、トランプ大統領の人気が低迷する中、民主党が下院奪還に有利であることが示されている。
トランプ大統領は、中国を含む外国敵国が選挙影響力作戦に関与していると主張しながら、2020年の大統領選挙結果について虚偽の主張を繰り返すことが予想されると政権関係者がMS NOWに語った。
ホワイトハウス報道官のキャロライン・レビット氏は木曜日、報道機関がトランプ大統領の演説の内容を「誤って報道」していると述べた。しかし彼女は、トランプ大統領が米国の選挙の安全性について主張するだろうとほのめかした。
同氏はホワイトハウスで記者団に対し、「大統領は選挙の健全性に関して非常に重要な発表を行う予定だ」と述べた。
「私たちは世界史上最も安全で確実な選挙を行うべきだ。そして大統領が今夜話す内容を見れば、おそらくそうではなく、今後は何らかの調整が必要だということが分かるだろう」と彼女は述べた。
レビット氏は、トランプ大統領はイランや経済など他のさまざまな話題についても言及する可能性があると指摘した。
トランプ大統領は、イラン戦争（現在も続いている）はほぼ終わったと主張した4月初旬以来の公式演説となるこの演説について、詳細については沈黙を守ってきた。
しかし同氏は、木曜夜の発言が米国の選挙に対する不満と選挙を変える計画に焦点を当てることになると繰り返し示唆してきた。
トランプ大統領は火曜日、ホワイトハウスでこの演説について問われ、「これは本当に、本当に大きなニュースだ。我が国は体制を整えなければならない」と語った。 「自由で公正な選挙がなければ、国はありません。」
月曜夜のニュースマックスのインタビューで演説のプレビューを求められたトランプ氏は、「不正」選挙の例として先月のロサンゼルス市長選を挙げた。
トランプ氏は、本命候補者である元リアリティ番組スターのスペンサー・プラット氏が正式に敗北する前から、選挙戦での大規模な投票不正があると根拠のない主張をしていた。
トランプ氏はニュースマックスに対し、「われわれの選挙は歪んでいる。正さなければならない」と語った。
そのための方法は、議会が「SAVE America Act」を可決することだとトランプ大統領は主張する。この法案は、投票の際に写真付き身分証明書の提示や登録の際の市民権の証明などを義務付けることで、米国の選挙に干渉する非国民を取り締まることを目的とした物議を醸している法案である。反対派は、この法案は有権者、特に低所得者や有色人種の権利を剥奪することになると主張している。
連邦法はすでに米国の選挙で投票するには市民権を義務付けており、データによれば非市民が投票した例はほとんどない。
しかしトランプ大統領は次の選挙に向けて選挙法案を最優先事項に据えている。彼は、SAVE America Actが彼の机に届くまで、他の法案に署名することさえ拒否した。そして下院の同氏の同盟者らは、議会を通過するための票を持たない選挙法の可決を急ぐ中、他の政策が大統領に届くのを遅らせている。
トランプ大統領率いる共和党は中間選挙以降も下院と上院で多数派を維持しようとしているが、大きな課題に直面している。ホワイトハウスを握る政党は歴史的に中間選挙での成績が劣っており、民主党は経済、イラン戦争、そしてトランプ氏自身に対するアメリカ人の否定的な見方が世論調査で明らかになっているのを利用することを狙っている。
トランプ大統領の選挙活動
トランプ氏は、自由に使えるあらゆる手段を使って、自分が反対する選挙結果に異議を唱えようとしてきた。
2020年の選挙敗北後、トランプ氏とその同盟者らは各州の集計に異議を唱え数十件の訴訟を起こしたが、いずれの結果も覆されず、選挙をひっくり返す不正行為の信頼できる証拠も提示されなかった。
2020年の結果を覆そうとする取り組みは、2021年1月6日の連邦議会議事堂暴動で最高潮に達した。このとき、トランプ支持者の暴徒が米国政府の中心地を襲撃し、議員らが安全を求めて議場から一時的に避難することを余儀なくされた。トランプ大統領はその後、暴動に関与した事実上すべての被告を恩赦または減刑した。
1月下旬、2020年の選挙戦を覆そうとするトランプ大統領の試みの最大の標的であるジョージア州の選挙事務所がFBIによって捜索され、2020年の選挙関連の記録が求められた。トランプ大統領の当時国家情報長官だったトゥルシー・ギャバード氏もその襲撃現場で目撃された。
ギャバード氏が5月に辞任を発表した後、トランプ氏は彼女の後任として連邦住宅規制長官のビル・パルト氏を指名した。
MS NOWは以前、トランプ氏の忠実な攻撃犬として評判を得ているプルト氏が大統領の演説に参加すると予想されていると報じた。
一方、司法省は詳細な有権者登録データの入手を求めて多くの州で訴訟を起こしている。司法省は、連邦選挙法の遵守を確実にするために情報が必要だと主張した。これまでに十数件のそのような訴訟が連邦判事によって却下されている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/trump-primetime-address-elections-2020.html",
    publishedAt: "2026-07-16T18:23:39+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 6,
  },
  {
    id: "sen-warren-says-trump-s-cfpb-overhaul-ha-025a3046",
    title: "Sen. Warren says Trump's CFPB overhaul has cost Americans $26.5 billion",
    titleJa: "ウォーレン上院議員、トランプ大統領のCFPB改革はアメリカ国民に265億ドルの損失をもたらしたと語る",
    summaryJa: "マサチューセッツ州のエリザベス・ウォーレン上院議員は木曜日、トランプ政権による消費者金融保護局の見直しにより、これまでに米国民に最大265億ドルの損失が生じたと述べ、消費者金融保護局に加えられた抜本的な変更に対する民主党の最新の批判となった。CNBCに最初に共有されたリポートの中でウォーレン氏は、この数字の大部分はCFPBがラッセル・ヴォート局長代理の下でクレジットカード手数料と当座貸越手数料に上限を設けるルールを撤回するために講じた動きによるものであると述べた。",
    bodyOriginal: `Sen. Elizabeth Warren, D-Mass., said Thursday that the Trump administration's overhaul of the Consumer Financial Protection Bureau has cost Americans up to $26.5 billion so far, the latest Democratic critique of sweeping changes made to the agency.
In a report shared first with CNBC, Warren said most of that figure comes from moves the CFPB has taken under acting director Russell Vought to roll back rules capping credit card and overdraft fees.
The report comes as Vought faces a Senate oversight hearing Thursday on those and other actions, including dismissing enforcement actions and consent orders and an allegation that the agency recently removed 15 years of consumer data from the CFPB website.
Since taking office last year, the Trump administration has slashed staffing, dropped or narrowed dozens of enforcement cases, and rolled back Biden-era rules to refocus the agency on what officials call its core mission.
Republicans have defended the moves as necessary to rein in what they view as an overreaching regulator. Democrats led by Warren — who conceived and helped set up the agency after the 2008 financial crisis — have argued that the Trump administration has crippled a key consumer financial watchdog and exposed Americans to unfair or deceptive industry practices.
The clash comes as the Senate weighs the nomination of Brian Johnson, a former CFPB deputy director turned Capital One executive, whom President Donald Trump tapped to lead the agency permanently.
Warren's report attributes up to $15 billion in consumer costs to the CFPB's decision to abandon a rule capping most credit-card late fees at $8, a regulation the agency previously estimated would save consumers roughly $10 billion annually.
It attributes another $7.5 billion to the repeal of the CFPB's overdraft fee rule, which would have limited many banks to charging $5 for overdrafts.
The remainder of the estimate comes from the CFPB's decision to drop more than three dozen enforcement actions and settlements, some of which were set to send payments directly to consumers. That totaled roughly $4 billion, according to the report.
The White House and CFPB did not immediately respond to requests for comment.
Ahead of Thursday's hearing, Warren also sent Vought a letter cataloging what she described as unanswered congressional oversight requests during his tenure running the bureau.`,
    bodyJa: `マサチューセッツ州のエリザベス・ウォーレン上院議員は木曜日、トランプ政権による消費者金融保護局の見直しにより、これまでに米国民に最大265億ドルの損失が生じたと述べ、消費者金融保護局に加えられた抜本的な変更に対する民主党の最新の批判となった。
CNBCに最初に共有されたリポートの中でウォーレン氏は、この数字の大部分はCFPBがラッセル・ヴォート局長代理の下でクレジットカード手数料と当座貸越手数料に上限を設けるルールを撤回するために講じた動きによるものであると述べた。
この報告書は、ヴォート氏が執行措置や同意命令の却下、同庁が最近CFPBのウェブサイトから15年分の消費者データを削除したとの申し立てなど、これらおよびその他の行為に関して木曜日に上院の監視公聴会に臨む中で発表された。
昨年の就任以来、トランプ政権は職員を削減し、数十件の執行事件を取り下げたり縮小したり、バイデン時代の規則を撤回したりして、当局がその中核的使命と呼ぶものに再び焦点を当ててきた。
共和党は行き過ぎた規制当局とみなされる規制を抑制するために必要な動きだと擁護してきた。 2008年の金融危機後に同庁の設立を発案し支援したウォーレン氏率いる民主党は、トランプ政権が主要な消費者金融監視機関を無力化し、米国人を不公平または欺瞞的な業界慣行にさらしていると主張した。
この衝突は、上院がCFPBの元副局長からキャピタル・ワン幹部に転身したブライアン・ジョンソン氏の指名を検討している最中に起きたもので、ドナルド・トランプ大統領は同氏を同局の永久指導者に抜擢した。
ウォーレン氏の報告書は、ほとんどのクレジットカード延滞手数料を8ドルに制限する規則を廃止するというCFPBの決定により、最大150億ドルの消費者コストが発生したとしている。この規則は消費者が年間約100億ドル節約できると同局は以前試算していた。
さらに75億ドルは、多くの銀行が当座貸越手数料を5ドルに制限されていたはずのCFPBの当座貸越手数料規則の廃止によるものだとしている。
残りの推定値は、消費者に直接支払いを行う予定だった30以上の執行措置と和解を取り下げるCFPBの決定によるものである。報告書によると、その総額は約40億ドルだという。
ホワイトハウスとCFPBはコメント要請に応じていない。
木曜日の公聴会に先立って、ウォーレン氏はヴォート氏に、同局長官在職中に回答が得られなかった議会監視要請を列挙した書簡も送った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/trumps-cfpb-overhaul-cost-americans-26point5-billion-sen-warren-says.html",
    publishedAt: "2026-07-16T14:04:30+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "investigation-into-parking-tickets-for-d-9d56ae2f",
    title: "Investigation into parking tickets for drivers queuing at petrol stations",
    titleJa: "ガソリンスタンドに並ぶドライバーの駐車違反切符の調査",
    summaryJa: "ガソリンスタンドに並ぶドライバーの駐車違反切符の調査- 公開されました",
    bodyOriginal: `Investigation into parking tickets for drivers queuing at petrol stations
- Published
One of the UK's largest private parking providers is being investigated by the competition regulator over whether parking tickets for drivers queuing at petrol forecourts are fair.
Euro Car Parks' broader appeals process relating to petrol stations and car parks is also being looked into, to determine if it breaches consumer protection law.
The investigation forms part of a wider crackdown by the Competition and Markets Authority (CMA) into potentially unfair practices by private parking operators.
Research by the RAC has suggested the number of tickets issued in places like gyms, supermarkets, restaurants and retail parks more than doubled in six years, to 14.4 million.
Motorists have complained about these parking issues, the CMA said, highlighting problems including unclear signage, faulty apps and broken ticket machines.
The regulator said it wanted to make sure drivers are being treated fairly following complaints from motorists who feel they've been unjustly issued with parking tickets.
The CMA says it has its own concerns about the way some operators are handling appeals, or attempting to make motorists pay additional fees on top of parking charges.
It has written to the sector as a whole, and issued warnings to some individual operators about their practices.
The CMA's executive director of consumer protection Emma Cochrane said receiving a parking ticket could be a stressful experience.
"Costs are high and often unexpected which is difficult when people are budgeting carefully," she said.
"Parking companies must treat motorists fairly at all stages – and a clear and consistent appeals process must be at the heart of this.
"It's time for all private parking operators to comply with consumer law or risk action from the CMA."
In the open letter to private parking operators, the CMA warned they should review their terms and conditions and make changes if necessary to ensure they are complying with consumer law.
The CMA's investigation into Euro Car Parks is focusing on whether it is fair for drivers to receive parking charges while queuing for, or using, petrol pumps and other forecourt services such as car washes, plus its wider appeals process.
It is in the evidence gathering stage, and is set to run until Spring 2027.
Euro Car Parks has more than 3,000 facilities across the UK and Ireland, according to the company's website, with more than two million cars parking in their spots every day.
The BBC has contacted Euro Car Parks for comment.
Which? consumer law expert Lisa Webb said it was positive to see the CMA launch its investigation.
"We often hear from people who feel frustrated and confused as they fight unfair charges and tickets issued by private parking operators, including for absurd reasons like queuing for a petrol pump or car wash," she said.
Jack Cousens, head of roads policy at The AA, said forecourts and parking operators need to allow motorists to get the fuel they need without being penalised "for simply waiting their turn".
"Drivers are already feeling the pinch with rising pump prices, so the last thing they'd want or expect is to be hit for a parking charge just for sitting in the queue," he said.
Watch: How to fight a parking ticket
- Published15 May
Don't pay a fake parking fine – four ways to protect yourself from scams
- Published3 September 2025
RAC head of policy Simon Williams said the CMA's effort was a "major step forward in ensuring drivers are treated fairly by private parking operators".
He pointed out the watchdog's crackdown comes ahead of the government's response to a consultation on reinstating the withdrawn Private Parking Code of Practice.
"The CMA has shone a much-needed light on the appeals process and found major problems that need to be addressed," he said.
The AA's Cousens agreed the CMA's intervention was important but worried that a potential cabinet reshuffle next week could further delay the Private Parking Code of Practice bill.
One of the parking trade bodies, the International Parking Community, said it welcomed the CMA's efforts to ensure motorists were treated fairly. The IPA added it was carefully reviewing the CMA's letter.
"We have already shared the CMA's open letter with our members and will issue detailed guidance to help them ensure their practices fully meet the standards it sets out."
The British Parking Association (BPA) is also reviewing the CMA's letter and said it will implement recommendations where appropriate, adding that it has "always strived to strictly uphold the highest industry standards" among members.
"While continuing to support our members, our focus remains on driving improvements across the UK parking industry and engaging constructively with all parties," BPA's head of external affairs Isaac Occhipinti said.
Tips to avoid parking problems
Check the rules for each car park you use, which should be set out in signs in the car park, as not all car parks work in the same way
Free parking periods may not be automatic - check to see whether you need to register your car's details or scan a receipt
Payment machine isn't working, or your car breaks down? Make sure to keep evidence, including photos and receipts
If you believe you've received a ticket incorrectly, appeal it within 14 days
Know that you always have the right to appeal a parking charge notice
Get in touch
Have you had a similar experience with your vehicle? Do you have a similar story to share?`,
    bodyJa: `ガソリンスタンドに並ぶドライバーの駐車違反切符の調査
- 公開されました
英国最大の民間駐車場プロバイダーの1つが、ガソリンスタンドに並ぶドライバーの駐車券が公平かどうかを巡り、競争規制当局から調査を受けている。
ユーロ・カー・パークスが消費者保護法に違反しているかどうかを判断するため、ガソリンスタンドや駐車場に関する広範な控訴手続きも調査されている。
この調査は、民間駐車場経営者による潜在的に不公正な行為に対する競争・市場庁（CMA）による広範な取り締まりの一環である。
RACの調査によると、ジム、スーパーマーケット、レストラン、小売公園などの場所で発行されたチケットの数は6年間で2倍以上の1,440万枚に増加した。
CMAによると、運転手らはこうした駐車問題について苦情を述べており、不鮮明な標識、欠陥のあるアプリ、壊れた券売機などの問題が浮き彫りになっている。
規制当局は、不当に駐車違反切符を切られたと感じる運転手からの苦情を受け、ドライバーが公平に扱われるよう努めたいと述べた。
CMAは、一部の事業者が不服申し立てを処理する方法や、ドライバーに駐車料金に加えて追加料金を支払わせようとする方法について、独自の懸念を抱いていると述べた。
同部門は業界全体に書簡を送り、一部の個別事業者に対してはその慣行について警告を発した。
CMAの消費者保護担当エグゼクティブディレクターのエマ・コクラン氏は、駐車違反切符を受け取ることはストレスになる可能性があると述べた。
「コストは高く、予期せぬことが多いため、慎重に予算を立てている場合は困難です」と彼女は言う。
「駐車場会社はあらゆる段階でドライバーを公平に扱わなければならず、その中心となるのは明確で一貫した異議申し立てプロセスでなければなりません。
「すべての民間駐車場運営者が消費者法を遵守しなければ、CMA からの行動にリスクを負う時期が来ています。」
CMAは民間駐車場経営者への公開書簡の中で、消費者法を確実に遵守するために利用規約を見直し、必要に応じて変更を加える必要があると警告した。
ユーロ・カー・パークに関するCMAの調査は、ドライバーがガソリンポンプや洗車などの前庭サービスの列に並んでいる間、または使用中に駐車料金を受け取るのが公平かどうか、さらに広範な不服申し立てプロセスに焦点を当てている。
現在証拠収集段階にあり、2027年春まで実施される予定だ。
同社のウェブサイトによると、ユーロ・カー・パークは英国とアイルランドに3,000以上の施設を持ち、毎日200万台以上の車がその場所に駐車しているという。
BBCはユーロ・カー・パークスにコメントを求めた。
どっち？消費者法の専門家リサ・ウェッブ氏は、CMAが調査を開始するのは前向きだと述べた。
「私たちは、ガソリンスタンドや洗車の列に並ぶなど不条理な理由で、民間の駐車場運営者から不当な料金や切符を発行され、イライラと混乱を感じている人々の話をよく聞きます」と彼女は語った。
AAの道路政策責任者、ジャック・カズンズ氏は、前庭や駐車場の管理者は、ドライバーが「順番を待っているだけ」で罰せられることなく必要な燃料を入手できるようにする必要があると述べた。
同氏は、「ドライバーはポンプ価格の高騰ですでに窮地を感じている。そのため、列に並んでいるだけで駐車料金を請求されることは彼らが最も望んでいないこと、あるいは期待していないことだ」と述べた。
見る: 駐車違反切符を争う方法
- 5 月 15 日公開
偽の駐車違反金を支払わないでください – 詐欺から身を守る 4 つの方法
- 2025 年 9 月 3 日発行
ＲＡＣの政策責任者サイモン・ウィリアムズ氏は、ＣＭＡの取り組みは「民間駐車場運営者によるドライバーの公平な扱いを確保する上での大きな前進」だと述べた。
同氏は、監視機関の取り締まりは、撤回された民間駐車場実施規範の復活に関する協議に対する政府の対応に先立って行われたと指摘した。
「CMAは控訴手続きに切望されていた光を当て、対処すべき重大な問題を発見した」と同氏は述べた。
AAのカズンズ氏はCMAの介入が重要であることに同意したが、来週の内閣改造の可能性により民間駐車場実施法法案の制定がさらに遅れる可能性があると懸念した。
駐車業界団体の一つである国際駐車コミュニティは、自動車運転者が公平に扱われるよう努めるCMAの取り組みを歓迎すると述べた。 IPAは、CMAの書簡を注意深く検討していると付け加えた。
「私たちはすでにCMAの公開書簡を会員と共有しており、会員が定めた基準を確実に実践できるよう、詳細なガイダンスを発行する予定です。」
英国駐車場協会（BPA）もCMAの書簡を検討しており、必要に応じて勧告を実施すると述べ、会員の間で「最高の業界基準を厳格に守るよう常に努力してきた」と付け加えた。
BPAの渉外責任者アイザック・オッキピンティ氏は、「会員への支援を継続しながら、英国の駐車場業界全体の改善を推進し、あらゆる関係者と建設的に関与することに今後も注力していく」と述べた。
駐車トラブルを避けるためのヒント
すべての駐車場が同じように機能するわけではないため、使用する各駐車場の規則を確認してください。規則は駐車場の標識に記載されている必要があります。
無料駐車期間は自動的に設定されない場合があります。車の詳細を登録するか、領収書をスキャンする必要があるかどうかを確認してください。
精算機が故障したり、車が故障したりしませんか？写真や領収書などの証拠は必ず保管してください
チケットを間違って受け取ったと思われる場合は、14 日以内に異議を申し立ててください
あなたはいつでも駐車料金通知に対して異議を申し立てる権利があることを知ってください
連絡する
あなたの車でも同じような経験をしたことがありますか?似たような話はありますか?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cnvnyr75r48o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-16T14:04:24+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ebba/live/9f20ee20-80fe-11f1-b983-cbe246fcd5da.jpg",
    readTime: 6,
  },
  {
    id: "iran-warns-u-s-of-hormuz-red-line-says-i-2238c05a",
    title: "Iran warns U.S. of Hormuz ‘red line,’ says it will retaliate to Trump’s strike threats",
    titleJa: "イラン、米国にホルムズの「越えてはならない一線」を警告、トランプ大統領の攻撃脅迫には報復すると表明",
    summaryJa: "イランは木曜日、数日以内にイランのインフラを標的にするというドナルド・トランプ米大統領の脅しが実行されれば、中東の主要標的を「粉砕」するだろうと警告した。トランプ大統領は火曜日夜のFOXニュースとのインタビューで、外交的打開が達成されない場合、米軍は来週イランの主要インフラを標的にするだろうと述べた。",
    bodyOriginal: `Iran warned Thursday that it would "crush" key targets in the Middle East if U.S. President Donald Trump's threats to target the country's infrastructure in the coming days are carried out.
Trump said in a Tuesday evening interview with Fox News that U.S. forces would target key Iranian infrastructure next week if a diplomatic breakthrough is not achieved.
"Next week it gets really bad for them because next week comes the power plants," he said. "Next week comes the bridges. We're going to knock out all their power plants. We're going to knock out all their bridges unless they get to the table and negotiate."
In a statement published on Telegram on Thursday morning, a spokesperson for Iran's top military command said that if Trump's threats were implemented "everything that is still intact … that is, all the infrastructure in the region – will be crushed under the steel blows of the powerful armed forces of the Islamic Republic of Iran; so that no trace of them remains and it is as if they never existed in the first place."
They added that "under no circumstances and in no way will we allow America, as a foreign and extra-regional country, to interfere in the Strait of Hormuz."
"This is Iran's invincible red line," the spokesperson said.
The Strait, a waterway in the Middle East that's critical to the shipping of oil and other key commodities, has become the focal point of fighting between American and Iranian forces.
Reuters reported on Thursday that Iran may also be looking to expand its grip on global shipping. Citing anonymous sources, the news agency said the Iranian government had asked Yemen's Tehran-backed Houthis to stand ready to close the Red Sea oil route should U.S. forces carry out Trump's threatened attacks.
Armed conflict has escalated in recent days after the U.S. launched strikes against Iran earlier this week in retaliation for commercial ships in the Strait of Hormuz coming under attack.
Tehran, meanwhile, has launched attacks on multiple Gulf countries.
U.S. Central Command carried out a fresh wave of attacks on Iran overnight that concluded at 9 p.m. ET.
"U.S. forces struck Iranian command centers, air defense sites, missile and drone capabilities, and coastal surveillance facilities to further degrade Iran's ability to threaten innocent mariners crewing commercial vessels transiting the Strait of Hormuz," Centcom said in a statement posted on X.
"CENTCOM used precision munitions to hit targets in multiple locations including Bandar Abbas."
The spokesperson for Iran's Foreign Ministry also warned of retaliation on Wednesday.
"Our hands are not tied," he said at an event in Tehran, according to state-affiliated media. "Our fighters will respond with full force and power to US aggressions, and in other clauses of the memorandum, wherever we had reciprocal commitments, we have not implemented them."
Last week, Trump said the ceasefire agreed between the two sides last month was "over." On Wednesday, he told Fox Business News that Iranian officials wanted to meet with American delegates for fresh negotiations.
Hostilities face potential stalemate
Oil prices fell on Thursday morning, with Brent crude futures for September delivery shedding 0.5% to trade at $84.42 per barrel by 4:30 a.m. ET. Front-month U.S. West Texas Intermediate crude futures were down almost 0.2% at $79.47 a barrel.
Clark H. Summers, adjunct professor of government and political philosophy at North Carolina's Belmont Abbey College, told CNBC he believes the current situation will most likely result in a stalemate.
"The U.S. will continue to make precision air strikes to destroy [drones] and surface-to-surface missile launch sites as Iran pops-up to launch," he said in an email. "Also, the U.S. will act to defeat air attacks launched against neutral shipping in the Persian Gulf. I expect these actions … to be very effective at the tactical level, but ineffective strategically as long as Iran can continue to produce drones and missiles (or has them stockpiled)."
Summers added that Trump's recent proposals to slap a 20% fee on shipping through the Strait of Hormuz – something the president has since walked back from – strongly suggest the Trump administration is aware the costs of the war are undermining public support for the president.
"He has tread carefully around the War Powers Act, and seems to be well aware that current U.S. industrial and logistics capabilities are not able to sustain this conflict on an open-ended basis (probably not through the midterm elections, and certainly not through '28," Summers said.
However, he noted that as long as the Islamic Revolutionary Guard Corps remains in power in Iran and "can crawl out of the rubble alive," they will be able to claim victory.
"Only a serious ground threat will destroy the IRGC as a governing body and compel it to accept surrender," Summers told CNBC. "Such a threat is extremely unlikely to come from conventional U.S. forces; such an operation is beyond the current capabilities of the U.S. Army and USMC combined."
A raid on the critical Kharg Island to tighten a blockade on Iranian oil exports may help achieve a negotiated peace deal, Summers said, "but it is unlikely that the IRGC will honor any agreement."
Richard de Meo, founder and CEO of Attara, a London-based brokerage firm specializing in commodity hedging, told CNBC that markets had become increasingly desensitized to developments in the U.S.-Iran war.
"Across the corporate sector, there is a growing sense of fatigue in response to the sheer volume of geopolitical risks, with some businesses taking false comfort from relatively range-bound market conditions and overlooking the sharp bouts of volatility we have seen, particularly in energy markets," he said.
"Nevertheless, treasury teams continue to show strong discipline in their approach to risk management. Where policy flexibility allows, many are increasing hedge ratios and extending hedge tenors, taking steps to secure greater protection and resilience against future market uncertainty."`,
    bodyJa: `イランは木曜日、数日以内にイランのインフラを標的にするというドナルド・トランプ米大統領の脅しが実行されれば、中東の主要標的を「粉砕」するだろうと警告した。
トランプ大統領は火曜日夜のFOXニュースとのインタビューで、外交的打開が達成されない場合、米軍は来週イランの主要インフラを標的にするだろうと述べた。
「来週は発電所が稼働するため、来週は彼らにとって本当にひどい状況になる」と彼は語った。 「来週は橋が来ます。私たちは彼らの発電所をすべて破壊するつもりです。彼らがテーブルに着いて交渉しない限り、私たちは彼らの橋をすべて破壊するつもりです。」
木曜朝テレグラムに掲載された声明の中で、イラン軍最高司令部の報道官は、もしトランプ大統領の脅しが実行されれば、「まだ無傷であるすべてのもの、つまり地域内のすべてのインフラは、イラン・イスラム共和国の強力な軍隊の鋼鉄の打撃で押しつぶされるだろう。そのため、それらの痕跡は残らず、最初から存在しなかったかのようになるだろう。」と述べた。
さらに、「いかなる状況においても、またいかなる形においても、米国が外国かつ域外の国としてホルムズ海峡に干渉することを許さない」と付け加えた。
同報道官は「これはイランにとって無敵の越えてはならない一線だ」と述べた。
海峡は石油やその他の主要商品の輸送に重要な中東の水路で、アメリカ軍とイラン軍の間の戦闘の焦点となっている。
ロイター通信は木曜日、イランも世界の海運における支配力を拡大しようとしている可能性があると報じた。同通信は匿名の情報筋の話として、イラン政府がイラン政府が支援するイエメンのフーシ派に対し、米軍がトランプ大統領の脅迫攻撃を実行した場合には紅海石油ルートを閉鎖する準備を整えるよう求めたと伝えた。
ホルムズ海峡で商船が攻撃を受けたことへの報復として米国が今週初めにイランへの攻撃を開始して以来、ここ数日で武力衝突が激化している。
一方、テヘランは複数の湾岸諸国への攻撃を開始した。
米中央軍は一晩中イランに対する新たな攻撃を実施し、午後9時に終了した。 ET。
セントコムはＸに掲載した声明で、「米軍は、ホルムズ海峡を通過する商船に乗組む無実の船員を脅かすイランの能力をさらに低下させるために、イランの司令センター、防空拠点、ミサイルや無人機の能力、沿岸監視施設を攻撃した」と述べた。
「CENTCOMはバンダル・アッバスを含む複数の場所の目標を攻撃するために精密弾を使用した。」
イラン外務省報道官も水曜日に報復を警告した。
国営メディアによると、同氏はテヘランでのイベントで「我々の手は縛られていない」と述べた。 「我が国の戦闘員は米国の侵略に対して全力で対抗するが、覚書の他の条項で相互の約束があったとしても、我々はそれを実行していない。」
トランプ大統領は先週、先月両国間で合意された停戦は「終わった」と述べた。同氏は水曜日、FOXビジネスニュースに対し、イラン当局者は新たな交渉のために米国の代表団との会談を望んでいると語った。
敵対行為は膠着状態に陥る可能性がある
木曜日朝の原油価格は下落し、９月渡しのブレント原油先物は東部時間午前４時３０分までに０．５％下落し、１バレル＝８４．４２ドルで取引された。前月の米国ウェスト・テキサス・インターミディエイト原油先物はほぼ0.2％下落し、1バレル＝79.47ドルとなった。
ノースカロライナ州ベルモント・アビー大学の政府・政治哲学非常勤教授クラーク・H・サマーズ氏はCNBCに対し、現在の状況では膠着状態に陥る可能性が高いと考えていると語った。
同氏は電子メールで、「イランが突然発射する中、米国は（無人機）と地対地ミサイル発射場を破壊するための精密空爆を継続する」と述べた。 「また、米国は、ペルシャ湾で中立国の船舶に対して行われた航空攻撃を打ち破るために行動するだろう。私はこれらの行動が…戦術レベルでは非常に効果的であると期待しているが、イランが無人機とミサイルを生産し続ける（またはそれらを備蓄している）限り、戦略的には効果がない。」
サマーズ氏は、ホルムズ海峡を通過する輸送に20％の手数料を課すというトランプ大統領の最近の提案（大統領はその後、提案を撤回したが）は、戦争の費用が大統領に対する国民の支持を損なっているとトランプ政権が認識していることを強く示唆していると付け加えた。
「彼は戦争権限法を慎重に回避しており、現在の米国の産業能力と兵站能力ではこの紛争を無制限に維持することはできないことを十分に認識しているようだ（おそらく中間選挙を通じてではなく、もちろん28年を通じてもそうではない）」とサマーズ氏は語った。
しかし、同氏は、イスラム革命防衛隊がイランで権力を維持し、「瓦礫の中から生きて這い上がることができる」限り、勝利を収めることができると指摘した。
サマーズ氏はCNBCに対し、「統治機関としての革命防衛隊を破壊し、降伏を受け入れざるを得なくなるのは、深刻な地上の脅威だけだ」と語った。 「そのような脅威が通常の米軍から来る可能性は非常に低い。そのような作戦は米陸軍と米海兵隊を合わせた現在の能力を超えている。」
サマーズ氏は、イラン石油輸出封鎖を強化するための重要なハルグ島への襲撃は、交渉による和平協定の達成に役立つかもしれないが、「しかし革命防衛隊がいかなる協定も遵守する可能性は低い」と述べた。
ロンドンに本拠を置く商品ヘッジ専門の証券会社アタラの創設者兼最高経営責任者（CEO）のリチャード・デ・メオ氏はCNBCに対し、市場は米国・イラン戦争の展開に対してますます鈍感になっていると語った。
同氏は「企業部門全体で、膨大な量の地政学的リスクに対する疲労感が高まっており、一部の企業は比較的レンジ内にとどまる市況から誤った安心感を抱き、特にエネルギー市場で見られる急激なボラティリティーの発生を見逃している」と述べた。
「それにもかかわらず、財務チームはリスク管理へのアプローチにおいて強力な規律を示し続けている。政策の柔軟性が許す限り、多くのチームはヘッジ比率を高め、ヘッジ期間を延長し、将来の市場の不確実性に対する保護と回復力を強化する措置を講じている。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/iran-warns-of-hormuz-red-line-retaliation-to-trumps-strike-threats.html",
    publishedAt: "2026-07-16T13:08:49+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "nvidia-backed-fireworks-hits-17-5-billio-cfa7dfb6",
    title: "Nvidia-backed Fireworks hits $17.5 billion valuation as companies pursue cheaper AI models",
    titleJa: "企業がより安価な AI モデルを追求する中、NVIDIA が支援する Fireworks の評価額は 175 億ドルに達する",
    summaryJa: "FireworksはかつてコーディングスタートアップCursorからの収益に大きく依存していたが、より多くの企業が低コストのAIモデルに手を伸ばすにつれ、ここ1年で多角化を進めた。",
    bodyOriginal: `The cost of the latest artificial intelligence models is increasingly breeding anxiety among finance executives, who have started directing employees to consider open-source alternatives.
That's boosting cloud startup Fireworks, which competes with Amazon and Google to host models that developers can weave into applications. The Nvidia-backed company said Thursday that it has exceeded $1 billion in annualized revenue, five times what it had last year, and it has now raised a $1.5 billion round at a $17.5 billion valuation.
"We're seeing super-linear demand," Lin Qiao, Fireworks' co-founder and CEO, told CNBC in an interview at the company's headquarters in San Mateo, California. "This is a once-in-a-lifetime opportunity to have this kind of market."
Fireworks is much smaller than Anthropic and OpenAI, which investors have valued above $800 billion each this year, nor is it close to the top names in technology, whose market capitalizations are counted in the trillions. But the startup's revenue milestone suggests that companies aren't completely satisfied with the models coming out of the top labs.
The achievement also presents new evidence that Amazon, Microsoft and Google are not totally dominating in cloud computing.
Shares of easy-to-use cloud infrastructure vendor DigitalOcean are up 149% so far this year as growth has accelerated. CoreWeave, which rents out Nvidia graphics processing units, or GPUs, raised $1.5 billion in an initial public offering last year and is now worth $42 billion.
By managing computing infrastructure for models, Fireworks does business in the inference cloud market, alongside startups such as Baseten and Together AI. It's also started providing GPUs for training AI models, like neoclouds CoreWeave, Lambda and Nebius.
Rather than go it alone, Fireworks has started forming alliances.
In March, it announced a partnership with Microsoft, which fields its own Foundry service for running open models. The arrangement allows customers of the Windows and Office company to draw on models through Fireworks, which relies on computing power from more than 20 suppliers, including Microsoft.
"Through Microsoft we can get much bigger reach," Qiao said.
Fireworks gives developers an easy way to adopt models from Chinese companies such as DeepSeek, MiniMax and Z.ai. Open-weight models OpenAI released last year are also available. The idea is for clients to bring their own data that frontier labs don't have and refine models until they deliver state-of-the-art performance for specific tasks, Qiao said.
While Anthropic and OpenAI serve up "generalized intelligence," Fireworks can unlock "specialized intelligence," she said.
The argument might sound familiar to those following the discourse of technology figureheads.
Microsoft CEO Satya Nadella wrote in a Sunday blog post that "a company should be able to use a model without giving up the knowledge that makes it unique."
Nadella was referring to Palantir CEO Alex Karp's remarks on CNBC earlier this month.
Technical customers "want to know they own the means of production," Karp said. "It's not being transferred to someone else."
Dollars and cents are a factor, too. Cryptocurrency exchange operator Coinbase has been adopting cheaper models where it makes sense, CEO Brian Armstrong wrote in a June X post.
"Our cost compared with the equivalent-quality closed model is five to 10 times cheaper," Qiao said.
A former Meta director, Qiao and six of her co-founders started Fireworks in 2022. The company employs around 200 people. Qiao expects the head count to reach 600 by the end of 2026.
"This is the year when we'll really hit the gas," Qiao said.
Fireworks hired former Salesforce executive George Hu as its president in April. The startup plans to assemble a formidable sales team after years of having customers sign themselves up. The new money will also help Fireworks obtain more GPUs and hire more technologists.
Developers are increasingly counting on Fireworks to handle requests.
Fireworks now handles 40 trillion AI tokens per day, Qiao said. Google disclosed in May that its AI models were processing about 19 billion tokens per minute for developers, implying more than 27 trillion per day. OpenAI announced in March that its developer tools were working through 15 billion tokens per minute, which would suggest about 22 trillion per day. Each token equates to about three-quarters of a single word.
As of last year, about half of Fireworks' revenue came from AI coding startup Cursor, which has become less dependent on OpenAI and Anthropic and built a custom model named Composer.
"We are much more diversified right now," Qiao said. In June, Elon Musk's SpaceX agreed to acquire Cursor in a $60 billion stock deal, with the transaction set to close this quarter. Other Fireworks clients include Elastic, GitLab and MongoDB.
Atreides Management, Index Ventures and TCV led Fireworks' new round. Nvidia also participated, as did Evantic and Lightspeed Venture Partners.
WATCH: OpenAI CEO: Chinese open-source models are getting very good`,
    bodyJa: `最新の人工知能モデルのコストは、財務幹部の間で不安を増大させており、従業員にオープンソースの代替モデルを検討するよう指示し始めている。
これが、開発者がアプリケーションに組み込むことができるモデルのホストをめぐってAmazonやGoogleと競合するクラウド新興企業Fireworksを後押ししている。 Nvidiaが支援する同社は木曜日、年間収益が昨年の5倍となる10億ドルを超え、現在175億ドルの評価額で15億ドルの資金を調達したと発表した。
Fireworksの共同創設者兼最高経営責任者（CEO）のLin Qiao氏は、カリフォルニア州サンマテオの同社本社でのインタビューでCNBCに対し、「非常に線形的な需要が見られる」と語った。 「このような市場が開かれるのは一生に一度のチャンスです。」
Fireworksは、投資家が今年それぞれ8000億ドル以上と評価したAnthropicやOpenAIよりもはるかに小規模であり、時価総額が数兆ドルに数えられるテクノロジー業界のトップ企業にも及ばない。しかし、このスタートアップの収益マイルストーンは、企業が一流の研究所から出てくるモデルに完全には満足していないことを示唆している。
この成果は、Amazon、Microsoft、Google がクラウド コンピューティングにおいて完全に支配しているわけではないという新たな証拠も示しています。
使いやすいクラウドインフラベンダーであるDigitalOceanの株価は、成長が加速し今年これまでに149％上昇している。 Nvidiaグラフィックス・プロセッシング・ユニット（GPU）をレンタルするCoreWeaveは、昨年の新規株式公開で15億ドルを調達し、現在価値は420億ドルとなっている。
Fireworks は、モデルのコンピューティング インフラストラクチャを管理することで、Baseten や Together AI などの新興企業と並んで、推論クラウド市場でビジネスを行っています。また、ネオクラウドの CoreWeave、Lambda、Nebius など、AI モデルをトレーニングするための GPU の提供も開始しました。
Fireworks は単独で事業を進めるのではなく、提携を結び始めています。
同社は3月に、オープンモデルを実行するための独自のFoundryサービスを展開するMicrosoftとの提携を発表した。この取り決めにより、Windows and Office 企業の顧客は、Microsoft を含む 20 社以上のサプライヤーのコンピューティング能力に依存する Fireworks を通じてモデルを利用できるようになります。
「マイクロソフトを通じて、我々はさらに大きなリーチを得ることができる」とQiao氏は語った。
Fireworks を使用すると、開発者は DeepSeek、MiniMax、Z.ai などの中国企業のモデルを簡単に採用できます。昨年発売したOpenAIのオープンウェイトモデルもございます。アイデアは、顧客がフロンティアラボにはない独自のデータを持ち込んで、特定のタスクに対して最先端のパフォーマンスを提供するまでモデルを改良することだ、とQiao氏は述べた。
Anthropic と OpenAI は「一般化されたインテリジェンス」を提供しますが、Fireworks は「特化されたインテリジェンス」を解き放つことができると彼女は言いました。
この議論は、テクノロジー界の有力者らの議論を追いかけている人にとっては馴染み深いものかもしれない。
Microsoftの最高経営責任者（CEO）Satya Nadella氏は日曜のブログ投稿で、「企業はモデルを独自のものにする知識を放棄することなくモデルを使用できるべきだ」と述べた。
ナデラ氏は今月初めにCNBCでパランティアCEOのアレックス・カープ氏の発言に言及していた。
技術顧客は「生産手段を自分たちが所有していることを知りたがっている」とカー​​プ氏は言う。 「他人に譲渡するものではありません。」
ドルとセントも要素です。仮想通貨取引所運営会社のコインベースは、合理的な場合にはより安価なモデルを採用してきたとCEOのブライアン・アームストロング氏が6月1日の投稿で書いた。
「同等品質の密閉型モデルと比較して、当社のコストは 5 ～ 10 倍安いです」と Qiao 氏は述べています。
元 Meta ディレクターの Qiao 氏と共同創設者 6 名は、2022 年に Fireworks を設立しました。同社の従業員は約 200 名です。喬氏は、2026年末までに従業員数が600人に達すると予想している。
「今年は我々が本格的にアクセルを踏み込む年だ」と喬氏は語った。
Fireworksは4月に元Salesforce幹部のGeorge Huを社長に迎えた。このスタートアップは、何年にもわたって顧客に自らサインアップしてもらってきた後、強力な営業チームを編成する予定だ。新たな資金は、Fireworks がより多くの GPU を入手し、より多くの技術者を雇用するのにも役立ちます。
開発者はリクエストを処理するために Fireworks をますます信頼しています。
チャオ氏によると、Fireworksは現在、1日当たり40兆個のAIトークンを処理しているという。 Googleは5月、自社のAIモデルが開発者向けに1分あたり約190億トークンを処理していることを明らかにしたが、これは1日あたり27兆以上を意味する。 OpenAI は 3 月に、開発者ツールが 1 分あたり 150 億のトークンを処理していると発表しました。これは、1 日あたり約 22 兆個のトークンを処理していることになります。各トークンは 1 つの単語の約 4 分の 3 に相当します。
昨年の時点で、Fireworks の収益の約半分は AI コーディングのスタートアップ Cursor からのもので、同社は OpenAI と Anthropic への依存を減らし、Composer という名前のカスタム モデルを構築しました。
「私たちは現在、はるかに多様化しています」と喬氏は語った。 6月、イーロン・マスク氏のスペースXは600億ドルの株式取引でカーソルを買収することに合意し、取引は今四半期に完了する予定だ。他の Fireworks クライアントには、Elastic、GitLab、MongoDB などがあります。
Atreides Management、Index Ventures、TCV が Fireworks の新しいラウンドを主導しました。 Nvidia も参加し、Evantic と Lightspeed Venture Partners も参加しました。
注目: OpenAI CEO: 中国のオープンソース モデルは非常に良くなっている`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/fireworks-nvidia-cloud-ai-startup-value.html",
    publishedAt: "2026-07-16T13:00:02+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "nvidia-unveils-new-ai-model-and-expands-0a30c903",
    title: "Nvidia unveils new AI model and expands Japan’s physical AI ecosystem",
    titleJa: "Nvidia が新しい AI モデルを発表し、日本の物理 AI エコシステムを拡大",
    summaryJa: "Nvidiaは水曜日、ロボットとビジョンAIエージェント用の新しいAIモデルを発表し、日本の物理AI市場への進出を強化した。同社の新モデルである Cosmos 3 Edge は、システムが物理環境をリアルタイムで認識し、ナビゲートできるように設計された、いわゆるワールド モデルです。 Cosmos 3 Edge is a World モデルは、大規模言語モデル (LLM) と比較して、より広範囲の入力から学習できるシステムです。この展開は、5 月の Cosmos 3 の発売に続くものです。",
    bodyOriginal: `Nvidia unveiled a new AI model for robots and vision AI agents on Wednesday, deepening its push into the physical AI market in Japan.
The company's new model, Cosmos 3 Edge, is a so-called world model, designed to help systems perceive and navigate physical environments in real time. Cosmos 3 edge is a World models are systems that can learn from a wider range of inputs compared to large language models (LLMs). The rollout follows the launch of Cosmos 3 in May.
The regional expansion takes center stage during CEO Jensen Huang's two-day visit to Japan, where the Silicon Valley chip giant is expanding its physical AI footprint by forming a coalition that local industrial giants, including Fujitsu, Hitachi, and Kawasaki Heavy Industries, intend to join, according to Nvidia.
"The next frontier of AI is in the physical world, and this is a once-in-a-generation opportunity for Japan," Nvidia CEO Jensen Huang said in a Wednesday statement. "Japan invented modern manufacturing. Now, it has the opportunity to reinvent it for the age of intelligent industries."
The tech giant's partnership with Japanese firms comes just months after Microsoft's $10 billion investment in the country, which aims to build out AI infrastructure and beef up cybersecurity. Japanese investment giant SoftBank has bet heavily on the boom in AI. It's looking to partner with Microsoft and Sakura Internet to develop AI in Japan.
Japan's AI market is expected to reach $27.9 billion by 2029, opening doors for U.S. firms to invest, according to the International Trade Administration. This growth is driven by Tokyo's active push to promote AI adoption across industries, coupled with the eagerness of local firms to forge international partnerships.
Ajay Rajadhyaksha, global chairman of research at Barclays, told CNBC last month that the country holds an advantage in Asia, driven by its diverse AI and clean structural growth stories.
Nvidia's partnership push
Nvidia is also aggressively expanding its AI footprint into Japan's healthcare and biotechnology sectors by extending its reach into agentic AI for advanced sciences through new drug discovery and medical robotics initiatives.
When it comes to agentic AI, Nvidia highlighted the ongoing expansion of Tokyo-1, the AI drug discovery consortium operated by Xeureka, a Mitsui subsidiary. The platform, which has steadily grown since its initial announcement in 2023, is powered by the Nvidia BioNeMo Agent Toolkit, a platform for accelerating autonomous AI drug discovery.
Japan's pharmaceutical heavyweights are already scaling their involvement. Major drugmakers, including Astellas Pharma Inc, Daiichi Sankyo, and Ono Pharmaceutical are utilizing Nvidia's specialized biology toolkit to streamline their workflows, the U.S. company said in a blog post.
Beyond biotech, Nvidia said it is making inroads into industrial automation through a partnership with Kawasaki Heavy Industries.`,
    bodyJa: `Nvidiaは水曜日、ロボットとビジョンAIエージェント用の新しいAIモデルを発表し、日本の物理AI市場への進出を強化した。
同社の新モデルである Cosmos 3 Edge は、システムが物理環境をリアルタイムで認識し、ナビゲートできるように設計された、いわゆるワールド モデルです。 Cosmos 3 Edge is a World モデルは、大規模言語モデル (LLM) と比較して、より広範囲の入力から学習できるシステムです。この展開は、5 月の Cosmos 3 の発売に続くものです。
Nvidiaによると、最高経営責任者（CEO）のジェンスン・ファン氏の2日間の来日では、この地域拡大が中心的な舞台となる。NVIDIAによると、シリコンバレーのチップ大手は連合を形成することで物理的なAIのフットプリントを拡大しており、富士通、日立、川崎重工業など地元の大手産業も参加する予定だという。
「AIの次のフロンティアは物理世界にあり、これは日本にとって一世代に一度のチャンスだ」とNVIDIAのCEO、ジェンセン・ファン氏は水曜日の声明で述べた。 「日本は近代的な製造業を発明しました。今、日本はインテリジェント産業の時代に向けて製造業を再発明する機会に恵まれています。」
このテクノロジー巨人と日本企業との提携は、AIインフラの構築とサイバーセキュリティの強化を目的としたマイクロソフトの日本への100億ドル投資からわずか数カ月後に行われた。日本の投資大手ソフトバンクはAIブームに大きく賭けている。同社はマイクロソフトやさくらインターネットと提携して日本でAIを開発することを検討している。
国際貿易局によると、日本のAI市場は2029年までに279億ドルに達すると予想されており、米国企業の投資に扉が開かれている。この成長は、業界全体で AI 導入を推進する東京の積極的な推進と、国際的なパートナーシップを築こうとする地元企業の熱意によって推進されています。
バークレイズのリサーチ部門グローバルチェアマンであるアジャイ・ラジャディヤクシャ氏は先月CNBCに対し、バークレイズは多様なAIとクリーンな構造成長ストーリーによってアジアでは優位性を保っていると語った。
Nvidia のパートナーシップ推進
Nvidia はまた、新薬発見や医療ロボットの取り組みを通じて先端科学向けのエージェント AI にも範囲を広げ、日本のヘルスケアおよびバイオテクノロジー分野への AI のフットプリントを積極的に拡大しています。
エージェント AI に関して、NVIDIA は、三井物産の子会社である Xeureka が運営する AI 創薬コンソーシアムである Tokyo-1 の継続的な拡大を強調しました。このプラットフォームは、2023 年の最初の発表以来着実に成長しており、自律 AI 創薬を加速するプラットフォームである Nvidia BioNeMo エージェント ツールキットを利用しています。
日本の製薬大手はすでに関与を拡大している。アステラス製薬、第一三共、小野薬品工業などの大手製薬会社は、ワークフローを合理化するためにNVIDIAの特殊な生物学ツールキットを利用していると米国企業がブログ投稿で述べた。
Nvidiaは、バイオテクノロジーを超えて、川崎重工業との提携を通じて産業オートメーションにも進出していると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/nvidia-reveals-new-ai-model-and-expands-japans-physical-ai-ecosystem.html",
    publishedAt: "2026-07-16T12:55:07+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "tiktok-faces-ofcom-investigation-over-ch-91eb89c2",
    title: "TikTok faces Ofcom investigation over child age checks",
    titleJa: "TikTok、児童の年齢確認を巡りOfcomの捜査に直面",
    summaryJa: "TikTok、児童の年齢確認を巡りOfcomの捜査に直面- 公開されました",
    bodyOriginal: `TikTok faces Ofcom investigation over child age checks
- Published
An investigation has been launched into whether TikTok is doing enough to keep children off its platform.
The probe by media regulator Ofcom comes a month after the UK government announced that under-16's would be banned entirely from a range of platforms.
Ofcom will examine how the video-sharing app assesses if a user is a child and whether it has adequate systems to prevent children from viewing harmful content.
"We're confident that we meet our Online Safety Act obligations and will work with Ofcom to demonstrate it," a TikTok spokesperson said.
It follows a review by regulator in May which criticised the platform for not being "safe enough" for children and called for stronger action on children's online safety.
Kate Davies, Ofcom's group director for strategy and research told BBC's Today programme: "This is where TikTok comes in. We found that some method of age checks being used by social media are not working well enough".
At the heart of the regulator's probe into the platform is its use of technology known as "age inference".
This essentially relies on estimating how old a user is based on how they use the platform, such as the videos they watch or others they interact with.
Davies said Ofcom had "serious doubts" over whether such tools are good enough at checking the age of users.
The regulator requires social media platforms, among others, to use "highly effective" methods to check users are old enough to use them and prevent children from seeing harmful material.
"We have very serious questions about whether age inference can be highly effective," she said.
But a TikTok spokesperson said: "We strictly enforce age-appropriate experiences through expert-informed platform rules and advanced age inference technologies, in line with major industry peers."
They said the company had invested "billions" in online safety since launching in the UK eight years ago.
Age check enforcement
Ofcom's review of TikTok's age checks are part of a broader clampdown on sites failing to prevent children encountering adult content, such as pornography, and other harmful material.
Under the Online Safety Act's (OSA) protection of children's codes, which took effect on 25 July last year, sites with such content must use methods such as face scans to check a UK visitor is over the age of 18.
But the regulator has since had to take action, including issuing large fines, against dozens of adult sites over suspected or proven non-compliance.
Its investigation into TikTok shows scrutiny is now being stepped up for social media sites.
TikTok is not alone in using so-called age inference tech, with Instagram also deploying it among other methods to identify where a person might be a child lying about their age.
The platform says UK users are placed into an age-appropriate experience for under-18s by default until they are understood to be an adult.
It says people who fail to enter a date of birth that puts them over the age of 13 when they create an account are prohibited from making a new one, for instance by trying to enter a different date of birth.
Further questions
Andy Burrows, chief executive of the Molly Rose Foundation (MRF), welcomed Ofcom's investigation.
He criticised TikTok for what he called "egregious failures" to prevent children from "being exposed to a tsunami of harmful content".
The charity, set up by the family of Molly Russell - who took her own life at the age of 14 after viewing self-harm and suicide content on social media - cited its own research which found many teens were seeing high-risk content on TikTok.
But Burrows said any investigation must also deal with the site's "blatant failure to clean up its toxic algorithms and comply with child safety duties".
The BBC has approached TikTok for a response.
Rebecca Smart, criminal lawyer and online safety expert at law firm Payne Hicks Beach, said the OSA had clearly "made some headway" in protecting children.
But she said "the current enforcement regime may not provide a strong enough deterrent to drive full compliance".
"There should be severe penalties for services that do not have appropriate age checks in place to protect these children," she said.
"Without stronger accountability and enforcement, children will remain vulnerable to online harms that the OSA was designed to prevent."
Related topics
- Published24 July 2025
- Published21 May
- Published1 day ago`,
    bodyJa: `TikTok、児童の年齢確認を巡りOfcomの捜査に直面
- 公開されました
TikTokが子どもたちをプラットフォームから遠ざけるのに十分な措置を講じているかどうかについて調査が開始された。
メディア規制当局オフコムによるこの調査は、英国政府が16歳未満の利用をさまざまなプラットフォームから完全に禁止すると発表してから1か月後に行われた。
Ofcomは、ビデオ共有アプリがユーザーが子供であるかどうかをどのように評価するか、また子供が有害なコンテンツを閲覧するのを防ぐ適切なシステムがあるかどうかを調査する。
TikTokの広報担当者は「当社はオンライン安全法の義務を遵守していると確信しており、Ofcomと協力してそれを証明するつもりだ」と述べた。
これは、このプラットフォームが子供にとって「十分に安全」ではないと批判し、子供のオンライン安全性に対するより強力な措置を求めた5月の規制当局による審査に続くものである。
Ofcomの戦略・調査グループディレクターのケイト・デイビス氏はBBCのトゥデイ番組で、「ここでTikTokの出番だ。ソーシャルメディアで使われている年齢チェックの一部の方法が十分に機能していないことがわかった」と語った。
規制当局によるプラットフォーム調査の核心は、「年齢推論」として知られる技術の利用だ。
これは基本的に、ユーザーが視聴するビデオや他のユーザーと対話するなど、プラットフォームの使用方法に基づいてユーザーの年齢を推定することに依存しています。
デービス氏は、オフコムはこうしたツールがユーザーの年齢を確認するのに十分であるかどうかについて「深刻な疑問」を抱いていると述べた。
規制当局はソーシャルメディアプラットフォームなどに対し、ユーザーがソーシャルメディアを使用できる年齢に達しているかを確認し、子どもが有害なコンテンツを見ないようにするための「非常に効果的な」方法を使用するよう求めている。
「年齢推定が非常に効果的であるかどうかについて、私たちは非常に深刻な疑問を抱いています」と彼女は言う。
しかし、TikTokの広報担当者は「当社は、主要な同業他社と同様に、専門家に基づいたプラットフォームルールと高度な年齢推論技術を通じて、年齢に応じた体験を厳格に施行している」と述べた。
彼らは、同社が8年前に英国で立ち上げて以来、オンラインの安全性のために「数十億」を投資してきたと述べた。
年齢確認の実施
TikTokの年齢確認に関するOfcomの見直しは、児童がポルノなどのアダルトコンテンツやその他の有害なコンテンツに遭遇することを防止できていないサイトに対する広範な取り締まりの一環である。
昨年 7 月 25 日に発効したオンライン安全法 (OSA) による児童コードの保護に基づき、そのようなコンテンツを含むサイトは英国の訪問者が 18 歳以上であることを確認するために顔スキャンなどの方法を使用する必要があります。
しかし、規制当局はその後、違反の疑いまたは証明された違反を理由に、数十のアダルトサイトに対して多額の罰金を課すなどの措置を講じなければならなくなった。
TikTokに対する同社の調査は、ソーシャルメディアサイトに対する監視が強化されていることを示している。
いわゆる年齢推論技術を利用しているのはTikTokだけではなく、インスタグラムも年齢を偽っている人物が子供である可能性を特定する他の方法の一つとしてこの技術を導入している。
同プラットフォームによると、英国のユーザーはデフォルトで18歳未満に対して、成人であることが理解されるまで年齢に応じたエクスペリエンスが提供されるという。
アカウント作成時に13歳以上の生年月日を入力しなかった場合、別の生年月日を入力するなどして新たにアカウントを作成することは禁止されるという。
さらに質問
モリー・ローズ財団（MRF）の最高責任者、アンディ・バローズ氏はオフコムの調査を歓迎した。
同氏は、子供たちが「有害なコンテンツの津波にさらされる」のを防ぐための「ひどい失敗」だとTikTokを批判した。
ソーシャルメディアで自傷行為や自殺コンテンツを閲覧した後、14歳で自ら命を絶ったモリー・ラッセルさんの遺族が設立したこの慈善団体は、多くの十代の若者がTikTokでリスクの高いコンテンツを見ているという独自の調査を引用した。
しかし、バロウズ氏は、いかなる捜査も同サイトの「有害なアルゴリズムを一掃し、児童の安全義務を遵守していない明らかな失敗」にも対処しなければならないと述べた。
BBCはTikTokに返答を求めた。
法律事務所ペイン・ヒックス・ビーチの刑事弁護士でオンライン安全の専門家でもあるレベッカ・スマート氏は、OSAが子どもの保護に関して明らかに「ある程度前進した」と述べた。
しかし彼女は、「現在の執行体制は、完全な遵守を推進するのに十分な強力な抑止力を提供しない可能性がある」と述べた。
「これらの子供たちを保護するために適切な年齢確認を実施していないサービスには厳しい罰則を設けるべきだ」と彼女は述べた。
「より強力な説明責任と執行がなければ、子どもたちはOSAが防止するように設計されたオンライン上の危害に対して脆弱なままになるでしょう。」
関連トピック
- 2025 年 7 月 24 日発行
- 5 月 21 日公開
- 1 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce8l1zk9dk9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-16T11:08:33+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c060/live/299cb270-80e4-11f1-a5c2-db1656c1a0a8.jpg",
    readTime: 6,
  },
  {
    id: "u-s-grocery-slowdown-deepens-as-shoppers-f519137a",
    title: "U.S. grocery slowdown deepens as shoppers buy fewer items, raising pressure on food companies",
    titleJa: "買い物客の購入品数減少で米国の食料品不況が深刻化し、食品会社への圧力が高まる",
    summaryJa: "米国の食料品の減速は無視できなくなってきている。買い物客は1年前に比べて購入する品物が減り、販売単価の低迷が価格上昇を上回っているため、食料品の売上高は減少している。これは、CNBCと独占的に共有されたニールセンIQ食料品データを使用したベイン・アンド・カンパニーの新しい分析によるものです。",
    bodyOriginal: `The U.S. grocery slowdown is becoming harder to ignore.
Shoppers are buying fewer items than a year ago, and grocery sales are declining as weakening unit sales are now outweighing rising prices. That is according to new analysis from Bain & Company using NielsenIQ grocery data shared exclusively with CNBC.
Grocery units, which refer to individual items or products sold, fell 1.8% in June from a year earlier, a sharp reversal from the 0.1% year-over-year growth recorded in June 2025. While prices continue to rise about 2% to 3% year-over-year, that inflation cushion for the industry is no longer enough to keep overall sales growing.
"That big grocery stock up trip that costs you $300 in 2019, now costing you $400," said Kurt Grichel, head of Bain's Americas retail practice.
"Even that upper-income consumer, you're talking a big enough absolute dollar change that people start to feel a little bit of that sticker shock and start to shop around," said Grichel.
Rather than one economic shock, Bain suggests several pressures have converged on consumers.
Grocery prices are roughly 33% higher than they were in 2019 and fuel costs have spiked. Many lower-income households have also had to cut back spending due to reduced SNAP benefits and tighter program eligibility.
Bain's U.S. Consumer Pulse Wave survey conducted in May found 80% of Americans are still trying to spend less, while 28% are actively cutting back on grocery spending. Among those shoppers, 56% said they are trading down to cheaper brands, 49% said they are buying fewer items and 44% said they are relying more heavily on coupons and promotions.
Those trends are having ripple effects for producers. PepsiCo is one of the food manufacturers feeling the consumer shift.
During its second quarter reported on Thursday, the beverage and snack maker said North American demand weakened. North America food revenue fell 2%, while volume was flat.
"I think the consumer is worse than what we had anticipated, and it's driven mainly by gas prices," said PepsiCo CEO Ramon Laguarta during the company's conference call with investors.
Executives also pointed to lower effective pricing, indicating the company increased promotional activity as consumers became more price sensitive.
Those results align with a broader shift across the grocery industry, where retailers including Walmart and Kroger have emphasized price cuts and value-focused promotions to attract shoppers.
Walmart announced summer price cuts to beef, ice cream and other items including products made by PepsiCo, Coca-Cola and the company's own private label Great Value.
"The grocers have been pushing back on the suppliers to reduce prices where possible, and the suppliers recognize the need to do so," said Telsey Advisory Group analyst Joe Feldman.
"The entire industry is trying to get back to unit growth, not just dollar growth."
Bain said that strategy may become increasingly important.
"The edge goes to grocers that are priced sharply on the products that customers notice," said Grichel. "Most things like ground beef, chicken, milk, eggs, and they're using a combination of promotions, loyalty programs, personalization, private label to stitch together an overall value proposition that customers can understand and trust."`,
    bodyJa: `米国の食料品の減速は無視できなくなってきている。
買い物客は1年前に比べて購入する品物が減り、販売単価の低迷が価格上昇を上回っているため、食料品の売上高は減少している。これは、CNBCと独占的に共有されたニールセンIQ食料品データを使用したベイン・アンド・カンパニーの新しい分析によるものです。
販売された個々の品目または製品を指す食料品部門は、6月に前年同月比1.8％減少し、2025年6月に記録した前年比0.1％増から大きく反転した。価格は前年比約2％から3％上昇し続けているが、業界のインフレクッションはもはや全体の売上高の成長を維持するには十分ではない。
「2019年には300ドルかかった大規模な食料品買い出し旅行が、現在は400ドルになっている」とベインの南北アメリカ小売業務責任者のカート・グリケル氏は語る。
「高所得層の消費者でさえ、人々がそのステッカーショックを少し感じて買い物をし始めるほど、十分に大きな絶対的なドルの変化を話しているのです」とグリチェル氏は述べた。
ベイン氏は、単一の経済ショックではなく、いくつかの圧力が消費者に集中していることを示唆しています。
食料品価格は2019年と比べて約33％上昇し、燃料費も高騰している。多くの低所得世帯も、SNAP給付金の削減とプログラムの資格の厳格化により、支出を削減する必要に迫られている。
ベインが5月に実施した米国消費者パルスウェーブ調査では、米国人の80％が依然として支出を減らそうと努力しており、28％が食料品の支出を積極的に削減していることが判明した。これらの買い物客のうち、56% がより安価なブランドに買い替えていると回答し、49% が購入する品物が減った、44% がクーポンやプロモーションにもっと依存していると回答しました。
こうした傾向は生産者に波及効果をもたらしている。ペプシコは消費者の変化を感じている食品メーカーの一つだ。
木曜日に報告された第2四半期中に、飲料およびスナックメーカーは北米の需要が弱まったと述べた。北米の食品収益は 2% 減少しましたが、販売量は横ばいでした。
ペプシコのラモン・ラグアルタ最高経営責任者（CEO）は投資家との電話会議で「消費者の状況はわれわれが予想していたよりも悪化していると思う。その原因は主にガソリン価格だ」と語った。
幹部らは実効価格の低下も指摘し、消費者が価格に敏感になるにつれて同社が販促活動を強化したことを示唆している。
これらの結果は、ウォルマートやクローガーなどの小売業者が買い物客を引きつけるために値下げや価値を重視したプロモーションを強調している食料品業界全体の広範な変化と一致している。
ウォルマートは牛肉、アイスクリーム、ペプシコ、コカ・コーラ、自社プライベートブランドのグレート・バリューの製品を含むその他の商品の夏季値下げを発表した。
テルシー・アドバイザリー・グループのアナリスト、ジョー・フェルドマン氏は「食料品店はサプライヤーに対し、可能な限り値下げを要求しており、サプライヤーもそうする必要性を認識している」と述べた。
「業界全体が、金額の伸びだけではなく、単位の伸びを取り戻そうとしているのです。」
ベイン氏は、戦略がますます重要になる可能性があると述べた。
「顧客が注目する商品に大幅な価格を設定する食料品店に優位性がある」とグリチェル氏は語った。 「ひき肉、鶏肉、牛乳、卵などのほとんどの製品は、プロモーション、ロイヤルティ プログラム、パーソナライゼーション、プライベート ラベルを組み合わせて、顧客が理解し、信頼できる全体的な価値提案をつなぎ合わせています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/us-grocery-spending-slows-in-hit-to-food-companies.html",
    publishedAt: "2026-07-16T11:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "who-is-the-frontrunner-to-be-the-uk-s-ne-c0d5de66",
    title: "Who is the frontrunner to be the UK's next chancellor?",
    titleJa: "英国の次期首相の最有力候補は誰?",
    summaryJa: "英国の次期首相の最有力候補は誰?- 公開されました",
    bodyOriginal: `Who is the frontrunner to be the UK's next chancellor?
- Published
Andy Burnham will be moving in to Downing Street on Monday, as he becomes the next UK prime minister following the resignation of Sir Keir Starmer.
But who will live next door in Number 11 as chancellor?
Officially, Burnham's team says no decision has been taken and cabinet position announcements won't be made until Monday.
But that hasn't stopped speculation about who may take on the top Treasury role - and attempts at influencing Burnham's choice in chancellor.
Whoever it is, that person will face quite the in-tray – high debt, low growth, welfare reform, defence spending, and the economic fallout from the US-Israel war with Iran to name a few issues.
Here are the names of those believed to be in the running for the job - and what they could mean for your finances.
Shabana Mahmood
There has been increasing talk of the current home secretary becoming chancellor.
The BBC has been told there are "live discussions" about putting Mahmood in Number 11, while the Financial Times, external is reporting it as a certainty based on three sources close to Burnham.
While she does not have an economics background, she is a senior minister on Labour's right and it may be felt that she could reassure financial markets and smooth the transition to a Burnham government.
Kathleen Brooks, research director at XTB, said the markets were already rallying in relief to reports that Mahmood would become chancellor, with the pound up about 1% against the US dollar this week.
"It tells us two things about Andy Burnham's government: firstly, the market trusts Mahmood to take a sensible approach to economic policy, and to tackle the hard questions of welfare spending, secondly, Burnham is willing to have those to the right of the Labour party in his cabinet in key economic roles," Brooks said.
However, according to separate reports from the Press Association, Mahmood is keen to remain as home secretary and see through changes she has brought in to the asylum system.
Ed Miliband
In late June, Ed Miliband was the bookmakers' strong favourite for the number two job in British politics, with the former Labour party leader politically closer to Burnham than other rivals.
However, opinions differ on whether former Treasury adviser Miliband would receive the backing of the financial markets, which the government depends on to lend money.
Some see Miliband as an inflation risk, believing his drive for net zero as energy secretary as partly responsible for the UK's high energy prices compared to other countries.
Analysts say that reputation, whether accurate or not, could affect how bond markets react to his time as chancellor.
In recent days, several MPs close to Burnham - who have no issues with the energy secretary - believe the likelihood of appointing Miliband has significantly lessened.
But others close to Miliband believe it was both highly possible he would become chancellor, and something that was still wanted.
Yvette Cooper
Foreign Secretary Yvette Cooper could be a surprise compromise pick, and is seen as a potential for chancellor.
She has years of experience in government, serving as chief secretary to the Treasury under Gordon Brown, and sits somewhere in between Miliband and McFadden or Streeting politically.
Danni Hewson, head of financial analysis at financial services firm AJ Bell, calls her a "middle of the road" option but also "a bit more of an unknown".
Wes Streeting
Wes Streeting, a former contender for the Labour leadership, was the early favourite for chancellor, with suggestions that he could be awarded the job for coming out and backing Burnham and withdrawing his own ambitions.
However, economist and cross-bench peer Lord Jim O'Neill, who has been providing advice to Burnham, has warned against this approach.
Lord O'Neill told the BBC the advice he has given Burnham is to "figure out what his priorities are as prime minister before he picks a chancellor".
Though Burnham may appreciate Streeting's backing, the pair's politics differ - with Burnham seen to be inclined to spend more than Streeting.
Simon French, chief economist at consultancy Panmure Liberum, says Streeting is a "relatively market-friendly option" because of his pro-growth comments, but also a political risk because he might someday want to be prime minister.
Pat McFadden
Though seen as a less likely option than Streeting or Miliband, some view Pat McFadden as the most qualified pick, having held shadow Treasury jobs, been a business minister in a previous Labour government, and also being the current work and pensions secretary.
It is his experience in the latter role that could help him to tackle what many say will be any future chancellor's biggest task: welfare reform.
Panmure Liberum's French believes the markets may view McFadden as "the safest pair of hands" out of those in the running and will either react positively or neutrally if he were picked.
But if Burnham is looking for a clean break from the previous government, he will likely overlook the Sir Keir-loyalist.
Rachel Reeves
It's looking increasingly unlikely that the current Chancellor, Rachel Reeves, will keep her job.
A spokesperson for Burnham said no decisions had been made about who he would appoint, but reports suggest Reeves would be replaced and offered a junior or mid-level cabinet position.
Reeves has urged a Burnham-led government to stick to what she is doing because it is "beginning to bear fruit". Burnham has said previously he would stick to Reeves' fiscal rules.
She defended her handling of the UK economy in an interview with the BBC, in which she backed the former Manchester mayor, despite the reports of her potential demotion. She opted to welcome him to parliament in a photoshoot with other MPs and was notably absent from Sir Keir's resignation speech.
Reeves told the British Chambers of Commerce conference she was proud of her record so far but there was "more to do".
And the rest
Then there are the longlist of wildcards.
Former defence secretary John Healey, who very publicly quit because he did not believe the government was spending enough on defence, is another option.
However, Paul Johnson says Burnham would essentially be committing to meeting that spending demand if he chose him.
"If I was Andy Burnham, I would not want to tie myself to that particular pillar that quickly," he said.
Bookmakers and reports also mention chief secretary to the prime minister Darren Jones, who ruled himself out of the running for the leadership, and former chief executive of the Resolution Foundation Torsten Bell as outsiders.
While some politicians are more likely to be hired than others, each one will want the job.
As Lord O'Neil puts it: "The ones whose names are in the papers are the ones who are putting themselves forward."
Related topics
- Published20 hours ago
- Published20 hours ago`,
    bodyJa: `英国の次期首相の最有力候補は誰?
- 公開されました
キーア・スターマー卿の辞任を受けて次期英国首相に就任するアンディ・バーナム氏は、月曜日にダウニング街に引っ越してくる予定だ。
しかし、11番地の隣に誰が首相として住むのでしょうか？
公式には、バーナム氏のチームは何も決定は下されておらず、閣僚の職位発表は月曜日まで行われないと述べている。
しかし、それでも誰が財務省トップの役割を担うかについての憶測や、バーナム氏の首相選びに影響を与えようとする試みは止まらなかった。
それが誰であれ、その人物は、いくつかの問題例を挙げると、高債務、低成長、福祉改革、国防支出、米国とイスラエルの対イラン戦争による経済的影響など、かなりの難題に直面することになるだろう。
以下に、その職に立候補していると考えられる人々の名前と、彼らがあなたの財政に与える影響を示します。
シャバナ・マフムード
現在の内務大臣が首相に就任するという話が増えている。
BBCはマフムードを11番に据えることについて「生の議論」があると伝えられているが、社外のフィナンシャル・タイムズ紙はバーナムに近い3人の情報源に基づいてそれが確実であると報じている。
彼女には経済学の経歴はないが、労働党右派の上級大臣であり、金融​​市場を安心させ、バーナム政権への移行を円滑に進めることができると考えられているのかもしれない。
ＸＴＢのリサーチディレクター、キャスリーン・ブルックス氏は、マフムード氏が首相に就任するとの報道に市場はすでに安堵感から反発しており、今週ポンドは対ドルで約１％上昇したと述べた。
「これはアンディ・バーナム政権について2つのことを物語っている。第1に市場はマフムードが経済政策に対して賢明なアプローチをとり、福祉支出という難しい問題に取り組むと信頼していること、第2にバーナムは労働党の右派の人々を経済の重要な役割に閣内に入れることに意欲的である」とブルックス氏は語った。
しかし、記者協会の別の報道によると、マフムード氏は内務大臣に留まり、彼女が亡命制度にもたらした変化を見届けることに熱心である。
エド・ミリバンド
6月下旬時点では、元労働党党首のエド・ミリバンド氏が他のライバルより政治的にバーナム氏に近いとして、ブックメーカーの英国政界第2位の有力候補となっていた。
しかし、ミリバンド元財務顧問が政府が資金の貸し出しに依存している金融市場の支援を得られるかどうかについては意見が分かれている。
ミリバンド氏をインフレリスクと見なす人もおり、エネルギー長官としてネットゼロを目指す同氏の推進が他国に比べて英国のエネルギー価格の高さの一因であると考えている。
アナリストらは、正確かどうかは別として、評判が同氏の首相時代に対する債券市場の反応に影響を与える可能性があると指摘している。
ここ数日、バーナム氏に近い数人の国会議員は、エネルギー長官と何ら問題を抱えていないが、ミリバンド氏を任命する可能性は大幅に低下したと考えている。
しかし、ミリバンドに近い他の人々は、ミリバンドが首相に就任する可能性が非常に高く、依然として望まれていた人物であると信じている。
イベット・クーパー
イベット・クーパー外相は予想外の妥協案で選ばれる可能性があり、首相候補とみられている。
彼女は政府で長年の経験があり、ゴードン・ブラウンの下で財務長官を務め、政治的にはミリバンドとマクファデンまたはストリートの間のどこかに位置している。
金融サービス会社AJベルの財務分析責任者、ダニー・ヒューソン氏は、彼女のことを「中途半端」な選択肢だが、「もう少し未知数」とも言う。
ウェス・ストリート
労働党指導部の元候補者であるウェス・ストリート氏は、初期の首相候補であり、バーナム氏を名乗り出て支持し、自身の野望を撤回することで首相に就任する可能性があるとの示唆があった。
しかし、バーナム氏にアドバイスを提供してきた経済学者であり、ベンチ外の同業者であるジム・オニール卿は、このアプローチに対して警告している。
オニール卿はBBCに対し、バーナム氏に与えたアドバイスは「首相を選ぶ前に首相としての優先事項が何かを理解すること」だと語った。
バーナムはストリートティングの支援に感謝しているかもしれないが、二人の政策は異なっており、バーナムはストリートティングよりも多額の支出をする傾向があるとみられている。
コンサルティング会社パンミュール・リベルムのチーフエコノミスト、サイモン・フレンチ氏は、成長を支持するコメントをしているため、ストリーティングは「比較的市場に優しい選択肢」だが、いつか首相になりたいと考えているため政治的リスクでもあると語る。
パット・マクファーデン
ストリーティング氏やミリバンド氏に比べて可能性は低いと見られているが、影の財務省の職を歴任し、前労働党政権で経済相を務め、現在は労働年金長官を務めているパット・マクファデン氏が最も適任だと見る人もいる。
後者の役割での彼の経験は、将来の首相の最大の課題であると多くの人が言う福祉改革に取り組むのに役立つ可能性がある。
パンミュール・リベルムのフランス人は、市場はマクファーデンを候補者の中で「最も安全なペア」とみなしている可能性があり、彼が選ばれた場合は肯定的または中立的に反応すると考えている。
しかし、バーナム氏が前政権からの完全な決別を求めているのであれば、キーア卿支持者を無視する可能性が高い。
レイチェル・リーブス
現首相レイチェル・リーブスが職を続ける可能性はますます低くなってきている。
バーナム氏の広報担当者は、誰を任命するかについては何も決定していないと述べたが、報道によると、リーブス氏の後任には若手か中堅の閣僚ポストがオファーされるだろうという。
リーブス氏は、バーナム主導の政府に対して、「成果を上げ始めている」ため、バーナム氏が行っていることを堅持するよう求めた。バーナム氏は以前、リーブス氏の財政ルールを堅持すると述べていた。
彼女はBBCとのインタビューで、降格の可能性があるとの報道にもかかわらず、前マンチェスター市長を支持した英国経済への自身の対応を擁護した。彼女は他の国会議員との写真撮影で彼を議会に迎えることを選択し、特にキア卿の辞任演説には欠席した。
リーブスさんは英国商工会議所の会議で、これまでの実績を誇りに思うが「やるべきことはまだある」と語った。
そして残りは
次に、ワイルドカードの長いリストがあります。
ジョン・ヒーリー元国防長官は、政府が国防に十分な支出をしていないという理由で辞任を公言しているが、もう一つの選択肢である。
しかし、ポール・ジョンソン氏は、バーナム氏が彼を選んだ場合、本質的にその支出需要を満たすことにコミットするだろうと述べている。
「もし私がアンディ・バーナムだったら、そんなにすぐにその特​​定の柱に自分を結びつけたくないだろう」と彼は言った。
ブックメーカーや報道では、党首選に立候補しないことを辞退したダレン・ジョーンズ首相の首席秘書官や、レゾリューション財団の元最高経営責任者トーステン・ベル氏も部外者として言及されている。
一部の政治家は他の政治家よりも採用される可能性が高いが、それぞれがその職を望むだろう。
オニール卿はこう述べています。「新聞に名前が載っている人は、自分自身を名乗り出ている人です。」
関連トピック
- 20 時間前に公開
- 20 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c36yj4pn7jdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-16T10:03:05+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/78fd/live/b69ee8d0-80f0-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 8,
  },
  {
    id: "tsmc-to-invest-additional-100-billion-in-2e035819",
    title: "TSMC to invest additional $100 billion in Arizona after second-quarter profit soars 77%",
    titleJa: "TSMC、第2四半期の利益が77％急増したことを受け、アリゾナ州に追加1000億ドル投資へ",
    summaryJa: "台湾積体電路製造は木曜日、第2四半期の利益が前年同期比77.4％増加したと報告し、世界最大の受託チップメーカーが連続記録破りのマイルストーンを達成し続ける中、過去の予想を大幅に上回った。以下は、LSEG SmartEstimates に対する TSMC の第 2 四半期の結果です。より一貫して正確なアナリストの予測を重視しています。",
    bodyOriginal: `Taiwan Semiconductor Manufacturing Co on Thursday reported a 77.4% jump in second-quarter profit year on year, soaring past estimates as the world's largest contract-chipmaker continues to set consecutive record-breaking milestones.
Here are TSMC's second-quarter results against LSEG SmartEstimates, which are weighted toward forecasts from analysts who are more consistently accurate:
- Revenue: 1.27 trillion new Taiwan dollars ($39.45 billion ) vs. NT$1.264 trillion expected
- Net income: NT$706.56 billion vs. NT$632.64 billion expected
The company forecast third-quarter revenue between $44.6 billion and $45.8 billion, with operating profit margin of 56% to 58%. "AI related demand continues to be extremely robust," said TSMC Chairman C.C. Wei.
TSMC will invest an additional $100 billion in Arizona to meet strong customer demand, bringing its total investment in the state to $265 billion, Wei added.
"This is to build several or more semiconductor logical wafer fab for two nanometer MP [mass production] technologies, as well as advanced packaging fabs to support the strong multi-year demand from our leading U.S. customers," Wei added.
The company also raised its budget to between $60 billion and $64 billion for this year as it continues to invest heavily to support customers' growth, said CFO Wendell Huang.
The Taiwanese tech giant's net income for the three months ended in June came in at a record high for a fifth consecutive quarter, and surged 23.4% from the prior quarter.
TSMC is sitting on real leverage but choosing not to fully use it, said Sravan Kundojjala, an analyst at SemiAnalysis. "Net, they have far more pricing power than they are currently exercising," Kundojjala said, adding that while the chipmaker is capturing more value through selective price increases, it remains deliberate rather than opportunistic to keep margins healthy without squeezing customers.
Kundojjala said that the memory boom is now squeezing TSMC's non-AI business. "Consumer and price-sensitive end markets took a hit from rising memory prices and tight component supply.
Revenue surged to NT$1.27 trillion, a 36% jump from NT$933.79 billion in the same period year ago. Advanced technologies — 7-nanometer and under — accounted for 77% of total wafer revenue, the company said.
The 5-nanometer process technology accounted for 33% of TSMC's second-quarter revenue, followed by 3-nanometer at 30%, Huang said in the earnings call Thursday.
For 2026 revenue by platform, the company said high-performance computing accounted for 66% of its revenue, followed by smartphones at 22% and Internet of Things at 5%.
Asia's most valuable company that has been riding robust demand for AI chips it manufactures for global tech giants, including Nvidia, Apple and Broadcom saw shares gain 1.23% Thursday. The stock has risen over 58% so far this year.`,
    bodyJa: `台湾積体電路製造は木曜日、第2四半期の利益が前年同期比77.4％増加したと報告し、世界最大の受託チップメーカーが連続記録破りのマイルストーンを達成し続ける中、過去の予想を大幅に上回った。
以下は、LSEG SmartEstimates に対する TSMC の第 2 四半期の結果です。より一貫して正確なアナリストの予測を重視しています。
- 収益: 1 兆 2,700 億新台湾ドル (394 億 5,000 万ドル) 対 予想 1 兆 2,640 億台湾ドル
- 純利益: 7,065.6億台湾ドル、予想6,326.4億台湾ドル
同社は第３・四半期の売上高が４４６億─４５８億ドル、営業利益率が５６─５８％になると予想している。 TSMCのC.C.会長は「AI関連の需要は引き続き非常に堅調だ」と述べた。魏。
TSMCは顧客の強い需要に応えるためにアリゾナ州にさらに1000億ドルを投資し、同州への総投資額は2650億ドルになるとウェイ氏は付け加えた。
「これは、2ナノメートルMP（量産）技術に対応した複数の半導体論理ウェーハ工場と、米国の主要顧客からの数年にわたる強い需要をサポートするための高度なパッケージング工場を建設することです」と魏氏は付け加えた。
同社はまた、顧客の成長を支援するために多額の投資を継続するため、今年の予算を600億ドルから640億ドルに引き上げたとCFOのウェンデル・ファン氏は述べた。
台湾のハイテク大手の6月までの3カ月間の純利益は5四半期連続で過去最高を記録し、前四半期比23.4％増加した。
セミアナリシスのアナリスト、スラバン・クンドジャラ氏は、TSMCは実際のレバレッジを活用しているが、それを完全には活用しないことを選択していると述べた。 「正味、彼らは現在行使しているよりもはるかに大きな価格決定力を持っている」とクンドジャラ氏は述べ、半導体メーカーは選択的な値上げを通じてより多くの価値を獲得しているが、顧客を圧迫することなくマージンを健全に保つために日和見的ではなく計画的に取り組んでいると付け加えた。
クンドジャラ氏は、メモリブームが現在、TSMCの非AI事業を圧迫していると述べた。 「消費者市場と価格に敏感な最終市場は、メモリ価格の上昇と部品供給の逼迫により打撃を受けました。
売上高は1兆2700億台湾ドルに急増し、前年同期の9337億9000万台湾ドルから36％増加した。同社によると、7ナノメートル以下の先端技術がウェーハ総収益の77％を占めたという。
Huang氏は木曜日の決算会見で、TSMCの第2四半期売上高の33％を5ナノメートルプロセス技術が占め、次いで3ナノメートルが30％となったと述べた。
同社は、2026年のプラットフォーム別収益について、ハイパフォーマンスコンピューティングが収益の66％を占め、スマートフォンが22％、モノのインターネットが5％と続くと述べた。
Nvidia、Apple、Broadcomを含む世界的なハイテク大手向けに製造するAIチップの堅調な需要に乗り続けているアジアで最も価値のある企業の株価は木曜日に1.23%上昇した。株価は年初から５８％以上上昇している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/16/tsmc-second-quarter-profit-.html",
    publishedAt: "2026-07-16T08:24:49+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
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
