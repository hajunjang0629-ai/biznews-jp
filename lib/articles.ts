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
    id: "cuban-dissident-luis-manuel-otero-alc-nt-0ed62832",
    title: "Cuban dissident Luis Manuel Otero Alcántara goes into exile in US",
    titleJa: "キューバの反体制派ルイス・マヌエル・オテロ・アルカンタラ氏が米国に亡命",
    summaryJa: "キューバの反体制派ルイス・マヌエル・オテロ・アルカンタラ氏が米国に亡命- 公開されました",
    bodyOriginal: `Cuban dissident Luis Manuel Otero Alcántara goes into exile in US
- Published
One of Cuba's most prominent dissidents has gone into exile in the US, after leaving Cuba where he had served a five-year prison sentence.
Luis Manuel Otero Alcántara, 38, is the leader of the San Isidro Movement (SIM), a group of artists, journalists and intellectuals who have campaigned for freedom of speech and democracy in the communist country.
He was arrested in 2021 during Cuba's largest anti-government protests in decades and spent five years in the maximum-security Guanajay prison near Havana.
His whereabouts have been unclear in recent days as Cuban authorities held him in an unknown location while the US approved a parole request.
Emerging from the airport in Miami, the 38-year-old was greeted by supporters who sang the Cuban national anthem as he held up his forefinger and thumb in the shape of the letter L to represent '"Libertad" - meaning freedom, a recognised anti-government symbol.
"I believe the dictatorship has to end, and the Castro dynasty has to end, as well," Otero Alcántara later told journalists. "Because as long as there is a Castro in power, there will be corruption."
Cuban authorities allege the SIM is funded by Washington and has been used to subvert the state, claims the movement denies. Many members say they have been constantly targeted by the security forces, and some arbitrarily detained.
US Secretary of State Marco Rubio said the Cuban government's "brutal crackdown against its own people five years ago is yet another reminder of the unique misery and evil that is innate to the communist system".
"Otero Alcántara's only 'crime' was refusing to stay silent and using his art to demand the basic freedoms everyday Cubans have been denied for almost seven decades," he said in a statement.
The cases of Otero Alcántara and fellow SIM member Maykel Castillo, known as "Osorbo", who is serving an eight-year prison sentence, have been a recurring source of diplomatic tension between Washington and Havana.
That tension has swelled in recent months, with the Trump administration hitting Cuba with an oil blockade, sanctions and openly threatening military intervention.
Last week the BBC's US news partner CBS reported that the Pentagon was looking at military options in Cuba, although it quoted officials as saying the briefings did not mean any decision to carry out an operation had been made.
The US oil blockade has exacerbated an ongoing fuel crisis, with Cubans facing extended blackouts and food shortages in recent months.
The US also announced in May an unprecedented murder indictment against former Cuban leader Raúl Castro, over the 1996 downing of two planes, an incident that killed four people. Russia and China condemned the move.
Tourism has taken a major hit amid the US sanctions, with fewer than 360,000 people visiting the island in the first five months of 2026, a decrease of nearly 60% compared to the same period last year, according to Onei.
Washington warned in May that a peaceful agreement with the Caribbean nation was unlikely.
Related topics
More on Cuba
- Published16 June
- Published22 May`,
    bodyJa: `キューバの反体制派ルイス・マヌエル・オテロ・アルカンタラ氏が米国に亡命
- 公開されました
キューバの最も著名な反体制派の一人が、５年の懲役刑で服役したキューバを離れ、米国に亡命した。
ルイス・マヌエル・オテロ・アルカンタラさん（38歳）は、共産主義国における言論の自由と民主主義を求めて活動してきたアーティスト、ジャーナリスト、知識人のグループであるサン・イシドロ運動（SIM）のリーダーである。
彼は2021年、キューバのここ数十年で最大規模の反政府抗議活動の最中に逮捕され、ハバナ近郊の厳戒態勢のグアナジャイ刑務所で5年間を過ごした。
米国が仮釈放申請を承認している間、キューバ当局が彼を不明な場所に拘束したため、ここ数日彼の行方は不明となっている。
マイアミの空港から出てきた38歳の彼は、人差し指と親指で「リベルタード」（自由を意味し、反政府のシンボルとして認知されている）を表す文字Lの形に掲げながら、キューバ国歌を斉唱する支持者らに出迎えられた。
オテロ・アルカンタラ氏は後に記者団に対し、「独裁政権は終わらなければならないし、カストロ王朝も終わらなければならないと信じている」と語った。 「カストロが権力を握っている限り、汚職は存在するからだ。」
キューバ当局は、SIMが米国政府から資金提供され、国家転覆に利用されたと主張しているが、運動側は否定している。多くの会員は、常に治安部隊の標的にされており、恣意的に拘束された人もいると述べている。
マルコ・ルビオ米国務長官は、キューバ政府による「5年前の自国民に対する残忍な弾圧は、共産主義体制に内在する特有の悲惨さと悪を再び思い出させるものである」と述べた。
「オテロ・アルカンタラの唯一の『犯罪』は、沈黙を拒否し、キューバ人がほぼ70年間否定されてきた日常の基本的自由を自分の芸術を使って要求したことだ」と同氏は声明で述べた。
オテロ・アルカンタラと、同じくSIMメンバーで懲役8年の刑で服役中の「オソルボ」として知られるマイケル・カスティージョの事件は、ワシントンとハバナの間で外交的緊張を繰り返し引き起こす原因となっている。
トランプ政権がキューバを石油封鎖や制裁で攻撃し、公然と軍事介入を示唆するなど、この緊張はここ数カ月で高まっている。
BBCの米国ニュースパートナーであるCBSは先週、国防総省がキューバにおける軍事的選択肢を検討していると報じたが、当局者の発言として、会見は作戦遂行の決定がなされたことを意味するものではないと述べた。
米国の石油封鎖は進行中の燃料危機を悪化させ、キューバ国民はここ数カ月間、長期にわたる停電と食糧不足に直面している。
米国はまた、5月に、1996年の飛行機2機撃墜事件（4人死亡）をめぐり、キューバ元指導者ラウル・カストロ氏に対する前例のない殺人起訴を発表した。ロシアと中国はこの動きを非難した。
オネイ氏によると、米国の制裁により観光業は大きな打撃を受け、2026年最初の5カ月で島を訪れる人は36万人未満となり、前年同期と比べて60％近く減少したという。
米国政府は5月、カリブ海諸国との平和的合意の可能性は低いと警告した。
関連トピック
キューバについてさらに詳しく
- 6 月 16 日公開
- 5 月 22 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2k77p2r1xo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-19T07:47:02+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ffba/live/61f9f5c0-8336-11f1-ab22-e5791e60f909.jpg",
    readTime: 3,
  },
  {
    id: "us-and-iran-exchange-strikes-after-two-u-11496eba",
    title: "US and Iran exchange strikes after two US soldiers killed in Jordan",
    titleJa: "ヨルダンで米兵２人死亡を受け、米国とイランが攻撃を交わす",
    summaryJa: "ヨルダンで米兵２人死亡を受け、米国とイランが攻撃を交わす- 公開されました",
    bodyOriginal: `US and Iran exchange strikes after two US soldiers killed in Jordan
- Published
The US launched another round of air strikes against Iran on Saturday night, targeting its coastal surveillance and air defence facilities, US military officials said.
US Central Command (Centcom) said forces successfully hit Iranian military capabilities, while Iranian state media said Qeshm Island in the Strait of Hormuz had been struck.
Centcom said it also targeted Iran's Revolutionary Guards (IRGC) responsible for the attack that killed two US troops in Jordan on Friday, where another service member remains missing.
In response to the latest strikes, Iran's army said it carried out drone attacks on two US bases in Kuwait, according to state media.
The US and Iran have ramped up attacks against each other in recent days, with both sides accused of striking critical infrastructure.
On Saturday, Iran said it carried out "large-scale attacks with kamikaze drones" against an American military "depot at Camp Udairi" and another at "Ali Al Salem Air Base in Kuwait", according to the IRGC-affiliated Tasnim news agency.
The US strikes, on the eighth successive night of attacks, were "designed to further degrade Iran's ability to threaten commercial shipping in the Strait of Hormuz", Centcom said.
The strikes were to "swiftly punish Islamic Revolutionary Guard Corps forces who launched attacks against American service members in Jordan last night," the statement continued.
It followed a week of renewed hostilities in which Washington reimposed its blockade of Iranian ports and Tehran declared the Strait of Hormuz closed, as their preliminary ceasefire collapsed less than a month after it began.
In a statement earlier on Saturday, Centcom said: "Two US service members in Jordan were killed in action as US Central Command (Centcom) and partner forces defended against Iranian ballistic missile and drone attacks. Additionally, one service member is currently missing."
US Defence Secretary Pete Hegseth responded to the deaths with a post on X that said: "Godspeed, heroes. Their sacrifice only stiffens our resolve."
The US death toll in the conflict has now risen to 16 after an American Navy pilot who went missing earlier this month was declared dead, marking the second increase in the toll this week.
In Iran, at least 50 people have been killed and more than 500 injured in US strikes over the past three weeks, the country's health ministry said.
The US and Iran have both been accused of targeting civilian infrastructure. The US has denied this, saying it "carried out strikes exclusively on military targets, including military logistics infrastructure" after Iran said bridges and a station were hit.
On Saturday the Gulf Cooperation Council accused Tehran of targeting civilian infrastructure after Kuwait said a power plant and a water distillation plant had been hit.
Under international law, attacking civilians or civilian areas is illegal. However, in certain circumstances, civilian objects - like a bridge or a power plant - lose their protection if they are used to support the enemy's war effort.
Washington and Tehran struck a preliminary deal to end the war in June, but the agreement unravelled within weeks - with President Donald Trump declaring the agreement "over" on 8 July.
Late on Saturday, Iran's Supreme Leader Mojtaba Khamenei said in a written statement that America's "repeated breaches" of the agreement had "laid bare a fundamental truth: the signature of the US president is utterly worthless and devoid of credibility".
Related topics
- Published8 hours ago
- Published14 hours ago`,
    bodyJa: `ヨルダンで米兵２人死亡を受け、米国とイランが攻撃を交わす
- 公開されました
米軍当局者らによると、米国は土曜夜、イランの沿岸監視施設と防空施設を標的に、イランに対する再度の空爆を開始した。
米中央軍（セントコム）は、部隊がイランの軍事能力を攻撃することに成功したと発表し、一方、イラン国営メディアは、ホルムズ海峡のケシュム島が攻撃されたと報じた。
セントコムは、金曜にヨルダンで米軍兵士２人が死亡し、もう一人の軍人が行方不明となった襲撃事件の責任者であるイラン革命防衛隊（ＩＲＧＣ）も標的にしたと述べた。
国営メディアによると、イラン軍は今回の攻撃に対抗して、クウェートにある米軍基地２カ所に対して無人機攻撃を行ったと発表した。
米国とイランはここ数日、相互攻撃を強化しており、双方とも重要インフラを攻撃したと非難されている。
革命防衛隊系タスニム通信によりますと、土曜日、イランはアメリカ軍の「キャンプ・ウダイリの補給所」と「クウェートのアリ・アル・サレム空軍基地」のもう一つに対して「神風無人機による大規模攻撃」を行ったと発表しました。
セントコムは、８夜連続の米国の攻撃は「ホルムズ海峡の商船を脅かすイランの能力をさらに低下させることを目的とした」と述べた。
声明はさらに、今回の空爆は「昨夜ヨルダンで米軍人に対して攻撃を開始したイスラム革命防衛隊部隊を迅速に処罰するため」と述べた。
それは、米国政府がイラン港湾封鎖を再発動し、イラン政府がホルムズ海峡閉鎖を宣言した1週間の新たな敵対行為に続き、予備的な停戦開始から1か月も経たないうちに崩壊した。
セントコムは土曜日に発表した声明で、「ヨルダン駐留の米軍人２名が、米中央軍（セントコム）と提携部隊がイランの弾道ミサイルとドローン攻撃を防御する中、戦闘中に死亡した。また、軍人１名が現在行方不明である」と述べた。
ピート・ヘグセス米国防長官は、Xに「神速の英雄よ。彼らの犠牲は我々の決意を固めるだけだ」という投稿でこの死を受けて反応した。
今月初めに行方不明になった米海軍パイロットの死亡が確認されたことを受け、紛争による米国の死者数は16人に増え、今週2回目の増加となった。
同国の保健省によると、イランでは過去３週間の米軍の攻撃で少なくとも５０人が死亡、５００人以上が負傷した。
米国とイランはともに民間インフラを標的にしたとして非難されている。イランが橋や駅が攻撃されたと発表したことを受け、米国はこれを否定し、「軍事物流インフラを含む軍事目標のみに空爆を行った」と述べた。
クウェートが発電所と蒸留所が攻撃されたと発表したことを受け、湾岸協力会議は土曜日、民間インフラを標的にしたとしてテヘランを非難した。
国際法の下では、民間人や民間地域への攻撃は違法です。ただし、特定の状況では、橋や発電所などの民間の物体が敵の戦争努力を支援するために使用された場合、その保護が失われます。
米国とイランは6月に戦争終結に向けた暫定合意を結んだが、合意は数週間以内に解消され、7月8日にドナルド・トランプ大統領が合意は「終わった」と宣言した。
土曜日遅く、イランの最高指導者モジタバ・ハメネイ師は書面による声明で、米国による合意の「度重なる違反」は「米国大統領の署名はまったく価値がなく、信頼性を欠いているという根本的な真実を明らかにした」と述べた。
Related topics
- Published8 hours ago
- Published14 hours ago`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgk417jp83po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-19T05:10:57+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e354/live/adca3400-8323-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 4,
  },
  {
    id: "andrew-tate-and-brother-arrested-in-us-a-74ad62f8",
    title: "Andrew Tate and brother arrested in US after more charges laid against them in UK",
    titleJa: "アンドリュー・テートと弟、英国でさらなる容疑をかけられ米国で逮捕",
    summaryJa: "アンドリュー・テートと弟、英国でさらなる容疑をかけられ米国で逮捕- 公開されました",
    bodyOriginal: `Andrew Tate and brother arrested in US after more charges laid against them in UK
- Published
Controversial influencer Andrew Tate and his brother Tristan have been arrested in the US after British authorities announced they were bringing further charges against them.
The UK's Crown Prosecution Service (CPS) said Andrew Tate was being charged with seven further counts of rape, as well as other charges relating to alleged crimes including sex trafficking and child pornography.
Tristan Tate has been charged with one count of sexual assault, two counts of rape and three counts of arranging or facilitating trafficking for sexual exploitation.
The alleged offending is said to have taken place between July 2010 and August 2017. The Tates have previously denied any wrongdoing.
"These charging decisions followed receipt of a further file of evidence from Bedfordshire Police and bring the total number of alleged victims in this case to seven," Malcolm McHaffie, Head of the Special Crime Division at the Crown Prosecution Service, said.
The US Marshals confirmed to the BBC that the Tates had been taken into custody, while a US Department of Justice spokesperson said the arrests were "pursuant to extradition proceedings".
The CPS said in its statement it has requested the extradition of the brothers, who are dual British-US citizens, from the US.
A lawyer who represents the Tates, Joseph McBride, said "the world knows Andrew and Tristan are innocent" in a statement released after their arrest on Saturday evening.
"Their enemies know it best of all. That is exactly why they have been attacked," McBride continued, describing the new UK charges as a "political hit".
He said the new charges were designed to counter a defamation action filed by the brothers in the US.
"We are confident that once a competent judge sees the facts, and once the Department of Justice confronts this egregious abuse of its own authority, Andrew and Tristan Tate will walk free. America does not do Britain's political dirty work," he continued.
In May 2025, prosecutors confirmed a list of 21 charges Andrew Tate, 39, and Tristan Tate, 37, will eventually face in the UK.
These alleged offences are said to have taken place between 2012 and 2016.
In 2024, Bedfordshire Police secured European arrest warrants for the pair to have them returned from Romania, where they are based and are under criminal investigation.
In June, the brothers lost a legal bid to be told the names of their UK accusers, after the CPS decided it was necessary to withhold the names of their alleged victims until legal action formally started.`,
    bodyJa: `アンドリュー・テートと弟、英国でさらなる容疑をかけられ米国で逮捕
- 公開されました
物議を醸しているインフルエンサーのアンドリュー・テートと弟のトリスタンが、イギリス当局が彼らをさらに告発すると発表した後、アメリカで逮捕された。
英国の検察庁（CPS）は、アンドリュー・テートがさらに7件の強姦罪のほか、性的人身売買や児童ポルノなどの犯罪容疑に関連した罪で起訴されていると発表した。
トリスタン・テートは、性的暴行1件、強姦2件、性的搾取のための人身売買の斡旋または幇助3件で起訴されている。
容疑は2010年7月から2017年8月の間に起きたとされるが、テート夫妻はこれまで不正行為を否定していた。
英国検察庁のマルコム・マクハフィー特殊犯罪部門責任者は、「ベッドフォードシャー警察からさらなる証拠ファイルを受け取った後の起訴決定で、この事件の被害者とされる人の総数は7人になった」と述べた。
米国連邦保安官らはBBCに対し、テーツ氏が拘留されたことを確認したが、米国司法省報道官は逮捕は「引き渡し手続きに基づく」ものであると述べた。
CPSは声明の中で、英国と米国の二重国籍である兄弟の引き渡しを米国に要請したと述べた。
テート夫妻の代理人を務めるジョセフ・マクブライド弁護士は、土曜夕方の逮捕後に発表した声明で「アンドリューとトリスタンが無実であることは世界が知っている」と述べた。
「彼らの敵はそれを一番よく知っている。まさにそれが彼らが攻撃されている理由だ」とマクブライド氏は続け、英国の新たな告発を「政治的打撃」と表現した。
同氏は、新たな告発は米国で兄弟らが起こした名誉毀損訴訟に対抗することを目的としていると述べた。
「ひとたび有能な裁判官が事実を認識し、司法省がこのひどい職権濫用に立ち向かうと、アンドリュー・テートとトリスタン・テートは自由の身になるだろうとわれわれは確信している。米国は英国のような政治的な汚い仕事はしない」と同氏は続けた。
2025年5月、検察当局はアンドリュー・テート被告（39歳）とトリスタン・テート被告（37歳）が英国で最終的に直面することになる21件の容疑のリストを確認した。
これらの犯罪容疑は2012年から2016年の間に起きたと言われている。
2024年、ベッドフォードシャー警察は、2人が本拠地を置き、犯罪捜査を受けているルーマニアから帰国させるための欧州逮捕状を確保した。
6月、CPSが正式に訴訟が始まるまで被害者とされる人々の名前を伏せる必要があると判断したため、兄弟たちは英国での告発者の名前を明らかにするよう求めた法的入札に敗れた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwymly9yd33o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-19T02:17:07+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f7d3/live/9a3779e0-8308-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 3,
  },
  {
    id: "new-eu-border-system-tripling-time-at-pa-1a6f23ca",
    title: "New EU border system tripling time at passport control, airport boss says",
    titleJa: "新しいEU国境システムの出入国審査の時間が3倍になると空港責任者が語る",
    summaryJa: "新しいEU国境システムの出入国審査の時間が3倍になると空港責任者が語る- 公開されました",
    bodyOriginal: `New EU border system tripling time at passport control, airport boss says
- Published
The EU's new border system has nearly tripled the time it's taking for Brits to get through passport control even after improvements have been made, a boss at Rome's main airport has said.
It comes as Ryanair has warned passengers travelling to Europe this summer to prepare for extended waits.
Border police at Portugal's Faro airport also told the BBC the Entry Exit System technology suffered from bugs, but insisted any queues there would go down quickly.
The European Commission (EC) has said in most EU airports disruption is limited, and added that it will continue to support member states in the system's implementation.
It added: "This support will continue to the fullest extent possible."
The digital Entry Exit System (EES) requires non-EU citizens entering the Schengen area - made up of 29 European countries - to register fingerprints and a photo when they arrive. The information is checked as they leave.
It's often done using standalone, automated machines known as "kiosks" and sometimes with border officers - for example, for children under 12. The new process and machines have been phased in since October.
Some European airports have seen hours-long queues at passport control. Passengers have even reported missing flights home.
This week, Ryanair said "the failed EES rollout" was causing unnecessary delays and long queues.
The airline said UK passengers should "allow extra time for their journey and be prepared for extended waits at passport control."
In Rome, a perennially popular destination for tourists from the UK and around the globe, everyone we spoke to in the Piazza di Spagna had an EES story.
Carl and his family travelled to Rome from Yorkshire.
"It was two hours queuing, from getting off the plane to getting through with children. I knew it was going to be bad, but not as bad as that."
David, visiting from the US with his wife Marlo, said the queue took about an hour. "We actually missed our car, our driver."
We met people who'd flown into other airports too. One group had landed in Barcelona before a cruise brought them to Rome.
Barry, from Bracknell, said passport control had taken 45-50 minutes because some machines weren't working.
His friend Sarah, who'd arrived in Barcelona on a different flight, said passport control took nearly as long as the flight. "The queue was huge, nearly an hour… it was just slow".
System 'needs fixing urgently'
Rome's Fiumicino airport has found it impractical to have large volumes of passengers using the self-service "kiosks", despite their €12m ($13.7m, £10.2m) cost.
Now, UK nationals are among those who can register fingerprints and photos at passport e-gates, instead of having to use the standalone machines too. Children under-12 can't use them and must go to a border officer.
Ivan Bassato, the airport's Chief Aviation Officer, told the BBC the integration with e-gates "improved things significantly".
But still, the complexity of the system means the time taken for UK nationals to get through the border has risen from seven minutes to 20 minutes.
"We are not at the point where you have the same quality of the process [as] before the EES," he said.
Bassato added the airport prides itself on being well set with technology, so it was "absolutely not okay with" waits of one or two hours.
"I think that we need to fix urgently certain aspects of the system."
Bassato believes that authorities should remove duplication from the process.
He would also like to see more countries using the the EU's pre-registration app. Only two countries are doing so currently - Sweden and Portugal.
Countries involved are able to suspend EES under exceptional circumstances.
Airports and airlines have been pressing the EC to allow states to proactively suspend the process ahead of particularly busy times. However, a meeting earlier this month did not lead to any change.
Bugs in the system
Another country where passengers have reported holdups due to EES is Portugal.
The BBC spoke to Superintendent Pedro Oliveira, who is in charge of border control at Faro airport. He said "sometimes what used to be a 10-minute queue... takes over 30 minutes."
The high number of UK passengers arriving means some degree of queuing is to be expected, but he insisted people should "not be afraid" because things would move quickly.
Waits of over an hour were very rare at Faro, according to Supt Oliveira, but he added they could potentially happen if more planes than expected arrived at the same time.
The automated machines were generally the quickest way of getting through the border, he said.
Supt Oliveira also said the EU's new IT system has had bugs.
"[EES] makes us very dependent on the technology…. servers often are intertwined and connected, so sometimes something that happens in Warsaw affects our system here.
"At times, there are just complications with the server of the European Union. Sometimes crashes happen in all member states at the same time, and we need a few minutes to reboot everything."
He did say this was now happening less often.
More border officers have been recruited to help. In Portugal, children under the age of 16 go to a member of border police staff to have their biometric information recorded instead.`,
    bodyJa: `新しいEU国境システムの出入国審査の時間が3倍になると空港責任者が語る
- 公開されました
EUの新しい国境システムにより、改良が加えられた後でも英国人が出入国審査を通過するのにかかる時間はほぼ3倍になったとローマの主要空港の責任者は述べた。
これは、ライアンエアーがこの夏にヨーロッパを旅行する乗客に対し、長時間の待ち時間に備えるよう警告したことを受けてのことだ。
ポルトガルのファロ空港の国境警察もBBCに対し、入退場システム技術にはバグがあると語ったが、空港の行列はすぐに解消されると主張した。
欧州委員会（EC）は、ほとんどのEUの空港では混乱は限定的だとし、加盟国のシステム導入を引き続き支援すると付け加えた。
さらに「この支援は可能な限り最大限継続される」と付け加えた。
デジタル入出国システム (EES) では、欧州 29 か国で構成されるシェンゲン圏内に入国する非 EU 国民は、到着時に指紋と写真を登録する必要があります。情報は出発時にチェックされます。
これは多くの場合、「キオスク」として知られるスタンドアロンの自動マシンを使用して行われますが、たとえば 12 歳未満の子供に対しては国境警備官が使用する場合もあります。新しいプロセスとマシンは 10 月から段階的に導入されています。
ヨーロッパの一部の空港では、出国審査で何時間もの行列ができた。乗客からは帰国便に乗り遅れたとの報告もあった。
ライアンエアは今週、「EES展開の失敗」が不必要な遅延と長い行列を引き起こしていると述べた。
同航空は、英国の乗客は「旅行に余裕を持ち、出国審査での長時間の待ち時間に備える必要がある」と述べた。
英国および世界中からの観光客に常に人気の目的地であるローマでは、スペイン広場で話をした人全員が EES の話をしていました。
カールと彼の家族はヨークシャーからローマへ旅行しました。
「飛行機を降りてから子供たちと一緒に通過するまで、2時間の行列でした。大変なことになるだろうとは分かっていましたが、そこまでひどくはありませんでした。」
妻のマーロとともに米国から訪れたデビッドさんは、行列に約1時間かかったと語った。 「実際、私たちは車もドライバーも乗り遅れました。」
他の空港に飛んで来た人にも会いました。あるグループはクルーズでローマに向かう前にバルセロナに到着していた。
ブラックネル在住のバリーさんは、一部の機械が作動していなかったためにパスポート審査に45～50分かかったと語った。
別の便でバルセロナに到着した友人のサラさんは、パスポート審査にフライト時間とほぼ同じ時間がかかったと語った。 「行列はすさまじく、1時間近くかかりました…とにかく遅かったです。」
システムは「早急に修正する必要があります」
ローマのフィウミチーノ空港は、1,200万ユーロ（1,370万ドル、1,020万ポンド）の費用がかかるにもかかわらず、セルフサービスの「キオスク」を大量の乗客に利用させるのは非現実的であると判断した。
現在、英国国民も、スタンドアロンのマシンを使用する代わりに、パスポートの電子ゲートで指紋と写真を登録できるようになりました。 12 歳未満の子供は使用できず、国境警備官に行かなければなりません。
同空港の最高航空責任者であるイワン・バサト氏はBBCに対し、eゲートとの統合により「状況は大幅に改善された」と語った。
しかし依然として、システムの複雑さにより、英国国民が国境を通過するのにかかる時間は 7 分から 20 分に増加しています。
「我々はEES以前と同じ品質のプロセスを実現できる段階には達していない」と同氏は語った。
バサート氏は、空港はテクノロジーが整っていることに誇りを持っているため、1時間や2時間の待ち時間は「絶対に大丈夫ではなかった」と付け加えた。
「システムの特定の側面を早急に修正する必要があると思います。」
バサート氏は、当局はプロセスから重複を削除すべきだと考えている。
同氏はまた、より多くの国がEUの事前登録アプリを利用することを望んでいる。現在このようなことを行っているのはスウェーデンとポルトガルの 2 か国だけです。
関係国は例外的な状況下でEESを一時停止することができる。
空港や航空会社はＥＣに対し、特に混雑する時期に先立って各州が積極的に手続きを一時停止できるよう求めている。しかし、今月初めの会合では何の変化も生じなかった。
システムのバグ
EESによる船の滞留を乗客が報告しているもう1つの国はポルトガルです。
BBCはファロ空港の国境管理を担当するペドロ・オリベイラ警視に話を聞いた。同氏は、「以前は10分程度の行列だったものが、30分以上かかることもある」と語った。
英国から到着する乗客の数が多いため、ある程度の行列が予想されるが、事態は急速に進むため「恐れる必要はない」と同氏は主張した。
サプト・オリベイラ氏によると、ファロでは1時間以上の待ち時間は非常にまれだが、予想よりも多くの飛行機が同時に到着した場合には、待ち時間が発生する可能性があると付け加えた。
一般的に国境を通過するには自動機械が最も早い方法だと同氏は語った。
サプト・オリベイラ氏はまた、EUの新しいITシステムにはバグがあるとも述べた。
「[EES] のせいで、私たちはテクノロジーに大きく依存することになります…。サーバーは頻繁に絡み合って接続されているため、ワルシャワで起こった何かがここのシステムに影響を与えることがあります。
「時には、欧州連合のサーバーに問題が発生することがあります。すべての加盟国で同時にクラッシュが発生する場合があり、すべてを再起動するのに数分かかることがあります。」
彼は、このようなことは今ではあまり起こらなくなったと言いました。
支援のためにさらに多くの国境職員が採用された。ポルトガルでは、16 歳未満の子供は国境警察職員の所に行き、代わりに生体認証情報を記録してもらいます。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckg5gg6n9x3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-19T01:47:59+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9693/live/d4402e80-81d1-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 6,
  },
  {
    id: "two-us-troops-killed-and-one-missing-aft-8374dfba",
    title: "Two US troops killed and one missing after Iranian attack in Jordan",
    titleJa: "ヨルダンでのイラン攻撃後、米軍兵士2名が死亡、1名が行方不明",
    summaryJa: "ヨルダンでのイラン攻撃後、米軍兵士2名が死亡、1名が行方不明- 公開されました",
    bodyOriginal: `Two US troops killed and one missing after Iranian attack in Jordan
- Published
Two US service members were killed and one remains missing after Iranian ballistic missile and drone attacks in Jordan on Friday, military officials said.
The US Central Command (Centcom) said four US service members were medically evacuated to Jordan hospitals but have since been discharged. Others who had minor injuries have returned to duty.
US military officials did not disclose the identities of those killed, nor provide details about the circumstances or location of the incident.
On Saturday night the US launched another round of air strikes against Iran at President Donald Trump's direction, Centcom said.
The strikes - for the eighth night in a row - are "designed to further degrade Iran's ability to threaten commercial shipping in the Strait of Hormuz", the statement said.
The strikes aim to "swiftly punish Islamic Revolutionary Guard Corps forces who launched attacks against American service members in Jordan last night," the statement continued, without providing further details.
It followed a week of renewed hostilities in which Washington reimposed its blockade of Iranian ports and Tehran declared the Strait of Hormuz closed, as their preliminary ceasefire collapsed less than a month after it began.
Late on Saturday, Iran's Supreme Leader Mojtaba Khamenei said in a written statement that America's "repeated breaches" of the agreement had "laid bare a fundamental truth: the signature of the US president is utterly worthless and devoid of credibility".
Khamenei, who has not been seen in public since the attack which killed his father at the start of the war, accused the US of seeking to "escalate the conflict" and said Iran had "unforgettable lessons in store for it".
Jordan's military earlier said it had intercepted 10 Iranian missiles fired into its airspace overnight, without reporting any damage.
The US death toll in the conflict has now risen to 16 after an American Navy pilot who went missing earlier this month was declared dead, marking the second increase in the toll this week.
In a statement on Saturday, Centcom said: "Two US service members in Jordan were killed in action as US Central Command (Centcom) and partner forces defended against Iranian ballistic missile and drone attacks. Additionally, one service member is currently missing.
"Out of respect for the families, Centcom will withhold additional information, including the identities of the fallen warriors, until 24 hours after the next of kin have been notified."
Responding to the announcement of the deaths, US Defence Secretary Pete Hegseth wrote on X: "Godspeed, heroes. Their sacrifice only stiffens our resolve."
The Islamic Revolutionary Guard Corps (IRGC) said it had destroyed at least two US fighter aircraft early on Saturday on Al-Azraq base in Jordan, according to Iranian state media.
The BBC contacted Centcom regarding this report but it declined to add further details.
Separately on Saturday, the US Department of State issued a notice advising Americans worldwide, but particularly in the Middle East, to exercise "increased caution".
The travel notice urged those in the region to "monitor the news for breaking developments", adding: "Due to heightened tensions in the Middle East, the security environment remains complex with the potential for unforeseen escalation."
Trump threatens to bomb bridges and power plants unless Iran resumes talks
- Published3 days ago
Trump retreat over Hormuz tolls suggests he is struggling to end Iran war
- Published4 days ago
Washington and Tehran struck a preliminary deal to end the war in June, but the agreement unravelled within weeks - with Trump declaring the agreement "over" on 8 July.
At least 50 people have been killed and more than 500 injured in US strikes over the past three weeks, Iranian state media reported citing the country's health ministry.
Thousands more have been killed across the Middle East since the US-Israeli war with Iran began on 28 February, official figures show, with the vast majority coming from Iran and Lebanon.
As well as military targets, both Iran and the US have been accused of striking critical infrastructure in recent days.
The US denied Iranian accusations that it had hit bridges, a train station and an airport earlier this week. Washington said it had exclusively struck military targets. BBC Verify confirmed an attack on a bridge in Hormozgan province.
Trump had threatened on Tuesday to strike Iran's bridges and power plants next week if the country did not return to talks.
Meanwhile, the Gulf Cooperation Council accused Tehran of deliberately targeting civilian infrastructure in the region. After Iran said it had responded to US strikes by targeting American Gulf allies on Saturday, Kuwait said a power plant and a water distillation plant had been hit.
Jasem Mohamed Albudaiwi, who leads the council representing Saudi Arabia, Kuwait, Qatar, Bahrain, the United Arab Emirates and Oman, said such action amounted to "war crimes".
Under international law, attacking civilians or civilian areas is illegal. However, in certain circumstances, civilian objects - like a bridge or a power plant - lose their protection if they are used to support the enemy's war effort.
This week also saw Trump reimpose the US blockade of Iranian ports, under which Centcom said five commercial vessels had been "redirected" and one had been disabled as of Saturday.
Iran meanwhile declared the Strait of Hormuz shut, causing traffic to grind to a halt through the vital shipping channel through which around a fifth of the world's oil and liquefied natural gas ordinarily passes.
Trump said on Monday that all vessels transiting the strait - including those of US allies - would have to pay a 20% fee to do so, before abandoning the proposal altogether on Tuesday, saying it would instead be replaced by trade deals with Gulf allies.
Related topics
- Published9 hours ago`,
    bodyJa: `ヨルダンでのイラン攻撃後、米軍兵士2名が死亡、1名が行方不明
- 公開されました
金曜日にヨルダンでイランの弾道ミサイルと無人機による攻撃があり、米軍関係者２人が死亡、１人が行方不明となったと軍関係者が明らかにした。
米中央軍（セントコム）は、米軍人４人が医学的にヨルダンの病院に避難したが、その後退院したと発表した。軽傷を負った他の人たちは任務に復帰した。
米軍当局者は殺害された人々の身元を明らかにしておらず、事件の状況や場所についての詳細も明らかにしていない。
セントコムによると、土曜夜、米国はドナルド・トランプ大統領の指示でイランに対する追加空爆を開始した。
声明によると、今回の攻撃は８夜連続で「ホルムズ海峡の商船を脅かすイランの能力をさらに低下させることを目的としている」という。
声明は、今回の空爆は「昨夜ヨルダンで米軍人に対して攻撃を開始したイスラム革命防衛隊を迅速に処罰する」ことを目的としていると続けたが、さらなる詳細は明らかにしなかった。
それは、米国政府がイラン港湾封鎖を再発動し、イラン政府がホルムズ海峡閉鎖を宣言した1週間の新たな敵対行為に続き、予備的な停戦開始から1か月も経たないうちに崩壊した。
土曜日遅く、イランの最高指導者モジタバ・ハメネイ師は書面による声明で、米国による合意の「度重なる違反」は「米国大統領の署名はまったく価値がなく、信頼性を欠いているという根本的な真実を明らかにした」と述べた。
ハメネイ師は、戦争開始時に父親を殺害した攻撃以来、公の場に姿を現していないが、米国が「紛争の激化」を狙っていると非難し、イランには「忘れられない教訓が待っている」と述べた。
ヨルダン軍はこれに先立ち、領空に向けて発射されたイラン製ミサイル１０発を一晩で迎撃したが、被害報告はなかったと発表した。
今月初めに行方不明になった米海軍パイロットの死亡が確認されたことを受け、紛争による米国の死者数は16人に増え、今週2回目の増加となった。
セントコムは土曜日の声明で、「ヨルダン駐留の米軍人２名が、米中央軍（セントコム）と提携部隊がイランの弾道ミサイルと無人機攻撃を防御する中、戦闘中に死亡した。また、軍人１名が現在行方不明となっている」と述べた。
「遺族に敬意を表し、セントコムは、近親者に通知されてから24時間後まで、戦死した戦士の身元を含む追加情報を差し控える。」
死亡の発表を受けて、ピート・ヘグセス米国防長官はXに次のように書いた：「神速の英雄よ。彼らの犠牲は私たちの決意を固くするだけです。」
イラン国営メディアによると、イスラム革命防衛隊（IRGC）は土曜日早朝、ヨルダンのアル・アズラク基地で少なくとも2機の米軍戦闘機を破壊したと発表した。
BBCはこの報道に関してセントコムに問い合わせたが、さらなる詳細の追加は拒否された。
これとは別に土曜日、米国務省は世界中、特に中東の米国人に対し「一層の警戒」を行うよう勧告する通知を出した。
渡航通知では、この地域の人々に「最新の展開についてニュースに注意する」よう呼び掛け、「中東での緊張の高まりにより、安全保障環境は依然として複雑で、予期せぬエスカレーションの可能性がある」と付け加えた。
トランプ大統領、イランとの協議再開がなければ橋や発電所を爆撃すると脅す
- 3 日前に公開
ホルムズ通行料問題でトランプ大統領が撤退、イラン戦争終結に苦戦していることを示唆
- 4 日前に公開
米国とイランは6月に戦争終結に向けた暫定合意を結んだが、合意は数週間以内に解消され、トランプ大統領は7月8日に合意は「終わった」と宣言した。
イラン国営メディアは同国の保健省の話として、過去３週間の米国の空爆で少なくとも５０人が死亡、５００人以上が負傷したと報じた。
公式統計によると、2月28日に米国・イスラエルとイランの戦争が始まって以来、中東全域でさらに数千人が殺害され、その大部分がイランとレバノンからのものである。
軍事目標だけでなく、イランと米国の両国はここ数日、重要インフラを攻撃したとして非難されている。
米国は今週初めに橋、駅、空港を攻撃したというイランの主張を否定した。米国政府は軍事目標のみを攻撃したと述べた。 BBCヴェリファイはホルモズガン州の橋への攻撃を確認した。
トランプ大統領は火曜日、イランが協議に復帰しなければ来週イランの橋と発電所を攻撃すると脅迫した。
一方、湾岸協力会議はイラン政府が地域の民間インフラを意図的に標的にしていると非難した。イランが土曜日、米国の湾岸同盟国を標的にして米国の攻撃に応じたと発表したことを受け、クウェートは発電所と蒸留所が攻撃を受けたと発表した。
サウジアラビア、クウェート、カタール、バーレーン、アラブ首長国連邦、オマーンを代表して評議会を率いるジャセム・モハメド・アルブダイウィ氏は、こうした行為は「戦争犯罪」に当たると述べた。
国際法の下では、民間人や民間地域への攻撃は違法です。ただし、特定の状況では、橋や発電所などの民間の物体が敵の戦争努力を支援するために使用された場合、その保護が失われます。
今週はトランプ大統領が米国によるイラン港湾封鎖を再発動し、セントコムは土曜日の時点で商船５隻が「方向転換」され、１隻が航行不能になったと発表した。
一方、イランはホルムズ海峡の閉鎖を宣言し、通常、世界の石油と液化天然ガスの約5分の1が通過する重要な輸送路の交通が停止した。
トランプ大統領は月曜日、米国の同盟国の船舶も含め、この海峡を通過するすべての船舶はそのために20％の手数料を支払わなければならないと述べ、その後火曜日にはこの提案を完全に放棄し、その代わりに湾岸同盟国との通商協定に置き換えると述べた。
関連トピック
- 9 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn8nynv8ze8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-19T00:18:47+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bb90/live/f934e660-82d3-11f1-a42c-29abcdb2a052.jpg",
    readTime: 6,
  },
  {
    id: "the-hidden-cost-of-the-night-shift-and-h-d8ced3da",
    title: "The hidden cost of the night shift and how to sleep it off",
    titleJa: "夜勤の隠れたコストとそれを睡眠で補う方法",
    summaryJa: "朝の４時、病棟は静かだ。若手医師は9時間も立ち続けている。彼女は疲れていて、筋肉痛があり、目が疲れていますが、朝の 6 時に勤務が終わり、ようやく家に帰ると、なかなか眠れません。彼女の体内時計は、人間の生物学を太陽の昇り沈みに合わせて調整するために何百万年もの進化をかけて構築され、今が朝であることを主張しています。起きる時間です。警戒すべき時です。どんなに暗闇でも、耳栓でも、遮光ブラインドでも、完全に沈黙させることはできません。",
    bodyOriginal: `It is four in the morning, and the ward is quiet. A junior doctor has been on her feet for nine hours. She is tired, her muscles are sore and her eyes are straining, but when her shift ends at six in the morning and she finally gets home, she struggles to sleep.
Her internal clock, built over millions of years of evolution to tune human biology to the rising and setting of the Sun, is insisting it is morning. Time to wake up. Time to be alert. No amount of darkness, earplugs or blackout blinds can entirely silence it.
This is not a personal failing. It is a collision between the demands of her job and some of the deepest machinery in the human body. This is playing out, invisibly, in the lives of millions of shift workers. Among them are the nurses, paramedics, engineers, lorry drivers and factory workers, who keep the country running while everyone else sleeps.
And the scientific evidence about what this relentless battle with our own internal clocks and modern living costs them - in heart attacks, strokes, cancer, mental illness, and quite possibly their precious memories - is increasingly difficult to ignore.
Now scientists are beginning to explore whether changing how we sleep can play a role in mitigating the toll of night shifts, and potentially alleviate the ill-effects of disrupted nights. Their studies are also testing a surprising theory: that splitting sleep into two separate blocks - rather than attempting to force one long stretch during the day - may in fact be the most effective sleep pattern for people working through the night.
The cost of shift work
To understand what shift work does to the body, it's worth looking at what emerging research suggests about sleep itself. Sleep does far more than give the brain and body a rest.
When we are asleep, our brain consolidates the memories of the day, processes emotions, and solves problems that defied it in the waking hours. It also strengthens immune defences and repairs muscle tissue.
Prof Russell Foster is a sleep scientist at Oxford University, who has spent a career studying the biology of the sleeping brain.
"Sleep is a pillar of our health," he says, "in the same way we think about diet and exercise. We have to take control of it."
In that light, the strain of shift work becomes easier to see: it's not solely about being tired, but potentially about repeatedly disrupting a system that's doing far more behind the scenes than many people realise.
One of the most remarkable discoveries of recent years is that while we sleep, the brain cleans itself. Deep within the grey matter is plumbing called the glymphatic system. Fluid runs along tiny channels beside the brain's blood vessels, washing away the waste products that accumulate during waking hours.
So, what happens to these toxins when sleep is disrupted?
Prof Hugh Markus, a neurologist who leads the stroke medicine group at the University of Cambridge, has begun to answer this question.
Markus and a medical student, Yutong Chen, analysed the brain scans of more than 40,000 people drawn from a vast database of health records and medical scans built up over more than a decade at the UK Biobank. All of them were healthy when their scans were taken.
The researchers found they could identify those whose drainage systems were struggling. Critically though, they discovered that those with the most impaired drainage systems were significantly more likely to go on to develop dementia years later, according to Markus.
"Disruption of that flow," he says, "was playing an important role in predicting who would get dementia, in large numbers of people in the normal population."
Among the waste products the system clears are proteins called amyloid and tau, the deposits that accumulate in the brains of people with Alzheimer's disease. A single sleepless night measurably raises amyloid levels in the fluid surrounding the brain. Do that repeatedly, year after year, and the implications are troubling.
A Swedish study by researchers at the Karolinska Institute, tracking more than 13,000 shift workers, including night shift workers, for up to 41 years, found that shift work in mid-life was associated with a 36% higher risk of dementia - with the risk rising the longer someone had worked shifts.
Foster is careful not to overstate the link. "You wouldn't say poor sleep causes dementia," he says, "but if you're vulnerable, it's a potential risk factor."
Markus's data shows a possible link, but he cautions that it is a hypothesis at this stage and there are likely to be many other factors at play.
"Sleep matters," he says, "but so do the big vascular things - blood pressure, smoking, diabetes. What's never mentioned is how much of the risk of Alzheimer's comes from those - things we could actually do something about."
There are also tentative but growing indications of how sleep disturbance might increase the risk of heart disease. An analysis of 35 studies published last year found that sleep reduced to around 4.5 hours for three or more nights significantly raised the activity of the body's immune system. This is normally a good thing when it is roused to fight infection but also causes inflammation in the body which if persistent is associated with heart disease.
Disrupted sleep raises the stress hormone, cortisol, which in turn promotes insulin resistance and pushes the body toward a diabetic state. Higher levels of cortisol also worsens sleep further, locking workers into a self-reinforcing cycle. Add to this the sugar-hit snacking that keeps some shift workers going overnight and it makes for an extremely unhealthy cocktail.
As if that were not enough, the World Health Organization's International Agency for Research on Cancer (IARC), has classified night shift work as "probably carcinogenic to humans" and put it in the same risk group as red meat, citing evidence for links to breast, prostate, colon and colorectal cancers.
This may be because disruption to the body's circadian system alters timing of the production of melatonin, a hormone thought to have tumour-suppressing properties, as well as reduced vitamin D from lack of daylight, and the chronic low-level inflammation that broken sleep promotes.
Biphasic sleep
For the more than three million people in the UK working night shifts, and who have little choice but to disrupt their sleep, this may all sound worrying. But researchers are beginning to pinpoint what might actually help.
Dr Line Victoria Moen, a researcher at Norway's National Institute of Occupational Health in Oslo, is investigating whether a planned nap may be part of the answer.
The research team came across intriguing findings from their study of shift workers in the Arctic Circle, where the sun barely sets in summer and sleep has to be won from the never-ending day. It was an ideal place to study the battle between a person's body clock and the elements.
Moen followed shift workers in the far north of Norway. The workers wore Oura Rings to track their sleep, and as Moen pored over the data, a pattern emerged. Many of them were not collapsing into one long, exhausted sleep when they got home. They were sleeping in two distinct blocks, from nine in the morning until one, then again in the afternoon before the next shift.
"Their body is forcing them to wake up," she says, "and recover some additional sleep in the afternoon."
This pattern has a name: biphasic sleep. It means two distinct sleep periods in 24 hours instead of one. And it echoes something sleep historians have long noted: in pre-industrial times before artificial lighting, humans often slept in two blocks. Researchers suggest it may be a more natural rhythm, even if the biological reasons for it are still debated.
Roger Ekirch, a historian at Virginia Tech who has spent 40 years in the archives of pre-industrial Europe, established that sleeping in two halves was the predominant pattern in the Western world until the mid-19th Century.
A typical family, he found, would go to bed around nine, wake naturally after midnight for an hour or so - for prayer, chores, conversation - then sink back into what they called their "second sleep".
The pattern persisted until artificial light changed the economics of the night: gas lamps began lighting London's streets in 1807, people stayed up later, the gap between the two sleeps narrowed and eventually closed.
Ekirch believes the old rhythm has never entirely died. "Middle-of-the-night insomnia is the most prevalent sleep disorder in many countries," he says.
"And I'd argue that, in many cases, it isn't a disorder at all. It instead represents a persistent echo, a relic of this earlier pattern of sleep."
Foster's own laboratory work supports the biological claim: in a famous experiment, the American psychiatrist Thomas Wehr gave volunteers 14 hours of darkness approximating a pre-industrial winter night and within weeks, without any instruction, they drifted naturally into sleeping in two halves.
"The default," says Foster, "is almost certainly not a single block."
What struck Moen most forcefully was not the two-sleep pattern itself but the dearth of evidence around it. She investigated the data to assess how prevalent biphasic sleep was among shift workers, what health outcomes were associated with it, and whether a split sleep was better or worse than one exhausted block. She found almost nothing. "So I thought that's really interesting. I'll go and look properly," she says.
Looking properly has involved going through 11,000 summaries of scientific papers and working through the evidence on biphasic sleep across health, performance, and the subjective experience of shift workers. Her full results are expected later this year.
So far, Moen has found that existing research on the topic is fragmented. Some studies treat biphasic sleep as one long sleep plus a brief nap; others count only two equal periods; there is no agreed definition.
Sleep anxiety
The eventual aim of Moen's research is to develop clear clinical guidelines that might help shift workers and others with disrupted sleep patterns.
"They get very anxious because they can't sleep long after a night shift," says Moen. "It would be nice to be able to tell them that, actually, a good nap in the afternoon will help."
Several studies show that napping during shift work, where possible, is associated with reduced sleepiness and improved alertness. Studies of healthcare workers suggest that even a 20-to-50-minute nap during or after a shift improves focus and reduces drowsy driving on the way home.
The questions Moen's research will try to answer, more rigorously than has been attempted before, are: how common it is, what forms it takes and whether there is evidence that splitting sleep could improve health, performance, fatigue or safety.
Her husband, a shift worker himself, illustrates the problem with quiet precision. "He always wakes very early, after only three or four hours," she says. "There's no-one home, it's dark, and still, he can't sleep. His day rhythm drags him up."
His body will not be overruled by a blackout blind. What Moen wants to give him, and the millions like him, is permission, backed by science, to stop fighting the body's signal and work with it instead.
"Since we know that many shift workers can't really avoid sleeping during the day," Moen says, "I think it's important to see how we can help them make better choices."
Top picture credit: Getty Images
More from InDepth
We are living fewer years in good health: Is the NHS part of the problem?
- Published7 days ago
How male infertility is still not getting enough attention
- Published26 June
BBC InDepth is the home on the website and app for the best analysis, with fresh perspectives that challenge assumptions and deep reporting on the biggest issues of the day. Emma Barnett and John Simpson bring their pick of the most thought-provoking deep reads and analysis, every Saturday. Sign up for the newsletter here
Get in touch
Are you personally affected by the issues raised in this story?`,
    bodyJa: `朝の４時、病棟は静かだ。若手医師は9時間も立ち続けている。彼女は疲れていて、筋肉痛があり、目が疲れていますが、朝の 6 時に勤務が終わり、ようやく家に帰ると、なかなか眠れません。
彼女の体内時計は、人間の生物学を太陽の昇り沈みに合わせて調整するために何百万年もの進化をかけて構築され、今が朝であることを主張しています。起きる時間です。警戒すべき時です。どんなに暗闇でも、耳栓でも、遮光ブラインドでも、完全に沈黙させることはできません。
これは個人的な失敗ではありません。それは彼女の仕事の要求と、人体の最も奥深くにある機械との衝突です。これは何百万もの交替勤務者の生活の中で目に見えない形で進行しています。その中には看護師、救急隊員、エンジニア、トラック運転手、工場労働者もおり、他の人々が眠っている間に国を動かし続けている。
そして、私たち自身の体内時計と現代の生活との絶え間ない戦いが、心臓発作、脳卒中、がん、精神疾患、そしておそらく貴重な記憶など、彼らにどのような犠牲を強いるかについての科学的証拠を無視することはますます困難になっています。
現在、科学者たちは、睡眠方法を変えることが夜勤の負担を軽減する役割を果たせるかどうか、また、睡眠妨害による悪影響を軽減できる可能性があるかどうかを調査し始めている。彼らの研究は、驚くべき理論も検証している。それは、日中に無理に長時間ストレッチをするのではなく、睡眠を2つの別々のブロックに分割することが、実際、夜通し働く人々にとって最も効果的な睡眠パターンである可能性があるというものだ。
交替勤務のコスト
交代勤務が身体に与える影響を理解するには、睡眠そのものについて新たな研究が示唆していることを検討する価値があります。睡眠は脳と体を休ませるだけではありません。
私たちが眠っているとき、私たちの脳はその日の記憶を統合し、感情を処理し、起きている間に解決できなかった問題を解決します。また、免疫防御を強化し、筋肉組織を修復します。
ラッセル・フォスター教授はオックスフォード大学の睡眠科学者で、睡眠中の脳の生物​​学を研究するキャリアを積んできました。
「睡眠は私たちの健康の柱です。私たちが食事や運動について考えるのと同じように、睡眠をコントロールする必要があります。」と彼は言います。
そう考えると、交替制勤務の負担がよりわかりやすくなります。それは単に疲れているだけではなく、多くの人が思っているよりもはるかに多くのことを舞台裏で行っているシステムを繰り返し混乱させている可能性があります。
近年の最も注目すべき発見の 1 つは、私たちが眠っている間に脳が自動的に掃除しているということです。灰白質の奥深くには、グリンファティック系と呼ばれる配管があります。体液は脳の血管の横にある小さなチャネルに沿って流れ、起きている間に蓄積した老廃物を洗い流します。
では、睡眠が妨げられると、これらの毒素はどうなるのでしょうか?
ケンブリッジ大学の脳卒中医学グループを率いる神経内科医ヒュー・マーカス教授は、この疑問に答え始めた。
マーカス氏と医学生のユートン・チェン氏は、英国バイオバンクで10年以上にわたって蓄積された健康記録と医療スキャンの膨大なデータベースから抽出された4万人以上の脳スキャンを分析した。スキャンが行われたとき、彼らは全員健康でした。
研究者らは、排水システムに問題がある人々を特定できることを発見した。しかし重要なことに、マーカス氏によると、排水システムに最も障害のある人々は、数年後に認知症を発症する可能性が大幅に高いことが判明したという。
「その流れの破壊は、正常人口の多くの人が認知症になることを予測する上で重要な役割を果たしていた」と彼は言う。
このシステムが除去する老廃物の中には、アルツハイマー病患者の脳に蓄積する沈着物であるアミロイドとタウと呼ばれるタンパク質があります。一晩眠れないと、脳周囲の体液中のアミロイドレベルが目に見えて上昇します。それを毎年毎年繰り返すと、その影響は憂慮すべきものになります。
カロリンスカ研究所の研究者らによるスウェーデンの研究では、夜勤者を含む1万3000人以上の交替勤務者を最長41年間追跡調査しており、中年期の交替勤務は認知症のリスクが36％高いと関連しており、交替勤務が長いほどリスクが高まることが判明した。
フォスター氏はリンクを誇張しないよう注意している。 「睡眠不足が認知症の原因になるとは言えませんが、もしあなたが脆弱であれば、それは潜在的な危険因子です。」と彼は言います。
マーカス氏のデータは関連性の可能性を示しているが、現段階では仮説であり、他にも多くの要因が関与している可能性が高いと警告している。
「睡眠は重要ですが、血圧、喫煙、糖尿病といった血管に関わる大きな問題も重要です。言及されていないのは、アルツハイマー病のリスクのどれだけがこれらの要因から来ているかということです。実際に私たちが何とかできる可能性があるのです。」
また、睡眠障害が心臓病のリスクをどのように増加させるかについて、暫定的ではありますが、兆候は増えてきています。昨年発表された35件の研究を分析したところ、3晩以上睡眠が約4.5時間に減少すると、体の免疫系の活性が大幅に上昇することが判明した。これは通常、感染症と戦うために興奮している場合には良いことですが、体内に炎症を引き起こし、持続すると心臓病に関連します。
睡眠が妨げられると、ストレスホルモンであるコルチゾールが増加し、インスリン抵抗性が促進され、体が糖尿病状態に向かって進みます。コルチゾールのレベルが高くなると睡眠はさらに悪化し、労働者は自己強化サイクルに閉じ込められてしまいます。これに砂糖たっぷりの間食が加わると、一部の交替勤務者が一晩中飲み続けることになり、非常に不健康なカクテルになります。
それだけでは十分ではないかのように、世界保健機関の国際がん研究機関(IARC)は、乳がん、前立腺がん、結腸がん、結腸直腸がんとの関連性を示す証拠を挙げて、夜勤労働を「おそらく人間に対して発がん性がある」と分類し、赤身の肉と同じリスクグループに分類した。
これは、体の概日システムの乱れにより、腫瘍抑制作用があると考えられているホルモンであるメラトニンの生成のタイミングが変化すること、日光不足によるビタミンDの減少、睡眠不足による慢性的な低レベルの炎症の促進などが考えられます。
二相性睡眠
英国で夜勤をしており、睡眠を妨げざるを得ない300万人以上の人々にとって、これはすべて心配に聞こえるかもしれない。しかし研究者たちは、実際に役立つ可能性のあるものを特定し始めています。
オスロにあるノルウェー国立産業衛生研究所の研究者、ライン・ビクトリア・モーエン博士は、計画的な昼寝がその解決策の一部である可能性があるかどうかを調査している。
研究チームは、夏には太陽がほとんど沈まず、終わりのない一日から睡眠を勝ち取らなければならない北極圏の交替勤務者を対象とした研究から、興味深い発見を発見した。そこは、人間の体内時計と自然との戦いを研究するのに理想的な場所でした。
モエンさんはノルウェー極北の交替制労働者を追った。労働者たちは睡眠を追跡するために Oura Rings を着用しており、モーエン氏がデータを詳しく調べていると、あるパターンが浮かび上がってきました。彼らの多くは、家に帰っても疲れ果てて長い眠りにつくことはなかった。彼らは午前9時から午前1時まで、そして次の勤務前の午後に再び、2つの異なるブロックに分かれて寝ていました。
「彼らの体は、彼らを強制的に目覚めさせ、午後には追加の睡眠を回復させています。」と彼女は言います。
このパターンには二相睡眠という名前が付いています。これは、24 時間に 1 つの睡眠期間ではなく 2 つの異なる睡眠期間があることを意味します。そしてこれは、睡眠史家が長年指摘してきたことを反映している。人工照明が普及する前の産業革命以前の時代、人類はしばしば 2 つのブロックで眠っていた。研究者らは、その生物学的理由はまだ議論の余地があるものの、それがより自然なリズムである可能性があると示唆しています。
バージニア工科大学の歴史家で、産業革命以前のヨーロッパのアーカイブで40年間を過ごしたロジャー・エカーチ氏は、19世紀半ばまでは半分に寝て寝るのが西洋世界の主流のパターンであったことを確立した。
彼によると、典型的な家族は9時頃に就寝し、祈りや家事、会話のために真夜中過ぎに自然に起きて1時間ほど過ごし、その後再び「二度目の睡眠」と呼ばれる状態に戻るという。
このパターンは、人工光が夜の経済状況を変えるまで続きました。1807 年にガス灯がロンドンの街路を照らし始め、人々は遅くまで起きていて、2 つの睡眠の差は縮まり、最終的には解消されました。
エキルヒ氏は、古いリズムが完全に消え去ったわけではないと信じている。 「深夜の不眠症は、多くの国で最も蔓延している睡眠障害です」と彼は言います。
「そして、多くの場合、それはまったく障害ではないと私は主張します。むしろ、持続的なエコー、つまり以前の睡眠パターンの名残を表しているのです。」
フォスター自身の実験室での研究は生物学的主張を裏付けている。有名な実験では、アメリカの精神科医トーマス・ヴェーアがボランティアたちに産業革命以前の冬の夜に近い暗闇を14時間与えたところ、何の指示もなしに数週間以内に彼らは自然に半分ずつ寝るようになったという。
「デフォルトでは、ほぼ確実に 1 つのブロックではありません。」とフォスター氏は言います。
モーエン氏を最も強く驚かせたのは、二度寝パターンそのものではなく、それをめぐる証拠の不足だった。彼女はデータを調査して、交替制勤務者の間で二相睡眠がどの程度普及しているか、それとどのような健康結果が関連しているか、そして分割睡眠が疲れきったブロックよりも良いか悪いかを評価しました。彼女はほとんど何も見つけられませんでした。 「それで、すごく面白いと思ったんです。ちゃんと見に行ってみます」と彼女は言う。
適切に調査するには、11,000 件の科学論文の要約に目を通し、健康、パフォーマンス、シフト勤務者の主観的な経験にわたる二相性睡眠に関する証拠を徹底的に調べる必要がありました。彼女の完全な結果は今年後半に予想されます。
これまでのところ、モーエン氏は、このテーマに関する既存の研究が断片的であることを発見しました。一部の研究では、二相睡眠を 1 回の長い睡眠と短い昼寝として扱っています。他のものは 2 つの等しい期間のみをカウントします。合意された定義はありません。
睡眠不安
モーエン氏の研究の最終的な目的は、交替勤務者や睡眠パターンが乱れている人々を助ける可能性のある明確な臨床ガイドラインを開発することである。
「夜勤の後は長く眠れないので、彼らは非常に不安になります」とモーエン氏は言います。 「実は午後にしっかり昼寝をすると効果があると伝えられたらいいですね。」
いくつかの研究では、可能であれば交替勤務中に昼寝をすると、眠気が軽減され、注意力が向上することが示されています。医療従事者を対象とした研究によると、勤務中または勤務後に20～50分の仮眠をとるだけでも集中力が高まり、帰宅途中の居眠り運転が減ることがわかっています。
モーエン氏の研究がこれまでよりも厳密に答えようとする疑問は、それがどれくらい一般的か、どのような形態をとるか、そして睡眠を分割することで健康、パフォーマンス、疲労、安全性が向上するという証拠があるかどうかだ。
彼女の夫自身も交替勤務ですが、静かに正確に問題を説明します。 「彼はいつもとても早く起きて、ほんの3、4時間後に目覚めます」と彼女は言う。 「家には誰もおらず、暗いのに、それでも眠れないのです。一日のリズムが彼を引きずっています。」
彼の体は停電のブラインドによって覆されることはありません。モーエン氏、そして彼と同じような何百万人もの人々に与えたいのは、科学に裏付けられた、身体の信号と戦うのをやめ、代わりにそれに取り組む許可だ。
「多くの交替勤務者が日中の睡眠を避けられないことは分かっているので、彼らがより良い選択をできるようどのように支援できるかを考えることが重要だと思います。」とモーエン氏は言います。
トップ画像クレジット: Getty Images
InDepthのその他の作品
私たちが健康で過ごせる年数は減ってきています。NHS も問題の一部なのでしょうか?
- 7 日前に公開
男性不妊症はなぜまだ十分な注目を集めていないのか
- 6 月 26 日発行
BBC InDepth は、思い込みに疑問を投げかける新鮮な視点と、その日の最大の問題についての深いレポートを提供する、最高の分析を提供する Web サイトとアプリです。エマ・バーネットとジョン・シンプソンが、毎週土曜日に、最も示唆に富んだ深い読み物と分析を厳選して紹介します。ニュースレターへの登録はこちらから
連絡する
この話で提起された問題によってあなたは個人的に影響を受けていますか?`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cp9errxl97go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-19T00:01:55+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1b5c/live/1c3f9550-8064-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 10,
  },
  {
    id: "russians-turn-to-cash-putting-more-strai-487c9543",
    title: "Russians turn to cash, putting more strain on slowing wartime economy",
    titleJa: "ロシア人は現金に目を向け、戦時経済の減速にさらに負担をかける",
    summaryJa: "ロシア人は現金に目を向け、戦時経済の減速にさらに負担をかける- 公開されました",
    bodyOriginal: `Russians turn to cash, putting more strain on slowing wartime economy
- Published
Russians are returning to cash, as mobile internet shutdowns disrupt card payments, and more businesses seek to dodge tax under mounting financial pressure more than four years into the war with Ukraine.
Russia has added 1.56tn roubles (£14.8bn; $20bn) in cash into circulation since the start of the year - the biggest rise for the equivalent period in any year outside the Covid-19 pandemic, according to Central Bank figures analysed by the BBC.
The spike comes amid a wave of Ukrainian drone attacks, which have repeatedly led the Kremlin to shut down mobile internet across large swathes of the country, leaving many unable to pay by card. The government says the aim of the shutdowns is to counter the drone strikes.
"Having cash on hand gives you some sense of control and security," one woman in Moscow told the BBC on condition of anonymity. "If there's an emergency in the city, I know I'll still be able to buy basic necessities, even if the mobile network goes down."
The latest increase follows several earlier wartime surges in cash withdrawals as Russians have sought a buffer against uncertainty.
Cash in circulation jumped after President Vladimir Putin announced a partial mobilisation in September 2022 and during a brief mutiny by the Wagner mercenary group in June 2023.
Now, the shift is making it harder for the state to collect tax, just as it faces a widening budget deficit and needs every rouble it can raise to fund the war in Ukraine.
Although Russia's oil and gas sector, which accounts for about a quarter of state revenues, has benefited from a recent rise in oil prices following the Iran war, the broader economy is slowing.
In May, the Russian economy ministry cut its GDP growth forecast to 0.4% for 2026, putting the country on course for its weakest economic growth since 2022.
To boost revenues, the Kremlin hiked VAT from 20% to 22% in January, and lowered the threshold at which small and medium-sized businesses have to pay it, pushing many already struggling firms to the brink.
With margins squeezed by higher taxes and a slowing economy, pharmacies, restaurants, beauty salons and corner shops are increasingly steering customers towards cash to keep more income off the books.
"Stalls at our market have been closing one after another because it's no longer profitable to stay open," said one woman, who runs a small clothing shop at a market in the western city of Pskov.
"Most of those still trading ask customers to pay in cash whenever they can, so less money goes through the till."
Taras Skvortsov, chief financial officer of Russia's largest lender Sberbank, warned last month that there were "very serious signs" that more businesses were paying wages "in envelopes" under the table.
"This is a very worrying moment... We are not seeing cash return to the banking system through cash collection, ATMs or self-service terminals," said Skvortsov, in comments cited by state news agency Interfax. "It is staying in people's hands".
About 6% of entrepreneurs said they had turned to "grey schemes" to cope with the new tax burden, including avoiding cash-register receipts, according to a May survey by Russia's largest SME association, Opora Russia.
Cash payments help businesses understate turnover to stay below the VAT threshold, while cash wages help them avoid payroll taxes.
Cracking down on the shadow economy has become a key goal for the Kremlin. Before the VAT rise took effect, Putin warned the new rules must not push firms into the shadows and called for a "radical reduction in illegal employment".
"One arm of the government is trying to squeeze as much money as possible out of people through higher taxes, fines and other charges," Alexander Kolyandr, a non-resident senior fellow at the Center for European Policy Analysis, told the BBC.
"But another, in trying to counter so-called terrorist threats, is undermining that strategy by making it harder to collect tax," he said, referring to the mobile internet shutdowns.
The Soviet-era instinct to keep money "under the mattress" is making a comeback despite double-digit returns on bank deposits, which have been kept high as the central bank battles stubborn, war-fuelled inflation.
A 100,000-rouble (£950; $1,280) one-year fixed-term deposit at Sberbank, Russia's largest lender, currently pays 10% interest.
Even so, central bank data showed Russians withdrew 550bn roubles from bank accounts in May, including 200bn roubles from fixed-term deposits.
Anton, a copywriter living in Moscow, said a vendor at a vinyl shop offered him a discount for paying in cash. "He was upfront about the reason, higher taxes," he told the BBC.
When mobile internet shutdowns intensified during heightened security around Russia's Victory Day celebrations in May, he said he saw people struggling to withdraw money to spend at a flower market in central Moscow.
"There was a woman going from one ATM to another, looking for one that still had banknotes."`,
    bodyJa: `ロシア人は現金に目を向け、戦時経済の減速にさらに負担をかける
- 公開されました
モバイルインターネットの閉鎖でカード決済ができなくなり、ウクライナとの戦争開始から4年以上が経ち財政圧力が高まる中、税金を逃れようとする企業が増えているため、ロシア人は現金に戻りつつある。
BBCが分析した中央銀行の統計によると、ロシアは年初以降、1兆5600億ルーブル（148億ポンド、200億ドル）の現金流通を追加しており、新型コロナウイルス感染症パンデミック以外の同時期の同時期で最大の増加となった。
この急増は、ウクライナの無人機攻撃の波の最中に起きたもので、この攻撃によりクレムリンは国の広い範囲でモバイルインターネットを繰り返し遮断し、多くの人がカードで支払うことができなくなった。政府は閉鎖の目的はドローン攻撃に対抗することだとしている。
「手元に現金があると、ある程度のコントロールと安心感が得られる」とモスクワ在住の女性は匿名を条件にBBCに語った。 「市内で緊急事態が発生した場合、たとえ携帯電話ネットワークがダウンしても、基本的な必需品を買うことができるとわかっています。」
今回の増加は、ロシア国民が不確実性に対する緩衝材を求めていたため、戦時中に現金引き出しが数回急増したことを受けてのものである。
2022年9月にウラジーミル・プーチン大統領が部分動員を発表した後と、2023年6月のワーグナー傭兵集団による短期間の反乱の際、現金流通額が急増した。
現在、この変化により、国家は財政赤字の拡大に直面し、ウクライナ戦争資金として集められるあらゆるルーブルを必要としているため、税金を徴収することが困難になっている。
国家歳入の約4分の1を占めるロシアの石油・ガス部門は、イラン戦争後の最近の原油価格上昇の恩恵を受けているが、経済全体は減速している。
ロシア経済省は5月、2026年のGDP成長率予想を0.4％に引き下げ、ロシアは2022年以来最低の経済成長に向かうとの見通しを示した。
収入を増やすため、クレムリンは1月に付加価値税を20％から22％に引き上げ、中小企業が支払わなければならない付加価値税の基準値を引き下げ、すでに苦境に立たされている多くの企業を瀬戸際に追い込んだ。
増税と景気減速で利益率が圧迫されているため、薬局、レストラン、美容院、街角の商店は、帳簿からさらに多くの収入を確保するために、ますます顧客を現金に誘導する傾向にある。
西部の都市プスコフの市場で小さな衣料品店を営むある女性は、「私たちの市場の露店は次々と閉店している。営業し続けるのはもはや利益ではないからだ」と語った。
「今も取引を続けている業者のほとんどは、顧客に可能な限り現金で支払うよう求めており、そのためレジを通過するお金が減ります。」
ロシア最大の金融業者ズベルバンクの最高財務責任者、タラス・スクヴォルツォフ氏は先月、賃金をテーブルの下に「封筒に入れて」支払う企業が増えているという「非常に深刻な兆候」があると警告した。
国営通信社インタファクスが引用したコメントの中でスクヴォルツォフ氏は、「これは非常に憂慮すべき瞬間だ…現金回収やＡＴＭ、セルフサービス端末を通じて銀行システムに現金が戻ってくる様子は見られない」と述べた。 「人の手に残る」。
ロシア最大の中小企業団体オポラ・ロシアの5月の調査によると、起業家の約6％が、新たな税負担に対処するためにレジでの領収書の回避など「灰色の制度」に頼ったと回答した。
現金支払いは、企業が売上高を VAT 基準値以下に抑えるのに役立ち、現金給与は給与税を回避するのに役立ちます。
影の経済の取り締まりはクレムリンの重要な目標となっている。付加価値税の引き上げが発効する前に、プーチン大統領は、新規則が企業を影の中に追いやってはならないと警告し、「不法雇用の抜本的削減」を求めた。
欧州政策分析センターの非居住者上級研究員アレクサンダー・コリャンドル氏は、「政府の一部門は、増税や罰金、その他の課徴金を通じて国民からできるだけ多くの金を搾り取ろうとしている」とBBCに語った。
「しかし、いわゆるテロの脅威に対抗しようとするもう一つの脅威は、税金の徴収を困難にすることでその戦略を台無しにしている」と同氏はモバイルインターネットの遮断に言及しながら述べた。
中央銀行が頑固な戦争に煽られたインフレと闘う中、銀行預金の収益率が2桁に達しているにもかかわらず、高水準を維持しているにもかかわらず、お金を「マットレスの下」に保管しておこうというソ連時代の本能が復活しつつある。
ロシア最大の金融業者であるズベルバンクの10万ルーブル（950ポンド、1,280ドル）の1年定期預金には現在10％の利子が付いている。
それでも、中央銀行のデータによると、ロシア人は5月に定期預金の2000億ルーブルを含む5500億ルーブルを銀行口座から引き出した。
モスクワ在住のコピーライター、アントンさんによると、ビニールショップの売り子が現金で支払うと割引を申し出たという。 「彼は増税の理由について率直に語った」と同氏はBBCに語った。
5月のロシア戦勝記念日の祝賀行事に伴う警備強化でモバイルインターネットの遮断が激化した際、モスクワ中心部の花市場で人々がお金を引き出すのに苦労しているのを目撃したと同氏は語った。
「あるATMから別のATMへ行き、まだ紙幣が残っているATMを探している女性がいました。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cglj255jk8ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-18T23:59:26+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c416/live/685838d0-81b2-11f1-bc34-d11e2a8fe857.jpg",
    readTime: 6,
  },
  {
    id: "taylor-farms-recalls-iceberg-lettuce-in-bef3e5c6",
    title: "Taylor Farms recalls iceberg lettuce in 27 states due to cyclosporiasis outbreak",
    titleJa: "テイラー・ファームズ、シクロスポラ症発生のため27州でアイスバーグレタスをリコール",
    summaryJa: "テイラー・ファームズは、アイスバーグレタスがシクロスポリア症に汚染されている可能性があるとして、27の州で自主回収している。青果生産者は金曜夜遅くにこの動きを発表し、メディア声明で「メキシコ中部産のすべてのアイスバーグレタスを米国市場から自主的に撤去する」と述べた。",
    bodyOriginal: `Taylor Farms is voluntarily recalling iceberg lettuce in 27 states because the greens potentially could be contaminated with cyclosporiasis.
The fruit and vegetable producer announced the move late Friday evening, saying in a media statement that it is "voluntarily removing all iceberg lettuce sourced from central Mexico from the U.S. market."
The tainted lettuce has been at the center of a cyclosporiasis outbreak that the Centers for Disease Control and Prevention has traced to shredded iceberg lettuce served at Taco Bell locations in 5 states, including Indiana, Kentucky, and Michigan.
The Food and Drug Administration has said that people who are infected by the cyclospora parasite may experience flu-like symptoms and "watery diarrhea, with frequent bowel movements."
Taylor Farms said that the potentially tainted "shredded iceberg product" was distributed June 29 through July 16 in states including Alabama, Connecticut, Georgia, Massachusetts and Texas.
California and New York were among the states not included in the recall notice.
"Based on information provided yesterday by the FDA, Taylor Farms de Mexico is voluntarily removing all iceberg lettuce sourced from central Mexico from the U.S. market," the company said in a statement. "While the FDA traceback is indicating a specific independent farm that represents less than 1% of the U.S.'s iceberg lettuce supply as the potential source of the outbreak, we have removed all iceberg lettuce from the region indefinitely."
Before Taylor Farms issued the recall, Yum Brands' Taco Bell said it had removed the potentially contaminated lettuce from its restaurants.
Walmart on Saturday posted a message on its website about the FDA's latest announcement on the Taylor Farms recall, noting that the greens may have been sold at its stores in states including Alabama, Indiana, and West Virginia.
"The health and safety of our customers is a top priority," a Walmart spokesperson told CNBC in an emailed statement. "Although there is no indication that products sold in our stores are affected by the current Cyclospora investigations, we have removed four bagged iceberg lettuce salad products from select locations as a precaution after receiving notice from our supplier."
The spokesperson added: "There have been no confirmed illnesses associated with these products at this time," and that the company is "working closely with our supplier and took immediate steps to remove the products from sale."`,
    bodyJa: `テイラー・ファームズは、アイスバーグレタスがシクロスポリア症に汚染されている可能性があるとして、27の州で自主回収している。
青果生産者は金曜夜遅くにこの動きを発表し、メディア声明で「メキシコ中部産のすべてのアイスバーグレタスを米国市場から自主的に撤去する」と述べた。
汚染されたレタスはシクロスポラ症の発生の中心となっており、疾病管理予防センターは、インディアナ州、ケンタッキー州、ミシガン州を含む5つの州にあるタコベルの店舗で提供されていた細切りアイスバーグレタスが原因であることを突き止めた。
食品医薬品局は、シクロスポラ原虫に感染した人はインフルエンザのような症状や「頻繁な排便を伴う水様性の下痢」を経験する可能性があると発表した。
テイラー・ファームズは、汚染された可能性のある「氷山を細断した製品」が6月29日から7月16日にかけて、アラバマ州、コネチカット州、ジョージア州、マサチューセッツ州、テキサス州などの州で配布されたと発表した。
カリフォルニア州とニューヨーク州はリコール通知に含まれていない州の一つだった。
同社は声明で「昨日ＦＤＡから提供された情報に基づき、テイラー・ファームズ・デ・メキシコはメキシコ中部産のすべてのアイスバーグレタスを米国市場から自主的に撤去する」と述べた。 「FDAの追跡調査では、米国のアイスバーグレタス供給量の1％未満に相当する特定の独立農場が発生源の可能性があることが示されているが、我々はこの地域からすべてのアイスバーグレタスを無期限に撤去した。」
テイラー・ファームズがリコールを発表する前に、ヤム・ブランズのタコベルは汚染された可能性のあるレタスをレストランから撤去したと発表した。
ウォルマートは土曜日、テイラー・ファームのリコールに関するFDAの最新発表についてウェブサイトにメッセージを掲載し、アラバマ州、インディアナ州、ウェストバージニア州などの州の店舗で野菜が販売されていた可能性があると指摘した。
ウォルマートの広報担当者は電子メールでの声明でＣＮＢＣに対し、「顧客の健康と安全が最優先だ」と語った。 「当社の店舗で販売されている製品が現在のシクロスポラ調査の影響を受けているという兆候はありませんが、サプライヤーからの通知を受けて、予防措置として、袋詰めのアイスバーグレタスサラダ製品4点を一部の店舗から撤去しました。」
広報担当者は、「現時点でこれらの製品に関連する病気は確認されていない」とし、同社は「サプライヤーと緊密に連携し、製品の販売を中止するために直ちに措置を講じている」と付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/18/taylor-farms-recalls-iceberg-lettuce-in-27-states-due-to-cyclosporiasis-outbreak.html",
    publishedAt: "2026-07-18T22:04:02+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "hungary-s-president-agrees-to-stand-down-9a73446a",
    title: "Hungary's president agrees to stand down after parliament backs removal",
    titleJa: "ハンガリー大統領、議会が解任を支持後辞任に同意",
    summaryJa: "ハンガリー大統領、議会が解任を支持後辞任に同意- 公開されました",
    bodyOriginal: `Hungary's president agrees to stand down after parliament backs removal
- Published
Hungarian President Tamás Sulyok has agreed to step down, signing an amendment to the country's constitution which will end his presidency at midnight on Sunday.
Prime Minister Péter Magyar's Tisza party had steamrolled the law change through parliament to oust Sulyok - widely seen as a loyalist of former prime minister Viktor Orbán who lost power in April after 16 years.
Sulyok had five days to sign the amendment or risk a protracted constitutional crisis and impeachment proceedings.
He confirmed he would agree to the law change as the deadline passed on Saturday evening, but in a statement accused Magyar's government of violating the rule of law.
He said the amendment marked a "breaking point in Hungarian constitutional democracy" and said the "core values of a free society... have been trampled underfoot for the sake of political power".
It marks the latest and most dramatic move by the Tisza government, which saw Sulyok as a puppet of the former government and had pushed for his resignation.
It has swept through major constitutional changes since winning a landslide victory in April.
The 17th amendment, passed with an overwhelming majority on Monday, ends the president's term citing "serious loss of confidence" in him.
It also removes the head of the Constitutional Court and forbids MPs who have served three terms from standing again - which applies to more than half the current deputies from Orbán's Fidesz party.
Orbán had described the amendment as an act of tyranny and called for protests.
Since the April election, Fidesz has been in free fall, reeling from the shock defeat. Orbán himself has hardly been seen in public, and refused to take his seat in parliament.
In office from 2010 until 2026, Fidesz reshaped the Hungarian state to its own will, and filled supposedly independent state positions with party loyalists using its own two-thirds majority.
The 141 Tisza deputies in parliament gave a standing ovation as the results of the vote passing the amendment were announced on Monday.
After the vote, András Baka, former head of Hungary's Supreme Court, told the BBC: "I quite agree with the removal of the president."
Hungary was governed by the rule of law from 1989 to 2010, he argued, after which Fidesz captured state institutions and created an authoritarian state.
"And it is now very difficult to break up a sophisticated authoritarian regime... which was designed to survive even after electoral defeat," Baka said.
Related topics
- Published9 May`,
    bodyJa: `ハンガリー大統領、議会が解任を支持後辞任に同意
- 公開されました
ハンガリーのタマス・スリョク大統領は、日曜深夜に大統領職を終了する憲法改正案に署名し、辞任することに同意した。
ペテル・マジャル首相率いるティサ党は、4月に16年間政権を失ったヴィクトル・オルバン元首相の支持者と広くみなされているスリョク氏を追放するため、議会を通過する法改正を急ピッチで進めていた。
スリョク氏には修正案に署名するまでに5日の猶予が与えられ、さもなければ憲法上の危機と弾劾手続きが長引くリスクを冒すことになる。
同氏は土曜夜に期限が過ぎたため法改正に同意することを確認したが、声明ではマジャル政府が法の支配に違反していると非難した。
同氏は、この修正案は「ハンガリー立憲民主主義の限界点」を示していると述べ、「自由社会の中核的価値観が…政治権力のために踏みにじられている」と述べた。
これは、スリョク氏を前政権の傀儡とみなし、辞任を迫っていたティサ政権による最新かつ最も劇的な動きを示すものである。
4月に地滑り的勝利を収めて以来、大規模な憲法改正を押し進めてきた。
月曜日に圧倒的多数で可決された修正第17条は、大統領に対する「深刻な信頼の喪失」を理由に大統領の任期を終了する。
また、憲法裁判所長官を解任し、３期務めた議員の再議員を禁じるが、これはオルバン氏率いるフィデス党の現議員の半数以上に適用される。
オルバン首相はこの修正案を圧制行為だと述べ、抗議を呼びかけた。
4月の選挙以来、フィデス氏は衝撃的な敗北に動揺し、低迷を続けている。オルバン氏自身は公の場にほとんど姿を現しておらず、議会に議席に就くことも拒否した。
2010年から2026年まで在任したフィデスは、ハンガリー国家を自らの意志に沿って再構築し、独立したとされる国家の地位を自らの3分の2の多数を利用して党支持者で埋めた。
修正案可決の投票結果が月曜日に発表されると、ティサ国会議員141人はスタンディングオベーションを送った。
投票後、ハンガリー最高裁判所のアンドラーシュ・バカ元長官はBBCに対し、「大統領の解任には全く同意する」と語った。
同氏は、ハンガリーは1989年から2010年まで法の支配によって統治され、その後フィデスが国家機関を掌握し、独裁国家を創設したと主張した。
「そして、洗練された権威主義体制を崩壊させることは今では非常に困難だ…選挙で敗北した後でも存続するように設計されたものだ」とバカ氏は語った。
関連トピック
- 5 月 9 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cpd7q7eev7po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-18T19:34:16+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3323/live/67c3a600-82db-11f1-9a15-3bb955e2f294.jpg",
    readTime: 3,
  },
  {
    id: "respect-is-important-if-my-financial-ad-6a27771b",
    title: "‘Respect is important’: If my financial adviser said, ‘Hey,’ my wife and I would walk out. Where do you draw the line?",
    titleJa: "「敬意は大切です」: ファイナンシャルアドバイザーが「ねえ」と言ったら、妻と私は立ち去ります。どこで線引きしますか？",
    summaryJa: "「私が会った財務担当者は、AT&T が American Telephone and Telegraph の短縮形であることを知りませんでした。」",
    bodyOriginal: `“I met with a financial representative who was not aware that AT&amp;T was the shortened form of American Telephone and Telegraph.”`,
    bodyJa: `「私が会った財務担当者は、AT&T が American Telephone and Telegraph の短縮形であることを知りませんでした。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/respect-is-important-if-my-financial-adviser-said-hey-my-wife-and-i-would-walk-out-where-do-you-draw-the-line-5fbf5879?mod=mw_rss_topstories",
    publishedAt: "2026-07-18T19:16:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-60496419",
    readTime: 2,
  },
  {
    id: "netflix-is-spending-big-money-on-sports-8066bea3",
    title: "Netflix is spending big money on sports. Is the company making the right bets?",
    titleJa: "Netflixはスポーツに多額の資金を投じている。会社は正しい賭けをしていますか?",
    summaryJa: "ストリーミングサービスは、ライブ番組が新規加入者の獲得に役立つとしているが、投資家はNetflixの広範なエンゲージメント傾向に幻滅しているという。",
    bodyOriginal: `The streaming service says live programming helps draw in new subscribers, but investors have become disillusioned with Netflix’s broader engagement trends.`,
    bodyJa: `ストリーミングサービスは、ライブ番組が新規加入者の獲得に役立つとしているが、投資家はNetflixの広範なエンゲージメント傾向に幻滅しているという。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/netflix-is-paying-up-for-costly-sports-rights-is-the-company-making-the-right-bets-9ce54df7?mod=mw_rss_topstories",
    publishedAt: "2026-07-18T18:54:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-82988028",
    readTime: 2,
  },
  {
    id: "your-netflix-bill-is-up-29-in-just-over-7bc80c3c",
    title: "Your Netflix bill is up 29% in just over a year. It’s time for Washington to step in.",
    titleJa: "Netflix の請求額は 1 年余りで 29% 増加しました。ワシントンが介入する時が来た。",
    summaryJa: "Netflix は依然としてウォール街の人気者であり、政府規制当局の標的となっている",
    bodyOriginal: `Netflix is still a Wall Street favorite — and a target for government regulators`,
    bodyJa: `Netflix は依然としてウォール街の人気者であり、政府規制当局の標的となっている`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/your-monthly-netflix-bill-is-up-29-in-just-over-a-year-critics-say-washington-needs-to-fix-it-bcab6e5b?mod=mw_rss_topstories",
    publishedAt: "2026-07-18T18:49:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-95726777",
    readTime: 2,
  },
  {
    id: "i-m-67-own-two-homes-outright-worth-2-8-a228fdc4",
    title: "I’m 67, own two homes outright worth $2.8 million, but I have $19,000 in credit-card debt. Should I get a HELOC?",
    titleJa: "私は 67 歳で、総額 280 万ドル相当の家を 2 軒所有していますが、クレジット カードの借金が 19,000 ドルあります。 HELOC を取得する必要がありますか?",
    summaryJa: "「私の息子は最近リンパ腫と診断されました。これはアフガニスタンでの兵役中の火傷被ばくに関連している可能性があります。」",
    bodyOriginal: `“My son was recently diagnosed with lymphoma, which may be related to burn-pit exposure during his military service in Afghanistan.”`,
    bodyJa: `「私の息子は最近リンパ腫と診断されました。これはアフガニスタンでの兵役中の火傷被ばくに関連している可能性があります。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/im-67-own-two-mortgage-free-homes-worth-2-8-million-but-i-have-19-000-in-credit-card-debt-should-i-get-a-heloc-7b6c5192?mod=mw_rss_topstories",
    publishedAt: "2026-07-18T18:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-45376891",
    readTime: 2,
  },
  {
    id: "two-unexpected-revelations-in-warren-buf-2ab3879e",
    title: "Two unexpected revelations in Warren Buffett's CNBC interview",
    titleJa: "ウォーレン・バフェット氏のCNBCインタビューでの2つの予期せぬ暴露",
    summaryJa: "(これはウォーレン・バフェット・ウォッチのニュースレター、ウォーレン・バフェットとバークシャー・ハサウェイに関するニュースと分析です。ここからサインアップすると、毎週金曜日の夜に受信箱で受け取ることができます。)バフェット氏のCNBCインタビューで判明した2つの予期せぬ事実",
    bodyOriginal: `(This is the Warren Buffett Watch newsletter, news and analysis on all things Warren Buffett and Berkshire Hathaway. You can sign up here to receive it every Friday evening in your inbox.)
Two unexpected revelations in Buffett's CNBC interview
In a nearly one-hour interview with CNBC's Becky Quick on the day he publicly revealed he is cutting off the Gates Foundation from future donations, Warren Buffett downplayed the role Bill Gates' association with Jeffrey Epstein played in that decision.
He also revealed he initiated Berkshire Hathaway's now $30 billion position in Google-parent Alphabet, which many had thought was Greg Abel's first major investment decision as CEO.
Buffett: Gates-Epstein ties 'distasteful' but everyone makes mistakes
While Warren Buffett found Bill Gates' ties to notorious sex-trafficker Jeffrey Epstein "distasteful," he says his decision to end future contributions to the Microsoft co-founder's foundation was driven by his three children demonstrating they are now able to responsibly give away "vast sums of money."
Over the same 20 years he gave the Gates Foundation nearly $48 billion in Berkshire shares, as valued at the time of the donations, he also donated almost $18 billion to Susie Buffett's Sherwood Foundation, the Howard G. Buffett Foundation, Peter Buffett's NoVo Foundation, and the Susan Thompson Buffett Foundation, named for his late first wife.
He told Becky, "I'm impressed by the fact that my kids really want to give the money away" efficiently, without constructing huge buildings or holding conferences "at esoteric places and all kinds of things."
Buffett said he didn't have that same confidence in his children in 2006 when he started his donations to the Gates Foundation.
In a March interview with CNBC, Becky asked if he would continue his "lifetime" commitment to make annual donation to the Gates Foundation in light of revelations in the Jeffrey Epstein files about his connections to Gates.
At that time, he replied, "I'll wait and see what unfolds ... I don't have to make that decision today. And I haven't made it today."
"I've learned things I didn't know about something for all these years."
Now Buffett says he's read a "great deal" about the matter, including Gates' congressional testimony last month, and presumably, the February Wall Street Journal report that in a meeting with foundation staff members, Gates "acknowledged that he had two affairs with Russian women that Epstein later discovered, but that they didn't involve Epstein's victims."
Buffett's assessment: "While it's distasteful, while he made mistakes, I made mistakes in hiring all kinds of people or choosing friends and then finding out later that they — that one way or another, they weren't what I thought they were. And so, I found nothing in there that that was beyond what I could see — I could picture myself doing."
In March, Buffett said he had not talked with Gates "at all since the whole thing" with the Epstein files "was unveiled."
That's no longer the case. Buffett told Becky that Gates came to Omaha within the last several weeks "and we spent three hours talking together" and "he intends to call me" to maintain contact.
Buffett said that "at some point" he told Gates he is ending his annual donations before announcing the move this week and Gates is "OK" with the decision. "It's been a wonderful friendship."
In a statement emailed to CNBC by a representative, Bill Gates said, "Warren is one of the greatest philanthropists of all time, and a dear friend. His wisdom, generosity, and deep sense of purpose have defined both his life and his philanthropy."
Gates credits Buffett's "unprecedented support" with helping to save millions of lives. "My gratitude to Warren is immeasurable, and I cherish the time we spend together. I hope we have much more of it ahead."
Why Buffett is picking up the pace of his stock donations
At the same time, Buffett is shifting where his philanthropic donations will be directed, he is also speeding up the pace of those gifts.
In his previous philanthropic plans, for both the Gates Foundation and the four family foundations, the number of shares donated each year decreased, although the value of the gifts usually was higher than the year before as the price of Berkshire's stock increased.
Starting now, he is going to give away more shares each year so he can "dispose of all of my Berkshire shares within about eight years," in part because his children, who will be deciding what to do with the money, are "unfortunately growing older."
Buffett does acknowledge his children have a tough job ahead of them:
He also said having Greg Abel at the helm of Berkshire makes him feel comfortable about giving up his, and the family's, control of the company sooner rather than later and explained why the foundation named after his first wife will be getting more shares than the foundations run by his three children:
Berkshire Hathaway shares initially fell on Tuesday's news that Buffett will be accelerating his sales but then recovered to end the week slightly lower.
Buffett 'initiated' big Alphabet investment, with Abel's approval
The biggest surprise in Tuesday's interview was Buffett's revelation he is responsible for Berkshire's big investment in Alphabet, Google's parent.
After purchasing roughly $4.3 billion of shares in last year's third quarter and adding $11.5 billion in this year's first quarter, Berkshire invested another $10 billion in Alphabet by purchasing shares directly from the company as part of its larger plan to fund its AI ambitions.
Given Buffett's long-standing practice of almost always avoiding tech stocks, many observers, including me, thought making Alphabet one of Berkshire biggest stock holdings was the result of new CEO Greg Abel flexing his investing muscles.
Wrong, said Buffett: "I initiated it."
He did go on to say, "I am not doing anything that [Abel] doesn't approve of. He's not doing anything I don't approve of. We talk all the time... but he is the decider."
Even though Alphabet is "putting out huge amounts of money" on AI infrastructure and he doesn't "like [the stock] as well as at least four or five other businesses that we own," Buffett said, "I think they're more likely to be a winner, based on their record, than — than probably 90 percent or — or 95 percent of what gets merchandised through Wall Street, because Wall Street is just interested in whether they can sell something."
Buffett again acknowledged in Tuesday's interview he made a "mistake" by not adding Alphabet to Berkshire's portfolio earlier.
In a 2017 CNBC interview, Buffett admitted he should have known about Google's profit potential because Berkshire's GEICO had been buying a lot of advertising from the company.
Buffett remains bullish on Apple
Buffett is disappointed Tim Cook will be stepping down as the CEO of Apple, Berkshire's largest equity holding at $76 billion, but he's still happy with the stock.
Warsh will 'do the best he can' as new Fed chairman
Buffett thinks Kevin Warsh is a "good choice" to be the new Federal Reserve chairman, although he "can't be perfect at it, just like I know I couldn't be perfect at taking people's money and earning super returns on it."
Still, "I think he will do the best he can at achieving the job he was assigned to do, which is 2% inflation and maintaining maximum employment."
Buffett again sounds alarm on 'gambling' in financial markets
Buffett is still worried there is too much "gambling" in financial markets.
"It's tough to find values when everybody is preferring gambling," he said.
"Since humans love to gamble so much, there's more money in — in actually cultivating gamblers than there are cultivating investors."
'I broke a leg'
As the interview was ending, Becky asked Buffett how he was feeling that day.
"I broke a leg ... a few weeks ago," he replied, without elaborating on exactly what happened.
It is his first broken leg "in my life until now" so "I've been very lucky on that sort of thing."
Berkshire buybacks are really back
It appears Berkshire's relatively small, and publicly previewed, $234 million of share repurchases in the first quarter was not a one and done resumption after a two-year hiatus.
Barron's estimates Berkshire bought between $5 billion to $11 billion of its shares in the second quarter.
That's based on a rough calculation derived from Buffett's SEC filing this week on his foundation gifts that disclosed his 188,920 Class A shares, after the contributions, is 13.2% of all of Berkshire's outstanding shares.
Barron's says the estimated buyback range is fairly large because it doesn't know yet exactly when the buybacks were made and because Buffett's ownership percentage is presented with just one decimal point.
We'll get the exact number when Berkshire releases its Q2 earnings early next month.
The complete 1-hour interview
1. 00:00 - Buffett on his decision to stop donations to Gates Foundation
BECKY QUICK: Warren, first of all, thank you for sitting down and talking with us today. I appreciate it.
WARREN BUFFETT: It's always good to sit down. (Laughs)
BECKY QUICK: Yes, I find the same thing.
The last time we sat down and spoke with you, or I guess it was two times ago in March when we sat down with you to talk about what you were doing with your charitable giving, you said that you were going to be watching and waiting, that you were kind of waiting to see what came out about Bill Gates and the Epstein files and what had happened.
You said you hadn't determined what you were going to do.
Today you put out a release saying that you will be increasing the amount of money that you give to the Susan Thomas Buffett Foundation, your three children's foundations, but there will be nothing given right now to the Gates Foundation. Is that your decision?
WARREN BUFFETT: That's correct. That's correct.
But — but in interpreting that, I would point out that I've read a great deal since January 1 in terms of what happened with Bill and Epstein, and I've read his remarks to Congress given under oath, and I've read cross examination, and while it's distasteful, while he made mistakes, I made mistakes in hiring all kinds of people or choosing friends, and then finding out later that they — that one way or another, they weren't what I thought they were.
And so I found nothing in there that that was beyond what I could see — I could picture myself doing.
And, you know, he ended it. And I've had situations where I made mistakes about people or people may have felt they made mistakes about me.
But they — you know — life goes on and — and no one — no one bats 1.000 in the business of choosing people,
BECKY QUICK: You're talking about hiring decisions, maybe who you're associating yourself with, and there were certainly some questionable decisions on that that came up in the release of these files, but there was also other, you know, personal information.
WARREN BUFFETT: Yeah. No. He — which he admitted to.
BECKY QUICK: Yeah.
WARREN BUFFETT: Yeah. No. And there again, I would say that, you know, I would — I've known some pretty wonderful people, and I still know some wonderful people.
I don't think they've made every decision correctly.
BECKY QUICK: So why, if that's your opinion on it, why are you no longer giving money to the Gates Foundation?
WARREN BUFFETT: Well, I reevaluated my whole situation.
It's just like I've been doing since I was in my 20s, and we'd gotten married, Susie and I, and we didn't really have any money, but we did know that we intended to live fine, and we intended to have a family, and — but we did not have aspirations of, you know, having six houses or a 500-foot yacht or anything of the sort.
So even then, we talked about what we would do philanthropically. But my idea, and conviction, was that I would compound money at a better rate than society generally, and that Susie would give it away better than 99.9 percent of the people that were giving it away, and she would get involved personally with the gifts, whereas I like to do things wholesale, and she liked to do things retail.
So we had a plan, but we didn't have any money. And over time the money started to pile up, and she would say, "Are we rich yet?" And I would say, "No, but we're getting closer."
But I was not in a hurry to do anything. We did some small things as we went along. I did it.
I felt the most important threat to mankind was — was the — was the nuclear bomb. And so I had sort of grandiose plans in my mind about how I could change the probabilities of that happening, and I finally came to the conclusion, after decades, that I could not have a 100th, or 1,000th, of 1 percent chance of succeeding in that.
And, you know, it's nice to bet on long shots, but betting on things that are essentially —
BECKY QUICK: So you've changed your plans?
WARREN BUFFETT: So I changed plans.
BECKY QUICK: Why did you change your plans?
WARREN BUFFETT: Well, we changed plans because of what I've set out here. The money began — the money began to pile up —
BECKY QUICK: No, but you changed your — you changed your plan now. In 2024, you said it was a lifetime pledge to the Gates Foundation.
Now in 2026, you are saying that's not the case. What happened?
WARREN BUFFETT: Well, what happened was that I gave the Gates Foundation a great deal of money —
BECKY QUICK: Maybe 47 billion dollars in total?
WARREN BUFFETT: Yeah. And I had no — and I thought that was a good decision. I think it was a decent decision.
But I did not think my kids were in any way ready to give away vast sums of money.
We'd started — Susie and I started with them — I think we gave them — we may have given them a hundred thousand dollars each.
BECKY QUICK: This goes back 30 years at this point, or longer?
WARREN BUFFETT: That's about right. Yeah.
But they were growing children. You know, they had children, you know, they had children of their own by that time.
But still — they —they — I don't think they were ready for it. And I certainly wanted to treat them all equally. So that's always a problem — is — if they have unequal talents of something.
Now, I can't turn them all into musicians, and I can't turn them all into baseball players or anything.
But I really hoped in the charitable field that they would have common goals and be able to work out among themselves a way where, with vast amounts of money, that everybody felt there was plenty to do what they wanted to do. And I have the —
BECKY QUICK: And you think that's the case today?
WARREN BUFFETT: Pardon me?
BECKY QUICK: You think that's the case today?
WARREN BUFFETT: I feel the probabilities of that are extraordinarily high.
And — now — is — could something happen to this plan? Of course. I mean, I've got three children that are 72 and 71, and look at my age.
I mean, things can happen in this world that cause you to change — to change.
But I have no expectation of changing. I mean, as far as I'm as concerned, we've reached the ideal point.
We — we kicked. Well, Susie died in 2004, so it's been more me kicking up the amount they receive annually. And clearly, they feel happy with the job, too.
I mean, there's no sense sticking people in a job that they — they aren't fit for, or that — where they differ totally from you and your views.
I mean that — that — I had different views in life than my dad, who I admired more than anybody in the world, but it still didn't mean that I joined his church or, you know, did — did anything identically. And — and he encouraged that view.
He would — he would quote to me Emerson, which — where Emerson said something to the effect that the force in you is new in nature. You know, he's saying, you know, you're one of a kind. Find out what that one is.
And I think I found it very young by luck, circumstance, and pretty purposeful pursuit myself.
My kids did not. They behaved like — like most kids. They — they flirted with a lot of different ideas. And — but I feel 100 percent now about what I have seen them do.
My son Howard just published a 100 page or so report explaining what he's doing, why he's doing, what it's costing.
BECKY QUICK: An annual report for the Howard Buffett Foundation?
WARREN BUFFETT: Yeah. And it's better than I could write.
He's — he — he has a sense of stewardship, and — and he also has enormous empathy for people he sees that don't have it as lucky as he has.
BECKY QUICK: So then is it fair to say 20 years ago in 2006, when you made this decision, you trusted the Gates Foundation more than your children, and now you trust your children more than the Gates Foundation?
WARREN BUFFETT: No, the amounts were different. It isn't to say that I trusted them differently, but I felt they were capable of handling —
And I was certainly not going to turn something over to my kids and then pull it back from them. I mean, and —
And the Gates Foundation has turned out to earn far more money than they expected to do. They spend more money than anybody in the world that I can think of.
BECKY QUICK: Yeah. They have an endowment of — north of 90 billion dollars, I think it is.
WARREN BUFFETT: It's around that figure, and Bill has very substantial resources outside, which he intends to give, and I believe — a hundred percent — I believe that they will go there.
And I, you know — I've really done the same thing as Bill, in a certain sense. I'm — except I'm — when I put it in, I tell the three children that that it is theirs and it's their responsibility to get it done well.
And — and you may find this hard to believe, but it's true. I've never looked at their Form 990s, which they file. I — I'm not judging each action as it takes place, because you take actions where you think there's only a 10 percent or 20 percent probability of success. It's not like investments.
BECKY QUICK: But what are your goals for the money? And you kind of intimated that the kids have similar goals as to what you have.
WARREN BUFFETT: There's — there are all kinds of ways in which the world is as unequal as you can possibly imagine. I mean, just imagine in health, or the luck of birth, or all of those sort of things. And the ultimate goal is to make life better for the people who get short straws.
And there's a lot more people who get short straws than we'll ever be able to take care of, and — and my kids will have more insight into certain areas than I would. And I have more insight than — than they do just because of different interests and exposure.
But the one thing I'm convinced of is that they will be attempting to do something, and they'll be better at it. And the probability is that they've got more years to live than I do.
So, I mean, it really sneaks up on you when you get to be in the 70s or something like that.
But I wouldn't — I can't think of a person in the world that — 30 or under, for example — I would trust to do it.
I think there's all kinds of brilliant people that are 30 or under, and they may turn out to be leaders of society and — and terribly important writers, or whatever it may be. But I do think there's something to seeing how people behave under different circumstances.
BECKY QUICK: The kids are going to come under pressure, and probably already have, from a long list of people who think that they should fund their ideas.
I saw something today on X that Brad Gerstner put out suggesting that you give the money to Trump accounts, that there are other great things to do.
What do you say to the lots and lots of people who will say this is where you should put that money, or what do you think they should say?
WARREN BUFFETT: If you take 8 billion people in the world and feel that everybody should have an equal chance, I mean, you could — you could spend a thousand dollars or 10 thousand dollars, and you know, to solve everybody's problems. You're never going to solve everybody's problems.
The idea of serving — solving a societal problem, which is what I started out as, with — with a nuclear weapon — I mean, everybody who worked on the nuclear weapon regretted the fact that they had to put together something like that. The most brilliant people in the world, but they never figured out how to put the [genie] back in the bottle.
And, you know, that — that is not something that society in the first couple hundred million years of existence there — couple million —
BECKY QUICK: Do any of those plans, though, like the Trump accounts, appeal to you? Do you think they appeal to the kids? Do you — or do you just leave it to the kids and say, you figure it out?
WARREN BUFFETT: I leave it to the kids. But I do have this provision in my will, not in these gifts that I'm giving now, but in the — the bulk of my fortune is likely to be left upon my death, even though I'm stepping up the —
BECKY QUICK: Yeah. I will say right now it's 140 billion dollars that you have left, based on yesterday's closing stock price, in terms of the Class A shares you have left.
If — the money you gave out this year is 6 billion dollars.
WARREN BUFFETT: Yeah. It'll have to go up.
BECKY QUICK: Right, it's 17 and a half billion dollars, at least, annually, and that's assuming that Berkshire doesn't go from here —
WARREN BUFFETT: Yeah —
BECKY QUICK: — if you want this to be given out in eight years, as you've said.
WARREN BUFFETT: — which is a terrible assumption, incidentally. I mean, that is not a realistic assumption.
BECKY QUICK: To give 17 and a half billion dollars away, annually?
WARREN BUFFETT: No. That — that an investment produces nothing.
BECKY QUICK: Oh, correct. So —
WARREN BUFFETT: I get about 5% Treasury bills, you know.
BECKY QUICK: Right. How much did you have when you started making these donations in 2006? We were talking about less than a hundred billion dollars at that point, right?
WARREN BUFFETT: Yeah. Yeah.
BECKY QUICK: So you've given away 67 billion dollars, and now you have 140 billion dollars left to give as of today.
WARREN BUFFETT: Which is the nature of compound interest.
BECKY QUICK: Right.
WARREN BUFFETT: That's one thing I understand. (Laughs)
I may not understand all these other things, but —and —
BECKY QUICK: But 17 and a half billion dollars, even if it weren't to go up, is more money than anybody is giving away right now. And the Gates Foundation gave away, what, 8 billion dollars last year?
WARREN BUFFETT: Yeah, that's — that's about right. And —
BECKY QUICK: That's a lot.
WARREN BUFFETT: And they did it — they did it employing, you know, a few thousand people, which almost any foundation would, that had that kind of money.
And — and I — I'm impressed by the fact that my kids really want to give the money away rather than do other things with it as they go along. So they —
BECKY QUICK: You mean rather than spend it on themselves?
WARREN BUFFETT: Yeah, or buildings or anything of the sort.
Now, when they're — they'll need more help as they go along. But I — I think — I think the foundations employ something between — there's three of them now —
BECKY QUICK: Four of them, with the STB (Susan Thompson Buffett) Foundation.
WARREN BUFFETT: Well, with STB.
Well, let's take the kids first, because there they make the total decision as to what they're doing. And they have between 11 and 25 employees, and —
BECKY QUICK: Total? Between the three foundations?
WARREN BUFFETT: No, each.
BECKY QUICK: Each. OK.
WARREN BUFFETT: Yeah. And — and they have expense ratios far below that of institutions that are much better known and —
BECKY QUICK: Expense ratios closer to one percent or less?
WARREN BUFFETT: What they've shown — they've shown — they've shown that they're not regarding it as play money.
BECKY QUICK: Right. Right. Meaning that the bulk — almost everything they get goes back out the door.
WARREN BUFFETT: Well, it really all goes out the door eventually, but —
BECKY QUICK: Yeah.
WARREN BUFFETT: But yeah — yeah. They — they're not going to build, you know, huge office buildings or hold conferences at esoteric places and all kinds of things.
You know, there's nothing wrong with doing that. I mean —
But the important thing is whether people that have, you know, a hundred times what they need and don't pass it along to somebody else for the next generation. And — and many parts of the world have been doing that for thousands of years.
BECKY QUICK: Yeah, you're not a big fan of bureaucracy. Berkshire Hathaway was run here, in this office, with 25 people or something in the home office.
WARREN BUFFETT: Twenty-five people. And we probably went up — we probably grew in size 10-for-one before we added the last two or three.
BECKY QUICK: Uh huh.
Before we move on, does — does Bill Gates know about this? When we spoke with you in March, you said you had not spoken with him since any of these allegations started coming out.
He said the same thing last month in — in June when he sat down with this congressional testimony, that he had not spoken with you since January.
Have you spoken with him since? And does this come as a surprise to him?
WARREN BUFFETT: No — no, it does not come as a surprise.
And — and B), he came by Omaha, I don't know, three weeks ago — or — I kind of lose track on time — but certainly not three months — but three — since we talked. And we spent three hours talking together, and — and — and he's — he — he intends to call me. He's the one that initiates calls, just generally.
And — and as you can see, I'm available anytime. (Laughs)
But — he's — he's much more organized than I am, and — but he already proposed another one, and —
BECKY QUICK: Another meeting?
WARREN BUFFETT: Yeah. And — and — he is — we have had an enormous number of good times together since we met — whenever it was — what was it, 1991?
And he's always done more than his share of it — always more than his share. You don't see me doing the planning or doing —
BECKY QUICK: In the friendship, you mean?
WARREN BUFFETT: Yeah. It's — it's — it's been a wonderful friendship.
And — and Bill and I are interested in enough things that overlap that we find plenty to talk about, and then each of us has got his own specialty to some extent.
BECKY QUICK: But you told him three — three weeks ago or so when you met him that you would not be making any more donations to the Gates Foundation?
WARREN BUFFETT: Yeah, I may have even — may have been even — I can't tell you exactly when I told him.
But — but at some point, I had read the — I had read what Congress came up with. I'd read everything.
And — and all I can say is, you know, I've — I don't know whether I've done dumper things, but I've done things that — I've just done many dumb things in life.
I mean, that is — all I have to do is look at our portfolio. I mean, four out of five of our — at least four out of five of — of the decisions I've made have not been anything out of the ordinary. But —
BECKY QUICK: But he was OK when you told him —
WARREN BUFFETT: Yeah.
BECKY QUICK: — that this was — OK.
WARREN BUFFETT: Yeah.
BECKY QUICK: So he's on board. None of this is news to him.
WARREN BUFFETT: Yeah.
Bill, unlike me, more or less, I think wants it to end when — when he dies. Then of course he doesn't know when he's —
BECKY QUICK: His foundation?
WARREN BUFFETT: The Gates Foundation.
Whereas, I hope that my kids live a lot longer than — than I do, and I hope all three participate. And I think all three will be better off for doing it.
But that — that's not a decision that was made — well, when Susie and I started giving them — I think we moved it up to, maybe, 30 million a year, and —
BECKY QUICK: To the kids' foundations?
WARREN BUFFETT: No, actually to —
BECKY QUICK: Oh.
WARREN BUFFETT: — to — but — to their foundations. I don't remember the exact figures at all.
But we gave it to them when we were 99 percent sure that — that they — well, we knew they were willing and — and in some cases, in a certain way, eager, to do things for other people.
They — they've had a good life. They haven't — they haven't —
Well, they've followed that rule that somebody told me a long time ago, but — which I get credit for, but I didn't think of it myself — which is that if you're the child of some very rich family, that you should have enough — you should be given enough to do — to do — to do something, but not enough to do nothing.
BECKY QUICK: Right.
WARREN BUFFETT: And that's — that's exactly what's been going on at an increased scale, but —
BECKY QUICK: Just to —
WARREN BUFFETT: But I have to step it up now, because, you know, at my age, you know, the probabilities really get against me.
So that the last will I wrote is — is very likely to be my final will. Whereas the wills that I was writing when I was 30 or 40 or 50, I knew they would change.
BECKY QUICK: Right. Let's — let's talk about that.
2. 21:23 - Accelerating the pace of donations
BECKY QUICK: The other thing that you're announcing in this is that you would like to see the money go out at an expedited — and the shares go out — at an expedited rate.
To this point, it had kind of been 10 years after your death, you thought the shares would all be disbursed to charity.
Now you're saying that you would like all of those shares to be disbursed eight years from now, by the end of 2034.
WARREN BUFFETT: Yeah.
BECKY QUICK: What — what changed your mind on that, and what does that mean?
WARREN BUFFETT: Well, it certainly means that I had — I had two purposes in — in all the philanthropy, and — and in particular with all — essentially, a hundred percent of my money in — in Berkshire —
You know, that's my painting, and — and I like the painting, I like the people associated with it, and it's been refined over time. You know, I've added an (inaudible) over here or something. (Laughs)
And — and I don't think — I don't know of 10 people in the United States that I would trust to hand it over to. I don't know —
BECKY QUICK: Your company? You're talking your company?
WARREN BUFFETT: The company.
BECKY QUICK: Right.
WARREN BUFFETT: I don't know of five people, and I know a lot of people. And — now I have a very high standard in terms of what I'm looking for in — in that person. And clearly, we've — we found him with Greg Abel.
So — and that becomes more evident by the day. Even this year, there's been added things that, so —
BECKY QUICK: So you don't think you need to hold on to the shares, or have your family have voting power over those shares, for as long because you think Greg Abel is —
WARREN BUFFETT: He is the choice. The only question is — is — he's not immortal, either, you know.
I mean, you always have this mortality question, you know, and nobody gets away from it. I mean, it —
People can be in marvelous health, or seem like it — and you know they —
Who died the other day? Wasn't he —
BECKY QUICK: Lindsey Graham.
WARREN BUFFETT: — 71 or something?
So there's an enormous variety and variation from — from being lucky to not being lucky.
And I've — that's — that's the bet I made with Greg.
I do not have a list of 10. I mean, it isn't — I don't have 10 kids, either. But — even — I don't have a list of three.
BECKY QUICK: In terms of who you would trust the company to —
WARREN BUFFETT: Yeah.
BECKY QUICK: — at this point?
WARREN BUFFETT: Yeah.
Now, I've got directors that I trust to be imbued with the — the — they like the concept of Berkshire Hathaway. They would like to keep it going.
So I've got the right group that's the intermediary in — in making that choice.
But things don't always work out perfectly with the world.
BECKY QUICK: So your — your hope is that the shares will be dispersed by the end of 2034, just over eight years from now — eight and a half years from now.
But I take it if — if you're not here and the kids are the one making the choices, you would leave it to their decision making at that point?
WARREN BUFFETT: Yeah. And eight — eight years from now, you know, my daughter will be 80 — very close to 81.
You know, another will be seventy —
And it's not just a question of mortality. It's a question of keeping your marbles, too. You know, and —
BECKY QUICK: (Laughs)
Have they heard you say it like this?
WARREN BUFFETT: Well — well, I mean — I'm losing marbles — (laughs) — at this point.
I accumulated marbles for a longer time than I deserved, and that's just a matter of luck.
I mean, I've — I've seen so many managers of our companies that — well, I think I've mentioned it at a few annual reports — annual meetings, I mean. We had guys cutting out paper dolls, and there's you know, and their assistants covering for them.
BECKY QUICK: OK, just to — to clarify at this point, you are saying this of your right mind while you're making these decisions, correct?
WARREN BUFFETT: I hope so. (Laughter)
But actually, I wrote the will a couple years ago, so that —
And I will not knowingly — I mean, I will not change that will, except for extremely important decisions, because there's no question that I had my marbles when I wrote it.
3. 25:40 - The family foundations
BECKY QUICK: OK, so let's talk a little bit about what happens now, because you've talked about how this is really your children making the decisions, but in the announcement that you're putting out now, you increased each of your children's foundations, the amount you're giving them, by about 50 percent —
WARREN BUFFETT: Yeah.
BECKY QUICK: — from what you gave them last year.
WARREN BUFFETT: But I've increased the Susan Thompson Foundation, but —
BECKY QUICK: But it's the Susan Thompson Buffett Foundation that really is seeing the outsize gains in what they're going to be giving away.
They're — they're — the amount of shares they receive this year is tenfold what it was last year. Basically they're getting all the money that would have gone to the Gates Foundation. Why?
WARREN BUFFETT: They're — they're getting all the money that would have gone to the Susan Thompson Buffett Foundation —
BECKY QUICK: — and then some.
WARREN BUFFETT: — if my first wife would have survived.
BECKY QUICK: Right. And then some.
WARREN BUFFETT: Yeah.
BECKY QUICK: But basically the payout they're going to be getting this year, in terms of what they can disburse, is four and a half billion dollars. That's how much the Gates Foundation got last year.
Why so much more to the STB Foundation than the other three foundations, relatively speaking?
Everybody gets more, but — but why that outsized amount?
WARREN BUFFETT: Well, the SCB Foundation is what — and I would say, totally, my wife would have — my first wife would have created — and I would have approved it.
I mean, we were on the same page in all kinds of questions that aren't even questions anymore, in terms of women's rights, civil rights. I mean, we were — we were in sync.
That — now she — she took an interest in listening to everybody's story. That would be the last thing in the world — (laughs) — I would want to do.
She — she saw every individual as an individual, but she also saw them as a group. I saw them as a group, and I had other things that fascinated me more.
BECKY QUICK: This money that goes through, is this what you will anticipate seeing from — from this point on? In years past, at Thanksgiving, you've given additional disbursements to the three kids' foundations.
WARREN BUFFETT: Yeah.
BECKY QUICK: Do you plan to do that again this year?
WARREN BUFFETT: Yeah, I'm almost sure I will. But — but regardless, the other — the other goes on.
You know, I mean — if I, you know — I could, I'm — I'm more probable to die before Thanksgiving than any of my three children, and probably the probability of all three combined. But — but —
But I also enjoy explaining why I take actions, just like I do in the annual report on Berkshire.
I — I've got a didactic streak, which my partner Charlie Munger had, and to us — the money wasn't — well, the money was important, in terms of what it could actually do for other people.
It wasn't important for what it could do for me. I — I have not denied myself anything in life.
BECKY QUICK: If something happens that you're not here to make these decisions, does it revert to what you talked about last year in your will, where there is a new foundation that is created?
WARREN BUFFETT: Yeah, there's a new foundation —
BECKY QUICK: And the three kids are in charge?
WARREN BUFFETT: Because it has to be — to be — because it does have slight variations. One being unanimous consent among the three for anything they do.
BECKY QUICK: Does the STB Foundation or the kids' foundations, do they have to spend the money in this fiscal year as was required of the Gates Foundation, or is this something where they can take their time and make their plans?
WARREN BUFFETT: They know — they know my views on it, but they can they can do what they want. But if they — if their wants get away from the basic principles far enough, you look at it again, but that isn't going to happen.
BECKY QUICK: Warren, you've spent most of your adult life thinking about philanthropy. How have your views changed over time? What would you like to see happen with this?
I think about the Giving Pledge and what you all did. What's your perspective at this point?
WARREN BUFFETT: Well, the perspective I have is out of eight billion people, you know, I may be one of the 10 luckiest in the world. (Laughs)
So I've been lucky and healthy to get to 95. I've been lucky in that the field that intrigued me, and where I had some natural ability, happened to be one that paid off in a way that was — nothing paid off like it.
I've — I could have been a great violin player, you know — anything else.
I — it requires more talent than I have, but a different form of talent. And — and fortunately, I got exposed, partly accidentally, to what I liked to do very early on, and that was just an accident.
If my father had been a plumber, I would not have — I would not have had the same advantage I had.
So I was incredibly lucky. And — and then, as life has gone along, I have seen how unbelievably unlucky some people have been.
And it is luck. I mean, you know, we — you know — we had accidents with — with the kids when they were young, and all kinds of things can happen. And they just didn't happen to us.
BECKY QUICK: All right, let's talk about a few other things while we have you, here.
WARREN BUFFETT: Yeah.
BECKY QUICK: Is there more you want to say?
WARREN BUFFETT: Let me add one more thing on that, though.
I mean, the idea, the whole idea, of kings and queens and everything, where you pass along, for thousands of years, the ability to live in any manner you wish, you know, while you say "let them eat cake" — (laughs) — to the rest, it —
That — that is not the way the system should — would be, if I had my way of designing the world. And I can't -- I can't change the design of the world, but I can make — I can level at the edges.
BECKY QUICK: And those are the same values that your wife, Astrid, and your kids all have, too?
WARREN BUFFETT: A hundred percent. And I'm glad you mentioned Astrid, because she feels — she's as extreme in this field as you can imagine. And she — she's actually experienced more hardship in life than either Susie or I did, because she was — she's Latvian — and you know, and came over in a boat in Ellis Island, and — and didn't know who she was being assigned to. Lived in foster homes, all kinds of things.
So, the — the accidents of birth are just so extreme. And I've seen people that use those accidents to justify positions that are just ridiculous — (laughs) in my view.
And — and that's the reason for encouraging philanthropy.
You can't mandate it. It isn't even — it isn't philanthropy if you mandate it. But people, most people, are a combination, you know, of lots of good instincts and lots of not so good instincts — (laughs) — and including me. And the —
If you do things that appeal to their better instincts, they — they respond, sometimes.
BECKY QUICK: And by the way, your — your point with the Giving Pledge, when you founded that with Bill and Melinda Gates, was to encourage people to give to anything, but not to try and tell them what to do with their money.
WARREN BUFFETT: Exactly. Exactly. And —
And also decide when they would do it. I mean, a family that's got a family farm they've had for a hundred years, and they're — you know, within the family, they've all worked out and everything — they're going to have a different view toward capital.
They're all going to work hard, but they just — going — they're going to have a whole different view than some guy that is — is writing options on Wall Street.
BECKY QUICK: Yeah.
4. 33:45 - Buffett says he initiated big Alphabet investment
BECKY QUICK: OK, let's talk about a few other things that have happened, maybe since we got the chance to sit down last in May.
The first that I can think of is the massive position that Berkshire has — has developed and grown in Alphabet — in Google shares.
That's something that a lot of people have looked at and said, OK, this is Greg's mark on how he's going to be changing the portfolio. How did the Alphabet position come along?
WARREN BUFFETT: I initiated it.
I mean, I normally wouldn't give you an answer on something like that, but I will because — but we — I am not doing anything that he doesn't approve of. He's not doing anything I don't approve of. We talk all the time.
He's, you know, he's — well every day, I mean. And — and — but it — he is the decider.
And getting back to Alphabet, or Google, it's probably number five or six.
BECKY QUICK: Well, I thought it was number three if you consider the 10 billion dollar private placement that would go along with that, because that would put it north of 31 billion dollars.
WARREN BUFFETT: Yeah, but we — we've got — we've got the Burlington Northern railroad —
BECKY QUICK: OK.
WARREN BUFFETT: — which is certainly worth far more money than that.
BECKY QUICK: OK, so you're counting — you're counting fully owned companies.
WARREN BUFFETT: Absolutely. You know, I mean, we are always making the choice between whether we'll buy marketable securities or the company. We look at them the same way.
There's — there are some minor exceptions to that. We can't — we can't set dividend policy, for example, if we don't own it.
But the chances of those being material — the important thing is to buy a good business and to buy it on the right terms, and to get the right person to run it.
BECKY QUICK: OK, but you've quickly grown a north-of-thirty-billion-dollar investment in Alphabet. That puts it, in terms of those companies that you own pieces of, behind only Apple and —
WARREN BUFFETT: American Express.
BECKY QUICK: And American Express. So Coca-Cola would be smaller. Bank of America would be smaller.
WARREN BUFFETT: Well, it's — it's kind of close, and — and it—
But — but if you take Coca-Cola, which we've owned, you know, 45 years, whatever it may be — you know, we — we don't have a thing to do with running that business, and — but it's a very good business.
And I — when I say a very good business, I mean something that you can expect to own, earn high returns on capital, over a long period of time.
Now the question is, when you get into Google, is — or any of the AI companies — you're putting out huge amounts of money. And I can put huge amounts of money into government bonds and get, you know, 20 or 30 or billion dollars a year, in terms of payments from them.
So, a good business is one that earns a lot more than — than — and has prospects of continuing to earn a lot more than the — the returns on — on essentially riskless investments, which you could define as Treasurys.
But if you take something like American Express, you know, there are — most of the banks earn 13, 14 percent on — on capital.
If I asked everybody to guess what American Express would — they would — they would — they would come up with some figure similar. But it's so different that it earns 30 percent-plus on capital, and does not incur more risk in doing so than the banks that earn 13 or 14 percent.
And the — the trick in life is to find —I mean, in investing — is to find businesses that are going to earn high returns on capital for an extended period of time.
And that's what happened with — with Berkshire for a long period of time.
A long period of time gets to be very important because those doubles later on are of very big numbers.
But Charlie — Charlie Munger — my partner for many — for decades — he just — he just pounded the idea that it wasn't a good business just because it — it was doing sexy things, or whatever it might be.
But if it wasn't earning real cash that it would — or be expected to do it in a very short period of time — and — and to be able to distribute it if it wanted to — better yet, if it could reemploy it as a business — it was even better than one that had — had the ability to earn high returns, but you couldn't deploy the excess capital of those returns.
BECKY QUICK: OK, let me ask you, though.
Forever, people have thought of you as somebody who doesn't invest in technology. And by the way, you've described yourself as somebody who doesn't invest in technology.
Obviously, the biggest position in the Berkshire portfolio is Apple, a position that you put on. But at the time, you called that a consumer company.
Google, you just called an AI company. So what happened?
WARREN BUFFETT: Google — the real question with Google and all of its competitors now, because they're all laying out hundreds of billions. I mean, they —
BECKY QUICK: They're big capex spenders.
WARREN BUFFETT: So they — and yeah — and that — and that's real money.
I mean, that's — if our railroad were to lay out 300 million — or billion — or 200 billion, you know, that — that kind of money wasn't even put in the railroad business, you know, in terms of developing it.
So — and — and they are — that's the game they're — they're playing now. They weren't playing that game with — with computer software.
BECKY QUICK: No, so when they were asset light, you didn't like them, and the markets loved them. Now that they are —
WARREN BUFFETT: I made a mistake.
BECKY QUICK: — spending heavily on capex, a lot of shareholders don't like them as much, because they don't —
WARREN BUFFETT: I think they're more likely to be a winner, based on their record, than — than probably 90 percent or — or 95 percent of what gets merchandised through Wall Street, because Wall Street is just interested in whether they can sell something.
And I can't recall a report on Wall Street that really gets into the internal rates of return that a business is actually earning. That — what's more important than what a business is earning?
But they ask all these questions about what'll happen next quarter, or you know, or it's just — it's ridiculous.
But, you know, investing is — is coming up with —
Well, probably the — close to the most successful long-term investor was — was Rockefeller. And — but look at what oil and gas has done over 150 — or a couple of hundred years.
So he kept compounding at a very good rate. Not as good a rate as GEICO would have achieved in its early years, because it's easier to do when you're small.
Getting to do it when you're large is — you got the whole world looking at you, trying to figure out how — (laughs) — how — how come those guys are doing it and we're not doing it?
BECKY QUICK: Why do you like Alphabet above all others, and what made you initiate this position? What was the eureka moment?
WARREN BUFFETT: I — I would say that I don't like it as well as at least four or five other businesses that we own.
BECKY QUICK: Other than Apple, the railroad?
WARREN BUFFETT: Well —
BECKY QUICK: American Express?
WARREN BUFFETT: You're not going to get the whole portfolio out of me — (laughs) — but — and of course —
BECKY QUICK: But you like it enough it make it a huge position.
WARREN BUFFETT: I like — I like Berkshire that way. I mean, Berkshire earned high returns on capital without — without — I'm not talking about using the tricks of leveraging or that sort of thing — I'm — and all that.
BECKY QUICK: But I'm talking about why Alphabet versus the other Magnificent Seven, or the other, you know, hyperscalers, who are doing the same thing, spending a lot of money —
WARREN BUFFETT: Yeah.
BECKY QUICK: — Amazon, Microsoft, whoever it may be — to try and win in this position of AI?
WARREN BUFFETT: Yeah. Well, I don't want to sit around knocking the others. They don't have any choice. You know —
BECKY QUICK: To spend like this, you mean?
WARREN BUFFETT: Yeah. They're now playing a game, in many cases, where they — or in some cases — where they're playing a game they don't want to play.
IBM would have loved it if they just kept playing the game that IBM was playing in the 30s or the 40s or the 50s and the 60s, you know. And then somebody came along with — and said, we'll get a better result for you, achieving the objective of all the customers you have, because that's all you're going to have is — you either have happy customers or you don't have customers, over time. And the customer is not dumb.
Wall Street can be very dumb, and in terms of — they — they can dream. But a guy with a grocery store can't dream. I mean, I worked at my grandfather's grocery store, and we saw — well, we had one store in 1869 and we had one store in 1969 — (laughs) — and — and other people were earning high returns on capital, some on a national scale. A&P, which people don't associate with anymore, in the 1930s, I mean, they were — they were number one — enemy number one — of trustbusters in — in Washington. And they — they had a very, very, very good hand, and that hand disappeared.
BECKY QUICK: So it's a different game.
WARREN BUFFETT: Yep.
BECKY QUICK: And you like this game? You understand this game more than you understood the game they were playing before? Is that what you're saying?
WARREN BUFFETT: Yeah, well, there's all kinds of games I don't understand. Sure.
BECKY QUICK: Yeah. But this game —
WARREN BUFFETT: Why — why should I expect to make money in all kinds of things I don't understand? And —
BECKY QUICK: But that's what I'm getting at. What do you understand about this game at this point? Because most people would say he's never going to buy any technology stocks, and I think you've said the same thing yourself in the past.
WARREN BUFFETT: Yeah, but I've done it. And actually, one of the most successful companies I was associated with, going back to 1958.
BECKY QUICK: Right.
WARREN BUFFETT: We started a company called Data Documents. We started Data Documents because a couple of pals of mine read in the paper that IBM had settled a antitrust suit by divesting. They had to divest 50 percent of the capacity of what was their best business. And everybody knew it was their best business.
Now, it so happens it ran out after 10 or 15 years, and I — I knew some of the people that caused it to run out.
But if you have a wonderful business, you are going to be subject to attack. So you — it's not a question of whether it was wonderful yesterday. It's — it's — the question is: how long is it going to be wonderful?
BECKY QUICK: But that's what I think I love. People can try and pigeonhole you and say they know who you are and what you do. To me, it looks like you're 95, turning 96 next month, and you are still changing and following the game.
WARREN BUFFETT: Well yeah, but it's easier for me — if somebody came along — I'm just trying to think of what it might be — better candy — that would have more predictive value to me than if they came along and had a better way of — of doing something that a hundred of their competitors would sneak in the — in the plant at night to see how — exactly how they got it all done.
5. 45:48 - Apple faces tough competitors
BECKY QUICK: Let's talk about your largest position, Apple.
You told us that you were thrilled with everything that Tim Cook had done. I don't know how well you know [incoming CEO] John Turnus at this point, or what you think the company's doing.
You still have a lot of faith in Apple?
WARREN BUFFETT: Well — I — there was no move they could make, that would replace Tim, that I would have liked. (Laughs)
I mean, you know, if you got somebody, you know, Stradivarius playing the violin for you, I mean, don't — don't spend the next 300 years looking for another one. I mean, you've got one already.
And — and of course, Wall Street thrives on the idea that convincing you that — that — that if you just listen to them, they've got something that nobody else has. Well — which can't be true. I mean, it's ridiculous.
But — but it works because — well, in general, it works because the — America has been a wonderful place to invest money. And the Dow industrials, when I bought my first stock, had just crossed a hundred — 100 — and now it's 52,000 or something — and you've got dividends in between and all kinds.
Well, I mean, the village idiot — (laughs) — could have made it from that point forward. And so I've been in the right game.
If I'd been in — in wheat speculation, I mean, wheat — wheat's gone from, you know — I don't know whether it's gone from three dollars to five dollars, or something, over 200 years. And it — it's a pretty — it's a very simple business, as long as you keep remembering that it's simple and that making it complicated can — can — well, it's just crazy. At that point, you're gambling.
BECKY QUICK: But do you still like Apple?
WARREN BUFFETT: And the people — people's enthusiasm for gambling is enormous.
BECKY QUICK: You've talked about that —
WARREN BUFFETT: Yeah.
BECKY QUICK: — over the last many years, probably since COVID.
But you still like Apple? Back to the point.
WARREN BUFFETT: Yeah.
BECKY QUICK: Yeah.
WARREN BUFFETT: Yeah.
And I know more about Apple than I knew many years ago. But on the other hand, if you're — if you're Apple, you've got very, very smart people all over the world shooting and trying to figure out how to make sure that — that Apple's future — the future isn't as bright as the past.
And look at — look at the car companies. I mean, Henry Ford owned the car business for 30 — for 20 or 25 years, and he — he did — he brutally integrated like you cannot believe. He got — drove costs down. He got the cost of the Model T down, I think, to $285. And he always was decreasing prices while increasing wages.
BECKY QUICK: Right.
WARREN BUFFETT: So he was — he was — but he also was a little nuts in some ways, and — and that did him in, finally, when he — when he converted over the Model A, and General Motors just came racing by.
And — and my friend Charlie Munger thought that General Motors was the — was going to be the dominant company. Who could imagine attacking their dealer fleet and everything they had going for them? And — and — you know.
You've always got somebody shooting at you.
BECKY QUICK: To that point, Apple brought a lawsuit against OpenAI just last Friday night — just last week — and basically accused OpenAI of trying to steal trade secrets.
WARREN BUFFETT: I would say most — most companies would love to try steal trade secrets. They wouldn't love getting caught.
But if you really could dig deep into the hearts of managers, they'd like to steal secrets. (Laughter)
Wouldn't you? I mean, if you had a business and you were struggling along, and the guy next door was making money?
I — I had a half interest in a Sinclair filling station at 30th and Redick in Omaha when I was in my early 20s, and I'd been to business school and knew all these things. The guy next door had the Phillips station and he was pumping 30,000 barrels — 30,000 gallons — a month, and we were pumping 15,000 gallons a month.
So I said we're going to wipe this guy off the face of the earth. And you know, a couple years later, we were selling 15,000 and he was selling 30,000 and we gave up, and we closed up. And I think he's still operating.
It's — people are playing for keeps in business.
6. 50:40 - IRS sues Coca-Cola over taxes
BECKY QUICK: Yeah.
We talked about Coca-Cola briefly, the long-time position you've held for more than 45 years.
There is a major lawsuit —
WARREN BUFFETT: Yeah.
BECKY QUICK: — with the government that could look at action, I believe, going all the way back to 1996 with Coca-Cola. The government — the IRS — has said that they owe them —
WARREN BUFFETT: Yeah, it's 20 —
BECKY QUICK: Twenty billion dollars, roughly.
WARREN BUFFETT: Yeah, of which they paid —
BECKY QUICK: I think they put 10 billion something —
WARREN BUFFETT: They made a deposit of close to 10 billion.
BECKY QUICK: But we — we're going to hear about whether — the activities in this has to do with overseas — their overseas business — just some of the accounting that goes back and forth.
Coca-Cola says that they thought they had an agreement in 1996 that stood, with how they should behave. The government's now looking for more money and saying that's not the case.
It's not just Coca-Cola that's riding on this, though. There's a lot of other American businesses who are doing the same thing.
WARREN BUFFETT: Well, a huge number, which is why the derivative effects of the suit could be the biggest in American history.
BECKY QUICK: What do you think of this? And with the understanding that you are a Coca-Cola shareholder, a large Coca-Cola shareholder, was this an overzealous government looking for ways to raise more money? Was this a company that performed badly — or that behaved badly?
WARREN BUFFETT: I — you know — I've got a dog in that fight, so — (laughs).
BECKY QUICK: So you don't want to —
WARREN BUFFETT: So no, that's why we have courts.
BECKY QUICK: Yeah. So you'll wait and see what happens with it.
WARREN BUFFETT: Yeah. No —
BECKY QUICK: I take it you're watching this closely?
WARREN BUFFETT: Yeah.
Paying the extra money won't break Coca-Cola any more than anything I can think of would break Berkshire. I mean, I — I look at — all I think — do — is think about the downside. The upside will take care of itself.
BECKY QUICK: Right.
7. 52:25 - New Fed Chairman Kevin Warsh "will do the best he can"
BECKY QUICK: We also have a new FOMC chairman, Kevin Warsh, who is taking a look at the economy this week. He's going to be — or is speaking to — in front of Congress.
A lot of questions about what he'll do with the markets — what he'll do with interest rates, and what that, in turn, means to the markets.
You, in the past, have spoken about how interest rates are gravity, and it determines where stock market prices are headed.
WARREN BUFFETT: Right.
BECKY QUICK: So, what do you think happens? What are you betting?
WARREN BUFFETT: I don't know what he'll do, but I would say that — that job is so complicated. I think the other day he was quoted as saying, you know, that they have 950 economists where they could use about 10.
I admire him for taking on the job. I think he will do the best he can at achieving the job he was assigned to do, which is, you know, 2 percent inflation while maintaining maximum employment.
And my guess is that — that just like some of the others that have preceded him, not all of them, but — but he would read that every morning, you know. I mean —
BECKY QUICK: The dual mandate of the Fed.
WARREN BUFFETT: The dual mandate.
And he doesn't — he — he knows he can't be perfect at it. And just like I know I couldn't be perfect at taking people's money and earning super returns on it.
But my guess is that people were right in realizing that I cared about what happened to their money. And I — I would say that — that Warsh has — he cares about the country.
BECKY QUICK: OK.
WARREN BUFFETT: And I think that's been true of a good many. It doesn't mean their decisions are always great, but — because sometimes the decisions are so tough. I mean, imagine Paul Volcker getting you know death threats all the time.
And — and others just think they know more than they do.
BECKY QUICK: But you think Kevin knows a lot and is —
WARREN BUFFETT: I think he's a very — yeah — I think he was a good choice.
BECKY QUICK: OK.
WARREN BUFFETT: Which probably means the president will be mad. (Laughs)
Future presidents will be mad at him because future presidents are looking at the next election, and he's not supposed to be looking at the next election.
BECKY QUICK: Right.
8. 54:42 - "It's tough to find values when everybody is preferring gambling"
BECKY QUICK: You, obviously, don't come out and make calls on where the market's headed at any point in time.
WARREN BUFFETT: No.
BECKY QUICK: But you do make calls on market behavior and what makes sense to you and what doesn't.
Do you think the markets make sense to you when there's so much riding on AI?
Earnings have been very strong. The consumer looks like it's held into this point. But how do you view it?
WARREN BUFFETT: Well, I think there are — there are times when opportunities are just thrown at you so fast you can't — you know — it's unbelievable.
And then there's other times when you're very, very lucky if you find one thing in a couple of years.
And — and — it should always be that the — the latter is what prevails.
But — but since humans love to gamble so much, there's more money in — in actually cultivating gamblers than there are cultivating investors.
If — if somebody bought Berkshire 40 years — you know — 50 years ago, a guy would have made one commission. (Laughs)
And — and he should spend the rest of his time telling the client, "Don't do anything with it."
And that's just not the way — we can't expect that of humans.
But every now and then you do find people that — I mean, you find people who behave far better than other — other people.
BECKY QUICK: Fair to say, though, it's tougher to find values or find cheap opportunities —
WARREN BUFFETT: It's — it's tough to find values when everybody is preferring gambling.
BECKY QUICK: Yeah.
WARREN BUFFETT: And from the standpoint of the state — we may have discussed this — but from the standpoint of the state, it's — it's sort of disgusting because the state needs money for all kinds of things, roads, schools, you name it, and they have found that they can clip people who are buying nothing but hope, selling them a payout, something with a payout ratio of 60 percent or something like that, and — and if they weren't doing that, they'd have to have the income tax higher.
BECKY QUICK: Right.
WARREN BUFFETT: It's a cynical sort of activity. And I think the less you get cynicism between the governing body and — and the people — the government — you — you don't want to — you don't want people to be cynical about their system.
But there's times when the system says, you know, just be as cynical as you want because this is what I'm going to do, baby. (Laughter)
9. 57:06 - Buffett has great faith in Greg Abel
BECKY QUICK: Let's go back very quickly — you touched on this — part of the reason that you want the shares given out over the next eight years is because you want your kids making these decisions.
But the other part is that you don't feel like you necessarily have to hold on to these voting shares of Berkshire for as long, because you have faith in Greg.
WARREN BUFFETT: Yeah, exactly.
And if we didn't — if we didn't have faith — well, part of the reason I'm around is because we didn't have sufficient faith in anybody. And we knew all kinds of people. But I mean, if you were talking about Tom Murphy, I mean, if I could have hired Tom Murphy —
But the trouble was they were all older, and all my friends were pretty much older. So I — I — I didn't.
It wasn't like I was in college and I could see who really had it, you know, who was writing crib sheets — (laughs) — on their — on their — answers on their shoulder — on their shoe cuffs.
BECKY QUICK: But you feel that way with Greg.
WARREN BUFFETT: I — I feel a hundred percent that way.
BECKY QUICK: Yeah.
WARREN BUFFETT: Yeah. I've seen him in a lot of situations — a lot of situations.
I felt that way with Charlie. I felt that way with Tom Murphy. I mean —
But you know — nobody — nobody expects you to pick out, you know, 25 husbands and have them all work out. (Laughs)
And just finding one is pretty tough, I mean, that's the right sort.
BECKY QUICK: Yeah.
WARREN BUFFETT: And then you make mistakes.
10. 58:44 - Buffett broke a leg
BECKY QUICK: Warren, how are you feeling today?
WARREN BUFFETT: Well, I — you know — I broke a leg — (laughs) —
BECKY QUICK: What happened?
WARREN BUFFETT: — a few weeks ago. So — which is really — you know — I've been very lucky on that sort of thing.
I haven't broken a leg in — in my life until now. (Laughs)
But — but — I — I feel good. I'm glad I was born.
BECKY QUICK: Yeah.
WARREN BUFFETT: And I'm glad I wasn't born in some other country. And I was glad, initially, that I wasn't born female. And — I mean, all kinds of things.
I mean, I — I really won the lottery when I came out.
And other people think they won the lottery if they've got a trust fund set up for them that takes care of them for their whole life, and, you know, five generations thereafter.
But — but I just wasn't raised that way, and I think it's a good thing I wasn't, and I haven't raised the kids that way — or more important, Susie didn't raise them that way.
BECKY QUICK: Great. Well, I want to thank you for your time today.
WARREN BUFFETT: Well, thank you.
BECKY QUICK: I appreciate it.
WARREN BUFFETT: And we're interested in business. (Laughter)
BECKY QUICK: Thank you.
BUFFETT & BERKSHIRE AROUND THE INTERNET
Some links may require a subscription:
- Yahoo Finance video: Everyone wants quick money. Warren Buffett says that's the problem.
BERKSHIRE STOCK WATCH
Four weeks
12 months
BRK.A stock price: $736,000.00
BRK.B stock price: $490.91
BRK.B P/E (TTM): 14.61
Berkshire market capitalization: $1,058,643,311,348
Berkshire Cash as of March 31: $397.4 billion (Up 6.5% from Dec. 31)
Excluding Rail Cash and Subtracting T-Bills Payable: $380.2 billion (Up 3.0% from Dec. 31)
Berkshire repurchased $234 million of its shares in Q1 2026.
BERKSHIRE'S TOP EQUITY HOLDINGS - Jul. 17, 2026
Berkshire's top holdings of disclosed publicly traded stocks in the U.S. and Japan, by market value, based on the latest closing prices.
Holdings are as of March 31, 2026, as reported in Berkshire Hathaway's 13F filing on May 15, 2026, except for:
- Alphabet, which includes the $10 billion in shares that Berkshire agreed to buy directly from the company, as announced on June 1, 2026. Berkshire has not yet formally disclosed whether the transaction has been completed. The entry is a combination of Class A and Class C Alphabet shares. The market price is a weighted average of the prices of the two classes.
- Mitsubishi, which is as of April 30, 2026
The full list of holdings and current market values is available from CNBC.com's Berkshire Hathaway Portfolio Tracker.
QUESTIONS OR COMMENTS
Please send any questions or comments about the newsletter to me at alex.crippen@nbcuni.com. (Sorry, but we don't forward questions or comments to Buffett himself.)
If you aren't already subscribed to this newsletter, you can sign up here.
Also, Buffett's annual letters to shareholders are highly recommended reading. There are collected here on Berkshire's website.
-- Alex Crippen, Editor, Warren Buffett Watch`,
    bodyJa: `(これはウォーレン・バフェット・ウォッチのニュースレター、ウォーレン・バフェットとバークシャー・ハサウェイに関するニュースと分析です。ここからサインアップすると、毎週金曜日の夜に受信箱で受け取ることができます。)
バフェット氏のCNBCインタビューで判明した2つの予期せぬ事実
ウォーレン・バフェット氏は、ゲイツ財団への今後の寄付を打ち切ることを公に明らかにした当日、CNBCのベッキー・クイック氏との1時間近くのインタビューで、その決定においてビル・ゲイツ氏とジェフリー・エプスタインとの関係が果たした役割を軽視した。
同氏はまた、グーグルの親会社アルファベットにおけるバークシャー・ハサウェイの現在300億ドルのポジションを自分が開始したことも明らかにしたが、これはグレッグ・エイベル氏にとってCEOとしての最初の大規模な投資決定だと多くの人が考えていた。
バフェット氏：ゲイツ氏とエプスタイン氏の関係は「不快」だが誰でも間違いはある
ウォーレン・バフェット氏は、ビル・ゲイツ氏と悪名高い性的人身売買犯ジェフリー・エプスタイン氏との関係を「不快」だと感じたが、マイクロソフト共同創設者の財団への今後の寄付をやめるという決断は、彼の3人の子供たちが責任を持って「巨額のお金」を寄付できるようになったということを示したことがきっかけだった、と述べた。
同じ20年間で、彼はゲイツ財団に寄付当時の価値で約480億ドルのバークシャー株を寄付したほか、スージー・バフェットのシャーウッド財団、ハワード・G・バフェット財団、ピーター・バフェットのノボ財団、そして亡き最初の妻にちなんで名付けられたスーザン・トンプソン・バフェット財団にも約180億ドルを寄付した。
同氏はベッキーに対し、「難解な場所やあらゆる種類の場所で」巨大な建物を建設したり会議を開催したりすることなく、「子供たちが効率的にお金を寄付したいと本当に望んでいるという事実に感銘を受けた」と語った。
バフェット氏は、ゲイツ財団への寄付を始めた2006年には、自分の子供たちに対して同じような信頼を持てていなかった、と語った。
ベッキーはCNBCとの3月のインタビューで、ジェフリー・エプスタインのファイルでゲイツとのつながりが明らかになったのを踏まえ、ゲイツ財団に毎年寄付をするという「生涯」の決意を続けるつもりかと尋ねた。
その時、彼はこう答えた。「何が起こるか見てみるよ…今日その決断を下す必要はない。そして今日は決断していない。」
「私は何年もの間、何かについて知らなかったことを学びました。」
現在バフェット氏は、ゲイツ氏の先月の議会証言や、おそらくは財団職員との面会でゲイツ氏が「ロシア人女性と2度不倫していたことを認め、それが後にエプスタイン氏に発覚したが、それらにはエプスタイン氏の被害者は関与していなかった」という2月のウォール・ストリート・ジャーナル紙の報道も含め、この問題について「かなりの量」を読んだと述べている。
バフェット氏の評価：「不愉快なことではあるが、彼が間違いを犯した一方で、私はあらゆる種類の人を雇ったり、友人を選んだりする際に間違いを犯し、その後、彼らが――何らかの形で――私が思っていたような人たちではなかったことが後でわかった。だから、そこには私が目に見える範囲を超えたものは何も見つけられなかった――私は自分がやっている姿を想像することができた。」
バフェット氏は3月、エプスタインファイルに関する「全容が明らかにされて以来」ゲイツ氏と全く話をしていないと述べた。
もうそんなことはありません。バフェット氏はベッキー氏に、ゲイツ氏が数週間以内にオマハに来て「一緒に3時間話し合った」と連絡を維持するために「私に電話するつもりだ」と語った。
バフェット氏は今週発表する前に、「ある時点で」ゲイツ氏に年間寄付をやめるつもりだと伝え、ゲイツ氏はこの決定に「OK」していると述べた。 「素晴らしい友情でした。」
ビル・ゲイツ氏は代理人がＣＮＢＣに電子メールで送った声明で、「ウォーレン氏は史上最も偉大な慈善家の一人であり、親愛なる友人だ。彼の知恵、寛大さ、そして深い目的意識が彼の人生と慈善活動の両方を定義づけた」と述べた。
ゲイツ氏は、バフェット氏の「前例のない支援」が何百万人もの命を救ったと信じている。 「ウォーレンへの感謝の気持ちは計り知れません。一緒に過ごした時間を大切にしています。これからもっと楽しい時間が過ごせることを願っています。」
バフェット氏が株式寄付のペースを上げている理由
同時に、バフェット氏は慈善活動への寄付の宛先を変更しており、寄付のペースも加速している。
ゲイツ財団と4つの家族財団の両方に対する彼の以前の慈善計画では、バークシャー株の価格が上昇したため、寄付の金額は通常前年よりも高かったにもかかわらず、毎年寄付される株式の数は減少しました。
今後、同氏は「約8年以内にバークシャー株をすべて処分」できるよう、毎年より多くの株式を贈与する予定だ。その理由の一部は、そのお金の使い道を決めることになる彼の子供たちが「残念ながら高齢になっている」ためだ。
バフェット氏は、自分の子供たちがこれから大変な仕事に就いていることを認めています。
同氏はまた、グレッグ・エイベル氏がバークシャーの経営陣に就くことで、自分とその家族が会社の経営権を早期に手放すことに安心していると述べ、なぜ最初の妻の名前にちなんで名付けられた財団が、彼の3人の子供たちが運営する財団よりも多くの株式を取得するのかを説明した。
バークシャー・ハサウェイ株は、バフェット氏が売却を加速するとの火曜日のニュースを受けて当初下落したが、その後回復し、若干安で週を終えた。
バフェット氏、アーベル氏の承認を得てアルファベットへの大規模投資を「開始」
火曜日のインタビューでの最大の驚きは、バークシャーによるグーグルの親会社アルファベットへの巨額投資の責任者がバフェット氏であると暴露したことだった。
昨年の第3四半期に約43億ドルの株式を購入し、今年の第1四半期に115億ドルを追加した後、バークシャーはAIへの野望に資金を提供する大規模計画の一環として、アルファベットから直接株式を購入することでさらに100億ドルをアルファベットに投資した。
バフェット氏が長年にわたり、ほぼ常にハイテク株を避けてきたことを考えると、私を含む多くの観察者は、アルファベットをバークシャー最大の株式保有株の一つにしたのは、新CEOのグレッグ・エイベル氏が投資の筋力を鍛えた結果だと考えていた。
バフェット氏は「それは間違っている」と述べ、「私が始めたのだ」と語った。
彼は続けて、「私は（アベルが）認めないことは何もしていない。彼も私が認めないことは何もしていない。私たちはいつも話し合っている…だが決定者は彼だ」と語った。
アルファベットはAIインフラに「巨額の資金を投じ」ており、「（株は）私たちが所有する他の少なくとも4、5の事業ほど好きではない」にもかかわらず、バフェット氏は「その実績に基づくと、おそらくウォール街を通じて商品化されるものの90パーセントか95パーセントよりも、彼らが勝者になる可能性が高いと思う。なぜなら、ウォール街は彼らが何かを販売できるかどうかだけに興味があるからだ」と述べた。
バフェット氏は火曜日のインタビューで、バークシャーのポートフォリオにアルファベットを以前に追加しなかったことは「間違い」だったと改めて認めた。
2017年のCNBCインタビューでバフェット氏は、バークシャーのGEICOが同社から大量の広告を購入していたため、Googleの潜在的な利益について知っておくべきだったと認めた。
バフェット氏はアップルに対して強気を維持
バフェット氏はティム・クック氏が760億ドルでバークシャー最大の株式を保有するアップル社のCEOを辞任することに失望しているが、それでも株価には満足している。
ウォーシュ氏、新FRB議長として「最善を尽くす」
バフェット氏はケビン・ウォーシュ氏が新連邦準備制度理事会議長に「良い選択」だと考えているが、「人々のお金を集めて超リターンを得るという点では私も完璧になれなかったのと同じように、彼も完璧には出来ない」としている。
それでも「彼は２％のインフレと最大雇用の維持という自分に課せられた仕事を達成するために最善を尽くすだろう」と述べた。
バフェット氏、金融市場における「ギャンブル」に再び警鐘を鳴らす
バフェット氏は金融市場で「ギャンブル」が多すぎることを依然として懸念している。
「誰もがギャンブルを好む中、価値観を見つけるのは難しい」と彼は言う。
「人間はギャンブルが大好きなので、実際には投資家を育てるよりもギャンブラーを育てるほうが多くのお金が入ってきます。」
「足を骨折しました」
インタビューが終わりかけたとき、ベッキーはバフェットにその日の気分はどうだったか尋ねた。
「数週間前に足を骨折しました」と彼は答えたが、何が起こったのかについては詳しく説明しなかった。
足の骨折は「今までの人生で初めて」だったので、「そのようなことに関してはとても幸運だった」。
バークシャーの自社株買いが本当に戻ってきている
バークシャーの第1四半期の自社株買いは比較的小規模で、公開プレビューでは2億3,400万ドルであったが、2年間の休止期間を経ての一度の再開ではなかったようだ。
本誌は、バークシャーが第２・四半期に５０億─１１０億ドルの自社株を購入したと推定している。
これはバフェット氏が今週SECに提出した財団への贈与に関する大まかな計算に基づいており、同氏のクラスA株18万8,920株（拠出後）はバークシャーの発行済株式全体の13.2％に相当することが明らかになった。
本誌は、自社株買いがいつ行われたかをまだ正確に把握しておらず、バフェット氏の所有割合が小数点第1位で表示されているため、推定される自社株買いの範囲はかなり大きいとしている。
バークシャーが来月初めに第2四半期決算を発表する際に正確な数字が分かるだろう。
1時間のインタビュー全文
1. 00:00 - バフェット、ゲイツ財団への寄付を停止する決定について語る
ベッキー・クイック: ウォーレン、まず第一に、今日は座って話してくれてありがとう。それは有り難いです。
ウォーレン・バフェット: 座っているのはいつでも良いことです。 (笑)
ベッキー・クイック: はい、私も同じことを見つけました。
最後に私たちが座ってあなたと話をしたのは、2回前の3月だったと思いますが、あなたが慈善活動で何をしているのかについて話をするためにあなたと座ったとき、あなたは、ビル・ゲイツとエプスタインファイルについて何が明らかになるのか、何が起こったのかを見て待っているつもりだと言ってました。
何をするかは決まっていないと言っていましたね。
今日あなたは、3人の子供たちの財団であるスーザン・トーマス・バフェット財団への寄付金を増額するとのリリースを発表しましたが、現時点ではゲイツ財団への寄付は何もありません。それはあなたの決断ですか？
ウォーレン・バフェット: その通りです。それは正しいです。
しかし、それを解釈する際に、私はビルとエプスタインに何が起こったのかという点で、1月1日以来かなりの量を読んできたことを指摘したいと思います。私はビルとエプスタインに何が起こったのかについて、議会での宣誓の下で行われた彼の発言を読み、反対尋問も読みました。不愉快ではありますが、彼は間違いを犯しましたが、私はあらゆる種類の人々を雇用したり友人を選んだりする際に間違いを犯し、その後彼らが、何らかの形で、私が思っていたものではなかったことが後でわかりました。
そして、そこには私が目に見える範囲を超えたものは何も見つかりませんでした。私がやっている自分の姿を想像することができました。
そしてご存知のように、彼はそれを終わらせました。そして、私が人について間違いを犯したり、人々が私について間違いを犯したと感じたりする状況があったことがあります。
しかし、彼らは――ご存知のように――人生は続いていくし、そして――そして誰も――人を選ぶという仕事で1,000点を達成する人はいない。
ベッキー・クイック: あなたは雇用の決定について話していて、おそらくあなたが誰と関係しているのかについて話していますが、確かにこれらのファイルのリリースで明らかになった、それに関して疑わしい決定がいくつかありましたが、その他にも、ご存知のとおり、個人情報もありました。
ウォーレン・バフェット: そうですね。いいえ、彼はそれを認めました。
ベッキー・クイック: そうだね。
ウォーレン・バフェット: そうですね。いいえ、そこでも、私はこう言いたいと思います、ご存知の通り、私は何人かの素晴らしい人々を知っていますし、今でも何人かの素晴らしい人々を知っています。
彼らがすべての決断を正しく下したとは思えません。
ベッキー・クイック: それで、それがあなたの意見なら、なぜゲイツ財団にもう寄付しないのですか?
ウォーレン・バフェット: そうですね、私は自分の状況全体を再評価しました。
それは私が20代の頃からそうしてきたのと同じで、スージーと私は結婚しており、実際にはお金がありませんでしたが、私たちは元気に暮らすつもりで、家族を持つつもりでした、そして—しかし、私たちは6軒の家や500フィートのヨットなどを持ちたいという願望を持っていませんでした。
それで、それでも私たちは慈善活動として何をするかについて話し合いました。しかし、私の考えと信念は、私は社会一般よりも良いレートでお金を複利化し、スージーはそれを寄付している99.9パーセントの人々よりも良いお金を寄付し、彼女は個人的に贈り物に関与するだろうということでした。一方、私は卸売で物事を行うのが好きで、彼女は小売りをするのが好きでした。
それで計画はあったのですが、お金がありませんでした。そして時間が経つにつれてお金がたまり始め、彼女は「私たちはもう金持ちになったの？」と言うようになりました。そして私はこう言います、「いいえ、でも、私たちは近づいています。」
しかし、私は急いで何かをすることはありませんでした。作業を進めながら、いくつかの小さなことを行いました。やったよ。
人類にとって最も重要な脅威は、核爆弾であると私は感じました。それで、私はそのことが起こる確率をどうやって変えることができるかについて、ある種の壮大な計画を頭の中で考えていました。そして、数十年を経て、最終的には、それが成功する確率は 100 分の 1、または 1,000 分の 1 パーセントではあり得ないという結論に達しました。
そして、ご存知のように、ロングショットに賭けるのは良いことですが、本質的には—
ベッキー・クイック: それで、計画を変更したのですか？
ウォーレン・バフェット: それで計画を変更しました。
ベッキー・クイック: なぜ計画を変更したのですか?
ウォーレン・バフェット: そうですね、私がここで述べたことのため、計画を変更しました。お金が始まりました — お金が積み上がり始めました —
ベッキー・クイック: いいえ、でもあなたは計画を変更しました。今計画を変更しました。 2024年、あなたはそれがゲイツ財団への生涯の誓いであると言いました。
2026年の今、あなたはそうではないと言っています。どうしたの？
ウォーレン・バフェット: そうですね、何が起こったのかというと、私はゲイツ財団に多額の資金を寄付しました —
ベッキー・クイック: 総額470億ドルくらいでしょうか？
ウォーレン・バフェット: そうですね。そして私には何もありませんでした - そしてそれは良い決断だと思いました。妥当な決断だったと思います。
しかし、私の子供たちが多額のお金を寄付する準備ができているとは決して思いませんでした。
私たちは始めていました—スージーと私は彼らと一緒に始めました—私たちは彼らに与えたと思います—私たちは彼らにそれぞれ10万ドルを与えたかもしれません。
ベッキー・クイック: これはこの時点で 30 年前に遡りますか、それともそれ以上ですか?
ウォーレン・バフェット: その通りです。うん。
しかし、彼らは成長期の子供たちでした。ご存知のように、彼らには子供がいました、ご存知のとおり、その時までに彼らには自分の子供がいました。
しかし、それでも、彼らには、その準備ができていなかったように思います。そして私は確かに彼ら全員を平等に扱いたかったのです。したがって、彼らが何かの才能に不平等を持っている場合、それは常に問題になります。
さて、彼ら全員をミュージシャンにすることはできませんし、彼ら全員を野球選手などにすることもできません。
しかし、私は慈善活動の分野で、彼らが共通の目標を持ち、莫大な資金を使って、やりたいことをやることがたくさんあると誰もが感じられる方法を彼らの間で解決できることを心から望んでいました。そして私は—を持っています
ベッキー・クイック: 今日もそうだと思いますか?
ウォーレン・バフェット: 失礼ですか？
ベッキー・クイック: 今日もそうだと思いますか?
ウォーレン・バフェット: その可能性は非常に高いと思います。
そして、今、この計画に何かが起こる可能性はあるでしょうか?もちろん。つまり、私には 72 歳と 71 歳の子供が 3 人いますが、私の年齢から見てもそうです。
つまり、この世界では、あなたを変える、つまり変化させるような出来事が起こる可能性があります。
しかし、私は変わることを期待していません。つまり、私に関する限り、理想的な点に到達しました。
私たちは――蹴ったのです。そうですね、スージーは 2004 年に亡くなったので、私が彼らが毎年受け取る金額を増額することになりました。そして明らかに、彼らもその仕事に満足しています。
つまり、自分が向いていない仕事、またはあなたやあなたの意見とまったく異なる仕事に人を押しつけるのは意味がありません。
つまり、私は世界中の誰よりも尊敬していた父とは異なる人生観を持っていましたが、それでも私が父の教会に加わったわけではありませんし、同じことをしたわけでもありませんでした。そして、彼はその見方を奨励しました。
彼はそうするだろう――彼はエマーソンの言葉を私に引用するだろうが――そこでエマーソンは、あなたの中にある力は本質的に新しいものであるという趣旨のことを言った。彼は、あなたは特別な人間だと言っているのです。それが何であるかを調べてください。
そして、私は幸運と状況、そして私自身のかなり目的のある追求によって、非常に若くしてそれを見つけたと思います。
私の子供たちはそうではありませんでした。彼らは、ほとんどの子供たちと同じように振る舞いました。彼らは、さまざまなアイデアを出し合いました。そして、しかし私は今、彼らがやっているのを見て100パーセント感じています。
私の息子のハワードは、自分が何をしているのか、なぜやっているのか、それにどれくらいの費用がかかるのかを説明した 100 ページほどの報告書を出版したところです。
ベッキー・クイック: ハワード・バフェット財団の年次報告書ですか?
ウォーレン・バフェット: そうですね。そして、それは私が書くことができるよりも優れています。
彼は — 彼 — 彼には管理責任の感覚があり、 — そして彼はまた、彼ほど幸運ではない人々に対して多大な共感を持っています。
ベッキー・クイック: では、20 年前の 2006 年にあなたがこの決断を下したとき、あなたは子供たちよりもゲイツ財団を信頼していましたが、今ではゲイツ財団よりも子供たちを信頼していると言っても過言ではありませんか?
ウォーレン・バフェット: いいえ、金額は違いました。私が彼らを別の意味で信頼していたというわけではありませんが、彼らには対処できる能力があると感じました
そして、私は子供たちに何かを渡してからそれを引き戻すつもりは決してありませんでした。つまり、そして—
そしてゲイツ財団は、彼らが予想していたよりもはるかに多くのお金を稼いでいることが判明しました。彼らは私が思いつく限り、世界中の誰よりも多くのお金を使っています。
ベッキー・クイック: そうだね。彼らは900億ドル以上の寄付金を持っていると思います。
ウォーレン・バフェット: それはほぼその数字であり、ビルは外部に非常に多くのリソースを持っており、彼はそれを提供するつもりであり、私は、彼らがそこに行くだろうと100パーセント信じています。
そして私も、ある意味、ビルと同じことをしてきました。私は、私以外は、それを入れるとき、3人の子供たちに、それは彼らのものであり、それをうまくやり遂げるのは彼らの責任であると言います。
そして、信じられないかもしれませんが、これは本当です。私は彼らが提出するフォーム 990 を一度も見たことがありません。私 — 私は、それぞれの行動をその場で判断しているわけではありません。なぜなら、成功の確率が 10 パーセントか 20 パーセントしかないと考えて行動を起こすからです。投資とは違います。
ベッキー・クイック: でも、お金の目標は何ですか?そして、あなたは子供たちもあなたと同じような目標を持っているとほのめかしました。
ウォーレン・バフェット: それは、あなたが想像できる限り、世界はあらゆる種類の不平等な状況にあります。つまり、健康や出生の幸運、あるいはそのようなことを想像してみてください。そして最終的な目標は、ストローが足りなくなった人々の生活をより良くすることです。
そして、短いストローを手に入れる人々は、私たちが世話できるよりもはるかに多く、そして私の子供たちは特定の分野について私よりも洞察力があるでしょう。そして、私は彼らよりも多くの洞察力を持っています。単に興味や露出の違いだけで彼らよりも優れています。
しかし、私が確信していることの一つは、彼らは何かをしようとしているし、もっと上手になるだろうということです。そして彼らの余命は私よりも長い可能性が高いです。
つまり、70年代くらいになると、それが本当に忍び寄ってきます。
しかし、私はそうしません。世界中で、たとえば 30 歳以下で、それを信頼できる人は思いつきません。
30歳以下でもあらゆる種類の優秀な人材がいると思います。彼らは将来、社会のリーダーになるかもしれませんし、非常に重要な作家になるかもしれません。あるいはそれが何であれ。しかし、さまざまな状況下で人々がどのように行動するかを観察することには何かがあると思います。
ベッキー・クイック: 自分たちのアイデアに資金を提供すべきだと考える人々の長いリストから、子供たちはプレッシャーを受けることになるでしょうし、おそらくすでにそうなっているでしょう。
今日Xでブラッド・ガースナーがトランプのアカウントにお金を寄付すること、他にやるべき素晴らしいことがあるということを示唆する内容を見た。
ここにお金をつぎ込むべきだと言う多くの人々に何と言いますか、あるいは彼らは何を言うべきだと思いますか?
ウォーレン・バフェット: 世界に 80 億人がいて、すべての人に平等なチャンスがあるべきだと思うなら、つまり、全員の問題を解決するために 1,000 ドルや 1 万ドルを費やすことができるでしょう。すべての人の問題を解決することは決してできません。
奉仕するという考え、つまり社会問題を解決するという考えは、私が核兵器を使って始めたものでした。つまり、核兵器に取り組んでいた人は皆、そのようなものをまとめなければならなかったという事実を後悔していました。世界で最も優秀な人々ですが、[魔神]を瓶に戻す方法を決して知りませんでした。
そして、ご存知のとおり、それは、社会が存在してから最初の数億年間、数百万年間の社会には存在しなかったことでした。
ベッキー・クイック: でも、トランプのアカウントのように、それらの計画の中にあなたにとって魅力的なものはありますか?それらは子供たちにアピールすると思いますか？あなたは、それとも子供たちに任せて、「自分が理解する」と言いますか?
ウォーレン・バフェット: それは子供たちに任せます。しかし、私は遺言書にこの条項を持っています。今贈ろうとしているこれらの贈り物ではなく、私の財産の大部分は、たとえ私が増額しているとしても、私の死後に残ることになるでしょう-
ベッキー・クイック: そうだね。昨日の株価終値に基づいて、あなたが残しているクラス A 株に換算すると、現時点で 1,400 億ドルが残っていると言えます。
もし、あなたが今年配ったお金は60億ドルです。
ウォーレン・バフェット: そうですね。上がらなければなりません。
ベッキー・クイック: そうですね、少なくとも年間175億ドルです、そしてそれはバークシャーがここから行かないと仮定した場合です—
ウォーレン・バフェット: そうですね —
ベッキー・クイック: — あなたが言ったように、これを 8 年以内に発行したいのであれば。
ウォーレン・バフェット: — ちなみに、これはひどい仮定です。つまり、それは現実的な仮定ではありません。
ベッキー・クイック: 年間175億ドルを寄付するとは？
ウォーレン・バフェット: いいえ、それは、投資は何も生み出さないということです。
ベッキー・クイック: ああ、そうです。それで —
ウォーレン・バフェット: 私は財務省証券の約 5% を受け取っています。
ベッキー・クイック：そうですね。 2006 年に寄付を始めたとき、あなたの所持金はいくらでしたか?その時点では1,000億ドル未満の話をしていましたよね？
ウォーレン・バフェット: そうですね。うん。
ベッキー・クイック: つまり、あなたは 670 億ドルを寄付しましたが、今日の時点でまだ 1,400 億ドルが寄付できることになります。
ウォーレン・バフェット: それが複利の性質です。
ベッキー・クイック：そうですね。
ウォーレン・バフェット: それは私も理解できることの一つです。 (笑)
他のことはすべて理解できないかもしれませんが、—そして—
ベッキー・クイック: しかし、175億ドルという金額は、仮に増額されなかったとしても、現在誰かが寄付している金額よりも多い金額です。ゲイツ財団は昨年、なんと 80 億ドルを寄付したのですか?
ウォーレン・バフェット: ええ、その通りです。そして—
ベッキー・クイック：それはたくさんありますね。
ウォーレン・バフェット: そして、彼らはそれを実行しました。彼らは、ご存知のように、そのような資金を持っている数千人の人々を雇用してそれを行いました。ほとんどの財団はそうでしょう。
そして、私も、子供たちが、お金を使って他のことをするのではなく、本当にそのお金をあげたがっているという事実に感銘を受けました。それで彼らは—
ベッキー・クイック：自分自身のために使うのではなく、ということですか？
ウォーレン・バフェット: そうですね、建物やその類のものです。
さて、彼らがそうなったとき、彼らは成長するにつれてさらに多くの助けを必要とするでしょう。しかし、私は—私は—財団は中間のものを採用していると思います—現在3つあります—
ベッキー・クイック: そのうちの 4 人は STB (スーザン・トンプソン・バフェット) 財団に所属しています。
ウォーレン・バフェット: そうですね、STB です。
まず子供たちを取り上げましょう。なぜなら、子供たちは自分たちが何をしているかについて完全な決定を下すからです。そして、従業員は 11 人から 25 人で、そして —
ベッキー・クイック: 合計? 3つの基礎の間でしょうか？
ウォーレン・バフェット: いいえ、それぞれです。
ベッキー・クイック：それぞれです。わかりました。
ウォーレン・バフェット: そうですね。そして、それらの経費率は、よりよく知られている機関の経費率をはるかに下回っています。
ベッキー・クイック: 経費率は 1% に近いか、それ以下ですか?
ウォーレン・バフェット: 彼らが示したことは、彼らが示したことは、それを遊びのお金とは考えていないことを示しました。
ベッキー・クイック：そうですね。右。つまり、彼らが手に入れた大部分、ほぼすべてが外に戻ってしまうということです。
ウォーレン・バフェット: そうですね、実際には最終的にはすべてが終わりますが、—
ベッキー・クイック: そうだね。
ウォーレン・バフェット: でも、そうだね、そうだね。彼らは、巨大なオフィスビルを建てたり、難解な場所で会議を開催したりするつもりはありません。
そうするのは何も悪いことではありません。つまり—
しかし重要なことは、必要なものの100倍を持っている人々が、それを次世代に誰かに渡さないかどうかです。そして、世界の多くの地域では何千年もの間、それが行われてきました。
ベッキー・クイック: そうですね、あなたは官僚主義があまり好きではありませんね。バークシャー・ハサウェイは、ここ、このオフィスで、ホームオフィスに 25 人かそこらの人々とともに運営されていました。
ウォーレン・バフェット: 25人です。そしておそらく私たちはさらに成長しました。最後の 2 つまたは 3 つを追加する前に、おそらく 1 対 10 の規模に成長しました。
ベッキー・クイック: うーん。
次に進む前に、ビル・ゲイツはこのことを知っていますか? 3月に私たちがあなたと話したとき、あなたは、これらの疑惑が出始めて以来、彼とは話をしていないと言いました。
彼は先月、つまり6月にこの議会証言を行ったときに同じことを言いました、1月以来あなたとは話をしていないと言いました。
それ以来彼と話しましたか？そして、これは彼にとって驚きでしょうか？
ウォーレン・バフェット: いいえ、いいえ、それは驚くべきことではありません。
そして — そして B)、彼は 3 週間前かわかりませんが、オマハから来ました — それとも — 時間に間に合うかちょっとわからなくなりました — でも確かに、私たちが話してから 3 か月ではなく — 3 か月 — 経ちました。そして、私たちは一緒に3時間話し合って、そして――そして――そして彼は――彼は――私に電話するつもりです。一般的に、電話をかけてくるのは彼です。
そして、ご覧のとおり、いつでも対応できます。 (笑)
しかし — 彼は — 彼は私よりもはるかに組織的です、そして — しかし、彼はすでに別の提案をしていました、そして —
ベッキー・クイック: 別の会議ですか?
ウォーレン・バフェット: そうですね。そして――そして――彼もそうだが――出会って以来、私たちは膨大な数の楽しい時間を一緒に過ごしてきた――それがいつだったか――1991年は何だった？
そして、彼は常に自分の分以上のことを成し遂げてきました。常に自分の分以上のことを行ってきました。私が計画を立てたり、実行したりしているのが見えません。
ベッキー・クイック: 友情という意味ですか?
ウォーレン・バフェット: そうですね。それは、それは、素晴らしい友情でした。
そして、ビルと私は重複する事柄に興味があり、話したいことがたくさん見つかります。そして、私たちそれぞれがある程度自分の専門分野を持っています。
ベッキー・クイック: でも、あなたは彼に 3 回、つまり 3 週間ほど前に会ったときに、ゲイツ財団にはもう寄付しないと言いましたね?
ウォーレン・バフェット: そうですね、私が彼にいつ話したかは正確には言えません。
しかし、しかし、ある時点で、私は議会が提案したものを読んでいました。全部読みますよ。
そして、私に言えるのは、ほら、私はやったことがあるということだけです。私がダンプなことをしたかどうかはわかりませんが、私は人生でたくさんの愚かなことをしてきました。
つまり、私がしなければならないのは、ポートフォリオを確認することだけです。つまり、私が下した決断の 5 つのうち 4 つは、少なくとも 5 つのうち 4 つは、何も異常なことではありませんでした。しかし —
ベッキー・クイック: でも、あなたが彼に言ったとき、彼は大丈夫でした —
ウォーレン・バフェット: そうですね。
ベッキー・クイック: — それは — OK。
ウォーレン・バフェット: そうですね。
ベッキー・クイック: つまり、彼は参加しているんですね。彼にとってこれは何も新しいことではない。
ウォーレン・バフェット: そうですね。
ビルは私と違って、多かれ少なかれ、いつ終わるか、つまり自分が死ぬとき、それを終わらせたいと思っていると思う。もちろん、いつになるかはわかりませんが、
ベッキー・クイック: 彼の財団は？
ウォーレン・バフェット: ゲイツ財団。
一方、私は子供たちが私よりもずっと長生きしてくれることを願っており、3人全員が参加することを願っています。そして、3人全員がそうする方が良いと思います。
でも、それは、自分で決めたわけではなくて、スージーと私が彼らに寄付し始めたとき、おそらく年間 3,000 万ドルに上げたと思います。
ベッキー・クイック: 子どもたちの基盤に？
ウォーレン・バフェット: いいえ、実際には —
ベッキー・クイック：ああ。
ウォーレン・バフェット: — に対して — しかし — 彼らの基盤に対して。正確な数字は全く覚えていない。
しかし、私たちが彼らにそれを与えたのは、彼らが他の人のために何かをする意欲があり、場合によっては、ある意味、熱心であることを99パーセント確信していたときでした。
彼らは良い人生を送ってきました。彼らはしていない — 彼らはしていない —
そう、彼らはずっと前に誰かが私に教えてくれたルールに従ってきましたが、それは私が称賛することですが、私自身は思いつきませんでした。それは、もしあなたが大金持ちの家族の子供なら、何かをするのに十分な量を与えられるべきですが、何もしないのには十分ではないということです。
ベッキー・クイック：そうですね。
ウォーレン・バフェット: そしてそれは、まさにそれが大規模に起こっていることなのですが、しかし、
ベッキー・クイック: ただ—
ウォーレン・バフェット: しかし、私は今、それを強化しなければなりません。なぜなら、私の年齢では、確率が私にとって本当に不利だからです。
つまり、私が最後に書いた遺書は、おそらく私の最後の遺言となるでしょう。私が30歳、40歳、50歳のときに書いていた遺言書は、変わるだろうとわかっていました。
ベッキー・クイック：そうですね。それについて話しましょう。
2. 21:23 - 寄付のペースを加速
ベッキー・クイック: この記事であなたが発表しているもう 1 つのことは、資金が迅速に流出し、株式も迅速に消滅することを望んでいることです。
この時点までは、あなたの死後 10 年が経ち、株式はすべて慈善活動に寄付されると思っていました。
あなたは今、8年後の2034年末までにこれらの株式をすべて払い出したいと言っています。
ウォーレン・バフェット: そうですね。
ベッキー・クイック: え、それについて何があなたの考えを変えたのですか、そしてそれは何を意味しますか？
ウォーレン・バフェット: そうですね、それは確かに、私がすべての慈善活動において、そして特にすべてにおいて、本質的に私のお金の 100 パーセントをバークシャーに費やしたことを意味します。私には 2 つの目的がありました。
ご存知のとおり、これは私の絵です。そして、私はその絵が好きです。それに関わる人々も好きです。そして、それは時間をかけて洗練されてきました。ここに (inaudible) か何かを追加しました。 (笑)
そして、私はそれを引き渡せると信じられる人を米国に 10 人も知らないと思います。わかりません —
ベッキー・クイック: あなたの会社は？自分の会社のことを言ってるの？
ウォーレン・バフェット: 会社です。
ベッキー・クイック：そうですね。
ウォーレン・バフェット: 私は 5 人も知りませんが、たくさんの人を知っています。そして、今私はその人に何を求めているかという点で非常に高い基準を持っています。そして明らかに、私たちは彼をグレッグ・アベルと一緒に見つけました。
そしてそれは日を追うごとに明らかになっていきます。今年になっても、こんなものが追加されているので、
ベッキー・クイック: つまり、あなたがグレッグ・エイベルがそうだと思っている限り、その株式を保有し続ける必要も、家族にその株式に対する議決権を持たせる必要もないと考えているのですね。
ウォーレン・バフェット: 彼が選択です。唯一の疑問は、彼も不死ではないということです。
つまり、人は常にこの死の可能性についての疑問を抱えていますが、誰もそれから逃れることはできません。つまり、それは—
人々は驚くほど健康であることもあれば、そのように見えることもあります - そしてあなたも知っています -
先日誰が亡くなりましたか？彼はそうでしたか —
ベッキー・クイック：リンジー・グラハム。
ウォーレン・バフェット: — 71歳とか？
したがって、幸運から不運まで、非常に多様で変動があります。
そして私は、それが、グレッグとの賭けでした。
私には 10 人のリストはありません。つまり、そうではありません。私には 10 人の子供もいません。しかし、たとえ 3 つのリストを持っていません。
ベッキー・クイック: 会社を誰に任せるかという点では —
ウォーレン・バフェット: そうですね。
ベッキー・クイック: — この時点で？
ウォーレン・バフェット: そうですね。
さて、私には、バークシャー・ハサウェイのコンセプトが好きな監督たちがいます。彼らはそれを続けたいと考えています。
したがって、私はその選択を仲介する適切なグループを持っています。
しかし、世の中、物事が常に完璧にうまくいくとは限りません。
ベッキー・クイック: ということは、あなたの希望は、今から 8 年強、つまり 8 年半後の 2034 年末までに株式が分散されることです。
でも、もしあなたがここにいなくて、子供たちが選択をするのなら、その時点で子供たちの意思決定に任せるだろうと私は思います。
ウォーレン・バフェット: そうですね。そして8年後、ご存知の通り、私の娘は80歳になりますが、81歳に非常に近いです。
ほら、もう一人は70歳になるだろう――
そしてそれは死亡率だけの問題ではありません。ビー玉を保管しておくのも問題です。ご存知の通り、そして—
ベッキー・クイック：（笑）
彼らはあなたがこのように言っているのを聞いたことがありますか？
ウォーレン・バフェット: そうですね、そうですね、つまり、ビー玉が減りつつあるのですが (笑)、この時点では。
必要以上に長い間ビー玉を貯めてきましたが、それはただ運が良かっただけです。
つまり、私は、私たちの会社の多くのマネージャーを見てきましたが、まあ、いくつかの年次報告書で言及したと思いますが、年次総会です。紙人形を切り出す人たちがいて、彼らのアシスタントがそれをカバーしていました。
ベッキー・クイック: わかりました、ただ、この時点で明確にしておきますが、あなたはこれらの決定を下しているときに正しい考えでこれを言っていますよね?
ウォーレン・バフェット: そうだといいですね。 （笑）
でも実際には、私は数年前に遺言書を書いたので、
そして、私は故意にその意志を変更するつもりはありません。つまり、非常に重要な決定を除いて、私はその意志を変更しません。なぜなら、それを書いたときに私がビー玉を持っていたことに疑いの余地はないからです。
3. 25:40 - 家族の基盤
ベッキー・クイック: わかりました、それでは今何が起こっているのか少し話しましょう。なぜなら、これが実際に決定を下しているのは子供たちであるということをあなたは話しましたが、あなたが今発表している発表では、あなたは子供たちそれぞれの基礎、つまり子供たちに与えている金額を約50パーセント増加させました。
ウォーレン・バフェット: そうですね。
ベッキー・クイック: — 去年あなたが彼らにあげたものから。
ウォーレン・バフェット: でも、私はスーザン・トンプソン財団を増やしましたが、でも —
ベッキー・クイック: しかし、実際に寄付するもので大きな利益を得ているのはスーザン・トンプソン・バフェット財団です。
彼らは――彼らは――今年受け取った株の量は昨年の10倍だ。基本的に彼らは、ゲイツ財団に送られるはずだった資金をすべて受け取っているのです。なぜ？
ウォーレン・バフェット: 彼らは――スーザン・トンプソン・バフェット財団に寄付されるはずだった資金をすべて手に入れている――
ベッキー・クイック: — それからいくつか。
ウォーレン・バフェット: — 私の最初の妻が生き残っていたら。
ベッキー・クイック：そうですね。それからいくつか。
ウォーレン・バフェット: そうですね。
ベッキー・クイック: しかし基本的に、彼らが今年受け取ることになる配当金は、彼らが支払える金額で言えば、45億ドルです。これはゲイツ財団が昨年受け取った金額だ。
相対的に見て、なぜ STB 財団が他の 3 つの財団よりも多くの貢献をしているのでしょうか?
誰でももっと多くのお金を受け取ることができますが、なぜその莫大な金額が得られるのでしょうか?
ウォーレン・バフェット: そうですね、SCB財団は、私の妻が設立し、最初の妻が設立したであろうものであり、私はそれを承認していたと思います。
つまり、女性の権利や公民権など、もはや質問ですらないあらゆる種類の質問において、私たちは同じ考えを持っていました。つまり、私たちは同期していたのです。
それが、今の彼女は、みんなの話を聞くことに興味を持ったのです。それはこの世で一番やりたくないことです — (笑) — 私はやりたくないです。
彼女はすべての個人を個人として見ていましたが、同時にグループとしても見ていました。私は彼らをグループとして見ましたが、私にはもっと魅了されたものが他にもありました。
ベッキー・クイック: このお金が流れていきますが、これはあなたがこれから目にすることを期待しているものですか?過去何年もの間、感謝祭で、あなたは 3 人の子供たちの財団に追加の資金を提供しました。
ウォーレン・バフェット: そうですね。
ベッキー・クイック：今年もそれをやるつもりですか？
ウォーレン・バフェット: はい、ほぼ確実にそうするでしょう。しかし、しかし、それとは関係なく、もう一方は続きます。
つまり、私が知っているなら、私はそうすることができます、私は、感謝祭の前に死ぬ可能性が、私の3人の子供の誰よりも、そしておそらく3人全員を合わせた確率よりも高いのです。でも — でも —
しかし、バークシャーの年次報告書で行うのと同じように、私が行動を起こす理由を説明するのも楽しいです。
私は――パートナーのチャーリー・マンガーが持っていた教訓的な性格を持っていますが、私たちにとって――お金はそうではありませんでした――まあ、実際に他の人々に何ができるかという点で、お金は重要でした。
それが私にとって何ができるかは重要ではありませんでした。私は人生において自分自身を否定したことはありません。
ベッキー・クイック: あなたがこれらの決定を下すためにここにいないということが起こった場合、それはあなたが昨年遺言で話した、新しい基盤が作成されるという内容に戻るのでしょうか?
ウォーレン・バフェット: ええ、新しい財団があります —
ベッキー・クイック: それで、3人の子供たちが責任者ですか？
ウォーレン・バフェット: それは、そうあるべきだから、そうあるべきだから、それはわずかな違いがあるからです。 1つは、3人が何をするにしても全会一致で同意することです。
ベッキー・クイック: STB財団や子供たちの財団は、ゲイツ財団に要求されたように今年度中に資金を支出しなければならないのでしょうか、それとも時間をかけて計画を立てることができるものなのでしょうか?
ウォーレン・バフェット: 彼らは知っています - 彼らはそれについての私の意見を知っています、しかし彼らは彼らが望むことをすることができます。しかし、もし彼らの欲求が基本原則から十分に離れている場合、あなたはそれをもう一度見てみましょう、しかしそれは起こりません。
ベッキー・クイック: ウォーレン、あなたは成人してからのほとんどの時間を慈善活動について考えて過ごしてきました。時間の経過とともにあなたの見解はどのように変化しましたか?これで何が起こると思いますか?
Giving Pledge と皆さんが行ったことについて考えます。現時点でのあなたの見通しは何ですか？
ウォーレン・バフェット: そうですね、私が持っている視点は 80 億人の人間の中では、世界で最も幸運な 10 人のうちの 1 人かもしれません。 (笑)
ですから、私は幸運にも健康で 95 歳まで生きてきました。私が幸運だったのは、私に興味を持った分野、そして私に天性の才能があった分野が、たまたまそのような形で報われた分野でした。これほど報われるものはありませんでした。
私は、偉大なヴァイオリン奏者になれていたかもしれませんが、それ以外のことなら何でもできました。
私 — それには私が持っている以上の才能が必要ですが、別の形の才能が必要です。そして、幸運なことに、私はかなり早い段階で、部分的に偶然にも、自分がやりたいと思っていたことに触れることができましたが、それは単なる偶然でした。
もし私の父が配管工だったら、私はそうではなかったでしょう。私は同じような利点を持っていなかったでしょう。
だから私は信じられないほど幸運でした。そして、人生が進むにつれて、一部の人々がどれほど信じられないほど不運であるかを見てきました。
そしてそれは運です。つまり、私たちは、子供たちが幼い頃に、子供たちと事故を起こしました。あらゆる種類のことが起こります。そして、それらは私たちには起こらなかっただけです。
ベッキー・クイック: わかりました、ここにいる間、他のことについていくつか話しましょう。
ウォーレン・バフェット: そうですね。
ベッキー・クイック: 他に言いたいことはありますか?
ウォーレン・バフェット: ただし、それについてもう 1 つ付け加えさせてください。
つまり、王や女王やその他すべての考え、その全体が、あなたが「ケーキを食べさせてあげよう」と言いながら、自分の望むように生きる能力を何千年も受け継いでいくのです — (笑) — 残りの人たちには、それ —
私が世界をデザインするとしたら、それはシステムのあるべき姿ではありません。そして、私にはできません -- 世界のデザインを変えることはできませんが、作ることはできます -- 端を水平にすることはできます。
ベッキー・クイック: それはあなたの妻、アストリッド、そしてあなたの子供たちも同じ価値観を持っていますね?
ウォーレン・バフェット: 100パーセントです。そして、アストリッドについて言及してくれてうれしいです。彼女は、この分野ではあなたが想像できるほど極端だと感じているからです。そして、彼女は実際、スージーや私よりも人生の困難を経験しています。なぜなら、彼女はラトビア人で、ご存知のように、エリス島のボートに乗ってやって来たのですが、そして、自分が誰に割り当てられているのか知りませんでした。養護施設で暮らしたり、いろんなことをしたり。
つまり、出産時の事故は非常に極端なのです。そして、それらの事故を利用して、ばかばかしい立場を正当化する人々を見てきました—（笑）私の見解では。
そして、それが慈善活動を奨励する理由です。
それを義務付けることはできません。それは均等ではありません。それを義務付けたとしても、それは慈善活動ではありません。しかし、人間は、ほとんどの人は、たくさんの良い本能とたくさんのあまり良くない本能の組み合わせです—(笑)—そして私も含めてです。そして—
彼らのより良い本能に訴えるようなことをすると、彼らは反応することがあります。
ベッキー・クイック: ところで、あなたがビル・ゲイツとメリンダ・ゲイツとともにGiving Pledgeを設立したときのあなたの主張は、人々に何かに寄付するよう奨励することであり、自分のお金をどうするかについて人々に指示しようとすることではありませんでした。
ウォーレン・バフェット: その通りです。その通り。そして—
そして、それをいつ行うかも決めます。つまり、100年にわたって家族経営の農場を持っている家族は、ご存知のとおり、家族内ですべてを解決し、すべてを解決してきましたが、資本に対して異なる見方を持つようになるでしょう。
彼らは皆、懸命に働くつもりだが、ただ、ウォール街でオプションを書いているような男とはまったく異なる見解を持つことになるだろう。
ベッキー・クイック: そうだね。
4. 33:45 - バフェット氏、アルファベットへの大規模投資を始めたと語る
ベッキー・クイック: OK、最後に座る機会があったのは 5 月以来かもしれませんが、他に起こったいくつかのことについて話しましょう。
私が最初に思いつくのは、バークシャーがグーグル株で占めている（アルファベットで発展し成長してきた）巨大な地位である。
これを見て、多くの人が「よし、これがグレッグがポートフォリオをどのように変更するかについて示したものだ」と言いました。アルファベットのポジションはどのようにして生まれたのでしょうか？
ウォーレン・バフェット: 私が始めました。
つまり、通常はそのようなことについては答えませんが、答えます。なぜなら、私たちは、彼が認めていないことは何もしていないからです。彼は私が認めないことをしているわけではありません。私たちはいつも話しています。
彼は、そうです、彼は、つまり、毎日です。そして、そして、しかしそれは、彼が決定者だ。
アルファベットやグーグルに話を戻すと、おそらく5位か6位だろう。
ベッキー・クイック: そうですね、それに伴う100億ドルの私募を考慮すると、310億ドルを超えることになるので、3番目だと思いました。
ウォーレン・バフェット: ええ、でも、私たちには、バーリントン・ノーザン鉄道があります。
ベッキー・クイック: わかりました。
ウォーレン・バフェット: — それよりもはるかにお金の価値があるのは確かです。
ベッキー・クイック: わかりました。それでは、完全所有会社を数えているのですね。
ウォーレン・バフェット：その通りです。つまり、私たちは常に、有価証券を買うか会社を買うかの選択をしているのです。私たちは彼らを同じように見ています。
それにはいくつかの小さな例外があります。それはできません。たとえば、当社が株式を所有していなければ、配当ポリシーを設定することはできません。
しかし、それらの可能性は重要です。重要なことは、良いビジネスを適切な条件で買収し、適切な人材に経営してもらうことです。
ベッキー・クイック: わかりましたが、アルファベットへの 300 億ドル以上の投資を急速に成長させましたね。つまり、あなたが一部を所有している企業という観点から言えば、Apple と —
ウォーレン・バフェット: アメリカン・エキスプレスです。
ベッキー・クイック: それとアメリカン・エキスプレスですね。つまり、コカ・コーラは小さくなるでしょう。バンク・オブ・アメリカはもっと小さくなるだろう。
ウォーレン・バフェット: そうですね、それは――ある意味近いところにあります、そして――それは――
しかし — しかし、私たちが所有してきたコカ・コーラを例に取ってみると、それが何であれ、45 年間にわたって所有されてきました — ご存知のように、私たち — 私たちはそのビジネスの運営とは何の関係もありません、そして — しかし、それは非常に良いビジネスです。
そして、私が非常に優れたビジネスと言うとき、私は長期にわたって所有し、高い資本収益率を得ることが期待できるものを意味します。
さて問題は、あなたが Google に参入するとき、あるいは他の AI 企業に参入するとき、巨額の資金を投じることになるのかということです。そして私は巨額の資金を国債に投資し、そこからの支払いとして年間20億ドル、300億ドル、あるいは10億ドルを得ることができます。
したがって、優れたビジネスとは、本質的にリスクのない投資（財務省と定義できる）から、より多くの収益をあげ、さらにその収益をさらに上回る収益を上げ続ける見込みがある企業のことです。
しかし、アメリカン・エキスプレスのような企業を例にとると、ほとんどの銀行は自己資本で 13 ～ 14 パーセントの利益を得ています。
もし私が全員に、American Express が何になるかを推測するように頼んだら、彼らは、そうするでしょう、そうするでしょう、彼らは同様の数字を思いつくでしょう。しかし、資本利益が 30 パーセント以上であり、その際に 13 ～ 14 パーセントの利益を得る銀行よりも大きなリスクを負わないという点では大きく異なります。
そして、人生の秘訣は、つまり投資において、長期にわたって高い資本収益率を獲得できるビジネスを見つけることです。
そして、それがバークシャーで長期間にわたって起こったことです。
その後のダブルは非常に大きな数字になるため、長期間が非常に重要になります。
しかし、チャーリー、チャーリー・マンガーは、何十年もの間、私のパートナーでしたが、セクシーなことをやっているからといって、それが良いビジネスではないという考えをただ抱いていました。
しかし、実際に現金を稼いでいない場合、あるいは非常に短期間でそれが期待されており、その気になればそれを分配できるのであれば、さらに良いのは、それをビジネスとして再雇用できれば、高い利益を得る能力を持っているが、その利益の余剰資本を投資することはできない。
ベッキー・クイック: OK、ちょっと聞いてみましょう。
人々はあなたのことを、テクノロジーに投資しない人だとずっと考えてきました。ところで、あなたは自分自身をテクノロジーには投資しない人間だと言いましたね。
明らかに、バークシャーのポートフォリオで最大のポジションは Apple であり、これはあなたがつけたポジションです。しかし、当時はそれを消費者企業と呼んでいました。
Google、あなたは今 AI 企業に電話をかけました。それで何が起こったのでしょうか？
ウォーレン・バフェット: Google — Google とその競合他社すべてが今、本当の疑問を抱いています。なぜなら、彼らはすべて数千億ドルを投資しているからです。つまり、彼らは—
ベッキー・クイック: 彼らは多額の設備投資を行っています。
ウォーレン・バフェット: つまり、彼らは――そして、そう――そしてそれも――そしてそれは本物のお金なのです。
つまり、もし私たちの鉄道が 3 億、あるいは 10 億、あるいは 2,000 億を投資したとしても、そのような資金は鉄道事業の開発にさえ投入されませんでした。
それで、そして、そして彼らは、それが彼らが今プレイしているゲームなのです。彼らはそのゲームをコンピューター ソフトウェアを使ってプレイしていたわけではありません。
ベッキー・クイック: いいえ、ですから、資産が軽いときは、あなたはそれらを好まなかったのですが、市場はそれらを愛していました。今では彼らは—
ウォーレン・バフェット: 私は間違いを犯しました。
ベッキー・クイック: — 設備投資に多額の費用を費やしているが、多くの株主はそれをあまり好まない。
ウォーレン・バフェット: 彼らの実績に基づくと、ウォール街を通じて商品化されるもののおそらく 90 パーセントか 95 パーセントよりも、彼らが勝者になる可能性が高いと思います。なぜなら、ウォール街は彼らが何かを販売できるかどうかだけに興味があるからです。
そして、企業が実際に稼いでいる内部収益率について深く掘り下げたウォール街のレポートを私は思い出せない。それは、企業の収益よりも重要なことは何でしょうか?
しかし、彼らは次の四半期に何が起こるかについてこのような質問をします。あるいは、それはただの馬鹿げています。
しかし、ご存知のとおり、投資は — 思いつく —
おそらく、最も成功した長期投資家に近いのはロックフェラーでしょう。そして、石油とガスが 150 年間、つまり数百年間にわたって何をしてきたかを見てください。
それで彼は非常に良いレートで複利を続けました。 GEICO が初期に達成したであろうような高い率ではありません。なぜなら、小さいときのほうが簡単だからです。
大人になってからそれをやるということは、全世界があなたに注目し、その方法を理解しようとしているということです（笑）、どうやって、どうしてあの人たちはやっていて、私たちがやらないのですか？
ベッキー・クイック: 他の何よりも Alphabet が好きなのはなぜですか、またこのポジションに就いた理由は何ですか?ユリイカの瞬間は何でしたか？
ウォーレン・バフェット: 私は、私たちが所有する他の少なくとも 4 ～ 5 つの事業と同様に、この事業が好きではないと思います。
ベッキー・クイック: Apple 以外では、鉄道は?
ウォーレン・バフェット: そうですね —
ベッキー・クイック：アメリカン・エキスプレス？
ウォーレン・バフェット: 私からポートフォリオ全体を引き出すつもりはないでしょう — (笑) — でも — そしてもちろん —
ベッキー・クイック: でも、あなたはそれがとても気に入っているので、それが大きな地位を占めることになります。
ウォーレン・バフェット: 私はバークシャーのそういうところが好きです。つまり、バークシャーは、レバレッジのトリックやその種のことを使用することについては話していませんが、私はそのようなことを一切せずに、高い資本利益率を獲得しました。
ベッキー・クイック: でも、私が話しているのは、なぜアルファベットと他のマグニフィセント・セブン、あるいはもう一方のハイパースケーラーが同じことをして多額の資金をつぎ込んでいるのか、ということについてです。
ウォーレン・バフェット: そうですね。
ベッキー・クイック: — アマゾン、マイクロソフト、誰であろうと — AI のこの立場で勝とうとしているでしょうか?
ウォーレン・バフェット: そうですね。まあ、私は他の人をノックして座っているつもりはありません。彼らには選択の余地がありません。ご存知の通り—
ベッキー・クイック：こんなふうに過ごすってこと？
ウォーレン・バフェット: そうですね。彼らは今、多くの場合、あるいは場合によっては、やりたくないゲームをプレイしているゲームをプレイしている。
IBM が 30 年代、40 年代、50 年代、60 年代にプレイしていたゲームをそのままプレイし続けてくれたら、IBM は喜んでいたでしょう。そして、誰かがやって来て、「私たちはあなたにとってより良い結果をもたらし、あなたが抱えているすべての顧客の目標を達成します。なぜなら、あなたが得られるのはそれだけだからです」と言いました。時間の経過とともに、幸せな顧客がいるか、顧客がいないかのどちらかです。そして顧客もバカではありません。
ウォール街は非常に愚かである可能性がありますが、彼らに関して言えば、彼らは夢を見ることができます。しかし、食料品店を経営する男には夢がありません。つまり、私は祖父の食料品店で働いていましたが、私たちは、1869 年には 1 店舗、1969 年にも 1 店舗がありましたが、(笑)、そして、他の人々が高い資本収益率を稼いでおり、中には国家規模のものも見ました。 A&P という会社は、もう人々は関係がありませんが、1930 年代、彼らは、ワシントンにおける信用破壊者のナンバーワンであり、敵のナンバーワンでした。そして彼らは、とても、とても、とても良いハンドを持っていましたが、そのハンドは消えてしまいました。
ベッキー・クイック: それは別のゲームということですね。
ウォーレン・バフェット: そうですね。
ベッキー・クイック: それで、このゲームは好きですか?彼らが以前プレイしていたゲームよりも、このゲームの方が理解できましたか?それはあなたが言っていることですか？
ウォーレン・バフェット: そうですね、私には理解できないゲームがたくさんあります。もちろん。
ベッキー・クイック: そうだね。しかしこのゲームは――
ウォーレン・バフェット: なぜ、理解できないあらゆる種類のことでお金が儲かると期待しなければならないのでしょうか?そして—
ベッキー・クイック: でも、それが私が言いたいことなんです。現時点でこのゲームについて何を理解していますか?なぜなら、ほとんどの人は彼がハイテク株を決して買うつもりはないと言うでしょうし、あなた自身も過去に同じことを言ったと思います。
ウォーレン・バフェット: ああ、でもやりました。そして実際、1958 年に遡ると、私が関わった最も成功した企業の 1 つです。
ベッキー・クイック：そうですね。
ウォーレン・バフェット: 私たちは Data Documents という会社を設立しました。私たちが Data Documents を始めたのは、IBM が売却によって独占禁止法訴訟を解決したと数人の友人が新聞で読んだためです。彼らは、最も優れたビジネスの能力の 50 パーセントを売却しなければなりませんでした。そして誰もが、それが自分にとって最高のビジネスであることを知っていました。
さて、たまたまそれが 10 年か 15 年後に足りなくなったのですが、私はそれを枯渇させた何人かの人々を知っていました。
しかし、素晴らしいビジネスを行っている場合は、攻撃を受ける可能性があります。つまり、あなたにとって、昨日が素晴らしかったかどうかは問題ではありません。それは――それは――問題は、いつまで素晴らしい状態が続くのかということだ。
ベッキー・クイック: でも、それが私が愛していることだと思うんです。人々はあなたを分類して、あなたが誰で何をしているのか知っていると言おうとするかもしれません。私には、あなたは 95 歳で、来月には 96 歳になりますが、まだ変化し、試合を追っているように見えます。
ウォーレン・バフェット：そうですね、でも、私にとってはその方が簡単です—誰かが現れた方が—私はただ、彼らが現れて、競合他社が何百人も忍び込んで—夜の工場に—どのようにして—正確にすべてをやり遂げたのかを確認するような何かを行うよりも、より予測価値のある、より良いキャンディーが何かを考えようとしているところです。
5. 45:48 – Appleは手強い競争相手に直面する
ベッキー・クイック: あなたの最大の立場である Apple について話しましょう。
あなたはティム・クックが成し遂げたことすべてに興奮していると私たちに言いました。現時点であなたが（次期CEOの）ジョン・ターナスのことをどの程度知っているのか、あるいは会社が何をしていると考えているのかはわかりません。
あなたは今でも Apple をとても信頼していますか？
ウォーレン・バフェット: そうですね、私は、彼らがティムに取って代わるような動きはありませんでした。私が望むような動きはありませんでした。 (笑)
つまり、もし誰かがあなたのためにヴァイオリンを弾いてくれるストラディバリウスを手に入れたとしたら、それはやめてください。次の 300 年を次のヴァイオリンを探すのに費やさないでください。つまり、あなたはすでに持っています。
そして、そしてもちろん、ウォール街は、彼らの話を聞けば、彼らは他の誰も持っていない何かを持っているということをあなたに納得させるという考えで繁栄しています。まあ、それは真実ではありません。つまり、それはばかげています。
しかし、それがうまくいくのは、一般的に、アメリカが資金を投資するのに素晴らしい場所だからです。そして、ダウ工業株30種は、私が初めて株を買ったとき、ちょうど100ドルを超えたばかりでした――100ドル――今では5万2000ドルかそこらです――そしてその間のあらゆる種類の配当金がもらえます。
まあ、つまり、村の愚か者は（笑）、その時点からうまくやっていくことができたでしょう。そして、私は正しいゲームに参加できました。
もし私が小麦の投機に関わっていたら、つまり小麦はもうなくなってしまったのです。200年の間に小麦は3ドルから5ドルになったのか、それとも何かになったのかわかりません。そして、それは、とても美しいもので、非常に単純なビジネスです。それが単純であること、そしてそれを複雑にすると、可能性があり、可能性があることを覚えていれば、それはただクレイジーです。その時点であなたはギャンブルをしています。
ベッキー・クイック: でも、あなたは今でも Apple が好きですか?
ウォーレン・バフェット: そして人々、ギャンブルに対する人々の熱意は非常に大きいです。
ベッキー・クイック: それについて話しましたね —
ウォーレン・バフェット: そうですね。
ベッキー・クイック: — ここ何年も、おそらくコロナ以来。
でも、あなたはまだ Apple が好きですか?要点に戻ります。
ウォーレン・バフェット: そうですね。
ベッキー・クイック: そうだね。
ウォーレン・バフェット: そうですね。
そして、私は何年も前よりも Apple についてよく知っています。しかしその一方で、もしあなたが、もしあなたが Apple なら、世界中の非常に賢い人々が、Apple の将来を確実にする方法を模索し、模索しているとしたら、未来は過去ほど明るくないのです。
そして、自動車会社を見てください。つまり、ヘンリー・フォードは 30 年間、つまり 20 年か 25 年間にわたって自動車ビジネスを所有していました。そして彼は、信じられないほど残酷に統合しました。彼はコストを削減しました。彼はモデル T の価格を 285 ドルまで下げたと思います。そして彼は常に賃金を上げながら価格を下げていました。
ベッキー・クイック：そうですね。
ウォーレン・バフェット: それで、彼はそうだった - 彼はそうだった - しかし、彼はある意味で少し頭がおかしい人でもあり、そして - そしてそれがついに彼を受け入れた - 彼がモデル A に乗り換えたとき、ちょうどゼネラルモーターズがレースでやって来たとき。
そして、私の友人のチャーリー・マンガーは、ゼネラル・モーターズこそが支配的な会社になるだろうと考えていました。彼らのディーラー艦隊と彼らが彼らのために行っているすべてのものを攻撃することを誰が想像できたでしょうか？そして — そして — ご存知の通り。
あなたはいつも誰かに撃たれています。
ベッキー・クイック: その時点で、Apple はちょうど先週の金曜日の夜、つまりつい先週のことですが、OpenAI に対して訴訟を起こし、基本的に OpenAI が企業秘密を盗もうとしていると非難しました。
ウォーレン・バフェット: ほとんどだと思いますが、ほとんどの企業は企業秘密を盗もうとするでしょう。彼らは捕まるのが嫌いでしょう。
しかし、本当にマネージャーの心を深く掘り下げることができれば、彼らは秘密を盗みたいと思っています。 （笑）
そうじゃないですか？つまり、あなたがビジネスをしていて、自分が苦労していて、隣の男が金を稼いでいるとしたら？
私は 20 代前半の頃、オマハの 30 番地にあるシンクレア給油所とレディックに半分興味を持っていました。ビジネス スクールに通っていたので、これらすべてのことは知っていました。隣の男はフィリップスステーションを持っていて、彼は月に30,000バレル、つまり30,000ガロンを汲み上げていました、そして私たちは月に15,000ガロンを汲み上げていました。
それで私は、この男を地球上から一掃するつもりだと言いました。そして数年後、私たちは 15,000 個、彼は 30,000 個を販売していましたが、私たちは諦めて閉店しました。そして彼はまだ活動していると思います。
それは、人々がビジネスを続けるために遊んでいるということです。
6. 50:40 - IRS、税金をめぐってコカ・コーラを訴訟
ベッキー・クイック: そうだね。
私たちは、あなたが 45 年以上にわたって務めてきたコカ・コーラについて簡単に話しました。
大規模な訴訟が起きている —
ウォーレン・バフェット: そうですね。
ベッキー・クイック: — 政府が行動を検討できたのは、1996 年のコカ・コーラまで遡ると思います。政府、つまり IRS は、彼らに義務があると述べています
ウォーレン・バフェット: はい、20歳です —
ベッキー・クイック: ざっと200億ドルですね。
ウォーレン・バフェット: ええ、彼らはその代金を支払いました —
ベッキー・クイック: 彼らは100億ドル相当をつぎ込んだと思います —
ウォーレン・バフェット: 彼らは100億近くの預金をしました。
ベッキー・クイック: しかし、私たちは――この活動が海外に関連しているかどうか、つまり彼らの海外事業に関連しているかどうかについて聞くつもりです――行きつ戻りつする会計処理のほんの一部にすぎません。
コカ・コーラは、どのように行動すべきかについて、1996年に有効な合意があったと考えていたと述べている。政府は今、さらなる資金を求めているが、そうではないと言っている。
ただし、これに乗っているのはコカ・コーラだけではありません。同じようなことをやっているアメリカの企業は他にもたくさんあります。
ウォーレン・バフェット: そうですね、膨大な数です。だからこそ、この訴訟の派生的影響はアメリカ史上最大になる可能性があります。
ベッキー・クイック: これについてどう思いますか?そして、あなたがコカ・コーラの株主、コカ・コーラの大株主であることを理解した上で、より多くの資金を調達する方法を探していたあまりにも熱心な政府だったのでしょうか？この会社は業績が悪かったのでしょうか、それとも態度が悪かったのでしょうか?
ウォーレン・バフェット: 私は — ご存知のように — 私はその戦いに犬を連れているので、 — (笑)。
ベッキー・クイック: つまり、そうしたくないのですね —
ウォーレン・バフェット: いや、だから裁判所があるのです。
ベッキー・クイック: そうだね。それで、何が起こるかを待ってください。
ウォーレン・バフェット: そうですね。いいえ —
ベッキー・クイック: 注意深く観察していると思いますか?
ウォーレン・バフェット: そうですね。
追加のお金を払っても、バークシャーが潰れる可能性があるのと同じように、コカ・コーラも潰れません。つまり、私は、マイナス面についてだけ考えています。上昇面は自然に解決します。
ベッキー・クイック：そうですね。
7. 52:25 – ケビン・ウォーシュ新FRB議長は「最善を尽くす」
ベッキー・クイック: また、ケビン・ウォーシュという新しいFOMC議長が就任し、今週は経済情勢を視察する予定です。彼は議会の前で、あるいは議会の前で演説する予定だ。
同氏が市場をどうするのか、金利をどうするのか、そしてそれが市場にとって何を意味するのか、多くの疑問がある。
あなたは過去に、金利がいかに重力であり、金利が株価の方向性を決定するかについて話しました。
ウォーレン・バフェット: そうですね。
ベッキー・クイック: それで、何が起こると思いますか?何を賭けていますか？
ウォーレン・バフェット: 彼が何をするか分かりませんが、私はそう言いたいです - その仕事はとても複雑です。先日、彼は、エコノミストが 950 人いるのに、10 人程度しか使えないと発言したと思います。
私は彼がその仕事を引き受けたことを尊敬している。彼は自分に割り当てられた仕事、つまり最大雇用を維持しながら2％のインフレを達成するために最善を尽くすだろうと思います。
そして、私の推測では、それは、すべてではありませんが、彼の以前の他の作家の一部と同じように、しかし彼は毎朝それを読んでいたということです。つまり—
ベッキー・クイック: FRBの二重の使命。
ウォーレン・バフェット: 二重の使命です。
そして彼は、それを完璧にこなすことはできないことを知っています。そして、私が知っているように、私は人々のお金を受け取り、それから大きな利益を得るのを完璧にすることはできませんでした。
しかし、私の推測では、私が自分たちのお金がどうなるかを心配しているという人々の認識は正しかったのです。そして私は――ウォーシュはそう言いたい――彼はこの国のことを気にかけている。
ベッキー・クイック: わかりました。
ウォーレン・バフェット: そして、それはかなり多くの人に当てはまったと思います。彼らの決断が常に素晴らしいというわけではありませんが、その決断が非常に難しい場合があるからです。つまり、ポール・ボルカーが常にあなたに殺害の脅迫を知らせていることを想像してみてください。
そして、自分たちが実際よりも多くのことを知っていると思っている人もいます。
ベッキー・クイック: でも、あなたはケビンが多くのことを知っていると思っていますし、実際には—
ウォーレン・バフェット: 彼は非常に――そうですね――良い選択だったと思います。
ベッキー・クイック: わかりました。
ウォーレン・バフェット: それはおそらく大統領が激怒することを意味します。 (笑)
将来の大統領は次の選挙を見据えているのに、彼は次の選挙を見据えるべきではないので、将来の大統領は彼に怒るだろう。
ベッキー・クイック：そうですね。
8. 54:42 - 「誰もがギャンブルを好む中、価値観を見つけるのは難しい」
ベッキー・クイック: もちろん、あなたは、市場がどのような方向に向かうかについて、いかなる時点においても積極的に発言することはありません。
ウォーレン・バフェット: いいえ。
ベッキー・クイック: でも、あなたは市場の動向や、自分にとって何が意味があり何が意味が無いかについて意見を述べていますね。
AI の活用がこれほど進んでいる今、市場は意味があると思いますか?
収益は非常に好調です。消費者はこの点にこだわっているようです。しかし、それをどう見ますか？
ウォーレン・バフェット: そうですね、あると思います — チャンスがあまりにも早く自分に投げ込まれ、どうすることもできないときがあります — ご存知のように — それは信じられないほどです。
また、数年のうちに何かを見つけたら、とてもとても幸運なときもあります。
そして、そして、常にそうであるべきです。後者が優先されます。
しかし、人間はギャンブルが大好きなので、実際には投資家を育成するよりもギャンブラーを育成するほうがより多くの資金が投入されます。
もし、誰かがバークシャーを40年前に買っていたら、ご存知のように、50年前なら、一人の人が1回の手数料を稼いだでしょう。 (笑)
そして、彼は残りの時間をクライアントに「何もしないでください」と言うことに費やす必要があります。
そして、それは決して方法ではありません。私たちは人間にそれを期待することはできません。
しかし、時々、他の人よりもはるかに優れた行動をする人を見つけることがあります。
ベッキー・クイック: とはいえ、価値観を見つけたり、安価な機会を見つけたりすることの方が難しいのは当然です —
ウォーレン・バフェット: それは、誰もがギャンブルを好む中、価値観を見つけるのは難しいことです。
ベッキー・クイック: そうだね。
ウォーレン・バフェット: そして、州の立場からすると — 私たちはこれについて議論したかもしれません — しかし、州の立場からすると、それは—道路や学校など、あらゆる種類のものにお金が必要なので、ある種うんざりします、そして彼らは希望だけを購入している人々を切り取ることができ、彼らに配当金、60パーセントなどの配当性向の何かを販売することができることがわかりました、そして—そして彼らがそれをしていないなら、彼らは所得税が高くなります。
ベッキー・クイック：そうですね。
ウォーレン・バフェット: それは皮肉な種類の活動です。そして、統治機関と、そして国民の間で、政府との間で冷笑的になることが少なくなればなるほど、あなた方はそれを望んでいませんが、人々が自分たちのシステムについて冷笑的になることを望まないのです。
でも、システムが「これが私がやろうとしていることだから、好きなだけ皮肉っぽくなってください」と言うときもあります。 （笑）
9. 57:06 – バフェットはグレッグ・アベルを大いに信頼しています
ベッキー・クイック: 早速話を戻しますが、あなたはこれについて触れましたが、あなたが今後 8 年間にわたって株式の譲渡を望む理由の 1 つは、子供たちにこれらの決定を下してもらいたいからです。
しかし、もう 1 つの部分は、グレッグを信頼しているため、バークシャーのこれらの議決権株を必ずしも長期間保持する必要があるとは感じていないということです。
ウォーレン・バフェット: ええ、その通りです。
そして、もし私たちがそうでなかったとしたら、もし私たちが信仰を持っていなかったとしたら、私がここにいる理由の一部は、私たちが誰もに対して十分な信仰を持っていなかったからです。そして、私たちはあらゆる種類の人々を知っていました。でも、もしあなたがトム・マーフィーについて話しているなら、私がトム・マーフィーを雇うことができたら――
しかし問題は、彼らが全員年上で、私の友達も皆かなり年上だったということです。だから私は、私は、しませんでした。
私が大学生だったわけではなく、誰が本当にそれを持っているかがわかりました、誰がベビーベッドシートに—(笑)—肩に—靴の袖口に—答えを書いていました。
ベッキー・クイック: でも、あなたはグレッグに対してそう感じているんですね。
ウォーレン・バフェット: 私は、100パーセントそう感じています。
ベッキー・クイック: そうだね。
ウォーレン・バフェット: そうですね。私は彼を多くの状況、つまり多くの状況で見てきました。
チャーリーに対してもそう感じました。トム・マーフィーに対してもそう感じました。つまり—
しかし、ご存知のように、誰も、あなたが 25 人の夫を選んで全員がうまくいくようにすることを期待していません。 (笑)
そして、それを見つけるだけでもかなり難しい、つまり、それが正しい種類です。
ベッキー・クイック: そうだね。
ウォーレン・バフェット: そして、間違いを犯します。
10. 58:44 - バフェットが足を骨折
ベッキー・クイック: ウォーレン、今日の気分はどうですか?
ウォーレン・バフェット: そうですね、私は — ご存知のように — 足を骨折しました — (笑) —
ベッキー・クイック: 何が起こったのですか?
ウォーレン・バフェット: — 数週間前。つまり、実際のところ、ご存知のように、私はそのような点では非常に幸運でした。
私はこれまでの人生で足を骨折したことがありません。 (笑)
でも、でも、私は、気分がいいです。生まれてよかったです。
ベッキー・クイック: そうだね。
ウォーレン・バフェット: そして、私は他の国に生まれなくてよかったと思います。そして最初は、自分が女性に生まれなくてよかったと思いました。そして、つまり、あらゆる種類のことです。
つまり、私は、カミングアウトしたときに本当に宝くじに当たりました。
また、生涯、そしてその後 5 世代にわたって面倒を見てくれる信託基金が設定されていれば、宝くじに当たったと考える人もいます。
しかし、でも、私はそのように育てられなかっただけで、そうでなくて良かったと思いますし、私が子供たちをそのように育てていないのですが、もっと重要なのは、スージーが子供たちをそのように育てなかったことです。
ベッキー・クイック：素晴らしいですね。さて、今日はお時間をいただきありがとうございました。
ウォーレン・バフェット: そうですね、ありがとうございます。
ベッキー・クイック: ありがとうございます。
ウォーレン・バフェット: そして、私たちはビジネスに興味があります。 （笑）
ベッキー・クイック: ありがとう。
インターネット上のバフェットとバークシャー
一部のリンクには購読が必要な場合があります。
- Yahoo Finance ビデオ: 誰もがすぐにお金が欲しいと思っています。ウォーレン・バフェット氏は、それが問題だと述べています。
バークシャー株式時計
4週間
12ヶ月
BRK.A 株価: $736,000.00
BRK.B株価：490.91ドル
BRK.B PER (TTM): 14.61
バークシャーの時価総額: 1,058,643,311,348ドル
3月31日時点のバークシャーキャッシュ：3,974億ドル（12月31日比6.5％増）
鉄道現金と未払国庫短期証券を除く：3,802億ドル（12月31日から3.0％増加）
バークシャーは2026年第1四半期に2億3400万ドルの自社株を買い戻した。
バークシャーのトップ株式保有 - 2026 年 7 月 17 日
最新の終値に基づいた、米国および日本の公開株式の時価ベースでのバークシャーの保有高上位。
保有資産は、2026年5月15日のバークシャー・ハサウェイの13階提出書類で報告されているように、2026年3月31日現在である。ただし、以下の場合を除く。
- アルファベットには、2026年6月1日に発表されたように、バークシャーが同社から直接購入することに同意した100億ドルの株式が含まれる。バークシャーは、取引が完了したかどうかをまだ正式に明らかにしていない。エントリーはクラス A とクラス C のアルファベット株式の組み合わせです。市場価格は、2 つのクラスの価格の加重平均です。
- 三菱、2026 年 4 月 30 日現在
保有銘柄と現在の市場価値の完全なリストは、CNBC.com のバークシャー・ハサウェイ ポートフォリオ トラッカーから入手できます。
質問またはコメント
ニュースレターに関するご質問やご意見は、alex.crippen@nbcuni.com までお送りください。 （申し訳ありませんが、バフェット氏自身に質問やコメントを転送することはありません。）
このニュースレターをまだ購読していない場合は、ここから登録できます。
また、バフェット氏が株主に宛てた年次書簡も強くお勧めします。ここバークシャーのウェブサイトに集められています。
-- アレックス・クリッペン、ウォーレン・バフェット・ウォッチ編集者`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/18/two-unexpected-revelations-in-warren-buffetts-cnbc-interview.html",
    publishedAt: "2026-07-18T14:53:36+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 10,
  },
  {
    id: "why-dana-white-thinks-much-more-of-ufc-s-2a959a6e",
    title: "Why Dana White thinks much more of UFC's future will be Power Slap and boxing",
    titleJa: "デイナ・ホワイトがUFCの将来はパワースラップとボクシングだと考えている理由",
    summaryJa: "UFCの社長兼最高経営責任者（CEO）のダナ・ホワイトは、ニューヨークで開催されたゲームプランカンファレンスで、パワースラップが主力格闘技と同じくらい大きなものになるかもしれないと予測した。",
    bodyOriginal: `Mixed martial arts has seen an unprecedented rise in popularity in recent years as the UFC has taken off. And, according to UFC President and CEO Dana White, it might not be the last fighting sport to do so.
"[Power Slap] could be just as big as the UFC," White told Andrew Ross Sorkin at the CNBC Sport x Boardroom Game Plan Summit on Thursday in New York City.
"When you look at the numbers, we have like the most viewed YouTube short ever in sports on Power Slap, the most viewed ever in sports on TikTok, and the numbers are just astronomical on what we pull on this thing," he said. "And it's global. It's already a global business."
Power Slap, for those who may have missed the infamously-brutal viral clips, consists of two competitors standing over a table in the middle of a padded stage, dishing out full-force, open-palmed slaps to one another until one person cannot physically recover. The mix of fighting and shock entertainment has captivated viewer attention, and White's bullishness surrounding its rising popularity isn't just talk.
According to the social media analytics platform Socialpruf, Power Slap has racked up 1.88 billion impressions over the past year, with its posts garnering nearly 40 million likes and $48 million in earned media value.
Many high-profile sponsors have capitalized on this wave of popularity, jumping at the chance to throw their names into the mix of flying flat-palms. Anheuser-Busch, Monster Energy, VeChain, Circa Sports, and 500 Casino are among the many brands that have bought into White's vision for the sport to this point.
"I thought sponsorship was going to be tough," White noted. "[Power Slap] has more sponsors [in its first two years] than the UFC had in 10 years."
Finding participants willing to take the beatdowns seen on a regular basis in the Power Slap world might seem harder than finding advertisers. In going about this odd sort of talent acquisition, White emphasized toughness, grit, and a high pain tolerance as weighty considerations.
"There are tens to hundreds of thousands of people who wrestle all over the world every weekend. They'll jump off a step ladder onto a table full of tacks for $50 a night," he said. "These are the guys that I'm going after."
What makes slap-boxing so successful? Two things, White says, that can be applied across any successful sport: "You need to have a great live event, and it needs to be good on television."
But as Power Slap's main viewership growth comes in the form of short-form videos posted onto social media rather than conventional live televised broadcasting, White gave particular emphasis to the latter factor.
That is also how White intially caught a glimpse of the sport.
"In 2017 and 2018, this stuff starts popping up on my social media," he said. "Everything that I do in the fight business is done by gut, and the fact that I would watch it and want to see who won, I said this is interesting."
White said as he dove deeper into it, he saw how many views slap-boxing was getting, which he said were "equivalent to like a Justin Bieber video at that time" on YouTube.
That led him to pitch the Fertitta brothers, who had exited their stake in the UFC, on investing in the business, which was launched in 2022.
White is also leading an investment into the boxing business called Zuffa Boxing, which aims to apply the same centralized model that UFC has followed.
Holding its first event in January, White said that Zuffa Boxing is a better short term bet than Power Slap, due to the fact, White said, that "boxing has been broken for a long time."
"We've been at it six months now, and it makes sense why it's broken," he said. "All these promoters that I'm competing with, they're really bad at what they do ... it's a lot more unsophisticated than I expected."
White said that the "boxing business has always been economically incredible," with fights and cards can generate large sums of money. But he added, "Every time they put on a fight, it's like a going-out-of-business sale," he said.
Zuffa Boxing — as well as the other fighting properties White is leading — aims to put that money back in the hands of fighters.
"It just gets better and better," White said of the economics for fighters. "First of all, these guys in Power Slap were slapping for free when I bought the companies. Now they get paid very well. As far as UFC fighters, the pay has gone up literally like this since we bought the business," making a straight upwards movement with his hands.`,
    bodyJa: `UFCの隆盛に伴い、近年総合格闘技の人気は前例のないほど高まっています。そして、UFCの社長兼最高経営責任者（CEO）のデイナ・ホワイト氏によると、これが最後の格闘技ではないかもしれないという。
「（パワースラップは）UFCと同じくらい大きな規模になる可能性がある」とホワイトは木曜日にニューヨーク市で開催されたCNBCスポーツ×ボードルームゲームプランサミットでアンドリュー・ロス・ソーキンに語った。
「数字を見ると、パワースラップのスポーツで史上最も視聴されたYouTubeショート動画や、TikTokのスポーツで史上最も視聴された数など、この数字は私たちがこのことに何をもたらしているかを考えると天文学的だ」と彼は語った。 「そしてそれは世界的です。すでに世界的なビジネスです。」
パワー スラップは、悪名高い残忍なバイラル クリップを見逃したかもしれない人のために説明します。この競技では、2 人の競技者がパッド入りのステージの中央にあるテーブルの上に立って、1 人が体力的に回復できなくなるまで、手のひらを広げて全力の平手打ちを互いに繰り出します。戦闘と衝撃的なエンターテイメントの組み合わせは視聴者の注目を集めており、人気の上昇に対するホワイトの強気さは単なる話ではありません。
ソーシャルメディア分析プラットフォームの Socialpruf によると、Power Slap は過去 1 年間で 18 億 8,000 万のインプレッションを記録し、その投稿は約 4,000 万の「いいね！」を獲得し、獲得メディア価値は 4,800 万ドルに達しました。
多くの著名なスポンサーがこの人気の波に乗じて、フライング・パーム・パームの中に自分の名前を投じるチャンスに飛びついています。アンハイザー・ブッシュ、モンスター・エナジー、VeChain、Circa Sports、500 Casino は、これまでにホワイト氏のスポーツに対するビジョンを賛同した多くのブランドの 1 つです。
ホワイト氏は「スポンサーシップは厳しいだろうと思っていた」と述べた。 「（パワースラップには）（最初の2年間で）UFCが10年間で獲得したよりも多くのスポンサーがいる。」
パワースラップの世界で定期的に見られるビートダウンに喜んで参加する参加者を見つけるのは、広告主を見つけるよりも難しいように思えるかもしれません。この奇妙な種類の人材獲得を進めるにあたり、ホワイトは重要な考慮事項としてタフネス、根性、そして高い痛みへの耐性を強調した。
「毎週末、世界中で数万人から数十万人がレスリングをしている。彼らは一晩50ドルで、脚立からタックルがいっぱいのテーブルに飛び乗るのだ」と彼は語った。 「私が追いかけているのはこの人たちです。」
スラップボクシングが成功する理由は何ですか?ホワイト氏は、成功するスポーツ全般に当てはまる 2 つのこと、それは「素晴らしいライブ イベントを開催する必要があること、そしてテレビでも優れたイベントを開催する必要があること」だと述べています。
しかし、パワー・スラップの主な視聴者数の増加は、従来のテレビ生放送ではなく、ソーシャルメディアに投稿された短編ビデオの形で行われるため、ホワイト氏は後者の要素を特に重視した。
それは、ホワイトが最初にこのスポーツを垣間見た方法でもあります。
「2017年と2018年に、このようなことが私のソーシャルメディアに現れ始めました」と彼は言いました。 「私が格闘技業界でやることはすべて直感でやっているんですが、それを観て誰が勝つか知りたいという事実から、これは面白いと言いました。」
ホワイト氏は、さらに詳しく調べていくうちに、スラップボクシングの再生回数がどれだけ増えたかを確認したと述べ、その再生回数はYouTubeで「当時のジャスティン・ビーバーのビデオに匹敵する」と述べた。
それが彼を、UFCへの出資を手放したフェルティッタ兄弟に、2022年に立ち上げられる同事業への投資を持ちかけるきっかけとなった。
ホワイトはまた、UFCが採用したのと同じ集中モデルを適用することを目的としたズッファ・ボクシングと呼ばれるボクシング・ビジネスへの投資も主導している。
1月に最初のイベントを開催したホワイト氏は、「ボクシングは長い間壊れてきた」という事実から、ズッファ・ボクシングはパワー・スラップよりも短期的な賭けに適していると語った。
「私たちはこれに6か月取り組んできましたが、なぜ壊れたのかは理解できます」と彼は言いました。 「私が競争しているプロモーターたちは皆、自分たちのやっていることは本当に下手です...私が予想していたよりもはるかに洗練されていません。」
ホワイト氏は、「ボクシングビジネスは常に経済的に信じられないほど素晴らしい」と述べ、試合やカードは多額のお金を生み出す可能性があると語った。しかし、「彼らが喧嘩をするたびに、それは廃業セールのようなものだ」と彼は付け加えた。
ズッファ・ボクシングは、ホワイトが率いる他の格闘技施設と同様に、その資金を格闘家たちの手に取り戻すことを目指している。
「状況はますます良くなっている」とホワイトは戦闘機の経済面について語った。 「まず第一に、パワー・スラップの連中は、私が会社を買収したときは無料でビンタをしていた。今では彼らはとてもいい給料をもらっている。UFCファイターに関して言えば、我々がビジネスを買収して以来、給料は文字通りこのように上がった」と手をまっすぐ上に向けて動かしていた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/18/ufc-dana-white-power-slap-boxing.html",
    publishedAt: "2026-07-18T14:41:49+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "u-s-military-says-it-has-completed-the-l-415a3d35",
    title: "U.S. military says it has completed the latest round of strikes against Iran, amid more disruptions to shipping",
    titleJa: "米軍、輸送の混乱が拡大する中、イランに対する最新の攻撃を完了したと発表",
    summaryJa: "クウェートとバーレーンがイランの飛翔体による攻撃を報告し、商業船舶が引き続き混乱に直面していると報告する中、米軍は土曜早朝、イランに対する7夜連続の攻撃を終了したと発表した。米国とイランが先月署名した脆弱な停戦協定は、最新の戦闘が続く中、さらに崩れる兆しを見せている。暫定合意は、戦略的に重要なホルムズ海峡を再開し、２月２８日の米国とイスラエルのイラン攻撃から始まった紛争を終結させることを目的としていた。",
    bodyOriginal: `The U.S. military said early Saturday it ended a seventh straight night of strikes against Iran, as Kuwait and Bahrain reported attacks by Iranian projectiles and commercial shipping continued to face disruptions.
The fragile truce signed by the U.S. and Iran last month showed further signs of unravelling as the latest round of fighting continued. The interim agreement was intended to reopen the strategically vital Strait of Hormuz and end the conflict which began with U.S. and Israeli strikes on Iran on Feb. 28.
U.S. Central Command said the attacks, which ended at 9:30 p.m. U.S. Eastern Time on Friday, struck "military logistics infrastructure, underground weapons storage, and maritime capabilities".
"CENTCOM continues to hold Iran accountable at the Commander in Chief's direction while fully enforcing a naval blockade against Iranian ports," it said in a post on X.
The military also said its forces intercepted several shipping vessels in recent days.
"During the first three days of renewed implementation, U.S. forces have redirected 4 commercial vessels, disabled 1, and boarded 1 to ensure full compliance," Central Command said in a separate statement.
Meanwhile, Iran's Revolutionary Guard Corps said it blocked four vessels early Saturday as they attempted to move under U.S. protection through the Strait of Hormuz.
"In a coordinated missile and drone operation, all four were halted and immobilized at sea," Iran's IRNA News Agency quoted the IRGC Navy Command as saying in a post on X.
Iran also appeared to continue its attacks on regional targets.
Kuwait said its air defenses were "responding to hostile drone threats."
It also said an Iranian attack on its power and water distillation station caused a fire but no casualties, according to an X post by the Kuwait News Agency. It was the second attack on Kuwait's water facilities in two days.
Kuwait is known to be overwhelmingly dependent on desalination for drinking water, with almost 90% of the arid nation's water demand satisfied through seawater desalination plants.
Kuwait Airways said it rescheduled most of its flights, blaming "hostile missile and drone attacks following the Iranian aggression."
Neighboring Bahrain's government said early Saturday that its air defense systems intercepted several Iranian projectiles and sounded sirens to warn residents.
On Friday, Iran claimed it had targeted U.S. military forces in Syria and Bahrain.
'Winning big in Iran'
U.S. President Donald Trump has insisted the war with Iran is going well, saying Thursday in a primetime address to the American public: "We are likewise winning big in Iran, and you will see the fruits of that labor very, very shortly."
The U.S. president had threatened to strike Iran's bridges and power plants next week if the country refused to return to the negotiating table.
Ian Lesser, distinguished fellow at GMF, a Washington-based think tank, said there appears to be a risk of the U.S. and Iran becoming mired in a so-called forever war.
"There's a risk of this, but of course we were in essentially a cold and occasionally hot war with Iran for decades," Lesser told CNBC by video call.
"I think in some sense this is misjudgment by the current administration. But it is also part of a pattern in the American approach to the use of force, that we have enormous capability and enormous operational prowess and we are hobbled by strategic mistakes," he added.
Oil prices were sharply higher on Friday due to the ongoing unrest in the Middle East.
International benchmark Brent crude futures with September delivery advanced 4.6% to $88.10 a barrel on Friday, while U.S. West Texas Intermediate futures with August delivery gained 4.5% to settle at $82.49. Both were at their highest since mid-June.
For the week, both benchmarks gained about 16%, with Brent on track for a third consecutive weekly gain and WTI set for its second.
– Reuters contributed to this report.`,
    bodyJa: `クウェートとバーレーンがイランの飛翔体による攻撃を報告し、商業船舶が引き続き混乱に直面していると報告する中、米軍は土曜早朝、イランに対する7夜連続の攻撃を終了したと発表した。
米国とイランが先月署名した脆弱な停戦協定は、最新の戦闘が続く中、さらに崩れる兆しを見せている。暫定合意は、戦略的に重要なホルムズ海峡を再開し、２月２８日の米国とイスラエルのイラン攻撃から始まった紛争を終結させることを目的としていた。
米中央軍は、攻撃は午後９時半に終了したと発表した。米国東部時間金曜日、「軍の兵站インフラ、地下兵器貯蔵庫、海洋能力」を攻撃した。
「CENTCOMはイランの港に対する海上封鎖を完全に実施しながら、最高司令官の指示に従ってイランの責任を追及し続ける」とXへの投稿で述べた。
軍はまた、ここ数日で軍が数隻の輸送船を拿捕したと述べた。
中央軍は別の声明で、「新たな実施の最初の３日間で、米軍は完全な遵守を徹底するため、商船４隻を方向転換し、１隻を無効化し、１隻に乗船させた」と述べた。
一方、イラン革命防衛隊は土曜日早朝、米国の保護下でホルムズ海峡を通過しようとした船舶４隻を阻止したと発表した。
イランのIRNA通信は、Xへの投稿で革命防衛隊海軍司令部の発言を引用し、「ミサイルと無人機の協調作戦により、4機すべてが海上で停止され動けなくなった」と伝えた。
イランも地域目標への攻撃を継続しているようだ。
クウェートは、防空体制が「敵対的なドローンの脅威に対応している」と述べた。
また、クウェート通信社のXポストによると、同国は発電所と水の蒸留所に対するイランの攻撃により火災が発生したが死傷者は出なかったと述べた。クウェートの水道施設への攻撃はここ２日間で２度目となった。
クウェートは飲料水の淡水化に圧倒的に依存していることで知られており、乾燥国の水需要のほぼ90％が海水淡水化プラントによって満たされている。
クウェート航空は、「イランの侵略に続く敵対的なミサイルとドローン攻撃」を理由に、ほとんどの便のスケジュールを変更したと発表した。
隣国のバーレーン政府は土曜早朝、同国の防空システムがイランの飛翔体数発を迎撃し、サイレンを鳴らして住民に警告したと発表した。
金曜日、イランはシリアとバーレーンの米軍を標的にしたと主張した。
「イランで大勝利」
ドナルド・トランプ米大統領は、イランとの戦争は順調に進んでいると主張し、木曜、米国民に向けたゴールデンタイムの演説で「我々も同様にイランで大きな勝利を収めており、その努力の成果が間もなく現れるだろう」と述べた。
米国大統領は、イランが交渉のテーブルに戻ることを拒否した場合、来週イランの橋と発電所を攻撃すると脅していた。
ワシントンに本拠を置くシンクタンクGMFの著名研究員イアン・レッサー氏は、米国とイランがいわゆる永遠の戦争に陥るリスクがあるようだと述べた。
レッサー氏はビデオ通話でＣＮＢＣに対し、「リスクはあるが、もちろん我々は数十年にわたりイランと本質的に冷戦、時には熱戦を繰り広げていた」と語った。
「これはある意味、現政権の誤った判断だと思う。しかし、これは米国の武力行使アプローチのパターンの一部でもある。われわれは膨大な能力と膨大な作戦能力を持っているのに、戦略上の誤りによって足かせを食われているということだ」と同氏は付け加えた。
中東での不安が続いているため、金曜日の原油価格は大幅に上昇した。
国際ベンチマークであるブレント原油先物（9月渡し）は金曜、4.6％上昇して1バレル＝88.10ドルとなった一方、8月渡しの米国ウェスト・テキサス・インターミディエイト先物は4.5％上昇して82.49ドルで落ち着いた。いずれも６月中旬以来の高値となった。
この週では、両ベンチマークは約16％上昇し、ブレントは3週連続の上昇傾向にあり、WTIは2週間連続の上昇を記録した。
– ロイターがこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/18/us-military-says-it-completed-latest-round-of-strikes-against-iran.html",
    publishedAt: "2026-07-18T13:18:56+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "i-racked-up-35-000-in-credit-card-debt-s-ba0d21b4",
    title: "I racked up $35,000 in credit-card debt. Should I file for bankruptcy?",
    titleJa: "私はクレジットカードで35,000ドルの借金を抱えてしまいました。自己破産を申請すべきでしょうか？",
    summaryJa: "「信用カウンセリング機関と協力したり、困難なプログラムに登録したりすることも考えています。」",
    bodyOriginal: `“I’m also considering working with a credit-counseling agency or enrolling in a hardship program.”`,
    bodyJa: `「信用カウンセリング機関と協力したり、困難なプログラムに登録したりすることも考えています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-have-racked-up-35-000-in-credit-card-debt-should-i-file-for-bankruptcy-4c92d9e5?mod=mw_rss_topstories",
    publishedAt: "2026-07-18T13:15:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-90674611",
    readTime: 2,
  },
  {
    id: "a-massive-lettuce-recall-hits-home-as-lo-e3a15e10",
    title: "A massive lettuce recall hits home as local restaurants shake up their salad menus",
    titleJa: "地元レストランがサラダメニューを刷新する中、レタスの大規模リコールが衝撃的",
    summaryJa: "袋詰めのレタスをすべて廃棄する独立系レストランもあれば、顧客に葉物野菜を提供し続ける方法を見つけたレストランもある。",
    bodyOriginal: `Some independent restaurants are throwing out all their bagged lettuce, while others have found ways to keep serving customers their leafy greens.`,
    bodyJa: `袋詰めのレタスをすべて廃棄する独立系レストランもあれば、顧客に葉物野菜を提供し続ける方法を見つけたレストランもある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/a-massive-lettuce-recall-hits-home-as-local-restaurants-shake-up-their-salad-menus-15f7ac35?mod=mw_rss_topstories",
    publishedAt: "2026-07-18T13:15:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-20686256",
    readTime: 2,
  },
  {
    id: "russian-online-retail-warehouses-hit-by-93557554",
    title: "Russian online retail warehouses hit by deadly Ukrainian strikes",
    titleJa: "ロシアのオンライン小売倉庫がウクライナの致命的な攻撃で打撃を受ける",
    summaryJa: "ドローンはモスクワ近郊とタンボフにあるワイルドベリー施設を標的にした。ウクライナの指導者は、これらの施設を「制裁対象の部品」を供給する「主要な物流施設」と呼んだ。",
    bodyOriginal: `Russian online retail warehouses hit by deadly Ukrainian strikes
- Published
Eight people have been killed and 62 injured after Ukrainian drones struck two warehouses belonging to Russia's biggest online retailer, Wildberries, according to Russian officials.
Seven deaths and 25 injuries occurred at a warehouse in the city of Tambov, roughly 295 miles (475km) south-east of Moscow. One death and 37 injuries occurred at another Wildberries warehouse in Elektrostal in the Moscow region.
Ukrainian President Volodymyr Zelensky said the attacks had struck "major logistics facilities" which had been used to "supply sanctioned components for drone production and navigation equipment".
He added that Ukraine had also struck targets in the Sea of Azov, the Black Sea, and Russian-annexed Crimea.
Images from the scene of one of the warehouse strikes showed flames and huge plumes of black smoke rising from a vast logistics building, with dozens of workers running into a car park area.
The attacks appear to have started at night, with some videos showing terrified and injured staff attempting to flee as explosions continue. Another clip appears to show the walls of a warehouse disintegrating as they are engulfed by flames.
Zelensky said Ukraine's operations were in response to "Russian strikes on our civilian infrastructure and on our cities and communities". Overnight into Wednesday, 14 people were killed in Russian attacks across Ukraine.
Wildberries is often described as the Russian equivalent of Amazon. The merged RWB group, which combines Wildberries with advertising company Russ, was valued at about $12.6bn (£9.3bn) by Forbes Russia in 2026.
Serhii Kuzan, chairman of the Ukrainian Security and Cooperation Centre, told the BBC that Wildberries was a "vital component" of Russian logistics, and that its website had been used by Russian volunteers to purchase military equipment including walkie-talkies, body armour and drone components.
"The primary rationale for striking Wildberries' warehouses is to disrupt Russian logistics and the supply of dual-use goods, critical electronics, sanctioned goods and the like to the Russian army and Russian arms manufacturers," he said.
"The collateral damage from such strikes could also have a serious impact on the Russian economy, as well as a psychological effect on Russian society and, likely, on continued support for the war."
Russia has targeted similar facilities in Ukraine since the start of the war, including its postal service and some electronics distributors.
Wildberries CEO Tatyana Kim - one of Russia's first female billionaires - said it had been a "terrible night" for Russia and for the company.
"Seven people working the night shift died on the spot," governor of the Tambov region Evgeniy Pervyshov wrote on Telegram, adding that 28 drones were also shot down on approach.
He said 25 people had been injured, including seven in serious condition. Most of these injuries were caused by shrapnel wounds, he said.
It was the "largest and most inhumane" attack on the region in terms of the number of drones used and the number of casualties, he added.
Meanwhile, governor of the Moscow region Andrei Vorobyov said eight of those injured in the strikes on the Wildberries warehouse in Elektrostal were in a "serious condition".
He added that a total of 48 drones were shot down in the region overnight, and that a Russian oil depot had also been struck by a falling drone, which he described as the incident with "the most serious consequences".
"Firefighters, emergency services, and the Ministry of Emergency Situations continue to work at the scene," he wrote on Telegram. He did not describe the level of damage in detail. Zelensky separately confirmed Ukraine had struck "an oil facility".
Ukraine has recently intensified its long-range drone attacks on Russia's critical energy infrastructure, causing widespread fuel shortages. Earlier this month, Kyiv said nearly 43% of Russia's oil refining capacity had been "disabled" as a result.
The BBC has not independently verified this figure.
Ukraine says Russian oil and gas facilities are legitimate targets as Moscow relies heavily on fossil fuel exports to finance its full-scale invasion, which began in February 2022.
Russian President Vladimir Putin made a rare admission in June that fuel shortages had been caused by Ukrainian attacks, and signed into law a bill aimed at boosting supplies to the domestic fuel market in early July.
Related topics
More on the Ukraine War
- Published1 day ago
- Published3 days ago`,
    bodyJa: `ロシアのオンライン小売倉庫がウクライナの致命的な攻撃で打撃を受ける
- 公開されました
ロシア当局によると、ウクライナの無人機がロシア最大のオンライン小売業者ワイルドベリーの倉庫２カ所を攻撃し、８人が死亡、６２人が負傷した。
モスクワの南東約475キロにあるタンボフ市の倉庫で7人が死亡、25人が負傷した。モスクワ地方のエレクトロスタールにある別のワイルドベリー倉庫で１人が死亡、37人が負傷した。
ウクライナのウォロディミル・ゼレンスキー大統領は、今回の攻撃は「ドローン製造や航行機器向けに認可された部品の供給」に使われていた「主要物流施設」を襲ったと述べた。
同氏は、ウクライナはアゾフ海、黒海、ロシアが併合したクリミアの目標も攻撃したと付け加えた。
倉庫ストライキの現場の画像には、広大な物流ビルから炎と巨大な黒煙が立ち上り、数十人の労働者が駐車場エリアに逃げ込んでいる様子が映っていた。
攻撃は夜に始まったようで、爆発が続く中、恐怖を感じて負傷したスタッフが逃げようとする様子が一部のビデオで映されている。別のクリップでは、倉庫の壁が炎に包まれて崩壊する様子が映っています。
ゼレンスキー大統領は、ウクライナの作戦は「我が国の民間インフラや都市や地域社会に対するロシアの攻撃」への対応であると述べた。水曜日にかけて、ウクライナ全土でロシアによる攻撃があり、14人が死亡した。
ワイルドベリーはロシアのアマゾンに相当するとよく言われます。ワイルドベリーズと広告会社ラスを統合した合併後のRWBグループは、2026年にフォーブス・ロシアによって約126億ドル（93億ポンド）と評価された。
ウクライナ安全保障協力センターのセルヒイ・クザン会長はBBCに対し、ワイルドベリーズはロシアの物流の「重要な要素」であり、そのウェブサイトはロシアのボランティアによってトランシーバー、防弾チョッキ、ドローン部品などの軍事装備を購入するために使用されていたと語った。
同氏は、「ワイルドベリー社の倉庫を襲撃する主な理由は、ロシアの物流と、ロシア軍やロシアの武器製造業者への軍民両用品、重要な電子機器、制裁品などの供給を混乱させることだ」と述べた。
「このような攻撃による巻き添え被害は、ロシア社会に心理的な影響を与えるだけでなく、おそらく戦争への継続的な支援にも深刻な影響を与える可能性がある。」
ロシアは戦争開始以来、郵便サービスや一部の電子機器販売業者を含むウクライナの同様の施設を標的にしてきた。
ロシア初の女性億万長者の一人であるワイルドベリーズ最高経営責任者（CEO）のタチアナ・キム氏は、ロシアにとっても会社にとっても「ひどい夜」だったと語った。
タンボフ地域のエフゲニー・ペルヴィショフ知事はテレグラムに「夜勤で働いていた7人がその場で死亡した」と書き、28機のドローンも接近時に撃墜されたと付け加えた。
同氏によると、２５人が負傷し、うち７人が重篤な状態だという。これらの負傷のほとんどは破片による傷によるものだと彼は述べた。
使用された無人機の数と死傷者の数の点で、これはこの地域に対する「最大かつ最も非人道的な」攻撃だった、と彼は付け加えた。
一方、モスクワ地域のアンドレイ・ヴォロビヨフ知事は、エレクトロスタルのワイルドベリー倉庫へのストライキで負傷者のうち8人が「重篤な状態」にあると述べた。
同氏は、一夜にしてこの地域で計48機の無人機が撃墜され、ロシアの石油貯蔵所も落下した無人機に直撃されたと付け加え、これを「最も深刻な結果」を伴う事件だと述べた。
「消防士、救急サービス、非常事態省は現場で活動を続けている」と同氏はテレグラムに書いた。被害の程度については詳細には言及しなかった。ゼレンスキー大統領はこれとは別に、ウクライナが「石油施設」を攻撃したことを認めた。
ウクライナは最近、ロシアの重要なエネルギーインフラに対する長距離無人機攻撃を強化しており、広範囲にわたる燃料不足を引き起こしている。キエフは今月初め、その結果、ロシアの石油精製能力のほぼ43％が「機能不全」になったと発表した。
BBCはこの数字を独自に検証していない。
ウクライナは、ロシアが2022年2月に始まった本格的な侵略の資金調達として化石燃料の輸出に大きく依存しているため、ロシアの石油・ガス施設は正当な標的であると主張している。
ロシアのウラジーミル・プーチン大統領は6月、燃料不足がウクライナの攻撃によって引き起こされたことを異例に認め、7月初旬に国内燃料市場への供給拡大を目的とした法案に署名した。
関連トピック
ウクライナ戦争についてさらに詳しく
- 1 日前に公開
- 3 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyxlm877p2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-18T13:06:25+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/82d1/live/dae460c0-82a9-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 5,
  },
  {
    id: "world-cup-audience-stayed-bipartisan-des-4fe975d9",
    title: "World Cup audience stayed bipartisan despite Trump's prominent role, CNBC survey finds",
    titleJa: "トランプ大統領の重要な役割にもかかわらず、ワールドカップの視聴者は超党派であったことがCNBCの調査で判明",
    summaryJa: "ドナルド・トランプ大統領は、ワールドカップを2期目の最も目立つ政治舞台の1つとした。しかし、最新のCNBC全米経済調査によると、トーナメントの米国の観客は依然として驚くほど超党派であった。調査によると、登録有権者の49％がワールドカップの少なくとも一部を観戦したと回答した。この中には民主党員の５１％、共和党員の４７％、無党派層の４７％が含まれていた。",
    bodyOriginal: `President Donald Trump made the World Cup one of the most visible political stages of his second term. But the tournament's U.S. audience remained strikingly bipartisan, according to the latest CNBC All-America Economic Survey.
Forty-nine percent of registered voters said they watched at least some of the World Cup, according to the survey. That included 51% of Democrats, 47% of Republicans and 47% of independents.
"It crosses partisanship, one of the few things in the world that seems to at the moment," said Jay Campbell, a partner at Democratic polling firm Hart Research, which conducted the survey along with Republican firm Public Opinion Strategies.
The split was equally narrow along other political lines, the survey found. Fifty-one percent of voters who backed Kamala Harris in 2024 watched, compared with 47% of Trump voters. Voters who approved or disapproved of Trump tuned in at nearly the same rates, 47% and 50%, respectively.
The World Cup's four-point Democratic-Republican gap was smaller than the partisan divides over voters' favorite sports. Republicans were 13 points more likely than Democrats to choose football, while Democrats held seven-point advantages in soccer generally and in basketball.
Just 8% of voters named soccer as their favorite sport, but 17% said they watched "a lot" of the World Cup and an additional 32% said they watched "some."
Micah Roberts, a partner at Public Opinion Strategies, described the tournament as a place "where Democrats and Republicans agree."
The survey asked about World Cup viewership and asked respondents to identify their favorite sport. The results suggest the tournament largely avoided the partisan sorting that has followed Trump into much of U.S. culture.
Since returning to office, Trump has chaired the White House task force overseeing the World Cup. FIFA President Gianni Infantino has repeatedly appeared with him, and FIFA opened offices in Trump Tower. Trump attended the World Cup draw, held at the John F. Kennedy Memorial Center for the Performing Arts, where Trump's name, which he added to the center, was recently required to be removed after a court ruling.
Infantino also gave Trump 10 tickets worth $15,000 to last year's Club World Cup final, according to Trump's annual financial disclosure. Trump helped present the trophy and is expected to do so again Sunday at the World Cup final at MetLife Stadium in New Jersey.
FIFA later awarded Trump its inaugural Peace Prize, drawing scrutiny from European lawmakers and an ethics complaint accusing Infantino of violating FIFA's political neutrality rules.
Trump's involvement also extended beyond ceremonies.
After U.S. striker Folarin Balogun received a red card, which triggered an automatic one-match suspension, Trump called Infantino and asked him to review the call. FIFA placed the suspension on probation, allowing Balogun to play in the next match, against Belgium.
The U.S. lost 4-1 to Belgium and was eliminated. UEFA, European soccer's governing body, called FIFA's reversal "unprecedented, incomprehensible and unjustifiable." FIFA said its disciplinary committee acted under the organization's rules.
Still, the controversy didn't dent viewership. Half of MAGA Republicans watched, compared with 46% of non-MAGA Republicans, according to the All-America survey.
The tournament's international appeal also reached deep into Trump's "America First" coalition. Among viewers, 88% said they watched matches not involving the U.S., including 82% of all Republicans and 86% of MAGA Republicans.
The sharper divides were economic and educational. Fifty-nine percent of voters earning at least $100,000 watched, compared with 31% of those earning less than $30,000. Viewership reached 65% among voters with postgraduate degrees but fell to 40% among those with a high school education or less. Those divides may reflect access to paid television, on which millions of viewers watched World Cup games.
The CNBC All-America Economic Survey was conducted July 8 through July 12 by Hart Research Associates and Public Opinion Strategies. It surveyed 1,000 registered voters nationwide and has a margin of error of plus or minus 3.1 percentage points.`,
    bodyJa: `ドナルド・トランプ大統領は、ワールドカップを2期目の最も目立つ政治舞台の1つとした。しかし、最新のCNBC全米経済調査によると、トーナメントの米国の観客は依然として驚くほど超党派であった。
調査によると、登録有権者の49％がワールドカップの少なくとも一部を観戦したと回答した。この中には民主党員の５１％、共和党員の４７％、無党派層の４７％が含まれていた。
共和党の世論調査会社パブリック・オピニオン・ストラテジーズと共同で調査を実施した民主党系世論調査会社ハート・リサーチのパートナー、ジェイ・キャンベル氏は、「党派性を超えたものであり、現時点でそうなっているのは世界でも数少ないことの一つだ」と語った。
他の政治的路線でも同様に意見の隔たりは狭いことが調査で判明した。 2024年にカマラ・ハリスを支持した有権者の51％が視聴したのに対し、トランプ支持者の47％が視聴した。トランプ大統領を支持する有権者と不支持を示す有権者は、それぞれ47％と50％でほぼ同じ割合で視聴した。
ワールドカップの民主党と共和党の4ポイント差は、有権者の好きなスポーツを巡る党派間の溝よりも小さかった。共和党は民主党よりもサッカーを選択する可能性が13ポイント高かったが、サッカー全般とバスケットボールでは民主党が7ポイント有利だった。
好きなスポーツとしてサッカーを挙げた有権者はわずか8％だったが、17％がワールドカップを「たくさん」見ていると答え、さらに32％が「ある程度」見ていると答えた。
パブリック・オピニオン・ストラテジーズのパートナー、ミカ・ロバーツ氏は、この大会を「民主党と共和党の意見が一致する」場だと述べた。
調査ではワールドカップの視聴率について尋ね、回答者に好きなスポーツを特定するよう求めた。この結果は、トランプ大統領に続いて米国文化の多くに組み込まれてきた党派的な仕分けがこの大会でほぼ回避されたことを示唆している。
トランプ氏は大統領に復帰して以来、ワールドカップを監督するホワイトハウスの特別委員会の議長を務めている。 FIFAのジャンニ・インファンティーノ会長も何度も同席しており、FIFAはトランプタワーに事務所を開設した。トランプ大統領はジョン・F・ケネディ記念舞台芸術センターで行われたワールドカップの抽選会に出席したが、裁判所の判決を受けて同センターに追加されたトランプ氏の名前は最近削除するよう求められた。
トランプ大統領の年次財務情報開示によれば、インファンティーノ氏はまた、昨年のクラブワールドカップ決勝戦のチケット10枚（1万5000ドル相当）をトランプ大統領に贈ったという。トランプ氏はトロフィーの授与に協力しており、日曜、ニュージャージー州のメットライフ・スタジアムで行われるワールドカップ決勝戦で再びトロフィー授与を行う予定だ。
FIFAはその後、欧州議員からの厳しい監視と、FIFAの政治的中立規定に違反したとしてインファンティーノ氏を告発する倫理告訴を受けて、トランプ氏に初の平和賞を授与した。
トランプ大統領の関与は式典以外にも広がった。
アメリカ代表ストライカーのフォラリン・バログンがレッドカードを受け、自動的に1試合の出場停止処分を受けたことを受け、トランプ大統領はインファンティーノに電話をかけて内容を見直すよう求めた。 FIFAは執行猶予処分を科し、バログンが次のベルギー戦に出場することを許可した。
アメリカはベルギーに1-4で敗れ敗退した。欧州サッカー統括団体のＵＥＦＡは、ＦＩＦＡの逆転行為を「前例のない、理解不能で不当なもの」と批判した。 FIFAは、規律委員会は組織の規則に基づいて行動したと述べた。
それでも、この論争は視聴率を低下させることはなかった。全米調査によると、MAGA共和党員の半数が視聴したが、非MAGA共和党員では46％だった。
この大会の国際的なアピールは、トランプ大統領の「アメリカ第一主義」連合にも深く浸透した。視聴者のうち、88％が米国が関与しない試合を観戦したと答え、その内訳は全共和党員の82％、MAGA共和党員の86％だった。
より深刻な溝は経済面と教育面であった。収入10万ドル以上の有権者の59％が視聴したのに対し、収入3万ドル未満の有権者の31％が視聴した。視聴率は大学院学位を持つ有権者では65％に達したが、高校教育以下の有権者では40％に低下した。こうした格差は、数百万人の視聴者がワールドカップの試合を視聴した有料テレビへのアクセスを反映している可能性がある。
CNBC全米経済調査は、ハート・リサーチ・アソシエイツとパブリック・オピニオン・ストラテジーズによって7月8日から7月12日まで実施された。全国の登録有権者1,000人を対象に調査したもので、誤差の範囲はプラスマイナス3.1パーセントポイントとなっている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/18/world-cup-viewership-trump-democrats-republicans-poll.html",
    publishedAt: "2026-07-18T12:00:02+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "korean-beauty-products-are-becoming-main-ff313ede",
    title: "Korean beauty products are becoming mainstream in the U.S. Why there may be even more growth ahead",
    titleJa: "韓国の美容製品が米国で主流になりつつある理由 さらなる成長が期待できる理由",
    summaryJa: "オリーブ ヤングが 5 月下旬に米国初の店舗をオープンしたとき、買い物客はすでにキャンプをしており、行列は複数のブロックにまたがっていました。カリフォルニア州パサデナにある韓国の大手美容品小売業者の新店舗は、オープン週末に6,000人の客が来店し、現在は1日平均1,600人以上の来店客がいると同社は発表した。その後、カリフォルニア州センチュリーシティに別の店舗をオープンし、米国内でさらに店舗をオープンする予定だと述べた。",
    bodyOriginal: `When Olive Young opened its first U.S. outpost in late May, shoppers were already camping out, and the line spanned multiple blocks.
On opening weekend, the leading South Korean beauty retailer's new store in Pasadena, California, had 6,000 customers move through its doors, and it currently sees an average of more than 1,600 visitors per day, the company said. It has since opened another location, in Century City, California, and said it plans to open more stores in the U.S.
That popularity is a microcosm of a bigger trend playing out in the U.S.: Consumers can't get enough of beauty products from a country thousands of miles away — positioning some companies to get ahead.
"The U.S. is not only the world's largest beauty market, but also one of the most influential in shaping global beauty trends, content, and consumer behavior," Olive Young global communications lead Rena Kim said. "It was a natural and strategic next step in our global expansion."
Glowing up
Consumption of Korean cosmetics, otherwise referred to as K-beauty, has been on the rise in the U.S. for years, with the "first wave" taking place in the 2010s and continuing into the Covid-19 pandemic.
"People were home. They had time to kind of learn about a 10-step skin care routine. They learned about what specific ingredients did, how to layer products together," said Anna Mayo, a NielsenIQ beauty thought leader. "We saw the rise of this 'glass skin' look, and this real emphasis on healthy and glowing skin that looks great every day versus the need to kind of cover it up with cosmetics."
"Consumers have already been primed in this skin care-first philosophy that they're kind of living in," she added.
Now, the "second wave" has taken hold, Mayo said, as K-beauty brands successfully take advantage of this appetite among U.S. consumers for skin care. According to NielsenIQ, U.S. K-beauty sales reached $2.8 billion in early 2026, representing a roughly 48% increase from a year ago. That's faster than the nearly 45% growth rate seen in the prior-year period — an unusual acceleration, Mayo said.
K-beauty is also penetrating more U.S. households, climbing to 28.7% over the latest yearly period — a sign that it's becoming stickier in the country.
Morgan Stanley analyst Simeon Gutman said he expects K-beauty's growth trajectory to continue. In a note dated March 11, the analyst forecast that K-beauty sales in the U.S. can reach approximately $4 billion in 2026, citing "the rising popularity of K-culture and U.S. consumer demand for functional skincare products" as catalysts.
Gutman later confirmed to CNBC that those views are current.
Even if those projections don't come to fruition, K-beauty popularity will have a lasting impact on the U.S. consumer. Cassandra Bankson, a medical aesthetician and skin care educator, believes such popularity has paved the way for cosmetics products from other countries to follow suit, even in the U.S., so long as information and trade channels are open.
"I think it's coming, and I think people don't see it coming," Bankson said, adding that she thinks products from China and Japan will be next, then from Vietnam, Singapore and Thailand.
"The U.S. now has these underground groups in a lot of the beauty groups that I'm in, saying, 'You guys, look at what I got from Judydoll,' or 'I just went to China, I just went to Vietnam, look at this Thai sunscreen that I got that we can't get anywhere else,'" she said. "I think that there's a lot more room for that."
The American mall has started to be reshaped as a result. At Westfield Garden State Plaza in New Jersey, the lineup of Asian retailers has expanded over the past 12 months, seeing new additions such as Sukoshi — a top destination for K-beauty as well as Japanese beauty, or J-beauty, and Asian lifestyle products.
"Consumer discovery has fundamentally changed," said Kate Sabbag, vice president of leasing at Westfield Garden State Plaza. "People aren't just finding brands in malls anymore — they're discovering them on TikTok, Instagram and through international travel. And once they connect with a brand, they want to experience it in real life. We're seeing that play out across our portfolio."
Who could benefit?
While a huge chunk of K-beauty sales comes from platforms such as TikTok Shop and Amazon, according to NielsenIQ data, there's room for retail to take up more market share.
"There is a huge opportunity to kind of move this segment offline and into stores and reach people that way," NielsenIQ's Mayo said in an interview.
Earlier this year, Sephora partnered with Olive Young to bring K-beauty products to Sephora customers in stores as well as online, and Morgan Stanley's Gutman said Ulta Beauty is also set up to benefit from rising K-beauty popularity in the U.S.
In its latest earnings report, Ulta CFO Christopher DelOrefice said "the skincare and wellness category delivered low-single-digit comp growth this quarter," with prestige skin care, including Korean brand Medicube, continuing to "perform well." He said K-beauty brand Peach & Lily was among those driving "healthy guest engagement," while mass skin care's "solid" growth in the period was supported by the in-store expansion of Anua.
"I would expect them to continue to lean into this trend within the market," said Anna Glaessgen, a research analyst at B. Riley Securities focusing on consumer products. "Clearly with the really successful launch of the Olive Young store, there's a ton of demand for K-beauty, and they need to be there where the consumer is."
Ulta did not respond to CNBC's request for comment. The company's Q2 figures could give investors more clarity on this. The report is scheduled to be released Aug. 5.
However, Glaessgen highlighted that K-beauty's popularity poses a risk: Overall average selling price in the category could be affected given that K-beauty typically carries a lower price point than prestige skin care.
"If people who normally would have been a prestige skin care shopper spending $30 to $60 on something are now spending in the teens to in the 20s, obviously that carries downward pressure to the average spend in the category," she said.
She sees that risk coming more from the younger generations who are just now entering prestige skin care. "If they are finding efficacy in a $20 or $30 product, it might be more difficult to get them to trade up to something running in the hundreds," the analyst said.
Other retailers such as Target, Costco and Walmart further increasing their K-beauty market penetration could also be a way to help attract a broader audience to the category.
Target has already made significant strides in that area. The retailer quadrupled its K-beauty items in the spring, offering more than 150 new products and more than 10 new brands across skin care, makeup and hair care, a spokesperson told CNBC. The company plans to introduce more products.
"Beauty is an incredibly important and deeply personal category for our guests, and our team is always looking to flex our merchandising authority by bringing them the brands and trends they want most," Amanda Nusz, senior vice president of merchandising, essentials and beauty at Target, told CNBC. "K-beauty is a great example."
Raymond James analyst Olivia Tong underscored that products from brands such as The Ordinary, which is based in Canada and owned by Estee Lauder, have incorporated ingredients that have become popularized by those in the K-beauty space, such as centella asiatica.
"It's a very different way of looking at the category — more about maintenance, very ingredient heavy, and there's obviously a certain speed to market that they're bringing too," she said to CNBC. "We don't think this is just a trend per se. We think that this is a bit of a shift in the market."`,
    bodyJa: `オリーブ ヤングが 5 月下旬に米国初の店舗をオープンしたとき、買い物客はすでにキャンプをしており、行列は複数のブロックにまたがっていました。
カリフォルニア州パサデナにある韓国の大手美容品小売業者の新店舗は、オープン週末に6,000人の客が来店し、現在は1日平均1,600人以上の来店客がいると同社は発表した。その後、カリフォルニア州センチュリーシティに別の店舗をオープンし、米国内でさらに店舗をオープンする予定だと述べた。
その人気は、米国で起こっているより大きなトレンドの縮図です。消費者は何千マイルも離れた国からの美容製品を十分に手に入れることができず、一部の企業が先を行く立場にあります。
「米国は世界最大の美容市場であるだけでなく、世界の美容トレンド、コンテンツ、消費者行動の形成に最も影響力のある国の一つでもある」とオリーブ・ヤングのグローバルコミュニケーション責任者レナ・キム氏は述べた。 「これは当社の世界展開における自然かつ戦略的な次のステップでした。」
光る
Kビューティーとも呼ばれる韓国化粧品の消費は米国で長年増加しており、2010年代に「第1波」が発生し、新型コロナウイルス感染症のパンデミックまで続いた。
「人々は家にいました。10 ステップのスキンケア ルーチンについて学ぶ時間がありました。特定の成分が何をするのか、製品を重ね合わせる方法などを学びました」と NielsenIQ の美容思想リーダー、アンナ メイヨ氏は述べました。 「私たちはこの『ガラスの肌』のような外観の隆盛を目の当たりにし、化粧品で隠す必要性ではなく、毎日美しく見える健康的で輝く肌を重視するようになりました。」
「消費者はすでに、このスキンケア第一の哲学に慣れ親しんでおり、その中に生きているようなものです」と彼女は付け加えた。
現在、「第2の波」が定着しており、Kビューティーブランドが米国消費者のスキンケアに対する欲求をうまく利用しているとメイヨー氏は述べた。 NielsenIQ によると、米国の K-ビューティーの売上高は 2026 年初めに 28 億ドルに達し、前年比約 48% 増加しました。これは前年同期の45％近い成長率よりも速い、異例の加速だとメイヨー氏は述べた。
また、K ビューティーは米国のより多くの世帯に浸透しており、最近の年間では 28.7% に上昇しています。これは、この国での K ビューティーの浸透度がさらに高まっていることを示しています。
モルガン・スタンレーのアナリスト、シメオン・ガットマン氏は、Kビューティーの成長軌道は今後も続くと予想していると述べた。同アナリストは3月11日付のメモで、「Kカルチャーの人気の高まりと機能性スキンケア製品に対する米国の消費者の需要」を触媒として挙げ、米国でのKビューティーの売上高は2026年に約40億ドルに達する可能性があると予想した。
ガットマン氏は後にCNBCに対し、それらの見解が現在のものであることを認めた。
たとえその予測が現実にならなかったとしても、Kビューティーの人気は米国の消費者に永続的な影響を与えるだろう。メディカルエステティシャンでありスキンケア教育者でもあるカサンドラ・バンクソン氏は、このような人気により、情報と貿易ルートが開かれている限り、米国であっても他国の化粧品が追随する道が開かれたと考えている。
バンクソン氏は「私はそれが来ていると思うが、人々はそれが来るとは思っていないと思う」と述べ、次は中国と日本からの製品、その次はベトナム、シンガポール、タイからの製品になるだろうと付け加えた。
「米国には今、私が所属している美容グループの多くに地下グループがいて、『皆さん、私がジュディドールから得たものを見てください』とか、『私は中国に行ったばかり、ベトナムに行ったばかりです、他では手に入らないこのタイの日焼け止めを見てください』と言うのです」と彼女は語った。 「その余地はもっとあると思います。」
その結果、アメリカのショッピングモールは再構築され始めました。ニュージャージー州のウェストフィールド ガーデン ステート プラザでは、過去 12 か月間でアジアの小売業者のラインナップが拡大し、K ビューティーだけでなく日本のビューティー、または J ビューティーやアジアのライフスタイル製品のトップ目的地である Sukoshi などの新たな店舗も加わりました。
「消費者の発見は根本的に変わった」とウェストフィールド・ガーデン・ステート・プラザのリース担当副社長、ケイト・サブバッグ氏は語る。 「人々はもはやショッピングモールでブランドを見つけるだけではなく、TikTok、Instagram、海外旅行を通じてブランドを見つけています。そして、一度ブランドと結びつくと、彼らはそれを実生活で体験したいと考えます。それが私たちのポートフォリオ全体に波及しているのを私たちは目にしています。」
誰が利益を得られるでしょうか？
NielsenIQ データによると、K ビューティーの売上の大部分は TikTok Shop や Amazon などのプラットフォームによるものですが、小売業がより多くの市場シェアを占める余地があります。
NielsenIQのメイヨ氏はインタビューで、「このセグメントをオフラインや店舗に移動させ、その方法で人々にリーチする大きなチャンスがある」と語った。
今年初め、セフォラはオリーブ・ヤングと提携して、店舗やオンラインでセフォラの顧客にKビューティー製品を提供しており、モルガン・スタンレーのガットマン氏は、ウルタ・ビューティーも米国でのKビューティー人気の高まりから恩恵を受ける準備ができていると述べた。
UltaのCFOクリストファー・デルオレフィス氏は最新の決算報告で、「スキンケアとウェルネス部門は今四半期、一桁台前半の利益成長を達成した」とし、韓国ブランドのメディキューブを含む高級スキンケアが引き続き「好調」だったと述べた。同氏は、Kビューティーブランドのピーチ＆リリーは「健全なゲストエンゲージメント」を推進している企業の1つである一方、この時期のマススキンケアの「堅実な」成長はアヌアの店内拡大に支えられたと述べた。
B・ライリー・セキュリティーズの消費者向け製品を専門とする調査アナリスト、アンナ・グラスゲン氏は、「市場では引き続きこの傾向に傾くと予想される」と述べた。 「オリーブ ヤング ストアの立ち上げが大成功を収めたことで、K ビューティーに対する需要が非常に高まっていることは明らかであり、消費者がいる場所に彼らが存在する必要があるのです。」
アルタはCNBCのコメント要請に応じなかった。同社の第2四半期の数字は、投資家にこの点をさらに明確にする可能性がある。この報告書は8月5日に発表される予定だ。
しかし、Glaessgen 氏は、K ビューティーの人気にはリスクがあると強調しました。K ビューティーは通常、高級スキンケアよりも低価格帯であることを考えると、このカテゴリー全体の平均販売価格が影響を受ける可能性があります。
「通常なら何かに30～60ドルを費やす高級スキンケアの買い物客だった人々が、今は10代～20代で支出しているとすれば、明らかにそのカテゴリーの平均支出額に下方圧力がかかっている」と彼女は言う。
彼女は、そのリスクは、高級スキンケアを始めたばかりの若い世代からより多く来ると見ています。同アナリストは、「20ドルや30ドルの製品に有効性が見出された場合、数百ドルの製品に買い替えてもらうのはより難しいかもしれない」と述べた。
ターゲット、コストコ、ウォルマートなどの他の小売業者が、K-ビューティー市場への浸透をさらに高めることも、このカテゴリーに幅広い視聴者を引き付けるのに役立つ可能性があります。
Target はすでにその分野で大きな進歩を遂げています。同社の広報担当者がCNBCに語ったところによると、同社は春にKビューティーアイテムを4倍に増やし、スキンケア、メイクアップ、ヘアケアにわたる150以上の新製品と10以上の新ブランドを提供した。同社はさらに多くの製品を導入する予定だ。
ターゲットのマーチャンダイジング、必需品、美容担当上級副社長のアマンダ・ヌシュ氏はCNBCに対し、「美容はゲストにとって非常に重要で非常に個人的なカテゴリーであり、私たちのチームはゲストが最も望むブランドやトレンドを提供することで、マーチャンダイジングの権限を柔軟に活用できるよう常に努めている」と語った。 「K-beautyが良い例です。」
レイモンド・ジェームスのアナリスト、オリビア・トン氏は、カナダに本拠を置きエスティ・ローダー傘下のジ・オーディナリーなどのブランドの製品には、ツボクサなどのKビューティー分野で人気のある成分が組み込まれていると強調した。
「このカテゴリーに対する見方は全く異なるものです。メンテナンスがより重要で、原材料が非常に多く、市場投入までのスピードも明らかに一定です」と彼女はCNBCに語った。 「私たちは、これが単なるトレンドだとは考えていません。これは市場におけるちょっとした変化だと考えています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/18/korean-beauty-products-are-becoming-mainstream-in-the-us.html",
    publishedAt: "2026-07-18T11:45:35+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 10,
  },
  {
    id: "warshgpt-how-wall-street-is-adapting-to-0b97aaa6",
    title: "'WarshGPT': How Wall Street is adapting to the Fed's new era of communication",
    titleJa: "「WarshGPT」: ウォール街はFRBのコミュニケーション新時代にどのように適応しているか",
    summaryJa: "F/m Investments のワシントン D.C. オフィスは、連邦準備制度理事会本部から車ですぐの距離にあります。しかし、中央銀行の新しいリーダーシップの下で、最高経営責任者（CEO）のアレクサンダー・モリス氏は、距離感がはるかに大きいことに気づいた。FRBのケビン・ウォーシュ議長は5月の就任以来、中央銀行の将来を見据えたコミュニケーションの総点検に着手した。この動きはモリス氏のような市場参加者にとって警鐘を鳴らした。彼らの投資理論の一部はFRBが金利をどうするか予測することに依存しているからだ。",
    bodyOriginal: `F/m Investments' Washington, D.C., office is just a short drive from the Federal Reserve's headquarters. But under the central bank's new leadership, CEO Alexander Morris has found the distance feeling far greater.
Fed Chairman Kevin Warsh embarked on an overhaul of the central bank's forward-looking communication since taking the post in May. That move sounded the alarm for market participants like Morris, whose investing theses rely in part on predicting what the Fed will do with interest rates.
"We've made a pretty good business out of decoding Fedspeak," said Morris, referring to the jargon-heavy communication preferred by central bank leaders. "And he just said he was going to go quiet on us."
This week, Morris' firm, which manages exchange-traded funds tied to inflation and U.S. Treasurys, released "WarshGPT." It's an artificial intelligence-powered tool that parses nearly 1,800 documents and transcripts from Warsh, with the goal of helping users understand how he may analyze issues related to the economy or monetary policy.
F/m Investments is one of many financial institutions readying for an era with less public forecasting from Warsh's Fed. In some cases, they're turning to AI models to gain an edge in investing.
"Whether the Fed is providing a lot of information or a little information, investors have to understand what the Fed is likely to do in the future," said Gary Richardson, a former historian at the central bank who's now a University of California, Irvine, economics professor. "With limited information, people are going to try to do anything they can to figure out what the Fed is thinking."
Greetings and briefcase sizes
Investors and Fed watchers have wondered if former Chairman Alan Greenspan's communication style can serve as a baseline for what to expect under Warsh.
In that era, Richardson said people joked that Greenspan simply saying "good evening" could cause a market decline. Financial media tracked a so-called briefcase indicator, which operated on the theory that Greenspan carrying a bulkier bag meant he accumulated evidence for why borrowing costs should be altered.
Already, Warsh has made expectations clear for a shift in how the Fed publicizes information. One of his task forces aimed at reshaping the Fed's operations is focused on how the central bank communicates.
June's Federal Reserve meeting statement — the first such release under Warsh — contained around 130 words, down from figures above 300 words seen in prior publications, a CNBC analysis found. Warsh, who acknowledged the statement was "shorter" and "simpler," said it purposefully excluded forward guidance.
In his first post-decision press conference as chairman, Warsh allocated 5% of sentences to policy-relevant topics, according to UBS. That number came in at 27% for an average meeting under predecessor Jerome Powell, the bank said.
'One word can move dollars'
F/m Investments' WarshGPT chatbot cost less than $1,000 to build with Anthropic's Claude model, despite the name being a riff on rival OpenAI's ChatGPT. It took roughly two weeks to create from inception to release, a timeframe that included pre-rollout testing by a group that included Fed alumni and newsletter writers.
In addition to Warsh's communications, the product also taps into economic and political history to ensure its responses have context. But F/m set limits to what WarshGPT can do: The bot doesn't talk as Warsh and will not offer offer forward statements or forecasts.
F/m isn't the only large firm reconsidering its strategies and tools for understanding a Warsh-led central bank.
UBS runs an interactive dashboard for clients to track the Fed's policy tone. It allows users to have an unbiased assessment of Warsh's commentary during meetings, according to Elena Amoruso, a strategist at the Swiss bank.
Following Warsh's debut policy meeting as chief last month, Amoruso told clients that Warsh's policy-relevant comments were "overwhelmingly hawkish." The central bank leader's stance was driven by his views on the labor market and growth, she said, in addition to the state of inflation.
"Arguably, this is the most high-value data set … in terms of how much one word can move dollars," Amoruso told CNBC.
At JPMorgan Asset Management, chief global strategist David Kelly has some backup plans if the Fed stops putting out key releases. If the central bank does away with the "dot plot," for instance, Kelly said his team will more closely mull over speeches by members of the Federal Open Market Committee — the group tasked with setting interest rates — to get a sense of how they would next vote.
To be sure, Kelly said major changes to Fed communication would likely take several months to announce and implement. He said the final decisions may not be as drastic as some expect.
"Just like the Federal Reserve says it can be patient in adjusting interest rates to the economy, we can be patient in adjusting our resources," Kelly said.
'Less clarity'
Still, investors anticipate having less forward guidance from the Fed could result in bigger market swings after policy decisions or members' public appearances. Some traders see a chance to rake in larger returns in this environment.
"If there's less communication about the reaction function, I actually think that's a negative for the economy," said Steve Friedman, a New York Fed alum who's now senior macroeconomist at MacKay Shields. However, "less clarity about what the Fed may do can actually be a source of alpha for investors if you have a robust framework for thinking about the economy and monetary policy."
If Warsh dials back public speaking engagements, Friedman said he would more closely monitor speeches from Fed Governor Christopher Waller. Friedman described Waller as a "bellwether" for the broader committee.
Waller said this week that the Fed shouldn't be focused on "fighting the last war" with inflation, but that interest rate hikes could still be on the table.
Retail traders may need to further diversify their portfolios to account for added policy uncertainty under Warsh, according to UC-Irvine's Richardson. Investment firms looking to get ahead, meanwhile, will be spending big to hire Fed alumni who can help make predictions in a lower-transparency environment, Richardson said.
There are already differing expectations forming for how the Fed will proceed with policy in the coming months.
Fed funds futures traders are pricing in an almost 59% likelihood that the central bank increases interest rates in September, according to CME's FedWatch tool. On the other hand, Kalshi traders think it's most likely that the Fed will keep rates unchanged at that meeting.
"For ordinary investors, it's already really hard for them to figure out what's going on," Richardson said. "It's going to become much harder."`,
    bodyJa: `F/m Investments のワシントン D.C. オフィスは、連邦準備制度理事会本部から車ですぐの距離にあります。しかし、中央銀行の新しいリーダーシップの下で、最高経営責任者（CEO）のアレクサンダー・モリス氏は、距離感がはるかに大きいことに気づいた。
FRBのケビン・ウォーシュ議長は5月の就任以来、中央銀行の将来を見据えたコミュニケーションの総点検に着手した。この動きはモリス氏のような市場参加者にとって警鐘を鳴らした。彼らの投資理論の一部はFRBが金利をどうするか予測することに依存しているからだ。
モリス氏は、中央銀行指導者が好む専門用語の多いコミュニケーションについて言及し、「フェドスピークを解読することで、かなり良いビジネスができた」と語った。 「そして彼は、私たちに対して黙るつもりだと言いました。」
インフレと米国債に関連する上場投資信託（ETF）を運用するモリスの会社は今週、「WarshGPT」を発表した。これは人工知能を活用したツールで、ウォーシュ氏の約 1,800 件の文書とトランスクリプトを解析し、ウォーシュ氏が経済や金融政策に関連する問題をどのように分析するかをユーザーが理解できるようにすることを目的としています。
F/m Investmentsは、ウォーシュFRBからの予測があまり公表されない時代に備えている多くの金融機関のうちの1つである。場合によっては、投資で優位性を得るために AI モデルに目を向けています。
元中央銀行の歴史学者で、現在はカリフォルニア大学アーバイン校の経済学教授ゲイリー・リチャードソン氏は、「FRBが多くの情報を提供しているか、少ない情報を提供しているかにかかわらず、投資家はFRBが将来何をする可能性が高いかを理解する必要がある」と述べた。 「限られた情報の中で、人々はFRBが何を考えているのかを理解するためにあらゆる手段を講じようとするだろう。」
ご挨拶とブリーフケースのサイズ
投資家やFRBウォッチャーは、アラン・グリーンスパン前議長のコミュニケーションスタイルが、ウォーシュ政権下で何が期待されるかのベースラインとして機能するのではないかと疑問を抱いている。
リチャードソン氏によると、当時、人々はグリーンスパン氏が「こんばんは」と言うだけで市場の下落を引き起こす可能性があると冗談を言ったという。金融メディアはいわゆるブリーフケース指標を追跡したが、これはグリーンスパン氏がよりかさばるバッグを運んでいるということは、借入コストを変更する必要がある理由の証拠を蓄積していることを意味するという理論に基づいていた。
ウォーシュ氏はすでに、FRBの情報公開方法の変化への期待を明らかにしている。 FRBの運営再構築を目指す同氏のタスクフォースの1つは、中央銀行のコミュニケーション方法に焦点を当てている。
CNBCの分析によると、6月の連邦準備制度理事会声明（ウォーシュ政権下での初の発表）には約130ワードが含まれており、以前の出版物に見られた300ワードを超える数字から減少した。ウォーシュ氏は、声明が「短く」「シンプル」だったと認め、フォワードガイダンスを意図的に除外したと述べた。
UBSによると、ウォーシュ氏は議長としての決定後の最初の記者会見で、文章の5％を政策関連の話題に割り当てた。同銀行によると、この数字は前任のジェローム・パウエル氏の下での平均的な会合では２７％だったという。
「一言でお金が動く」
F/m Investments の WarshGPT チャットボットは、名前がライバル OpenAI の ChatGPT をもじったものであるにもかかわらず、Anthropic の Claude モデルを使用して構築するのにかかるコストは 1,000 ドル未満でした。構想からリリースまでの作成にはおよそ 2 週間かかり、その期間には FRB の卒業生やニュースレターの執筆者を含むグループによる事前テストも含まれていました。
ウォーシュのコミュニケーションに加えて、この製品は経済的および政治的歴史も活用して、その応答に文脈があることを保証します。しかし、F/M は、WarshGPT ができることに制限を設けています。ボットは Warsh として会話せず、オファーの先渡しステートメントや予測を提供しません。
ウォーシュ主導の中央銀行を理解するための戦略とツールを再検討している大企業はF/Mだけではない。
UBSは、顧客がFRBの政策方針を追跡するための対話型ダッシュボードを運営している。スイス銀行のストラテジスト、エレナ・アモルソ氏によると、これによりユーザーは会議中にウォーシュ氏の解説を公平に評価できるようになるという。
ウォーシュ氏が先月首席としてデビューした政策会議後、アモルソ氏は顧客に対し、ウォーシュ氏の政策関連の発言は「圧倒的にタカ派的」だと語った。同氏は、中銀総裁のスタンスはインフレ状況に加え、労働市場と成長に関する同氏の見解によって決定されたと述べた。
アモルソ氏はCNBCに対し、「おそらく、これは、1つの単語がどれだけドルを動かすことができるかという点で、最も価値の高いデータセットだ」と語った。
JPモルガン・アセット・マネジメントのチーフ・グローバル・ストラテジスト、デービッド・ケリー氏は、FRBが主要リリースの発表を停止した場合のバックアップ計画をいくつか用意している。例えばケリー氏は、中央銀行が「ドットプロット」を廃止した場合、チームは連邦公開市場委員会（金利設定を担当する団体）のメンバーの演説をより綿密に検討し、次回の投票方法を把握すると述べた。
確かにケリー氏は、FRBのコミュニケーションに対する大きな変更は発表から実施までに数カ月かかる可能性が高いと述べた。同氏は、最終決定は一部の人が期待するほど抜本的なものではない可能性があると述べた。
ケリー氏は「連邦準備理事会が経済に合わせて金利を調整するのに忍耐強くなれると言っているのと同じように、我々も資源を調整するのに忍耐強くなれる」と語った。
「鮮明度が低下する」
それでも投資家は、FRBからのフォワードガイダンスが減少すると、政策決定やメンバーの公の場への出席後に市場の変動が大きくなる可能性があると予想している。一部のトレーダーは、この環境でより大きな利益を得るチャンスがあると考えています。
ニューヨーク連銀の卒業生で現在マッケイ・シールズのシニア・マクロエコノミストを務めるスティーブ・フリードマン氏は、「反応関数についてのコミュニケーションが減れば、それは経済にとってマイナスになると実際に思う」と語った。しかし、「経済と金融政策について考えるための強固な枠組みがあれば、FRBが何をするかについて不明確であっても、実際には投資家にとってアルファの源泉となり得る。」
フリードマン氏は、ウォーシュ氏が公の場での講演活動を縮小する場合、クリストファー・ウォーラーFRB理事の講演をより注意深く監視すると述べた。フリードマン氏はウォーラー氏を広範な委員会の「先導者」と表現した。
ウォーラー総裁は今週、FRBはインフレとの「最終戦争との戦い」に集中すべきではないとしながらも、利上げが依然として検討の対象となる可能性があると述べた。
カリフォルニア大学アーバイン校のリチャードソン氏によると、ウォーシュ政権下で政策の不確実性が増すことに対処するため、個人トレーダーはポートフォリオをさらに多様化する必要があるかもしれないという。一方、成功を目指す投資会社は、透明性の低い環境での予測に貢献できるFRB卒業生の雇用に多額の費用を投じるだろうとリチャードソン氏は述べた。
FRBが今後数カ月間に政策をどのように進めるかについては、すでにさまざまな予想が形成されている。
ＣＭＥのフェドウォッチツールによると、フェデラルファンド先物トレーダーらは中銀が９月に利上げする可能性をほぼ５９％織り込んでいる。一方、カルシのトレーダーらは、FRBが今回の会合で金利を据え置く可能性が最も高いと考えている。
「一般の投資家にとって、何が起こっているのかを理解するのはすでに非常に困難だ」とリチャードソン氏は語った。 「それはもっと難しくなるだろう。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/18/warshgpt-federal-reserve-communications-task-force-warsh.html",
    publishedAt: "2026-07-18T11:31:03+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 9,
  },
  {
    id: "how-are-prediction-markets-taxed-the-irs-b1af1b5c",
    title: "How are prediction markets taxed? The IRS hasn’t provided guidance yet",
    titleJa: "予測市場にはどのように課税されますか? IRSはまだガイダンスを提供していない",
    summaryJa: "予測市場の人気が高まるにつれ、トレーダーは重要な問題に直面しています。それは、内国歳入庁が賞金の課税方法について詳細を明らかにしていないということです。今年も半分以上終わったが、IRSは予測市場の勝敗に対する連邦税の扱いに関するガイダンスをまだ共有していない。",
    bodyOriginal: `As prediction markets grow in popularity, traders are facing a key question: The Internal Revenue Service hasn't shared any details on how their winnings are to be taxed.
The year is more than halfway over, but the IRS has yet to share any guidance on the federal tax treatment for prediction market winnings and losses.
"I think it's extremely confusing for the users of prediction markets because they're getting a lot of [conflicting] guidance," said Ryan Schutz, a former IRS special agent and founder of First There Tax.
Winnings from prediction markets could fit into several categories, tax experts said: gambling income, capital gains or treatment under a Section 1256 contract.
President Donald Trump's "One Big Beautiful Bill Act" has a provision that applies a 90% cap on gambling loss deductions. Previously, if someone won $100 and lost $100, they wouldn't pay any taxes. Under the new framework, however, a taxpayer would only be able to deduct $90 and still wind up with $10 of taxable winnings.
"Sports gambling is actually in very bad tax treatment right now," said Nathan Goldman, a professor of accounting at North Carolina State University.
Under capital gains treatment, taxpayers who have losses that exceed gains can use up to $3,000 in realized losses to offset ordinary income.
Finally, futures contracts can be deemed Section 1256 contracts. In this case, 60% of the capital gain is taxed at the lower long-term rate, while 40% is subject to the higher short-term rate. Long-term capital gains are taxed at either 0%, 15% or 20%, while short-term gains are taxed as ordinary income, which can have a rate as high as 37%. That 60/40 split is consistent regardless of how long an asset was held.
Those guidelines are much more attractive to taxpayers than those categorizing their income as gambling.
"For the vast majority of people, the 1256 treatment or capital gain treatment would result in the least amount of tax," said Schutz.
Unique event contracts may face different treatment
In May, prediction market platform Kalshi introduced perpetual futures, or "perps," which have no expiration dates. Because perps do not follow the same structure as a traditional event contract, Schutz said different guidelines may apply.
"I could definitely see an argument of someone saying that event contracts could have a different categorization than perpetuals," he said. "When I first found out about the perpetuals, they felt more like a real financial contract because they don't have a specific end date and that kind of tracks with the mechanics of 1256."
Without guidance from the IRS, tax experts say it’s tricky to determine the tax treatment that may apply to prediction market contracts, such as which team will win the World Cup final on Sunday.
"Some contracts may look more like sports wagering, while others may resemble financial or economic forecasting," said George Salis, chief economist and senior tax policy director at Vertex. "That range makes it harder to create one simple tax framework that applies cleanly across every type of contract."
Event contracts related to sports continue to dominate on leading prediction market platforms and face high scrutiny from states and critics, who argue such contracts are identical to what sports betting sites offer.
While both Kalshi and Polymarket declined to comment on what role prediction market platforms can play in ensuring their users have a better understanding of their tax obligations, both platforms do provide users with a Form 1099 to report activity. Taxpayers still need to report their earnings even if they don't receive a 1099.
Neither the IRS or the Department of Treasury responded to CNBC's request for comment.
States say it's gambling
Prediction markets may generate tax revenue for states if its contracts would be considered gambling.
"Treating [contracts] as gambling income is more beneficial to [states], because that's a revenue driver," Schutz said.
After a 2018 Supreme Court decision, which gave states the power to regulate sports gambling, states like Oregon, New York and New Hampshire have implemented at least a 50% tax on online sports betting sites.
The Commodity Futures Trading Commission asserts its jurisdiction over prediction markets, saying that the platforms' event contracts are structured as swaps.
Unlike other states, North Carolina recognized prediction markets as operating under the CFTC. The state imposed a 6% tax on prediction market operators and a 23% tax on sports betting sites. That move helps North Carolina possibly avoid getting sued by prediction market platforms, said Goldman.
"I think North Carolina is pretty much saying, 'Maybe if we go in with a lower number, we won't have as big of a fight in the courtroom over whether we're allowed to impose this,'" Goldman said.
Jurisdiction battle
Multiple states are involved in legal proceedings with prediction market platforms, arguing that they are running illegal sports betting operations. The CFTC has entered the fray, suing to defend what it claims is its exclusive jurisdiction over event contracts.
Earlier this month, a New York federal judge rejected Kalshi's request to stop New York from implementing its state gambling laws on the platform's sports-related event contracts.
The legal action has also made the tax picture complicated from a federal point of view.
"If states come in and they start enacting their own laws, we have these converging laws all over the place and that makes what Washington ultimately does a lot more challenging," Goldman said.
While there is no clear roadmap on how prediction markets are levied, tax experts told CNBC they are eager for clarity.
"I would love to see IRS guidance. I think that would be the most definitive solution," Schutz said." I think the IRS might be hesitant to come out with guidance that conflicts with the CFTC position."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `予測市場の人気が高まるにつれ、トレーダーは重要な問題に直面しています。それは、内国歳入庁が賞金の課税方法について詳細を明らかにしていないということです。
今年も半分以上終わったが、IRSは予測市場の勝敗に対する連邦税の扱いに関するガイダンスをまだ共有していない。
元国税局特別捜査官でファースト・ゼア・タックス創設者のライアン・シュッツ氏は、「予測市場のユーザーにとっては、（矛盾する）ガイダンスが数多く提供されているため、非常に混乱していると思う」と述べた。
税務専門家らによると、予測市場からの賞金はギャンブル収入、キャピタルゲイン、または第1256条契約に基づく扱いなど、いくつかのカテゴリーに該当する可能性があるという。
ドナルド・トランプ大統領の「One Big Beautiful Bill Act」には、ギャンブル損失控除に90％の上限を適用する条項がある。以前は、誰かが 100 ドル勝って 100 ドル負けた場合、税金は支払われませんでした。しかし、新しい枠組みの下では、納税者は90ドルしか控除できず、それでも最終的に課税対象となる賞金は10ドルになる。
ノースカロライナ州立大学の会計学教授ネイサン・ゴールドマン氏は、「スポーツ賭博は現在、実際に非常に悪い税務処理を受けている」と述べた。
キャピタルゲインの扱いにより、利益を超える損失を抱えた納税者は、最大3,000ドルの実現損失を経常利益と相殺することができます。
最後に、先物契約は第 1256 条契約とみなすことができます。この場合、キャピタルゲインの 60% には低い長期税率が適用され、40% には高い短期税率が適用されます。長期キャピタルゲインには 0%、15%、または 20% のいずれかが課税されますが、短期利益には通常の所得として課税され、その税率は 37% に達する場合があります。この 60/40 の分割は、資産の保有期間に関係なく一貫しています。
これらのガイドラインは、納税者にとって、収入をギャンブルとして分類するガイドラインよりもはるかに魅力的です。
「大多数の人にとって、1256の扱いかキャピタルゲインの扱いが最も少ない税金となるだろう」とシュッツ氏は述べた。
ユニークなイベント契約は異なる扱いを受ける可能性がある
予測市場プラットフォームのカルシは5月、有効期限のない永久先物、つまり「パープ」を導入した。犯罪者は従来のイベント契約と同じ構造に従っていないため、異なるガイドラインが適用される可能性があるとシュッツ氏は述べた。
「イベント契約は永久契約とは異なるカテゴリーに分類される可能性があるという誰かの議論が目に見えてわかりました」と彼は言う。 「永久契約について初めて知ったとき、具体的な終了日がなく、1256 年の仕組みを踏襲しているため、実際の金銭的な契約のように感じました。」
IRSの指導がなければ、日曜のワールドカップ決勝でどのチームが勝つかなど、予測市場の契約に適用される可能性のある税務上の扱いを決定するのは難しいと税務専門家らは言う。
バーテックスのチーフエコノミスト兼シニア税務政策ディレクターのジョージ・サリス氏は、「一部の契約はスポーツ賭博に似ているかもしれないが、他の契約は金融や経済予測に似ているかもしれない」と述べた。 「その範囲により、あらゆる種類の契約にきれいに適用される単一の単純な税の枠組みを作成することが困難になります。」
スポーツに関連したイベント契約は引き続き主要な予想市場プラットフォームで優勢であり、そのような契約はスポーツ賭博サイトが提供するものと同一であると主張する州や評論家からの厳しい監視にさらされている。
カルシとポリマーケットの両社は、ユーザーが納税義務をより深く理解できるようにする上で予測市場プラットフォームがどのような役割を果たすことができるかについてコメントを拒否したが、両プラットフォームはユーザーに活動を報告するためのフォーム1099を提供している。納税者は、1099 を受け取っていない場合でも、収入を報告する必要があります。
IRSも財務省もCNBCのコメント要請に応じなかった。
各州はギャンブルだと主張
予測市場は、その契約がギャンブルとみなされる場合、州に税収をもたらす可能性がある。
「（契約を）ギャンブル収入として扱うことは、（州）にとってより有益です。それが収入の原動力となるからです」とシュッツ氏は述べた。
各州にスポーツ賭博を規制する権限を与えた2018年の最高裁判所の判決を受けて、オレゴン州、ニューヨーク州、ニューハンプシャー州などの州は、オンラインスポーツ賭博サイトに少なくとも50％の税金を導入した。
商品先物取引委員会は、プラットフォームのイベント契約はスワップとして構成されているとして、予測市場に対する管轄権を主張している。
他の州とは異なり、ノースカロライナ州は予測市場が CFTC の下で運営されていると認めた。同州は予想市場運営者に６％、スポーツ賭博サイトに２３％の税を課した。この動きにより、ノースカロライナ州は予測市場プラットフォームからの訴訟を回避できる可能性があるとゴールドマン氏は述べた。
「ノースカロライナ州は、おそらく『もっと低い数字で臨めば、これを課すことが許されるかどうかを巡って法廷でこれほど大きな争いは起こらないだろう』と言っているのだと思う」とゴールドマン氏は語った。
所轄の戦い
複数の州が、違法なスポーツ賭博運営を行っているとして、予測市場プラットフォームを巡る訴訟に関与している。 CFTCはこの争いに加わり、イベント契約に関する独占的管轄権を主張するものを擁護するために訴訟を起こした。
今月初め、ニューヨーク州の連邦判事は、同プラットフォームのスポーツ関連イベント契約にニューヨーク州が州賭博法を施行するのを阻止するというカルシ氏の要請を却下した。
この訴訟により、連邦の観点からも税務の状況が複雑になった。
「もし州が参入して独自の法律を制定し始めれば、あちこちでこのような法律が収束することになり、それが最終的にワシントンが行うことをより困難なものにする」とゴールドマン氏は語った。
予測市場への課税方法について明確なロードマップはないが、税務専門家らはCNBCに対し、明確化を望んでいると語った。
シュッツ氏は「IRSのガイダンスをぜひ見てみたい。それが最も決定的な解決策になると思う」とし、「IRSはCFTCの立場と相反するガイダンスを出すのをためらうのではないかと思う」と語った。
開示: CNBC とカルシには、顧客の獲得と少数出資を含む商業関係があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/18/how-are-prediction-markets-taxed-the-irs-hasnt-provided-guidance-yet.html",
    publishedAt: "2026-07-18T11:24:54+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 7,
  },
  {
    id: "us-strikes-hit-iran-for-seventh-consecut-9fb48f59",
    title: "US strikes hit Iran for seventh consecutive night",
    titleJa: "米国による7夜連続のイラン空爆",
    summaryJa: "米国による7夜連続のイラン空爆- 公開されました",
    bodyOriginal: `US strikes hit Iran for seventh consecutive night
- Published
The US military said it carried out the seventh night of strikes on Iran since President Donald Trump declared the temporary ceasefire agreement was "over".
US Central Command (Centcom) said its forces "hit surveillance sites, military logistics infrastructure, underground weapons storage, and maritime capabilities".
Iran said it responded by targeting US allies in the region including Kuwait, which said another of its power and water plants had been hit following a similar attack the previous day.
"Another electricity and water distillation plant was targeted by a hostile attack that led to a fire erupting in one of the plant's components," with some power generation units deactivated, the ministry of electricity and water said.
Jordan's military also said it had intercepted 10 Iranian missiles fired into its airspace overnight. No damage was reported. Bahrain also said its air defences had "thwarted" Iranian attacks.
Centcom said it had ended its strikes at 21:30 ET (02:30 BST) after several hours.
"US forces employed fighter aircraft, aerial drones, and warships in addition to other assets," it said in its statement.
Explosions were heard in the central city of Yazd and at Qeshm island and the port of Bandar Abbas next to the strait, Iranian state media reported.
The US and Iran agreed to stop fighting in June to enable talks to end the war.
The ceasefire was largely observed, even though there were Iranian attacks on oil tankers to force them to comply with Tehran's demands that ships seek authorisation to cross the Strait of Hormuz. The Iranian attacks on shipping were followed by US strikes against Iran.
However, the talks appeared to make no headway and Trump declared the ceasefire over last week.
Since then, in addition to attacking Iranian sites, the US has also re-imposed a naval blockade of Iranian ports.
Iran has declared the Strait closed to shipping and traffic has largely stopped.
A fifth of the world's oil and liquefied natural gas used to transit through the strait and the head of the International Energy Agency, Fatih Birol, has said he has concerns about global energy supplies.
The US military has also denied a report in Iran's Fars news agency that two oil tankers "exploded and caught fire while passing through a mined route south of the Strait of Hormuz". Centcom said: "Like most IRGC claims, this is false."
On Friday, Iran's armed forces claimed to have attacked multiple US military facilities across the Gulf region in Kuwait, Bahrain, Jordan and – for the first time – Syria, which the US denied.
Sources have told the BBC's US partner CBS news that several American service members were injured during Iranian attacks on two Jordanian bases over the past week.
The US has meanwhile denied Tehran's earlier claims that the US attacked civilian infrastructure in Iran, including bridges, a train station and an airport.
BBC Verify and BBC Persian have verified footage of damage to Gariveh Bridge, after night videos showed a ball of flames on top of it. Daylight images showed a crumbled stretch of road with rubble around the broken bridge. Provincial authorities in the affected region, Hormozgan province, said seven people were killed in the attacks.
A White House spokesperson told the BBC the US had "carried out strikes exclusively on military targets, including military logistics infrastructure".
The US also said it had destroyed a control tower in the port of Chabahar, with Defence Secretary Pete Hegseth sharing an image of the tower collapsing as it was hit by a strike. Centcom said the tower was part of an IRGC maritime surveillance network.`,
    bodyJa: `米国による7夜連続のイラン空爆
- 公開されました
米軍は、ドナルド・トランプ大統領が一時停戦合意が「終了した」と宣言して以来、7日目の夜にイランへの攻撃を実施したと発表した。
米中央軍（セントコム）は、同軍が「監視施設、軍の兵站インフラ、地下兵器貯蔵庫、海洋能力を攻撃した」と述べた。
イランは、前日同様の攻撃を受けて別の発電所と給水施設が攻撃を受けたと発表したクウェートを含む、地域の米国同盟国を標的にすることで対応したと述べた。
電力・水道省は、「別の電力・水蒸留プラントが敵対的な攻撃の標的となり、プラントの構成要素の1つで火災が発生し」、一部の発電ユニットが停止したと発表した。
ヨルダン軍はまた、一夜にして領空に発射されたイランのミサイル１０発を迎撃したと発表した。被害は報告されていない。バーレーンはまた、防空がイランの攻撃を「阻止」したと述べた。
セントコムは、数時間後の東部時間21時30分（BST02時30分）にストライキを終了したと発表した。
「米軍は他の資産に加えて、戦闘機、無人機、軍艦を使用した」と声明で述べた。
イラン国営メディアによると、中心都市ヤズドやケシュム島、海峡に隣接するバンダル・アッバス港でも爆発音が聞こえた。
米国とイランは６月、戦争終結交渉を可能にするため戦闘を停止することで合意した。
船舶のホルムズ海峡通過許可を求めるテヘランの要求に従うようイラン側が石油タンカーを攻撃したにもかかわらず、停戦はおおむね守られた。イランによる海運攻撃に続いて、米国によるイラン攻撃が行われた。
しかし、協議は進展していないようで、トランプ大統領は先週停戦を宣言した。
それ以来、米国はイランの拠点を攻撃することに加えて、イランの港の海上封鎖も再度課した。
イランは同海峡の船舶航行禁止を宣言し、交通はほぼ停止した。
世界の石油と液化天然ガスの5分の1がこの海峡の通過に使用されており、国際エネルギー機関のファティ・ビロル長官は世界のエネルギー供給に懸念を抱いていると述べた。
米軍はまた、タンカー２隻が「ホルムズ海峡の南で地雷が掘られた航路を通過中に爆発、火災が発生した」というイランのファールス通信の報道を否定した。セントコムは「IRGCのほとんどの主張と同様、これは誤りである」と述べた。
金曜日、イラン軍は湾岸地域のクウェート、バーレーン、ヨルダン、そして初めてシリアの複数の米軍施設を攻撃したと主張したが、米国はこれを否定した。
関係者がBBCの米国パートナーCBSニュースに語ったところによると、過去1週間にわたるイランによるヨルダンの2つの基地への攻撃で数人の米軍人が負傷した。
一方、米国は、米国がイランの橋、駅、空港などの民間インフラを攻撃したとするテヘランのこれまでの主張を否定した。
BBC VerifyとBBC Persianは、夜のビデオでガリヴェ橋の上に火の玉が映ったことを受けて、ガリヴェ橋の損傷の映像を検証した。昼間の画像には、壊れた橋の周囲に瓦礫があり、崩れた道路が広がっているのが映っていた。被害地域のホルモズガン州当局は、この攻撃で７人が死亡したと発表した。
ホワイトハウス報道官はBBCに対し、米国は「軍の兵站インフラを含む軍事目標のみに空爆を行った」と語った。
米国はまた、チャバハル港の管制塔を破壊したと発表し、ピート・ヘグセス国防長官は、攻撃を受けて倒壊する管制塔の画像を共有した。セントコムは、この塔はIRGCの海上監​​視ネットワークの一部であると述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy748n8zx8ro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-18T07:33:40+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4c76/live/bd872fe0-823f-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 4,
  },
  {
    id: "space-start-up-launches-india-s-first-co-6a1bdf34",
    title: "Space start-up launches India’s first commercial rocket designed for orbit",
    titleJa: "宇宙スタートアップがインド初の軌道用に設計された商用ロケットを打ち上げ",
    summaryJa: "ダイヤモンドと「軌道へのタクシー」：インドの宇宙野望の変革を目指すロケットが離陸- 公開されました",
    bodyOriginal: `Diamonds and 'cab to orbit': Rocket aiming to transform India's space ambitions takes off
- Published
What if launching a satellite was as easy as calling a cab?
That's the vision behind an Indian private rocket company that achieved its first orbital launch on Saturday.
Skyroot Aerospace, which recently became India's first space tech unicorn after reaching $1.1bn valuation, launched Vikram-1 from the Indian Space Research Organisation's (Isro) launch facility in Sriharikota in southern India.
The seven-storey rocket lifted off at 12:05 India time [06:35 GMT] and travelled 280 miles (450km) to reach the Low Earth Orbit in a 16-minute flight.
Skyroot is the first Indian private company to launch a rocket into orbit, making India only the third country, after the US and China, with a private company capable of orbital launches.
"Vikram-1 Test Flight-1 has reached orbit... History is made," the company posted , externalon X.
The successful Vikram-1 launch will take Skyroot closer to its goal of offering what it calls a "cab service to space", where companies can hire a rocket "to ride to a unique location in the orbit to place a satellite or visit a space station".
The rocket - named after Vikram Sarabhai, who is called the father of India's space programme - is small and has the capacity to carry payloads of up to 350kg, Skyroot co-founder and CEO Pawan Kumar Chandana told the BBC before the launch.
Chandana says today, access to space remains "a major bottleneck, with satellite operators often waiting for months or even years for a launch opportunity" and that their venture expects to change that.
He says Skyroot aims to cut long waits for satellite launches by offering dedicated missions for small payloads.
Instead of sharing space on large rockets that fly on fixed schedules, customers can book a launch tailored to their satellite and its required orbit - much like taking a taxi instead of waiting for a train.
"If you want to just go to a friend's house, you don't need a train, you book a cab, an Uber. What we are offering is a cab service to space, which can be used to ride to a unique location in the orbit to place a satellite or visit a station."
Skyroot's model would appear similar to that of Rocket Lab in the US, which provides small-lift launch vehicles.
The Indian test launch mission called Aagman - Sanskrit for arrival - has placed into orbit six payloads.
They include scientific instruments such as a robotic arm for removing space debris, an Earth observation camera and satellites, including one from a German company.
But they also include two symbolic payloads which have generated a buzz in India. One is a lotus made of lab-grown diamonds and a tiny gold rocket with micro-sculptures of three of India's best-known scientists.
Each smaller than a grain of rice, the sculptures pays tribute to Nobel Prize-winning physicist CV Raman and aerospace engineer and former Indian president APJ Abdul Kalam, besides Sarabhai.
"We exist because of the Indian space programme, we stand on the shoulders of our early visionaries and this is our way of paying tribute to three great scientists who shaped India's space programme," Chandana explained.
He said the diamond lotus - called Cosmic Bloom and developed by Cosmos Diamonds - is an artist's tribute to space and celebrates India's creativity. It is expected to remind us all of the line "like a diamond in the sky" - from the popular nursery rhyme Twinkle, Twinkle.
Saturday's launch is the first of two test flights Skyroot plans to do this year before they launch commercially next year.
"We have the capacity to build one rocket every month at our factory in the southern city of Hyderabad," Chandana said.
Skyroot came into being in 2018 when Chandana and Naga Bharath Daka - who were colleagues at Isro - quit their jobs and co-founded the space-tech start-up to build rocket components for satellites.
In 2020, India opened the space sector to private firms, allowing them to build rockets and satellites and use Isro's launch facilities with the aim of increasing the country's share in the global business market from 2% at present to 10% by 2030.
Since then, the Indian government says more than 400 space start-ups have been set up in India, but Skyroot remains the most successful of them - and the only unicorn in the sector.
The company first made headlines in November 2022 when it launched India's first privately developed suborbital rocket.
Saturday's launch came at a time when India's space programme has been in focus following Isro's historic Moon, Mars and solar missions in recent years.
India plans to send astronauts into space next year, an orbiter to Venus by 2028 and build its own space station by 2035.
And Skyroot's cab service could also cater to Isro's space programmes, but Chandana says that "70-80% of our market would be the global economy".
"These would include satellites supporting services that millions rely on every day, from agriculture and fisheries to disaster management, communications, connectivity, navigation and national security. So, the economic opportunity is huge."`,
    bodyJa: `ダイヤモンドと「軌道へのタクシー」：インドの宇宙野望の変革を目指すロケットが離陸
- 公開されました
衛星の打ち上げがタクシーを呼ぶのと同じくらい簡単だったらどうなるでしょうか?
それが、土曜日に初の軌道上打ち上げを達成したインドの民間ロケット会社の背後にあるビジョンだ。
評価額が11億ドルに達し、最近インド初の宇宙技術ユニコーンとなったスカイルート・エアロスペースは、インド南部のシュリハリコタにあるインド宇宙研究機関（イスロ）の打ち上げ施設からヴィクラム1号を打ち上げた。
7階建てのロケットはインド時間12時5分（グリニッジ標準時6時35分）に打ち上げられ、280マイル（450km）を飛行し、16分間の飛行で地球低軌道に到着した。
スカイルートは、軌道上にロケットを打ち上げた最初のインドの民間企業であり、インドは米国と中国に次いで軌道上打ち上げが可能な民間企業を持つ3番目の国となった。
「ヴィクラム１試験飛行１号が軌道に到達…歴史が作られた」と同社は外部サイトＸに投稿した。
ヴィクラム1号の打ち上げ成功により、スカイルートは同社が「宇宙へのタクシーサービス」と呼ぶものを提供するという目標に近づくことになる。企業はロケットを雇って「衛星を設置したり、宇宙ステーションを訪問したりするために軌道上のユニークな場所に乗る」ことができる。
インドの宇宙計画の父と呼ばれるヴィクラム・サラバイ氏にちなんで名付けられたこのロケットは小型で、最大350kgのペイロードを運ぶ能力があるとスカイルートの共同創設者兼最高経営責任者（CEO）のパワン・クマール・チャンダナ氏は打ち上げ前にBBCに語った。
チャンダナ氏は今日、宇宙へのアクセスが依然として「大きなボトルネックであり、衛星事業者は打ち上げの機会を数か月、場合によっては数年も待つことが多い」とし、彼らのベンチャーがそれを変えることを期待していると語った。
同氏によると、スカイルートは小型ペイロード専用のミッションを提供することで、衛星打ち上げまでの長い待ち時間を短縮することを目指しているという。
顧客は、固定スケジュールで飛行する大型ロケットのスペースを共有するのではなく、電車を待つ代わりにタクシーに乗るのと同じように、衛星とその必要な軌道に合わせて打ち上げを予約することができます。
「ただ友人の家に行きたいだけなら、電車は必要ありません。タクシー、Uber を予約します。私たちが提供しているのは、宇宙へのタクシー サービスです。これを利用して、衛星を設置したり、ステーションを訪問したりするために、軌道上のユニークな場所に移動することができます。」
スカイルートのモデルは、小型打ち上げロケットを提供する米国のロケットラボのモデルに似ているだろう。
サンスクリット語で「アグマン」（到着を意味する）と呼ばれるインドの試験打ち上げミッションは、6機のペイロードを軌道上に投入した。
これらには、スペースデブリ除去用のロボットアーム、地球観測カメラ、衛星などの科学機器が含まれており、その中にはドイツ企業のものも含まれています。
ただし、インドで話題を呼んだ 2 つの象徴的なペイロードも含まれています。 1 つは、ラボ グロウン ダイヤモンドで作られた蓮の花と、インドで最も有名な科学者 3 人の微細彫刻が施された小さな金のロケットです。
それぞれ米粒よりも小さいこれらの彫刻は、サラバイのほかに、ノーベル賞を受賞した物理学者CVラマン氏と航空宇宙技術者で元インド大統領APJアブドゥル・カラム氏に敬意を表している。
「私たちはインドの宇宙計画のおかげで存在しており、初期の先見の明を持った人々の肩の上に立っており、これはインドの宇宙計画を形作った3人の偉大な科学者に敬意を表する私たちの方法です」とチャンダナ氏は説明した。
コズミック・ブルームと呼ばれ、コスモス・ダイアモンズ社が開発したダイヤモンド・ロータスは、芸術家の宇宙への賛辞であり、インドの創造性を称えるものであると同氏は語った。これは、人気童謡『きらきらきらきら』の一節「空のダイヤモンドのように」を思い出させると期待されています。
土曜日の打ち上げは、スカイルートが来年の商業打ち上げ前に今年計画している2つの試験飛行のうちの最初のものである。
「南部の都市ハイデラバードにある工場では、毎月1基のロケットを製造する能力がある」とチャンダナ氏は語った。
Skyroot は、Isro の同僚だった Chandana 氏と Naga Bharath Daka 氏が仕事を辞め、人工衛星用のロケット部品を製造する宇宙技術スタートアップを共同設立した 2018 年に誕生しました。
インドは2020年、世界のビジネス市場における同国のシェアを現在の2％から2030年までに10％に高めることを目指し、宇宙分野を民間企業に開放し、民間企業がロケットや人工衛星を製造し、イスロの打ち上げ施設を使用できるようにした。
それ以来、インド政府はインドで400社以上の宇宙関連スタートアップが設立されたと発表しているが、スカイルートは依然としてその中で最も成功しており、この分野で唯一のユニコーンである。
同社は2022年11月にインド初の民間開発の準軌道ロケットを打ち上げたときに初めて話題になった。
土曜日の打ち上げは、イスロによる近年の歴史的な月、火星、太陽ミッションに続き、インドの宇宙計画が注目を集めている時期に行われた。
インドは来年宇宙飛行士を宇宙に送り、2028年までに金星探査機を送り、2035年までに独自の宇宙ステーションを建設する計画だ。
また、スカイルートのタクシーサービスはイスロの宇宙計画にも対応できるが、チャンダナ氏は「われわれの市場の70～80％は世界経済になるだろう」と述べた。
「これらには、農業や漁業から災害管理、通信、接続、ナビゲーション、国家安全保障に至るまで、何百万人もの人々が毎日依存しているサービスをサポートする衛星が含まれる。したがって、経済的チャンスは非常に大きい。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyekv7rld3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-18T07:05:19+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d67c/live/812402b0-81c4-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 6,
  },
  {
    id: "trump-threatens-new-canada-tariffs-over-670d2595",
    title: "Trump threatens new Canada tariffs over fires sending 'filthy' air into US cities",
    titleJa: "トランプ大統領、米国の都市に「不潔な」空気を送り込む火災を巡りカナダに新たな関税を課すと脅す",
    summaryJa: "トランプ大統領、米国の都市に「不潔な」空気を送り込む火災を巡りカナダに新たな関税を課すと脅す- 公開されました",
    bodyOriginal: `Trump threatens new Canada tariffs over fires sending 'filthy' air into US cities
- Published
US President Donald Trump has threatened to impose new tariffs on Canada after hundreds of wildfires have left much of the northern US covered by a blanket of smoke.
The threat follows complaints by US lawmakers over the wildfires and Ontario's premier Doug Ford asking the US to send support to fight the fires, rather than complain.
"The United States is being unnecessarily invaded by filthy, polluted, and unhealthy air," Trump said, threatening to impose new levies over Canada's "willful negligence".
As of Friday, there were about 888 fires actively burning in Canada, according to the Canadian Wildland Fire Information System, external - with the majority burning out of control.
More than 190 of those blazes are burning in Ontario, some out of control.
Trump said in his post to Truth Social that he would call Canadian Prime Minister Mark Carney to demand an explanation over his country's "willful negligence," accusing the country of "not properly maintaining" their forests and brush.
Fellow Republicans have used the issue to renew Trump's call to make Canada the 51st US state, a musing that has offended Canadians and prompted many to stop travelling to their southern neighbour in protest. Others online suggested a delay in opening the Gordie Howe International Bridge, a Canada-funded project that will connect Ontario to Michigan.
Carney earlier noted that it was the responsibility of both countries to fight climate change.
After Trump's remarks, Carney's emergency management cabinet minister said the two countries remain in constant contact and share a long history of working together on such disasters, citing a reciprocal fire-fighting agreement from 1982 and another assistance agreement from emerged from the 2025 G7 summit.
Canada has worked to prevent wildfires and invested about C$12bn ($8.5bn; £6.4bn) in forests sustainability and fire prevention, MP Eleanor Olszewski said in the statement.
"This is a challenge that knows no borders, and Canada is working with speed, collaboration and coordination to keep people safe," she added.
Relations between the US and Canada have been tense at times over the last year, mostly due to trade. Last year, Trump imposed tariffs on Canada - a country that had enjoyed decades of free trade with the US - and both countries have still yet to reach a trade deal.
What started the wildfires?
According to the Canadian Wildland Fire Information System, nearly 3 million hectares of land in Canada has already been destroyed by the wildfires.
The impacts have been far-reaching, with a thick blanket of smoke spreading across US states, from Minnesota and Michigan to Pennsylvania, Ohio and New York.
"Hazardous" air quality alerts have been issued across much of the region, leading to the cancellation of many outdoor events.
As of Friday, air quality in Detroit was worst in the world, Swiss air quality tracker IQAir said, external, followed by the Midwestern city of Chicago, Washington DC, and New York in seventh place.
In the open letter addressed to Canadian officials, US lawmakers John James, John Moolenaar, Jack Bergman and Lisa McClain said their "patience has run out".
"We are done accepting apologies in place of action," they said, warning the US could explore direct involvement in cross-border wildfire protection and firefighting if Canada failed to act.
"We were told last year that this would be treated with urgency. It was not," they claimed, adding that instead "American lungs are paying the price for Canadian inaction, year after year".
They said that issues such as "chronic under-investment in forest thinning, fuel reduction, and prescribed burns, along with inadequate enforcement against arson", had not been addressed "adequately enough".
But scientists BBC Verify have spoken to say the picture is more complicated.
"Weather doesn't care about international borders," says Dr Patrick James from the University of Toronto.
Once smoke reaches the atmosphere, it travels wherever the winds take it - and smoke from major US wildfires has also affected Canada in recent years.
Experts also say many of the current fires are burning in Canada's vast, remote forests, where fires can be difficult to detect or contain before they become too large.
While better forest management can reduce wildfire risk in some areas, particularly near communities, it cannot prevent fires across an ecosystem of this scale.
Wildfires are very common in Canada, but the number of outbreaks has rapidly increased in recent weeks. Experts in both the US and Canada agree that this is likely because of sustained hot weather at the end of June across northern Ontario, coupled with a below average rainfall.
Scientists also say increasingly severe wildfire seasons are being driven in part by climate change, which is creating hotter, drier conditions that allow fires to spread more easily. Some of the fires have also been sparked by lightning.
"Climate change is a global issue, and it would be inaccurate to suggest that Canada alone caused or could have prevented these wildfires," says Dr Anabela Bonada from the University of Waterloo.
Instead of complaining, send help - Canada's Ford tells US lawmakers
Ontario Premier Ford replied to the lawmakers on Friday, saying that Canada has helped the US battle wildfires in California and respond to hurricanes in North Carolina.
"Maybe what you should do rather than complain is send support, send help, because we have done the exact same thing for our American friends," Ford said.
The premier also said that the US states of Michigan and Massachusetts, which are both led by Democrats, have offered assistance with water bombers, firefighters and rescue operations.
Responding to the criticism from US lawmakers, Carney said in French during a news conference in Ontario: "Climate change is everyone's responsibility - truly everyone's - including the United States."
He added that his government was "in close communication" with provinces and local communities.
Meanwhile, Ford dismissed criticism of his government's handling of the fires, noting that more than 150 fire crews are on the ground battling the blazes, along with over 80 water bombers and helicopters.
He added that his government has spent more than a billion dollars on wild land fire since 2018, and routinely spends more than its base budget allocated annually for firefighting due to the need.
"We are throwing every single resource we can," he said.
Fires burn down communities as haze grips region
America's blame game over Canada's wildfire smoke misses the point, experts say
- Published25 September 2025
Some residents in northern Ontario were forced to evacuate due to the ongoing fires. One First Nations chief reported her community was "burnt to ashes".
Fires are also burning on the country's west coast, where more than 59 active fires in British Columbia were reported on Friday. The British Columbia Wildfire Service said that 39 of those fires started in the last 24 hours and more than half (31 fires) are out of control, prompting firefighters to use more aggressive means to control them.
A large cluster of fires affecting northwestern areas of Ontario are responsible for sending thick plumes of smoke and poor air quality across the region and into the US.
On Thursday, thick haze of smoke blocked views across New York City, including the Empire State Building and the Statue of Liberty. Likewise, national monuments across Washington DC were obstructed by the hazy conditions.
Officials have stressed for people to stay indoors, some areas even passing out free masks, due to the poor health impacts of inhaling the fumes.
It's led to outdoor activities being cancelled across the northern parts of the US, from Chicago and Detroit to parts of Pennsylvania and New England. Summertime camps were brought indoors, concerts were rescheduled - and at least one beach was shuttered along a popular lake.
Poor air quality also affected air travel in some areas where low-visibility conditions at airports caused flight delays.
The inclement weather has also sparked concerns around Sunday's World Cup final between Argentina and Spain at MetLife Stadium - an open-air venue - in New Jersey, where Trump is due to attend.
White House officials - including Andrew Giuliani, the head of the White House's World Cup task force - is holding informal meetings with Fifa officials and others monitoring the wildfires, but no larger, formal meeting has so far been planned.
Forecasters believe that rains in the area over the weekend will improve conditions before the two teams take the pitch at 1500e (2000 BST).
In addition to the hazardous smoke extending across to the US, wildfires in northern Ontario have forced dozens from local First Nations communities to evacuate, with videos showing some fleeing the remote area by boat.
Members of the Namaygoosisagagun First Nation in the northern part of the province say they are "distraught" after fires tore through the community with very little warning.
Matthew Hoppe, incident commander for the Namaygoosisagagun First Nation, told the BBC that his community was devastated by the wildfires in northern Ontario.
Community members had to "self-evacuate" via small boats on Monday afternoon with the fire rapidly approaching, Hoppe said, adding that there were no deaths or direct injuries, he says, but the community has been "completely levelled".
Namaygoosisagagun First Nation Chief Helen Paavola told local news outlet CityNews in an interview that an aerial flyover showed that her community has been "burnt to ashes".
Ford said a total of 10 communities have had to evacuate, with many now seeking refuge in southern Ontario cities.
"It's a miracle that no one lost their lives," the premier said.
With additional reporting by Katie Williams and Nardine Saad
- Published1 day ago
- Published8 hours ago`,
    bodyJa: `トランプ大統領、米国の都市に「不潔な」空気を送り込む火災を巡りカナダに新たな関税を課すと脅す
- 公開されました
数百件の山火事により米国北部の大部分が煙に覆われたことを受け、ドナルド・トランプ米大統領はカナダに新たな関税を課すと脅した。
この脅威は、山火事に対する米国議員らの苦情と、オンタリオ州のダグ・フォード首相が米国に対し、苦情ではなく消火活動に支援を送るよう求めたことを受けたものである。
トランプ大統領は「米国は不潔で汚染された不健康な大気によって不必要に侵略されている」と述べ、カナダの「故意の過失」を理由に新たな賦課金を課す構えを見せた。
カナダ自然火災情報システム（カナダ国外）によると、金曜日の時点でカナダ国内で約888件の火災が活発に発生しており、その大半が制御不能となっている。
オンタリオ州ではそのうち190件以上が燃えており、一部は制御不能となっている。
トランプ大統領はトゥルース・ソーシャルへの投稿で、カナダのマーク・カーニー首相に電話し、自国の森林や低木を「適切に管理していない」として同国の「故意の過失」について説明を求めるつもりだと述べた。
共和党員らはこの問題を利用して、カナダを米国51番目の州にするというトランプ大統領の呼びかけを改めて主張したが、この発言はカナダ国民を怒らせ、多くの人が抗議のため南の隣国への旅行をやめるようになった。ネット上では、オンタリオ州とミシガン州を結ぶカナダ資金のプロジェクトであるゴーディ・ハウ国際橋の開通が遅れると示唆する人もいた。
カーニー氏は先に、気候変動と闘うのは両国の責任だと指摘した。
トランプ大統領の発言後、カーニー緊急事態管理閣僚は、両国は常に連絡を取り合っており、このような災害に対して協力してきた長い歴史を共有していると述べ、1982年の相互消防協定と2025年のG7サミットで生まれた別の支援協定を挙げた。
エレノア・オルシェフスキー議員は声明で、カナダは山火事の防止に努め、森林の持続可能性と火災予防に約120億カナダドル（85億ドル、64億ポンド）を投資していると述べた。
「これは国境のない課題であり、カナダは人々の安全を守るためにスピード、協力、連携を持って取り組んでいる」と付け加えた。
米国とカナダの関係は昨年、主に貿易が原因で時々緊張していた。昨年、トランプ大統領は米国と数十年にわたって自由貿易を享受してきたカナダに関税を課したが、両国はまだ貿易協定に至っていない。
山火事の原因は何ですか?
カナダ森林火災情報システムによると、カナダではすでに300万ヘクタール近くの土地が山火事で焼失している。
影響は広範囲に及び、厚い煙が一面に広がり、ミネソタ州やミシガン州からペンシルベニア州、オハイオ州、ニューヨーク州まで米国の州全体に広がった。
「危険な」大気質警報が地域の大部分で発令され、多くの屋外イベントが中止になっている。
スイスの大気質追跡業者IQAirによると、金曜日の時点でデトロイトの大気質は世界で最悪で、次いで中西部の都市シカゴ、ワシントンDC、ニューヨークが7位となっている。
カナダ当局者に宛てた公開書簡の中で、米国議員のジョン・ジェームズ、ジョン・ムーレナー、ジャック・バーグマン、リサ・マクレーンは「忍耐力が限界に達した」と述べた。
「われわれは行動の代わりに謝罪を受け入れるのはもう終わりだ」と述べ、カナダが行動を起こさなければ、米国が国境を越えた山火事保護と消火活動への直接関与を模索する可能性があると警告した。
「昨年、我々はこの問題に緊急に対処するだろうと言われたが、そうではなかった」と彼らは主張し、むしろ「アメリカの肺はカナダの無策の代償を年々支払っている」と付け加えた。
彼らは、「森林の間伐、燃料削減、規定の火傷への慢性的な投資不足、および放火に対する不十分な取り締まり」などの問題が「十分に」対処されていないと述べた。
しかし、科学者BBC Verifyは、状況はより複雑であると語った。
「天気は国境を気にしません」とトロント大学のパトリック・ジェームス博士は言う。
煙が大気中に到達すると、風に乗ってどこへでも伝わり、近年では米国の大規模な山火事からの煙がカナダにも影響を及ぼしています。
専門家らはまた、現在の火災の多くはカナダの人里離れた広大な森林で起きており、そこでは火災を発見したり、規模が大きくなりすぎる前に鎮火するのが難しいとも述べている。
森林管理を改善することで、一部の地域、特にコミュニティ近くでの山火事のリスクを軽減できますが、この規模の生態系全体の火災を防ぐことはできません。
カナダでは山火事が非常に頻繁に発生していますが、ここ数週間で発生数が急速に増加しています。米国とカナダの専門家らは、これはオンタリオ州北部全域で6月末に続いた暑い気候と平均を下回る降雨量が原因である可能性が高いとの見解で一致している。
科学者らはまた、山火事の季節がますます厳しくなっているのは、気候変動が一因であり、気候変動がより高温で乾燥した状況を生み出し、火災がより容易に広がりやすくしているとも述べている。火災の中には落雷によって引き起こされたものもあります。
ウォータールー大学のアナベラ・ボナダ博士は、「気候変動は世界的な問題であり、カナダだけがこれらの山火事を引き起こした、あるいは防げた可能性があると示唆するのは不正確だろう」と語る。
文句を言う代わりに助けを送りなさい - カナダのフォード社が米国の議員に語る
オンタリオ州のフォード首相は金曜日、議員らに返答し、カナダはカリフォルニアの山火事との戦いやノースカロライナ州のハリケーンへの対応を米国に支援してきたと述べた。
フォード氏は、「文句を言うよりも、支援を送ること、助けを送ることかもしれない。なぜなら、われわれはアメリカの友人に対して全く同じことをしてきたからだ」と語った。
首相はまた、民主党が主導する米国のミシガン州とマサチューセッツ州が水爆撃機、消防士、救助活動などの支援を申し出たと述べた。
カーニー氏はオンタリオ州での記者会見で米議員らの批判に応え、フランス語で「気候変動は米国を含む全員の責任、まさに全員の責任だ」と述べた。
同氏は、政府が州や地元社会と「緊密に連絡を取っている」と付け加えた。
一方、フォードは、150人以上の消防隊員が80機以上の水爆撃機やヘリコプターとともに地上で火災と戦っていると指摘し、政府の火災対応に対する批判を一蹴した。
同氏は、政府は2018年以来、原野火災に10億ドル以上を支出しており、必要に応じて消防に毎年割り当てられている基本予算を超える支出を日常的に行っていると付け加えた。
「私たちはできる限りのリソースをすべて投入しています」と彼は言いました。
霧が地域を覆い、火災がコミュニティを焼き尽くす
カナダの山火事の煙をめぐるアメリカの責任追及は的外れだと専門家が指摘
- 2025 年 9 月 25 日発行
オンタリオ州北部では、火災が続いているため避難を余儀なくされた住民もいる。ある先住民族の首長は、自分のコミュニティが「灰になった」と報告した。
同国の西海岸でも火災が発生しており、金曜日にはブリティッシュコロンビア州で59件以上の火災が発生していると報告された。ブリティッシュコロンビア州野火局は、このうち39件の火災が過去24時間以内に発生し、半数以上（31件）が制御不能となっており、消防士らはより積極的な手段で消火するよう求めていると発表した。
オンタリオ州の北西部地域に影響を及ぼしている大規模な火災は、厚い煙と劣悪な大気環境を地域全体と米国に送り込む原因となっています。
木曜日には濃い煙が立ち込め、エンパイア・ステート・ビルや自由の女神などニューヨーク市全域の視界が遮られた。同様に、ワシントン DC 各地の国定記念物も霧の天候によって妨げられました。
当局は、煙を吸うことによる健康への悪影響を理由に、人々が屋内に留まるよう強調しており、一部の地域では無料でマスクを配っているところもある。
これにより、シカゴやデトロイトからペンシルベニアやニューイングランドの一部に至るまで、米国北部全域で屋外活動が中止になっている。夏場のキャンプは屋内に持ち込まれ、コンサートの日程は変更され、人気の湖沿いの少なくとも1つのビーチは閉鎖された。
また、一部の地域では、大気の質の悪さが航空旅行に影響を及ぼし、空港の視界不良により飛行機の遅延が発生しました。
悪天候はまた、トランプ大統領が観戦するニュージャージー州の屋外会場であるメットライフ・スタジアムで行われる日曜日のワールドカップ決勝、アルゼンチン対スペイン戦をめぐる懸念も引き起こしている。
ホワイトハウスのワールドカップ対策本部長アンドリュー・ジュリアーニ氏を含むホワイトハウス当局者らは、山火事の監視に当たっているFIFA関係者らと非公式会合を開催しているが、これまでのところ大規模な公式会合は計画されていない。
予報士らは、週末にかけてこの地域で雨が降れば、両チームが午後15時（日本時間2000時）にピッチに立つ前にコンディションが改善すると信じている。
有害な煙が米国全土に広がっていることに加えて、オンタリオ州北部の山火事により、地元の先住民族コミュニティから数十人が避難を余儀なくされており、ビデオにはボートで辺境の地域から逃げる人々の姿も映されている。
州北部に住むナマイグーシサガグン・ファースト・ネーションのメンバーらは、何の前触れもなく火災が地域社会を襲い、「取り乱している」と述べた。
ナマイグーシサガグン先住民族の事件指揮官マシュー・ホッペ氏はBBCに対し、オンタリオ州北部の山火事でコミュニティが壊滅的な被害を受けたと語った。
ホッペ氏は、月曜午後、火災が急速に迫ったため、地域住民は小型ボートで「自主避難」しなければならなかったと述べ、死者や直接の負傷者は出なかったが、地域社会は「完全に平準化された」と付け加えた。
ナマイグーシサガグン・ファースト・ネイションの首長ヘレン・パボラ氏は地元報道局シティニュースのインタビューで、上空からの飛行で彼女のコミュニティが「灰になった」ことが示されたと語った。
フォード氏は、合計10のコミュニティが避難を余儀なくされており、多くが現在オンタリオ州南部の都市に避難していると述べた。
首相は「誰も命を落とさなかったのは奇跡だ」と語った。
Katie Williams と Nardine Saad による追加レポートあり
- 1 日前に公開
- 8 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwyq93j34lgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-18T01:29:47+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0b00/live/0ecf40f0-81ea-11f1-b7bc-5dd9ae7a9918.jpg",
    readTime: 10,
  },
  {
    id: "meet-kimi-k3-the-newest-chinese-ai-model-19bf5420",
    title: "Meet Kimi K3, the newest Chinese AI model haunting Silicon Valley",
    titleJa: "シリコンバレーに出没する最新の中国 AI モデル、Kimi K3 をご紹介します",
    summaryJa: "Moonshot AI の新しいオープン モデルは Anthropic と OpenAI に追いつき、AI 競争の将来について疑問を引き起こしています。",
    bodyOriginal: `Moonshot AI’s new open model is catching up to Anthropic and OpenAI, raising questions about the future of the AI race.`,
    bodyJa: `Moonshot AI の新しいオープン モデルは Anthropic と OpenAI に追いつき、AI 競争の将来について疑問を引き起こしています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/meet-kimi-k3-the-newest-chinese-ai-model-haunting-silicon-valley-755ed738?mod=mw_rss_topstories",
    publishedAt: "2026-07-18T01:17:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-71583098",
    readTime: 2,
  },
  {
    id: "my-buyers-dropped-their-offer-by-15-000-a3cd1884",
    title: "'My buyers dropped their offer by £15,000 the day before exchange': Gazundering and how to avoid it",
    titleJa: "「私の購入者は交換の前日にオファーを15,000ポンドで取り下げました」：ガズンダリングとそれを回避する方法",
    summaryJa: "「私の購入者は交換の前日にオファーを15,000ポンドで取り下げました」：ガズンダリングとそれを回避する方法- 公開されました",
    bodyOriginal: `'My buyers dropped their offer by £15,000 the day before exchange': Gazundering and how to avoid it
- Published
Sarah was excitedly packing up to move out of the terraced house her family had outgrown to a four-bedroom home in the countryside.
But the day before exchanging contracts the buyers of her house dropped their agreed offer by £15,000. "It was awful, your heart just drops to your stomach," says Sarah, not her real name.
She had fallen victim to gazundering, a rare but growing problem in the property market in England and Wales, according to the Conveyancing Association, external.
It is calling for government reforms aimed at tackling this and other house buying and selling issues to be brought in "without delay" instead of 2029 as planned.
For Sarah, her husband and two children their move had all been going smoothly.
They were selling the three-bedroom terrace they'd renovated and buying her parents' four-bedroom detached house in the countryside.
But the day before contracts were exchanged Sarah received a phone call from her "befuddled" estate agent saying he had some bad news.
Their buyers said they'd done some more research about the area and would now offer £15,000 less than the price they'd agreed.
"I can't even begin to go through the financial consequences [if we lost the sale]," she says.
If they accepted the lower offer they would be out of pocket but if they refused there would be costs too.
"We had already paid one set of legal fees but would have had to pay again if we needed a new buyer. We'd also paid the removal fees already and would have to pay again if we cancelled the moving date," says Sarah.
What is gazundering?
Gazundering is when a buyer lowers their agreed offer just before contracts are exchanged.
It puts a seller under pressure to accept the lower price or risk losing their sale and collapsing their property chain - potentially losing the house they want to buy.
It is possible because in England, Wales and Northern Ireland an offer is not legally binding until parties exchange contracts. Once an offer is accepted it takes an average of 120 days to complete. One in three house sales fall through before exchange.
This costs sellers £400m and the wider economy £1.5bn each year, according to the Ministry for Housing, Communities and Local Government.
Planned government reforms would cut that time by four weeks and save the average first time buyer £650, it says.
After speaking to her dad and husband Sarah decided to put her house back on the market that same day.
The next day, her buyers "went running into the estate agent's office saying they were happy to proceed with the agreed sale price", she says.
"Gazundering is actually awful. It's not just a business deal. It's my children's home and the fact that nothing's been done about it is ridiculous."
Beth Rudolf from the Conveyancing Association says gazundering is a small but growing problem.
"It's not actually that big, it doesn't happen very often [but] it's started increasing though because of the change in the property market that's made it a buyers' market."
There are more houses on the market than people looking to buy, she explained, which means sellers face stiffer competition, forcing them to lower prices.
The government has put plans in place to reform the house buying and selling market in England and Wales which would tackle issues like gazundering although at the moment the timetable for those reforms, external is by the end of the current parliament in 2029.
The Ministry for Housing, Communities and Local Government told the BBC: "We're stopping gazundering by introducing legally binding agreements that prevent buyers from walking away at the last minute without a valid reason, with fines for those who do."
How to avoid gazundering
Be clear with your estate agent that your finances won't allow any last minute re-negotiation so they can set this boundary with prospective buyers
Instruct your conveyancing lawyer to gather all the necessary Land Registry, local authority documents and searches, drainage, water and environmental searches as well as completing the property information questionnaires when you put your property on market. This gives less time and opportunity for gazundering
You may consider a reservation agreement when a buyer pays a fee to reserve the right to buy the property for a period of time. The seller agrees not to sell to anyone else during that time and if either pull out there are financial penalties
A conditional binding offer means you agree to buy a house, but only if specific rules are met first such as a related sale or mortgage deal. If those rules fail, you can cancel the deal without financial penalty
Source: The Conveyancing Association`,
    bodyJa: `「私の購入者は交換の前日にオファーを15,000ポンドで取り下げました」：ガズンダリングとそれを回避する方法
- 公開されました
サラは、家族が増えすぎたテラスハウスを出て、田舎にある寝室が 4 つある家に引っ越しようと、わくわくしながら荷造りをしていました。
しかし、契約書を取り交わす前日、彼女の家の買い手は合意したオファーを15,000ポンド引き下げた。 「最悪でした。心臓が胃まで落ち込んでしまいます」とサラは本名ではなく語った。
社外の伝達協会によると、彼女はガズンダリングの被害者になっていた。ガズンダリングはイングランドとウェールズの不動産市場で稀ではあるが深刻化している問題だという。
この問題やその他の住宅売買問題に取り組むことを目的とした政府改革を、予定通りの2029年ではなく「遅滞なく」導入するよう求めている。
サラ、夫、そして 2 人の子供にとって、引っ越しはすべて順調に進んでいた。
彼らは改装した3ベッドルームのテラスを売り、彼女の両親が田舎に所有していた4ベッドルームの一戸建てを購入した。
しかし、契約書が交わされる前日、サラさんは「困惑した」不動産業者から電話を受け、悪い知らせがあると告げられた。
購入者らは、その地域についてさらに調査を行った結果、合意した価格よりも1万5000ポンド安く提示すると述べた。
「（売却に失敗した場合の）経済的影響を考え始めることさえできません」と彼女は言う。
もし彼らがより低い提案を受け入れた場合、彼らはポケットから出ますが、彼らが拒否した場合は費用もかかります。
「私たちはすでに弁護士費用を 1 回支払っていましたが、新しい買い手が必要な場合は再度支払わなければなりませんでした。また、撤去費用もすでに支払っていたので、引っ越し日をキャンセルした場合は再度支払わなければなりません」とサラさんは言います。
ガズンダリングとは何ですか？
ガズンデリングとは、買い手が契約書を交わす直前に、合意したオファーを引き下げることです。
これにより売り手は、より低い価格を受け入れるよう圧力をかけられ、そうでなければ売却を逃して不動産チェーンが崩壊するリスクが生じ、購入したい家を失う可能性があります。
イングランド、ウェールズ、北アイルランドでは、当事者が契約を交わすまでオファーに法的拘束力がないため、このようなことが可能となる。オファーが受け入れられてから完了までには平均 120 日かかります。 3 件に 1 件の住宅が買い替え前に売れなくなってしまいます。
住宅・コミュニティ・地方自治体省によると、これにより売り手は毎年4億ポンド、経済全体では15億ポンドのコストが発生するという。
計画されている政府改革により、その期間は4週間短縮され、初めて購入する人は平均650ポンド節約できるという。
父親と夫と話し合った後、サラさんはその日のうちに家を売りに戻すことに決めました。
翌日、買主たちは「不動産業者のオフィスに駆け込んできて、合意された販売価格で喜んで進めると言いました」と彼女は言う。
「ガズンデリングは実際にはひどいものだ。これは単なるビジネス取引ではない。これは私の子供たちの家であり、それに対して何も対策が講じられていないという事実はばかげている。」
Conveyancing Association の Beth Rudolf 氏は、ガズンダリングは小さいながらも深刻化している問題だと述べています。
「実際にはそれほど大きくはなく、頻繁に起こるわけではありませんが、不動産市場の変化により買い手市場になったため、増加し始めています。」
市場に出ている住宅の数が購入希望者よりも多いため、売り手はより激しい競争に直面し、価格の引き下げを余儀なくされていると彼女は説明した。
政府はイングランドとウェールズの住宅売買市場を改革する計画を立てており、ガズンダリングなどの問題に取り組むことになるが、現時点での改革のスケジュールは外部的には2029年の今議会の終わりまでとなっている。
住宅・コミュニティ・地方自治体省はBBCに対し、「正当な理由なしに購入者が土壇場で立ち去ることを防ぎ、違反した者には罰金を科す法的拘束力のある協定を導入することで、ガズンダリングを阻止している」と語った。
ガズンダリングを避ける方法
不動産業者に、あなたの財務状況が土壇場での再交渉を許可しないことを明確にして、購入希望者との境界線を設定できるようにしてください。
不動産を売りに出す際には、必要な土地登記簿、地方自治体の書類と調査、排水、水と環境の調査をすべて収集し、不動産情報アンケートに記入するよう、仲介弁護士に指示してください。これにより、ガズンダリングの時間と機会が減ります
買主が一定期間不動産を購入する権利を留保するために料金を支払う場合は、予約契約を検討することができます。売主はその間誰にも売らないことに同意し、どちらかが手を引いた場合には金銭的な罰金が課せられます。
条件付き拘束力のあるオファーとは、住宅の購入に同意することを意味しますが、関連する販売や住宅ローン契約など、特定のルールが最初に満たされた場合に限ります。これらのルールが失敗した場合、金銭的なペナルティなしで取引をキャンセルできます
出典: 伝える協会`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3d39r338m0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-18T01:14:53+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/847b/live/e25f5800-81e1-11f1-8b86-31ce3d5ecce7.jpg",
    readTime: 6,
  },
  {
    id: "leather-jacket-worn-by-nvidia-ceo-goes-f-05559093",
    title: "Leather jacket worn by Nvidia CEO goes for just under $1 million at Sotheby's auction",
    titleJa: "Nvidia CEOが着用したレザージャケットがサザビーズオークションで100万ドル弱で落札",
    summaryJa: "Nvidia CEOのジェンスン・フアン氏がレザージャケットを着ていない姿はめったに見られない。それは彼の特徴的な外観です。彼はそれを20年近く着ています。製品発表会、企業イベント、展示会では、ファンはほぼ常にトレードマークのトム フォードの黒のレザー ジャケットを着ています。",
    bodyOriginal: `Nvidia CEO Jensen Huang is rarely seen without his leather jacket. It's his signature look. He's been wearing them for nearly 20 years.
At product launches, company events, and trade shows, Huang is nearly always clad in his trademark black Tom Ford leather jacket.
One of them recently went up for auction. And on Friday, after 65 bids, one of Huang's pre-worn and signed jackets sold at auction at Sotheby's for $960,000, much higher than the pre-sale estimate of $40,000 to $60,000.
It's also significantly higher than the retail price of just under $10,000 for one of the garments.
He wore the jacket in 2023, at an event at Foxconn in Taipei, Taiwan.
The high price for the garment is a sign that collectors are looking to bid on artifacts and collectibles from the artificial intelligence boom.
"The response to this sale surpassed even our highest expectations," Sotheby's head of modern collectibles Brahm Wachter said in a statement. Sotheby's said 45 different collectors bid on the jacket.
Sotheby's said in a statement that proceeds will go to a philanthropic initiative in support of the Edge Institute, which is a nonprofit dedicated to innovation. The proceeds from the sale will go towards fellowships, grants, and residencies.
Huang has joked over the years about his founder's uniform — telling a podcast in 2023 that his wife and daughter dress him, and telling a Reddit discussion in 2016 that he's "the guy in the leather jacket."
Other CEOs have noticed his style, too.
Meta CEO Mark Zuckerberg famously traded garments with Huang in a pro sports-style "jersey swap" in 2024. Later that year, on stage at a computer graphics conference, Huang gave Zuckerberg one of his jackets that he had been wearing that day.
"This is worth more because it's used," Zuckerberg said.`,
    bodyJa: `Nvidia CEOのジェンスン・フアン氏がレザージャケットを着ていない姿はめったに見られない。それは彼の特徴的な外観です。彼はそれを20年近く着ています。
製品発表会、企業イベント、展示会では、ファンはほぼ常にトレードマークのトム フォードの黒のレザー ジャケットを着ています。
そのうちの1つが最近オークションに出品されました。そして金曜日、65件の入札を経て、サザビーズのオークションでファンの着用済みのサイン入りジャケットの1枚が96万ドルで落札された。これは、販売前の推定価格である4万ドルから6万ドルをはるかに上回っている。
また、衣料品1着の小売価格1万ドル弱よりも大幅に高い。
彼は2023年、台湾の台北にあるフォックスコンでのイベントでこのジャケットを着用した。
この衣服の高価格は、コレクターが人工知能ブームの工芸品や収集品に入札しようとしている兆候だ。
サザビーズのモダンコレクターズ部門責任者のブラーム・ワハター氏は声明で、「今回の販売に対する反応は、われわれの最大の予想をも上回った」と述べた。サザビーズによると、45人の異なるコレクターがジャケットに入札したという。
サザビーズは声明で、収益はイノベーションを専門とする非営利団体エッジ・インスティテュートを支援する慈善活動に寄付されると述べた。販売による収益はフェローシップ、補助金、レジデンシーに充てられます。
ファン氏は長年、創業者の制服について冗談を言ってきた。2023年にはポッドキャストで妻と娘が自分に服を着せてくれたと語り、2016年にはレディットのディスカッションで自分は「革ジャンを着た男」だと語っていた。
他のCEOも彼のスタイルに注目している。
メタのCEOであるマーク・ザッカーバーグが、2024年にプロス​​ポーツスタイルの「ジャージ交換」でファンと衣服を交換したことは有名だ。その年の後半、コンピュータグラフィックスカンファレンスのステージ上で、ファンはその日に着ていたジャケットの1つをザッカーバーグに贈った。
「これは中古なので価値がある」とザッカーバーグ氏は語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/leather-jacket-worn-by-nvidia-ceo-goes-for-just-under-1-million-at-sothebys-auction-.html",
    publishedAt: "2026-07-17T23:18:35+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "the-white-house-is-dictating-access-to-f-705c4233",
    title: "The White House is dictating access to frontier AI models, shifting power from tech giants, sources say",
    titleJa: "ホワイトハウスは最先端のAIモデルへのアクセスを指示し、ハイテク大手から権力を移していると情報筋が語る",
    summaryJa: "トランプ政権は、どの企業や団体に最新のフロンティアモデルへのアクセスを許可するかを決定することで、将来の人工知能モデルのリリースの展開をより強力に制御するための新たな措置を講じたと、事情に詳しい関係者2人がCNBCに語った。これまで、その決定はアメリカのAI大手の手に委ねられていた。",
    bodyOriginal: `The Trump administration has taken new steps to assert more control over the rollout of future artificial intelligence model releases by dictating which companies and entities are allowed access to the latest frontier models, two people familiar with the matter told CNBC.
Until now, that decision was in the hands of American AI giants.
Both Anthropic and OpenAI have decided which companies and agencies have access to their most powerful models, and have often included major enterprise customers.
Anthropic unveiled its most capable Mythos cybersecurity model to a handful of partners with Project Glasswing. OpenAI was asked by the administration to gate its recent GPT-5.6 release, and has a similar consortium called Daybreak for its cybersecurity model.
A White House official told CNBC that it doesn't provide approvals for AI releases from private companies.
The official said any engagements, testing or meetings with government experts are "voluntary" and that "decisions on timing and scope of releases rest entirely with the companies," referring CNBC to Trump's recent executive order.
"The Administration continues to collaborate with all of America's frontier labs to strengthen the security of this technology without stifling innovation," they wrote.
However, last month the Trump administration blocked Claude Mythos 5 and Fable 5 due to "national security concerns," reinstating access after weeks of intense negotiations with Anthropic. OpenAI last month said it would limit new AI models to "trusted partners" to comply with government requests.
The White House is walking a fine line on regulation at a time when sophisticated AI tools pose massive cybersecurity risks and cheaper, open-weight models from China are quickly closing the gap with American frontier labs.
Chinese startup Moonshot AI unveiled its Kimi K3 model on Friday, which largely caught up to the performance of Fable and GPT-5.6, and even outperformed the U.S. frontier models in at least one independent benchmark.
David Sacks, founder of Craft Ventures and the former White House AI czar, called the Kimi breakthrough "concerning."
"This is how you lose the AI race," he wrote. "The rest of the world won't play by our rules if we bog ourselves down."
The administration has already taken several steps to reshape AI oversight in recent months, starting with President Donald Trump's June executive order, which asked companies to voluntarily give the government early access to models for testing.
This week, the administration launched its own program, dubbed "Gold Eagle," aimed at collaborating with the private sector to find and fix cyber vulnerabilities.
The so-called clearinghouse would put the White House in charge of greenlighting which companies can access new AI models, according to a person familiar with the matter, who spoke on condition of anonymity in order to discuss information that is not public.
The administration's moves have left the future of company-led initiatives such as Project Glasswing and OpenAI's Daybreak in doubt.
Going forward, according to one person, these rollouts will require explicit government approval for which partners can be involved.
— CNBC's Megan Cassella and Ashley Capoot contributed reporting.`,
    bodyJa: `トランプ政権は、どの企業や団体に最新のフロンティアモデルへのアクセスを許可するかを決定することで、将来の人工知能モデルのリリースの展開をより強力に制御するための新たな措置を講じたと、事情に詳しい関係者2人がCNBCに語った。
これまで、その決定はアメリカのAI大手の手に委ねられていた。
Anthropic と OpenAI はどちらも、どの企業や代理店が自社の最も強力なモデルにアクセスできるかを決定しており、多くの場合、大手企業の顧客が含まれています。
Anthropic は、Project Glasswing の少数のパートナーに対して、最も有能な Mythos サイバーセキュリティ モデルを発表しました。 OpenAIは、政府から最近のGPT-5.6リリースをゲートするよう要請されており、サイバーセキュリティモデルに関してはDaybreakと呼ばれる同様のコンソーシアムを持っている。
ホワイトハウス当局者はCNBCに対し、民間企業からのAIリリースには承認を与えていないと語った。
同当局者は、CNBCがトランプ大統領の最近の大統領令に言及し、政府専門家とのあらゆる関与、検査、会合は「自主的」であり、「リリースのタイミングと範囲に関する決定は完全に企業に委ねられている」と述べた。
「政府はイノベーションを抑制することなくこの技術のセキュリティを強化するために、米国のすべてのフロンティア研究所と協力し続けている」と彼らは書いている。
しかし、トランプ政権は先月、「国家安全保障上の懸念」を理由にClaude Mythos 5とFable 5をブロックし、Anthropic社との数週間にわたる激しい交渉を経てアクセスを回復した。 OpenAIは先月、政府の要請に従うため、新しいAIモデルを「信頼できるパートナー」に限定すると発表した。
高度なAIツールがサイバーセキュリティーに多大なリスクをもたらし、中国製の安価なオープンウェイトモデルが米国のフロンティアラボとの差を急速に縮めている中、ホワイトハウスは規制に関して紙一重の境を歩んでいる。
中国の新興企業ムーンショットAIは金曜日、キミK3モデルを発表したが、これはFableとGPT-5.6のパフォーマンスにほぼ追いつき、少なくとも1つの独立したベンチマークにおいては米国のフロンティアモデルをも上回った。
Craft Venturesの創設者で元ホワイトハウスAI皇帝のデイビッド・サックス氏は、キミの躍進を「懸念事項」と呼んだ。
「こうやってAI競争に負けるのだ」と彼は書いた。 「我々が行き詰まってしまえば、他の国々も我々のルールを守らないだろう。」
政府はここ数カ月間、AIの監督を再構築するためにすでにいくつかの措置を講じており、その手始めに、企業に対しテスト用モデルへの早期アクセスを自発的に政府に提供するよう求めたドナルド・トランプ大統領の6月の大統領令が発令された。
同政権は今週、民間部門と協力してサイバー脆弱性を発見し修正することを目的とした「ゴールド・イーグル」と呼ばれる独自のプログラムを立ち上げた。
この問題に詳しい関係者によると、いわゆるクリアリングハウスは、どの企業が新しいAIモデルにアクセスできるかについてホワイトハウスに許可を与えることになるという。この問題に詳しい関係者は、非公開の情報について話し合うため匿名を条件に語った。
この政権の動きにより、Project GlasswingやOpenAIのDaybreakなどの企業主導の取り組みの将来に疑問が残った。
ある関係者によると、今後、これらの展開にはパートナーが関与できる明示的な政府の承認が必要になるという。
— CNBC のミーガン・カッセラとアシュリー・カプートが報道に貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/white-house-ai-access-anthropic-openai.html",
    publishedAt: "2026-07-17T23:10:07+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "trump-rips-canada-as-wildfire-smoke-spre-c69dbcc6",
    title: "Trump rips Canada as wildfire smoke spreads, says U.S. will add pollution cost to tariffs",
    titleJa: "山火事の煙が広がる中、トランプ大統領がカナダを非難、米国は関税に汚染コストを上乗せすると表明",
    summaryJa: "ドナルド・トランプ大統領は金曜日、米国一帯を煙霧に包み込んでいる山火事についてカナダを非難し、その汚染コストを既存の関税に上乗せすると述べた。トランプ大統領は、この状況を「全く容認できない」と述べ、カナダ火災の原因についてオタワ氏が対処しなかったとして非難した。カナダ火災の煙により、ここ数日で米国の主要都市の大気質は危険なレベルに達している。",
    bodyOriginal: `President Donald Trump on Friday blasted Canada for wildfires enveloping swaths of the United States in a smoky haze and said he would add the costs of that pollution to existing tariffs.
Calling the situation "totally unacceptable," Trump accused Ottawa of failing to address what he said were the causes of the fires in Canada, whose smoke has sent air quality to dangerous levels in major U.S. cities in recent days.
The billions of dollars in costs inflicted on the U.S. as a result of the air pollution "must of necessity be added to the TARIFFS Canada is currently paying," Trump wrote in a Truth Social post.
"We are holding Canada responsible for the fact that they are not properly maintaining their Forests, and Brush therein, and the United States is being unnecessarily invaded by filthy, polluted, and unhealthy air," Trump wrote.
He said he plans to call Canadian Prime Minister Mark Carney later Friday "to find out what they are going to do about it."
Carney, in an X post Wednesday, said the wildfires have "escalated significantly" in recent weeks, particularly in Northwestern Ontario, where thousands of people have been forced to evacuate.
The poor conditions have raised questions about potential impacts on the FIFA World Cup final, which is set to take place Sunday in northeastern New Jersey. Trump, who is slated to attend the match, between Spain and Argentina, traveled to New York City on Friday to attend a FIFA reception at Trump Tower.
Scientists have warned that human-influenced climate change is leading to more wildfires and other extreme weather events.
Shortly after Trump posted about Canada on Truth Social, The New York Times reported that the Trump administration in recent months has moved to dismantle government labs researching wildfire smoke and its effects.
Lee Zeldin, who heads the U.S. Environmental Protection Agency, said Friday that the "impacts of the Canadian wildfires are causing great concern and harm across the United States."
The EPA is in communication with Canada's leadership and will "strongly encourage them to do everything in their power to extinguish these fires as fast as possible," Zeldin wrote in a post on X.
The post also directed Americans to visit AirNow's Fire and Smoke map for the latest information.`,
    bodyJa: `ドナルド・トランプ大統領は金曜日、米国一帯を煙霧に包み込んでいる山火事についてカナダを非難し、その汚染コストを既存の関税に上乗せすると述べた。
トランプ大統領は、この状況を「全く容認できない」と述べ、カナダ火災の原因についてオタワ氏が対処しなかったとして非難した。カナダ火災の煙により、ここ数日で米国の主要都市の大気質は危険なレベルに達している。
大気汚染の結果、米国が被った数十億ドルの費用は「カナダが現在支払っている関税に必然的に追加される必要がある」とトランプ大統領はトゥルース・ソーシャルへの投稿で述べた。
トランプ大統領は、「カナダが森林や森林を適切に管理しておらず、米国が不潔で汚染された不健康な大気によって不必要に侵略されているという事実の責任をカナダに負わせている」とトランプ大統領は書いた。
同氏は、金曜日遅くにカナダのマーク・カーニー首相に電話して、「この問題についてどうするつもりなのか尋ねる」予定だと述べた。
カーニー氏は水曜日のXポストで、ここ数週間で特にオンタリオ州北西部で山火事が「大幅に拡大」しており、数千人が避難を余儀なくされていると述べた。
この劣悪なコンディションにより、日曜日にニュージャージー州北東部で開催されるFIFAワールドカップ決勝戦への潜在的な影響についての疑問が生じている。スペイン対アルゼンチン戦に出席予定のトランプ氏は金曜日にニューヨークを訪れ、トランプタワーで開催されたFIFAレセプションに出席した。
科学者らは、人間の影響による気候変動が山火事やその他の異常気象の増加につながっていると警告している。
トランプ大統領がトゥルース・ソーシャルにカナダについて投稿した直後、ニューヨーク・タイムズ紙は、トランプ政権がここ数カ月間、山火事の煙とその影響を研究する政府研究所の解体に動いたと報じた。
米国環境保護庁長官のリー・ゼルディン氏は金曜日、「カナダの山火事の影響は米国全土に多大な懸念と被害を引き起こしている」と述べた。
EPAはカナダ指導部と連絡を取りており、「できるだけ早くこれらの火災を消すために全力を尽くすよう強く奨励する」とゼルディン氏はXへの投稿で書いた。
この投稿はまた、最新情報を得るためにAirNowの火災と煙のマップにアクセスするようアメリカ人に指示した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/trump-canada-wildfire-tariffs.html",
    publishedAt: "2026-07-17T23:08:24+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "spacex-postponed-a-crucial-launch-and-it-8d4a37a6",
    title: "SpaceX postponed a crucial launch — and its stock went on to close below IPO price for second day",
    titleJa: "SpaceXは重要な打ち上げを延期し、その株価は2日目もIPO価格を下回って終了した",
    summaryJa: "スペースXの株価は、ミッション中止を受けて金曜日の市場前取引で約4％下落した。",
    bodyOriginal: `Shares in SpaceX declined about 4% in premarket trading on Friday after aborted mission.`,
    bodyJa: `スペースXの株価は、ミッション中止を受けて金曜日の市場前取引で約4％下落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/spacex-postponed-a-crucial-launch-now-its-stock-is-set-to-slide-even-further-below-the-ipo-price-143adfe0?mod=mw_rss_topstories",
    publishedAt: "2026-07-17T22:55:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-19410954",
    readTime: 2,
  },
  {
    id: "taco-bell-says-it-has-removed-lettuce-li-cc19ec8a",
    title: "Taco Bell says it has removed lettuce linked to cyclosporiasis outbreak from its restaurants",
    titleJa: "タコベルは、シクロスポリア症の発生に関連するレタスをレストランから撤去したと発表",
    summaryJa: "タコベルは金曜日、環状胞子症の発生に関連するレタスをレストランから撤去したと発表した。疾病管理予防センターによると、この流行は現在、5つの州で1,600人以上に影響を与えている。 CDCによると、この感染症は重篤な胃腸炎に似ており、多くの場合、寄生虫に感染してから2～3週間後に症状が現れ始めます。死亡者は報告されていない。",
    bodyOriginal: `Taco Bell has removed lettuce linked to a cyclosporiasis outbreak from restaurants, it said Friday.
The outbreak has currently affected more than 1,600 people across five states, according to the Centers for Disease Control and Prevention. The infection resembles a serious stomach bug and often begins showing up two to three weeks after people become infected by the parasite, according to the CDC. No deaths have been reported.
On Thursday, the agency said its investigation into the source linked the outbreak to shredded iceberg lettuce served at Taco Bell locations in Indiana, Kentucky, Michigan, Ohio and West Virginia. The U.S. Food and Drug Administration is working with the supplier to determine if the lettuce was sent elsewhere, as well.
"Based on ongoing conversations with public health officials, and out of an abundance of caution, Taco Bell worked swiftly to voluntarily remove the product from restaurants and the affected ingredient has been removed from our supply chain nationwide," Taco Bell said.
Taco Bell's parent company, Yum Brands, saw its stock sink nearly 7% over the past five days as the company grappled with the health scare. Other food companies that sell fresh lettuce also saw their shares drop, like salad chain Sweetgreen, which plunged nearly 13% this week, and fast casual chain Cava, which sank more than 3%. Shares of Sweetgreen and Cava rose more than 17% and about 2% on Friday, respectively, due to apparent relief that the CDC did not identify their ingredients as potential sources of cyclosporiasis.
While Taco Bell or other restaurant chains may take a temporary sales hit as headlines about the outbreak swirl, particularly in the states most affected by it, analysts said any dips in revenue or stock prices likely will not be prolonged. Even so, it remains to be seen whether the CDC identifies any other restaurant chains as possible sources of the outbreak.
According to reports, the affected lettuce at Taco Bell may be traced back to supplier Taylor Farms, which distributes the product to many restaurant chains and sells directly in most grocery stores.
Taylor Farms, the same company linked to the McDonald's E. Coli outbreak in 2024, said in a Friday statement that it has removed all iceberg lettuce sourced from central Mexico. The company added that none of its branded salads or kits are associated with the outbreak.
"While the FDA traceback is indicating a specific independent farm, which represents less than 1% of the U.S.'s iceberg lettuce supply, as the potential source of the outbreak, we have removed all iceberg lettuce from the region indefinitely," the company said.
Sweetgreen and other restaurant companies issued statements this week saying that they did not believe their ingredients were affected. The salad chain said it does not use iceberg lettuce on its menu.
"From the outset of the investigation, we have been in close contact with our suppliers to determine whether any ingredients in our supply chain have been identified as part of the investigation. To date, none have been," the company said.
Chipotle, which did not see as much stock movement this week, said in a Friday statement that shredded iceberg lettuce is not served at its locations, and it does not believe its ingredients are associated with the outbreak.
The sales and stock effects
Analysts say the outbreak likely won't have a major effect on Yum Brands' stock, especially based on how restaurants have fared during past health scares.
That's not to say it won't have a temporary effect. Recent data from Placer.ai found that chains serving fresh lettuce saw declining foot traffic over the past week, with Taco Bell's down nearly 6% and Panera Bread down more than 7%.
TD Cowen analyst Andrew Charles told CNBC he believes the impact of the cyclosporiasis outbreak will be contained to a one-quarter risk for the company and culminate in a quick recovery. He said he expects that arc to look similar to how quickly both McDonald's and Wendy's recovered from separate E. Coli outbreaks in 2024 and 2022, respectively.
"Social media just leads to a lot more short-term memory loss," Charles said. "We saw both times a quarter or less of an impact. Here, it's a similar setup too."
He added that the outbreak is also limited to toppings at Taco Bell rather than the meat itself, which is a core offering and would likely have a larger impact on consumer behavior. The Covid-19 pandemic has also lessened the impact of food safety concerns on the broader industry over the past few years, he added.
"We'll have to wait and see from here," Charles said.
Analysts at Evercore ISI wrote in a Friday note that they believe the outbreak will transform from a vendor issue to a supplier issue as the spotlight moves away from Taco Bell to Taylor Farms instead.
"Our guess is that over the coming weeks this food safety issue fades from the headlines and, to the extent it lingers, attaches more to the supplier than to Taco Bell specifically," the analysts wrote.
While lower demand in the impacted Midwest states will likely last longer than in other areas of the U.S., the Evercore analysts said Taco Bell could return to positive same-store sales growth in a matter of weeks, just as McDonald's did within roughly six weeks in 2024. That's especially as the company has recently been "firing on all cylinders" with strong sales numbers, they added.
"The historical playbook for food-safety scares that carry no confirmed brand-level link and no fatalities, points to a one-to-two-quarter demand air-pocket and a stock that tends to recover within two quarters," the analysts wrote.
It's a lesson in marketing and brand loyalty for Taco Bell and other restaurants, too, according to Gerry Chiaro, an associate professor of marketing at Northwestern University. The company will need to regain customers' trust, just as other restaurants like McDonald's, Wendy's and Chipotle have had to in the past after health scares.
"They have to be accountable for it. They can't blame anybody, even though in a way, they're the victim of the policies and processes and the food safety measures of their supplier," Chiaro told CNBC. "But you can't put the blame on it because the customer sees Taco Bell as the brand, and Taco Bell's the one they engage with."
Because health scares like the cyclosporiasis outbreak happen often and are par for the course for any restaurant serving fresh food, Chiaro said the playbook is becoming more common. And because Taco Bell has already issued a statement and pulled its infected ingredients, Chiaro said it's likely to follow the recovery trend of other companies
"A very clear, accountable, transparent communication, a recommitment to our health safety and our food safety processes – it can make them better," he said.`,
    bodyJa: `タコベルは金曜日、環状胞子症の発生に関連するレタスをレストランから撤去したと発表した。
疾病管理予防センターによると、この流行は現在、5つの州で1,600人以上に影響を与えている。 CDCによると、この感染症は重篤な胃腸炎に似ており、多くの場合、寄生虫に感染してから2～3週間後に症状が現れ始めます。死亡者は報告されていない。
同庁は木曜日、発生源の調査により、インディアナ州、ケンタッキー州、ミシガン州、オハイオ州、ウェストバージニア州にあるタコベルの店舗で提供されていた細切りアイスバーグレタスが感染源と関係していると発表した。米国食品医薬品局は供給業者と協力して、レタスが他の場所に送られたかどうかを確認している。
タコベルは、「公衆衛生当局との継続的な協議に基づき、十分な注意を払って、タコベルはレストランから製品を自発的に撤去するために迅速に取り組み、影響を受けた原材料は全国のサプライチェーンから削除された」と述べた。
タコベルの親会社ヤム・ブランズは、健康不安への対応により、過去５日間で株価が７％近く下落した。今週13％近く下落したサラダチェーンのスイートグリーンや、3％以上下落したファストカジュアルチェーンのカバなど、生鮮レタスを販売する他の食品会社も株価を下げた。 CDCがそれらの成分をシクロスポラ症の潜在的な原因として特定しなかったことに明らかな安堵感があり、金曜にはスイートグリーンとカバの株価がそれぞれ17％以上と約2％上昇した。
感染拡大に関する見出しが渦巻く中、特に感染拡大の影響が最も大きい州では、タコベルや他のレストランチェーンの売上が一時的に打撃を受ける可能性があるが、アナリストらは、売上高や株価の落ち込みは長引かない可能性が高いと述べた。それでも、CDCが他のレストランチェーンを感染源の可能性があると特定するかどうかはまだ分からない。
報道によると、タコベルで影響を受けたレタスは、サプライヤーであるテイラー・ファームズにまで遡る可能性があり、テイラー・ファームズはこの製品を多くのレストランチェーンに流通させ、ほとんどの食料品店で直接販売している。
2024年のマクドナルドの大腸菌感染拡大に関連した同じ企業テイラー・ファームズは金曜の声明で、メキシコ中部産のアイスバーグレタスをすべて撤去したと発表した。同社は、自社ブランドのサラダやキットはいずれも流行と関連していないと付け加えた。
「FDAの追跡調査では、米国のアイスバーグレタス供給量の1％未満に相当する特定の独立農場が感染源の可能性があることを示しているが、我々はこの地域からすべてのアイスバーグレタスを無期限に撤去した」と同社は述べた。
スイートグリーンと他のレストラン会社は今週、自社の食材が影響を受けたとは思わないとの声明を発表した。このサラダチェーンは、メニューにアイスバーグレタスを使用していないと述べた。
「調査の開始時から、当社はサプライチェーン内の原材料が調査の一環として特定されたかどうかを確認するためにサプライヤーと緊密に連絡をとってきた。現在までのところ、特定されたものはない」と同社は述べた。
チポトレは、今週はそれほど大きな在庫変動は見られなかったが、金曜日の声明で、同社の店舗では細切りアイスバーグレタスは提供されておらず、同社の原材料が感染拡大と関連しているとは考えていないと述べた。
売上と在庫への影響
アナリストらは、特に過去の健康不安の際にレストランがどのように対応したかに基づいて、感染拡大がヤム・ブランズの株価に大きな影響を与える可能性は低いと述べている。
一時的な効果が無いわけではありません。 Placer.ai の最近のデータによると、新鮮なレタスを提供するチェーン店では過去 1 週間で客足が減少し、タコベルでは 6% 近く減少し、パネラ ブレッドでは 7% 以上減少したことがわかりました。
TDコーウェンのアナリスト、アンドリュー・チャールズ氏はCNBCに対し、シクロスポリア症の流行による影響は同社にとってリスクの4分の1に抑えられ、急速な回復に至ると信じていると語った。同氏は、その推移は、マクドナルドとウェンディーズの両社がそれぞれ2024年と2022年に大腸菌大流行から迅速に回復したのと似ていると予想していると述べた。
「ソーシャルメディアは、より多くの短期記憶喪失を引き起こすだけです」とチャールズ氏は言う。 「どちらの場合も、影響は 4 分の 1 以下でした。ここでも同様のセットアップです。」
同氏は、今回の流行はタコベルの肉自体ではなくトッピングに限定されており、肉自体は主要な商品であり、消費者行動に大きな影響を与える可能性が高いと付け加えた。また、新型コロナウイルス感染症のパンデミックにより、過去数年間で食品安全への懸念が業界全体に及ぼす影響も軽減されたと同氏は付け加えた。
「ここからは様子見する必要がある」とチャールズ氏は語った。
エバーコアISIのアナリストらは金曜日のメモで、スポットライトがタコベルからテイラーファームに移るにつれ、感染拡大はベンダーの問題からサプライヤーの問題に変わるだろうと考えていると書いた。
「我々の推測では、今後数週間のうちに、この食品安全問題は見出しから消え、いつまでも残る限り、特にタコベルよりもサプライヤーに問題が集中することになるだろう」とアナリストらは書いている。
影響を受けた中西部の州での需要低迷は米国の他の地域よりも長く続く可能性が高いが、エバーコアのアナリストらは、マクドナルドが2024年に約6週間以内に回復したのと同じように、タコベルも数週間以内に既存店売上高のプラス成長に戻る可能性があると述べた。同社は最近、好調な売上高で「全気筒を稼働させている」ため特にそうだと付け加えた。
「ブランドレベルの関連性は確認されておらず、死者数も出ていない食品安全恐怖の歴史的な戦略は、1～2四半期の需要エアポケットと2四半期以内に在庫が回復する傾向があることを示している」とアナリストは書いている。
ノースウェスタン大学のマーケティング准教授、ジェリー・キアロ氏によると、これはタコベルや他のレストランにとってもマーケティングとブランドロイヤルティの教訓となるという。マクドナルド、ウェンディーズ、チポトレなどの他のレストランが健康被害を受けて過去にそうしなければならなかったのと同じように、同社も顧客の信頼を取り戻す必要があるだろう。
「彼らはそれについて責任を負わなければなりません。たとえ彼らがある意味、サプライヤーの方針やプロセス、食品安全対策の犠牲者であるとしても、彼らは誰も責めることはできません」とキアーロ氏はCNBCに語った。 「しかし、それを責めることはできません。なぜなら、顧客はタコベルをブランドとして見ており、タコベルは彼らが関与するものであるからです。」
クロスポリア症の流行のような健康不安は頻繁に起こり、生鮮食品を提供するレストランでは当然のことであるため、キアーロ氏は、この戦略はより一般的になりつつあると述べた。また、タコベルはすでに声明を発表し、感染した食材を撤去しているため、キアーロ氏は他社の回復傾向に追随する可能性が高いと述べた
「非常に明確で、説明責任があり、透明性のあるコミュニケーション、私たちの健康安全と食品安全プロセスへの再コミットメントは、それらをより良くすることができます。」と彼は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/cyclosporiasis-outbreak-linked-to-taco-bell-may-not-have-major-impact.html",
    publishedAt: "2026-07-17T22:16:23+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 8,
  },
  {
    id: "white-house-defends-argentina-team-over-7ff42aa6",
    title: "White House defends Argentina team over Falklands banner",
    titleJa: "ホワイトハウス、フォークランド旗をめぐってアルゼンチン代表を擁護",
    summaryJa: "ホワイトハウス、フォークランド旗をめぐってアルゼンチン代表を擁護- 公開されました",
    bodyOriginal: `White House defends Argentina team over Falklands banner
- Published
The White House has defended the Argentinian football team's right to free speech after they controversially waved a banner in support of their country's territorial claim to the Falkland Islands while celebrating their World Cup win against England.
Argentina face potential disciplinary action from Fifa over the incident which could breach rules on political statements.
Asked whether players were in the wrong, Andrew Giuliani, head of the White House Fifa task force, said on Friday that the team had the opportunity and ability to "make those statements" in the US.
The comments could further fuel the row over the incident, which has seen Downing Street back calls for Fifa to investigate.
The Falklands, a British overseas territory in the south-west Atlantic Ocean, remains the subject of a sovereignty dispute between the UK and Argentina.
Players for Argentina held a banner after Wednesday's semi-final match reading "Las Malvinas son Argentinas", which translates as "The Falklands are Argentine".
Speaking to reporters on Friday, Giuliani referenced free speech protections in the US Constitution, saying: "We believe in our First Amendment rights here in the United States of America."
Downing Street backed calls for Fifa to investigate the incident, with the prime minister's official spokesperson saying: "The World Cup might not be ours, but the Falkland Islands definitely are. Our commitment to the Falklands will never waver."
No 10 added that any potential action against Argentina players who unveiled the banner was "a matter for Fifa", but echoed the view of Business Secretary Peter Kyle that world football's governing body should investigate.
For its part, the government of the Falkland Islands said it was "disappointed but not surprised" about the banner and it hopes Fifa will "sanction all behaviour of this nature in line with its own rules".
"We do not wish to see politics being brought into sport" a statement added.
"Nor do we wish the Islands and their people to be used as a political football in every conversation about England and Argentina".
In 2013, the people of the Falkland Islands voted overwhelmingly in favour of remaining a UK overseas territory.
Of 1,517 votes cast in the two-day referendum - on a turnout of more than 90% - 1,513 were in favour, while just three votes were against.
Argentina vice-president Victoria Villarruel posted on X after Wednesday's victory that "it wasn't just another match" alongside a video of what appeared to be Argentine soldiers.
"The Falklands are Argentine," Villarruel posted. "They banned bringing them to the stadium and forgot that we carry them in our blood and our hearts."
Argentina players also sang chants which referenced the Falklands and Argentina greats Maradona and Lionel Messi following their dramatic 3-2 win over Egypt in the last 16.
A brief but bitter war arose between Britain and Argentina over the territory in 1982.
A British military task force ejected Argentine forces, who had landed on the Falklands to stake a territorial claim.
The 74-day conflict led to the deaths of 255 British military personnel, three islanders and 649 Argentine soldiers.
Related topics
- Published1 day ago
- Published1 day ago`,
    bodyJa: `ホワイトハウス、フォークランド旗をめぐってアルゼンチン代表を擁護
- 公開されました
ホワイトハウスは、サッカーアルゼンチン代表がワールドカップの対イングランド戦勝利を祝う際にフォークランド諸島への自国の領土主張を支持する横断幕を振って物議を醸したことを受け、同代表の言論の自由の権利を擁護した。
アルゼンチンは、政治的発言に関する規則に違反する可能性のあるこの事件を巡り、FIFAから懲戒処分を受ける可能性がある。
ホワイトハウスのFIFA対策委員会の責任者アンドリュー・ジュリアーニ氏は金曜日、選手たちが間違っていたのかとの質問に対し、チームには米国で「そうした発言をする」機会と能力があると述べた。
このコメントはこの事件をめぐる争いをさらに煽る可能性があり、ダウニング街側はFIFAに調査を求める声を上げている。
大西洋南西部にある英国の海外領土であるフォークランド諸島は、依然として英国とアルゼンチンの間で主権紛争の対象となっている。
水曜日の準決勝試合後、アルゼンチンの選手たちは「ラス・マルビナスの息子、アルゼンチン」と書かれた横断幕を掲げた。これは「フォークランド諸島はアルゼンチンだ」という意味だ。
ジュリアーニ氏は金曜日、記者団に対し、合衆国憲法における言論の自由の保護に触れ、「我々はここアメリカ合衆国における憲法修正第1条の権利を信じている」と述べた。
ダウニング街はFIFAにこの事件を調査するよう求める声を支持し、首相の公式報道官は「ワールドカップは我々のものではないかもしれないが、フォークランド諸島は間違いなく我々のものだ。フォークランド諸島に対する我々のコミットメントは決して揺らぐことはない」と述べた。
No.10は、横断幕を公開したアルゼンチンの選手に対するいかなる行動の可能性も「FIFAの問題」であると付け加えたが、世界サッカー統括団体が調査すべきであるというピーター・カイルビジネス長官の見解に同調した。
一方、フォークランド諸島政府は、この横断幕について「失望しているが、驚いてはいない」とし、FIFAが「独自のルールに沿ってこの種の行為をすべて制裁」することを期待していると述べた。
「私たちは政治がスポーツに持ち込まれることを望んでいません」と声明は付け加えた。
「また、イングランドとアルゼンチンに関するあらゆる会話において、島とその人々が政治的サッカーとして利用されることも望んでいません。」
2013年、フォークランド諸島の住民は英国の海外領土に残ることに圧倒的多数で賛成票を投じた。
投票率90％以上で行われた2日間の住民投票では1,517票が投じられ、賛成は1,513票、反対はわずか3票だった。
アルゼンチンのビクトリア・ビジャルエル副大統領は水曜日の勝利後、アルゼンチン兵士とみられる映像とともに「ただの試合ではなかった」とＸに投稿した。
「フォークランド諸島はアルゼンチンだ」とビジャルエル氏は投稿した。 「彼らは彼らをスタジアムに連れて行くことを禁止し、私たちの血と心の中に彼らが宿っていることを忘れていました。」
アルゼンチンの選手たちは、ベスト16でエジプトに3対2で劇的な勝利を収めた後、フォークランドとアルゼンチンの偉大な選手、マラドーナとリオネル・メッシを連想させるチャントも歌った。
1982年にこの領土をめぐって英国とアルゼンチンの間で短くも激しい戦争が勃発した。
英国軍事機動部隊は、領有権を主張してフォークランド諸島に上陸したアルゼンチン軍を排除した。
74日間にわたる紛争により、イギリス軍関係者255名、島民3名、アルゼンチン兵士649名が死亡した。
関連トピック
- 1 日前に公開
- 1 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2rmjk0740o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-17T22:12:54+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1e16/live/e8524570-8226-11f1-bee8-53ce494e1abc.jpg",
    readTime: 4,
  },
  {
    id: "19-mostly-tech-stocks-that-have-fallen-a-771f45c0",
    title: "19 (mostly) tech stocks that have fallen at least 25% in July",
    titleJa: "7月に少なくとも25%下落した19銘柄（主に）ハイテク株",
    summaryJa: "当月のパフォーマンスが最も悪かった企業のうち 7 社は、2026 年になっても 3 桁の上昇を続けています。",
    bodyOriginal: `Seven of the worst performers for the month were still up by triple digits for 2026.`,
    bodyJa: `当月のパフォーマンスが最も悪かった企業のうち 7 社は、2026 年になっても 3 桁の上昇を続けています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/18-tech-stocks-that-have-fallen-at-least-30-during-july-4c373d5e?mod=mw_rss_topstories",
    publishedAt: "2026-07-17T21:45:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-12572551",
    readTime: 2,
  },
  {
    id: "how-your-winning-stock-index-fund-can-tu-ee76da8d",
    title: "How your winning stock-index fund can turn on a dime",
    titleJa: "勝った株価指数ファンドがどのようにして利益を得ることができるのか",
    summaryJa: "また、週末の読み物: 変化する債券市場、住宅市場の機会、およびマネタリストからのアドバイス。",
    bodyOriginal: `Also in Weekend Reads: The changing bond market, housing-market opportunities and advice from the Moneyist.`,
    bodyJa: `また、週末の読み物: 変化する債券市場、住宅市場の機会、およびマネタリストからのアドバイス。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/how-your-winning-stock-index-fund-can-turn-on-a-dime-e2e4b44e?mod=mw_rss_topstories",
    publishedAt: "2026-07-17T21:23:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-97993829",
    readTime: 2,
  },
  {
    id: "analysis-fed-chairman-warsh-faces-an-inf-30017c3c",
    title: "Analysis: Fed Chairman Warsh faces an inflation credibility test after Congress hearings",
    titleJa: "分析：ウォーシュFRB議長は議会公聴会後にインフレの信頼性テストに直面している",
    summaryJa: "ケビン・ウォーシュにとって、信頼こそがすべてです。今週の議会公聴会では、新連邦準備制度理事会議長が政策を維持することがいかに難しいかを示した。火曜日と水曜日に下院と上院で立て続けに行われた証言では、民主党からの激しい質問と共和党からの支持的なコメントの中で、ウォーシュ氏は大きな失言はほとんどなかった（たとえあったとしても）。しかし、物価の上昇が依然として速すぎるという点で双方が完全に一致しているため、FRB議長は物価の安定を維持するという約束を速やかに履行する必要がある。そうでなければ、同氏はFRB内と国会議事堂にある議長の伝統的な権力基盤の両方で支持を失うリスクがある。",
    bodyOriginal: `Credibility is everything for Kevin Warsh. Congressional hearings this week showed how hard it will be for the new Federal Reserve chairman to keep it.
Warsh had few, if any, major slip-ups amid intense questioning from Democrats — and supportive commentary from Republicans — in back-to-back days of testimony before the House and Senate on Tuesday and Wednesday. But with both parties in full agreement that prices are still rising too fast, the Fed chairman needs to quickly deliver on his promises to keep prices stable. If not, he risks losing support both within the Fed and in the chairman's traditional power base on Capitol Hill.
Part of Warsh's challenge is that he wants to rethink how the Fed measures inflation itself. Two important measures of prices — the consumer and producer price indexes — showed unexpected declines this week. CPI fell by 0.4% in June, while PPI fell 0.3%.
"Any central bank would be happy to have the data going in the right direction," Warsh said Wednesday. "My view is these are all imperfect measures of the state of underlying inflation."
The Iran war has raised gas prices in the U.S., but Warsh said that isn't necessarily inflation, or at least not the kind the Fed can deal with.
"Particular price shocks happen to particular prices that we don't have control over. But I don't want to suggest we don't have control over inflation in the medium term. That's our job," Warsh said.
Warsh has appointed a task force to help answer the question he's asking about the nature of inflation, but it won't deliver results for months. The Fed will meet in two weeks to decide on the course for interest rates, and its voting officials appear divided on whether factors such as the boom in data-center construction to support a growing artificial intelligence industry are starting to raise generalized prices.
Fed Governor Lisa Cook in a speech Wednesday pointed to AI spending as a potential driver of inflation. She warned of "significant price increases for chips, other high-tech equipment, software, and utilities." That is changing her overall view of inflation, she said, "with inflation risks now outweighing employment risks."
The debate over AI spending "is one of the good family fights" at the Fed, Warsh said. His view was that supply would likely grow to catch up with demand. "I don't view one change in prices as necessarily being inflationary because I think there's a supply response. In that way, this is different from a foreign conflict and what it might do, which tends to reduce the supply side of the economy."
Whether a separate task force on AI will help resolve that debate remains to be seen. Some Republican senators praised the intellectual diversity of the members of Warsh's task forces, and the chairman spoke of one as containing a "team of rivals."
But it isn't a given that the task forces will challenge Warsh's views. The members of Warsh's AI task force are all hugely bullish on AI. As Democratic senators pointed out Wednesday, there is no one in that group who will obviously speak for labor.
Warsh is channeling a conservative economic tradition at the Fed. His monetary policy report to Congress resurrected a practice of reporting on the size of the money supply. The Fed under former Chair Jerome Powell considered information about the money supply to be essentially irrelevant to inflation, but Warsh disagrees. He doesn't want to return to the era when the Fed targeted the size of the money supply in making policy decisions, but he believes certain monetary measures can give useful information about inflation.
"I have this old-fashioned view that monetary policy has something to do with money," Warsh said.
The risk for Warsh is if inflation doesn't soon start declining in a substantive way, all of these decisions will be closely scrutinized for signs that ideology overtook clear-headed analysis. Warsh has avoided making any commitments where he will take interest rates, but markets now overwhelmingly expect the Fed to raise interest rates by the end of the year. Warsh needs to get on the right side of that decision.
If rates go up because Warsh loses the argument about AI spending to the other members of his committee, then the chair's credibility will suffer. A worse result would be for Warsh to win the argument and keep rates flat or down, only to see inflation reaccelerate.
That kind of loss of credibility would be a problem even the best task force can't fix.`,
    bodyJa: `ケビン・ウォーシュにとって、信頼こそがすべてです。今週の議会公聴会では、新連邦準備制度理事会議長が政策を維持することがいかに難しいかを示した。
火曜日と水曜日に下院と上院で立て続けに行われた証言では、民主党からの激しい質問と共和党からの支持的なコメントの中で、ウォーシュ氏は大きな失言はほとんどなかった（たとえあったとしても）。しかし、物価の上昇が依然として速すぎるという点で双方が完全に一致しているため、FRB議長は物価の安定を維持するという約束を速やかに履行する必要がある。そうでなければ、同氏はFRB内と国会議事堂にある議長の伝統的な権力基盤の両方で支持を失うリスクがある。
ウォーシュ氏の課題の一部は、FRBがインフレそのものを測定する方法を再考したいということだ。今週、消費者物価指数と生産者物価指数という2つの重要な物価指標が予想外の低下を示した。 ６月のＣＰＩは０．４％低下、ＰＰＩは０．３％低下した。
ウォーシュ総裁は水曜日、「どの中央銀行もデータが正しい方向に向かうことを喜んでいるだろう」と述べた。 「私の見解では、これらはすべて、潜在的なインフレの状態を測る不完全な尺度だ」と述べた。
イラン戦争により米国のガソリン価格は上昇したが、ウォーシュ氏は、それは必ずしもインフレではなく、少なくともFRBが対処できる種類のインフレではないと述べた。
ウォーシュ氏は「特定の価格ショックは、われわれがコントロールできない特定の価格に起こる。だが、中期的にインフレをコントロールできないとは言いたくない。それがわれわれの仕事だ」と述べた。
ウォーシュ氏はインフレの性質に関する同氏の疑問に答えるための特別委員会を任命したが、成果が出るまでに数カ月かかる見通しだ。 FRBは2週間後に会合を開き、金利の方向性を決定する予定だが、成長する人工知能産業を支援するためのデータセンター建設ブームなどの要因が全般的な物価上昇につながり始めているかどうかについて、投票関係者の間で意見が分かれているようだ。
FRBのリサ・クック総裁は水曜日の講演で、AI支出がインフレを促進する可能性があると指摘した。同氏は「チップ、その他のハイテク機器、ソフトウェア、公共事業の大幅な価格上昇」について警告した。これによりインフレに対する全体的な見方が変わりつつあると同氏は述べ、「インフレリスクが雇用リスクを上回っている」と述べた。
ウォーシュ氏は、AI支出を巡る議論はFRBにおける「家族間の良い争いの1つ」だと述べた。同氏は、需要に追いつくために供給が増加する可能性が高いとの見方を示した。 「私は、供給反応があると考えているので、価格の変化が必ずしもインフレであるとは考えていません。その意味で、これは、経済の供給面を縮小させる傾向にある外国紛争や、それが引き起こす可能性とは異なります。」
AIに関する別のタスクフォースがこの議論の解決に役立つかどうかはまだ分からない。一部の共和党上院議員はウォーシュ氏の特別委員会のメンバーの知的多様性を称賛し、同委員長はその特別委員会には「ライバルのチーム」が含まれていると語った。
しかし、特別委員会がウォーシュ氏の見解に異議を唱えるのは当然のことではない。ウォーシュ氏の AI タスクフォースのメンバーは全員、AI に対して非常に強気です。民主党上院議員らが水曜日に指摘したように、このグループには明らかに労働者の代弁者となる人物は一人もいない。
ウォーシュ氏はFRBに保守的な経済の伝統を取り入れている。同氏の議会への金融政策報告書は、マネーサプライの規模を報告する慣行を復活させた。ジェローム・パウエル前議長時代のFRBはマネーサプライに関する情報は本質的にインフレとは無関係であると考えていたが、ウォーシュ氏はこれに同意しない。同氏は、FRBが政策決定を行う際にマネーサプライの規模を目標としていた時代に戻ることは望んでいないが、特定の金融措置がインフレに関する有益な情報を与える可能性があると信じている。
ウォーシュ氏は「金融政策はお金と関係があるという時代遅れの考えを持っている」と述べた。
ウォーシュ氏にとってのリスクは、インフレ率がすぐに実質的な形で低下し始めなければ、イデオロギーが冷静な分析を追い越した兆候がないか、これらすべての決定が綿密に精査されることだ。ウォーシュ総裁は金利をどのように決定するかについて明言を避けているが、市場では現在、FRBが年末までに利上げすると圧倒的に予想されている。ウォーシュはその決定を正しい側に置く必要がある。
AI支出に関する議論でウォーシュ氏が他の委員会メンバーに負けて金利が上昇すれば、委員長の信頼性は損なわれることになる。さらに悪い結果は、ウォーシュ氏が議論に勝ち、金利を横ばいまたは引き下げに維持することになるが、インフレが再加速することになるだろう。
このような信頼の喪失は、どんなに優秀な対策チームであっても解決できない問題です。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/fed-chairman-kevin-warsh-inflation-credibility-test-analysis.html",
    publishedAt: "2026-07-17T20:28:40+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "one-anti-war-critic-fined-another-held-a-cdbe8bca",
    title: "One anti-war critic fined, another held as Russia clamps down on dissent",
    titleJa: "ロシアの反対派弾圧で反戦評論家1人に罰金、もう1人に拘束",
    summaryJa: "ロシアの反対派弾圧で反戦評論家1人に罰金、もう1人に拘束- 公開されました",
    bodyOriginal: `One anti-war critic fined, another held as Russia clamps down on dissent
- Published
Russian authorities have continued to clamp down on dissent against the war by detaining a well-known blogger and moving to prevent a local politician from running for parliament.
Blogger Ilya Remeslo was a staunch supporter of Vladimir Putin until he staged a dramatic about-turn last March, calling the president a "war criminal and thief" and saying he should resign.
He has now been remanded in custody for two months on suspicion of spreading false information against the military.
Separately, Boris Nadezhdin has been convicted of "displaying extremist symbols", a ruling that bars him from collecting signatures for parliamentary elections in September.
Nadezhdin, 63, came to prominence two years ago, when he tried to stand for the presidency on an anti-war platform, but was eventually barred because electoral authorities ruled that signatures he had submitted were flawed.
Few genuine opposition politicians are left in Russia, and former MP Nadezhdin has styled himself more as a pro-peace politician.
Most have gone into exile abroad, while the most prominent figure, Alexei Navalny, died suddenly in a penal colony in the Arctic in February 2024. Russia said he died of natural causes but the UK and four European countries , externalhave said they are confident he was "poisoned with a lethal toxin".
Nadezhdin was initially declared a "foreign agent" last week before being detained on Monday over a video he reposted in 2023 that briefly showed an image of Navalny. He has also been barred from leaving Russia.
Being declared a foreign agent would most likely have barred him from running for office, but until he was convicted for "extremist symbols" a legal loophole meant he could still have gathered signatures to register as a candidate.
He can still appeal against the ruling, which fined him 1,000 roubles (£9.50; $13).
Nadezhdin suffers from high blood pressure and diabetes, and briefly fell when he appeared in court in his hometown of Dolgoprudny just to the north of Moscow.
Denying the charges against him, he said their real aim was to shut him up and stop him running for the Duma (Russian parliament). He also told the court he would not be able to pay any fine because all his accounts had been frozen.
Later on Friday, blogger Remeslo also appeared in court and was remanded in pre-trial detention for two months. His lawyer said he had been taken to Moscow after being detained hours earlier in his home city of St Petersburg.
Remeslo said he was being accused of disseminating fake news about the military because of his March 2026 blog post entitled Five reasons why I stopped supporting Vladimir Putin.
The post on the Telegram messsaging app came as a surprise in Russia, as Remeslo had previously backed Putin over the war and denounced the opposition - especially Navalny.
He complained about damage to Russia's economy and the government's restrictions on internet and media freedom, and was then sent to a psychiatric hospital for a month. After he was discharged he alleged he had been sent there against his will.
On Thursday, on the eve of his arrest, Remeslo posted on Telegram that "the situation is getting worse rapidly for Putin", citing what he said was Russia's energy crisis and intensifying conflicts among the elites.
Ukraine has targeted oil refineries and storage depots across Russia, leading to fuel shortages in many regions including Moscow.
Two opinion polls in Russia suggest Putin's popularity has dropped this month.
The Public Opinion Foundation (FOM) said his approval rating had fallen to 66%, down five points in the week to 12 July.
State-owned pollster VTsIOM said the fall was smaller, but put his rating at 65.1%, the lowest since the start of the full-scale war in Ukraine in February 2022.
"Everything is moving toward a situation where even a small push could lead to Putin losing power," Remeslo claimed.
Related topics
- Published4 days ago`,
    bodyJa: `ロシアの反対派弾圧で反戦評論家1人に罰金、もう1人に拘束
- 公開されました
ロシア当局は、著名なブロガーを拘束したり、地元政治家が議会に立候補するのを阻止したりするなど、戦争反対派の取り締まりを続けている。
ブロガーのイリヤ・レメスロー氏は、昨年3月にプーチン大統領が劇的な方向転換をし、プーチン大統領を「戦犯で泥棒」と呼び、辞任すべきだと発言するまでは、同大統領の熱烈な支持者だった。
同氏は現在、軍に対する虚偽の情報を広めた容疑で２カ月間拘留されている。
これとは別に、ボリス・ナデジディン氏は「過激派のシンボルを展示した」罪で有罪判決を受け、9月の議会選挙に向けた署名集めを禁止する判決が下された。
63歳のナデジディン氏は2年前、反戦を掲げて大統領に立候補しようとして脚光を浴びたが、最終的には同氏が提出した署名に欠陥があると選挙当局が裁定したため、阻止された。
ロシアには真の野党政治家はほとんど残っておらず、元国会議員のナデジディン氏は自らを平和推進政治家としてのスタイルをとっている。
大半は国外に亡命しており、最も著名な人物であるアレクセイ・ナワリヌイ氏は2024年2月に北極の流刑地で急死した。ロシアはナワリヌイ氏の死因は自然死だとしているが、英国と欧州4カ国は同氏が「致死性の毒素で毒殺された」と確信していると外部から表明している。
ナデジディン氏は先週、当初「外国スパイ」であると宣言されたが、2023年にナワリヌイ氏の画像を簡単に映した動画を再投稿したことで月曜日に拘留された。同氏はロシアからの出国も禁止されている。
外国工作員と認定されれば、同氏は立候補できなくなる可能性が高かったが、「過激派のシンボル」で有罪判決を受けるまでは、法の抜け穴があったため、立候補者として登録するための署名を集めることができた可能性が高い。
同氏は罰金1,000ルーブル（9.50ポンド、13ドル）を科せられた判決に対し、まだ控訴することができる。
ナデジディンは高血圧と糖尿病を患っており、モスクワのすぐ北にある故郷のドルゴプルドヌイの法廷に出廷した際、一時倒れた。
同氏は容疑を否定し、彼らの本当の目的は彼を黙らせ、下院（ロシア議会）に立候補するのを阻止することだったと語った。彼はまた、すべての口座が凍結されているため、罰金を支払うことはできないと法廷で述べた。
金曜後半にはブロガーのレメスロ氏も出廷し、公判前拘留で２カ月間差し戻された。同氏の弁護士は、同氏は故郷のサンクトペテルブルクで数時間前に拘束された後、モスクワに連行されたと述べた。
レメズロ氏は、「私がウラジミール・プーチン大統領の支持をやめた5つの理由」と題した2026年3月のブログ投稿が原因で、軍に関するフェイクニュースを広めた疑いで告発されたと述べた。
レメスロ氏は以前、戦争をめぐってプーチン氏を支持し、反対派、特にナワリヌイ氏を非難していたため、メッセージングアプリ「テレグラム」への投稿はロシアでは驚きだった。
彼はロシア経済へのダメージと、インターネットとメディアの自由に対する政府の制限について訴え、その後1か月間精神病院に送られた。退院後、彼は自分の意志に反してそこに送られたと主張した。
逮捕前夜の木曜日、レメスロ氏はテレグラムに、ロシアのエネルギー危機とエリート間の対立の激化を挙げ、「プーチン大統領にとって状況は急速に悪化している」と投稿した。
ウクライナはロシア全土の製油所や貯蔵所を標的にしており、モスクワを含む多くの地域で燃料不足に陥っている。
ロシアの２つの世論調査は、今月プーチン大統領の人気が低下したことを示唆している。
世論財団（FOM）によると、同氏の支持率は7月12日までの1週間で5ポイント低下し、66％となった。
国営世論調査会社ＶＴｓＩＯＭは、下落幅は縮小したが、同氏の評価は６５．１％で、２０２２年２月のウクライナでの全面戦争開始以来最低となったとしている。
レメズロ氏は「あらゆることが、小さな圧力でもプーチン大統領の権力喪失につながりかねない状況に向かって進んでいる」と主張した。
関連トピック
- 4 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn0n3y6ewn4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-17T20:00:54+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bb9a/live/ea7f3760-8201-11f1-b9b1-0bb7578872ce.jpg",
    readTime: 4,
  },
  {
    id: "faa-lets-boeing-sign-off-on-737-max-787-4e14e173",
    title: "FAA lets Boeing sign off on 737 Max, 787 airworthiness certificates again",
    titleJa: "FAA、ボーイングに737 Max、787の耐空証明書の再承認を許可",
    summaryJa: "米政府は金曜日、ボーイング社がベストセラー機737 Maxと787ドリームライナーの耐空証明書を再度発行できると発表したが、2018年と2019年の737 Maxの死亡事故を受けて製造業者からその権限は剥奪された。米連邦航空局は昨年9月、ボーイング社がマックスとドリームライナーの一部に限り、顧客に引き渡す前に自社の飛行機に発券することが可能で、FAAとボーイングがその作業を数週間交互に行うと発表した。",
    bodyOriginal: `The U.S. government on Friday said Boeing can once again issue airworthiness certificates for its bestselling 737 Max aircraft and 787 Dreamliners, an authority that was stripped from the manufacturer after fatal crashes in 2018 and 2019 of the 737 Max.
The Federal Aviation Administration said last September that Boeing could ticket its own planes before they're handed off to customers for only some of the Maxes and Dreamliners, alternating weeks between the FAA and Boeing doing that work.
"During the past eight months, the FAA has seen comparable production quality findings when Boeing issued airworthiness certificates and when the FAA issued them," the agency said Friday. "Based on these results, the FAA determined it can safely return this responsibility to Boeing."
Boeing didn't immediately respond to a request for comment.
The decision is a vote of confidence for Boeing, one of the biggest U.S. exporters by value, from its regulator and the U.S. government after years of safety crises, including the two crashes and a near catastrophe in January 2024 when a door plug blew off of a new 737 Max 9 moments into the flight.`,
    bodyJa: `米政府は金曜日、ボーイング社がベストセラー機737 Maxと787ドリームライナーの耐空証明書を再度発行できると発表したが、2018年と2019年の737 Maxの死亡事故を受けて製造業者からその権限は剥奪された。
米連邦航空局は昨年9月、ボーイング社がマックスとドリームライナーの一部に限り、顧客に引き渡す前に自社の飛行機に発券することが可能で、FAAとボーイングがその作業を数週間交互に行うと発表した。
「過去8カ月間、FAAはボーイング社が耐空証明書を発行したときとFAAが耐空証明書を発行したときとで同等の生産品質の結果を確認した」と同局は金曜日に発表した。 「これらの結果に基づいて、FAAはこの責任を安全にボーイングに戻すことができると判断した。」
ボーイングはコメント要請に応じなかった。
この決定は、2件の墜落事故や、2024年1月に新型737 Max 9の飛行開始直後にドアプラグが吹き飛ばされた大惨事に近い事故など、長年にわたる安全上の危機を経て、金額ベースで米国最大の輸出国の1つであるボーイングに対する規制当局と米国政府からの信任投票となった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/17/faa-boeing-737-max-787.html",
    publishedAt: "2026-07-17T19:14:43+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "many-ukrainian-soldiers-outraged-over-re-497c033b",
    title: "Many Ukrainian soldiers outraged over removal of defence minister, troops tell BBC",
    titleJa: "多くのウクライナ兵士が国防相の解任に激怒、軍がBBCに語った",
    summaryJa: "多くのウクライナ兵士が国防相の解任に激怒、軍がBBCに語った- 公開されました",
    bodyOriginal: `Many Ukrainian soldiers outraged over removal of defence minister, troops tell BBC
- Published
"My operation is scheduled for tomorrow," says the disfigured soldier, still recovering from his terrible injuries.
"I hope when I wake up after the anaesthetic, Fedorov will be back at the Ministry of Defence," the unnamed soldier says in a video posted on Telegram. "Otherwise, everything I was fighting for will have been in vain."
Among Ukraine's battle-weary soldiers and wounded veterans, there's a collective sense of outrage at this week's political developments.
President Zelensky's decision not to re-appoint his successful young defence minister, Mykhailo Fedorov, in his latest cabinet reshuffle, has caused bafflement and fury in equal measure.
"It is a blatant slap in the face to all service members," said a soldier we're calling Maryna, to protect her identity.
"It is truly difficult to put this into words without venting in frustration."
Despite the noisy protests breaking out across Ukraine, Maryna doubts popular anger is going to change anything.
"A dictatorship is already unfolding here," she says, "with its own petty tyrants who think they have caught God by the beard."
With army chiefs reportedly warning the ranks not to engage in political debate, soldiers are reluctant to speak openly or do so only on condition of strict anonymity. We have given made up names to all those who replied.
Another soldier, Natasha, said the protesters with their makeshift cardboard placards, were a long way from the daily brutality of the front line.
"Yesterday our positions here got hit by MLRS (multiple launch rocket systems), so nobody cared about Fedorov or the cardboard signs."
But in the messages we've received, there's clear admiration for what Fedorov has been able to achieve, both as Minister for Digital Transformation and during his brief tenure as Defence Minister.
More than anyone, he's identified as the man who has single-mindedly driven innovation in the military, helping to elevate the role of drones and other modern technologies to a point where Ukraine has, in recent months, been able to turn the tide of the war against its much larger enemy.
When I met him in Kyiv last summer, Federov described how data was being used to perfect a scheme dubbed "Army of Drones: Bonus", whereby frontline units could earn points for each Russian soldier killed or piece of equipment destroyed.
The scheme was popular, credited with speeding up procurement and driving innovation.
Fedorov came across as someone deeply committed to promoting Ukraine's war effort in the most creative ways possible, and, as he put it, "how to use limited resources more effectively."
But as members of a military still led by an officer class which emerged out of the old top-down Soviet era system, the soldiers know only too well the sorts of obstacles Fedorov has faced.
"If you can't come to an agreement with the old fossils," Natasha said, "they'll eat you alive."
Kill Russian soldiers, win points: Is Ukraine's new drone scheme gamifying war?
- Published18 July 2025
Chief among the "fossils", in the eyes of some of the soldiers who responded to our requests, is Gen Oleksandr Syrskyi, the austere 60-year-old commander-in-chief of Ukraine's armed forces.
He was regarded as a national hero four years ago, following his successful defence of Kyiv in the weeks following Russia's full-scale invasion. But Gen Syrskyi's name has since become linked with an outdated way of fighting which places little value on human lives.
"Syrskyi commands no authority or respect," Andriy told us. "To us, he remains the General 200," a derogatory nickname referring to a Soviet military code for casualties.
Others simply call him "The Butcher".
To be fair, not everyone in the military shares such a dim view of their leader.
"Currently there is no replacement for Syrskyi in the army," Andrii, a former front-line soldier now working in the General Staff told us.
"Yes, he is Soviet-minded and graduated from a military school in Russia, but we do not have another military commander of such calibre. He conducted all the successful operations of this war."
One thing is clear: Mykhailo Fedorov and Gen Syrskyi had clearly fallen out by the time President Zelensky made his move this week.
Explaining his decision not to reappoint Fedorov, Zelensky said the two men were unable even to be in the same room together, while the ousted minister blamed the general for blocking all his reforms.
"It was snowballing," Andrii told us. "Everyone knew about it. Zelensky had to make a decision."
With their 25 year gap in age (Fedorov is 35), the two men at the centre of this explosive row represent very different versions of Ukraine.
"Fedorov is an iPhone 16, Syrskyi is a telephone from the 1980s," military analyst and former intelligence officer Ivan Stupak told me.
"You know, the same purpose but with different approaches."
Stupak credits Fedorov with achieving something no-one would have imagined possible ten years ago: dragging the sclerotic, rigidly inflexible military into the digital world.
In his short time at the Ministry of Defence (he was only appointed in January), Fedorov pulled off a number of coups, including persuading Elon Musk to block Russian access to his Starlink satellite-based internet service.
The move is thought to have caused havoc among Russian front-line positions, helping Ukrainian forces to halt and even repel Russian advances.
There have been rapid advances in the use of AI and cheap interceptors to help protect Ukrainian cities from the scourge of Russian drones.
Fedorov also conducted a forensic analysis of procedures and practices in the ministry, aimed at reducing bureaucracy and improving efficiency.
Arguably, it was a never-ending task.
"The Ministry of Defence is a swamp," Stupak said. "It's made of very solid material and it's very difficult to establish new technologies because lots of people have been there for decades and they are don't share his vision of digitalisation."
The concern among many observers is that Fedorov's departure will bring his ambitious reform and innovation programme to a screeching halt, despite Zelensky's assurances that nothing will change.
With autumn and winter on the horizon and Russia likely to launch yet another assault on Ukraine's battered energy grid, some fear that the country will be more vulnerable.
"I'm very upset that all this progress, which was built by Fedorov, will be just destroyed and reversed in one of the most critical periods of the war," Daria Kaleniuk, executive director of Ukraine's Anti-Corruption Action Centre, said.
Kaleniuk says the crisis also reflects badly on Ukraine's leader.
"It sends a very bad signal," she said. "President Zelensky doesn't care what the people of Ukraine think, and he is also not accepting inside his team people with legitimacy, subjectivity, who are able to initiate solutions and results. That is very destructive for Ukraine."
The president's record of sacking or sidelining effective or popular officials has led some to accuse him of increasingly dictatorial behaviour.
"He can't stand the people who don't admire him," Stupak said.
The irony, Stupak said, is that Zelensky is starting to behave like the sort of politicians he used to lampoon when he was still a comedian.
"He's collected all the factors which were the subject for his jokes. Maybe it's because he's been in his position for seven years."
To activists like Kaleniuk, the sight of thousands of young people out on the street also brings on a strong sense of deja vu.
It's been almost exactly a year since people gathered in huge numbers to demand that Zelensky veto a bill stripping two of Ukraine's anti-corruption bodies of their powers.
The protests – the first anti-government demonstrations since Russia's full scale invasion - succeeded. Zelensky announced a new draft law restoring the independence of the two organisations.
Today's protesters are hoping for a similar result, even though the president has already appointed an interim minister, the current acting head of the Security Service of Ukraine, Yevhenii Khmara.
But while the current protests are so far smaller in scale, Kaleniuk said the stakes are much higher.
"These events are even more dangerous, because they directly impact our war effort," she said.
A number of the president's critics point to the fact that despite Fedorov's widely praised loyalty and success, Zelensky has seen fit to dispose of him.
"You can become a key architect of the strategy of technological victory over the enemy," Maria Berlinska, founder of an NGO which trains volunteers in aerial reconnaissance, wrote in a post on Facebook, "No matter how cool you are, it will not help you. At some point, you will simply be removed from the field."`,
    bodyJa: `多くのウクライナ兵士が国防相の解任に激怒、軍がBBCに語った
- 公開されました
「私の手術は明日の予定です」と、ひどい怪我からまだ回復中のこの傷ついた兵士は言う。
「麻酔から目覚めたら、フョードロフが国防省に戻っていることを願っています」と匿名の兵士はテレグラムに投稿されたビデオで語った。 「そうでなければ、私が戦ってきたすべてが無駄になってしまうでしょう。」
ウクライナの戦闘に疲れた兵士や負傷した退役軍人の間では、今週の政治的展開に対して一斉に怒りの感情が広がっている。
ゼレンスキー大統領が、最近の内閣改造で、成功した若手国防大臣ミハイロ・フェドロフを再任しないという決定を下し、困惑と怒りを同じくらい引き起こした。
「これは全軍人に対する露骨な平手打ちだ」と、私たちがマリーナと呼んでいる兵士は身元を守るために言った。
「フラストレーションを発散せずにこれを言葉で表現するのは本当に難しい。」
ウクライナ全土で騒々しい抗議活動が勃発しているにもかかわらず、マリナさんは民衆の怒りが何かを変えることはないと疑っている。
「ここではすでに独裁政権が展開しており、神をひげで捕まえたと思っている小暴君たちがいるのです」と彼女は言う。
伝えられるところによると、軍司令官らは政治的議論に参加しないよう階級に警告しているため、兵士たちは公然と話すことに消極的であり、あるいは厳格な匿名性を条件にのみそうしている。ご回答いただいた方全員に架空の名前を付けさせていただきました。
別の兵士ナターシャさんは、間に合わせのボール紙のプラカードを掲げたデモ参加者たちは、前線での日常的な残虐行為とは程遠いと語った。
「昨日、ここの我々の陣地がMLRS（多連装ロケットシステム）の攻撃を受けたので、誰もフョードロフや段ボールの標識など気に留めなかった。」
しかし、私たちが受け取ったメッセージの中には、フェドロフ氏がデジタル変革担当大臣として、そして国防大臣としての短い任期中に達成できたことに対する明らかな称賛の声が含まれています。
彼は誰よりも、軍事分野でのイノベーションをひたむきに推進し、ドローンやその他の最新技術の役割をここ数カ月でウクライナがはるかに大きな敵に対して戦況を変えることができるところまで高めることに貢献した人物として知られている。
昨年の夏にキエフで私が彼に会ったとき、フェデロフは、「ドローン軍：ボーナス」と呼ばれるスキームを完成させるためにデータがどのように使用されているかについて説明した。これにより、最前線の部隊はロシアの兵士が殺されるか、装備が破壊されるたびにポイントを獲得できるというものだ。
このスキームは人気があり、調達のスピードアップとイノベーションの推進に貢献したと考えられています。
フョードロフ氏は、可能な限り最も創造的な方法でウクライナの戦争努力を促進し、彼の言葉を借りれば「限られた資源をより効果的に使用する方法」に熱心に取り組んでいる人物として見受けられた。
しかし、旧ソ連時代のトップダウン体制から生まれた将校階級が依然として率いる軍の一員として、兵士たちはフョードロフが直面してきた障害の種類をよく知っている。
ナターシャは、「古い化石たちと合意に達できないなら、彼らはあなたを生きたまま食べるでしょう」と言いました。
ロシア兵を殺してポイントを獲得：ウクライナの新たなドローン計画は戦争をゲーム化しているのか？
- 2025 年 7 月 18 日公開
私たちの要請に応じた一部の兵士たちの目には、「化石」の中で最も重要な人物は、厳格な60歳のウクライナ軍最高司令官オレクサンドル・シルシキー将軍である。
同氏は４年前、ロシアの全面侵攻後の数週間でキエフ防衛に成功し、国民的英雄とみなされていた。しかし、シルシキー将軍の名前はそれ以来、人命をほとんど重視しない時代遅れの戦い方と結び付けられるようになった。
「シルシキーには権威も尊敬もありません」とアンドリーさんは語った。 「われわれにとって、彼は依然として200人将軍だ」と、ソ連軍の死傷者規定にちなんで付けられた軽蔑的なあだ名だ。
他の人は彼を単に「ブッチャー」と呼びます。
公平を期すために言うと、軍関係者の誰もが自分たちの指導者に対してそれほど暗い見方をしているわけではない。
「現在、陸軍にシルシキーの後任はいない」と元前線兵士で現在参謀本部で働くアンドリー氏は語った。
「はい、彼はソビエト志向で、ロシアの軍事学校を卒業しましたが、私たちにはこれほどの才能のある軍司令官は他にいません。彼はこの戦争のすべての成功した作戦を指揮しました。」
一つ明らかなことは、ゼレンスキー大統領が今週行動を起こした時点で、ミハイロ・フェドロフ氏とシルシキー将軍は明らかに不仲だったということだ。
ゼレンスキー氏はフョードロフ氏を再任しない決断を説明し、２人は同じ部屋にいることさえ不可能だったと述べ、一方、追放された大臣はフョードロフ氏のあらゆる改革を阻止したとして将軍を非難した。
「雪だるま式に増えていきました」とアンドリーさんは語った。 「誰もがそのことを知っていた。ゼレンスキー氏は決断を下さなければならなかった。」
年齢差が 25 歳あり（フェドロフは 35 歳）、この爆発的な列の中心にいる 2 人は、まったく異なるバージョンのウクライナを代表しています。
「フョードロフはiPhone 16、シルシキーは1980年代の電話だ」と軍事アナリストで元情報将校のイワン・ストゥパックは私に語った。
「目的は同じですが、アプローチが異なります。」
ストゥパック氏は、硬化症で柔軟性に欠ける軍隊をデジタル世界に引きずり込むという、10年前には誰も実現可能とは想像できなかったことをフェドロフ氏が達成したと評価している。
フェドロフ氏は国防省での短期間（任命されたのは1月）で、衛星ベースのインターネットサービス「スターリンク」へのロシアのアクセスを阻止するようイーロン・マスク氏を説得するなど、数々のクーデターを成功させた。
この動きはロシアの前線陣地に大混乱を引き起こし、ウクライナ軍がロシアの進軍を阻止し、さらには撃退するのに役立ったと考えられている。
ウクライナの都市をロシアのドローンの惨劇から守るために、AIと安価な迎撃機の使用が急速に進歩している。
フェドロフ氏はまた、官僚主義の削減と効率の向上を目的として、省内での手続きや慣行の法医学的分析も実施した。
おそらく、それは終わりのない仕事でした。
「国防省は泥沼だ」とスタパック氏は語った。 「それは非常に堅固な素材で作られており、多くの人が何十年もそこに住んでおり、デジタル化に対する彼のビジョンを共有していないため、新しい技術を確立するのは非常に困難です。」
多くの関係者の間で懸念されているのは、何も変わらないとのゼレンスキー大統領の保証にもかかわらず、フョードロフ氏の辞任により、彼の野心的な改革・革新計画がきしむような音を立てて停止するのではないかということだ。
秋から冬が目前に迫り、ロシアがウクライナの荒廃したエネルギー網に再び攻撃を仕掛ける可能性が高く、同国がさらに脆弱になるのではないかと懸念する人もいる。
ウクライナ反汚職行動センターの事務局長ダリア・カレニューク氏は、「フョードロフによって築かれたこのすべての進歩が、戦争の最も重要な時期に破壊され、逆転されることに非常に憤慨している」と語った。
カレニューク氏は、この危機はウクライナの指導者にも悪影響を及ぼしていると語る。
「それは非常に悪い信号を送っています」と彼女は言いました。 「ゼレンスキー大統領は、ウクライナ国民が何を考えているか気にしていません。また、正当性と主体性を持ち、解決策や結果を導き出せる人材をチーム内に受け入れていません。これはウクライナにとって非常に破壊的です。」
大統領が有能な役人や人気のある役人を解任したり、脇に追いやったりしてきたことから、一部では独裁的な行動が増えていると非難する人もいる。
「彼は自分を尊敬しない人々に我慢できない」とストゥパック氏は語った。
皮肉なことに、ゼレンスキー氏はまだコメディアンだったころに嘲笑していた種類の政治家のように振る舞い始めている、とストゥパック氏は語った。
「彼はジョークのネタになった要素をすべて集めてきた。7年間このポジションにいたからかもしれない」。
カレニュークのような活動家にとっても、何千人もの若者が街頭に繰り出す光景は強い既視感をもたらす。
ウクライナの2つの反汚職団体の権限を剥奪する法案にゼレンスキー大統領が拒否権を発動するよう要求するために大勢の人々が集まってから、ほぼちょうど1年が経った。
ロシアの全面侵攻以来初の反政府デモである抗議活動は成功した。ゼレンスキー大統領は、両組織の独立性を回復する新たな法案を発表した。
大統領はすでに暫定大臣、現ウクライナ治安局長官代行のエフヘニー・クマラ氏を任命しているにもかかわらず、今日の抗議活動参加者らは同様の結果を期待している。
しかしカレニューク氏は、現在の抗議活動の規模ははるかに小さいものの、リスクははるかに高いと語った。
「これらの出来事は、私たちの戦争努力に直接影響を与えるため、さらに危険です」と彼女は言った。
大統領批判者の多くは、フョードロフ氏の忠誠心と成功が広く称賛されているにもかかわらず、ゼレンスキー氏が同氏を処分するのが適切だと判断したという事実を指摘している。
航空偵察のボランティアを訓練するNGOの創設者、マリア・ベルリスカ氏はフェイスブックへの投稿で、「敵に対する技術的勝利の戦略の主要な構築者になれる」と述べ、「どんなに冷静であっても役に立たない。ある時点で、単に現場から排除されるだけだ」と述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvg8w4dpjkwo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-17T19:04:09+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0d83/live/2d7f0f80-8212-11f1-bee8-53ce494e1abc.jpg",
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
