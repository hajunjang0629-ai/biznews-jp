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
    id: "crosscountry-train-services-resume-after-b2eedbcb",
    title: "CrossCountry train services resume after outage",
    titleJa: "クロスカントリー列車の運行は停電後に再開",
    summaryJa: "クロスカントリー列車の運行は停電後に再開- 公開されました",
    bodyOriginal: `CrossCountry train services resume after outage
- Published
Train operator CrossCountry says it expects to run a full service on Monday after cancelling nearly all of its UK services the day before following a power cut at its control centre.
The outage in Birmingham at the weekend brought disruption from Glasgow to Penzance.
Major routes were affected between Birmingham and Manchester, which pass through Stoke-on-Trent, Coventry and Wolverhampton. Journeys from Leeds to York and Cheltenham to Cardiff were also caught in the travel chaos, leaving passengers frustrated.
On Monday morning, CrossCountry reported a handful of service cancellations, although these were put down to trains departing late and staff shortages.
Customers are advised to check their journey before travelling.
The operator on Sunday thanked passengers for their patience and understanding during the disruption.
Tickets purchased for travel on CrossCountry services on Sunday will be valid for travel on CrossCountry services until Wednesday, the company has said.
On Sunday, a range of personal experiences were shared by passengers.
Andy Burton, from Worcester, was travelling back from Cromford to Worcester after spending the weekend away with family celebrating his sister's birthday, but only got as far as Derby before his journey came to a premature end.
He was forced to stay the night in a budget hotel in the hope he could return home on Monday.
"It was only once I had arrived at Derby that a member of staff told me my planned alternative route via Leicester had also been cancelled, because it was part of the CrossCountry disruption," he said.
"I soon realised I was stranded, as they said there was no alternative train route back to Worcester.
"It's not the best end to a great weekend away."
Reese Proctor described the cancellations as "frustrating and unacceptable" as he tried to get to Manchester's Etihad Stadium in time for a 14:00 BST kick-off against Bournemouth.
He had hoped to get a train from Reading to Manchester, but instead resorted to driving more than 100 miles to his friend's house in Leicester before driving on to the stadium.
The 22-year-old told BBC Newsbeat the drive had added an extra two hours to his journey, leaving him "fuming".
A number of services resumed on Sunday evening, including an hourly train service from Birmingham New Street to Leicester and Derby.
On Sunday, Transport Secretary Heidi Alexander said she was "concerned" by the situation.
She said: "We are setting up Great British Railways and nationalising services, including CrossCountry next year, to end decades of fragmentation and vulnerability on our network. We are determined to give passengers the reliability they deserve."
The National Union of Rail, Maritime and Transport Workers (RMT) has called for a review of railway operational control centres following the disruption, "to ensure they remain unaffected by power outages".
RMT general secretary Eddie Dempsey said passengers and rail workers should not have to face another week of "travel chaos" because of unreliable back-up systems.
CrossCountry was ranked Britain's worst rail operator in June.
Get in touch
Have you been affected by the disruption?
Follow BBC Birmingham on BBC Sounds, Facebook, external, X, external and Instagram, external.
- Published18 June
- Published29 April
- Published11 February`,
    bodyJa: `クロスカントリー列車の運行は停電後に再開
- 公開されました
鉄道運営会社クロスカントリーは、前日に管制センターの停電を受けて英国でのほぼすべての運行を中止したが、月曜日には全運行する予定だと述べた。
週末にバーミンガムで起きた停電により、グラスゴーからペンザンスまで混乱が生じた。
ストークオントレント、コベントリー、ウルヴァーハンプトンを通るバーミンガムとマンチェスター間の主要路線が影響を受けた。リーズからヨーク、チェルトナムからカーディフへの旅も旅行の混乱に巻き込まれ、乗客は不満を感じた。
月曜朝、クロスカントリーは数件の運行中止を報告したが、その原因は列車の出発遅延と人員不足だった。
お客様は旅行前に自分の行程を確認することをお勧めします。
運行会社は日曜日、混乱時の忍耐と理解を乗客に感謝した。
同社によると、日曜日にクロスカントリーサービスでの旅行のために購入したチケットは水曜日までクロスカントリーサービスでの旅行に有効だという。
日曜日、乗客たちはさまざまな個人的な経験を共有した。
ウースター出身のアンディ・バートンさんは、妹の誕生日を祝うために家族と週末を過ごした後、クロムフォードからウースターに戻る途中だったが、ダービーまでしか到達せずに旅は途中で終了した。
彼は月曜日に帰宅できることを願って、安宿に一晩泊まることを余儀なくされた。
「ダービーに到着して初めて、スタッフから、計画していたレスター経由の代替ルートも中止になったと告げられた。クロスカントリーの混乱の一環だったからだ」と彼は語った。
「ウースターに戻る別の鉄道ルートはないと言われたので、私はすぐに立ち往生していることに気づきました。
「素晴らしい週末を過ごす最高の終わり方ではないね。」
リース・プロクター監督は、ボーンマス戦の英国標準時間14時キックオフに間に合うようにマンチェスターのエティハド・スタジアムに到着しようとしていた際に、今回のキャンセルは「もどかしく、受け入れがたい」と述べた。
彼はレディングからマンチェスターまで電車で行くことを望んでいましたが、代わりにレスターの友人の家まで160マイル以上車で向かい、その後スタジアムへ向かいました。
22歳の彼はBBCニュースビートに対し、ドライブのせいで移動時間がさらに2時間長くなり、「イライラしていた」と語った。
日曜日の夜には、バーミンガム・ニューストリートからレスターやダービーへの1時間ごとの列車運行など、多くの運行が再開された。
ハイジ・アレクサンダー運輸長官は日曜日、この状況を「懸念している」と述べた。
彼女は、「私たちは、何十年にもわたる私たちのネットワークの断片化と脆弱性に終止符を打つために、グレートブリティッシュ鉄道を設立し、来年クロスカントリーを含むサービスを国有化するつもりです。」私たちは乗客にふさわしい信頼性を提供することを決意しています。」
全国鉄道海運運輸労働組合（RMT）は、今回の混乱を受けて「停電の影響を受けないようにする」ため、鉄道運行管理センターの見直しを求めている。
RMTのエディ・デンプシー書記長は、乗客と鉄道職員が、信頼性の低いバックアップシステムのせいでさらに1週間の「旅行混乱」に直面する必要はないと述べた。
クロスカントリーは6月に英国最悪の鉄道事業者にランクされた。
連絡する
混乱の影響を受けましたか?
BBC バーミンガムを BBC Sounds、Facebook (外部)、X (外部)、Instagram (外部) でフォローしてください。
- 6 月 18 日公開
- 4 月 29 日発行
- 2 月 11 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cp8x8xglp27o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-24T06:41:05+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/183e/live/5b94c360-9f1d-11f1-b2a2-8945a27a2843.jpg",
    readTime: 4,
  },
  {
    id: "china-probes-use-of-formaldehyde-to-keep-1f3268ec",
    title: "China probes use of formaldehyde to keep cabbages fresh",
    titleJa: "中国、キャベツの鮮度を保つためのホルムアルデヒド使用を調査",
    summaryJa: "中国、キャベツの鮮度を保つためのホルムアルデヒド使用を調査- 公開されました",
    bodyOriginal: `China probes use of formaldehyde to keep cabbages fresh
- Published
Authorities in China have launched an investigation into reports of formaldehyde being used to preserve the freshness of cabbages for human consumption.
Officials in the northeastern Hebei province confirmed that they had verified footage showing individuals dipping cabbages in a solution before loading them onto trucks for transportation.
An environmental blogger first released the footage last week. Using formaldehyde, a colourless chemical that is known to cause cancer, for preserving the freshness of food in China is strictly prohibited.
China is the world's largest producer of cabbages, most of which are exported to neighbouring countries in Asia.
Police have taken legal action against the individuals involved, according to state media.
Officials are now moving swiftly to prevent panic and restore confidence by carrying out spot checks on markets across the country.
Chinese state media says investigators will also establish how widespread the practice is and take measures to trace affected vegetables.
In a statement issued on Saturday, local authorities in Kangbao county said: "Any illegal or non-compliant practices discovered will be dealt with strictly in accordance with the law to ensure the safety of the vegetable supply."
Xinfadi market in Beijing, one of the major sources of fresh produce in the capital, issued a statement saying that it had investigated the source of its cabbages, adding that none of the affected vegetables had entered its market.
The incident has generated widespread media attention in China.
An editorial in the People's Daily wrote: "The wholesalers focused solely on their immediate economic interests while completely disregarding the lives and health of consumers. [They] crossed a legal red line and breached the moral bottom line."
China produces well over 30 million tons of cabbages each year, nearly half of the world's annual total. Vietnam, South Korea and Russia are among the largest export destinations for the vegetable.
Exposure to relatively high quantities of formaldehyde in some workplaces has been linked to some types of cancer in humans, but the effect of exposure to small amounts is less clear, according to the American Cancer Society.`,
    bodyJa: `中国、キャベツの鮮度を保つためのホルムアルデヒド使用を調査
- 公開されました
中国当局は、人間が消費するキャベツの鮮度を保つためにホルムアルデヒドが使用されているという報告について調査を開始した。
河北省北東部の当局者は、輸送用のトラックにキャベツを積み込む前に、キャベツを溶液に浸す人々を映す映像を確認したことを認めた。
環境ブロガーが先週初めてこの映像を公開した。中国では、食品の鮮度を保つために、発がん性があることが知られている無色の化学物質であるホルムアルデヒドを使用することは厳しく禁止されている。
中国は世界最大のキャベツ生産国で、そのほとんどがアジアの近隣諸国に輸出されている。
国営メディアによると、警察は関係者に対して法的措置を講じた。
当局は現在、全国の市場で抜き打ち検査を実施することでパニックを防ぎ、信頼を回復するために迅速に動いている。
中国国営メディアは、捜査員がこの慣行がどの程度広がっているかを明らかにし、影響を受けた野菜を追跡するための措置を講じると述べている。
土曜日に発表された声明の中で、江保県の地方当局は「野菜供給の安全性を確保するため、違法または違反行為が発見された場合は法律に従って厳格に対処される」と述べた。
首都の生鮮食品の主要供給源の一つである北京の新発地市場は声明を発表し、キャベツの供給源を調査したと発表し、影響を受けた野菜は市場に入っていないと付け加えた。
この事件は中国で広くメディアの注目を集めた。
人民日報の社説は、「卸売業者は消費者の命と健康を完全に無視しながら、目先の経済的利益のみに焦点を当てた。（彼らは）法的な越えてはならない一線を越え、道徳的最低ラインに違反した」と書いた。
中国は毎年 3,000 万トンを優に超えるキャベツを生産しており、これは世界の年間総量のほぼ半分に相当します。ベトナム、韓国、ロシアはこの野菜の最大の輸出先です。
米国癌協会によると、一部の職場での比較的大量のホルムアルデヒドへの曝露は、人間の一部の種類のがんと関連しているが、少量への曝露の影響はそれほど明らかではない。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy9ze48l2yeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-24T05:40:48+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3fc4/live/3beac070-9f70-11f1-b05d-ad36121ca56d.jpg",
    readTime: 2,
  },
  {
    id: "nearly-three-million-teslas-recalled-in-3cc8f276",
    title: "Nearly three million Teslas recalled in China over hidden door handles",
    titleJa: "隠しドアハンドル問題で中国で300万台近くのテスラがリコール",
    summaryJa: "隠しドアハンドル問題で中国で300万台近くのテスラがリコール- 公開されました",
    bodyOriginal: `Nearly three million Teslas recalled in China over hidden door handles
- Published
Minimalistic retractable door handles became a signature feature of electric vehicles (EVs), but the controversial designs are now at the centre of China's biggest car recall, affecting more than 4 million vehicles.
The recall, which includes 2.98 million Chinese-made Teslas, follows safety concerns that the hidden door handles are difficult to locate and open in emergency situations.
Other brands affected by the recall include Chinese carmakers XPeng, Xiaomi and Geely.
Made popular by multi-billionaire Elon Musk's Tesla, hidden door handles are designed to tuck seamlessly within the car's door panel and only extend outwards when an owner approaches their vehicle.
The design came under scrutiny after two fatal crashes in China involving Xiaomi EVs, in which power failures were suspected to have prevented doors from being opened.
Tesla said in a statement on Friday that it was recalling some of its Model 3, Y, S and X vehicles due to door handles that are "difficult to identify and operate because their colour is similar to the interior trim".
This could hinder occupants or rescuers from quickly opening the doors in an emergency, such as during a "severe collision causing the vehicle's low-voltage system to fail."
Tesla said it will place warning labels on the recalled vehicles and issue a software update to automatically lower a vehicle's windows after a collision.
It is not clear if the affected firms plan to make a similar recall for the rest of the world.
The BBC has contacted Tesla, XPeng, Xiaomi and Geely for comment.
The use of the hidden handle design has "snowballed" after Chinese brands were quick to copy the "sleek" look of Tesla's Model S sedan since 2014, said Tu Le, the founder of consultancy Sino Auto Insights.
The use of warning labels and a software update is more of a "band-aid" than a lasting solution for the issue, he added.
In February, Chinese authorities announced a ban on hidden door handles.
Under new rules due to take effect on 1 January 2027, cars will only be allowed to be sold in China if they have a mechanical release on both the inside and outside of their doors.
Tesla's door handles were also involved in a probe by US safety regulators after reports that they suddenly stopped working, leaving children trapped in the cars.
In July, the US National Highway Traffic Safety Administration suggested creating a new formal safety standard for all carmakers.
The BBC has contacted the agency for comment.
Related topics
- Published27 May
- Published29 January`,
    bodyJa: `隠しドアハンドル問題で中国で300万台近くのテスラがリコール
- 公開されました
ミニマルな格納式ドアハンドルは電気自動車（EV）の特徴的な機能となったが、物議を醸しているこのデザインは現在、400万台以上の車両に影響を与える中国最大の自動車リコールの中心となっている。
今回のリコールには中国製テスラ298万台が含まれており、隠しドアハンドルが緊急時に見つけにくく開けにくいという安全上の懸念を受けて行われた。
リコールの影響を受ける他のブランドには、中国の自動車メーカーXPeng、Xiaomi、Geelyなどが含まれる。
億万長者イーロン・マスク氏のテスラによって普及した隠しドアハンドルは、車のドアパネル内にシームレスに収まり、所有者が車に近づいたときにのみ外側に伸びるように設計されています。
中国で小米科技（シャオミ）のＥＶが絡む死亡事故が２件発生し、停電によりドアが開かなくなった疑いがあり、この設計が精査されるようになった。
テスラは金曜日の声明で、ドアハンドルが「色がインテリアトリムと似ているため、識別や操作が難しい」ため、モデル3、Y、S、Xの一部車両をリコールすると発表した。
これにより、「車両の低電圧システムに障害が発生する重大な衝突」などの緊急時に、乗員や救助者がドアを素早く開けるのが妨げられる可能性がある。
テスラは、リコール対象車両に警告ラベルを貼り、衝突後に車両の窓を自動的に下げるソフトウェアアップデートを発行すると発表した。
影響を受けた企業が世界の他の地域に対しても同様のリコールを計画しているかどうかは不明である。
BBCはテスラ、XPeng、Xiaomi、Geelyにコメントを求めた。
コンサルタント会社Sino Auto Insightsの創設者Tu Le氏は、2014年以来中国ブランドがテスラのモデルSセダンの「洗練された」外観をすぐに模倣したことを受けて、隠しハンドルデザインの使用が「雪だるま式」に増えたと語った。
警告ラベルの使用やソフトウェアのアップデートは、問題の永続的な解決策というよりも「応急処置」に近いと同氏は付け加えた。
中国当局は2月、隠しドアハンドルの禁止を発表した。
2027年1月1日に発効予定の新規則では、ドアの内側と外側の両方に機械的リリースが付いている自動車のみ中国での販売が許可される。
テスラのドアハンドルも突然作動しなくなり、子供たちが車内に閉じ込められたとの報告を受け、米国の安全規制当局による調査の対象となった。
7月、米国道路交通安全局は、すべての自動車メーカーに対して新しい正式な安全基準を作成することを提案した。
BBCは同局にコメントを求めた。
関連トピック
- 5 月 27 日公開
- 1 月 29 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4g6ggdg030o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-24T05:01:17+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/96b3/live/afd3f120-9f87-11f1-aed2-8d6da8d75094.jpg",
    readTime: 3,
  },
  {
    id: "divorce-smartphones-and-control-bbc-sees-8dcf9155",
    title: "Divorce, smartphones and control - BBC sees how Taliban run Afghanistan",
    titleJa: "離婚、スマートフォン、支配 - タリバンがアフガニスタンをどのように運営しているかをBBCが見る",
    summaryJa: "離婚、スマートフォン、支配 - タリバンがアフガニスタンをどのように運営しているかをBBCが見る- 公開されました",
    bodyOriginal: `Divorce, smartphones and control - BBC sees how Taliban run Afghanistan
- Published
Governor Abdullah Sarhadi gives money to treat a boy's broken arm and hands out funds for a local mosque - then, in his office in northern Afghanistan, an astonishing exchange unfolds.
A young woman tells the grey-bearded former Taliban commander that she wants to divorce her husband, who she accuses of months of abuse and beatings.
She will not take no for an answer.
In a country where girls are banned from secondary education, the 18-year-old argues her case calmly and confidently, her face completely hidden behind a full-face veil and sunglasses.
"If there was any chance to live together, I wouldn't be here… I have taken my decision," she says.
After trying to persuade her to avoid divorce, the governor later comments that women are "mindless" and "deficient in intellect", to laughter from the male officials, bodyguards and elders around him.
The moment gives a rare glimpse into the day-to-day realities of the Taliban's rule, five years after they swept aside the US-backed government in 2021.
In that time, women have been excluded from most workplaces, banned from universities and may not travel alone or visit parks and leisure centres.
In encounters spread over two years, the BBC gained unusual access to influential figures in the extreme Islamist movement, spending time with men who once planned suicide attacks or spent years in underground hideouts, but are now officials and soldiers.
The Taliban came into power saying they had changed, but many of their policies are similar to the hard-line interpretation of Sharia - Islamic religious law - they imposed in the 1990s.
The men we met seemed to want to present themselves as reasonable, yet were not keen to discuss their past violence. And we saw moments of unease between the rulers and those they rule.
Governor Sarhadi says Tuba – not her real name – should stay in the marriage.
"Ask yourself: 'Who would marry me after I get my divorce?'" says Sarhadi. "You'll have to compromise a lot or you'll lose your dignity and honour."
"Mr Governor, my honour and dignity have already been ruined," she responds.
Her husband listens, awaiting his turn to speak.
Under Sharia, a woman requesting that her husband agrees to a divorce may have to return some or all of the money given to her by him when they married. A financial settlement is often agreed. But this woman's husband says he wants four times the amount, which her family refuses to pay.
The governor says the woman should be given her own room. He adds that officials will warn him not to beat her - "otherwise he'd be jailed".
Unsatisfied, Tuba's father later tells the BBC the family will pursue divorce through the courts, even though, under the Taliban's court system, it is very difficult for a woman to get a divorce without the husband's consent.
Sarhadi was a military commander during the Taliban's first stint in power in the 1990s. He was among thousands of insurgents who surrendered in late 2001 as a US-led coalition ousted the group.
He was held for several years in US detention in Guantanamo Bay, but eventually released.
When the Taliban regained power, he became a governor - first in the province of Bamiyan, then when we met him in late June, in Sheberghan city in Jawzjan province. He has recently become deputy commander of a military corps in the northern province of Kunduz.
Tapping on an old-style mobile with a tiny screen, he says a recent ban on smartphones for officials has slowed things down. "Before, you could send a quick message… sending documents and getting an answer fast." If he says any more about the ban, "it will cause trouble", he adds.
But in other ways his worldview seems largely unchanged from the Taliban's position 25 years ago. Then, he was a military commander in Bamiyan, where the Taliban blew up ancient giant Buddha statues, triggering international shock and condemnation.
He initially tries to avoid our questions about the archaeological site, but eventually, he says: "I destroyed it with my own hands.
"Whatever we did and we do is in accordance with the guidance and God's law… We smash idols rather than sell them. Why should I regret? It was God's will."
In the capital Kabul, we meet another senior Taliban figure who swapped a violent past for a role with the ruling administration.
Habibullah Badr drives us through the streets in an armoured car.
He says he was previously "responsible for the operations of suicide attackers" in Kabul.
"I know all the roads and streets very well… we had all the information we needed about Kabul and its alleys," he says. "There were areas that needed a long time to plan."
Taliban suicide attacks killed thousands of people in Afghanistan, including many civilians.
Badr is cautious about discussing his past though, fearing it will "make people upset" and could "reopen wounds".
Asked about civilian deaths, he says the Taliban targeted US convoys and that civilians were urged to stay away from foreign bases.
Whenever I try to ask him about specific attacks that took place in civilian areas, he evades the question.
He is currently taking time out from official roles for medical treatment, but was previously deputy head of prisons for the whole country – and ran the very jail where he was held on death row under the previous government.
Badr invites us to join him at a tribal gathering, where the head of a charitable foundation is to honour him with a medal. But things take an unexpected turn.
"Mr Badr is a pride for Afghanistan and a great fighter," says Sultan Mohammad Talaee. "But I also have a complaint. If the schools and education were open to all it would be a great work for Afghanistan. I hope this doesn't offend you."
An awkward silence follows, his audience unsure how to react. Talaee's microphone is swiftly removed.
Afterwards, he tells the BBC: "I requested for the girls' schools to reopen… seeking knowledge is an obligation for both men and women in Islam."
He adds: "There were other things I wanted to say but they didn't let me talk more."
Often those who speak out face much more severe consequences.
Women told us of the deep despair they felt over dreams thwarted by restrictions on education, and of friends jailed for protesting.
Most journalists we spoke to said they had been summoned or questioned by the Taliban's intelligence organisation, Estikhbaraat.
The BBC put some of these concerns to the Taliban government's spokesman, known as Zabihullah Mujahid.
He has been a public face for the Taliban government since 2021. He still uses the pseudonym he went by for years during the insurgency, but he told us his real name is Tahir Shah Seddiqi - revealing it publicly for the first time.
In a lavish press centre funded by the Americans for the previous government, we ask him about the first press conference he gave there, two days after the Taliban took control of the country.
Then, he told the world the Taliban government would allow women to work and study "within our frameworks" and they would "be very active" in society. Why did they fail to keep their word?
"We are committed to women's rights, freedom of speech and other things within Sharia," he replies. "We should see everything through the Sharia lens."
Allowing women to work in offices such as his own "would lead to immoralities" and "their dignity would be undermined", he adds.
He says the issue of education for women is "under discussions… we need a Sharia-based solution for it".
When questioned about the Taliban's crackdown on media freedom, he says: "In a society like Afghanistan we have our restrictions. We can't let media do whatever propaganda they want… they can't broadcast against Islamic laws and rites."
The Taliban government sits in Kabul, but Mujahid spends a lot of time in the southern city of Kandahar, the Taliban's heartland, which some now consider the de facto capital.
We ask to meet the Taliban's supreme leader, Hibatullah Akhundzada, who is based there. He rarely appears in public and has never given a media interview - we are told it will not be possible at the moment.
Restrictions have been tightened in Kandahar since I last visited two years ago. Now men must have beards. Radio stations are not allowed to play music or broadcast women's voices, and we were not allowed to film in the city.
Two hours' drive away, along dusty roads, some of the group's most devoted former fighters showed the BBC the insurgents' old secret cave network.
Abid Lalai, a former fighter who now mans a checkpoint as part of a security force under the interior ministry, shows us the holes he fired from and the places he used to put his Quran and hang AK-47s.
His superior, Abdul Samad, shows us an unmarked graveyard, saying his father is buried here, killed fighting for the Taliban.
The area is one of the most deprived in a country where the UN says three in four people cannot provide for their basic needs. Samad says the local population desperately need water, roads and clinics.
"Emirate [Taliban] officials have not forgotten us," says Samad. He says the leaders may be busy with other priorities. "We are hopeful, they will look after us sometime."
Five years since the Taliban began their second stint in power, poverty, unemployment and economic instability remain pressing concerns.
Taliban figures we spoke to said they were working to tackle them, but we met other people who believe the group itself is the country's main problem.
"I'm speechless about how a group that has no understanding about life is suddenly in power," says Hoda - not her real name - a woman who protested on the streets when the Taliban first returned to power.
"Women can't accept this situation," she tells the BBC. "They might advance restrictions but it won't stay like this forever."
"I think the Taliban are scared of educated women," she adds. "That's why they restrict women. They want uneducated women so they can't raise wise men. Because that would end the Taliban."
Additional reporting by Hafizullah Maroof`,
    bodyJa: `離婚、スマートフォン、支配 - タリバンがアフガニスタンをどのように運営しているかをBBCが見る
- 公開されました
アブドラ・サルハディ知事は、骨折した少年の腕の治療に資金を提供し、地元のモスクの建設に資金を配った。その後、アフガニスタン北部の知事の事務所で、驚くべきやりとりが展開された。
若い女性が、数か月にわたる虐待と暴行を受けていた夫を告発して、白髪のひげを生やした元タリバン司令官に離婚したいと訴えた。
彼女は「ノー」という答えを受け入れません。
女子の中等教育が禁止されている国で、18歳の彼女は、全身ベールとサングラスで顔を完全に隠しながら、冷静かつ自信を持って自分の主張を主張している。
「もし一緒に住むチャンスがあったとしても、私はここにはいないだろう…私は自分の決断を下した」と彼女は言う。
知事は離婚を回避するよう彼女を説得しようとした後、女性は「思慮がない」「知性が欠如している」とコメントし、周囲の男性役人やボディーガード、長老らの笑いを誘った。
この瞬間は、タリバンが2021年に米国の支援を受けた政府を一掃してから5年後の、タリバン支配の日常の現実を垣間見ることができる貴重な瞬間だ。
その間、女性はほとんどの職場から排除され、大学への入学も禁止され、一人で旅行したり、公園やレジャーセンターを訪れたりすることもできなかった。
2年に渡って行われた接触の中で、BBCは、かつては自爆攻撃を計画したり、地下隠れ家で何年も過ごしたが、現在は役人や軍人である男性たちと時間を過ごし、過激なイスラム主義運動の影響力のある人物たちと異例の接触を獲得した。
タリバンは自らが変わったと主張して政権を握ったが、その政策の多くは1990年代に課したシャリア（イスラム教の宗教法）の強硬な解釈と似ている。
私たちが会った男性たちは、自分たちを理性的であると見せたいようでしたが、過去の暴力について話すことに熱心ではありませんでした。そして私たちは、支配者と彼らが支配する人々の間に不安の瞬間が見られました。
サルハディ知事は、トゥバ（本名ではない）は結婚生活を続けるべきだと述べた。
「『私が離婚した後、誰が私と結婚してくれるだろうか』と自問してみてください」とサルハディさんは言う。 「かなりの妥協をしなければならない、さもなければ尊厳と名誉を失うことになるだろう。」
「知事さん、私の名誉と尊厳はすでに傷つきました」と彼女は答えた。
彼女の夫は話を聞き、話す順番を待っています。
シャリーアのもとでは、夫に離婚に同意するよう求めた女性は、結婚時に夫から受け取ったお金の一部または全額を返還しなければならない可能性がある。金銭的な解決が合意されることがよくあります。しかし、この女性の夫はその4倍の金額が欲しいと言い、家族はその支払いを拒否している。
知事は女性に自分の部屋を与えるべきだと主張している。さらに、当局は彼女を殴らないように警告するだろう、「さもなければ投獄されるだろう」と付け加えた。
不満を抱いたチューバさんの父親は後にBBCに対し、タリバンの裁判制度では女性が夫の同意なしに離婚することは非常に難しいにもかかわらず、家族は裁判所を通じて離婚を求めるつもりだと語った。
サルハディ氏は、1990年代にタリバンが政権を握った最初の期間に軍司令官を務めた。彼は、2001年末に米国主導の連合軍がグループを追放したため降伏した数千人の反乱軍の一人だった。
彼はグアンタナモ湾で米国の拘留中に数年間拘留されたが、最終的に釈放された。
タリバンが権力を取り戻すと、彼は知事になった。最初はバーミヤン県で、次に私たちが６月下旬にジョズジャン県のシェベルガン市で彼に会ったとき。彼は最近、北部クンドゥズ州の軍団の副司令官に就任した。
小さな画面を備えた古いスタイルの携帯電話をタップしながら、最近当局者へのスマートフォンの使用が禁止されたため、事態が遅くなったと彼は言う。 「以前は、簡単なメッセージを送信できました。書類を送信して、すぐに返事を得ることができました。」禁止についてこれ以上発言すれば「問題が起きるだろう」と付け加えた。
しかし、他の点では、彼の世界観は25年前のタリバンの立場とほとんど変わっていないように見える。その後、彼はバーミヤンで軍司令官を務めたが、そこではタリバンが古代の巨大な仏像を爆破し、国際的な衝撃と非難を引き起こした。
彼は当初、遺跡に関する私たちの質問を避けようとしていたが、最終的には「私は自分の手で遺跡を破壊した。
「私たちが行ったこと、そして行うことはすべて、導きと神の法に従っています…私たちは偶像を売るのではなく、破壊します。なぜ後悔しなければならないのでしょうか？それは神のご意志でした。」
首都カブールでは、暴力的な過去を捨てて政権側の役割を担ったもう一人のタリバン幹部に会う。
ハビブラ・バドルは装甲車で私たちを街中を運転します。
同氏は以前、カブールで「自爆テロ犯の作戦を担当していた」と述べた。
「私はすべての道路や通りをよく知っています…カブールとその路地について必要な情報はすべて持っていました」と彼は言います。 「計画に時間がかかる部分もあった。」
アフガニスタンではタリバンの自爆攻撃により、多くの民間人を含む数千人が死亡した。
しかし、バドル氏は自分の過去について語ることには慎重で、それが「人々を動揺させ」、「傷が再び開く」可能性を恐れている。
民間人の死亡について尋ねると、タリバンは米国の輸送船団を標的にしており、民間人は外国の基地に近づかないように促されていると述べた。
私が民間地域で起きた具体的な攻撃について彼に尋ねようとすると、彼はいつも質問をはぐらかします。
彼は現在、治療のため公務から離れているが、以前は全国の刑務所副所長を務めており、前政権下で死刑囚が拘留されていたまさにその刑務所を運営していた。
バドル氏は、慈善財団の理事長がバドル氏を称えてメダルを授与する部族の集会に参加するよう私たちを招待する。しかし、事態は予期せぬ展開を迎える。
「バドル氏はアフガニスタンの誇りであり、偉大な戦士だ」とスルタン・モハマド・タライー氏は語る。 「しかし、私には不満もあります。学校と教育がすべての人に開かれていれば、アフガニスタンにとって素晴らしい取り組みになるでしょう。このことで気分を害されないことを願っています。」
気まずい沈黙が続き、聴衆はどう反応すればいいのか分からない。タライーのマイクはすぐに外される。
その後、彼はBBCに次のように語った。「私は女子学校の再開を要請した…知識を求めることはイスラム教において男性と女性の両方の義務である。」
さらに、「他にも言いたいことはあったが、それ以上話させてくれなかった」とも付け加えた。
多くの場合、声を上げた人はさらに厳しい結果に直面します。
女性たちは、教育の制限によって夢が阻まれて感じた深い絶望や、抗議活動で投獄された友人のことを語った。
私たちが話を聞いたほとんどのジャーナリストは、タリバンの諜報機関エスティクバラートから召喚または尋問を受けたと述べた。
BBCは、こうした懸念の一部をザビフラ・ムジャヒドとして知られるタリバン政府の報道官に伝えた。
彼は2021年からタリバン政府の公の顔となっている。彼は反乱中何年も使っていた偽名を今も使っているが、本名はタヒル・シャー・セディキだと初めて公に明らかにした。
前政権のためにアメリカ人が資金提供した豪華なプレスセンターで、タリバンが国を掌握した２日後にそこで行った最初の記者会見について彼に尋ねた。
そして、タリバン政府は女性が「私たちの枠組み内で」働き、勉強することを許可し、女性たちは社会で「非常に活躍する」だろうと世界に語った。なぜ彼らは約束を守れなかったのでしょうか?
「私たちはシャリーアの範囲内で女性の権利、言論の自由、その他のものに取り組んでいます」と彼は答えた。 「私たちはシャリアというレンズを通してすべてを見るべきです。」
同氏は、自身のオフィスのようなオフィスで女性が働くことを許可すれば「不道徳行為につながり」、「女性の尊厳が損なわれることになる」と付け加えた。
同氏は、女性の教育問題について「議論中だ…私たちはシャリーアに基づいた解決策を必要としている」と述べた。
タリバンによる報道の自由に対する弾圧について質問されると、彼はこう言った。「アフガニスタンのような社会では、我々には制限がある。我々はメディアに彼らが望むどんなプロパガンダもさせることはできない…イスラム法や儀式に反する放送をすることはできない。」
タリバン政府はカブールにあるが、ムジャヒドは多くの時間をタリバンの中心地である南部の都市カンダハルで過ごしており、現在はそこが事実上の首都であると考える人もいる。
私たちは、そこに拠点を置くタリバンの最高指導者、ヒバトゥラ・アクンザダ氏との面会を求めます。彼はめったに公の場に姿を現さず、メディアのインタビューにも応じたことがないが、現時点では不可能だと言われている。
私が最後に訪れたのは2年前以来、カンダハルでは規制が強化されている。今では男性はひげを生やさなければなりません。ラジオ局は音楽を流したり、女性の声を放送したりすることを禁じられており、市内での撮影も許可されていませんでした。
車で2時間離れたほこりっぽい道沿いで、グループの最も献身的な元戦闘員の何人かが反乱軍の古い秘密の洞窟ネットワークをBBCに見せた。
元戦闘員で、現在は内務省の治安部隊の一員として検問所に勤務しているアビッド・ラライさんは、彼が発砲した穴や、コーランを置いたりAK-47を吊るしたりした場所を見せてくれた。
彼の上司であるアブドゥル・サマドは、私たちに標識のない墓地を見せ、タリバンのために戦って亡くなった父親がここに埋葬されていると語った。
この地域は、4人に3人が基本的なニーズを満たせないと国連が発表しているこの国で最も恵まれた地域の一つだ。サマドさんは、地元住民が水、道路、診療所を切実に必要としていると語る。
「首長国（タリバン）当局者は私たちのことを忘れていません」とサマド氏は言う。 He says the leaders may be busy with other priorities. 「私たちは彼らがいつか私たちの面倒を見てくれるだろうと期待しています。」
タリバンが二度目の権力掌握を開始してから 5 年が経ちますが、貧困、失業、経済的不安定は差し迫った懸念のままです。
私たちが話を聞いたタリバン関係者らは、タリバン対策に取り組んでいると述べたが、タリバン自体がこの国の主要な問題であると信じている人たちにも会った。
「人生について全く理解していない集団がどうして突然権力を握ったのか言葉を失いました」とホダさん（仮名）は言う。彼女はタリバンが最初に政権に復帰したときに街頭で抗議活動を行った女性だ。
"Women can't accept this situation," she tells the BBC. 「規制が進むかもしれないが、この状況が永遠に続くわけではない。」
「タリバンは教育を受けた女性を恐れていると思います」と彼女は付け加えた。 「それが彼らが女性を制限する理由だ。彼らは教育を受けていない女性を望んでいるから、賢者を育てられない。それはタリバンを終わらせてしまうからだ。」
Hafizullah Maroof による追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ckgvk9p2n7ko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-24T05:00:22+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d35d/live/8a564f50-9d76-11f1-a291-b542ee92de7c.jpg",
    readTime: 10,
  },
  {
    id: "u-s-to-unveil-greatest-financial-offensi-354e1c2a",
    title: "U.S. to unveil 'greatest financial offensive' against Iran as Tehran threatens ship seizures",
    titleJa: "イランが船舶拿捕を脅す中、米国、イランに対する「最大の金融攻撃」を発表へ",
    summaryJa: "スコット・ベッセント財務長官は、米国は月曜日にイランに対して「史上最大の金融攻撃」を開始すると述べ、一方イランはホルムズ海峡の通航規則に違反した船舶を拿捕すると脅した。差し迫った事態の激化は、双方が合意に達するための60日間の停戦期限を逃し、中東戦争の終結を目的とした正式な停戦メカニズムが6か月目で終了したために生じた。",
    bodyOriginal: `The U.S will unveil "the single greatest financial offensive ever" against Iran on Monday, Treasury Secretary Scott Bessent said, while Tehran threatened to seize vessels that violate transit rules in the Strait of Hormuz.
The looming escalation comes as both sides missed a 60-day ceasefire window to reach a deal, closing off the formal truce mechanism aimed at ending the Middle East war now in its sixth month.
In a post on X Sunday evening stateside, Bessent said "at dawn begins an economic D-Day," framing the coming measures as the "endgame" for Washington's campaign against Tehran.
The new measures will add to an extensive sanctions regime already targeting Iran's banking, energy, aviation and cryptocurrency sectors. The Trump administration has claimed that Iran's economy is in freefall, with runaway inflation and a collapsing currency.
Bessent also warned that "any nation that serves as a financial artery of a withering regime should expect to share in its isolation" — language aimed squarely at foreign governments still transacting with Tehran. He has previously warned of further secondary sanctions on nations and entities that conduct business with Iran.
Iran has responded by warning Gulf neighbors against joining U.S. economic measures and tightening its grip on the chokepoint, through which roughly a fifth of the world's seaborne oil passed before the war.
On Saturday, Mohsen Rezaei, a longtime military commander who became the new secretary of Iran's Supreme National Security Council earlier this month, vowed to target the interests of oil-rich neighbors if they joined U.S. efforts to further isolate Iran.
"Any country that becomes a partner in creating economic restrictions against us will be regarded by us as an enemy," he said in an interview with Iran's state broadcaster.
In a series of posts on X on Sunday, Iran's state-controlled Persian Gulf Strait Authority, or PGSA, warned that vessels violating its transit rules in the Hormuz could face penalties, including "fines, seizure, or confiscation" during future passages.
Iranian Foreign Minister Abbas Araghchi has also dismissed the threat of a fresh round of U.S. economic sanctions as a "desperate" ploy, asserting that U.S. actions, like the blockade, were set to fail.
Tehran's parliament approved on Sunday a provision stipulating that ships passing through the Hormuz chokepoint will pay for services provided by Tehran, according to local media reports. The legislation still needs full parliamentary approval.
Omani Foreign Minister Sayyid Badr Albusaidi is scheduled to visit Tehran on Tuesday for bilateral talks with his Iranian counterpart Abbas Araghchi, local media reported Monday. Both sides will continue discussions over the Strait of Hormuz, according to Iranian foreign ministry spokesperson Esmail Baghaei.
Crude pulled back in Asian trading Monday despite the looming escalation. West Texas Intermediate futures, the U.S. benchmark, fell about 1.3% to $85.93 per barrel, and Brent crude, the international benchmark, dropped 1.3% to $93.22 a barrel.
The UK Maritime Trade Operations agency reported no confirmed attacks in the strait over the 48 hours to Sunday, though it warned of a "continued risk of drifting or uncharted mines," with mine danger areas still active.`,
    bodyJa: `スコット・ベッセント財務長官は、米国は月曜日にイランに対して「史上最大の金融攻撃」を開始すると述べ、一方イランはホルムズ海峡の通航規則に違反した船舶を拿捕すると脅した。
差し迫った事態の激化は、双方が合意に達するための60日間の停戦期限を逃し、中東戦争の終結を目的とした正式な停戦メカニズムが6か月目で終了したために生じた。
ベッセント氏は米国時間日曜夕方のX紙への投稿で、「夜明けに経済のDデイが始まる」と述べ、今後の措置を米国政府の対テヘラン作戦の「最終目標」と位置づけた。
この新たな措置は、すでにイランの銀行、エネルギー、航空、仮想通貨部門を対象とした広範な制裁体制に追加されることになる。トランプ政権は、暴走するインフレと通貨の崩壊により、イラン経済はフリーフォール状態にあると主張した。
ベッセント氏はまた、「衰退しつつある政権の金融動脈として機能する国家は、その孤立を共有することを期待すべきだ」と警告したが、これは依然としてテヘランと取引を続けている外国政府に向けた言葉である。同氏は以前、イランと取引のある国や団体に対するさらなる二次制裁について警告していた。
イランはこれに対し、湾岸諸国に対し、米国の経済対策に参加しないよう警告し、戦前に世界の海上石油の約5分の1が通過したチョークポイントへの締め付けを強化した。
土曜日、長年の軍司令官で今月初めにイラン国家安全保障最高評議会の新書記に就任したモーセン・レザエイ氏は、石油資源が豊富な近隣諸国がイランをさらに孤立させる米国の取り組みに参加すれば、その利益を狙うと誓った。
同氏はイラン国営放送とのインタビューで、「われわれに対して経済的制限を設けるパートナーとなる国はすべて、われわれから敵とみなされることになる」と述べた。
イラン国営ペルシャ湾海峡管理局（PGSA）は日曜日のXへの一連の投稿で、ホルムズ港の通航規則に違反した船舶は今後の通航中に「罰金、差し押さえ、没収」などの罰則を受ける可能性があると警告した。
イランのアッバス・アラグチ外務大臣も、米国による経済制裁の新たな発動の脅威を「絶望的な」策略として一蹴し、封鎖などの米国の行動は失敗することが決まっていたと主張した。
地元メディアの報道によると、テヘラン議会は日曜日、ホルムズの難所を通過する船舶にテヘランが提供するサービスの料金を支払うことを規定する条項を承認した。この法案は依然として議会の完全な承認を必要としている。
オマーンのサイード・バドル・アルブサイディ外相は、イランのアッバス・アラグチ外相との二国間会談のため、火曜日にテヘランを訪問する予定であると地元メディアが月曜日に報じた。イラン外務省のエスマイル・バガエイ報道官によると、双方はホルムズ海峡を巡る協議を継続する。
原油価格は、差し迫った激化にもかかわらず、月曜日のアジア取引で撤退した。米国の指標であるウェスト・テキサス・インターミディエート先物は約1.3％下落して1バレル当たり85.93ドル、国際指標であるブレント原油は1.3％下落して1バレル当たり93.22ドルとなった。
英国海事貿易業務局は日曜までの48時間に同海峡での攻撃は確認されなかったと報告したが、機雷危険区域は依然として活動中で「漂流または地図にない機雷の危険が継続している」と警告した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/24/us-iran-war-trump-hormuz-bessent-economic-sanctions-.html",
    publishedAt: "2026-08-24T04:58:03+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "ex-cricket-captains-urge-proper-medical-c1d7ff70",
    title: "Ex-cricket captains urge 'proper medical care' for Imran Khan",
    titleJa: "元クリケットキャプテンらがイムラン・カーンに「適切な医療」を要請",
    summaryJa: "元クリケットキャプテンらがイムラン・カーンに「適切な医療」を要請- 公開されました",
    bodyOriginal: `Ex-cricket captains urge 'proper medical care' for Imran Khan
- Published
A group of former cricket captains, including Indian batting legend Sunil Gavaskar and one of England's longest-serving skippers Sir Alastair Cook, have called on Pakistan to ensure its ex-PM Imran Khan be given proper care while in custody.
The cricketer-turned-politician has been in jail since 2023 on corruption charges which he denies.
In a letter to Pakistan's current leader Shehbaz Sharif, the 21 former skippers aired concern that Khan, 73, was allowed "only a few hours" at a hospital last week where he was examined by a state-appointed team.
Khan's party has also filed a contempt petition against the government for not giving him access to his own doctors, as ordered by the top court.
The former cricket captains laid out three demands in their letter, the first of which is that Khan be assessed by a medical board directed by Pakistan's Supreme Court – which would include his personal physicians – particularly on the reported loss of vision in his right eye.
They also urged authorities to allow weekly visits by Khan's family, as ordered by the court, "without interruptions or administrative delays".
Finally, they asked that any treatment recommended by the medical board be "provided without delay".
"Imran Khan is 73 years old and has now spent more than three years in custody," read the letter initiated by former Australian captain Greg Chappell.
"Whatever the legal and political arguments surrounding his case, the basic decency of ensuring a court-ordered medical process is actually completed is not, in our view, a controversial request."
Among the other signatories were England's Michael Atherton, Michael Brearley, Nasser Hussain, Andrew Strauss and David Gower, India's Kapil Dev and Dilip Vengsarkar, and Australia's Belinda Clark, Adam Gilchrist, Steve Waugh and Kim Hughes.
Fourteen of the former skippers had also supported an earlier appeal for "humane treatment and proper medical care" for Khan which was submitted in February.
Khan's lawyer claimed at the time that his client had 15% vision left in his right eye after prison authorities failed to take action.
The signatories of both letters had described themselves as "former colleagues and rivals who share a bond forged on the cricket field", adding that the bond "transcends the borders and disputes that too often divide countries".
Khan, who previously captained the Pakistan national cricket team, served as Pakistan's prime minister from 2018 to 2022.
He was imprisoned in August 2023 and has faced charges in more than 100 cases, ranging from leaking state secrets to selling state gifts, all of which he and his party Pakistan Tehreek-e-Insaf say are politically motivated.
His jailing sparked large-scale protests by supporters, which were met with a crackdown by authorities.
Pakistan's Supreme Court had on Tuesday directed the government to transfer Khan to a private hospital to be examined by physicians.
He was instead seen by doctors at a government-run hospital in Islamabad, who deemed him "medically fit", before he was moved back to prison.`,
    bodyJa: `元クリケットキャプテンらがイムラン・カーンに「適切な医療」を要請
- 公開されました
インドの伝説的打者スニル・ガバスカール氏やイングランドで最も長くキャプテンを務めたサー・アラステア・クック氏を含む元クリケット主将らのグループは、パキスタンに対し、元首相イムラン・カーン氏の拘留中に適切なケアが確実に受けられるよう求めた。
クリケット選手から政治家に転身した同氏は、2023年から汚職容疑で投獄されているが、本人は否認している。
パキスタンの現指導者シェバズ・シャリフ氏に宛てた書簡の中で、元船長21人は、73歳のカーン氏が先週、国が任命したチームによる検査を受ける病院で「数時間しか」入院を許されていないことに懸念を表明した。
カーン氏の党はまた、最高裁判所の命令に従い、カーン氏に自身の医師へのアクセスを与えなかったとして政府に対する侮辱罪の申し立てを行った。
クリケットの元キャプテンらは書簡の中で3つの要求を列挙しており、その1つ目は、特に報告されている右目の視力喪失に関して、パキスタン最高裁判所が指揮する医療委員会（主治医も含まれる）によるカーンの評価を受けることだ。
また当局に対し、裁判所の命令に従ってカーン氏の家族による毎週の面会を「中断や管理上の遅延なく」許可するよう求めた。
最後に、医療委員会が推奨する治療は「遅滞なく提供される」よう求めた。
元オーストラリア代表キャプテンのグレッグ・チャペルが書き始めた書簡には、「イムラン・カーンは73歳で、現在3年以上拘留されている」と書かれている。
「彼の事件をめぐる法的・政治的議論が何であれ、裁判所命令による医療プロセスが実際に完了することを保証するという基本的な良識は、物議を醸すような要求ではないと我々は考えている。」
他の署名者には、イングランドのマイケル・アサートン、マイケル・ブレアリー、ナセル・フセイン、アンドリュー・ストラウス、デビッド・ガワー、インドのカピル・デヴとディリップ・ヴェングサーカー、オーストラリアのベリンダ・クラーク、アダム・ギルクリスト、スティーブ・ウォー、キム・ヒューズが含まれていた。
元船長のうち14人も、2月に提出されたカーンに対する「人道的な扱いと適切な医療」を求める訴えを支持していた。
カーンさんの弁護士は当時、刑務所当局が措置を取らなかったため、依頼人の右目には15％の視力が残っていると主張した。
両書簡の署名者らは自らを「クリケット競技場で築いた絆を分かち合う元同僚でありライバル」と称し、その絆は「しばしば国を分断する国境や紛争を超える」と付け加えた。
カーン氏は以前クリケットパキスタン代表チームのキャプテンを務め、2018年から2022年までパキスタン首相を務めた。
同氏は2023年8月に投獄され、国家機密の漏洩から国家贈答品の販売に至るまで100件以上の罪に問われているが、同氏と彼の政党であるパキスタン・テフリク・エ・インサフ氏はいずれも政治的動機によるものだと主張している。
彼の投獄は支持者らによる大規模な抗議行動を引き起こし、当局による弾圧に遭った。
パキスタン最高裁判所は火曜日、医師の診察を受けるためにカーン氏を私立病院に移送するよう政府に指示した。
代わりに、彼は刑務所に戻される前に、イスラマバードの政府運営の病院の医師らの診察を受け、医師らは彼が「医学的に健康である」と判断した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2z889l0dxo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-24T03:55:35+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/92fd/live/5223f330-9f6f-11f1-830e-359f4d9d175a.jpg",
    readTime: 4,
  },
  {
    id: "alibaba-plunges-after-announcing-10-2-bi-416346a0",
    title: "Alibaba plunges after announcing $10.2 billion share placement to fund AI push",
    titleJa: "アリババ、AI推進資金として102億ドルの株式発行を発表後急落",
    summaryJa: "中国のハイテク大手が米国以外の投資家向けに新規発行株式を800億香港ドル（102億ドル）で売り出す価格を設定したことを受け、月曜日の香港市場でアリババ株は最大10％下落した。同社は、純利益のすべてを、AIインフラストラクチャの拡張と強化を含むフルスタックAI機能への投資に使用する予定であると述べた。",
    bodyOriginal: `Alibaba shares plunged as much as 10% in Hong Kong on Monday after the Chinese tech giant priced an 80 billion Hong Kong dollar ($10.20 billion) placement of newly issued shares to non-U.S. investors.
The company said it plans to use all of the net proceeds to invest in its full-stack AI capabilities, including expanding and enhancing its AI infrastructure.
Alibaba will issue 710 million new shares at HK$112.70 apiece, compared with the stock's Friday closing price of HK$123. Shares were last trading 8.4% lower at HK$112.7.
The share placement, expected to close on Wednesday, comes just days after Alibaba reported a 75% drop in profit for the June-quarter as heavy AI spending weighed on its results. Capital expenditure jumped 75% to 67.7 billion yuan.
Vey-Sern Ling, senior equity advisor at UBP, told CNBC last week following Alibaba's latest earnings that the company was well-positioned to pursue AI growth.
"I think Alibaba clearly is well positioned to chase that growth, given that they have a cloud computing arm, they have a very strong AI model," he said, adding that profits might weaken in the near term, while capex might rise.
Alibaba has been ramping up investment in AI as it seeks to make the technology a key driver of future growth.The company last year announced plans to invest at least 380 billion yuan in cloud computing and AI infrastructure over the next three years.
Alibaba's Chinese tech peers have also been ramping up AI spending. Tencent's capital expenditure rose 65% from the previous quarter to 52.8 billion yuan in the June-quarter as the company continued to invest in computing infrastructure to monetize its AI models.`,
    bodyJa: `中国のハイテク大手が米国以外の投資家向けに新規発行株式を800億香港ドル（102億ドル）で売り出す価格を設定したことを受け、月曜日の香港市場でアリババ株は最大10％下落した。
同社は、純利益のすべてを、AIインフラストラクチャの拡張と強化を含むフルスタックAI機能への投資に使用する予定であると述べた。
アリババは、金曜終値123香港ドルに対し、1株当たり112.70香港ドルで7億1000万株の新株を発行する。株価は直近の取引で8.4％安の112.7香港ドルで取引された。
この株式募集は水曜日に完了すると予想されており、アリババが多額のAI投資が業績を圧迫したため、6月四半期の利益が75％減少したと報告した数日後に行われた。設備投資は75％増の677億元となった。
UBPの上級株式アドバイザー、ベイサーン・リン氏は先週、アリババの最新決算を受けてCNBCに対し、アリババはAIの成長を追求する上で有利な立場にあると語った。
「アリババはクラウドコンピューティング部門を持ち、非常に強力なAIモデルを持っていることを考えると、明らかにその成長を追いかけるのに有利な立場にあると思う」と同氏は述べ、利益は短期的には弱まる一方、設備投資は増加する可能性があると付け加えた。
アリババはAI技術を将来の成長の主要な原動力にすべく、AIへの投資を強化しており、同社は昨年、今後3年間でクラウドコンピューティングとAIインフラに少なくとも3800億元を投資する計画を発表した。
アリババの中国テクノロジー関連企業もAIへの支出を増やしている。同社がAIモデルを収益化するためにコンピューティングインフラストラクチャへの投資を継続したため、テンセントの6月四半期の設備投資は前四半期比65％増の528億元となった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/24/alibaba-share-placement-drop-ai-hong-kong.html",
    publishedAt: "2026-08-24T02:55:22+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "shein-aims-for-almost-27bn-valuation-in-62158a32",
    title: "Shein aims for almost $27bn valuation in 1 September stock market debut",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Shein aims for almost $27bn valuation in 1 September stock market debut
- Published
Fast-fashion giant Shein says it plans to raise up to HK13.86bn (£1.3bn; $1.77bn) when its shares start trading on the Hong Kong stock market on 1 September.
In a filing on Monday, external, Shein said it will offer nearly 280 million shares for between HK$47.60 and HK$49.50.
At the top of the range, it would value the firm at almost $27bn (£19.8bn). But that is much lower than the $100bn valuation it reached in a round of private fundraising in 2022, reflecting weaker sales growth and higher costs.
The long-awaited move debut comes after failed attempts to list in the US and London due to regulatory challenges amid scrutiny of Shein, which has its headquarters in Singapore but was founded in China.
The initial public offering (IPO) is being backed by Wall Street investment giants Goldman Sachs, Morgan Stanley and JP Morgan.
In July, Shein said it had swung to a quarterly loss as its sales slowed after US President Donald Trump removed an import duty exemption on small packages.
The company said it lost $99m in the first three months of the year, compared with a net income of $395m a year earlier.
It also came as uncertainty remains over the tit-for-tat US-China tariffs wars, which is currently paused.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cdeweewjdxno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-24T01:23:19+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2280/live/ffbe0af0-9f54-11f1-9eef-7971e1b6f541.jpg",
    readTime: 2,
  },
  {
    id: "stock-futures-flat-as-u-s-and-canada-app-f53b2316",
    title: "Stock futures flat as U.S. and Canada appear headed for trade war",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `U.S. stock-index futures were little changed on Sunday, as it appeared the U.S. was on the verge of an all-out trade war with Canada, one of its biggest trading partners.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/stock-futures-slip-as-u-s-and-canada-appear-headed-for-trade-war-a9814b24?mod=mw_rss_topstories",
    publishedAt: "2026-08-24T01:01:00+00:00",
    category: "貿易",
    imageUrl: "https://images.mktw.net/im-20758647",
    readTime: 2,
  },
  {
    id: "oil-prices-fall-as-investors-await-tough-3887f764",
    title: "Oil prices fall as investors await 'toughest' U.S. sanctions on Iran",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Oil prices fell Monday as investors awaited details of what Washington has billed as its toughest-ever sanctions campaign against Iran, while Tehran dismissed the threat of intensified economic pressure.
West Texas Intermediate futures, the U.S. benchmark, declined about 1.3% to $85.93 per barrel. Brent crude, the international benchmark, lost 1.24% to $93.22 a barrel.
U.S. Treasury Secretary Scott Bessent is set to unveil a new package of sanctions against Iran later Monday.
"At dawn begins an economic D-Day — the single greatest financial offensive ever marshaled against an adversary," Bessent said in a post on X.
Bessent told CNBC last week that Washington intends to "collapse" the Islamic Republic with the "toughest sanctions in history," as the Trump administration pushes U.S. allies and other countries to cut economic ties with Tehran.
The announcement follows President Donald Trump's threat last week to launch the "most crushing economic operation ever taken against any country" against Iran. Trump also warned of steep financial penalties for countries that help Tehran evade sanctions, calling the effort "Economic Warfare and Isolation on an unprecedented scale."
Iran has pushed back against the threats. The Islamic Revolutionary Guard Corps said Tehran has ways "to counter the adverse effects of the enemy's war" and can "easily establish economic relations with countries," according to Iranian state media.
Commonwealth Bank of Australia expects oil prices to remain volatile in the second half of the year as markets weigh whether Washington's push to economically isolate Iran will succeed and how Tehran could respond.
"It is unclear whether U.S. policy to economically isolate Iran will prove effective. But if the US measures do work as intended, Iran's ability to respond via increased violence becomes a growing risk for energy markets to consider," CBA wrote in a note on Monday.
CBA also expects Brent crude to trade between $70 and $100 a barrel in the second half of 2026. The bank said prices could fall toward the bottom of that range if oil flows through the Strait of Hormuz recover even modestly, estimating that just 50% to 60% of pre-war quantities would be enough to revive expectations of an oversupplied global market.
—CNBC's Ashley Capoot contributed to this report.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/24/oil-price-today-wti-brent-us-sanctions-iran.html",
    publishedAt: "2026-08-24T00:59:57+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "review-launched-into-how-pub-and-hotel-b-6ee13f69",
    title: "Review launched into how pub and hotel business rates calculated",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Review launched into how pub and hotel business rates calculated
- Published
A review is being launched into the way business rates are calculated for pubs and hotels in England and Wales, and could lead to a reform of the system.
The Treasury says business rates expert Jerry Schurder will lead the review into rate valuations and report back in March 2027, with the government calling for the views of landlords, hoteliers and business owners to feed in to the process.
Last month, Andy Burnham announced a 20% cut in business rates for pubs, social clubs and live music venues in England, to come into effect in April.
Pub groups have argued they face disproportionately higher rates bills, but other businesses have called for a wider reform of the rates system.
According to the British Beer and Pub Association (BBPA), 161 pubs closed in the first three months of this year across England, Scotland and Wales, equating to the loss of around 2,400 jobs.
Rising business rates are cited as one issue facing the sector, although there have also been complaints that increases in National Insurance and the minimum wage have made staff costs more expensive.
James Murray, financial secretary to the Treasury, said the new review would look at "a rethink of valuations - so that we can build a fairer system for the future".
Emma McClarkin, chief executive of the BBPA, said: "For years pubs have paid a disproportionately higher business rates bill which has ground down their ability to keep the doors open, so this review is sorely needed and hugely welcome."
The BBPA says pubs are valued differently for rates than retail venues. Instead of being based just on floor area, they are judged by a measure called Fair Maintainable Trade - which means when a pub's turnover increases, so does its rates bill.
Schurder is a former business rates policy lead at advisory firm Newmark UK, and his review will feed into the next rates revaluation in 2029.
His appointment was welcomed by Craig Beaumont of the Federation of Small Businesses (FSB) who said he would bring "crucial heavyweight business rates expertise into the Treasury".
However, Beaumont said the government needed to address the wider business rates system and exempt more smaller firms by increasing the rates relief threshold for small businesses.
Tom Ironside from the British Retail Consortium also welcomed the review but said it was "vitally important that the needs of retailers are not overlooked".
Shadow Chancellor Sir Mel Stride said the review was "far too late for a sector this Labour government has already done its best to kill off".
"Tax hikes on business premises and jobs, alongside job-destroying regulation in the Employment Rights Act, have left many hospitality businesses on the brink," he said.
Liberal Democrat Treasury spokesperson Daisy Cooper said reform of business rates was "long overdue", but also called for an emergency VAT cut and a reverse to jobs tax changes "which have hammered hospitality in particular".
Last year, under the previous chancellor Rachel Reeves, the government had said it would scale back business rate discounts that had been in force since the Covid pandemic and announced that there would be no discount at all from April this year.
That, combined with big upward adjustments to rateable values of pub premises, left landlords with the prospect of much higher bills.
Following criticism from the hospitality industry, the government cut business rates for pubs and music venues by 15% earlier in 2026.
The 20% discount in England announced in July will apply on top of the existing support.
However, the government said the rates discount would not apply to the "very largest" live music venues, and there was some confusion among some businesses as to whether they would be classed as a pub and therefore eligible for the relief.
Details about which businesses are eligible are expected to be announced at Chancellor John Healey's first Budget in the autumn.`,
    bodyJa: `パブやホテルのビジネス料金の計算方法の見直しが開始
- 公開されました
イングランドとウェールズではパブやホテルのビジネス料金の計算方法の見直しが始まっており、制度改革につながる可能性がある。
財務省によると、ビジネス料金の専門家であるジェリー・シューダー氏が料金評価の見直しを主導し、2027年3月に報告する予定で、政府は家主、ホテル経営者、ビジネスオーナーの意見を求めてこのプロセスに反映するよう求めている。
先月、アンディ・バーナム氏は、英国のパブ、社交クラブ、ライブ音楽会場の営業料金を20％引き下げ、4月から施行すると発表した。
パブ団体は不釣り合いに高い料金請求に直面していると主張しているが、他の業界は料金制度の広範な改革を求めている。
英国ビール・パブ協会（BBPA）によると、今年最初の3カ月でイングランド、スコットランド、ウェールズ全域で161軒のパ​​ブが閉店し、これは約2,400人の雇用の喪失に相当する。
この業界が直面している問題の一つとして営業料金の上昇が挙げられているが、国民保険料や最低賃金の引き上げにより人件費が高騰しているという苦情もある。
財務長官のジェームズ・マレー氏は、新たな見直しでは「将来に向けてより公平なシステムを構築できるよう、評価額の再考」が検討されると述べた。
BBPAのエマ・マクラーキン最高経営責任者（CEO）は、「パブは何年もの間、不釣り合いに高い営業料金を支払ってきたため、ドアを開け続ける能力が損なわれてきた。そのため、この見直しは切実に必要とされており、大いに歓迎される」と述べた。
BBPAは、パブの料金評価は小売店とは異なると述べている。床面積だけで判断されるのではなく、「維持可能な公正な取引」と呼ばれる基準によって判断されます。つまり、パブの売上高が増加すると、料金請求も増加します。
シューダー氏は顧問会社ニューマークUKの元ビジネス金利政策責任者であり、彼のレビューは2029年の次回の金利再評価に反映されることになる。
中小企業連盟（FSB）のクレイグ・ボーモント氏は同氏の任命を歓迎し、同氏が「極めて重要な企業金利の専門知識を財務省に導入する」と述べた。
しかし、ボーモント氏は、政府はより広範なビジネス料金制度に対処し、中小企業向けの料金軽減基準を引き上げることにより、より多くの中小企業を免除する必要があると述べた。
英国小売業コンソーシアムのトム・アイアンサイド氏も見直しを歓迎したが、「小売業者のニーズが無視されないことが非常に重要だ」と述べた。
影の首相メル・ストライド卿は、今回の見直しは「労働党政権がすでに全力を尽くして潰そうとしている分野としては遅すぎる」と述べた。
同氏は、「事業所と雇用に対する増税と、雇用権法による雇用を破壊する規制により、多くの接客業が瀬戸際に立たされている」と述べた。
自由民主党財務省のデイジー・クーパー報道官は、ビジネス税率の改革は「長い間待ち望まれていた」としながらも、付加価値税の緊急引き下げと「特に接待に打撃を与えている」雇用税変更の撤回も求めた。
レイチェル・リーブス前首相の下で昨年、政府は新型コロナウイルスのパンデミック以来実施してきた企業向け料金の割引を縮小すると述べ、今年4月からは割引を一切行わないと発表した。
これにパブ施設の評価額が大幅に上方修正されることと相まって、家主は請求額が大幅に高くなる見通しとなった。
ホスピタリティ業界からの批判を受け、政府は2026年初めにパブや音楽会場の営業料金を15％引き下げた。
7月に発表された英国での20％割引は、既存のサポートに加えて適用される。
しかし、政府は、料金割引は「非常に大きな」ライブミュージック会場には適用されないとし、一部の事業者の間では、それらがパブに分類され、救済の対象となるかどうかについて混乱が生じていると述べた。
どの企業が対象となるかについての詳細は、秋のジョン・ヒーリー首相の最初の予算案で発表される予定だ。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8xnxy89gv7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T23:26:15+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7f38/live/0b0cedf0-9ed7-11f1-9253-c70a43a5293b.jpg",
    readTime: 4,
  },
  {
    id: "i-didn-t-speak-the-queen-s-english-why-52d21044",
    title: "'I didn't speak the Queen's English': Why people worry about their accents",
    titleJa: "「私は女王の英語を話せませんでした」：なぜ人々は自分のなまりを心配するのか",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `'I didn't speak the Queen's English': Why people worry about their accents
- Published
Growing up in Manchester, Mia Tanswell didn't give her accent much thought - until her first week at university in Loughborough.
"I knew people were going to notice that I was northern and that I didn't speak the 'Queen's English'," the 22-year-old says.
"Definitely in seminars I would sometimes feel like my accent would sound a bit less intellectual than other people, especially if I was the only northern student in the classroom."
She's not alone. Fresh polling seen by the BBC suggests many workers still see so-called "accent bias" as a problem.
The survey found one in 10 people in Britain feel anxious or self-conscious about their accent in high stakes professional settings such as speaking up in a business meeting.
The research, conducted by the organisation More in Common of more than 3,300 adults across England, Scotland and Wales, found accent-related anxiety in work settings like these was highest among Geordies - from the region around Newcastle - and those with an east London - or Cockney - accent (at 19%), followed by people with a Welsh accent (at 18%).
Around 5% of respondents believed their accent had cost them a promotion, pay rise or senior role. "Brummies" - people from Birmingham - were the most likely to feel this, at 13%.
Respondents with a West Country accent reported the highest rate of having their accent mocked or criticised by colleagues, at 15%, followed by 13% of those with a Geordie accent.
The poll was commissioned by Common Ground, an organisation which aims to promote social cohesion. Its founder, Lara Newman, has worked in construction, property and the built environment industry for more than 30 years, and says she changed her own accent to get ahead in the workplace.
"I am incredibly realistic about what would have happened had I gone to university or gone into the workplace with a strong west country accent," she says. "I felt like that was going to be an issue for me."
Common Ground aims to support people from disadvantaged backgrounds into work but she says one of the layers creating a barrier to them is accent.
"I think there is a problem in the sense that [an accent] implies a level of education or otherwise. It implies class," she says.
'I wish it was more Welsh'
Martha Powell, 24, from Newport in south Wales is proud of her accent.
"I love my accent, if anything I wish it was more Welsh," she says.
But she still fears people "make assumptions" based on her accent so at networking events she gravitates towards others with a Welsh accent.
"I wish I would be able to stand out a little bit more, but I think I adapt my accent depending on where I am in the country."
Softening an accent is common, the survey results suggest, with 13% of Britons polled admitting to changing the way they speak to sound more professional, with Cockneys and Scots more likely to do this.
A foreign, rather than a regional accent, can also be a barrier. When Benjaimin Aidomoan came to the UK four years ago from the Czech Republic aged 16, he didn't speak a word of English.
He picked up the language, but four years on says his accent has made job-hunting more difficult.
"You can just see on many people's faces, that the expression and the way they are looking at you and the way they are talking to you kind of changes," he says.
Benjaimin, who now works in a restaurant, believes most employers do look beyond accents.
"It's about who you are, how you present yourself, what is your attitude and how hard you're willing to work," he says.
'We don't judge'
Most employers would say that is at least their ambition, to treat applicants and employees equally, regardless of their accent.
Charlotte Davies, career expert at LinkedIn, says while there is still progress to be made "the direction of travel is encouraging".
"Hiring is increasingly about skills, not background or polish.
"Your accent is part of your story, and the workplaces getting this right, treat that as a strength, not something to smooth out," she says.
Sian Jackson, a partner at law firm Mills & Reeve, says her company has recently changed its approach to encourage more local hiring and a diversity of accents.
"We don't judge, we scrutinise based on capability beyond somebody's accent, or appearance. Like any other prejudice or bias it's about being conscious of it so you can then set it aside," she says.
"We feel we've come a long way as a firm, but we are behind nationally compared to things like gender, so there is more progress to be made on accents."`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c05q318501yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T23:25:44+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/81f3/live/e2c54a10-9d9e-11f1-b160-9b29341ab62f.jpg",
    readTime: 2,
  },
  {
    id: "why-students-are-being-paid-2-000-to-pla-87b7f86a",
    title: "Why students are being paid £2,000 to play computer games",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Why students are being paid £2,000 to play computer games
- Published
As parents across the country prepare to wave their children off to university, conversations about family finances and the cost of living are growing ever more frequent - and fervent.
Yet every year, millions of pounds worth of scholarships and bursary funding goes unclaimed by students - with many unaware the extra help exists.
So roll up the next generation of gamers, who this year can apply for as esports scholarship from the University of Roehampton - with more than 100 handed out so far.
But can the students balance their studies and their esports? And is the scholarship set to catch on?
Esports, meaning electronic sports, is the name for competitive video gaming.
It is different from standard video gaming as esports includes spectators, much like traditional sports.
Gamers compete against one another in high-stakes tournaments for cash prizes and trophies.
Do esports students do more than play games?
- Published22 June
What's the scholarship about?
Roehampton is offering esports scholarships to undergraduate and postgraduate students who show that they can balance academic progress and video-gaming excellence.
"This scholarship is about recognising talent in a field that has a growing popularity both around the world and among our students," University of Roehampton registrar Mark Ellul said.
Scholars are expected to compete in weekly university tournaments as well as representing the university at in-person events.
Roehampton requires minimum rankings in major games for the scholarship, but will consider applications from those close to the threshold who meet other criteria, such as having large followings on streaming platforms like Twitch.
Former esports scholar Cameron Dray found out about Roehampton through the esports scholarship. Inspired by similar initiatives at American universities, he looked into whether anything similar was on offer in the UK.
Initially, the university was offering just £1,500, but due to the team's performance and rise in popularity, the amount was raised to £2,000.
"This money was crucial to me as it gave me the opportunity to study in a very expensive city without the need for part-time work," Dray said.
"There were requirements that came alongside the scholarship, but none that were unexpected or not transparent when applying," he added.
What to know about student finance
Dray encouraged students to make use of every scholarship, bursary and opportunity available to them.
He said: "Many of these funds are available to more students than they realise, and everyone should be taking full advantage."
The average graduate in England leaves university with debts of more than £47,500. Scholarships such as Roehampton's can reduce student debt and provide additional financial support.
Thomas Cole, an esports player nicknamed Pac who specialises in the racing game Trackmania, said universities offering unique scholarships, including esports, encourages students academically by reducing the level of financial stress they might face.
"Uni students being paid to play a game alongside doing their studies, it's definitely cracking. If I had gone to uni, I would have loved that," he says.
"If it doesn't let the academic side suffer, then I think being offered something like that really spurs on people to be better in gaming," he says.
Tom Allingham, student money expert from the Save the Student personal finance site, regularly advises incoming first years to seek out scholarships and learn more about what their university offers.
"Unfortunately, I don't think there is enough awareness on scholarships," he said.
"There is a lot of funding that goes unclaimed because students don't know that they're eligible for it," he added.
Save the Student helps share various scholarships and bursaries on their website.
"What we try to get across is you can get extra funding for so many different reasons."
Related topics
- Published11 August`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cz647wlvg1do?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T23:23:55+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/3e70/live/c3634490-9c9c-11f1-a5a0-114ca9d4a1bc.jpg",
    readTime: 2,
  },
  {
    id: "treasury-secretary-to-announce-iran-sanc-d8e925d9",
    title: "Treasury Secretary to announce Iran sanctions as Tehran dismisses economic warfare threat",
    titleJa: "イラン政府が経済戦争の脅威を否定、財務長官がイラン制裁を発表へ",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Treasury Secretary Scott Bessent will hold a press conference Monday to announce sanctions against Iran that he described to CNBC as the greatest campaign of "coordinated economic isolation in the history of the world."
"At dawn begins an economic D-Day — the single greatest financial offensive ever marshalled against an adversary," Bessent said in an opinion piece he authored in The Financial Times on Sunday.
The Teasury Secretary told CNBC on Thursday that the U.S. will "collapse" the Islamic Republic with the "toughest sanctions in history."
The Trump administration demands that U.S. allies and the rest of the world stop doing business with Iran, Bessent said. The U.S. will use its "full might" against anyone who does not comply, he told CNBC.
"We are going to them and saying you are either with us or against us," Bessent told CNBC. "It is time for our allies and the rest of the world to make a decision, and we are going to squash the economy of this murderous regime."
Bessent's press conference comes after U.S. President Donald Trump said last week that the U.S. will target Iran with the "most crushing economic operation ever taken against any country."
Trump also threatened severe financial penalties against any nation that helps Iran evade sanctions, adding in a post on Truth Social that "this will be Economic Warfare and Isolation on an unprecedented scale."
Iran's Islamic Revolutionary Guard Corps has dismissed the Trump administration's threats, according to its state media. An IRGC spokesperson said Sunday that Iran has ways "to counter the adverse effects of the enemy's war" and that it can "easily establish economic relations with countries."
"The U.S. president says that he ordered an economic war and launched the most severe economic campaign against Iran. This amounts to an implicit admission of the enemy's humiliating defeat in the military arena," the IRGC spokesperson said, according to state media.
Iran is one of the most sanctioned countries in the world, said Helima Croft, head of global commodity strategy at RBC Capital Markets. It is unclear whether more economic pressure will change Tehran's behavior, Croft told CNBC in an interview Friday.
Iran seems to believe that it can outlast a Trump administration that wants the war to end quickly, she said. Tehran still has the ability to attack ships in the Strait of Hormuz and infrastructure in the Middle East, the analyst said.
"Iran still has significant disruptive capabilities," Croft said. "The question is how is this going to change with additional economic sanctions."
WATCH: Watch CNBC’s full interview with Treasury Secretary Scott Bessent`,
    bodyJa: `スコット・ベッセント財務長官は月曜日に記者会見を開き、CNBCに対し「世界史上最大の協調的経済孤立」キャンペーンであると述べた対イラン制裁を発表する予定だ。
ベッセント氏は日曜日のフィナンシャル・タイムズ紙に寄稿した論説の中で、「夜明けに経済のDデイが始まる。これは敵対者に対してこれまでに行われた単一最大の金融攻勢だ」と述べた。
財務省長官は木曜日、CNBCに対し、米国は「史上最も厳しい制裁」でイスラム共和国を「崩壊」させるだろうと語った。
ベッセント氏は、トランプ政権は米国の同盟国および世界の他の国々に対し、イランとの取引を停止するよう要求していると述べた。同氏はCNBCに対し、従わない者に対しては米国は「全力を尽くす」と語った。
ベッセント氏はCNBCに対し、「我々は彼らのところへ行って、あなた方が我々に賛成か反対かのどちらかだと言うつもりだ」と語った。 「我々の同盟国と世界の他の国々が決断を下す時が来た。我々はこの殺人政権の経済を粉砕するつもりだ。」
ベッセント氏の記者会見は、ドナルド・トランプ米大統領が先週、米国は「これまでにどの国に対しても行われた中で最も壊滅的な経済作戦」でイランを標的にするだろうと述べた後に行われた。
トランプ大統領はまた、イランの制裁回避を支援する国には厳しい経済制裁を科すと脅し、トゥルース・ソーシャルへの投稿で「これは前例のない規模の経済戦争と孤立になるだろう」と付け加えた。
国営メディアによると、イランイスラム革命防衛隊はトランプ政権の脅しを一蹴した。革命防衛隊の報道官は日曜日、イランには「敵の戦争の悪影響に対抗する」方法があり、「各国との経済関係を容易に確立できる」と述べた。
国営メディアによると、革命防衛隊の報道官は、「米国大統領は、経済戦争を命令し、イランに対して最も厳しい経済作戦を開始したと述べている。これは、軍事分野での敵の屈辱的な敗北を暗に認めたことに等しい」と述べた。
ＲＢＣキャピタル・マーケッツの世界商品戦略責任者ヘリマ・クロフト氏は、イランは世界で最も制裁を受けている国の一つだと述べた。クロフト氏は金曜のインタビューでCNBCに対し、さらなる経済圧力がイラン政府の行動を変えるかどうかは不明だと語った。
イランは、戦争の早期終結を望むトランプ政権よりもイランが存続できると信じているようだ、と同氏は述べた。同アナリストは、イラン政府は依然としてホルムズ海峡の船舶や中東のインフラを攻撃する能力を保有していると述べた。
「イランは依然として重大な破壊的能力を持っている」とクロフト氏は語った。 「問題は、追加の経済制裁でこの状況がどう変わるかだ。」
視聴: CNBC のスコット・ベッセント財務長官のインタビュー全文をご覧ください。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/23/treasury-secretary-bessent-iran-sanctions-press-conference.html",
    publishedAt: "2026-08-23T22:39:41+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "my-son-does-not-work-yet-pays-500-for-af-aaa7eab0",
    title: "My son does not work, yet pays $500 for Affordable Care Act health insurance. Is that fair?",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `“I see people who have a lot of money but little or no taxable income who still qualify for ACA Marketplace subsidies.”`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-son-does-not-work-yet-he-pays-500-for-aca-health-insurance-how-is-that-fair-92f578c4?mod=mw_rss_topstories",
    publishedAt: "2026-08-23T19:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-15414148",
    readTime: 2,
  },
  {
    id: "guinea-rubbish-landfill-collapse-kills-3-26dc9ac9",
    title: "Guinea rubbish landfill collapse kills 30",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Guinea rubbish landfill collapse kills 30
- Published
At least 30 people have been killed after a mound of rubbish at a major waste site collapsed on to nearby homes in Guinea's capital Conakry, the government has said.
Another 22 people were injured, including six seriously, in the city's Dar-es-Salam area.
"Significant" resources and personnel - including the military - have been deployed to search for survivors after the collapse at about 02:00 local time following heavy rain overnight, the government added in a statement.
One woman told local media her five children had died in the disaster. There are fears that the death toll will rise further.
Rescuers were later seen using excavators to comb through a mountain of scattered rubbish at the site as local residents gathered nearby.
Guinea's Prime Minister Mamadou Oury Bah visited the scene to assess the situation and oversee the search efforts.
Neighbourhood leader Lancine Sylla had earlier told the AFP news agency he feared there would be a heavy death toll.
"We have pulled out 18 bodies that were taken to the morgue," he said.
Another landslide at the site killed 10 people in 2017.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4g3g36z7p6o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T18:17:37+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e9ee/live/c5473e70-9f1b-11f1-b2a2-8945a27a2843.jpg",
    readTime: 2,
  },
  {
    id: "we-are-committed-christians-our-son-and-15c12426",
    title: "‘We are committed Christians’: Our son and daughter-in-law cut us off over politics. Should we change our $3 million will?",
    titleJa: "「私たちは献身的なクリスチャンです」: 私たちの息子と嫁は、政治を理由に私たちと絶縁しました。 300万ドルの遺言書を変更すべきでしょうか？",
    summaryJa: "「私たちは傷つき、混乱していますが、彼らが定めた境界線を尊重しようとも努めてきました。」",
    bodyOriginal: `“We are hurt and confused, but we have also tried to respect the boundaries they have established.”`,
    bodyJa: `「私たちは傷つき、混乱していますが、彼らが定めた境界線を尊重しようとも努めてきました。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/we-are-hurt-our-son-and-daughter-in-law-cut-off-contact-with-us-over-politics-should-we-change-our-3-million-will-f763b761?mod=mw_rss_topstories",
    publishedAt: "2026-08-23T18:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-01814240",
    readTime: 2,
  },
  {
    id: "democratic-house-leader-jeffries-meets-w-ec251bfe",
    title: "Democratic House leader Jeffries meets with Jared Kushner as midterms loom",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Democratic House leader Hakeem Jeffries met with President Donald Trump's son-in-law Jared Kushner in recent weeks, signalling people close to the president may be preparing for at least one chamber of Congress to flip to Democratic control as the midterm elections loom.
A person familiar with the meeting, who was granted anonymity to discuss the sensitive matter, confirmed the two men had met. The New York Times first reported the detente, which comes as Democrats and Republicans publicly battle for control of Congress ahead of November.
In a statement to CNBC, Jeffries did not directly comment on the meeting with Kushner but said in "every conversation that we have with the Trump administration, we will continue to make it explicitly clear that the affordability crisis is not a hoax and nothing short of transformational policy change is acceptable."
Kushner, who was one of Trump's senior advisors during his first term, did not take on a government role when his father-in-law was reelected in 2024. However, he has emerged as a key player in the president's efforts across the globe as a negotiator and outside advisor.
The White House did not immediately comment on the meeting.
The New York Times reported that the meeting was a "catch-up" for the pair, who worked together on various issues during the first Trump administration. The paper also reported that Kushner suggested Jeffries meet with White House Chief of Staff Susie Wiles, which the person familiar with the meeting confirmed.
Kushner and Jeffries also reportedly discussed housing, immigration and affordability as potential areas of common ground, the Times reported.
In his statement, Jeffries suggested Democrats may be open to working with Republicans if they win the majority, but only on their terms.
"To stop the madness, we have repeatedly made clear that an extremist approach will not work and will be met with forceful opposition. The American people want bold change and that's what House Democrats will deliver," Jeffries said. "We are fighting for an affordable America. The question is whether Republicans will join us."
The timing of the meeting suggests that some in the president's orbit are preparing for the GOP to lose its near total control of Washington come November. The midterms are less than three months away with Democrats leading Republicans in the generic ballot by more than six points on average.
Jeffries, who has served as minority leader since 2023, is likely to become Speaker of the House if Democrats prevail in the chamber. Democrats are widely expected to launch myriad investigations into the Trump White House and its associates in the private sector, including Kushner, if they win.
Democrats winning control of one or both chambers of Congress would also effectively lock up large legislative pushes that are not bipartisan, and could make it more difficult to raise the debt ceiling next year if it is not raised this year.
House Speaker Mike Johnson, R-La., told Fox News on Sunday that Kushner is a "smart guy" who will "hedge his bets." But Johnson sought to express confidence that Republicans will hold their razor-thin majority after November.
"But I'm telling you what, you better not bet against the House Republicans," Johnson said. "Our base is going to turn out, and we're going to hold the House Republican majority."`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/23/democratic-leader-jeffries-meets-with-jared-kushner-as-midterms-loom.html",
    publishedAt: "2026-08-23T17:58:06+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "france-links-sharp-rise-in-drownings-to-361f1c6b",
    title: "France links sharp rise in drownings to heatwaves",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `France links sharp rise in drownings to heatwaves
- Published
France has seen 301 drownings since 19 June, a government minister has said, linking the sharp rise in deaths compared to last year to the prolonged heatwaves.
Sports and Youth Minister Marina Ferrari told France Inter radio the number of deaths - a 14% hike on 2025 - was a "tragic toll".
France, Spain and Italy have been hit by heatwaves, which have triggered massive wildfires that scorched thousands of hectares of land.
Ferrari said people have been taking risks by going into the water, adding: "Many deadly accidents have occurred in areas that are not authorised or supervised for swimming."
She said a number of the drownings were recorded in "open water, in canals for example".
Ferrari said the government was working with regional authorities "to improve swimming areas and make things safer".
Speaking on Friday, she added that "many drownings, particularly among the elderly, occurred in individual pools".
The minister said that sudden immersion in cold water on a hot day could cause shock, and in some cases "people can also exceed their physical capabilities".
In June, Ferrari warned that too many people were trying to cool off in rivers and canals without necessarily taking the risks into account.
Climate change is driving up temperatures around the world - but particularly in Europe.
It is the fastest warming continent, heating up twice as fast as the global average, according to the Copernicus climate service., external
The June heatwave saw a nuclear power plant in southwest France temporarily shut down because water temperatures in the River Garonne topped 28C. Under French laws, water used to cool the reactors at the Golfech plant must not exceed that temperature.
Some monuments like the Eiffel Tower also decided to close early because of the high temperatures in Paris during the June heatwave.
The dry conditions also saw wildfires spread across France, with the Gironde, around the city of Bordeaux, in the south-west of the country being the worse affected area, with more than 200,000 people being forced from their homes in late July.
France has logged 7,300 excess deaths between late May and 22 July, according to provisional figures from the public health authorities.
Related topics
- Published15 August`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cqlxlp4lx9yo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T17:39:33+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/46e9/live/b1ac6f30-9f1a-11f1-b2a2-8945a27a2843.jpg",
    readTime: 2,
  },
  {
    id: "nvidia-is-the-beating-heart-of-the-ai-bo-9d0f70a0",
    title: "Nvidia is the beating heart of the AI boom and the stock market — which sets up a big test",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Nvidia is due to report earnings on Wednesday, and “a very broad universe of companies” is tied to the themes that the chip giant represents.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/nvidia-is-the-beating-heart-of-the-ai-boom-and-the-stock-market-which-sets-up-a-big-test-bed36f98?mod=mw_rss_topstories",
    publishedAt: "2026-08-23T13:00:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-09516702",
    readTime: 2,
  },
  {
    id: "zelensky-should-be-asked-what-he-knew-ab-41ab9b37",
    title: "Zelensky should be asked what he knew about government corruption, sacked minister tells BBC",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Zelensky should be asked what he knew about government corruption, sacked minister tells BBC
- Published
Ukrainian President Volodymyr Zelensky should be asked questions about corruption in his government, his sacked defence minister Mykhailo Fedorov has told the BBC.
Fedorov, a popular minister who modernised the military and pioneered drone warfare, was fired last month after reportedly falling out with the head of Ukraine's armed forces.
He told the BBC a money laundering investigation announced last week meant Zelensky should be asked about his awareness of potential corruption in his inner circle.
But he said he had not himself seen the president engage in any corrupt activity.
"In all the time that I worked with him, not a single time have I received from him any task or assignment that would go against law or my sense of integrity", Federov said.
The former minister also repeated his appeal for elections to be held in Ukraine, days after releasing a video where he called for a wartime vote.
"Democracy should not be the hostage of Putin", he said - but stopped short of declaring his own political ambitions.
There were angry protests over Fedorov's sacking but his support dwindled and demonstrations ended on Wednesday, after his replacement was confirmed. His call for a vote has been widely rejected.
Asked whether he missed his old job, the 35-year-old replied "No", citing the relentless stress of managing Ukraine's war with Russia while transforming its defence ministry.
Ukraine has been under martial law since Russia's full-scale invasion in 2022, meaning elections are suspended. Zelensky's five-year presidential term ended in May 2024.
But Fedorov said it was his "moral right" to start the conversation about elections.
"We should not be afraid of discussing it. That's what democracy is all about. If I cannot share my ideas and be open about them with my own society, then what are we fighting for?"
If elections were never held, he said, "then we are no longer a democracy".
Sacked Ukrainian defence minister calls for presidential election
- Published3 days ago
In his earlier video statement Fedorov had argued that "people cannot endlessly live in a state where they do not understand why certain decisions are made".
He shied away from criticising the president directly and declined to answer whether he backs Zelensky to win any election.
Zelensky said he believed wartime elections would currently be too dangerous for Ukraine in remarks released on Sunday.
"I believe that in a war like this, elections as such are a huge risk," he said. "Elections right now are a tsunami for the country that will split Ukraine."
Experts have cited a number of obstacles to holding such a vote, including how soldiers, millions of Ukrainian refugees and people from occupied territories would vote, as well as disinformation threats from Russia.
Fedorov's video highlighting political corruption last week came the day before a money laundering investigation was announced into lawmakers and bankers.
Ukraine's anti-corruption bureau said it had uncovered a scheme to misappropriate more than $3m (£2.2m) in Ukrainian currency to pay bail for a former energy minister accused of money laundering.
A senior official in Zelensky's office, alleged to be involved, was sacked.
Fedorov said there were questions about the president's awareness of potential corruption in his inner circle.
"Let him answer this question... I believe that he's ready for such questions. It's his responsibility to tell us all whether he was aware of all that or not... I don't want to make any assumptions."
A spokesperson for the president had earlier told BBC News: "Since the former minister was part of every government since 2019, it's strange that he phrases it as though these were somehow different governments without him. As everyone remembers, we didn't hear any strong statements from him back then."
Fedorov claimed he had rooted out elements of corruption from defence procurement but warned it was still affecting Ukraine's frontline capacity.
The former minister said he'd had no contact with the president for "a couple of weeks", and had no evidence the president was personally corrupt.
"In all the time that I worked with him, not a single time have I received from him any task or assignment that would go against law or my sense of integrity. So that's my personal experience with him."
As defence minister and previously digital transformation minister, Fedorov is credited with innovating to replace soldiers with an "army of drones", saving lives on the battlefield and enabling long-range Ukrainian strikes on Russian military targets, oil refineries and distribution warehouses - thousands of kilometres over the border.
He said he would continue to promote new ways to fight the war and confirmed a visit to the United States in the coming weeks, where he hopes to meet Elon Musk.
The billionaire businessman's Starlink satellite communications system has been key in Ukraine's success. Fedorov aims to convince Musk to extend the technology into Russian airspace to assist Ukrainian strikes, without the Kremlin benefiting from access.
"The best tech companies in the world are supporting us and they will be investing in our victory, in ending this war. And we need to stay in touch with them regardless of my position. I have a previous successful track record of working with them and I need to stay in touch with them for my country," he said.
Fedorov criticised bureaucracy in the UK and other countries supporting Ukraine for delays in supplying weapons.
The UK is a longstanding supporter of Ukraine, spending £16bn supplying weapons since the war began. It was confirmed last week that British-made drones have been used to attack Russian targets.
Fedorov said he was grateful for British support but blamed "bureaucracy and red tape" for delays in receiving promised equipment.
"Governments are lagging behind the realities on the ground. It's not only the issue for UK, but for other countries as well that announce some assistance and we are not getting it until the end of the year."
Fedorov urged direct funding of the latest Ukrainian drone production, in place of outdated skills and equipment from other nations: "We don't need repairs of tanks when we no longer use tanks."
He said timely deliveries would help save not just Ukrainian lives.
"Unfortunately, our losses, our blood, our military experience is beneficial to all of you guys. You can get this experience for all the assistance that you give us."
Fedorov denied having immediate political ambitions but didn't rule out a future run for president.
"It will all depend on how soon we'll be able to relaunch this democratic election process, [...] how much energy I would have, whether I will preserve my team, whether I will be able to respond to the question myself, whether I can handle this position of the president or not.
"What's more important, is whether people will tell me, yeah, we can trust you handling that position."
Correction 23 August: This article originally said Mykhailo Fedorov's video highlighting political corruption was released the same day a money laundering investigation was announced into lawmakers and bankers. It has been corrected to reflect that the video was released the day before the announcement.
Related topics
- Published3 days ago`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwy4ypzvd7po?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T12:56:43+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f1da/live/9dcc87a0-9ecc-11f1-a6c1-71ec82f18bdc.jpg",
    readTime: 2,
  },
  {
    id: "dr-congo-and-m23-rebels-agree-roadmap-fo-50228a74",
    title: "DR Congo and M23 rebels agree roadmap for peace talks",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `DR Congo and M23 rebels agree roadmap for peace talks
- Published
The Democratic Republic of Congo government and the Rwanda-backed M23 rebel group have agreed a roadmap for peace talks.
In a joint statement after five days of talks in Switzerland, they said they had pledged to "pursue negotiations towards comprehensive peace and conflict resolution" and set up a mechanism to monitor the ceasefire.
The roadmap sets out a timeline for talks under a US-brokered peace framework which they signed in 2025 - only for fighting to then continue in eastern DR Congo, which has been engulfed in conflict for decades.
But disagreements remain over issues including sanctions against M23, the release of detainees and the timing of political reforms.
The latest negotiations were attended by M23, the government of DR Congo, Qatar, the US, the Republic of Togo, the African Union Commission and host Switzerland.
"The parties agreed to establish a mechanism tasked with reviewing progress and addressing challenges in implementation of obligations and commitments under the Doha Framework Agreement," the statement added, referring to the 2025 deal.
They developed "sequenced steps and timelines" while also committing to "flexibility and creativity", the statement said.
They also agreed to implement a mechanism to monitor ceasefire violations. Its secretariat has been established and the first verification mission is due to take place on Monday in Minembwe, an area of South Kivu affected by fighting.
Fighting has continued in North and South Kivu despite repeated ceasefire commitments, with the government and M23 accusing each other of violations.
DR Congo and M23 rebels sign framework for peace in Qatar
- Published15 November 2025
The conflict is closely linked to tensions between DR Congo and neighbouring Rwanda.
Rwanda says DR Congo has failed to dismantle the Democratic Forces for the Liberation of Rwanda (FDLR), an armed group that Kigali considers a security threat.
DR Congo denies supporting the FDLR and accuses Rwanda of backing M23 with troops and weapons.
In January 2025 the conflict got worse when the M23 seized parts of eastern DR Congo, including Goma and two airports.
Thousands of people have been killed and hundreds of thousands of civilians have been forced from their homes during the decades of fighting.
Eastern DR Congo is rich in coltan and other resources vital to the global electronics industries.
Rwanda has always denied supporting the M23, despite overwhelming evidence. It has always said its military presence in the region is defensive - and only there to counter threats posed by other armed groups.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cre4e1q3wewo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T12:52:08+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b82b/live/77503d50-9ee6-11f1-9797-eb684645fdf7.jpg",
    readTime: 2,
  },
  {
    id: "crosscountry-cancels-almost-all-uk-servi-c984ffc0",
    title: "CrossCountry cancels 'almost all' UK services after power cut",
    titleJa: "クロスカントリー、停電を受けて英国の「ほぼすべて」のサービスを中止",
    summaryJa: "クロスカントリー、停電を受けて英国の「ほぼすべて」のサービスを中止- 公開されました",
    bodyOriginal: `CrossCountry cancels 'almost all' UK services after power cut
- Published
Trains across the UK have been cancelled by rail operator CrossCountry after a power cut at its control centre.
The power outage started in Birmingham on Saturday and as a result, many of the systems used to manage the railway are unavailable, the operator said.
Cancellations are affecting most routes, from Glasgow to Penzance and Leeds to Manchester, until further notice because of "significant and unforeseen disruption", said CrossCountry, ranked Britain's worst rail operator, in June.
Transport Secretary Heidi Alexander said she was "concerned to hear about a power outage" and had asked publicly owned operators to provide "extra services where possible".
"We've also sent Network Rail power teams who are onsite and working to restore power and systems as soon as possible," she added.
Passengers are venting their anger on social media, saying the situation is the "worst case scenario" at the weekend, with some taking coaches before continuing their train journey with another operator.
Major routes between Manchester and Birmingham, which passes through Stoke-on-Trent, Coventry and Wolverhampton, along with routes from Leeds to York, Cheltenham to Cardiff and Glasgow to Edinburgh, are all affected.
Fans travelling to football fixtures have been warned that services to and from Manchester, Liverpool and Newcastle might be "extremely busy".
One passenger, posting on X, said: "A massive thank you to Cross Country Trains for cancelling my train this morning to Birmingham. You are truly not fit for service. You have also cancelled my train coming back but that is immaterial. Useless. Utterly useless."
Reese Proctor described the cancellations as "frustrating and unacceptable" as he tried to get to Manchester's Etihad Stadium in time for a 14:00 BST kick-off against Bournemouth.
He had hoped to get a train from Reading to Manchester, but instead resorted to driving more than 100 miles to his friend's house in Leicester before driving on to the stadium.
The 22-year-old told BBC Newsbeat the drive had added an extra two hours to his journey, leaving him "fuming".
"If I couldn't drive, or have [my friend] to drive... I wouldn't have been able to go to the match. That would have been a waste of a match ticket," he said.
Services to Plymouth and Penzance are also disrupted with customers relying on Great Western Railway operators as a replacement.
"We are working closely with relevant partners and will provide further updates as soon as possible," a CrossCountry spokesperson said.
At New Street station, the barriers to all platforms are open and there are regular announcements to passengers about the disruption.
The digital boards in the concourse are carrying a Special Notice to warn passengers of the cancellation to CrossCountry services.
While the operator usually calls at more than 100 stations, it said that the only route expecting a "near-normal" service was between Peterborough, Cambridge and Stansted Airport.
The company apologised to passengers affected and said tickets were being accepted by other operators.
Customers are entitled to Delay Repay compensation if their train is delayed by 30 minutes or more, while those who choose not to travel can claim a refund for their journey.
National Rail said affected customers could use London Underground services at no extra cost and also West Midlands Metro services between Wolverhampton and Birmingham New Street.
Train tickets purchased for travel on CrossCountry services on Sunday will be valid for travel until Wednesday, it added.
The organisation told football fans: "You may need to stand for part or all of your journey.
"If you require any assistance, please speak with a member of staff."
Get in touch
Have you been affected by the disruption?
Follow BBC Birmingham on BBC Sounds, Facebook, external, X, external and Instagram, external.
- Published18 June
- Published29 April
- Published11 February`,
    bodyJa: `クロスカントリー、停電を受けて英国の「ほぼすべて」のサービスを中止
- 公開されました
鉄道運営会社クロスカントリーは、コントロールセンターの停電を受けて英国全土の列車を運休した。
停電は土曜日にバーミンガムで始まり、その結果、鉄道の管理に使用されているシステムの多くが利用できなくなったと運営者は述べた。
英国最悪の鉄道会社にランクされているクロスカントリーは6月、「予期せぬ重大な混乱」のため、グラスゴーからペンザンス、リーズからマンチェスターに至るほとんどの路線に欠航が影響しており、追って通知があると発表した。
ハイジ・アレクサンダー運輸長官は、「停電のことを聞いて心配」し、公営事業者に「可能な限り追加のサービス」を提供するよう要請したと述べた。
「私たちはまた、オンサイトで電力とシステムをできるだけ早く復旧させるために取り組んでいるネットワークレール電力チームも派遣しました」と彼女は付け加えた。
乗客らはソーシャルメディアで怒りを爆発させ、この状況は週末の「最悪のシナリオ」であり、バスに乗って別の運行会社で列車の旅を続ける人もいると述べた。
ストーク・オン・トレント、コベントリー、ウルヴァーハンプトンを経由するマンチェスターとバーミンガム間の主要路線と、リーズ～ヨーク、チェルトナム～カーディフ、グラスゴー～エディンバラの路線はすべて影響を受ける。
サッカーの試合会場へ向かうファンには、マンチェスター、リバプール、ニューカッスル行きの便が「非常に混む」可能性があると警告されている。
ある乗客はXに投稿し、「今朝、バーミンガム行きの列車をキャンセルしてくださったクロスカントリー・トレイン社に多大な感謝を申し上げます。あなたは本当に勤務に適さない。帰りの列車もキャンセルしていただきましたが、それは重要ではありません。役に立たない。全く役に立たない。」と述べた。
リース・プロクター監督は、ボーンマス戦の英国標準時間14時キックオフに間に合うようにマンチェスターのエティハド・スタジアムに到着しようとしていた際に、今回のキャンセルは「もどかしく、受け入れがたい」と述べた。
彼はレディングからマンチェスターまで電車で行くことを望んでいましたが、代わりにレスターの友人の家まで160マイル以上車で向かい、その後スタジアムへ向かいました。
22歳の彼はBBCニュースビートに対し、ドライブのせいで移動時間がさらに2時間長くなり、「イライラしていた」と語った。
「もし私が運転できなかったら、あるいは（友人に）運転してもらっていたら…試合には行けなかったでしょう。それは試合のチケットの無駄だったでしょう」と彼は語った。
プリマスとペンザンスへのサービスも中断されており、顧客は代わりにグレート・ウェスタン鉄道の運営会社に頼っている。
「我々は関連パートナーと緊密に連携しており、できるだけ早くさらなる最新情報を提供する」とクロスカントリーの広報担当者は述べた。
ニューストリート駅では、すべてのプラットフォームの柵が開いており、定期的に乗客に混乱についてアナウンスが行われている。
コンコースのデジタルボードには、クロスカントリーサービスのキャンセルを乗客に警告する特別な通知が掲示されています。
同社は通常、100以上の駅に電話をかけているが、「ほぼ通常通り」のサービスが期待できる唯一の路線はピーターバラ、ケンブリッジ、スタンステッド空港間だと述べた。
同社は影響を受けた乗客に謝罪し、チケットは他の航空会社でも受け付けていると述べた。
顧客は、列車が 30 分以上遅延した場合に遅延補償金を受け取る権利があり、旅行しないことを選択した顧客は、旅行代金の払い戻しを請求することができます。
国鉄は、影響を受けた顧客は追加料金なしでロンドン地下鉄サービスを利用できるほか、ウルヴァーハンプトンとバーミンガム・ニューストリート間のウェスト・ミッドランズ地下鉄サービスも利用できると述べた。
日曜日にクロスカントリーサービスでの旅行のために購入した鉄道チケットは水曜日まで有効であると付け加えた。
同団体はサッカーファンに「旅の一部または全部で立ち上がらなければならないかもしれない。
「お手伝いが必要な場合はスタッフまでお声がけください。」
連絡する
混乱の影響を受けましたか?
BBC バーミンガムを BBC Sounds、Facebook (外部)、X (外部)、Instagram (外部) でフォローしてください。
- 6 月 18 日公開
- 4 月 29 日発行
- 2 月 11 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy9w9y0lz5go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T12:38:01+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/79f9/live/840c8b30-9ee5-11f1-a291-b542ee92de7c.jpg",
    readTime: 5,
  },
  {
    id: "after-10-years-at-united-ceo-scott-kirby-33129da4",
    title: "After 10 years at United, CEO Scott Kirby is thinking big about the future of his airline from JFK to AI",
    titleJa: "ユナイテッドで10年間勤務した後、CEOのスコット・カービーはJFKからAIへの航空会社の将来について真剣に考えている",
    summaryJa: "ユナイテッド航空の最高経営責任者（CEO）スコット・カービー氏はCNBCのインタビューで、自身が提案する航空会社のメガディール、AI、航空会社の将来について広範なインタビューに応じた。",
    bodyOriginal: `NEWARK, New Jersey — Scott Kirby says he doesn't believe in revenge.
"Everyone thinks I do, but no, I don't," said the United Airlines CEO, whom American Airlines fired 10 years ago, when he was president of that carrier. "I compete aggressively."
United announced it had hired him as president on Aug. 29, 2016, a blink after American disclosed his departure. Now, Kirby is running the second-most profitable U.S. airline after Delta Air Lines. And his former employer, American, is a distant third of the big, more-than-century-old, U.S. carriers, though it's working to ramp up revenue through a host of upgrades, including bringing back seatback screens.
Kirby floated the idea of megamergers with both Delta and American in the past year, combinations that would bring together some of the biggest airlines in the world. He's so far been rebuffed, and antitrust experts were skeptical about the possibility.
He's thinking bigger than he has before as the industry faces ever-higher costs, limited airport infrastructure and a population that's ready to shell out more to fly — often in the expensive seats — to the next "it" destination.
Eyeing JFK from EWR
CNBC rode with Kirby from the west side of Midtown Manhattan to United's hub at Newark Liberty International Airport in New Jersey earlier this month, where the 59-year-old executive outlined his vision for the carrier before his flight.
Kirby said he wants to expand United's footprint at New York's John F. Kennedy International Airport after his airline returns to the congested airport through a partnership with American's former partner, JetBlue Airways, as early as next year.
"We got a bunch of irons in the fire to try to find ways to do it," he said, adding that United could at some point acquire slots from carriers that aren't flying profitable routes out of the airport.
And while United already holds the crown among U.S. airlines for international flights, which are in high demand among U.S. tourists, he wants to expand the carrier's footprint abroad even more. This week, United is set to announce a host of new international routes, the carrier's annual splash that has previously included new dots on the map like Ulaanbaatar, Mongolia and Bilbao, Spain.
United has been touting its international expansion for years, saying its vast network acts as a driver for customer loyalty and sign-ups for lucrative travel rewards credit cards. Its route announcements typically come with much fanfare.
Kirby, a three-decade airline executive, is the United States' most outspoken airline CEO. His team knows this, and they've stopped telling him well in advance what will be on tap for the next batch of Instagram-friendly routes.
"They no longer tell me in advance because they're afraid I'll spill the beans, which is fair," he said.
While Delta has still had a lead on profits, CEO Ed Bastian doesn't want to give up ground to United. It is starting to expand flights over the Pacific, a United stronghold.
"People say, 'Well, when is it someone else's turn?' Well, I'm never going to let that be someone else's turn. It's always our turn," Bastian told students at Columbia Business School in April 2024. "We always get a chance to prove it every single day. ... Yesterday really doesn't matter. It's only today and tomorrow that you can think about."
1 minute break
It's been a decade since Kirby started at United. He joined the airline in August 2016 after he was let go by American when he was president and didn't have a path to eventually becoming CEO.
United dropped a securities filing just after American disclosed Kirby's departure, saying he would be taking the president role at the Chicago airline. American promoted then-Chief Operating Officer Robert Isom to president that day, Kirby's old role. Isom was named American's next CEO in late 2021.
"I joke that most people take a few weeks, a couple months between jobs. I took 60 seconds," Kirby said.
United promoted Kirby to CEO from president in May 2020, while the industry was reeling from Covid, its worst-ever crisis.
The executive ranks at the tops of United and American trace their roots back to America West and other airlines, before a wave of mergers over the past two decades left four carriers holding more than three-quarters of U.S. flight capacity.
"One of the things also I learned at American: There's only so much change you can make as the No. 2," he said. "You can push too hard and you get fired."
United was in the midst of upgrading its cabins when Kirby joined in 2016, including with its highest-end Polaris pod seats for long-haul business class. But he said his first order of business was going through money-losing routes with a highlighter to figure out what was working and what wasn't.
The company considered closing its bases at Los Angeles International Airport and Washington Dulles International Airport in Virginia. Kirby said he stopped that idea, and both stayed open.
The airports are critical for United. LAX is one of the airline's most important hubs, though no carrier has a handle on that airport like they do others. And Kirby took a day trip from his son's soccer camp in Brazil last month to fly up to meet with President Donald Trump to unveil a $22.5 billion revamp of Dulles in the Oval Office.
AI, mergers and the future of travel
Stock analysts and legal experts were highly skeptical about a merger between United and one of the other U.S. giants.
People familiar with the matter said Kirby approached Delta but was turned down, as The Wall Street Journal first reported last month. The people spoke on the condition of anonymity to discuss the talks. Delta declined to comment. The carrier's president, Peter Carter, told CNBC at an industry conference in June that he doesn't see a merger or acquisition in Delta's future.
American, meanwhile, publicly rejected a merger offer from United this spring.
"At the end of the day, we spend time looking at things that have a chance of happening. We don't spend a lot of time pursuing impossibilities," Isom told CNBC in an interview in late June.
Kirby told CNBC that he hasn't changed his stance and he's not interested in acquiring a smaller airline, like JetBlue. "That's still the case," he said.
"Everything I say would require a willing partner," Kirby said.
When asked about antitrust concerns and likely pushback from state attorneys general, he said, "All of the objections are ... based on a premise that the airline industry is a commodity."
And Kirby said the industry has since evolved and that Delta and United have differentiated themselves, with their routes, onboard cabins and other products.
He said he wants United to grow in South America and in the Southeast U.S., but there's a lack of places to build out new hubs that make sense.
"Those are two places that are holes for United that are hard to fix on a stand-alone basis," Kirby said.
The best place for serving South America is Miami International Airport, he added. American had a more than 60% share of passenger enplanements in the 2025 fiscal year, according to airport data.
Putting mergers aside, Kirby said artificial intelligence tools for both employees and customers will make traveling easier and improve reliability, a tall order for any airline that is susceptible to weather, constrained airports and a host of other daily surprises from mechanical problems.
He wants delays expressed in clear English to customers.
"I firmly believe in no excuses, and so we don't make excuses," he said.
Even still, in the first half of the year, United ranked behind Delta and Alaska Airlines, which recently merged with Hawaiian Airlines, for on-time arrivals, according to the Transportation Department.
Kirby said outside factors or outright crises will always challenge the industry and said he is focused on the long-term future of the airline.
"Our employees often ask me like, 'What keeps you awake at night,' and I tell them, 'nothing,'" he said. "My job is to set the company up so none of you ever have to have a sleepless night worrying about your jobs."
He said his goal is to never have another furlough at the airline.
When asked if he would retire eventually, Kirby said, "I hope I will know when to retire and do it gracefully with a great transition with great people."`,
    bodyJa: `ニュージャージー州ニューアーク — スコット・カービーは復讐を信じていないと言う。
「誰もが私がそうだと思っているが、いや、私はそうではない」と、10年前にアメリカン航空が社長だったときに解雇されたユナイテッド航空のCEOは語った。 「私は積極的に競争します。」
アメリカン航空が同氏の辞任を明らかにした直後、ユナイテッド航空は2016年8月29日に同氏を社長として採用したと発表した。現在、カービーはデルタ航空に次いで米国で2番目に収益性の高い航空会社を経営している。そして、彼の元雇用主であるアメリカン航空は、100年以上の歴史を持つ米国の大手航空会社の3分の1に遠く及ばないが、シートバックスクリーンの復活を含む多くのアップグレードを通じて収益の増加に取り組んでいる。
カービー氏は昨年、デルタ航空とアメリカン航空の両社との巨大合併、つまり世界最大の航空会社数社を統合するというアイデアを浮上させた。同氏はこれまでのところ拒否されており、独占禁止法の専門家らはその可能性に懐疑的だった。
業界はかつてないほどのコスト上昇、限られた空港インフラ、そして次の「IT」目的地への飛行機（多くの場合、高価な座席に座る）のために、より多くのお金を払う準備ができている人口に直面しているため、彼は以前よりも大きく考えています。
EWRからJFKに注目
CNBCは今月初め、マンハッタンのミッドタウン西側からユナイテッドの拠点であるニュージャージー州のニューアーク・リバティー国際空港までカービー氏とともに同乗し、そこで59歳の幹部は出発前に航空会社に対する自身のビジョンを語った。
カービー氏は、ユナイテッド航空が来年にもアメリカン航空の元パートナーであるジェットブルー航空との提携を通じて混雑した空港に復帰した後、ニューヨークのジョン・F・ケネディ国際空港でのユナイテッド航空の拠点を拡大したいと述べた。
同氏は、「我々はその方法を見つけるために、かなりの努力をした」と述べ、ユナイテッド航空は、空港からの収益性の高い路線を運航していない航空会社から、ある時点で発着枠を獲得する可能性があると付け加えた。
また、ユナイテッド航空は米国人観光客の間で需要が高い国際線で米国の航空会社の中ですでに王座を握っているが、同氏は同航空会社の海外展開をさらに拡大したいと考えている。今週、ユナイテッド航空は多数の新しい国際線を発表する予定で、これまでモンゴルのウランバートルやスペインのビルバオなど地図上に新たな点を加えてきた航空会社の毎年恒例の目玉である。
ユナイテッドは何年も国際展開を宣伝しており、その広大なネットワークが顧客ロイヤルティと有利な旅行特典クレジットカードへの登録を促進する役割を果たしていると述べている。そのルートの発表は通常、大々的に宣伝されます。
カービー氏は航空会社の役員を 30 年務め、米国で最も率直な航空会社の CEO です。彼のチームはこれを知っており、インスタグラム向けのルートの次のバッチで何が準備されるかを事前に彼に伝えるのをやめました。
「豆をこぼしてしまうのが怖いので、彼らはもう事前に私に教えてくれません。それは当然です」と彼は言う。
デルタ航空は依然として利益面でリードを保っているが、最高経営責任者（CEO）のエド・バスティアン氏はユナイテッド航空に地位を譲ることを望んでいない。ユナイテッドの本拠地である太平洋への便を拡大し始めている。
「人々はこう言います、『それで、いつ他の人の番ですか？』まあ、私はそれを他の人の番にするつもりはありません。バスティアン氏は2024年4月、コロンビア・ビジネス・スクールで学生たちにこう語った。「私たちは常にそれを証明するチャンスを毎日得ている。 …昨日のことは本当に関係ありません。考えられるのは今日と明日だけだ。」
1分間の休憩
カービーがユナイテッドに入社してから10年が経ちました。同氏は社長時代にアメリカン航空から解雇され、最終的にCEOになる道がなかったため、2016年8月に同社に入社した。
ユナイテッド航空は、アメリカン航空がカービー氏の退職を明らかにし、同氏がシカゴ航空の社長に就任すると発表した直後に、有価証券届出書を取り下げた。アメリカン航空は同日、当時の最高執行責任者ロバート・アイソム氏を社長に昇進させ、これはカービー氏のかつての役割だった。アイソム氏は2021年後半にアメリカンの次期CEOに指名された。
「冗談ですが、ほとんどの人は次の仕事までに数週間、数カ月かかるそうです。私は60秒かかりました」とカービーさんは語った。
業界が史上最悪の危機である新型コロナウイルスに動揺する中、ユナイテッドは2020年5月にカービーを社長からCEOに昇格させた。
ユナイテッド航空とアメリカン航空のトップに位置するこの幹部のルーツは、過去20年間にわたる合併の波により4社の航空会社が米国の航空輸送能力の4分の3以上を保有するまで、アメリカ・ウェスト航空やその他の航空会社にルーツを遡る。
「私がアメリカン大学で学んだことの一つは、ナンバー2としてできる変化には限界があるということだ」と彼は語った。 「頑張りすぎるとクビになるかもしれない。」
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/23/united-airlines-ceo-scott-kirby.html",
    publishedAt: "2026-08-23T12:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "wells-fargo-and-citigroup-have-room-to-b-6549055a",
    title: "Wells Fargo and Citigroup have room to buy a big bank. These 5 regionals fit the bill",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Walk the halls of any major banking conference or listen in on a quarterly earnings call, and one topic keeps coming up: With the window for mergers wide open under the Trump administration, who will take a swing?
After years on the sidelines because of regulatory restrictions, large banks can once again contemplate buying other lenders, even a $100 billion-plus-asset regional bank.
While JPMorgan Chase and Bank of America are barred from such a deal because they already have more than 10% of national deposits, there are two megabanks that could pursue a large acquisition: Citigroup and Wells Fargo. The nation's third- and fourth-largest banks have enough room under the national deposits cap to pursue a hefty regional bank, according to investment bankers, consultants and investors.
"Two years ago, it was impossible for a bank of that size to get approval to acquire almost anything," said Brian Graham, co-founder of advisory firm Klaros. "Now, it's possible they can get a deal done. I'd be shocked if they aren't exploring it."
After spending much of the last decade in a penalty box — Citigroup via consent orders and Wells Fargo capped by growth restrictions — both institutions have cleared key regulatory hurdles and are in growth mode.
A large acquisition — like the ones that rival JPMorgan pulled off during the crises of 2023 and 2008 — would give Wells Fargo or Citigroup thousands of branches and billions of dollars in deposits.
For Citigroup, which has only about 650 U.S. branches, it would offer a much-needed source of cheaper funding. For Wells Fargo, which already has a large branch network, such a transaction would add more scale and cost-cutting opportunities.
"There's a massive race for scale, and the shot clock is running," KBW analyst Chris McGratty said about the broad need for industry consolidation. "If you want to do something, this is the time to do it."
While there are over 4,200 banks in the U.S., only a handful would make sense as acquisition targets for Wells Fargo or Citigroup. A viable target needs to be large enough to move the needle, but small enough to keep the acquirer comfortably beneath the 10% national deposit cap. On top of that, a complementary branch network, good cultural fit and quality deposits are must-haves, making most deals hard to justify.
Run screens on those criteria, and five regional banks emerge as strong contenders for either bank.
Fifth Third delivers a commercial and retail engine across the Midwest and a fast-growing Southeastern footprint. Huntington provides a low-cost deposit base alongside a growing branch presence in high-growth markets in Texas and the Carolinas.
Citizens offers dense retail and commercial coverage across affluent Mid-Atlantic and New England cities. KeyCorp brings a middle-market commercial business and branches stretching from the Great Lakes to the Pacific Northwest.
Finally, Regions delivers a retail deposit footprint in the fast-growing Southern corridor, including Texas and Florida.
Beyond that group, a bank that would work specifically for Wells Fargo is Zions, which provides relationships across high-growth Western states, fitting well with its footprint.
For Citigroup, a possible target that makes sense is First Horizon, with its presence across the fast-growing U.S. Sunbelt.
Wells Fargo and Citigroup declined to comment for this article. Most of the regional banks mentioned above also declined to comment, with the exception of Huntington, Zions and First Horizon, which did not respond.
'We will look at it'
When asked about the potential for Citigroup to purchase a large bank in April, CEO Jane Fraser said the bank's focus is on organic growth, not deals.
Still, Citigroup executives reportedly discussed the idea of buying a major regional lender to bolster its deposit base, Bloomberg News said in March. Citigroup said at the time that the report was "baseless speculation." The firm's shares dropped more than 4% that day.
To many of the analysts covering the bank, Citigroup is still trying to prove that its self-help story can deliver higher returns. Taking on a large regional bank would add branches, employees, technology systems and integration risk while Citigroup is trying to simplify itself.
"A depository deal would be a major distraction" for Citigroup, said KBW's McGratty.
Wells Fargo CEO Charlie Scharf, on the other hand, has telegraphed an openness to a transformative deal, from acquiring a bank to a credit-card player, even as he also emphasized the organic growth emphasis.
"We should always consider ways to increase franchise value, including M&A," Scharf wrote in a March shareholder letter, acknowledging that regulators were more amenable to deals.
While "we feel no pressure to pursue" a deal, Scharf said, "if a great opportunity exists, we will look at it."
But there's one problem: So far, the wave of consolidation that many expected when Trump returned to office in 2025 hasn't materialized. In fact, the value of North America bank mergers actually fell by more than half to $30.1 billion in the first six months of 2026 compared to the year-earlier period, according to EY data.
Yes, regulatory barriers may be falling. But few banks are eager to sell when profits and share prices are rising.
"Most companies have good profit margins, stock prices are really good, and it just raises the bar if they are going to sell," said Frank Sorrentino, a mergers banker at Stephens. "Everybody thinks they're a buyer, not a seller."
Activist investors who have pushed banks to improve shareholder returns say executives are now routinely comparing the economics of an acquisition with simply repurchasing their own stock, creating more discipline around deals.
Regional champion?
The moment is still favorable for mergers, according to Sorrentino, who called it "probably the best environment that we've seen since the financial crisis."
Last year, Congress overturned Biden-era restrictions around mergers at the Office of Comptroller of the Currency, and the Federal Deposit Insurance Corporation reinstated its long-standing merger guidelines, effectively restoring expedited reviews and lowering the bar for regulatory clearance.
When it comes to big acquisitions, Wells has something Citi doesn't: a stronger stock currency. That could make a deal easier to justify, particularly if the target fills a geographic or product gap.
But another way to win the race is for regionals to team up with each other.
For years, bankers have speculated that two of the three biggest super-regionals — PNC, U.S. Bancorp and Truist — could eventually combine to create a new banking champion capable of taking on the giants.
Bain projects that mergers among regionals will create one to three new megabanks with at least $1 trillion in assets by 2030, according to new research shared with CNBC. The consulting firm's predictive model, which was based on two decades of data, also found that the ranks of regional banks will shrink from 49 to as few as 30.
"We expect more banks, particularly regional players, to use M&A to add capabilities," especially around technology including artificial intelligence, Bain said.
That idea hasn't gone away. If Wells Fargo and Citi decide not to swing, the regionals have to decide whether they can afford to sit on the bench — or merge with each other to keep pace.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
一方、ウェルズ・ファーゴのチャーリー・シャーフ最高経営責任者（CEO）は、有機的成長の重視も強調しながらも、銀行の買収からクレジットカード会社の買収に至るまで、変革的な取引に前向きであると電報を打った。
シャーフ氏は３月の株主への書簡で「われわれはＭ＆Ａを含め、フランチャイズの価値を高める方法を常に検討すべきだ」と述べ、規制当局が取引に柔軟であることを認めた。
シャーフ氏は「合意を追求するプレッシャーは感じていない」としつつも、「素晴らしい機会があれば検討する」と述べた。
しかし、問題が1つある。トランプ氏が2025年に大統領に復帰した際に多くの人が予想していた統合の波は、今のところ実現していない。実際、EYのデータによると、北米の銀行合併額は2026年上半期に前年同期と比べて半分以下の301億ドルに減少した。
はい、規制の壁は下がりつつあるのかもしれません。しかし、利益と株価が上昇しているときに積極的に売却しようとする銀行はほとんどありません。
スティーブンスの合併担当バンカー、フランク・ソレンティーノ氏は「ほとんどの企業は利益率が高く、株価も非常に良い。売却する場合にはハードルが上がるだけだ」と述べた。 「誰もが自分は売り手ではなく買い手だと思っている。」
銀行に株主利益の向上を求めてきた物言う投資家らによると、経営陣は現在、買収の経済性と単純な自社株買いを日常的に比較しており、取引に関する規律が強化されているという。
地域チャンピオン？
ソレンティーノ氏は、今は依然として合併に有利な状況であり、「金融危機以来おそらく最高の環境だ」と述べた。
昨年、議会は通貨監督庁による合併に関するバイデン政権時代の規制を覆し、連邦預金保険公社は長年にわたる合併ガイドラインを復活させ、事実上、迅速な審査を復活させ、規制当局の認可の基準を引き下げた。
大型買収に関して言えば、ウェルズにはシティにはないものがある。それはより強い株式通貨だ。これにより、特にターゲットが地理的または製品のギャップを埋める場合、取引を正当化することが容易になる可能性があります。
しかし、レースに勝つもう 1 つの方法は、地域住民が互いにチームを組むことです。
銀行関係者らは長年、3大超地域銀行のうち2社、PNC、USバンコープ、トラストが最終的に統合して、巨人に対抗できる新たな銀行チャンピオンを誕生させる可能性があると推測してきた。
CNBCと共有した新しい調査によると、ベインは地域間の合併により、2030年までに少なくとも1兆ドルの資産を有する新たなメガバンクが1～3社誕生すると予測している。 20年分のデータに基づいた同コンサルティング会社の予測モデルでは、地方銀行のランクが49行からわずか30行に縮小することも判明した。
ベイン氏は、特に人工知能などのテクノロジー関連で「より多くの銀行、特に地域銀行がM&Aを利用して機能を追加すると予想している」と述べた。
その考えは今でも消えていません。ウェルズ・ファーゴとシティがスイングしないことを決めた場合、地方チームはベンチに座る余裕があるか、それともペースを保つために互いに合併するかを決定する必要がある。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/23/wells-fargo-citigroup-deals-regional-banks.html",
    publishedAt: "2026-08-23T12:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "the-treasury-s-bond-market-intervention-f244e797",
    title: "The Treasury’s bond-market intervention isn’t working. So what comes next?",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "40兆ドルに上る米国の国債を敷物の下に一掃して忘れるわけにはいかない――債券市場はスコット・ベッセント財務長官にそう訴えているようだ。",
    bodyOriginal: `You can’t just sweep $40 trillion in U.S. national debt under a rug and forget about it — or so the bond market appears to be telling Treasury Secretary Scott Bessent.`,
    bodyJa: `40兆ドルに上る米国の国債を敷物の下に一掃して忘れるわけにはいかない――債券市場はスコット・ベッセント財務長官にそう訴えているようだ。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-treasurys-bond-market-intervention-isnt-working-so-what-comes-next-ba5e132a?mod=mw_rss_topstories",
    publishedAt: "2026-08-23T12:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-97802719",
    readTime: 2,
  },
  {
    id: "dozens-of-co-ordinated-arson-attacks-hit-6e0b132f",
    title: "Dozens of co-ordinated arson attacks hit southern Thailand",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Dozens of co-ordinated arson attacks hit southern Thailand
- Published
More than 50 co-ordinated arson and incendiary attacks "aimed at creating unrest" have been carried out across Thailand's insurgency-hit south, the Thai military has said.
At least two people were injured, with a local government office building, a convenience store, and a stolen vehicle among the targets set on fire.
The incidents took place across the country's southern border provinces between 20:00 local time (13:00 GMT) and midnight on Saturday, the military's Internal Security Operations Command said in a statement.
Most were reported in Narathiwat province, with others occurring in neighbouring Yala and Pattani.
According to the Bangkok Post, two women were injured when a bomb exploded in Muang district in Narathiwat province.
Telecommunication towers were set on fire in several locations, and security officials warned residents not to touch suspicious objects.
Authorities imposed an overnight curfew in the Narathiwat province that was lifted on Sunday morning. No further attacks had been reported on Sunday.
No group has claimed responsibility for the arson attacks.
Since 2004, a low-level conflict has simmered in the southernmost provinces of Buddhist-majority Thailand, as rebels in the Muslim-majority region battle for greater autonomy. More than 7,000 people have been killed in the violence so far.
The insurgency is mainly led by the Barisan Revolusi Nasional.
Since talks facilitated by Malaysia began in 2013, the peace process has repeatedly stalled amid changing governments in Bangkok, with internal divisions on both sides.
In July, five soldiers were killed in a gun and bomb attack at a checkpoint in Narathiwat prompting the authorities to postpone a planned dialogue process.
Thai media report insurgents often target security officials and government buildings, sometimes ahead of visits by officials to the region.
Thai Prime Minister Anutin Charnvirakul and members of his cabinet are scheduled to make a two-day visit to the city of Hat Yai in southern Songkhla province next week to discuss investment projects, flooding prevention and security issues`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8enegx4xy3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T11:50:59+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cb09/live/98ca1da0-9ee8-11f1-9ebe-a78ab900c4a7.jpg",
    readTime: 2,
  },
  {
    id: "top-wall-street-analysts-believe-in-the-c5668591",
    title: "Top Wall Street analysts believe in the growth potential of these 3 stocks",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Geopolitical uncertainty in the Middle East and soaring bond yields weighed on global markets this past week. And investors are closely assessing the valuations of artificial intelligence stocks amid concerns about the sustainability of high spending on AI infrastructure.
Despite those continued challenges, top Wall Street analysts are bullish on the prospects of several stocks due to their long-run growth potential and exposure to lucrative business lines, including AI.
Here are three stocks favored by some of Wall Street's top pros, according to TipRanks, a platform that ranks analysts based on their past performance.
CrowdStrike Holdings
Cybersecurity company CrowdStrike Holdings (CRWD) is this week's first stock pick. The company is scheduled to announce fiscal second-quarter results on August 26.
Ahead of Q2 FY27 earnings, Truist analyst Junaid Siddiqui reiterated a buy rating on CrowdStrike stock and raised his price target to $245 from $187.50. Following CrowdStrike's impressive fiscal first-quarter performance and guidance raise, Siddiqui expects another strong quarter.
The 5-star analyst's optimism is backed by continued strength in Falcon Flex adoption and encouraging large deal activity. Siddiqui also cited continued momentum across emerging products. With the FY27 outlook assuming persistent strength in CrowdStrike's net new annual recurring revenue (ARR), Siddiqui is more focused on the longevity of key growth catalysts such as Falcon Flex adoption, platform consolidation and AI-led demand.
The analyst highlighted that talks with partners were encouraging, with pipeline generation and momentum in large deals remaining healthy in the fiscal second quarter despite tough, year-over-year comparisons.
"We continue to view CrowdStrike as one of the primary beneficiaries of platform consolidation, though we expect investors to remain focused on competitive dynamics and whether current growth levels represent a new baseline or a period of demand acceleration," the analyst said.
Siddiqui ranks No. 226 among more than 12,400 analysts tracked by TipRanks. His ratings have been profitable 80% of the time, delivering an average return of about 40%. See CrowdStrike Financials on TipRanks.
Dell Technologies
Shares of personal computer maker Dell Technologies (DELL) have rallied 251% this year, driven by strong demand for AI servers. Recently, Evercore analyst Amit Daryanani reiterated a buy rating on DELL and raised his price target to $550 from $500.
The 5-star analyst contends that while Dell's AI compute segment is getting investors' attention, the company's Storage business is underappreciated and well-positioned to drive revenue and profit acceleration. Daryanani expects the storage business to see higher demand once enterprises start to bring workload back on-premises.
The analyst highlighted that Dell's Storage business, estimated to account for only 10% of FY27 revenue, is one of the factors that could help improve profit margins, given its higher profitability compared to AI servers. Daryanani estimates that the Storage business's operating margin is currently in the low-20% range, while margins for the AI server and traditional server businesses are in the mid-single-digit and mid-teens range, respectively.
Overall, Daryanani views the Storage business as an important catalyst for three reasons: Dell has one of the broadest storage portfolios in the industry; Storage has a significantly higher margin profile than AI servers; and the shift toward proprietary, software-defined storage and AI-focused platforms.
"We think DELL's storage business is becoming increasingly strategic as AI infrastructure deployments move beyond GPU procurement and toward full stack + AI-ready architectures," said Daryanani.
Daryanani ranks No. 19 among more than 12,400 analysts tracked by TipRanks. His ratings have been successful 71% of the time, delivering an average return of 38.70%. See Dell Technologies Statistics on TipRanks.
SanDisk
SanDisk (SNDK) is benefiting from AI-driven demand for its memory and storage products. Following the company's 2026 Investor Day event, J.P. Morgan analyst Harlan Sur resumed research coverage of SNDK with a buy rating (it was earlier, "Not Rated") and a price target of $2,250.
The 5-star analyst believes SanDisk is well-positioned to capitalize on a structural inflection reached in NAND demand, driven by strong growth in AI inference. Sur's bullishness is based on three key factors.
First, Sur believes that SanDisk's New Business Model (NBM) framework (or long-term agreements) has enhanced its margin profile and reduced cyclicality. SNDK's eight signed NBMs represent a total contract value of $94 billion and a gross margin of about 80%, even at the floor pricing.
Second, Sur highlighted the growing NAND market and expects the total addressable market to surge from about $70 billion in calendar year 2025 to over $300 billion in 2026 and about $500 billion in 2027. Importantly, the analyst noted that data centers are the largest driver of NAND growth, as hyperscalers increasingly deploy flash for AI inference workloads.
Finally, Sur is optimistic on SanDisk due to its technology dominance. The company's BiCS10 technology is sampling ahead of schedule and has 65% more bits per wafer than BiCS8, the analyst said. Also, Sur expects SanDisk's High Bandwidth Flash to become a differentiated memory platform for AI inference.
"Layered on top, mgmt's commitment to returning 100% of excess cash flow to shareholders should drive an aggressive share count reduction trajectory that further amplifies EPS growth on a per-share basis," said Sur.
Sur ranks No. 15 among more than 12,400 analysts tracked by TipRanks. His ratings have been successful 71% of the time, delivering an average return of 43.20%. See SanDisk Ownership Structure on TipRanks.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/23/top-analysts-believe-in-the-growth-potential-of-these-3-stocks.html",
    publishedAt: "2026-08-23T11:29:05+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "mayors-to-get-powers-to-overrule-local-c-a036c216",
    title: "Mayors to get powers to overrule local councils on planning decisions",
    titleJa: "市長は地方議会の計画決定を覆す権限を得る",
    summaryJa: "市長は地方議会の計画決定を覆す権限を得る- 公開されました",
    bodyOriginal: `Mayors to get powers to overrule local councils on planning decisions
- Published
Mayors across England will be given new powers to overrule local councils on some planning decisions.
The change would apply to proposals with more than 150 homes, more than 15,000 square metres of commercial space or buildings over 30 metres.
Mayors in 13 areas including Manchester, Liverpool, the West of England and the West Midlands will gain similar powers to Sir Sadiq Khan in London, who is already able to "call in" planning decisions.
Housing minister Matthew Pennycook said the powers were an "essential part of the toolkit that mayors need to effectively deliver new homes and regeneration".
The Conservatives questioned whether it was right for councils to lose the "ability to make planning decisions in their own communities".
The powers will also be available to mayors in the Combined Authorities in North East England, South Yorkshire, West Yorkshire, York and North Yorkshire, Hull and East Yorkshire, Greater Lincolnshire, Cambridgeshire and Peterborough, East Midlands, and Tees Valley.
Paul Bristow, the Conservative mayor of Cambridgeshire and Peterborough, told BBC Breakfast that if he had local powers, he would approve "tomorrow" a couple of blocked schemes that he said would "get new homes built that families could move into and charge economic growth".
Bristow said "it's not about overriding what local people want", but about developers and councils finding a compromise on projects instead of just saying no - which he believed the "perceived threat of intervention" would help.
In London, where Khan already has the power to review decisions on certain developments, external, housebuilding has fallen in recent years. But Pennycook insisted the "call in" powers had helped the mayor "unblock strategic growth sites" in the capital.
Bristow said if he had a similar local plan it would be "much more light touch" than London.
In the 2024 general election, the Labour government promised to build 1.5 million homes in England by the end of the decade, but housebuilders have warned the target could be missed.
Pennycook said the government was "absolutely determined to stick with that ambition".
He acknowledged the target was "really stretching" but said nearly 180,000 children were in temporary accommodation and "any smaller target wouldn't be commensurate with the scale of the challenge".
Bristow said the government has "no chance whatsoever" to meet its 1.5 million target.
"We need economic growth in this country, we need to get building and families need places to live, and at the moment, the planning system just isn't working."
In addition to gaining the new "call-in" powers, mayors are set to be able to grant "up-front permission", which the government says will allow building to begin "without a developer having to apply".
A consultation on how the powers will work is due to be published next week.
The government has sought to stress that local councils will continue to decide the majority of applications and that all decisions must still follow planning rules.
It has also said mayors will get a "bigger say" over how housing funding is spent in their area, with the government directing national agency Homes England to focus on local mayors' priorities.
New Prime Minister Andy Burnham, who served as mayor for Greater Manchester for nearly a decade, has repeatedly expressed his desire to transfer more powers to local mayors.
"Challenge does need to be made to local decision-making and actually it cuts both ways," he told the Sunday Times.
"Sometimes it's the other way round. It's the local authority putting forward something that's unacceptable in terms of the impact on the community. It's a two-way street."
Last month, Burnham promised to give all mayors a share of income tax revenue, saying he wanted to "bring power home" to "every postcode".
Earlier this week, he announced a secondment programme to send high-performing civil servants to work in mayoral offices.
The approach has faced criticism from some in his own party and the Liberal Democrats, who fear it could create a "two-tier system" that discriminates against those areas that do not have an elected mayor.
Affordable housing quota for London falls to 20%
- Published23 October 2025
Responding to the new powers for mayors, Sir James Cleverly, the shadow housing secretary, said the government was "simultaneously stripping councils across the country of their ability to make planning decisions in their own communities, while making it easier to build traveller sites against local wishes".
Sir James also suggested Labour mayors had failed to meet housing targets, adding: "The Conservatives are the only party with a plan to get Britain building and moving again with our plan to scrap stamp duty on the family home."
Gideon Amos, the Liberal Democrat housing and planning spokesperson, said "taking powers away from communities and local councillors is taking powers away from local people".
"Instead of silencing residents and handing mayors a blank cheque, the government should be empowering local councils with the resources to deliver genuinely affordable homes alongside the infrastructure to support them," he added.
Mothin Ali, deputy leader of the Greens, said "more powers for mayors to direct local councils" was "more tinkering from the Labour government when local authorities continue to be forced by government into austerity budgets".
Reform UK accused Labour of "centralisation in disguise", saying: "Westminster is stretching its tentacles outward instead of giving real power, resources and decision-making capabilities to devolved authorities."
Sign up for our Politics Essential newsletter to keep up with the inner workings of Westminster and beyond.`,
    bodyJa: `市長は地方議会の計画決定を覆す権限を得る
- 公開されました
イングランド全土の市長には、一部の計画決定に関して地方議会を覆す新たな権限が与えられる。
この変更は、150戸を超える住宅、1万5000平方メートルを超える商業スペース、または30メートルを超える建物を含む提案に適用される。
マンチェスター、リバプール、イングランド西部、ウェスト・ミッドランズを含む13地域の市長は、ロンドンのサディク・カーン卿と同様の権限を獲得することになる。同氏はすでに計画決定に「呼びかける」ことができる。
マシュー・ペニークック住宅大臣は、この権限は「市長が新しい住宅と再生を効果的に提供するために必要なツールキットの不可欠な部分」であると述べた。
保守党は、議会が「自分たちの地域社会で計画を決定する能力」を失うことが正しいのかどうかを疑問視した。
この権限は、北東イングランド、サウスヨークシャー、ウェストヨークシャー、ヨークとノースヨークシャー、ハルとイーストヨークシャー、グレーターリンカンシャー、ケンブリッジシャーとピーターバラ、イーストミッドランズ、ティーズバレーの統合当局の市長にも与えられる。
ケンブリッジシャーとピーターバラの保守党市長ポール・ブリストー氏はBBCブレックファストに対し、地元の権限があれば、「家族が入居できる新しい住宅を建設し、経済成長を促す」と述べた、阻止されているいくつかの計画を「明日」承認するだろうと語った。
ブリストー氏は、「地元住民の要望を無視することではなく」、開発者や市議会が単にノーと言うのではなく、プロジェクトに関して妥協点を見つけることが重要であり、「介入の脅威の認識」がそれを助けるだろうと信じていると語った。
ロンドンではカーン氏がすでに特定の開発に関する決定を見直す権限を持っており、外部の住宅建設は近年低迷している。しかしペニークック氏は、「招集」権限が市長による首都の「戦略的成長拠点のブロック解除」に役立った、と主張した。
ブリストー氏は、同様の地元計画があれば、ロンドンよりも「はるかに軽いタッチ」になるだろうと語った。
2024年の総選挙で労働党政権は10年末までに英国で150万戸の住宅を建設すると約束したが、住宅建設業者らは目標が達成されない可能性があると警告している。
ペニークック氏は、政府は「その野望を貫く絶対の決意」を持っていると語った。
同氏は目標が「非常に厳しい」ことを認めたが、18万人近くの子どもたちが一時的な宿泊施設に収容されており、「これより小さな目標は課題の規模に見合わない」と述べた。
ブリストウ氏は、政府には150万人の目標を達成する「見込みは全くない」と述べた。
「この国には経済成長が必要で、建物を建てる必要があり、家族が住む場所が必要ですが、現時点では計画システムが機能していません。」
新たな「呼び出し」権限を獲得することに加えて、市長は「事前許可」を与えることができるようになる予定で、政府はこれにより「開発業者が申請することなく」建設を開始できるようになるという。
権限がどのように機能するかに関する協議は来週公表される予定だ。
政府は、地方議会が引き続き申請の大部分を決定し、すべての決定は引き続き計画規則に従わなければならないことを強調しようとしている。
また、政府は国の機関であるホームズ・イングランドに対し、地元市長の優先事項に焦点を当てるよう指示し、市長らはその地域での住宅資金の使い方について「より大きな発言権」を得るだろうとも述べた。
グレーター・マンチェスター市長を10年近く務めたアンディ・バーナム新首相は、地方市長により多くの権限を移譲したいとの願望を繰り返し表明してきた。
同氏はサンデー・タイムズに対し、「地元の意思決定に異議を唱える必要はあるが、実際、それは双方向に影響を与えるものだ」と語った。
「場合によっては、その逆のこともあります。地域社会への影響という観点から、地方自治体が容認できないことを提案しているのです。これは双方向の問題です。」
バーナム氏は先月、「すべての郵便番号」に「電力を家庭に持ち帰りたい」と述べ、すべての市長に所得税収入の一部を与えると約束した。
今週初め、同氏は優秀な公務員を市長公室に派遣する出向プログラムを発表した。
この手法は、選挙で選ばれた市長がいない地域を差別する「二層制度」を生み出す可能性があるとして、同党内や自由民主党の一部から批判にさらされている。
ロンドンの手頃な価格の住宅割り当ては20％に低下
- 2025 年 10 月 23 日発行
市長の新たな権限に対し、影の住宅長官であるジェームズ・クレバリー卿は、政府が「地元の要望に反して旅行者サイトを構築することを容易にしながら、同時に全国の議会から自らの地域社会で計画を決定する能力を剥奪している」と述べた。
ジェームズ卿はまた、労働党の市長らが住宅目標を達成できていないことを示唆し、「保守党は、英国に住宅への印紙税を撤廃する計画で英国を再び建設し、再び前進させる計画を持っている唯一の政党だ」と付け加えた。
自由民主党の住宅・計画広報担当のギデオン・アモス氏は、「地域社会や地方議員から権力を奪うことは、地元住民から権力を奪うことと同じだ」と述べた。
「住民を黙らせたり、市長に白紙小切手を渡す代わりに、政府は地方議会に対し、真に手頃な価格の住宅と、それを支援するインフラを提供するリソースを与えるべきだ」と同氏は付け加えた。
緑の党のモーシン・アリ副党首は、「地方自治体が政府から緊縮財政を強いられ続けている中、市長が地方議会を指揮する権限を強化すること」は「労働党政権からのより一層のいじくり回し」だと述べた。
改革英国は労働党を「見せかけの中央集権化」と非難し、「ウェストミンスターは権限や資源、意思決定能力を地方分権機関に与える代わりに、外側に触手を伸ばしている」と述べた。
私たちの Politics Essential ニュースレターに登録して、ウェストミンスターの内情やその周辺の状況を把握してください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy8m0gxexl4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T10:02:23+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/7205/live/1fb3cdf0-9d83-11f1-adf5-2dc21c9cc109.jpg",
    readTime: 6,
  },
  {
    id: "we-re-not-going-to-run-from-it-sydney-m-aede5820",
    title: "'We're not going to run from it': Sydney Marathon laughs off medal error",
    titleJa: "「我々はそこから逃げるつもりはない」：シドニーマラソン、メダルエラーを笑い飛ばす",
    summaryJa: "「我々はそこから逃げるつもりはない」：シドニーマラソン、メダルエラーを笑い飛ばす- 公開されました",
    bodyOriginal: `'We're not going to run from it': Sydney Marathon laughs off medal error
- Published
The organisers of Sydney Marathon have laughed off a mistake which saw a German stadium etched on to medals for participants, saying "we're not going to run from it".
Questions arose after the event's official social media account unveiled the design of this year's medal earlier in the week, which had mistakenly etched Allianz Arena, based in the German city of Munich, instead of Sydney's Allianz Stadium.
A spokesperson for the Sydney Marathon told the BBC: "A little too much international flavour has found its way onto the back of the finishers medal, with an incorrect depiction of the stadium."
It was "an unfortunate error," they added.
Recognisable Sydney landmarks feature on the double-sided medal, including the Opera House and Harbour Bridge, which are part of the 42.2km (26.2 mile) course.
Users on social media noticed the shape of the stadium engraved on the medal appeared to be carved in the wrong likeness.
Munich's Allianz Arena is sculpted by thousands of diamond-shaped inflatable cushions, while Sydney's similarly named Allianz Stadium has a flatter facade smoothed with long bronze fins.
Sydney Marathon confirmed runners would receive the medal depicting the incorrect city's stadium, noting: "It's a beautiful medal, and now a little more unique."
"It's certainly given everyone something to talk about this weekend, mostly in good humour."
Germany's Allianz Arena also poked fun at the mistake, writing on Instagram: "Oh wow, we didn't have that on our bingo card!"
"Perhaps they tried to find something else they had in common: Allianz Arena -- Sydney Opera -- Unique Architecture -- Both are worth a visit!"
The reverse side of the Sydney Marathon medal shows a gold and indigo pattern designed by First Nations artist Ambrose Killian, widely commended for its ornate pattern.
He confirmed to the BBC that he was not involved in designing the other face of the medal engraved with the wrong stadium.
Some 40,000 runners will take part in the event on 30 August, following more than 120,000 ballot entries.
Organisers praised record participation and fundraising for this year's event.
Related topics
- Published22 hours ago
- Published8 September 2025
- Published16 hours ago`,
    bodyJa: `「我々はそこから逃げるつもりはない」：シドニーマラソン、メダルエラーを笑い飛ばす
- 公開されました
シドニーマラソンの主催者は、参加者のメダルにドイツのスタジアムが刻まれたミスを笑い飛ばし、「我々はそこから逃げるつもりはない」と述べた。
今週初めに大会の公式ソーシャルメディアアカウントが今年のメダルのデザインを発表した後、疑問が生じた。メダルにはシドニーのアリアンツ・スタジアムではなく、ドイツの都市ミュンヘンに本拠を置くアリアンツ・アレーナが誤って刻まれていた。
シドニーマラソンの広報担当者はBBCに対し、「完走メダルの裏に国際色が入りすぎており、競技場の描写が間違っている」と語った。
それは「残念な間違いだった」と彼らは付け加えた。
両面メダルには、42.2km（26.2マイル）のコースの一部であるオペラハウスやハーバーブリッジなど、シドニーの有名なランドマークが描かれています。
ソーシャルメディア上のユーザーは、メダルに刻まれたスタジアムの形状が間違った形で彫られているように見えることに気づいた。
ミュンヘンのアリアンツ アリーナは、何千ものダイヤモンド型の膨脹可能なクッションによって彫刻されていますが、同じ名前のシドニーのアリアンツ スタジアムは、長いブロンズのフィンで滑らかな平らなファサードを持っています。
シドニーマラソンはランナーが間違った都市のスタジアムを描いたメダルを受け取ることを認め、「美しいメダルで、少しユニークになった」と述べた。
「間違いなく、この週末、ほとんどが上機嫌で、みんなに何かについて話す機会を与えてくれました。」
ドイツのアリアンツ・アレーナもこの間違いをからかい、インスタグラムに「なんと、ビンゴカードにそんなこと書いてなかった！」と投稿した。
「おそらく、彼らは他に共通点を見つけようとしたのでしょう。アリアンツ・アリーナ、シドニー・オペラ、ユニークな建築物、どちらも訪れる価値があります。」
シドニーマラソンのメダルの裏側には、先住民アーティストのアンブローズ・キリアンがデザインした金と藍の模様が描かれており、その華麗な模様が広く賞賛されています。
同氏はBBCに対し、間違ったスタジアムが刻印されたメダルのもう一方の面のデザインには関与していないと認めた。
12万件以上の投票があり、8月30日には約4万人のランナーが参加する予定だ。
主催者は、今年のイベントへの記録的な参加と募金を賞賛した。
関連トピック
- 22 時間前に公開
- 2025 年 9 月 8 日公開
- 16 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cn4n4l1yyvro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T03:44:19+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/e4ac/live/054e6c20-9dd0-11f1-b109-879e35c24276.jpg",
    readTime: 3,
  },
  {
    id: "iran-linked-hackers-behind-cyber-attack-c2819df0",
    title: "Iran-linked hackers behind cyber attack that shut down power plant, reports say",
    titleJa: "発電所を停止させたサイバー攻撃の背後にはイランと関係のあるハッカーが関与しているとの報道",
    summaryJa: "発電所を停止させたサイバー攻撃の背後にはイランと関係のあるハッカーが関与しているとの報道- 公開されました",
    bodyOriginal: `Iran-linked hackers behind cyber attack that shut down power plant, reports say
- Published
A small power plant in the UK was shut down during a cyber attack.
The government said that at no point was there a risk to the UK's energy system, but the Department for Energy Security and Net Zero (DESNZ) has contacted power companies to advise them about the risk of cyber attacks.
The Telegraph reported, external that the attack, which took place last month, was carried out by hackers affiliated to the Iranian regime.
For security reasons, neither the government nor the National Cyber Security Centre, which deals with attacks on critical infrastructure, would give further details of the site affected. However this was not an attack on an essential service such as a large power station.
According to the Telegraph, the power plant was shut down for four days.
DESNZ said the incident had affected a small-scale generator and at no point had there been a risk to the wider energy system.
The UK's power network has a number of smaller gas generators which provide short-term power when needed.
Protecting the country's supplies is a key challenge for the government. It is updating its regulations for cyber security, and working on a new energy resilience strategy for later this year.
Iran has long been regarded as a capable cyber power but while the Western cyber-security world is braced for attacks either from the state or hackers linked to the state as a result of its conflict with the US this year, there has been little activity so far.
Related topics
- Published12 March
- Published5 August`,
    bodyJa: `発電所を停止させたサイバー攻撃の背後にはイランと関係のあるハッカーが関与しているとの報道
- 公開されました
英国の小規模発電所がサイバー攻撃により停止された。
政府は英国のエネルギーシステムに対するリスクはいかなる時点でも存在していないと述べたが、エネルギー安全保障・ネットゼロ省（DESNZ）は電力会社に連絡し、サイバー攻撃のリスクについて助言を求めている。
テレグラフ紙は、先月起きたこの攻撃はイラン政権と関係のあるハッカーによって実行されたと社外で報じた。
安全上の理由から、政府も、重要インフラへの攻撃に対処する国家サイバーセキュリティセンターも、影響を受けたサイトの詳細を明らかにしていない。ただし、これは大規模な発電所などの重要なサービスに対する攻撃ではありませんでした。
テレグラフ紙によると、発電所は4日間停止した。
DESNZは、今回の事故は小規模発電機に影響を与えたが、より広範なエネルギーシステムへのリスクはまったくなかったと述べた。
英国の電力網には、必要なときに短期間電力を供給する小型のガス発生装置が多数あります。
国の物資を保護することは政府にとって重要な課題です。同社はサイバーセキュリティに関する規制を更新し、今年後半に向けて新たなエネルギー回復戦略に取り組んでいる。
イランは長い間有能なサイバー大国とみなされてきたが、西側サイバーセキュリティの世界は今年の米国との紛争の結果、国家または国家に関係するハッカーからの攻撃に備えているが、これまでのところ活動はほとんどない。
関連トピック
- 3 月 12 日発行
- 8 月 5 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce9793g34yvo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-23T02:48:41+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9f5a/live/8ba750f0-9e95-11f1-b485-57ec149f4199.jpg",
    readTime: 2,
  },
  {
    id: "struggling-households-need-more-help-wit-cd205616",
    title: "Struggling households need more help with bills, energy industry says",
    titleJa: "エネルギー業界は、厳しい世帯には請求書に関してさらなる支援が必要だと述べている",
    summaryJa: "エネルギー業界は、厳しい世帯には請求書に関してさらなる支援が必要だと述べている- 公開されました",
    bodyOriginal: `Struggling households need more help with bills, energy industry says
- Published
Higher energy bills this winter mean the government should step in to provide more help for households most in need, the body representing energy firms in the UK has said.
Stubbornly high prices over the last few years have left some people needing "emergency support" over and above the existing £150 Warm Home Discount, Energy UK said.
It added that bills were unaffordable for millions and a "better targeted and more agile" support scheme was needed.
On Wednesday, the energy price cap for October onwards will be announced by regulator Ofgem and is expected to hit a three-year high.
"Suppliers continue to do all they can to help their customers but as well as persistently high bills, record levels of debt show how the current system is failing to provide the right support to those in need," Energy UK chief executive Dhara Vyas said.
A new "social discount" scheme would result in "a system that works better for everyone", she added.
Ofgem reported at the end of last winter that customers who had fallen behind on their energy bills owed suppliers a record £4.7bn. Since then wholesale energy prices have risen, following the start of the Iran war in February.
Energy consultancy Cornwall Insight predicts Ofgem's cap on household price rises, which is set every three months, will go up by 4% when it is announced on Wednesday.
The rise will apply to household bills during the first half of the coming winter and follows a sharper 13% rise in July.
As well as the conflict in the Middle East, Cornwall Insight said prices had been affected by heatwaves across Europe that had increased demand for power generation to support air conditioning and other cooling.
The price rise would outweigh the impact of Prime Minister Andy Burnham's move to remove VAT on household electricity bills from October, it added.
Currently, people receiving means-tested benefits are entitled to the one-off £150 Warm Home Discount over the winter, something administered by the energy suppliers themselves. The rebate is paid for by a levy on all energy users that is collected and redistributed via bills.
Energy UK said the Warm Home Discount reached six million customers, but there were another 2.5 million who needed help because a medical condition or draughty home meant they consumed more energy.
It said if the government would allow the combining of information about customers' income, health and energy consumption, a discount scheme could offer targeted and adjustable support, and respond to changing needs and price levels.
The body said its proposed new scheme would cost £1.9bn - nearly double the cost of the current scheme - but could offer £450 in support to some households.
Energy UK suggested the new support scheme could continue to be part-funded through bills or shifted entirely onto the taxpayer, via government funding.
The last time the price cap reached a similar level was in July 2023, Cornwall Insight said, which was still below the peaks reached the previous year in the wake of Russia's invasion of Ukraine.
During that energy price spike the Conservative government committed a total of around £40bn , externalof government spending to support households with energy bills.
The challenge of combining sources of personal data, including income and health, and the proposal to find more taxpayer money to fund such a scheme are likely to raise questions.
However, Adam Scorer, chief executive of National Energy Action, said this was the sort of approach his charity was calling for, especially as the Warm Home Discount has risen by only £10 over the last decade.
"We desperately need a new approach," he said.
"There will be a lot of detail to get right, but if government genuinely wants to provide breathing space for people in fuel poverty, it needs to take this challenge on and work with energy companies and charities to design something truly fit for purpose."
Related topics
- Published10 June
- Published3 days ago`,
    bodyJa: `エネルギー業界は、厳しい世帯には請求書に関してさらなる支援が必要だと述べている
- 公開されました
英国のエネルギー会社を代表する団体は、今冬の光熱費の高騰は、最も困っている世帯にさらなる支援を提供するために政府が介入する必要があることを意味すると述べた。
過去数年間の頑固な物価高により、一部の人々は既存の150ポンドの暖かい住宅割引を超える「緊急支援」を必要としている、とエナジーUKは述べた。
さらに、数百万人にとって請求書は手の届かないものであり、「より的を絞った、より機敏な」支援計画が必要だと付け加えた。
水曜日には、10月以降のエネルギー価格の上限が規制当局のOfgemによって発表され、3年ぶりの高値に達すると予想されている。
エナジーUKのダーラ・ヴィアス最高経営責任者（CEO）は、「サプライヤーは引き続き顧客を支援するために全力を尽くしているが、高額な請求額が続くだけでなく、記録的な水準の債務は現在のシステムが困っている人々に適切な支援を提供できていないことを示している」と述べた。
新しい「社会割引」制度は「誰にとってもより良く機能するシステム」をもたらすだろうと彼女は付け加えた。
Ofgemは昨冬の終わりに、エネルギー料金を滞納した顧客がサプライヤーに対して記録的な47億ポンドの負債を抱えていると報告した。 2月にイラン戦争が始まったことを受けて、それ以来、卸売エネルギー価格は上昇した。
エネルギーコンサルタント会社コーンウォール・インサイトは、オフジェムが３カ月ごとに設定する家庭用価格の値上げ上限は、水曜日の発表時には４％引き上げられると予想している。
この値上げは、7月の13％の大幅な値上げに続き、次の冬の前半の家計費に適用される。
コーンウォール・インサイトは、中東紛争だけでなく、ヨーロッパ全土の熱波が価格に影響を及ぼし、空調やその他の冷房をサポートするための発電需要が増加したと述べた。
価格上昇はアンディ・バーナム首相が10月から家庭用電気料金の付加価値税を撤廃する動きの影響を上回るだろうと付け加えた。
現在、資力調査による給付金を受けている人は、冬の間、1回限りの150ポンドの「暖かい家割引」を受ける権利があり、これはエネルギー供給会社自身が管理するものである。リベートは、すべてのエネルギー利用者に対する賦課金によって支払われ、請求書によって徴収および再分配されます。
Energy UK によると、Warm Homediscount の顧客は 600 万人に達したが、さらに 250 万人が、病状や隙間風が原因でより多くのエネルギーを消費するため、支援を必要としているという。
同報告書は、政府が顧客の収入、健康、エネルギー消費に関する情報の組み合わせを許可すれば、割引制度により的を絞った調整可能なサポートを提供し、変化するニーズや価格水準に対応できる可能性があると述べた。
同団体は、提案されている新たな制度の費用は19億ポンド（現行制度のほぼ2倍）となるが、一部世帯には450ポンドの支援を提供できる可能性があると述べた。
エナジーUKは、新たな支援制度の一部が引き続き法案を通じて資金提供されるか、政府資金を通じて全額納税者に負担される可能性があると示唆した。
コーンウォール・インサイトによると、価格上限が最後に同様の水準に達したのは2023年7月だが、ロシアのウクライナ侵攻を受けて前年に達した最高値を依然として下回っていた。
エネルギー価格の高騰中、保守党政府は政府支出以外に総額約 400 億ポンドを支出し、家庭の光熱費を支援しました。
収入や健康状態などの個人データのソースを組み合わせるという課題と、そのような計画に資金を提供するためにより多くの納税者の資金を見つけるという提案は、疑問を引き起こす可能性があります。
しかし、ナショナル・エネルギー・アクションの最高責任者であるアダム・スコアラー氏は、特にウォーム・ホーム・ディスカウントが過去10年間でわずか10ポンドしか値上がりしていないことを考えると、これは彼の慈善団体が求めていた類のアプローチであると述べた。
「私たちは新しいアプローチを切実に必要としている」と彼は言う。
「詳細を詰める必要はたくさんあるだろうが、政府が本気で燃料貧困に陥っている人々に息抜きの場を提供したいのであれば、この課題に取り組み、エネルギー会社や慈善団体と協力して目的に真に合ったものを設計する必要がある。」
関連トピック
- 6 月 10 日発行
- 3 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cm2g5x7l4mko?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-22T23:00:03+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/4ea9/live/7085b770-9d97-11f1-9233-8716b68cda7b.jpg",
    readTime: 5,
  },
  {
    id: "syria-says-israeli-strike-near-damascus-e1f24892",
    title: "Syria says Israeli strike near Damascus violation of international law",
    titleJa: "シリア、イスラエルのダマスカス近郊攻撃は国際法違反と主張",
    summaryJa: "シリア、イスラエルのダマスカス近郊攻撃は国際法違反と主張- 公開されました",
    bodyOriginal: `Syria says Israeli strike near Damascus violation of international law
- Published
Syria has condemned an Israeli attack on the village of Beit Jinn, southwest of the country's capital Damascus, which officials said hit a civilian vehicle and left several people injured.
The attack was the second known Israeli strike on Syria in the past week, with Syria branding it a "violation" of its sovereignty and international law.
In a post on X, the Israeli military said it had targeted a "terrorist" in the "final stages" of preparing attacks which posed an immediate threat to soldiers.
The latest incident comes days after reports emerged Israel had struck a military airbase close to the Turkish border, which Syria said threatened to escalate tensions in the region.
After the earlier attack, Washington issued a rare rebuke of Israel, calling it an "unnecessary escalation that does not advance regional stability".
In an interview on Friday, the US ambassador to Turkey, Tom Barrack, suggested that the strike could be "the Israelis baiting the Turks" in an attempt to draw Turkey into a conflict ahead of upcoming Israeli elections.
Barrack's comments led Israel's far-right defence minister, Israel Katz, to describe his account as "full of inaccuracies".
Writing on X, Katz added Israeli forces were acting "in light of clear intelligence information about Turkey's intentions".
Following Tuesday's strikes on the Abu al-Duhur airbase, the office of Israeli Prime Minister Benjamin Netanyahu published a statement: "Israel and Syria agreed to a status quo in security matters, which Syria was on the verge of breaching by permitting Turkish troops to deploy at an airbase near Aleppo."
After the strike Turkey did not confirm whether any of its troops moved to the Abu al-Duhur airbase, which sits 70km from the Turkish border. However, Ankara rejected Israel's suggestion that it posed a threat.
Abu al-Duhur airbase has been out of service as a dedicated military airfield since 2013. Rebel forces seized control of the base as they swept through the country in December 2024.
Israel occupies territory in southwest Syria it seized after the fall of Bashar al-Assad in 2024.
Syria has been trying to rebuild its military facilities that were damaged during the offensive that saw Bashar al-Assad's government overthrown.
The Turkish military has provided assistance to Syria since the overthrow of Assad, while Israel continues to view both countries with deep suspicion.
Al-Sharaa has forged closer ties with the West since coming to power, particularly the US and in November 2025 he became the first Syrian leader to visit the White House.
Related topics
- Published20 March`,
    bodyJa: `シリア、イスラエルのダマスカス近郊攻撃は国際法違反と主張
- 公開されました
シリアは、首都ダマスカスの南西にあるベイト・ジン村に対するイスラエルの攻撃を非難し、当局は民間車両に衝突し、数人が負傷したと発表した。
この攻撃はイスラエルによる過去１週間でのシリア攻撃としては２度目で、シリアはこれを自国の主権と国際法への「違反」と非難している。
イスラエル軍はＸへの投稿で、兵士にとって差し迫った脅威となる攻撃準備の「最終段階」で「テロリスト」を標的にしたと発表した。
今回の事件は、イスラエルがトルコ国境近くの軍事空軍基地を攻撃したとの報道が浮上した数日後に発生し、シリアは地域の緊張が高まる恐れがあると主張した。
先の攻撃後、米国政府は「地域の安定を促進しない不必要なエスカレーション」だとし、イスラエルを異例に非難した。
金曜日のインタビューで、駐トルコ米国大使のトム・バラック氏は、今回の攻撃は、来るイスラエル選挙に先立ってトルコを紛争に引き込もうとする「イスラエル人がトルコ人をおびき寄せる」ものである可能性があると示唆した。
バラック氏のコメントを受けて、イスラエルの極右国防大臣イスラエル・カッツ氏は、バラック氏の説明は「不正確な点が多い」と述べた。
カッツ氏はXに寄稿し、イスラエル軍は「トルコの意図に関する明確な諜報情報に照らして」行動していると付け加えた。
火曜日のアブ・アル・ドゥフル空軍基地への空爆を受け、イスラエルのベンヤミン・ネタニヤフ首相事務所は声明を発表、「イスラエルとシリアは安全保障問題で現状維持に合意したが、シリアはアレッポ近郊の空軍基地へのトルコ軍の配備を許可することでそれを破る寸前だった」と述べた。
攻撃後、トルコはトルコ国境から70キロメートル離れたアブ・アル・ドゥフル空軍基地に部隊が移動したかどうかを確認していない。しかしトルコ政府は、脅威となるというイスラエルの提案を拒否した。
アブ・アル・ドゥフル空軍基地は2013年以来、専用の軍用飛行場として使用されていない。反乱軍は2024年12月に国内を席巻し、基地を掌握した。
イスラエルは、2024年のバシャール・アル・アサド政権崩壊後に占領したシリア南西部の領土を占領している。
シリアは、バシャール・アル・アサド政権打倒につながる攻撃で被害を受けた軍事施設の再建に取り組んでいる。
トルコ軍はアサド打倒以来シリアに支援を提供してきたが、イスラエルは引き続き両国を深い疑惑の目で見ている。
アルシャラー氏は権力を握って以来、西側諸国、特に米国との緊密な関係を築き、2025年11月にはホワイトハウスを訪問した最初のシリア指導者となった。
関連トピック
- 3 月 20 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c2dkdegr2xeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-22T21:42:42+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ed19/live/4e4b3010-9e62-11f1-a386-a9605bab950d.jpg",
    readTime: 3,
  },
  {
    id: "the-estrangement-isn-t-about-politics-m-6afb6054",
    title: "‘The estrangement isn’t about politics’: My daughter hasn’t spoken to me for 4 years. Do I leave her a monthly annuity?",
    titleJa: "「疎遠の原因は政治ではありません」: 娘は 4 年間私と話をしていません。彼女に毎月の年金を残すべきでしょうか？",
    summaryJa: "「彼女には愛、サポート、そしてチャンスがあったと言ったら、信じてもらう必要があります。」",
    bodyOriginal: `“You’ll have to trust me when I tell you that she had love, support and opportunities.”`,
    bodyJa: `「彼女には愛、サポート、そしてチャンスがあったと言ったら、信じてもらう必要があります。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/its-truly-a-tragedy-my-daughter-hasnt-spoken-to-me-for-4-years-but-it-has-nothing-to-do-with-politics-86c4bcf6?mod=mw_rss_topstories",
    publishedAt: "2026-08-22T20:45:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-15274705",
    readTime: 2,
  },
  {
    id: "paramount-california-ag-office-reportedl-266355b5",
    title: "Paramount, California AG office reportedly plan to meet Monday to discuss settling WBD lawsuit",
    titleJa: "カリフォルニア州パラマウントのAG事務所は月曜日に会合を開き、WBD訴訟の和解について話し合う予定だと伝えられている",
    summaryJa: "パラマウントとカリフォルニア州事務所は月曜日に会合を開き、パラマウントとワーナー・ブラザース・ディスカバリーの契約をめぐる独禁法訴訟の和解について話し合う予定だ。",
    bodyOriginal: `Paramount Skydance representatives are reportedly meeting on Monday with the California attorney general's office to discuss a path to a potential settlement of the antitrust lawsuit seeking to block Paramount's takeover of Warner Bros. Discovery, The New York Times reported Saturday.
Pressure to settle the suit has grown in recent weeks as California Gov. Gavin Newsom, Los Angeles Mayor Karen Bass, and the Directors' Guild of America, among others, have called for a settlement. However, there are no assurances that this latest set of talks will lead to meaningful negotiations toward a settlement, the Times reported, citing people briefed on the upcoming discussions.
On Thursday, California Attorney General Rob Bonta told CNBC's David Faber that the acquisition would require "robust structural remedies" to reach a settlement in the antitrust case.
″[Paramount] wanted to talk about everything except for what this case is about. They want to talk about the streaming market, which we don't allege in our complaint. They want to talk about CNN, which is not a focus of our complaint. They want to talk about the foreign regulators. We want to talk about the three markets that we set forth in our complaint, where we think there's antitrust violation," Bonta said on CNBC.
A group of 12 state attorneys general filed a lawsuit in July challenging the proposed $110 billion acquisition that would combine two of the most storied film studios in Paramount and Warner Bros., as well as streaming platforms Paramount+ and HBO Max. The potential deal would create the largest portfolio of TV networks in the U.S.
"The unlawful merger of these two entertainment behemoths would lead to higher prices, lower quality, and less content for film and television, harming movie theaters, basic cable distributors, and ultimately, audiences on every sofa and movie theater seat in the U.S.," Bonta said in a release at the time announcing the lawsuit.
Paramount had previously agreed to delay the acquisition to as late as June 2027 due to the legal challenge, and a trial is set for March. However, if the deal is delayed beyond Sept. 30, Paramount will owe Warner Bros. Discovery shareholders a "ticking fee" that could amount to roughly $650 million in cash value every quarter, according to previous CNBC reporting. Should the deal fall apart entirely, Paramount would owe WBD a $7 billion breakup fee.
In June, the antitrust division of the U.S. Department of Justice cleared the proposed merger. European antitrust regulators also granted their approval for the deal in July.
However, U.S. state officials, as well as the Writers Guild of America and several prominent Hollywood actors and actresses, have argued that the merger would not only reduce competition but result in job losses in the entertainment industry.
Read the complete New York Times article here.
— CNBC's Lillian Rizzo contributed to this report.`,
    bodyJa: `パラマウント・スカイダンスの代表者らは、パラマウントによるワーナー・ブラザース・ディスカバリー買収阻止を求める独占禁止法訴訟の和解に向けた道筋について話し合うため、月曜日にカリフォルニア州司法長官事務所と面会しているとニューヨーク・タイムズ紙が土曜日に報じた。
カリフォルニア州知事のギャビン・ニューサム氏、ロサンゼルス市長のカレン・バス氏、全米映画監督協会などが和解を求めており、訴訟の和解を求める圧力はここ数週間で高まっている。しかし、タイムズ紙は今後の協議について説明を受けた関係者の話として、今回の一連の協議が和解に向けた有意義な交渉につながるという保証はない、と報じた。
木曜日、カリフォルニア州司法長官ロブ・ボンタはCNBCのデビッド・フェーバーに対し、独占禁止法訴訟で和解に達するには買収には「強力な構造的救済策」が必要になると語った。
「[パラマウント]は、この訴訟の内容以外のすべてについて話したいと考えていました。彼らはストリーミング市場について話したいのですが、私たちは訴状ではそれを主張していません。彼らは CNN について話したいのですが、それは私たちの苦情の焦点では​​ありません。彼らは外国の規制当局について話したいのです。私たちは告訴状に記載した独占禁止法違反があると思われる3つの市場について話したい」とボンタ氏はCNBCで語った。
州司法長官12人からなるグループは7月、パラマウントとワーナー・ブラザースの最も歴史ある映画スタジオ2社とストリーミングプラットフォームのパラマウント+とHBOマックスを統合する1100億ドルの買収案に異議を唱え訴訟を起こした。この提携により、米国で最大のテレビネットワークのポートフォリオが構築される可能性がある。
ボンタ氏は訴訟を発表した当時のリリースで、「この二つの巨大エンターテインメント企業の不法合併は、映画やテレビの価格の高騰、品質の低下、コンテンツの減少につながり、映画館や基本的なケーブル配信会社、そして最終的には米国内のすべてのソファや映画館の座席に座る観客に損害を与えることになるだろう」と述べた。
パラマウントは以前、法的異議申し立てを理由に買収を2027年6月まで延期することに同意しており、裁判は3月に予定されている。しかし、CNBCの以前の報道によると、買収が9月30日を超えて延期された場合、パラマウントはワーナー・ブラザース・ディスカバリーの株主に対し、四半期ごとに現金換算で約6億5000万ドルに達する可能性がある「ティッキングフィー」を支払うことになる。契約が完全に決裂した場合、パラマウントはWBDに対し70億ドルの違約金を支払う義務がある。
6月に米国司法省の反トラスト部門は合併案を認可した。欧州の独占禁止規制当局も７月にこの取引を承認した。
しかし、米国の州当局者、全米脚本家組合、ハリウッドの著名な俳優や女優らは、合併は競争を減らすだけでなく、エンターテインメント業界の雇用喪失を招くと主張している。
ニューヨーク・タイムズの記事全文はこちらからお読みください。
— CNBC の Lillian Rizzo がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/paramount-california-ag-said-to-plan-meeting-on-settling-wbd-suit-.html",
    publishedAt: "2026-08-22T20:34:13+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "canada-announces-retaliatory-tariffs-on-1619f937",
    title: "Canada announces retaliatory tariffs on U.S. goods after trade talks break down",
    titleJa: "カナダ、通商交渉決裂を受け米国製品に報復関税を発表",
    summaryJa: "カナダのマーク・カーニー首相は土曜日、同国が米国製品に「ドル対ドル」関税を課すことを発表した。これは両国間の貿易協議が決裂したことを受けての報復措置である。",
    bodyOriginal: `Canadian Prime Minister Mark Carney on Saturday announced his country would impose “dollar-for-dollar” tariffs on U.S. goods — a retaliatory measure after trade talks between the two nations broke down.`,
    bodyJa: `カナダのマーク・カーニー首相は土曜日、同国が米国製品に「ドル対ドル」関税を課すことを発表した。これは両国間の貿易協議が決裂したことを受けての報復措置である。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/canada-announces-retaliatory-tariffs-on-u-s-goods-after-trade-talks-break-down-45081c2f?mod=mw_rss_topstories",
    publishedAt: "2026-08-22T20:31:00+00:00",
    category: "貿易",
    imageUrl: "https://images.mktw.net/im-32140862",
    readTime: 2,
  },
  {
    id: "nvidia-customers-reportedly-warned-about-b4d26ac3",
    title: "Nvidia customers reportedly warned about AI-related price hikes",
    titleJa: "Nvidiaの顧客はAI関連の価格高騰について警告していると伝えられている",
    summaryJa: "Nvidia Corp.の最高経営責任者であるジェンセン・フアン氏は、2026年7月16日木曜日、日本の東京で開催された同社の「ジャパンAIエコシステム」レセプション後、メディア関係者に語った。太田 清 |ブルームバーグ |ゲッティイメージズ",
    bodyOriginal: `Jensen Huang, chief executive officer of Nvidia Corp., speaks to members of the media following the company's "Japan AI Ecosystem" reception in Tokyo, Japan, on Thursday, July 16, 2026.
Kiyoshi Ota | Bloomberg | Getty Images
Nvidia plans to hike prices for some of its largest customers, Bloomberg News reported Saturday.
The chipmaker is set to increase the cost of servers containing its artificial intelligence chips, including Vera Rubin and Grace Blackwell, by more than 15% in many cases, according to the outlet. The price gains will reportedly depend on the chip generation and memory configurations.
Customers can expect the price increase to take effect on systems shipped next year, Bloomberg said.
Nvidia has been facing the soaring costs of memory chips, which are essential for its GPUs and systems.`,
    bodyJa: `Nvidia Corp.の最高経営責任者であるジェンセン・フアン氏は、2026年7月16日木曜日、日本の東京で開催された同社の「ジャパンAIエコシステム」レセプション後、メディア関係者に語った。
太田 清 |ブルームバーグ |ゲッティイメージズ
Nvidiaは一部の大口顧客向けに価格を引き上げることを計画しているとブルームバーグニュースが土曜日に報じた。
同報道によると、同社はベラ・ルービン氏やグレース・ブラックウェル氏を含む人工知能チップを搭載したサーバーのコストを多くの場合15％以上値上げする予定だという。価格上昇はチップの世代とメモリ構成に依存すると伝えられている。
ブルームバーグによると、顧客は来年出荷されるシステムから値上げが実施されることが期待できるという。
Nvidiaは、自社のGPUやシステムに不可欠なメモリチップのコストの高騰に直面している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/nvidia-customers-reportedly-warned-about-ai-related-price-hikes-.html",
    publishedAt: "2026-08-22T20:26:44+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "carney-calls-trump-s-fresh-tariffs-a-mis-5d3d5865",
    title: "Carney calls Trump's fresh tariffs a 'miscalculation' after trade talks collapse",
    titleJa: "カーニー氏、通商協議決裂後、トランプ大統領の新たな関税は「誤算」と発言",
    summaryJa: "カーニー氏、通商協議決裂後、トランプ大統領の新たな関税は「誤算」と発言- 公開されました",
    bodyOriginal: `Carney calls Trump's fresh tariffs a 'miscalculation' after trade talks collapse
- Published
Prime Minister Mark Carney has said a fresh wave of US tariffs on Canada is a "miscalculation" designed to "hurt and divide us", after trade talks collapsed late on Friday.
"They asked too much and they offered too little," Carney told Canadians on Saturday morning, adding the country was now in a trade "war" after being hit with punishing new US duties.
The prime minister confirmed he would match US tariffs "dollar-for-dollar" from 8 September, including levies on steel, dairy, appliances and electronics.
The collapse of the trade talks upends a deeply integrated trading relationship between two allies, with no clear path to resolution.
US President Donald Trump has yet to comment.
Both countries were optimistic of a deal earlier in the week, but talks fell apart after both sides accused the other of making last-minute changes.
Now that talks have broken down, Canada has been hit with new 50% US tariffs on a range of Canadian goods, in addition to existing US tariffs on Canadian steel, aluminium, automobiles and lumber.
The new tariffs are limited in scope, covering about $20bn (£15bn; C$28bn) of Canadian imports, or about 5% in total, including wine, dairy, cement, clothing and hockey equipment.
The prime minister said Canada was retaliating "reluctantly" to protect its interests. Details of the counter-measures will be released in the coming days, he said.
Leaders of other federal parties in Canada, including the Conservative opposition, voiced support for the prime minister, as have the leaders of some Canadian provinces.
Tariffs - a tax placed on imports from other countries - have been a key component of Trump's trade policy, with the US president arguing they will boost American manufacturing and create jobs at home.
Critics, however, say tariffs have raised prices for American consumers and have disrupted and damaged the global economy.
Carney faces crucial test after walking away from Trump's deal
- Published5 hours ago
Carney's speech on Saturday was his first address to Canadians after he announced late on Friday night that a deal would not be reached, accusing the Americans of making "last-minute changes" that were "unfair" and "uneconomic".
US negotiators, meanwhile, accused Canada of making "new demands and walk backs" on terms which had been previously agreed.
On Saturday, US trade representative Jamieson Greer told Fox News there were no plans to resume talks.
He added that the US had been prepared to cut some of its tariffs on Canada as part of the ill-fated deal.
Carney, however, said the US presented "unacceptable" terms that were too restrictive, including curbing Canada's ability to strike new trade deals with other countries.
He also rejected the assertion that Canada had made last-minute requests: "We clarified what was on offer and were continually disappointed by the answers."
Doug Ford, the leader of Canada's most populous province Ontario, backed Carney and said Trump "can't be trusted".
British Columbia Premier David Eby said the US demand for restrictions on Canada's ability to have other trade deals "would reduce us to the economic equivalent of the 51st state".
"It was never acceptable to Canadians," Eby said.
The Conservative opposition leader Pierre Poilievre also appeared to support Carney, calling the latest US levies "unjustified".
Quebec's premier, Christine Fréchette, warned jobs would likely be lost as a result of the new US tariffs.
"Behind these numbers are real people," she said, vowing to introduce measures to support impacted sectors.
Alberta Premier Danielle Smith, whose oil-rich province has worked to make inroads with the Trump administration, urged both sides to resume talks.
The collapse comes after more than a year of on-again, off-again trade talks, which intensified in recent weeks after a US-imposed deadline to strike a deal or face further tariffs.
The two countries were also engaged in a mandatory review of an existing North American free trade agreement, known as USMCA, with Mexico.
The pact was signed by Trump during his first term to replace the 1994 North American Free Trade Agreement. It underpins $1.6tn (£1.2tn) in annual trilateral trade across Canada, the US and Mexico.
Earlier this summer, Canada and Mexico had formally requested for USMCA to be renewed for another 16 years. The US, however, declined to renew it in its current form.
Asked how Friday's trade talk collapse would impact the North American free trade pact, Carney said it was "certainly not good news".
Related topics
- Published13 hours ago`,
    bodyJa: `カーニー氏、通商協議決裂後、トランプ大統領の新たな関税は「誤算」と発言
- 公開されました
マーク・カーニー首相は、金曜日遅くに通商協議が決裂したことを受け、米国の対カナダ関税の新たな波は「我々を傷つけ、分断する」ことを目的とした「誤算」だと述べた。
カーニー首相は土曜午前、カナダ国民に対し「彼らは要求が多すぎ、提供が少なすぎた」と語り、同国は現在、米国の新たな罰則に見舞われた後、貿易「戦争」に陥っていると付け加えた。
首相は、鉄鋼、乳製品、電化製品、エレクトロニクス製品への課税を含む米国の関税を9月8日から「1ドル単位」で適用することを確認した。
通商交渉の決裂は、同盟国間の深く統合された通商関係をひっくり返し、解決への明確な道筋はない。
ドナルド・トランプ米大統領はまだコメントしていない。
両国は週初めに合意に楽観的だったが、双方が相手が土壇場で変更を加えたと非難し、協議は決裂した。
交渉が決裂した今、カナダはカナダの鉄鋼、アルミニウム、自動車、木材に対する米国の既存関税に加え、カナダの幅広い製品に対して新たに50％の米国関税を課せられている。
新たな関税の範囲は限定されており、ワイン、乳製品、セメント、衣料品、ホッケー用具など、カナダからの輸入品の約200億ドル（150億ポンド、280億カナダドル）、または総額の約5％が対象となる。
首相は、カナダは自国の利益を守るために「仕方なく」報復していると述べた。対抗措置の詳細は数日以内に発表されるだろうと同氏は述べた。
野党保守党を含むカナダの他の連邦政党の指導者も、カナダの一部の州の指導者と同様に首相への支持を表明した。
関税（他国からの輸入品に課される税金）はトランプ大統領の通商政策の重要な要素であり、米国大統領は関税が米国の製造業を促進し、国内での雇用を創出すると主張している。
しかし、批評家たちは、関税が米国の消費者の価格を引き上げ、世界経済を混乱させ、損害を与えていると主張している。
カーニー氏、トランプ大統領との合意離脱で重大な試練に直面
- 5 時間前に公開
土曜日のカーニー氏の演説は、カーニー氏が金曜夜遅くに合意に達しないと発表し、米国人が「不公平」かつ「非経済的」な「土壇場での変更」を行ったと非難して以来、カナダ国民に向けた初めての演説となった。
一方、米国の交渉担当者らは、カナダが以前に合意された条件に対して「新たな要求とウォークバック」を行っていると非難した。
土曜日、ジェイミーソン・グリア米通商代表はFOXニュースに対し、協議を再開する計画はないと語った。
同氏は、米国は不運な合意の一環として対カナダ関税の一部を引き下げる用意があったと付け加えた。
しかしカーニー長官は、米国が他国と新たな通商協定を結ぶカナダの能力の抑制など、あまりにも限定的すぎる「受け入れられない」条件を提示したと述べた。
同氏はまた、カナダが土壇場になって要求を行ったという主張を否定し、「我々は提案内容を明確にしたものの、その回答には常に失望していた」と述べた。
カナダで最も人口の多いオンタリオ州のリーダー、ダグ・フォード氏はカーニー氏を支持し、トランプ氏は「信頼できない」と述べた。
ブリティッシュコロンビア州のデビッド・イービー首相は、カナダが他の貿易協定を結ぶ能力に対する制限を求める米国の要求は「カナダを51番目の州と経済的に同等に引き下げるだろう」と述べた。
「カナダ人には決して受け入れられなかった」とイービー氏は語った。
保守党野党党首ピエール・ポイエーブル氏もカーニー氏を支持する姿勢を示し、米国の最新の賦課金は「不当」だと主張した。
ケベック州のクリスティーヌ・フレシェット首相は、米国の新たな関税の結果、雇用が失われる可能性が高いと警告した。
「これらの数字の背後には実際の人々がいる」と彼女は述べ、影響を受けるセクターを支援する措置を導入することを誓った。
石油資源が豊富な州であるアルバータ州のダニエル・スミス首相は、トランプ政権への食い込みに努めてきたが、双方に協議再開を促した。
この決裂は、1年以上にわたって断続的な通商交渉を経て起きたもので、米国が合意を結ぶか追加関税を課す期限を設けたことを受けて、ここ数週間で交渉は激化した。
両国はまた、USMCAとして知られるメキシコとの既存の北米自由貿易協定の強制的な見直しにも取り組んでいた。
この協定は、1994年の北米自由貿易協定に代わるものとして、トランプ大統領の1期目に署名された。これは、カナダ、米国、メキシコにわたる年間1.6兆ドル（1.2兆ポンド）の三国間貿易を支えています。
今夏の初め、カナダとメキシコはUSMCAをさらに16年間更新するよう正式に要請していた。しかし、米国は現在の形で更新することを拒否した。
金曜日の通商協議決裂が北米自由貿易協定にどのような影響を与えるかとの質問に対し、カーニー総裁は「確かに良いニュースではない」と述べた。
関連トピック
- 13 時間前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx272np7vgyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-22T20:10:00+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/336c/live/7ee35600-9e56-11f1-92d9-fda6ee78d386.jpg",
    readTime: 5,
  },
  {
    id: "carney-faces-crucial-test-after-walking-93f6b58f",
    title: "Carney faces crucial test after walking away from Trump's deal",
    titleJa: "カーニー氏、トランプ大統領との合意離脱で重大な試練に直面",
    summaryJa: "カーニー氏、トランプ大統領との合意離脱で重大な試練に直面- 公開されました",
    bodyOriginal: `Carney faces crucial test after walking away from Trump's deal
- Published
The United States and Canada have entered into uncharted territory.
The longtime allies and economic partners, who have enjoyed free trade for decades, are now in an escalating trade war with no clear off ramp.
And for Prime Minister Mark Carney, the late night decision to suspend talks with President Donald Trump and to retaliate instead of agreeing to a deal that seemed in reach will be a significant political test.
He is one of the first world leaders to walk away from the negotiating table with the White House - and the outcome will be closely watched.
Both sides have blamed last-minute changes for torpedoing the tentative deal, with Carney saying the US "asked too much" and "offered too little".
Carney's decision will challenge the appetite among Canadians to accept some economic pain as Ottawa pushes for more US concessions.
After rejecting Trump's high pressure tactics, and in choosing to hit back against the latest duties, Carney will need to convince Canadians that the economic pain is worth the cost of standing up to the Trump administration in search of a better agreement in the long run.
In remarks on Saturday, he said "we take this step confident this is in the best interest of Canada" and accused the US of a "power play" by seeking eleventh-hour changes.
Asked by a reporter whether the US and Canada were locked in a trade war, he replied: "You're at war when you're attacked - we got attacked."
Switching to French, he said the spiralling trade dispute "wasn't our choice", adding: "Canada is strong, Canada is ready, Canada is united."
There is no doubt this will cause pain on both sides of the border, with business facing more pressure from US duties and Canadian counter-tariffs.
Canada sends about 70% of its exports to the US, and the country is the top trading partner for a number of US states, with Michigan, Kentucky, Indiana and Ohio among the most exposed.
Carney came to power with a call for "elbows up" - an ice-hockey term for an aggressive approach - vowing to fight for Canada in the face of a Trump administration keen to exert economic pressure for its America First agenda.
Many Canadians have told pollsters that they are willing to fight.
A recent survey by Abacus Data suggested that around 36% of Canadians would support retaliating to US tariffs, while a Leger poll indicated that 56% of Canadians want the federal government to take a hard line and make no more concessions.
Canadians frustrated with the US tariffs have already chosen to avoid travelling there. The boycott has meant a loss of about C$3.3bn ($2.35bn; £1.75bn) in travel revenue for the US last year.
A decision by most provinces to remove US alcohol from store shelves has hammered that sector.
Based on US government trade data, US wine exports to Canada fell 78% year over year, a $357m loss in export value. The US distillers association reported similar numbers - saying provincial bans have caused exports of American spirits to drop by more than 70%.
The ban quickly became a point of frustration for the Trump administration.
Canada’s prime minister will also need to convince the provinces who have been less affected by the US trade dispute so far that walking away is a risk worth taking.
He briefed them on Saturday on the current state of affairs, and for now, they are showing a united front.
British Columbia Premier David Eby said he was committed to the "national project we are on", while Ontario Premier Doug Ford said "we didn't start this fight but I can assure you. we're going to win this fight".
Canada says it will match US tariffs 'dollar for dollar' as trade talks break down
- Published13 hours ago
Carney calls Trump's fresh tariffs a 'miscalculation' after trade talks collapse
- Published5 hours ago
What went wrong?
For a week, it seemed that a deal between Washington and Ottawa was in reach.
It's still unclear exactly how the talks fell apart in the final hours, but by all accounts it came down to the wire.
Carney said that late US proposed terms "were unfair, uneconomic, and called into question the reliability of any deal".
He added on Saturday those terms included demands on the automobile sector and "unacceptable" restrictions on trade deals with other countries.
In one biting line, he said of the Trump administration: "We recognise sometimes its signature is written in pencil".
US trade representative Jamieson Greer, meanwhile, pointed to "new demands and walk backs of other commitments by Canada".
In a statement on Friday, the Distilled Spirits Council of the United States suggested "Canadian provinces' continued refusal to return US spirits products to store shelves has led to this outcome".
There were also reports by Canadian media, external that US Commerce Secretary Howard Lutnick, was unhappy with the deal. The BBC has contacted his office for comment.
And as details on an interim trade agreement with the US trickled out over last week, some provincial leaders, industry groups and political opponents raised concerns that the prime minister had not delivered on the fight he promised - though Carney denied that swayed his thinking.
Ford, usually one of the most vocal Canadian politicians on US tariffs, had been silent on the tentative deal all week. But in a letter sent to Carney, he raised concerns that an agreement under pressure would “embolden the United States to seek concession after concession".
The province, which has a large manufacturing and vehicle sector, has been among the hardest hit regions in this trade dispute.
Conservative opposition leader Pierre Poilievre said that any agreement that included "one-sided" tariffs on Canadian industry would be "a bad deal".
On Saturday, he backed Carney's decision to walk away for now, saying: "Canada cannot accept one-sided tariffs that will de-industrialise our country."
The collapse of this agreement calls into questions the future of such talks, including an ongoing review of the US-Mexico-Canada free trade pact.
Now Carney - and Canada - must wait to see how Trump responds.`,
    bodyJa: `カーニー氏、トランプ大統領との合意離脱で重大な試練に直面
- 公開されました
米国とカナダは未知の領域に足を踏み入れた。
何十年にもわたって自由貿易を享受してきた長年の同盟国と経済パートナーは現在、明確な出口の見えないまま激化する貿易戦争の中にある。
そしてマーク・カーニー首相にとって、ドナルド・トランプ大統領との会談を中止し、手が届きそうな合意に合意する代わりに報復するという深夜の決定は、重大な政治的試練となるだろう。
同氏はホワイトハウスとの交渉のテーブルから降りた最初の世界指導者の一人であり、その結果が注目される。
双方とも、土壇場の変更が暫定合意を台無しにしたと非難しており、カーニー氏は米国が「要求しすぎた」一方で「提供が少なすぎた」と述べた。
オタワが米国にさらなる譲歩を求めるなか、カーニー長官の決定は、ある程度の経済的苦痛を受け入れようとするカナダ国民の意欲に挑戦することになるだろう。
カーニー氏はトランプ大統領の高圧戦術を拒否し、最近の関税に反撃する選択をした上で、経済的苦痛は長期的にはより良い合意を求めてトランプ政権に立ち向かうコストに見合う価値があることをカナダ国民に納得させる必要があるだろう。
同氏は土曜日の発言で「われわれはこれがカナダにとって最善の利益になると確信してこの措置を講じている」と述べ、米国が11時間目の変更を求める「パワープレイ」を行っていると非難した。
米国とカナダは貿易戦争に巻き込まれているのかとの記者の質問に、同氏は「攻撃されたときは戦争状態だ。我々は攻撃されたのだ」と答えた。
同氏はフランス語に切り替え、激化する貿易摩擦は「われわれの選択ではなかった」と述べ、「カナダは強い、カナダは準備ができており、カナダは団結している」と付け加えた。
これが国境の両側に苦痛をもたらすことは疑いなく、企業は米国の関税とカナダの対抗関税によるさらなる圧力に直面している。
カナダは輸出の約70％を米国に送っており、同国は米国の多くの州にとって最大の貿易相手国であり、特にミシガン州、ケンタッキー州、インディアナ州、オハイオ州が最も影響を受けている。
カーニー氏は「肘を上げて」（アイスホッケー用語で攻撃的なアプローチを意味する）を呼びかけて政権に就き、アメリカ第一の政策のために経済的圧力をかけようとするトランプ政権に直面してカナダのために戦うことを誓った。
多くのカナダ人は世論調査員に対し、戦う意思があると答えている。
アバカス・データによる最近の調査では、カナダ人の約36％が米国の関税への報復を支持するとの回答が示された一方、レジェ世論調査では、カナダ人の56％が連邦政府が強硬姿勢を取り、これ以上譲歩しないことを望んでいることが示された。
米国の関税に不満を抱いているカナダ人はすでに渡航を避けることを選択している。ボイコットにより、昨年の米国の旅行収入は約33億カナダドル（23億5000万ドル、17億5000万ポンド）の損失となった。
ほとんどの州が米国産アルコールを店頭から撤去する決定を下したことで、この業界は打撃を受けた。
米国政府の貿易統計に基づくと、カナダへの米国ワイン輸出は前年比78%減少し、輸出額では3億5,700万ドルの損失となった。米国蒸留酒製造業者協会も同様の数字を報告しており、各州の禁酒令により米国産蒸留酒の輸出が70％以上減少したと述べている。
この禁止措置はすぐにトランプ政権の不満の種となった。
カナダ首相はまた、これまで米国の貿易紛争の影響をあまり受けていない州に対し、撤退はリスクを取る価値があることを説得する必要がある。
同氏は土曜日に彼らに現状について説明し、今のところ彼らは共同戦線を示している。
ブリティッシュコロンビア州のデービッド・イービー首相は「我々が取り組んでいる国家プロジェクト」に全力で取り組んでいると述べ、オンタリオ州のダグ・フォード首相は「この戦いは我々が始めたわけではないが、断言できる。我々はこの戦いに勝つつもりだ」と述べた。
カナダ、通商交渉決裂で米国の関税に「ドル対ドル」で匹敵すると表明
- 13 時間前に公開
カーニー氏、通商協議決裂後、トランプ大統領の新たな関税は「誤算」と発言
- 5 時間前に公開
何が間違っていたのでしょうか?
1週間にわたり、ワシントンとオタワの間で合意が得られるかに見えた。
交渉が最後の数時間でどのように決裂したかはまだ正確には不明だが、どう見ても決着はついた。
カーニー長官は、米国が後半に提案した条件は「不公平で非経済的であり、あらゆる合意の信頼性に疑問を投げかけている」と述べた。
同氏は土曜日、これらの条件には自動車セクターに対する要求や他国との貿易協定に対する「容認できない」制限が含まれていると付け加えた。
同氏は、トランプ政権について「その署名が鉛筆で書かれていることがあるのは認識している」と痛烈な一文で述べた。
一方、ジェイミーソン・グリア米通商代表は「カナダによる新たな要求と他の約束の撤回」を指摘した。
米国蒸留酒評議会は金曜日の声明で、「カナダの各州が米国の蒸留酒製品を店頭に戻すことを拒否し続けていることが、このような結果を招いた」と示唆した。
また、ハワード・ラトニック米商務長官がこの合意に不満を抱いているとのカナダ外メディアの報道もあった。 BBCは彼の事務所にコメントを求めた。
そして、米国との暫定貿易協定の詳細が先週から少しずつ明らかになるにつれ、一部の地方指導者、業界団体、政敵は首相が約束した戦いを果たさなかったのではないかと懸念を表明したが、カーニー氏はそれが首相の考えを揺さぶったことを否定した。
フォード氏は通常、米国の関税に関して最も声高に発言するカナダの政治家の一人だが、この暫定合意については今週ずっと沈黙を守っていた。しかしカーニー氏はカーニー氏に送った書簡の中で、圧力の下での合意は「米国が譲歩に次ぐ譲歩を求めるよう勇気づけられる」と懸念を表明した。
同州は大規模な製造業と自動車部門を擁し、今回の貿易紛争で最も大きな打撃を受けた地域の一つとなっている。
保守野党指導者のピエール・ポイエーブル氏は、カナダ産業に対する「一方的な」関税を含む合意は「悪い合意」になると述べた。
同氏は土曜日、「カナダは我が国の産業を空洞化させる一方的な関税を受け入れることはできない」と述べ、カーニー首相の当面の離脱決定を支持した。
この協定の崩壊は、米国・メキシコ・カナダの自由貿易協定の継続的な見直しを含め、こうした協議の将来に疑問を投げかけている。
現在、カーニーとカナダは、トランプ大統領がどう反応するか見守る必要がある。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3040pn8lmmo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-22T20:02:46+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/aa28/live/becb6d00-9e49-11f1-8871-ff7211da55c9.jpg",
    readTime: 7,
  },
  {
    id: "trump-reshuffled-his-portfolio-in-june-s-d956e1d3",
    title: "Trump reshuffled his portfolio in June, selling names like Meta and buying Berkshire Hathaway",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "ドナルド・トランプ大統領は、ポートフォリオの大規模な組み替えと思われる内容で、6月の1,000件強の金融移行を明らかにした。大統領は月を通して株、債券、上場投資信託に出入りした。 8月22日のトランプ大統領の最新の提出書類によると、取引総額は7,810万ドルから2億6,310万ドルの間であり、正確な数字ではなく、それぞれの売買の範囲が示されている。彼の証券購入額は4,900万ドルを超え、売上高は少なくとも2,850万ドルに達しました。",
    bodyOriginal: `President Donald Trump disclosed just over 1,000 financial transitions for the month of June in what appears to be broad reshuffling of his portfolio.
The president rotated in and out of stocks, bonds and exchange-traded funds throughout the month. The transactions totaled between $78.1 million and $263.1 million, according to Trump's latest filing on Aug. 22, which shows a range for each sale or purchase rather than an exact figure. His securities purchases topped $49 million, while his sales totaled at least $28.5 million.
While the filing gives a window into the investment moves made on behalf of Trump, it is not a clear picture of his total portfolio holdings. The amount bought or sold isn't specific, and there is no indication of how much Trump owns of any particular security.
Of the 1,051 transactions, the largest was the $5 million to $25 million sale of Vanguard Dividend Appreciation Index Fund ETF shares on June 22. That same day he bought between $1 million and $5 million of both Fidelity National Information Services and Home Depot. Those were the largest of several purchases of the stocks in June, although he also logged some sales of Fidelity as well.
Trump sold between $1 million and $5 million worth of shares of both Meta and Motorola on June 18, but snapped up the same range of shares in each of Berkshire Hathaway, Cintas, Visa and Mastercard that same day. Those moves came a day after the market sold off on concerns over the path of monetary policy. June 17 was the conclusion of Federal Reserve Chairman Kevin Warsh's first meeting. Stocks bounced back on June 18..
Other purchases in June include a number of ETFs, including the iShares U.S. Treasury Bond ETF, State Street Technology Select Sector SPDR ETF and the iShares GSCI Commodity Dynamic Roll Strategy ETF. Trump also purchased several municipal bonds.
The president's sales included the Vanguard Short-Term Bond Index Fund ETF, State Street Consumer Discretionary Select Sector SPDR ETF and the Vanguard FTSE Europe ETF.
Those ETF transitions spanned just over $1 million to $5 million. In total, there were 25 sales and purchases of stocks, bonds and ETFs in that range. The remaining transactions were broken down into different buckets $1 million and under. The filings only require Trump to disclose securities transactions over $1,000.
The president also moved in and out of defense contractor Palantir Technologies, buying between $1,001 and $15,000 on June 3. He sold between $15,001 and $50,000 on June 16 and another $500,001 and $1 million worth on June 18. The U.S. and Iran agreed to a peace deal on June 14. He bought a small amount again on June 23.
Two other defense companies, RTX and Northrop Grumman were also named in the president's disclosure. Trump bought between $100,001 and $250,000 worth of RTX shares on June 12, and sold between $1,001 and $15,000 of Northrop Grumman the same day. He then bought Northrop on June 23 and sold it again on June 24.
He also bought and sold Coinbase throughout the month amid Bitcoin's share decline. He offloaded between $116,003 and $315,000 worth of shares between June 12 and June 23, and then bought between $50,001 and $100,000 on June 24.
The White House did not immediately respond to a request for comment. In May, spokesman Davis Ingle told CNBC, after Trump's disclosure of his first-quarter transactions, that the president's assets are held in a trust managed by his children.
"There are no conflicts of interest," spokesman Davis Ingle said in the statement at the time. "President Trump only acts in the best interests of the American public — which is why they overwhelmingly re-elected him to this office, despite years of lies and false accusations against him and his businesses from the fake news media."
— CNBC's Kevin Breuninger and Dan Mangan contributed reporting.`,
    bodyJa: `ドナルド・トランプ大統領は、ポートフォリオの大規模な組み替えと思われる内容で、6月の1,000件強の金融移行を明らかにした。
大統領は月を通して株、債券、上場投資信託に出入りした。 8月22日のトランプ大統領の最新の提出書類によると、取引総額は7,810万ドルから2億6,310万ドルの間であり、正確な数字ではなく、それぞれの売買の範囲が示されている。彼の証券購入額は4,900万ドルを超え、売上高は少なくとも2,850万ドルに達しました。
この申請書はトランプ氏に代わって行われた投資の動きを知る手がかりとなるが、同氏のポートフォリオ保有総額の明確な把握はできていない。売買金額は具体的ではなく、トランプ氏が特定の証券をどれだけ保有しているかについては示されていない。
1,051件の取引のうち、最大のものは、6月22日に行われたバンガード配当高評価インデックス・ファンドETF株の500万～2,500万ドルの売却であった。同日、彼はフィデリティ・ナショナル・インフォメーション・サービスとホーム・デポの両方を100万～500万ドルで購入した。これは6月に行われた数回の株式購入の中で最大規模だったが、同氏はフィデリティの売却も記録した。
トランプ氏は6月18日にメタ社とモトローラ社の株式を100万ドルから500万ドル相当売却したが、同日にバークシャー・ハサウェイ、シンタス、ビザ、マスターカードの各株式も同範囲で買い取った。こうした動きは、金融政策の行方を巡る懸念から市場が売られた翌日に起きた。 6月17日、連邦準備制度理事会のケビン・ウォーシュ議長の最初の会合が閉幕した。株価は6月18日に反発した。
6月のその他の購入には、iシェアーズ米国国債ETF、ステート・ストリート・テクノロジー・セレクト・セクターSPDR ETF、iシェアーズGSCIコモディティ・ダイナミック・ロール・ストラテジーETFなど、多数のETFが含まれる。トランプ大統領はまた、いくつかの地方債も購入した。
大統領の売却対象には、バンガード短期債券インデックス・ファンドETF、ステート・ストリート・コンシューマー・裁量セレクト・セクターSPDR ETF、バンガードFTSEヨーロッパETFなどが含まれた。
これらのETFの移行額は100万ドル強から500万ドルに及んだ。同範囲の株式、債券、ETFの売買は合計25件あった。残りの取引は、100 万ドル以下のさまざまなバケットに分類されました。提出書類ではトランプ氏に1000ドルを超える証券取引の開示のみを求めている。
大統領はまた、防衛請負業者パランティア・テクノロジーズに出入りし、6月3日に1,001ドルから1万5千ドルを購入した。6月16日に1万5千ドルから5万ドル相当を売却し、6月18日にさらに50万ドルから100万ドル相当を売却した。米国とイランは6月14日に和平合意に合意した。6月23日に再び少額を購入した。
他の防衛企業2社、RTXとノースロップ・グラマンも大統領の開示に名前が挙がった。トランプ大統領は6月12日に10万1ドルから25万ドル相当のRTX株を購入し、同日にノースロップ・グラマン株を1001ドルから1万5000ドルで売却した。その後、6月23日にノースロップを買収し、6月24日に再び売却した。
同氏はまた、ビットコインの株価下落のさなか、今月を通じてコインベースを売買した。同氏は6月12日から6月23日までに11万6003ドルから31万5000ドル相当の株式を売却し、6月24日に5万1ドルから10万ドル相当を購入した。
ホワイトハウスはコメント要請に応じなかった。 5月、デービス・イングル報道官は、トランプ大統領の第1四半期の取引の暴露後、CNBCに対し、大統領の資産は子供たちが管理する信託に保管されていると語った。
「利益相反は存在しない」とデイビス・イングル広報担当は当時の声明で述べた。 「トランプ大統領はアメリカ国民の最善の利益のみを考えて行動する。だからこそ、フェイクニュースメディアによるトランプ大統領と彼のビジネスに対する長年の嘘と冤罪にも関わらず、トランプ大統領が圧倒的多数で大統領に再選されたのだ。」
— CNBC の Kevin Breuninger と Dan Mangan が報道に貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/22/trump-reshuffled-his-portfolio-in-june-selling-names-like-meta-and-buying-berkshire-hathaway.html",
    publishedAt: "2026-08-22T17:33:53+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
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
