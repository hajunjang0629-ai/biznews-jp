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
    id: "whatsapp-chat-used-to-send-cash-for-crim-c748eaf9",
    title: "WhatsApp chat used to send cash for crime and extremism",
    titleJa: "WhatsApp チャットは犯罪や過激主義への現金送金に使用されていた",
    summaryJa: "WhatsApp チャットは犯罪や過激主義への現金送金に使用されていた- 公開されました",
    bodyOriginal: `WhatsApp chat used to send cash for crime and extremism
- Published
A WhatsApp group chat was used to send hundreds of millions of euros in cash around the world, funding organised crime and extremism with no paper trail, an investigation by European broadcasters has found.
The 532-member group chat, called "Traders of Greater Europe", was used to arrange cash transfers across borders for their clients, including to British cities such as Birmingham and London.
In one case, payments from Brussels went to militants from the Islamic State group (IS) in Syria.
The European Broadcasting Union (EBU) investigative journalism network, external, which includes the BBC, also found wider evidence of similar cash transfer systems being used in people smuggling and drug trafficking.
The group chat, which contained more than 82,000 messages sent between late February and December 2022, was first uncovered by Belgian investigating magistrate Vincent Guerra. An investigating magistrate is a judge who examines evidence in complex cases before trial and makes a recommendation about whether they should proceed.
Guerra said the number of transactions was "staggering" and the network covered "the entire planet". The case began as an investigation into terror financing, but "it became just a drop in the ocean of transactions", he said.
Members of the group chat sent messages in Arabic to each other to set up cash payments using the ancient hawala transfer system. Hawala involves a network of trusted money brokers who can arrange for funds to be sent around the world without any electronic record or physical transport of bank notes.
The system involves an agreement between two brokers, known as hawaladars, in different locations. One of the hawaladars is paid a sum of cash and the other agrees to supply the same sum, minus commission, to the recipient. The hawaladars agree to settle up all their transactions between themselves at a later date.
Hawala transfers are frequently used for legitimate purposes, such as immigrant workers sending funds home to support their families in countries with limited access to banks.
But criminals can also take advantage of hawala transfers to avoid the Swift system used for most international money transfers, where banks typically flag large transactions outside the normal course of business and are required to report any suspicious activity.
The Great Traders of Europe group was reserved for transactions over €5,000 (£4,279) and payments were often much larger. There is no indication that all those participating in the group were involved in handling criminal funds.
Hawala is illegal in many countries, including most of the EU, but is legal in the UK as long as the brokers are registered with Revenue and Customs (HMRC).
The cache of WhatsApp messages was obtained by the EBU following a 2024 court case in Belgium which convicted six money launderers, including Abu Adam, the head of the network in Brussels, and his number two, Abu Ahmed.
Belgian police had discovered evidence that the defendants had been sending money to IS, which was intended to help the wives of militants escape from detention camps in Syria. When they arrested Abu Adam, they discovered the Traders of Greater Europe group chat on his phone.
Guerra said it was like "hitting the jackpot", uncovering the inner workings of a vast, underground system. The phone also contained 6,000 photos of €5 notes showing the serial numbers and 6,000 photos of identity cards. These details are often used as unique identifying codes in hawala transactions, and the total number of notes and ID cards suggest Abu Adam had processed at least 12,000 transactions, Guerra said.
"This isn't just amateur work; it's professional, and at a level we could never have imagined," he said. "They're bankers with no government oversight."
The EBU also found further gangs across Europe using the hawala system for criminal activity. One former money launderer previously involved in European hawala networks, whom we are calling Frank, told the EBU he had been involved in transactions totalling several hundred million euros.
His first introduction to the hawala system had been at an office in a small town outside Rotterdam, he said. There, five or six messengers had arrived with money in about an hour and a half, transferring at least a million euros, he estimated.
"What I found out later is that it's not just about money. It's about the financing of terror. It's about drug trafficking. It's about prostitution and all sorts of other crap, to put it nicely," he said.
Cases in Austria have also revealed how the hawala system is bound up with people smuggling and violence.
In one case investigated by Austrian broadcaster ORF, part of the EBU network, Austrian police raided what they called "the biggest hawala office in Vienna". It was run from a kebab restaurant on a busy thoroughfare and which authorities say was used to make payments for people smuggling.
Two Syrian brothers who ran the operation were charged with human trafficking, as well as torturing and raping a courier who had lost €350,000 (£300,000), saying he had been robbed. They were convicted last year and sentenced to 18 and 8 years in prison respectively.
Austrian police and Europol also recently dismantled another people-smuggling ring financed through hawala, which officials said had transported about 100,000 people into Europe over 18 months.
Gerald Tatzgern, who leads human-trafficking investigations at Austria's Criminal Intelligence Service, the BK, told ORF that torture was a reality of people smuggling and was also used to maximise profits.
He said: "Videos of the torture are then sent to the families, saying that if they don't send another €1,000 or several thousand euros, then the person concerned - your son, your brother, your father - will suffer."
Payments to stop the torture were demanded through the hawala system, he said.
Police commander and Europol liaison officer Quentin Mugg, who has led a number of money-laundering investigations, said the hawala system was "the primary money-laundering channel for organised crime".
"Whether the money comes from migrant smuggling, human trafficking, pimping, a grandmother's savings sent as a birthday present to her son, or a Malian working in France who wants to support his family, [the hawaladars] couldn't care less," he said. "And they'll apply their rates."`,
    bodyJa: `WhatsApp チャットは犯罪や過激主義への現金送金に使用されていた
- 公開されました
WhatsAppのグループチャットを利用して世界中に数億ユーロの現金が送金され、紙面証拠なしで組織犯罪や過激主義に資金を提供していたことが欧州放送局の調査で判明した。
「Traders of Greater Europe」と呼ばれる532人のメンバーからなるグループチャットは、バーミンガムやロンドンなど英国の都市を含む顧客のために国境を越えた現金送金を手配するために使用された。
あるケースでは、ブリュッセルからの支払いがシリアの過激派組織「イスラム国」（IS）の武装勢力に送られた。
BBCを含む外部の欧州放送連合（EBU）調査報道ネットワークも、同様の現金送金システムが密輸や麻薬密売に使用されている幅広い証拠を発見した。
このグループチャットには、2022年2月下旬から12月までに送信された8万2000件以上のメッセージが含まれており、ベルギーの捜査判事ヴィンセント・ゲラによって初めて明らかにされた。捜査判事は、裁判前に複雑な事件の証拠を調査し、続行すべきかどうかについて勧告を行う裁判官です。
ゲラ氏は、取引の数は「驚異的」であり、ネットワークは「地球全体」をカバーしていると語った。この事件はテロ資金供与の捜査として始まったが、「取引の大海の一滴に過ぎなくなった」と同氏は語った。
グループチャットのメンバーは互いにアラビア語でメッセージを送信し、古代のハワラ送金システムを使って現金支払いを設定した。 Hawala には、紙幣の電子記録や物理的な輸送を一切行わずに、資金を世界中に送金できるように手配できる信頼できる資金ブローカーのネットワークが関与しています。
このシステムには、異なる場所にあるハワラダーとして知られる 2 つのブローカー間の契約が含まれます。ハワラダールの 1 人には現金が支払われ、もう 1 人は手数料を差し引いた同額を受取人に提供することに同意します。ハワラダールは、彼らの間のすべての取引を後日決済することに同意します。
ハワラ送金は、銀行へのアクセスが限られている国の家族を養うために移民労働者が本国に送金するなど、正当な目的で頻繁に使用されます。
しかし、犯罪者はハワラ送金を利用して、ほとんどの国際送金に使用される Swift システムを回避することもできます。Swift システムでは通常、銀行は通常の業務外の大規模取引にフラグを立て、不審な行為があれば報告する必要があります。
Great Traders of Europe グループは 5,000 ユーロ (4,279 ポンド) を超える取引を対象としており、支払い額はそれよりも高額になることがよくありました。グループの参加者全員が犯罪資金の取り扱いに関与していた形跡はない。
ハワラは、EU の大部分を含む多くの国で違法ですが、仲介業者が歳入関税局 (HMRC) に登録されている限り、英国では合法です。
WhatsAppメッセージのキャッシュは、ブリュッセルのネットワーク責任者アブ・アダム氏とナンバー2のアブ・アーメド氏を含むマネーロンダリング業者6人に有罪判決を下した2024年のベルギーの裁判を受けて、EBUによって入手された。
ベルギー警察は、被告らがシリアの強制収容所から過激派の妻らを逃亡させる目的でＩＳに送金していた証拠を発見した。アブ・アダムを逮捕したとき、彼らは彼の携帯電話で大ヨーロッパ貿易業者のグループチャットを発見した。
ゲラ氏は、これは広大な地下システムの内部構造を明らかにする「大当たり」のようだったと語った。この携帯電話には、シリアル番号が記載された5ユーロ紙幣の写真6,000枚と身分証明書の写真6,000枚も含まれていた。これらの詳細は、ハワラ取引における固有の識別コードとしてよく使用され、紙幣とIDカードの合計数から、アブ・アダムが少なくとも1万2000件の取引を処理したことが示唆されるとゲラ氏は述べた。
「これは単なるアマチュアの仕事ではありません。プロの仕事であり、私たちが想像もできなかったレベルです」と彼は言いました。 「彼らは政府の監督を受けていない銀行家だ。」
EBU はまた、ハワラ システムを犯罪行為に使用しているヨーロッパ全土のさらなるギャングも発見しました。以前ヨーロッパのハワラネットワークに関与していた元マネーロンダリング業者の一人（フランクと呼ぶ）は、総額数億ユーロの取引に関与していたとEBUに語った。
彼が初めてハワラ システムに出会ったのは、ロッテルダム郊外の小さな町にあるオフィスだったという。そこには、約1時間半以内に5、6人のメッセンジャーがお金を持って到着し、少なくとも100万ユーロを送金したと同氏は推定した。
「後で分かったのは、これはお金だけの問題ではないということだ。テロ資金供与の問題だ。麻薬密売の問題だ。良く言えば、売春やその他あらゆるがらくたの問題だ」と彼は語った。
オーストリアでの事件は、ハワラ制度が人々の密入国や暴力とどのように結びついているのかも明らかにした。
EBUネットワークの一部であるオーストリアの放送局ORFが調査したある事件では、オーストリア警察が「ウィーン最大のハワラ事務所」と呼ぶところを強制捜査した。交通量の多い大通りにあるケバブレストランが経営しており、当局は密入国者の支払いに使われていたとしている。
作戦を実行したシリア人の兄弟２人は、人身売買のほか、強盗に遭ったとして35万ユーロ（約30万ポンド）を失った配達員を拷問し強姦した罪で起訴された。彼らは昨年有罪判決を受け、それぞれ懲役18年と懲役8年を言い渡された。
オーストリア警察とユーロポールも最近、ハワラを通じて資金提供された別の人身密航組織を解体した。当局者は、この組織が18カ月間で約10万人を欧州に移送したと発表した。
オーストリアの刑事情報局BKで人身売買捜査を指揮するジェラルド・タッツガーン氏はORFに対し、拷問は人身密航の現実であり、利益を最大化するためにも行われていると語った。
同氏は、「その後、拷問のビデオが家族に送られ、さらに1000ユーロか数千ユーロを送金しなければ、関係者、つまりあなたの息子、あなたの兄弟、あなたの父親が苦しむことになると伝えられている」と語った。
拷問を中止するための支払いはハワラシステムを通じて要求されたと彼は述べた。
数多くのマネーロンダリング捜査を指揮してきた警察司令官兼ユーロポール連絡官のクエンティン・マグ氏は、ハワラシステムが「組織犯罪の主要なマネーロンダリング経路」であると述べた。
「そのお金が移民の密航、人身売買、売春斡旋、息子への誕生日プレゼントとして送られた祖母の貯金、あるいは家族を養いたいフランスで働くマリ人から来ていようが、（ハワラダールたちは）まったく気にしていない」と同氏は語った。 「そして彼らは彼らの料金を適用するでしょう。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgk57lg7566o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-30T04:59:56+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4e7b/live/835e38f0-a2fa-11f1-b109-879e35c24276.png",
    readTime: 7,
  },
  {
    id: "iceland-eu-referendum-on-a-knife-edge-as-b9fb0268",
    title: "Iceland EU referendum on a knife edge as counting continues",
    titleJa: "アイスランドのEU住民投票、開票が続くナイフエッジ",
    summaryJa: "アイスランドのEU住民投票、開票が続くナイフエッジ- 公開されました",
    bodyOriginal: `Iceland EU referendum on a knife edge as counting continues
- Published
Iceland's closely fought referendum on whether to resume membership talks with the European Union is going down to wire, with the result too close to call.
Based on the first 153,197 votes counted of the 270,000 voters eligible, 50.1% rejected the government's proposal, while 49.9% said yes, public broadcaster RUV said, with just 435 votes splitting them.
Prime Minister Kristrún Frostadóttir's centre-left government promised to hold a referendum by 2027, but brought it forward because of international tensions, including US President Donald Trump's threats against Greenland.
However, debate in this island nation of almost 400,000 people centred more on its fishing industry rather than security concerns.
Already part of the EU's single market and Schengen border-free zone, EU membership would bring Iceland into the customs union and eventually the euro.
Iceland began its application to join the EU in 2009 in the wake of the 2008 financial crisis and the collapse of Iceland's banking system.
Its application was already well advanced when a eurosceptic government came to power in 2013 and put talks on hold. Fishing rights was the biggest obstacle then - as it remains today.
Fish and marine industries account for almost 40% of Iceland's exports and many No voters feared they would cede some control of their lucrative fishing grounds under the EU's common fisheries policy.
The referendum campaign has fuelled debate about Iceland's place in the world, Frostadottir said after casting her ballot in the capital on Saturday.
"This is a great day, we've been waiting for this for years to be able to have a vote," Frostadottir said, adding that her government would continue its work regardless of the outcome.
The question on the ballot was: "Should Iceland resume accession negotiations with the European Union?"
A Yes vote would not be a final decision on joining the EU, but a move towards an accession agreement, which would then have to be approved by a second referendum.
Equally, the No vote would not rule out the chance of Iceland resuming talks in the future.
While economic issues dominated the referendum campaigns, security concerns also featured.
Iceland is a founder member of Nato but it has no military and relies on its allies for defence.
The country has backed Ukraine during Russia's full-scale invasion and officials have been alarmed by Russia's increased maritime manoeuvres near the island.
Trump's expressed interest in taking over Greenland has also raised concerns.`,
    bodyJa: `アイスランドのEU住民投票、開票が続くナイフエッジ
- 公開されました
アイスランドの欧州連合（EU）加盟交渉再開の是非を問う接戦となった住民投票は、決着が近すぎて決着がつかない状況となっている。
公共放送RUVによると、有権者27万人のうち最初に集計された15万3197票に基づくと、50.1％が政府提案を拒否し、49.9％が賛成と答え、その差はわずか435票だったという。
クリストルン・フロスタドッティル首相の中道左派政府は2027年までに住民投票を実施すると約束していたが、グリーンランドに対するドナルド・トランプ米大統領の脅迫など国際的な緊張を理由に実施を前倒しした。
しかし、人口約40万人のこの島国での議論は、安全保障上の懸念よりも漁業に集中していた。
すでにEUの単一市場およびシェンゲン国境フリーゾーンの一部となっているが、EU加盟によりアイスランドは関税同盟に加わり、最終的にはユーロに加わることになる。
アイスランドは、2008年の金融危機とアイスランドの銀行システム崩壊を受けて、2009年にEUへの加盟申請を開始した。
2013年にEU懐疑派の政府が政権を樹立し、交渉が保留されたとき、その適用はすでにかなり進んでいた。当時は漁業権が最大の障害でしたが、それは今でも変わりません。
アイスランドの輸出のほぼ40％を水産・水産業が占めており、ノー派の多くの有権者は、EUの共通漁業政策のもとで、儲かる漁場の管理権の一部を譲り渡されるのではないかと懸念していた。
土曜日に首都で投票したフロスタドッティル氏は、国民投票運動により、世界におけるアイスランドの地位についての議論が高まっていると述べた。
フロスタドッティル氏は「今日は素晴らしい日だ。私たちは投票ができるよう何年もこの日を待っていた」と述べ、結果に関係なく政府は取り組みを続けると付け加えた。
投票用紙の質問は「アイスランドは欧州連合との加盟交渉を再開すべきか？」だった。
賛成票を投じてもEU加盟の最終決定ではなく、加盟合意に向けた動きとなり、その後2回目の国民投票で承認される必要がある。
同様に、反対票が投じられたからといって、アイスランドが将来交渉を再開する可能性が排除されるわけではない。
国民投票キャンペーンでは経済問題が大半を占めたが、安全保障への懸念も取り上げられた。
アイスランドはNATO創設メンバーであるが、軍隊を持たず、防衛を同盟国に依存している。
同国はロシアの全面侵攻中にウクライナを支援しており、当局者らはロシアが同島付近で海上行動を強めていることに警戒している。
トランプ大統領がグリーンランド乗っ取りに関心を示したことも懸念を引き起こしている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c70le8ed1plo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-30T03:57:01+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9e0f/live/272509c0-a425-11f1-aed2-8d6da8d75094.jpg",
    readTime: 3,
  },
  {
    id: "canada-installs-large-lake-ontario-sign-9ec0f626",
    title: "Canada installs large Lake Ontario sign in latest jab at US",
    titleJa: "カナダ、米国への最新の攻撃にオンタリオ湖の大きな看板を設置",
    summaryJa: "カナダ、米国への最新の攻撃にオンタリオ湖の大きな看板を設置- 公開されました",
    bodyOriginal: `Canada installs large Lake Ontario sign in latest jab at US
- Published
Ontario Premier Doug Ford has hit back at Donald Trump by installing a large sign on Canada's shoreline with the message: "Lake Ontario. Now and Always."
The US president signed an executive order on Thursday seeking to change its name to Lake America and has shared a series of AI-generated videos about the lake that straddles both countries.
"Long before President Trump, this lake was called Lake Ontario. Long after President Trump is gone, it will still be called Lake Ontario," Ford said.
The war of words was triggered after trade talks collapsed, with the US imposing new 50% tariffs on $20bn (C$28bn) of Canadian goods. Canada will implement "dollar for dollar" counter-tariffs next month.
Trump said the decree was effective immediately as he signed the order to rename it Lake America.
While he has broad discretion over how the US recognises landmarks, other countries are not required to follow. Canadian officials have dismissed Trump's move.
On Saturday, Trump also posted several AI-generated videos on social media, with one showing him kicking over a Lake Ontario sign and replacing it with one that says: "Welcome to Lake America."
Another video depicted a flock of Canada geese sporting the US president's hair and holding rifles as they patrolled the shoreline of a newly named Lake America.
Ford said Trump's renaming of the lake was because he "didn't like Ontario and Canada standing up for ourselves".
Standing in front of the newly unveiled Lake Ontario sign, Ford added: "Just in case President Trump or anyone else forgets, we've set up this sign to remind them, it's Lake Ontario, now and forever."
It echoes Canadian Prime Minister Mark Carney's previous response to the row, insisting "things must be called by their name, and this lake is called Lake Ontario - today and forever".
The names of four of the Great Lakes - Ontario, Huron, Michigan and Erie - originate from indigenous words. Lake Superior was named after an anglicised French word. Lake Ontario, the smallest of the Great Lakes, borders both the Canadian province and the US state of New York.
Trump's executive order gives the US Department of the Interior 30 days to update the name change with the Geographic Names Information Service - the official repository of domestic geographic names in the US.
When Trump entered the White House in 2025, he signed a similar order that changed the Gulf of Mexico to the Gulf of America. Mexico has rejected the name change, arguing a single country cannot rename a shared body of international water.
It also led to a legal dispute between Mexico and tech giant Google, which renamed the gulf in its maps application.
In that case, Google Maps users in the US see "Gulf of America", while those in Mexico see the "Gulf of Mexico". Those in other countries see the "Gulf of Mexico (Gulf of America)".
Related topics
- Published1 day ago
- Published3 days ago`,
    bodyJa: `カナダ、米国への最新の攻撃にオンタリオ湖の大きな看板を設置
- 公開されました
オンタリオ州のダグ・フォード首相は、カナダの海岸線に「オンタリオ湖。今もこれからも」というメッセージを書いた大きな看板を設置し、ドナルド・トランプ氏に反撃した。
米国大統領は木曜日、湖の名前をアメリカ湖に変更することを求める大統領令に署名し、両国にまたがるこの湖についてAIが生成した一連の動画を共有した。
フォード氏は「トランプ大統領のずっと前から、この湖はオンタリオ湖と呼ばれていた。トランプ大統領がいなくなってもずっと後も、この湖はオンタリオ湖と呼ばれるだろう」と語った。
舌戦は通商協議が決裂し、米国が200億ドル（280億カナダドル）のカナダ製品に新たに50％の関税を課したことを受けて始まった。カナダは来月、「ドルにはドル」対抗関税を導入する予定だ。
トランプ大統領は、アメリカ湖の名前を変更する命令に署名したため、この命令は直ちに発効すると述べた。
同氏は米国がランドマークをどのように認識するかについて広範な裁量権を持っているが、他国が従う必要はない。カナダ当局はトランプ大統領の動きを否定した。
土曜日にはトランプ大統領もソーシャルメディアにAIが生成したいくつかの動画を投稿しており、そのうちの1つはオンタリオ湖の看板を蹴り倒し、「アメリカ湖へようこそ」と書かれたものに差し替える様子を映していた。
別のビデオには、カナダガンの群れが米国大統領の髪を振りかざし、ライフルを構え、新たに命名されたアメリカ湖の湖畔を巡回する様子が映されていた。
フォード氏は、トランプ大統領が湖の名前を変更したのは「オンタリオ州とカナダが自分たちのために立ち上がるのが気に入らない」ためだと述べた。
新たに公開されたオンタリオ湖の標識の前に立ったフォード氏は、「トランプ大統領や他の誰かが忘れた場合に備えて、私たちはこの標識を設置して、今も永遠もオンタリオ湖であることを思い出させるためにこの標識を設置した」と付け加えた。
これは、この騒動に対するカナダのマーク・カーニー首相の以前の反応を反映し、「物事はその名前で呼ばれるべきであり、この湖は今日も永遠にオンタリオ湖と呼ばれる」と主張した。
五大湖のうち 4 つであるオンタリオ湖、ヒューロン湖、ミシガン湖、エリー湖の名前は、先住民族の言葉に由来しています。スペリオル湖の名前は、英語化されたフランス語にちなんで付けられました。五大湖の中で最小のオンタリオ湖は、カナダの州と米国のニューヨーク州の両方に隣接しています。
トランプ大統領の大統領令は、米国内務省に対し、米国国内の地理名の公式リポジトリである地理名情報サービスに名前の変更を更新するための30日間の猶予を与えている。
トランプ大統領は2025年にホワイトハウスに入閣した際、メキシコ湾をアメリカ湾に変更する同様の命令に署名した。メキシコは、単一の国が共有する国際水域の名前を変更することはできないと主張し、名前変更を拒否した。
また、メキシコと、地図アプリケーションで湾の名前を変更したテクノロジー大手グーグルとの間の法的紛争にもつながった。
この場合、米国の Google マップ ユーザーには「アメリカ湾」が表示され、メキシコのユーザーには「メキシコ湾」が表示されます。他の国の人には「メキシコ湾（アメリカ湾）」が見えます。
関連トピック
- 1 日前に公開
- 3 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cpq09594vw7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-30T00:17:25+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/db21/live/575d2470-a410-11f1-a291-b542ee92de7c.jpg",
    readTime: 4,
  },
  {
    id: "at-least-37-dead-and-hundreds-evacuated-0587307d",
    title: "At least 37 dead and hundreds evacuated after strike on Kyiv weapons depot",
    titleJa: "キエフ武器庫襲撃後、少なくとも37人が死亡、数百人が避難",
    summaryJa: "キエフ武器庫襲撃後、少なくとも37人が死亡、数百人が避難- 公開されました",
    bodyOriginal: `At least 37 dead and hundreds evacuated after strike on Kyiv weapons depot
- Published
Thirty-seven people have died and almost 400 have been evacuated after a Russian drone strike hit a depot storing weapons for Ukraine's military near a residential area on the outskirts of Kyiv.
The strike caused shells, mines and drones to detonate late on Friday, triggering a blast that damaged nearby properties including a care home for the elderly and disabled, President Volodymyr Zelensky said.
He said the storage site "definitely shouldn't have been there" and that an investigation had been launched into "terrible negligence on the part of those who stored explosive right next to people".
The attack is the second to hit a munitions depot near Kyiv in recent months, prompting renewed anger.
Four children are among the 42 people injured in Friday night's explosion, according to regional head Tymur Tkachenko, with a rescue operation ongoing at the site, in the Bucha district, on Saturday.
Russia's Ministry of Defence said in a statement that its forces had targeted "an ammunition depot" in Myla, a village to the west of the Ukrainian capital, holding "components and launch boosters for FP-1/FP-2 long-range unmanned aerial vehicles".
The explosion damaged about 130 homes in the village.
"Everything is completely damaged," local resident Liubov Pavlenko, 45, told the BBC while inspecting her home around 200m from the ammunition warehouse.
"There are cracks all around the entire perimeter, and cracks around the windows. Basically, the structural integrity has been compromised," she added.
"I'm still kind of numb. I don't know… once I come around a little tomorrow, I'll probably have an even bigger breakdown."
Zelensky said the decision to store explosives in the village was "absolutely unacceptable", adding: "Criminal proceedings have been opened on charges of official negligence."
The office of Ukraine's prosecutor general earlier said it was reviewing the "legality of the placement and storage of explosive objects and materials" near residential buildings in Myla.
It said the "actions of officials who made the relevant decisions" would also be investigated.
However, Zelensky earlier stated that "there are regulations in place - ammunition cannot be stored near homes or other residential areas", adding "appropriate conclusions will certainly be drawn".
He referenced the strike on an ammunition warehouse in Vyshneve in July, which caused a secondary detonation that killed nine, injured dozens more and damaged more than 280 homes.
Friday night's explosion has raised fresh questions about why munitions were being stored so close to people's homes, especially given the regularity of Russian aerial attacks.
"The authorities, the Ministry of Defence - why was this allowed at the depots, in a place where there used to be food?" Borys Daniyluk, 61, said.
"Why were ammunition and weapons stored there, next to a populated village? There are no words, just emotions."
Ukrainian Prime Minister Sergiy Koretsky expressed regret that a "lesson" had not been learned following the explosion in Vyshneve.
The investigation into that incident revealed serious failings on the part of a state-owned company that had not complied with regulations regarding storage of explosives near residential buildings.
Zelensky indicated that the Myla depot had been operated by Ukraine's armed forces.
"In the fifth year of the full-scale invasion, making the same mistakes over and over is criminal negligence," Koretsky said on Telegram.
"Everyone responsible, without exception, must face severe punishment so that such situations never happen again."
Meanwhile, Tkachenko said a 14-year-old was killed in a separate attack in the Boryspil district, while Kyiv Mayor Vitaliy Klitschko said a two-year-old had died after a Russian drone crashed in Obolonskyi.
He added that five people, including an 18-year-old girl, were injured in fresh strikes on the capital on Saturday morning. Five people have been killed across the country over the past day, according to local officials.
Zelensky reported further overnight strikes in Odesa, Dnipropetrovsk, Sumy and Zaporizhzhia, as the Ukrainian army said it had shot down 233 Russian drones.
Russia and Ukraine have been intensifying their aerial attacks in recent months, with Kyiv focusing its operations on Russian economic targets.
Ukraine has for weeks struck sites belonging to Wildberries, the country's biggest online retailer, describing the firm as a legitimate target because it supplied components to the military, which Moscow denies.
In Russia, local officials said two people had been killed and 25 injured in strikes in the Belgorod and Rostov regions in the past 24 hours.
The Moscow-appointed governor of the occupied Ukrainian region of Zaphorizhzhia said four people were injured after a Ukrainian strike hit a shopping centre.
Russian online retailer Ozon said one of its logistic centres had been hit in an overnight Ukrainian drone strike. It said it had also suspended operations at a second logistics centre and evacuate staff "due to the danger in the area".
The retailer's facilities in Krasnodar, Dagestan, Stavropol and Adygea were targeted in strikes earlier this week, resulting in several injuries and widespread damage.`,
    bodyJa: `キエフ武器庫襲撃後、少なくとも37人が死亡、数百人が避難
- 公開されました
キエフ郊外の住宅地近くにあるウクライナ軍の武器を保管する倉庫がロシアの無人機攻撃で攻撃され、37人が死亡、約400人が避難した。
ウォロディミル・ゼレンスキー大統領によると、この攻撃により金曜日遅くに砲弾、地雷、ドローンが爆発し、爆発が起こり、高齢者や障害者のためのケアホームを含む近隣の施設に被害を与えた。
同氏は、保管場所は「間違いなくそこにあるべきではなかった」とし、「爆発物を人々のすぐ隣で保管していた者の重大な過失」について捜査が開始されたと述べた。
キエフ近郊の弾薬庫への攻撃はここ数カ月で２度目で、新たな怒りを引き起こしている。
地方長官ティムール・トカチェンコ氏によると、金曜日の夜の爆発で負傷した42人には子供4人が含まれており、土曜日にはブチャ地区の現場で救助活動が続いている。
ロシア国防省は声明で、ロシア軍がウクライナの首都の西にある村マイラにある「弾薬庫」を標的とし、「FP-1/FP-2長距離無人航空機の部品と発射ブースター」を保管していると述べた。
この爆発により、村の約130軒の家が被害を受けた。
地元住民のリュボフ・パブレンコさん（４５）は、弾薬庫から約２００メートル離れた自宅を視察し、「すべてが完全に損傷している」とＢＢＣに語った。
「周囲全体に亀裂があり、窓の周囲にも亀裂が入っている。基本的に、構造の完全性が損なわれている」と彼女は付け加えた。
「まだ少し感覚が麻痺しているんです。わかりません…明日少し回復したら、おそらくさらに大きな故障になるでしょう。」
ゼレンスキー大統領は、村に爆発物を保管するという決定は「絶対に容認できない」と述べ、「公務上の過失の容疑で刑事手続きが開始された」と付け加えた。
ウクライナの検事総長事務所は先に、マイラの住宅付近での「爆発物や爆発物の設置と保管の合法性」を検討していると発表した。
「関連決定を下した当局者の行動」も調査されると述べた。
しかし、ゼレンスキー大統領は先に「規制が存在しており、住宅やその他の住宅地の近くに弾薬を保管することはできない」と述べ、「適切な結論が必ず導き出されるだろう」と付け加えた。
同氏は、7月にヴィシネヴェの弾薬倉庫が襲撃され、二次爆発が発生して9人が死亡、数十人が負傷、280戸以上の家屋が被害を受けたことについて言及した。
金曜日の夜の爆発は、特にロシアの空襲が定期的に行われていることを考えると、なぜ弾薬が人々の家の近くに保管されていたのかという新たな疑問を引き起こした。
「当局、国防省、かつて食料があった場所でなぜこれが倉庫で許可されたのですか？」ボリス・ダニルクさん（61）は語った。
「なぜ人口の多い村の隣に弾薬や武器が保管されていたのでしょうか？言葉はなく、感情だけが残っています。」
ウクライナのセルギイ・コレツキー首相は、ヴィシュネヴェでの爆発事故後に「教訓」が生かされていないことに遺憾の意を表明した。
この事件の調査では、住宅付近での爆発物の保管に関する規制を遵守していなかった国営企業側の重大な過失が明らかになった。
ゼレンスキー大統領は、マイラ倉庫はウクライナ軍によって運営されていたと示唆した。
コレツキー氏はテレグラムで「本格的な侵攻５年目で同じ過ちを繰り返すのは刑事上の過失だ」と述べた。
「このような事態が二度と起こらないよう、責任者全員が例外なく厳しい処罰を受けなければならない。」
一方、トカチェンコ氏は、ボルィースピリ地区での別の攻撃で14歳が死亡したと述べ、キエフ市長のヴィタリー・クリチコは、ロシアの無人機がオボロンスキーに墜落し、２歳児が死亡したと述べた。
同氏は、土曜朝に首都で新たな空爆があり、18歳の少女を含む5人が負傷したと付け加えた。地元当局者によると、この１日で全国で５人が死亡した。
ゼレンスキー大統領は、ウクライナ軍がロシアの無人機２３３機を撃墜したと発表したことを受け、オデッサ、ドニプロペトロウシク、スームィ、ザポリージャでもさらなる夜間攻撃を行ったと報告した。
ロシアとウクライナはここ数カ月、空爆を強化しており、キエフはロシアの経済目標に作戦を集中させている。
ウクライナは数週間にわたり、同国最大のオンライン小売業者であるワイルドベリーズ社のサイトを攻撃し、同社が軍に部品を供給していることから正当な標的であると主張しているが、ロシア政府はこれを否定している。
ロシアでは地元当局者が、ベルゴロド州とロストフ州でのストライキで過去２４時間に２人が死亡、２５人が負傷したと発表した。
モスクワが任命したウクライナ占領地域ザフォリージャ州知事は、ウクライナによるショッピングセンターへの攻撃で4人が負傷したと発表した。
ロシアのオンライン小売業者オゾンは、一晩のウクライナの無人機攻撃で同社の物流センターの1つが被害を受けたと発表した。また、「地域の危険のため」第２物流センターの業務を停止し、従業員を避難させたと発表した。
クラスノダール、ダゲスタン、スタヴロポリ、アディゲにあるこの小売店の施設は今週初めにストライキの標的となり、数名の負傷者と広範囲にわたる被害をもたらした。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c86xwqez4npo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-29T20:13:16+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e283/live/cf42fda0-a3b8-11f1-b13c-0d78069132fa.jpg",
    readTime: 5,
  },
  {
    id: "former-ecuadorian-president-imprisoned-f-352344a6",
    title: "Former Ecuadorian president imprisoned for corruption",
    titleJa: "エクアドル元大統領、汚職で投獄",
    summaryJa: "エクアドル元大統領、汚職で投獄- 公開されました",
    bodyOriginal: `Former Ecuadorian president imprisoned for corruption
- Published
A former president of Ecuador has been sentenced to five years in prison after being found guilty of taking bribes.
Lenín Moreno insisted he had not taken money from a Chinese firm which secured a contract to build a hydroelectric plant in the Latin American nation.
The 73-year-old will serve his sentence under house arrest due to his age and disability, and has already indicated his intention to appeal against the verdict after a court in the capital, Quito, found him and 19 others guilty of corruption.
Moreno, who was president between 2017 and 2021, is the third former Ecuadorian leader to be sentenced for corruption.
Prosecutors alleged that that Sinohydro, which is owned by the Chinese state, paid a total of $76.1m (£56.2m) through shell companies to people involved in the deal to secure the construction of the Coca Codo Sinclair hydroelectric dam.
Among those handed prison sentences were Moreno's wife, daughter and brother, as well as former plant managers, Sinohydro representatives and a Chinese ambassador to Ecuador.
While Moreno himself was alleged to have received very little from the scheme, prosecutors said family members received tens of thousands of dollars.
Those convicted of bribery will have to repay three times what they were given, while Moreno was barred from public office.
He denied involvement in the alleged bribery scheme and instead blamed another former president, Rafael Correa, under whom he served as vice-president and who was sentenced to eight years in prison in a separate bribery case in 2020.
Moreno argued that Correa had signed off on the Coca Codo Sinclair project, and that he had launched an investigation into issues with the construction when he had assumed the presidency.
The Ecuadorian government launched legal proceedings against Sinohydro in 2021 due to cracks appearing in the dam and other technical failures. It reached a $400m settlement with the firm's owner earlier this year.
The BBC has approached Sinohydro and the Chinese embassy in Ecuador for comment.`,
    bodyJa: `エクアドル元大統領、汚職で投獄
- 公開されました
エクアドルの元大統領が収賄の罪で懲役５年の判決を受けた。
レーニン・モレノ氏は、中南米の国に水力発電所を建設する契約を結んだ中国企業から資金は受け取っていないと主張した。
73歳の同氏は、年齢と障害のため自宅軟禁下で刑に服する予定だが、首都キトの裁判所が同氏と他の19人に汚職の罪で有罪判決を下したことを受け、すでに判決に対して控訴する意向を示している。
2017年から2021年まで大統領を務めたモレノ氏は、汚職で有罪判決を受けた元エクアドル指導者としては3人目となる。
検察は、中国国家所有のシノハイドロ社が、コカ・コド・シンクレア水力発電ダムの建設を確保するために、ダミー会社を通じて取引関係者に総額7,610万ドル（5,620万ポンド）を支払ったと主張した。
実刑判決を言い渡された人の中には、モレノ氏の妻、娘、兄弟のほか、元工場長、シノハイドロ社の代表者、駐エクアドル中国大使も含まれていた。
モレノ氏自身はこの計画からごくわずかしか受け取っていないとされるが、検察当局は家族が数万ドルを受け取ったと述べた。
贈収賄で有罪判決を受けた者は与えられた額の３倍を返済しなければならないが、モレノ氏は公職から追放された。
同氏は贈収賄疑惑への関与を否定し、その代わりに、自身が副大統領を務め、2020年に別の贈収賄事件で懲役8年の判決を受けた別の元大統領ラファエル・コレア氏を非難した。
モレノ氏は、コレア氏がコカ・コド・シンクレア計画に同意し、大統領就任時に建設問題の調査を開始したと主張した。
エクアドル政府は、ダムに亀裂が発生したことやその他の技術的欠陥を理由に、2021年にシノハイドロ社に対する訴訟を開始した。今年初めに同社のオーナーと4億ドルの和解に達した。
BBCはシノハイドロと在エクアドル中国大使館にコメントを求めた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgym9rz07zo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-29T19:44:54+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/dc04/live/e3ac7010-a3d0-11f1-b109-879e35c24276.jpg",
    readTime: 2,
  },
  {
    id: "norway-s-new-king-remembers-my-dear-fath-916c279d",
    title: "Norway's new king remembers 'my dear father' in first speech",
    titleJa: "ノルウェーの新国王、第一演説で「親愛なる父」を思い出す",
    summaryJa: "ノルウェーの新国王、第一演説で「親愛なる父」を思い出す- 公開されました",
    bodyOriginal: `Norway's new king remembers 'my dear father' in first speech
- Published
King Haakon VIII of Norway has paid warm tribute to his late father, Harald V, in his first speech to the nation since taking the throne.
"Thank you for being such a good dad," he said in an at-times emotional televised address, seated at a desk in Norway's royal palace, beside a picture of the late king, two lit candles and a bowl of white roses.
Harald, 89, who was seen as a moderniser and "people's king" during his 35-year reign, died in hospital on Friday morning after being treated for a rare blood condition.
"Now it is my turn," his 53-year-old son said, adding that a "major task" awaited him and that he wished to be "present and attentive" going forward.
Who is Norway's new King Haakon VIII?
- Published1 day ago
Norway mourns King Harald as Haakon VIII ascends throne
- Published1 day ago
Oslo mayor calls off wedding ceremony after death of Norway's king
- Published1 day ago
Haakon stressed national unity in the speech, saying the royal family believed in a "society built on law and justice, where everyone is of equal value".
He said Harald had been a good father to himself and his sister, Princess Märtha Louise, as well as a "warm and funny grandfather" to his six grandchildren and a "loving and caring husband" to his widow, Queen Sonja.
The new king appeared to choke back tears as he noted that Saturday would have been their 58th wedding anniversary.
Harald brought the family together "with a natural authority", of which he might not have been aware himself, his son recalled.
He had "always stayed true" to his "values and commitments", the new king stressed.
"He constantly reminded us in the family that each of us must do things in our own way. Find our own style. Be ourselves," Haakon said.
He also remarked on the "powerful and moving experience" of seeing thousands of Norwegians gather outside the royal palace in the capital Oslo with "flowers, tributes and candles".
"We are in mourning, yet at the same time it brings comfort and strength that so many are grieving together with us," he said.
Norwegians have been laying flowers outside the royal palace in Oslo since news broke that Harald had died on Friday. A national period of mourning has been declared, with no date yet given for his funeral.
Among them was Norway's Prime Minister, Jonas Gahr Støre, who laid flowers outside the palace and signed a book of condolences after greeting the new king, said the country was "united in grief and gratitude".
Haakon will swear an oath of allegiance in parliament on Tuesday and will later participate in a consecration service with his wife, Queen Mette-Marit - a stripped-down version of a coronation, which Norway no longer holds.
He assumes his new role at a difficult time, as the royal family has faced health challenges and scandals this year.
Mette-Marit came under scrutiny when it was revealed that she had had a three-year friendship with the late convicted sex offender Jeffrey Epstein, for which she publicly apologised.
She later received a lung transplant, after suffering from pulmonary fibrosis since 2018. Doctors will not declare her stable until next year, meaning her husband must balance his new official duties with her care.
Her son from a previous relationship, Marius Borg Høiby, was convicted in June of rape and other offences and sentenced to four years in prison. He is appealing.
Høiby is not a member of the royal family, but was raised with them since he was four years old, when Haakon married his mother.
Haakon's sister, Märtha Louise, has also courted controversy for remarrying an American self-styled shaman in 2024, their business activities ultimately leading her to step back from royal duties.
Without directly referencing these controversies, Haakon said during his speech: "Our family has experienced the importance of standing together in order to remain steadfast both within ourselves and for one another even during difficult times."
He said he, along with Mette-Marit and Crown Princess Ingrid Alexandra, would "always strive to understand the life situations of different people".
He added: "No one who lives in this country knows what we will face together, but what we do know is that we will stand by one another through both good days and difficult ones."
Although Harald remained popular until his death, a poll for newspaper Aftenposten earlier this year suggested that support for the monarchy had dropped from 72% in 2024 to 54%.
However, Norwegian royal experts told the BBC that the new king, while facing questions about the turbulence surrounding his family, was respected, hard-working and, they believed, able to move forward despite the challenges.`,
    bodyJa: `ノルウェーの新国王、第一演説で「親愛なる父」を思い出す
- 公開されました
ノルウェー国王ホーコン8世は、即位後初めて国民に向けた演説で亡き父ハーラル5世に温かい敬意を表した。
「良い父親でいてくれてありがとう」と、ノルウェー王宮の机に座り、亡き国王の写真、火のついた2本のろうそく、白いバラのボウルの横に座り、時に感情を揺さぶるテレビ演説で語った。
35年間の治世中、近代化者であり「人民の王」とみなされていた89歳のハラルド氏が、まれな血液疾患の治療を受けた後、金曜朝に病院で死去した。
53歳の息子は「今度は私の番だ」と語り、「重大な任務」が彼を待っており、今後は「立ち会って注意深く」いたいと付け加えた。
ノルウェーの新国王ホーコン 8 世とは誰ですか?
- 1 日前に公開
ノルウェー、ハーコン8世の即位に伴いハーラル王を追悼
- 1 日前に公開
ノルウェー国王死去を受け、オスロ市長が結婚式を中止
- 1 日前に公開
ホーコン氏は演説で国民の団結を強調し、王室は「法と正義に基づいて構築され、誰もが平等な価値を持つ社会」を信じていると述べた。
同氏は、ハラルド氏は自身と妹のマーサ・ルイーズ王女にとって良き父親であり、6人の孫にとっては「温かくて面白い祖父」であり、未亡人のソーニャ王妃にとっては「愛情深く思いやりのある夫」だったと述べた。
新国王は土曜日が二人の58回目の結婚記念日だったと述べ、涙をこらえているようだった。
ハラルドさんは、自分でも気づいていなかったかもしれないが、「自然な権威で」家族を団結させたと息子は回想した。
新国王は自身の「価値観と公約」に「常に忠実であった」と強調した。
「彼は家族の中で、私たち一人ひとりが自分のやり方で物事を行わなければならないことを常に思い出させてくれました。自分のスタイルを見つけて、自分らしくありなさい」とホーコンさんは語った。
同氏はまた、首都オスロの王宮の外に数千人のノルウェー人が「花、賛辞、ろうそく」を持って集まるのを見た「力強く感動的な経験」についても述べた。
「私たちは喪に服していますが、同時に、これほど多くの人が私たちとともに悲しんでいるということは慰めと力を与えてくれます」と彼は語った。
金曜日にハラルドさんが亡くなったというニュースが流れて以来、ノルウェー人たちはオスロの王宮の外で献花を続けている。全国的な服喪期間が宣言されたが、葬儀の日程はまだ発表されていない。
その中にはノルウェーのヨナス・ガール・ストア首相も含まれており、新国王に挨拶した後、宮殿の外に献花し、哀悼の書に署名し、国は「悲しみと感謝の気持ちで団結している」と述べた。
ホーコン氏は火曜日に議会で忠誠の誓いを立て、その後、妻のメッテ・マリット女王とともに聖別式に参加する予定だが、これはノルウェーではもう行われていない戴冠式の簡略版である。
今年、王室が健康問題やスキャンダルに直面しているため、彼は困難な時期に新たな役職に就くことになる。
メッテ・マリットさんは、有罪判決を受けた性犯罪者の故ジェフリー・エプスタインさんと3年間にわたる友人関係にあったことが明らかになり、厳しい視線を浴びたが、そのことについて公に謝罪した。
彼女は2018年から肺線維症を患い、その後肺移植を受けた。医師は来年まで彼女の安定を宣言しないため、夫は新たな公務と彼女の介護のバランスをとらなければならないことになる。
彼女の以前の交際相手との間にできた息子、マリウス・ボルグ・ホイビさんは、6月に強姦などの罪で有罪判決を受け、懲役4年の判決を受けた。彼は魅力的だ。
ホイビーは王室の一員ではないが、ホーコンが母親と結婚した4歳の頃から王室の一員として育てられた。
ホーコンの妹、マーサ・ルイーズも2024年に米国人の自称シャーマンと再婚して物議を醸しており、彼らのビジネス活動が最終的に彼女を王室の公務から退くことにつながった。
ホーコン氏はスピーチの中で、これらの論争には直接言及せず、「私たち家族は、困難な時期であっても自分自身とお互いのために毅然とした態度を保つために団結することの重要性を経験してきた」と述べた。
同氏は、メッテ・マリット氏とイングリッド・アレクサンドラ皇太子妃とともに「さまざまな人々の生活状況を理解するよう常に努める」と述べた。
さらに、「この国に住んでいる人は、私たちが一緒に何に直面するかは誰も知りませんが、私たちが知っているのは、良い日も困難な日もお互いに寄り添っていくということです」と付け加えた。
ハラルド氏は亡くなるまで人気があったが、今年初めのアフテンポステン紙の世論調査では、君主制への支持率が2024年の72％から54％に低下していることが示唆された。
しかし、ノルウェー王室専門家らはBBCに対し、新国王は家族を取り巻く混乱について疑問に直面しながらも尊敬されており、勤勉であり、困難にもかかわらず前進できると信じていると語った。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgy79wmv4jo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-29T19:06:28+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ecd7/live/b200b740-a3dc-11f1-aed2-8d6da8d75094.jpg",
    readTime: 5,
  },
  {
    id: "openai-to-end-model-access-to-cursor-aft-23c5540c",
    title: "OpenAI to end model access to Cursor after acquisition by Elon Musk's SpaceX",
    titleJa: "OpenAI、イーロン・マスク氏のSpaceXによる買収後、モデルのCursorへのアクセスを終了へ",
    summaryJa: "OpenAIは、SpaceXによるコーディングスタートアップ企業の600億ドル買収後の懸念を理由に、Cursorを通じたモデルへのアクセスを11月12日に終了する予定だ。",
    bodyOriginal: `OpenAI announced late Friday that it is ending developers' access to its models on Cursor, following the acquisition of the AI coding startup by Elon Musk's SpaceX earlier this month.
Cursor CEO Michael Truell said, in a post on the SpaceX-owned social network X Friday night: "OpenAI models serve about 5% of Cursor user traffic, and we're speaking with the OpenAI team to resolve this. Cursor was one of the very first users of OpenAI, we've worked closely with their team for years, and we've trusted their platform to be neutral infrastructure for our business."
In their announcement, OpenAI said, "We are making this choice because we cannot be confident that SpaceX will use our technology within our terms of service, based on our experience with Elon Musk's companies violating contracts."
Its "proposed shutoff date" for OpenAI models via Cursor is Nov. 12, 2026. OpenAI also said it would not provide future models to Cursor as it winds down the agreement.
Cursor and OpenAI did not immediately respond to CNBC's requests for comment.
SpaceX completed its $60 billion acquisition of Cursor on Aug. 14, according to financial filings. Before SpaceX went public in June, it had acquired Musk's X and xAI in February.
OpenAI's move away from Cursor, now that SpaceX owns it, is part of a long-running and acrimonious clash between Musk and OpenAI CEO Sam Altman and President Greg Brockman.
In a post on X on Saturday, Musk wrote, "I couldn't care less. Scam Altman and Greg Stockman are utterly untrustworthy," used an expletive to describe them, then repeated his claim that they "stole an open source nonprofit."
Musk sued OpenAI, Altman and Brockman in 2024 after co-founding and helping to fund the AI company as a non-profit research lab in 2015.
Musk left OpenAI's board in 2018 after hiring talent away from the company, cutting off donations he had promised to OpenAI, and clashing with fellow board members over its direction. He later became one of its most prominent critics.
After Musk left, OpenAI launched massively successful AI products, namely ChatGPT, struck partnerships with tech titans including Microsoft, converted its business into a for-profit with a non-profit parent, and raised huge sums of funding.
Musk has argued in court that OpenAI's restructuring violated its founding commitments and has described the change as "stealing a charity." OpenAI disputes his claims. While he lost his lawsuit earlier this year, Musk has vowed to appeal.
As the market for "vibe coding" — or AI-assisted coding tools — heats up, OpenAI is poised to go public next year, while rival Anthropic has been holding preliminary meetings with bankers ahead of a possible IPO this year at an expected valuation as high as $2 trillion, CNBC previously reported.
OpenAI's choice to end developers' access to its models via Cursor is not a first in the industry.
Last June, Anthropic — which is now partnering with SpaceX and renting compute capacity from Musk's company — blocked Windsurf access to its Claude AI models.
Anthropic co-founder and executive Tom Brown wrote in a post on X on Friday night, "Cursor has been a trusted partner of Anthropic since Sonnet 3.5. We'll continue to increase compute to support Claude models in Cursor and are excited for what comes next with them at SpaceX."
His post drew criticism from some technology executives on X, with Replit CEO Amjad Masad reminding Brown of Anthropic's history with Windsurf, and Docker executive Mat Velloso replying, "This was a great opportunity to stay quiet."`,
    bodyJa: `OpenAIは、今月初めにイーロン・マスク氏のスペースXがAIコーディングスタートアップを買収したことを受け、金曜日遅く、開発者によるCursor上の自社モデルへのアクセスを終了すると発表した。
Cursorの最高経営責任者（CEO）マイケル・トゥエル氏は、SpaceXが所有するソーシャルネットワークXへの金曜日の夜の投稿で、「OpenAIモデルはCursorユーザートラフィックの約5％にサービスを提供しており、これを解決するためにOpenAIチームと話し合っている。CursorはOpenAIの最初のユーザーの1つであり、私たちは彼らのチームと何年も緊密に協力しており、彼らのプラットフォームが当社のビジネスにとって中立的なインフラストラクチャであると信頼してきた」と述べた。
OpenAIは発表の中で、「イーロン・マスク氏の企業が契約に違反した経験に基づき、スペースXがサービス利用規約の範囲内で当社のテクノロジーを使用するという確信が持てないため、この選択を行っている」と述べた。
Cursorを介したOpenAIモデルの「提案終了日」は2026年11月12日である。OpenAIはまた、契約が終了するため、Cursorに将来のモデルを提供しないとも述べた。
CursorとOpenAIはCNBCのコメント要請にすぐには応じなかった。
財務書類によると、スペースXは8月14日に600億ドルでのカーソル社買収を完了した。スペースXは6月の株式公開に先立ち、2月にマスク氏のXとxAIを買収していた。
OpenAIがCursorから撤退し、現在はSpaceXが所有しているが、これはマスク氏とOpenAIのCEOであるサム・アルトマン氏と社長のグレッグ・ブロックマン氏との間の長期にわたる辛辣な衝突の一環である。
土曜日のXへの投稿でマスク氏は、「どうでもいい。詐欺アルトマンとグレッグ・ストックマンは全く信用できない」と彼らを罵り言葉で表現し、その後、彼らが「オープンソースの非営利団体を盗んだ」との主張を繰り返した。
マスク氏は、2015年に非営利の研究所としてAI企業を共同設立し資金提供を支援した後、2024年にOpenAI、アルトマン、ブロックマンを訴えた。
マスク氏は、社内から人材を雇用したり、OpenAIに約束していた寄付金を打ち切ったり、方向性を巡って同僚の取締役と衝突したりした後、2018年にOpenAIの取締役会を去った。彼は後にその最も著名な批評家の一人となった。
マスク氏の退任後、OpenAIは大成功を収めたAI製品「ChatGPT」を発売し、マイクロソフトを含む大手テクノロジー企業と提携し、非営利の親会社とともに事業を営利企業に転換し、巨額の資金を調達した。
マスク氏は法廷で、OpenAIの組織再編は設立時の公約に違反し、この変更は「慈善活動を盗む」ものだと述べた。 OpenAIは彼の主張に異議を唱えている。今年初めの訴訟では敗訴したが、マスク氏は控訴すると明言した。
「バイブコーディング」（AI支援コーディングツール）の市場が加熱する中、OpenAIは来年上場する構えだが、ライバルのアンスロピックは今年のIPOの可能性に先立ち、予想評価額が2兆ドルに達する見込みで銀行関係者との予備会合を行っているとCNBCが以前報じた。
Cursor を介した開発者のモデルへのアクセスを終了するという OpenAI の選択は、業界で初めてではありません。
昨年6月、Anthropic（現在SpaceXと提携し、マスク氏の会社からコンピューティング能力を借りている）は、Windsurfによる自社のClaude AIモデルへのアクセスをブロックした。
Anthropic の共同創設者で幹部の Tom Brown 氏は金曜日の夜、X への投稿で、「Cursor は Sonnet 3.5 以来、Anthropic の信頼できるパートナーでした。私たちは Cursor のクロード モデルをサポートするために引き続きコンピューティングを強化し、SpaceX での今後の展開に興奮しています。」と書いています。
同氏の投稿はXに関する一部のテクノロジー幹部からの批判を呼び、Replit CEOのAmjadmasad氏はAnthropicとWindsurfの歴史をBrown氏に思い出させ、Docker幹部のMat Velloso氏は「これは沈黙を守る絶好の機会だった」と返答した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html",
    publishedAt: "2026-08-29T19:06:22+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "trump-administration-weighs-yosemite-lan-9eef6141",
    title: "Trump administration weighs Yosemite land swap for private developer’s access road",
    titleJa: "トランプ政権、民間開発業者のアクセス道路とヨセミテの土地交換を検討",
    summaryJa: "トランプ政権は、ヨセミテ国立公園の一部またはその権益を、新しいアクセス道路を求める民間開発業者と交換する可能性のある土地交換を検討していると内務省と同社の弁護士が認めた。キングスバーンの弁護士ラニー・デイビス氏は声明で、国立公園局はネバダ州に本拠を置くキングスバーン・リアルティ・キャピタルと土地交換について協議しており、開発業者がヨセミテの入り口につながる「1マイル以内」のアクセス道路を建設できるようにすることを明らかにした。",
    bodyOriginal: `The Trump administration is considering a land swap that could exchange a small piece of Yosemite National Park, or an interest in it, to a private developer seeking a new access road, the Interior Department and the company's lawyer confirmed.
The National Park Service has been in discussions with Nevada-based Kingsbarn Realty Capital about a land swap so that the developer can build an access road that's "under a mile" to connect to Yosemite's entrance, Lanny Davis, an attorney for Kingsbarn, said in a statement.
Kingsbarn owns an 83-acre parcel historically known as Hazel Green Ranch near Yosemite's western boundary. As part of the deal, Kingsbarn would purchase land of equal value elsewhere in California and hand it over to the park service, according to documents obtained by NOTUS, which first reported the move.
A spokesperson for the Interior Department said in a statement that no final decision has been made.
"Any land exchange or access proposal involving National Park Service lands would be subject to all applicable federal laws, regulations and Departmental policies, including required environmental review and public notification processes," the spokesperson said.
They added that if a proposal advances, the department will "follow established procedures" to ensure there's transparency and public involvement "consistent with federal law."
Davis said the shorter access route would reduce driving and vehicle emissions, framing the proposal as environmentally beneficial.
The Sierra Club, an environmental advocacy group, rebuked the plan, calling it a "corrupt back-room deal" that would break with a longstanding commitment to "protect Yosemite for the public good" by handing over national park land to a developer.
The National Parks Conservation Association said the proposal "attempts to dismantle America's conservation legacy."
"This is an attack on the American people that own this national park," the group said in a statement. "It would also be unlawful, and a court previously rejected a road development proposal."
The property's former owner previously went to court seeking easement rights over roads leading toward Yosemite. A federal appeals court in 2012 affirmed dismissal of those claims.
Land exchanges are common elsewhere in the federal government, but exchanging National Park Service land for private development access is unusual, NOTUS reported, citing a former park service official. The Trump administration's legal justification for the exchange remains unclear.
Jeff Pori, the CEO of Kingsbarn, made regular, mostly small-dollar donations to President Donald Trump's campaign committee between 2024 and 2025 and, according to NOTUS, has no history of donating to national political campaigns before October 2024.
CNBC has found no evidence that Pori's political contributions influenced the administration's consideration of the proposal.`,
    bodyJa: `トランプ政権は、ヨセミテ国立公園の一部またはその権益を、新しいアクセス道路を求める民間開発業者と交換する可能性のある土地交換を検討していると内務省と同社の弁護士が認めた。
キングスバーンの弁護士ラニー・デイビス氏は声明で、国立公園局はネバダ州に本拠を置くキングスバーン・リアルティ・キャピタルと土地交換について協議しており、開発業者がヨセミテの入り口につながる「1マイル以内」のアクセス道路を建設できるようにすることを明らかにした。
キングスバーンは、ヨセミテの西の境界近くに、歴史的にヘーゼル グリーン ランチとして知られる 83 エーカーの区画を所有しています。この動きを最初に報じたNOTUSが入手した文書によると、取引の一環として、キングスバーンはカリフォルニア州内の他の場所で同等の価値の土地を購入し、公園管理局に引き渡す予定だという。
内務省報道官は声明で、最終決定は下されていないと述べた。
「国立公園局の土地に関わるいかなる土地交換やアクセス提案も、必要な環境審査や公告手続きを含め、適用されるすべての連邦法、規制、および省の方針に従うことになる」と広報担当者は述べた。
さらに、提案が進められれば、同省は「連邦法に準拠した」透明性と国民の参加を確保するために「確立された手順に従う」と付け加えた。
デイビス氏は、アクセスルートが短縮されることで走行と車両の排出ガスが削減され、この提案は環境に有益であると述べた。
環境擁護団体のシエラクラブは、国立公園の土地を開発業者に引き渡すという「公益のためにヨセミテを保護する」という長年の約束を破る「不正な密室取引」だとし、この計画を非難した。
国立公園保護協会は、この提案は「米国の保護遺産を解体しようとしている」と述べた。
同団体は声明で「これはこの国立公園を所有するアメリカ国民に対する攻撃だ」と述べた。 「これも違法であり、裁判所は以前道路開発提案を却下した。」
この物件の元所有者は以前、ヨセミテに向かう道路の地役権を求めて裁判所に出廷した。連邦控訴裁判所は2012年にこれらの請求の棄却を認めた。
土地交換は連邦政府内の他の地域では一般的だが、民間開発アクセスのために国立公園局の土地を交換するのは異例であるとNOTUSが元公園局職員の話として報じた。トランプ政権がこの交換を法的に正当化する根拠は依然として不明瞭だ。
キングスバーンのジェフ・ポリ最高経営責任者（CEO）は、2024年から2025年にかけて、ドナルド・トランプ大統領の選挙委員会に定期的に、主に少額の寄付をしており、NOTUSによると、2024年10月以前に全国的な政治運動に寄付した履歴はないという。
CNBCは、ポリ氏の政治献金が政権のこの提案の検討に影響を与えたという証拠は見つかっていない。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/29/trump-yosemite-land-swap-kingsbarn.html",
    publishedAt: "2026-08-29T18:21:49+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 3,
  },
  {
    id: "right-wing-commentator-milo-yiannopoulos-9d037024",
    title: "Right-wing commentator Milo Yiannopoulos deported from US to UK",
    titleJa: "右翼評論家のマイロ・ヤノプロス氏が米国から英国へ国外追放",
    summaryJa: "右翼評論家のマイロ・ヤノプロス氏が米国から英国へ国外追放- 公開されました",
    bodyOriginal: `Right-wing commentator Milo Yiannopoulos deported from US to UK
- Published
British right-wing political commentator Milo Yiannopoulos has been deported from the United States after being detained by Immigration and Customs Enforcement (ICE).
Yiannopoulos, 41, a former editor of Breitbart News and one time political aide to rapper Kanye West, was deported on Friday, according to the Department of Homeland Security (DHS).
Yiannopoulos, "an illegal alien from the United Kingdom" had been sent "back to his home country", a DHS spokesperson said in a statement given to the BBC.
The self-styled provocateur has called himself the "most fabulous supervillain on the internet" and advocated for stricter US immigration controls. His critics call him a purveyor of hate speech.
Yiannopoulos, who grew up in Kent in the south of England, was arrested on 27 August after arriving at Louis Armstrong New Orleans International Airport.
He flew into the US in May 2019 and "chose to overstay his welcome in violation of our nation's laws", the DHS said.
He has previously cheered on ICE raids, last year calling for "total legal immunity for ICE agents when they're on duty".
He wrote on social media in 2025: "We have got to deport millions and millions of people. Without that, nothing else matters."
Yiannopoulos also advocated "on the spot deportation for anyone who can't prove they are in the US legally" on social media.
Yiannopoulos was an early supporter of Donald Trump during the 2016 election, headlining an event that year called Gays for Trump during the Republican National Convention.
The commentator has since become a critic of the US president, but still voices support for his agenda. He wrote on X in March this year that Trump had "lost his way, bought off by foreign interests".
Yiannopoulos has courted controversy with his comments on transgender people, Muslims, Black Lives Matter, feminists and gay people, even though he himself identified as gay. He now calls himself an "ex-gay".
In 2020, he assisted West in the rapper's unsuccessful bid to become president. He also worked for Marjorie Taylor Greene, a former Republican congresswoman who fell out with Trump and became a fierce critic before resigning from office.
Laura Loomer, a far-right commentator and Trump ally who has feuded with Yiannopoulos, took credit for his arrest by ICE, claiming on X on Friday night that his flight back to the UK had already departed.
"This subversive foreign agent is already out of the United States and DHS tells me he's NEVER allowed to come back to the United States ever again," she wrote.
In 2017, he was disinvited from speaking at CPAC, a US conservative conference that also hosted Trump, after footage emerged of Yiannopoulos appearing to condone paedophilia. He also later apologised and resigned from Breitbart.
He denied the allegations and said he had been speaking about his own experiences as a child.
Yiannopoulos was once regularly linked with the alt-right, a disparate group that is outspoken against political correctness and feminism, and which includes neo-Nazis and white supremacists among its ranks.
He has said he did not consider himself part of the alt-right, although he has called it "energising and exciting".
Related topics
- Published20 hours ago`,
    bodyJa: `右翼評論家のマイロ・ヤノプロス氏が米国から英国へ国外追放
- 公開されました
英国の右翼政治評論家マイロ・ヤノプロス氏が移民関税執行局（ICE）に拘束され、米国から国外追放された。
国土安全保障省（DHS）によると、ブライトバート・ニュースの元編集者でラッパーのカニエ・ウェストの政治補佐官だったヤノプロス氏（41歳）が金曜日に国外追放された。
DHSの広報担当者はBBCに与えた声明の中で、「英国からの不法滞在者」ヤノプロス氏は「母国に送還された」と述べた。
自称挑発者は自らを「インターネット上で最も素晴らしいスーパーヴィラン」と呼び、米国の入国管理の厳格化を主張した。彼を批判する人々は彼をヘイトスピーチの御用達と呼んでいる。
イングランド南部のケント州で育ったヤノプロスさんは、8月27日にルイ・アームストロング・ニューオーリンズ国際空港に到着後逮捕された。
DHSは、彼は2019年5月に米国に入国し、「我が国の法律に違反して歓迎を超えて滞在することを選択した」と述べた。
同氏はこれまでにもICEの強制捜査を支持しており、昨年には「ICE職員の勤務中の完全な法的免除」を求めた。
同氏は2025年にソーシャルメディアに「何百万人もの人々を国外追放しなければならない。それがなければ、他に何も問題はない」と書いた。
ヤノプロス氏はまた、ソーシャルメディア上で「合法的に米国に滞在していることを証明できない者には即時国外追放」を主張した。
ヤノプロス氏は2016年の選挙では初期からドナルド・トランプ氏を支持しており、同年の共和党全国大会では「ゲイズ・フォー・トランプ」と呼ばれるイベントのヘッドライナーを務めた。
その後、コメンテーターは米国大統領を批判するようになったが、依然として大統領の政策への支持を表明している。同氏は今年3月、トランプ氏が「外国の利益に買収され、道に迷った」とXに書いた。
ヤノプロス氏は、自身も同性愛者であると自認していたにもかかわらず、トランスジェンダー、イスラム教徒、ブラック・ライブズ・マター、フェミニスト、同性愛者に関する発言で物議を醸してきた。彼は現在、自分自身を「元同性愛者」と呼んでいます。
2020年にはウェスト氏の大統領就任を支援したが、失敗に終わった。彼はまた、トランプ大統領と不仲になり、辞任する前に激しい批判者となった元共和党議員マージョリー・テイラー・グリーン氏の下でも働いていた。
極右評論家でヤノプロス氏と確執がありトランプ氏の盟友であるローラ・ルーマー氏は、ICEによる同氏の逮捕は自分の手柄だとし、金曜夜のX番組で英国へ帰国する飛行機はすでに出発していたと主張した。
「この破壊的な外国工作員はすでに米国を出国しており、国土安全保障省は彼が二度と米国に戻ることは許されないと言っている」と彼女は書いた。
2017年、ヤノプルス氏が小児性愛を容認しているかのような映像が流出したことを受け、トランプ氏も主催した米国の保守系会議「CPAC」での講演から招待を取り消された。彼は後に謝罪し、ブライトバート社を辞任した。
彼は容疑を否定し、子供の頃の自分の経験について話していたと述べた。
ヤノプロス氏はかつて、ポリティカル・コレクトネスやフェミニズムに対して声高に反対する異種グループであるオルタナ右翼と定期的に結びついており、その中にはネオナチや白人至上主義者も含まれていた。
同氏は、自分がオルタナ右翼の一員であるとは考えていないが、オルタナ右翼を「活力を与え刺激的なもの」だと述べている。
関連トピック
- 20 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqlw52vr0dwo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-29T17:52:42+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7b75/live/1fc52210-a320-11f1-b109-879e35c24276.jpg",
    readTime: 4,
  },
  {
    id: "am-i-too-old-for-roth-conversions-i-m-84-9447a3b7",
    title: "Am I too old for Roth conversions? I’m 84 and my wife is 77. We have $8 million saved.",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "「私たちはファイナンシャル・アドバイザーに資産の2％、つまり年間約16万ドルを支払うことに気が進まないのです。」",
    bodyOriginal: `“We are reluctant to pay a financial adviser 2% of assets — roughly $160,000 per year.”`,
    bodyJa: `「私たちはファイナンシャル・アドバイザーに資産の2％、つまり年間約16万ドルを支払うことに気が進まないのです。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/am-i-too-old-for-roth-conversions-im-84-and-my-wife-is-77-we-have-8-million-saved-fb08fccd?mod=mw_rss_topstories",
    publishedAt: "2026-08-29T16:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-88832809",
    readTime: 2,
  },
  {
    id: "i-feel-shoehorned-my-father-funded-my-8-99c6a564",
    title: "‘I feel shoehorned’: My father funded my $800,000 Roth IRA. Does that give him the right to say how I invest it?",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `“His argument is essentially that, since my parents provided the money for the Roth, they have a say in how I invest it.”`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-feel-shoehorned-my-father-funded-my-800-000-roth-ira-does-that-give-him-the-right-to-say-how-i-invest-it-7b1e3ab3?mod=mw_rss_topstories",
    publishedAt: "2026-08-29T15:31:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-48497737",
    readTime: 2,
  },
  {
    id: "goodyear-burning-rubber-and-cash-as-turn-1f0018c5",
    title: "Goodyear burning rubber and cash as turnaround plan continues",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.スチュワートの計画の一環として、ダンロップブランドなどのユニットを売却するなど、グッドイヤーをプレミアムタイヤセグメントにさらに参入させることが含まれている。また、今年は1,600以上の新製品を発売する予定だが、そのほとんどが利益率のより高いハイエンドセグメントにある。",
    bodyOriginal: `DETROIT — Goodyear Tire & Rubber CEO Mark Stewart sits in the vehicle bay of a tire shop where the company is launching a new retail experience for customers.
There's a freshly painted black facade on the revamped Detroit store, with the words "Motor City" added in white flanking Goodyear's winged foot logo. It's dressed up for a private event tied to a nearby annual car festival called the Woodward Dream Cruise.
But despite the stylish touches, it's still a tire shop. The smell of rubber and oil remains in the air, and the sound of workers changing tires combines with music from a DJ inside the shop's waiting room.
The scene symbolizes Stewart's ongoing "Goodyear Forward" turnaround plan. He's trying to make tires — a historically dirty business — more attractive to investors and friendlier for consumers.
"We have made so much progress, and when you think about it from the standpoint of the Goodyear Forward program, it was really to get our feet back on the ground towards being the iconic company that we always were," Stewart, wearing an unbuttoned navy blue Goodyear technician shirt, told CNBC during an interview at the shop.
But while Goodyear is well known for burning rubber, it's also burning cash as it restructures, tries to refinance, and pays down years of debt.
The company's capital expenditures were roughly $2 billion combined in 2024 and 2025, with expectations of $725 million this year. Its debt remained above $7 billion at the end of the second quarter.
Goodyear's net loss was $453 million through the first half of the year, while its operating income was $131 million, or a 1.6% margin.
Under the turnaround plan, Stewart wanted Goodyear to reach a 10% operating margin by the end of last year. Instead, that came in at 8.5% in the fourth quarter, and it's still an outstanding goal for the company to hit that mark.
"We're working on getting to that double-digit margin, and we're working on meaningfully generating cash flow," Stewart said. "It's been a long time since Goodyear's done that. That we absolutely must do."
The automotive veteran was named CEO of Goodyear after leaving Chrysler parent Stellantis in January 2024. Since then, shares of the company have fallen more than 50% despite Goodyear achieving many of the milestones he's set out to accomplish with the plan.
Stewart doesn't make excuses for missing the targets, even though Goodyear's business, like many, has been impacted by tariffs, inflated raw material costs, and the expansion of cheaper Chinese products.
"We still have a lot of geopolitical headwinds that we're working through … a lot of headwinds with raw material indexes and a bit of the hangover from the tariff environment," he said, adding that overseas manufacturers continue to have cost advantages compared to Goodyear.
Goodyear's raw material costs are expected to be roughly flat year over year, but a $200 million headwind in the second half, largely due to higher commodity costs associated with the conflict in the Middle East, according to the company and Wall Street analysts.
"Goodyear has faced many big challenges over the past few years, ranging from slower consumer (and commercial) demand, to rising raw material costs, to higher capital expenditures (capex), to low-priced Asian imports (into the U.S.), and, more recently, to trade and tariff legislation. It hasn't been easy for Goodyear," Argus analyst Bill Selesky said in an Aug. 17 investor note.
Goodyear is rated a hold with a price target of $7.60, according to average analyst ratings compiled by FactSet. Its shares closed Friday at $6.35, down 27% this year.
Goodyear Forward rolls on
The Goodyear Forward turnaround strategy was initially expected to be a two-year plan that went through last year, but the CEO has continued it as he and his executive team map out what's next for the 128-year-old Akron, Ohio-based company.
"At the right time, we will announce that," Stewart said. "We continue to press ahead to the next challenges and make sure we get the business in the right space."
The Goodyear Forward plan had already been released when Stewart was named incoming CEO, but he has made it his own, including by adding cuts and cost savings. The turnaround plan has cut roughly $1.5 billion in annualized costs, according to the company.
Part of Stewart's plan has been to move Goodyear more into the premium tire segment, including by selling off units such as its Dunlop brand. It also plans to launch more than 1,600 new products this year, most of which are in higher-end segments with bigger margins.
The product restructuring comes as non-U.S. brands, especially Asia's Sumitomo and Yokohama, have been expanding globally with cheaper products in lower-end segments, according to Stewart.
Similar to how Chinese automakers have grown outside their own country, tire manufacturers have also been turning to more exports, including the U.S.
"We are not going to compete against a $6 or $10 converted tire. That's not who we are as Goodyear," Stewart said, referring to the manufacturing cost required to convert raw materials into a finished tire.
Despite global challenges, Goodyear's Asia-Pacific region is a bright spot for the company. Its segment operating income for the second quarter was $63 million, with an operating margin of 12.7%.
Its U.S. operations have been a main drag on the company's financials. Stewart is trying to turn that around as consumer demand slows.
The company said its cash burn is expected to continue into 2027 but moderate as the announced closure next year of a plant in Fayetteville, North Carolina, is expected to improve its Americas segment operating income by $270 million annually.
"We had to take a very difficult decision, but a necessary one to announce the closure of our Fayetteville, North Carolina facility. We absolutely didn't take that lightly, but we just didn't have a pathway to be competitive out of that facility," Stewart said.
The Goodyear Forward plan was prompted by activist investor Elliott Investment Management revealing a stake in the company in 2023. A spokesperson for Elliott, which supported three new Goodyear board members, declined to comment on the company or the firm's current ownership status.
Goodyear blimps flying high
Part of the Goodyear Forward strategy is to increase focus on marketing and advertising to connect with customers to reinforce the brand.
A large part of that — both physically and financially — comes from the company's iconic Goodyear blimps, which have flown as giant advertisements for more than a century.
"The blimp team and the marketing team have really embraced it. So we do a lot of activation around the blimp to literally sell tires," Stewart said. "When the blimp media marketing has their hat on, it's always in context of 'How do we tie this to the tires?'"
Stewart said Goodyear has leaned into the promotion, using social media platforms to tout its aircraft — and their connection to tires — and launching "buy to fly" campaigns in which tire retailers and consumers can win flights aboard its blimps.
The company was showing off its revamped store alongside a Detroit event that attracts hundreds of thousands of car enthusiasts along a 16-mile stretch annually. To celebrate and get its advertising in front of tire buyers, it held a rare double-blimp appearance, according to the company. It also featured a collection of smaller "mini blimps."
"We've always made the tires worth bragging about," Stewart said. "We're just reminding people now, and that ties into our marketing and advertising as well."
CORRECTION: An earlier version of this story incorrectly said two Japanese companies, Sumitomo and Yokohama, are based in China.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
スチュワートの計画の一環として、ダンロップブランドなどのユニットを売却するなど、グッドイヤーをプレミアムタイヤセグメントにさらに参入させることが含まれている。また、今年は1,600以上の新製品を発売する予定だが、そのほとんどが利益率のより高いハイエンドセグメントにある。
スチュワート氏によると、この製品再編は、米国以外のブランド、特にアジアの住友や横浜が低価格帯の製品で世界的に拡大していることを受けて行われたという。
中国の自動車メーカーが国外で成長したのと同様に、タイヤメーカーも米国を含む輸出拡大に目を向けている。
スチュワート氏は、原材料を完成タイヤに加工するのに必要な製造コストについて言及し、「我々は、換算6ドルや10ドルのタイヤと競争するつもりはない。それはグッドイヤーとしての我々の姿ではない」と語った。
世界的な課題にもかかわらず、グッドイヤーのアジア太平洋地域は同社にとって明るい分野です。第 2 四半期のセグメント営業利益は 6,300 万ドルで、営業利益率は 12.7% でした。
米国事業は同社の財務に大きな影響を与えている。消費者の需要が鈍化する中、スチュワート氏はこの状況を好転させようとしている。
同社は、キャッシュバーンは2027年まで続くと予想されるが、ノースカロライナ州フェイエットビルの工場の来年の閉鎖が発表され、米州部門の営業利益が年間2億7000万ドル改善すると予想されるため、緩やかになると述べた。
「私たちは非常に難しい決断を下さなければならなかったが、ノースカロライナ州フェイエットビルの施設の閉鎖を発表するには必要な決断だった。決して軽視したわけではなかったが、私たちにはその施設から競争力を発揮する道がなかっただけだ」とスチュワート氏は語った。
グッドイヤー・フォワード計画は、物言う投資家エリオット・インベストメント・マネジメントが2023年に同社への出資を明らかにしたことがきっかけとなった。グッドイヤーの新取締役3名をサポートしたエリオットの広報担当者は、同社や同社の現在の所有状況についてコメントを控えた。
グッドイヤー飛行船が高く飛んでいる
グッドイヤー フォワード戦略の一環として、マーケティングと広告に重点を置き、顧客とのつながりを強化してブランドを強化することが挙げられます。
その大部分は、物理的にも財務的にも、1世紀以上にわたって巨大な広告として飛行してきた同社の象徴的なグッドイヤー飛行船によるものだ。
「飛行船チームとマーケティングチームはそれを非常に受け入れています。そのため、私たちは文字通りタイヤを販売するために飛行船を中心に多くの活動を行っています」とスチュワート氏は言いました。 「飛行船のメディアマーケティングが真剣に取り組んでいるとき、それは常に『どうやってこれをタイヤに結び付けるか？』という文脈の中にあります。」
スチュワート氏によると、グッドイヤーはこのプロモーションに力を入れており、ソーシャルメディアプラットフォームを利用して自社航空機とそのタイヤとの関係を宣伝し、タイヤ小売業者や消費者が同社の飛行船での航空券を獲得できる「バイ・トゥ・フライ」キャンペーンを開始していると述べた。
同社は、毎年26マイルの沿道に何十万人もの自動車愛好家が集まるデトロイトのイベントの傍ら、リニューアルした店舗を披露していた。同社によれば、これを記念してタイヤ購入者の前で宣伝を行うため、珍しい二重飛行船の外観を用意したという。小型の「ミニ飛行船」のコレクションも展示されていました。
「私たちは常に自慢に値するタイヤを作ってきました」とスチュワートは語った。 「私たちは今、人々に思い出させているだけであり、それは私たちのマーケティングや広告にも関係しています。」
訂正: この記事の以前のバージョンでは、日本企業 2 社、住友と横浜が中国に拠点を置いていると誤って述べられていました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/29/goodyear-turnaround-cash-debt.html",
    publishedAt: "2026-08-29T13:56:58+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "5-affordable-cities-to-retire-in-the-u-s-f9704585",
    title: "5 affordable cities to retire in the U.S. right now",
    titleJa: "今すぐ米国でリタイアするのに手頃な価格の都市 5 つ",
    summaryJa: "自分の退職後のビジョンに合った手頃な価格の住居を見つけるために国外に出る必要はありません。",
    bodyOriginal: `You don’t have to leave the country to find an affordable place that matches your retirement vision.`,
    bodyJa: `自分の退職後のビジョンに合った手頃な価格の住居を見つけるために国外に出る必要はありません。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/5-cheap-u-s-cities-to-retire-in-if-you-can-deal-with-this-one-thing-fbda5d1a?mod=mw_rss_topstories",
    publishedAt: "2026-08-29T12:50:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-81114874",
    readTime: 2,
  },
  {
    id: "tim-cook-wasn-t-a-product-guy-so-he-re-e-796bc026",
    title: "Tim Cook wasn’t a ‘product guy’ — so he re-engineered Apple instead",
    titleJa: "ティム・クックは「製品担当者」ではなかったので、代わりに Apple を再設計した",
    summaryJa: "「製品担当ではない」と一蹴された退任するCEOは、サプライチェーンを熟知すればAppleを新たな高みに引き上げられることを証明した。",
    bodyOriginal: `Dismissed as “not a product guy,” the outgoing CEO proved that supply-chain mastery could take Apple to new heights.`,
    bodyJa: `「製品担当ではない」と一蹴された退任するCEOは、サプライチェーンを熟知すればAppleを新たな高みに引き上げられることを証明した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/tim-cook-wasnt-a-product-guy-so-he-re-engineered-apple-instead-03ca53f4?mod=mw_rss_topstories",
    publishedAt: "2026-08-29T12:30:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-40700898",
    readTime: 2,
  },
  {
    id: "k-c-or-e-why-economists-can-t-agree-on-t-90d16948",
    title: "K, C or E? Why economists can’t agree on the shape of today’s economy",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `C. K. E.
Those aren't initials or Greek life letters. They're some of the terms that economists, corporate leaders and politicians are using as they attempt to define the U.S. current economic moment.
Ever since the recovery from the pandemic, a consensus among economists has viewed the economy as acting in a "K"-shape, displaying an unequal expansion for different groups and the arms of the "K" heading in opposite directions.
Now there's a debate over whether the K-shaped recovery still exists, or if the economy instead resembles the letter "C" or "E."
"This is some of the alphabet soup," said Joel Mokyr, a Nobel Prize-winning economic historian at Northwestern University.
The race to label the structure of today's economy involves more than semantics or bragging rights. In recent years, the divergence among low- and high-income consumers expressed in a K-shaped economy has been top of mind for politicians, monetary policymakers and executives of consumer companies.
For decades, letter shapes have been used to sum up the economy, especially following major downturns. The list of those that have been employed throughout history includes "V-," "L-" and "W-shaped."
But it's unusual for this type of description to have staying power among everyday Americans several years after a recession, as it does today, according to Don Rissmiller, chief economist at research firm Baird Strategas. Mounting concerns around wealth inequality may be driving heightened awareness, he said.
"During recessions and recoveries, the letters are really popular," Rissmiller said. "To use a letter in the middle of a business cycle, I guess we could say that's a little new."
From K to C
Treasury Secretary Scott Bessent made waves earlier this month when he declared that the K-shaped economy was in the rearview mirror. In its place, the former hedge fund manager said a C-shaped economy was forming, meaning the bottom class of consumers were gaining ground.
Bessent cited wage gains among lower-earners and larger tax cuts this year, pointing to President Donald Trump's "no tax on tips" and "no tax on overtime" policies as boosting the worst-off.
"I got sick of hearing about this K-shaped economy," Bessent, one of Trump's top economic lieutenants, told CNBC this month. "I can say here definitively, the K-shaped economy is over."
Bessent isn't the only one giving the "C" letter air time. Hilton Worldwide CEO Christopher Nassetta told analysts late last month that his hotel company is "definitely seeing" a C-shaped economy.
Weakness in high incomes isn't driving the convergence between the two ends of the class spectrum, Nassetta said. Instead, the chief executive said Hilton's middle- and upper-middle segments have swung from posting negative numbers to growing at rates as high as 6%.
"The middle class is getting back in the game," Nassetta said. "It's really impossible to deny."
But Anthony Chan, JPMorgan's former chief economist, said the U.S. war with Iran throws a wrench into this emergent view.
Lower-income consumers spend more of their incomes on energy, he said, meaning they are affected more by surging gas prices as the conflict threatens to keep inflation high. That should mitigate any gains for lower income Americans from White House efforts to increase tax refunds or make homes more affordable, he said.
"I'm the first to say that we can make some progress," Chan said. "But nothing of the sort of progress that we can say we can bury the K-shaped economy."
Still a K
Indeed, it's hard to argue that the K-shaped economy has faded so long as consumer sentiment remains weak and the cost of living shapes up as a defining issue in the midterm election cycle, Chan said.
Consumer sentiment dropped 11% in August from a year ago and was recently near record lows recorded earlier this year, according to the University of Michigan's closely-followed survey released Friday. Confidence among low- and middle-income respondents took an outsized hit this month, said Joanne Hsu, the survey's director.
Leaders at several consumer companies said they still see signs of a K economy.
"The dynamic of a K-shaped economy we see is alive and well in the United States," said Shane Grant, Colgate-Palmolive's operations chief for the Americas, at a Deutsche Bank consumer conference in June.
Bill Boltz, a merchandising executive at Lowe's, said last week on the home retailer's earnings call that the K-shaped economy is one variable that "continues to shape" consumer spending trends. CEO Nicholas Fink at Constellation Brands, maker of Modelo beer and Robert Mondavi wine, told analysts last month the economy even looks "increasingly" like a K.
Others are finally seeing cracks start to form in the K-shaped economy, years after it grew to dominate economic analysis.
While income growth didn't appear to show a K-shaped divergence among different income groups between 2021 and 2023, consumption did reflect a clear break, according to a report from a team at the Federal Reserve Bank of Richmond published last month.
The Bank of America Institute said that may be changing. While higher earners had been spending more using credit cards, the institute said the gap across income classes began narrowing in May of this year.
"What was once a 'K'-shaped consumer is increasingly becoming one of convergence," David Michael Tinsley, the institute's senior economist, wrote to clients.
Researchers at the New York Fed also said their latest research into credit card debt showed the K-shaped economy continues to dominate as an economic theme. Combined credit card balances of a near-record $1.26 trillion in the second quarter are evidence "there are a lot of households that live paycheck to paycheck."
Evolution to E
Others wonder if the economy has evolved into an E-shape after more than half a decade in a K-shape. In this view, there are three distinct classes of Americans that are neither moving farther apart nor converging.
In other words: "Each group has found a way to live," said Rissmiller of Baird Strategas.
"It may not be the best outcome," Rissmiller added. "But it is an outcome that looks more stable than not."
Michael Eisenband, global chairman of corporate finance at FTI Consulting, recently said in a client note that the E-shaped assessment "better illustrates" clearly divergent spending patterns among different income groups. The E can serve as a "more fitting depiction of the times," he said.
Heather Long, chief economist at Navy Federal Credit Union, said an E-shaped description of the economy may be more accurate than a K because it better captures a middle class that's just hanging on. A view that low- and high-earners are somehow converging requires "some real mental gymnastics," she said.
Wyndham Hotels & Resorts CEO Geoff Ballotti similarly told analysts on an earnings call earlier this year that while its middle-tier consumer is "feeling better" and "regaining confidence in purchasing power," that might reflect either a C- or E-shaped economy.
For other executives, an E-shaped economy, with three income groups on parallel but unequal tracks, remains an alien concept — for now. Scott Thompson, CEO of Somnigroup International, admitted to being out of the loop when asked about an E-shaped analysis on the Tempur-Pedic mattress maker's earnings call this month.
"That's a new one for me," Thompson said. "I was ready for K; hadn't thought about E."`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/29/k-shaped-economy-c-shaped-e-shape.html",
    publishedAt: "2026-08-29T12:22:50+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "tech-backlash-reaches-fever-pitch-as-ai-f6e1d579",
    title: "Tech backlash reaches fever pitch as AI angst collides with social media fears",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Silicon Valley's technology leaders have long dreamed of making the world a better place. But now more than ever, Americans say they're living in a tech-induced nightmare.
The rapid rise of artificial intelligence giants like OpenAI and Anthropic has exacerbated a deep malaise toward the tech sector, especially among people who have come to associate AI with job loss and now see outsized data centers rising up in their backyards. The last generation of technology, meanwhile, ushered in a cohort of social media apps that proved so addictive that Meta agreed to fork over up to $17 billion as part of a landmark settlement this week.
At a time of stubbornly high inflation that's pushed consumer confidence to a seven-month low, Americans are looking up to see tech's trillion-dollar companies getting bigger and more powerful, all while being led by some of the wealthiest people on the planet.
"If this technology takes off in the way that you see the CEOs of AI Labs talking about, we're facing a significant impact to our economy, to people's jobs, to their sense of agency," Sarah Myers West, co-executive director of research firm AI Now Institute, told CNBC in an interview. "There are lots of members of the public that don't want to see that vision roll out."
More than half of Americans say they're more concerned than excited about the growing use of AI in daily life, according to a recent report from the Pew Research Center. That's up from 37% in 2021. And in a poll earlier this year, the Searchlight Institute found that the overwhelming majority of voters believe social media has a negative impact on society.
Confidence in AI executives is even more dismal, according to a CNBC Generation Lab survey of 18- to 34-year-olds. More than 75% of respondents said they don't trust Anthropic CEO Dario Amodei to act responsibly, while around 70% of respondents expressed those views about OpenAI CEO Sam Altman and Meta CEO Mark Zuckerberg.
The public's mounting disdain toward the tech sector could prove to be especially challenging for Anthropic and OpenAI, which are both valued at nearly $1 trillion and are gearing up for potentially historic IPOs. Those offerings could mint a number of fresh billionaires and scores of millionaires. AI backlash is expected to appear as a key risk factor in Anthropic's IPO prospectus, as CNBC previously reported.
In a post on X earlier this month, Amodei acknowledged that the public has a negative view of AI, and he said Anthropic and other companies will have to deliver on their promises to improve people's lives.
"I think it is fundamentally a crisis of trust," Amodei wrote. "I think that ordinary people don't trust companies, governments, or the tech industry and always suspect that we are cooking up some new way to screw them over. The causes of this go back decades and AI is just the latest iteration of it."
Experts told CNBC that backlash against the tech sector is reaching new heights, and that the widespread angst is drowning out conversations about its potential benefits, particularly in regards to AI. Companies have to go beyond a charm offensive, they say.
"Treating it as a PR problem and a problem of public sentiment would be tremendously misguided," West said. "To improve public sentiment requires really meaningfully contending with where the public is at and what they want in a more meaningful way than just, 'Can we convince you to get on board?'"
'There's not a lot of trust'
AI data centers, the large facilities that house the hardware for training and running AI models, have become a particularly sore subject, serving as a physical manifestation of the widespread anger toward AI.
During the first quarter of this year, around $130 billion worth of data center projects were blocked or delayed due to local opposition, according to a report from Data Center Watch. In just three months, that figure neared the roughly $156 billion worth of facilities that were disrupted during all of 2025.
As backlash against the facilities has mounted, groups like the Stop Data Centers Coalition have been pushing for a national moratorium on new projects to give lawmakers and the public time to more closely examine their environmental, societal and economic impacts.
Emily Wurth, organizing director for Food and Water Watch, said data center concerns cut across a number of issues, including water use, higher utility bills, emissions increases, noise pollution and the potential that the facilities are "taking over agricultural land."
In parts of Arizona, Michigan and Pennsylvania, she said she's seen "hundreds of people showing up to speak out and oppose these projects."
"I think it likely caught companies and legislators by surprise," she said.
The outrage has spilled into the tech workforce. Amazon engineers testified at a Seattle City Council meeting in June to call for greater government regulation of AI data centers, and criticized the company's use of "dirty energy" at some sites.
"There's not a lot of trust necessarily in the utilities and the regulators, given the higher electricity prices that we've seen over previous years," James Coleman, a professor of law at the University of Minnesota, told CNBC in an interview.
Sentiment isn't universally negative. Jennifer Huddleston, senior fellow in technology policy at the Cato Institute, said in an interview that "many unions are coming out in favor of data centers, not only because of the initial construction boom, but also the electricians and HVAC" professionals that are in demand "once they're built."
The so-called hyperscalers responsible for much of the building boom say they're responding to insatiable demand from businesses and consumers for their services, many of which are enabling critical advancements in areas like medical research and precision farming.
Even so, opposition to data centers has become a major flashpoint in this year's midterm elections, which are just two months away. Both Democratic and Republican hopefuls have spoken out against the facilities during their campaigns.
The National Republican Senatorial Committee, or NRSC, warned that data centers have become a "sleeper issue" for the entire midterm election cycle, according to a memo obtained by CNBC earlier this month.
Social media in the spotlight
Jim Steyer, CEO of the nonprofit Common Sense Media, said bipartisan opposition to tech extends well beyond just data centers. He said Americans are "fed up" with the behavior of a number of big tech companies.
"There is genuinely a techlash, and it's not partisan at all," Steyer, whose brother Tom was a Democratic candidate for governor in California, told CNBC in an interview. "It doesn't matter if you're liberal or conservative, or you vote for Republicans or Democrats, or what part of the country you live in. It's everywhere."
The lawsuit that Meta settled this week was brought by a bipartisan coalition of state attorneys general, who argued that Meta endangered children and teens with its social media apps like Instagram and Facebook. As part of the settlement, the company agreed to make substantial changes to its products in addition to paying billions of dollars in penalties.
Meta agreed to impose channges including a default two-hour daily time limit for teens across Facebook and Instagram, muted notifications during school hours, and enhanced parental controls, with more updates potentially on the horizon.
"It's a floor conceptually, not a ceiling," California AG Rob Bonta, who co-led the case, said at a news conference on Wednesday.
Steyer described the settlement as an overdue but "well-deserved victory" that reflects broad public sentiment. He added that the antipathy towards tech is the most intense it's been since he founded Common Sense more than 20 years ago.
It's a "qualitatively different moment in terms of the backlash," Steyer said. "If I were running one of the big companies, I would be very aware of that."
Then there's the matter of surveillance, and Atlanta startup Flock Safety.
Flock's technology, which photographs every passing license plate and uses AI to extract data, has been installed across thousands of American cities and towns. Critics say police have used the cameras to stalk women or wrongfully accuse people of crimes.
Ahead of the midterms, politicians on both sides of the aisle have called for greater regulation. Abdul El-Sayed, the progressive Democrat running for U.S. Senate in Michigan, posted a video on X earlier this month accusing his Republican counterpart, Mike Rogers, of enabling their proliferation.
Florida Republican Gov. Ron DeSantis, whose term will come to an end in January, said this week the systems were "out of control." President Donald Trump said his stance on the cameras is "under review."
More than 90 cities have deactivated, rejected or canceled Flock contracts so far this year, according to DeFlock, an advocacy group that tracks the rollout of Flock systems.
Flock didn't provide a statement for this story.
Jay Stanley, a senior policy analyst with the American Civil Liberties Union, said the fallout "folds neatly" into the resentment toward AI, data centers and the power of tech billionaires.
"I think there is a long-term grassroots bipartisan suspicion of this kind of surveillance," he said.
—CNBC's Annie Palmer and CJ Haddad contributed to this report
WATCH: Tusk Venture’s Bradley Tusk talks what data centers need to do to gain trust`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/29/tech-backlash-ai-data-centers-elections.html",
    publishedAt: "2026-08-29T12:16:03+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "iran-trade-falls-as-supreme-leader-khame-8f85c8d6",
    title: "Iran trade falls as Supreme Leader Khamenei urges less reliance on the U.S. dollar",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Iranian trade has fallen sharply under U.S. sanctions and a naval blockade, President Masoud Pezeshkian said, as Supreme Leader Mojtaba Khamenei urged a reduction in reliance on the U.S. dollar.
"We have had a decrease of between 25% and 35%. Our exports have decreased, but imports have decreased more," Iranian President Masoud Pezeshkian said in an interview late Friday with state TV and according to a Google translation of a Tasnim News transcript. "The decrease in exports is slightly less than the decrease in imports, and imports have decreased significantly."
"What do these statistics mean? Then some people say that sanctions have no effect at all! I really don't know what to tell these people," Pezeshkian was quoted as saying. "I just want to say this, saying that sanctions have no effect is not consistent with these facts."
Meanwhile, Supreme Leader Mojtaba Khamenei called for greater economic self-reliance in a written message Friday.
"Equally vital is giving special attention to economic growth, boosting production, gradually phasing out the US dollar from playing a pivotal role, and ultimately, making Resistance Economy the central focus," Mojtaba Khamenei said in a post on X late Friday.
Toughened sanctions campaign kicks off
On Monday, U.S. Treasury Secretary Scott Bessent launched "Operation Economic Outcast," a sanctions campaign aimed at severing all of Iran's economic ties worldwide.
In one of its first moves, the Treasury Department on Friday proposed cutting off the UAE operations of Egyptian bank Banque Misr from correspondent banking access to U.S. financial institutions over alleged financial ties to Iran.
Treasury proposed revoking Banque Misr UAE's correspondent banking access to U.S. financial institutions, the department said in a statement.
Banque Misr UAE processed about $1.8 billion over the past two years for 103 companies that are potentially part of Iran's shadow banking network, according to Treasury.
The bank said in a statement Saturday that it is cooperating with relevant authorities and added that the regulatory action is limited to its branch in the UAE, which continues to serve its customers.
Iranian crude oil exports are down sharply as the U.S. intensifies economic pressure on Tehran through sanctions and its naval blockade.
Iranian crude oil loaded for export plunged in August, according to data shared Thursday by trade intelligence firm Kpler. The U.S. has increasingly emphasized economic pressure through sanctions and its naval blockade to coerce Tehran into a deal to fully reopen the Strait of Hormuz.
Tehran has loaded about 260,000 barrels per day for export at its ports so far this month, down more than 80% from 1.7 million bpd in August 2025, Kpler reported.
President Donald Trump reimposed the blockade on July 14 in retaliation for Iran attacking oil tankers transiting the Hormuz Strait. Tehran's crude loadings are down about 70% in August from 893,000 bpd last month.
Iranian oil reserves
U.S. Central Command said Saturday that as of Aug. 28, its forces have "redirected 82 commercial vessels, disabled 3 and boarded 2 to ensure compliance."
The Trump administration believes Iran will eventually run out of money and have to capitulate, said Bob McNally, president of Rapidan Energy.
The blockade has been "very effective," said Matt Smith, director of commodity research at Kpler. It has "walloped Iran's crude export loadings," he said. The crude Tehran can load on tankers probably doesn't make it past the blockade, Smith added.
But Iran's Ministry of Petroleum said it has enough oil reserves for sale to meet its 2026-2027 budget requirements while bypassing maritime blockades, according to a post on Telegram translated by Google.
It said it has transferred $7.5 billion in proceeds from oil sales over a four-month period to the country's central bank, enough to cover foreign currency expenditures through early January 2027.
Friday marked six months since the U.S. and Israel launched "major combat operations" in Iran, prompting retaliatory strikes on targets across the Gulf and sparking a new war in the Middle East.
What was initially to be a weeks-long conflict has evolved into a standoff that geopolitical analysts say has no end in sight.
The conflict has dragged on for six months, despite early expectations that major fighting would last only weeks, while efforts to reopen the Strait of Hormuz remain unresolved.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/29/iran-trade-sanctions-dollar-oil-exports.html",
    publishedAt: "2026-08-29T12:08:08+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "buffett-remains-active-at-96-but-berkshi-eb0e3ea1",
    title: "Buffett remains active at 96, but Berkshire's shares aren't doing much",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Buffett remains active at 96, but Berkshire's shares aren't doing much
Warren Buffett will be celebrating his 96th birthday on Sunday.
Even though he is no longer Berkshire Hathaway's CEO, he remains very involved as chairman, apparently continuing to make the big decisions on equities, including the addition in recent quarters of what is now a $36.6 billion stake in Google parent Alphabet.
Berkshire investors, however, will not be celebrating the performance of the company's stock.
After rallying in the wake of its Q2 earnings report to an intraday high of $537.74 on Aug. 10, its best level since its record high close just before Buffett's May 2025 announcement he would be stepping down as CEO, the Class B stock has fallen back to close Friday at $505.00, up just 0.5% year to date.
That puts it 12.2 percentage points behind the benchmark S&P 500, which is up 12.7% on the year.
While acknowledging it's "hard to say" why Berkshire's stock is lagging, Barron's lists of number of possible explanations, including uncertainty over Greg Abel as CEO, disappointment he hasn't been more aggressively reducing the company's still large cash position, Berkshire's continuing refusal to pay a dividend, and its failure to make a giant acquisition of $100 billion or more.
President Trump's portfolio actively trades Berkshire shares
Berkshire Hathaway is one of the many stocks being frequently bought and sold for President Donald Trump's investment portfolio.
Of the 1,051 transactions listed in his disclosure form covering the month of June for the U.S. Office of Government Ethics, five involve Berkshire's stock.
Four of them specify Berkshire's Class B shares, while one just lists Berkshire Hathaway Inc.
There were three purchases and two sales.
The disclosure form only lists a range for each transaction, not a specific amount, so we can only look at a range of totals.
Thanks to the June 18 purchase between $1 million and $5 million, Trump was a net buyer for the month.
In Trump's 2025 annual report, he reports holding between $1 million and $5 million worth of Berkshire shares.
After reviewing thousands of trades in earlier disclosures, Bloomberg reported the "patterns bear the hallmarks of overlapping portfolio-management strategies, often index-based and much of it likely automated, and all of it difficult to disentangle."
It says that's largely in line with the Trump Organization's public statements that third-party financial institutions independently manage the trading using "automated, model-based portfolios and direct indexing strategies" with no input from the president or his family.
Critics argue the president, along with top administration officials and members of Congress, should not be allowed to own individual stocks so they can avoid even the appearance of impropriety.
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Simply Wall St: Berkshire Hathaway (BRK.B) Stock Looks Cheap On Fair Value While Earnings Stay Modest
- The Motley Fool on Yahoo: Bill Gates' Foundation Holds Berkshire Hathaway as Its Top Stock, a Signal of Its Preference for Steady Compounders Over Flashy Tech
- The Business Times: Tokio Marine plots multibillion-dollar deal after Berkshire takes stake
HIGHLIGHTS FROM CNBC'S BUFFETT ARCHIVE
'Trade should not be a weapon' (2025)
Without specifying President Trump's controversial tariffs, Warren Buffett argues the U.S. "should be looking to trade with the rest of the world."
BECKY QUICK: This first question comes from Bill Mitchell. I received more questions about this than any other question.
He writes, "Warren, in a 2003 Fortune article you argued for import certificates to limit trade deficits and said these import certificates basically amounted to a tariff. But recently, you called tariffs an act of economic war.
"Has your view on trade barriers changed? Or do you see import certificates as somehow distinct from tariffs?"
WARREN BUFFETT: Yeah, well, the import certificates were distinct, but their goal is to balance imports against exports. And so that the trade deficit would not grow in an enormous way.
In fact, it would've — and it had various other provisions in it to help third world countries — at that time, as they were called — to perhaps catch up a little bit.
And they had a variety of aspects to them. But basically, they were designed to balance trade.
And I think you can make some very good arguments for the fact that balanced trade is good for the world. And the more balanced trade there is, the better.
It will continue to be better for cocoa to be raised in Ghana, and coffee in Colombia, and a few things...
We should be looking to trade with the rest of the world, and we should do what we do best, and they should do what they do best...
Trade should not be a weapon.
And the United States — the United States — we've won. I mean, we have become an incredibly important country, starting from nothing 250 years ago. There's nothing that's been anything like it.
And it's a big mistake, in my view, when you have seven and a half billion people that don't like you very well, and you've got 300 million that are crowing in some way about how well they've done.
And I don't think it's right, and I don't think it's wise.
I do think that the more — the more prosperous the rest of the world becomes — it won't be at our expense — the more prosperous we'll become and will then — the safer we'll feel, and your children will feel someday. So that's — (Applause)
But don't expect my import certificate idea to go down there with Adam Smith's Wealth of Nations or anything. (Laughter)
BERKSHIRE STOCK WATCH
Four weeks
Twelve months
BRK.A stock price: $757,985.01
BRK.B stock price: $505.00
BRK.B P/E (TTM): 12.70
Berkshire market capitalization: $1,081,295,529,555
Berkshire Cash as of June 30: $365.5 billion (Down 8.0% from March 31)
Excluding Rail Cash and Subtracting T-Bills Payable: $359.2 billion (Down 3.8% from March 31)
Berkshire repurchased $4.5 billion of its shares in Q2 2026.
BERKSHIRE'S TOP EQUITY HOLDINGS - Aug. 28, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of June 30, 2026, as reported in Berkshire Hathaway's 13F filing on Aug.14, 2026, except for:
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@cnbc.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/29/buffett-remains-active-at-96-but-berkshires-shares-arent-doing-much.html",
    publishedAt: "2026-08-29T11:53:36+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "meta-s-18-billion-settlement-puts-tiktok-ce19f222",
    title: "Meta’s $18 billion settlement puts TikTok and YouTube on notice. Who's next on the firing line?",
    titleJa: "Meta の 180 億ドルの和解により、TikTok と YouTube は注目を集めています。次に発砲するのは誰でしょうか？",
    summaryJa: "メタ社がオンラインで子どもを守るようライバル社に呼び掛けた後、ある経営学教授はCNBCに対し、「メタ社は競合他社にも同じルールを適用させようとしている」と語った。",
    bodyOriginal: `Meta's watershed social media trial just wrapped up in California, but now attention is shifting to the wider industry with TikTok, YouTube and Snap next on the firing line.
The Instagram and Facebook owner settled in week two of a trial brought by a coalition of tens of U.S. states alleging that the tech giant had misled the public about the harms its platforms posed to younger users.
The agreement includes a payment of up to $18 billion, part of which is tied to conditional action by other social media giants. Meta said it would also make fundamental changes to its platforms for users under the age of 18, including but not limited to a 2-hour daily usage limit that only a parent can lift, disabling extreme makeup and cosmetic surgery filters, tighter age verification measures, and night mode.
Meta said it would only pay 70% of the settlement, or around $12.7 billion to the states over a period of 10-years. The remaining $5.3 billion is conditional on the company's rivals TikTok and Alphabet's YouTube also making similar changes to their apps for younger users.
California's Attorney General Rob Bonta, a co-lead in this case alongside New Jersey, Colorado, and Kentucky, said Meta's settlement "gives notice to others in the industry that we're not done, and we expect similar outcomes from them as well."
"No company wants what Meta faced in Oakland," Rob Lalka, a professor of practice in management at Tulane University and author of "The Venture Alchemists: How Big Tech Turned Profits Into Power," told CNBC.
"I'd expect TikTok, YouTube, and Snapchat to make changes before they ever face that scene. These platforms depend entirely on being trusted, by parents, by users, by advertisers, and the settlement reflects a business decision about reputational risk, which now the boards of these other companies must also make," Lalka added.
CNBC has contacted YouTube, TikTok and Snap for comment.
Social media giants were already facing increased pressure this year as governments worldwide consider enforcing teen social media bans. Meanwhile, Meta, TikTok, YouTube and Snap have faced a litany of lawsuits.
Meta and YouTube lost in a social media addiction trial in Los Angeles earlier this year, which was brought by a plaintiff who claimed her mental health was damaged by addictive features like autoplay and infinite scrolling.
Meta also lost a separate social-media case brought by New Mexico Attorney General Raul Torrez, after a court found that the company violated the state's child-safety laws and ordered it to pay over $900 million in penalties.
'We're continuing our fight'
Now that the Meta case has been settled, California's Bonta said, "We'll be continuing our fight across social media," by pursuing lawsuits against the big players like TikTok, Snap and YouTube.
In an interview with CNBC on Thursday, Bonta said he approved of Meta calling out other platforms in the settlement. "That is appropriate. This is something that requires an industry-wide solution."
He explained that the state of California is currently pursuing active litigation against TikTok.
"We are suing TikTok now so we are looking to ensure that they adopt the similar practices and commitments that Meta did, and we are very interested in Snap and YouTube as well," Bonta said.
Bonta, New York's Attorney General Letitia James, and 14 other state attorneys filed a lawsuit against TikTok in 2024 for violating consumer protection laws. They said that TikTok harms younger users with addictive features that maximize the amount of time they spend on the platform. The case is ongoing.
Bonta added that the state is in communication with Snap, and is pursuing conversations with TikTok, with hopes that YouTube will also come to the table.
Read more
While Meta is attempting to frame itself as a leader on online youth safety, it neglected those issues for years, according to Lalka.
"Let's be clear about how we got here. It took attorneys general stepping in after the harm was already done, because Congress never passed a law to prevent it.
"These new rules didn't come from elected policymakers, they were negotiated in a settlement with the company being regulated, and Meta is seeking to ensure its competitors will face the same rules," Lalka said.`,
    bodyJa: `Metaの重要なソーシャルメディア裁判はカリフォルニアで終わったばかりだが、現在はTikTok、YouTube、Snapが次に火をつけるとして、注目は業界全体に移っている。
インスタグラムとフェイスブックのオーナーは、テクノロジー大手が自社のプラットフォームが若いユーザーにもたらす害について国民に誤解を与えたと主張する米国数十の州連合が起こした裁判の第２週で和解した。
この合意には最大180億ドルの支払いが含まれており、その一部は他のソーシャルメディア大手による条件付き措置に関連している。 Metaはまた、18歳未満のユーザー向けにプラットフォームに根本的な変更を加えると述べた。これには、保護者のみが解除できる1日2時間の使用制限、過激なメイクや美容整形フィルターの無効化、年齢確認措置の厳格化、ナイトモードなどが含まれるがこれに限定されない。
メタ社は、10年間で和解金の70％、つまり約127億ドルのみを各州に支払うと述べた。残りの53億ドルは、同社のライバルであるTikTokやアルファベット傘下のYouTubeも若いユーザー向けにアプリに同様の変更を加えることが条件となっている。
ニュージャージー州、コロラド州、ケンタッキー州とともにこの訴訟の共同責任者であるカリフォルニア州のロブ・ボンタ司法長官は、メタ社の和解は「業界の他の人々に、私たちがまだ終わっていないことを知らせるものであり、私たちは彼らからも同様の結果を期待している」と述べた。
「メタがオークランドで直面したことを望んでいる企業はいない」とチューレーン大学の実践経営学教授であり、『The Venture Alchemists: How Big Tech Turned Profit Into Power』の著者であるロブ・ラルカ氏はCNBCに語った。
「私は、TikTok、YouTube、Snapchatがそのような事態に直面する前に変化を起こすことを期待している。これらのプラットフォームは、保護者、ユーザー、広告主からの信頼に完全に依存しており、今回の和解は風評リスクに関するビジネス上の決定を反映しており、今後はこれら他の企業の取締役会も同様の決断を下さなければならない」とラルカ氏は付け加えた。
CNBCはYouTube、TikTok、Snapにコメントを求めた。
世界中の政府が青少年向けソーシャルメディア禁止の施行を検討しているため、ソーシャルメディア大手は今年すでにさらなる圧力にさらされていた。その一方で、Meta、TikTok、YouTube、Snapは度重なる訴訟に直面している。
MetaとYouTubeは、今年初めにロサンゼルスで行われたソーシャルメディア依存症裁判で敗訴した。この裁判は、自動再生や無限スクロールなどの中毒性のある機能によって精神的健康が損なわれたと主張する原告が起こしたものである。
メタ社はまた、裁判所が同社が州の児童安全法に違反していると認定し、9億ドル以上の罰金の支払いを命じた後、ニューメキシコ州のラウル・トーレス司法長官が起こした別のソーシャルメディア訴訟でも敗訴した。
「我々は戦いを続けている」
メタ訴訟は和解した今、カリフォルニア州のボンタ氏は、TikTok、Snap、YouTubeなどの大手企業に対する訴訟を進め、「ソーシャルメディア全体で闘いを続ける」と述べた。
ボンタ氏は木曜日のCNBCとのインタビューで、メタ社が和解で他のプラットフォームに言及することを承認すると述べた。 「それは適切です。これは業界全体の解決策が必要な問題です。」
同氏は、カリフォルニア州が現在TikTokに対する積極的な訴訟を進めていると説明した。
「我々は現在TikTokを訴訟しているので、彼らにもMetaと同様の慣行と取り組みを確実に採用してもらいたいと考えている。我々はSnapとYouTubeにも非常に興味を持っている」とボンタ氏は語った。
ボンタ氏、ニューヨーク州司法長官レティシア・ジェームス氏、その他14人の州検事らは2024年、消費者保護法違反でTikTokを相手に訴訟を起こした。 TikTokは、プラットフォーム上で費やす時間を最大限にする中毒性のある機能により、若いユーザーに害を与えていると彼らは述べた。事件は進行中だ。
ボンタ氏は、州はスナップと連絡を取り合っており、YouTubeも交渉のテーブルにつくことを期待してTikTokとの協議を進めていると付け加えた。
続きを読む
ラルカ氏によると、メタ社はオンラインでの青少年の安全に関するリーダーとしての地位を確立しようとしているが、こうした問題を長年無視してきたという。
「私たちがどのようにしてここに至ったのかを明確にしておこう。議会はそれを防ぐ法律を一度も可決しなかったため、すでに被害があった後で司法長官が介入する必要があった。
「これらの新しい規則は、選挙で選ばれた政策立案者によってもたらされたものではなく、規制対象の企業との和解で交渉されたものであり、メタは競合他社が同じ規則に確実に従うよう努めている」とラルカ氏は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/29/meta-settlement-tiktok-youtube-snap-teen-safety.html",
    publishedAt: "2026-08-29T05:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "footage-of-tibet-floods-isn-t-being-show-acc9fde2",
    title: "Footage of Tibet floods isn't being shown in China - and we know little about victims there",
    titleJa: "チベットの洪水の映像は中国では放映されていない - そして現地の犠牲者についてはほとんどわかっていない",
    summaryJa: "チベットの洪水の映像は中国では放映されていない - そして現地の犠牲者についてはほとんどわかっていない- 公開されました",
    bodyOriginal: `Footage of Tibet floods isn't being shown in China - and we know little about victims there
- Published
The dramatic footage was almost impossible to miss. A torrent of water tearing through Gyirong Port, one of the main border crossings between Nepal and Tibet, sweeping away all in its path as hundreds of people fled for their lives.
The scenes, captured by CCTV cameras, quickly spread on social media and onto screens around the world.
Except here, in China.
Only a single still-frame shot has been broadcast so far by the country's state-run flagship news bulletin.
It has also been difficult to find the video on China's heavily censored internet. It is just as hard to even find posts describing the flash flooding that has claimed hundreds of lives, with just as many still unaccounted for since Wednesday.
Beijing has launched a massive rescue operation involving hundreds of emergency workers, which is continuing, and President Xi Jinping chaired an emergency meeting with officials to co-ordinate efforts.
But when you compare the country's internet content to what much of the world has been seeing online these past few days, China's firewall becomes more visible than ever.
Tibet, which Beijing annexed in the 1950s, had long resisted rule by the Chinese Communist Party.
China has quashed protests over the years, sometimes violently, and has been accused of grave rights violations in the Buddhist region. It has labelled the exiled spiritual leader, the Dalai Lama, a separatist.
That history means the very name Tibet draws China's censors. Beijing's sensitivities are especially apparent at times likes this.
There have been daily updates on the missing and the dead, and Beijing has also been posting updates on the rescue operations, as well as the dangers posed by a barrier lake that has been at risk of overflowing.
On Saturday, new footage from Chinese state media showed rescue teams wandering in a wasteland of mud and rock while calling out to anyone trapped.
But there is little detail beyond that. There are no accounts from survivors in Tibet, and almost no user-generated footage showing the deadly moments or their aftermath.
We are yet to hear from anxious families of those missing. Trying to contact people there is near-impossible during regular times.
As a journalist who has covered North Korea, it has often been easier for me to contact interviewees in Pyongyang than it is in the Tibetan capital, Lhasa.
On Thursday night, as global headlines led on the devastation in a Himalayan valley, China's state broadcaster opened its main bulletin with the launch of Xi's new book, a selection of his "most important and fundamental works".
Foreign journalists cannot travel to Tibet without government permission. We have just a few hours to get as much information as we can on huge stories like this before videos are scrubbed and voices stifled.
Instead, we have to rely on state media, which has so far focused on incredibly dramatic rescue efforts.
Specialist search teams scaling mountains and cliff faces, or crossing raging rivers to try to get to the worst-affected areas. We don't yet know what happened afterwards, or who they were able to save.
This is not to say that Beijing is unconcerned. Rather, they are very concerned.
China's Premier Li Qiang was quickly despatched to the region, where he was seen inspecting debris removal - a rare visit by the country's second-most important leader so soon after a major disaster.
The reason for what the world might see as a muted response is to preserve the one thing Xi covets for his country: stability.
The Communist Party will fear that such a disaster could fuel discontent, either with the response or the lack of foresight to prevent it.
It may also fear the impact of a tragedy like this and its potential to be a rallying factor, especially in a community where faith has long played a central role.
Although the region has not seen protests in a long time, Tibetan groups abroad have expressed concern over increasing Chinese control, such as new education laws that they say aim to weaken the role of monasteries and the Buddhist faith.
Just hours after the disaster struck, the Communist Party machine tried to rally its grassroots to stem any signs of discontent of its handling of the landslide.
A notice came from the local party office urging members to step up and help in disaster relief efforts in their area and provide emotional guidance or psychological support to affected residents.
The key line instructs them to "make every effort to maintain social order and ensure stability and public confidence in the disaster areas". Those who perform well would be rewarded - and those who do badly "would be held accountable".
It is a warning that will not be taken lightly. Tibetans in the region can be detained or arrested for speaking to journalists or posting anything online that is seen as contrary to the government narrative, according to rights activists.
That is making it difficult for Tibetans outside the region to find out what has happened to their relatives.
The International Campaign for Tibet, while praising the work of first responders in the area, said Beijing had been removing videos and other first-hand information from social media. It called on Chinese authorities to "disclose complete and verifiable information about the damage and casualties".
To try to understand what life is like for Tibetans, the BBC travelled to a town that sits on the edge of the Himalayan plateau last year - just outside what China calls the Tibetan Autonomous region.
There, we spoke to monks at the Kirti monastery in Aba, or Ngaba in Tibetan, which was once at the heart of its resistance to Beijing. "We Tibetans are denied basic human rights," one monk told us.
They said they lived under constant surveillance and claimed the Chinese government oppressed and persecuted Tibetans. The conversations were brief because we could not be seen speaking to anyone for long.
Beijing denies it is violating Tibetans' rights, and points to the heavy investments it has made in the region to boost tourism and integrate it with the rest of the country.
Nevertheless, people in China will not know very much about what is happening in Tibet right now.
- Published2 days ago`,
    bodyJa: `チベットの洪水の映像は中国では放映されていない - そして現地の犠牲者についてはほとんどわかっていない
- 公開されました
ドラマチックな映像を見逃すことはほぼ不可能でした。ネパールとチベットの間の主要な国境検問所の一つであるギロン港を激流が引き裂き、何百人もの人々が命からがら逃げ出す中、進路上のすべての人を押し流した。
監視カメラが捉えたその光景は、ソーシャルメディアや世界中のスクリーン上ですぐに拡散した。
ここ、中国を除いて。
これまでのところ、国営の主要ニュース速報で放送されたのは静止画1枚だけだ。
中国の厳しく検閲されたインターネット上でこのビデオを見つけることも困難だった。数百人の命を奪った鉄砲水について説明する投稿を見つけることさえ同様に困難であり、水曜日以降も同様に多くの人が未だに行方不明となっている。
中国政府は数百人の救急隊員を動員した大規模な救助活動を開始し、現在も続いており、習近平国家主席は取り組みを調整するため当局者らとの緊急会議の議長を務めた。
しかし、この国のインターネット コンテンツと、ここ数日世界中でオンラインで見られているコンテンツを比較すると、中国のファイアウォールがこれまで以上に目立つようになります。
中国政府が1950年代に併合したチベットは長年、中国共産党による支配に抵抗してきた。
中国は長年にわたって抗議活動を時には暴力的に鎮圧しており、仏教地域における重大な権利侵害で非難されてきた。亡命した精神的指導者ダライ・ラマを分離主義者とレッテルを貼った。
その歴史は、チベットという名前そのものが中国の検閲官を惹きつけることを意味する。北京の敏感さは、今回のような時に特に顕著に表れる。
行方不明者や死者に関する最新情報は毎日更新されており、北京政府も救助活動や氾濫の危険にさらされている堰堤湖がもたらす危険性に関する最新情報を投稿している。
土曜日、中国国営メディアが報じた新たな映像には、救助隊が泥と岩の荒れ地をさまよいながら、閉じ込められた人たちに声をかけている様子が映っていた。
しかし、それ以上の詳細はほとんどありません。チベットの生存者からの証言はなく、致命的な瞬間やその余波を示すユーザー作成の映像もほとんどありません。
行方不明者の不安を抱える家族からの連絡はまだ届いていない。通常の時間帯にそこにいる人々と連絡を取ろうとすることはほぼ不可能です。
北朝鮮を取材してきたジャーナリストとして、私にとっては、チベットの首都ラサよりも平壌のほうが取材対象者と連絡を取るのが簡単だったことがよくある。
木曜夜、世界的な見出しがヒマラヤ渓谷の惨状につながる中、中国国営放送は主報の冒頭で、習主席の「最も重要かつ基本的な著書」から選ばれた新著を発表した。
外国人ジャーナリストは政府の許可なしにチベットに渡航することはできない。ビデオが削除されたり、声が押し殺されたりする前に、このような巨大な記事についてできる限り多くの情報を入手するのに、私たちにはほんの数時間しかありません。
代わりに、私たちは国営メディアに頼らなければなりません。国営メディアはこれまで信じられないほど劇的な救出活動に焦点を当ててきました。
専門の捜索チームが山や崖をよじ登ったり、荒れ狂う川を渡ったりして、最も被害が大きかった地域に到達しようとします。その後何が起こったのか、彼らが誰を救うことができたのかはまだわかっていません。
これは中国政府が無関心だと言っているわけではない。むしろ、彼らはとても心配しているのです。
中国の李強首相はすぐにこの地域に派遣され、がれきの撤去を視察する姿が見られたが、大規模災害発生直後に中国で２番目に重要な指導者がこれほど早く訪問したのは異例のことだった。
世界が控えめな反応とみなすかもしれないその理由は、習氏が自国に切望する唯一のもの、つまり安定を維持するためだ。
共産党は、このような災害が対応やそれを防ぐための先見性の欠如によって不満を煽る可能性があることを懸念するだろう。
また、特に信仰が長い間中心的な役割を果たしてきたコミュニティにおいて、このような悲劇がもたらす影響と、それが結集の要因となる可能性を恐れているのかもしれない。
この地域では長い間抗議活動が起きていないが、海外のチベット人団体は、僧院の役割や仏教信仰を弱めることを目的としているとする新教育法など、中国の支配が強まることに懸念を表明している。
災害発生からわずか数時間後、共産党組織は土砂崩れへの対応に対する不満の兆候を阻止するために草の根の結集を試みた。
地元の党事務所からは、会員に対し、自らの地域での災害救援活動に積極的に協力し、被災住民に精神的な指導や心理的支援を提供するよう促す通知が届いた。
要点は「社会秩序を維持し、被災地の安定と国民の信頼を確保するためにあらゆる努力をする」と指示している。良い成績を収めた者には報酬が与えられ、悪い成績を収めた者は「責任を問われる」ことになる。
これは軽視してはならない警告です。人権活動家らによると、この地域のチベット人は、ジャーナリストと話したり、政府の主張に反すると思われる内容をオンラインに投稿したりした場合、拘留または逮捕される可能性があるという。
そのため、地域外のチベット人が自分たちの親族に何が起こったのかを知ることが困難になっている。
チベット国際キャンペーンは、同地域での初期対応者の活動を称賛する一方で、中国政府がソーシャルメディアからビデオやその他の直接情報を削除していると述べた。中国当局に対し「被害と死傷者に関する完全かつ検証可能な情報を開示する」よう求めた。
チベット人の生活がどのようなものかを理解しようと、BBCは昨年、ヒマラヤ高原の端、中国がチベット自治区と呼ぶ地域のすぐ外側にある町を訪れた。
そこで私たちは、かつて北京への抵抗の中心地だったアバ、またはチベット語でンガバのキルティ僧院の僧侶たちに話を聞いた。 「私たちチベット人は基本的人権を否定されています」と、ある僧侶は私たちに語った。
彼らは常に監視下で暮らしていると主張し、中国政府がチベット人を弾圧し迫害していると主張した。私たちが誰とも長く話しているところは見られなかったので、会話は短時間でした。
中国政府はチベット人の権利を侵害していることを否定し、観光業を促進し、国内の他の地域と統合するために同地域に多大な投資を行っていると指摘している。
それにもかかわらず、中国の人々はチベットで今何が起こっているのかをあまり知らないでしょう。
- 2 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2z415w2gpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-29T03:54:11+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8d37/live/67a7cd10-a2fa-11f1-8d5b-155abe464768.jpg",
    readTime: 7,
  },
  {
    id: "trump-hails-historic-deal-for-us-to-cont-c06ee050",
    title: "Trump hails 'historic' deal for US to control 65bn barrels of Venezuela's oil",
    titleJa: "トランプ大統領、米国がベネズエラ産原油650億バレルを管理する「歴史的な」合意を称賛",
    summaryJa: "トランプ大統領、米国がベネズエラ産原油650億バレルを管理する「歴史的な」合意を称賛- 公開されました",
    bodyOriginal: `Trump hails 'historic' deal for US to control 65bn barrels of Venezuela's oil
- Published
The US has reached a deal with Venezuela to control more than 65 billion barrels of its proven oil reserves, President Donald Trump announced.
"This Historic Transaction MORE THAN DOUBLES American Oil Reserves, greatly increases our Oil Supply, and will substantially lower Gas Prices for all Americans," Trump posted on social media.
Venezuela's interim President, Delcy Rodriguez, hailed the agreement as one that would help her nation's economic revival.
Trump vowed to tap Venezuela's reserves, the world's largest, after the US captured its then-President Nicolás Maduro this year. More recently, Trump has been under pressure to tame domestic petrol prices, which spiked amid the Iran conflict.
Secretary of State Marco Rubio called the oil deal "a huge win for both the American and Venezuelan people". Few details were released.
"For the Venezuelan people, this deal will bring nearly $100 billion in private investment, support thousands of high-paying jobs, and drive the reconstruction of Venezuela's economy," Rubio said on social media.
In his own post, Trump said Rubio and Defence Secretary Pete Hegseth had reached the agreement with Venezuela's leadership "through a partnership with private business".
He did not elaborate on the partnership or describe possible commitments and terms for the US in the deal, but he claimed the agreement was reached "at no cost to the American Taxpayer".
Venezuela's interim president said in a statement that the agreement would have "a significant impact on our nation's revival".
The deal calls for the development of 17 strategic oil fields with a proven potential of 65 billion barrels, as well as "an investment of more than $100 billion, and more than $209 billion in taxes for the State", Rodriguez said.
"These investments will contribute not only to the recovery and modernization of our industry, but also to our country's economic growth, the energy security of our hemisphere, and greater balance in international markets," she said.
Under the deal the US government will retain 55% control of a joint venture with an "experienced private operator in Venezuela", a US official told the BBC's media partner CBS News.
Rodriguez gave the venture a 100-year concession to operate in the oil fields, according to the official.
Trump gave few specifics of the highly unusual agreement, which apparently grants the US direct governance over a foreign country's sovereign national resources.
The deal would also appear to be wider in scope than the US-led Coalition Provisional Authority's control over Iraq's oil revenues after Saddam Hussein was ousted in an American-led invasion in 2003.
But it is unclear whether the Venezuela agreement could face legal and constitutional challenges in the South American nation. The official text of the agreement between Washington and Caracas has not been released.
President Maduro and his wife, Cilia Flores, were seized in a US special forces operation authorised by Trump on 3 January.
In the hours after the raid, Trump said his administration would run Venezuela until a "safe, proper and judicious transition" could take place, adding that the US would indefinitely control the sale of the country's oil.
Venezuela has the largest proven oil reserves in the world - an estimated 303 billion barrels. However, production has plummeted since its peak in the late 1990s.
Trump has asked US oil firms to invest at least $100bn (£75bn) to restore the country's oil industry.
He has also claimed the rights to Venezuela's oil after saying that the country had in the past "unilaterally seized and sold American oil, American assets and American platforms, costing us billions and billions of dollars".
- Published30 January`,
    bodyJa: `トランプ大統領、米国がベネズエラ産原油650億バレルを管理する「歴史的な」合意を称賛
- 公開されました
ドナルド・トランプ大統領は、米国がベネズエラと確認された石油埋蔵量650億バレル以上を管理する合意に達したと発表した。
トランプ大統領はソーシャルメディアに「この歴史的な取引によりアメリカの石油埋蔵量は2倍となり、石油供給が大幅に増加し、全アメリカ国民のガソリン価格が大幅に引き下げられるだろう」と投稿した。
ベネズエラの暫定大統領デルシー・ロドリゲスは、この協定が国の経済復興に役立つものであると称賛した。
今年米国が当時のニコラス・マドゥロ大統領を拘束したことを受け、トランプ大統領は世界最大のベネズエラの埋蔵金を活用すると誓った。最近では、トランプ大統領はイラン紛争で高騰した国内のガソリン価格を抑制するよう圧力を受けている。
マルコ・ルビオ国務長官は、石油協定は「アメリカ国民とベネズエラ国民の双方にとって大きな勝利だ」と述べた。詳細はほとんど公開されなかった。
ルビオ氏はソーシャルメディアで「この協定はベネズエラ国民にとって１０００億ドル近い民間投資をもたらし、数千の高賃金雇用を支援し、ベネズエラ経済の再建を促進するだろう」と述べた。
トランプ大統領は自身の投稿で、ルビオ氏とピート・ヘグセス国防長官が「民間企業とのパートナーシップを通じて」ベネズエラ指導部と合意に達したと述べた。
同氏は提携について詳しくは述べなかったし、合意における米国の約束や条件の可能性については説明しなかったが、合意は「米国の納税者の負担なく」合意に達したと主張した。
ベネズエラ暫定大統領は声明で、この協定は「我が国の復興に重大な影響を与える」と述べた。
ロドリゲス氏は、この協定では、650億バレルの潜在力が確認されている17の戦略的油田の開発のほか、「1000億ドル以上の投資と2090億ドル以上の国税」が求められていると述べた。
「これらの投資は我が国産業の回復と近代化だけでなく、我が国の経済成長、我が国半球のエネルギー安全保障、国際市場のバランス向上にも貢献するでしょう」と彼女は述べた。
この協定に基づき、米国政府は「ベネズエラの経験豊富な民間事業者」との合弁事業の55％の支配権を保持することになる、と米国当局者がBBCのメディアパートナーであるCBSニュースに語った。
関係者によると、ロドリゲス氏はこのベンチャー企業に油田での操業について100年間の譲歩を与えたという。
トランプ大統領は、外国の主権国家資源に対する米国の直接統治を明らかに認める極めて異例な協定の詳細についてはほとんど言及しなかった。
この協定はまた、2003年の米国主導の侵攻でサダム・フセインが失脚した後のイラク石油収入に対する米国主導の連合暫定当局の管理よりも範囲が広いとみられる。
しかし、ベネズエラ合意が南米の国において法的、憲法上の問題に直面する可能性があるかどうかは不透明だ。ワシントンとカラカス間の合意の正式文書は公表されていない。
マドゥロ大統領とシリア・フローレス夫人は1月3日、トランプ大統領が認可した米軍特殊部隊の作戦で拘束された。
襲撃から数時間後、トランプ大統領は「安全で適切かつ賢明な政権移行」が実現するまでベネズエラを運営すると述べ、米国が同国の石油販売を無期限に管理すると付け加えた。
ベネズエラには世界最大の確認石油埋蔵量があり、その量は推定3,030億バレルです。しかし、1990年代後半のピークから生産量は激減。
トランプ大統領は米国の石油会社に対し、同国の石油産業を回復するために少なくとも1000億ドル（750億ポンド）を投資するよう要請した。
同氏はまた、ベネズエラが過去に「米国の石油、米国の資産、米国のプラットフォームを一方的に押収・売却し、何十億ドルもの損害を与えた」と述べ、ベネズエラの石油に対する権利を主張した。
- 1 月 30 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2zlwe7qj1o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-29T02:42:27+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6691/live/b40e7f80-a356-11f1-a291-b542ee92de7c.jpg",
    readTime: 4,
  },
  {
    id: "trump-announces-deal-with-venezuela-to-s-fc67d03f",
    title: "Trump announces deal with Venezuela to secure more than 65 billion barrels of oil reserves",
    titleJa: "トランプ大統領、650億バレル以上の石油埋蔵量を確保するベネズエラとの合意を発表",
    summaryJa: "イランとの戦争で世界の原油貿易が混乱する中、米国はベネズエラと650億バレル以上の石油埋蔵量の過半数の支配権を得る協定を結んだと、ドナルド・トランプ大統領が金曜日に発表した。トランプ大統領は夕方のソーシャルメディアへの投稿で、「世界史上最大の石油取引」と宣伝したこの合意は米国の納税者に「無償」で提供されると述べた。",
    bodyOriginal: `The U.S. struck a deal with Venezuela to get majority control of more than 65 billion barrels of oil reserves as the war with Iran roils the global crude trade, President Donald Trump announced Friday.
Trump said in an evening social media post that the agreement — which he touted as "THE BIGGEST OIL DEAL IN WORLD HISTORY" — comes "at no cost to" U.S. taxpayers.
The agreement more than doubles the U.S. oil reserve, according to Trump. Department of Energy data released earlier this month showed oil volumes in the Strategic Petroleum Reserve hit lows not seen since the 1980s.
Trump's deal with Venezuela follows the U.S.' January attack on the South American country. Nicolás Maduro, Venezuela's then-president, and his wife, Cilia Flores, were captured during the strike.
In his social media post, Trump said U.S. officials coordinated with government leaders in Venezuela. They also utilized a "partnership" with unnamed private businesses to secure the deal, he said.
"This Transaction will greatly strengthen the already growing relationship between Venezuela and the United States," Trump wrote in the post.
Trump's announcement comes as consumers grapple with spiking energy prices heading into the midterm elections, which will determine if his Republican party retains full control in Washington.
Trump said the Venezuela deal should bring down prices at the pump. The average price of a gallon of gas in the U.S. reached around $4.09 on Friday, a 27% increase year over year, according to AAA.
West Texas Intermediate crude prices fell 4% this week, marking the first losing week of the last three. Still, prices have jumped more than 24% since the U.S. war with Iran began.
Trump's war with Iran has hampered transit in the Strait of Hormuz, a globally important passageway for crude. Only a handful of ships have recently crossed through Hormuz each day, down from levels of around 100 seen a year ago, according to the International Monetary Fund's PortWatch tracker.`,
    bodyJa: `イランとの戦争で世界の原油貿易が混乱する中、米国はベネズエラと650億バレル以上の石油埋蔵量の過半数の支配権を得る協定を結んだと、ドナルド・トランプ大統領が金曜日に発表した。
トランプ大統領は夕方のソーシャルメディアへの投稿で、「世界史上最大の石油取引」と宣伝したこの合意は米国の納税者に「無償」で提供されると述べた。
トランプ大統領によれば、この合意により米国の石油埋蔵量は2倍以上に増加するという。今月初めに発表されたエネルギー省のデータによると、戦略石油備蓄の石油量は1980年代以来の最低水準に達した。
トランプ大統領のベネズエラとの合意は米国に続くものだ」 1月に南米の国に対する攻撃。当時のベネズエラ大統領ニコラス・マドゥロ氏とその妻シリア・フローレス氏はストライキ中に捕らえられた。
トランプ大統領はソーシャルメディアへの投稿で、米当局者がベネズエラ政府指導者らと調整していると述べた。また、取引を確保するために匿名の民間企業との「パートナーシップ」も活用したと同氏は述べた。
トランプ大統領は投稿の中で「この取引は、ベネズエラと米国の間ですでに成長しつつある関係を大きく強化することになるだろう」と述べた。
トランプ大統領の発表は、中間選挙に向けて消費者がエネルギー価格の高騰に対処する中で行われた。中間選挙は彼の共和党がワシントンで完全な主導権を維持できるかどうかを決定するものである。
トランプ大統領は、ベネズエラ合意により価格は大幅に引き下げられるはずだと述べた。 AAAによると、金曜日の米国のガソリン1ガロンの平均価格は約4.09ドルに達し、前年比27％上昇した。
今週、ウエスト・テキサス・インターミディエイト原油価格は4%下落し、過去3週間のうちで初の下落週となった。それでも、米国とイランの戦争が始まって以来、価格は24％以上上昇した。
トランプ大統領のイランとの戦争により、原油の世界的に重要な通路であるホルムズ海峡の輸送が妨げられている。国際通貨基金のポートウォッチ追跡調査によると、最近ホルムズを通過する船舶は毎日数隻にとどまり、1年前の約100隻の水準から減少している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/trump-announces-deal-with-venezuela-to-secure-more-than-65-billion-barrels-of-oil-reserves.html",
    publishedAt: "2026-08-28T23:42:26+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "my-mother-91-has-dementia-every-bank-say-b1a8cba4",
    title: "My mother, 91, has dementia. Every bank says I need her signature to unlock her $100,000 stock certificate. What can I do?",
    titleJa: "私の母（91歳）は認知症を患っています。どの銀行も、彼女の10万ドルの株券のロックを解除するには彼女の署名が必要だと言います。私に何ができる？",
    summaryJa: "「これらの株式は、指定された受益者がいない彼女の遺産の中で唯一の資産です。」",
    bodyOriginal: `“These shares are the only assets in her estate without designated beneficiaries.”`,
    bodyJa: `「これらの株式は、指定された受益者がいない彼女の遺産の中で唯一の資産です。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-mother-91-has-dementia-every-bank-says-i-need-her-signature-to-unlock-her-100-000-stock-certificate-what-can-i-do-4a2b702f?mod=mw_rss_topstories",
    publishedAt: "2026-08-28T23:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-33671200",
    readTime: 2,
  },
  {
    id: "microsoft-s-stock-seals-its-longest-winn-552b1c04",
    title: "Microsoft’s stock seals its longest winning streak of the year as AI software fears fade",
    titleJa: "AIソフトウェアへの懸念が薄れ、マイクロソフト株が今年最長の連勝を記録",
    summaryJa: "あるアナリストは、マイクロソフトのソフトウェアはAIにとって重要な機能を提供すると指摘している。",
    bodyOriginal: `Microsoft’s software offers capabilities that will be critical for AI, one analyst notes.`,
    bodyJa: `あるアナリストは、マイクロソフトのソフトウェアはAIにとって重要な機能を提供すると指摘している。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/microsofts-stock-seals-its-longest-winning-streak-of-the-year-as-ai-software-fears-fade-e5669f5b?mod=mw_rss_topstories",
    publishedAt: "2026-08-28T21:34:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-99465391",
    readTime: 2,
  },
  {
    id: "mark-walter-s-insurer-delaware-life-sees-3f3ac589",
    title: "Mark Walter's insurer Delaware Life sees two banks pause sale of its products amid probes",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Two banks have paused selling products of Mark Walter's Delaware Life amid concerns of federal probes into how the insurer's parent company reported about $20 billion in assets that were affiliated with other entities controlled by the billionaire Los Angeles Dodgers owner, CNBC has confirmed.
The pause by the banks, Truist Financial Corp. and Fifth Third Bancorp, came to light Friday, two days after Walter's holding company, TWG Global, issued a statement saying "there has been no fraud" at Delaware Life and its affiliated company, Clear Spring Life and Annuity.
Bloomberg first reported the pause. A person familiar with the situation confirmed the pause by the banks to CNBC, speaking on condition of anonymity because it hasn't been announced.
That person said Delaware Life is continuing to meet with both banks to support existing contracts and to discuss trends in the insurance sector. The person said Delaware Life is also keeping the banks apprised of its effort to reduce the level of affiliated-party assets.
Truist has a longstanding business relationship with Delaware Life. Fifth Third only began doing business with the insurer in April, according to the person familiar.
"Our communications with key distribution partners remain open and cooperative," a spokesperson for Delaware Life told CNBC.
Fifth Third declined to comment. Truist did not immediately respond to a request for comment.
The U.S. Attorney's Office in Manhattan and the Securities and Exchange Commission are investigating Delaware Life and Clear Spring, Delaware Life said in a regulatory filing.
Last September, FBI agents seized Walter's phone and computer pursuant to a warrant they executed aboard a private plane in Chicago as part of a probe of his businesses, news outlets have reported.
Both Delaware Life and Clear Spring received grand jury subpoenas in February in connection with the probes, Delaware Life said in the regulatory filing.
In a review of its affiliated- and related-party disclosures conducted after receiving the subpoenas, Delaware Life revised the share of its total invested assets classified as affiliated with other Walter companies from 3% to 42%.
The probes gained widespread attention after Walter agreed to sell his majority stake in the Los Angeles Lakers earlier this month, less than a year after buying the team.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/mark-walter-delaware-life-truist-fifth-third-banks.html",
    publishedAt: "2026-08-28T20:42:07+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "bessent-attacks-warren-over-yen-interven-99b53b80",
    title: "Bessent attacks Warren over yen intervention query, offers ‘Foreign Exchange for Dummies’ lesson",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Treasury Secretary Scott Bessent unleashed a scathing personal attack on Sen. Elizabeth Warren Friday, accusing the Massachusetts Democrat of misunderstanding foreign exchange markets while leaving several of her questions about a rare U.S. intervention in the Japanese yen unanswered.
"In her latest sciolistic letter to me, @SenWarren made it clear that she knows even less about foreign exchange markets than she does about banking," Bessent wrote on X about the top Democrat on the Senate banking committee. He offered Warren and her staff a tutorial on "Foreign Exchange for Dummies" and accused the news media of failing to identify what he called her "remedial error."
Warren fired back by pointing to a string of recent setbacks for the Treasury secretary.
"Tough couple weeks for Sec. Bessent," Warren wrote on X Friday. "His effort to prop up a foreign currency hasn't worked. His failed intervention in Treasury markets was blasted by his mentor as burning 'two centuries' of credibility. Trump's economy is crushing families. Maybe he should focus on that."
Bessent was responding to an Aug. 13 letter from Warren, seeking details about Treasury's decision to sell euros from its Exchange Stabilization Fund and purchase yen after the Japanese currency fell to a 40-year low.
Warren's opening paragraph incorrectly suggested, according to Bessent, that Japan owed money to Treasury, when the senator wrote that "American taxpayers would ultimately bear the cost if Japan were unable to repay" the department.
"Treasury exchanged existing Exchange Stabilization Fund foreign-currency assets for yen," Bessent wrote in his response, dated Thursday. "No new congressional appropriation was involved, and no credit was extended to Japan. Japan owes Treasury nothing."
Despite the opening phrasing, Warren's letter later correctly described the intervention as a sale of euros for yen, explicitly noting that Japan had not borrowed from the Treasury or the Federal Reserve.
Bessent defended the intervention as necessary to protect U.S. economic interests, arguing that a disorderly yen could destabilize global markets and raise U.S. borrowing costs. However, his one-page response left several of Warren's questions unanswered.
Most notably, Bessent did not disclose how much yen Treasury bought, the execution rate or the position's current value, even though a July 31 Reuters photo shows Bessent's notepad reading, "Buy Japanese Yen (JPY) $5-10 bil." He also did not say whether the European Central Bank was consulted before the euro sale or provide the detailed legal justification Warren requested.
The intervention marked the first coordinated U.S.-Japan effort to strengthen the yen since 1998. Japan spent 15.4 trillion yen, or about $96.5 billion, supporting its currency between July 30 and Aug. 26, a record for the period, according to Japanese Finance Ministry data released Friday.
Rather than dwelling on "petty grievances with Senator Warren," Bessent "should focus ... on reducing the cost of living for the American families struggling in President Trump's economy," Senate banking committee Democratic spokeswoman Saloni Sharma said in a statement.
The Treasury Department did not immediately respond to a request for comment.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/bessent-warren-yen-intervention-treasury-japan.html",
    publishedAt: "2026-08-28T20:31:58+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "corn-and-wheat-prices-jump-to-highest-pr-8b978b02",
    title: "Corn and wheat prices jump to highest prices in more than three years",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Corn and wheat prices have surged to their highest levels in more than three years. But the forces driving recent rallies for these two crops are notably different.
Wheat futures settled 3.1% higher at 784 cents per bushel on Friday after hitting a high of 790.25 cents, the highest since Feb. 14, 2023 when it traded 797.5. Wheat jumped 12.1% this week, its biggest weekly gain since March 2022. Overall, wheat futures were up more than 54.5% year-to-date, amid escalating Russia-Ukraine tensions in the Black Sea.
Corn futures settled 0.6% higher at 536.5 cents per bushel Friday after hitting a high of 541.25 cents, the highest level since July 28, 2023. Corn gained 5.5% for the week and is up 15.6% in August, on pace for its best month since April 2021 when it rose 19.31%. The contract is up 21.8% year-to date on tighter U.S. supply expectations and strong demand, with constrained Ukrainian exports adding pressure to global supplies.
Corn's recent rally is largely driven by mounting concerns around the supply of the U.S. crop and a weak outlook, while disruptions to Ukrainian exports continue to add pressure to the global supply.
"From the beginning of August to now, the consensus in the market is that there is less supply than we thought at the beginning of the month," said William Osnato, Barchart director of commodity data research and analysis.
Osnato points to a number of reasons for this. A recent report by the U.S. Department of Agriculture (USDA's) August World Agricultural Supply and Demand Estimates (WASDE) report lowered corn yield estimates more than traders expected, despite projecting the second-largest harvest on record. The agency cut its yield forecast by 2.3 bushels per acre to 180.7.
In addition, Osnato said the crop's outlook got further impacted by the disappointing field observations from the Pro Farmer's Crop Tour. Pro Farmer found extreme July heat had impacted the crop, after excessive rain in June for many areas in the U.S.
"We are a little past the peak point of the growing season, which is late July, early August, but you can still have poor weather impact the crop at this point," Osnato said. Several portions of the eastern Corn Belt were impacted by excessive rainfall during August, along with the development of corn fungal diseases later in the growing season.
Jim McCormick, co-founder and chief operating officer at AgMarket.Net, told CNBC that concerns about the U.S. crop have become more important because global supplies were already tight.
"We thought the world was going to be bailed out by the U.S. supply. Now the U.S. supply is becoming questionable, and the market's moving up into a rationing mode," he said.
While not as important as the U.S. crop itself, Osnato said other factors like the extreme high temperatures and drought in Europe over the whole summer significantly impacted their corn production. A strong export demand from Europe added pressure on the already constrained supply. In its report, the USDA raised exports by 75 million bushels to 3.3 billion, reflecting increased global demand and constrained exports for Ukraine, which is a major global corn exporter. Osnato said the effect, however, is less important for corn than for wheat, adding that some disruption to Ukrainian corn exports had already been priced into the market.
McCormick said Europe's drought-hit corn crop could also add pressure to wheat, as less available corn may lead the region to use more wheat for animal feed and keep more of its wheat at home rather than export it.
Disruption of wheat supply
Wheat's rally, unlike corn, is tied to disruption in the global supply.
Grain export disruptions have pushed prices up, after reports that tensions escalated between Russia and Ukraine in the Black Sea region. Russia and Ukraine together account for more than a quarter of global wheat exports. Growing fears around supply disruption in the region have been a strong catalyst to the price increase.
"You've had a number of different disruptions in the Black Sea. That's definitely the main story," Osnato said, explaining that damage to Russian grain-export infrastructure caused expectations for near-term Russian wheat shipments to fall. Black Sea being the largest point of exports.
Russia is the biggest wheat exporter and a low-cost supplier whose prices often influence the global market. But the crop has not been moving much through the Black Sea. Recent attacks in the Sea of Azov, which is a feeder into the Black Sea and additional military strikes on grain export facilities, oil tankers and vessels in the Black Sea region have made it challenging for shipping firms to even get insurance.
"What moves the market is a change in expectations, and Russia will not be able to ship as much wheat by several millions of tons because the capacity to ship out of the Black Sea has been significantly damaged," Osnato said.
Weather has added another layer of pressure to wheat supplies. Osnato said a severe heat wave cut European wheat production by roughly 8 million to 10 million tons, while drought also reduced hard red winter wheat output in Texas, Oklahoma and Kansas.
Beyond the fundamental supply concerns driving both these crops, the move to multiyear highs can itself attract more buying.
"When a contract hits new highs and multi-year highs, then you start to get momentum and systematic traders interested. So now you have fundamental and systematic traders looking at the market positively, and so those are all sort of mixing together," Osnato said.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/corn-and-wheat-prices-jump-to-highest-prices-in-more-than-three-years.html",
    publishedAt: "2026-08-28T20:00:56+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "stock-traders-warm-up-to-warsh-as-volati-f89a08bc",
    title: "Stock traders warm up to Warsh as volatility index touches year-to-date low",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `If Federal Reserve chair Kevin Warsh wanted to put the bond market on alert, he certainly got his wish Friday: odds of an interest-rate hike by the central bank in its September meeting jumped to nearly 60 percent after Warsh's speech in Jackson Hole, compared to just 35 percent on Thursday, according to Fed funds futures odds tracked by CME Group.
What may be a welcome surprise for the Fed: there are strong signs stock traders seem to be OK with it.
The Cboe Volatility Index (VIX), which measures the price of 30-day options on the S&P 500 Index, fell to as low as 14.1 in the aftermath of Warsh's first delivery at the annual symposium, its lowest reading all year.
While stocks slipped midday as shares of Nvidia unwound some of its big earnings gains, the S&P was down three-tenths of a percent, about half the roughly 60 basis-point range options pricing had implied for Friday's session. U.S. equities looked particularly strong in comparison to bitcoin and gold, which each dropped at least 2.5 percent - further evidence that investors across asset classes are preparing for higher interest-rates.
"The VIX is low because a Fed that is vigilant on inflation without having to hike aggressively is seen as positive for the economy to bring inflation down, bolstering the bull case for stocks," Ben Emons, managing director at Highline Asset Management, said in a text.
A more comprehensive look at S&P 500 volatility that includes options expiring beyond the VIX's range suggests the impact of higher interest rates may not be seen for several months, argues Cboe's derivatives market intelligence head Mandy Xu.
"Uncertainty around inflation/path of rates will have an impact on longer-term equity volatility, which is why the SPX term structure has steepened so much," Xu wrote in an email.
The spread between the price of six-month options and 1-month options on the S&P 500 is currently in the 96th percentile of the past year, according to Cboe data.
Late-February VIX futures are currently priced around 21, compared to just under 16.9 for the active contract, according to ThinkOrSwim data. It's a notably steeper curve than a month ago, when front-month contracts were near 20. Still, the entire curve has shifted lower as volatility generally subsides.
"The Fed is still technically in ease mode," James Perry, founder and chief investment officer of Perry International Capital Partners, said in a text. "When oil goes down, inflation expectations will fall further."`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/stock-traders-warm-up-to-warsh-as-volatility-index-touches-year-to-date-low.html",
    publishedAt: "2026-08-28T19:35:09+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "apple-hikes-subscription-prices-for-appl-aa67c37e",
    title: "Apple hikes subscription prices for Apple TV and Apple One in the U.S.",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Apple on Friday increased the monthly price of Apple TV, its streaming service, to $14.99, or $119 per year. It was previously $12.99 per month, or $99 per year.
Apple TV is included in Apple One, a bundle subscription that also includes iCloud storage, Apple Music and other services. The individual price for Apple One increased to $21.95 from $19.95.
The price hike puts Apple TV's price closer to rival streaming services. When Apple TV first launched in 2019, as Apple TV+, it cost $4.99 per month, lower than nearly all of its rivals.
But Apple TV has added a significant amount of content since then, including "F1," a major summer blockbuster, and "Ted Lasso," a comedy series that returned for a fourth season earlier this month.
The adjustments come after Apple raised prices for Apple Music by $1 per month in July, citing licensing costs.
Apple reported $30.7 billion in services revenue, or 12% growth, in its third quarter, although the unit's gross margin was down over 1% sequentially, which the company blamed on a different mix of products and foreign exchange headwinds.
In Apple's announcement that Tim Cook would step down as CEO on Sept. 1, it mentioned that services had been a "major focus area" during his tenure.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/apple-tv-one-price-hike-us.html",
    publishedAt: "2026-08-28T19:09:34+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "wife-of-man-who-died-after-turbulence-su-13482805",
    title: "Wife of man who died after turbulence sues airline",
    titleJa: "乱気流で死亡した男性の妻、航空会社を提訴",
    summaryJa: "乱気流で死亡した男性の妻、航空会社を提訴- 公開されました",
    bodyOriginal: `Wife of man who died after turbulence sues airline
- Published
A widow whose husband died after "severe turbulence" on a flight has begun legal action against the airline.
Lawyers for Linda Kitchen, 74, from Thornbury near Bristol, who broke her back during the incident, said her husband, Geoff, 73, was "fatally injured" when the Singapore Airlines flight from London Heathrow suddenly dropped around 6,000 ft (1,828 metres).
She has now begun proceedings at the High Court seeking damages from the airline to help her access specialist support for her back. The BBC has contacted the airline for comment.
"When I got separated from Geoff, I knew he was in a bad way, but nothing prepared me for hearing he had died. It was absolutely devastating," she said.
More from Bristol
Singer's journey from foster care to The Voice
- Published21 hours ago
What it is like on a 10-hour shift as a paramedic during the summer
- Published1 day ago
Events on in the West this bank holiday weekend
- Published1 day ago
Kitchen and her husband, described as her "soul mate", were starting a six-week holiday to Singapore, Indonesia and Australia when the incident happened in May 2024.
The turbulence hit over Myanmar, with the flight then diverted to Bangkok, in Thailand, for an emergency landing.
"There had been some turbulence over Europe, and it had been shaky over the water, but it was around 10 hours into the flight when we encountered the main turbulence," Kitchen said.
"It was so severe; it felt like the aircraft was dropping. I noticed my Kindle and Geoff's phone had fallen to the floor, and I thought the plane was going down."
As the aircraft plummeted, Kitchen said her husband fell on top of her, squashing her into the armrest. Eventually, others helped to move him and a doctor on board began CPR.
Kitchen was taken to hospital while her husband was still on the plane. It was two days before she was told he had died.
It is understood that Geoff suffered a heart attack after the plane suddenly dropped at high altitude.
"I spent 10 days in hospital before I was airlifted back to Bristol. I was in so much pain that the journey was a blur. Once back in the UK, I remained in hospital for around a week and, following my discharge, required significant assistance at home," Kitchen said.
Anthe Korelidou, a specialist aviation lawyer who is representing Kitchen, said: "That Geoff was fatally injured and Linda suffered severe injuries vividly highlights the severity of what happened.
"While it's more than two years since Geoff's death, Linda and the rest of her family continue to have a number of questions and concerns about what happened and if more could have been done to prevent their injuries.
"All Linda wants is for the most thorough investigations to be conducted. The issuing of High Court proceedings is a major milestone in being able to provide Geoff's loved ones with the answers they deserve."
Get in touch
Tell us which stories we should cover in Bristol
Follow BBC Bristol on Facebook, external, X, external and Instagram, external. Send your story ideas to us on email or via WhatsApp on 0800 313 4630.`,
    bodyJa: `乱気流で死亡した男性の妻、航空会社を提訴
- 公開されました
飛行機内で「激しい乱気流」が発生し、夫を亡くした未亡人が航空会社に対して訴訟を起こした。
この事件で腰を骨折したブリストル近郊のソーンベリー在住のリンダ・キッチンさん（74）の弁護士は、ロンドン・ヒースロー空港発のシンガポール航空便が突然約6,000フィート（1,828メートル）降下し、夫のジェフさん（73）が「致命傷」を負ったと発表した。
彼女は現在、腰に対する専門家のサポートを得るために航空会社に損害賠償を求める高等裁判所での手続きを開始している。 BBCは航空会社にコメントを求めた。
「ジェフと離れ離れになったとき、彼がひどい状態にあったことはわかっていましたが、彼が亡くなったと聞いて何も準備ができませんでした。本当にショックでした」と彼女は語った。
ブリストルからのその他の作品
里親養護からザ・ヴォイスまでのシンガーの旅
- 21 時間前に公開
夏の間、救急救命士として10時間勤務するのはどんな感じか
- 1 日前に公開
このバンクホリデーの週末に西部で開催されるイベント
- 1 日前に公開
2024年5月に事件が起きたとき、キッチンさんと「ソウルメイト」と評される夫は、シンガポール、インドネシア、オーストラリアへの6週間の休暇を始めていたところだった。
乱気流はミャンマー上空を襲い、同便は目的地を変更してタイのバンコクに緊急着陸した。
「ヨーロッパ上空で乱気流があり、海上は揺れていましたが、メインの乱気流に遭遇したのは飛行開始から10時間ほど経った頃でした」とキッチン氏は語った。
「とてもひどかったです。飛行機が落ちていくような感じでした。私の Kindle とジェフの携帯電話が床に落ちていることに気づき、飛行機が落ちるのではないかと思いました。」
飛行機が急降下したとき、キッチンさんは夫が彼女の上に落ち、肘掛けに押しつぶされたと語った。最終的には他の人が彼の移動を手伝い、船内の医師が心肺蘇生法を開始した。
キッチンさんは夫がまだ飛行機に乗っている間に病院に運ばれた。彼女が亡くなったと知らされる2日前だった。
ジェフさんは飛行機が高高度で突然落下し、心臓発作を起こしたことがわかっている。
「ブリストルに空輸されるまで、10日間病院で過ごしました。あまりの痛みに、道がぼんやりとしてしまいました。英国に戻っても、約1週間入院し、退院後も自宅でかなりの援助が必要でした」とキッチンさんは語った。
キッチンの代理人である航空専門弁護士のアンテ・コレリドゥ氏は、「ジェフが致命傷を負い、リンダが重傷を負ったことは、何が起こったのかを如実に浮き彫りにしている」と述べた。
「ジェフの死から2年以上が経ちますが、リンダと残りの家族は何が起こったのか、そして怪我を防ぐためにもっと何かできたのかについて、多くの疑問や懸念を持ち続けています。
「リンダが望んでいるのは、徹底的な捜査が行われることだけだ。高等裁判所での訴訟手続きの開始は、ジェフの愛する人たちにふさわしい答えを提供できるようになる上での大きなマイルストーンだ。」
連絡する
ブリストルで取り上げるべき記事を教えてください
Facebook (外部)、X (外部) および Instagram (外部) で BBC Bristol をフォローしてください。ストーリーのアイデアを電子メールまたは WhatsApp (0800 313 4630) でお送りください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqlwrpey1epo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-28T17:47:00+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9fd5/live/2730a430-a301-11f1-a291-b542ee92de7c.jpg",
    readTime: 4,
  },
  {
    id: "analysis-kevin-warsh-sharpens-inflation-a86c8969",
    title: "Analysis: Kevin Warsh sharpens inflation warning at Jackson Hole, signaling possible rate hike",
    titleJa: "分析：ケビン・ウォーシュ氏、ジャクソンホールでインフレ警告を強め、利上げの可能性を示唆",
    summaryJa: "米連邦準備制度理事会（FRB）のケビン・ウォーシュ議長は金曜日、ジャクソンホールでの演説を利用して7月の混乱した記者会見に対する批判に答え、頑固なインフレがFRBを利上げに向かわせる可能性があるとより明確な警告を発した。ウォーシュ氏がFRB議長として初めて2度記者会見を行ったことで、市場関係者の多くは同氏が金利の軌道上でどのような位置にあるのか不安を残し、債券トレーダーらは不確実性を補うために長期債の売却を促した。金曜日、ワイオミング州ジャクソンホールで行われた注目の演説で、ウォーシュ氏はこうした批判の声を聞いていたことを示した。同氏は、自身の特異な物価データの見方に基づいて、インフレが改善しなければ利上げの瀬戸際に立たされているとの示唆にこれまでで限りなく近づいた。",
    bodyOriginal: `Federal Reserve Chairman Kevin Warsh used his Jackson Hole speech Friday to answer critics of his muddled July news conference, delivering a clearer warning that stubborn inflation could push the Fed toward a rate hike.
Warsh's first pair of news conferences as Fed chairman left many in the markets uncertain about where he stood on the path of interest rates, prompting bond traders to sell off long-term debt to account for the uncertainty. At a closely watched speech in Jackson Hole, Wyoming, on Friday, Warsh showed he had heard those critics. He came as close as he is ever likely to do to indicating he is on the precipice of raising interest rates if inflation doesn't improve, based on his own idiosyncratic reading of price data.
Warsh at Jackson Hole gave a more hawkish reading of the economy than he had in July. He said elevated prices needed to be the Fed's main focus and described financial conditions as not being broadly restrictive, a change from his July news conference, when he said they were uneven. He did that while swiping back at his critics and insisting his policy of deliberate ambiguity about Fed policy is here to stay.
"We can be held accountable for delivering on our remit — the only true test of our credibility," Warsh said, dismissing widely echoed critiques that he had come across as not credible at his July news conference.
The Fed won't meet to set rates until mid-September, and Warsh didn't explicitly say how the central bank would handle interest rates. But he dived into several of the critiques recently leveled at him.
One of the harshest focused on Warsh's description of how he sees the Fed's core mission of assessing and responding to inflation. The Fed is formally committed to trying to keep inflation to 2% over the long term as measured by the personal consumption expenditures price index. Some economists interpreted Warsh's muddled answers to reporters' questions last month as saying he might want to change that target — even as inflation remains elevated.
PCE inflation was 3.7% for July, according to government data released this week.
At Jackson Hole, Warsh recommitted to maintaining the 2% PCE goal, calling it a "firm, fixed target."
And he went further. Warsh gave examples of how he uses multiple measures of inflation to reach the conclusion that elevated prices are a concern. He referred to the underlying components of PCE inflation, saying 54% of components of PCE had been above 3% annualized inflation in the past 12 months, while 49% were above 3% in the past six months.
Warsh described those figures as being lower than the recent pandemic inflation but still above the long-term trend — an indication he believes the Fed may need to raise rates.
Warsh also referred to another gauge of inflation, the consumer price index, which is running at 3.4%.
"None of these measures are perfect, but they all tell a similar story: Inflation is running above our 2 percent target," he said.
That statement by Warsh is a sharper view of his understanding of inflation metrics than he has given previously. He sees the various prominent inflation measures as individually flawed, but believes the Fed can draw from them collectively to come to a view of how prices are behaving. And right now, he is worried about price increases.
That had concerned him in July, too, he said at Jackson Hole on Friday.
"A good majority of my colleagues and I thought the wiser course was to await new information in the intermeeting period."
Warsh also addressed another critique of his performance in July — that he wouldn't turn quickly to interest rates to fight inflation. President Donald Trump — who has made clear his desire for lower rates — picked Warsh. At Jackson Hole, Warsh was unambiguous: "short-term interest rates are the predominant tool to achieve the dual mandate."
Warsh also reiterated that the Fed is watching developments in artificial intelligence closely, but wasn't ready to act on them. A Fed task force examining AI use and economic impact was "encouraging" but so far had "no bearing on decisions we make in the current policy conjuncture."
Warsh's treatment of AI is part of a broader reset he is attempting to deliver to the views he effectively campaigned on when seeking the job as Fed chairman in 2025.
In the past, he had said advances in AI might be a reason to reduce interest rates. That lined up with Trump's demands for lower rates. He had also said cutting the Fed's balance sheet would be a reason to lower interest rates.
Warsh is now indicating that considerations of AI don't have much to do with current policymaking. And there was no signal at Jackson Hole that balance sheet cuts were coming.
Trump has continued to demand lower rates, leading some to infer Warsh is holding off raising rates until after the November midterm election to unleash his hawkish impulses. The two men have spoken directly since Warsh became chairman, breaking with a tradition that sees contact between the Fed and the administration channeled through the Treasury secretary.
Warsh didn't address Trump at Jackson Hole. But his reading of the economy as showing signs of elevated price concerns puts him clearly at odds with the president. Trump continues to want interest rate decreases and often touts market performance and what he says are strong economic indicators, but Warsh's message Friday was that the Fed is considering the opposite — a near-term raise in interest rates.
The Jackson Hole speech won't eliminate worries about Warsh's time at the Fed helm. Trump has continued to meddle with the Fed, including reinstating an effort on weak evidence to fire Governor Lisa Cook. And Warsh hasn't yet delivered concrete action against inflation.
But Warsh's performance at Jackson Hole will give his colleagues at the Fed a reason to back him if he decides in September to take that action. His speech at the influential forum should help dispel the idea that he is simply flying blind.`,
    bodyJa: `米連邦準備制度理事会（FRB）のケビン・ウォーシュ議長は金曜日、ジャクソンホールでの演説を利用して7月の混乱した記者会見に対する批判に答え、頑固なインフレがFRBを利上げに向かわせる可能性があるとより明確な警告を発した。
ウォーシュ氏がFRB議長として初めて2度記者会見を行ったことで、市場関係者の多くは同氏が金利の軌道上でどのような位置にあるのか不安を残し、債券トレーダーらは不確実性を補うために長期債の売却を促した。金曜日、ワイオミング州ジャクソンホールで行われた注目の演説で、ウォーシュ氏はこうした批判の声を聞いていたことを示した。同氏は、自身の特異な物価データの見方に基づいて、インフレが改善しなければ利上げの瀬戸際に立たされているとの示唆にこれまでで限りなく近づいた。
ウォーシュ氏はジャクソンホールで、7月よりもさらにタカ派的な経済見通しを示した。同氏は、物価上昇がFRBの主な焦点である必要があると述べ、金融状況は広範に制限的ではないと述べ、不均一だと述べた7月の記者会見からは変化した。同氏は批判者らを尻目に、FRBの政策について意図的に曖昧にする政策は今後も存続すると主張しながら、そうした。
ウォーシュ氏は、7月の記者会見で信頼性に欠けるとして広く反響を呼んだ批判を一蹴し、「我々は与えられた任務を遂行する責任を問われる可能性がある。これが我々の信頼性を試す唯一の真のテストだ」と述べた。
FRBは9月中旬まで金利設定のための会合を開かないが、ウォーシュ総裁は中銀が金利をどのように扱うかについては明言しなかった。しかし、彼は最近自分に向けられた批判のいくつかに真っ向から立ち入った。
最も厳しい内容の一つは、インフレを評価し対応するというFRBの中核的使命をどのように見ているかについてのウォーシュ氏の説明に焦点を当てたものだった。 FRBは、個人消費支出価格指数で測定されるインフレ率を長期的に2％に維持するよう努めることを正式に表明した。一部のエコノミストは、先月記者団の質問に対するウォーシュ氏の曖昧な回答を、インフレ率が依然として高止まりしているにもかかわらず、目標を変更したいかもしれないと述べたと解釈した。
今週発表された政府統計によると、７月のＰＣＥインフレ率は３．７％だった。
ジャクソンホールでウォーシュ氏は、2％のPCE目標を維持することを再約束し、それを「確固たる固定目標」と呼んだ。
そして彼はさらに先に進みました。ウォーシュ氏は、物価上昇が懸念事項であるという結論に達するために、インフレに関する複数の尺度をどのように利用しているかの例を挙げた。同氏はＰＣＥインフレの基礎的な構成要素に言及し、ＰＣＥの構成要素の５４％が過去１２カ月で年率換算インフレ率３％を上回り、４９％が過去６カ月で３％を上回ったと述べた。
ウォーシュ氏は、これらの数字は最近のパンデミックのインフレ率よりは低いが、それでも長期トレンドを上回っていると述べ、これはFRBが利上げが必要になる可能性があると考えていることを示していると述べた。
ウォーシュ氏はまた、インフレを測るもう一つの指標である消費者物価指数にも言及し、消費者物価指数は3.4％で推移している。
同氏は「これらの対策はどれも完璧ではないが、どれも似たようなストーリーを物語っている。インフレ率はわれわれの目標である２％を上回っている」と述べた。
ウォーシュ氏のこの発言は、同氏が以前に述べたものよりも、インフレ指標に対する同氏の理解をより鋭く示している。同氏は、さまざまな著名なインフレ指標は個別には欠陥があるとみているが、FRBはそれらを総合的に活用して物価の動向についての見解を得ることができると信じている。そして今、彼が心配しているのは物価の高騰だ。
そのことは7月にも懸念していた、と彼は金曜日のジャクソンホールで語った。
「同僚の大多数と私は、会議期間中に新しい情報を待つのが賢明だと考えていました。」
ウォーシュ氏はまた、7月の自身のパフォーマンスに対する別の批判、つまりインフレと闘うためにすぐに金利に目を向けるつもりはないと述べた。ドナルド・トランプ大統領は、金利引き下げへの願望を明らかにしているが、ウォーシュ氏を選んだ。ジャクソンホールでウォーシュ氏は「短期金利は二重の責務を達成するための主要な手段である」と明言した。
ウォーシュ氏はまた、FRBは人工知能の発展を注視しているが、それに基づいて行動する準備ができていないと繰り返した。 AIの利用と経済への影響を調査するFRBの特別委員会は「心強い」ものだが、これまでのところ「現在の政策結合でのわれわれの決定には何の影響も与えていない」。
ウォーシュ氏のAIへの扱いは、2025年のFRB議長就任を目指して効果的に運動してきた見解を、同氏が実現しようとしている広範なリセットの一環である。
同氏は過去に、AIの進歩が金利引き下げの理由になる可能性があると述べていた。これはトランプ大統領の利下げ要求と一致した。同氏はまた、FRBのバランスシート削減が金利引き下げの理由になるとも述べた。
ウォーシュ氏は現在、AIの考慮は現在の政策決定とはあまり関係がないと示唆している。そして、ジャクソンホールにはバランスシート削減が近づいているという兆候はなかった。
トランプ氏は利下げを要求し続けており、一部ではウォーシュ氏がタカ派の衝動を解き放つために11月の中間選挙後まで利上げを延期しているのではないかとの見方も出ている。ウォーシュ氏が議長に就任して以来、両氏は直接対話しており、FRBと政権との接触が財務長官を通じて行われてきたとされる伝統を打ち破った。
ウォーシュ氏はジャクソンホールでトランプ氏に演説しなかった。しかし、物価懸念の高まりの兆候を示しているとの同氏の経済の見方は、明らかに大統領と対立している。トランプ大統領は引き続き利下げを望んでおり、しばしば市場のパフォーマンスや自身が主張する好調な経済指標を宣伝しているが、ウォーシュ氏の金曜日のメッセージは、FRBはその反対、つまり短期的な利上げを検討しているというものだった。
ジャクソンホールでの演説によっても、ウォーシュ氏がFRBの舵取りを務めていた時期についての懸念が払拭されるわけではない。トランプ大統領は弱い証拠に基づいてリサ・クック総裁解任に向けた取り組みを再開するなど、FRBへの干渉を続けている。そしてウォーシュ氏はまだインフレに対する具体的な行動を示していない。
しかし、ジャクソンホールでのウォーシュ氏のパフォーマンスは、同氏が9月にその行動を取ることを決定した場合、FRBの同僚らに同氏を支持する理由を与えることになるだろう。影響力のあるフォーラムでの彼のスピーチは、彼が単に盲目で飛んでいるという考えを払拭するのに役立つはずです。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/kevin-warsh-jackson-hole-fed-inflation-rate-hike.html",
    publishedAt: "2026-08-28T17:44:02+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "fed-has-work-to-do-if-price-rises-don-t-f6ce87b5",
    title: "Fed has 'work to do' if price rises don't ease for Americans, Warsh says",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Fed has 'work to do' if price rises don't ease for Americans, Warsh says
- Published
The head of the US central bank has said policymakers will "have work to do" if they were not confident cost-of-living pressures were easing for Americans.
Federal Reserve chair Kevin Warsh said while inflation readings looked better than expected over the summer, they did not show that the current picture had "meaningfully improved".
The new Fed boss stressed that his remarks should not be treated as a guide for future interest rate decisions, but the comments are a signal rates could be raised if policymakers believe inflation is too high.
Latest figures show prices rose 3.4% in the year to July, above the Fed's 2% target. Another inflation measure closely watched by the Fed is running at 3.7%.
Warsh made the comments in his first speech at the annual Jackson Hole Economic Policy Symposium in Wyoming, which sees central bankers, government officials and academics from around the world gather to talk about interest rates, inflation and other economic issues.
Warsh said given prices were rising by more than 2% on annual basis, "the Fed's predominant focus right now should be on prices".
"Here is my standard: We must be confident that underlying inflation is moving to our objective, clearly and at sufficient speed. Otherwise, we have work to do."
The central bank boss has remained tight-lipped about the potential path of interest rates, but investors will have watched his speech closely for any signs of the Fed's approach under his leadership.
The central bank's next interest rate decision will be made on 15-16 September.
The reactions to any decision made by US President Donald Trump will be closely watched, with the mid-term elections looming and voters concerned about affordability.
Trump, who appointed Warsh in May, repeatedly criticised and pushed his predecessor Jerome Powell to cut interest rates. The president has previously said rate hikes "just keeps the country down".
Warsh issued a plea in his speech to not label his remark as "forward guidance" and said he believed the practice of sending signals to the markets on future interest rate decisions, adopted in the wake of the 2008 financial crisis, had "overstayed its welcome".
"Oversharing policy deliberations and overcommitting to future decisions can lead markets, businesses, and households astray," he said, adding it also inhibited the Fed the "freedom to make the right calls when it's time to decide".
Interest rates were left unchanged between 3.5% and 3.75% in July for the fifth time in a row amid concerns over inflation due to the ongoing conflict between the US and Iran, which has caused as surge in global oil prices.
Following Warsh's remarks, the rates market showed growing expectations of an interest rate rise in September, according to CME data.
Analysts at Capital Economics said Warsh's speech delivered a "far clearer - and hawkish - message" and that it left "the door open to a hike" earlier than previously expected.
"Hikes are not guaranteed, but Warsh is now at least suggesting he is on board with them if economic growth remains strong and monthly core PCE [Personal Consumption Expenditures] price growth remains a bit too firm," they said.
Why the US economy is ringing alarm bells
- Published7 days ago
Higher oil prices has also fuelled bond market investors, who have demanded higher returns, leading to higher borrowing costs for the US government and other major corporations.
Such borrowing costs impact the cost of borrowing for mortgages, car loans and credit cards.
The spike in interest payments has driven US national debt past the $40tn (£29.5tn). The figure has doubled in a decade under both the Trump and Joe Biden administrations.
The figure is rising by about $90,000 (£66,500) every second, or $7.8bn a day, according to the Congress Joint Economic Committee.
Treasury Secretary Scott Bessent said the government would buy back more debt in a bid to lower borrowing costs, but the market's reaction to the announcement proved short lived.
Interest rate hikes are a tool used by central banks aiming to slow the pace prices are rising in the shops. By pushing up the cost of borrowing for things such as mortgages, loans and credit cards, central bankers hope consumers will spend less and the rate of price increases will slow.
Higher interest rates, however, can lead to better returns for savers.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy9zjgv9lgdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-28T15:15:26+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/5899/live/39824e70-a2fe-11f1-80b3-bf1a174ac193.jpg",
    readTime: 2,
  },
  {
    id: "trump-s-greenland-fixation-puts-security-8f573ceb",
    title: "Trump’s Greenland fixation puts security at the heart of Iceland’s knife-edge EU vote",
    titleJa: "トランプ大統領のグリーンランドへの執着により、アイスランドのEU投票では安全保障が激戦の中心となる",
    summaryJa: "アイスランド国民は土曜日、欧州連合（EU）加盟交渉を再開するかどうかを問う極めて危険な国民投票で投票を行う予定で、ドナルド・トランプ米大統領の北極圏でのサーベル攻撃を受けてより深い意味を持つ議論が再開される。人口約40万人の北欧の国に課せられた質問は単純に「アイスランドは欧州連合との加盟交渉を再開すべきか?」というものだ。",
    bodyOriginal: `Icelanders on Saturday will vote in a knife-edge referendum on whether to resume negotiations to join the European Union, reopening a debate that has taken on deeper significance in the wake of U.S. President Donald Trump's Arctic saber-rattling.
The question put to the Nordic nation of nearly 400,000 is simply: "Should Iceland resume accession negotiations with the European Union?"
Opinion polls indicate the advisory vote is likely to go down to the wire, with the country effectively split in half on the issue. If a majority of voters answer yes, accession negotiations will take place, which if successful, would lead to a negotiated agreement being put to a second referendum for the Icelandic people to accept or reject.
It comes as the Arctic emerges as a major hotbed for critical minerals and climate change rapidly melts sea ice, opening seasonal shipping routes, and amid Trump's renewed push to acquire Greenland, Iceland's closest neighbor.
The U.S. president has long advocated for control over Greenland on national security grounds. Notably, Trump appeared to repeatedly mix up Greenland and Iceland during a special address at the World Economic Forum in Davos, Switzerland earlier in the year.
"All of the arguments put forth by the U.S. president for why it would be necessary for the U.S. to acquire Greenland actually equally applied to Iceland. The only difference is that Iceland is formally an independent country," said Eiríkur Bergmann, professor of politics at Iceland's Bifröst University.
Iceland applied to join the EU in 2009 in the aftermath of the global financial crisis, before suspending membership talks in 2013 when a euroskeptic coalition government came to power.
At the start of the year, Iceland Foreign Minister Thorgerdur Gunnarsdottir said that deeper dialogue and collaboration with the EU would be a key factor in shoring up the country's interests.
"It is clear that the international system we have lived in since the end of World War II is in turmoil," Gunnarsdottir said in an article for Icelandic newspaper Visir, according to a Google translation.
Economy, sovereignty and fisheries
Alongside Trump's Greenland ambitions, Bergmann said diminishing trust in the U.S. as a security partner is another key concern ahead of the vote.
Iceland, a founding member of NATO, is the only ally that does not have its own military forces. The country also sits astride the so-called GIUK Gap, a naval choke point between Greenland, Iceland and the U.K. that links the Arctic to the Atlantic Ocean.
"Iceland's security and defense is guarded by our membership in NATO, but also, for many, more importantly, by a bilateral defense agreement with the U.S. since 1951. Now many people are sort of reconsidering the validity of that defense agreement," Bergmann said.
While these geopolitical developments have influenced the context in which Icelanders have discussed the prospect of EU membership, political experts have stressed the debate has primarily been driven by domestic issues — particularly the economy, sovereignty and fisheries.
Jon Danielsson, director of the Systemic Risk Centre and reader in finance at the London School of Economics, said Iceland has previously fought tough battles against EU member states over control of its fishing industry, describing the issue as "totemic" given the sector's economic importance.
"For the Icelanders, the key issue in joining is the euro and to get away from the instability of its own currency and very high interest rates. So, the euro is really what they see as the target they want," Danielsson told CNBC's "Europe Early Edition" on Friday.
"Even if it voted to join, the vast majority of the population would be looking at the fishing and whether the EU would provide the necessary conditions — which, to my mind, seems doubtful," he added.
Former Icelandic Prime Minister Katrín Jakobsdóttir, meanwhile, has said that she doesn't see the argument for joining the EU, saying the country maintains close economic collaboration with the 27-nation bloc and its citizens already enjoy high living standards.
"If a majority of the people wants to apply, it is very important to listen to that majority, but I haven't changed my position," Jakobsdóttir told CNBC in mid-April.
Read more
To be sure, Iceland is already deeply integrated into the European framework, partly through its membership of the European Economic Area, which gives the volcanic island access to the EU's single market without requiring full membership.
Iceland is also a member of the Schengen Area, which allows passport-free travel between it and other participating European countries.
"The current Social Democrat-led government, which actually initiated or applied for membership the first time round, is now reheating its bid to close this unfinished business, so to speak," Steven Blockmans, deputy director at the International Centre for Defence and Security think tank, told CNBC by telephone.
A success case for the EU?
For the EU, political experts have said the bloc is in the market for something of a success case, particularly after Britain's exit in 2020.
A victory for the yes campaign could pave the way for a negotiated agreement to be reached relatively quickly, Bergmann said, because Iceland's coalition government is approaching its next general election, which must be held no later than Aug. 2028.
"Bigger is better in this day and age, it seems," Blockmans said.
He added that the EU potentially welcoming a country ranked among the leading nations in GDP per capita and among the leading nations in global democratic performance would undoubtedly give "extra shine to the European integration project."`,
    bodyJa: `アイスランド国民は土曜日、欧州連合（EU）加盟交渉を再開するかどうかを問う極めて危険な国民投票で投票を行う予定で、ドナルド・トランプ米大統領の北極圏でのサーベル攻撃を受けてより深い意味を持つ議論が再開される。
人口約40万人の北欧の国に課せられた質問は単純に「アイスランドは欧州連合との加盟交渉を再開すべきか?」というものだ。
世論調査によると、この問題に関して国は事実上二分されており、勧告投票は否決される可能性が高い。有権者の過半数が「はい」と答えた場合、加盟交渉が行われ、これが成功した場合、交渉による合意はアイスランド国民が承認するか拒否するかについての2回目の国民投票に付されることになる。
これは、北極が重要な鉱物の主要な温床として浮上し、気候変動により海氷が急速に溶け、季節航路が開設される中で、またトランプ大統領がアイスランドに最も近い隣国であるグリーンランドの獲得を新たに推進している最中に行われた。
米国大統領は長年、国家安全保障を理由にグリーンランドの支配を主張してきた。注目すべきは、今年初めにスイスのダボスで開催された世界経済フォーラムでの特別演説で、トランプ大統領がグリーンランドとアイスランドを繰り返し混同しているように見えたことだ。
アイスランドのビフロスト大学政治学教授エイリークル・ベルグマン氏は、「なぜ米国がグリーンランドを取得する必要があるのか​​について米国大統領が提起した議論はすべて、実際にはアイスランドにも同様に当てはまる。唯一の違いは、アイスランドが正式には独立国であるということだ」と述べた。
アイスランドは世界金融危機後の2009年にEUへの加盟を申請したが、2013年にユーロ懐疑派の連立政権が発足したため加盟交渉を中断した。
アイスランドのトルゲルドゥル・グナルスドッティル外務大臣は、年初めに、EUとのより深い対話と協力が国の利益を強化するための重要な要素になると述べた。
グーグル翻訳によると、グンナルスドッティル氏はアイスランドの新聞ビジールの記事で、「第二次世界大戦終了以来、我々が生きてきた国際システムが混乱していることは明らかだ」と述べた。
経済、主権、漁業
バーグマン氏は、トランプ大統領のグリーンランドへの野心と並んで、安全保障パートナーとしての米国に対する信頼の低下も投票に先立つもう一つの主要な懸念事項だと述べた。
NATO創設メンバーであるアイスランドは、独自の軍隊を持たない唯一の同盟国である。この国はまた、北極と大西洋を結ぶ、グリーンランド、アイスランド、英国の間の海上のチョークポイント、いわゆるGIUKギャップにもまたがっている。
「アイスランドの安全と防衛は、NATO加盟国によって守られているが、多くの人にとって、より重要なことに、1951年以来の米国との二国間防衛協定によって守られている。現在、多くの人々がその防衛協定の有効性を再考しているようだ」とバーグマン氏は語った。
こうした地政学的な展開は、アイスランド人がEU加盟の可能性を議論する文脈に影響を与えているが、政治専門家らは、この議論は主に国内問題、特に経済、主権、漁業によって推進されていると強調している。
システミック・リスク・センター所長でロンドン・スクール・オブ・エコノミクスの金融分野の読者でもあるジョン・ダニエルソン氏は、アイスランドはこれまでにも漁業の管理をめぐってEU加盟国と厳しい戦いを繰り広げてきたと述べ、同部門の経済的重要性を考えるとこの問題は「トーテム的」なものだと述べた。
ダニエルソン氏は金曜日、CNBCの番組「欧州早期版」で、「アイスランド人にとって、加盟の重要な問題はユーロであり、自国通貨の不安定性と非常に高い金利から逃れることだ。つまり、ユーロこそが彼らが望むターゲットであると考えている」と語った。
「たとえ加盟に賛成票を投じたとしても、国民の大多数は漁業のことと、EUが必要な条件を提供してくれるかどうかに注目しているだろう。私の考えでは、それは疑わしいように思える」と同氏は付け加えた。
一方、アイスランドの元首相カトリン・ヤコブスドッティル氏は、同国が27カ国加盟圏との緊密な経済協力を維持しており、国民はすでに高い生活水準を享受していると述べ、EU加盟の議論は理解できないと述べた。
ヤコブスドッティル氏は4月中旬、CNBCに対し、「国民の過半数が申請を希望しているのであれば、その大多数の意見に耳を傾けることは非常に重要だが、私の立場は変わっていない」と語った。
続きを読む
確かに、アイスランドは欧州経済領域への加盟を通じて、すでに欧州の枠組みに深く組み込まれており、この火山島に完全加盟を必要とせずにEUの単一市場へのアクセスが与えられている。
アイスランドはシェンゲン圏のメンバーでもあり、他のヨーロッパ諸国との間でパスポートなしで旅行することができます。
シンクタンク国際防衛安全保障センターの副所長スティーブン・ブロックマンズ氏は電話でＣＮＢＣに対し、「実際に最初の段階で加盟申請を開始あるいは申請した社会民主党主導の現政権は、いわばこの未完の事業を終わらせようとの取り組みを再燃させている」と語った。
EUの成功例？
EUにとって、特に2020年の英国の離脱後、EUは何らかの成功例を求めて市場に参入していると政治専門家らは述べている。
バーグマン氏は、アイスランド連立政権は次回の総選挙を控えており、遅くとも2028年8月までに実施する必要があるため、イエス陣営の勝利は交渉による合意に比較的早く達する道を開く可能性があると述べた。
「今の時代では、大きいほど良いようです」とブロックマンズ氏は言う。
同氏は、一人当たりGDPで主要国にランクされ、世界の民主主義の実績でも主要国にランクされる国をEUが潜在的に歓迎することは、間違いなく「欧州統合プロジェクトにさらなる輝き」を与えるだろうと付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/iceland-eu-referendum-trump-greenland-arctic.html",
    publishedAt: "2026-08-28T13:45:42+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "iran-says-return-to-diplomacy-isn-t-impo-9512a677",
    title: "Iran says return to diplomacy 'isn't impossible' — but all Mideast wars must end to reopen Hormuz",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Iran's foreign minister said on Friday that a return to diplomatic negotiations with the U.S. is not out of the question, as Tehran set out its conditions for the reopening of the strategically vital Strait of Hormuz.
The U.S.-Iran war has been raging for six months and talks between the belligerents appear to have collapsed, but Seyed Abbas Araghchi wrote in an X post that "putting diplomacy back on track isn't impossible."
Araghchi said that following "creative discussions" with Qatari officials on Thursday to reopen a safe transit route through the Strait of Hormuz, the potential for renewed negotiations with Washington "hinges on U.S. understanding of one simple fact: pressure doesn't work."
He added: "The U.S. should build trust, speak respectfully, acknowledge our rights, and uphold commitments."
The comments come shortly after U.S. President Donald Trump said Washington was not currently talking with Iran as it continues to focus on its economic campaign against the regime.
"We don't want to speak to them. We're not looking to meet or anything," Trump told reporters in the Oval Office on Thursday.
Oil prices traded slightly lower on Friday as energy market participants continued to closely monitor crude flows through the Strait of Hormuz.
International benchmark Brent crude futures with October delivery dipped 0.1% to $89.63 per barrel, while U.S. West Texas Intermediate futures with October delivery fell 0.5% to $83.11.
Tehran: Lebanon, Gaza and Syrian conflicts must cease
In an interview on Thursday, Mohsen Rezaei, secretary of Iran's Supreme National Security Council, told Lebanese media outlet Al Manar TV that any understanding on the Strait of Hormuz with the U.S. will include an end to wars and military operations in Lebanon, Gaza and Syria.
He added that the conflict in the Gaza Strip has to end, while demanding that Israel withdraw from Lebanon and halt attacks on Syria.
Rezaei said that the Strait of Hormuz cannot be separated from the broader regional conflict, adding that the U.S. must "prove its seriousness" in implementing these commitments "before any new trust could be established."
However, a return to diplomacy does not seem imminent. The Wall Street Journal reported on Thursday that the Trump administration has no interest in going back to the terms of the memorandum of understanding it reached with Iran in June.
Citing people familiar with the matter, the Journal said that Trump was no longer interested in the June deal framework, and is instead waiting to see if his administration's strategy of pressuring Iran economically will work.
The U.S. on Monday announced an "economic D-Day" campaign against Teheran, threatening countries that do business with the Islamic Republic, shifting its focus from military action to economic pressure.
Temporary relief
Iran is now allowing a "temporary and limited" corridor for ships to pass through the Hormuz, and the future of maritime traffic will depend on developments in understandings with Washington, according to Rezaei.
Earlier this week, Oman and Iran discussed a proposal to establish a temporary joint shipping route through the Strait of Hormuz as well as a mission to clear mines from the key oil export corridor.
However, a video posted on X late Thursday stateside by Admiral Brad Cooper, commander of U.S. Central Command credited U.S. forces for clearing the mines from the strait.
Centcom forces have helped facilitate the transit of approximately 1,500 commercial vessels and 750 million barrels of crude oil over the past several months, Cooper said. "Today, international shipping lanes are open, and momentum is building."
However, the latest available Kpler data showed that only five ships crossed Hormuz on Tuesday, a far cry from the approximately 130 ships that used to transit the crucial waterway before the war broke out in February.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/us-iran-war-trump-hormuz-oman-centcom.html",
    publishedAt: "2026-08-28T10:46:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "marvell-shares-tumble-8-as-outlook-under-ffa30ba2",
    title: "Marvell shares tumble 8% as outlook underwhelms despite 37% revenue growth",
    titleJa: "マーベル株は37%の売上成長にもかかわらず見通しが厳しいため8%下落",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Marvell Technology shares fell 8% in premarket trading despite a second-quarter revenue beat, as its raised fiscal 2028 outlook failed to meet investors' elevated expectations.
The chipmaker said it now expects revenue to grow about 50% year-on-year to around $18 billion, higher than its previous forecast of $16.5 billion.
Revenue rose 37% to $2.7 billion in its fiscal second quarter. That came in $39 million above the company guidance provided in May.
Marvell, which makes networking, connectivity and custom chips used in AI data centers, offered limited detail on its fiscal 2028 outlook, dampening investor sentiment after hopes that a Google partnership worth up to $12.2 billion in shares would further boost earnings.
The stock was last trading down 8%. It's up 184% this year, buoyed by demand for its products used in AI infrastructure.
Marvell's Chairman and CEO Matt Murphy said the results were driven by continued strong demand across the company's data center portfolio, where revenue growth accelerated to 46% year over year.
"AI-related bookings remain exceptionally robust, and we expect our revenue growth to accelerate further through the remainder of fiscal 2027," Murphy added.
The Google partnership, announced last week, allows the tech giant to buy up to 58.97 million Marvell shares at $206.58 each, subject to purchase targets through fiscal 2033.
Marvell said the agreement covers products that work with Google's TPU systems, including AI inference chips, storage controllers and network interface controllers.
Goldman Sachs analysts noted "high investor expectations" ahead of the quarter.
"We believe investor expectations were elevated heading into the quarter based on robust spending at key customers, as well as the previously disclosed Google relationship," the analysts said in a Thursday note.
The results were an "incremental positive" for the stock, they added. Goldman Sachs remains neutral on Marvell as the investment bank noted that it trades at a higher valuation than its peers and there is less certainty about its ability to add custom-chip customers.`,
    bodyJa: `マーベル・テクノロジー株は、上方修正された2028年度見通しが投資家の高い期待に応えられなかったため、第2四半期の売上高が伸びたにもかかわらず、市場前の取引で8％下落した。
同社は、売上高が前年比約50％増の約180億ドルになると予想しており、従来予想の165億ドルを上回っていると述べた。
第 2 四半期の売上高は 37% 増加して 27 億ドルになりました。これは5月に提示された企業指針を3900万ドル上回った。
AIデータセンターで使用されるネットワーキング、接続、カスタムチップを製造するマーベルは、2028会計年度の見通しについて限定的な詳細しか示さず、最大122億ドル相当の株式相当のグーグルとの提携により収益がさらに押し上げられるとの期待を受けて投資家心理を冷やした。
同株価は直近の取引で８％下落していた。 AIインフラで使用される同社製品の需要に支えられ、今年は184％上昇した。
マーベルの会長兼最高経営責任者（CEO）のマット・マーフィー氏は、この業績は同社のデータセンターポートフォリオ全体での引き続き強い需要によってもたらされたもので、収益の伸びが前年比46％に加速したと述べた。
「AI関連の予約は引き続き非常に堅調であり、当社の収益成長は2027会計年度の残りまでさらに加速すると予想しています」とマーフィー氏は付け加えた。
先週発表されたGoogleとの提携により、テクノロジー大手は2033会計年度までの購入目標を条件として、マーベル株を1株あたり206.58ドルで最大5,897万株購入することができる。
マーベルによると、この契約はAI推論チップ、ストレージコントローラ、ネットワークインターフェースコントローラなど、GoogleのTPUシステムと連携する製品を対象としているという。
ゴールドマン・サックスのアナリストらは、今四半期を前に「投資家の期待が高い」と指摘した。
アナリストらは木曜日のメモで、「主要顧客への堅調な支出や、以前に開示されたグーグルとの関係に基づいて、投資家の期待が四半期に向けて高まったと考えている」と述べた。
その結果、株価は「徐々にプラス」になったと彼らは付け加えた。ゴールドマン・サックスは、マーベルが同業他社よりも高い評価で取引されており、カスタムチップの顧客を追加する能力については確実性が低いと同投資銀行が指摘したため、マーベルに対して中立を保っている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/marvell-mrvl-q2-earnings-outlook.html",
    publishedAt: "2026-08-28T10:19:13+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "russian-forces-intensify-attacks-in-done-a083faef",
    title: "Russian forces intensify attacks in Donetsk as Ukraine lauds fresh EU push to unlock frozen assets",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Russian forces have intensified attacks within Ukraine's so-called "fortress belt" of industrial cities in the eastern Donetsk region, seeking to ramp up pressure on critical Ukrainian strongholds after more than four and a half years of full-scale war.
Russian forces have long targeted the strategic cities of Kostyantynivka, Kramatorsk and Sloviansk as part of a push to completely capture the Donetsk Oblast, one of the Kremlin's key objectives in the conflict.
Speaking at an undisclosed location on Thursday, Russia's Chief of the General Staff Valery Gerasimov said Russian forces had advanced to a position just four kilometers (2.5 miles) from the eastern outskirts of Sloviansk.
Gerasimov also claimed Russian troops had overcome the first defensive line of the Sloviansk-Kramatorsk fortified region in certain areas and that operations were currently advancing along a 160-kilometer front.
The report comes shortly after data from Ukrainian open-source mapping group Deep State found that the most active battlefield actions were taking place around Kostyantynivka, which is seen as the gateway to the rest of the Donbas region.
Analysts at the Washington-based Institute for the Study of War (ISW) said earlier this week that Russian forces had intensified efforts to advance toward Sloviansk from the east and southeast following unsuccessful attempts from the northeast.
In its latest assessment of the Ukraine war, ISW challenged Gerasimov's recent claims of battlefield advances, however, saying they appeared to be designed to construct a narrative of "pervasive" Russian military success and "remain divorced from reality."
Away from the front line, Ukraine's Foreign Minister Andrii Sybiha on Friday welcomed a fresh push from four European Union member states seeking to leverage frozen Russian assets to fund Ukraine's war effort.
"It is only fair and logical to use Russian assets, rather than only European taxpayers money', to cover additional costs of defending Ukraine and the rest of Europe from the Russian threat," Sybiha said in a social media post.
"This discussion needs to be rational, not emotional," he added.
Ministers representing Spain, Sweden, Poland and the Netherlands on Thursday sent a letter to the European Commission, the EU's executive arm, calling on Brussels to restart work on plans to use more than 200 billion euros ($232.9 billion) in Russian central bank assets immobilized under EU sanctions.
Talks on the initiative, which Russia considers "blatantly illegal," collapsed last year when Belgium blocked the move over liability concerns.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/russia-donetsk-ukraine-frozen-assets.html",
    publishedAt: "2026-08-28T09:33:45+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "not-far-enough-us-parents-and-teens-on-b55454d8",
    title: "'Not far enough' - US parents and teens on Meta's new limits for young users",
    titleJa: "「まだ十分ではない」 - 米国の親と十代の若者、メタの若年ユーザー向けの新しい制限について",
    summaryJa: "「まだ十分ではない」 - 米国の親と十代の若者、メタの若年ユーザー向けの新しい制限について- 公開されました",
    bodyOriginal: `'Not far enough' - US parents and teens on Meta's new limits for young users
- Published
For Elizabeth Cardner, a mother of two girls in Houston, Texas, Meta's new limits on how teenagers can use its platforms are a welcome sign that more people are aware of social media's potential dangers.
But, she tells the BBC, they probably won't help much in the long-term.
"It will save a few arguments at home, but it doesn't go far enough," she says.
This week, Meta announced new restrictions on its platforms - which include Instagram, Facebook and Whatsapp - as part of an $18bn (£13.25bn) settlement with US states in a lawsuit on social media's effects on children.
The company said it would set a daily two-hour time limit, hide the number of likes that a post receives, remove autoplay on videos, mute push notifications during school hours, and ban extreme make-up filters.
It also announced changes to its age-verification process and parental controls as well as agreeing to appoint an independent auditor to check the measures are implemented and maintained.
Many parents across the US see the restrictions as helpful, but are still sceptical. Those who spoke to the BBC described feeling stuck - where they feel they can't cut their children off from social media but also can't protect them from the harms they believe it causes - and they are waiting to see how much of a difference these new rules will make.
Cardner's 14-year-old, Paige, believes the restrictions will lead to "more real-life scenarios" and less "fake content", which she says dominates social media. She and her sister both approve of hiding the numbers of likes and restricting filters.
But Paige sees those gains as short-lived, "since AI is evolving".
"People will find new ways to have fake filters, and correct certain parts of their videos or pictures," she says. "So I think it'll help until people use other resources to try and find new ways to do that."
Cardner says banning her daughters entirely from social media would only result in them being left out by their peers.
"Damned if you do, damned if you don't," she says. "I don't think there's any winning on it."
What the Meta settlement means for the UK, and other questions after the deal
- Published21 hours ago
Meta to pay up to $18bn to settle claims its platforms harm children
- Published1 day ago
Another mother of two teens, Andria Rose, told the BBC that she feels defenceless and "no matter how much I protect my kids, Facebook, Instagram - they're coming in and literally, like, taking them out of their rooms".
Even though she calls Meta's changes "fantastic", Rose, who lives near Boston, Massachusetts, doesn't believe they are fully addressing the problem.
"They're trying to limit the drug, but they're not controlling the drug," she says. "They're still dealing."
Rose notes her personal use of social media costs her sleep at night.
"I'm hooked," she says. "So what do you think is going to happen to a kid?"
The settlement was announced on Wednesday in the middle of a highly-anticipated trial, where Meta owner Mark Zuckerberg was expected to testify. The settlement did not include any admission of fault.
The lawsuit was originally filed in 2023 by 29 US states, alleging Meta deliberately designed its platforms to be addictive and lied about risks. They also accused it of violating a federal law on collecting children's personal information.
The settlement - announced this week - included 48 states, plus the District of Columbia and three US territories.
Several studies have found social media to be harmful to mental health, especially for children. Last year, a BBC investigation found children were being exposed to content about bullying, suicide and weapons on social media platforms.
For Rose, Meta's settlement payment "is like throwing a couple of dollar bills at a problem", given how much money the company makes and how much she believes the industry profited from children during the pandemic.
Joanie Story, a mother of four boys in Long Island, takes issue with another part of Meta's announcement - its conditions involving other platforms.
The company will withhold $5bn of the settlement, and only release it if YouTube, TikTok and others also enter into similar agreements.
It also said it would further tighten its time limit to one hour if other platforms implement similar restrictions. Story sees that as "petty".
"That's like saying: 'You know, we have the ability to fix what is broken, but we're only gonna fix it halfway,'" she says.
Still, Story is greeting the new rules as "good controls". She says she saw what a lack of controls could do when two of her sons were accidentally exposed to explicit content on a non-Meta platform. One boy has been in therapy for four years, she says.
"It's almost like being abused," says Story.
Mark SooHoo, a father of three who lives in the suburbs of Chicago, says social media and smartphones go hand-in-hand, and that both are harmful to young people.
He belongs to Wait Until 8th, an organisation where parents pledge to not give their kids smartphones until the end of eighth grade, when most have finished middle school and are 13 or 14 years old.
Most parents want to give their children smartphones so they aren't left out, he says.
"And our message is very clear: We do want them to be left out. We want them to be left out of all the negative impacts of social media," SooHoo says.
Instead of looking to the companies to address potential harms, SooHoo believes more parents should sign the smartphone pledge.
"A communal problem requires a communal solution," he says.
Reform of all social media should come with Meta changes, UN says
- Published15 hours ago
Meta hooked children on Facebook and Instagram, US court hears
- Published18 August
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.`,
    bodyJa: `「まだ十分ではない」 - 米国の親と十代の若者、メタの若年ユーザー向けの新しい制限について
- 公開されました
テキサス州ヒューストンに住む2人の女の子の母親であるエリザベス・カードナーさんにとって、ティーンエイジャーのプラットフォーム利用に対するメタの新たな制限は、ソーシャルメディアの潜在的な危険性をより多くの人が認識するようになるという歓迎すべき兆候だ。
しかし、彼女はBBCに対し、長期的にはおそらくあまり役​​に立たないと語った。
「これで家庭内での口論は多少は避けられますが、十分ではありません」と彼女は言う。
メタ社は今週、ソーシャルメディアが子供に与える影響に関する訴訟における米国各州との180億ドル（132億5000万ポンド）の和解の一環として、インスタグラム、フェイスブック、ワッツアップなどの自社プラットフォームに対する新たな制限を発表した。
同社は、1日あたり2時間の時間制限を設け、投稿に受け取った「いいね！」の数を非表示にし、動画の自動再生を削除し、授業時間中はプッシュ通知をミュートし、過激なメイクフィルターを禁止すると発表した。
また、年齢確認プロセスとペアレンタルコントロールの変更を発表するとともに、対策の実施と維持をチェックする独立監査人を任命することに同意したと発表した。
米国中の多くの親は、この制限は有益だと考えているが、依然として懐疑的だ。 BBCの取材に応じた人たちは、子供たちをソーシャルメディアから切り離すことはできないが、ソーシャルメディアが引き起こすと信じている危害から子供たちを守ることもできないと感じ、行き詰まりを感じていると述べ、これらの新しい規則がどれだけの違いを生むのかを待っているという。
カードナーさんの14歳のペイジさんは、この制限により「より現実的なシナリオ」が増え、ソーシャルメディアを支配していると彼女が言う「偽のコンテンツ」が減ると信じている。彼女も妹も、「いいね！」の数を非表示にしたりフィルターを制限したりすることに賛成しています。
しかしペイジ氏は、「AIは進化しているため」、こうした利益は長続きしないと見ている。
「人々は偽のフィルターを使用したり、ビデオや写真の特定の部分を修正したりする新しい方法を見つけるでしょう」と彼女は言います。 「ですから、人々が他のリソースを使って新しい方法を見つけ出すまでは、役に立つと思います。」
カードナーさんは、娘たちをソーシャルメディアから完全に禁止しても、娘たちは仲間から疎外されるだけだと言う。
「もしそうするならひどい、あなたがしないならひどい」と彼女は言います。 「これで勝ち目はないと思います。」
メタ和解が英国にとって何を意味するか、そして合意後のその他の疑問
- 21 時間前に公開
メタ、自社のプラットフォームが子供たちに悪影響を与えるとの訴訟で和解金として最大180億ドルを支払う
- 1 日前に公開
10代の2人の子どもを持つ別の母親、アンドリア・ローズさんもBBCに対し、自分は無防備だと感じており、「私がどれだけ子どもたちやフェイスブック、インスタグラムを守っていても、彼らは入ってきて、文字通り、子どもたちを部屋から連れ出そうとしている」と語った。
マサチューセッツ州ボストン近郊に住むローズさんは、メタの変化を「素晴らしい」と呼びながらも、彼らがこの問題に完全に対処しているとは信じていない。
「彼らは薬物を制限しようとしているが、薬物を管理していない」と彼女は言う。 「彼らはまだ取引中だ。」
ローズさんは、ソーシャル メディアを個人的に使用すると夜の睡眠時間が犠牲になると指摘しています。
「もう夢中です」と彼女は言う。 「それで、子供はどうなると思いますか？」
この和解は水曜日、メタ社のオーナーであるマーク・ザッカーバーグ氏が証言する予定となっていた待望の裁判の最中に発表された。和解には過失を認める内容は含まれていなかった。
この訴訟はもともと2023年に米国の29の州によって起こされ、メタ社が意図的に中毒性のあるプラットフォームを設計し、リスクについて嘘をついたと主張した。子どもの個人情報の収集に関する連邦法に違反しているとも非難した。
今週発表された和解案には、48の州に加え、コロンビア特別区と米国の3つの準州が含まれていた。
いくつかの研究では、ソーシャルメディアが精神的健康、特に子供にとって有害で​​あることが判明しています。昨年、BBCの調査では、子どもたちがソーシャルメディアプラットフォーム上でいじめ、自殺、武器に関するコンテンツにさらされていることが判明した。
ローズ氏にとって、会社がどれだけの利益を上げているか、そしてパンデミック中に業界が子供たちからどれだけの利益を得たかを考えると、メタの和解金は「問題に数ドル紙幣を投げるようなもの」だ。
ロングアイランドに住む4人の男の子の母親であるジョアニー・ストーリーさんは、メタ社の発表の別の部分、つまり他のプラットフォームに関わる条件について異議を唱えている。
同社は和解金のうち50億ドルを保留し、YouTubeやTikTokなども同様の契約を結んだ場合にのみ解放する予定だ。
また、他のプラットフォームでも同様の制限が実施された場合には、制限時間をさらに1時間に強化すると述べた。ストーリーはそれを「つまらない」と見なします。
「それは、『ほら、私たちには壊れたものを直す能力があるけど、中途半端にしか直さないよ』と言っているようなものです」と彼女は言う。
それでも、Story は新しいルールを「優れたコントロール」として歓迎しています。彼女は、息子 2 人が非メタ プラットフォームで露骨なコンテンツに誤ってさらされたとき、管理が欠如していると何が起こるかを見たと言います。ある少年は4年間セラピーを受けている、と彼女は言う。
「まるで虐待されているようなものです」とストーリーさんは言う。
シカゴ郊外に住む 3 人の子供の父親であるマーク・スーフーさんは、ソーシャルメディアとスマートフォンは密接な関係にあり、どちらも若者にとって有害で​​あると語ります。
彼は「8日まで待つ」という団体に所属している。この団体は、親たちが8年生の終わりまでは子どもにスマートフォンを与えないことを誓約する団体で、8年生の終わりまでは子どもにスマートフォンを与えないことを誓約している。
ほとんどの親は、子どもたちが取り残されないよう、子どもたちにスマートフォンを与えたいと考えている、と同氏は言う。
「そして私たちのメッセージは非常に明確です。私たちは彼らを排除してほしいと思っています。私たちは彼らをソーシャルメディアのあらゆる悪影響から排除したいのです」とスーフー氏は言う。
SooHoo 氏は、潜在的な損害への対処を企業に期待するのではなく、より多くの親がスマートフォンの誓約書に署名すべきだと考えています。
「共同体の問題には共同体による解決策が必要です」と彼は言います。
すべてのソーシャルメディアの改革にはメタの変更が伴うべきだと国連が主張
- 15 時間前に公開
FacebookとInstagramに子供たちがメタに夢中、米国の裁判所が審理
- 8 月 18 日公開
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2zn9zj361o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-28T09:32:14+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8e90/live/9843a980-a25f-11f1-883e-b50da2634501.jpg",
    readTime: 8,
  },
  {
    id: "selena-gomez-pushes-back-against-frivolo-35e34277",
    title: "Selena Gomez pushes back against 'frivolous' fraud claims",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Selena Gomez pushes back against 'frivolous' fraud claims
- Published
Selena Gomez's social media accounts brim with adoring fans: two million likes for her most recent post showing her and her husband in a rose-petal strewn hotel, and thousands of comments praising her beauty, her lipstick and the perfume brand she founded.
This week the PR focus for the star – who rose to fame on the Disney channel but has moved into song-writing, films and TV drama – was supposed to be on the upcoming series six of Only Murders in the Building that sees its podcasting sleuths transfered to London for their next adventure.
But the wider chat, outside those friendly spaces, has gone off-script and is largely on a less flattering topic, namely claims from investors who allege she breached her contract by not properly backing the mental health platform Wondermind that she cofounded with her mother five years ago. As a result, the five investors argue, they were defrauded of the nearly $1.2m they invested.
Gomez is pushing back against those allegations - her lawyer has asked that she be dismissed from the case altogether, saying the claims made against her are "threadbare" and arguing she should never have been "dragged into" the case at all.
The investors claim they were told that "Selena Gomez, one of the most famous women on earth, with a billion-dollar brand and a platform unmatched in social media, would be actively building the company as its head of marketing".
Gomez's attorney Matthew Rosengart says their allegations are "vague, generalised and contradictory" and that Gomez never agreed to, and did not, manage the company, or make the kind of commitments they are suggesting.
"The claims against her are meritless if not frivolous," he said.
Mr Rosengart added that the legal team was "exploring other avenues of relief for Ms. Gomez including sanctions against plaintiffs".
The emphatic pushback from Gomez may reflect a concern for her reputation but it also leaves her mother in the hot-seat, facing the fraud allegations alongside the company itself and a third co-founder.
Crisis PR commentator, Lauren Beeching, founder of Honest London says Gomez is far from the first celebrity to try working with a close family member. At times it can come off like in the Jenner-Kardashian household or with the tennis-playing Williams sisters.
But there are plenty of examples - from the Beckhams' to Britney Spears - where family brands and business don't mix well.
Working with close relatives, whether that's a sibling or a parent, or someone else is almost always a higher risk approach, says Beeching.
"It can make the boundaries between the personal relationship with the business and the celebrity's reputation much harder to separate," she says.
The natural level of trust means that you might not apply the same rules as you would in a normal commercial relationhsip, so better guardrails are needed, she says.
"If you're going into business [as a] family, I'd put more structure around it, not less, for sure.
"Define everybody's responsibilities, bring in independent oversight, and decide what happens if something goes wrong before something goes wrong."
"A family relationship shouldn't be a company's governance structure."
At the end of the day Gomez may not need to worry too much over this case, says Beeching.
"This will generate headlines because Selena Gomez is enormously famous, but I don't think it's the type of story her core audience is particularly interested in," she says.
"There's an important difference between generating negative headlines and causing lasting reputational damage. "
Still, for celebrities considering trading on their personal brand, Beeching does have words of advice.
"Before lending your name to a company, don't ask what your reputation could do for the business. Ask what that business can eventually do for your reputation as well."
Get in touch
Do you have any views, comments or questions about this story?
Related topics
- Published14 August`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cz0z4k28804o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-28T05:53:05+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b96e/live/2b586050-a20e-11f1-9090-b51af3a01fc2.jpg",
    readTime: 2,
  },
  {
    id: "trump-administration-illegally-retaliate-a82f3037",
    title: "Trump administration illegally retaliated against Anthropic, judge rules",
    titleJa: "トランプ政権、人間性、裁判官の規則に対して違法に報復",
    summaryJa: "トランプ政権、人間性、裁判官の規則に対して違法に報復- 公開されました",
    bodyOriginal: `Trump administration illegally retaliated against Anthropic, judge rules
- Published
A judge has ruled the US Department of Defense acted unlawfully when it designated artificial intelligence (AI) startup Anthropic a supply chain risk, calling the move "illegal and baseless".
The company argued in the lawsuit that Defense Secretary Pete Hegseth overstepped his authority with the new designation. It followed Anthropic's refusal to allow the military to use its AI models for things that included surveillance or autonomous weapons.
US district judge Rita Lin said in the ruling that citing national security "is not a blank check to punish and retaliate against government critics".
Anthropic welcomed the ruling. The BBC has contacted the Pentagon and the White House for comment.
Anthropic is focused on "working productively with the government to harness AI for our national security so all Americans benefit from this technology," a spokesperson told the BBC.
Judge Lin said in the court filing that the Defense Department had acted unlawfully to order firms that do business with the US military to boycott Anthropic.
The Pentagon designated Anthropic as a supply-chain risk in February - a law typically reserved for companies based in countries that pose a threat to the US.
It marked the first time an American company had been publicly designated as such.
Anthropic's lawsuit said the government's actions were both "unprecedented and unlawful".
The Claude-maker said its models were not reliable enough to be safely used in weapons systems for the military. It added that it opposed its use for domestic surveillance as a violation of rights.
The Pentagon said at the time that private companies should not be able to constrain military action.
The White House had previously said Anthropic was "a radical left, woke company" attempting to control military activity" and argued the military was beholden to the US Constitution, "not any woke AI company's terms of service".
The Pentagon also argued that Anthropic's refusal to accept new contract terms raised concerns over what the company could do with its technology.
Anthropic said in its lawsuit that its business had been impacted by the government's actions and its right to freedom of speech had been violated.
Judge Lin said during an earlier round in the lawsuit that the government was trying to "cripple" the company and "chill public debate" over military use of AI.
"This appears to be classic First Amendment retaliation," the judge added.
- Published1 day ago
- Published9 June`,
    bodyJa: `トランプ政権、人間性、裁判官の規則に対して違法に報復
- 公開されました
裁判官は、米国国防総省が人工知能（AI）新興企業アンスロピックをサプライチェーンのリスクに指定したことは違法行為であり、この動きは「違法で根拠がない」との判決を下した。
同社は訴訟で、ピート・ヘグセス国防長官が新たな指定で権限を逸脱したと主張した。これは、軍が監視や自律型兵器を含む用途に自社の AI モデルを使用することを Anthropic が拒否したことを受けてのことだ。
米国地方判事のリタ・リン氏は判決の中で、国家安全保障に言及することは「政府批判者を罰し、報復するための白紙検査ではない」と述べた。
アントロピックはこの判決を歓迎した。 BBCは国防総省とホワイトハウスにコメントを求めた。
Anthropic社の広報担当者はBBCに対し、「国家安全保障のためにAIを活用するために政府と生産的に協力し、すべてのアメリカ人がこのテクノロジーの恩恵を受けられるようにする」ことに重点を置いていると語った。
リン判事は法廷提出書類の中で、国防総省が米軍と取引のある企業にアンスロピック社のボイコットを命じる違法な行為を行ったと述べた。
国防総省は2月にアンスロピックをサプライチェーンリスクに指定したが、これは通常、米国にとって脅威となる国に拠点を置く企業に限定される法律である。
米国企業がそのように公的に指定されたのは初めてのことだった。
アンスロピック社の訴訟では、政府の行為は「前例がなく、違法」であると述べた。
クロードのメーカーは、自社のモデルは軍用兵器システムで安全に使用できるほど信頼性が低いと述べた。国内監視に利用することは権利侵害として反対すると付け加えた。
国防総省は当時、民間企業が軍事行動を制約できるべきではないと述べた。
ホワイトハウスは以前、アンスロピック社は「軍事活動を統制しようとしている極左の目覚めた企業」であると述べ、軍は合衆国憲法に従うものであり、「目覚めたAI企業の利用規約ではない」と主張していた。
国防総省はまた、アンスロピック社が新たな契約条件の受け入れを拒否したことで、同社が自社の技術で何ができるかについての懸念が生じたと主張した。
アンスロピックは訴訟の中で、同社の事業は政府の措置によって影響を受け、言論の自由の権利が侵害されたと述べた。
リン判事は訴訟の初期ラウンドで、政府は同社を「機能不全に陥れ」、AIの軍事利用を巡る「国民の議論を冷ややかに」しようとしていると述べた。
「これは典型的な合衆国憲法修正第1条の報復のようだ」と判事は付け加えた。
- 1 日前に公開
- 6 月 9 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm2q7z5mlrmo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-28T03:41:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/8a72/live/1e9bf7b0-a299-11f1-b81f-99addc8c0403.jpg",
    readTime: 3,
  },
  {
    id: "trump-ratchets-up-rhetoric-against-beiji-d8ef6335",
    title: "Trump ratchets up rhetoric against Beijing as U.S.-China officials meet for Xi's Washington visit",
    titleJa: "習主席のワシントン訪問に向けて米中当局者が会談、トランプ大統領が中国に対する発言を強める",
    summaryJa: "北京 — 米国が今週、イランに対する二次制裁で中国への圧力を強化する中、世界の二大経済大国は依然として協力方法に焦点を当て続けている。ホワイトハウスの発言が依然として厳しいにもかかわらず、これは双方がバランスを取っている兆候だ。",
    bodyOriginal: `BEIJING — As the U.S. ramped up pressure this week on China with secondary Iran sanctions, the world's two largest economies have still managed to stay focused on ways to cooperate.
It's a sign of the balancing act on both sides, even as White House rhetoric has remained tough.
U.S. President Donald Trump signaled to reporters Thursday local time he could be sanctioning Chinese banks. "I don't have to announce everything," he said, according to a Fox News stream of the event.
Those comments followed a meeting between U.S. and Chinese officials in Beijing on Wednesday, according to official announcements.
U.S. Ambassador to China David Perdue said in a social media post that he met with China's Foreign Minister Wang Yi and three other Chinese officials to discuss President Xi Jinping's upcoming state visit to Washington.
China's readout also noted Perdue's comment on "preparing well for the next stage of important high-level interactions," according to a CNBC translation of Chinese.
Trump on Thursday even mentioned Xi was coming in a few weeks.
U.S. Treasury Secretary Scott Bessent on Monday had warned that if Chinese banks "are part of the ecosystem that turns Iranian oil into money, into repression, they will be targeted." It was part of Trump's "economic D-Day" announcements against Iran.
Other than Bessent's comments, there few details on specific actions, said Jodie Wen, postdoctoral fellow at the Center for International Security and Strategy (CISS), Tsinghua University. It's more of a warning, she said.
Wen added that the Trump-Xi summit in May marked a shift toward controlled competition, rather than the Biden administration's "strategic adversary" view on China.
Moderate response
China's official response to U.S. secondary Iran sanctions has also been muted so far.
Beijing responded by saying it would "take all necessary measures" to protect itself, but did not elaborate on possible actions. When asked about communication with the U.S. on Iran, a foreign ministry spokesperson said there was no information to share.
However, the spokesperson said the two countries were in talks about a Trump-Xi meeting.
Beijing will "note the lack of groundwork that was laid ahead of Bessent's 'D-Day' announcement. And they will conclude that this is largely performative," Ryan Hass, director of the China center and Chair in Taiwan studies at Brookings, said in a social media post. Hass advised the Obama administration as director for China, Taiwan and Mongolia for the National Security Council.
"Sec. Bessent already basically gave away the game when he responded to a question by asking, 'Why would I want to blow up the global financial system?' Beijing will interpret this as signaling that the US is not going to go after major Chinese financial institutions," Hass said.
He expects the U.S.-China trade truce to remain intact because the "alternative is worse for both sides."
Beijing can also comply with U.S. sanctions and its own interests at the same time.
The Asian country has built a legal mechanism that essentially tells Chinese companies their foreign bankers must comply with U.S. rules, but inside China, Beijing's law takes precedence, said Han Shen Lin, China managing director for The Asia Group and a former executive at Wells Fargo Bank in China.
— CNBC's Anniek Bao contributed to this report.`,
    bodyJa: `北京 — 米国が今週、イランに対する二次制裁で中国への圧力を強化する中、世界の二大経済大国は依然として協力方法に焦点を当て続けている。
ホワイトハウスの発言が依然として厳しいにもかかわらず、これは双方がバランスを取っている兆候だ。
ドナルド・トランプ米大統領は現地時間木曜、記者団に対し、中国の銀行を制裁する可能性があることを示唆した。このイベントのフォックスニュースのストリームによると、同氏は「すべてを発表する必要はない」と語った。
公式発表によると、これらのコメントは水曜日に北京で行われた米中当局者の会談後に発せられた。
デービッド・パーデュー駐中国大使はソーシャルメディアへの投稿で、習近平国家主席の今後の国賓ワシントン訪問について話し合うため、中国の王毅外相および他の中国当局者３人と会談したと述べた。
CNBCの中国語翻訳によると、中国側の読み上げでは、「重要なハイレベル交流の次の段階に向けて十分な準備をしている」というパーデュー氏のコメントにも言及した。
トランプ大統領は木曜日、習氏が数週間以内に来るとさえ言及した。
スコット・ベッセント米財務長官は月曜日、中国の銀行が「イラン石油を金に変え、抑圧に変えるエコシステムの一部になれば、彼らは標的にされるだろう」と警告した。これはトランプ大統領のイランに対する「経済的Dデー」発表の一環だった。
清華大学国際安全保障戦略センター（CISS）の博士研究員ジョディ・ウェン氏によると、ベッセント氏のコメント以外には、具体的な行動に関する詳細はほとんどないという。それはむしろ警告だ、と彼女は言った。
温氏は、5月のトランプ・習首脳会談は、バイデン政権の中国に対する「戦略的敵対者」の見方ではなく、管理された競争への移行を示したと付け加えた。
中等度の反応
米国の対イラン二次制裁に対する中国の公式反応も、これまでのところ沈黙を保っている。
中国政府は自国を守るために「あらゆる必要な措置を講じる」と応じたが、考えられる行動については詳しく述べなかった。イランに関する米国とのコミュニケーションについて尋ねられた外務省報道官は、共有すべき情報はないと述べた。
しかし報道官は、両国はトランプ大統領と習氏の会談について協議中であると述べた。
中国センター所長でブルッキングス大学台湾研究部長のライアン・ハス氏はソーシャルメディアへの投稿で、中国政府は「ベッセント氏の『Dデイ』発表に先立って準備が整っていなかった点に留意するだろう。そして中国センター所長でブルッキングス大学台湾研究部長のライアン・ハス氏は、これは主に演出的なものだと結論付けるだろう」と述べた。ハス氏は国家安全保障会議の中国、台湾、モンゴル担当局長としてオバマ政権に助言した。
「ベッセント長官は、『なぜ世界の金融システムを爆破したいのか？』という質問に答えたとき、すでに基本的に勝負を放棄していた。中国政府はこれを、米国が中国の大手金融機関を追及するつもりはないという合図だと解釈するだろう」とハス氏は語った。
同氏は「代替案のほうが双方にとって悪い」ため、米中貿易停戦は維持されると予想している。
中国政府は米国の制裁と自国の利益を同時に遵守することもできる。
アジア・グループの中国マネージング・ディレクターで中国のウェルズ・ファーゴ銀行元幹部のハン・シェン・リン氏は、アジアの国は基本的に中国企業に対し、外資系銀行家が米国の規則に従わなければならないと伝える法的メカニズムを構築しているが、中国国内では中国の法律が優先されると述べた。
— CNBC の Anniek Bao がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/28/trump-x-meeting-us-china-iran-sanctions.html",
    publishedAt: "2026-08-28T01:35:13+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
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
