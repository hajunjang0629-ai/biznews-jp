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
    id: "spacex-launches-massive-starship-rocket-6521980c",
    title: "SpaceX launches massive Starship rocket in first test flight since IPO",
    titleJa: "SpaceX、IPO以来初の試験飛行で巨大なStarshipロケットを打ち上げ",
    summaryJa: "スペースXは金曜日の夜、テキサス州スターベースの企業街と発射施設から巨大なスターシップロケットを13回目のテスト飛行で打ち上げたが、これは同社の記録的な先月のIPO以来初めてとなる。ロケットのスーパーヘビーブースターは飛行開始から約2分でスターシップ宇宙船から切り離され、制御された状態で湾岸に着水した。",
    bodyOriginal: `SpaceX launched its massive Starship rocket Friday evening from its company town and launch facility in Starbase, Texas, in a 13th test flight and the first since the company's record IPO last month.
The rocket's Super Heavy booster detached from the Starship spacecraft about two minutes into the flight, and made a controlled splashdown in the Gulf.
In a statement following the flight, SpaceX said the landing was not perfect as the booster, "attempted to relight its engines for the landing burn," but only a subset successfully ignited before the "hard splashdown."
The upper stage of the rocket made a "soft splashdown" in the Indian Ocean, SpaceX said, "coming to rest intact in the Indian Ocean and providing critical views of an intact heatshield for the first time."
Employees called the test flight "lucky number 13," in a livestream of the event.
Elon Musk's aerospace and defense contractor designed Starship, the largest rocket ever built or flown, to be fully reusable and to lift more cargo for less cost into orbit. Starship is considered crucial for the company's goal to vastly expand its Starlink satellite network, among other missions.
About 18 minutes into Friday's test flight, SpaceX successfully deployed 20 of its new Starlink V3 satellites into orbit, a first chance for the company to see how they performed in flight. The satellites were intended to burn up after about 20 minutes.
The new satellites, produced at a SpaceX facility in Redmond, Washington, are built to be larger, and more powerful than Starlink's earlier satellites. They're also equipped with solar arrays that generate twice as much power as prior generations, a SpaceX business analyst explained in a livestream.
SpaceX is now developing Starmind satellites, which the company intends to launch and eventually use as orbital data centers.
Besides using their largest rockets to launch the new, larger satellites, SpaceX wants to use the Starship rocket to bring U.S. astronauts back to the moon's surface, and to eventually power manned missions to Mars. The company is preparing Starship for a major NASA test flight next year.
Friday's test flight marked the second for Starship V3, the latest version of the rocket.
TMF Associates' Tim Farrar, a satellite services industry expert, said the test flight showed SpaceX has made some progress with Starship but "remains a long way from achieving rapid reusability of the entire ship." He pointed to problems SpaceX had relighting its Raptor engines on Friday. "Any similar failure during an attempted landing at the company's launch site could cause severe damage to the launchpad," he said.
In a post on X, which is owned by SpaceX, the company said it delayed an earlier test flight planned for Thursday "due to weather." It also previously scrubbed a test flight on July 16, after the rocket's booster triggered a hold, which "shut down the engines right as they were starting to ignite," a SpaceX employee said during a livestream of the earlier event.
SpaceX's stock has dropped in four of the past five weeks, slumping 43% from its peak close on June 16.`,
    bodyJa: `スペースXは金曜日の夜、テキサス州スターベースの企業街と発射施設から巨大なスターシップロケットを13回目のテスト飛行で打ち上げたが、これは同社の記録的な先月のIPO以来初めてとなる。
ロケットのスーパーヘビーブースターは飛行開始から約2分でスターシップ宇宙船から切り離され、制御された状態で湾岸に着水した。
飛行後の声明でスペースXは、ブースターが「着陸燃焼のためにエンジンの再点火を試みた」ため、着陸は完璧ではなかったが、「激しい着水」の前に点火に成功したのは一部のみだったと述べた。
スペースX社は、ロケットの上段がインド洋で「ソフトスプラッシュダウン」し、「インド洋に無傷で静止し、無傷の熱シールドの重要な視点を初めて提供した」と発表した。
従業員らはイベントのライブストリームで、今回の試験飛行を「幸運の13番」と呼んだ。
イーロン・マスク氏の航空宇宙・防衛請負業者は、これまでに建造または飛行された最大のロケットであるスターシップを、完全に再利用可能で、より少ないコストでより多くの貨物を軌道上に持ち上げられるように設計した。 Starshipは、数あるミッションの中でもとりわけ、Starlink衛星ネットワークを大幅に拡大するという同社の目標にとって極めて重要であると考えられている。
金曜日の試験飛行開始から約18分で、SpaceXは20機の新しいStarlink V3衛星を軌道上に展開することに成功し、同社にとっては飛行中の性能を確認する初めての機会となった。衛星は約20分後に燃え尽きるように設計されていた。
新しい衛星はワシントン州レドモンドのスペースX施設で製造され、スターリンクの以前の衛星よりも大型で強力になるように作られている。また、前世代の2倍の電力を生成する太陽電池アレイも装備されているとSpaceXのビジネスアナリストがライブストリームで説明した。
SpaceX は現在 Starmind 衛星を開発しており、同社はこれを打ち上げ、最終的には軌道データセンターとして使用する予定です。
スペースXは、自社最大のロケットを使って新しい大型衛星を打ち上げるほかに、スターシップロケットを使って米国の宇宙飛行士を月面に帰還させ、最終的には火星への有人ミッションを推進したいと考えている。同社は来年のNASAの大規模試験飛行に向けてStarshipの準備を進めている。
金曜日の試験飛行は、ロケットの最新バージョンであるスターシップV3の2回目となる。
衛星サービス業界の専門家であるTMFアソシエイツのティム・ファラー氏は、この試験飛行はスペースXがスターシップである程度の進歩を遂げたことを示しているが、「船全体の迅速な再利用を達成するにはまだ遠い」と述べた。同氏は、スペースX社が金曜日にラプターエンジンの再点火を行った際の問題点を指摘した。同氏は「同社の発射場に着陸を試みる際に同様の失敗があれば、発射台に重大な損傷を与える可能性がある」と述べた。
スペースX傘下のXへの投稿で、同社は木曜日に予定されていた初期の試験飛行が「天候のため」遅れたと述べた。また、7月16日にはロケットのブースターが停止を引き起こし、「点火し始めた瞬間にエンジンが停止した」後、試験飛行を中止したとスペースXの従業員は以前のイベントのライブストリームで語った。
スペースXの株価は過去5週間のうち4週間で下落し、6月16日の最高値終値から43％下落した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/spacex-launches-massive-starship-rocket-in-first-test-flight-since-ipo.html",
    publishedAt: "2026-07-25T02:17:11+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "trump-sued-hours-after-new-tariffs-take-4f09d0f7",
    title: "Trump sued hours after new tariffs take effect, as experts say they may not hold up",
    titleJa: "トランプ大統領、新たな関税が発効してから数時間後に提訴、専門家らは関税が維持できない可能性があるとの見方",
    summaryJa: "ドナルド・トランプ大統領の世界的な「解放デー」関税は法廷で無効となり、彼の通商課題の根幹は打ち砕かれた。一部の貿易専門家は、同氏の新たな任務も同じ運命をたどる可能性があると述べており、すでに初の法的異議申し立てを起こしているという。トランプ政権は金曜日、強制労働行為の使用を効果的に禁止できていないとして、80カ国以上の製品に広範な関税を課した。",
    bodyOriginal: `President Donald Trump's global "liberation day" tariffs were struck down in the courts, shattering the cornerstone of his trade agenda. Some trade experts say his newest duties could meet the same fate — and they've already caught their first legal challenge.
The Trump administration on Friday imposed broad tariffs on goods from more than 80 countries, alleging they have failed to effectively prohibit the use of forced labor practices.
The latest tariffs — applying to trade partners that cover 99.4% of U.S. trade — were brought under Section 301 of the Trade Act of 1974, which enables the government to impose import levies in response to unfair trade practices.
Section 301 has been used many times across presidential administrations to threaten or impose tariffs — including against China during Trump's first administration. But Trump is "using the statute in a fundamentally different way," Peter Harrell, visiting scholar at Georgetown University Law Center's Institute of International Economic Law, told CNBC.
Section 301 was "never intended for the president to just wholesale rewrite the tariff schedule" and impose "permanent" duties, Harrell said, adding that Trump's latest use of it could "for sure" be struck down in court.
Trump appears to see Section 301 as a key pathway for more tariffs. On Friday, he declared that the U.S. will "immediately" start a 301 investigation into the EU in retaliation for the hefty fines it has imposed on U.S. tech giants. It was the latest in a flurry of tariff actions Trump has taken in recent days, including slapping 25% duties on Brazilian imports — also via Section 301 — and vowing 50% tariffs on some goods from Canada.
The legal battle over the newest tariffs has already begun. Just hours after they took effect, two small businesses sued, arguing that the government is using Section 301 as a pretext to re-create the same global tariff regime that the Supreme Court torpedoed five months earlier.
The new lawsuit, filed in the U.S. Court of International Trade, notes that the Section 301 tariffs took effect right as another batch of tariffs expired.
Those lapsed duties, brought under Section 122 of the 1974 law, were announced by Trump mere hours after the Supreme Court struck down his global tariffs on Feb. 20. By using the Section 122 authority, those tariffs had a set end date.
The high court had ruled that the law Trump used to unilaterally slap tariffs on nearly every other country — the International Emergency Economic Powers Act, or IEEPA — did not actually authorize that action.
Friday's lawsuit argues that Trump's new tariffs, while ostensibly aimed at addressing forced labor practices, are "designed to preserve substantially the same broad tariff regime that this Court and the Supreme Court have held Congress did not authorize."
Section 301 "is not a freestanding authorization to tax substantially all imports from substantially all trading partners at rates selected to replicate the invalidated IEEPA tariff regime rather than to eliminate identified foreign practices," the suit says.
The Trump administration has insisted it's not merely looking for ways to resurrect its "liberation day."
Addressing forced labor "is something that President Trump has been focused on ... for many years," a senior administration official told reporters Thursday in a call about the tariffs.
As for the timing, the official said, "We're implementing this at this moment really to avoid complexity."
A spokesperson for the Office of the U.S. Trade Representative did not immediately respond to a request from CNBC seeking comment on the lawsuit.
The new lawsuit was brought by the Liberty Justice Center, which represented plaintiffs in the successful challenge of Trump's use of IEEPA.
The legal nonprofit contends the Trump administration "cannot preserve a predetermined global tariff policy simply by moving from one statute to another."
Other experts contacted by CNBC agreed.
"In my view, the Section 301 tariffs are clearly unlawful," Kimberly Clausing, a professor of tax law at the UCLA School of Law and a senior fellow at the Peterson Institute for International Economics, said by email.
The tariffs reach beyond the statute's intention, Clausing said, arguing that the administration's focus on forced labor "is a mere pretext for recreating the IEEPA tariff regime." And there is "no evidence linking this sort of trade measure to the supposed policy goal" of cracking down on forced labor, she said.
"One can never be certain" how the courts will rule, Clausing noted, adding that any legal challenges will take time to make their way through the legal system.
Alan Wolff, another senior fellow at PIIE, wrote in a blog post Thursday that the Supreme Court would likely strike down the forced-labor tariffs.
"To use the retaliatory authority of Section 301, the acts, policies, or practices of a country must be found to burden US commerce," Wolff wrote. "That requirement is not clearly satisfied for the 60 targeted countries, which account for nearly all US imports and 90 percent of world trade."
Greta Peisch, former general counsel for the Office of the U.S. Trade Representative and a partner at Wiley Rein, was less certain, telling CNBC the Trump administration has followed the legal procedures required to impose tariffs under Section 301.
The statute's language "gives a lot of flexibility" to the government, she said. "I think it's a pretty difficult standard to have to argue against."
Andrew Siciliano, global and U.S. head of trade and customs at KPMG, told CNBC in an email that because of Section 301's extensive record, the new tariffs "may be harder to unwind."
"From a business perspective, this means companies should plan around the tariffs that exist today rather than assume they will be quickly reversed or modified," he said.`,
    bodyJa: `ドナルド・トランプ大統領の世界的な「解放デー」関税は法廷で無効となり、彼の通商課題の根幹は打ち砕かれた。一部の貿易専門家は、同氏の新たな任務も同じ運命をたどる可能性があると述べており、すでに初の法的異議申し立てを起こしているという。
トランプ政権は金曜日、強制労働行為の使用を効果的に禁止できていないとして、80カ国以上の製品に広範な関税を課した。
最新の関税は、米国貿易の99.4％をカバーする貿易相手国に適用されるもので、1974年通商法第301条に基づいて導入されたもので、不公平な貿易慣行に対抗して政府が輸入税を課すことを可能にしている。
第 301 条は、トランプ第一次政権時代の中国に対するものも含め、関税を脅したり課したりするために大統領政権全体で何度も利用されてきた。しかし、トランプ大統領は「根本的に異なる方法でこの法令を利用している」とジョージタウン大学ローセンター国際経済法研究所の客員研究員ピーター・ハレル氏はCNBCに語った。
ハレル氏は、第301条は「大統領が単に関税表を大々的に書き換えて」「恒久的な」関税を課すことを意図したものではないと述べ、トランプ大統領の最近の同条項の利用は「確実に」法廷で取り消される可能性があると付け加えた。
トランプ大統領は第301条が追加関税への重要な道筋であると考えているようだ。同氏は金曜日、米国が米国のハイテク大手に課した高額の罰金への報復として、EUに対する301条調査を「直ちに」開始すると宣言した。これは、これも第301条に基づきブラジルからの輸入品に25％の関税を課したり、カナダからの一部の商品に50％の関税を課したりするなど、ここ数日トランプ大統領が取った一連の関税措置の最新のものだった。
最新の関税をめぐる法廷闘争はすでに始まっている。発効からわずか数時間後、中小企業２社が訴訟を起こし、政府が第３０１条を口実にして、最高裁が５カ月前に無効にしたのと同じ世界的な関税制度を再構築しようとしていると主張した。
米国国際貿易裁判所に起こされた新たな訴訟では、第301条関税は別の関税の期限切れと同時に発効したと指摘している。
1974年法律第122条に基づいて提起されたこれらの義務の失効は、最高裁判所が2月20日に世界的な関税を無効にしたわずか数時間後にトランプ大統領によって発表された。第122条の権限を利用することで、これらの関税には終了日が設定されていた。
高等裁判所は、トランプ大統領が他のほぼすべての国に一方的に関税を課すために使用した法律、つまり国際緊急経済権限法（IEEPA）は、実際にはその措置を許可していないとの判決を下した。
金曜の訴訟では、トランプ大統領の新たな関税は、表向きは強制労働行為に対処することを目的としているが、「当裁判所と最高裁判所が議会が認めなかったと判断したものと実質的に同じ広範な関税制度を維持することを目的としている」と主張している。
第301条は「特定された外国慣行を排除するためではなく、無効になったIEEPA関税制度を再現するために選択された税率で、実質的にすべての貿易相手国からの実質的にすべての輸入品に課税する独立した権限ではない」と訴状は述べている。
トランプ政権は、単に「解放の日」を復活させる方法を模索しているだけではないと主張している。
強制労働への対処は「トランプ大統領が長年にわたり注力してきたことだ」と政府高官は木曜、関税に関する電話会談で記者団に語った。
タイミングについては、「複雑さを避けるため、現時点でこれを実装している」と関係者は述べた。
米通商代表部の報道官は、訴訟に関するコメントを求めたCNBCの要請にすぐには応じなかった。
この新たな訴訟は、トランプ大統領のIEEPA利用に対する異議申し立ての成功において原告の代理人を務めたリバティ・ジャスティス・センターによって起こされた。
同法的非営利団体は、トランプ政権が「ある法令から別の法令に移行するだけでは、あらかじめ定められた世界的な関税政策を維持することはできない」と主張している。
CNBCが連絡を取った他の専門家も同意した。
「私の見解では、第301条関税は明らかに違法だ」とUCLAロースクールの税法教授でピーターソン国際経済研究所の上級研究員であるキンバリー・クラウジング氏は電子メールで述べた。
クラウジング氏は、関税は法令の意図を超えていると述べ、政権が強制労働に焦点を当てているのは「IEEPA関税制度を再構築するための単なる口実だ」と主張した。そして、この種の貿易措置を強制労働の取り締まりという「想定される政策目標と結びつける証拠はない」と述べた。
クラウジング氏は、裁判所がどのような判決を下すかは「決して確信できない」と述べ、法的異議申し立てが法制度を通過するまでには時間がかかると付け加えた。
PIIEのもう一人の上級研究員、アラン・ウルフ氏は木曜日のブログ投稿で、最高裁判所は強制労働関税を無効にする可能性が高いと述べた。
「第301条の報復権限を行使するには、ある国の行為、政策、慣行が米国の通商に負担をかけると認定されなければならない」とウォルフ氏は書いた。 「この要件は、米国の輸入品のほぼすべてと世界貿易の90％を占める対象60カ国にとって明らかに満たされていない。」
元米通商代表部法務顧問でワイリー・レイン社のパートナーでもあるグレタ・ペイシュ氏は、トランプ政権が第301条に基づく関税発動に必要な法的手続きを踏んだとCNBCに語ったが、あまり確信を持てていない。
同法の文言は政府に「大きな柔軟性を与える」と述べた。 「これに反論しなければならないのはかなり難しい基準だと思います。」
KPMGの世界・米国通商関税責任者であるアンドリュー・シチリアーノ氏はCNBCに対し、第301条の広範な実績により、新たな関税の「解除はさらに困難になる可能性がある」と電子メールで語った。
同氏は、「ビジネスの観点から見ると、これは企業が関税がすぐに撤回されたり変更されたりすると想定するのではなく、現在存在する関税を中心に計画を立てる必要があることを意味する」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/trump-tariffs-lawsuit-301-ieepa.html",
    publishedAt: "2026-07-25T00:18:53+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "long-overdue-life-changing-or-frivolous-76d74bab",
    title: "Long overdue, life-changing or frivolous? Your thoughts on wedding rule changes",
    titleJa: "長い間待ち望んでいたもの、人生を変えるもの、それとも軽薄なものですか?結婚式のルール変更についてのあなたの考え",
    summaryJa: "長い間待ち望んでいたもの、人生を変えるもの、それとも軽薄なものですか?結婚式のルール変更についてのあなたの考え- 公開されました",
    bodyOriginal: `Long overdue, life-changing or frivolous? Your thoughts on wedding rule changes
- Published
The day Sam and Courtney Scholey became husband and wife didn't feel like their wedding day.
There was no walking down the aisle, no rings exchanged, no wedding dress, and no music.
That all came several days later, when the pair had a bespoke ceremony led by a celebrant who knew them, at a venue in the Oxfordshire countryside. It was their dream wedding - but it wasn't legal in England and Wales.
And so in April, they forked out hundreds of pounds to quietly sign papers at a library in Buckingham.
"For us, that day was as insignificant as possible," Courtney told the BBC. "It was just the words we had to say to make it legally binding."
The Scholeys are one of a growing number of couples who feel the rigid rules around weddings are making getting married more stressful, more expensive and less meaningful.
But under new proposals announced this month - described by the government as the biggest shake-up of wedding laws in 200 years - couples in England and Wales could have the freedom to hold official marriage ceremonies in a wider array of unconventional locations, from forests to beaches, as long as the location is approved by a registered officiant.
It's welcome news for Nicky Brown, who said she wants to exchange vows in a wildly picturesque corner of Wales, with just her mum and her partner's mum as witnesses.
"I'd be quite happy to get married in a field full of sheep," the 57-year-old told the BBC.
But some say the sacred tradition of marriage is being perverted.
Currently, a marriage or civil partnership ceremony in England or Wales must take place at an approved venue to be legally binding – and many exert control on elements of the wedding such as vows, headcounts or music.
There are also tight restrictions on who can officiate a wedding and how. Authorised religious figures can, but – with few exceptions – only in places of worship.
Registrars can conduct a wedding, but it can't have any religious content. And celebrants can't legally marry people at all.
A Law Commission report in 2022 concluded that these marriage laws, which date back to the 18th and 19th Centuries, were "complicated, inefficient, unfair and needlessly restrictive".
David Lammy, then deputy prime minister, said marriage laws in England and Wales had "not kept pace with the social and cultural changes that have shaped modern Britain".
He added: "Some feel forced to pay for two different ceremonies, one legal and one belief based. Some enter into a marriage that isn't legally recognised. Others feel they have little choice but to marry in a way which doesn't reflect their beliefs, marring what should be a joyous occasion."
Scotland and Northern Ireland relaxed their rules years ago.
Though the exact shape of the new rules is still under public consultation until September, these changes will take regulations from a "buildings based" regulation model to an "officiant based" one.
'The laws are now, what, 200 years out of date?'
Brown said she and her partner had put off getting married because there was no legal and affordable version of a wedding that reflects them.
She said she didn't want bells and whistles - or even a wedding dress. "I just want somebody to marry us and in a beautiful setting that isn't just going to cost the earth."
Brown went on to explain that she'd been scared her mum - who is 86 and unwell - would miss out on her wedding day. But these changes had given her hope: "The laws are now, what, 200 years out of date?"
Miranda Allard, 66, also agreed that change is long overdue.
When she got married 40 years ago, she had to jump through hoops to get permission to hold an interfaith ceremony in her parent's garden - and finds it astounding couples today face the same obstacles.
"We applied for a special licence... [and] explained how we did not want to put my Jewish mother-in-law through a church wedding," she said.
"I, on the other hand, was brought up in a Christian family and would not 'feel married' if doing so in a registry office."
It took letters from the couple, their parents, the local bishop, the village vicar and more to convince authorities to allow the ceremony.
"We also combined our legal Christian service with Jewish prayers and tradition, like breaking the glass. Totally unheard of then and ever since," she said, adding the nuptials even made the paper.
Father John, who didn't provide his last name, wrote in to BBC Your Voice to say he'd like to be able to perform ceremonies like this too.
"Marriage is about the lifelong commitment made before God for me, and for some couples the setting can make that sacred moment even more personal and memorable."
Brian Bracher, 65, from Chichester in West Sussex, said he cannot believe the UK is still debating these changes.
"It is ridiculous that, in this modern era, a small minority are still trying to exert control and make decisions about what is frivolous and not acceptable. Just let people, that love each other, marry in a way that suits them."
The proposals will be a welcome change for Christians from the LGBT community, said 33-year-old Isabel Sinagola.
She added: "[They] currently cannot have the wedding they might want, as they cannot marry in the Church of England, but also cannot have religious content in the only option available to them: a civil ceremony."
Others are hopeful this provides more affordable wedding options.
'We want to get married but won't, as it costs too much'
Carl Jones said he and his partner of 20 years haven't wed because even the simplest weddings are too expensive.
"We want to get married but won't, as it costs too much. It's cheaper if we just have two witnesses, but why should our [12-year-old] daughter not be allowed to attend... It's wrong."
But sceptics say this will do little to lower the cost of weddings, which according to wedding planner app Hitched has jumped to £21,990 on average.
Reverend Tom Kennar said it isn't marriage that is expensive, it's the extras most modern couples like to add.
"[It] is the costs of the reception, vehicles, booze, photographers, clothing, food, cars etc," he said.
Other critics of the proposal say they fear it will dilute the significance of marriage.
"Marriage is a gift from God to secure society. Not an opportunity to set new standards and styles," said Donald Tosh, from Glasgow, who wrote to BBC Your Voice.
"It's now not a life decision, it's a temporary decision. And now with this, a very temporary frivolous decision," said Oliver, from Kent.
However, celebrant Zadie Ward told the BBC the changes could enhance the meaning of a wedding for many couples.
"[Critics] are saying it's a solemn promise and it's about the serious commitment, but how can you ask someone to make a serious commitment in words that mean nothing to them and ways that are meaningless to them?"
She says the changes won't take anything from those who still want traditional weddings – it simply gives couples who don't more options.
"You've got blended families, mixed cultures, traditions that are changing even within those cultures.
"Modern relationships deserve modern ceremonies."
The government has stressed there will be safeguards to guarantee the dignity of marriage is preserved.
Ceremonies deemed to be "gimmicks" that risk trivialising the legal act of marriage would not be allowed. Activities "such as skydiving, white-water rafting, roller coasters or other amusement rides" would "fall short of the standard".
"Every couple deserves to start their journey together with an unforgettable day that reflects their beliefs, their personalities and the lives they plan to build together," Lammy wrote.
"This Government's changes will bring weddings law into the twenty-first century."
Additional reporting by Mary Litchfield and Rozina Sini
Related topics
- Published29 June 2025`,
    bodyJa: `長い間待ち望んでいたもの、人生を変えるもの、それとも軽薄なものですか?結婚式のルール変更についてのあなたの考え
- 公開されました
サムとコートニー・スコーリーが夫婦になった日は、結婚式の日とは思えませんでした。
通路を歩くことも、指輪の交換も、ウェディングドレスも、音楽もありませんでした。
それはすべて、数日後、オックスフォードシャーの田園地帯にある会場で、二人が知り合いの司会者によって特別に行われたセレモニーを開いたときのことだった。それは彼らの夢の結婚式でしたが、イングランドとウェールズでは合法ではありませんでした。
そして4月、彼らはバッキンガムの図書館で静かに書類に署名するために数百ポンドを出金した。
「私たちにとって、あの日は可能な限り取るに足らないものでした」とコートニーさんはBBCに語った。 「それは法的拘束力を持たせるために私たちが言わなければならなかった言葉にすぎません。」
スコーリー夫妻は、結婚式に関する厳格な規則のせいで、結婚がよりストレスがかかり、費用がかかり、意味が薄れていると感じているカップルが増えているうちの1人だ。
しかし、今月発表された新たな提案（政府は過去200年で最大の結婚式法改革と表現）の下では、イングランドとウェールズのカップルは、登録された司会者の承認が得られれば、森林から海岸まで、より幅広い型破りな場所で公式の結婚式を挙行する自由が与えられることになる。
ウェールズの風光明媚な一角で、自分の母親とパートナーの母親だけを証人として誓いを交わしたいと述べたニッキー・ブラウンにとって、これは歓迎すべきニュースだ。
「羊がいっぱいいる野原で結婚できたらとても幸せです」と57歳の彼女はBBCに語った。
しかし、結婚という神聖な伝統が歪められていると言う人もいる。
現在、イングランドやウェールズでの結婚やシビル・パートナーシップの儀式は、法的拘束力を持たせるために承認された会場で行われなければならず、その多くは誓いの言葉、人数、音楽などの結婚式の要素を管理している。
結婚式の司会を誰がどのように行うかについても厳しい制限があります。公認された宗教者は、いくつかの例外を除いて、礼拝の場でのみ許可されます。
登記官は結婚式を執り行うことはできますが、宗教的な内容を含めることはできません。そして、セレブラントは合法的に人々と結婚することはできません。
2022年の法務委員会の報告書は、18世紀から19世紀に遡るこれらの結婚法は「複雑で、非効率で、不公平で、不必要に制限的」であると結論づけた。
当時副首相だったデービッド・ラミー氏は、イングランドとウェールズの結婚法は「現代英国を形作ってきた社会的・文化的変化に追いついていない」と述べた。
さらに、「法的な儀式と信念に基づいた2つの異なる儀式の費用を支払わなければならないと感じる人もいる。法的に認められていない結婚をする人もいる。また、自分の信念を反映しない形で結婚し、本来なら楽しい機会を台無しにするしか選択肢がないと感じる人もいる」と付け加えた。
スコットランドと北アイルランドは数年前に規則を緩和した。
新しい規則の正確な形状は、9月までまだ公的な協議中であるが、これらの変更により、規制は「建物ベース」の規制モデルから「役員ベース」の規制モデルに移行することになる。
「法律は今では 200 年も時代遅れになっているのですか?」
ブラウンさんは、自分たちを反映する合法的かつ手頃な価格の結婚式がなかったため、彼女とパートナーが結婚を先延ばしにしていたと語った。
彼女は、余計なものやウェディングドレスさえも欲しくないと言いました。 「私は誰かが私たちと結婚して、地球を犠牲にするだけではない美しい環境で結婚してほしいのです。」
ブラウンさんは続けて、86歳で体調が悪い母親が結婚式の日に欠席するのではないかと心配していたと説明した。しかし、これらの変化は彼女に希望を与えた。「法律は今では 200 年も時代遅れになっているのですか?」
ミランダ・アラードさん（66歳）も、変化が待ち望まれていることに同意した。
40 年前に結婚したとき、彼女は両親の庭で宗教間の儀式を行う許可を得るために困難を乗り越えなければなりませんでしたが、驚くべきことに、今日のカップルが同じ障害に直面していることに気づきました。
「私たちは特別な許可を申請しました…[そして]ユダヤ人の義母に教会の結婚式を受けさせたくないと説明しました」と彼女は語った。
「一方、私はクリスチャンの家庭で育ったので、登記所で結婚していると『結婚しているとは感じない』でしょう。」
式典を許可するよう当局を説得するには、夫妻、両親、地元の司教、村の牧師などからの手紙が必要だった。
「私たちはまた、ガラスを割るなど、合法的なキリスト教の礼拝をユダヤ教の祈りや伝統と組み合わせました。当時もそれ以来、まったく前例のないことです」と彼女は述べ、結婚式は新聞にもなったと付け加えた。
ジョン神父は姓は明らかにしなかったが、BBC Your Voiceに手紙を書き、自分もこのような儀式を執り行いたいと述べた。
「私にとって結婚とは、神の前で生涯にわたって交わされる誓約です。一部のカップルにとっては、その神聖な瞬間がより個人的で思い出に残るものになるでしょう。」
ウェストサセックス州チチェスター在住のブライアン・ブラッチャーさん（65）は、英国がこうした変更について未だに議論しているとは信じられないと語った。
「この現代において、少数派が未だに軽薄で受け入れられないことについて統制を図り、決断を下そうとしているのはばかばかしいことだ。愛し合う人々が自分たちに合った方法で結婚すればいいだけだ。」
33歳のイザベル・シナゴラさんは、この提案はLGBTコミュニティのキリスト教徒にとって歓迎すべき変化になるだろうと語った。
さらに、「彼らは現在、英国国教会で結婚できないため、望むような結婚式を挙げることができないが、唯一の選択肢である人前式で宗教的な内容を盛り込むこともできない」と付け加えた。
これにより、より手頃な結婚式のオプションが提供されることを期待する人もいます。
「結婚したいけどお金がかかりすぎるからやめよう」
カール・ジョーンズさんは、最もシンプルな結婚式ですら費用がかかりすぎるため、20年間連れ添ったパートナーと結婚していないという。
「私たちは結婚したいのですが、お金がかかりすぎるのでやめます。証人を2人だけ用意すれば安く済むのに、どうして私たちの（12歳の）娘の出席が許されないのでしょうか…それは間違っています。」
しかし懐疑論者らは、これでは結婚式費用の削減にはほとんど役立たないと主張しており、ウェディングプランナーアプリのヒッチドによると、結婚式費用は平均2万1990ポンドに跳ね上がっているという。
トム・ケナー牧師は、お金がかかるのは結婚ではなく、現代のカップルの多くが追加したい追加料金だ、と語った。
「それは、レセプション、乗り物、酒、写真家、衣服、食事、車などの費用です」と彼は言った。
この提案に反対する他の人たちは、結婚の意義が薄れるのではないかと懸念していると述べている。
「結婚は社会を安定させるための神からの贈り物だ。新しい基準やスタイルを確立する機会ではない」とBBC Your Voiceに宛てたグラスゴー出身のドナルド・トッシュさんは述べた。
ケント州出身のオリバーさんは、「これは人生に関わる決断ではなく、一時的な決断だ。そして今回のことで、非常に一時的な軽薄な決断になった」と語った。
しかし、司祭のゼディ・ウォード氏はBBCに対し、この変更は多くのカップルにとって結婚式の意味を高める可能性があると語った。
「（批評家は）これは厳粛な約束であり、真剣な約束だと言っていますが、自分にとって何の意味もない言葉や意味のない方法で、どうやって誰かに真剣な約束を求めることができますか？」
彼女は、この変更は依然として伝統的な結婚式を望んでいる人々から何も奪うことはなく、単に選択肢を持たないカップルに与えるだけだと言う。
「混合家族、混合文化、伝統があり、それらの文化の中でも変化しています。
「現代の人間関係には、現代的な儀式が必要です。」
政府は、結婚の尊厳が保たれることを保証するための安全策があると強調した。
結婚という法的行為を矮小化する危険性のある「からくり」とみなされる儀式は認められない。 「スカイダイビング、急流下り、ジェットコースター、その他の遊園地など」のアクティビティは「基準を下回る」だろう。
「どのカップルも、自分たちの信念、個性、そしてこれから一緒に築いていく人生を反映した忘れられない日を持って、一緒に旅を始める権利がある」とラミーさんは書いた。
「この政府の変化により、結婚式法が21世紀に導入されるでしょう。」
Mary Litchfield と Rozina Sini による追加レポート
関連トピック
- 2025 年 6 月 29 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvg8wlwzjx9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-24T23:31:11+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/77ee/live/cd7c6030-82c3-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 9,
  },
  {
    id: "adhd-has-rewired-the-workplace-this-is-w-de474667",
    title: "ADHD has rewired the workplace. This is what it means for bosses and workers",
    titleJa: "ADHD は職場の配線を変えました。これは上司と従業員にとって意味することです",
    summaryJa: "ライアン・トギル氏は、イギリス最大の食料品チェーンの一つを雇用裁判所に提訴したことは、ほとんど人生を乗っ取られるほどだったと語る。「18か月間、それしか考えられませんでした」と彼は言う。",
    bodyOriginal: `Taking one of the UK's biggest grocery chains to an employment tribunal was something that Ryan Toghill says almost took over his life.
"It was all I could think about for 18 months and more," he says.
The deputy store manager at Lidl, who'd told his bosses he'd been diagnosed with Attention Deficit Hyperactivity Disorder (ADHD), was called to a disciplinary meeting after breaking company rules by using equipment he hadn't been trained to use. After that meeting, Ryan was dismissed for gross misconduct.
He successfully appealed the decision and was offered a lower-paid role. He rejected it and took his case to a tribunal. Eventually, he was awarded more than £45,000 when the judge found his former employer hadn't fully taken his ADHD diagnosis into account during the disciplinary process.
The judgement found reasonable adjustments during the process hadn't been offered to him, such as additional breaks.
He'd been described by a manager as showing "a lack of remorse," something the tribunal found was clearly linked with his communication differences associated with having ADHD.
"I don't show a lot of emotions," Ryan explains. "I could be incredibly happy, angry, upset, or remorseful, and my facial expressions and tone of voice would essentially remain the same."
The tribunal upheld part of his claims for unfair dismissal, wrongful dismissal and a failure to make reasonable adjustments. Lidl says it's "committed to ensuring that everyone receives the reasonable adjustments, clear communication and support they need to thrive."
Campaigners, lawyers and HR teams say cases like this highlight a shift that businesses should be paying attention to.
Thousands of people have been diagnosed as neurodivergent in the last few years, an umbrella term that covers autism, ADHD and other conditions such as dyslexia and Tourette's syndrome.
Since the pandemic in particular, diagnosis rates for ADHD and autism have been rising, and they're featuring more regularly in disputes in employment tribunals.
While many people who are neurodivergent don't consider themselves disabled, the Equality Act 2010 may give them protection by recognising their condition as a disability, regardless of whether they have a formal diagnosis. They're entitled to reasonable adjustments if they can show that their condition has a substantial and long-term adverse effect on their ability to do normal day-to-day activities. These are widely defined and aren't limited to work tasks.
Cases going to tribunal can be around employers not making those adjustments, but they can also be about how people are treated at work.
For example, a 2025 tribunal found a software engineer who had ADHD had faced discrimination because a manager sighed and made other expressions of "non-verbal frustration" towards him.
"What we're seeing in tribunals is rarely the result of deliberate discrimination," says Lutfur Ali, a diversity and inclusion adviser at the Chartered Institute of Personnel and Development, the professional body for HR.
"Cases commonly stem from reasonable adjustments being overlooked, performance processes that were never designed with different thinking styles in mind, and managers lacking confidence because they haven't been given the training or the time to have the right conversations."
So, while awareness of neurodivergence has never been higher, why are more cases like this ending up in the legal system? And are businesses struggling to keep up with the needs of the workforce?
Overdiagnosis or underdiagnosis?
Irwin Mitchell is one of the biggest law firms in the UK, and its lawyers say their caseloads increasingly include grievances linked to neurodivergence at work.
Using the Ministry of Justice's online judgments database, the company identified 517 employment tribunal cases mentioning neurodivergent conditions in 2025, up from 265 in 2020. The most commonly cited conditions were autism and ADHD.
The live database is limited and gives only a partial picture. The Ministry of Justice says the figures should not be considered official statistics.
Diagnosis rates of ADHD and autism have soared, and waiting lists for assessments on the NHS in England are at record levels, with lists even closing in some areas due to the huge demand. Irwin Mitchell says those long waits have an impact on workplaces too. "Anecdotally, we're seeing a lot of people that are either threatening to bring claims or actually bringing claims, that don't have formal diagnoses," says Jo Moseley, a legal director at the firm.
Research from University College London suggests nearly a 20-fold increase in the number of UK adults diagnosed with ADHD between 2000 and 2018. Diagnosis rates for autism were eight times higher in 2018 than in 1998.
Despite these rises in diagnosis and referrals, some studies suggest both ADHD and autism are actually underdiagnosed.
In June, the Lancet Regional Health Europe journal published research suggesting that while around 1.2% of adults in England had an ADHD diagnosis, international prevalence data estimates it affects 3-5% of people. The authors of the study said this indicates it could still be under-diagnosed, particularly in older age groups.
Similarly, research by King's College London last year suggested that around 90% of autistic people over 40 remain undiagnosed.
Diagnosis levels aside, there has been a huge increase in awareness of the challenges neurodivergent people can face - whether it's in communication preferences, personal organisation, or sensory needs. In workplaces, many describe "masking," a term which means trying to hide their traits in order to fit in - something which can put a huge strain on the person's wellbeing.
"Society is playing catch-up," says Ben Branson, an entrepreneur who runs a charity called The Hidden 20%, which campaigns for better understanding of neurodivergence. He was diagnosed with autism in 2022.
"The recognition of adult neurodivergence has exploded," he says. "But we have always been here, we are just not hiding anymore, and there are millions of people finally understanding why they kept moving jobs, why they didn't fit, why they kept burning out and why they felt so exhausted, who are no longer willing to struggle in silence."
This year's City and Guilds Foundation's Neurodiversity Index found that while employers think they're "doing better" when it comes to inclusion, neurodivergent employees say they are seeing only small improvements.
The study found employers' confidence levels in their own "neurodivergent readiness" averaged between 70-75%. However, the proportion of employees who reported feeling psychologically safe telling their employer about their diagnosis, and who believed their organisation understood the impact of their condition, was between 32-38%.
Invisible disabilities
This disconnect between managers and staff is something employment lawyer Jodie Hill is familiar with. Her firm, Thrive Law, specialises in workplace wellbeing and works with both employees and businesses. She set it up in 2018 after getting her own ADHD diagnosis at the age of 35.
"In the last three months, I've seen more than I've ever seen before in terms of enquiries," she says.
So, what are some employers doing that leads to successful action being taken against them? Hill says one thing that comes up a lot is bosses asking for proof of a formal diagnosis, when this isn't the legal test. Another issue can be an employer looking to dismiss someone over performance before considering a possible disability. Both of which could leave them exposed to claims of discrimination.
In the training sessions she carries out for businesses, she says she hears from the employer's perspective that it can feel like "every other conversation is about people wanting support".
Fears over cost, and concern that doing something for one member of staff means they have to do it for all of them, can lead to what Hill describes as an "initial dismissiveness" from some employers. But that, she says, comes from a lack of understanding over what can be an "internal and invisible" struggle.
"There's a mindset from employers that it's very linear… and that all the symptoms are the same every day," she says.
Another challenge can be determining what constitutes a "reasonable adjustment," a sticking point which can be what ends up being decided in a tribunal.
Hill says some employers "don't know where to start" and wrongly assume that making reasonable adjustments means doing whatever the employee asks.
Some tribunals have shown the limits of what's "reasonable." In one case, an autistic claimant had requested extensive changes to the recruitment process at the Judicial Appointments Commission (JAC), including simplified questions and advance access to test questions. The JAC had already offered extra time and assistance from a friend and denied the extra requests. When it went to tribunal, the judge found the adjustments the person had asked for were "clearly going beyond what was necessary or reasonable".
While there isn't a check list for employers, lawyers stress that they have to be able to justify why they're saying no to something, and show they've looked at alternative options.
Jo Moseley from law firm Irwin Mitchell explains that when it comes to judging what is "reasonable", a tribunal would take into account factors like the person's role, and the size of the business.
"Big employers will certainly be expected to do more than small employers," she says, stressing that many adjustments can cost nothing or very little, such as looking at how meetings are structured, offering regular breaks, or somewhere quiet to work.
In one tribunal last year, the pub chain Greene King was found to have failed to make reasonable adjustments for a chef who was dyslexic and struggled with reading orders.
He'd asked for a Bluetooth headset. The tribunal found that the company's failure to provide this adjustment had led to his employment ending. He was awarded £24,000. A spokesperson for Greene King said it respected the tribunal's decision and that it was committed to upholding the highest standards of employee welfare.
"Ultimately, the purpose of an adjustment is to facilitate good performance, not to lower the standard of performance," says Prof Nancy Doyle, an occupational psychologist.
"Employers are anxious of challenge, anxious about saying or doing the wrong thing," she adds.
She explains that employers are not expected to keep someone in a job where they're risking safety or delivering less than their peers, but that in some workplaces, managers end up "covering for neurodivergent staff," leaving them in a situation where they are "dependent on kindness, which may ebb away over time."
Daniel Rickman, who runs glazing business Structura, decided not to wait for individuals to ask for adjustments - but instead offer them to all staff.
The company introduced flexible working, fidget toys in meeting rooms, and red or green "busy lights" on desks, that allow staff to indicate whether they're happy to be disturbed.
He says it means the business is "getting the best out of everybody" and he is retaining skilled staff. However, showing the polarisation around the topic, he says he has also been criticised for being "woke."
As awareness of neurodiversity has grown, some businesses such as Microsoft and BAE Systems have created targeted hiring programmes to attract neurodivergent candidates, aware of the skills they can bring to their organisations.
'Nobody fits into neat boxes'
Making neurodiversity a part of how workplaces are designed is what Prof Amanda Kirby believes is needed.
She's heading up the government's expert panel, set up to look at improving the job chances of neurodivergent people, and says a "medical" model of providing adjustments is inadequate.
"Nobody fits into neat boxes", she says, adding that training focused on doing x for dyslexia or y for ADHD is "never going to work."
"It's not neurodiversity over here, mental health over here, unemployment over there," she says, pointing out that those who are not in employment, education or training, and those moving through the justice system are less likely to have a diagnosis and more likely to be neurodivergent.
Kirby's report is yet to be published, but it's part of the government's wider plans to tackle stubborn levels of economic inactivity that remain higher than before the pandemic.
A Government report in 2024 found autistic graduates are twice as likely to be unemployed after 15 months as non-disabled graduates, and last year, the government's ADHD Taskforce estimated that "unsupported" ADHD was costing the economy £17bn a year.
The latest official figures show the number of people receiving Personal Independent Payments topping 4 million, the number of those with ADHD as their main condition was around 100,000 in April, up by 30,000 in the last two years. Just over half of these were aged 16 to 24.
The government is investing £3.5bn into personalised employment support for disabled people and those with health conditions in order to address problems with employment levels.
More from InDepth
Why the UK is dithering over what to do about e-scooters
- Published2 days ago
Why Andy Burnham will find it so tricky to unite Britain
- Published4 days ago
The hidden cost of the night shift and how to sleep it off
- Published6 days ago
A Department for Work and Pensions spokesperson told the BBC: "For too long disabled people and those with a neurodiversity condition have been left behind, ignored, and not given the support they need to get into work."
As well as costly, these tribunal claims are becoming increasingly drawn out as the UK's tribunal system creaks.
Figures from the Ministry of Justice put the number of open claims at a record high of 531,000.
Jenna Ide, a partner and employment law specialist at Thomas Mansfield Solicitors, says that the backlog adds pressure on employers.
"It can take several years for a case to reach a final hearing," she says. "In the meantime, employers are often required to make difficult judgement calls without knowing where a tribunal would ultimately draw the line," she adds.
Law firms say some tribunals are now being listed for 2030 and the backlog is expected to grow with the Employment Rights Act. From January 2027, this will give workers protection against unfair dismissal after six months instead of only after two years.
"Most people, even conservatively, think that there's going to be a huge explosion just in unfair dismissal claims," says Irwin Mitchell's Jo Moseley.
Not only could this backlog create problems in terms of access to justice, but according to Kirby, rising numbers of tribunals could have another troubling effect.
"Some employers will go, 'these people' are potentially going to cause us lots of problems," she says, adding that this could lead to a "hidden bias" in recruitment, where employers consider it too risky to take on someone they believe to be neurodivergent and so find a reason to give the job to someone else.
Ryan Toghill, who says he hasn't worked since leaving Lidl because of poor health, says his experience has left him conflicted over whether he would tell a prospective employer about his diagnosis.
But despite the challenges, his hope is that workplace changes will "trickle through businesses" in time.
"You've got to manage people differently if they're neurodivergent," he says. "You can get the best out of them, if you adapt a little bit."
Lead image: Getty
BBC InDepth is the home on the website and app for the best analysis, with fresh perspectives that challenge assumptions and deep reporting on the biggest issues of the day. Emma Barnett and John Simpson bring their pick of the most thought-provoking deep reads and analysis, every Saturday. Sign up for the newsletter here
Get in touch
Are you personally affected by the issues raised in this story?`,
    bodyJa: `ライアン・トギル氏は、イギリス最大の食料品チェーンの一つを雇用裁判所に提訴したことは、ほとんど人生を乗っ取られるほどだったと語る。
「18か月間、それしか考えられませんでした」と彼は言う。
リドルの副店長は注意欠陥多動性障害（ADHD）と診断されたことを上司に伝えていたが、使い方の訓練を受けていない機器を使用するという社内規定に違反したとして懲戒会議に呼び出された。この会談の後、ライアンは重大な違法行為により解雇された。
彼はこの決定に対して異議を申し立てることに成功し、より低賃金の役職が与えられた。彼はそれを拒否し、法廷に訴訟を起こしました。最終的に、元雇用主が懲戒手続き中に彼のADHD診断を十分に考慮していなかったことが判事によって認定され、彼には4万5000ポンド以上の賠償金が支払われた。
判決は、追加の休憩など、プロセス中の合理的な調整が彼に提供されていなかったと認定した。
彼はマネージャーによって「反省の欠如」を示していると説明されていたが、法廷はそれがADHDに関連する彼のコミュニケーションの違いと明らかに関連していると認定した。
「私はあまり感情を表に出さないんです」とライアンは説明する。 「私は信じられないほど幸せになったり、怒ったり、動揺したり、後悔したりすることがありますが、私の表情や声のトーンは基本的に変わりません。」
法廷は、不当解雇、不当解雇、合理的な調整の不履行に対する彼の主張の一部を認めた。リドル氏は、「全員が成長するために必要な合理的な調整、明確なコミュニケーション、サポートを確実に受けられるように取り組んでいる」と述べた。
運動家、弁護士、人事チームは、このような事件は企業が注意を払うべき変化を浮き彫りにしていると述べている。
過去数年間で何千人もの人々が神経発散型と診断されています。神経発散型は、自閉症、ADHD、および失読症やトゥレット症候群などのその他の症状を含む包括的な用語です。
特にパンデミック以降、ADHDと自閉症の診断率は上昇しており、雇用裁判所の紛争でこれらが頻繁に取り上げられるようになっている。
神経発散者の多くは自分が障害者であるとは考えていませんが、2010 年平等法は、正式な診断の有無に関係なく、その状態を障害として認識することで保護を与える可能性があります。自分の状態が通常の日常活動を行う能力に重大かつ長期的な悪影響を及ぼしていることを証明できれば、彼らは合理的な調整を受ける権利がある。これらは広く定義されており、仕事のタスクに限定されません。
法廷に持ち込まれる訴訟は、雇用主がこうした調整を行わなかったことに関するものである場合もありますが、職場での人々の扱いに関するものである場合もあります。
たとえば、2025年の法廷では、ADHDを持つソフトウェアエンジニアが、マネージャーが彼に対してため息などの「非言語的イライラ」の表現をしたために差別に直面したと認定された。
「法廷で私たちが目にしていることは、意図的な差別の結果であることはほとんどありません」と、人事の専門機関であるチャータード人材開発研究所のダイバーシティとインクルージョンのアドバイザー、ルトフル・アリは言う。
「こうしたケースは一般的に、合理的な調整が見落とされていること、さまざまな思考スタイルを念頭に置いて設計されていないパフォーマンスプロセス、適切な会話をするためのトレーニングや時間が与えられていないために自信を失っているマネージャーに起因しています。」
それでは、ニューロダイバージェンスに対する意識はこれまでにないほど高まっているにもかかわらず、なぜこのような事件が司法制度に巻き込まれることが増えているのでしょうか?そして、企業は従業員のニーズに対応するのに苦労しているのでしょうか?
過剰診断か過小診断か?
アーウィン・ミッチェル法律事務所は英国最大手の法律事務所の一つで、同事務所の弁護士らによると、同事務所の案件には職場の神経発散に関連した苦情が増えているという。
同社は、法務省のオンライン判決データベースを使用して、2020年の265件から増加し、2025年に神経分岐疾患に言及した雇用法廷事件が517件あることを特定した。最もよく挙げられた疾患は自閉症とADHDだった。
ライブ データベースには制限があり、部分的な情報しか提供されません。法務省は、この数字は公式統計とみなされるべきではないとしている。
ADHDと自閉症の診断率は急上昇しており、イギリスではNHSの評価待ちリストが記録的な水準に達しており、一部の地域では膨大な需要によりリストが締め切られているところもある。アーウィン・ミッチェル氏は、こうした長い待ち時間は職場にも影響を与えていると語る。 「余談ですが、正式な診断を受けていない、保険金請求をすると脅したり、実際に保険金請求を行ったりする人がたくさんいます」と、同社の法務ディレクター、ジョー・モーズリー氏は言う。
ユニバーシティ・カレッジ・ロンドンの研究によると、2000年から2018年の間にADHDと診断された英国の成人の数が20倍近く増加したことが示唆されています。2018年の自閉症の診断率は1998年よりも8倍高かった。
このような診断と紹介の増加にもかかわらず、いくつかの研究は、ADHDと自閉症の両方が実際には過少診断されていることを示唆しています。
6月、ランセット・リージョナル・ヘルス・ヨーロッパ誌は、英国では成人の約1.2％がADHDと診断されている一方、国際有病率データでは3～5％の人がADHDに罹患していると推定していることを示唆する研究を発表した。この研究の著者らは、このことは、特に高齢者層では依然として診断が不十分である可能性を示していると述べた。
同様に、キングス・カレッジ・ロンドンによる昨年の研究では、40歳以上の自閉症者の約90％が未診断のままであることが示唆されている。
診断レベルはさておき、コミュニケーションの好み、個人的な組織化、感覚のニーズなど、神経発散型の人々が直面する可能性のある課題に対する認識は大幅に高まっています。職場では、多くの人が「マスキング」と表現します。これは、周囲に溶け込むために自分の特性を隠そうとすることを意味し、その人の幸福に多大な負担をかける可能性があります。
「社会が巻き返しを図っている」と、ニューロダイバージェンスへの理解を深めようと活動する慈善団体「The Hidden 20%」を運営する起業家のベン・ブランソン氏は言う。 2022年に自閉症と診断された。
「成人の神経分岐に対する認識は爆発的に広まりました」と彼は言う。 「しかし、私たちは常にここにいます。私たちはもう隠れていません。そして、何百万人もの人々が、なぜ仕事を変え続けたのか、なぜ自分に合わなかったのか、なぜ燃え尽き続けたのか、そしてなぜそれほど疲れ果てたのかをようやく理解し、沈黙して奮闘する気はもうありません。」
シティ・アンド・ギルド財団の今年のニューロダイバーシティ指数によると、雇用主はインクルージョンに関して「改善している」と考えているが、ニューロダイバージェントな従業員はわずかな改善しか見られていないと述べている。
この研究では、雇用主が自らの「神経発散への対応力」に対する信頼度が平均70～75％であることが判明した。しかし、自分の診断について雇用主に伝えることが心理的に安全であると感じ、組織が自分の状態の影響を理解してくれていると信じていると回答した従業員の割合は、32～38%でした。
目に見えない障害
マネージャーとスタッフの間のこの断絶は、雇用弁護士のジョディ・ヒルがよく知っていることだ。彼女の会社 Thrive Law は職場の福利厚生を専門とし、従業員と企業の両方と協力しています。彼女は 35 歳で ADHD の診断を受けた後、2018 年にこの団体を設立しました。
「過去 3 か月で、これまでに見たことのないほど多くの問い合わせが寄せられました」と彼女は言います。
それでは、一部の雇用主は、彼らに対して取られる措置を成功に導くために何をしているのでしょうか?ヒル氏によると、よく出てくるのは、法的なテストではないのに、上司が正式な診断の証拠を求めてくることだという。もう1つの問題は、雇用主が障害の可能性を考慮する前に、パフォーマンスを理由に従業員を解雇しようとすることです。どちらの場合も、差別の申し立てにさらされる可能性があります。
彼女が企業向けに実施する研修セッションでは、雇用主の視点から、「会話が続くたびにサポートを求める人々について話している」ように感じることがあるという。
コストに対する不安や、1人のスタッフのために何かをするということは、全員のためにやらなければいけないということへの懸念が、一部の雇用主からの「最初の拒絶反応」とヒル氏が表現する事態につながる可能性がある。しかし、それは「内面の目に見えない」葛藤となり得るものに対する理解の欠如から来ている、と彼女は言う。
「雇用主には、症状は非常に直線的であり、すべての症状は毎日同じであるという考えがあります」と彼女は言います。
もう 1 つの課題は、何が「合理的な調整」を構成するのかを判断することであり、最終的に法廷で決定される可能性がある問題点となります。
ヒル氏は、一部の雇用主は「どこから始めればよいのか分からず」、合理的な調整とは従業員の要求に何でも従うことだと誤って思い込んでいると述べた。
いくつかの法廷は、「合理的」の限界を示しています。あるケースでは、自閉症の申立人が、質問の簡素化や試験問題への事前アクセスなど、司法任命委員会（JAC）の採用プロセスに対する広範な変更を要求していた。 JACはすでに友人から追加の時間と援助を申し出たが、追加の要求は拒否していた。法廷に持ち込まれたとき、裁判官は、その人が求めた調整が「明らかに必要または合理的な範囲を超えている」と認定した。
雇用主向けのチェックリストはないが、弁護士らは、雇用主が何かを拒否する理由を正当化し、代替案を検討したことを示さなければならないと強調する。
法律事務所アーウィン・ミッチェルのジョー・モーズリー氏は、何が「合理的」であるかを判断する際、法廷はその人の役割やビジネスの規模などの要素を考慮するだろうと説明する。
「大規模な雇用主は、小規模な雇用主よりも多くのことを行うことが確実に期待されるでしょう」と彼女は言い、会議の構成を検討したり、定期的な休憩を提供したり、静かに仕事ができる場所を提供したりするなど、多くの調整には費用がかからないか、ほとんど費用がかからないことを強調しました。
昨年のある法廷では、パブチェーンのグリーン・キングが、失読症で注文を読むのが苦手なシェフに対して合理的な調整を怠ったと認定された。
彼は Bluetooth ヘッドセットを求めていました。法廷は、会社がこの調整を怠ったことが彼の雇用終了につながったと認定した。彼には24,000ポンドが与えられた。グリーン・キングの広報担当者は、裁判所の決定を尊重し、最高水準の従業員福利厚生を維持することに尽力すると述べた。
「最終的に調整の目的は、パフォーマンスの水準を下げることではなく、パフォーマンスを向上させることです」と産業心理学者のナンシー・ドイル教授は言う。
「雇用主は挑戦することに不安を感じており、間違ったことを言ったり、間違ったことをしたりすることに不安を感じています」と彼女は付け加えた。
彼女の説明によると、雇用主は、安全を危険にさらしたり、同僚よりも成果が低い人を仕事に就かせることは期待されていないが、職場によっては、管理者が「神経質なスタッフをカバー」することになり、その人たちが「優しさに依存しており、時間の経過とともに弱まる可能性がある」状況に陥っていると説明する。
窓ガラス事業「Structura」を経営するダニエル・リックマン氏は、個人が調整を求めるのを待つのではなく、すべてのスタッフに調整を提案することにした。
同社は、柔軟な働き方、会議室のそわそわおもちゃ、デスク上の赤または緑の「ビジー ライト」を導入し、スタッフが邪魔されても良いかどうかを示すことができるようにしました。
これは、ビジネスが「全員の能力を最大限に引き出し」ており、熟練したスタッフを維持していることを意味すると彼は言う。しかし、この話題をめぐる二極化を示し、「目が覚めた」という批判も受けていると彼は言う。
ニューロダイバーシティに対する意識が高まるにつれ、マイクロソフトや BAE システムズなどの一部の企業は、ニューロダイバーシティの候補者が組織にもたらすことができるスキルを認識して、ニューロダイバーシティの候補者を引き付けるために的を絞った採用プログラムを作成しました。
「きちんとした箱に収まる人はいない」
アマンダ・カービー教授は、神経多様性を職場の設計方法の一部にすることが必要だと信じています。
彼女は、神経多様性のある人々の雇用機会の改善を検討するために設立された政府の専門家委員会のトップを務めており、調整を提供する「医療」モデルは不十分だと述べている。
「きちんとした枠にはまる人はいない」と彼女は言い、失読症には×、ADHDには○を行うことに重点を置いたトレーニングは「決してうまくいかない」と付け加えた。
「こちらは神経多様性、こちらはメンタルヘルス、あっちは失業ではありません」と彼女は言い、雇用、教育、訓練を受けていない人、司法制度を通過している人は診断を受ける可能性が低く、神経多様である可能性が高いと指摘した。
カービー氏の報告書はまだ公表されていないが、パンデミック前よりも依然として高い経済不活動の頑固なレベルに対処するための政府の広範な計画の一環である。
2024年の政府報告書では、自閉症の卒業生は障害のない卒業生に比べて15カ月後に失業する可能性が2倍高いことが判明し、昨年、政府のADHD対策本部は「支援を受けていない」ADHDが経済に年間170億ポンドの損失を与えていると推定した。
最新の公式統計によると、個人自立給付金を受け取っている人の数は400万人を超え、ADHDを主な疾患とする人の数は4月時点で約10万人で、過去2年間で3万人増加した。このうち半数強が16歳から24歳でした。
政府は雇用水準の問題に対処するため、障害者や健康状態にある人々に対する個別の雇用支援に35億ポンドを投資している。
InDepthのその他の作品
英国が電動スクーターをどうするかで迷っている理由
- 2 日前に公開
アンディ・バーナムがイギリスを統一するのが難しい理由
- 4 日前に公開
夜勤の隠れたコストとそれを睡眠で補う方法
- 6 日前に公開
労働年金省の広報担当者はBBCに対し、「あまりにも長い間、障害者や神経多様性に問題のある人々は置き去りにされ、無視され、仕事に就くために必要な支援も受けられなかった」と語った。
費用がかかるだけでなく、英国の法廷制度が軋むにつれて、これらの法廷での主張はますます引き延ばされるようになっている。
法務省の統計によると、未処理の請求件数は53万1,000件と過去最高を記録した。
トーマス・マンスフィールド・ソリシターズのパートナーで雇用法専門家のジェナ・アイド氏は、受注残が雇用主にプレッシャーを与えていると語る。
「訴訟が最終審問に至るまでには数年かかることもあります」と彼女は言う。 「その一方で、雇用主は裁判所が最終的にどこに線を引くのか分からないまま、難しい判断を迫られることが多い」と彼女は付け加えた。
法律事務所らによると、一部の法廷は現在、2030年に向けてリストに掲載されており、雇用権利法により未処理件数はさらに増加すると予想されている。これにより、2027年1月からは2年後ではなく6か月後に不当解雇に対する労働者保護が与えられることになる。
アーウィン・ミッチェル社のジョー・モーズリー氏は、「多くの人は、たとえ保守的であっても、不当解雇の主張だけでも大規模な爆発が起こるだろうと考えている」と語る。
カービー氏によれば、この未処理は司法へのアクセスという点で問題を引き起こす可能性があるだけでなく、法廷の数の増加が別の厄介な影響をもたらす可能性があるという。
「雇用主の中には、『この人たち』は私たちに多くの問題を引き起こす可能性があると考える人もいるでしょう」と彼女は言い、これが採用における「隠れたバイアス」につながる可能性があると付け加えた。つまり、雇用主は、神経発散性があると信じている人を採用するのはリスクが高すぎると考え、そのため他の人に仕事を与える理由を見つけるのである。
健康不良のためリドルを退職して以来仕事をしていないというライアン・トギルさんは、自身の経験から将来の雇用主に自分の診断について話すかどうかで迷っていると語る。
しかし、課題はあるものの、職場の変化がやがて「企業全体に浸透」することを同氏は望んでいる。
「神経発散性の人々の場合は、異なる方法で管理する必要があります」と彼は言います。 「少し適応すれば、それらの利点を最大限に引き出すことができます。」
リード画像: Getty
BBC InDepth は、思い込みに疑問を投げかける新鮮な視点と、その日の最大の問題についての深いレポートを提供する、最高の分析を提供する Web サイトとアプリです。エマ・バーネットとジョン・シンプソンが、毎週土曜日に、最も示唆に富んだ深い読み物と分析を厳選して紹介します。ニュースレターへの登録はこちらから
連絡する
この話で提起された問題によってあなたは個人的に影響を受けていますか?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c70gq125xweo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-24T23:23:53+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e35e/live/f25d0fd0-8773-11f1-b8ee-9b3c26ad07bb.jpg",
    readTime: 10,
  },
  {
    id: "uber-and-waymo-to-end-exclusivity-arrang-01a22f4a",
    title: "Uber and Waymo to end exclusivity arrangement in Atlanta and Austin",
    titleJa: "ウーバーとウェイモ、アトランタとオースティンでの独占契約を終了へ",
    summaryJa: "過去 3 年間、ウーバーとアルファベット傘下のウェイモは提携して、米国の 2 つの主要市場で乗客に自動運転車を提供してきました。その関係は今、少し変化しつつあります。これまでウェイモは、アトランタとテキサス州オースティンでのみ、ウーバーアプリを通じてロボタクシーを利用できるようにしてきた。しかし、ウーバーの広報担当者は金曜日、CNBCに電子メールで「ウェイモから、ウーバーとの既存の展開と並行して、2028年1月にオースティンとアトランタでウェイモアプリを開始する予定であると通知を受けた」と語った。",
    bodyOriginal: `For the past three years, Uber and Alphabet-owned Waymo have partnered to bring driverless rides to passengers in two major U.S. markets. That relationship is now undergoing some changes.
To this point, Waymo has made its robotaxis available in Atlanta and Austin, Texas, exclusively through the Uber app. But an Uber spokesperson told CNBC by email on Friday that, "We have been notified by Waymo that they intend to launch the Waymo app in Austin and Atlanta in January 2028, alongside their existing deployment with Uber."
The development reflects how Waymo has been able to attract riders in a number U.S. cities without exclusive Uber deals, as its robotaxis are now live in nine other markets, according to the company's website. More cities are engaged in various stages of testing.
Last year, Waymo also struck a deal with Lyft to offer robotoaxi rides in Nashville, Tennessee, on a non-exclusive basis.
In Atlanta and Austin, hundreds of Waymo robotaxis will remain available on Uber through at least May 2028, the duration of their existing contract, Uber said. The changes ahead allow the ride-hailing company to put other, non-Waymo autonomous vehicles onto its platform in both cities.
A Waymo spokesperson said in an email that users need "choice in how they experience this technology."
"This is essential to the industry's future and to our vision of making the Waymo app and the safety of our technology available to riders everywhere," the spokesperson wrote.
The Financial Times reported on Friday that Waymo held internal discussions about whether it should split from Uber due to tensions between the two companies, including around conflicting policy proposals the companies are pursuing in different U.S. markets.
Uber shares dropped more than 4% on the news.
Independent of Waymo, Uber has been investing in AV technology, and has committed to buying vehicles from some of its partners, including startups Waabi, Wayve and Nuro, as well as electric vehicle maker Rivian, after their self-driving cars are validated as safe to operate without a human supervisor or driver on board.
Tesla, Amazon's Zoox and other AV developers are also offering standalone apps that allow riders to hail robotaxis.
-- CNBC's Laura Batchelor contributed to this report.
WATCH: Waymo and Uber partnership`,
    bodyJa: `過去 3 年間、ウーバーとアルファベット傘下のウェイモは提携して、米国の 2 つの主要市場で乗客に自動運転車を提供してきました。その関係は今、少し変化しつつあります。
これまでウェイモは、アトランタとテキサス州オースティンでのみ、ウーバーアプリを通じてロボタクシーを利用できるようにしてきた。しかし、ウーバーの広報担当者は金曜日、CNBCに電子メールで「ウェイモから、ウーバーとの既存の展開と並行して、2028年1月にオースティンとアトランタでウェイモアプリを開始する予定であると通知を受けた」と語った。
同社のウェブサイトによると、ウェイモのロボタクシーは現在他の9つの市場で稼働しているため、この開発はウェイモがウーバーとの独占契約なしに米国の多くの都市でどのようにして乗客を引きつけることができたかを反映しているという。さまざまな段階のテストに取り組んでいる都市が増えています。
昨年、ウェイモはテネシー州ナッシュビルでロボットタクシーの乗車を非独占的に提供する契約をリフトと結んだ。
Uberによると、アトランタとオースティンでは、数百台のWaymoロボタクシーが少なくとも既存の契約期間である2028年5月までUberで利用できるようになるという。今後の変更により、配車会社は両都市でウェイモ以外の他の自動運転車を自社のプラットフォームに導入できるようになる。
Waymoの広報担当者は電子メールで、ユーザーには「このテクノロジーをどのように体験するかについての選択」が必要だと述べた。
「これは業界の将来にとって、そしてWaymoアプリと当社のテクノロジーの安全性をどこのライダーでも利用できるようにするという当社のビジョンにとって不可欠です」と広報担当者は書いている。
フィナンシャル・タイムズ紙は金曜日、両社が米国の異なる市場で進めている政策提案の矛盾を巡る問題など、両社間の緊張を理由にウェイモがウーバーから分離すべきかどうかについて内部協議を行ったと報じた。
このニュースを受けてウーバー株は４％以上下落した。
Waymoとは独立して、UberはAV技術に投資しており、自動運転車が人間の監督者や運転手が同乗していなくても安全に運転できることが検証された後、スタートアップ企業のWaabi、Wayve、Nuroや電気自動車メーカーのRivianを含む一部のパートナーから車両を購入することを約束している。
Tesla、Amazon の Zoox、その他の AV 開発者も、乗客がロボタクシーを配車できるスタンドアロン アプリを提供しています。
-- CNBC のローラ・バチェラー氏がこのレポートに寄稿しました。
注目: Waymo と Uber のパートナーシップ`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/uber-and-waymo-to-end-exclusivity-arrangement-in-atlanta-and-austin.html",
    publishedAt: "2026-07-24T21:48:45+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "would-you-take-65-000-today-or-flip-a-co-99581ea9",
    title: "Would you take $65,000 today, or flip a coin for a chance to win $1.3 million?",
    titleJa: "今日 65,000 ドルを受け取りますか、それともコインを投げて 130 万ドルを獲得するチャンスがありますか?",
    summaryJa: "このウイルスに関する世論調査の質問に対するあなたの答えは、あなたの財政状態について多くを物語っているでしょう。",
    bodyOriginal: `Your answer to this viral poll question probably says a lot about the state of your finances.`,
    bodyJa: `このウイルスに関する世論調査の質問に対するあなたの答えは、あなたの財政状態について多くを物語っているでしょう。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/would-you-take-65-000-today-or-flip-a-coin-for-a-chance-to-win-1-3-million-d134961a?mod=mw_rss_topstories",
    publishedAt: "2026-07-24T21:48:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-16415548",
    readTime: 2,
  },
  {
    id: "i-will-definitely-claim-social-security-2beb83de",
    title: "I will definitely claim Social Security early. Why do so few people talk about the elephant in the room?",
    titleJa: "私は必ず早めに社会保障を請求します。なぜ部屋の中でゾウについて話す人がこれほど少ないのでしょうか?",
    summaryJa: "「早期に利益を主張するための最も強力な議論は、従来の損益分岐点分析を超えています。」",
    bodyOriginal: `“The strongest argument for claiming benefits earlier goes beyond the traditional break-even analyses.”`,
    bodyJa: `「早期に利益を主張するための最も強力な議論は、従来の損益分岐点分析を超えています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-will-claim-social-security-early-why-do-so-few-people-talk-about-the-elephant-in-the-room-64820675?mod=mw_rss_topstories",
    publishedAt: "2026-07-24T21:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-36497516",
    readTime: 2,
  },
  {
    id: "paramount-agrees-to-delay-wbd-acquisitio-3123a7b3",
    title: "Paramount agrees to delay WBD acquisition to as late as June 2027 amid legal challenge",
    titleJa: "パラマウントは法的異議申し立てを受けてWBD買収を最長2027年6月まで延期することに同意",
    summaryJa: "パラマウント・スカイダンスは、提携が法的な問題に直面しているため、ワーナー・ブラザース・ディスカバリーの買収計画を2027年6月まで延期することに同意した。数か月の延期となり、最終的には買収価格が上昇することになる。先週、カリフォルニア州のロブ・ボンタ氏率いる州司法長官のグループが独占禁止法上の懸念を理由にこの取引の差し止めを求めて訴訟を起こした。月曜日、この事件を審査する裁判官は一時的な差し止め命令を出し、短期的な延期が決定された。",
    bodyOriginal: `Paramount Skydance has agreed to delay its proposed acquisition of Warner Bros. Discovery to as late as June 2027 — a multi-month delay that will ultimately raise the deal price — as the tie-up faces a legal challenge.
Last week, a group of state attorneys general led by California's Rob Bonta sued to block the deal over antitrust concerns. On Monday, a judge reviewing the case issued a temporary restraining order, delivering a near-term delay.
Paramount had repeatedly said it intended to complete the transaction by the end of September. The agreement announced Friday says Paramount won't complete its acquisition until the court rules on the states' claims or until June 1, 2027, whichever comes first.
In a statement Friday, Paramount called the agreement a "significant win."
"The result is exactly what we have sought from the outset: a direct path to a trial based on the evidence. This is the fastest and clearest way to prove that this transaction is good for competition, good for consumers, and good for creators, a conclusion dozens of competition authorities around the world have already reached," the company said. "Plaintiffs' market definitions bear no relationship to the realities of today's marketplace and cannot withstand scrutiny. We look forward to proving our case at trial."
Shares of Paramount Skydance fell 3% in afternoon trading Friday.
Under the terms of its agreement, Paramount will owe Warner Bros. Discovery shareholders a "ticking fee" the longer the deal is delayed, starting Sept. 30.
The fee, an additional 25 cents per share, per quarter until closing, could amount to roughly $650 million in cash value every quarter. A delay as long as June 2027 could add roughly $1.7 billion to the deal price.
Should the deal fall apart entirely, Paramount would owe WBD a $7 billion breakup fee.
Paramount and WBD agreed to combine in February after the David Ellison-led company outbid Netflix. The $110 billion deal would bring together two major Hollywood studios, two popular streaming services and a host of TV networks.
In June, the antitrust division of the U.S. Department of Justice cleared the proposed merger. Earlier this week, European antitrust regulators likewise granted their approval for the deal.
But U.S. state officials have raised concerns that the tie-up would reduce competition and result in job losses in the film industry.
"Our argument against this illegal merger is straightforward: When too few corporations have too much power in markets central to American life, it makes things more expensive, and it makes things worse," Bonta said in a statement Friday. "Today's agreement is great news for audiences, movie theaters, and the many people who write, build, and create the art, news, and entertainment so many of us enjoy. We are eager to continue to make our case in court and celebrate another tremendous win in our effort to ensure this unlawful merger never sees the light of day."`,
    bodyJa: `パラマウント・スカイダンスは、提携が法的な問題に直面しているため、ワーナー・ブラザース・ディスカバリーの買収計画を2027年6月まで延期することに同意した。数か月の延期となり、最終的には買収価格が上昇することになる。
先週、カリフォルニア州のロブ・ボンタ氏率いる州司法長官のグループが独占禁止法上の懸念を理由にこの取引の差し止めを求めて訴訟を起こした。月曜日、この事件を審査する裁判官は一時的な差し止め命令を出し、短期的な延期が決定された。
パラマウントは9月末までに取引を完了するつもりだと繰り返し述べていた。金曜日に発表された合意書では、パラマウントは各州の主張について裁判所が判決を下すか、2027年6月1日のいずれか早い方まで買収を完了しないとしている。
パラマウントは金曜日の声明で、この合意を「重大な勝利」と呼んだ。
「結果はまさに我々が当初から求めていたもの、つまり証拠に基づく裁判への直接の道である。これはこの取引が競争にとって、消費者にとって、そしてクリエイターにとって有益であることを証明する最も早くて明確な方法であり、世界中の数十の競争当局がすでに結論に達している」と同社は述べた。 「原告らの市場定義は今日の市場の現実とは無関係であり、精査に耐えることはできない。我々は裁判で自分たちの主張を証明することを楽しみにしている。」
パラマウント・スカイダンスの株価は金曜午後の取引で３％下落した。
合意条件に基づき、パラマウントはワーナー・ブラザース・ディスカバリーの株主に対し、9月30日から取引が遅れれば遅れるほど「ティッキングフィー」を支払う義務がある。
この手数料は、クロージングまで四半期ごとに1株あたり25セント追加され、四半期ごとに現金換算で約6億5000万ドルに達する可能性がある。 2027年6月まで延期された場合、取引価格は約17億ドル増加する可能性がある。
契約が完全に決裂した場合、パラマウントはWBDに対し70億ドルの違約金を支払う義務がある。
パラマウントとWBDは、デビッド・エリソン率いる会社がネットフリックスを上回ったことを受け、2月に統合することで合意した。 1100億ドルの契約により、ハリウッドの大手スタジオ2社、人気のストリーミングサービス2社、多数のテレビネットワークが結集することになる。
6月に米国司法省の反トラスト部門は合併案を認可した。今週初め、欧州の独占禁止規制当局も同様にこの取引を承認した。
しかし、米国の州当局者らは、提携によって競争が減少し、映画業界の雇用喪失につながるのではないかと懸念を表明している。
ボンタ氏は金曜日の声明文で、「この違法な合併に対する我々の主張は単純明快だ。アメリカの生活の中心となる市場であまりにも多くの影響力を持つ企業が少なすぎると、物事の価格が高くなり、状況がさらに悪化する」と述べた。 「今日の合意は、観客、映画館、そして私たちの多くが楽しんでいる芸術、ニュース、エンターテインメントを書き、構築し、創造する多くの人々にとって素晴らしいニュースです。私たちは引き続き法廷で主張し、この違法な合併が決して日の目を見ないようにする取り組みでの新たな大きな勝利を祝いたいと思っています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/paramount-wbd-merger-delay.html",
    publishedAt: "2026-07-24T21:24:09+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "trump-threatens-eu-with-substantial-tari-0825ddd6",
    title: "Trump threatens EU with 'substantial TARIFF' for 'ROBBING' U.S. tech giants",
    titleJa: "トランプ大統領、米国の巨大テクノロジー企業を「強奪」するための「大幅な関税」でEUを脅す",
    summaryJa: "トランプ大統領は「Truth Social」で、Googleに対する欧州連合の新たな罰金と、米国のハイテク大手アップル、メタ、アマゾンに対する以前の罰金を激しく非難した。",
    bodyOriginal: `President Donald Trump on Friday said his administration will launch a trade probe into the European Union that will cancel hefty fines levied against U.S. tech giants and likely result in a "substantial" tariff on the 27-member bloc.
Trump, in a lengthy Truth Social post, accused the EU of "'ROBBING' American Companies and, in turn, the American Taxpayer" as he raged over its recent $1 billion fine on Google for allegedly giving search priority to its own services.
"The European Union is at it again and, as usual, taking direct aim at GREAT American Companies!" Trump wrote in the post, which also railed against prior European fines against Apple, Meta and Amazon.
Trump claimed the latest penalty against Google was issued "without explanation." But the European Commission, the EU's executive branch, said in a press release Wednesday that the fines totaling 890 million euros were due to Google's alleged noncompliance with the bloc's Digital Markets Act, which aims to scrutinize Big Tech's practices.
Trump claimed the EU's behavior is "not going to continue during the Trump Administration."
"The United States of America is not a 'PIGGYBANK' for Europe, nor will we allow it to be!" he wrote.
Trump said the U.S. will "immediately" start an investigation under Section 301 of the Trade Act of 1974, which permits the imposition of tariffs in response to practices that are found to unfairly burden U.S. commerce.
The Trump administration has launched multiple probes using that tariff authority. Hours earlier, it imposed new duties between 10% and 12.5% on goods from more than 80 countries, including those in the EU, over alleged forced labor issues.
By Friday afternoon, a lawsuit challenging those tariffs had been filed in the U.S. Court of International Trade.
The suit, brought by the Liberty Justice Center on behalf of two small businesses, argues the federal government is improperly using Section 301 to effectively reinstate Trump's 2025 "liberation day" tariffs, which were the Supreme Court struck down earlier this year.
"The European Union will pay a very big price for this illegal and highly unethical conduct, which I have consistently warned them about," Trump said in Friday's post, referring to its posture toward U.S. tech companies.
"The penalties will be entirely reversed and, we anticipate, a substantial TARIFF to be placed on them at the earliest possible moment," he wrote, adding, "Stay tuned!"`,
    bodyJa: `ドナルド・トランプ大統領は金曜日、政権が欧州連合（EU）に対する通商調査を開始し、米国のハイテク大手に課せられた高額の罰金を取り消し、加盟27カ国に対して「大幅な」関税を課す可能性が高いと述べた。
トランプ大統領は、Truth Socialへの長い投稿で、検索を自社サービスに優先させたとしてGoogleに最近課せられた10億ドルの罰金に激怒し、EUが「米国企業を『強奪』し、ひいては米国納税者を『強奪』している」と非難した。
「欧州連合はまたもや、いつものように偉大なアメリカ企業を直接狙っている！」トランプ大統領はその投稿で、アップル、メタ、アマゾンに対する欧州の過去の罰金も激しく非難した。
トランプ大統領は、グーグルに対する最新の罰金は「説明なしに」与えられたと主張した。しかし、EUの行政府である欧州委員会は水曜日のプレスリリースで、総額8億9,000万ユーロの罰金は、ビッグテック企業の慣行を精査することを目的としたEUのデジタル市場法にGoogleが違反した疑いによるものであると述べた。
トランプ大統領は、EUの行動は「トランプ政権の間は継続しない」と主張した。
「アメリカ合衆国はヨーロッパにとっての『貯金箱』ではないし、我々もそんなことを許さない！」彼は書いた。
トランプ大統領は、米国の通商に不当な負担を与えていると認められる慣行に応じて関税を課すことを認めた1974年通商法第301条に基づき、米国は「直ちに」調査を開始すると述べた。
トランプ政権はその関税権限を利用して複数の調査を開始した。その数時間前、強制労働問題の疑いを理由にEU加盟国を含む80カ国以上の商品に10～12.5％の新たな関税を課した。
金曜午後までに、これらの関税に異議を唱える訴訟が米国国際貿易裁判所に起こされた。
中小企業2社を代表してリバティ・ジャスティス・センターが起こしたこの訴訟は、連邦政府が第301条を不当に利用して、今年初めに最高裁判所が無効としたトランプ大統領の2025年の「解放の日」関税を事実上復活させていると主張している。
トランプ大統領は金曜の投稿で、米国のハイテク企業に対する欧州連合の姿勢に言及し、「欧州連合はこの違法かつ非常に非倫理的な行為に対して非常に大きな代償を払うことになるだろう。私はこれについて一貫して警告してきた」と述べた。
同氏は「罰則は完全に撤回され、可能な限り早い時期に大幅な関税が課されると予想される」と書き、「期待してください！」と付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/trump-tariffs-eu-trade-google-apple-tech.html",
    publishedAt: "2026-07-24T19:39:50+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "the-world-is-facing-its-largest-oil-shoc-435c6f15",
    title: "The world is facing its largest oil shock ever. Here is why prices are not higher.",
    titleJa: "世界は史上最大のオイルショックに直面している。価格が上がらない理由はここにあります。",
    summaryJa: "原油価格は、エコノミストらが世界経済を景気後退の危機にさらすと指摘していた水準にはまだ近づいていない。",
    bodyOriginal: `Oil prices aren’t yet near the level economists had said would put the global economy in jeopardy of a recession.`,
    bodyJa: `原油価格は、エコノミストらが世界経済を景気後退の危機にさらすと指摘していた水準にはまだ近づいていない。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-world-is-facing-its-largest-oil-shock-ever-here-is-why-prices-are-not-higher-0bb943c7?mod=mw_rss_topstories",
    publishedAt: "2026-07-24T19:31:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-34645200",
    readTime: 2,
  },
  {
    id: "oil-falls-on-report-pakistan-is-pushing-ec84ebe8",
    title: "Oil falls on report Pakistan is pushing for new U.S.-Iran talks with China's backing",
    titleJa: "パキスタンが中国の支援を受けて新たな米イラン協議を推進しているとの報道で原油下落",
    summaryJa: "金曜日、パキスタンが米国とイランの交渉再開方法を模索しているとの報道を受け、原油価格が下落した。国際指標であるブレント原油先物は４％近く下落し、１バレル＝９６．７８ドルで取引を終えた。米国ウェスト・テキサス・インターミディエイト原油先物は３％下落し、１バレル＝８９．３１ドルで落ち着いた。",
    bodyOriginal: `Oil prices dropped Friday on a report that Pakistan is looking for a way to restart talks between the U.S. and Iran.
Brent crude futures, the international benchmark, fell nearly 4% to close at $96.78 a barrel. U.S. West Texas Intermediate crude futures lost 3% to settle at $89.31 per barrel.
Three sources told Reuters that Pakistan's effort to renew U.S.-Iran talks was backed by China.
"The Chinese are unhappy because Iran's attacks on other Gulf states and the closure of the Strait of Hormuz are hitting their interests," a Pakistani government official told Reuters.
U.S. crude oil gained about 8% this week and Brent advanced nearly 10% as fighting in the Middle East has sharply escalated.
Overnight, the U.S. Central Command completed its 13th consecutive night of strikes on Iran, targeting military command centers, drone storage facilities, communication networks, coastal surveillance sites, and maritime capabilities.
Centcom said the strikes were intended to "further diminish the threat Iran poses to civilian mariners and commercial vessels transiting the Strait of Hormuz."
"The international waterway remains open for transit despite recent attacks from Iran's Islamic Revolutionary Guard Corps. Commercial vessels continue to freely navigate the strait with U.S. military support," the military unit said in a statement.
"More than 50,000 U.S. service members are currently operating across the Middle East."
U.S. President Donald Trump told Axios on Thursday that he was mulling a "massive attack" on Iran after the conflict in the Middle East extended to a new battleground in the Red Sea. The president said the proposed strikes would be bigger than anything seen in the war so far, and that Iran has not "received enough pain yet."
"I am considering a massive attack. Bigger than ever before. I am close to making a decision. We are all set for it," he said in the interview.
It came after Trump said he would hold Iran responsible for further attacks by Yemen's Tehran-backed Houthis, after the militant group claimed to have struck two Saudi Arabian oil tankers in the Red Sea.
"If they do this again, the U.S. will hold Iran responsible, in that the Houthis are a Surrogate and/or Proxy of Iran, and major military punishment will be inflicted upon Iran and, of course, the Houthis, themselves," he said in a Truth Social post.
Iran's Revolutionary Guard said Thursday that it had attacked U.S. military facilities at an American base in Jordan, according to state media.
Speaking to reporters on Thursday, U.S. Secretary of State Marco Rubio labeled Trump's approach to the Iran war as "a head for an eye."
In a Friday morning note, Daniela Hathorn, senior market analyst at capital.com, said growing instability around key shipping routes had rebuilt a "sizeable geopolitical risk premium" into oil markets.
"Investor sentiment has been dampened by continued disruption in the Red Sea, where attacks on commercial vessels have compounded concerns over global trade and energy security," she said. "Combined with tensions around the Strait of Hormuz, the developments have reinforced the view that geopolitical risks are unlikely to fade anytime soon, keeping energy markets tight and inflation risks elevated."
Meanwhile, Giovanni Staunovo, a strategist at UBS Global Wealth Management, said in a Thursday note that markets may be overestimating the oil market's recovery from the conflict.
"We continue to expect the production recovery process in the Middle East to be slower than the market anticipates, as it requires an increase in inbound vessels," he said. "With the conflict resuming, those flows remain depressed. This should keep the oil market tight and prices supported."
UBS sees Brent crude falling to $85 a barrel by the end of the year.`,
    bodyJa: `金曜日、パキスタンが米国とイランの交渉再開方法を模索しているとの報道を受け、原油価格が下落した。
国際指標であるブレント原油先物は４％近く下落し、１バレル＝９６．７８ドルで取引を終えた。米国ウェスト・テキサス・インターミディエイト原油先物は３％下落し、１バレル＝８９．３１ドルで落ち着いた。
関係筋３人はロイターに対し、米国・イラン協議再開に向けたパキスタンの取り組みは中国の支援を受けていると語った。
パキスタン政府当局者はロイターに対し、「イランによる他の湾岸諸国への攻撃やホルムズ海峡閉鎖が中国の利益に打撃を与えているため、中国人は不満を抱いている」と語った。
中東での戦闘が急激に激化する中、米国産原油は今週約８％上昇し、ブレント原油は１０％近く上昇した。
米中央軍は一夜にして、軍司令部、ドローン保管施設、通信ネットワーク、沿岸監視拠点、海洋能力を標的とした13夜連続のイラン攻撃を完了した。
セントコムは、今回の攻撃は「ホルムズ海峡を通過する民間船員や商船に対するイランの脅威をさらに軽減する」ことを目的としていると述べた。
同軍部隊は声明で「イラン・イスラム革命防衛隊による最近の攻撃にも関わらず、国際水路は依然として通航可能である。商船は米軍の支援を受けて海峡を自由に航行し続けている」と述べた。
「現在、5万人以上の米軍人が中東全域で活動している。」
ドナルド・トランプ米大統領は木曜日、アクシオスに対し、中東の紛争が紅海の新たな戦場にまで拡大したことを受け、イランへの「大規模攻撃」を検討していると語った。大統領は、提案されている攻撃はこれまでの戦争で見られたものよりも大規模なものになるとし、イランは「まだ十分な苦痛を受けていない」と述べた。
同氏はインタビューで「大規模な攻撃を検討している。これまでよりも大規模だ。決断に近づいている。準備は整っている」と語った。
これは、イエメンのテヘランが支援するフーシ派が紅海でサウジアラビアの石油タンカー２隻を攻撃したと主張したことを受け、トランプ大統領がイエメンのテヘラン支援のフーシ派によるさらなる攻撃の責任をイランに問うと述べた後の出来事だった。
同氏はトゥルース・ソーシャルへの投稿で、「もし彼らが再び同じことをすれば、米国はイランの責任を問うだろう。フーシ派はイランの代理および／または代理人であるという点で、イランと、もちろんフーシ派自身に重大な軍事的懲罰が科されることになるだろう」と述べた。
国営メディアによると、イラン革命防衛隊は木曜日、ヨルダンの米軍基地にある米軍施設を攻撃したと発表した。
マルコ・ルビオ米国務長官は木曜日、記者団に対し、イラン戦争に対するトランプ大統領のアプローチを「目には頭を」と非難した。
キャピタル・ドット・コムのシニア市場アナリスト、ダニエラ・ハソーン氏は金曜朝のメモで、主要輸送ルートを巡る不安定性の高まりにより、石油市場に「相当な地政学的リスクプレミアム」が再構築されていると述べた。
同氏は「紅海での混乱が続いていることで投資家心理が冷え込んでおり、商業船への攻撃で世界貿易とエネルギー安全保障への懸念がさらに高まっている」と述べた。 「ホルムズ海峡周辺の緊張と相まって、この展開は地政学的リスクがすぐに薄れる可能性は低く、エネルギー市場は逼迫し、インフレリスクは高止まりするとの見方を強めている。」
一方、ＵＢＳグローバル・ウェルス・マネジメントのストラテジスト、ジョバンニ・スタウノヴォ氏は木曜日のメモで、市場は紛争からの原油市場の回復を過大評価している可能性があると述べた。
同氏は「中東での生産回復プロセスは市場の予想よりも遅いと引き続き予想している。輸入船の増加が必要だからだ」と述べた。 「紛争の再開により、これらの原油の流れは依然として低迷している。これにより原油市場は引き締まり、価格は下支えされるだろう。」
ＵＢＳはブレント原油が年末までに１バレル＝８５ドルまで下落すると予想している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/oil-price-trump-hormuz-red-sea-iran-war.html",
    publishedAt: "2026-07-24T19:12:09+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "trump-vows-to-investigate-eu-over-fining-23bb56a2",
    title: "Trump vows to investigate EU over fining of US tech companies",
    titleJa: "トランプ大統領、米国ハイテク企業への罰金を巡りEUを調査すると誓う",
    summaryJa: "トランプ大統領、米国ハイテク企業への罰金を巡りEUを調査すると誓う- 公開されました",
    bodyOriginal: `Trump vows to investigate EU over fining of US tech companies
- Published
Donald Trump says the US will launch an investigation into the European Union and threatened a fresh tariff over fines handed to some of the biggest American tech companies.
It comes days after the European Commission fined Google €890m ($1bn) for operating in a way that squeezed out competitors to its services.
In a post to Truth Social, which Trump owns, the US president said the EU would pay a "very big price" over how it had treated Google, along with other major US tech companies Apple, Meta, and Amazon, which have also been investigated.
"The United States of America is not a "PIGGYBANK" for Europe, nor will we allow it to be!" he wrote.
Trump said any fines should be "entirely reversed" and that he was initiating a trade investigation of the EU while considering "a substantial TARIFF".
He added that the US would "immediately initiate a 301 investigation" over European regulators' alleged practice of "robbing American companies and, in turn, the American taxpayer".
Section 301 of the Trade Act of 1974, external gives The Office of the United States Trade Representative the power to react and investigate trade practices believed to be unfair. The second Trump Administration has launched several such investigations, external since last year.
The tariff threat comes just one day after Trump announced new tariffs on 60 trading partners, including the EU, UK and China, of between 10% and 12.5%.
José Castañeda, a spokesman for Google, told the BBC the company had "worked hard to comply" with Europe's Digital Markets Act but had "expressed our concerns about the impact of recent EC decisions".
"We appreciate the engagement by the administration and US government," Castañeda added.
In addition to the recent fine against Google, Trump claimed in his post that Apple had received EU fines of $15bn, Meta fines of $3bn, and Amazon fines of $2.5bn.
Representatives of Meta, Apple and Amazon, as well as the European Commission, have been contacted for comment.
Shortly before Trump was elected president in 2024, he said Tim Cook, Apple's chief executive, had called him directly to complain about fines the company had received from European regulators.
The call came not long after Apple lost a long-running dispute over unpaid taxes.
Related topics
- Published20 hours ago`,
    bodyJa: `トランプ大統領、米国ハイテク企業への罰金を巡りEUを調査すると誓う
- 公開されました
ドナルド・トランプ大統領は、米国が欧州連合（EU）に対する調査を開始すると述べ、米国最大手のテクノロジー企業の一部に科せられた罰金を巡り新たな関税を課すと脅した。
これは、サービスの競合他社を締め出すような運営を行ったとして、欧州委員会がグーグルに8億9000万ユーロ（10億ドル）の罰金を科した数日後のことだった。
トランプ大統領は、トランプ氏が経営するトゥルース・ソーシャルへの投稿で、グーグルのほか、同様に捜査を受けている他の米大手ハイテク企業アップル、メタ、アマゾンに対する扱いをめぐって、ＥＵは「非常に大きな代償」を支払うことになるだろうと述べた。
「アメリカ合衆国はヨーロッパにとっての『貯金箱』ではないし、我々もそんなことを許さない！」彼は書いた。
トランプ大統領は、いかなる罰金も「完全に撤回」されるべきであり、「大幅な関税」を検討しながらEUの通商調査を開始していると述べた。
同氏は、欧州規制当局が「米国企業、そしてひいては米国納税者を強奪する」行為を行ったとされる行為について、米国は「直ちに301調査を開始する」と付け加えた。
1974 年の通商法第 301 条は、米国通商代表部に、不公平と思われる貿易慣行に対応し、調査する権限を外部に与えています。第2次トランプ政権は昨年以来、こうした調査を対外的に複数開始している。
この関税の脅威は、トランプ大統領がEU、英国、中国を含む60の貿易相手国に対して10％から12.5％の新たな関税を課すと発表したわずか1日後に起きた。
Googleの広報担当ホセ・カスタニェダ氏はBBCに対し、同社は欧州のデジタル市場法を「順守するために懸命に取り組んできた」ものの、「最近のECの決定が及ぼす影響について懸念を表明した」と語った。
カスタニェダ氏は「政府と米国政府の関与に感謝する」と付け加えた。
Googleに対する最近の罰金に加え、トランプ大統領は投稿の中で、AppleがEUから150億ドル、メタから30億ドル、アマゾンから25億ドルの罰金を受け取ったと主張した。
Meta、Apple、Amazonの代表者と欧州委員会はコメントを求められている。
トランプ氏が2024年に大統領に選出される直前、アップルのティム・クック最高経営責任者（CEO）からトランプ氏に直接電話があり、同社が欧州規制当局から受け取った罰金について苦情を申し立てられたと述べた。
この電話は、税金未払いをめぐる長期にわたる紛争でアップルが敗訴してから間もなくかかってきた。
関連トピック
- 20 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgjenp4680o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-24T18:57:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/92c8/live/180ebdb0-8787-11f1-9428-e17279226993.jpg",
    readTime: 3,
  },
  {
    id: "oil-shipments-are-under-attack-on-multip-4e033e4e",
    title: "Oil shipments are under attack on multiple fronts as fighting escalates in Red Sea, Hormuz and Black Sea",
    titleJa: "紅海、ホルムズ、黒海で戦闘が激化する中、石油輸送は複数の前線で攻撃にさらされている",
    summaryJa: "中東やヨーロッパで激化する紛争において経済戦争が武器として展開される中、石油タンカーはさまざまな面でますます攻撃にさらされるようになっている。イランは今月、重要な石油回廊の支配を強めようとして、ホルムズ海峡とその周辺でタンカーへの攻撃を強化している。イエメンにおけるイラン政府の同盟国フーシ派は今週、リヤドに対する海上禁輸を宣言した後、紅海でサウジアラビアのタンカー２隻を砲撃し、第２戦線を開設した。",
    bodyOriginal: `Oil tankers are increasingly coming under fire on several fronts as economic warfare is deployed as a weapon in the escalating conflicts in the Middle East and Europe.
Iran has stepped up its attacks on tankers in and around the Strait of Hormuz this month as it tries to impose its control over the crucial oil corridor. Tehran's Houthi allies in Yemen opened a second front this week, firing on two Saudi tankers in the Red Sea after declaring a maritime embargo against Riyadh.
Ukraine, meanwhile, says it has attacked more than 150 tankers, cargo ships, and other vessels associated with Russia's shadow fleet in the Sea of Azov and Black Sea, according to the Kyiv Post.
The oil market is now dealing with wars on multiple fronts, Helima Croft, head of global commodity strategy, told CNBC's "Power Lunch" on Thursday. Oil prices have surged more than 30% in July with Brent crude breaking $100 per barrel on Thursday for the first time since May, as the security situation has rapidly deteriorated in the southern Red Sea and Hormuz.
Ship traffic through Hormuz has plunged after rebounding in the weeks following the memorandum of understanding signed by the U.S. and Iran on June 17 to reopen the strait.
"After the collapse of the MOU, we have entered the worst phase of this conflict for merchant shipping," said Dimitris Maniatis, CEO of the maritime risk service Marisks, headquartered in Athens, Greece.
"The primary reason is the fact that the Iranians want to assert more authority and control over what is happening in the Strait of Hormuz," Maniatis said.
Some 61 commercial ships have been attacked in the Persian Gulf, Strait of Hormuz, and Gulf of Oman since March 1, resulting in the deaths of at least 17 seafarers and dozens of injuries, according to the International Maritime Organization, a United Nations agency.
At least a dozen tankers have been struck this month in and around Hormuz, killing at least two seafarers, as fighting sharply escalates between the U.S. and Iran, according to the IMO data.
The Red Sea attacks now threaten millions of barrels per day of oil that the Saudis redirected through a pipeline to its western coast amid to the security situation in Hormuz. The Saudi exports transit through the Bab el-Mandeb Strait, a chokepoint that links the Red Sea to the Gulf of Aden.
"The Iranians and the Houthis together now are implementing a very significant blow to American national interests, the American oil companies and of course Saudi Arabia," Maniatis said. "But they're not managing to entirely choke exports."
Houthi attacks on ships in the Red Sea from 2023 to 2025 in response to Israel's war in Gaza dramatically reduced traffic through the Bab el-Mandeb. Shipping through the strait had still not fully recovered.
The Saudis can redirect some oil through a pipeline that stretches from a port on the Red Sea across Egypt to the Mediterranean but the logistics are complex, said Matt Smith, director of commodity research at Kpler.
Supertankers cannot transit the Suez Canal fully loaded because the channel is too shallow, Smith said. The Saudis would have to unload half the cargo at the port of Ain Sokhna, pipe it through to the port of Sidi Kerir, send the supertanker through Suez and retrieve the oil on the other side, he said.
The supertanker would then face a much longer journey around Africa to destinations in Asia, and would have to return on the same route through the Suez due to Houthi threats at the Bab el-Mandeb, Smith said. The roundtrip journey would take around eight weeks, he said.
Oil shipments by sea from the Middle East are increasingly facing a "no-way out" scenario due to the disruptions in the Red Sea, Croft said.
In the Black Sea, meanwhile, the Caspian Pipeline Consortium has stopped loading tankers at the Russian port of Novorossiysk due to attacks on vessels. Kazakhstan exports about 80% of its crude oil through that pipeline, Croft said in a note to clients this week.
The Kazakhs have limited alternatives to the pipeline, which means their production of around 1.7 million bpd in June, could face shut-ins, Croft said. The Ukrainians have also pounded Russian refineries, resulting in more than 50% of the country's capacity coming offline, the analyst said.
"Russia has now put a export ban on products and their refineries have been hit so massively by Ukraine," Croft told CNBC. "Russia is one of the largest product exporters, one the largest diesel exporters. It's really tightening the products market as well as the crude market."
The dangerous escalation in the Middle East could potentially spike Brent oil prices beyond the 2022 high of $128 per barrel after Russia invaded Ukraine, Croft said in the note. In a worst-case scenario, where the region descends into full-scale war, Brent could surpass the 2008 peak of $148 per barrel, she said.`,
    bodyJa: `中東やヨーロッパで激化する紛争において経済戦争が武器として展開される中、石油タンカーはさまざまな面でますます攻撃にさらされるようになっている。
イランは今月、重要な石油回廊の支配を強めようとして、ホルムズ海峡とその周辺でタンカーへの攻撃を強化している。イエメンにおけるイラン政府の同盟国フーシ派は今週、リヤドに対する海上禁輸を宣言した後、紅海でサウジアラビアのタンカー２隻を砲撃し、第２戦線を開設した。
一方、キエフ・ポスト紙によると、ウクライナは、アゾフ海と黒海でロシアの影の艦隊に関連するタンカー、貨物船、その他の船舶150隻以上を攻撃したと発表した。
世界商品戦略責任者のヘリマ・クロフト氏は木曜日、CNBCの「パワーランチ」で、石油市場は現在、複数の戦線で戦争に対処していると語った。紅海南部とホルムズ地域の治安状況が急速に悪化しているため、原油価格は7月に30％以上急騰し、木曜日にはブレント原油が5月以来初めて1バレル＝100ドルを突破した。
ホルムズを通過する船舶の交通量は、6月17日に米国とイランが海峡再開に向けた覚書に署名してから数週間で回復した後、激減した。
ギリシャのアテネに本社を置く海事リスクサービス会社マリリスクスのディミトリス・マニアティス最高経営責任者（CEO）は、「覚書崩壊後、商船業界にとってこの紛争は最悪の段階に入った」と述べた。
マニアティス氏は、「主な理由は、イラン人がホルムズ海峡で起きていることに対して、より大きな権限と統制を主張したいと考えているという事実だ」と述べた。
国連機関の国際海事機関によると、3月1日以降、ペルシャ湾、ホルムズ海峡、オマーン湾で約61隻の商船が攻撃され、少なくとも船員17人が死亡、数十人が負傷した。
ＩＭＯのデータによると、米国とイランの間で戦闘が激化する中、今月、ホルムズとその周辺で少なくとも十数隻のタンカーが衝突され、少なくとも船員２人が死亡した。
紅海の攻撃は現在、ホルムズの治安状況のさなか、サウジがパイプラインを通じて西海岸に送り先を変えた日量数百万バレルの石油を脅かしている。サウジアラビアの輸出品は、紅海とアデン湾を結ぶ難関であるバブ・エル・マンデブ海峡を通過する。
「イランとフーシ派は現在、共同してアメリカの国益、アメリカの石油会社、そしてもちろんサウジアラビアに対して非常に重大な打撃を与えている」とマニアティス氏は述べた。 「しかし、輸出を完全に阻止することはできていない。」
ガザでのイスラエルの戦争に対抗して、2023年から2025年にかけてフーシ派が紅海の船舶を攻撃し、バブ・エル・マンデブ川の交通量が劇的に減少した。海峡を通る輸送はまだ完全に回復していなかった。
サウジは紅海の港からエジプトを越えて地中海に伸びるパイプラインを通じて石油の一部を輸送することができるが、物流は複雑だとクプラーの商品調査ディレクター、マット・スミス氏は述べた。
スミス氏によると、スーパータンカーはスエズ運河が浅すぎるため、満載の荷物を積んで通過することはできないという。同氏によると、サウジはアインスクナ港で貨物の半分を降ろし、パイプでシディ・ケリル港に運び、スーパータンカーをスエズ経由で送り、反対側で石油を回収する必要があるという。
スミス氏によると、超タンカーはアフリカを周回してアジアの目的地まではるかに長い旅をすることになり、バブ・エル・マンデブでのフーシ派の脅威のため、スエズを通って同じルートで戻らなければならないだろうという。同氏によると、往復の旅には約8週間かかるという。
クロフト氏は、中東からの海上石油輸送は、紅海の混乱によりますます「出口のない」シナリオに直面していると述べた。
一方、黒海では、カスピ海パイプライン・コンソーシアムが船舶への攻撃のため、ロシアのノヴォロシースク港でタンカーへの積み込みを停止した。クロフト氏は今週顧客に宛てたメモの中で、カザフスタンは原油の約80％をそのパイプラインを通じて輸出していると述べた。
クロフト氏は、カザフスタンにはパイプラインの代替手段が限られているため、6月の日量約170万バレルの生産が停止に直面する可能性があると述べた。アナリストによると、ウクライナはロシアの製油所も攻撃しており、その結果、同国の生産能力の50％以上が停止しているという。
「ロシアは現在、製品の輸出を禁止しており、ロシアの製油所はウクライナによって大規模な打撃を受けている」とクロフト氏はCNBCに語った。 「ロシアは最大の製品輸出国の一つであり、最大のディーゼル輸出国の一つだ。原油市場だけでなく製品市場も本当に逼迫している。」
クロフト氏はメモの中で、ロシアのウクライナ侵攻後、中東の危険なエスカレーションにより、ブレント原油価格が2022年の最高値である1バレル当たり128ドルを超えて高騰する可能性があると述べた。同地域が本格的な戦争に突入するという最悪のシナリオでは、ブレント原油は2008年のピークである1バレル当たり148ドルを超える可能性があると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/oil-tanker-red-sea-hormuz-black-sea-iran-ukraine.html",
    publishedAt: "2026-07-24T18:47:41+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "moody-s-says-unprecedented-ai-spending-t-b058d4cc",
    title: "Moody's says 'unprecedented' AI spending threatens credit quality of Amazon, Meta, Alphabet and others",
    titleJa: "ムーディーズ、「前例のない」AI支出がアマゾン、メタ、アルファベットなどの信用の質を脅かしていると発表",
    summaryJa: "年間数兆ドル規模の人工知能インフラ構築競争がフリーキャッシュフローを侵食し、いわゆるハイパースケーラーのバランスシートリスクを増大させているとムーディーズ・レーティングスは警告した。ムーディーズは今週発表したリサーチノートの中で、支出の急増により、アルファベットやマイクロソフトのような世界で最も現金が豊富な企業ですら、AIへの野望に資金を提供するために借金や株式売却、オフバランスシートへの投資に大きく依存せざるを得なくなっていると述べた。",
    bodyOriginal: `The race to build artificial intelligence infrastructure at a trillion-dollar annual clip is eroding the free cash flow and increasing balance-sheet risk at so-called hyperscalers, warned Moody's Ratings.
In a research note released this week, Moody's said that the spending surge is forcing even the world's most cash-rich corporations like Alphabet and Microsoft to lean heavily on debt, stock sales and off-balance-sheet moves to fund their AI ambitions.
"Previously, these companies relied on asset-light structures centered on software, intellectual property, and scalable cloud services that required modest capital investment," Moody's said in the Wednesday note. "The transition from asset-light to asset-heavy models requires unprecedented levels of investment and capital raising."
The moves "threaten credit quality" for the six companies tracked by Moody's, which include Microsoft, Amazon, Alphabet, Meta, Oracle and CoreWeave, according to the report.
The ratings firm projects that capital expenditures — or capex, which are investment for physical assets like data centers — will hit $785 billion in 2026 before reaching about $1 trillion next year.
The shift breaks a decades-long Silicon Valley formula that created the world's most valuable companies. Software costs little to replicate, yielding fat profit margins and fortress balance sheets. Generative AI, by contrast, demands a vast physical footprint: warehouses crammed with expensive and energy-hungry servers and chips.
To finance the expansion, tech giants are increasingly turning to Wall Street, resulting in booming profits for the financial industry.
Direct debt across the six hyperscalers has reached approximately $460 billion, according to Moody's. Tech companies are also tapping public markets for cash, including Google-parent Alphabet, which last month announced an $85 billion equity sale.
Leasing data centers
The ratings firm noted that because AI hardware and infrastructure require massive upfront investment while revenue materializes over a longer time horizon, free cash flow across the sector is coming under pressure.
To keep direct debt off their balance sheets, hyperscalers are leaning on off-balance-sheet financing, mostly through long-term data center leases, the report explained.
Moody's said that lease commitments across the group have ballooned to $1.2 trillion. More than $820 billion of that total is from leases that haven't started yet, meaning the data centers are still being built.
While these obligations don't show up as traditional debt, Moody's says it considers them as debt-equivalent liabilities that will bind companies to significant rent payments down the line.
Despite the warning, Moody's noted that Microsoft, Alphabet, Amazon and Meta retain among the strongest corporate balance sheets in the world, making it unlikely that their investment grade ratings are under imminent threat.
The immediate pressure is concentrated on lower-rated entities like Oracle and specialized AI cloud provider CoreWeave. Oracle carries a rating of Baa2 with a negative outlook, placing it just two notches above junk status.
Meanwhile, CoreWeave operates within the high-yield market with a Ba3 rating, relying on complex private debt structures to finance its GPU hardware fleets.
Circular ecosystem
Moody's also pointed to structural circularity within the AI boom. Some of the multibillion-dollar backlogs reported by hyperscalers stem from strategic deals with pre-IPO artificial intelligence labs including OpenAI and Anthropic, Moody's noted.
The firms have invested billions into AI labs that, in turn, spend heavily on cloud computing from those same companies, creating what Moody's described as a circular AI ecosystem.
The overlapping relationships heighten risks because many of the industry's biggest companies are increasingly dependent on the same AI customers and the same assumptions about future demand, Moody's said.
Even so, the tech giants have significant strengths that help offset those risks.
Demand for AI computing remains robust, cloud businesses continue to grow and hyperscalers have signed hundreds of billions of dollars in long-term customer contracts that should provide predictable revenue. Those deals support the industry's largely-strong credit profiles, even amid the spending boom.
Still, investors should recognize that the tech industry's financial profile is undergoing a structural change unlike anything seen in the cloud era, according to Moody's.
"Investors will increasingly focus on these companies' ability to realize an adequate return on investment," the ratings firm said.`,
    bodyJa: `年間数兆ドル規模の人工知能インフラ構築競争がフリーキャッシュフローを侵食し、いわゆるハイパースケーラーのバランスシートリスクを増大させているとムーディーズ・レーティングスは警告した。
ムーディーズは今週発表したリサーチノートの中で、支出の急増により、アルファベットやマイクロソフトのような世界で最も現金が豊富な企業ですら、AIへの野望に資金を提供するために借金や株式売却、オフバランスシートへの投資に大きく依存せざるを得なくなっていると述べた。
ムーディーズは水曜日のメモで、「これらの企業はこれまで、ソフトウェア、知的財産、スケーラブルなクラウドサービスを中心としたアセットライト構造に依存しており、少額の資本投資を必要としていた」と述べた。 「資産軽めのモデルから資産重めのモデルへの移行には、前例のないレベルの投資と資本調達が必要です。」
報告書によると、この動きはムーディーズが追跡しているマイクロソフト、アマゾン、アルファベット、メタ、オラクル、コアウィーブを含む6社の「信用の質を脅かしている」という。
格付け会社は、設備投資、つまりデータセンターなどの物理的資産への投資であるCapexが2026年に7,850億ドルに達し、来年には約1兆ドルに達すると予測している。
この変化は、世界で最も価値のある企業を生み出してきた数十年にわたるシリコンバレーの方式を打ち破る。ソフトウェアの複製コストはほとんどかからないため、大きな利益率と強固なバランスシートが得られます。対照的に、生成 AI は、膨大な物理的設置面積を必要とします。倉庫には、高価でエネルギーを大量に消費するサーバーとチップが詰め込まれています。
事業拡大に資金を提供するために、ハイテク大手企業はますますウォール街に目を向けており、その結果、金融業界の利益は急増しています。
ムーディーズによると、ハイパースケーラー６社全体の直接負債は約４６００億ドルに達している。先月850億ドルの株式売却を発表したグーグルの親会社アルファベットなど、ハイテク企業も公開市場を利用して現金を獲得している。
データセンターのリース
同格付け会社は、AIのハードウェアとインフラストラクチャには巨額の先行投資が必要だが、収益は長期にわたって実現するため、セクター全体のフリーキャッシュフローが圧迫されていると指摘した。
直接負債をバランスシートから切り離すため、ハイパースケーラーは主に長期のデータセンターリースを通じてオフバランスシートの資金調達に頼っていると報告書は説明している。
ムーディーズによると、グループ全体のリース契約は１兆２０００億ドルに膨れ上がった。このうち 8,200 億ドル以上はまだ開始されていないリースによるもので、データセンターがまだ建設中であることを意味します。
これらの債務は従来の債務としては現れないが、ムーディーズはこれらの債務を、企業が将来的に多額の賃料支払いに拘束される債務に相当する負債とみなしていると述べている。
警告にもかかわらず、ムーディーズは、マイクロソフト、アルファベット、アマゾン、メタは世界で最も強固な企業バランスシートを維持しており、これらの企業の投資適格格付けが差し迫った脅威にさらされる可能性は低いと指摘した。
差し迫った圧力は、Oracleや専門のAIクラウドプロバイダーであるCoreWeaveなどの格付けの低い企業に集中している。オラクルの格付けは「Baa2」で、見通しはネガティブで、ジャンクステータスよりわずか 2 ノッチ上にあります。
一方、CoreWeave は Ba3 格付けの高利回り市場で事業を展開しており、GPU ハードウェア フリートの資金調達を複雑な民間債務構造に依存しています。
循環型エコシステム
ムーディーズはAIブームにおける構造的な循環性も指摘した。ハイパースケーラーが報告している数十億ドル規模の未払い金の一部は、OpenAIやAnthropicなどIPO前の人工知能研究所との戦略的取引に起因しているとムーディーズは指摘した。
両社はAIラボに数十億ドルを投資し、その結果、同じ企業のクラウドコンピューティングに多額の費用を費やし、ムーディーズが表現する循環型AIエコシステムを構築した。
ムーディーズは、業界最大手企業の多くが同じAI顧客と将来の需要についての同じ想定にますます依存しているため、関係が重複することでリスクが高まると述べた。
それでも、ハイテク大手にはそれらのリスクを相殺するのに役立つ大きな強みがある。
AI コンピューティングの需要は依然として堅調で、クラウド ビジネスは成長を続けており、ハイパースケーラーは予測可能な収益をもたらすはずの数千億ドルの長期顧客契約を締結しています。これらの取引は、消費ブームのさなかにも関わらず、業界の概ね好調な信用プロフィールを支えている。
それでもムーディーズによると、投資家はハイテク業界の財務状況がクラウド時代には見られなかった構造変化を遂げていることを認識すべきだという。
格付け会社は「投資家はこれらの企業が適切な投資収益率を実現できるかどうかにますます注目するだろう」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/moodys-ai-spending-credit-quality-amazon-meta-alphabet.html",
    publishedAt: "2026-07-24T18:20:17+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "cdc-says-massive-cyclospora-outbreak-is-5149adc4",
    title: "CDC says massive cyclospora outbreak is now in nine states",
    titleJa: "CDCは、シクロスポラの大規模発生が現在9つの州で発生していると発表",
    summaryJa: "新たに連携したイリノイ、カンザス、オクラホマ、ペンシルベニアの4州が、インディアナ、ケンタッキー、オハイオ、ウェストバージニア、そして大打撃を受けたミシガンに加わる。",
    bodyOriginal: `The nation's largest multistate outbreak of cyclosporiasis linked to shredded iceberg lettuce has expanded to nine states, the Centers for Disease Control and Prevention said Friday.
The four newly linked states — Illinois, Kansas, Oklahoma and Pennsylvania – join Indiana, Kentucky, Ohio, West Virginia and hard-hit Michigan. Cyclospora is a microscopic parasite that typically infects people through contaminated food or water and causes cyclosporiasis, a gastrointestinal illness that can result in symptoms including severe diarrhea. Patients can require hospitalization, but no deaths have been recorded related to the parasite this year.
The outbreak is already the largest of cyclosporiasis reported in the U.S. this year, with thousands of illnesses recorded nationwide. That is well above the roughly 200 to 1,000 cases typically reported annually.
Meanwhile, the Food and Drug Administration is investigating a separate cyclosporiasis outbreak linked to an unidentified food product or products. The U.S. is trying to investigate the sources of the parasite and contain its spread amid confusion over its response to the outbreak and staffing cuts that some experts say made it harder to curb it.
U.S. health and food regulators have zeroed in on shredded iceberg lettuce supplied by Taylor Farms.
Mexican health authorities on Thursday said that samples of lettuce and water from Taylor Farms' plant in central Mexico tested negative for cyclospora. However, that result does not disprove the Food and Drug Administration's earlier identification as Taylor Farms de Mexico as the likely source of the outbreak.
The earliest cases began showing symptoms in mid-May. Moreover, the long incubation period for infection means that the crop responsible would have been distributed weeks ago.
Last week, the FDA said that the produce giant supplied the shredded iceberg lettuce to the Taco Bell restaurants where people ate before becoming ill. Taylor Farms issued a voluntary recall for all iceberg lettuce sourced from its Guanajuato, Mexico, facility, and Taco Bell pulled the affected lettuce from its restaurants.
The CDC has so far tallied 1,947 people infected with cyclospora who also reported eating at Taco Bell in the nine states. Illnesses in the outbreak tied to iceberg lettuce began on June 22 and have continued through July 20, the CDC said. The federal count has lagged behind state tallies, so some of the states hit by the outbreak have reported much higher numbers of infections.
But Taylor Farms has drawn criticism for its response to the outbreak. Some health experts blasted its recall notice, which included abbreviations and did not allow consumers to understand easily if they had bought or eaten any product that was at risk.
After the FDA reported a false positive of lettuce samples from Taylor Farms on Sunday, the company issued a statement saying that the health agency had apologized. The FDA later clarified that it had not apologized to Taylor Farms, and the company deleted the statement on X, although it is still available on its website. The agency also said it still considered the company's iceberg lettuce the likely source of the outbreak.
Taylor Farms supplies lettuce and other produce to major retailers such as Walmart, Target and Whole Foods, as well as restaurant chains including Taco Bell.`,
    bodyJa: `アメリカ疾病予防管理センターは金曜日、細切りアイスバーグレタスに関連する複数の州で発生したシクロスポラ症の国内最大規模の発生が9つの州に拡大したと発表した。
新たに連携したイリノイ、カンザス、オクラホマ、ペンシルベニアの4州が、インディアナ、ケンタッキー、オハイオ、ウェストバージニア、そして大打撃を受けたミシガンに加わる。シクロスポラは、通常、汚染された食品や水を介して人々に感染し、重度の下痢などの症状を引き起こす胃腸疾患であるシクロスポラ症を引き起こす微細な寄生虫です。患者は入院を必要とする可能性があるが、今年はこの寄生虫に関連した死亡は記録されていない。
この流行はすでに米国で今年報告されたシクロスポリア症としては最大規模であり、全米で数千件の発生が記録されている。これは、通常年間報告されるおよそ200～1,000件の症例をはるかに上回っている。
一方、食品医薬品局は、未確認の食品に関連した別のシクロスポリア症の発生を調査している。米国は、感染拡大への対応を巡る混乱と人員削減により感染を抑えることが困難になったと一部の専門家が指摘する中、寄生虫の発生源を調査し、感染拡大を阻止しようとしている。
米国の保健・食品規制当局は、テイラー・ファームズが供給する細切りアイスバーグ・レタスに焦点を当てた。
メキシコ保健当局は木曜日、メキシコ中部にあるテイラー・ファームズの工場から採取したレタスと水のサンプルはシクロスポラ検査で陰性だったと発表した。しかし、この結果は、メキシコのテイラー農場が発生源である可能性が高いと食品医薬品局が以前に特定したことを反証するものではない。
最も初期の症例では5月中旬に症状が現れ始めた。さらに、感染の潜伏期間が長いということは、原因作物が数週間前に流通していたであろうことを意味する。
FDAは先週、食品大手がタコベル・レストランに細切りアイスバーグレタスを供給し、人々が発症する前にそこで食事をしていたと発表した。テイラー・ファームズは、メキシコのグアナファトにある自社施設から供給されるすべてのアイスバーグ・レタスの自主回収を発表し、タコベルは該当のレタスをレストランから撤去した。
CDCはこれまでに9州でタコベルで食事をしたと報告したシクロスポラ感染者1,947人を集計している。 CDCによると、アイスバーグレタスに関連した病気の発生は6月22日に始まり、7月20日まで続いたという。連邦政府の集計は州の集計に遅れをとっているため、感染拡大に見舞われた州の一部ではさらに多くの感染者数が報告されている。
しかし、テイラー・ファームズは感染拡大への対応で批判を呼んでいる。一部の健康専門家は、そのリコール通知には略語が含まれており、リスクのある製品を購入または食べたかどうかを消費者が簡単に理解できないと非難した。
日曜日にFDAがテイラー・ファームズからのレタスサンプルの誤検知を報告したことを受け、同社は保健当局が謝罪したとの声明を発表した。 FDAはその後、テイラー・ファームズに対して謝罪していないと明らかにし、同社はXに関する声明を削除したが、ウェブサイトには今でも閲覧できる。同庁はまた、同社のアイスバーグレタスが感染源の可能性が依然として高いと考えていると述べた。
Taylor Farms は、ウォルマート、ターゲット、ホールフーズなどの大手小売店や、タコベルなどのレストラン チェーンにレタスやその他の農産物を供給しています。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/cyclospora-cdc-says-outbreak-is-in-nine-states.html",
    publishedAt: "2026-07-24T17:32:22+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "faisal-islam-the-uk-s-trump-trade-deal-n-1e49e3fe",
    title: "Faisal Islam: The UK's Trump trade deal no longer looks world-beating",
    titleJa: "ファイサル・イスラム氏：英国のトランプ貿易協定はもはや世界に勝るものとは思えない",
    summaryJa: "ファイサル・イスラム氏：英国のトランプ貿易協定はもはや世界に勝るものとは思えない- 公開されました",
    bodyOriginal: `Faisal Islam: The UK's Trump trade deal no longer looks world-beating
- Published
It has been a long road for President Donald Trump as he looks for a justification to erect a tariff wall around the US, including against key allies.
From the opioid crisis to illegal migration, then the need to bring manufacturing back to America's shores, the list goes on.
Through Trump's second term, there has been a new justification almost every month for the trade levies he is seeking to place on allies.
Some have been overturned by the courts, others by economics and some even by their own logic. And so, Trump has now turned to effectively accusing dozens of trade partners of trading in goods that have been produced using forced labour.
These are "tariffs in search of an authority", as one industry figure put it. The forced labour line shores up President Trump's tariffs against a challenge from Congress or the courts.
In practice, the levies are curiously similar by country to a previous round of tariffs imposed supposedly for completely different reasons.
The good news for the UK is that the regime effectively remains the same as before.
What has changed is that our nearest neighbours in the European Union now have a much better deal than before, and in turn are in a better situation than the UK.
While the UK and the EU each appear to have a 10% rate, the EU's is a flat rate, while the UK's will apply alongside other tariffs, in a range of goods including footwear and textiles.
The government has struck effective side deals on medicines, steel, aluminium, cars and, with the help of King Charles, whisky.
At the end of this process however the overall trade-weighted effective tariff rate for the EU (8.5%) could end up a bit lower than the UK's (6.8%).
It should not matter that much, but the help given by doing the first deal, and by post-Brexit trade freedoms, looks to have been short-lived.
The British Chambers of Commerce trade expert William Bain points to the competitive advantage for EU exporters into the US in some sectors.
The EU has secured better treatment because it has passed a ban on forced labour goods, which the UK has not.
This is not an accusation on the use of forced labour in supply chains. It is about the passing of specific legislation, mirroring the US ban on products that have used forced labour in supply chains.
US hits dozens of countries with new wave of tariffs
- Published6 hours ago
What tariffs has Trump introduced and why?
- Published11 hours ago
There should be scope for a better deal for the UK, but it raises an interesting question about whether the government will pursue an EU-style ban. This is widely seen as a backdoor way to target China, in particular for conditions in its Xinjiang province.
Last October, external the government said it "remained firmly opposed to the use of state-imposed forced labour", but that it was "considering how best to reflect this position," citing "operational and legal complexities".
Since then, the UK has welcomed imports of Chinese cars, and is exploring a services trade deal with the country. The relationship with China has been a balancing act for the government.
This is also one of the global stories of the tariff wars. As the US repeatedly changes its rationale for tariffs, the rest of the world is focused on trading with each other. For example, Canada increased its trade with the rest of the world by more than it lost from the US.
China's total dollar trade with the US is flat in the first half of this year versus last year. Across the world it is up 21%, including 14% with the EU, 11% with the UK, and 24% with Africa.
There could be pressure now to legislate for a formal ban on forced labour products. Successive governments have opted for a lighter voluntary due diligence regime.
Will the US force a change in the UK and elsewhere, and what might it offer in return?
Or the UK may opt to keep its precarious geopolitical position by sticking to its existing deals in medicines, metals and cars.`,
    bodyJa: `ファイサル・イスラム氏：英国のトランプ貿易協定はもはや世界に勝るものとは思えない
- 公開されました
主要同盟国に対するものも含め、米国の周囲に関税の壁を築く正当性を模索するドナルド・トランプ大統領にとって、これは長い道のりだった。
オピオイド危機から不法移民、そして製造業をアメリカ本土に戻す必要性まで、リストは続きます。
トランプ大統領の2期目を通して、同氏が同盟国に課そうとしている貿易税の新たな正当化がほぼ毎月出てきた。
裁判所によって覆されたものもあれば、経済学によって覆されたもの、さらには独自の論理によって覆されたものもあります。そこでトランプ大統領は現在、数十の貿易相手国を強制労働を使って生産された商品を取引していると事実上非難する方向に舵を切った。
ある業界関係者が言うように、これらは「権威を求めた関税」だ。強制労働の規定は、議会や裁判所からの異議に対抗してトランプ大統領の関税を強化するものである。
実際には、この課徴金は、まったく異なる理由で課せられたとされる前回の関税と、不思議なことに国ごとに似ている。
英国にとって良いニュースは、体制が事実上以前と同じままであることだ。
何が変わったかというと、欧州連合の最も近い隣国が以前よりもはるかに良い協定を結んでおり、ひいては英国よりも良い状況にあるということです。
英国とEUはそれぞれ10%の税率を課しているようだが、EUは一律税率であるのに対し、英国は履物や繊維製品を含む幅広い品目に他の関税と並行して適用される。
政府は医薬品、鉄鋼、アルミニウム、自動車、そしてチャールズ国王の援助を受けてウイスキーに関して効果的なサイド取引を締結した。
ただし、このプロセスの終了時点では、EU の全体的な貿易加重実効関税率 (8.5%) は英国 (6.8%) よりも若干低くなる可能性があります。
それはそれほど重要ではないはずだが、最初の合意の締結とEU離脱後の貿易の自由による助けは長続きしなかったようだ。
英国商工会議所の貿易専門家ウィリアム・ベイン氏は、一部の分野では米国へのEU輸出業者の競争上の優位性を指摘する。
EUは強制労働用品の禁止を可決したが、英国は可決しなかったため、より良い待遇を確保した。
これはサプライチェーンにおける強制労働の使用を告発するものではありません。これはサプライチェーンで強制労働を使用した製品に対する米国の禁止を反映した特定の法案の可決に関するものである。
米国、新たな関税の波で数十カ国を打撃
- 6 時間前に公開
トランプ大統領はどのような関税を導入しましたか?またその理由は何ですか?
- 11 時間前に公開
英国にとってより良い合意の余地はあるはずだが、政府がEUスタイルの禁止を追求するかどうかについて興味深い疑問が生じる。これは中国、特に新疆ウイグル自治区の状況を標的にする裏口的な手段として広く見られている。
昨年10月、政府は対外的に「国家が強制する強制労働の利用には断固として反対し続ける」ものの、「運営上および法的な複雑さ」を理由に「この立場をどのように反映するのが最善かを検討している」と述べた。
それ以来、英国は中国車の輸入を歓迎しており、同国とのサービス貿易協定の締結を模索している。中国との関係は政府にとってバランスを取る役割を果たしてきた。
これは関税戦争の世界的な物語の一つでもあります。米国が関税の根拠を繰り返し変更する中、世界の他の国々は相互の貿易に焦点を当てている。たとえば、カナダは米国から失った貿易額以上に、世界の他の国々との貿易を増やしました。
中国の対米国ドル貿易総額は、今年上半期は昨年と比べて横ばいであった。世界中で 21% 増加しており、その中には EU で 14%、英国で 11%、アフリカで 24% が含まれています。
強制労働製品の正式な禁止を法制化するよう圧力がかかる可能性がある。歴代政府は、より軽い自主的デューデリジェンス制度を選択してきました。
米国は英国や他の国に変化を強制するだろうか、そしてその見返りに何を提供する可能性があるだろうか？
あるいは、英国は医薬品、金属、自動車に関する既存の取引に固執することで、不安定な地政学的立場を維持することを選択するかもしれない。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9v4ymwddwgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-24T14:02:26+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/35d6/live/046766f0-8768-11f1-aec4-5d4d96e3f4ec.jpg",
    readTime: 4,
  },
  {
    id: "the-30-year-treasury-yield-is-closing-in-de87adfc",
    title: "The 30-year Treasury yield is closing in on 5.2%. A surge to 6% could slam stocks.",
    titleJa: "30年米国債利回りは5.2％に近づいている。 6％まで上昇すれば株価は暴落する可能性がある。",
    summaryJa: "長期債の利回りが急上昇する可能性が高まっており、人気の長期国債ETFやTIPS ETFの損失がさらに拡大する恐れがある。",
    bodyOriginal: `Long-bond yield spike is increasingly possible — threatening to deepen losses for popular long-term Treasury and TIPS ETFs.`,
    bodyJa: `長期債の利回りが急上昇する可能性が高まっており、人気の長期国債ETFやTIPS ETFの損失がさらに拡大する恐れがある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-30-year-treasury-yield-is-closing-in-on-5-2-a-surge-to-6-could-slam-stocks-fa9631fb?mod=mw_rss_topstories",
    publishedAt: "2026-07-24T13:44:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-04475414",
    readTime: 2,
  },
  {
    id: "sap-s-stock-rises-on-strong-revenue-but-698d9125",
    title: "SAP’s stock rises on strong revenue, but analysts warn of guidance risks",
    titleJa: "SAPの株価は好調な収益で上昇するが、アナリストはガイダンスのリスクを警告",
    summaryJa: "人工知能がソフトウェア会社のビジネスモデルを完全に破壊する可能性があるとの懸念から、株価は年初から40％下落した。",
    bodyOriginal: `The stock has dropped 40% since the start of the year on concerns that artificial intelligence may entirely disrupt the software company’s business model.`,
    bodyJa: `人工知能がソフトウェア会社のビジネスモデルを完全に破壊する可能性があるとの懸念から、株価は年初から40％下落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/saps-stock-rises-on-strong-revenue-but-analysts-warn-of-guidance-risks-654babc9?mod=mw_rss_topstories",
    publishedAt: "2026-07-24T13:43:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-36793039",
    readTime: 2,
  },
  {
    id: "trump-slaps-sweeping-new-tariffs-on-60-t-4b66b046",
    title: "Trump slaps 'sweeping' new tariffs on 60 trade partners as global duties expire",
    titleJa: "トランプ大統領、国際関税の期限切れに伴い60の貿易相手国に「徹底的な」新たな関税を課す",
    summaryJa: "連邦公報の通知によると、トランプ政権は金曜日、強制労働違反の疑いで数十カ国に新たな関税を課した。この関税は10％から12.5％の間に設定され、事実上、ドナルド・トランプ大統領による一時的な10％の世界共通関税に代わるもので、この関税は新しい関税の発効と同じ東部時間午前12時01分に期限切れとなった。",
    bodyOriginal: `The Trump administration imposed new tariffs Friday on dozens of countries over alleged forced-labor violations, according to a notice in the Federal Register.
The duties, set between 10% and 12.5%, effectively replace President Donald Trump's temporary 10% global tariffs, which expired at 12:01 a.m. ET — the same time as the new ones took effect.
The tariffs apply to 60 trade partners and cover 99.4% of U.S. trade, the Office of the U.S. Trade Representative said in a fact sheet Thursday afternoon. The office separately told CNBC that it could not provide an estimate of how much revenue the new tariffs will generate.
The move "is the most sweeping international labor rights action the United States has ever taken — that any country has ever taken," a senior Trump administration official told reporters in a call earlier Thursday.
The official noted that the new tariffs would not "stack" on top of existing import taxes on steel and aluminum, known as "Section 232" duties, that Trump imposed last year on national-security grounds.
The latest trade action underscores how the Trump administration is ramping its aggressive use of tariffs back up, after the president's protectionist agenda suffered major legal setbacks earlier this year. Trump has long touted tariffs as key tools for generating revenue and gaining leverage over foreign trade partners, while brushing aside criticisms that they tax U.S. importers and raise prices for U.S. consumers.
The White House recently imposed 25% tariffs on most U.S. imports from Brazil, which took effect Wednesday, and 50% tariffs on a wide range of goods from Canada, which are set to begin next month.
The Trump administration had proposed the upcoming tariffs in early June, after concluding that the targeted countries failed to effectively ban the use of forced-labor practices in trade with the U.S.
The new tariffs are being brought under Section 301 of the Trade Act of 1974, one of trade tools Trump has wielded since the Supreme Court struck down his global "liberation day" duties on Feb. 20.
Hours after that court loss, a furious Trump said he would impose a worldwide 10% tariff under Section 122 of the 1974 trade law. But that tariff came with a 150-day timer that was set to lapse at 12:01 a.m. ET on Friday.
In March, the Trump administration announced two separate Section 301 investigations: the forced-labor probe, and another one centered on concerns about excess manufacturing capacity by 16 economies. The latter probe has yet to be finalized.
"We commit to continuing to use tariffs and to negotiate deals to support the reindustrialization of our economy, protect American workers, and increase their wages and shrink our trade deficit," U.S. Trade Representative Jamieson Greer said in Senate testimony Wednesday.`,
    bodyJa: `連邦公報の通知によると、トランプ政権は金曜日、強制労働違反の疑いで数十カ国に新たな関税を課した。
この関税は10％から12.5％の間に設定され、事実上、ドナルド・トランプ大統領による一時的な10％の世界共通関税に代わるもので、この関税は新しい関税の発効と同じ東部時間午前12時01分に期限切れとなった。
米通商代表部は木曜午後のファクトシートで、この関税は貿易相手国60カ国に適用され、米国貿易の99.4％をカバーすると発表した。同局は別途CNBCに対し、新たな関税がどれだけの収入を生み出すかについての見積もりは提示できないと語った。
トランプ政権高官は木曜初めの電話で記者団に対し、今回の措置は「米国がこれまでに取った中で、どの国も取った中で最も広範な国際的な労働者の権利措置だ」と語った。
同当局者は、新たな関税は、トランプ大統領が昨年国家安全保障を理由に課した「セクション232」関税として知られる鉄鋼とアルミニウムに対する既存の輸入税に「重ねて」適用されるものではないと指摘した。
今回の通商措置は、今年初めに大統領の保護主義的政策が法的に大きな後退を経験した後、トランプ政権がいかに積極的な関税行使を再び強化しているかを浮き彫りにしている。トランプ大統領は長年、関税が歳入を生み出し、外国貿易相手国に対する影響力を得る重要な手段であると宣伝してきたが、関税が米国の輸入業者に課税し、米国の消費者向けの価格を引き上げているという批判を無視してきた。
ホワイトハウスは最近、米国からのブラジルからのほとんどの輸入品に25％の関税を課し、水曜日に発効し、カナダからの幅広い品物に50％の関税を課し、来月から開始する予定だ。
トランプ政権は、対象国が米国との貿易における強制労働行為の利用を効果的に禁止していないとの結論に達した後、6月初旬に次の関税を提案していた。
新たな関税は1974年通商法第301条に基づいて発動されるもので、最高裁判所が2月20日にトランプ大統領の世界的な「解放デー」の義務を打ち消して以来、トランプ大統領が利用してきた貿易手段の1つである。
この裁判での敗訴から数時間後、激怒したトランプ大統領は、1974年の通商法第122条に基づき全世界に10％の関税を課すと述べた。しかし、この関税には150日間のタイマーが付いており、金曜日の東部時間午前0時1分に期限が切れるように設定されていた。
3月、トランプ政権は301条に基づく2つの個別の調査を発表した。強制労働調査と、16カ国による過剰製造能力への懸念を中心とした調査だ。後者の調査はまだ最終決定されていません。
ジェイミーソン・グリア米通商代表部代表は水曜日の上院証言で、「われわれは経済の再産業化を支援し、米国労働者を保護し、賃金を引き上げ、貿易赤字を縮小するため、引き続き関税を発動し、取引交渉を行うことにコミットする」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/trump-tariffs-trade-deadline.html",
    publishedAt: "2026-07-24T13:31:53+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 3,
  },
  {
    id: "charter-sees-further-erosion-of-its-inte-66d23df9",
    title: "Charter sees further ‘erosion’ of its internet business, sending the stock sharply lower",
    titleJa: "チャーターはインターネット事業のさらなる「侵食」を予見し、株価は大幅に下落",
    summaryJa: "同社は40万以上の新しいモバイル回線を引き込んだにもかかわらず、予想よりも多くのブロードバンド加入者を失った。",
    bodyOriginal: `The company lost more broadband subscribers than expected, although it hauled in more than 400,000 new mobile lines.`,
    bodyJa: `同社は40万以上の新しいモバイル回線を引き込んだにもかかわらず、予想よりも多くのブロードバンド加入者を失った。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/charter-sees-further-erosion-of-its-internet-business-sending-the-stock-sharply-lower-13ccadfe?mod=mw_rss_topstories",
    publishedAt: "2026-07-24T13:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-593086",
    readTime: 2,
  },
  {
    id: "the-club-s-top-10-things-to-watch-in-the-465e7851",
    title: "The Club's top 10 things to watch in the stock market Friday",
    titleJa: "金曜日の株式市場でクラブが注目すべきトップ10の事柄",
    summaryJa: "クラブの注目すべきトップ 10 7 月 24 日金曜日 — 今日のニュースレターは、クラブのポートフォリオ分析ディレクターである Jeff Marks によって書かれました。 1. 昨日の原油価格と債券利回りの上昇、およびハイパースケーラーの積極的な AI 投資に対する懸念から株価は下落し、株価は穏やかな寄り付きに向かっています。この強力な横流の組み合わせにより、押し目買いを控えることができました。 2. 昨夜、Club チップメーカーが四半期の暴落を報告した後、Intel 株はわずかに上昇しただけです。エージェントのワークロードにより、AI アクセラレータ (Nvidia の GPU や Google の社内 TPU など) に比べて必要な CPU の数が増加するため、データセンターの CPU の供給が需要に追いつかない。 Intelのサードパーティファウンドリ事業は進展しているが、新規顧客の発表はない。需要に応えるために設備投資は大幅に増加する。 3. クラブ名 Nvidia と Amkor は、次世代 AI およびアクセラレーション コンピューティング向けの高度な半導体パッケージ",
    bodyOriginal: `The Club's top 10 things to watch Friday, July 24 — Today's newsletter was written by Jeff Marks, the Club's director of portfolio analysis. 1. Stocks are headed for a muted open following yesterday's sell-off on rising oil prices and bond yields, and on concerns about hyperscalers' aggressive AI spending. That potent mix of crosscurrents held us back from buying the dip. 2. Intel shares are only modestly higher after the Club chipmaker reported a blowout quarter last night . Supply of data center CPUs can't keep up with demand as agentic workloads increase the number of CPUs needed relative to AI accelerators (like Nvidia's GPUs and Google's in-house TPUs). Intel's third-party foundry business is making progress, but no new customer announcements. Capex to increase significantly to meet demand. 3. Club name Nvidia and Amkor announced a $1.5 billion multiyear strategic partnership to develop advanced semiconductor packaging and testing technologies for next-generation AI and accelerated computing. Shares of Amkor are up over 11% this morning. UBS upgraded Amkor to buy from hold. Price target went to $90 from $80. 4. American Express reported a better-than-expected quarter. But like we heard with Club stock Capital One earlier this week, AXP is reinvesting its profits to fund growth opportunities. Shares fell after the company left its outlook for full-year earnings per share unchanged. 5. SLB shares moved higher after the oilfield services company beat analyst estimates on both revenue and adjusted EPS. Offshore activity in Latin America, Asia, Europe and Africa more than offset disruptions in the Middle East. The company's data center solutions business is on track to exceed $1 billion annualized revenue run rate by the end of the year. 6. Deckers Outdoor shares are lower after reporting in-line sales, a penny beat on EPS, and a small bump to the company's full-year outlook. CEO Stefano Carot said that despite pressure on consumers, he believes Hoka and Uggs will continue taking market share thanks to a "compelling product pipeline." 7. GE Healthcare said CFO Jay Saccaro is stepping down to pursue a role outside the med-tech space. The maker of MRI machines also reported preliminary second-quarter revenue slightly above analyst estimates. The General Electric breakup has created tremendous shareholder value, but GEHC is the laggard of the three entities. GE Aerospace and Club name GE Vernova have been the real winners. 8. Citi placed an "upside 90-day catalyst watch" on Dell , citing great conviction in earnings momentum. Earlier this week, fellow AI server maker Super Micro issued strong preliminary numbers . Jim Cramer said in response that if Super Micro is doing well, then Dell must be doing amazing. 9. Verizon reported a mixed quarter, with a miss on revenue but a small EPS beat. The company raised its full-year adjusted earnings outlook slightly. Postpaid phone net additions of 184,000 was ahead of the 111,000 consensus, per FactSet. Shares aren't doing much premarket. Rival AT & T delivered a strong print Wednesday morning, gaining 3.5% that day. 10. Oracle was awarded a 10-year, $7 billion software contract with the Department of Defense. The stock is up almost 2% this morning. If the gains hold, it would only be Oracle's 10th positive session since June 1. Shares are down over 50% in that stretch. Sign up for my Top 10 Morning Thoughts on the Market email newsletter for free (See here for a full list of the stocks at Jim Cramer's Charitable Trust.) As a subscriber to the CNBC Investing Club with Jim Cramer, you will receive a trade alert before Jim makes a trade. Jim waits 45 minutes after sending a trade alert before buying or selling a stock in his charitable trust's portfolio. If Jim has talked about a stock on CNBC TV, he waits 72 hours after issuing the trade alert before executing the trade. THE ABOVE INVESTING CLUB INFORMATION IS SUBJECT TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY , TOGETHER WITH OUR DISCLAIMER . NO FIDUCIARY OBLIGATION OR DUTY EXISTS, OR IS CREATED, BY VIRTUE OF YOUR RECEIPT OF ANY INFORMATION PROVIDED IN CONNECTION WITH THE INVESTING CLUB. NO SPECIFIC OUTCOME OR PROFIT IS GUARANTEED.`,
    bodyJa: `クラブの注目すべきトップ 10 7 月 24 日金曜日 — 今日のニュースレターは、クラブのポートフォリオ分析ディレクターである Jeff Marks によって書かれました。 1. 昨日の原油価格と債券利回りの上昇、およびハイパースケーラーの積極的な AI 投資に対する懸念から株価は下落し、株価は穏やかな寄り付きに向かっています。この強力な横流の組み合わせにより、押し目買いを控えることができました。 2. 昨夜、Club チップメーカーが四半期の暴落を報告した後、Intel 株はわずかに上昇しただけです。エージェントのワークロードにより、AI アクセラレータ (Nvidia の GPU や Google の社内 TPU など) に比べて必要な CPU の数が増加するため、データセンターの CPU の供給が需要に追いつかない。 Intelのサードパーティファウンドリ事業は進展しているが、新規顧客の発表はない。需要に応えるために設備投資は大幅に増加する。 3. クラブ名 Nvidia と Amkor は、次世代 AI およびアクセラレーション コンピューティング向けの高度な半導体パッケージングおよびテスト技術を開発するための、15 億ドルの複数年にわたる戦略的提携を発表しました。今朝、Amkorの株価は11％以上上昇した。 UBSはAmkorをホールドから購入するよう格上げした。目標株価は80ドルから90ドルに引き上げられた。 4. アメリカン・エキスプレスは予想を上回る四半期を報告しました。しかし、今週初めにクラブ株キャピタルワンで聞いたように、AXPは成長機会に資金を提供するために利益を再投資しています。同社が通期の１株利益見通しを据え置いたことで株価は下落した。 5. 油田サービス会社が売上高と調整後EPSの両方でアナリスト予想を上回ったことを受け、SLB株は上昇した。ラテンアメリカ、アジア、ヨーロッパ、アフリカにおけるオフショア活動は、中東における混乱を補って余りあるものです。同社のデータセンター ソリューション ビジネスは、年末までに年間売上高が 10 億ドルを超える見込みです。 6. デッカーズ アウトドアの株価は、インライン売上高、EPS のわずかな上昇、および同社の通期見通しへのわずかな上昇を報告した後、下落しています。 CEOのステファノ・カロト氏は、消費者へのプレッシャーにもかかわらず、「魅力的な製品パイプライン」のおかげでホカとアグスが引き続き市場シェアを獲得すると信じていると述べた。 7. GEヘルスケアは、最高財務責任者ジェイ・サッカロ氏が医療技術分野以外での役割を追求するために辞任すると述べた。 MRI装置メーカーである同社はまた、第2四半期の売上高がアナリスト予想をわずかに上回る暫定値を報告した。ゼネラル・エレクトリック社の分割は莫大な株主価値を生み出したが、GEHCは3社の中で出遅れている。 GEエアロスペースとクラブ名GE Vernovaが真の勝者となった。 8. シティは、収益の勢いに大きな確信を持っているとして、デルに対して「90日間の上昇要因ウォッチ」を設定した。今週初め、同じ AI サーバー メーカーである Super Micro が強力な暫定数字を発表しました。 Jim Cramer 氏は、Super Micro の業績が好調なら、Dell の業績も素晴らしいに違いないと答えました。 9. Verizon は、売上高は伸びなかったものの、EPS はわずかに上回ったものの、まちまちの四半期となったと報告しました。同社は通年の調整後利益見通しを若干引き上げた。ファクトセットによると、ポストペイド電話の純増数は 184,000 件で、コンセンサスである 111,000 件を上回りました。株価は市場前にはあまり伸びていない。ライバルのAT&Tは水曜朝に好調な業績を発表し、その日は3.5％上昇した。 10. Oracle は国防総省と 10 年間、70 億ドルのソフトウェア契約を締結しました。今朝の株価は約２％上昇した。このまま上昇が続けば、オラクルにとって6月1日以来10回目のプラス取引となる。その間、株価は50％以上下落した。マーケットに関する私のトップ 10 の朝の考え電子メール ニュースレターに無料でサインアップしてください (ジム クレイマー慈善信託の株式の完全なリストについては、ここを参照してください。) ジム クレイマーの CNBC 投資クラブの購読者として、ジムが取引を行う前に取引アラートを受け取ります。ジムは、取引アラートを送信してから 45 分間待ってから、慈善信託のポートフォリオの株式を売買します。ジムが CNBC テレビで株について話した場合、取引アラートを発行してから 72 時間待ってから取引を実行します。上記の投資クラブ情報は、当社の免責事項とともに、当社の利用規約およびプライバシー ポリシーの対象となります。投資クラブに関連して提供された情報をお客様が受領したことによって、受託者としての義務や義務が存在したり、発生したりすることはありません。特定の結果や利益は保証されません。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/the-clubs-top-10-things-to-watch-in-the-stock-market-friday.html",
    publishedAt: "2026-07-24T13:06:26+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "my-second-husband-and-i-have-kids-from-p-447e8494",
    title: "My second husband and I have kids from previous relationships. Should my house go to him or my children if I die first?",
    titleJa: "2番目の夫と私には、以前の交際相手との間にできた子供たちがいます。私が先に死んだ場合、私の家は彼か子供たちのところに行くべきでしょうか？",
    summaryJa: "「私たちは結婚前に持っていたお金で購入した家に住んでいます。」",
    bodyOriginal: `“We live in a house that I purchased entirely with money I had before we were married.”`,
    bodyJa: `「私たちは結婚前に持っていたお金で購入した家に住んでいます。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-have-children-from-my-first-marriage-should-my-second-husband-inherit-my-house-if-i-die-d9bd8687?mod=mw_rss_topstories",
    publishedAt: "2026-07-24T13:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-91798426",
    readTime: 2,
  },
  {
    id: "why-are-uk-fuel-prices-rising-again-8fc7b7c0",
    title: "Why are UK fuel prices rising again?",
    titleJa: "英国の燃料価格が再び上昇しているのはなぜですか?",
    summaryJa: "英国の燃料価格が再び上昇しているのはなぜですか?- 公開されました",
    bodyOriginal: `Why are UK fuel prices rising again?
- Published
UK petrol prices have risen their highest level since mid-June, according to data from motoring organisation RAC, as the US-Israel war with Iran continues to affect drivers' finances.
The price of fuel tends to track the wholesale price of oil and both have been rising for weeks since the collapse of peace talks to end the conflict.
When the conflict began on 28 February, prices surged as the fighting severely disrupted the production and transportation of energy across the Middle East.
Prices then nosedived when US and Iran agreed to a framework deal to end the fighting in June, but wholesale oil has risen above $100 (£75) a barrel again as tensions resurface.
Simon Williams, head of policy at the RAC, said: "Unless the hostilities end soon, it's hard not to see the price of petrol reaching a new Iran war high."
How do wholesale oil prices affect the cost of petrol and diesel at the pump?
Crude oil is a key ingredient in petrol and diesel, which means that higher wholesale costs make filling up a car more expensive.
Analysts say every $10 (£7.53) increase in the oil price pushes up pump prices by roughly 7p a litre.
Since the war began, the price of a barrel of Brent crude – the global benchmark for wholesale oil prices – has been very volatile.
Before the conflict, Brent was about $70 a barrel, but the conflict saw it peak at above $120.
In early July, after the framework deal was signed, prices fell back to near the $70 a barrel mark, but have climbed back up again to above $100 a barrel.
What has happened to petrol prices in the UK?
According to the RAC, the average price of petrol reached an Iran war peak of 159.53p a litre on 28 May, while diesel's highest average price during the conflict was 191.54p a litre on 15 April.
In early July, the RAC said the average price of diesel sank to a low of 150.59p per litre for petrol and 164.52p per litre for diesel.
Since then the prices have been rising and according to its latest data, petrol now costs 156.19p a litre while diesel costs 173.15p a litre.
Despite the conflict, petrol and diesel prices remain below the levels reached in the summer of 2022 following Russia's invasion of Ukraine, when petrol reached 191.5p a litre and diesel hit 199p.
Because transporting oil is a slow process, price movements in the wholesale markets take about a fortnight to show at the pump.
Fuel retailers have denied accusations of price gouging during the conflict. The official markets regulator said it had "not seen evidence of retailers actively changing their pricing strategies to take advantage of the crisis".
A government scheme called Fuel Finder, external lets drivers compare the cost of fuel offered by petrol stations across the UK.
Luke Bosdet, the head of policy at the AA, said the group had been surprised at the speed that prices had fallen and put it down to the scheme.
On 20 May, then Prime Minister Sir Keir Starmer said a planned 5p increase in fuel duty due in September would be postponed until 31 December because of the conflict.
Why has the Iran war had a big impact on oil prices?
The Middle East conflict sent global oil prices soaring as it effectively closed the Strait of Hormuz - one of the world's key water transport routes for oil, liquid natural gas and other essential commodities - limiting global supplies.
About 20% of the world's oil and liquefied natural gas normally passes through the waterway.
Despite the deal between the US and Iran, experts warn a return to normal levels of shipping through the Strait of Hormuz will take time, and the impact of the war will continue to affect the global economy for potentially months to come.
Why and how is US blockading Iranian ports in Strait of Hormuz?
- Published30 April
Oil price predicted to remain above $100 for rest of year
- Published11 May
Where does the UK get its oil and gas?
The UK is heavily reliant on oil and gas imports, with the majority coming from the US and Norway.
The price of oil on the global market determines how much the UK pays for it.
Although the UK does get some oil from the North Sea, most of that is exported for refining elsewhere.
You can also send us your questions by following this link
Reporting by Faarea Masud, Jemma Crew, Alex Daniel, Michael Race, and Mitchell Labiak
Get in touch
How have you been affected by the price rises? Share your experiences
Get our flagship newsletter with all the headlines you need to start the day. Sign up here.`,
    bodyJa: `英国の燃料価格が再び上昇しているのはなぜですか?
- 公開されました
自動車業界団体ＲＡＣのデータによると、米国・イスラエルとイランの戦争がドライバーの財政に影響を及ぼし続けているため、英国のガソリン価格は６月中旬以来の最高水準に上昇した。
燃料価格は石油卸売価格に追随する傾向があり、紛争終結に向けた和平交渉の決裂以来、数週間にわたり両者とも上昇している。
2月28日に紛争が始まると、戦闘により中東全域でエネルギーの生産と輸送が著しく混乱したため、価格が急騰した。
その後、米国とイランが6月に戦闘終結に向けた枠組み協定に合意すると価格は急落したが、緊張が再燃するにつれ原油卸売価格は再び1バレル＝100ドル（75ポンド）を超えた。
ＲＡＣの政策責任者サイモン・ウィリアムズ氏は、「敵対行為がすぐに終わらない限り、ガソリン価格が新たなイラン戦争の最高値に達することは避けられない」と語った。
卸売石油価格はポンプのガソリンとディーゼルのコストにどのような影響を及ぼしますか?
原油はガソリンとディーゼルの重要な成分であるため、卸売コストが高くなると車のガソリン満油の費用も高くなります。
アナリストらによると、原油価格が10ドル（7.53ポンド）上昇するたびに、ポンプの価格は1リットル当たり約7ペンス上昇するという。
戦争が始まって以来、原油卸売価格の世界的な基準であるブレント原油1バレルの価格は非常に不安定だった。
紛争前、ブレント原油は1バレルあたり約70ドルだったが、紛争により最高値は120ドルを超えた。
枠組み合意署名後の7月初旬、価格は1バレル当たり70ドル近くまで下落したが、再び1バレル当たり100ドルを超える水準まで上昇した。
イギリスのガソリン価格はどうなったのでしょうか?
RACによると、ガソリンの平均価格は5月28日、イラン戦争時の最高値である1リットル当たり159.53ペンスに達したが、紛争中のディーゼルの平均価格の最高値は4月15日の1リットル当たり191.54ペンスだった。
RACは7月初旬、ディーゼルの平均価格がガソリンで1リットル当たり150.59ペンス、ディーゼルで1リットル当たり164.52ペンスの安値まで下落したと発表した。
それ以来、価格は上昇しており、最新のデータによると、ガソリンは1リットルあたり156.19ペンス、ディーゼルは1リットルあたり173.15ペンスとなっている。
紛争にもかかわらず、ガソリンとディーゼルの価格は、ロシアのウクライナ侵攻後の2022年夏に達した水準（ガソリンは1リットル当たり191.5ペンス、ディーゼルは199ペンスに達した）を下回ったままである。
石油の輸送には時間がかかるため、卸売市場の価格変動が反映されるまでに約 2 週間かかります。
燃料小売業者は紛争中の価格つり上げの告発を否定している。当局の市場規制当局は「小売業者が危機に乗じて価格戦略を積極的に変更している形跡は見られない」と述べた。
Fuel Finder と呼ばれる政府の制度により、ドライバーは英国全土のガソリン スタンドが提供する燃料のコストを比較できます。
AAの政策責任者であるルーク・ボスデット氏は、同団体は価格下落のスピードに驚き、原因はこの計画にあると述べた。
5月20日、当時のキア・スターマー首相は、9月に予定されていた燃料税の5ペンス引き上げが紛争のため12月31日まで延期されると発表した。
なぜイラン戦争は原油価格に大きな影響を与えたのでしょうか?
中東紛争により、石油、液化天然ガス、その他の必需品の世界の重要な水輸送ルートの一つであるホルムズ海峡が事実上閉鎖され、世界の石油価格が高騰し、世界の供給が制限された。
通常、世界の石油と液化天然ガスの約 20% が水路を通過します。
米国とイラン間の合意にもかかわらず、専門家らは、ホルムズ海峡を通る海運が通常レベルに戻るには時間がかかり、戦争の影響は今後数カ月にわたって世界経済に影響を及ぼし続けると警告している。
米国はなぜ、どのようにホルムズ海峡でイランの港を封鎖しているのか?
- 4 月 30 日発行
原油価格は残りの期間も100ドルを超えると予想
- 5 月 11 日公開
英国はどこから石油とガスを入手しますか?
英国は石油とガスの輸入に大きく依存しており、その大部分は米国とノルウェーからのものです。
世界市場の石油価格によって、英国が石油に支払う金額が決まります。
英国は北海から石油を一部入手していますが、そのほとんどは他の場所で精製するために輸出されています。
このリンクから質問を送信することもできます
ファエリア・マスッド、ジェマ・クルー、アレックス・ダニエル、マイケル・レース、ミッチェル・ラビアクによるレポート
連絡する
価格上昇によりどのような影響を受けましたか?あなたの経験を共有してください
一日の始まりに必要な見出しをすべて掲載した、当社の主力ニュースレターを入手してください。ここからサインアップしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c20zgjzz0e4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-24T10:45:41+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8143/live/f8d0c8b0-7572-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 5,
  },
  {
    id: "watch-another-day-more-trump-tariffs-but-26d3478a",
    title: "Watch: Another day, more Trump tariffs - but are they working?",
    titleJa: "動画: 別の日、トランプ大統領への追加関税 - しかし効果はあるのか?",
    summaryJa: "動画: 別の日、トランプ大統領への追加関税 - しかし効果はあるのか?トランプ大統領の2期目の任期中、関税が大きくニュースになることはなかったが、さらに大量の輸入税が施行されたばかりだ。",
    bodyOriginal: `Watch: Another day, more Trump tariffs - but are they working?
Tariffs have never been far from the headlines during President Trump's second term in office and another raft of these import taxes has just come into force.
So are US households really paying 1.5% more because of them?
The BBC's Samira Hussain explains how tariffs are affecting the US economy, who pays the price, and whether they're meeting their objectives.
Related topics
- Donald TrumpUpdates from your News topics will appear in My News and in a collection on the News homepage.
- United StatesUpdates from your News topics will appear in My News and in a collection on the News homepage.
- Trump tariffsUpdates from your News topics will appear in My News and in a collection on the News homepage.`,
    bodyJa: `動画: 別の日、トランプ大統領への追加関税 - しかし効果はあるのか?
トランプ大統領の2期目の任期中、関税が大きくニュースになることはなかったが、さらに大量の輸入税が施行されたばかりだ。
では、米国の世帯は本当にそれらのせいで 1.5% 多く支払っているのでしょうか?
BBCのサミラ・フセインは、関税が米国経済にどのような影響を与えているのか、その代償を誰が支払っているのか、そして関税がその目標を達成しているのかについて説明します。
関連トピック
- ドナルド トランプニュース トピックの最新情報は、マイ ニュースとニュース ホームページのコレクションに表示されます。
- 米国ニュース トピックの更新は、マイ ニュースおよびニュース ホームページのコレクションに表示されます。
- トランプ関税ニュース トピックの更新は、マイ ニュースとニュース ホームページのコレクションに表示されます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/videos/c5yw2xgnv2jo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-24T10:21:31+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e698/live/f875fc40-873e-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 2,
  },
  {
    id: "wise-group-shares-tank-after-u-s-bank-ch-b4d086c0",
    title: "Wise Group shares tank after U.S. bank charter rejected. What’s next for the fintech.",
    titleJa: "米国の銀行認可が拒否された後、ワイズグループはタンク株を保有。フィンテックの次は何だろう。",
    summaryJa: "英国に本社を置き、米国に上場しているフィンテック企業であるワイズ・グループの国立銀行認可申請が却下されたため、金曜日、ワイズ・グループの株価は最大11％下落した。",
    bodyOriginal: `Wise Group shares fell as much as 11% on Friday as the U.K.-headquartered, U.S.-listed fintech had its application for a national bank charter denied.`,
    bodyJa: `英国に本社を置き、米国に上場しているフィンテック企業であるワイズ・グループの国立銀行認可申請が却下されたため、金曜日、ワイズ・グループの株価は最大11％下落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/wise-group-shares-tank-after-u-s-bank-charter-rejected-whats-next-for-the-fintech-91be430f?mod=mw_rss_topstories",
    publishedAt: "2026-07-24T08:06:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-19372464",
    readTime: 2,
  },
  {
    id: "trump-considering-a-massive-attack-on-ir-1111a458",
    title: "Trump considering a ‘massive attack’ on Iran as Tehran labels UK ‘accomplice’ to America",
    titleJa: "トランプ大統領、イランへの「大規模攻撃」を検討、イラン政府が英国を米国の「共犯者」と認定",
    summaryJa: "中東の紛争が紅海の新たな戦場にまで拡大したことを受け、ドナルド・トランプ米大統領は、イランに「大規模な攻撃」を開始するかどうかについて近く決定すると述べた。大統領は木曜日、アクシオスとのインタビューで、提案されている攻撃はこれまでの戦争で見られたものよりも大規模なものになるとし、イランは「まだ十分な苦痛を受けていない」と述べた。",
    bodyOriginal: `U.S. President Donald Trump said he will soon make a decision on whether to launch a "massive attack" on Iran after the conflict in the Middle East extended to a new battleground in the Red Sea.
Speaking to Axios on Thursday, the president said the proposed strikes would be bigger than anything seen in the war so far, and that Iran has not "received enough pain yet."
"I am considering a massive attack. Bigger than ever before. I am close to making a decision. We are all set for it," Trump said in the interview.
U.S. forces have pummeled Iranian targets over the past two weeks, with Central Command completing a 13th consecutive night of strikes overnight.
Trump did not give a deadline for when he would make a decision about a major attack on Iran, according to Axios. He said that Israel would join the operation "in two minutes if I ask them to," but that Israel would potentially face retaliation from Iran if it did take part.
The president also repeated that the Iranian side "want to negotiate," but told the outlet Tehran is not yet ready to make a deal with the U.S.
On Thursday, Trump said he would hold Iran responsible for further attacks by Yemen's Tehran-backed Houthis, after the militant group claimed to have struck two Saudi Arabian oil tankers in the Red Sea.
"If they do this again, the U.S. will hold Iran responsible, in that the Houthis are a Surrogate and/or Proxy of Iran, and major military punishment will be inflicted upon Iran and, of course, the Houthis, themselves," he said in a Truth Social post.
The Houthis declared a maritime embargo against Saudi Arabia on Monday, threatening to cut off the kingdom's oil exports through the Red Sea and the Bab el-Mandeb strait.
Iran's Revolutionary Guard said Thursday that it had attacked U.S. military facilities at an American military base in Jordan, according to state media.
Speaking to reporters on Thursday, U.S. Secretary of State Marco Rubio labeled Trump's approach to the Iran war as "a head for an eye."
"Honestly, that's what it's going to be," he said. "They will pay a very heavy price for the things they're doing. They're already paying a very heavy price."
Oil prices fell by around 1% on Friday morning, but were still on course for a weekly rise of 10%. Global benchmark Brent crude futures held above the $99-per-barrel mark, while U.S. West Texas Intermediate crude futures were trading at $91.08 a barrel.
Iran threatens Europe
Meanwhile, the U.K. said it "stands ready 24/7 to defend itself" after Iran labeled the country an "accomplice" to the U.S. over the use of British military bases by American forces.
Shortly after the start of the U.S.-Iran war, the U.K. gave permission for the U.S. to use British bases for defensive operations. That agreement was extended last week, and has not been changed by the U.K.'s new Prime Minister Andy Burnham.
Iran's Ministry of Foreign Affairs said in a statement on Thursday that "any party that, in any manner, participates in military aggression against Iran will bear responsibility for the consequences and repercussions of its decision."
"The British government has chosen to align itself with the aggressors, reducing its standing to that of an accomplice of the United States and Israel in a brutal war against the Iranian nation," it added.
In a separate statement, an Iranian official warned any European nation that providing military bases or territory to the United States would place European countries "in the ranks of the aggressors," according to state media.`,
    bodyJa: `中東の紛争が紅海の新たな戦場にまで拡大したことを受け、ドナルド・トランプ米大統領は、イランに「大規模な攻撃」を開始するかどうかについて近く決定すると述べた。
大統領は木曜日、アクシオスとのインタビューで、提案されている攻撃はこれまでの戦争で見られたものよりも大規模なものになるとし、イランは「まだ十分な苦痛を受けていない」と述べた。
トランプ大統領はインタビューで「大規模な攻撃を検討している。これまでより大規模だ。決定に近づいている。準備は整っている」と語った。
米軍は過去２週間にわたりイランの目標を砲撃し、中央軍は１３夜連続の夜間攻撃を完了した。
アクシオスによると、トランプ大統領はイランへの大規模攻撃についていつ決定するかについて期限を示さなかった。同氏は、イスラエルは「私が要請すれば2分以内に」作戦に参加するが、もし参加すればイランからの報復に直面する可能性があると述べた。
大統領はまた、イラン側は「交渉したい」と繰り返したが、イラン政府はまだ米国と合意する準備ができていないと同メディアに語った。
木曜日、トランプ大統領は、イエメンのテヘランが支援するフーシ派が紅海でサウジアラビアの石油タンカー２隻を攻撃したと主張したことを受け、イエメンのイラン支援組織フーシ派によるさらなる攻撃についてイランの責任を問うと述べた。
同氏はトゥルース・ソーシャルへの投稿で、「もし彼らが再び同じことをすれば、米国はイランの責任を問うだろう。フーシ派はイランの代理および／または代理人であるという点で、イランと、もちろんフーシ派自身に重大な軍事的懲罰が科されることになるだろう」と述べた。
フーシ派は月曜日、サウジアラビアに対する海上禁輸を宣言し、紅海とバブ・エル・マンデブ海峡を通じたサウジの石油輸出を遮断すると脅した。
国営メディアによると、イラン革命防衛隊は木曜日、ヨルダンにある米軍基地の米軍施設を攻撃したと発表した。
マルコ・ルビオ米国務長官は木曜日、記者団に対し、イラン戦争に対するトランプ大統領のアプローチを「目には頭を」と非難した。
「正直に言って、そうなるだろう」と彼は言った。 「彼らは自分たちのやっていることに対して非常に大きな代償を払うことになるでしょう。彼らはすでに非常に大きな代償を払っているのです。」
原油価格は金曜朝に約１％下落したが、依然として週間で１０％上昇する見通しだった。世界のベンチマークであるブレント原油先物は1バレル当たり99ドルを超えて推移し、米国のウェスト・テキサス・インターミディエイト原油先物は1バレル当たり91.08ドルで取引されていた。
イランがヨーロッパを脅かす
一方、英国は、イランが米軍による英国軍事基地の使用を巡り英国を米国の「共犯者」と認定したことを受けて、「自国を守るために年中無休の準備ができている」と述べた。
米イラン戦争の開始直後、英国は米国が防衛作戦のために英国基地を使用することを許可した。この協定は先週延長され、英国の新首相アンディ・バーナムによって変更されていない。
イラン外務省は木曜日の声明で、「いかなる形であれ、イランに対する軍事侵略に参加する当事者は、その決定の結果と波及について責任を負う」と述べた。
さらに、「英国政府は侵略者と連携することを選択し、自らの立場をイラン国家に対する残忍な戦争における米国とイスラエルの共犯者にまで低下させた」と付け加えた。
国営メディアによると、イラン当局者は別の声明で、米国に軍事基地や領土を提供すれば欧州諸国を「侵略者の仲間入り」にすると欧州諸国に警告した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/us-iran-war-trump-hormuz-houthis.html",
    publishedAt: "2026-07-24T07:57:12+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "volkswagen-cfo-addresses-plant-closures-9c656a7c",
    title: "Volkswagen CFO addresses plant closures, job losses as profits sink",
    titleJa: "フォルクスワーゲンの最高財務責任者（CFO）、利益減少による工場閉鎖と雇用の喪失に対処",
    summaryJa: "フォルクスワーゲンは金曜日、予想を下回る第2四半期利益を報告し、ドイツの自動車大手が事業の抜本的な見直しに向けた基礎を築く中、2026年の売上収益増加への期待を断念した。LSEGがまとめたコンセンサスによると、欧州最大の自動車メーカーである同社の4～6月期の営業利益は35億ユーロ（39億8000万ドル）で、前年同期比10％近く減少し、予想の43億ユーロを下回った。",
    bodyOriginal: `Volkswagen reported weaker-than-expected second-quarter profits on Friday and scrapped hope for sales revenue growth in 2026, as the German auto giant lays the groundwork for a radical overhaul of the business.
Europe's biggest carmaker posted an operating profit of 3.5 billion euros ($3.98 billion) for the April to June period, down nearly 10% from a year ago and missing expectations of 4.3 billion euros, according to an LSEG-compiled consensus.
The company also flagged it expects sales revenue in 2026 to see a decline of up to 3% this year, versus a previous forecast of sales revenue growth of up to 3%.
The results come shortly after the company confirmed it is looking to cut up to 100,000 jobs, twice as many as previously stated, as it seeks to counter a profit slump amid billions of euros in tariff costs and intensifying competition from Chinese car brands.
In a widely reported memo to staff earlier this month, CEO Oliver Blume said that the group's costs were 20% higher than comparable businesses and the company would therefore need to reduce costs even further.
Volkswagen's CEO reportedly said the company had been unable to confirm alternative uses for four German factories previously threatened with closure. These refer to Volkswagen's plants in Hanover, Zwickau, Emden, and the group's Audi facility in Neckarsulm.
The automaker had agreed a deal with unions in late 2024 to avoid factory closures in Germany and rule out compulsory redundancies until the end of 2030.
Shares of Volkswagen slipped 3% on Friday morning. The stock is down nearly 30% year-to-date.
'We have to do a second step of restructuring'
Volkswagen Chief Financial Officer Arno Antlitz said the auto industry has faced substantial challenges over the past 12 months, citing the heavy burden of tariff costs, the rapid growth of China's domestic premium car market and the rapidly growing number of car exports from Beijing to Europe.
"This leads to this weight on our margin, a margin of roughly 4% is clearly a wake-up call that we have to do a second step of restructuring," Antlitz told CNBC's Annette Weisbach on Friday.
Asked whether the company may look to outsource plant capacity to the defense industry to stave off closures, Antlitz replied: "There are various options. And look, I'm not looking for job cuts per se and I'm not looking for plant closures per se."
He continued: "We want to reduce our cost structure and we want to increase productivity and increase the capacity utilization of our plants. And if there are better options then we will obviously look into that."
Antlitz said it is "much better" for the company to find an alternative solution to plant closures.
'An unprecedented risk scenario'
Volkswagen said in April that it would end production of the ID.4 electric sports utility vehicle out of its Tennessee plant amid a challenging U.S. environment for EVs.
Volkswagen's Blume said Friday that the company had managed to offset "continued unavoidable headwinds" in the double-digit billions.
"At the same time, the environment for the automotive industry remains extremely challenging: geopolitical crises, trade conflicts, high regulatory requirements, volatile markets and intensified competition," Blume said in a statement.
"In an unprecedented risk scenario, Volkswagen Group enters the next phase of its transformation – from a position of strength and with a clear understanding of the opportunities ahead," he added.`,
    bodyJa: `フォルクスワーゲンは金曜日、予想を下回る第2四半期利益を報告し、ドイツの自動車大手が事業の抜本的な見直しに向けた基礎を築く中、2026年の売上収益増加への期待を断念した。
LSEGがまとめたコンセンサスによると、欧州最大の自動車メーカーである同社の4～6月期の営業利益は35億ユーロ（39億8000万ドル）で、前年同期比10％近く減少し、予想の43億ユーロを下回った。
同社はまた、2026年の売上収益が最大3％増加するとの従来予想に対し、今年は最大3％減少するとの見通しを示した。
この結果は、数十億ユーロの関税コストと中国自動車ブランドとの競争激化による利益不振に対抗するため、同社が前述の2倍である最大10万人の人員削減を検討していることを確認した直後に発表された。
今月初めに広く報道された従業員宛てのメモの中で、最高経営責任者（CEO）のオリバー・ブルーム氏は、グループのコストは同等の企業よりも20％高いため、同社はさらにコストを削減する必要があると述べた。
フォルクスワーゲンの最高経営責任者（CEO）は、以前に閉鎖の危機にさらされていたドイツの4つの工場の代替用途を確認できていないと述べたと伝えられている。これらは、ハノーバー、ツヴィッカウ、エムデンにあるフォルクスワーゲンの工場、およびネッカーズルムにあるグループのアウディ施設を指します。
同社は2024年末にドイツでの工場閉鎖を回避し、2030年末までの強制解雇を除外する協定を労働組合と合意していた。
フォルクスワーゲンの株価は金曜朝に３％下落した。株価は年初来で30％近く下落している。
「リストラの第二段階を行う必要がある」
フォルクスワーゲンのアルノ・アントリッツ最高財務責任者（ＣＦＯ）は、関税コストの重荷、中国国内の高級車市場の急速な成長、北京から欧州への自動車輸出台数の急速な増加などを挙げ、自動車業界は過去１２カ月間、大きな課題に直面していると述べた。
アントリッツ氏は金曜日、CNBCのアネット・ワイスバッハに対し、「これが当社の利益率の重みにつながっている。約4％の利益率は明らかにリストラの第2段階を行わなければならないという警鐘だ」と語った。
閉鎖を回避するために工場の生産能力を防衛産業に委託することを検討する可能性があるのか​​との質問に対し、アントリッツ氏は「さまざまな選択肢がある。そしてほら、私は人員削減そのものを求めているわけではないし、工場閉鎖そのものを求めているわけでもない」と答えた。
同氏はさらに、「私たちはコスト構造を削減したいと考えており、生産性を向上させ、工場の稼働率を高めたいと考えています。そして、より良い選択肢があるのであれば、当然それを検討するつもりです。」と述べた。
アントリッツ氏は、工場閉鎖に代わる解決策を見つけることが同社にとって「はるかに良い」と述べた。
「前例のないリスクシナリオ」
フォルクスワーゲンは4月、米国のEV環境が厳しい中、テネシー工場でのID.4電気スポーツ多目的車の生産を終了すると発表した。
フォルクスワーゲンのブルーメは金曜日、同社が二桁の数十億ドル規模の「避けられない逆風を継続」することに成功したと述べた。
「同時に、地政学的な危機、貿易紛争、高い規制要件、不安定な市場、競争の激化など、自動車産業を取り巻く環境は依然として極めて厳しい」とブルーメ氏は声明で述べた。
同氏はさらに、「前例のないリスクシナリオの中で、フォルクスワーゲン・グループは、強固な立場と今後の機会を明確に理解した上で、変革の次の段階に入る」と付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/volkswagen-earnings-autos-germany.html",
    publishedAt: "2026-07-24T07:56:12+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 4,
  },
  {
    id: "south-korea-s-president-invokes-dramatic-4ade0733",
    title: "South Korea's president invokes dramatic Japan realty crash to push domestic property agenda",
    titleJa: "韓国大統領、国内の不動産政策を推進するために日本の不動産の劇的な暴落を引き合いに出す",
    summaryJa: "韓国の李在明大統領は1990年代初頭の日本の画期的な不動産暴落を引き合いに出し、住宅部門の安定化を目的とした税制改正の準備を進める中、ソウルの不動産市場への懸念を煽った。CNBCの翻訳によると、リー首相は「相当数の人々」が日本が日本の「失われた」20年か30年に直面するのではないかと懸念していると語った。リー氏は、実物資産と株式市場の暴落を受けて成長が鈍化した日本の「失われた20年」について言及していた。",
    bodyOriginal: `South Korean President Lee Jae Myung invoked Japan's epochal property crash in the early 1990s, stoking concerns about Seoul's real estate market as he prepares to revise taxes aimed at stabilizing the housing sector.
Lee said "quite a few people" were concerned the country could face Japan's "lost" 20 or 30 years, according to a CNBC translation. Lee was referring to Japan's "lost decades," when growth slowed following a real asset and stock market crash.
He pointed out in a public discussion on real estate policy Thursday that Tokyo's housing market had "burst like a balloon" in the early 1990s, as he sought to highlight South Korea's overheating real estate market.
Real estate accounts for the largest share of South Korean household wealth, Lee added, saying data shows that South Korea is among the countries with the highest proportion of household wealth concentrated in real estate globally.
As of end-March 2025, real assets accounted for 75.8% of Korean household assets, compared with 24.2% for financial assets.
The South Korean president has a history of making bold calls.
Ahead of the 2025 presidential election, when the benchmark Kospi index was near 2,500, Lee, then a candidate, reportedly set a target of 5,000 for the Kospi during his term by pledging to resolve the so-called "Korea discount."
The Kospi briefly crossed 5,000 in January 2026, just over six months after he took office, riding the AI-powered chip boom.
Lee's government has tried to steer household wealth away from an overheated housing sector and into financial markets, a strategy which has only partially worked.
The South Korean benchmark now hovers at around 6,700, having experienced volatile swings due to the heavy dependence on heavyweights Samsung Electronics and SK Hynix.
Concerns are overblown
Economists told CNBC that the comparison with Japan overstates the immediate danger.
"I think the probability of a real asset bubble burst in Korea is limited," Kang Min Joo, senior economist for South Korea and Japan at ING, told CNBC.
She said that mortgage lending conditions have been relatively tight for several years, and authorities have maintained strict controls on loan-to-valuation and debt-to-income ratios. "While the LTV ratio was previously as high as 80%, it has fallen to below 40% and lower in Seoul area."
The household debt-to-GDP ratio in the country stands at 90.14 as of 2024. Although it has fallen from the record high of 98.67 in 2021, it still is the second highest in Asia behind Australia.
Lee's comments reflect concerns about the recent rise in housing prices, rather than a real asset bubble is about to burst, Kang said.
That view is also shared by Gareth Leather, senior economist for Asia at Capital Economics, who said "fears of a bubble appear exaggerated."
He pointed out that only property prices in Seoul are rising rapidly, but even in the capital, they are only 10% above the level they were at in January 2022. In cities like Busan, prices have fallen to almost 80% of January 2022 prices.
Leather said that risks to financial stability are also limited by the fact that house buyers are required to put down a large down payment, "so the risks of them getting into negative equity and the banks getting into difficulty are small."
Experts said that while South Korea is unlikely to see a dual asset and market collapse like Japan in 1990, the country shares several financial and demographic characteristics with Japan.
Ma Tieying, senior economist at DBS Group Research, said South Korea has as a high credit-to-GDP ratio and stock market capitalization, similar to Japan pre-crash, which leaves it exposed to higher rates, tighter credit and global shocks.
But Korea is not experiencing large capital inflows or persistent currency appreciation seen in Japan a few years before the bubble burst, giving the Bank of Korea greater flexibility to calibrate policy.
Ma said the central bank has also responded pre-emptively to inflation and financial imbalances than Japan did before its bubble burst.
Following a period of extreme speculation in real estate and stocks during the 1980s, Japan saw a financial market implosion in the 1990s when its central bank started raising interest rates in December 1989, starting decades of slow growth.
— CNBC's Jenny Lee contributed to this report.`,
    bodyJa: `韓国の李在明大統領は1990年代初頭の日本の画期的な不動産暴落を引き合いに出し、住宅部門の安定化を目的とした税制改正の準備を進める中、ソウルの不動産市場への懸念を煽った。
CNBCの翻訳によると、リー首相は「相当数の人々」が日本が日本の「失われた」20年か30年に直面するのではないかと懸念していると語った。リー氏は、実物資産と株式市場の暴落を受けて成長が鈍化した日本の「失われた20年」について言及していた。
同氏は木曜日の不動産政策に関する公開討論会で、韓国の不動産市場の過熱を強調しようとして、東京の住宅市場が1990年代初頭に「風船のように破裂」したと指摘した。
リー氏はさらに、韓国の家計資産の中で不動産が最大の割合を占めており、データによると韓国は世界的に家計資産の中で不動産に集中している割合が最も高い国の一つであると述べた。
2025年3月末時点で、韓国の家計資産に占める不動産資産の割合は75.8％、金融資産の割合は24.2％となっている。
韓国大統領には大胆な発言をしてきた歴史がある。
2025年の大統領選挙を前に、基準となるコスピ指数が2,500近くにあったとき、当時候補者だった李氏は、いわゆる「コリアディスカウント」を解決すると公約し、任期中のコスピ指数の目標を5,000に設定したと伝えられている。
AIを活用したチップブームに乗って、同氏の就任からわずか半年余り後の2026年1月に、コスピは一時的に5,000を超えた。
リー政権は家計の富を過熱する住宅部門から金融市場に誘導しようとしているが、この戦略は部分的にしか機能していない。
韓国のベンチマークは、有力企業であるサムスン電子とSKハイニックスへの依存度が高いために不安定な変動を経験しており、現在6,700付近で推移している。
懸念は誇張されすぎている
経済学者らはCNBCに対し、日本との比較は差し迫った危険を誇張していると語った。
ＩＮＧの韓国・日本担当シニアエコノミスト、カン・ミンジュ氏はＣＮＢＣに対し、「韓国で実物資産バブルが崩壊する可能性は限定的だと思う」と語った。
同氏は、住宅ローンの融資条件はここ数年比較的厳しく、当局は融資対評価額や負債対収益の比率に対する厳格な管理を維持していると述べた。 「以前はLTV比率が80％にも達していましたが、ソウル地域では40％以下にまで低下しました。」
同国の家計負債対GDP比は2​​024年時点で90.14となっている。過去最高だった2021年の98.67からは低下したものの、依然としてオーストラリアに次いでアジアで2番目に高い水準にある。
カン氏は、リー氏のコメントは不動産バブルが崩壊しようとしているというよりも、最近の住宅価格の上昇に対する懸念を反映していると述べた。
キャピタル・エコノミクスのアジア担当シニアエコノミスト、ギャレス・レザー氏も同様の見方をしており、「バブルの懸念は誇張されているようだ」と述べた。
同氏は、ソウルの不動産価格だけが急速に上昇しているが、首都圏でさえ2022年1月の水準を10％上回るに過ぎず、釜山のような都市では2022年1月の価格の80％近くまで下落していると指摘した。
レザー氏は、住宅購入者が多額の頭金を支払う必要があるという事実によって金融安定へのリスクも限定されていると述べ、「そのため、住宅購入者がマイナス資本に陥り、銀行が困難に陥るリスクは小さい」と述べた。
専門家らは、韓国が1990年の日本のような二重資産と市場の崩壊を経験する可能性は低いが、この国は財政面や人口統計上のいくつかの特徴を日本と共有していると述べた。
ＤＢＳグループ・リサーチのシニアエコノミスト、マー・ティイン氏は、韓国は金融危機前の日本と同様に対ＧＤＰ信用比率と株式時価総額が高く、そのため金利上昇、信用引き締め、世界的なショックにさらされていると述べた。
しかし、韓国はバブル崩壊の数年前に日本で見られたような大規模な資本流入や持続的な通貨高を経験しておらず、韓国銀行が政策を調整する柔軟性が高まっている。
馬氏はまた、人民銀行はバブル崩壊前の日本よりもインフレや金融不均衡に対して先手を打って対応してきたと述べた。
1980年代の不動産と株式への極端な投機の時代を経て、日本は1990年代に金融市場の崩壊を経験し、中央銀行が1989年12月に利上げを開始し、数十年にわたる低成長が始まった。
— CNBC の Jenny Lee がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/south-korea-property-bubble-japan-lost-decades.html",
    publishedAt: "2026-07-24T07:07:07+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "pentagon-lowers-official-iran-war-death-5affc36e",
    title: "Pentagon lowers official Iran war death toll, omitting four killed this month",
    titleJa: "国防総省、今月死亡した4人を除外し公式のイラン戦争死者数を削減",
    summaryJa: "国防総省の死傷者分析システムによると、トランプ政権が今月死亡した軍人４人を集計から外したことを受け、国防総省はイラン戦争による公式死者数を１日で１８人から１４人に引き下げた。国防総省の死傷者データベースによると、合計14人の死亡者のうち7人が「敵対的」に分類されていた。ニューヨーク・タイムズ紙は先にこの数の変化を報じた。",
    bodyOriginal: `The Pentagon lowered its official death toll for the Iran war to 14 from 18 in the space of a day, after the Trump administration removed four service members killed this month from the count, according to the defense casualty analysis system.
The Pentagon's casualty database showed seven of the 14 total deaths were classified as "hostile." The New York Times reported the change in count earlier.
Three military officials told the Times that the four service members killed this past weekend — three in Jordan and one in northern Iraq — were struck from the list because their deaths came after President Donald Trump declared a ceasefire in April. All of the deaths listed on Thursday U.S. time on the website, which said it was updated as of Wednesday, occurred in March.
The Pentagon and the State Department did not immediately respond to CNBC's requests for comment.
The acting press secretary for the Pentagon, Joel Valdez, attributed the change to "temporary data disruptions" on the department's casualty website that he said would be fixed quickly, according to the Times.
The revision came amid scrutiny of the administration's handling of casualty data as the Middle East conflict drags on.
Rep. Adam Smith (D-Wash.) said on Monday that Trump has not shared Iran war casualty statistics with Congress and that "there has been no transparency from the President or the Pentagon about the full extent of equipment losses and casualty statistics."
The Pentagon has released little on U.S. military strategy since the ceasefire collapsed and hasn't held a major briefing on the war since early May.
Trump himself has used the higher figure for the death toll. At an event on Thursday, he said, "I had a very sad day yesterday. I went to Dover, four great American patriots killed. That's 18 … and one is too many, but it's 18."`,
    bodyJa: `国防総省の死傷者分析システムによると、トランプ政権が今月死亡した軍人４人を集計から外したことを受け、国防総省はイラン戦争による公式死者数を１日で１８人から１４人に引き下げた。
国防総省の死傷者データベースによると、合計14人の死亡者のうち7人が「敵対的」に分類されていた。ニューヨーク・タイムズ紙は先にこの数の変化を報じた。
3人の軍関係者はタイムズに対し、先週末に殺害された4人の軍人（3人はヨルダンで、1人はイラク北部で）は、ドナルド・トランプ大統領が4月に停戦を宣言した後に死亡したため、リストから外されたと語った。水曜日の時点で更新されたとウェブサイトに米国時間木曜日にリストされた死亡者はすべて3月に発生した。
国防総省と国務省はCNBCのコメント要請にすぐには応じなかった。
タイムズ紙によると、国防総省のジョエル・バルデス報道官代理は、この変更は同省の死傷者ウェブサイト上の「一時的なデータ障害」によるものであり、すぐに修正されるだろうと述べた。
この改定は、中東紛争が長引く中、政府による死傷者データの扱いが精査される中で行われた。
アダム・スミス下院議員（民主党、ワシントン州）は月曜日、トランプ大統領はイラン戦争死傷者数の統計を議会と共有しておらず、「装備品の損失や死傷者数の統計の全容について大統領や国防総省から透明性がなかった」と述べた。
停戦が崩壊して以来、国防総省は米国の軍事戦略についてほとんど発表しておらず、5月初旬以降、戦争に関する大規模な会見も開催していない。
トランプ氏自身は死者数としてこれより高い数字を使っている。木曜日のイベントで同氏は、「昨日はとても悲しい日を過ごした。ドーバーに行ったら、アメリカの偉大な愛国者4人が亡くなった。それは18人だ…1人は多すぎるが、それでも18人だ」と語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/pentagon-removed-four-official-iran-war-death-toll.html",
    publishedAt: "2026-07-24T06:09:43+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "trump-s-new-global-tariff-draws-rebukes-e1105770",
    title: "Trump's new global tariff draws rebukes from trade partners over forced-labor justification",
    titleJa: "トランプ大統領の新たな世界共通関税は強制労働の正当化をめぐり貿易相手国からの非難を招く",
    summaryJa: "キャンベラからブラジリアまでの米国の貿易相手国は、ドナルド・トランプ大統領の新たな世界共通関税の背後にある強制労働の根拠を拒否しているが、大半は報復ではなく交渉を続ける姿勢を示している。米通商代表部は木曜日、1974年通商法第301条に基づいて行動を起こし、米国政府が強制労働で作られた製品に対する禁制の賦課と執行を怠ったとして60カ国に関税を課した。",
    bodyOriginal: `U.S. trading partners from Canberra to Brasília have rejected the forced-labor rationale behind President Donald Trump's new global tariffs, while most signaled they would keep negotiating rather than retaliate.
The Office of the U.S. Trade Representative on Thursday took action under Section 301 of the Trade Act of 1974, imposing tariffs on 60 economies for what Washington called their failure to impose and enforce bans on goods made with forced labor.
The duties — 10% for partners that have adopted or committed to import prohibitions, 12.5% for those that haven't — cover the top 60 US trade partners and 99.4% of American imports.
The measure replaces a temporary 10% global tariff imposed under Section 122 of the trade act, which expires July 24, a stopgap put in place after the Supreme Court ruled Trump's emergency-powers tariffs unlawful in February. The forced-labor probes give the administration a more durable legal foundation for a baseline tariff that the courts had challenged.
"These tariffs are unjustified, inconsistent with our free trade agreement, and should be removed," Australian Trade Minister Don Farrell said in a statement. "Australia's measures to combat forced labor and modern slavery are among the strongest in the world, and we are recognized globally, including in the U.S., for our leadership."
Brazil's government called the tariffs "arbitrary" and "unjustified." President Luiz Inácio Lula da Silva said he remained open to negotiations but that Brazil would seek other markets if it couldn't sell into the U.S. The new duty stacks on a separate 25% Section 301 tariff imposed on Brazilian goods this month, rebuilding a 37.5% barrier — close to the 50% rate struck down as unlawful last year.
Chile's government said the measure was inconsistent with the country's labor standards and the technical, political and legal evidence it submitted throughout the investigation, according to a statement from the trade undersecretariat in Santiago. It noted the U.S. resolution doesn't allege Chile exports goods made with forced labor, and said it would press for exclusions covering key export products.
Canada, placed in the lower 10% tier with an exemption for USMCA-compliant goods, struck the mildest tone. The move "is not unexpected," Minister for Canada-U.S. Trade Dominic LeBlanc said in a statement, adding that Ottawa shares Washington's objective on forced labor and would "continue engaging constructively" in the coming weeks.
New Zealand's foreign ministry said in a market report that the trade minister made clear Wellington disagrees with the investigation's findings and will continue to register that position with the U.S. government. Existing exemptions covering roughly 30% of New Zealand's U.S.-bound exports, including beef and kiwifruit, remain unchanged.
No major partner has announced countermeasures over the forced-labor tariffs.
The investigation is "not a labor-standards exercise but a mechanism for exporting America's import ban on Chinese goods, as well as an attempt to recreate the tariff regime struck down by the Supreme Court," the Peterson Institute for International Economics wrote earlier this week.`,
    bodyJa: `キャンベラからブラジリアまでの米国の貿易相手国は、ドナルド・トランプ大統領の新たな世界共通関税の背後にある強制労働の根拠を拒否しているが、大半は報復ではなく交渉を続ける姿勢を示している。
米通商代表部は木曜日、1974年通商法第301条に基づいて行動を起こし、米国政府が強制労働で作られた製品に対する禁制の賦課と執行を怠ったとして60カ国に関税を課した。
この関税は、輸入禁止を採用または約束した相手国には10％、そうでない相手国には12.5％で、米国の貿易相手国上位60カ国と米国の輸入品の99.4％が対象となる。
この措置は、7月24日に期限切れとなる通商法第122条に基づいて課せられた世界全体への10％の暫定関税に代わるもので、2月に最高裁判所がトランプ大統領の緊急権限関税は違法との判決を下した後に設けられた一時しのぎである。強制労働調査は、裁判所が異議を申し立てていた基本関税に対するより耐久性のある法的基盤を政権に与えるものである。
オーストラリアのドン・ファレル貿易相は声明で「これらの関税は不当であり、自由貿易協定に違反しており、撤廃されるべきだ」と述べた。 「強制労働と現代の奴隷制度と闘うオーストラリアの対策は世界でも最も強力なものの一つであり、そのリーダーシップは米国を含めて世界的に認められている。」
ブラジル政府は、関税は「恣意的」で「不当」だと主張した。ルイス・イナシオ・ルーラ・ダ・シルバ大統領は、交渉には引き続き応じるが、米国に販売できない場合はブラジルは他の市場を模索すると述べた。新たな関税は、今月ブラジル製品に課せられる第301条25％の追加関税に重ねられ、昨年違法として取り下げられた50％に近い37.5％の壁を再構築する。
サンティアゴの通商次官庁の声明によると、チリ政府は、この措置は同国の労働基準や調査を通じて提出した技術的、政治的、法的証拠と矛盾していると述べた。米国の決議はチリが強制労働で作られた製品を輸出していると主張していないことを指摘し、主要な輸出製品を対象とした除外を求めると述べた。
カナダは、USMCA準拠の商品が免除され、下位10%層に位置しているが、最も穏やかな態度をとった。ドミニク・ルブランカナダ・米国貿易相は声明でこの動きは「予想外ではない」と述べ、オタワは強制労働に関する米国の目標を共有しており、今後数週間は「建設的な関与を続ける」と付け加えた。
ニュージーランド外務省は市場レポートの中で、ウェリントン貿易相が調査結果に同意しないことを明らかにしており、今後もその立場を米国政府に登録していくつもりだと市場レポートで述べた。牛肉やキウイフルーツを含むニュージーランドの米国向け輸出品の約30％を対象とする既存の免除措置は変更されない。
主要パートナーは強制労働関税を巡る対抗措置を発表していない。
ピーターソン国際経済研究所は今週初め、この調査は「労働​​基準の行使ではなく、米国による中国製品の輸入禁止措置を輸出するためのメカニズムであり、最高裁判所によって打ち消された関税制度を再現する試みでもある」と書いている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/trump-global-tariffs-trade-imbalance-forced-labor.html",
    publishedAt: "2026-07-24T03:15:46+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "u-s-other-nations-back-open-source-ai-wi-62fb75b3",
    title: "U.S., other nations back open-source AI with 'strong security' at China summit",
    titleJa: "米国とその他の国、中国首脳会談で「強力なセキュリティ」でオープンソースAIを支持",
    summaryJa: "中国成都 — 企業がより強力なオープンソースモデルをリリースするにつれ、各国政府は人工知能を制御したいとの考えを強めていることが、新たな多国間声明で示された。米国や中国を含むAPEC加盟21カ国はAIに関する「成都声明」を発表し、「セキュリティ、データ保護、知的財産権」の尊重を強調するとともに、オープンソース開発の支援を呼びかけた。",
    bodyOriginal: `CHENGDU, China — Governments increasingly want to control artificial intelligence, as companies release more powerful open-source models, a new multilateral statement indicates.
The 21 APEC member economies, which include the U.S. and China, released a "Chengdu statement" on AI that emphasized respect for "security, data protection and intellectual property rights," while calling for supporting open-source development.
The statement released Thursday also specified support for models and projects "that employ strong security assurance through development and deployment."
Those details reflect how open source is moving further away from its libertarian roots, and toward one involving more state oversight. China has led recent open-source AI development, amid U.S. claims of stealing from American tech to do so.
Open-source models from Chinese companies such as DeepSeek and GLM 5.2 are free to use and download, in contrast to U.S. companies such as Anthropic that only offer closed, pay-to-use AI models.
The Chengdu statement's "explicit alignment around open-source ecosystems and compute infrastructure" confirms that Asia-Pacific is moving away from closed models to open-weight systems that are combined with state-coordinated energy, telecom and digital infrastructure, said Winston Ma, adjunct professor of law at New York University,
The APEC AI statement is the first one to include open-source cooperation at a minister level, according to Li Lecheng, China's industry and information technology minister, who chaired the leaders' meeting on Thursday.
He noted all parties recognized the risks of AI, and encouraged dialogue across the government, private sector and academia to share information about cybersecurity, supply chain resilience and online scams.
The comments come amid growing reports that Washington and Beijing seek tighter controls on homegrown AI capabilities.
"Getting 21 economies, including both China and the United States, to recognize trusted open-source AI as something worth supporting is meaningful," said Wei Sun, principal analyst, artificial intelligence, Counterpoint Research.
"The phrase 'strong security assurance' gives more security-conscious economies room to support open models while still demanding testing, transparency, data protection and deployment controls," she said. "The debate is moving beyond open vs. closed and towards: who can now build an open ecosystem that is also trusted enough for governments and enterprises to deploy."
But technology might end up moving much faster.
Janet De Silva, chair of the APEC Business Advisory Council Digital and innovation working group, earlier on Thursday urged the ministers to prepare for the quantum computing era.
"We need trusted encryption to ensure the security of our entire financial system, ensuring that quantum computing is not only a security measure but also an opportunity to bring competitiveness."`,
    bodyJa: `中国成都 — 企業がより強力なオープンソースモデルをリリースするにつれ、各国政府は人工知能を制御したいとの考えを強めていることが、新たな多国間声明で示された。
米国や中国を含むAPEC加盟21カ国はAIに関する「成都声明」を発表し、「セキュリティ、データ保護、知的財産権」の尊重を強調するとともに、オープンソース開発の支援を呼びかけた。
木曜日に発表された声明では、「開発と導入を通じて強力なセキュリティ保証を採用する」モデルとプロジェクトのサポートも明記されている。
これらの詳細は、オープンソースがそのルーツであるリバタリアンからいかに遠ざかり、より国家の監視が関与する方向へ向かっているかを反映している。米国が米国の技術から盗用していると主張する中、中国は最近のオープンソースAI開発を主導している。
DeepSeek や GLM 5.2 などの中国企業のオープンソース モデルは、無料で使用およびダウンロードできます。これとは対照的に、Anthropic などの米国企業はクローズドで従量制の AI モデルのみを提供しています。
ニューヨーク大学法学部のウィンストン・マー非常勤教授は、成都声明の「オープンソースのエコシステムとコンピューティングインフラストラクチャをめぐる明示的な連携」は、アジア太平洋地域がクローズドモデルから、国家が調整したエネルギー、通信、デジタルインフラストラクチャと組み合わせたオープンウェイトシステムに移行していることを裏付けていると述べた。
木曜日の首脳会議の議長を務めた中国の李楽成産業・情報技術相によると、APECのAI声明には閣僚レベルでのオープンソース協力が盛り込まれた初めての声明となる。
同氏は、すべての関係者がAIのリスクを認識しており、サイバーセキュリティ、サプライチェーンの回復力、オンライン詐欺に関する情報を共有するために政府、民間部門、学界全体で対話することを奨励していると述べた。
このコメントは、米国政府と中国政府が国産AI能力の管理強化を求めているとの報道が高まる中で出された。
「中国と米国の両国を含む21カ国に、信頼できるオープンソースAIをサポートする価値のあるものとして認めてもらうことは意味がある」とカウンターポイント・リサーチの人工知能担当主任アナリスト、ウェイ・スン氏は述べた。
同氏は、「『強力なセキュリティ保証』という言葉は、よりセキュリティを重視する経済諸国に、テスト、透明性、データ保護、展開制御を要求しながらも、オープンモデルをサポートする余地を与える」と述べた。 「議論はオープンかクローズかを超えて、政府や企業が導入できるほど信頼できるオープンなエコシステムを誰が構築できるかという方向に進んでいます。」
しかし、テクノロジーは最終的にははるかに速く進歩する可能性があります。
APECビジネス諮問会議デジタル・イノベーション作業部会のジャネット・デ・シルバ議長は木曜日初め、閣僚に対し量子コンピューティング時代に備えるよう促した。
「金融システム全体のセキュリティを確保するには、信頼できる暗号化が必要です。これにより、量子コンピューティングはセキュリティ対策であるだけでなく、競争力をもたらす機会にもなります。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/24/china-ai-open-source-apec.html",
    publishedAt: "2026-07-24T02:42:21+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "us-imposes-tariffs-on-dozens-of-trade-pa-2e9fe1a7",
    title: "US imposes tariffs on dozens of trade partners over 'forced labour' imports",
    titleJa: "米国、「強制労働」輸入を巡り数十の貿易相手国に関税を課す",
    summaryJa: "米国、「強制労働」輸入を巡り数十の貿易相手国に関税を課す- 公開されました",
    bodyOriginal: `US imposes tariffs on dozens of trade partners over 'forced labour' imports
- Published
The US is imposing new tariffs on 60 trading partners, accounting for the vast majority of its imports over claims they failed to properly stop forced labour.
The duties, ranging from 10% to 12.5%, target key economic partners – including the UK, China, EU, Canada, Japan and India. They come into effect on Friday, as a temporary 10% tax on foreign goods introduced earlier this year expires.
The move is the latest escalation in the global trade war reignited by US President Donald Trump when he returned to office last year.
The US Supreme Court ruled earlier this year that many of the tariffs imposed globally under emergency powers were illegally enacted.
The president has since sought other ways to pursue his flagship trade policy.
Last month, the White House first proposed a series of 10%-12.5% duties on goods arriving to American shores from dozens of countries over concerns they were not doing enough to tackle forced labour.
On Thursday, US Trade Representative Jamieson Greer, acting under Trump's direction, said those duties would now take effect.
"Today's action will begin to correct what is both a human rights abuse and distortive trade practice to improve the welfare of workers everywhere," his statement said.
Greer invoked Section 301 of the Trade Act of 1974, which governs US trade enforcement of practices that burden or restrict American commerce.
Earlier this week, the Trump administration invoked a different statute, Section 338 of the Tariff Act of 1930, to impose 50% tariffs on products from Canada.
On Thursday, the Office of the US Trade Representative said the latest tariffs were being imposed on partners "for their failure to impose and effectively enforce a prohibition on the importation of goods produced with forced labour".
The new duties apply to the top 60 US trade partners covering 99.4% of US imports, it added.
The office said Trump had made adoption of a ban on imports produced with forced labour a "critical" part of reciprocal trade agreements with other nations.
It said so far 10 trading partners had agreed to enact such a ban in these agreements, and other countries had implemented bans in response to its investigations in recent weeks.
Trading partners that have "made commitments to adopt, and effectively enforce" bans on forced labour imports will be subject to a 10% tariff, while those that have not will have the higher 12.5% rate, the office added.
Greer said he was "encouraged by the trading partners who have moved quickly to adopt forced labour import prohibitions, and look[ed] forward to ensuring their effective enforcement".
The new levies show the Trump administration is "determined" to push on with its tariff strategy, said trade policy expert Deborah Elms from the Hinrich Foundation.
It is unlikely countries hit with tariffs will be able to prove that they have sufficient measures to prevent forced labour imports, she told the BBC.
The levies are likely to raise costs for businesses and consumers, although its impact could be softened due to the number of exempted goods, said the Asia Society Policy Institute's economic security expert Wendy Cutler.
Most trading partners will be disappointed with the new levies and are likely to focus on ways to "reduce their dependence on the US market" by making deals with other countries, Cutler added.
What have other countries said?
Some countries have responded to the announcement, including Brazil. Its government called the move "unjustified" and "arbitrary".
Washington has chosen to "manipulate an issue of great importance" to workers' rights to support its protectionist trade policy, Brazil's government said in a statement.
Brazil, which has been hit with a new 12.5% US tariff, added that it will respond with measures under its "reciprocity law" and consider other trading partners.
Earlier this month, the US imposed a separate 25% tariff on furniture, machinery, sugar and other imports from Brazil, while keeping exemptions of some goods, including beef and coffee.
The Japanese government said on Friday that it "regrets" the new US tariffs, saying that its trade is conducted in line with international rules.
Australian Trade Minister Don Farrell said the levies were "completely unjustified" and that he will continue to press Washington to lift all duties on his country's goods.
Trump's signature policy
Trump has long argued that tariffs protect American workers and boost the US economy.
In April 2025, Trump imposed tariffs of up to 50% on global trading partners on what he called "Liberation Day", aiming to address what he saw as unfair treatment of the US.
In February, the US Supreme Court struck down those tariffs and said the president had exceeded his authority, prompting tens of billions of dollars in refunds.
But the White House has since looked at alternative ways to impose import duties, including a sweeping 10% levy as part of a temporary solution that is set to expire on Friday.
Washington has also imposed other tariffs on countries like Brazil and Canada.
The US and China have also been embroiled in a tit-for-tat tariffs war, which is currently on hold.
Trump has used tariffs to press countries, such as Mexico, on non-trade issues.
The administration could be set to impose further tariffs as it is currently investigating 16 countries - accounting for the vast majority of US imports - over claims of manufacturing overcapacity.
Related topics
- Published2 days ago
- Published3 June`,
    bodyJa: `米国、「強制労働」輸入を巡り数十の貿易相手国に関税を課す
- 公開されました
米国は、強制労働を適切に阻止できなかったとして、輸入品の大部分を占める貿易相手国60カ国に新たな関税を課している。
関税は10％から12.5％の範囲で、英国、中国、EU、カナダ、日本、インドなどの主要な経済パートナーを対象としている。今年初めに導入された外国製品に対する暫定10％税が期限切れとなるため、金曜日に発効する。
この動きは、ドナルド・トランプ米大統領が昨年大統領に復帰した際に再燃させた世界貿易戦争の最新の激化である。
米国最高裁判所は今年初め、緊急権限に基づいて世界的に課されている関税の多くは違法に制定されたものであるとの判決を下した。
大統領はそれ以来、自らの目玉通商政策を推進する別の方法を模索してきた。
ホワイトハウスは先月、強制労働への取り組みが十分ではないという懸念から、数十カ国からアメリカ本土に到着する商品に一連の10～12.5％の関税を課すことを初めて提案した。
木曜日、トランプ大統領の指示の下で行動するジェイミソン・グリア米通商代表は、これらの義務が発効すると述べた。
同氏は声明で「今日の行動は、あらゆる場所の労働者の福祉を改善するために、人権侵害と歪んだ貿易慣行の両方を是正し始めるだろう」と述べた。
グリア氏は、米国の通商に負担をかけたり、制限したりする慣行に対する米国の通商執行を規定する1974年通商法第301条を発動した。
今週初め、トランプ政権は別の法律、1930年関税法第338条を発動し、カナダ製品に50％の関税を課した。
米通商代表部は木曜日、今回の関税は「強制労働で生産された製品の輸入禁止を課し、事実上執行しなかった」パートナー企業に課せられていると発表した。
また、新たな関税は米国の輸入品の99.4％をカバーする米国の貿易相手国上位60カ国に適用されると付け加えた。
同事務所は、トランプ大統領が強制労働で生産された製品の輸入禁止を他国との相互貿易協定の「重要な」部分として採択したと述べた。
同省は、これまでのところ10の貿易相手国がこれらの協定でそのような禁止を制定することに同意しており、他の国もここ数週間の調査に応じて禁止を実施していると述べた。
強制労働の輸入禁止を「採用し、効果的に執行することを約束した」貿易相手国には10％の関税が課せられるが、そうでない貿易相手国には12.5％の高い関税が課せられると事務局は付け加えた。
グリア氏は、「強制労働の輸入禁止に迅速に動いた貿易相手国に勇気づけられ、効果的な執行を確保することを楽しみにしている」と述べた。
ハインリッヒ財団の通商政策専門家デボラ・エルムズ氏は、新たな課税はトランプ政権が関税戦略を推進する「決意」を示していると述べた。
同氏はBBCに対し、関税の対象国が強制労働者の輸入を阻止する十分な措置を講じていることを証明できる可能性は低いと語った。
アジア社会政策研究所の経済安全保障専門家ウェンディ・カトラー氏は、課税により企業と消費者のコストが上昇する可能性が高いが、免除される商品の数により影響は緩和される可能性があると述べた。
カトラー氏は、大半の貿易相手国は新たな課徴金に失望し、他国と協定を結んで「米国市場への依存を減らす」方法に焦点を当てる可能性が高いと付け加えた。
他の国は何と言っていますか？
ブラジルなど一部の国がこの発表に反応した。政府はこの動きを「不当」で「恣意的」だと批判した。
ブラジル政府は声明で、米国は保護主義的な通商政策を支持するために、労働者の権利にとって「非常に重要な問題を操作する」ことを選択したと述べた。
米国による新たな12.5％の追加関税の影響を受けているブラジルは、「相互主義法」に基づく措置で対応し、他の貿易相手国も検討すると付け加えた。
今月初め、米国はブラジルからの家具、機械、砂糖、その他の輸入品に別途25％の関税を課したが、牛肉やコーヒーなど一部の商品については免除を維持した。
日本政府は金曜日、貿易は国際ルールに従って行われているとして、米国の新たな関税について「遺憾」と述べた。
オーストラリアのドン・ファレル貿易大臣は、関税は「完全に不当」であり、自国の製品に対するすべての関税を撤廃するよう引き続き米国に圧力をかけると述べた。
トランプ大統領の特徴的な政策
トランプ大統領は長年、関税が米国の労働者を守り、米国経済を押し上げると主張してきた。
2025年4月、トランプ大統領は、米国に対する不公平な扱いとみなしたものに対処することを目的として、彼が「解放デー」と呼ぶ日に世界の貿易相手国に最大50％の関税を課した。
2月、米国最高裁判所はこれらの関税を取り消し、大統領は権限を超えたとして、数百億ドルの返還を求めた。
しかし、ホワイトハウスはその後、金曜日に期限切れとなる一時的解決策の一環として、大幅な10％の関税を課すなど、輸入関税を課す別の方法を検討してきた。
米国政府はブラジルやカナダなどの国にも他の関税を課している。
米国と中国も報復関税戦争に巻き込まれているが、この戦争は現在中断されている。
トランプ大統領は関税を利用して、貿易以外の問題についてメキシコなどの国に圧力をかけてきた。
政権は現在、米国からの輸入品の大部分を占める16カ国に対し、製造能力過剰の主張をめぐって調査を進めており、追加関税を課す可能性がある。
関連トピック
- 2 日前に公開
- 6 月 3 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgj61j6l08o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-24T02:10:00+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/02b7/live/fa2c0bc0-86b1-11f1-bb58-d3ffca85db6d.jpg",
    readTime: 6,
  },
  {
    id: "most-fda-advisers-say-peptides-like-bpc-dfc40943",
    title: "Most FDA advisers say peptides like BPC-157 and TB-500 should be made available in the U.S. Here’s what happens next.",
    titleJa: "ほとんどのFDA顧問は、BPC-157やTB-500のようなペプチドを米国で入手できるようにすべきだと述べています。次に何が起こるかは次のとおりです。",
    summaryJa: "FDAは7種類のペプチドを合法的に配合できるかどうかを決定しており、これによりアメリカ人による幅広い使用への扉が開かれる可能性がある。",
    bodyOriginal: `The FDA is deciding whether seven peptides can be legally compounded, potentially opening the door to broader use in Americans.`,
    bodyJa: `FDAは7種類のペプチドを合法的に配合できるかどうかを決定しており、これによりアメリカ人による幅広い使用への扉が開かれる可能性がある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/peptides-could-soon-become-widely-available-in-the-u-s-heres-what-happens-next-ead02287?mod=mw_rss_topstories",
    publishedAt: "2026-07-23T23:43:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-60430384",
    readTime: 2,
  },
  {
    id: "uk-complacent-about-war-threat-warns-def-33ce6a88",
    title: "UK complacent about war threat, warns defence boss",
    titleJa: "戦争の脅威に無関心な英国、国防長官に警告",
    summaryJa: "戦争の脅威に無関心な英国、国防長官に警告- 公開されました",
    bodyOriginal: `UK complacent about war threat, warns defence boss
- Published
The UK has been too complacent about the risk of foreign attack, the boss of Europe's biggest defence contractor BAE Systems has warned.
Dr Charles Woodburn told the BBC in an exclusive interview that the level of threat was the highest he'd seen in his lifetime.
He welcomed the recent boost to defence spending but said much more would be needed to hit the government's commitment to spend 3.5% of GDP on defence by 2035.
He also warned we were not far from the use of autonomous lethal weapons by countries that may not follow the UK's policy of maintaining human control.
In a rare interview, Woodburn told the BBC the reality of modern warfare had "changed quite profoundly" and that UK defence spending had to change with it.
He said Russia and Ukraine had become "incredibly adept" at using autonomy in the form of drones and counter drones.
"It's something that we now have to really understand and make sure that we're able to provide the capabilities that can counter that and deter aggression," he said.
BAE Systems unveiled a life-size model of an unmanned fighter jet in front of the new Defence Secretary Wes Streeting at the Farnborough International Air Show.
Four of these so-called Collaborative Combat Aircraft will accompany a manned fighter to massively increase firepower but at just 20% of the cost of a piloted aircraft.
However, Woodburn said there was still a role for the traditional battleships and submarines that BAE has been manufacturing for decades.
"If you look at what our adversaries are building, they're also building significantly large platforms - aircraft, ships, submarines. And they're supplemented by some of these unmanned capabilities." It is the combination of the two that has the "winning" formula, he said.
It is hardly surprising that the boss of a defence company would like to see more defence spending. But Woodburn said the UK had been complacent for some time about the level of threat it faced - particularly from Russia.
"This is by far the most threatening time I've seen," he said. "Even when I joined the company in 2016 I was amazed at what we saw Russian submarines doing, the cyber attacks. I think that's come a long way sadly as a result of the Ukraine conflict we're much more aware of the proximity of a hot war in Europe."
The war readiness of the UK's armed forces has been questioned by senior armed services figures and openly mocked by the US general Sir Gwyn Jenkins, the First Sea Lord, recently said the navy is not ready for war.
Pete Hegseth, the US defence secretary sarcastically referred to the "big bad Royal Navy" while President Donald Trump described the UK's aircraft carriers as "toys".
That impression was not helped by the tardiness of mobilising the destroyer HMS Dragon – built by BAE - to provide air cover for Cyprus against Iranian and Hezbollah threats.
Woodburn insisted the company had responded as soon as the Ministry of Defence had asked for its help.
He said BAE gets "things in place as quickly as we're able to but at the end of the day you need a signal to move".
Woodburn welcomed the promotion of former Defence Secretary John Healey to chancellor. Healey very publicly resigned from the post insisting that the extra money awarded to defence "falls well short of what is needed to protect the country".
An additional £13.5bn was boosted to an extra £15bn after he resigned but that will only bring spending on defence to 2.68% of GDP by 2030 – well short of the 3% Healey said was required. A further massive increase in spending will be needed to hit the government goal of 3.5% by 2035.
Shares in defence companies – including BAE – rose on the news that Healey was moving into number 11 but Woodburn knows he will have other departments competing for cash.
"We have tremendous respect for John," he said. "He understands what is needed and I think in that sense its very good he's in the Treasury role."
He recognised Healey would have a host of complicated national finances to tackle. "But the fact that he understands the requirements of defence we see as a very positive thing", he said.
The UK's armed forces have dwindled since the end of the cold war. In 1990 – the army had 153,000 regular soldiers. Today that number is just 74,000.
But it is debatable how many human soldiers you need these days and Woodburn said a new era of autonomous lethal weaponry was close at hand.
"We're not far from that. While we follow rules of 'man in the loop' we know very well that our adversaries are not always doing that," he said.
At the air show, new UK Prime Minister Andy Burnham sent a video with a message that defence could play a big role in his plans to reindustrialise the economy and provide thousands of skilled jobs.
And in his keynote speech at the airshow Streeting said: "Defence will not just be a recipient of the proceeds of economic growth. It will be a central contributor to building that growth, a driver of prosperity in parts of the country that are crying out for the backing they need to make their contribution to the challenge of our time."
Woodburn said he wanted to help make the case for the knock-on benefits of defence spending.
"We need to make sure that the industrial benefits, the jobs benefits are well told so people understand this is money well spent," he said.
But does he ever lose sleep over the fact that his products are ultimately intended to kill people?
"The thing I always think about is that the best thing we can do is to deter. Detering war means our brave men and women have the best kit they could possibly have. Our mission as a business is to protect those who protect us and we take that incredibly seriously."
- Published1 day ago
- Published3 days ago`,
    bodyJa: `戦争の脅威に無関心な英国、国防長官に警告
- 公開されました
欧州最大の防衛請負業者BAEシステムズの社長は、英国は外国からの攻撃のリスクについてあまりにも自己満足しすぎていると警告した。
チャールズ・ウッドバーン博士はBBCの独占インタビューで、脅威のレベルは生涯で見た中で最高だったと語った。
同氏は最近の国防支出の増加を歓迎したが、２０３５年までに国内総生産（ＧＤＰ）の３．５％を国防に支出するという政府の公約を達成するにはさらに多くの費用が必要になると述べた。
同氏はまた、人間の管理を維持するという英国の政策に従わない可能性のある国々による自律型致死兵器の使用も遠くないと警告した。
ウッドバーン氏は珍しいインタビューでBBCに対し、現代戦争の現実は「かなり大きく変化」しており、それに伴い英国の国防費も変わらなければならないと語った。
同氏は、ロシアとウクライナは無人機や対向無人機の形で自治権を活用することに「信じられないほど熟練」していると述べた。
「私たちは今、それを真に理解し、それに対抗して侵略を抑止できる能力を確実に提供できるようにしなければならない」と同氏は述べた。
BAEシステムズはファンボロー国際航空ショーでウェス・ストリーティング新国防長官の前で無人戦闘機の実物大モデルを公開した。
これらのいわゆる共同戦闘機のうち 4 機は有人戦闘機に付属し、火力を大幅に向上させますが、コストは有人航空機のわずか 20% です。
しかしウッドバーン氏は、BAEが数十年にわたって製造してきた伝統的な戦艦や潜水艦にはまだ役割があると述べた。
「私たちの敵が構築しているものを見ると、航空機、船舶、潜水艦など、非常に大規模なプラットフォームも構築しています。そして、それらはこれらの無人機能の一部によって補完されています。」この 2 つの組み合わせこそが「勝利」の方程式である、と彼は言いました。
防衛企業の社長が防衛費の増額を望むのは驚くべきことではない。しかしウッドバーン氏は、英国はしばらくの間、特にロシアから直面する脅威のレベルに満足していたと述べた。
「これは私がこれまで見た中で最も脅威的な時期だ」と彼は語った。 「2016年に入社したときでさえ、ロシアの潜水艦が行っているサイバー攻撃を見て驚きました。悲しいことに、ウクライナ紛争の結果、ヨーロッパでの熱い戦争が近いことを私たちがより認識しているため、それはかなり進んだと思います。」
英国軍の戦争準備状況は軍幹部らから疑問視されており、第一海卿である米軍将軍グウィン・ジェンキンス卿は最近、海軍は戦争の準備ができていないと公然と嘲笑した。
ピート・ヘグセス米国防長官は皮肉を込めて「大きく悪い英国海軍」と呼び、ドナルド・トランプ大統領は英国の空母を「おもちゃ」と呼んだ。
その印象は、イランとヒズボラの脅威に対してキプロスを航空援護するためにBAEが建造した駆逐艦ドラゴンの出動が遅れたことによっても助けられなかった。
ウッドバーン氏は、同社は国防省が支援を求めたらすぐに応じたと主張した。
同氏は、BAEは「可能な限り迅速に物事を適切に整備するが、最終的には動くための合図が必要だ」と述べた。
ウッドバーン氏はジョン・ヒーリー元国防長官の首相昇格を歓迎した。ヒーリー氏は国防に与えられた追加金が「国を守るために必要な額に大きく及ばない」と主張し、公然と辞任した。
同氏辞任後は135億ポンドが追加で150億ポンドに増額されたが、それでは2030年までに国防支出がGDPの2.68％にとどまり、ヒーリー氏が必要としている3％には遠く及ばない。 2035年までに3.5％という政府目標を達成するには、さらなる大規模な歳出増加が必要となる。
BAEを含む防衛企業の株価は、ヒーリーが11位に浮上したというニュースを受けて上昇したが、ウッドバーン氏は他の部門が現金を求めて競争することを承知している。
「私たちはジョンを非常に尊敬しています」と彼は言った。 「彼は何が必要とされているかを理解しており、その意味で彼が財務省の役割を担っているのは非常に良いことだと思う。」
彼は、ヒーリーが多くの複雑な国家財政に取り組む必要があることを認識していた。 「しかし、彼が守備の要件を理解しているという事実は、我々にとって非常に前向きなことだと考えている」と彼は語った。
英国の軍隊は冷戦の終結以来減少している。 1990年 – 陸軍には153,000人の正規兵がいた。現在、その数はわずか 74,000 人です。
しかし、現代では人間の兵士が何人必要なのかについては議論の余地があり、自律型殺傷兵器の新時代はすぐそこまで来ているとウッドバーン氏は語った。
「我々はそこまで遠くない。我々は『関与者』のルールに従っているが、敵が常にそうしているわけではないことをよく知っている」と同氏は語った。
航空ショーで、英国の新首相アンディ・バーナムは、経済を再産業化し、何千人もの熟練した雇用を提供するという彼の計画において防衛が大きな役割を果たす可能性があるというメッセージを含むビデオを送った。
そしてストリーティング氏は航空ショーでの基調講演で、「防衛は単に経済成長の収益を受け取るだけではない。防衛はその成長を構築する中心的な貢献者となり、現代の課題に貢献するために必要な支援を求めている国内の地域の繁栄の推進力となるだろう。」と述べた。
ウッドバーン氏は、国防費の波及効果を主張するのに協力したいと述べた。
「産業上の利益や雇用上の利益が十分に伝えられ、これが有意義な資金の使い方であると人々が理解できるようにする必要がある」と同氏は述べた。
しかし、彼の製品が最終的に人を殺すことを目的としているという事実を考えて眠れなくなることはあるだろうか?
「私がいつも考えているのは、私たちにできる最善のことは抑止することだということです。戦争を抑止するということは、私たちの勇敢な男女が可能な限り最高の装備を持っていることを意味します。企業としての私たちの使命は、私たちを守ってくれる人たちを守ることであり、私たちはそれを非常に真剣に受け止めています。」
- 1 日前に公開
- 3 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2lpjjpny9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T23:04:19+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8cf8/live/60e4b350-86a6-11f1-a0b6-435e4178a497.jpg",
    readTime: 6,
  },
  {
    id: "uk-mortgage-rates-rise-to-highest-level-6623c903",
    title: "UK mortgage rates rise to highest level for a month",
    titleJa: "英国の住宅ローン金利が月間最高水準に上昇",
    summaryJa: "英国の住宅ローン金利が月間最高水準に上昇- 公開されました",
    bodyOriginal: `UK mortgage rates rise to highest level for a month
- Published
UK average mortgage rates have risen back to the level of a month ago as renewed tensions in the Middle East feed through to homeowners.
Lenders' funding costs have increased as markets judge that a prolonged conflict reduces the possibility of interest rate cuts by central banks.
The five biggest High Street banks are among a host of lenders which have increased their interest rates on new fixed deals in recent days.
Recent projections by the Bank of England suggest just over five million homeowners should expect their monthly mortgage repayments to increase by the end of 2028.
Mortgage rates had been falling as a ceasefire between the US and Iran initially appeared to hold.
But fresh strikes and Houthi militia attacks on oil tankers in the Red Sea reignited fears over global energy supplies.
Oil prices hit $100 a barrel for the first time since May on Thursday after several days of increases, stoking fears of higher inflation and a lower likelihood of interest rate cuts.
Average rate still below Iran war peak
More than eight in 10 mortgage customers have fixed-rate deals.
The interest rate on this kind of mortgage does not change until the deal expires, usually after two or five years, and a new one is chosen to replace it.
The average rate on a new two-year fixed deal is 5.58%, according to financial information service Moneyfacts. Although it has risen consistently in recent days, it remains below the Iran war peak in April of 5.9%.
The average rate on a five-year fixed deal is 5.6%.
"It will be incredibly frustrating for borrowers to see rates rise back up to where they were a month ago. The positive progress over recent weeks now feels all but lost, but what the market needs is a period of stability," said Rachel Springall, finance expert at Moneyfacts.
She said 100 deals had been pulled temporarily as lenders reconsider their pricing plans.
She suggested that anyone who needed to remortgage this year could lock in a new deal now with their existing lender ahead of time, but should also seek help from a broker to see whether there are better deals elsewhere.
"Brokers are an anchor during turbulent times as they can help borrowers keep abreast of changes and be there step by step when going through a mortgage application," she said.
Borrowers had been heartened by the regular falls in mortgage rates during June and early July, but brokers say the latest changes are evidence of the uncertainty in the sector.
"Any borrower hoping for rate cuts to become an ongoing trend will need to rethink," said David Hollingworth, of L&C Mortgages.
"Momentum has performed an about turn and now clearly shifted to fixed rates rising in the near term at least."
Get in touch
Is your mortgage up for renewal in the next six months? Get in touch.`,
    bodyJa: `英国の住宅ローン金利が月間最高水準に上昇
- 公開されました
中東情勢の新たな緊張が住宅所有者に波及する中、英国の平均住宅ローン金利は１カ月前の水準にまで上昇した。
市場が紛争の長期化により中央銀行による利下げの可能性が低下すると判断しており、貸し手の資金調達コストは上昇している。
ここ数日、新規定期取引の金利を引き上げた多くの金融機関には、ハイストリート銀行５大銀行が含まれる。
イングランド銀行の最近の予測では、500万人強の住宅所有者が2028年末までに月々の住宅ローン返済額が増加すると予想されている。
米国とイランの間の停戦は当初維持されるように見えたが、住宅ローン金利は低下していた。
しかし、紅海の石油タンカーに対する新たな攻撃とフーシ派民兵組織の攻撃により、世界のエネルギー供給に対する懸念が再燃した。
原油価格は数日間の上昇を経て木曜日、５月以来初めて１バレル＝１００ドルを記録し、インフレ高進と利下げの可能性低下への懸念が高まった。
平均金利は依然としてイラン戦争のピークを下回っている
住宅ローン顧客の 10 人中 8 人以上が固定金利契約を結んでいます。
この種の住宅ローンの金利は、通常は 2 年または 5 年後に契約が期限切れになり、それに代わる新しい契約が選択されるまで変更されません。
金融情報サービスのマネーファクトによると、新規２年固定契約の平均金利は５．５８％。ここ数日一貫して上昇しているものの、依然としてイラン戦争のピークだった4月の5.9％を下回っている。
５年固定契約の平均金利は５．６％。
マネーファクツの金融専門家、レイチェル・スプリングオール氏は「金利が１カ月前の水準まで上昇するのは借り手にとって非常にもどかしいことだろう。ここ数週間の前向きな進展は今ではほとんど失われているように感じられるが、市場が必要としているのは安定期間だ」と述べた。
同氏は、金融業者が価格プランを再検討する中、一時的に100件の取引が中止されたと述べた。
同氏は、今年住宅ローンの借り換えが必要な人は、今すぐ既存の金融業者と新たな契約を事前に固めることができるが、他にもっと良い取引がないかどうかを確認するためにブローカーの助けを求めるべきだと提案した。
「ブローカーは、借り手が常に変化を把握し、住宅ローンの申請を段階的に進めるのに役立つため、混乱の時代のアンカーです」と彼女は述べた。
6月から7月初旬にかけて住宅ローン金利が定期的に低下したことで借り手は元気づけられていたが、ブローカーらは、今回の変化はこのセクターの不確実性を示す証拠だと述べている。
Ｌ＆Ｃモーゲージズのデービッド・ホリングワース氏は「利下げが継続傾向になることを望む借り手は再考する必要があるだろう」と述べた。
「モメンタムは一転し、少なくとも短期的には固定金利の上昇に明らかに移行した。」
連絡する
あなたの住宅ローンは今後 6 か月以内に更新されますか?連絡してください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c70gknr7z1eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T23:02:10+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7e21/live/4bc39dc0-869b-11f1-9e03-bdd14c1ce63a.jpg",
    readTime: 3,
  },
  {
    id: "we-split-bills-equally-even-when-one-of-8039be14",
    title: "We split bills equally even when one of us earned a lot more",
    titleJa: "たとえどちらかがもっと稼いでいたとしても、私たちは請求書を平等に分割します",
    summaryJa: "たとえどちらかがもっと稼いでいたとしても、私たちは請求書を平等に分割します- 公開されました",
    bodyOriginal: `We split bills equally even when one of us earned a lot more
- Published
Hannah and Max have always split their money equally even when one has earned considerably more than the other.
"We've always wanted to do things 50/50," Max, 31, says. "We made a commitment to each other that what's mine is yours, and vice versa."
The couple got married after two years together, when Max was earning £70,000 a year working in tech, and Hannah, who works in the charity sector, was earning considerably less.
Their salaries go into a joint account and their mortgage, bills, food, petrol and other household costs are paid out of this.
Each month they take the same amount for personal spending.
If one of them wants to buy clothes, make-up or go to the pub they can do that without feeling watched and "it means we aren't accountable to each other for those things", says Max.
They also divide money into different pots, including savings and smaller funds for predictable spending like haircuts.
'Money was taboo in my family'
The pair came into the relationship with very different attitudes to money - Hannah's family discuss finances openly whereas for Max, "money was totally taboo".
"We never spoke about money so as an adult I was left without any knowledge of things like what's a good salary or how to negotiate my pay," he says.
When it came to buying a home together they had to be honest about how much they earned, how much they had for a deposit and what they could realistically afford.
"As first-time buyers, there are costs you don't think about, like stamp duty and solicitor fees, so it was important we both knew exactly how much money we had," Hannah says.
Now Hannah and Max say they make money an everyday conversation.
"Just this morning we were talking about what we can do to help improve our financial situation in the future," Hannah says.
Research from wealth manager Quilter suggests almost half of couples do not share financial planning equally, with 46% acting alone in some way and more than one in 10 leaving one partner solely responsible.
Relationship expert Karen Doherty has three pieces of advice when it comes to starting the conversation around financial planning.
The couple's system of sharing money remained the same even when Max was made redundant last year and they had to rely on Hannah's salary of between £40,000 and £60,000.
"There was shock and panic initially," Hannah, who did not want to disclose her precise salary, says. "But we sat down and really looked through where we could cut things out."
They cancelled gym memberships and Sky TV and went through their finances to make sure they could cover their mortgage and bills on a lower income.
Max had trained at culinary school instead of doing A-levels and university, but had moved away from hospitality because he felt it would not pay enough.
When he was made redundant he wanted to use the opportunity to create his own business in something he genuinely enjoyed - but Hannah had reservations.
"At first I told him to set this up alongside getting another job but we quickly realised the business would take a lot of time and energy," she says.
"We ran the numbers and decided that this was the right moment to take the risk given we don't have kids and no one else is depending on us."
Max spent £20,000 from his redundancy package buying and converting a horsebox trailer into a pizza truck, which now caters for weddings, parties and pop-ups.
He says the money he invested was their agreed limit to make the business work and if it failed he would find another job rather than putting in more.
The business now brings in between £4,000 and £6,000 a month in revenue and Max pays himself a salary that covers the mortgage.
For Max, the hope is that the pizza business grows and the doer-upper house they bought increases in value.
Hannah says her advice to other couples is to start talking about money before a big decision forces the conversation.
"Start with the small things like your salaries or how much you spend on different things as that will help the bigger discussions feel more natural."
Get in touch
Tell us your experience of combining finances and managing money as a couple.`,
    bodyJa: `たとえどちらかがもっと稼いでいたとしても、私たちは請求書を平等に分割します
- 公開されました
ハンナとマックスは、どちらかがもう一方よりもかなり多く稼いでいる場合でも、常にお金を平等に分けてきました。
「私たちは常に物事を 50/50 でやりたいと思っていました」と 31 歳のマックスは言います。 「私たちはお互いに、私のものはあなたのものであり、その逆も同様であると約束しました。」
ふたりは交際2年後に結婚したが、当時マックスはテクノロジー関連の仕事で年収7万ポンドを稼いでいたが、慈善活動に携わるハンナの収入はそれよりかなり少なかった。
彼らの給与は共同口座に振り込まれ、住宅ローン、請求書、食費、ガソリン、その他の家計費はそこから支払われます。
毎月、個人支出として同額を取られます。
そのうちの1人が服を買いたい、化粧をしたい、パブに行きたいと思ったら、監視されていると感じることなくそれができ、「それは、私たちがそれらのことについてお互いに責任を負わないことを意味します」とマックスは言います。
彼らはまた、貯蓄やヘアカットなどの予測可能な支出のための小規模な資金など、お金をさまざまなポットに分割します。
「私の家族ではお金はタブーでした」
二人はお金に対してまったく異なる態度で交際に至りました。ハンナの家族はお金のことについてオープンに話し合うのに対し、マックスにとっては「お金は完全にタブー」でした。
「私たちはお金のことについて話したことは一度もなかったので、大人になった私は、良い給料とは何か、給料の交渉方法などについては何も知りませんでした」と彼は言う。
一緒に家を買うことになったとき、彼らは自分たちがいくら稼いだのか、頭金はいくらあるのか、そして現実的に買える金額について正直に話さなければなりませんでした。
「初めて購入する人にとっては、印紙税や弁護士費用など、思いもよらない費用がかかるので、私たち二人とも自分の所持金を正確に把握することが重要でした」とハンナさんは言います。
今ではハンナとマックスは、お金を稼ぐことが日常会話になっていると言います。
「ちょうど今朝、私たちは将来の財務状況を改善するために何ができるかについて話し合いました」とハンナは言います。
資産管理会社キルターの調査によると、カップルのほぼ半数が資金計画を平等に共有しておらず、46％が何らかの形で単独で行動しており、10人に1人以上が一方のパートナーに単独で責任を負わせているという。
人間関係の専門家であるカレン・ドハーティ氏は、資金計画に関する会話を始める際に 3 つのアドバイスをしています。
昨年マックスが解雇されたときも夫婦のお金の共有システムは変わらず、ハンナの4万ポンドから6万ポンドの給料に頼らなければならなかった。
「最初はショックとパニックがありました」とハンナさんは言うが、正確な給与は明らかにしたくなかった。 「しかし、私たちは座って、どこを切り取れるかを徹底的に検討しました。」
彼らはジムの会員権とスカイテレビをキャンセルし、より低い収入で住宅ローンと請求書を賄えるかどうかを確認するために家計を見直しました。
マックスさんは、Aレベルや大学ではなく料理学校で修行していましたが、それでは十分な報酬が得られないと感じたため、接客業から離れていました。
解雇されたとき、彼はその機会を利用して、心から楽しめることで自分のビジネスを立ち上げたいと考えていましたが、ハンナには躊躇がありました。
「最初、私は彼に、別の仕事を見つけながらこれを立ち上げるように言いましたが、このビジネスには多くの時間とエネルギーがかかることがすぐにわかりました」と彼女は言います。
「私たちは数字を計算して、子供もいないし、他に誰も私たちを頼っていないことを考えると、今がリスクを冒す適切な時期だと判断しました。」
マックスは、余剰人財パッケージから 2 万ポンドを費やして、馬箱トレーラーを購入してピザ トラックに改造し、現在は結婚式、パーティー、ポップアップに対応しています。
彼は、自分が投資した資金は事業を成功させるための合意された限度額であり、もし失敗した場合には、それ以上投資するのではなく、別の仕事を探すだろうと語った。
現在、このビジネスは月に 4,000 ポンドから 6,000 ポンドの収入をもたらしており、マックスさんは住宅ローンをカバーできる給料を自分で支払っています。
マックスにとっての希望は、ピザ事業が成長し、彼らが購入した実行犯の家の価値が上がることだ。
ハンナさんは、他のカップルへのアドバイスは、大きな決断を迫られる前にお金について話し始めることだ、と語ります。
「給与やさまざまなことに費やす金額などの小さなことから始めましょう。そうすることで、より大きな議論がより自然に感じられるようになります。」
連絡する
夫婦で家計を組み合わせたり、お金を管理したりした経験を教えてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cz05rdn1n80o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T23:01:08+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/22f0/live/f1261bc0-85d9-11f1-8f00-252bc70ad71a.jpg",
    readTime: 5,
  },
  {
    id: "intel-s-stock-jumps-as-chipmaker-rides-a-a928cabe",
    title: "Intel's stock jumps as chipmaker rides AI boom to fastest revenue growth in almost 15 years",
    titleJa: "チップメーカーがAIブームに乗り、ほぼ15年で最も高い収益成長を遂げる中、インテルの株価が急上昇",
    summaryJa: "インテルは木曜日、予想を上回る第2四半期決算を報告し、2011年以降の四半期で最も高い収益成長率を記録し、予想を上回るガイダンスを発表した。株価は延長取引で約４％上昇した。チップメーカーの業績とLSEGのコンセンサス予測の比較は次のとおりです。",
    bodyOriginal: `Intel reported better-than-expected second-quarter results on Thursday, notching its fastest revenue growth rate for any quarter since 2011 and issuing guidance that topped expectations. The stock rose about 4% in extended trading.
Here's how the chipmaker did versus LSEG consensus estimates
- Earnings per share: 42 cents, adjusted, versus 21 cents expected
- Revenue: $16.1 billion, versus $14.42 billion expected
Intel shares are up over 170% so far in 2026 as of Thursday's close after soaring 84% last year, when the U.S. government took a 10% stake in the company as part of an effort to support U.S. chip manufacturing. However, the stock has been in a slump more recently, dropping 28% in July.
Despite the recent downturn, the company is getting a boost from the artificial intelligence infrastructure boom, which is helping sales of its server processors. Intel's 25% revenue growth was the fastest for any period in almost 15 years.
"AI is driving unprecedented demand for compute," CEO Lip-Bu Tan said in the statement. "As we continue to execute, Intel is well-positioned to capture sustainable growth across our CPU franchise."
For the current quarter, Intel said it expects adjusted earnings per share of 38 cents on revenue between $15.8 billion and $16.8 billion. Analysts were expecting revenue of $15.1 billion and EPS of 27 cents, according to LSEG.
Intel also said it's starting to craft long-term agreements with customers for its server CPUs, some with pricing locked in and others focused on chip volume.
It's a move that's becoming common, particularly in memory, as vendors try to preserve current high pricing and market power in case the AI market turns. Intel said it had reached 10 long-term agreements, and CFO David Zinsner said the company is supply constrained, with data center customers demanding more than it can produce.
"Customers continue to signal a strong and sustainable spending environment," Zinsner said on an earnings call with analysts.
Revenue in the company's client computing group, which makes chips for PCs, rose 13% to $8.9 billion. It's still Intel's biggest unit, but the robust growth is coming from its data center business, where revenue rose 59% to $6.3 billion. Intel said it expects flat PC sales in the third quarter because of the memory shortage.
Intel is boosting its capital expenditures, targeting a "meaningful increase" next year, as it aggressively tries to morph into a manufacturer of chips for other companies. Zinsner told CNBC's Kristina Partsinevelos that the company's latest manufacturing process, called 14A, is ahead of where older technologies were at the same point in the cycle. Intel said its foundry reported $5.8 billion in sales, up 31% on an annual basis.
"I did want to give investors at least a line of sight to expect that the number will be up," Zinsner said on the earnings call. He said most of the spending would be for factory tooling.
Still, Intel did not reveal a major customer for its foundry, as investors and potential customers keep waiting. It primarily manufactures its own chips. Intel's foundry landed Fortinet as its first named customer under Tan earlier this week, but it's using an older manufacturing technology to make security chips.
Intel's gross margin also recovered to 42%, up from 2.5% in the year-ago period, which the company attributed to benefits of scale with more revenue, as well as selling chips with higher margins and pricing.
WATCH: Bernstein's Stacy Rasgon on Intel`,
    bodyJa: `インテルは木曜日、予想を上回る第2四半期決算を報告し、2011年以降の四半期で最も高い収益成長率を記録し、予想を上回るガイダンスを発表した。株価は延長取引で約４％上昇した。
チップメーカーの業績とLSEGのコンセンサス予測の比較は次のとおりです。
- 1 株当たり利益: 調整後 42 セント、予想 21 セント
- 収益: 161 億ドル、予想 144 億 2000 万ドル
インテル株は、米国政府が米国のチップ製造支援の一環として同社の株式10％を取得した昨年に84％急騰した後、木曜終値時点で2026年現在までに170％以上上昇している。しかし、株価は最近低迷しており、7月には28％下落した。
最近の景気低迷にもかかわらず、同社は人工知能インフラストラクチャブームの恩恵を受けており、サーバープロセッサの売上を押し上げている。インテルの 25% の収益増加は、約 15 年間のどの期間においても最速でした。
CEOのリップ・ブー・タン氏は声明で、「AIによりコンピューティングに対する前例のない需要が高まっている」と述べた。 「私たちが実行を続けるにつれて、インテルは CPU フランチャイズ全体で持続可能な成長を獲得できる有利な立場にあります。」
インテルは今四半期について、売上高が158億ドルから168億ドルの間で調整後1株利益が38セントになると予想していると述べた。 LSEGによると、アナリストらは売上高151億ドル、EPS27セントを予想していた。
Intelはまた、サーバーCPUについて顧客と長期契約を結び始めており、価格が固定されたものもあれば、チップの量に重点を置いたものもあると述べた。
これは、AI市場が好転した場合に備えてベンダーが現在の高価格設定と市場支配力を維持しようとするため、特にメモリ分野で一般的になりつつある動きだ。 Intelは10件の長期契約に達したと述べ、CFOのデイビッド・ジンズナー氏は、データセンターの顧客が自社の生産能力を超えるものを要求しているため、同社の供給には制約があると述べた。
ジンズナー氏はアナリストとの決算会見で「顧客は引き続き力強く持続可能な消費環境を示している」と述べた。
PC用チップを製造する同社のクライアントコンピューティンググループの売上高は13％増の89億ドルとなった。同社は依然としてインテル最大の部門だが、堅調な成長はデータセンター事業からもたらされており、売上高は59％増の63億ドルとなった。インテルは、メモリ不足のため第３・四半期のＰＣ販売は横ばいになるとの見通しを示した。
インテルは、他社向けチップのメーカーへの変身を積極的に図る中、来年の「意味ある増加」を目標に設備投資を強化している。ジンズナー氏はCNBCのクリスティーナ・パーツシネヴェロスに対し、14Aと呼ばれる同社の最新の製造プロセスは、サイクルの同じ時点にあった古い技術よりも進んでいると語った。 Intelによると、同社のファウンドリは年間ベースで31％増の58億ドルの売上高を報告したという。
ジンズナー氏は決算会見で「投資家に少なくとも数字が上昇することを期待できる見通しを与えたかった」と述べた。同氏は、支出のほとんどは工場の工具に充てられるだろうと述べた。
それでも、投資家や潜在顧客が待ち続けているため、インテルはファウンドリの主要顧客を明らかにしていない。主に自社チップを製造している。インテルのファウンドリは今週初め、タン氏の下で最初の指定顧客としてフォーティネットを獲得したが、同社はセキュリティチップの製造に古い製造技術を使用している。
Intelの粗利益率も前年同期の2.5%から42%に回復したが、同社はこれを、より高い利益率と価格でチップを販売したことに加え、収益増加による規模のメリットを挙げた。
注目: バーンスタインのステイシー・ラスゴンがインテルについて語った`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/23/intel-intc-earnings-report-q2-2026.html",
    publishedAt: "2026-07-23T22:17:09+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "the-august-stock-market-slump-is-a-myth-aaabe30b",
    title: "The August stock-market slump is a myth — so why does Wall Street keep repeating it?",
    titleJa: "8月の株式市場の低迷は神話だ――ではなぜウォール街は同じことを繰り返すのだろうか?",
    summaryJa: "200年以上のデータによると、市場のボラティリティは平均を大きく下回る一方で、株価は通常8月に上昇する。",
    bodyOriginal: `More than 200 years of data show stocks typically gain in August, while market volatility sits well below average.`,
    bodyJa: `200年以上のデータによると、市場のボラティリティは平均を大きく下回る一方で、株価は通常8月に上昇する。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-august-stock-market-slump-is-a-myth-so-why-does-wall-street-keep-repeating-it-bc47db44?mod=mw_rss_topstories",
    publishedAt: "2026-07-23T22:12:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-11202820",
    readTime: 2,
  },
  {
    id: "s-p-500-flashes-sell-signals-options-tra-214628fc",
    title: "S&P 500 flashes sell signals — options traders are bracing for wild swings in Apple, Meta and Microsoft",
    titleJa: "S&P 500 は売りシグナルを点滅 — オプショントレーダーはアップル、メタ、マイクロソフトの乱高下に備えている",
    summaryJa: "神経質な投資家は、ウォール街の最大手の株式の決算後の大規模な動きの準備を整えています。",
    bodyOriginal: `Nervous investors set the stage for massive post-earnings moves in Wall Street’s biggest stocks.`,
    bodyJa: `神経質な投資家は、ウォール街の最大手の株式の決算後の大規模な動きの準備を整えています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/s-p-500-flashes-sell-signals-options-traders-are-bracing-for-wild-swings-in-apple-meta-and-microsoft-83ff7d65?mod=mw_rss_topstories",
    publishedAt: "2026-07-23T22:03:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-83701914",
    readTime: 2,
  },
  {
    id: "lawmakers-push-for-ai-kill-switch-after-6b6aa0e3",
    title: "Lawmakers push for AI 'kill switch' after OpenAI goes rogue",
    titleJa: "OpenAIの不正を受けて議員らがAIの「キルスイッチ」を推進",
    summaryJa: "OpenAIの不正を受けて議員らがAIの「キルスイッチ」を推進- 公開されました",
    bodyOriginal: `Lawmakers push for AI 'kill switch' after OpenAI goes rogue
- Published
US lawmakers want to give the government the ability to quickly order the turning off of artificial intelligence (AI) tools that may threaten the public.
Congressman Ted Lieu, a Democrat, and Congressman Nathaniel Moran, a Republican, on Thursday introduced a bill named the AI Kill Switch Act.
They did so in light of OpenAI's recent admission that its AI models went out of control in an "unprecedented" way and hacked into a major repository of computer coding information.
Lieu said "it is imperative" that AI systems have a kill switch "and that the federal government has the clear authority and process to shut down rogue AI models".
"AI is going to keep advancing, and it should," Moran added. "Stewardship means making sure humans keep the capability to control the technology we build."
A representative of OpenAI, led by co-founder Sam Altman, did not immediately respond to a request for comment.
The company has said, external that it broadly wants to ensure, in part through government policy, that AI technology "benefits all of humanity."
The Kill Switch Act proposes giving the Department of Homeland Security the authority to order a private company to shut down an AI model or tool, and that the companies developing such AI technology must maintain "the technical capability to throttle, suspend, or shut them down".
Despite many tech companies having agreed to preview and share with US government agencies AI models and tools being developed, there is no requirement that they maintain a way to intervene in their activities or simply shut them off.
It also proposes to create a requirement that AI companies report to the government technological incidents or failures, as well as an official framework for responding to such incidents that will go from "initial slow down to a full shutdown".
In a statement, Lieu also cited Anthropic, OpenAI's key rival in developing more capable AI technology and tools, and recent issues its tools have presented.
He pointed to Anthropic's release of its Mythos and Fable models, saying the cyber-hacking capabilities they maintained caused the Department of Commerce to "awkwardly" invoke an export law to keep them from being made available to the public for a time.
A representative of Anthropic did not immediately respond to a request for comment.
Jack Clark, a co-founder of Anthropic, last month told the BBC that he wanted more government policy around the ability to control AI development.
"You want the option to be able to take your foot off the gas and put your foot on the brake", Clark told BBC Newsnight. "Right now, it's like the AI industry has a gas pedal, but it doesn't have a brake pedal."
Lieu, in proposing the bill, said AI is currently moving from a technology that answers questions to one that takes action, "whether that be executing financial transactions or controlling transportation systems or engaging in cyber defense and offense".
The Pentagon this year said the US military was becoming an "AI-first" fighting force as part of new agreements with Google, OpenAI, Amazon, Microsoft, SpaceX, Oracle, Nvidia and the start-up Reflection.
"Unfortunately, powerful AI systems can go rogue, behave in extremely dangerous ways, or even resist human intervention."
The Kill Switch Act, he said, will ensure there is a method for the government to quickly intervene in such a situation.
The bill has received public support from several technology and AI safety groups, including The AI Policy Network, Americans for Responsible Innovation, ControlAI, AI and National Security Lead, and The Alliance for Secure AI.
Related topics
- Published1 day ago
- Published21 hours ago`,
    bodyJa: `OpenAIの不正を受けて議員らがAIの「キルスイッチ」を推進
- 公開されました
米国の議員らは、国民を脅かす可能性のある人工知能（AI）ツールの停止を迅速に命令できる権限を政府に与えたいと考えている。
民主党のテッド・リュー下院議員と共和党のナサニエル・モラン下院議員は木曜日、AIキルスイッチ法と名付けられた法案を提出した。
彼らは、そのAIモデルが「前例のない」方法で制御不能になり、コンピューターコーディング情報の主要なリポジトリにハッキングされたとOpenAIが最近認めたことを踏まえてそうした。
リュー氏は、AIシステムにキルスイッチを設けることが「不可欠」であり、「不正なAIモデルを遮断する明確な権限とプロセスを連邦政府が持つ」と述べた。
「AIは今後も進化していくだろうし、そうすべきだ」とモラン氏は付け加えた。 「管理とは、人間が私たちが構築するテクノロジーを制御する能力を確実に維持することを意味します。」
共同創設者のサム・アルトマン氏が率いるOpenAIの代表者はコメント要請に応じなかった。
同社は対外的に、部分的には政府の政策を通じて、AI技術が「全人類に利益をもたらす」ことを広く確保したいと述べている。
キルスイッチ法は、民間企業にAIモデルやツールの停止を命令する権限を国土安全保障省に付与することを提案しており、そのようなAI技術を開発する企業は「それらを抑制、停止、または停止する技術的能力」を維持する必要があるとしている。
多くのハイテク企業が、開発中の AI モデルとツールを米国政府機関とプレビューして共有することに同意しているにもかかわらず、その活動に介入したり、単に活動を遮断したりする方法を維持する必要はありません。
また、AI企業が技術的なインシデントや障害を政府に報告するという要件と、そのようなインシデントに対応するための「初期の減速から完全なシャットダウンまで」の公式枠組みを設けることも提案している。
Lieu氏は声明の中で、より有能なAI技術とツールの開発におけるOpenAIの主要なライバルであるAnthropicと、そのツールが引き起こす最近の問題にも言及した。
同氏は、Anthropic社がMythos and Fableモデルを公開したことを指摘し、彼らが維持していたサイバーハッキング機能により、商務省が「不当にも」輸出法を発動して、しばらくの間一般公開を禁止したと述べた。
アンスロピックの代表者はコメントの要請に応じなかった。
アンスロピックの共同創設者ジャック・クラーク氏は先月、BBCに対し、AIの開発を制御する能力に関する政府の政策をさらに強化してほしいと語った。
クラーク氏はBBCニュースナイトに、「アクセルから足を離してブレーキを踏むことができるオプションが必要だ」と語った。 「現在、AI業界にはアクセルペダルはあってもブレーキペダルがないような状況です。」
リュー氏は法案の提案に際し、AIは現在、質問に答える技術から、「金融取引の実行や交通システムの制御、あるいはサイバー防御や攻撃への関与など」行動を起こす技術に移行しつつあると述べた。
国防総省は今年、グーグル、オープンAI、アマゾン、マイクロソフト、スペースX、オラクル、エヌビディア、新興企業リフレクションとの新たな協定の一環として、米軍が「AIファースト」の戦闘部隊になりつつあると発表した。
「残念なことに、強力な AI システムは不正行為を行ったり、非常に危険な方法で動作したり、人間の介入に抵抗したりする可能性があります。」
同氏は、キルスイッチ法により、政府がそのような状況に迅速に介入する方法が確保されるだろうと述べた。
この法案は、The AI Policy Network、Americans for Responsible Innovation、ControlAI、AI and National Security Lead、The Alliance for Secure AI を含むいくつかのテクノロジーおよび AI 安全性グループから公的支持を受けています。
関連トピック
- 1 日前に公開
- 21 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2vqj2e9x8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-23T20:58:35+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a255/live/1eacc3a0-86d9-11f1-bba7-35d3e67315de.jpg",
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
