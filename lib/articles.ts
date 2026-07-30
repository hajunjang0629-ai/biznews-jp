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
  {
    id: "procter-gamble-revenue-misses-estimates-9698e08c",
    title: "Procter & Gamble revenue misses estimates as volume stays unchanged",
    titleJa: "プロクター・アンド・ギャンブルの売上高は予想を下回る、売上高は変わらない",
    summaryJa: "プロクター・アンド・ギャンブルは水曜日、同社製品に対する圧倒的な需要により売上高が予想を下回ったため、まちまちの四半期決算を報告した。同社株は午前の取引で約３％下落した。",
    bodyOriginal: `Procter & Gamble on Wednesday reported mixed quarterly results, as underwhelming demand for its products resulted in weaker-than-expected sales.
Shares of the company fell roughly 3% in morning trading.
Here's what Procter & Gamble reported compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $1.43 adjusted vs. $1.41 expected
- Revenue: $21.2 billion vs. $21.38 billion expected
P&G reported fiscal fourth-quarter net income attributable to the company of $3.04 billion, or $1.26 per share, down from $3.62 billion, or $1.48 per share, a year earlier.
Excluding restructuring costs, transaction gains and other items, the company earned $1.43 per share.
Net sales rose 2% to $21.2 billion. The company's organic revenue, which excludes acquisitions, divestitures and currency fluctuations, was unchanged for the quarter, thanks to flat volume across P&G's portfolio.
During P&G's full fiscal year 2026, the company has reported volume growth in just one quarter. Like many consumer companies, it has seen demand for its products weaken as shoppers have grown more value conscious, opting for value packs or stretching their products' lifespan longer.
"For the fourth quarter, we saw improving global share trends versus prior period, but headline results were impacted by trade dynamics in the U.S. and the spike in input costs," CFO Andre Schulten said on the company's earnings conference call.
He later said that P&G plans to return to growing its sales through a mix of both price and higher volume.
"In a broader sense, we've had in the post-Covid period, 100% of growth driven by price," Schulten said. "We will return ... to a more balanced model."
The company has been focusing on innovation and strengthening its core brands, like Tide, to win back shoppers.
Schulten said that P&G plans to spend more on media, which has grown increasingly fragmented, making it more difficult to connect with consumers. The company is also navigating the changing world of digital commerce, which now includes shopping agents and artificial intelligence-powered search.
Which segments are selling
For the fiscal fourth quarter, P&G's beauty division was the top performer, posting 3% volume growth. The segment includes Pantene shampoo and Olay and SK-II skincare products.
Fabric and home care was the only other reporting segment to see volume growth. The division, which includes Tide detergent and Swiffer, reported that its volume rose 1% in the quarter.
P&G's baby, feminine and family care division as well as its grooming business both reported that volume fell 1%.
Health care was the worst performer for P&G this quarter. The division, which houses Oral-B and Vicks, saw its volume shrink 3%, fueled by declining sales of its oral care products.
Looking ahead to the next fiscal year, the company is not projecting a significant upswing in demand for its products.
For fiscal 2027, P&G expects core earnings per share in a range of $6.89 to $7.11. The company is also projecting all-in sales growth in the range of 1% to 3% compared with the prior year.
"The low end of the range protects for additional softness in underlying market growth rates," Schulten said. "The high end would require acceleration in underlying market growth rates and market shares."
Wall Street was anticipating earnings per share of $7.04 and revenue growth of 2.7% for fiscal 2027.
P&G is currently estimating a $1 billion headwind after taxes from higher costs for raw materials, energy and transportation. Combined with its projections for a higher net interest expense, lower non-operating income and unfavorable exchange rates, P&G anticipates an 8% — or 56 cent — drag on its earnings per share for fiscal 2027.
P&G also announced Wednesday that CEO Shailesh Jejurikar will become chair of the board, effective Aug. 1, in addition to his current role. He replaces former chief executive Jon Moeller.`,
    bodyJa: `プロクター・アンド・ギャンブルは水曜日、同社製品に対する圧倒的な需要により売上高が予想を下回ったため、まちまちの四半期決算を報告した。
同社株は午前の取引で約３％下落した。
以下は、LSEGによるアナリスト調査に基づいて、プロクター・アンド・ギャンブルが報告した内容とウォール街の予想を比較したものである。
- 1 株当たり利益: 調整後 1.43 ドル、予想 1.41 ドル
- 収益: 212 億ドル対予想 213 億 8,000 万ドル
P&Gは、同社に帰属する会計年度第4四半期の純利益が30億4000万ドル（1株当たり1.26ドル）と、前年同期の36億2000万ドル（1株当たり1.48ドル）から減少したと報告した。
リストラ費用や取引益などを除くと、同社は１株当たり１．４３ドルの利益を上げた。
純売上高は２％増の２１２億ドルとなった。買収、売却、為替変動を除いた同社の本業収益は、P&Gのポートフォリオ全体で売上高が横ばいだったため、当四半期を通じて変化はありませんでした。
P&G の 2026 年度通期中、同社はわずか 1 四半期で販売量の増加を報告しました。多くの消費者企業と同様に、買い物客がバリューパックを選択したり、製品の寿命を延ばしたりするなど、価値に対する意識が高まるにつれ、同社製品の需要が弱まっていくのを目の当たりにしている。
アンドレ・シュルテン最高財務責任者（ＣＦＯ）は決算会見で、「第４・四半期については、世界シェアの傾向が前期に比べて改善したが、主要業績は米国の貿易動向と投入コストの高騰の影響を受けた」と述べた。
同氏は後に、P&Gは価格と販売量の増加の両方を組み合わせて売上を伸ばす計画に戻るつもりだと語った。
シュルテン氏は「広い意味で、新型コロナウイルス感染症以降の成長は100％価格主導だった」と述べた。 「私たちは…よりバランスの取れたモデルに戻ります。」
同社は、買い物客を取り戻すためにイノベーションに注力し、Tideなどの中核ブランドを強化している。
シュルテン氏は、P&Gはますます断片化が進み、消費者とのつながりがより困難になっているメディアへの支出を増やす計画だと述べた。同社はまた、現在ではショッピング エージェントや人工知能を利用した検索を含むデジタル コマースの変化する世界にも対応しています。
どのセグメントが売れているのか
会計年度第 4 四半期では、P&G の美容部門が 3% の販売量増加を記録し、最高の業績を上げました。このセグメントには、パンテーン シャンプー、オーレイおよび SK-II スキンケア製品が含まれます。
ファブリックおよびホームケアは、他の報告セグメントで唯一販売量が増加しました。 Tide洗剤とSwifferを含む同部門は、同四半期の取扱量が1%増加したと報告した。
Ｐ＆Ｇのベビー、フェミニン、ファミリーケア部門とグルーミング事業はいずれも販売量が１％減少したと報告した。
P&Gにとって今四半期の業績が最も悪かったのはヘルスケアだった。オーラルBとヴィックスを擁する同部門は、オーラルケア製品の売上減少により、売上高が3％縮小した。
来年度に向けて、同社は製品の需要が大幅に増加するとは予想していません。
P&Gは2027年度の1株あたりの中核利益が6.89ドルから7.11ドルの範囲になると予想している。同社はまた、総売上高が前年比 1% ～ 3% の範囲で増加すると予測しています。
シュルテン氏は「レンジの下限は基調的な市場成長率のさらなる軟化を防ぐ」と述べた。 「ハイエンドでは、基礎的な市場成長率と市場シェアの加速が必要となるだろう。」
ウォール街は2027年度の1株利益が7.04ドル、売上高が2.7％増加すると予想していた。
Ｐ＆Ｇは現在、原材料、エネルギー、輸送コストの上昇により税引き後１０億ドルの逆風が生じると試算している。純支払利息の増加、営業外収益の減少、不利な為替レートの予測と組み合わせると、P&G は 2027 会計年度の 1 株当たり利益を 8% (56 セント) 押し下げると予想しています。
Ｐ＆Ｇは水曜日、シャイレシュ・ジェジュリカール最高経営責任者（ＣＥＯ）が現在の職に加え、８月１日付けで取締役会長に就任すると発表した。同氏は前最高経営責任者ジョン・モラー氏の後任となる。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/procter-gamble-pg-q4-2026-earnings.html",
    publishedAt: "2026-07-29T14:07:21+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "jpmorgan-schwab-and-ubs-manage-millions-3db497d6",
    title: "JPMorgan, Schwab and UBS manage millions in Trump's $858 million investment portfolio",
    titleJa: "JPモルガン、シュワブ、UBSはトランプ氏の8億5,800万ドルの投資ポートフォリオの数百万ドルを管理している",
    summaryJa: "CNBCの分析によると、トランプ氏の資産を少なくとも8億5,800万ドル相当の口座で管理している企業には、JPモルガン、シュワブ、UBS、スティーブンス社などが含まれる。",
    bodyOriginal: `For years, the financial institutions handling President Donald Trump's sprawling investment portfolio have remained one of the most mysterious parts of his personal finances.
A CNBC analysis of Trump's 2025 annual financial disclosure filed with the Office of Government Ethics has linked JPMorgan Chase, Charles Schwab, UBS and Stephens Inc. to at least four of his eight numbered investment accounts: Account Nos. 3, 5, 6 and 8.
CNBC traced the connections through firm-specific investment funds, deposit programs and credit arrangements embedded in the portfolios. Separate analyses by three financial-industry experts, who asked not to be named because of the sensitivity of the president's holdings, corroborated CNBC's findings.
The disclosure does not always specify whether or to what extent each institution served as an investment manager, broker, custodian or in another capacity. The Wall Street Journal reported that a fifth account, Account No. 7, is managed by Schwab, though CNBC has not independently verified that relationship. Schwab declined to comment on whether Trump is a client.
Across all eight accounts, Trump disclosed at least $858 million in assets in 2025 — up from at least $237 million a year earlier — and more than 21,000 trades during the year.
The findings offer the clearest picture yet of who is handling Trump's portfolio and shed new light on the ties between hundreds of millions of dollars of the president's personal fortune and financial institutions.
CNBC found no evidence that the financial relationships influenced any government action or that Trump directed any specific transaction.
The Trump Organization told CNBC that outside financial institutions, not Trump, controlled the individual investment decisions. A spokesperson said the president's assets were placed in fully discretionary accounts that rely heavily on automated strategies to reduce potential conflicts of interest.
"There are no conflicts of interest," White House spokesperson Anna Kelly told CNBC when asked about Trump's banking.
Nevertheless, financial experts who spoke with CNBC said the arrangements put the firms in a sensitive position because they are tied to the wealth of a sitting president who can shape banking policy and regulation and who retains extensive domestic and foreign financial interests.
Ross Delston, a former FDIC banking regulator and lawyer who specializes in anti-money-laundering laws, said Trump's expansive global business interests, past legal and financial troubles and broad authority over the economy create "extraordinary" compliance and reputational risks for institutions — but also bring the prospect of substantial fees and potential access to the sitting president.
"It's quite remarkable to me that banks do seem to be interested in doing business with our president, given his history," Delston told CNBC. "They get access — access to the president of the United States. And that is known in my business as priceless."
Delston said, "The only way to view the president would be as an ultra-high-risk client from virtually every standpoint."
JPMorgan Chase did not respond to multiple detailed requests for comment about CNBC's findings and methodology. Stephens declined to comment.
A UBS spokesperson told CNBC in a statement that the bank had "no comment on this."
"As you know, we can't comment on client matters, regardless of whether a relationship exist or has ever existed," the spokesperson said.
Inside the trading
During Trump's entire first term, he made roughly 500 trades, according to his earlier disclosures. In 2025, that figure exceeded 21,000, driven at least in part by the automated investment strategy the Trump Organization says the president uses.
The bulk of those trades were linked to Schwab, UBS and JPMorgan, according to a CNBC analysis comparing the volume and value of transactions associated with each account in the financial disclosure.
Of the firms identified, Schwab appears to have the most extensive involvement with Trump's money, based on value and trading volume.
CNBC linked the firm to Account No. 6, which held at least $163 million. The Wall Street Journal reported that Schwab manages a second account, Account No. 7.
According to the Journal, Account No. 7 held about $302 million and the disclosure shows it generated about 10,500 transactions in 2025 — nearly half of Trump's disclosed trades. It was far the busiest and included major positions in Apple, Microsoft and Nvidia.
"We have strict policies governed by regulation regarding client privacy and do not comment on any current or former clients," Schwab spokesperson Mayura Hooper said in a statement to CNBC. She declined to comment on accounts 6 and 7. "Schwab serves 46 million client accounts, across different backgrounds, political affiliations, professions and viewpoints — and we apply the same standards to every client relationship."
The size and activity of both accounts associated with Schwab would not necessarily be unusual for an ultrawealthy investor, said Larry Harris, a former chief economist at the Securities and Exchange Commission. Nor would Schwab be an unusual choice for such a portfolio, Harris told CNBC.
"This is typical for people with large portfolios, and Schwab can be cheaper and provide greater control over tax timing," said Harris, now a finance professor at the University of Southern California Marshall School of Business.
Trump's disclosure also showed that Schwab extended a pledged-asset line of credit of more than $50 million to his trust, allowing the trust to borrow against securities without selling them. The proceeds generally cannot be used to purchase additional securities.
Unlike other major banks such as JPMorgan and Capital One, Schwab was not among the institutions the Trump family accused of cutting ties with them after the Jan. 6 insurrection.
The JPMorgan-linked Account No. 8 was active around the same time Trump accused the bank of "debanking" him for political reasons.
Account No. 8 disclosed 336 trades worth up to roughly $5.5 million on Aug. 4, 2025, the day before Trump's complaints. It reported another 50 trades worth up to $785,000 on Aug. 7, when Trump signed an executive order on debanking, and continued reporting transactions through December.
CNBC calculated the totals via the reported value ranges of each transaction.
Trump later sued JPMorgan and CEO Jamie Dimon for $5 billion, alleging the bank closed accounts belonging to him and his businesses for political reasons and placed them on a banking "blacklist." JPMorgan did not respond to requests for comment but has previously denied the allegations and said the lawsuit has no merit.
The case remains pending, with no hearing or trial date scheduled as the court weighs whether to return it to Florida state court or transfer it to federal court in New York.
Other firms in addition to JPMorgan, Schwab and UBS appeared in narrower roles.
A Stephens-linked account, Account No. 5, held $1 million to $5 million in a bank-sweep program. The same account also held up to $66,001 in Stifel's FDIC-insured bank deposit program, which experts consulted by CNBC said was consistent with a residual balance left behind as the account moved from Stifel's program to the program at Stephens program.
Stifel did not respond to requests for comment.
Two of Trump's disclosed accounts, Nos. 4 and 8, also held Fidelity-branded mutual funds within broader portfolios that included large-cap stocks and municipal bonds.
"Based on the publicly disclosed materials, the president's accounts appear to include two Fidelity mutual funds," said a person with knowledge of the funds who asked not to be named because they were not authorized to speak publicly on the matter.
Who controls the trades
Trump has said his family oversees a trust while outside financial institutions control the investment decisions. But he hasn't named the firms.
"My kids run it," Trump said in a July 2 CNBC interview. "I've made a tremendous amount of money, more than I would have ever thought I would have made, and I let people invest it I don't even speak to."
Eric Trump wrote on X in May that the financial firms have "sole and exclusive authority over all investment decisions, including asset allocation, trading, rebalancing, and portfolio management."
A Trump Organization spokesperson told CNBC that, to reduce potential conflicts of interest, Trump's portfolio relies heavily on direct indexing, an automated investment strategy increasingly used by wealthy investors.
Rather than buying an index fund, a direct-indexing account holds individual stocks selected to track a benchmark such as the S&P 500. Software continually buys, sells and rebalances the holdings to keep the portfolio aligned with the index.
"This is computer-driven trading," said Harris, the former SEC chief economist.
The approach can produce large bursts of transactions during volatile markets, when price swings create more opportunities to rebalance holdings or sell depreciated stocks to reduce an investor's tax bill.
For example, Trump's disclosures show a wave of purchases around major tariff news. On April 2, 2025, Trump announced sweeping tariffs that sent stocks tumbling. He paused most of them a week later, sending markets sharply higher, though he imposed a sweeping new tariff regime last week.
CNBC found no evidence that Trump or his family directed the individual transactions, including anything in anticipation of the tariff decision.
"Given that you have trustworthy fiduciaries who are involved in the process," Harris said, "it's really unlikely that any game playing is in those organizations. It's almost impossible to imagine it."
Direct indexing can also lower an investor's tax bill through tax-loss harvesting. When one stock declines, the software can sell it to capture the loss and buy another security that preserves the portfolio's broader market exposure. Those losses can then offset capital gains elsewhere in the portfolio.
Rules and regulations
Federal ethics rules require that if a president is using a blind trust to manage holdings while in office, it be controlled by an independent trustee and sharply restrict communications with the beneficiary about the holdings.
By contrast, much of Trump's wealth remains in a revocable trust of which he is the sole beneficiary, according to SEC filings. Donald Trump Jr. serves as trustee and holds sole voting power over certain assets, according to an SEC filing. A revocable trust can generally be amended — such as by replacing the trustee or changing beneficiaries — or dissolved by the person who established it.
Every president from Jimmy Carter through Joe Biden, except Trump, either established blind trusts or limited their investments to assets generally considered unlikely to create conflicts, such as diversified mutual funds, according to the Office of Government Ethics. Biden's disclosures showed no individual stock holdings.
The public records do not show whether Trump has exercised any power to amend or revoke the trust.
That gap between control over individual trades and ultimate ownership also creates compliance and reputational risks for the financial institutions managing Trump's money, Delston said.
"Banks that take him on have made a calculus that all of the truckloads of baggage that he brings is still worthwhile, whether because of the fees they can collect or other benefits of the relationship," he said.
Banks would almost always treat a sitting president as a "politically exposed person," or PEP, under their internal risk frameworks because the office can carry heightened corruption and money laundering exposure, Delston said.
"PEPs are expected to be given enhanced scrutiny, both at the onboarding stage and periodically through monitoring of their activities," Delston said.
Under federal anti-money-laundering rules, banks must understand the purpose of the relationship, know what activity should normally be expected, develop a risk profile and monitor for suspicious transactions.
For a client such as Trump, Delston said, that can mean contemporaneous review of wire transfers, checks, securities trades and other transactions to determine whether they raise suspicious-activity concerns.
"It isn't just determining whether there is suspicious activity involved," Delston said. "His accounts at any financial institution would require real-time monitoring."
That level of scrutiny can require additional spending on compliance personnel, technology, lawyers and outside advisors. Banks serving a sitting president also face reputational and political risks, including public scrutiny over whether the relationship could affect their dealings with the administration.
CNBC could not determine how much the firms earned from Trump's accounts.
"Banks charge people like the president high fees in whatever they do, in order to make up for some of the risk," Delston said. "Whether the fees are ever high enough is unknowable."`,
    bodyJa: `長年にわたり、ドナルド・トランプ大統領の広大な投資ポートフォリオを扱う金融機関は、同大統領の個人資産の中でも最も謎に包まれた部分の一つであった。
政府倫理局に提出されたトランプ大統領の2025年の年次財務情報開示に関するCNBCの分析では、JPモルガン・チェース、チャールズ・シュワブ、UBS、スティーブンズ社が同氏の8つの番号付き投資口座のうち少なくとも4つ（口座番号3、5、6、8）に関連付けられていることが判明した。
CNBCは、企業固有の投資ファンド、預金プログラム、ポートフォリオに組み込まれた信用協定を通じたつながりを追跡した。金融業界の専門家３人による個別の分析（大統領の保有資産は機密性が高いため匿名を希望）は、ＣＮＢＣの調査結果を裏付けた。
この開示は、各機関が投資マネージャー、ブローカー、カストディアン、あるいはその他の立場での役割を果たしたかどうか、あるいはどの程度の役割を果たしたかを常に特定しているわけではありません。ウォール・ストリート・ジャーナルは、5番目の口座である口座番号7がシュワブによって管理されていると報じたが、CNBCはその関係を独自に検証していない。シュワブ氏はトランプ氏が顧客かどうかについてコメントを控えた。
トランプ氏は8つの口座すべてで、2025年の資産総額が少なくとも8億5,800万ドル（前年の少なくとも2億3,700万ドルから増加）と、年間2万1,000件以上の取引を明らかにした。
この調査結果は、トランプ大統領のポートフォリオを誰が管理しているのかについてこれまでで最も明確な実態を明らかにし、大統領の数億ドルもの個人財産と金融機関との関係に新たな光を当てている。
CNBCは、金融関係が政府の行動に影響を与えた、あるいはトランプが特定の取引を指示したという証拠は見つからなかった。
トランプ・オーガナイゼーションはＣＮＢＣに対し、トランプ氏ではなく外部の金融機関が個々の投資決定を管理していると語った。報道官は、大統領の資産は潜在的な利益相反を減らすための自動戦略に大きく依存する完全裁量口座に置かれていると述べた。
ホワイトハウスのアンナ・ケリー報道官はトランプ大統領の銀行業務について問われ、「利益相反はない」とCNBCに語った。
それにもかかわらず、CNBCの取材に応じた金融専門家らは、両社は銀行政策や規制を形成でき、国内外の広範な金融利益を保持している現職大統領の富と結びついているため、今回の取り決めはデリケートな立場にあると述べた。
元FDIC銀行規制当局者でマネーロンダリング防止法を専門とする弁護士のロス・デルストン氏は、トランプ大統領の世界的な事業利益の拡大、過去の法的・財政的トラブル、経済に対する広範な権限が各機関に「並外れた」コンプライアンスと評判のリスクを生み出しているが、同時に多額の手数料や現職大統領へのアクセスの可能性の可能性ももたらしていると述べた。
デルストン氏はCNBCに対し、「大統領の経歴を考慮すると、銀行が大統領との取引に関心を示しているようであることは非常に注目に値する」と語った。 「彼らはアクセス権、つまり米国大統領へのアクセス権を得るのです。そしてそれは私のビジネスでは貴重なものとして知られています。」
デルストン氏は、「事実上あらゆる立場から大統領を超高リスクの顧客とみなす唯一の方法だろう」と語った。
JPモルガン・チェースはCNBCの調査結果と方法論に関する複数の詳細なコメント要請に応じなかった。スティーブンス氏はコメントを控えた。
ＵＢＳの広報担当者はＣＮＢＣに対し、同行は「この件についてコメントはない」と声明で述べた。
広報担当者は「ご存知のとおり、関係が存在するか、過去に存在したかに関係なく、顧客の問題についてコメントすることはできない」と述べた。
取引の内部
以前の暴露によれば、トランプ大統領の最初の任期全体で約500件の取引を行った。 2025年には、その数字は2万1000件を超えたが、これは少なくとも一部はトランプ・オーガナイゼーションによる大統領の自動投資戦略によるものだという。
財務開示の各口座に関連する取引量と取引額を比較したCNBCの分析によると、これらの取引の大部分はシュワブ、UBS、JPモルガンに関連していた。
金額や取引量から判断すると、特定された企業の中でシュワブがトランプ氏の資金に最も広範囲に関与しているとみられる。
CNBCは同社を少なくとも1億6,300万ドルを保有する口座番号6に関連付けた。ウォール・ストリート・ジャーナルは、シュワブ氏が2番目の口座である口座番号7を管理していると報じた。
同紙によると、口座番号7には約3億200万ドルが保管されており、その開示によれば、2025年には約1万500件の取引が発生しており、これはトランプ大統領が開示した取引のほぼ半分に相当する。それは最も多忙で、Apple、Microsoft、Nvidia の主要なポジションが含まれていました。
シュワブの広報担当マユラ・フーパー氏はCNBCへの声明で、「当社は顧客のプライバシーに関する規制に基づいた厳格なポリシーを持っており、現在または元の顧客についてはコメントしない」と述べた。彼女はアカウント6と7についてはコメントを控えた。「シュワブは、さまざまな背景、所属政党、専門職、立場を超えて4,600万の顧客アカウントにサービスを提供しており、すべての顧客との関係に同じ基準を適用している。」
証券取引委員会の元チーフエコノミスト、ラリー・ハリス氏は、シュワブに関連する両口座の規模と活動は、超富裕層の投資家にとって必ずしも珍しいことではない、と述べた。ハリス氏はCNBCに対し、シュワブがそのようなポートフォリオにとって珍しい選択ではないと語った。
現在、南カリフォルニア大学マーシャル・スクールで金融教授を務めるハリス氏は、「これは大規模なポートフォリオを持つ人々に典型的なことであり、シュワブの方がより安価で、納税時期をより細かく制御できる可能性がある」と述べた。
トランプ大統領の開示はまた、シュワブ氏が自身の信託に5,000万ドルを超える質権資産の融資枠を延長し、信託が有価証券を売却せずに借り入れできるようにしたことも示した。通常、収益を追加の有価証券の購入に使用することはできません。
JPモルガンやキャピタル・ワンなどの他の大手銀行とは異なり、シュワブは1月6日の暴動後にトランプ一家が銀行との関係を断ったとして非難した金融機関には含まれていなかった。
JPモルガンに関連する口座番号8は、トランプ大統領が政治的理由で同銀行を「銀行から切り離した」と非難したのとほぼ同時期に活動していた。
口座番号8は、トランプ大統領の告訴の前日である2025年8月4日に、最大約550万ドル相当の336件の取引を明らかにした。同紙は、トランプ大統領が銀行取引廃止に関する大統領令に署名した8月7日にさらに50件の最大78万5000ドル相当の取引を報告し、12月まで取引の報告を続けた。
CNBC は、各取引の報告された値の範囲に基づいて合計を計算しました。
トランプ氏はその後、JPモルガンとジェイミー・ダイモン最高経営責任者（CEO）に対し、同銀行が政治的理由で同氏と同氏の事業に属する口座を閉鎖し、銀行の「ブラックリスト」に載せたとして、50億ドルを求める訴訟を起こした。 ＪＰモルガンはコメントの要請に応じていないが、これまでに疑惑を否定し、訴訟にはメリットがないと述べた。
この訴訟は係争中であり、裁判所は訴訟をフロリダ州裁判所に差し戻すか、ニューヨークの連邦裁判所に移送するかを検討しているため、公聴会や公判の日程は予定されていない。
JPモルガン、シュワブ、UBS以外の企業も、より狭い役割を担っているようだ。
スティーブンスに関連する口座である口座番号 5 は、銀行掃討プログラムで 100 万ドルから 500 万ドルを保有していた。同じ口座には、スティフェルのFDIC保険付き銀行預金プログラムにも最大6万6001ドルが保管されており、CNBCが相談した専門家らは、この口座がスティフェルのプログラムからスティーブンズ・プログラムのプログラムに移行した際に残された残高と一致すると述べた。
シュティフェル氏はコメントの要請に応じなかった。
トランプ氏が開示した口座のうち4番と8番の2つも、大型株や地方債を含む広範なポートフォリオ内でフィデリティ・ブランドの投資信託を保有していた。
「公開された資料によると、大統領の口座には2つのフィデリティ・ミューチュアルファンドが含まれているようだ」と、この問題について公に話す権限がないため匿名を求めたファンド関係者は述べた。
誰が取引を管理するのか
トランプ大統領は、外部の金融機関が投資決定をコントロールする一方で、家族が信託を監督していると述べた。しかし、同氏は企業名を明らかにしていない。
トランプ大統領は7月2日のCNBCインタビューで「私の子供たちが経営している」と語った。 「私は自分が稼ぐだろうと思っていた以上に莫大な金を稼いだのに、口もきけない人々にその金を投資させている。」
エリック・トランプ氏は5月にXに、金融会社は「資産配分、取引、リバランス、ポートフォリオ管理を含むすべての投資決定に関して唯一かつ独占的な権限」を持っていると書いた。
トランプ・オーガニゼーションの広報担当者はＣＮＢＣに対し、潜在的な利益相反を減らすため、トランプ氏のポートフォリオは富裕層投資家の間で利用が増えている自動投資戦略であるダイレクト・インデックスに大きく依存していると語った。
インデックス ファンドを購入するのではなく、直接インデックス口座には、S&P 500 などのベンチマークを追跡するために選択された個別の株式が保持されます。ソフトウェアは継続的に保有株を売買し、リバランスして、ポートフォリオをインデックスと一致させます。
元SECチーフエコノミストのハリス氏は、「これはコンピューター主導の取引だ」と述べた。
このアプローチでは、価格変動により保有株のバランスを調整したり、投資家の税金を減らすために減価した株式を売却したりする機会が増えるため、市場が不安定なときに大量の取引が発生する可能性があります。
例えば、トランプ大統領の情報開示は、主要な関税ニュースを中心に購入の波が起きていることを示している。 2025年4月2日、トランプ大統領は大幅な関税を発表し、株価は急落した。同氏は先週、大幅な新たな関税制度を導入したものの、1週間後にその大半を停止し、市場を急騰させた。
CNBCは、関税決定を見越したものも含め、トランプ大統領またはその家族が個別の取引を指示したという証拠は見つからなかった。
「プロセスに関与する信頼できる受託者がいることを考えると、そのような組織でゲームが行われる可能性は非常に低い。想像するのはほとんど不可能だ」とハリス氏は語った。
直接インデックスは、税損失の回収を通じて投資家の税額を下げることもできます。ある銘柄が下落した場合、ソフトウェアはその銘柄を売却して損失を補い、ポートフォリオのより広範な市場エクスポージャーを維持する別の銘柄を購入することができます。これらの損失は、ポートフォリオ内の他の場所でのキャピタルゲインを相殺することができます。
規則と規制
連邦倫理規則は、大統領が在任中にブラインドトラストを利用して保有株を管理する場合、独立した受託者によって管理され、保有株に関する受益者とのコミュニケーションを厳しく制限することを義務付けている。
対照的に、SECへの提出書類によると、トランプ氏の富の多くは取り消し可能な信託に残されており、その唯一の受益者がトランプ氏である。 SECへの提出書類によると、ドナルド・トランプ・ジュニアは管財人を務めており、特定の資産について単独の議決権を保有している。取消可能な信託は通常、受託者の交代や受益者の変更などにより修正したり、設立者によって解散したりすることができます。
政府倫理局によると、トランプ氏を除くジミー・カーター氏からジョー・バイデン氏までのすべての大統領は、ブラインドトラストを設立するか、分散投資信託など一般に紛争を引き起こす可能性が低いと考えられる資産に投資を限定していた。バイデン氏の開示では個別株の保有は示されていない。
公的記録には、トランプ大統領が信託を修正または取り消す権限を行使したかどうかは示されていない。
デルストン氏は、個人取引の管理と最終的な所有権との間にあるギャップが、トランプ氏の資金を管理する金融機関のコンプライアンスと評判のリスクも生み出していると述べた。
同氏は、「同氏を取引している銀行は、徴収できる手数料や関係上のその他の利点の理由から、同氏が運んでくるトラック一杯分の荷物はすべてまだ価値があると計算している」と述べた。
デルストン氏によると、銀行はほとんどの場合、現職大統領を内部リスク枠組みの下で「政治的に暴露された人物」（PEP）として扱う。なぜなら、大統領職は汚職やマネーロンダリングの危険が高まる可能性があるからである。
「PEP には、新人研修段階と活動の監視を通じて定期的に監視が強化されることが期待されています」とデルストン氏は述べた。
連邦マネーロンダリング防止規則に基づき、銀行は関係の目的を理解し、通常どのような活動が予想されるべきかを理解し、リスクプロファイルを作成し、不審な取引を監視する必要がある。
デルストン氏によると、トランプ大統領のような顧客にとって、それは電信送金、小切手、証券取引、その他の取引を同時に審査して、不審行為の懸念を引き起こすかどうかを判断することを意味する可能性があるという。
「疑わしい活動が関与しているかどうかを判断するだけではない」とデルストン氏は語った。 「彼の口座はどの金融機関でもリアルタイムで監視する必要があるでしょう。」
このレベルの精査には、コンプライアンス担当者、テクノロジー、弁護士、外部アドバイザーへの追加支出が必要になる可能性があります。現職大統領に仕える銀行は、その関係が政権との取引に影響を与える可能性があるかどうかをめぐる国民の監視など、評判や政治的なリスクにも直面している。
CNBCは、企業がトランプ氏の口座からどれだけ稼いだのかを特定できなかった。
「銀行はリスクの一部を補うために、大統領のような人物に何をするにも高額な手数料を請求する」とデルストン氏は語った。 「手数料がこれまでに十分に高いかどうかは不明です。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/trump-banking-investments-jpmorgan-schwab-ubs-financial-disclosure.html",
    publishedAt: "2026-07-29T14:03:23+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "is-ai-facing-a-big-financial-reckoning-f0f610c7",
    title: "Is AI facing a big financial reckoning?",
    titleJa: "AI は大きな財政的清算に直面しているでしょうか?",
    summaryJa: "AI は大きな財政的清算に直面しているでしょうか?- 公開されました",
    bodyOriginal: `Is AI facing a big financial reckoning?
- Published
Sharp falls in the value of chip makers have stoked investor concerns that the euphoria around AI related companies is fading.
Shares in Korean chip makers SK Hynix and Samsung are down 46% and 35% respectively over the last month as investors worry the recent boom in demand for the chips that power AI is unsustainable.
The South Korean stock market is notoriously volatile, but concerns have spilled over into the big US companies with Micron and Intel which have seen falls of 28% and 35% since last month.
"The AI bubble hasn't burst but it's letting out air," leading tech investor Eileen Burbidge told the BBC, as a number of factors in different parts of the AI ecosystem are darkening the mood.
China breakthrough
One of the triggers for the recent falls was a reported breakthrough in the chip manufacturing process by a Chinese company, potentially making China more self-sufficient in chip design and production.
That has added to lingering concerns that the big AI companies – Meta, Alphabet, Open AI, Anthropic – will find it hard to charge end users enough to justify the hundreds of billions being spent on buying the chips and building the data centres that power the technology.
While increased spending on AI has historically been welcomed by investors in the so called hyperscalers, dialling up the spending has recently not been met with the former enthusiasm.
Meta shares are down 15% over the last month, while SpaceX – which is predominantly an AI company - has seen its shares fall 14% from its much-hyped IPO debut and nearly 50% from its peak in June.
Meanwhile Apple – which has largely sat out the AI arms race – has seen its shares rise 21% over the last month to reclaim its title as the world's most valuable company from chip maker Nvidia.
London's benchmark FTSE 100 index, which does not contain any major tech companies, also briefly touched a record high on Wednesday morning - one of the few periods where it has benefited from not being tech-heavy.
Growing concerns about AI
Some have likened the transformative potential of AI to the introduction of electricity or the railways. While it is true that the railroads transformed economies – particularly of the US – plenty of people lost money along the way. Unlike rail tracks – which once built are good for decades – data centres are likely to need upgrading frequently to include the latest and fastest processors.
Add to that lot, concerns that some of the big AI companies have taken big stakes or lent money to each other leading to circular funding that means that any potential failures could have a damaging impact on the fortunes of others.
There is also increasing cultural opposition to the build out and adoption of AI.
A growing number of national, state or local governments are pausing, banning or restricting new data centre construction on environmental grounds thanks to their vast water and energy needs.
Meanwhile, high profile AI advocates have found themselves booed by students who fear that AI will replace many graduate level jobs.
Despite all of that, Eileen Burbidge is still positive. "I see the glass half full - if you bought shares in chip makers a year ago you are feeling pretty good right now."
Shares in Samsung and SK Hynix are up threefold and fivefold respectively over the last year, leading many to conclude that caution and profit taking after such massive gains was inevitable – and indeed healthy.
But there is no doubt that investors are watching companies plans for spending and their projections for when they get paid back with post euphoric scrutiny.
Related topics
- Published1 day ago
- Published2 days ago`,
    bodyJa: `AI は大きな財政的清算に直面しているでしょうか?
- 公開されました
チップメーカーの株価急落で、AI関連企業をめぐる高揚感が薄れつつあるのではないかと投資家の懸念が高まっている。
AIを駆動するチップに対する最近の需要ブームが持続不可能であると投資家が懸念しているため、韓国のチップメーカーSKハイニックスとサムスンの株価は先月でそれぞれ46％と35％下落した。
韓国の株式市場は不安定なことで有名だが、その懸念はマイクロンやインテルなどの米国大手企業にも波及し、先月以来２８％と３５％下落した。
AIエコシステムのさまざまな部分にある多くの要因が雰囲気を暗くしているとして、有力ハイテク投資家のアイリーン・バービッジ氏はBBCに対し、「AIバブルは崩壊していないが、空気が漏れてきている」と語った。
中国の躍進
最近の下落の引き金の一つは、中国企業によるチップ製造プロセスの画期的な進歩が報告されており、これにより中国のチップ設計と生産の自給自足がさらに進む可能性がある。
このため、メタ、アルファベット、オープンAI、アンスロピックなどの大手AI企業は、チップの購入とテクノロジーを動かすデータセンターの建設に費やした数千億ドルを正当化できるほどの料金をエンドユーザーに請求するのが難しいのではないかという懸念が根強く残っている。
AIへの支出の増加は歴史的に、いわゆるハイパースケーラーの投資家に歓迎されてきたが、最近では支出の増加は以前のような熱意を持って迎えられていない。
メタ株は先月で15％下落し、主にAI企業であるスペースXの株価は、大々的に宣伝されたIPOデビューから14％下落し、6月のピークからは50％近く下落した。
一方、AI軍拡競争からほぼ撤退してきたAppleは、先月株価が21%上昇し、チップメーカーのNvidiaから世界で最も価値のある企業の座を取り戻した。
大手ハイテク企業が含まれていないロンドンのベンチマークFTSE100指数も水曜朝に一時過去最高値を更新したが、これはハイテク株に偏っていないことで恩恵を受けた数少ない期間の一つだ。
AIに対する懸念の高まり
AI の変革の可能性を電気や鉄道の導入に喩える人もいます。鉄道が経済、特に米国の経済を変えたのは事実ですが、その過程で多くの人がお金を失いました。一度建設されれば何十年も使用できる鉄道線路とは異なり、データセンターは最新かつ最速のプロセッサを搭載するために頻繁にアップグレードする必要がある可能性があります。
それに加えて、一部の大手 AI 企業が多額の株式を取得したり、相互に資金を貸し付けたりして循環資金調達につながっているのではないかという懸念もある。これは、潜在的な失敗が他の企業の運命に悪影響を与える可能性があることを意味している。
AI の構築と導入に対する文化的な反対も増えています。
膨大な水とエネルギーの需要のため、環境上の理由から新しいデータセンターの建設を一時停止、禁止、または制限する国、州、地方自治体が増えています。
一方、知名度の高いAI支持者らは、大学院レベルの仕事の多くがAIに取って代わられるのではないかと懸念する学生らからブーイングを受けていることに気づいた。
それにもかかわらず、アイリーン・バービッジは依然として前向きです。 「ガラスが半分も埋まっているのがわかります。1年前にチップメーカーの株を買った人なら、今はかなり良い気分だと思います。」
サムスンとSKハイニックスの株価は昨年、それぞれ3倍と5倍に上昇しており、このような大幅な上昇後の警戒と利益確定は避けられず、実際に健全であると多くの人が結論づけている。
しかし、投資家が企業の支出計画と、陶酔後の精査を受けていつ返済されるかという予測に注目していることは間違いない。
関連トピック
- 1 日前に公開
- 2 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cevm09wkgz0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T13:49:55+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3471/live/5f73f4d0-8b52-11f1-8139-b39d1c7486b2.jpg",
    readTime: 4,
  },
  {
    id: "humana-tops-quarterly-estimates-maintain-6d567fff",
    title: "Humana tops quarterly estimates, maintains profit outlook as medical costs stay in line",
    titleJa: "ヒューマナは四半期予想を上回り、医療費が横ばいのため利益見通しを維持",
    summaryJa: "ヒューマナは水曜日、医療保険会社の医療サービスへの支出が予想と一致したため、予想を上回る第2四半期の結果を報告した。同社はまた、2026年の調整後利益見通しを1株当たり9ドル以上と据え置いた。",
    bodyOriginal: `Humana on Wednesday reported second-quarter results that topped estimates, as the health insurer's spending on medical services came in line with expectations.
The company also maintained its 2026 adjusted profit outlook of at least $9 per share.
The earnings beat was driven by strength across Humana's insurance business and CenterWell healthcare services unit, Humana CFO Celeste Mellet said in an interview. She said medical and pharmacy cost trends tracked in line with Humana's expectations across new and existing members. The company saw "slight favorability" in medical costs in the inpatient space, particularly among members receiving care from value-based providers, she added.
Still, in a Wednesday note, Cantor Fitzgerald analysts called the unchanged profit outlook a "disappointment" after recent earnings beats and guidance raises seen by other insurers overseeing privately run Medicare Advantage plans. Investors have been ratcheting up their expectations for the industry as some companies hike their outlooks and get a better handle on rising medical costs in those plans – an issue that has been dogging the broader sector for more than two years.
Shares of Humana fell more than 4% in premarket trading despite the solid quarter. The company is one of the largest Medicare Advantage providers serving people aged 65 and older as well as people with disabilities.
Here's what the company reported for the second quarter compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: $7.61 adjusted vs. $7.22 expected
- Revenue: $40.87 billion vs. $40.61 billion expected
The company posted second-quarter net income of $694 million, or $5.73 per share, compared with $545 million, or $4.51 per share, in the same period a year ago. Excluding items like amortization and impairment charges, Humana earned $7.61 per share.
Revenue climbed to $40.87 billion from $32.39 billion in the prior-year quarter. The company's insurer and Centerwell unit both topped analysts' sales estimates for the quarter, according to StreetAccount.
Insurers, particularly those that run Medicare Advantage plans, have been pinched by an influx of people seeking care they delayed post-pandemic and high-cost specialty drugs like GLP-1s, among other factors.
But Humana's medical benefit ratio — a measure of total medical expenses paid relative to premiums collected — came in at 91.2% for the second quarter, which is in line with what analysts were expecting. Mellet said the ratio also matched the company's expectations for the quarter across both new and current members.
"I think that it's a combination of just [medical cost] trend stabilizing and then our actions as well to help drive better health outcomes for our members and our patients," Mellet said.
Still, the ratio is slightly higher than the 89.9% reported in the year-earlier period. A lower ratio typically indicates that the company collected more in premiums than it paid out in benefits, resulting in higher profitability.
Mellet said medical cost expectations for next year are "fairly consistent." The company is watching to see if services such as inpatient admissions will continue to decline this year, but she said "at this point, we call medical costs more stable."
Meanwhile, pharmacy medical cost trends remain "very elevated," driven by drug prices and the launch of new medicines, Mellet noted. She said those costs will be slightly higher next year compared to 2026, but added that it's a broader drug cost issue, not a question of member demand.
Mellet said Humana expects changes to its 2027 Medicare Advantage plans to help improve profitability and put the company on track to reach a sustainable pretax margin of at least 3% by 2028. She said the insurer also remains confident in its ability to boost earnings by expanding membership, improving the quality ratings of its Medicare Advantage plans, maintaining pricing discipline and controlling costs.`,
    bodyJa: `ヒューマナは水曜日、医療保険会社の医療サービスへの支出が予想と一致したため、予想を上回る第2四半期の結果を報告した。
同社はまた、2026年の調整後利益見通しを1株当たり9ドル以上と据え置いた。
ヒューマナの最高財務責任者セレステ・メレット氏はインタビューで、利益の伸びはヒューマナの保険事業とセンターウェル・ヘルスケア・サービス部門全体の好調によってもたらされたと述べた。同氏は、医療費と薬局費の傾向は、新規および既存の会員全体にわたってヒューマナの期待に沿って推移していると述べた。同社は、特に価値ベースの医療提供者から治療を受けている会員の間で、入院患者分野の医療費が「若干有利」であると見ていると同氏は付け加えた。
それでも、キャンター・フィッツジェラルドのアナリストらは水曜日のメモで、最近の利益が上回ったり、民営のメディケア・アドバンテージプランを監督する他の保険会社が見込んだガイダンスの引き上げを受けて、利益見通しの据え置きは「失望」であると述べた。一部の企業が見通しを上方修正し、その計画で医療費の増加にうまく対処できるようになる中、投資家は業界に対する期待を徐々に高めているが、この問題は業界全体を2年以上悩ませている。
ヒューマナの株価は好調な四半期にもかかわらず、市場前の取引で４％以上下落した。同社は、65 歳以上の人々や障害のある人々にサービスを提供する最大のメディケア アドバンテージ プロバイダーの 1 つです。
LSEGによるアナリスト調査に基づく、同社の第2四半期の報告とウォール街の予想を比較したものは以下の通りだ。
- 1 株当たり利益: 調整後 7.61 ドル、予想 7.22 ドル
- 収益: 408.7億ドル対予想406.1億ドル
同社の第2四半期純利益は6億9,400万ドル（1株あたり5.73ドル）で、前年同期は5億4,500万ドル（1株あたり4.51ドル）でした。償却費や減損費用などの項目を除くと、ヒューマナは1株あたり7.61ドルの利益を上げた。
売上高は前年同期の323億9000万ドルから408億7000万ドルに増加した。ストリートアカウントによると、同社の保険会社とセンターウェル部門はいずれもアナリストの同四半期売上高予想を上回った。
保険会社、特にメディケア・アドバンテージプランを運営する保険会社は、パンデミック後に遅れた治療を求める人々の殺到や、GLP-1などの高額な専門薬などの影響で窮地に陥っている。
しかし、第2四半期のヒューマナの医療給付率（徴収した保険料に対して支払われた医療費の総額を示す指標）は91.2％となり、アナリストの予想と一致した。メレット氏は、この比率は新規会員と既存会員の両方について、同社の同四半期の予想と一致していると述べた。
「これは、（医療費の）傾向の安定化と、会員と患者の健康状態の向上を促進するための私たちの行動の組み合わせだと思います」とメレット氏は語った。
それでも、この比率は前年同期の 89.9% よりわずかに高くなります。通常、比率が低いということは、企業が給付金として支払った額よりも多くの保険料を徴収しており、その結果、収益性が高いことを示しています。
メレット氏は、来年の医療費予想は「かなり一貫している」と述べた。同社は今年も入院などのサービスが減少し続けるかどうかに注目しているが、「現時点では医療費はより安定していると言える」と述べた。
一方、薬局の医療費傾向は、薬価と新薬の発売によって依然として「非常に上昇している」とメレット氏は指摘した。同氏は、来年のこれらの費用は2026年と比較して若干高くなるだろうと述べたが、これはより広範な薬剤費の問題であり、会員の需要の問題ではないと付け加えた。
メレット氏は、ヒューマナは2027年のメディケア・アドバンテージ計画の変更により収益性が向上し、2028年までに持続可能な税引き前利益率少なくとも3％に達する軌道に乗せられると期待していると述べた。同保険会社はまた、会員拡大、メディケア・アドバンテージ計画の品質評価の向上、価格設定規律の維持、コスト管理によって収益を押し上げる能力にも引き続き自信を持っていると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/humana-hum-earnings-q2-2026.html",
    publishedAt: "2026-07-29T13:23:20+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "nike-was-once-china-s-sneaker-king-here-9d61b297",
    title: "Nike was once China's sneaker king. Here's why its sales have fallen 30%",
    titleJa: "ナイキはかつて中国のスニーカー王でした。売上が30%減少した理由はここにある",
    summaryJa: "どう考えても、ナイキの中国事業は全力で取り組んでいるはずだ。スポーツ関連製品は中国で最も急速に成長している消費者カテゴリーであり、スポーツや運動への参加はここ数十年で最高レベルにあります。 GlobalData によると、スポーツウェア市場全体は、健康的な生活への新たな注目により、過去 5 年間で 51% 急成長しました。",
    bodyOriginal: `By all accounts, Nike's business in China should be firing on all cylinders.
Sports-related products are the fastest growing consumer category in China and participation in sports and exercise is at its highest level in decades. The overall sportswear market has ballooned 51% in the past five years, fueled by a new focus on healthy living, according to GlobalData.
But instead of thriving during China's sports renaissance, Nike's business in the region is languishing. Sales have fallen from the prior year eight quarters in a row, and the overall business has shrunk 30% since 2021, with annual revenue hitting its lowest level in eight years at the end of May.
China was once Nike's fastest-growing region, beloved by investors for its high margins and potential for sustained growth. Now, it's the company's smallest market and has become a drain on a global turnaround that some on Wall Street believe is taking too long.
Some U.S. analysts expect Nike's China business to recover once its North America operations stabilize, but experts on the ground told CNBC its challenges in the region are deeper, and far different, from what it faces at home. Young Chinese shoppers are increasingly choosing domestic brands over expensive foreign names as part of a larger "China Chic" movement, and consumers are hungry for a localized assortment — not the same product that's being replicated from Utah to Shanghai. Nike is also working to overhaul its distribution model in China, which critics say has become messy, overly complex and driven by discounts.
"In a way, Nike has just become irrelevant," said Yaling Jiang, the founder of consumer research firm ApertureChina and an expert on the Chinese consumer. "I don't think young people can remember what's the last new thing they've done. But if you mention Adidas to them, they will tell you about … their pet clothes, pet jerseys, or their China jackets."
During its most recent earnings call, Nike's outgoing finance chief Matt Friend couldn't say when the China business would return to growth, telling analysts that revenue trends in the near term "will be in line" with recent performance and "profitability will bottom before sales."
In January, Nike CEO Elliott Hill announced Cathy Sparks, a 25-year Nike veteran, would become the next vice president and general manager of Greater China, reporting directly to him.
In an interview with CNBC, she said Nike is taking the steps it needs to reconnect with Chinese consumers.
"The one thing that I have certainly learned over the last six months is that the Chinese consumer has changed and they have high standards for what they want through product connections, engagement with the brand," said Sparks. "We know that if we can design footwear and apparel, lifestyle or performance, that's specifically targeted towards the unique needs of Chinese consumers, we'll drive full price revenue."
A Nike spokesperson pushed back on the idea that the company has lost relevance in the region and said what's changed is younger shoppers are looking for "hyperlocal connections," including through events and broader cultural moments.
"Nike has been in China for more than 40 years, and from day one, our approach has been to start with local consumer insight and turn that insight into inspiration, innovation and storytelling that can spark movement," the spokesperson said.
How 'China Chic' changed the sneaker market
When Nike turned to China as its next major growth market in the mid-2000s, it won by largely replicating its global strategy and betting that popular clothes and shoes in the Western world would also land with Chinese shoppers.
For a time, the bet was right.
"The premium brand at the time that was available was Nike. Nike was just clearly better. They had cooler designs. They were more expensive. There was more brand cache," said a retail consultant based in Shanghai who advises domestic and international brands, including Deckers and Adidas, and asked not to be named to protect client relationships.
"If you go back to the early 2000s, if consumers had some money to spend, they were really quite image conscious. They wanted to show that they had whatever the nice thing was and at the time, Nike was it."
By the end of fiscal 2021, Nike's annual revenue in China hit an all time high of $8.29 billion. But in the backdrop, the tide was starting to shift against Western brands.
In March 2021, a previous statement Nike made saying it was "concerned" about reports of forced labor in the Xinjiang region resurfaced, leading some Chinese consumers to call for a nationwide boycott and post videos online of them burning their sneakers. Popular Chinese actor Wang Yibo terminated his contract as a representative for Nike as domestic competitors Anta and Li-Ning doubled down on their use of Xinjiang cotton, using the conflict as a nationalistic marketing opportunity.
The controversy, which also impacted other Western brands that put out similar messaging, helped supercharge a political campaign that Chinese President Xi Jinping started years earlier called Guochao, or "China Chic" in English. It was designed to drum up pride in Chinese made and designed products and promote domestic brands over international ones.
"In line with the period of 2010 to just before Covid, people did feel like maybe they were inferior if they wear Chinese brands … but the elevating cultural confidence campaign really shifted that mindset," Jiang said. "What this political campaign does is it also encouraged a lot of e-commerce platforms, including Alibaba's Taobao, Tmall and JD.com, to have a separate section just for the China Chic brands and … people started adopting this China Chic mindset and started feeling like owning something from your own culture is cooler than owning foreign brand."
Now, many younger consumers feel more connected to domestic brands like Anta and Li-Ning over premium, foreign brands like Nike, said Tracy Dai, the director of operations at consulting firm China Skinny, which helps overseas companies enter China or expand there.
"Years ago when you're talking to a high school boy asking which sports shoes you may want, they probably say Nike or Adidas, but right now if you ask them, they say Anta or Li-Ning," Dai said. "[Nike] probably is not that cool to them anymore."
A Nike spokesperson said all brands in China are facing intense competition and a "more demanding consumer environment" and it believes its efforts to reset the region "put us on the right path to win back consumers."
Beyond nationalism, Nike's decline in China is also about value.
In the 20 years since Nike started supercharging its expansion in China, domestic brands have gotten better at production, marketing and brand building.
At the same time, Chinese consumers have become more practical and selective, prioritizing value and innovation over branding, said Wei Kan, who spent around 15 years at Nike and Converse in China and Taiwan before starting his own brand consultancy firm Conduit Asia. As shoppers become more involved with sports and niche fitness activities, highly technical products are becoming more popular than Nike's assortment.
"Nike is still more like a global, generalist brand at this moment. At the same time, a lot of products, the innovation pipeline is actually slower than the local brands and also the competitors," said Kan. "Chinese consumers are very sophisticated compared with like five or 10 years ago ... it all goes back to how the consumer perceives what kind of value they want to get from a shoe."
Nanjing styles via Portland, Oregon
While domestic brands have become major market leaders in China, some international brands are still winning, too. Lululemon's comparable sales, which exclude new store openings, grew 20% in China in fiscal 2025, while Adidas brand revenue grew 13% in the region during the same period.
Similar to Nike, Adidas had seen its business dramatically slow in China, but it's now growing again after the company shifted its focus to local product creation, decentralized decision-making and empowered local teams.
For example, Adidas's local team designed and released its mega-viral Chinese Track Top jacket earlier this year in celebration of the Chinese New Year. The jacket sold out within 27 minutes and became a global phenomenon, with some on social media saying they flew to China specifically to buy the item or spent hundreds to snag one through reseller sites like StockX.
It's also nailing local marketing. Recently, Adidas botched a translation on its website in the product description for a jacket and ended up becoming a viral meme. Rather than ignoring the meme, it created a T-shirt with the mistranslation on the front, Jiang said.
Meanwhile, experts said Nike has struggled to create the same kind of localized products and marketing. During the World Cup, its marketing campaigns came off as similar to what it was doing a decade ago, said Jiang.
Part of the issue is that the Greater China team gets limited autonomy to release products and campaigns quickly without oversight from the corporate office in Portland, analysts said.
"So everything, especially in terms of design, everything is actually coming from global," said Kan, who worked in marketing and branding for Nike and Converse in the region before leaving the company in November 2024. "There are very limited room for the local teams to build and also design the locally relevant products to the consumers. I think that is actually the biggest issue for the Chinese consumers here."
When asked about Nike's decision-making being concentrated at its headquarters, Sparks said the characterization was "not unfair" but added there is "nobody checking any of this work telling us yes or no."
"I have felt from the moment I've landed in China that our local team has full autonomy to do what we need. Of course, working within the guardrails that are brand right," said Sparks. "I'm seeing that come to action with the marketing that we've put out. We are localizing retail concepts. The product design that you're gonna see from this team is really authentically Chinese, very relevant."
Last week, Sparks announced the company had hired its first-ever Greater China vice president of local product creation, who will be focused on building an assortment that's designed, developed and made in China for Chinese shoppers.
The company plans to start with two lifestyle capsules — one for Nike sportswear and one for Jordan streetwear — that'll be ready in time for the holidays, followed later by performance apparel and footwear.
"We'll be doing this over the next 18 months, bringing all these new capabilities on board so that we can complement global innovation with local innovation needs, styling needs, fit needs, even color, which can be unique in China," said Sparks.
Why Nike is resetting China distribution
Marketing and localization aside, Nike's China distribution model has become a complex web that Sparks is now working to unwind after the company allowed its brick-and-mortar distributors to start selling online during the Covid-19 pandemic even though their distribution agreements didn't include digital.
"What we didn't do was reset that coming out of Covid as consumers returned to brick and mortar," said Sparks. "And because of that, it just created this incredibly fragmented marketplace where the consumer journey became really messy. Our ability to tell clear innovation stories, nearly impossible."
Sparks said the decision to shut down those online storefronts is necessary to repair Nike's China business, but BNP Paribas equity analyst Laurent Vasilescu estimates the change could reduce the company's revenue by as much as $1 billion annually, representing about 17% of total sales in the region.
In response, Sparks said the change means some distribution will inevitably go away but "we believe we'll be able to replace total value with full-price sales and a more premium experience."
"We actually believe it is critical. If we don't reset is where the long-term impact will continue to slide in a direction that we don't want to see," said Sparks. "We don't actually believe that we will have a long-term negative impact. We think it'll be stronger."`,
    bodyJa: `どう考えても、ナイキの中国事業は全力で取り組んでいるはずだ。
スポーツ関連製品は中国で最も急速に成長している消費者カテゴリーであり、スポーツや運動への参加はここ数十年で最高レベルにあります。 GlobalData によると、スポーツウェア市場全体は、健康的な生活への新たな注目により、過去 5 年間で 51% 急成長しました。
しかし、中国のスポーツルネッサンス期に繁栄するどころか、この地域におけるナイキのビジネスは低迷している。売上高は8四半期連続で前年比で減少し、事業全体は2021年以降30％縮小し、5月末には年間売上高が8年ぶりの最低水準に達した。
中国はかつてナイキにとって最も急成長している地域であり、その高い利益率と持続的な成長の可能性が投資家に愛されていた。現在、それは同社にとって最小の市場であり、ウォール街の一部の人たちは、時間がかかりすぎると信じている世界的な再生の消耗品となっている。
一部の米国アナリストは、北米事業が安定すればナイキの中国事業は回復すると予想しているが、現地の専門家らはCNBCに対し、この地域における課題はより深く、国内で直面しているものとは大きく異なると語った。より大規模な「チャイナ・シック」運動の一環として、中国の若い買い物客は高価な外国ブランドではなく国内ブランドを選ぶことが増えており、消費者はユタ州から上海まで複製されている同じ商品ではなく、地域に合わせた品揃えを求めている。ナイキはまた、中国での流通モデルの見直しにも取り組んでいるが、批評家らは、この流通モデルは乱雑で過度に複雑になり、値引きに押されていると指摘している。
消費者調査会社アパチュアチャイナの創設者で中国消費者専門家のヤリン・ジャン氏は、「ある意味、ナイキは無関係になってしまった」と語る。 「若い人たちは、最後にやった新しいことは何だったのか思い出せないと思います。しかし、もしあなたがアディダスについて話すと、彼らはペットの服、ペットのジャージ、またはチャイナジャケットについて話すでしょう。」
ナイキの退任財務責任者マット・フレンド氏は最近の決算会見で、中国事業がいつ成長に戻るかについては明言できず、アナリストに対し、短期的な収益傾向は最近の業績と「一致するだろう」とし、「売上高の前に収益性は底を打つだろう」と語った。
1月、ナイキの最高経営責任者（CEO）エリオット・ヒルは、ナイキに25年間勤務したベテランのキャシー・スパークス氏が次期副社長兼中華圏ゼネラルマネージャーに就任し、自身の直属となることを発表した。
CNBCとのインタビューで彼女は、ナイキが中国の消費者と再びつながるために必要な措置を講じていると述べた。
「この半年で私が確かに学んだことの一つは、中国の消費者は変化しており、彼らは製品とのつながりやブランドとの関わりを通じて、求めるものに対して高い基準を持っているということです」とスパークス氏は語った。 「中国の消費者の固有のニーズを特にターゲットにした履物やアパレル、ライフスタイルやパフォーマンスをデザインできれば、フルプライスでの収益を促進できることを私たちは知っています。」
ナイキの広報担当者は、同社がこの地域での関連性を失っているという考えを否定し、変化したのは若い買い物客がイベントやより広範な文化的瞬間を含む「超ローカルなつながり」を求めていることだと述べた。
「ナイキは中国に40年以上進出しており、設立当初から私たちのアプローチは地元の消費者の洞察から始まり、その洞察をインスピレーション、イノベーション、そして運動を引き起こすストーリーテリングに変えることでした」と広報担当者は述べた。
「チャイナシック」はスニーカー市場をどう変えたのか
2000年代半ばにナイキが次の主要な成長市場として中国に目を向けたとき、ナイキはその世界戦略をほぼ再現し、西側世界で人気の衣類や靴が中国人の買い物客にも届くと賭けて勝利した。
しばらくの間、その賭けは正しかった。
「当時販売されていた高級ブランドはナイキだった。ナイキの方が明らかに優れていた。デザインもクールで、価格も高かった。ブランドのキャッシュが多かった」と上海を拠点にデッカーズやアディダスなど国内外のブランドにアドバイスをしている小売コンサルタントは述べ、顧客との関係を守るため匿名を求めた。
「2000年代初頭に戻ると、消費者はお金に余裕があれば、本当にイメージに敏感でした。彼らは良いものは何でも持っているということを示したかったのですが、当時はそれがナイキでした。」
2021年度末までに、ナイキの中国における年間収益は82億9000万ドルと過去最高を記録した。しかしその背景では、欧米ブランドに対する風向きが変わり始めていた。
2021年3月、ナイキが新疆ウイグル自治区での強制労働に関する報道を「懸念している」と述べた以前の声明が再浮上し、一部の中国消費者が全国的なボイコットを呼びかけ、スニーカーを燃やす動画をネットに投稿する事態につながった。中国の人気俳優、王一博は、国内競合企業の安踏と李寧が紛争を民族主義的なマーケティングの機会として新疆綿の使用を倍増させる中、ナイキの代表者としての契約を解除した。
この論争は、同様のメッセージを発信する他の西側ブランドにも影響を与え、中国の習近平国家主席が数年前に始めた「国超」（英語で「チャイナ・シック」）と呼ばれる政治キャンペーンを激化させるのに一役買った。これは、中国で製造および設計された製品に対する誇りを高め、国際ブランドではなく国内ブランドを宣伝することを目的として設計されました。
「2010年から新型コロナウイルス感染症の直前までの時期と同様に、人々は中国のブランドを着ていると自分が劣っているのではないかと感じていました…しかし、文化的信頼の高まりにより、その考え方は大きく変わりました」とジャン氏は語った。 「この政治キャンペーンの効果は、アリババのタオバオ、天猫、京東商事（JD.com）を含む多くの電子商取引プラットフォームに、チャイナシックブランド専用の別個のセクションを設けるよう奨励したことでもある。人々はこのチャイナシックの考え方を採用し始め、外国のブランドを所有するよりも自分の文化からのものを所有する方がクールであると感じ始めた。」
海外企業の中国進出や中国進出を支援するコンサルティング会社チャイナ・スキニーのオペレーションディレクター、トレイシー・ダイ氏によると、現在、多くの若い消費者はナイキなどのプレミアムな海外ブランドよりも、安踏や李寧などの国内ブランドに親近感を抱いているという。
「数年前、男子高校生にどのスポーツシューズが欲しいかと尋ねると、おそらくナイキかアディダスと答えるでしょうが、今では、尋ねると安踏か李寧と答えるでしょう」とダイ氏は語った。 「彼らにとって（ナイキは）もうそれほどクールではないのでしょう。」
ナイキの広報担当者は、中国のすべてのブランドが熾烈な競争と「より厳しい消費者環境」に直面しており、この地域をリセットする取り組みが「消費者を取り戻すための正しい道に進む」と信じていると述べた。
ナショナリズムを超えて、中国におけるナイキの凋落は価値観にも関係している。
ナイキが中国での拡大を強化し始めてから 20 年間で、国内ブランドは生産、マーケティング、ブランド構築においてより優れたものになりました。
同時に、中国の消費者はより現実的かつ選択的になり、ブランディングよりも価値とイノベーションを優先するようになった、とウェイ・カン氏は語る。彼は自身のブランドコンサルティング会社コンデュイット・アジアを立ち上げるまで、中国と台湾のナイキとコンバースで約15年間勤務していた。買い物客がスポーツやニッチなフィットネス活動に関心を持つようになるにつれ、ナイキの品揃えよりも高度な技術を備えた製品の人気が高まっています。
「現時点では、ナイキは依然としてグローバルでゼネラリストのブランドに近い。同時に、多くの製品、イノベーションのパイプラインは地元ブランドや競合他社よりも実際に遅れている」とカン氏は述べ、「中国の消費者は5年、10年前と比べて非常に洗練されている…すべては、消費者が靴からどのような価値を求めているかをどのように認識しているかに遡る。」と語った。
オレゴン州ポートランド経由の南京スタイル
国内ブランドが中国市場の主要なリーダーとなっている一方で、一部の国際ブランドも依然として勝利を収めています。新規出店を除いたルルレモンの比較売上高は、2025年度に中国で20％増加し、同地域のアディダスブランドの収益は同期間に13％増加した。
ナイキと同様に、アディダスも中国での事業が劇的に減速していたが、同社が現地での製品づくり、分散型の意思決定、現地チームの権限強化に焦点を移したことで、現在は再び成長しつつある。
たとえば、アディダスの地元チームは、今年初めに中国の旧正月を祝って、大ヒットしたチャイニーズ トラック トップ ジャケットをデザインし、発売しました。このジャケットは27分以内に完売し、世界的な現象となり、ソーシャルメディアでは、この商品を買うためにわざわざ中国に飛んだ人や、StockXなどの再販サイトで購入するのに数百ドルを費やした人もいたという。
ローカルマーケティングにも効果を発揮します。最近、アディダスはウェブサイト上のジャケットの製品説明文の翻訳に失敗し、最終的にバイラルミームとなった。このミームを無視するのではなく、誤訳を前面に描いたTシャツを作成したとジャン氏は語った。
一方、専門家らは、ナイキも同様のローカライズされた製品やマーケティングを生み出すのに苦労していると述べた。ワールドカップ期間中、同社のマーケティングキャンペーンは10年前と同じような結果になったとジャン氏は語った。
アナリストらによると、問題の一部は、ポートランドにある本社の監督なしに製品やキャンペーンを迅速にリリースするための中華圏チームの自主性が限られていることだという。
2024年11月に同社を退職するまで、この地域でナイキとコンバースのマーケティングとブランディングに携わっていたカン氏は、「つまり、すべて、特にデザインの点で、実際にはすべてが世界から来ている」と述べ、「地元のチームが地元に関連した製品を作り、消費者向けにデザインする余地は非常に限られている。それが実際、中国の消費者にとって最大の問題だと思う」と語った。
ナイキの意思決定が本社に集中していることについて質問されたスパークス氏は、この評価は「不公平ではない」としながらも、「この取り組みをチェックしている人は誰もイエスかノーかを教えてくれない」と付け加えた。
「中国に到着した瞬間から、私たちの現地チームには必要なことを行うための完全な自主性があると感じました。もちろん、ブランドにふさわしいガードレールの範囲内で作業します」とスパークス氏は語った。 「私たちが打ち出してきたマーケティングがそれを現実にしているのを目の当たりにしています。私たちは小売店のコンセプトをローカライズしています。このチームの製品デザインは本当に本物の中国のもので、非常に関連性があります。」
先週、スパークスは、同社初の大中華圏地域商品創造担当副社長を雇用したと発表し、同副社長は中国人の買い物客向けに中国でデザイン、開発、製造された品揃えの構築に注力することになる。
同社はまず、ホリデーシーズンに間に合うよう、ナイキ スポーツウェア用とジョーダン ストリートウェア用の 2 つのライフスタイル カプセルを発売し、その後、パフォーマンス アパレルとシューズを発売する予定です。
「われわれは今後18カ月かけてこれを進め、これらすべての新機能を導入して、世界的なイノベーションを現地のイノベーションのニーズ、スタイリングのニーズ、フィット感のニーズ、さらには中国独自のカラーで補完できるようにする」とスパークス氏は語った。
ナイキが中国での流通をリセットする理由
マーケティングとローカリゼーションはさておき、ナイキの中国流通モデルは複雑な網の目になっており、販売契約にデジタルが含まれていなかったにもかかわらず、同社が新型コロナウイルス感染症のパンデミック中に実店舗の販売代理店にオンライン販売を開始することを許可した後、スパークス氏は現在、その緩和に取り組んでいる。
「私たちがしなかったことは、消費者が実店舗に戻ってきたことで、コロナ禍からの影響をリセットすることだった」とスパークス氏は語った。 「そのせいで、信じられないほど細分化された市場が生み出され、消費者の行動が非常に混乱してしまいました。明確なイノベーションストーリーを伝える私たちの能力は、ほぼ不可能です。」
スパークス氏は、これらのオンライン店舗閉鎖の決定はナイキの中国事業を立て直すために必要だと述べたが、BNPパリバの株式アナリスト、ローラン・ヴァシレスク氏は、この変更により同社の収益が年間最大10億ドル減少する可能性があり、これは同地域の総売上高の約17％に相当すると推定している。
これに対しスパークス氏は、この変更は一部の流通が必然的になくなることを意味するが、「我々は総額を正規価格販売とよりプレミアムな体験に置き換えることができると信じている」と述べた。
「実際、私たちはそれが重要だと信じています。リセットしなければ、長期的な影響は私たちが見たくない方向に滑り続けることになります」とスパークス氏は述べた。 「私たちは実際に長期的な悪影響があるとは考えていません。悪影響はさらに大きくなると考えています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/29/nike-china-sales-decline.html",
    publishedAt: "2026-07-29T11:46:44+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 10,
  },
  {
    id: "data-centres-could-pay-hundreds-of-milli-474e766e",
    title: "Data centres could pay hundreds of millions in deposits for power demands",
    titleJa: "データセンターは電力需要に対して数億ドルの保証金を支払う可能性がある",
    summaryJa: "データセンターは電力需要に対して数億ドルの保証金を支払う可能性がある- 公開されました",
    bodyOriginal: `Data centres could pay hundreds of millions in deposits for power demands
- Published
Ofgem has proposed new measures which could see developers of data centres made to pay hundreds of millions of pounds up front.
The British energy regulator said a refundable fee should be charged for projects that want to connect to the network, amid mounting demand for connections to the electricity grid.
It is proposing developers pay a deposit between £237,500 to £712,500 per megawatt - meaning data centres seeking 1 gigawatt (GW) of power would have to pay hundreds of millions up front, paid back if the project was completed.
The proposal follows growing opposition in parts of the country to plans for new data centres, which are needed to power the artificial intelligence boom.
Data centres are large buildings which house computer servers used to store and process data and run the digital services which power the internet.
Ofgem has started a consultation on its proposals, which will run until 16 September.
It said the amount of electricity capacity being requested by projects seeking to connect to the grid had risen from 41 GW to 125 GW in the past year, reflecting a sharp increase in demand.
This is significantly more than double 2025's peak electricity demand in Britain of around 46 GW.
The regulator said the projects would have to hit key milestones to keep their place in the grid connection queue, which has seen a surge in demand.
An increasing number of centres have been built around the world in recent years to provide the computing power needed to train and run AI systems.
But they are controversial, especially for people who live near them.
Residents have raised concerns about noise, electricity demand and the large amounts of water sometimes used to cool the high-performance chips that generate vast amounts of heat.
There are currently 564 data centres listed in the UK, according to the data centre map, external.
Scotland in particular is seen as a good location for future projects due to its supply of renewable energy to power the centres, with 24 currently in the planning process.
Ofgem said the plans were aimed at tackling "speculative projects from securing scarce network capacity without any firm intention to connect".
Eleanor Warburton, the regulator's director for energy system design and development, said: "Britain's electricity demand connections queue has more than tripled in size in less than a year, and consumers should not bear the risks created by speculative projects taking up space in the system."
Energy minister Michael Shanks from the Department for Energy Security and Net Zero said he believed Ofgem's actions would "help ensure that viable connection-ready projects can get going and not be held up by speculative applications".
"Britain needs a grid connections system that works for the 21st century and allows businesses to invest and grow, creating jobs across the country," he said.
'I can't drink the water' - life next to a US data centre
- Published10 July 2025
Why are thousands of people opposing a new data centre?
- Published9 July
Data centres to be expanded across UK as concerns mount
- Published15 August 2025
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `データセンターは電力需要に対して数億ドルの保証金を支払う可能性がある
- 公開されました
Ofgemは、データセンターの開発者が前払いで数億ポンドを支払わされる可能性のある新たな措置を提案している。
英国のエネルギー規制当局は、電力網への接続需要が高まる中、ネットワークへの接続を希望するプロジェクトには返金可能な料金を請求すべきだと述べた。
同社は開発者に対し、メガワット当たり23万7500ポンドから71万2500ポンドの保証金を支払うことを提案している。つまり、1ギガワット（GW）の電力を求めるデータセンターは数億ドルを前払いしなければならず、プロジェクトが完了すれば返済されることになる。
この提案は、人工知能ブームを促進するために必要な新しいデータセンターの計画に対する国内の一部での反対の高まりを受けてのものである。
データ センターは、データを保存および処理し、インターネットに電力を供給するデジタル サービスを実行するために使用されるコンピューター サーバーを収容する大規模な建物です。
Ofgemは提案に関する協議を開始しており、協議は9月16日まで続く。
同報告書によると、送電網への接続を目指すプロジェクトが要求する電力容量は、需要の急激な増加を反映して、過去1年間で41GWから125GWに増加したという。
これは英国の2025年のピーク電力需要である約46GWの2倍を大幅に上回る。
規制当局は、需要が急増している送電網接続の待機列に位置を維持するには、プロジェクトが重要なマイルストーンを達成する必要があると述べた。
近年、AI システムのトレーニングと実行に必要なコンピューティング能力を提供するために、世界中で建設されるセンターの数が増えています。
しかし、特に近くに住んでいる人々にとって、それらは物議を醸しています。
住民らは、騒音、電力需要、そして大量の熱を発生する高性能チップを冷却するために時々使用される大量の水について懸念を表明している。
外部のデータセンターマップによると、現在英国には 564 のデータセンターがリストされています。
特にスコットランドは、センターに電力を供給するための再生可能エネルギーの供給により、将来のプロジェクトに適した場所とみなされており、現在 24 のセンターが計画中です。
Ofgem氏は、この計画は「接続する確固たる意図のない、希少なネットワーク容量の確保による投機的プロジェクト」に取り組むことを目的としていると述べた。
規制当局のエネルギーシステム設計・開発担当ディレクター、エレノア・ウォーバートン氏は、「英国の電力需要接続待ち行列の規模は1年足らずで3倍以上に増加しており、消費者はシステム内のスペースを占める投機的プロジェクトによって生じるリスクを負担すべきではない」と述べた。
エネルギー安全保障・ネットゼロ省のマイケル・シャンクス・エネルギー大臣は、Ofgemの行動が「実行可能な接続対応プロジェクトを確実に開始し、投機的なアプリケーションによって妨げられないようにするのに役立つ」と信じていると述べた。
「英国は21世紀に機能し、企業の投資と成長を可能にし、国全体で雇用を創出できる送電網システムを必要としている」と同氏は述べた。
「水は飲めない」 - 米国のデータセンターの隣での生活
- 2025 年 7 月 10 日公開
なぜ何千人もの人々が新しいデータセンターに反対しているのでしょうか?
- 7 月 9 日に公開
懸念が高まる中、データセンターを英国全土に拡大へ
- 2025 年 8 月 15 日公開
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9q90q9qnn2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T11:35:35+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4e2f/live/8ed23800-8b42-11f1-a7ab-8b30adf0800a.jpg",
    readTime: 4,
  },
  {
    id: "andy-burnham-wants-to-fix-social-care-wh-b9996e26",
    title: "Andy Burnham wants to fix social care - what are the options?",
    titleJa: "アンディ・バーナムは社会的養護を改善したいと考えています - 選択肢は何ですか?",
    summaryJa: "アンディ・バーナムは社会的養護を改善したいと考えています - 選択肢は何ですか?- 公開されました",
    bodyOriginal: `Andy Burnham wants to fix social care - what are the options?
- Published
Prime Minister Andy Burnham has said he wants major reform of the social care system in England, calling the current situation "bad for everybody".
In a speech at a care home on Wednesday he announced that cross-party talks involving the Conservatives and Liberal Democrats would start later.
Burnham also said he had asked Baroness Casey - who is carrying out a review of social care - to bring forward her report by a year. She will now set out her recommendations in 2027.
He confirmed that her review will also look at the question of how to pay for any reforms.
BBC Verify has looked at four options for approaching reform and how much they could cost.
1. Cap on lifetime care costs
Some people face extremely high costs for care at the end of their life.
It has been estimated that around one in seven people aged 65 and over face lifetime care costs of more than £100,000.
One proposal is to cap these costs with the government picking up the bill above a certain cash threshold.
In 2011 a commission headed by the economist Andrew Dilnot proposed a lifetime cap of £35,000.
Dilnot estimated his proposed reforms would cost between £1.3bn and £2.2bn a year. The cost today would be higher due to inflation and the ageing population.
The Conservative-Liberal Democrat coalition government, led by David Cameron, accepted Dilnot's recommendations.
But after the 2015 general election, which delivered a Conservative majority, Cameron delayed the implementation of the cap to 2020 over what he said were pressures on the public finances.
In 2017, when Theresa May was in No 10, the Conservatives' general election manifesto proposed a different way to reform social care.
This would have included the value of an individual's home in the means test used to decide what state funding they could get for care in their own homes.
It did not, initially, include any cap on lifetime care costs, with the manifesto saying this was more "equitable" than the Dilnot plan.
The May plan was branded a "dementia tax" by opponents and eventually dropped.
2. A more generous means test
In England people can currently qualify for local authority financial support in a residential care home if all their assets - including their home - are worth less than £23,250.
This is known as a means test - where the level of financial support a person gets is based on the value of their assets and savings.
Some have suggested this threshold should be raised significantly so that many more people would qualify for means-tested support.
Boris Johnson's Conservative government in 2021 planned to raise the means test threshold to £100,000.
The annual cost of Johnson's reforms would have been £1.8bn a year over three years - although this was expected to rise over time as more people qualified.
The Johnson government planned a new Health and Social Care levy to pay for the package, but this was eventually scrapped by his Conservative successors as prime minister, because they wanted to keep taxes down.
3. Free personal care
An alternative approach is to ensure that everyone who is eligible, based on their needs, should get state-funded personal care that is free at the point of use.
This would be provided free regardless of an individual's means and whether it was received by an elderly person in their own house or a residential care home.
Scotland has implemented such a system.
However, it's important to note that personal care takes in things like helping frail elderly people wash and dress and go to the toilet.
But it does not include accommodation, food and everyday living costs which are subject to means testing.
The Health Foundation think tank estimates that implementing a Scottish-style system in England would cost £7.5bn a year by 2036.
Like Scotland, Japan and Germany have systems which base entitlement to personal social care mainly on people's care needs rather than their ability to pay.
Japan and Germany though have a mandatory long-term care insurance system which is funded through contributions from workers and employers.
Both countries also do not usually cover the full cost of personal care so individuals are responsible for some of the expenses.
4. National care service
Some have suggested that the government should set up a national care service in England, similar in ambition to the NHS.
This would mean all personal care would be free at the point of use while establishing national standards and care entitlement criteria.
The Health Foundation has estimated the cost of creating a universal and comprehensive social care system in England would be around £19bn a year extra by 2036.
When Andy Burnham was health secretary in Gordon Brown's Labour government in 2010 he produced a plan for a national care service.
It was suggested this would be paid for through a compulsory contribution from people's estates after they'd died.
But the idea was branded a "death tax" by Labour's opponents. The party lost the 2010 general election and its proposals went no further.
In the 2024 general election Labour again proposed a "national care service" without providing details or how it would be funded.
And after the election then-Prime Minister Keir Starmer effectively kicked the issue into the long grass by commissioning Louise Casey to investigate social care reform and report back in 2028.
It's worth bearing in mind that these four approaches above are not mutually exclusive.
Previous reform proposals have often combined more than one of them - such as a cap on lifetime costs and a more generous means test.`,
    bodyJa: `アンディ・バーナムは社会的養護を改善したいと考えています - 選択肢は何ですか?
- 公開されました
アンディ・バーナム首相は、現在の状況は「誰にとっても悪い」とし、英国の社会保障制度の大規模な改革を望んでいると述べた。
同氏は水曜日に介護施設で行った演説で、保守党と自由民主党が参加する超党派協議が今後開始されると発表した。
バーナム氏はまた、社会的養護の見直しを行っているケイシー男爵夫人に対し、報告書を１年前倒しするよう要請したと述べた。彼女は今後、2027年に向けた提言を発表する予定だ。
同氏は、彼女の検討では、改革費用の支払い方法の問題も検討することを認めた。
BBC Verifyは、改革に取り組むための4つの選択肢と、それにどれくらいの費用がかかるかを検討した。
1. 生涯介護費用の上限
人生の終わりに、非常に高額な介護費用に直面する人もいます。
65歳以上の約7人に1人が生涯で10万ポンド以上の介護費用に直面していると推定されている。
提案の 1 つは、一定の現金基準を超える金額を政府が回収することで、これらの費用に上限を設けるというものです。
2011年、経済学者のアンドリュー・ディルノット氏が委員長を務める委員会は、生涯の上限を3万5000ポンドにすることを提案した。
ディルノット氏は、自身が提案する改革には年間13億ポンドから22億ポンドの費用がかかると見積もった。現在のコストはインフレと高齢化によりさらに高くなるだろう。
デビッド・キャメロン率いる保守党と自由民主党の連立政権はディルノット氏の勧告を受け入れた。
しかし、2015年の総選挙で保守党が過半数を獲得した後、キャメロン首相は財政への圧力を理由に上限の導入を2020年に延期した。
テリーザ・メイが10位だった2017年、保守党の総選挙マニフェストでは社会的養護を改革する別の方法が提案されていた。
これには、自宅でのケアに対してどのような州の資金が得られるかを決定するために使用される資力調査に、個人の家の価値が含まれていたはずです。
当初、生涯介護費用の上限は盛り込まれておらず、マニフェストにはディルノット計画よりも「公平」であると書かれていた。
5月の計画は反対派によって「認知症税」の烙印を押され、最終的には撤回された。
2. より寛大な資力調査
イングランドでは現在、住宅を含むすべての資産の価値が23,250ポンド未満であれば、住宅型介護施設で地方自治体の財政支援を受ける資格が得られる。
これは資力調査として知られており、個人が得られる経済的支援のレベルは資産や貯蓄の価値に基づいて決まります。
より多くの人が資力調査による支援を受ける資格を得られるよう、この基準を大幅に引き上げるべきだと主張する人もいる。
ボリス・ジョンソン首相の保守党政権は2021年に資力調査の基準値を10万ポンドに引き上げることを計画していた。
ジョンソン政権の改革にかかる年間費用は3年間で年間18億ポンドになるはずだが、適任者が増えれば時間の経過とともにこの費用は増加すると予想されていた。
ジョンソン政権は、そのパッケージの費用を支払うために新たな医療・社会保障税を計画していたが、これは結局、税金を抑えたいという理由から、首相としての彼の後継者である保守党によって廃止された。
3. 無料のパーソナルケア
別のアプローチは、資格のあるすべての人が、ニーズに基づいて、利用時点で無料の州資金によるパーソナルケアを受けられるようにすることです。
これは、個人の資力に関係なく、また、自宅の高齢者が受けたのか、住宅型介護施設で受けたのかに関係なく、無料で提供されることになる。
スコットランドはそのようなシステムを導入しました。
ただし、身体的ケアには、虚弱な高齢者の洗濯や着替え、トイレへの援助などが含まれることに注意することが重要です。
ただし、資力調査の対象となる宿泊費、食費、日常生活費は含まれません。
ヘルス財団シンクタンクは、イングランドでスコットランド式システムを導入するには、2036年までに年間75億ポンドの費用がかかると見積もっている。
スコットランドと同様、日本とドイツには、個人の社会的ケアの権利を、主に人々の支払い能力ではなくケアのニーズに基づいて決定する制度があります。
ただし、日本とドイツには、労働者と雇用主からの拠出金によって賄われる強制的な介護保険制度があります。
また、両国とも通常、身の回りの費用を全額負担するわけではないため、費用の一部は個人が負担します。
4. 国民介護サービス
政府は英国にNHSと同様の国民的ケアサービスを設立すべきだと提案する人もいる。
これは、国の基準と介護資格基準を確立しながら、すべてのパーソナルケアが使用時点で無料になることを意味します。
保健財団は、イギリスで国民皆保険制度を構築するための費用は、2036年までに年間約190億ポンド追加されると見積もっている。
アンディ・バーナムは2010年にゴードン・ブラウン労働党政権で保健長官を務めていたとき、国民医療サービスの計画を作成した。
この費用は、人々の死後、財産からの強制拠出によって支払われることが示唆されていた。
しかし、このアイデアは労働党の反対派によって「死の税金」であると非難された。同党は2010年の総選挙で敗北し、その提案は前進しなかった。
2024年の総選挙で、労働党は詳細や資金調達方法を明らかにせずに、再び「国民介護サービス」を提案した。
そして選挙後、当時のキア・スターマー首相は社会保障改革を調査し、2028年に報告するようルイーズ・ケイシーに依頼し、事実上この問題を闇に葬った。
上記の 4 つのアプローチは相互に排他的ではないことに留意する価値があります。
これまでの改革案では、生涯費用の上限やより寛大な資力調査など、複数の提案が組み合わされていることが多かった。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cj4k54g0ldjo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T10:47:08+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1825/live/a24448b0-89c6-11f1-b8ee-9b3c26ad07bb.png",
    readTime: 6,
  },
  {
    id: "matcha-and-protein-pivot-pays-off-for-gr-3892a2a1",
    title: "Matcha and protein pivot pays off for Greggs as profits rise",
    titleJa: "抹茶とプロテインのピボットが利益を上げ、グレッグス社に利益をもたらす",
    summaryJa: "抹茶とプロテインのピボットが利益を上げ、グレッグス社に利益をもたらす- 公開されました",
    bodyOriginal: `Matcha and protein pivot pays off for Greggs as profits rise
- Published
Greggs's pivot towards healthier products and trending drinks has helped it boost sales, with the bakery chain reporting a 20% rise in profit over the first half of the year.
Greggs, the UK's largest fast-food chain, has launched a range of new products this year, many of which latch onto trends such as high-protein salads and matcha.
Greggs's chief executive Roisin Currie previously told BBC News the rise of weight-loss drugs has led customers to to look for "smaller portions", which could affect its bottom line.
Total sales for the bakery topped £1.1 billion for the 26 weeks to the end of June - 7.2% higher than the same period a year ago.
Pre-tax profit for the first half of the year was £76.0m - up from £63.5m for the first six months of 2025.
Currie said the company was "broadening and innovating our menu in line with changing tastes and trends".
The company relaunched its salad range in May, "adding protein and increased choice for customers".
It is also trying to appeal to "new and younger customers" through its new iced matcha lattes, and to health-conscious consumers by making nutritional information on its labels clearer.
Greggs, which has more UK outlets than McDonald's, opened 34 stores in the first half of 2026. That brings the total to 2,773, taking into account 31 store closures.
More than half of the new openings were in areas with no Greggs stores within a mile. A similar proportion opened away from the High Street in locations including petrol forecourts, supermarkets, retail parks, hospitals and university campuses, it said.
Currie said Greggs is monitoring customer behaviour to ensure new stores boost visits "without cannibalising existing shop sales".
She also said Greggs had no price rises planned after its breakfast, lunch and "big" deals went up in May, following multiple hikes last year.
"Our prices are in a good place and we will now be working hard to protect the consumer and making sure that we can offer that value throughout the rest of the year," she said.
Weight loss jabs affecting Greggs, boss says
- Published8 January
Susannah Streeter, chief investment strategist at Wealth Club, said the results showed that "there's still healthy appetite for affordable treats" even as many consumers become more health-conscious.
"It's also proving nimble at keeping pace with the latest food trends, showing it can compete with far more premium cafes.
"The iced matcha latte has emerged as one of the hits of its latest menu revamp, demonstrating that the bakery chain can blend social media-inspired tastes with its trademark value offering."
She added, however, that the company is warning investment in expanding its supply chain will weigh on profits for the rest of 2026 unless customer confidence improves.
Julie Palmer, managing partner at BTG Consulting, said Greggs has proved resilient against "weight-loss drugs, low spending and confidence, and rising employment and business costs".
"After a summer of sport, beer gardens and heatwaves, Greggs will be banking on autumn and winter seeing demand for its hot pastries and convenient on-the-go products returning.
"Keeping prices low and continuing to expand product ranges to meet changing food trends will be key to luring people back into its vast number of stores to achieve this."
Last year Currie addressed questions about whether "peak Greggs" had been reached after its rapid expansion, saying "we have gone out...to demonstrate that this is not the case".
The group is targeting around 100 to 110 net new shops in 2026 and trialling a "bitesize" format and a self-service "Greggs Express" format. Its store numbers could go as high as 3,500.
Greggs said its expectations for the full year outcome were unchanged - 2026 underlying pre-tax profit at a similar level to 2025's £172m.
The chain had already flagged that higher costs from investment in new stores was expected to result in second half profit reducing year-on-year.
It added 6.9% of its sales now come from home delivery. It called this an "opportunity" for growth and noted customers tend to spend three times as much on home deliveries as they do in store.
- Published30 August 2025
- Published26 June
- Published1 October 2025`,
    bodyJa: `抹茶とプロテインのピボットが利益を上げ、グレッグス社に利益をもたらす
- 公開されました
グレッグス社はより健康的な製品やトレンドの飲み物に軸足を移したことで売上が伸び、このベーカリー チェーンは今年上半期で利益が 20% 増加したと報告しています。
英国最大のファストフードチェーンであるグレッグスは今年、さまざまな新商品を発売したが、その多くは高たんぱく質のサラダや抹茶などのトレンドを取り入れたものだ。
グレッグスの最高経営責任者ロイシン・カリー氏は以前、BBCニュースに対し、減量薬の台頭により顧客は「少量」を求めるようになり、収益に影響を与える可能性があると語った。
このベーカリーの総売上高は、6 月末までの 26 週間で 11 億ポンドを超え、前年同期比 7.2% 増加しました。
今年上半期の税引前利益は7,600万ポンドで、2025年上半期の6,350万ポンドから増加しました。
カリー氏は、同社は「嗜好やトレンドの変化に合わせてメニューを拡大し、革新している」と述べた。
同社は5月にサラダシリーズを再発売し、「タンパク質を追加し、顧客の選択肢を増やした」。
また、新商品のアイス抹茶ラテを通じて「新規顧客」や「若年層」への訴求を図り、ラベルの栄養成分表示をわかりやすくすることで健康志向の消費者へのアピールも図っている。
英国でマクドナルドより店舗数の多いグレッグスは、2026年上半期に34店舗をオープンした。31店舗の閉鎖を考慮すると、合計は2,773店舗となる。
新規出店の半分以上は、1マイル以内にグレッグスの店舗が存在しない地域にあった。同報告書によると、同様の割合で、ハイストリートから離れたガソリンスタンド、スーパーマーケット、小売公園、病院、大学キャンパスなどの場所にオープンしたという。
カリー氏によると、グレッグス氏は顧客の行動を監視し、「既存店の売上を共食いすることなく」新店舗の来店数が増加するよう努めているという。
同氏はまた、グレッグス社では、昨年複数回の値上げに続き、5月に朝食、昼食、「大型」取引が値上げされた後、値上げの計画はないと述べた。
「当社の価格は良好な位置にあり、今後は消費者を保護するために懸命に取り組み、年内を通じてその価値を確実に提供できるよう努める」と同氏は述べた。
減量ジャブがグレッグスに影響を与えると監督が語る
- 1 月 8 日に公開
ウェルス・クラブの首席投資ストラテジスト、スザンナ・ストリーター氏は、多くの消費者が健康志向を強めているにもかかわらず、「手頃な価格のお菓子に対する健全な欲求が依然としてある」ことをこの結果が示していると述べた。
「また、最新の食のトレンドに機敏に対応していることも証明されており、はるかに多くの高級カフェと競合できることが示されています。
「アイス抹茶ラテは、最新のメニューリニューアルのヒット商品の1つとして浮上しており、ベーカリーチェーンがソーシャルメディアからインスピレーションを得た味とその商標価値のある商品を融合できることを示しています。」
しかし、同社は顧客の信頼が改善しない限り、サプライチェーン拡大への投資が2026年残りの利益を圧迫することになると警告していると付け加えた。
ＢＴＧコンサルティングのマネジングパートナー、ジュリー・パーマー氏は、グレッグス氏が「減量薬、支出と信頼の低さ、雇用と事業コストの上昇」に対して強いことが証明されたと述べた。
「スポーツ、ビアガーデン、熱波で賑わった夏の後、グレッグスは、温かいペストリーや持ち運びに便利な商品の需要が戻ってくるのを見て、秋から冬に期待します。
「これを達成するには、価格を低く抑え、変化する食のトレンドに合わせて製品範囲を拡大し続けることが、膨大な数の店舗に人々を呼び戻す鍵となるでしょう。」
カリー氏は昨年、急速な拡大後に「グレッグスのピーク」に達したかどうかに関する質問に答え、「我々は、そうではないことを証明するために出かけてきた」と述べた。
同グループは2026年に約100～110の純新規店舗を目標としており、「一口サイズ」形式とセルフサービスの「グレッグス・エクスプレス」形式を試験的に導入している。店舗数は3,500に達する可能性がある。
グレッグス氏は、通期業績予想に変更はなく、2026年の実質的な税引き前利益は2025年の1億7,200万ポンドと同水準になると述べた。
同チェーンは、新店舗への投資によるコスト増加により、下半期の利益が前年同期比で減少すると予想されることをすでに警告していた。
同社は現在、売上の6.9％が宅配によるものだと付け加えた。同社はこれを成長の「機会」と呼び、顧客は店頭の3倍を宅配に費やす傾向があると指摘した。
- 2025 年 8 月 30 日発行
- 6 月 26 日発行
- 2025 年 10 月 1 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2r0nyx99yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-29T10:37:33+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d65a/live/f1815bb0-8b2a-11f1-841c-ef08db9db338.jpg",
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
