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
    id: "mcdonald-s-admits-its-value-meals-have-b-0f2ec7a1",
    title: "McDonald’s admits its value meals have become too confusing",
    titleJa: "マクドナルド、バリューミールがあまりにもわかりにくくなっていると認める",
    summaryJa: "このファストフードチェーンは、一度にあまりに多くのプロモーションを実施すると、スタッフと顧客の両方に混乱が生じたと述べた。",
    bodyOriginal: `The fast-food chain said too many promotions at once led to confusion for staff and customers alike.`,
    bodyJa: `このファストフードチェーンは、一度にあまりに多くのプロモーションを実施すると、スタッフと顧客の両方に混乱が生じたと述べた。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/mcdonalds-admits-its-value-meals-have-become-too-confusing-dc076468?mod=mw_rss_topstories",
    publishedAt: "2026-08-04T19:24:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-44634285",
    readTime: 2,
  },
  {
    id: "my-head-hit-the-driver-s-window-a-teena-71662b24",
    title: "‘My head hit the driver’s window’: A teenager T-boned our car. Will Medicare pay my hospital bills?",
    titleJa: "「運転席の窓に頭が当たりました」: 10 代の少年が私たちの車に T ボーンを加えました。メディケアは私の病院代を支払ってくれますか?",
    summaryJa: "「私の車は20年近く前のもので、衝突補償ではなく、賠償責任と無保険運転者補償のみを付帯していました。」",
    bodyOriginal: `“My car was nearly 20 years old, and I only carried liability and uninsured motorist coverage, not collision coverage.”`,
    bodyJa: `「私の車は20年近く前のもので、衝突補償ではなく、賠償責任と無保険運転者補償のみを付帯していました。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-head-hit-the-drivers-window-a-teenager-t-boned-our-car-will-medicare-pay-my-hospital-bills-0552d90d?mod=mw_rss_topstories",
    publishedAt: "2026-08-04T19:15:00+00:00",
    category: "自動車",
    imageUrl: "https://images.mktw.net/im-92089659",
    readTime: 2,
  },
  {
    id: "oil-prices-fall-on-hopes-strait-of-hormu-3d369f3a",
    title: "Oil prices fall on hopes Strait of Hormuz could reopen",
    titleJa: "ホルムズ海峡再開への期待で原油価格下落",
    summaryJa: "ホルムズ海峡再開への期待で原油価格下落- 公開されました",
    bodyOriginal: `Oil prices fall on hopes Strait of Hormuz could reopen
- Published
Oil prices fell to a three-week low on Tuesday as senior US officials raised hopes of a deal with Iran to reopen the key Strait of Hormuz waterway.
US Secretary of State Marco Rubio and Treasury Secretary Scott Bessent both announced talks had progressed to allow shipments to potentially resume as soon as this week.
The cost of a barrel of Brent crude, the global benchmark for oil prices, fell by almost 5% to under $80 (£60) on the news of supply disruptions potentially being eased.
But the failure of previous negotiations in recent months to de-escalate the conflict between the US and Iran has led to a volatile oil market, with drivers ultimately being hit by higher fuel prices at the pumps.
On Tuesday, along with the drop in Brent crude, US West Texas Intermediate prices were down more than 5%, to $76 a barrel. Both contracts dropped to their lowest levels since 13 July.
Rubio said there had been progress made in discussions on getting more ships through the strait with Iran and Oman.
"There's been progress made in those talks, but not finality yet. We're hoping that will happen very shortly," he told reporters at the State Department.
Bessent said a deal to reopen the Strait of Hormuz could be agreed as soon as Tuesday or Wednesday.
There was a "chance we may have a deal today or tomorrow to open the strait and move towards a more normalized position in this conflict," he told CNBC.
"It would be freedom of movement," he added, when asked whether Iran would be allowed to charge for ships passing through.
While senior figures in the US government have announced talks have been progressing, no details of what a potential deal may look like have been released.
Iran has said it is not negotiating with the US - and has no plans to do so - and is instead talking to Oman.
A spokesman for Iran's foreign ministry said that talks with Oman, a mediator in negotiations, on a new mechanism for vessels going through the Strait, had been positive.
Qatar, which is a key mediator between Washington and Tehran, said it was continuing efforts with other mediators to try to achieve a diplomatic resolution to the war, but admitted no direct talks were currently planned.
The Strait of Hormuz has been a central point in negotiations between the US and Iran. Before the conflict began in late February, the waterway handled about one-fifth of global daily oil and liquefied natural gas supplies.
Iran has halted most traffic through the Strait since the conflict began, while the US has also imposed a naval blockade of Iranian ports in the region.
Another blockade is in place on Saudi Arabia's ports in the Red Sea, imposed by Yemen's Iran-backed Houthis since 20 July.
The route had become a crucial alternative since Iran blocked the strait, but it has become increasingly dangerous, with a spate of attacks on vessels reported in the past week.
On Tuesday, a projectile sank an Indian-flagged vessel near Yemeni waters, the India's shipping minister said, with all 14 on board rescued.
Analysts believe the threat to ships carrying oil in the Middle East is at its worst since the Iran war started.
"Investors are acutely aware of how many times we've already been at this point in the war and how fragile the process of securing lasting agreements can be," said Danni Hewson, head of financial analysis at AJ Bell.
The disruption has sent prices at the pumps up across the world. In the UK petrol prices are now at levels seen at the start of the conflict, with the average cost of a litre of petrol hitting £1.60, according to the RAC motoring group.
In the US, gasoline prices are on average above $4 a gallon, according to the AAA. Diesel is almost $5.40 a gallon.
Prices have surged to above $120 when the conflict has escalated and plunged in response to previous talks suggesting a breakthrough.
The elevated prices have led to major oil companies, such as BP, Shell, Chevron and Exxon Mobil, to report bumper profits.
However, Hewson added that despite the huge revenues, oil companies were "at the mercy" of US President Donald Trump's "machinations".
On Monday, Trump warned Iran faced its "last chance" to agree a deal to allow commercial shipping to resume in the Strait.
He said he had called off "massive" strikes on the country for talks to resume.
US stock markets were trading higher on Tuesday following news of the negotiations lowering oil prices and also in response to corporate results related to Artificial Intelligence.
Investors have experienced jitters on Wall Street as results from Big Tech firms indicate spending on the technology is set to continue to soar.
Related topics
- Published14 July`,
    bodyJa: `ホルムズ海峡再開への期待で原油価格下落
- 公開されました
米国高官らが重要なホルムズ海峡水路の再開に向けたイランとの合意への期待を高めたため、火曜日、原油価格は３週間ぶりの安値に下落した。
マルコ・ルビオ米国務長官とスコット・ベッセント財務長官はいずれも、今週にも出荷を再開できる可能性がある方向で協議が進展したと発表した。
原油価格の世界的な指標であるブレント原油の１バレルの価格は、供給混乱が緩和される可能性があるというニュースを受けて、ほぼ５％下落し、８０ドル（６０ポンド）未満となった。
しかし、ここ数カ月の米国とイランの紛争沈静化に向けたこれまでの交渉の失敗により、石油市場は不安定になり、ドライバーは最終的に燃料価格の高騰に見舞われている。
火曜日、ブレント原油の下落に伴い、米国ウェスト・テキサス・インターミディエイトの価格は5%以上下落し、1バレルあたり76ドルとなった。両契約とも7月13日以来の最低水準に下落した。
ルビオ氏は、イランおよびオマーンとの海峡通過をさらに増やすための協議で進展があったと述べた。
同氏は国務省で記者団に対し、「協議には進展があったが、まだ最終決定には至っていない。われわれはそれが近いうちに実現することを期待している」と述べた。
ベッセント氏は、ホルムズ海峡再開に向けた協定は早ければ火曜日か水曜日にも合意される可能性があると述べた。
同氏はCNBCに対し、「今日か明日、海峡を開放し、この紛争におけるより正常化された立場に向けて合意に達する可能性がある」と語った。
イランが船舶の通行に料金を課すことを許されるかとの質問に対し、同氏は「移動の自由だ」と付け加えた。
米政府高官らは協議が進展していると発表しているが、潜在的な合意がどのようなものになるかについての詳細は明らかにされていない。
イランは米国とは交渉しておらず、その予定もないとし、代わりにオマーンと交渉していると述べた。
イラン外務省報道官は、海峡を航行する船舶のための新たなメカニズムに関する交渉の仲介者であるオマーンとの協議は前向きなものだったと述べた。
米国とイランの間の主要な仲介者であるカタールは、戦争の外交的解決を目指して他の調停者と努力を続けていると述べたが、現時点で直接交渉の予定はないと認めた。
ホルムズ海峡は米国とイランの交渉の中心となっている。 2月下旬に紛争が始まる前、この水路は世界の毎日の石油と液化天然ガス供給量の約5分の1を扱っていた。
イランは紛争が始まって以来、海峡を通る交通の大部分を停止しており、米国も同地域のイランの港を海上封鎖している。
7月20日以来、イエメンのイランが支援するフーシ派によって、紅海にあるサウジアラビアの港で新たな封鎖が実施されている。
イランが海峡を封鎖して以来、この航路は重要な代替手段となっていたが、ここ１週間で船舶への攻撃が相次いで報告されており、危険性は増している。
インド海運大臣は、火曜日、イエメン海域近くで飛翔体によりインド船籍の船舶が沈没し、乗組員14名全員が救助されたと発表した。
アナリストらは、中東で石油を運ぶ船舶に対する脅威はイラン戦争勃発以来最悪だとみている。
ＡＪベルの財務分析責任者、ダニー・ヒューソン氏は「投資家は、われわれが戦争のこの時点ですでに何度も経験していること、そして永続的な合意を確保するプロセスがいかに脆弱なものであるかを痛感している」と述べた。
この混乱により、世界中で価格が高騰しました。 RAC自動車グループによると、英国ではガソリン価格は現在、紛争が始まった頃の水準にあり、ガソリン1リットルの平均価格は1.60ポンドに達している。
AAA によると、米国のガソリン価格は平均して 1 ガロンあたり 4 ドルを超えています。ディーゼルは1ガロンあたり約5.40ドルです。
紛争が激化すると価格は120ドル以上に急騰し、打開を示唆する前回の協議を受けて急落した。
価格の高騰により、BP、シェル、シェブロン、エクソンモービルなどの大手石油会社は莫大な利益を報告している。
しかしヒューソン氏は、巨額の収益にもかかわらず、石油会社はドナルド・トランプ米大統領の「陰謀」に「翻弄されている」とも付け加えた。
トランプ大統領は月曜日、イランは海峡での商船再開を認める協定に合意する「最後のチャンス」に直面していると警告した。
同氏は、協議再開に向けた同国への「大規模な」攻撃を中止したと述べた。
火曜日の米国株式市場は、原油価格引き下げ交渉のニュースや人工知能関連の企業決算を受けて上昇した。
大手ハイテク企業の調査結果がテクノロジーへの支出が今後も高騰することを示しているため、投資家はウォール街で不安を感じている。
関連トピック
- 7 月 14 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cpw9v0gnzxwo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-04T19:00:43+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5e55/live/0e092f10-9012-11f1-aabc-c3c7aa714117.jpg",
    readTime: 5,
  },
  {
    id: "oil-prices-tumble-after-bessent-says-str-f47bfb74",
    title: "Oil prices tumble after Bessent says Strait of Hormuz deal may come this week",
    titleJa: "ベッセント氏がホルムズ海峡合意が今週実現する可能性があると発言後、原油価格が下落",
    summaryJa: "スコット・ベッセント財務長官が、早ければ今週中にもホルムズ海峡を開通させる合意が得られる可能性があると示唆したことを受け、火曜日、原油価格が急落した。国際石油指標であるブレント原油は5.3％下落し、1バレル＝79.36ドルで取引を終えた。ウェスト・テキサス・インターミディエイト先物は５．７％下落し、７５．７７ドルで決済された。",
    bodyOriginal: `Oil prices fell sharply Tuesday after Treasury Secretary Scott Bessent indicated there may be a deal to open the Strait of Hormuz as soon as this week.
Brent, the international oil benchmark, slid 5.3% to close at $79.36 per barrel. West Texas Intermediate futures lost 5.7% to settle at $75.77.
"We are in talks with the Iranians," Bessent told CNBC's "Squawk Box." "There is a chance we may have a deal today or tomorrow to open the Strait and move towards a more normalized position in this conflict."
"It would be freedom of movement," the Treasury Secretary said when asked whether Iran would be allowed to charge a toll.
Tehran is considering allowing European countries to clear mines from Hormuz, diplomats familiar with the matter told Bloomberg News. Mines in the strait are one of the biggest obstacles to normalizing traffic.
President Donald Trump said over the weekend that he called off a major attack on Iran to allow for negotiations over Hormuz. The U.S. and Iran signed a deal on June 17 to reopen the strait but that agreement quickly collapsed.
Iran wants commercial ships to transit through Hormuz using the Islamic Republic's territorial waters. It has repeatedly attacked vessels sailing through the strait along Oman's coast under U.S. military protection.
A cargo ship was struck Monday by an unknown projectile about 20 nautical miles northeast of Al Khasab, Oman, according to an incident report from the United Kingdom Maritime Trade Operations Centre.
"Iran is unlikely to agree to any deal without getting control of the Strait, and thus we view any potential deal as being highly likely to fail at this point," said Ryan McKay, director of commodity strategy at TD Securities.
Oil exports through Hormuz are unlikely to surge after a deal, McKay said in a Tuesday note. Flows "are already in line with what the current production recovery would imply, suggesting the upside for flows, even under a comprehensive deal, is minimal," the strategist said.`,
    bodyJa: `スコット・ベッセント財務長官が、早ければ今週中にもホルムズ海峡を開通させる合意が得られる可能性があると示唆したことを受け、火曜日、原油価格が急落した。
国際石油指標であるブレント原油は5.3％下落し、1バレル＝79.36ドルで取引を終えた。ウェスト・テキサス・インターミディエイト先物は５．７％下落し、７５．７７ドルで決済された。
「我々はイラン側と交渉中だ」とベッセント氏はCNBCの番組「スコークボックス」に語った。 「今日か明日、海峡を開いてこの紛争におけるより正常化された立場に向けて合意する可能性がある。」
財務長官は、イランに通行料金を請求することが許されるかとの質問に対し、「移動の自由だ」と述べた。
この問題に詳しい外交官がブルームバーグニュースに語ったところによると、イラン政府は欧州諸国にホルムズ島の地雷除去を許可することを検討している。海峡の地雷は交通の正常化に対する最大の障害の一つとなっている。
ドナルド・トランプ大統領は週末、ホルムズ島をめぐる交渉を可能にするため、イランへの大規模な攻撃を中止すると発表した。米国とイランは6月17日に海峡再開の合意に署名したが、合意はすぐに崩れた。
イランは商船がイスラム共和国の領海を使用してホルムズを通過することを望んでいる。米軍の保護下でオマーン沿岸の海峡を航行する船舶を繰り返し攻撃している。
英国海事貿易業務センターの事故報告書によると、月曜日、オマーンのアル・ハサブ北東約20海里で貨物船が未知の飛翔体に直撃された。
ＴＤセキュリティーズの商品戦略担当ディレクター、ライアン・マッケイ氏は「イランが海峡の制海権を獲得せずにいかなる合意にも合意する可能性は低い。したがって、現時点で潜在的な合意は失敗する可能性が高いとわれわれは見ている」と述べた。
マッケイ氏は火曜日のメモで、ホルムズ経由の石油輸出が合意後に急増する可能性は低いと述べた。同ストラテジストは、フローは「現在の生産回復が示唆するものと既に一致しており、包括的合意のもとでもフローの上振れは最小限であることを示唆している」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/oil-rises-after-selloff-as-talks-to-end-us-iran-war-remain-uncertain.html",
    publishedAt: "2026-08-04T18:54:56+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "these-charts-suggest-the-s-p-500-is-look-2a9cb2ac",
    title: "These charts suggest the S&P 500 is looking like a bargain. Take them with a grain of salt.",
    titleJa: "これらのチャートは、S&P 500 が割安であることを示唆しています。割り引いて考えてください。",
    summaryJa: "株は割高であると同時に割安でもあります。それが、S&P 500 が陥っている奇妙な点です。火曜日には最高値を更新しているにもかかわらず、通常は警告サインが点滅する評価指標が、代わりに緑色に点滅しています。",
    bodyOriginal: `Stocks are expensive and cheap at the same time. That’s the strange spot the S&amp;P 500 finds itself in: It’s sitting at a fresh all-time high on Tuesday, yet the valuation metrics that usually flash a warning sign are instead flashing green.`,
    bodyJa: `株は割高であると同時に割安でもあります。それが、S&P 500 が陥っている奇妙な点です。火曜日には最高値を更新しているにもかかわらず、通常は警告サインが点滅する評価指標が、代わりに緑色に点滅しています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/these-charts-suggest-the-s-p-500-is-looking-like-a-bargain-take-them-with-a-grain-of-salt-f109548f?mod=mw_rss_topstories",
    publishedAt: "2026-08-04T18:36:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-06896390",
    readTime: 2,
  },
  {
    id: "chipotle-stock-falls-on-potential-link-t-c3069cd9",
    title: "Chipotle stock falls on potential link to salmonella outbreak in Minnesota",
    titleJa: "ミネソタ州でのサルモネラ菌発生との関連の可能性によりチポトレ株が​​下落",
    summaryJa: "チポトレ・メキシカン・グリルは火曜日、ハラペーニョの供給がサルモネラ菌の発生に関連している可能性があることを知り、ミネソタ州のレストランからハラペーニョを一時的に撤去したと発表した。ブルームバーグがこのニュースを最初に報じた後、チポトレの株価は午後の取引で５％以上下落した。",
    bodyOriginal: `Chipotle Mexican Grill said Tuesday it temporarily pulled jalapenos from restaurants in Minnesota after learning that their supply may have been linked to a salmonella outbreak.
Shares of Chipotle fell more than 5% in afternoon trading after Bloomberg first reported the news.
"We have a robust ingredient traceability system and, upon learning of a potential Salmonella outbreak in the supply chain impacting several food service retailers, we proactively identified jalapeños as a potential common ingredient from a common lot, removed them from the restaurants where they had been distributed, and replaced them with product from different growers," Chipotle spokesperson Laurie Schalow said in a statement to CNBC.
The stock reaction indicates investors see the news as a callback to Chipotle's past as the poster child for food safety issues. The burrito chain was implicated in at least five separate foodborne illness outbreaks between 2015 and 2018. Chipotle added more training for employees, sick days and an enhanced food safety program to put those troubles in the past, and it is now seen as an industry leader on the issue.
Foodborne illness has also been top of mind for many consumers lately. The ongoing cyclospora outbreak has led to more than 6,700 cases confirmed by the Centers for Disease Control and Prevention. Michigan public health authorities on Monday also confirmed the first two deaths linked to the outbreak.
Though Chipotle does not serve any ingredients linked to the cyclospora outbreak, the company said concerns about the foodborne illness affected its sales in the second half of July.`,
    bodyJa: `チポトレ・メキシカン・グリルは火曜日、ハラペーニョの供給がサルモネラ菌の発生に関連している可能性があることを知り、ミネソタ州のレストランからハラペーニョを一時的に撤去したと発表した。
ブルームバーグがこのニュースを最初に報じた後、チポトレの株価は午後の取引で５％以上下落した。
チポトレの広報担当者、ローリー・シャロウ氏はCNBCへの声明で、「当社には強固な原材料追跡システムがあり、サプライチェーンでサルモネラ菌が発生し、複数の外食小売業者に影響を及ぼしている可能性があることを知り、共通ロットの潜在的な共通原材料としてハラペーニョを積極的に特定し、流通していたレストランからハラペーニョを撤去し、別の生産者からの製品と置き換えた」と述べた。
株価の反応は、投資家がこのニュースを食品安全問題の代表格であったチポトレの過去への回帰とみなしていることを示している。ブリトーチェーンは、2015年から2018年の間に少なくとも5件の食中毒発生に関与していた。チポトレは、こうした問題を過去に終わらせるために、従業員向けの研修、病欠日、強化された食品安全プログラムを追加し、現在ではこの問題に関して業界のリーダーとみなされている。
最近、食中毒も多くの消費者にとって最大の関心事となっています。現在進行中のシクロスポラの発生により、疾病管理予防センターによって6,700人以上の感染者が確認されています。ミシガン州公衆衛生当局も月曜日、感染拡大に関連した最初の2人の死亡を確認した。
チポトレはシクロスポラの発生に関連する食材を一切提供していないが、食中毒に対する懸念が7月後半の売上に影響を与えたと同社は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/chipotle-stock-falls-salmonella-outbreak-minnesota.html",
    publishedAt: "2026-08-04T18:33:33+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "how-the-baby-iphone-and-an-apple-supplie-71b35a03",
    title: "How the 'Baby iPhone' and an Apple supplier leak explain China's recent supply chain moves",
    titleJa: "「ベビーiPhone」とAppleサプライヤーのリークは中国の最近のサプライチェーンの動きをどう説明するか",
    summaryJa: "インドのアップルサプライヤーであるタタ・エレクトロニクスへの最近のサイバー侵害は、各国首脳が国際企業を中国のサプライチェーンに閉じ込めておくために争う中、中国政府にとってプロパガンダの金となった。中国最大の電子機器市場、華強北のiPhone修理専門家馬寿華氏は、「このようなことは中国では決して起こらない」と語った。",
    bodyOriginal: `The recent cyber breach at Indian Apple supplier Tata Electronics has become propaganda gold for Beijing, as leaders vie to keep international companies locked into China's supply chains.
"Something like this would never happen in China," said Ma Shouhua, an iPhone repair specialist in China's biggest electronics marketplace, Huaqiangbei.
Ma recently posted a viral video outlining the purported specifications of Apple's soon-to-be-released iPhone 18 Pro models that were part of the materials leaked after the breach.
Tata Electronics confirmed a "cybersecurity incident" to CNBC but said it "had no impact on our operations across businesses." The company did not say if any materials or data were stolen.
Reuters reported in June that hacking group World Leaks claimed responsibility for the attack and that stolen data included parts lists, suppliers and photos of Apple's unreleased iPhone 18 Pro.
Apple declined to comment on the leak or its supply chain plans.
With geopolitical tensions rising, dependence on China has become riskier for U.S. companies, leading Apple and other companies to make greater efforts to diversify. Last year, Apple produced its top devices — the iPhone 17 series — in India for the first time.
The competition with India for iPhone production and other manufacturing has alarmed Chinese authorities.
The Communist Party's Global Times newspaper warned in July of "systemic weaknesses in 'Made in India'" and argued that replicating supply chains in other countries is "no easy task."
China is competing with lower-cost countries to retain all supply chains for jobs and leverage over its trading partners.
The U.S. Chamber of Commerce wrote in a May report with Rhodium Group that China is "using regulations and economic coercion" to reinforce its control over critical supply chains.
"It has tightened controls on critical minerals and processing technologies, extended restrictions to downstream products through extraterritorial rules, and introduced new legal instruments that raise the cost for firms and governments seeking to diversify away from China," the report stated.
'Baby iPhone' copycats
The Tata Electronics leak might not be serious enough to change Apple's course on its supply chain, and appears to be less of a risk than originally feared.
In Shenzhen-based Huaqiangbei, where old iPhones are bought and sold, the technicians are famous for their ability to refurbish, repair and rebuild devices.
On a recent visit, CNBC spoke to several technicians who insisted that recreating an iPhone 18 Pro is almost impossible despite widespread discussion on Chinese social media to the contrary.
"You can't really make anything from those drawings. At most, you could make phone cases," seller Guo Youliang said.
Though highly skilled, the technicians in Huaqiangbei said that they cannot get key parts of an iPhone — mainly the chips or the software.
"They might look like an iPhone, but the insides are different," iPhone repair specialist Wang Shun said while fixing a model at his stall in the market.
One example is the $29 "17 Pro Mini." Also referred to as the "Baby iPhone," the copycat resembles an iPhone 17 Pro down to its exclusive cosmic orange color. Yet it is powered by Android.
Apple stopped producing mini-sized versions after the iPhone 13 Mini.
The iPhone 18 Pro models are widely expected to be released this September.`,
    bodyJa: `インドのアップルサプライヤーであるタタ・エレクトロニクスへの最近のサイバー侵害は、各国首脳が国際企業を中国のサプライチェーンに閉じ込めておくために争う中、中国政府にとってプロパガンダの金となった。
中国最大の電子機器市場、華強北のiPhone修理専門家馬寿華氏は、「このようなことは中国では決して起こらない」と語った。
マー氏は最近、漏洩後に流出した資料の一部である、Appleが間もなく発売するiPhone 18 Proモデルの仕様とされるものを概説するバイラルビデオを投稿した。
タタ・エレクトロニクスはＣＮＢＣに対し「サイバーセキュリティー事件」を認めたが、「全社の業務に影響はなかった」と述べた。同社は資料やデータが盗まれたかどうかについては明らかにしていない。
ロイターは6月、ハッカー集団ワールド・リークスが攻撃の犯行声明を出し、盗まれたデータには部品リスト、サプライヤー、Appleの未発表iPhone 18 Proの写真が含まれていたと報じた。
Appleはリークやサプライチェーン計画についてコメントを控えた。
地政学的な緊張が高まる中、米国企業にとって中国への依存はリスクを高めており、アップルやその他の企業は多角化に向けて一層の取り組みを進めている。昨年、Apple は同社の最上位デバイスである iPhone 17 シリーズを初めてインドで生産しました。
iPhone生産やその他の製造におけるインドとの競争は、中国当局を警戒させている。
共産党機関紙の環球時報は７月、「『メイド・イン・インド』の体系的な弱点」を警告し、サプライチェーンを他国で再現するのは「簡単な作業ではない」と主張した。
中国は、すべてのサプライチェーンを維持して雇用を確保し、貿易相手国に対する影響力を得るために、低コスト諸国と競争している。
米国商工会議所は、ロジウム・グループとの5月の報告書で、中国が重要なサプライチェーンに対する管理を強化するために「規制と経済的強制を利用している」と記した。
「重要な鉱物と加工技術に対する管理を強化し、治外法権を通じて下流製品への制限を拡大し、中国からの多角化を目指す企業や政府のコストを引き上げる新たな法的手段を導入した」と報告書は述べている。
「Baby iPhone」の模倣品
タタ・エレクトロニクスの情報漏えいは、アップルのサプライチェーンの方向性を変えるほど深刻ではない可能性があり、当初懸念されていたほどのリスクではないようだ。
深センに本拠を置く華強北では、古い iPhone が売買されており、技術者はデバイスの改修、修理、再構築を行う能力で有名です。
CNBCは最近の訪問で数人の技術者に話を聞き、中国のソーシャルメディアでは反対の議論が広がっているにもかかわらず、iPhone 18 Proを再生産することはほぼ不可能だと主張した。
「その図面から実際に何かを作ることはできません。せいぜい電話ケースを作ることができる程度です」と販売者のGuo Youliang氏は語った。
華強北の技術者らは高度な技術を持っているものの、iPhoneの主要部品、主にチップやソフトウェアを入手できないと述べた。
「見た目はiPhoneに似ているかもしれないが、中身は違う」とiPhone修理専門家のワン・シュン氏は市場の出店でモデルを修理しながら語った。
その一例が29ドルの「17 Pro Mini」だ。 「ベイビーiPhone」とも呼ばれるこの模倣品は、独自のコズミックオレンジカラーに至るまでiPhone 17 Proに似ています。それでもAndroidを搭載しています。
AppleはiPhone 13 Mini以降、ミニサイズのバージョンの製造を中止しました。
iPhone 18 Proモデルは今年9月に発売されると広く予想されています。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/china-apple-india-tata-electronics.html",
    publishedAt: "2026-08-04T16:17:23+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "why-michigan-voters-are-hearing-communis-b44a16da",
    title: "Why Michigan voters are hearing 'communist' as they vote Tuesday",
    titleJa: "ミシガン州の有権者が火曜日の投票で「共産主義者」の声を聞く理由",
    summaryJa: "ドナルド・トランプ大統領と共和党は、左派の敵対者に対して新たに好んで使う言葉を持っている。それは「共産主義者」だ。トランプ大統領は、カール・マルクスが擁護し、冷戦時代に米国の悩みの種となった経済哲学である共産主義に民主党を結び付けようとしている。ウィスコンシン州上院議員ジョセフ・マッカーシー率いる共和党は、1950年代初頭の赤狩りの際にこのあだ名を大きな政治的効果をもたらすために使用したことがある。そしてこの戦略は最近の選挙でも採用されている。",
    bodyOriginal: `President Donald Trump and Republicans have a new favorite term for their opponents on the left: Communists.
Trump has been trying to stitch Democrats to communism, the economic philosophy championed by Karl Marx and the bane of the U.S. during the Cold War era. Republicans led by Wisconsin Sen. Joseph McCarthy previously used the moniker to great political effect during the Red Scare in the early 1950s. And the strategy has been employed in more recent elections as well.
But the rate at which Trump and his Republican allies are crying "communist" has ratcheted up dramatically in the wake of progressive Democrats winning elections across the country following New York City Mayor Zohran Mamdani's victory last year. Democrats in Michigan will have another opportunity on Tuesday to nominate a progressive candidate as Abdul El-Sayed faces off against the more establishment Rep. Haley Stevens, D-Mich., to become the party's nominee for an open Senate seat. While El-Sayed rejects the Democratic socialist label, Trump called him a communist as recently as Monday.
In a July 28 endorsement video, Trump said Wisconsin Republican congressional candidate Michael Alfonso "will stand up to the radical left communists in Congress." On July 22, in a speech in Georgia, Trump said, "We have some great candidates running, they got to win by a lot; otherwise we're going communist." In a July 3 speech in front of Mount Rushmore, the president said the "communist menace" is a "mortal threat." In his Independence Day speech, he vowed that the U.S. "will never be a communist country."
At stake is the balance of power in Washington, where Trump and Republicans have controlled all chambers of government since the beginning of his second term. Republicans see Democrats lurching to the left and embracing socialism as an opening to link their opponents to the far more radical communism.
Trump is not alone in slapping on the communist label. Republican House Speaker Mike Johnson, of Louisiana, said during a news conference that the midterm election is a contest over "whether we're going to maintain our status as a constitutional republic or we're going to trade that in, dismantle the foundations and go down this dark road of death to communism."
"These crazy little mini-Mamdanis who are popping up all around the country, they are a danger to you and your family. This is not a game," he said.
And Rep. Lisa McClain, R-Mich., the House Republican Caucus chair, was similarly direct when speaking at a news conference about the midterm election.
"This is a choice between freedom and tyrannical government control, between the American dream and the failed nightmare of communism," she said, speaking about the new crop of Democratic candidates. "These are all people who hate our country and everything that our country stands for."
The rhetoric comes as Democrats shift to the left in primary elections around the country, nominating Democratic socialist candidates in the mold of Sen. Bernie Sanders, I-Vt., who argue for a more muscular federal government that delivers more benefits. Progressive Democrats have catalyzed voters on affordability, pledging to tax the wealthiest Americans more to pay for universal healthcare, a higher minimum wage and a universal basic income.
"We're using their own words and their own platform. I don't think it's really much of a stretch to make the connection from socialism to communism," said one GOP operative involved in the effort, granted anonymity to speak to the party's strategy. "It's kind of a wake-up call for Republican voters to help turn out the base and say exactly what we're running against."
Indeed, Democrats have recently nominated candidates who have toyed with communism in the past.
Democratic socialist Darializa Avila Chevalier, who took down Rep. Adriano Espaillat, D-N.Y., in a Democratic primary in June, maintained a since-deleted Twitter account on the platform now known as X. There she included calls to "seize the means of production" and a quip that the now-candidate wiped her hands on an American flag. Trump seized on the latter tweet in a recent interview with CNBC.
Chevalier has since told MS NOW that she is not a communist. She called the focus on her past commentary a "distraction."
Democrats say the "communist" tag won't work on many of their less-headline-grabbing candidates. A senior Democratic campaign operative, who was granted anonymity to discuss the party's response, pointed to candidates like JoAnna Mendoza, a retired Marine drill instructor running against Republican Rep. Juan Ciscomani in Arizona. Or Rep. Tom Suozzi, D-N.Y., a Long Island moderate Democrat who has repeatedly won in a purple district.
In a statement to CNBC, Democratic Congressional Campaign Committee Chair Rep. Suzan DelBene, D-Wash., said Republicans are "resorting to desperate attacks that aren't actually about the pocketbook issues, but just baseless spin that falls flat with voters who are eager to reject Republicans."
Some Democrats are even goading Republicans to bring it on when it comes to the communist messaging.
"I think if Donald Trump said that we were all bananas, they would call us bananas," said Rep. Mark Pocan, D-Wis., a former chair of the Congressional Progressive Caucus. "They couldn't make it work on socialists, so they tried to go to communists."
Pocan suggested he doesn't think the communist tag will be persuasive to voters, either.
"If that's the best they got, I'm looking forward to a nice big majority in November, so keep it up," he said.
Rep. Ro Khanna, D-Calif., who has endorsed a wide swath of progressives this election season, told CNBC that history also suggests the strategy will not be effective. "They tried to do it to FDR four times," he said, referring to Republican backlash to President Franklin Delano Roosevelt's New Deal programs like Social Security.
"Voters are smart," he added.
Polling suggests deriding Democrats as socialists also won't be effective come the November election.
The latest CNBC All America Economic Survey released in July found that 32% of registered voters would be more likely to vote for a candidate if they describe themselves as a Democratic socialist, while 29% of voters would be more likely to vote for a candidate with Trump's endorsement. Even fewer, 27% of voters, said a candidate who describes themselves as a member of the MAGA movement would make them more likely to vote for them.
That comes as Trump's approval rating on the economy sags to 38%, with 60% of voters disapproving. Democrats also hold a 4-point lead in the generic congressional ballot in the poll.`,
    bodyJa: `ドナルド・トランプ大統領と共和党は、左派の敵対者に対して新たに好んで使う言葉を持っている。それは「共産主義者」だ。
トランプ大統領は、カール・マルクスが擁護し、冷戦時代に米国の悩みの種となった経済哲学である共産主義に民主党を結び付けようとしている。ウィスコンシン州上院議員ジョセフ・マッカーシー率いる共和党は、1950年代初頭の赤狩りの際にこのあだ名を大きな政治的効果をもたらすために使用したことがある。そしてこの戦略は最近の選挙でも採用されている。
しかし、昨年のニューヨーク市市長ゾーラン・マムダニ氏の勝利に続き、全国各地の選挙で進歩派民主党が勝利したことを受けて、トランプ氏と共和党の同盟者らが「共産主義者」と叫ぶ割合は劇的に増加している。ミシガン州の民主党は火曜日、アブドゥル・エルサイード氏が上院空席の党候補者となるため、より体制派のヘイリー・スティーブンス下院議員（民主党、ミシガン州）と対決する中、進歩派候補者を指名する別の機会を迎えることになる。エルサイード氏は民主社会主義者のレッテルを拒否しているが、トランプ大統領はつい最近月曜日にも同氏を共産主義者と呼んだ。
トランプ大統領は7月28日の支持ビデオで、ウィスコンシン州の共和党議会候補マイケル・アルフォンソ氏が「議会の急進左派共産主義者に立ち向かうだろう」と述べた。 7月22日、トランプ大統領はジョージア州での演説で、「我々には何人かの素晴らしい候補者が立候補している。彼らが大差で勝たなければならない。そうでなければ我々は共産主義化するだろう」と語った。大統領は7月3日、ラシュモア山の前で行った演説で、「共産主義者の脅威」は「致命的な脅威」であると述べた。独立記念日の演説で同氏は、米国は「決して共産主義国にはならない」と誓った。
危機に瀕しているのは、トランプ大統領と共和党が二期目の任期開始以来、全政議所を支配してきたワシントンの力のバランスだ。共和党は、民主党が左傾化し、社会主義を受け入れることは、敵対者をより過激な共産主義に結びつけるための入り口であると見ている。
共産主義者のレッテルを貼り付けているのはトランプ氏だけではない。共和党のマイク・ジョンソン下院議長（ルイジアナ州）は記者会見で、中間選挙は「立憲共和制としての地位を維持するのか、それともそれを放棄して基盤を解体し、共産主義への死の暗い道を歩むのか」を巡る争いだと述べた。
「国中に現れているこの狂った小さなミニマムダニは、あなたとあなたの家族にとって危険です。これはゲームではありません」と彼は言った。
また、下院共和党議員団委員長であるリサ・マクレーン下院議員（共和党、ミシガン州）も同様に記者会見で中間選挙について率直に語った。
「これは、自由か横暴な政府管理の間、アメリカンドリームか共産主義の失敗した悪夢の間の選択だ」と彼女は民主党の新候補者について語った。 「彼らは皆、私たちの国と、私たちの国が象徴するすべてのものを憎んでいる人々です。」
このレトリックは、民主党が全米各地の予備選挙で左派に傾き、より多くの利益をもたらす、より力強い連邦政府を主張するバーニー・サンダース上院議員（バーモント州）の型に倣って民主社会主義者候補を指名する中で出てきたものである。進歩的な民主党は、国民皆保険、最低賃金の引き上げ、ユニバーサル・ベーシックインカムの支払いのために最も裕福なアメリカ人にさらに課税すると公約し、手頃な価格で有権者を動かしている。
「私たちは彼ら自身の言葉と独自の綱領を使っている。社会主義から共産主義への結びつきを作るのはそれほど無理のあることではないと思う」と、この取り組みに関与したある共和党工作員は匿名を条件に党の戦略について語った。 「これは、共和党有権者に対し、基地撤去に協力し、私たちが何に反対しているのかを正確に伝えるよう呼びかける一種の警鐘だ。」
実際、民主党は最近、過去に共産主義をもてあそんだ候補者を指名している。
6月の民主党予備選でアドリアーノ・エスパイラ下院議員（民主党、ニューヨーク州）を破った民主社会主義者のダリアリザ・アビラ・シュバリエ氏は、現在はXとして知られるプラットフォーム上で、削除されたツイッターアカウントを維持していた。そこには、「生産手段を掌握せよ」という呼びかけや、現候補者が星条旗で手を拭くという皮肉が含まれていた。トランプ大統領はCNBCとの最近のインタビューで後者のツイートを捉えた。
その後、シュバリエさんはMS NOWに対し、自分は共産主義者ではないと語った。彼女は過去のコメントに焦点が当てられることを「気が散る」と呼んだ。
民主党は、「共産主義者」というタグはあまり注目を集めない候補者の多くには機能しないと主張している。党の対応について議論するために匿名を許可された民主党の選挙運動幹部は、アリゾナ州で共和党のフアン・シスコマニ下院議員と対戦する元海兵隊訓練教官ジョアンナ・メンドーサ氏のような候補者を挙げた。あるいは、ロングアイランドの穏健派民主党員で紫色の選挙区で何度も勝利を収めているトム・スオッツィ下院議員（民主党、ニューヨーク州）だ。
民主党議会選挙委員会委員長のスーザン・デルベネ下院議員（ワシントン州民主党）はCNBCへの声明で、共和党が「実際には小遣い問題に関するものではなく、共和党を拒否したい有権者の意に沿わない根拠のない空想に過ぎない必死の攻撃に訴えている」と述べた。
民主党員の中には、共産主義のメッセージに関して共和党員にこれを導入するよう促している人もいる。
議会進歩議員団の元議長であるマーク・ポーカン下院議員（ウィスコンシン州民主党）は、「もしドナルド・トランプが我々はみんなバナナだと言ったら、彼らは我々をバナナと呼ぶだろう」と語った。 「社会主義者にはうまくいかなかったので、共産主義者に行こうとしたのです。」
ポカン氏は、共産主義というタグも有権者に説得力を持たないと考えていると示唆した。
「それが彼らの最高の結果であるなら、11月にはかなりの過半数を獲得できることを楽しみにしているので、それを続けてください」と彼は言った。
今選挙シーズンで幅広い進歩派を支持しているカリフォルニア州民主党のロー・カンナ下院議員はCNBCに対し、歴史がこの戦略が効果的ではないことを示唆していると語った。同氏は、フランクリン・デラノ・ルーズベルト大統領の社会保障などのニューディール政策に対する共和党の反発に言及し、「彼らはFDRに対して4回も同じことをしようとした」と述べた。
「有権者は賢い」と彼は付け加えた。
世論調査によれば、社会主義者が11月の選挙では効果がなくなるとして民主党を嘲笑することも示唆されている。
7月に発表された最新のCNBC全米経済調査によると、登録有権者の32％は自分を民主社会主義者だと称する候補者に投票する可能性が高く、有権者の29％はトランプ大統領の支持があれば候補者に投票する可能性が高いとのことだ。有権者の27％はさらに少なく、自らをMAGA運動のメンバーであると称する候補者であれば投票する可能性が高いと回答した。
これは、経済に関するトランプ大統領の支持率が38％に低下し、有権者の60％が不支持を示したことを受けてのことだ。民主党は世論調査の一般的な議会投票でも4ポイントのリードを保っている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/trump-election-republicans-democrats-communist.html",
    publishedAt: "2026-08-04T14:16:25+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 8,
  },
  {
    id: "bessent-says-there-may-be-deal-tuesday-o-93e1e34b",
    title: "Bessent says there may be deal Tuesday or Wednesday to open Strait of Hormuz with 'freedom of movement'",
    titleJa: "ベッセント氏は、火曜日か水曜日に「移動の自由」を伴ってホルムズ海峡を開放する合意が得られる可能性があると述べた",
    summaryJa: "スコット・ベッセント財務長官はインタビューで、米国とイランは火曜日か水曜日に商船の移動の自由を伴ったホルムズ海峡の再開で合意に達する可能性があると述べた。「我々はイラン側と交渉中だ」とベッセント氏はCNBCの番組「スコークボックス」に語った。 「今日か明日、海峡を開放し、この紛争におけるより正常化された立場に向けて合意に達する可能性がある。」",
    bodyOriginal: `The U.S. and Iran could reach a deal on Tuesday or Wednesday to reopen the Strait of Hormuz with freedom of movement for commercial ships, Treasury Secretary Scott Bessent said in an interview.
"We are in talks with the Iranians," Bessent told CNBC's "Squawk Box." "There is a chance we may have a deal today or tomorrow to open the strait and move towards a more normalized position in this conflict."
"It would be freedom of movement," the Treasury secretary said when asked whether Iran would be allowed to charge a toll.
U.S. crude oil futures fell about 3% to trade below $78 per barrel after his remarks. Prices should drop further when hundreds of ships stuck in the Persian Gulf are able to exit, Bessent said.
"It's not just energy. It's fertilizer, it's refined products, it is the various industrial gasses," he said. "We could see a big relief trade as those prices go down."
President Donald Trump said Saturday that he called off a major attack on Iran to allow for negotiations to reopen Hormuz. Trump has in the past repeatedly teased a deal to resolve the war only for fighting with Tehran to escalate again.
The U.S. and Iran signed a memorandum of understanding on June 17 to reopen the strait. Ship traffic through Hormuz briefly rebounded before the deal collapsed due to disagreement between Washington and Tehran on which route ships could use to transit the strait.
Iran began attacking tankers that transited Hormuz along Oman's coast under U.S. military protection. Tehran wants vessels to sail through its territorial waters when using the strait. Washington launched more than a dozen waves of airstrikes and reimposed its naval blockade on Iran in retaliation.`,
    bodyJa: `スコット・ベッセント財務長官はインタビューで、米国とイランは火曜日か水曜日に商船の移動の自由を伴ったホルムズ海峡の再開で合意に達する可能性があると述べた。
「我々はイラン側と交渉中だ」とベッセント氏はCNBCの番組「スコークボックス」に語った。 「今日か明日、海峡を開放し、この紛争におけるより正常化された立場に向けて合意に達する可能性がある。」
財務長官は、イランに通行料の請求が認められるかとの質問に対し、「移動の自由だ」と述べた。
同氏の発言を受け、米原油先物相場は約３％下落し、１バレル＝７８ドルを下回る水準で取引された。ベッセント氏は、ペルシャ湾で立ち往生している数百隻の船が出航できれば、価格はさらに下がるはずだと述べた。
「それは単なるエネルギーではありません。それは肥料、精製製品、さまざまな産業用ガスです」と彼は言いました。 「これらの価格が下落すれば、大きな救済取引が見られるかもしれない。」
ドナルド・トランプ大統領は土曜日、ホルムズ島再開交渉を可能にするため、イランへの大規模な攻撃を中止したと述べた。トランプ大統領は過去に、戦争解決に向けた合意を繰り返し示唆したが、それはテヘランとの戦闘が再び激化するだけだった。
米国とイランは６月１７日、海峡再開に向けた覚書に署名した。ホルムズを通過する船舶の交通量は一時的に回復したが、船舶が海峡を通過するためにどのルートを使用できるかについて米国とテヘランの間で意見の相違があったため、協定は破綻した。
イランは、米軍の保護下でオマーン沿岸のホルムズを通過するタンカーを攻撃し始めた。イラン政府は、船舶が海峡を使用する際には領海を航行することを求めている。米国政府は報復としてイランに対する十数回の空爆波を発動し、海上封鎖を再発動した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/bessent-says-there-may-be-deal-tuesday-or-wednesday-to-open-strait-of-hormuz-with-freedom-of-movement.html",
    publishedAt: "2026-08-04T14:00:55+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "why-trump-media-s-sale-of-fast-access-to-45fc7b5a",
    title: "Why Trump Media's sale of fast access to market-moving social posts is controversial",
    titleJa: "市場を動かすソーシャル投稿への迅速なアクセスを売りにしたトランプ・メディアが物議を醸している理由",
    summaryJa: "トランプ・メディア＆テクノロジー・グループ（TMTG）は、ウォール街の企業がTruth Socialの最も影響力のあるアカウントにアクセスできるようにする有料サービスを立ち上げた。",
    bodyOriginal: `Why Trump Media's sale of fast access to market-moving social posts is controversial
- Published
When Donald Trump speaks, financial traders are among the keenest listeners.
From trade wars to military wars, anything the US president says can shift markets, and so teams of traders - as well as a host of automated computer systems - monitor his statements to perform trades within seconds.
Trump Media & Technology Group (TMTG) now wants to charge for such market-moving information put out on its Truth Social platform. It has launched a paid service to give Wall Street firms and institutional investors the "fastest access" to the social media site's most influential accounts.
TMTG has not directly said the service includes the account of the president himself, but with some 13 million followers - the most on the site - it's fair to say that his posts would be among, if not the, most influential.
However, the move has prompted a series of legal questions and ethical musings, including whether it is right that a company - of which the president's family remains the majority shareholder - stands to profit from his own public statements.
What is the service all about?
The service launched by TMTG is called Truth API. It is a new data feed that provides real-time access to posts in "milliseconds" from the "highest-ranking Truth Social accounts".
The service was anticipated to become available to institutional customers on 1 August. The Financial Times reported, external that customers could be charged as much as $100,000 a month for high-speed access, but TMTG has not confirmed the figure.
TMTG says it expects it to create a steady source of new revenue for the firm, which is currently loss-making.
While anyone can pay for the service, it is mainly designed for so-called high-frequency and algorithmic trading firms - those TMTG states are "most impacted by the cost of a delay in information".
For these firms, financial trading is automated. Electronic systems using algorithms buy and sell much faster and at a greater scale than humans, according to Charles Schwab. It is a case of "blink, and you'll miss it", the investment bank says.
"Such systems are often designed to make just a tiny profit on each transaction, but through sheer speed and volume, they can generate large returns for their firms," it adds.
Is it illegal, unethical or neither?
Since Truth API was announced, some have raised the potential for insider trading to occur. The practice, which is illegal, involves people making market trades or bets based on information that is not available to the general public.
Richard Painter, former chief ethics lawyer to President George W Bush, told the BBC even if Trump does not trade himself on US government information, there was the so-called "tipper-tippee liability" under insider trading laws.
"If I have information that belongs to the United States government that I'm not allowed to trade on, and instead of trading, I simply give the information to someone else who pays me for the information and they trade and I know they're likely to trade, then I am also guilty of insider trading and so are they," Painter says.
"This is the law that applies to the president and to everyone else," he adds.
Painter says the law would only apply to certain subject matters and potential posts, such as what the president intends to do with tariffs, wars or other US policy.
"If I were commissioner of the SEC, I would threaten to resign unless they put a stop to this plan or promise that no posts... that have to do with US government business [will be included]," he says.
Political opponents of the president have criticised the service. Democratic Senators Elizabeth Warren and Adam Schiff have written to the US securities regulator to ask if it will investigate whether Truth API breaks the law.
The Securities and Exchange Commission (SEC) has confirmed receipt of the letter, but has declined to comment on whether it will investigate.
A spokesperson for TMTG said in response to the letter sent to the SEC that Senate Democrats "continue to mischaracterise Truth API either out of ideological opposition to free markets or a failure to grasp the distinction between public and non-public information - or, quite possibly, both".
TMTG has also said "the Senators must have invented a new theory of 'insider trading' based on publicly available information".
Joe Saluzzi, co-founder of Themis Trading, though, points out that many other data providers, news organisations and stock exchanges currently operate similar services, suggesting that provides a "precedent" for TMTG.
However, he adds: "There's a different story when it comes to ethics."
Trump, who owns about 41% of Trump Media through a trust his children oversee, does stand to profit from the service.
"This appears to be an outrageous abuse of the President's office for his personal benefit that undermines everyday investors and the integrity of our markets, while enriching Wall Street and other wealthy insiders," Warren and Schiff said in their letter to SEC.
Who has signed up?
There has been a wall of silence in terms of who has signed up to the service so far.
TMTG says it had customers register in advance of the launch date, but has not revealed how many.
Saluzzi from Themis Trading told the BBC that Truth API was "worthless" to trading firms, including his own, which did not have the complex systems already set up to perform transactions at "nanosecond level fast".
He suggests high-frequency trading firms (HFTs) would be among the most likely to sign up, not only because of the money-making potential, but also because they'll be thinking "if I don't do it, somebody else will".
"This is not for retail [investors], this is not even for sophisticated institutional investors," he says. "This data feed is for high-speed traders who have the systems in place and have spent millions and millions of dollars building the systems."
The BBC contacted some of the major US investment banks and high-frequency trading firms, from Goldman Sachs and JP Morgan to Citadel Securities and Jane Street to ask if they had, or planned to, sign up.
All either declined to comment or did not respond. The White House also did not respond to a request to comment.
"Nobody wants to talk about this stuff," says Saluzzi.`,
    bodyJa: `市場を動かすソーシャル投稿への迅速なアクセスを売りにしたトランプ・メディアが物議を醸している理由
- 公開されました
ドナルド・トランプ氏の講演に最も熱心に耳を傾けるのは金融トレーダーの一人だ。
貿易戦争から軍事戦争まで、米国大統領の発言はすべて市場を変える可能性があるため、トレーダーのチームと多数の自動コンピューターシステムが大統領の発言を監視し、数秒以内に取引を実行します。
トランプ・メディア＆テクノロジー・グループ（TMTG）は現在、Truth Socialプラットフォーム上で公開されるこうした市場を動かす情報に対して料金を請求したいと考えている。ウォール街の企業や機関投資家にソーシャルメディアサイトの最も影響力のあるアカウントへの「最速アクセス」を提供する有料サービスを開始した。
TMTGは、このサービスに大統領自身のアカウントが含まれているとは直接述べていないが、サイト内で最多となる約1,300万人のフォロワーを擁する同氏の投稿は、最も影響力のあるものの一つに入ると言っても過言ではない。
しかし、この動きは、大統領の家族が依然として大株主である企業が大統領自身の公式声明から利益を得ることは正しいのかどうかを含む、一連の法的問題や倫理的思索を引き起こした。
サービスとは一体何ですか?
TMTGが開始したサービスはTruth APIと呼ばれます。これは、「最高ランクの Truth Social アカウント」からの投稿への「ミリ秒」単位でのリアルタイム アクセスを提供する新しいデータ フィードです。
このサービスは 8 月 1 日に法人顧客向けに利用可能になる予定でした。フィナンシャル・タイムズ紙は、顧客が高速アクセスに対して月額最大10万ドルを請求される可能性があると社外で報じたが、TMTGはその数字を確認していない。
TMTGは、現在赤字となっている同社に安定した新たな収益源が生まれると期待していると述べた。
このサービスは誰でも料金を支払うことができるが、主にいわゆる高頻度取引会社やアルゴリズム取引会社向けに設計されており、これらのTMTG州は「情報の遅延によるコストの影響を最も受けている」。
これらの企業では金融取引が自動化されています。チャールズ・シュワブ氏によると、アルゴリズムを使用した電子システムは人間よりもはるかに迅速かつ大規模に売買できるという。これは「まばたきしていたら見逃してしまう」ケースだ、と投資銀行は言う。
「こうしたシステムは多くの場合、各取引でほんのわずかな利益しか得られないように設計されているが、圧倒的なスピードと量によって企業に大きな利益を生み出すことができる」と付け加えた。
それは違法でしょうか、非倫理的でしょうか、あるいはそのどちらでもありませんか?
Truth APIの発表以来、インサイダー取引が発生する可能性を指摘する声も上がっている。この行為は違法であり、一般の人が入手できない情報に基づいて市場取引や賭けを行う人が含まれます。
ジョージ・W・ブッシュ大統領の元首席倫理弁護士であるリチャード・ペインター氏はBBCに対し、たとえトランプ大統領が米国政府の情報を自ら取引しなくても、インサイダー取引法の下ではいわゆる「密告者・密告者責任」が存在すると語った。
「私が取引を許可されていない米国政府に属する情報を持っていて、取引する代わりにその情報をお金を払ってくれる誰かにその情報を渡しただけで、彼らが取引し、取引する可能性が高いとわかっている場合、私もインサイダー取引の罪を犯し、彼らも同様です」とペインター氏は言う。
「これは大統領と他の全員に適用される法律だ」と彼は付け加えた。
ペインター氏は、この法律は、大統領が関税、戦争、その他の米国の政策をどうするつもりかなど、特定の主題と潜在的なポストにのみ適用されると述べた。
「もし私がSEC長官だったら、この計画を阻止するか、米国政府の業務に関係するポストを含めないと約束しない限り、辞任すると脅すだろう」と彼は言う。
大統領の政敵たちはこのサービスを批判している。民主党のエリザベス・ウォーレン上院議員とアダム・シフ上院議員は米国証券監督当局に書簡を送り、Truth APIが法律に違反しているかどうか調査するかどうかを要請した。
証券取引委員会（SEC）は書簡の受領を確認したが、調査するかどうかについてはコメントを避けた。
TMTGの広報担当者は、SECに送った書簡に応えて、上院民主党は「自由市場に対するイデオロギー的な反対、あるいは公開情報と非公開情報の区別を理解していないこと、あるいはおそらくその両方から、Truth APIの特徴を誤って扱い続けている」と述べた。
TMTGはまた、「上院議員らは公開情報に基づいて『インサイダー取引』の新たな理論を発明したに違いない」とも述べた。
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4gdkl9zn8wo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-04T13:53:41+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c8b7/live/86169830-8fe0-11f1-bb3b-43bf44dc94d9.jpg",
    readTime: 5,
  },
  {
    id: "palantir-jumps-20-on-otherworldly-commer-9fc483a0",
    title: "Palantir jumps 20% on 'otherworldly' commercial revenue — here's what's driving the demand",
    titleJa: "Palantir、「異世界」の商業収益で 20% 急上昇 — 需要を促進しているものはここにあります",
    summaryJa: "パランティアの共同創設者兼最高経営責任者（CEO）のアレックス・カープ氏は、第2四半期の利益が大幅に膨れ上がった後、「われわれの顧客は言語研究所の属国になることを拒否した」と述べた。",
    bodyOriginal: `Palantir stock rocketed 20% higher on Tuesday after the company reported "otherworldly" second-quarter earnings driven by customer demand for AI sovereign tools.
The enterprise software giant reported a 93% growth in overall revenue to $1.94 billion, up from around $1 billion a year ago, and beating LSEG estimates of $1.8 billion. Its commercial revenue jumped 149% to $764 million, and government revenue grew 90% to $809 million.
The company expects full-year revenue between $8.15 billion and $8.158 and commercial revenue in excess of $3.424 billion. Palantir was last up 16.3% in premarket trading.
Palantir's Co-founder and CEO Alex Karp described the quarter as "otherworldly," adding that the sovereign AI revolution makes them "very optimistic about the future."
"Forget consensus," Karp told CNBC's Seema Mody in an exclusive interview. "To my knowledge, no businesses at our scale has even grown half this much."
Palantir, which designs systems that help companies integrate AI with their existing systems and data, pinned its blowout earnings on growing demand for AI sovereignty as companies seek to keep their data private from frontier AI labs like OpenAI, Google, Anthropic, and Meta.
In a letter to shareholders, Karp said "the revolution for independence and AI sovereignty is now well underway," noting that the business has "Marxist" values.
"Our customers have declined to become vassal states of the language labs," Karp said in the letter. "Every organization in the world is awakening to the risks of handing the creators of the language models the keys to their institutions, of letting the models loose within their homes."
The company's stock has declined 29% so far this year as investors increasingly become cautious on the AI trade.
Despite this, Citi analysts said in a note on Tuesday that Palantir's results "further weaken the bear case around rising AI competition," as demand for data privacy from AI companies sets it apart. Companies rely on Palantir's technology to integrate their software, while also making demands to keep their data private from AI models.
"In our view, the results reinforce Palantir's position as one of the clearest beneficiaries of enterprise AI adoption, with accelerating commercial demand demonstrating the company is benefitting from similar demand as the fastest AI natives on the market," the analysts said in a previous note on Monday.
"We expect shares up meaningfully given the significant snapback in U.S. Commercial performance, which pushes back against slowing growth," they added.`,
    bodyJa: `パランティアの株価は火曜日、同社がAIソブリンツールに対する顧客の需要に牽引されて「異世界の」第2四半期利益を報告したことを受けて20％急騰した。
エンタープライズ ソフトウェア大手である同社は、全体の収益が 19 億 4000 万ドルと、前年同期の約 10 億ドルから 93% 増加し、LSEG の予想である 18 億ドルを上回ったと報告しました。商業収入は 149% 増の 7 億 6,400 万ドルとなり、政府収入は 90% 増の 8 億 900 万ドルとなりました。
同社は通期の売上高が81億5000万ドルから81億5800万ドル、商業売上高が34億2400万ドルを超えると予想している。パランティアは市場前取引で１６．３％上昇した。
パランティアの共同創設者兼最高経営責任者（CEO）のアレックス・カープ氏は、この四半期を「別世界のような」と表現し、ソブリンAI革命により同社は「将来について非常に楽観的」になったと付け加えた。
「コンセンサスは忘れてください」とカープ氏はCNBCのシーマ・モディ氏の独占インタビューで語った。 「私の知る限り、私たちの規模でこれほど成長したビジネスはありません。」
企業がAIを既存のシステムやデータと統合するのに役立つシステムを設計するPalantirは、企業がOpenAI、Google、Anthropic、Metaなどの最先端のAIラボからデータを非公開にしようとする中、AI主権に対する需要の高まりにその爆発的な収益を当てにした。
カープ氏は株主に宛てた書簡の中で、「独立性とAI主権に向けた革命は現在順調に進んでいる」と述べ、この事業が「マルクス主義」的価値観を持っていると指摘した。
「われわれの顧客は言語研究所の属国になることを拒否した」とカープ氏は書簡の中で述べた。 「世界中のあらゆる組織が、言語モデルの作成者に組織の鍵を渡し、モデルを社内に放っておくことのリスクに目覚めています。」
投資家がAI取引にますます慎重になる中、同社の株価は年初から29％下落している。
それにもかかわらず、シティのアナリストらは火曜日のメモで、AI企業からのデータプライバシーに対する要求がパランティアを際立たせているため、パランティアの決算は「AI競争の激化を巡る弱気の見方をさらに弱める」と述べた。企業は、Palantir のテクノロジーを利用してソフトウェアを統合する一方で、AI モデルからデータをプライベートに保つことも要求しています。
「我々の見解では、この結果は企業向けAI導入で最も明白な受益者の1つとしてのパランティアの立場を強化するものであり、商用需要の加速は同社が市場で最速のAIネイティブと同様の需要から恩恵を受けていることを示している」とアナリストらは月曜日の前回のメモで述べた。
「成長鈍化を押し戻す米国商業業績の大幅な回復を考慮すると、株価が有意義に上昇すると予想している」と彼らは付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/palantir-2q-earnings-ai-sovereign-tools.html",
    publishedAt: "2026-08-04T13:37:51+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "polymarket-in-talks-for-fundraising-roun-c0cdb551",
    title: "Polymarket in talks for fundraising round at more than $20 billion valuation",
    titleJa: "ポリマーケット、評価額200億ドル以上の資金調達ラウンドで交渉中",
    summaryJa: "予測市場プラットフォームのポリマーケットは、同社の評価額が200億ドルを超える資金調達ラウンドに向けて交渉中であると、事情に詳しい関係者がCNBCに認めた。この協議と評価は、同社が6月下旬にCNBCに対し、5月に規制対象の米国取引所を開設して以来、年間収益が10億ドルをはるかに上回っていると語った後に行われた。",
    bodyOriginal: `Prediction market platform Polymarket is in talks for a fundraising round that would value the company at north of $20 billion, a person familiar with the matter confirmed to CNBC.
The talks and valuation come after the company told CNBC in late June that its annualized revenue was well above $1 billion, following the launch of its regulated U.S. exchange in May.
Bloomberg first reported on Tuesday about the new talks and valuation. Polymarket declined a request to comment by CNBC.
The person familiar with the situation — who asked not to be named to discuss the ongoing fundraising talks — also confirmed that the company previously closed a funding round in April that valued Polymarket at $15 billion.
The Information first reported about the funding round that same month, but the company did not confirm the round's closure at the time. That round included an additional $600 million direct cash investment by New York Stock Exchange owner Intercontinental Exchange announced in March, Bloomberg reported.
Prediction market platforms are continuing to experience huge growth while staying private. In May, Polymarket's chief rival, Kalshi, announced the closure of a funding round that valued the company at $22 billion. The Financial Times reported in June that Kalshi was in talks to raise new funds in the third quarter and would seek a $40 billion valuation.
If a new funding round for Polymarket closes, it would mark the first since the U.S. exchange's official launch, though the platform debuted with a waitlist in December. The U.S. exchange is doing north of $100 million in notional volume per day — up from around $75 million at the end of May — while the company's international platform is recording daily notional volume above $150 million, according to data from Dune Analytics.
— CNBC's Ananya Chetia contributed reporting
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `予測市場プラットフォームのポリマーケットは、同社の評価額が200億ドルを超える資金調達ラウンドに向けて交渉中であると、事情に詳しい関係者がCNBCに認めた。
この協議と評価は、同社が6月下旬にCNBCに対し、5月に規制対象の米国取引所を開設して以来、年間収益が10億ドルをはるかに上回っていると語った後に行われた。
ブルームバーグは火曜日に新たな交渉と評価について初めて報じた。ポリマーケットはCNBCからのコメント要請を拒否した。
進行中の資金調達交渉について言及するため匿名を希望したこの状況に詳しい関係者は、同社が以前4月にPolymarketの評価額を150億ドルとした資金調達ラウンドを終了したことも認めた。
ザ・インフォメーションは同月にこの資金調達ラウンドについて初めて報じたが、同社はその時点ではラウンドの終了を確認していなかった。このラウンドには、ニューヨーク証券取引所のオーナーであるインターコンチネンタル取引所が3月に発表した追加の6億ドルの直接現金投資が含まれていたとブルームバーグは報じた。
予測市場プラットフォームは、非公開でありながら大きな成長を続けています。 5月、ポリマーケットの最大のライバルであるカルシは、同社の価値を220億ドルと評価した資金調達ラウンドの終了を発表した。フィナンシャル・タイムズ紙は6月、カルシが第3四半期に新たな資金調達に向けて交渉中で、400億ドルの評価額を求めると報じた。
Polymarketの新たな資金調達ラウンドが終了すれば、同プラットフォームは12月に待機リスト付きでデビューしたが、米国の取引所が正式に発足して以来初のラウンドとなる。 Dune Analyticsのデータによると、米国取引所の1日当たりの想定元本出来高は5月末の約7500万ドルから1億ドルを超えており、一方同社の国際プラットフォームは1日当たり1億5000万ドルを超える想定元本出来高を記録している。
— CNBC のアナンヤ・チェティア氏がレポートに寄稿
開示: CNBC とカルシには、顧客の獲得と少数出資を含む商業関係があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/polymarket-seeks-fundraising-round-at-more-than-20-billion-valuation.html",
    publishedAt: "2026-08-04T13:31:19+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 2,
  },
  {
    id: "jeff-bezos-just-filed-to-sell-4-billion-bc5f920e",
    title: "Jeff Bezos just filed to sell $4 billion in Amazon. The shares are falling",
    titleJa: "ジェフ・ベゾス氏はアマゾンに40億ドルの売却を申請したばかりだ。株が下がっている",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Jeff Bezos filed plans to sell about 15 million Amazon shares worth roughly $4.1 billion, after the dominant e-commerce platform's stronger-than-expected earnings sent the stock to a record high, pushing its market value above $3 trillion.
Amazon fell more than 2% in early trading Tuesday following the filing, which disclosed the planned sale under a Rule 10b5-1 trading plan adopted on Nov. 14, 2025. The sales occurred on Monday through Morgan Stanley, according to the filing.
The filing comes after Amazon shares touched an all-time high on Monday, extending gains sparked by last week's quarterly results. The web services provider reported robust second-quarter earnings, led by stronger-than-expected growth in its cloud-computing business, reinforcing investor confidence that its artificial intelligence investments are translating into accelerating demand.
Shares of Amazon have rallied 23% this year, more than double the 11% gain in the S&P 500.
The Form 144 filed with the Securities and Exchange Commission showed Bezos intends to sell 15 million common shares with an aggregate market value of about $4.07 billion, based on Monday's closing price. The filing noted the shares were acquired as founder stock in 1994.
Bezos has regularly sold Amazon stock in recent years, often through pre-arranged trading plans, while continuing to rank among the company's largest shareholders. The filing also noted that he donated 220,200 shares to nonprofit organizations in May, which may have sold those shares during the preceding three months.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/jeff-bezos-just-filed-to-sell-4-billion-in-amazon-the-shares-are-falling.html",
    publishedAt: "2026-08-04T13:12:03+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "campaigners-denied-appeal-over-gatwick-e-22916694",
    title: "Campaigners denied appeal over Gatwick expansion",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "運動家らはガトウィック空港の拡張を巡る控訴を棄却した- 公開されました",
    bodyOriginal: `Campaigners denied appeal over Gatwick expansion
- Published
Campaigners have lost a bid to take their legal fight against the government over plans for a two-runway operation at Gatwick Airport to the Court of Appeal.
Peter Barclay and campaign group Communities Against Gatwick Noise Emissions (Cagne) previously took legal action against the Department for Transport over the decision to approve the plans, including over claims that the government did not properly assess the climate impact of the scheme.
Cagne and Barclay told a hearing in January the scheme was unlawful, claiming climate impact was not properly assessed.
The £2.2bn expansion will see the West Sussex airport move its emergency runway 12m (39ft) north to allow 100,000 more flights a year.
Mr Justice Mould dismissed the challenges to the airport's expansion in June, finding that it was "neither illogical nor contradictory" for Alexander not to refuse the proposed development "on the basis that it would have a material impact on the ability of Government to meet its carbon reduction targets".
He also rejected an argument about the need for the expansion at Gatwick, given the proximity to Heathrow.
Last month, Barclay and Cagne asked the Court of Appeal to allow them to challenge the ruling, claiming that the judge was wrong.
But in a ruling on Tuesday, Lord Justice Holgate and Lord Justice Dove dismissed the appeal bids.
'Immensely proud'
In a 29-page ruling, they said: "We conclude that each of the grounds of appeal raised by each appellant is unarguable.
"Neither appeal has a real prospect of success. We also consider that there are no other compelling reasons for either appeal to be heard."
The two senior judges also said that the previous ruling was "detailed and thorough".
Gatwick is the UK's second busiest airport and one of the busiest single-runway airports in the world.
The expansion will allow the site to be used for the departures of narrow-bodied planes such as Airbus A320s and Boeing 737s.
Following the decision, Barclay said: "We are very disappointed with the Court's decision. We took this challenge as far as we could because we believed that the decision to allow Gatwick to expand was fundamentally flawed.
"It was not supported by government policy, would only serve to line the pockets of the airport and airlines, and would do so at the expense of local residents and the climate."
Cagne said: "Residents should be immensely proud of what they have achieved in holding Gatwick Airport's shareholders to account.
"This proposed new runway will come at a significant cost to both the taxpayer and the planet."
Pierre-Hugues Schmit, chief executive of London Gatwick, said the decision to approve the plans "was taken properly and lawfully".
He added: "We are also very pleased that this ruling, from senior Court of Appeal Judges, brings to an end an eight-year planning and legal process which has carefully tested and scrutinised every aspect of our expansion plans on multiple occasions.
"This final ruling means that we can now press on with the important job of bringing this exciting project to life and move forward into the design and delivery phase."
Schmit said the Northern Runway project was expected to deliver 14,000 new jobs and a £1bn boost to the economy every year.
Follow BBC Sussex on Facebook,, external X,, external and Instagram,, external and listen to BBC Radio Sussex on Sounds. Send your story ideas to southeasttoday@bbc.co.uk or WhatsApp us on 08081 002250.
Related topics
- Published30 June
- Published23 June
- Published20 January`,
    bodyJa: `運動家らはガトウィック空港の拡張を巡る控訴を棄却した
- 公開されました
活動家らは、ガトウィック空港の２本滑走路運用計画を巡り政府を相手に控訴裁判所に提訴する法廷闘争に敗れた。
ピーター・バークレー氏と運動団体「ガトウィック騒音排出反対コミュニティ」（カーニュ）は以前、政府が計画による気候への影響を適切に評価していなかったという主張を含め、計画承認の決定をめぐって運輸省に対して法的措置を取っていた。
カーニュ氏とバークレー氏は1月の公聴会で、この計画は違法であり、気候への影響が適切に評価されていなかったと主張した。
22億ポンドの拡張により、ウエストサセックス空港は緊急滑走路を12メートル（39フィート）北に移動し、年間10万便の追加飛行が可能となる。
モルド判事は6月、空港拡張に対する異議申し立てを却下し、アレクサンダーが「政府の二酸化炭素削減目標達成能力に重大な影響を与えるという理由で」開発提案を拒否しなかったのは「非論理的でも矛盾でもない」と判断した。
同氏はまた、ヒースロー空港に近いことを考慮してガトウィック空港の拡張の必要性についての議論も拒否した。
バークレー氏とカーニュ氏は先月、裁判官が間違っていたとして、判決に異議を申し立てることを許可するよう控訴院に要請した。
しかし火曜日の判決で、ホルゲート判事とダブ判事は控訴を棄却した。
「とても誇りに思っています」
29ページにわたる判決の中で、彼らは次のように述べている：「我々は、各控訴人が提起した控訴理由のそれぞれには議論の余地がないと結論付ける。
「どちらの訴えも実際に成功する見込みはありません。また、私たちは、どちらの上訴も審理される他にやむを得ない理由はないと考えています。」
上級判事２人も、前回の判決は「詳細かつ徹底的」だったと述べた。
ガトウィック空港は英国で 2 番目に利用者の多い空港であり、単一滑走路の空港としては世界で最も利用者の多い空港の 1 つです。
この拡張により、この敷地はエアバスA320型機やボーイング737型機などの狭胴型機の出発に使用できるようになる。
判決を受けてバークレー氏は「われわれは裁判所の決定に非常に失望している。私たちは、ガトウィック空港の拡張を許可するという決定には根本的に欠陥があったと信じていたため、できる限りこの挑戦に取り組みました。
「それは政府の政策によって支援されたものではなく、空港と航空会社の懐を潤すだけであり、地元住民と気候を犠牲にすることになるだろう。」
カーニュ氏は、「住民はガトウィック空港の株主に責任を負わせるという点で達成したことを非常に誇りに思うべきだ。
「この提案されている新しい滑走路は納税者と地球の両方に多大なコストをもたらすことになる。」
ロンドン・ガトウィック空港のピエール・ユーグ・シュミット最高経営責任者（CEO）は、計画承認の決定は「適切かつ合法的に行われた」と述べた。
同氏はさらに、「また、控訴裁判所の上級判事らによる今回の判決により、当社の拡張計画のあらゆる側面を何度も慎重に検証し精査してきた8年間の計画と法的手続きに終止符が打たれたことを非常にうれしく思っている」と付け加えた。
「この最終判決は、私たちがこのエキサイティングなプロジェクトを実現させるという重要な仕事に取り組み、設計と納品の段階に進むことができることを意味します。」
シュミット氏は、北滑走路プロジェクトは毎年1万4000人の新規雇用と10億ポンドの経済押し上げをもたらすことが期待されると述べた。
Facebook、外部 X、外部および Instagram、外部で BBC サセックスをフォローし、BBC ラジオ サセックス オン サウンドを聞いてください。ストーリーのアイデアは、southeasttoday@bbc.co.uk または WhatsApp (08081 002250) までお送りください。
関連トピック
- 6 月 30 日発行
- 6 月 23 日発行
- 1 月 20 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjwx9y7dd27o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-04T12:25:34+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/eb50/live/cdbdae10-8fec-11f1-b2ab-0dd01740f9f6.jpg",
    readTime: 4,
  },
  {
    id: "apple-issues-new-challenge-against-uk-or-0ad68402",
    title: "Apple issues new challenge against UK order for access to private user data",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Appleは英国の個人ユーザーデータへのアクセス命令に対して新たな異議申し立てを行う- 公開されました",
    bodyOriginal: `Apple issues new challenge against UK order for access to private user data
- Published
Apple has confirmed it has launched a new legal complaint against the UK government at a court that deals with objections to the use of covert surveillance powers.
The tech giant has not told BBC News what the complaint relates to but the Financial Times, external has reported it is another challenge to a Home Office demand for so-called "backdoor" access to highly encrypted Apple user data.
The row, which centres on the government's desire to be able to see material protected by an advanced data protection system - which currently even Apple itself cannot access - has been rumbling on since early 2025.
The government said it would not comment on legal proceedings or what it called "operational matters".
But it added in a statement: "The UK supports strong encryption and robust privacy protections, but it is also vital that law enforcement can access communications when necessary and proportionate to protect the public from terrorism, serious crime, and child sexual abuse."
Apple has meanwhile referred reporters to a statement given last year, after its initial challenge to the UK government's request.
This said it was "gravely disappointed" it could still not offer its Advanced Data Protection feature to new UK users, following its decision to withdraw it in February 2025.
"As we have said many times before, we have never built a backdoor or master key to any of our products or services and we never will," the company added.
Advanced Data Protection is an opt-in feature that allows users to turn on a higher level of protection for data stored in iCloud, such as back-ups, Drive storage, photos and voice memos.
It is secured using end-to-end encryption - meaning not even Apple would be able to see its contents.
The government's requests for Apple to permit it access to data held under this system were issued under the Investigatory Powers Act (IPA).
It includes powers allowing the government to issue secret notices - called technical capability notices - which can secretly force companies to provide UK security services with ways to access customer data.
The government had fought unsuccessfully to keep legal challenges to its first notice to Apple secret.
Its notice was later withdrawn after angering US politicians, who were concerned it would affect their own citizen's data.
But the government issued a new request in October which did not apply to US users.
Privacy groups which previously campaigned against its secret orders welcomed Apple's new legal complaint.
"We are happy to learn that Apple is once again challenging the UK's regime of secret orders," said Privacy International.
"While we don't know the substance of Apple's claim, if it relates to the previously reported orders aimed at undermining the security of Apple's iCloud storage, then Apple's claim, alongside side ours and Liberty's, is crucially important to preserving all of our privacy and security."
Ruth Ehrlich, director of external relations at Liberty, said the case was "hugely important" and has "far-reaching implications for the public's privacy rights well into the future".
"End-to-end encryption is an essential security tool that protects our personal data, including our bank details, health information, private conversations and images," she said.
"Opening a backdoor to all of that information carries a wide range of risks to our personal data. It is critical that the Government listens to the many concerns and commits to protecting our privacy rights."
But Sir Brian Leveson, the Investigatory Powers Commissioner, who provides independent oversight of the use of surveillance powers, has previously criticised media use of the term "backdoor", external.
He said notices such as those concerned in this case would only be issued "if the Secretary of State deems it necessary and proportionate, and this decision is independently reviewed and approved by a Judicial Commissioner".
He added requests for data would also require separate authorisation under the IPA and these would be subject to independent oversight.
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
- Published26 February 2025
- Published14 February 2025
- Published29 August 2025`,
    bodyJa: `Appleは英国の個人ユーザーデータへのアクセス命令に対して新たな異議申し立てを行う
- 公開されました
Appleは、秘密監視権限の行使に対する異議を扱う裁判所に対し、英国政府に対して新たな法的訴追を開始したことを認めた。
テクノロジー大手はBBCニュースに苦情の内容を明らかにしていないが、外部紙フィナンシャル・タイムズは、これは高度に暗号化されたAppleユーザーデータへのいわゆる「バックドア」アクセスに対する内務省の要求に対する新たな挑戦であると報じた。
この論争は、高度なデータ保護システムによって保護されている資料（現在はApple自体もアクセスできない）を閲覧できるようにしたいという政府の要望を中心に、2025年初頭からささやかれている。
政府は、訴訟手続きや「運営上の問題」と呼ばれるものについてはコメントしないと述べた。
しかし、声明の中で「英国は強力な暗号化と強固なプライバシー保護を支持しているが、国民をテロ、重大犯罪、児童性的虐待から守るために必要かつ適切な場合に法執行機関が通信にアクセスできることも極めて重要である」と付け加えた。
一方、アップルは英国政府の要請に最初に異議を唱えた後、昨年発表した声明を記者らに言及した。
これは、2025年2月にAdvanced Data Protection機能を廃止すると決定した後、依然として英国の新規ユーザーにAdvanced Data Protection機能を提供できないことに「非常に残念」だと述べた。
「これまで何度も述べてきたように、当社は当社の製品やサービスに対してバックドアやマスターキーを構築したことはなく、今後も構築するつもりはない」と同社は付け加えた。
高度なデータ保護は、ユーザーがバックアップ、ドライブ ストレージ、写真、ボイスメモなど、iCloud に保存されているデータに対してより高いレベルの保護をオンにできるオプトイン機能です。
これはエンドツーエンドの暗号化を使用して保護されています。つまり、Apple ですらその内容を見ることはできません。
このシステムに基づいて保持されているデータへのアクセスをAppleに許可するよう求める政府の要請は、捜査権限法(IPA)に基づいて出されている。
これには、政府が技術能力通知と呼ばれる秘密通知を発行できる権限が含まれており、これにより企業に対し顧客データにアクセスする方法を備えた英国のセキュリティサービスの提供を秘密裏に強制できる。
政府は、アップルへの最初の通告に対する法的異議申し立てを秘密にしておこうと戦ったが、失敗に終わった。
この通知は、自国民のデータに影響を与えることを懸念した米国の政治家らの怒りを買い、後に撤回された。
しかし、政府は10月に米国のユーザーには適用されない新たな要請を出した。
以前、秘密命令に反対する活動をしていたプライバシー保護団体は、Appleの新たな法的申し立てを歓迎した。
プライバシー・インターナショナルは「アップルが英国の機密命令体制に再び挑戦していることを知り、うれしく思う」と述べた。
「我々はAppleの主張の内容を知りませんが、それがAppleのiCloudストレージのセキュリティを損なうことを目的とした以前に報告された命令に関連しているのであれば、Appleの主張は、我々やLibertyの主張と並んで、我々のすべてのプライバシーとセキュリティを維持する上で非常に重要です。」
リバティ社の対外関係ディレクター、ルース・アーリッヒ氏は、この事件は「非常に重要」であり、「将来にわたって国民のプライバシー権に広範な影響を与える」と述べた。
「エンドツーエンドの暗号化は、銀行口座情報、健康情報、個人的な会話や画像などの個人データを保護する重要なセキュリティツールです」と彼女は述べた。
「これらすべての情報へのバックドアを開くことは、私たちの個人データに幅広いリスクをもたらします。政府が多くの懸念に耳を傾け、私たちのプライバシー権の保護に取り組むことが重要です。」
しかし、監視権限の行使を独立して監督する捜査権限委員のブライアン・レブソン卿は、以前、メディアが対外的に「バックドア」という用語を使用することを批判していた。
同氏は、本件に関係するような通知は「国務長官が必要かつ適切であると判断し、この決定が司法委員によって独立して検討され承認された場合」にのみ発行されると述べた。
同氏は、データの要求にはIPAに基づく個別の認可も必要であり、これらは独立した監督の対象となると付け加えた。
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。
- 2025 年 2 月 26 日公開
- 2025 年 2 月 14 日公開
- 2025 年 8 月 29 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvg0kk3ek2vo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-04T10:22:40+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9d2c/live/4e052df0-8fde-11f1-a999-eb18d79411a9.jpg",
    readTime: 5,
  },
  {
    id: "bp-s-5-7bn-profit-highest-since-2022-as-6ef9d282",
    title: "BP's $5.7bn profit highest since 2022 as Iran war pushes up oil price",
    titleJa: "イラン戦争で原油価格高騰、BPの利益57億ドルは2022年以来最高",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `BP's $5.7bn profit highest since 2022 as Iran war pushes up oil price
- Published
Profits at BP have surged to the highest since 2022 after the war in the Middle East pushed up oil prices.
The oil giant reported a profit of $5.73bn (£4.26bn) between April and June. That was more than double the $2.35bn made a year earlier and the highest quarterly profit since 2022 when the Russia-Ukraine war began.
The price of crude oil has jumped since the outbreak of the Iran war earlier this year due to major disruption to global supplies of oil and gas through the Strait of Hormuz.
Environmental and poverty campaigners blasted BP for "profiteering" off skyrocketing oil prices.
Crude oil prices shot up after the outbreak of conflict in the Middle East, which in turn pushed up petrol and diesel prices and domestic energy costs around the world.
BP said Brent crude – the global benchmark for oil prices – averaged $103.85 a barrel in the April-to-June quarter, up from $67.88 in the same period last year.
The rise in the oil price has benefited all energy companies, not just BP, with rival Shell also reporting a doubling in quarterly profits last week.
On Monday, US President Donald Trump said American oil firms ExxonMobil and Chevron were "making too much money".
He told reporters: "I don't like it, and I should be the last one to say because I'm a big free enterprise guy.
"They ought to give some of that back to the public, and they better cut the retail price, the consumer price."
Threat to oil tankers in Middle East worst since start of Iran war, analysts say
- Published22 hours ago
Burnham says he told Trump UK will be pragmatic about North Sea oil
- Published4 days ago
Despite the big rise in profits, BP chief executive Meg O'Neill said the company was not reaching its full potential.
BP, which employs nearly 14,000 people in the UK, confirmed plans to move further away from clean energy, revealing plans to sell off its US renewable natural gas business Archaea.
O'Neill said this was part of her plan to prioritise "value, not sentiment or history".
"We have to focus on the assets with the strongest potential to deliver competitive returns and long-term value," she said.
Last week, BP announced it was putting its North Sea business up for sale in a move that would end 60 years of production in the region by the company.
Russ Mould, investment director at AJ Bell, said the sell-offs intended to make the business more streamlined.
"O'Neill will be aware she cannot rely on oil and gas prices remaining this high indefinitely," he said.
"She needs to make sure it can prosper even when the backdrop is less helpful."
The bumper profits reported by oil companies have led to an angry response from campaign groups.
Angharad Hopkinson, from environmental group Greenpeace, said BP's results showed that "corporate gains have become entirely divorced from the public good".
She said "the one point on which we agree with BP" is its decision to sell off its North Sea operations.
"Prolonging this parasitic relationship by trying to squeeze the last few drops of expensive oil out of the North Sea is sheer folly," Hopkinson said.
Simon Francis, co-ordinator of the End Fuel Poverty Coalition, said oil firms "have banked more billions from a crisis that has created real hardship for millions of households".
"The lesson is not to hand yet more tax breaks to an industry posting billions in profit every quarter, but to use Windfall Tax receipts to clear the record energy debt households built up during the crisis," he said.
Energy firms operating in the UK are subject to a windfall tax - called the Energy Profits Levy - that was introduced in 2022.
However, the tax only applies to profits made from extracting oil and gas in the UK.`,
    bodyJa: `イラン戦争で原油価格高騰、BPの利益57億ドルは2022年以来最高
- 公開されました
中東戦争による原油価格の高騰を受け、ＢＰの利益は２０２２年以来の最高水準に上昇した。
石油大手は4月から6月までに57億3000万ドル（42億6000万ポンド）の利益を報告した。これは前年同期の23億5000万ドルの2倍以上で、ロシア・ウクライナ戦争が始まった2022年以降で最高の四半期利益となった。
今年初めにイラン戦争が勃発して以来、ホルムズ海峡を通じた世界的な石油とガスの供給に大きな混乱が生じたため、原油価格が高騰した。
環境と貧困の活動家らは、石油価格の高騰から「暴利を貪っている」としてBPを非難した。
中東紛争の勃発後、原油価格が高騰し、世界中でガソリンとディーゼルの価格と国内のエネルギーコストが上昇した。
BPによると、原油価格の世界的なベンチマークであるブレント原油は、4～6月期の平均1バレル当たり103.85ドルで、前年同期の67.88ドルから上昇した。
原油価格の上昇はBPだけでなくすべてのエネルギー会社に恩恵をもたらしており、ライバルのシェルも先週四半期利益が倍増したと報告している。
ドナルド・トランプ米大統領は月曜日、米石油会社エクソンモービルとシェブロンが「儲けすぎている」と述べた。
同氏は記者団に対し、「私はそれが気に入らないし、私は自由企業の大物なので、最後に言うべきではない。
「彼らはその一部を国民に還元すべきであり、小売価格、つまり消費者物価を引き下げたほうがよい。」
中東の石油タンカーに対する脅威はイラン戦争開始以来最悪だとアナリストが語る
- 22 時間前に公開
バーナム氏はトランプ大統領に対し、英国は北海石油に関して現実的になるだろうと語った
- 4 日前に公開
利益が大幅に増加したにもかかわらず、ＢＰのメグ・オニール最高経営責任者（ＣＥＯ）は、同社の潜在能力を最大限に発揮できていないと述べた。
英国で約1万4000人を雇用するBPは、クリーンエネルギーからさらに遠ざかる計画を確認し、米国の再生可能天然ガス事業アーキアを売却する計画を明らかにした。
オニール氏は、これは「感情や歴史ではなく価値」を優先する計画の一環だと述べた。
同氏は「競争力のあるリターンと長期的な価値をもたらす可能性が最も高い資産に集中しなければならない」と述べた。
BPは先週、同社による北海地域での60年にわたる生産に終止符を打つため、北海事業を売りに出すと発表した。
ＡＪベルの投資ディレクター、ラス・モールド氏は、今回の売却は事業をより合理化することが目的だと述べた。
「オニール氏は、石油とガスの価格がこのままいつまでも高止まりすることに依存できないことを認識するだろう」と述べた。
「彼女は、背景が役に立たない場合でも、それが成功できるようにする必要があります。」
石油会社が報告した莫大な利益は、選挙運動団体からの怒りの反応を招いている。
環境団体グリーンピースのアンガラド・ホプキンソン氏は、BPの調査結果は「企業の利益が公共の利益から完全に切り離された」ことを示していると述べた。
同氏は、「BP社に同意できる唯一の点は、北海事業を売却するというBP社の決定だ」と述べた。
「北海から高価な石油の最後の数滴を絞り出そうとすることで、この寄生関係を長引かせるのは全くの愚かなことだ」とホプキンソン氏は述べた。
「燃料貧困撲滅連合」コーディネーターのサイモン・フランシス氏は、石油会社は「何百万もの世帯に真の困難をもたらした危機からさらに数十億ドルを銀行に預けた」と述べた。
同氏は、「教訓は、四半期ごとに数十億ドルの利益を上げている業界にさらなる減税を与えることではなく、棚ぼた税の収入を利用して、危機の間に家計が抱えた記録的なエネルギー債務を清算することだ」と述べた。
英国で事業を展開するエネルギー会社は、2022年に導入されたエネルギー利益税と呼ばれる棚ぼた税の対象となる。
ただし、この税は英国での石油とガスの採掘から得られた利益にのみ適用されます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cg5l11m02j3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-04T10:07:05+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d288/live/6e9f5aa0-8ff6-11f1-b2ab-0dd01740f9f6.jpg",
    readTime: 4,
  },
  {
    id: "takaichi-s-fiscal-push-could-lift-growth-8449f451",
    title: "Takaichi’s fiscal push could lift growth — and Japan’s already-rising interest bill",
    titleJa: "高市氏の財政推進は成長率を押し上げる可能性があり、すでに上昇している日本の利子請求額も押し上げる可能性がある",
    summaryJa: "高市早苗首相は食料品の消費税引き下げ計画を推進しており、これが成功すれば1989年の施行以来初めての減税となると伝えられている。火曜日、与党自民党は主要委員会でこの法案を進め、高市氏は今月までに閣議承認され、秋には法案が国会に上程されることを望んでいると日経が報じた。",
    bodyOriginal: `Japanese Prime Minister Sanae Takaichi has pushed forward with her plan to slash the consumption tax on food, which reportedly would be the first time the tax will be cut since its implementation in 1989 if she succeeds.
On Tuesday, the ruling Liberal Democratic party advanced the bill through key committees, with Nikkei reporting Takaichi wants cabinet approval by this month, and for the bill to be tabled in parliament in the autumn.
Takaichi said last Thursday that Japan would cut the tax on food to 1% from 8% for two years from April 2027, and offer cash payments to offset the impact of that 1% on select groups.
The food-tax cut captures the central gamble behind Takaichi's economic agenda: Japan is giving up revenue now in the hope that stronger consumption and an estimated 370 trillion yen (2.35 trillion) public-private investment plan through to the 2040 fiscal year will help boost growth.
The plan, which will cut an estimated 4.4 trillion yen in revenue from the government's coffers has already drawn criticism from her own Liberal Democratic Party, including former ministers Taro Kono and Takeshi Iwaya. Nikkei also reported that former Prime Minister Shigeru Ishiba walked out of the meeting halfway.
In a post on X, Kono, former defense minister under the Abe administration, warned that the plan could undermine confidence in Japan's fiscal position, push interest rates higher and weaken the yen.
Iwaya, who served as foreign affairs minister in 2024 and 2025 has also argued against the cut, reportedly saying "The risk is very high. If the market reacts negatively, the yen will weaken further and import prices will rise."
Even the International Monetary Fund urged Tokyo to not reduce the consumption tax in its 2026 country report, saying it was "an untargeted measure that would erode fiscal space and add to fiscal risks."
Fiscal worries — and silver linings
Takaichi has pledged not to use deficit-financing bonds to fund her schemes, instead the government has said it will review spending, tax breaks, subsidies and public funds, but details are scarce. She has also made it clear the the cut will be just for a 2-year period, after which the consumption tax will revert to 8%.
Still, Japan grapples with one of the highest public debt levels in the world, with the International Monetary Fund projecting government debt at roughly 204% of gross domestic product in 2026, making any additional borrowing detrimental to its fiscal health.
Justin Heng, APAC rates strategist at HSBC Global Investment Research, said Takaichi's latest economic blueprint had "effectively cemented" an expansionary fiscal stance, while the government had loosened its guardrails by moving away from a primary-surplus target for its budget.
"With limited clarity on funding channels, additional debt issuance remains a plausible outcome," Heng said, warning that long-end Japanese government bond yields were likely to remain elevated.
Japan's 10-year government bond yield was around 2.85% in Tuesday trading, close to multi-decade highs.
Yields are rising because Takaichi's program is highly inflationary and markets fear the BOJ is behind the curve on inflation, Jesper Koll, expert director at Monex Group, said.
The BOJ's commitment to continue raising interest rates and reduce JGB purchases is also likely to push up Japan's interest costs, which will constrain fiscal room.
Debt-servicing costs already account for about a quarter of Japan's fiscal 2026 budget, with interest payments projected to rise from 13 trillion yen in the 2026 fiscal year to 21.6 trillion yen in the 2029 fiscal year under the Finance Ministry's 3% nominal-growth scenario.
A possible silver lining is that the government's target of more than 370 trillion yen in investment could help support its fiscal health, while higher yields might draw some investors.
Koll said the government's role would largely be to backstop projects, with around 90% of the financing expected to come from the private sector. If it draws in investment, raises productivity and expands the tax base, stronger growth could make Japan's debt burden more manageable, he added.
Stefan Rittner, senior portfolio manager at Allianz Global Investors, said markets were more likely to accept measures that improve productivity, labor supply and long-term growth than spending aimed mainly at supporting consumption.
"Japan's debt story is ultimately a growth story ... If fiscal spending lifts growth and productivity, markets will be more forgiving. If it merely supports consumption, investors may become more skeptical," Rittner said. "The market is not worried about one spending package. It would worry about a pattern."
Another ray of hope is that higher yields could start drawing investors. John Li, head of Asia fixed income credit strategy at J.P. Morgan Private Bank, said the gap between long-term yields and the BOJ's 1% overnight rate could attract domestic buyers, including Japanese life insurers.`,
    bodyJa: `高市早苗首相は食料品の消費税引き下げ計画を推進しており、これが成功すれば1989年の施行以来初めての減税となると伝えられている。
火曜日、与党自民党は主要委員会でこの法案を進め、高市氏は今月までに閣議承認され、秋には法案が国会に上程されることを望んでいると日経が報じた。
高市氏は先週木曜日、日本は2027年4月から2年間、食料品税を8％から1％に引き下げ、一部のグループに対する1％の影響を相殺する現金給付を行うと述べた。
食料税減税は、高市氏の経済政策の背後にある中心的な賭けを捉えている。日本は消費拡大と2040会計年度までの推定370兆円（2兆3500億）の官民投資計画が成長押し上げにつながることを期待して、今、歳入を放棄している。
この計画は推定4.4兆円の国庫からの歳入を削減するもので、河野太郎元大臣や岩屋毅元大臣を含む自民党からすでに批判を集めている。日経新聞は、石破茂元首相が途中退席したことも報じた。
安倍政権下で元防衛大臣だった河野氏はXへの投稿で、この計画は日本の財政状況に対する信頼を損ない、金利上昇と円安を招く可能性があると警告した。
2024年と2025年に外務大臣を務めた岩屋氏も「リスクは非常に高い。市場が否定的に反応すれば、円安がさらに進み、輸入価格が上昇する」と述べ、削減に反対したと伝えられている。
国際通貨基金でさえ、2026年の国別報告書で消費税を減税しないよう日本政府に要請し、消費税は「財政余地を侵食し、財政リスクを増大させる的を絞っていない措置」であると述べた。
財政上の懸念と希望の兆し
高市氏は自身の計画の資金調達に赤字国債を利用しないと約束しており、代わりに政府は歳出、減税、補助金、公的資金を見直すとしているが、詳細はほとんど分かっていない。同氏はまた、減税は2年間のみで、その後は消費税が8％に戻ることも明らかにした。
それでも、日本は世界で最も高い公的債務水準の一つに直面しており、国際通貨基金は2026年に政府債務が国内総生産の約204％になると予測しており、追加の借り入れは財政健全性に悪影響を及ぼすことになる。
ＨＳＢＣグローバル・インベストメント・リサーチのアジア太平洋地域金利ストラテジスト、ジャスティン・ヘン氏は、高市氏の最新の経済青写真は拡張的な財政スタンスを「効果的に固めた」一方、政府は基礎的財政黒字目標から離れてガードレールを緩めたと述べた。
ヘン氏は「資金調達経路の明確性が限られているため、追加国債発行は依然として妥当な結果だ」と述べ、日本の長期国債利回りは高止まりする可能性が高いと警告した。
火曜日の取引で日本の10年国債利回りは約2.85％となり、数十年ぶりの高水準に近づいた。
マネックスグループの専門ディレクター、ジェスパー・コル氏は、高市氏のプログラムはインフレ率が高く、市場は日銀がインフレ対策に乗り遅れていると懸念しているため、利回りが上昇していると述べた。
日銀が利上げを継続し国債購入額を削減するとのコミットメントも、日本の金利コストを押し上げる可能性が高く、財政余地が制約されることになる。
債務返済費はすでに2026年度予算の約4分の1を占めており、財務省の名目成長率3％シナリオでは利払い費は2026年度の13兆円から2029年度には21兆6,000億円に増加すると見込まれている。
可能性のある希望の兆しは、370兆円以上という政府の投資目標が財政健全性の支援に役立つ可能性がある一方で、より高い利回りが一部の投資家を引き寄せる可能性があることだ。
コル氏は、政府の役割は主にプロジェクトのバックストップであり、資金の約90％は民間部門から得られると予想されると述べた。同氏は、投資を呼び込み、生産性を高め、課税ベースを拡大すれば、力強い成長によって日本の債務負担がより管理しやすくなる可能性があると付け加えた。
アリアンツ・グローバル・インベスターズのシニア・ポートフォリオ・マネジャー、ステファン・リットナー氏は、市場は主に消費支援を目的とした支出よりも生産性、労働供給、長期成長を改善する政策を受け入れる可能性が高いと述べた。
リトナー氏は「日本の債務物語は最終的には成長物語だ…財政支出が成長と生産性を押し上げるのであれば、市場はより寛容になるだろう。単に消費を支援するだけであれば、投資家はより懐疑的になるかもしれない」と述べた。 「市場は単一の支出パッケージについては心配していない。パターンについては心配するだろう。」
もう一つの希望の光は、利回りの上昇により投資家が集まり始める可能性があることだ。 JPモルガン・プライベート・バンクのアジア債券信用戦略責任者のジョン・リー氏は、長期利回りと日銀の翌日物金利1％との差が日本の生命保険会社を含む国内の買い手を引き寄せる可能性があると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/japan-takaichi-food-tax-cut-jgb-boj.html",
    publishedAt: "2026-08-04T08:36:34+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "bp-profit-more-than-doubles-as-trump-bla-e81a4ced",
    title: "BP profit more than doubles as Trump blasts Big Oil for ‘making too much money’",
    titleJa: "トランプ大統領が大手石油会社を「儲けすぎ」と非難、BPの利益は2倍以上に",
    summaryJa: "米国とイランの対立を背景にエネルギー大手が化石燃料価格の高騰で巨額の利益を得ているため、英国のBPは火曜日、第2四半期の利益が大幅に増加したと報告した。石油大手は4月から6月期に純利益の代用として基礎的交換費用利益として57億ドルを計上した。 LSEGがまとめたコンセンサスによると、この額はアナリスト予想の50億ドルを余裕で上回った。",
    bodyOriginal: `Britain's BP on Tuesday reported a sharp upswing in second-quarter profit, as energy supermajors reap massive profits from higher fossil fuel prices amid hostilities between the U.S. and Iran.
The oil giant posted underlying replacement cost profit, used as a proxy for net profit, of $5.7 billion for the April to June period. That comfortably beat analyst expectations of $5 billion, according to an LSEG-compiled consensus.
BP's net profit came in at $2.35 billion over the same period last year and $3.2 billion for the first three months of 2026.
The results come as oil and gas prices have surged amid the sprawling Middle East conflict. The fighting has severely disrupted shipping through the strategically vital Strait of Hormuz, a narrow maritime choke point that typically handles around a fifth of the world's oil and natural gas.
U.S. President Donald Trump on Monday lashed out at U.S. oil majors Exxon Mobil and Chevron for making "too much money" off higher fuel prices amid the Iran war, reiterating his demand for lower prices at the pump.
"They're making too much money based on a shortage," Trump told reporters at the White House. "I don't like it."
Exxon's second-quarter profits more than doubled to $14.5 billion compared to a year ago, while Chevron's earnings soared by nearly 400% to $12 billion compared to $2.5 billion in the same period last year. CNBC has reached out to Exxon and Chevron for comment.
Key highlights from Q2:
- BP increased its dividend by 4% to 8.66 cents per ordinary share for the second quarter.
- Operating cash flow came in at $10.9 billion after taking into account a $1 billion adjusted working capital build.
- Net debt came in at $22.25 billion at the end of the second quarter, down from $25.3 billion at the end of March.
BP CEO Meg O'Neill said the second-quarter results were underpinned by a strong performance across the group and responded to Trump's criticism of Big Oil.
"Look, I understand the pressure that the ordinary household feels when they pull into the service station to fill up and see the prices. The reality is we produce a global commodity and the prices for the product we sell hangs off that global commodity price," O'Neill told CNBC's "Squawk Box Europe" on Tuesday.
"What BP is doing is making sure that we are focused on the things we can do to try to help address the situation. We're driving hard on reliability, both on our upstream assets where we produce those barrels and the refining assets where we refine them."
O'Neill said the company had made adjustments to how the firm's refining runs are set up to maximize the availability of products consumers most need at any point in time, citing jet fuel and diesel as an example.
Analysts at Citi said BP's significant quarter-on-quarter reduction in net debt means the company has now lost its unwanted place as the highest-levered of the international oil companies, with further reductions expected in the second half of the year.
"The scrapping of share buybacks at 4Q results undoubtedly a key contributor; the decision to raise dividends by 4% a partial acknowledgement of the improved financial strength," the analysts said in a research note.
Simplification push
BP said Tuesday it had launched the process to market Archaea Energy for a potential sale. The company had bought the U.S. biogas business for $4.1 billion in 2022 as it sought to expand its renewables business, a strategy it scrapped in early 2025.
BP has been pushing ahead with its simplification drive as it doubles down on its core business model of oil and gas and divests non-core assets to reduce debt.
The company said Monday that it had completed the sale of its Gelsenkirchen refinery and related businesses to investment firm Klesch Group, in a deal expected to lower the oil giant's underlying operating expenditure by around $1 billion.
BP is also seeking to stabilize its management team after a turbulent period of executive turnover. The London-listed firm abruptly removed its chairman Albert Manifold in May after just eight months on the job. The board cited "serious concerns" related to governance standards, oversight and conduct, while Manifold has disputed the allegations.
Shares of BP traded 0.8% higher on Tuesday morning. The stock has climbed more than 27% year-to-date.`,
    bodyJa: `米国とイランの対立を背景にエネルギー大手が化石燃料価格の高騰で巨額の利益を得ているため、英国のBPは火曜日、第2四半期の利益が大幅に増加したと報告した。
石油大手は4月から6月期に純利益の代用として基礎的交換費用利益として57億ドルを計上した。 LSEGがまとめたコンセンサスによると、この額はアナリスト予想の50億ドルを余裕で上回った。
BPの純利益は前年同期比23億5000万ドル、2026年最初の3カ月は32億ドルとなった。
この結果は、大規模な中東紛争の中で石油とガスの価格が高騰していることを受けて生じたものである。戦闘により、通常世界の石油と天然ガスの約5分の1を扱う狭い海上のチョークポイントである戦略的に重要なホルムズ海峡を通過する輸送が大幅に混乱した。
ドナルド・トランプ米大統領は月曜日、イラン戦争中の燃料価格高騰で「儲けすぎている」として米石油大手エクソン・モービルとシェブロンを激しく非難し、燃料価格引き下げの要求を繰り返した。
トランプ大統領はホワイトハウスで記者団に対し、「彼らは不足を理由に儲けすぎている」と語った。 "私はそれが気に入りません。"
エクソンの第２・四半期利益は前年同期の２５億ドルから２倍以上の１４５億ドルに増加し、シェブロンの利益は前年同期の２５億ドルから４００％近く急増し１２０億ドルとなった。 CNBCはエクソンとシェブロンにコメントを求めた。
第 2 四半期の主なハイライト:
- BP は第 2 四半期の配当を 4% 増額して普通株 1 株あたり 8.66 セントにしました。
- 調整後の運転資本構築額 10 億ドルを考慮すると、営業キャッシュ フローは 109 億ドルとなりました。
- 第 2 四半期末の純負債は 222 億 5000 万ドルとなり、3 月末の 253 億ドルから減少しました。
ＢＰのメグ・オニール最高経営責任者（ＣＥＯ）は、第２・四半期決算はグループ全体の好調な業績に支えられており、トランプ大統領の大手石油批判に応えたと述べた。
オニール氏は火曜日、CNBCの「スコーク・ボックス・ヨーロッパ」で、「一般家庭が給油して価格を確認するためにガソリンスタンドに入るときに感じるプレッシャーを理解している。現実には、私たちは世界的な商品を生産しており、私たちが販売する製品の価格はその世界的な商品価格に依存している」と語った。
「BPが取り組んでいることは、この状況に対処するために私たちができることに重点を置くことです。私たちは、バレルを生産する上流の資産と精製する精製資産の両方で、信頼性を重視して取り組んでいます。」
オニール氏は、ジェット燃料とディーゼルを例に挙げ、消費者がいつでも最も必要とする製品を最大限に入手できるよう、同社の精製工程の設定方法を調整したと述べた。
シティのアナリストらは、ＢＰの純負債が前四半期比で大幅に減少したことは、同社が国際石油会社の中で最もレバレッジが高いという望ましくない地位を失ったことを意味しており、今年下半期にはさらなる削減が見込まれると述べた。
アナリストらはリサーチノートで「第４四半期の自社株買い廃止が主な要因であることは間違いない。４％増配の決定は財務体質の改善を部分的に認めたものだ」と述べた。
簡素化の推進
BPは火曜日、アーキア・エナジーの売却の可能性を売り込むプロセスを開始したと発表した。同社は再生可能エネルギー事業の拡大を目指し、2022年に米国のバイオガス事業を41億ドルで買収していたが、この戦略は2025年初めに撤回した。
BPは石油・ガスの中核ビジネスモデルを倍増させ、債務削減のため非中核資産を売却するなど、簡素化推進を進めている。
同社は月曜日、ゲルゼンキルヒェン製油所と関連事業の投資会社クレシュ・グループへの売却が完了したと発表した。この取引により、石油大手の実質的な営業支出は約10億ドル削減される見込みである。
BPはまた、役員の交代という激動の時期を経て、経営陣の安定化を目指している。ロンドン上場の同社は、5月に就任わずか8カ月で会長のアルバート・マニフォールド氏を突然解任した。取締役会はガバナンス基準、監督、行為に関する「重大な懸念」を挙げたが、マニホールド側はこの申し立てに異議を唱えている。
ＢＰの株価は火曜日午前に０．８％高で取引された。株価は年初来で２７％以上上昇した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/bp-2q-earnings-oil-iran-war.html",
    publishedAt: "2026-08-04T08:11:48+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "treasury-yields-are-broadly-flat-as-inve-a182927e",
    title: "Treasury yields are broadly flat as investors mull uncertainty around peace talks",
    titleJa: "投資家が和平交渉を巡る不確実性を懸念し、米国債利回りはほぼ横ばい",
    summaryJa: "投資家が中東の交渉状況を巡る不透明感が続いていることを考慮する中、火曜日の米国債利回りはほぼ横ばいとなった。米政府借入の主要指標である10年米国債利回りは横ばいの4.686％となった。",
    bodyOriginal: `U.S. Treasury yields were broadly flat on Tuesday as investors mulled the ongoing uncertainty around the state of negotiations in the Middle East.
The yield on the 10-year U.S. Treasury note — the key benchmark for U.S. government borrowing — was flat at 4.686%.
The 2-year Treasury note yield, which more closely tracks short-term Federal Reserve interest rate policy, was broadly flat at 4.250%. The longer-dated 30-year Treasury bond yield was also unmoved at 5.232%.
One basis point is equal to 0.01%, and yields and prices move in opposite directions.
The 30-year Treasury yield is hovering just below its highest level since 2007, as investors reacted to an apparently "hawkish hold" from Federal Reserve interest rate setters last week.
Yields are struggling for direction as conflicting reports about the progress of U.S.-Iran talks have kept investors on tenterhooks.
President Donald Trump has warned that the latest round of negotiations with Iran is the "last chance" to bring an end to the five-month conflict.
However, Tehran continues to deny that any direct negotiations with the U.S. are taking place — or that there are plans to hold them in the future.
Economic data set for release on Tuesday include JOLTs job openings as well as international trade figures for the month.
— CNBC's Mike Sheen also contributed to this report.`,
    bodyJa: `投資家が中東の交渉状況を巡る不透明感が続いていることを考慮する中、火曜日の米国債利回りはほぼ横ばいとなった。
米政府借入の主要指標である10年米国債利回りは横ばいの4.686％となった。
米連邦準備理事会（FRB）の短期金利政策とより密接に連動する2年物国債利回りは4.250％でほぼ横ばいとなった。 30年長期国債利回りも5.232％で動かなかった。
1ベーシスポイントは0.01%に相当し、利回りと価格は逆方向に動きます。
先週、米連邦準備理事会（FRB）の金利設定決定者による明らかに「タカ派的なホールド」に投資家が反応したため、30年米国債利回りは2007年以来の最高水準をわずかに下回る水準で推移している。
米国とイランの協議の進展に関する相反する報道により投資家が緊張状態にあるため、利回りは方向感を見極めるのに苦労している。
ドナルド・トランプ大統領は、イランとの最新の交渉ラウンドが5カ月にわたる紛争に終止符を打つ「最後のチャンス」であると警告した。
しかし、イラン政府は米国との直接交渉が行われていないこと、あるいは将来的に交渉を行う計画があることを否定し続けている。
火曜日に発表予定の経済指標には、JOLTの求人数や同月の国際貿易統計などが含まれる。
— CNBC のマイク・シーン氏もこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/treasury-yields-investors-peace-talks-uncertainty.html",
    publishedAt: "2026-08-04T08:08:04+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "trump-warns-iran-talks-are-last-chance-t-5298c501",
    title: "Trump warns Iran talks are ‘last chance’ to end war — oil prices rise as Tehran denies negotiations",
    titleJa: "トランプ大統領、イラン協議は戦争終結への「最後のチャンス」だと警告―イラン政府が交渉を拒否する中、原油価格は上昇",
    summaryJa: "ドナルド・トランプ大統領は、イランとの最新の交渉ラウンドが5カ月にわたる紛争に終止符を打つ「最後のチャンス」であると警告した。トランプ大統領は月曜日遅く、大統領執務室で記者団に対し、イラン、サウジアラビア、アラブ首長国連邦、カタールなどの要請に応じて協議が「現在進行中」であると語った。",
    bodyOriginal: `President Donald Trump has warned that the latest round of negotiations with Iran is the "last chance" to bring an end to the five-month conflict.
Trump told reporters in the Oval Office late on Monday that talks are "going on right now," at the request of Iran, Saudi Arabia, the United Arab Emirates, Qatar and others.
However, Tehran continues to deny that any direct negotiations with the U.S. are taking place — or that there are plans to hold them in the future.
Iran's President Masoud Pezeshkian said on Tuesday that Tehran would continue to defend its borders but insisted it does not seek an expansion of the conflict, according to state media reports.
"This is a last chance for them to sign a good document," Trump said.
In a Truth Social post earlier on Monday, Trump described Iran's leaders as "unbelievably duplicitous" and accused them of lying about peace talks that are underway, "whether Iran wants to admit it or not."
Iranian foreign ministry spokesperson Esmail Baghaei had again poured cold water on the notion of direct negotiations with the United States.
Baghaei told a press conference on Monday that there is no immediate plan for negotiations with the U.S., reiterating that Tehran is currently only engaged in talks with Oman regarding the Strait of Hormuz.
It came after the president decided to call off "massive attacks" on Iran to allow for talks he said were starting on Monday.
The decision lifted market sentiment, with oil prices slumping in response.
Oil prices rebounded slightly early on Tuesday as traders became less confident that a diplomatic solution to the conflict, which has upended energy markets, is in sight.
West Texas Intermediate futures were up 1.29% at $81.38 per barrel as of 1:35 a.m. ET. Brent crude, the international benchmark, was up 1.73% at $85.23 a barrel.
U.S. Central Command said on Monday it had redirected 44 commercial vessels as part of its ongoing blockade of the Strait of Hormuz, having disabled two and boarded two.
Meanwhile, Iraqi pro-militia outlet Naya late on Monday reported an explosion in Kuwait overnight that could be heard in Basrah Province.`,
    bodyJa: `ドナルド・トランプ大統領は、イランとの最新の交渉ラウンドが5カ月にわたる紛争に終止符を打つ「最後のチャンス」であると警告した。
トランプ大統領は月曜日遅く、大統領執務室で記者団に対し、イラン、サウジアラビア、アラブ首長国連邦、カタールなどの要請に応じて協議が「現在進行中」であると語った。
しかし、イラン政府は米国との直接交渉が行われていないこと、あるいは将来的に交渉を行う計画があることを否定し続けている。
国営メディアの報道によると、イランのマスード・ペゼシキアン大統領は火曜日、イランは国境の防衛を継続すると述べたが、紛争の拡大は求めていないと主張した。
トランプ大統領は「これは彼らにとって良い文書に署名する最後のチャンスだ」と語った。
トランプ大統領は月曜日初めのトゥルース・ソーシャルへの投稿で、イラン指導者らを「信じられないほど二枚舌」と表現し、「イランが認めたいか否かに関わらず」進行中の和平交渉について彼らが嘘をついていると非難した。
イラン外務省のエスマイル・バガエイ報道官は、米国との直接交渉の概念に再び冷や水を浴びせた。
バガイ氏は月曜日の記者会見で、米国との当面の交渉計画はないと述べ、イラン政府は現在ホルムズ海峡に関するオマーンとの協議のみを行っていると繰り返した。
これは、大統領が月曜に始まると述べた協議を可能にするため、イランへの「大規模攻撃」を中止することを決定した後の出来事だった。
この決定は市場心理を高め、これを受けて原油価格も下落した。
エネルギー市場を一変させた紛争に対する外交的解決の見通しが立ったという確信がトレーダーらの間で弱まり、原油価格は火曜序盤に若干反発した。
ウェスト・テキサス・インターミディエート先物は東部時間午前１時３５分現在、１．２９％高の１バレル＝８１．３８ドルとなっている。国際ベンチマークであるブレント原油は１．７３％上昇し、１バレル＝８５．２３ドルとなった。
米中央軍は月曜日、進行中のホルムズ海峡封鎖の一環として商船44隻の進路を変更し、2隻を航行不能にし、2隻を乗船させたと発表した。
一方、イラクの親民兵メディア「ナヤ」は月曜遅く、クウェートで夜に爆発があり、バスラ州でも音が聞こえたと報じた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/us-iran-war-trump-hormuz.html",
    publishedAt: "2026-08-04T07:04:07+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "cnbc-daily-open-a-u-s-yen-intervention-d-f3386993",
    title: "CNBC Daily Open: A U.S. yen intervention dressed in euros",
    titleJa: "CNBCデイリーオープン：ユーロを装った米ドル介入",
    summaryJa: "こんにちは、シンガポールからフイ・ジエと申します。 CNBC のデイリー オープンの別版へようこそ。報道によると、敏感な米国債市場への悪影響を避けるため、米政府がこの介入の資金としてユーロを売ったことが示唆されており、先週の米国の円高介入は、見かけよりも世界的に重要な意味を持つ可能性がある。",
    bodyOriginal: `Hello, this is Hui Jie writing to you from Singapore. Welcome to another edition of CNBC's Daily Open.
The U.S. intervention to bolster the yen last week may have more global significance than it appears, as reports suggest that Washington sold euros to fund this intervention to avoid any negative impact on the sensitive Treasury market.
It's also earnings galore around the globe, with Amazon, HSBC and Aramco some of the big names that have reported today.
What you need to know today
Instead of selling dollars to help Japan prop up the yen as it had in previous interventions, the U.S. reportedly sold euros instead to fund the currency-buying operation, thereby weakening the greenback against the euro.
What could be the reason? One possibility is that Washington wants to avoid destabilizing the sensitive Treasury markets. Industry veterans told CNBC that one of Washington's biggest concerns was avoiding a scenario where Japan would need to dump large quantities of Treasurys to finance unilateral intervention.
The euro had strengthened to a high of 1.1558 against the greenback on Monday, hitting its strongest level in almost two months.
Earnings galore
In the U.S, Amazon hit a new all-time high on Monday, putting its market cap over the $3 trillion threshold for the first time following a better-than-expected earnings report last week.
But this may be distorted by its stake in AI companies like OpenAI and Anthropic. Microsoft, Amazon and Alphabet booked sizable investment gains in the most recent quarter thanks to stakes in Anthropic and OpenAI, and in one case, SpaceX.
Anthropic and OpenAI have both seen soaring valuations in private markets, with each valued just south of $1 trillion amid the ongoing AI boom.
HSBC, Europe's second-largest bank by assets, reported a results beat, with second-quarter pre-tax profit of $10.1 billion on Tuesday, exceeding analysts' estimates on the back of stronger growth in banking net interest income and other higher fees.
Second-quarter profit before tax rose 60% year-on-year, also helped by a net favorable impact from notable items of $2.6 billion, the company said.
Middle East oil giant Saudi Aramco on Tuesday reported a jump in second-quarter profit, beating expectations and following a period of severe disruption through the Strait of Hormuz.
The results come as oil supermajors have reported blowout quarterly profits, benefitting from higher fossil fuel prices amid hostilities between the U.S. and Iran.
— Lim Hui Jie
And finally...
Hugging Face CEO says China is winning the AI race and dominating on open models
Hugging Face CEO Clément Delangue said China is winning the artificial intelligence race with open-weight models and could catch up to U.S. model makers as soon as this year.
"They're clearly dominating on open models right now, and I wouldn't be surprised if they start dominating at the frontier either by the end of this year or next year at the rate of progress," he told CNBC's "Squawk on the Street" on Monday.
Fueling this revolution is the open collaboration and sharing ecosystem in China, while model makers in the U.S. are "building in silos" and risk falling behind, he said.
— Samantha Subin`,
    bodyJa: `こんにちは、シンガポールからフイ・ジエと申します。 CNBC のデイリー オープンの別版へようこそ。
報道によると、敏感な米国債市場への悪影響を避けるため、米政府がこの介入の資金としてユーロを売ったことが示唆されており、先週の米国の円高介入は、見かけよりも世界的に重要な意味を持つ可能性がある。
また、アマゾン、HSBC、アラムコなどの大手企業が今日報告したように、世界中で利益が溢れている。
今日知っておくべきこと
以前の介入のように日本が円を下支えするためにドルを売るのではなく、米国は通貨買い作戦の資金調達のためにユーロを売り、それによって対ユーロでドルを下落させたと伝えられている。
何が原因でしょうか?可能性の一つは、ワシントン政府が敏感な米国債市場の不安定化を避けたいということだ。業界のベテランらはCNBCに対し、米国政府の最大の懸念の一つは、一方的な介入の資金調達のために日本が大量の国債を放出する必要があるというシナリオを回避することだと語った。
ユーロは月曜日に対米ドルで１．１５５８ドルの高値まで上昇し、ほぼ２カ月ぶりの高値を付けた。
豊富な収益
米国では、アマゾンが月曜日に史上最高値を更新し、先週の予想を上回る決算報告を受けて時価総額が初めて3兆ドルの大台を突破した。
しかし、これはOpenAIやAnthropicといったAI企業への出資によって歪められている可能性がある。 Microsoft、Amazon、Alphabetは、AnthropicとOpenAI、そしてあるケースではSpaceXの株式のおかげで、直近の四半期にかなりの投資利益を記録した。
Anthropic と OpenAI はどちらも民間市場での評価額が高騰しており、AI ブームが続く中、それぞれの評価額は 1 兆ドルをわずかに下回っています。
資産で欧州第２位の銀行であるＨＳＢＣは火曜日、第２・四半期の税引き前利益が１０１億ドルとなり、銀行純利息収入の堅調な伸びやその他手数料の上昇を背景にアナリストの予想を上回る好決算を報告した。
第２・四半期の税引前利益は前年同期比６０％増加し、これも２６億ドルの注目項目による純好影響に支えられたと同社は述べた。
中東の石油大手サウジアラムコは火曜日、ホルムズ海峡での深刻な混乱期間を経て第２・四半期利益が予想を上回って大幅に増加したと報告した。
この結果は、米国とイランの間の敵対関係による化石燃料価格の上昇の恩恵を受けて、石油大手が四半期利益が大幅に増加したと報告している中で明らかになった。
— リム・フイジエ
そして最後に...
ハグ・フェイスCEO、中国はAI競争に勝利し、オープンモデルで優位に立つと語る
ハギング・フェイスのクレマン・ドゥラング最高経営責任者（CEO）は、中国は無差別級モデルで人工知能の競争に勝ちつつあり、早ければ今年中に米国の模型メーカーに追いつく可能性があると述べた。
同氏は月曜日、CNBCの番組「スコーク・オン・ザ・ストリート」で、「彼らは現在オープンモデルで明らかに優位に立っており、この進歩の速度で今年末か来年までにフロンティアで優位に立ち始めても驚かないだろう」と語った。
この革命を促進しているのは、中国のオープンなコラボレーションと共有エコシステムである一方、米国の模型メーカーは「サイロ化」を進めており、後れをとるリスクがあると同氏は述べた。
— サマンサ・スビン`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/cnbc-daily-open-yen-intervention-dollar-euro-fx.html",
    publishedAt: "2026-08-04T07:01:46+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "could-heatwaves-make-your-food-shop-more-56369f31",
    title: "Could heatwaves make your food shop more expensive?",
    titleJa: "熱波により食料品店の価格が上がる可能性はありますか?",
    summaryJa: "熱波により食料品店の価格が上がる可能性はありますか?- 公開されました",
    bodyOriginal: `Could heatwaves make your food shop more expensive?
- Published
While this summer's hot and dry weather might be enjoyed by sunbathers, it is less than ideal for farmers. Could it also have an effect on the prices we pay for food at the shops?
A chilled supermarket aisle might just be the most comfortable place to be as heatwaves continue to warm up the UK.
Fridges are working in overdrive to keep produce cool, shutters are being pulled down to keep the hot air at bay, and some goods are being taken off the shelves on the hottest days.
More than half of England has entered drought conditions, according to a declaration by the Environment Agency last week.
But as temperatures continue to soar, the chillers are not the only thing that retailers might be adjusting.
Extreme weather creates a knock-on effect on all parts of the supply chain, and the British Retail Consortium is warning that could force prices up.
What is a supply chain?
A supply chain involves a small number of stages, from a product being made until it gets to the shops for people to buy.
If you take a loaf of bread as an example, first the grain is grown, harvested, milled and stored until it is ready to be taken to a factory.
Those ingredients are used to bake and package the bread, which is taken to warehouses before eventually ending up on supermarket shelves.
Each stage of that process will incur expenses such as transport and storage, and rising costs at any step could end up in the product you buy being more expensive.
Last week, farmers and flour producers said they were adapting to the challenges of dealing with the earliest harvest for 50 years.
And the National Farmers' Union has warned there could be a shortage of certain food products if current drought conditions continue.
More from Cambridgeshire:
"One week of hot weather will not make a loaf of bread more expensive," says Prof Manoj Dora, director of the Centre for Intelligent Supply Chains at Anglia Ruskin University, which has campuses in Cambridgeshire and Essex.
But he says prices could rise if supplies of crops run out, largely because of how it would affect the very beginning of the supply chain.
"We may see that meat, milk, eggs, and chicken will be impacted by [a lack of] animal feed," he says.
"Across different food products, prices could surge if we do not manage these things immediately."
Dora describes the UK's supply chain as "resilient" so the effects of the heatwave may not be felt immediately.
"We need to start thinking of the long term by reconfiguring our supply chain in terms of locations and transportation, and by supporting the farmers," he adds.
Are there enough supplies?
Simon Willis, chief executive of Cambridge-based grain storage co-operative Camgrain, says drought conditions mean this year's crops have not been able to reach their full potential.
Harvest usually starts in early August, he says, but after a very dry spring it has already been and gone.
"This year's very dry harvest will mean that the quality will be good but the yield will be down," he tells BBC Radio Cambridgeshire.
David Wheatley, an arable farmer from Wisbech St Mary in Cambridgeshire, says he thinks farmers are likely to be hit harder than consumers by heatwaves.
"A lot of contracts with supermarkets are already agreed a year in advance, so [farmers] are not going to get paid any more money even though their yields are down this year.
"I don't really think it's going to affect the prices in the supermarkets, because they can just bring more food in from other countries."
But Dora says imported goods could also be affected, particularly wine from countries such as France, which has also faced severe high temperatures.
"Wine has not just a quantity problem, but also a quality problem," the academic explains.
Are retailers prepared?
The British Retail Consortium says climate change is creating challenges for both retailers and their suppliers.
"Extreme weather, including drought, can affect crop yields and place upward pressure on prices," its director of food and sustainability policy Andrew Opie says.
"Retailers are experienced in managing supply disruptions and will take all necessary steps, including sourcing from alternative suppliers where appropriate, to minimise any impact on customers."
Do you have a story suggestion for Cambridgeshire? Contact us below.
Get in touch
Your Voice
Follow Cambridgeshire news on BBC Sounds, Facebook, external, Instagram, external and X, external.
- Published4 days ago
- Published4 days ago
- Published5 days ago`,
    bodyJa: `熱波により食料品店の価格が上がる可能性はありますか?
- 公開されました
今年の夏の暑くて乾燥した気候は、日光浴をする人にとっては楽しいかもしれませんが、農家にとっては理想的とは言えません。私たちが店で支払う食品の価格にも影響を与える可能性はありますか?
英国では熱波による温暖化が続いているため、冷えたスーパーマーケットの通路が最も快適な場所かもしれない。
冷蔵庫は農産物を冷たく保つためにフル稼働し、熱気を防ぐためにシャッターが下ろされ、最も暑い日には一部の商品が棚から撤去されています。
先週の環境庁の宣言によると、イングランドの半分以上が干ばつ状態に陥っている。
しかし、気温が上昇し続ける中、小売業者が調整している可能性があるのは冷却装置だけではありません。
異常気象はサプライチェーンのあらゆる部分に波及効果をもたらし、英国小売コンソーシアムは価格上昇を強いられる可能性があると警告している。
サプライチェーンとは何ですか?
サプライチェーンには、製品が製造されてから人々が購入できる店舗に届くまで、いくつかの段階が含まれます。
パンを例にとると、まず穀物が栽培され、収穫され、製粉され、工場に持ち込まれる準備が整うまで保管されます。
これらの材料はパンを焼いて包装するために使用され、パンは倉庫に運ばれて最終的にスーパーマーケットの棚に並びます。
そのプロセスの各段階では輸送や保管などの費用が発生し、どの段階でもコストが上昇すると、最終的に購入する製品の価格が高くなる可能性があります。
先週、農家と小麦粉生産者は、50年ぶりの収穫に対処するという課題に適応していると述べた。
また全国農民組合は、現在の干ばつ状況が続けば特定の食品が不足する可能性があると警告している。
ケンブリッジシャーからの詳細:
ケンブリッジシャーとエセックスにキャンパスを持つアングリア・ラスキン大学インテリジェント・サプライチェーン・センター所長のマノージ・ドーラ教授は、「1週間の猛暑でパンの価格が上がることはない」と話す。
しかし同氏は、農作物の供給がなくなると価格が上昇する可能性があると述べ、その主な理由はそれがサプライチェーンの最初の部分にどのような影響を与えるかということだという。
「肉、牛乳、卵、鶏肉が動物飼料（の不足）によって影響を受ける可能性があります」と彼は言う。
「これらを直ちに管理しなければ、さまざまな食品の価格が高騰する可能性があります。」
ドーラ氏は、英国のサプライチェーンは「回復力がある」ため、熱波の影響がすぐには感じられない可能性があると説明する。
「私たちは、場所や輸送の観点からサプライチェーンを再構成し、農家を支援することで、長期的なことを考え始める必要があります。」と彼は付け加えました。
物資は十分ですか？
ケンブリッジに本拠を置く穀物貯蔵協同組合カムグレインの最高経営責任者サイモン・ウィリス氏は、干ばつの状況により、今年の作物はその潜在力を最大限に発揮できていないことを意味していると語る。
収穫は通常8月上旬に始まるが、春が非常に乾燥した後はすでに収穫は終わっている、と彼は言う。
「今年は非常に乾燥した収穫なので、品質は良いが収量は減るだろう」と彼はBBCラジオ・ケンブリッジシャーに語った。
ケンブリッジシャー州ウィズベック・セント・メアリーの耕作農家、デビッド・ウィートリー氏は、農家は消費者よりも熱波による打撃を受ける可能性が高いと考えていると語る。
「スーパーマーケットとの契約の多くはすでに1年前に合意されているため、たとえ今年の収穫量が下がったとしても、（農家は）それ以上のお金を受け取ることはない。
「スーパーマーケットの価格が影響を受けるとはあまり思えません。スーパーマーケットは他国からより多くの食品を持ち込めるだけだからです。」
しかしドーラ氏は、輸入品、特に同じく厳しい高温に見舞われているフランスなどの国からのワインも影響を受ける可能性があると述べた。
「ワインには量の問題だけでなく、品質の問題もあります」とこの学者は説明する。
小売業者は準備ができていますか?
英国小売コンソーシアムは、気候変動が小売業者とそのサプライヤーの両方に課題をもたらしていると述べている。
「干ばつなどの異常気象は農作物の収量に影響を与え、価格に上昇圧力をかける可能性がある」と食料・持続可能性政策担当ディレクターのアンドリュー・オピー氏は言う。
「小売業者は供給中断の管理に経験があり、顧客への影響を最小限に抑えるために、必要に応じて代替サプライヤーからの調達を含め、必要なあらゆる措置を講じます。」
ケンブリッジシャーに関するストーリーの提案はありますか?下記までお問い合わせください。
連絡する
あなたの声
BBC Sounds、Facebook、外部、Instagram、外部、X でケンブリッジシャーのニュースをフォローしてください。
- 4 日前に公開
- 4 日前に公開
- 5 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cp879d2n3yno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-04T05:46:25+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d489/live/d8a062c0-8f63-11f1-8659-31d8ca04a20f.jpg",
    readTime: 5,
  },
  {
    id: "ai-is-helping-grab-ship-products-3-times-8c46e970",
    title: "AI is helping Grab ship products 3 times faster, CFO says, as company raises forecasts",
    titleJa: "Grab は AI のおかげで製品の出荷が 3 倍速くなったと CFO が語る、同社の業績予想引き上げ",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Grab, Southeast Asia's leading ride-hailing and delivery firm, raised its full-year outlook on Tuesday as it reported record second-quarter results, with resilient consumer demand across the region holding up despite macroeconomic headwinds.
Shares of the Nasdaq-listed company rose 4.86% in extended trading.
"AI is now embedded in the Grab way of life, whether it's in our products or the way we work," Grab CFO Peter Oey told CNBC's "Squawk Box Asia", adding that the technology has helped the company ship products three times faster translating into better margins and a more efficient cost structure.
The company saw a 28% year-on-year jump in the number of rides in the second quarter, Oey said. "It's one of the highest that we've seen."
The company's revenue grew 22% year on year to $997 million and its operating profit came at $19 million for the quarter ended in June, up 186%.
Grab lifted its full-year revenue outlook to $4.10 billion-$4.15 billion from $4.04 billion to $4.10 billion forecast earlier, and raised it's EBITDA estimates to $720 million-$740 million, from $700 million-$720 million.
"We're seeing demand continue to be very strong in the business in the month of July itself, and our financial services continue to scale and are at an inflection point today," Oey said, expressing confidence in the business outlook.
On Grab's agreement to buy Delivery Hero's foodpanda business in Taiwan, Oey said the company was working closely with regulators and has not yet closed the transaction, and hopes to complete it in the second half of this year.
"A lot of the products that the Southeast Asian community has been seeing and using day in and day out, we want to bring to the Taiwan market as well," he said.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/04/grab-earnings-ai-forecast-cfo-.html",
    publishedAt: "2026-08-04T03:03:18+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "us-states-sue-to-block-trump-tariffs-imp-0f95cdfd",
    title: "US states sue to block Trump tariffs impacting dozens of countries",
    titleJa: "米国各州、数十カ国に影響を与えるトランプ大統領への関税阻止を訴え",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `US states sue to block Trump tariffs impacting dozens of countries
- Published
Twenty five US states sued the administration of US President Donald Trump on Monday over new tariffs of 10% to 12.5% on goods from 60 trading partners.
The tariffs came into effect in July, targeting countries including the UK and China as well as the European Union, over Washington's contention that they have failed to properly tackle forced labour.
In a legal document seen by the BBC, the coalition of Democratic states said the decision was "arbitrary, capricious, and contrary to law."
In response, White House spokesman Kush Desai said: "The US is using its lawful authority" to address practices that burden American businesses.
Desai added that any foreign country's failing to deal with the importation of goods produced with forced labour was "unreasonable" and must be addressed.
The new tariffs were imposed on major trading partners like Japan, Brazil and Taiwan under Section 301 of the 1974 US Trade Act, legislation which is designed to target nations that use forced labour.
The duties cover 99.4% of US imports, according to the Office of the US Trade Representative (USTR).
The lawsuit said the Trump administration "cannot use forced labour as a pretext to continue its illegal tariff scheme."
"The tariffs the USTR imposed are so broad that they defy the USTR's own stated aims and make a mockery of the statute used to justify them," it said.
"President Trump's illegal tariffs are nothing more than a tax on hardworking families," said New York Governor Kathy Hochul.
"Despite losing every step of the way, Trump is trying yet again to inflict more chaos on working families and homegrown Oregon businesses," Oregon Attorney General Dan Rayfield said in a statement.
"We're all paying the price for these unlawful tariffs, not foreign governments," he added.
Several of the affected trading partners have expressed disappointment over the new tariffs, with Brazil and Japan's governments separately calling the measures "unjustified".
China's foreign ministry spokesperson Mao Ning described the tariffs as an "excuse for political manipulation". Washington and Beijing have been locked in a tit-for-tat tariffs war which is currently on hold.
Some analysts have also questioned how countries would be able to show that they had properly addressed the forced labour claims.
It marks the latest move in a slew of trade policies unveiled by Trump since he returned to office in January 2025.
Many of the wide-ranging duties Trump imposed on global trading partners in his so-called "Liberation Day" tariffs in April last year were struck down by the US Supreme Court.
"The Supreme Court has made it clear that this administration cannot ignore the law to impose sweeping tariffs," Hochul said.
The court's decision prompted tens of billions of dollars in refunds to companies that had paid the levies.
The president has long argued that tariffs protect American workers and boost the US economy.
The tariffs that were struck down were replaced by a temporary 10% levy on all global imports. Those tariffs expired in July.
More tariffs could also be on the horizon as the US is currently investigating 16 countries over claims of manufacturing overcapacity.
Related topics
- Published24 July`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy4kp8jd0ppo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-04T02:53:00+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d6bc/live/e2d6f280-8f96-11f1-8063-579175a552d9.jpg",
    readTime: 2,
  },
  {
    id: "why-is-trump-media-selling-early-access-62cd1bdd",
    title: "Why is Trump Media selling early access to Trump's Truth Social posts?",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Why is Trump Media selling early access to Trump's Truth Social posts?
President Donald Trump's media company has launched a paid subscription service on Truth Social that offers users access to posts from the website's most prominent accounts milliseconds before they appear to the general public. While the company's announcement does not specifically mention the US president's account, his is the most popular on the site, with more than 13 million followers.
The service reportedly costs up to $100,000 (£74,170) per month, with a lower-priced $60,000 (£44,679) option also available.
The BBC's Samira Hussain explains what it is and whether it's legal.
Related topics
- Donald TrumpUpdates from your News topics will appear in My News and in a collection on the News homepage.
- United StatesUpdates from your News topics will appear in My News and in a collection on the News homepage.
- Social mediaUpdates from your News topics will appear in My News and in a collection on the News homepage.`,
    bodyJa: `なぜトランプメディアはトランプの真実のソーシャル投稿への早期アクセスを販売しているのですか?
ドナルド・トランプ大統領のメディア会社は、Truth Social上で有料購読サービスを開始し、ユーザーがWebサイトの最も著名なアカウントの投稿を一般公開される数ミリ秒前にアクセスできるようにした。同社の発表では米国大統領のアカウントについて具体的に言及されていないが、同氏のアカウントはサイト内で最も人気があり、1300万人以上のフォロワーがいる。
このサービスの費用は月額最大 10 万ドル (7 万 4,170 ポンド) であると伝えられていますが、より低価格の 6 万ドル (4 万 4,679 ポンド) のオプションも利用できます。
BBC のサミラ・フセインが、それが何なのか、そして合法なのかについて説明しています。
関連トピック
- ドナルド トランプニュース トピックからの更新は、マイ ニュースとニュース ホームページのコレクションに表示されます。
- 米国ニュース トピックの更新は、マイ ニュースおよびニュース ホームページのコレクションに表示されます。
- ソーシャル メディアニュース トピックの更新は、マイ ニュースおよびニュース ホームページのコレクションに表示されます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/videos/c74g0q8eey9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-04T00:17:48+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1d80/live/478d5910-8f99-11f1-b8ee-9b3c26ad07bb.jpg",
    readTime: 2,
  },
  {
    id: "half-price-rail-travel-extended-to-18-ye-96f8cce4",
    title: "Half price rail travel extended to 18-year-olds",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "鉄道旅行の半額を18歳まで延長- 公開されました",
    bodyOriginal: `Half price rail travel extended to 18-year-olds
- Published
Eighteen-year-olds will be able to buy half price train tickets for most services when railcard rules are changed later this month, the Department for Transport (DfT) has announced.
It's an extension of the 16-17 Saver railcard which currently expires when the holder turns 18. From 17 August, they will be valid for a full year from the date of purchase.
It means 17-year-olds will be able to buy the railcard up until the day before they turn 18, making it valid until the day before they turn 19.
The existing rule meant more than 70,000 students each year were an average of £175 worse off than those in the same academic year who hadn't yet had their 18th birthday, the DfT said.
The 16-17 Saver Railcard costs £35 per year and entitles the holder to 50% off most train fares.
Rail minister Lord Hendy claimed this "common sense change" is "exactly what passengers should expect from the railway".
He said the change would "lower the cost of travel at a critical time for teenagers, whether they're pursuing further education, vocational pathways or getting their footing in the jobs market".
Jacqueline Starr, chief executive of industry body the Rail Delivery Group, said the change demonstrates the sector's commitment to "offering better value fares and delivering a more joined-up railway".
Kaynat Ahmad, vice president for further education at the National Union of Students, described the railcard as "essential for young people reliant on trains to get to college, work or training".
Eighteen-year-olds were already entitled to a 16-25 Railcard, but that only entitles them to a third off the cost of travel.
The announcement comes after the government said the cap on most single bus fares in England will be cut from £3 to £2 next year.
Get in touch
Will you use a 16-17 railcard when you're 18 and how much money will it save you?`,
    bodyJa: `鉄道旅行の半額を18歳まで延長
- 公開されました
今月後半に鉄道カードの規則が変更され、18 歳はほとんどのサービスで半額の鉄道チケットを購入できるようになる、と運輸省 (DfT) が発表しました。
これは、所有者が 18 歳になると現在有効期限が切れる 16-17 セイバー鉄道カードの延長です。8 月 17 日からは、購入日から丸 1 年間有効になります。
つまり、17 歳は 18 歳になる前日まで鉄道カードを購入でき、有効期限は 19 歳になる前日までになります。
DfTによると、既存の規則により、毎年7万人以上の学生が、まだ18歳の誕生日を迎えていない同学年の学生よりも平均で175ポンド劣悪な状況にあるという。
16-17 セーバー レールカードの年間料金は 35 ポンドで、所有者はほとんどの鉄道運賃が 50% 割引になります。
鉄道大臣ヘンディ卿は、この「常識の変化」は「まさに乗客が鉄道に期待すべきこと」であると主張した。
同氏は、今回の変更により「進学や職業進路、あるいは雇用市場での足場を築くなど、十代の若者たちにとって重要な時期に交通費が削減される」と述べた。
業界団体レイル・デリバリー・グループの最高経営責任者ジャクリーン・スター氏は、今回の変更は「よりお得な運賃を提供し、より連携した鉄道を提供する」という業界の取り組みを示していると述べた。
全国学生連合の高等教育担当副会長であるケイナット・アフマド氏は、この鉄道カードは「大学に通う、仕事に行く、または訓練を受けるために電車に依存している若者にとって不可欠なものである」と述べた。
18 歳はすでに 16-25 レールカードの権利を持っていましたが、それは旅行代金の 3 分の 1 の割引にすぎません。
この発表は、英国政府が来年、ほとんどの片道バス運賃の上限を3ポンドから2ポンドに引き下げると発表した後に行われた。
連絡する
18 歳になったら 16 ～ 17 の鉄道カードを使用しますか? それによってどれくらいお金が節約されますか?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy0jyln07r7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-03T23:34:13+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c6b7/live/f96ea650-8f50-11f1-99e6-95543b07d23d.jpg",
    readTime: 2,
  },
  {
    id: "tokenomics-why-making-ai-pay-is-tricky-27e6f274",
    title: "Tokenomics: Why making AI pay is tricky",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Tokenomics: Why making AI pay is tricky
- Published
If you have used a free version of an ChatGPT or its AI rivals, then you are obviously getting a good deal.
Firms like Microsoft, Google and Anthropic have invested hundreds of billions of dollars in developing Large Language Models (LLMs) the tech behind those services.
So getting, ChatGPT, Claude or Gemini to help with your speech or holiday plans is a bargain.
But, naturally, those firms want to recoup their investment, so they offer paid-for versions of their AI, which have extra features for tasks like coding or billing.
Meanwhile, third party firms are building and selling services based on AI agents, usually based on an LLM, which are trained to do specific tasks.
But setting a price for those services is surprisingly difficult.
"Trying to tie someone into a cost model for the next 12 months, two years, three years, it doesn't make any sense, honestly, because we don't know," says Simon Gooch at Saviynt, an identity management company which is incorporating agentic AI into its services.
That's because of rapidly changing economics around tokens, the building blocks of LLMs and agentic AI.
When a user asks an LLM, like ChatGPT or Anthropic's Claude to answer a question, generate software code, or automate a process, that prompt is broken down into mathematical chunks called tokens, which can be processed by the model.
The LLM's response also comes in the form of tokens, which are converted back into text, software code, or a set of commands to automate a process.
The problem is this process is not entirely predictable.
Subtle variations in the prompt can produce different answers. The same prompt will not always produce the same answer. Different models will produce different answers.
Meanwhile, in agentic systems, businesses use multiple AI agents together to make decisions and take actions, further increasing both token use and unpredictability.
While the cost of individual tokens – or the credits used to pay for them - has plummeted in recent years, according to analysis by Goldman Sachs, the number of tokens consumed by businesses, and consumers, has skyrocketed.
The bank forecasts that, external token consumption will increase 24 times between 2026 and 2030 to 120 quadrillion tokens a month, as companies shift from to use AI agents.
But companies, and individuals, using AI systems often have a tenuous grasp on just how many tokens they are burning through – until they either run out or get their monthly bill.
Even Microsoft has reportedly reined back, external its engineers' use of some third party coding tools, while Uber apparently tore through, external its AI coding token budget for a year in a matter of months earlier this year.
Will Venters, Associate Professor of Digital Innovation and Information Systems at the London School of Economics, said companies can be caught out as they experiment with or implement AI internally, as staff burn through tokens.
"People are finding it really hard to manage that cost… it's a non-deterministic output, so it's a non-deterministic value," he said.
Companies are finding ways to work around this.
Oliver King-Smith, founder of engineering software firm smartR AI, says smaller organizations can "can fly under the radar and use [flat fee] personal accounts which I am sure the big vendors don't like."
But, he says, "This has to end at some point in time, because the big guys are taking a bath on those accounts."
Once the big AI platforms start facing pressure from shareholders to show a profit, he predicts: "They will start clamping down."
King-Smith says companies should also think more carefully about what AI models to use.
Companies also needed to be much more precise with their prompts, says Rob Steele, CFO at UK accounting software firm iplicit.
"You wouldn't send someone in your family out to get the weekly shop without any kind of detailed instructions as to what you expect in that shopping basket, right?"
The situation can become difficult to control when companies build AI into a product that could be rolled out to thousands of users, Venters points out.
AI costs could start to balloon. For example, managers may realise they need tokens not just for core software development, but for other tasks such as testing, security, or for implementing guard rails.
"It's particularly hard when you're looking at agentic processes," Ventners says.
Employing more AI agents can be done with the click of a button, whereas expanding the human workforce would involve careful discussions over headcount and hiring, he says.
Venters points out, while token costs might be unpredictable, it might be that the company is ultimately getting more value from their token use with AI.
"It's not quite the same as a calculator," he says. "The more you give it, the more expensive it is, but the better the result may be."
But companies still need to pass those costs onto their own customers.
"Nobody's really figured it out," says Bill Peterson, senior director of product marketing, at Sumo Logic.
The software firm is previewing new security services based on agentic AI, he explains, but is in discussion with corporate customers about how to charge for them.
"We're still having some fun conversations about this internally," he says drily.
Options could include simply raising prices across the board, he says, paying by results, or charging for "bundles" of incidents.
But whatever price structure it chooses could be upended if and when the large language model providers change their own pricing strategies.
"You get into variable pricing, and it's changing every couple of months" he says. "Customers don't like that. That's not how anybody builds a budget."
More Technology of Business
- Published12 June
- Published5 June
- Published9 June`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c872r52x7jgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-03T23:21:10+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ae1d/live/13ce3de0-79de-11f1-a627-714adb4eed6e.jpg",
    readTime: 2,
  },
  {
    id: "what-heatwaves-mean-for-summer-weddings-d8dc9d5a",
    title: "What heatwaves mean for summer weddings – and how to plan for one",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `What heatwaves mean for summer weddings – and how to plan for one
- Published
"As soon as I put my dress on, my makeup was just falling off my face."
Aimie Seale is one of hundreds of brides whose weddings landed in the middle of a heatwave this summer.
She had chosen a July weekend in the hope of avoiding any wet weather. Instead, she faced 30C heat with her ceremony in a sweltering West Yorkshire church, predominantly made of glass.
"It was just unbearably hot," says Aimie. "I remember looking at my husband at one point, and he was just dripping with sweat, so everybody kept passing him tissues halfway through the service."
Aimie and her now-husband Ryan had to book an emergency marquee to offer extra shade and an ice-cream van to keep their guests cool.
An additional cost on an already expensive day, with the average wedding in the UK costing more than £20,000., external
But this last-minute battle to cope with the heat is only going to get worse. Half of the years between 2015 and 2024 saw temperatures above 35C - up from one in ten - as climate change increases the risk of heatwaves.
Zoe Burke, head of brand at wedding planning app, Bridebook, says the behavioural data - what people are talking about online - shows this is an issue couples are increasingly concerned about.
"On platforms, like Reddit, people are discussing what they are going to do to navigate the heatwave," she says.
Searches by brides for fans were up five times last summer compared with what they had been in 2019, she says.
Heatwave costs run into the thousands
Sourcing some additional fans might feel like a relatively minor cost overall, but for those hosting, catering and supplying weddings, the financial impact of coping with this summer's heatwaves has spiralled.
"It has affected the industry massively. You are talking into the thousands [of pounds] for businesses," says Michelle Miles, board adviser to the UK Wedding Association and founder of the Sustainable Wedding Alliance.
One of the biggest costs wedding venues are facing is the equipment and energy costs of trying to keep a space and food cool, she says.
"[Some] venues are having to bring in air conditioning units; they are at a premium when everyone else is wanting those units to keep their houses cool and businesses."
Guests are also drinking more water - which brings another issue for venues.
"There has been a massive hit on alcohol sales. Venues would quite often rely on these to boost their profits, and people are...not drinking alcoholic drinks as much as they would on a temperate day," says Miles.
It is not just the wedding party wilting in the heat but also the flowers. Peonies and roses - some of the most popular choices for a British wedding – saw their flowering window narrow from two months to two weeks.
"It has been an extremely tough growing season with water shortages, drought, no rainfall, slow germination in the heat, flowers going over too quickly," explains Rebecca, from Lilac and Lace Floral Design.
For a recent wedding, she had to go to three times as many growers to get enough stems.
"For now, it's more a time cost than a direct financial one. But using more growers often [has] larger delivery costs - I would estimate it costs £200 more in delivery."
Later weddings, cooler countries
Sarah Haywood has been a wedding planner for more than two decades and says she's seen a shift in the calendar.
"Over the last decade we have been advising people to avoid the heat of July and August [particularly] for destination weddings. And we're busier on what we call the 'shoulder season' which starts earlier and finishes later in the year."
Typically, the shoulder season would be June and September, but she said this is now reaching into October.
The 2026 UK Wedding Report from Bridebook showed that there are significant increases in October weddings in the year following a hotter than average summer.
Couples book their weddings on average 12 to 18 months ahead and some already locked are now looking at shifting the date.
Marie Cavanagh is due to get married in Kent at the start of July.
"The recent heatwaves have made me think a little bit differently…we will definitely be factoring [the heat] into what we are selecting to wear," she says.
Sophie Miller, a stylist at Dotty Bridal in West Yorkshire, said suggestions they have previously made to brides getting married in hotter, overseas locations, can also be applied to the UK.
"We would recommend against a sleeve, lighter fabrics…and with ballgown [dresses] we would suggest putting a hoop in the dress to hold it off your skin."
She said some designers are now innovating fabrics with zinc oxide to make the material feel cooler to the touch.
While temperatures in the UK have peaked this summer in the mid-30s, in Europe they have repeatedly broken the 40C mark.
Samantha Bottomley is a wedding planner in France and says Europe has previously been a popular wedding destination for UK couples looking for guaranteed sunshine - but this summer has changed things.
"It has been a very difficult season so far heat-wise. We have changed to late afternoon ceremonies, for the first time ever this year, we have moved outdoor cocktail receptions indoors."
Her company is looking to offer different locations altogether.
"We are going to be offering northern European destinations in Denmark, Sweden and Norway which are beautiful with lower temperatures."
Adapt or lose customers
For those running wedding venues in the UK they are having to adapt their barns, orangeries and stately homes.
James Matthews is managing director of Xenia Venues which runs two wedding sites in Essex and Suffolk.
A couple of years ago they decided to have a French company construct their orangery because of their experience with higher European temperatures. It was built with an air-to-air heat pump that cools the building, and vents to let hot air escape.
Matthews says if they had not invested in these cooling measures he would be "extremely confident" they would see bookings drop.
"The weather isn't necessarily driving people out of summer weddings, but the weather will drive people out of venues that aren't equipped on an unpleasantly warm day."
Experts' guide to a heatwave wedding
1. Dress cool: Grooms ditch the three-piece suit and brides opt for lighter fabrics
2. Avoid the hottest time of day: Push the start time for your wedding to early evening if you can, as peak heat typically hits between 12:00 and 16:00
3. Provide shade: If outdoors use marquees with sides that can open, parasols (umbrellas will do), or a tree-lined spot to avoid guests standing in direct sun
4. Offer water: Set up a water station separate from the bar so people don't have to queue. Have ushers hand out water as people arrive or put bottles under seats
5. Beware of buttercream: This popular wedding cake ingredient is likely to melt if not kept cool.
Sign up for our Future Earth newsletter to keep up with the latest climate and environment stories with the BBC's Justin Rowlatt. Outside the UK? Sign up to our international newsletter here.`,
    bodyJa: `夏の結婚式にとって熱波が何を意味するのか – そしてその計画を立てる方法
- 公開されました
「ドレスを着るとすぐに、メイクが顔から落ちてしまいました。」
エイミー・シールは、この夏の熱波の最中に結婚式を挙げた数百人の花嫁のうちの1人だ。
彼女は雨天を避けたいと考えて、7 月の週末を選んだ。その代わりに、彼女は主にガラスでできたうだるようなウェストヨークシャーの教会で挙式を行い、30度の暑さに直面した。
「耐えられないほど暑かったです」とエイミーは言う。 「ある時点で夫を見たのを覚えています。彼はただ汗を滴らせていたので、礼拝の途中で皆が彼にティッシュを渡し続けました。」
エイミーと現在の夫ライアンは、ゲストを涼しく保つための日陰とアイスクリームバンを提供するための緊急マーキーを予約しなければなりませんでした。
英国の平均的な結婚式には 20,000 ポンド以上の費用がかかるため、すでに高価な日に追加費用がかかります。外部
しかし、この暑さ対策の土壇場の戦いはさらに悪化するばかりだ。気候変動により熱波のリスクが高まる中、2015年から2024年までの半年間で気温が35度を超え、10分の1から増加した。
結婚式計画アプリ「ブライドブック」のブランド責任者、ゾーイ・バーク氏は、ネット上で人々が話題にしている行動データは、カップルがますます懸念している問題であることを示していると語る。
「レディットのようなプラットフォームでは、人々は熱波を乗り切るために何をするかについて議論しています」と彼女は言う。
昨年の夏、花嫁によるファンの検索数は、2019年と比べて5倍に増加したと彼女は言う。
熱波による被害は数千ドルに上る
追加のファンを調達するのは、全体としては比較的小さなコストのように思えるかもしれませんが、結婚式の主催、ケータリング、供給を行う業者にとって、この夏の熱波への対処による経済的影響は悪循環に陥っています。
英国ウェディング協会の理事顧問でサステイナブル・ウェディング・アライアンスの創設者であるミシェル・マイルズ氏は、「業界に多大な影響を与えている。企業にとっては何千ポンドにも上るだろう」と話す。
結婚式場が直面している最大のコストの 1 つは、空間と料理を涼しく保つための設備とエネルギーのコストである、と彼女は言います。
「（一部の）会場は空調設備を導入しなければなりません。他の会場が家やビジネスを涼しく保つために空調設備を望んでいる中、非常に貴重な状況になっています。」
ゲストが飲む水の量も増えており、会場にとっては別の問題が生じています。
「アルコールの販売に大打撃があった。会場は利益を上げるためにアルコールに依存することが非常に多く、人々は...温暖な日ほどアルコール飲料を飲まなくなっている」とマイルズは言う。
暑さで枯れるのは結婚式のパーティーだけではなく、花も枯れてしまいます。英国の結婚式で最も人気のある牡丹とバラは、開花期間が 2 か月から 2 週間と狭かったです。
「水不足、干ばつ、降水量の少なさ、暑さで発芽が遅く、花があっという間に終わってしまうなど、非常に厳しい生育期でした」とライラック・アンド・レース・フローラル・デザイン社のレベッカさんは説明する。
最近の結婚式では、十分な茎を入手するために 3 倍の生産者に行かなければなりませんでした。
「今のところ、直接的な金銭的コストというよりは、時間的なコストがかかっています。しかし、より多くの生産者を使用すると、配送コストが高くなることがよくあります。配送にかかる費用は 200 ポンド増えると思います。」
遅い結婚式、涼しい国
サラ・ヘイウッドは 20 年以上ウェディング プランナーを務めており、カレンダーの変化を経験していると言います。
「過去10年にわたり、私たちは旅行先での結婚式のために、（特に）7月と8月の暑さを避けるよう人々にアドバイスしてきました。そして、私たちは、1年のより早く始まり、後半に終わる、いわゆる『ショルダーシーズン』で忙しいのです。」
通常、肩のシーズンは6月と9月ですが、現在は10月に達していると彼女は言いました。
Bridebook の 2026 年の英国の結婚式レポートによると、例年より暑い夏が続いた年には 10 月の結婚式が大幅に増加しています。
カップルは平均して12～18カ月前に結婚式を予約しており、すでに決まっているカップルの中には現在、日程の変更を検討しているところもある。
マリー・カバナーさんは7月初めにケント州で結婚式を予定している。
「最近の熱波のせいで、少し考え方が変わりました…私たちは着る物を選ぶときに必ず[暑さ]を考慮するつもりです」と彼女は言います。
ウェストヨークシャーのドッティ・ブライダルでスタイリストを務めるソフィー・ミラーさんは、暑い海外で結婚式を挙げる花嫁たちにこれまで行ってきた提案は英国にも応用できると語った。
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgr7qrdx4qwo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-03T23:20:15+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e18d/live/f9161720-8f31-11f1-ac89-5b80aa0a0820.jpg",
    readTime: 5,
  },
  {
    id: "cnbc-s-the-china-connection-newsletter-a-507e2ae0",
    title: "CNBC's The China Connection newsletter: AI wins come with an old investor risk",
    titleJa: "CNBC の The China Connection ニュースレター: AI の勝利には古い投資家のリスクが伴う",
    summaryJa: "こんにちは、エブリンです。北京から手紙を書いています。 The China Connection の最新版へようこそ。地元企業から私が見聞きしたことのスナップショットです。中国のテクノロジーの進歩は米国政府を激怒させ、ウォール街を米国のハイテク株について心配させる可能性がある。しかし、中国の代替品に関しては、海外投資家は依然として選択的だ。中国政府の最近の動きはその理由を明らかにしている。",
    bodyOriginal: `Hi, this is Evelyn, writing to you from Beijing. Welcome to the latest edition of The China Connection — a snapshot of what I'm seeing and hearing from local businesses.
China's tech advances may rile Washington and worry Wall Street about U.S. tech stocks. But when it comes to Chinese alternatives, foreign investors remain selective. Beijing's recent moves reveal a reason why.
The big story
Emerging market risks aside, it's the state of policy communication that gives foreign investors pause.
Just take a recently announced probe into Fang Xinghai, former vice chair of China's securities regulator. Stanford-educated Fang, whose term coincided with the sudden suspension of Ant's giant IPO, was particularly well-known among Wall Street investors in China — unlike many other targets of China's anti-corruption investigations.
In the days since the probe into Fang was announced without much detail, discourse in China has focused on his support for algorithm-driven quantitative trading — which has frequently drawn public and regulatory ire for market losses, despite national AI champion DeepSeek emerging from quant hedge fund High-Flyer.
"This is exactly where communication can be better," said Liqian Ren, a quantitative manager at U.S.-based fund manager WisdomTree.
"Right now for China the number one thing is tech competition," she said, "not yet financial market competition."
Parsing Fed statements on policy direction has been a key U.S. investment skill since the days of Alan Greenspan in the 1990s. UBS even said the Fed's forward guidance, which is now under review, has decreased market volatility over the last two decades.
China, in contrast, only launched its stock markets just over three decades ago, and has not had a reputation for transparency. From a surprise yuan devaluation in 2015 to crackdowns in recent years on after-school tutoring and cross-border stock trading, many of Beijing's policy moves appear abrupt to outsiders.
Market volatility isn't due to quantitative trading, but sometimes "totally unexpected" policy information disclosure, Ren said, noting China's market swings are "way higher" than in Europe or Japan — two overseas markets popular with U.S. investors.
Shares of Trip.com, whose top investors include BlackRock, plunged nearly 20% in one day in January after China said it was investigating the online booking company for alleged monopolistic practices.
Futu shares dropped by more than 27% on May 22 after China's renewed crackdown on services that enabled people in mainland China to trade overseas stocks. UP Fintech shares fell by more than 25% that day.
More strikingly, just days after the SoftBank-backed Didi IPO in the U.S. in June 2021, the ride-hailing company faced a cybersecurity probe and app suspension in China, leading to a months-long stock decline and ultimately, delisting. Didi has yet to relist in Hong Kong despite announcing plans to.
While analysts note in retrospect that warning signs were clear, investors did not necessarily grasp them until after the fact.
Ren noted how China stocks climbed early last year after the DeepSeek R1 release, and in recent days after the Kimi K3 model launch in mid-July. "The more good headlines come out, then it will kind of neutralize some of the Chinese government regulations or abrupt regulations," she said.
Chinese stocks overall have yet to generate returns that exceed U.S. stocks and bonds enough to attract significant amounts of capital willing to overlook the risks.
BlackRock Investment Institute has kept a neutral view on Chinese stocks and views AI-related opportunities as stock-specific, rather than regional, plays.
And alternative chip plays such as CXMT — a state-backed memory chip company that surged nearly 470% in its debut last week — listed in Shanghai, making it difficult for most foreign investors to access.
Global stock index giant MSCI quickly announced, however, that CXMT would be added to the MSCI China All Shares Index on Aug. 10, paving the way for foreign funds tracking the index to buy exposure.
As former Goldman Sachs banker Fred Hu, now chairman of Primavera Capital, told my colleague Anniek Bao in Singapore recently, finance, not AI, is Beijing's biggest challenge. And it's finance that requires the most communication and trust.
Need to know
China's reported chip breakthrough comes with some big caveats
It is currently unclear whether a Chinese manufacturer using the homegrown DUV machine will deliver a chip yield close to or above that of a machine from ASML. If the yield is not close to what ASML machines can provide, that might hamper the adoption of China's machine.
The U.S. wants Asia to use its AI — but China dominates cheaper models
The U.S. has launched an export program and other initiatives to bolster American AI in Asia. But between the first APEC AI meeting and the second, the U.S. has grown noticeably quieter.
China threatens retaliation against U.S. humanoid robot ban, says it 'severely damages' relations
As the FCC escalates restrictions on Chinese goods, it "severely damages China-U.S. economic and trade stability," China's commerce ministry said via a CNBC translation of an online statement Thursday. The ministry urged the U.S. to withdraw the decision, and threatened countermeasures if it failed to do so.
Coming up
Aug. 5: RatingDog China Services PMI
Aug. 7: China trade data
Aug. 9: China CPI, PPI`,
    bodyJa: `こんにちは、エブリンです。北京から手紙を書いています。 The China Connection の最新版へようこそ。地元企業から私が見聞きしたことのスナップショットです。
中国のテクノロジーの進歩は米国政府を激怒させ、ウォール街を米国のハイテク株について心配させる可能性がある。しかし、中国の代替品に関しては、海外投資家は依然として選択的だ。中国政府の最近の動きはその理由を明らかにしている。
大きな話
新興国市場のリスクはさておき、海外投資家が立ち止まってしまうのは、政策コミュニケーションの状況だ。
最近発表された、中国証券監督当局の元副主任の方星海氏に対する調査を見てみましょう。スタンフォード大学で教育を受けたファン氏の任期は、中国の汚職撲滅捜査の他の多くの標的とは異なり、中国のウォール街の投資家の間で特によく知られていた。
ファン氏への捜査が詳細をあまり明らかにされずに発表されてから数日間、中国の言論はアルゴリズム主導のクオンツ取引へのファン氏の支持に焦点を当ててきた。AIの国家チャンピオンであるディープシークがクオンツヘッジファンドのハイフライヤーから台頭してきたにもかかわらず、ファン氏は市場損失をめぐって国民や規制当局の怒りを頻繁に招いていた。
米国に本拠を置くファンドマネジャー、ウィズダムツリーのクオンツマネジャー、リクアン・レン氏は、「まさにこここそがコミュニケーションを改善できる場所だ」と語る。
同氏は、「現在、中国にとって最も重要なことはテクノロジー競争であり、金融​​市場での競争はまだない」と述べた。
政策の方向性に関するFRBの声明を解析することは、1990年代のアラン・グリーンスパンの時代から米国の重要な投資スキルとなっている。 ＵＢＳは、現在見直し中のＦＲＢのフォワードガイダンスが過去２０年間で市場のボラティリティを低下させたとさえ述べた。
対照的に、中国は株式市場を開設してからわずか 30 年余りで、透明性については評判がありません。 2015年の突然の人民元切り下げから、近年の放課後の個別指導や国境を越えた株式取引の取り締まりに至るまで、中国政府の政策の動きの多くは部外者には唐突に見える。
任氏は、市場のボラティリティは量的取引によるものではなく、時には「まったく予期せぬ」政策情報の開示によるものだと述べ、中国の市場変動は欧州や日本（米国の投資家に人気の海外市場）よりも「はるかに大きい」と指摘した。
ブラックロックなどがトップ投資家として名を連ねるトリップ・ドットコムの株価は、中国が独占行為の疑いでオンライン予約会社を調査していると発表したことを受けて、1月に1日で20％近く急落した。
中国本土の人々が海外株式を取引できるようにするサービスに対する中国の再弾圧を受け、Futu株は5月22日に27％以上下落した。 UPフィンテック株は同日、25％以上下落した。
さらに驚くべきことに、2021年6月にソフトバンクが支援する滴滴出行が米国でIPOを行った数日後、この配車会社は中国でサイバーセキュリティ調査とアプリの停止に直面し、数カ月にわたる株価下落につながり、最終的には上場廃止となった。 Didi は香港で再上場する計画を発表したにもかかわらず、まだ行っていない。
アナリストらは振り返って、警告の兆候は明らかだったと指摘しているが、投資家は必ずしもそれを事実後まで把握できなかった。
任氏は、ディープシークR1の発売後の昨年初めと、7月中旬のキミK3モデル発売後のここ数日間で中国株がどのように上昇したかを指摘した。 「良い見出しが増えれば出るほど、中国政府の規制や突然の規制の一部が無力化されることになる」と彼女は言う。
中国株全体は、リスクを無視しようとする多額の資金を集めるほどの米国株や債券を上回るリターンをまだ生み出していない。
ブラックロック・インベストメント・インスティテュートは中国株に対して中立的な見方を維持しており、AI関連の機会は地域的なものではなく、銘柄固有の要因であると見ている。
また、先週の上場で470％近く急騰した国の支援を受けたメモリーチップ会社CXMTのようなオルタナティブチップ関連企業は上海に上場しており、ほとんどの外国人投資家がアクセスするのは困難となっている。
しかし、世界的な株価指数大手のMSCIは、CXMTが8月10日にMSCI中国全株指数に追加されるとすぐに発表し、同指数を追跡する外国ファンドがエクスポージャーを買う道を開いた。
元ゴールドマン・サックスの銀行家で現在プリマベーラ・キャピタル会長のフレッド・フー氏が最近、シンガポールで私の同僚のアニーク・バオ氏に語ったように、中国政府の最大の課題はAIではなく金融だという。そして、最もコミュニケーションと信頼を必要とするのは金融です。
知っておく必要がある
中国の報告されたチップの進歩にはいくつかの大きな警告がある
国産の DUV マシンを使用する中国のメーカーが、ASML のマシンと同等またはそれ以上のチップ歩留まりを実現するかどうかは、現時点では不明です。 ASML マシンが提供できる歩留まりに近づけない場合、中国のマシンの採用が妨げられる可能性があります。
米国はアジアでのAIの利用を望んでいるが、中国は安価なモデルを独占している
米国は、アジアにおける米国のAIを強化するための輸出プログラムやその他の取り組みを開始した。しかし、APEC AI会議の第1回目から第2回目までの間に、米国は目に見えて静かになった。
中国、米国の人型ロボット禁止への報復脅迫、関係に「重大な損害を与える」と主張
FCCが中国製品に対する規制を強化することで、「中国と米国の経済貿易の安定に深刻なダメージを与える」と中国商務省は木曜日のオンライン声明のCNBC翻訳を通じて述べた。同省は米国に対し決定の撤回を促し、撤回しない場合は対抗措置を取ると脅した。
もうすぐ
8 月 5 日: RatingDog 中国サービス PMI
8月7日: 中国貿易統計
8月9日：中国CPI、PPI`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/03/cnbcs-the-china-connection-newsletter-ai-wins-create-investor-risks.html",
    publishedAt: "2026-08-03T23:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "palantir-soars-12-on-blowout-quarter-wit-09c19c9a",
    title: "Palantir soars 12% on blowout quarter, with U.S. commercial revenue soaring nearly 150%",
    titleJa: "パランティアは大打撃を受けた四半期で 12% 急騰し、米国の商業収益は 150% 近く増加しました",
    summaryJa: "パランティアは月曜日、第２・四半期利益予想を上回り、商業収入が前年同期の２倍以上になったと発表した。この数字の発表後、株価は１２％上昇した。LSEG の見積もりに対する同社の実績は次のとおりです。",
    bodyOriginal: `Palantir topped second-quarter earnings estimates on Monday and said commercial revenue more than doubled from a year ago. The stock surged 12% after the numbers were released.
Here's how the company did versus LSEG estimates:
- Earnings per share: 41 cents adj. vs. 35 cents expected
- Revenue: $1.94 billion vs. $1.80 billion expected
Revenue climbed 93% from about $1 billion a year ago. Palantir reported net income of $1.07 billion, or 41 cents per share, compared to about $329 million, or 13 cents per share in the year-ago quarter.
"Forget consensus," CEO Alex Karp told CNBC's Seema Mody in an exclusive interview. "To my knowledge, no businesses at our scale has even grown half this much."
Palantir's U.S. government revenue grew 90% from a year ago to $809 million. The company is widely known for selling its software to the U.S. government and military, but its commercial revenue has accelerated.
U.S. commercial revenue surged 149% from a year ago to $764 million and, when taking into account compounding, has jumped 380% since 2024. Palantir is now bracing for U.S. commercial revenue "in excess of" $3.42 billion in 2026, up from prior guidance of $3.22 billion.
The company said its remaining U.S. commercial deal value more than doubled from a year ago to $6.24 billion.
Palantir shares have lost 29% this year due to broadening concerns that the artificial intelligence software trade is running out of steam and growth could slow.
The AI software company lifted full-year revenue guidance to between $8.15 billion and $8.16 billion from prior guidance of $7.65 billion to $7.66 billion.
Karp told CNBC that the strong growth "looks like this is going to go on for at least another 18 months."
The CEO has been a major proponent of open-weight models and reducing reliance on the token model from frontier labs, especially as Chinese tools have rapidly closed the gap.
Last month, following his viral comments on CNBC that sparked a wider debate, Karp and Palantir joined tech heavyweights in a letter urging the government not to restrict open-weight models.
"We need competition if we're going to keep model companies honest, which is the same thing as enterprise software," Karp said.
He added that, "The way we win in America is we compete, and our open models are going to have to become as good as Chinese open models."`,
    bodyJa: `パランティアは月曜日、第２・四半期利益予想を上回り、商業収入が前年同期の２倍以上になったと発表した。この数字の発表後、株価は１２％上昇した。
LSEG の見積もりに対する同社の実績は次のとおりです。
- 1 株あたり利益: 調整後 41 セントvs. 予想35セント
- 収益: 19 億 4,000 万ドル対予想 18 億ドル
売上高は1年前の約10億ドルから93％増加した。パランティアは純利益が10億7000万ドル（1株当たり41セント）と報告したが、前年同期は約3億2900万ドル（1株当たり13セント）だった。
「コンセンサスは忘れてください」とCEOのアレックス・カープ氏はCNBCのシーマ・モディの独占インタビューで語った。 「私の知る限り、私たちの規模でこれほど成長したビジネスはありません。」
パランティアの米国政府収入は前年比９０％増の８億９００万ドルとなった。同社は米国政府や軍にソフトウェアを販売していることで広く知られているが、商業収益も加速している。
米国の商業収益は前年比149％増の7億6,400万ドルとなり、複利を考慮すると2024年以来380％増加した。パランティアは現在、2026年の米国商業収益が従来予想の32億2,000万ドルから34億2,000万ドルを「超える」ことに備えている。
同社は、米国での残りの商取引額が前年比２倍以上の６２億４０００万ドルになったと発表した。
人工知能ソフトウェア取引が勢いを失い、成長が鈍化する可能性があるとの懸念が広がったため、パランティア株は今年29％下落した。
AIソフトウェア会社は、通年の収益見通しを従来の76億5000万ドルから76億6000万ドルの見通しから81億5000万ドルから81億6000万ドルに引き上げた。
カープ氏はCNBCに対し、この力強い成長は「少なくともあと18カ月は続くようだ」と語った。
CEOは、オープンウェイトモデルの主要な支持者であり、特に中国のツールが急速にギャップを埋めている中で、フロンティアラボのトークンモデルへの依存を減らしています。
先月、CNBCでの彼のコメントが広範な議論を巻き起こしたことを受けて、カープ氏とパランティア氏はハイテク界の有力者らに加わり、無差別級モデルを制限しないよう政府に求める書簡を発表した。
「モデル企業の誠実さを保つには競争が必要だが、それはエンタープライズソフトウェアと同じだ」とカープ氏は語った。
同氏はさらに、「米国で勝つ方法は競争することであり、我々のオープンモデルは中国のオープンモデルと同じくらい優れたものになる必要がある」と付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/03/palantir-pltr-earnings-q2-2026.html",
    publishedAt: "2026-08-03T22:47:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "i-m-easing-into-retirement-i-m-getting-795c2ed0",
    title: "‘I’m easing into retirement’: I’m getting an $80,000 pension payout. Where can I invest it safely?",
    titleJa: "「私はゆっくりと退職生活を送っています」: 私は 80,000 ドルの年金を受け取っています。どこに安全に投資できますか？",
    summaryJa: "「401(k) 口座から分配金を受け取るまでには数年かかると予想しています。」",
    bodyOriginal: `“I expect to have several years before I take distributions from my 401(k) account.”`,
    bodyJa: `「401(k) 口座から分配金を受け取るまでには数年かかると予想しています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/im-easing-into-retirement-im-getting-an-80-000-pension-payout-where-can-i-invest-it-safely-6653d810?mod=mw_rss_topstories",
    publishedAt: "2026-08-03T22:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-08898714",
    readTime: 2,
  },
  {
    id: "snap-s-stock-jumps-8-on-earnings-beat-an-10655bda",
    title: "Snap's stock jumps 8% on earnings beat and strong sales forecast",
    titleJa: "スナップの株価は業績を上回り、売上高予想が好調で8％上昇",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Snap reported better-than-expected revenue and earnings for the second quarter and issued a forecast for the current period that topped analysts' estimates. The stock jumped about 8% in extended trading.
Here's how the company did compared with analysts' expectations:
- Loss per share: Loss of 10 cents. That figure is not comparable to analysts' estimates.
- Revenue: $1.6 billion vs. $1.54 billion expected, according to LSEG
- Global daily active users: 493 million vs. 487 million expected, according to StreetAccount
- Global average revenue per user, or ARPU: $3.25 vs. $3.16 expected, according to StreetAccount
Revenue in the second quarter rose 19% from $1.34 billion a year earlier, Snap said in a statement. The company's net loss narrowed to $164 million from $262.6 million, or 16 cents per share, a year ago.
Adjusted earnings came in at $250 million, ahead of the $192 million estimate, according to StreetAccount.
Snap said third-quarter sales should come in between $1.7 billion to $1.74 billion, topping analyst estimates of $1.7 billion. Adjusted earnings will be between $300 million and $350 million. The midpoint of $325 million trails StreetAccount's projections of $327 million.
Snap CEO Evan Spiegel said in an investor letter that the company "saw improving momentum in our advertising business."
"After several quarters of improving our ad products and go-to-market approach, we saw better momentum with large advertisers in North America and stronger revenue growth internationally," he said in the letter. Spiegel added the company got a boost from spending tied to the World Cup.
During its last earnings report in May, Snap said "large advertisers in North America remained a headwind to advertising growth," but that it was "beginning to see encouraging signs that this part of the business is improving."
While the number of global daily active users increased 5% from a year earlier, North American DAU declined 7% year over year to 92 million and was flat compared with the first quarter.
On the earnings call, Spiegel cited "progress in strengthening the core communication experience" and newer products like its Spotlight short-video feature as helping with user growth.
Spiegel added that Snap is "closely monitoring the regulatory environment, including age assurance, privacy, and online safety requirements," which he said "may affect the product experiences or user growth and engagement over time."
Snap lifted its guidance for full-year infrastructure costs by $50 million to between $1.65 billion and $1.7 billion. The company said that figure accounts for "additional investment in the AI and machine learning infrastructure needed to support revenue growth."
The company's other revenue category, which includes the Snapchat+ subscription service, rose 85% year over year to $316 million in the second quarter.
Snap revealed in June its first augmented reality glasses tailored for the broader public instead of developers. The AR glasses, dubbed Specs, will cost $2,195 with a $200 refundable deposit and are expected to ship later this year.
Spiegel said on the call that with Specs, Snap is "really approaching this investment with a lot of discipline," and is currently focusing on "the customer experience, the product quality and the ecosystem development." He said he sees cutting-edge AR glasses as "a natural form factor for the future," but acknowledged that it's going to take a while before they become mainstream.
"I think it will be towards the end of the decade before we see mass-market consumer adoption," Spiegel said. "I think things, for example, like weight and cost are going to have to come down to see unit volumes really meaningfully pick up."
Wall Street was tough on Snap's fellow online ad companies last week.
Reddit reported second-quarter earnings on Thursday that beat on the top and bottom lines, but noted in an investor letter that search-referral traffic was "choppy," stroking Wall Street's concerns about user growth and sending shares tumbling.
And Meta shares dropped after the social media giant issued a weaker-than-expected sales forecast and reported dwindling free cash flow due to its hefty spending on AI-related expenditures.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/03/snap-q2-earnings-report-2026.html",
    publishedAt: "2026-08-03T22:03:52+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "25-states-sue-trump-administration-over-fcb54351",
    title: "25 states sue Trump administration over latest global tariffs",
    titleJa: "最新の世界的な関税をめぐって25の州がトランプ政権を提訴",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `A coalition of 25 Democratic-led states sued the Trump administration Monday, arguing President Donald Trump exceeded his authority by imposing sweeping tariffs on goods from 60 U.S. trading partners.
The states argue the new duties merely replace tariffs that were struck down by the Supreme Court and remain unlawfully broad despite being imposed under a different statute.
The lawsuit also alleges the administration bypassed the country-specific investigations required by law before imposing the tariffs.
The complaint, filed in the U.S. Court of International Trade, challenges the new tariffs of 10% or 12.5% on imports from those 60 trading partners that the filing says account for 99.4% of U.S. imports.
The states argue the administration is using Section 301 of the Trade Act of 1974 to preserve a broad tariff regime after earlier tariff efforts were blocked by the courts.
The case is at least the second legal challenge to the new duties. A group of small businesses previously sued the administration, making a similar argument that Trump cannot use a new legal authority to recreate tariffs invalidated by the Supreme Court.
—This is breaking news. Please refresh for updates.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/03/trump-tariffs-25-states-lawsuit-supreme-court.html",
    publishedAt: "2026-08-03T19:44:45+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 2,
  },
  {
    id: "trump-sours-on-pirro-over-reflecting-poo-ba4aaa65",
    title: "Trump sours on Pirro over Reflecting Pool case, won't say her job is safe",
    titleJa: "トランプ大統領、リフレクティング・プール事件でピロ氏を非難、彼女の職が安全だとは言わない",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `President Donald Trump on Monday hurled more criticism at Jeanine Pirro as he fumed over the federal prosecutor's decision to drop her Reflecting Pool vandalism case after admitting damage to the water feature was caused by a botched installation.
Pirro, the U.S. attorney for the District of Columbia, "made a mistake" and "choked" by moving to dismiss the indictment against former Olympic canoeist David Hearn, Trump told reporters in the Oval Office.
Asked if he was reconsidering Pirro's role, Trump did not directly answer, saying "I don't know what" and then lashing out at the reporter who posed the question.
The White House, asked later Monday whether Trump continues to support Pirro in her current role, referred CNBC back to the president's comments in the Oval.
Pirro's case, filed in early July, accused the 67-year-old Hearn of damaging the pool in front of the Lincoln Memorial by ripping up part of its sealant with his hands. But in a Friday afternoon court filing in D.C. Superior Court, Pirro wrote that after filing the charges, her office received additional information indicating that a "flawed installation" by the contractor was to blame for the damage.
Trump — who frequently touts the renovation and has repeatedly claimed the project was sabotaged by vandals with knives and box cutters — quickly lashed out at Pirro, writing on Truth Social, "I don't know what she was thinking?"
He ratcheted up the criticism even further in the Oval Office Monday afternoon.
"I was disappointed with Jeanine Pirro, really disappointed with Jeanine Pirro," he said. "She folded like an umbrella, and people get away with things, and it's a disgrace."
Pirro's office did not immediately respond to CNBC's request for comment.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/03/trump-pirro-reflecting-pool-vandalism-case.html",
    publishedAt: "2026-08-03T19:42:37+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "trump-says-exxon-and-chevron-made-too-mu-ee81e023",
    title: "Trump says Exxon and Chevron made 'too much money' off high oil prices during Iran conflict: 'I don't like it'",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "ドナルド・トランプ大統領は月曜日、エクソンモービルとシェブロンはイラン戦争による原油価格の上昇で「儲けすぎた」と述べた。トランプ大統領はホワイトハウスで記者団に対し、「彼らは不足を理由に儲けすぎている」と語った。 \"私はそれが気に入りません。\"",
    bodyOriginal: `President Donald Trump said Monday that ExxonMobil and Chevron made "too much money" on rising crude oil prices due to the Iran war.
"They're making too much money based on a shortage," Trump told reporters at the White House. "I don't like it."
Exxon and Chevron on Friday reported windfall profits for the second quarter. Chevron's earnings soared nearly 400% to $12 billion compared to $2.5 billion in the same period last year. Exxon's profits more than doubled to $14.5 billion compared to $7.1 billion in the year-ago period.
"Chevron, too much money. ExxonMobil, too much money," Trump said. "They're going to give some of that back to the public and they better cut the retail price, the consumer price."
CNBC has reached out to Exxon and Chevron for comment.
U.S. crude oil prices have gained about 20% since the U.S. and Israel attacked Iran on Feb. 28. Tehran has retaliated by trying to choke oil exports through the Strait of Hormuz, triggering the largest supply disruption in history.
U.S. oil futures had an average closing price of around $92 per barrel from April through June, about 27% higher than the first quarter.
Gasoline prices, meanwhile, averaged about $4.10 per gallon nationwide on Monday, nearly 40% higher compared to the $2.98 per gallon that drivers paid on Feb. 27 before the war started, according to data from AAA.
Chevron's shares were down more than 2% while Exxon traded about 1% lower after Trump's comments. The oil majors' stocks were already under pressure Monday as crude prices fell about 5% on hopes that U.S.-Iran talks might prevent further escalation.`,
    bodyJa: `ドナルド・トランプ大統領は月曜日、エクソンモービルとシェブロンはイラン戦争による原油価格の上昇で「儲けすぎた」と述べた。
トランプ大統領はホワイトハウスで記者団に対し、「彼らは不足を理由に儲けすぎている」と語った。 "私はそれが気に入りません。"
エクソンとシェブロンは金曜日、第2四半期の棚ぼた利益を報告した。シェブロンの利益は前年同期の25億ドルと比べて400％近く急増し、120億ドルとなった。エクソンの利益は前年同期の71億ドルから2倍以上の145億ドルに増加した。
トランプ大統領は「シェブロン、金が多すぎる。エクソンモービル、金が多すぎる」と語った。 「彼らはその一部を国民に還元するつもりで、小売価格、つまり消費者物価を引き下げたほうがよいでしょう。」
CNBCはエクソンとシェブロンにコメントを求めた。
米国とイスラエルが2月28日にイランを攻撃して以来、米国の原油価格は約20％上昇した。イラン政府は報復としてホルムズ海峡を通じた原油輸出を阻止しようとし、史上最大の供給混乱を引き起こした。
4月から6月までの米原油先物の平均終値は1バレル当たり約92ドルで、第1四半期より約27％高かった。
一方、AAAのデータによると、月曜日の全国のガソリン価格は平均1ガロン当たり約4.10ドルで、開戦前の2月27日にドライバーが支払っていた1ガロン当たり2.98ドルと比べて40％近く高かった。
トランプ氏の発言を受け、シェブロン株は２％以上下落し、エクソン株は約１％安で取引された。米国とイランの協議によりさらなるエスカレーションが阻止されるのではないかとの期待から原油価格が約５％下落し、月曜日の石油メジャーの株価はすでに圧迫されていた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/03/trump-says-exxon-and-chevron-made-too-much-money-off-high-oil-prices-during-iran-conflict-i-dont-like-it.html",
    publishedAt: "2026-08-03T19:40:32+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "microsoft-s-stock-is-on-a-run-not-seen-i-360ead40",
    title: "Microsoft’s stock is on a run not seen in 26 years — erasing its year-to-date losses",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `The rally in Microsoft shares “has legs” because its capital spending is showing a payoff.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/microsofts-stock-is-on-a-run-not-seen-in-26-years-erasing-its-year-to-date-losses-d9827b6c?mod=mw_rss_topstories",
    publishedAt: "2026-08-03T19:40:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-06137309",
    readTime: 2,
  },
  {
    id: "faa-clears-smallest-boeing-737-max-to-fl-f7ee4957",
    title: "FAA clears smallest Boeing 737 Max to fly after years of delays",
    titleJa: "FAA、長年の遅延を経て最小のボーイング737 Maxの飛行を許可",
    summaryJa: "米連邦航空局は、安全性審査が10年近く遅れていたにもかかわらず、ベストセラー航空機ファミリーの最小モデルであるボーイング737 Max 7を認証した。サウスウエスト航空を含む航空会社はパンデミック前に同機を運航する予定だったが、2018年と2019年に運航中のマックス8の死亡事故を受けて規制当局の監視が強化され、その他の安全性や製造上の危機、エンジン防氷システムの再設計により認証が遅れた。",
    bodyOriginal: `The Federal Aviation Administration has certified the Boeing 737 Max 7, the smallest model in the bestselling family of aircraft, after nearly a decade of delays for safety reviews.
Carriers including Southwest Airlines expected to fly the plane before the pandemic, but increased regulatory scrutiny following the fatal crashes of the in-service Max 8, in 2018 and 2019, other safety and manufacturing crises, and the redesign of an engine anti-icing system delayed certification.
The agency on Monday said the approval "reflects years of sustained work to resolve complex technical issues and complete a thorough review of the airplane's design and supporting safety analyses."
Boeing stock rose roughly 8% in afternoon trading Monday.
Airlines can finally start flying passengers soon after planes are certified, but it can take them months to work them into schedules.
The already-built Max 7 planes for Southwest, which make up the bulk of the Max 7s in inventory, will need to be outfitted with the carrier's new extra legroom seats. Southwest won't likely start flying the planes until next year.
"This important certification validates the rigor of our airplane's design and recognizes the determination and resilience of our 737 MAX development team," Stephanie Pope, president and CEO of Boeing Commercial Airplanes, said in a statement.
The FAA said it required other changes to the plane beyond the redesign of the engine anti-ice system, including to the flight control software and crew alerting system.
Boeing is also awaiting certification from the FAA of another long-delayed model, the 737 Max 10, which is the largest in the family and one that some carriers expected to start flying in 2020 as well as the manufacturer's largest plane, the 777X.
The plane maker has about 40 of the 737 Max 7s and 737 Max 10s built and in inventory already, and the FAA approval could help the manufacturer bring in much-needed cash, Jefferies analyst Sheila Kahyaoglu said in a note Sunday. Boeing and other manufacturers receive the bulk of an airplane's price when they hand it over to customers.
The manufacturer, a top U.S. exporter, has been working to ramp up production of its 737 Maxes and 787 Dreamliners, key to its recovery after years of crisis since airlines and other customers pay the bulk of the aircraft's price upon delivery. Boeing opened a fourth production line in Everett, Washington, in July for its 737 Max airplanes.
The company has been working to win back the trust of the FAA, and has made strides, including in mid-July, when the FAA said it could once again issue airworthiness certificates for its bestselling 737 Max aircraft and 787 Dreamliners. The agency stripped that from Boeing after the Max 8 crashes, which killed 346 people.
— CNBC's Michele Luhn contributed to this report.`,
    bodyJa: `米連邦航空局は、安全性審査が10年近く遅れていたにもかかわらず、ベストセラー航空機ファミリーの最小モデルであるボーイング737 Max 7を認証した。
サウスウエスト航空を含む航空会社はパンデミック前に同機を運航する予定だったが、2018年と2019年に運航中のマックス8の死亡事故を受けて規制当局の監視が強化され、その他の安全性や製造上の危機、エンジン防氷システムの再設計により認証が遅れた。
同庁は月曜日、この承認は「複雑な技術的問題を解決し、航空機の設計と裏付けとなる安全性分析の徹底的な見直しを完了するための長年にわたる継続的な作業を反映している」と述べた。
ボーイング株は月曜午後の取引で約８％上昇した。
航空会社は飛行機の認証後すぐにようやく乗客の運航を開始できるが、スケジュールを組み込むまでに何か月もかかることがある。
在庫にあるMax 7の大部分を占めるサウスウェスト向けのすでに製造されたMax 7航空機には、航空会社の新しい追加の足元スペースシートを装備する必要があります。サウスウェスト航空が飛行機の運航を開始するのはおそらく来年になるだろう。
ボーイング民間航空機の社長兼最高経営責任者（CEO）のステファニー・ポープ氏は声明で、「この重要な認証は、当社の航空機設計の厳密さを証明し、当社の737 MAX開発チームの決意と回復力を認めたものである」と述べた。
FAAは、エンジンの防氷システムの再設計以外にも、飛行制御ソフトウェアや乗務員警報システムなど、同機の他の変更が必要だと述べた。
ボーイング社はまた、長く遅れていた別のモデルである737 Max 10のFAAからの認証を待っている。737 Max 10はファミリー内で最大で、一部の航空会社が同社最大の航空機である777Xと同様に2020年に飛行を開始すると予想していたモデルである。
ジェフリーズのアナリスト、シーラ・カヒャオグル氏は日曜日のメモで、同社はすでに737 Max 7と737 Max 10のうち約40機を製造・在庫しており、FAAの承認はメーカーが切望していた資金を生み出すのに役立つ可能性があると述べた。ボーイングやその他のメーカーは、航空機を顧客に引き渡すときに、航空機の価格の大部分を受け取ります。
米国のトップ輸出企業である同社は、航空会社やその他の顧客が引き渡し時に航空機の価格の大部分を支払うため、長年の危機からの回復の鍵となる737 Maxと787 Dreamlinerの生産拡大に取り組んでいる。ボーイングは7月、737 Max航空機用にワシントン州エベレットに4番目の生産ラインを開設した。
同社はFAAの信頼を取り戻すために努力しており、7月中旬にはFAAが同社のベストセラー機737 Maxと787 Dreamlinerの耐空証明書を再度発行する可能性があると発表するなど、前進を遂げている。 346人が死亡したMax 8の墜落事故を受けて、当局はボーイング社からそれを剥奪した。
— CNBCのMichele Luhn氏がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/03/faa-boeing-737-max-certification.html",
    publishedAt: "2026-08-03T19:35:26+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "can-palantir-pull-off-a-microsoft-style-a79b5e98",
    title: "Can Palantir pull off a Microsoft-style comeback? Here's what options say",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Hopes are running high that high-profile software provider Palantir can shake off its nine-month bear market and rally after earnings Monday night.
After all, the chart of Microsoft was looking similar going into its report, and that stock's now in the midst of a three-day, 25% bounce. The options flows around Palantir also mirror Microsoft going into its report, where traders were scooping up calls and betting on a bigger-than-usual swing.
More than twice as many Palantir calls traded than puts by volume Monday, with traders buying 56,000 calls and fewer than 25,000 puts, according to ThinkOrSwim data. Of the $160 million in premium traded, $120 million was tied to calls, and the top five contracts traded by volume were all calls, SpotGamma data show.
The most popular contract for bulls was the 130-strike call expiring Friday, where traders bought 8,500 contracts totaling $4.4 million, according to SpotGamma. Trading for $5.30 a contract, the 130-strike calls need an 8 percent rally before the weekend to pay off. The 150 and 140-strike calls were second and third-most popular by volume.
Cboe LiveVol data shows options pricing implying a 10.5% move after earnings, bigger than the median 7.4% move the past year. For the past five straight quarters, Palantir options have overestimated the actual move, the data show.
The heavy call volume doesn't mean bears aren't taking shots. In fact, seven of the eight biggest dollar-amount trades of the day were neutral or bearish, according to Cboe data.
That includes the biggest premium trade of the day, a sale of 800 of the 145-strike calls in Palantir that expire in mid-December 2028, a bearish bet against extensive gains in the stock that brought in $3.4 million for the seller.`,
    bodyJa: `知名度の高いソフトウェアプロバイダーのパランティアが、9か月にわたる弱気相場を脱却し、月曜夜の決算後に反発できるのではないかとの期待が高まっている。
結局のところ、Microsoft のチャートはレポートの時点では同様に見えており、その株価は現在 3 日間で 25% の上昇の最中にあります。パランティアを巡るオプションの流れは、トレーダーらがコールをすくい上げ、通常よりも大きな値動きに賭けていたというマイクロソフトの報告書にも反映されている。
ThinkOrSwimのデータによると、月曜の出来高ベースでは、パランティアのコールはプットの2倍以上で取引されており、トレーダーが購入したコールは5万6000件、プットは2万5000件未満だった。 SpotGamma のデータによると、取引されたプレミアム額 1 億 6,000 万ドルのうち 1 億 2,000 万ドルはコールに関連しており、取引高トップ 5 の契約はすべてコールでした。
スポットガンマによると、強気筋で最も人気のある契約は金曜日に期限が切れる130ストライクコールで、トレーダーらは8,500枚、総額440万ドルを購入した。 1契約あたり5.30ドルで取引されており、130ストライキのコールが報われるには週末までに8％上昇する必要がある。 150 ストライクと 140 ストライクのコールは、ボリュームで 2 番目と 3 番目に人気がありました。
Cboe LiveVolのデータによると、オプションの価格設定は収益後に10.5%の変動を示唆しており、これは過去1年間の中央値7.4%の変動よりも大きい。データによると、過去5四半期連続で、パランティアのオプションは実際の動きを過大評価してきた。
通報件数が多いからといって、クマが射撃を行っていないわけではありません。実際、Cboeのデータによると、この日の金額の大きかった取引8件のうち7件は中立または弱気だった。
これには、その日最大のプレミアム取引、2028年12月中旬に期限切れとなるパランティアの145ストライクコールのうち800件の売却が含まれており、売り手に340万ドルをもたらした株の大幅な上昇に対する弱気の賭けとなった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/03/can-palantir-pull-off-a-microsoft-style-comeback-heres-what-options-say.html",
    publishedAt: "2026-08-03T18:34:52+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "hugging-face-ceo-says-china-is-winning-t-c3f4ed45",
    title: "Hugging Face CEO says China is winning the AI race and dominating on open models",
    titleJa: "ハグ・フェイスCEO、中国はAI競争に勝利し、オープンモデルで優位に立つと語る",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Hugging Face CEO Clément Delangue said China is winning the artificial intelligence race with open-weight models and could catch up to U.S. model makers as soon as this year.
"They're clearly dominating on open models right now, and I wouldn't be surprised if they start dominating at the frontier either by the end of this year or next year at the rate of progress," he told CNBC's "Squawk on the Street" on Monday.
Fueling this revolution is the open collaboration and sharing ecosystem in China, while model makers in the U.S. are "building in silos" and risk falling behind, he said.
Last month, OpenAI agents broke out of a training environment and hacked open-source software developer platform Hugging Face, raising concerns over the rapid evolution of powerful AI and cybersecurity tools.
The incident also brought months of simmering cybersecurity fears to a head, demonstrating how easily AI agents could cause immense damage, while making the case for open models in the era of skyrocketing token costs.
Delangue, a proponent of open-source models, blamed engineering mistakes for the recent attack on Hugging Face and said his company used a Nvidia version of a Chinese open model to resolve the attack.
In recent months, Chinese open-source models have been closing the capabilities gap with U.S. model makers, sparking debate over whether to restrict access. Last month, technology heavyweights such as Microsoft, Palantir and Nvidia signed a letter urging policymakers to avoid restricting open-weight models and suppressing competition.
"AI cybersecurity is going to become a huge market in the U.S. and in the world," Delangue said. "In this market, probably open models will be kings."
Delangue said the company maintains a "healthy collaboration" with OpenAI and called the frontier lab "good partners" before and after the incident.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/03/hugging-face-china-ai-race-open-models.html",
    publishedAt: "2026-08-03T17:28:17+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "threat-to-oil-tankers-in-middle-east-wor-b696dc50",
    title: "Threat to oil tankers in Middle East  worst since start of Iran war, analysts say",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Threat to oil tankers in Middle East worst since start of Iran war, analysts say
- Published
The threat to ships carrying oil in the Middle East is at its worst since the Iran war started, experts have said, after a spate of attacks on another key route in the region.
The warning comes after a number of attacks on vessels in the Red Sea, an alternative waterway that some tankers had been using since Iran blocked the Strait of Hormuz.
Iran has denied Donald Trump's claim that it was in talks with the US over reopening the strait, but said it was speaking to Oman about securing the shipping lane.
"In terms of threat to the trade of crude, we're at the worst period that we've been in since this since this crisis began," said Matthew Wright, an analyst at ship-tracking firm Kpler.
The number of ships passing through the Strait of Hormuz was just eight on Sunday and 11 on Saturday, compared with more than 100 per day before the war began, according to Kpler.
Before the conflict, about 20% of the world's oil and gas passed through the strait.
The temporary peace deal with the US struck in early June led to numbers rising again, but the resumption of strikes between the two countries roughly a month later have significantly reduced traffic.
Many ships have been "going dark" when crossing the strait, meaning they turn off their transponder to avoid detection.
For much of the war, some ships carrying oil from Saudi Arabia had instead passed through an alternative shipping lane in the Red Sea, between the kingdom and west Africa.
But a recent spate of attacks by Yemen's Houthi fighters on Saudi tankers using the alternative waterway has further heightened the risks.
The Iranian-backed Houthi militia announced what it called a blockade on Saudi Arabia's Red Sea ports on 20 July and the UK Maritime Trade Operations agency has reported several attacks on ships in the past week.
"Not only is the ongoing situation in the Strait of Hormuz constraining oil flows, but now a big factor that was helping to balance the market is now also under threat. It's a problem stacked on top of a problem," Wright said.
Tim Wilkins, the managing director of Intertanko, a trade body representing tanker owners, said the industry was "facing a broadening, deteriorating, and increasingly complex security situation".
"We now have the high-risk area going up to Saudi Arabian waters and extending into parts of the Red Sea. So that's having another impact on the market, on freedom of navigation as well."
The number of commodity vessels that passed through the Bab el-Mandeb strait was 28 on Saturday and six of them had their transponders turned off, according to Kpler data, indicating that they were trying to avoid detection.
As the US pauses the war with Iran, is Trump really running out of weapons?
- Published6 days ago
Why Iran is risking so much over the Strait of Hormuz
- Published21 July
Tankers make sharp U-turns after Houthi shipping threat
- Published22 July
Not all vessels are deterred from passing through because the Houthi threat is only targeted at Saudi shipping, with the total number sitting at about 50% of pre-attack levels.
But the number of ships loading crude oil for export to Asia passing through has dropped to about four per day, Kpler added, the lowest point since the start of the war.
A spokesperson for Hapag-Lloyd, the global shipping giant, said some of its vessels were still passing through the Red Sea but that it would "monitor developments closely and will adjust the network if circumstances change".
"If the Strait of Hormuz reopened, most ships could probably leave the region fairly quickly. However, restoring normal cargo flows would take much longer.
"Services have been suspended and ships redeployed elsewhere, so a return to normal flows would most likely take three to four months."
Despite the talks with Oman, Iran has said that no deal is imminent that would reopen the strait to normal traffic.
Its foreign ministry ministry spokesman Esmaeil Baqaei said any agreement would not lift the current restrictions while US "aggression" continued.
Kpler's Wright said that while talks with Oman could be productive, any deal would need the involvement of the US and the fear is that current negotiations could be a "false start" without concessions on at least one side.
Nonetheless, oil prices fell sharply after Trump said he would cancel planned strikes on Iran based on the potential for upcoming talks.
Brent crude was trading 4.4% lower at $84.05 a barrel, after it fell as much as 7.3% to $81.55 a barrel earlier in the day.
Peter Sand, chief analyst at Xeneta, another ship-tracking company, said the fighting had taken the shipping industry "back to to square one" and that things were in "a terrible state, regardless of which shipping type you're you're looking at".
"The alternatives for getting cargo, whether that's hydrocarbons or container shipping, are really not great… it is really still troubling times with no clarity and no change of fortunes within sight."
Related topics
- Published5 days ago
- Published1 day ago
- Published4 days ago`,
    bodyJa: `中東の石油タンカーに対する脅威はイラン戦争開始以来最悪だとアナリストが語る
- 公開されました
中東の石油輸送船に対する脅威は、この地域の別の重要航路に対する相次ぐ攻撃を受けて、イラン戦争勃発以来最悪となっている、と専門家らは述べた。
この警告は、イランがホルムズ海峡を封鎖して以来、一部のタンカーが使用していた代替水路である紅海で船舶に対する多数の攻撃を受けて発出された。
イランは、海峡再開を巡って米国と協議しているとするドナルド・トランプ氏の主張を否定したが、航路の確保についてはオマーンと話し合っていると述べた。
船舶追跡会社クプラーのアナリスト、マシュー・ライト氏は「原油貿易への脅威という点では、この危機が始まって以来最悪の時期にある」と述べた。
クプラー氏によると、ホルムズ海峡を通過する船舶の数は、開戦前は１日当たり１００隻以上だったのに対し、日曜日はわずか８隻、土曜日は１１隻にとどまった。
紛争前は、世界の石油とガスの約 20% がこの海峡を通過していました。
6月初旬に締結された米国との一時和平合意により、感染者数は再び増加したが、約1カ月後に両国間のストライキが再開されたことで交通量は大幅に減少した。
多くの船舶は海峡を通過する際に「暗転」しており、探知を避けるためにトランスポンダーの電源を切っている。
戦争のほとんどの間、サウジアラビアから石油を積んだ一部の船は代わりに、サウジと西アフリカの間の紅海の代替航路を通っていました。
しかし、イエメンのフーシ派戦闘員による最近の代替水路を利用したサウジのタンカーへの攻撃が相次ぎ、危険性はさらに高まっている。
イランの支援を受けるフーシ派民兵組織は7月20日にサウジアラビアの紅海の港を封鎖すると発表し、英国海事貿易業務局は過去1週間に船舶に対する数件の攻撃を報告した。
ライト氏は「ホルムズ海峡で進行中の状況が原油の流れを抑制しているだけでなく、市場のバランスを保っていた大きな要素も脅威にさらされている。問題の上に問題が重なっている」と述べた。
タンカー船主を代表する業界団体インタータンコのマネージングディレクター、ティム・ウィルキンス氏は、業界は「拡大し、悪化し、ますます複雑化する安全保障状況に直面している」と述べた。
「現在、高リスク地域はサウジアラビア海域にまで達し、紅海の一部にまで広がっています。そのため、市場や航行の自由にも新たな影響を及ぼしています。」
Kplerのデータによると、土曜日にバブ・エル・マンデブ海峡を通過した物資船の数は28隻で、そのうち6隻はトランスポンダーの電源を切っていて、探知を避けようとしていたことを示している。
米国がイランとの戦争を一時停止する中、トランプ大統領は本当に武器を使い果たしているのだろうか？
- 6 日前に公開
なぜイランはホルムズ海峡でこれほどの危険を冒しているのか
- 7 月 21 日発行
タンカー、フーシ派の船舶脅迫を受けて急Uターン
- 7 月 22 日発行
フーシ派の脅威はサウジの海運だけをターゲットにしており、総数は攻撃前のレベルの約50％にとどまっているため、すべての船舶の通過が阻止されるわけではない。
しかし、アジアへの輸出用原油を積んで通過する船の数は1日あたり約4隻に減少しており、これは戦争開始以来最低であるとクプラー氏は付け加えた。
世界的な海運大手ハパック・ロイドの広報担当者は、同社の船舶の一部が依然として紅海を通過しているが、「動向を注意深く監視し、状況が変化した場合にはネットワークを調整する」と述べた。
「ホルムズ海峡が再開すれば、ほとんどの船舶はおそらくかなり早くこの地域を離れることができるだろう。しかし、通常の貨物の流れを回復するにはさらに時間がかかるだろう。
「サービスは停止されており、船は別の場所に再配置されているため、通常の流れに戻るには3〜4か月かかる可能性が高いです。」
オマーンとの協議にもかかわらず、イランは海峡を通常の航行に再開する差し迫った合意はないと述べた。
外務省報道官エスマイル・バカエイ氏は、米国の「侵略」が続く限り、いかなる合意も現在の制限を解除することはないと述べた。
クプラーのライト氏は、オマーンとの交渉は生産的なものになる可能性があるが、いかなる合意にも米国の関与が必要であり、少なくとも一方の譲歩がなければ現在の交渉は「誤ったスタート」になる可能性があると懸念していると述べた。
それにもかかわらず、トランプ大統領が今後の協議の可能性を踏まえてイランへの攻撃計画を中止すると発言したことを受け、原油価格は急落した。
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjrv0dy2e90o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-03T15:57:27+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5304/live/8eb45f90-8f4f-11f1-99e6-95543b07d23d.jpg",
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
