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
    id: "looking-at-just-the-odds-isn-t-enough-ho-20932102",
    title: "Looking at just the odds isn’t enough. How traders gain an edge on prediction markets",
    titleJa: "オッズだけを見るだけでは十分ではありません。トレーダーが予測市場で優位性を得る方法",
    summaryJa: "26歳のローガン・スデイスが予測市場のフルタイムトレーダーになってから1年も経たないうちに、1か月だけで25万ドルを集めることに成功した。それは単にプラットフォーム上でイベント契約のオッズをチェックするだけでは起こりません、と彼は言いました。賢い取引にはツールが必要です。",
    bodyOriginal: `It's been less than a year since 26-year-old Logan Sudeith became a full-time trader on prediction markets and in one month alone he managed to collect $250,000.
That doesn't happen from simply checking the odds of an event contract on the platform, he said. A clever trade requires tools.
"For the Super Bowl I bought an antenna, so that I could watch the commercials," he said, noting online streaming services could face lags. Sudeith was able to quickly trade on what companies would show ads during the largest televised U.S. sporting event, or what would be said during those commercials. "I wanted to have the lowest latency access to those."
Between Polymarket and Kalshi alone, there can be more than 100,000 active markets. That's too much for traders like Sudeith to juggle on their own. And that's why they don't.
CNBC spoke to several active traders on prediction market exchanges about how they gain an edge. From using AI bots to purchasing an antenna, traders rely on tools and peculiar methods to compete against others, and it's enough motivation for some to trade on the platforms full-time.
And while hedge funds and large institutional trading desks are known for using complicated tools that help them win in the market, these traders are often just one person doing the work from their homes.
Not every trader has the capacity to make custom workflows. That's why some platforms are offering more advanced technology to speculators, so that they don't have to build it all on their own.
But whether those new, accessible products can deliver the same results to what individuals have made for themselves is unclear.
The news, AI, repeat
One common theme among traders is reading the news. Kenneth Deneau, 32, calls it a "minimum requirement" to know what's happening in the world but admits that it can get overwhelming.
He turned to AI to scan relevant information, including the newsletters he's subscribed to and Discord servers, to find insight for potential trades.
"I think that has been probably one of the most transformative aspects of allowing me to do this now, being able to build out those tools," he said about Anthropic-owned language model Claude.
The surge in trading volume on Kalshi and Polymarket last fall drove Deneau to become a full-time prediction market trader. He left behind nearly a decade of work in institutional investing but carried over one key skill to his next gig: deep research under a time crunch.
Earlier this year, when an event contract asked the date for when President Donald Trump would fire former Attorney General Pam Bondi, Deneau relied on Pacer, a database providing court records, to figure it out before it became viral.
"If you found those filings, which I did, you could use that as a baseline to help you determine when [Bondi] actually left the office," Deneau said. "As far as I know, I was probably one of the first ones to take advantage of that."
A coder's paradise
Prediction market platforms have an Application Programming Interface, or API, that makes their live and closed markets accessible. It's a playground full of analysis for Atlanta-based data engineer Steve Farmer.
From his wife's "big closet", Farmer spent countless hours building an AI bot that would trade on Kalshi all day.
"As a trader, I wouldn't do very well myself because you know, impulses and greed and all that will just drive me nuts," he said. "A bot doesn't have all that."
His bot has about a 70% win rate in trading on economic-related event contracts on Kalshi, though he admitted it's likely not a long-term investment strategy, noting it's not replacing his retirement fund.
What it is, however, is "enough to pay for my AI bills," he said.
Protecting the edge
Michael Boss placed his first trades on Kalshi during the 2024 presidential election, and decided he wanted to start speculating more often on the platform in summer 2025. But he didn't start trading full-time until February this year, waiting until he had the necessary software.
The software Boss uses is placing many trades all the time across various markets. He wouldn't reveal exactly what he uses to train his software, showcasing just how much he wants to protect any edge he has over other traders.
"On something like Kalshi, a lot of different things need to go well," he said. "There's a ton of markets on Kalshi, so it's kind of a big problem to tackle in that way."
Expanding access
Prediction market exchanges know their most active traders have elaborate software and tools. Some platforms are looking to make trading easier for highly-engaged speculators.
Kalshi, for example, recently launched a "Pro" trading terminal, which it says makes it easier to place trades faster and view data about individual markets.
Deekaraul "Deek" Harinath, a Kalshi speculator who has placed more than 5,700 trades on the platform, was part of a select group that tested the terminal before its official launch this month. He told CNBC he often trades on the 15-minute cryptocurrency contracts, which ask if Bitcoin prices will go up or down in a quarter hour.
"Everything is faster on the Pro, and that's a big deal for me," he said. Harinath said having the ability to only click once to submit a trade, a feature of Kalshi Pro, is also an upgrade.
Still, while Harinath plans to use Kalshi Pro to place manual trades, he also intends to develop a bot for automation purposes and place trades on various short-term contracts that he's too busy to participate in manually.
Beyond the two major exchanges, startups are also trying to convince traders their tools will give them that missing edge.
Jay Malavia is a co-founder and CEO at Kairos, an Andreessen Horowitz-backed prediction market trading terminal that allows speculators to trade across various exchanges, including Kalshi and Polymarket.
Malavia said the goal at Kairos is to offer strong technology to those who can't or don't know how to build it themselves.
"There's these big trading firms that are going to build the best tech in the world, and we are going to give you the closest technology to go and compete and win in these markets," he said.
Kairos allows traders to see different contracts and price moves across exchanges, as well as deliver real-time data and headlines across various events.
And while Kairos is geared to "democratizing" technology for prediction market traders who don't have their own, Malavia also said it can be a solution for highly active traders too. That's because Kairos takes on the job of maintaining the software rather than an individual having to do it.
So long as people are manually placing trades, Boss thinks a speculator will be behind those who have tools to do the work for them.
"Anything discretionary can be systematized," Boss said. "No person is going to be as competitive as good software."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `26歳のローガン・スデイスが予測市場のフルタイムトレーダーになってから1年も経たないうちに、1か月だけで25万ドルを集めることに成功した。
それは単にプラットフォーム上でイベント契約のオッズをチェックするだけでは起こりません、と彼は言いました。賢い取引にはツールが必要です。
同氏は、「スーパーボウルのために、コマーシャルを視聴できるようにアンテナを購入した」と述べ、オンラインストリーミングサービスには遅延が生じる可能性があると指摘した。スデイス氏は、テレビで放映される米国最大のスポーツイベント中に企業がどのような広告を表示するか、あるいはそれらのコマーシャル中に何を言うかをすぐに取引することができた。 「それらへのアクセスの遅延を最小限に抑えたかったのです。」
ポリマーケットとカルシの間にだけでも、100,000 以上の活発な市場が存在する可能性があります。スデイスのようなトレーダーにとって、これは独力でやりくりするには多すぎる額だ。だからこそ彼らはそうしないのです。
CNBCは予測市場取引所でアクティブなトレーダー数名に、どのようにして優位性を得るのかについて話を聞いた。 AI ボットの使用からアンテナの購入に至るまで、トレーダーはツールや独特の方法に依存して他のトレーダーと競争しており、一部のトレーダーにとっては、フルタイムでプラットフォームで取引するのに十分な動機となっています。
また、ヘッジファンドや大手機関投資家のトレーディングデスクは、市場で勝つために複雑なツールを使用していることで知られていますが、これらのトレーダーは多くの場合、自宅で仕事をしているのはたった 1 人です。
すべてのトレーダーがカスタム ワークフローを作成できるわけではありません。そのため、一部のプラットフォームは、投機家がすべてを独自に構築する必要がないように、より高度なテクノロジーを提供しています。
しかし、これらの新しく入手しやすい製品が、個人が自分のために作ったものと同じ結果をもたらすことができるかどうかは不明です。
ニュース、AI、リピート
トレーダーに共通するテーマの 1 つは、ニュースを読むことです。ケネス・デノーさん（32）は、世界で何が起こっているのかを知ることを「最低限の要件」と呼ぶが、それが圧倒されてしまう可能性があることを認めている。
彼は AI を利用して、購読しているニュースレターや Discord サーバーなどの関連情報をスキャンし、潜在的な取引に関する洞察を見つけました。
「これらのツールを構築できるようになったのは、おそらく最も変革的な側面の 1 つだったと思います」と彼は Anthropic が所有する言語モデルのクロードについて語った。
昨年の秋にカルシとポリマーケットの取引量が急増したことをきっかけに、ドノー氏はフルタイムの予測市場トレーダーになった。彼は機関投資家として 10 年近くの仕事を残しましたが、次の仕事に 1 つの重要なスキルを引き継ぎました。それは、時間的制約の下での深い調査です。
今年初め、イベント契約でドナルド・トランプ大統領が元司法長官パム・ボンディ氏を解任する日付を尋ねられた際、ドノー氏は法廷記録を提供するデータベースであるペイサーを頼りに、それが広まる前にそれを把握した。
「もしあなたがそれらの提出書類を見つけたら、私もそうしましたが、それをベースラインとして使用して、[ボンディ]が実際にいつオフィスを去ったかを判断するのに役立ちます」とドノー氏は述べた。 「私の知る限り、私はおそらくそれを利用した最初の一人です。」
プログラマーの楽園
予測市場プラットフォームには、ライブ市場とクローズド市場へのアクセスを可能にするアプリケーション プログラミング インターフェイス (API) が備わっています。アトランタを拠点とするデータ エンジニア、スティーブ ファーマーにとって、これは分析に満ちた遊び場です。
ファーマー氏は、妻の「大きなクローゼット」から、一日中カルシで取引する AI ボットの構築に数えきれないほどの時間を費やしました。
「私自身、トレーダーとしてはあまりうまくいきません。なぜなら、衝動や貪欲、その他すべてが私を狂わせるからです」と彼は語った。 「ボットにはそのすべてが備わっているわけではありません。」
同氏のボットはカルシでの経済関連イベント契約の取引で約70％の勝率を示しているが、同氏はこれが長期的な投資戦略ではない可能性が高いことを認め、退職金の代わりにはならないと指摘した。
しかし、それは「AIの費用を支払うのに十分だ」と彼は言う。
エッジの保護
マイケル・ボス氏は、2024年の大統領選挙中にカルシで最初の取引を行い、2025年夏にはこのプラットフォームでより頻繁に投機を開始したいと決めた。しかし、彼がフルタイムで取引を開始したのは今年2月で、必要なソフトウェアが手に入るまで待っていた。
Boss が使用しているソフトウェアは、さまざまな市場で常に多くの取引を行っています。彼はソフトウェアのトレーニングに何を使用しているのか正確には明らかにせず、他のトレーダーに対する自分の優位性をいかに守りたいかを示しました。
「カルシのようなものでは、多くの異なることがうまくいく必要がある」と彼は言った。 「カルシにはたくさんの市場があるので、そのように取り組むのはある意味大きな問題です。」
アクセスの拡大
予測市場取引所は、最もアクティブなトレーダーが精巧なソフトウェアとツールを持っていることを知っています。一部のプラットフォームは、熱心な投機家にとって取引を容易にすることを目指しています。
例えば、カルシは最近「プロ」取引端末を発売し、これにより取引をより迅速に行ったり、個々の市場に関するデータを閲覧したりすることが容易になると同社は述べている。
同プラットフォームで5,700件以上の取引を行ったカルシの投機家、ディーカラウル・“ディーク”・ハリナス氏は、今月の正式発売前に端末をテストした選ばれたグループの一員だった。同氏はCNBCに対し、ビットコイン価格が15分以内に上がるか下がるかを尋ねる15分間の仮想通貨契約で取引することが多いと語った。
「Pro ではすべてが速くなり、それは私にとって大きなことです」と彼は言いました。 Harinath 氏は、Kalshi Pro の機能である 1 回クリックするだけで取引を送信できることもアップグレードであると述べました。
それでも、ハリナス氏はカルシ プロを使用して手動取引を行う予定ですが、自動化を目的としたボットを開発し、忙しくて手動で参加できないさまざまな短期契約で取引を行うつもりでもあります。
2つの主要な取引所以外にも、スタートアップ企業は、自社のツールが欠けている優位性をトレーダーに提供してくれると説得しようとしている。
ジェイ・マラヴィアは、投機家がカルシやポリマーケットを含むさまざまな取引所で取引できるようにする、アンドリーセン・ホロヴィッツが支援する予測市場取引ターミナルであるカイロスの共同創設者兼最高経営責任者（CEO）です。
マラヴィア氏は、カイロス社の目標は、強力なテクノロジーを自分で構築できない、または構築方法を知らない人々に提供することであると述べた。
「世界最高のテクノロジーを構築しようとしている大手商社があり、私たちはこれらの市場で競争して勝つために最も近いテクノロジーを提供するつもりです」と同氏は語った。
Kairos を使用すると、トレーダーはさまざまな取引所にわたるさまざまな契約や価格の動きを確認できるだけでなく、さまざまなイベントにわたるリアルタイムのデータやヘッドラインを配信することができます。
そして、カイロスは独自の予測市場トレーダーを対象としたテクノロジーの「民主化」を目指しているが、マラビア氏はまた、これは非常にアクティブなトレーダーにとってもソリューションになり得ると述べた。それは、ソフトウェアのメンテナンスを個人が行うのではなく、カイロスが引き受けるからです。
人々が手動で取引を行っている限り、その作業を行うツールを持った人々の背後には投機家がいるだろうとボス氏は考えている。
「裁量的なものはすべてシステム化できる」とボス氏は言う。 「優れたソフトウェアほど競争力を発揮できる人はいないでしょう。」
開示: CNBC とカルシには、顧客の獲得と少数出資を含む商業関係があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/traders-go-full-time-on-prediction-markets-using-ai-bots-and-antennas.html",
    publishedAt: "2026-08-01T13:44:04+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 9,
  },
  {
    id: "disappointed-by-your-skimpy-pay-raise-bl-641643c1",
    title: "Disappointed by your skimpy pay raise? Blame your healthcare benefits.",
    titleJa: "あなたのわずかな昇給に失望しましたか？医療給付のせいにする。",
    summaryJa: "企業の医療費がこれほど急速に上昇してから20年が経ちました。",
    bodyOriginal: `It’s been two decades since companies’ health-benefit costs have climbed this fast.`,
    bodyJa: `企業の医療費がこれほど急速に上昇してから20年が経ちました。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/disappointed-by-your-skimpy-pay-raise-blame-your-healthcare-benefits-8025491b?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T13:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-76272389",
    readTime: 2,
  },
  {
    id: "here-s-what-s-worth-streaming-in-august-cb4531d2",
    title: "Here’s what’s worth streaming in August 2026 on Netflix, Hulu, HBO Max and more",
    titleJa: "2026 年 8 月に Netflix、Hulu、HBO Max などでストリーミングされる価値のあるものは次のとおりです",
    summaryJa: "頭をオフにして、Apple の「テッド ラッソ」、Amazon の「Reacher」、Netflix の「アウター バンクス」などの新シーズンをお楽しみください",
    bodyOriginal: `Turn off your brain and enjoy new seasons of Apple’s ‘Ted Lasso,’ Amazon’s ‘Reacher,’ Netflix’s ‘Outer Banks’ and much more`,
    bodyJa: `頭をオフにして、Apple の「テッド ラッソ」、Amazon の「Reacher」、Netflix の「アウター バンクス」などの新シーズンをお楽しみください`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/heres-whats-worth-streaming-in-august-2026-on-netflix-hulu-hbo-max-and-more-21b78a08?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T13:01:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-83880291",
    readTime: 2,
  },
  {
    id: "faisal-islam-four-reasons-why-fifa-s-wor-e0f5bbc3",
    title: "Faisal Islam: Four reasons why Fifa's World Cup plan never stacked up",
    titleJa: "ファイサル・イスラム氏：FIFAワールドカップ計画が実現しなかった4つの理由",
    summaryJa: "ファイサル・イスラム氏：FIFAワールドカップ計画が実現しなかった4つの理由- 公開されました",
    bodyOriginal: `Faisal Islam: Four reasons why Fifa's World Cup plan never stacked up
- Published
Documents that set out Fifa's plan to part-privatise the World Cup and seen by the BBC show why the deal may have fallen apart.
The sales pitch was circulated to Fifa members this week, setting out the case for Gianni Infantino's controversial plan featuring pictures of the Spain team lifting the trophy and Argentina's fans.
The 25-page deck of slides painted a picture of American football-level revenue expectations, which pointed to a potential continuation and extension of the controversial 2026 US-influenced World Cup model.
It suggested there was the potential for $1,000+ tickets, dynamic pricing, and pressure to put broadcasting of the world's biggest sports tournament behind a paywall.
The documents make it clear that the plan and Fifa's arguments never really stacked up. Here are four reasons why.
1. The claim that football is 'under-monetised'
In the slides, Fifa's central argument was that football does not raise enough cash in relation to its fan base, that "Fifa has been under-monetised versus other leagues" and so "global football development gets squeezed".
It did this with reference to a comparative chart showing annual revenue as well as revenue per fan for Fifa, the Uefa Champions League, Premier League, US baseball and NFL American football.
On the face of it, Fifa is the poorer cousin at just $1 per global fan, compared to NFL's $52.8. But this measure is rather suspect.
The World Cup is not an annual competition; it happens once every four years. If instead this was done on revenue per World Cup 2026 match, Fifa makes multiples of the Premier League, perhaps more than three times as much.
As important, football is decentralised globally, so more of the revenues go to individual leagues, such as the Premier League or Champions League. Fifa was effectively arguing it wanted to keep more of that overall football pie.
Football's fans are also spread across the globe, in rich and poor countries alike. NFL has a much smaller base concentrated in the US and is pretty much the whole of American Football.
Finally, about half of NFL's revenues are paid out as wages. Fifa does not pay Erling Haaland or Lionel Messi or Vozinha. Profits would have yielded a rather different result than the chart’s focus on revenues.
2. Extraordinary ticket prices
According to the document, the new partly privatised entity, called Fifa Forward Enterprise (FFE), would have become the "organiser and operator of competitions" - i.e. the World Cup - and would be responsible for ticketing, broadcast, licensing and sponsorship.
That would have been a clear transfer of the organising power from a non-profit answerable to all of world football to a privately-backed company, albeit one with majority of Fifa board members.
The slides said that the FFE structure would "expand and optimise media rights monetisation" and "maximise the value of Fifa IP [Intellectual Property], which has been undermonetised, historically". This would have been a transfer of responsibility and accountability from Fifa itself.
As Fifa highlighted the revenue per fan of the NFL in the document, it raised questions about a future of free-to-air World Cup games.
This is protected by legislation in the UK and Europe, but digital rights will alter considerably in the coming years. It could also clearly have underpinned the continuation of the extraordinary ticket prices charged in 2026.
Infantino on the brink? Who might replace him if he goes?
- Published3 hours ago
Fifa executive joins Burnham in questioning Infantino
- Published15 hours ago
Fifa says 'nobody selling football' as plan continues
- Published1 day ago
3. No stated fee for the 'annual licence payment'
Why was Fifa trying to sell a $4.2bn stake?
Fifa had already said that it would give FFE a 20% stake in the organisation, which would raise an initial $4.2bn.
The document made it clear that initial cash injection would fund the $20m "extraordinary distribution" to each of the 211 member associations.
That explained the $4.2bn funding requirement. Essentially the funding would have been used to provide a $20m one-off payment for infrastructure to every voting association that would have made the decision on Infantino's plan.
It would have meant, for example, giving Montserrat a sum worth just under half its entire economy or $10,000 per person, and the same for, say, Bangladesh, a massive highly-populated growth market for global football development.
Where would the extra money for investment in Fifa's future been, given the new investment would have been immediately distributed to voting members? How much would actually have been paid back to Fifa as an "annual license payment" referred to in a flow diagram in the charts, but not quantified? Would that have been fixed or proportionate to revenues?
Did FFE have a mission to maximise revenues at all costs to provide returns for the investors?
None of these crucial questions were answered by the document.
4. The Kushner connection
The private timetable shared in the document said that investors would be given access to the materials starting this month. Terms would have been confirmed by September, and bids and transfer of funds by the end of October. This showed how advanced the plans were, and the speed with which members were being asked to decide.
The lead investors were publicly been named as Thrive Eternal, run by Joshua Kushner, the brother of President Trump's son-in law, Jared.
Thrive was almost entirely concerned with AI investments, with OpenAI taking a stake in one of its arms.
Thrive only began its sports investment arm in April, with an investment in the San Francisco Giants baseball team, which was the pioneer in sport-based dynamic pricing of tickets.
Kushner said that the fund would focus on certain live sports as "these are assets with qualities that cannot be replicated by technology".
This is an investment thesis that the value of certain forms of entertainment which can not be replaced by AI (unlike music or some films) will increase in the coming years.
So in the end, we were left with an opaque structure designed to continue the 2026 experiment with high ticket prices, commercialisation which would put pressure on broadcast costs, and inevitably lead to more matches, and more frequent tournaments. A proposal that fell apart in a matter of days.
- Published3 hours ago
- Published12 June`,
    bodyJa: `ファイサル・イスラム氏：FIFAワールドカップ計画が実現しなかった4つの理由
- 公開されました
BBCが入手したワールドカップの一部民営化というFIFAの計画を記した文書は、合意が破綻した理由を示している。
このセールストークは今週、FIFA会員に回覧され、トロフィーを掲げるスペインチームとアルゼンチンのファンの写真を特集したジャンニ・インファンティーノの物議を醸す計画の正当性を明らかにした。
25ページのスライドはアメリカンフットボールレベルの収益予想を描いており、物議を醸している2026年米国影響ワールドカップモデルの継続と延長の可能性を指摘していた。
それは、1,000ドル以上のチケット、ダイナミックプライシング、そして世界最大のスポーツトーナメントの放送を有料の壁の中に置く圧力の可能性があることを示唆しました。
この文書は、この計画とFIFAの主張が実際には決して矛盾していなかったことを明らかにしている。その理由を 4 つ挙げます。
1. サッカーは「収益化が不十分」であるという主張
スライドの中で、FIFAの中心的な主張は、サッカーはファンベースに比べて十分な資金を集めていないこと、「FIFAは他のリーグと比べて収益化が不十分」であり、そのため「世界的なサッカーの発展が圧迫されている」というものだった。
これは、FIFA、UEFAチャンピオンズリーグ、プレミアリーグ、米国野球、NFLアメリカンフットボールの年間収益とファン1人当たりの収益を示す比較表を参照して行われた。
一見すると、NFL の 52.8 ドルに比べ、FIFA は世界のファン 1 人あたりわずか 1 ドルで、最も貧しいと言えます。しかし、この措置はかなり疑わしい。
ワールドカップは毎年開催される大会ではありません。それは4年に1度起こります。代わりに、これが 2026 年ワールドカップの試合ごとの収益に基づいて行われた場合、FIFA はプレミア リーグの何倍か、おそらく 3 倍以上の収益を上げます。
重要なこととして、サッカーは世界的に分散化されているため、収益の多くはプレミア リーグやチャンピオンズ リーグなどの個々のリーグに送られます。 FIFAは事実上、サッカー全体のパイをもっと維持したいと主張していた。
サッカーのファンは、裕福な国も貧しい国も同様に世界中に広がっています。 NFL の拠点は米国に集中しており、アメリカン フットボールのほぼ全体です。
最後に、NFL の収益の約半分は賃金として支払われます。 FIFAはアーリング・ハーランドにもリオネル・メッシにもボジーニャにも給料を支払っていない。利益は、グラフの収益に焦点を当てたものとはかなり異なる結果をもたらしたでしょう。
2. 破格のチケット価格
この文書によると、FIFAフォワードエンタープライズ（FFE）と呼ばれる部分的に民営化された新しい組織は、ワールドカップなどの「大会の主催者および運営者」となり、チケット販売、放送、ライセンス供与、スポンサーシップを担当することになるという。
それは、世界のサッカー界全体に責任を負う非営利団体から、たとえFIFA理事会メンバーの過半数を擁する民間企業に組織権力を移管することになるはずだった。
スライドでは、FFEの構造は「メディア権利の収益化を拡大および最適化」し、「歴史的に収益化が不十分であったFIFA IP（知的財産）の価値を最大化する」と述べている。これはFIFA自体からの責任と責任の移譲だったろう。
FIFAが文書の中でNFLのファン1人当たりの収益を強調したことで、ワールドカップの試合の無料放送の将来について疑問が生じた。
これは英国とヨーロッパの法律によって保護されていますが、デジタル著作権は今後数年間で大幅に変化するでしょう。また、それは明らかに、2026年に課せられる異常なチケット価格の継続を裏付けていた可能性がある。
インファンティーノは瀬戸際？彼が去った場合、誰が彼の代わりをするでしょうか？
- 3 時間前に公開
FIFA幹部もバーナムとともにインファンティーノ氏への尋問に参加
- 15 時間前に公開
FIFA、計画継続中「誰もサッカーを売らない」と発言
- 1 日前に公開
3. 「年間ライセンス支払い」の料金は明記されていません
なぜFIFAは42億ドルの株式を売ろうとしたのでしょうか？
FIFAはすでにFFEに組織の20％の株式を付与し、当初42億ドルを調達すると発表していた。
この文書は、最初の現金注入が211の各加盟協会への2,000万ドルの「特別分配」の資金となることを明らかにした。
これで 42 億ドルの資金要件が説明されました。本来、この資金は、インファンティーノの計画を決定するすべての投票団体にインフラ整備のための2,000万ドルの一時金を提供するために使用されるはずだった。
それは、例えば、モントセラトに全経済の半分弱、または一人当たり1万ドルに相当する金額を与えることを意味し、また、例えば、世界的なサッカーの発展のための巨大な人口密度の高い成長市場であるバングラデシュにも同じことを意味するだろう。
新たな投資が投票権を持つメンバーに即座に分配されることを考えると、FIFAの将来への追加投資資金はどこにあったのだろうか？図のフロー図で言及されているが、定量化されていない「年間ライセンス支払い」として、実際にはいくらが FIFA に返還されることになるでしょうか?それは固定だったのでしょうか、それとも収益に比例したのでしょうか?
FFE には、投資家に利益を提供するために、どんな犠牲を払ってでも収益を最大化するという使命がありましたか?
この文書では、これらの重要な質問のいずれにも回答がありませんでした。
4. クシュナーとの関係
文書で共有された非公開スケジュールには、投資家が今月から資料にアクセスできるようになることが記載されていた。条件は9月までに確認され、入札と資金の送金は10月末までに完了する予定だった。これは、計画がどれほど進んでいたか、そしてメンバーが決定を求められているスピードを示していました。
主要投資家らは、トランプ大統領の義理の息子ジャレッド氏の弟、ジョシュア・クシュナー氏が経営するスライブ・エターナル社として公表された。
Thrive はほぼ完全に AI 投資に関与しており、OpenAI はその部門の 1 つに出資していました。
スライヴはスポーツ投資部門を4月に開始したばかりで、スポーツに基づいたチケットのダイナミックプライシングの先駆者である野球チームのサンフランシスコ・ジャイアンツに投資した。
クシュナー氏は、「これらはテクノロジーでは再現できない性質を持つ資産」であるため、この基金は特定のライブスポーツに焦点を当てると述べた。
これは、（音楽や一部の映画とは異なり）AI に代替できない特定の形式のエンターテイメントの価値が今後数年間で増加するだろうという投資理論です。
そのため最終的には、高額なチケット価格、放送コストを圧迫する商業化、そして必然的に試合数とトーナメントの頻度が増加するという、2026年の実験を継続するように設計された不透明な構造が残されました。数日で決裂した提案。
- 3 時間前に公開
- 6 月 12 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyvd8363wlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T12:41:17+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5f87/live/51e22a90-8d2c-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 8,
  },
  {
    id: "as-americans-go-direct-with-glp-1-prescr-dc431ac7",
    title: "As Americans go direct with GLP-1 prescriptions, Walmart, Costco, Amazon will be big weight-loss winners",
    titleJa: "アメリカ人がGLP-1の処方を直接行うようになると、ウォルマート、コストコ、アマゾンが減量の大きな勝者となるだろう",
    summaryJa: "ウエストラインを減らすためにGLP-1減量薬を使用するアメリカ人が増える中、小売大手は薬の価格設定や購入方法の変化に伴う収益の向上に賭けている。雇用主は、WegovyやZepboundのようなGLP-1薬の保険適用を大幅に廃止し、より多くの患者を消費者直販処方プログラムに誘導し、ウォルマート、コストコ、CVS、アマゾンに市場シェアを拡大​​する機会を提供している。小売薬局チェーンにとって、GLP-1 処方箋は単なる販売以上のものへと進化しており、何年にもわたって継続できる顧客関係を構築するための橋頭堡となり、買い物客を棚にある他のあらゆるものに引き寄せています。顧客がウォルマートから GLP-1 を入手する場合は、他のすべての処方箋を入手し、消臭剤、ペーパータオル、調味料を積み込んだほうがよいでしょう。",
    bodyOriginal: `As more Americans use GLP-1 weight-loss drugs to shrink their waistlines, retail giants are betting on a bottom-line bump tied to a shift in the way the drugs are priced and purchased. Employers are dropping coverage for GLP-1 drugs like Wegovy and Zepbound in greater numbers, nudging more patients to direct-to-consumer prescription programs, and providing Walmart, Costco, CVS and Amazon the opportunity to gain a greater share of the market.
For the retail pharmacy chains, a GLP-1 prescription is evolving into more than a simple sale — it's creating a beachhead to developing customer relationships that can run for years and pull shoppers toward everything else on the shelf. If a customer is going to get their GLP-1s from Walmart, they might as well get all their other prescriptions and load up on deodorant, paper towels, and condiments.
"Retailers are betting that if they can become the front door for obesity care, they'll earn a relationship that extends far beyond a single GLP-1 prescription," said Eric Bormel, managing director specializing in digital healthcare at Solomon Partners' healthcare group.
The DTC GLP-1 programs are customer acquisition tools, Bormel said, and retailers are increasingly valuing the entire ecosystem around the medication more than the medication itself, which is experiencing downward price pressure.
"Everyone recognizes that obesity treatment is becoming a longitudinal consumer relationship," Bormel said, noting that retailers aren't simply fighting over the same customers, but bringing in new ones through the GLP-1 business. It's one of the business tailwinds that is in stark contrast to initial concerns that GLP-1s were a headwind for retailers as consumers cut back on impulse buys and overall grocery spending.
New clothing needs is one way that retailers stand to benefit from GLP-1 usage. But the need for prescription refills fits into an even broader strategy for large retail pharmacy networks that have been betting the weight-loss drug boom, even at low margins, will pay off for their businesses.
"In a retail industry that spends billions chasing foot traffic, that is the most reliable recurring customer relationship on the market," said Jackie Swanson, managing partner at Gartner Consulting.
The prescription refill is a retail one-of-a-kind
Walmart becoming the retail pickup point for LillyDirect matters because the patient who collects a prescription walks through the store to reach it. "Pharmacy lock-in is loyalty-program economics applied to medicine, and it works because the refill, unlike almost everything else in retail, is non-negotiable," Swanson said.
She notes LillyDirect's cash prices, which run $299 to $449 a month, with the better pricing tied to refilling within 45 days. "Which is a loyalty program dressed as a discount schedule," Swanson said.
Novo Nordisk's NovoCare has a $199 price for introductory months, which later steps up to $349, a "classic acquisition funnel," Swanson said.
Meanwhile, Costco's Sesame partnership prices Wegovy at around $349 and requires a membership. "So the prescription now helps sell the $65 card," Swanson said.
Swanson says that, for customers, the discount is real, and for chains, what is a deal for customers is a deal for them, too: a minimal acquisition cost for a long-term relationship.
"When a discount is tied to a network, the patient's choice of pharmacy happens at sign-up, not at the counter, and that's a meaningful change for any pharmacy that has historically won business through service and proximity. The economics of these programs favor scale," Swanson said. "The retailer that fills the prescription tends to sell the groceries too, and pharmacy is quietly becoming the membership battleground of American retail," Swanson added.
Walmart, the nation's fifth-largest prescription provider with nearly 4,600 pharmacies, has moved aggressively to capture this shift. In April, the retailer expanded its Better Care Services digital platform to bundle GLP-1 prescriptions with weight-management support like nutrition coaching, fitness apps, and AI-driven coaching tools, while positioning itself as a one-stop destination rather than just a pickup counter. According to the most recent published data from Drug Channels Institute, a pharmacy industry research firm, Walmart currently holds 4.8% of the pharmacy market, well behind CVS's 14.7% and Walgreens' 14.6%. The DTC GLP-1 gives Walmart a new tool to try to catch up.
Amazon, which has spent years attempting to increase its healthcare footprint, is targeting the opportunity as well. In April, the company launched a GLP-1 management program through Amazon One Medical, the primary care business it acquired in 2022, and Amazon Pharmacy, offering insured patients prices as low as $25 a month and providing same-day delivery in nearly 3,000 cities, expanding to 4,500 by year's end.
Capital from retailers is flowing into weight-management platforms, virtual obesity care, nutrition coaching, metabolic health solutions, and employer care management programs.
Big retail has struggled to make healthcare profitable
The focus on GLP-1s from the major retailers is not new. As far back as 2023, then-Walmart CEO Doug McMillon said the company expected weight loss drugs to help drive sales. But that didn't necessarily translate into profitability. "Sales dollars are a lot bigger than the margin dollars," said Kroger CEO Rodney McMullen at that time. "The impact on profitability is pretty narrow," he said.
The big retailers have also struggled in the past to capture a broader slice of the healthcare pie. Walmart shuttered its Walmart Health clinics and virtual care service entirely in 2024, closing all 51 locations across six states after concluding the primary-care business wasn't sustainable amid reimbursement pressures and rising costs — five years after it first opened the clinics.
Amazon's history of healthcare efforts includes shutting down its Amazon Care telehealth service at the end of 2022, just weeks after unveiling its $3.9 billion deal for One Medical. Years earlier, it walked away from Haven, its joint health care venture with JPMorgan Chase and Berkshire Hathaway, which dissolved in 2021 without producing the cost savings the three companies had promised.
CVS has had to shutter many of its instore Minute Clinics and the company has had its share of other struggles over the years with trying to make healthcare as profitable as paper towels or back-to-school supplies.
Swanson said the timing of these DTC efforts dovetails with employers leaving the space. A survey by Mercer last month showed 6% of large employers dropped GLP-1 coverage this year, with the drugs' share of claims swelling to 11.4% from the 6.9% figure it was at in 2023. More employers have balked at paying for them because so many people could be eligible for the treatments and many patients stop them after achieving a weight-loss goal. Health insurance company Cigna said earlier this month it would stop covering the medicines for its own employees.
More employers are pointing workers to the direct-to-consumer platforms.
"Every patient who loses coverage is choosing a new front door for care this year, and retailers are competing to be that door at the exact moment of the decision. Real affordability gets delivered; a customer relationship gets acquired; both statements are true simultaneously," Swanson said.
As employers balk at cost, local pharmacies lose
Seth Friedman, pharmacy & health plan services practice leader at Gallagher, says on the other side of the opportunity for the retail chains are the independent pharmacies and non-chain players, who stand to be the big losers in this shift. "Smaller pharmacies stand to lose volume for sure," Friedman said.
Dared Price, who owns nine pharmacies located in small Kansas towns like Winfield, population 11,000, said he is already feeling the impact as customers race to the big chains for their GLP-1s. "It is frustrating to me to not be able to provide the same access to our patients that they do to CVS or Costco," Price said. "It puts independent pharmacies at a big disadvantage."
Price said the shift creates a potentially dangerous situation for some patients. "If one of my customers wants to do a DTC program and has to go to CVS or Costco, those pharmacies don't have access to the rest of their portfolio," Price said. Price, for his part, has no way of knowing whether a customer is taking GLP-1 drugs if they are getting them from big pharmacies. "My system won't flag any drug interactions with GLP drugs and there are drug interactions that can be dangerous," he said, adding it's a serious issue given that there are known interactions with other drugs like insulin or oral contraceptives that could be problematic.
CVS, however, says its pharmacists are ready to treat the whole patient. "Access is only part of the equation with GLP-1 medications. Patients also need support to stay on therapy and see results," said Sid Tenneti, senior vice president and interim president, pharmacy and consumer wellness, in a statement shared by a CVS spokesperson.
"Participation in NovoCare is one way we are assisting patients, but we are also participating in Medicare Bridge and accept most third-party prescription discount cards," the CVS spokesperson added.
That program, a new Centers for Medicare & Medicaid Services initiative launched July 1, offering eligible Medicare patients GLP-1s for weight loss at a flat $50 monthly copay, runs through a single central processor rather than through a patient's regular pharmacy of record, the kind of structural gap that worries some obesity-care specialists.
Some experts fear the focus on the lowest possible price for GLPs obscures the larger healthcare needs of patients even if pharmacies promise to watch the whole patient.
"My view on this is that the drugs are not the solution by themselves; they are a powerful tool. But the medication alone doesn't work that well. People do much better when cared for by expert clinicians," said Elina Onitskansky, founder & CEO of Ilant Health, an obesity-care center.
Onitskansky said she understands why chains are interested in the GLPs, but the race for the lowest price has created a "gold rush" mentality, and she worries that patients who participate in the DTC programs are leaving valuable information about their health behind, leaving pharmacists at a disadvantage. "I don't think fragmentation helps," she said.
Price says the pharmaceutical giants want to sign one contract and get 2,000 stores, but there are associations of smaller pharmacies with many members that could enter into similar DTC programs, but so far there's been no movement. "There are no good programs for independents. It is a travesty that there [aren't]," Price said.
—CNBC's Angelica Peebles contributed to this report.`,
    bodyJa: `ウエストラインを減らすためにGLP-1減量薬を使用するアメリカ人が増える中、小売大手は薬の価格設定や購入方法の変化に伴う収益の向上に賭けている。雇用主は、WegovyやZepboundのようなGLP-1薬の保険適用を大幅に廃止し、より多くの患者を消費者直販処方プログラムに誘導し、ウォルマート、コストコ、CVS、アマゾンに市場シェアを拡大​​する機会を提供している。
小売薬局チェーンにとって、GLP-1 処方箋は単なる販売以上のものへと進化しており、何年にもわたって継続できる顧客関係を構築するための橋頭堡となり、買い物客を棚にある他のあらゆるものに引き寄せています。顧客がウォルマートから GLP-1 を入手する場合は、他のすべての処方箋を入手し、消臭剤、ペーパータオル、調味料を積み込んだほうがよいでしょう。
ソロモン・パートナーズのヘルスケア・グループでデジタル・ヘルスケアを専門とするマネージング・ディレクターのエリック・ボーメル氏は、「小売業者は、自分たちが肥満ケアの玄関口になれれば、単一のGLP-1処方箋をはるかに超えた関係を獲得できると賭けている」と語る。
ボーメル氏によると、DTC GLP-1 プログラムは顧客獲得ツールであり、小売業者は価格下落圧力にさらされている医薬品そのものよりも、医薬品を取り巻くエコシステム全体をますます重視するようになっているという。
「肥満治療が長期的な消費者関係になりつつあることは誰もが認識している」とボーメル氏は述べ、小売業者は単に同じ顧客を奪い合っているだけではなく、GLP-1事業を通じて新しい顧客を取り込んでいると指摘した。これは、消費者が衝動買いや食料品支出全体を控える中、GLP-1が小売業者にとって逆風となるという当初の懸念とは全く対照的な、ビジネスへの追い風の1つだ。
小売業者が GLP-1 の使用から恩恵を受ける方法の 1 つは、衣料品の新たなニーズです。しかし、処方箋の補充の必要性は、たとえ利益が低くても減量薬ブームがビジネスに利益をもたらすことに賭けている大手小売薬局ネットワークにとって、さらに広範な戦略に適合する。
ガートナー・コンサルティングのマネージング・パートナー、ジャッキー・スワンソン氏は、「客足の追跡に数十億ドルを費やしている小売業界において、それは市場で最も信頼できる継続的な顧客関係である」と述べた。
処方箋リフィルは小売店独自のものです
処方箋を受け取る患者は店内を歩いてたどり着くため、ウォルマートがリリーダイレクトの小売店受け取り場所になることは重要だ。 「薬局のロックインはロイヤルティプログラムの経済学を医薬品に適用したもので、小売業界の他のほとんどすべてのものとは異なり、詰め替え品は交渉の余地がないため機能する」とスワンソン氏は語った。
彼女は、LillyDirect の現金価格は月額 299 ドルから 449 ドルで、45 日以内に補充することでより有利な価格設定になっていると指摘しています。 「これは割引スケジュールのふりをしたロイヤルティプログラムだ」とスワンソン氏は語った。
ノボ ノルディスクのノボケアの価格は導入月は 199 ドルで、その後は 349 ドルに上がるが、これは「典型的な獲得目標到達プロセス」だとスワンソン氏は語った。
一方、コストコのセサミ提携ではウィゴビーの価格は約349ドルで、会員登録が必要となる。 「つまり、この処方箋が65ドルのカードを売るのに役立っているのです」とスワンソン氏は語った。
スワンソン氏は、顧客にとって割引は本物であり、チェーンにとって顧客にとっての取引は彼らにとっても取引であり、長期的な関係を維持するための最小限の獲得コストであると述べています。
「割引がネットワークに結び付けられている場合、患者の薬局の選択は窓口ではなく登録時に行われます。これは、歴史的にサービスと近接性によってビジネスを獲得してきた薬局にとって、意味のある変化です。これらのプログラムの経済性は規模を重視します」とスワンソン氏は述べた。 「処方箋を調剤する小売店は食料品も販売する傾向があり、薬局は密かにアメリカの小売業界の会員制の戦場になりつつある」とスワンソン氏は付け加えた。
約4,600の薬局を擁する全米5位の処方箋提供会社であるウォルマートは、この変化を捉えるために積極的に動いている。同社は4月にBetter Care Servicesデジタルプラットフォームを拡張し、GLP-1処方箋に栄養コーチング、フィットネスアプリ、AI主導のコーチングツールなどの体重管理サポートをバンドルするとともに、単なる受け取りカウンターではなくワンストップの目的地としての地位を確立した。薬局業界の調査会社であるドラッグ・チャネル・インスティテュートが発表した最新のデータによると、ウォルマートは現在薬局市場の4.8％を占めており、CVSの14.7％やウォルグリーンズの14.6％を大きく下回っている。 DTC GLP-1 は、ウォルマートに追いつくための新しいツールを提供します。
アマゾンは何年にもわたってヘルスケア事業の拡大に努めてきたが、この機会も狙っている。同社は4月に、2022年に買収したプライマリケア事業であるアマゾン・ワン・メディカルとアマゾン・ファーマシーを通じてGLP-1管理プログラムを開始し、保険患者に月額25ドルという低価格を提供し、ほぼ3,000の都市で即日配達を提供し、年末までに4,500都市に拡大した。
小売業者からの資本は、体重管理プラットフォーム、バーチャル肥満ケア、栄養指導、代謝健康ソリューション、雇用主ケア管理プログラムに流れ込んでいます。
大手小売業はヘルスケアの収益化に苦戦している
大手小売業者が GLP-1 に注目するのは新しいことではありません。ウォルマートの当時の最高経営責任者（CEO）ダグ・マクミロン氏は2023年まで遡り、同社は減量薬が売上増加につながると期待していると述べた。しかし、それが必ずしも収益につながるとは限りませんでした。クローガーのロドニー・マクマレン最高経営責任者（CEO）は当時、「売上高はマージンよりもはるかに大きい」と語った。同氏は「収益性への影響はかなり狭い」と述べた。
大手小売業者もこれまで、ヘルスケア市場のより広い部分を獲得しようと苦戦してきた。ウォルマートは、最初にクリニックを開設してから5年後、償還圧力とコスト上昇の中でプライマリ・ケア事業は持続可能ではないと結論付け、2024年にウォルマート・ヘルス・クリニックとバーチャル・ケア・サービスを完全に閉鎖し、6州の51カ所すべてを閉鎖した。
Amazonのヘルスケアへの取り組みの歴史には、One Medicalとの39億ドルの契約を発表したわずか数週間後の2022年末にAmazon Care遠隔医療サービスを終了したことが含まれる。その数年前、同社はJPモルガン・チェースおよびバークシャー・ハサウェイとのヘルスケア合弁事業であるヘブンから撤退したが、同事業は3社が約束していたコスト削減を実現することなく2021年に解散した。
CVSは店内にあるミニッツ・クリニックの多くを閉鎖しなければならず、同社も医療をペーパータオルや新学期用品と同じくらい収益性の高いものにしようと長年にわたって苦闘してきた。
スワンソン氏は、こうした DTC の取り組みのタイミングは、雇用主がこの分野から撤退するタイミングと一致していると述べた。マーサーが先月行った調査によると、大規模雇用主の6％が今年GLP-1の適用を取りやめ、保険請求に占める医薬品の割合は2023年の6.9％から11.4％に膨らんだ。非常に多くの人が治療を受ける資格がある可能性があり、多くの患者が減量目標を達成した後に治療を中止するため、治療費の支払いをためらう雇用主が増えている。健康保険会社シグナは今月初め、自社従業員への医薬品の補償を中止すると発表した。
より多くの雇用主が労働者に消費者直販プラットフォームを勧めるようになっています。
「今年、保険を失ったすべての患者が治療のために新しい玄関口を選択しており、小売業者はまさにその決定の瞬間にその玄関口になれるよう競い合っている。真の手頃な価格が提供され、顧客との関係が獲得される。両方の言葉は同時に真実である」とスワンソン氏は語った。
雇用主がコストに二の足を踏む中、地元の薬局は損失を被る
ギャラガー社の薬局・医療プランサービスプラクティスリーダーであるセス・フリードマン氏は、小売チェーンにとってチャンスの裏側には独立系薬局や非チェーン企業があり、彼らはこの変化において大きな敗者となると指摘する。 「小規模な薬局は確実に販売量を失うことになる」とフリードマン氏は言う。
人口1万1000人のウィンフィールドのようなカンザス州の小さな町に9軒の薬局を経営するデアド・プライス氏は、顧客がGLP-1を求めて大手チェーンに殺到するなか、すでにその影響を感じていると語った。 「CVSやコストコと同じアクセスを患者に提供できないのはもどかしい」とプライス氏は語った。 「これにより、独立系薬局は大きな不利な立場に置かれることになります。」
プライス氏は、この変化により一部の患者にとって潜在的に危険な状況が生じると述べた。 「私の顧客の1人がDTCプログラムを希望し、CVSやコストコに行かなければならない場合、それらの薬局はポートフォリオの残りの部分にアクセスできません」とプライス氏は語った。プライス氏としては、顧客が大手薬局からGLP-1薬を入手している場合、その薬を服用しているかどうかを知る方法はない。 「私のシステムはGLP薬との薬物相互作用にはフラグを立てませんが、危険な可能性のある薬物相互作用は存在します」と同氏は述べ、インスリンや経口避妊薬など他の薬物との相互作用が問題となる可能性があることが知られていることから、これは深刻な問題だと付け加えた。
しかしCVSは、薬剤師が患者全体を治療する準備ができていると述べている。 「GLP-1治療薬へのアクセスは方程式の一部にすぎません。患者は治療を継続し、結果を確認するためのサポートも必要です」と、CVSの広報担当者が共有した声明の中で、上級副社長兼薬局・消費者ウェルネス担当暫定社長のシド・テネティ氏は述べた。
「ノボケアへの参加は私たちが患者を支援する方法の一つですが、私たちはメディケアブリッジにも参加しており、ほとんどのサードパーティの処方箋割引カードを受け入れています」とCVSの広報担当者は付け加えた。
このプログラムは、メディケア・メディケイド・サービスセンターが7月1日に開始した新しい取り組みで、適格なメディケア患者に月額一律50ドルの自己負担で減量のためのGLP-1を提供するもので、患者の通常の薬局記録ではなく、単一の中央処理装置で運営されており、一部の肥満症ケア専門家を懸念させる構造的なギャップのようなものである。
一部の専門家は、たとえ薬局が患者全体を観察すると約束したとしても、GLPの可能な限りの低価格に重点を置くことで、患者のより大きな医療ニーズが見えにくくなるのではないかと懸念している。
「これについての私の見解は、薬はそれ自体では解決策ではなく、強力なツールだということです。しかし、薬だけではそれほど効果はありません。専門の臨床医によるケアを受けると、人々の状態はずっと良くなります」と、肥満治療センター、イラント・ヘルスの創設者兼最高経営責任者（CEO）のエリナ・オニツカンスキー氏は語った。
オニツカンスキー氏は、チェーン店がGLPに興味を持っている理由は理解しているが、最安値競争が「ゴールドラッシュ」の心理を生み出しており、DTCプログラムに参加する患者が自分の健康に関する貴重な情報を置き去りにし、薬剤師が不利な立場に置かれていることを懸念していると語った。 「断片化は役に立たないと思います」と彼女は言う。
プライス氏によると、製薬大手は一つの契約を結び、2,000店舗を獲得したいと考えているが、同様のDTCプログラムに参加できる会員数の多い小規模薬局協会も存在するが、今のところ動きはないという。 「独立系の人たちにとって良いプログラムはない。存在しないのは滑稽だ」とプライス氏は語った。
—CNBCのアンジェリカ・ピーブルズがこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/glp-1-prescriptions-weight-loss-walmart-costco-amazon.html",
    publishedAt: "2026-08-01T12:30:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "openai-s-hugging-face-hack-confirmed-mon-bcf79012",
    title: "OpenAI's Hugging Face hack confirmed months of AI cyber warnings: 'Pandora's box is open'",
    titleJa: "OpenAIのHugging Faceハッキングにより、数ヶ月にわたるAIサイバー警告が確認された：「パンドラの箱は開いている」",
    summaryJa: "サイバーセキュリティのリーダーたちは数か月間、人工知能が脅威の状況を再構築し、数週間、数日にわたるサイバー攻撃を数分に圧縮すると警告してきた。先週まで、こうした脅威はまだ遠いリスクのように感じられていました。",
    bodyOriginal: `For months, cybersecurity leaders warned that artificial intelligence would reshape the threat landscape, compressing weeks- and dayslong cyberattacks into a matter of minutes.
Until last week, those threats still felt like a distant risk.
The OpenAI agent hack on Hugging Face illustrates that this era has not only arrived but also created a new challenge: AI agents will go to extremes to accomplish their goals, and do it in unpredictable ways.
"The reality is Pandora's box is open," said Sam Curry, chief information security officer at Zscaler. "We need to act as if AI is just a fact of life going forward. The most those things will do is slow it. They won't stop it."
The rollout of Anthropic's powerful Mythos model nearly four months ago raised concerns that hackers could potentially use these models to exploit vulnerabilities. Major technology companies formed coalitions to start testing this advanced AI in order to prepare.
At the time, Palo Alto Networks' product and technology chief Lee Klarich warned that AI-driven exploits would soon become the new norm and businesses had a three-to-five-month window to outpace their foes.
The Hugging Face incident couldn't come at a more opportune time for the cyber industry.
This upcoming week, thousands of industry experts descend on Las Vegas for Black Hat, one of the premier cybersecurity events of the year. It's also the first major conference for the sector since the widespread release of Mythos-class models and the government's increased focus on AI security.
In the wake of Hugging Face, businesses are not only asking how to defend themselves against adversaries but also confronting the stark reality that AI systems designed to safeguard their networks could also turn up in unexpected places.
"We've gone from science fiction into reality," said Brad Medairy, president of Booz Allen's national cyber business.
The significance of Hugging Face
Last week, OpenAI disclosed that some of its AI models broke out of a sandboxed testing environment. The agents, looking for information to cheat on an internal test, breached open-source developer platform Hugging Face and accessed four other accounts to facilitate the attack.
Hugging Face flagged the incident as the first time it dealt with an attack led by an agentic system from start to finish, signaling how advanced attack capabilities have already become without human intervention.
Days later, Anthropic identified three instances where its Claude models "gained unauthorized access to the real systems of three different organizations."
Experts say these aren't the first AI-agent-led attacks, but they're drawing outsized attention because of the scale and name recognition. In April, Jer Crane, the founder of software startup PocketOS, said a Cursor AI agent that the company was using in its own system wiped out its production database and backups in 9 seconds.
Code deletion represents more extreme cases, but SailPoint tech chief Chandra Gnanasambandam said instances with AI acquiring permissions are actually more common than people realize, and it's happening daily.
"The nature of conversations that I have had with our customers are different from even a month ago," he said. "They are a lot more aware of this problem."
Even more worrisome is that the Hugging Face incident is one of the clearest illustrations yet of the stark reality that AI doesn't operate like the human brain and will research and adapt to outsmart systems and accomplish goals.
Months ago, businesses fretted over adversaries using AI to attack. Customers are now questioning how to introduce AI without self-inflicting damage — and they will be looking for answers at Black Hat.
"It's something that for AI is pretty straightforward," said Sanaz Yashar, CEO of cybersecurity startup Zafran Security. "I have one mission: solve this problem, and I will kill everything in front of me or bypass it."`,
    bodyJa: `サイバーセキュリティのリーダーたちは数か月間、人工知能が脅威の状況を再構築し、数週間、数日にわたるサイバー攻撃を数分に圧縮すると警告してきた。
先週まで、こうした脅威はまだ遠いリスクのように感じられていました。
OpenAI エージェントによる Hugging Face へのハッキングは、この時代が到来しただけでなく、新たな課題も生み出したことを示しています。AI エージェントは目標を達成するために極端な行動をとり、それを予測不可能な方法で実行することになります。
ゼットスケーラーの最高情報セキュリティ責任者サム・カリー氏は、「現実にはパンドラの箱は開いたままだ」と語った。 「私たちは今後、AI が単なる現実であるかのように行動する必要があります。それらはせいぜい AI の速度を遅らせるだけであり、AI を止めることはできません。」
約 4 か月前に Anthropic の強力な Mythos モデルが公開されたことにより、ハッカーがこれらのモデルを使用して脆弱性を悪用する可能性があるという懸念が生じました。大手テクノロジー企業は連合を結成し、この高度な AI のテストを開始して準備を整えました。
当時、パロアルトネットワークスの製品および技術部門責任者のリー・クラリッチ氏は、AIを活用したエクスプロイトは間もなく新たな標準となり、企業が敵を出し抜くには3～5か月の猶予があると警告した。
ハグフェイス事件は、サイバー業界にとってこれ以上に好都合な時期に発生しました。
今週、今年の主要なサイバーセキュリティ イベントの 1 つである Black Hat のために、数千人の業界専門家がラスベガスに集まります。また、これは、Mythos クラスのモデルが広範囲にリリースされ、政府が AI セキュリティに重点を置くようになって以来、この分野にとって初の主要なカンファレンスでもあります。
「顔ハグ」事件を受けて、企業は敵から身を守る方法を問うだけでなく、ネットワークを保護するために設計された AI システムが予期せぬ場所に出現する可能性があるという厳しい現実にも直面しています。
ブーズ・アレンの国営サイバー事業の社長、ブラッド・メデイリー氏は「われわれはSFから現実へ移行した」と語った。
ハグフェイスの重要性
OpenAIは先週、自社のAIモデルの一部がサンドボックス化されたテスト環境から抜け出したことを明らかにした。エージェントたちは、内部テストで不正行為を行うための情報を探していたため、オープンソースの開発者プラットフォーム「Hugging Face」に侵入し、他の 4 つのアカウントにアクセスして攻撃を促進しました。
ハグ・フェイスは、このインシデントが最初から最後までエージェント・システムによって主導された攻撃に対処した初めての事件であると報告し、人間の介入なしに攻撃能力がすでにどれほど高度になっているかを示した。
数日後、Anthropic は、自社のクロード モデルが「3 つの異なる組織の実際のシステムに不正アクセスした」3 つの事例を特定しました。
専門家らは、AIエージェント主導の攻撃はこれが初めてではないが、その規模と知名度から非常に大きな注目を集めていると述べている。ソフトウェア新興企業PocketOSの創設者ジャー・クレーン氏は4月、同社が自社のシステムで使用していたCursor AIエージェントが本番データベースとバックアップを9秒で消去したと述べた。
コードの削除はより極端なケースを表しているが、SailPointの技術責任者チャンドラ・グナナサンバンダム氏は、AIが権限を取得するインスタンスは実際には人々が思っているよりも一般的であり、それは毎日起こっていると述べた。
「私と顧客との会話の性質は、1 か月前とはまったく異なります」と彼は言いました。 「彼らはこの問題をもっとよく認識しています。」
さらに憂慮すべきは、「顔を抱きしめる」事件は、AIが人間の脳のようには機能せず、賢いシステムを研究して適応し、目標を達成するという厳然たる現実を、これまでで最も明確に示した例の1つであるということだ。
数カ月前、企業は敵が AI を使って攻撃することに不安を感じていました。顧客は現在、自らに損害を与えずに AI を導入する方法に疑問を抱いており、Black Hat でその答えを探していることになります。
サイバーセキュリティの新興企業ザフラン・セキュリティの最高経営責任者（CEO）サナズ・ヤシャール氏は、「AIにとってこれは非常に簡単なことだ」と語った。 「私の使命は1つです。この問題を解決することです。目の前のすべてを殺すか、回避します。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/open-ai-hugging-face-hack-cyber-warnings.html",
    publishedAt: "2026-08-01T12:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "to-keep-growing-incoming-best-buy-ceo-sa-f121bd64",
    title: "To keep growing, incoming Best Buy CEO says he first wants to go smaller",
    titleJa: "成長を続けるために、Best Buyの次期CEOはまず規模を縮小したいと語る",
    summaryJa: "次期 CEO のジェイソン・ボンフィグ氏は、自らの手綱を引き継ぐ準備を進めており、会社のリーチを拡大し、顧客エクスペリエンスを向上させることに注力していると CNBC に語った。",
    bodyOriginal: `Best Buy is at a critical juncture as the consumer electronics retailer aims to revitalize its performance under incoming CEO Jason Bonfig, who spoke exclusively with CNBC about his strategy for the company.
The company has been struggling with slumping sales over the past few years, which it has attributed to lower consumer confidence, less tech innovation and a slower housing market. In an effort to refresh its products, improve the customer experience and drive more sales, the retailer announced Bonfig will succeed current CEO Corie Barry this fall.
As he prepares to take the helm, Bonfig has said he's focused on four key pillars: advancing Best Buy as a retail and technology company, improving its reach, enhancing the customer experience and focusing on being a human-powered company. Bonfig has also said he's looking into ways to capitalize on the artificial intelligence boom and Best Buy's spot in that next chapter.
This week, Best Buy opened two new stores, one in Jonesboro, Arkansas, and one in Cape Cod, Massachusetts, which Bonfig told CNBC illustrates his strategy as he prioritizes returning the company to long-term and sustainable growth.
"What we're finding is that there are markets that we just can't be in with a traditional size Best Buy store, but they're markets that absolutely make sense for Best Buy from a reach perspective," Bonfig said.
To lean into those markets, the company is opening new small-format stores, ranging from 12,000 to 15,000 square feet, compared to its medium-format stores, which range from 20,000 to 25,000 square feet. Some of its largest stores, including its flagship location in New York City, exceed 40,000 square feet.
The new small stores tap into Bonfig's priority of expanding the company's reach, he said.
"We also know that when we put a store close to a customer, it doesn't just change the customers' behavior in the frequency of the visits of the store … it also changes their behavior digitally as well," Bonfig said.
When Best Buy joins a new, smaller community, he said, the company has found more customers physically go to a store for the first time, but they also use the app and digital channels as well. The Jonesboro store marks Best Buy's return to the town after a tornado destroyed its previous location.
"It's a great example of a vibrant market, a place where customers are interested in our brand, but not a market that could support a 30,000- or 35,000-square-foot store," Bonfig said. "An 18,000-square-foot store allows us to have the best of all of our different categories and meet the needs at that particular location."
The second opening, in Cape Cod, is slightly larger than Best Buy's normal medium-format stores, coming in at 28,000 square feet, but Bonfig said it's another example of finding "the right size store in the right location in the right node."
He added that Best Buy Canada, which can often do things faster than its U.S. counterpart, has been after the small-format store for "an extended period of time" and has seen success with locations as small as 7,000 square feet.
Still, Bonfig emphasized that the small stores are not a replacement for its more typical-format locations.
"It's actually an enhancement of what we're doing today," he said. "But it actually allows us to reach more customers and more markets that we just were not in before."
Trying to turn the page
Over the past five years, Best Buy has seen its stock sink roughly 20% after hitting its peak in late 2021, trading at $138 per share.
For the current fiscal year, Best Buy has said it expects comparable sales in the range of a decline of 1% to an increase of 1%. Though its most recent quarter outperformed Wall Street expectations, it came on the heels of years of declines, like the third fiscal quarter of 2026, when Best Buy reported net income of $140 million, down from $273 million the year prior.
The retailer was also hit by tariffs and is navigating the soaring price of memory chips, which have caused the costs of some consumer electronics to rise.
Bonfig said he attributes Best Buy's recent stagnant performance to a general pull-forward behavior from consumers during Covid that created an unprecedented demand curve that led to a lull. Like home improvement companies, Best Buy saw outsized spending as shoppers were stuck at home and looking to upgrade.
He said Best Buy saw that behavior reset the technology life cycle for a lot of consumers while also forcing vendors to pivot from innovation to production.
"I wouldn't say that Best Buy's lost its momentum," he told CNBC. "I think there's been a very interesting couple years, or maybe more than a couple years, in the market where there was an interesting demand curve where everything was pulled forward."
As he prepares to take the reins of the company, Bonfig said he's focused on improving the customer experience, including upgrading TV selections and working with customers to replace their existing TVs.
Bonfig said he'll define success during his tenure as CEO by the customer response.
He also said the company is leaning into AI for customers and the corporate side of the business, adding that Best Buy is actively investing in new products like Meta's glasses. Best Buy also has an AI tool for customers to use, in addition to partnerships with OpenAI and Google.
"Agentic commerce and commerce through AI platforms is happening today," Bonfig said. "We're seeing traffic there, and we want to make sure that the Best Buy experience is represented."
Still, he added, he expects AI to be an enhancement to the human power behind Best Buy.
And, ultimately, as he looks to step into his new role, Bonfig said he still believes in the core strength of Best Buy despite its recent stagnation.
"Corie had an amazing strategy, and my strategy is built on top of that," Bonfig said. "There is a tremendous amount of momentum."`,
    bodyJa: `家電量販店ベスト・バイは、次期最高経営責任者（CEO）ジェイソン・ボンフィグ氏の下で業績の立て直しを目指しており、同社の戦略についてCNBCと独占インタビューした。
同社は過去数年間、売上高の低迷に苦しんでおり、その原因として消費者信頼感の低下、技術革新の鈍化、住宅市場の減速が挙げられている。製品を刷新し、顧客エクスペリエンスを向上させ、売上を増やす取り組みの一環として、小売業者であるボンフィグはこの秋に現CEOのコーリー・バリーの後任となることを発表した。
ボンフィグ氏は、経営陣に就任する準備を進める中で、小売およびテクノロジー企業としてベストバイを前進させること、リーチを改善すること、顧客エクスペリエンスを向上させること、そして人力企業であることへの注力という4つの重要な柱に注力していると述べた。ボンフィグ氏はまた、人工知能ブームとベスト・バイの次の章での地位を活かす方法を検討しているとも述べた。
今週、ベスト・バイはアーカンソー州ジョーンズボロとマサチューセッツ州ケープコッドに2店舗の新店舗をオープンした。ボンフィグ氏はCNBCに対し、これは会社を長期的かつ持続可能な成長に戻すことを優先する同氏の戦略を表していると語った。
「私たちが発見したのは、従来型の規模のベスト・バイの店舗では参入できない市場が存在するということですが、それらはリーチの観点からベスト・バイにとって絶対に意味のある市場であるということです」とボンフィグ氏は語った。
これらの市場に力を入れるため、同社は20,000～25,000平方フィートの中型店舗と比較して、12,000～15,000平方フィートの小型店舗を新たにオープンしている。ニューヨーク市の旗艦店を含む最大規模の店舗の一部は、面積が 40,000 平方フィートを超えています。
新しい小規模店舗は、会社のリーチを拡大するというボンフィグの優先事項を活用している、と同氏は述べた。
「また、店舗を顧客の近くに置くと、顧客の来店頻度が変わるだけでなく、デジタル面でも顧客の行動が変わることもわかっています」とボンフィグ氏は語った。
Best Buy が新しい小規模コミュニティに参加すると、より多くの顧客が初めて物理的に店舗に足を運ぶだけでなく、アプリやデジタル チャネルも利用することがわかったと同氏は述べました。ジョーンズボロ店は、竜巻によって以前の店舗が破壊された後、ベスト・バイが町に戻ってきたことを記念するものである。
「これは活気に満ちた市場の好例であり、顧客は当社のブランドに興味を持っているが、30,000平方フィートや35,000平方フィートの店舗をサポートできる市場ではない」とボンフィグ氏は語った。 「18,000平方フィートの店舗では、さまざまなカテゴリーのすべてを最大限に活用し、その特定の場所のニーズを満たすことができます。」
ケープコッドにオープンする2号店は、ベスト・バイの通常の中型店舗よりわずかに大きく、面積は2万8000平方フィートだが、ボンフィグ氏はこれも「適切なノードの適切な場所に適切な規模の店舗」を見つける一例だと述べた。
同氏は、ベスト・バイ・カナダはしばしば米国の同業他社よりも迅速に物事を進めることができるが、「長期間」小型店を追求しており、7,000平方フィートもの小さな店舗で成功を収めていると付け加えた。
それでも、ボンフィグ氏は、小規模店舗は、より典型的な店舗の代わりになるものではないと強調した。
「実際、これは私たちが現在行っていることを強化したものです」と彼は言いました。 「しかし実際には、これにより、これまで参入できなかったより多くの顧客とより多くの市場にリーチできるようになります。」
ページをめくろうとすると
過去5年間、ベストバイの株価は2021年後半に最高値を付けた後、約20％下落し、1株当たり138ドルで取引されている。
ベスト・バイは今会計年度について、同等の売上高が１％減から１％増の範囲になると予想していると述べた。直近の四半期はウォール街の予想を上回ったものの、ベスト・バイが純利益を前年同期の2億7,300万ドルから1億4,000万ドルと報告した2026年第3四半期など、長年の落ち込みの直後にあった。
同社は関税の影響も受けており、一部の家電製品の価格高騰を引き起こしたメモリーチップの価格高騰を乗り切ろうとしている。
ボンフィグ氏は、ベスト・バイの最近の業績停滞の原因は、新型コロナウイルス感染症下での消費者の全般的な引き戻し行動が前例のない需要曲線を生み出し、小康状態に陥ったことにあると述べた。ホームセンター企業と同様に、買い物客が家に閉じこもってアップグレードを検討しているため、ベストバイでも多額の支出が見られました。
同氏は、この行動が多くの消費者のテクノロジーのライフサイクルをリセットすると同時に、ベンダーにイノベーションから生産への方向転換を強いることをBest Buyが見ていると述べた。
同氏はCNBCに対し、「ベスト・バイが勢いを失ったとは言えない」と語った。 「市場では、すべてが前方に引っ張られる興味深い需要曲線が見られた非常に興味深い数年間、あるいはおそらく数年以上があったと思います。」
ボンフィグ氏は、会社の手綱を引き継ぐ準備を進める中で、テレビの品揃えをアップグレードしたり、顧客と協力して既存のテレビを置き換えたりするなど、顧客体験の向上に注力していると語った。
ボンフィグ氏は、CEO在任中の成功を顧客の反応によって定義すると述べた。
同氏はまた、同社は顧客やビジネスの企業側のためにAIに傾いていると述べ、ベスト・バイはメタ社の眼鏡のような新製品に積極的に投資していると付け加えた。 Best Buy は、OpenAI および Google との提携に加え、顧客が使用できる AI ツールも提供しています。
「代理店商取引とAIプラットフォームを通じた商取引が今日行われている」とボンフィグ氏は語った。 「そこにはトラフィックが集まっているので、Best Buy のエクスペリエンスを確実に表現したいと考えています。」
それでも同氏は、AIがBest Buyの背後にある人間の力を強化するものになると期待していると付け加えた。
そして最終的には、新たな役割に就こうとしているボンフィグ氏は、最近の停滞にもかかわらず、ベスト・バイの中核的な強さを依然として信じていると語った。
「コーリーは素晴らしい戦略を持っていた。私の戦略はそれに基づいて構築されている」とボンフィグ氏は語った。ものすごい勢いです。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/best-buy-ceo-jason-bonfig-smaller-stores.html",
    publishedAt: "2026-08-01T12:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 7,
  },
  {
    id: "tankers-near-oman-come-under-fire-as-ira-e169266c",
    title: "Tankers near Oman come under fire as Iran threatens to choke off shipping routes",
    titleJa: "イランが航路を封鎖すると脅し、オマーン近郊のタンカーが砲撃を受ける",
    summaryJa: "オマーン近郊のタンカーが一晩襲われたと報告しており、イランが米軍のホルムズ海峡封鎖により主要な輸送路の閉鎖につながると米国に警告した中、近くで爆発があったとの報告もあった。これとは別にクウェートは、防空体制がイランによる敵対的な無人機攻撃に直面していると述べた。",
    bodyOriginal: `A tanker near Oman reported being struck overnight, with another saying it saw an explosion nearby as Iran warned Washington that the U.S. military's blockade of the Strait of Hormuz would result in the closure of key shipping routes.
Separately, Kuwait said its air defenses confronted hostile drone attacks by Iran.
The latest conflict comes amid U.S. media reports that U.S. President Donald Trump is preparing for a fresh round of strikes against Iran as early as this weekend, as hopes of a negotiated end to the war that began on Feb. 28 recede and energy prices climb.
The United Kingdom Maritime Trade Operations Centre (UKMTO) — an organization backed by the British Navy — said Saturday it received a report of a tanker being hit by an "unknown projectile which has caused damage to the engine room."
"The tanker is not under command and the regional Coast Guard have been informed. There are no reported casualties or environmental impact," UKMTO said of the incident 11 nautical miles northeast of Oman.
Another tanker in the waters off Oman reported "seeing a large splash and explosion in close proximity to the vessel," UKMTO said.
A temporary ceasefire following the signing of a memorandum of understanding between the U.S. and Iran on June 17 has effectively broken down. Neither side has given way on key sticking points, including Iran's nuclear program and control of shipping through the Strait of Hormuz, through which about a fifth of the world's oil supplies moved before the war broke out.
Over the last week, the U.S. completed a "heavy wave" of strikes against Iran, hitting dozens of Islamic Revolutionary Guard Corps targets. In retaliation, Iran attacked U.S. military bases in Kuwait and Bahrain.
Egypt said Thursday that a drone hit two ships at its Mediterranean port of Damietta, triggering a fire. No one claimed responsibility for the strike, which marks the first attack on Egyptian soil since the war began and another sign that the conflict is expanding.
'Hitting them very hard'
The Wall Street Journal cited unnamed U.S. officials as saying Friday that Trump has ordered the military to launch a fresh attack on Iran that could begin as soon as this weekend. But Trump could call off the planned strikes, officials told the Journal, if there is progress on the diplomatic front.
"We will be hitting them very hard," The Associated Press quoted Trump as saying Friday at a televised cabinet meeting at the Camp David presidential retreat. "And you know at some point, they're going to say, 'We just can't take it anymore.'"
Axios quoted an unnamed U.S. official as saying that Trump is seriously considering attacking Iranian energy targets in the next few days, but hasn't given final orders to do so.
An Iranian official warned that the U.S.'s actions would lead to Iran tightening its control over critical maritime passages.
"The continuation of the naval blockade and warmongering by the U.S. regime will not only lock the Strait of Hormuz tighter, but will also shut down other straits and chokepoints," Iran's WANA news agency quoted Mohammad Bagher Zolghadr, Secretary of Iran's Supreme National Security Council, as saying.
"The price for this will be paid by the global economy, the energy market, and American voters," Zolghadr reportedly said.
The U.S. reimposed a naval blockade on Iranian ships on July 13, preventing its vessels from entering or leaving its ports.
Recent strikes by Iran-backed Houthi fighters in Yemen and Friday's drone strike in Egypt have raised fears that the crucial Bab el-Mandeb strait at the southern end of the Red Sea could become a second choke point for Iran to target as the two sides tussle over the Strait of Hormuz.
On Friday, West Texas Intermediate futures rose more than 1% to close at $84.67 per barrel. Brent crude, the international benchmark, also gained more than 1% to settle at $90.12. Prices fell more than 5% for the week after selling off Monday on hopes the conflict in the Middle East would de-escalate.`,
    bodyJa: `オマーン近郊のタンカーが一晩襲われたと報告しており、イランが米軍のホルムズ海峡封鎖により主要な輸送路の閉鎖につながると米国に警告した中、近くで爆発があったとの報告もあった。
これとは別にクウェートは、防空体制がイランによる敵対的な無人機攻撃に直面していると述べた。
今回の紛争は、2月28日に始まった戦争の交渉による終結への期待が後退し、エネルギー価格が上昇する中、ドナルド・トランプ米大統領が早ければ今週末にもイランに対する新たな攻撃の準備を進めているとの米メディア報道の最中に起きた。
英国海軍が支援する組織、英国海事貿易業務センター（UKMTO）は土曜日、タンカーが「エンジンルームに損傷を与えた未知の飛翔体」に衝突されたとの報告を受けたと発表した。
UKMTOはオマーン北東11海里での事故について、「タンカーは指揮下になく、地域沿岸警備隊に通報が入った。死傷者や環境への影響は報告されていない」と述べた。
オマーン沖の別のタンカーは「船のすぐ近くで大きな飛沫と爆発を見た」と報告したとUKMTOは述べた。
6月17日の米国とイランの覚書署名後の一時停戦は事実上決裂した。イランの核開発計画や、開戦前に世界の石油供給量の約５分の１がホルムズ海峡を通過していた海峡を通る船舶の管理など、重要な争点については両国とも譲歩していない。
先週、米国はイランに対する「大波」攻撃を完了し、イスラム革命防衛隊の数十の目標を攻撃した。イランは報復としてクウェートとバーレーンの米軍基地を攻撃した。
エジプトは木曜日、地中海のダミエッタ港でドローンが２隻の船に衝突し、火災が発生したと発表した。この攻撃については誰も犯行声明を出さなかったが、これは戦争が始まって以来エジプト本土への初めての攻撃であり、紛争が拡大していることを示す新たな兆候である。
「彼らをとても強く殴った」
ウォール・ストリート・ジャーナルは金曜日、トランプ大統領が軍にイランへの新たな攻撃を命令し、早ければ今週末にも開始される可能性があると匿名の米当局者の発言を引用した。しかし外交面で進展があれば、トランプ大統領は計画されていた攻撃を中止する可能性があると当局者はWSJに語った。
AP通信は、トランプ大統領が金曜日、キャンプデービッド大統領静養所でテレビ放映された閣僚会議で「我々は彼らを厳しく攻撃するだろう」と述べたと報じた。 「そして、いつか彼らは『もう耐えられない』と言うでしょう。」
アクシオスは、トランプ大統領が数日以内にイランのエネルギー目標を攻撃することを真剣に検討しているが、最終的な命令は出していない、と匿名の米当局者の発言を伝えた。
イラン当局者は、米国の行動は重要な海路に対するイランの管理強化につながると警告した。
イランのWANA通信は、イラン最高国家安全保障会議書記のモハマド・バガー・ゾルガドル氏の発言を引用し、「米国政権による海上封鎖と戦争挑発の継続は、ホルムズ海峡の封鎖を強化するだけでなく、他の海峡やチョークポイントも封鎖するだろう」と述べた。
「その代償は世界経済、エネルギー市場、そして米国の有権者が支払うことになる」とゾルガドル氏は語ったという。
米国は7月13日、イラン船舶に対する海上封鎖を再発動し、イラン船舶の入出港を阻止した。
イエメンでのイラン支援のフーシ派戦闘員による最近の攻撃と、金曜日のエジプトでの無人機攻撃により、ホルムズ海峡を巡る両国の攻防の中で、紅海の南端にある重要なバブ・エル・マンデブ海峡がイランにとって標的となる第二の難所となる可能性があるとの懸念が高まっている。
金曜日、ウェスト・テキサス・インターミディエイト先物は1％以上上昇し、1バレル＝84.67ドルで取引を終えた。国際ベンチマークであるブレント原油も1％以上上昇し、90.12ドルで落ち着いた。中東紛争が激化しないとの期待から月曜に売られた後、価格は週間で５％以上下落した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/tankers-near-oman-come-under-fire.html",
    publishedAt: "2026-08-01T10:56:11+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "russian-strikes-on-kyiv-kill-at-least-ni-4c708364",
    title: "Russian strikes on Kyiv kill at least nine, Ukraine officials say",
    titleJa: "ロシアのキエフ攻撃で少なくとも9人死亡、ウクライナ当局発表",
    summaryJa: "ロシアのキエフ攻撃で少なくとも9人死亡、ウクライナ当局発表- 公開されました",
    bodyOriginal: `Russian strikes on Kyiv kill at least nine, Ukraine officials say
- Published
At least nine people have been killed in Russian ballistic missile strikes on Kyiv, local officials said.
A further 28 people were injured in the attack on the Ukrainian capital on Saturday morning, according to the country's State Emergency Service.
Moscow has escalated deadly ballistic missile attacks on Kyiv recently, prompting Ukrainian President Volodymyr Zelensky to say that missile interceptors are urgently needed.
The strikes come two days after a suspected Russian cruise missile landed in Poland during a widespread attack on Ukraine that killed at least eight people, including six members of one family.
Kyiv's Mayor Vitali Klitschko said the capital had come under a ballistic missile attack on Saturday, with AFP reporting more than 10 explosions.
Fires broke out across the city and power cuts were reported in some areas.
Klitschko said a residential building in Shevchenkivskyi was partially destroyed, trapping people inside.
The emergency services said at least seven people were killed in a strike in the Darnytskyi district. Another 14 were injured, including two children, it reported.
In Solomyanskyi district, two people died and eight were injured, including two children, as a five-storey residential building was partially destroyed, officials said.
A missile landed near the Lithuanian embassy, breaking windows and scattering debris in the compound, Lithuania's foreign ministry said.
The attack comes after Zelensky met President Donald Trump in Washington DC earlier this week to urge the US to grant Ukraine a licence to produce Patriot interceptor missiles.
Asked about the missiles during a cabinet meeting at the Camp David retreat on Friday, Trump said the US had not agreed to Ukraine building Patriot missiles but that talks were ongoing.
He said the US had to be "very careful about letting somebody build them".
Emphasising concerns about sharing advanced US weaponry, Trump called it "a big step".
Trump's latest comments regarding Patriot missiles come weeks after he offered to give Ukraine the right to produce them.
As Russia has stepped up its air attacks, Ukraine has run low on supplies of Patriots, which remain the only weapon in its arsenal capable of downing ballistic missiles.
"I don't think this would ever happen, but, you know, those people that you give that technology, they can someday turn on you," Trump said.
Zelensky said in a post on X on Friday that he had followed up on his meeting with Trump with a "good" phone call with US Vice-President JD Vance.
"As Russia's air attacks on our country continue unabated, air defence – specifically Patriot interceptors against ballistic missiles – remains a top priority," Zelensky wrote.
For its part, Ukraine has escalated its retaliatory strikes in recent months, including attacks on several retail warehouses belonging to Russia's biggest online retailer, Wildberries.
Kyiv says it is targeting logistics hubs used by Russians to buy military equipment, and disrupting supplies to the Russian army.
Related topics
More about this story
- Published11 hours ago`,
    bodyJa: `ロシアのキエフ攻撃で少なくとも9人死亡、ウクライナ当局発表
- 公開されました
地元当局者によると、ロシアによるキエフへの弾道ミサイル攻撃で少なくとも９人が死亡した。
ウクライナ国家緊急局によると、土曜朝のウクライナ首都攻撃でさらに28人が負傷した。
ロシア政府は最近、キエフへの致命的な弾道ミサイル攻撃をエスカレートさせており、ウクライナのウォロディミル・ゼレンスキー大統領はミサイル迎撃機が緊急に必要であると述べた。
この空爆は、ウクライナへの大規模な攻撃中にロシアの巡航ミサイルとみられるものがポーランドに着陸し、一家族６人を含む少なくとも８人が死亡した２日後に行われた。
キエフのビタリ・クリチコ市長は、土曜日に首都が弾道ミサイル攻撃を受け、AFP通信は10件以上の爆発があったと報じた。
市内全域で火災が発生し、一部の地域では停電が報告された。
クリチコ氏は、シェフチェンキフスキーの住宅建物が部分的に破壊され、人々が屋内に閉じ込められたと述べた。
救急当局は、ダルニツキー地区でのストライキで少なくとも７人が死亡したと発表した。さらに子供２人を含む１４人が負傷したと報じた。
ソロミャンスキー地区では５階建て住宅が半壊し、２人が死亡、子供２人を含む８人が負傷したと当局が発表した。
リトアニア外務省によると、ミサイル１発がリトアニア大使館近くに着弾し、窓が割れ、瓦礫が館内に散乱した。
この攻撃は、ゼレンスキー氏が今週初めにワシントンDCでドナルド・トランプ大統領と会談し、米国に対しパトリオット迎撃ミサイルの製造許可をウクライナに与えるよう求めた後に行われた。
トランプ大統領は金曜日、キャンプデービッドの避難所で行われた閣議でミサイルについて質問され、米国はウクライナによるパトリオット・ミサイル製造に同意していないが、交渉は継続していると述べた。
同氏は、米国は「誰かに建設させることに細心の注意を払う必要がある」と述べた。
トランプ大統領は、米国の先進兵器の共有に対する懸念を強調し、これは「大きな一歩」だと述べた。
パトリオット・ミサイルに関するトランプ大統領の最新のコメントは、同氏がウクライナにミサイル製造の権利を与えると申し出てから数週間後に出た。
ロシアが空爆を強化する中、ウクライナは弾道ミサイルを撃墜できる唯一の兵器であるペイトリオットの供給が不足している。
「こんなことは決して起こらないと思うが、あなたがその技術を与えた人々は、いつかあなたを敵に回す可能性がある」とトランプ大統領は語った。
ゼレンスキー氏は金曜日のＸへの投稿で、トランプ大統領との会談のフォローアップとして、バンス米副大統領と「良い」電話会談を行ったと述べた。
「我が国に対するロシアの空襲が衰えることなく続く中、防空、特に弾道ミサイルに対するパトリオット迎撃ミサイルは依然として最優先事項である」とゼレンスキー氏は書いた。
一方、ウクライナはここ数カ月、ロシア最大のオンライン小売業者ワイルドベリーズに属する複数の小売倉庫への攻撃を含む報復攻撃をエスカレートさせている。
キエフは、ロシア人が軍事装備を購入するために利用する物流拠点を標的にし、ロシア軍への供給を妨害していると述べた。
関連トピック
この話についてさらに詳しく
- 11 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce973yvk7pko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T08:24:09+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8710/live/778466c0-8d4d-11f1-b2ab-0dd01740f9f6.jpg",
    readTime: 3,
  },
  {
    id: "race-to-rescue-remaining-climbers-after-c48f55e4",
    title: "Race to rescue remaining climbers after deadly avalanche in Pakistan",
    titleJa: "パキスタンで致命的な雪崩が発生し、残った登山者を救出するレース",
    summaryJa: "パキスタンで致命的な雪崩が発生し、残った登山者を救出するレース- 公開されました",
    bodyOriginal: `Race to rescue remaining climbers after deadly avalanche in Pakistan
- Published
Rescue teams in Pakistan are carrying out a second day of search for climbers caught in an avalanche on the world's 12th-highest summit.
Among the seven still missing from the 10-person expedition on Broad Peak, on the border with China, is renowned Nepal-born climber Nirmal Purja.
The operation has expanded with local Pakistani climbers volunteering, together with others from Nepal who have halted their expeditions on nearby K2.
Bad weather has been hampering the search. Pakistani officials say the bodies of three climbers have been recovered.
They have been named as American Mallory Geis, Nadhira Ahmed Abdullah Al Harthy from Oman and Pur Bahadur Gurung from Nepal.
On Friday, the Alpine Club of Pakistan said several climbers had been spotted by drones but their condition was unknown.
The club's secretary general, Ayaz Shigri, told the BBC rescuers were concerned about the risk of further avalanches.
Military helicopters are on standby to fly to assist, weather permitting.
The search and rescue operation for the team began after reports of an avalanche on Thursday on the 8,047-metre (26,400ft) peak in the Karakoram range.
The multinational climbing group was being led by Purja. He is known for climbing all 14 of the world's 8,000m-plus mountains in just over six months in 2019.
Purja joined the British Army in 2003 and the Special Boat Service - the special forces unit of the Royal Navy - in 2009.
In 2012, he reached the summit of the 6,119m Lobuche East mountain in Nepal - his first peak.
In June, Mallory Geis posted on social media that she was ready for "her first big kid climbing expedition in Pakistan".
Pur Bahadur Gurung - also known as Yukta - was certified by the International Federation of Mountain Guides Associations and close to completing the 14-peaks challenge.
Also among the group is Kili Pemba Sherpa Kili, who has so far scaled Everest 15 times. In 2021, he was a member of a historic K2 winter expedition, along with several Nepali climbers including Purja.
Broad Peak is regarded as one of the more challenging mountains for climbers. The first successful ascent was in 1957, when an Austrian expedition reached the summit.
Since then, many more have climbed the mountain, but dozens have lost their lives.
One of Broad Peak's deadliest years was 2013, when at least six fatalities were recorded.
Correction 31/7/26: A previous version of this story stated that four members of the expedition had been found dead, citing the Alpine Club of Pakistan. This was a miscommunication on its part and has since been amended.
- Published29 October 2019
- Published22 May`,
    bodyJa: `パキスタンで致命的な雪崩が発生し、残った登山者を救出するレース
- 公開されました
パキスタンの救助チームは、世界で12番目に高い山頂で雪崩に巻き込まれた登山者の捜索2日目を行っている。
中国との国境にあるブロード・ピークでの10人の遠征隊のうち、依然として行方不明の7人の中には、ネパール生まれの著名な登山家ニルマル・プルジャさんもいる。
この活動は、地元のパキスタン人登山家がボランティアとして参加するとともに、近くのK2で遠征を中止したネパールからの登山者らも加わって拡大している。
悪天候のため捜索が難航している。パキスタン当局は、登山者３人の遺体が収容されたと発表した。
彼らはアメリカ人のマロリー・ガイス、オマーンのナディラ・アーメド・アブドラ・アル・ハーシー、ネパールのプル・バハドゥル・グルンと名付けられた。
金曜日、パキスタン山岳クラブは、数人の登山者がドローンによって発見されたが、彼らの状態は不明であると発表した。
同クラブのアヤズ・シグリ事務局長はBBCに対し、救助隊はさらなる雪崩の危険性を懸念していると語った。
軍用ヘリコプターは天候がよければ支援のために飛行できるよう待機している。
チームの捜索救助活動は、木曜日にカラコルム山脈の標高8,047メートル（26,400フィート）の山頂で雪崩が発生したとの報告を受けて開始された。
多国籍の登山グループはプルジャが率いていた。彼は2019年に世界の8,000メートル以上の山14座すべてを半年強で登頂したことで知られている。
プルジャは 2003 年に英国陸軍に入隊し、2009 年に英国海軍の特殊部隊であるスペシャル ボート サービスに入隊しました。
2012年、彼はネパールにある標高6,119メートルのロブチェ・イースト山の頂上に初めて到達した。
6月、マロリー・ガイスさんはソーシャルメディアに「パキスタンでの初めての大きな子供の登山遠征」の準備ができていると投稿した。
ユクタとしても知られるプール バハドゥル グルンは、国際山岳ガイド協会連盟によって認定されており、14 峰チャレンジの達成に近づいています。
このグループには、これまでにエベレストに15回登頂したキリ・ペンバ・シェルパ・キリもいる。 2021年、彼はプルジャを含むネパール人登山家数名とともに、歴史的なK2冬季遠征のメンバーとなった。
ブロード ピークは、登山家にとって最も挑戦的な山の 1 つとみなされています。最初の登頂に成功したのは 1957 年で、オーストリアの遠征隊が頂上に到達しました。
それ以来、さらに多くの人が山に登ったが、数十人が命を落とした。
ブロード ピークで最も死者数が多かった年の 1 つは 2013 年で、少なくとも 6 人の死亡者が記録されました。
訂正 31/7/26: この記事の以前のバージョンでは、パキスタン山岳クラブの情報として、遠征隊員 4 人が死亡しているのが発見されたと述べられていました。これは側の誤解であり、その後修正されました。
- 2019 年 10 月 29 日公開
- 5 月 22 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cddjz1r01l8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T07:22:30+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/17c1/live/47cb0380-8d16-11f1-bfeb-2930213869d1.jpg",
    readTime: 3,
  },
  {
    id: "building-for-131-f-europe-races-to-prote-98e1f51e",
    title: "Building for 131°F: Europe races to protect its infrastructure from a ‘quiet catastrophe’",
    titleJa: "華氏 131 度に向けて建設: ヨーロッパはインフラを「静かな大惨事」から守るために競う",
    summaryJa: "干ばつ、猛威をふるう山火事、そして夏の異常気象に見舞われているヨーロッパ各国は、広く過小評価されている猛暑という気候課題への対応に奔走している。気候危機によってさらに加速され、ここ数カ月間の一連の記録的な熱波は、世界で最も急速に温暖化が進む大陸の広い範囲に大混乱を引き起こした。灼熱による深刻なインフラストレスにより、企業や政策立案者は対応を迫られている。",
    bodyOriginal: `Gripped by drought, raging wildfires and a summer of weather extremes, countries across Europe are scrambling to address the widely underestimated climate challenge of extreme heat.
Supercharged by the climate crisis, a series of record-breaking heat waves in recent months has wreaked havoc across large swaths of the world's fastest-warming continent. Severe infrastructure stress brought on by the searing heat has forced companies and policymakers to respond.
Eurostar, for example, recently announced that it is preparing to for unprecedented heat across Europe with a new fleet of trains designed to withstand temperatures of up to 55 degrees Celsius (131 degrees Fahrenheit).
"A decision has been taken to equip our new fleet of up to 50 Celestia trains with air conditioning capable of operating in temperatures up to 55 degrees," a Eurostar spokesperson told CNBC by email. "These trains will enter service in 2031 and run into the 2060s so it's essential to be prepared for the future."
The high-speed train operator, which runs some of the longest and largest passenger train sets in Europe, had originally intended to invest in a new fleet of trains that could operate in conditions of up to 45 degrees Celsius, but recent heat waves prompted a change of plan.
In Norway, extreme heat has pushed asphalt temperatures at Oslo Airport toward 52 degrees Celsius, prompting fire crews to douse the tarmac with thousands of liters of water to prevent damage to aircraft stands and taxiways.
Workers at Oslo Airport, which is operated by Avinor, said each cooling round used around 13,000 liters of water, with these operations repeating every hour during the hottest periods.
In Sweden, meanwhile, Stockholm's public transport operator SL has painted railway tracks white to reduce the risk of heat-related disruptions, such as track displacement and track buckling, sometimes referred to as "sun kinks."
This method has also been used on particularly vulnerable railway sections in southern Europe, including Spain and Italy.
'Adaption alone is not a viable strategy'
Wildfires in France and Spain forced the evacuation of more than 330,000 people in the past week, with both countries bracing for a fourth heat wave of the summer.
Jan Rosenow, professor of energy and climate policy at the U.K.'s University of Oxford, said the ravaged village of Le Porge at the center of France's wildlife crisis should serve as a stark reminder of the root cause of the climate crisis.
Scientists have repeatedly warned that climate change is exacerbating the frequency and intensity of extreme weather events. The burning of fossil fuels such as coal, oil and gas is the chief driver of the climate crisis.
"For decades climate scientists told us this would happen more frequently and that the severity of extreme weather and its consequences would increase. The world did not listen and we keep burning fossil fuels at record levels," Rosenow said in a LinkedIn post published on July 28.
"Adaption alone is not a viable strategy as the extreme fires show us."
How is the EU responding?
Europe is known to be warming at twice the speed of the global average since the 1980s, according to the European Union's Copernicus Climate Change Service.
James Brennan, director of climate risk modelling at Climate X, said extreme heat days are set to double or even triple across central Europe by 2050 under a high-emission scenario used by the Intergovernmental Panel on Climate Change (IPCC).
That would mean regions currently recording five to 10 days per year of extreme heat would see 20 to 30 days per year within a single generation.
"Southern Europe faces the most severe conditions, with parts of the Iberian Peninsula, southern Italy and Greece projected to exceed 40 to 55 extreme heat days per year," Brennan told CNBC.
"No region in Europe sees a reduction in extreme heat days by 2050: the acceleration is universal. But the risk is greatest where exposure is already highest, making adaptation both most urgent and most difficult in the south," he added.
Read more
A spokesperson for the European Commission, the EU's executive arm, said the Commission will soon present a new integrated framework for climate resilience and risk management.
"It is clear that the efficiency and intent of all policies is being compromised by climate change unless that is calibrated into the policy design," a Commission spokesperson told CNBC by email.
"So, independent whether we are talking about energy policy, infrastructure, transport policy, health, we have to be able to calibrate our approaches and investments according to the actual climatic conditions in which those policies need to operate," they added.
Insurers 'cannot solve this problem alone'
Lena Fuldauer, head of resilience and business development at Allianz Risk Consulting, said the challenge of extreme heat is "a quiet catastrophe" for businesses — unlike storms or earthquakes.
Businesses can typically incur equipment failures and reduced operational efficiency as well as increased maintenance and downtime during periods of excessive heat, while supply chain disruptions, power grid strains and workforce impacts can compound these problems.
Fuldauer cited recent research from Nature Science, which showed that the June 2026 heat wave saw nearly half of 854 European cities break or approach all-time heat-stress records, with a peak of 48°C recorded at Casteltermini, Italy.
"Temperatures above 50°C, which have been virtually impossible at Mediterranean locations in the pre-industrial world, have seen their likelihood increase by a factor of 10 to 1,000 under human-induced climate change – using recent climate attribution science," Fuldauer told CNBC by email. "By end-of-century, such extremes could occur annually at the hottest locations."
Fuldauer said the insurance industry needs to become a resilience partner for society, describing public-private partnerships as key to success in this area.
"The insurance industry cannot solve this problem alone but needs to work with government and international organizations to develop scalable solutions for extreme heat," Fuldauer said.`,
    bodyJa: `干ばつ、猛威をふるう山火事、そして夏の異常気象に見舞われているヨーロッパ各国は、広く過小評価されている猛暑という気候課題への対応に奔走している。
気候危機によってさらに加速され、ここ数カ月間の一連の記録的な熱波は、世界で最も急速に温暖化が進む大陸の広い範囲に大混乱を引き起こした。灼熱による深刻なインフラストレスにより、企業や政策立案者は対応を迫られている。
例えば、ユーロスターは最近、摂氏55度（華氏131度）までの気温に耐えるように設計された新しい列車群を導入し、ヨーロッパ全土で前例のない暑さに備えていると発表した。
ユーロスターの広報担当者は電子メールでＣＮＢＣに対し、「最大５０両のセレスティア列車からなる当社の新しい車両に、最高５５度の気温でも動作可能な空調装置を装備することが決定された」と電子メールで語った。 「これらの列車は 2031 年に運行を開始し、2060 年代まで運行されるため、将来に備えることが不可欠です。」
ヨーロッパで最長かつ最大の旅客列車を運行するこの高速鉄道運営会社は、当初は最高45℃の環境でも運行できる新しい列車群に投資するつもりだったが、最近の熱波により計画変更を余儀なくされた。
ノルウェーでは、猛暑によりオスロ空港のアスファルトの温度が摂氏52度近くまで上昇し、消防隊員が航空機の駐機場や誘導路への損傷を防ぐために駐機場に数千リットルの水をかけている。
アビノールが運営するオスロ空港の職員らによると、各冷却作業では約１万３０００リットルの水を使用し、最も暑い時期にはこうした作業が１時間ごとに繰り返されたという。
一方、スウェーデンでは、ストックホルムの公共交通機関運営会社SLが、「サンキンク」とも呼ばれる線路の変位や線路の座屈など、熱に関連した障害のリスクを軽減するために鉄道線路を白く塗装した。
この方法は、スペインやイタリアなど南ヨーロッパの特に脆弱な鉄道区間でも使用されています。
「適応だけでは実行可能な戦略ではない」
フランスとスペインの山火事により、過去１週間で３３万人以上が避難を余儀なくされ、両国ともこの夏４度目の熱波に備えている。
英国オックスフォード大学のエネルギー・気候政策教授ジャン・ローズナウ氏は、フランスの野生生物危機の中心にある荒廃したル・ポルジュ村は、気候危機の根本原因をはっきりと思い出させるものとなるはずだと語った。
科学者たちは、気候変動が異常気象の頻度と激しさを悪化させていると繰り返し警告してきた。石炭、石油、ガスなどの化石燃料の燃焼は、気候危機の主な原因です。
ローズナウ氏は7月28日に公開されたLinkedInへの投稿で、「何十年もの間、気候科学者らは、このような事態がより頻繁に起こり、異常気象とその影響の深刻さが増すだろうと我々に告げていた。世界は耳を貸さず、我々は記録的なレベルで化石燃料を燃やし続けている」と述べた。
「極端な火災が示しているように、適応だけでは実行可能な戦略ではありません。」
EUはどう対応しているのでしょうか？
欧州連合のコペルニクス気候変動局によると、ヨーロッパは1980年代以降、世界平均の2倍の速度で温暖化していることが知られている。
クライメートXの気候リスクモデリング担当ディレクター、ジェームズ・ブレナン氏は、気候変動に関する政府間パネル（IPCC）が採用した高排出シナリオの下では、2050年までに中央ヨーロッパ全土で猛暑日が2倍、さらには3倍になる見込みだと述べた。
つまり、現在年間5～10日の猛暑を記録している地域では、1世代以内に年間20～30日の猛暑が続くことになる。
ブレナン氏はCNBCに対し、「南ヨーロッパは最も厳しい状況に直面しており、イベリア半島、イタリア南部、ギリシャの一部では猛暑日が年間40日から55日を超えると予想されている」と述べた。
「欧州のどの地域も2050年までに猛暑日が減少するとみられており、その加速は普遍的だ。しかし、すでに暴露量が最も高い地域ではリスクが最も大きく、南部では適応が最も緊急であり、最も困難なものとなっている」と同氏は付け加えた。
続きを読む
ＥＵの執行機関である欧州委員会の報道官は、同委員会が気候回復力とリスク管理のための新たな統合枠組みを近く提示すると述べた。
「気候変動が政策設計に組み込まれない限り、すべての政策の効率性と意図が気候変動によって損なわれていることは明らかだ」と欧州委員会の広報担当者は電子メールでCNBCに語った。
「したがって、エネルギー政策、インフラストラクチャー、交通政策、健康のいずれについて話しているのかに関係なく、それらの政策が実施される必要がある実際の気候条件に応じてアプローチと投資を調整できなければならない」と彼らは付け加えた。
保険会社「単独ではこの問題を解決できない」
アリアンツ・リスク・コンサルティングのレジリエンスおよび事業開発責任者のレナ・フルダウアー氏は、嵐や地震とは異なり、猛暑という課題は企業にとって「静かな大災害」であると述べた。
企業は通常、過度の暑さの期間中に機器の故障や運用効率の低下、メンテナンスやダウンタイムの増加に見舞われる可能性がありますが、サプライチェーンの混乱、送電網の負担、労働力への影響がこれらの問題をさらに悪化させる可能性があります。
フルダウアー教授は、ネイチャー・サイエンスの最近の研究を引用し、2026年6月の熱波では、ヨーロッパの854都市のほぼ半数が、イタリアのカステルテルミニで最高気温48℃を記録するなど、熱ストレスの史上最高記録を更新、またはそれに近づいていることを示した。
「産業革命以前の世界の地中海地域では気温が50℃を超えることは事実上不可能であったが、最近の気候帰属科学を用いて人為的気候変動下ではその可能性が10～1,000倍に増加した」とフルダウアー氏は電子メールでCNBCに語った。 「今世紀末までに、このような極端な現象が最も暑い場所で毎年起こる可能性があります。」
フルダウアー氏は、保険業界は社会の強靭なパートナーになる必要があると述べ、官民パートナーシップがこの分野での成功の鍵であると述べた。
「保険業界は単独でこの問題を解決することはできないが、政府や国際機関と協力して猛暑に対する拡張可能なソリューションを開発する必要がある」とフルダウアー氏は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/europe-extreme-heat-climate-change-55c.html",
    publishedAt: "2026-08-01T06:58:41+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "iran-s-overlapping-power-centers-make-en-3b2bfd2b",
    title: "Iran's overlapping power centers make ending the war more complicated",
    titleJa: "イランの権力中枢が重複しているため、戦争終結はさらに複雑になっている",
    summaryJa: "2月28日にイラン戦争が始まって以来5カ月間、戦闘が一時停止するたびに、戦争終結の複雑さが浮き彫りになった。6月17日の覚書は、ホルムズ海峡、制裁、イランの核・ミサイル計画を巡る60日間の交渉期間を開始したが、船舶に対するイランの攻撃がエスカレーションを促したため、数週間以内に決裂した。",
    bodyOriginal: `In the five months since the Iran war began on Feb. 28, each pause in fighting has underscored the complexities of ending it.
The June 17 memorandum of understanding opened a 60-day negotiating period over the Strait of Hormuz, sanctions and Iran's nuclear and missile programs, but frayed within weeks as Iranian attacks on shipping prompted escalation.
The U.S. resumed strikes for 13 consecutive nights until it paused on July 24, only for the fighting to resume on Tuesday, with strikes overnight on Wednesday and Thursday. Iran's army said on Friday it had launched attacks on strategic U.S. assets and military bases in Kuwait and Bahrain.
Whenever negotiations resume, Iran's opaque power structure — spanning the Supreme Leader, the Revolutionary Guards, civilian government, commanders and other groups — will shape not only what is agreed, but whether any deal can be enforced.
Any ceasefire would have to pass through layers of command, and the Islamic Revolutionary Guard Corps (IRGC) commanders and Tehran-aligned groups may interpret the terms differently. Attacks attributed this week to Iran-aligned Iraqi militias on Saudi oil facilities and to Yemen's Houthis on pipeline infrastructure show how groups sympathetic to Iran could widen the conflict.
Why Iran's power structure complicates a ceasefire
Attacks on commercial shipping could become an early test of Iran's wartime balance of power.
The U.S. has always emphasized it wants to see the Strait of Hormuz reopened without tolls. While Tehran's civilian government is seeking economic relief and sanctions easing, elements within the security establishment may view continued pressure in the strait as an important source of leverage.
Iran's civilian government hopes to unlock frozen funds to provide financial relief for the population of over 90 million Iranians crippled by decades of sanctions.
The government has long been undermined by the IRGC, who are "the dominant force on war and national security," Sanam Vakil, director, Middle East North Africa Program at Chatham House, told CNBC.
They operate "missiles, drones, intelligence networks and regional armed partnerships, and during active conflict its commanders can exercise considerable autonomy," she added.
"The civilian government still matters, and the president can shape diplomacy, economic policy and the work of the Supreme National Security Council, but he does not command the armed forces," Vakil continued.
Who controls Iran's military decisions?
President Masoud Pezeshkian leads Iran's civilian government but ultimate authority over national security rests with Supreme Leader Ayatollah Ali Khamenei, while the IRGC exercises significant operational autonomy.
While the Supreme Leader has the final say over national security, "he does not personally direct every tactical operation," Vakil said.
The IRGC has become Iran's dominant military and security institution, overseeing missile forces, drones, regional operations and relationships with armed groups aligned with Tehran. It answers directly to the Supreme Leader rather than the civilian government.
It exists alongside Iran's conventional military but is more powerful politically and oversees foreign operations and Iran's proxies, like Hezbollah. Crucially, these proxies export the ideology of the Islamic Republic through weapons, training and funding. The IRGC also oversees Iran's internal security through the Basij paramilitary force.
What it means for negotiations
This week marked the end of a temporary halt in hostilities, after the U.S. and Saudi Arabia struck Iran-backed militias in Iraq. Iran launched a surprise missile attack on U.S. forces in Jordan, all of which were intercepted according to the U.S. military.
The strike underscored how quickly the conflict can expand even as diplomats attempt to restart negotiations.
Earlier this week, diplomats sought to give peace talks "some space." Iran's Foreign Ministry spokesperson, Esmail Baghaei, on Monday said Iran currently has "no negotiations with the United States."
Amos Hochstein, former senior advisor to President Joe Biden and managing partner at TWG Global, told CNBC: "Iran has no intention of returning to the status quo before the war."
"A ceasefire is not a switch that can simply be flipped. Iran wants to translate battlefield realities into political gains before locking itself into a new status quo," Alex Vatanka, senior fellow at the Middle East Institute, told CNBC.`,
    bodyJa: `2月28日にイラン戦争が始まって以来5カ月間、戦闘が一時停止するたびに、戦争終結の複雑さが浮き彫りになった。
6月17日の覚書は、ホルムズ海峡、制裁、イランの核・ミサイル計画を巡る60日間の交渉期間を開始したが、船舶に対するイランの攻撃がエスカレーションを促したため、数週間以内に決裂した。
米国は7月24日に一時停止するまで13夜連続でストライキを再開したが、火曜日に戦闘が再開され、水曜日と木曜日には夜間ストライキが行われた。イラン軍は金曜日、クウェートとバーレーンにある米国の戦略的資産と軍事基地への攻撃を開始したと発表した。
交渉が再開されるたびに、最高指導者、革命防衛隊、文民政府、司令官、その他のグループにまたがるイランの不透明な権力構造が、合意内容だけでなく、協定を履行できるかどうかも左右することになる。
停戦には複数の指揮命令を通過する必要があり、イスラム革命防衛隊（IRGC）の司令官とイランと連携するグループは条件を異なる解釈をする可能性がある。今週、サウジアラビアの石油施設に対するイランと同盟関係にあるイラク民兵組織による攻撃と、パイプラインインフラに対するイエメンのフーシ派による攻撃は、イランに同情的なグループがいかに紛争を拡大する可能性があるかを示している。
イランの権力構造が停戦を複雑にする理由
商業船舶への攻撃は、戦時中のイランの力の均衡を試す初期の試練となる可能性がある。
米国はホルムズ海峡が通行料なしで再開されることを望んでいると常に強調してきた。テヘラン文民政府は経済救済と制裁の緩和を求めているが、治安体制内の勢力は海峡における継続的な圧力を重要なてことみなしている可能性がある。
イラン文民政府は、数十年にわたる制裁によって不自由な状態にある9,000万人以上のイラン国民に経済的救済を提供するために、凍結された基金を解除したいと考えている。
チャタム・ハウスの中東北アフリカ・プログラム責任者のサナム・ヴァキル氏はCNBCに対し、政府は「戦争と国家安全保障における支配的な勢力」である革命防衛隊によって長い間弱体化されてきたと語った。
彼らは「ミサイル、無人偵察機、諜報ネットワーク、地域的な軍事提携を運用しており、紛争が進行している間、指揮官はかなりの自治権を行使できる」と付け加えた。
「文民政府は依然として重要であり、大統領は外交、経済政策、国家安全保障最高会議の活動を決定することができるが、軍を指揮することはできない」とバキル氏は続けた。
イランの軍事的決定をコントロールしているのは誰ですか?
マスード・ペゼシキアン大統領はイラン文民政府を率いているが、国家安全保障に関する最終的な権限は最高指導者ハメネイ師にあり、革命防衛隊は大幅な運営上の自主権を行使している。
最高指導者は国家安全保障について最終決定権を持っているが、「あらゆる戦術作戦を個人的に指揮するわけではない」とバキル氏は語った。
革命防衛隊はイランの有力な軍事・安全保障機関となっており、ミサイル部隊、無人機、地域作戦、テヘランと同盟関係にある武装集団との関係を監督している。それは文民政府ではなく最高指導者に直接答えます。
それはイランの従来の軍隊と並行して存在するが、政治的にはより強力であり、外国の作戦やヒズボラのようなイランの代理組織を監督している。重要なのは、これらの代理人が武器、訓練、資金提供を通じてイスラム共和国のイデオロギーを輸出していることです。革命防衛隊はまた、民兵組織バスィージを通じてイラン国内の安全保障も監督している。
交渉にとって意味があること
米国とサウジアラビアがイラクでイラン支援の民兵組織を攻撃したことを受け、今週、敵対行為の一時停止が終了した。イランはヨルダン駐留米軍にミサイル奇襲攻撃を開始したが、米軍によると全て迎撃された。
このストライキは、外交官が交渉を再開しようとしているにもかかわらず、紛争がいかに急速に拡大する可能性があるかを浮き彫りにした。
今週初め、外交官らは和平交渉に「ある程度の余地」を与えるよう求めた。イラン外務省のエスマイル・バガエイ報道官は月曜、イランは現在「米国と交渉を行っていない」と述べた。
ジョー・バイデン大統領の元上級顧問でTWGグローバルのマネージングパートナーであるアモス・ホッホシュタイン氏はCNBCに対し、「イランには戦前の現状に戻るつもりはない」と語った。
中東研究所の上級研究員アレックス・バタンカ氏はCNBCに対し、「停戦は簡単に切り替えられるスイッチではない。イランは自らを新たな現状に固定する前に、戦場の現実を政治的利益に変えたいと考えている」と語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/01/iran-ceasefire-power-structure.html",
    publishedAt: "2026-08-01T06:52:42+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "fifa-scraps-controversial-world-cup-inve-a09cd518",
    title: "Fifa scraps controversial World Cup investment plan",
    titleJa: "FIFA、物議を醸したワールドカップへの投資計画を撤回",
    summaryJa: "FIFA、物議を醸したワールドカップへの投資計画を撤回- 公開されました",
    bodyOriginal: `Fifa scraps controversial World Cup investment plan
- Published
Fifa president Gianni Infantino says he has scrapped the controversial plan to sell off stakes in the governing body's competitions to private investors following widespread opposition.
Infantino said it had become clear the project had "created divisions" that are "no longer in the interest" of its original objective.
The Swiss official added: "As a result, this proposal will not proceed."
Infantino had offered Fifa's 211 member associations $40m (£30m) if they backed a proposal for private investment in its tournaments, including the men's and women's World Cups.
However, Uefa - which governs European football - responded by voting to boycott World Cups if the plans went ahead, and other governing bodies also voiced their opposition.
Infantino on the brink? Who might replace him if he goes?
- Published8 hours ago
On Friday, Fifa's chief operating officer Kevin Lamour said the governing body's own administration had been "deceived" about the project.
Carlos Cordeiro - Infantino's senior adviser on global strategy and governance - resigned over the matter, saying the proposal was "a bad deal for football" and would "mortgage football's future".
That came after two other major confederations spoke out against the plans.
Concacaf, which governs football in North, Central America and the Caribbean - and hosted this summer's World Cup - said its members "rejected" the proposal, with sources saying the vast majority of associations from the region are losing, or have lost, faith in Infantino.
The Asian Football Confederation (AFC) said it stood in "solidarity" with Uefa and Concacaf, while UK Prime Minister Andy Burnham said Infantino was "the wrong man" to lead Fifa.
It means Infantino is now under immense pressure as he seeks re-election for a fourth term as president at the Fifa Congress in March.
"Our purpose has always been - and will always be - to unite and improve," the 56-year-old added in a statement.
"Moving forward, my intent is to bring all interested parties back together in the coming days and weeks in the spirit of shared interest in our game."
AFC president Sheikh Salman bin Ebrahim Al Khalifa welcomed the withdrawal of the plan.
"The future of global football must always be shaped through proper consultation, collective dialogue and respect for the established governance structures of our game," he said.
Infantino's plans were unlikely to pass
Despite rejections from Uefa and Concacaf, Fifa initially vowed to continue with its proposals on Friday, saying "nobody is selling football".
However, Infantino would have needed the backing of a majority of member associations to pass the plans - meaning 106 of its 211 members needed to vote in favour.
That became unlikely when the AFC joined Uefa and Concacaf in opposing the plans.
Uefa has 55 votes, Concacaf has 35 and Asia has 46.
If all member associations backed the stance of their governing body, that would have meant 136 nations voting against Infantino's plan.
Governing bodies in Africa (CAF) and Oceania (OFC) had said they would discuss Fifa's plan in August.
Conmebol - South American football's governing body - said it had asked Fifa for "additional information and clarifications" regarding the "scope, structure, governance and possible effects" of the proposals.
What was Infantino's plan?
Fifa and Infantino wanted to create a commercial subsidiary to run its main events, including its World Cups, with external investors able to buy stakes in it.
It said it would "invite third parties to make minority, non-controlling investments" in a new subsidiary - Fifa Forward Enterprise (FFE).
Infantino set a deadline of 19 September for football federations to accept his plans if they wanted to access an initial $20m (£15m).
A 25-page document created by investment bank JP Morgan laid out how Fifa's tournaments would expand to hit an estimated increased payout of 24m euros (£20.5m) per member association in the 2035-2039 cycle.
It mentioned "new business initiatives" and "attracting top talent with incentive-driven compensation".
The World Cup is described in it as the "most widely viewed" sporting event but Fifa, by contrast, is said to be "under-monetised".
There was no mention in the document of the women's game.
Fifa said Thrive Eternal was expected to lead the proposed investor group for FFE.
Thrive is an American venture capital firm founded by Joshua Kushner - the brother of US President Donald Trump's son-in-law Jared.
Trump - addressing the proposals for the first time on Friday - said he had not spoken to Infantino about the plans.
The two have developed a close relationship since Trump assumed office for a second time in 2025.
Can Infantino survive?
Infantino became Fifa president in 2016 when he beat AFC president Sheikh Salman by 115 votes to 88.
Fifa's next president will be confirmed at the organisation's 77th Congress in Morocco next March. Candidates have until 18 November to put their names forward.
Prior to this week, it had been anticipated Infantino would be re-elected unopposed. Associations around the world, including some in Europe, had already confirmed their intention to vote for him.
It remains to be seen if the events of this week will result in a mass withdrawal of their support.
In his statement, Infantino reiterated his plan was designed to strengthen member associations, "especially in countries where support is most needed" - but the proposal clearly created division within Fifa itself.
Cordeiro, who represented Fifa on the White House taskforce for the 2026 World Cup, is the first senior figure at the governing body to resign over the plans.
In a lengthy statement, Cordeiro said he "unequivocally" opposed the plans and "did not accept the proposition" Fifa needed outside investors to "unlock greater value". He added he had no involvement in the proposal.
It is understood Infantino even left some of Fifa's eight vice-presidents in the dark about his plan, which it is claimed could have raised $10bn (£7.5bn).
Lamour called it "the project of one person" and said "a president must bring people together, unite them, and inspire them" but this was "the opposite".
"If that means I lose my job, then so be it," he added. "I will understand and respect that decision. At least I'll sleep well tonight."
'Bruised Infantino makes humiliating climbdown' - analysis
As reports first emerged on Tuesday about Fifa's plans, a senior figure in English football told me the story would be as big, if not bigger, than the European Super League.
I do not think he felt it would unravel in quite the same way - but the idea only took two days longer than Super League to be scrapped.
There have been no fan protests on the streets, but animosity towards the plans was evident from the moment the likely implications dawned on the game.
Infantino is an astute politician. He knew the numbers were against him and has decided to cut his losses now rather than risk further personal damage.
It is a humiliating moment - but for Infantino, the real work starts now. He has some significant bridge building to do.
In their statement - which, in its own way, was just as damning as Uefa's threatened boycott - the Asian Football Confederation (AFC) pointed to a much wider issue.
"The AFC considers this issue extends far beyond a single proposal," it read. "Rather, it has exposed fundamental weaknesses in Fifa's consultation and decision-making processes that must now be addressed."
Infantino cannot just walk away from the past few days as though nothing has happened.
There are a lot of angry people in football who feel he has been acting beyond his power - just as the organisation's chief operating officer suggested on Friday.
The immediate crisis has passed. Over the short to medium term, it will be fascinating to see whether Infantino can restore his reputation.
Timeline
Monday, 27 July
In a 15-slide post on his personal Instagram account, Fifa president Gianni Infantino tells his critics to "meditate, pray or watch a football match" instead of "spreading hate and false rumours" about his leadership.
Tuesday, 28 July
The Times and Financial Times report Infantino's plan to sell stakes in its competitions, including the World Cup, to private investors.
Uefa publishes its first statement saying football is "not Fifa's to sell", and accuses Fifa of 'crossing a line'.
Fifa issues statement confirming the plans.
Wednesday, 29 July
Infantino writes to all 211 Fifa member associations saying they will receive $40m (£30m) if they back his plans, but must do so by 19 September if they want to access an initial $20m (£15m).
Uefa says Fifa "cannot continue to use our sport to enrich themselves and their friends".
Thursday, 30 July
Uefa's 55 member associations vote to boycott World Cups if Infantino's plan goes ahead.
Concacaf says its 41 member associations also "rejected" the proposal.
Friday, 31 July
Fifa says "nobody is selling football" and vows to continue with the plan.
Asian Football Confederation (AFC) says it "stands in solidarity" with Uefa and Concacaf, though stops short of unequivocally rejecting Infantino's proposal.
A senior adviser to Infantino, Carlos Cordeiro, resigns, citing "a bad deal for football" that would "mortgage football's future".
UK Prime Minister Andy Burnham says Infantino is the "wrong man" to lead Fifa.
Fifa's chief operating officer Kevin Lamour says the governing body's own administration has been "deceived" about the project.
Saturday, 1 August
Infantino releases statement at about 00:30 BST on Saturday, saying the plan will not proceed.
Related topics
- Published8 June
- Published8 June`,
    bodyJa: `FIFA、物議を醸したワールドカップへの投資計画を撤回
- 公開されました
FIFAのジャンニ・インファンティーノ会長は、広範な反対を受けて、運営団体の競技会の株式を個人投資家に売却するという物議を醸した計画を撤回したと述べた。
インファンティーノ氏は、このプロジェクトが当初の目的とは「もはや利益にならない」「分断を生み出した」ことが明らかになったと述べた。
スイス当局者は「結果として、この提案は進められない」と付け加えた。
インファンティーノ氏は、FIFA加盟211協会に対し、男女ワールドカップを含む大会への民間投資の提案を支持する場合には4,000万ドル（3,000万ポンド）を提供すると提案していた。
しかし、欧州サッカーを統括するUEFAは、この計画が実行される場合にはワールドカップをボイコットする投票で応じ、他の統括団体も反対を表明した。
インファンティーノは瀬戸際？彼が去った場合、誰が彼の代わりをするでしょうか？
- 8 時間前に公開
金曜日、FIFAの最高執行責任者ケビン・ラムール氏は、FIFA運営当局がこのプロジェクトについて「だまされていた」と述べた。
インファンティーノ氏の世界戦略とガバナンスに関する上級顧問であるカルロス・コルデイロ氏は、この提案は「サッカーにとって悪い取引」であり、「サッカーの将来を抵当に入れることになる」として、この問題をめぐって辞任した。
これは、他の2つの主要な連盟がこの計画に反対を表明した後のことだった。
北、中米、カリブ海地域のサッカーを統括し、今夏のワールドカップを主催するコンカカフは、加盟団体がこの提案を「拒否した」と述べ、関係者によると、この地域のサッカー協会の大半がインファンティーノ氏への信頼を失いつつある、あるいは失っているという。
アジアサッカー連盟（AFC）はUEFAとコンカカフと「連帯」すると表明し、英国のアンディ・バーナム首相はインファンティーノ氏がFIFAを率いるには「間違った人物」だと述べた。
これは、3月のFIFA総会で会長として4期目の再選を目指すインファンティーノ氏が現在、計り知れないプレッシャーにさらされていることを意味する。
「私たちの目的はこれまでも、そしてこれからも、団結して改善することだ」と56歳の彼は声明で付け加えた。
「今後、私の意図は、私たちのゲームに対する共通の関心の精神に基づいて、今後数日から数週間以内にすべての関係者を再び一堂に会させることです。」
AFC会長シェイク・サルマン・ビン・エブラヒム・アル・ハリファは計画の撤回を歓迎した。
「世界のサッカーの未来は、常に適切な協議、集団的な対話、そして確立されたサッカーの統治構造の尊重を通じて形作られなければならない」と同氏は語った。
インファンティーノの計画が通る可能性は低い
ＵＥＦＡとコンカカフからの拒否にもかかわらず、ＦＩＦＡは当初、金曜日に「誰もサッカーを売り込んでいない」として、提案を続行することを誓った。
しかし、インファンティーノがこの計画を可決するには、加盟団体の過半数の支持が必要だった。つまり、211人の会員のうち106人が賛成票を投じる必要があった。
AFCがUEFAとコンカカフに加わって計画に反対したことで、その可能性は低くなった。
UEFAは55票、コンカカフは35票、アジアは46票を獲得している。
もし全加盟協会が統括団体の立場を支持していれば、136カ国がインファンティーノ氏の計画に反対票を投じたことになる。
アフリカ（CAF）とオセアニア（OFC）の統治機関は、FIFAの計画について8月に協議すると発表していた。
南米サッカーの統括団体であるコンメボルは、提案の「範囲、構造、ガバナンス、考えられる影響」に関する「追加情報と説明」をFIFAに求めたと発表した。
インファンティーノの計画は何でしたか？
FIFAとインファンティーノは、ワールドカップを含む主要イベントを運営するための商業子会社を設立し、外部投資家がその株式を購入できるようにしたいと考えていた。
同社は、新しい子会社であるFIFAフォワードエンタープライズ（FFE）に対して「少数株主非支配投資を行うよう第三者を招待する」と述べた。
インファンティーノ氏は、最初の2,000万ドル（約1,500万ポンド）の資金にアクセスしたい場合、サッカー連盟が彼の計画を受け入れる期限を9月19日と設定した。
投資銀行JPモルガンが作成した25ページの文書には、2035年から2039年のサイクルで加盟団体当たり推定2,400万ユーロ（約2,050万ポンド）の増額を達成するためにFIFAのトーナメントがどのように拡大されるかが示されている。
「新たな事業への取り組み」と「インセンティブ主導の報酬による優秀な人材の獲得」について言及した。
その中でワールドカップは「最も広く視聴されている」スポーツイベントであるとされているが、対照的にFIFAは「収益化が不十分」だと言われている。
文書には女子の試合に関する言及はなかった。
FIFAは、スライブ・エターナルがFFEの提案された投資家グループを率いることが期待されていると述べた。
Thrive は、ドナルド・トランプ米大統領の義理の息子ジャレッドの弟であるジョシュア・クシュナーによって設立された米国のベンチャーキャピタル会社です。
トランプ大統領は金曜日に初めてこの提案について言及し、計画についてインファンティーノ氏とは話していないと述べた。
トランプ氏が2025年に二度目の大統領に就任して以来、両者は緊密な関係を築いてきた。
インファンティーノは生き残ることができるのか？
インファンティーノ氏は2016年にAFC会長シェイク・サルマン氏を115票対88票で破り、FIFA会長に就任した。
FIFAの次期会長は来年3月にモロッコで開催される第77回大会で承認される予定だ。候補者は11月18日までに名乗りを上げなければならない。
今週まではインファンティーノ氏が無投票で再選されると予想されていた。ヨーロッパの一部を含む世界中の協会はすでに彼に投票する意向を確認していた。
今週の出来事が彼らの支持の大量撤退につながるかどうかはまだ分からない。
インファンティーノ氏は声明の中で、自身の計画が「特に支援を最も必要としている国」で加盟協会を強化することを目的としていると繰り返したが、この提案は明らかにFIFA内部に分裂を生み出した。
2026年ワールドカップのホワイトハウス対策委員会でFIFAの代表を務めたコルデイロ氏は、この計画を巡って辞任した理事会の幹部としては初めてとなる。
コルデイロ氏は長い声明の中で、この計画に「明白に」反対し、FIFAが「より大きな価値を引き出す」ために外部投資家を必要とする「提案を受け入れなかった」と述べた。同氏は、この提案には関与していないと付け加えた。
インファンティーノ氏は、FIFAの8人の副会長の一部にも自分の計画について黙らせたとされており、その計画により100億ドル（約7500億円）を調達できる可能性があると主張されている。
ラムール氏はこれを「一人の人間のプロジェクト」と呼び、「大統領は人々を団結させ、団結させ、鼓舞しなければならない」と述べたが、これは「逆」だった。
「それが私が仕事を失うことを意味するなら、それはそれでいい」と彼は付け加えた。 「私はその決定を理解し、尊重します。少なくとも今夜はよく眠れます。」
「傷ついたインファンティーノが屈辱的なクライムダウンをする」 - 分析
火曜日にFIFAの計画に関する報道が初めて出たとき、イングランドサッカー界の幹部は、この話は欧州スーパーリーグと同等、もしくはそれ以上に大きなものになるだろうと私に語った。
彼はそれがまったく同じ方法で解決するとは思っていなかったとは思いますが、このアイデアが廃止されるまでにスーパーリーグよりも2日だけ長くかかっただけでした。
路上でファンの抗議活動は起きていないが、試合に影響が及ぶ可能性が生じた瞬間から、この計画に対する敵意は明らかだった。
インファンティーノは聡明な政治家である。彼は数字が自分にとって不利であることを知っており、これ以上個人的な損害を被るリスクを冒すよりも、今すぐ損失を削減することに決めました。
それは屈辱的な瞬間だが、インファンティーノにとって本当の仕事はこれから始まる。彼には重要な橋を建設しなければならないことがあります。
アジアサッカー連盟（AFC）は、その声明の中で――それはある意味、UEFAのボイコット脅しと同じくらいひどいものだった――の中で、より広範な問題を指摘した。
「AFCは、この問題は単一の提案をはるかに超えたものであると考えている」と書かれている。 「むしろ、これはFIFAの協議と意思決定のプロセスにおける根本的な弱点を露呈させたものであり、今後対処しなければならない」
インファンティーノは、何事もなかったかのように過去数日間をただ立ち去ることはできない。
サッカー界には、サッカー協会の最高執行責任者が金曜日に示唆したように、彼が権限を超えた行動をとっていると感じて怒っている人がたくさんいる。
差し迫った危機は去った。短期から中期的には、インファンティーノが評判を回復できるかどうかに注目が集まるだろう。
タイムライン
7月27日月曜日
FIFA会長のジャンニ・インファンティーノは、自身のインスタグラムアカウントに投稿した15枚のスライドの中で、自身のリーダーシップについて「憎しみや虚偽の噂を広める」のではなく、「瞑想したり、祈ったり、サッカーの試合を観戦したりする」よう批判者たちに呼びかけている。
7月28日火曜日
タイムズ紙とフィナンシャル・タイムズ紙は、インファンティーノがワールドカップを含む自社大会の株式を個人投資家に売却する計画を報じている。
UEFAはサッカーは「FIFAが売るものではない」との初の声明を発表し、FIFAが「一線を越えている」と非難した。
FIFAは計画を確認する声明を発表。
7月29日水曜日
インファンティーノ氏は、全211のFIFA加盟協会に書簡を送り、同氏の計画を支持すれば4,000万ドル（約3,000万ポンド）を受け取るが、最初の2,000万ドル（約1,500万ポンド）を獲得するには9月19日までにそうする必要があると述べている。
UEFAは、FIFAが「自分たちとその友人たちを豊かにするために我々のスポーツを利用し続けることはできない」と述べた。
7月30日（木）
インファンティーノ氏の計画が実行された場合、UEFA加盟55協会はワールドカップのボイコットに投票する。
コンカカフは、加盟41団体もこの提案を「拒否」したとしている。
7月31日金曜日
FIFAは「誰もサッカーを売り込んでいない」と述べ、計画を継続すると誓った。
アジアサッカー連盟（AFC）は、インファンティーノ氏の提案を明確に拒否するまでには至っていないものの、UEFAとコンカカフと「連帯する」としている。
インファンティーノ氏の上級顧問、カルロス・コルデイロ氏が辞任し、「サッカーにとって悪い取引」であり、「サッカーの将来を抵当に入れる」ことになると述べた。
英国のアンディ・バーナム首相は、インファンティーノ氏はFIFAを率いるには「間違った人物」だと述べた。
FIFAの最高執行責任者ケビン・ラムール氏は、FIFA運営当局がこのプロジェクトについて「だまされていた」と述べた。
8月1日土曜日
インファンティーノ氏は土曜日午前０時３０分（英国標準時間）頃に声明を発表し、計画は続行しないと述べた。
関連トピック
- 6 月 8 日発行
- 6 月 8 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/sport/football/articles/czekr6kn58po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T05:42:31+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6843/live/935b3ad0-8d6c-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 10,
  },
  {
    id: "israeli-west-bank-settler-tells-bbc-atta-fb847163",
    title: "Israeli West Bank settler tells BBC attacks on Palestinians are justified as revenge",
    titleJa: "イスラエルヨルダン川西岸入植者、パレスチナ人への攻撃は報復としてBBCに正当化されると語る",
    summaryJa: "イスラエルヨルダン川西岸入植者、パレスチナ人への攻撃は報復としてBBCに正当化されると語る- 公開されました",
    bodyOriginal: `Israeli West Bank settler tells BBC attacks on Palestinians are justified as revenge
- Published
The Israeli settler outpost of Havat Gilad, deep inside the occupied West Bank, is spread across several hilltops, its sheds and simple block houses clearly visible from neighbouring Palestinian villages.
Last weekend saw a wave of settler attacks on Palestinian villages in the area, after an Israeli security guard from Havat Gilad was killed during a confrontation between Palestinians and Israelis in the village of Tal last Friday.
Four Palestinians and an Israeli soldier were also killed in the incident, the original cause of which is disputed.
After spending the weekend speaking to Palestinians around Havat Gilad, we drove into the outpost itself, to ask one of its residents about the violence, and the expansion of Israeli settlements in the West Bank.
It is rare for an international media organisation like the BBC to be allowed into these outposts. But on this occasion, Yehuda Shimon, a lawyer with an organisation that represents Israelis arrested for violence against Palestinians, agreed to speak.
He told me that attacks on Palestinian villages last weekend were justified as revenge for the killing of the outpost's security guard.
"I think now, after they killed one Israeli, we need to kill all the people in Tal and Sarra, even Jit and Farata," he said, naming the Palestinian villages closest to the outpost.
I put it to him that he was equating one Jewish life with hundreds or even thousands of Palestinian lives.
"No," he said, "millions. One Jewish life, it's 10 million [Palestinians]."
BBC speaks to Palestinians targeted by Israeli settlers
- Published5 days ago
Challenged on the racism of his statement, he did not deny it.
"Yes, I know," he replied. "But this is the truth, because God chose us [and] because of this you are jealous."
These extreme views – rejected by many Israelis – are crucial to understanding the conflict playing out across the West Bank, as Israel's settlements and outposts expand, and violence against Palestinians grows.
Many settlers here, especially in unauthorised outposts like Havat Gilad, built without Israeli planning permission or legal oversight, see the West Bank as land given to the Jewish people by God.
Both Israel's official settlements and its unauthorised outposts are illegal under international law.
Havat Gilad was established more than 20 years ago, in memory of an Israeli security officer murdered by Palestinians – a loosely scattered collection of houses with a vineyard perched high on one hill.
When we visit there is a row of newly burned buildings near the entrance – the result, Shimon says, of an arson attack by Palestinians. Israeli media reported that police were treating the fire as accidental, caused by cigarette butts thrown from a car window.
Israel's government has previously said it would legalise Havat Gilad. The Israeli organisation Peace Now, which monitors settlements, says it has been unable to do so because much of the land it is built on is recognised by Israel as privately owned by Palestinians, and that the government has instead designated a patch of land to the south of the outpost as state land, to enable settlers to build there.
These issues were dismissed by Shimon, who said international law was irrelevant, because the Bible gave Jews their right to West Bank land.
He criticised Israel's government and army for failing to back Jewish claims to the land strongly enough, despite a vast expansion in settlements and outposts under the current Israeli government, and the presence of far-right religious-nationalist ministers around the cabinet table who are driving it.
And he criticised the Israeli army for not using lethal force often enough against Palestinians, during confrontations with Israeli settlers.
"The Israeli government and the Israeli army, they like the United Nations – if Palestinians come and Jewish people come, [they] don't kill the Palestinians, [they] just separate the people," he said. "Afterwards, because they don't kill Palestinians, the Palestinians kill us."
The figures for numbers killed and injured in the West Bank contradict his statement.
The UN Office for the Co-ordination of Humanitarian Affairs (OCHA), which tracks these numbers, says 64 Palestinians were killed in the West Bank from the beginning of this year until 20 July - 18 of them during settler attacks.
At least 12 of those were killed by settlers, three by Israeli forces, and in three other cases it is not yet clear whether soldiers or settlers were responsible. It says one Israeli was killed over the same period.
The number of injuries inflicted by settlers during these attacks has risen sharply to more than three per day this year, OCHA says.
An Israeli soldier who served in the West Bank recently told me he only ever saw fear on the faces of Palestinians, and "never on the face of any Jew that lived there".
Challenged on this, Shimon accused the global media of "buying the narrative of the Palestinians", alleging that every Palestinian in the area owned two guns and was preparing to repeat the Hamas-led attacks of 7 October 2023.
"If we don't wake up and drop them all from this area, from all areas of Israel, even Gaza too, they will come back, and come back [again]," he said.
The conflict between Israeli settlers and Palestinian residents in the West Bank is not an equal one.
Israel occupied the territory during the 1967 Middle East war, and has since built hundreds of settlements and outposts there, housing more than half a million Jews.
Those settlers are protected by Israel's powerful army, and also by local armed security units which are staffed by settlers themselves.
Israelis in the West Bank are still subject to Israel's civilian law and enjoy widespread freedom of movement, while Palestinians are subject to Israel's military occupation and military courts, and are tightly restricted by road closures and checkpoints – a system described by some prominent human rights groups as "apartheid".
Israel has rejected that label as "absurd and distorted".
Asked about the Palestinian residents of the West Bank, Shimon laid out three options: live quietly under Israeli rule and ownership of the land; voluntarily emigrate to other Arab or Muslim nations; or "if you don't want to make peace with us, and you don't want to get out, I don't have a choice: I must kill you, and I kill you all," he said.
This vision from one radical settler seems strikingly close to a plan outlined by Israel's now-Finance Minister, Bezalel Smotrich, in a blueprint published in 2017, before he joined the government.
In it, he presented a plan for the West Bank in which Palestinians would be told to give up any struggle for a Palestinian state and live quietly under Israeli rule. Those who had "difficulty letting go of national ambitions" could leave the territory, he said at the time, and those who stayed and continued armed struggle against Israel would be killed by Israel's armed forces.
More recently, while in government, he has pushed for the "voluntary migration" of Palestinians from the Gaza Strip and the re-settlement of Israelis there, and has described Palestinian identity as "an invention".
One Palestinian living within sight of Havat Gilad told me she watched the outpost from her window constantly, for signs of an imminent settler attack.
Many Palestinians we spoke to said they felt unprotected – that Israel's occupying army was focused on protecting Israeli settlers, that their own security forces were absent, and that the international community had abandoned them.
"It's a very bad situation," one told me. "Europe is busy, America is occupied with Iran, China doesn't care, Russia is fighting Ukraine, the UN are finished and the Arabs have internal problems. We don't know what we can do."
From Havat Gilad, the nearest Palestinian villages are less than a mile away, but the landscape here is divided by Israeli law, Israeli power and mutual hostility.
Additional reporting by Oren Rosenfeld and Rebecca Hartmann`,
    bodyJa: `イスラエルヨルダン川西岸入植者、パレスチナ人への攻撃は報復としてBBCに正当化されると語る
- 公開されました
占領下のヨルダン川西岸の奥深くにあるハヴァト・ギラドのイスラエル入植者前哨基地は、いくつかの丘の上に広がっており、その小屋や簡素なブロックハウスは、近隣のパレスチナ人の村からはっきりと見える。
先週金曜日にタル村で起きたパレスチナ人とイスラエル人の衝突でハヴァト・ギラドのイスラエル警備員が殺害されたことを受け、先週末には同地域のパレスチナ人の村々に対する入植者の襲撃が相次いだ。
この事件ではパレスチナ人4人とイスラエル兵1人も死亡したが、そもそもの原因については議論がある。
週末をハヴァト・ギラド周辺でパレスチナ人と話すのに費やした後、私たちは前哨基地​​自体に車で行き、住民の一人に暴力とヨルダン川西岸でのイスラエル人入植地の拡大について尋ねた。
BBC のような国際的な報道機関がこれらの前哨基地への立ち入りを許可されるのは珍しいことです。しかし今回は、パレスチナ人に対する暴力で逮捕されたイスラエル人の代理人団体の弁護士イェフダ・シモン氏が講演に同意した。
彼は私に、先週末のパレスチナ人の村への攻撃は、前哨基地の警備員殺害に対する報復として正当化されたと語った。
同氏は、前哨基地に最も近いパレスチナ人の村を挙げ、「イスラエル人１人を殺害した今、タルとサラの住民全員、さらにはジットとファラタも殺害する必要があると思う」と語った。
私は彼に、一人のユダヤ人の命を何百人、あるいは何千人のパレスチナ人の命と同一視しているのではないかと言いました。
「いいえ、何百万人です。ユダヤ人一人の命なら、（パレスチナ人）1,000万人です。」と彼は言った。
BBCがイスラエル入植者の標的となったパレスチナ人に語りかける
- 5 日前に公開
自分の発言が人種差別的であると異議を唱えられたが、彼はそれを否定しなかった。
「はい、知っています」と彼は答えた。 「しかし、これが真実です。なぜなら、神は私たちを選んだからです。そして、そのためにあなたは嫉妬しているのです。」
イスラエルの入植地や前哨基地が拡大し、パレスチナ人に対する暴力が増大する中、多くのイスラエル人が拒否しているこれらの極端な見解は、ヨルダン川西岸全域で展開している紛争を理解する上で極めて重要である。
ここの入植者の多くは、特にイスラエルの計画許可や法的監視なしに建設されたハヴァト・ギラドのような無許可の前哨基地では、ヨルダン川西岸を神がユダヤ人に与えた土地とみなしている。
イスラエルの公式入植地と無許可の前哨基地はいずれも国際法上違法である。
ハヴァト ギラドは、パレスチナ人に殺害されたイスラエル治安当局者を追悼するために 20 年以上前に設立されました。丘の上の高い丘にブドウ畑があり、緩やかに点在する家々が集まった建物です。
私たちが訪れたとき、入り口付近には新しく焼けた建物が並んでいたが、これはパレスチナ人による放火の結果だとシモン氏は言う。イスラエルのメディアは、警察は車の窓から投げ込まれたタバコの吸い殻が原因の事故火災として処理していると報じた。
イスラエル政府は以前、ハヴァト・ギラドを合法化すると述べていた。入植地を監視するイスラエルの組織ピース・ナウは、入植地が建設されている土地の多くがパレスチナ人の私有地であるとイスラエルが認識しているため、入植地を監視することができず、代わりに政府が前哨基地の南の一区画を国有地として指定し、入植者がそこに建設できるようにしたと述べた。
これらの問題は、聖書がユダヤ人にヨルダン川西岸の土地に対する権利を与えているため、国際法は無関係であるとシモンによって却下された。
同氏は、現在のイスラエル政府の下で入植地や前哨基地が大幅に拡大し、それを推進している極右の宗教国家主義者の閣僚が閣僚の周りに存在しているにもかかわらず、その土地に対するユダヤ人の主張を十分に強力に支持できていないとしてイスラエル政府と軍を批判した。
そして、イスラエル入植者との衝突の際、パレスチナ人に対して十分な頻度で致死的な武力を行使しなかったとしてイスラエル軍を批判した。
「イスラエル政府とイスラエル軍は国連が好きだ。もしパレスチナ人が来てユダヤ人が来ても、彼らはパレスチナ人を殺さない。ただ人々を分離するだけだ」と彼は語った。 「その後、彼らがパレスチナ人を殺さないので、パレスチナ人が私たちを殺すことになります。」
ヨルダン川西岸での死傷者数の数字は彼の声明と矛盾している。
これらの数字を追跡している国連人道問題調整事務所（OCHA）によると、今年初めから7月20日までにヨルダン川西岸で64人のパレスチナ人が殺害され、そのうち18人は入植者の襲撃により殺害されたという。
このうち少なくとも12人は入植者によって殺害され、3人はイスラエル軍によって殺害され、他の3件については兵士と入植者のどちらが犯したのかはまだ明らかになっていない。同じ期間にイスラエル人１人が殺害されたとしている。
OCHAによると、これらの攻撃で入植者が負った負傷者数は、今年1日あたり3人以上に急増している。
ヨルダン川西岸で勤務していたイスラエル兵は最近、パレスチナ人の顔に恐怖を感じたことしかなく、「そこに住んでいたユダヤ人の顔には一度も見たことがない」と私に語った。
これに異議を唱えたシモン氏は、この地域のパレスチナ人全員が銃２丁を所有し、２０２３年１０月７日のハマス主導の攻撃を繰り返す準備をしていると主張し、世界メディアが「パレスチナ人の言い分を買っている」と非難した。
「私たちが目を覚まして、この地域、イスラエル全土、さらにはガザ地区からも彼ら全員を追い出さなければ、彼らは戻ってきて、また戻ってくるでしょう」と彼は語った。
ヨルダン川西岸のイスラエル人入植者とパレスチナ住民の間の紛争は対等なものではない。
イスラエルは1967年の中東戦争中にこの領土を占領し、それ以来数百の入植地や前哨基地を建設し、50万人以上のユダヤ人が居住している。
これらの入植者はイスラエルの強力な軍隊と、入植者自身が配置された地元の武装治安部隊によって保護されている。
ヨルダン川西岸のイスラエル人は依然としてイスラエルの民法に服従し、広範な移動の自由を享受しているが、パレスチナ人はイスラエルの軍事占領と軍事法廷の対象となっており、道路封鎖と検問所によって厳しく制限されており、このシステムを一部の著名な人権団体は「アパルトヘイト」と表現している。
イスラエルはそのレッテルを「不条理で歪んだもの」として拒否した。
ヨルダン川西岸のパレスチナ住民について質問されたシモン氏は、3つの選択肢を挙げた。イスラエルの統治と土地の所有権の下で静かに暮らすこと。他のアラブ諸国またはイスラム諸国に自発的に移住する。あるいは、「もしあなたが私たちと和解したくない、そして出て行きたくないのなら、私には選択肢がありません。私はあなたを殺すしかありません、そして私はあなたたち全員を殺します」と彼は言いました。
ある急進的入植者のこのビジョンは、イスラエルの現財務大臣ベザレル・スモトリヒが政府に加わる前の2017年に発表した青写真で概説した計画に驚くほど近いようだ。
その中で同氏は、パレスチナ人に対し、パレスチナ国家のためのあらゆる闘争を放棄し、イスラエルの統治下で静かに暮らすよう告げるヨルダン川西岸計画を提示した。同氏は当時、「国家的野心を手放すのが難しい」人々は領土を離れることができ、残ってイスラエルに対する武力闘争を続ける人々はイスラエル軍によって殺害されるだろうと述べた。
最近では、政権在任中にガザ地区からのパレスチナ人の「自発的移住」とイスラエル人の再定住を推進し、パレスチナ人のアイデンティティを「発明」だと述べた。
ハヴァト・ギラドの見える範囲内に住むあるパレスチナ人は、差し迫った入植者の攻撃の兆候がないか、常に窓から前哨基地を監視していると語った。
私たちが話を聞いた多くのパレスチナ人は、自分たちは無防備だと感じている、つまりイスラエル占領軍はイスラエル入植者の保護に重点を置いており、自国の治安部隊は不在で、国際社会は彼らを見捨てていると語った。
「非常に悪い状況だ」と一人が私に言いました。 「欧州は忙しく、米国はイランに占領され、中国は無関心、ロシアはウクライナと戦っており、国連は終わっており、アラブ人は国内問題を抱えている。我々には何ができるか分からない。」
ハヴァト・ギラドから最も近いパレスチナ人の村までは1マイルも離れていないが、ここの風景はイスラエルの法律、イスラエルの権力、そして相互の敵意によって分断されている。
Oren Rosenfeld と Rebecca Hartmann による追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4g4djgdyk2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-01T05:01:56+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/678b/live/ea29f390-8c56-11f1-b8ee-9b3c26ad07bb.jpg",
    readTime: 9,
  },
  {
    id: "my-ex-husband-s-sister-died-so-why-is-fi-d1734a56",
    title: "My ex-husband’s sister died — so why is Fidelity asking me for her death certificate?",
    titleJa: "私の元夫の妹が亡くなりました。では、なぜフィデリティは私に彼女の死亡診断書を要求するのでしょうか?",
    summaryJa: "「死亡診断書を支払うのは宝くじを買うようなものだと、私の心の一部は冗談を言っています。」",
    bodyOriginal: `“Part of me jokes that paying for a death certificate would be like buying a lottery ticket.”`,
    bodyJa: `「死亡診断書を支払うのは宝くじを買うようなものだと、私の心の一部は冗談を言っています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/its-like-buying-a-lottery-ticket-fidelity-asked-for-my-former-sister-in-laws-death-certificate-does-this-mean-im-due-a-windfall-2ebdcd69?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T00:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-08192839",
    readTime: 2,
  },
  {
    id: "if-social-security-s-funding-crisis-is-t-d23641b0",
    title: "If Social Security’s funding crisis is the elephant in the room, this is the mouse everyone has overlooked. You have been warned.",
    titleJa: "社会保障の資金危機が部屋の中の象だとすれば、これは誰もが見落としてきたネズミです。あなたは警告を受けました。",
    summaryJa: "「社会保障を70歳まで遅らせると、月々の支払額が増加し、それに比例して生活費の調整も高くなります。」",
    bodyOriginal: `“Delaying Social Security until 70 results in an increased monthly payment — and that comes with proportionally higher cost-of-living adjustments.”`,
    bodyJa: `「社会保障を70歳まで遅らせると、月々の支払額が増加し、それに比例して生活費の調整も高くなります。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/if-social-securitys-funding-crisis-is-the-elephant-in-the-room-this-is-the-mouse-everyone-has-overlooked-you-have-been-warned-b95c450d?mod=mw_rss_topstories",
    publishedAt: "2026-08-01T00:25:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-91835700",
    readTime: 2,
  },
  {
    id: "pirro-moves-to-drop-case-against-olympia-2bda5269",
    title: "Pirro moves to drop case against Olympian, says Reflecting Pool damage caused by 'flawed installation'",
    titleJa: "ピッロ、オリンピック選手に対する訴訟を取り下げる方向に動く、リフレクティング・プールの損害は「設置の欠陥」が原因と語る",
    summaryJa: "コロンビア特別区のジャニーン・ピロ米国検事は金曜日、リンカーン記念堂のリフレクティング・プールを破壊したとして米国のオリンピック・カヌー選手デビッド・ハーン氏を告発した起訴状を棄却する動きを見せ、プールのシーラントへの損傷は「欠陥のある設置」の結果であると裁判所への提出文書に記した。ピッロ氏はワシントンDC高等裁判所に提出した書面で、起訴後に事務所が「起訴の証拠根拠を著しく損なう」情報と証拠を受け取ったと述べた。",
    bodyOriginal: `U.S. Attorney for the District of Columbia Jeanine Pirro on Friday moved to dismiss an indictment charging U.S. Olympic canoeist David Hearn with vandalizing the Reflecting Pool of the Lincoln Memorial, writing in a court filing that damage to the pool's sealant was the result of a "flawed installation."
Pirro, in a court filing in D.C. Superior Court, said her office received information and evidence after the charges were filed that "significantly undermine the evidentiary basis for the indictment."
Hearn had been charged with felony destruction of property in early July, with Pirro saying at a press conference that he "violently" ripped up part of the pool's liner with his bare hands.
Hearn's attorneys accused the Trump administration of making the 67-year-old ex-Olympian a "scapegoat" for the expensive and troubled renovation, which President Donald Trump had frequently boasted about.
After the pool appeared to continue leaking following its renovation, Trump repeatedly claimed, without providing evidence, that vandals had cut a gash hundreds of feet long along the bottom.
But Pirro said in Friday's court filing that a "botched installation" was to blame.
Prosecutors had presented a grand jury in D.C. with "evidence that damage to the Reflecting Pool was caused by vandals" after receiving initial reports to that effect from the Department of the Interior and the U.S. Park Police, Pirro wrote.
But after that grand jury returned its indictment against Hearn, the Interior Department provided "additional documents" showing that the damage occurring in June was the "result of flawed installation by the contractor, Atlantic Industrial Coatings," Pirro said.
She also blamed "the rush to complete the project prior to events associated with the America 250 celebration in the weeks surrounding Independence Day 2026."
Asked for additional comment, the U.S. Attorney's Office for D.C. told CNBC, "The motion speaks for itself."
Hearn's attorneys told CNBC in a statement, "The Trump administration's case against Davey Hearn should have never been brought."
"Its dismissal today does not erase the abuse of government power in arresting and charging a patriotic American who did nothing wrong," read the statement from lawyers Norm Eisen, Mary Dohrmann and Steve Levin.
"The government's approach was ready, fire, aim. The administration owes Mr. Hearn an apology," they said.
The White House did not immediately respond to CNBC's request for comment.
Four days earlier, Hearn's attorneys wrote in a court filing that the government's key grand-jury witness in the case "testified that the property was already damaged before Mr. Hearn allegedly touched it."
In that same filing, the defense lawyers asked for the disclosure of the information that the government provided to the grand jury before it made the decision to charge Hearn.
Pirro's decision to pack up her case may foreclose the possibility of that information being revealed.
Her filing repeatedly and pointedly lays blame on the Interior Department for providing her office with shoddy information.
"DOI provided less than fulsome information at the outset of this case," Pirro wrote at one point. "It was not until USAO-DC repeatedly reached out to DOI dozens and dozens of times that DOI slowly started trickling information to USAO-DC."
"Had DOI been forthcoming with the information clearly in its possession, the government would not have sought a grand jury indictment," she wrote. "DOI's failure to fully and accurately provide information to USAODC undermined the government's ability to abide by these responsibilities."
The Interior Department did not immediately respond to CNBC's request for comment.
Pirro's motion to dismiss also provides new detail about issues that plagued the Reflecting Pool renovation and caused delays "almost immediately."
She pointed to "a combination of very rainy and windy weather, repeated failures of testing on the sealing of the expansion joints, and delays in obtaining sealing product at the worksite."
"The rush to complete the project led to hasty and botched work that was not remediated before the project was finished and the fencing removed," Pirro wrote.
The Trump administration had awarded the contractor, Atlantic Industrial Coatings LLC, a no-bid contract to work on the Reflecting Pool.
Trump, in one of numerous instances detailing the renovation project to the press, said in April that he chose a contractor that had worked on one of his swimming pools.
CNBC has requested comment from the contractor. A website associated with the company currently features a pop-up window with two Reflecting Pool-related updates, with the most recent one dated June 21.
"Atlantic Industrial Coatings in conjunction with the US Park Service has identified some areas in the Reflecting Pool that require repairs," the update reads. "These areas are a very small part of the massive 7 acre project, and do not indicate a failure of the liner."`,
    bodyJa: `コロンビア特別区のジャニーン・ピロ米国検事は金曜日、リンカーン記念堂のリフレクティング・プールを破壊したとして米国のオリンピック・カヌー選手デビッド・ハーン氏を告発した起訴状を棄却する動きを見せ、プールのシーラントへの損傷は「欠陥のある設置」の結果であると裁判所への提出文書に記した。
ピッロ氏はワシントンDC高等裁判所に提出した書面で、起訴後に事務所が「起訴の証拠根拠を著しく損なう」情報と証拠を受け取ったと述べた。
ハーン氏は７月上旬に器物損壊の重罪で起訴されており、ピッロ氏は記者会見でプールのライナーの一部を素手で「暴力的に」引き裂いたと述べた。
ハーン氏の弁護士らは、トランプ政権が、ドナルド・トランプ大統領が頻繁に自慢してきた、高額で問題を抱えた改修工事の「スケープゴート」に、67歳の元オリンピック選手を仕立て上げたと非難した。
プールの改修後も水漏れが続いているように見えることを受けて、トランプ大統領は証拠を示さずに、破壊者らが底に沿って数百フィートの長さの切り込みを入れたと繰り返し主張した。
しかし、ピッロ氏は金曜日の裁判所への提出文書で、「設備の失敗」が原因だと述べた。
ピロ氏は、内務省と米国公園警察からその旨の最初の報告を受けた後、検察はワシントンDCの大陪審に「リフレクティング・プールへの損害が破壊者によって引き起こされたという証拠」を提出したと書いた。
しかし、大陪審がハーンに対する起訴状を差し戻した後、内務省は6月に起きた損害が「請負業者であるアトランティック・インダストリアル・コーティングス社による施工の不備の結果」であることを示す「追加文書」を提出したとピッロ氏は述べた。
彼女はまた、「2026年の独立記念日の前後数週間に行われるアメリカ250周年記念行事に関連するイベントの前にプロジェクトを急いで完了させたこと」を非難した。
追加のコメントを求められたワシントンDC連邦検察局はCNBCに対し、「動議はそれ自体を物語っている」と語った。
ハーン氏の弁護士はCNBCに対し、「トランプ政権によるデイビー・ハーン氏の訴訟は決して起こされるべきではなかった」と声明で述べた。
ノーム・アイゼン弁護士、メアリー・ドーマン弁護士、スティーブ・レビン弁護士の声明文には、「今日の却下は、何も悪いことをしていない愛国的なアメリカ人を逮捕し起訴するという政府権力の乱用が消えるわけではない」と書かれている。
「政府のアプローチは準備万端で、狙いを定めていた。政府はハーン氏に謝罪する義務がある」と彼らは述べた。
ホワイトハウスはCNBCのコメント要請にすぐには応じなかった。
4日前、ハーン氏の弁護士は法廷提出書類の中で、この事件における政府の大陪審の主要証人が「ハーン氏が触ったとされる前に、その物件はすでに損傷していたと証言した」と述べた。
同じ申し立ての中で、弁護人はハーン氏の起訴を決定する前に政府が大陪審に提供した情報の開示を求めた。
ピッロ氏が事件をまとめるという決断をしたことで、その情報が暴露される可能性はなくなるかもしれない。
彼女の提出書類は、内務省が彼女の事務所に粗末な情報を提供したことを繰り返し明確に非難している。
「DOIはこの訴訟の開始時に十分な情報を提供しなかった」とピロ氏はある時点で書いた。 「USAO-DCが何十回もDOIに連絡を繰り返して初めて、DOIはゆっくりとUSAO-DCに情報を流し始めた。」
「もしDOIが明らかに保有している情報を持って臨んでいたら、政府は大陪審の起訴を求めなかったであろう」と彼女は書いた。 「DOIがUSAODCに完全かつ正確に情報を提供できなかったことにより、これらの責任を遵守する政府の能力が損なわれた。」
内務省はCNBCのコメント要請にすぐには応じなかった。
ピッロ氏の却下動議はまた、リフレクティング・プール改修工事を悩ませ、「ほぼ即座に」遅延を引き起こした問題について新たな詳細を明らかにした。
彼女は「非常に雨と風の強い天候、伸縮継手のシールに関するテストの度重なる失敗、現場でのシール製品の入手の遅れ」を指摘した。
「プロジェクトの完成を急ぐあまり、性急で失敗した作業が発生し、プロジェクトが完了してフェンスが撤去されるまで修正されなかった」とピッロ氏は書いた。
トランプ政権は、請負業者であるアトランティック・インダストリアル・コーティングスLLCに、リフレクティング・プールの工事について入札なしの契約を結んでいた。
トランプ大統領は報道陣に改修計画について詳しく説明した数多くの事例の一つで、4月にプールの1つを手がけた請負業者を選んだと述べた。
CNBCは請負業者にコメントを求めた。同社に関連する Web サイトには現在、リフレクティング プール関連の 2 つの更新情報を表示するポップアップ ウィンドウが表示されており、最新のものは 6 月 21 日付けです。
「Atlantic Industrial Coatingsは米国公園局と協力し、リフレクティングプールの一部のエリアで修理が必要であることを特定した」とアップデートには書かれている。 「これらの地域は7エーカーの巨大プロジェクトのごく一部であり、ライナーの故障を示すものではありません。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/trump-pirro-reflecting-pool-olympian-david-hearn.html",
    publishedAt: "2026-07-31T23:19:16+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "situational-awareness-vs-long-term-capit-e24dfa59",
    title: "Situational Awareness vs. Long-Term Capital Management: A side-by-side comparison",
    titleJa: "状況認識と長期資本管理: 並べて比較",
    summaryJa: "2つのヘッジファンド爆破事件には予想以上に多くの類似点がある。",
    bodyOriginal: `There are more similarities between the two hedge-fund blowups than one might expect.`,
    bodyJa: `2つのヘッジファンド爆破事件には予想以上に多くの類似点がある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/situational-awareness-vs-long-term-capital-management-a-side-by-side-comparison-e3e047b7?mod=mw_rss_topstories",
    publishedAt: "2026-07-31T22:09:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-24559601",
    readTime: 2,
  },
  {
    id: "trump-appeals-order-that-slammed-his-irs-4e2fe4f4",
    title: "Trump appeals order that slammed his IRS lawsuit and referred his lawyer to bar",
    titleJa: "トランプ大統領、IRS訴訟を非難し弁護士に裁判差し止めを命じた控訴命令",
    summaryJa: "ドナルド・トランプ大統領は金曜日、有利な和解を得るために悪意を持って100億ドルの訴訟を起こしたとする連邦判事のひどい命令に対して控訴した。マイアミ連邦地方裁判所への控訴通知は、和解の一環として創設された17億7,600万ドルの「法律」基金が廃止されたことにトランプ大統領が不満をぶちまけた数時間後に公表された。",
    bodyOriginal: `President Donald Trump on Friday appealed a federal judge's blistering order finding he filed a bad-faith $10 billion lawsuit in order to reach an advantageous settlement.
The notice of appeal in U.S. District Court in Miami was made public hours after Trump vented frustration that the $1.776 billion "lawfare" fund created as part of that settlement had been scrapped.
"They've agreed to not have a fund. But there are a lot of people that are very upset about it," Trump said at a Cabinet meeting at Camp David Friday afternoon.
The president also lamented that his nominee for U.S. attorney general, Todd Blanche, is in limbo in the Senate as a handful of Republican holdouts seek written confirmation that the controversial fund is indeed defunct. The senators say they have yet to receive that assurance, raising concern that the fund could be resurrected if Blanche is confirmed.
"The fund is dead, but, you know, I wish it weren't," Trump said at the Cabinet meeting before launching into complaints about supporters he said have been mistreated by federal law enforcement.
Trump, two of his adult sons and the Trump Organization, along with two of their attorneys, said in a joint filing Friday afternoon that they are appealing Judge Kathleen Williams' scathing order to the U.S. Court of Appeals for the 11th Circuit.
Williams had ruled July 13 that the lawsuit, ostensibly stemming from the leak of Trump's tax returns by an ex-IRS employee years earlier, was in fact brought to provide "judicial legitimacy for a 'settlement' that had no viable basis in law or fact."
After Friday's appeal notice was filed, a spokesman for Trump's legal team repeated a prior statement slamming the IRS leak and declaring, "President Trump continues to hold those who wrong America and Americans accountable."
That settlement involved Trump and his co-plaintiffs dropping the suit in exchange for the Department of Justice creating a $1.776 billion fund that would be used to pay people who claimed to be victims of government lawfare.
Blanche, in prior Senate testimony, would not rule out that some of those funds could be given to people who were charged with assaulting police officers during the Jan. 6, 2021, Capitol riot. Trump has pardoned virtually all Capitol rioters and frequently expresses sympathy for them.
In a Truth Social post Friday morning, he gave a full-throated defense of the fund, saying, "I will always feel that these victims of government abuse should be paid back for what they were forced to endure, their lives have been ruined!"
Some — including Sen. Thom Tillis of North Carolina, one of the Republicans standing in the way of Blanche's nomination — interpreted Trump's post as referring to Jan. 6 participants and suggesting the fund was still alive.
The settlement also included a provision in which the DOJ agreed that the past federal tax returns of Trump, his family members and related entities are barred from IRS enforcement actions.
"The Court determines that Plaintiffs improperly employed this lawsuit to justify a particular award in this matter — access to taxpayer funds and exemption from audits and other investigations — which was accomplished by leveraging control over Defendants," Williams wrote in her July 13 order.
Williams imposed several non-monetary sanctions in the order, including referring one of Trump's attorneys, Alejandro Brito, to the Florida Bar for potential disciplinary action.
She also barred another lawyer, Daniel Epstein, from being admitted to appear in the southern Florida federal court for one year.
And she prohibited Trump and the other parties in the lawsuit from referring to the "settlement agreement" as evidence that an actual settlement had been reached in the case.
Her order did not explicitly void the settlement itself, noting that the question of "whether a private agreement" between both sides is valid and enforceable "is not before this court."
A DOJ spokesperson responded to Williams' order at the time by insisting, "There was no collusion in this case, and the partisan judge who speculated otherwise has disregarded decades of precedent."`,
    bodyJa: `ドナルド・トランプ大統領は金曜日、有利な和解を得るために悪意を持って100億ドルの訴訟を起こしたとする連邦判事のひどい命令に対して控訴した。
マイアミ連邦地方裁判所への控訴通知は、和解の一環として創設された17億7,600万ドルの「法律」基金が廃止されたことにトランプ大統領が不満をぶちまけた数時間後に公表された。
トランプ大統領は金曜日午後、キャンプデービッドで行われた閣議で、「彼らは基金を持たないことで合意した。しかし、このことに非常に腹を立てている人がたくさんいる」と述べた。
大統領はまた、少数の共和党の抵抗勢力が物議をかもしている基金が実際に消滅していることの書面による確認を求めているため、自身が米国司法長官に指名したトッド・ブランシュ氏が上院で行き詰まっていることを嘆いた。上院議員らはまだその確約を受け取っていないと述べており、ブランシュ氏が承認されれば基金が復活する可能性があるとの懸念が高まっている。
トランプ大統領は閣議で、「基金はもう終わっているが、そうならなければよかったのに」と述べ、連邦法執行機関によって虐待を受けている支持者について苦情を申し立てた。
トランプ大統領、成人した息子2人、トランプ・オーガニゼーション、および彼らの弁護士2名は金曜日午後の共同提出文書で、キャスリーン・ウィリアムズ判事の痛烈な命令を不服として第11巡回区控訴裁判所に控訴すると発表した。
ウィリアムズ氏は7月13日、この訴訟は表向き数年前に元IRS職員によるトランプ氏の納税申告書の漏洩に端を発しており、実際には「法律や事実において実行可能な根拠のない『和解』に司法上の正当性」を与えるために起こされたものであるとの判決を下していた。
金曜日の上訴通知が提出された後、トランプ大統領の弁護団の報道官は、国税庁の情報漏えいを非難する以前の声明を繰り返し、「トランプ大統領は米国と米国人を不当に扱った人々の責任を問い続けている」と宣言した。
この和解では、司法省が政府法違反の被害者であると主張する人々への支払いに使用される17億7,600万ドルの基金を創設することと引き換えに、トランプ氏と共同原告らが訴訟を取り下げることが含まれていた。
ブランシュ氏はこれまでの上院証言で、2021年1月6日の国会議事堂暴動で警察官への暴行容疑で起訴された人々にこれらの資金の一部が与えられる可能性を排除しなかった。トランプ大統領は国会議事堂の暴徒全員を事実上恩赦しており、彼らに対して頻繁に同情を表明している。
金曜朝のトゥルース・ソーシャルへの投稿で、同氏は基金を全力で擁護し、「政府による虐待の被害者たちは、彼らが耐え忍ばなければならなかった、彼らの人生が台無しにされたことに対する報いを受けるべきだと私は常に思う！」と述べた。
ブランシュ氏の指名を阻む共和党の一人であるトム・ティリス上院議員（ノースカロライナ州）を含む一部の人々は、トランプ氏の投稿を1月6日の参加者に言及し、基金がまだ生きていることを示唆していると解釈した。
この和解案には、トランプ氏とその家族、関連団体の過去の連邦税申告書が国税局の執行措置から除外されることに司法省が同意する条項も含まれていた。
ウィリアムズ氏は7月13日の命令文で、「裁判所は、原告らが本件における特定の裁定（納税者の資金へのアクセス、監査やその他の調査の免除）を正当化するためにこの訴訟を不当に利用したと判断した。この裁定は、被告に対する支配力を利用して達成されたものである」と述べた。
ウィリアムズ氏はこの命令の中で、トランプ氏の弁護士の一人、アレハンドロ・ブリト氏を懲戒処分の可能性があるとしてフロリダ弁護士会に付託するなど、金銭以外の制裁をいくつか課した。
彼女はまた、別の弁護士ダニエル・エプスタインに対し、南部フロリダ連邦裁判所への出廷を1年間認められないようにした。
そして彼女は、トランプ大統領と訴訟の他の当事者に対し、訴訟が実際に和解に達したことを示す証拠として「和解合意」に言及することを禁じた。
彼女の命令は和解そのものを明示的に無効にするものではなく、双方間の「個人的な合意」が有効で法的強制力があるかどうかの問題は「この法廷で争われるものではない」と指摘した。
当時司法省の報道官はウィリアムズ氏の命令に対し、「この事件には共謀はなかったし、そうでないと推測した党派判事は数十年にわたる前例を無視した」と主張した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/trump-appeals-irs-lawsuit-blanche-fund.html",
    publishedAt: "2026-07-31T22:04:03+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "snapchat-joins-other-popular-platforms-i-9e7d925a",
    title: "Snapchat joins other popular platforms in fight against 'AI slop'",
    titleJa: "Snapchatが他の人気プラットフォームに加わり「AIのスロップ」と戦う",
    summaryJa: "Snapchatが他の人気プラットフォームに加わり「AIのスロップ」と戦う- 公開されました",
    bodyOriginal: `Snapchat joins other popular platforms in fight against 'AI slop'
- Published
Snapchat has joined the likes of YouTube, LinkedIn and Substack in a growing effort to combat fake writing, images and videos that are entirely created by artificial intelligence (AI) tools.
Such content, commonly called "AI slop", has proliferated online as the tech industry has raced to create a greater number of easier to use generative AI tools that can create anything from essays to realistic videos.
Snap, the parent company of Snapchat, said on Friday that the platform would stop recommending "wholly AI-generated videos" in its popular Spotlight feed in favour of "authentic, human-made content."
Over the past two weeks, YouTube, LinkedIn and Substack have unveiled similar strategies.
Snap did not go so far as to try and prohibit all AI-generated content from Snapchat. The platform offers its own AI tools to alter content, and so AI "enhanced or edited" content will still be part of its recommendations to users.
However, Snap acknowledged that entirely AI-generated content is typically "low-quality", "repetitive", and generally not what Snapchat users want to see.
Recent research into the reception of AI-generated content shows that people tend to agree, external with those descriptions.
Moreover, the more fake AI-generated content that people see in a social media feed, the less likely, external they are to think that any of the content they're being shown online is genuine, according to a separate survey.
Targeting 'AI slop'
As Chris Best, the co-founder and chief executive of Substack put it last week: "It's getting harder to tell what's real on the internet."
Announcing a new tool, external designed to let readers on the newsletter platform detect AI-generated writing, Best cited other research that has found up to 40% of writing on social media is now fake or AI-generated.
"Platforms that reward fakeness will create a race to the bottom," Best said.
LinkedIn, a social media platform focused on work, introduced a button on its platform this week that allows any user to report if a post or a comment appears to be AI-generated.
"AI slop is a top priority for all of us," LinkedIn's chief product officer Hari Srinivasan wrote on the platform.
In just the last couple of months, he said the platform had "blocked billions" of attempts to post AI-generated comments.
"Every day we are now catching hundreds of thousands of automated comment attempts," Srinivasan said.
Like Snap, LinkedIn said it is not rejecting the use of AI entirely and users that use AI tools to "refine" their posts should not get caught up in efforts to combat AI slop.
Nonetheless, LinkedIn is removing an automated prompt that would show up for users writing a post offering to "enhance" it through the use of AI. It will go back to a simple proofreading tool.
YouTube, the video platform owned by Google, also this month updated its policies, external around what kind of content can be monetised by creators.
Research from last year found scores of channels on YouTube that were solely AI-generated content, external, many of which had millions of subscribers and some of which made millions of dollars in revenue.
In an effort to discourage YouTube from filling up with what the platform calls "inauthentic content", earlier this month the site broke down into three categories the kind of videos that will not be allowed to make money through it: generic, repetitive, or template-based.
Those styles of content are much easier to make, and quickly, with the use of generative AI tools.
YouTube's trust and safety chief Matt Halprin said in an interview, external on the updated rules that, while AI tools can help people with their content, they are more frequently being used to create fake and low-quality videos.
"The same technology really enables great stuff," Halprin said.
"But it also enables stuff that's kind of content farming, and that's the stuff that we don't want to have."
- Published4 February`,
    bodyJa: `Snapchatが他の人気プラットフォームに加わり「AIのスロップ」と戦う
- 公開されました
Snapchat は、人工知能 (AI) ツールによって完全に作成された偽の書き込み、画像、ビデオと戦う取り組みを強化するために、YouTube、LinkedIn、Substack などに加わりました。
一般に「AI スロップ」と呼ばれるこのようなコンテンツは、エッセイからリアルなビデオまであらゆるものを作成できる、より多くの使いやすい AI 生成ツールの開発をテクノロジー業界が競う中、オンラインで急増しました。
Snapchatの親会社Snapは金曜日、同プラットフォームが人気のスポットライトフィードで「完全にAIで生成された動画」の推奨をやめ、「本物の人間が作成したコンテンツ」を推奨すると発表した。
過去 2 週間にわたって、YouTube、LinkedIn、Substack も同様の戦略を発表しました。
Snapは、AIが生成したすべてのコンテンツをSnapchatから禁止しようとまではしなかった。このプラットフォームはコンテンツを変更するための独自の AI ツールを提供しているため、AI で「強化または編集された」コンテンツは引き続きユーザーへの推奨事項の一部となります。
しかし、完全にAIによって生成されたコンテンツは通常「低品質」で「反復的」であり、一般的にSnapchatユーザーが見たいものではないことをSnapは認めた。
AI が生成したコンテンツの受け入れに関する最近の研究では、人々はその記述に外部から同意する傾向があることが示されています。
さらに、別の調査によると、ソーシャル メディア フィードで AI によって生成された偽のコンテンツが増えれば増えるほど、オンラインで表示されているコンテンツが本物であると外部から考える可能性は低くなります。
「AIスロップ」をターゲットに
Substack の共同創設者兼最高経営責任者 Chris Best 氏が先週述べたように、「インターネット上で何が真実なのかを見分けるのはますます困難になっています。」
ニュースレター プラットフォームの読者が AI によって生成された文章を検出できるように外部設計された新しいツールを発表したベスト氏は、ソーシャル メディア上の書き込みの最大 40% が偽物または AI によって生成されたことが判明した他の研究を引用しました。
「偽物に報いるプラットフォームは最下位への競争を生み出すだろう」とベスト氏は語った。
仕事に焦点を当てたソーシャルメディアプラットフォームであるLinkedInは今週、投稿やコメントがAIによって生成されたと思われる場合に誰でも報告できるボタンをプラットフォームに導入した。
「AIの進歩は私たち全員にとって最優先事項です」とLinkedInの最高製品責任者であるハリ・スリニバサン氏はプラットフォーム上で書いた。
過去数か月の間に、同プラットフォームはAIが生成したコメントを投稿しようとする「数十億件の」試みをブロックしたと同氏は述べた。
「私たちは毎日、何十万もの自動コメントの試みをキャッチしています」とスリニバサン氏は語った。
Snapと同様、LinkedInもAIの利用を完全に否定しているわけではなく、AIツールを使って投稿を「洗練」するユーザーはAIのスロップに対抗する取り組みに巻き込まれるべきではないと述べた。
それにもかかわらず、LinkedIn は、AI の使用によって投稿を「強化」することを提案する投稿を作成するユーザーに表示される自動プロンプトを削除します。単純な校正ツールに戻ります。
Google傘下のビデオプラットフォームであるYouTubeも今月、クリエイターがどのような種類のコンテンツを収益化できるかに関する外部ポリシーを更新した。
昨年の調査では、YouTube 上に AI によって生成された外部コンテンツだけを含む多数のチャンネルが存在し、その多くには数百万人の登録者がおり、中には数百万ドルの収益を上げているチャンネルもありました。
YouTubeが同プラットフォームと呼ばれる「本物でないコンテンツ」で埋め尽くされるのを阻止するため、同サイトは今月初め、収益化が認められない動画の種類を一般的なもの、反復的なもの、テンプレートベースの3つのカテゴリーに分類した。
これらのスタイルのコンテンツは、生成 AI ツールを使用すると、はるかに簡単かつ迅速に作成できます。
YouTubeの信頼・安全性責任者のマット・ハルプリン氏は、更新された規則について社外のインタビューで、AIツールは人々のコンテンツを助けることはできるものの、偽動画や低品質動画の作成に使用されることが多くなっていると述べた。
「同じテクノロジーが本当に素晴らしいものを実現します」とハルプリン氏は語った。
「しかし、それは一種のコンテンツファーミングのようなものも可能にし、それは私たちが望んでいないものです。」
- 2 月 4 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c77g6dm5pr8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-31T21:57:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c1ad/live/074af240-8d23-11f1-92b9-3b7efaf76067.jpg",
    readTime: 5,
  },
  {
    id: "the-s-p-500-is-making-a-change-by-adding-01a25893",
    title: "The S&P 500 is making a change by adding this little-known industrial stock",
    titleJa: "S&P 500 は、このあまり知られていない工業株を追加することで変化を起こしています",
    summaryJa: "ファーガソン・エンタープライズの株価は、バージニア州ニューポートニューズの同社がS&P 500指数に加わり、有名企業を抑えて採用されるとのニュースを受けて8％以上上昇した。",
    bodyOriginal: `Ferguson Enterprises’ stock was rallying more than 8% after news the Newport News, Va., company will be joining the S&amp;P 500 index, edging out better-known names for inclusion.`,
    bodyJa: `ファーガソン・エンタープライズの株価は、バージニア州ニューポートニューズの同社がS&P 500指数に加わり、有名企業を抑えて採用されるとのニュースを受けて8％以上上昇した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-s-p-500-is-making-a-change-by-adding-this-little-known-industrial-stock-da648bd1?mod=mw_rss_topstories",
    publishedAt: "2026-07-31T21:53:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-00635933",
    readTime: 2,
  },
  {
    id: "trump-s-ai-executive-order-nears-key-dea-a5e3e763",
    title: "Trump's AI executive order nears key deadline as regulation debate intensifies",
    titleJa: "規制議論が激化する中、トランプ大統領のAI大統領令が重要な期限に近づく",
    summaryJa: "ホワイトハウスがAI大統領令で定めた期限を前に、OpenAIのサム・アルトマン氏とエヌビディアのジェンセン・ファン氏がワシントンD.C.のテクノロジーリーダーの一人となった。",
    bodyOriginal: `When President Donald Trump signed his AI executive order in early June, he gave federal agencies 60 days to develop a key framework as part of its implementation.
On Saturday, their time is up.
The fast-approaching deadline of Aug. 1 has been the subject of much anticipation in Silicon Valley, where the debate over artificial intelligence regulation has been raging in recent days. OpenAI CEO Sam Altman and Nvidia's Jensen Huang were among tech leaders who met with lawmakers and Trump administration officials in Washington, D.C., this week, all trying to influence upcoming decisions.
Trump's executive order, thin on details, asks AI companies to voluntarily submit their models to the government for evaluation ahead of their public release. The president tasked Treasury Secretary Scott Bessent, Defense Secretary Pete Hegseth, White House Chief of Staff Susie Wiles, Commerce Secretary Howard Lutnick and other officials with ironing out the specifics.
When asked for comment about the status of the framework, the White House directed CNBC to a social media post from spokesperson Kush Desai: "BREAKING: Trump White House to meet a deadline we set for ourselves."
Representatives from OpenAI and Anthropic didn't immediately respond to a request for comment.
Altman told CNBC on Wednesday that he's seen a draft of the framework, and that he didn't have "anything specifically in mind" as far as proposed changes. He met with Wiles during his visit, and was also expected to meet with Bessent and Lutnick, according to reports.
The deadline lands during a tense moment for AI development in the U.S., as the tech industry's most powerful leaders weigh in on how AI should be regulated, and whether OpenAI and Anthropic, the leading model developers, should be able to exert outsized influence over the future.
In recent weeks, the market has experienced a dramatic shake-up as so-called open-weight models, largely out of China, are showing how quickly they can advance in their capabilities. The models offer cost-efficient alternatives to the frontier models from OpenAI and Anthropic, and allow users to download the technology, modify it and run it on the infrastructure of their choice.
Those developments have prompted a fierce debate within the tech sector over whether the Trump administration should move to restrict or outright ban Chinese open-weight models. In almost unprecedented fashion, the world's leading tech execs have unified in opposing any potential ban.
Nvidia's Huang supercharged the discussion on Monday by releasing a letter urging policymakers to avoid "premature restrictions" on open-weight models. Huang used it as an opportunity to make his debut post on X, formerly Twitter.
Elon Musk, who controls X through his rocket company SpaceX, responded by saying, "This has my full support. Jensen is right."
Microsoft, Meta, Palantir and dozens of other companies signed the letter. OpenAI joined later, but Anthropic did not, opting instead to outline its position in a separate blog post.
The Trump administration hasn't officially shared its position on the matter, though former AI czar David Sacks, who still has influence in the administration, has been among the most vocal opponents of any sort of ban.
According to Trump's executive order, the AI framework will involve a classified benchmarking process that will assess models' cyber capabilities and determine if they should be considered a "covered frontier model." It will also encourage companies to work with the government to determine the "trusted partners" that will have access to those models.
A finalized framework could be welcome news for both OpenAI and Anthropic, which have had to navigate a murky model deployment process since Trump first signed the order.
Soon after the executive order, Anthropic had to disable access to its Fable 5 and Mythos 5 models to comply with an export control directive that was issued by the Commerce Department. Two weeks later OpenAI said it agreed to limit the rollout of its GPT-5.6 model series to a group of "trusted partners" at the request of the U.S. government. Both companies were eventually able to roll out their models more broadly.
"The government and private sector have worked together in a way we have never seen before and this foundation of America First is unprecedented," Wiles wrote in a rare post on X in late June. "Our shared priority remains: get the best tech deployed as quickly and safely as possible."
WATCH: OpenAI CEO Sam Altman to meet with White House Chief of Staff Susie Wiles this week`,
    bodyJa: `ドナルド・トランプ大統領が6月初旬にAI大統領令に署名したとき、その実施の一環として主要な枠組みを開発するために連邦政府機関に60日間の猶予を与えた。
土曜日には時間切れです。
8月1日という期限が目前に迫り、ここ数日人工知能の規制をめぐる議論が激化しているシリコンバレーでは大きな期待が寄せられている。 OpenAIのサム・アルトマン最高経営責任者（CEO）とエヌビディアのジェンセン・ファン氏は今週ワシントンD.C.で議員やトランプ政権当局者らと会談したテクノロジーリーダーの一人で、いずれも今後の決定に影響を与えようとしている。
トランプ大統領の大統領令は、詳細にはあまり触れていないが、AI企業に対し、公開に先立って評価のために自発的にモデルを政府に提出するよう求めている。大統領はスコット・ベッセント財務長官、ピート・ヘグセス国防長官、スージー・ワイルズ大統領首席補佐官、ハワード・ルトニック商務長官、その他の当局者に詳細を解明するよう命じた。
枠組みの状況についてコメントを求められた際、ホワイトハウスはCNBCに対し、クシュ・デサイ報道官のソーシャルメディア投稿に「速報：トランプ・ホワイトハウスは自ら設定した期限を守るよう指示した」と指示した。
OpenAIとAnthropicの代表者はコメントの要請にすぐには応じなかった。
アルトマン氏は水曜日、CNBCに対し、枠組みの草案は見たが、提案されている変更に関しては「具体的に何も考えていない」と語った。報道によると、同氏は訪問中にワイルズ氏と会談し、ベッセント氏とラトニック氏とも会談する予定だという。
この期限は、米国における AI 開発にとって緊迫した時期に迫っている。テクノロジー業界の最も強力なリーダーたちが、AI をどのように規制すべきか、そして主要なモデル開発会社である OpenAI と Anthropic が将来に対して大きな影響力を行使できるかどうかについて意見を交わしているからだ。
ここ数週間、市場は劇的な激変を経験しており、主に中国から出ているいわゆるオープンウェイトモデルがその能力の急速な進歩を示している。このモデルは、OpenAI や Anthropic のフロンティア モデルに代わるコスト効率の高い代替手段を提供し、ユーザーがテクノロジーをダウンロードして変更し、選択したインフラストラクチャ上で実行できるようにします。
こうした動向を受けて、テクノロジー業界内では、トランプ政権が中国の無差別級モデルを制限するべきか、それとも完全に禁止するべきかについて、激しい議論が巻き起こっている。ほぼ前例のないやり方で、世界の主要なテクノロジー企業幹部が団結して禁止の可能性に対して反対している。
NvidiaのHuang氏は月曜日、無差別級モデルに対する「時期尚早な制限」を回避するよう政策立案者に促す書簡を発表し、議論を盛り上げた。 Huang はこれを X (旧 Twitter) にデビュー投稿する機会として利用しました。
自身のロケット会社スペースXを通じてXを管理しているイーロン・マスク氏は、「これは私が全面的に支持する。ジェンセン氏は正しい」と応じた。
Microsoft、Meta、Palantir、その他数十社がこの書簡に署名した。 OpenAI は後に参加しましたが、Anthropic は参加せず、代わりに別のブログ投稿でその立場を概説することにしました。
トランプ政権はこの問題に関する公式の立場を明らかにしていないが、依然として政権内で影響力を持つ元AI皇帝デービッド・サックス氏は、あらゆる種類の禁止に最も声高に反対している一人である。
トランプ大統領の大統領令によると、AIフレームワークには、モデルのサイバー能力を評価し、「カバード・フロンティア・モデル」とみなすべきかどうかを決定する機密ベンチマーク・プロセスが含まれるという。また、企業が政府と協力して、これらのモデルにアクセスできる「信頼できるパートナー」を決定することも奨励する。
トランプ大統領が最初にこの命令に署名して以来、不透明なモデル導入プロセスを乗り越えなければならなかったOpenAIとAnthropicの両方にとって、最終的な枠組みは歓迎すべきニュースとなる可能性がある。
大統領令の直後、Anthropic は商務省が発行した輸出管理指令に準拠するために、自社の Fable 5 および Mythos 5 モデルへのアクセスを無効にする必要がありました。 2週間後、OpenAIは、米国政府の要請に応じ、GPT-5.6モデルシリーズの展開を「信頼できるパートナー」のグループに限定することに同意したと発表した。両社は最終的に、モデルをより広範囲に展開することができました。
「政府と民間部門はこれまで見たことのない方法で協力しており、このアメリカ第一主義の基盤は前例のないものだ」とワイルズ氏は6月下旬、Xに関する珍しい投稿で書いた。 「私たちの共通の優先事項は変わりません。最高のテクノロジーをできるだけ早く安全に導入することです。」
注目：OpenAI CEOのサム・アルトマン氏が今週、ホワイトハウス首席補佐官スージー・ワイルズ氏と会談`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/trump-ai-executive-order-nears-key-deadline-regulation-debate-heats-up.html",
    publishedAt: "2026-07-31T21:46:32+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "health-savings-accounts-can-be-a-great-r-b8b00149",
    title: "Health savings accounts can be a great retirement tool – if you’re healthy or wealthy",
    titleJa: "あなたが健康であるか裕福であれば、健康貯蓄口座は退職後の素晴らしいツールになる可能性があります",
    summaryJa: "HSA は、老後の医療費を相殺することができます。しかし、ほとんどの人には待つ余裕がありません。",
    bodyOriginal: `HSAs can offset healthcare costs in your old age. But most people can’t afford to wait.`,
    bodyJa: `HSA は、老後の医療費を相殺することができます。しかし、ほとんどの人には待つ余裕がありません。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/hsas-can-be-a-great-retirement-tool-if-youre-healthy-or-wealthy-5a3e2991?mod=mw_rss_topstories",
    publishedAt: "2026-07-31T21:28:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-35013032",
    readTime: 2,
  },
  {
    id: "how-leopold-aschenbrenner-built-a-45-bil-fb241fda",
    title: "How Leopold Aschenbrenner built a $45 billion AI hedge fund — and lost most of it in days",
    titleJa: "レオポルド・アシェンブレナーはどのようにして450億ドルのAIヘッジファンドを構築し、その大部分を数日で失ったのか",
    summaryJa: "元OpenAI研究者からヘッジファンドマネージャーに転身したレオポルド・アシェンブレナー氏は、今週、自身のAIに特化したファンド「シチュエーションアウェアネス」の大幅な下落を目の当たりにした。",
    bodyOriginal: `Two years ago, Leopold Aschenbrenner argued he was one of few people in the world who saw the future clearly.
In a sprawling, 165-page essay that became required reading in Silicon Valley, the former OpenAI researcher positioned himself as a kind of prophet for the coming age of artificial super intelligence.
But this week, the limits of Aschenbrenner's vision were on display when the AI-themed hedge fund he runs — named Situational Awareness, also the title of his viral June 2024 manifesto — ran into the harsh reality of tumbling semiconductor stocks and Wall Street margin calls.
At its peak earlier this month, his fund sat atop $45 billion in assets. By Thursday, however, after being forced to offload all of his leveraged stock bets — including hard-hit names like SK Hynix and CoreWeave — to Ken Griffin's Citadel at a discount, the fund's holdings plunged to around $10 billion, according to people with knowledge of the situation.
The story of Aschenbrenner's meteoric rise and sudden fall has captivated both Wall Street and tech circles, making him the most high-profile casualty yet of the volatility accompanying the AI boom.
A polarizing figure, his online followers saw Aschenbrenner — a Columbia University valedictorian at age 19 — as a genius of the next big thing and followed his fund's quarterly filings for clues on hot AI stocks.
Before this month's decline, Situational Awareness racked up gains of more than 1,000% since inception, the Wall Street Journal reported last month. The Journal said Aschenbrenner was just 24 years old.
Meanwhile, critics pointed out that Aschenbrenner had no experience running money prior to launching his fund in July 2024, calling him more lucky than smart. Some noted that his early work experience was at the doomed crypto firm FTX, where he helped now-disgraced founder Sam Bankman-Fried run a charity out of a Bahamas penthouse.
Others on Wall Street, including former traders at global investment banks, noted that in light of reports Situational Awareness used as much as 400% leverage, the collapse wasn't shocking.
"A lot of people saw this blow-up as a matter of not if, but when," said Jerry Diao, who runs a Wall Street coaching firm. "Maybe his views on AI are correct in the long run, but in the public markets, you have to be prepared for the short-term."
The hedge fund didn't immediately respond to a request for comment from CNBC.
Earlier this week, before the sale to Citadel, about two-thirds of Situational Awareness holdings were in long and short positions in public equities, according to one source. The rest were stakes in private companies, dominated by a multibillion-dollar Anthropic investment, the person said.
CNBC's sources spoke on the condition of anonymity to discuss nonpublic details.
The near-collapse of Situational Awareness coincides with the hedge fund manager's wedding, set for this weekend, sources told CNBC's David Faber. Aschenbrenner is engaged to Avital Balwit, chief of staff for Anthropic CEO Dario Amodei, according to a Fortune profile.
'Weirdness' and 'disagreeableness'
Born in Germany to physician parents before moving to the U.S., Aschenbrenner showed an early aptitude for math and computer science, according to profiles and podcast interviews.
He skipped several grades in the German school system, graduating high school at age 15, and as a teen at Columbia University he garnered attention for an academic paper titled, "Existential Risk and Growth."
A Columbia classmate, Sofia Montrone, said that she hadn't heard of Aschenbrenner before meeting him over Zoom shortly before their 2021 graduation.
"It was not like he was some prince, emerging out of the school," Montrone told CNBC. "He was just some guy."
In the interaction, Montrone, who was salutatorian, said she found her classmate "child-like" and socially awkward.
Aschenbrenner has since said that his personality — what he called his own intellectual "weirdness" and "disagreeableness" — was punished in German culture. He came to see it as the source of his edge.
While at Columbia, he co-founded the school's chapter of Effective Altruism, a philosophy popular in some tech circles that advocates for founders to make the most money possible in order to help humanity.
That network became his career pipeline, eventually leading him to work with another effective altruism proponent — Bankman-Fried — after his graduation in 2021. He worked for a stint at the Future Fund, the philanthropic arm of FTX, before the crypto firm's collapse.
In 2023, Aschenbrenner landed on OpenAI's Superalignment team, working under Ilya Sutskever on the problem of keeping AI aligned with human interests. After a hacker breached OpenAI's internal systems, he wrote a memo to the board warning that the company's security wasn't strong enough to stop foreign espionage, naming China specifically.
In 2024, the company fired Aschenbrenner after accusing him of improperly sharing confidential information, a characterization he has disputed, saying he was raising concerns about the company's security practices.
"I liked Leopold while at OpenAI," Scott Aaronson, a computer scientist now at the University of Texas at Austin who previously worked on AI safety at OpenAI, told CNBC this week in an email.
"I was sorry when he got pushed out because of sharing information in a way leadership didn't approve of," he said. It "sounded like he was trying to do the right thing and they overreacted."
An OpenAI spokesman declined to comment and referred to statements the company made at the time that the firm disagreed with many of Aschenbrenner's claims.
Representatives for Columbia University and its Effective Altruism chapter didn't respond to requests for comment.
Stripe, Github investors
Weeks after his departure from OpenAI, Aschenbrenner turned his brief experience at the leading AI firm into a sweeping vision of where artificial intelligence, and the world, was headed.
His June 2024 essay argued that artificial general intelligence could arrive within years and that governments were badly underestimating the pace of progress. Admirers saw it as evidence that Aschenbrenner was a prodigy with valuable insight into AI's trajectory, while critics said it overstated both the technology's near-term capabilities and his own certainty about the future.
By July of that year, Aschenbrenner parlayed his rising fame into seed capital for his hedge fund, raising a reported $225 million from Stripe co-founders Patrick and John Collison, former GitHub CEO Nat Friedman and investor Daniel Gross.
That would mark the start of a two-year run unlike any in recent Wall Street history.
"Before long, the world will wake up," Aschenbrenner wrote at the time, adding that only a few hundred people in the AI community knew what was coming.
"If they are seeing the future even close to correctly," he wrote, "we are in for a wild ride."
— CNBC's Kate Rooney contributed to this report.`,
    bodyJa: `2年前、レオポルド・アッシェンブレナーは、自分は未来を明確に見ている世界でも数少ない人物の一人であると主張した。
シリコンバレーで必読となった165ページにわたる広大なエッセイの中で、元OpenAI研究者は自分自身を来るべき人工超知能時代の一種の預言者であると位置づけた。
しかし今週、アシェンブレナー氏が経営するAIをテーマにしたヘッジファンド――2024年6月に話題になった同氏のマニフェストのタイトルでもある「状況認識」と名付けられた――が、半導体株の暴落とウォール街のマージンコールという厳しい現実に直面したとき、アシェンブレナー氏のビジョンの限界が露呈した。
今月初めのピーク時には、彼のファンドの資産は450億ドルに達していた。しかし、状況に詳しい関係者によると、SKハイニックスやコアウィーブといった大打撃を受けた銘柄を含む同氏のレバレッジをかけた株式投資のすべてを、木曜日までにケン・グリフィン氏のシタデルに割引価格で移送することを余儀なくされ、同ファンドの保有資産は約100億ドルにまで急落したという。
アシェンブレナー氏の流星のような隆盛と突然の凋落の物語はウォール街とテクノロジー界の両方を魅了し、彼はAIブームに伴う不安定さの中で最も注目を集めた犠牲者となった。
意見が分かれる人物である彼のオンラインフォロワーは、19歳でコロンビア大学総代を務めたアシェンブレナーを次のビッグなことの天才とみなし、話題のAI銘柄の手掛かりを求めて同ファンドの四半期報告書を追跡した。
ウォール・ストリート・ジャーナルが先月報じたところによると、今月の落ち込みの前に、状況認識は開始以来1,000％以上の上昇を記録した。同紙によると、アシェンブレナー氏はまだ24歳だったという。
一方、批評家らは、アシェンブレナー氏が2024年7月にファンドを立ち上げるまで資金運用の経験がなかったことを指摘し、同氏は賢いというよりも幸運だったと批判した。彼の初期の勤務経験は破滅した仮想通貨会社FTXであり、そこで現在は恥をかかされた創設者サム・バンクマン・フリードがバハマのペントハウスで慈善事業を運営するのを手伝ったという人もいる。
世界的な投資銀行の元トレーダーを含むウォール街の他の人々は、状況認識が400％ものレバレッジを使ったという報告を考慮すると、この破綻は衝撃的ではなかったと指摘した。
ウォール街のコーチング会社を経営するジェリー・ディアオ氏は、「多くの人は、今回の騒動は、いつ起こるかではなく、いつ起きるかの問題だと考えていた」と語った。 「AIに関する彼の見解は長期的には正しいかもしれないが、公開市場では短期的な備えをしておく必要がある。」
ヘッジファンドはCNBCからのコメント要請にすぐには応じなかった。
ある関係筋によると、今週初め、シタデルへの売却前、シチュエーショナル・アウェアネスの保有株の約3分の2が公開株のロング・ポジションとショート・ポジションを持っていたという。残りは民間企業の株式であり、数十億ドル規模のアンスロピック投資が大半を占めていたと、その関係者は述べた。
CNBCの関係者らは非公開の詳細について匿名を条件に語った。
状況認識のほぼ崩壊は、今週末に予定されているヘッジファンドマネージャーの結婚式と重なっている、と関係者がCNBCのデビッド・フェイバーに語った。フォーチュンのプロフィールによると、アシェンブレナー氏はアンスロピック社のCEOであるダリオ・アモデイ氏の首席補佐官であるアビタル・バルウィット氏と婚約しているという。
「奇妙さ」と「不快さ」
プロフィールやポッドキャストのインタビューによると、アシェンブレナー氏はドイツで医師の両親のもとに生まれ、その後米国に移住した。
彼はドイツの学校制度でいくつかの学年を飛び級し、15歳で高校を卒業し、10代でコロンビア大学に通っていたときに「実存的リスクと成長」というタイトルの学術論文で注目を集めた。
コロンビア大学の同級生ソフィア・モントロンさんは、2021年の卒業直前にZoomで会うまでアシェンブレナーさんのことは知らなかったと語った。
「学校から出てきた王子様のような感じではなかった」とモントローネさんはCNBCに語った。 「彼はただの男だった。」
やりとりの中で、敬礼的な性格だったモントローネさんは、クラスメートが「子どものよう」で社交的に不器用だと感じたと語った。
その後、アッシェンブレナー氏は、自分の性格――彼自身の知的「奇妙さ」と「不快さ」と呼んだもの――はドイツ文化の中で罰せられたと語った。彼はそれが自分の優位性の源であると考えるようになりました。
コロンビア大学在学中、彼は同校の効果的利他主義の支部を共同設立しました。これは、人類を助けるために創設者が可能な限り多くのお金を稼ぐことを提唱する、一部のテクノロジー業界で人気のある哲学です。
そのネットワークが彼のキャリアのパイプラインとなり、最終的には2021年の卒業後、別の効果的な利他主義の提唱者バンクマン・フリードと協力することになった。彼は仮想通貨会社の崩壊前、FTXの慈善部門であるフューチャー・ファンドで一任働いていた。
2023 年、アシェンブレナー氏は OpenAI の Superalignment チームに加わり、Ilya Sutskever 氏の下で AI を人間の利益と一致させ続けるという問題に取り組みました。ハッカーがOpenAIの内部システムに侵入した後、同氏は取締役会にメモを書き、同社のセキュリティは外国のスパイ活動を阻止できるほど強力ではないと警告し、特に中国を名指しした。
2024年、同社はアシェンブレナー氏が機密情報を不適切に共有したとして同氏を解雇したが、アシェンブレナー氏は同社のセキュリティ慣行に対する懸念を引き起こしているとして、この特徴に異議を唱えていた。
「OpenAIにいた頃、レオポルドが好きだった」と、現在はテキサス大学オースティン校のコンピュータ科学者で、以前はOpenAIでAIの安全性の研究に取り組んでいたスコット・アーロンソン氏は、今週CNBCに電子メールで語った。
「指導部が認めない方法で情報を共有したために彼が追い出されたときは残念だった」と同氏は語った。 「彼が正しいことをしようとしていたように聞こえたが、彼らは過剰反応した」
OpenAIの広報担当者はコメントを控え、同社がアシェンブレナー氏の主張の多くに同意しないとする当時の声明に言及した。
コロンビア大学とその効果的利他主義支部の代表者はコメント要請に応じなかった。
Stripe、Github の投資家
OpenAI を退職してから数週間後、アシェンブレナー氏は、大手 AI 企業での短い経験を、人工知能と世界がどこへ向かうのかについての包括的なビジョンに変えました。
同氏の2024年6月のエッセイでは、汎用人工知能は数年以内に登場する可能性があり、政府は進歩のペースをひどく過小評価していると主張した。賞賛者らはこれを、アシェンブレナー氏がAIの軌道に関する貴重な洞察を持った天才であることの証拠だとみなしたが、批評家らは、同テクノロジーの短期的な能力と将来についての同氏自身の確信の両方が誇張されていると批判した。
同年7月までに、アシェンブレナー氏は高まる名声を自身のヘッジファンドのシードキャピタルに注ぎ込み、Stripeの共同創設者であるパトリック・コリソン氏とジョン・コリソン氏、元GitHub CEOのナット・フリードマン氏、投資家のダニエル・グロス氏から2億2,500万ドルを調達したと伝えられている。
これは、最近のウォール街の歴史の中で例のない2年間の政権の始まりとなる。
アシェンブレナー氏は当時、「やがて世界は目覚めるだろう」と書き、何が起こるかを知っていたのはAIコミュニティの数百人だけだと付け加えた。
同氏は、「もし彼らが未来を正しく見ているのであれば、我々はとんでもない事態に陥るだろう」と書いている。
— CNBC の Kate Rooney がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/leopold-aschenbrenner-situational-awareness-fund-fire-sale.html",
    publishedAt: "2026-07-31T19:07:44+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "trump-says-u-s-has-not-agreed-to-grant-u-46243600",
    title: "Trump says U.S. has 'not agreed to' grant Ukraine Patriot missile licenses",
    titleJa: "トランプ大統領、米国はウクライナにパトリオットミサイルライセンスを供与することに「同意していない」と発言",
    summaryJa: "ドナルド・トランプ大統領は金曜日、米国はウクライナにパトリオット・ミサイル・システムの製造ライセンスを与えることに「同意していない」と述べ、明らかに対ロシア戦争におけるキエフの最優先事項の一つを後退させたとみられる。トランプ大統領はキャンプデービッドでの閣議で、高度な軍事技術は「譲渡するのが難しい」と述べ、それを受け取った国が「いつか敵に回す」可能性があると付け加えた。",
    bodyOriginal: `President Donald Trump on Friday said the U.S. "has not agreed" to grant Ukraine licenses to produce Patriot missile systems, apparently backtracking on one of Kyiv's top priorities in its war against Russia.
The advanced military technology is "a hard thing to give away," Trump said at a Cabinet meeting at Camp David, adding that a country that receives it could "someday turn on you."
"You have to be very careful," Trump said. He said the U.S. and Ukraine are still "talking about it."
Trump's latest comments on the war in eastern Europe came three days after he spoke at the White House with Ukrainian President Volodymyr Zelenskyy, who said the leaders had a "good meeting" about the Patriot licenses.
Trump's apparent shift also came amid growing concerns that the U.S. is burning through its stockpiles of top weaponry, including Patriots, as it continues to wage war in Iran, with air defenses being key to stopping Iranian missiles.
Less than three weeks earlier, Trump told Zelenskyy directly that the U.S. would grant his wish. "We're going to give a license to you to make Patriots," Trump said at the NATO Summit — though he added, "we haven't informed the company of that yet," possibly referring to defense contractors Lockheed Martin or RTX, both of which manufacture the missile systems.
But on Thursday, Trump told the Financial Times he was "not sure" if he would follow through on letting Kyiv build the "extraordinary weapon."
Ukraine's U.S. embassy did not immediately respond to CNBC's request for comment on Trump's latest remarks.
Zelenskyy says the Patriot system is crucial to Ukraine's ability to intercept incoming ballistic missiles from Russia. But even if Ukraine gets the go-ahead to begin manufacturing Patriots, it may still be years before any of the expensive, highly complex weapons are actually produced there.
The issue nevertheless "remains a top priority" for Kyiv, Zelenskyy said Friday following a call with Vice President JD Vance.
"We agreed that our teams will stay in touch and work through everything discussed today," Zelenskyy wrote in an X post. "I thank the United States for its support of Ukraine and our people."
Zelenskyy later said he met with Lockheed's team to discuss "our joint capabilities related to Patriots and other systems."
"Our teams are already working on specific solutions to move to co-production as quickly as possible and increase our capabilities to protect lives," he said.
Lockheed and RTX did not immediately respond to CNBC's requests for comment.`,
    bodyJa: `ドナルド・トランプ大統領は金曜日、米国はウクライナにパトリオット・ミサイル・システムの製造ライセンスを与えることに「同意していない」と述べ、明らかに対ロシア戦争におけるキエフの最優先事項の一つを後退させたとみられる。
トランプ大統領はキャンプデービッドでの閣議で、高度な軍事技術は「譲渡するのが難しい」と述べ、それを受け取った国が「いつか敵に回す」可能性があると付け加えた。
トランプ大統領は「細心の注意を払う必要がある」と語った。同氏は、米国とウクライナはまだ「それについて話し合っている」と述べた。
東ヨーロッパでの戦争に関するトランプ大統領の最新のコメントは、大統領がホワイトハウスでウクライナのウォロディミル・ゼレンスキー大統領と会談した3日後に発表されたもので、ゼレンシキー大統領は、首脳らは愛国者ライセンスについて「良い会談」ができたと述べた。
トランプ大統領の明らかな方針転換は、米国がイランとの戦争を続ける中、ペイトリオットを含む主要兵器の備蓄を使い果たしているとの懸念が高まる中で生じたもので、防空はイランのミサイルを阻止する鍵となる。
それから3週間も経たないうちに、トランプ大統領はゼレンスキー大統領に対し、米国は彼の願いを叶えてくれるだろうと直接伝えた。トランプ大統領はNATOサミットで「我々はあなたたちにペイトリオット製造のライセンスを与えるつもりだ」と述べたが、「まだ会社にそのことを伝えていない」ともつけ加え、おそらくミサイルシステムを製造している防衛請負業者ロッキード・マーチン社やRTX社のことを指していると思われる。
しかし木曜日、トランプ大統領はフィナンシャル・タイムズに対し、キエフに「並外れた兵器」を製造させるという方針を貫くかどうかは「分からない」と語った。
ウクライナ米国大使館は、トランプ大統領の最近の発言についてのCNBCのコメント要請にすぐには応じなかった。
ゼレンスキー大統領は、ロシアから飛来する弾道ミサイルを迎撃するウクライナの能力にとってパトリオットシステムは極めて重要であると述べた。しかし、たとえウクライナがペイトリオットの製造開始の許可を得たとしても、高価で非常に複雑な兵器が実際にウクライナで製造されるまでにはまだ何年もかかるかもしれない。
それでもなお、この問題はキエフにとって「依然として最優先事項である」とゼレンスキー大統領は金曜日、JD・バンス副大統領との電話会談後に述べた。
ゼレンスキー大統領はXの投稿で、「我々のチームは連絡を取り合い、今日議論されたすべてのことを解決することに合意した」と述べた。 「米国がウクライナと国民を支援してくれたことに感謝する。」
ゼレンスキー氏は後にロッキード社のチームと会い、「ペイトリオットやその他のシステムに関連する我々の共同能力」について話し合ったと述べた。
「私たちのチームは、できるだけ早く共同制作に移行し、命を守る能力を高めるための具体的な解決策にすでに取り組んでいます」と彼は述べた。
ロッキードとRTXはCNBCのコメント要請にすぐには応じなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/trump-ukraine-patriot-missile-license-russia.html",
    publishedAt: "2026-07-31T18:52:10+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "fintech-broker-clear-street-offers-inves-172b0bd6",
    title: "Fintech broker Clear Street offers investors pre-IPO access to $188 billion AI giant Databricks",
    titleJa: "フィンテックブローカーのクリアストリートが投資家に1880億ドルのAI大手データブリックスへのIPO前のアクセスを提供",
    summaryJa: "フィンテック証券会社の Clear Street は、投資家が後期段階のスタートアップへのアクセスを増やすために、Databricks 株を皮切りにプライベート マーケット プラットフォームを立ち上げています。",
    bodyOriginal: `Clear Street, the prime brokerage startup that recently shelved plans for its own IPO, is now aiming to give investors access to some of Silicon Valley's hottest private companies before they go public.
The firm is close to announcing a new platform designed to let accredited investors buy interests in late-stage private companies, starting with AI software titan Databricks, valued this month at $188 billion, CNBC is first to report.
"The goal is to remove friction and give more people the ability to invest in more products," Uri Cohen, CEO and co-founder of Clear Street, said in an interview. "A lot of the wealth creation has been in private markets, and more and more retail investors and smaller investors want to be part of that."
More startups are staying private for longer, meaning much of their value creation is taking place before an initial public offering. That has fueled growing demand from rich investors seeking exposure to companies like Databricks, Anthropic and OpenAI before they debut on public markets.
Last week, CNBC reported that Goldman Sachs has created a new platform to expand its offerings for wealthy clients and family offices who increasingly want direct stakes in fast-growing private companies.
Clear Street, by handling the asset servicing and risk management internally, can offer margin loans against the pre-IPO holdings, a rarity in private markets, said Cohen.
The fintech firm will have as many as 30 startups on its platform by yearend, mostly tech firms in the $5 billion to $20 billion valuation range that are roughly six months to two years out from an IPO, he said.
To support the push, Clear Street is also launching dedicated private company equity research headed by analyst Owen Lau, in what Cohen called an effort to bring public-market-style transparency to traditionally opaque private markets.
The expansion comes at a key moment for Clear Street, itself.
The firm, which was last valued at nearly $12 billion in a private funding round earlier this year, in February paused its own IPO plans amid broader market volatility that hit broker and fintech multiples.
Despite putting its listing on hold, the firm is cash-flow positive and bolstered its liquidity with a $400 million investment-grade bond offering, giving it the runway to build out its private market infrastructure, Cohen said.
"We're in a position of strength, so the decision was shelved for better timing," Cohen said. "We're definitely going to look towards a '27 listing, depending on the market conditions."`,
    bodyJa: `最近自社のIPO計画を棚上げしたプライム・ブローカレッジの新興企業クリア・ストリートは現在、株式公開前に投資家にシリコンバレーで最も人気のある非公開企業のいくつかにアクセスできるようにすることを目指している。
同社は、認定投資家がレイターステージの非公開企業の権益を購入できるように設計された新しいプラットフォームの発表に近づいていると、今月評価額1,880億ドルと評価されたAIソフトウェア大手データブリックスをはじめとしているとCNBCが最初に報じた。
「目標は、摩擦を取り除き、より多くの人がより多くの製品に投資できるようにすることです」とクリアストリートのCEO兼共同創設者であるウリ・コーエン氏はインタビューで語った。 「富の創出の多くは非公開市場で行われており、その参加を望む個人投資家や小規模投資家がますます増えている。」
より多くのスタートアップが非公開のままでいる期間が長くなり、その価値創造の多くが新規株式公開前に行われることを意味します。これにより、Databricks、Anthropic、OpenAIなどの企業が公開市場にデビューする前にエクスポージャーを求める裕福な投資家からの需要が高まっています。
CNBCは先週、ゴールドマン・サックスが、急成長する非公開企業への直接出資をますます求める富裕層の顧客やファミリーオフィス向けのサービスを拡大するための新たなプラットフォームを創設したと報じた。
コーエン氏によると、クリアストリートは資産のサービシングとリスク管理を社内で行うことで、IPO前の保有株に対する証拠金融資を提供できるが、これは民間市場では珍しいことだという。
同フィンテック企業のプラットフォームには年末までに最大30社の新興企業が参加する予定で、そのほとんどが評価額50億ドルから200億ドルの範囲にあるテクノロジー企業で、IPOからおよそ半年から2年かかると同氏は述べた。
この動きを支援するために、クリアストリートはまた、アナリストのオーウェン・ラウ氏が率いる専門の未公開企業株式調査を立ち上げている。これは、コーエン氏の言うところの、従来不透明な未公開市場に公開市場型の透明性をもたらす取り組みである。
この拡張は、クリアストリート自体にとって重要な時期に行われる。
同社は今年初めの非公開資金調達ラウンドで最後に120億ドル近くと評価されていたが、ブローカーやフィンテックのマルチプルに打撃を与えた広範な市場のボラティリティの中、2月に自社のIPO計画を一時停止した。
上場を保留しているにもかかわらず、同社のキャッシュフローはプラスであり、4億ドルの投資適格社債の発行で流動性を強化し、プライベート市場インフラを構築する滑走路を与えたとコーエン氏は述べた。
「我々は強い立場にあるので、より良いタイミングを図るために決定は棚上げされた」とコーエン氏は語った。 「市場の状況次第ではありますが、27年の上場を目指すつもりです。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/clear-street-pre-ipo-platform-databricks.html",
    publishedAt: "2026-07-31T18:20:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "analysis-markets-heard-a-dovish-kevin-wa-6c77a482",
    title: "Analysis: Markets heard a dovish Kevin Warsh. The Fed chairman's own words suggest a rate hike",
    titleJa: "分析：市場はハト派のケビン・ウォーシュ氏の発言を聞いた。 FRB議長自身の発言が利上げを示唆",
    summaryJa: "米連邦準備制度理事会（FRB）のケビン・ウォーシュ議長の水曜日のコメントに対する圧倒的な反応は、同議長がインフレには緩和するというものだった。これに応じて債券利回りを押し上げた投資家は注意が必要だ。同氏の発言をよく観察すると、ウォーシュ氏は広く信じられているほどハト派ではないかもしれない。インフレ率が引き続き目標を上回れば、ウォーシュ氏自身の言葉から判断すると、経済を抑制するためにすぐに行動を起こさざるをえないと感じるかもしれない。聞いたことに基づいて行動する投資家は、利上げが目前に迫っている場合に盲目になってしまう危険がある。",
    bodyOriginal: `The overwhelming response to Federal Reserve Chairman Kevin Warsh's comments on Wednesday was that he would go easy on inflation. Investors who drove up bond yields in response should be careful.
Looking closely at what he said, Warsh may not be as dovish as widely believed. If inflation continues to come in above target, then Warsh — judging by his own words — may feel compelled to act soon to restrain the economy. Investors who act on what they thought they heard risk being blindsided if a rate increase is around the corner.
Crucially, Warsh opted not to celebrate a soft inflation print that had come in prior to the meeting. Had he wanted to present a dovish message, he could have seized on that data. Instead, he wrote it off.
Warsh's muddled performance Wednesday at his second press conference scrambled many investors' view of the Federal Reserve. Some saw a man who had been long perceived as an inflation hawk appear to talk down worries about inflation. He answered reporters' questions with vague statements and left many confused.
Some concluded Warsh is in thrall to President Donald Trump, who continues to ask the Fed for lower interest rates, despite the central bank's statutory independence and pledges from both the president and Warsh that independence remains.
A chorus of market analysts said Warsh performance called his credibility into question. Long-term treasury yields rose, while the dollar fell and gold rose.
But if the market is misreading the Fed chairman as a dove, it could be in for further violent moves when traders are forced to unwind their positions. It helps to look at the prepared statement Warsh read out at the beginning of the press conference that reflected the message he went into the room intending to send — rather than what emerged from the back-and-forth with reporters.
Ahead of the meeting, the consumer price index showed a rare decline, with prices falling by 0.4% in June from the month before.
Warsh was muted on that point. "We understand that the five-plus years of inflation above target cannot be cured in nine weeks — or by a single month of modest price decreases," he said Wednesday, speaking for the Federal Open Market Committee, which sets the Fed's benchmark interest rate.
The words of Fed chairs are among the most carefully parsed remarks in the world. Warsh's performance Wednesday shows he hasn't yet figured out how to rhetorically separate the short-term and long-term challenges. Nor did his exchanges with reporters bolster his prepared remarks. Instead, he undermined himself and his carefully crafted message.
Investors were hoping to hear a chairman who would strike a hasty blow against fast-rising prices and speak up to a president who continues to bear down on the Fed. Investors didn't get that on Wednesday. Instead they heard about his plans to tinker with inflation measurements, and panicked.
But that isn't to say Warsh didn't try or intend to deliver the message that he was willing to raise rates.
"Where necessary and appropriate, we will not hesitate to act," Warsh said in his prepared remarks.
It is easy to dismiss that kind of language as empty hand-waving. But in 2012, then-Chairman Ben Bernanke — one of Warsh's mentors — pledged to "provide additional policy accommodation as needed," and then proceeded to launch a new round of massive asset purchases. In May 2022, Jerome Powell told reporters that "we will not hesitate" to raise interest rates if necessary. In June, he hiked rates by three-quarters of a point.
Tangled language on inflation
Warsh has often spoken of the tremendous promise of AI to produce growth without inflation. But in his prepared remarks, Warsh was more circumspect. He said it wasn't clear when the economy's productive capacity would be able to jump in response to all the spending that's happening now. As he put it, "the precise timing and magnitude of effects on the supply side remain hard to predict."
Warsh also spoke more clearly in his opening remarks about a point some analysts seized on in his later responses to reporters. The Fed's formal commitment on prices is to achieve 2% annual inflation over the long run as measured by the personal consumption expenditures index.
Asked about PCE, Warsh gave some observers the impression that he might change the 2% target. We are sticking with PCE for now, Warsh said. But, "who knows, come after next January, what we might say about strategy."
But Warsh showed no ambiguity in his prepared remarks. "There is no soft inflation target, there is no soft implicit target — not on this Committee's watch. There is only a target, and it is 2 percent."
So what is the Fed chairman prepared to do about it? There, too, his opening remarks dropped hints. The FOMC didn't just discuss interest rates, Warsh said. "We discussed monetary policy tools and strategies for achieving stable prices." The committee, Warsh explained, asked, "how much accommodation are we getting from the balance sheet?"
In other words, Warsh has already begun the task of moving the FOMC toward his long-stated goal of shrinking the Fed's balance sheet. As he has said elsewhere, that would effectively tighten financial conditions, similar to the effects of raising interest rates.
The issue of the balance sheet speaks to Warsh's challenge: He doesn't have the power to quickly push through the changes he wants. Warsh came into the Fed with an agenda for "regime change," as he described it. But the mechanism to achieve that change is a set of slow-moving task forces that he believes will sooner or later nudge the Fed into his preferred reforms. He wants to reduce the balance sheet, find alternate ways to measure inflation and get ready for an economy reshaped by AI.
But the task forces won't report back before the end of the year at the earliest. The committee clearly isn't ready to take action on the balance sheet. Warsh's explicit discussion of the Fed's "tools" is a strong indication he will take the earliest possible opportunity to use the balance sheet to tighten monetary policy, in addition to anything he might do on interest rates.
Meanwhile Warsh has to deal with an economy battered by tariffs and high energy prices that he can't influence directly, and by an AI boom whose potential fruits are still over the horizon.
Warsh has spent decades studying the leaders of the Fed and their failures. Credibility is paramount to him. His words suggest he may be further down the path to a rate hike than investors interpreted following Wednesday's meeting — and might just be waiting for the two inflation reports that come before the FOMC gathers next in September.
Given the beating he took in the aftermath of this meeting, it likely won't take him much to pull the trigger on a rate increase at the next one.`,
    bodyJa: `米連邦準備制度理事会（FRB）のケビン・ウォーシュ議長の水曜日のコメントに対する圧倒的な反応は、同議長がインフレには緩和するというものだった。これに応じて債券利回りを押し上げた投資家は注意が必要だ。
同氏の発言をよく観察すると、ウォーシュ氏は広く信じられているほどハト派ではないかもしれない。インフレ率が引き続き目標を上回れば、ウォーシュ氏自身の言葉から判断すると、経済を抑制するためにすぐに行動を起こさざるをえないと感じるかもしれない。聞いたことに基づいて行動する投資家は、利上げが目前に迫っている場合に盲目になってしまう危険がある。
重要なのは、ウォーシュ氏が会合前に提出されたソフトインフレ報告を祝わないことを選択したことだ。もし彼がハト派的なメッセージを提示したかったのであれば、そのデータを利用できたかもしれない。代わりに、彼はそれを帳消しにした。
水曜日の2回目の記者会見でのウォーシュ氏の混乱したパフォーマンスは、FRBに対する多くの投資家の見方を混乱させた。長い間インフレタカ派とみなされてきた人物がインフレ懸念を抑え込んでいるように見えるとの見方もあった。彼は記者の質問に曖昧な言葉で答え、多くの人を困惑させた。
中銀の法定の独立性と大統領とウォーシュ氏の両者が独立性を維持すると約束しているにもかかわらず、ウォーシュ氏はFRBに金利引き下げを要求し続けているドナルド・トランプ大統領の虜になっていると結論付ける人もいる。
市場アナリストらは、ウォーシュ氏のパフォーマンスが同氏の信頼性に疑問を投げかけていると述べた。長期国債利回りが上昇する一方、ドルは下落し、金は上昇した。
しかし、市場がFRB議長をハト派と誤読すれば、トレーダーがポジションの巻き戻しを余儀なくされ、さらなる暴力的な動きに陥る可能性がある。記者会見の冒頭でウォーシュ氏が読み上げた準備済みの声明を見ると、ウォーシュ氏が伝えようとして部屋に入ったメッセージが反映されており、記者たちとのやりとりから浮かび上がったものではなく、そのメッセージを反映している。
会合を前に、消費者物価指数はまれに見る下落を示し、6月の物価は前月比0.4％下落した。
ウォーシュ氏はその点について沈黙を保った。同氏は水曜、FRBの基準金利を設定する連邦公開市場委員会の代表として、「5年以上にわたって目標を上回ったインフレは9週間では、あるいは1カ月の小幅な物価下落では回復できないことを我々は理解している」と述べた。
FRB議長の言葉は、世界で最も注意深く解析された発言の一つである。ウォーシュ氏の水曜日のパフォーマンスは、彼が短期的な課題と長期的な課題を修辞的に区別する方法をまだ理解していないことを示している。記者たちとのやり取りも、準備していた発言を裏付けるものではなかった。代わりに、彼は自分自身と彼の慎重に作成されたメッセージを傷つけました。
投資家らは、物価の急騰に速攻で打撃を与え、FRBに圧力をかけ続ける大統領に声を上げる議長の発言を期待していた。投資家は水曜日にはそれを理解できなかった。代わりに、彼らはインフレ測定をいじるという彼の計画について聞き、パニックに陥りました。
しかしそれは、ウォーシュ氏が利上げに前向きであるというメッセージを伝えようとしなかった、あるいは伝えるつもりがなかったということではない。
ウォーシュ氏は準備した発言の中で、「必要かつ適切な場合には、ためらうことなく行動する」と述べた。
そのような言葉を空振りとして無視するのは簡単です。しかし2012年、ウォーシュ氏の指導者の一人であるベン・バーナンキ議長（当時）は「必要に応じて追加の政策緩和を提供する」と約束し、新たな大規模な資産買い入れの開始に着手した。 2022年5月、ジェローム・パウエル議長は記者団に対し、必要であれば利上げを「ためらわない」と語った。 ６月には４分の３ポイント利上げした。
インフレに関する言葉が錯綜している
ウォーシュ氏は、AIがインフレを起こさずに成長をもたらすという大きな約束について頻繁に語っている。しかし、ウォーシュ氏は準備した発言の中で、より慎重な態度をとった。同氏は、現在起きているあらゆる支出に応じて経済の生産能力がいつ急上昇できるかは不透明だと述べた。同氏の言葉を借りれば、「供給側への影響の正確なタイミングと規模を予測するのは依然として難しい」という。
ウォーシュ氏はまた、冒頭の挨拶で、その後の記者への返答で一部のアナリストが捉えた点について、より明確に語った。 FRBの物価に関する正式な公約は、個人消費支出指数で測定した長期的に年間2％のインフレを達成することである。
PCEについて質問されたウォーシュ氏は、一部の観察者に2％の目標を変更する可能性があるという印象を与えた。ウォーシュ氏は、「我々は今のところPCEに固執する」と述べた。しかし、「来年1月以降、戦略について何を言えるかは誰にも分からない」。
しかし、ウォーシュ氏は準備した発言に曖昧さを一切示さなかった。 「ソフトなインフレ目標はなく、ソフトな暗黙の目標も存在しない。当委員会は監視していない。目標があるだけで、それは２％だ。」
それでは、FRB議長はそれに対して何をする用意があるのでしょうか?そこでも、彼の冒頭の発言がヒントを落とし込んだ。ウォーシュ氏は、FOMCは金利についてのみ議論したわけではないと述べた。 「我々は物価の安定を達成するための金融政策手段と戦略について議論した。」ウォーシュ氏の説明によると、委員会は「貸借対照表からどれだけの緩和が得られるのか？」と尋ねたという。
言い換えれば、ウォーシュ氏はすでに、FRBのバランスシートを縮小するという長年の目標に向けてFOMCを動かすという任務を開始しているということだ。同氏が他の場所でも述べたように、それは金利引き上げの効果と同様に、事実上金融環境を引き締めることになるだろう。
バランスシートの問題は、ウォーシュ氏の課題を物語っている。彼には、望む変化を迅速に押し進める力がないのだ。ウォーシュ氏は「体制変革」を掲げてFRB入りしたと述べた。しかし、その変化を達成するためのメカニズムは、遅かれ早かれFRBを自身の望む改革に押し込むだろうと同氏が信じている一連のゆっくりとした動きのタスクフォースである。彼はバランスシートを削減し、インフレを測定する別の方法を見つけて、AI によって再形成される経済に備えたいと考えています。
しかし、対策本部は早くても年末までには報告しない見通しだ。委員会が貸借対照表に関して行動を起こす準備ができていないのは明らかだ。ウォーシュ氏がFRBの「手段」について明確に議論していることは、同氏が金利に関するあらゆる手段に加えて、バランスシートを利用して金融政策を引き締めるという可能な限り早い機会を利用するという強い示唆である。
一方、ウォーシュ氏は、直接影響力を及ぼすことのできない関税やエネルギー価格の高さ、そしてその潜在的な成果がまだ見えていないAIブームによって打撃を受けた経済に対処しなければならない。
ウォーシュ氏は何十年もかけてFRBの指導者とその失敗を研究してきた。彼にとっては信頼性が最優先だ。同氏の言葉は、水曜日の会合後に投資家が解釈したよりも同氏が利上げへの道をさらに進んでいる可能性を示唆しており、次回9月に開催されるFOMCの前に発表される2つのインフレ報告を待っているだけかもしれない。
今回の会合後に同氏が受けた暴行を考慮すると、次回会合で利上げの引き金を引くのにそれほど時間はかからないだろう。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/kevin-warsh-fed-inflation-rate-hike-markets.html",
    publishedAt: "2026-07-31T18:16:18+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "ai-firms-must-answer-for-rogue-bots-says-53a360b5",
    title: "AI firms must answer for rogue bots, says boss of hacked company",
    titleJa: "ハッキングされた会社の社長、AI企業は不正ボットに対応する必要があると語る",
    summaryJa: "ハッキングされた会社の社長、AI企業は不正ボットに対応する必要があると語る- 公開されました",
    bodyOriginal: `AI firms must answer for rogue bots, says boss of hacked company
- Published
The boss of one of the companies recently hacked by out-of-control artificial intelligence (AI) says bot makers must be accountable for cyber attacks carried out by their creations.
Clement Delangue's company Hugging Face was breached by a rogue OpenAI bot that broke out of a test environment and autonomously attacked his firm earlier this month.
Hugging Face had to rebuild around a third of its IT network after the unprecedented incident.
He told CNN his company - which is a small start-up - will not be taking legal action against OpenAI, but added that these types of hacks are illegal and should remain so.
"Everyone has to remember that a cyber-attack is a crime and it is illegal," he said.
Delangue said he hoped legal frameworks would ensure the companies that make mistakes leading to the hacks are "accountable."
He added that he didn't want cyber attacks on other companies to become "normalised".
His remarks come after Anthrophic, the maker of the chat bot Claude, also admitted that its bot had attacked three companies in similar circumstances in recent months.
Anthropic revealed on Friday that it only realised its bot had escaped the containment system and hacked the organisations after doing a review prompted by the recent OpenAI incident.
In both cases neither of the artificial intelligence giants knew that their models had roamed the internet attacking companies until long after the attacks had been carried out.
The AI models were being tested on their hacking skills and carried out the attacks by breaking out of seemingly secure "sandboxes" to search the internet for ways to complete the tasks set by researchers.
The unprecedented incidents have sparked fierce debates in the cyber-security and legal world about who, if anybody, should be held liable for attacks by out-of-control AI agents.
"Agentic security failures unfold at machine speed, but determining who is materially liable still moves at a lawsuit's pace," said Dor Sarig, co-founder and Chief Builder at Pillar Security.
Sarig was concerned that accountability is already becoming "ambiguous".
"Today the industry is extending grace, but the first time an autonomous agent causes a breach involving real data, a real plaintiff, and real financial losses, liability won't be an academic debate anymore," he said.
"That's when the legal framework, and not just the technical safeguards, will be stress-tested."
AI slow down
The AI-driven cyber-attacks have fuelled calls for tighter safeguards and oversight of the technology, over concerns about the risks posed by increasingly powerful autonomous systems.
US President Donald Trump said on Wednesday that Washington was considering measures to rein in AI tools after recent cyber-security incidents.
Previously, Hugging Face's co-founder Thomas Wolf told the BBC the incident was "a wake-up call" for the industry.
In the wake of his bot going rogue, OpenAI boss Sam Altman said "we may have to pace the rate of AI development," but has not committed to slowing down his company's research.
OpenAI has been asked for comment but a spokesperson has previous said: "we recognise there are a lot of questions and speculative details circulating" about the incident.
They added: "We plan to publish a technical report of our learnings in the coming weeks."`,
    bodyJa: `ハッキングされた会社の社長、AI企業は不正ボットに対応する必要があると語る
- 公開されました
最近、制御不能になった人工知能（AI）によってハッキングされた企業の1社の社長は、ボット作成者は自社の作成物によって行われたサイバー攻撃に対して責任を負わなければならないと述べた。
Clement Delangue 氏の会社 Hugging Face は、今月初めにテスト環境から侵入し、自律的に彼の会社を攻撃した不正な OpenAI ボットによって侵害されました。
ハグフェイスは前例のない事件の後、IT ネットワークの約 3 分の 1 を再構築する必要がありました。
同氏はCNNに対し、小規模な新興企業である自身の会社はOpenAIに対して法的措置を講じないと述べたが、この種のハッキングは違法であり、今後も違法のままであるべきだと付け加えた。
「サイバー攻撃は犯罪であり、違法であることを誰もが覚えておく必要がある」と同氏は述べた。
デラング氏は、ハッキングにつながる間違いを犯した企業が法的枠組みによって「説明責任」を確実に負うことを望むと述べた。
同氏は、他社へのサイバー攻撃が「常態化」することを望んでいないとも付け加えた。
同氏の発言は、チャットボット「Claude」のメーカーであるAnthrophic社も、自社のボットがここ数カ月間に同様の状況で3社を攻撃したことを認めた後に行われた。
Anthropicは金曜日、最近のOpenAIインシデントをきっかけに調査を行った後、自社のボットが封じ込めシステムを脱出し、組織をハッキングしたことに初めて気づいたと明らかにした。
どちらの場合も、人工知能の巨人のどちらも、攻撃が実行されてからずっと後まで、自社のモデルがインターネット攻撃企業を歩き回っていたことを知りませんでした。
AI モデルはハッキング スキルをテストされており、研究者が設定したタスクを完了する方法をインターネットで検索するために、一見安全な「サンドボックス」を突破して攻撃を実行しました。
この前例のない事件により、制御不能になった AI エージェントによる攻撃の責任を誰が負うべきかについて、サイバーセキュリティと法律の世界で激しい議論が巻き起こっています。
「エージェントのセキュリティ障害はマシンのスピードで展開しますが、誰が実質的な責任を負うのかを判断することは依然として訴訟のペースで進んでいます」と、ピラー セキュリティの共同創設者兼チーフ ビルダーであるドー サリグ氏は述べています。
サリグ氏は、説明責任がすでに「曖昧」になっていることを懸念していた。
「現在、業界は猶予期間を延長しているが、初めて自律エージェントが実際のデータ、実際の原告、実際の経済的損失を伴う侵害を引き起こした場合、責任はもはや学術的な議論ではなくなるだろう」と同氏は述べた。
「そのときは、技術的な保護措置だけでなく、法的枠組みがストレステストされることになる。」
AIが遅くなる
AIを活用したサイバー攻撃は、ますます強力になる自律システムによってもたらされるリスクに対する懸念から、テクノロジーに対する安全対策と監視の強化を求める声を高めている。
ドナルド・トランプ米大統領は水曜日、最近のサイバーセキュリティ事件を受けて米国政府がAIツールを抑制する措置を検討していると述べた。
以前、Hugging Faceの共同創設者であるトーマス・ウルフ氏はBBCに対し、この事件は業界に対する「警鐘」であると語った。
OpenAIの責任者であるサム・アルトマン氏は、自社のボットが不正行為に陥ったことを受けて、「AIの開発速度を緩める必要があるかもしれない」と述べたが、同社の研究を遅らせることは約束していない。
OpenAIはコメントを求められているが、広報担当者は以前、この事件について「多くの疑問や憶測の詳細が出回っていることを認識している」と述べた。
彼らはさらに、「今後数週間以内に、私たちの学んだことをまとめた技術レポートを発行する予定です。」と付け加えました。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr7k49xjzzeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-31T18:10:28+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9b89/live/5e05acf0-8d01-11f1-9a29-416a24547568.jpg",
    readTime: 4,
  },
  {
    id: "fifa-tests-the-limits-of-private-equity-1dd61d78",
    title: "FIFA tests the limits of private equity in sports with World Cup subsidiary sale",
    titleJa: "FIFA、ワールドカップ子会社売却でスポーツ界のプライベート・エクイティの限界を試す",
    summaryJa: "ワールドカップの商業運営における20％の株式を売却するというFIFAの計画をUEFAとコンカカフが拒否したことは、スポーツ分野におけるプライベート・エクイティに対する不安を浮き彫りにしている。",
    bodyOriginal: `Global soccer may be finding the limits to private equity's stampede into sports.
A plan by FIFA to sell a minority stake in a new subsidiary — FIFA Forward Enterprise, or FFE — that would control the business side of the World Cup has faced swift backlash. UEFA, the governing organization of European soccer, and Concacaf, the organization controlling North American, Central American and Caribbean soccer, have both rejected the proposal out of concern for outside influence.
FIFA said earlier this week it plans to raise $4.2 billion from third parties, valuing FFE at about $20 billion. Thrive Capital, a private equity firm led by Joshua Kushner, has already backed the plan.
But on Thursday, UEFA threatened to boycott FIFA competitions and the World Cup if the plan moves forward.
"The World Cup cannot be treated as an investment product," UEFA said in a statement. "No part of it should ever be surrendered to private investors. The World Cup is not for sale."
FIFA defended the proposal late Thursday night, saying it would move forward with a vote among its member associations despite mounting criticism. UEFA and Concacaf together represent 96 of the 211 members of FIFA.
"We respect the feedback and concern aired in public and reaffirm our commitment to an open and democratic consultation," its statement read. "No single entity can claim to represent all 211 member associations around the world."
FIFA blamed "incorrect media reports" for the negative response to the plan and said that without the support of a majority of the member associations, its commercial activities would remain unchanged and FFE would not move forward.
Carlos Cordeiro, a senior advisor to FIFA President Gianni Infantino, announced his immediate resignation in protest of the plan.
"Let me be clear: I had no involvement in this proposal, and I oppose it unequivocally. It is a bad deal for FIFA's Member Associations, a bad deal for football, and a bad deal for the long-term future of the game," Cordeiro said in a statement posted to LinkedIn Friday.
While there's no certainty that bringing on institutional capital would affect FIFA operations, it opens the door to outside influence driven by financial gain. While neither UEFA nor Concacaf specifically brought up FIFA's past ties to alleged bribery, but UEFA did cite the soft pressure of shareholder influence as one of the reasons for its rejection of FIFA's plan.
"Football's future cannot be dictated by the expectations of those whose first duty is to maximise financial return," UEFA said. "The moment external investors acquire ownership interests in FIFA competitions, football changes forever. Commercial return becomes a permanent obligation. Investor expectations become a daily pressure."
FIFA pushed back on the characterization of its plan as "selling" the World Cup.
"Nobody is selling football," FIFA said in a statement. "This is not something FIFA would ever entertain."
Private equity uneasiness
Private equity has increasingly pushed the envelope to securitize sports. Investors are attracted to their steady cash flows and growth opportunities in part as an anti-artificial intelligence bet.
"I think anywhere where there's a product that people are turning up for that's entertainment, and it's creating an economic environment, I think it's possible that [private equity investment] will happen," Apollo Sports Capital Chief Strategy Officer Sam Porter said during a Wall Street Journal Sports conference earlier this month.
Still, the sports world has set limits around private equity's involvement. While minority stakes often come with limited to no governance, taking on private capital definitionally involves a new incentive — increasing the value of that investment.
The NFL began allowing sales of up to 10% of teams to select private equity firms in 2024. MLB allows a single fund to own up to 15% of a club with total private equity ownership of up to 30%. The NBA and NHL have the same 30% aggregate maximum, but they have higher individual fund thresholds, capping what any one fund can own at 20%.
The next frontier for private equity may be in college sports, including the potential for investing directly in teams. This hasn't happened yet, in large part because of a general uneasiness at the collegiate level about the ramifications of taking on private money.
But as more investors pile into sports and drive valuations for major leagues higher, would-be stakeholders have been looking for new ventures.
"People view that sports is pure," said Marc Lasry, co-founder of private equity firm Avenue Capital Group, in an interview with CNBC Sport last year. "The hurdle is, at the end of the day, always, no one wants to be first."
— CNBC's Jessica Golden contributed to this report.`,
    bodyJa: `世界のサッカー界は、スポーツ界へのプライベート・エクイティの押し寄せに限界を感じつつあるのかもしれない。
ワールドカップのビジネス面を支配する新しい子会社、FIFAフォワード・エンタープライズ（FFE）の少数株式を売却するというFIFAの計画は、すぐに反発に直面している。欧州サッカーの統括組織であるUEFAと、北米、中米、カリブ海のサッカーを統括する組織であるコンカカフは、いずれも外部からの影響を懸念してこの提案を拒否した。
FIFAは今週初め、FFEの価値を約200億ドルと評価し、第三者から42億ドルを調達する計画であると発表した。ジョシュア・クシュナー氏率いるプライベートエクイティ会社スライブ・キャピタルはすでにこの計画を支持している。
しかし木曜日、UEFAは計画が進めばFIFA大会とワールドカップをボイコットすると脅した。
UEFAは声明で「ワールドカップを投資商品として扱うことはできない」と述べた。 「その一部を個人投資家に明け渡すべきではない。ワールドカップは売り物ではない。」
FIFAは木曜夜遅くにこの提案を擁護し、批判の高まりにもかかわらず加盟協会間の投票を進めると述べた。 UEFA と Concacaf は合わせて、FIFA 加盟国 211 名のうち 96 名を代表しています。
「我々は公の場で表明されたフィードバックと懸念を尊重し、オープンで民主的な協議へのコミットメントを再確認する」と声明文には書かれている。 「単一の団体が、世界中の 211 の加盟協会すべてを代表すると主張することはできません。」
FIFAは、この計画に対する否定的な反応は「誤ったメディア報道」のせいだとし、加盟協会の大多数の支持がなければ商業活動は変わらず、FFEは前進しないだろうと述べた。
FIFA会長ジャンニ・インファンティーノの上級顧問カルロス・コルデイロ氏は、この計画に抗議して即時辞任を発表した。
コルデイロ氏は金曜、リンクトインに投稿した声明文で、「はっきりさせておきたいが、私はこの提案には関与しておらず、はっきりと反対する。これはFIFA加盟協会にとっても悪い取引であり、サッカーにとっても悪い取引であり、競技の長期的な将来にとっても悪い取引だ」と述べた。
機関資本の導入がFIFAの運営に影響を与えるかどうかは定かではないが、金銭的利益による外部からの影響への扉が開かれることになる。 UEFAもConcacafも、FIFAと贈収賄疑惑との過去の関係を具体的に取り上げなかったが、UEFAはFIFAの計画を拒否した理由の1つとして株主の影響力によるソフトな圧力を挙げた。
UEFAは「サッカーの将来は、経済的利益を最大化することを第一の義務とする人々の期待によって左右されることはできない」と述べた。 「外部投資家がFIFA大会の所有権を取得した瞬間、サッカーは永遠に変化する。商業的利益は恒久的な義務となる。投資家の期待は日々のプレッシャーとなる。」
FIFAは、その計画がワールドカップを「販売」するものであると特徴づけることを押し戻した。
FIFAは声明で「誰もサッカーを売っているわけではない」と述べた。 「これはFIFAが決して楽しませるものではない。」
プライベートエクイティへの不安
プライベート・エクイティはスポーツの証券化の限界をますます押し広げています。投資家は、反人工知能への賭けとして、安定したキャッシュフローと成長の機会に魅力を感じています。
アポロ・スポーツ・キャピタルの最高戦略責任者サム・ポーター氏は、今月初めのウォール・ストリート・ジャーナル・スポーツカンファレンスで、「人々がエンターテイメントとして注目している商品があり、それが経済環境を作り出しているところならどこでも、（プライベート・エクイティ投資が）起こる可能性はあると思う」と語った。
それでも、スポーツ界はプライベート・エクイティの関与に関して制限を設けている。少数株主にはガバナンスが制限されている、あるいはまったく備わっていないことがよくありますが、民間資本を引き受けることには、定義上、新たなインセンティブが伴い、その投資の価値が高まります。
NFLは2024年にチームの最大10％までプライベート・エクイティ会社を売却することを認め始めた。MLBは単一ファンドがクラブの最大15％を所有することを認めており、プライベート・エクイティの合計所有権は最大30％までとなっている。 NBA と NHL の合計上限は同じ 30% ですが、個々のファンドの基準値は高く、1 つのファンドが所有できる上限は 20% です。
プライベート・エクイティの次のフロンティアは、チームに直接投資する可能性を含め、大学スポーツにあるかもしれない。これはまだ実現していないが、その主な理由は、私的な資金を受け入れることの影響について大学レベルで一般的に不安が広がっているためである。
しかし、より多くの投資家がスポーツに集まり、メジャーリーグの評価額が上昇するにつれ、利害関係者になりたい人たちは新たな事業を模索している。
プライベートエクイティ会社アベニュー・キャピタル・グループの共同創設者マーク・ラスリー氏は昨年、CNBCスポーツとのインタビューで「人々はスポーツは純粋なものだと考えている」と語った。 「ハードルは、結局のところ、誰でも一番になりたいとは思わないということです。」
— CNBC のジェシカ・ゴールデンがこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/fifa-world-cup-private-equity-sports.html",
    publishedAt: "2026-07-31T18:08:10+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 6,
  },
  {
    id: "spain-s-pm-blames-traffickers-after-60-0-69964494",
    title: "Spain's PM blames traffickers after 60,000 migrants reach Ceuta from Morocco",
    titleJa: "スペイン首相、モロッコから6万人の移民がセウタに到着後、人身売買業者を非難",
    summaryJa: "スペイン首相、モロッコから6万人の移民がセウタに到着後、人身売買業者を非難- 公開されました",
    bodyOriginal: `Spain's PM blames traffickers after 60,000 migrants reach Ceuta from Morocco
- Published
Spain's prime minister has blamed trafficking gangs after about 60,000 migrants crossed into the Spanish North African enclave of Ceuta from Morocco. At least 57 people died during the surge, according to local media.
Pedro Sánchez called the incident a "violation of Spain's territorial integrity". Italy has responded by suspending the EU's border-free Schengen arrangements with Spain.
The influx comes after Spain's Supreme Court ruled that migrants stopped at sea while trying to reach Ceuta or Melilla, another Spanish enclave, cannot be summarily returned to Morocco.
As of Friday evening, more than 48,000 people had voluntarily returned to Morocco, Spanish officials said.
One man told Reuters news agency he was going back, adding: "It's not good at all, and it's not fun either. I mean, people are dying here. I beg you, please, if you haven't come yet, don't come. Don't do it."
Ceuta on the North African coast is separated from mainland Spain by the Strait of Gibraltar. It has long been a focal point for migrants attempting to reach Europe. During the summer months there is often a big push to reach Ceuta, typically organised over social media.
Coveted by Morocco, Ceuta and another Spanish enclave Melilla have long been a flashpoint in diplomatic relations between the two countries. They form the European Union's only land borders with Africa.
Local officials had appealed to Madrid for help after a recent rise in attempted crossings, but there were chaotic scenes on Thursday as border controls apparently broke down.
Carmen Gonzalez Bermudez who was in the city to see her parents told the BBC that the past day had been "very overwhelming".
She said she saw "thousands and thousands of people in swimming costumes and all wet, just coming from the sea", adding that "I know most of them are nice people just looking for a better future for themselves. But we cannot give that to them".
Víctor Ortiz Sotomayor told the BBC he had "never seen anything like it", describing the city as "packed with immigrants, in every square and street, mainly looking for food".
"There were only a few stores open, but in the end the police advised them to close because of the overwhelming influx of people," he added.
"My friends, my family and I are all staying at home. We haven't gone outside because we're scared."
Referring to a previous surge of migrants into Ceuta, Carmen Gonzalez Bermudez said: "In 2021, we saw our police and our military doing something. Yesterday, they were in the streets, but they weren't doing nothing. So that for starters feels really scary."
Ceuta's President Juan Jesús Vivas said the arrivals amounted to around 70% of the city's population - which sits at around 83,600 according to the latest local figures. Spain's Interior Ministry told the BBC that its estimates were slightly lower, citing 50,000 arrivals since the early hours of Thursday.
Spain has now deployed its armed forces to bolster security in Ceuta and at its sister city of Melilla, where between 300 to 400 crossings were also reported overnight.
Speaking on Friday during a visit to Ceuta, Sánchez said the surge was caused by criminal networks purposefully misinterpreting the recent Supreme Court ruling.
"What has emerged from our talks with Moroccan authorities is that trafficking mafias took a self-serving interpretation of a Supreme Court ruling" which "spread like wildfire", he said.
He added that the government would look at reinforcing the border with Morocco, and that Moroccan authorities were co-operating with the return of those who had entered illegally.
Most of those entering Ceuta have been young men, although there are also women and children in the crowds and even babies. Officials estimate that at least 7,000 of those who crossed illegally into the territory in the last 24 hours are minors.
Usually, to try to enter Ceuta, migrants swim several kilometres from further up the coast. This time they appear to have been able to get close to the border fence itself with ease. At the start, some even walked along the rocks on the jetty and around the end of it, but most had to swim out and around to reach the beaches on the other side.
It's not clear where the Moroccan border guards were at this point and why the groups of migrants were not dispersed or stopped.
Morocco, which has a high unemployment rate, witnessed several Gen Z anti-government protests last year - with young people demanding better opportunities and improvements to public services.
BBC Verify has looked into migration data released by the UN, external, which reported 2,826 people had crossed into Ceuta up until 15 July this year with another 181 entering via Melilla.
The number of migrants crossing into these two territories was already high compared with recent years, which saw 994 migrants enter in 2025, 476 in 2024 and 467 in 2023.
Italy's right-wing Prime Minister Giorgia Meloni described the images from Ceuta as "shocking", writing on social media that such "uncontrolled immigration" was a security threat to Europe.
Later on Friday Italy suspended the Schengen zone agreement with Spain on free movement. Since the two countries don't have a land border this would only apply, effectively, to flights - which appears simply to mean extra checks for passengers.
The Spanish foreign minister said such remarks were "improper" for "a partner and friendly country from which we expect European solidarity and not partisan demagoguery". He also summoned the Italian ambassador to Madrid on Friday.
Czech Republic's Andrej Babiš also called for the temporary suspension of Spain's Schengen membership.
Responding on X, Sánchez said: "Solidarity and empathy are optional. Respect for European treaties and data is not."
US President Donald Trump meanwhile called the situation in Ceuta a "catastrophe" and blamed it on "weak law, bad management".
EU chief Ursula von der Leyen said the images out of Ceuta were "unacceptable" and must "stop immediately".
Finland's Interior Minister Mari Rantanen backed Meloni and said Spain had failed to protect its border, while German Chancellor Friedrich Merz demanded Morocco "take back illegal migrants immediately".
The Schengen Area is a system of open borders spanning 29 European countries that have officially abolished controls at their common borders.
Additional reporting by Tamara Kovacevic, BBC Verify, Basma El Atti, BBC Focus, Isabella Bull, BBC World Service, and Marina Costa
Related topics
- Published13 hours ago
- Published18 May 2023`,
    bodyJa: `スペイン首相、モロッコから6万人の移民がセウタに到着後、人身売買業者を非難
- 公開されました
スペインの北アフリカ飛び地であるセウタにモロッコから約6万人の移民が流入したことを受け、スペイン首相は人身売買ギャングを非難した。地元メディアによると、この急増で少なくとも57人が死亡した。
ペドロ・サンチェスはこの事件を「スペインの領土保全の侵害」と呼んだ。イタリアはこれに対抗し、EUとスペインとの国境のないシェンゲン協定を停止した。
この流入は、スペインの最高裁判所が、別のスペインの飛び地であるセウタまたはメリリャに到達しようとして海上で停止した移民を即時にモロッコに送還することはできないとの判決を下した後に起こった。
スペイン当局者によると、金曜夜の時点で４万８０００人以上が自主的にモロッコに帰国した。
ある男性はロイター通信に対し、戻るつもりだと語り、「全然良くないし、楽しくもない。つまり、ここでは人が死んでいる。お願いだから、まだ来ていないなら来ないでください。やめてください」と付け加えた。
北アフリカの海岸にあるセウタは、ジブラルタル海峡によってスペイン本土と隔てられています。ここは長い間、ヨーロッパを目指す移民たちの中心となってきました。夏の間、セウタに到達しようとする大きな動きがあり、通常はソーシャルメディア上で組織されます。
モロッコが切望するセウタともう一つのスペインの飛び地メリリャは、長い間両国間の外交関係の火種となってきた。これらは欧州連合のアフリカとの唯一の陸上国境を形成しています。
最近、国境越えの試みが増加していることを受け、地元当局はマドリードに支援を求めていたが、木曜日には国境警備が明らかに機能不全に陥り、混乱が生じた。
両親に会うために市内を訪れていたカルメン・ゴンザレス・ベルムデスさんは、この日は「とても圧倒された」とBBCに語った。
彼女は「海から上がってきたばかりの、水着を着てずぶ濡れになった何千人もの人々」を目撃したと述べ、「彼らのほとんどが、自分たちのより良い未来を探しているだけの良い人たちだと私は知っている。しかし、私たちは彼らにそれを与えることはできない」と付け加えた。
ビクトル・オルティス・ソトマヨール氏はBBCに対し、「このような光景は見たことがない」と語り、街を「あらゆる広場や通りに移民が詰めかけており、主に食べ物を探している」と描写した。
「営業している店舗はわずか数店しかなかったが、あまりの人の流入に最終的には警察が閉店を勧告した」と付け加えた。
「友達も家族も私もみんな家にいます。怖くて外に出ていません。」
カルメン・ゴンザレス・ベルムデスさんは、過去にセウタに移民が殺到したことに触れ、「2021年、私たちは警察と軍が何かをしているのを目撃した。昨日、彼らは街頭に出ていたが、何もしていなかったわけではない。だから、まずそれが本当に恐ろしいことだと感じた」と語った。
セウタのフアン・ヘスス・ビバス大統領は、到着者は市の人口の約70％に相当し、最新の現地統計によると人口は約8万3600人であると述べた。スペイン内務省はBBCに対し、木曜早朝以降の到着者数が5万人だったことを挙げ、推定値は若干少ないと語った。
スペインは現在、セウタと姉妹都市メリリャの治安を強化するために軍隊を派遣しており、そこでも一晩に300人から400人の通行人が発生したと報告されている。
サンチェス氏はセウタ訪問中の金曜日に講演し、この急増は犯罪ネットワークが最近の最高裁判所の判決を意図的に誤解したことによって引き起こされたと述べた。
同氏は、「モロッコ当局との協議で明らかになったのは、人身売買マフィアが最高裁判所の判決を利己的に解釈し」、それが「山火事のように広がった」と述べた。
同氏は、政府はモロッコとの国境の強化を検討しており、モロッコ当局は不法入国者の帰国に協力していると付け加えた。
セウタに入場する人のほとんどは若い男性だが、群衆の中には女性や子供、さらには赤ちゃんもいる。当局は、過去24時間に不法入国者のうち少なくとも7,000人が未成年者であると推定している。
通常、移民たちはセウタに入ろうと、海岸のさらに上流から数キロ泳いでいきます。今度は国境フェンスそのものに簡単に近づくことができたようだ。初めは桟橋の岩に沿って歩いたり、その端の周りを歩いたりする人もいたが、ほとんどの人は反対側のビーチに行くために泳ぎ回らなければならなかった。
この時点でモロッコの国境警備隊がどこにいたのか、なぜ移民グループが解散または阻止されなかったのかは明らかではない。
失業率が高いモロッコでは昨年、Z世代による反政府抗議活動が数回発生し、若者たちはより良い機会と公共サービスの改善を求めていた。
BBC Verifyは国連が発表した外部の移民データを調べたところ、今年7月15日までに2,826人がセウタへ入国し、さらに181人がメリリャ経由で入国したと報告した。
これら2つの領土に入国する移民の数は近年に比べてすでに多く、2025年には994人、2024年には476人、2023年には467人が入国した。
イタリアの右翼首相ジョルジア・メローニは、セウタからの映像を「衝撃的」と表現し、ソーシャルメディアに、このような「野放図な移民」はヨーロッパにとって安全保障上の脅威であると書いた。
イタリアは金曜後半、自由な移動に関するスペインとのシェンゲン圏協定を停止した。両国には陸の国境がないため、これは事実上、航空便にのみ適用されることになるが、これは単に乗客に対する追加検査を意味しているようだ。
スペイン外相は、このような発言は「党派的煽動ではなく欧州の団結を期待するパートナーかつ友好国」として「不適切」だと述べた。同氏は金曜日にもマドリードのイタリア大使を召喚した。
チェコ共和国のアンドレイ・バビシュ氏も、スペインのシェンゲン加盟国の一時停止を求めた。
Xについてサンチェス氏は、「連帯と共感はオプションだ。欧州の条約やデータの尊重は必須ではない」と述べた。
一方、ドナルド・トランプ米大統領はセウタの状況を「大惨事」と呼び、「弱い法律とずさんな管理」のせいだと非難した。
EUのウルズラ・フォン・デア・ライエン首相は、セウタから流出した画像は「容認できない」ものであり、「即時停止」すべきだと述べた。
フィンランドの内務大臣マリ・ランタネンはメローニ氏を支持し、スペインが国境を守ることに失敗したと述べ、一方ドイツのフリードリヒ・メルツ首相はモロッコに対し「不法移民を即時奪還する」よう要求した。
シェンゲン圏は、共通の国境における規制を正式に廃止したヨーロッパ 29 か国にまたがるオープンな国境システムです。
タマラ・コバセビッチ、BBC Verify、Basma El Atti、BBC Focus、Isabella Bull、BBC World Service、Marina Costa による追加レポート
関連トピック
- 13 時間前に公開
- 2023 年 5 月 18 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2kp639yx4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-31T17:03:47+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2b29/live/f8112010-8d09-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 7,
  },
  {
    id: "as-warsh-s-fed-faces-pressure-to-act-on-9852040a",
    title: "As Warsh’s Fed faces pressure to act on inflation, these indicators show it’s at its lowest in years",
    titleJa: "ウォーシュ率いるFRBはインフレ対策の圧力に直面しているが、これらの指標はインフレ率がここ数年で最低であることを示している",
    summaryJa: "6月の価格データは、コストが上昇し続けている一部の一部の品目を除いて、インフレが連邦準備理事会のインフレ目標に向かって回復傾向にあることを示した。価格の上昇と下落の両方で異常値を除外する、いわゆるトリミング平均の測定では、インフレ率が2010年代初頭以来の最低水準にあることが示された。",
    bodyOriginal: `Pricing data from June indicated that outside of some select items where costs continue to grow, inflation is trending back towards the Federal Reserve's inflation goal.
So-called trimmed mean measures, which exclude outliers in both price increases and decreases, showed inflation at its lowest since the early part of the decade.
The Dallas Fed's measure, in fact, puts the one-month annualized rate for June at just 1.4%, down a whopping 1.3 percentage points from May and at its lowest level since November 2020.
Further, the 12-month rate, which Fed policymakers watch more closely, dipped to 2.2%, down 0.2 percentage point from a month ago to a bottom not seen since July 2021.
While Fed officials are quick to stress that they don't focus on one month of any data point, the trend in the trimmed mean could get some attention, particularly in light of Chairman Kevin Warsh's intention to reexamine how the central bank views inflation and what data points it employs.
Trimmed mean data "should also now fall closer to target-consistent rates," Citigroup economist Andrew Hollenhorst said in a note.
"The fact that underlying inflation is still slowing toward target – as indicated by a broad set of indicators – is now even more relevant given Chair Warsh's suggestion that he would analyze inflationary pressure by looking across a broad range of metrics," he added. "We expect markets to price-out rate hikes in coming months on inflation data, and price-in cuts if the unemployment rate rises as we project."
How it works
The trimmed mean inflation measures essentially act like a teacher grading a test on a curve: In the case of the Dallas measure, it tosses out 24% of the lower-end price readings and 31% at the high end to come up with a better midpoint of where inflation is absent outliers.
The measure specifically uses the personal consumption expenditures price index — the Fed's primary inflation forecasting tool — results of which were released Thursday. The Commerce Department said the all-items index fell 0.1% for the month, largely on a sharp decline in fuel costs, while the core level that excludes food and energy gained 0.1%. On an annual basis, the two gauges rose a respective 3.7% and 3.3%.
Similarly, the Cleveland Fed has a "16% trimmed mean" that includes price changes below the 92nd percentile and above the 8th percentile. That measure, though, uses the consumer price index as its benchmark. For June, the trimmed CPI was at 2.63%, which, on an unrounded basis, was the lowest since May 2021.
While such measures could get more prominent placement on the Fed's dashboard under Warsh, there are a number of caveats.
For one, Lorie Logan, who as Dallas Fed president oversees its trimmed mean measure, has cautioned about reading too much into it because of compositional factors at play.
Specifically, she said her researchers have found "that a change in the mix of price increases and decreases is causing the trimmed mean to drop too many increases right now. This effect likely makes the trimmed mean lower than the true inflation trend."
Inflation skepticism
Logan, in fact, this week dissented from the Federal Open Market Committee's decision to keep its benchmark interest rate steady, preferring instead a quarter percentage point increase to address inflation that has been running above target for more than five years.
"Even after accounting for productivity gains and temporary supply shocks, inflation appears to be trending toward the mid-2's, not all the way to 2 percent, and the risks are to the upside," she said in a statement Friday.
Logan was joined in her dissent by regional Presidents Neel Kashkari of Minneapolis and Beth Hammack of Cleveland, both of whom said inflation is uncomfortably high and the Fed should act now rather than wait.
Markets this week also focused on the headline inflation numbers — and a perception that the Fed's decision not to hike could exacerbate things. Bond yields surged, particularly at the long end of the duration curve where investors try to price in future growth and inflation prospects.
Warsh himself voiced only halting confidence in the current trajectory of inflation, citing some potentially positive signs from production, but insisted that the Fed still has a lot of work to do.
"Not one of my FOMC colleagues is under any illusion," the chairman said. "We have begun a new chapter, and we understand that the five-plus years of inflation above target cannot be cured in nine weeks — or by a single month of modest price decreases."`,
    bodyJa: `6月の価格データは、コストが上昇し続けている一部の一部の品目を除いて、インフレが連邦準備理事会のインフレ目標に向かって回復傾向にあることを示した。
価格の上昇と下落の両方で異常値を除外する、いわゆるトリミング平均の測定では、インフレ率が2010年代初頭以来の最低水準にあることが示された。
実際、ダラス連銀の指標では、6月の1カ月物年率換算金利はわずか1.4％と、5月から1.3％ポイントも大幅に低下し、2020年11月以来の低水準となっている。
さらに、FRB政策当局者がより注視している12カ月物金利は2.2％まで低下し、前月比0.2％ポイント低下し、2021年7月以来の底となった。
FRB当局者らは、どのデータポイントの1カ月にも焦点を当てていないことをすぐに強調しているが、特に中央銀行がインフレをどのように見ているか、どのデータポイントを採用しているかを再検討するというケビン・ウォーシュ議長の意図を考慮すると、トリミング平均の動向はある程度の注目を集める可能性がある。
シティグループのエコノミスト、アンドリュー・ホレンホースト氏はメモの中で、トリミングされた平均データも「目標と一致する金利に近づくはずだ」と述べた。
同氏は「広範な指標が示すように、基調インフレが依然として目標に向けて減速しているという事実は、幅広い指標に目を向けてインフレ圧力を分析するとのウォーシュ議長の示唆を考慮すると、現在はさらに関連性が高まっている」と付け加えた。 「市場はインフレ統計を踏まえて今後数カ月間の利上げを織り込み、失業率がわれわれの予想通りに上昇すれば利下げを織り込むと予想している。」
仕組み
トリミングされた平均インフレ指標は、基本的に、曲線に基づいてテストを採点する教師のような役割を果たします。ダラスの指標の場合、インフレが異常値のないより適切な中間点を割り出すために、下限価格の測定値の 24% と上限価格の 31% が除外されます。
この指標は特に個人消費支出価格指数（FRBの主要なインフレ予測ツール）を利用しており、その結果は木曜日に発表された。商務省によると、同月の総合指数は主に燃料費の急落により０．１％下落したが、食品とエネルギーを除いたコア水準は０．１％上昇した。年間ベースでは、2 つのゲージはそれぞれ 3.7% と 3.3% 上昇しました。
同様に、クリーブランド連銀は、92パーセンタイル以下と8パーセンタイル以上の価格変動を含む「16％トリミング平均」を定めている。ただし、この尺度では消費者物価指数がベンチマークとして使用されます。 6月の調整後CPIは2.63％となり、四捨五入せずに換算すると2021年5月以来の低水準となった。
こうした措置はウォーシュ氏の下でFRBのダッシュボードでより目立つ位置に置かれる可能性があるが、多くの注意点がある。
その一例として、ダラス連銀総裁としてその調整平均措置を監督しているローリー・ローガン氏は、構成要素が関係しているため、深読みしすぎないよう警告している。
具体的には、彼女の研究者らは、「価格の上昇と下落の組み合わせの変化により、現在、調整後の平均値が過度に上昇しすぎていることを発見した。この影響により、調整後の平均値が真のインフレ傾向よりも低くなっている可能性が高い」と述べた。
インフレ懐疑論
実際、ローガン氏は今週、基準金利を据え置くという連邦公開市場委員会の決定に反対し、代わりに５年以上目標を上回っているインフレに対処するために４分の１ポイントの引き上げを希望した。
同氏は金曜の声明で「生産性の向上や一時的な供給ショックを考慮しても、インフレ率は２％までではなく２％台半ばに向かう傾向にあるようで、リスクは上向きだ」と述べた。
ローガン氏の反対意見には、ミネアポリスのニール・カシュカリ氏とクリーブランドのベス・ハンマック地方総裁も同調し、インフレ率は不快なほど高く、FRBは待つのではなく今行動すべきだと述べた。
今週の市場はまた、主要なインフレ統計と、FRBの利上げ見送りの決定が事態を悪化させる可能性があるとの認識に注目した。債券利回りは、特に投資家が将来の成長とインフレ見通しを織り込もうとするデュレーション曲線の長い端で急上昇した。
ウォーシュ総裁自身は、生産活動から潜在的に前向きな兆しが見えていることを挙げて、現在のインフレ軌道への信頼感を打ち消すとだけ表明したが、FRBにはまだやるべきことがたくさんあると主張した。
議長は「FOMCの同僚の中で幻想を抱いている人は一人もいない」と述べた。 「われわれは新たな章をスタートした。５年以上にわたって目標を上回ったインフレは９週間で、あるいは１カ月の小幅な物価下落では回復できないことを理解している」と語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/these-fed-alternative-indicators-show-inflation-is-at-lowest-in-years.html",
    publishedAt: "2026-07-31T16:51:30+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "budget-to-be-held-in-october-healey-anno-bb793e88",
    title: "Budget to be held in October, Healey announces",
    titleJa: "予算編成は10月に決定、ヒーリーが発表",
    summaryJa: "予算編成は10月に決定、ヒーリーが発表- 公開されました",
    bodyOriginal: `Budget to be held in October, Healey announces
- Published
Chancellor John Healey has announced the date of his first Budget will be Wednesday, 28 October.
In a video message, he said: "This will be a Budget that moves money and power out of Westminster, and into every postcode around Britain.
"It will be built on fiscal discipline. It will meet our fiscal rules. It'll give businesses and families some of the stability they need to plan for the future. Now, let's get on with the job."
Prime Minister Andy Burnham has said his government will stick to Labour's fiscal rules on spending and borrowing as well as the party's 2024 manifesto pledges not to increase income tax, VAT or national insurance contributions.
Burnham also said he will honour the fiscal rules imposed by Healey's predecessor Rachel Reeves, which include a pledge to balance day-to-day spending with tax revenues by the end of the decade.
An influential think tank said earlier this week that the prime minister only has a small margin of error to do this, and that Healey may have to cut spending or raise taxes to meet Burnham's policy priorities such as such as extra defence spending and better social care.
Healey was Defence Secretary under Keir Starmer, but resigned after a row over defence spending commitments - saying he was "certain" that Britain shouldl lift its spending to 3% by 2030.
But questioned about funding on Thursday, Burnham's Defence Secretary Wes Streeting repeatedly refused to commit to that target.
"Before we set out specific spending commitments, we will also set out how we pay for them at the same time," he said.
Chris Mason: New chancellor faces tough spending choices
- Published21 July
Burnham has big ideas - but what will they cost?
- Published20 July
Reeves left a £22bn buffer in her last budget, but persistent inflation due to the Iran war could have eroded it.
Burnham has also announced a host of new cost-of-living policies since taking office earlier this month, including scrapping of VAT from domestic electricity bills.
On Friday, the PM said he would give all mayors of city regions in England a share of income tax revenue for the first time, as part of his efforts to move power out of London.
Reeves had previously said that regional mayors could be given control of some tax revenue to spend on their local priorities.
Labour pledged to devolve more powers to local councils and mayors as part of its 2024 election manifesto, in areas such as housing and transport.
More details of Burnham's plan are expected to be announced in the Budget, but the government said the rate of income tax will not change as a direct result of the reforms.
AJ Bell public policy director Tom Selby said Healey "doesn't have the luxury of pointing the finger of blame at the last administration".
"Healey will likely spend a chunk of his time leafing through the thesaurus looking for new ways to rephrase the 'tough choices' message of his predecessor," he said.
Shadow chancellor Sir Mel Stride said the announcement of the budget date meant "89 more days of unfunded spending commitments and damaging tax speculation until we get some details".
"89 more days for Brits to wait before they know how much their taxes are going to go up to fund Burnham's spending addiction", he said.
Sign up for our Politics Essential newsletter to read top political analysis, gain insight from across the UK and stay up to speed with the big moments. It'll be delivered straight to your inbox every weekday.
Related topics
- Published27 April`,
    bodyJa: `予算編成は10月に決定、ヒーリーが発表
- 公開されました
ジョン・ヒーリー財務大臣は、最初の予算案の提出日が10月28日水曜日になると発表した。
同氏はビデオメッセージで、「これはウェストミンスターから資金と権力を英国中のあらゆる郵便番号に移す予算になるだろう。
「それは財政規律に基づいて構築されるでしょう。それは財政規則を満たします。これにより、企業や家族は将来の計画に必要な安定を得ることができます。さあ、仕事を続けましょう。」
アンディ・バーナム首相は、政府は支出と借入に関する労働党の財政規則と、所得税、付加価値税、国民保険料を増額しないという党の2024年のマニフェストの公約を堅持すると述べた。
バーナム氏はまた、ヒーリーの前任者レイチェル・リーブス氏が課した財政規則を遵守すると述べた。その中には、10年代末までに日々の支出と税収のバランスを取るという約束も含まれている。
影響力のあるシンクタンクは今週初め、首相がこれを行うにはわずかな誤差しかなく、追加の国防費や社会保障の充実といったバーナム首相の政策優先事項を満たすためにヒーリー首相は歳出削減か増税が必要になる可能性があると述べた。
ヒーリー氏はキア・スターマー政権で国防長官を務めていたが、国防費の公約をめぐる口論の末に辞任し、英国が2030年までに支出を3％に引き上げるべきであると「確信している」と述べた。
しかし、木曜日に資金提供について質問されたバーナムのウェス・ストリーティング国防長官は、その目標へのコミットメントを繰り返し拒否した。
同氏は「具体的な支出約束を定める前に、その支払い方法も同時に定めるつもりだ」と述べた。
クリス・メイソン：新首相は厳しい支出選択に直面している
- 7 月 21 日発行
バーナムには大きなアイデアがありますが、それにはどれくらいの費用がかかるのでしょうか?
- 7 月 20 日発行
リーブス氏は前回の予算案に220億ポンドのバッファを残したが、イラン戦争によるインフレが止まらず、それが侵食される可能性もあった。
バーナム氏はまた、今月初めの就任以来、国内の電気料金から付加価値税を廃止するなど、多くの新たな生活費政策を発表した。
金曜日、首相はロンドンから権力を移転する取り組みの一環として、イングランドのすべての都市地域の首長に初めて所得税収入の一部を与えると発表した。
リーブス氏は以前、地方首長が地元の優先事項に支出するために税収の一部を管理できるようになる可能性があると述べていた。
労働党は２０２４年の選挙マニフェストの一環として、住宅や交通などの分野で地方議会や市長にさらなる権限を委譲すると約束した。
バーナム計画の詳細は予算案で発表される予定だが、政府は改革の直接の結果として所得税の税率が変更されることはないと述べた。
AJベルの公共政策部長トム・セルビー氏は、ヒーリー氏には「前政権に責任の矛先を向ける余裕はない」と語った。
「ヒーリー氏はおそらく、前任者の『厳しい選択』というメッセージを言い換える新たな方法を探すために、シソーラスをめくることにかなりの時間を費やすことになるだろう」と同氏は語った。
影の財務大臣メル・ストライド卿は、予算案日程の発表は「詳細が判明するまで、あと89日間、財源のない支出が約束され、税金投機に悪影響を与えることになる」と述べた。
同氏は、「バーナム氏の浪費癖を解消するために国民の税金がどれだけ上がるのかを英国人が知るまで、あと89日待つ必要がある」と述べた。
Politics Essential ニュースレターに登録して、トップの政治分析を読み、英国全土からの洞察を得て、重要な瞬間を常に把握してください。平日は毎日あなたの受信箱に直接配信されます。
関連トピック
- 4 月 27 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cjd4yz35x8go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-31T15:58:42+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f911/live/99ae70c0-8ced-11f1-a573-93159e2b55da.jpg",
    readTime: 4,
  },
  {
    id: "democrats-demand-information-on-trump-an-c9ceb772",
    title: "Democrats demand information on Trump and Lutnick families' ties to critical mineral deals",
    titleJa: "民主党はトランプ家とラトニック家と重要な鉱物取引との関係に関する情報を要求",
    summaryJa: "民主党上院議員らは金曜日、ドナルド・トランプ大統領やハワード・ラトニック商務長官の家族に利益をもたらす可能性のある連邦政府との十数件の重要な鉱物取引に関する情報を要求した。上院議員らは、6月のニューヨーク・タイムズ紙の調査に言及し、連邦政府はトランプ家やラトニック家と経済的つながりを持つ少なくとも14社との取引に取り組んでいると述べた。同紙によると、トランプ政権はこれらの企業に89億ドル以上の資金を提供したか、提供を検討しているという。",
    bodyOriginal: `Democratic senators on Friday demanded information on more than a dozen critical mineral deals with federal government that potentially benefit the families of President Donald Trump or Commerce Secretary Howard Lutnick.
The federal government is working on deals with at least 14 companies that have financial ties to the Trump or Lutnick families, the senators said, pointing to a New York Times investigation in June. The Trump administration has provided or is considering providing more than $8.9 billion in funding to the companies, according to the Times.
The senators asked the Departments of Commerce, Defense, Energy, Interior and the Export-Import Bank of the United States to preserve all records and communications related to those deals.
"It is especially important that federal investments meant to secure vital national security and economic interests like critical minerals are based on the merits, and that decisions to spend taxpayer dollars to secure these resources are made free of conflicts of interest," Senators Richard Blumenthal of Connecticut, Adam Schiff of California, and Elizabeth Warren of Massachusetts said in a letter to the agencies.
"The circumstances regarding these deals suggest that those goals might not be at the forefront of the Administration's considerations regarding these transactions," the senators said.
Cantor Fitzgerald, the financial firm run by Lutnick's sons, has frequently served as an advisor, underwriter, or placement agent for the companies, according to the Times.
In a separate letter, the senators demanded information about White House involvement in the Pentagon's selection of the startup Vulcan Elements for a $620 million loan, citing a ProPublica investigation in May. Donald Trump Jr.'s financial firm 1789 Capital invested in Vulcan prior to the deal.
"These reports raise grave ethical and public safety concerns and the specter that the Pentagon is corruptly prioritizing funding for critical defense components based on ties to the Trump family," the senators told David Lorch, director of the Pentagon's Office of Strategic Capital.
The White House, in a response to a request for comment, said "the only special interest guiding the Trump administration's decision-making is the best interest of the American people."
"Securing and reshoring America's critical supply chains has been a top priority for President Trump, and Secretary Lutnick along with the rest of the Administration continue to take historic action to safeguard America's national and economic security," White House spokesman Kush Desai said.
The companies named in the senators' letter to the federal departments are:
- USA Rare Earth
- Kaz Resources
- Perpetua Resources
- ASP Isotopes
- Critical Metals
- Vulcan Elements
- The Metals Company
- Trilogy Metals
- American Ocean Minerals
- Guardian Metal Resources
- Titan Mining
- Westwater Resources
- Reelement/American Resources Corp.
- Energy Fuels`,
    bodyJa: `民主党上院議員らは金曜日、ドナルド・トランプ大統領やハワード・ラトニック商務長官の家族に利益をもたらす可能性のある連邦政府との十数件の重要な鉱物取引に関する情報を要求した。
上院議員らは、6月のニューヨーク・タイムズ紙の調査に言及し、連邦政府はトランプ家やラトニック家と経済的つながりを持つ少なくとも14社との取引に取り組んでいると述べた。同紙によると、トランプ政権はこれらの企業に89億ドル以上の資金を提供したか、提供を検討しているという。
上院議員らは商務省、国防省、エネルギー省、内務省、米国輸出入銀行に対し、これらの取引に関連するすべての記録と通信を保存するよう求めた。
コネチカット州のリチャード・ブルーメンタール上院議員、カリフォルニア州のアダム・シフ上院議員、マサチューセッツ州のエリザベス・ウォーレン上院議員は、「極めて重要な国家安全保障と重要な鉱物のような経済的利益を確保することを目的とした連邦政府の投資がメリットに基づいており、これらの資源を確保するために納税者の資金を投入する決定が利益相反なしに行われることが特に重要である」と各政府機関に宛てた書簡で述べた。
「これらの取引に関する状況は、これらの目標がこれらの取引に関する政権の検討の最優先事項ではない可能性を示唆している」と上院議員らは述べた。
同紙によると、ラトニック氏の息子らが経営する金融会社カンター・フィッツジェラルド氏は、頻繁に両社の顧問、引受会社、斡旋代理店を務めているという。
上院議員らは別の書簡で、５月のプロパブリカの調査を引用し、国防総省による新興企業バルカン・エレメンツの６億２０００万ドル融資選定へのホワイトハウスの関与に関する情報を要求した。ドナルド・トランプ・ジュニア氏の金融会社1789キャピタルは、取引に先立ちバルカンに投資していた。
上院議員らは国防総省戦略資本局のデイビッド・ローチ局長に対し、「これらの報道は、倫理的および公共の安全に対する重大な懸念と、国防総省がトランプ家との関係に基づいて重要な防衛コンポーネントへの資金提供を不正に優先しているのではないかという疑念を引き起こす」と語った。
ホワイトハウスはコメント要請に応じ、「トランプ政権の意思決定を導く唯一の特別な利益は米国民の最善の利益だ」と述べた。
ホワイトハウスのクシュ・デサイ報道官は、「米国の重要なサプライチェーンの確保と再拠点化はトランプ大統領にとっての最優先事項であり、ラトニック長官は残りの政権メンバーとともに米国の国家と経済の安全を守るために歴史的な行動を取り続ける」と述べた。
上院議員が連邦当局に宛てた書簡で名指しされた企業は以下の通り。
- 米国レアアース
- カズリソース
- 永久リソース
- ASP同位体
- 重要な金属
- バルカン要素
- 金属会社
- トリロジーメタル
- アメリカの海洋鉱物
- ガーディアンメタルリソース
- タイタン採掘
- ウェストウォーターリソース
- リーエレメント/American Resources Corp.
- エネルギー燃料`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/senate-democrats-trump-lutnick-critical-mineral-deals.html",
    publishedAt: "2026-07-31T14:21:23+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "new-york-sues-kalshi-says-prediction-mar-f1252857",
    title: "New York sues Kalshi, says prediction market is running 'illegal gambling operation'",
    titleJa: "ニューヨーク州がカルシ氏を告訴、予測市場は「違法なギャンブル運営」を行っていると主張",
    summaryJa: "ニューヨーク州は金曜日、同社が「違法な賭博事業」を行っているとして、予測市場プラットフォームのカルシを告訴した。マンハッタン州裁判所に起こされた訴訟では、カルシがニューヨーク州賭博委員会に登録されていないため、州憲法と法律を無視してギャンブル事業として賭博を受け入れていると主張している。",
    bodyOriginal: `New York state sued prediction market platform Kalshi on Friday, alleging that the company is running an "illegal gambling operation."
In a case filed in a Manhattan state court, the lawsuit claims that Kalshi accepts wagers as a gambling business in disregard for the state's constitution and laws by not being registered with the New York State Gaming Commission.
"No matter what they call themselves, prediction markets like Kalshi are gambling platforms, plain and simple," said New York Attorney General Letitia James in a press release announcing the lawsuit. "By ignoring our laws, Kalshi is running an illegal operation and harming New Yorkers in the process."
Governor Kathy Hochul in the press release said the state is taking the action to stop what it views as illegal behavior and bring the company into compliance with New York law. The lawsuit is seeking a permanent injunction against Kalshi.
Kalshi, which has its headquarters offices in New York City, expressed disappointment with the decision by the state.
"It's sad to see this type of political theater from the leadership in our own state," a Kalshi spokesperson said in a statement. "States can't just shut down a federally licensed exchange… We love New York, we love New Yorkers, and New Yorkers love our product."
The suit by the state is also seeking a total restitution to users who have placed trades on the platform, a $100,000 penalty for each attempt to offer sports wagering, and another penalty three times the amount the company has gained while allegedly operating in violation of New York law.
Kalshi originally sued New York state in October after the state's Gaming Commission sent a cease and desist letter to the company. Earlier this month, a judge for the Southern District of New York denied the company's request for a preliminary injunction and temporary restraining order against the commission.
The same judge denied a request by Kalshi earlier this month for an injunction pending an appeal.
The Commodity Futures Trading Commission, which sees itself as the federal regulator for prediction markets, filed for a temporary restraining order against enforcement actions by New York just before the state's lawsuit was announced. That comes after the CFTC in April sued the state, requesting a permanent injunction from enforcing its state laws on commission-registered platforms.
States across the country are locked in battles with the federal government and platforms over prediction markets, which have seen their volumes surge as their sports-related event contracts have become popular with retail traders.
Kalshi — along with other prediction market platforms — and the CFTC believe all event contracts are swaps, and thus are exclusively regulated by the commission. However, states across the country believe the sports offerings are equivalent to sports betting, which is regulated by them.
44 state attorneys General on Monday sent a letter to the CFTC, claiming that the commission has no right to regulate sports-related event contracts, as part of a public comment period for the agency's first draft of regulations on prediction markets.
While New York cited Kalshi's sports offering as the reason for its lawsuit, the state also went further. It claims in the lawsuit that the company's elections, culture and some other event contract offerings also put it in contradiction with the state's laws.
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `ニューヨーク州は金曜日、同社が「違法な賭博事業」を行っているとして、予測市場プラットフォームのカルシを告訴した。
マンハッタン州裁判所に起こされた訴訟では、カルシがニューヨーク州賭博委員会に登録されていないため、州憲法と法律を無視してギャンブル事業として賭博を受け入れていると主張している。
ニューヨーク州司法長官レティシア・ジェームスは、訴訟を発表したプレスリリースの中で、「自らを何と呼んでも、カルシのような予測市場は、単純明快にギャンブルのプラットフォームである」と述べた。 「私たちの法律を無視することで、カルシは違法な作戦を実行し、その過程でニューヨーカーに損害を与えています。」
キャシー・ホチョル知事はプレスリリースの中で、州は違法行為とみなす行為を阻止し、同社をニューヨーク州法に準拠させるために措置を講じていると述べた。訴訟ではカルシに対する永久差し止め命令を求めている。
ニューヨーク市に本社を置くカルシは、州の決定に失望を表明した。
カルシの広報担当者は声明で、「我が国の指導部によるこの種の政治劇を見るのは悲しいことだ」と述べた。 「州は連邦認可を受けた取引所を簡単に閉鎖することはできません…私たちはニューヨークを愛しています、ニューヨーカーを愛しています、そしてニューヨーカーは私たちの製品を愛しています。」
同州による訴訟では、プラットフォーム上で取引を行ったユーザーへの全額賠償、スポーツ賭博の提供を試みるたびに10万ドルの罰金、さらにニューヨーク州法に違反して運営していた疑いで同社が得た額の3倍の罰金も求められている。
カルシはもともと、州ゲーミング委員会が同社に停止措置の書簡を送ったことを受けて、10月にニューヨーク州を訴えた。今月初め、ニューヨーク州南部地区の判事は、委員会に対する仮差止命令と一時的差し止め命令を求める同社の請求を却下した。
同判事は今月初め、控訴中のカルシ氏による差し止め命令の請求を却下した。
自らを予測市場の連邦規制当局とみなしている商品先物取引委員会は、州の訴訟が発表される直前に、ニューヨーク州による強制措置に対する一時的差し止め命令を申請した。これは、CFTCが4月に州を訴え、委員会に登録されたプラットフォームに対する州法の執行に対する恒久的な差し止めを求めたことを受けてのことだ。
全米の州は予測市場をめぐって連邦政府やプラットフォームとの争いに巻き込まれており、スポーツ関連のイベント契約が小売トレーダーの間で人気となり、取引量が急増している。
カルシは、他の予測市場プラットフォームと同様に、すべてのイベント契約はスワップであり、したがって委員会によって独占的に規制されていると考えています。しかし、全国の州は、スポーツの提供が、州によって規制されているスポーツ賭博と同等であると考えています。
月曜日、44の州司法長官はCFTCに書簡を送り、同委員会にはスポーツ関連のイベント契約を規制する権利がないと主張し、予想市場に関する同局の規制の最初の草案に対するパブリックコメント期間の一環として主張した。
ニューヨーク州は訴訟の理由としてカルシのスポーツ提供を挙げたが、同州はさらに踏み込んでいる。同社は訴訟の中で、同社が提供する選挙、文化、その他のイベント契約も州法に違反していると主張している。
開示: CNBC とカルシには、顧客の獲得と少数出資を含む商業関係があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/new-york-sues-kalshi-claims-it-is-illegal-gambling-operation.html",
    publishedAt: "2026-07-31T14:19:53+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "fed-officials-who-voted-to-hike-rates-sa-80d7bc06",
    title: "Fed officials who voted to hike rates say action is needed now against inflation",
    titleJa: "利上げに賛成票を投じたFRB当局者らはインフレに対して今こそ行動が必要だと語る",
    summaryJa: "今週金利据え置きの決定に反対票を投じたFRB当局者らは金曜日、インフレを阻止する手段として今すぐ利上げを行うことを支持すると述べた。クリーブランド連銀のベス・ハンマック総裁は声明で、「私の見解では、今こそ（連邦公開市場委員会が）ＰＣＥインフレ率の２％目標への復帰を加速し、米国民への物価安定へのコミットメントを果たせるよう行動すべき時だ」と述べた。 「高インフレが長く続くほど、インフレを戻すのは難しくなり、費用がかかる可能性がある。」",
    bodyOriginal: `Federal Reserve officials who voted this week against the decision to hold interest rates steady said Friday they favor hiking now as a way to stave off inflation.
"In my view, now is the time for the [Federal Open Market Committee] to act to speed the return of PCE inflation to our 2 percent objective and deliver on our commitment to price stability for the American people," Cleveland Fed President Beth Hammack said in a statement. "The longer that high inflation persists, the more challenging and costly it can be to bring it back down."
Similarly, Minneapolis Fed President Neel Kashkari said he believes small hikes now can prevent the need for larger moves later.
"In my view, a potential series of small policy moves would be better than waiting and eventually concluding that even bolder actions were necessary," he said.
Kashkari and Hammack joined Dallas Fed President Lorie Logan in dissenting against holding the Fed's key overnight borrowing rate in a range between 3.5%-3.75%. The other nine voting members of the FOMC voted in favor of keeping the rate steady, where it has been all year following a series of three cuts in the latter part of 2025.
Inflation has held above the Fed's 2% target for more than five years, spiking again this war following the Iran war and the impact of President Donald Trump's tariffs.
Though price increases eased in June as Middle East tensions briefly eased, energy costs again have risen and generated fears that the Fed will have to tighten.
Though he voted in favor of the hold, Fed Chairman Kevin Warsh said he remains resolute in getting inflation back to target.
"We have begun a new chapter, and we understand that the five-plus years of inflation above target cannot be cured in nine weeks — or by a single month of modest price decreases," he said.
However, Hammack said she is "not confident it will return to our objective on its own."
"Supply-side factors, including energy prices, have boosted inflation this year, but I see inflationary pressures coming from the demand side of the economy, as well," she added.
Hammack said her constituents in the Cleveland area have been describing "pricing pressures as broadening rather than fading, and consumers are expressing despair over persistently higher prices."
For his part, Kashkari's comments harken back to both the 1970s period of high inflation and the more recent episodes in which Fed officials initially dismissed the flare-up as "transitory" and brought on up issues related to the Covid pandemic.
"Economic theory argues that monetary policy is the right tool to address demand-driven inflation but faces greater trade-offs when dealing with supply shocks," he said, adding, "I increasingly believe that monetary policy does have an important role to play in addressing a series of successive supply shocks that might lead to entrenched higher inflation."
Logan is expected to release a statement explaining her vote later Friday morning.`,
    bodyJa: `今週金利据え置きの決定に反対票を投じたFRB当局者らは金曜日、インフレを阻止する手段として今すぐ利上げを行うことを支持すると述べた。
クリーブランド連銀のベス・ハンマック総裁は声明で、「私の見解では、今こそ（連邦公開市場委員会が）ＰＣＥインフレ率の２％目標への復帰を加速し、米国民への物価安定へのコミットメントを果たせるよう行動すべき時だ」と述べた。 「高インフレが長く続くほど、インフレを戻すのは難しくなり、費用がかかる可能性がある。」
同様に、ミネアポリス地区連銀のニール・カシュカリ総裁も、今は小幅な利上げを行えば、後に大規模な利上げが必要になるのを防ぐことができるとの考えを示した。
同氏は「私の考えでは、待って最終的にはさらに大胆な行動が必要だと結論付けるよりも、一連の小さな政策の動きの可能性がより良いだろう」と述べた。
カシュカリ氏とハマック氏はダラス連銀のローリー・ローガン総裁に加わり、連銀の主要翌日物借入金利を３．５─３．７５％の範囲に維持することに反対した。 FOMCの他の投票権を持つメンバー9人は金利の据え置きに賛成票を投じ、2025年後半に3回連続で利下げが行われた後、年間を通じて据え置きが続いている。
インフレ率は5年以上FRBの目標である2％を上回っており、イラン戦争とドナルド・トランプ大統領の関税の影響を受けてこの戦争が再び激化している。
中東の緊張が一時的に緩和されたため、6月には物価上昇が鈍化したが、エネルギーコストが再び上昇し、FRBが引き締めを必要とするのではないかとの懸念が生じている。
FRBのケビン・ウォーシュ議長は据え置きに賛成票を投じたものの、インフレ率を目標に戻すことに引き続き断固として取り組んでいると述べた。
同氏は「われわれは新たな章を始めた。５年以上にわたって目標を上回ったインフレは９週間では、あるいは１カ月の小幅な物価下落では回復できないことを理解している」と述べた。
しかし、ハマック氏は「それが自然に私たちの目的に戻るかどうかは自信がない」と語った。
同氏は「今年はエネルギー価格など供給側の要因がインフレを押し上げたが、経済の需要側からもインフレ圧力が生じていると見ている」と付け加えた。
ハマック氏は、クリーブランド地域の有権者が「価格圧力は弱まるどころか拡大しており、消費者は高止まりする価格に絶望を表明している」と述べていると述べた。
カシュカリ氏としては、このコメントは1970年代の高インフレ時代と、FRB当局者が当初インフレの激化を「一時的」と軽視し、新型コロナウイルスのパンデミックに関連した問題を持ち出した最近のエピソードの両方を思い起こさせるものだ。
同氏は「経済理論では、金融政策は需要主導のインフレに対処する適切な手段であると主張されているが、供給ショックに対処する際にはより大きなトレードオフに直面する」とし、「インフレ高止まりにつながる可能性のある一連の相次ぐ供給ショックに対処する上で金融政策が重要な役割を果たすとの考えがますます高まっている」と付け加えた。
ローガン氏は金曜日午前中に自身の投票について説明する声明を発表する予定だ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/fed-officials-who-voted-to-hike-rates-say-action-is-needed-now-against-inflation.html",
    publishedAt: "2026-07-31T14:08:08+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "gm-to-launch-its-own-in-vehicle-ai-syste-6a910cf0",
    title: "GM to launch its own in-vehicle AI system later this year",
    titleJa: "GM、今年後半に独自の車載AIシステムを発売へ",
    summaryJa: "デトロイト – ゼネラルモーターズは、顧客に合わせてカスタマイズされた独自の車載人工知能システムを今年後半に発売する予定です。音声およびAI/機械学習の製品管理担当GMディレクターのアンナ・サントス氏によると、新しいGM AIアシスタントは、最近発売されたGoogleのGemini AIアシスタントよりも車両とその機能およびテレマティクス情報がより統合されることが期待されているという。",
    bodyOriginal: `DETROIT – General Motors plans to launch its own in-vehicle artificial intelligence system that's better tailored for its customers later this year.
The new GM AI assistant is expected to be more integrated with the vehicle as well as its capabilities and telematics information than the company's recently launched Gemini AI assistant from Google, according to Anna Santos, GM director of product management of voice and AI/machine learning.
"Later this year, we'll be launching a more deeply integrated native AI assistant that combines conversational AI with GM vehicle knowledge and OnStar intelligence to create those capabilities that go beyond what a general purpose assistant can do," she told CNBC.
GM last year announced the Gemini AI bot would launch this year in millions of 2022 model-year vehicles and newer, followed by a GM AI assist, but did not provide additional details on the technology.
Santos said the new GM assistant, which she declined to disclose a name for, will be able to better "understand the vehicle, the drive and our customers' needs, and make everyday ownership simpler."
With Gemini, customers can speak naturally without memorizing commands or repeating context. It also is beginning to offer "live sessions" in which the bot will speak with a like a normal conversation or play games like trivia or 20 questions. It also can control some aspects of GM vehicles, such as temperature and radio controls, but in general operates like it would through a phone.
"This is the beginning of a broader AI journey for us," Santos said. "There's a limit to what an AI that's just sort of sitting at the top level of the vehicle can do."
The Detroit automaker is working with an unnamed large language model provider on its technology to assist GM and its owners with predictive maintenance, vehicle telemetry and other more auto-focused features.
That also could include commands such as "kids setting" that would tailor music, seats, heating/cooling and door lock controls for children.
"It's data that's going to be proprietary to GM, and our goal is to make sure that we're bringing the right technology forward to enable us to build the deep vehicle expertise that we want to be able to bring to the AI assistant," Santos said.`,
    bodyJa: `デトロイト – ゼネラルモーターズは、顧客に合わせてカスタマイズされた独自の車載人工知能システムを今年後半に発売する予定です。
音声およびAI/機械学習の製品管理担当GMディレクターのアンナ・サントス氏によると、新しいGM AIアシスタントは、最近発売されたGoogleのGemini AIアシスタントよりも車両とその機能およびテレマティクス情報がより統合されることが期待されているという。
「今年後半には、会話型AIとGM車両の知識およびOnStarインテリジェンスを組み合わせて、汎用アシスタントの機能を超える機能を生み出す、より深く統合されたネイティブAIアシスタントを発売する予定です」と彼女はCNBCに語った。
GMは昨年、Gemini AIボットが2022年モデル以降の数百万台の車両に今年導入され、続いてGM AIアシストが導入されると発表したが、この技術に関する追加の詳細は明らかにしなかった。
サントス氏は、名前の公表を拒否したが、新しいGMアシスタントは「車両、運転、顧客のニーズをよりよく理解し、日常の所有をよりシンプルにする」ことができると述べた。
Gemini を使用すると、顧客はコマンドを覚えたり、文脈を繰り返したりすることなく、自然に話すことができます。また、ボットが通常の会話のように話したり、トリビアや 20 の質問などのゲームをしたりする「ライブ セッション」の提供も開始されています。また、温度や無線制御など、GM 車両の一部の要素を制御することもできますが、一般的には電話を介して行うのと同じように動作します。
「これは私たちにとって、より広範なAIの旅の始まりです」とサントス氏は語った。 「自動車の最上位に位置するような AI ができることには限界があります。」
デトロイトの自動車メーカーは、予知保全、車両遠隔測定、およびその他のより自動に焦点を当てた機能で GM とそのオーナーを支援するテクノロジーに関して、無名の大規模言語モデル プロバイダーと協力しています。
これには、音楽、座席、冷暖房、ドアロックの制御を子供向けに調整する「キッズ設定」などのコマンドも含まれる可能性がある。
「これはGMの専有となるデータであり、私たちの目標は、AIアシスタントに提供できるようにしたい深い車両専門知識を構築できるように、適切な技術を確実に導入することです」とサントス氏は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/gm-in-vehicle-ai-system.html",
    publishedAt: "2026-07-31T13:39:28+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "dwindling-cash-and-soaring-memory-costs-0aafbaf4",
    title: "Dwindling cash and soaring memory costs: Tech's AI buildout has ballooning price tag",
    titleJa: "現金の減少とメモリコストの高騰: ハイテク企業の AI 構築の価格は高騰",
    summaryJa: "人工知能ブームが始まってからほぼ 4 年が経ちますが、世界最大のテクノロジー企業は依然として将来について壮大な約束をしています。問題は、彼らがその過程で現金を使い果たしてしまっていることだ。ゴールドマン・サックスによると、メガキャップ企業のAI支出は今年7,650億ドルに達し、2027年には1兆2,000億ドル近くまで増加すると予測されている。アマゾンは木曜日、今年の設備投資予想を２２００億ドルに引き上げ、ハイパースケーラー４社の中で最高額となった。",
    bodyOriginal: `Almost four years into the artificial intelligence boom, the world's biggest tech companies are still making grand promises about the future. The problem is, they're burning through their cash in the process.
AI spending among the megacaps is projected to reach $765 billion this year, before rising to nearly $1.2 trillion in 2027, according to Goldman Sachs. Amazon boosted its capital spending forecast for the year on Thursday to $220 billion, the highest among the four hyperscalers.
Amazon also reported negative free cash flow for the trailing 12 months of $7.6 billion, a day after Meta disclosed a 91% drop in cash generation from a year earlier. Last week, Alphabet said cash flow turned negative for the first time on record, a stunning development for one of the most profitable companies on the planet.
Alphabet finance chief Anat Ashkenazi told analysts on the earnings call that free cash flow will remain under pressure as the company seizes on the "AI opportunity."
With tech earnings season largely wrapping up this week — Nvidia is set to report on Aug. 26 — it's become readily apparent that AI investments are distorting balance sheets, even as industry leaders continue to tout the future benefits of their mammoth bets on new data centers, and the chips and systems that populate them.
One big reason that costs are rising more than previously expected is the memory crunch, caused by insatiable demand for AI processors that rely on memory supplied by a small set of vendors.
Tesla CEO Elon Musk described memory pricing as "insane" on the automaker's earnings call last week, and Amazon CEO Andy Jassy said the "inflated price" of memory chips drove his company's capex guidance higher.
Apple, which is spending far less than its Big Tech peers, is particularly susceptible to the memory crisis because the technology is a key piece of every consumer device. Apple has already raised prices on Macs and iPads, and many analysts expect iPhone price hikes later this year.
On Thursday, the company issued a weaker-than-expected forecast due to what CEO Tim Cook called "supply constraints." It's not a problem he expects to ease up this year.
"If you look beyond September, we see the market pricing for memory continuing to increase, which could drive an increasing impact on our business," Cook, who's stepping down as CEO on Sept. 1, said on the earnings call. "And we're continuing to evaluate this."
For Apple, memory is a revenue problem, as the company prepares for weaker consumer demand due to higher prices. But for the hyperscalers, it's becoming a huge cost hurdle as prices soar for the memory-hungry AI systems that they all buy from Nvidia.
Musk went so far as to thank memory vendor Micron for giving the company "a very significant allocation on reasonable terms."
Mixed reactions
Investor reactions to the reports varied dramatically.
Tesla and Alphabet both sank last week as they turned cash flow negative and pointed to accelerated spending. Meta plummeted following its report on Wednesday due to a weak forecast and continued uncertainty surrounding its AI monetization strategy. Microsoft, meanwhile, had its best day on the market since 2008 as it coupled better-than-expected results with increased capex guidance.
"MSFT has room to meaningfully re-rate," Wells Fargo analysts, who recommend buying the shares, wrote in a note to clients. The rally cut Microsoft's stock drop for the year to about 7%.
Apple shares slid following its Q3 print as the memory shortage weighed on its outlook, while Amazon's surging cloud growth was a major catalyst for the online retailer's stock pop.
"Not only is the revenue growth dramatic, but the profitability is rising," Mark Mahaney, an analyst at Evercore ISI, told CNBC's "Closing Bell: Overtime" after the report. Mahaney said the growth rate for Amazon Web Services had been lagging Microsoft Azure and Google's cloud business, and that "this is just the breakout that the stock needed."
Wedbush analysts said in a Friday note that Amazon's report was the "cleanest beat" among the hyperscalers it covers, while management offered the clearest explanation of how it will achieve returns on its capex spend.
"This clean beat and walk through are the factors in our view on the different share reaction between GOOGL and AMZN on what we view as similarly strong fundamental prints with raises in capex," the analysts wrote.
But across the megacap landscape, none of the stocks — unless you include Micron — are having breakout years, despite healthy revenue growth. The muted market moves reflect growing skepticism over whether the massive AI buildout, fueled increasingly by debt, will ultimately pay off.
Then there's the China conundrum.
In recent months, a slew of Chinese AI labs have released new and updated AI models that are narrowing the performance lead held by OpenAI and Anthropic at much lower prices, playing into a popular trend as corporate America gets more frugal when it comes to spending on AI services.
The so-called open-weight models can be downloaded, tweaked and hosted on whatever infrastructure the user chooses.
With so much of the AI market built around OpenAI and Anthropic, which are both valued at close to $1 trillion on the private market, any potential threat to their business presents risks to the AI trade as a whole.
In a report last week, Dana Harlap, investment strategist at JPMorgan Chase, asked the rhetorical question, "Is it all one big AI trade?" Harlap said the reaction to Google's report shows that Wall Street is scrutinizing spending.
That's true even when companies beat revenue estimates, which Google did while reporting 82% cloud growth.
"We're seeing the market become more critical — and more discriminating — across hyperscalers as investors try to separate AI winners from losers," Harlap wrote. "Long-term, the success (or failure) of the hyperscalers to generate an acceptable return on investment on their heavy capex investments will likely be correlated with the returns of the AI ecosystem."
WATCH: Apple warns its strongest product cycle is outrunning supply`,
    bodyJa: `人工知能ブームが始まってからほぼ 4 年が経ちますが、世界最大のテクノロジー企業は依然として将来について壮大な約束をしています。問題は、彼らがその過程で現金を使い果たしてしまっていることだ。
ゴールドマン・サックスによると、メガキャップ企業のAI支出は今年7,650億ドルに達し、2027年には1兆2,000億ドル近くまで増加すると予測されている。アマゾンは木曜日、今年の設備投資予想を２２００億ドルに引き上げ、ハイパースケーラー４社の中で最高額となった。
アマゾンはまた、メタが現金生成が前年比で91％減少したことを明らかにした翌日、その後12カ月のフリーキャッシュフローが76億ドルというマイナスだったと報告した。アルファベットは先週、キャッシュフローが史上初めてマイナスに転じたと発表したが、これは地球上で最も収益性の高い企業の一つにとって驚くべき展開だ。
アルファベットの財務責任者、アナト・アシュケナージ氏は決算会見でアナリストに対し、同社が「AIの機会」をつかむにつれてフリーキャッシュフローは引き続き圧迫されるだろうと語った。
テクノロジー企業の決算シーズンが今週ほぼ終わり、NVIDIA は 8 月 26 日に報告を予定しているが、業界リーダーが新しいデータセンターとそこに搭載されるチップやシステムに対する巨額の賭けの将来の利益を宣伝し続けているにもかかわらず、AI への投資がバランスシートを歪めていることがすぐに明らかになった。
コストが以前の予想よりも上昇している大きな理由の 1 つは、少数のベンダーが供給するメモリに依存する AI プロセッサに対する飽くなき需要によって引き起こされるメモリ不足です。
テスラのイーロン・マスク最高経営責任者（CEO）は先週の決算会見でメモリの価格設定を「常軌を逸している」と述べ、アマゾンのアンディ・ジャシー最高経営責任者（CEO）はメモリチップの「価格高騰」が同社の設備投資計画を引き上げたと述べた。
Appleは、大手ハイテク企業に比べて支出がはるかに少ないが、この技術はあらゆる消費者向けデバイスの重要な部分であるため、メモリ危機の影響を特に受けやすい。 AppleはすでにMacとiPadの価格を引き上げており、多くのアナリストはiPhoneの価格が今年後半に値上げされると予想している。
同社は木曜日、ティム・クック最高経営責任者（CEO）が「供給制約」と呼んだものを理由に、予想よりも弱い見通しを発表した。同氏は今年この問題が緩和されるとは期待していない。
9月1日に最高経営責任者（CEO）を退任するクック氏は決算会見で、「9月以降に目を向けると、メモリの市場価格は上昇し続けることが予想され、当社の事業への影響が増大する可能性がある」と述べた。 「そして私たちはこれを評価し続けています。」
Appleにとって、価格高騰による消費者需要の低迷に備えているため、メモリは収益上の問題となっている。しかし、ハイパースケーラーにとっては、各社が Nvidia から購入しているメモリを大量に消費する AI システムの価格が高騰しているため、コストの大きなハードルとなっています。
マスク氏は、メモリベンダーのマイクロン社が「合理的な条件で非常に大きな割り当て」を行ってくれたことに感謝の意を表した。
混合反応
この報告書に対する投資家の反応は大きく異なりました。
テスラとアルファベットは先週、キャッシュフローがマイナスに転じ、支出の加速を指摘して下落した。 Metaは、弱い見通しとAI収益化戦略を巡る不確実性の継続により、水曜日の報告書を受けて急落した。一方、マイクロソフトは、予想を上回る業績と設備投資のガイダンスの増加により、2008 年以来最高の日を市場で過ごしました。
ウェルズ・ファーゴ株の購入を推奨しているアナリストらは、顧客向けノートで「ＭＳＦＴには有意義な再評価の余地がある」と書いた。この上昇によりマイクロソフトの年間株価下落率は約７％に縮小した。
Appleの株価は、メモリ不足が同社の見通しに重しとなり、第3四半期の発表後に下落した一方、Amazonのクラウドの急成長がオンライン小売業者の株価急騰の大きなきっかけとなった。
エバーコアＩＳＩのアナリスト、マーク・マヘイニー氏は報道後、ＣＮＢＣの「クロージング・ベル：延長戦」で「売上高の劇的な伸びだけでなく、収益性も向上している」と語った。マハニー氏は、アマゾン ウェブ サービスの成長率はマイクロソフト アジュールやグーグルのクラウド事業に遅れをとっており、「これはまさに株価が必要としていたブレイクアウトだ」と述べた。
ウェドブッシュのアナリストらは金曜日のメモで、アマゾンの報告書は対象とするハイパースケーラーの中で「最もクリーンなビート」である一方、経営陣は設備投資から利益をどのように達成するかについて最も明確な説明を行ったと述べた。
「このクリーンビートとウォークスルーが、設備投資の増加に伴い同様に堅調なファンダメンタルズプリントであると当社が見ているものに対する、GOOGLとAMZNの間の株価の反応の違いに関する当社の見解の要因である」とアナリストらは書いている。
しかし、メガキャップ全体を見渡せば、収益が健全に成長しているにもかかわらず、マイクロンを除いて、大躍進を遂げた銘柄は一つもありません。市場の動きが鈍いのは、借金によってますます加速する大規模なAI増強が最終的に報われるかどうかについての懐疑論の高まりを反映している。
それから中国の難題もある。
ここ数カ月間、多数の中国のAIラボが新しく更新されたAIモデルをリリースしており、OpenAIとAnthropicが持つパフォーマンスの差を大幅に低価格で縮めており、アメリカ企業がAIサービスへの支出に関してより倹約する中での人気のトレンドに乗じている。
いわゆるオープンウェイト モデルは、ユーザーが選択したインフラストラクチャ上でダウンロード、調整、ホストすることができます。
AI 市場の大部分は OpenAI と Anthropic を中心に構築されており、どちらも民間市場での価値は 1 兆ドル近くに達しており、彼らのビジネスに対する潜在的な脅威は AI 業界全体にリスクをもたらします。
JPモルガン・チェースの投資ストラテジスト、ダナ・ハーラップ氏は先週のレポートで、「これはすべて1つの大きなAI取引なのか？」という修辞的な質問をした。ハーラップ氏は、グーグルの報告書に対する反応はウォール街が支出を精査していることを示していると述べた。
これは、企業が収益予測を上回った場合でも当てはまります。Google はクラウドの 82% の成長を報告しながらそれを達成しました。
「投資家がAIの勝者と敗者を分けようとする中、ハイパースケーラー全体で市場がより批判的で、より差別的になっていることを私たちは目の当たりにしている」とハーラップ氏は書いた。 「長期的には、ハイパースケーラーが多額の設備投資に対して許容可能な投資収益率を生み出す成功（または失敗）は、おそらく AI エコシステムの収益と相関関係があるでしょう。」
注目：Apple、最も強力な製品サイクルが供給を上回っていると警告`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/tech-earnings-cash-memory-ai.html",
    publishedAt: "2026-07-31T13:26:59+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 8,
  },
  {
    id: "exxon-and-chevron-profits-surge-on-risin-98744c76",
    title: "Exxon and Chevron profits surge on rising oil prices due to Iran war",
    titleJa: "イラン戦争による原油価格上昇でエクソンとシェブロンの利益が急増",
    summaryJa: "エクソンモービルとシェブロンは金曜日、イラン戦争による原油価格の上昇で第２・四半期利益が急増したと発表した。シェブロンの純利益は120億ドルに急増し、前年同期の25億ドルと比べて400％近く増加した。調整後利益は1株当たり6.06ドルとなり、ウォール街の予想を50セント上回った。",
    bodyOriginal: `ExxonMobil and Chevron on Friday reported second-quarter profits that surged on rising oil prices due to the Iran war.
Chevron's net income soared to $12 billion, a nearly 400% increase compared to $2.5 billion in the same period last year. Adjusted earnings came in at $6.06 per share, 50 cents higher than Wall Street's estimates.
"We're kind of firing on all cylinders, which is good, because the world needs it," CEO Mike Wirth told CNBC's Becky Quick.
Wirth said the threat to oil supplies in the Middle East has expanded beyond the Strait of Hormuz at a time when global inventories are falling. Iran's Houthi allies in Yemen have expanded the conflict to the Red Sea, which has become a crucial alternative route for Saudi Arabia's oil exports.
"The situation is under stress and I'm afraid it's going to continue to do so," Wirth told CNBC. "We're running out of time. Every day that goes by, the situation gets more difficult."
Exxon posted profits for the quarter of $14.5 billion, more than doubling from about $7.1 billion in the same quarter last year. Adjusted earnings of $3.52 per share missed analyst estimates by 8 cents.
Exxon CEO Darren Woods said the miss was due to difficulties in company's refining business. It was challenging to forecast prices due to the disruption in global crude and products markets, he said.
"We have so much disruption," Woods told CNBC's "Squawk Box." "It was particularly difficult, particularly for our refining business. The ability to predict what prices we're going to do on that business was difficult. That's where the miss came from."
Chevron shares were slightly higher in premarket trading, while Exxon shares were down about 1%.
Here's how Exxon and Chevron did, compared with estimates from analysts polled by LSEG:
- Exxon earnings per share: $3.52 adjusted, vs. $3.60 expected
- Exxon revenue: $116 billion, vs. $97.8 billion expected.
- Chevron earnings per share: $6.06 adjusted, vs. $5.56 expected
- Chevron revenue: $70 billion, vs. $62 billion expected.
U.S. crude oil futures had an average closing price of $92.45 per barrel from April through June, a 27% increase over the first quarter.
Chevron's U.S. production hit an all-time high of about 2 million barrels per day as exports surged due to the supply disruption in the Middle East. Production worldwide stood at 4 million barrels per day, a 20% increase over 3.4 million bpd in the same quarter last year.
Exxon's upstream production hit its highest level in more than 20 years excluding disruptions in the Middle East. Output in the Permian Basin, in Texas and New Mexico, hit a record. Worldwide production came in at 4.5 million barrels per day.
Chevron's refining segment saw profits jump to $4.9 billion, a 500% increase over $737 million in the second quarter of 2025, as gasoline and diesel prices soared due to the disruption in the Middle East.
Exxon's refining business posted earnings of $5.5 billion in the second quarter, a big turnaround from a loss of $1.3 billion in the first quarter, on strong Gulf Coast utilization and record diesel production. The segment's earnings totaled $1.4 billion a year ago.
Chevron's earnings in its production business climbed 200% to $8.2 billion in the second quarter compared to $2.7 billion in the year-ago period. Exxon's upstream profits for exploration and production came in at $7.9 billion versus $5.4 billion in the second quarter of 2025.`,
    bodyJa: `エクソンモービルとシェブロンは金曜日、イラン戦争による原油価格の上昇で第２・四半期利益が急増したと発表した。
シェブロンの純利益は120億ドルに急増し、前年同期の25億ドルと比べて400％近く増加した。調整後利益は1株当たり6.06ドルとなり、ウォール街の予想を50セント上回った。
CEOのマイク・ワース氏はCNBCのベッキー・クイックに対し、「我々は全気筒に点火しているような状態だ。世界がそれを必要としているので、これは良いことだ」と語った。
ワース氏は、世界的な在庫が減少している中、中東の石油供給に対する脅威はホルムズ海峡を越えて拡大していると述べた。イエメンのイランと同盟関係にあるフーシ派は紛争を紅海に拡大しており、紅海はサウジアラビアの石油輸出にとって重要な代替ルートとなっている。
ワース氏はCNBCに対し、「状況は緊迫しており、この状況が今後も続くのではないかと懸念している」と語った。 「時間がなくなりつつある。日が経つにつれ、状況はさらに困難になっていく。」
エクソンの同四半期の利益は145億ドルとなり、前年同期の約71億ドルから2倍以上に増加した。調整後の1株当たり利益は3.52ドルで、アナリスト予想を8セント下回った。
エクソンのダレン・ウッズ最高経営責任者（CEO）は、今回の失敗は同社の精製事業の困難によるものだと述べた。世界的な原油・製品市場の混乱により、価格を予測するのは困難だと同氏は述べた。
ウッズ氏はCNBCの番組「スコークボックス」で、「私たちは非常に多くの混乱に見舞われている」と語った。 「特に精製事業にとっては困難でした。その事業でどのような価格を設定するかを予測するのは困難でした。失敗はそこから来ました。」
シェブロン株は市場前の取引で若干上昇したが、エクソン株は約１％下落した。
LSEGが調査したアナリストの予測と比較したエクソンとシェブロンの業績は次のとおりです。
- エクソンの一株当たり利益: 調整後 3.52 ドル、予想 3.60 ドル
- エクソンの収益: 予想978億ドルに対し、1,160億ドル。
- シェブロンの一株当たり利益: 調整後 6.06 ドル、予想 5.56 ドル
- シェブロンの収益: 予想 620 億ドルに対し、700 億ドル。
米原油先物の4月から6月までの平均終値は1バレル当たり92.45ドルで、第1四半期に比べ27％上昇した。
中東の供給混乱で輸出が急増し、シェブロンの米国での生産量は過去最高の日量約２００万バレルに達した。世界の生産量は日量400万バレルで、前年同期の日量340万バレルから20％増加した。
エクソンの上流生産は、中東の混乱を除けば過去２０年以上で最高水準に達した。テキサス州とニューメキシコ州にあるパーミアン盆地の生産量は記録を更新した。世界の生産量は日量450万バレルとなった。
中東情勢の混乱によるガソリンとディーゼル価格の高騰を受け、シェブロンの精製部門の利益は2025年第2四半期の7億3,700万ドルから500％増の49億ドルに跳ね上がった。
エクソンの精製事業は、メキシコメキシコ湾岸の好調な利用と記録的なディーゼル生産により、第２・四半期に５５億ドルの利益を計上し、第１・四半期の１３億ドルの損失から大きく好転した。同部門の前年同期の利益は合計14億ドルだった。
シェブロンの製造事業の利益は、前年同期の 27 億ドルと比較して、第 2 四半期には 200% 増加して 82 億ドルとなりました。エクソンの上流での探査と生産の利益は79億ドルで、2025年第2四半期は54億ドルでした。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/31/exxon-xom-chevron-cvx-q2-earnings.html",
    publishedAt: "2026-07-31T12:49:14+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "passenger-on-british-airways-mayday-flig-fcccf746",
    title: "Passenger on British Airways mayday flight describes fear and shout of 'I don't want to die'",
    titleJa: "ブリティッシュ・エアウェイズのメーデー便の乗客が恐怖と「死にたくない」の叫びを語る",
    summaryJa: "ブリティッシュ・エアウェイズのメーデー便の乗客が恐怖と「死にたくない」の叫びを語る- 公開されました",
    bodyOriginal: `Passenger on British Airways mayday flight describes fear and shout of 'I don't want to die'
- Published
A passenger on a British Airways flight that issued a distress call on approach to Heathrow Airport earlier this month has described the rising fear in the cabin and a lack of information from the crew.
Edward Killiwick had been travelling back from a friend's birthday party with his partner Julie, on the flight from Dusseldorf in Germany on 6 July.
He said passengers were told that the landing had been aborted, and then he felt a "very violent manoeuvre" and "did think we could crash". He and his partner had to comfort a woman who "completely lost it and started screaming, 'I don't want to die'".
The flight landed safely, but the incident is being investigated with assistance from BA.
The UK's Air Accidents Investigation Branch (AAIB) said it was "investigating a serious incident", and France's accident investigation authority, the BEA, said on Wednesday that the plane, an Airbus A320, had issued a distress call.
Edward said: "The violent manoeuvre almost felt like it was avoiding another aircraft. You could feel the engines going at full power.
"It was a bit odd going around in a holding pattern with no information. I thought if they're not talking, then they're not in a good place."
He said they were in a holding pattern for about 15 minutes.
The BEA said that as the plane approached Heathrow, there was a data system failure which triggered a stall warning.
The crew then flew the aircraft in a different mode called "alternate law", which removes some automated flight protection systems. Another stall warning then occurred at 3,000 feet — which experts say was likely to have been just miles away from the airport.
The urgency call the crew had already made was upgraded to mayday, indicating imminent danger.
A British Airways spokesperson said the airline was assisting the AAIB with its investigation and was not legally able to comment further at this stage.
Edward said: "I was definitely scared. After the violent manoeuvre I thought, there is definitely something very badly wrong here. I did think we could crash.
"I did think it was a possibility, and I think everyone else did."
He added: "I think everyone was getting very scared, including one lady who completely lost it and started screaming 'I don't want to die.'
"Then we did land, but still no communication from the flight deck, which I suppose isn't surprising as I suppose they had quite a lot to do."
Several fire trucks and a police car were on the tarmac when the plane landed, Edward said.
"There was a few people that did clap, but not that many because I think everyone was just relieved to be on the ground," he said.
"Everyone was very, very quiet. There was almost no conversation. That's the eerie thing.
"Julie, my partner, did shed a few tears when we landed."
With additional reporting from Katy Austin
Related topics
- Published20 hours ago`,
    bodyJa: `ブリティッシュ・エアウェイズのメーデー便の乗客が恐怖と「死にたくない」の叫びを語る
- 公開されました
今月初めにヒースロー空港に接近する際に救難信号を出したブリティッシュ・エアウェイズ機の乗客は、機内での恐怖の高まりと乗務員からの情報不足について語った。
エドワード・キリウィックさんは7月6日、ドイツのデュッセルドルフ発の飛行機で、パートナーのジュリーさんとともに友人の誕生日パーティーから帰る途中だった。
同氏は、乗客らには着陸が中止されたと告げられ、その後「非常に激しい操縦」を感じ、「墜落するかもしれないと思った」と述べた。彼と彼のパートナーは、「完全に気持ちを失い、『死にたくない』と叫び始めた」女性を慰めなければならなかった。
飛行機は無事に着陸したが、事件はBAの支援を受けて調査されている。
英国の航空事故調査局（AAIB）は「重大な事件を調査している」と述べ、フランスの事故調査当局BEAは水曜日、エアバスA320型機が救難信号を発したと発表した。
エドワード氏は、「その激しい操縦は、まるで別の航空機を避けているように感じられた。エンジンがフルパワーで作動しているのが感じられた」と語った。
「何の情報もないままホールディングパターンで回るのは少し奇妙だった。彼らが話さないなら、彼らは良い場所にいないのだと思いました。」
同氏によると、彼らは約15分間保持パターンに陥ったという。
BEAによると、同機がヒースロー空港に接近した際にデータシステムに障害が発生し、失速警報が発せられたという。
その後、乗組員は一部の自動飛行保護システムを取り除いた「代替法」と呼ばれる別のモードで航空機を飛行させた。その後、3,000フィートの地点で別の失速警報が発せられたが、専門家によれば、そこは空港から数マイル離れたところだった可能性が高いという。
乗組員がすでに行っていた緊急通報は、差し迫った危険を示すメーデーに格上げされました。
ブリティッシュ・エアウェイズの広報担当者は、同社はAAIBの調査を支援しているが、現段階では法的にこれ以上コメントできないと述べた。
エドワードは「確かに怖かったです。暴力的な操作の後、私はここに何か非常に悪い問題があるのは間違いないと思いました。クラッシュする可能性があると思いました。
「私もその可能性はあると思っていましたし、他の人もそう思っていたと思います。」
さらに、「完全に意識を失って『死にたくない』と叫び始めたある女性を含め、誰もがとても怖くなっていたと思う」と付け加えた。
「その後、着陸しましたが、依然として飛行甲板からの通信はありませんでした。彼らにはやるべきことがたくさんあったと思うので、これは驚くべきことではないと思います。」
エドワードさんによると、飛行機が着陸したとき、数台の消防車と１台のパトカーが駐機場にいたという。
「拍手する人も何人かいたけど、みんなグラウンドにいて安堵しただけだと思うので、それほど多くはなかった」と彼は語った。
「みんなとても、とても静かでした。会話はほとんどありませんでした。それが不気味なことだ。
「私のパートナーのジュリーは、私たちが着陸したとき、少し涙を流しました。」
ケイティ・オースティンからの追加レポートあり
関連トピック
- 20 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn9n2v3lwr0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-31T12:19:20+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a427/live/adfea090-8cde-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 3,
  },
  {
    id: "uk-petrol-prices-hit-highest-level-since-8fc7b7c0",
    title: "UK petrol prices hit highest level since Iran war began",
    titleJa: "英国のガソリン価格、イラン戦争勃発以来最高値に",
    summaryJa: "英国のガソリン価格、イラン戦争勃発以来最高値に- 公開されました",
    bodyOriginal: `UK petrol prices hit highest level since Iran war began
- Published
UK petrol prices have risen to their highest level since the beginning of the Iran war as the conflict continues to hit drivers' finances.
The average cost of petrol has reached 160p per litre, according to motoring group the RAC.
The price of fuel tends to track the wholesale price of oil, which surged when the Iran conflict began on 28 February as the fighting severely disrupted oil supplies across the Middle East.
Prices then nosedived when US and Iran agreed to a framework deal to end the conflict in June, but they have risen again since the collapse of peace talks.
How do wholesale oil prices affect the cost of petrol and diesel at the pump?
Crude oil is a key ingredient in petrol and diesel, which means that higher wholesale costs make filling up a car more expensive.
Analysts say every $10 (£7.44) per barrel increase in the oil price pushes up pump prices by roughly 7p a litre.
Since the war began, the price of a barrel of Brent crude – the global benchmark for wholesale oil prices – has been very volatile.
Generally speaking, news of further conflict drives the price up while hopes of an end to the war pushes the price down.
Before the conflict, Brent was about $70 a barrel, but the fighting saw it peak at above $120.
In early July, after the framework deal was signed, prices fell back to near the $70 a barrel mark.
When the peace talks collapsed, the price climbed back up again to above $100 a barrel, but are now around $90.
What has happened to petrol and diesel prices in the UK?
While petrol has hit its highest price since the Iran war began, according to the RAC, diesel remains below the peak of 191.54p a litre it reached on 15 April.
In early July, the RAC said the average price of petrol sank to a low of 150.59p per litre and 164.52p per litre for diesel.
Since then the prices have risen, with petrol now at 159.97p a litre while diesel costs 178.97p a litre.
RAC head of policy Simon Williams said the price of diesel was likely to reach 185p a litre "in the next few weeks, barring any major oil price reduction".
Despite the conflict, petrol and diesel prices remain below the levels reached in the summer of 2022 following Russia's invasion of Ukraine, when petrol reached 191.5p a litre and diesel hit 199p.
Because transporting oil is a slow process, price movements in the wholesale markets take about a fortnight to show at the pump.
Fuel retailers have denied accusations of price gouging during the conflict. The official markets regulator said it had "not seen evidence of retailers actively changing their pricing strategies to take advantage of the crisis".
A government scheme called Fuel Finder, external lets drivers compare the cost of fuel offered by petrol stations across the UK.
Luke Bosdet, the head of policy at the AA, said the group had been surprised at the speed that prices had fallen and put it down to the scheme.
On 20 May, the then Prime Minister Sir Keir Starmer said a planned 5p increase in fuel duty due in September would be postponed until 31 December because of the conflict.
Why has the Iran war had a big impact on oil prices?
The Middle East conflict sent global oil prices soaring as it effectively closed the Strait of Hormuz - one of the world's key water transport routes for oil, liquid natural gas and other essential commodities - limiting global supplies.
About 20% of the world's oil and liquefied natural gas normally passes through the waterway.
Even if a deal is agreed to reopen the strait, experts warn it will take time before normal levels of shipping through the Strait of Hormuz resume, and the impact of the war will continue to affect the global economy for potentially months to come.
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
    bodyJa: `英国のガソリン価格、イラン戦争勃発以来最高値に
- 公開されました
イラン紛争がドライバーの財政に打撃を与え続けているため、英国のガソリン価格はイラン戦争開始以来の最高水準に上昇した。
自動車業界団体RACによると、ガソリンの平均コストは1リットル当たり160ペンスに達している。
燃料価格は原油の卸売価格に連動する傾向があり、2月28日にイラン紛争が始まった際には、戦闘により中東全域で石油供給が大幅に混乱したため価格は高騰した。
その後、6月に米国とイランが紛争終結に向けた枠組み合意に合意すると価格は急落したが、和平交渉の決裂以降は再び上昇した。
卸売石油価格はポンプのガソリンとディーゼルのコストにどのような影響を与えますか?
原油はガソリンとディーゼルの重要な成分であるため、卸売コストが高くなると車のガソリン満油の費用も高くなります。
アナリストらによると、原油価格が1バレル当たり10ドル（7.44ポンド）上昇するごとに、ポンプ価格は1リットル当たり約7ペンス上昇するという。
戦争が始まって以来、原油卸売価格の世界的な基準であるブレント原油1バレルの価格は非常に不安定だった。
一般的に、さらなる紛争のニュースは価格を押し上げますが、戦争終結への期待は価格を押し下げます。
紛争前、ブレント原油は1バレルあたり約70ドルだったが、戦闘により最高値は120ドルを超えた。
枠組み合意署名後の7月初旬、価格は1バレル当たり70ドル近くまで下落した。
和平交渉が決裂すると、価格は再び1バレル当たり100ドルを超えるまで上昇したが、現在は90ドル程度となっている。
英国のガソリンとディーゼルの価格はどうなりましたか?
ＲＡＣによると、ガソリン価格はイラン戦争開始以来最高値に達しているが、ディーゼル価格は４月１５日に付けた最高値１リットル当たり１９１．５４ペンスを依然として下回っている。
RACは7月初旬、ガソリンの平均価格が1リットル当たり150.59ペンス、ディーゼルは1リットル当たり164.52ペンスの安値まで下落したと発表した。
それ以来、価格は上昇し、現在ガソリンは1リットルあたり159.97ペンス、ディーゼルは1リットルあたり178.97ペンスとなっている。
ＲＡＣの政策責任者サイモン・ウィリアムズ氏は、原油価格が大幅に引き下げられない限り、ディーゼル価格は「今後数週間以内に」１リットル当たり１８５ペンスに達する可能性が高いと述べた。
紛争にもかかわらず、ガソリンとディーゼルの価格は、ロシアのウクライナ侵攻後の2022年夏に達した水準（ガソリンは1リットル当たり191.5ペンス、ディーゼルは199ペンスに達した）を下回ったままである。
石油の輸送には時間がかかるため、卸売市場の価格変動が反映されるまでに約 2 週間かかります。
燃料小売業者は紛争中の価格つり上げの告発を否定している。当局の市場規制当局は「小売業者が危機に乗じて価格戦略を積極的に変更している証拠は見られない」と述べた。
Fuel Finder と呼ばれる政府の制度により、ドライバーは英国全土のガソリン スタンドが提供する燃料のコストを比較できます。
AAの政策責任者であるルーク・ボスデット氏は、同団体は価格下落のスピードに驚き、原因はこの計画にあると述べた。
5月20日、当時のキア・スターマー首相は、9月に予定されていた燃料税の5ペンス引き上げが紛争のため12月31日まで延期されると発表した。
なぜイラン戦争は原油価格に大きな影響を与えたのでしょうか?
中東紛争により、石油、液体天然ガス、その他の必需品の世界の主要な水輸送ルートの一つであるホルムズ海峡が事実上閉鎖され、世界の石油価格が高騰し、世界の供給が制限された。
通常、世界の石油と液化天然ガスの約 20% が水路を通過します。
たとえ海峡再開の合意が得られたとしても、ホルムズ海峡を通る輸送が通常レベルに戻るまでには時間がかかり、戦争の影響は今後数カ月にわたって世界経済に影響を及ぼし続けるだろうと専門家らは警告している。
米国はなぜ、どのようにしてホルムズ海峡のイランの港を封鎖しているのでしょうか?
- 4 月 30 日発行
原油価格は残りの期間、100ドルを超える見通し
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
    publishedAt: "2026-07-31T11:19:23+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8143/live/f8d0c8b0-7572-11f1-b976-0b9c15b0ccfc.jpg",
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
