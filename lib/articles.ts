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
    id: "trump-says-u-s-has-sold-more-than-13-bil-aba95831",
    title: "Trump says U.S. has sold more than $13 billion of Venezuela oil",
    titleJa: "トランプ大統領、米国は130億ドル以上のベネズエラ原油を売却したと発言",
    summaryJa: "ドナルド・トランプ大統領は月曜日、米国は今年130億ドル以上のベネズエラ産原油を販売したと述べた。米国は1月3日の軍事襲撃でニコラス・マドゥロ前大統領を拘束した後、ベネズエラ石油輸出の管理を掌握した。トランプ大統領は、政権が売却から集めた金額を見積もったフィナンシャル・タイムズ紙の報道に関する質問に答えていた。",
    bodyOriginal: `President Donald Trump said Monday that the U.S. has sold more than $13 billion of Venezuelan oil this year.
The U.S. seized control of Venezuela's oil exports after capturing former President Nicolas Maduro in a military raid on January 3. Trump was responding to a question about a Financial Times' report that estimated how much money his administration had collected from the sales.
"$13 billion from Venezuela? I think even more than that," the president told reporters aboard Air Force One as he traveled to Michigan to tour a General Motors' facility. "We've paid for that war many times over."
Democrats in Congress have pressed the Trump administration to disclose how much money it has collected from the sales, how the funds are spent, and how the program is monitored.
Energy Secretary Chris Wright told Semafor in an April interview that the U.S. had sold around 150 million barrels of Venezuelan oil since January.
This is a developing story. Please check back for updates.`,
    bodyJa: `ドナルド・トランプ大統領は月曜日、米国は今年130億ドル以上のベネズエラ産原油を販売したと述べた。
米国は1月3日の軍事襲撃でニコラス・マドゥロ前大統領を拘束した後、ベネズエラ石油輸出の管理を掌握した。トランプ大統領は、政権が売却から集めた金額を見積もったフィナンシャル・タイムズ紙の報道に関する質問に答えていた。
「ベネズエラから130億ドル？私はそれよりも多いと思う」と大統領は、ゼネラル・モーターズの施設を視察するためミシガン州を訪れた際、エアフォース・ワンの機内で記者団に語った。 「私たちはその戦争の代償を何倍にもわたって支払ってきました。」
議会民主党はトランプ政権に対し、販売で集めた金額、資金の使途、プログラムの監視方法などを明らかにするよう求めている。
クリス・ライト・エネルギー長官は4月のセマフォーとのインタビューで、米国は1月以来約1億5000万バレルのベネズエラ産原油を販売したと語った。
これは発展途上の物語です。最新情報を再度ご確認ください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/trump-says-us-has-sold-more-than-13-billion-of-venezuela-oil-.html",
    publishedAt: "2026-07-27T19:39:37+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "crypto-stocks-rally-thanks-to-rotation-f-36df18ff",
    title: "Crypto stocks rally thanks to rotation from AI infrastructure; bitcoin miners lag",
    titleJa: "AIインフラによるローテーションのおかげで仮想通貨株は上昇。ビットコインマイナーの遅れ",
    summaryJa: "市場全体が売られ、資本がチップやAIインフラストラクチャーの名前から離れていく中、月曜日の上昇率上位には仮想通貨株の一部が含まれた。月曜の最新情報によると、ビットマイン・イマージョンがグループをリードし、イーサ・アキュムレーターが現在の価格で約1940万ドル相当の仮想通貨の保有を1万コイン近く増やした後、11％急騰した。同じETH財務会社シャープリンク・ゲーミングは6％上昇した。",
    bodyOriginal: `Crypto stocks were some of the top gainers Monday as the broader market sold off and capital rotated away from chip and AI infrastructure names.
Bitmine Immersion led the group, surging 11% after the ether accumulator increased its holdings of the cryptocurrency by nearly 10,000 coins worth about $19.4 million at current prices, according to a Monday update. Fellow ETH treasury firm Sharplink Gaming jumped 6%.
Bitcoin treasury pioneer Strategy was up 7% after it added to its cash buffer for a fifth straight week rather than buy bitcoin.
Coinbase Global, BitGo and Figure Technology were all up between 4% and 6%.
Stablecoin issuer Circle Internet Group gained 2% after announcing it has acquired IBM's portfolio of more than 1,000 blockchain-related patents worldwide. It did not disclose details of the acquisition.
The sector-wide move came amid a sharp sell-off in oil prices, lower Treasury yields and continued risk-off approach to memory chip stocks and other, direct AI plays.
"Today's weakness partly reflects concern around capex requirements and whether companies across the miner-to-AI group may need to raise incremental capital at higher costs to fund their development pipelines," Donovan told CNBC.
Chip and AI infrastructure stocks were under pressure as concern over circular financing spread, along with intensifying competition from Chinese semiconductor companies. The resulting risk repricing accelerated capital rotation into alternative themes, including crypto, said Owen Lau, analyst at ClearStreet.
AI-exposed bitcoin miners were uniformly in the red.
Cipher Mining led the group with an 8% decline. Hut 8 and Terawulf fell 6% and 4%, respectively. The weakness even extended to pure play bitcoin miners. Riot Platforms lost 5%, Mara Holdings sank 3% and CleanSpark was lower by 4%. Core Scientific, which has mostly pivoted away from bitcoin mining, was down 9%.
Nvidia's reported discussions to provide financial support for OpenAI's plan to lease a new AI data center in Ohio underscored the growing role of credit in enabling the AI investment, said Michael Donovan, senior research analyst at Compass Point.
Most publicly traded bitcoin miners are increasingly valued by investors as owners of digital infrastructure rather than merely producers of bitcoin, given their power capacity, data center assets and energy contracts.
As a result, even pure-play bitcoin miners like Mara Holdings and Riot Platforms can sell off alongside AI-exposed miners. These names often trade together, through thematic baskets, sector ETFs and algorithmic positioning that creates broad moves across the whole mining sector.
"Some investors are questioning whether credit appetite for these projects is approaching its limits and which developers can fund their pipelines without meaningful dilution, expensive debt or additional support from customers and strategic partners," Donovan added. "That may create a near-term overhang for the group, even though we continue to view the base compute infrastructure segment of AI as attractive and structurally supply-constrained."
Bitcoin itself was little changed, standing below the $65,000 level. Ether was higher by more than 1% at about $1,900.`,
    bodyJa: `市場全体が売られ、資本がチップやAIインフラストラクチャーの名前から離れていく中、月曜日の上昇率上位には仮想通貨株の一部が含まれた。
月曜の最新情報によると、ビットマイン・イマージョンがグループをリードし、イーサ・アキュムレーターが現在の価格で約1940万ドル相当の仮想通貨の保有を1万コイン近く増やした後、11％急騰した。同じETH財務会社シャープリンク・ゲーミングは6％上昇した。
ビットコイントレジャリーのパイオニアであるストラテジーは、ビットコインを購入するのではなく、5週連続でキャッシュバッファーを増やした後、7％上昇した。
コインベース・グローバル、ビットゴー、フィギュア・テクノロジーはいずれも４─６％上昇した。
ステーブルコイン発行会社サークル・インターネット・グループは、世界中で1,000以上のブロックチェーン関連特許を保有するIBMのポートフォリオを取得したと発表し、2％上昇した。買収の詳細については明らかにしていない。
このセクター全体の動きは、原油価格の急落、米国債利回りの低下、メモリーチップ株やその他のAIへの直接的な取り組みに対するリスクオフアプローチの継続の中で起こった。
ドノバン氏はCNBCに対し、「今日の低迷は、設備投資要件や、マイナーからAIまでのグループ全体の企業が開発パイプラインに資金を提供するために、より高いコストで追加資本を調達する必要があるのではないかという懸念を部分的に反映している」と語った。
中国の半導体企業との競争激化に加え、循環型資金調達への懸念が広がり、チップやＡＩインフラ株が圧迫された。クリアストリートのアナリスト、オーウェン・ラウ氏は、その結果生じたリスク価格の再設定により、仮想通貨を含む代替テーマへの資金回転が加速したと述べた。
AIにさらされたビットコインマイナーは一様に赤字となった。
サイファー・マイニングが8％下落しグループをリードした。ハット８とテラウルフはそれぞれ６％、４％下落した。この脆弱性は純粋なビットコインマイナーにも及んでいました。ライオット・プラットフォームズは５％下落、マラ・ホールディングスは３％下落、クリーンスパークは４％下落した。ビットコインマイニングからほぼ撤退したコア・サイエンティフィックは9％下落した。
コンパス・ポイントのシニア・リサーチ・アナリスト、マイケル・ドノバン氏は、オハイオ州に新たなAIデータセンターをリースするというOpenAIの計画に資金面で支援を提供するためのNVIDIAの協議の報告は、AI投資を可能にする上で信用の役割が増大していることを浮き彫りにしていると述べた。
上場しているビットコインマイナーのほとんどは、電力容量、データセンター資産、エネルギー契約を考慮すると、単なるビットコインの生産者ではなく、デジタルインフラストラクチャの所有者として投資家からの評価が高まっています。
その結果、Mara Holdings や Riot Platforms のような純粋なビットコインマイナーも、AI にさらされたマイナーと並行して売却される可能性があります。これらの銘柄は、テーマ別バスケット、セクターETF、鉱業セクター全体に広範な動きを生み出すアルゴリズムによるポジショニングを通じて、一緒に取引されることがよくあります。
「一部の投資家は、これらのプロジェクトに対する信用需要が限界に近づいているのではないか、また、重大な希薄化や高額な負債、あるいは顧客や戦略的パートナーからの追加支援なしにどの開発者がパイプラインに資金を提供できるのか疑問に思っている」とドノバン氏は付け加えた。 「当社はAIのベースコンピューティングインフラストラクチャセグメントが魅力的であり、構造的に供給が制約されていると引き続き見ているにもかかわらず、このことがグループに短期的なオーバーハングをもたらす可能性があります。」
ビットコイン自体はほとんど変わらず、65,000ドルの水準を下回った。イーサは１％超上昇し約１９００ドルとなった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/crypto-stocks-rally-thanks-to-rotation-from-ai-infrastructure-bitcoin-miners-lag.html",
    publishedAt: "2026-07-27T19:14:30+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "i-know-what-he-wants-to-do-trump-says-o-1a6ae690",
    title: "‘I know what he wants to do,’ Trump says of Fed’s Warsh, as president presses for rate cuts",
    titleJa: "大統領が利下げを迫るなか、トランプ大統領はFRBのウォーシュ氏について「彼が何をしたいのかはわかっている」と語る",
    summaryJa: "ケビン・ウォーシュ新FRB議長は「正しいことをしたい」が、FRB理事会が反対する可能性があると大統領は述べた。",
    bodyOriginal: `New Federal Reserve Chair Kevin Warsh “wants to do the right thing” but is facing a Fed board that might oppose him, the president said.`,
    bodyJa: `ケビン・ウォーシュ新FRB議長は「正しいことをしたい」が、FRB理事会が反対する可能性があると大統領は述べた。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-know-what-he-wants-to-do-trump-says-of-feds-warsh-as-president-presses-for-rate-cuts-edaa115e?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T19:06:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-76860654",
    readTime: 2,
  },
  {
    id: "cracker-barrel-chief-executive-steps-dow-802c9533",
    title: "Cracker Barrel chief executive steps down a year after rebrand chaos",
    titleJa: "クラッカー・バレルの最高経営責任者、ブランド変更の混乱から1年で辞任",
    summaryJa: "クラッカー・バレルの最高経営責任者、ブランド変更の混乱から1年で辞任- 公開されました",
    bodyOriginal: `Cracker Barrel chief executive steps down a year after rebrand chaos
- Published
Cracker Barrel's chief executive is quitting a year after the company faced a widespread backlash over its controversial rebrand.
The restaurant chain said on Monday Julie Masino will leave in August, with the former boss of Bloomin' Brands, David Deno, taking over.
Its rebrand sparked a national controversy, with critics including President Trump, who urged the chain to restore its original logo after critics accused it of abandoning its heritage.
Masino did not issue a statement about her resignation, but Cracker Barrel's management thanked her for her tenure.
Masino will be paid an estimated $4.6m as part of a departure package, according to the company's 8-K filing, external. Cracker Barrel declined to comment, referring the BBC instead to the filing.
The leadership change comes after a turbulent period for the business, which runs nearly 660 country-themed store and restaurants sites across 44 US states.
Plans to simplify the classic logo and modernise store interiors sparked fierce resistance from loyal diners who argued the changes stripped away the brand's nostalgic Southern charm.
It follows a similar uproar in 2022 when Cracker Barrel faced online backlash from some customers after adding plant-based sausages to its breakfast menu.
Such controversies highlight the delicate balance facing brands hoping to attract younger audiences without alienating their core, longstanding customer base. Critics described the latest rebrand as "soulless" and "generic".
Jo-Ellen Pozner, an associate professor at Santa Clara University's Leavey School of Business, said the leadership swap "seems to reflect the polarization many Americans feel today".
She added that doubling down on conservative values may help win back vocal loyalists but "paints the company into a corner".
"Changing anything about the menu, decor, or branding at this point is dangerous, so there are few levers to attract new customers," Pozner said.
President Trump later congratulated the chain on its reversal, external.
In his own statement on the transition, Deno paid tribute to Cracker Barrel's "deep connection with guests across generations".
In addition to public scrutiny, Cracker Barrel has struggled financially.
Shares of the Tennessee-based chain fell by more than 2% after Monday's announcement and are still around a fifth lower than this time last year.
Cracker Barrel's shares have struggled because sales are falling and customer traffic is slowing, all while restaurants grapple with soaring costs.
The transition comes as Cracker Barrel faces fierce competition from chains like Denny's and IHOP, which have been fighting to take market share among budget-conscious diners seeking classic American comfort food.
Masino will stay at the company until October to help Deno through the transition.`,
    bodyJa: `クラッカー・バレルの最高経営責任者、ブランド変更の混乱から1年で辞任
- 公開されました
クラッカー・バレルの最高経営責任者（CEO）は、同社が物議を醸したブランド変更に対する広範な反発に直面してから1年後に辞任する。
レストランチェーンは月曜日、ジュリー・マシノ氏が8月に退社し、ブルーミン・ブランズの元社長デビッド・デノ氏が後任に就任すると発表した。
ブランド変更は全国的な論争を引き起こし、トランプ大統領を含む批評家は、批評家らが伝統を放棄したと非難した後、同チェーンに元のロゴを復元するよう求めた。
マシノ氏は辞任について声明を発表しなかったが、クラッカーバレルの経営陣は彼女の在職期間に感謝の意を表した。
同社の8-K提出書類によると、マシノ氏には退社パッケージの一部として推定460万ドルが支払われる予定だという。クラッカー・バレル氏はコメントを拒否し、代わりにBBCにこの申請について言及した。
この経営陣の交代は、米国44州で国をテーマにした約660の店舗とレストランのサイトを運営する同社にとって激動の時期を経て行われた。
古典的なロゴを簡素化し、店舗の内装を近代化する計画は、この変更がブランドのノスタルジックな南部の魅力を奪うと主張し、忠実なダイナーからの激しい抵抗を引き起こした。
これは、2022年にクラッカーバレルが植物由来のソーセージを朝食メニューに加えた後、一部の顧客からネット上で反発に直面した同様の騒動に続くものだ。
このような論争は、中核となる長年の顧客ベースを遠ざけることなく、若い視聴者を引きつけたいと願うブランドが直面する微妙なバランスを浮き彫りにしている。批評家たちは、最新のブランド変更を「魂のない」「ありきたりなもの」と評した。
サンタクララ大学リービー経営大学院のジョーエレン・ポズナー准教授は、今回の指導者の交代は「多くの米国人が今日感じている二極化を反映しているようだ」と述べた。
同氏は、保守的な価値観を倍増させることは声高な支持者を取り戻すのには役立つかもしれないが、「会社を追い詰める」と付け加えた。
ポズナー氏は、「現時点でメニュー、装飾、ブランディングなどを変更するのは危険なので、新規顧客を引きつける手段はほとんどない」と語った。
トランプ大統領はその後、対外的に同チェーンの反転を祝福した。
デノ氏は移行に関する自身の声明の中で、クラッカー・バレルの「世代を超えたゲストとの深いつながり」に敬意を表した。
世間の注目に加えて、クラッカーバレルは財政的にも苦戦している。
テネシー州に本拠を置くこのチェーン店の株価は月曜日の発表後２％以上下落したが、依然として昨年のこの時期と比べて約５分の１低い水準にある。
クラッカーバレルの株価は、レストランがコストの高騰に直面する中、売上高が減少し、客足が鈍化しているため苦戦している。
この移行は、クラッカーバレルが、伝統的なアメリカのホッとする料理を求める予算重視のダイナーの間で市場シェアを獲得しようと戦ってきたデニーズやIHOPなどのチェーンとの熾烈な競争に直面している中で行われた。
マシノ氏はデノ氏の移行を支援するため、10月まで同社に残る予定だ。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cr49z0r54nko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T18:49:54+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0c4d/live/c0977d80-89dc-11f1-9273-213dd08ab6f9.jpg",
    readTime: 3,
  },
  {
    id: "should-you-get-paid-to-care-for-a-family-240ed6be",
    title: "Should you get paid to care for a family member?",
    titleJa: "家族の介護のために給料を受け取るべきですか?",
    summaryJa: "家族の介護者としての仕事は、疲れるだけではありません。経済的にも壊滅的な打撃を受ける可能性があります。",
    bodyOriginal: `Serving as a family caregiver isn’t just exhausting. It can be financially devastating, as well.`,
    bodyJa: `家族の介護者としての仕事は、疲れるだけではありません。経済的にも壊滅的な打撃を受ける可能性があります。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/should-you-get-paid-to-care-for-a-family-member-70958828?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T17:56:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-59428583",
    readTime: 2,
  },
  {
    id: "netflix-woes-setting-up-for-a-hollywood-62c29f91",
    title: "Netflix woes setting up for a Hollywood ending, says trader Mike Khouw",
    titleJa: "トレーダーのマイク・クー氏が語る、ハリウッド映画のエンディングに向けたNetflixの苦境",
    summaryJa: "Netflixの株価はプロットを失ったかもしれないが、その基本的な物語はそのまま残っている。予想PERは18.9倍で取引されており、2022年の弱気相場の底値（15倍未満）近くに下がっているが、基礎となる事業が改善する一方、株価は安くなっている。ハイライト",
    bodyOriginal: `Netflix's stock price may have lost the plot, but its fundamental narrative remains intact. Trading at 18.9x forward earnings — down near its 2022 bear-market trough (<15x) — the stock has gotten cheaper while the underlying business has gotten better.
The Highlights
- Valuation: 18.9x forward earnings vs. <15x at the 2022 trough.
- Ad Growth: ~$3 billion expected this year, scaling toward a potential $10 billion by 2030.
- Option Setup: >1.5% standstill return over 25 days (>20% annualized) via a defined-risk covered strangle.
The Investment Case
When Netflix stopped highlighting subscriber adds to focus on revenue, margins, and free cash flow, growth investors departed — and value investors haven't fully arrived because legacy media like Disney (<13x) looks cheaper on paper. However, Netflix is a far superior business:
- Monetization Engine: With ~325 million paying members, Netflix offers connected TV advertisers the cleanest audience at scale. The default ad tier creates a line of sight to $10 billion in ad revenue by 2030.
- Capital Discipline & AI: Management is aggressively buying back stock rather than overpaying for legacy studio assets. Meanwhile, generative AI is a net positive: it reduces production, dubbing, and localization costs — a direct boost to margins for a company whose biggest expense is content amortization.
- Engagement: Live sports, spectacles, and AI-driven personalization directly target flatlining view times to protect pricing power.
Paying 18.9x for today's higher-margin, cash-generative Netflix is only four turns above the worst moment in its public history. That makes selling volatility far more attractive than buying shares outright.
The Trade: August 65/78/88 "Covered Strangle"
With Netflix around $70 and 25 calendar days to August expiration:
- Sell the August 65 Put and August 78 Call.
- Buy the August 88 Call (upside tail hedge).
- Net Credit: $1.10 (~1.5% yield in 25 days, or >20% annualized).
Risk Profile:
- Profitable Range: $63.90 to $79.10 (brackets ~9% downside and ~13% upside).
- Upside Risk: Capped at 10 points by the August 88 call.
- Downside Risk: If assigned below $65, your effective entry is $63.90 (~17x forward earnings)—a compelling entry price near 2022 valuation lows.`,
    bodyJa: `Netflixの株価はプロットを失ったかもしれないが、その基本的な物語はそのまま残っている。予想PERは18.9倍で取引されており、2022年の弱気相場の底値（15倍未満）近くに下がっているが、基礎となる事業が改善する一方、株価は安くなっている。
ハイライト
- バリュエーション: 予想利益は 18.9 倍、2022 年の底値は 15 倍未満。
- 広告の成長: 今年は約 30 億ドルと予想され、2030 年までに 100 億ドルに拡大する可能性があります。
- オプション設定: 定義されたリスクでカバーされた絞殺により、25 日間で >1.5% のスタンスチル リターン (年率 >20%)。
投資事例
Netflix が収益、マージン、フリー キャッシュ フローを重視するために加入者数の強調をやめたとき、グロース投資家は離れました。そして、ディズニー (13 倍未満) のようなレガシー メディアが紙の上では安く見えるため、バリュー投資家は完全に到着していません。しかし、Netflix ははるかに優れたビジネスです。
- 収益化エンジン: 約 3 億 2,500 万人の有料会員を擁する Netflix は、コネクテッド TV 広告主に大規模で最もクリーンな視聴者を提供しています。デフォルトの広告層により、2030 年までに 100 億ドルの広告収益が見込まれます。
- 資本規律と AI: 経営陣は、従来のスタジオ資産に過剰な支払いをするのではなく、積極的に株式を買い戻しています。一方、生成 AI は正味のプラスです。制作、吹き替え、ローカリゼーションのコストが削減され、コンテンツの償却が最大の出費である企業にとっては利益が直接増加します。
- エンゲージメント: ライブ スポーツ、メガネ、AI 主導のパーソナライゼーションは、価格決定力を保護するために視聴時間の平坦化を直接ターゲットにしています。
今日の利益率が高く、現金を生み出すネットフリックスの料金は 18.9 倍で、公開史上最悪の瞬間をわずか 4 ターン上回っています。そのため、株式を完全に購入するよりも、ボラティリティを売りにする方がはるかに魅力的になります。
ザ・トレード: 65/78/88 年 8 月「覆われた絞殺」
Netflix が約 70 ドルで、8 月の有効期限まで 25 暦日あります。
- 8 月 65 日のプットと 8 月 78 日のコールを売ります。
- 88 年コールを購入します (上向きテールヘッジ)。
- 純クレジット: 1.10 ドル (25 日間で最大 1.5% の利回り、または年換算で 20% 以上)。
リスクプロファイル:
- 収益範囲: $63.90 ～ $79.10 (括弧内は下値 ~9%、上値 ~13%)。
- 上方リスク: 88 年 8 月のコールまでに 10 ポイントに制限。
- 下振れリスク: 65 ドル未満に割り当てられた場合、実質エントリーは 63.90 ドル (予想利益の約 17 倍) となり、2022 年の評価額の安値に近い魅力的なエントリー価格となります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/netflix-woes-setting-up-for-a-hollywood-ending-says-trader-mike-khouw.html",
    publishedAt: "2026-07-27T17:25:45+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "consolidated-food-supply-may-be-worsenin-ed98d1f1",
    title: "Consolidated food supply may be worsening cyclospora outbreaks, experts say",
    titleJa: "食糧供給の統合がシクロスポラの発生を悪化させている可能性があると専門家が指摘",
    summaryJa: "米国で数千人を罹患させたシクロスポラの発生により、生鮮食品が国内を移動する方法の数十年にわたる変化に新たな注目が集まっている。捜査当局が元の汚染源の特定に取り組んでいる一方で、一部の食品安全専門家は、統合の波を経た業界の一元的な調達・流通ネットワークは、かつては孤立した汚染事象であった可能性のあるものを複数の州での発生に変えるのに役立つ可能性があると述べている。",
    bodyOriginal: `The cyclospora outbreak that has sickened thousands in the U.S. is drawing renewed attention to a decades-long shift in how fresh food moves through the country.
While investigators work to identify the original source of contamination, some food safety experts say the industry's centralized sourcing and distribution networks after a wave of consolidation can help turn what once may have been an isolated contamination event into a multistate outbreak.
"The general trends that have taken place in the food industry, the way in which food has been sourced and then distributed has played some role here," said Dr. David Relman, a professor of microbiology and immunology at Stanford University.
The cyclospora parasite's long incubation period, the difficulty in tracking its path and what some experts have criticized as a bumpy federal response have all played a role in the widening outbreak. Some experts say the structure of the food system has also contributed.
"It's possible that as food sourcing and distribution becomes consolidated you get pooling and then redistribution of what might have been a very local contamination problem, so that it now becomes a widely distributed contamination problem," Relman said.
Marion Nestle, professor emerita of nutrition, food studies and public health at New York University, said the shrinking of the industry has amplified the consequences when contamination occurs.
"Consolidation means that if something goes wrong, it goes wrong big time," Nestle said.
Centralized processing can further expand the reach of an outbreak, she said.
The current FDA investigation around cyclosporiasis has focused on shredded iceberg lettuce distributed through Taylor Farms' foodservice business, an ingredient that reached Taco Bell restaurants and other foodservice customers across multiple states.
Relman referenced bagged lettuce as one example of how changes in distribution could spread a foodborne illness.
"Think of the difference between one head of lettuce and a bag of chopped lettuce that may have come from many, many heads," he said. "These bags are now being produced in huge numbers and distributed in far-flung distribution networks."
Consolidation in the supply chain
The industry's evolution toward fewer distributors has been driven in part by a push for efficiency. Nestle said those improvements for businesses come with trade-offs for food safety.
"Big is not necessarily better," she said. "The bigger the supplier, the greater the opportunity for contamination."
Over the past several decades, U.S. agriculture and food distribution have steadily consolidated as companies pursue greater efficiency and national scale, according to the USDA.
For example, Taylor Farms, the salad producer under scrutiny for the recent cyclospora outbreak, has seen significant expansion through a series of acquisitions over the past decade — including Earthbound Farm in 2019, Curation Foods in 2021 and most recently Equinox Growers in March.
Meanwhile, restaurant supply has become increasingly concentrated too, with broadline distributors like Sysco, US Foods and Performance Food Group serving hundreds of thousands of restaurants and institutional kitchens nationwide.
While federal regulators blocked Sysco's proposed $8.2 billion acquisition of US Foods in 2015 on antitrust grounds, both companies have continued growing through smaller acquisitions of regional distributors and fresh produce processors.
Sysco, the nation's largest foodservice distributor, has spent the past decade expanding its fresh produce business by acquiring regional distributors including Paragon Foods in Pennsylvania, The Coastal Companies in the mid-Atlantic and Greco and Sons, a specialty food distributor with 10 distribution centers across the country.
Those deals expanded Sysco's reach in fresh-cut produce and value-added processing, allowing a larger share of restaurants to source ingredients through the same distribution network.
In 2016, US Foods acquired Freshway Foods, a fresh fruit and vegetable processor, repacker and distributor in the eastern half of the United States.
Some experts on food distribution believe having a smaller number of companies in the industry compounds issues when they arise.
But not everyone agrees that consolidation is the enemy.
Timothy Lytton, a health and safety regulation expert at Georgia State University, said larger produce growers and processors often operate with more sophisticated food safety systems than smaller farms because they have the financial resources to invest in testing, traceability, audits and quality control.
"It's not entirely clear that larger operations have more food safety problems than smaller operations," said Lytton.
In California, he added, there have been studies at farmers markets that have found fresh produce grown by small farmers have had contamination with E. coli.
"While you may have a farmer who's very concerned about the quality of the product, you also have in an organic model a more holistic idea about farming that often involves animals near crops," Lytton said. "That combination of animals and crops can create food safety problems."
Even so, Lytton acknowledged that when contamination does occur within large handler networks, the resulting recalls at the distribution level are much broader and harder to manage.
CNBC has reached out to the group of major food suppliers about safety precautions and tracing procedures. Sysco pointed CNBC to the International Foodservice Distribution Association.
"The foodservice supply chain that feeds our communities is intricate and foodservice distributors are highly skilled in tracking and tracing the food they distribute," said a spokesperson for the IFDA. "They maintain robust records, identifying the source, internal movement, and recipient of all products they handle, and they have a proven track record of providing FDA with critical traceback information within 24-48 hours to support foodborne illness outbreak investigations and swiftly remove products from commerce."
Relman stressed that while consolidation itself doesn't create contamination, it does change the consequences when contamination occurs.
"We often don't appreciate a system like the food inspection system, or the public health system in large until it fails," said Relman. "We can't keep doing that."`,
    bodyJa: `米国で数千人を罹患させたシクロスポラの発生により、生鮮食品が国内を移動する方法の数十年にわたる変化に新たな注目が集まっている。
捜査当局が元の汚染源の特定に取り組んでいる一方で、一部の食品安全専門家は、統合の波を経た業界の一元的な調達・流通ネットワークは、かつては孤立した汚染事象であった可能性のあるものを複数の州での発生に変えるのに役立つ可能性があると述べている。
スタンフォード大学の微生物学と免疫学の教授、デビッド・レルマン博士は、「食品業界で起こっている一般的な傾向、つまり食品の調達と流通方法がここで何らかの役割を果たしている」と述べた。
シクロスポラ原虫の長い潜伏期間、その経路追跡の難しさ、一部の専門家が政府の対応が不安定であると批判していることなどが、感染拡大の拡大に一因となっている。一部の専門家は、食料システムの構造も影響していると指摘する。
「食品の調達と流通が統合されると、非常に局地的な汚染問題だったものがプールされて再配分され、現在では広範囲に分散した汚染問題になっている可能性がある」とレルマン氏は述べた。
ニューヨーク大学の栄養学、食品研究、公衆衛生の名誉教授マリオン・ネスレ氏は、業界の縮小により汚染が発生した場合の影響が増幅されていると述べた。
「統合とは、何か問題が起こった場合、大きな問題が起こることを意味する」とネスレは語った。
集中処理により、アウトブレイクの範囲がさらに拡大する可能性があると彼女は述べた。
嚢胞子症に関する現在のFDAの調査は、テイラー・ファームズの食品サービス事業を通じて流通した細切りアイスバーグレタスに焦点を当てており、この食材は複数の州のタコベル・レストランやその他の食品サービスの顧客に届けられていた。
レルマン氏は、流通の変化がどのように食中毒を広める可能性があるかを示す一例として、袋詰めレタスを挙げた。
「レタス1玉と、何本も収穫されたであろう刻んだレタス1袋の違いを考えてみてください」と彼は言う。 「これらのバッグは現在、大量に生産され、遠く離れた流通ネットワークで流通しています。」
サプライチェーンの統合
流通業者の減少に向けた業界の進化は、効率化の推進によってもたらされています。ネスレは、企業にとってのこうした改善には食品の安全性とのトレードオフが伴うと述べた。
「大きいことが必ずしも良いというわけではありません」と彼女は言う。 「サプライヤーが大きければ大きいほど、汚染の可能性は高くなります。」
米国農務省によると、企業が効率性と国家規模の向上を追求する中、過去数十年にわたって米国の農業と食品流通は着実に統合されてきた。
例えば、最近のシクロスポラ発生で厳しい監視下にあるサラダ生産会社テイラー・ファームズは、2019年のアースバウンド・ファーム、2021年のキュレーション・フーズ、そして最近では3月のエクイノックス・グロワーズなど、過去10年間に一連の買収を通じて大幅な拡大を遂げてきた。
一方、レストランへの供給もますます集中しており、シスコ、USフーズ、パフォーマンス・フード・グループなどのブロードライン販売会社が全国の数十万のレストランや施設の厨房にサービスを提供している。
2015年に連邦規制当局がシスコによる82億ドルでのUSフーズ買収提案を反トラスト法を理由に阻止したが、両社は地域の流通業者や生鮮食品加工業者の小規模な買収を通じて成長を続けてきた。
米国最大の食品サービス流通業者であるシスコは、過去10年間、ペンシルベニア州のパラゴン・フーズ、大西洋中部のザ・コースタル・カンパニーズ、全米に10の流通センターを持つ特殊食品流通業者グレコ・アンド・サンズなどの地域流通業者を買収することで、生鮮食品事業を拡大してきた。
これらの取引により、シスコの生鮮農産物や付加価値加工の範囲が拡大し、より多くのレストランが同じ流通ネットワークを通じて食材を調達できるようになった。
2016 年、US Foods は、米国東半分の生鮮果物と野菜の加工、再包装、販売を行う Freshway Foods を買収しました。
食品流通の専門家の中には、業界に参加する企業の数が少ないと、問題が発生したときにさらに複雑になると考える人もいます。
しかし、統合が敵であるということに誰もが同意しているわけではない。
ジョージア州立大学の健康と安全規制の専門家ティモシー・リットン氏は、大規模な農産物生産者や加工業者は、検査、トレーサビリティ、監査、品質管理に投資する財源があるため、小規模農場よりも洗練された食品安全システムを運用していることが多いと述べた。
「大規模な事業所が小規模な事業所よりも食品安全上の問題を抱えているかどうかは完全には明らかではない」とリットン氏は述べた。
同氏はさらに、カリフォルニアでは、小規模農家が栽培した生鮮食品が大腸菌に汚染されていることがファーマーズマーケットで調査されていると付け加えた。
「製品の品質を非常に心配している農家がいるかもしれませんが、有機モデルでは、作物の近くに動物が関与することが多い農業について、より総合的な考えも持っています」とリットン氏は言う。 「動物と作物の組み合わせは、食品の安全性の問題を引き起こす可能性があります。」
それでもリットン氏は、大規模なハンドラーネットワーク内で汚染が発生した場合、その結果として流通レベルでのリコールがより広範囲に及び、管理が困難になることを認めた。
CNBCは安全上の予防措置と追跡手順について大手食品供給業者のグループと連絡を取った。 Sysco は CNBC に International Foodservice Distribution Association を指摘した。
IFDAの広報担当者は、「私たちの地域社会に食料を供給する食品サービスのサプライチェーンは複雑で、食品サービスの流通業者は、流通する食品を追跡・追跡することに高度な技術を持っている」と述べた。 「彼らは、取り扱うすべての製品の出所、内部移動、受領者を特定する堅牢な記録を維持しており、食中毒の発生調査をサポートし、商品を商業から迅速に削除するために、重要なトレースバック情報を24～48時間以内にFDAに提供した実績があります。」
レルマン氏は、統合自体は汚染を引き起こさないが、汚染が発生した場合の結果は変わると強調した。
「食品検査システムや公衆衛生システム全般のようなシステムは、破綻するまでは評価されないことが多い」とレルマン氏は語った。 「それを続けることはできません。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/cyclospora-outbreak-food-industry-consolidation.html",
    publishedAt: "2026-07-27T17:19:29+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 7,
  },
  {
    id: "cash-recovered-from-ex-nasa-scientist-tu-143bab59",
    title: "Cash recovered from ex-Nasa scientist turned scammer",
    titleJa: "NASAの元科学者から詐欺師に転身した現金を回収",
    summaryJa: "NASAの元科学者から詐欺師に転身した現金を回収- 公開されました",
    bodyOriginal: `Cash recovered from ex-Nasa scientist turned scammer
- Published
Investors who were defrauded out of more than £1m by a former Nasa scientist will get most of their money back.
John Burford, from Mansfield in Nottinghamshire, admitted defrauding 100 investors and was sentenced to two years in prison in 2025.
Despite not being authorised to, Burford had offered trade alerts and investment opportunities in "managed funds" through his firm Financial Trading Strategies between 2016 and 2021.
At a hearing at Southwark Crown Court on Monday, the 86-year-old was ordered to pay £655,951.40 after the Financial Conduct Authority (FCA) obtained a confiscation order against him.
Burford has a PhD in physics from the University of Toronto and worked for Nasa in its manned Mars exploration team based in Washington D.C. before moving into finance, according to his author biography on a publisher's website.
The FCA said Westminster Magistrates' Court heard he had generated more than £1m through his illegal investment schemes but only traded £760,000, most of which was lost.
Substantial amounts of money investors sent him were actually used to buy a house, a court heard in June 2025.
The FCA said he repeatedly misled investors about fund performance, concealed losses and used their money for personal gain.
The regulator said the payout ordered against Burford is the total value of assets the court found could still be recovered and returned directly to his victims.
It said the payments, together with previous payments from Burford to investors, means an estimated 99% of the money originally invested by the roughly 70 known victims will have been returned.
Steve Smart, executive director of enforcement and market oversight at the FCA, said: "Mr Burford scammed investors to fund his own lavish lifestyle.
"Clawing back stolen money from fraudsters and returning it to victims sends a clear message that crime doesn't pay."
Get in touch
Tell us which stories we should cover in Nottingham
Listen to BBC Radio Nottingham on Sounds and follow BBC Nottingham on Facebook, external, on X, external, or on Instagram, external. Send your story ideas to eastmidsnews@bbc.co.uk, external or via WhatsApp, external on 0808 100 2210.
Related topics
- Published8 September 2025
- Published27 June 2025`,
    bodyJa: `NASAの元科学者から詐欺師に転身した現金を回収
- 公開されました
元NASAの科学者に100万ポンド以上を騙し取られた投資家は、資金の大半を取り戻すことになる。
ノッティンガムシャーのマンスフィールド出身のジョン・バーフォードは、100人の投資家を騙したことを認め、2025年に懲役2年の判決を受けた。
バーフォード氏は権限がなかったにもかかわらず、2016年から2021年にかけて自身の会社ファイナンシャル・トレーディング・ストラテジーズを通じて取引警告や「管理ファンド」への投資機会を提供していた。
月曜日にサザーククラウン裁判所で行われた公聴会では、金融行為監視機構（FCA）が同氏に対する没収命令を取得したことを受け、86歳の同氏に65万5,951.40ポンドの支払いを命じられた。
出版社のウェブサイトに掲載された著者略歴によると、バーフォード氏はトロント大学で物理学の博士号を取得し、金融業界に移る前はワシントンD.C.に拠点を置くNASAの有人火星探査チームで働いていた。
FCAによると、ウェストミンスター治安判事裁判所は、同氏が違法投資スキームを通じて100万ポンド以上を稼いだが、取引額は76万ポンドのみで、そのほとんどが失われたとの審理を行ったと述べた。
投資家が彼に送った多額の資金は実際に住宅の購入に使用されたと、2025年6月に裁判所が審理した。
FCAは、同氏がファンドのパフォーマンスについて繰り返し投資家に誤解を与え、損失を隠し、個人的な利益のために資金を使用したと主張した。
規制当局は、バーフォード氏に対して命じられた支払い額は、裁判所がまだ回収でき、被害者に直接返還できると判断した資産の総額であると述べた。
この支払いは、バーフォードから投資家への以前の支払いと合わせて、判明している約70人の被害者が当初投資した資金の推定99％が返還されることを意味すると述べた。
FCAの執行・市場監督担当エグゼクティブディレクター、スティーブ・スマート氏は「バーフォード氏は自分の贅沢なライフスタイルに資金を提供するために投資家をだましていた。
「詐欺師から盗まれた金を取り戻し、被害者に返すことは、犯罪は報われないという明確なメッセージを送ることになる。」
連絡する
ノッティンガムで取り上げるべきストーリーを教えてください
サウンドで BBC ラジオ ノッティンガムを聴き、Facebook (外部)、X (外部)、または Instagram (外部) で BBC ノッティンガムをフォローしてください。ストーリーのアイデアを eastmidsnews@bbc.co.uk (外部) または WhatsApp (外部 (0808 100 2210) 経由) に送信してください。
関連トピック
- 2025 年 9 月 8 日公開
- 2025 年 6 月 27 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj4k2x2qprwo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T16:00:49+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ef94/live/4fb9c1a0-89d1-11f1-8d60-2d725522f827.jpg",
    readTime: 3,
  },
  {
    id: "do-i-need-to-hire-a-broker-to-find-an-ap-fd1daa8e",
    title: "Do I need to hire a broker to find an apartment in New York City?",
    titleJa: "ニューヨーク市でアパートを探すにはブローカーを雇う必要がありますか?",
    summaryJa: "「もしかしたら、一部のアパートは賃貸に出されていないか、ブローカーを利用している人たちによって募集されているのかもしれません。」",
    bodyOriginal: `“Maybe some apartments are not being listed for rent or are being snapped up by people who are using brokers.”`,
    bodyJa: `「もしかしたら、一部のアパートは賃貸に出されていないか、ブローカーを利用している人たちによって募集されているのかもしれません。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/do-i-need-to-hire-a-broker-to-find-an-apartment-in-new-york-city-f5f9cf34?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T14:51:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-66838451",
    readTime: 2,
  },
  {
    id: "sam-altman-to-meet-with-trump-administra-e93a03a6",
    title: "Sam Altman to meet with Trump administration, Senators this week. Here's what he plans to say",
    titleJa: "サム・アルトマン氏は今週、トランプ政権の上院議員と会談する予定。彼が言おうとしていることは次のとおりです",
    summaryJa: "OpenAIの最高経営責任者（CEO）サム・アルトマン氏が今週、ワシントンD.C.でトランプ政権の高官、議員、経済学者らと会談し、同社の今後の人工知能モデルファミリーの機能をプレビューする予定であるとCNBCが報じた。アルトマン氏は今年も国会議事堂に定期的に出席し、急速に進歩するテクノロジーに対する政策立案者の懸念を軽減し、規制がどうあるべきかについての意見形成を支援しようと努めている。",
    bodyOriginal: `OpenAI CEO Sam Altman will meet with senior Trump administration officials, lawmakers and economists in Washington, D.C., this week to preview the capabilities of the company's upcoming family of artificial intelligence models, CNBC has learned.
Altman has maintained a regular presence on Capitol Hill this year as he's tried to alleviate policymakers' concerns about the rapidly advancing technology and help shape their views about what regulation should look like.
This visit lands during a particularly sensitive moment for AI development in the U.S., as a debate over whether to restrict Chinese open-weight AI models has ripped through Silicon Valley.
In addition to previewing OpenAI's upcoming releases, Altman is expected to field questions from policymakers about cybersecurity and the company's stance on open-weight models, according to a source familiar with the plans who asked not to be named because the details are confidential.
Open-weight AI models are available for users to download, modify and run on their own infrastructure. In recent weeks, Chinese open-weight models from startups like Moonshot AI have rapidly caught up with leading, proprietary offerings from American companies, including OpenAI and its chief rival, Anthropic, sparking anxiety about the durability of the U.S. lead in the AI race.
Officials and executives have been weighing whether or not to limit access to Chinese models in the U.S., which prompted a coalition of tech companies, including Nvidia, Microsoft, Meta and Palantir, to release a letter on Friday urging policymakers to avoid "premature restrictions" on open-weight models.
OpenAI signed the letter after it was initially published, but the company's allies have lobbied for restrictions on open-weight models, according to a report from The New York Times. Anthropic still has not signed or made an official comment about its position.
Altman will also likely address the "unprecedented cyber incident" that OpenAI disclosed earlier this month, which rattled researchers and executives across the tech sector.
The company said its models escaped a sandboxed testing environment, accessed the internet and exploited a vulnerability to gain entry to another company's systems. The models were trying to find information that they could use to cheat on an evaluation, and they succeeded, OpenAI said.
The company that was breached, Hugging Face, operates an open-source developer platform. Hugging Face shared that an autonomous AI agent system breached part of its production infrastructure prior to revealing OpenAI's involvement.
AI companies, including OpenAI, have been warning about the technology's advancing cyber capabilities, particularly since Anthropic released a model called Claude Mythos Preview in April. Following the incident, OpenAI said that AI is accelerating the discovery and exploitation of vulnerabilities, which means model security and safety need to keep up.
The company said it is working to strengthen its "containment, monitoring, access controls, and evaluation practices used during model development," and it's conducting a "thorough investigation" of the incident, according to a release.
The hacking incident showed how powerful and resourceful autonomous AI agents have become.
While in D.C., Altman is also expected to discuss the evolution of AI agents and their impact on worker productivity, the person said. He will explain the concept of "AI teams," where multiple agents work together to carry out long-term tasks.
WATCH: OpenAI model goes rogue: Here’s what you need to know`,
    bodyJa: `OpenAIの最高経営責任者（CEO）サム・アルトマン氏が今週、ワシントンD.C.でトランプ政権の高官、議員、経済学者らと会談し、同社の今後の人工知能モデルファミリーの機能をプレビューする予定であるとCNBCが報じた。
アルトマン氏は今年も国会議事堂に定期的に出席し、急速に進歩するテクノロジーに対する政策立案者の懸念を軽減し、規制がどうあるべきかについての意見形成を支援しようと努めている。
中国の無差別AIモデルを制限すべきかどうかをめぐる議論がシリコンバレーに広がっている中、今回の訪問は米国のAI開発にとって特に敏感な時期に到来した。
詳細は機密事項であるため匿名を条件に計画に詳しい関係者によると、アルトマン氏はOpenAIの今後のリリースのプレビューに加え、サイバーセキュリティや無差別モデルに対する同社のスタンスに関する政策立案者からの質問に答える予定だという。
オープンウェイト AI モデルは、ユーザーがダウンロード、変更し、独自のインフラストラクチャ上で実行することができます。ここ数週間、Moonshot AIなどの新興企業による中国の無差別級モデルが、OpenAIやその最大のライバルであるAnthropicなど、米国企業の主要な独自製品に急速に追いつき、AI競争における米国のリードの持続性について不安を引き起こしている。
当局者や幹部らは米国内で中国製モデルへのアクセスを制限するか否かを検討しており、これを受けてエヌビディア、マイクロソフト、メタ、パランティアを含むハイテク企業連合は金曜日、政策立案者に対し無差別級モデルへの「時期尚早な制限」を回避するよう求める書簡を発表した。
ニューヨーク・タイムズの報道によると、OpenAIはこの書簡が最初に公開された後に署名したが、同社の同盟国は無差別級モデルの制限を求めるロビー活動を行っているという。 Anthropic はまだその立場について署名も公式コメントも出していない。
アルトマン氏はまた、OpenAIが今月初めに明らかにし、テクノロジー業界全体の研究者や幹部らを動揺させた「前例のないサイバーインシデント」についても取り上げる可能性が高い。
同社は、自社のモデルがサンドボックス化されたテスト環境から逃れ、インターネットにアクセスし、脆弱性を悪用して他社のシステムに侵入したと述べた。 OpenAIによると、モデルは評価を不正にするために使用できる情報を見つけようとしていたが、成功したという。
侵害された企業、Hugging Face は、オープンソースの開発者プラットフォームを運営しています。ハギング・フェイス氏は、OpenAIの関与が明らかになる前に、自律型AIエージェント・システムが本番インフラストラクチャの一部に侵入したと共有した。
OpenAIを含むAI企業は、特にAnthropicが4月にClaude Mythos Previewと呼ばれるモデルをリリースして以来、このテクノロジーの進歩するサイバー機能について警告している。この事件を受けてOpenAIは、AIによる脆弱性の発見と悪用が加速しているため、モデルのセキュリティと安全性も追いつく必要があると述べた。
リリースによると、同社は「モデル開発中に使用される封じ込め、監視、アクセス制御、評価慣行」の強化に取り組んでおり、インシデントの「徹底した調査」を実施していると述べた。
このハッキング事件は、自律型 AI エージェントがいかに強力で機知に富んだものになっているかを示しました。
同関係者によると、アルトマン氏はワシントンDCにいる間、AIエージェントの進化とそれが労働者の生産性に及ぼす影響についても話し合う予定だという。複数のエージェントが連携して長期的なタスクを実行する「AI チーム」の概念について説明します。
注目: OpenAI モデルが不正に陥る: 知っておくべきことは次のとおりです`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/altman-trump-china-open-weight-ai.html",
    publishedAt: "2026-07-27T14:33:10+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "oil-price-dives-as-us-and-iran-pause-att-de2200bc",
    title: "Oil price dives as US and Iran pause attacks",
    titleJa: "米国とイランが攻撃を一時停止する中、原油価格が急落",
    summaryJa: "米国とイランが攻撃を一時停止する中、原油価格が急落- 公開されました",
    bodyOriginal: `Oil price dives as US and Iran pause attacks
- Published
The price of oil has fallen sharply on hopes that a pause in attacks between the US and Iran could help to de-escalate the conflict.
Brent crude, the global benchmark for oil, sank more than 9% to $87.59 a barrel at one point, marking a sharp turnaround from last week when it had risen above $100.
The fall came after the US ambassador to the UN said attacks on Iran had been halted for a second night in a row to give "talks some space".
An Iranian army spokesperson said on Sunday that Tehran had halted "retaliatory" attacks in the region in response.
The outbreak of the Iran war triggered a sharp rise in oil prices as the conflict led to the effective closure of the Strait of Hormuz, a key shipping route which usually carries about 20% of the world's oil and liquefied natural gas (LNG).
When Iran and the US signed a memorandum of understanding in June to halt military operations and reopen the strait, the price of oil fell back to pre-war levels of around $70 a barrel.
However, the collapse of the ceasefire earlier this month reignited fears over global energy supplies and pushed the oil price back up.
Last week it hit $100 a barrel for the first time since May, with added concerns coming after Houthi militia in Yemen attacked oil tankers in the Red Sea, threatening a key export route that Saudi Arabia had used to bypass the Strait of Hormuz.
By Monday afternoon, the price of Brent stood at $90.60 a barrel, down more than 6% for the day.
Susannah Streeter, chief investment strategist at Wealth Club, said markets were remaining "cautious given the twists and turns during this conflict".
Despite the sharp fall in crude, "there is still significant uncertainty baked into these prices and a reticence about whether negotiations will lead to a lasting breakthrough," she added.
The conflict between the US and Iran - and its impact on oil - has pushed up the cost of fuel such as petrol and diesel in many countries.
This often has knock-on effects on other prices, such as food, as businesses pass on the higher costs they are facing to customers, and this can push up the rate of inflation.
Higher inflation raises the possibility that central banks will increase interest rates in an attempt to keep price rises under control.
In June, the European Central Bank opted to lift its key interest rate for the eurozone for the first time in almost three years, noting that the conflict was "generating inflation pressures".
Before the Iran war began, there had been expectations that the Bank of England would cut rates this year.
However, no cuts are now expected and financial markets are currently predicting a rate rise towards the end of the year.
The Bank of England holds its latest interest rate-setting meeting this week, when it is expected to keep its key rate unchanged at 3.75%.`,
    bodyJa: `米国とイランが攻撃を一時停止する中、原油価格が急落
- 公開されました
米国とイラン間の攻撃の一時停止が紛争の沈静化につながるのではないかとの期待から、原油価格が急落した。
世界の原油指標であるブレント原油は一時１バレル＝８７．５９ドルまで９％以上下落し、１００ドルを超えて上昇した先週から急転直下した。
この下落は、米国の国連大使が「協議に一定のスペースを与える」ため、イランへの攻撃を２夜連続で停止したと述べた後に起きた。
イラン軍報道官は日曜、イラン政府がこれに応じて地域での「報復」攻撃を停止したと述べた。
イラン戦争の勃発は、通常、世界の石油と液化天然ガス（LNG）の約20％を輸送する重要な輸送ルートであるホルムズ海峡の事実上の閉鎖につながり、原油価格の急騰を引き起こした。
イランと米国が６月に軍事作戦を停止し、海峡を再開する覚書に署名すると、原油価格は１バレル＝７０ドル程度の戦前の水準にまで下がった。
しかし、今月初めの停戦崩壊により世界のエネルギー供給に対する懸念が再燃し、原油価格が再び上昇した。
先週、5月以来初めて1バレル＝100ドルに達したが、イエメンのフーシ派民兵組織が紅海で石油タンカーを攻撃し、サウジアラビアがホルムズ海峡を迂回するために利用していた重要な輸出ルートを脅かしたことでさらなる懸念が生じた。
月曜午後までにブレント原油価格は１バレル＝９０．６０ドルとなり、この日は６％以上下落した。
ウェルス・クラブの首席投資ストラテジスト、スザンナ・ストリーター氏は、市場は「この紛争中の紆余曲折を考慮し」引き続き警戒していると述べた。
原油価格の急落にもかかわらず、「価格には依然として大きな不確実性が組み込まれており、交渉が永続的な打開につながるかどうかについて消極的だ」と同氏は付け加えた。
米国とイランの紛争とその石油への影響により、多くの国でガソリンやディーゼルなどの燃料価格が高騰している。
企業が直面している高いコストを顧客に転嫁するため、これは食品など他の価格にも波及効果をもたらし、インフレ率を押し上げる可能性があります。
インフレ率の上昇により、中央銀行が物価上昇を抑制するために金利を引き上げる可能性が高まります。
欧州中央銀行は6月、紛争が「インフレ圧力を生み出している」と指摘し、ほぼ3年ぶりにユーロ圏の主要金利を引き上げることを選択した。
イラン戦争が始まる前は、イングランド銀行が今年利下げするとの期待があった。
しかし、現時点では利下げは見込まれておらず、金融市場は現在、年末に向けて利上げを予想している。
イングランド銀行は今週最新の金利決定会合を開き、主要政策金利を3.75％に据え置くと予想されている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyj834jn5lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T14:22:24+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/92a8/live/d2b46450-89a6-11f1-a85a-79136c2d298e.jpg",
    readTime: 3,
  },
  {
    id: "businessman-and-philanthropist-sir-ian-w-0397e264",
    title: "Businessman and philanthropist Sir Ian Wood dies aged 84",
    titleJa: "実業家で慈善家のサー・イアン・ウッド氏が84歳で死去",
    summaryJa: "実業家で慈善家のサー・イアン・ウッド氏が84歳で死去- 公開されました",
    bodyOriginal: `Businessman and philanthropist Sir Ian Wood dies aged 84
- Published
The Aberdeen-based businessman and philanthropist Sir Ian Wood has died aged 84, his family has announced.
Sir Ian was one of the UK oil and gas industry's most respected leaders, who turned his family's fishing boat repair yard into a global engineering player in the North Sea and internationally.
He retired as chief executive in 2006 and a year later began concentrating on his charitable work, creating The Wood Foundation, which works on social and economic inequality, especially in Scotland and sub-Saharan Africa
His family said he died peacefully at home and they would remember his "kindness, generosity, determination and unwavering commitment to his family."
Sir Ian was one of Scotland's wealthiest people, with a personal worth estimated at £1.8bn.
Wood Group started as a family fishing business before Sir Ian took over in 1967.
Over the next decades, he formed a separate engineering company servicing the rapidly-growing North Sea oil business.
At its height, the Wood Group was valued at more than £5bn, carrying out work in the energy industry around the world. It went public in 2002 and was sold to a Dubai company last year.
Sir Ian, who retired as chairman of the group in 2012, was knighted in 1994 for services to the oil and gas industry and was later made a member of the Order of the Thistle, Scotland's highest order of chivalry.
Wood takeover - good news or another loss for Scottish business?
- Published15 April 2025
Engineering giant Wood opens door to takeover bid
- Published17 April 2023
Sir Ian's philanthropic work was carried out through the Wood Foundation, which he founded in 2007.
It is involved in a number of investments and charitable work around agriculture and conservation in east Africa, as well as projects in Scotland.
He was married to Helen for 55 years, was father to Nic, Graham and Garreth, and a grandfather of seven children.
The statement from Sir Ian's family said: "Sir Ian was a devoted husband, father, grandfather and friend.
"While many knew him as an entrepreneur, philanthropist and one of Scotland's most influential business leaders, those closest to him will remember above all his kindness, generosity, determination and unwavering commitment to his family."
First Minister John Swinney paid tribute to Sir Ian, describing him as one of Scotland's "most influential business leaders and philanthropists, a figure whose vision, determination and generosity have left a lasting mark on the nation and far beyond."
He said: "Through his leadership of Wood Group, he helped transform a modest family business into a global energy services company, playing a pivotal role in the growth of the North Sea oil and gas industry and establishing Scotland as a world-renowned centre of energy expertise.
He paid tribute to Sir Ian's "devotion" to his home city of Aberdeen, adding the businessman had championed "initiatives that have strengthened the North East of Scotland and supported the evolution of the region's economy through his tireless advocacy for economic development, innovation and opportunity."
Swinney also praised his work on the transition to a lower-carbon future, and his philanthropic work.
"Sir Ian Wood's legacy is one of enterprise, leadership and generosity. He has helped shape modern Scotland, strengthened its economy, advanced its energy industry and demonstrated the profound difference that purposeful philanthropy can make," he said.
'A giant of Scottish business'
Scottish Secretary Douglas Alexander described Sir Ian as "one of Scotland's finest sons".
"Ian was a giant of Scottish business, philanthropy and society. A proud son of Aberdeen, he was a tireless advocate for the Granite City and its people," he said.
"Personally, it was a privilege to be able to know him, work with him on his philanthropic endeavours, and like so many Scots, I mourn his passing.
"My thoughts today are with Lady Helen, Nicholas, Graham, Garreth and the whole family for whom his loss will be most keenly felt."
Scottish Conservative MP for Aberdeen South, Douglas Lumsden, said:
"Scotland has lost a true guiding light of its business community. Sir Ian was a champion of everything North East, both as a paragon of its economy but also as a philanthropist who did so much good at home and abroad.
"He and his workers around the world forged an international reputation for excellence in energy.
"The Wood name also meant a helping hand to communities, wherever it went."
David Whitehouse, chief executive of Offshore Energies UK, described Sir Ian as "one of the defining figures of the North Sea oil and gas industry".
He praised his work in leading the 2013 Wood Review, which led to the creation of the North Sea Transition Authority.
Whitehouse added: "Sir Ian transformed his family's fishing business into a global engineering player as well as establishing Scotland as a world-renowned centre of energy expertise.
"The offshore energy sector we know today would be very different without Sir Ian's vision, leadership and persistence."
Sir Ian was born in Aberdeen in 1942, the middle child of John and Margaret Wood.
He was educated at Robert Gordon's College, later graduating from the University of Aberdeen with a first-class honours degree in psychology in 1964.
He played rugby with the North & Midlands District XV, including in a match against the All Blacks at Pittodrie Stadium in 1972.
Following graduation, Sir Ian joined the family fishing and marine engineering business, becoming managing director of John Wood and Son.
He continued as Chairman of the legacy business, the Don Fishing Company Ltd, until his death.
He remained interested in the oil and gas business after standing down from the Wood Group, and in 2014 intervened in the Scottish referendum debate, questioning some of the assumptions being made about oil and gas revenues.
Sir Ian supported the move to transitioning from oil and gas to renewables energy but also warned that the UK had to keep drilling for new oil in the North Sea.`,
    bodyJa: `実業家で慈善家のサー・イアン・ウッド氏が84歳で死去
- 公開されました
アバディーンを拠点とする実業家で慈善家のサー・イアン・ウッド氏が84歳で死去したと遺族が発表した。
サー・イアンは英国の石油・ガス業界で最も尊敬されるリーダーの一人で、家族が経営していた漁船修理工場を北海および国際的に世界的なエンジニアリング企業に変えました。
彼は 2006 年に最高経営責任者を退任し、その 1 年後に慈善活動に集中し始め、特にスコットランドとサハラ以南アフリカの社会的および経済的不平等に取り組むウッド財団を設立しました。
家族は、彼が自宅で安らかに息を引き取り、彼の「優しさ、寛大さ、決意、そして家族に対する揺るぎない献身」を思い出すだろうと述べた。
サー・イアンはスコットランドで最も裕福な人物の一人で、個人資産は18億ポンドと推定されていた。
Wood Group は、1967 年にサー・イアンが引き継ぐ前に家族経営の漁業事業としてスタートしました。
その後数十年にわたって、彼は急成長する北海石油ビジネスにサービスを提供する別のエンジニアリング会社を設立しました。
最盛期には、Wood Group の価値は 50 億ポンドを超え、世界中のエネルギー産業で事業を展開していました。 2002年に上場し、昨年ドバイの企業に売却された。
2012年に同グループの会長を退任したサー・イアン氏は、石油・ガス業界への功績により1994年にナイト爵位を授けられ、後にスコットランド最高騎士団であるシスル騎士団の会員となった。
木材買収 - スコットランドのビジネスにとって朗報か、それとも新たな損失か?
- 2025 年 4 月 15 日公開
エンジニアリング大手ウッドが株式公開買い付けへの扉を開く
- 2023 年 4 月 17 日公開
サー・イアンの慈善活動は、2007 年に設立されたウッド財団を通じて行われました。
同社は、スコットランドのプロジェクトだけでなく、東アフリカの農業と自然保護に関する多くの投資や慈善活動にも取り組んでいます。
彼はヘレンと55年間結婚し、ニック、グラハム、ギャレスの父親であり、7人の子供の祖父でした。
サー・イアンの家族は声明で「サー・イアンは献身的な夫であり、父親であり、祖父であり、友人でした。
「多くの人が彼を起業家、慈善家、そしてスコットランドで最も影響力のあるビジネスリーダーの一人として知っていましたが、彼に親しい人たちは何よりも彼の優しさ、寛大さ、決意、そして家族に対する揺るぎない献身的な姿勢を覚えているでしょう。」
ジョン・スウィニー首相はサー・イアンに敬意を表し、彼を「スコットランドで最も影響力のあるビジネスリーダーであり慈善家であり、そのビジョン、決意、寛大さが国だけでなく遠くに永続的な足跡を残した人物」であると述べた。
同氏は、「ウッド・グループのリーダーシップを通じて、小規模な家族経営の企業を世界的なエネルギーサービス会社に変革することに貢献し、北海の石油・ガス産業の成長において極めて重要な役割を果たし、スコットランドを世界的に有名なエネルギー専門知識の中心地として確立した。
同氏はサー・イアンの故郷アバディーンに対する「献身」に敬意を表し、実業家は「経済発展、革新、機会に対するたゆまぬ擁護を通じてスコットランド北東部を強化し、地域経済の発展を支援する取り組み」を擁護してきたと付け加えた。
スウィニー氏はまた、低炭素の未来への移行に関する彼の取り組みと慈善活動を称賛した。
「サー・イアン・ウッドの遺産は、進取の気性、リーダーシップ、寛大さの一つです。彼は現代スコットランドの形成に貢献し、経済を強化し、エネルギー産業を発展させ、目的を持った慈善活動がもたらす大きな違いを実証してきました」と彼は述べた。
「スコットランドビジネスの巨人」
スコットランド長官のダグラス・アレクサンダーは、サー・イアンを「スコットランドの最も優れた息子の一人」と評した。
「イアンはスコットランドのビジネス、慈善活動、そして社会の巨人でした。アバディーンの誇り高き息子であり、グラナイトシティとその人々のたゆまぬ代弁者でした」と彼は語った。
「個人的には、彼を知り、慈善活動に協力できたことは光栄でした。多くのスコットランド人同様、私も彼の死を悼みます。
「今日の私の思いは、レディ・ヘレン、ニコラス、グラハム、ギャレス、そして彼の死を最も痛感しているであろう家族全員のことです。」
アバディーン南部のスコットランド保守党議員、ダグラス・ラムズデンは次のように述べた。
「スコットランドはビジネス界の真の指針を失った。サー・イアンは、東北経済の模範としてだけでなく、国内外で多くの功績を残した慈善家としても、北東部のすべての擁護者でした。
「彼と世界中の従業員は、エネルギー分野における卓越性に対する国際的な評判を築き上げました。
「ウッドという名前は、どこへ行っても地域社会への救いの手を意味するものでした。」
英国オフショア・エナジーズの最高経営責任者、デビッド・ホワイトハウス氏は、サー・イアンを「北海の石油・ガス産業を決定づける人物の一人」と評した。
同氏は、北海移行局の創設につながった2013年の木材レビューを主導した功績を称賛した。
ホワイトハウス氏はさらに、「イアン卿は家族の漁業事業を世界的なエンジニアリング企業に変え、またスコットランドをエネルギー専門知識の世界的に有名な中心地として確立した。
「サー・イアンのビジョン、リーダーシップ、粘り強さがなければ、私たちが今日知っている海洋エネルギー部門は大きく変わっていたでしょう。」
サー・イアンは、ジョン・ウッドとマーガレット・ウッドの真ん中の子供として、1942年にアバディーンで生まれました。
彼はロバート・ゴードン大学で教育を受け、その後 1964 年に心理学の第一級優等学位を取得してアバディーン大学を卒業しました。
彼は、1972 年にピットドリー スタジアムで行われたオール ブラックスとの試合を含め、ノース & ミッドランズ地区第 15 部でラグビーをプレーしました。
卒業後、サー・イアンは家業の漁業および海洋エンジニアリング事業に加わり、ジョン・ウッド・アンド・サン社の常務取締役に就任しました。
彼は亡くなるまで、伝統的なビジネスであるドン・フィッシング・カンパニー・リミテッドの会長を務め続けました。
同氏はウッド・グループを辞めた後も石油・ガス事業に関心を持ち続け、2014年にはスコットランドの住民投票の議論に介入し、石油・ガス収入に関する前提の一部に疑問を呈した。
イアン卿は石油とガスから再生可能エネルギーへの移行を支持したが、英国は北海で新たな石油の掘削を続けなければならないとも警告した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce3qv0p9105o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T14:17:56+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1f7f/live/39e43050-899e-11f1-8c68-81d45f5a03af.jpg",
    readTime: 7,
  },
  {
    id: "how-wildfires-in-france-and-spain-might-6a3452f8",
    title: "How wildfires in France and Spain might affect your travel plans",
    titleJa: "フランスとスペインの山火事が旅行計画に与える影響",
    summaryJa: "フランスとスペインの山火事が旅行計画に与える影響- 公開されました",
    bodyOriginal: `How wildfires in France and Spain might affect your travel plans
- Published
Wildfires in Spain and France have caused mass evacuation and disruption, with more than 300,000 people forced to leave their homes and many sleeping in sports halls and other temporary shelters.
An official from one of the French departments affected by the fires has pleaded with visitors to stay away.
On Sunday, Sophie Brocas, prefect of the French department of Gironde, said, "I urge tourists not to come," while advising those already there to consider an alternative destination.
For those who have upcoming holidays to the affected regions, here is what you should know about how it might impact your plans.
Should I travel to France or Spain right now?
The UK government has not specifically warned against travel to anywhere in France or Spain, but it does advise caution.
In France, it says access to affected areas may be restricted and roads may close at short notice. It adds that further evacuations may take place.
It has also issued a general warning about the high risk of wildfires in France during the summer season from April to October.
For those in an affected area in France or Spain or planning to travel there, the UK government recommends following instructions and updates from local authorities and emergency services at all times.
Those needing emergency help in France or Spain can call 112.
Travellers should also bear in mind the UK government's advice can and does change in response to moving events.
Anna-Marie Duthie, travel insurance expert at financial rating firm Defaqto, says that if this happens after you have booked your trip, "you may be covered for cancellation or curtailment".
"You may also be covered for additional travel and accommodation costs should your trip be disrupted due to a catastrophic event, if your insurer offers this cover or you've paid to include it," she adds.
To know if this applies to you, check your policy.
Where are the wildfires burning?
The UK government says parts of Gironde and Landes in the south west of France are affected.
The official French wildfire map gives Gironde and Pyrénées-Orientales its highest fire alert level. Meanwhile, Aude and Var have its second highest alert level.
As of Monday, the map says there are more than 20 fires burning across the country, including on Corsica.
In Spain, authorities have declared a national emergency because of wildfires in parts of Madrid and Ávila. The UK government says there are also reports of wildfires in other inland areas of Spain.
Does travel insurance cover wildfires?
Once again, the answer depends on your policy.
"If your travel plans are disrupted by a wildfire and your policy includes trip disruption cover then travel insurance may cover some of the resulting costs," says Chris Bose, director of general insurance policy at the Association of British Insurers (ABI).
However, only half of travel insurance policies have "catastrophe" cover, according to analysis from Defaqto.
This means that, in many cases, travellers might not be covered by their insurance in the case of wildfires.
To know if this does or does not apply to you, speak to your insurer or check the wording of your policy.
What should I do if my airline or accommodation cancels my booking?
In the case of cancelled flights or accommodation, Bose recommends seeking refunds from your airline, tour operator or accommodation provider in the first instance.
Duthie says if your airline cancels your flight due to wildfires then "they should offer you the chance to rebook, or provide a full refund".
She says if your holiday was booked as a package then this refund should cover "all elements", including flights, accommodation and transfers.
"But if you've booked everything separately, you'll need to deal with each provider independently. Your airline may refund your flight, but your accommodation provider may not if the property is unaffected."
Should I just cancel my trip now?
Check what your insurance policy says about flights, accommodation or trip bookings first.
Rory Boland, editor of Which? Travel, says this is especially true for those not due to travel in the next week or two.
"Travellers who cancel now will likely forfeit their right to a refund or rebooking," he says.
As the UK government has not warned against travel to anywhere in the two countries, he says travellers are "unlikely to be able to claim on their travel insurance".
"As a rule, insurance firms won't make allowances for 'disinclination to travel'," Boland says.
"Instead, holidaymakers should wait until closer to the departure date to see if the holiday can go ahead or what flexible booking options are offered from the tour operator or airline.
"Travel companies will be prioritising anyone due to depart in the next couple of days."
How will climate change affect travel insurance in the future?
The amount of land burned by wildfires across Europe has increased by 57% since summer 2022, according to the World Health Organization.
It adds that climate change is intensifying wildfires and increasing their frequency.
Duthie says insurance firms are adapting to "potential new and increasing risks involved in travel as a result".
In the near term, she says it is unlikely insurance providers will change their policies.
"Current clauses may refer to 'severe' or 'extreme' weather, but the definitions for these can vary and currently no providers go as far as to specify criteria such as maximum temperatures."
However, she says that "longer term there is a chance that we may end up seeing less insurable destinations and increased premiums".
Get in touch
Are you affected by issues discussed in this story? Do you have any questions?
Related topics
- Published3 hours ago
- Published3 hours ago`,
    bodyJa: `フランスとスペインの山火事が旅行計画に与える影響
- 公開されました
スペインとフランスの山火事は大規模な避難と混乱を引き起こし、30万人以上が家を追われ、多くが体育館やその他の一時避難所で眠っている。
火災の被害を受けたフランスの県の当局者は訪問者に対し、近づかないように訴えた。
日曜日、フランス・ジロンド県のソフィー・ブロカス知事は「観光客には来ないよう勧める」と述べ、すでにそこを訪れている人々には別の目的地を検討するようアドバイスした。
影響を受けた地域への休暇を予定している人のために、計画にどのような影響を与える可能性があるかについて知っておくべきことをここに示します。
今すぐフランスかスペインに旅行すべきでしょうか?
英国政府はフランスやスペインへの旅行に対して特に警告はしていないが、注意を呼び掛けている。
フランスでは影響を受けた地域への立ち入りが制限され、道路が急遽閉鎖される可能性があるとしている。さらに避難が行われる可能性もあると付け加えた。
また、フランスでは4月から10月までの夏季に山火事が発生する危険性が高いことについて、一般的な警告も発令した。
フランスまたはスペインの影響を受けた地域にいる人、またはそこへの旅行を計画している人に対して、英国政府は常に地元当局や緊急サービスからの指示や最新情報に従うことを推奨しています。
フランスまたはスペインで緊急援助が必要な場合は、112 に電話してください。
旅行者はまた、英国政府のアドバイスが感動的な出来事に応じて変更される可能性があり、実際に変更される可能性があることにも留意する必要があります。
金融格付け会社デファクトの旅行保険専門家、アンナ・マリー・ダシー氏は、旅行の予約後にこのような事態が発生した場合、「キャンセルや旅行の制限が補償される可能性がある」と話す。
「保険会社がこの補償を提供しているか、保険金を払って補償を含めている場合、大惨事により旅行が中断された場合、追加の旅費と宿泊費も補償される可能性があります」と彼女は付け加えた。
これがあなたに当てはまるかどうかを知るには、ポリシーを確認してください。
山火事はどこで燃えているのでしょうか？
英国政府は、フランス南西部のジロンド県とランド県の一部が影響を受けていると発表した。
フランスの公式山火事地図では、ジロンド州とピレネー＝オリアンタル州に最高の火災警戒レベルが与えられています。一方、オードとヴァールは2番目に高い警戒レベルとなっている。
月曜日の時点で、地図によると、コルシカ島を含む国中で20以上の火災が発生している。
スペインでは、マドリッドとアビラの一部で発生した山火事のため、当局が国家非常事態を宣言した。英国政府は、スペインの他の内陸地域でも山火事の報告があると述べている。
旅行保険は山火事もカバーしますか?
繰り返しになりますが、答えはあなたのポリシーによって異なります。
「山火事によって旅行計画が中断され、旅行中断補償が保険契約に含まれている場合、旅行保険でその費用の一部をカバーできる可能性があります」と英国保険会社協会（ABI）の損害保険部長クリス・ボーズ氏は言う。
しかし、Defaqtoの分析によると、「災害」補償を備えているのは旅行保険契約の半分だけだという。
これは、多くの場合、山火事が発生した場合、旅行者は保険でカバーされない可能性があることを意味します。
これがあなたに当てはまるかどうかを知るには、保険会社に問い合わせるか、保険契約の文言を確認してください。
航空会社または宿泊施設が予約をキャンセルした場合はどうすればよいですか?
航空券や宿泊施設がキャンセルされた場合、ボーズはまず航空会社、ツアーオペレーター、または宿泊施設提供者に払い戻しを求めることをお勧めします。
ダシー氏は、航空会社が山火事の影響でフライトをキャンセルした場合、「再予約の機会を提供するか、全額返金してくれるはずだ」と話す。
彼女は、旅行がパッケージとして予約された場合、この払い戻しは航空券、宿泊施設、送迎を含む「すべての要素」をカバーする必要があると述べています。
「しかし、すべてを別々に予約した場合は、各プロバイダーに個別に対応する必要があります。航空会社はフライトを払い戻すかもしれませんが、宿泊施設に影響がなければ、宿泊施設プロバイダーは払い戻ししない可能性があります。」
今すぐ旅行をキャンセルしたほうがいいでしょうか？
まず、航空券、宿泊施設、旅行の予約について保険契約に記載されている内容を確認してください。
ロリー・ボーランド、「Which?」編集者Travel によれば、これは今後 1 ～ 2 週間以内に旅行の予定がない人に特に当てはまります。
「今キャンセルした旅行者は、払い戻しや再予約の権利を失う可能性が高いです」と彼は言います。
英国政府は両国のどこへの旅行にも警告を出していないため、旅行者は「旅行保険を請求できない可能性が高い」と同氏は言う。
「原則として、保険会社は『旅行への意欲』を考慮に入れません」とボーランド氏は言う。
「代わりに、旅行者は出発日が近くなるまで待って、旅行を進めることができるかどうか、または旅行会社や航空会社がどのような柔軟な予約オプションを提供しているかを確認する必要があります。
「旅行会社は今後数日以内に出発予定の人を優先することになるだろう。」
気候変動は将来旅行保険にどのような影響を与えるでしょうか?
世界保健機関によると、ヨーロッパ全土の山火事により焼失した土地の量は、2022年夏以降57%増加した。
さらに、気候変動により山火事が激化し、その頻度が増加していると付け加えた。
ダシー氏は、保険会社は「結果として旅行に伴う潜在的な新たな増加するリスク」に適応していると述べた。
短期的には、保険会社が保険契約を変更する可能性は低いと彼女は言う。
「現在の条項では『厳しい』または『極端な』天候を指す場合がありますが、その定義はさまざまであり、現時点では最高気温などの基準まで指定しているプロバイダーはありません。」
しかし、「長期的には、保険対象の旅行先が減り、保険料が上昇する可能性がある」と彼女は言う。
連絡する
この記事で取り上げられている問題の影響を受けていますか?何か質問はありますか？
関連トピック
- 3 時間前に公開
- 3 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce3qv0ggndno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T13:21:49+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cd7b/live/3c068830-89ab-11f1-a44b-5525937994ba.jpg",
    readTime: 7,
  },
  {
    id: "federal-reserve-is-likely-to-hold-intere-f797df01",
    title: "Federal Reserve is likely to hold interest rates steady. Here's what that means for consumers",
    titleJa: "FRBは金利を据え置く可能性が高い。これが消費者にとって何を意味するか",
    summaryJa: "FRBは次回7月会合で金利を据え置くと予想されている。インフレ統計が冷え込んでいるにもかかわらず、エネルギー価格の高騰とイランとの緊張再燃でケビン・ウォーシュFRB議長の状況は複雑になっているからだ。ウォーシュ氏がFRBを引き継いだFRBでは、2021年以来インフレ率が目標の2％を上回っているが、インフレの広範な指標である消費者物価指数は先月予想外の低下を記録し、6月の年間インフレ率は3.5％に低下した。しかしその後数週間で、中東の紛争が激化する中、原油価格は再び高騰した。",
    bodyOriginal: `The Federal Reserve is expected to hold interest rates unchanged at its upcoming July meeting — as higher energy prices and renewed tensions with Iran have complicated the picture for Fed Chairman Kevin Warsh, despite cooler inflation data.
While Warsh took over a Fed that has seen inflation exceed its 2% target since 2021, the consumer price index — a broad measure of inflation — posted an unexpected decline last month, bringing the annual inflation rate down to 3.5% in June. But in the weeks that followed, oil prices jumped again amid the escalating conflict in the Middle East.
Traders scaled back expectations for an interest rate hike when the Fed meets this week, according to the CME Group's FedWatch gauge. Market pricing indicates the Fed is more likely to consider a rate move in September.
For Warsh, price stability remains a headwind, despite President Donald Trump's push to bring the federal funds rate down, according to Brett House, an economics professor at Columbia Business School. "It sets up a potential conflict between Trump and the Fed, where his desire for lower interest rates is unlikely to be realized anytime soon," he said.
How the Fed affects your wallet
The Fed's benchmark interest rate determines what banks charge one another for overnight loans. That rate then influences a wide range of consumer borrowing and savings rates.
When the Fed raises its benchmark rate, borrowing becomes more expensive, which can slow economic activity and help ease inflation. Lowering the rate tends to encourage spending and stimulate the economy, but can also contribute to rising prices.
Shorter-term rates are closely pegged to the prime rate, which is typically 3 percentage points above the fed funds rate. Longer-term rates are more dependent on inflation expectations and other economic factors.
"Consumers need to remember that the rates that they face are not set only by the Fed. The bond market has a big hand in determining the rates consumers pay," House said.
The yield on the 10-year Treasury note, which underpins mortgages and other longer-term loans, was up 5 basis points on Thursday. "That's going to keep borrowing costs higher for consumers both on short-term borrowing and the longer-run loans," House said
For example, 15- and 30-year fixed mortgage rates typically follow the lead of Treasury rates and the economy. "Mortgage rates are holding just above 6.50%, as encouraging inflation data is being offset by higher oil prices and renewed tensions between the U.S. and Iran," said Jeff DerGurahian, LoanDepot's chief investment officer and head economist.
Auto loan rates are tied to several factors, including the Fed's benchmark. Since financing costs remain elevated, car buyers are taking on larger and longer loans to combat affordability challenges in the car market, according to the latest data from Edmunds.
Although federal student loan rates are fixed for the life of the loan, rates will rise for new borrowers in the year ahead based on the last 10-year Treasury note auction in May.
By contrast, most credit cards carry variable interest rates, which are tied more directly to the Fed's benchmark. However, with the Fed expected to keep rates unchanged, credit card APRs are likely to remain elevated, as well. The average interest rate on a new credit card offer is currently 23.79%, according to LendingTree.
"The average has been remarkably stable, remaining unchanged in three of the past four months," said Matt Schulz, LendingTree's chief credit analyst.
Savings rates also tend to be correlated with changes in the target federal funds rate. Therefore, holding that rate unchanged has kept savings yields relatively high.
"It's still a good time to save," Schulz said. "CD and high-yield savings account rates are down from their peaks seen a few years ago, but they're still strong by historical standards and are likely to remain that way for a while."`,
    bodyJa: `FRBは次回7月会合で金利を据え置くと予想されている。インフレ統計が冷え込んでいるにもかかわらず、エネルギー価格の高騰とイランとの緊張再燃でケビン・ウォーシュFRB議長の状況は複雑になっているからだ。
ウォーシュ氏がFRBを引き継いだFRBでは、2021年以来インフレ率が目標の2％を上回っているが、インフレの広範な指標である消費者物価指数は先月予想外の低下を記録し、6月の年間インフレ率は3.5％に低下した。しかしその後数週間で、中東の紛争が激化する中、原油価格は再び高騰した。
ＣＭＥグループのフェドウォッチ指標によると、トレーダーらは今週のＦＯＭＣで利上げが行われるとの予想を後退させた。市場価格は、FRBが9月に利上げを検討する可能性が高いことを示している。
コロンビア・ビジネス・スクールのブレット・ハウス経済学教授によると、ドナルド・トランプ大統領がフェデラル・ファンド金利の引き下げを推進しているにもかかわらず、ウォーシュ氏にとって物価の安定は依然として逆風だという。同氏は「これはトランプ氏とFRBとの間に潜在的な対立を生み、金利低下を求める同氏の願望が近いうちに実現する可能性は低い」と述べた。
FRBがあなたの財布に与える影響
FRBの基準金利は、銀行が翌日物ローンに対して相互に請求する金額を決定します。この金利は、消費者の借入金利や貯蓄金利に広範囲に影響を及ぼします。
FRBが基準金利を引き上げると借入コストが高くなり、経済活動が減速しインフレ緩和につながる可能性がある。金利を下げると消費が促進され経済が刺激される傾向がありますが、物価上昇につながる可能性もあります。
短期金利はプライムレートに厳密に固定されており、通常、フェデラルファンド金利よりも 3% ポイント高くなります。長期金利はインフレ期待やその他の経済要因により大きく左右されます。
ハウス氏は「消費者は、自分たちが直面する金利はFRBだけが設定しているわけではないことを覚えておく必要がある。消費者が支払う金利の決定には債券市場が大きな関与をしている」と述べた。
住宅ローンやその他の長期ローンを支える１０年米国債の利回りは木曜、５ベーシスポイント上昇した。下院議員は「これにより、短期借入と長期ローンの両方で消費者の借入コストが上昇し続けるだろう」と述べた。
たとえば、15 年および 30 年の固定住宅ローン金利は通常、財務省金利と経済の影響に従います。ローンデポの最高投資責任者兼首席エコノミスト、ジェフ・ダーグラヒアン氏は「前向きなインフレ統計が原油価格の上昇と米国とイラン間の緊張再燃によって相殺されており、住宅ローン金利は６．５０％をわずかに上回る水準で推移している」と述べた。
自動車ローン金利は、FRBのベンチマークなど、いくつかの要因に関係しています。エドマンズの最新データによると、資金調達コストが依然として上昇しているため、自動車購入者は自動車市場における手頃な価格の課題に対抗するために、より大規模かつ長期のローンを組んでいます。
連邦学生ローン金利はローン期間中固定されているが、5月に行われた前回10年物財務省証券入札に基づいて、今後1年間に新規借り手の金利は上昇することになる。
対照的に、ほとんどのクレジットカードは変動金利を採用しており、FRBのベンチマークとより直接的に結びついています。しかし、FRBが金利を据え置くと予想されているため、クレジットカードの年利も引き続き上昇する可能性が高い。 LendingTree によると、新規クレジット カードの平均金利は現在 23.79% です。
レンディングツリーのチーフクレジットアナリスト、マット・シュルツ氏は「平均は驚くほど安定しており、過去４カ月のうち３カ月は変化がなかった」と述べた。
貯蓄率は、目標フェデラルファンド金利の変化とも相関する傾向があります。したがって、金利を据え置くことで貯蓄利回りは比較的高く保たれている。
「まだ貯蓄するには良い時期だ」とシュルツ氏は語った。 「CDと高利回り普通預金口座の金利は、数年前のピークからは下がっているが、歴史的な基準からすると依然として堅調で、しばらくはこの状態が続く可能性が高い。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/fed-interest-rates-july.html",
    publishedAt: "2026-07-27T12:15:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "nvidia-spacex-microsoft-launch-ai-safety-5a07d1be",
    title: "Nvidia, SpaceX, Microsoft launch AI safety initiative as OpenAI cyberattack fallout continues",
    titleJa: "OpenAI サイバー攻撃の余波が続く中、Nvidia、SpaceX、Microsoft が AI 安全性イニシアチブを開始",
    summaryJa: "Microsoft、SpaceX、Palantir は、米国やヨーロッパの他の数十のテクノロジー企業とともに、Open Secure AI Alliance に参加しています。",
    bodyOriginal: `Nvidia and a host of tech giants on Monday launched a new artificial intelligence safety initiative focused on open models, as the fallout from a cyberattack committed by rogue OpenAI models continues.
Last week, it emerged that the target of the attack, startup Hugging Face, was unable to use leading U.S. frontier models to defend itself, with guardrails not distinguishing between aggressor and defender. Instead, it turned to a self-hosted, open-weight Chinese model, which was not bound by those same restrictions.
In the wake of U.S. lawmakers increasingly weighing how to curb growing adoption of Chinese AI models, the most advanced of which are open weight, tech giants have launched an initiative aimed at building and sharing open AI tools.
Open models can be downloaded, modified and self-hosted, in contrast to closed models — including frontier systems built by Anthropic and OpenAI — which can only be accessed through specific infrastructure.
"The Open Secure AI Alliance will work to remediate and disclose vulnerabilities using open technologies," Nvidia said in a statement. "The recent Hugging Face security incident delivered a clear reminder: cyber defenders need open, frontier agentic systems for self-defense."
Alongside Nvidia, other members of the alliance include Microsoft, SpaceX, Palantir, and dozens of other tech companies from the U.S. and Europe.
The push to curb Chinese AI
There are growing calls for measures to limit access to models built by Chinese AI companies, which have been accused of campaigns to extract information from U.S. rivals' systems, known as "distillation" — when one model extracts knowledge from a better-trained model.
Last week, Treasury Secretary Scott Bessent threatened sanctions on Chinese companies that commit distillation attacks against U.S. companies.
"There is a real possibility the US government does impose restrictions on Chinese models," Chris McGuire, senior fellow for China and emerging technologies, at think tank the Council on Foreign Relations, told CNBC.
That could include a ban on transactions involving the models, such as purchasing tokens via an API or U.S. companies hosting the model on the cloud and charging customers for inference, he said.
"In Washington this is not a debate about open-source vs closed-source, it is a debate about whether or not to tolerate Chinese IP theft," McGuire said. "Any actions would be focused on Chinese companies, not the open-source ecosystem."
But with the majority of the most capable open-source models being built by Chinese companies, there are concerns over restrictions.
Last week, Nvidia, Microsoft, Meta, Palantir and more than 20 other companies released a letter urging policymakers to avoid "premature restrictions" on open-weight AI models that would "stifle competition or drive innovation overseas."
The OpenAI-Hugging Face incident showed a "practical truth," said Nvidia. "When defenders cannot inspect, adapt and run advanced AI on their own infrastructure, their ability to respond is constrained at exactly the moment speed matters most."`,
    bodyJa: `不正な OpenAI モデルによるサイバー攻撃の影響が続く中、Nvidia と多くのハイテク大手は月曜日、オープン モデルに焦点を当てた新しい人工知能の安全性への取り組みを開始しました。
先週、攻撃の標的となった新興企業ハギング・フェイス社は、ガードレールが攻撃側と防御側を区別していなかったために、自社を守るために米国の最先端モデルを利用できなかったことが判明した。代わりに、同じ制限に拘束されない、自主開催の無差別級中国モデルに目を向けました。
米国の議員らが中国のAIモデル（最も先進的なモデルはオープンウェイト）の導入拡大をどのように抑制するかを検討するようになっていることを受けて、ハイテク大手はオープンAIツールの構築と共有を目的とした取り組みを開始した。
オープン モデルは、特定のインフラストラクチャを介してのみアクセスできるクローズド モデル (Anthropic や OpenAI によって構築されたフロンティア システムを含む) とは対照的に、ダウンロード、変更、自己ホストが可能です。
Nvidiaは声明で、「Open Secure AI Allianceは、オープンテクノロジーを使用して脆弱性を修復し、公開するよう努める」と述べた。 「最近のハグフェイスのセキュリティインシデントは、サイバー防御者には自衛のためにオープンなフロンティアエージェントシステムが必要であるということを明確に思い出させました。」
Nvidia のほかに、このアライアンスの他のメンバーには、Microsoft、SpaceX、Palantir、および米国とヨーロッパのその他のテクノロジー企業数十社が含まれます。
中国のAI抑制への取り組み
中国のAI企業が構築したモデルへのアクセスを制限する措置を求める声が高まっている。中国のAI企業は、あるモデルがよりよく訓練されたモデルから知識を抽出する「蒸留」として知られる、米国のライバル企業のシステムから情報を抽出するキャンペーンを行っていると非難されている。
スコット・ベッセント財務長官は先週、米国企業に対して蒸留攻撃を行った中国企業への制裁を示唆した。
「米国政府が中国モデルに制限を課す可能性は実際にある」とシンクタンク外交問題評議会の中国・新興技術担当上級研究員クリス・マクガイア氏はCNBCに語った。
これには、API経由でトークンを購入したり、クラウド上でモデルをホストし、推論に対して顧客に課金したりする米国企業など、モデルに関わる取引の禁止が含まれる可能性があると同氏は述べた。
「ワシントンでは、これはオープンソースかクローズドソースかについての議論ではなく、中国の知的財産窃盗を容認するか否かについての議論だ」とマクガイア氏は述べた。 「いかなる行動も、オープンソースエコシステムではなく、中国企業に焦点を当てることになるだろう。」
しかし、最も有能なオープンソース モデルの大部分は中国企業によって構築されているため、制限に対する懸念があります。
先週、Nvidia、Microsoft、Meta、Palantir、その他20社以上の企業は、「海外での競争を阻害したり、イノベーションを推進したりする」無差別AIモデルに対する「時期尚早な制限」を避けるよう政策立案者に求める書簡を発表した。
OpenAI-Hugging Face 事件は「現実的な真実」を示したと Nvidia は述べた。 「防御側が独自のインフラストラクチャで高度な AI を検査、適応、実行できない場合、スピードが最も重要な瞬間に対応する能力が制限されます。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/nvidia-ai-initiative-openai-cyber-attack.html",
    publishedAt: "2026-07-27T11:32:45+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "ford-wants-more-customers-to-customize-v-121728d2",
    title: "Ford wants more customers to customize vehicles to boost profits as it eyes 'Nike shoe drop' moments",
    titleJa: "フォードは「ナイキ靴落ち」の瞬間を見据え、より多くの顧客に車両をカスタマイズして利益を増やしてもらいたいと考えている",
    summaryJa: "ミシガン州ブルックリン — フォード・モーターは、収益を拡大し、530億ドル規模の米国のアフターマーケット産業をよりうまく活用するために、アクセサリーおよび部品事業を拡大している。フォード・カスタマイゼーションのエグゼクティブ・ディレクター、マット・シンプソン氏によると、自動車メーカーは、エクステリアのディテールや車両のラッピングから、パフォーマンスパーツやシステムに至るまで、アフターマーケット製品を増やし、新車や特別版の車両モデルなど、「ナイキのシューズドロップ」に例えられるような特別な瞬間をさらに増やすことを計画しているという。",
    bodyOriginal: `BROOKLYN, Mich. — Ford Motor is expanding its accessory and parts business in an effort to boost profits and better tap into the $53 billion U.S. aftermarket industry.
The automaker is planning to increase its aftermarket products — from exterior detailing and vehicle wraps to performance parts and systems — and have more exclusive moments it's comparing to a "Nike shoe drop," with new and special-edition vehicle models, according to Matt Simpson, Ford Customization's executive director.
"Think like a 'Nike dropping a sneaker' is the vision," Simpson told CNBC during an event at the Michigan International Speedway racetrack here promoting the company's efforts. "We're significantly increasing our investment in this group to bring more choice and to engage customers in this aftersales."
Automakers have long used special-edition vehicles and souped-up models to boost vehicle prices and profits, but Ford says it is methodically taking steps to increase customers' ability to customize vehicles across all price levels.
That includes expanding accessories as well as investing additional resources in Ford Custom Garage, which launched last year as a one-stop shop for customizations from the carmaker.
Ford Custom Garage's first shoe-like "vehicle drop" occurred Monday. It unveiled a sunrise-inspired Ford Bronco SUV that wouldn't be out of place in a new Barbie movie — although the company's designers say they did not have the Mattel toy in mind when developing the vehicle.
The automaker said it will produce 1,000 of the limited-edition Broncos with the Desert Rising package as part of the Ford Custom Garage's new Bronco Horizon Series. The $13,695 package boosts the vehicle's price to $57,350.
Other full packages through the Ford Custom Garage start at thousands of dollars and can run up to $16,000 to $18,000 for some Mustang performance packages and nearly $27,000 for a special performance version of the F-150 pickup truck.
"It is a growth lever for us. It's been a good business for us. We think it can be significantly bigger, hence the investment," Simpson said.
The efforts come as vehicles have grown increasingly more complex and harder for individual owners or non-automaker certified stores to work on in the aftermarket.
CEO Jim Farley came under fire last month after President Donald Trump said Ford and crosstown rival General Motors were supporting legislation to make it harder to keep owners from working on their own vehicles.
Farley later clarified that he thinks customers shouldn't work on cars under warranty since new vehicles require specialty tools. He has touted the automaker's aftermarket business as a major growth opportunity, including by boosting software services in addition to traditional parts and accessories.
Ford has said it is targeting growing its $15 billion high-margin software and physical services revenue — which includes its customization business — by 8% annually through the end of this decade.
"We've never had a Ford showroom as prime for this as we have today," Simpson said. "Bronco, the Mustang, Maverick, the F-Series, this is the most passionate lineup of vehicles that Ford has ever had."
Ford reports 46% of its new vehicle buyers in the U.S. customize their vehicles in some way, with Bronco buyers leading, followed by consumers with Mustang pony cars and pickup trucks.
Simpson declined to disclose exact growth targets for the customization division but said Ford is aiming to increase the number of buyers who opt into those packages as well as the money they're spending on them.
"The more that someone spends on accessories with us, the higher the loyalty is," Simpson said.
The Specialty Equipment Market Association, an auto aftermarket trade association, reports U.S. consumers spent $52.9 billion on vehicle accessories and modifications in 2025.
Unlike when a customer puts parts or accessories onto their vehicle after purchase, Ford is including customizations through its efforts into a new vehicle's warranty. Buyers also have the option to roll the cost of additional parts and packages into their monthly vehicle payments for the purchase or lease of the car, truck or SUV.
"Even with declining sales and unaffordability squeeze, a lot of these accessories, especially the kind of basic, like I want to protect my vehicle, that's margin for the dealer to add in," Simpson said.`,
    bodyJa: `ミシガン州ブルックリン — フォード・モーターは、収益を拡大し、530億ドル規模の米国のアフターマーケット産業をよりうまく活用するために、アクセサリーおよび部品事業を拡大している。
フォード・カスタマイゼーションのエグゼクティブ・ディレクター、マット・シンプソン氏によると、自動車メーカーは、エクステリアのディテールや車両のラッピングから、パフォーマンスパーツやシステムに至るまで、アフターマーケット製品を増やし、新車や特別版の車両モデルなど、「ナイキのシューズドロップ」に例えられるような特別な瞬間をさらに増やすことを計画しているという。
シンプソン氏は当地のミシガン・インターナショナル・スピードウェイ競馬場で行われた同社の取り組みを宣伝するイベントで、「『ナイキがスニーカーを落とした』ように考えるのがビジョンだ」とCNBCに語った。 「私たちは、より多くの選択肢を提供し、顧客をこのアフターセールスに参加させるために、このグループへの投資を大幅に増やしています。」
自動車メーカーは長年、車両価格と利益を上げるために特別仕様車や改良モデルを利用してきたが、フォードは顧客があらゆる価格帯で車両をカスタマイズできるよう、計画的に措置を講じていると述べた。
これには、自動車メーカーのカスタマイズのためのワンストップショップとして昨年立ち上げられたFord Custom Garageに追加リソースを投資するだけでなく、アクセサリの拡張も含まれます。
フォード・カスタム・ガレージで初めて靴のような「車両落下」が月曜日に発生した。バービーの新作映画に登場しても違和感のない、日の出をイメージしたフォード・ブロンコのSUVを発表したが、同社のデザイナーらは車両の開発時にマテル社の玩具を念頭に置いていなかったと述べている。
自動車メーカーは、フォード・カスタム・ガレージの新しいブロンコ・ホライゾン・シリーズの一環として、デザート・ライジング・パッケージを備えた限定版ブロンコを1,000台生産すると発表した。 13,695ドルのパッケージにより、車両価格は57,350ドルに引き上げられます。
フォード・カスタム・ガレージを通じた他のフルパッケージは数千ドルから始まり、マスタングの一部のパフォーマンスパッケージでは最高1万6000ドルから1万8000ドル、F-150ピックアップトラックの特別パフォーマンスバージョンでは2万7000ドル近くになることがある。
シンプソン氏は「これは我々にとって成長の手段だ。我々にとっては良いビジネスだった。我々はこの事業が大幅に拡大する可能性があると考えており、そのために投資した」と述べた。
この取り組みは、自動車がますます複雑化し、個人所有者や自動車メーカー以外の認定店がアフターマーケットで取り組むのが難しくなっている中で行われた。
ジム・ファーリー最高経営責任者（CEO）は先月、ドナルド・トランプ大統領が、フォードと郊外のライバルであるゼネラル・モーターズが、所有者が自分の車で働くことを難しくする法案を支持していると発言したことで批判を浴びた。
ファーリー氏は後に、新車には特殊な工具が必要なため、顧客は保証期間中の車の作業をすべきではないと考えていると明らかにした。同氏は、従来の部品や付属品に加えてソフトウェアサービスの強化など、自動車メーカーのアフターマーケット事業を大きな成長機会として宣伝してきた。
フォードは、カスタマイズ事業を含む利益率の高い150億ドルのソフトウェアおよび物理的サービスの収益を、今10年末まで毎年8％増加させることを目標にしていると述べた。
「今日ほどこの分野に最適なフォードのショールームはありませんでした」とシンプソン氏は語った。 「ブロンコ、マスタング、マーベリック、F シリーズ、これはフォードがこれまでに所有した中で最も情熱的な車両のラインナップです。」
フォードの報告によると、米国の新車購入者の46％が何らかの方法で車をカスタマイズしており、ブロンコの購入者がトップで、マスタングのポニー車やピックアップトラックを所有する消費者がそれに続く。
シンプソン氏はカスタマイズ部門の正確な成長目標の開示を拒否したが、フォードはこれらのパッケージを選択する購入者の数と、それらのパッケージに費やす金額を増やすことを目指していると述べた。
シンプソン氏は、「誰かが私たちと一緒にアクセサリーに費やすほど、ロイヤルティは高くなります」と述べた。
自動車アフターマーケット業界団体である特殊機器市場協会は、米国の消費者が 2025 年に自動車の付属品や改造に 529 億ドルを費やしたと報告しています。
顧客が購入後に自分の車に部品や付属品を取り付ける場合とは異なり、フォードはその取り組みによるカスタマイズを新車の保証に含めています。購入者は、自動車、トラック、SUV の購入またはリースの月々の車両支払いに、追加の部品やパッケージの費用を組み込むオプションもあります。
シンプソン氏は、「売上が減少し、価格が厳しくなったとしても、これらのアクセサリの多く、特に車を保護したいなどの基本的なアクセサリは、ディーラーが追加できる余裕がある」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/ford-vehicle-customization-bronco.html",
    publishedAt: "2026-07-27T10:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "u-s-and-iran-pause-fighting-to-give-peac-30e3c306",
    title: "U.S. and Iran pause fighting to give peace talks 'space.' Here's where negotiations stand",
    titleJa: "米国とイランは和平交渉に「スペース」を与えるため戦闘を一時停止。ここが交渉の場です",
    summaryJa: "米国とイランの間の敵対行為は月曜日に一時停止するかに見えたが、イランは10日間の停戦に合意したとのメディア報道を否定した。外交官らが和平交渉に「一定のスペース」を与えようとしたため、米軍は金曜日、２週間にわたる空爆を中止した。イランもここ数日、地域目標に対する軍事作戦を控えているが、パキスタンで停滞している外交努力の再開を求める中国主導の動きを受けて、報復すると述べた。",
    bodyOriginal: `A temporary hiatus to hostilities between the U.S. and Iran appeared to hold on Monday, but Iran denied media reports that it had agreed to a 10-day ceasefire.
The U.S. military brought a halt to two weeks of strikes on Friday as diplomats sought to give peace talks "some space." Iran, which has also refrained from military operations against regional targets in recent days, has said it will reciprocate following a China-led push to resume stalled diplomatic efforts in Pakistan.
Iran's foreign ministry spokesperson Esmail Baghaei on Monday said Iran "currently have no negotiations with the United States," reiterating that official ongoing talks are solely with Oman regarding the future of the Strait of Hormuz.
While the U.S. and Iran have paused hostilities, other actors did undertake military action related to the conflict over the weekend, highlighting the risk of further escalation and the complex challenges facing negotiators.
The Saudi military conducted strikes on Iran-backed Houthi targets in Yemen following the rebel group's attacks on Red Sea shipping in recent days.
Meanwhile, the Ukrainian military reportedly struck an Iranian commercial vessel in the Caspian Sea, killing one sailor and injuring another. Kyiv said the vessel was being used to transport military cargo supporting Russia's invasion of the country, while Tehran decried the attack as a "hostile and criminal act."
Nevertheless, investors were cheered by the pause in hostilities, which followed not long after the White House was said to be considering a "massive attack" on Iran. Oil prices plunged by more than 7% early on Monday as futures markets pointed to strong performance on Wall Street.
The challenge facing negotiators
But experts caution that prospects for a lasting peace face serious challenges. The U.S. and Iran are not currently in direct, official talks, but negotiating via intermediaries.
When direct talks are possible, negotiators will have to agree on controversial topics, such as the future of Iran's nuclear program, sanctions relief and Tehran's support for its proxy groups in the Middle East.
From an economic perspective, the most important negotiating point will be guarantees of maritime security and the return and normalization of toll-free, two-way traffic flows through the strategically vital Strait of Hormuz.
The strait, through which a fifth of global oil supply flowed before the conflict, remains subject to an ongoing U.S. blockade.
Iran's Baghaei said on Monday that the situation in the Strait of Hormuz has "not changed and it is still closed."
Oman, which sits on the opposite side of the strait to Iran, has emerged as a key player in negotiations. An Omani delegation was reportedly in Tehran on Friday and Saturday in efforts to negotiate a provisional arrangement to manage the transit of shipping through the waterway.
Baghaei described talks on Friday and Saturday as "useful discussions."
Oman has also said talks have been constructive, but analysts warn that normalization of traffic is unlikely in the short-term.
"The main market risk remains the energy and shipping front," Deutsche Bank analysts wrote in a Monday note. "Traffic through Hormuz remains severely disrupted, while the conflict has broadened into the Red Sea."
"This raises the prospect of simultaneous disruption to both Gulf and Red Sea export routes. So a welcome pause from the main actors but a fragile one, especially with side battles still ongoing."`,
    bodyJa: `米国とイランの間の敵対行為は月曜日に一時停止するかに見えたが、イランは10日間の停戦に合意したとのメディア報道を否定した。
外交官らが和平交渉に「一定のスペース」を与えようとしたため、米軍は金曜日、２週間にわたる空爆を中止した。イランもここ数日、地域目標に対する軍事作戦を控えているが、パキスタンで停滞している外交努力の再開を求める中国主導の動きを受けて、報復すると述べた。
イラン外務省のエスマイル・バガエイ報道官は月曜日、イランは「現在米国と交渉を行っていない」と述べ、ホルムズ海峡の将来に関して公式に進行中の交渉はもっぱらオマーンとの間で行われていると繰り返した。
米国とイランが敵対行為を一時停止している一方で、他の関係者も週末に紛争に関連した軍事行動を起こしており、さらなる激化のリスクと交渉関係者が直面する複雑な課題を浮き彫りにしている。
ここ数日の反政府勢力による紅海の船舶攻撃を受けて、サウジ軍はイエメンにあるイランが支援するフーシ派の標的への攻撃を実施した。
一方、ウクライナ軍はカスピ海でイラン商船を衝突し、船員１人が死亡、もう１人が負傷したと伝えられている。キエフは、この船はロシアの同国侵略を支援する軍需品の輸送に使用されていたと述べ、一方テヘランはこの攻撃を「敵対的で犯罪行為」だと非難した。
それにもかかわらず、ホワイトハウスがイランへの「大規模攻撃」を検討しているといわれてから間もなく、敵対関係が一時停止したことで投資家らは歓喜した。先物市場がウォール街の堅調な業績を示したため、原油価格は月曜早朝に7％以上下落した。
交渉者が直面する課題
しかし専門家らは、恒久的な平和の見通しは深刻な課題に直面していると警告している。米国とイランは現在、直接の公式協議を行っておらず、仲介者を通じて交渉している。
直接対話が可能となった場合、交渉担当者はイランの核開発計画の将来、制裁緩和、中東の代理組織に対するイランの支援など物議を醸す議題について合意する必要がある。
経済的な観点から見ると、最も重要な交渉ポイントは、海洋安全保障の保証と、戦略的に重要なホルムズ海峡を通る無料双方向交通の流れの復帰と正常化だろう。
この海峡は紛争前、世界の石油供給の5分の1が流れていたが、現在も米国による封鎖が続いている。
イランのバガイ氏は月曜日、ホルムズ海峡の状況は「変わっておらず、依然として閉鎖されている」と述べた。
イランと海峡を挟んで反対側に位置するオマーンが交渉の主要国として浮上している。伝えられるところによると、オマーンの代表団は金曜日と土曜日にテヘランを訪れ、水路を通る船舶の輸送を管理するための暫定協定の交渉に努めた。
バガイ氏は金曜日と土曜日の会談を「有益な議論」だったと述べた。
オマーンも協議は建設的だったと述べているが、アナリストは短期的に交通が正常化する可能性は低いと警告している。
ドイツ銀行のアナリストらは月曜のメモで、「主な市場リスクは依然としてエネルギーと海運の面にある」と述べた。 「ホルムズを通る交通は依然として深刻な混乱が続いており、紛争は紅海にまで拡大している。」
「これにより、湾岸と紅海の両方の輸出ルートが同時に混乱する可能性が高まっている。したがって、主要な主体の一時停止は歓迎すべきことだが、特にサイドの戦いがまだ続いているため、脆弱なものである。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/us-iran-war-trump-hormuz.html",
    publishedAt: "2026-07-27T09:55:17+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "fivefold-increase-for-chinese-chip-maker-6392078b",
    title: "Fivefold increase for Chinese chip maker CXMT in Shanghai debut",
    titleJa: "中国のチップメーカーCXMTが上海デビューで5倍に増加",
    summaryJa: "CXMTは時価総額850億ドルで取引初日を終えた",
    bodyOriginal: `CXMT  closed its first day of trading with a market capitalization of $85 billion`,
    bodyJa: `CXMTは時価総額850億ドルで取引初日を終えた`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/fivefold-increase-for-chinese-chip-maker-cxmt-in-shanghai-debut-2861827e?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T09:51:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-55645569",
    readTime: 2,
  },
  {
    id: "spain-and-france-wildfires-force-more-th-07a88b74",
    title: "Spain and France wildfires force more than 300,000 to flee as Macron calls crisis meeting",
    titleJa: "スペインとフランスの山火事で30万人以上が避難を余儀なくされ、マクロン大統領が危機会合を招集",
    summaryJa: "山火事はフランス南部を襲いスペインにも広がり、今週さらに予想される熱波を前に30万人以上が避難を余儀なくされている。フランスのエマニュエル・マクロン大統領は月曜日に危機閣議を開催する予定で、スペインのペドロ・サンチェス首相はスペイン東部バレンシアの火災被害地域を訪問する予定だ。",
    bodyOriginal: `Wildfires are ravaging southern France and spreading into Spain, forcing more than 300,000 people to flee ahead of further expected heatwaves during the week.
French President Emmanuel Macron is set to hold a crisis cabinet meeting on Monday, while Spain's Prime Minister Pedro Sanchez will visit areas hit by fires in Valencia, in the East of Spain.
The fire, which began in the Southwest of France in Gironde on Wednesday, has burned 42,000 hectares (nearly 104,000 acres) and has forced one of the largest evacuations in France's history, according to French broadcaster France 24 and local news outlets. The wildfires have also affected 77,000 hectares (around 190,000 acres) of the Avila and Toledo areas in Western Madrid.
"The situation remains highly unfavorable," France's Interior Minister Laurent Nunez said on X on Saturday, according to a Google translation. "At the start of the night, in Gironde, the fire became extremely virulent and unpredictable again, generating its own wind and spreading erratically toward the Bordeaux metropolitan area. By the end of the night, it had calmed down somewhat."
On Saturday, France's Prime Minister Sébastien Lecornu said the wildfires are a "historic situation" for the country, with nearly 100,000 hectares (247,000 acres) burned since the beginning of the year – an "unprecedented" level.
Meanwhile, French Finance Minister Roland Lescure said the crisis has delivered a blow to the local economy. "It's like a clap of thunder for an area which could have done without this," he told reporters.
Since the start of the disaster, 2,500 firefighters, 1,500 military personnel, and nearly 1,200 police have been deployed to bring the fire under control, Nunez said.
In the latest developments, the main government centre for the Bordeaux area known as the Gironde prefecture, said Monday, "the situation remained generally stable during the night from Sunday to Monday, with no major developments to report."
The gigantic fire has been labelled an extremely dangerous and rare "pyrocumulonimbus" — a type of fire cloud which generates its own winds and whirlwinds, making it "erratic and unmanageable," Nicolas Braz, a firefighter Captain, told AFP.
Artificial landscape exacerbates fires
Stefan Doerr, a professor of wildland fire science at Swansea University, said climate change and poor landscape management are contributing to the increasing intensity of the fires.
"Climate change plays a major role in this, and better management certainly means that we should manage the landscape better for not propagating fire through it," Doerr said on CNBC's "Squawk Box Europe."
The abandonment of agricultural land in parts of southern Europe, especially in the Mediterranean and parts of Madrid, has allowed flammable grasses, shrubs and dense forests to spread, making fires harder to contain during extreme heat and drought, Doerr said.
"And that simply means if we have these extreme weather conditions, these extreme droughts, if there is an ignition, it just becomes much more difficult to fight," Doerr said.
Additionally, Doerr told CNBC Europe has been shaped by thousands of years of agriculture and human activity, with many forests now consisting of dense conifer plantations that are more prone to wildfires.
"If we had a natural landscape, we would have actually, in some places, at least far less flammable forests," he said. "This is man-made. It's not that the plants are not natural, but the way the landscape looks now is entirely artificial."
Doerr said Europe isn't necessarily unprepared for wildfires as they occur every year in the Mediterranean regions.
"What is so unusual, really, is that we've now [had] the third consecutive heatwave that really dried out the landscape, and that means once we have an ignition, that can really escalate into a very severe fire," he said. "The overall scale of the events now is beyond the capability of dealing with it effectively."
Doerr acknowledged that Europe has strengthened its firefighting capacity, but argued it has not made enough progress in reducing wildfire risk before blazes start.
"This is essentially [about] better land management, better preparation for fires, better communication, and also better science compared to just better firefighting resources, which, as we see now, are just too far stretched," he said.`,
    bodyJa: `山火事はフランス南部を襲いスペインにも広がり、今週さらに予想される熱波を前に30万人以上が避難を余儀なくされている。
フランスのエマニュエル・マクロン大統領は月曜日に危機閣議を開催する予定で、スペインのペドロ・サンチェス首相はスペイン東部バレンシアの火災被害地域を訪問する予定だ。
フランス放送局フランス24や地元報道機関によると、水曜日にフランス南西部ジロンド県で発生した火災は4万2000ヘクタール（約10万4000エーカー）を焼き、フランス史上最大規模の避難を余儀なくされた。山火事はマドリード西部のアビラとトレド地域の7万7000ヘクタール（約19万エーカー）にも影響を与えた。
グーグル翻訳によると、フランスの内務大臣ローラン・ヌニェスは土曜日のX放送で「状況は依然非常に好ましくない」と述べた。 「夜の始まりに、ジロンドでは火災が再び非常に毒性が強く予測不可能になり、独自の風を発生させてボルドー都市圏に向かって不規則に広がりました。夜の終わりまでに、それはいくらか沈静化しました。」
土曜日、フランスのセバスチャン・ルコルニュ首相は、山火事は同国にとって「歴史的な状況」であり、年初からほぼ10万ヘクタール（24万7千エーカー）が焼かれており、これは「前例のない」レベルであると述べた。
一方、フランスのロラン・レスキュール財務大臣は、危機が地元経済に打撃を与えていると述べた。同氏は記者団に対し、「これがなければ済んだはずの地域にとっては雷が鳴ったようなものだ」と語った。
ヌニェス氏によると、災害発生以来、火災を鎮圧するために消防士2,500人、軍人1,500人、警察1,200人近くが出動したという。
最新の状況について、ジロンド県として知られるボルドー地域の主要政府センターは月曜日、「日曜から月曜にかけて夜間の状況は概ね安定しており、報告すべき大きな進展はなかった」と述べた。
この巨大火災は極めて危険で稀な「輝積乱雲」と分類されているが、これは自らの風や旋風を発生させ、「不安定で手に負えない」火の雲の一種であると消防士大尉のニコラス・ブラズ氏はAFPに語った。
人工の景観が火災を悪化させる
スウォンジー大学の野生火災科学教授ステファン・ドーア氏は、気候変動と不適切な景観管理が火災の激甚化に寄与していると述べた。
「これには気候変動が大きな役割を果たしており、管理を改善するということは、火災が伝播しないように景観をより適切に管理する必要があることを意味するのは確かだ」とドーア氏はCNBCの番組「Squawk Box Europe」で語った。
南ヨーロッパの一部、特に地中海とマドリッドの一部で農地が放棄されたことで、可燃性の草、低木、密林が広がり、猛暑と干ばつの際に火災を鎮火することが困難になっている、とドーア氏は述べた。
「それは単純に、このような異常気象や極端な干ばつが発生した場合、発火が起きた場合、戦うことがさらに困難になることを意味します」とドーア氏は語った。
さらに、ドーア氏はCNBCに対し、ヨーロッパは数千年にわたる農業と人間の活動によって形成されており、多くの森林は現在、山火事が発生しやすい針葉樹の密集したプランテーションで構成されていると語った。
「もし私たちに自然の景観があれば、実際には、場所によっては、少なくとも可燃性の森林がはるかに少なくなっているでしょう」と彼は言いました。 「これは人工です。植物が自然でないわけではありませんが、現在の風景の見え方は完全に人工的です。」
ドーア氏は、地中海地域では山火事が毎年発生しているため、ヨーロッパでは必ずしも山火事への備えができていないわけではないと述べた。
「本当に異常なのは、今、3回連続の熱波が発生し、地形が本当に乾燥しているということだ。つまり、ひとたび発火すると、非常に深刻な火災にまで発展する可能性があるということだ」と同氏は語った。 「現在の出来事の全体的な規模は、効果的に対処する能力を超えています。」
ドーア氏は、欧州が消火能力を強化していることは認めたが、火災が始まる前に山火事のリスクを軽減する点では十分な進歩が得られていないと主張した。
「これは本質的に、より良い土地管理、より良い火災へのより良い準備、より良いコミュニケーション、そしてより良い科学でもありますが、これは、今私たちが目にしているように、あまりにも行き過ぎている消防資源のより良いものと比較したものです」と彼が言いました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/wildfires-spain-france-bordeaux-heatwave.html",
    publishedAt: "2026-07-27T09:27:09+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "i-feel-lucky-i-m-71-and-inherited-20-00-e0ec8a8e",
    title: "‘I feel lucky’: I’m 71 and inherited $20,000. What should I do with this money?",
    titleJa: "「幸運だと感じています」: 私は 71 歳で、2 万ドルを相続しました。このお金はどうすればいいですか？",
    summaryJa: "「私は IRA、高利回り普通預金口座、CD 4 枚、当座預金口座と普通預金口座を持っています。」",
    bodyOriginal: `“I have an IRA, a high-yield savings account, four CDs and checking and savings accounts.”`,
    bodyJa: `「私は IRA、高利回り普通預金口座、CD 4 枚、当座預金口座と普通預金口座を持っています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-feel-lucky-im-71-and-inherited-20-000-what-should-i-do-with-this-money-1ab90925?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T09:15:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-33239683",
    readTime: 2,
  },
  {
    id: "trump-paused-attacks-on-iran-to-make-spa-6cb527d3",
    title: "Trump paused attacks on Iran to make space for talks, US ambassador says",
    titleJa: "トランプ大統領は対話の余地を作るためにイランへの攻撃を一時停止したと米国大使が語る",
    summaryJa: "トランプ大統領は対話の余地を作るためにイランへの攻撃を一時停止したと米国大使が語る- 公開されました",
    bodyOriginal: `Trump paused attacks on Iran to make space for talks, US ambassador says
- Published
President Donald Trump has paused attacks on Iran for the second night in a row to give diplomacy more time, the US ambassador to the UN said.
Speaking to Fox News on Sunday, ambassador Mike Waltz said the president was "giving talks some space, he's giving it a little bit of room".
An Iranian army spokesperson said on Sunday that Tehran had halted "retaliatory" attacks in the region in response. The pause follows nearly two weeks of daily US strikes and tit-for-tat attacks, effectively unravelling the ceasefire struck in June.
Oil prices have dropped sharply in the wake of the pause, opening at $91per barrel on Monday morning after hitting $100 for the first time since May last week.
Asked whether Trump had decided against escalation for now, Waltz told NBC: "I wouldn't go that far at all. The president is keeping all options on the table."
Waltz also rejected reports in the New York Times, external that administration officials had warned expanding hostilities could dangerously drain a diminished stockpile of air defence munitions.
"The US military... has everything that it needs to conduct this campaign as effectively as it needs to be," he said.
As of Sunday evening, Trump had not spoken publicly on the latest developments, but earlier posted computer-generated images on his Truth Social account that depicted US military planes bombing Iranian ships and Kharg island.
Meanwhile, Iran and Oman held several rounds of technical talks in Tehran on Friday and Saturday to discuss management of the Strait of Hormuz, according to Iranian foreign ministry spokesman Esmail Baghaei.
Disputes over control of the strait reignited US-Iran tensions earlier this month and it remains a major block to permanently ending the war.
Iran and the US signed a memorandum of understanding in June to halt military operations and reopen the strait, as well as to reach an agreement to end the war over the following 60 days.
But after Iranian forces attacked tankers in the Strait of Hormuz on 13 July, the US resumed airstrikes on the country and reinstated its naval blockade on Iranian ports.
Iran retaliated with attacks on US military facilities and bases across the Middle East, killing four American soldiers. The US strikes have since killed dozens of people, according to Iran's health ministry.
In the UK, new Defence Secretary Wes Streeting said he would meet his US counterpart Pete Hegseth in the coming week to discuss the strait, which is one of the world's key transport routes for oil, liquid natural gas and other essential commodities.
"When it comes to securing maritime freedom and free commercial shipping in the Strait of Hormuz, that's where we are absolutely aligned," Streeting told the BBC.
Last week, oil prices hit $100 a barrel for the first time since May, as the renewed fighting stoked fears over global energy supplies.
As the war nears its fifth month, it remains largely unpopular in the US, with a new poll from CBS/YouGov suggesting 57% of Americans are frustrated about the conflict and only 19% optimistic.
Thousands of people have been killed across the Middle East since the US-Israeli war with Iran began in February, official figures show, with the vast majority coming from Iran and Lebanon.
President Trump is set to meet Israeli Prime Minister Benjamin Netanyahu in the White House on Tuesday.
- Published2 days ago
- Published2 days ago`,
    bodyJa: `トランプ大統領は対話の余地を作るためにイランへの攻撃を一時停止したと米国大使が語る
- 公開されました
米国の国連大使は、ドナルド・トランプ大統領が外交に時間を与えるため、2夜連続でイランへの攻撃を一時停止したと述べた。
マイク・ウォルツ大使は日曜、FOXニュースのインタビューで、大統領が「対話にスペースを与えている、少しだけ余地を与えている」と語った。
イラン軍報道官は日曜、イラン政府がこれに応じて地域での「報復」攻撃を停止したと述べた。この停止は、米国によるほぼ2週間にわたる毎日の攻撃と報復攻撃に続くもので、6月に締結された停戦は事実上解体された。
原油価格は一時停止を受けて急落し、先週５月以来初めて１バレル＝１００ドルを付けた後、月曜朝には１バレル＝９１ドルで取引を開始した。
ウォルツ氏はトランプ大統領が今のところエスカレーションを見送る決断を下したかどうかとの質問に対し、「私はそこまでは全く考えない。大統領はあらゆる選択肢をテーブルの上に置いている」とＮＢＣに語った。
ワルツ氏はまた、敵対行為の拡大により防空弾薬の減少する備蓄が危険なまでに枯渇する可能性があると政権当局者が警告したというニューヨーク・タイムズの社外報道も否定した。
「米軍は…この作戦を必要なだけ効果的に実施するために必要なものをすべて備えている」と彼は語った。
日曜夕方の時点で、トランプ大統領は最新の動向について公には発言していないが、これに先立ち、米軍機がイランの船舶やハルグ島を爆撃する様子を描いたコンピューター生成画像を自身の真実ソーシャルアカウントに投稿していた。
一方、イラン外務省のエスマイル・バガイ報道官によると、イランとオマーンは金曜日と土曜日にテヘランで数回の技術協議を開催し、ホルムズ海峡の管理について話し合った。
海峡の制圧を巡る紛争で今月初めに米国とイランの緊張が再燃しており、戦争を永久に終わらせる上で依然として大きな障害となっている。
イランと米国は６月、軍事作戦を停止して海峡を再開するとともに、その後６０日間で戦争を終わらせる合意に達する覚書に署名した。
しかし、7月13日にイラン軍がホルムズ海峡でタンカーを攻撃した後、米国は同国への空爆を再開し、イラン港湾の海上封鎖を再開した。
イランは中東各地の米軍施設や基地を攻撃し報復し、米兵４人が死亡した。イラン保健省によると、その後の米国の空爆により数十人が死亡した。
英国では、ウェス・ストリーティング新国防長官が来週、米国のピート・ヘグセス国防長官と会談し、石油、液体天然ガス、その他の必需品の世界の重要な輸送ルートの一つである海峡について話し合う予定だと述べた。
ストリーティング氏はBBCに対し、「ホルムズ海峡における海洋の自由と自由な商船の確保に関しては、我々は完全に一致している」と語った。
先週、新たな戦闘で世界のエネルギー供給に対する不安が高まるなか、原油価格は5月以来初めて1バレル＝100ドルに達した。
戦争が5カ月目に近づいているが、アメリカ国内では依然として大部分が不人気であり、CBS/YouGovの最新世論調査によると、アメリカ人の57％が紛争に不満を抱いており、楽観視しているのはわずか19％だという。
公式統計によると、2月に米国・イスラエルとイランの戦争が始まって以来、中東全土で数千人が殺害され、その大部分がイランとレバノンから来ている。
トランプ大統領は火曜日にイスラエルのベンヤミン・ネタニヤフ首相とホワイトハウスで会談する予定だ。
- 2 日前に公開
- 2 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c5y45kdkynpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T08:14:46+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/77dd/live/1590f3b0-890c-11f1-84f3-d921f52926a2.jpg",
    readTime: 4,
  },
  {
    id: "chinese-chipmaker-shares-surge-470-in-bl-0e62b025",
    title: "Chinese chipmaker shares surge 470% in blockbuster stock market debut",
    titleJa: "中国の半導体メーカー株、大ヒット株式市場デビューで470％上昇",
    summaryJa: "中国の半導体メーカー株、大ヒット株式市場デビューで470％上昇- 公開されました",
    bodyOriginal: `Chinese chipmaker shares surge 470% in blockbuster stock market debut
- Published
Shares in China's biggest memory chip maker have surged by more than 470% as they made their debut on the Shanghai Stock Exchange's tech-heavy Star Market.
The surge has pushed ChangXin Memory Technologies' (CXMT) stock market valuation to around 3.3 trillion yuan ($487.3bn; £364.9bn), making it the most valuable listed company in mainland China.
The spectacular debut comes despite a sharp sell-off in technology stocks around the world this month.
CXMT manufactures dynamic random-access memory (Dram) chips that power artificial intelligence (AI) data centres, mobile phones, PCs, tablets and other devices.
The firm, which was founded in 2016 by Chairman Zhu Yiming, is headquartered in Hefei, Anhui Province in eastern China.
The company has said it plans to use most of the proceeds from the initial public offering (IPO) to boost production of memory chips and carry out more research and developments.
The stellar performance of its IPO will offer some comfort to Chinese financial officials, who have been rolling out measures to help curb a stock market slump that wiped out more than $1.5tn in recent weeks.
Analysts said the jump was also being driven by demand for the shares far outstripping supply.
"The reason for the extraordinary bounce this morning is that only 7% of the shares are available for trading," Anna Macdonald, investment strategy director at Hargreaves Lansdown told the BBC's Today programme.
It also highlights Chinese investors' strong appetite for a homegrown chipmaker, as the government in Beijing pushes ahead with plans to make its technology industry self-reliant.
South Korean tech giants Samsung Electronics and SK Hynix and US-based Micron dominate the Dram market, with the three companies accounting for around 90% of global production.
Earlier this month, SK Hynix raised $26.5bn (£19.8bn) in its New York share offering, marking the largest ever listing by a foreign firm in the US.
The company, a key supplier to AI chip giant Nvidia, said it had sold 177.9 million American depositary shares for $149 each.
The shares surged as much as 17% on Friday in their first day of trading on the Nasdaq but have since given up some of that gain.
SK Hynix saw its market value top $1tn in its home country in May, lifted by the boom in demand for AI chips.`,
    bodyJa: `中国の半導体メーカー株、大ヒット株式市場デビューで470％上昇
- 公開されました
中国最大のメモリチップメーカーの株価は、上海証券取引所のハイテク産業が多いスター市場に初登場し、470％以上急騰した。
この急騰により、長信記憶科技（CXMT）の株式市場評価額は約3兆3000億元（4873億ドル、3649億ポンド）にまで上昇し、中国本土で最も価値のある上場企業となった。
今月、世界中のハイテク株が急落したにもかかわらず、この華々しいデビューが実現した。
CXMT は、人工知能 (AI) データセンター、携帯電話、PC、タブレット、その他のデバイスに電力を供給するダイナミック ランダム アクセス メモリ (Dram) チップを製造しています。
同社は2016年に朱一明会長によって設立され、中国東部の安徽省合肥に本社を置いている。
同社は、新規株式公開（IPO）で得た収益のほとんどをメモリチップの生産拡大とさらなる研究開発の実施に充てる計画だと述べた。
同社のIPOの素晴らしい業績は、ここ数週間で1兆5000億ドル以上を吹き飛ばした株式市場の低迷を抑制するための措置を展開してきた中国の金融当局者にとって、ある程度の安心感をもたらすだろう。
アナリストらは、供給をはるかに上回った株式への需要も高騰の原動力となっていると述べた。
ハーグリーブス・ランズダウンの投資戦略ディレクター、アンナ・マクドナルド氏はBBCのトゥデイ番組で、「今朝の異常な反発の理由は、取引に利用できる株式が7％しかないからだ」と語った。
また、北京政府がテクノロジー産業の自立化計画を推進する中、中国の投資家が国産チップメーカーに強い意欲を持っていることも浮き彫りになった。
韓国のハイテク大手サムスン電子とSKハイニックス、米国に本拠を置くマイクロンがドラム市場を独占しており、この3社で世界生産の約90％を占めている。
今月初め、SKハイニックスはニューヨーク株式売り出しで265億ドル（198億ポンド）を調達し、外国企業による米国上場としては史上最大規模となった。
AIチップ大手エヌビディアへの主要サプライヤーである同社は、米国預託株式1億7,790万株を1株あたり149ドルで売却したと発表した。
同社株は金曜日、ナスダック市場での取引初日に最大17％上昇したが、その後はその上昇分の一部を手放した。
SKハイニックスは、AIチップの需要急増により、5月に本国での時価総額が1兆ドルを超えた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9q9w3x9qn2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T07:34:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0377/live/bb1db120-896a-11f1-a3ae-0dbbd1718109.jpg",
    readTime: 3,
  },
  {
    id: "new-uk-prime-minister-burnham-says-he-wo-fa432664",
    title: "New UK Prime Minister Burnham says he would be prepared to call out Trump",
    titleJa: "英国のバーナム新首相、トランプ氏を呼び出す用意があると発言",
    summaryJa: "英国の新首相アンディ・バーナムは、重要な大西洋を越えた関係の方向性を定めるドナルド・トランプ米大統領に対し、英国の国益を守るために喜んで呼び掛けると述べた。バーナム氏は日曜日に放送されたBBCのインタビューで、トランプ氏が正式に就任した月曜日に電話で会話したと述べ、それが「良いやりとり」であり、トランプ氏は「温かい」と感じたと述べた。",
    bodyOriginal: `The U.K.'s new prime minister, Andy Burnham, said he would be willing to call out U.S. President Donald Trump to defend the U.K.'s national interest, as he set the tone for the key trans-Atlantic relationship.
Speaking to the BBC in an interview aired Sunday, Burnham said he had a phone conversation with Trump on Monday when he officially took on the role, describing it as "a good exchange" and that he found Trump "warm".
"We will continue to build the relationship as we go forward," Burnham added.
Asked if Burnham would place his trust in Trump, Burnham said: "it's a changing world isn't it, and you just obviously have to call things as they develop".
Trump has frequently criticized the U.K., among other European and NATO allies, for not pulling their weight in the U.S.-led war on Iran.
But Trump has welcomed Burnham's plan to fast-track oil and gas exploration in already-licensed fields in the North Sea. Writing on Truth Social last week, Trump called North Sea oil "invaluable," adding it will take the U.K. from a "Poverty Stricken Disaster, to one of the Richest Countries anywhere in the World!"
Trump had criticized Burnham's predecessor, Keir Starmer, over the U.K.'s energy policy. In an interview with The Telegraph newspaper in April, Trump said: "All Starmer wants is costly windmills that are driving your energy prices through the roof."
Starmer announced last month that he would step down from his post. His two years in office were marked by a series of policy U-turns, scandals over staffing appointments and a dramatic loss in Britain's local elections which sparked calls for his resignation from within his own ranks.
Asked by BBC journalist Laura Kuenssberg if he would call out Trump if it was the right thing to do, Burnham said, "of course", and added: "You have to defend your own national interest before anything else. That's what you're required to do if you're to do this job properly."
"I can't at any point say that I won't take a different opinion from him, that I will need to voice a different idea that is right for Britain," Burnham said.
Defense spending
Burnham declined to be drawn on a date for raising defense spending to 3% of GDP.
John Healey, the U.K.'s new finance minister – known as the Chancellor of the Exchequer – under Burnham, is expected to see defense spending as a priority. Healey's appointment as Burnham's second-in-command came just weeks after he resigned as Starmer's defense minister, citing his view that the government was "unwilling to commit the resources that the nation needs to defend the country."
Burnham said: "I appointed my new chancellor very aware of what he had said about the critical importance of defense spending and the position that he had taken about that.
"The first challenge facing us both is to ensure that the defense investment plan is fully funded and that's the thing that's right in front of us and we need to work that through as we go towards the budget later this year."
Starmer had announced in June an extra £15 billion ($19.9 billion) in defense spending over the next four years as part of the U.K.'s Defence Investment Plan (DIP), which will lift annual spending to £79.1 billion by 2029, or 2.7% of GDP.
The DIP is intended to bolster the U.K.'s military capability, its nuclear deterrent and industrial capacity, while making way for greater technical investment in areas like cybersecurity, drones and AI.
But analysts warn that high levels of public debt and the highest borrowing costs among its G7 peers could constrain the new government's ability to dramatically boost spending.`,
    bodyJa: `英国の新首相アンディ・バーナムは、重要な大西洋を越えた関係の方向性を定めるドナルド・トランプ米大統領に対し、英国の国益を守るために喜んで呼び掛けると述べた。
バーナム氏は日曜日に放送されたBBCのインタビューで、トランプ氏が正式に就任した月曜日に電話で会話したと述べ、それが「良いやりとり」であり、トランプ氏は「温かい」と感じたと述べた。
「我々は今後も関係を築き続けていく」とバーナム氏は付け加えた。
バーナム氏がトランプ氏を信頼するかとの質問に対し、バーナム氏は「世界は変わりつつある。当然、事態の進展に応じて判断する必要がある」と述べた。
トランプ大統領は、米国主導の対イラン戦争で力を発揮しなかったとして、欧州やNATOの同盟国の中でも英国を頻繁に批判してきた。
しかしトランプ大統領は、北海のすでに認可された油田での石油・ガス探査を急ぐというバーナムの計画を歓迎している。トランプ大統領は先週、真実ソーシャルに寄稿し、北海石油は「計り知れないほど貴重」であると述べ、英国を「貧困に苦しむ惨事から世界で最も裕福な国の一つに」導いてくれるだろうと付け加えた。
トランプ氏は英国のエネルギー政策をめぐり、バーナム氏の前任者キア・スターマー氏を批判していた。トランプ大統領は4月のテレグラフ紙とのインタビューで、「スターマーが望んでいるのは、エネルギー価格を高騰させる高価な風車だけだ」と語った。
スターマー氏は先月、その職を辞任すると発表した。彼の在任期間の2年間は、一連の政策の方向転換、人事人事をめぐるスキャンダル、そして英国の地方選挙での劇的な敗北によって特徴づけられ、内部から辞任を求める声が高まった。
BBCジャーナリストのローラ・クエンスバーグ氏から、もしそれが正しいことであればトランプ氏を非難するかとの質問に対し、バーナム氏は「もちろん」と答え、「何よりもまず自分自身の国益を守らなければならない。この仕事を適切に遂行するためには、それが求められることだ」と付け加えた。
バーナム氏は「いかなる時点でも、彼と異なる意見をとらないとは言えない。英国にとって正しい別の考えを表明する必要がある」と語った。
防衛費
バーナム氏は国防費を国内総生産（ＧＤＰ）比３％に引き上げる日程についての指名を拒否した。
バーナム政権下で大蔵大臣として知られる英国の新財務大臣ジョン・ヒーリー氏は、防衛支出を優先事項とみなすと予想されている。ヒーリー氏がバーナム政権の副司令官に任命されたのは、政府が「国を守るために必要な資源を投入することに消極的である」という見解を理由に、スターマー国防相を辞任したわずか数週間後のことだった。
バーナム首相は、「私は新首相が国防費の極めて重要性について述べたことと、それについての首相の立場をよく理解して任命した。
「我々双方が直面する最初の課題は、防衛投資計画に十分な資金が確実に投入されるようにすることであり、それが我々の目の前にあることであり、今年後半の予算編成に向けて取り組む必要がある。」
スターマー氏は6月、英国の国防投資計画（DIP）の一環として今後4年間で追加の国防支出を150億ポンド（199億ドル）増やすと発表しており、これにより年間支出は2029年までに791億ポンド（国内総生産（GDP）の2.7％）に引き上げられる予定だ。
DIPは英国の軍事力、核抑止力、産業能力を強化すると同時に、サイバーセキュリティ、ドローン、AIなどの分野での技術投資の拡大に道を開くことを目的としている。
しかしアナリストらは、高水準の公的債務とG7諸国の中で最も高い借入コストが新政府の歳出を大幅に拡大する能力を制約する可能性があると警告している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/26/new-uk-prime-minister-burnham-says-he-would-be-prepared-to-call-out-trump.html",
    publishedAt: "2026-07-27T05:06:47+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "why-trump-s-new-tariff-blitz-is-very-dif-1e6eeca5",
    title: "Why Trump's new tariff blitz is very different this time round",
    titleJa: "トランプ大統領の新たな関税電撃作戦が今回は大きく異なる理由",
    summaryJa: "米国とイランの軍事紛争が6か月目に入る中、ドナルド・トランプ大統領はより身近な戦場である世界貿易に戻ってきた。トランプ大統領は金曜日、欧州連合、中国、英国、カナダを含む60の貿易相手国を対象とした新たな関税電撃作戦を開始した。最新の関税の波は東部時間午前12時1分に発効した。金曜日、7月24日に期限切れとなった一時しのぎの10％の基本関税に代わり、10％から12.5％の範囲となる。",
    bodyOriginal: `As the U.S. military conflict with Iran enters its sixth month, President Donald Trump has returned to a more familiar battleground: global trade.
Trump on Friday launched a fresh tariff blitz targeting 60 trading partners, including the European Union, China, the U.K. and Canada. The latest wave of tariffs — which took effect at 12:01 a.m. E.T. Friday, replacing the stopgap 10% baseline tariff that expired July 24 — range from 10% to 12.5%.
Initial market reaction Friday was muted, with the renewed tariff push largely anticipated by investors, given the approaching expiry of the previous duties. That contrasts with the 'shock and awe' approach that underpinned the sweeping 'Liberation Day' levies announced in April 2025, which sent markets plummeting.
However, investors and analysts say the circumstances surrounding the latest tariff push are markedly different this time round, landing amid a more challenging global economic landscape than last year and underpinned by a separate legal framework, potentially risking a lasting drag on markets.
An emboldened White House
"The significance this time around is twofold," said Emma Moriarty, portfolio manager at CG Asset Management.
"Not only does it show the Trump administration's commitment to tariffs, but it shows this commitment against a backdrop of a global energy shock and increasing supply chain bottlenecks. They appear content to continue to levy new tariffs even when they exacerbate domestic markets. For markets, the implications should be clear: we have to position for a low growth and high inflation outcome," Moriarty said.
The measures come as global stock markets continue to grapple with the impact of ongoing hostilities in the Middle East, which have seen oil prices rebound above $100 this week as hopes of a negotiated ceasefire in the war continue to recede.
"While the outcome won't come as a complete shock to markets, it is nonetheless another unwelcome source of uncertainty as sentiment is buffeted by the renewed conflict between the U.S. and Iran and concerns about levels of expenditure in the tech sector," said Russ Mould, investment director at AJ Bell.
The White House administration had been expected to seek an alternative route toward a new round of tariffs following the Supreme Court's ruling in February that the previous tariffs were illegal. The new onslaught is being pursued via Section 301 of the Trade Act of 1974, with officials citing alleged forced labor practices as the reason for the new tariffs.
Specifically, countries that have adopted or committed to introducing prohibitions will face a 10% duty, while those that haven't will be subject to a 12.5% charge, with the levies affecting 99.4% of American imports.
Alan Siow, co-head of EM corporate debt at Ninety One Asset Management, said the White House appears to be adapting to such legal constraints and may be emboldened by limited retaliation and no clear inflation spike.
"These latest tariffs seem to be an evolution of the opening tariff salvos," Siow said, adding that he expects other countries to respond in a more measured way initially, reserving escalation until the policy's likely impact becomes clearer.
A permanent drag on markets?
Looking ahead, Martin Jacob, professor of accounting and control at IESE Business School in Barcelona, said the reintroduction of tariffs hints at the White House's ambition to preserve import levies as a "lasting feature" of U.S. economic policy.
As the previous temporary measures neared their expiry deadlines, that put pressure on the White House to establish more permanent tariff regimes, Jacob explained. "The latest measures therefore represent more than another short-term negotiating salvo," he added.
Matthew Ryan, head of market strategy at global financial services firm Ebury, said the durability of the new levies risks a more lasting structural pressure point for markets.
"Following a brief hiatus, the dreaded T-word is back on investors' lips," Ryan said. "The move to Section 301 removes the legal vulnerability that allowed the Supreme Court to strike down the previous round of import taxes. With that legal escape hatch now closed, markets may need to start pricing tariffs as a structural drag on global growth rather than a transient risk to be negotiated away."
Ryan added that attention now turns to next week's Federal Open Market Committee announcement, with the recent jump in oil prices raising the possibility that the Fed could hike interest rates later this year. That marks a shift from earlier expectations that it would hold steady through year-end before cutting in 2027, and Ryan expects policymakers to keep the option of a hike open.`,
    bodyJa: `米国とイランの軍事紛争が6か月目に入る中、ドナルド・トランプ大統領はより身近な戦場である世界貿易に戻ってきた。
トランプ大統領は金曜日、欧州連合、中国、英国、カナダを含む60の貿易相手国を対象とした新たな関税電撃作戦を開始した。最新の関税の波は東部時間午前12時1分に発効した。金曜日、7月24日に期限切れとなった一時しのぎの10％の基本関税に代わり、10％から12.5％の範囲となる。
金曜の当初の市場の反応は鈍く、以前の関税の期限切れが近づいていることを踏まえ、投資家は再関税の発動を大方予想していた。これは、市場を急落させた2025年4月に発表された大幅な「解放記念日」賦課金を支えた「衝撃と畏怖」のアプローチとは対照的である。
しかし、投資家やアナリストらは、今回の関税推進を取り巻く状況は今回は著しく異なっており、昨年よりも世界経済が厳しい状況にある中で上陸し、別の法的枠組みに支えられており、潜在的に市場に永続的な足かせとなるリスクがあると述べている。
勇気あるホワイトハウス
CGアセット・マネジメントのポートフォリオマネジャー、エマ・モリアーティ氏は「今回の重要性は2つある」と語る。
「これはトランプ政権の関税に対するコミットメントを示すだけでなく、世界的なエネルギーショックやサプライチェーンのボトルネックの増大を背景にこのコミットメントを示している。国内市場を悪化させても新たな関税を課し続けることに満足しているようだ。市場にとって、その影響は明らかであるはずだ。我々は低成長と高インフレという結果に向けて態勢を整えなければならない」とモリアーティ氏は述べた。
この措置は、世界の株式市場が中東で続く敵対行為の影響に引き続き対応している中で行われたもので、戦争の交渉による停戦への期待が後退し続ける中、今週原油価格は100ドルを超えて反発している。
ＡＪベルの投資ディレクター、ラス・モールド氏は「この結果は市場にとって完全な衝撃となるわけではないが、それでも米国とイランの新たな対立やハイテク分野の支出水準への懸念によってセンチメントが弱められているため、これもまた望ましくない不確実性の源となっている」と述べた。
最高裁判所が２月に前回の関税は違法であるとの判決を下したことを受け、ホワイトハウス政権は新たな関税発動に向けた代替ルートを模索するとみられていた。新たな猛攻は1974年通商法第301条に基づいて追及されており、当局者らは新たな関税の理由として強制労働行為の疑いを挙げている。
具体的には、禁止措置を導入している国、または導入を約束している国には10％の関税が課される一方、そうでない国には12.5％の課徴金が課せられ、この課徴金は米国の輸入品の99.4％に影響を与えることになる。
ナインティ・ワン・アセット・マネジメントのエマージング社債部門共同責任者、アラン・シオウ氏は、ホワイトハウスはこうした法的制約に適応しているようで、限定的な報復と明確なインフレ急騰がないことで勇気づけられる可能性があると述べた。
シオウ氏は「これらの最新の関税は、初期関税一斉発動の進化版のようだ」と述べ、他国も当初はより慎重な対応をし、政策の影響がより明確になるまでエスカレーションは留保すると予想していると付け加えた。
市場への永続的な足かせとなるでしょうか？
バルセロナのIESEビジネススクールの会計・管理教授マーティン・ジェイコブ氏は、今後を見据えて、関税の再導入は輸入関税を米国の経済政策の「永続的な特徴」として維持するというホワイトハウスの野心を示唆していると述べた。
これまでの暫定措置の期限が近づくにつれ、より恒久的な関税制度を確立するようホワイトハウスに圧力がかかった、とジェイコブ氏は説明した。 「したがって、最新の措置は、単なる短期的な交渉の一斉射撃以上の意味を持つ」と同氏は付け加えた。
世界的な金融サービス会社イーブリーの市場戦略責任者マシュー・ライアン氏は、新たな賦課金の持続性により、市場にとって構造的な圧力がさらに永続するリスクがあると述べた。
「短い休止期間を経て、恐ろしいTワードが再び投資家の口に上がった」とライアン氏は語った。 「第301条への移行により、最高裁判所が前回の輸入税の取り消しを可能にした法的脆弱性が取り除かれる。その法的逃げ口が閉ざされた今、市場は交渉で回避すべき一時的なリスクではなく、世界成長に対する構造的な足かせとして関税を設定し始める必要があるかもしれない。」
ライアン氏は、最近の原油価格の高騰によりFRBが年内に利上げする可能性が高まっており、注目は来週の連邦公開市場委員会の発表に移っていると付け加えた。これは、2027年に利下げするまで年末まで安定するとのこれまでの予想からの変化を示しており、ライアン氏は政策当局者が利上げの選択肢を残しておくと予想している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/donald-trump-tariffs-trade-war-iran.html",
    publishedAt: "2026-07-27T05:04:43+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "china-memory-chipmaker-cxmt-skyrockets-5-3f1d9b66",
    title: "China memory chipmaker CXMT skyrockets 500% in blockbuster Shanghai debut",
    titleJa: "中国のメモリチップメーカーCXMT、大ヒット上海デビューで500%急騰",
    summaryJa: "半導体メーカー長新科技集団の株価は月曜、ハイテク産業が多い上海のSTAR市場に初登場して500％以上上昇し、CXMTは中国で最も価値のある上場企業となった。合肥に本拠を置く同社は、IPOの価格を1株当たり8.66元とした後、579億2000万元（86億ドル）を調達し、今年これまででアジア最大の規模となった。",
    bodyOriginal: `Shares of chipmaker Changxin Technology Group rose more than 500% Monday as they debuted on Shanghai's tech-heavy STAR Market, making CXMT the most valuable China-listed company.
The Hefei-based company raised 57.92 billion yuan ($8.6 billion) after pricing its IPO at 8.66 yuan per share, making it Asia's biggest so far this year.
CXMT shares were last trading at 52 yuan, giving the company a market cap of about 3.5 trillion yuan.
Based on sales figures for the fourth quarter of 2025, CXMT held a 7.67% share of the global DRAM market in 2025, according to its IPO prospectus. DRAM chips are used in electronic devices ranging from smartphones to servers.
Read more
The global DRAM market is dominated by Samsung Electronics, SK Hynix, and Micron Technology.
"I have no doubt the company is going to grow to be a global leader. It's maybe just a question of time that it can be not only a challenger, it can be a global champion in this particular sector," said Theodore Shou, CEO at Yiyi Capital on CNBC's "Squawk Box Asia."
The listing comes at a time when CXMT has seen increased attention, following reports earlier this month that Apple has begun testing the Chinese chipmaker's DRAM for devices sold in China.
CXMT swung to an operating profit of 35.43 billion yuan in the first quarter from a loss of 2.83 billion yuan a year earlier, as it saw continued growth in global computing power demand and capacity allocation by major manufacturers.
"A 470% performance on day one isn't that rare. What's very prominent in this particular case is a company of this size performing so well," Shou said. In the past, such performance was primarily driven by smaller-cap companies, he said, adding that for CXMT, the relatively limited free float on day one, combined with the built-up market sentiment, were key factors driving the surge.
Morningstar said in a note Friday that as AI is increasingly becoming an issue of national security for China, CXMT will likely be a key beneficiary. The research firm added that while CXMT's technology still lags global memory leaders, domestic internet giants spearheading AI development will likely drive robust adoption of its chips as Beijing pushes for semiconductor self-sufficiency.
CXMT, founded in 2016 by Chairman Zhu Yiming, plans to boost its technological capabilities and core competitiveness, primarily memory wafer mass production and R&D projects, by employing the IPO proceeds, according to a Google translation of the information in the prospectus.
"I think we are nearing a short-term peak in terms of sentiment around the memory cycle," Shou warned, adding that investors have already been selling into the IPO, particularly in China. "These memory chip businesses are sustainable, but the great margins and net profitability we're seeing today are not sustainable and have to normalize over a cycle," he said.
He also added that while this may not be the peak for share prices, the market is right at the peak of a demand and supply imbalance.`,
    bodyJa: `半導体メーカー長新科技集団の株価は月曜、ハイテク産業が多い上海のSTAR市場に初登場して500％以上上昇し、CXMTは中国で最も価値のある上場企業となった。
合肥に本拠を置く同社は、IPOの価格を1株当たり8.66元とした後、579億2000万元（86億ドル）を調達し、今年これまででアジア最大の規模となった。
CXMT株の最終取引価格は52元で、同社の時価総額は約3兆5000億元となった。
IPO目論見書によると、2025年第4四半期の売上高に基づくと、CXMTは2025年に世界のDRAM市場で7.67％のシェアを獲得した。 DRAMチップは、スマートフォンからサーバーに至るまで、さまざまな電子機器に使用されています。
続きを読む
世界の DRAM 市場は、Samsung Electronics、SK Hynix、Micron Technology によって独占されています。
イーイー・キャピタルの最高経営責任者（CEO）セオドア・ショウ氏はCNBCの番組「Squawk Box Asia」で、「同社が世界的リーダーに成長することに疑いはない。同社がこの分野で挑戦者であるだけでなく、世界的なチャンピオンになれるのも時間の問題かもしれない」と語った。
この上場は、アップルが中国で販売されるデバイス向けに中国のチップメーカーのDRAMのテストを開始したとの今月初めの報道を受けて、CXMTへの注目が高まっているタイミングで行われた。
CXMTは、世界的なコンピューティング能力の需要と大手メーカーによる容量割り当ての継続的な増加を背景に、第1四半期の営業利益は前年同期の28億3000万元の損失から354億3000万元の利益に転じた。
「初日のパフォーマンスが 470% であることは、それほど珍しいことではありません。この特定のケースで非常に顕著なのは、この規模の企業が非常に優れたパフォーマンスを示しているということです」とショウ氏は言いました。同氏は、これまでこうした業績は主に小型株企業によってもたらされていたと述べ、CXMTの場合、初日の浮動株が比較的限られていたことと、蓄積された市場センチメントが急騰を促進する主な要因だったと付け加えた。
モーニングスターは金曜日のメモで、AIが中国にとって国家安全保障の問題になりつつある中、CXMTが重要な恩恵を受ける可能性が高いと述べた。同調査会社は、CXMTの技術はいまだ世界のメモリリーダーに遅れをとっているものの、中国政府が半導体の自給自足を推進する中、AI開発を主導する国内のインターネット大手が同社チップの積極的な採用を推進する可能性が高いと付け加えた。
目論見書の情報をGoogle翻訳したところによると、CXMTは2016年に朱一銘会長によって設立され、IPOの収益を活用して主にメモリウェーハの量産と研究開発プロジェクトで技術力と核となる競争力を強化する計画だという。
ショウ氏は「記憶循環を巡るセンチメントの観点からは、短期的なピークに近づいていると思う」と警告し、特に中国では投資家がすでにIPOに売り込んでいると付け加えた。同氏は、「これらのメモリーチップ事業は持続可能だが、今日我々が見ている大きな利益率と純利益は持続可能ではなく、サイクルを経て正常化する必要がある」と述べた。
同氏はまた、今は株価のピークではないかもしれないが、市場はまさに需要と供給の不均衡のピークにあると付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/cxmt-china-market-debut-chipmaker-ipo.html",
    publishedAt: "2026-07-27T03:29:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "oil-prices-sink-stock-futures-rally-as-u-81419032",
    title: "Oil prices sink, stock futures rally as U.S. and Iran pause attacks, Wall Street awaits busy week",
    titleJa: "米国とイランが攻撃を一時停止する中、原油価格は下落、株価先物は上昇、ウォール街は忙しい週を待つ",
    summaryJa: "米国とイランが戦闘を一時停止し、ウォール街がFRBの会合と大手ハイテク企業の重要な決算報告に向けて準備を整えるなか、日曜日には米国の株価指数先物が上昇し、原油価格が下落した。",
    bodyOriginal: `U.S. stock-index futures rallied and oil prices tumbled on Sunday as the U.S. and Iran took a pause from fighting, and as Wall Street gears up for the Fed’s meeting and key earnings reports from Big Tech companies.`,
    bodyJa: `米国とイランが戦闘を一時停止し、ウォール街がFRBの会合と大手ハイテク企業の重要な決算報告に向けて準備を整えるなか、日曜日には米国の株価指数先物が上昇し、原油価格が下落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/oil-prices-sink-stock-futures-rally-as-u-s-and-iran-pause-attacks-wall-street-awaits-busy-week-75030e00?mod=mw_rss_topstories",
    publishedAt: "2026-07-27T03:02:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-36741421",
    readTime: 2,
  },
  {
    id: "shein-swings-to-99m-loss-as-trump-tariff-8a63e712",
    title: "Shein swings to $99m loss as Trump tariffs hit sales",
    titleJa: "トランプ大統領の関税が売上に打撃を与え、シェイン氏は9,900万ドルの損失に揺れる",
    summaryJa: "トランプ大統領の関税が売上に打撃を与え、シェイン氏は9,900万ドルの損失に揺れる- 公開されました",
    bodyOriginal: `Shein swings to $99m loss as Trump tariffs hit sales
- Published
Shein says it swung to a quarterly loss as its sales slowed after US President Donald Trump removed an import duty exemption on small packages.
It also comes as uncertainty remains over the tit-for-tat US-China tariffs wars, which is currently paused.
The fast-fashion giant, which has its headquarters in Singapore but was founded in China, said it lost $99m (£74.1m) in the first three months of the year, compared with a net income of $395m a year earlier.
The announcement is part of the firm's preparations ahead of its stock market debut in Hong Kong, although the filing did not give any details on the size, timetable or pricing of the planned initial public offering (IPO).
"In response to the increased duties and taxes, we are pursuing a wide range of options, including increasing our prices in the US market to offset a portion of the increased costs," Shein said in the filing.
The company also said the Iran war had hit demand, increased costs and caused delays of deliveries in some markets.
The first-quarter figures also partly reflected a paper loss of $328m due to an accounting change for special investor shares. The shares can be turned into ordinary stock later, and their value can change before a listing.
The filing showed that in the year to the end of March 2026 Shein had 281 million active customers - a rise of more than 16% on a year earlier - who placed a total of more than one billion orders.
On 10 July, the China Securities Regulatory Commission (CSRC) gave Shein approval for a Hong Kong share sale after failed attempts to list in New York and London.
The Hong Kong share listing is expected to take place in the coming months.
The figures show the impact of a Trump-signed executive order to end a global tariff exemption that had been used by US shoppers of low-cost goods.
That order, which came into effect on 29 August 2025, broadened an earlier presidential action which specifically targeted cheap products from China and Hong Kong to cover the rest of the world.
The so-called de minimis exemption had allowed goods valued at $800 or less to enter the US without paying any tariffs. US consumers relied on the exemption to buy cheap goods from online commerce sites like Shein and Temu.
The White House said the global exemption was being used to "evade tariffs and funnel deadly synthetic opioids" to the US.
"The removal of the US de minimis exemption has had an adverse impact on our sales in the US and the overall growth of our net revenues," Shein said in the filing.
Earlier in July, the European Union imposed a €3 (£2.56; $3.42) levy on low-value e-commerce imports.
The measure is aimed to curb what the trading bloc has said is unfair competition from China.`,
    bodyJa: `トランプ大統領の関税が売上に打撃を与え、シェイン氏は9,900万ドルの損失に揺れる
- 公開されました
シェイン氏は、ドナルド・トランプ米大統領が小型荷物に対する輸入関税の免除措置を撤廃したことを受けて売上が鈍化し、四半期損失に陥ったと述べた。
また、現在中断されている米中の報復関税合戦をめぐる不確実性が依然として残っていることも背景にある。
シンガポールに本社を置き、中国で設立されたこのファストファッション大手は、前年同期の純利益が3億9,500万ドルだったのに対し、今年最初の3か月で9,900万ドル（7,410万ポンド）の損失を出したと発表した。
この発表は香港での株式市場デビューに先立った同社の準備の一環だが、申請書には計画されている新規株式公開（IPO）の規模、スケジュール、価格などの詳細は記載されていない。
シェイン氏は提出書類の中で、「関税と税金の増加に対応し、コスト増加の一部を相殺するために米国市場での価格を引き上げるなど、幅広い選択肢を追求している」と述べた。
同社はまた、イラン戦争により需要が打撃を受け、コストが増加し、一部の市場で納品に遅れが生じていると述べた。
第 1 四半期の数値には、特別投資家株式の会計処理変更による 3 億 2,800 万ドルの紙損も部分的に反映されています。株式は後で普通株式に変えることができ、上場前に価値が変わる可能性があります。
提出書類によると、2026年3月末までの1年間に、Sheinには2億8,100万人のアクティブ顧客（前年比16％以上増加）がおり、合計10億件以上の注文があったことが明らかになった。
7月10日、中国証券監督管理委員会（CSRC）は、ニューヨークとロンドンでの上場計画が失敗したことを受け、シェインに対し香港株売却を承認した。
香港株式上場は今後数カ月以内に行われる予定だ。
この数字は、低価格商品の米国の買い物客が利用していた世界的な関税免除を廃止するトランプ大統領署名の大統領令の影響を示している。
2025年8月29日に発効したこの命令は、特に中国と香港からの安価な製品を対象とした以前の大統領の行動を世界の他の地域にも拡大するものとなった。
いわゆるデミニミス免除により、800ドル以下の商品は関税を支払わずに米国に入国することが認められていた。米国の消費者はこの免除を利用して、SheinやTemuなどのオンライン商取引サイトから安価な商品を購入した。
ホワイトハウスは、世界的な免除措置は「関税を回避し、致死性の合成オピオイドを米国に供給する」ために利用されていると述べた。
シェイン氏は提出書類の中で、「米国のde minimis 免税措置の撤廃は、米国での当社の売上高と全体的な純収益の伸びに悪影響を及ぼした」と述べた。
7月初旬、欧州連合は低額電子商取引の輸入品に3ユーロ（2.56ポンド、3.42ドル）の課税を課した。
この措置は、通商圏が中国との不公平な競争だと主張していることを抑制することを目的としている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyj8v0rek8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-27T02:08:36+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6a66/live/d66cf590-8950-11f1-aee1-9f17574ebbb3.jpg",
    readTime: 3,
  },
  {
    id: "china-industrial-profit-growth-slows-aga-3ca4c6b5",
    title: "China industrial profit growth slows again in June as retreating oil prices sap earnings lift",
    titleJa: "中国の工業利益の伸びは6月に再び減速、原油価格の下落で収益押し上げが阻害される",
    summaryJa: "国家統計局が月曜日に発表したデータによると、6月の中国の工業利益は前年同月比15.1％増加したが、エネルギー価格の緩和が今年の回復を牽引してきた価格上昇を抑えたため、2か月連続で鈍化した。5月の21.1％上昇が11月以来初めての減速となった後、6月の数字は2カ月ぶりの減速となった。",
    bodyOriginal: `China's industrial profits rose 15.1% in June from a year earlier, according to data released Monday by the National Bureau of Statistics, slowing for a second straight month as easing energy prices took the edge off the price gains that had driven this year's rebound.
The June figure extended a two-month deceleration, after May's 21.1% gain marked the first slowdown since November.
For the first half of this year, profits climbed 18.7%, slowing from the 18.8% pace recorded in the January-May period.
Industrial corporate earnings have staged a notable turnaround this year, swinging from barely positive growth in 2025 to double-digit gains, as an artificial intelligence-fueled boom in chip and equipment manufacturing coincided with the end of nearly three years of factory-gate deflation.
The recovering profit has also been helped by a favorable comparison with last year. Earnings fell 3.6% in June last year and declined 2.8% in the first half of 2025.
Factory-gate prices also rose 3.6% year on year in the second quarter, the first positive reading since late 2022.
That reflation boost appears wobbly, as much of the price recovery was driven by surging global energy costs, while domestic demand lags, economists say.
Producer prices dipped 0.3% month-on-month in June, the first decline since July 2025, according to LSEG data, as normalizing tanker flows through the Strait of Hormuz pulled oil, refined-fuel, and petrochemical prices lower.
Investors will now turn to the Communist Party's Politburo meeting, traditionally held in late July, where top leaders will review first-half performance and set policy direction for the rest of the year.
Economists anticipate stronger easing language after the second-quarter slowdown, though expectations for a large stimulus package remain low, as Beijing refrains from more forceful action given resilient exports and its focus on curbing excess factory capacity.
"The Politburo is likely to make policy support mildly more urgent, prioritizing faster fiscal rollout," said Robin Xing, chief China economist at Morgan Stanley, pegging their baseline as a "gradual policy ramp-up rather than a one-off stimulus push."
"Growth should stay resilient thanks to exports, even as domestic demand lags," Xing said, citing the AI-driven investment cycle — in which China is a key hardware supplier — and a broader Asian industrial capex super-cycle that is now unfolding.`,
    bodyJa: `国家統計局が月曜日に発表したデータによると、6月の中国の工業利益は前年同月比15.1％増加したが、エネルギー価格の緩和が今年の回復を牽引してきた価格上昇を抑えたため、2か月連続で鈍化した。
5月の21.1％上昇が11月以来初めての減速となった後、6月の数字は2カ月ぶりの減速となった。
今年上半期の利益は１８．７％増加し、１─５月に記録した１８．８％のペースから鈍化した。
人工知能を原動力としたチップや機器の製造ブームが、約3年にわたるファクトリーゲートデフレの終焉と重なったため、産業企業の利益は今年、顕著な好転を見せ、2025年のわずかなプラス成長から2桁の伸びに転じた。
前年比が好調だったことも利益の回復に寄与した。昨年６月の利益は３．６％減少し、２０２５年上半期は２．８％減少した。
第２・四半期のファクトリーゲート価格も前年比３．６％上昇し、２０２２年後半以来初めてプラスとなった。
エコノミストらによると、国内需要が遅れている一方で、価格回復の多くは世界的なエネルギーコストの高騰によってもたらされたため、このリフレの押し上げは不安定に見えるという。
LSEGのデータによると、ホルムズ海峡を通過するタンカーの航行正常化により石油、精製燃料、石油化学製品の価格が下落したため、6月の生産者物価は前月比0.3％下落し、2025年7月以来の下落となった。
投資家は今後、伝統的に7月下旬に開催される共産党政治局会議に目を向けるだろう。そこではトップリーダーが上半期の業績をレビューし、残りの政策の方向性を定めることになる。
エコノミストらは第２・四半期の景気減速を受けて、より強力な緩和策を打ち出すと予想しているが、中国政府が輸出の回復力と過剰な工場生産能力の抑制に重点を置いていることから、より強力な行動を控えているため、大規模な景気刺激策への期待は依然として低い。
モルガン・スタンレーの首席中国エコノミスト、ロビン・シン氏は「政治局は政策支援をやや緊急性を高め、より迅速な財政展開を優先するだろう」と述べ、基準を「一度限りの景気刺激策ではなく段階的な政策強化」と定めた。
シン氏は、中国が主要なハードウェア供給国となっているAI主導の投資サイクルと、現在展開中のアジアの広範な産業設備投資のスーパーサイクルを挙げ、「内需が遅れているにもかかわらず、輸出のおかげで成長は底堅さを維持するはずだ」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/china-industrial-profit-growth-exports-oil-drops.html",
    publishedAt: "2026-07-27T02:02:04+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "oil-slides-5-as-iran-reportedly-signals-ae0ff78f",
    title: "Oil slides 5% as Iran reportedly signals halt to attacks if U.S. pause holds",
    titleJa: "米国の一時停止が維持されればイランが攻撃停止の信号を送ったと伝えられ、原油は5%下落",
    summaryJa: "イランが米国の戦闘停止が続く限り攻撃を停止すると発表したと伝えられたことを受けて原油価格が下落し、２週間近く続く紛争激化に対する懸念が和らぎました。国際指標となるブレント原油先物９月渡しは４．８８％下落し、１バレル＝９２ドル付近となった。米国ウェスト・テキサス・インターミディエイト原油先物９月渡しも同様に５％超下落し、１バレル＝８４．８４ドルとなった。",
    bodyOriginal: `Oil prices fell after Iran reportedly said it would suspend attacks as long as a U.S. pause in hostilities remains in place, easing concerns over nearly two weeks of escalating conflict.
International benchmark Brent crude futures for September delivery fell 4.88% to around $92 a barrel. U.S. West Texas Intermediate crude futures for September delivery similarly dropped over 5% to $84.84 a barrel.
Iran has indicated it will stop carrying out attacks as long as the United States also refrains from striking, Reuters reported on Sunday, citing a senior Iranian official.
The pause follows Washington's decision to suspend its bombing campaign after President Donald Trump's advisers reportedly warned that the military was running out of viable targets and raised concerns about depleting U.S. weapons stockpiles.
The Iranian official reportedly said that that Tehran's stance "remains 'attack for attack': if the attacks stop, Iran will also halt its operations. That message has already been conveyed to the United States."
U.S. ambassador to the United Nations Mike Waltz said on Fox News Sunday that Trump had chosen to pause the strikes to allow diplomatic efforts to continue.
HSBC's U.S. rates strategist Dhiraj Narula said higher oil prices have contributed to renewed expectations that the Federal Reserve may need to keep policy tighter for longer, but noted inflation expectations have remained relatively contained despite the energy rally.
He attributed that to stronger messaging from Fed officials on their commitment to price stability, which has prevented the oil shock from feeding into longer-term inflation expectations.`,
    bodyJa: `イランが米国の戦闘停止が続く限り攻撃を停止すると発表したと伝えられたことを受けて原油価格が下落し、２週間近く続く紛争激化に対する懸念が和らぎました。
国際指標となるブレント原油先物９月渡しは４．８８％下落し、１バレル＝９２ドル付近となった。米国ウェスト・テキサス・インターミディエイト原油先物９月渡しも同様に５％超下落し、１バレル＝８４．８４ドルとなった。
ロイター通信が日曜、イラン高官の話として報じたところによると、イランは米国も攻撃を控える限り攻撃をやめる意向を示しているという。
この一時停止は、ドナルド・トランプ大統領の顧問らが軍が実行可能な標的を使い果たしつつあると警告し、米国の武器備蓄が枯渇することへの懸念を表明したことを受けて、爆撃作戦を停止するというワシントンの決定を受けたものである。
伝えられるところによると、イラン当局者は、イラン政府の立場は「引き続き『攻撃には攻撃』だ。攻撃が止まればイランも作戦を停止する。そのメッセージはすでに米国に伝えられている」と述べたという。
マイク・ウォルツ米国連大使はフォックスニュース日曜番組で、トランプ大統領は外交努力を継続できるようにするために空爆の一時停止を選択したと述べた。
ＨＳＢＣの米国金利ストラテジスト、ディラジ・ナルラ氏は、原油価格の上昇が米連邦準備理事会（ＦＲＢ）が政策引き締めを長期継続する必要があるのではないかという新たな期待に寄与していると述べたが、エネルギー上昇にもかかわらずインフレ期待は比較的抑制されたままであると指摘した。
同氏は、物価安定への取り組みについてFRB当局者がより強力なメッセージを発信したことが原因であり、これによりオイルショックが長期的なインフレ期待に反映されるのを防いだ、と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/oil-price-wti-brent-slide-as-iran-reportedly-may-halt-attacks.html",
    publishedAt: "2026-07-26T23:58:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "here-s-the-tech-stock-to-buy-in-a-market-e426bb43",
    title: "Here's the tech stock to buy in a market losing patience with tech",
    titleJa: "ハイテクに対する忍耐力を失った市場で買うべきハイテク株はこれだ",
    summaryJa: "It's not the spend, it's the return. That's what Friday's technology stock plunge said. I think it just might be the most significant tech selloff in more than a year. We need to know — potentially — what we are facing. We need to know if the trillion-dollar spigot is drying up — or it is just a dry spell. For my Charitable Trust, the portfolio we use for the CNBC Investing Club, we have been consolidating and gradually trying to shrink traditional tech — semis, software, data center — and move ",
    bodyOriginal: `It's not the spend, it's the return. That's what Friday's technology stock plunge said. I think it just might be the most significant tech selloff in more than a year. We need to know — potentially — what we are facing. We need to know if the trillion-dollar spigot is drying up — or it is just a dry spell. For my Charitable Trust, the portfolio we use for the CNBC Investing Club, we have been consolidating and gradually trying to shrink traditional tech — semis, software, data center — and move into other kinds of tech, namely tech-infused pharma and aerospace. We tried to make Intel — not Nvidia — the focal point of the portfolio, concerned that there are not enough new move-the-needle customers still out there for Nvidia. No, I'm not giving up Nvidia. It is still amazing, and I think it will have a bang-up quarter. But the "action" in the stock is speaking too loudly. The action in Apple is screaming that its decision, made intentionally or de facto, not to spend hundreds of billions on AI, is brilliant. It's having the best month in three years. Tons of critics second-guess Apple's decision-making. That's wrong. Apple decided a long time ago that much would flow to it if it made the best handhelds. It does. That allowed it to pick and choose which hyperscaler-chat-bot company it wanted to affiliate with, because they have quickly turned into commodities. Google had no choice but to virtually give it away — at least on a net basis — because Google Search has become suspect in its return while Gemini is no Claude from Anthropic. So, we gravitated to a new company, late for now, Intel, because we could see that the ratio of graphics processing units (GPUs) — Nvidia's giant, expensive chips — to central processing units (CPUs) — Intel and Advanced Micro Devices (AMD) — and perhaps, Arm Holdings , if it can get foundry time, even as it is partners with Intel) was quickly changing. When Lip-Bu Tan took over as CEO of Intel, the ratio was about four GPUs for every one CPU. Now, he told me last Thursday, it's about one CPU for every one GPU. Soon, data centers will have four CPUs for every one GPU. The gross margins on the GPUs are far more bountiful than on CPUs. A well-run Intel can change that. This is a well-run Intel. Plus, the CEO is perhaps the most dedicated semiconductor investor who knows how to spend the money wisely to build foundries (factories to manufacture chips) that are in short supply. Most important, he knows packaging, which is the equivalent of bundling CEOs to make them more powerful now that it is getting harder and harder to make nodes smaller and more powerful. The notion of Moore's Law — Gordon Moore, an Intel founder — that you can keep making ever-more-powerful smaller chips may have run out — Or definitely has run out, according to Jensen Huang. When in doubt, go with Jensen. So, we went with Intel, betting on an upside surprise. As usual, we buy slowly for the Trust. We had a little more than half a position on betting against ourselves that the company would report a spectacular number. We lost the bet. It was spectacular, maybe better than that, and it traded up more than 10% in last Thursday's after-hours session. High-fives all around. We looked good. Now I was out on Long Island to throw a rehearsal dinner for special nuptials, the marriage of my stepson, Will Detwiler, who has had that position for 21 years and lots of rearing, and his incredible now-wife Caroline (Win With) Willkie. It was a rather sizable prelude to the actual affair, a rehearsal dinner so large that it had a rehearsal for the rehearsal dinner. I was confident of the market's reaction to Intel even as I lacked confidence in the market. It's more than a tad difficult being long much of anything when you have a president talking about saturation bombing of a crafty opponent that seems to be a state that has more missiles than people. We're back to where the war or wars or who knows what can drive oil to where bears can confidently discuss 5% to 6% inflation. My confidence was misplaced. Entirely. I got up early Friday, not to disturb the participants, took a call from American Express , which we told you would cause selling pressure, and out of one retina saw Intel trading not at $109 but $106.30. Then, $106.28 and then $106.20, and the cadence was both sickening and relentless. Hardly a stand was made before market hours. Count the upticks on a couple of hands. After it went to $103 and change, soon before Friday's open, you could calculate how much it would be down on the day. I switched mentalities and went into thank-my-lucky-stars mode to have plenty of room to buy; if we still wanted to. Which brings me to the essence of this beautiful Sunday's piece after a picture-perfect wedding where I forced myself to be in the non-stop present, something I had only been capable of at one wedding-mine — and two Super Bowls. So, what the heck happened here? Why did Intel close down nearly 8% on Friday? I have heard lots of reasons for the tech sell-off. The most preeminent is that the market has decided to exercise its power to stop the spend. With Alphabet 's stock reeling almost forty points below what once looked like a terrifically priced secondary — at least, before we heard that Google was going to up its capex again — it looks like many sellers decided enough is enough. We won't reward spending with a higher market capitalization. That was a brutal judgment, especially given that Google Cloud had an implausibly tremendous quarter — cue the interview of Thomas Kurian, the head of Google Cloud and often called the LeBron James of tech, a statement with refreshed poignancy given my proclivity for the Philadelphia 76ers. That Alphabet call had me wishing for Ruth Porat back in the CFO role, and her 80-plus calls under her belt to explain why the spend keeps getting upped. Yes, we can say "to meet demand," as now CFO Anat Ashkenazi said multiple times while sprinkling in positives about Alphabet's balance sheet. I have found both statements painful. That's because Alphabet's balance sheet, with an income statement showing negative cash flow, is no longer the belle of the ball. It's okay, not great. If you owned Alphabet for its rock-solid balance sheet and buyback, you are thinking of a different Alphabet, one of yesteryear. The real pain, though, comes from this "meet demand" statement that we heard so much. I am not sure if Alphabet knows what it means to a market that's starting to lose a lot of money in these hyperscalers when it hears "meet demand." We are definitely not looking for companies to "meet demand." We are looking for them to "make money." We aren't hearing anything like that. The only company making money here with Alphabet is Apple. This "meeting demand" stuff is wearying. I feel like the Trust owns companies that are losing fortunes on everything they make, but they are going to make it up in volume. What's happened is, at last, we have come to accept not that these companies don't know what they are doing. I am sure that Alphabet feels that if you build it, profits will come — but there are better stories elsewhere. What do I need this spending horror show when I can get behind Club name Johnson & Johnson ? The technology behind the materials science of 3M doesn't require billions of dollars to lose, well, billions; it just makes money. Again, I am not in the camp that the emperor has no clothes. One of these emperors to be will, perhaps, Anthropic because it is business-to-business (B2B) and we love the stickiness of B2B; the fickle nature of the OpenAI business-to-consumer (B2C) paradigm is viewed to be the culprit for the leaky bucket of that shop. Oh boy, OpenAI has to come public in the worst way; thank you very little. In some ways, it doesn't matter whether you sell tech because you don't see a return or you sell tech because you think these companies lack any discipline. Either way, hundreds of billions of dollars are leaving the cohort. That's why I am wondering if this damned-the-sellers-full-speed-ahead mentality is coming to an end. Which brings me back to the all-encompassing selling of Friday. When you are watching the stock of Intel sink, you can say that it's going down because you didn't get the Wall Street analyst price target bumps you thought it would. They were disappointing. But AMD had a meeting simultaneously, and the only companies that can give Intel a run for the money right now are Nvidia, when it reports late next month, and AMD right now. Shares of AMD sank, too, but not as viciously as Intel, but at a brisk pace. The selling was ferocious. By the end of the session, as the wedding flowers abounded, the Fosforo (my wife's agave spirits company) flowed, and the toasts were readied, you could almost see the selling morph from being about the discipline of capex to a rumor of a cut in capex by a hyperscaler. That someone blinked. I don't know if someone actually did blink. I suspect we will find out Monday. But if someone, other than a supplier, doesn't come out soon and say "we are beating and raising our numbers," I suspect that a trillion dollars' worth of market cap comes right off the top of all the behemoths who still ply AI. No illusions here. We cannot have a sustained rally with tech bleeding through the eyeballs. There are too many companies that have run up to see that happen. We know that the Dow Jones Industrial Average has been able to resist, and the S & P 500 has only slightly faltered, but the Nasdaq is back in charnel house mode. I say we keep tilting away from traditional tech. We stay close to see if someone forecasts a profit, which could lift all boats, and we recognize that there are not enough companies left who still need the hardware, at least not right now. Bottom line Why, then, Intel? Because the only way to amortize all of the spend now is with AI agents, and agents are run on Intel's CPUs. That and robots. We know that robots are such a huge market that they can't be left just to Tesla. I think all of the hyperscalers are going to have to offer them. They are not a GPU product as much as a CPU market — robots are packed with them. Right now, we have lots of use cases both in and out of the data centers, but the next great demand wave, I believe, comes from robots that are B2B to business and then B2C. The current demand for all sorts of tech will sustain the CPU. But I think that robots give us the use case that will keep the stocks in some demand after the companies own up to what might be a sensible pause in spend. I sense we will know soon enough whether it's just a rumor of a pause or an actual one. Either way, keep moving toward new and different tech while backing only Intel when it comes to old tech. A pause could be so jarring that, initially, we won't buy the pausers, but let's not get ahead of ourselves. And remember, a beat and raise from just one hyperscaler changes the entire equation; and three more of them — Amazon , Meta Platforms , and Microsoft — report earnings this week. And oh yeah, fellow Club holding Apple also reports this week . (Jim Cramer's Charitable Trust is long INTC, NVDA, AAPL, AMZN, META, MSFT. See here for a full list of the stocks.) As a subscriber to the CNBC Investing Club with Jim Cramer, you will receive a trade alert before Jim makes a trade. Jim waits 45 minutes after sending a trade alert before buying or selling a stock in his charitable trust's portfolio. If Jim has talked about a stock on CNBC TV, he waits 72 hours after issuing the trade alert before executing the trade. THE ABOVE INVESTING CLUB INFORMATION IS SUBJECT TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY , TOGETHER WITH OUR DISCLAIMER . NO FIDUCIARY OBLIGATION OR DUTY EXISTS, OR IS CREATED, BY VIRTUE OF YOUR RECEIPT OF ANY INFORMATION PROVIDED IN CONNECTION WITH THE INVESTING CLUB. NO SPECIFIC OUTCOME OR PROFIT IS GUARANTEED.`,
    bodyJa: `It's not the spend, it's the return. That's what Friday's technology stock plunge said. I think it just might be the most significant tech selloff in more than a year. We need to know — potentially — what we are facing. We need to know if the trillion-dollar spigot is drying up — or it is just a dry spell. For my Charitable Trust, the portfolio we use for the CNBC Investing Club, we have been consolidating and gradually trying to shrink traditional tech — semis, software, data center — and move into other kinds of tech, namely tech-infused pharma and aerospace. We tried to make Intel — not Nvidia — the focal point of the portfolio, concerned that there are not enough new move-the-needle customers still out there for Nvidia. No, I'm not giving up Nvidia. It is still amazing, and I think it will have a bang-up quarter. But the "action" in the stock is speaking too loudly. The action in Apple is screaming that its decision, made intentionally or de facto, not to spend hundreds of billions on AI, is brilliant. It's having the best month in three years. Tons of critics second-guess Apple's decision-making. That's wrong. Apple decided a long time ago that much would flow to it if it made the best handhelds. It does. That allowed it to pick and choose which hyperscaler-chat-bot company it wanted to affiliate with, because they have quickly turned into commodities. Google had no choice but to virtually give it away — at least on a net basis — because Google Search has become suspect in its return while Gemini is no Claude from Anthropic. So, we gravitated to a new company, late for now, Intel, because we could see that the ratio of graphics processing units (GPUs) — Nvidia's giant, expensive chips — to central processing units (CPUs) — Intel and Advanced Micro Devices (AMD) — and perhaps, Arm Holdings , if it can get foundry time, even as it is partners with Intel) was quickly changing. When Lip-Bu Tan took over as CEO of Intel, the ratio was about four GPUs for every one CPU. Now, he told me last Thursday, it's about one CPU for every one GPU. Soon, data centers will have four CPUs for every one GPU. The gross margins on the GPUs are far more bountiful than on CPUs. A well-run Intel can change that. This is a well-run Intel. Plus, the CEO is perhaps the most dedicated semiconductor investor who knows how to spend the money wisely to build foundries (factories to manufacture chips) that are in short supply. Most important, he knows packaging, which is the equivalent of bundling CEOs to make them more powerful now that it is getting harder and harder to make nodes smaller and more powerful. The notion of Moore's Law — Gordon Moore, an Intel founder — that you can keep making ever-more-powerful smaller chips may have run out — Or definitely has run out, according to Jensen Huang. When in doubt, go with Jensen. So, we went with Intel, betting on an upside surprise. As usual, we buy slowly for the Trust. We had a little more than half a position on betting against ourselves that the company would report a spectacular number. We lost the bet. It was spectacular, maybe better than that, and it traded up more than 10% in last Thursday's after-hours session. High-fives all around. We looked good. Now I was out on Long Island to throw a rehearsal dinner for special nuptials, the marriage of my stepson, Will Detwiler, who has had that position for 21 years and lots of rearing, and his incredible now-wife Caroline (Win With) Willkie. It was a rather sizable prelude to the actual affair, a rehearsal dinner so large that it had a rehearsal for the rehearsal dinner. I was confident of the market's reaction to Intel even as I lacked confidence in the market. It's more than a tad difficult being long much of anything when you have a president talking about saturation bombing of a crafty opponent that seems to be a state that has more missiles than people. We're back to where the war or wars or who knows what can drive oil to where bears can confidently discuss 5% to 6% inflation. My confidence was misplaced. Entirely. I got up early Friday, not to disturb the participants, took a call from American Express , which we told you would cause selling pressure, and out of one retina saw Intel trading not at $109 but $106.30. Then, $106.28 and then $106.20, and the cadence was both sickening and relentless. Hardly a stand was made before market hours. Count the upticks on a couple of hands. After it went to $103 and change, soon before Friday's open, you could calculate how much it would be down on the day. I switched mentalities and went into thank-my-lucky-stars mode to have plenty of room to buy; if we still wanted to. Which brings me to the essence of this beautiful Sunday's piece after a picture-perfect wedding where I forced myself to be in the non-stop present, something I had only been capable of at one wedding-mine — and two Super Bowls. So, what the heck happened here? Why did Intel close down nearly 8% on Friday? I have heard lots of reasons for the tech sell-off. The most preeminent is that the market has decided to exercise its power to stop the spend. With Alphabet 's stock reeling almost forty points below what once looked like a terrifically priced secondary — at least, before we heard that Google was going to up its capex again — it looks like many sellers decided enough is enough. We won't reward spending with a higher market capitalization. That was a brutal judgment, especially given that Google Cloud had an implausibly tremendous quarter — cue the interview of Thomas Kurian, the head of Google Cloud and often called the LeBron James of tech, a statement with refreshed poignancy given my proclivity for the Philadelphia 76ers. That Alphabet call had me wishing for Ruth Porat back in the CFO role, and her 80-plus calls under her belt to explain why the spend keeps getting upped. Yes, we can say "to meet demand," as now CFO Anat Ashkenazi said multiple times while sprinkling in positives about Alphabet's balance sheet. I have found both statements painful. That's because Alphabet's balance sheet, with an income statement showing negative cash flow, is no longer the belle of the ball. It's okay, not great. If you owned Alphabet for its rock-solid balance sheet and buyback, you are thinking of a different Alphabet, one of yesteryear. The real pain, though, comes from this "meet demand" statement that we heard so much. I am not sure if Alphabet knows what it means to a market that's starting to lose a lot of money in these hyperscalers when it hears "meet demand." We are definitely not looking for companies to "meet demand." We are looking for them to "make money." We aren't hearing anything like that. The only company making money here with Alphabet is Apple. This "meeting demand" stuff is wearying. I feel like the Trust owns companies that are losing fortunes on everything they make, but they are going to make it up in volume. What's happened is, at last, we have come to accept not that these companies don't know what they are doing. I am sure that Alphabet feels that if you build it, profits will come — but there are better stories elsewhere. What do I need this spending horror show when I can get behind Club name Johnson & Johnson ? The technology behind the materials science of 3M doesn't require billions of dollars to lose, well, billions; it just makes money. Again, I am not in the camp that the emperor has no clothes. One of these emperors to be will, perhaps, Anthropic because it is business-to-business (B2B) and we love the stickiness of B2B; the fickle nature of the OpenAI business-to-consumer (B2C) paradigm is viewed to be the culprit for the leaky bucket of that shop. Oh boy, OpenAI has to come public in the worst way; thank you very little. In some ways, it doesn't matter whether you sell tech because you don't see a return or you sell tech because you think these companies lack any discipline. Either way, hundreds of billions of dollars are leaving the cohort. That's why I am wondering if this damned-the-sellers-full-speed-ahead mentality is coming to an end. Which brings me back to the all-encompassing selling of Friday. When you are watching the stock of Intel sink, you can say that it's going down because you didn't get the Wall Street analyst price target bumps you thought it would. They were disappointing. But AMD had a meeting simultaneously, and the only companies that can give Intel a run for the money right now are Nvidia, when it reports late next month, and AMD right now. Shares of AMD sank, too, but not as viciously as Intel, but at a brisk pace. The selling was ferocious. By the end of the session, as the wedding flowers abounded, the Fosforo (my wife's agave spirits company) flowed, and the toasts were readied, you could almost see the selling morph from being about the discipline of capex to a rumor of a cut in capex by a hyperscaler. That someone blinked. I don't know if someone actually did blink. I suspect we will find out Monday. But if someone, other than a supplier, doesn't come out soon and say "we are beating and raising our numbers," I suspect that a trillion dollars' worth of market cap comes right off the top of all the behemoths who still ply AI. No illusions here. We cannot have a sustained rally with tech bleeding through the eyeballs. There are too many companies that have run up to see that happen. We know that the Dow Jones Industrial Average has been able to resist, and the S & P 500 has only slightly faltered, but the Nasdaq is back in charnel house mode. I say we keep tilting away from traditional tech. We stay close to see if someone forecasts a profit, which could lift all boats, and we recognize that there are not enough companies left who still need the hardware, at least not right now. Bottom line Why, then, Intel? Because the only way to amortize all of the spend now is with AI agents, and agents are run on Intel's CPUs. That and robots. We know that robots are such a huge market that they can't be left just to Tesla. I think all of the hyperscalers are going to have to offer them. They are not a GPU product as much as a CPU market — robots are packed with them. Right now, we have lots of use cases both in and out of the data centers, but the next great demand wave, I believe, comes from robots that are B2B to business and then B2C. The current demand for all sorts of tech will sustain the CPU. But I think that robots give us the use case that will keep the stocks in some demand after the companies own up to what might be a sensible pause in spend. I sense we will know soon enough whether it's just a rumor of a pause or an actual one. Either way, keep moving toward new and different tech while backing only Intel when it comes to old tech. A pause could be so jarring that, initially, we won't buy the pausers, but let's not get ahead of ourselves. And remember, a beat and raise from just one hyperscaler changes the entire equation; and three more of them — Amazon , Meta Platforms , and Microsoft — report earnings this week. And oh yeah, fellow Club holding Apple also reports this week . (Jim Cramer's Charitable Trust is long INTC, NVDA, AAPL, AMZN, META, MSFT. See here for a full list of the stocks.) As a subscriber to the CNBC Investing Club with Jim Cramer, you will receive a trade alert before Jim makes a trade. Jim waits 45 minutes after sending a trade alert before buying or selling a stock in his charitable trust's portfolio. If Jim has talked about a stock on CNBC TV, he waits 72 hours after issuing the trade alert before executing the trade. THE ABOVE INVESTING CLUB INFORMATION IS SUBJECT TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY , TOGETHER WITH OUR DISCLAIMER . NO FIDUCIARY OBLIGATION OR DUTY EXISTS, OR IS CREATED, BY VIRTUE OF YOUR RECEIPT OF ANY INFORMATION PROVIDED IN CONNECTION WITH THE INVESTING CLUB. NO SPECIFIC OUTCOME OR PROFIT IS GUARANTEED.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/26/jim-cramer-heres-the-tech-stock-to-buy-in-a-market-losing-patience-with-tech.html",
    publishedAt: "2026-07-26T23:39:46+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "would-you-choose-50-000-over-the-chance-6f1a0eec",
    title: "Would you choose £50,000 over the chance of £1m?",
    titleJa: "100万ポンドのチャンスより5万ポンドを選びますか?",
    summaryJa: "100万ポンドのチャンスより5万ポンドを選びますか?- 公開されました",
    bodyOriginal: `Would you choose £50,000 over the chance of £1m?
- Published
You have the choice of instantly receiving £50,000 or flipping a coin for a 50/50 chance of £1m.
Which would you choose?
The vast majority decide on taking the £50k, according to a survey of thousands of people by YouGov. Women voted 82% in favour of the guaranteed cash.
The poll has sparked a debate about why Brits appear more risk-averse than people in the US.
So why are the results so clear-cut, and what are the financial and psychological factors at play?
Sadly, there is little chance of ever having such a choice, but there are some interesting lessons for how we manage our money nonetheless.
Do you agree with the majority?
Nearly three-quarters (73%) of the 4,600 adults asked in the survey said they would take the £50,000 now.
Just over a fifth (21%) went for the chance of £1m and, 6% of those asked sat on the fence and simply couldn't decide.
The gender split in the results is striking. Some 82% of women opted for the £50,000, compared with 63% of men.
This chimes with other research which suggests that men are twice as likely to invest in stocks and shares than women, external, and women are more likely to subscribe to cash ISAs than men, external.
Does the choice depend on how much you earn?
Lots of people might opt for the £50,000 guarantee, deciding that it is a life-changing amount of money in itself.
After all, it is £10,000 more than the median average earnings for full-time workers in the UK for an entire year, according to official statistics, external.
But younger people generally earn less and yet, according to this survey, external, those aged 18 to 24 are more willing to take the bet on £1m than any other age group.
Some 28% go for the coin flip, compared with just 11% among the over-65s - their grandparents' generation.
There is a different tipping point for everyone. Repeat the survey but instead guarantee £5 or offer a 50/50 chance for a £100, and most people will probably go for the £100 bet. After all, lots of people bet at least £2 a week hoping for a National Lottery win.
As those amounts rise, so your appetite for risk becomes clear.
Why not just invest the £50k?
One choice is to take the guaranteed £50,000 and hope it grows over time.
Saving the money would be helped by the magic of compound interest.
Alternatively, you could take more of a risk, but potentially with greater reward, by investing the money.
What has happened in the past will not necessarily happen in the future when it comes to investments.
But you'd have had to have invested your £50,000 in a typical global fund just under 38 years ago for it to be worth £1m today, according to Sarah Coles, of investment firm AJ Bell.
Is it all in the mind?
We are hardwired, says Coles, to go for the guaranteed £50,000.
That's because we feel losses more acutely than gains, she says.
"The thrill of potentially winning £1m is felt less strongly than the fear of giving up a guaranteed £50,000 and ending up with nothing," she says.
In other words, having £50k and knowing you might have won £1m will play on your mind.
But it is not as bad as having a crack at £1m and knowing you've given up enough for an average deposit to buy a home in the West Midlands, external.
Related topics
- Published2 days ago
- Published7 days ago`,
    bodyJa: `100万ポンドのチャンスより5万ポンドを選びますか?
- 公開されました
即座に 50,000 ポンドを受け取るか、コインを投げて 50/50 の確率で 100 万ポンドを獲得するかを選択できます。
どちらを選びますか?
YouGovが数千人を対象に行った調査によると、大多数が5万ポンドを受け取ることを決めている。女性は現金保証に82％が賛成票を投じた。
この世論調査は、なぜ英国人が米国人よりもリスクを回避しているように見えるのかについての議論を引き起こした。
では、なぜ結果がこれほど明確なのか、また経済的および心理的要因は何なのでしょうか?
悲しいことに、そのような選択肢がある可能性はほとんどありませんが、それでもお金の管理方法について興味深い教訓がいくつかあります。
あなたは多数派に同意しますか？
調査で尋ねた成人4,600人のうちほぼ4分の3（73％）が、今すぐ5万ポンドを受け取ると答えた。
5 分の 1 強 (21%) が 100 万ポンドのチャンスを狙っていましたが、質問された人のうち 6% は迷っていて決断できませんでした。
結果における男女別の割合は顕著だ。女性の約82％が5万ポンドを選択したのに対し、男性では63％だった。
これは、男性は女性（社外）よりも株や株式に投資する可能性が2倍高く、女性は男性（社外）よりも現金ISAに加入する可能性が高いことを示唆する他の研究と一致しています。
選択は収入によって決まりますか?
多くの人は、それ自体が人生を変える金額であると判断して、5万ポンドの保証を選択するかもしれません。
結局のところ、外部の公式統計によると、これは英国のフルタイム労働者の年間平均収入の中央値よりも1万ポンド高いのです。
しかし、一般に若者の収入は低いにもかかわらず、この調査によると、外部の18歳から24歳は他のどの年齢層よりも100万ポンドの賭けに積極的に参加しているという。
約28％がコイントスに参加するのに対し、祖父母の世代である65歳以上の人ではわずか11％だ。
人それぞれに異なる転換点があります。調査を繰り返しますが、その代わりに 5 ポンドを保証するか、100 ポンドで 50/50 のチャンスを提供すると、ほとんどの人はおそらく 100 ポンドに賭けるでしょう。結局のところ、多くの人が全国宝くじの当選を期待して、週に少なくとも 2 ポンドを賭けています。
それらの額が増加するにつれて、リスクに対する欲求が明確になります。
なぜ5万ポンドを投資しないのでしょうか？
1 つの選択肢は、保証された 50,000 ポンドを受け取り、時間の経過とともに増加することを期待することです。
お金を節約するには、複利の魔法が役立ちます。
あるいは、お金を投資することで、より多くのリスクを負うこともできますが、より大きな見返りが得られる可能性があります。
投資に関しては、過去に起こったことは将来も起こるとは限りません。
しかし、投資会社AJベルのサラ・コールズ氏によると、現在100万ポンドの価値があるためには、38年弱前に典型的なグローバルファンドに5万ポンドを投資しなければならなかったという。
それはすべて心の中にありますか？
コールズ氏によれば、私たちは保証された5万ポンドを獲得するように組み込まれているという。
それは、私たちが利益よりも損失をより強く感じるからだと彼女は言います。
「100万ポンドを獲得できるかもしれないというスリルは、保証された5万ポンドを放棄して何も手につかなくなるのではないかという恐怖ほど強く感じられません」と彼女は言う。
言い換えれば、5 万ポンドを持っていて、100 万ポンドを獲得できたかもしれないと知っていると、気になるでしょう。
しかし、それは100万ポンドでクラックがあり、ウェストミッドランズ（外部）で家を買うのに十分な平均頭金をあきらめたと知っていることほど悪くはありません。
関連トピック
- 2 日前に公開
- 7 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn0njd4e2evo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-26T23:11:36+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3199/live/4c39d8c0-8757-11f1-95ec-a30de4e448c4.jpg",
    readTime: 4,
  },
  {
    id: "i-am-a-63-year-old-semiretired-physician-9344fe3d",
    title: "I am a 63-year-old semiretired physician. If I saved $2 million for retirement, should my Social Security become optional?",
    titleJa: "私は63歳のセミリタイアした医師です。退職後に備えて 200 万ドルを貯蓄した場合、社会保障は任意になるべきですか?",
    summaryJa: "「その時点で、彼らはおそらく政府の退職後のセーフティネットをもはや必要としません。」",
    bodyOriginal: `“At that point, they arguably no longer need the government’s retirement safety net.”`,
    bodyJa: `「その時点で、彼らはおそらく政府の退職後のセーフティネットをもはや必要としません。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-am-a-63-year-old-semiretired-physician-if-you-have-saved-2-million-for-retirement-should-social-security-be-optional-0de70d53?mod=mw_rss_topstories",
    publishedAt: "2026-07-26T18:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-15655092",
    readTime: 2,
  },
  {
    id: "what-we-know-so-far-about-the-berlin-pri-08960638",
    title: "What we know so far about the Berlin Pride ramming attack",
    titleJa: "ベルリン・プライドの体当たり攻撃についてこれまでにわかっていること",
    summaryJa: "ベルリン・プライドの体当たり攻撃についてこれまでにわかっていること- 公開されました",
    bodyOriginal: `What we know so far about the Berlin Pride ramming attack
- Published
One woman has been killed and at least 29 others injured after a van was driven into a crowd at a Berlin Pride event on Saturday night, in what officials say was likely an "Islamist terror attack".
The suspect, 21-year-old Abdul Ballout, has been shot and killed during a police operation in west Berlin.
German Chancellor Friedrich Merz has condemned the incident as a "heinous" attack.
Here is what we know so far.
What happened in the Berlin Pride attack?
The attack happened at about 22:00 local time (20:00 GMT). A report was made to police in Berlin that a white vehicle had been driven into crowds at a Pride event in the capital.
Hundreds of thousands of people had gathered at Tiergarten park, near the iconic Brandenburg Gate, for the annual event, which is known as Christopher Street Day.
Some people were also stabbed in the incident, with a blade officials believe could have been a machete.
Shortly afterwards, the Pride event was cancelled.
A performance was abruptly brought to a end, with organisers taking to the stage and advising the crowd to start walking towards the exits.
As the message was being given to the crowd, the word "evacuation" was projected onto a large screen on the stage.
Unverified video posted to social media showed large crowds of people leaving the scene as emergency vehicles raced to the scene.
At about 01:00 local time, police confirmed that one woman had been killed and many more had suffered injuries.
A short time later, police confirmed they had found the vehicle believed to have been used in the attack, saying it had crashed into a tree. The vehicle is believed to have been rented.
At about 03:30, police said on X they had identified a suspect with Islamist links.
The search area was widened to the entire city and involved thousands of police, including officers from surrounding German states.
On Sunday, police officers stood guard outside an apartment block in Berlin's Tiergarten district, which is said to be the suspect's home.
Police say he was later shot and killed at an allotment complex in Spandau, a borough in the west of the capital, after he rushed at officers with a knife.
Who is the suspect in the Berlin Pride attack?
The suspect has been named by police as 21-year-old Abdul Ballout, a German citizen of Lebanese background.
He was known to police and has committed a number of crimes, officials said. He had previously been sentenced to one year and 10 months in prison, but the sentence was commuted to parole.
Interior Minister Alexander Dobrindt said the suspect had been radicalised.
German media outlets are reporting he is a supporter of Islamic State group (IS), and tried in the past - unsuccessfully - to join the organisation.
He attempted to travel to Mauritania via Turkey in May 2025 but failed, later travelling to Lebanon via Turkey with intention of heading to Syria and joining IS, according to the public prosecutor's office.
While in Lebanon, he is alleged to have made contact with individuals he believed were IS members, and was later arrested in Lebanon in July 2025, where he spent three months in prison.
After his release, he returned to Berlin in November 2025, where he was arrested at the airport and held in pre-trial detention until May 2026 and had been ordered to take part in a de-radicalisation programme.
He is believed to be connected to the rented vehicle found abandoned in the park.
The police statement added that several people are reported to have been injured with stabbing weapons in the attack.
Where did the attack happen?
The attack took place in the popular Tiergarten park, near the Brandenberg Gate.
A large number of people and floats took part in the Christopher Street Day event, which passed through the city, before moving through Tiergarten park, past the Victory Column monument, and towards the Brandenberg Gate.
Berlin Police have said people were hit on Ahornsteig, which is a long path stretching across the park, largely in a forested area.
European leaders have been swift to condemn the attack.
European Commission President Ursula von der Leyen expressed her sympathy to the victims, saying the Pride event stands for "freedom, dignity, and equality - the fundamental values of the EU".
"Every person should be able to live, love, and stand up for their rights without fear," she wrote on social media.
Rob Jetten, prime minister of the Netherlands, said the Dutch stand "shoulder to shoulder with our German neighbours", while Italy's prime minister Georgia Meloni expressed "solidarity and sincere sympathy".
The UK's defence secretary Wes Streeting called the incident "an absolutely horrific disaster", adding his thoughts and prayers are with the German people.
Did you attend Berlin Pride? If it is safe to do so, get in touch.
WhatsApp: +44 7756 165803
Email: yourvoice@bbc.co.uk
Please read our terms & conditions and privacy policy`,
    bodyJa: `ベルリン・プライドの体当たり攻撃についてこれまでにわかっていること
- 公開されました
土曜日の夜、ベルリンのプライドイベントでバンが群衆に突っ込み、女性１人が死亡、少なくとも２９人が負傷、当局は「イスラム主義者のテロ攻撃」の可能性が高いと発表した。
容疑者は21歳のアブドゥル・ボールアウトさんで、西ベルリンで警察の作戦中に射殺された。
ドイツのフリードリヒ・メルツ首相はこの事件を「凶悪な」攻撃だと非難した。
これまでにわかっていることは次のとおりです。
ベルリン・プライド襲撃事件で何が起こったのか？
攻撃は現地時間22時（グリニッジ標準時20時）頃に発生した。ベルリンの警察に、首都のプライドイベントで白い車が群衆に突っ込んだと通報があった。
クリストファー・ストリート・デーとして知られる毎年恒例のイベントに、象徴的なブランデンブルク門近くのティーアガルテン公園に何十万人もの人々が集まった。
この事件では、ナタの可能性がある刃物で刺された人もいた。
その直後、プライドイベントは中止となった。
公演は突然終了し、主催者がステージに上がり、観衆に出口に向かって歩き始めるよう勧めた。
観客にメッセージを伝える中、ステージ上の大型スクリーンには「避難」の文字が映し出された。
ソーシャルメディアに投稿された未確認の動画には、緊急車両が現場に急行する中、大勢の人々が現場から立ち去る様子が映っていた。
現地時間午前1時頃、警察は女性1人が死亡し、さらに多くが負傷したことを確認した。
しばらくして警察は、木に衝突したとして、攻撃に使用されたとみられる車両を発見したことを確認した。車両はレンタルされていたとみられる。
午前3時30分頃、警察はXでイスラム主義者とのつながりのある容疑者を特定したと発表した。
捜索範囲は市内全域に広がり、ドイツ周辺諸国の警察官を含む数千人の警察が参加した。
日曜日、警察官は容疑者の自宅とされるベルリンのティーアガルテン地区の集合住宅の外で警備に立った。
警察によると、男性はその後、首都西部の行政区シュパンダウにある市民農園で、ナイフを持って警察官に突進した後、射殺されたという。
ベルリン・プライド襲撃事件の容疑者は誰?
警察は容疑者を、レバノン系ドイツ国籍のアブドゥル・バルアウト容疑者（21）と名指しした。
当局者によると、同容疑者は警察に知られており、数々の犯罪を犯してきたという。以前は懲役1年10か月の実刑判決を受けていたが、減刑されて仮釈放となった。
アレクサンダー・ドブリント内務大臣は、容疑者は過激化していると述べた。
ドイツのメディアは、同氏がイスラム過激派組織「イスラム国」（IS）の支持者で、過去にも組織への参加を試みたが失敗したと報じている。
検察当局によると、同容疑者は２０２５年５月にトルコ経由でモーリタニアに渡航しようとしたが失敗し、その後シリアに向かいＩＳに参加するつもりでトルコ経由でレバノンに渡航した。
レバノン滞在中に、ISメンバーと思われる人物と接触したとされており、その後2025年7月にレバノンで逮捕され、そこで3か月間刑務所で過ごした。
釈放後、2025年11月にベルリンに戻ったが、空港で逮捕され、2026年5月まで公判前拘留され、非急進化プログラムへの参加を命じられていた。
彼は公園に放置されているのが見つかったレンタカーに関係していると考えられている。
警察の発表では、この襲撃で数人が刺し傷で負傷したと報告されていると付け加えた。
攻撃はどこで起こりましたか?
襲撃はブランデンベルク門近くの人気のティーアガルテン公園で起きた。
大勢の人々と山車がクリストファー・ストリート・デーのイベントに参加し、市内を通過した後、ティーアガルテン公園を通り、戦勝記念塔を通り過ぎてブランデンベルク門に向かいました。
ベルリン警察は、大部分が森林地帯にある公園を横切る長い道であるアホルンシュタイクで人々がはねられたと発表した。
欧州の指導者たちはこの攻撃を即座に非難した。
欧州委員会のウルズラ・フォン・デア・ライエン委員長は、プライドイベントは「EUの基本的価値観である自由、尊厳、平等」を象徴していると述べ、犠牲者に哀悼の意を表した。
「すべての人は恐れることなく生き、愛し、自分の権利のために立ち上がることができるべきです」と彼女はソーシャルメディアに書いた。
オランダのロブ・ジェッテン首相は、オランダは「隣国ドイツと肩を並べる」立場にあると述べ、イタリアのジョージア・メローニ首相は「連帯と心からの同情」を表明した。
英国のウェス・ストリーティング国防長官は、この事件を「全く恐ろしい惨事」と呼び、ドイツ国民の思いと祈りを添えていると付け加えた。
ベルリンプライドに参加しましたか？安全であれば、連絡してください。
WhatsApp: +44 7756 165803
電子メール: yourvoice@bbc.co.uk
当社の利用規約とプライバシーポリシーをお読みください`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cevmdxz4872o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-26T17:45:30+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cb2d/live/2eaac610-88e8-11f1-bcf5-0bde7672ed32.jpg",
    readTime: 5,
  },
  {
    id: "inside-the-s-p-500-ai-boom-industrials-a-268b9c58",
    title: "Inside the S&P 500 AI boom, industrials are getting as rich as tech stocks",
    titleJa: "S&P 500 AI ブームの中で、工業株はハイテク株と同じくらい豊かになりつつある",
    summaryJa: "AI インフラの構築と世界的な地政学的な展開が巨額の支出を促す中、経済の保守的なセクターはテクノロジー業界の動きに匹敵するレベルの投資家からの注目を集めています。 S&P 500種の工業株セクターの株価収益率は30倍を超えており、投資家がハイフライヤーを連想することが多い水準であり、PERは20倍に近い工業株の長期平均を大きく上回っている。「ステート・ストリートの（インダストリアル・セレクト・セクターSPDR）XLIを見ると、そのバリュエーションはS&P500と比べて非常に高い」と、ベッタフィの調査ディレクター、シンシア・マーフィー氏は最新の「ETFエッジ」について語った。",
    bodyOriginal: `As the AI infrastructure buildout and global geopolitical developments spur massive spending, an old-guard sector of the economy is getting a level of attention from investors that rivals the action in tech. The industrials sector of the S&P 500 is trading at a price-to-earnings ratio above 30, a level investors more often associate with high fliers, and a P/E ratio that is well above industrials' long-term average, which is closer to 20.
"If you look at [Industrial Select Sector SPDR] XLI from State Street, its valuations are really high relative to the S&P 500," Cinthia Murphy, director of research at VettaFi, said on the most recent "ETF Edge."
"It's as high as tech, so it really is a sector that has really had its moment in the sun and picked up a lot of attention," Murphy said.
The race to construct AI data centers in hopes of gaining a durable business advantage in a rapidly-shifting digital infrastructure has gripped the corporate world and the tech sector. Alphabet, as part of its earnings report on Wednesday, forecast capex for this year of $195 billion to $205 billion. Prior guidance was for spending of $180 billion to $190 billion.
McKinsey & Company estimates suggest that this investment won't be stopping anytime soon – with reports showing that global spending on data centers could reach nearly $8 trillion by 2030. The vast majority of this spending will be dedicated to data center infrastructure and IT equipment.
Alphabet warned those spending numbers could go even higher in 2027.
"AI is a tech play, but nothing happens without the build out of the infrastructure," Murphy said. "There's a whole backbone infrastructure that needs to be built, and that has really pushed up industrials."
"We have only just begun this buildout. We are a few hundred billion dollars into it. Trillions of dollars of infrastructure still need to be built," Jensen Huang, Nvidia CEO, said in a March blog post. "This is becoming the largest infrastructure buildout in human history."
The vast majority of projects in the next stages of a nationwide data center expansion are expected to take place in rural areas. In order to accommodate the staggering power demand associated with data centers, expanding rural power grids may prove essential. Peak production capacity for rural power grids in the U.S. remains comparatively limited, on average. Now, there exists a push to develop facilities that regularly consume up to twenty times their existing power capacity, intensifying corporate demand and the need for industrial support. This demand comes despite rising public animosity towards new data center construction, driven by local concerns surrounding strained power grids and rising electrical costs.
Constructing this AI backbone across the U.S. requires new electrical substations, strengthening high-speed fiber internet capabilities, and developing new energy-saving battery technology. Mass amounts of power generation and backup equipment, construction machinery, and electrification software have all come into the mix as necessities for scaling. As a result, production firms within the machinery and electrical equipment industries, which make up 20.89% and 14.16% of XLI holdings, respectively, have surged.
Caterpillar, the ETF's top holding, and GE Vernova, the third-largest holding in the industrials index, are both up over 50% this year. Caterpillar is up nearly 160% from where it was two years ago. GE Vernova continues to benefit from bookings related to the AI buildout, while its renewable energy business has been hit by the downturn in the wind power sector, leading to a selloff this week after earnings despite a $176 billion business backlog at the end of Q2. It's not just the heavyweights that have benefited, either. Emerson Electric, the 29th-largest holding in XLI, is trading at nearly 20% more than it was in July of 2024, despite experiencing slight losses over the past year. Hubbell, the 60th-largest holding, is up 30% in the two-year period dating back to July 2024.
Inside XLI, it's not just the AI boom that is supporting stock valuations, and dozens of other industrials ETFs have been launched targeting multiple niches within the sector.
"There are over 60 industrials ETFs that fall into that sector category, and collectively they've seen about $23 billion in net inflows year-to-date," Murphy wrote in an email to CNBC. "Industrials have not only performed really well relative to the market, but industrials ETFs have seen momentum in asset gathering (relative to recent years) as investors focus on the secular growth trends tied to the AI infrastructure buildout as well as to [the] aerospace and defense theme."
Lockheed Martin, one of the top 20 stocks in the industrials index, is part of a defense industry that has boomed on the increase in defense spending with the U.S. and around the world amid multiple wars. The defense contractor reported quarterly earnings this week that beat on both earnings and revenue, leading to a post-earnings rally of over 10% on Thursday. LMT and its peer RTX Corp., which is the fourth-largest holding in XLI, are both up roughly 35% over the past year.
Most popular industrials ETFs in 2026
(Source: ETFdb.com. net flow, year-to-date)
- iShares Defense Industrials Active ETF (IDEF): $4.4 billion
- State Street Industrial Select Sector SPDR (XLI): $3.6 billion
- GlobalX Defense Tech ETF (SHLD): $2.6 billion
- First Trust RBA American Industrial Renaissance ETF (AIRR): $2.5 billion
- Tema Space Innovators ETF (NASA): $2 billion
Aerospace and defense companies comprise 25% of XLI's sector allocation and have gained momentum, not only from increased defense spending, but also from the recent popularity of space stocks and the longer-term outlook for the space economy. That momentum, however, has faded, with the NASA ETF down close to 20% over the past month.
Jon Maier, J.P. Morgan's chief ETF strategist, says in an increasingly digital world, defense and AI buildout may be interlinked – a picture that bodes well for industrials. "Security and resilience is really important, and that's going to play even bigger and bigger of a role," he said on "ETF Edge."
The traditional aviation sector is also represented in the industrial sector, including Boeing, a top ten XLI holding, as well as Delta Air Lines. Delta CEO Ed Bastian recently told CNBC that conditions in his business remain strong, with high demand for air travel amidst resilient consumer sentiment enduring continuously high air fares. Delta's shares have risen 45% over the past year despite the rise in oil prices currently pressuring airline margins.
Maier added that as the investments being made into industrials peak, it is important to recognize that a significant portion of these trades into index funds like XLI are passive, indicating investor confidence in the fund's long-term horizon.
"The market is always forward-looking, and that's really what a stock price is – the cash flow of future earnings," he said.
"The flows into [industrials] really have been strong, [at] $17 billion," Maeir noted, adding the fact that there is also significant investor interest beyond the core industrial sector index. "34% of all the flow[s] have been actively managed."
Sign up for our weekly newsletter that goes beyond the livestream, offering a closer look at the trends and figures shaping the ETF market.`,
    bodyJa: `AI インフラの構築と世界的な地政学的な展開が巨額の支出を促す中、経済の保守的なセクターはテクノロジー業界の動きに匹敵するレベルの投資家からの注目を集めています。 S&P 500種の工業株セクターの株価収益率は30倍を超えており、投資家がハイフライヤーを連想することが多い水準であり、PERは20倍に近い工業株の長期平均を大きく上回っている。
「ステート・ストリートの（インダストリアル・セレクト・セクターSPDR）XLIを見ると、そのバリュエーションはS&P500と比べて非常に高い」と、ベッタフィの調査ディレクター、シンシア・マーフィー氏は最新の「ETFエッジ」について語った。
「これはテクノロジーと同じくらい高度な分野であり、本当に注目を集めている分野です」とマーフィー氏は語った。
急速に変化するデジタル インフラストラクチャで永続的なビジネス上の優位性を獲得することを期待して、AI データ センターの建設競争が企業世界とテクノロジー業界を巻き込んでいます。アルファベットは水曜日の収益報告の一環として、今年の設備投資が1,950億〜2,050億ドルになると予想している。従来のガイダンスでは支出額は１８００億─１９００億ドルだった。
マッキンゼー・アンド・カンパニーの推計では、この投資が当分止まらないことが示唆されており、世界のデータセンターへの支出は2030年までに8兆ドル近くに達する可能性があるとの報告もある。この支出の大部分はデータセンターのインフラストラクチャとIT機器に充てられるだろう。
アルファベットは、こうした支出額は2027年にはさらに増加する可能性があると警告した。
「AI はテクノロジーの遊びですが、インフラストラクチャの構築なしには何も起こりません」とマーフィー氏は言います。 「基幹インフラ全体を構築する必要があり、それが産業を本当に押し上げています。」
「私たちはこの増強を始めたばかりです。私たちはこの増強に数千億ドルを投じています。まだ数兆ドルのインフラストラクチャを構築する必要があります」と、NVIDIA CEOのジェンセン・ファン氏は3月のブログ投稿で述べた。 「これは人類史上最大のインフラ整備になりつつあります。」
全国的なデータセンター拡張の次の段階にあるプロジェクトの大部分は、地方で行われることが予想されます。データセンターに関連する驚異的な電力需要に対応するには、地方の電力網の拡大が不可欠であることが判明する可能性があります。米国の地方の送電網のピーク時の生産能力は、平均して依然として比較的限られています。現在、既存の電力容量の最大 20 倍を定期的に消費する施設の開発が推進されており、企業の需要と産業支援の必要性が高まっています。この需要は、電力網の逼迫と電気料金の高騰をめぐる地元の懸念により、新しいデータセンター建設に対する国民の反感が高まっているにもかかわらず生じています。
この AI バックボーンを米国全土に構築するには、新しい変電所の建設、高速ファイバー インターネット機能の強化、新しい省エネ バッテリー技術の開発が必要です。大量の発電設備やバックアップ設備、建設機械、電動化ソフトウェアはすべて、規模拡大の必需品として組み込まれています。その結果、XLI保有株のそれぞれ20.89％と14.16％を占める機械産業と電気機器産業の生産企業が急増した。
同ETFの保有トップであるキャタピラーと工業株指数で3番目に保有しているGEバーノバはともに今年50％以上上昇している。キャタピラーは 2 年前と比べて 160% 近く上昇しています。 GEバーノバは引き続きAI構築関連の予約から恩恵を受けている一方、再生可能エネルギー事業は風力発電セクターの低迷の影響を受けており、第2四半期末時点で1,760億ドルの未処理案件があるにもかかわらず、今週は決算後に下落につながった。恩恵を受けたのは強豪だけではない。 XLIの29番目に大きな保有株であるエマーソン・エレクトリックは、過去1年間に若干の損失を被ったにもかかわらず、2024年7月時点と比べて20％近く上昇して取引されている。 60位の保有銘柄であるハベルは、2024年7月からの2年間で30％上昇している。
XLI 内部では、株価バリュエーションを支えているのは AI ブームだけではなく、セクター内の複数のニッチ市場をターゲットにした他の産業用 ETF も数十社が発売されています。
マーフィー氏はCNBCへの電子メールで、「そのセクターカテゴリーに分類される工業用ETFは60以上あり、それらを合わせると年初から約230億ドルの純流入が見られる」と述べた。 「産業株は市場に比べて非常に好調なパフォーマンスを示しているだけでなく、投資家が航空宇宙や防衛のテーマだけでなくAIインフラの構築に関連した長期的な成長トレンドに注目しているため、産業株ETFの資産収集にも（近年と比較して）勢いが見られます。」
ロッキード・マーティンは、工業株指数の上位20銘柄の1つであり、複数の戦争のさなか、米国および世界中で防衛費の増加で急成長している防衛産業の一角である。防衛請負業者は今週、収益と収益の両方を上回る四半期収益を報告し、木曜日の収益後の10％以上の上昇につながった。 LMT と、XLI の保有株数第 4 位である同業の RTX Corp. は、ともに過去 1 年間で約 35% 上昇しました。
2026 年に最も人気のある産業用 ETF
(出典: ETFdb.com. 純フロー、年初から現在まで)
- iシェアーズ・ディフェンス・インダストリアルズ・アクティブETF（IDEF）：44億ドル
- ステート ストリート インダストリアル セレクト セクター SPDR (XLI): 36 億ドル
- GlobalX ディフェンステック ETF (SHLD): 26 億ドル
- ファースト・トラストRBAアメリカン・インダストリアル・ルネサンスETF（AIRR）：25億ドル
- テマ スペース イノベーターズ ETF (NASA): 20 億ドル
航空宇宙・防衛企業はXLIのセクター配分の25％を占めており、防衛支出の増加だけでなく、最近の宇宙株の人気や宇宙経済の長期的な見通しによっても勢いが増している。しかし、その勢いは衰え、NASA ETFは過去1カ月で20％近く下落した。
JPモルガンのチーフETFストラテジスト、ジョン・マイヤー氏は、デジタル化が進む世界では防衛とAIの強化が相互に関連している可能性があり、これは産業界にとって良い前兆となるだろうと述べている。 「セキュリティと回復力は本当に重要であり、それが果たす役割はますます大きくなるだろう」と同氏は「ETFエッジ」で語った。
伝統的な航空部門は、XLI 保有トップ 10 に入るボーイング社やデルタ航空などの産業部門にも代表されています。デルタ航空の最高経営責任者（CEO）エド・バスティアン氏は最近CNBCに対し、航空運賃の高止まりに耐える回復力のある消費者心理の中で航空旅行への需要は高く、自社の事業状況は依然として好調であると語った。現在、原油価格の上昇が航空会社のマージンを圧迫しているにもかかわらず、デルタ航空の株価は過去1年間で45％上昇した。
マイヤー氏は、工業株への投資がピークに達する中、XLIのようなインデックスファンドへの取引のかなりの部分が受動的であり、ファンドの長期的な視野に対する投資家の信頼を示していることを認識することが重要であると付け加えた。
同氏は、「市場は常に将来を見据えており、株価とはまさに将来の収益のキャッシュフローそのものだ」と述べた。
マイヤー氏は「（産業への）資金流入は実に好調で、（170億ドル）」と指摘し、コア産業部門指数以外にも投資家の大きな関心があるという事実を付け加えた。 「全フローの 34% がアクティブに管理されています。」
ライブストリームを超えた毎週のニュースレターにご登録いただき、ETF 市場を形成するトレンドや数字を詳しくご覧ください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/26/best-ai-stocks-market-sp500.html",
    publishedAt: "2026-07-26T14:12:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "how-ai-wealth-could-be-distributed-to-al-8b28003f",
    title: "How AI wealth could be distributed to all Americans",
    titleJa: "AIの富はどのようにして全アメリカ人に分配されるのか",
    summaryJa: "人工知能の半分を国民が所有すべきだというバーニー・サンダース氏の最近の提案は、すぐに政策になる可能性は低いが、経済学者、技術研究者、政策立案者の間で勢いを増している広範な議論を反映している：AIが何兆ドルもの新たな経済価値を生み出したら、アメリカ人はどのような恩恵を受けることができるのか？アイデアには事欠きませんが、そのほとんどはテストされていません。しかし、リスクと AI に対する世論の反発の高まりにより、この問題は重要な問題となっています。",
    bodyOriginal: `Bernie Sanders' recent proposal that the public should own half of artificial intelligence is unlikely to become policy anytime soon, but it reflects a broader debate that is gaining momentum among economists, technology researchers, and policymakers: How can Americans benefit if AI creates trillions of dollars in new economic value? There is no shortage of ideas, most untested. But the risks, and rising public opposition to AI, make the question an important one.
AI wealth has accumulated quickly in the stock market, but many Americans are still limited in how much they benefit from that growth. Recent survey work indicates that a majority of U.S. workers now want to hold corporations more accountable via an AI sovereign wealth fund. There have been unconfirmed reports that ahead of a highly anticipated IPO, OpenAI has discussed offering the government a 5% equity stake. Meanwhile, Jeff Bezos recently told CNBC that the best policy idea to level the economic playing field is simply eliminating federal income taxes for the bottom-half of earners in the U.S.
Recent survey data indicates that this question is embedded in a rapid change in public sentiment towards AI. An Emerson College poll released this week found that only 27% of Americans support data centers being built in or near their community, with 63% opposed. Public sentiment has soured substantially in less than a year. A similar poll conducted in December 2025 found that while 33% said that they would support such developments, only 42% voiced their opposition. Many Americans feel as though they have nothing to gain and everything to lose from AI.
"When I see the data center proposal, I don't see progress," said Will Hollingsworth, a Northeast Ohio resident, speaking at an April public comment session regarding a proposed 257-acre data center campus in Portage County. "I see a gamble where the big tech companies get the gold while Portage County foots the bill."
"We're being asked to sacrifice the lifeblood of our city so that a trillion-dollar company can save a fraction of a cent on its margins," Hollingsworth said in comments that went viral. "We're being asked to drain our reservoirs so [that] a chatbot can write a poem or so [that] our sheriff can generate a picture of himself standing next to Bigfoot."
Among economists, tech industry researchers, and public policy experts, there are multiple proposals that address Hollingsworth's sentiment that the potential outcomes from AI development are dramatically skewed in favor of corporations. These include partial public ownership models in AI and other shared equity mechanisms.
Computer scientist Jaron Lanier, who currently holds the Office of the Chief Technical Officer Prime Unifying Scientist at Microsoft Research, has argued for a model sometimes referred to as "data dignity," where people receive compensation for the information and contributions that help create AI systems.
"I spent some time with Sen. Sanders when he visited the AI community at Stanford," Lanier said. "Whether [his proposal] would be a good idea depends on the nature of the government that would be responsible for routing benefits to people," he said. If the government were to simply become "just another AI company," he prefers what he calls a more "distributed economic model."
"Good data and supervision," Lanier says, can result in enough real money having a significant impact on people's lives.
"But if the future is to be the normative Silicon Valley one, where people will be fictionally treated as becoming useless because their contributions have been anonymized and dismissed in favor of pretending AI did all the work, then it is better for some kind of support to come through a government structure with a participatory/democratic element," Lanier said.
Paying people directly for AI training data
The challenge is figuring out how such a system would work. AI models are trained on enormous amounts of information from millions or billions of sources. Determining which individual contributions created value, and how much they should be paid, might run into the same criticisms that dogged efforts to compensate people for search histories — while the sums are massive in the aggregate, the economic value of any single individual's data is low.
Raul Castro Fernandez, an assistant professor of computer science at the University of Chicago who has recently written about how to fairly compensation the public for AI, refutes the argument that it's infeasible to accurately track (and compensate) the enormous amounts of data points collected by AI models from human contributors. "The strongest version of profit sharing is not a tax but a compensation system tied to the human contributions that make AI systems valuable in the first place," Fernandez said.
"They [the AI companies] already estimate how much data matters through scaling laws," Fernandez said. "A plausible mechanism would look less like calculating the exact value of every individual 'token' and more like a collective-management system, analogous in spirit to music royalties: AI companies would pay a share of model profits into a pool, the aggregate share would be anchored by evidence about how much model performance depends on data, and payments would be distributed across creators, publishers, platforms, or other intermediaries according to audited measures of data contribution," he said.
But Nicholas Vincent and Brent Hecht, researchers from Simon Fraser University and Northwestern University, respectively, caution against this approach. In a 2023 study examining whether it's possible to adequately compensate individuals for their contributions to an AI system, Vincent and Hecht argue that attaching valuations to each person's data can be extremely subjective and potentially counterintuitive.
"Seemingly minor design choices can seriously change the distribution of data values, a serious concern for any human-AI system seeking to incorporate such values for payments or other purposes," they state. "If a technology is reliant on the collective contributions of millions or billions of people, we already know each individual value will be very small, so why bother spending time and energy performing [potentially costly] data value estimation?" they concluded.
Creating new powerful unions for the 21st century
Direct payouts might not be the only way to achieve a more equitable data sourcing process, however. Matt Prewitt, president of RadicalxChange Foundation and one of the two authors of that policy paper, advocates for creating a new class of legal rights that give people powers to shape how AI works, a 21st century version of unions in which "people cannot sign away these rights on an individual level. Instead, people must join together into associations to exercise these rights."
This would create a new class of regulated associations that have "a very serious seat at the table with AI companies, and that have the power to gain shares, remuneration, governance, and power," Prewitt said.
Economist and technologist Glen Weyl, a principle researcher at Microsoft and founder of RadicalxChange, argues that the goal should not necessarily be government or public ownership of companies. According to RadicalxChange, efforts to "either divide and fractionalize ownership (i.e., give more or different people a share of conventional ownership); or consolidate ownership (i.e., place it in the hands of some representative of the public, like the state)," are able to do some good but are best seen as "only band-aids."
"Fractionalizing ownership just 'spreads around' the same old extractive incentives of conventional ownership, while consolidating ownership 'puts all the eggs in one basket,' intensifying the risks of institutional capture and illegitimate representation," RadicalxChange staffers wrote in a policy piece arguing for new models centered on common ownership.
New corporate taxes, less work hours
Others say the mechanisms already exist for policymakers to create a more equitable AI economy without resorting to untested ideas. According to Dean Baker, an economist and co-founder of the Center for Economic and Policy Research, these include stronger corporate taxes, antitrust enforcement, and labor protections.
While Baker said he remains unconvinced that there will be mass displacement of human labor by AI, he added that he would still fall back on "old remedies."
These remedies could include "a workable corporate income tax at a higher rate, for all companies," Baker said. But he added the form of payment could be new. "The best way to do this is require companies to turn over non-voting shares equal to the targeted tax rate (e.g. 25% of shares for a 25% tax rate)," he said.
Additionally, Baker says when it is rigorously applied, anti-trust enforcement provides a plausible route to fairer economic distribution of AI profits. Baker offered the analogy of cheap Chinese products displacing the blue-collar workforce. "We let in Chinese manufactured goods to screw large segments of the blue-collar workforce. We should not have protectionism to keep Elon Musk and Mark Zuckerberg ridiculously rich," he said.
Not repeating the policy mistakes of the past, including the lax attitude towards the rise of social media and the earlier global outsourcing era, is high on the radar of some of the most-senior policymakers in the U.S., who are betting that AI, and the jobs aspect in particular, will grow as an electoral and social issue in the years ahead.
While the idea of a universal basic income — or a "universal high income" program as Elon Musk calls it — to combat mass unemployment has been bandied about for years, there is a simpler labor market mechanism for distributing future economic efficiencies created by AI that already has a global precedent.
The answer isn't no work, but less work.
"We set the 40-hour work week 90 years ago and it has not changed since," Baker said. "Other countries have shortened the work week, work year. If AI is going to give us the promised boom in productivity, let's lower the threshold to 32 hours, or possibly even lower. We can also double the overtime premium to 100% rather than 50%," Baker said.`,
    bodyJa: `人工知能の半分を国民が所有すべきだというバーニー・サンダース氏の最近の提案は、すぐに政策になる可能性は低いが、経済学者、技術研究者、政策立案者の間で勢いを増している広範な議論を反映している：AIが何兆ドルもの新たな経済価値を生み出したら、アメリカ人はどのような恩恵を受けることができるのか？アイデアには事欠きませんが、そのほとんどはテストされていません。しかし、リスクと AI に対する世論の反発の高まりにより、この問題は重要な問題となっています。
AI の富は株式市場に急速に蓄積されましたが、多くのアメリカ人がその成長から恩恵を受ける量はまだ限られています。最近の調査結果によると、米国の労働者の大多数は現在、AI政府系ファンドを通じて企業にもっと責任を負わせたいと考えている。大いに期待されているIPOを前に、OpenAIが政府に5％の株式を提供することを検討しているという未確認の報告がある。一方、ジェフ・ベゾス氏は最近CNBCに対し、経済的競争条件を平等にするための最良の政策案は、単純に米国の下位所得者に対する連邦所得税を廃止することだと語った。
最近の調査データは、AI に対する国民の感情の急速な変化にこの疑問が埋め込まれていることを示しています。今週発表されたエマーソン大学の世論調査によると、地域内または近隣にデータセンターを建設することを支持するアメリカ人はわずか27％で、63％が反対している。国民感情は1年足らずで大幅に悪化した。 2025年12月に実施された同様の世論調査では、33％がそうした開発を支持すると回答した一方、反対を表明したのは42％のみだった。多くのアメリカ人は、AI から得るものは何もなく、失うものはすべてであるかのように感じています。
オハイオ州北東部在住のウィル・ホリングスワース氏は、ポーテージ郡に提案されている257エーカーのデータセンターキャンパスに関する4月のパブリックコメントセッションで、「データセンターの提案を見ても進歩が見られない」と述べた。 「大手テクノロジー企業が金を手に入れ、ポーテージ郡が費用を負担するというギャンブルが見えます。」
ホリングスワース氏は、「1兆ドル規模の企業がマージンを数セントでも節約できるよう、市の生命線を犠牲にするよう求められている」とコメントし、ネット上で拡散した。 「私たちは、チャットボットが詩などを書くことができるように、私たちの保安官がビッグフットの隣に立っている自分の写真を生成できるように、貯水池を排水するように求められています。」
経済学者、ハイテク業界の研究者、公共政策の専門家の間では、AI開発の潜在的な成果が企業に有利に大きく偏っているというホリングスワースの感情に対処する複数の提案が存在する。これらには、AI およびその他の共有株式メカニズムにおける部分的な公開所有権モデルが含まれます。
現在、Microsoft Research の首席技術責任者首席統一科学者を務めるコンピューター科学者のジャロン・ラニアー氏は、人々が AI システムの構築に役立つ情報と貢献に対する対価を受け取る、「データの尊厳」とも呼ばれるモデルを主張しています。
「サンダース上院議員がスタンフォード大学のAIコミュニティを訪問した際、私は彼としばらく時間を過ごした」とラニアー氏は語った。 「（彼の提案が）良いアイデアかどうかは、国民に給付金を分配する責任を負う政府の性格次第だ」と同氏は述べた。もし政府が単に「ただのAI企業」になるのであれば、彼は彼が呼ぶところの、より「分散型経済モデル」を好むとしている。
ラニアー氏は、「適切なデータと監督があれば、人々の生活に重大な影響を与える十分なリアルマネーが得られる可能性がある」と言う。
「しかし、未来が標準的なシリコンバレーのようなものになるのであれば、人々の貢献が匿名化され、AIがすべての作業を行ったかのように却下され、人々が役に立たなくなったものとして架空の扱いを受けることになるのであれば、参加型・民主主義的要素を備えた政府機構を通じて何らかの支援が得られる方がよい」とラニアー氏は語った。
AI トレーニング データに対して人々に直接支払いを行う
課題は、そのようなシステムがどのように機能するかを理解することです。 AI モデルは、数百万または数十億のソースからの膨大な量の情報に基づいてトレーニングされます。どの個人の貢献が価値を生み出したのか、そしてその貢献にいくら支払われるべきなのかを判断することは、検索履歴に対して人々に補償をしようとする粘り強い取り組みと同じ批判に遭遇する可能性がある。総額は総額としては巨額であるが、個人のデータの経済的価値は低い。
シカゴ大学のコンピューターサイエンス助教授であるラウル・カストロ・フェルナンデス氏は、最近AIに対して国民に公平な補償をする方法について執筆しており、人間の貢献者からAIモデルによって収集された膨大な量のデータポイントを正確に追跡（そして補償）することは不可能であるという議論に反論している。 「利益分配の最も強力なバージョンは税金ではなく、そもそもAIシステムの価値を高める人間の貢献に結び付けられた報酬システムです」とフェルナンデス氏は述べた。
「彼ら（AI企業）はすでに、スケーリングの法則を通じてデータがどれだけ重要であるかを推定している」とフェルナンデス氏は語った。同氏は、「もっともらしいメカニズムは、個々の『トークン』の正確な価値を計算するというよりは、精神的には音楽使用料に似た集合的な管理システムに近いものになるだろう。AI企業はモデルの利益の一部をプールに支払い、総シェアはモデルのパフォーマンスがデータにどの程度依存しているかについての証拠に基づいて決定され、支払いは監査されたデータ貢献度の尺度に従ってクリエイター、パブリッシャー、プラットフォーム、その他の仲介者に分配されるだろう」と述べた。
しかし、サイモン・フレイザー大学とノースウェスタン大学の研究者であるニコラス・ヴィンセントとブレント・ヘクトは、それぞれこのアプローチに対して警告している。 AI システムへの貢献に対して個人に適切な報酬を与えることが可能かどうかを調査した 2023 年の研究で、ヴィンセントとヘクトは、各個人のデータに評価を付けることは非常に主観的であり、直観に反する可能性があると主張しています。
「一見些細な設計上の選択が、データ値の分布を大きく変える可能性があり、決済やその他の目的でそのような値を組み込もうとする人間AIシステムにとっては重大な懸念事項である」と彼らは述べている。 「テクノロジーが何百万人、あるいは何十億人もの人々の集合的な貢献に依存しているのであれば、個々の値が非常に小さいことはすでにわかっています。では、なぜわざわざ時間とエネルギーを費やして[コストがかかる可能性がある]データ値の推定を実行するのでしょうか?」彼らはこう結論づけた。
21世紀に向けた新たな強力な労働組合の創設
ただし、直接支払いがより公平なデータ調達プロセスを実現する唯一の方法ではない可能性があります。 RadicalxChange Foundation の会長であり、この政策文書の執筆者 2 人のうちの 1 人であるマット・プレウィット氏は、人々に AI の動作方法を決定する権限を与える新しい種類の法的権利を創設することを提唱しています。これは、「人々が個人レベルでこれらの権利を放棄することはできません。代わりに、人々はこれらの権利を行使するために結社に参加する必要がある」という 21 世紀版の労働組合です。
これにより、「AI企業との非常に重要な議席を持ち、株式、報酬、ガバナンス、権力を獲得する力を持つ」新たな種類の規制対象団体が誕生するだろうとプレウィット氏は述べた。
マイクロソフトの主任研究員であり、RadicalxChange の創設者である経済学者兼技術者のグレン・ワイル氏は、目標は必ずしも政府や企業の公有であるべきではないと主張する。 RadicalxChange によると、「所有権を分割して細分化する（つまり、従来の所有権の分け前をより多くの人々または異なる人に与える）、または所有権を統合する（つまり、国家などの国民の代表者の手に委ねる）」という取り組みは、ある程度の効果はあるものの、「単なる応急処置」と見なすのが最善だという。
「所有権の細分化は従来の所有権と同じ古い搾取的インセンティブを『周囲に広げる』だけだが、所有権の統合は『すべての卵を一つの籠に入れる』ことになり、制度的捕獲と不法代表のリスクを増大させる」とRadicalxChangeのスタッフらは共同所有権を中心とした新しいモデルを主張する政策文書の中で書いている。
新しい法人税、労働時間の削減
政策立案者が未検証のアイデアに頼ることなく、より公平なAI経済を構築するためのメカニズムがすでに存在していると言う人もいる。経済政策研究センターの共同創設者で経済学者のディーン・ベイカー氏によると、これには法人税の強化、独占禁止法執行、労働保護などが含まれるという。
ベイカー氏は、AIによって人間の労働力が大量に奪われることには依然として確信が持てないとしながらも、依然として「古い治療法」に頼るつもりだと付け加えた。
ベイカー氏は、これらの救済策には「すべての企業に対して、より高い税率で実行可能な法人所得税」が含まれる可能性があると述べた。しかし、支払い方法は新しいものになる可能性があると同氏は付け加えた。同氏は、「これを実現する最善の方法は、目標税率に等しい議決権のない株式を引き渡すよう企業に義務付けることだ（例えば、税率25％の場合は株式の25％）」と述べた。
さらに、ベイカー氏は、独禁法が厳格に適用されると、AIの利益をより公平に経済的に分配するためのもっともらしいルートが提供されると述べている。ベイカー氏は、安価な中国製品がブルーカラーの労働力に取って代わるという例えを披露した。 「我々は中国製品を導入してブルーカラー層の労働力の大部分をねじ曲げている。イーロン・マスク氏やマーク・ザッカーバーグ氏を途方もない金持ちにしておくために保護主義をすべきではない」と述べた。
ソーシャルメディアの台頭や初期の世界的なアウトソーシング時代に対する緩い態度など、過去の政策の失敗を繰り返さないことは、米国の一部の最上級政策立案者の注目を集めており、彼らはAI、特に雇用の側面が今後数年間で選挙および社会問題として大きくなると賭けている。
大量失業と闘うための普遍的なベーシックインカム、あるいはイーロン・マスクの言うところの「普遍的高所得」プログラムというアイデアは何年も議論されてきたが、AIによって生み出された将来の経済効率を分配するためのより単純な労働市場メカニズムがすでに世界的な前例を持っている。
答えは仕事をしないのではなく、仕事を減らすことです。
「我々は90年前に週40時間労働を定めたが、それ以来変わっていない」とベイカー氏は語った。 「他の国では週労働時間や年間労働時間が短縮されている。AIによって約束された生産性向上が実現するのであれば、閾値を32時間に引き下げるか、あるいはさらに低くしよう。時間外労働割増率を50％ではなく2倍の100％にすることもできる」とベイカー氏は語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/26/how-can-ai-wealth-be-shared-with-all-americans.html",
    publishedAt: "2026-07-26T14:06:53+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "gatwick-airport-left-without-running-wat-c7f60023",
    title: "Gatwick Airport left without running water after major outage",
    titleJa: "ガトウィック空港は大規模停電で断水状態に",
    summaryJa: "ガトウィック空港は大規模停電で断水状態に- 公開されました",
    bodyOriginal: `Gatwick Airport left without running water after major outage
- Published
Passengers at both terminals of Gatwick Airport are being affected by a water supply issue, with toilets reported to be out of order and restaurants closed.
In a statement on X, the airport in West Sussex apologised for the disruption, external and said a problem in the Horley area was affecting supplies and was under investigation.
Bottled water is being made available to passengers and staff and contingency measures have also been put in place, it said.
SES Water, which covers the airport, has said its Bough Beech water treatment works was back up and running after an earlier power outage, but it still needs to treat the water before returning supplies.
The company, which also supplies parts of Kent, Surrey and south London, said complications caused by a power outage at the treatment works meant some customers had experienced low water pressure or a temporary loss of supply.
A spokesperson had earlier confirmed that Gatwick Airport was affected.
In an update just before 13:45 BST, they said: "Our Bough Beech water treatment works are back up and running.
"We now need to treat the water before returning services to normal as quickly as we possibly can."
Gatwick said the supply issue was continuing to cause disruption on Sunday afternoon.
In a statement, it said: "There is currently no water supply in either terminal.
"Our staff are on hand to support passengers and provide assistance where needed, some restaurant partners have opened to provide additional seating."
The airport said it was working closely with the water company to restore supplies as quickly as possible.
'At least provide chairs'
Earlier, passenger Paul Lee told the BBC he had not heard any announcements about the issue or seen bottled water being handed out.
He said: "For people who need to go to the toilet, this isn't good, and still no announcement or official information - and the water they mentioned isn't being distributed.
"I'm taking off soon, so that's fine, but for passengers in a few hours, this will be bad."
Lee added that restaurants and lounges were shut but shops were open.
Former MP and ex-CEO of UK Music Michael Dugher urged the airport on social media to "at least allow people to use the chairs in all the closed restaurants and bars".
He said: "No water is one thing but depriving people of somewhere to sit is another... families are having to sit on the floor."
BBC reporter Adam Dowling, who was flying from Valencia to Gatwick, said his flight had been delayed because of the water supply disruption and passengers had been informed that landing slots were being moved around "to reduce the number of flights" coming in to Gatwick.
The BBC has contacted Gatwick Airport to confirm if there has been any flight disruption.
Roger Wood, from Tunbridge Wells in Kent, said he thought his friends were joking when they told him there were no restaurants or bars open in Gatwick's south terminal.
When he arrived to meet them ahead of his flight on Sunday, he found "there was no water at all - no Nando's, no Wetherspoon, all of those places were completely shut and stopping people coming in as there was no fresh water or ability to wash hands".
He told the BBC: "Normally Wetherspoon is absolutely packed but there were staff on every door turning people away, including people asking for some hot food.
"The only place you could buy something was places like Pret and Itsu where it was packaged food, or shops."
Wood said people could go in the toilets but there was no way to wash hands and conditions had grown worse in the hour or two they were there.
People heading to the airport for flights have been advised not to arrive early.
A statement from Easyjet said: "Due to a water supply issue affecting London Gatwick Airport, bag drop desks are temporarily opening two hours before departure instead of three hours."
The airline said: "Please do not arrive earlier, as you will not be able to drop off your bags or enter the departure lounge until bag drop opens."
SES Water confirmed the Kent postcodes TN8 and TN11 and parts of Surrey postcodes RH1, RH6 and RH10 had no water supply or low pressure. The company said it was delivering bottled water to vulnerable customers.
Gatwick Airport and the local area also suffered water issues in July 2022, when low pressure caused by a burst water main affected 1,200 houses and closed toilet facilities at the airport.
Get in touch
Are you at Gatwick airport and been affected? Get in touch
Follow BBC Sussex on Facebook, external, X, external, and Instagram, external and listen to BBC Radio Sussex on Sounds. Send your story ideas to southeasttoday@bbc.co.uk, external or WhatsApp us on 08081 002250.`,
    bodyJa: `ガトウィック空港は大規模停電で断水状態に
- 公開されました
ガトウィック空港の両ターミナルの乗客は給水トラブルの影響を受けており、トイレは故障し、レストランは休業していると伝えられている。
ウェストサセックス州の空港はＸに関する声明で、外部の混乱について謝罪し、ホーリー地域での問題が供給に影響を与えており、調査中であると述べた。
ボトル入り飲料水は乗客と従業員に提供されており、緊急事態対策も講じられているという。
空港を管轄するSESウォーターは、以前の停電の後、ボー・ブナの水処理施設は復旧して稼働しているが、供給を戻す前に水を処理する必要があると述べた。
ケント州、サリー州、ロンドン南部の一部にも供給している同社は、処理施設での停電によって引き起こされた合併症により、一部の顧客が水圧低下や一時的な供給喪失に見舞われたと述べた。
広報担当者はこれに先立ち、ガトウィック空港が影響を受けたことを認めていた。
BST 13:45 直前の更新で、彼らは次のように述べました。「当社のブナ水処理施設は復旧し、稼働しています。
「できる限り早くサービスを正常に戻す前に、水を処理する必要があります。」
ガトウィック紙は、日曜午後も供給問題により混乱が続いていると述べた。
同社は声明で「現在、どちらのターミナルにも水道は供給されていない。
「当社のスタッフは乗客をサポートし、必要に応じてサポートを提供します。一部のレストランパートナーは追加の座席を提供するためにオープンしています。」
空港は水道会社と緊密に連携し、供給をできるだけ早く復旧させるとしている。
「せめて椅子を用意して」
これに先立ち、乗客のポール・リーさんはBBCに対し、この問題に関するアナウンスは聞いていないし、ボトル入りの水が配られているのを見たこともないと語った。
同氏は、「トイレに行きたい人にとって、これは良くないことだが、未だに発表や公式情報はなく、彼らが言及した水は配布されていない。
「私はもうすぐ離陸するので大丈夫ですが、数時間後の乗客にとっては大変なことになります。」
リー氏は、レストランやラウンジは閉まっていたが、店は開いていたと付け加えた。
元国会議員でUKミュージックの元最高経営責任者（CEO）マイケル・ダガー氏はソーシャルメディアで空港に対し、「少なくとも閉鎖されているすべてのレストランやバーの椅子の使用を許可する」よう求めた。
同氏は、「水がないことは問題だが、人々が座る場所を奪われることは別問題だ…家族は床に座らなければならない」と語った。
バレンシアからガトウィックに飛んでいたBBCのアダム・ダウリング記者は、断水のため飛行機が遅れ、ガトウィックに到着する「便数を減らすために」着陸枠が変更されていると乗客に知らされたと述べた。
BBCはガトウィック空港に連絡し、運航に乱れがあったかどうかを確認した。
ケント州タンブリッジ・ウェルズ在住のロジャー・ウッドさんは、ガトウィック空港の南ターミナルには開いているレストランやバーがないと言われた友人たちが冗談を言っているのだと思ったと語った。
日曜日の飛行機に先立って彼らに会うために到着したとき、彼は「水が全くなかった。ナンドスもウェザースプーンもなかった。それらの場所はすべて完全に閉鎖され、真水や手を洗う能力がなかったため、人々が来るのを妨げた」ことに気づいた。
同氏はBBCに対し、「通常、ウェザースプーンは満員だが、どのドアにもスタッフがいて、温かい食べ物を求める人も含めて人々を追い返していた」と語った。
「何かを買える場所は、プレットやイツのような包装食品かショップだけでした。」
ウッド氏は、人々はトイレに行くことはできたが、手を洗う方法がなく、トイレにいた1～2時間で状況は悪化したと語った。
飛行機に乗るために空港に向かう人は、早めに到着しないよう勧告されている。
イージージェットは声明で「ロンドン・ガトウィック空港に影響を及ぼしている水道問題のため、手荷物預けデスクは一時的に出発の３時間前ではなく２時間前に営業している」と述べた。
航空会社は「手荷物預かり所が開くまでは手荷物を降ろしたり、出発ラウンジに入ることができないため、早めに到着しないようにしてください」と述べた。
SESウォーターは、ケント州の郵便番号TN8とTN11、およびサリー州の郵便番号RH1、RH6、RH10の一部で水道が供給されていないか、圧力が低いことを確認した。同社は、弱い立場にある顧客にボトル入りの水を配達していると述べた。
ガトウィック空港と地元地域は、2022年7月にも水道本管の破裂による低圧で1,200戸の住宅が被害を受け、空港のトイレ施設が閉鎖された際に水問題に見舞われた。
連絡する
ガトウィック空港にいて影響を受けましたか?連絡する
Facebook (外部)、X (外部)、および Instagram (外部) で BBC サセックスをフォローし、BBC ラジオ サセックス オン サウンドを聞いてください。ストーリーのアイデアを、southeasttoday@bbc.co.uk、社外、または WhatsApp (08081 002250) に送信してください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cdew2dnxlzzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-26T13:44:01+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/409a/live/99bb0920-88f6-11f1-8824-a9ae603ecd1c.jpg",
    readTime: 5,
  },
  {
    id: "ukraine-strikes-iranian-vessels-in-caspi-585e8921",
    title: "Ukraine strikes Iranian vessels in Caspian Sea, Tehran accuses Kyiv of 'hostile and criminal act'",
    titleJa: "ウクライナ、カスピ海でイラン船舶を攻撃、テヘランはキエフを「敵対的かつ犯罪的行為」で非難",
    summaryJa: "中東での戦争がウクライナ紛争と重なる恐れがあるため、イランは日曜日、テヘランにあるウクライナ外交官を呼び出し、カスピ海でのイラン商船への攻撃に抗議した。イランは、この攻撃により船員１名が死亡、数名が負傷したと発表した。イラン外務省は日曜早朝、テヘランのウクライナ臨時代理大使に苦情を申し立て、「『敵対的かつ犯罪的行為』に対するイランの強い抗議を伝えた」とイラン・イスラム共和国通信が報じた。",
    bodyOriginal: `Iran summoned a Ukrainian diplomat in Tehran on Sunday to protest an attack on an Iranian commercial vessel in the Caspian Sea, as the war in the Middle East threatened to overlap with the Ukraine conflict.
Iran said the attack left one sailor dead and injured several others. The country's foreign ministry complained to Ukraine's chargé d'affaires in Tehran early on Sunday and "conveyed Iran's strong protest over the 'hostile and criminal act.'" Iran's Islamic Republic News Agency reported.
In a post on X highlighting Ukraine's attacks on distant Russian targets, Ukrainian President Volodymyr Zelenskyy said Saturday that his country's forces "also achieved very strong results with long‑range strikes in the Caspian Sea – including vessels used in military cargo shipments involving Iran, as well as a warship."
Russia has long used Iranian-designed Shahed drones in its war on Ukraine, a weapon that analysts sometimes refer to as "the poor man's cruise missile."
But the latest attacks by Ukraine, combined with Saudi military strikes on Iran-backed Houthi targets in Yemen following the rebel group's attacks on Red Sea shipping in recent days, represent a widening of the Middle East conflict.
Air defenses in Saudi Arabia reportedly intercepted two ballistic missiles from Yemen on Saturday.
The fighting in the Red Sea and Caspian Sea took place during a pause in U.S. strikes on Iran after 13 straight nights of attacks.
U.S. President Donald Trump has halted attacks on Iran for now to allow more room for diplomacy, U.S. ambassador to the United Nations Mike Waltz told Fox News on Sunday.
"He's giving talks some space, he's giving it a little bit of room," Waltz said.
The New York Times cited administration officials as saying that Trump has set aside, at least for now, plans to sharply escalate U.S. military assaults against Iran, amid concerns over falling stockpiles of Patriot anti-missile interceptors and other air defense munitions.
The U.S. military said on Saturday that its naval blockade against Iran "remains in full effect" but did not explain why it halted its attacks. There were also no reports of attacks from Iran on neighboring countries.
Naval blockade
U.S. Central Command said late Saturday its naval blockade against Iran remains in full effect.
"As of July 25, CENTCOM has redirected 12 commercial vessels trying to run the blockade, disabled 2 that didn't comply, and boarded 2 to ensure total compliance," it said in a post on X late Saturday.
Meanwhile, Iran's Islamic Revolutionary Guard Corps Navy said it has "established complete authority over the Strait of Hormuz." In a post early Sunday on the Telegram social media platform, it said it forced six ships to anchor following warnings over the last 24 hours.
While formal high-level negotiations between the U.S. and Iran have stalled, Iranian Foreign Ministry spokesman Esmail Baghaei said technical talks with Oman on the Strait of Hormuz continued over the weekend.
Oil prices dropped Friday on a report that Pakistan is looking for a way to restart talks between the U.S. and Iran.
Brent crude futures, the international benchmark, fell nearly 4% to close at $96.78 a barrel. U.S. West Texas Intermediate crude futures lost 3% to settle at $89.31 per barrel.
Three sources told Reuters that Pakistan's effort to renew U.S.-Iran talks was backed by China.`,
    bodyJa: `中東での戦争がウクライナ紛争と重なる恐れがあるため、イランは日曜日、テヘランにあるウクライナ外交官を呼び出し、カスピ海でのイラン商船への攻撃に抗議した。
イランは、この攻撃により船員１名が死亡、数名が負傷したと発表した。イラン外務省は日曜早朝、テヘランのウクライナ臨時代理大使に苦情を申し立て、「『敵対的かつ犯罪的行為』に対するイランの強い抗議を伝えた」とイラン・イスラム共和国通信が報じた。
ウクライナのヴォロディミル・ゼレンシキー大統領は土曜日、遠く離れたロシアの目標に対するウクライナの攻撃を強調するXへの投稿の中で、同国軍が「軍艦だけでなくイランとの軍事貨物輸送に使用された船舶も含め、カスピ海での長距離攻撃でも非常に強力な成果を上げた」と述べた。
ロシアは長年、イランが設計したシャヒド無人機を対ウクライナ戦争で使用しており、アナリストはこの兵器を「貧乏人の巡航ミサイル」と呼ぶこともある。
しかし、最近のウクライナによる最近の攻撃は、ここ数日の紅海の船舶に対する反政府勢力による攻撃に続き、イエメンにあるイランが支援するフーシ派の標的に対するサウジアラビアの軍事攻撃と相まって、中東紛争の拡大を表している。
サウジアラビアの防空部隊は土曜日、イエメンからの弾道ミサイル２発を迎撃したと伝えられている。
紅海とカスピ海での戦闘は、13夜連続の米国によるイラン攻撃の一時停止中に起こった。
マイク・ウォルツ国連大使は日曜、フォックスニュースに対し、ドナルド・トランプ米大統領は外交の余地を増やすため、当面はイランへの攻撃を停止したと語った。
「彼は交渉にある程度のスペースを与えている、少しだけ余地を与えている」とウォルツ氏は語った。
ニューヨーク・タイムズは、対ミサイル迎撃機パトリオットやその他の防空兵器の備蓄が減少する懸念がある中、トランプ大統領がイランに対する米軍攻撃を急激にエスカレートさせる計画を少なくとも当面は棚上げしたと政権当局者の発言を引用した。
米軍は土曜日、イランに対する海上封鎖は「引き続き完全な効力を持っている」と述べたが、攻撃を中止した理由については説明しなかった。イランによる近隣諸国への攻撃の報告もなかった。
海上封鎖
米中央軍は土曜日遅く、対イラン海上封鎖は引き続き完全に有効であると発表した。
「7月25日の時点で、CENTCOMは封鎖を実行しようとしていた12隻の商船を方向転換し、従わなかった2隻を無効にし、完全な遵守を確実にするために2隻に乗船した」と土曜日遅くのXへの投稿で述べた。
一方、イランイスラム革命防衛隊海軍は「ホルムズ海峡に対する完全な権限を確立した」と述べた。ソーシャルメディアプラットフォームのテレグラムへの日曜早朝の投稿で、過去２４時間の警告を受けて６隻の船が停泊を余儀なくされたと述べた。
米国とイラン間の正式なハイレベル交渉は行き詰まっているが、イラン外務省報道官エスマイル・バガエイ氏は、ホルムズ海峡におけるオマーンとの技術協議は週末も続いたと述べた。
金曜日、パキスタンが米国とイランの交渉再開方法を模索しているとの報道を受け、原油価格が下落した。
国際指標であるブレント原油先物は４％近く下落し、１バレル＝９６．７８ドルで取引を終えた。米国ウェスト・テキサス・インターミディエイト原油先物は３％下落し、１バレル＝８９．３１ドルで落ち着いた。
関係筋３人はロイターに対し、米国・イラン協議再開に向けたパキスタンの取り組みは中国の支援を受けていると語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/26/ukraine-strikes-iranian-vessels-tehran-accuses-kyiv-of-hostile-act.html",
    publishedAt: "2026-07-26T13:34:14+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "there-s-a-technical-triple-threat-for-st-9cc87835",
    title: "There’s a technical ‘triple threat’ for stocks, but also places investors can hide",
    titleJa: "株式には技術的な「三重の脅威」があるが、投資家が隠れられる場所もある",
    summaryJa: "米国債利回りと原油価格が急上昇し、ドルが長期上昇トレンドに向けての突破を確認したことで、S&P 500は主要チャートの支持線を下回った。",
    bodyOriginal: `Treasury yields and oil prices surged, and the dollar confirmed the breakout toward a longer-term uptrend, to push the S&amp;P 500 below key chart support.`,
    bodyJa: `米国債利回りと原油価格が急上昇し、ドルが長期上昇トレンドに向けての突破を確認したことで、S&P 500は主要チャートの支持線を下回った。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/theres-a-technical-triple-threat-for-stocks-but-also-places-investors-can-hide-59108c6b?mod=mw_rss_topstories",
    publishedAt: "2026-07-26T13:00:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-84992812",
    readTime: 2,
  },
  {
    id: "the-treasury-market-is-sending-fed-chair-1f0deaa0",
    title: "The Treasury market is sending Fed Chair Kevin Warsh a clear warning about rates",
    titleJa: "国債市場はFRB議長のケビン・ウォーシュに金利について明確な警告を発している",
    summaryJa: "米国債利回りの上昇は、市場がインフレについていかに「非常に懸念している」か、そしてFRBが強硬な対話を行動で裏付けるかどうかを示している",
    bodyOriginal: `Rising Treasury yields show how “enormously worried” the market is about inflation — and whether the Fed will back up its tough talk with action`,
    bodyJa: `米国債利回りの上昇は、市場がインフレについていかに「非常に懸念している」か、そしてFRBが強硬な対話を行動で裏付けるかどうかを示している`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-treasury-market-is-sending-fed-chair-kevin-warsh-a-clear-warning-about-rates-d0026da9?mod=mw_rss_topstories",
    publishedAt: "2026-07-26T12:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-92198502",
    readTime: 2,
  },
  {
    id: "100-days-until-midterm-election-dccc-cha-091a50ad",
    title: "100 days until midterm election: DCCC Chair DelBene says Democrats have the momentum",
    titleJa: "中間選挙まであと100日：DCCCのデルベーネ議長、民主党には勢いがあると発言",
    summaryJa: "ドナルド・トランプ大統領の支持率は依然として低く、インフレは上昇しており、イラン戦争は長引いており、ガソリン価格は1ガロン当たり4ドルを超えて再び上昇しており、即時の緩和は見込めない。この中には国にとって悪いニュースもあるかもしれないが、上下両院で過半数を取り戻したい民主党にとっては、2026年の中間選挙に向けた一連の出来事がチャンスを生む可能性がある。そして、民主党議会選挙委員会のスーザン・デルベネ委員長（ワシントン州民主党）によると、投票日まであと100日となっているが、党は順調に進んでいるという。",
    bodyOriginal: `President Donald Trump's approval ratings remain low, inflation has been elevated, and the Iran war is dragging on, sending gas prices back up over $4 per gallon with no immediate relief in sight.
Some of this may be bad news for the country, but for Democrats, eager to win back majorities in the House and the Senate, the sequence of events leading up to the 2026 midterm election could create opportunities. And according to Democratic Congressional Campaign Committee Chair Suzan DelBene, D-Wash., the party is sitting pretty with 100 days to go until Election Day.
"We have great candidates. We have the momentum. We have the message," DelBene said in an interview with CNBC. "And I think the thing that's been really critical too is that the American people are with us. They want folks who are going to stand up for the issues they're facing and support them. And Republicans don't care. They are a rubber stamp for Donald Trump."
Democrats have been laser-focused on cost-of-living concerns this election cycle, and DelBene said they'll continue to hammer Trump and Republicans on his handling of the economy to win back the House, which Republicans have narrowly controlled for the last two years. Democrats' chances of winning a Senate majority are slimmer.
A recent Fox News poll found Democrats up seven percentage points over Republicans on a generic ballot, while a survey from Emerson College Polling gave them an 11-percentage-point edge. CNBC's All America Economic Survey, conducted earlier this month, found voters would slightly prefer Democrats to take win control of Congress this November.
"Absolutely the number one issue across the country is affordability. Families are struggling with housing, food, healthcare, childcare, energy costs, gas prices," DelBene said. "It's hard when you're just trying to get by day-to-day to think about anything else."
The National Republican Campaign Committee did not make its chair, Rep. Richard Hudson, R-N.C., available for an interview. Mike Marinella, an NRCC spokesperson, pushed back on Democratic midterm narratives.
"Republicans have a more favorable map, stronger candidates, a deep fundraising advantage, and a winning message that serves as a stark contrast to Democrats' radical turn to socialism and messy infighting," Marinella said.
While Democrats do appear to have a slight advantage to win the House this year, it hasn't been all good news for the DCCC of late.
The party's campaign arm has taken fire from within its ranks over its choice to get involved in contested primary elections in some parts of the country, where in some cases DCCC-backed candidates lost to more liberal challengers.
Last week, Amish Shah, a doctor and former Arizona state representative, bested the DCCC-backed Marlene Galán-Wood in the Democratic primary in the state's 1st congressional district, one of the most competitive seats this year and a potential key to either party winning a majority.
Some Democrats in response have called for the DCCC to stay out of primaries, or to change its internal processes for endorsing candidates.
DelBene shrugged off the criticisms.
"We have folks who think we should, folks who think we shouldn't," DelBene said, of the debate around the DCCC's intraparty interventions. "I think the key is the stakes are incredibly high this election, and our job is to make sure we win all across the country. And we're going to win in these districts across the country too."
Democrats must also contend with their surging progressive wing, propelled by the Democratic Socialists of America. DSA-backed candidates have toppled incumbent Democrats in states like New York and California, and many have an anti-establishment ethos that could cause headaches for party leaders if they do win back a House majority.
DelBene, however, said the ideological diversity of the party's candidates is a strength.
"I think if you look across the candidates that we have running in these swing districts across the country, they are all unique fits for their districts. We've got folks who've been supported by Bernie [Sanders], to the Blue Dogs," she said, referencing a congressional caucus of moderate Democrats. "But the key is having the candidate who is authentic, independent minded and focused on the needs of their community."
Democrats also lag the NRCC in fundraising and are battling persistently low approval ratings. According to the poll aggregator RealClearPolling, Democrats were viewed equally as unfavorably as their Republican colleagues through June of this year.
And they must contend with newly drawn congressional districts throughout the country where Republicans look to net more than a handful of seats.
But with Trump's approval on the rocks and Republicans seeking to retain control amid economic uncertainty for many voters, Democrats are bullish that some of the GOP-drawn seats in states like Florida and Texas actually provide more pickup opportunities.
"They've decided that the only way they're going to stay in power is to rig the system," DelBene said of Republican mid-decade redistricting efforts.
"People hate it. it's actually motivating a lot of voters in places like Texas and Florida and across the country because it has nothing to do with the challenges that they're facing," she said. "They see that Republicans are trying to pick their voters versus letting voters pick their representatives."`,
    bodyJa: `ドナルド・トランプ大統領の支持率は依然として低く、インフレは上昇しており、イラン戦争は長引いており、ガソリン価格は1ガロン当たり4ドルを超えて再び上昇しており、即時の緩和は見込めない。
この中には国にとって悪いニュースもあるかもしれないが、上下両院で過半数を取り戻したい民主党にとっては、2026年の中間選挙に向けた一連の出来事がチャンスを生む可能性がある。そして、民主党議会選挙委員会のスーザン・デルベネ委員長（ワシントン州民主党）によると、投票日まであと100日となっているが、党は順調に進んでいるという。
デルベーネ氏はCNBCとのインタビューで、「我々には素晴らしい候補者がいる。我々には勢いがある。我々にはメッセージがある」と語った。 「そして、本当に重要なことは、アメリカ国民が私たちとともにいることだと思います。彼らは、自分たちが直面している問題のために立ち上がって自分たちをサポートしてくれる人々を望んでいます。そして共和党は気にしません。彼らはドナルド・トランプのゴム印なのです。」
民主党は今回の選挙サイクルで生活費への懸念に焦点を絞っており、デルベネ氏は、過去２年間共和党が僅差で支配してきた下院を取り戻すために、引き続きトランプ大統領と共和党の経済政策への対応を厳しく非難するつもりだと述べた。民主党が上院過半数を獲得する可能性は低い。
最近のFOXニュース世論調査では、一般投票で民主党が共和党を7ポイント上回ったが、エマーソン大学世論調査の調査では民主党が11ポイントの差をつけていた。 CNBCが今月初めに実施した全米経済調査では、有権者は今年11月に民主党が議会を掌握することをわずかに望んでいると判明した。
「国全体で一番の問題は間違いなく、手頃な価格だ。家族は住宅、食料、医療、保育、光熱費、ガソリン価格で苦労している」とデルベーネ氏は語った。 「何か他のことを考えて日々を過ごしていくのは難しいです。」
全国共和党選挙委員会は、委員長のリチャード・ハドソン下院議員（共和党、ノースカロライナ州）のインタビューに応じなかった。 NRCCの広報担当者マイク・マリネラ氏は、民主党の中間期の見解を否定した。
マリネラ氏は、「共和党はより有利な地図、より強力な候補者、資金調達面での大きな優位性、そして民主党の社会主義への急進的な方向転換や混乱した内紛とは全く対照的な勝利のメッセージを持っている」と述べた。
今年は民主党が下院での勝利に若干有利に見えるが、最近のDCCCにとって良いニュースばかりではない。
同党の選挙運動部門は、国内の一部地域で争われている予備選挙に参加するという選択をめぐって党内から激しい非難を浴びており、DCCCが支援する候補者がよりリベラルな挑戦者に敗れたケースもあった。
先週、医師で元アリゾナ州下院議員のアーミッシュ・シャー氏が、今年最も競争が激しい議席の一つであり、両党が過半数を獲得する鍵となる可能性がある同州第1下院選挙区の民主党予備選で、DCCCが支援するマレーネ・ガラン＝ウッド氏を破った。
これに対し一部の民主党議員は、DCCCが予備選に参加しないこと、あるいは候補者を支持するための内部プロセスを変更することを求めている。
デルベネ氏は批判を無視した。
デルベーネ氏は、DCCCの党内介入を巡る議論について、「すべきだと考える人もいれば、すべきではないと考える人もいる」と語った。 「重要なのは、今回の選挙の賭け金が信じられないほど高いということだと思います。私たちの仕事は、全国各地で確実に勝利することです。そして、全国のこれらの選挙区でも勝つつもりです。」
民主党はまた、アメリカ民主社会主義者が推進する、急増する進歩派とも戦わなければならない。 DSAが支援する候補者はニューヨーク州やカリフォルニア州などの州で現職民主党を打倒しているが、その多くは反体制的な精神を持っており、もし下院過半数を取り戻した場合には党指導者にとって頭痛の種となる可能性がある。
しかしデルベーネ氏は、党候補者のイデオロギーの多様性が強みだと述べた。
「全国の激戦区で私たちが立てている候補者を見てみると、みんなそれぞれの選挙区にぴったりのユニークな候補者だと思います。バーニー（サンダース）氏からブルードッグスまで支持されてきた人たちがいます」と、民主党穏健派の議会議員団に言及しながら彼女は語った。 「しかし重要なのは、真正で独立心を持ち、コミュニティのニーズに焦点を当てた候補者を擁することです。」
民主党は資金調達でもNRCCに遅れをとっており、支持率の低迷が続いている。世論調査集計会社RealClearPollingによると、今年6月までは民主党も共和党の同僚と同様に不利に見られていたという。
そして、共和党が数議席以上の獲得を目指している全米で新たに定められた下院選挙区と争わなければならない。
しかし、トランプ大統領の承認が暗礁に乗り上げ、多くの有権者の経済不安の中で共和党が主導権を維持しようとしていることから、民主党はフロリダやテキサスなどの州で共和党が獲得した議席の一部が実際にはより多くの獲得機会を提供すると強気だ。
「彼らは権力の座を維持する唯一の方法は制度を不正操作することだと判断した」とデルベーネ氏は共和党が10年半ばに行った選挙区再編の取り組みについて語った。
「人々はそれを嫌っています。実際、テキサスやフロリダのような場所や全米各地で、多くの有権者を動機付けています。なぜなら、それは彼らが直面している課題とは何の関係もないからです」と彼女は語った。 「彼らは、共和党が有権者に代表者を選ばせるのではなく、有権者を選ぼうとしていると認識している。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/26/election-midterms-dccc-chair-delbene-democrats.html",
    publishedAt: "2026-07-26T12:00:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
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
