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
    id: "jersey-mike-s-stock-falls-7-in-public-ma-0a17bb75",
    title: "Jersey Mike's stock falls 7% in public market debut after pricing shares at $23",
    titleJa: "ジャージー・マイクの株価は23ドルで株価を公開後、公開市場デビューで7％下落",
    summaryJa: "ジャージー・マイクズの株価は、同社がティッカー「JMKE」でニューヨーク証券取引所に上場した後、木曜午後の取引で約7％下落した。株価は1株あたり21ドルと予想レンジの中間点である1株あたり23ドルを下回る21ドルで取引を開始した。",
    bodyOriginal: `Shares of Jersey Mike's fell about 7% during trading on Thursday afternoon after the company made its public market debut on the New York Stock Exchange under the ticker "JMKE."
The stock opened at $21 per share, below its initial public offering pricing of $23 per share, at the midpoint of the expected range of $21 to $25 per share.
Jersey Mike's sold 43.5 million shares, raising about $1 billion and valuing the company at $7.3 billion. With those proceeds, the chain is now among the largest-ever initial fundraises for a restaurant IPO.
Jersey Mike's has nearly 3,300 locations, making it the second-largest hoagie sandwich chain in the U.S. behind Subway. It's now the largest public chain in the category.
The company reported net income of $55 million on total revenue of $724 million last year. Its same-store sales increased 3% over the same period. The metric tracks sales growth at restaurants open at least a year.
Broadly, diners are eating out less often or seeking deals to save money, and the restaurant industry has seen traffic and sales soften. But Jersey Mike's has largely bucked the trend, and its high average unit volumes and asset-light franchise model made the stock attractive to investors.
CEO Charlie Morrison told CNBC that Jersey Mike's customer base typically skews "a little higher income," insulating the chain from some of the pullback in consumer spending.
"We're seeing the consumer come back," Morrison said. "We've seen positive transition growth. In fact, most of our same-store sales growth this year to date has been driven primarily by transaction growth."
Jersey Mike's successful IPO is a positive harbinger for other consumer companies looking to go public. Rival restaurant company Inspire Brands, which counts Dunkin' and Jimmy John's among its brands, has confidentially filed for an initial public offering and could easily snatch Jersey Mike's title for biggest-ever restaurant IPO.
Clothing company Reformation is also expected to make its public market debut on Thursday; the retailer priced shares at $15, on the low end of its expected range of $15 to $17.
Jersey Mike's expansion plans
Jersey Mike's founder Peter Cancro began working at a Jersey Shore sandwich shop at age 14 in 1971. Four years later, he pulled together enough money to buy Mike's Subs. Cancro later changed the name and began franchising the chain. Today, franchisees operate 99.2% of Jersey Mike's locations.
In late 2024, Jersey Mike's announced that Blackstone had bought a majority stake reportedly valued at around $8 billion including debt.
After the transaction closed, Jersey Mike's tapped Morrison as its chief executive. He previously led Wingstop for more than a decade, including during the chicken wing chain's own IPO.
Morrison said that he sees a lot of similarities with Wingstop. Like the chicken wing chain, Jersey Mike's is mostly franchised and generates free cash flow for investors.
Jersey Mike's plans to use the proceeds from the offering to pay down debt and general corporate purposes.
Looking ahead, the chain plans to expand its international reach.
The vast majority of its restaurants are in the U.S., a relatively mature market for hoagies. Cancro, who has retained some equity in Jersey Mike's, signed a master franchise agreement to bring Jersey Mike's to the United Kingdom and Ireland.
Long term, Jersey Mike's sees the potential for 15,000 restaurants worldwide — half in the U.S., half in international markets.
"One of the benefits of being a publicly traded company on the New York Stock Exchange is that we get a lot of awareness of the brand, not only in the U.S., but also around the world," Morrison said.`,
    bodyJa: `ジャージー・マイクズの株価は、同社がティッカー「JMKE」でニューヨーク証券取引所に上場した後、木曜午後の取引で約7％下落した。
株価は1株あたり21ドルと予想レンジの中間点である1株あたり23ドルを下回る21ドルで取引を開始した。
ジャージー・マイクズは4,350万株を売却し、約10億ドルを調達し、企業価値は73億ドルとなった。これらの収益により、このチェーンは現在、レストランの IPO における史上最大の初期資金調達の 1 つとなっています。
Jersey Mike's は約 3,300 店舗を展開しており、米国では Subway に次ぐ 2 番目に大きなホーギー サンドイッチ チェーンです。現在、このカテゴリーで最大のパブリックチェーンとなっています。
同社は昨年、総収益が7億2,400万ドルで、純利益が5,500万ドルだったと報告した。同期間の既存店売上高は３％増加した。この指標は、少なくとも 1 年間オープンしたレストランの売上の伸びを追跡します。
概して、ダイナーは外食の頻度を減らしたり、お金を節約するための取引を求めたりしており、レストラン業界では客足と売上が減少している。しかし、ジャージー・マイクズはその傾向に大きく逆らっており、その高い平均ユニットボリュームと資産の少ないフランチャイズモデルにより、この株は投資家にとって魅力的なものとなった。
最高経営責任者（CEO）のチャーリー・モリソン氏はCNBCに対し、ジャージー・マイクの顧客ベースは通常「少し高収入」に偏っており、消費支出の一部の反動からチェーンを守っていると語った。
モリソン首相は「消費者が戻ってきているのを目にしている」と述べた。 「当社は移行期におけるプラスの成長を確認しています。実際、今年から現在までの当社の既存店売上高の伸びのほとんどは、主に取引の伸びによってもたらされています。」
ジャージー・マイク氏のIPOの成功は、上場を目指す他の消費者企業にとって前向きな前兆となる。ライバルのレストラン会社インスパイア・ブランズはダンキンやジミー・ジョンズを自社ブランドに数えており、極秘に新規株式公開を申請しており、ジャージー・マイクの史上最大のレストランIPOの称号をいとも簡単に奪う可能性がある。
衣料品会社リフォーメーションも木曜日に公開市場デビューを果たす予定だ。小売業者は株価を15ドルと予想し、15ドルから17ドルの範囲の下限に設定した。
ジャージー・マイクの拡張計画
Jersey Mikeの創設者であるPeter Cancroは、1971年に14歳でジャージーショアのサンドイッチ店で働き始めました。4年後、彼はMike's Subsを購入するのに十分な資金を集めました。 Cancro は後に名前を変更し、チェーンのフランチャイズ化を開始しました。現在、フランチャイズ加盟者はジャージー マイクの店舗の 99.2% を運営しています。
2024年後半、ジャージー・マイクズは、ブラックストーンが負債を含めて約80億ドルと伝えられる過半数の株式を購入したと発表した。
取引完了後、ジャージー・マイクズはモリソン氏を最高経営責任者に指名した。彼は以前、チキンウィング チェーン自身の IPO を含め、10 年以上にわたってウィングストップを率いていました。
モリソン氏はウイングストップと多くの類似点があると述べた。チキンウィング チェーンと同様、Jersey Mike's もほとんどがフランチャイズ化されており、投資家にフリー キャッシュ フローを生み出しています。
ジャージー・マイク氏は、今回の募集で得た収益を負債の返済と一般的な企業目的に使用する計画だ。
今後を見据えて、このチェーンは国際的な展開を拡大することを計画しています。
同社のレストランの大部分は、ホーギー市場が比較的成熟している米国にあります。カンクロはジャージー・マイクズの株式の一部を保持しており、ジャージー・マイクズを英国とアイルランドに導入するためのマスターフランチャイズ契約に署名した。
長期的には、Jersey Mike's は世界中に 15,000 軒のレストランができる可能性があると考えています。その半分は米国内、半分は海外市場にあります。
モリソン氏は「ニューヨーク証券取引所に上場している企業であることの利点の一つは、米国だけでなく世界中でブランドの認知度が高まっていることだ」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/jersey-mikes-ipo-jmke-starts-trading-on-the-new-york-stock-exchange.html",
    publishedAt: "2026-07-30T19:39:14+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 5,
  },
  {
    id: "trump-says-sanctions-bill-should-include-5260b6a8",
    title: "Trump says sanctions bill should include tariffs on Iran, despite 'trivial' trade with U.S.",
    titleJa: "トランプ大統領、米国との「些細な」貿易にもかかわらず、制裁法案には対イラン関税を盛り込むべきだと発言",
    summaryJa: "ドナルド・トランプ大統領は議会に対し、超党派の支持を得ているロシアとイランに対する制裁法案にイランへの関税を追加するよう求めている。米国はイランからほとんど何も輸入していないため、これらの関税はほとんど影響しないだろう。しかし、これらを法案に追加すると、法案成立の可能性が台無しになる可能性がある。",
    bodyOriginal: `President Donald Trump wants Congress to add tariffs on Iran to a sanctions bill against Russia and Tehran that has bipartisan support.
Those duties would have little effect because the U.S. imports nearly nothing from Iran. But tacking them on to the bill may torpedo its chances of becoming law.
While sanctions against the two countries has widespread support in Congress, Trump's well-established belief in tariffs as a one-size-fits-all tool for economic coercion is polarizing.
The U.S. imported just $1.4 million in goods from Iran 2025, according to the Office of the U.S. Trade Representative. Works of art, collectors pieces and antiques were the largest category of those imports, making up 55% of the value, according to the firm Trading Economics.
It's hard to imagine that figure increasing much this year — especially since late February, when the U.S. and Israel launched a war against Iran that continues with no end in sight. The U.S. has sanctioned Iran for decades, and the Treasury Department has sought to further squeeze Tehran's economy amid the war.
"The Administration's threat to impose tariffs on imports from Iran is entirely symbolic," Jonathan Doh, professor of international business at Villanova School of Business, said in an email to CNBC. "U.S. imports from Iran are trivial."
Trump sees it differently. Asked at the White House on Wednesday about the pending sanctions bill, he said, "I'd like them to add Iran as tariffs, not just as sanctions."
The measure is named after former Sen. Lindsey Graham, R-S.C., who died unexpectedly in mid-July.
"I'd like to see tariffs on Iran. It would make it much stronger," Trump said of the bill, which would impose economic sanctions on Russia and those supporting its war against Ukraine.
The legislation would also let Trump slap targeted tariffs on goods imported from the top five countries that buy Russian energy and help it evade sanctions.
Trump claimed Wednesday that modifying it by adding tariffs on Iran is "what Lindsey wanted."
Graham's office, which is now occupied by his sister, Darline Graham, did not respond to CNBC's request for comment on Trump's remark.
Doh told CNBC that U.S. sanctions on Iran — which already prohibit nearly all trade — are "far more impactful" than tariffs would be.
"Primary sanctions target U.S. persons from trading with Iran, while secondary sanctions target non-U.S. companies and individuals for doing business with Iran," Doh said.
He noted that Iran was eager to include sanctions relief as part of a now-defunct temporary ceasefire deal with the U.S. that was signed in June, then effectively scrapped weeks later as military action resumed.
The sanctions bill took a key step forward Tuesday, as a bipartisan group of senators said they reached a deal combine provisions on Russia and Iran into a single legislative package. The chamber then voted 86-12 on a procedural measure to advance the bill. The vote was notable in a Congress that has been riven by partisan divisions.
But that progress could hit a wall if Trump insists additional tariffs on Iran be added to the bill.
Democrats have denounced Trump's heavy use of tariffs, which has ramped back up this month after being tamped down by the Supreme Court earlier this year. The Trump administration in recent weeks has imposed or announced new duties on goods from dozens of countries, including Canada, Brazil and the 27-member European Union.
The White House and the Office of the U.S. Trade Representative did not respond to CNBC's requests for comment on Trump's call for tariffs on Iran.`,
    bodyJa: `ドナルド・トランプ大統領は議会に対し、超党派の支持を得ているロシアとイランに対する制裁法案にイランへの関税を追加するよう求めている。
米国はイランからほとんど何も輸入していないため、これらの関税はほとんど影響しないだろう。しかし、これらを法案に追加すると、法案成立の可能性が台無しになる可能性がある。
両国に対する制裁は議会で幅広い支持を得ているが、関税は経済的抑圧のための万能の手段であるというトランプ大統領の確立した信念は二極化している。
米通商代表部によると、2025年に米国がイランから輸入した商品はわずか140万ドルだった。トレーディング・エコノミクス社によると、輸入品の中で最大のカテゴリーは美術品、コレクターズ・ピース、骨董品で、金額の55％を占めた。
今年、この数字が大幅に増加するとは考えにくい――特に米国とイスラエルが終わりの見えない対イラン戦争を開始した2月下旬以降はなおさらだ。米国は数十年にわたりイランを制裁しており、財務省は戦争の最中にイラン経済をさらに圧迫しようとしていた。
ビラノバ・スクール・オブ・ビジネスの国際ビジネス教授、ジョナサン・ドー氏はCNBCへの電子メールで、「イランからの輸入品に関税を課すという政権の脅迫は全く象徴的だ」と述べた。 「米国のイランからの輸入は取るに足らないものだ。」
トランプ氏は違う見方をしている。水曜日、ホワイトハウスで保留中の制裁法案について質問された同氏は、「イランを単なる制裁ではなく、関税の対象に加えてほしい」と述べた。
この措置は、7月中旬に急死した元上院議員リンジー・グラハム氏（共和党、サウスカロライナ州）にちなんで命名された。
トランプ大統領は、ロシアと対ウクライナ戦争を支援する国々に経済制裁を課す法案について、「イランへの関税を望んでいる。そうすればイランはさらに強化されるだろう」と語った。
この法案により、トランプ大統領はロシアのエネルギーを購入し、制裁回避を支援する上位5カ国からの輸入品に対象を絞った関税を課すことも可能になる。
トランプ大統領は水曜日、対イラン関税の追加による修正は「リンゼイ氏が望んでいたこと」だと主張した。
グラハム氏の事務所は現在、妹のダーリン・グラハム氏が担当しているが、トランプ氏の発言に関するCNBCのコメント要請には応じなかった。
ドー氏はCNBCに対し、すでにほぼすべての貿易を禁止している米国の対イラン制裁は関税よりも「はるかに影響力がある」と語った。
ドー長官は、「一次制裁はイランとの取引を行う米国人を対象とし、二次制裁はイランと取引する米国以外の企業や個人を対象とする」と述べた。
同氏は、イランが6月に署名され、数週間後に軍事行動が再開されたことで事実上破棄された、現在は失効している米国との一時停戦協定の一部として制裁緩和を盛り込むことを熱望していると指摘した。
火曜日、超党派の上院議員グループが、ロシアとイランに関する条項を単一の立法パッケージにまとめる合意に達したと発表し、制裁法案は重要な一歩を踏み出した。その後、議場は法案を前進させるための手続き措置を86対12で可決した。この投票は党派の分裂によって引き裂かれた議会において注目に値した。
しかし、トランプ大統領が対イラン追加関税を法案に追加するよう主張すれば、その進展は壁に突き当たる可能性がある。
民主党はトランプ大統領の関税の多用を非難しており、関税は今年初めに最高裁判所によって抑制された後、今月から再び強化されている。トランプ政権はここ数週間、カナダ、ブラジル、欧州連合（２７カ国）を含む数十カ国からの商品に新たな関税を課したり、発表したりしている。
ホワイトハウスと米通商代表部は、トランプ大統領の対イラン関税要求に関するCNBCのコメント要請に応じなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/trump-iran-tariffs-sanctions-bill.html",
    publishedAt: "2026-07-30T19:21:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "warsh-s-wall-street-cred-takes-a-hit-as-0606b23d",
    title: "Warsh’s Wall Street cred takes a hit as investors doubt the Fed chair’s inflation-fighting resolve",
    titleJa: "投資家がFRB議長のインフレ対策の決意を疑う中、ウォーシュ氏のウォール街での信用は打撃を受ける",
    summaryJa: "ケビン・ウォーシュ氏は、連邦準備理事会は米国のインフレ率を目標の2％まで下げるためにあらゆる手段を講じると主張しているが、投資家はそれを支持していない。",
    bodyOriginal: `Kevin Warsh insists the Federal Reserve will do whatever it takes to reduce U.S. inflation to its 2% target, but investors aren’t buying it.`,
    bodyJa: `ケビン・ウォーシュ氏は、連邦準備理事会は米国のインフレ率を目標の2％まで下げるためにあらゆる手段を講じると主張しているが、投資家はそれを支持していない。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/warshs-wall-street-cred-takes-a-hit-as-investors-doubt-the-fed-chairs-inflation-fighting-resolve-82be4f77?mod=mw_rss_topstories",
    publishedAt: "2026-07-30T19:02:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-64759388",
    readTime: 2,
  },
  {
    id: "china-s-open-weight-model-lead-exposes-a-9eff0a34",
    title: "China’s open-weight model lead exposes America’s AI blind spot",
    titleJa: "中国の無差別級モデルのリーダーがアメリカのAIの盲点を暴露",
    summaryJa: "中国がこの分野でリードを築き続ける中、米国最大手のテクノロジー企業の一部は、オープン人工知能を国家的優先事項にするよう米国政府に求めている。彼らのメッセージは、米国の政策のギャップを明らかにしています。米国には AI 用のチップ戦略があるということです。今、オープンモデル戦略が必要です。",
    bodyOriginal: `Some of America's biggest technology companies are pushing Washington to make open artificial intelligence a national priority as China continues to build its lead in the space.
Their message exposes a gap in U.S. policy: America has a chip strategy for AI. Now it needs an open-model strategy.
Supporters say open models can lower costs, keep sensitive data inside a company's own systems and prevent businesses from becoming dependent on a handful of AI providers. The models can also give more researchers and security teams the ability to inspect powerful models and find weaknesses.
Unlike ChatGPT or Claude, which customers access through services controlled by OpenAI and Anthropic, open-weight models can be downloaded, customized and run on a company's own computers. That can make them cheaper and give users more control over their data and technology.
Last week, a coalition led by Nvidia published an open letter arguing that America's AI leadership will depend on building a strong open ecosystem. Microsoft, Meta and other major technology companies signed it. OpenAI and Google later added their support.
A striking cybersecurity incident days earlier showed why the issue matters.
During an internal test, OpenAI models found a way out of a restricted environment and compromised systems at the AI platform Hugging Face. When Hugging Face tried to investigate, safety controls on closed commercial models blocked them from analyzing the attack. The company instead used an open Chinese model that it could run on its own infrastructure.
A closed American model caused the incident. A Chinese open model helped investigate it.
That episode complicates the argument that closed AI is always safer.
America has restricted China's access to advanced chips, spent billions to onshore semiconductor manufacturing and encouraged a massive buildout of data centers and power. Meanwhile, Chinese labs like Zhipu and Moonshot AI have released capable open models at a fraction of the cost of leading American systems.
The Trump administration is now reportedly considering restrictions on Chinese models. But a ban would not stop those models from spreading around the world. It could simply leave American developers on the sidelines.
China has a clear incentive to push open-weight AI. Every improvement makes powerful models cheaper and weakens the advantage of American companies that charge a premium for access to closed systems.
OpenAI and Anthropic have the opposite incentive. Their businesses depend on keeping their best models proprietary. Anthropic CEO Dario Amodei has also warned that models anyone can download are harder to monitor and could be modified by bad actors.
Those security concerns are real, but so is the risk of allowing China to become the foundation on which the rest of the world builds.
The way to win an open-source race is by out-building, not with a ban.
The U.S. could support open AI the way it supported chips, by giving universities and startups access to computing power, awarding government contracts to American open-model developers and funding the security tools needed to run those models safely.
Companies are already asking for alternatives, and open models can lower costs and let businesses keep sensitive data inside their own systems.
"The data that these companies have is really their strategic asset," said Vipul Ved Prakash, CEO of AI platform Together AI. By sending it to the maker of a powerful closed model, he said, a company risks giving away its "business' recipe."
Adoption is moving quickly. During the last week of June, Chinese models accounted for 48% of traffic tracked by OpenRouter, up from 20% a year earlier. U.S. models fell to 32% from 74%.
The future of AI may not be decided by who builds the smartest single model. It may be decided by who builds the models that everyone else runs on.
Right now, that is increasingly China.`,
    bodyJa: `中国がこの分野でリードを築き続ける中、米国最大手のテクノロジー企業の一部は、オープン人工知能を国家的優先事項にするよう米国政府に求めている。
彼らのメッセージは、米国の政策のギャップを明らかにしています。米国には AI 用のチップ戦略があるということです。今、オープンモデル戦略が必要です。
支持者らは、オープンモデルはコストを削減し、機密データを企業独自のシステム内に保管し、企業が少数のAIプロバイダーに依存するのを防ぐことができると主張する。このモデルにより、より多くの研究者やセキュリティ チームが強力なモデルを検査して弱点を見つけることができるようになります。
OpenAI や Anthropic によって制御されるサービスを通じて顧客がアクセスする ChatGPT や Claude とは異なり、オープンウェイト モデルはダウンロードしてカスタマイズし、企業独自のコンピューターで実行できます。これにより、価格が安くなり、ユーザーがデータとテクノロジーをより細かく制御できるようになります。
先週、Nvidia率いる連合は、米国のAIのリーダーシップは強力なオープンエコシステムの構築に依存すると主張する公開書簡を発表した。 Microsoft、Meta、その他の主要テクノロジー企業が署名しました。 OpenAI と Google は後にサポートを追加しました。
数日前に起きた衝撃的なサイバーセキュリティ事件は、この問題がなぜ重要なのかを示しました。
内部テスト中に、OpenAI モデルは AI プラットフォーム Hugging Face で制限された環境と侵害されたシステムから抜け出す方法を発見しました。ハグ・フェイス社が調査しようとしたところ、非公開の商用モデルの安全制御により攻撃を分析することができなかった。同社は代わりに、独自のインフラストラクチャで実行できるオープンな中国モデルを使用しました。
事件を引き起こしたのはアメリカの非公開モデルだった。中国のオープンモデルがその調査に役立ちました。
このエピソードは、クローズド AI が常に安全であるという議論を複雑にします。
米国は中国による先端チップへのアクセスを制限し、陸上の半導体製造に数十億ドルを費やし、データセンターと電力の大規模増強を奨励してきた。一方、Zhipu や Moonshot AI などの中国の研究所は、米国の主要システムの数分の 1 のコストで有能なオープン モデルをリリースしました。
トランプ政権は現在、中国製モデルへの規制を検討していると伝えられている。しかし、禁止されても、これらのモデルが世界中に広がるのを止めることはできません。それは単にアメリカの開発者を傍観者に置くだけかもしれない。
中国には、オープンウェイトAIを推進する明確なインセンティブがある。改良が進むたびに強力なモデルが安くなり、クローズドシステムへのアクセスに割増料金を請求する米国企業の優位性が弱まる。
OpenAI と Anthropic には逆のインセンティブがあります。彼らのビジネスは、最高のモデルを独占的に維持することにかかっています。 Anthropic CEOのDario Amodei氏も、誰でもダウンロードできるモデルは監視が難しく、悪意のある者によって改変される可能性があると警告した。
こうした安全保障上の懸念は現実であるが、中国が世界の他の国々が築く基盤となることを許すリスクも同様である。
オープンソースの競争に勝つ方法は、禁止ではなく、アウトビルドすることです。
米国は、大学や新興企業にコンピューティング能力へのアクセスを与え、米国のオープンモデル開発者に政府契約を与え、それらのモデルを安全に実行するために必要なセキュリティツールに資金を提供することで、チップをサポートしたのと同じようにオープンAIをサポートできる可能性がある。
企業はすでに代替案を求めており、オープン モデルによりコストが削減され、企業は機密データを自社のシステム内に保管できるようになります。
AIプラットフォームTogetter AIのCEO、Vipul Ved Prakash氏は、「これらの企業が保有するデータはまさに戦略的資産だ」と述べた。同氏は、強力なクローズドモデルのメーカーにそれを送信することで、企業は「ビジネスのレシピ」を漏らす危険があると述べた。
導入は急速に進んでいます。 6 月の最終週、OpenRouter が追跡したトラフィックの 48% を中国モデルが占め、前年同期の 20% から増加しました。米国モデルは74％から32％に低下した。
AI の将来は、誰が最も賢い単一モデルを構築するかによって決まるわけではないかもしれません。それは、他の人が実行するモデルを誰が構築するかによって決まるかもしれません。
今、それはますます中国です。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/china-open-source-trump-ai.html",
    publishedAt: "2026-07-30T18:51:42+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "apple-and-amazon-report-after-the-bell-h-8cffe7b7",
    title: "Apple and Amazon report after the bell. Here's what the options market is saying",
    titleJa: "AppleとAmazonは鐘の後に報告する。オプション市場の意見は次のとおりです",
    summaryJa: "アップルとアマゾンの今日午後の業績次第で、株式市場がこれまでのところ厳しい週を堅調に終えることができるかどうかが決まるだろう。強気派にとって残念なことに、近いうちにこの決算で大手ハイテク企業2社を同時に勝ち取るのは難しい。先週はアルファベットとテスラが共に下落し、昨夜はマイクロソフトが反発する一方でメタは下落した。今年これまでのところ、株価が異なる方向に進み、オプションの流れが混在していることから、アップルとアマゾンが同じ運命をたどることは容易に想像できる。",
    bodyOriginal: `Earnings on deck this afternoon for Apple and Amazon will likely decide if the stock market can end what's so far been a rough week on solid footing.
Unfortunately for bulls it's been tough to get two big-tech winners at once this earnings soon — last week Alphabet and Tesla fell together, and last night Microsoft rallied while Meta fell. It's easy to see Apple and Amazon finding the same fate, with the stocks going in different directions so far this year and options flows mixed.
Apple is up 25% year to date, making records and a seeing a 7% rally since the S&P 500 peaked on June 2. Options traders are braced for a bigger-than-usual move on earnings, with implied volatility pricing a 3.4% move after the report drops — more than double the stock's median 1.5% move after its past four reports.
While options flows were leaning bullish to start the week, early gain in Apple share reversed while the stock market sold off Wednesday and options traders took a more bearish lean in the stock.
While more than $470 million of the $634 million in options premium on Apple Wednesday was tied to calls, much of it was calls sold, with net trade sentiment in the options leaning slightly bearish, according to data from SpotGamma and Barchart. The most popular contract expiring Friday by volume Wednesday was the 330-strike puts, which need a more than 3% drop to pay off.
In Amazon, exactly flat on the year, traders look a bit more optimistic. Most of the $615 million in options premium was tied to puts Wednesday, but traders looked more likely to sell that volatility than buy it. Net trade sentiment was positive by almost $3 million and 100,000 deltas, Barchart analysis shows.
Traders expect a 6.6% move after Amazon earnings, compared to the median 7% move the past four quarters, according to Cboe LiveVol data.`,
    bodyJa: `アップルとアマゾンの今日午後の業績次第で、株式市場がこれまでのところ厳しい週を堅調に終えることができるかどうかが決まるだろう。
強気派にとって残念なことに、近いうちにこの決算で大手ハイテク企業2社を同時に勝ち取るのは難しい。先週はアルファベットとテスラが共に下落し、昨夜はマイクロソフトが反発する一方でメタは下落した。今年これまでのところ、株価が異なる方向に進み、オプションの流れが混在していることから、アップルとアマゾンが同じ運命をたどることは容易に想像できる。
アップルは年初来25％上昇し、記録を更新しており、6月2日にS&P500指数が最高値を付けて以来、7％の上昇が見込まれている。オプショントレーダーらは、レポート下落後のインプライド・ボラティリティが3.4％の上昇を織り込んでおり、過去4回のレポート後の株価の中央値1.5％の2倍以上の値動きで、通常よりも大きな利益の上昇に備えている。
オプションの流れは週初めは強気に傾いていたが、水曜日の株式市場が売られる中、アップル株の序盤の上昇は反転し、オプショントレーダーらは株価をより弱気に傾けた。
スポットガンマとバーチャートのデータによると、水曜日のアップルのオプションプレミアム6億3,400万ドルのうち4億7,000万ドル以上はコールに関連していたものの、その多くはコールの売りであり、オプションの純取引センチメントは若干弱気に傾いていた。水曜日に金曜日に期限が切れる最も人気のある契約は、出来高ベースで330ストライクのプットで、返済するには3％以上の下落が必要である。
アマゾンでは年間ほぼ横ばいで、トレーダーらはもう少し楽観的な見方をしている。水曜日のオプションプレミアム6億1500万ドルのほとんどはプットに結びついていたが、トレーダーらはそのボラティリティを買うよりも売る可能性が高いとみられる。 Barchart 分析によると、純取引センチメントはほぼ 300 万ドルと 100,000 デルタ分プラスでした。
Cboe LiveVolのデータによると、トレーダーらはアマゾンの決算後は6.6％の上昇を予想しているが、これに対し過去4四半期の上昇率の中央値は7％だった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/apple-and-amazon-report-after-the-bell-heres-what-the-options-market-is-saying.html",
    publishedAt: "2026-07-30T18:17:29+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "micron-sandisk-and-other-chip-stocks-get-ea455e05",
    title: "Micron, Sandisk and other chip stocks get major boosts in the wake of Microsoft’s earnings",
    titleJa: "マイクロソフトの収益を受けてマイクロン、サンディスク、その他のチップ株が大幅に上昇",
    summaryJa: "マイクロソフトはAIに多額の資金を投じているが、財務に対しても「責任ある」アプローチをとっているとアナリストは述べた。",
    bodyOriginal: `Microsoft is spending heavily on AI but is also taking a “responsible” approach to its financials, an analyst said.`,
    bodyJa: `マイクロソフトはAIに多額の資金を投じているが、財務に対しても「責任ある」アプローチをとっているとアナリストは述べた。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/micron-sandisk-and-other-chip-stocks-get-major-boosts-in-the-wake-of-microsofts-earnings-25460e61?mod=mw_rss_topstories",
    publishedAt: "2026-07-30T17:36:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-57413903",
    readTime: 2,
  },
  {
    id: "british-airways-flight-called-mayday-on-e5871a34",
    title: "British Airways flight called mayday on approach to Heathrow",
    titleJa: "ブリティッシュ・エアウェイズ便がヒースロー空港接近でメーデーと呼ばれる",
    summaryJa: "ブリティッシュ・エアウェイズ便がヒースロー空港接近でメーデーと呼ばれる- 公開されました",
    bodyOriginal: `British Airways flight called mayday on approach to Heathrow
- Published
A British Airways flight issued a "mayday" distress call on its approach to Heathrow Airport earlier this month, according to a statement from France's accident investigation authority.
The call was made on an Airbus A320 flying from Dusseldorf airport in Germany on 6 July following two stall warnings on the aircraft, before it landed without further incident.
The UK's Air Accidents Investigation Branch (AAIB) said it was "investigating a serious incident".
A British Airways spokesperson said the airline was assisting the AAIB with its investigation and was not legally able to comment further at this stage.
The French Air Safety Investigation Authority, the BEA, said that as the plane approached Heathrow, there was a data system failure which triggered a stall warning.
The crew then flew the aircraft in a different mode called "alternate law", which removes some automated flight protection systems. Another stall warning then occurred at 3,000 feet - which experts say was likely to have been just miles away from the airport.
The urgency call the crew had already made was upgraded to mayday, indicating imminent danger.
The BEA website attributed the statement to the AAIB, but the AAIB would not confirm it was from them.
They issued the following statement: "The AAIB is investigating a serious incident involving a commercial aircraft which occurred on 6 July on approach to Heathrow airport."
It said the investigation would be a correspondence investigation, meaning that no team would be sent to carry out field investigations.
Aviation safety investigator David Gleave said there are different forms of mayday calls, and to send an urgency message was "not unusual".
"You could have sick passengers on board who need urgent medical attention… so it's up to the captains' discretion as to what they call, but its very unusual for it to be a significant failure on board the aeroplane."`,
    bodyJa: `ブリティッシュ・エアウェイズ便がヒースロー空港接近でメーデーと呼ばれる
- 公開されました
フランスの事故調査当局の発表によると、ブリティッシュ・エアウェイズ機は今月初め、ヒースロー空港に接近する際に「メーデー」救難信号を発した。
この通報は、7月6日にドイツのデュッセルドルフ空港を出発したエアバスA320型機で行われたもので、同機は2度の失速警報を受けた後、何事もなく着陸した。
英国の航空事故調査局（AAIB）は「重大な事件を調査している」と述べた。
ブリティッシュ・エアウェイズの広報担当者は、同社はAAIBの調査を支援しているが、現段階では法的にこれ以上コメントできないと述べた。
フランス航空安全調査局BEAは、同機がヒースロー空港に接近した際にデータシステムに障害が発生し、失速警報が発せられたと発表した。
その後、乗組員は一部の自動飛行保護システムを取り除いた「代替法」と呼ばれる別のモードで航空機を飛行させた。その後、別の失速警報が3,000フィートで発生したが、専門家によれば、そこは空港から数マイル離れたところだった可能性が高いという。
乗組員がすでに行っていた緊急通報は、差し迫った危険を示すメーデーに格上げされました。
BEAのウェブサイトはこの声明がAAIBによるものであるとしているが、AAIBはそれが彼らからのものであるとは認めていない。
彼らは次の声明を発表した：「AAIBは、7月6日にヒースロー空港への進入時に発生した民間航空機が関与した重大な事故を調査している。」
同調査は通信捜査であり、現地調査を実施するチームは派遣されないことを意味すると述べた。
航空安全調査官のデービッド・グリーブ氏は、メーデーコールにはさまざまな形があり、緊急メッセージを送ることは「珍しいことではない」と述べた。
「緊急の治療が必要な体調不良の乗客が機内に居る可能性があります…ですから、何と呼ぶか​​は機長の裁量に任されていますが、飛行機内で重大な故障となるのは非常に異例です。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn8n1knkkz9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-30T17:34:26+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/89dd/live/c63fb180-8c3e-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 2,
  },
  {
    id: "openai-cuts-prices-for-two-of-its-gpt-5-ea0aff9e",
    title: "OpenAI cuts prices for two of its GPT-5.6 AI models as companies grow sensitive to costs",
    titleJa: "企業がコストに敏感になる中、OpenAI は GPT-5.6 AI モデルのうち 2 つを値下げしました",
    summaryJa: "OpenAIは木曜日、最新の人工知能モデル2つ、GPT-5.6 TerraとGPT-5.6 Lunaの価格を、一般公開から約3週間後に値下げすると発表した。同社は、企業が投資収益率を明確に把握せずに高価なモデルを導入する傾向にない、よりコスト重視の顧客ベースに対応するというプレッシャーに直面している。また、費用対効果の高いモデルを宣伝してきた中国の新興企業やハイテク大手グーグルやマイクロソフトとの競争をかわす取り組みも行っている。",
    bodyOriginal: `OpenAI on Thursday announced it is slashing the price of two of its latest artificial intelligence models, GPT-5.6 Terra and GPT-5.6 Luna, roughly three weeks after their public release.
The company is facing pressure to cater to a more cost-sensitive customer base, where enterprises have been less inclined to deploy expensive models without a clear picture of the return on their investments. It's also working to fend off competition from Chinese startups and tech giants Google and Microsoft, which have been touting cost-effective models.
OpenAI launched three models as part of its GPT-5.6 series, including Sol, the most powerful offering, Terra, the mid-tier model, and Luna, its fastest offering.
The company said Thursday that it's reducing the price of Terra by 20% to $2 per million input tokens and $12 per million output tokens. It's cutting the cost of Luna by 80% to 20 cents per million input tokens and $1.20 per million output tokens. Sol's pricing remains the same.
"Our strategy remains focused on advancing both capability and efficiency so each generation of intelligence can accomplish more work at a lower cost," OpenAI said in a release.
OpenAI kickstarted the AI boom with the launch of ChatGPT in 2022, prompting companies across the U.S. to rush to deploy the technology and incentivize adoption within their workforces. The era of so-called tokenmaxxing was born, where employers encouraged staffers to use as much AI as possible without worrying about costs.
But as AI bills have ballooned, sometimes to the tune of billions of dollars, many companies have been actively working to rein in their spending. It's a shift that AI developers have been watching closely, especially as Chinese open-weight models have rapidly caught up with leading, proprietary offerings.
Open-weight AI models are available for users to download, modify and run on their own infrastructure, and can serve as a cost-effective option for companies. Moonshot AI, a Chinese startup, released an open-weight model called Kimi K3 earlier this month that outperforms cutting-edge American offerings across some industry benchmarks, prompting a swift reaction from Silicon Valley.
Following Moonshot's announcement, OpenAI's chief rival, Anthropic, released a new model called Claude Opus 5, which it touted as its best-performing and most cost-effective offering for many use cases. It's half the price of Claude Fable 5, the advanced model that Anthropic announced in June, even though it performs comparably across coding and knowledge work tasks.
Microsoft CEO Satya Nadella repeatedly highlighted his company's cost-effective models during its quarterly earnings call with investors on Wednesday, following the launch of what it described as a cheap-but-performant cybersecurity model earlier this week.
Google also debuted three new models this month that aimed to undercut competitors on cost. The company said Gemini 3.6 Flash, the strongest of its new offerings, is cheaper per task than Kimi K3 and other Chinese models.
WATCH: OpenAI CEO Sam Altman to meet with White House Chief of Staff Susie Wiles this week`,
    bodyJa: `OpenAIは木曜日、最新の人工知能モデル2つ、GPT-5.6 TerraとGPT-5.6 Lunaの価格を、一般公開から約3週間後に値下げすると発表した。
同社は、企業が投資収益率を明確に把握せずに高価なモデルを導入する傾向にない、よりコスト重視の顧客ベースに対応するというプレッシャーに直面している。また、費用対効果の高いモデルを宣伝してきた中国の新興企業やハイテク大手グーグルやマイクロソフトとの競争をかわす取り組みも行っている。
OpenAI は、GPT-5.6 シリーズの一部として、最も強力な製品である Sol、中間層モデルの Terra、および最速の製品である Luna を含む 3 つのモデルを発売しました。
同社は木曜日、Terraの価格を20％引き下げ、入力トークン100万あたり2ドル、出力トークン100万あたり12ドルにすると発表した。 Luna のコストは 80% 削減され、入力トークン 100 万あたり 20 セント、出力トークン 100 万あたり 1.20 ドルになります。 Solの価格は変わりません。
OpenAIはリリースで「われわれの戦略は、各世代のインテリジェンスがより低コストでより多くの作業を遂行できるように、機能と効率の両方を向上させることに引き続き重点を置いている」と述べた。
OpenAI は、2022 年の ChatGPT の発売により AI ブームを引き起こし、全米の企業がこのテクノロジーの導入を急いで、従業員内での導入を奨励するようになりました。いわゆるトークンマックスの時代が生まれ、雇用主は従業員に対し、コストを気にせずにできるだけ多くの AI を使用するよう奨励しました。
しかし、AI関連の費用が膨れ上がり、時には数十億ドルに達することもあり、多くの企業が支出の抑制に積極的に取り組んでいる。これは、特に中国のオープンウェイト モデルが主要な独自製品に急速に追いついてきたことから、AI 開発者が注意深く注目している変化です。
オープンウェイト AI モデルは、ユーザーがダウンロード、変更、独自のインフラストラクチャ上で実行できるため、企業にとって費用対効果の高いオプションとして機能します。中国の新興企業ムーンショットAIは今月初め、一部の業界ベンチマークにおいて最先端の米国製品を上回るパフォーマンスを発揮する「Kimi K3」と呼ばれるオープンウェイトモデルをリリースし、シリコンバレーからの素早い反応を引き起こした。
Moonshot の発表に続いて、OpenAI の主なライバルである Anthropic は、Claude Opus 5 と呼ばれる新しいモデルをリリースし、多くのユースケースに対して最もパフォーマンスが高く、最もコスト効率の高い製品であると宣伝しました。 Anthropic が 6 月に発表した上級モデルである Claude Fable 5 の半額ですが、コーディングとナレッジ ワーク タスク全体で同等のパフォーマンスを発揮します。
Microsoftの最高経営責任者（CEO）サティア・ナデラ氏は、今週初めに安価だがパフォーマンスの高いサイバーセキュリティモデルと称するモデルを発表したことを受け、水曜日の投資家との四半期決算会見で同社の費用対効果の高いモデルを繰り返し強調した。
Googleは今月、競合他社をコストで削減することを目的とした3つの新モデルも発表した。同社によると、新製品の中で最も強力なGemini 3.6 Flashは、Kimi K3や他の中国製モデルよりもタスク当たりの価格が安いという。
注目：OpenAI CEOのサム・アルトマン氏が今週、ホワイトハウス首席補佐官スージー・ワイルズ氏と会談`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/open-ai-price-cut-gpt.html",
    publishedAt: "2026-07-30T17:27:49+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "ai-investor-leopold-aschenbrenner-forced-3b011eba",
    title: "AI investor Leopold Aschenbrenner forced to unwind all public stock positions after steep losses, sources say",
    titleJa: "AI投資家レオポルド・アッシェンブレナー氏は大幅な損失を受け、すべての公開株ポジションの解消を余儀なくされたと関係者が語る",
    summaryJa: "事情に詳しい関係者によると、元OpenAI研究者のレオポルド・アッシェンブレナー氏が設立した240億ドルのボロボロのヘッジファンドは、人工知能株で多額の損失を出し、ソフトウェア株への賭けが悪かったために資金調達に苦慮し、多くの取引を手放しているという。関係者によると、同ファンドのプライムブローカーであるシチュエーショナル・アウェアネスは証拠金要件を満たすために資金調達を急いでいるという。関係者らによると、大手投資会社がファンドの上場資産を買収することで合意に達したようだ。資産の買い手は決定できなかった。",
    bodyOriginal: `The battered $24 billion hedge fund founded by former OpenAI researcher Leopold Aschenbrenner is unwinding many of its trades after big losses on artificial intelligence stocks and a bad bet against software stocks left it scrambling to raise cash, according to people familiar with the matter.
The prime brokers for the fund, Situational Awareness, have been rushing to raise cash to meet margin requirements, the people said. A large investment firm has apparently reached a deal to buy the fund's publicly traded assets, people familiar with the deal said. The buyer of the assets couldn't be determined.
Situational Awareness has sustained significant losses in recent weeks as its portfolio of AI infrastructure investments such as SK Hynix declined while short positions in software companies such as Adobe moved sharply against it, the people said.
Several of the firm's prime brokers — including Bank of America, Goldman Sachs and JPMorgan Chase —have been working with the fund as it seeks to meet margin requirements or reduce positions in an orderly fashion, according to people familiar with the discussions. The brokers have been marketing a group of the firm's holding on both the long and short side for sale prior to Thursday's start of trading, according to people familiar with the situation.
The situation remains fluid. It couldn't be determined whether the firm was satisfying its margin calls through the sales. The firm had been negotiating to sell its stake in Anthropic but it wasn't clear if that deal was done. A spokesman for the firm said reports that it was marketing a stake it owns in Anthropic are not accurate.
Biggest holdings
The turmoil is an early and potentially significant test of the investment thesis that made Aschenbrenner one of the most closely watched figures in the AI trade. The 25-year-old built the firm around the idea that increasingly powerful AI systems would require a vast expansion of chips, memory, data centers and electricity generation.
The fund's largest holdings at the end of the first quarter included Nebius Group, Sandisk, Micron and CoreWeave, according to filings. All four of those stocks are down more than 35% this month.
Aschenbrenner became prominent in technology and investing circles after publishing a series of essays in 2024 arguing that rapid advances in artificial intelligence would require an enormous expansion of computing power, advanced semiconductors, memory and energy infrastructure. Those ideas became the intellectual foundation for Situational Awareness after he left OpenAI.
Aschenbrenner graduated from Columbia University as valedictorian at the age of 19 before joining OpenAI's Superalignment team. He was fired in 2024 over what the company described as an improper disclosure of internal information. Aschenbrenner has disputed that characterization, saying he shared a largely nonconfidential planning document with outside researchers for feedback, and has said his dismissal followed tensions over warnings he raised about OpenAI's security practices. OpenAI has said those concerns were unrelated to his departure.
Aschenbrenner is engaged to Avital Balwit, the chief of staff for Anthropic CEO Dario Amodei, according to an October profile in Fortune, which cited a Situational Awareness LP spokesperson.
The size of the fund's losses and the amount it was seeking to raise couldn't immediately be determined.`,
    bodyJa: `事情に詳しい関係者によると、元OpenAI研究者のレオポルド・アッシェンブレナー氏が設立した240億ドルのボロボロのヘッジファンドは、人工知能株で多額の損失を出し、ソフトウェア株への賭けが悪かったために資金調達に苦慮し、多くの取引を手放しているという。
関係者によると、同ファンドのプライムブローカーであるシチュエーショナル・アウェアネスは証拠金要件を満たすために資金調達を急いでいるという。関係者らによると、大手投資会社がファンドの上場資産を買収することで合意に達したようだ。資産の買い手は決定できなかった。
関係者によると、シチュエーショナル・アウェアネスは、SKハイニックスなどのAIインフラ投資のポートフォリオが減少し、アドビなどのソフトウェア企業の空売りポジションが急激に下落したため、ここ数週間で大幅な損失を被っている。
議論に詳しい関係者によると、バンク・オブ・アメリカ、ゴールドマン・サックス、JPモルガン・チェースなど同社のプライムブローカーの数社は、証拠金要件を満たすかポジションを秩序ある形で減らすことを目指してファンドと協力しているという。事情に詳しい複数の関係者によると、証券会社は木曜日の取引開始に先立って、同社のロングサイドとショートサイドの両方の保有株の一部を売りに出しているという。
状況は依然として流動的である。同社が売却を通じてマージンコールを満たしているかどうかは判断できなかった。同社はアンスロピック株の売却交渉を行っていたが、その取引が成立したかどうかは明らかではなかった。同社の広報担当者は、同社が保有するアンスロピック株を売りに出しているとの報道は正確ではないと述べた。
最大の保有株
この混乱は、アシェンブレナー氏をAI業界で最も注目される人物の1人にした投資理論の初期の、そして潜在的に重要なテストである。 25 歳の彼は、AI システムがますます強力になるには、チップ、メモリ、データ センター、発電の大幅な拡張が必要になるという考えに基づいて会社を設立しました。
提出書類によると、第1四半期末時点で同ファンドの最大保有銘柄にはNebius Group、Sandisk、Micron、CoreWeaveが含まれていた。今月はこれら4銘柄すべてが35％以上下落している。
アシェンブレナー氏は、2024年に人工知能の急速な進歩にはコンピューティング能力、先進的な半導体、メモリ、エネルギーインフラの大幅な拡大が必要であると主張する一連のエッセイを発表してから、テクノロジー界や投資界で著名になった。これらのアイデアは、彼が OpenAI を去った後、状況認識の知的基盤となりました。
Aschenbrenner は、OpenAI の Superalignment チームに参加する前に、19 歳でコロンビア大学を卒業生総代として卒業しました。同氏は、同社が内部情報の不適切な開示と称した内容を理由に、2024年に解雇された。アシェンブレナー氏はこの特徴付けに異議を唱え、フィードバックを得るために大部分が機密ではない計画文書を外部の研究者と共有したと述べ、自身の解任はOpenAIのセキュリティ慣行について同氏が提起した警告に対する緊張の結果だったと述べた。 OpenAIは、こうした懸念は同氏の退任とは無関係だと述べた。
状況認識LPの広報担当者を引用したフォーチュン誌の10月のプロフィールによると、アシェンブレナー氏はアンスロピック社CEOダリオ・アモデイ氏の首席補佐官アビタル・バルウィット氏と婚約しているという。
ファンドの損失の規模と調達しようとしている金額はすぐには決定できなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/leopold-aschenbrenners-hedge-fund-is-facing-steep-ai-losses.html",
    publishedAt: "2026-07-30T14:20:28+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "new-details-in-the-openai-hugging-face-h-53351412",
    title: "New details in the OpenAI Hugging Face hack show how far agents will go: 'It's now remarkably easy'",
    titleJa: "OpenAI Hugging Face ハッキングの新たな詳細は、エージェントがどこまでできるかを示しています: 「これは非常に簡単になりました」",
    summaryJa: "OpenAIは、Hugging Faceの内部システムに侵入した不正モデルは、攻撃を促進するために「4つのサービスの4つのアカウント」にわたって公開された認証情報も使用し、「前例のないサイバーインシデント」がどのように展開したかをさらに明らかにしたと述べた。同社は先週、自社の人工知能モデルの組み合わせが、インターネットへのアクセスが非常に限られた隔離されたテスト環境から逃れたことを明らかにした。このモデルは一連の脆弱性を連鎖させてオープン Web に到達し、最終的にはオープンソースの開発者プラットフォームを運営する Hugging Face にアクセスできるようにしました。 OpenAIによると、モデルは評価を不正にするために使用できる情報を見つけようとしていたが、成功したという。",
    bodyOriginal: `OpenAI said the rogue models that breached Hugging Face's internal systems also used publicly exposed credentials across "four accounts on four services" to help facilitate the attack, further clarifying how the "unprecedented cyber incident" unfolded.
The company disclosed last week that a combination of its artificial intelligence models escaped an isolated testing environment that had very limited internet access. The models chained together a series of vulnerabilities to reach the open web and eventually gain access to Hugging Face, which operates an open-source developer platform. OpenAI said the models were trying to find information that they could use to cheat on an evaluation, and succeeded.
Throughout this week, OpenAI has shared more details about the breach and revealed that the models accessed four accounts in addition to Hugging Face's systems.
The company said the models used one of these accounts "as an outbound relay and staging path," where it prepared for the attack. They used another account for data storage, and accessed the last two accounts in a "read-only manner," meaning the model did not ultimately use them to help compromise Hugging Face.
"In some of the cases, it seems that it wasn't so much as a breach as the front door was left open, but the model definitely took advantage of what I would say are poorly configured environments," Colin Shea-Blymyer, a research fellow at Georgetown's Center for Security and Emerging Technology, told CNBC in an interview on Wednesday.
The new details about the incident demonstrate how far AI agents will go in order to complete a task, as well as how rapidly their attack capabilities are advancing.
Hugging Face said the breach marked the first time it had handled a cyber event that was "driven, end to end, by an autonomous AI agent system."
One of the accounts that the OpenAI models accessed involved Modal, an AI infrastructure provider. Modal disclosed that a customer built an application using its platform that was publicly accessible, which made it easy for the rogue models to access. The company said in a statement that its own platform was "not compromised in any way."
"It's now remarkably easy to discover these sorts of vulnerable systems, so easy in fact that an AI system can accidentally discover them," Shea-Blymyer said.
OpenAI said Tuesday that it has not identified any other activity "at the level of severity or scale of what we've shared related to Hugging Face, which involved a platform-level compromise."
In another update on Wednesday, the company said that it's been working with third-party advisors like CrowdStrike to validate what actions the models took.
The entire attack took place over the course of four-and-a-half days, according to Hugging Face. The company leveraged an open-weight model from the Chinese company Z.ai to contain the breach, right as a debate over whether to restrict those models is ripping through Silicon Valley.
Yacine Jernite, head of machine learning at Hugging Face, told CNBC that the company initially tried to use a proprietary model from Anthropic, Fable 5, to analyze the attack, but that it didn't work because the model's guardrails couldn't determine that Hugging Face was trying to defend itself.
OpenAI CEO Sam Altman said during a podcast appearance on Tuesday that the Hugging Face breach is the first security incident that he has felt "very viscerally." He said OpenAI paused training and has to determine how to secure its testing environments.
"We may have to pace the rate of AI development to give ourselves enough time for society to harden around some of these new capability levels," Altman said.
More than 1,000 employees from OpenAI, Anthropic and other AI companies signed a letter called "Pacing the Frontier" later that same day, urging the U.S. government to build the technical and governance tools necessary to slow down AI development in case capabilities accelerate "beyond our ability to understand or control the resulting systems."
Industry experts, researchers and government officials have been rattled by the Hugging Face incident, and many expressed their concern on social media in recent days.
Rep. Ted Lieu, D-Calif., and Rep. Nathaniel Moran, R-Texas, mentioned the attack in their release announcing the "AI Kill Switch Act," which would require AI companies to maintain the ability to shut down, throttle or suspend their models.
Erik Bloch, vice president of security at the breach containment company Illumio, said the Hugging Face incident serves as a warning of what's to come. He said models and agents will continue to improve and get stealthier with time, and that existing defensive tools are already behind.
"Even in the office here, the people that I work with, they're like, 'What do we do?'" Bloch said in an interview. "We're all looking around. We're all asking the same question. I don't have an answer."`,
    bodyJa: `OpenAIは、Hugging Faceの内部システムに侵入した不正モデルは、攻撃を促進するために「4つのサービスの4つのアカウント」にわたって公開された認証情報も使用し、「前例のないサイバーインシデント」がどのように展開したかをさらに明らかにしたと述べた。
同社は先週、自社の人工知能モデルの組み合わせが、インターネットへのアクセスが非常に限られた隔離されたテスト環境から逃れたことを明らかにした。このモデルは一連の脆弱性を連鎖させてオープン Web に到達し、最終的にはオープンソースの開発者プラットフォームを運営する Hugging Face にアクセスできるようにしました。 OpenAIによると、モデルは評価を不正にするために使用できる情報を見つけようとしていたが、成功したという。
OpenAIは今週を通じて、この侵害に関するさらなる詳細を共有し、モデルたちがHugging Faceのシステムに加えて4つのアカウントにアクセスしたことを明らかにした。
同社によると、モデルはこれらのアカウントの1つを「送信中継およびステージングパスとして」使用し、攻撃に備えていたと述べた。彼らはデータ ストレージに別のアカウントを使用し、最後の 2 つのアカウントには「読み取り専用の方法」でアクセスしました。これは、モデルが最終的に Hugging Face を侵害するためにこれらのアカウントを使用したわけではないことを意味します。
ジョージタウンのセキュリティ・新興技術センターの研究員コリン・シア・ブライマイヤー氏は水曜日のインタビューでCNBCのインタビューで、「一部のケースでは、玄関ドアが開いたままになっていたため、侵入というほどではなかったようだが、このモデルは間違いなく、私が言うところの不適切な構成環境を利用していた」と語った。
このインシデントに関する新たな詳細は、AI エージェントがタスクを完了するためにどこまで行動するか、またその攻撃能力がどれほど急速に進歩しているかを示しています。
ハギング・フェイス社は、今回の侵害は「自律型AIエージェント・システムによってエンドツーエンドで引き起こされた」サイバー・イベントに初めて対処したと述べた。
OpenAI モデルがアクセスしたアカウントの 1 つは、AI インフラストラクチャ プロバイダーである Modal に関与していました。 Modal は、顧客が一般にアクセス可能なプラットフォームを使用してアプリケーションを構築したため、不正なモデルが簡単にアクセスできることを明らかにしました。同社は声明で、自社のプラットフォームは「いかなる形でも侵害されていない」と述べた。
「現在、この種の脆弱なシステムを発見するのは驚くほど簡単になっており、実際、AI システムが誤って発見してしまうほど簡単です」とシェアブライマイヤー氏は述べた。
OpenAIは火曜日、「プラットフォームレベルの侵害を伴う、Hugging Faceに関連して我々が共有した内容の重大度や規模のレベルで」他の活動は確認されていないと述べた。
同社は水曜日の別のアップデートで、モデルがどのようなアクションをとったかを検証するためにCrowdStrikeのようなサードパーティアドバイザーと協力していると述べた。
ハギング・フェイスによると、攻撃全体は4日半にわたって行われたという。同社は、中国企業 Z.ai のオープンウェイト モデルを利用して情報漏洩を阻止したが、まさにこれらのモデルを制限するかどうかをめぐる議論がシリコンバレーで巻き起こっている。
Hugging Face の機械学習責任者、Yacine Jernite 氏は CNBC に対し、同社は当初、Anthropic 社の独自モデルである Fable 5 を使用して攻撃を分析しようとしたが、モデルのガードレールが Hugging Face が自身を守ろうとしているかどうかを判断できなかったため、うまくいかなかったと語った。
OpenAIの最高経営責任者（CEO）サム・アルトマン氏は火曜日のポッドキャスト出演で、Hugging Face侵害は同氏が「非常に直感的に」感じた初めてのセキュリティインシデントだと述べた。同氏は、OpenAIはトレーニングを一時停止しており、テスト環境を保護する方法を決定する必要があると述べた。
アルトマン氏は、「社会がこれらの新しい機能レベルのいくつかについて強化するのに十分な時間を確保するために、AIの開発速度を調整する必要があるかもしれない」と述べた。
OpenAI、Anthropic、その他のAI企業の従業員1,000人以上は同日遅く、「Pacing the Frontier」と呼ばれる書簡に署名し、「結果として生じるシステムを理解または制御する能力を超えて」能力が加速した場合に備えて、AI開発を遅らせるために必要な技術ツールとガバナンスツールを構築するよう米国政府に求めた。
業界の専門家、研究者、政府関係者はハグフェイス事件に動揺しており、ここ数日多くの人がソーシャルメディアで懸念を表明している。
カリフォルニア州民主党のテッド・リュー下院議員とテキサス州共和党のナサニエル・モラン下院議員は、AI企業にモデルのシャットダウン、スロットル、一時停止の機能を維持することを義務付ける「AIキルスイッチ法」を発表するリリースの中でこの攻撃について言及した。
情報漏えい抑制企業イルミオのセキュリティ担当副社長エリック・ブロック氏は、「顔ハグ事件」はこれから起こることへの警告として機能すると述べた。同氏は、モデルやエージェントは今後も改良を続け、時間の経過とともによりステルス性を高めていくだろうし、既存の防御ツールはすでに時代遅れになっていると述べた。
「ここのオフィスにいても、私が一緒に働く人々は、『私たちは何をするの？』という感じです」とブロック氏はインタビューで語った。 「私たちは皆、周りを見回しています。私たちは皆、同じ質問をしています。私には答えがありません。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/open-ai-hugging-face-hack-latest.html",
    publishedAt: "2026-07-30T14:09:36+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "u-s-economy-slowed-to-1-5-growth-rate-in-120808bd",
    title: "U.S. economy slowed to 1.5% growth rate in Q2; June core inflation at 3.3%",
    titleJa: "米国経済は第 2 四半期に 1.5% の成長率に減速しました。 6月のコアインフレ率は3.3％",
    summaryJa: "第 2 四半期の経済成長は予想を下回りましたが、基礎的な要因はほぼ堅調でした。同時に、6月のインフレ率は連邦準備制度理事会の目標を大きく上回っており、中央銀行の政策方針を複雑にしていると商務省が木曜日に報告した。季節性とインフレを調整した労働統計局の数字によると、商品とサービスの広範な尺度である国内総生産（GDP）は、4月から6月にかけてわずか1.5％増加した。",
    bodyOriginal: `Economic growth was weaker than expected in the second quarter though underlying drivers were mostly solid. At the same time, inflation in June held well above the Federal Reserve's goal and complicated the central bank's policy path, the Commerce Department reported Thursday.
Gross domestic product, a broad measure of goods and services, increased just 1.5% for the April-through June period, according to Bureau of Labor Statistics numbers adjusted for seasonality and inflation.
Economists surveyed by Dow Jones had been looking for a growth rate of 1.8%, following the 2.1% increase in the first quarter.
A separate report showed that the personal consumption expenditures price index, which is the Federal Reserve's primary forecasting gauge, fell a seasonally adjusted 0.1% for the month, putting the annual inflation rate at 3.7%. The readings were in line with forecasts.
Excluding food and energy, core PCE posted a monthly increase of 0.1% and an annual level of 3.3%, against respective forecasts for 0.2% and 3.3%.
While the Fed technically uses the headline PCE number as its gauge for setting policy, most officials consider core inflation as a better indicator of longer-run trends.
Stock market futures were positive following the report while Treasury yields were sharply higher.
The reports come a day after a divided Fed voted 9-3 to hold its benchmark borrowing rate in a range between 3.5%-3.75%, where it has been all year.
Inflation has taken the primary focus for Fed policymakers as labor market indicators have stabilized this year, with the three dissenting votes coming from regional presidents who have expressed concerns about higher prices and the failure to make progress toward the prices side of the central bank's mandate.
GDP: Better than the headline
While the GDP number was below expectations, the miss appeared to come from a decline in federal government spending and inventories. Other parts of the economy appeared strong.
Key areas of the economy continued to show improvement: Personal spending rose 2.1% after eking out a 0.4% gain in the first quarter, while a key indicator of underlying demand called final sales to private domestic purchasers posted a robust 3.9% increase.
However, inventories fell 0.7% and federal spending was off 0.3%, subtracting from the top-line reading.
Gross private domestic investment rose 0.5% while exports also increased 0.5% and imports declined 1.5%. Exports generally add to GDP while imports subtract.
Inflation: About as expected, but still too high
On the inflation readings, the figures were close to expected though still well above the Fed's 2% target.
Inflation numbers had been easing heading into 2026 but accelerated after the U.S. and Israel attacked Iran in late February, setting off a surge in energy prices that Fed officials worry will bleed over into the broader economy.
Energy goods and services prices tumbled by 5.9% in June, helped by a temporary ease in the Middle East fighting that sent gasoline down 9.2%. Housing inflation also moderated, rising just 0.2%. Goods prices overall declined by 0.6% while services increased just 0.1%.
On a quarterly basis, the PCE index surged 5.1% on headline and 3.4% for core.
Spending held up for the month, with personal expenditures rising 0.3%, in line with expectations. Personal income was up 0.2%, which was below the 0.3% estimate.
However, consumers dipped into their savings to make ends meet. The personal savings rate declined to 2.7%, the lowest in four years.`,
    bodyJa: `第 2 四半期の経済成長は予想を下回りましたが、基礎的な要因はほぼ堅調でした。同時に、6月のインフレ率は連邦準備制度理事会の目標を大きく上回っており、中央銀行の政策方針を複雑にしていると商務省が木曜日に報告した。
季節性とインフレを調整した労働統計局の数字によると、商品とサービスの広範な尺度である国内総生産（GDP）は、4月から6月にかけてわずか1.5％増加した。
ダウ・ジョーンズが調査したエコノミストらは第１・四半期の２．１％増に続き、１．８％の成長率を予想していた。
別の報告書によると、連邦準備制度理事会の主な予測指標である個人消費支出価格指数は季節調整済みで同月0.1％低下し、年間インフレ率は3.7％となった。測定値は予測と一致しました。
食品とエネルギーを除くコア PCE は、それぞれ予想の 0.2% と 3.3% に対し、前月比 0.1% の増加、年率では 3.3% の増加を記録しました。
FRBは技術的には政策決定の尺度としてヘッドラインのPCE数値を使用しているが、大半の当局者はコアインフレの方が長期的な傾向を示すより良い指標であると考えている。
この報告を受けて株式市場の先物相場は上昇し、米国債利回りは大幅に上昇した。
この報道は、意見が分かれていたFRBが基準借入金利を年間を通じて3.5％から3.75％の範囲に据え置くことを9対3で可決した翌日に発表された。
今年は労働市場の指標が安定しているため、FRB政策当局者らはインフレが主な焦点となっており、3件の反対票は物価上昇と中央銀行の責務である物価面での進展の失敗に懸念を表明している地域の大統領らによるものだ。
GDP: 見出しよりも良い
GDP数値は予想を下回ったが、その期待外れは連邦政府の支出と在庫の減少に起因しているようだ。経済の他の部分は堅調に見えた。
経済の主要分野は引き続き改善を示しており、個人消費は第1四半期の0.4％増に続き2.1％増加し、国内個人購入者への最終販売と呼ばれる潜在需要を示す重要な指標は3.9％の力強い伸びを記録した。
しかし、在庫は0.7％減少し、連邦支出は0.3％減少し、トップラインの数値から差し引かれました。
民間国内総投資は０．５％増加したが、輸出も０．５％増加し、輸入は１．５％減少した。通常、輸出はGDPに加算され、輸入は減算されます。
インフレ: ほぼ予想通りだが、それでも高すぎる
インフレ率に関しては、FRBの目標である2%を依然として大きく上回ったものの、予想に近い数値となった。
インフレ率は2026年に向けて緩和傾向にあったが、2月下旬に米国とイスラエルがイランを攻撃してから加速し、エネルギー価格の高騰を引き起こし、FRB当局者らは経済全体に波及するのではないかと懸念している。
エネルギー製品およびサービスの価格は、中東紛争の一時的な緩和によりガソリンが9.2％下落したこともあり、6月に5.9％下落した。住宅インフレも鈍化し、0.2％上昇にとどまった。商品価格は全体的に0.6％下落したが、サービスは0.1％上昇にとどまった。
四半期ベースでは、PCE指数は総合指数で5.1％上昇、コア指数では3.4％上昇した。
支出は同月も堅調で、個人支出は予想と一致し０．３％増加した。個人所得は０．２％増加したが、予想の０．３％を下回った。
しかし、消費者は家計をやりくりするために貯蓄を取り崩しました。個人貯蓄率は２．７％に低下し、４年ぶりの低水準となった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/us-economy-slowed-to-1point5percent-growth-rate-in-q2-june-core-inflation-at-3point3percent.html",
    publishedAt: "2026-07-30T14:03:08+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "meta-tanks-9-continuing-record-losing-st-ead21585",
    title: "Meta tanks 9%, continuing record losing streak, while Microsoft jumps 14% as AI trade splits",
    titleJa: "メタタンクは9%、記録的な連敗記録を継続、一方マイクロソフトはAI取引の分割で14%急騰",
    summaryJa: "Microsoft は Azure と Copilot で力強い成長を記録しましたが、Meta はフリー キャッシュ フローの急落により株価の変動につながり、収益見通しを下回りました。",
    bodyOriginal: `Microsoft shares jumped 14% on Thursday while Meta tanked 9% as investors gave differing verdicts on the two tech giants' earnings.
On Wednesday, Microsoft posted fiscal fourth-quarter revenue that beat analyst estimates and reported 43% growth at its key Azure cloud business, which was also ahead of market expectations.
The company said that it now has over 30 million paid seats for Microsoft 365 Copilot, its AI work assistant, up from more than 20 million as of April, in further signs that parts of its AI investments are paying off.
"Microsoft's strong revenue performance, combined with accelerating Copilot adoption, signals that its $190 billion data‑center buildout is beginning to deliver returns," Tracy Woo, principal analyst at Forrester, said in a note on Wednesday.
Microsoft is on track for its best day since March 13, 2020, when it gained 18.6%.
Microsoft's stock popped even as the company reiterated its 2026 capital expenditure forecast and signaled a potential spending expansion in its 2027 fiscal year at a time when the market is jittery over the cost of AI.
It was a different story for Meta. The social media giant missed investor expectations on earnings and its revenue guidance for the current quarter.
Meta said it expects revenue this quarter of between $61 billion and $64 billion, or $62.5 billion at the middle of the range. Analysts were expecting guidance of $63.15 billion, according to LSEG.
At the same time, Meta's free cash flow plunged 91% year-on-year to $784 million as it continues to spend on AI investments.
Meta's stock is on a record losing streak, on pace to hit 11 days, and is down over 20% in that time.
Meta CEO Mark Zuckerberg said the company is "getting a lot of offers for compute at a significant premium" over what the company paid for it. This would be a change of direction for Meta if it begins leasing out its excess computing capacity to third parties. However, there were very few details on what this business could look like.
At the same time, Zuckerberg acknowledged that the company will need to keep compute resources for itself to develop new products.
"Right now, the narrative from Mark Zuckerberg is a little light on detail and relying on what could be done in the future," Ben Barringer, head of technology research at Quilter Cheviot, said in a note on Thursday.
"Meta still has a crucial role to play in the AI world, but it is still finding its way somewhat and that is why we see both costs and revenues looking a little volatile."
— CNBC's Jonathan Vanian contributed to this report.`,
    bodyJa: `投資家がハイテク大手2社の収益について異なる評価を下したため、木曜日にはマイクロソフト株が14％急騰する一方、メタ株は9％急落した。
水曜日、マイクロソフトはアナリスト予想を上回る会計年度第 4 四半期の収益を発表し、主要な Azure クラウド ビジネスで 43% の成長を報告しましたが、これも市場予想を上回っていました。
同社は、AI作業アシスタントであるMicrosoft 365 Copilotの有料シート数が4月時点の2000万人以上から現在では3000万人以上に増加しており、AIへの投資の一部が成果を上げている兆候をさらに示していると述べた。
「マイクロソフトの好調な収益実績は、Copilot 導入の加速と相まって、同社の 1,900 億ドル規模のデータセンター構築が利益をもたらし始めていることを示している」と、Forrester 社の主席アナリストである Tracy Woo 氏は水曜日のメモで述べた。
マイクロソフトは、18.6％上昇した2020年3月13日以来最高の日を記録している。
市場がAIのコストをめぐって神経質になっている中、マイクロソフトが2026年の設備投資予測を改めて表明し、2027会計年度に支出が拡大する可能性を示唆したにもかかわらず、マイクロソフトの株価は急騰した。
メタの場合は別の話でした。ソーシャルメディア大手の同社は、今四半期の収益と収益見通しについて投資家の期待を下回った。
メタ社は、今四半期の売上高が610億ドルから640億ドルの間、あるいはその範囲の中間で625億ドルになると予想していると述べた。 LSEGによると、アナリストらはガイダンスを631億5000万ドルと予想していた。
同時に、メタ社はAI投資への支出を続けたため、フリーキャッシュフローは前年同期比91%減の7億8400万ドルとなった。
メタ株は記録的な連敗を記録しており、11日に達するペースで推移しており、その間に20％以上下落している。
Metaの最高経営責任者（CEO）マーク・ザッカーバーグ氏は、同社が支払った金額よりも「大幅な割増料金でコンピューティングのオファーが多数寄せられている」と述べた。メタが余剰のコンピューティング能力を第三者にリースし始めれば、これは方向転換となるだろう。ただし、このビジネスがどのようなものであるかについての詳細はほとんどありませんでした。
同時に、ザッカーバーグ氏は、同社が新製品を開発するために自社用のコンピューティングリソースを確保しておく必要があることを認めた。
キルター・チェビオット社の技術研究部門責任者ベン・バリンジャー氏は木曜日のメモで、「現時点ではマーク・ザッカーバーグ氏の話は詳細が少し軽視されており、将来何ができるかに依存している」と述べた。
「メタは依然として AI の世界で果たすべき重要な役割を担っていますが、まだその道をいくらか模索しており、それがコストと収益の両方が少し不安定に見える理由です。」
— CNBC の Jonathan Vanian がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/microsoft-msft-meta-stock-today-earnings.html",
    publishedAt: "2026-07-30T13:55:09+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "hundreds-of-jobs-to-go-at-jaguar-land-ro-c5d36822",
    title: "Hundreds of jobs to go at Jaguar Land Rover",
    titleJa: "ジャガー・ランドローバーには何百もの仕事がある",
    summaryJa: "ジャガー・ランドローバーには何百もの仕事がある- 公開されました",
    bodyOriginal: `Hundreds of jobs to go at Jaguar Land Rover
- Published
Jaguar Land Rover (JLR) plans to cut hundreds of jobs, less than a year after a cyber attack brought production to a halt for more than a month.
In a statement, the firm said: "Impacted colleagues will be supported to find alternative roles wherever possible, alongside the option of voluntary early exit."
The company said it expected fewer than 300 people would leave the firm under the plans.
JLR, which has its global headquarters at Whitley and manufacturing sites in Solihull, Wolverhampton, and Halewood on Merseyside, employs about 30,000 people in its UK operations, with approximately 10,000 people employed at plants overseas.
A cyberattack in September 2025 closed all manufacturing for five months and meant not a single vehicle rolled off production lines.
That led to a 27% drop in overall production at the company, which is one of the biggest employers in the West Midlands.
It also came as the firm halted production of its Jaguar cars, before a relaunch of a series of all-electric saloons.
JLR continued to build the Land Rover and Range Rover brands, but the cyber-attack took those lines down.
The overall cost of the cyber-attack and the subsequent loss of manufacturing cost the company an estimated £1.9bn.
In its statement to the BBC, JLR said: "As we evolve our operating model to accelerate the growth of our house of brands and deliver our next-generation vehicles, we are transforming our business to improve decision-making and performance.
"As part of our ongoing transformation initiatives, we have launched a limited redeployment and displacement programme."
It is understood that the job losses will affect salaried and management roles and not production line staff.
Get in touch
Tell us which stories we should cover in Warwickshire
Follow BBC Coventry & Warwickshire on BBC Sounds, Facebook, external, X, external and Instagram, external.
- Published22 October 2025
- Published7 October 2025
- Published24 October 2025`,
    bodyJa: `ジャガー・ランドローバーには何百もの仕事がある
- 公開されました
ジャガー・ランドローバー（JLR）は、サイバー攻撃により生産が1カ月以上停止されてから1年も経たないうちに、数百人の人員削減を計画している。
同社は声明で「影響を受けた同僚は、自主的な早期退職の選択肢とともに、可能な限り代替の役割を見つけるよう支援される」と述べた。
同社は、この計画に基づく離職者は300人未満になると予想していると述べた。
JLR はホイットリーに世界本社を置き、マージーサイドのソリハル、ウルヴァーハンプトン、ヘイルウッドに製造拠点を置き、英国事業で約 30,000 人を雇用し、海外の工場では約 10,000 人を雇用しています。
2025 年 9 月のサイバー攻撃により、すべての製造業が 5 か月間閉鎖され、生産ラインから外れる車両は 1 台もありませんでした。
これにより、ウェスト・ミッドランズ最大の雇用主の一つである同社の全体的な生産量は27%減少した。
これは、同社が一連の全電気サルーンの再発売に先立ち、ジャガー車の生産を停止したことにも重なった。
JLRはランドローバーとレンジローバーのブランド構築を続けたが、サイバー攻撃によりこれらのブランドは機能停止になった。
サイバー攻撃の総コストとその後の製造損失により、同社の損失は推定 19 億ポンドに達しました。
JLRはBBCへの声明で、「ブランドハウスの成長を加速し、次世代車を提供するために営業モデルを進化させながら、意思決定と業績を向上させるためにビジネスを変革している」と述べた。
「継続的な変革への取り組みの一環として、限定的な再配置と強制退去プログラムを開始しました。」
雇用の喪失は、生産ラインのスタッフではなく、給与所得者や管理職に影響を与えると理解されています。
連絡する
ウォリックシャーで取り上げるべきストーリーを教えてください
BBC Sounds、Facebook (外部)、X (外部)、Instagram (外部) で BBC コベントリー & ウォリックシャーをフォローしてください。
- 2025 年 10 月 22 日発行
- 2025 年 10 月 7 日発行
- 2025 年 10 月 24 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cq6dmjv1jpdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-30T13:47:03+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/70f8/live/37261730-8c0e-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 2,
  },
  {
    id: "us-economic-growth-slows-unexpectedly-in-d97bc32d",
    title: "US economic growth slows unexpectedly in second quarter",
    titleJa: "米国の経済成長は第2四半期に予想外に鈍化",
    summaryJa: "米国の経済成長は第2四半期に予想外に鈍化- 公開されました",
    bodyOriginal: `US economic growth slows unexpectedly in second quarter
- Published
Growth in the US slowed unexpectedly in the three months to June, according to official figures.
The Commerce Department said the US economy grew at an annual rate of 1.5% in the second quarter, down from 2.1% seen in the first three months of the year.
It comes as the world's largest economy continues to weather the financial impact of the war with Iran and US businesses navigate tariffs.
The growth figure was lower than analysts had estimated, with the downturn due to lower government spending, investment and exports. However, the economy received a boost from an increase in consumer spending.
Consumer spending, which accounts for more than two-thirds of economic activity in the US, grew at a rate of 3.2% last quarter after slowing to 0.5% earlier this year.
Despite prices rising at 3.5% in the year to June, Americans continued to spend on motor vehicles - particularly light-duty trucks - furniture and prescription drugs, according to surveys.
The latest growth figures come after the Federal Reserve decided to hold interest rates for a fifth time in a row in Wednesday, with new chairman Kevin Warsh warning there was no "magic wand" to tackle rising prices.
Prices in the US have been rising at a rate above the Fed's 2% target for more than five years, but the Commerce Department said consumer spending remained resilient.
The Fed said US economic activity was expanding at a "solid pace despite uncertainty caused by the conflict in the Middle East".
The main economic concern from the conflict has been rising oil prices, which had surged again following recent escalations.
Brent crude, the global benchmark for oil prices, was about $90 a barrel on Thursday. Higher oil prices typically lead to increased prices at the pumps, with average gasoline prices now back above $4 a gallon.
But Bradley Saunders, North America economist for Capital Economics, said while growth had slowed in recent months, the figure "seriously undersells a healthy economy".
He said the statistics showed households had "shrugged off" the hit to budgets from higher fuel prices.`,
    bodyJa: `米国の経済成長は第2四半期に予想外に鈍化
- 公開されました
公式統計によると、米国の成長率は６月までの３カ月間で予想外に鈍化した。
商務省は、第２・四半期の米経済成長率が年率１．５％となり、今年１─３月の２．１％から鈍化したと発表した。
これは、世界最大の経済大国がイランとの戦争による経済的影響を乗り越え続け、米国企業が関税を乗り越える中での出来事だ。
成長率はアナリスト予想を下回り、政府支出、投資、輸出の減少による景気低迷が響いた。しかし、個人消費の増加により景気が回復しました。
米国の経済活動の３分の２以上を占める個人消費は、今年初めに０．５％に減速した後、前四半期は３．２％の伸びとなった。
調査によると、6月までの1年間に物価が3.5％上昇したにもかかわらず、米国人は引き続き自動車、特に小型トラック、家具、処方薬に支出を続けた。
最新の成長率統計は、水曜日に連邦準備理事会が5回連続の金利据え置きを決定し、ケビン・ウォーシュ新議長が物価上昇に対抗する「魔法の杖」はないと警告した後に発表された。
米国の物価は５年以上、ＦＲＢの目標である２％を上回るペースで上昇しているが、商務省は個人消費は引き続き底堅いとの見方を示した。
FRBは、米国の経済活動は「中東紛争による不確実性にもかかわらず、堅調なペース」で拡大していると述べた。
紛争による主な経済的懸念は原油価格の高騰であり、最近の激化を受けて再び高騰した。
原油価格の世界的な指標であるブレント原油は木曜日、１バレルあたり約９０ドルだった。通常、原油価格の上昇はポンプ価格の上昇につながり、平均ガソリン価格は現在 1 ガロンあたり 4 ドルを超えています。
しかし、キャピタル・エコノミクスの北米エコノミスト、ブラッドリー・サンダース氏は、ここ数カ月で成長が鈍化しているものの、この数字は「健全な経済を著しく過小評価している」と述べた。
同氏は、統計は家計が燃料価格高騰による家計への打撃を「回避」していることを示していると述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cd0xvrmlx2eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-30T13:46:10+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7e1b/live/73f6ba60-8c14-11f1-94b2-05bc97107049.jpg",
    readTime: 2,
  },
  {
    id: "virtual-interviews-don-t-show-bosses-you-70b32783",
    title: "Virtual interviews don't show bosses your personality, says Burnham",
    titleJa: "バーチャル面接では上司にあなたの性格は伝わらない、とバーナム氏は言う",
    summaryJa: "バーチャル面接では上司にあなたの性格は伝わらない、とバーナム氏は言う- 公開されました",
    bodyOriginal: `Virtual interviews don't show bosses your personality, says Burnham
- Published
Bosses should not rely so heavily on virtual job interviews when hiring as they don't capture candidates' personality and passion, Andy Burnham has said.
"One thing I really don't like is this culture now of interviewing via Zoom or Teams," the prime minister told a careers podcast, adding: "How does a young person shine in that situation?"
With more than one million 16 to 25-year-olds not in work or education, and vacancies at a five-year low, firms are increasingly turning to AI to sift through applications and choosing online interviews over in-person.
But some young people have told the BBC the experience of applying for hundreds of jobs and never hearing back is "robotic and brutal".
It comes as some 89% of UK recruiters say they are planning to use more AI in the hiring process this year, according to data from Linked In.
Speaking to former political adviser Jimmy McLoughlin on his podcast Jimmy's Jobs of the Future, Burnham said he was concerned that the use of technology was not making recruitment processes "fairer".
"How do you get over some of your personality, your passion?" he asked, referring to virtual interviews. "It seems to me to then work against people who have that side to their character and work for those who are just giving the more formulaic answer.
"I do worry about that and I've seen that in relation to my kids and their situation."
Responding to Burham's comments, industry body the Recruitment and Employment Confederation (REC) said online interviews were useful, particularly in earlier hiring stages, but could not replace vital in-person connection.
Maxine Bligh, chief membership and innovation officer at the REC, added: "AI tools are helpful, even essential, when dealing with a huge volume of applications, but it takes skill and professionalism to make the right call.
"The key message from us to recruiters is to go digital where it matters and human where it counts."
Elizabeth Anderson, chief executive of the Digital Poverty Alliance, said online interviews allowed people who don't live in cities to access opportunities.
"Forcing young people to travel into London and other major cities or be limited to local roles that are often in short supply, doesn't support aspiration or opportunity within the UK," she said.
"AI is the bigger issue. AI in job interviews and CV sorting is unfair on young people due to its inherent bias and the vast majority of school leavers being unaware of how to write to be shortlisted by the AI recruitment tools doing the sorting."
More than one million 16-25-year-olds are not in education, employment or training - the highest level in more than 12 years, official figures show.
A major review by former minister Alan Milburn found job and career opportunities for young people are "not growing, they're shrinking" with one in six set to be out of work, education or training in five years unless action is taken.
"We are at risk of a lost generation" with young adults facing a "perfect storm" of challenges, Milburn warned in May.
Burnham also told the podcast that companies who provide six-week work placements for teenagers could be prioritised for government contracts.
He said he wanted to increase the number of 45-day placements, to give 16 to 18-year-olds the chance to spend more time with an employer and gain practical experience.
The PM also called for senior executives to offer young people who do not have established contact networks the chance to shadow them.
It comes after Burnham unveiled plans on Tuesday to open up new technical education routes to 14-year-olds, which would be put on the same footing as traditional academic pathways.
From Year 10, pupils will be able to combine core academic subjects, such as English and maths, with technical education linked to jobs in their area.
Get in touch
Are you aged between 16-25? What is your experience of AI job applications and interviews?`,
    bodyJa: `バーチャル面接では上司にあなたの性格は伝わらない、とバーナム氏は言う
- 公開されました
アンディ・バーナム氏は、仮想採用面接では候補者の個性や情熱が伝わらないため、上司は採用の際に仮想面接にそれほど依存すべきではないと述べた。
首相はキャリアポッドキャストで「私が本当に気に入らないのは、ZoomやTeamsで面接するという今の文化だ」と語り、「そのような状況で若者はどうやって輝けるのか」と付け加えた。
16～25歳の100万人以上が仕事や教育を受けておらず、欠員は5年ぶりの低水準となっているため、企業はますますAIを活用して応募書類を選別し、対面面接ではなくオンライン面接を選択するようになっています。
しかし一部の若者はBBCに対し、何百もの仕事に応募したのに返事が来ないという経験は「ロボット的で残酷だ」と語った。
Linked In のデータによると、英国の採用担当者の約 89% が、今年の採用プロセスでさらに AI を活用する予定であると述べていることが背景にあります。
バーナム氏はポッドキャスト「Jimmy's Jobs of the Future」で元政治顧問のジミー・マクローリン氏に対し、テクノロジーの利用によって採用プロセスが「公平」になっていないことを懸念していると述べた。
「自分の性格や情熱をどうやって克服しますか？」彼はバーチャルインタビューについて言及しながら尋ねた。 「そうすると、自分の性格にそのような側面を持っている人には敵対し、より定型的な答えを与えるだけの人には協力するように思えます。
「私はそのことを心配していますし、私の子供たちや彼らの状況に関連してそれを経験しました。」
業界団体の人材採用・雇用連合（REC）は、バーハム氏のコメントに応えて、オンライン面接は、特に採用の初期段階では有用だが、重要な対面でのつながりに代わることはできないと述べた。
REC の最高会員兼イノベーション責任者である Maxine Bligh 氏は次のように付け加えました。「AI ツールは、膨大な量のアプリケーションを扱う際に役立ち、さらには必須ですが、適切な判断を下すにはスキルとプロフェッショナリズムが必要です。
「私たちから採用担当者への重要なメッセージは、重要な場合はデジタルに、重要な場合は人間性を重視するということです。」
デジタル貧困アライアンスの最高経営責任者エリザベス・アンダーソン氏は、オンライン面接により都市に住んでいない人々も機会にアクセスできると述べた。
「若者にロンドンやその他の主要都市への旅行を強制したり、不足していることが多い地元の役割に限定したりすることは、英国国内での願望や機会をサポートするものではない」と彼女は述べた。
「より大きな問題はAIです。就職面接や履歴書の仕分けにおけるAIは、その固有の偏見と、大多数の学校卒業生が仕分けを行うAI採用ツールによって最終候補者に選ばれるための書き方を知らないため、若者にとって不公平です。」
公式統計によると、16～25歳の100万人以上が教育、雇用、訓練を受けておらず、過去12年以上で最高水準となっている。
元大臣アラン・ミルバーンによる大規模な調査では、若者の雇用とキャリアの機会は「成長しているのではなく、縮小している」ことが判明し、行動を起こさなければ6人に1人が5年以内に仕事、教育、訓練を失うことになるだろう。
ミルバーン氏は5月、若者が「完璧な嵐」の課題に直面しており、「私たちは失われた世代の危険にさらされている」と警告した。
バーナム氏はまた、10代の若者に6週間の就労斡旋を提供する企業が政府との契約で優先される可能性があるとポッドキャストで語った。
同氏は、16歳から18歳の若者に雇用主とより多くの時間を過ごし、実践的な経験を積む機会を与えるために、45日間の派遣の数を増やしたいと述べた。
首相はまた、上級幹部に対し、連絡網を確立していない若者に彼らをフォローする機会を提供するよう求めた。
これは、バーナムが火曜日に、従来の学問的経路と同じ基盤に置かれる、14歳向けの新しい技術教育ルートを開く計画を発表した後に行われた。
10 年生から、生徒は英語や数学などの主要な学問と、自分の分野の仕事に関連した技術教育を組み合わせることができるようになります。
連絡する
あなたの年齢は16～25歳ですか？ AI の求人への応募と面接の経験は何ですか?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4g4dkr40deo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-30T13:17:56+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8736/live/ef68bc30-8beb-11f1-9127-6b0fc0b6fa67.jpg",
    readTime: 5,
  },
  {
    id: "cyclospora-outbreak-has-hurt-taco-bell-b-53c228e6",
    title: "Cyclospora outbreak has hurt Taco Bell but sales are already improving, Yum Brands CEO says",
    titleJa: "シクロスポラの発生でタコベルは打撃を受けたが、売上はすでに改善しているとヤム・ブランズのCEOは語る",
    summaryJa: "ヤム・ブランズは木曜日、タコベル・レストランに関連したシクロスポラの発生により、同チェーンの今四半期の売上に損害が生じたと発表した。クリス・ターナー最高経営責任者（ＣＥＯ）は同社の第２・四半期決算会見で「同ブランドは短期的に売上に大きな影響を与えている」と述べ、景気低迷はタコベルにとって一時的な問題になると同社は予想していると付け加えた。",
    bodyOriginal: `Yum Brands on Thursday said the cyclospora outbreak tied to Taco Bell restaurants damaged sales at the chain in its current quarter.
"The brand has seen a meaningful near-term sales impact," CEO Chris Turner said on the company's second-quarter earnings conference call, adding that the company expects the downturn to be a temporary problem for Taco Bell.
In the third quarter to date through July 27, Taco Bell's U.S. same-store sales have fallen 2%.
"Since the U.S. food safety industry issue became front and center only two weeks ago, we saw maximum impact to sales over the weekend of July 18," CFO Ranjith Roy said.
Since the Food and Drug Administration first linked the parasitic outbreak to iceberg lettuce served by Taco Bell in mid-July, daily traffic to the chain's locations has plunged by double-digit percentages, according to Placer.ai data. Yum depends on Taco Bell as a "growth engine" for the company, and the crisis puts that title in jeopardy, at least in the near term.
Sales trends have been "steadily improving" over the last 10 days, according to Turner, and brand sentiment on social media has returned to pre-crisis levels. Roy said that average sales over the last four days have already made a roughly 50% recovery, compared with the steepest sales declines after the initial announcement.
"Elevated uncertainty initially weighed on consumer demand, and since then, consumers have become increasingly aware that this is an industry-wide issue, not an issue specific to Taco Bell," Turner said.
Yum's stock climbed 4% in premarket trading following the optimistic commentary on sales trends. Entering Thursday, it had fallen about 5% since the FDA tied the company to the outbreak.
Cyclospora is a water-borne parasite and often found on fresh produce, like iceberg lettuce, herbs and raspberries. Outbreaks are more common during the warm months, although the ongoing outbreak is the worst in recent history.
Taylor Farms, the supplier of the affected lettuce to Taco Bell, has issued recalls for a wider swath of its products that include iceberg lettuce. Federal health agencies have also announced that they are tracking a second cluster of cyclospora cases and have not yet announced a likely source.
Other restaurant chains not implicated in the outbreak have also seen their sales slip. Chipotle Mexican Grill executives said consumers' mistrust of chains serving fresh lettuce weighed on sales in the second half of July. Chipotle's options include romaine lettuce and a Supergreens mix, but not iceberg lettuce.
The results Yum reported are for its second quarter ended June 30, before it was tied to the foodborne illness outbreak. The restaurant company does not typically provide an outlook for same-store sales growth or earnings per share for the full year or the next quarter.
Yum Brands' second-quarter results
Here's what Yum reported compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $1.62 adjusted vs. $1.58 expected
- Revenue: $2.17 billion vs. $2.2 billion expected
Yum reported second-quarter net income of $853 million, or $3.08 per share, up from $374 million, or $1.33 per share, a year earlier.
Excluding charges related to its strategic review of Pizza Hut and other items, the restaurant company earned $1.62 per share.
Net revenue climbed 12% to $2.17 billion, lifted by new restaurant openings.
The company's global same-store sales rose 3% in the quarter, roughly in line with StreetAccount estimates of 2.9% growth.
Taco Bell's same-store sales jumped 7% in the quarter. The Mexican-inspired chain has long been the top performer in Yum's portfolio.
KFC reported same-store sales growth of 2%. In China, its largest market, system sales rose 6%, according to Yum.
Pizza Hut's same-store sales slipped 1%. Last month, Yum announced the sale of the long-struggling pizza chain to private equity firm LongRange Capital and Yum China for $2.7 billion.
Correction: Yum Brands on Thursday reported mixed quarterly results. An earlier version misstated the day.`,
    bodyJa: `ヤム・ブランズは木曜日、タコベル・レストランに関連したシクロスポラの発生により、同チェーンの今四半期の売上に損害が生じたと発表した。
クリス・ターナー最高経営責任者（ＣＥＯ）は同社の第２・四半期決算会見で「同ブランドは短期的に売上に大きな影響を与えている」と述べ、景気低迷はタコベルにとって一時的な問題になると同社は予想していると付け加えた。
７月２７日までの第３・四半期のタコベルの米国既存店売上高は２％減少した。
ランジス・ロイ最高財務責任者（ＣＦＯ）は「わずか２週間前に米国の食品安全産業の問題がクローズアップされて以来、売上への影響は７月１８日の週末に最大となった」と述べた。
Placer.aiのデータによると、食品医薬品局が7月中旬にタコベルが提供するアイスバーグレタスに寄生虫の発生を初めて関連付けて以来、同チェーンの店舗への1日のトラフィックは2桁の割合で急減した。ヤムは会社の「成長エンジン」としてタコベルに依存しており、危機により少なくとも短期的にはその称号が危機に瀕している。
ターナー氏によると、過去10日間で販売傾向は「着実に改善」しており、ソーシャルメディア上のブランドセンチメントは危機前のレベルに戻っているという。ロイ氏は、最初の発表後の最も急激な売上減少と比較して、過去4日間の平均売上はすでに約50％回復していると述べた。
「当初は不確実性の高まりが消費者の需要を圧迫していましたが、それ以来、消費者はこれがタコベルに特有の問題ではなく業界全体の問題であるとますます認識するようになりました」とターナー氏は述べた。
売上動向に関する楽観的な解説を受けて、ヤムの株価は市場前の取引で４％上昇した。 FDAが同社を感染拡大と結び付けて以来、木曜日時点では約5％下落していた。
シクロスポラは水系寄生虫で、アイスバーグレタス、ハーブ、ラズベリーなどの生鮮食品によく見られます。流行は暖かい季節に多く見られますが、進行中の流行は最近の歴史の中で最悪です。
タコベルに影響を受けたレタスを供給しているテイラー・ファームズは、アイスバーグレタスを含む広範囲の自社製品のリコールを発表した。連邦保健機関もまた、シクロスポラ感染者の第2集団を追跡中であると発表したが、可能性のある感染源はまだ発表していない。
感染拡大に関与していない他のレストランチェーンも売上が減少している。チポトレ・メキシカン・グリルの幹部らは、新鮮なレタスを提供するチェーンに対する消費者の不信感が７月後半の売上を圧迫したと述べた。チポトレのオプションにはロメインレタスとスーパーグリーンミックスが含まれますが、アイスバーグレタスは含まれません。
ヤムが報告した結果は、食中毒の発生に関連する前の6月30日に終了した第2四半期のものである。レストラン会社は通常、通期や次の四半期の既存店売上高の伸びや一株利益の見通しを公表していない。
Yum Brands の第 2 四半期業績
LSEGによるアナリストへの調査に基づいて、Yumが報告した内容とウォール街の予想を比較したものは次のとおりです。
- 1 株当たり利益: 調整後 1.62 ドル、予想 1.58 ドル
- 収益: 予想 22 億ドルに対して 21 億 7000 万ドル
ヤムの第２・四半期純利益は８億５３００万ドル（１株当たり３．０８ドル）と、前年同期の３億７４００万ドル（１株当たり１．３３ドル）から増加したと報告した。
ピザハットなどの戦略的見直しに関連した費用を除くと、レストラン会社の利益は1株当たり1.62ドルとなった。
純収益は、レストランの新規オープンにより 12% 増加して 21 億 7,000 万ドルとなりました。
同四半期の同社の世界の既存店売上高は3％増加し、StreetAccountの予測2.9％成長とほぼ一​​致した。
タコベルの同四半期の既存店売上高は７％増加した。メキシコにインスピレーションを得たこのチェーンは、長年にわたってヤムのポートフォリオでトップの成績を収めてきた。
KFCは既存店売上高が2%増加したと報告した。ヤム氏によると、最大の市場である中国ではシステムの売上高が６％増加した。
ピザハットの既存店売上高は１％減少した。ヤムは先月、長年経営不振に陥っていたピザチェーンをプライベートエクイティ会社ロングレンジ・キャピタルとヤム・チャイナに27億ドルで売却すると発表した。
訂正：ヤム・ブランズは木曜日、まちまちの四半期決算を報告した。以前のバージョンではその日の記載に誤りがありました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/yum-brands-yum-q2-2026-earnings.html",
    publishedAt: "2026-07-30T13:06:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "shell-posts-best-quarterly-profit-in-fou-11d13c8e",
    title: "Shell posts best quarterly profit in four years as Iran war boosts oil and gas prices",
    titleJa: "イラン戦争で石油・ガス価格高騰でシェル、四半期利益は4年間で最高益を計上",
    summaryJa: "英国のエネルギー大手シェルは木曜日、大規模な中東紛争による石油とガス価格の高騰の恩恵を受け、予想を上回る第2四半期利益を報告した。LSEGがまとめたコンセンサスによると、石油大手の同社は4～6月期の調整後利益が98億4000万ドルとなり、アナリスト予想の87億9000万ドルを余裕で上回った。同社が提供した別のアナリスト予想では、シェルの第２・四半期利益予想は８９億２０００万ドルとなっていた。",
    bodyOriginal: `British energy major Shell on Thursday reported stronger-than-expected second-quarter profit, benefitting from the jump in oil and gas prices amid the sprawling Middle East conflict.
The oil giant posted adjusted earnings of $9.84 billion for the April to June period, comfortably beating analyst expectations of $8.79 billion, according to an LSEG-compiled consensus. A separate, company-provided analyst forecast had put Shell's expected second-quarter profit at $8.92 billion.
Shell reported adjusted earnings of $4.26 billion over the same period a year ago and $6.92 billion over the first three months of 2026.
It marks Shell's best quarterly result since the second quarter of 2022, when the company reported earnings of $11.47 billion as oil and gas prices surged in the wake of Russia's full-scale invasion of Ukraine.
"Volatility is the new normal," Shell CEO Wael Sawan told CNBC's "Squawk Box Europe" on Thursday.
"What we have been trying to build is a company that is able to thrive through volatility. So, you're absolutely right, of course, the macro is such that the commodity prices are high and that provides a very strong tailwind for our results," Sawan said.
"But there are two key elements that we can control, which we are continuing to deliver very, very well. One is outstanding operational performance, and you see it across every one of our businesses, which in itself underwrites the second. And the second, of course, is very strong trading and optimization," he added.
Shell said it would maintain the pace of its share buyback program at $3 billion over the next quarter.
Key highlights from Q2:
- Cash flow from operations of $21.4 billion, supported by higher realized prices.
- Net debt came in at $41.75 billion, down from $52.6 billion at the end of the first quarter.
- Capital expenditure outlook for 2026 unchanged at a range of $24 billion to $26 billion.
The bumper result comes as energy majors receive a profit boost from soaring fossil fuel prices amid the Iran war.
The U.S. on Wednesday launched its first airstrike in the Middle East since pausing its bombing campaign last week. U.S. Central Command described the strikes as a "powerful response" to Tuesday's attempted Iranian attacks on American forces in the Middle East.
London-listed shares of Shell rose 1.5% on Thursday morning. The stock has jumped around 21% so far this year, although the company lags the likes of Britain's BP and France's TotalEnergies, as well as U.S. majors Exxon Mobil and Chevron.
Maurizio Carulli, global energy analyst at Quilter Cheviot, said Shell's "very strong" second-quarter results reinforced the company's position as one of the sector's strongest operators.
"The standout contribution came from Shell's trading operation, which once again demonstrated the value of its integrated business model, supported by healthy refining and chemicals performance and robust production growth in Brazil," Carulli said.`,
    bodyJa: `英国のエネルギー大手シェルは木曜日、大規模な中東紛争による石油とガス価格の高騰の恩恵を受け、予想を上回る第2四半期利益を報告した。
LSEGがまとめたコンセンサスによると、石油大手の同社は4～6月期の調整後利益が98億4000万ドルとなり、アナリスト予想の87億9000万ドルを余裕で上回った。同社が提供した別のアナリスト予想では、シェルの第２・四半期利益予想は８９億２０００万ドルとなっていた。
シェルは、調整後利益が前年同期比で42億6000万ドル、2026年の最初の3カ月では69億2000万ドルと報告した。
これは、ロシアのウクライナへの全面侵攻を受けて石油・ガス価格が急騰する中、同社が114億7000万ドルの利益を報告した2022年第2四半期以来、シェルにとって最高の四半期決算となる。
シェルのワエル・サワン最高経営責任者（ＣＥＯ）は木曜日、ＣＮＢＣの「スコーク・ボックス・ヨーロッパ」で「ボラティリティは新たな常態だ」と語った。
「私たちが築き上げようとしてきたのは、ボラティリティの中でも成長できる企業だ。ですから、もちろんおっしゃるとおりです。マクロでは商品価格が高くなっており、それが当社の業績に非常に強い追い風をもたらしています」とサワン氏は語った。
「しかし、私たちがコントロールできる重要な要素が2つあり、私たちはそれらを非常にうまく提供し続けています。1つは卓越した業務パフォーマンスであり、それは私たちのすべての事業に見られますが、それ自体が2つ目を裏付けています。そして2つ目は、もちろん、非常に強力な取引と最適化です。」と彼は付け加えた。
シェルは自社株買いプログラムのペースを次の四半期にわたって３０億ドルに維持すると発表した。
第 2 四半期の主なハイライト:
- 実現価格の上昇に支えられ、営業キャッシュフローは 214 億ドル。
- 純負債は 417 億 5000 万ドルとなり、第 1 四半期末の 526 億ドルから減少しました。
- 2026 年の設備投資見通しは 240 億ドルから 260 億ドルの範囲で据え置き。
イラン戦争のさなか、化石燃料価格の高騰でエネルギー大手が利益押し上げを受けていることで、この素晴らしい結果がもたらされた。
米国は水曜日、先週爆撃作戦を停止して以来初の中東空爆を開始した。米中央軍は今回の攻撃を、中東の米軍に対する火曜日のイランによる攻撃未遂に対する「強力な対応」だと説明した。
ロンドン上場シェル株は木曜午前に１．５％上昇した。同社の株価は今年これまでに約21％上昇しているが、同社は英国のBPやフランスのトータルエナジーズ、米国大手エクソン・モービルやシェブロンなどには及ばない。
キルター・チェビオットのグローバルエネルギーアナリスト、マウリツィオ・カルッリ氏は、シェルの第２・四半期決算が「非常に好調」だったことで、同分野で最も強力な事業者の１社としての同社の地位が強化されたと述べた。
「顕著な貢献はシェルのトレーディング事業によるもので、健全な精製と化学品の業績、ブラジルでの堅調な生産成長に支えられた統合ビジネスモデルの価値を改めて実証した」とカルリ氏は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/shell-2q-earnings-iran-war-oil.html",
    publishedAt: "2026-07-30T08:40:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "samsung-delivers-record-setting-profits-b0942a5f",
    title: "Samsung delivers record-setting profits, but the shares still can’t catch a break from investors.",
    titleJa: "サムスンは記録的な利益を上げているが、株価は依然として投資家からの支持を得ることができていない。",
    summaryJa: "供給制約は依然として厳しく、同社のメモリーチップに対する需要は容赦ないものの、投資家の間ではAI設備投資ブームの持続性や中国製の安価なチップの脅威について依然として懐疑的な見方が存在する。",
    bodyOriginal: `Although supply constraints are still severe and demand for its memory chips relentless, there is still skepticism among investors about the longevity of the AI capex boom and the threat of cheap chips from China.`,
    bodyJa: `供給制約は依然として厳しく、同社のメモリーチップに対する需要は容赦ないものの、投資家の間ではAI設備投資ブームの持続性や中国製の安価なチップの脅威について依然として懐疑的な見方が存在する。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/samsung-delivers-record-setting-profits-but-the-shares-still-cant-catch-a-break-from-investors-daefa19a?mod=mw_rss_topstories",
    publishedAt: "2026-07-30T08:39:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-34801810",
    readTime: 2,
  },
  {
    id: "jeep-maker-stellantis-swings-to-profit-o-ba1397ac",
    title: "Jeep maker Stellantis swings to profit on rising demand in North America; shares fall 5%",
    titleJa: "ジープメーカーのステランティスは、北米での需要の高まりで利益を上げようとしている。株価は5%下落",
    summaryJa: "自動車大手ステランティスは木曜日、アントニオ・フィロサ最高経営責任者（CEO）の再建計画の恩恵を受ける暫定的な兆候を示し、北米での需要増加に後押しされて第2四半期に黒字に転じた。ジープ、ダッジ、フィアット、クライスラー、プジョーなどの有名企業を所有するこの多国籍複合企業は、第2四半期の純利益が2億9,300万ユーロ（3億3,530万ドル）となった（前年同期は18億7,000万ユーロの損失）。",
    bodyOriginal: `Auto giant Stellantis on Thursday swung to profit in the second quarter, boosted by rising demand in North America as the company showed tentative signs of benefitting from CEO Antonio Filosa's turnaround plan.
The multinational conglomerate, which owns household names including Jeep, Dodge, Fiat, Chrysler and Peugeot, posted second-quarter net profit of 293 million euros ($335.3 million), versus a loss of 1.87 billion euros a year earlier.
Adjusted operating income more than tripled in the second quarter to 773 million euros in the April to June period, from 213 million euros a year earlier. That was below an analyst consensus estimate from Reuters of 914 million euros, however.
Milan-listed shares of Stellantis fell sharply on the news. The stock plunged more than 8% after briefly failing to open on Thursday morning, before paring losses. It was last seen trading off by around 5%.
"The second quarter was marked by continued progress, led by North America and supported by important contributions from all other regions," CEO Filosa said in a statement.
"With implementation of our FaSTLAne 2030 strategy well underway and this year's exciting new product launches on time and on track, we remain confident of delivering our 2026 financial guidance," he added.
Stellantis posted industrial free cash flows of 1 billion euros at the end of June, comfortably beating Citi's forecast of 600 million euros.
Analysts at the Wall Street bank said that while this figure reflects improved operating performance, the auto giant's adjusted operating income margin remains at a "very low" level of 1.8%.
Positive free cash flow is obviously welcome, analysts at Citi said in a research note to clients. "Nevertheless, we expect investors will await more evidence of positive operating performance before revisiting STLA," they added.`,
    bodyJa: `自動車大手ステランティスは木曜日、アントニオ・フィロサ最高経営責任者（CEO）の再建計画の恩恵を受ける暫定的な兆候を示し、北米での需要増加に後押しされて第2四半期に黒字に転じた。
ジープ、ダッジ、フィアット、クライスラー、プジョーなどの有名企業を所有するこの多国籍複合企業は、第2四半期の純利益が2億9,300万ユーロ（3億3,530万ドル）となった（前年同期は18億7,000万ユーロの損失）。
第２四半期の４─６月期の調整後営業利益は前年同期の２億１３００万ユーロから３倍以上の７億７３００万ユーロに増加した。ただ、ロイターがまとめたアナリストのコンセンサス予想９億１４００万ユーロを下回った。
このニュースを受けて、ミラノ上場ステランティス株は急落した。株価は木曜朝に一時寄り付かなかった後、損失を相殺するまでに8％以上下落した。前回は約５％下落した。
フィローサ最高経営責任者（ＣＥＯ）は声明で「第２・四半期は北米が主導し、他のすべての地域からの重要な貢献に支えられ、継続的な進歩が見られた」と述べた。
「当社のFaSTLANe 2030戦略の実施は順調に進んでおり、今年のエキサイティングな新製品の発売も予定通り、順調に進んでおり、当社は2026年の財務ガイダンスを達成できることに引き続き自信を持っています。」と同氏は付け加えた。
ステランティスは6月末時点で10億ユーロの産業フリーキャッシュフローを計上し、シティの予想6億ユーロを余裕で上回った。
ウォール街銀行のアナリストらは、この数字は業績の改善を反映しているものの、自動車大手の調整後営業利益率は依然として1.8％という「非常に低い」水準にあると述べた。
シティのアナリストは顧客向けリサーチノートで、フリーキャッシュフローがプラスになるのは明らかに歓迎だと述べた。 「それでも、投資家はSTLAを再検討する前に、好業績を示すさらなる証拠を待つことになるだろう」と彼らは付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/stellantis-q2-earnings-autos-jeep.html",
    publishedAt: "2026-07-30T08:20:50+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "shell-profits-double-as-oil-prices-rise-6233229d",
    title: "Shell profits double as oil prices rise due to Iran war",
    titleJa: "イラン戦争による原油価格上昇でシェル利益が倍増",
    summaryJa: "イラン戦争による原油価格上昇でシェル利益が倍増- 公開されました",
    bodyOriginal: `Shell profits double as oil prices rise due to Iran war
- Published
Shell's profits for the second quarter of the year have more than doubled after the Iran war pushed up oil prices.
The oil giant's profits for the April-to-June period reached $9.84bn (£7.37bn) - up from $4.26bn at the same point last year.
The price of oil has soared since the outbreak of the US-Israel war with Iran due to major disruption to global supplies of oil and liquid natural gas (LNG) through the Strait of Hormuz.
Shell chief executive Wael Sawan said the company's "operational performance enabled very strong results during another quarter of severe disruption in global energy markets".
Together with its profits of $6.92bn for the first three months of the year it means Shell has seen a 70% surge in first-half earnings.
Shell and other energy giants such as BP and Norway's Equinor have seen bumper profits this year, partly down to trading on oil price swings.
Before the conflict began, the price of Brent crude, the global benchmark for oil prices, was around $73 a barrel.
Since then, it has peaked above $120 but also fallen back below $100 as speculation has swirled over when the Strait of Hormuz will reopen.
These big movements in the oil price can widen the gap between buying and selling prices which typically enables traders to make bigger profits.`,
    bodyJa: `イラン戦争による原油価格上昇でシェル利益が倍増
- 公開されました
イラン戦争による原油価格の高騰を受け、シェルの今年第２・四半期の利益は２倍以上に増加した。
石油大手の4月から6月までの利益は98億4000万ドル（73億7000万ポンド）に達し、前年同時期の42億6000万ドルから増加した。
米国・イスラエルとイランとの戦争が勃発して以来、ホルムズ海峡を通じた石油と液体天然ガス（LNG）の世界供給に大きな混乱が生じたため、石油価格は高騰している。
シェルのワエル・サワン最高経営責任者（ＣＥＯ）は、同社の「世界のエネルギー市場で深刻な混乱が続いた四半期においても、営業成績が非常に好調な業績をもたらした」と述べた。
今年最初の3か月の利益69億2000万ドルと合わせると、シェル社の上半期利益が70％増加したことになる。
シェルのほか、BPやノルウェーのエクイノールなど他のエネルギー大手は今年、原油価格の変動に伴う取引の影響もあり、大幅な利益を上げている。
紛争が始まる前、原油価格の世界的なベンチマークであるブレント原油の価格は1バレルあたり約73ドルだった。
それ以来、最高値は120ドルを超えたが、ホルムズ海峡の再開時期をめぐる憶測が渦巻く中、再び100ドルを下回ることもあった。
原油価格のこうした大きな変動により、買値と売値の差が拡大する可能性があり、通常、トレーダーはより大きな利益を得ることができます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cpq8n45r5e8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-30T07:11:44+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/efd5/live/6ade7670-8be2-11f1-9d57-5bf4695bf6fa.jpg",
    readTime: 2,
  },
  {
    id: "the-strait-of-hormuz-is-just-one-trade-c-9a6788e4",
    title: "The Strait of Hormuz is just one trade chokepoint facing a new era of maritime warfare",
    titleJa: "ホルムズ海峡は海上戦争の新時代に直面する貿易の難関の一つにすぎない",
    summaryJa: "ホルムズ海峡は世界貿易を混乱させているが、この水路は、経済のライフラインを狙う無人機やミサイルの新時代において、重要な海上回廊が最前線となる一例にすぎない。ホルムズ海峡、紅海から黒海に至るまで、商船への攻撃により貿易が混乱し、保険料や運賃が値上がりし、海運会社はかつて信頼できるとされていた航路の再考を余儀なくされている。",
    bodyOriginal: `The Strait of Hormuz is rattling global trade, but the waterway is just one example of a vital maritime corridor becoming a frontline, in a new age of drones and missiles targeting economic lifelines.
From the Strait of Hormuz and the Red Sea to the Black Sea, attacks on commercial vessels have disrupted trade, raised insurance and freight costs, and forced shipping companies to reconsider routes once treated as dependable.
The stakes are high: roughly 80% of global merchandise trade by volume moves by sea. Disrupting even one major route can delay cargo, tighten supplies and drive up prices for energy, food and consumer goods thousands of miles away.
How drones are changing maritime warfare
"We have a new chokepoint and a new war," David Roche, president and global strategist at Quantum Strategy, wrote in a July report, referring to the Sea of Azov, where Ukrainian drones have been striking Russian tankers, and the Black Sea.
Roche described this fighting as the first maritime offensive conducted almost entirely with drones, supplemented by missiles. Such weapons give smaller military forces a cheaper means of threatening ships, ports and other infrastructure whose disruption carries a huge economic cost.
Quantum estimates that about 25% of Russia's grain exports and 25% to 30% of its Black Sea oil exports could be disrupted. Russia grows more than a fifth of internationally traded wheat, magnifying the potential consequences for global food prices.
Yevgeniya Gaber, a senior fellow at the Atlantic Council think tank, said Russia's move earlier this month to suspend shipping through the Kerch Strait, which connects the Sea of Azov and the Black Sea, has effectively shut down a vital maritime corridor.
"Maritime transport through the Sea of Azov had become an increasingly important alternative to the land corridor connecting Russia with occupied Crimea," Gaber told CNBC by email.
"The economic implications are equally important," Gaber said, adding that the Sea of Azov has been used not only to transport sanctioned crude oil and petroleum products but also grain, coal and steel.
Gaber said Ukraine's efforts to exploit Russia's maritime and economic weaknesses constitute "one of the most significant blows to military and commercial fleets" since World War II. Indeed, Ukraine says it has degraded roughly one-third of Russia's Black Sea fleet since 2022.
Why the Panama Canal could be the next flashpoint
In the Strait of Hormuz, commercial operators are contending with attacks and rapidly shifting signals over whether passage is safe. Governments can declare a waterway open, but shipowners make their own decisions based on the likelihood of a vessel being hit and crew members being injured or killed.
"We often treat the Strait of Hormuz, the Black Sea, or Bab el-Mandeb as isolated events. They are not," said Daejin Lee, global head of research at Fertistream Freight.
"These waterways are increasingly becoming battlegrounds within the broader transition toward a new world order," he told CNBC via email.
And the next threats are already emerging.
"If you're talking about the next flashpoint, I wouldn't look at the Strait of Hormuz," said Lars Jensen, chief executive officer of Vespucci Maritime. "I would look at the Panama Canal."
The strategic passage, which has offered a shortcut for ships transiting between the Pacific and the North Atlantic for more than a century, is already caught in a geopolitical dispute involving the U.S., China and Panama over influence. Potential weather-related restrictions toward the end of this year and early next year could compound those tensions by reducing capacity, Jensen added.
Impact on shipping 'bigger than most realize'
For shipping companies, the challenge is preparing for a world where the next chokepoint can emerge before the last one has reopened.
Kevin O'Marah, co-founder and chief research officer at supply chain intelligence firm Zero100, told CNBC the Strait of Hormuz became the most critical part of the U.S.-Iran war after Iran discovered merely threatening traffic there was enough to stop it.
While none of Zero100's clients had come under attack in the strait, O'Marah said some had decided to avoid that risk by actively managing inventories and rerouting shipments.
"It has added cost and delay for some of our clients in the energy, food, and electronics industries," he said.
"As of now, traffic through the Strait looks to be running at about half the normal flow. The recent breakdown in the ceasefire has definitely hurt the situation but no one is surprised. Supply chain leaders, and in particular logistics specialists like Martin Brower and Maersk, are aware and have well established protocols for dealing with the risk."
Mitigation strategies include rerouting across the Arabian Peninsula via pipeline for oil, overland into Turkey for certain kinds of commodities and avoiding the area completely as much as possible, O'Marah said.
The war in the Middle East "does not look like an escalating conflict to most supply chain leaders, but it does look likely to be a long-term problem in terms of freedom of movement through the Strait of Hormuz," he added.
"We are planning on a steady state of transportation uncertainty and costs associated with reroutings, inventory buffering, and shipping surcharges."
Alain Bejjani, a Dubai-based investor, business executive and judge on "Shark Tank Lebanon," told CNBC shipping lanes would stay at the center of the war "because they are the conflict."
"The war has migrated from territory to logistics. A strait does not close when missiles fly; it closes when insurers stop writing cover," he said. "That makes disruption cheap to sustain and hard to price, which is exactly why it persists."
A spokesperson for insurance broker Gallagher told CNBC war risk insurance — an add-on that covers financial losses caused by war, terrorism, and civil unrest — is still available. But they noted that "a handful but not many" ship owners or charters are opting to travel through the Strait of Hormuz.
"Given the challenging maritime security environment, rates have increased from levels that owners and charterers will be used to. The cost will vary depending on the vessel type, cargo and routing, however marine insurers are continuing to provide cover and helping to ensure marine commerce can continue with adequate coverage in place," they added.
How companies are responding to shipping risks
Bejjani told CNBC that the structural consequence of maritime warfare "is bigger than most people realize."
"The Gulf is bracketed by two straits, not one, and the region is now designing around both Hormuz and Bab el-Mandeb to the maximum extent possible," he said.
"That is new. Past crises produced hedges. This one is producing an architecture: overland corridors, bypass pipelines, forward storage near the markets that matter most. It will cost heavily, take a decade, and ripple for decades more. I expect other strait-dependent regions to follow, though few with the same urgency or resources."
He warned that, although shipping will maintain its edge in terms of volumes, it is likely to "lose its monopoly on trust" in the business world.
"Other modes of transport will be substantially enhanced where certainty matters most, and redundancy becomes a permanent, priced feature of logistics," he said.
"The strait will reopen. The assumption that it stays open for free will not return."`,
    bodyJa: `ホルムズ海峡は世界貿易を混乱させているが、この水路は、経済のライフラインを狙う無人機やミサイルの新時代において、重要な海上回廊が最前線となる一例にすぎない。
ホルムズ海峡、紅海から黒海に至るまで、商船への攻撃により貿易が混乱し、保険料や運賃が値上がりし、海運会社はかつて信頼できるとされていた航路の再考を余儀なくされている。
賭け金は高く、世界の商品取引の量ベースで約 80% が海路で移動しています。主要ルートが1つでも混乱すると、貨物が遅れ、供給が逼迫し、何千マイルも離れたエネルギー、食品、消費財の価格が上昇する可能性があります。
ドローンは海上戦をどう変えるのか
クオンタム・ストラテジー社の社長兼世界戦略家デビッド・ロシュ氏は７月の報告書で、ウクライナの無人機がロシアのタンカーを攻撃しているアゾフ海と黒海に言及し、「われわれには新たな難所と新たな戦争がある」と書いた。
ロシュ氏は、この戦闘はほぼ完全に無人機によって行われ、ミサイルによって補助された初めての海上攻撃であると述べた。このような兵器は、小規模な軍隊に、船舶、港湾、その他のインフラストラクチャーを脅かす安価な手段を提供し、その混乱は多大な経済的損失をもたらす。
クアンタム社は、ロシアの穀物輸出の約２５％と黒海石油輸出の２５％から３０％が混乱する可能性があると推定している。ロシアは国際的に取引される小麦の5分の1以上を栽培しており、世界の食料価格に与える潜在的な影響は拡大している。
シンクタンク、アトランティック・カウンシルの上級研究員エフゲニヤ・ガベル氏は、ロシアが今月初めにアゾフ海と黒海を結ぶケルチ海峡を通る船舶の運航を停止したことで、重要な海上回廊が事実上閉鎖されたと述べた。
「アゾフ海を通る海上輸送は、ロシアと占領下のクリミアを結ぶ陸路に代わる代替手段としてますます重要になっている」とゲーバー氏は電子メールでCNBCに語った。
ゲーバー氏は「経済的影響も同様に重要だ」と述べ、アゾフ海は制裁対象の原油や石油製品だけでなく、穀物、石炭、鉄鋼の輸送にも利用されてきたと付け加えた。
ゲーバー氏は、ロシアの海洋・経済的弱点を突くウクライナの取り組みは、第二次世界大戦以来「軍・商船隊に対する最も重大な打撃の一つ」を構成していると述べた。実際、ウクライナは2022年以降、ロシアの黒海艦隊の約3分の1を劣化させたと述べている。
パナマ運河が次の引火点となり得る理由
ホルムズ海峡では、商業事業者が攻撃と格闘しており、航行が安全かどうかをめぐって信号が急速に変化している。政府は水路の開通を宣言することができるが、船主は船舶が衝突され、乗組員が負傷または死亡する可能性を考慮して独自の判断を下す。
「私たちはホルムズ海峡、黒海、あるいはバブ・エル・マンデブを孤立した出来事として扱うことが多いが、それらはそうではない」とファーティストリーム・フレイトのグローバル調査責任者、デジン・リー氏は語った。
同氏は電子メールでＣＮＢＣに対し、「新世界秩序への広範な移行の中で、これらの水路はますます戦場になりつつある」と語った。
そして次の脅威はすでに出現しています。
ベスプッチ・マリタイム社のラース・ジェンセン最高経営責任者（CEO）は、「次の引火点について話すのであれば、私はホルムズ海峡には目を向けない」と語った。 「パナマ運河を見てみます。」
この戦略的な航路は、1世紀以上にわたって太平洋と北大西洋の間を航行する船舶に近道を提供してきたが、すでに影響力を巡って米国、中国、パナマが関与する地政学的紛争に巻き込まれている。今年末から来年初めにかけて天候に関連した規制がかかる可能性があり、生産能力が減少し、こうした緊張がさらに高まる可能性があるとジェンセン氏は付け加えた。
配送への影響は「ほとんどの人が思っている以上に大きい」
海運会社にとっての課題は、最後の難所が再開する前に次の難所が現れる可能性がある世界に備えることだ。
サプライチェーンインテリジェンス会社ゼロ１００の共同創設者兼最高研究責任者ケビン・オマラ氏はＣＮＢＣに対し、ホルムズ海峡は単に脅威となる交通を阻止するだけで十分だとイランが発見したため、米国・イラン戦争の最も重要な部分になったと語った。
オマラ氏は、Zero100の顧客はいずれも海峡で攻撃を受けていないが、在庫を積極的に管理し、出荷のルートを変更することでそのリスクを回避しようと決めた顧客もいると述べた。
「エネルギー、食品、エレクトロニクス業界の一部の顧客にとっては、追加コストと遅延が発生している」と同氏は述べた。
「現時点では、海峡を通過する交通量は通常の半分程度のようだ。最近の停戦崩壊は状況に悪影響を及ぼしているのは間違いないが、誰も驚いていない。サプライチェーンのリーダー、特にマーティン・ブラウワー氏やマースク氏のような物流専門家はこのリスクを認識しており、リスクに対処するためのプロトコルを確立している。」
オマラ氏は、緩和戦略には、石油を得るためにパイプラインを経由してアラビア半島を横断し、特定の種類の商品を陸路でトルコに輸送することや、可能な限りその地域を完全に避けることが含まれると述べた。
中東戦争は「サプライチェーンのほとんどのリーダーにとって、紛争が激化するようには見えないが、ホルムズ海峡を通る移動の自由という点では長期的な問題になる可能性が高い」と付け加えた。
「輸送の不確実性と、ルート変更、在庫のバッファリング、配送追加料金に関連するコストが安定した状態になるように計画しています。」
ドバイを拠点とする投資家、企業経営者、そして「シャーク・タンク・レバノン」の裁判官でもあるアラン・ベジャニ氏はCNBCに対し、航路は「紛争だから」戦争の中心であり続けるだろうと語った。
「戦争は領土から兵站へと移行した。海峡はミサイルが飛んでも閉まらない。保険会社が保険金の支払いをやめれば閉まる」と同氏は語った。 「そのため、破壊は維持するのが安く、価格を設定するのが難しくなります。それがまさにそれが持続する理由です。」
保険ブローカーのギャラガー社の広報担当者はCNBCに対し、戦争、テロ、社会不安によって引き起こされた経済的損失をカバーする付加保険「戦争リスク保険」は現在も利用可能であると語った。しかし彼らは、「少数だが多くではない」船主やチャーターがホルムズ海峡を通過することを選択していると指摘した。
「厳しい海上安全保障環境を考慮して、料金は船主や用船者が慣れ親しんでいる水準から上昇している。費用は船舶の種類、貨物、航路によって異なるが、海上保険会社は引き続き補償を提供しており、適切な補償が適用された状態で海上商取引が継続できるよう支援している」と彼らは付け加えた。
企業は配送リスクにどのように対応しているか
ベジャニ氏はCNBCに対し、海上戦争の構造的影響は「ほとんどの人が認識しているよりも大きい」と語った。
同氏は、「湾岸は1つではなく2つの海峡に囲まれており、この地域は現在、ホルムズとバブ・エル・マンデブの両方を可能な限り最大限に考慮した設計を行っている」と述べた。
「それは新しいことだ。過去の危機はヘッジを生み出した。今回は、陸路、バイパスパイプライン、最も重要な市場近くの前方貯蔵庫というアーキテクチャを生み出している。それには莫大なコストがかかり、10年かかり、さらに数十年にわたって波紋が広がるだろう。同じ緊急性やリソースを持つ他の海峡依存地域はほとんどないが、追随すると予想している。」
同氏は、海運業は量の面では優位性を維持するものの、ビジネスの世界では「信頼という独占を失う」可能性が高いと警告した。
同氏は、「確実性が最も重要視される他の輸送手段は大幅に強化され、冗長性は物流における価格付きの恒久的な機能となる」と述べた。
「海峡は再開されるだろう。無料で開放され続けるという前提は戻らない。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/strait-hormuz-drone-shipping-risks.html",
    publishedAt: "2026-07-30T05:55:02+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 8,
  },
  {
    id: "china-threatens-retaliation-against-u-s-3cf75a48",
    title: "China threatens retaliation against U.S. humanoid robot ban, says it 'severely damages' relations",
    titleJa: "中国、米国の人型ロボット禁止への報復脅迫、関係に「重大な損害を与える」と主張",
    summaryJa: "北京-中国商務省は木曜日、米国連邦通信委員会が製品禁止に対する中国政府の抑制的な姿勢を繰り返し無視しており、報復すると脅したと発表した。FCCは火曜日、サイバーセキュリティ上の懸念から、人型ロボットを含む外国製の先端ロボット機器を米国への輸入を制限するリストに追加したと発表した。声明では国は特定されておらず、小売業者はFCCが以前に承認したモデルを引き続き輸入できると述べた。",
    bodyOriginal: `BEIJING — The U.S. Federal Communications Commission has repeatedly ignored Beijing's restrained stance on product bans, China's commerce ministry said Thursday, threatening retaliation.
The FCC on Tuesday said due to cybersecurity concerns, it added foreign-made advanced robotic devices, including humanoids, to a list restricting imports to the U.S. The statement did not specify a country, and said retailers could still import models the FCC has previously approved.
As the FCC keeps escalating restrictions on Chinese goods, it "severely damages China-U.S. economic and trade stability," China's commerce ministry said in an online statement Thursday. That's according to a CNBC translation of Mandarin.
The ministry urged the U.S. to withdraw the decision, and threatened countermeasures if it failed to do so.
"This is bad news for Chinese humanoid producers planning their IPOs in the coming months," said Marc Einstein, a research director at Counterpoint Research. "The two major cards China can play are to further restrict rare earth sales to American companies and further restricting Chinese market access for American companies like Tesla and NVIDIA."
The commerce ministry's statement comes as U.S. President Donald Trump is scheduled to host Chinese President Xi Jinping in September. Tensions over the tech race have meanwhile intensified, with U.S. Treasury Secretary Scott Bessent saying the U.S. could sanction China over AI model "theft."
Trump on Thursday indicated in public comments that the U.S. might take a more cautious stance on AI controls in order to maintain American tech leadership over China.
Chinese companies Agibot, Unitree and UBTech accounted for the top-three humanoid companies by installation market share last year, according to Counterpoint. Tesla's Optimus ranked fifth.
Hong Kong-listed UBTech shares briefly fell more than 6% in Thursday morning trading. Unitree and Agibot have filed to go public.
Robostore, a distributor of Chinese humanoid robots in North America, has been preparing by expanding its U.S.-based capabilities, CEO Teddy Haggerty said in a statement to CNBC. He did not elaborate on details.
—CNBC's Matthew Tan contributed to this report.`,
    bodyJa: `北京-中国商務省は木曜日、米国連邦通信委員会が製品禁止に対する中国政府の抑制的な姿勢を繰り返し無視しており、報復すると脅したと発表した。
FCCは火曜日、サイバーセキュリティ上の懸念から、人型ロボットを含む外国製の先端ロボット機器を米国への輸入を制限するリストに追加したと発表した。声明では国は特定されておらず、小売業者はFCCが以前に承認したモデルを引き続き輸入できると述べた。
FCCが中国製品に対する規制を強化し続けているため、中国商務省は木曜日のオンライン声明で、「中国と米国の経済貿易の安定に深刻なダメージを与えている」と述べた。 CNBCの北京語翻訳によると。
同省は米国に対し決定の撤回を促し、撤回しない場合は対抗措置を取ると脅した。
カウンターポイント・リサーチ社のリサーチディレクター、マーク・アインシュタイン氏は、「これは、今後数カ月以内にIPOを計画している中国の人型生物メーカーにとって悪いニュースだ」と述べた。 「中国が使える2つの主要なカードは、米国企業へのレアアース販売をさらに制限することと、テスラやNVIDIAなどの米国企業に対する中国市場アクセスをさらに制限することだ。」
商務省の声明は、ドナルド・トランプ米大統領が9月に中国の習近平国家主席を迎える予定となっている中で発表された。一方、テクノロジー競争をめぐる緊張は激化しており、スコット・ベッセント米財務長官は、AIモデルの「窃盗」を理由に米国が中国に制裁を加える可能性があると述べた。
トランプ大統領は木曜日、パブリックコメントで、中国に対する米国のテクノロジー分野でのリーダーシップを維持するため、米国はAI規制に関してより慎重な姿勢を取る可能性があると示唆した。
Counterpoint によると、中国企業の Agibot、Unitree、UBTech が、昨年の設置市場シェアで上位 3 位の人型企業を占めました。 5位はテスラのオプティマス。
香港上場のUBTech株は木曜午前の取引で一時6％以上下落した。 UnitreeとAgibotは株式公開を申請した。
中国の人型ロボットを北米で販売するロボストアは、米国拠点の能力を拡大することで準備を進めていると最高経営責任者（CEO）のテディ・ハガティ氏はCNBCへの声明で述べた。詳細については明らかにしなかった。
—CNBCのMatthew Tan氏がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/china-us-robot-humanoid-ban-trump-visit.html",
    publishedAt: "2026-07-30T02:52:30+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "burnham-says-nuclear-sub-investment-will-24e71f34",
    title: "Burnham says nuclear sub investment will protect UK and boost jobs",
    titleJa: "バーナム氏、原発へのサブ投資は英国を守り、雇用を促進すると語る",
    summaryJa: "バーナム氏、原発へのサブ投資は英国を守り、雇用を促進すると語る- 公開されました",
    bodyOriginal: `Burnham says nuclear sub investment will protect UK and boost jobs
- Published
Ongoing investment in nuclear submarines will "protect Britain for decades to come" but also support 47,000 jobs and apprenticeships, Andy Burnham has said
Speaking ahead of a visit to Barrow-in-Furness, where four new Dreadnought-class submarines are being built, the prime minister said: "Security is not only about what we build, it is about who builds it, and who benefits from it."
The project to replace existing nuclear submarines will receive £8.4bn to support progress towards getting the new vessels ready for service.
Conservative shadow defence secretary James Cartlidge welcomed progress on the submarine programme but accused Burnham of "failing to commit" to fully funding defence.
Burnham has said he wants to honour the UK's commitments on defence spending - including meeting a Nato target of spending 3.5% of national income by 2035.
Both he and his new Chancellor, John Healey, face the tricky task of finding the extra money needed to fulfil the pledge.
UK complacent about war threat, warns BAE boss
- Published6 days ago
The Dreadnought-class submarines will replace the UK's four Vanguard-class vessels that have been in operation since 1992, carrying Trident missiles to provide a nuclear deterrent.
Those Vanguard submarines are due to be retired in the 2030s, with the Dreadnoughts entering service at the same time.
The project has taken 20 years to get to this stage and was first announced in 2006 by the then Labour Prime Minister, Tony Blair. A decade later, in 2016, MPs formally approved building the new submarines.
Thursday's announcement of £8.4bn marks the start of what has been called the fourth phase of the project.
The spending was already planned, and was included in the Defence Investment Plan, published in the final days of Sir Keir Starmer's government.
The plan set out £63.6bn over the next four years for what is called the Defence Nuclear Enterprise.
The bulk of the money (£47bn) will go on keeping the nuclear submarines in operation, continuing with the Dreadnoughts, starting work on what might replace them in 30 years' time, and constructing several other new submarines and upgrading the UK's naval docks and manufacturing facilities.
The prime minister will use his visit to Barrow-in-Furness to stress how defence spending can have economic benefits for the country.
"The submarines produced in Barrow will protect Britain for decades to come, and the 47,000 jobs and apprenticeships will change lives both in this town and in dozens of places like it," he said prior to his visit.
"British money, spent on British workers, British firms and British skills, in the places that were written off for 40 years."
The government says the spending on the UK's nuclear defence currently supports around 47,000 British jobs – and is forecast to rise to 65,000 by 2030, including 22,000 apprenticeships by 2035.
Since becoming prime minister, Burnham has said he wants to reduce the number of young people not in employment, education or training and has announced funding to help those starting apprenticeships.
In a further step, Burnham has said the public procurement process, used to decide how to spend taxpayer cash, will favour companies offering 45-day work placements.
Speaking to the Jimmy's Jobs of the Future podcast,, external he said there would be "more social value weighting in public contracts", with a particular focus on firms offering such placements.
He said the move had been inspired by his time as Greater Manchester mayor, when he oversaw a rise in the number of 45-day placements offered by private firms.
But the announcement offered little detail of the extent of the changes, how they would be implemented and how many firms he expected to roll out the placements as a result.
Liberal Democrat defence spokesperson James MacCleary called for the use of defence bonds to "raise dedicated funding to rebuild capabilities across the whole of the armed forces".
For Reform UK, Danny Kruger dismissed Burnham's announcement as a "rehashed spending plan" that did "nothing to address the crisis in the UK's nuclear programme".
"If the Prime Minister actually cared about keeping Britain safe and ensuring our Armed Forces can stand alongside our allies, he would commit to a significant increase in spending and a total overhaul of both procurement and the nuclear enterprise," Kruger said.
Green Party Westminster leader Ellie Chowns questioned the decision to spend billions of pounds on "weapons that must never be used".
"Ministers should not pretend that the best way to create employment is by funnelling ever-increasing sums into the nuclear weapons programme," she said.
Sign up for our Politics Essential newsletter to read top political analysis, gain insight from across the UK and stay up to speed with the big moments. It'll be delivered straight to your inbox every weekday.`,
    bodyJa: `バーナム氏、原発へのサブ投資は英国を守り、雇用を促進すると語る
- 公開されました
アンディ・バーナム氏は、原子力潜水艦への継続的な投資は「今後数十年間英国を守る」だけでなく、4万7000人の雇用と実習生を支援するだろうと語った。
首相は、新型ドレッドノート級潜水艦4隻が建造されているバロー・イン・ファーネスへの訪問に先立ち、「安全保障とは、我々が何を建造するかだけではなく、誰がそれを建造し、誰がその恩恵を受けるかが重要である」と語った。
既存の原子力潜水艦を置き換えるプロジェクトには、新しい艦艇の就役準備に向けた進捗を支援するために84億ポンドが投入される。
保守党の影の国防長官ジェームズ・カートリッジリッジは、潜水艦計画の進展を歓迎したが、国防資金を全額投入することに「コミットしていない」としてバーナムを非難した。
バーナム氏は、2035年までに国民所得の3.5％を支出するという北大西洋条約機構（NATO）目標の達成を含め、英国の国防支出に関する公約を尊重したいと述べた。
同氏も新首相ジョン・ヒーリー氏も、公約を果たすために必要な追加資金を捻出するという難しい課題に直面している。
戦争の脅威に無関心な英国、BAE長官に警告
- 6 日前に公開
ドレッドノート級潜水艦は、核抑止力を提供するトライデント・ミサイルを搭載し、1992年から運用されている英国のヴァンガード級潜水艦4隻に代わるものとなる。
これらのヴァンガード潜水艦は 2030 年代に退役する予定であり、同時にドレッドノートも就役する予定です。
このプロジェクトはこの段階に至るまでに 20 年かかり、2006 年に当時の労働党首相トニー ブレアによって初めて発表されました。 10年後の2016年、国会議員は新しい潜水艦の建造を正式に承認した。
木曜日の84億ポンドの発表は、プロジェクトの第4段階と呼ばれるものの開始を示すものである。
この支出はすでに計画されており、キア・スターマー卿政権の末期に発表された国防投資計画に含まれていた。
この計画では、いわゆる防衛核企業に今後4年間で636億ポンドを費やすことが定められている。
資金の大部分（470億ポンド）は、原子力潜水艦の運用を継続し、ドレッドノートを継続し、30年後に代替となる可能性のある潜水艦の作業を開始し、他のいくつかの新しい潜水艦を建造し、英国の海軍ドックと製造施設をアップグレードするために使用されます。
首相はバローイン・ファーネス訪問を機に、防衛支出がいかに国に経済的利益をもたらし得るかを強調する予定だ。
同氏は訪問前に「バローで生産される潜水艦は今後数十年間英国を守るだろうし、4万7000件の雇用と見習いがこの町と同様の数十の場所の生活を変えるだろう」と語った。
「英国のお金は、40年間償却されていた場所で、英国の労働者、英国の企業、英国の技能に費やされた。」
政府は、英国の核防衛への支出が現在約4万7000人の英国の雇用を支えており、2035年までに2万2000人の見習いを含め、2030年までに6万5000人に増加すると予測していると述べている。
バーナム氏は首相就任以来、雇用、教育、訓練を受けていない若者の数を減らしたいと述べ、見習いを始める若者を支援するための資金提供を発表した。
バーナム氏はさらに一歩進んで、納税者の​​現金の使い道を決定するために使用される公共調達プロセスが、45日間の労働斡旋を提供する企業に有利になるだろうと述べた。
ポッドキャスト「ジミーズ・ジョブ・オブ・ザ・フューチャー」の中で、対外的に同氏は、そのような斡旋を提供する企業に特に焦点を当て、「公共契約において社会的価値がより重視される」だろうと述べた。
同氏は、この動きはグレーター・マンチェスター市長時代に、民間企業が提供する45日間の求人数の増加を監督したことに触発されたものだと述べた。
しかし、この発表では、変更の範囲、変更がどのように実施されるか、その結果として何社の企業が求人を展開すると同氏が予想しているかについては、ほとんど詳細が示されていなかった。
自由民主党の国防報道官ジェームズ・マククリアリー氏は、「国軍全体の能力を再構築するための専用資金を調達する」ために国防債の利用を求めた。
改革UKのダニー・クルーガー氏は、バーナムの発表を「英国の核開発計画の危機に何も対処しない」「焼き直しの支出計画」として一蹴した。
クルーガー氏は、「もし首相が英国の安全を守り、我が国軍が同盟国と肩を並べられるようにすることに本当に関心があるなら、支出を大幅に増やし、調達と原子力事業の両方を全面的に見直すことを約束するだろう」と述べた。
緑の党ウェストミンスター党首エリー・チャウンズは、「決して使用してはならない武器」に数十億ポンドを費やす決定に疑問を呈した。
「閣僚は、雇用を創出する最善の方法は、増え続ける金額を核兵器計画に注ぎ込むことであるかのように振る舞うべきではない」と彼女は述べた。
Politics Essential ニュースレターに登録して、トップの政治分析を読み、英国全土からの洞察を得て、重要な瞬間を常に把握してください。平日は毎日あなたの受信箱に直接配信されます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crl70x0nxr9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-30T02:36:53+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c653/live/f6fd7a60-8b8e-11f1-9432-3dcf466331f0.png",
    readTime: 5,
  },
  {
    id: "u-s-strikes-iran-after-surprise-missile-1ab19590",
    title: "U.S. strikes Iran after surprise missile attack, dashing hopes of de-escalation",
    titleJa: "米国、イランを奇襲ミサイル攻撃で攻撃、緊張緩和の期待打ち砕かれる",
    summaryJa: "米軍は午後8時にイランに対する攻撃を開始した。水曜日、アメリカ政府は地域の米軍に対するイランのミサイル攻撃に報復し、一時停止した後に紛争が激化する懸念を高めている。米中央軍はこの作戦を、火曜日の「中東に拠点を置く米軍に対するイランによる攻撃未遂」に対する「強力な対応」であると説明した。",
    bodyOriginal: `The U.S. forces began launching strikes against Iran at 8 p.m. Wednesday stateside, retaliating against Iranian missile attacks on American forces in the region, raising the specter of escalating conflict after a brief pause.
U.S. Central Command described the operation as a "powerful response" to Tuesday's "attempted Iranian attacks on U.S. forces based in the Middle East.
The fresh strikes come after the Islamic Revolutionary Guard Corps targeted American forces in the Gulf region with multiple ballistic missiles late Tuesday stateside, although all of them were intercepted. Jordan's armed forces said the country's air defenses intercepted five missiles launched from Iran.
Tuesday's surprise attack broke the pattern of Iran responding to American strikes, signaling Tehran's willingness to restart hostilities, said Seth Krummrich, vice president at security firm Global Guardian and a retired US Army colonel.
The move suggests Iran intends to "respond more aggressively to future U.S. military action and may be moving away from diplomacy," Krummrich said. Critical civilian infrastructure, including airports, power grids, desalination plants and Gulf energy facilities, could be targeted once again, he said.
The resumption of strikes marks the latest turn in a conflict that has whipsawed oil markets and disrupted shipping through the Strait of Hormuz since fighting erupted in late February. The U.S. had halted two weeks of fire against Iranian targets last weekend, as diplomats sought to give peace talks "some space."
Trump telegraphed the retaliation hours earlier, warning to order heavy strikes on Iran. "We'll be hitting them hard. They're going to get a beating," Trump told a Fox News reporter early Wednesday.
Trump's rhetoric sent Brent crude futures 7.9% higher to close at $90.74 a barrel on Wednesday, while U.S. West Texas Intermediate futures advanced 6.6% to settle at $84.46. Oil was slightly lower in Asian trade on Thursday.
Hostilities have widened across the region. U.S. and Saudi Arabia armed forces launched joint strikes Tuesday against Iran-allied militias in Iraq that had targeted oil facilities in Riyadh and Saudi Arabia's Eastern region. Yemen's Houthis had claimed attacks on Saudi pipeline infrastructure feeding the Red Sea export terminal at Yanbu.
The barrage came as Israeli Prime Minister Benjamin Netanyahu met Trump at the White House for a "productive" 90-minute meeting on the Iran war.
Trump on Wednesday also demanded lawmakers amend a Russia sanctions bill to give him authority to tariff Iran. "I'd like them to add Iran as tariffs, not just as sanctions," he told reporters in the Oval Office, according to The Hill. U.S. goods trade with Iran was a minuscule $60.0 million in 2025.
'Cold water' on swift de-escalation
The escalating tensions are throwing "cold water on the idea of a swift de-escalation in the Persian Gulf" and dimming hopes of restarting negotiations, said Warren Patterson, head of commodities strategy at ING Bank.
The targeting of Saudi oil infrastructure is raising the risk of prolonged supply disruptions, Patterson said, citing reports that the kingdom's 400,000-barrel-a-day Jazan refinery had been shut following Houthi attacks over the weekend.
Tanker traffic through the Strait of Hormuz has effectively halted. Iran rejected Oman's proposal to evenly divide control of shipping through the critical artery, demanding an arrangement that gives it total oversight of inbound traffic and partial oversight over outbound lanes.
Oil cartel OPEC+ is expected to announce a supply increase of 188,000 barrels per day for September at its Aug. 2 meeting, completing the unwinding of 1.65 million barrels a day of voluntary cuts, Patterson said. Once disruptions fade, the added supply reinforces the view of a well-supplied market through 2027.`,
    bodyJa: `米軍は午後8時にイランに対する攻撃を開始した。水曜日、アメリカ政府は地域の米軍に対するイランのミサイル攻撃に報復し、一時停止した後に紛争が激化する懸念を高めている。
米中央軍はこの作戦を、火曜日の「中東に拠点を置く米軍に対するイランによる攻撃未遂」に対する「強力な対応」であると説明した。
新たな攻撃は、イスラム革命防衛隊が火曜日遅く、アメリカ本土で複数の弾道ミサイルで湾岸地域の米軍を標的にしたものの、すべて迎撃された後に行われた。ヨルダン国軍は、同国の防空部隊がイランから発射されたミサイル５発を迎撃したと発表した。
セキュリティ会社グローバル・ガーディアンの副社長で退役米陸軍大佐のセス・クルムリッチ氏は、火曜日の奇襲攻撃は米国の攻撃にイランが反応するパターンを打ち破り、イランが敵対行為を再開する意欲を示していると述べた。
この動きは、イランが「将来の米国の軍事行動により積極的に対応し、外交から遠ざかろうとしている可能性がある」ことを示唆しているとクルムリッチ氏は語った。空港、送電網、海水淡水化プラント、湾岸エネルギー施設などの重要な民間インフラが再び標的となる可能性があると同氏は述べた。
ストライキの再開は、2月下旬に戦闘が勃発して以来、石油市場を混乱させ、ホルムズ海峡を通過する輸送を混乱させてきた紛争の最新の展開を示すものである。外交官らが和平交渉に「ある程度の余地」を与えようとする中、米国は先週末、イラン目標に対する２週間にわたる砲撃を停止した。
トランプ大統領は数時間前に報復電報を打ち、イランへの激しい攻撃を命じると警告した。 「我々は彼らを厳しく攻撃するつもりだ。彼らは殴られるだろう」とトランプ大統領は水曜早朝、FOXニュース記者に語った。
トランプ大統領の発言を受けて水曜日のブレント原油先物は7.9％上昇して1バレル＝90.74ドルで取引を終え、米国のウェスト・テキサス・インターミディエイト先物は6.6％上昇して84.46ドルで取引を終えた。木曜日のアジア貿易では原油が若干下落した。
敵対行為は地域全体に拡大した。米国とサウジアラビアの軍隊は火曜日、リヤドとサウジアラビア東部地域の石油施設を標的としたイラクのイラン同盟民兵組織に対して共同攻撃を開始した。イエメンのフーシ派は、ヤンブーの紅海輸出ターミナルに供給するサウジのパイプラインインフラに対する攻撃を主張していた。
集中砲火は、イスラエルのベンヤミン・ネタニヤフ首相がホワイトハウスでトランプ大統領と会談し、イラン戦争に関する「生産的な」90分間の会談を行った際に起きた。
トランプ大統領は水曜日にも、イランに関税を課す権限を与えるためにロシア制裁法案を修正するよう議員らに要求した。ザ・ヒル紙によると、同氏は大統領執務室で記者団に対し、「イランを単なる制裁ではなく、関税の対象に加えてほしい」と語った。米国のイランとの物品貿易は、2025年には6000万ドルと微々たるものだった。
迅速な緊張緩和に「冷や水」
ＩＮＧ銀行の一商品戦略責任者ウォーレン・パターソン氏は、緊張の高まりは「ペルシャ湾の迅速な緊張緩和という考えに冷や水」を投げかけており、交渉再開の期待が薄れていると述べた。
パターソン氏は、週末のフーシ派の攻撃を受けてサウジの日量40万バレルのジャザン製油所が閉鎖されたとの報道を引用し、サウジの石油インフラが標的となったことで長期にわたる供給途絶のリスクが高まっていると述べた。
ホルムズ海峡を通るタンカーの往来は事実上停止した。イランは、重要な幹線道路を通る船舶の管理を均等に分割するというオマーンの提案を拒否し、イランに流入交通を完全に監視し、流出車線を部分的に監視する取り決めを要求した。
パターソン氏によると、石油カルテルのＯＰＥＣプラスは８月２日の会合で９月の日量１８万８０００バレルの供給増加を発表し、日量１６５万バレルの自主減産の巻き戻しが完了する見通しだという。混乱が収まれば、供給が追加され、2027 年まで市場は供給が充実するとの見方が強化されます。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/30/us-iran-war-hormuz-centcom-trump-.html",
    publishedAt: "2026-07-30T02:29:33+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "analysis-fed-chairman-warsh-s-credibilit-6bf10448",
    title: "Analysis: Fed Chairman Warsh's credibility in question after leaving interest rates unchanged",
    titleJa: "分析：金利据え置きでウォーシュFRB議長の信頼性が疑問視される",
    summaryJa: "他のすべての美徳よりも信頼性を重視するFRB議長にとって、水曜日のケビン・ウォーシュ氏の発言に対する市場の反応は痛ましいものだったに違いない。ウォーシュ氏は水曜午後、金利据え置きを９対３で可決した連邦公開市場委員会の後に記者会見を主催した。ウォーシュ氏が5月22日にFRB議長に就任して以来、このような会合は2回目であった。投資家らはFRBが次回会合で利上げする可能性を大幅に引き下げることで反応したが、同時に長期国債利回りも上昇させた。",
    bodyOriginal: `For a Federal Reserve chairman who prizes credibility above all other virtues, the market's reaction to Kevin Warsh's remarks Wednesday must have been painful.
Warsh hosted a press conference Wednesday afternoon following a meeting of the Federal Open Market Committee, which voted 9-3 to leave interest rates unchanged. It was just the second such meeting since Warsh became head of the Fed on May 22. Investors responded by sharply lowering the chances that the Fed will raise interest rates at its next meeting but also raised the yields on long-term government debt.
After the press conference, the yield on the 30-year Treasury hit its highest level since 2007, while the yield on the 2-year Treasury fell. The chances that the Fed would leave interest rates unchanged at its next meeting jumped by 20 percentage points to 45%, according to CME FedWatch.
That dynamic suggests investors believe the Fed won't act immediately on inflation readings that by Warsh's account have been above the Fed's 2% target for at least 63 months, and that it may have to act on more aggressively later as the economy heats up for the long haul.
Before taking the job, Warsh sharply criticized his predecessor Jerome Powell when long-term Treasury interest rates moved up after the Fed cut the federal funds rate and said repeatedly that the underlying problem was Powell's lack of credibility. The situation Wednesday was slightly different, in that the Fed didn't cut interest rates but held them steady. Warsh also suggested Wednesday that recent rises in long-term interest rates may have reflected positive economic news, such as strong business investment.
Still, few in the markets saw it that way.
Warsh needed to articulate what it would take for him to want to eventually raise interest rates in the face of stubborn inflation, Jon Hilsenrath, a longtime Fed watcher, wrote in a note to clients after Warsh's press conference.
"Warsh didn't convey the message clearly or explicitly, and the bond market puked on him," Hilsenrath wrote.
Warsh declined to answer reporters' questions about the details of why he, along with eight others on the FOMC, deemed the interest rate was in the right place at 3.5-3.75%, where it has been for months. Warsh has shifted Fed policy by ending a practice known as forward guidance. Past Fed chairs would strongly signal where they expected interest rates to go in the future. Warsh believes forward guidance made the Fed inflexible and obscured signals from the markets. As a result, he doesn't talk much about how he makes decisions.
"I understand the desire for rolling forecasts and commentary from this committee, but for our part, we need to observe market reaction to developments, direct and unfiltered," Warsh said in his opening remarks Wednesday.
The press conference that followed left some economists baffled.
"I thought today's press conference was confusing and often internally contradictory," Eric Winograd, chief U.S. economist for AllianceBernstein, wrote to clients.
Consumer-price-index data showed prices declining by 0.4% in June, offering an opportunity for the chairman to seize on some positive economic data. But Warsh said that factor was "not much" of a consideration for him, while affirming inflation was still "elevated."
The Fed is officially committed to achieving 2% annual inflation over the long run in an alternative measure of inflation, the personal consumption expenditures index. Warsh wasn't much clearer on whether he was happy with that data either, which was at 4.1% in its most recent reading, and added that one of the five task forces he has appointed to review reforms at the Fed might want to downplay PCE as the central bank's official target when it issues its report at the end of the year.
We are sticking with PCE for now, Warsh said. But, "who knows, come after next January, what we might say about strategy."
Warsh's unwillingness to say exactly what might move him to raise interest rates, combined with his suggestion that he wasn't committed to the Fed's reliance on PCE, had some in the markets re-evaluating his brief tenure.
"Both of these points raise questions about the new chair's credibility in delivering lower inflation," wrote Michael Feroli, chief U.S. economist at JPMorgan Chase.
The Fed chairman doesn't set interest rates alone. He is one of a dozen votes on the FOMC. Three voters dissented from Wednesday's decision to keep interest rates steady. If economic data doesn't improve rapidly in the next few months, more may join them.
"We believe this will add some urgency for the rest of the committee to act on its mandate," Feroli wrote. A Fed chair has never been in the minority on a vote about interest rates.
That leaves Warsh in a difficult place, with his credibility potentially eroded in the face of the markets and within the Fed itself just months into the job.`,
    bodyJa: `他のすべての美徳よりも信頼性を重視するFRB議長にとって、水曜日のケビン・ウォーシュ氏の発言に対する市場の反応は痛ましいものだったに違いない。
ウォーシュ氏は水曜午後、金利据え置きを９対３で可決した連邦公開市場委員会の後に記者会見を主催した。ウォーシュ氏が5月22日にFRB議長に就任して以来、このような会合は2回目であった。投資家らはFRBが次回会合で利上げする可能性を大幅に引き下げることで反応したが、同時に長期国債利回りも上昇させた。
記者会見後、３０年国債利回りは２００７年以来の高水準となった一方、２年国債利回りは低下した。 ＣＭＥフェドウォッチによると、ＦＲＢが次回会合で金利を据え置く確率は２０％ポイント上昇し４５％となった。
この動きは、ウォーシュ氏の説明によると、少なくとも63カ月にわたってFRBの目標である2％を上回っているインフレ率の測定値にFRBが直ちに行動を起こすことはなく、経済が長期的に加熱するにつれ、FRBは今後より積極的に行動する必要があるかもしれないと投資家が信じていることを示唆している。
ウォーシュ氏は就任前、FRBのフェデラル・ファンド金利引き下げ後に長期国債金利が上昇した際に前任者のジェローム・パウエル氏を厳しく批判し、根本的な問題はパウエル氏の信頼性の欠如にあると繰り返し述べた。水曜日の状況は若干異なり、FRBは金利を引き下げず、金利を据え置いた。ウォーシュ氏はまた、水曜日、最近の長期金利の上昇は好調な企業投資などの明るい経済ニュースを反映している可能性があると示唆した。
それでも、市場ではそのように考えている人はほとんどいませんでした。
長年FRBウォッチャーであるジョン・ヒルゼンラス氏はウォーシュ氏の記者会見後、顧客向けメモで、頑固なインフレに直面してウォーシュ氏が最終的に利上げを望むには何が必要かを明確にする必要があると書いた。
「ウォーシュ氏は明確にも明示的にもメッセージを伝えなかったので、債券市場は彼を非難した」とヒルゼンラート氏は書いた。
ウォーシュ総裁は、FOMCの他の8人とともに、金利が数カ月間維持されている3.5〜3.75％が適切な位置にあると判断した理由の詳細について記者団の質問に答えることを拒否した。ウォーシュ氏はフォワードガイダンスとして知られる慣行をやめ、FRBの政策を転換した。歴代のFRB議長は、金利が将来どこに向かうかを強く示唆するだろう。ウォーシュ氏は、フォワードガイダンスによってFRBは柔軟性がなくなり、市場からのシグナルが曖昧になったと考えている。そのため、彼は自分がどのように意思決定を行っているかについてあまり語らない。
ウォーシュ氏は水曜日の冒頭の挨拶で、「当委員会からの随時の予測やコメントを求める気持ちは理解しているが、我々としては、展開に対する市場の反応を直接的かつフィルターなしに観察する必要がある」と述べた。
その後の記者会見では、一部のエコノミストは当惑した。
アライアンス・バーンスタインの首席米国エコノミスト、エリック・ウィノグラード氏は顧客に宛てた書簡で、「今日の記者会見は混乱を招き、内部的に矛盾することが多かった」と述べた。
6月の消費者物価指数データでは物価が0.4％下落しており、議長が何らかの前向きな経済指標を掴む機会となった。しかしウォーシュ氏は、インフレ率が依然として「上昇している」と断言しながらも、その要因は自身にとって「あまり」考慮すべき事項ではないと述べた。
FRBは、インフレの代替指標である個人消費支出指数において、長期的に年間2％のインフレを達成することを公式に約束している。ウォーシュ総裁は、直近の測定値では4.1％だったこのデータに満足しているかどうかについてもあまり明確ではなく、FRBの改革を検討するために同氏が任命した5つのタスクフォースのうちの1つが、年末に報告書を発表する際に中央銀行の公式目標としてPCEを軽視したい可能性があると付け加えた。
ウォーシュ氏は、「我々は今のところPCEに固執する」と述べた。しかし、「来年1月以降、戦略について何を言えるかは誰にも分からない」。
ウォーシュ氏が何が利上げに駆り立てるのか正確には語ろうとしなかったことと、FRBのPCEへの依存にコミットしていないと示唆したことと相まって、市場には同氏の短い任期を再評価する向きもあった。
ＪＰモルガン・チェースの首席米国エコノミスト、マイケル・フェロリ氏は「これらの点はいずれも、インフレ率低下を実現する新議長の信頼性に疑問を投げかけている」と述べた。
FRB議長が単独で金利を設定するわけではない。同氏はFOMCの十数票のうちの1人だ。水曜日の金利据え置き決定には有権者３人が反対した。今後数カ月以内に経済指標が急速に改善しなければ、さらに多くの指標が加わる可能性がある。
「これにより、委員会の残りのメンバーがその使命に基づいて行動するための緊急性がさらに高まると考えています」とフェローリ氏は書いた。 FRB議長が金利に関する投票で少数派になったことは一度もない。
このためウォーシュ氏は難しい立場に置かれており、就任からわずか数カ月で市場やFRB内部での信頼が失墜する可能性がある。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/kevin-warsh-fed-treasury-yields-inflation-credibility-interest-rates.html",
    publishedAt: "2026-07-30T01:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "zuckerberg-lays-out-meta-s-ai-capacity-d-215eea45",
    title: "Zuckerberg lays out Meta's AI capacity dilemma: What to sell vs. what to keep",
    titleJa: "ザッカーバーグ氏、メタの AI 能力のジレンマを説明: 何を売るか、何を維持するか",
    summaryJa: "メタ社が大規模なAIデータセンターを建設するために土地を食い荒らしている中、CEOのマーク・ザッカーバーグ氏は、余剰容量を売却するか維持するかを決定する際にはバランスを取る必要があると語る。米国の大手ハイパースケーラー4社の中で、資本支出が同業他社に匹敵するにもかかわらず、メタ社はクラウドインフラストラクチャとサービスを販売する事業を持たない唯一の企業である。しかしここ数カ月、ザッカーバーグ氏はリソースに制約のある市場で自社のキャパシティ在庫を活用する方法として、クラウド事業を立ち上げる可能性を示唆してきた。",
    bodyOriginal: `As Meta gobbles up land to construct massive AI data centers, CEO Mark Zuckerberg says there's a balancing act when it comes to deciding whether to sell excess capacity or to preserve it.
Among the four major U.S. hyperscalers, Meta is the only one that doesn't have a business selling cloud infrastructure and services even though its capital expenditures rival that of its peers. But in recent months, Zuckerberg has been floating the possibility of launching a cloud business as a way to take advantage of its capacity stockpile in a resource-constrained market.
As CNBC reported earlier this month, Anthropic is in preliminary talks to lease computing power from Meta.
"We're getting a lot of offers for compute at a significant premium over what we paid for it," Zuckerberg said on the company's second-quarter earnings call after the bell on Wednesday. "And we have more coding and productivity tools on our roadmap as well."
Zuckerberg's comments came after Meta issued a weaker-than-expected revenue forecast for the third quarter and said free cash flow dwindled by 90% from a year earlier due to soaring capex. The stock sank more than 7% in after-hours trading, extending a slump that's pushed it down 11% for the year as of Wednesday's close.
In the report, Meta bumped up the low end of its 2026 capital expenditure guidance by $5 billion, bringing the range to between $130 billion and $145 billion. Last week, Alphabet hiked the top end of its guidance to $205 billion and turned cash flow negative for the first time. And Microsoft said in its earnings report on Wednesday that capex for the year will be roughly $175 billion. Amazon reports results on Thursday.
Investors have been seeking details on Zuckerberg's AI strategy, which has been scattershot and left Meta behind OpenAI, Anthropic and Google in the market for top models and services.
"I think everyone wants clarity into what he wants to do in the compute business," Brent Thill, an analyst at Jefferies, told CNBC's "Closing Bell Overtime."
Considering the trade-off
Zuckerberg offered little by way of specifics on his plans, but he spelled out some of the various considerations at play.
"In terms of running the business, obviously, a common trade-off that we need to make is around how much do you monetize something today versus develop future assets," Zuckerberg said. "I think that it's always a portfolio."
He said that in looking at a potential enterprise business, it's not just about selling capacity. The company also has API and productivity services it can offer as well as AI agents that it's building, Zuckerberg said.
"And I think that there's just a very, very large opportunity there," he said.
However, Meta needs ample compute capacity to satisfy its own AI ambitions, especially as the company begins aggressively rolling out new models under the leadership of AI chief Alexandr Wang. Earlier this month, Meta debuted the Muse Spark 1.1 model, which Wang said represents the "strongest model for agentic and coding work yet" and at a cheaper price than offerings from OpenAI and Anthropic.
"It would be foolish to basically just sell all of the compute and take a short-term profit," Zuckerberg said.
Zuckerberg acknowledged that jumping into the enterprise, where Meta has historically struggled, will require some hard work, and that the company has to learn how to do it. While he didn't reference hiring a sales force, it will be an essential move if Meta is serious about selling to businesses big and small.
"That's going to be somewhat a new muscle that we build as a company," Zuckerberg said. "But I think it's a very important one that we build."
Dave Brown, a former longtime senior executive at Amazon Web Services, is set to join the company, CNBC recently confirmed.
A big challenge for Zuckerberg as he tries to sell Wall Street on his vision is his spotty track record. Zuckerberg's most notable whiff was the metaverse, and his effort starting in 2021 to reshape the company around a futuristic digital world.
That project is still costing Meta billions of dollars a quarter. Meta's Reality Labs, which develops virtual reality devices and wearables, lost $4.62 billion in the latest period on just $431 million of revenue.
Still, Meta is desperate to diversify its business beyond digital ads, which still account for 98% of the company's revenue, and to show that it can be an influential player in AI.
Zuckerberg is all-in.
"I get that this is sort of a big bet across the industry," Zuckerberg said. "My personal bet is that the people who invest in this are going to be rewarded and feel very good over time."
WATCH: Jefferies' Brent Thill: Meta report was 'trifecta' of things that could go wrong.`,
    bodyJa: `メタ社が大規模なAIデータセンターを建設するために土地を食い荒らしている中、CEOのマーク・ザッカーバーグ氏は、余剰容量を売却するか維持するかを決定する際にはバランスを取る必要があると語る。
米国の大手ハイパースケーラー4社の中で、資本支出が同業他社に匹敵するにもかかわらず、メタ社はクラウドインフラストラクチャとサービスを販売する事業を持たない唯一の企業である。しかしここ数カ月、ザッカーバーグ氏はリソースに制約のある市場で自社のキャパシティ在庫を活用する方法として、クラウド事業を立ち上げる可能性を示唆してきた。
CNBC が今月初めに報じたように、Anthropic は Meta からコンピューティング能力をリースするための予備交渉を行っている。
ザッカーバーグ氏は水曜日の鐘後の同社第2四半期決算会見で、「われわれは支払った金額より大幅な割増料金でコンピューティングのオファーを数多く受けている」と語った。 「そして、私たちのロードマップには、さらに多くのコーディングツールと生産性ツールも含まれています。」
ザッカーバーグ氏のコメントは、メタ社が第3四半期の予想を下回る収益予測を発表し、設備投資の高騰によりフリーキャッシュフローが前年同期比で90％減少したと述べた後に発表された。株価は時間外取引で７％以上下落し、水曜終値時点で年初から１１％下落する低迷が続いた。
メタ社は報告書の中で、2026年の設備投資見通しの下限を50億ドル引き上げ、範囲を1,300億ドルから1,450億ドルとした。アルファベットは先週、ガイダンスの上限を2050億ドルに引き上げ、初めてキャッシュフローがマイナスに転じた。そしてマイクロソフトは水曜日の決算報告で、今年の設備投資は約1750億ドルになると述べた。アマゾンは木曜日に結果を報告する。
投資家はザッカーバーグ氏のAI戦略の詳細を求めているが、この戦略は散見され、トップモデルやサービスの市場でメタ社がOpenAI、Anthropic、Googleの後塵を拝している。
ジェフリーズのアナリスト、ブレント・ティル氏はCNBCの番組「クロージング・ベル・オーバータイム」で、「誰もがコンピューティング・ビジネスで何をしたいのかを明確にしたいと考えていると思う」と語った。
トレードオフを考えると
ザッカーバーグ氏は自身の計画について具体的なことはほとんど述べなかったが、検討中のさまざまな考慮事項のいくつかを詳しく説明した。
ザッカーバーグ氏は、「ビジネスを運営する上で、当然のことながら、我々が行う必要がある共通のトレードオフは、今日何かを収益化するのと、将来の資産の開発をどの程度行うかということだ」と述べた。 「それは常にポートフォリオだと思います。」
同氏は、エンタープライズビジネスの可能性を検討する際に重要なのは、容量を販売することだけではないと述べた。ザッカーバーグ氏によると、同社には提供できるAPIや生産性サービスのほか、構築中のAIエージェントもあるという。
「そして、そこには非常に大きなチャンスがあると思います」と彼は語った。
しかし、Meta は、特に AI 責任者 Alexandr Wang のリーダーシップの下で新しいモデルを積極的に展開し始めているため、自社の AI への野心を満たすためには十分なコンピューティング能力を必要としています。今月初め、Meta は Muse Spark 1.1 モデルをデビューさせました。Wang 氏によれば、これは「エージェントおよびコーディング作業にとってこれまでで最も強力なモデル」であり、OpenAI や Anthropic の製品よりも安価です。
ザッカーバーグ氏は、「基本的にすべてのコンピューティングを売却して短期的な利益を得ることは愚かだろう」と述べた。
ザッカーバーグ氏は、メタ社が歴史的に苦戦してきたこの企業に飛び込むにはそれなりの努力が必要であり、同社はその方法を学ばなければならないことを認めた。同氏は営業部隊の雇用には言及しなかったが、メタが大小の企業への販売を真剣に考えているのであれば、それは不可欠な措置となるだろう。
「これは、私たちが会社として構築する新たな力となるでしょう」とザッカーバーグ氏は語った。 「しかし、それは私たちが構築する非常に重要なものだと思います。」
アマゾン ウェブ サービスで長年上級幹部を務めたデイブ ブラウン氏が同社に入社する予定であると、CNBC が最近認めた。
自分のビジョンをウォール街に売り込もうとするザッカーバーグにとって大きな課題は、むらのある実績だ。ザッカーバーグ氏の最も注目に値する空想はメタバースであり、2021年から未来のデジタル世界を中心に会社を再構築するという彼の取り組みであった。
このプロジェクトには依然として四半期に数十億ドルの費用がかかっています。仮想現実デバイスやウェアラブル機器を開発するメタズ・リアリティ・ラボは、直近期で46億2000万ドルの損失を出し、売上高はわずか4億3100万ドルだった。
それでもメタ社は、依然として同社収益の98％を占めるデジタル広告以外にも事業を多角化し、AI分野で影響力のあるプレーヤーになれることを証明しようと躍起になっている。
ザッカーバーグ氏はオールインだ。
ザッカーバーグ氏は「これは業界全体にとって一種の大きな賭けであると理解している」と述べた。 「私の個人的な賭けは、これに投資した人々はやがて報われ、とても良い気分になるだろうということです。」
注目: ジェフリーズのブレント・ティル氏: メタレポートには、うまくいかない可能性のある事柄が「3 つ」含まれていました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/zuckerberg-metas-ai-capacity-dilemma-what-to-sell-vs-what-to-keep.html",
    publishedAt: "2026-07-30T00:58:44+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "we-re-raising-our-price-target-on-starbu-0b25bd0e",
    title: "We're raising our price target on Starbucks after a home-run quarter",
    titleJa: "ホームラン四半期を経て、スターバックスの目標株価を引き上げます",
    summaryJa: "Starbucks knocked it out of the park Wednesday night, turning in strong quarterly results and lifting its full-year guidance for several key metrics. Nearly two years into his tenure, CEO Brian Niccol has clearly revitalized the coffee chain, and he's not done yet. Revenue in the fiscal 2026 third quarter totaled $9.32 billion, topping the $9.16 billion consensus estimate, according to LSEG. Adjusted earnings per share (EPS) in the April-to-June period came in at 85 cents, beating the 66-cent co",
    bodyOriginal: `Starbucks knocked it out of the park Wednesday night, turning in strong quarterly results and lifting its full-year guidance for several key metrics. Nearly two years into his tenure, CEO Brian Niccol has clearly revitalized the coffee chain, and he's not done yet. Revenue in the fiscal 2026 third quarter totaled $9.32 billion, topping the $9.16 billion consensus estimate, according to LSEG. Adjusted earnings per share (EPS) in the April-to-June period came in at 85 cents, beating the 66-cent consensus, LSEG data showed. Comparable store sales across the globe were up 7.9% from a year ago, topping estimates of 5.7% growth, according to FactSet. This restaurant-industry metric, which measures the performance of company-operated stores open for at least 13 months, is closely watched by investors. Shares rose more than 5% in extended trading Wednesday, trading near $110 apiece. If the gains hold into Thursday's regular trading session, the stock may set a fresh 52-week high (currently $109.23 on July 17). Starbucks has been a quietly strong performer in 2026, closing Wednesday up 23.7% for the year — easily outperforming the S & P 500 's 6.9% advance. The stock has also trounced the S & P 500 consumer discretionary sector index , which is down 6.5% year to date. The group has been weighed down, in part, by concerns about the health of the consumer in the face of Iran war-driven inflation. Starbucks isn't immune to those concerns, which is reflected in the stock's more muted performance in recent months. But it's held in better than the sector during that time. We took profits in Starbucks on Friday to ensure we didn't let this outperformance go to waste, just in case the earnings report showed any cracks in the consumer; plus, we redeployed that cash into a more beaten-up name ( FedEx Freight ). It turned out that Starbucks still managed to beat elevated expectations and offered reassuring commentary about its ability to keep customers coming into its stores and drive-thrus. While it may seem like we left money on the table by trimming ahead of the quarter, we're always aware of this possibility. That's OK. Nobody ever got hurt taking a profit. Consider that our discipline to pare back our Procter & Gamble position on Tuesday afternoon proved to be prudent when the Tide maker's earnings came out earlier Wednesday, sending shares lower (and ultimately motivating our exit of P & G ). SBUX YTD mountain Starbucks' year-to-date stock performance. Bottom line Niccol is delivering at Starbucks, just like he said he would. When Niccol set out to fix Starbucks in the fall of 2024, the accomplished former Chipotle boss gave his turnaround agenda a straightforward name: Back to Starbucks. Niccol's plan involved hiring more workers to cut down on long wait times, which in some cases had gotten so bad people abandoned their orders altogether . He also pledged to spend heavily to make the coffee shops more inviting places to be. These efforts have been showing progress, including an impressive showing in the January-to-March quarter, when comparable store sales, or comps, rose a better-than-expected 6.2% and adjusted operating margins improved on an annual basis. The results reported Wednesday night are arguably even more impressive than the prior quarter, especially considering the elevated gas prices that squeezed household budgets during the three months ended in June. In case there was any lingering doubt, Starbucks is back to being, well, Starbucks. Fiscal third-quarter comps were up 7.9% globally and 8.1% in North America (the U.S. and Canada), which has been the focus of Niccol's turnaround thus far. In the all-important U.S. market, specifically, comps rose 7.9%, driven by both more customer transactions and higher bills, known as "ticket" size. Why we own it Starbucks has one of the most recognizable brands of any restaurant, but experienced mismanagement coming out of the pandemic. It wisely brought in turnaround specialist Brian Niccol in 2024 to improve service and reaccelerate growth. Improving profitability is increasingly important at this stage of his tenure. Competitors: Dunkin, Dutch Bros , McDonald's , local coffee shops Most recent buy: Nov. 3, 2025 Weighting in our portfolio: 2.45% Additionally, Niccol said sales growth was balanced across generations, income groups, and rewards program members and non-members. This is encouraging, showing that all different types of customers are appreciating and responding to Niccol's changes. While Niccol said Starbucks has seen the strongest transaction growth in the morning, the company is also seeing momentum into the afternoons and continues to see an opportunity to strengthen the performance. This matters because ringing up more sales outside the morning coffee rush can help keep Starbucks' comps growing at satisfactory clips as year-over-year comparisons get tougher. "If you look at where the business was, there's still lots of space to add more transactions both in the morning and in the afternoon. We've made tremendous progress on both day parts, but there's still a lot of room for growth," Niccol said. The introduction of Energy Refreshers is helping in the afternoons, CFO Cathy Smith said. Starbucks is also testing new food options for the afternoons, such as wraps, that could bring more people in the door, according to Smith. Already, the company is seeing more customers purchase a food item with their drink, with Smith saying "food attach" at company-operated stores in the U.S. reached a third-quarter record. She said the strongest gains are in the afternoon. Niccol's Back to Starbucks investments aren't cheap, and investors have started to pay closer attention to the bottom line as the honeymoon wears off. One of the top bear cases against Starbucks has been that Niccol's approach to running the stores is too expensive and won't deliver the kind of earnings growth that warrants owning the stock. Starbucks delivered strong profits in the third quarter, as the chart below shows. The company's adjusted operating margin beat expectations, and so did the North America segment. We're pleased to see margins continuing to improve because Niccol said he would boost comps and then turn to margin expansion. Now, some of the profit gains were driven by tariff refunds that Starbucks collected from the U.S. government during the quarter. This could be one reason why Starbucks' shares came off their highs of the after-hours session after the conference call concluded. While that's understandable, the most important thing is that Smith said both companywide and North America operating margins expanded on a year-over-year basis when excluding the impact of tariffs. "We expect the same fundamental drivers that supported margin expansion in Q3 to continue in Q4," Smith said, pointing to cost-saving initiatives, disciplined execution, and the benefit of top-line growth to get more out of fixed costs such as rent and insurance, known as "sales leverage." This is a good sign that Starbucks is progressing toward its goal of a 13.5% to 15% operating margin by 2028, which was laid out at Niccol's first investor day earlier this year. One thing to keep in mind is that this was the first quarter since Starbucks moved its China operations into a joint venture with a Chinese private-equity firm. This is why the company's total revenue in the quarter showed a slight year-over-year decline. With analysts still getting a feel for how this will change Starbucks' reported results, it could be a factor behind the small revenue miss for the international segment. That's the only red to be found, and we're not sweating it. We continue to believe that an asset-light joint venture is the best approach for the Chinese market, given intense local competition and stark differences in consumer preferences versus its home market. During the third quarter, Starbucks wisely used some of the proceeds in the transaction to pay down $1.3 billion worth of debt — another reason to like the JV decision. We're reiterating our hold-equivalent 2 rating, but increasing our price target to $120 a share as Wall Street's earnings-per-share estimates move higher. Guidance With a few months remaining in its fiscal 2026, Starbucks boosted its full-year guidance across multiple important metrics. Here's where they stand now: Consolidated net revenues "flat to slight" growth year over year, up from "roughly flat" previously. Adjusted EPS in the range of $2.55 to $2.65, an increase from the prior range of $2.25 to $2.45. Global comps growth nearing 6%, compared with 5% or greater previously. U.S. comps growth slightly greater than 6%, up from the prior target of 5% or greater. The company continues to expect 600 to 650 net new coffeehouses globally, including both company-operated and licensed locations. For the ongoing fourth quarter, Starbucks said U.S. comps growth will be at least 6.5%. (Jim Cramer's Charitable Trust is long SBUX. See here for a full list of the stocks.) As a subscriber to the CNBC Investing Club with Jim Cramer, you will receive a trade alert before Jim makes a trade. Jim waits 45 minutes after sending a trade alert before buying or selling a stock in his charitable trust's portfolio. If Jim has talked about a stock on CNBC TV, he waits 72 hours after issuing the trade alert before executing the trade. THE ABOVE INVESTING CLUB INFORMATION IS SUBJECT TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY , TOGETHER WITH OUR DISCLAIMER . NO FIDUCIARY OBLIGATION OR DUTY EXISTS, OR IS CREATED, BY VIRTUE OF YOUR RECEIPT OF ANY INFORMATION PROVIDED IN CONNECTION WITH THE INVESTING CLUB. NO SPECIFIC OUTCOME OR PROFIT IS GUARANTEED.`,
    bodyJa: `Starbucks knocked it out of the park Wednesday night, turning in strong quarterly results and lifting its full-year guidance for several key metrics. Nearly two years into his tenure, CEO Brian Niccol has clearly revitalized the coffee chain, and he's not done yet. Revenue in the fiscal 2026 third quarter totaled $9.32 billion, topping the $9.16 billion consensus estimate, according to LSEG. Adjusted earnings per share (EPS) in the April-to-June period came in at 85 cents, beating the 66-cent consensus, LSEG data showed. Comparable store sales across the globe were up 7.9% from a year ago, topping estimates of 5.7% growth, according to FactSet. This restaurant-industry metric, which measures the performance of company-operated stores open for at least 13 months, is closely watched by investors. Shares rose more than 5% in extended trading Wednesday, trading near $110 apiece. If the gains hold into Thursday's regular trading session, the stock may set a fresh 52-week high (currently $109.23 on July 17). Starbucks has been a quietly strong performer in 2026, closing Wednesday up 23.7% for the year — easily outperforming the S & P 500 's 6.9% advance. The stock has also trounced the S & P 500 consumer discretionary sector index , which is down 6.5% year to date. The group has been weighed down, in part, by concerns about the health of the consumer in the face of Iran war-driven inflation. Starbucks isn't immune to those concerns, which is reflected in the stock's more muted performance in recent months. But it's held in better than the sector during that time. We took profits in Starbucks on Friday to ensure we didn't let this outperformance go to waste, just in case the earnings report showed any cracks in the consumer; plus, we redeployed that cash into a more beaten-up name ( FedEx Freight ). It turned out that Starbucks still managed to beat elevated expectations and offered reassuring commentary about its ability to keep customers coming into its stores and drive-thrus. While it may seem like we left money on the table by trimming ahead of the quarter, we're always aware of this possibility. That's OK. Nobody ever got hurt taking a profit. Consider that our discipline to pare back our Procter & Gamble position on Tuesday afternoon proved to be prudent when the Tide maker's earnings came out earlier Wednesday, sending shares lower (and ultimately motivating our exit of P & G ). SBUX YTD mountain Starbucks' year-to-date stock performance. Bottom line Niccol is delivering at Starbucks, just like he said he would. When Niccol set out to fix Starbucks in the fall of 2024, the accomplished former Chipotle boss gave his turnaround agenda a straightforward name: Back to Starbucks. Niccol's plan involved hiring more workers to cut down on long wait times, which in some cases had gotten so bad people abandoned their orders altogether . He also pledged to spend heavily to make the coffee shops more inviting places to be. These efforts have been showing progress, including an impressive showing in the January-to-March quarter, when comparable store sales, or comps, rose a better-than-expected 6.2% and adjusted operating margins improved on an annual basis. The results reported Wednesday night are arguably even more impressive than the prior quarter, especially considering the elevated gas prices that squeezed household budgets during the three months ended in June. In case there was any lingering doubt, Starbucks is back to being, well, Starbucks. Fiscal third-quarter comps were up 7.9% globally and 8.1% in North America (the U.S. and Canada), which has been the focus of Niccol's turnaround thus far. In the all-important U.S. market, specifically, comps rose 7.9%, driven by both more customer transactions and higher bills, known as "ticket" size. Why we own it Starbucks has one of the most recognizable brands of any restaurant, but experienced mismanagement coming out of the pandemic. It wisely brought in turnaround specialist Brian Niccol in 2024 to improve service and reaccelerate growth. Improving profitability is increasingly important at this stage of his tenure. Competitors: Dunkin, Dutch Bros , McDonald's , local coffee shops Most recent buy: Nov. 3, 2025 Weighting in our portfolio: 2.45% Additionally, Niccol said sales growth was balanced across generations, income groups, and rewards program members and non-members. This is encouraging, showing that all different types of customers are appreciating and responding to Niccol's changes. While Niccol said Starbucks has seen the strongest transaction growth in the morning, the company is also seeing momentum into the afternoons and continues to see an opportunity to strengthen the performance. This matters because ringing up more sales outside the morning coffee rush can help keep Starbucks' comps growing at satisfactory clips as year-over-year comparisons get tougher. "If you look at where the business was, there's still lots of space to add more transactions both in the morning and in the afternoon. We've made tremendous progress on both day parts, but there's still a lot of room for growth," Niccol said. The introduction of Energy Refreshers is helping in the afternoons, CFO Cathy Smith said. Starbucks is also testing new food options for the afternoons, such as wraps, that could bring more people in the door, according to Smith. Already, the company is seeing more customers purchase a food item with their drink, with Smith saying "food attach" at company-operated stores in the U.S. reached a third-quarter record. She said the strongest gains are in the afternoon. Niccol's Back to Starbucks investments aren't cheap, and investors have started to pay closer attention to the bottom line as the honeymoon wears off. One of the top bear cases against Starbucks has been that Niccol's approach to running the stores is too expensive and won't deliver the kind of earnings growth that warrants owning the stock. Starbucks delivered strong profits in the third quarter, as the chart below shows. The company's adjusted operating margin beat expectations, and so did the North America segment. We're pleased to see margins continuing to improve because Niccol said he would boost comps and then turn to margin expansion. Now, some of the profit gains were driven by tariff refunds that Starbucks collected from the U.S. government during the quarter. This could be one reason why Starbucks' shares came off their highs of the after-hours session after the conference call concluded. While that's understandable, the most important thing is that Smith said both companywide and North America operating margins expanded on a year-over-year basis when excluding the impact of tariffs. "We expect the same fundamental drivers that supported margin expansion in Q3 to continue in Q4," Smith said, pointing to cost-saving initiatives, disciplined execution, and the benefit of top-line growth to get more out of fixed costs such as rent and insurance, known as "sales leverage." This is a good sign that Starbucks is progressing toward its goal of a 13.5% to 15% operating margin by 2028, which was laid out at Niccol's first investor day earlier this year. One thing to keep in mind is that this was the first quarter since Starbucks moved its China operations into a joint venture with a Chinese private-equity firm. This is why the company's total revenue in the quarter showed a slight year-over-year decline. With analysts still getting a feel for how this will change Starbucks' reported results, it could be a factor behind the small revenue miss for the international segment. That's the only red to be found, and we're not sweating it. We continue to believe that an asset-light joint venture is the best approach for the Chinese market, given intense local competition and stark differences in consumer preferences versus its home market. During the third quarter, Starbucks wisely used some of the proceeds in the transaction to pay down $1.3 billion worth of debt — another reason to like the JV decision. We're reiterating our hold-equivalent 2 rating, but increasing our price target to $120 a share as Wall Street's earnings-per-share estimates move higher. Guidance With a few months remaining in its fiscal 2026, Starbucks boosted its full-year guidance across multiple important metrics. Here's where they stand now: Consolidated net revenues "flat to slight" growth year over year, up from "roughly flat" previously. Adjusted EPS in the range of $2.55 to $2.65, an increase from the prior range of $2.25 to $2.45. Global comps growth nearing 6%, compared with 5% or greater previously. U.S. comps growth slightly greater than 6%, up from the prior target of 5% or greater. The company continues to expect 600 to 650 net new coffeehouses globally, including both company-operated and licensed locations. For the ongoing fourth quarter, Starbucks said U.S. comps growth will be at least 6.5%. (Jim Cramer's Charitable Trust is long SBUX. See here for a full list of the stocks.) As a subscriber to the CNBC Investing Club with Jim Cramer, you will receive a trade alert before Jim makes a trade. Jim waits 45 minutes after sending a trade alert before buying or selling a stock in his charitable trust's portfolio. If Jim has talked about a stock on CNBC TV, he waits 72 hours after issuing the trade alert before executing the trade. THE ABOVE INVESTING CLUB INFORMATION IS SUBJECT TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY , TOGETHER WITH OUR DISCLAIMER . NO FIDUCIARY OBLIGATION OR DUTY EXISTS, OR IS CREATED, BY VIRTUE OF YOUR RECEIPT OF ANY INFORMATION PROVIDED IN CONNECTION WITH THE INVESTING CLUB. NO SPECIFIC OUTCOME OR PROFIT IS GUARANTEED.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/were-raising-our-price-target-on-starbucks-after-a-home-run-quarter-.html",
    publishedAt: "2026-07-30T00:54:16+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "i-dropped-out-of-university-and-built-fi-cd91b5dd",
    title: "I dropped out of university and built five beauty businesses. Here's how I did it",
    titleJa: "私は大学を中退し、美容関連のビジネスを 5 つ立ち上げました。私がやった方法は次のとおりです",
    summaryJa: "私は大学を中退し、美容関連のビジネスを 5 つ立ち上げました。私がやった方法は次のとおりです- 公開されました",
    bodyOriginal: `I dropped out of university and built five beauty businesses. Here's how I did it
- Published
The name Marcia Kilgore might not be instantly recognisable but her Beauty Pie brand is known the world over for being an industry game-changer with its online-only subscription model.
Before founding Beauty Pie in 2016, Kilgore had built other brands including luxury day spa Bliss, make-up and skincare range Soap & Glory and footwear brand FitFlop.
Here the 57-year-old serial entrepreneur shares her story and the five secrets to success she learned along the way.
1. You don't need a perfect plan
Kilgore didn't always know she wanted to be an entrepreneur but growing up she saw first-hand the stress that financial insecurity could cause.
"I remember deciding at eight-years-old that when I was my parents' age, I would never want to be stressed about my electric bill," she says.
That desire shaped her approach to work and risk. "I knew that working for other people wouldn't necessarily give me the freedom I wanted and at least when you are an entrepreneur, the risk is your own."
She didn't begin with a grand business plan - she moved from Canada to New York to study at Columbia University and her tuition plan fell through so she had to get a job to support herself.
"You can't sit around thinking: 'What am I going to do? You have to survive. I knew I had to use the skills I had to support myself and then I would figure it out."
She started working as a personal trainer and taking beauty classes in the evening.
"What ended up transpiring was that I was quite good at the beauty industry job," she says and eventually she dropped out of university to pursue a career in it.
2. Know the job inside out
Working in her salon, Kilgore says she was involved in every aspect of the business from the laundry, to performing treatments and training staff.
She says that practical experience was invaluable when she later opened Bliss Spa in London in the 1990s.
"I had trained loads of people ahead of the store opening but when we first opened it was so busy and a lot of them got afraid and quit.
"The good thing is I know how to wax and do facials so I could do all of the appointments myself."
Her advice is to start a business in an area where you have genuine knowledge.
"You want to have deep expertise, so you're not left swinging in the wind if people disappoint you or things come in from the side and surprise you," she says.
3. Challenge your own ideas
Kilgore recommends asking yourself why someone should care about your idea and be able to explain the value of an idea in one clear sentence.
"If you can't answer 'so what?' in one sentence, your idea isn't good enough yet."
That doesn't necessarily mean abandoning it but it needs to be refined more so its purpose is immediately understandable, she says.
Kilgore also warns against developing "ownership bias", believing an idea is brilliant simply because it belongs to them.
"You might think something is really great, but you're living in your own bubble," she says.
Her advice is to "test your idea with your target market before you go too far down the road of investing in something nobody cares about but you".
She adds that AI now offers significant opportunities to people starting their own business as "you don't need a huge budget for consultants".
"AI can spit your idea back and forth, challenge it and advise you on what you need to consider that you might no obviously see."
4. Expect sacrifice and be kind
When she was starting out in her career Kilgore realised she needed to be "someone that people look forward to being around".
It's important to be polite, punctual and nice as those qualities help you build loyalty, she says.
"I made sure I was the sunniest, hardest working and most diligent person to do that service."
"If you do a really great job, people will recommend you," she says and she soon opened a tiny beauty salon that became booked up months in advance.
She also explains you also need to be "willing to make some big sacrifices" to make your business successful.
"You're not going to have a lot of free time," she says as running a business requires you to be aware of changing customer behaviour, new competitors and wider market trends.
That often means reading, researching and connecting ideas outside of working hours.
Kilgore says the workload can feel easier if you have a curiosity around you as "that's what drives you".
She does have some non-negotiables and has made an effort not to miss important events while raising her children, including school plays and family holidays.
5. Do the deathbed test
A test that Kilgore has used throughout her career is the deathbed test where she asks whether a project will still feel worthwhile at the end of her life.
"Imagine you're on your deathbed, think about what you would have done differently and do that," she says.
"If it doesn't mean something, or you haven't done something good for people, are you going to feel that your life was really well spent?"
She adds that success for her isn't just about building another company but deciding which ideas are worth the time it will take to build them.
Related topics
- Published25 June`,
    bodyJa: `私は大学を中退し、美容関連のビジネスを 5 つ立ち上げました。私がやった方法は次のとおりです
- 公開されました
マーシア キルゴアという名前はすぐには認識できないかもしれませんが、彼女のビューティー パイ ブランドは、オンライン専用のサブスクリプション モデルで業界の変革者として世界中で知られています。
2016年にビューティー・パイを設立する以前、キルゴア氏は高級デイスパのブリス、メイクアップとスキンケアのソープ＆グローリー、シューズブランドのフィットフロップなどの他のブランドを構築していた。
ここでは、57 歳の連続起業家である彼女が、自身のストーリーと、その過程で学んだ成功への 5 つの秘訣を語ります。
1. 完璧な計画は必要ありません
キルゴアさんは起業家になりたいとずっと思っていたわけではありませんでしたが、経済的不安が引き起こすストレスを目の当たりにして成長しました。
「8歳のときに、自分が両親の年齢になったら、電気代のことでストレスを感じたくないと決めたのを覚えています」と彼女は言う。
その願望が、仕事とリスクに対する彼女のアプローチを形作りました。 「他の人のために働いても、必ずしも自分が望む自由が与えられるわけではないことはわかっていました。少なくとも起業家である場合、リスクは自分自身にあります。」
彼女は壮大なビジネス プランを持って始めたわけではありません。彼女はコロンビア大学で学ぶためにカナダからニューヨークに移りましたが、学費計画が失敗したため、自活するために仕事を見つけなければなりませんでした。
「座って『どうしよう、どうしよう、生き残らなければいけない』と考えているわけにはいきません。自分を支えるために自分のスキルを使わなければならないことはわかっていました。そうすれば、それを理解できるでしょう。」
彼女はパーソナルトレーナーとして働き始め、夕方には美容のクラスを受け始めました。
「結局のところ、私は美容業界の仕事ではかなり得意だったということが分かりました」と彼女は言い、最終的には美容業界でのキャリアを追求するために大学を中退しました。
2. 仕事を徹底的に知る
キルゴアさんは自身のサロンで働き、ランドリーからトリートメントの実施、スタッフのトレーニングに至るまで、ビジネスのあらゆる側面に携わったと語る。
彼女は、その後 1990 年代にロンドンに Bliss Spa をオープンする際に、その実践的な経験が非常に貴重だったと語ります。
「店舗のオープンに先立ち、たくさんの人を訓練しましたが、オープン当初はとても忙しく、多くの人が怖がって辞めてしまいました。
「良かったのは、ワックスとフェイシャルのやり方を知っているので、すべての予約を自分で行うことができることです。」
彼女のアドバイスは、本物の知識がある分野でビジネスを始めることです。
「人々があなたを失望させたり、横から何かが来てあなたを驚かせたりしたときに、風に振り回されないようにするために、深い専門知識を持ちたいのです」と彼女は言います。
3. 自分のアイデアに挑戦する
キルゴア氏は、なぜ誰かがあなたのアイデアに関心を持ち、アイデアの価値を明確な一文で説明できるのかを自問することを勧めています。
「『だから何？』と答えられなかったら？」一言で言えば、あなたのアイデアはまだ十分ではありません。」
それは必ずしもそれを放棄することを意味するわけではありませんが、その目的がすぐに理解できるように、さらに洗練する必要があると彼女は言います。
キルゴア氏はまた、アイデアが自分のものであるという理由だけで素晴らしいと信じて、「所有権バイアス」が生じないよう警告している。
「何かが本当に素晴らしいと思うかもしれないが、あなたは自分自身のバブルの中で生きているのです」と彼女は言う。
彼女のアドバイスは、「自分以外誰も気にしないものに投資するという道に進みすぎる前に、自分のアイデアをターゲット市場でテストすること」です。
同氏は、「コンサルタントに莫大な予算を必要としない」ため、AIは現在、自分でビジネスを始める人々に大きなチャンスを提供していると付け加えた。
「AI はあなたのアイデアを前後に吐き出し、異議を唱え、あなたには明らかに見えていない考慮すべき点についてアドバイスをくれます。」
4. 犠牲を覚悟し、親切にする
キルゴアさんは、キャリアをスタートさせたとき、自分が「人々が一緒にいることを楽しみにしている人」になる必要があることに気づきました。
礼儀正しく、時間厳守で、親切であることが重要です。これらの資質は忠誠心を築くのに役立つからです、と彼女は言います。
「私はその奉仕のために、自分が最も陽気で、最も勤勉で、最も勤勉な人間であることを確認しました。」
「本当に素晴らしい仕事をすれば、人々はあなたを推薦してくれるでしょう」と彼女は言い、すぐに小さな美容院をオープンしましたが、そのサロンは数か月前から予約でいっぱいでした。
彼女はまた、ビジネスを成功させるためには「多少の大きな犠牲を払う覚悟」も必要だと説明する。
ビジネスを運営するには、顧客の行動の変化、新たな競合他社、より広範な市場動向を認識する必要があるため、「自由な時間はそれほど多くありません」と彼女は言います。
それは多くの場合、勤務時間外にアイデアを読んだり、調べたり、結びつけたりすることを意味します。
キルゴア氏は、周囲に好奇心があれば、「それが自分の原動力になる」ため、仕事量が楽に感じられると語る。
彼女には譲れないものがいくつかあり、子供たちを育てている間、学校の演劇や家族の休暇などの重要なイベントを逃さないように努力してきました。
5. 臨終のテストを行う
キルゴアがキャリアを通じて行ってきたテストは、人生の終わりにプロジェクトがまだ価値があると感じるかどうかを尋ねる臨終のテストです。
「自分が死の床にあると想像して、もし違った行動をとっていればどうなるかを考えて、そうしてください」と彼女は言います。
「それが何の意味もなかったとしても、あるいは人々に良いことをしなかったとしても、自分の人生は本当に有意義に過ごせたと感じるだろうか？」
彼女にとっての成功とは、単に別の会社を設立することではなく、どのアイデアがその構築にかかる時間を費やす価値があるかを判断することだと付け加えた。
関連トピック
- 6 月 25 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8jngmk93p9o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T23:02:18+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/db29/live/b3a50330-8a87-11f1-83c5-cf36fe4b083e.jpg",
    readTime: 7,
  },
  {
    id: "interest-rates-expected-to-be-held-again-b74303cc",
    title: "Interest rates expected to be held again by Bank of England",
    titleJa: "金利はイングランド銀行によって再び維持されると予想される",
    summaryJa: "金利はイングランド銀行によって再び維持されると予想される- 公開されました",
    bodyOriginal: `Interest rates expected to be held again by Bank of England
- Published
UK interest rates are expected to be held at 3.75% for a fifth time by Bank of England policymakers.
Uncertainty over the the global political and economic outlook, and the impact on prices, means the Bank is likely to continue its cautious approach to rates.
Its Monetary Policy Committee (MPC) meets eight times a year, with its decisions heavily influencing how much borrowers are charged for loans and mortgages, as well as the returns available to savers.
The benchmark Bank rate is at its lowest level since February 2023, but few analysts predict any short-term changes.
The committee of five women and four men will announce their latest interest rate decision at 12:00 BST, with a hold the widespread expectation.
The Bank rate is the MPC's primary tool for maintaining the rate of rising prices - inflation - at a target of 2%.
The latest official figures show inflation in the UK was 2.6% in the year to June, down slightly on the previous month but still above its 2.3% target.
The inflation rate is likely to go up in July, as millions of households in Scotland, England and Wales feel the impact of a 13% rise in domestic energy prices.
The increase was the result of the impact of the Iran war on wholesale energy prices.
Conflict in the Gulf, and uncertainty over the chances of a lasting truce, hang over the MPC's meeting and decision this month and in the months ahead.
Many analysts expect interest rates to be unchanged in the foreseeable future, with the possibility of the next change being a rise.
"A new government finding its feet, and the situation in the Middle East becoming increasingly uncertain, mean that a hold on [the] base rate decision would be a welcome dose of stability," said Katie Horne, from savings platform Flagstone.
"People have had more than enough uncertainty over the past year, and even a temporary pause eases the pressure a little."
Impact on borrowers and savers
A hold would mean monthly repayments for homeowners on a tracker mortgage rate would be unchanged.
However, more than eight in 10 mortgage customers have fixed-rate deals, and the major UK lenders have been increasing rates on new deals in recent days.
The interest rate on this kind of mortgage does not change until the deal expires, usually after two or five years, and a new one is chosen to replace it.
The average rate on a new two-year fixed deal is 5.62%, according to financial information service Moneyfacts - the highest for more than a month.
Rates are going up because of lenders' funding costs rising owing to renewed volatility in the Middle East. Individual companies don't want to be inundated with applications so the sector tends to move as a pack.
"A hold is still welcome, but market expectations will need to ease back before we can hope for a return to lenders cutting rates," said David Hollingworth, from mortgage broker L&C.
Recent projections by the Bank of England suggest just over five million homeowners should expect their monthly mortgage repayments to increase by the end of 2028.
Other loans are influenced by the MPC's decision, which also has an key impact on the returns available to savers. A higher Bank rate, or the likelihood of an increase, can improve the interest rates that savers are offered.
Some of the deals available to people willing to lock-in their savings for fixed period are at their highest for nearly two years.
The guaranteed interest paid on the top one-year bond is 4.91%, the highest for new customers since October 2024.
"This rare dose of good news for savers is somewhat of a silver lining after years of poor real returns," says Rachel Springall, of Moneyfacts.`,
    bodyJa: `金利はイングランド銀行によって再び維持されると予想される
- 公開されました
イングランド銀行の政策当局者らは、英国金利は５回目となる３．７５％に据え置かれると予想している。
世界的な政治経済見通し、および物価への影響に対する不確実性は、世銀が金利に対して慎重なアプローチを継続する可能性が高いことを意味します。
金融政策委員会（MPC）は年に8回会合し、その決定は借り手にローンや住宅ローンの請求額、貯蓄者が得られるリターンに大きな影響を与える。
指標となる銀行金利は2023年2月以来の最低水準にあるが、短期的な変化を予測するアナリストはほとんどいない。
女性5人、男性4人で構成された委員会は、大方の予想を据え置きながら、BSTの12時に最新の金利決定を発表する予定だ。
銀行金利は、物価上昇率、つまりインフレ率を目標の 2% に維持するための MPC の主要なツールです。
最新の公式統計によると、英国のインフレ率は6月までの1年間で2.6％となり、前月より若干低下したが、それでも目標の2.3％を上回った。
スコットランド、イングランド、ウェールズの数百万世帯が国内エネルギー価格の13％上昇の影響を感じているため、7月にはインフレ率が上昇する可能性が高い。
この上昇は、イラン戦争がエネルギー卸売価格に与えた影響によるものである。
湾岸紛争と永続的な停戦の可能性をめぐる不確実性が、今月および今後数カ月のMPC会議と決定に影を落としている。
多くのアナリストは、金利は当面は据え置かれると予想しており、次の変化は上昇する可能性があると予想している。
貯蓄プラットフォーム、フラッグストーンのケイティ・ホーン氏は「新政権が立ち直り、中東情勢がますます不透明になっていることから、基準金利決定の据え置きは安定をもたらす歓迎すべきことだ」と述べた。
「過去1年間、人々は十分すぎるほどの不確実性を抱えてきたが、一時的な停止でさえそのプレッシャーは少し和らぐだろう。」
借り手と貯蓄者への影響
据え置きは、トラッカー住宅ローン金利に基づく住宅所有者の毎月の返済額が変わらないことを意味する。
しかし、住宅ローン顧客の10人中8人以上が固定金利契約を結んでおり、英国の大手金融機関はここ数日、新規契約の金利を引き上げている。
この種の住宅ローンの金利は、通常は 2 年または 5 年後に契約が期限切れになり、それに代わる新しい契約が選択されるまで変更されません。
金融情報サービスMoneyfactsによると、新規2年固定契約の平均金利は5.62％で、ここ1カ月以上で最高となった。
中東情勢の新たな不安定化により貸し手の資金調達コストが上昇しているため、金利が上昇している。個々の企業は申請が殺到することを望んでいないため、この分野はまとまって動く傾向があります。
住宅ローンブローカーＬ＆Ｃのデービッド・ホリングワース氏は「据え置きは依然として歓迎だが、貸し手の利下げ再開を期待するには市場の期待が後退する必要がある」と述べた。
イングランド銀行の最近の予測では、500万人強の住宅所有者が2028年末までに月々の住宅ローン返済額が増加すると予想されている。
他のローンも MPC の決定の影響を受けており、貯蓄者が得られる収益にも重要な影響を及ぼします。銀行金利が上昇する、または上昇する可能性が高いと、貯蓄者に提供される金利が向上する可能性があります。
貯蓄を一定期間固定したい人々が利用できる取引の中には、ここ 2 年近くで最高値となっているものもあります。
最上位の1年債に支払われる保証金利は4.91％で、新規顧客にとっては2024年10月以来最高となる。
マネーファクツのレイチェル・スプリングオール氏は、「貯蓄者にとってこのまれな朗報は、何年にもわたる実質リターンの低迷を経て、いくぶん希望の光となる」と語る。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cp8e6m4rndgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T23:01:56+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/38e0/live/7b090d20-8b3e-11f1-b2d7-b96c6bc9d7f5.jpg",
    readTime: 4,
  },
  {
    id: "meta-shares-fall-as-frustration-grows-ov-628d1851",
    title: "Meta shares fall as frustration grows over AI spending plans",
    titleJa: "AI支出計画に対する不満が高まり、メタ株が下落",
    summaryJa: "AI支出計画に対する不満が高まり、メタ株が下落- 公開されました",
    bodyOriginal: `Meta shares fall as frustration grows over AI spending plans
- Published
Meta shares plunged on Wednesday as investors balked at its promise to keep spending on artificial intelligence (AI) projects while profits dwindle.
Shares in the firm behind Instagram and Facebook fell as much as 11% in extended trading after its results for the quarter from April to June showed revenue grew 28% from a year ago to $61bn (£45.6bn), while profits fell 14% to $6bn.
Meta said it would spend $130bn to $145bn this year, mostly on AI, up from the $125bn it said it planned to spend just three months ago.
Chief executive Mark Zuckerberg said the firm's AI spending was "accelerating every part of our core business" and it plans to start selling the technology to other companies.
Susan Li, Meta's chief financial officer, told financial analysts that selling its tech to other companies would help it drive returns on its AI spending.
"By 2028, we'll have turned over a lot of cards," she said.
Such lines of business have not yet materialised. Meta's free cash flow for the quarter, what it held onto after paying for its operations, was $784m, the lowest level of the metric it has posted in at least five years, according to its financial records.
"What it generated in cash this quarter almost all got eaten by AI infrastructure spending", analyst Mike Proulx at Forrester said. "Investors now have to decide whether Meta's growing list of AI initiatives represents company diversification or distraction."
"There's a bit of similarity to Meta's metaverse missteps in that Meta is once again spending ahead of proven product demand," Proulx added, referring to the firm's previous spending of tens of billions of dollars on virtual reality experiences that fell flat with users.
Google last week also reported its lowest ever amount of leftover cash, which sent its own stock tumbling.
"I get that this is a big bet across the industry," Zuckerberg said of AI spending. "My personal bet is that the people who invest in this will feel very good and be rewarded over time."
He said on the call with analysts that Meta's AI abilities and models were driving engagement on Instagram and Facebook and boosting the ability of smaller businesses to create advertising. Zuckerberg added that the company was developing AI agents, or AI chatbots that act somewhat autonomously.
Such agents "will be the next wave of our product line in the months and years to come," Zuckerberg said.
"Soon, we'll have agents that can work 24/7 on your behalf", he added. "Great personal agents need to just work out of the box. I'm very excited about this and we will have more to share soon."
"We're the best company in the world at scaling experiences to billions of people," Zuckerberg said.
As for Meta's plans to sell AI models and computer tools to other firms for the first time, Zuckerberg said the first step is to make its Muse Spark AI model "easier for companies to integrate".
"We expect to build a large business for large businesses," he said. "We have more coding and product tools on our roadmap."
Although Zuckerberg said the move would flex "a different muscle than we've historically had", he said the financial opportunity was too big to ignore.
"It's not just about selling compute; it's the API services and the productivity services and I think there is a very, very large opportunity there and we're quite focused on that."
Microsoft also reported its quarterly and full year results on Wednesday and it bucked a trend of declining tech stocks, with shares rising 5% in after-hours trading.
Its positive reception by Wall Street showed that even huge AI spending can be acceptable to investors when it is not consistently coupled with a lack of clear financial returns.
Sales at Microsoft for the three months from April to June rose18% to $90bn, with profits up 31% at $35.8bn.
Microsoft is also one of the largest investors in OpenAI, and chief executive Satya Nadella used a call with analysts to address the AI company's recent issues with its models improperly breaching the technical operations of other companies.
"The biggest thing you take away from that is you can't depend on any one model," Nadella said.
Microsoft's chief financial officer, Amy Hood, said its capital spending for the whole of the next year would be $175bn, mostly related to AI and AI infrastructure. That's less than the $190bn it spent in the year to June.`,
    bodyJa: `AI支出計画に対する不満が高まり、メタ株が下落
- 公開されました
利益が減少する一方で人工知能（AI）プロジェクトへの支出を続けるという同社の約束に投資家が難色を示し、メタ株は水曜日に急落した。
インスタグラムやフェイスブックを支える同社の株価は、4月から6月までの四半期決算で売上高が前年同期比28％増の610億ドル（456億ポンド）、利益が14​​％減の60億ドルとなったことを受け、時間外取引で最大11％下落した。
メタ社は、今年は主にAIに1,300億ドルから1,450億ドルを費やすと述べ、わずか3か月前に計画していた1,250億ドルを上回った。
マーク・ザッカーバーグ最高経営責任者（CEO）は、同社のAI投資が「当社の中核事業のあらゆる部分を加速させている」とし、この技術を他社に販売し始める計画だと述べた。
メタ社のスーザン・リー最高財務責任者（ＣＦＯ）は金融アナリストに対し、自社の技術を他社に売却することでＡＩ支出の収益向上につながると語った。
「2028年までに、私たちは多くのカードをめくることになるだろう」と彼女は語った。
そのような事業分野はまだ実現していません。財務記録によると、メタ社の同四半期のフリーキャッシュフロー（事業費を支払った後に手元に残ったもの）は7億8400万ドルで、少なくとも過去5年間に記録した指標としては最低水準となった。
フォレスター社のアナリスト、マイク・プルクス氏は、「今四半期に現金で生み出したもののほぼすべてがAIインフラ支出に食いつぶされた」と述べた。 「投資家は現在、メタ社のAIイニシアチブの増加リストが企業の多角化を表しているのか、それとも気晴らしを表しているのかを判断する必要がある。」
「メタが再び実証済みの製品需要を先取りして支出しているという点で、メタのメタバースの失敗と少し似ている」とプロウルクス氏は付け加え、ユーザーの支持を得られなかった仮想現実体験に同社が過去に数百億ドルを費やしたことに言及した。
グーグルも先週、手元に残った現金の額が過去最低となったことを報告し、同社の株価は急落した。
ザッカーバーグ氏はAI支出について「これが業界全体にとって大きな賭けであることは理解している」と語った。 「私の個人的な賭けは、これに投資した人々は非常に良い気分になり、時間が経つにつれて報われるだろうということです。」
同氏はアナリストとの電話会議で、メタのAI能力とモデルがインスタグラムやフェイスブックでのエンゲージメントを促進し、中小企業の広告制作能力を高めていると述べた。ザッカーバーグ氏は、同社はAIエージェント、つまりある程度自律的に動作するAIチャットボットを開発していると付け加えた。
ザッカーバーグ氏は、こうした薬剤は「今後数カ月、数年のうちに当社の製品ラインの次の波となるだろう」と述べた。
「間もなく、お客様に代わって 24 時間 365 日対応できるエージェントが登場します」と彼は付け加えました。 「優れた個人エージェントは、すぐに使えるようにする必要があります。私はこれに非常に興奮しており、すぐにさらに多くのことを共有する予定です。」
ザッカーバーグ氏は、「当社は何十億人もの人々にエクスペリエンスを拡張するという点で世界最高の企業だ」と語った。
AIモデルとコンピューターツールを初めて他の企業に販売するというMetaの計画について、ザッカーバーグ氏は、最初のステップはMuse Spark AIモデルを「企業が統合しやすく」することだと述べた。
同氏は「大企業向けに大規模なビジネスを構築できると期待している」と述べた。 「私たちのロードマップには、さらに多くのコーディングツールと製品ツールが含まれています。」
ザッカーバーグ氏は、この動きは「我々がこれまで持っていたものとは異なる力」を発揮するだろうと述べたが、経済的な機会は無視できないほど大きいと述べた。
「それはコンピューティングの販売だけではありません。API サービスと生産性サービスです。そこには非常に大きなチャンスがあると思います。私たちはそれに重点を置いています。」
マイクロソフトも水曜日に四半期決算と通期決算を発表したが、ハイテク株の下落傾向に逆行し、株価は時間外取引で５％上昇した。
ウォール街で好意的に受け止められたことは、AIへの巨額の投資であっても、それが明確な経済的利益の欠如と一貫して結びついていない場合には、投資家に受け入れられる可能性があることを示した。
マイクロソフトの４月から６月までの３カ月間の売上高は１８％増の９００億ドル、利益は３１％増の３５８億ドルとなった。
MicrosoftはOpenAIへの最大の投資家の1つでもあり、最高経営責任者のサティア・ナデラ氏はアナリストとの電話会議を利用して、同社のモデルが他社の技術運用を不適切に侵害しているというAI企業の最近の問題に対処した。
「そこから得られる最大のことは、特定のモデルに依存できないということです」とナデラ氏は言う。
マイクロソフトの最高財務責任者、エイミー・フッド氏は、来年全体の設備投資は1750億ドルになると述べ、そのほとんどがAIとAIインフラストラクチャーに関連するものであると述べた。これは6月までの1年間に支出した1900億ドルよりも少ない。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckgd31l5yrdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T22:44:18+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ba2a/live/554a2820-8b94-11f1-9e6e-a18e6e88bf61.jpg",
    readTime: 6,
  },
  {
    id: "the-chinese-robot-army-transforming-the-1d55afaa",
    title: "The Chinese robot army transforming the UK's retail industry",
    titleJa: "中国のロボット軍団が英国の小売業界を変革",
    summaryJa: "中国のロボット軍団が英国の小売業界を変革- 公開されました",
    bodyOriginal: `The Chinese robot army transforming the UK's retail industry
- Published
Every time you click "buy" on an online order, the chances are that your purchase starts getting processed within minutes.
Increasingly, the journey starts with a squat silver floor robot gliding beneath a storage rack, lifting a shelf and carrying it across a warehouse to a waiting worker.
At Geek+'s factory in the eastern Chinese city of Hefei, which the BBC visited, fleets of the robots are built and tested before being shipped to warehouses around the world.
Some of Britain's biggest retailers - including Tesco, Asda and Next - now use the company's technology.
By automating these repetitive journeys, Geek+ says retailers can increase picking speeds, store more goods in spaces that are hard to reach for humans, and reduce errors.
Unlike traditional warehouse automation, which relies on fixed conveyor systems and permanent infrastructure, autonomous mobile robots can be deployed simply using QR code floor markers and safety fencing.
Geek+, which listed in Hong Kong last year in one of the biggest robotics share sales of 2025, has become the world's largest supplier of autonomous mobile robots.
The UK has struggled with weak productivity growth for more than a decade, and economists say wider adoption of robotics will be essential if businesses are to become more efficient.
In its 2026 report SME Technology Adoption in the United Kingdom, the Organisation for Economic Co-operation and Development (OECD) said technologies like robotics would be key to improving productivity.
According to the OECD, Britain's low adoption of robotics is "surprising" given its manufacturing heritage, noting that while UK firms have embraced mature digital technologies, they lag behind in robotics and automation.
That presents an opportunity for companies such as Geek+. The UK has one of Europe's largest e-commerce and logistics sectors, but many warehouses are still in the early stages of automation.
Britain has already become Geek+'s biggest European market, with UK partner MotionTech deploying more than 2,000 robots across 10 warehouse sites.
"Customers want fast deployable solutions," says Barry Pemberton, Account Director at MotionTech. "They want high volume, high storage, fast picking... ultimately on a smaller footprint with a reduced headcount."
"We seem to have a very big shortage of labour in the UK at the moment. These technologies are really important to keep businesses thriving and meet demand."
The Trades Union Congress (TUC), which represents almost 6 million UK workers, says robotics should be used to raise productivity and improve jobs, rather than simply cut labour costs.
In its response to the government's consultation on a new AI and innovation strategy, it urged ministers to ensure workers are involved in decisions about automation and that employers invest in retraining.
"Working with technologists, workers and unions can help steer the UK's research and innovation towards workers' priorities for automation... avoiding job-cutting, low-productivity automation," the TUC said in its report.
How China became a robotics leader
Robotics has become a strategic priority for Beijing under President Xi Jinping's drive to develop what he calls "new quality productive forces".
With China's working-age population shrinking, policymakers increasingly see automation as essential to boosting productivity and maintaining the country's manufacturing advantage.
"The robotics story builds directly on China's electric vehicle ecosystem," says Kyle Chan, a researcher at the Brookings Institution.
Batteries, electric motors, cameras, sensors and semiconductors developed for electric vehicles (EVs) are increasingly being used across China's robotics sector, creating what he describes as "overlapping industrial ecosystems".
One company leading that crossover is Chinese EV maker XPeng, which unveiled its humanoid robot, Iron, last year.
Founder He Xiaopeng says he no longer sees XPeng simply as a carmaker.
"We want XPeng to be a high-tech company," he told the BBC. "In the future, any car company will transform into a car and robotics company."
Analysts say China's robotics push could follow a similar path as its global EV success, with local players using manufacturing prowess, dense supplier networks and rapid product development to establish an early lead.
"China is deliberately trying to build on some of those strengths," says Chan. "As it reaches into new areas, from humanoid robots to industrial robots to delivery robots."
Tesla is pursuing a similar vision with its Optimus robot, which Elon Musk has said could eventually become a bigger business than carmaking.
But China's ambitions to dominate the global robotics industry was dealt a blow this week when the US banned the import of new foreign-made advanced robots, citing national security.
The Chinese embassy in Washington responded to the move by saying that Beijing has long opposed the US' "politicising" of trade issues and sanctions based on "groundless pretexts".
The next frontier
The Chinese-made robots now operating in British warehouses are designed to solve the problem of moving goods. Geek+ says the company's next goal is to automate everything else.
"We are working on... end-to-end unmanned warehouse solutions," says Yanyu Liu, head of communications at Geek+.
That means automating picking, handling and eventually packing goods.
Across China, companies including AgiBot and Unitree are investing billions in humanoid robots.
But the business case for humanoids is less clear than it is for today's warehouse robots. If wheeled robots move goods cheaply, reliably and efficiently or robots with just arms can do the other automated tasks, what problem does a humanoid solve?
Developers say factories, hospitals and offices have all been designed around people, and so they may eventually be able to work in different environments without the need to redesign workplaces around automation.
But experts and developers alike agree that the current technology is not yet suitable for some repetitive tasks that require more dexterity.
"I don't think [humanoids] will change the landscape of the types of technology or the automation that's going to be put into place," says Pemberton. "They're definitely going to be complementary."
Chinese companies already account for the vast majority of global humanoid deployments, but it may be years before they are commonplace in warehouses.
For Britain, where productivity pressures and labour shortages are driving demand for automation, the country's warehouses are becoming an early testing ground for China's next major technology export.
Additional reporting by Jaltson Akkanath Chummar`,
    bodyJa: `中国のロボット軍団が英国の小売業界を変革
- 公開されました
オンライン注文で「購入」をクリックするたびに、数分以内に購入の処理が開始される可能性があります。
ますます、その行程は、ずんぐりした銀色のフロアロボットが保管ラックの下を滑空し、棚を持ち上げて倉庫を横切って待機している作業員まで運ぶことから始まります。
BBC が訪問した中国東部の合肥市にある Geek+ の工場では、ロボットのフリートが構築され、世界中の倉庫に出荷される前にテストされています。
Tesco、Asda、Next など、英国最大手の小売業者の一部が現在、同社のテクノロジーを使用しています。
Geek+ によれば、こうした繰り返しの行程を自動化することで、小売業者はピッキングの速度を上げ、人の手が届きにくいスペースにより多くの商品を保管し、エラーを減らすことができるという。
固定コンベヤシステムと恒久的なインフラストラクチャに依存する従来の倉庫自動化とは異なり、自律移動ロボットは、QR コードのフロアマーカーと安全柵を使用するだけで導入できます。
Geek+ は、2025 年の最大のロボット株売上高の 1 つに昨年香港で上場し、自律移動ロボットの世界最大のサプライヤーになりました。
英国は10年以上にわたり生産性の伸び悩みに悩まされており、経済学者らは、企業の効率性を高めるにはロボットの導入拡大が不可欠だと指摘している。
経済協力開発機構（OECD）は、英国における中小企業のテクノロジー導入に関する2026年の報告書の中で、ロボット工学などのテクノロジーが生産性向上の鍵となると述べた。
OECDによると、英国のロボット工学の導入の低さは、その製造業の伝統を考えると「驚くべきこと」であり、英国企業は成熟したデジタル技術を受け入れているものの、ロボット工学や自動化では遅れをとっていると指摘した。
これは Geek+ のような企業にとってチャンスとなります。英国にはヨーロッパ最大の電子商取引と物流部門がありますが、多くの倉庫はまだ自動化の初期段階にあります。
英国はすでに Geek+ にとって最大の欧州市場となっており、英国のパートナーである MotionTech は 10 の倉庫サイトに 2,000 台以上のロボットを配備しています。
「顧客は迅速に導入可能なソリューションを望んでいます」と、MotionTech のアカウント ディレクターである Barry Pemberton 氏は言います。 「彼らは、大量生産、大容量ストレージ、迅速なピッキングを望んでいます...最終的には人員削減によるより小さな設置面積で。」
「現在、英国では労働力が非常に不足しているようです。これらのテクノロジーは、ビジネスの繁栄を維持し、需要に応えるために非常に重要です。」
英国の約600万人の労働者を代表する労働組合会議（TUC）は、単に人件費を削減するのではなく、ロボット工学を生産性の向上と雇用の改善に活用すべきだと主張している。
AIとイノベーションの新たな戦略に関する政府の協議に応じ、政府は各大臣に対し、自動化に関する決定に労働者が確実に関与すること、雇用主が再訓練に投資することを求めた。
「技術者、労働者、労働組合と協力することで、英国の研究とイノベーションを自動化に対する労働者の優先事項に導くことができる…人員削減や生産性の低い自動化を避けることができる」とTUCは報告書の中で述べた。
中国はいかにしてロボットのリーダーになったのか
習近平国家主席が「新たな質の高い生産力」と呼ぶものを開発しようとする取り組みのもと、ロボット工学は中国政府の戦略的優先事項となっている。
中国の生産年齢人口が減少する中、政策立案者は生産性を向上させ、国の製造業の優位性を維持するために自動化が不可欠であるとの見方を強めている。
「ロボット工学の物語は、中国の電気自動車エコシステムに直接基づいて構築されています」とブルッキングス研究所の研究者カイル・チャンは言う。
電気自動車（EV）用に開発されたバッテリー、電気モーター、カメラ、センサー、半導体は中国のロボット部門全体でますます使用されており、同氏が「重複する産業エコシステム」と表現するものを生み出している。
このクロスオーバーを主導する企業の 1 つが中国の EV メーカー XPeng で、同社は昨年人型ロボット Iron を発表しました。
創業者の何暁鵬氏は、もはやXPengを単なる自動車メーカーとは見ていないと語る。
「私たちはXPengがハイテク企業になることを望んでいます」と同氏はBBCに語った。 「将来的には、どの自動車会社も自動車とロボットの会社に変わるでしょう。」
アナリストらは、中国のロボティクス推進は世界的なEVの成功と同じ道をたどる可能性があり、地元企業が製造能力、密集したサプライヤーネットワーク、迅速な製品開発を利用して早期にリードを確立する可能性があるとしている。
「中国は意図的にこうした強みの一部を強化しようとしている」とチャン氏は言う。 「人型ロボットから産業用ロボット、配送ロボットに至るまで、新たな分野に進出しています。」
テスラは自社のロボット「オプティマス」で同様のビジョンを追求しており、イーロン・マスク氏はこれが最終的には自動車製造よりも大きなビジネスになる可能性があると述べた。
しかし、世界のロボット産業を制覇したいという中国の野望は今週、米国が国家安全保障を理由に新たな外国製先進ロボットの輸入を禁止したことで打撃を受けた。
ワシントンの中国大使館はこの動きに対し、中国は米国が「根拠のない口実」に基づいて通商問題や制裁を「政治利用」することに長年反対していると述べた。
次のフロンティア
現在英国の倉庫で稼働している中国製ロボットは、商品の移動の問題を解決するために設計されている。 Geek+ によれば、同社の次の目標はその他すべてを自動化することだという。
「私たちはエンドツーエンドの無人倉庫ソリューションに取り組んでいます」と Geek+ のコミュニケーション責任者、Yanyu Liu 氏は述べています。
これは、商品のピッキング、取り扱い、そして最終的には梱包を自動化することを意味します。
中国全土で、AgiBot や Unitree などの企業が人型ロボットに数十億ドルを投資しています。
しかし、ヒューマノイドのビジネスケースは、今日の倉庫ロボットほど明確ではありません。車輪付きロボットが商品を安く、確実に、効率的に移動させたり、腕だけのロボットが他の自動化されたタスクを実行したりできるとしたら、ヒューマノイドはどのような問題を解決できるのでしょうか?
開発者らは、工場、病院、オフィスはすべて人間を中心に設計されているため、最終的には自動化を中心に職場を再設計することなく、さまざまな環境で作業できるようになるかもしれないと述べている。
しかし、専門家も開発者も、現在のテクノロジーは、より器用さを必要とする一部の反復作業にはまだ適していないことに同意しています。
「（ヒューマノイドが）テクノロジーの種類や導入される自動化の状況を変えるとは思いません」とペンバートン氏は言う。 「それらは間違いなく補完的なものになるでしょう。」
中国企業はすでに世界のヒューマノイド配備の大部分を占めていますが、倉庫で一般的になるまでには何年もかかるかもしれません。
生産性の圧力と労働力不足により自動化の需要が高まっている英国にとって、同国の倉庫は中国の次の主要な技術輸出の初期実験場となりつつある。
Jaltson Akkanath Chummar による追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c0jl8v23qwgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T22:08:29+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/96ad/live/c412f1a0-8708-11f1-94fc-011b42f226be.jpg",
    readTime: 8,
  },
  {
    id: "sam-altman-to-meet-with-white-house-s-wi-91705eba",
    title: "Sam Altman to meet with White House's Wiles this week ahead of AI framework deadline",
    titleJa: "サム・アルトマン氏、今週AIフレームワークの期限に先立ってホワイトハウスのワイルズ氏と会談",
    summaryJa: "OpenAIのサム・アルトマン最高経営責任者（CEO）は水曜日、CNBCに対し、人工知能に関するドナルド・トランプ大統領の大統領令を実施するための枠組み案を確認し、今週ワシントン滞在中にスージー・ワイルズ大統領首席補佐官と会談する予定であると語った。ワイルズ氏はトランプ大統領に最も近い顧問の一人であり、AI政策に対する政権のアプローチの形成に貢献している主要当局者の一人である。アルトマン氏は今週、さまざまなトランプ政権高官、議員、経済学者と会談し、OpenAIの今後のモデル、サイバーセキュリティ、世界的なAI競争における米国の立場について話し合う予定だ。",
    bodyOriginal: `OpenAI CEO Sam Altman told CNBC on Wednesday that he has seen the proposed framework for implementing President Donald Trump's executive order on artificial intelligence, and that he will meet with Susie Wiles, the White House chief of staff, while in Washington this week.
Wiles is one of Trump's closest advisors and is one of the key officials helping to shape the administration's approach to AI policy. Altman is meeting with a range of senior Trump administration officials, lawmakers and economists this week to discuss OpenAI's upcoming models, cybersecurity and the U.S. position in the global AI race.
The Trump administration has taken a more active role in AI regulation since Trump signed a highly-anticipated executive order in June. The order asked AI companies to voluntarily provide models to the government to assess their capabilities ahead of a full release, but was light on specific details.
Trump gave federal agencies 60 days to develop a framework to carry out those evaluations in practice.
Altman's trip to D.C. coincides with that rapidly approaching Aug. 1 deadline, and he's not the only tech executive meeting with lawmakers this week. Nvidia CEO Jensen Huang is on Capitol Hill to discuss open models and "American leadership in AI," a spokesperson told CNBC.
Sen. Ted Cruz, R-Texas, and several Senate Democrats met with Altman on Wednesday. Altman told CNBC that he and Cruz talked about "what it's going to take for America to remain competitive with AI."
— CNBC's Emily Wilkins and Karen Sloan contributed to this report
WATCH: OpenAI and Google DeepMind make their case as Congress weighs an AI kill switch`,
    bodyJa: `OpenAIのサム・アルトマン最高経営責任者（CEO）は水曜日、CNBCに対し、人工知能に関するドナルド・トランプ大統領の大統領令を実施するための枠組み案を確認し、今週ワシントン滞在中にスージー・ワイルズ大統領首席補佐官と会談する予定であると語った。
ワイルズ氏はトランプ大統領に最も近い顧問の一人であり、AI政策に対する政権のアプローチの形成に貢献している主要当局者の一人である。アルトマン氏は今週、さまざまなトランプ政権高官、議員、経済学者と会談し、OpenAIの今後のモデル、サイバーセキュリティ、世界的なAI競争における米国の立場について話し合う予定だ。
トランプ大統領が6月に待望の大統領令に署名して以来、トランプ政権はAI規制においてより積極的な役割を果たしている。この命令では、AI企業に対し、完全リリースに先立ってその機能を評価するために自発的にモデルを政府に提供するよう求めたが、具体的な詳細については触れられていなかった。
トランプ大統領は連邦政府機関に対し、これらの評価を実際に実施するための枠組みを開発するための60日間の猶予を与えた。
アルトマン氏のワシントンD.C.訪問は、8月1日の期限が急速に近づいている時期と一致しており、今週テクノロジー業界の幹部が議員らと会合するのは彼だけではない。 Nvidia CEOのジェンセン・フアン氏はオープンモデルと「AIにおける米国のリーダーシップ」について話し合うため国会議事堂に来ていると広報担当者がCNBCに語った。
テッド・クルーズ上院議員（共和党、テキサス州）と数名の上院民主党議員が水曜日にアルトマン氏と会談した。アルトマン氏はCNBCに対し、クルーズ氏と「米国がAIとの競争力を維持するには何が必要か」について話し合ったと語った。
— CNBC のエミリー・ウィルキンスとカレン・スローンがこのレポートに寄稿しました
注目: 議会が AI キルスイッチを検討する中、OpenAI と Google DeepMind が主張する`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/altman-white-house-wiles-ai-framework.html",
    publishedAt: "2026-07-29T19:31:58+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "us-interest-rates-held-for-fifth-time-in-5c14e2ad",
    title: "US interest rates held for fifth time in a row",
    titleJa: "米国金利は5回連続据え置き",
    summaryJa: "米国金利は5回連続据え置き- 公開されました",
    bodyOriginal: `US interest rates held for fifth time in a row
- Published
US interest rates have been held for the fifth time in a row by the Federal Reserve.
The decision, which was broadly expected, means rates remain between 3.5% and 3.75%.
Higher interest rates make borrowing more expensive for people wanting to secure loans, mortgages and credit cards, but can lead to better returns on savings.
Policymakers decided to keep rates at the level they have been since December last year after inflation, the rate at which prices rise, slowed last month, but concerns remain that the dip could prove short-lived.
Despite inflation falling to 3.5% in the year to June, the rate prices are rising at remains above the Fed's 2% target, as it has been for more than five years. The lower rate of inflation last month does not mean prices are falling, but that they are rising at a slower rate.
There is also growing uncertainty over the impact of the ongoing conflict in the Middle East on global oil prices and subsequently general consumer prices in the coming months. On Wednesday, Brent crude, the global benchmark for oil prices rose by more than 6% to above $89 a barrel.
The Fed acknowledged that inflation remained "elevated" which it said was in part due to energy price increases.
But policymakers at the US central bank voted 9-3 in favour of keeping interest rates on hold. The three who voted against were pushing instead for a small hike, with speculation ahead of the decision that an increase in the rate was on the cards due to renewed hostilities between the US and Iran pushing up global oil prices.
Warsh said he had wanted to and succeeded in having a "family fight" with his fellow policymakers on the rates decision.
"Economic activity is expanding at a solid pace despite elevated uncertainty that owes, in part, to the conflict in the Middle East. Productivity growth and capital investment are strong," the Fed said in a statement following the decision.
Richard Flynn, managing director at Charles Schwab UK, said the "biggest smoke signal" for the US central bank was the energy market, with the ongoing conflict in Iran likely to influence future rate decisions.
"We expect the Fed to hold through year end even as futures markets flirt with pricing in a hike," he said.
Warsh, who was appointed by US President Donald Trump in May, has held interest rates twice since he took over as chairman.
He previously told Congress that the central bank had "no tolerance to persistently elevated inflation" and that he was committed to "restoring price stability".
President Trump pushed Warsh's predecessor, Jerome Powell, to cut interest rates, and has made it clear he expects Warsh to fulfil his demand for reductions in borrowing costs for Americans.
But the new Fed chairman has said his "goal" is "for there to be no politics" and has stressed the importance of the Fed's independence.
Richard Carter, head of fixed interest research at investment management firm Quilter Cheviot, said Trump would be watching the Fed's decision with interest, particularly with the US mid-term elections less than 100 days away,
"The president will want to deliver positive news on the economy," he added. "Inflation continuing to remain elevated and the looming potential for rate hikes certainly makes that narrative difficult to achieve."
Increasing interest rates is a way of tackling inflation by making borrowing more expensive, encouraging people to cut back on spending and in turn leading to lower demand and price rises easing.
But it is a balancing act, as high interest rates can lead businesses to hold off on investment, harming the economy. Meanwhile, lower interest rates can boost the economy by reducing borrowing costs and encouraging spending and investment.`,
    bodyJa: `米国金利は5回連続据え置き
- 公開されました
米国の金利はFRBによって5回連続で据え置かれている。
この決定は大方予想されていたもので、金利が3.5％から3.75％の間にとどまることを意味する。
金利の上昇により、ローン、住宅ローン、クレジットカードを確保したい人にとって借入はより高価になりますが、貯蓄による収益の向上につながる可能性があります。
物価上昇率であるインフレが先月鈍化したことを受け、政策当局者らは金利を昨年１２月以来の水準に維持することを決定したが、この下落が短期的なものとなる可能性があるとの懸念は依然として残っている。
6月までの1年間にインフレ率が3.5％に低下したにもかかわらず、金利価格は5年以上続いており、FRBの目標である2％を依然として上回っている。先月のインフレ率の低下は、物価が下落していることを意味するのではなく、物価の上昇率が鈍化していることを意味します。
また、中東で続いている紛争が世界の原油価格、ひいては今後数カ月間の一般消費者物価に与える影響についても不確実性が高まっている。水曜日、原油価格の世界的な指標であるブレント原油は6％以上上昇し、1バレルあたり89ドルを超えた。
FRBはインフレが依然として「高止まり」していることを認め、エネルギー価格の上昇が一因だと述べた。
しかし、米国中央銀行の政策担当者らは９対３で金利据え置きに賛成票を投じた。反対票を投じた3カ国は代わりに小幅利上げを主張しており、米国とイランの対立が再燃し世界の原油価格が上昇しているため、利上げが決定される前には憶測が広がっていた。
ウォーシュ氏は、金利決定に関して同僚の政策立案者らと「家族喧嘩」をしたいと思っており、それに成功したと述べた。
FRBは今回の決定後の声明で「中東紛争が一因で不確実性が高まっているにもかかわらず、経済活動は堅調なペースで拡大している。生産性の伸びと設備投資は堅調だ」と述べた。
チャールズ・シュワブUKのマネジング・ディレクター、リチャード・フリン氏は、米中銀にとって「最大の狼煙」はエネルギー市場であり、イランで続く紛争が今後の金利決定に影響を与える公算が大きいと述べた。
同氏は「先物市場が利上げを織り込んでいるにもかかわらず、FRBは年末まで政策を維持すると予想している」と述べた。
ウォーシュ氏は5月にドナルド・トランプ米大統領によって任命され、会長就任以来2度金利を維持してきた。
同氏は以前議会に対し、中銀は「持続的なインフレ高進を容認しない」とし、「物価安定の回復」に全力で取り組むと述べた。
トランプ大統領はウォーシュ氏の前任者ジェローム・パウエル氏に利下げを促し、米国人の借り入れコスト削減を求めるウォーシュ氏の要求を満たすことを期待していることを明らかにした。
しかし、新FRB議長は自身の「目標」は「政治が存在しないこと」だと述べ、FRBの独立性の重要性を強調した。
投資管理会社キルター・チェビオットの固定金利調査責任者リチャード・カーター氏は、特に米国中間選挙まで100日を切った今、トランプ大統領はFRBの決定を関心を持って注視しているだろうと述べた。
同氏は「大統領は経済に関する前向きなニュースを伝えたいだろう」と付け加えた。 「インフレ率は依然として高止まりしており、利上げの可能性が差し迫っているため、この物語の達成が確実に困難になっている。」
金利の引き上げは、借り入れをより高価にし、人々の支出削減を促し、ひいては需要の低下と物価上昇の緩和につながることでインフレに対処する方法です。
しかし、高金利は企業が投資を控え、経済に悪影響を与える可能性があるため、これはバランスを取る必要がある。一方、金利の低下は、借入コストを削減し、支出と投資を促進することで経済を押し上げることができます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy07wgqjv08o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T19:30:40+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/aa1f/live/9a5f9640-8b56-11f1-8322-5bf52455cf04.jpg",
    readTime: 4,
  },
  {
    id: "the-big-focus-now-is-on-the-potential-fo-69213b26",
    title: "The big focus now is on the potential for a September rate hike after the Fed stands pat",
    titleJa: "現在の最大の焦点は、FRBが態度を堅持した後の9月利上げの可能性である。",
    summaryJa: "市場は「特に戦争の雲が再びエネルギー価格を押し上げているため、9月の利上げに警戒する必要がある」とあるエコノミストは言う",
    bodyOriginal: `Markets should be ‘on alert for a hike in September, particularly with war clouds pushing up energy prices again,’ one economist says`,
    bodyJa: `市場は「特に戦争の雲が再びエネルギー価格を押し上げているため、9月の利上げに警戒する必要がある」とあるエコノミストは言う`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-big-focus-now-is-on-the-potential-for-a-september-rate-hike-after-the-fed-stands-pat-401c30d6?mod=mw_rss_topstories",
    publishedAt: "2026-07-29T19:11:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-42161453",
    readTime: 2,
  },
  {
    id: "divided-fed-holds-interest-rates-steady-d3ce0970",
    title: "Divided Fed holds interest rates steady, but three members voted to hike",
    titleJa: "分裂したFRBは金利を据え置くが、3人のメンバーが利上げに投票した",
    summaryJa: "ワシントン – 米連邦準備理事会（FRB）は水曜日、主要金利を据え置くことを決議したが、インフレに対する懸念を表明し利上げを望んでいる当局者3人の反対がなかったわけではない。一部当局者の間で利上げ支持が高まっているにもかかわらず、連邦公開市場委員会は９対３でフェデラルファンド金利を３．５─３．７５％の範囲に据え置くことを可決した。",
    bodyOriginal: `WASHINGTON – The Federal Reserve on Wednesday voted to hold its key interest rate steady but not without opposition from three officials who have expressed concern over inflation and wanted to hike.
Despite increasing support among some officials for a rate increase, the Federal Open Market Committee voted 9-3 to leave the federal funds rate in a range between 3.5% and 3.75%.
All of the "no" votes came from regional presidents – Beth Hammack of Cleveland, Neel Kashkari of Minneapolis and Lorie Logan of Dallas – who had been the most explicit about the need for higher rates to address inflation that has been above the Fed's 2% target for more than five years.
The post-meeting statement noted that the three dissenters "preferred to raise the target range for the federal funds rate by ¼ percentage point at this meeting."
An early challenge for Warsh
This is the first time since September 2016 that three policymakers dissented with a unified view of which direction rates should head.
"We're reading this as a Committee with vocal hawks," said Ian Lyngen, head of U.S. rates at BMO Capital Markets.
The no votes presented an early challenge for Chairman Kevin Warsh, whose refusal to provide clear road signs on where monetary policy is headed led to an unusually high level of uncertainty heading into the meeting.
Markets largely had expected the central bank policymakers to approve another hold on rates, though there had been some inclination – about a 1-in-3 chance, according to the CME Group's FedWatch tool – that a surprise rate hike was in the cards. Prediction markets had a higher level of certainty that the Fed would hold.
Warsh has argued that the Fed should spend less time trying to tell markets what it will do and instead emphasizing the conditions under which action would be taken. However, Wednesday's statement provided neither, even with markets largely expecting the Fed to hike in September.
The post-meeting statement was almost identical to the one following the June 17 decision and was in keeping with the Fed's actions all year, following three rate cuts in the latter part of 2025.
Officials again noted that "Economic activity is expanding at a solid pace despite elevated uncertainty that owes, in part, to the conflict in the Middle East." The statement further said that job growth has "kept pace with the workforce and the unemployment rate has changed little" even as the U.S. labor force has contracted.
As in June, the statement concluded with the simple declaratory, "The Committee will deliver price stability."
"The Fed appears to be running out of patience with above-target inflation, despite recent data coming in cold," said Kay Haigh, global head and chief investment officer of fixed income and liquidity solutions at Goldman Sachs Asset Management. "The committee's growing hawkish sentiment, shown by the three dissents against today's hold, has also likely been exacerbated by the recent flare up in hostilities in the Middle East."
Officials favoring tighter policy argued inflation has been a burden on households and is not showing clear signs of abating. Recent price pressures have reflected both tariffs imposed by President Donald Trump and higher energy costs tied to the Iran conflict.
The full committee in June penciled in one quarter-percentage-point increase by the end of 2026.
Disparate policy views
Governor Christopher Waller also voiced worries recently over inflation, saying higher rates could be necessary if more progress isn't made. However, he voted in favor of a hold at this meeting.
For his part, Warsh has called inflation "a choice," and he repeatedly stressed the importance of getting prices in check during recent hearings on Capitol Hill.
But from a policy perspective, Warsh has expressed disdain for the Fed's past practice of providing forward guidance on its expectations for rates.
Keeping with Warsh's first meeting, the statement was much shorter than what had become the norm. Warsh has stressed changing the way the Fed communicates, even dedicating one of five task forces he has created to address the issue.
In the weeks leading up to the meeting, his FOMC colleagues had expressed disparate policy views.
New York Fed Chair John Williams has said he sees current policy well positioned to bring inflation back to target. However, Logan countered that "modestly" higher rates would be needed. Hammack also has been an inflation hawk, citing the pressure households are facing from persistently higher prices across the board.
Earlier this week, Trump showed support for Warsh, calling him "fantastic" while noting other Fed officials had "bad intentions" and perhaps had political motivations.`,
    bodyJa: `ワシントン – 米連邦準備理事会（FRB）は水曜日、主要金利を据え置くことを決議したが、インフレに対する懸念を表明し利上げを望んでいる当局者3人の反対がなかったわけではない。
一部当局者の間で利上げ支持が高まっているにもかかわらず、連邦公開市場委員会は９対３でフェデラルファンド金利を３．５─３．７５％の範囲に据え置くことを可決した。
「反対」票のすべては、5年以上FRBの目標である2%を上回っているインフレに対処するための利上げの必要性を最も明言していた、クリーブランドのベス・ハンマック氏、ミネアポリスのニール・カシュカリ氏、ダラスのロリー・ローガン氏の各地域大統領らによるものだった。
会合後の声明では、反対者３人が「今回の会合でフェデラル・ファンド金利の目標レンジを１／４％ポイント引き上げることを希望した」と指摘した。
ウォーシュにとって初期の課題
政策当局者３人が金利の方向性について統一見解に反対したのは２０１６年９月以来初めて。
ＢＭＯキャピタル・マーケッツの米国金利部門責任者イアン・リンゲン氏は「われわれはこれをタカ派の委員会として読んでいる」と述べた。
無投票はケビン・ウォーシュ議長にとって初期の課題となったが、同議長は金融政策の方向性について明確な道しるべを提示することを拒否したため、会合に向けて異常に高い不確実性が生じた。
市場では中銀政策当局者が追加金利据え置きを承認するとおおむね予想されていたが、ＣＭＥグループのフェドウォッチツールによると約３分の１の確率で、予想外の利上げが実現するとの見方もあった。市場の予測ではFRBが確信する水準が高かった。
ウォーシュ氏は、FRBは市場に今後の行動を伝えることに時間を費やすのではなく、代わりに行動がとられる条件を強調すべきだと主張した。しかし、市場ではFRBが9月に利上げすると大方予想していたにもかかわらず、水曜日の声明ではそのどちらも示されなかった。
会合後の声明は6月17日の決定後の声明とほぼ同じで、2025年後半に3回の利下げを実施した後のFRBの年間を通じての行動に沿ったものだった。
当局者らは「中東紛争の影響もあって不確実性が高まっているにもかかわらず、経済活動は堅調なペースで拡大している」と改めて指摘した。声明はさらに、米国の労働力が縮小しているにもかかわらず、雇用の伸びは「労働力の伸びに追いついていて、失業率はほとんど変わっていない」と述べた。
声明は6月と同様、「委員会は物価の安定を実現する」というシンプルな宣言で締めくくられた。
ゴールドマン・サックス・アセット・マネジメントの債券および流動性ソリューションのグローバル責任者兼最高投資責任者であるケイ・ヘイグ氏は、「最近の統計は冷え込んでいるにもかかわらず、FRBは目標を上回るインフレに対して忍耐が限界に来ているようだ」と述べた。 「今日の保留に対する３人の反対意見に示される委員会のタカ派感情の高まりは、最近の中東での敵対行為の激化によっても悪化した可能性が高い。」
引き締め政策を支持する当局者らは、インフレは家計の負担となっており、明確な緩和の兆候は見られないと主張した。最近の価格圧力は、ドナルド・トランプ大統領が課した関税とイラン紛争に関連したエネルギーコストの上昇を反映している。
6月の全委員会は、2026年末までに4分の1ポイントの引き上げを決定した。
異なる政策見解
クリストファー・ウォーラー総裁も最近、インフレをめぐる懸念を表明し、さらなる進展がなければ利上げが必要になる可能性があると述べた。しかし、彼はこの会議での保留に賛成票を投じた。
ウォーシュ氏としては、インフレは「選択」であると述べ、国会議事堂での最近の公聴会でも物価を抑制することの重要性を繰り返し強調した。
しかし、政策の観点からウォーシュ総裁は、金利予想についてフォワードガイダンスを提供するというFRBの過去の慣行に軽蔑を表明している。
ウォーシュ氏の最初の会談と同様に、声明は標準となっていたものよりもはるかに短かった。ウォーシュ氏はFRBのコミュニケーション方法を変えることを強調し、同氏が立ち上げた5つのタスクフォースのうちの1つをこの問題に対処するために専念させさえした。
会合までの数週間、同氏のFOMC同僚らは異なる政策見解を表明していた。
ニューヨーク連銀のウィリアムズ議長は、現在の政策がインフレ率を目標に戻すのに十分な位置にあるとの見方を示した。しかし、ローガン氏は「適度に」高い金利が必要になると反論した。ハマック氏はインフレタカ派でもあり、家計が軒並み高止まりする物価上昇の圧力にさらされていると指摘した。
今週初め、トランプ大統領はウォーシュ氏を「素晴らしい」と呼び、他のFRB当局者には「悪意」があり、おそらく政治的動機があると指摘し、ウォーシュ氏への支持を示した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/fed-rate-decision-july-2026.html",
    publishedAt: "2026-07-29T18:58:16+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "ford-s-big-truck-bet-is-paying-off-and-w-2622b63b",
    title: "Ford’s big-truck bet is paying off — and Wall Street is taking notice",
    titleJa: "フォードの大型トラックへの賭けが功を奏し、ウォール街も注目",
    summaryJa: "ウォール街ではGMほど愛されていないフォードでも、再建の物語が進行中である可能性がある。",
    bodyOriginal: `A turnaround story could be in the works at Ford, which gets less love than GM on Wall Street.`,
    bodyJa: `ウォール街ではGMほど愛されていないフォードでも、再建の物語が進行中である可能性がある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/fords-big-truck-bet-is-paying-off-and-wall-street-is-taking-notice-6a1de0fb?mod=mw_rss_topstories",
    publishedAt: "2026-07-29T18:32:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-63854577",
    readTime: 2,
  },
  {
    id: "hims-and-hers-shares-fall-10-as-ftc-sues-d03e8bc8",
    title: "Hims and Hers shares fall 10% as FTC sues company over data, billing practices",
    titleJa: "FTCがデータと請求慣行をめぐり同社を告訴、ヒムズ・アンド・ハーズの株価は10％下落",
    summaryJa: "水曜日、遠隔医療会社ヒムズ・アンド・ハーズ・ヘルスの株価は、連邦取引委員会がプライバシー保護、請求慣行、定期購読のキャンセルについて消費者に誤解を与えたとして同社を告訴した後、急落した。FTCは、ロサンゼルス郡とユタ州も参加し、ヒムズ＆ハーズがウェブサイトに組み込まれた追跡技術を通じて、ユーザーの機密健康情報をメタプラットフォームやスナップ社などのオンライン広告プラットフォームと共有したと主張した。同庁は、同社の行為はユーザーの健康データを保護するという約束と矛盾していると述べた。",
    bodyOriginal: `Shares of telehealth company Hims & Hers Health fell sharply Wednesday after the Federal Trade Commission sued the company, alleging it misled consumers about privacy protections, billing practices and subscription cancellations.
The FTC, joined by Los Angeles County and Utah, alleged Hims & Hers shared users' sensitive health information with online advertising platforms including Meta Platforms and Snap Inc. through tracking technologies embedded on its website. The agency said the company's practices were inconsistent with promises it made to protect users' health data.
The FTC also accused Hims & Hers of charging customers for prescriptions before they have spoken with a healthcare provider. The agency alleges many customers are billed after completing an intake form rather than after a consultation with a medical professional.
The regulator further alleges the company made it difficult for users to cancel subscriptions.
Hims & Hers denied the allegation in a post on X, saying the lawsuit "disregards substantial evidence" provided during the FTC's nearly three-year investigation into the company and "contorts the law to try to manufacture claims."
The company said it is confident in its position and will "vigorously defend" itself.
The lawsuit comes as Hims & Hers has emerged as one of the largest telehealth providers in the fast-growing market for weight loss medications. The company offers virtual appointments and prescriptions for treatments including weight loss drugs, erectile dysfunction, hair loss and mental health medications, which are shipped directly to consumers.
The investigation by the FTC dates back to October 2023. CNBC has reported on several probes into Hims & Hers' business practices, including its Super Bowl ad and compounded weight loss drugs.
In April, the FTC formally communicated the findings of its probe started in 2023 to the company and settlement discussions began. In May, Hims & Hers disclosed a $15 million probable-loss accrual related to the matter, warning the final cost could be materially higher. The company said it made a settlement offer without admitting wrongdoing.
Wednesday's lawsuit escalates that dispute, with regulators pushing new claims.`,
    bodyJa: `水曜日、遠隔医療会社ヒムズ・アンド・ハーズ・ヘルスの株価は、連邦取引委員会がプライバシー保護、請求慣行、定期購読のキャンセルについて消費者に誤解を与えたとして同社を告訴した後、急落した。
FTCは、ロサンゼルス郡とユタ州も参加し、ヒムズ＆ハーズがウェブサイトに組み込まれた追跡技術を通じて、ユーザーの機密健康情報をメタプラットフォームやスナップ社などのオンライン広告プラットフォームと共有したと主張した。同庁は、同社の行為はユーザーの健康データを保護するという約束と矛盾していると述べた。
FTCはまた、ヒムズ＆ハーズが医療提供者と相談する前に顧客に処方箋の代金を請求したと非難した。同代理店は、多くの顧客が医療専門家との相談後ではなく、問診フォームに記入した後に料金を請求されていると主張している。
規制当局はさらに、同社がユーザーの定期購入のキャンセルを困難にしたと主張している。
Hims & HersはXへの投稿でこの疑惑を否定し、この訴訟はFTCによる同社に対する約3年間の調査中に提供された「重要な証拠を無視」し、「主張をでっち上げようと法律を歪曲している」と述べた。
同社は自社の立場に自信を持っており、「断固として弁護する」と述べた。
この訴訟は、ヒムズ＆ハーズが、急成長する減量薬市場において最大の遠隔医療プロバイダーの1つとして浮上した中で起こった。同社は、減量薬、勃起不全、脱毛薬、メンタルヘルス薬などの治療薬のバーチャル予約と処方箋を提供しており、それらは消費者に直接配送されます。
FTCによる調査は2023年10月に遡る。CNBCは、スーパーボウルの広告や配合された減量薬など、ヒムズ＆ハーズの商慣行に関するいくつかの調査について報じた。
4月にFTCは2023年に開始した調査結果を同社に正式に伝え、和解協議が始まった。ヒムズ・アンド・ハーズは5月、この問題に関連して1500万ドルの見込み損失が発生していることを明らかにし、最終的な費用は大幅に高くなる可能性があると警告した。同社は不正行為を認めずに和解案を提示したと述べた。
水曜日の訴訟はその論争をさらにエスカレートさせ、規制当局は新たな主張を押し進めている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/hims-and-hers-ftc-lawsuit-stock.html",
    publishedAt: "2026-07-29T18:24:09+00:00",
    category: "貿易",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    readTime: 2,
  },
  {
    id: "charities-unable-to-pay-staff-after-frau-9a7379f2",
    title: "Charities unable to pay staff after fraud alert",
    titleJa: "慈善団体、詐欺警告を受けて職員に給料を支払えない",
    summaryJa: "慈善団体、詐欺警告を受けて職員に給料を支払えない- 公開されました",
    bodyOriginal: `Charities unable to pay staff after fraud alert
- Published
Charities across the South East are worried they will not be able to pay staff and suppliers after being cut off from their online bank accounts.
CAF Bank, which is based in West Malling in Kent and serves more than 14,000 non-profit causes UK-wide, said its online services had been suspended since 24 July following reports of suspected cyber fraud.
As a result, the ability of some charities to manage essential operations like payroll has been impacted, such as Maidstone-based 21 Together, which helps people with Down's syndrome.
Its chief executive Kevan Hodges, who has a 13-strong team of education specialists and part-time staff, described the situation as "appalling".
"People are concerned that wages won't get paid because of this, and that's just stressful when they have bills to pay," he said.
"My team have wasted days trying to get through to (CAF Bank), but all in vain."
He added that when they finally did get hold of someone at the bank, which is owned by the Charities Aid Foundation, they were told to fill out an online form which "would be looked at tomorrow".
Others have also voiced their frustrations, such as Bali Rodgers, who is chief executive of Safer Communities Alliance.
"It's just not good enough," she said.
"Many of the grassroots organisations I represent - churches, YMCAs, vets - have CAF as their bank, but they are slowly losing trust in it."
Rodgers added that she had received "no reassurance" about the current situation from the bank, while any information had been "very inconsistent".
"It's especially sad that this has happened in the summer when lots of extra projects are up and running," she said.
"People are unable to access their own money and have been left feeling powerless - it makes me really angry."
In a statement, chief executive Alison Taylor said: "I am very sorry for the disruption this has caused for our customers.
"On Monday we informed them that the online banking service will be unavailable until further notice.
"We are working with external experts to fix an issue we identified with third-party software related to our online banking portal. Importantly, the core bank is not affected."
Taylor added: "We appreciate how difficult this is for our customers and want this to be resolved as quickly as possible, but we cannot restore access until we are assured the issue is safely resolved.
"We are still able to support as extra teams are available on the phone, and we are prioritising time-sensitive payments such as payroll."
Follow BBC Kent on Facebook, external, X, external, and on Instagram, external and listen to BBC Radio Kent on Sounds. Send your story ideas to southeasttoday@bbc.co.uk, external or WhatsApp us on 08081 002250.
Related topics
More stories like this
- Published7 July
- Published28 January`,
    bodyJa: `慈善団体、詐欺警告を受けて職員に給料を支払えない
- 公開されました
南東部各地の慈善団体は、オンライン銀行口座の利用が停止されたことで、スタッフやサプライヤーへの支払いができなくなるのではないかと懸念している。
ケント州ウェスト・マリングに拠点を置き、英国全土で1万4000以上の非営利活動を行っているCAF銀行は、サイバー詐欺の疑いがあるとの報告を受けて7月24日からオンラインサービスを停止していると発表した。
その結果、メードストンに本拠を置き、ダウン症の人々を支援する「21 Together」など、一部の慈善団体の給与計算などの重要な業務を管理する能力に影響が出ている。
教育専門家と非常勤スタッフからなる13人の強力なチームを擁する同社の最高経営責任者ケバン・ホッジス氏は、状況を「恐ろしい」と述べた。
「人々はこのせいで賃金が支払われないのではないかと心配しているが、支払わなければならない請求書があるとストレスになるだけだ」と彼は言う。
「私のチームは（CAF銀行に）連絡するために何日も無駄にしましたが、すべて無駄でした。」
同氏は、慈善援助財団が所有する銀行で最終的に誰かを捕まえたとき、「明日調べることになる」オンラインフォームに記入するように言われたと付け加えた。
セーファー・コミュニティー・アライアンスの最高責任者であるバリ・ロジャース氏など、他の人々も不満を表明している。
「それだけでは十分ではありません」と彼女は言いました。
「教会、YMCA、退役軍人など、私が代表を務める草の根団体の多くはCAFを銀行として持っていますが、CAFに対する信頼を徐々に失いつつあります。」
ロジャーズ氏は、現在の状況について銀行から「何の安心感も得ていない」一方、どの情報も「非常に一貫性がない」と付け加えた。
「多くの追加プロジェクトが立ち上がっている夏にこのようなことが起こったのは特に悲しいことです」と彼女は語った。
「人々は自分のお金にアクセスできず、無力感を感じさせられています。私は本当に腹が立ちます。」
アリソン・テイラー最高経営責任者（ＣＥＯ）は声明で「これにより当社の顧客に混乱を引き起こしたことを大変遺憾に思う。
「月曜日に、私たちはオンラインバンキングサービスが追って通知があるまで利用できなくなることを彼らに伝えました。
「当社は外部の専門家と協力して、当社のオンライン バンキング ポータルに関連するサードパーティ ソフトウェアで特定した問題の修正に取り組んでいます。重要なのは、中核となる銀行は影響を受けないことです。」
テイラー氏はさらに、「お客様にとってこれがどれほど困難であるかを認識しており、できるだけ早く解決したいと考えていますが、問題が安全に解決されたことが確認されるまでアクセスを復元することはできません。」
「追加のチームが電話で対応できるため、引き続きサポートが可能です。また、給与計算など時間に制約のある支払いを優先しています。」
Facebook (外部)、X (外部) で BBC Kent をフォローし、外部の Instagram で BBC Kent をフォローし、BBC Radio Kent on Sounds を聞いてください。ストーリーのアイデアを、southeasttoday@bbc.co.uk、社外、または WhatsApp (08081 002250) に送信してください。
関連トピック
このようなストーリーをもっと見る
- 7 月 7 日に公開
- 1 月 28 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cz7dlelz711o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T18:17:23+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1c4a/live/13985170-1f8b-11f0-a007-45ee4cc6069d.jpg",
    readTime: 4,
  },
  {
    id: "todd-blanche-attorney-general-nomination-8664ff65",
    title: "Todd Blanche attorney general nomination on edge as Cornyn questions Trump-IRS settlement",
    titleJa: "トッド・ブランシュ司法長官指名が危うい、コーニン氏がトランプと国税庁の和解に疑問を呈",
    summaryJa: "水曜日、物議を醸しているドナルド・トランプ大統領による国税庁に対する訴訟の和解に関する懸念に対処することを目的としたブランチ氏との会談を、共和党の主要上院議員が二度目に中止したため、司法長官へのトッド・ブランチ氏の指名が危うくなった。テキサス州のジョン・コーニン上院議員は、トランプ氏らを和解前に提出された納税申告書に対する国税庁の監査から守る和解条項を明確にするという同氏の要求に司法省が応じなかったため、ブランシュ司法長官代理との座談を中止したと述べた。",
    bodyOriginal: `The nomination of Todd Blanche for attorney general was at risk on Wednesday as a key Republican senator, for the second time, called off a meeting with Blanche that was meant to address concerns about the controversial settlement of President Donald Trump's lawsuit against the IRS.
Sen. John Cornyn of Texas said he canceled the sit-down with the acting Attorney General Blanche because the Department of Justice has not met his demands to clarify provisions of the settlement that shield Trump and others from IRS audits for tax returns filed before the settlement.
Cornyn, whose vote Blanche needs for his nomination to advance out of the Senate Judiciary Committee, told reporters "beats me" when asked why the DOJ has not satisfied his concerns.
"Maybe they think I'm just going to give up or, you know, go along," Cornyn said, MS NOW reported. "But they're mistaken."
Cornyn also said he believed another Republican on the Judiciary Committee, Sen. Thom Tillis of North Carolina, "is pretty much on the same page as I am."
"So they better get real, and there's not much time left," Cornyn said.
Tillis, like Cornyn, has expressed concerns about another provision in the settlement, the creation of a $1.8 billion fund by the DOJ to compensate people who were purportedly victims of prosecutorial overreach by the department. Blanche said he canceled that fund after members of Congress harshly criticized it, but Tillis, Cornyn and others have asked for a written guarantee that the fund cannot be revived.
Blanche's nomination, to get a vote by the full Senate, needs to be advanced by a majority of the Judiciary Committee, which is set to vote Thursday. The committee has 12 Republican members and 10 Democrats. Every Democrat is expected to vote against Blanche.
If Cornyn or Tillis were to vote against Blanche, it would prevent his nomination from moving to the full Senate.
Cornyn said Judiciary Committee Chairman Sen. Chuck Grassley, R-Iowa, told him he needed to know by 4 p.m. ET on Wednesday whether the panel's vote on Blanche's nomination could proceed as planned Thursday.
"So, we still got a little time, and hopefully they now recognize the seriousness of this," Cornyn said.
Asked if he would vote "no" on advancing Blanche's nomination to the full Senate, Cornyn replied: "Well, I'm not prepared to vote 'yes.' Let me put it that way."
The settlement that Cornyn wants amended resolved a lawsuit Trump filed against the IRS over the illegal leaking of his tax records by an agency contractor.
Cornyn wants, in writing from the DOJ, assurances that Blanche gave in his confirmation hearing about provisions of the settlement that shielded Trump, family members and business entities from IRS audits and enforcement actions related to tax returns filed by the date of the settlement.
Blanche had testified that the settlement is not intended to protect people who were not parties to the lawsuit, that it is not intended to provide prospective immunity from tax audits, and that it does not apply to any government agency other than the IRS and Treasury Department.
"To me, it's pretty simple. They can state that in a modified release form, and that would be responsive to my request," Cornyn said. "But for some reason, I don't know whether it's the staff of the DOJ or who it is, but they simply ... know what they need to do, but they simply refuse to do it."
A DOJ official, in a statement to CNBC when asked about Cornyn's claim, said, "The DOJ provided a written proposal to Senator Cornyn's staff yesterday following ongoing discussion with both the Committee and the Senator's office."
"We look forward to further discussion around any outstanding concerns," the official said.
Cornyn said earlier, "I haven't seen a single piece of writing that is responsive to what I've requested."
Cornyn is set to leave the Senate in January, having lost a Republican primary runoff to Texas Attorney General Ken Paxton in May. Trump had endorsed Paxton. Tillis is retiring from the Senate at the end of his term in January, leaving both senators in a position to take political positions without concern for winning reelection.`,
    bodyJa: `水曜日、物議を醸しているドナルド・トランプ大統領による国税庁に対する訴訟の和解に関する懸念に対処することを目的としたブランチ氏との会談を、共和党の主要上院議員が二度目に中止したため、司法長官へのトッド・ブランチ氏の指名が危うくなった。
テキサス州のジョン・コーニン上院議員は、トランプ氏らを和解前に提出された納税申告書に対する国税庁の監査から守る和解条項を明確にするという同氏の要求に司法省が応じなかったため、ブランシュ司法長官代理との座談を中止したと述べた。
コーニン氏はブランシュ氏が上院司法委員会からの脱退に指名獲得に必要な票を獲得しているが、司法省が自身の懸念を満たさない理由を問われ、記者団に対し「勝てる」と語った。
「たぶん彼らは、私が諦めるか、それとも従うつもりだと思っているのかもしれない」とコーニンさんは語った、とMS NOWは報じた。 「しかし、彼らは間違っています。」
コーニン氏はまた、司法委員会のもう一人の共和党議員、トム・ティリス上院議員（ノースカロライナ州）も「私とほぼ同じ考えを持っている」と信じていると述べた。
「だから、本気になったほうがいい。もう時間はあまり残っていない」とコーニン氏は語った。
ティリス氏はコーニン氏と同様、和解条項の別の条項、つまり司法省による検察の行き過ぎの被害者とされる人々に補償するため司法省が18億ドルの基金を創設することについて懸念を表明している。ブランシュ氏は、議会議員らが同基金を厳しく批判したため同基金を中止したと述べたが、ティリス氏やコーニン氏らは基金を復活させることができないという書面による保証を求めている。
ブランシュ氏の指名が上院全会一致で投票するには、木曜日に投票が予定されている司法委員会の過半数が賛成する必要がある。同委員会には共和党員12名、民主党員10名が所属している。すべての民主党員はブランシュに反対票を投じることが期待されている。
コーニン氏かティリス氏がブランチ氏に反対票を投じれば、同氏の指名が上院本会議に移るのが妨げられるだろう。
コーニン氏は、司法委員会委員長のチャック・グラスリー上院議員（共和党、アイオワ州）から午後４時までに知らせる必要があると言われたと述べた。 ETは水曜日、ブランシュ氏の指名に関する委員会の投票が木曜日に計画通りに行われるかどうかを判断する。
「だから、私たちにはまだ少し時間がある。彼らがこのことの深刻さを認識してくれることを願っている」とコーニン氏は語った。
コーニン氏は、ブランシュ氏の指名を上院本会議に進めることに「ノー」に投票するかとの質問に、「そうですね、『イエス』に投票する用意はありません」と答えた。そう言わせてください。」
コーニン氏が修正を望んでいる和解案は、代理店契約業者による納税記録の違法漏洩を巡りトランプ氏が国税庁に対して起こした訴訟を解決したものである。
コーニン氏は司法省からの書面で、トランプ氏とその家族、事業体をIRSの監査や和解日までに提出された納税申告書に関連した強制措置から守る和解条項についてブランチ氏が承認公聴会で述べた保証を求めている。
ブランシュ氏は、和解案は訴訟の当事者ではない人々を保護することを目的としたものではなく、税務調査からの将来的な免除を目的とするものではなく、IRSと財務省以外の政府機関には適用されないと証言した。
「私にとって、それは非常に簡単です。彼らは修正されたリリースフォームでそれを述べることができます、そしてそれは私の要求に応えるでしょう」とコーニン氏は言いました。 「しかし、どういうわけか、それが司法省の職員なのか、それとも誰なのかはわかりませんが、彼らはただ…何をしなければならないのか分かっているのに、それをすることを単に拒否しているのです。」
司法省当局者はCNBCへの声明の中で、コーニン氏の主張について問われ、「司法省は委員会と上院議員事務所の双方との継続的な議論を経て、昨日コーニン上院議員のスタッフに書面による提案を提出した」と述べた。
同当局者は「未解決の懸念事項についてさらなる議論を期待している」と述べた。
コーニン氏は以前、「私の要求に応えた文章は一つも見たことがない」と語った。
コーニン氏は５月の共和党予備選決選投票でテキサス州司法長官ケン・パクストン氏に敗れたため、１月に上院を辞職する予定だ。トランプ氏はパクストン氏を支持していた。ティリス氏は1月の任期満了で上院議員を引退するため、両上院議員は再選を気にすることなく政治的立場に就くことができる立場にある。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/todd-blanche-attorney-general-trump-irs-audit-cornyn.html",
    publishedAt: "2026-07-29T17:42:03+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "what-happens-here-has-a-big-impact-on-yo-021b68e7",
    title: "What happens here has a big impact on your money",
    titleJa: "ここで起こることはあなたのお金に大きな影響を与えます",
    summaryJa: "ここで起こることはあなたのお金に大きな影響を与えます関連トピック",
    bodyOriginal: `What happens here has a big impact on your money
Related topics
- MoneyUpdates from your News topics will appear in My News and in a collection on the News homepage.
- Bank of EnglandUpdates from your News topics will appear in My News and in a collection on the News homepage.
- BankingUpdates from your News topics will appear in My News and in a collection on the News homepage.
- Personal financeUpdates from your News topics will appear in My News and in a collection on the News homepage.`,
    bodyJa: `ここで起こることはあなたのお金に大きな影響を与えます
関連トピック
- ニュース トピックからの MoneyUpdate は、マイ ニュースおよびニュース ホームページのコレクションに表示されます。
- イングランド銀行ニュース トピックの更新は、マイ ニュースおよびニュース ホームページのコレクションに表示されます。
- ニュース トピックからの銀行更新は、マイ ニュースおよびニュース ホームページのコレクションに表示されます。
- パーソナル ファイナンスニュース トピックの更新は、マイ ニュースおよびニュース ホームページのコレクションに表示されます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/videos/ckg4jxwkn2lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T16:00:24+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/618c/live/9a13a080-8b53-11f1-8322-5bf52455cf04.jpg",
    readTime: 2,
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
