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
    id: "asml-rises-5-after-hiking-sales-forecast-8f2be40c",
    title: "ASML rises 5% after hiking sales forecast for second time this year on strong AI chip demand",
    titleJa: "ASML、強いAIチップ需要を受けて今年2度目の売上予測引き上げを受け5%上昇",
    summaryJa: "ASMLは水曜日、顧客がAIチップの生産を拡大し続ける中、今年2回目のガイダンスを引き上げ、予想を上回る四半期決算を報告した。オランダの半導体装置メーカーは、通年の売上高が430億ユーロ（490億ドル）から450億ユーロ、粗利益率が54％から56％になると予想していると述べた。従来は年間純売上高が360億～400億ユーロ、粗利益率が51～53％になると予想していた。",
    bodyOriginal: `ASML on Wednesday raised its guidance for the second time this year and reported stronger-than-expected quarterly results as its customers continue to ramp up production of AI chips.
The Dutch semiconductor-equipment maker said it now expects full-year sales to come in between 43 billion euros ($49 billion) and 45 billion euros, and a gross margin of between 54 and 56%. It previously predicted annual net sales of between 36 billion and 40 billion euros, and a gross margin between 51% and 53%.
The stock jumped over 7% at the market open before slightly paring gains to last trade 4.8% higher. Shares have surged 115% this year.
Here's how ASML did versus LSEG consensus estimates for the second quarter:
- Net sales: 9.3 billion euros versus 8.8 billion euros expected
- Net profit: 2.9 billion euros versus 2.6 billion euros expected
ASML — Europe's most valuable company — is the only company in the world that makes extreme ultraviolet (EUV) lithography machines used to produce the most advanced semiconductors.
CEO Christophe Fouquet said order intake remained "extremely strong" in the first half of the year. That momentum means the company will target adding 30% to its 2026 low NA EUV capacity and 30% to its 2026 Deep Ultraviolet (DUV) immersion capacity, he said.
Chip expansion push
ASML had already raised its guidance last quarter on the continued demand for its highest-end EUV machines. This is expected to remain high as chipmakers expand production capacity to meet the needs of the AI boom.
The company's customers continue to "accelerate their capacity expansion plans," CEO Fouquet said in a Wednesday statement. "This is translating into customer commitments across our product portfolio, providing ASML with increased visibility into longer-term demand."
"ASML is doing a great job in bringing that capacity in, and the firm has several levers to do that," Javier Correonero, senior equity analyst at Morningstar, told CNBC's Ritika Gupta. He said the company was increasing output by optimizing the "cleanroom" space they have in Veldhoven, where they produce the DUV and EUV machines, while also carrying out so-called "fast shipments."
Earlier this week, Taiwan Semiconductor Manufacturing Co (TSMC), one of ASML's largest customers, reported a 68% jump in June sales on the back of strong demand for its chips.
TSMC is planning to add two advanced chip packaging plants in the Chiayi Science Park in southern Taiwan, Reuters reported, citing remarks made by Taiwan's National Science and Technology Council Minister Wu Cheng-wen on Sunday.
UBS analysts said in a July 10 note that the buildout in semiconductor fabrication facilities, as well as AI-driven demand for leading-edge chip production, is expected to help ASML see a stronger second half of the year.
China sales
Despite robust demand, semiconductor stocks have come under pressure as investors question whether the huge AI-driven capital spending can be sustained. ASML also faces tightening restrictions on export controls of its advanced chip equipment.
The stock slumped 6% in April after a bipartisan group of U.S. lawmakers proposed a bill that would cut off ASML's sale of DUV machines to Chinese chip companies and impact its already shrinking sales there. That law still needs to work its way through the U.S. legislative process.
But restrictions can have a counterintuitive effect, Morningstar's Correonero said, and have previously led to a boom in demand as Chinese customers snapped up machines in anticipation of further restrictions. He noted that while ASML is a well-managed company, expectations are quite high.
"There's a lot priced in, and we see it slightly overvalued," the analyst said. "Just to give you an idea, ASML right now is trading roughly at a 50x forward PE, which is in line with the peaks that we saw during Covid times ... Our valuation for ASML implies more like a 35-40x forward PE, which we consider more recent."
Read more
ASML said Wednesday that it continues to expect China to make up around 20% of its total net sales for the year.
"The Chinese market is moving in sync with the overall behavior that we see globally," Chief Financial Officer Roger Dassen said in a transcript of a video interview.
The company said it will provide an update on its longer-term goals at a Capital Markets Day on June 10 next year.
— CNBC's Arjun Kharpal helped contribute to this story.`,
    bodyJa: `ASMLは水曜日、顧客がAIチップの生産を拡大し続ける中、今年2回目のガイダンスを引き上げ、予想を上回る四半期決算を報告した。
オランダの半導体装置メーカーは、通年の売上高が430億ユーロ（490億ドル）から450億ユーロ、粗利益率が54％から56％になると予想していると述べた。従来は年間純売上高が360億～400億ユーロ、粗利益率が51～53％になると予想していた。
株価は市場開始時に7％以上急騰した後、前回取引の4.8％高と比べて若干の上昇幅を保った。株価は今年115％上昇した。
第 2 四半期の ASML と LSEG コンセンサス予測の比較は次のとおりです。
- 純売上高: 予想88億ユーロに対し93億ユーロ
- 純利益: 予想26億ユーロに対し29億ユーロ
ASML — ヨーロッパで最も価値のある企業 — は、最先端の半導体の製造に使用される極端紫外線 (EUV) リソグラフィー装置を製造する世界で唯一の企業です。
CEOのクリストフ・フーケ氏は、今年上半期の受注は引き続き「非常に好調」だったと述べた。この勢いは、同社が2026年の低NA EUV容量を30％、2026年の深紫外線（DUV）浸漬容量を30％増やすことを目標にしていることを意味すると同氏は述べた。
チップ拡張プッシュ
ASMLは、最高級EUV装置に対する継続的な需要を受けて、すでに前四半期にガイダンスを引き上げていた。チップメーカーがAIブームのニーズに応えるために生産能力を拡大する中、この数字は引き続き高水準で推移すると予想される。
フーケ最高経営責任者（CEO）は水曜日の声明で、同社の顧客は引き続き「生産能力拡大計画を加速させている」と述べた。 「これは当社の製品ポートフォリオ全体にわたる顧客のコミットメントに反映されており、ASML は長期的な需要に対する可視性を高めています。」
モーニングスターのシニア株式アナリスト、ハビエル・コレオネロ氏はCNBCのリティカ・グプタに対し、「ASMLはその能力を導入する上で素晴らしい仕事をしており、同社はそれを実現するための手段をいくつか持っている」と語った。同氏は、同社はフェルドホーフェンにあるDUVおよびEUV装置を生産する「クリーンルーム」スペースを最適化することで生産量を増やしていると同時に、いわゆる「高速出荷」も行っていると述べた。
ASMLの最大顧客の1つである台湾積体電路製造（TSMC）は今週初め、同社のチップに対する強い需要を背景に6月の売上高が68％増加したと報告した。
台湾の国家科学技術委員会の呉承文大臣の日曜日の発言を引用してロイター通信が報じたところによると、TSMCは台湾南部の嘉義サイエンスパークに先進的なチップパッケージング工場を2つ追加する計画だという。
UBSのアナリストらは7月10日のメモで、半導体製造施設の増強と最先端チップ生産に対するAI主導の需要がASMLの今年下半期の好調を後押しすると予想していると述べた。
中国販売
堅調な需要にもかかわらず、投資家がAI主導の巨額の設備投資を維持できるかどうか疑問を抱き、半導体株は圧力にさらされている。 ASMLはまた、先端チップ機器の輸出規制の強化にも直面している。
米国の超党派議員グループがASMLによる中国チップ企業へのDUV装置の販売を打ち切り、すでに縮小している中国での売上高に影響を与える法案を提案したことを受け、株価は4月に6％下落した。この法律はまだ米国の立法プロセスを通過する必要がある。
しかし、モーニングスターのコレオネロ氏は、制限は直観に反する効果をもたらす可能性があり、以前はさらなる制限を見越して中国の顧客が機械を買い占めたため、需要が急増したと述べた。同氏は、ASML は適切に管理されている企業である一方で、期待は非常に高いと指摘しました。
同アナリストは「多くのことが織り込まれており、やや過大評価されていると見ている」と述べた。 「参考までに言っておきますが、ASMLは現在、およそ50倍の先物PERで取引されており、これは新型コロナウイルス感染症の時期に見られたピークと一致しています…ASMLに対する当社の評価は、35〜40倍の先物PEを示唆しており、これはより最近のものであると考えています。」
続きを読む
ASMLは水曜日、今年の総純売上高の約20％を中国が占めると引き続き予想していると述べた。
ロジャー・ダッセン最高財務責任者（ＣＦＯ）はビデオインタビューの記録で、「中国市場は世界的に見られる全体的な動きと同期して動いている」と述べた。
同社は、来年6月10日の資本市場デーで長期目標に関する最新情報を発表すると述べた。
— CNBC の Arjun Kharpal がこの記事の寄稿に協力しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/asml-2q-earnings-ai-chips-orders.html",
    publishedAt: "2026-07-15T08:11:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "midnight-social-media-curfew-proposed-fo-c197394e",
    title: "Midnight social media curfew proposed for UK teens aged 16 and 17",
    titleJa: "英国の16歳と17歳の十代の若者に深夜のソーシャルメディア外出禁止を提案",
    summaryJa: "英国の16歳と17歳の十代の若者に深夜のソーシャルメディア外出禁止を提案- 公開されました",
    bodyOriginal: `Midnight social media curfew proposed for UK teens aged 16 and 17
- Published
Older teenagers in the UK will face an overnight social media curfew, the government has announced - though they will be able to opt out of it by changing their account settings.
It would mean apps such as Instagram, TikTok and YouTube being set to be unavailable by default to 16 and 17-year-olds between midnight and 06:00.
The government also wants "addictive" features such as auto-play and infinite scroll to be set to be disabled, saying - combined with the curfew - the measures will improve teenagers' focus, sleep quality and family life.
However, campaigners such as Ellen Roome, who believes her 14-year-old son Jools Sweeney died in an online challenge gone wrong in 2022, does not think the plan goes far enough as teenagers can switch the setting off.
"I just think it's not good enough really just to have a product you can switch off, it's a bit like offering a 17-year-old a bottle of alcohol and then moving it slightly out of arms reach, they can just drag it back in, I really wish they could go stronger and harder on these things," she told BBC Radio 4's Today programme.
The new plans follow the announcement in June that under-16s in the UK would be banned entirely from a range of platforms.
Online safety minister Kanishka Narayan defended the policy on BBC One's Breakfast programme, saying the combination of the curfew and limiting auto-play features meant that "Britain is already going to be the most robust place in the world when it comes to regulating" tech companies.
Speaking on the Today programme, Alex, who is 17, said while there were questions about whether being able to opt out "defeated the point", he felt it could still help by reminding young people how long they are spending on social apps.
Meanwhile 17-year-old Confidence, who said she often spent up to six hours a day on social media, said she would prefer to opt out of the curfew - adding if people her age are trusted to make decisions about university, they should be able to control their own screen time.
In an earlier statement, Technology Secretary Liz Kendall said the measures would be "crucial in helping young people get the sleep they need, focus on school and college, and spend more quality time with family and friends, all of which are fundamental to building a happy, healthy and fulfilling adult life".
"We want young people to enjoy the benefits of technology while having the tools to make the online world a place where they can thrive."
Laura Trott, the Conservative shadow education secretary, described the plans as a "dog's dinner".
"Either they think 16 and 17-year-olds should be on social media or they don't, but curfews they can simply switch off won't achieve anything," she said.
The government said further measures would be aimed at helping children use AI chatbots safely - including by making providers introduce regular breaks for under-18s.
It says it will aim to lay its new proposed measures in front of Parliament by the end of 2026, with the aim that they take effect alongside its social media ban for under-16s next spring.
But some child safety charities and experts have cast doubt on the effectiveness or promise of a midnight curfew for older UK teens.
"While we welcome these measures for older teens, this latest move is yet another piecemeal set of announcements, not the comprehensive plan for children's safety that's required," said Andy Burrows, chief executive of the Molly Rose Foundation.
He added that Prime Minister Sir Keir Starmer "leaves office having announced a social media ban without a plan" - with his likely successor Andy Burnham to "inherit a series of missed opportunities".
Prof Sonia Livingstone, an expert in children's digital rights at the London School of Economics, said a curfew could harm vulnerable children by limiting their access to social media when they might need it most.
"If it's a curfew on companies using push notifications to wake someone up in the night, absolutely have a curfew," Prof Livingstone told the BBC.
"But if it's a curfew that prevents a child in need of support or help or comfort reaching out to trusted sources in the middle of the night, I think that's quite harmful potentially."
Dame Rachel de Souza, children's commissioner for England, said: "We have to listen to young people. They don't want a ban, but they do want to be protected from addictive, infinite scrolling."
She added: "I want to know more about how the policies, such as a curfew, will be delivered and will be watching closely to make sure they are effective – alongside pushing Ofcom to make full use of its powers to make the online world safer for children."
Which social media platforms will be banned for UK under-16s?
- Published16 June
'One part of the puzzle'
The government trialled a range of possible interventions, including overnight curfews, in the homes of some families across the UK.
It saw 300 teens have their social apps disabled entirely, blocked overnight from 21:00 and 07:00 or capped to one hour's use - with some also seeing no such changes at all - in order to compare their experiences over one month.
In a report published on Tuesday, the government cited its curfew trials as seeing the most sleep benefits, as well as more engaging and communicative family evenings, and a less burdensome set-up for parents.
It was also the most manageable option of the three to enforce, the report said.
"These findings show what parents have been telling us all along: when children spend less time on social media, the benefits are real," Kendall said of the findings.
But Pete Etchells, professor of science communication at Bath Spa University, cautioned against relying too much on them.
"This is a small study that is one part of the puzzle in trying to understand how children and parents will navigate technology restrictions in a practical way," he said.
VPN questions
The proposals outlined by the prime minister follow in Australia's footsteps by banning social media for under-16s in the UK.
Australia's restrictions, which took effect in December, saw a slew of social apps forced to close teens' accounts and prevent them from opening new ones.
But the curbs have been criticised as ineffective, with many teens saying they can still access supposedly banned sites.
This, and questions over the feasibility of age checks for under-16s, has prompted some concern about the UK following suit.
Another point of concern had been suggestions by the government it might consider potential curbs around virtual private networks (VPNs).
On Tuesday, the government - citing findings from research it commissioned, external - said there was little to show VPNs were being used by many children to get around age checks.
Online safety minister Narayan confirmed on Wednesday that at this stage the government would not be making changes to its VPNs policy.
"We have decided not to limit VPNs today and that's the primary conclusion for now but it is something we will continue to review," he said.
Additional reporting by Chris Vallance
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published21 March
- Published15 June`,
    bodyJa: `英国の16歳と17歳の十代の若者に深夜のソーシャルメディア外出禁止を提案
- 公開されました
政府は、英国の年長のティーンエイジャーに対し、一晩中ソーシャルメディアの使用禁止を課すことになると発表したが、アカウント設定を変更することで禁止をオプトアウトすることも可能だという。
これは、Instagram、TikTok、YouTubeなどのアプリが、デフォルトで16歳と17歳に対して午前0時から午前6時まで利用できないように設定されることを意味する。
政府はまた、自動再生や無限スクロールなどの「中毒性」機能を無効に設定することを望んでおり、外出禁止令と組み合わせることで、この措置は十代の若者たちの集中力、睡眠の質、家庭生活を改善すると述べている。
しかし、エレン・ルームさんのような活動家たちは、2022年に14歳の息子ジュールズ・スウィーニーさんがオンラインチャレンジの失敗で死亡したと信じているが、10代の若者が設定をオフにできるため、この計画が十分に進んでいるとは考えていない。
「スイッチをオフにできる製品があるだけでは本当に十分ではないと思います。それは、17歳の子供にアルコールのボトルを勧めて、それを腕の届かないところに少し移動させて、引きずって元に戻すようなものです。私は彼らがこれらのことにもっと強く、より熱心に取り組むことができることを本当に願っています」と彼女はBBCラジオ4の番組「トゥデイ」で語った。
新しい計画は、英国の16歳未満のユーザーがさまざまなプラットフォームから完全に禁止されるという6月の発表に続くものだ。
オンライン安全大臣のカニシカ・ナラヤン氏は、BBC Oneの朝食番組に関する方針を擁護し、外出禁止令と自動再生機能の制限の組み合わせにより、ハイテク企業の規制に関して「英国はすでに世界で最も堅牢な国になるだろう」と述べた。
Todayの番組で、17歳のアレックスさんは、オプトアウトできるのは「的外れ」かどうかという疑問はあるものの、若者たちにソーシャルアプリにどれだけの時間を費やしているかを思い出させることで、それでも役立つ可能性はあると感じたと語った。
一方、ソーシャルメディアに1日最大6時間を費やすことが多かったという17歳のコンフィデンスさんは、外出禁止令を解除したいと述べ、もし同年齢の人々が大学に関する決定を下すのに信頼されているのであれば、彼らは自分のスクリーンタイムをコントロールできるはずだと付け加えた。
リズ・ケンドール技術長官は以前の声明で、今回の措置は「若者が必要な睡眠をとり、学校や大学に集中し、家族や友人と充実した時間を過ごすことを支援する上で極めて重要であり、これらはすべて幸せで健康で充実した成人生活を築く上での基礎となる」と述べた。
「私たちは若者たちにテクノロジーの恩恵を享受しながら、オンラインの世界を成長できる場所にするためのツールを手に入れてほしいと考えています。」
保守党の影の教育担当書記であるローラ・トロット氏は、この計画を「犬の夕食」と表現した。
「彼らは16歳と17歳がソーシャルメディアを利用すべきだと考えているか、そうでないかのどちらかですが、単にスイッチを切るだけの外出禁止令では何も達成できません」と彼女は言う。
政府は、プロバイダーに18歳未満に対する定期的な休憩の導入を義務付けるなど、子供たちがAIチャットボットを安全に使用できるようにすることを目的としたさらなる措置を講じると述べた。
来春の16歳未満に対するソーシャルメディア禁止と並行して発効することを目指し、2026年末までに新たな法案を議会に提出することを目指すとしている。
しかし、一部の児童安全慈善団体や専門家は、英国の年長の十代の若者に対する深夜外出禁止令の有効性や約束に疑問を投げかけている。
モリー・ローズ財団のアンディ・バローズ最高経営責任者（CEO）は、「10代以上の若者に対するこうした措置は歓迎するが、今回の措置はまたしても断片的な発表であり、子どもたちの安全のために必要とされる包括的な計画ではない」と述べた。
同氏は、サー・キア・スターマー首相が「無計画にソーシャルメディアの禁止を発表し辞任」し、後継者となる可能性が高いアンディ・バーナム氏が「逃した一連の機会を引き継ぐ」と付け加えた。
ロンドン・スクール・オブ・エコノミクスの子どものデジタル権利の専門家であるソニア・リビングストン教授は、外出禁止令は最も必要なときにソーシャルメディアへのアクセスを制限し、弱い立場にある子どもたちに悪影響を与える可能性があると述べた。
リヴィングストン教授はBBCに対し、「夜中に誰かを起こすためにプッシュ通知を使用している企業に外出禁止令を課すのであれば、絶対に外出禁止令を設けるべきだ」と語った。
「しかし、サポートや支援、慰めを必要としている子どもが真夜中に信頼できる情報源に連絡することを妨げる外出禁止令であれば、それは潜在的に非常に有害だと思います。」
イングランド児童委員のデイム・レイチェル・デ・ソウザ氏は、「若者の声に耳を傾けなければならない。彼らは禁止を望んでいるわけではないが、中毒性のある無限スクロールから守られることを望んでいる」と語った。
彼女はさらに、「外出禁止などの政策がどのように実現されるのかをもっと知りたいし、子供たちにとってオンラインの世界をより安全にするためにOfcomがその権限を最大限に活用するよう促すと同時に、それらの政策が効果的であることを注意深く監視するつもりだ」と付け加えた。
英国の 16 歳未満の人々に対して禁止されるソーシャル メディア プラットフォームはどれですか?
- 6 月 16 日公開
「パズルの一部」
政府は英国全土の一部の家庭で夜間の外出禁止など、考えられるさまざまな介入を試行した。
この調査では、1か月間の体験を比較するため、300人の10代の若者がソーシャルアプリを完全に無効にし、夜間21時から7時までブロックするか、使用時間を1時間に制限するなどの措置を講じた。中には全くそのような変化が見られなかった人もいた。
火曜日に発表された報告書の中で、政府は、外出禁止令の試験では、睡眠効果が最も高く、家族の夜がより魅力的でコミュニケーションが促進され、親の負担が軽減されたと述べた。
また、これは施行する3つの選択肢の中で最も管理しやすい選択肢でもあったと報告書は述べている。
「これらの調査結果は、親たちが私たちにずっと言い続けてきたことを示している。子どもたちがソーシャルメディアに費やす時間が減れば、その恩恵は本物だということだ」とケンダル氏は調査結果について語った。
しかし、バース・スパ大学のピート・エッチェルズ科学コミュニケーション教授は、それらに頼りすぎないよう警告する。
同氏は、「これは小規模な研究であり、子どもや親が実際的な方法でテクノロジーの制限をどのように乗り越えるかを理解しようとするパズルの一部である」と述べた。
VPN に関する質問
首相が概説した提案は、英国で16歳未満に対するソーシャルメディアを禁止するというオーストラリアの例に倣ったものだ。
オーストラリアの規制は12月に発効し、多数のソーシャルアプリが10代の若者のアカウントを閉鎖し、新たなアカウントを開設することができなくなった。
しかし、この縁石は効果がないと批判されており、多くの十代の若者たちは禁止されているはずのサイトにまだアクセスできると主張している。
このことと、16歳未満に対する年齢確認の実現可能性を巡る疑問により、英国も追随するのではないかとの懸念が生じている。
もう 1 つの懸念点は、仮想プライベート ネットワーク (VPN) に関する潜在的な制限を検討する可能性があるという政府の提案でした。
火曜日、政府は外部に委託した調査結果を引用し、多くの子供たちが年齢確認を回避するためにVPNを使用していることを示す証拠はほとんどないと述べた。
ナラヤン・オンライン安全大臣は水曜日、現段階では政府がVPNポリシーを変更するつもりはないことを認めた。
同氏は「われわれは本日、VPNを制限しないことを決定した。それが現時点での主要な結論だが、今後も検討していく」と述べた。
Chris Vallance による追加レポート
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。
関連トピック
- 3 月 21 日公開
- 6 月 15 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c982857nlrlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T07:58:47+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0303/live/654dede0-8024-11f1-bee8-53ce494e1abc.jpg",
    readTime: 9,
  },
  {
    id: "thames-water-returns-to-profit-after-rai-a6e4c57b",
    title: "Thames Water returns to profit after raising bills",
    titleJa: "テムズ・ウォーター、料金値上げ後に黒字に転換",
    summaryJa: "テムズ・ウォーター、料金値上げ後に黒字に転換- 公開されました",
    bodyOriginal: `Thames Water returns to profit after raising bills
- Published
Thames Water has returned to a full-year profit after hiking its customers bills by 40% last year.
The UK's largest water company reported post-tax income of £113m for the 12 months to the end of March, swinging from a £1.51bn post-tax loss the previous year.
However, the firm's net debt also swelled to £18.5bn from £16.8bn as it said it "continued to fund the business through... debt and internally generated cash flows".
Chief executive Chris Weston said: "The progress we have made in turning the company around has meant we are now performing better."
The publication of Thames Water's results comes after the government rejected a proposed rescue deal for the business in June.
Under the terms of the deal, Thames' lenders wanted leniency from future pollution fines in return for writing off £9.4bn of its debt pile and investing new money.
Thames Water said on Wednesday pollution incidents had fallen by 18%. It hit just over half of its performance targets.
The firm said it was below target when it came to customer complaints, which jumped by 77% in a year, with bill complaints making up over three quarters of the total.
The results also reveal how money from its customer bills is not enough to fund the massive upgrades needed to improve its aging and historically underinvested infrastructure, which means it needs to borrow more money.
It added that it has enough debt funding to keep the business going "through to Q4 2026".
Weston told investors on a call on Wednesday its investors "want to see what the new Burnham government thinks before providing more funding".
Labour MP Andy Burnham is expected to become Prime Minister on Monday. He has previously called for Thames Water to be nationalised.
Additional reporting by Simon Jack
Related topics
- Published16 June
- Published15 July 2025`,
    bodyJa: `テムズ・ウォーター、料金値上げ後に黒字に転換
- 公開されました
テムズ・ウォーターは昨年、顧客への請求額を40％値上げした後、通年で黒字に戻った。
英国最大の水道会社は、3月末までの12か月間で税引き後利益が1億1,300万ポンドと報告し、前年の15億1,000万ポンドの税引き後損失から大きく拡大した。
しかし、同社は「負債と内部で生み出されたキャッシュフローを通じて事業資金を供給し続けている」と述べ、純負債も168億ポンドから185億ポンドに膨らんだ。
クリス・ウェストン最高経営責任者（ＣＥＯ）は「会社の立て直しに向けた進歩により、業績も向上している」と述べた。
テムズ・ウォーターの決算発表は、政府が6月に同事業に対する救済協定提案を拒否した後に行われた。
取引条件に基づき、テムズ川の貸し手は94億ポンドの債務の山を帳消しにして新たな資金を投資する代わりに、将来の汚染罰金の減免を求めていた。
テムズ・ウォーターは水曜日、汚染事件が18％減少したと発表した。業績目標の半分強を達成しました。
同社は、顧客からの苦情に関しては目標を下回っており、苦情は1年で77％増加し、請求書に関する苦情が全体の4分の3以上を占めていると述べた。
この結果はまた、老朽化し​​歴史的に投資が不足していたインフラを改善するために必要な大規模なアップグレードの資金として、顧客請求からの資金だけでは十分ではなく、より多くの資金を借入する必要があることも明らかにしている。
また、「2026年第4四半期まで」事業を継続するのに十分な借入資金があると付け加えた。
ウェストン氏は水曜日の電話会議で投資家に対し、投資家は「追加資金を提供する前にバーナム新政権が何を考えているかを見たいと考えている」と語った。
労働党議員アンディ・バーナム氏が月曜日に首相に就任すると予想されている。同氏は以前、テムズ川の国有化を主張していた。
Simon Jack による追加レポート
関連トピック
- 6 月 16 日公開
- 2025 年 7 月 15 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c4gygy43103o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T07:35:29+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0067/live/694e25f0-800f-11f1-855c-e18bf6105698.jpg",
    readTime: 2,
  },
  {
    id: "u-s-strikes-iranian-missile-sites-defens-1bfa8255",
    title: "U.S. strikes Iranian missile sites, defense systems and reinstates port blockade",
    titleJa: "米国、イランのミサイル基地と防衛システムを攻撃、港湾封鎖を再開",
    summaryJa: "ホルムズ海峡内およびその周辺のイラン港湾に対する海上封鎖を再開する命令が発効したことを受け、中央軍は火曜日遅く、米軍がイラン目標に対する新たな攻撃を完了したと発表した。午後３時に始まった７時間のストライキは、セントコムはXポストで、ETはホルムズ海峡とイラン沿岸地域付近の数十の軍事目標を攻撃したと述べた。",
    bodyOriginal: `U.S. forces completed another round of strikes against Iranian targets, the Central Command said late Tuesday, as the order to resume its naval blockade of Iranian ports in and around the Strait of Hormuz took effect.
The seven-hour strikes, which had started at 3 p.m. ET, hit dozens of military targets near the Strait of Hormuz and Iranian coastal areas, Centcom said in an X post.
American fighter aircraft, drones, and naval vessels launched precision munitions against Iranian missile and drone sites, naval facilities, and coastal defense systems, further devastating Iran's ability to threaten commercial shipping through the critical waterway, according to Centcom.
The strikes took place as the U.S. naval blockade in the Gulf of Oman resumed at 4 p.m. ET.
In a statement posted on social media later in the day, Brad Cooper, Centcom Commander, said that Iran had "intentionally" targeted civilians and attacked seven commercial ships over the past seven days, resulting in about a dozen crew members killed, missing or injured.
The warring countries have escalated military hostilities in recent days, with Tehran expanding attacks to several Gulf countries. Jordan's Army reportedly said that their air defense system had struck down three missiles from Iran earlier on Wednesday.
In an interview with Fox News that aired Tuesday, President Donald Trump renewed his threats to target Iranian power plants and bridges, unless the Iranians "get to the table and negotiate."
The American blockade of Iranian ports was lifted after the U.S. and Iran struck a temporary ceasefire deal as part of a 14-point memorandum of understanding signed last month. But Trump last week declared the ceasefire was "over" after multiple flare-ups of hostilities in the region and as each side accused the other of violating the terms of the deal.
Trump announced Monday that the U.S. would reimpose the blockade against Iran, as Tehran's efforts to forcefully take control of the strait appear to have ramped back up as the ceasefire falls to the wayside.
To increase pressure on the Iranian regime, the U.S. Treasury said on Tuesday it had imposed new sanctions to dismantle the "illicit shipping empire" of Mohammad Hossein Shamkhani, describing the network as "a major enabler behind Iran's oil exports."
Commercial shipping traffic through the waterway, which was far below prewar levels even as the ceasefire was in effect, sharply dropped in recent days, ship tracking firms found.
Before the U.S. and Israel launched the war against Iran in late February, the strait saw 20% of the world's oil pass through it.
"The Hormuz Strait is OPEN, and will remain OPEN, with or without Iran," Trump insisted in a Truth Social post announcing the blockade was back on.
In the same post, Trump said that the U.S. will start demanding reimbursement "at the rate of 20% on all cargo shipped" through the strait.
The policy proposal met with deep skepticism from energy experts and swift opposition from shipping industry groups, including the United Nations' International Maritime Organization. Critics quickly resurrected recent clips of Trump administration officials declaring that it would be illegal for a country to impose tolls in an international waterway.
One day after announcing the 20% fee plan, Trump reversed course. He claimed on Truth Social on Tuesday morning that he would "replace" the proposed toll with "Trade and Investment Deals that the various Gulf States will be making into the United States."
At the White House later Tuesday, Trump said that he had fielded calls from world leaders who told him "we'd love to do it a different way."
"I like that, actually, because I don't think anybody should be able to charge a fee for the strait," Trump said. "I don't think anybody should be really in that position, but we were doing it as a reimbursement."
He said that he spoke with Saudi Arabia, the United Arab Emirates, Qatar, Bahrain, Kuwait and others. None of those countries has yet revealed plans this week to boost investment in the U.S.`,
    bodyJa: `ホルムズ海峡内およびその周辺のイラン港湾に対する海上封鎖を再開する命令が発効したことを受け、中央軍は火曜日遅く、米軍がイラン目標に対する新たな攻撃を完了したと発表した。
午後３時に始まった７時間のストライキは、セントコムはXポストで、ETはホルムズ海峡とイラン沿岸地域付近の数十の軍事目標を攻撃したと述べた。
セントコムによると、アメリカの戦闘機、無人機、海軍艦艇がイランのミサイルや無人機の拠点、海軍施設、沿岸防衛システムに対して精密弾を発射し、重要な水路を通る商船を脅かすイランの能力をさらに壊滅させた。
攻撃はオマーン湾での米国の海上封鎖が午後4時に再開される中で行われた。 ET。
セントコムのブラッド・クーパー司令官は同日後半にソーシャルメディアに投稿した声明で、イランが「意図的に」民間人を標的にし、過去7日間に7隻の商船を攻撃し、その結果乗組員約12人が死亡、行方不明、負傷したと述べた。
紛争諸国はここ数日軍事的敵対行為を激化させており、イラン政府は湾岸諸国のいくつかへの攻撃を拡大している。ヨルダン軍は水曜日初め、防空システムがイランからのミサイル３発を撃墜したと発表した。
火曜日に放送されたFOXニュースとのインタビューで、ドナルド・トランプ大統領は、イランが「テーブルに着いて交渉」しない限り、イランの発電所や橋を標的にする、と改めて脅迫した。
米国によるイラン港湾封鎖は、先月署名された14項目の覚書の一環として米国とイランが一時停戦協定を結んだことを受けて解除された。しかし、トランプ大統領は先週、この地域で何度も敵対関係が激化し、双方が協定条件に違反していると相手を非難したことを受けて、停戦は「終わった」と宣言した。
トランプ大統領は月曜、停戦が暗礁に乗り上げる中、海峡を力で制圧しようとするイラン政府の取り組みが再び加速しているように見える中、米国がイランに対する封鎖を再び課すと発表した。
イラン政権への圧力を強化するため、米財務省は火曜日、モハマド・ホセイン・シャムハーニー氏の「違法海運帝国」を解体するために新たな制裁を課したと発表し、同ネットワークを「イランの石油輸出を支える主要な要因」であると述べた。
船舶追跡会社によると、この水路を通る商業船舶の交通量は、停戦が発効していたにもかかわらず戦前の水準をはるかに下回っていたが、ここ数日で急激に減少した。
米国とイスラエルが２月下旬に対イラン戦争を開始する前、この海峡は世界の石油の２０％が通過していた。
トランプ大統領は、封鎖再開を発表したトゥルース・ソーシャルへの投稿で、「ホルムズ海峡は開いており、イランの有無にかかわらず、今後も開いたままだ」と主張した。
トランプ大統領は同じ投稿で、米国は海峡を通って輸送される「全貨物の20％の割合」で償還を要求し始めると述べた。
この政策提案は、エネルギー専門家からは深い懐疑の声が上がり、国連の国際海事機関を含む海運業界団体からはすぐに反対された。批評家らは、トランプ政権当局者が国際水路で国が料金を課すことは違法であると宣言する最近の映像をすぐに復活させた。
20％の手数料計画を発表した翌日、トランプ大統領は方針を転換した。同氏は火曜日朝、トゥルース・ソーシャルで、提案されている通行料を「湾岸諸国が米国と締結する貿易・投資協定」に「置き換える」と主張した。
トランプ大統領は火曜日後半にホワイトハウスで、世界の指導者らからの電話に応じて「ぜひ別の方法でやりたい」との電話を受けたと述べた。
「実際、私はそれが気に入っている。誰も海峡の使用料を請求できるべきではないと思うからだ」とトランプ大統領は語った。 「誰も実際にそのような立場にあるべきではないと思いますが、私たちは償還としてそれを行っていました。」
サウジアラビア、アラブ首長国連邦、カタール、バーレーン、クウェートなどと協議したと述べた。これらの国はいずれも今週、米国への投資を拡大する計画をまだ明らかにしていない。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/iran-strikes-hormuz-strait-blockade-trump-tolls.html",
    publishedAt: "2026-07-15T05:54:52+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "why-europe-is-suddenly-betting-big-on-dr-8eadf9bc",
    title: "Why Europe is suddenly betting big on drones",
    titleJa: "なぜヨーロッパは突然ドローンに大きく賭け始めたのか",
    summaryJa: "欧州はロシアのウクライナ侵攻に対抗して何年もかけて軍の再建に取り組んできた。現在、投資は大陸の将来の安全保障の中心となると考えられる 1 つの技術、つまりドローンを中心にますます集中しています。過去 2 週間にわたる一連の発表は、その変化がいかに急速に加速しているかを示しています。 NATOは新たなドローン構想を発表し、英国はドローンと対ドローンシステムに数十億ポンドを割り当て、ドイツはウクライナ向けに5万機のドローン調達に動き、防衛技術スタートアップのヘルシングは180億ドルの評価額を確保した。",
    bodyOriginal: `Europe has spent years rebuilding its military in response to Russia's invasion of Ukraine. Now, investment is increasingly converging around one technology that is seen as central to the continent's future security: drones.
A flurry of announcements over the past two weeks shows just how quickly that shift is accelerating. NATO unveiled a new drone initiative, the U.K. earmarked billions of pounds for drones and counter-drone systems, Germany moved to procure 50,000 drones for Ukraine, and defense tech startup Helsing secured an $18 billion valuation.
The developments reflect a broader shift in military planning, with drones and autonomous systems moving from niche battlefield tools to a core part of modern warfare. The trend is creating opportunities not only for drone manufacturers but also for companies developing AI, software, electronic warfare and secure communications.
"Future defence is moving towards a layered battlefield, where, for example, a tank will not simply fire shells; it will also launch drones, receive live targeting data from satellites and [unmanned aerial vehicles], share information across the battlefield, and operate as part of a networked force," Morningstar analyst Loredana Muharremi told CNBC.
Battlefield lessons from Ukraine – alongside Iran's use of low-cost Shahed drones in the Middle East – have shown the importance of relatively inexpensive, AI-enabled drones that can gather intelligence, extend the reach of conventional weapons and increasingly operate autonomously.
How are drones being used in modern warfare?
Those battlefield lessons are now reshaping procurement decisions across Europe.
Last week, NATO Secretary General Mark Rutte said the military alliance would become "drone-ready," as he announced a drone initiative in which allies would invest more than $40 billion in counter-drone capabilities over the next five years.
Drones have "fundamentally altered" the character of modern warfare and have become a "decisive factor" on the battlefield, Rutte said, citing the Russia-Ukraine war as one example.
The U.K. is also investing heavily in autonomous systems. Under its Defence Investment Plan published in late June, the government committed £5 billion ($6.7 billion) to a "UK drone transformation" program aimed at strengthening the country's armed forces.
Germany, meanwhile, is expanding support for Ukraine. On Monday, defense software company Auterion and Ukrainian drone maker Skyfall announced a 90-million-euro order for 50,000 drones equipped with Auterion's operating system from a European NATO member. A source familiar with the matter confirmed to CNBC that the country was Germany.
"This is the first war happening at a time where drones were prevalent enough that they started to play a role," Auterion CEO Lorenz Meier told CNBC.
Software is increasingly defining the battlefield, according to Meier.
Auterion's operating system enables drones to continue striking targets despite electronic jamming, making them more effective in contested environments. "It allows them to dive into a target, even if the target has jammers, where previously they would have lost video signal and missed," Meier said.
It also allows them to strike a target that's below the radio horizon, for example, when a drone descends in a valley. The company plans to introduce software that allows operators to control coordinated swarms of drones rather than piloting each aircraft individually.
While the latest order is intended for Ukraine, Meier said the technology is already attracting interest from armed forces, including those of Germany, Norway, Britain, and France.
Low-cost drones are also increasingly being paired with high-end weapons to improve their effectiveness by distracting or overwhelming enemy air defenses.
Beyond drone makers
The growing use of drones and other autonomous systems is also boosting the demand for the technology needed to coordinate the drones in real time, according to Muharremi. That includes secure communications, battle management software, AI, and satellite-based intelligence, sensors and electronic warfare systems.
"As a result, companies with physical platform scale and exposure across autonomy, air defence, sensors, electronic warfare, software, and space are likely to capture a share of future defence spending," she said.
It comes as European core defense spending has doubled since 2019 and, under NATO's 3.5% target for 2035, could reach about 800 billion euros by 2030 – roughly 2.9 % of GDP – according to McKinsey.
Venture capital investment in defense technology also accelerated sharply in 2025 on both sides of the Atlantic. Deal volumes more than doubled year on year, according to McKinsey, and European defense tech funding rose from around 200 million euros in 2021 to 2.6 billion euros in 2025.
Among the biggest beneficiaries is Munich-based Helsing. On Monday, the company announced a funding round that valued it at $18 billion, cementing its position as one of Europe's best-funded defense technology startups.
Helsing makes drones and underwater surveillance weapons, and builds AI and autonomous software to power these military applications, highlighting how Europe's defense industry is increasingly betting that the future of warfare will depend as much on software and autonomy as on traditional military hardware.`,
    bodyJa: `欧州はロシアのウクライナ侵攻に対抗して何年もかけて軍の再建に取り組んできた。現在、投資は大陸の将来の安全保障の中心となると考えられる 1 つの技術、つまりドローンを中心にますます集中しています。
過去 2 週間にわたる一連の発表は、その変化がいかに急速に加速しているかを示しています。 NATOは新たなドローン構想を発表し、英国はドローンと対ドローンシステムに数十億ポンドを割り当て、ドイツはウクライナ向けに5万機のドローン調達に動き、防衛技術スタートアップのヘルシングは180億ドルの評価額を確保した。
この開発は軍事計画における広範な変化を反映しており、無人機と自律システムはニッチな戦場ツールから現代戦争の中核部分に移行しています。この傾向は、ドローンメーカーだけでなく、AI、ソフトウェア、電子戦、安全な通信を開発する企業にもチャンスをもたらしています。
モーニングスターのアナリスト、ロレダナ・ムハレミ氏はCNBCに対し、「将来の防衛は多層的な戦場に向かって進んでおり、例えば戦車は単に砲弾を発射するだけでなく、無人機を発射し、衛星や（無人航空機）からリアルタイムの照準データを受信し、戦場全体で情報を共有し、ネットワーク化された部隊の一部として活動することになる」と語った。
ウクライナが戦場で得た教訓は、イランが中東で低コストのシャヘド・ドローンを使用していることと並行して、情報を収集し、通常兵器の射程を延長し、ますます自律的に運用できる比較的安価なAI搭載ドローンの重要性を示している。
ドローンは現代の戦争でどのように使用されていますか?
こうした戦場での教訓は現在、ヨーロッパ全土で調達の決定を再構築しつつある。
先週、NATO事務総長のマーク・ルッテは、同盟国が今後5年間で対ドローン能力に400億ドル以上を投資するドローン構想を発表し、軍事同盟は「ドローン対応」になるだろうと述べた。
ルッテ氏は、無人機は現代の戦争の性格を「根本的に変え」、戦場では「決定的な要因」になったと述べ、一例としてロシア・ウクライナ戦争を挙げた。
英国も自動運転システムに多額の投資を行っている。政府は6月末に発表した国防投資計画に基づき、国軍の強化を目的とした「英国無人機変革」プログラムに50億ポンド（67億ドル）を投入した。
一方、ドイツはウクライナへの支援を拡大している。月曜日、防衛ソフトウェア会社オーテリオンとウクライナのドローンメーカースカイフォールは、欧州のNATO加盟国からオーテリオンのオペレーティングシステムを搭載したドローン5万機を9000万ユーロで発注したと発表した。関係筋はＣＮＢＣに対し、その国がドイツであることを認めた。
オーテリオンのロレンツ・マイヤー最高経営責任者（CEO）はCNBCに対し、「ドローンが十分に普及し、ドローンが役割を果たし始めた時期に起きた初めての戦争だ」と語った。
マイヤー氏によると、ソフトウェアは戦場をますます定義づけるようになっています。
オーテリオンのオペレーティング システムにより、ドローンは電子妨害にもかかわらず目標を攻撃し続けることができるため、紛争環境でのドローンの効果がさらに高まります。 「これにより、標的に妨害装置が設置されている場合でも、以前ならビデオ信号が失われて見逃していたであろう標的に飛び込むことが可能になる」とマイヤー氏は語った。
また、ドローンが谷に降下する場合など、電波の地平線の下にある目標を攻撃することも可能になります。同社は、オペレーターが各航空機を個別に操縦するのではなく、ドローンの群れを調整して制御できるソフトウェアを導入する予定だ。
今回の発注はウクライナを対象としているが、マイヤー氏は、この技術はすでにドイツ、ノルウェー、英国、フランスを含む軍隊からの関心を集めていると述べた。
低コストのドローンは、敵の防空を妨害したり圧倒したりすることで効果を高めるために、高性能兵器と組み合わせられることも増えています。
ドローンメーカーを超えて
ムハレミ氏によると、ドローンやその他の自律システムの利用が拡大していることにより、ドローンをリアルタイムで調整するために必要な技術の需要も高まっているという。これには、安全な通信、戦闘管理ソフトウェア、AI、衛星ベースのインテリジェンス、センサー、電子戦システムが含まれます。
「その結果、物理的なプラットフォームの規模と自治、防空、センサー、電子戦、ソフトウェア、宇宙にわたるエクスポージャーを持つ企業が、将来の国防支出のシェアを獲得する可能性が高い」と同氏は述べた。
マッキンゼーによると、欧州の中核的国防支出が2019年以来倍増しており、NATOの2035年までの3.5％目標の下では、2030年までに約8000億ユーロ（GDPの約2.9％）に達する可能性があるという。
防衛技術へのベンチャーキャピタルの投資も、2025 年には大西洋の両側で急激に加速しました。マッキンゼーによると、取引額は前年比で2倍以上に増加し、欧州の防衛技術資金は2021年の約2億ユーロから2025年には26億ユーロに増加した。
最大の恩恵を受けたのはミュンヘンに本拠を置くヘルシングだ。同社は月曜日、180億ドルと評価される資金調達ラウンドを発表し、ヨーロッパで最も資金を集めた防衛技術新興企業の1つとしての地位を固めた。
ヘルシングはドローンや水中監視兵器を製造し、これらの軍事用途を強化するAIや自律型ソフトウェアを構築しており、ヨーロッパの防衛産業が戦争の将来が従来の軍事ハードウェアだけでなくソフトウェアや自律性に依存することへの賭けをますます強めていることを浮き彫りにしている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/drones-defense-europe-autonomous-weapons.html",
    publishedAt: "2026-07-15T05:05:26+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 6,
  },
  {
    id: "oil-rises-as-u-s-continues-to-strike-teh-e05aebf8",
    title: "Oil rises as U.S. continues to strike Tehran, reinstates blockade of Iranian ports",
    titleJa: "米国がテヘラン攻撃を続け、イランの港湾封鎖を再開する中、原油が上昇",
    summaryJa: "米軍がテヘランに対して再度攻撃を実施し、米国がホルムズ海峡近くのイラン港湾の海上封鎖を再開したため、水曜日の不安定な取引の中で原油価格が上昇した。米国ウエスト・テキサス・インターミディエイト先物８月限は１．０１％上昇し、１バレル＝８０．１４ドルとなった。国際ベンチマークであるブレントの９月先物は１．２３％上昇し、８５．７７ドルとなった。",
    bodyOriginal: `Oil prices rose in choppy trading Wednesday as U.S. forces carried out another round of strikes against Tehran and Washington reinstated its naval blockade of Iranian ports near the Strait of Hormuz.
U.S. West Texas Intermediate futures for August delivery rose 1.01% to $80.14 per barrel. September Futures for international benchmark Brent were up 1.23% at $85.77.
U.S. Central Command said late Tuesday stateside that it had carried out another wave of strikes against Iran late Tuesday, targeting dozens of military assets near the Strait of Hormuz and along Iran's coastline in a seven-hour operation.
The attacks, involving fighter aircraft, drones and naval vessels, struck missile and drone facilities, naval assets and coastal defense systems to further degrade Iran's ability to threaten commercial shipping, Centcom said.
The operation started as U.S. forces resumed a naval blockade on vessels traveling to and from Iranian ports earlier in the day.
In a subsequent social media statement, Centcom Commander Brad Cooper said Iran had "intentionally" targeted civilians and attacked seven commercial vessels over the previous week, leaving roughly a dozen crew members dead, missing or injured.
"The latest escalation shows how expectations of a rapid opening of then Strait were premature," said Saul Kavonic, senior energy analyst at Mst Marquee.
"The hostilities and reimposed blockade set the conflict back on an escalatory trajectory," he told CNBC in an email. "Oil could retest $100 if the current intensity of hostilities persist for a few weeks, or head higher still if regional oil infrastructure is targeted."`,
    bodyJa: `米軍がテヘランに対して再度攻撃を実施し、米国がホルムズ海峡近くのイラン港湾の海上封鎖を再開したため、水曜日の不安定な取引の中で原油価格が上昇した。
米国ウエスト・テキサス・インターミディエイト先物８月限は１．０１％上昇し、１バレル＝８０．１４ドルとなった。国際ベンチマークであるブレントの９月先物は１．２３％上昇し、８５．７７ドルとなった。
米中央軍は火曜日遅く、ホルムズ海峡付近とイランの海岸線に沿った数十の軍事施設を標的とし、７時間の作戦でイランに対する新たな攻撃を実施したと米国内で火曜日遅くに発表した。
セントコムによると、戦闘機、無人機、海軍艦艇を使った攻撃は、ミサイルや無人機の施設、海軍資産、沿岸防衛システムを攻撃し、商業船舶を脅かすイランの能力をさらに低下させた。
この作戦は、米軍が同日早朝にイラン港を出入りする船舶に対する海上封鎖を再開したことを受けて開始された。
その後のソーシャルメディア声明で、セントコム司令官のブラッド・クーパー氏は、イランが「意図的に」民間人を標的にし、前週に7隻の商船を攻撃し、乗組員約12人が死亡、行方不明、負傷したと述べた。
「最近の事態の拡大は、当時の海峡が急速に開通するという期待がいかに時期尚早だったかを示している」と、マスト・マーキーの上級エネルギーアナリスト、ソール・カボニック氏は述べた。
「敵対行為と封鎖の再発動により、紛争は再びエスカレートする軌道に戻った」と同氏は電子メールでCNBCに語った。 「現在の戦闘の激しさが数週間続く場合、石油価格は100ドルを再試行する可能性があるが、地域の石油インフラが標的にされる場合はさらに上昇する可能性がある。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/oil-prices-today-brent-wti-hormuz-blockade.html",
    publishedAt: "2026-07-15T02:58:47+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "china-posts-slowest-quarterly-growth-sin-23f5c3b4",
    title: "China posts slowest quarterly growth since 2022 as investment slumps, fanning stimulus calls",
    titleJa: "中国は投資低迷で景気刺激策を求める声が高まり、2022年以来最も低い四半期成長率を記録",
    summaryJa: "第２・四半期の中国経済は２０２２年第４・四半期以来の弱いペースで拡大し、消費の低迷が続く一方、投資の減少加速で成長へのひずみが深まる中、政策刺激策を求める声が強まった。国家統計局が水曜日に示した4～6月期の国内総生産（GDP）成長率は4.3％となり、ロイター調査によるエコノミスト予想の4.5％成長を下回り、第1四半期の5％から鈍化した。",
    bodyOriginal: `China's economy in the second quarter expanded at its weakest pace since the fourth quarter of 2022, reinforcing calls for policy stimulus as an accelerating slide in investments deepened the strain on growth, while consumption stayed subdued.
Gross domestic product growth came in at 4.3% in the April to June period, data from the National Statistics Bureau showed Wednesday, missing economists' forecast for 4.5% growth in a Reuters poll, and slowing from 5% in the first quarter.
That second-quarter growth came below Beijing's full-year growth target range of 4.5% to 5%, the least ambitious goal in decades, amid tensions with trade partners, including the U.S. and the European Union, and sluggish domestic demand.
Given the disappointing growth, Tianchen Xu, senior economist at Economist Intelligence Unit, expects stimulus measures to be ramped up in the third quarter, including a policy rate cut to stimulate investment demand.
Urban fixed-asset investment, including real estate development and infrastructure projects, declined 5.7% in the first six months from a year earlier, worse than expectations for a 4.9% drop in a Reuters poll, and steepening from a 4.1% contraction in the first five months.
Xu attributed the steepening investment slump to local governments channeling resources into debt restructuring and a shortage of eligible projects in the pipeline. "Boosting infrastructure investment will be a key focus for stabilizing growth."
In June, China's retail sales grew 1%, rebounding from a 0.6% drop in the prior month and exceeding economists' forecast for a 0.1% fall. Retail sales in May posted their first monthly decline since late 2022, dragged down by tepid demand and merchants' steep discounting.
Industrial output expanded 5.3% in June from a year ago, stronger than the forecast 4.7% growth, and gaining pace from 4.5% expansion in May.
Chinese economy has grappled with a deepening supply-demand imbalance. Robust industrial production and exports tied to the global AI investment boom continue to power headline growth, even as consumption and private investment weakens amid a prolonged property downturn and volatile energy prices.
The statistics bureau noted "acute" imbalance between excess supply and sluggish demand, urging policymakers to step up "counter- and cross-cyclical adjustments."
Urban investment slumped for the first time in decades last year, falling 3.8% from a year earlier, as a prolonged property downturn and tighter constraints on local governments' borrowing have hampered one of China's traditional growth drivers.
Chinese urban unemployment stood at 5% in June. The leadership is targeting an unemployment rate of less than 5.5% over the next five-year period.
— CNBC's Evelyn Cheng contributed to the report.`,
    bodyJa: `第２・四半期の中国経済は２０２２年第４・四半期以来の弱いペースで拡大し、消費の低迷が続く一方、投資の減少加速で成長へのひずみが深まる中、政策刺激策を求める声が強まった。
国家統計局が水曜日に示した4～6月期の国内総生産（GDP）成長率は4.3％となり、ロイター調査によるエコノミスト予想の4.5％成長を下回り、第1四半期の5％から鈍化した。
この第２・四半期の成長率は、米国や欧州連合（ＥＵ）を含む貿易相手国との緊張や内需の低迷を背景に、中国政府の通期成長率目標範囲である４．５─５％を下回り、ここ数十年で最も野心的ではない目標となった。
エコノミスト・インテリジェンス・ユニットのシニアエコノミスト、ティエンチェン・シュウ氏は、期待外れの成長を踏まえ、投資需要を刺激するための政策金利引き下げを含む景気刺激策が第３・四半期に強化されると予想している。
不動産開発やインフラプロジェクトを含む都市部の固定資産投資は１─６月に前年同期比５．７％減少し、ロイター調査の予想（４．９％減）よりも悪化し、１─６月の４．１％減から急減速した。
Xu氏は、投資不振の深刻化は地方政府が債務再編に資源を注ぎ込んでいることと、パイプラインにある適格プロジェクトの不足が原因であると指摘した。 「インフラ投資の促進が成長を安定させるための重要な焦点となるだろう。」
６月の中国の小売売上高は１％増加し、前月の０．６％減から回復し、エコノミスト予想の０．１％減を上回った。 5月の小売売上高は、需要の低迷と加盟店の大幅な値引きに引きずられ、2022年後半以来初めて月間減少を記録した。
6月の鉱工業生産は前年同月比5.3％増と、予想の4.7％増を上回り、5月の4.5％増から勢いを増した。
中国経済は深刻化する需給不均衡に直面している。長引く不動産不況と不安定なエネルギー価格の影響で消費と民間投資が低迷する中でも、世界的なAI投資ブームに伴う堅調な鉱工業生産と輸出が引き続き主要成長を牽引している。
統計局は過剰供給と需要低迷の間の「深刻な」不均衡を指摘し、政策当局者に「カウンターシクリカル調整」と「クロスシクリカル調整」を強化するよう促した。
長引く不動産不況と地方政府の借り入れ制限強化が中国の伝統的な成長原動力の一つを妨げたため、都市投資は昨年、数十年ぶりに前年比3.8％減と数十年ぶりに低迷した。
中国の都市部の失業率は6月に5％だった。指導部は今後５年間の失業率を５．５％未満にすることを目標としている。
— CNBC の Evelyn Cheng がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/15/china-gdp-retail-sales-investment-june-.html",
    publishedAt: "2026-07-15T02:47:52+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "china-economic-growth-falls-sharply-miss-92628fb4",
    title: "China economic growth falls sharply, missing target",
    titleJa: "中国の経済成長率は大幅に低下、目標未達成",
    summaryJa: "中国の経済成長率は大幅に低下、目標未達成- 公開されました",
    bodyOriginal: `China economic growth falls sharply, missing target
- Published
China's economic growth slowed sharply between the start of April and end of June as weak demand domestically and the impact of the Iran war on oil prices overshadowed the country's strong exports.
Official gross domestic product (GDP) figures showed that the world's second largest economy grew in the second quarter of the year by 4.3%, below Beijing's annual target.
The announcement comes a day after government data showed that China's exports jumped by 27% in June compared to a year earlier.
In March, China cut the target to a range of 4.5%-5%, its lowest economic expansion goal since 1991 - a move some analysts say gives officials more flexibility in managing the economy.
The figures mark the first full quarter of GDP data since the start of the Iran war on 28 February and comes after a rise of 5% in the first quarter.
Separate data released on Wednesday highlighted the economic challenges Beijing is facing at home - including a long-running property market slump and weak consumer spending.
New home prices contracted again, although the 0.1% fall in June was at a slightly slower pace than the previous month.
But retail sales rose by 1% in June, improving from a 0.6% decrease in May.
Customs data for June, which was released on Tuesday, showed that China's tech exports were boosted by soaring global demand for semiconductors to power artificial intelligence (AI) data centres.
Surging demand for Chinese electric vehicles (EVs) also gave a major boost to China's exports - with monthly car exports topping one million for the first time.`,
    bodyJa: `中国の経済成長率は大幅に低下、目標未達成
- 公開されました
中国の経済成長は、国内需要の低迷と原油価格へのイラン戦争の影響が同国の堅調な輸出に影を落としたため、4月初めから6月末にかけて急激に減速した。
公式の国内総生産（GDP）統計によると、世界第2位の経済大国の今年第2四半期の成長率は4.3％で、中国政府の年間目標を下回った。
この発表は、6月の中国の輸出が前年比27％増加したことが政府統計で示された翌日に行われた。
中国は3月に目標を4.5％から5％の範囲に引き下げ、これは1991年以来最低の景気拡大目標であるが、一部のアナリストはこの措置により当局が経済運営に柔軟性を与えると述べている。
この数字は、2月28日のイラン戦争開始以来、初めての四半期全体のGDP統計となり、第1四半期の5％上昇に続くものとなった。
水曜日に発表された別のデータは、長期にわたる不動産市場の低迷や個人消費の低迷など、中国政府が国内で直面している経済的課題を浮き彫りにした。
新築住宅価格は再び縮小したが、６月の０．１％下落ペースは前月より若干鈍化した。
しかし、６月の小売売上高は１％増加し、５月の０．６％減から改善した。
火曜日に発表された6月の税関統計は、人工知能（AI）データセンターの動力源となる半導体の世界的な需要の急増により、中国のハイテク輸出が増加したことを示した。
中国の電気自動車（EV）に対する需要の急増も中国の輸出を大きく押し上げ、月間自動車輸出台数が初めて100万台を突破した。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cd959x4edy8o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-15T02:22:23+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c8de/live/7e6a3480-7f40-11f1-ba68-9b76167cb04b.jpg",
    readTime: 2,
  },
  {
    id: "brace-for-4-gas-again-how-u-s-iran-tensi-454411a2",
    title: "Brace for $4 gas again: How U.S.-Iran tensions are threatening to end the price break at the pump",
    titleJa: "4ドルのガソリンを再び用意せよ：米国とイランの緊張がどのようにして価格破壊を終わらせる恐れがあるのか",
    summaryJa: "米国人はここ数週間でガスポンプにある程度の安堵感を得ており、インフレを抑制するのに十分だった。米国とイランがホルムズ海峡の制海権を巡って争いを続ける中、この状況は長くは続かないかもしれない。",
    bodyOriginal: `Americans got some relief at the gas pump in recent weeks, enough to slow down inflation. That might not last long as the U.S. and Iran continue to vie for control of the Strait of Hormuz.`,
    bodyJa: `米国人はここ数週間でガスポンプにある程度の安堵感を得ており、インフレを抑制するのに十分だった。米国とイランがホルムズ海峡の制海権を巡って争いを続ける中、この状況は長くは続かないかもしれない。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/brace-for-4-gas-again-how-u-s-iran-tensions-are-threatening-to-end-the-price-break-at-the-pump-343a76e1?mod=mw_rss_topstories",
    publishedAt: "2026-07-15T00:28:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-94092618",
    readTime: 2,
  },
  {
    id: "i-changed-jobs-10-times-in-10-years-to-g-a789c642",
    title: "I changed jobs 10 times in 10 years to get the career I wanted",
    titleJa: "希望のキャリアを得るために10年間で10回転職しました",
    summaryJa: "希望のキャリアを得るために10年間で10回転職しました- 公開されました",
    bodyOriginal: `I changed jobs 10 times in 10 years to get the career I wanted
- Published
Brittany Harris-Nelson describes her career journey so far as being like "a frog moving across lily pads".
"Each step brought me closer to where I ultimately wanted to be, even if the path wasn't always linear," says the 32-year-old.
Today, Harris-Nelson works in a mid-level administrative position at Wake Forest University in Winston-Salem, North Carolina, a role she had long coveted.
She says that to get there, she leapt from one college job to another for close to a decade, using each new role to gain specialised skills that would help with her career advancement.
Overall, she has had 10 different jobs at six different universities over the past decade, starting with several positions when she was still a student, and then three full-time roles.
Harris-Nelson has been an office manager, an admissions counsellor and a student advisor, before reaching her current position as assistant director of student engagement.
While she does not wish to reveal how much she now earns, she says that as she changed jobs her salary didn't increase much. But she got more benefits, such as extra paid leave and bigger pension contributions from her employer.
"Each role helped me build skills and perspectives that I didn't yet have, and together those experiences prepared me for the work I do today," she says.
And she's not alone.
Gen Z job hop more
Industry professionals have identified the emergence of a new work trend among members of Gen Z (those born from 1997–2012), called "lily padding".
It refers to young adults hopping from job to job to try to improve their skills and chances of getting more senior roles and higher pay, rather than staying put in one role at one company. The idea is that they supercharge their employability.
The data seems to back up the phenomenon. The average tenure of a Gen Z employee in the first five years of their career is just 1.1 years, compared with 1.8 years for millennials (those born between 1981 and 1996), and almost three years for older generations. That is according to a 2024 global survey, external of 11,250 workers by recruitment agency Randstad.
This increased mobility in the job market leads to increased salaries, at least in the UK, one 2025 report found., external The study by financial company Wealthify said that people who changed jobs four or more times over the previous decade earned an average of £39,276 versus £30,088 for other workers - a 31% premium.
Those who describe their career strategies as "lily padding" are always on the lookout for the next opportunity.
That's the case of Adam Smiley Poswolsky, who is now a 42-year-old public speaker and author who talks and writes about how to improve workplace cultures.
Based in San Francisco, he says that the traditional career ladder mindset of staying at one company and working your way up didn't apply to him. Instead, he adds that he was looking for "meaning and purpose" in his work and life.
He says that to achieve this he moved between government, non-profit, creative and corporate work, and had a host of jobs in 15 years.
His gigs have included – project leader for Peace Corps, the US government agency that allows young Americans to do voluntary work overseas; and being an English teacher at Harvard University.
Poswolsky has also been a location scout for Warner Bros, a film producer in New York City, worked on Barack Obama's successful 2008 presidential election campaign, a public speaker at the youth-leadership programme, and the fellow of a think tank.
Throughout his career, he says he's sought interesting work and developed skills that helped him get to where he is now - writing books and being a well-paid public speaker.
"In each of my jumps, I was very clear on being ready for something new, but I also knew the skillset I was taking from one experience to the next," he says.
Poswolsky concludes that he's glad he's found flexibility and happiness through this career evolution rather than via a vertical corporate structure. He adds that he has also eventually managed to match the $70,000 (£52,000) he earned at the Peace Corps back when he was 28.
"The skills I learned in that government job helped me as a writer, which then led to me writing a book, which led to my current career as a professional keynote speaker."
'People want variety and pace'
Nicola Grant, chief people officer at UK insurance provider Hiscox, says she's noticed a broader shift in how people think about their careers.
Increasingly, individuals – particularly earlier in their careers, she says - want to build a breadth of experience faster, rather than follow a single, linear path. They are building a portfolio of skills.
She's also found there's a greater willingness among younger employees to move if they feel their development is slowing, or their options are limited.
"Expectations have changed; people want variety, pace and to build skills that will remain relevant," she says, "It's about a desire for growth."
"That ultimately benefits both the individual and the organisation," she adds.
Lucy Kemp, a strategic brand and communications leader at the IT company La Fosse and an employee experience specialist, agrees.
To her, lily padding is the future of work, not just a trend, as people who follow the tactic try to reach more senior roles and higher pay.
"Younger people have seen that loyalty doesn't pay off," says Kemp. "They want to shape their own careers, based on skills they value.
"There's a different sense of achievement compared to older generations, a completely different experience of work," she says.
Kemp also points out that learning in the office from peers isn't occurring as much since the pandemic, with people working from home and AI taking over basic tasks.
Instead, people are looking at skills that will be relevant in five years' time. And they'll get them by switching to a project on another team, a switch to another sector, or a job at another company, Kemp says. "People just want to learn something new and have a purpose."
That's how Harris-Nelson feels. "I see my career as an ongoing journey rather than a destination," she says. "I'm always learning and growing."
Related topics
- Published28 May
- Published30 June`,
    bodyJa: `希望のキャリアを得るために10年間で10回転職しました
- 公開されました
ブリタニー・ハリス・ネルソンは、これまでのキャリアの旅を「スイレンの葉の上を移動するカエル」のようだったと表現しています。
「たとえその道が必ずしも直線的ではなかったとしても、一歩一歩が私を最終的になりたかった場所に近づけてくれました。」と 32 歳の彼は言います。
現在、ハリス・ネルソンはノースカロライナ州ウィンストン・セーラムにあるウェイク・フォレスト大学で中級管理職に就いており、これは彼女が長年切望していた役職である。
彼女は、そこに到達するために、10 年近く大学での仕事を転々とし、新しい役割を担うたびに、キャリアアップに役立つ専門スキルを習得したと語ります。
全体として、彼女は過去 10 年間に 6 つの異なる大学で 10 の異なる仕事に就き、学生時代にいくつかの役職に就き、その後 3 つのフルタイムの役職に就きました。
ハリス・ネルソンは、学生エンゲージメント部門のアシスタントディレクターとしての現在の職に就く前に、オフィスマネージャー、入学カウンセラー、学生アドバイザーを務めてきました。
現在の収入は明かしたくないが、転職しても給料はあまり上がらなかったという。しかし、彼女は追加の有給休暇や雇用主からのより多くの年金拠出金など、より多くの恩恵を受けました。
「それぞれの役割は、私がまだ持っていなかったスキルや視点を構築するのに役立ち、それらの経験が合わさって、今日の仕事の準備を整えてくれました」と彼女は言います。
そして彼女は一人ではありません。
Z世代のジョブホップの増加
業界専門家らは、Z世代（1997年から2012年生まれ）の間で「リリー・パディング」と呼ばれる新たな働き方トレンドが台頭していることを確認した。
これは、1つの会社で1つの役割に留まるのではなく、自分のスキルを向上させ、より上級の役割やより高い給与に就くチャンスを得るために、職を転々とする若者を指します。そのアイデアは、彼らの雇用可能性を大幅に高めることです。
データはこの現象を裏付けているようだ。 Z世代の従業員のキャリア最初の5年間の平均在職期間はわずか1.1年であるのに対し、ミレニアル世代（1981年から1996年生まれ）の平均在職期間は1.8年、それより上の世代ではほぼ3年です。これは、人材紹介会社ランスタッドが従業員1万1,250人を対象とした2024年の世界的な調査によるものである。
金融会社ウェルシファイの調査によると、雇用市場における流動性の向上により、少なくとも英国では給与の増加が見込まれており、過去10年間に4回以上転職した人の平均収入は3万9,276ポンドであるのに対し、他の労働者の平均収入は3万9,276ポンドで、31％のプレミアムとなっている。
自分のキャリア戦略を「百合の詰め物」と表現する人は、常に次の機会を虎視眈々と狙っています。
それが、現在 42 歳の講演者であり、職場文化を改善する方法について講演したり執筆した作家であるアダム・スマイリー・ポズウォルスキーの場合です。
サンフランシスコに拠点を置く彼は、1 つの会社に留まり、昇進していくという従来のキャリアラダーの考え方は自分には当てはまらなかったと語ります。その代わりに、自分の仕事と人生に「意味と目的」を探していたと付け加えた。
これを達成するために、政府、非営利、クリエイティブ、企業の仕事を渡り歩き、15 年間で数多くの仕事を経験したと彼は言います。
彼の仕事には、アメリカの若者が海外でボランティア活動をすることを許可する米国政府機関である平和部隊のプロジェクトリーダーが含まれます。そしてハーバード大学で英語教師をしています。
ポズウォルスキー氏はまた、ワーナー・ブラザーズのロケスカウト、ニューヨーク市の映画プロデューサー、バラク・オバマの成功した2008年大統領選挙キャンペーンに取り組み、若者リーダーシップ・プログラムの講演者、そしてシンクタンクのフェローでもあった。
彼はキャリアを通して、面白い仕事を探し、スキルを磨いて、本を書いたり、高給取りの講演者として現在の地位に到達したと語ります。
「それぞれのジャンプで、何か新しいことへの準備ができていることは非常に明確でしたが、同時に、ある経験から次の経験に至るまでにどのようなスキルセットが必要かも知っていました」と彼は言います。
ポズウォルスキー氏は、垂直的な企業構造ではなく、このキャリアの進化を通じて柔軟性と幸福を見つけられてよかったと結論付けています。最終的には、28歳のときに平和部隊で稼いだ7万ドル（5万2000ポンド）に匹敵する金額に達することができたと付け加えた。
「政府の仕事で学んだスキルは作家としての私に役立ち、それが本を書くことにつながり、それがプロの基調講演者としての現在のキャリアにつながりました。」
「人々は多様性とペースを求めています」
英国の保険会社ヒスコックスの最高人事責任者であるニコラ・グラント氏は、人々のキャリアに対する考え方が広範囲に変化していることに気づいたと語る。
彼女によると、個人は、特にキャリアの初期段階では、単一の直線的な道をたどるのではなく、幅広い経験をより早く構築したいと考えています。彼らはスキルのポートフォリオを構築しています。
彼女はまた、若い従業員の間で、自分の成長が遅れている、または選択肢が限られていると感じた場合、異動する意欲がより高いことも発見しました。
「期待は変わりました。人々は多様性、ペース、そして時代に通用するスキルを身につけることを望んでいます。それは成長への欲求に関するものです。」と彼女は言います。
「それは最終的に個人と組織の両方に利益をもたらします」と彼女は付け加えた。
IT企業ラ・フォッセの戦略的ブランドおよびコミュニケーションリーダーであり、従業員エクスペリエンスのスペシャリストでもあるルーシー・ケンプ氏もこれに同意する。
彼女にとって、ユリの詰め物は単なるトレンドではなく、仕事の未来であり、この戦術に従う人々はより上級の役割とより高い給料を獲得しようとしているからです。
「若い人たちは、忠誠心が報われないことを知っています」とケンプ氏は言う。 「彼らは、自分が大切にしているスキルに基づいて、自分のキャリアを形成したいと考えています。
「上の世代とは異なる達成感があり、仕事の経験も全く異なります」と彼女は言う。
ケンプ氏はまた、パンデミック以降、人々が在宅勤務をし、AIが基本的なタスクを引き継いでいるため、オフィスで同僚から学ぶことはそれほど行われていないと指摘した。
代わりに、人々は 5 年後に役立つスキルに注目しています。そして、別のチームのプロジェクトに切り替えるか、別のセクターに切り替えるか、別の会社に就職することで、それらを獲得できるだろうとケンプ氏は言う。 「人々はただ何か新しいことを学び、目的を持ちたいだけなのです。」
それがハリス・ネルソンの気持ちです。 「私は自分のキャリアを目的地ではなく、進行中の旅だと考えています」と彼女は言います。 「私は常に学び、成長しています。」
関連トピック
- 5 月 28 日発行
- 6 月 30 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/ce8kxgpe3kdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T23:04:15+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b112/live/176aa4b0-7c32-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 8,
  },
  {
    id: "buy-now-pay-later-rules-to-bring-refunds-d5fa440f",
    title: "Buy Now Pay Later rules to bring refunds and rejections",
    titleJa: "今すぐ購入して後で払い戻しと拒否を行うためのルール",
    summaryJa: "今すぐ購入して後で払い戻しと拒否を行うためのルール- 公開されました",
    bodyOriginal: `Buy Now Pay Later rules to bring refunds and rejections
- Published
Shoppers using Buy Now Pay Later (BNPL) services have stronger rights but some will be refused loans, as new rules come into effect.
From Wednesday, BNPL lenders must have regulator approval to operate, giving shoppers more access to refunds and independent rulings on unresolved complaints if things go wrong.
Providers such as Klarna and Clearpay have become huge operators allowing consumers to pay in interest-free instalments, but campaigners have often described the wider sector as an unregulated Wild West.
But there are fears that new affordability checks on each BNPL transaction will leave some blocked for the first time, pushing them towards "thrilled" loan sharks instead.
"While regulation is clearly needed and welcomed, our recent research found that nearly half of those likely to be rejected have not missed a BNPL payment," said Kate Pender, chief executive of not-for-profit Fair4All Finance, which promotes fair and accessible financial services.
"The need for credit doesn't just disappear when you can't access it and people are often pushed towards more expensive or unregulated alternatives."
What's changing under new rules
Only lenders authorised by the Financial Conduct Authority (FCA) will now be able to offer BNPL services, bringing them more in line with credit card providers and banks offering loans.
It also means:
Customers can now refer new unresolved complaints about BNPL services to the Financial Ombudsman Service (FOS) for independent adjudication. The FOS expects to deal with about 2,000 cases by the end of March
Consumers can claim for refunds and compensation for faulty goods costing more than £100 from the BNPL provider (known as section 75), as is already the case with items bought on a credit card
Shoppers must pass an instant and automatic test that they can repay the loan, otherwise the purchase via BNPL will be blocked
Borrowers must get clear upfront information about the loan such as what happens if a payment is missed, and be directed to free debt advice if they are in financial difficulty
Regulators say stricter regulation will prevent people from splashing out on something unaffordable in a few clicks, taking on too much debt and being caught out by late payment fees.
But Pender estimated 10% to 30% of BNPL users would fail "conservative" affordability checks, which are designed by each lender. This could leave many unable to buy the essentials they needed.
Loan sharks would be "thrilled at the prospect", she told BBC News, with younger people or those who had repayment issues in the past among those more likely to be rejected.
BNPL has proved particularly popular with 18 to 24-year-olds, although it has widespread use among all age groups.
'It didn't feel like debt'
Many debt charities have welcomed the changes, which they say have come after years of delay. They are still urging people to pause before buying anything via BNPL, to consider whether they would have bought it even if it was not available on credit.
They point out that some retailers' in-house BNPL products will fall outside of the new regulation.
Advice service Money Wellness said its figures suggest people were increasingly spreading smaller purchases across multiple BNPL agreements rather than using the product for occasional high-value items.
"Our concern isn't Buy Now Pay Later itself. It's what can happen when people begin relying on multiple forms of credit simply to make ends meet," said Matthew Sheeran, its external relations manager.
Tim Riesner was among those who took out various loans, including BNPL, only to face problems when his life changed.
"It didn't feel like debt. It felt like convenience. You're buying something online and it says 'split it, pay later'. You think you're being sensible. But you can have multiple plans running at once," he said.
"Before you know it, it's thousands. Add in loans, credit cards, bits of finance here and there, and suddenly I owed £24,000."
His finances unravelled after having to give up well-paid work in construction after suffering problems with his eyesight.
"Nobody should have any sympathy for me at all. I'm an adult. I knew what I was doing. The responsibility lies with me. However, advertising is very seductive. It draws you in, because the society that we live in is the society that says you can have it, and you can have it right now," he told the BBC.
After a tough and dark period, he spoke to charity Business Debtline, where staff helped him to go through his debts, organise a Debt Relief Order, and he is now well on his way to being debt-free.
Jack Sporcic, debt adviser at National Debtline, said: "We are urging consumers to treat Buy Now Pay Later in exactly the same way as any other form of borrowing.
"We often see people using Buy Now Pay Later for everyday essentials such as food, energy bills and household basics."
Bill debt soars but many don't know help is available
- Published10 June
One million more UK homeowners set to face higher mortgages
- Published7 July
How to change bank, energy or broadband provider and save money
- Published2 days ago
Credit reference agency Experian, which already receives data voluntarily from some providers estimated that more than 100 million BNPL transactions were made by 8.5 million customers in 2025, worth more than £7bn in spending.
Of that spending, 98.5% of balances were repaid on time, it said.
Leading BNPL providers have supported regulation of the sector, albeit with calls to allow them to innovate.
"The FCA's rules largely formalise what we already do - we run affordability checks, show costs upfront and report to credit reference agencies," said a spokesman for Klarna, which says the average age of its customers is 38.
"Interest-free buy now pay later is a simpler, fairer, lower-cost alternative to revolving credit. Robust regulation that gives consumers added confidence and strengthens their access to protections is a good thing."`,
    bodyJa: `今すぐ購入して後で払い戻しと拒否を行うためのルール
- 公開されました
Buy Now Pay Later (BNPL) サービスを利用する買い物客にはより強力な権利が与えられますが、新しい規則が施行されると一部の買い物客はローンを拒否されます。
水曜日から、BNPLの貸し手は営業するには規制当局の承認が必要となり、買い物客は事態が悪化した場合に返金や未解決の苦情に対する独立した裁定を受けやすくなる。
KlarnaやClearpayなどのプロバイダーは、消費者が無利息の分割払いを行えるようにする巨大事業者となったが、活動家らは、この業界全体を規制のない未開拓の西部とよく表現する。
しかし、各BNPL取引に対する新たな手頃な価格チェックにより、一部の取引が初めてブロックされ、代わりに「興奮した」高利貸しに誘導されるのではないかとの懸念がある。
公平で利用しやすい金融サービスを推進する非営利団体フェア４オール・ファイナンスの最高経営責任者ケイト・ペンダー氏は、「規制は明らかに必要であり、歓迎されているが、最近の調査では、拒否される可能性が高い人の半数近くがＢＮＰＬの支払いを逃していないことが判明した」と述べた。
「クレジットにアクセスできなくなっても、クレジットの必要性は消えるわけではなく、人々はより高価な、または規制されていない代替手段に駆り立てられることがよくあります。」
新しいルールの下で何が変わるのか
金融行動監視機構（FCA）によって認可された貸し手のみがBNPLサービスを提供できるようになり、ローンを提供するクレジットカードプロバイダーや銀行とより連携することになる。
また、次のような意味もあります。
顧客は、BNPL サービスに関する新たな未解決の苦情を独立した裁定のために金融オンブズマン サービス (FOS) に照会できるようになりました。 FOS は 3 月末までに約 2,000 件の事件に対処すると予想している
クレジットカードで購入した商品の場合と同様に、消費者はBNPLプロバイダー（セクション75として知られる）に対して100ポンドを超える欠陥商品の返金と補償を請求できます。
買い物客はローンを返済できるかどうかの即時自動テストに合格する必要があります。合格しないと、BNPL 経由での購入がブロックされます。
借り手は、支払いが滞った場合に何が起こるかなど、ローンに関する明確な情報を事前に入手し、経済的に困難に陥った場合は無料の借金相談に案内される必要があります。
規制当局は、規制を強化することで、人々が数回クリックするだけで手の届かないものにお金をはねたり、多額の借金を抱えたり、延滞料を徴収されたりすることを防ぐことができると述べている。
しかし、ペンダー氏は、BNPL利用者の10～30％が、各金融機関が設計した「保守的な」手頃な価格チェックに合格しないと推定した。これにより、多くの人が必要な必需品を購入できなくなる可能性がある。
融資を断られる可能性が高いのは、若い人や過去に返済問題を抱えた人たちで、高利貸しは「その見通しに興奮している」だろうと彼女はBBCニュースに語った。
BNPL は、すべての年齢層に広く使用されていますが、特に 18 歳から 24 歳の間で人気があることがわかっています。
「借金という感じはしなかった」
多くの債務慈善団体はこの変化を歓迎しており、何年も遅れてようやく実現したとしている。彼らは依然として、BNPL経由で何かを購入する前に立ち止まり、たとえクレジットで購入できなかったとしても購入するかどうかを検討するよう人々に呼びかけている。
彼らは、一部の小売業者の自社BNPL製品は新たな規制の対象外になると指摘している。
アドバイスサービスのマネーウェルネスは、その数字は、人々が時々高額な商品のために製品を使用するのではなく、複数のBNPL契約にまたがって少額の購入をますます分散していることを示唆していると述べた。
同社の対外関係マネージャー、マシュー・シーラン氏は「われわれの懸念は、今すぐ購入して後で支払うということ自体ではない。人々が単に家計をやりくりするために複数の信用形態に依存し始めたときに起こり得ることだ」と述べた。
ティム・リースナー氏も、BNPL を含むさまざまなローンを組んだものの、人生が変わったときに問題に直面した人の一人でした。
「借金とは感じませんでした。便利だと感じました。オンラインで何かを購入すると、『分割して後で支払い』と表示されます。自分は賢明であると思われます。しかし、一度に複数のプランを実行することはできます」と彼は言いました。
「気づけば、その額は数千ポンドになっています。ローン、クレジット カード、あちこちの金融を加えると、突然 24,000 ポンドの借金を負うことになりました。」
視力の問題に悩まされ、建設業での高賃金の仕事を断念しなければならなくなった後、彼の経済は破綻した。
「誰も私に同情してはいけない。私は大人だ。自分が何をしていたかはわかっていた。責任は私にある。しかし、広告はとても魅惑的だ。広告は人を引き込む。なぜなら、私たちが住んでいる社会は、広告を手に入れることができ、今すぐ手に入れることができるという社会だからだ」と彼はBBCに語った。
厳しく暗い時期を経た後、彼は慈善団体ビジネス・デブトラインに相談し、そこでスタッフが彼の借金を整理し、債務救済命令を組織するのを手伝ってくれた。そして現在、彼は無借金生活への道を順調に進んでいる。
ナショナル・デットラインの債務アドバイザー、ジャック・スポーシック氏は、「消費者に対し、今すぐ購入して後で支払うサービスを他の借り入れとまったく同じように扱うよう促している。
「食料品、光熱費、家庭用品などの日用品に、今すぐ購入して後で支払うサービスを利用している人をよく見かけます。」
請求書の借金は急増するが、多くの人は助けが利用できることを知らない
- 6 月 10 日発行
さらに100万人の英国の住宅所有者が住宅ローンの高額化に直面する見通し
- 7 月 7 日に公開
銀行、電力会社、ブロードバンドプロバイダーを変更してお金を節約する方法
- 2 日前に公開
すでに一部のプロバイダーから自発的にデータを受け取っている信用照会機関エクスペリアンは、2025年には1億件を超えるBNPL取引が850万人の顧客によって行われ、支出額は70億ポンド以上に相当すると推定している。
この支出のうち残高の98.5％が期日通りに返済されたという。
主要なBNPLプロバイダーは、イノベーションを許可するよう求めながらも、この分野の規制を支持してきました。
顧客の平均年齢は38歳だというクラナ社の広報担当者は、「FCAの規則は、われわれがすでに行っていることをほぼ形式化したものである。われわれは手頃な価格の調査を実施し、費用を前もって提示し、信用調査機関に報告する」と述べた。
「無利子で今すぐ購入して後で支払うという方法は、リボ払いクレジットに代わる、よりシンプルで公平、低コストの代替手段です。消費者にさらなる自信を与え、保護へのアクセスを強化する強力な規制は良いことです。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9q283r9px3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T23:01:57+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d55c/live/e2e009b0-7ec0-11f1-8439-ebc9c5f19300.jpg",
    readTime: 8,
  },
  {
    id: "heating-oil-customers-to-get-compensatio-73703af8",
    title: "Heating oil customers to get compensation after price hikes",
    titleJa: "灯油の顧客、値上げ後に補償金を受け取る",
    summaryJa: "灯油の顧客、値上げ後に補償金を受け取る- 公開されました",
    bodyOriginal: `Heating oil customers to get compensation after price hikes
- Published
Heating oil customers who had their orders cancelled and prices raised when the US-Israel war with Iran broke out will get compensation, the competition watchdog has said.
Some 1,700 households were forced to "re-order at significantly higher prices or go without fuel" costing them up to £350, the Competition Markets Authority (CMA) said.
Some suppliers have agreed to compensate customers and the regulator is planning legal action against those who have so far refused to do so, it added.
The UK and Ireland Fuel Distribution Association (UKIFDA), which represents heating oil suppliers, said "there were a small number of cases found which require redress".
Wholesale oil prices jumped from around $70 a barrel at the start of Iran war in February to almost $120 a barrel by the end of March as the conflict disrupted the transportation and production of energy in the region.
UK heating oil prices also jumped around this time. The CMA said on Wednesday that "average retail prices were, at their peak, 92% higher".
The CMA's investigation into the heating oil market found the price increases after the Iran war largely reflected rising wholesale costs and suppliers have not profited materially from the crisis.
However, it concluded heating oil customers are not as well protected as those connected to the energy grid.
It has recommended new regulations over how prices are quoted and cancellations are handled as well as "better support for vulnerable consumers".
Chancellor Rachel Reeves said: "It is reassuring to know it is a competitive market but the lack of protection for these households does concern me so we will look very seriously at what can be done."
UKIFDA chief executive Ken Cronin said: "We will work with all government bodies on the recommendations set out in this report."
Meanwhile, the CMA has not said how many suppliers have agreed to compensate customers for cancelled orders, how many customers will receive a pay out, or how much they will get.
"Those who paid more to replace their cancelled order will receive a payment covering the difference, while those who did not buy replacement oil will have their original orders honoured at the agreed price," it said.
"[We are] preparing to take court-based enforcement action against firms that fail to compensate customers voluntarily," it added.
The BBC understands more details will be provided once the scheme is up and running.
The CMA's report on the heating oil sector follows a four-month investigation launched in March.
Those who use heating oil often store it in a tank outside their property and are among the first to feel the impact of rising prices.
Some 1.5 million households depend on heating oil, but do not have the same consumer protections as electricity and gas customers, according to the CMA.
Most of those are in Northern Ireland, where the watchdog says 60% of households rely on it.
'Punished for doing the sensible thing'
Anthony Maines, 31, from Seaton Delaval in Northumberland, said he had paid £463.83 for 700 litres of heating oil on 28 February.
He placed the through a broker when he saw the US and Israel first attacked Iran, but says the order was cancelled a few days later.
He says he was then forced to reorder 500 litres of oil for around £700 through a different broker.
He says he decided to lock in the cheaper price at the start of the conflict because he predicted the war would cause prices to rise.
Anthony agrees with the CMA's approach, especially after his experience.
"It felt like I was being punished for doing the sensible thing," he says.
He received a partial resolution through his broker who agreed in May to honour the original price he paid at the end of February, but by then he had already paid elsewhere at a higher price for his oil.
- Published16 March
- Published10 March`,
    bodyJa: `灯油の顧客、値上げ後に補償金を受け取る
- 公開されました
米国・イスラエルとイランの戦争勃発時に注文がキャンセルされ、価格が値上げされた灯油の顧客は補償を受けることになると競争監視団体は発表した。
競争市場庁（CMA）によると、約1,700世帯が「大幅に高い価格で再注文するか、燃料なしで生活する」ことを余儀なくされ、最大350ポンドの費用がかかったという。
一部の供給業者は顧客への補償に同意しており、規制当局はこれまでに補償を拒否した業者に対する法的措置を計画していると付け加えた。
暖房油供給業者を代表する英国・アイルランド燃料流通協会（UKIFDA）は、「救済が必要な事例が少数ながら見つかった」と述べた。
紛争により地域内のエネルギー輸送と生産が混乱したため、卸売原油価格は2月のイラン戦争開始時には1バレルあたり約70ドルだったが、3月末には1バレルあたり120ドル近くまで上昇した。
英国の暖房油価格もこの時期に急騰した。 CMAは水曜日、「平均小売価格はピーク時に92％高かった」と発表した。
CMAによる暖房油市場の調査では、イラン戦争後の価格上昇は主に卸売コストの上昇を反映しており、供給業者は危機から大きな利益を得ていないことが判明した。
しかし、灯油の顧客はエネルギー網に接続されている顧客ほど十分に保護されていないと結論付けた。
価格の見積もりやキャンセルの処理方法に関する新たな規制のほか、「弱い立場にある消費者へのサポートの強化」を勧告した。
レイチェル・リーブス財務大臣は、「競争の激しい市場であることを知って心強いが、これらの世帯への保護が欠如していることは懸念しているので、何ができるかを非常に真剣に検討する」と述べた。
UKIFDAのケン・クローニン最高経営責任者（CEO）は「我々はこの報告書に記載された勧告に基づき、すべての政府機関と協力する」と述べた。
一方、CMAは、キャンセルされた注文に対する顧客への補償に同意したサプライヤーの数や、支払いを受ける顧客の数、あるいは報酬額については明らかにしていない。
「キャンセルされた注文を交換するためにより多くの金額を支払った人は、その差額をカバーする支払いを受け取るが、交換用オイルを購入しなかった人は、合意された価格で元の注文が尊重される」と同社は述べた。
「顧客への自主的な補償を怠った企業に対して、裁判所に基づく強制措置を講じる準備を進めている」と付け加えた。
BBC は、この計画が開始され、実行され次第、より詳細な情報が提供されることを理解しています。
暖房油セクターに関するCMAの報告書は、3月に開始された4か月にわたる調査を経て発表された。
灯油を使用する人は、自宅の敷地外にあるタンクに灯油を保管していることが多く、価格高騰の影響を最初に感じる人たちです。
CMAによると、約150万世帯が灯油に依存しているが、電気やガスの顧客と同様の消費者保護を受けていない。
そのほとんどは北アイルランドにあり、監視機関によると、世帯の60％が北アイルランドに依存しているという。
「良識あることをしたから罰せられる」
ノーサンバーランド州シートン・デラバル在住のアンソニー・メインズさん（31）は、2月28日に灯油700リットルの代金として463.83ポンドを支払ったと語った。
米国とイスラエルが最初にイランを攻撃したのを見て、ブローカーを通じて注文を出したが、数日後に注文はキャンセルされたという。
その後、別のブローカーを通じて500リットルの石油を約700ポンドで再注文することを強いられたという。
同氏は、戦争が価格の上昇を引き起こすと予測したため、紛争開始時に安い価格を固定することにしたと述べた。
アンソニーは、特に自身の経験を踏まえて、CMA のアプローチに同意します。
「分別あることをしたことで罰を受けているように感じました」と彼は言う。
同氏はブローカーを通じて部分的な解決策を受け取り、ブローカーは2月末に支払った元の価格を尊重することに5月に同意したが、その時までにすでに別の場所で原油のより高い価格を支払っていた。
- 3 月 16 日公開
- 3 月 10 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy494yypnv3o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T23:00:41+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6cb5/live/a97b22b0-7f95-11f1-ac71-510b51a60620.jpg",
    readTime: 4,
  },
  {
    id: "from-wimbledon-towels-to-scotch-what-ind-943a6cf0",
    title: "From Wimbledon towels to Scotch: What India-UK trade deal could mean for shoppers",
    titleJa: "ウィンブルドンのタオルからスコッチまで：インドと英国の貿易協定が買い物客に何を意味するか",
    summaryJa: "ウィンブルドンのタオルからスコッチまで：インドと英国の貿易協定が買い物客に何を意味するか- 公開されました",
    bodyOriginal: `From Wimbledon towels to Scotch: What India-UK trade deal could mean for shoppers
- Published
In the offices of Welspun Living, the Indian company that makes championship towels for Wimbledon, preparations have been gathering pace to take full benefit of the India-UK free trade agreement (FTA) that came into effect on Wednesday.
The home textile manufacturing giant, among India's largest, supplies bedsheets and towels to several major British high-street retailers like John Lewis and Tesco among others.
"Many of these brands have been in India in recent weeks to chart a business roadmap for the next few years. We typically did joint forward planning only for our US customers, but now, with the deal, it's happening with UK clients too," Dipali Goenka, CEO of Welspun Living, told the BBC.
"In fact, as we speak, our supply chain team in London is sitting in the John Lewis office."
The FTA between the world's fifth and sixth largest economies removes or reduces tariffs on 99% of Indian exports to the UK and 90% of UK imports into India.
The British government has called it "the UK's biggest and most economically significant bilateral trade pact" since leaving the EU, with its GDP estimated to increase by 0.13%, equivalent to £4.8bn ($6.4bn), and India's by 0.06%, or £5.1bn per year in the long run because of the deal.
Labour-heavy sectors like textiles, garments, footwear, cars and marine products are counting on the agreement's implementation to spur business growth
"I'm expecting our exports to the UK to now grow in double digits," Goenka said.
She adds that India was at a disadvantage to countries like Bangladesh and Pakistan because their exports entered the UK duty-free through the Developing Countries Trading Scheme (DCTS), while India paid 12% tariffs.
But that will now change.
"If you look at just home textiles, Pakistan's share of UK exports are at around 55%, whereas India's is just 6-7%. That's the gap we can finally cover."
The pact could also be a tipping point for British alcohol and spirits companies.
The reduction of customs duties on Scotch whisky from 150% to 75% immediately and then gradually to 40% over 10 years is a "real shift, not a small tweak", says Avneet Singh of Modern Drinks Pvt Ltd, an import house based in the capital Delhi.
How much this boosts imports will become clearer in the coming months, says Singh, though he sees momentum building ahead of the new terms of trade taking effect.
"The focus has been on getting the operational side ready. That means working closely with UK suppliers to ensure certificates of origin and other trade documentation are in place, reviewing customs and compliance requirements, and co-ordinating with logistics and clearing partners so shipments can benefit from the revised tariff structure from day one," Singh said.
So far, it's been a period of "careful preparation rather than rapid expansion", he says. Bigger changes will come once businesses see the actual savings on imported goods.
Beyond these few pockets of the industry though, the overall impact of the deal could be "incremental rather than transformational", according to trade experts.
Data from the Delhi-based Global Trade Research Initiative (GTRI) think-tank shows India exported $13.4bn worth of goods to the UK in the financial year 2025-2026, yet more than half of these exports entered the country duty-free under its most favoured nation regime.
On the import side, India imported $11.7bn from the UK, and over 45% consisted of silver, which remains on India's exclusion list and is outside the agreement.
"The real test is whether products that previously faced UK tariffs of 4-16% - such as textiles, garments, footwear, carpets, cars, seafood, grapes and mangoes - see higher export orders, larger export volumes and better profit margins. Those indicators will provide the clearest evidence of the agreement's success. The FTA's impact should become visible over the next one to three years," Ajay Srivastava of GTRI told the BBC.
But several unresolved challenges, such as the UK maintaining tariffs on steel imports above a specific quota to protect domestic producers, could prove to be impediments to utilising the full scope of the deal, according to Srivastava.
The UK's proposed carbon tax (called CBAM, external) could also reduce some of the FTA gains, he adds, because even if tariffs "fall to zero under the FTA, carbon-related border charges could increase the effective cost of Indian exports in sectors covered by the CBAM, creating new trade frictions".
There are also other non-tariff barriers that continue to pose challenges.
Historically India's utilisation of FTAs has been low because small businesses are often unaware of the new rules. As a result, only about 20-30% of India's eligible exports are estimated to use FTA preferences even though import-side utilisation rates are much higher.
For example, an Indian garment exporter must actively tell a UK buyer that the import duty on shirts has fallen from 12% to zero and renegotiate prices or contracts accordingly.
Many will need training to comply with origin requirements and documentation so they can claim preferential tariffs.
"The government and industry associations will have to be proactive in dealing with these issues because otherwise tariff reductions will not automatically translate into higher exports," says Srivastava.
Yet, for India this is an opportunity that comes at the right time, especially in certain industries such as ready-made garments (RMG), according to CareEdge Research.
China holds the largest market share in UK's RMG imports; however, it has continued to lose market share due to declining competitiveness and higher labour costs. Additionally, brands are also looking to diversify sourcing from countries like Bangladesh which was gripped by socio-political turmoil until recently.
"In such a scenario, India is expected to double its market share from 6% in 2024 to 12% in the UK's RMG import in the near to medium term," CareEdge said in a report.
Overall bilateral trade could also increase by 15% every year, higher than the current growth rate of 10-12%, according to CareEdge, with consumers from both sides broadly benefiting from improved product quality and broader choice.
Follow BBC News India on Instagram, external, YouTube,, external X, external and Facebook, external.`,
    bodyJa: `ウィンブルドンのタオルからスコッチまで：インドと英国の貿易協定が買い物客に何を意味するか
- 公開されました
ウィンブルドンの優勝タオルを製造するインド企業ウェルスパン・リビングのオフィスでは、水曜日に発効したインド・英国自由貿易協定（FTA）を最大限に活用するための準備が加速している。
インド最大手のホームテキスタイル製造大手である同社は、ジョン・ルイスやテスコなど英国の大手量販店数社にベッドシーツやタオルを供給している。
ウェルスパン・リビングのディパリ・ゴエンカ最高経営責任者（CEO）はBBCに対し、「これらのブランドの多くは、今後数年間の事業ロードマップを描くため、ここ数週間インドを訪れている。われわれは通常、米国の顧客に対してのみ共同将来計画を行っていたが、今回の契約により英国の顧客に対してもそれが行われるようになった」と語った。
「実際、私たちが話している間、ロンドンのサプライチェーンチームはジョン・ルイスのオフィスに座っています。」
世界第５位と第６位の経済大国間のＦＴＡにより、インドから英国への輸出の９９％と英国からのインドへの輸入の９０％に対する関税が撤廃または引き下げられる。
英国政府はこれをEU離脱以来「英国最大かつ最も経済的に重要な二国間貿易協定」と呼んでおり、この協定によりインドのGDPは長期的に0.13％、つまり48億ポンド（64億ドル）相当、インドは0.06％、つまり年間51億ポンド増加すると推定されている。
繊維、衣料品、履物、自動車、水産物などの労働力の多い部門は、事業の成長を促進するために協定の履行に期待している。
ゴエンカ氏は「英国への輸出は今後２桁成長すると予想している」と述べた。
同氏は、インドが12％の関税を支払っているのに対し、インドは発展途上国貿易制度（DCTS）を通じて英国に無税で輸出品が入ったため、バングラデシュやパキスタンのような国々にとって不利な立場にあったと付け加えた。
しかし、これからはそれが変わります。
「家庭用繊維製品に限って見ると、英国の輸出に占めるパキスタンのシェアは約55％であるのに対し、インドはわずか6～7％にすぎない。それがわれわれが最終的にカバーできるギャップだ。」
この協定は英国の酒類・蒸留酒会社にとって転換点となる可能性もある。
スコッチウイスキーの関税を即時に150％から75％に引き下げ、その後10年間で段階的に40％に引き下げることは「小さな調整ではなく、本当の変化」だと首都デリーに拠点を置く輸入会社モダンドリンク社のアヴニート・シン氏は言う。
これが輸入をどれだけ押し上げるかは今後数カ月のうちに明らかになるだろうとシン氏は言うが、新交易条件の発効に先立って勢いが増していると見ている。
「運用面の準備に重点が置かれている。つまり、英国のサプライヤーと緊密に連携して原産地証明書やその他の貿易文書が整備されていることを確認し、税関やコンプライアンス要件を見直し、物流や清算パートナーと連携して、貨物が初日から改定された関税構造の恩恵を受けることができるようにすることを意味する」とシン氏は述べた。
これまでのところ、「急速な拡大ではなく、慎重な準備」の時期だったと同氏は言う。企業が輸入品の実際の節約を確認できれば、さらに大きな変化が訪れるだろう。
しかし、貿易専門家らによると、業界のこれらの少数の領域を超えて、この協定の全体的な影響は「変革というよりむしろ漸進的」になる可能性がある。
デリーに本拠を置くシンクタンク、世界貿易研究イニシアチブ（GTRI）のデータによると、インドは2025年から2026年の会計年度に134億ドル相当の商品を英国に輸出したが、これらの輸出の半分以上は最恵国待遇制度の下で無税で入国した。
輸入面では、インドは英国から117億ドルを輸入したが、その45％以上が銀で構成されており、銀はインドの除外リストに残っており、協定の対象外となっている。
GTRIのアジェイ・スリバスタバ氏は、「本当の試練は、織物、衣料品、履物、カーペット、自動車、魚介類、ブドウ、マンゴーなど、これまで英国の関税にさらされていた製品の輸出受注が増加し、輸出量が増加し、利益率が向上するかどうかだ。これらの指標は協定の成功を示す最も明白な証拠となるだろう。FTAの影響は今後1～3年で明らかになるはずだ」とBBCに語った。
しかし、スリバスタバ氏によると、英国が国内生産者を保護するために特定の割当量を超えて鉄鋼輸入に関税を維持するなど、いくつかの未解決の課題が協定の全範囲を活用する際の障害となる可能性があるという。
英国が提案している炭素税（対外的にはCBAMと呼ばれる）も、FTAの恩恵の一部を削減する可能性があると同氏は付け加えた。なぜなら、たとえ関税が「FTAの下でゼロに下がったとしても、炭素関連の国境税がCBAMの対象分野におけるインドの輸出の実効コストを上昇させ、新たな貿易摩擦を引き起こす可能性がある」からである。
他にも引き続き課題を引き起こしている非関税障壁があります。
中小企業は新しいルールを知らないことが多いため、歴史的にインドのFTA利用率は低かった。その結果、輸入側の利用率がはるかに高いにもかかわらず、インドの適格輸出品のうちFTA優遇措置を利用しているのはわずか約20～30％と推定されている。
たとえば、インドの衣料品輸出業者は、シャツの輸入関税が 12% からゼロに下がったことを英国のバイヤーに積極的に伝え、それに応じて価格や契約を再交渉する必要があります。
多くの企業は、特恵関税を申請できるよう、原産地要件や書類を遵守するための訓練が必要となるでしょう。
「政府と業界団体はこれらの問題に積極的に対処する必要がある。そうしないと、関税引き下げが自動的に輸出の増加につながらないからだ」とスリバスタバ氏は言う。
しかし、CareEdge Researchによると、インドにとって、特に既製衣料品（RMG）などの特定の業界では、これは適切なタイミングで到来するチャンスだという。
中国は英国の RMG 輸入において最大の市場シェアを保持している。しかし、競争力の低下と人件費の高騰により、市場シェアは減少し続けています。さらに、ブランドは、最近まで社会政治的混乱に見舞われていたバングラデシュのような国からの調達を多様化することも検討している。
「そのようなシナリオでは、英国のRMG輸入におけるインドの市場シェアは近中期的に2024年の6％から12％に倍増すると予想される」とケアエッジは報告書で述べた。
CareEdgeによれば、二国間貿易全体も毎年15％増加する可能性があり、現在の成長率10～12％を上回っており、双方の消費者は製品品質の向上と幅広い選択肢から広く恩恵を受けている。
Instagram (外部)、YouTube、外部 X (外部)、および Facebook (外部) で BBC News India をフォローしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c0kymrz0vkgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T22:17:43+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b761/live/c7a2b980-7e80-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 7,
  },
  {
    id: "your-monthly-netflix-bill-is-up-29-in-ju-7bc80c3c",
    title: "Your monthly Netflix bill is up 29% in just over a year. It’s time for Washington to step in.",
    titleJa: "Netflix の月々の料金は 1 年余りで 29% 増加しました。ワシントンが介入する時が来た。",
    summaryJa: "Netflix は依然としてウォール街の人気者であり、政府規制当局の標的となっている",
    bodyOriginal: `Netflix is still a Wall Street favorite — and a target for government regulators`,
    bodyJa: `Netflix は依然としてウォール街の人気者であり、政府規制当局の標的となっている`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/your-monthly-netflix-bill-is-up-29-in-just-over-a-year-critics-say-washington-needs-to-fix-it-bcab6e5b?mod=mw_rss_topstories",
    publishedAt: "2026-07-14T22:11:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-95726777",
    readTime: 2,
  },
  {
    id: "three-powerful-forces-are-draining-famil-519a6b6f",
    title: "Three powerful forces are draining family wealth — and your estate plan is completely unprepared",
    titleJa: "3 つの強力な勢力が家族の財産を枯渇させています - そしてあなたの財産計画はまったく準備されていません",
    summaryJa: "メディケイドの削減から IRA の税金の罠まで、家族の相続に対する本当の脅威とその対処法をご紹介します。",
    bodyOriginal: `From Medicaid cuts to an IRA tax trap, here are the real threats to your family’s inheritance and what to do about them.`,
    bodyJa: `メディケイドの削減から IRA の税金の罠まで、家族の相続に対する本当の脅威とその対処法をご紹介します。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-great-wealth-transfer-is-real-but-the-irs-or-a-nursing-home-might-get-your-money-first-d0c46676?mod=mw_rss_topstories",
    publishedAt: "2026-07-14T21:38:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-88262128",
    readTime: 2,
  },
  {
    id: "the-ai-boom-just-found-two-new-winners-g-fde400c8",
    title: "The AI boom just found two new winners: Goldman Sachs and JPMorgan Chase",
    titleJa: "AI ブームでは、ゴールドマン サックスと JP モルガン チェースという 2 つの新たな勝者が誕生しました。",
    summaryJa: "米国のメガバンクは火曜日、世界的な人工知能ブームがハイテク大手や半導体メーカーだけに利益をもたらしているわけではないという証拠を示した。ゴールドマン・サックスとJPモルガン・チェースは、株式取引と投資銀行業務の大幅な増加に支えられ、それぞれ記録的な四半期売上高を記録した。",
    bodyOriginal: `American megabanks on Tuesday gave evidence that the global artificial intelligence boom isn't just benefiting tech giants and chip makers.
Goldman Sachs and JPMorgan Chase each posted record quarterly revenue hauls, fueled by massive gains in equities trading and investment banking.
Behind the surge in activity — Goldman revenue jumped 39% to $20.3 billion, while JPMorgan saw it rise 27% to $58 billion — is the fact that AI is "everywhere in financial markets," JPMorgan CFO Jeremy Barnum told reporters.
"These are booming environments with a ton of activity, big IPOs, big index rebalancing, a lot of activity in Asia," Barnum said Tuesday. "A lot of it is downstream of the AI theme, writ large on a global basis. It's just a very, very, very active environment."
The quarter showed that the AI boom is creating winners far beyond Silicon Valley. While Nvidia and hyperscalers including Alphabet have captured many of the headlines, Goldman, JPMorgan and other banks are profiting from the massive flows of capital into AI.
They are advising on AI-related deals, financing data centers and power infrastructure, underwriting debt and equity offerings, and facilitating the surge in trading that has accompanied the global race to deploy the technology.
That is creating "a ripple effect" across the American economy and giving banks a flood of new opportunities to provide financing and trading solutions across public and private markets, Goldman CEO David Solomon told analysts Tuesday.
"We are in the middle of an AI capex super cycle where there are demands on financing in every single financing instrument, in every region of the world and across every single industry," Solomon said. Capex is short for capital expenditures, or investments made by a business for physical assets like factories.
Goldman is preparing for a three-to-five year investment cycle that is still in its early stages, he told analysts.
Goldman shares jumped 8% in afternoon trading, while JPMorgan rose 2%.
AI 'tipping point'
While the AI buildout isn't new, what's changed is that it has broadened out beyond chips and software to include power providers and infrastructure players.
The top beneficiaries of this trend are the three biggest Wall Street firms: Goldman Sachs, JPMorgan and Morgan Stanley, according to Wells Fargo banking analyst Mike Mayo.
The AI investment boom "reached a tipping point" in the second quarter, Mayo said.
Mayo increased his price targets for Goldman and JPMorgan after Tuesday's blowout results. Morgan Stanley is scheduled to report earnings on Wednesday.
The clearest evidence of the AI impact appeared in equities trading, where global capital flows and blockbuster transactions helped produce some of the biggest revenue surprises of the quarter.
Revenue from equities trading rose 86% to $6 billion at JPMorgan and 72% to $7.42 billion at Goldman. Combined, that was a whopping $4.4 billon more than analysts had expected.
Other large banks also benefited. Bank of America, the second biggest U.S. lender by assets, saw equity trading revenue rise 70% to $3.6 billion.
Helping the quarter, investors broadened out their search for AI beneficiaries, pouring money into Asian markets, including South Korea, Taiwan and Japan, Soofian Zuberi, president and co-head of Global Markets at Bank of America, told CNBC.
"People looked at the AI trade and said, 'What are the best reflections of it outside the U.S?,'" Zuberi said. "You've got American clients who are diversifying and allocating more money to Asia, including foundations, the endowments, and family offices."
SpaceX, Alphabet
The AI impact also showed up in the banks' strong advisory banking revenue for the second quarter.
Investment banking revenue at Goldman jumped 55% to $3.4 billion, and climbed 30% to $3.3 billion at JPMorgan Chase. That is a combined $1 billion more than analysts had expected.
In the quarter, Goldman was lead advisor on the SpaceX IPO and Alphabet's $90 billion equity issuance and advised Dominion Energy on its sale to NextEra Energy, all moves driven by the AI cycle.
At Bank of America, investment banking fees jumped 50% to $2.1 billion.
At the same time as they reap record fees driven by AI, banks are starting to benefit from implementing the technology internally. That should help them increase revenue while keeping a lid on headcount and other expenses.
"AI is driving banking by helping streamline processes," Zubieri said. "And banking is driving AI, because without banking you can't have all these data centers financed."`,
    bodyJa: `米国のメガバンクは火曜日、世界的な人工知能ブームがハイテク大手や半導体メーカーだけに利益をもたらしているわけではないという証拠を示した。
ゴールドマン・サックスとJPモルガン・チェースは、株式取引と投資銀行業務の大幅な増加に支えられ、それぞれ記録的な四半期売上高を記録した。
JPモルガンのジェレミー・バーナム最高財務責任者（CFO）は記者団に対し、ゴールドマンの売上高が39％増の203億ドル、JPモルガンの売上高が27％増の580億ドルとなった背景には、AIが「金融市場のいたるところに存在している」という事実があると語った。
バーナム氏は火曜日、「これらは大量の活動、大規模なIPO、大規模な指数リバランス、アジアでの多くの活動を伴う活況な環境だ」と述べた。 「その多くは AI テーマの下流にあり、地球規模で大規模に行われています。まさに、非常に、非常に、非常に活発な環境です。」
この四半期は、AI ブームがシリコンバレーをはるかに超えた勝者を生み出していることを示しました。 Nvidia や Alphabet を含むハイパースケーラーが多くの見出しを飾っていますが、ゴールドマン、JP モルガン、その他の銀行は AI への膨大な資本の流れから利益を得ています。
彼らは、AI 関連の取引についてアドバイスし、データセンターや電力インフラへの資金調達、債券や株式の引受を引き受け、テクノロジー導入の世界的な競争に伴う取引の急増を促進しています。
それがアメリカ経済全体に「波及効果」を生み出し、銀行に公開市場と私設市場にわたって融資と取引ソリューションを提供する新たな機会を大量に与えている、とゴールドマンのデービッド・ソロモン最高経営責任者（CEO）は火曜日にアナリストに語った。
「私たちはAI設備投資のスーパーサイクルの真っ只中におり、世界のあらゆる地域、あらゆる業界にわたって、あらゆる融資手段で資金調達の需要が存在します」とソロモン氏は述べた。 Capex は資本支出の略で、企業が工場などの物理的資産に対して行う投資です。
同氏はアナリストに対し、ゴールドマンは３─５年の投資サイクルに向けて準備を進めているが、まだ初期段階にあると語った。
ゴールドマン株は午後の取引で８％上昇し、ＪＰモルガンは２％上昇した。
AIの「転換点」
AI の構築は新しいものではありませんが、変わったのは、AI の範囲がチップやソフトウェアを超えて、電力プロバイダーやインフラストラクチャー プレーヤーを含むようになったということです。
ウェルズ・ファーゴの銀行アナリスト、マイク・メイヨ氏によると、この傾向で最も恩恵を受けているのはウォール街の３大企業、ゴールドマン・サックス、ＪＰモルガン、モルガン・スタンレーだという。
メイヨー氏は、AI投資ブームは第2四半期に「転換点に達した」と述べた。
メイヨー氏は火曜日の大幅な決算を受けて、ゴールドマンとJPモルガンの目標株価を引き上げた。モルガン・スタンレーは水曜日に決算発表を予定している。
AI の影響を示す最も明確な証拠は株式取引に現れており、世界的な資本の流れと大規模な取引が、この四半期最大の予想外の収益を生み出しました。
株式トレーディングによる収益は、ＪＰモルガンが８６％増の６０億ドル、ゴールドマンが７２％増の７４億２０００万ドルとなった。合計すると、アナリストの予想を44億ドルも上回った。
他の大手銀行も恩恵を受けた。資産額で米国第２位の銀行であるバンク・オブ・アメリカの株式トレーディング収入は７０％増の３６億ドルとなった。
この四半期を支援して、投資家はAIの受益者探しの範囲を広げ、韓国、台湾、日本を含むアジア市場に資金を注ぎ込んだとバンク・オブ・アメリカの社長兼グローバル・マーケッツ共同責任者のスーフィアン・ズベリ氏がCNBCに語った。
「人々はAI貿易を見て、『米国以外ではAI貿易を最もよく反映しているのは何だろう』と言った」とズベリ氏は語った。 「財団、基金、ファミリーオフィスなど、アジアに資金を多角化し、より多くの資金を割り当てているアメリカ人の顧客がいます。」
スペースX、アルファベット
AI の影響は、第 2 四半期の銀行のアドバイザリー バンキング収益の好調にも表れました。
ゴールドマンの投資銀行収入は５５％増の３４億ドル、ＪＰモルガン・チェースは３０％増の３３億ドルだった。これはアナリストの予想を合計で10億ドル上回る額となる。
同四半期、ゴールドマンはスペースXのIPOとアルファベットの900億ドルの株式発行の主任顧問を務め、ドミニオン・エナジーのNextEra Energyへの売却について助言したが、これらすべての動きはAIサイクルによって推進された。
バンク・オブ・アメリカでは、投資銀行手数料が50％増の21億ドルとなった。
AI によって記録的な手数料を獲得すると同時に、銀行はそのテクノロジーを内部に導入することで恩恵を受け始めています。これにより、従業員数やその他の経費を抑えながら収益を増やすことができるはずです。
「AIはプロセスの合理化を支援することで銀行業務を推進している」とズビエリ氏は語った。 「そして、銀行業が AI を推進しています。銀行業がなければ、これらすべてのデータセンターに資金を提供することはできないからです。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/goldman-sachs-and-jpmorgan-chase-are-emerging-as-ai-winners.html",
    publishedAt: "2026-07-14T19:50:48+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "global-oil-prices-notch-back-to-back-ris-f86593d2",
    title: "Global oil prices notch back-to-back rise, remain ‘tethered to the Hormuz narrative’",
    titleJa: "世界の原油価格は連続上昇、依然として「ホルムズの物語に縛られている」",
    summaryJa: "火曜日の世界の原油価格は、米国とイランの紛争のさらなる激化を追い風に、３月中旬以来２日間で最大の上昇率を記録した。",
    bodyOriginal: `Global oil prices on Tuesday notched their largest two-day rise since mid-March, buoyed by further escalation in the U.S.-Iran conflict.`,
    bodyJa: `火曜日の世界の原油価格は、米国とイランの紛争のさらなる激化を追い風に、３月中旬以来２日間で最大の上昇率を記録した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/oil-prices-see-largest-two-day-percentage-gain-in-four-months-on-u-s-iran-fighting-040d7163?mod=mw_rss_topstories",
    publishedAt: "2026-07-14T19:17:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-94895376",
    readTime: 2,
  },
  {
    id: "lucid-dismisses-report-that-it-is-weighi-3337c45f",
    title: "Lucid dismisses report that it is weighing filing for bankruptcy or going private after shares plunge",
    titleJa: "ルシッド、株価急落を受けて破産申請か非公開化を検討しているとの報道を却下",
    summaryJa: "ルシッド・モーターの株価は一時40％以上下落し、火曜日には同社が新たな選択肢を検討しているとの憶測が飛び交い、ボラティリティを理由に取引が何度も停止された。EVと呼ばれる電気自動車に焦点を当てたサイトは火曜日、ルシッドが非公開化するか破産法第11章の申請を検討していると報じた。同サイトによると、同社はAlixPartnersに対し、これらの選択肢を検討し、その結果を次回の会議までにLucidの取締役会に提出するよう求めたという。",
    bodyOriginal: `Lucid Motor stock fell more than 40% at one point and trading was halted for volatility multiple times Tuesday amid speculation that the company is considering new options.
A site focused on electric vehicles called EV reported Tuesday Lucid was considering going private or filing for Chapter 11 bankruptcy protection. According to the site, the company asked AlixPartners to review those options and deliver its findings to Lucid's board before its next meeting.
The report from EV also said AlixPartners had encouraged the board to further restructure in the U.S. and Europe and to focus on the Gravity SUV.
AlixPartners said it had no comment on the report. Lucid said in a statement that "the rumors are completely false."
"The company has sufficient liquidity to carry its operations well into next year, as recently published in its last quarterly filings, and it has not formed any special Board committee to explore the scenarios reported today," the company said in a statement." Our focus is on improving execution, strengthening operations, and positioning Lucid to realize the full potential of its technology, products, and innovation. AlixPartners is assisting us in that and nothing else and has not recommended bankruptcy to management or the Board."
Lucid has been facing an increasingly challenging market amid slower-than-expected adoption of EVs and changing regulations under the Trump administration, including the elimination of a $7,500 federal incentive for purchasing an EV.
The EV maker, which is heavily backed by Saudi Arabia's Public Investment Fund, said last month that it was laying off 18% of its U.S. workforce as part of a cost-savings plan.
Earlier this month, Lucid missed Wall Street expectations for second-quarter delivery results.
The company's new CEO Silvio Napoli announced a shake-up of the company's leadership team at the time to "simplify the company's structure."
Lucid in May suspended its production guidance as Napoli said he would be evaluating the company's business decisions, adding that it needs to lower its "elevated inventory" of vehicles.`,
    bodyJa: `ルシッド・モーターの株価は一時40％以上下落し、火曜日には同社が新たな選択肢を検討しているとの憶測が飛び交い、ボラティリティを理由に取引が何度も停止された。
EVと呼ばれる電気自動車に焦点を当てたサイトは火曜日、ルシッドが非公開化するか破産法第11章の申請を検討していると報じた。同サイトによると、同社はAlixPartnersに対し、これらの選択肢を検討し、その結果を次回の会議までにLucidの取締役会に提出するよう求めたという。
EVの報告書はまた、アリックスパートナーズが米国と欧州でさらなる組織再編を進め、SUV「グラビティ」に注力するよう取締役会に奨励したと述べた。
アリックスパートナーズは、この報告書についてコメントはないと述べた。ルシッド氏は声明で「噂は完全に誤りだ」と述べた。
「直近の四半期報告書で最近公表されているように、当社は来年まで事業を継続するのに十分な流動性を備えており、本日報告されたシナリオを検討するための特別取締役会委員会は設置していない」と同社は声明で述べた。「当社は執行を改善し、事業を強化し、技術、製品、イノベーションの可能性を最大限に発揮できるようLucidを位置付けることに重点を置いている。アリックスパートナーズはそれ以外の何物でも当社を支援しており、経営陣や取締役会に破産を勧めてはいない。」
EVの導入が予想よりも遅れ、EV購入に対する7,500ドルの連邦奨励金の廃止など、トランプ政権下での規制が変化する中、ルシッドはますます困難な市場に直面している。
サウジアラビアの公共投資基金から多額の支援を受けている同社は先月、コスト削減計画の一環として米国従業員の18％を一時解雇すると発表した。
今月初め、Lucid は第 2 四半期の納品結果に関してウォール街の予想を下回りました。
同社の新CEOシルビオ・ナポリ氏は当時、「会社構造を簡素化する」ため、経営陣の刷新を発表した。
ルシードは5月、ナポリが同社の経営上の決定を評価すると述べ、車両の「増加した在庫」を減らす必要があると付け加えたため、生産ガイダンスを一時停止した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/lucid-stock-lcid-bankruptcy-report.html",
    publishedAt: "2026-07-14T18:50:52+00:00",
    category: "自動車",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    readTime: 2,
  },
  {
    id: "new-york-becomes-first-u-s-state-to-impo-192ded0e",
    title: "New York becomes first U.S. state to impose AI data center ban",
    titleJa: "ニューヨーク州が米国で初めてAIデータセンターの禁止を課す州となる",
    summaryJa: "ニューヨーク州知事のキャシー・ホチョルは火曜日、50メガワット以上の電力を使用する新しい大規模データセンターの建設を最長1年間禁止する大統領令に署名し、エンパイアステートはそのような禁止を課す全米初の州となった。知事はニューヨーク市の大統領令を発表し、「私たちは今、何世代にもわたって、おそらくこれまでで最も重大な経済大変動の真っただ中にいる」と述べた。 「これらのハイパースケールAIデータセンターは膨大な電力を消費し、私たちの送電網の容量を超える恐れがあります」と彼女は付け加えた。 「それらは地元の料金支払い者のコストを押し上げるものであり、私はそのコストがニューヨーカーに転嫁されることを拒否します。」",
    bodyOriginal: `New York State Governor Kathy Hochul on Tuesday signed an executive order barring the construction of new large-scale data centers using 50 megawatts or more of power for up to one year, making the Empire State the first state in the nation to impose such a ban.
"We're in the midst of one of the most significant economic upheavals in generations … perhaps ever," the governor said, announcing the executive order in New York City. "These hyperscale AI data centers consume enormous amounts of power, truly threatening to outpace our grid's capacity," she added. "They drive up costs for local ratepayers, and I refuse to let those costs get passed down to New Yorkers."
Hochul's sentiment echoes that of many state residents and environmental leaders, who have heavily scrutinized hyperscaler data centers on the basis of their excessive consumption of power and natural resources, particularly fresh water.
The announcement noted that New Yorkers have seen their electric bills surge, with the state's average residential electricity price climbing nearly 68 percent since 2019. This fact has skewed public opinion starkly against new data center construction, with major public backlash against proposed facilities in townships such as Lansing and East Fishkill.
Leaders of the data center opposition celebrated the governor's decision.
"This one-year moratorium is a huge step forward for New York communities fighting against an onslaught of massive data center proposals," stated Laura Shindell, director of New York State's Food & Water Watch, a high-profile environmental nonprofit. "It comes as the direct result of immense public pressure from people across the state demanding their elected leaders protect them from Big Tech's assault, which threatens the state's clean air and water and New Yorkers' financial security."
Praise was not limited to environmental and community leaders, however, as it also came from the governor's allies, both in Congress and in the state legislature.
"This one-year moratorium is fundamentally about trust," said Senator Kirsten Gillibrand, in a statement provided to WRGB Albany. "Right now, New Yorkers aren't convinced these massive facilities benefit them. Before we move forward, our communities need ironclad guarantees that their energy bills won't spike, their water will be protected, and their air will remain clean."
"Technology should make our lives better, not pollute our water, strain our energy grid, or drive up our utility bills," State Senator Kristen Gonzalez, a Democrat, stated in the New York State announcement. "By giving our State time to plan, we can ensure that development and innovation do not come at the expense of all of us."
Many, however, voiced their dissatisfaction, claiming that the moratorium would hinder New York's — and the United States' – ability to compete in a rapidly expanding technological field.
"A statewide moratorium is the wrong answer to the right questions," New York State Assemblyman Scott Gray, a Republican, and three of his colleagues wrote in a letter to the governor in June opposing data center moratoriums. "It freezes investment, takes decisions away from the communities that should be making them and duplicates or ignores work the governor's own administration already has underway."
"Siting belongs to local communities. Albany's job is to set the regulatory framework, facilitate interconnection and protect ratepayers and grid reliability," Gray and his colleagues wrote. "It is not Albany's job to decide for a town or village whether it wants one of these projects. That is a local decision, and it should remain one."
"China wins," said Pennsylvania Senator John Fetterman in an X post on Tuesday morning.
There have been claims made by those building data centers that foreign rivals of the U.S. are supporting the anti-AI movement, and evidence of foreign-created anti-AI content being published for a U.S. audience.
A data center moratorium remains popular in the state. A Siena Research Institute poll conducted in June revealed that 46% of respondents believed that a "one-year moratorium on new permits for large data centers in New York" would be good for the state, whereas only 21% said it would be bad. The issue appeared to be fairly bipartisan as well, with Democrats backing the idea by a margin of 37 percentage points and Republicans supporting it by a margin of 13. This same poll showed Hochul, a Democrat, leading her Republican challenger, Nassau County Executive Bruce Blakeman, by a margin of 20 percentage points – a promising sign for her reelection campaign.
The first-in-the-nation statewide moratorium marks a significant show of authority by Hochul, who has now carried out a landmark policy that her Democratic colleagues, such as Maine's Janet Mills and Virginia's Abigail Spanberger, have cautioned against. Fourteen state legislatures across the country have introduced bills restricting new data center construction, none of which, to this point, have been signed into law.
Tuesday's moratorium might not be the last action taken by the governor's office, either. The Responsible Data Center Development Act, passed by the state legislature earlier this year, contains a one-year moratorium on the construction of new data centers with a peak energy demand of 20 megawatts or more. Hochul has yet to take action on the bill but has indicated that she will work with the legislature to "further review" its nature. Furthermore, a statement released by Hochul's office stated that the governor is actively "pursuing legislation to repeal sales tax exemptions for massive data centers across the state."
In addition to the pause on new data center construction, Hochul directed the NYS Department of Public Service to "consider approaches to require data centers to fund new clean electric generation dedicated to their operations, including but not limited to customer-sited distributed energy resources and battery storage."
Once the state develops a comprehensive framework to support municipalities and strong standards for construction, Hochul says, the moratorium will be lifted. New York was ranked by CNBC as being among the best-positioned states to win AI data centers in its recent annual rankings of Top States for Business.`,
    bodyJa: `ニューヨーク州知事のキャシー・ホチョルは火曜日、50メガワット以上の電力を使用する新しい大規模データセンターの建設を最長1年間禁止する大統領令に署名し、エンパイアステートはそのような禁止を課す全米初の州となった。
知事はニューヨーク市の大統領令を発表し、「私たちは今、何世代にもわたって、おそらくこれまでで最も重大な経済大変動の真っただ中にいる」と述べた。 「これらのハイパースケールAIデータセンターは膨大な電力を消費し、私たちの送電網の容量を超える恐れがあります」と彼女は付け加えた。 「それらは地元の料金支払い者のコストを押し上げるものであり、私はそのコストがニューヨーカーに転嫁されることを拒否します。」
ホチョル氏の感情は、電力と天然資源、特に淡水の過剰消費を理由にハイパースケーラーのデータセンターを厳しく監視してきた多くの州民や環境指導者の感情と同調している。
発表では、ニューヨーカーの電気代が高騰しており、同州の平均家庭用電気料金が2019年以来68パーセント近く上昇していると指摘した。この事実が新たなデータセンター建設に対して世論を大きく歪めており、ランシングやイースト・フィッシュキルなどの郡区で計画されている施設に対する世論の大きな反発を招いている。
データセンター反対派の指導者らは知事の決定を称賛した。
「この1年間の一時停止は、大規模なデータセンター計画の猛攻と闘うニューヨークのコミュニティにとって大きな前進だ」と、著名な環境非営利団体、ニューヨーク州フード＆ウォーター・ウォッチのディレクター、ローラ・シンデル氏は述べた。 「これは、州のきれいな空気と水、そしてニューヨーカーの経済的安全を脅かすビッグテックの攻撃から自分たちを守るよう、州中の人々が選挙で選ばれた指導者たちに守るよう求める、計り知れない世論の圧力の直接の結果である。」
しかし、称賛の声は環境指導者や地域社会の指導者に限定されず、議会と州議会の両方の知事の同盟者たちからも寄せられた。
カーステン・ギリブランド上院議員はWRGBアルバニーに提供した声明の中で、「この1年間の猶予期間は基本的に信頼に関するものだ」と述べた。 「現時点で、ニューヨーカーはこれらの大規模施設が自分たちに利益をもたらしているとは信じていません。私たちが前進する前に、私たちのコミュニティは光熱費が高騰せず、水が保護され、空気がきれいに保たれるという鉄壁の保証を必要としています。」
民主党のクリステン・ゴンザレス州上院議員はニューヨーク州の発表で、「テクノロジーは私たちの生活を改善するものであり、水を汚染したり、エネルギー網に負担をかけたり、光熱費を値上げしたりするものではない」と述べた。 「国家に計画を立てる時間を与えることで、開発と革新が私たち全員を犠牲にすることのないようにすることができます。」
しかし、多くの人は不満の声を上げ、この一時停止は急速に拡大する技術分野でニューヨーク、そして米国が競争する能力を妨げると主張した。
「州全体の一時停止は、正しい質問に対する間違った答えだ」とニューヨーク州議会議員スコット・グレイ共和党議員と同僚3人は6月に知事に宛てた書簡の中でデータセンターの一時停止に反対した。 「投資を凍結し、意思決定を下すべきコミュニティから意思決定を奪い、知事自身の政権が既に進めている仕事を重複または無視する。」
「立地は地元コミュニティに属している。アルバニーの仕事は、規制の枠組みを設定し、相互接続を促進し、料金支払者と送電網の信頼性を保護することだ」とグレイ氏らは書いている。 「町や村がこれらのプロジェクトのいずれかを希望するかどうかを決定するのはアルバニーの仕事ではありません。それは地元の決定であり、プロジェクトのままであるべきです。」
ペンシルベニア州上院議員ジョン・フェッターマン氏は火曜日朝のXポストで「中国が勝利した」と述べた。
データセンターの建設者らは、米国の外国のライバル企業が反AI運動を支援していると主張しており、外国が作成した反AIコンテンツが米国の視聴者向けに公開されているという証拠もある。
同州ではデータセンターの一時停止が依然として人気だ。シエナ研究所が6月に実施した世論調査では、回答者の46％が「ニューヨークの大規模データセンターの新規認可を1年間停止する」ことが州にとって良いことだと考えているのに対し、悪いと答えたのはわずか21％だった。この問題はかなり超党派のようで、民主党はこの案を37ポイントの差で支持し、共和党は13ポイントの差で支持した。この同じ世論調査では、民主党のホチョル氏が、共和党の対抗馬であるナッソー郡幹部のブルース・ブレークマン氏を20ポイントの差でリードしており、再選に向けて明るい兆しとなっている。
全国初の州全域での一時停止措置は、メーン州のジャネット・ミルズ氏やバージニア州のアビゲイル・スパンバーガー氏といった民主党の同僚らが警告している画期的な政策を実行したホチョル氏の権威の重要な誇示を示している。全国14の州議会が新たなデータセンター建設を制限する法案を提出しているが、現時点でいずれの法案も署名されていない。
火曜日の一時停止は、知事室がとった最後の措置ではない可能性もある。今年初めに州議会を通過した「責任あるデータセンター開発法」には、ピークエネルギー需要が20メガワット以上の新規データセンターの建設を1年間停止する内容が含まれている。ホチョル氏はまだこの法案に関して行動を起こしていないが、法案の性質を「さらに検討」するために議会と協力するつもりであると示唆した。さらに、ホチョル氏の事務所が発表した声明では、知事が「州全体の大規模データセンターに対する売上税免除を廃止する法案を積極的に推進している」と述べた。
新しいデータセンター建設の一時停止に加えて、ホチョル氏はニューヨーク市公共サービス局に対し、「顧客設置の分散型エネルギー資源や蓄電池を含むがこれらに限定されない、データセンターの運営専用の新しいクリーンな発電への資金提供をデータセンターに要求するアプローチを検討する」よう指示した。
ホチョル氏は、州が地方自治体を支援する包括的な枠組みと強力な建設基準を策定すれば、一時停止は解除されるだろうと述べた。ニューヨーク州は、CNBC による最近のビジネスのトップ州ランキングで、AI データセンターを獲得するのに最も有利な州の 1 つとしてランク付けされました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/new-york-ai-data-center-ban.html",
    publishedAt: "2026-07-14T18:49:14+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 7,
  },
  {
    id: "zipline-adds-ex-tesla-uber-waymo-execs-t-dbe684bb",
    title: "Zipline adds ex-Tesla, Uber, Waymo execs to make drone delivery mainstream across U.S.",
    titleJa: "ジップラインはテスラ、ウーバー、ウェイモの元幹部を加え、米国全土でドローン配送を主流にする",
    summaryJa: "サウスサンフランシスコの新興企業Ziplineは、同社のドローン配送サービスを新たな米国および国際市場に拡大するにあたり、テスラとウェイモの元幹部を経営幹部に加え、商業拡大の指揮に元ウーバー幹部を招聘する。Zipline は約 12 年前に設立されて以来、同社の完全電動自律ドローンは 250 万件以上の商業配達に使用されています。ドローンは最大8ポンドの重さの物品を運ぶことができます。これらは、命を救うワクチン、血液や抗​​毒の投与から、ブリトーや個人用ピザに至るまで、あらゆるものを配達するために使用されてきました。顧客は通常、Zipline のアプリを通じて注文します。",
    bodyOriginal: `South San Francisco startup Zipline is adding former Tesla and Waymo execs to its C-suite, and bringing on a former Uber executive to lead its commercial expansion, as the company scales its drone delivery service into new U.S. and international markets.
Since Zipline started up about twelve years ago, its fully electric, autonomous drones have been used to make more than 2.5 million commercial deliveries. The drones can carry items weighing up to 8 pounds. They have been used to deliver everything from life-saving vaccines, blood and anti-venom doses, to burritos and personal pizzas. Customers generally order via Zipline's app.
Little Caesars, Chipotle and Cleveland Clinic are among the U.S. businesses Zipline works with today, along with retail partners like Walmart and over 100 small businesses.
The company's CEO and co-founder Keller Rinaudo estimates that Zipline is now making one drone delivery every 20 seconds, up from one per minute in early 2025 when Zipline ranked at No. 46 on CNBC's annual Disruptor 50 list.
One million of its deliveries to-date were conducted within the last 12 months, the company said, and roughly 70% of its daily delivery volume takes place in the U.S.
That's a big shift from Zipline's early days when it focused on drone deliveries of medical essentials and humanitarian aid to clinics and farms in Rwanda and Ghana. Zipline's business in Africa is also growing, Rinaudo said, with development deals and expansion underway, some with the help of the U.S. State Department.
Rinaudo is fond of saying Zipline works to make orders for delivery feel as effortless as "teleportation." Its fastest order-to-delivery time has been about five minutes for some orders in Dallas.
With the company's newest healthcare partner, Cleveland Clinic, Zipline will be offering "healthcare home delivery service" in a suburb of Cleveland this month, allowing patients to get prescriptions flown to their homes, at no additional cost to start.
Joining the venture-backed startup as its new chief financial officer this month is former Tesla vice president of finance, Sendil Palani.
Palani spent about 17 years working for Elon Musk's electric vehicle maker, and told CNBC he views Zipline as a similarly, mission-driven organization with related operations from precision manufacturing to maintaining charging infrastructure.
Zipline also has the potential to eliminate traffic congestion and pollution associated with traditional deliveries by air and on the ground, Palani said, while saving human and animal lives with its rapid deliveries, which can be made over damaged roads in the aftermath of extreme weather or other disasters.
Today, Zipline has the capacity to make 24,000 drones per year at its South San Francisco factory. Palani, who started at Tesla when the company was making just one, fully electric vehicle per day, sees analogies to the years when Tesla started mass-manufacturing its entry level Model 3 sedans.
(Zipline's former CFO was another Tesla finance leader, Deepak Ahuja, who is still advising the drone business, and personally recommended Palani to fill his shoes.)
In addition to the new CFO hire, Zipline is bringing on Kevin Vosen as chief legal officer, who joins after a stint at Ohalo, the agricultural biotech firm, and a seven year tenure as chief legal officer at Waymo, Alphabet's autonomous vehicle venture.
Bolstering its leadership team should help Zipline scale its services across the U.S., Rinaudo said, after gaining traction in its first major metro area of Dallas, Texas, last year.
The startup has also hired Allen Penn as head of commercialization and markets. Penn previously served as vice president of Uber Eats, and helped build the company's food delivery and international ride-hailing business.
While Zipline is starting operations soon in Austin, Houston, and Cleveland, it has not yet revealed its next U.S. markets. "We are expecting just the U.S. business to grow by another 15X this year," Rinaudo said, adding "many tens of metros across the U.S. and some new, large international markets" in 2027.
While Zipline has the most traction by far in the U.S., it faces competition from Alphabet's drone division Wing, fellow startups like Flytrex and Matternet, and others developing cargo-carrying drones for military use.
Researchers at PwC have estimated that the U.S. drone market will grow 65% a year from 2024 to 2034, with deliveries rising from around 13 million this year to more than 800 million in 2034.
"It's at a crazy inflection point," Rinaudo said. "This thing that we were working on for 12 years that everyone thought was totally weird and was never going to work is now becoming totally normal. Everybody is realizing it doesn't make sense to have a 3,000-pound gas-powered, combustion engine vehicle and a person deliver something to your house that weighs five pounds."`,
    bodyJa: `サウスサンフランシスコの新興企業Ziplineは、同社のドローン配送サービスを新たな米国および国際市場に拡大するにあたり、テスラとウェイモの元幹部を経営幹部に加え、商業拡大の指揮に元ウーバー幹部を招聘する。
Zipline は約 12 年前に設立されて以来、同社の完全電動自律ドローンは 250 万件以上の商業配達に使用されています。ドローンは最大8ポンドの重さの物品を運ぶことができます。これらは、命を救うワクチン、血液や抗​​毒の投与から、ブリトーや個人用ピザに至るまで、あらゆるものを配達するために使用されてきました。顧客は通常、Zipline のアプリを通じて注文します。
ジップラインは現在、リトル シーザーズ、チポトレ、クリーブランド クリニックのほか、ウォルマートなどの小売パートナーや 100 社以上の中小企業と提携している米国企業の 1 つです。
同社のCEO兼共同創設者であるケラー・リナウド氏は、ジップラインがCNBCの年次ディスラプター50リストで46位にランクされていた2025年初めには1分に1件だったが、現在は20秒に1件のドローン配送を行っていると推定している。
同社によると、これまでの配送のうち100万件は過去12カ月以内に行われ、1日の配送量の約70％が米国内で行われているという。
これは、ルワンダとガーナの診療所や農場への医療必需品や人道支援物のドローン配達に焦点を当てていたジップラインの初期の頃からの大きな変化だ。リナウド氏によると、アフリカにおけるジップラインのビジネスも成長しており、一部は米国国務省の支援を受けて開発契約や拡大が進行中だという。
リナウド氏は、ジップラインのおかげで配達の注文が「瞬間移動」のように楽になるとよく言っています。ダラスの一部の注文では、注文から配達までの最速時間が約 5 分でした。
ジップラインは同社の最新のヘルスケアパートナーであるクリーブランドクリニックと協力し、今月クリーブランド郊外で「ヘルスケア宅配サービス」を提供する予定で、これにより患者は追加の開始費用なしで処方箋を自宅に郵送できるようになる。
今月、ベンチャー支援の新興企業に新しい最高財務責任者として加わったのは、元テスラ財務担当副社長のセンディル・パラニ氏だ。
パラニ氏はイーロン・マスク氏の電気自動車メーカーで約17年間働いており、ジップラインも同様にミッション主導型の組織で、精密製造から充電インフラの維持まで関連業務を行う組織だと考えているとCNBCに語った。
パラニ氏は、ジップラインには、空路や地上での従来の配送に伴う交通渋滞や汚染を解消する可能性があると同時に、異常気象やその他の災害の影響で損傷した道路でも迅速に配送できるため、人命と動物の命が救われると述べた。
現在、ジップラインはサウスサンフランシスコ工場で年間 24,000 機のドローンを製造する能力を持っています。テスラが完全電気自動車を 1 日 1 台だけ製造していた時代に入社したパラニ氏は、テスラがエントリーレベルのモデル 3 セダンの量産を開始した数年間と類似していると考えています。
(Zipline の元 CFO は、同じく Tesla の財務リーダーである Deepak Ahuja で、現在もドローン ビジネスに助言を行っており、個人的に Palani に後任を推薦しました。)
ジップラインは新たにCFOを採用することに加え、ケビン・ボーセン氏を最高法務責任者として迎え入れる。同氏は農業バイオテクノロジー企業オハロでの勤務と、アルファベットの自動運転車ベンチャーであるウェイモでの最高法務責任者としての7年間の在職期間を経て入社した。
リナウド氏は、昨年テキサス州ダラスの初の大都市圏で勢いを増した後、ジップラインが全米にサービスを拡大するには、リーダーシップチームの強化が役立つはずだと語った。
このスタートアップはまた、商業化および市場の責任者としてアレン・ペンを雇用した。ペン氏は以前、ウーバーイーツの副社長を務め、同社の食品配達と国際配車事業の構築に貢献した。
ジップラインはオースティン、ヒューストン、クリーブランドでまもなく営業を開始するが、次の米国市場はまだ明らかにしていない。リナウド氏は「今年は米国の事業だけでもさらに15倍に成長すると予想している」と述べ、2027年には「米国全土の数十の地下鉄といくつかの新たな大規模な国際市場」が生まれると付け加えた。
ジップラインは米国でこれまでのところ最も大きな牽引力を持っているが、アルファベットのドローン部門ウィング、フライトレックスやマターネットといった同じく新興企業、軍事用途の貨物輸送ドローンを開発している他社との競争に直面している。
PwCの研究者らは、米国のドローン市場が2024年から2034年にかけて年間65％成長し、配達数は今年の約1,300万機から2034年には8億機以上に増加すると推定している。
「それはクレイジーな転換点にある」とリナウドは語った。 「私たちが12年間取り組んできたこのことは、誰もが完全に奇妙で、決してうまくいくはずがないと考えていたもので、今では完全に普通のことになりつつあります。3,000ポンドのガソリンエンジンの内燃機関車と、重さ5ポンドの物を人が家に届けるのは意味がないと誰もが気づき始めています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/zipline-drone-delivery-tesla-uber-waymo-executives.html",
    publishedAt: "2026-07-14T18:29:41+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "billionaire-warren-buffett-stops-donatio-da6d7fab",
    title: "Billionaire Warren Buffett stops donations to Bill Gates charity",
    titleJa: "億万長者ウォーレン・バフェット氏、ビル・ゲイツ慈善団体への寄付を停止",
    summaryJa: "億万長者ウォーレン・バフェット氏、ビル・ゲイツ慈善団体への寄付を停止- 公開されました",
    bodyOriginal: `Billionaire Warren Buffett stops donations to Bill Gates charity
- Published
Billionaire investor Warren Buffett has stopped giving donations to Bill Gates' charitable foundation weeks after the Microsoft co-founder detailed his links to the late sex offender Jeffrey Epstein.
Buffett "irrevocably" committed in 2006 to donate shares in his firm, Berkshire Hathaway, each year to the Bill and Melinda Gates Foundation as it was then known "throughout my lifetime".
But on Thursday, the Gates Foundation was left off the list of firms that will receive billions of dollars worth of stock.
The stock will instead be split between four foundations involving members of the Buffett family. The 95-year-old said he will dispose of his remaining stock over the next eight years.
"Of course, mortality is unpredictable," said Buffett. "But my remaining shares will be donated to the four foundations one way or the other by 31 December, 2034."
Gates' association with Epstein was revealed when the US Department of Justice released files in January.
Buffett did not mention Gates or Epstein by name in his statement regarding his donations.
But in March, he told CNBC, external that he had not spoken to Gates "since the whole thing was unveiled".
He added: "I don't want to be in a position where I know things... to be called as a witness."
Buffett has donated $47bn (£35bn) to Gates' charity over 20 years.
The Gates Foundation told the BBC it was "grateful to Warren Buffett for his decades of support for our work".
It said: "The foundation continues from a position of financial strength to advance our work through 2045, supported by Bill's $200bn commitment."
In June, Gates appeared before the US House Oversight Committee to answer questions about his relationship with Epstein, who died in a New York prison in 2019 while awaiting trial on sex trafficking charges.
In a transcript of his testimony, Gates said that he had been introduced to Epstein in 2011 on the premise that he could raise billions of dollars for global health - a key focus of the foundation.
"I recall being aware that Epstein had faced prior legal issues, but I did not fully understand the extent of the crimes he committed," Gates said.
Three years earlier, Epstein had pleaded guilty to soliciting a minor for prostitution and procuring a person under age 18 for prostitution.
Gates told the committee: "I should never have met with Epstein in the first place. Based on what I know now, I understand that even if he had delivered the donors he promised, it would not have justified associating with him."
Buffett was an enthusiastic supporter of the Bill and Melinda Gates Foundation, stating in 2006 he "greatly" admired what it was accomplishing and promised to make yearly donations.
In 2010, Bill and Melinda Gates and Buffett started the Giving Pledge, which aimed to get extraordinarily wealthy people to give away the majority of their fortune during their lifetime or in their will.
Bill and Melinda Gates divorced in 2021 after 27 years of marriage.
Melinda French Gates resigned in 2024 from the foundation she co-founded and said that she would donate $1bn to help women's rights in the US.`,
    bodyJa: `億万長者ウォーレン・バフェット氏、ビル・ゲイツ慈善団体への寄付を停止
- 公開されました
億万長者の投資家ウォーレン・バフェット氏は、マイクロソフトの共同創設者が性犯罪者の故ジェフリー・エプスタインとの関係を詳述してから数週間後、ビル・ゲイツ氏の慈善財団への寄付を中止した。
バフェット氏は2006年、自身の会社バークシャー・ハサウェイの株式をビル・アンド・メリンダ・ゲイツ財団（当時は「生涯を通して」知られていた）に毎年寄付することを「取り消し不能」に約束した。
しかし木曜日、ゲイツ財団は数十億ドル相当の株式を受け取る企業のリストから外された。
代わりに、株式はバフェット家のメンバーが関与する4つの財団の間で分割される予定だ。 95歳の彼は、残りの株式を今後8年間かけて処分するつもりだと語った。
「もちろん、死亡率は予測できない」とバフェット氏は言う。 「しかし、私の残りの株式は、2034年12月31日までに何らかの形で4つの財団に寄付される予定です。」
ゲイツ氏とエプスタイン氏の関係は、米国司法省が1月にファイルを公開した際に明らかになった。
バフェット氏は寄付に関する声明の中でゲイツ氏やエプスタイン氏の名前には言及しなかった。
しかし3月、同氏は社外のCNBCに対し、「全容が明らかにされて以来」ゲイツ氏とは話をしていないと語った。
同氏はさらに、「証人として呼ばれるような、物事を知る立場にはなりたくない」と付け加えた。
バフェット氏は20年間でゲイツ氏の慈善団体に470億ドル（350億ポンド）を寄付した。
ゲイツ財団はBBCに対し、「私たちの活動に対する数十年にわたる支援に対し、ウォーレン・バフェット氏に感謝している」と語った。
同財団は「ビル氏の2,000億ドルのコミットメントに支えられ、財団は2045年まで私たちの活動を推進する財政力のある立場から継続する」と述べた。
6月、ゲイツ氏は米下院監視委員会に出廷し、2019年に性的人身売買容疑で裁判を待つ間にニューヨーク刑務所で死亡したエプスタイン氏との関係に関する質問に答えた。
ゲイツ氏は証言記録の中で、財団の重要な焦点である世界保健のために数十億ドルを集めることができるという前提で2011年にエプスタイン氏に紹介されたと述べた。
ゲイツ氏は「エプスタイン氏が以前にも法的問題に直面していたことは知っていたが、彼が犯した犯罪の程度は完全には理解していなかった」と述べた。
3年前、エプスタイン被告は未成年者を売春に勧誘し、18歳未満の者を売春に斡旋したとして有罪を認めていた。
ゲイツ氏は委員会に対し、「そもそも私はエプスタイン氏と会うべきではなかった。今私が知っていることに基づくと、たとえ彼が約束した寄付金を提供していたとしても、彼と関わることは正当化されなかったであろうことを理解している」と語った。
バフェット氏はビル・アンド・メリンダ・ゲイツ財団の熱狂的な支持者で、2006年には同財団の成果を「大いに」賞賛し、毎年寄付することを約束したと述べた。
2010年、ビル・ゲイツ、メリンダ・ゲイツ、そしてバフェットはGiving Pledgeを開始しました。これは、並外れて裕福な人々に、生涯または遺言で財産の大部分を寄付してもらうことを目的としています。
ビル・ゲイツとメリンダ・ゲイツは27年間の結婚生活を経て、2021年に離婚した。
メリンダ・フレンチ・ゲイツさんは2024年に共同設立した財団を辞任し、米国の女性の権利を支援するために10億ドルを寄付すると述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c8x2x549vgdo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T18:05:11+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/ee0b/live/574e7da0-7fa1-11f1-a5f4-433bb9aa2e5a.jpg",
    readTime: 4,
  },
  {
    id: "trump-scraps-threat-of-20-fee-on-hormuz-34ac38df",
    title: "Trump scraps threat of 20% fee on Hormuz cargo as US prepares to resume blockade of Iran ports",
    titleJa: "米国がイラン港湾封鎖再開の準備中、トランプ大統領、ホルムズ貨物に20％の手数料を課す脅しを撤回",
    summaryJa: "米国がイラン港湾封鎖再開の準備中、トランプ大統領、ホルムズ貨物に20％の手数料を課す脅しを撤回- 公開されました",
    bodyOriginal: `Trump scraps threat of 20% fee on Hormuz cargo as US prepares to resume blockade of Iran ports
- Published
President Donald Trump has reversed his threat of a 20% fee on all Strait of Hormuz cargo shipping, as the US battles to break Iran's hold on the waterway.
He said the toll would be replaced by trade and investment deals with Gulf states, just hours before the US resumes a blockade of Iranian ports.
It follows renewed strikes between the US and Iran, which triggered a sharp rise in oil prices as tanker traffic through the Strait has virtually stalled.
The US earlier said it had carried out a third night of attacks to degrade Iran's ability to hit the shipping in the area, and on Tuesday Iran's state media reported blasts in multiple cities, including Bushehr - home to a nuclear power plant.
Tehran said it had targeted US military facilities in Bahrain and Jordan after earlier hitting two United Arab Emirates tankers.
The ongoing strikes have underscored the strategic importance of the Strait. Iran accuses the US of interfering in its management of Hormuz – but controlling it means Tehran can also threaten the global economy.
Trump on Monday declared that the US was now the "guardian" of the Strait of Hormuz, and vowed to impose a 20% charge on all cargo shipped through the waterway to pay for protecting it.
Raising the stakes further, Trump said the US would also reimpose its naval blockade on Iran, in a bid to further squeeze the country's struggling economy.
US Central Command (Centcom) on Monday said that the US naval blockade on Iranian ports would be in effect from 16:00 Eastern Time (20:00 GMT/21:00 BST) on Tuesday.
But in his latest post on Truth Social, Trump wrote: "I have decided to replace the 20% United States Reimbursement Fee with Trade and Investment Deals that the various Gulf States will be making into the United States.
"Those Investments will be MASSIVE but, at the same time, extraordinarily good for them, and their future." The US president provided no further details.
He also said that the Strait "is open to ALL Ship traffic except for Iran" and that "oil is flowing like never before, thanks to the awesome Power of the United States Military".
Speaking later after talks in Washington with the new Iraqi Prime Minister Ali al-Zaidi, Mr Trump said: "I don't like the concept of a fee, but at the same time, it's not fair that we're protecting this Strait for the entire world."
He said he had changed his initial fee plan after receiving numerous calls from Gulf leaders.
Meanwhile, shipping data shows traffic through the Strait has slowed to a two-months low. The benchmark Brent Crude oil price has also risen sharply.
Iran effectively shut down the waterway - through which some 25% of the world's oil and 20% of global liquefied natural gas previously passed - after the US and Israel launched strikes against Iran on 28 February.
In a separate development on Tuesday, Israel's Prime Minister Benjamin Netanyahu warned that his country's retaliation against Iran would be "much more powerful" if it is attacked first.
"I will say it to the leaders of Iran: Do not count on things remaining quiet if you attack us," he said in a video published on his social media.
Related topics
- Published14 hours ago
- Published18 June`,
    bodyJa: `米国がイラン港湾封鎖再開の準備中、トランプ大統領、ホルムズ貨物に20％の手数料を課す脅しを撤回
- 公開されました
米国がイランによる水路支配を打破すべく奮闘する中、ドナルド・トランプ大統領は、ホルムズ海峡のすべての貨物輸送に20％の手数料を課すという脅しを撤回した。
同氏は、米国がイランの港湾封鎖を再開する数時間前に、通行料の代わりに湾岸諸国との貿易・投資協定を締結すると述べた。
これは、米国とイランの間の新たな攻撃を受け、海峡を通過するタンカーの交通が事実上停滞する中、原油価格の急騰を引き起こした。
米国はこれに先立ち、同地域の船舶を攻撃するイランの能力を低下させるために3夜連続の攻撃を行ったと発表し、火曜日にはイラン国営メディアが原子力発電所のあるブーシェフルを含む複数の都市で爆発があったと報じた。
イラン政府は、先にアラブ首長国連邦のタンカー2隻を攻撃した後、バーレーンとヨルダンの米軍施設を標的にしたと発表した。
現在進行中のストライキは、海峡の戦略的重要性を浮き彫りにした。イランは米国がホルムズの管理に干渉していると非難しているが、それを管理するということはイランが世界経済にも脅威を与える可能性があることを意味する。
トランプ大統領は月曜日、米国は現在ホルムズ海峡の「守護者」であると宣言し、ホルムズ海峡を守る費用として同水路を通って輸送されるすべての貨物に20％の料金を課すと約束した。
トランプ大統領は、賭け金をさらに高めて、米国は低迷する同国の経済をさらに圧迫するため、イランに対する海上封鎖を再び課すだろうと述べた。
米中央軍（セントコム）は月曜日、イラン港湾に対する米国の海上封鎖は火曜日の東部時間16時（日本時間20時/BST21時）から実施されると発表した。
しかしトランプ大統領は、Truth Socialへの最新の投稿で、「私は20％の米国償還手数料を、湾岸諸国が米国と締結する貿易・投資協定に置き換えることを決定した」と書いた。
「これらの投資は莫大なものになるでしょうが、同時に彼らと彼らの将来にとって非常に良いものになるでしょう。」米大統領はそれ以上の詳細には言及しなかった。
同氏はまた、海峡は「イランを除くすべての船舶の航行に開かれている」とし、「米軍の恐るべき力のおかげで、石油はかつてないほど流れている」とも述べた。
トランプ氏はその後、ワシントンでイラクの新首相アリ・アルザイディと会談した後、「料金という概念は好きではないが、同時に、我々が全世界のためにこの海峡を守るのは不公平だ」と述べた。
同氏は、湾岸諸国の指導者らから何度も電話を受けたため、初期料金プランを変更したと述べた。
一方、海運データは、海峡を通過する交通量が2カ月ぶりの低水準に減速していることを示している。指標となるブレント原油価格も大幅に上昇した。
米国とイスラエルが2月28日にイランに対する攻撃を開始した後、イランはこれまで世界の石油の約25％と世界の液化天然ガスの20％が通過していた水路を事実上閉鎖した。
火曜日の別の展開として、イスラエルのベンヤミン・ネタニヤフ首相は、イランが先に攻撃された場合、イランに対する同国の報復は「より強力になる」と警告した。
同氏は自身のソーシャルメディアに公開した動画で、「イランの指導者たちに言いたい。もし我々を攻撃するなら、事態が静かに保たれることを当てにしてはいけない」と述べた。
関連トピック
- 14 時間前に公開
- 6 月 18 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy0608wy8pro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T16:54:46+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d6c0/live/e8f90230-7fb4-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 4,
  },
  {
    id: "port-of-dover-works-to-avoid-summer-trav-b3531998",
    title: "Port of Dover works to avoid summer travel chaos",
    titleJa: "ドーバー港は夏の旅行の混乱を避けるために取り組んでいます",
    summaryJa: "ドーバー港は夏の旅行の混乱を避けるために取り組んでいます- 公開されました",
    bodyOriginal: `Port of Dover works to avoid summer travel chaos
- Published
The Port of Dover has done "absolutely everything" to prepare for the summer getaway amid fears of more delays from new EU border checks, its boss said.
Doug Bannister, chief executive of the Kent port, said it was "very disappointing" a new Entry Exit System (EES) processing facility – built as part of a £40m investment – was not being used for cars because the technology had not been activated.
EES, rolled out fully in April, involves passengers having their fingerprints registered and photograph taken to enter the Schengen Area.
The port declared a "critical incident" in May half-term after waiting times reached four-and-a-half hours on a day with about 8,500 outbound vehicles.
For most UK travellers, the process happens at foreign airports, but it is also carried out at the Port of Dover, Eurotunnel's Folkestone terminal and London St Pancras railway station, which all have juxtaposed border controls.
Bannister recently told MPs the port would "face repeated episodes of severe congestion" this summer unless the EU permits more flexibility in EES, which had not happened.
Most schools in England and Wales break up for the summer holidays at the end of this week or early next week, while the academic year has already ended in Scotland and Northern Ireland.
The Port of Dover expects to have about 7,500 outbound cars on Friday, rising to nearly 10,000 on Saturday.
The end of next week will be even busier, with about 10,500 outbound cars on both 24 and 25 July.
It was previously hoped many of these would complete their EES registrations at the new Western Docks facility, which is equipped with 84 kiosks to record biometric details.
But the French authorities have not switched the kiosks on, and no date has been set for when that will happen.
'Disappointing'
"We delivered our Western Docks facility after investing £40m of our capital," said Bannister.
"We were under constant pressure to have it be operational, pursuant to the timeline that was EES, and it's been specifically designed to handle our peak volumes safely and efficiently, and we can't use it.
"It is very disappointing."
Holidaymakers are being urged to use only main roads when driving to the port, and arrive no more than two hours before their booked sailing.
Since May, the port has installed new border positions in its ferry terminal, and the French authorities have agreed to its suggested resource requirements.
Bannister said: "We've done absolutely everything that we can... in preparing for the summer.
"But there are still a lot of unknowns and uncertainties around how the EES process will affect travel."
Transport Secretary Heidi Alexander recently met French counterpart Phillippe Tabarot to call for a pragmatic approach to EES checks.
Bannister said she had "leaned in personally on trying to get the messages clear".
Some £20m of new government funding was announced by the Department for Transport on Monday to boost infrastructure in Kent to reduce delays.
This is on top of a previous £10.5m investment shared by the three English sites with juxtaposed border controls.
Additional reporting by PA Media.
Follow BBC Kent on Facebook,, external X, external and on Instagram,, external and listen to BBC Radio Kent on Sounds. Send your story ideas to southeasttoday@bbc.co.uk, external or WhatsApp us on 08081 002250.
Related topics
- Published2 July
- Published23 June`,
    bodyJa: `ドーバー港は夏の旅行の混乱を避けるために取り組んでいます
- 公開されました
新たなEU国境検査によるさらなる遅れが懸念される中、ドーバー港は夏の休暇に向けて「万全の準備をした」と港湾局長は述べた。
ケント港のダグ・バニスター最高経営責任者（CEO）は、4,000万ポンドの投資の一部として建設された新しい入退出システム（EES）処理施設が、技術が有効化されていないため自動車に使用されなかったことは「非常に残念だ」と述べた。
4月に本格的に導入されたEESでは、乗客がシェンゲン圏に入国する際に指紋を登録し、写真を撮られることになる。
約8,500台の出航車両で1日の待ち時間が4時間半に達したことを受け、同港は5月半期に「重大インシデント」を宣言した。
ほとんどの英国旅行者にとって、この手続きは外国の空港で行われますが、国境検査が並行して行われているドーバー港、ユーロトンネルのフォークストンターミナル、ロンドンのセントパンクラス駅でも行われます。
バニスター氏は最近、EUがEESにおけるさらなる柔軟性を認めない限り、同港はこの夏「度重なる深刻な渋滞に直面するだろう」と国会議員らに語ったが、実際にはそうならなかった。
イングランドとウェールズのほとんどの学校は今週末か来週初めに夏休みに入るが、スコットランドと北アイルランドではすでに学年度が終了している。
ドーバー港では金曜日には約7,500台の出国車があり、土曜日には10,000台近くに増加すると予想されている。
来週末はさらに混雑し、7月24日と25日の両日の下り車は約10,500台になるだろう。
以前は、こうした人々の多くが、生体認証の詳細を記録するための 84 台のキオスクを備えた新しいウエスタン・ドックス施設で EES 登録を完了することが期待されていました。
しかし、フランス当局はキオスクのスイッチを入れておらず、いつそれが行われるかは決まっていない。
「残念だ」
「資本金4,000万ポンドを投資した後、ウェスタン・ドックス施設を完成させました」とバニスター氏は語った。
「私たちはEESというタイムラインに従ってそれを稼働させるという常にプレッシャーにさらされていましたが、それはピーク時の生産量を安全かつ効率的に処理するように特別に設計されているのに、私たちはそれを使用することができません。
「とても残念です。」
行楽客には、車で港に向かう際は幹線道路のみを利用し、予約した出航の２時間以上前に到着するよう呼び掛けられている。
5月以来、同港はフェリーターミナルに新たな国境地点を設置し、フランス当局は提案された資源要件に同意した。
バニスター氏は「我々は夏に向けてできる限りのことはすべてやった。
「しかし、EESのプロセスが旅行にどのような影響を与えるかについては、まだ不明な点や不確実性がたくさんあります。」
ハイジ・アレクサンダー運輸長官は最近、フランスのフィリップ・タバロ運輸長官と会談し、EESチェックに対する現実的なアプローチを求めた。
バニスターさんは「メッセージを明確に伝えることに個人的に力を入れてきた」と語った。
月曜日、運輸省は、遅延を減らすためにケント州のインフラを強化するために、約2,000万ポンドの新たな政府資金を発表した。
これは、国境管理を並行して行う英国の 3 つの拠点が分担した以前の 1,050 万ポンドの投資に追加されるものです。
PAメディアによる追加報道。
Facebook で BBC Kent をフォローし、外部 X、外部および Instagram で BBC Kent をフォローし、BBC Radio Kent on Sounds を聞いてください。ストーリーのアイデアを、southeasttoday@bbc.co.uk、社外、または WhatsApp (08081 002250) に送信してください。
関連トピック
- 7 月 2 日発行
- 6 月 23 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cp8l8zdn7k6o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T16:42:13+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fcd1/live/0d3e7d10-7fa0-11f1-926f-c90d1bcfbc84.jpg",
    readTime: 4,
  },
  {
    id: "here-s-the-inflation-breakdown-for-june-f373bf63",
    title: "Here’s the inflation breakdown for June 2026 — in one chart",
    titleJa: "2026 年 6 月のインフレの内訳を 1 つのグラフで示します",
    summaryJa: "消費者物価はエネルギーとガソリン価格の下落を受けて6月に反落したが、イラン戦争の影響でここ数カ月間急激に上昇した後、反転した。しかしエコノミストらは、米国とイランの敵対関係が再燃する中、今後数カ月以内にインフレが再燃するリスクがあると指摘した。労働統計局が火曜日に発表したところによると、インフレのバロメーターである消費者物価指数は6月に12カ月前に比べて3.5％上昇した。",
    bodyOriginal: `Consumer prices pulled back in June on the heels of lower energy and gasoline prices, a reversal after moving sharply upward in recent months due to the Iran war. However, inflation risks re-igniting in coming months amid renewed hostilities between the U.S. and Iran, economists said.
The consumer price index, an inflation barometer, rose 3.5% in June from 12 months earlier, the Bureau of Labor Statistics said Tuesday.
That's down from 4.2% in May — the first decline in the annual inflation rate since January, when it stood at 2.4%.
"It suggests the worst is over, we're past the peak and inflation should moderate," said Mark Zandi, chief economist at Moody's.
"The biggest threat is that things unravel and we're back to full-blown war with the Strait [of Hormuz] shut down," he said.
That could push interest rates higher. The inflation rate is one of the economic indicators the Federal Reserve uses to guide interest rate decisions. Prior to this latest CPI reading, policymakers at the U.S. central bank had recently signaled an increase in borrowing costs could be on the table to try to contain inflation. The Fed aims for an annual inflation rate around 2% over the long term.
Barring renewed tensions, economists said that inflation should moderate, likely keeping the Fed from increasing borrowing costs.
"We think inflation will continue the process of slowing down over the coming year," said Tom Porcelli, chief economist at Wells Fargo. "We don't see a compelling reason at this point for the Fed to raise rates."
U.S.-Iran escalation could reignite inflation
The U.S. and Iran reached a temporary ceasefire deal in mid-June to try to end the conflict that erupted Feb. 28, when the U.S. and Israel bombed Iran.
Global oil prices declined substantially throughout June, from more than $90 per barrel to roughly $73 per barrel by the end of the month.
Prices for gasoline, which is refined from crude oil, and other fuels and energy products fell dramatically as a result.
Gasoline prices fell about 10% in June while fuel oil declined 9% and the broader energy category declined 6%, according to the inflation data issued Tuesday. However, each is up by double digits over the past year: By 27%, 43% and 16%, respectively.
Since energy and fuel are major cost inputs for businesses — fuel to power airplanes and transport food to grocery stores, for example — consumers have seen prices rise to varying degrees elsewhere, too.
The price reprieve in June may be short-lived amid flaring tensions in the Middle East.
That U.S.-Iran ceasefire deal appears increasingly fractured after the adversaries exchanged hostilities for a third consecutive day on Tuesday. Global oil prices had risen to about $86 per barrel as of 9:45 a.m. ET on Tuesday.
"A serious re-escalation of the conflict would threaten to revive the key upside risk to inflation and raise the odds of rate hikes," Goldman Sachs Research wrote in a note on Sunday.
Largest one-month drop since April 2020
Overall, the consumer price index declined by 0.4% on a monthly basis in June — the largest one-month decrease since April 2020, at the onset of the Covid-19 pandemic, the BLS said.
The energy index was the largest contributor to that decrease, "more than offsetting" increases in other indexes like those for shelter and food, the BLS said.
But there were declines elsewhere, too.
The price for new vehicles remained steady during the month. Used car and truck prices declined 0.2% in June, bringing the annual decline to about 2%, likely due to weak consumer demand amid affordability concerns for cars, Zandi said.
Apparel and electricity prices were also down "big time" during the month, while medical services prices also decreased and housing was "barely up," Zandi said.
However, he doesn't expect all these trends to continue, and chalked up some of the price weakness to data "anomalies" that can occur in CPI reports from time to time.
Indeed, specific categories within the broader CPI report can surge or fall back amid various supply and demand issues.
For example, beef roast prices are up about 14% over the past year amid a decades-low cattle supply. Tariffs and adverse weather also pushed up tomato prices 20% in the past year, though they've recently begun falling back.
Ultimately, "there are a lot of gravitational forces at work that should push inflation back to target — assuming the war doesn't go off the rails again," Zandi said.`,
    bodyJa: `消費者物価はエネルギーとガソリン価格の下落を受けて6月に反落したが、イラン戦争の影響でここ数カ月間急激に上昇した後、反転した。しかしエコノミストらは、米国とイランの敵対関係が再燃する中、今後数カ月以内にインフレが再燃するリスクがあると指摘した。
労働統計局が火曜日に発表したところによると、インフレのバロメーターである消費者物価指数は6月に12カ月前に比べて3.5％上昇した。
これは5月の4.2％から低下しており、年間インフレ率の低下は1月の2.4％以来となる。
ムーディーズの首席エコノミスト、マーク・ザンディ氏は「最悪の時期は過ぎ、ピークは過ぎ、インフレは緩やかになるはずだということを示唆している」と述べた。
「最大の脅威は、事態が解明され、（ホルムズ）海峡が封鎖されて本格的な戦争に逆戻りすることだ」と述べた。
そうなると金利が上昇する可能性がある。インフレ率は、連邦準備制度が金利決定の指針として使用する経済指標の 1 つです。この最新のCPI統計に先立って、米国中央銀行の政策当局者らは最近、インフレ抑制を図るために借入コストの増加が検討の対象となる可能性があると示唆していた。 FRBは長期的に年間インフレ率を2％程度にすることを目指している。
エコノミストらは、緊張が新たに起こらない限り、インフレは緩やかになるはずで、FRBが借入コストを引き上げる可能性は低いとの見方を示した。
ウェルズ・ファーゴの首席エコノミスト、トム・ポーセリ氏は「インフレは来年も減速の過程を続けると考えている」と述べた。 「現時点ではFRBが利上げする説得力のある理由は見当たりません。」
米国とイランの関係エスカレーションでインフレが再燃する可能性
米国とイランは、2月28日に米国とイスラエルがイランを爆撃して勃発した紛争の終結を目指し、6月中旬に一時停戦合意に達した。
世界の原油価格は6月を通じて大幅に下落し、1バレルあたり90ドル以上から月末までに1バレルあたり約73ドルとなった。
その結果、原油から精製されるガソリンやその他の燃料、エネルギー製品の価格が大幅に下落した。
火曜日に発表されたインフレデータによると、6月のガソリン価格は約10％下落し、燃料油は9％下落し、より広範なエネルギーカテゴリーは6％下落した。ただし、過去 1 年間でそれぞれ 27%、43%、16% と 2 桁増加しています。
エネルギーと燃料は企業にとって主要なコスト投入要素であるため（たとえば、飛行機に動力を供給したり、食料品店に食料品を輸送するための燃料）、消費者は他の地域でもさまざまな程度の価格上昇を目にしている。
中東情勢の緊張が高まる中、6月の価格猶予は長くは続かない可能性がある。
米国とイランの停戦協定は、火曜日に敵対者が3日連続で敵対行為を交わしたことにより、ますます破綻しているように見える。世界の原油価格は東部時間火曜日午前９時４５分の時点で１バレル＝約８６ドルまで上昇した。
ゴールドマン・サックス・リサーチは日曜日のリポートで「紛争が深刻に再エスカレートすれば、インフレに対する重要な上振れリスクが再び高まり、利上げの可能性が高まる恐れがある」と述べた。
1カ月としては2020年4月以来最大の下落率
全体として、6月の消費者物価指数は月次ベースで0.4%下落し、1か月としては新型コロナウイルス感染症パンデミックが始まった2020年4月以来最大の下落となったとBLSは述べた。
BLSは、エネルギー指数がその減少に最も大きく寄与しており、住居や食料など他の指数の上昇を「相殺して以上」だと述べた。
しかし、他の場所でも減少がありました。
新車価格は当月を通じて安定した。ザンディ氏は、6月の中古車とトラックの価格は0.2％下落し、年間の下落率は約2％となったが、これはおそらく車の手頃な価格への懸念による消費者需要の低迷が原因だと述べた。
ザンディ氏は、衣料品と電気の価格も同月に「大幅に」下落したが、医療サービス価格も下落し、住宅価格は「かろうじて上昇した」と述べた。
しかし、同氏はこれらすべての傾向が今後も続くとは予想しておらず、物価低迷の一部はCPI報告書で時折発生する可能性のあるデータの「異常」によるものだと説明した。
実際、広範な CPI レポート内の特定のカテゴリーは、さまざまな需要と供給の問題の中で急騰したり、反落したりする可能性があります。
例えば、牛肉の供給が数十年にわたって低迷している中、ローストビーフの価格は過去1年間で約14％上昇している。関税と悪天候も昨年トマトの価格を20％押し上げたが、最近は反落し始めている。
結局のところ、「戦争が再び軌道に乗らなければ、インフレ率を目標に戻すはずの多くの重力が働いている」とザンディ氏は述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/inflation-cpi-june-2026-in-one-chart.html",
    publishedAt: "2026-07-14T15:52:52+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 5,
  },
  {
    id: "consumer-prices-rose-3-5-annually-in-jun-bbccdc58",
    title: "Consumer prices rose 3.5% annually in June, less than expected as energy prices eased",
    titleJa: "6月の消費者物価は年率3.5％上昇したが、エネルギー価格の緩和を受けて予想を下回った",
    summaryJa: "エネルギー価格の急騰が今年のインフレ急騰を少なくとも一時的に緩和したため、6月の消費者物価は過去6年以上で最大の下落を記録したと労働統計局が火曜日に報告した。米国経済全体の商品やサービスのコストを示す広範な指標である消費者物価指数は、全体的に予想を下回った。同月のCPIは季節調整済みで0.4％低下し、年間インフレ率は3.5％に低下した。",
    bodyOriginal: `Consumer prices posted their biggest decline in more than six years during June as a sharp swoon in energy prices provided at least temporary relief from this year's inflation surge, the Bureau of Labor Statistics reported Tuesday.
The consumer price index, a broad measure of costs for goods and services across the U.S. economy, was lower than expected across the board. The CPI fell a seasonally adjusted 0.4% for the month, bringing the annual inflation rate down to 3.5%.
Economists surveyed by Dow Jones had been looking for a drop of 0.2% and an inflation rate of 3.8%, following the 4.2% reading in May. The monthly decline in headline inflation was the biggest since April 2020.
Core inflation, which excludes food and energy, was flat on the month, putting the 12-month rate at 2.6%. The consensus forecast was for respective increases of 0.2% and 2.9%, following a 2.9% May level.
The energy index slumped 5.7% in June, its biggest monthly drop since April 2020, though it still surged 15.7% on an annual basis, pushed by a 26.7% gain for gasoline. However, gasoline and fuel oil both saw decreases of more than 9% in June.
In addition, services costs, which are closely watched by Federal Reserve policymakers for longer-run inflation trends, moderated significantly. Services excluding energy costs were flat, with shelter rising just 0.1% and transportation services posting a 0.3% decline.
Food prices rose 0.2%, while new vehicles were flat and used cars and trucks saw a 0.2% decline. Apparel prices, which are sensitive to both energy and tariff inputs, fell 0.6%.
Stock market futures were mostly positive following the report while Treasury yields were sharply lower. Traders continued to expect the Fed to hike in September, though they lowered the odds to 63% from better than 75% a day ago, according to the CME's FedWatch measure of futures prices.
The Fed currently targets its key overnight borrowing rate in a range between 3.5%-3.75%.
"June finally brought some relief on inflation," said Heather Long, chief economist at Navy Federal Credit Union. "This takes the pressure off the Federal Reserve and allows the central bank to wait and see what happens. The concern is that this relief will be short-lived as the war in Iran re-starts. It's too uncertain to know how the inflation story ends."
Though the inflation readings provided some hope, they are unlikely to motivate Federal Reserve officials to lower interest rates anytime soon, with the central bank broadly expected to raise its benchmark rate in September. Fed Governor Christopher Waller said Monday that it would take several months of positive readings to convince him that inflation is moving back to the central bank's 2% target.
The report follows tough talk from Fed officials about inflation. Following their June meeting, policymakers released a statement flatly saying the rate-setting Federal Open Market Committee "will deliver price stability."
New Fed Chairman Kevin Warsh, while previously expressing a belief that interest rates could be lowered in the future, has made controlling inflation a centerpiece of his message since taking office in May.
"The Fed's number one objective is to get monetary policy right — or as near to it as we possibly can." Warsh said in remarks to Congress set for delivery Tuesday. "That is our clear and constant aim, the star we steer by. And if we get policy right — and we will — the inflation surge of the last five years will be a thing of the past."
Easing inflation could become temporary depending on how things play out in the Middle East.
An lessening of hostilities helped drive oil costs about 25% lower in June, but President Donald Trump last week declared a ceasefire with Iran over as the two sides exchanged attacks. Oil spiked Monday and was higher again Tuesday.
"The longer the conflict drags on, the higher the probability that the Fed will have to hike and back its promise from Warsh's first meeting as Chair to 'deliver on price stability,'" said Ryan Weldon, investment director at IFM Investors.`,
    bodyJa: `エネルギー価格の急騰が今年のインフレ急騰を少なくとも一時的に緩和したため、6月の消費者物価は過去6年以上で最大の下落を記録したと労働統計局が火曜日に報告した。
米国経済全体の商品やサービスのコストを示す広範な指標である消費者物価指数は、全体的に予想を下回った。同月のCPIは季節調整済みで0.4％低下し、年間インフレ率は3.5％に低下した。
ダウ・ジョーンズが調査したエコノミストらは、5月の4.2％に続き、0.2％の下落と3.8％のインフレ率を予想していた。総合インフレ率の月間下落率は2020年4月以来最大となった。
食品とエネルギーを除いたコアインフレ率は前月比横ばいで、１２カ月のインフレ率は２．６％となった。コンセンサス予想は５月の２．９％水準に続き、それぞれ０．２％増と２．９％増だった。
6月のエネルギー指数は5.7％下落し、月としては2020年4月以来最大の下落となったが、それでも年率ベースではガソリンの26.7％上昇に押されて15.7％上昇した。しかし、6月にはガソリンと燃料油がともに9％以上減少した。
さらに、連邦準備理事会の政策当局者が長期的なインフレ傾向を注視しているサービスコストも大幅に減少した。エネルギーコストを除くサービスは横ばいで、避難所はわずか0.1%の上昇にとどまり、交通サービスは0.3%の減少となった。
食品価格は０．２％上昇したが、新車は横ばい、中古車とトラックは０．２％下落した。エネルギーと関税投入量の両方に影響を受けやすいアパレル価格は０．６％下落した。
この報道を受けて株式市場の先物相場はおおむねプラスとなったが、米国債利回りは大幅に低下した。 ＣＭＥのフェドウォッチによる先物価格指標によると、トレーダーらは引き続きＦＲＢが９月に利上げすると予想しているが、その確率は前日の７５％超から６３％に引き下げられた。
FRBは現在、主要な翌日物借入金利の目標を3.5％─3.75％の範囲に設定している。
海軍連邦信用組合の首席エコノミスト、ヘザー・ロング氏は「６月になってようやくインフレがいくらか緩和された」と述べた。 「これによりFRBからの圧力がなくなり、中央銀行は様子を見守ることができるようになる。懸念されるのは、イラン戦争が再開する中、この救済措置も長くは続かないことだ。インフレの結末がどうなるのかは不確実すぎて分からない。」
インフレ統計はある程度の希望を与えたものの、連邦準備理事会当局者が近いうちに金利を引き下げる動機となる可能性は低く、中央銀行は9月に基準金利を引き上げると広く予想されている。 FRBのクリストファー・ウォーラー総裁は月曜日、インフレ率が中銀の目標である2％に戻りつつあると確信するには、前向きな読みが数カ月かかるだろうと述べた。
この報告書は、インフレに関するFRB当局者の厳しい発言を受けてのものだ。 6月の会合後、政策当局者らは声明を発表し、金利設定を行う連邦公開市場委員会が「物価の安定を実現する」とキッパリ述べた。
ケビン・ウォーシュ新FRB議長は以前、将来金利が引き下げられる可能性があるとの考えを表明していたが、5月の就任以来、インフレ抑制をメッセージの中心に据えている。
「FRBの第一の目的は、金融政策を正しく、あるいは可能な限りそれに近づけることだ。」ウォーシュ氏は火曜日に予定されている議会での発言の中でこう述べた。 「それが我々の明確かつ不変の目標であり、我々が舵を切る星だ。そして我々が政策を正しく行えば、そして我々はそうするだろうが、過去5年間のインフレ急増は過去のものになるだろう。」
中東情勢の展開次第では、インフレの緩和は一時的なものになる可能性がある。
敵対行為の緩和により、6月の石油価格は約25％下落したが、先週、両国が攻撃を交わす中、ドナルド・トランプ大統領はイランとの停戦を宣言した。原油は月曜日に急騰し、火曜日には再び上昇した。
ＩＦＭインベスターズの投資ディレクター、ライアン・ウェルドン氏は「紛争が長引けば長引くほど、ＦＲＢが利上げし、ウォーシュ議長としての初会合での『物価安定の実現』という約束を支持しなければならない可能性が高くなる」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/consumer-price-index-inflation-report-june-2026.html",
    publishedAt: "2026-07-14T14:02:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "ibm-stock-craters-23-after-issuing-secon-cf9d3b26",
    title: "IBM stock craters 23% after issuing second-quarter earnings warning",
    titleJa: "第2四半期の業績に関する警告発表後、IBMの株価は23％急落",
    summaryJa: "ハードウェア、ソフトウェア、コンサルティングを提供する同社が発表した第2四半期の暫定決算が予想を下回ったことを受け、火曜日のインターナショナル・ビジネス・マシーンズの株価は23％下落した。株価は２３．７％下落した１９８７年１０月１９日以来の最悪のペースとなっている。",
    bodyOriginal: `International Business Machines shares slipped 23% on Tuesday after the hardware, software and consulting provider released preliminary second-quarter results that fell short of expectations.
The stock is pacing its worst day since Oct. 19, 1987, when shares fell 23.7%.
The tech company reported adjusted earnings of $2.93 a share on revenue of $17.2 billion, below analysts' expectations for earnings of $3.01 a share and revenue of $17.86 billion, according to FactSet.
CEO Arvind Krishna blamed the shortfall on weakness in the software and infrastructure business, as clients shifted spending toward hardware purchases such as memory chips.
"In the last few weeks of June, we saw clients shift their quarterly capex spend toward servers, storage, and memory purchases to secure supply-constrained infrastructure ahead of expected price increases," Krishna wrote in a letter to IBM investors. "While we anticipated some supply chain related impact in our expectations, we did not anticipate the magnitude of the capex reprioritization."
"These conditions require our teams to execute perfectly, and this quarter we faltered. We did not adapt and move quickly enough, and numerous large deals failed to close on the timelines we expected, driving the majority of our shortfall," Krishna added.
In IBM's previous quarter, the company's software revenue grew 11% to $7.05 billion in the first quarter, helping lift the company to report stronger-than-expected results that returned an adjusted $1.91 per share versus $1.81 expected by analysts.
First-quarter revenue came in at $15.92 billion, also topping estimates of $15.62 billion.
Tuesday's slip comes as fears continue that the growth in artificial intelligence tools will disrupt the businesses of the biggest software companies.
Memory names like Micron and SK Hynix have been among the latest beneficiaries of the buildout, as demand linked to running and processing AI workloads skyrockets.`,
    bodyJa: `ハードウェア、ソフトウェア、コンサルティングを提供する同社が発表した第2四半期の暫定決算が予想を下回ったことを受け、火曜日のインターナショナル・ビジネス・マシーンズの株価は23％下落した。
株価は２３．７％下落した１９８７年１０月１９日以来の最悪のペースとなっている。
ファクトセットによると、同社の調整後利益は1株当たり2.93ドル、売上高は172億ドルと報告されており、アナリスト予想の1株利益3.01ドル、売上高178億6,000万ドルを下回った。
CEOのアルビンド・クリシュナ氏は、顧客がメモリチップなどのハードウェアの購入に支出を移したため、この不足はソフトウェアおよびインフラ事業の弱さが原因だと主張した。
クリシュナ氏はIBM投資家に宛てた書簡の中で「6月最後の数週間、顧客が四半期ごとの設備投資をサーバー、ストレージ、メモリの購入に振り替え、予想される価格上昇に先立って供給に制約のあるインフラを確保するのを目にした」と述べた。 「私たちの予想ではサプライチェーン関連の影響はある程度予想していましたが、設備投資の再優先順位付けの規模は予想していませんでした。」
「これらの状況では、チームが完璧に遂行することが求められますが、この四半期では私たちは足踏みしました。私たちは適応して迅速に行動することができず、多くの大型取引が予想通りのスケジュールで成立しなかったため、不足額の大部分が生じました」とクリシュナ氏は付け加えた。
IBMの前四半期、第1四半期の同社のソフトウェア収益は11%増の70億5000万ドルとなり、アナリスト予想の1.81ドルに対し、調整後の1株利益は1.91ドルという予想を上回る好調な業績を同社が報告するのに貢献した。
第１・四半期の売上高は１５９億２０００万ドルで、予想の１５６億２０００万ドルも上回った。
火曜日の下落は、人工知能ツールの成長が最大手のソフトウェア企業のビジネスを混乱させるのではないかとの懸念が続く中で起きた。
AI ワークロードの実行と処理に関連する需要が急増する中、Micron や SK Hynix などのメモリ企業もこの増強の恩恵を最近受けています。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/ibm-warns-second-quarter-earnings-fell-short-of-expectations.html",
    publishedAt: "2026-07-14T13:57:39+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "us-inflation-rate-eases-to-3-5-as-gasoli-90da30b9",
    title: "US inflation rate eases to 3.5% as gasoline prices fall",
    titleJa: "ガソリン価格下落で米国のインフレ率は3.5％に低下",
    summaryJa: "ガソリン価格下落で米国のインフレ率は3.5％に低下- 公開されました",
    bodyOriginal: `US inflation rate eases to 3.5% as gasoline prices fall
- Published
Inflation in the US eased last month as the cost of filling up at the pumps fell, official figures show.
Prices rose 3.5% in the year to June, according to the Bureau of Labor Statistics (BLS), down from 4.2% recorded in May.
Gasoline prices decreased 9.7% last month, but are still much more expensive than a year ago. On Tuesday, the national average had risen to $3.86 a gallon from $3.79 a week ago, according to motorist advocacy group AAA.
While the rate of inflation has fallen more than expected, the easing of price rises could be short-lived due to the renewed conflict in the Middle East sending global oil prices up again.
The price of a barrel of Brent crude, which is the global benchmark for oil, hit $87 on Tuesday, an increase of almost $10 in the space of 24 hours.
The spike in the price of the commodity came after the fresh military strikes on Iran by the US this week, with President Donald Trump declaring a new naval blockade in the Strait of Hormuz and a 20% charge on all cargo being shipped through the key waterway used for global trade.
The escalation has already led analysts to predict that inflation will rise in the coming months and that interest rate cuts are unlikely anytime soon.
"Gasoline prices are already back above June levels, meaning the next inflation report will heat up again," said Ipek Ozkardeskaya, senior analyst at Swissquote Bank.
Ahead of his first address to the US Congress later, newly appointed Federal Reserve chairman Kevin Warsh said his committee had "no tolerance to persistently elevated inflation".
"We share a resolute commitment to restoring price stability," he said in prepared comments.
The Fed held US interest rates between 3.5% and 3.75% at Warsh's first meeting in June and some analysts suggest rates could be raised in the coming months.
President Trump pushed Warsh's predecessor, Jerome Powell, to cut interest rates, and has made it clear he expects Warsh to fulfil his demand for reductions in borrowing costs for Americans.
But Lindsay James, investment strategist at wealth management firm Quilter, said despite Warsh having got his "feet under the table, it does not mean rate cuts are looming in order to appease President Trump".
"Instead, we are likely to see a conservative outlook from the Federal Reserve when it meets in a fortnight," she added.
While energy prices fell last month, food price inflation increased further, with the cost of meat, poultry, fish and eggs going up, along with dairy products and cereals.
However, eating out remains more expensive, with meals on average costing 3.7% more than they did last year.
While the overall inflation rate fell in June, lower inflation does not mean that prices are getting cheaper, it is just that they are rising at a slower pace.
So-called core inflation, which strips out food and energy prices that are seen as volatile, remained unchanged in June at 2.6%.
That figure is what will be closely monitored by the Fed when it comes to deciding whether to cut, hold or raise interest rates.
Federal Reserve governor Christopher Waller warned on Monday that policymakers would have to consider raising rates.
"If we get another hot reading on core inflation this week, then the FOMC (Federal Open Market Committee) will need to consider tightening monetary policy in the near term," Waller told the New York Association for Business Economics.
"Sternly staring at inflation until it melts before our withering gaze is not an option."
The theory behind increasing interest rates to tackle inflation is that by making borrowing more expensive, more people will cut back on spending and that leads to demand for goods falling and price rises easing.
But it is a balancing act, as high interest rates can harm the economy as businesses may hold off from investing in production and jobs. Interest rate cuts, which Trump has called for, can boost the economy by lowering borrowing costs and encouraging spending and investment.
On Tuesday, more than a fifth of small business owners in the US reported that inflation was their "single most important" problem, the highest amount for almost two years, according to the National Federation of Independent Business.`,
    bodyJa: `ガソリン価格下落で米国のインフレ率は3.5％に低下
- 公開されました
公式統計によると、ポンプでの給油コストが低下したため、米国のインフレは先月緩和した。
労働統計局（BLS）によると、6月までの1年間に物価は3.5％上昇し、5月の4.2％上昇から鈍化した。
ガソリン価格は先月９．７％下落したが、それでも１年前に比べてかなり高価だ。自動車運転者擁護団体AAAによると、火曜日の全国平均は1ガロン当たり3.86ドルと、1週間前の3.79ドルから上昇した。
インフレ率は予想よりも低下しているが、中東紛争の再燃により世界の原油価格が再び上昇しているため、価格上昇の緩和は長く続かない可能性がある。
石油の世界的なベンチマークであるブレント原油の価格は火曜日に1バレル＝87ドルに達し、24時間でほぼ10ドル上昇した。
この商品価格の急騰は、今週米国がイランに対する新たな軍事攻撃を行った後に生じ、ドナルド・トランプ大統領はホルムズ海峡での新たな海上封鎖と、世界貿易に使用される重要な水路を通じて輸送されるすべての貨物に20％の関税を課すことを宣言した。
この事態のエスカレーションにより、アナリストらはすでにインフレ率が今後数カ月間に上昇し、近い将来には利下げの可能性は低いと予想している。
スイスクォート銀行のシニアアナリスト、イペク・オズカルデスカヤ氏は「ガソリン価格はすでに６月の水準を上回っており、次回のインフレ報告が再び加熱することを意味している」と述べた。
新たにFRB議長に任命されたケビン・ウォーシュ氏は、その後米議会での初演説を前に、同委員会は「持続的なインフレ高進を容認しない」と述べた。
同氏は用意したコメントで「われわれは物価安定の回復に向けた断固たる決意を共有している」と述べた。
FRBは6月のウォーシュ総裁の最初の会合で米金利を3.5％から3.75％の間に据え置いており、一部のアナリストは今後数カ月以内に利上げが行われる可能性があると示唆している。
トランプ大統領はウォーシュ氏の前任者ジェローム・パウエル氏に利下げを促し、米国人の借り入れコスト削減を求めるウォーシュ氏の要求を満たすことを期待していることを明らかにした。
しかし、資産管理会社キルターの投資ストラテジスト、リンジー・ジェームス氏は、ウォーシュ氏が「テーブルの下に足を踏み入れたとしても、それはトランプ大統領をなだめるために利下げが迫っていることを意味するものではない」と述べた。
「むしろ、２週間後の連邦準備理事会会合では、保守的な見通しが示される可能性が高い」と同氏は付け加えた。
エネルギー価格は先月下落したが、食品価格のインフレはさらに進み、肉、家禽、魚、卵の価格が乳製品や穀物とともに上昇した。
しかし、外食は依然として高価であり、食事の平均費用は昨年よりも 3.7% 高くなりました。
6月に全体的なインフレ率は低下しましたが、インフレ率の低下は物価が安くなっているということではなく、物価の上昇ペースが遅いというだけです。
変動しやすいとされる食品やエネルギー価格を差し引いたいわゆるコアインフレ率は、6月は2.6％で横ばいとなった。
FRBが利下げ、据え置き、利上げのいずれを行うかを決定する際に、この数字を注意深く監視することになる。
米連邦準備理事会（FRB）のクリストファー・ウォーラー総裁は月曜日、政策当局者は利上げを検討する必要があると警告した。
ウォラー氏はニューヨーク経済協会に対し、「今週、コアインフレに関する新たな有力な指標が得られれば、ＦＯＭＣ（連邦公開市場委員会）は短期的に金融政策の引き締めを検討する必要があるだろう」と述べた。
「私たちの萎縮する視線の前に、インフレが溶けるまで厳しい目でインフレを見つめることは選択肢ではない。」
インフレに対処するための金利上昇の背後にある理論は、借入がより高価になることで、より多くの人が支出を削減し、それが商品の需要の低下と価格上昇の緩和につながるというものです。
しかし、高金利は企業が生産や雇用への投資を控える可能性があり、経済に悪影響を与える可能性があるため、これはバランスをとるための措置である。トランプ大統領が要求している金利引き下げは、借り入れコストを低下させ、支出と投資を促すことで景気を押し上げることができる。
全米独立ビジネス連盟によると、火曜日、米国の中小企業経営者の5分の1以上がインフレが「最も重要な」問題であると報告し、その金額はほぼ2年ぶりの最高額となった。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c98289j7lg7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T13:51:22+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9c00/live/75181c70-7f7d-11f1-b1fb-a927e22d7e8b.jpg",
    readTime: 5,
  },
  {
    id: "sen-tim-scott-wants-to-hear-from-warsh-o-58728556",
    title: "Sen. Tim Scott wants to hear from Warsh on data centers and artificial intelligence",
    titleJa: "ティム・スコット上院議員はデータセンターと人工知能についてウォーシュ氏から聞きたいと考えている",
    summaryJa: "上院銀行委員会のティム・スコット委員長は火曜日、連邦準備制度理事会のケビン・ウォーシュ議長がデータセンターと人工知能について話すのを聞きたいと述べた。共和党、サウスカロライナ州のスコット氏は、水曜の委員会でウォーシュ氏をFRB議長として初めて迎える予定だ。同氏は半年に一度の金融政策報告書を議会に提出するようだ。しかし、CNBCのSquawk Boxに出演した際に聞きたいことを尋ねられたスコット氏は、会話がより広範になることを期待していると示唆した。",
    bodyOriginal: `Senate Banking Committee Chair Tim Scott said Tuesday he wants to hear Federal Reserve Chairman Kevin Warsh speak about data centers and artificial intelligence.
Scott, R-S.C., will host Warsh before his committee on Wednesday for the first time as Fed chairman. He's appearing to deliver the semiannual monetary policy report to Congress. But Scott signaled he hopes the conversation will be broader when asked what he wants to hear during an appearance on CNBC's Squawk Box.
"The dual mandate of the Fed is really important: price stability employment, I also think we have to drill into the artificial intelligence conversation in South Carolina," Scott said. "The real question we should ask is how do we make sure that these data centers pay their own way as it relates to electricity and water use."
Scott noted that in South Carolina, some parties want to ban the data centers that are driving AI. Data center moratoriums are gaining ground across the country as voters recoil from increased utility bills.
"When you zoom out, the most important question is who wins the future? Is it China or is it America? Artificial intelligence will be that which threads that needle," he said. "I want to make sure that we are on the right side of history, and frankly we have to solve the problems at home so that we can win the issue as a country."`,
    bodyJa: `上院銀行委員会のティム・スコット委員長は火曜日、連邦準備制度理事会のケビン・ウォーシュ議長がデータセンターと人工知能について話すのを聞きたいと述べた。
共和党、サウスカロライナ州のスコット氏は、水曜の委員会でウォーシュ氏をFRB議長として初めて迎える予定だ。同氏は半年に一度の金融政策報告書を議会に提出するようだ。しかし、CNBCのSquawk Boxに出演した際に聞きたいことを尋ねられたスコット氏は、会話がより広範になることを期待していると示唆した。
スコット氏は「FRBの二重の使命は非常に重要だ。物価安定、雇用、そしてサウスカロライナ州での人工知能に関する会話も掘り下げる必要があると思う」と述べた。 「私たちが問うべき真の問題は、電気と水の使用に関連して、これらのデータセンターが独自に支払うことをどのように保証するかということです。」
スコット氏は、サウスカロライナ州では、一部の政党がAIを推進するデータセンターの禁止を求めていると指摘した。有権者が公共料金の値上げに反発する中、データセンターの一時停止が全米で広まりつつある。
「ズームアウトすると、最も重要な問題は、誰が未来を勝ち取るかということだ。中国なのか、それともアメリカなのか。どの糸を針に刺すかは人工知能だ」と同氏は語った。 「私たちが歴史の正しい側にいることを確認したい。率直に言って、国としてこの問題に勝つためには国内の問題を解決しなければならない。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/tim-scott-kevin-warsh-data-centers-artificial-intelligence.html",
    publishedAt: "2026-07-14T13:36:04+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "spacex-alumni-building-remote-controlled-4a9b722c",
    title: "SpaceX alumni building remote-controlled construction equipment land $115 million fund round",
    titleJa: "SpaceX同窓会が遠隔操作の建設機械用地を建設、1億1500万ドルの資金調達ラウンド",
    summaryJa: "スペースX社のイーロン・マスク氏が地球外生命体を伴う宇宙経済を投資家に売り込む中、同社の元エンジニア2人が設立した設立2年の建設スタートアップ企業は、惑星間インフラの将来に向けた態勢を整えている。テラファーマは火曜日、クライナー・パーキンス、ベイン・キャピタル・ベンチャーズ、防衛技術企業スペースX、アンドゥリル、ハドリアンからの投資による資金調達ラウンドで1億1500万ドルを調達したと発表した。",
    bodyOriginal: `As SpaceX's Elon Musk sells investors on a space economy with life beyond Earth, a two-year-old construction startup founded by two of the company's former engineers is positioning itself for the future of interplanetary infrastructure.
TerraFirma on Tuesday said it raised $115 million in a funding round with investments from Kleiner Perkins, Bain Capital Ventures, and defense tech companies SpaceX, Anduril and Hadrian.
The Austin-based company uses a combination of interfaces, including Xbox controllers, to remotely operate construction equipment, and says its tools cut costs and improve safety. Long-term, the company wants to build on Mars.
"Infrastructure is a bottleneck to basically every single industry that needs to innovate over the next couple of decades," CEO and co-founder Noah Schochet told CNBC. "There's such a deficit of people taking all of the great tech that has existed and been built for the last couple decades and bringing it" to the construction industry.
The company plans to use the funding to hire 300 employees over the next year and build both a Texas factory and a mission control center.
Terrafirma is part of a growing network of startups spun out of SpaceX that are looking to capitalize on the budding space economy. Other famous startups from former SpaceX alumni include hypersonic weapons maker Castelion and Realativity Space.
SpaceX's historic $86 billion IPO last month, coupled with NASA's push to establish a lunar base on the Moon and Mars, has sparked fresh optimism for the sector.
Over time, this future could include moving industry to Mars or the Moon to build solar cells and more easily launch data centers into space.
Schochet and Noah McGuinness, the company's founders, met about a decade ago on the first day of engineering class at Princeton University. Over the next four years, the pair endured very similar course loads and worked on every project.
After graduation, both founders landed at SpaceX. McGuinness worked on the government satellite program known as Starshield, while Schochet worked on Starlink and later Starship.
While there, the team was under constant pressure to build and quickly scale, sometimes working in difficult conditions and facing infrastructure struggles, like reliable bathrooms.
At the same time, the construction industry was working at a snail's pace, which sparked an idea: bring the speed of building at SpaceX to the construction industry.
"We're building rockets the size of skyscrapers at one a month, and all those processes for mass manufacturing automation, none of them are showing up in construction," Schochet said.
Looking back, the pair described the experience as physically and mentally "rough," with days spent sleeping at their desks, but said it was "all worth it."
About half of the company's engineering team also previously worked at SpaceX, Tesla and the Boring Company.
For now, Terrafirma is set on proving its technology on Earth, with recent commercial projects including a sports arena and a Starbucks.
But the firm hasn't lost sight of its long-term goal and plans to bid on any future moon projects.
"The problem is you don't want to build a community based around a space economy that doesn't yet exist," Schochet said. "You want to build it around the economic drivers that truly drive the world today."`,
    bodyJa: `スペースX社のイーロン・マスク氏が地球外生命体を伴う宇宙経済を投資家に売り込む中、同社の元エンジニア2人が設立した設立2年の建設スタートアップ企業は、惑星間インフラの将来に向けた態勢を整えている。
テラファーマは火曜日、クライナー・パーキンス、ベイン・キャピタル・ベンチャーズ、防衛技術企業スペースX、アンドゥリル、ハドリアンからの投資による資金調達ラウンドで1億1500万ドルを調達したと発表した。
オースティンに拠点を置く同社は、Xbox コントローラーなどのインターフェースを組み合わせて建設機械を遠隔操作しており、そのツールによってコストが削減され、安全性が向上すると述べています。長期的には、同社は火星に建設したいと考えている。
CEO兼共同創設者のノア・ショシェ氏はCNBCに対し、「今後数十年にわたって革新が必要な基本的にあらゆる業界にとって、インフラストラクチャがボトルネックとなっている」と語った。 「過去数十年間に存在し、構築されてきた素晴らしい技術をすべて取り入れて、それを建設業界に持ち込む人材が非常に不足している。」
同社はこの資金を活用して今後1年間で従業員300人を雇用し、テキサス工場とミッションコントロールセンターの両方を建設する計画だ。
Terrafirma は、新興の宇宙経済を活用しようとしている SpaceX からスピンアウトした新興企業の拡大するネットワークの一部です。 SpaceX の元卒業生による他の有名なスタートアップには、極超音速兵器メーカーの Castelion や Realativity Space などがあります。
先月のSpaceXの歴史的な860億ドルのIPOは、月と火星の月面基地設立を目指すNASAの推進と相まって、この分野に新たな楽観的な見方を引き起こした。
時間が経つにつれて、この未来には産業を火星や月に移して太陽電池を構築し、より簡単に宇宙にデータセンターを立ち上げることが含まれる可能性があります。
同社の創設者であるショットとノア・マクギネスは、約10年前、プリンストン大学の工学クラスの初日に出会った。次の 4 年間、二人はほぼ同じような授業負荷に耐え、あらゆるプロジェクトに取り組みました。
卒業後、両創設者はSpaceXに入社しました。マクギネスはスターシールドとして知られる政府の衛星プログラムに取り組み、ショシェはスターリンクとその後のスターシップに取り組みました。
滞在中、チームは構築と迅速な拡張という常にプレッシャーにさらされ、時には困難な状況で作業し、信頼性の高いトイレなどのインフラストラクチャの問題に直面することもありました。
同時に、建設業界はカタツムリのようなペースで仕事をしていたため、SpaceX の建設のスピードを建設業界にもたらすというアイデアが生まれました。
「私たちは月に1基のペースで超高層ビルほどの大きさのロケットを製造しているが、大量生産自動化のためのプロセスはすべて建設現場には現れていない」とショーシェ氏は語った。
振り返ってみると、二人はその経験を肉体的にも精神的にも「大変」で、何日も机に向かって寝て過ごしたと述べたが、「それだけの価値はあった」と語った。
同社のエンジニアリング チームの約半数は、以前に SpaceX、Tesla、および Boring Company で働いていました。
テラファーマは今のところ、スポーツアリーナやスターバックスなどの最近の商業プロジェクトで、その技術を地球上で証明することに取り組んでいる。
しかし同社は長期的な目標を見失っておらず、将来の月プロジェクトに入札する予定だ。
「問題は、まだ存在していない宇宙経済を基盤としたコミュニティを構築したくないということです」とショシェ氏は言う。 「今日の世界を真に動かす経済的原動力を中心に構築したいと考えています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/terrafirma-construction-tech-spacex.html",
    publishedAt: "2026-07-14T13:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "warsh-promises-inflation-will-be-a-thing-063a73a8",
    title: "Warsh promises inflation will be a 'thing of the past,' cites benefits of AI investment boom",
    titleJa: "ウォーシュ氏、AI投資ブームの恩恵を引き合いに出し、インフレは「過去のもの」になると約束",
    summaryJa: "米連邦準備制度理事会（FRB）のケビン・ウォーシュ議長は火曜日、「金融政策を正しく行い」、過去5年間中央銀行を悩ませてきたインフレを打破すると誓った。ウォーシュ氏は今週、議会の別の委員会への発言で、インフレに関する最近の厳しい発言を繰り返した一方で、米国経済の強さと、特に人工知能を含む企業投資から得られる恩恵についても強調した。",
    bodyOriginal: `Federal Reserve Chairman Kevin Warsh pledged Tuesday to "get monetary policy right" and defeat the inflation that has bedeviled the central bank for the past five years.
In remarks for delivery to separate congressional panels this week, Warsh reiterated his recent tough talk on inflation, while also touting the strength of the U.S. economy and benefits coming from business investment, particularly involving artificial intelligence.
"Today we are at a hinge point in history. It's up to all of us to meet this moment," said Warsh, who speaks Tuesday to the House Financial Services Committee then the Senate Banking Committee on Wednesday.
"The Fed's number one objective is to get monetary policy right — or as near to it as we possibly can. That is our clear and constant aim, the star we steer by," he added. "And if we get policy right — and we will — the inflation surge of the last five years will be a thing of the past."
The remarks come just two months into Warsh's term. Fed chairs are mandated to appear twice a year before Congress to deliver a monetary policy report then take legislators' questions.
Warsh takes over a Fed that has scene inflation exceed its 2% mandate since 2021. During his confirmation hearing earlier this year, the chairman called inflation "a choice," and emphasized repeatedly the importance of bringing down the cost of living during his first news conference.
Similar to his predecessor, Jerome Powell, Warsh noted that the persistently high inflation levels have "been an undue burden on American households and businesses" who have faced higher costs across the board, with the latest surge coming in good part from soaring energy prices.
"While monthly price fluctuations are inevitable — especially in an unsettled world — underlying inflation over longer time horizons is determined largely by monetary policy," he said. "The members of our Committee have no tolerance for persistently elevated inflation. And we share a resolute commitment to restoring price stability."
On broader conditions, Warsh said the economy "is expanding at a solid pace, showing resilience in the face of recent developments."
He pointed to business investment that he called "the most striking feature" of the current climate.
"The rapid pace — which appears to be accelerating — reflects, in large part, the construction of data centers and the immense demand for the AI-related equipment and software that fill them," he said.
"We don't know the extent to which the economy will benefit from the AI buildout," he added. "Yet it seems inevitable that what is now called 'AI investment' will soon be called just 'investment.'"
Warsh previously has said he expects an AI productivity boom will prove disinflationary — a premise challenged by some economists as well as his fellow Fed policymakers.
Elsewhere, Warsh further fleshed out the five task forces he has created to conduct a comprehensive review of the Fed's operations. The panels will examine the communications, technology, the balance sheet, economic data the Fed employs and the way it looks at inflation.
Together, he said the groups are part of "a new chapter at the Federal Reserve," an extension of the "regime change" Warsh promised last year in a CNBC interview. However, whereas Warsh previously faulted "incumbents" at the Fed for institutional problems, he has taken a more conciliatory tone since he's been in office.
"t's been a privilege to return to the Fed and to work again with so many talented and dedicated people I'm fortunate to call my colleague," he said.`,
    bodyJa: `米連邦準備制度理事会（FRB）のケビン・ウォーシュ議長は火曜日、「金融政策を正しく行い」、過去5年間中央銀行を悩ませてきたインフレを打破すると誓った。
ウォーシュ氏は今週、議会の別の委員会への発言で、インフレに関する最近の厳しい発言を繰り返した一方で、米国経済の強さと、特に人工知能を含む企業投資から得られる恩恵についても強調した。
ウォーシュ氏は火曜日に下院金融サービス委員会、水曜日には上院銀行委員会で講演し、「今日、我々は歴史の岐路に立たされている。この瞬間を迎えられるかどうかは我々全員にかかっている」と述べた。
同氏はさらに、「FRBの第一の目標は、金融政策を正しくすること、あるいはできる限りそれに近づけることだ。それがわれわれの明白かつ不変の目標であり、われわれが導く星だ」と付け加えた。 「そして政策を正しく行えば、そしてそうするだろうが、過去5年間のインフレ急増は過去のものになるだろう。」
この発言はウォーシュ氏の任期が始まってわずか2カ月後に行われた。 FRB議長は年に2回議会に出頭して金融政策報告を行い、その後議員の質問に応じる義務がある。
ウォーシュ氏は、2021年以降インフレ率が義務の2％を超えているFRBを引き継ぐ。今年初めの承認公聴会で議長はインフレを「選択」と呼び、最初の記者会見では生計費を引き下げることの重要性を繰り返し強調した。
前任のジェローム・パウエル氏と同様、ウォーシュ氏は、高止まりするインフレ水準が「米国の家計や企業にとって不当な負担となっており」、全体的にコスト高に直面しており、最近の高騰はエネルギー価格の高騰による部分が大きいと指摘した。
同氏は「月々の物価変動は避けられないが、特に不安定な世界においては、長期にわたるインフレの基礎となるものは主に金融政策によって決まる」と述べた。 「当委員会のメンバーは、持続的なインフレ高進を容認していない。そして、物価の安定を回復するという断固たる決意を共有している。」
ウォーシュ氏は、より広範な状況について、経済は「堅実なペースで拡大しており、最近の動向に直面しても回復力を示している」と述べた。
同氏は、現在の情勢の「最も顕著な特徴」と呼んだ企業投資を挙げた。
同氏は、「このペースが加速しているように見えるのは、主にデータセンターの建設と、そこに設置されるAI関連機器やソフトウェアに対する膨大な需要を反映している」と述べた。
同氏は「AIの発展によって経済がどの程度恩恵を受けるかは分からない」と付け加えた。 「しかし、現在『AI投資』と呼ばれているものが、近いうちに単に『投資』と呼ばれるようになるのは避けられないようだ。」
ウォーシュ氏は以前、AIの生産性ブームがディスインフレをもたらすと予想していると述べたが、この前提には一部のエコノミストやFRBの政策立案者らも異議を唱えている。
ウォーシュ氏は他の箇所で、FRBの運営の包括的な見直しを行うために創設した5つのタスクフォースをさらに具体化した。パネルディスカッションでは、通信、テクノロジー、バランスシート、FRBが採用する経済データ、インフレに対する見方などを調査する。
同氏は、これらのグループは共に、ウォーシュ氏が昨年CNBCのインタビューで約束した「政権交代」の延長である「連邦準備制度の新たな章」の一部であると述べた。しかし、ウォーシュ氏は以前、FRBの「現職者」の制度上の問題を非難していたが、就任後はより融和的な態度をとっている。
同氏は「FRBに戻り、同僚と呼べるほど多くの才能と献身的な人々と再び仕事ができるのは光栄だ」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/warsh-promises-inflation-will-be-a-thing-of-the-past-cites-benefits-of-ai-investment-boom.html",
    publishedAt: "2026-07-14T12:30:21+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "uk-wasted-10bn-on-ppe-that-left-nhs-staf-b5fff4c7",
    title: "UK wasted £10bn on PPE that left NHS staff poorly protected, Covid inquiry finds",
    titleJa: "英国は個人用保護具（PPE）に100億ポンドを無駄にし、NHS職員の保護が不十分なままになっていたことが新型コロナ調査で判明",
    summaryJa: "英国は個人用保護具（PPE）に100億ポンドを無駄にし、NHS職員の保護が不十分なままになっていたことが新型コロナ調査で判明- 公開されました",
    bodyOriginal: `UK wasted £10bn on PPE that left NHS staff poorly protected, Covid inquiry finds
- Published
The lives of NHS staff and patients were put at risk in the pandemic because of a lack of adequate personal protective equipment (PPE), with almost £10bn of taxpayers money wasted in a scramble to buy more, the Covid inquiry has said.
The chair Baroness Hallett described the "vast" waste in pandemic procurement, amounting to £9.9bn – two-thirds of the £14.9bn the UK and devolved governments spent on PPE.
The country entered the pandemic with its stockpile of masks, gowns and gloves in a "perilous state" and was "simply not ready to compete" in the global race to secure new supplies, added the chair.
She criticised the controversial "VIP lane", which prioritised offers of PPE from those with political connections, as a "misguided" policy which undermined public confidence.
But she said there was "no evidence of cronyism or corruption" by ministers or other officials when awarding the final contracts.
When the cost of home testing kits and other equipment, such as ventilators, was included, the total amount spent by the government between January 2020 and June 2022 exceeded £42bn, the inquiry found.
The UK's emergency stockpile of PPE, meant to last at least 15 weeks before being replenished, was running out by the end of March 2020 as demand from hospitals soared.
Only a third of the masks in England's pandemic stockpile were usable, the inquiry found, while Scotland had no supplies of high-grade respiratory masks used in hospitals.
At the time, care homes, GP surgeries and pharmacies were all expected to source their own PPE, something the report described as a "major failure in planning".
Covid inquiry PPE report - key findings
- Published1 hour ago
What is the UK Covid inquiry and how does it work?
- Published16 April
Covid inquiry turns to PPE deals and the 'VIP lane'
- Published3 March 2025
Covid inquiry rejects last-minute bid from Michelle Mone
- Published3 March 2025
In total the UK government was forced to write off £9.9bn worth of PPE that was either unused or out of date, as well as £157m for unused healthcare equipment.
The "ventilator challenge" programme, where suppliers were asked to develop breathing equipment at short notice, led to another £143m charge for designs that never made it into production.
In Scotland approximately £8mn of healthcare equipment, including PPE and testing kits, was written off.
In Wales £18m was spent on unused PPE and in Northern Ireland £43m of masks, gowns and gloves were at risk of expiry before they could be used.
The inquiry said that, although it was better to have purchased too much PPE in a pandemic than too little, it would "clearly have been better if supply had been calibrated more closely with demand".
"Better planning would have resulted in fairer, faster and less costly procurement decisions," the report concluded.
Government contingency plans had "never been stress tested" and officials and ministers were "forced to improvise, establishing new emergency procurement and distribution systems within days".
VIP lane failures
In England, a so-called "VIP lane" – officially known as the high priority lane – was set up in the pandemic to award government PPE contracts.
Introduced in April 2020, the idea was to treat offers to supply PPE with greater urgency if they came with a recommendation from ministers, MPs, members of the House of Lords, or other senior officials.
At the time, the government said there was a "desperate need" to protect health and social care staff, and argued swift action was required to secure healthcare equipment.
The inquiry criticised that policy as a "misguided attempt at prioritisation" that "embedded unfairness in emergency procurement".
Some suppliers received favourable treatment because they had connections to the then Conservative government which "undermined trust at a moment when it needed it most".
"The high priority lane should not have been established and must not be repeated," the report concluded.
But Baroness Hallett said she had not identified cronyism or corruption on the part of ministers and officials when PPE contracts were finally awarded.
PPE Medpro contracts
In February 2025, the inquiry spent a day taking evidence about PPE Medpro, the firm linked to the businessman Doug Barrowman and his wife Baroness Michelle Mone.
Both Barrowman and Mone have denied any wrongdoing in relation to those contracts that were worth more than £200m.
Baroness Hallett ordered that testimony from senior government officials had to be heard behind closed doors so as not to prejudice an ongoing criminal investigation by the National Crime Agency (NCA).
A section of the inquiry's findings related to PPE Medpro was also removed from the final report and will only be published "following the conclusion of any criminal proceedings".
No criminal charges have been brought to date with the NCA saying that its "ongoing investigation remains a priority for the agency".
In total, 48 witnesses gave oral evidence for this part of the inquiry in February and March 2025, including former health secretary Matt Hancock and cabinet minister Michael Gove.
The recommendations made include:
a "radical overhaul" of the emergency system for buying PPE and distributing it before the next pandemic
drawing up a "domestic industry strategy" which treats key healthcare equipment as a strategic national asset"
improving the state of the pandemic stockpile which is held in a giant warehouse in Merseyside
The Prime Minister's Spokeswoman said the report made for difficult reading
"The pandemic had a profound and lasting impact across our society and this government is committed to learning the lessons of the Covid inquiry so that we are protected and prepared for the future.
"And we will of course carefully consider the inquiry's recommendations in detail and we will respond in due course."`,
    bodyJa: `英国は個人用保護具（PPE）に100億ポンドを無駄にし、NHS職員の保護が不十分なままになっていたことが新型コロナ調査で判明
- 公開されました
新型コロナウイルス調査報告書によると、パンデミックでは適切な個人用保護具（PPE）の不足によりNHS職員と患者の命が危険にさらされており、追加購入の争奪戦で約100億ポンドの納税者のお金が無駄にされたという。
議長のハレット男爵夫人は、パンデミック調達における「膨大な」無駄が99億ポンドに達し、これは英国と地方政府がPPEに費やした149億ポンドの3分の2に相当すると述べた。
同国はマスク、ガウン、手袋の備蓄が「危険な状態」にある状態でパンデミックに突入し、新たな供給品を確保するための世界的な競争に「単に競争する準備ができていなかった」と議長は付け加えた。
彼女は、政治的つながりを持つ人々からの個人用保護具の提供を優先する物議を醸した「VIPレーン」を、国民の信頼を損なう「誤った」政策として批判した。
しかし彼女は、最終契約を締結する際に閣僚やその他の役人による「縁故や汚職の証拠はなかった」と述べた。
家庭用検査キットや人工呼吸器などの機器の費用を含めると、2020年1月から2022年6月までに政府が支出した総額は420億ポンドを超えたことが調査で判明した。
英国の個人用保護具の緊急備蓄は、補充されるまで少なくとも15週間持つ予定だったが、病院からの需要が急増したため、2020年3月末までに枯渇しつつあった。
調査の結果、イングランドのパンデミック備蓄マスクのうち使用可能なのは3分の1のみで、スコットランドには病院で使用される高級呼吸用マスクの供給がなかったことが判明した。
当時、介護施設、一般開業医、薬局はすべて独自の個人用保護具を調達することが期待されていたが、報告書はこれを「計画における重大な失敗」と述べている。
新型コロナウイルスに関する調査 PPE レポート - 主な調査結果
- 1 時間前に公開
英国の新型コロナウイルス調査とは何ですか?またその仕組みは何ですか?
- 4 月 16 日公開
新型コロナウイルスに関する調査は個人用保護具の取引と「VIPレーン」に向けられる
- 2025 年 3 月 3 日発行
新型コロナウイルス調査でミシェル・モーンの土壇場入札を拒否
- 2025 年 3 月 3 日発行
英国政府は合計99億ポンド相当の未使用または期限切れの個人用保護具と、未使用の医療機器1億5,700万ポンド相当の償却を余儀なくされた。
「人工呼吸器チャレンジ」プログラムでは、サプライヤーが急遽呼吸器を開発するよう求められ、生産に至らなかった設計に対してさらに1億4,300万ポンドの請求が発生した。
スコットランドでは、PPEや検査キットを含む医療機器約800万ポンドが償却された。
ウェールズでは未使用のPPEに1,800万ポンドが費やされ、北アイルランドでは4,300万ポンドのマスク、ガウン、手袋が使用前に期限切れになる危険にさらされていました。
調査報告書では、パンデミック下では個人用保護具の購入が少なすぎるよりは多すぎる方が良かったが、「供給が需要に合わせてより厳密に調整されていれば明らかに良かった」と述べた。
報告書は「より適切な計画があれば、より公正で迅速かつ低コストの調達決定が得られただろう」と結論づけている。
政府の緊急時計画は「ストレステストが一度も行われておらず」、当局者や閣僚は「即席での対応を余儀なくされ、数日以内に新たな緊急調達と配給システムを確立」した。
VIP レーンの障害
英国では、パンデミックのさなか、政府による PPE 契約を授与するために、いわゆる「VIP レーン」（正式には高優先レーンとして知られる）が設置されました。
2020年4月に導入されたこのアイデアは、大臣、国会議員、貴族院議員、またはその他の高官からの推薦があった場合、PPEの供給の申し出をより緊急に扱うというものだった。
当時、政府は医療・社会福祉従事者の保護が「切実な必要性」があると述べ、医療機器の確保には迅速な行動が必要だと主張した。
調査報告書は、その政策を「緊急調達に不公平を埋め込む」「優先順位付けの誤った試み」であると批判した。
一部のサプライヤーは当時の保守党政権とつながりがあり、「最も必要なときに信頼を損なった」として優遇された。
報告書は「高優先レーンは設置されるべきではなかったし、繰り返されてはならない」と結論づけた。
しかし、ハレット男爵夫人は、最終的に個人用保護具の契約が締結された際、閣僚や役人の側近や汚職は確認できなかったと述べた。
PPE メドプロ契約
2025年2月、捜査は実業家のダグ・バロウマンとその妻ミシェル・モーン男爵夫人に関連する会社、PPEメドプロに関する証拠収集に1日を費やした。
バロウマン氏もモーン氏も、2億ポンド以上の価値があるこれらの契約に関連した不正行為を否定した。
ハレット男爵夫人は、国家犯罪庁（NCA）による進行中の犯罪捜査に支障をきたさないように、政府高官らの証言は密室で聞かれなければならないと命令した。
PPE Medproに関連する調査結果の一部も最終報告書から削除され、「刑事訴訟の終了後」にのみ公表される予定だ。
NCAは現在まで刑事告訴はされておらず、「引き続き捜査が同局の優先事項である」としている。
2025年2月から3月にかけて、マット・ハンコック元保健長官やマイケル・ゴーブ閣僚を含む合計48人の証人がこの部分の捜査について口頭証言を行った。
推奨事項には次のものが含まれます。
次のパンデミックの前に個人用保護具を購入し配布するための緊急システムの「抜本的な見直し」
重要な医療機器を国家戦略的資産とする「国内産業戦略」を策定
マージーサイドの巨大倉庫に保管されているパンデミック備蓄の状態を改善する
首相報道官は、この報告書は読みにくいものであると述べた
「パンデミックは社会全体に深刻かつ永続的な影響を及ぼしており、政府は私たちが守られ、将来に備えられるよう新型コロナウイルス調査の教訓を学ぶことに全力で取り組んでいます。
「そしてもちろん、我々は調査の勧告を詳細に注意深く検討し、しかるべき時期に返答するつもりだ。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/czrxrlydyzzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T12:12:53+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/26b2/live/429dd230-7f4b-11f1-b7b5-4731f6422ba0.jpg",
    readTime: 7,
  },
  {
    id: "south-east-water-must-pay-30-5m-for-supp-2f929b5b",
    title: "South East Water must pay £30.5m for supply failures",
    titleJa: "サウス・イースト・ウォーターは供給障害に対して3,050万ポンドを支払う必要がある",
    summaryJa: "サウス・イースト・ウォーターは供給障害に対して3,050万ポンドを支払う必要がある- 公開されました",
    bodyOriginal: `South East Water must pay £30.5m for supply failures
- Published
South East Water must spend £30.5m on improvements after supply interruptions hit thousands of its customers across Kent and Sussex.
Water regulator Ofwat said this follows the conclusion of three investigations into the company's repeated failures.
The redress package will be paid for by the firm's shareholders and not through customer bills.
A spokesperson for the water company said they were "incredibly sorry" for the historical supply disruptions for Kent and Sussex customers.
"We know this caused significant disruption and anxiety, and we accept the failures identified by Ofwat," they said.
"It is not the standard of service our customers deserve.
"Our priority has been to ensure that the resolution of this investigation directly benefits those who suffered the most."
Ofwat says the redress will include £5m to provide free water butts for households, £5m to bring forward smart metering to businesses and other non-household customers, and a further £5m for on-site storage to help manage the supply during peak demand.
The regulator previously proposed a £22m fine for water supply failures between 2020 and 2023, which impacted more than 286,000 people.
It launched a second probe at the start of this year after further supply interruptions in Tunbridge Wells and across Kent and Sussex between November and January, which left up to 70,000 homes without water.
Customers were unable to access tap water, shower or flush their toilets during the supply issues between November and January.
Schools were closed and some customers had to cancel work due to childcare issues as a result, while others had difficulty dealing with medical conditions, according to Ofwat.
The watchdog found the company did not communicate "clearly and accurately" with customers quickly enough and did not provide those affected with adequate bottled water supplies.
The third investigation followed the downgrading of South East Water's credit rating by Moody's in May, which meant the firm was in breach of its licence condition.
'Happening far too often'
An independent monitor will be appointed by Ofwat to review the company's performance improvement plan.
Ofwat says the company will also pay for the independent monitor, which is not included in the £30.5m enforcement package.
Helen Campbell, executive director of delivery at Ofwat, said: "South East Water must now focus on what matters most, its customers.
"These failures have caused real disruption and hardship for residents and businesses across many years, and supply interruptions of this scale have happened far too often.
"This package is a first step towards accountability and improved performance, and we welcome the company's efforts to resolve these cases."
Follow BBC Kent on Facebook, external, X, external, and on Instagram, external and listen to BBC Radio Kent on Sounds. Send your story ideas to southeasttoday@bbc.co.uk, external or WhatsApp us on 08081 002250.
Related topics
- Published31 May
- Published3 June
- Published12 January
- Published17 June
- Published11 April`,
    bodyJa: `サウス・イースト・ウォーターは供給障害に対して3,050万ポンドを支払う必要がある
- 公開されました
サウスイーストウォーターは、ケント州とサセックス州の数千の顧客に供給中断が発生したため、改善に3,050万ポンドを費やす必要がある。
水道規制当局オフワットは、これは同社の度重なる失敗に関する３回の調査の結果を受けてのものだと述べた。
救済策の費用は顧客からの請求ではなく、同社の株主によって支払われる。
水道会社の広報担当者は、ケント州とサセックス州の顧客に対する歴史的な供給中断について「非常に遺憾に思う」と述べた。
「これが重大な混乱と不安を引き起こしたことは承知しており、オフワットが指摘した失敗を受け入れる」と彼らは述べた。
「それは私たちの顧客が受けるべきサービスの標準ではありません。
「私たちの優先事項は、この調査の解決が最も苦しんでいる人々に直接利益をもたらすことを保証することでした。」
オフワット氏によると、この救済には、家庭に無料の水吸い殻を提供するための500万ポンド、企業やその他の非家庭顧客へのスマートメーターの導入のための500万ポンド、ピーク需要時の供給管理を支援するための敷地内保管のためのさらに500万ポンドが含まれるという。
規制当局は以前、2020年から2023年までの給水障害に対し2200万ポンドの罰金を提案しており、28万6000人以上に影響が出た。
11月から1月にかけてタンブリッジ・ウェルズとケント州とサセックス州全域でさらなる供給中断が発生し、最大7万戸が断水したことを受け、今年初めに2回目の調査を開始した。
11月から1月にかけて供給問題が発生した際、顧客は水道水にアクセスしたり、シャワーやトイレを流すことができなかった。
オフワット氏によると、学校は閉鎖され、その結果育児の問題で仕事をキャンセルしなければならなかった顧客もいた一方、病状に対処するのが困難になった顧客もいたという。
監視当局は、同社が顧客と十分な速さで「明確かつ正確に」コミュニケーションをとっておらず、影響を受けた人々に十分なボトル入り飲料水を提供していなかった、と認定した。
３回目の調査は、５月にムーディーズがサウス・イースト・ウォーターの信用格付けを引き下げたこと（同社がライセンス条件に違反していることを意味する）に続いて行われた。
「あまりにも頻繁に起こっている」
会社の業績改善計画をレビューするために、Ofwat によって独立した監視者が任命されます。
オフワット氏は、同社は独立監視員の費用も支払う予定だが、これは3050万ポンドの執行パッケージには含まれていないと述べた。
オフワットの配送担当エグゼクティブディレクター、ヘレン・キャンベル氏は、「サウス・イースト・ウォーターは今、最も重要なこと、つまり顧客に集中しなければならない。
「これらの故障は長年にわたって住民や企業に真の混乱と困難を引き起こしており、この規模の供給中断はあまりにも頻繁に起こっている。
「このパッケージは説明責任とパフォーマンスの向上に向けた第一歩であり、これらの事件を解決するための同社の取り組みを歓迎します。」
Facebook (外部)、X (外部) で BBC Kent をフォローし、外部の Instagram で BBC Kent をフォローし、BBC Radio Kent on Sounds を聞いてください。ストーリーのアイデアを、southeasttoday@bbc.co.uk、社外、または WhatsApp (08081 002250) に送信してください。
関連トピック
- 5 月 31 日公開
- 6 月 3 日発行
- 1 月 12 日発行
- 6 月 17 日公開
- 4 月 11 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cevlvxgggxyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T10:13:59+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/39e0/live/2c24cef0-7f5a-11f1-a97a-9b1029617ccb.jpg",
    readTime: 4,
  },
  {
    id: "taiwan-s-second-largest-chipmaker-starts-98d439b8",
    title: "Taiwan's second-largest chipmaker starts mass production in Singapore; Citi sees improving outlook",
    titleJa: "台湾第2位のチップメーカーがシンガポールで量産を開始。シティ、見通しは改善するとみている",
    summaryJa: "台湾第2位の受託チップメーカー、ユナイテッド・マイクロエレクトロニクス・コーポレーション（UMC）は火曜日、シンガポールの施設内で製造された初の量産シリコン・フォトニクス・ウェーハを発表した。UMC は、AI およびハイパースケーラー データセンター ネットワークにおける高速光インターコネクトの需要の高まりに対処することを目指しています。",
    bodyOriginal: `Taiwan's second-largest contract chipmaker, United Microelectronics Corporation (UMC), announced Tuesday its first mass-produced silicon photonics wafers manufactured within its Singapore facility.
UMC is aiming to address the growing demand for high-speed optical interconnects in AI and hyperscaler data center networks.
Collaborating with SILITH Technology, a local fabless chip design company, the joint team brought the silicon photonics platform from development to production readiness in 18 months, securing the technology to support next-generation AI infrastructure, UMC said in a statement.
UMC also plans to make its own 12-inch silicon photonics platform available for customer product development by 2027.
It comes as analysts at Citi said they see an improving outlook for the chipmaker in the second half of the year, forecasting a 13% quarter-on-quarter sales jump in the second quarter of 2026 and a gross margin recovery.
Supporting Wall Street optimism, UMC recently reported strong financial performance, with June sales jumping 22.85% year-on-year to NT$23.12 billion ($719.21 million), and first-half cumulative sales rising 11.28%.
The company's stock, however, fell nearly 5% in Taiwan during Tuesday's session, before parring losses to trade 1.6% lower.
UMC is part of a broader wave of Taiwanese tech firms expanding their manufacturing footprint in Singapore, as the city-state grows into a major regional hub for the global semiconductor supply chain.
This growing ecosystem includes King Yuan Electronics Corp as well as Vanguard International Semiconductor Corporation, a chipmaker backed by TSMC, which recently partnered with Netherlands-based NXP Semiconductors to build a $7.8 billion manufacturing plant in the city state.
Silicon photonics is an essential technology for transmitting and processing data at ultra-high speeds, with its market seeing notable growth driven by rising data traffic and demand for faster optical communication, pushing its global size to an estimated $3.71 billion in 2026 according to data from Polaris Market Research.`,
    bodyJa: `台湾第2位の受託チップメーカー、ユナイテッド・マイクロエレクトロニクス・コーポレーション（UMC）は火曜日、シンガポールの施設内で製造された初の量産シリコン・フォトニクス・ウェーハを発表した。
UMC は、AI およびハイパースケーラー データセンター ネットワークにおける高速光インターコネクトの需要の高まりに対処することを目指しています。
UMCは声明で、地元のファブレスチップ設計会社SILITH Technologyと協力して、共同チームはシリコンフォトニクスプラットフォームを開発から生産準備まで18カ月で完了させ、次世代AIインフラをサポートする技術を確保したと述べた。
UMC はまた、2027 年までに顧客の製品開発に独自の 12 インチ シリコン フォトニクス プラットフォームを利用できるようにする予定です。
シティのアナリストらは、今年下半期には同社の見通しが改善するとみており、2026年第2四半期には売上高が前四半期比13％増加し、粗利益も回復すると予想していると述べたことを受けてのことだ。
ウォール街の楽観論を裏付けるように、UMCは最近、6月の売上高が前年同期比22.85％増の231億2000万台湾ドル（7億1,921万ドル）となり、上半期の累計売上高が11.28％増加したという好調な財務実績を報告した。
しかし、同社株は火曜日の取引中に台湾で５％近く下落し、損失をパーリングすると１．６％安で取引された。
UMCは、シンガポールが世界的な半導体サプライチェーンの主要な地域ハブとして成長する中、シンガポールでの製造拠点を拡大する台湾ハイテク企業の幅広い波の一部である。
この成長するエコシステムには、King Yuan Electronics Corpのほか、TSMCが支援するチップメーカーであるVanguard International Semiconductor Corporationが含まれており、同社は最近オランダに本拠を置くNXP Semiconductorsと提携して、同市に78億ドルをかけて製造工場を建設した。
シリコンフォトニクスは、超高速でデータを送信および処理するために不可欠な技術であり、その市場はデータトラフィックの増加とより高速な光通信の需要によって顕著な成長を遂げており、ポラリスマーケットリサーチのデータによると、その世界規模は2026年には推定37億1000万ドルに達します。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/umc-starts-mass-production-in-singapore-citi-sees-improving-outlook.html",
    publishedAt: "2026-07-14T05:44:04+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "how-us-commerce-secretary-s-epstein-link-b231af26",
    title: "How US commerce secretary's Epstein links were uncovered by British whistleblower",
    titleJa: "米国商務長官のエプスタインとの関係は英国の内部告発者によってどのように明らかにされたか",
    summaryJa: "米国商務長官のエプスタインとの関係は英国の内部告発者によってどのように明らかにされたか- 公開されました",
    bodyOriginal: `How US commerce secretary's Epstein links were uncovered by British whistleblower
- Published
A British man has told the BBC how he unearthed evidence indicating that his former employer, Howard Lutnick - now US commerce secretary - failed to disclose a business relationship with the paedophile financier, Jeffrey Epstein.
Simon Andriesz, previously a managing director at a Wall Street firm, discovered an email chain from 2018 in which Lutnick and Epstein had discussed the prospects of a start-up business they were both involved in.
Andriesz shared his findings - from the millions of released Epstein files - with US politicians on the influential House Oversight Committee, ahead of an appearance there by Lutnick in May.
Lutnick told the committee that, to the best of his knowledge, he had only learned this year that Epstein had been an investor in the firm. Speaking on his behalf, the US Commerce Department told us there was no evidence of wrongdoing.
Andriesz also discovered in the files that one of Lutnick's firms had made plans in 2013 to go into business with another figure linked to Epstein, the then-Prince Andrew, by commercially exploiting the contacts the former UK trade envoy had made.
"What it involved was a loan to Andrew Mountbatten-Windsor of £1m... to basically buy a prince," he tells File on 4 Investigates.
Searching 3.5 million documents
"I was completely shocked," says Andriesz, describing the moment when he discovered his own name in the Epstein files - a massive collection of documents, photos, video and emails relating to the notorious sex offender, released by the US government in the past year.
The specific files in which Andriesz appeared related to interviews he had given to the FBI while in dispute with his former employer, BGC Partners - a financial brokerage firm, part of Lutnick's Cantor Fitzgerald group.
In 2016, Andriesz had raised concerns internally about accounting irregularities at the firm. He was sacked in 2017, but some of his allegations later led to BGC being ordered to pay a $3m (£2.24m) penalty by the US derivatives regulator for "numerous supervision, reporting, and record-keeping violations".
BGC told us that Andriesz's allegations lacked credibility and were "categorically false". It said the claims had been investigated by authorities in several jurisdictions which, according to BGC, had not substantiated the allegations.
Andriesz spoke to the FBI about BGC, and about the firm's ultimate boss, Lutnick, in 2020-21 - after Epstein had killed himself in jail while awaiting trial on sex trafficking charges.
The Epstein files show Andriesz alleged that Lutnick had had undeclared business ties with Epstein. The FBI did not investigate these accusations.
Andriesz tells the BBC he was disappointed that few had seemed interested in what he had discovered: "I'm exposing Howard Lutnick's relationship, financial links, with Jeffrey Epstein, and there's no interest."
In 2025, Lutnick was appointed US commerce secretary, at which point he sold his shares in Cantor Fitzgerald and passed control of the firm to his sons.
On a podcast later that year, he claimed he had only ever met Epstein once, 20 years earlier, when they had been neighbours in Manhattan, and that he had found his behaviour "gross".
However, with the Epstein files' release, inconsistencies began to appear in this version of events. A photo showed Lutnick with Epstein on the sex offender's Caribbean island, Little St James, in December 2012.
Four years earlier in Florida, Epstein had been sent to prison for two charges of soliciting prostitution - including one with a minor.
Andriesz suspected there was yet more to find in the Epstein files that could back up his claims - if only people knew where to look in the 3.5 million pages of documents.
"Everyone was searching 'Lutnick'," he says. He knew, though, that Cantor Fitzgerald executives preferred to use initials rather than full names in their emails.
Andriesz searched for "HWL" (Howard William Lutnick) and found emails sent to and from Epstein in 2018. Epstein had talked directly to Lutnick about a digital advertising company called Adfin, in which he and Lutnick's firm, Cantor Fitzgerald, had both invested.
Andriesz spotted correspondence, external where Epstein had directly asked the HWL account: "what do you think the prospects for adfin are?"
Lutnick responded: "Producing revenue finally. This is their year. Next 12 months they need to become economically self-sufficient."
Andriesz then shared this information with US politicians on the House Oversight Committee, the US Congress's main investigatory committee.
Lutnick agreed to appear before the committee in an off-camera hearing in May.
He has not been accused of any wrongdoing in connection with Epstein, and he told the committee: "I unequivocally condemn the conduct attributed to Jeffrey Epstein and everyone who participated in his illegal activities. The survivors of his crimes deserve our respect and support."
Epstein Files: Lutnick, the Royals and the British Whistleblower
A former trader reveals how he unearthed evidence that US Commerce Secretary Howard Lutnick had failed to disclose a business relationship with the paedophile financier Jeffrey Epstein.
Listen now on BBC Sounds or on Tuesday 14 July at 20:00 on BBC Radio 4
Lutnick repeated his claim to the committee, that he did not know until this year that Epstein had been a co-investor in Adfin. However, Democrats on the committee accused him of lying and all 21 signed a letter demanding his resignation, external.
The US Commerce Department told us the allegations against Lutnick were "a desperate partisan distraction from the historic work of this Administration", adding that the commerce secretary has answered hundreds of questions before Congress and there is "no evidence of wrongdoing or legitimate cause for concern".
'To buy a prince'
Another discovery Andriesz made in the Epstein files concerned Lutnick's association with two other people who knew Epstein well - the then-Prince Andrew and his ex-wife, Sarah Ferguson.
Lutnick had been friends with Ferguson since the 1990s and was a guest at Princess Eugenie's wedding in 2018.
Documents in the files revealed his firm, Cantor Fitzgerald, had a plan in 2013 "to buy a prince", as Andriesz puts it, and exploit Andrew's contacts with wealthy individuals and sovereign institutions.
Under the proposed terms of the deal, £1m would be loaned to a firm controlled by the prince, which would then be bound to do business exclusively with Cantor Fitzgerald.
Epstein warned the prince's business aide, David Stern, against the deal, the files reveal. One of his concerns was about the exclusivity of the deal - under its terms, Andrew could only introduce wealthy clients to Cantor Fitzgerald and no-one else.
The files indicate that advisers to both Lutnick and the former prince discussed the deal for four months, from August to November 2013, but it came to nothing.
Asked about the deal, Cantor Fitzgerald did not deny the talks took place but told the BBC it did not go into business with the former prince. Andrew Mountbatten-Windsor did not respond to a request for comment.
A world away
Andriesz, now 57, lives in a quiet Cornish seaside village, a world away from Wall Street. He says the litigation of the past decade has had a devastating effect on his career, his finances and his health.
Despite winning a financial award of $420,000 (£313,000) for his whistleblowing from the US regulator, Andriesz says authorities in the US and UK have failed to hold BGC and Cantor Fitzgerald properly to account - or protect him from retaliation by his former employer for his reports of wrongdoing.
BGC says it has strong policies protecting whistleblowers from retaliation and denies retaliating against Andriesz. It says it has had no involvement with him since his departure other than responding to litigation he has initiated.
It maintains Andriesz's employment was terminated after he refused to follow medical advice, declined to perform essential job duties, rejected reasonable accommodation, and ultimately abandoned his role.
Speaking on behalf of Lutnick, the White House said: "The BBC's pathetic and desperate attempt to slander Secretary Lutnick will do nothing to change the fact that he has been the most consequential Commerce Secretary in modern history."`,
    bodyJa: `米国商務長官のエプスタインとの関係は英国の内部告発者によってどのように明らかにされたか
- 公開されました
英国人男性がBBCに対し、元雇用主で現在米国商務長官のハワード・ラトニック氏が小児性愛者の投資家ジェフリー・エプスタイン氏とのビジネス関係を明らかにしなかったことを示す証拠をどのようにして発掘したかを語った。
以前ウォール街の企業でマネージングディレクターを務めていたサイモン・アンドリース氏は、ルートニック氏とエプスタイン氏が二人が携わる新興事業の見通しについて話し合っていた2018年の一連の電子メールを発見した。
アンドリーズ氏は、5月にルートニック氏が下院監視委員会に出席するのに先立ち、公開された数百万件のエプスタインファイルから得た調査結果を影響力のある下院監視委員会の米国政治家らと共有した。
ラトニック氏は委員会に対し、自分の知る限り、エプスタイン氏が同社の投資家であったことは今年になって初めて知ったと述べた。米国商務省は同氏に代わって、不正行為の証拠はないと述べた。
アンドリーズ氏はまた、ルートニック氏の会社の1つが2013年に、エプスタイン氏と関係のある別の人物、当時のアンドルー王子と取引する計画を立てていたことをファイルの中で発見し、元英国通商公使が築いた人脈を商業的に悪用した。
「それに関係したのは、アンドリュー・マウントバッテン＝ウィンザーへの100万ポンドの融資だった…要するに王子を買うためだった」と彼はFile on 4 Investigatesに語った。
350万件のドキュメントを検索
「完全にショックでした」とアンドリーズさんは、エプスタインのファイルの中に自分の名前を見つけた瞬間について語った。エプスタインのファイルは、昨年米国政府が公開した悪名高い性犯罪者に関する膨大な文書、写真、ビデオ、電子メールのコレクションである。
アンドリーズ氏が登場した特定のファイルは、アンドリーズ氏が元雇用主であるBGCパートナーズ（ルトニック氏のカンター・フィッツジェラルド・グループの金融仲介会社）と係争中にFBIに行ったインタビューに関連していた。
2016年、アンドリエシュ氏は同社の会計不正について社内で懸念を表明していた。同氏は2017年に解任されたが、その後、彼の主張の一部により、BGCは「数多くの監督、報告、記録保持違反」を理由に米デリバティブ規制当局から300万ドル（224万ポンド）の違約金の支払いを命じられた。
BGCは、アンドリエシュ氏の主張は信憑性を欠き、「断固として虚偽」であると我々に語った。 BGCによれば、この主張はいくつかの管轄区域の当局によって調査されたが、その主張は裏付けられていなかったと述べた。
アンドリーズ氏は2020年から2021年にかけてエプスタイン氏が性的人身売買容疑で裁判を待っている間に刑務所で自殺した後、BGCと同社の最終ボスであるルトニック氏についてFBIに語った。
エプスタインのファイルには、アンドリース氏がルートニック氏がエプスタイン氏と未申告のビジネス関係を持っていたと主張したことが示されている。 FBIはこれらの告発を調査しなかった。
アンドリーズはBBCに対し、自分が発見したことに興味を持つ人がほとんどいなかったことに失望したと語った。「私はハワード・ラトニックとジェフリー・エプスタインとの関係や経済的つながりを暴露しているのに、関心はない」。
2025年、ラトニック氏は米国商務長官に任命され、その時点でカンター・フィッツジェラルド社の株式を売却し、同社の経営権を息子たちに引き継いだ。
同年後半のポッドキャストで、エプスタインとは20年前、マンハッタンの隣人だった時に一度だけ会ったことがあり、エプスタインの行動が「ひどい」と感じたと主張した。
しかし、エプスタインファイルの公開により、このバージョンの出来事に矛盾が現れ始めました。写真には、2012年12月に性犯罪者のカリブ海の島、リトル・セント・ジェームスでエプスタインと一緒にいるルートニックが写っていた。
エプスタイン被告は4年前にフロリダ州で、未成年者に対するものを含む売春斡旋の2件の罪で刑務所に送られていた。
アンドリーズ氏は、350万ペー​​ジの文書のどこを見るべきかを人々が知っていさえすれば、彼の主張を裏付ける可能性のあるエプスタインのファイルがまだ見つかるのではないかと疑った。
「誰もが『ルートニック』を検索していました」と彼は言う。しかし、彼は、カンター・フィッツジェラルドの幹部が電子メールでフルネームよりもイニシャルを使用することを好むことを知っていました。
アンドリーズさんは「HWL」（ハワード・ウィリアム・ラトニック）を検索し、2018年にエプスタインとの間で送受信された電子メールを発見した。エプスタインは、アンドリーズとラトニックの会社カンター・フィッツジェラルドが投資していたアドフィンというデジタル広告会社についてラトニックに直接話していた。
アンドリーズ氏は、エプスタイン氏がHWLのアカウントに直接「adfinの見通しは何だと思いますか？」と外部から尋ねたやりとりを発見した。
これに対しラトニック氏は、「ようやく収入が得られるようになった。今年は彼らの年だ。今後12か月間、彼らは経済的に自立する必要がある」と答えた。
その後、アンドリーズ氏はこの情報を米国議会の主要調査委員会である下院監視委員会の米国政治家らと共有した。
ラトニック氏は５月に行われるオフカメラ公聴会で委員会に出廷することに同意した。
同氏はエプスタイン氏に関連したいかなる不正行為でも告発されておらず、同氏は委員会で「ジェフリー・エプスタイン氏と彼の違法行為に参加した全員による行為を明白に非難する。彼の犯罪の生存者は我々の敬意と支援に値する」と述べた。
エプスタイン・ファイル: ルートニック、ロイヤルズ、そして英国の内部告発者
元トレーダーが、ハワード・ラトニック米商務長官が小児性愛者の投資家ジェフリー・エプスタインとのビジネス関係を明らかにしなかったことを示す証拠をどのようにして発掘したかを明らかにした。
BBC Sounds または 7 月 14 日火曜日 20:00 から BBC Radio 4 で今すぐお聴きください。
ラトニック氏は委員会に対し、エプスタイン氏がアドフィン社の共同投資家であったことは今年になるまで知らなかったとの主張を繰り返した。しかし、委員会の民主党議員らは同氏が嘘をついていると非難し、委員２１人全員が対外的に同氏の辞任を要求する書簡に署名した。
米商務省は、ルートニック氏に対する疑惑は「現政権の歴史的事業からの絶望的な党派的な気晴らし」であると述べ、商務長官は議会で何百もの質問に答えており、「不正行為の証拠や正当な懸念材料はない」と付け加えた。
「王子様を買うために」
アンドリーズがエプスタインのファイルで発見したもう一つの発見は、ルートニックとエプスタインをよく知る他の2人、当時のアンドルー王子と元妻サラ・ファーガソンとの関係に関するものだった。
ルートニック氏は1990年代からファーガソン氏と友人で、2018年にはユージェニー王女の結婚式にゲストとして出席していた。
ファイル内の文書から、彼の会社カンター・フィッツジェラルドが2013年にアンドリュー氏の言うところの「王子を買収」し、裕福な個人や主権機関とアンドリュー氏のつながりを利用する計画があったことが明らかになった。
提案された契約条件では、王子が管理する企業に100万ポンドが融資され、その企業はカンター・フィッツジェラルドと独占的に取引することになる。
エプスタイン氏は王子のビジネス側近、デビッド・スターン氏にこの取引に反対するよう警告したことがファイルで明らかになった。彼の懸念の 1 つは、取引の独占性に関するものでした。その条件の下で、アンドリューは裕福な顧客をカンター フィッツジェラルドにのみ紹介でき、他には誰にも紹介できませんでした。
ファイルによれば、ルートニック氏と元王子の顧問らは2013年8月から11月までの4か月間、この取引について話し合ったが、結果は空振りに終わった。
この契約について質問されたカンター・フィッツジェラルド氏は、交渉が行われたことは否定しなかったが、元王子との取引はしていないとBBCに語った。アンドリュー・マウントバッテン＝ウィンザー氏はコメントの要請に応じなかった。
はるか遠くの世界
現在57歳のアンドリーズさんは、ウォール街から隔絶された静かなコーンウォールの海辺の村に住んでいる。過去10年間の訴訟は彼のキャリア、財政、健康に壊滅的な影響を与えたと彼は言う。
アンドリーズ氏は、米国の規制当局から内部告発により42万ドル（31万3,000ポンド）の賞金を獲得したにもかかわらず、米国と英国の当局はBGCとカンター・フィッツジェラルド氏の責任を適切に追及できず、不正行為の報告に対する元雇用主の報復から彼を守っていないと述べた。
BGCは内部告発者を報復から守る強力な方針を持っており、アンドリエシュ氏への報復を否定していると述べた。同氏が起こした訴訟に対応する以外、同氏の退任以来一切関与していないという。
アンドリエシュ氏は医師の助言に従うことを拒否し、重要な職務の遂行を拒否し、合理的配慮を拒否し、最終的には職務を放棄したため、雇用は打ち切られたと主張している。
ホワイトハウスはラトニック長官を代表して、「ラトニック長官を中傷しようとするBBCの哀れで必死の試みは、同長官が現代史で最も影響力のある商務長官であったという事実を変えることは何もないだろう」と述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9q28dlyxrzo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T05:00:03+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c2b7/live/dad63ca0-7e9b-11f1-bee8-53ce494e1abc.jpg",
    readTime: 10,
  },
  {
    id: "thailand-probes-possible-negligence-in-d-7a1488e8",
    title: "Thailand probes possible negligence in deadly Bangkok bar fire",
    titleJa: "タイ、バンコクのバー火災で過失の可能性を捜査",
    summaryJa: "タイ、バンコクのバー火災で過失の可能性を捜査- 公開されました",
    bodyOriginal: `Thailand probes possible negligence in deadly Bangkok bar fire
- Published
Thai authorities are investigating if negligence was what led to the deadly inferno at a Bangkok bar late on Sunday, as survivors reported doors being locked and the lack of signage demarcating emergency exits.
The use of flammable materials as decoration may have facilitated the rapid spread of the fire, which originated near the stage, police say.
This "indicates a lack of caution and disregard for the safety of the patrons," Police General Kittiratt Phanphet said on Monday.
The blaze has left at least 30 people dead and dozens more injured. First responders found many of the victims in the restrooms at the end of the bar, from where experts believe they tried to flee – but couldn't.
As of Tuesday morning, 27 of the deceased victims have been identified, authorities said. More than 70 people are injured, 24 of them critically.
Preliminary investigations suggest the blaze was caused by a short circuit in an air conditioner, which quickly cut power throughout the bar.
But several people who had visited the bar earlier have described it as a dark room even in its original state. Phatsara Khamloet, who visited in May, told BBC Thai she had to navigate a "winding route" to reach the bathroom, and noted that the exits were not well marked.
Busakorn Saensuk, a fire safety expert from the Engineering Institute of Thailand who inspected the aftermath at Rong Beer Na Lat Phrao, said the door near the restrooms was locked, while the two doors at the entrance were partially obstructed by furniture and other objects.
Customers would instinctively have run away from the fire, towards the back where the restrooms were, Busakorn tells BBC Thai.
"But once they reached the back, they couldn't get out.
"If the emergency signs were lit, people would have been able to see how the door was locked and may have been able to unlock it," she says.
Busakorn also noted that the stage was decorated using highly flammable materials such as plastic flowers, while the ceiling was plastered with combustible foam.
Survivors have described the stage being engulfed in flames within seconds. Thai indie band Thotsakan, which was performing when the fire broke out, has lost two members to the tragedy.
Worsak Kanok Nukulchai, a professor specialising in structural engineering, believes many people would have died by inhaling toxic smoke "even before getting burned".
The first flames would have reacted with the flammable materials to produce carbon monoxide and hydrogen cyanide, often known as the "toxic twins" of fire smoke, he explains.
The bar was registered as a "restaurant with live music" rather than an "entertainment venue", Bangkok authorities have confirmed, and it was therefore not required to use fire-retardant materials.
Bangkok's Metropolitan Administration says it is reviewing regulations governing the materials allowed in the construction and decoration of entertainment venues and restaurants alike.
According to PBS Thai, the owner of Rong Beer Na Lat Phrao previously owned another pub in Thailand's Yasothon province, which was also destroyed by fire in December 2019.
There were no casualties in the earlier incident because the blaze happened during the day, the report said.
With reporting by Nongnapat Patcham and Panisa Aemocha in Bangkok
- Published1 day ago`,
    bodyJa: `タイ、バンコクのバー火災で過失の可能性を捜査
- 公開されました
タイ当局は、日曜遅くにバンコクのバーで起きた大惨事の原因が過失だったかどうかを調査しているが、生存者らはドアが施錠されており、非常口の境界を示す標識が欠如していたと報告している。
装飾として可燃性の素材を使用したことで、ステージ付近から発生した火災の急速な延焼が促進された可能性があると警察は発表している。
これは「警戒心が欠如し、利用客の安全を無視していることを示している」とキティラット・ファンペット警察長官は月曜日に述べた。
この火災により少なくとも30人が死亡、さらに数十人が負傷した。最初の対応担当者はバーの端にあるトイレで犠牲者の多くを発見し、専門家はそこから逃げようとしたが逃げられなかったと考えている。
当局によると、火曜日朝の時点で死亡した犠牲者のうち27人の身元が確認されている。 70人以上が負傷し、そのうち24人が重体となっている。
予備調査によると、出火の原因はエアコンの短絡であり、バー全体の電源がすぐに切れたことが示唆されている。
しかし、以前にバーを訪れた何人かの人々は、元の状態でも暗い部屋だったと述べています。 5月に訪れたファトサラ・カムロットさんはBBCタイ語に対し、トイレに行くには「曲がりくねった道」を通らなければならず、出口の標識がしっかりしていないと述べた。
ロン・ビール・ナ・ラート・プラオの余波を視察したタイ工学研究所の防火専門家ブサコーン・センスク氏は、トイレ近くのドアは施錠されており、入り口の2つのドアは家具や他の物体で部分的に塞がれていたと述べた。
ブサコーン氏はBBCタイ語に、客は本能的に火事からトイレのあった裏側に逃げたであろうと語った。
「しかし、彼らが一度奥に到達すると、そこから抜け出すことはできませんでした。
「緊急標識が点灯していれば、人々はドアがどのように施錠されているかを見ることができ、鍵を開けることができたかもしれません」と彼女は言う。
ブサコーン氏はまた、ステージがプラスチックの花など可燃性の高い素材を使用して装飾され、天井が可燃性の発泡体で覆われていることにも言及した。
生存者らはステージが数秒以内に炎に包まれたと証言している。火災発生時に演奏していたタイのインディーズバンド、トーサカンはこの悲劇でメンバー２人を失った。
構造工学を専門とするウォルサク・カノック・ヌクルチャイ教授は、多くの人が「火傷する前に」有毒な煙を吸って死亡しただろうと考えている。
最初の炎は可燃性物質と反応して、火災の煙の「有毒な双子」としてよく知られる一酸化炭素とシアン化水素を生成しただろうと彼は説明する。
バンコク当局は、このバーは「娯楽施設」ではなく「生演奏のあるレストラン」として登録されており、そのため難燃性素材の使用は義務付けられていなかったと認めた。
バンコク都庁は、娯楽施設やレストランの建設や装飾に許可される資材を管理する規制を見直していると述べた。
PBSタイによると、ロン・ビール・ナ・ラート・プラオのオーナーは以前、タイのヤソートーン県で別のパブを経営していたが、そこも2019年12月に火災で焼失した。
報告書によると、火災は日中に起きたため、先の事件では死傷者は出なかったという。
Nongnapat Patcham と Panisa Aemocha によるバンコクのレポートによる
- 1 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/clyxyzlp9p2o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T03:47:41+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/73c6/live/00a8bbe0-7f52-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 4,
  },
  {
    id: "china-exports-in-june-jump-at-fastest-pa-bf19f8b9",
    title: "China exports in June jump at fastest pace since 2021 as AI boom, tariff rush lift trade",
    titleJa: "AIブーム、関税ラッシュ引き上げ貿易を受け、6月の中国輸出は2021年以来最速のペースで急増",
    summaryJa: "AIハードウェアに対する世界的な需要の高まりと、予想される関税引き上げを乗り越えるための米国の小売業者の殺到により出荷が急増し、6月の中国貿易の伸びは予想をはるかに上回った。火曜日の税関統計によると、全体の輸出は米ドル換算で前年比27％増と、2021年10月以来の高水準となり、5月の19.4％増から加速し、エコノミスト予想の18.2％増を大幅に上回った。",
    bodyOriginal: `China's trade growth accelerated far more than expected in June, as booming global demand for AI hardware and a rush by U.S. retailers to beat anticipated tariff hikes turbocharged shipments.
Overall exports rose 27% from a year earlier in U.S. dollar value terms, the strongest since October 2021, customs data showed Tuesday, quickening from the 19.4% gain in May and sharply beat economists' estimates for a 18.2% growth.
Imports grew 36% in June, the largest jump since June 2021, gaining pace from the 27.4% growth in May and beating economists' forecast for a 24% growth. The trade surplus stood at $125.6 billion in June.
China's exports to the U.S. jumped around 14% last month while imports grew 26%, according to CNBC calculation of the official data. The outbound shipment to the Southeast Asian nations soared about 35% while imports rose 27%.
Shipment to the European Union rose 18.5% and imports from the bloc grew more than 9%.
Factory activity accelerated in June as U.S.-bound orders recorded sharp year-on-year gains, a survey by China Beige Book showed last month, pushing up freight rates. Manufacturers are bracing for additional tariffs from U.S. President Donald Trump's Section 301 probes as the 10% broad-based duty is set to expire on July 24.
Beijing has grappled with a deepening supply-demand imbalance, as strong industrial output and exports tied to the global AI investment boom continue to power headline growth, even as consumption and private investment weakens amid a prolonged property downturn and volatile global oil prices.
The global AI investment boom has also helped to cushion the fallout from the Middle East conflict and a global oil shock.
China is expected to release its gross domestic product growth for the second quarter on Wednesday. Economists polled by Reuters expect growth to have slowed to 4.5% in the second quarter, after a solid 5% in the first quarter.
Industrial output and retail sales for June, also due Wednesday, are projected to expand 4.7% and shrink 0.1%, respectively. Urban investment is estimated to decline 4.9% in the first half-year, deepening from 4.1% in the first five months, according to a Reuters poll.
Investors are now looking to an expected Politburo meeting in late July for clues on stimulus that could shape policy for the rest of the year, although analysts expect no meaningful stimulus unless growth slows more sharply, given resilient exports and Beijing's focus on curbing excess factory capacity to fight deflation.`,
    bodyJa: `AIハードウェアに対する世界的な需要の高まりと、予想される関税引き上げを乗り越えるための米国の小売業者の殺到により出荷が急増し、6月の中国貿易の伸びは予想をはるかに上回った。
火曜日の税関統計によると、全体の輸出は米ドル換算で前年比27％増と、2021年10月以来の高水準となり、5月の19.4％増から加速し、エコノミスト予想の18.2％増を大幅に上回った。
6月の輸入は36％増加し、2021年6月以来最大の伸びとなり、5月の27.4％増加から勢いを増し、エコノミスト予想の24％増加を上回った。 ６月の貿易黒字は１２５６億ドルだった。
CNBCの公式データの計算によると、中国の米国への輸出は先月約14％増加し、輸入は26％増加した。東南アジア諸国への輸出は約35％増加し、輸入は27％増加した。
欧州連合への出荷は18.5％増加し、域内からの輸入は9％以上増加した。
中国ベージュブックの先月の調査によると、米国向け注文が前年比で大幅な増加を記録したため、6月に工場の活動が加速し、運賃が上昇した。 10％の広範な関税が7月24日に期限切れとなる中、製造業者はドナルド・トランプ米大統領の第301条調査による追加関税に備えている。
長引く不動産低迷と世界的な原油価格の変動で消費と民間投資が低迷する中でも、世界的なAI投資ブームに関連した堅調な鉱工業生産と輸出が引き続き主要成長を牽引しており、中国政府は深刻化する需給不均衡に取り組んでいる。
世界的な AI 投資ブームは、中東紛争や世界的なオイルショックの影響を和らげるのにも役立っています。
中国は水曜日に第２・四半期の国内総生産（ＧＤＰ）伸び率を発表するとみられている。ロイターがまとめたエコノミストらは、第１・四半期は堅調な５％成長だったが、第２・四半期は４．５％に減速すると予想している。
同じく水曜日に発表される６月の鉱工業生産と小売売上高は、それぞれ４．７％拡大、０．１％縮小すると予想されている。ロイター調査によると、都市投資は上半期に４．９％減少し、上半期の４．１％からさらに減少すると予想されている。
投資家らは現在、今年残りの政策を形作る可能性のある景気刺激策の手がかりを求めて、7月下旬に予定されている政治局会議に注目しているが、アナリストらは、輸出の回復力や中国政府がデフレ対策として過剰な工場生産能力の抑制に注力していることを考慮すると、成長がより急激に減速しない限り意味のある刺激策は期待できないと予想している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/china-june-trade-data-exports-imports.html",
    publishedAt: "2026-07-14T03:10:41+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "us-based-mexican-food-chain-chipotle-ope-a2936b14",
    title: "US-based Mexican food chain Chipotle opening first outlet in Mexico",
    titleJa: "米国に本拠を置くメキシコ料理チェーン「チポトレ」がメキシコに初出店",
    summaryJa: "米国に本拠を置くメキシコ料理チェーン「チポトレ」がメキシコに初出店- 公開されました",
    bodyOriginal: `US-based Mexican food chain Chipotle opening first outlet in Mexico
- Published
Chipotle Mexican Grill is set to open its first restaurant in Mexico this week, testing its appeal in the country that inspired its menu.
The chain, which has more than 4,100 outlets worldwide, said on Monday that the move is a "significant milestone" for the firm - known for its customisable burritos, tacos and bowls.
The announcement has been met with a mixed response on social media, with many users mocking the decision.
US restaurant chains have struggled to succeed in the countries their dishes originated. Taco Bell no longer has any outlets in Mexico, while Domino's Pizza has pulled out of Italy.
Chipotle boss Scott Boatwright said: "We are entering Mexico with deep respect for the country's culinary heritage and a commitment to delivering the Chipotle experience with excellence."
"We look forward to serving new guests and earning a place in Mexico's vibrant dining culture."
The new restaurant, located in the northeastern state of Nuevo León near the Texas border, serves as an "important proof-of-concept" the company said.
The company plans to open more restaurants in the state and expand into Mexico City in 2027 as part of its collaboration with Mexican restaurant operator Alsea. The firm's brands include Domino's Pizza, Starbucks and Chili's.
Internet users have been split over Chipotle's entry into Mexico.
"Bold move selling Mexico a corporate version of Mexico," a commenter on X said.
Another X post questioned why Mexicans would pay for Chipotle when they have "perfectly fine and healthy food available to them?"
"It's like Pizza Hut [opening a] location in Napoli, makes no sense," said another.
"Next up, Panda Express opening its first mainland China location," one post read, referring to the US chain that specialises in Chinese food.
The move could be an important test for Chipotle's plans to expand globally, one wrote, while another suggested the chain could do well as a "tourist novelty".
The company plans to open up to 370 new restaurants globally this year, including new outlets in Singapore and South Korea.
Many commenters drew comparisons with other US chains like Taco Bell that have tried to break into countries that their menus took inspiration from.
Taco Bell has tried and failed to establish itself in Mexico twice, despite being one of the world's biggest fast food franchises.
The chain moved out of the country in 2010 after failing to attract Mexican diners.
Domino's Pizza closed its last outlets in Italy - the birthplace of pizza - in 2022 after facing stiff competition from local restaurants since it opened there seven years earlier.
Related topics
- Published26 October 2025
- Published25 July 2025`,
    bodyJa: `米国に本拠を置くメキシコ料理チェーン「チポトレ」がメキシコに初出店
- 公開されました
チポトレ・メキシカン・グリルは今週、メキシコに初のレストランをオープンする予定で、そのメニューのインスピレーションとなった国での魅力を試している。
世界中に4,100以上の店舗を展開するこのチェーンは、カスタマイズ可能なブリトー、タコス、ボウルで知られる同社にとって、この動きは「重要なマイルストーン」であると月曜日に述べた。
この発表はソーシャルメディア上でさまざまな反応を示し、多くのユーザーがこの決定を嘲笑した。
米国のレストランチェーンは、その料理の発祥国で成功することに苦戦している。タコベルはメキシコに店舗を持たなくなり、ドミノ・ピザはイタリアから撤退した。
チポトレのボス、スコット・ボートライト氏は「我々はメキシコの食文化の伝統に深い敬意を払い、最高のチポトレ体験を提供するという決意を持ってメキシコに参入する」と語った。
「新しいゲストにサービスを提供し、メキシコの活気に満ちた食文化の中で居場所を獲得できることを楽しみにしています。」
テキサス州との国境に近い北東部ヌエボ・レオン州に位置するこの新しいレストランは、「重要な概念実証」として機能すると同社は述べた。
同社はメキシコのレストラン運営会社アルシーとの提携の一環として、州内でさらに多くのレストランをオープンし、2027年にはメキシコシティにも進出する計画だ。同社のブランドには、ドミノ・ピザ、スターバックス、チリズが含まれます。
チポトレのメキシコ進出を巡っては、インターネットユーザーの意見が分かれている。
Xのコメント投稿者は「メキシコに企業版メキシコを売り込む大胆な行動だ」と述べた。
別のXの投稿では、メキシコ人は「完璧に上質で健康的な食べ物が手に入るのに、なぜチポトレに金を払うのか？」と疑問を呈していた。
別の人は「ピザハットがナポリに出店するのと同じで、意味がない」と語った。
ある投稿では、「次は、パンダエクスプレスが中国本土初の店舗をオープンする」と、中華料理を専門とする米国のチェーン店について言及した。
この動きはチポトレの世界展開計画にとって重要な試練となる可能性があるとある者は書いたが、別の者はこのチェーンが「観光客向けのノベルティ」としてうまくいく可能性があると示唆した。
同社は今年、シンガポールと韓国の新店を含め、世界で最大370店のレストランを新規オープンする計画だ。
多くのコメント投稿者は、メニューのインスピレーションを得た国に進出しようとしているタコベルのような他の米国のチェーン店との比較を引き合いに出していた。
タコベルは世界最大のファストフードフランチャイズの一つであるにもかかわらず、メキシコでの地位を確立しようとして二度失敗した。
このチェーンはメキシコ人客の誘致に失敗したため、2010年に国外に移転した。
ドミノ・ピザは、ピザ発祥の地であるイタリアで7年前に開店して以来、地元レストランとの激しい競争にさらされ、2022年に最後の店舗を閉店した。
関連トピック
- 2025 年 10 月 26 日発行
- 2025 年 7 月 25 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c0ryr89gp09o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-14T02:42:51+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/f9ab/live/6119a2a0-7f2a-11f1-a2d1-357b5800ed69.jpg",
    readTime: 3,
  },
  {
    id: "trump-s-hormuz-toll-plans-bring-oil-supp-180377a1",
    title: "Trump's Hormuz toll plans bring oil supply risks back in spotlight",
    titleJa: "トランプ大統領のホルムズ通行料計画で石油供給リスクが再び脚光を浴びる",
    summaryJa: "ホルムズ海峡を通過する貨物に20％の手数料を課すというドナルド・トランプ大統領の計画は、特に戦闘の再発で重要な水路が再び閉鎖された場合、世界の石油余剰を脅かしている。アナリストらは、提案されている賦課金は直接コストよりも、それが示唆する内容、つまり海峡を通る輸送の混乱が供給不足につながり、今月初めに出した黒字予想を覆すリスクの高まりが重要であると述べた。",
    bodyOriginal: `President Donald Trump's plan to impose a 20% fee on cargo passing through the Strait of Hormuz is threatening the global oil surplus, especially if renewed fighting shuts the key waterway again.
Analysts said the proposed levy matters less for its direct cost than for what it signals: a heightened risk that disruptions to shipping through the strait could lead to supply shortages, upending forecasts of a surplus made earlier this month.
Andy Lipow, president of Lipow Oil Associates, said on CNBC's "Squawk Box Asia" that the market had been counting on stronger supplies following the U.S.-Iran memorandum of understanding signed last month, but that optimism has faded.
"Those surpluses are certainly in jeopardy, especially if the strait would completely shut down."
Lipow estimates that Trump's proposed fee, if applied to crude cargoes, would effectively add about $16 a barrel to oil shipped through the strait, though the administration has yet to clarify how the charge would be implemented.
Citi warned that effecting the fee could also lift the possibility of a broader military confrontation in the near term.
"It is our view that the risks of military escalation have risen materially should this announcement be implemented," Citi wrote in a note published early Tuesday.
"The possibility that the Iranian regime walks away from the MoU until after the mid-term U.S. elections has also risen, a scenario which would most likely see higher for longer oil prices," Citi's analysts added.
While the proposed levy would raise shipping costs, other experts said investors are increasingly focused on the possibility that an escalating conflict could remove barrels from the market altogether.
"The immediate impact is obviously supportive of oil prices, but the more consequential issue is the risk of renewed physical supply losses," said Henry Hoffman, co-portfolio manager at Catalyst Energy Infrastructure Fund.
U.S. West Texas Intermediate futures for August delivery rose 2.27% to $79.91 per barrel. International benchmark Brent crude futures for September delivery climbed 2.14% to $85.11, extending gains after advancing 9.6% in the previous session.
Falling vessel traffic in Strait
Hoffman cautioned that falling vessel traffic could eventually force producers to reduce output if storage fills up because crude can no longer be exported. Vessel traffic through the Hormuz Strait fell sharply on Sunday, with Kpler data showing just 14 ships crossing the waterway, including four crude tankers, compared with 37 vessels a week earlier.
If exporters are unable to ship crude out of the Gulf, storage tanks can eventually fill up, leaving producers with little choice but to temporarily halt production, said Hoffman. "That makes the effective supply loss potentially much greater than what can be measured simply by looking at damaged infrastructure."
The latest developments would also undermine expectations from the International Energy Agency and others that global oil markets would remain comfortably supplied. The IEA just last week said it expects the oil market to return to surplus toward the end of 2026, though the outlook hinged on tanker traffic through the strait gradually recovering.
The timing could prove especially challenging if Asian demand rebounds just as Middle Eastern supplies become less dependable, he added. "Saudi Arabia recently moved its primary Asian crude grade from an enormous premium to a discount, which should encourage Chinese refiners to increase purchases after imports fell sharply during the initial disruption."
Saudi Aramco recently cut prices by $11 per barrel to a $1.50 discount versus the Oman/Dubai benchmark.
"In other words, Chinese demand may begin recovering just as the reliability of Middle Eastern supply is deteriorating again."`,
    bodyJa: `ホルムズ海峡を通過する貨物に20％の手数料を課すというドナルド・トランプ大統領の計画は、特に戦闘の再発で重要な水路が再び閉鎖された場合、世界の石油余剰を脅かしている。
アナリストらは、提案されている賦課金は直接コストよりも、それが示唆する内容、つまり海峡を通る輸送の混乱が供給不足につながり、今月初めに出した黒字予想を覆すリスクの高まりが重要であると述べた。
リポウ・オイル・アソシエイツのアンディ・リパウ社長はＣＮＢＣの「スコーク・ボックス・アジア」で、先月署名された米国とイランの覚書を受けて市場は供給の増加に期待していたが、楽観的な見方は消えたと述べた。
「特に海峡が完全に閉鎖した場合、これらの余剰は確かに危険にさらされる。」
リパウ氏は、トランプ大統領の提案した料金が原油貨物に適用された場合、海峡を通って輸送される石油に実質的に1バレルあたり約16ドル追加されると推定しているが、政府は料金がどのように実施されるかまだ明らかにしていない。
シティは、この手数料の影響により、近い将来、より広範な軍事衝突が起こる可能性も高まる可能性があると警告した。
シティは火曜日初めに公表したメモで「この発表が実施された場合、軍事的エスカレーションのリスクが大幅に高まるというのがわれわれの見解だ」と述べた。
シティのアナリストは「イラン政権が米国の中間選挙後まで覚書から離脱する可能性も高まっており、原油価格が長期化すればこのシナリオはさらに上昇する可能性が最も高い」と付け加えた。
他の専門家らは、提案されている課税により輸送コストが上昇する一方、投資家らは紛争の激化により樽が市場から完全に撤去される可能性にますます注目していると述べた。
カタリスト・エネルギー・インフラストラクチャー・ファンドの共同ポートフォリオマネジャー、ヘンリー・ホフマン氏は「当面の影響は明らかに原油価格を支援しているが、より重大な問題は物理的な供給損失が再び起こるリスクだ」と述べた。
米国ウエスト・テキサス・インターミディエート先物８月限は２．２７％上昇し、１バレル＝７９．９１ドルとなった。国際ベンチマークであるブレント原油先物９月渡しは２．１４％上昇して８５．１１ドルとなり、前取引で９．６％上昇した後、さらに上昇幅を広げた。
海峡の船舶交通量の減少
ホフマン氏は、原油が輸出できなくなって貯蔵庫がいっぱいになった場合、船舶交通量の減少により最終的には生産者が減産を余儀なくされる可能性があると警告した。ホルムズ海峡を通過する船舶の交通量は日曜日に激減し、クプラーのデータによると、同水路を横断する船舶は原油タンカー４隻を含むわずか１４隻にとどまったが、１週間前の船舶は３７隻だった。
ホフマン氏は、輸出業者が湾岸から原油を出荷できなければ、最終的には貯蔵タンクが満杯になり、生産者には一時的に生産を停止する以外に選択肢がほとんどなくなると述べた。 「そのため、実効供給損失は、損傷したインフラを観察するだけで測定できるものよりもはるかに大きくなる可能性があります。」
また、最新の動向は、世界の石油市場が引き続き快適に供給されるという国際エネルギー機関などの期待を損なうことになるだろう。 IEAはつい先週、石油市場が2026年末にかけて黒字に戻るとの見通しを発表したが、見通しは同海峡を通過するタンカーの交通量が徐々に回復するかどうかにかかっている。
中東の供給が不安定になると同時にアジアの需要が回復すれば、タイミングは特に困難になる可能性があると付け加えた。 「サウジアラビアは最近、アジア産原油の主要グレードを巨額のプレミアムからディスカウントに変更した。これにより、最初の混乱で輸入が大幅に減少した中国の精製業者が購入を増やすようになるだろう。」
サウジアラムコは最近、価格を1バレル当たり11ドル引き下げ、オマーン/ドバイのベンチマークに対して1.50ドル割引した。
「言い換えれば、中東の供給の信頼性が再び悪化すると同時に、中国の需要が回復し始める可能性がある。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/trumps-hormuz-toll-plans-bring-oil-supply-risks-back-in-spotlight.html",
    publishedAt: "2026-07-14T02:37:12+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "u-s-completes-strikes-against-iran-while-67ffa80e",
    title: "U.S. completes strikes against Iran, while Tehran targets Gulf neighbors",
    titleJa: "米国がイランへの攻撃を完了、一方イランは湾岸諸国を標的に",
    summaryJa: "米国は3夜連続でイランの軍事目標に対する攻撃を完了し、一方イランはホルムズ海峡で首長国の石油タンカー2隻を攻撃し、湾岸全域に空襲警報を発令した。米中央軍は、イランに対する最新の一連の攻撃を完了したと発表した。セントコムは声明で、この５時間の任務はイラン全土の軍事目標を攻撃し、商業船舶を攻撃するイランの能力をさらに低下させたと述べた。",
    bodyOriginal: `The U.S. has completed its strikes against Iranian military targets for a third consecutive night, while Tehran hit two Emirati oil tankers in the Strait of Hormuz and triggered air-raid warnings across the Gulf.
U.S. Central Command said it has completed the latest wave of strikes against Iran. The five-hour mission struck military targets across Iran and further degraded Iran's ability to attack commercial shipping, Centcom said in a statement.
The U.S. forces attacked Iranian coastal defense systems, missile and drone sites, and maritime capabilities.
The military action came hours after Trump ordered to reinstate a blockade on Iran in the strait Tuesday at 4 p.m. ET, and floated a 20% toll charge for ships going through the critical energy waterway.
Iran retaliated with attacks targeting Gulf countries, including the United Arab Emirates and Bahrain Tuesday morning.
The UAE Defense Ministry said Tuesday morning that national tankers Mombasa and AI Bahiyah were targeted by two Iranian cruise missiles in the strait's southern lane, inside Omani territorial waters. The attack killed one Indian crew member aboard the Mombasa, injured eight others and caused "material damage" to both tankers as a result of the fires that broke out on board.
The ministry said it would remain "on the highest level of readiness and preparedness to address any threats," and would take all necessary measures to respond to any attempts to undermine the country's security and stability.
Bahrain, home to the U.S. Navy's Fifth Fleet, also came under renewed attack, and sounded missile-alert sirens early Tuesday, according to the Associated Press, as Iran retaliated to American strikes.
Traffic through Hormuz is slowing again with confirmed crossings declining by around 52% week on week over July 10 to 12, according to Kpler, with traffic reverting to "more defensive routing patterns" — increased use of Iranian and dark routes while shunning Omani and corridors authorized by International Maritime Organization.
War risk premiums for Strait of Hormuz are expected to increase sharply as markets react to the escalating tensions, according to Lloyd's List Intelligence, as shipowners and charterers have paused decisions to transit through the waterway.
The strikes have unraveled the ceasefire following the interim U.S.-Iran agreement signed last month, aimed at reopening the strait and pausing hostilities for 60 days of negotiations.
The escalation in the region pushed Brent crude up 2% to $85 a barrel on Tuesday, while the U.S. West Texas Intermediate rose 2.3% to $80 amid renewed uncertainty over commercial shipping through the Hormuz waterway that carried a fifth of the world's oil and gas before the conflict.`,
    bodyJa: `米国は3夜連続でイランの軍事目標に対する攻撃を完了し、一方イランはホルムズ海峡で首長国の石油タンカー2隻を攻撃し、湾岸全域に空襲警報を発令した。
米中央軍は、イランに対する最新の一連の攻撃を完了したと発表した。セントコムは声明で、この５時間の任務はイラン全土の軍事目標を攻撃し、商業船舶を攻撃するイランの能力をさらに低下させたと述べた。
米軍はイランの沿岸防衛システム、ミサイルや無人機の拠点、海洋能力を攻撃した。
この軍事行動は、トランプ大統領が火曜日午後4時にイラン海峡における封鎖を再開するよう命令した数時間後に行われた。東部標準時は、重要なエネルギー水路を通過する船舶に対して 20% の通行料を課すことを提案しました。
イランは火曜日朝、アラブ首長国連邦やバーレーンを含む湾岸諸国を標的とした攻撃で報復した。
UAE国防省は火曜朝、オマーン領海内の海峡南側車線で国営タンカー「モンバサ」と「AIバヒヤ」がイランの巡航ミサイル2発の標的になったと発表した。この攻撃により、モンバサ号のインド人乗組員1人が死亡、8人が負傷し、船内で発生した火災により両タンカーに「物的損害」が発生した。
同省は「あらゆる脅威に対処するための最高レベルの準備と備え」を維持し、国の安全と安定を損なうあらゆる試みに対応するために必要なあらゆる措置を講じると述べた。
AP通信によると、イランがアメリカの攻撃に報復する中、米海軍第5艦隊の本拠地バーレーンも新たな攻撃を受け、火曜日早朝にミサイル警報のサイレンを鳴らした。
クプラー氏によると、ホルムズを通る交通は再び減速しており、確認された交差点は7月10日から12日にかけて前週比約52％減少しており、交通は「より防御的な経路パターン」、つまりオマーンや国際海事機関が認可した回廊を避けながらイランルートや暗いルートの利用が増加しているという。
ロイズ・リスト・インテリジェンスによると、船主や用船会社がホルムズ海峡を通過する決定を一時停止しているため、緊張の高まりに市場が反応するにつれ、ホルムズ海峡の戦争リスクプレミアムは急激に上昇すると予想されている。
この攻撃により、海峡の再開と60日間の交渉の敵対行為の一時停止を目的とした先月署名された米国とイランの暫定合意に続く停戦が崩れた。
この地域の激化により、火曜日にはブレント原油が２％上昇して１バレル＝８５ドルとなった一方、紛争前に世界の石油とガスの５分の１を運んでいたホルムズ水道を通る商業輸送を巡る不確実性が再び高まる中、米国ウェスト・テキサス・インターミディエイトは２．３％上昇して８０ドルとなった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/14/us-iran-hormuz-strikes-oil-toll.html",
    publishedAt: "2026-07-14T02:34:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "the-u-s-is-maxing-out-its-strategic-oil-65e6dbbb",
    title: "The U.S. is maxing out its strategic oil reserves as Trump vows to control the Strait of Hormuz",
    titleJa: "トランプ大統領がホルムズ海峡の制圧を誓う中、米国は戦略的石油備蓄を最大限に活用している",
    summaryJa: "政府の報告書によると、戦略石油備蓄の備蓄は不安定なほど不足しており、大規模な設備の故障、漏洩、流出の被害を受けている。",
    bodyOriginal: `Strategic Petroleum Reserve stockpiles are precariously low and have been hit by major equipment failures, leaks and spills, according to a government report.`,
    bodyJa: `政府の報告書によると、戦略石油備蓄の備蓄は不安定なほど不足しており、大規模な設備の故障、漏洩、流出の被害を受けている。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/the-u-s-is-maxing-out-its-strategic-oil-reserves-as-trump-vows-to-control-the-strait-of-hormuz-b71f88a9?mod=mw_rss_topstories",
    publishedAt: "2026-07-14T02:30:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-44519931",
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
