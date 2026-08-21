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
    id: "japan-headline-inflation-rate-hits-highe-731e3837",
    title: "Japan headline inflation rate hits highest this year as energy prices bite",
    titleJa: "エネルギー価格の高騰により、日本の総合インフレ率は今年最高に達する",
    summaryJa: "イラン戦争のさなかエネルギーコストが上昇する中、日本の総合インフレ率は7月に1.9％と今年最高水準に達した。生鮮食料品の価格を差し引いた、エネルギーを含むコアインフレ率は1.8％で予想と一致した。",
    bodyOriginal: `Japan's headline inflation rate hit 1.9% in July, the highest level this year, as energy costs increase amid the Iran war.
Core inflation — which strips out prices of fresh food but includes energy — was in line with expectations, coming in at 1.8%.
Energy prices rose for the first time since November 2025 despite government subsidies, due to high oil costs from the conflict in the Middle East. That showed up in wholesale inflation, which came in at 7.2% for July, with electricity charges being the largest contributor.
Fresh food prices also saw a sharp spike, increasing 7% compared to a 3.9% rise in June.
Analysts have previously told CNBC that the relatively low consumer inflation is due to subsidies handed out by Prime Minister Sanae Takaichi's administration as it attempts to shield consumers from higher energy prices.
The so called "core-core" inflation rate — which strips out prices of both fresh food and energy, came in at 1.9%.
The Bank of Japan warned in its outlook report last month that core inflation was likely to accelerate to a level "clearly above" 2% from the second half of its 2026 fiscal year, which runs from September to March.
It cited wage increases being passed along into selling prices, the rise in crude oil prices and the recent depreciation of the yen. Inflation should then come down toward 2% as oil declines, it said.`,
    bodyJa: `イラン戦争のさなかエネルギーコストが上昇する中、日本の総合インフレ率は7月に1.9％と今年最高水準に達した。
生鮮食料品の価格を差し引いた、エネルギーを含むコアインフレ率は1.8％で予想と一致した。
中東紛争による原油価格高騰のため、政府の補助金にもかかわらず、エネルギー価格は２０２５年１１月以来初めて上昇した。これは7月の卸売インフレ率に表れ、7.2％となり、電気料金が最大の要因となった。
生鮮食品の価格も急騰し、6月の3.9％上昇に対し7％上昇した。
アナリストらは以前CNBCに対し、比較的低い消費者インフレは高市早苗首相の政権が消費者をエネルギー価格高騰から守るために配布した補助金によるものだと語った。
生鮮食品とエネルギーの価格を差し引いた、いわゆる「コアコア」インフレ率は1.9％となった。
日銀は先月の見通し報告書の中で、コアインフレ率が２０２６会計年度（９月から３月）の下半期から２％を「明らかに上回る」水準まで加速する可能性が高いと警告した。
賃金上昇が販売価格に転嫁されているほか、原油価格の上昇や最近の円安などを理由に挙げた。その後、原油価格の下落に伴いインフレ率は２％に向けて低下するだろうとの見方を示した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/21/japan-inflation-iran-war-energy.html",
    publishedAt: "2026-08-21T00:22:20+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "japan-s-historic-yen-intervention-has-tu-9b164d9b",
    title: "Japan's historic yen intervention has ‘turbo-charged’ the carry trade",
    titleJa: "日本の歴史的な円介入はキャリートレードを「ターボチャージ」した",
    summaryJa: "円を下支えしようとする日本の歴史的な取り組みは、一部の投資家にキャリートレードを倍増させるより良い機会を与えるという、意図せぬ結果をもたらした可能性がある。財務省のデータによると、日本の投資家は８月１５日までの２週間に海外株式と長期債券を５兆円以上買い越し、それまでの２週間は３０００億円以上売り越していた。",
    bodyOriginal: `Japan's historic effort to prop up the yen may have had an unintended consequence: giving some investors a better opportunity to double down on carry trade.
Japanese investors net bought more than 5 trillion yen of foreign equities and long-term bonds over the two weeks ended Aug. 15, compared with net selling of over 300 billion yen in the prior two weeks, according to Ministry of Finance data.
The purchases suggest investors took advantage of the yen's sharp rally following last month's joint U.S.-Japan currency intervention to snap up overseas assets at more favorable exchange rates, said market watchers.
"Intervention has 'turbo charged' the carry trade for fundamental & long term investors," according Jesper Koll, expert director at Monex Group. "As long as the cost of money in Japan is lower than the return overseas, carry trades will re-assert," Koll said.
While authorities succeeded in jolting the yen higher, they did little to change the incentive for investors to borrow or raise funds cheaply in Japan and put the money into higher-yielding assets abroad.
The yen strengthened from around 164 per dollar before the intervention to roughly 155, but quickly surrendered a large chunk of those gains. It has since weakened back toward 159 against the greenback.
That has reinforced expectations that the yen will remain under pressure unless the Bank of Japan raises rates enough to materially narrow the bond yield gap with the U.S. The U.S.-Japan 10-year yield spread stood at roughly 1.8 percentage point as of Thursday.
The short-lived yen gains signal that investors are treating bouts of yen strength as opportunities to rebuild carry trade positions rather than abandon them.
That dynamic is particularly visible among Japanese institutional investors. Long-term investors such as pension funds and asset managers continued selling yen, according to Masahiko Loo, fixed income strategist at State Street Global Advisors.
"The intervention only addressed a 'symptom', but [is] not curing the 'disease,'" said Francis Tan, Asia chief strategist at Indosuez Wealth Management, referring to the structural forces including Japan's low borrowing costs and wide interest-rate differentials with other major economies.
Koll also said that Japanese retail and institutional investors have used the stronger yen to establish new positions in non-yen assets, particularly higher-yielding U.S. bills and bonds.
"The market is far less one-sided than before the intervention, but the incentives to fund in yen remain attractive while U.S.-Japan rate differentials stay wide," Loo said.
Other flow data point more directly to carry positions being maintained. Long-term investors are continuing to sell low-yielding yen against higher-yielding G10 currencies, consistent with investors using the Japanese currency to fund positions elsewhere, said to Masahiko Loo, fixed income strategist at State Street Global Advisors.
Alpha Binwani Capital's founder Ashwin Binwani said institutional investors remained positioned in carry trades against a basket of G10 currencies, led by the Australian dollar.
There are also signs that some currency traders are rebuilding bearish bets on the yen, as the impact of the intervention has faded.
Binwani exited long dollar-yen positions after the U.S.-backed intervention, before re-establishing them just above 157, expecting the yen to weaken going forward. "Upon news of the U.S. intervention, we took profit and once again re-established dollar yen long positions just slightly above 157," he said.
Binwani said each intervention-driven rally could potentially offer investors a better entry point to sell the currency. While distinct from borrowing yen to invest directly in higher-yielding assets, the trade is underpinned by the same fundamental force: Japan's relatively low interest rates that keep its currency under pressure.
Overall, speculative positions against the yen, however, have declined. CFTC data show leveraged funds slashed net short yen positions from almost 138,000 contracts at the end of June to 59,526 as of Aug. 11, as authorities demonstrated their willingness to intervene.`,
    bodyJa: `円を下支えしようとする日本の歴史的な取り組みは、一部の投資家にキャリートレードを倍増させるより良い機会を与えるという、意図せぬ結果をもたらした可能性がある。
財務省のデータによると、日本の投資家は８月１５日までの２週間に海外株式と長期債券を５兆円以上買い越し、それまでの２週間は３０００億円以上売り越していた。
市場関係者らによると、今回の購入は、投資家が先月の日米共同為替介入後の円の急騰を利用して、より有利な為替レートで海外資産を買い占めたことを示唆しているという。
マネックスグループのエキスパートディレクター、ジェスパー・コル氏は、「介入により、ファンダメンタルズ投資家や長期投資家にとってキャリートレードは『ターボチャージ』された」と述べた。 「日本のお金のコストが海外のリターンよりも低い限り、キャリートレードは再び活発化するだろう」とコル氏は語った。
当局は円高を揺るがすことに成功したが、投資家が日本で安く資金を借りたり調達し、その資金を海外の高利回り資産に投資したりするインセンティブを変えることはほとんどできなかった。
円は介入前の1ドル＝約164円から約155円まで上昇したが、その上昇分のかなりの部分をすぐに放棄した。その後、対ドルで159ドルに向けて下落した。
このため、日銀が米国との債券利回り格差を大幅に縮小するほど十分な利上げをしない限り、円には引き続き圧力がかかるとの見方が強まった。日米10年債利回り格差は木曜時点で約1.8％ポイントとなっている。
短期間の円高は、投資家が円高局面をキャリートレードのポジションを放棄するのではなく、再構築する機会として捉えていることを示している。
この力関係は特に日本の機関投資家の間で顕著に見られます。ステート・ストリート・グローバル・アドバイザーズの債券ストラテジスト、マサヒコ・ルー氏によると、年金基金や資産運用会社などの長期投資家は円を売り続けた。
インドスエズ・ウェルス・マネジメントのアジア首席ストラテジスト、フランシス・タン氏は「介入は『症状』に対処しただけで、『病気』は治癒していない」と述べ、日本の低い借入コストや他の主要国との大きな金利差などの構造的要因に言及した。
コル氏はまた、日本の個人投資家や機関投資家が円高を利用して、円以外の資産、特に高利回りの米紙幣や債券に新たなポジションを確立していると述べた。
ルー氏は「市場は介入前に比べてはるかに一方的ではなくなったが、日米の金利差が依然として大きい中、円で資金を調達するインセンティブは依然として魅力的だ」と述べた。
他のフロー データは、維持されているキャリー ポジションをより直接的に示します。ステート・ストリート・グローバル・アドバイザーズの債券ストラテジスト、マサヒコ・ルー氏は、長期投資家は高利回りのG10通貨に対して低利回りの円を売り続けており、これは投資家が日本通貨を他の場所のポジションに資金調達するために利用していることと一致すると述べた。
アルファ・ビンワニ・キャピタルの創設者アシュウィン・ビンワニ氏は、機関投資家は豪ドル主導でＧ１０通貨バスケットに対してキャリートレードを続けていると述べた。
介入の影響が薄れる中、一部の為替トレーダーが円に対する弱気の賭けを再構築している兆候もある。
ビンワニ氏は米国支援の介入後、ドル円のロングポジションを解消したが、今後の円安を予想して１５７ドルを少し上回る水準に再確立した。同氏は「米国の介入のニュースを受けて、利益確定し、ドル円のロングポジションを１５７をわずかに上回る水準に再設定した」と述べた。
ビンワニ氏は、介入主導の上昇は投資家にとって通貨売りのより良いエントリーポイントとなる可能性があると述べた。円を借りて高利回り資産に直接投資するのとは異なりますが、この取引は同じ基本的な力、つまり自国通貨に圧力をかけ続ける日本の比較的低い金利によって支えられています。
しかしながら、全体的には対円投機ポジションは減少している。 CFTCのデータによると、当局が介入の姿勢を示したため、レバレッジファンドは6月末の約13万8,000枚から8月11日時点で5万9,526枚まで円のネットショートポジションを削減した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/us-japan-yen-intervention-bank-of-japan-carry-trade.html",
    publishedAt: "2026-08-21T00:00:01+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 4,
  },
  {
    id: "how-much-could-trump-s-economic-d-day-hu-88e6381f",
    title: "How much could Trump's 'economic D-Day' hurt Iran?",
    titleJa: "トランプ大統領の「経済的Dデー」はイランにどれだけのダメージを与える可能性があるだろうか？",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `How much could Trump's 'economic D-Day' hurt Iran?
- Published
Nearly six months after US President Donald Trump vowed a swift victory over Iran, the conflict appears to be at a standstill, with prospects of a military victory or negotiated settlement growing dimmer.
To break the deadlock, Trump has vowed an "economic D-Day" under which any country that does business with Iran would face "tremendous" economic consequences.
Iran, however, has long faced sanctions and has so far shown a willingness to endure pain and a capacity to adapt to immense economic and military pressure as the conflict drags on.
The key question for the US then becomes, will further sanctions work where other strategies have failed?
The exact mechanics of the new US economic pressure campaign remain unclear, with Treasury Secretary Scott Bessent promising to reveal them in a news conference on 24 August.
But in an interview with CNBC, Bessent made clear that the US is willing to take action against any country - friend or foe - that it believes is extending a lifeline to Iran.
"You are either with us or against us," he said. "If you insist on doing business with [Iran], either transferring money, buying their oil or doing seaborne sea transfers, then the US treasury and the US government... will put its full might and force toward enforcing against you."
Vice-President JD Vance has described the sanctions as a "new phase" of the conflict in which economic pressure is the "most effective" tool available to the US.
"They're going to try to apply economic pressure to us, but what has been true over the last couple of weeks is that they felt a lot more pressure than we have," Vance said on the Clay Travis and Buck Sexton show.
"We're going to keep that going because we think that's the best way to ultimately achieve the final objective," he added.
Iran has faced significant US sanctions since nearly the beginning of the Islamic Republic in 1979.
The economic pressure campaign intensified after the first Trump administration withdrew from the Joint Comprehensive Plan of Action (JCPOA), a 2015 pact between world powers and Iran to curb its nuclear programme.
And in the current conflict, the US government has already announced Operation Economic Fury, a two-pronged US economic campaign combining US treasury-co-ordinated sanctions against regime financial flows and a naval blockade against Iranian ports.
Imran Bayoumi, a geostrategy expert with the Atlantic Council in Washington DC and former policy adviser to the defence department, told the BBC the latest announcement was likely the result of mounting frustration that other options have not delivered the results Trump wants.
"This is really a recognition that the US is almost stuck in this war," he said. "It's another try at economic pressure."
"This is just another tool that the US is using," Bayoumi added. "We've not seen a clear strategy laid out by the administration with either military or economic tools. The question of what the US is trying to achieve is still unanswered."
Michael Parker, an eight-year veteran of the Office of Foreign Assets Control (OFAC) and expert on economic sanctions, said the new strategy will likely represent an effort to "expand the economic blast radius" of sanctions by targeting third countries that still deal with Iran, but have economies that depend on the US dollar.
"Thus far, the US has largely used the threat of these secondary sanctions against foreign financial institutions to encourage compliance with sanctions policy," he said.
"But this is a lever that is sort of unexplored insofar as targeting anything touching the US dollar that is also touching Iran," Parker added.
As an example, Parker pointed to foreign financial institutions that help Iran evade sanctions, or directs money towards Iranian coffers.
How Iran would respond to these moves remains unclear, but sanctions experts say that Iran has so far proved adept at using irregular channels to circumvent sanctions - such as "shadow" vessels transporting oil or new commercial fronts unlisted by US sanctions.
"You keep seeing new names popping up, because Iran is adapting really quickly," said Mohammed Hammouda, an export control and sanctions manager at the London Stock Exchange. "Whatever sanctions one does, they find a new road [around it]."
These Iranian counter-moves, he added, often leave those charged with enforcing compliance playing a game of catch-up.
"Sanctions are all on paper, but the hard work is behind the scenes," Hammouda added. "There are teams worldwide trying to impose sanctions and identify those parties involved, which is why Iran has to try to adapt."
How effective these sanctions are will largely be determined by how the countries that are ultimately targeted - which could include US allies like Turkey and Iraq, as well as China - react.
"Some of this is out of Iran's hands," Parker said. "Iran's ability to evade or avoid sanctions is, in large part, contingent on other countries and financial institution's willingness to give them [Iran] access to the formal banking system."
Parker believes that the sanctions are "only as powerful" as the willingness of targeted countries to comply with American foreign policy objectives, or face potentially painful sanctions on trade involving the US dollar.
Some experts question whether that willingness currently exists.
"I can't really see China agreeing to that, for example," Bayoumi said. "These states have all been able to navigate their own interests with the Trump administration."
"The underlying point is that this is just another tool," he added. "But the broader question of strategy remains. Absent that, I'm not sure this is going to change anything long term."
- Published3 hours ago
- Published1 day ago
- Published3 days ago`,
    bodyJa: `トランプ大統領の「経済的Dデー」はイランにどれだけのダメージを与える可能性があるだろうか？
- 公開されました
ドナルド・トランプ米大統領がイランに対する速やかな勝利を誓ってからほぼ6カ月が経ち、軍事的勝利や交渉による解決の見通しはますます薄れており、紛争は停滞しているようだ。
行き詰まりを打開するために、トランプ大統領は、イランと取引する国は「甚大な」経済的影響に直面する「経済Dデー」を宣言した。
しかし、イランは長年にわたり制裁に直面しており、これまでのところ、紛争が長引く中、苦痛に耐える姿勢と、経済的・軍事的圧力の巨大化に適応する能力を示している。
米国にとって重要な問題は、他の戦略が失敗した場合にさらなる制裁が機能するかどうかということになる。
米国の新たな経済圧力キャンペーンの正確な仕組みは依然として不明であり、スコット・ベッセント財務長官は8月24日の記者会見で明らかにすると約束している。
しかし、ベセント氏はCNBCとのインタビューで、米国はイランに命綱を伸ばしていると思われる国に対しては、敵味方問わず行動を起こす用意があると明言した。
「あなたたちは我々に味方するか、反対するかのどちらかだ」と彼は言った。 「もしあなたが送金、石油の購入、あるいは海上輸送など、（イランと）取引をすることを主張するなら、米国財務省と米国政府は…全力を尽くしてあなたに対して強制力を行使するだろう。」
Ｊ・Ｄ・バンス副大統領は、今回の制裁を、経済的圧力が米国にとって「最も効果的な」手段となる紛争の「新たな段階」であると述べた。
ヴァンス氏はクレイ・トラビスとバック・セクストンの番組で、「彼らは私たちに経済的圧力をかけようとしているが、ここ数週間で真実なのは、彼らが私たちよりもはるかに大きなプレッシャーを感じていたということだ」と語った。
「最終的に最終目標を達成するにはそれが最善の方法だと考えているので、我々はそれを続けるつもりだ」と彼は付け加えた。
イランは、1979年のイスラム共和国発足間近以来、米国による大幅な制裁に直面してきた。
第一次トランプ政権が核開発計画を抑制するための世界大国とイランとの間の２０１５年の協定である包括的共同行動計画（ＪＣＰＯＡ）から離脱した後、経済圧力キャンペーンは激化した。
そして現在の紛争において、米国政府は既に「経済的怒り作戦」を発表している。これは、政権の資金の流れに対する米国財務省と連携した制裁と、イラン港湾に対する海上封鎖を組み合わせた二本柱の米国経済キャンペーンである。
ワシントンD.C.の大西洋評議会の地政戦略専門家で元国防総省政策顧問のイムラン・バユーミ氏はBBCに対し、今回の発表は他の選択肢がトランプ大統領の望む結果をもたらしていないことへの不満の高まりの結果である可能性が高いと語った。
「これはまさに、米国がこの戦争にほぼ巻き込まれているという認識だ」と同氏は述べた。 「これは経済的圧力に対する新たな試みだ。」
「これは米国が利用しているもう一つの手段に過ぎない」とバユーミ氏は付け加えた。 「軍事的手段や経済的手段を用いて政権が打ち出した明確な戦略を我々は見たことがない。米国が何を達成しようとしているのかという問題はいまだ答えられていない。」
外国資産管理局（OFAC）に8年間勤務し経済制裁の専門家であるマイケル・パーカー氏は、新たな戦略は、依然としてイランと取引を続けているが、経済が米ドルに依存している第三国をターゲットにすることで、制裁の「経済的爆発範囲を拡大する」取り組みを示す可能性が高いと述べた。
同氏は「これまで米国は主に、外国金融機関に対するこうした二次制裁の脅威を利用して、制裁政策の順守を促してきた」と述べた。
「しかし、これは、イランにも影響を及ぼし、米ドルに影響を与えるものを標的にするという点では、ある意味未開発の手段だ」とパーカー氏は付け加えた。
パーカー氏は一例として、イランの制裁回避を支援したり、資金をイランの金庫に振り向けたりする外国金融機関を挙げた。
イランがこうした動きにどう対応するかは依然として不明だが、制裁専門家らによると、イランはこれまでのところ、石油や米国の制裁対象外の新たな商業分野を輸送する「影の」船舶など、不規則なルートを利用して制裁を回避することに長けているという。
ロンドン証券取引所の輸出管理・制裁担当マネジャー、モハメド・ハムーダ氏は、「イランは非常に早く適応しているため、新しい名前が次々と登場している」と述べた。 「どんな制裁をしても、彼らは[その周りに]新しい道を見つけるのです。」
こうしたイランの対抗策により、コンプライアンスを強制する責任を負った人々は、後追いゲームをすることになることが多い、と同氏は付け加えた。
「制裁はすべて紙の上で行われているが、努力は舞台裏で行われている」とハモウダ氏は付け加えた。 「制裁を課し、関係者を特定しようとしているチームが世界中に存在しており、そのためイランは適応しようと努めなければならない。」
これらの制裁がどれだけ効果的かは、最終的に標的となる国（トルコやイラクといった米国の同盟国や中国も含まれる可能性がある）がどのように反応するかによって大きく決まるだろう。
「この一部はイランの手に負えない」とパーカー氏は語った。 「イランが制裁を回避できるかどうかは、主に他国と金融機関が（イランに）正規の銀行システムへのアクセスを与えるかどうかにかかっています。」
パーカー氏は、制裁の威力は、対象国が米国の外交政策目標に従うか、米ドルが絡む貿易に関して潜在的に痛みを伴う制裁に直面するかどうかに応じて「強力」になると考えている。
一部の専門家は、そのような意欲が現在存在するかどうかを疑問視しています。
「例えば中国がそれに同意するとは到底思えない」とバユーミ氏は語った。 「これらの州はすべて、トランプ政権とともに自らの利益をうまく進めることができた。」
「根底にあるのは、これは単なるツールの1つだということだ」と同氏は付け加えた。 「しかし、戦略というより広範な問題が残っている。それがなければ、これが長期的に何かを変えるかどうかは分からない。」
- 3 時間前に公開
- 1 日前に公開
- 3 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cre4gdvlj9ro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T23:16:45+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/1ffc/live/12640900-9cdc-11f1-a291-b542ee92de7c.jpg",
    readTime: 7,
  },
  {
    id: "why-the-us-economy-is-ringing-alarm-bell-6a9857b2",
    title: "Why the US economy is ringing alarm bells",
    titleJa: "米国経済が警鐘を鳴らしている理由",
    summaryJa: "米国経済が警鐘を鳴らしている理由- 公開されました",
    bodyOriginal: `Why the US economy is ringing alarm bells
- Published
What with a 250th birthday, Taylor Swift's wedding and the football World Cup, Americans could be forgiven for taking their eye off the ball this summer.
But signs of economic trouble have been building. This week they hit the headlines when US national debt passed the $40tn mark, raising concerns both at home and abroad.
How did the we get here?
It took almost 200 years for America's national debt reach $1tn for the first time, says Maya MacGuineas, president of the Committee for a Responsible Federal Budget.
That milestone back in 1981 was treated as a wake-up call. "At that time, President [Ronald] Reagan told the nation in a televised address, 'If we as a nation needed a warning, let that be it'," she said.
"Jumping to America's 250th year, we are spending more than that just on interest payments on our debt."
Hitting the $40tn milestone was expected - driven by public spending surges under both the Donald Trump and Joe Biden administrations - but it marks another line in the sand.
Ballooning costs for social programs and other spending have outstripped revenues undermined by tax cuts. Responses to crises such as the 2008 financial crisis and the Covid pandemic have led to increased borrowing.
Add to that higher interest rates in response to recent inflation shocks and the picture begins to look grim.
How bad is it?
At the beginning of Trump's first presidential term in 2016, US national debt stood at just under $20tn. It has doubled in the decade since.
According to the Congress Joint Economic Committee, the figure is rising by about $90,000 every second, or $7.8bn a day.
"What's very different now compared to a decade ago is the level of interest rates," says Eric Swanson, professor of economics at University of California and former senior economist at the Federal Reserve.
"Long-term interest rates in the US are at multi-decade highs - part of that is concerns about inflation, but part of that is concerns about the extreme levels of US government borrowing."
The bond market is demanding higher returns with investors wary of the scale of the US's debt, but also because tech firms borrowing eye-watering sums to spend on AI are competing with the government for investors' cash.
"What happens when interest rates go up is that the funding of the deficit becomes more expensive," says economist Mohamed A. El-Erian, a professor at the Wharton School.
Interest payments on government debt are now 15% higher than the same period last year, says El-Erian. They are almost 20% of tax revenue "larger than defence", he adds.
Should I be worried?
The US is nearing its $41.1tn debt ceiling, with debt forecast to climb to about $64tn by 2036, according to the Congressional Budget Office.
But the situation is not yet critical, say economists. The US's position as the world's largest economy and the dollar being the world's reserve currency gives the US a "much longer runway to fiscally misbehave" than other countries, El-Erian says.
"We're getting to a point where it's a flashing yellow light. It's not a flashing red light," he says.
Swanson says other countries have had similar, or higher debt levels.
While US national debt is 126% compared with the size of the economy, it's lower than other G7 nations Japan and Italy.
But investor appetite in lending the US government money through buying bonds is "diminishing", Swanson warns, creating a "vicious" cycle, requiring the government to offer ever higher returns to keep investors purchasing its debt.
And higher US borrowing costs inevitably spill over, raising other countries' borrowing costs too. "What happens in the US never stays in the US," says El-Erian.
What does it mean for you?
Households will likely face higher rates for mortgages, auto loans and credit cards as a result of the current situation, with those on lower incomes hit hardest, El-Erian says.
There's also a secondary effect on consumers as higher borrowing costs for firms is often passed through to them via higher prices.
So the impact of the debt "finds its way to the pocketbooks of people one way or another," says MacGuineas.
What next?
The US's latest figures show the economy slowed in recent months, but it is still growing at fair lick.
That matters because economic growth means more tax revenue, which can pay for spending, whether that's on government programmes or interest payments. With enough growth, the debt problem is eased, points out El-Erian.
But without sufficient growth the US might have to look at other options. They could include reforming the tax system and public spending, or austerity. Debt restructuring is another option.
The strategy so far employed has been a kind of financial engineering, with the Treasury department on Wednesday stepping in to buy back government debt, boosting demand for bonds and lowering borrowing rates.
But the impact was shortlived with long-term borrowing costs bouncing back up a day later.
With the mid-term elections approaching, the White House will want to be seen to be delivering on the economy. Affordability is the top concern among voters. But the other options are no more appealing and El-Erian is doubtful the government is ready to look at other measures.
"I don't see anything happening that is going to significantly lower the deficit over the next two to three years. If you look at the political talk, it's about tax cuts."`,
    bodyJa: `米国経済が警鐘を鳴らしている理由
- 公開されました
生誕250年、テイラー・スウィフトの結婚式、そしてサッカーのワールドカップを控えているこの夏、アメリカ人がボールから目を離すのも無理はないだろう。
しかし、経済問題の兆候は高まっている。今週、米国の国債が40兆ドルの水準を超えたことがニュースの見出しとなり、国内外で懸念が高まった。
どうやって私たちはここに来たの？
責任ある連邦予算委員会の委員長マヤ・マクギニアス氏は、アメリカの国家債務が初めて1兆ドルに達するまでにほぼ200年かかった、と語る。
1981 年のこのマイルストーンは、警鐘として扱われました。 「当時、（ロナルド）レーガン大統領はテレビ演説で国民に『国家として警告が必要なら、それでいい』と語った」と彼女は語った。
「アメリカ建国250周年に目を向けると、我々は借金の利払いだけでそれ以上の支出をしている。」
ドナルド・トランプ、ジョー・バイデン両政権下での公共支出の急増により、40兆ドルの節目の達成が予想されていたが、これはまた新たな一線を画すことになる。
社会プログラムやその他の支出にかかる費用が膨れ上がり、減税によって損なわれた歳入を上回っている。 2008年の金融危機や新型コロナウイルスのパンデミックなどの危機への対応により、借入が増加した。
それに加えて、最近のインフレショックに対応した金利上昇もあり、状況は暗くなり始めています。
どれくらいひどいですか？
2016年のトランプ大統領の最初の任期の初めには、米国の国債は20兆ドル弱に達していた。それ以来10年で2倍になった。
米議会合同経済委員会によると、この数字は毎秒約9万ドル、つまり1日あたり78億ドルずつ増加しているという。
「10年前と比べて現在大きく変わっているのは、金利の水準だ」とカリフォルニア大学経済学部教授で元連邦準備制度理事会シニアエコノミストのエリック・スワンソン氏は言う。
「米国の長期金利は数十年ぶりの高水準にある。インフレ懸念もあるが、米国政府の極端な借り入れ水準に対する懸念もある。」
債券市場がより高いリターンを求めているのは、投資家が米国の債務の規模に警戒していることだけでなく、AI関連に支出するために目がくらむような金額を借りているハイテク企業が投資家の現金をめぐって政府と争っているためでもある。
「金利が上昇すると何が起こるかというと、財政赤字の資金調達がより高価になるということです」とウォートンスクールの経済学者モハメド・A・エラリアン教授は言う。
エラリアン氏によると、政府債務の利払いは現在、前年同期に比べて15％増加しているという。これらは税収のほぼ20％で「国防よりも大きい」と彼は付け加えた。
心配する必要がありますか？
議会予算局によると、米国は41.1兆ドルの債務上限に近づき、債務は2036年までに約64兆ドルに増加すると予測されている。
しかし、経済学者らによると、状況はまだ危機的ではないという。世界最大の経済大国としての米国の地位と、ドルが世界基軸通貨であることにより、米国は他国に比べて「財政上の不正行為が起きる可能性がはるかに長い」とエラリアン氏は言う。
「我々は、黄色信号の点滅という段階に達しつつある。赤信号の点滅ではない」と彼は言う。
スワンソン氏は、他の国も同様かそれ以上の債務水準にあると述べた。
米国の国債は経済規模に比べて126％だが、他のG7諸国である日本やイタリアに比べれば低い。
しかし、債券購入を通じて米国政府に資金を融資する投資家の意欲は「減退」しており、投資家が国債を購入し続けるために政府はこれまで以上に高い収益を提供する必要があるという「悪循環」を生み出している、とスワンソン氏は警告する。
そして米国の借入コストの上昇は必然的に波及し、他国の借入コストも上昇する。 「米国で起こったことは、決して米国内にとどまることはありません」とエラリアンは言う。
それはあなたにとって何を意味しますか？
現在の状況により、家計は住宅ローン、自動車ローン、クレジットカードの金利上昇に直面する可能性が高く、最も大きな打撃を受けるのは低所得世帯だ、とエラリアン氏は言う。
企業の借入コストの上昇は、価格の上昇を通じて消費者に転嫁されることが多いため、消費者にも二次的な影響があります。
そのため、借金の影響は「何らかの形で人々の懐に影響を及ぼしている」とマクギニアス氏は言う。
次は何でしょうか？
米国の最新の統計は、ここ数カ月で経済が減速したことを示しているが、依然としてかなりの勢いで成長している。
経済成長は税収の増加を意味し、政府のプログラムや利払いなどの支出を賄うことができるため、これは重要だ。十分な成長があれば、債務問題は緩和される、とエラリアン氏は指摘する。
しかし、十分な成長がなければ、米国は他の選択肢を検討しなければならないかもしれない。それには税制や公共支出の改革、あるいは緊縮財政が含まれる可能性がある。債務再編も選択肢の一つです。
これまで採用されてきた戦略は一種の金融工学であり、水曜日に財務省が国債買い戻しに介入し、債券需要を高め、借入金利を引き下げた。
しかし、その影響は長くは続かず、翌日には長期借入コストが回復した。
中間選挙が近づく中、ホワイトハウスは経済に貢献していると思われることを望んでいるだろう。有権者の最大の関心事は手頃な価格だ。しかし、他の選択肢はもはや魅力的ではなく、エラリアン氏は政府が他の措置を検討する用意があるか疑っている。
「今後２、３年で財政赤字を大幅に削減するような出来事は起きていないと思う。政治的な話題を見てみると、それは減税に関するものだ。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c9d8z72nn02o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T23:15:15+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6d5b/live/f6865980-9cf0-11f1-a0c7-a733f826760a.jpg",
    readTime: 6,
  },
  {
    id: "how-landscape-gardening-is-being-electri-9d803131",
    title: "How landscape gardening is being electrified",
    titleJa: "造園の電動化はどのように進んでいるのか",
    summaryJa: "造園の電動化はどのように進んでいるのか- 公開されました",
    bodyOriginal: `How landscape gardening is being electrified
- Published
Part of the soundtrack to a day in southern California is the drone of petrol-powered gardening equipment.
Noise is one of the main reasons that cities around the US, external are banning petrol landscaping tools or encouraging electric alternatives.
These alternatives have the additional benefits of reducing carbon emissions, vibrations and the exposure of landscapers to pollution.
In addition they can mean longer working hours, as they can be used at times when residents demand quiet.
Today, I'm taking part in training run by the American Green Zone Alliance (AGZA), an organisation supporting the transition towards electric landscaping equipment.
To my surprise, the electric backpack leaf blower I strap on is not much heavier than my normal rucksack. Using the blower to herd balls around the park feels fairly intuitive, though naturally I'm much clumsier and slower than the pro landscapers.
As for noise, there's still a buzz, but the sound is higher-pitched and not quite so loud as the familiar petrol-powered machines.
The move to electric power is attracting new companies to the market for gardening kit.
US aerospace start-up Whisper Aero is one of those firms. Its main business is electric propulsion systems for aircraft.
But in 2022, after the Covid-19 pandemic made many people more sensitive to noise, and following a couple of years of research and development, the company realised that its aerospace-grade fans would work well in leaf blowers.
"Our technology is cleaner, quieter and more efficient than other air-moving technologies that exist today," according to Andrew Terajewicz, Whisper Aero's director of air management. "And the leaf blower is the perfect mix of this."
The battery on Whisper Aero's blower lasts up to 50 minutes at full power.
The company has had to scale up its manufacturing volume in its expansion to consumer technology.
Online pre-orders of Whisper Aero's handheld leaf blower started this year. It's priced at the high-end of electric leaf blowers, which are often more expensive than traditional petrol versions.
But for that you get a machine which is less likely to disturb the peace.
"It is so ultra quiet yet powerful, that the brain has a hard time understanding what's happening," says Dan Mabe, the former landscaper who founded AGZA.
Whisper Aero aims to further develop its products, including a backpack leaf blower that would be better suited to professional landscapers.
Even with innovation like that, petrol-powered machines are unlikely to disappear anytime soon, particularly for professional landscapers.
For a start, petrol machines are much more powerful, which makes for quicker work, so less time is spent lugging around heavy equipment.
Terajewicz says that heavy-duty petrol backpack blowers can reach a maximum blowing force of about 50 newtons.
The handheld Whisper Aero blower typically runs at about half that, though it can go higher.
Another big issue is runtime. Professional gardeners like to use their blowers at full throttle.
"For us, it's a little bit hard to use electric," explains Carlos Camarena, a supervisor for a California landscaping company.
Camarena's company uses electric tools where they're required to, in cities with ordinances banning petrol tools. But when they have a choice, they stick to petrol.
His company typically uses batteries that last for about 30 minutes. A crew has six batteries charging at any given time; each takes about 45 minutes to reach a full charge.
Then there's the considerable upfront cost of going electric. One landscaper estimates that it would cost his business around $10,000 (£7,540) to transition all their equipment.
The subsidies and rebates offered by some local governments may not be enough to offset the cost of the switch.
The change would be even harder for landscapers who work as sole proprietors, with a single vehicle and limited space for charging and storing equipment.
Added to that is the weight of tools with multiple batteries, and the cost of accessories to hold them all.
Nevertheless the biggest makers of power tools are investing in electric.
Stihl, a power tool manufacturer headquartered in Germany, aims for battery-powered equipment to make up 35% of its sales by next year, and 80% by 2035.
It's on track to meet the 2027 goal in Europe, though sales in the US have been slower.
To help reach its targets, the company opened its first plant solely manufacturing batteries and tools, in Romania in 2025.
"We like to say that we are dual-technology leaders," says Paul Hicks, senior marketing and product manager at Stihl GB.
"So we are being very open with our customers if in some cases a petrol tool may be a better solution for them… But in the large majority of cases, battery-power tools pay off fairly swiftly because of the cost of fuel."
In May, Stihl announced a new battery system that uses high-performance batteries.
These batteries use a relatively new, more efficient design for lithium battery cells, known as tabless cells.
Tabless cells have 60% more peak power than standard cells, according to Hicks. This means that the batteries charge faster, and landscapers can take fewer batteries out to sites.
The batteries are also relatively lightweight.
Mabe believes that overall, for gardeners embracing long-lasting electric equipment, "There's big rewards if they can make it work."
Back in southern California, landscaper Camarena sees the benefits of electric tools. "We don't contaminate the air," he says.
"When we use the gas blower, some people get mad. They are reading a book or something."
More Technology of Business
- Published12 June
- Published5 June
- Published9 June`,
    bodyJa: `造園の電動化はどのように進んでいるのか
- 公開されました
南カリフォルニアの 1 日のサウンドトラックの一部は、ガソリンを動力とするガーデニング機器のドローンです。
騒音は、全米各地の都市や国外でガソリンの造園道具を禁止したり、電気の代替品を奨励したりする主な理由の 1 つです。
これらの代替案には、炭素排出量、振動、造園業者の汚染への曝露を軽減するという追加の利点もあります。
さらに、住民が静かさを要求するときに使用できるため、労働時間が長くなる可能性があります。
今日、私は電動造園機器への移行を支援する組織であるAmerican Green Zone Alliance（AGZA）が実施するトレーニングに参加しています。
驚いたことに、私が背負っている電動バックパックリーフブロワーは、通常のリュックサックよりもそれほど重くありません。送風機を使って公園の周りでボールを集めるのはかなり直感的ですが、当然のことながら、私はプロの造園家よりもはるかに不器用で遅いです。
騒音に関しては、まだブーンという音がしますが、その音は高音で、おなじみのガソリンエンジンのマシンほど大きくはありません。
電力への移行により、園芸キット市場に新たな企業が参入しつつある。
米国の航空宇宙新興企業ウィスパー・エアロもそうした企業の1つだ。主な事業は航空機用電気推進システムです。
しかし、2022 年、新型コロナウイルス感染症のパンデミックにより多くの人が騒音に敏感になったことを受け、数年間の研究開発を経て、同社は航空宇宙グレードのファンがリーフブロワーでうまく機能することに気づきました。
「当社の技術は、現在存在する他の空気移動技術よりもクリーンで、より静かで、より効率的です」と Whisper Aero の空気管理ディレクターである Andrew Terajewicz 氏は述べています。 「そしてリーフブロワーはこれを完璧に組み合わせたものです。」
Whisper Aero のブロワーのバッテリーは、フルパワーで最大 50 分間持続します。
同社は消費者向けテクノロジーへの拡大に伴い、製造量を拡大する必要に迫られている。
Whisper Aero の手持ち式リーフブロワーのオンライン予約注文が今年開始されました。価格は電動リーフブロワーのハイエンドに相当し、従来のガソリンバージョンよりも高価であることがよくあります。
しかし、そのために平和を乱す可能性が低い機械を手に入れることができます。
AGZA を設立した元造園業者のダン・メイブ氏は、「非常に静かでありながらパワフルなので、脳は何が起こっているのかを理解するのが難しい」と語る。
Whisper Aero は、プロの造園業者により適したバックパック型リーフブロワーなど、製品のさらなる開発を目指しています。
このような技術革新があっても、特にプロの造園業者にとって、ガソリン駆動の機械がすぐに消えることはありません。
まず、ガソリン機械ははるかに強力であるため、作業が迅速になり、重機を持ち運ぶのに費やす時間が短縮されます。
Terajewicz氏によると、大型ガソリンバックパックブロワーは最大吹き出し力が約50ニュートンに達するという。
ハンドヘルドの Whisper Aero ブロワーは通常、その約半分の速度で動作しますが、それよりも高くなる場合もあります。
もう 1 つの大きな問題は実行時間です。プロの庭師はブロワーをフルスロットルで使用することを好みます。
「私たちにとって、電気を使うのは少し難しいんです」とカリフォルニアの造園会社の監督者であるカルロス・カマレナ氏は説明する。
カマレナさんの会社は、ガソリン工具を禁止する条例のある都市で、必要に応じて電動工具を使用している。しかし、選択肢がある場合、彼らはガソリンに固執します。
彼の会社では通常、約 30 分間持続するバッテリーを使用しています。乗組員は常に 6 つのバッテリーを充電しています。フル充電に達するまでにそれぞれ約 45 分かかります。
さらに、電気を導入するにはかなりの初期費用がかかります。ある造園業者は、すべての設備を移行するには約 10,000 ドル (7,540 ポンド) の費用がかかると見積もっています。
一部の地方自治体が提供する補助金やリベートでは、切り替えのコストを相殺するには十分ではない可能性があります。
個人事業主として働く造園業者にとって、この変化はさらに困難となるだろう。車両は 1 台で、機器の充電や保管のためのスペースも限られているからだ。
これに加えて、複数のバッテリーを搭載したツールの重量と、それらをすべて保持するためのアクセサリのコストがかかります。
それにもかかわらず、電動工具の最大手メーカーは電動化に投資している。
ドイツに本社を置く電動工具メーカーStihlは、来年までに売上高の35％をバッテリー駆動機器が占め、2035年までに80％を占めることを目指している。
欧州では2027年の目標達成に向けて順調に進んでいるが、米国での販売は鈍化している。
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cpq3w3v19veo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T23:12:38+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/9a26/live/a80a27a0-754f-11f1-a627-714adb4eed6e.jpg",
    readTime: 6,
  },
  {
    id: "millennials-are-struggling-to-buy-a-home-3daed881",
    title: "Millennials are struggling to buy a home - but is it actually getting easier?",
    titleJa: "ミレニアル世代は住宅購入に苦労していますが、実際には住宅購入は容易になりつつあるのでしょうか?",
    summaryJa: "ミレニアル世代は住宅購入に苦労していますが、実際には住宅購入は容易になりつつあるのでしょうか?- 公開されました",
    bodyOriginal: `Millennials are struggling to buy a home - but is it actually getting easier?
- Published
Leaving education, getting a job, buying a home and perhaps starting a family: the path previous generations followed may seem a distant dream to many now.
But is it getting a bit easier - at least when it comes to getting on the housing ladder?
Today's prospective first-time buyers may well feel hard done by; they are still worse off than recent generations.
If you were born in the UK in the mid-1990s you've about a 25% chance of owning your own home, as this chart shows.
Twenty-somethings in the 1990s were almost twice as likely to be on the housing ladder, the previous generation even more so.
But before looking at the current picture, what's behind the longer term shift?
One issue is that property prices have outpaced incomes across many decades.
In the chart below, housing economist Paul Cheshire puts it starkly, comparing the rise in egg prices with house prices over the past 71 years.
Changes in the mortgage markets have contributed, but ultimately it's about a lack of housebuilding.
The government previously estimated that England alone needs another 300,000 dwellings per year to keep up with population change and our preference for living in smaller households.
But only 208,000 were added last year. We've not built close to 300,000 new homes in a year for at least three decades.
There are many reasons why, but inflation has been key - from the price of land, to builders' wages and bricks.
Our analysis shows that the cost of raw materials like timber, steel, plasterboard, concrete and insulation rose in line with general inflation from the 1990s until the Covid-19 pandemic, when they became harder to source.
That was compounded by the impact of the war in Ukraine, which drove up both the cost of energy - 15% in a single year - for making these materials and for use in construction itself. The war in Iran has pushed prices up further.
Even before the pandemic, more than one in five construction firms struggled with a lack of skilled staff, exacerbated by Brexit.
As a guide, a home that cost £150,000 to build in 2015 may cost £230,000 now - analysts say those costs could rise by another 15% in the next five years.
And that's before contending with planning. Strict regulations protect the environment and uphold safety standards but can add costs.
The rising - and increasingly unpredictable - cost of building, coupled with uncertain demand has put some housebuilders off.
As property prices have increased, the deposit needed to buy a house has reached tens of thousands.
The amount to get a 10% deposit varies sharply across the country.
Saving for a deposit becomes particularly hard if you're paying rent too. Private rents typically soak up a third of prospective buyers' incomes.
No surprise a larger number of young people are opting to live at home and pay far lower housing costs so they can save more.
But things may be turning a corner.
House prices have typically risen more slowly than wages in the last few years, making it easier to save - and some lenders will take a smaller deposit. Plus, lenders tend to be more willing to offer larger loans with longer repayment times.
And the slower growth of property prices and lower rates than a few years ago mean mortgage payments, relative to wages, are moving back towards the long-term average.
But ultimately, to make it as easy to get on the ladder as it was for previous generations, we need more homes.
There are moves afoot: Sir Keir Starmer's government introduced plans to streamline planning processes that can be chaotic and slow.
Reforms will also allow more homes to be built on the green belt - not something everyone agrees with.
But to really get things moving, we need to incentivise builders to commit with more confidence to building.
And whatever approach the government takes, the results will take years to come through.`,
    bodyJa: `ミレニアル世代は住宅購入に苦労していますが、実際には住宅購入は容易になりつつあるのでしょうか?
- 公開されました
教育をやめ、仕事に就き、家を購入し、おそらくは家族を築くなど、前の世代がたどった道は、今では多くの人にとって遠い夢のように見えるかもしれません。
しかし、少なくとも住居のはしごに乗るときは、少しは楽になったでしょうか？
今日、初めて購入を検討している人は、次のような理由で大変だと感じるかもしれません。彼らは最近の世代よりもまだ貧しい状況にあります。
このグラフが示すように、1990 年代半ばにイギリスで生まれた場合、自分の家を所有できる確率は約 25% です。
1990年代の20代は住宅のはしごに上がる確率がほぼ2倍で、前の世代はさらに高かった。
しかし、現在の状況を見る前に、長期的な変化の背後にあるものは何でしょうか?
問題の1つは、何十年にもわたって不動産価格が収入を上回っていることだ。
以下のグラフでは、住宅経済学者のポール・チェシャーが、過去71年間の卵価格の上昇と住宅価格を比較して、それを率直に述べている。
住宅ローン市場の変化も寄与しているが、最終的には住宅建設の不足が原因だ。
政府は以前、人口の変化と少人数の世帯での居住を求める国民の好みに対応するには、イングランドだけでも年間さらに 30 万戸の住宅が必要であると推定しました。
しかし、昨年増加したのはわずか20万8,000人だった。私たちは少なくとも30年間、年間30万戸近くの新しい住宅を建てていません。
理由はたくさんありますが、土地の価格から建設業者の賃金やレンガに至るまで、インフレが鍵となっています。
私たちの分析によると、木材、鉄鋼、石膏ボード、コンクリート、断熱材などの原材料の価格は、1990年代から新型コロナウイルス感染症のパンデミックまでの一般的なインフレに伴って上昇し、調達が困難になったことが示されています。
ウクライナ戦争の影響により、これらの材料の製造と建設自体に使用するエネルギーのコストが 1 年間で 15% 上昇したため、この状況はさらに悪化しました。イラン戦争により価格はさらに上昇した。
パンデミック以前でさえ、建設会社の5社に1社以上が熟練スタッフの不足に悩まされており、EU離脱によりさらに悪化した。
目安として、2015 年に建設に 15 万ポンドかかった住宅の価格は現在 23 万ポンドになる可能性があります。アナリストらは、これらのコストは今後 5 年間でさらに 15% 上昇する可能性があると述べています。
それは計画と戦う前の話です。厳格な規制は環境を保護し、安全基準を維持しますが、コストが増加する可能性があります。
建設コストの上昇とますます予測不可能さが不確実な需要と相まって、一部の住宅建設業者を敬遠させている。
不動産価格の上昇に伴い、住宅を購入するために必要な頭金は数万ドルに達しています。
10% のデポジットを受け取る金額は国によって大きく異なります。
家賃も払っている場合、頭金を貯めるのは特に難しくなります。民間賃貸料は通常、購入希望者の収入の 3 分の 1 を吸い取ってしまいます。
より多くの若者が、より多くの貯蓄をするために、自宅に住み、はるかに低い住宅費を支払うことを選択しているのも不思議ではありません。
しかし、事態は曲がり角を迎えているかもしれない。
ここ数年、住宅価格は通常、賃金よりもゆっくりと上昇しているため、貯蓄が容易になっており、一部の貸し手は頭金を少額で受け取ることになる。さらに、貸し手は返済期間が長くても大規模なローンを提供する傾向があります。
そして、数年前に比べて不動産価格の伸びが鈍化し、金利が低下していることは、賃金に比べて住宅ローンの支払額が長期平均に近づきつつあることを意味している。
しかし最終的には、前の世代と同じように簡単にはしごに乗るためには、より多くの家が必要です。
キーア・スターマー卿の政府は、混沌として時間のかかる計画プロセスを合理化する計画を導入しました。
改革により、緑地帯にさらに多くの住宅を建てることも可能になるが、誰もが同意するものではない。
しかし、本当に物事を進めるためには、建設業者がより自信を持って建設に取り組むよう奨励する必要があります。
そして政府がどのようなアプローチをとろうとも、結果が出るまでには何年もかかるだろう。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgewlld498xo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T23:10:58+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a4a7/live/1acdc570-9cb6-11f1-b109-879e35c24276.png",
    readTime: 5,
  },
  {
    id: "stifling-heat-and-broken-toilets-tui-riv-a3d005a4",
    title: "Stifling heat and broken toilets: TUI River Cruise passengers tell of their holiday hell",
    titleJa: "息苦しい暑さと壊れたトイレ：TUI リバー クルーズの乗客が語る地獄の休日",
    summaryJa: "息苦しい暑さと壊れたトイレ：TUI リバー クルーズの乗客が語る地獄の休日- 公開されました",
    bodyOriginal: `Stifling heat and broken toilets: TUI River Cruise passengers tell of their holiday hell
- Published
Dozens of people have accused TUI River Cruises of operating vessels with faulty facilities including persistently broken air conditioning, after they spent thousands of pounds on holidays.
Earlier this year passengers on the Skyla, a ship operated by TUI, contacted BBC Your Voice to say they had been stranded in Budapest during a heatwave with little to no air conditioning.
Following that report more people got in touch to say they faced similar problems on both the Skyla and its sister vessel, the Isla. They criticised TUI's customer service and said the refunds offered were inadequate.
TUI apologised to customers where trips "fell short of the standards we aim to deliver".
A spokesperson for TUI, said: "We understand the disappointment and frustration caused to affected customers."
Passengers described stifling conditions as well as problems with plumbing after paying thousands of pounds for European cruises, including on the Danube River.
Andy Peach and his wife booked a seven-day trip on the Skyla in June, travelling through Budapest, Vienna and Linz.
It turned out to be "the worst TUI holiday we've ever been on", he said.
Instead of air conditioning, Peach said there were "big blowers" on board, expelling hot air.
"One was in the middle of the corridor, blocking the exit," he said. "It didn't seem to cool the place down."
Temperatures onboard climbed as the holiday went on leaving him "exhausted", he said. By the end of the week, Peach said the air conditioning in cabins had broken too.
On the second-to-last day passengers were transferred to hotels, which Peach said were "really basic".
He and his wife had paid nearly £4,000 for the holiday but they were offered only £300 as a refund and given 72-hours to accept it.
He said: "TUI know there's problems on these boats, but continue to sell them to people as a full luxury cruise."
During the time Peach was on the Skyla, Joan Craven came across complaints on social media.
She was due to take the ship's next sailing from Budapest a few days later and was worried.
TUI's customer services assured her by email that the air conditioning on board was working. When she arrived, however, a holiday rep told her it was not. Craven told the BBC she felt misled.
Some people had described issues with air conditioning as well as problems with the water supply on the same vessel in May.
Meanwhile, complaints about the Isla go back even further.
'A tropical house at a zoo'
Wendy Charnley and her husband Rob had "pushed the boat out" to celebrate his retirement by booking a cruise on the Isla in April 2025 departing from Amsterdam.
It was like "being in a tropical house at a zoo" Charnley said, with no sign of air conditioning.
"Some areas were really, really hot." she said. "There wasn't really anywhere that you could go that you could cool down."
A couple of months later, Kevin Darvill boarded the ship in Frankfurt.
He immediately noticed the toilet didn't work in the reception area. Portable fans and air conditioning units were also visible.
Darvill said the ship became "really hot" with "no respite".
"It was intolerable because there was literally no air circulation," he said. "The worst places were the restaurants."
He struggled to sleep. Meanwhile, his shower alternated between freezing cold and "scalding hot".
He said passengers were initially offered a 15% refund due to the air conditioning problems, which was increased to 40% when the cruise was cut short on the penultimate day.
But he thinks the holiday should not have gone ahead in the first place.
"Had I known that the air conditioning wasn't working, having gone on river cruises before, I wouldn't have gone," he said.
Problems with the Isla have continued this year.
John Welsh, who boarded in June, said some toilets were out-of-order and also reported issues with air conditioning.
"The whole ship was a sweat box," he said, with some passengers in cabins that had no windows resorting to sleeping on the ship's roof.
Welsh said staff were "soaking to the skin with sweat working in the restaurant", and he also needed to change his sweat-soaked clothes after eating there.
He said he felt "fobbed off" when he complained to the cruise director. He accepted TUI's offer of a £140 per person refund for the problems with the air conditioning but said he would never travel with the company again.
'Indefensible'
By July, low river levels due to the heatwave were severely affecting European cruises.
Tony Harper was informed a few days before his trip began on 20 July there would be some coach travel in place of sailing.
But issues with the ship itself also stood out.
"The common area smelt of sewage, there was water dripping through the ceiling and there were public toilets out of action for the whole voyage," he said.
And there were portable air conditioning units onboard, which he said were not effective.
Harper said: "You can't hold it against them for the low river, that's just nature.
"But it was the way they dealt with that. It was their communication and poor maintenance of the ships, and you can't put it down to anything else other than that.
"It's indefensible, really."
TUI River Cruises said it had experienced "unexpected technical issues affecting air conditioning systems" as well as other challenges caused by low water levels on the Danube.
It said extreme heat across parts of Europe had put systems under pressure and extensive repairs and maintenance work had been undertaken, including temporary measures.
The company added that it was investing in its air conditioning systems across its European river cruise fleet this winter, including significant upgrades.`,
    bodyJa: `息苦しい暑さと壊れたトイレ：TUI リバー クルーズの乗客が語る地獄の休日
- 公開されました
休日に数千ポンドを費やしたTUIリバークルーズは、エアコンが壊れ続けるなど欠陥のある設備で船を運航しているとして、数十人が非難している。
今年初め、TUIが運航するスカイラ号の乗客がBBC Your Voiceに連絡し、熱波で空調がほとんどない中、ブダペストで足止めされていると話した。
この報告を受けて、スカイラ号とその姉妹船であるアイラ号の両方で同様の問題に直面しているとの連絡がさらに多く寄せられました。彼らはTUIの顧客サービスを批判し、提供された返金は不十分だと述べた。
TUIは、旅行が「当社が提供しようとしている基準を満たしていない」顧客に謝罪した。
TUIの広報担当者は「影響を受けた顧客に失望と不満を与えていることは理解している」と述べた。
乗客らは、ドナウ川を含むヨーロッパのクルーズに数千ポンドを支払った後の息苦しい状況や配管の問題を語った。
アンディ・ピーチと妻は6月にスカイラでブダペスト、ウィーン、リンツを巡る7日間の旅行を予約した。
それは「これまでで最悪のTUI休暇」になった、と彼は語った。
ピーチ社は、機内にはエアコンの代わりに熱気を排出する「大型送風機」があったと述べた。
「1人は廊下の真ん中にいて、出口を塞いでいた」と彼は語った。 「場が冷める様子はなかった。」
休暇が続くにつれて船内の気温が上昇し、「疲れ果てた」と彼は語った。ピーチ社は、週末までに客室のエアコンも故障したと述べた。
最後から2日目には乗客はホテルに移送されたが、ピーチ社は「本当に基本的なものだった」と述べた。
彼と彼の妻は休暇のために4,000ポンド近くを支払ったが、払い戻しとして提示されたのは300ポンドのみで、それを受け入れるまで72時間与えられた。
同氏は、「TUIはこれらの船に問題があることを承知しているが、完全な豪華クルーズとして人々に販売し続けている」と述べた。
ピーチがスカイラに乗っていた間、ジョーン・クレイブンさんはソーシャルメディアで苦情を目にした。
彼女は数日後にブダペストから次の船に乗る予定だったが、心配していた。
TUI の顧客サービスは、船内の空調が作動していることを電子メールで彼女に保証しました。しかし、彼女が到着すると、ホリデー担当者はそうではないと彼女に言いました。クレイブンさんはBBCに対し、誤解されていると感じたと語った。
5月には同じ船で給水の問題だけでなく空調の問題も報告した人もいた。
一方、イスラに関する苦情はさらに遡ります。
「動物園のトロピカルハウス」
ウェンディ・チャーンリーさんと夫のロブさんは、2025年4月にアムステルダム発のイスラ島クルーズを予約し、引退を祝うために「船を押し出して」いた。
チャーンリー氏は、エアコンの気配もなく「動物園のトロピカルハウスにいるような気分だった」と語った。
「一部の地域は本当にとても暑かったです。」彼女は言いました。 「クールダウンできる場所は本当にどこにもありませんでした。」
数か月後、ケビン・ダーヴィルはフランクフルトで船に乗り込みました。
彼はすぐに、受付エリアのトイレが機能しないことに気づきました。携帯扇風機やエアコンも展示されていました。
ダービル氏は、船内は「非常に熱く」なり、「休む間もない」と語った。
「文字通り空気の循環がなかったため、耐えられなかった」と彼は語った。 「最悪の場所はレストランでした。」
彼はなかなか眠れなかった。その間、彼のシャワーは凍てつくような冷たさと「灼熱の熱さ」を交互に繰り返した。
同氏によると、乗客には当初、空調設備の問題を理由に15％の払い戻しが提供されたが、最後から2番目の日にクルーズが中止されたため、払い戻し額は40％に増額されたという。
しかし彼は、そもそも休暇を前倒しすべきではなかったと考えている。
「以前にリバークルーズに行ったことがあるので、エアコンが効かないと知っていたら、行かなかったでしょう」と彼は言う。
イスラ島の問題は今年も続いている。
6月に乗船したジョン・ウェルシュさんは、一部のトイレが故障しており、空調にも問題があると報告した。
「船全体が汗だくのような状態だった」と同氏は述べ、窓のない船室の乗客の中には船の屋根で寝る人もいたという。
ウェールズさんは、スタッフが「レストランで働いていると汗で皮膚がびしょ濡れ」になっており、食事後には汗で濡れた服を着替える必要もあったと語った。
クルーズディレクターに苦情を言ったとき、彼は「がっかりした」と感じたと語った。同氏は、空調の問題に対する一人当たり140ポンドの返金というTUIの申し出を受け入れたが、同社とは二度と旅行しないと述べた。
「弁護できない」
7月までに、熱波による川の水位低下はヨーロッパのクルーズに深刻な影響を及ぼした。
トニー・ハーパーは、7月20日に旅行が始まる数日前に、セーリングの代わりにバスでの移動が予定されていると知らされた。
しかし、船自体の問題も目立った。
「共用エリアは下水の臭いがし、天井からは水が滴り落ち、航海中ずっと公衆トイレは使用できなかった」と同氏は語った。
また、船内には移動式の空調装置があったが、効果がなかったという。
ハーパーさんは「川が低いからといって彼らに抵抗することはできない。それが自然だ。
「しかし、それが彼らの対処方法だった。原因は彼らのコミュニケーションと船の整備不良であり、それ以外の原因にすることはできません。
「それは本当に、弁護の余地のないことです。」
TUIリバークルーズは、「空調システムに影響を及ぼす予期せぬ技術的問題」や、ドナウ川の水位低下によって引き起こされるその他の問題を経験したと述べた。
同報告書は、欧州各地で猛暑によりシステムに圧力がかかり、一時的な措置を含む大規模な修理・保守作業が行われたと述べた。
同社は、この冬、ヨーロッパのリバークルーズ船団全体の空調システムに大幅なアップグレードを含めて投資していると付け加えた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cy07exrz5lpo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T22:59:35+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/48ad/live/65eaf140-9cac-11f1-b366-155f83b9d1f8.jpg",
    readTime: 6,
  },
  {
    id: "warsh-faces-fed-independence-test-as-bes-60b14da0",
    title: "Warsh faces Fed independence test as Bessent moves in on central bank's turf",
    titleJa: "ベッセント氏が中央銀行の縄張りに乗り出す中、ウォーシュ氏はFRBの独立性テストに直面している",
    summaryJa: "長期国債利回りを抑制しようとするベッセント氏の取り組みにより、ウォーシュ氏は債券とバランスシートに関してFRBがどこまで協調すべきなのか明確にするよう迫られる可能性がある。",
    bodyOriginal: `If Treasury Secretary Scott Bessent truly wants to bring the full force of the federal government to bear on what he sees as a misbehaving bond market, he can't go it alone. A sustained effort to bring down Treasury yields would eventually require coordination with Bessent's longtime friend, now at the Federal Reserve, Chairman Kevin Warsh.
Bessent's efforts to influence the bond market will add to the immense scrutiny on Warsh to clarify where he stands on the Fed's independence and on its attitude about the vast pool of U.S. government debt.
The Fed has historically only intervened in the bond market to affect yields in periods of severe economic weakness or clear emergencies. The concerns Bessent has expressed so far fall below that threshold, and there is no sign the central bank intends to get involved now. But there is no definitive line between where Treasury's responsibilities end and the Fed's begin, and Warsh has said repeatedly that he believes the Fed ought to hand more power to the Treasury over sensitive matters involving the Fed's balance sheet.
The Treasury Department on Wednesday announced it would at least double the maximum size of its planned long-dated treasury buybacks, from $2 billion to at least $4 billion per operation. That would need to be offset by shorter-maturity debt.
Bessent suggested he might have more plans in store. "We have a big toolkit, so we'll see," Bessent said on CNBC Thursday.
"Part of it is signaling here and to show that we believe that the yields don't reflect the underlying fundamentals," Bessent said. Yields on the 10-year Treasury note dropped on Wednesday, but had already unwound most of those gains on Thursday.
"There's more firepower in terms of how you manage the yield curve sitting at the Federal Reserve," Rick Rieder, chief investment officer of global fixed income, told CNBC Wednesday.
"Going to Jackson Hole, that's going to be interesting to see how they address that," Rieder said.
Warsh was already facing questions about his relationship to the Treasury market going into the Jackson Hole Economic Policy Symposium, the annual late-August gathering of central bankers in the Wyoming mountains.
Warsh's remarks after the FOMC's July meeting gave some in the markets the impression that he welcomed a rise in long-term bond yields.
Bond traders raised yields further to account for that uncertainty, said Loretta Mester, former president of the Cleveland Fed.
"I think part of what's happening is we don't have very much clarity yet on what Kevin Warsh's plans are," Mester said in an interview on CNBC. "We don't even have clarity on their reaction function."
Warsh in July said he was concerned about inflation, but didn't directly answer reporters' questions about what it would take for him to raise interest rates to address it.
Fed independence
Warsh has also been vague on the precise limits of the Fed's authority over certain aspects of the financial system.
"Fed independence is at its peak in the conduct of monetary policy," Warsh said at his Senate confirmation hearing in April. That nuanced view implies that some aspects of the Fed's operations aren't fully independent. Warsh carved out bank supervision as an example of non-independent policy, but he hasn't fully specified exactly what is and isn't included.
Warsh has separately said he wants the Fed to rewrite its relationship with the Treasury. He proposed in 2025 to update the 1951 Treasury-Fed Accord, which established the modern basis for the division of responsibilities between the two agencies — and secured the Fed's political independence. As part of that revised accord, Warsh wanted to give the Treasury more authority over any major adjustment to the Fed's vast balance sheet.
"The Treasury secretary would need to find the proposed change in Fed holdings acceptable, given that it is partially fiscal policy in disguise," Warsh said in 2025.
How the Fed thinks about the $6.7 trillion in financial assets currently on its balance sheet could make or break Bessent's plans. Warsh's existing plans would seem to cut against Bessent's hopes to tamp down yields. Warsh wants the Fed to reduce its overall holdings and shift them toward short-term debt, which would likely push up the yield on longer-term Treasuries — the opposite of what Bessent wants to achieve.
But the Fed is divided even on that question. Recently released minutes from the Federal Open Market Committee's July meeting showed that the Fed deferred questions about its balance sheet until a task force Warsh has assigned to report on that issue comes back. That will be late this year or early next.
The Treasury and Fed have in practice historically communicated with each other on major changes in the balance sheet. Bessent on Thursday in an interview on CNBC suggested that would continue.
"I think that the Treasury and the Fed would work together if there was any change in the balance sheet, and we would adjust to any kind of runoff that they're doing," Bessent said.
Neither the Fed nor the Treasury Department responded to emailed questions about whether Bessent's comment implied he and Warsh had begun to coordinate.`,
    bodyJa: `スコット・ベッセント財務長官が、不正行為を行っていると見なす債券市場に連邦政府の総力をあげて対処したいと本当に望んでいるのであれば、彼一人で行動することはできない。国債利回りを引き下げるための持続的な取り組みには、最終的にはベッセント氏の長年の友人で現在は連邦準備制度理事会に勤務するケビン・ウォーシュ議長との調整が必要となるだろう。
債券市場に影響を与えようとするベッセント氏の取り組みは、FRBの独立性と巨額の米政府債務に対する同氏の立場を明らかにするため、ウォーシュ氏に対する厳しい監視をさらに強めることになるだろう。
FRBはこれまで、深刻な景気低迷時や明らかな緊急事態の際にのみ、利回りに影響を与える目的で債券市場に介入してきた。ベッセント氏がこれまでに表明した懸念はその基準を下回っており、中銀が現時点で関与するつもりの兆候はない。しかし、財務省の責任がどこで終わり、FRBの責任が始まるのかの間に明確な境界線はなく、ウォーシュ氏はこれまで、FRBのバランスシートに関わるデリケートな問題について、FRBは財務省により多くの権限を委譲すべきだとの考えを繰り返し述べてきた。
財務省は水曜日、計画されている長期にわたる国債買い取りの最大規模を、オペ当たりの20億ドルから少なくとも40億ドルに少なくとも2倍にすると発表した。この分は満期の短い債務で相殺する必要がある。
ベッセント氏は、さらなる計画があるかもしれないと示唆した。 「我々には大きなツールキットがあるので、様子を見てみよう」とベッセント氏は木曜CNBCで語った。
ベッセント氏は「その一部はここでのシグナルであり、利回りが基礎的なファンダメンタルズを反映していないと我々が信じていることを示すためだ」と述べた。 １０年米国債利回りは水曜日に低下したが、木曜日にはすでに上昇分の大部分が解消されていた。
グローバル債券部門の最高投資責任者であるリック・リーダー氏は水曜日、CNBCに対し、「連邦準備制度理事会がイールドカーブを管理する方法に関して、より強力な力がある」と語った。
「ジャクソンホールに行くことになるが、彼らがそれにどのように対処するかを見るのは興味深いことになるだろう」とリーダー氏は語った。
ウォーシュ氏は、毎年8月下旬にワイオミング山脈で中央銀行関係者が集まるジャクソンホール経済政策シンポジウムに向けて、すでに米国債市場との関係についての疑問に直面していた。
７月のＦＯＭＣ後のウォーシュ総裁の発言は、市場の一部に同氏が長期債利回りの上昇を歓迎しているという印象を与えた。
クリーブランド連銀の元総裁ロレッタ・メスター氏は、債券トレーダーらはこうした不確実性を考慮して利回りをさらに引き上げたと述べた。
メスター氏はCNBCのインタビューで、「ケビン・ウォーシュ氏の計画が何なのかまだあまり明確になっていないことが、起こっていることの一部だと思う」と語った。 「それらの反応機能さえ明確になっていません。」
ウォーシュ総裁は７月、インフレを懸念していると述べたが、それに対処するために利上げに何が必要かという記者の質問には直接答えなかった。
FRBの独立性
ウォーシュ氏はまた、金融システムの特定の側面に対するFRBの権限の正確な限界についても曖昧だった。
ウォーシュ氏は4月の上院承認公聴会で「金融政策運営においてFRBの独立性は最高潮に達している」と述べた。この微妙な見方は、FRBの運営の一部の側面が完全に独立していないことを示唆している。ウォーシュ氏は非独立政策の一例として銀行監督を取り上げたが、何が含まれ、何が含まれないのかについては完全には明らかにしていない。
ウォーシュ氏はこれとは別に、FRBに財務省との関係を書き直すことを望んでいると述べた。同氏は2025年に1951年の財務・連銀合意を更新することを提案し、これにより両機関間の責任分担の現代的基礎が確立され、FRBの政治的独立性が確保された。この修正合意の一環として、ウォーシュ氏はFRBの膨大なバランスシートの大幅な調整に関して財務省により多くの権限を与えることを望んでいた。
ウォーシュ氏は２０２５年について「部分的に偽装された財政政策であることを考慮すると、財務長官はＦＲＢ保有額の変更案が受け入れられると判断する必要があるだろう」と述べた。
FRBが現在バランスシート上にある6兆7000億ドルの金融資産をどのように考えるかによって、ベッセント氏の計画が成否を分ける可能性がある。ウォーシュ氏の既存の計画は、利回りを抑制したいというベッセント氏の期待に反するものとみられる。ウォーシュ氏はFRBが保有資産全体を減らして短期国債に振り向けることを望んでおり、そうなれば長期国債の利回りが上昇する可能性が高く、ベッセント氏が達成したいこととは逆だ。
しかし、この問題に関してもFRBの意見は分かれている。最近公表された7月の連邦公開市場委員会議事録によると、FRBはバランスシートに関する質問を、ウォーシュ氏がこの問題について報告するよう割り当てたタスクフォースが戻ってくるまで延期したことが明らかになった。それは今年の終わりか来年の初めになるだろう。
財務省とFRBは歴史的に、バランスシートの大きな変更に関して実際に相互に意思疎通を行ってきた。ベッセント氏は木曜日、CNBCのインタビューで、それが継続することを示唆した。
ベッセント氏は「バランスシートに何らかの変化があれば財務省とFRBは協力すると思うし、彼らが行っているいかなる種類の流出にも対応するだろう」と述べた。
FRBも財務省も、ベッセント氏のコメントが同氏とウォーシュ氏が調整を始めたことを示唆しているかどうかという電子メールでの質問には回答しなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/bessent-warsh-fed-bond-market-treasury-yields.html",
    publishedAt: "2026-08-20T21:53:44+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 6,
  },
  {
    id: "neocloud-stocks-like-coreweave-are-havin-16c3e272",
    title: "Neocloud stocks like CoreWeave are having a moment — and time’s running out to cash in",
    titleJa: "CoreWeaveのようなネオクラウド株は絶好調だが、資金を得るには時間がなくなってきている",
    summaryJa: "BCAのアナリスト、ノア・ワイズバーガー氏によると、ネオクラウドは「循環型リース会社」になる運命にあり、これは株価のバリュエーションが低いことを示唆しているという。",
    bodyOriginal: `The neoclouds are destined to be “cyclical leasing companies,” according to BCA analyst Noah Weisberger, which implies low valuations for the stocks.`,
    bodyJa: `BCAのアナリスト、ノア・ワイズバーガー氏によると、ネオクラウドは「循環型リース会社」になる運命にあり、これは株価のバリュエーションが低いことを示唆しているという。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/neocloud-stocks-like-coreweave-are-having-a-moment-and-times-running-out-to-cash-in-8aca34c8?mod=mw_rss_topstories",
    publishedAt: "2026-08-20T18:20:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-84658855",
    readTime: 2,
  },
  {
    id: "there-is-considerable-tension-my-grandm-85f06665",
    title: "‘There is considerable tension’: My grandmother, 99, wants to cut my mother out of her will. Should I intervene?",
    titleJa: "「かなりの緊張感が漂っている」：99歳の祖母は、母を自分の意志から切り離したいと考えている。介入すべきでしょうか？",
    summaryJa: "「おばあちゃんは、母から 5 万ドルの HELOC を引き出すよう圧力をかけられたと感じています。」",
    bodyOriginal: `“Grandma feels that she was pressured by my mother into taking out a $50,000 HELOC.”`,
    bodyJa: `「おばあちゃんは、母から 5 万ドルの HELOC を引き出すよう圧力をかけられたと感じています。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/there-is-considerable-tension-my-grandmother-99-wants-to-cut-my-mother-out-of-her-will-should-i-intervene-5e8f408e?mod=mw_rss_topstories",
    publishedAt: "2026-08-20T18:15:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-24501821",
    readTime: 2,
  },
  {
    id: "walmart-sales-under-strain-as-us-shopper-3f0b7d15",
    title: "Walmart sales under strain as US shoppers pull back",
    titleJa: "米国の買い物客が撤退し、ウォルマートの売上が圧迫される",
    summaryJa: "米国の買い物客が撤退し、ウォルマートの売上が圧迫される- 公開されました",
    bodyOriginal: `Walmart sales under strain as US shoppers pull back
- Published
Sales at the US retail giant Walmart grew at their slowest pace for more than six years in the most recent quarter, suggesting American shoppers are under strain.
Walmart, which due to its size is well-placed to gauge consumers' mood, blamed the rising price of fuel.
Sales at comparable sites across the chain were up by 2.6%, excluding fuel, between May and July the company said.
Walmart said it would use up to $3bn of expected tariff refunds to lower prices in a bid to keep customers spending.
The rebate stems from duties the retailer paid after President Trump imposed a wave of tariffs on imported goods last year. Retailers are receiving refunds from central government after those tariffs were ruled unlawful.
Rival retailer Target recently said it had received $1bn in rebates, boosting its profits.
Walmart, the US's largest retailer, said the nearly $3bn in tariff rebate it anticipated would help it continue a programme of price cuts or "rollbacks" that it expanded earlier this year, external.
Walmart has leaned heavily on price cuts to retain customers, launching 11,000 of its so-called "rollbacks" across categories.
Chief financial officer John David Rainey said those lower prices were already lifting transactions and unit sales, especially in food and other staples like toys.
But he acknowledged that the retail environment remained uneven, with lower-income households – a core part of Walmart's base – feeling squeezed.
Rainey said rising petrol prices were leaving shoppers with less spare cash, saying the shift in behaviour became clear once fuel went above $4 a gallon.
Price moves in June made the impact obvious, he added, with lower-income customers pulling back and focusing spending on essentials.
Beyond the consumer pullback, Walmart's results highlighted several additional risks that could shape the firm's prospects in the months ahead.
Much of the quarter's profit lift came from tariff refunds that had already come in, a one-off benefit that analysts say won't recur to the same extent.
The price rollbacks could put pressure on margins, while Walmart is also spending money on automation, new warehouses, and tech upgrades.
On the earnings call, analysts pressed management on whether lower prices were already driving a lift in sales and whether some rollbacks could be locked in for 2027.
Walmart said the benefits were showing up most clearly in food and other staples, and that certain cuts might remain if they continued to resonate with shoppers.
"Our hope and intention always is that rollbacks can become permanent ... wherever possible," Rainey said.
Analysts also questioned whether Walmart's income could continue to grow despite flagging sales. Executives said they believed it could, pointing to businesses such as membership and advertising.`,
    bodyJa: `米国の買い物客が撤退し、ウォルマートの売上が圧迫される
- 公開されました
米国の小売大手ウォルマートの直近四半期の売上高は過去6年以上で最低のペースで伸びており、米国の買い物客が負担にさらされていることが示唆された。
ウォルマートはその規模から消費者の気分を測るのに有利な立場にあるが、燃料価格の上昇が原因だと主張した。
同社によると、5月から7月にかけてチェーン全体の同等拠点の売上高は燃料を除いて2.6％増加した。
ウォルマートは、顧客の支出を維持するため、予想される関税還付金のうち最大30億ドルを価格引き下げに充てると述べた。
このリベートは、トランプ大統領が昨年輸入品に相次ぐ追加関税を課した後に小売業者が支払った関税に起因する。これらの関税が違法と判断された後、小売業者は中央政府から返金を受けている。
ライバルの小売業者ターゲットは最近、10億ドルのリベートを受け取り、利益が増加したと発表した。
米国最大の小売業者ウォルマートは、予想される約30億ドルの関税リベートは、今年初めに対外的に拡大した価格引き下げまたは「ロールバック」プログラムを継続するのに役立つと述べた。
ウォルマートは顧客を維持するために値下げに大きく依存しており、カテゴリー全体で1万1000件のいわゆる「ロールバック」を開始している。
ジョン・デービッド・レイニー最高財務責任者（ＣＦＯ）は、こうした価格下落により、特に食品やおもちゃなどの必需品の取引と販売個数がすでに増加していると述べた。
しかし同氏は、ウォルマートの基盤の中核である低所得世帯が圧迫感を感じており、小売環境は依然不均一であることを認めた。
レイニー氏は、ガソリン価格の上昇により買い物客の余剰現金が減っていると述べ、燃料が1ガロン当たり4ドルを超えると行動の変化が明らかになったと述べた。
同氏は、6月の価格変動の影響は明らかで、低所得層の顧客が手を引いて必需品に支出を集中させていると付け加えた。
ウォルマートの決算は、消費者の反発以外にも、今後数カ月間の同社の見通しを形作る可能性があるいくつかの追加リスクを浮き彫りにした。
同四半期の利益押し上げの大半はすでに入っていた関税還付によるものだが、アナリストらはこの一度限りの利益は同じ程度には再発しないだろうと述べている。
価格引き下げは利益率を圧迫する可能性がある一方、ウォルマートは自動化、新しい倉庫、技術アップグレードにも資金を投じている。
アナリストらは決算会見で、価格下落がすでに売上高の押し上げにつながっているのか、また一部の反動は2027年に確定する可能性があるのかについて経営陣に圧力をかけた。
ウォルマートは、効果が最も明確に現れているのは食品やその他の必需品であり、買い物客の共感を呼び続ければ、一定の削減は残る可能性があると述べた。
「私たちの希望と意図は常に、可能な限りロールバックが永続的になることです」とレイニー氏は語った。
アナリストらはまた、売上高が低迷しているにもかかわらず、ウォルマートの収益が成長を続けることができるかどうかを疑問視している。幹部らは会員制や広告などの事業を挙げて、それが可能だと信じていると述べた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cpq8rjy7vxlo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T17:59:59+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/40c0/live/b7baf560-9cb6-11f1-a291-b542ee92de7c.jpg",
    readTime: 3,
  },
  {
    id: "bessent-says-u-s-likely-won-t-restart-la-13b31d9c",
    title: "Bessent says U.S. likely won't restart large-scale Iran combat as it steps up economic pressure",
    titleJa: "ベッセント氏は、米国が経済圧力を強化する中、大規模なイラン戦闘は再開しない可能性が高いと述べた",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `The Trump administration's plan to crush Iran's economy will likely negate the need for major U.S. military operations against the Islamic Republic, Treasury Secretary Scott Bessent told CNBC on Thursday.
"If we are doing the maximum economic pressure, then that means that likely there will not be a large-scale kinetic restart," Bessent said in an exclusive interview with "Squawk on the Street."
The Cabinet secretary's comments followed President Donald Trump's declaration on Truth Social that the U.S. plans to choke Iran's economy by levying major penalties against any country that provides "any type of lifeline" to Tehran.
"This will be an ECONOMIC D-DAY, and we need all of our Allies to stand with the United States of America to isolate, and defeat, the Iran threat," Trump wrote in the Wednesday evening post.
The announcement came as the war against Iran nears the six-month mark without any hint that the U.S. is close to clinching either a diplomatic or military victory.
Oil prices rose following CNBC's interview with Bessent, who vowed that the U.S. will create "the greatest coordinated economic isolation in the history of the world" against Iran.
He said he will hold a news conference on Monday to "talk about exactly what we're going to do."
In a preview of the plan, he said that the U.S. will be telling all of its allies, "You are either with us or against us."
"If you insist on doing business with [Iran], either transferring money, buying their oil or doing seaborne ship transfers, then the U.S. Treasury and the U.S. government ... will put its full might and force toward enforcing against you," Bessent said.
"It is time for our allies and the rest of the world to make a decision," he said. "We are going to squash the economy of this murderous regime."
He also brushed off early skeptics of the plan, contending that the economic pressure campaign will work in concert with an ongoing U.S. naval blockade of Iranian ports in the Gulf of Oman.
"It is a one-two punch. We have the blockade, and we are going to have the toughest sanctions in history," he said.
"We are going to collapse this regime," he added.
Trump has repeatedly claimed that the U.S. has already effectively destroyed Iran's military and economy, and he insisted in his Wednesday evening Truth Social post that Tehran is "on the ropes" and "hanging by a thread."
Indeed, Iran's gross domestic product is believed to have contracted amid the war, while inflation in the country has ballooned to historic highs. But some experts still caution against assuming that Iran's economy is facing imminent collapse.
Iran also continues to exploit its ability to wreak havoc in the Strait of Hormuz, the waterway that saw 20% of the world's oil trade before the war began.
Tanker crossings through the strait remain highly diminished despite ramped-up pressure from the U.S. and other regional powers. The United Arab Emirates said Wednesday it would halt all trade with Iran after facing new ballistic missile strikes.
"Doubling down on failed policies will only bring further defeat—and enmity of Iranians," Iranian Foreign Minister Abbas Araghchi said on X in response to Trump's latest threat.`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/bessent-economy-iran-war-trump.html",
    publishedAt: "2026-08-20T17:19:03+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "california-ag-tells-cnbc-that-settling-p-1ba0cef6",
    title: "California AG tells CNBC that settling Paramount-WBD lawsuit would require 'robust structural remedies'",
    titleJa: "カリフォルニア州AGはCNBCに対し、パラマウントとWBDの訴訟の和解には「強固な構造的救済」が必要になると語った。",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `California Attorney General Rob Bonta told CNBC's David Faber on Thursday that the group of states suing to block Paramount Skydance's proposed acquisition of Warner Bros. Discovery would require "robust structural remedies" to reach a settlement in the antitrust case.
"[Paramount] wanted to talk about everything except for what this case is about. They want to talk about the streaming market, which we don't allege in our complaint. They want to talk about CNN, which is not a focus of our complaint. They want to talk about the foreign regulators. We want to talk about the three markets that we set forth in our complaint, where we think there's antitrust violation," Bonta said.
Bonta and 11 other state attorneys general filed a lawsuit in July seeking to block the merger. The group of suing states also includes Arizona, Colorado, Connecticut, Massachusetts, Minnesota, Nevada, New Jersey, New Mexico, New York, Oregon and Washington. In the suit, the group focuses on the size of the combined company and how it would control nearly one-third of films and nearly a third of basic cable TV programming.
Paramount, which initially sought to close the deal by Sept. 30, agreed to delay the proposed acquisition of WBD to as late as June 2027. A trial will be heard on the matter in March.
There has been widespread speculation about whether Paramount and the states will hold settlement talks to bypass the March trial.
"I will say that coming to the table has always been on the table. And if [CEO David] Ellison and Paramount want to come to the table in good faith and talk, we want to talk, too. We're happy to have that conversation," Bonta said. "We do prefer to resolve cases in the boardroom instead of the courtroom, but for now we're bringing our case, and, you know, I hope they can focus on the actual allegations we make in our complaint."
Bonta said it's no secret Paramount wants the states to consider a settlement.
If the two companies were to combine, it would unite the famed movie studios Warner Bros. and Paramount, as well as a massive portfolio of TV networks including Paramount's broadcast network CBS and pay TV channels such as its MTV and BET with WBD's CNN, Discovery and others. It would also bring together streaming platforms Paramount+ and HBO Max.
"Whether the market is shrinking or growing is really irrelevant," Bonta said Thursday in response to the argument that the pay TV subscriber base has been decreasing due to the rise of streaming.
Bonta said a combined Paramount-WBD would create a "presumptively illegal market concentration" in the film and TV markets the group of attorneys general identified in the lawsuit.
"We are the ones who've looked at this from a straight-up law and facts perspective in the American economy under American law under Clayton Act Section 7, which applies here as antitrust law," Bonta said. "[The law has] been on the books for over a century. And it's just a straight up, meat-and-potatoes, black-and-white, bread-and-butter, antitrust case."
The Clayton Antitrust Act is the more-than-100-year-old law that prohibits anticompetitive mergers and acquisitions.
Paramount has previously called the states' lawsuit a "misrepresentation of competition in the entertainment industry today," and said it plans to "vigorously defend the transaction and demonstrate that this challenge is inconsistent with sound competition and policy and the competitive realities of the media marketplace."
Paramount's lead trial counsel, Jeffrey Kessler, earlier told CNBC that Paramount "believes strongly" in the combination of the two companies and is prepared to bring the matter to the Supreme Court if it was faced with a prolonged blockade to closing the deal.
During Paramount's August earnings call, Ellison said he's "confident" the deal will close.
A Paramount spokesperson didn't immediately respond to a request for comment about Bonta's remarks on Thursday.`,
    bodyJa: `カリフォルニア州のロブ・ボンタ司法長官は木曜日、CNBCのデービッド・フェイバーに対し、パラマウント・スカイダンスによるワーナー・ブラザース・ディスカバリー買収計画の阻止を求めて訴訟を起こしている州グループが独占禁止法訴訟で和解に達するには「強力な構造的救済」が必要になると語った。
「（パラマウントは）この訴訟の内容以外のすべてについて話したがっている。彼らはストリーミング市場について話したがっているが、われわれは訴状では主張していない。彼らはCNNについて話したがっているが、これはわれわれの訴状の焦点では​​ない。彼らは外国の規制当局について話したがっている。われわれは訴状で述べた独占禁止法違反があると考えられる3つの市場について話したいのだ」とボンタ氏は語った。
ボンタ氏と他の11人の州司法長官は7月、合併阻止を求めて訴訟を起こした。訴訟を起こした州のグループには、アリゾナ、コロラド、コネチカット、マサチューセッツ、ミネソタ、ネバダ、ニュージャージー、ニューメキシコ、ニューヨーク、オレゴン、ワシントンも含まれる。同グループは訴訟の中で、合併後の会社の規模と、映画のほぼ3分の1と基本的なケーブルテレビ番組のほぼ3分の1をどのように管理するかに焦点を当てている。
パラマウントは当初、9月30日までに取引を完了させようとしていたが、WBD買収案を2027年6月まで延期することに同意した。この件に関する裁判は3月に審理される予定だ。
パラマウントと各州が３月の裁判を回避するために和解協議を行うかどうかについては、さまざまな憶測が広がっている。
「テーブルに着くことは常にテーブルの上にあったと言っておきます。そして、（デビッド・）エリソンCEOとパラマウントが誠意を持ってテーブルに着いて話し合いたいのであれば、私たちも話し合いたいと思っています。そのような会話ができることを嬉しく思います」とボンタ氏は語った。 「私たちは法廷ではなく役員室で事件を解決することを望んでいますが、今のところ私たちは訴訟を起こしており、ご存知のとおり、私たちが訴状で主張している実際の主張に焦点を当ててもらいたいと思っています。」
ボンタ氏は、パラマウントが各州に和解の検討を望んでいることは秘密ではないと述べた。
両社が合併すれば、有名な映画スタジオであるワーナー・ブラザースとパラマウント、さらにはパラマウントの放送ネットワークCBSや同社のMTV、BETなどの有料TVチャンネルとWBDのCNN、ディスカバリーなどを含むテレビネットワークの大規模なポートフォリオが統合されることになる。また、ストリーミングプラットフォームのParamount+とHBO Maxも統合される予定だ。
ストリーミングの台頭により有料テレビの加入者ベースが減少しているという議論に対し、ボンタ氏は木曜日、「市場が縮小しているか成長しているかは全く関係ない」と述べた。
ボンタ氏は、パラマウントとWBDの合併により、司法長官グループが訴訟で明らかにした映画・テレビ市場で「おそらく違法な市場集中」が生じるだろうと述べた。
ボンタ氏は「クレイトン法第７条に基づく米国法に基づいて、米国経済における法と事実を直視した立場からこの問題を検討してきた。同法はここでは反トラスト法として適用される」と述べた。 「[この法律は] 1 世紀以上もの間、法制化されてきました。そして、それはまさに、肉とジャガイモの、白黒はっきりした、パンとバターの、独禁法訴訟です。」
クレイトン反トラスト法は、反競争的な合併や買収を禁止する 100 年以上の歴史のある法律です。
パラマウントは以前、各州の訴訟を「今日のエンターテインメント業界における競争の虚偽表示」と呼び、「この取引を断固として弁護し、この挑戦​​が健全な競争や政策、メディア市場の競争の現実に矛盾していることを証明する」つもりだと述べた。
パラマウントの主任法廷弁護士、ジェフリー・ケスラー氏は先にCNBCに対し、パラマウントは両社の合併を「強く信じ」ており、取引完了への長期にわたる妨害に直面した場合には最高裁判所に問題を提起する用意があると語った。
パラマウントの8月の決算会見でエリソン氏は、取引が完了することに「自信を持っている」と述べた。
パラマウントの広報担当者は木曜日のボンタ氏の発言に関するコメント要請にすぐには応じなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/california-ag-bonta-paramount-wbd-lawsuit-remedies.html",
    publishedAt: "2026-08-20T16:42:56+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 5,
  },
  {
    id: "bernard-matthews-confirms-closure-of-der-08b4de41",
    title: "Bernard Matthews confirms closure of Derby factory",
    titleJa: "バーナード・マシューズ、ダービー工場の閉鎖を認める",
    summaryJa: "バーナード・マシューズ氏、市内工場の閉鎖を認める- 公開されました",
    bodyOriginal: `Bernard Matthews confirms closure of city factory
- Published
A British food giant is set to close its factory in Derby amid "significant financial losses".
Bernard Matthews Foods has confirmed it will be shutting its processing facility on Shaftesbury Street South by the end of 2026.
A spokesperson for the company said the decision had been made at the conclusion of consultations with "employee and union representatives".
The decision comes two years after the company announced plans to close a plant at its headquarters in Great Witchingham, Norfolk, where its founder built his empire.
In a statement on Thursday, the company said its financial situation was due to "external economic challenges".
"This decision follows continued significant financial losses, alongside a range of external economic challenges and the geopolitical environment, including Brexit, Covid, and conflicts in Ukraine and the Middle East, which have all contributed to significantly impacting the site and its supply chain," a spokesperson said.
"The company will support impacted employees through potential redeployment opportunities across the wider business, and engagement with local organisations to explore alternative employment options."
The well-known food brand rose to prominence in the 1960s when Bernard Matthews entered the Guinness Book of Records as the biggest turkey farmer in Europe.
Matthews was known for his "bootiful" catchphrase and his success led to an expansion of turkey-related products, including turkey Twizzlers.
The entrepreneur died in 2010 on the day of the US Thanksgiving holiday, often referred to as Turkey Day.
According to the company's website, it still runs processing and production sites in Sunderland and in Holton, Suffolk.
Trade union Unite has been contacted for comment.
Get in touch
Tell us which stories we should cover in Derby
Listen to BBC Radio Derby on Sounds and follow BBC Derby on Facebook, external, on X, external, or on Instagram, external. Send your story ideas to eastmidsnews@bbc.co.uk, external or via WhatsApp, external on 0808 100 2210.
Related topics
- Published13 January 2024
- Published11 January 2024
- Published20 September 2016`,
    bodyJa: `バーナード・マシューズ氏、市内工場の閉鎖を認める
- 公開されました
英国の食品大手は「重大な経済的損失」を理由にダービーの工場を閉鎖する予定だ。
バーナード・マシューズ・フーズは、シャフツベリー・ストリート・サウスにある加工施設を2026年末までに閉鎖すると発表した。
同社の広報担当者は、この決定は「従業員および組合の代表者」との協議の結果下されたと述べた。
この決定は、同社が創業者が帝国を築いたノーフォーク州グレート・ウィッチンガムの本社工場を閉鎖する計画を発表してから2年後に行われた。
同社は木曜日の声明で、財務状況は「外部の経済的課題」によるものだと述べた。
「今回の決定は、英国EU離脱、新型コロナウイルス感染症、ウクライナと中東の紛争を含むさまざまな外部経済的課題や地政学的な環境に加え、重大な経済的損失が続いていることを受けての決定であり、これらはすべてサイトとそのサプライチェーンに大きな影響を与える一因となっている」と広報担当者は述べた。
「同社は、より広範な事業全体にわたる潜在的な再配置の機会や、代替雇用の選択肢を模索するための地元組織との連携を通じて、影響を受けた従業員を支援していきます。」
この有名な食品ブランドは、バーナード マシューズがヨーロッパ最大の七面鳥農家としてギネスブックに登録された 1960 年代に有名になりました。
マシューズは「ブーティフル」というキャッチフレーズで知られ、彼の成功により七面鳥ツイズラーなど七面鳥関連商品の拡大につながりました。
この起業家は2010年、しばしばトルコの日と呼ばれる米国の感謝祭の日に亡くなった。
同社のウェブサイトによると、同社は現在もサンダーランドとサフォーク州ホルトンで加工・生産拠点を運営している。
労働組合ユナイトにコメントを求めた。
連絡する
ダービーで取り上げるべきストーリーを教えてください
BBC Radio Derby on Sounds を聴き、Facebook (外部)、X (外部)、または Instagram (外部) で BBC Derby をフォローしてください。ストーリーのアイデアを eastmidsnews@bbc.co.uk (外部) または WhatsApp (外部 (0808 100 2210) 経由) に送信してください。
関連トピック
- 2024 年 1 月 13 日公開
- 2024 年 1 月 11 日公開
- 2016 年 9 月 20 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c998e0my7k5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T16:27:26+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/b1d9/live/6ab16810-9cae-11f1-84cf-fd4cfd9d6c84.jpg",
    readTime: 3,
  },
  {
    id: "ai-data-center-outrage-is-showing-up-eve-653d5dab",
    title: "AI data center outrage is showing up everywhere from ads to elections",
    titleJa: "AI データセンターへの怒りは広告から選挙まであらゆるところで現れている",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `During a brainstorming session earlier this summer, a group of comedians and employees at beverage company Liquid Death kicked around an idea for a brazen new advertising campaign that would humorously shed light on the amount of water required to operate massive artificial intelligence data centers.
"It was an idea of just, hey, what if we used pee to cool data centers instead of water?" Andy Pearson, vice president of creative at Liquid Death, told CNBC in an interview.
The outlandish idea turned into a collaborative 90-second video, created with Garage Beer, which is owned by Jason and Travis Kelce. The clip pledges to "send your pee to the AI data center of your choice."
Liquid Death and Garage Beer dropped the video on Tuesday, the same day voters in Florida headed to the polls to vote in the gubernatorial primaries, with the leading Republican candidates focused on data centers as a central issue. Rep. Byron Donalds, President Donald Trump's pick to succeed Gov. Ron DeSantis, won easily to move along to November's general election.
Last month, Donalds introduced the "Protecting Ratepayers Act," which aims to "ensure that private developers, rather than American taxpayers, bear the investment costs of data center developments that advance our country's technological dominance," according to a release. Donalds, however, received significant financial support from AI PACs like Leading the Future.
The Marc Andreessen-backed group congratulated Donalds after his win, saying he "understands that new, emerging technologies like AI play a key role in advancing that priority.
AI data centers, the large facilities that house the hardware for training and running AI models, are popping up all over the country, with far more coming down the line, if leading AI companies and hyperscalers get their way. But with the midterm elections less than three months away and Americans grappling with increased costs for groceries and stubbornly high prices at the pump, data centers have become a physical manifestation of the widespread antipathy for AI, which consumers associate with inflated electricity bills and job loss.
The National Republican Senatorial Committee, or NRSC, warned on Tuesday that data centers have become a "sleeper issue" for the entire midterm election cycle, according to a memo obtained by CNBC. Democrats are currently ahead in the generic ballot by 6.4 percentage points, according to a polling average from RealClearPolitics.
Pearson said Liquid Death tries to "stay out of political things," but so many people are talking about AI and data centers that it's become a "pretty universal topic." More than half of Americans say they're more concerned than excited about the growing use of the technology in daily life, according to a report from the Pew Research Center published Tuesday. That's up from 37% in 2021.
"You literally can't turn on the TV or radio without hearing about it," Pearson said. "It's really an issue that's uniting people across political and cultural spectrums."
The satirical video Pearson helped produce features former NFL star Jason Kelce, who is shown holding a jar of urine and walking through a field toward a data center singing, "We want your pee, please give us your pee. Let's pee on computers together, to save humanity."
'Industry will be blamed'
In the NRSC's memo, the committee wrote that data centers have become a fixture of the contentious Senate race in Ohio, where Democratic candidate and former Sen. Sherrod Brown has made his opposition to them a "centerpiece" of his campaign against Republican incumbent Jon Husted.
Ohio is home to several large data center projects, including a massive 10-gigawatt campus in Pike County that could cost more than $500 billion, as CNBC previously reported. OpenAI announced Monday that it has agreed to secure 8 gigawatts of that capacity, which is backstopped by a $105 billion commitment from Nvidia.
Ten gigawatts is roughly equivalent to the annual power consumption of 8 million U.S. households, according to a CNBC analysis of data from the Energy Information Administration.
"If voters' perceptions of data centers are not fixed quickly, the campaign against them will expand far beyond Ohio," the NRSC wrote in the memo, which was first reported by Axios.
Should Husted lose because of data centers, "the industry will be blamed," and both parties will take notice, the committee wrote. The Ohio race is critical for Republicans in their effort to keep their slim majority in the Senate.
Trump weighed in on Wednesday, acknowledging that while data centers "can use a little public relations help," communities should welcome them.
"I would absolutely want it because the jobs are enormous and the money paid, the taxes paid, are just enormous," the president said.
A big emerging problem for the tech industry, however, is that voters from both parties disagree. Politicians are responding to their anger.
In Pennsylvania, Democratic Gov. Josh Shapiro, who is eyeing a potential 2028 presidential bid, signed an executive order on Tuesday placing harsh standards on data center development in his state.
The order requires data center developers to pay for all new electricity generation, transmission, distribution and other infrastructure required for their project. Developers also must commit to open and transparent engagement with local stakeholders, hire and train local workers, enter into "community benefit agreements," and abide by strict water and environmental standards.
Shapiro, who once welcomed data center projects, said he signed the order after hearing from "many residents across our Commonwealth who are concerned about what data center development could mean for our communities, our environment, and our utility bills."
Shapiro's Republican opponent in this year's election, state Treasurer Stacy Garrity, has also seized on data centers as an issue in the campaign, calling for a pause on future development while slamming Shapiro for his earlier positions.
Garrity's campaign website, which includes a link to "Donate with Crypto," accuses Shapiro of opening "Pennsylvania's door to data centers" and giving away "state tax dollars and resources to a company on the other side of the country."
CNBC reported in April that the data center boom in Pennsylvania was potentially putting incumbent Republicans in the state at risk.
In Texas, where Republican Gov. Greg Abbott has championed data centers in the past, the mood has changed decisively. Abbott is now racing to put standards on data centers in his state, as Democratic challenger Gina Hinojosa rips him for his initial support of the facilities.
Hinojosa told CNBC on Wednesday that Abbott has been "doing the bidding of the moneyed interests and not the people of Texas." Hinojosa has called for a data center moratorium until the legislature can meet to pass guardrails for them.
Abbott issued a directive in June to require companies to pay for electrical infrastructure upgrades, reuse their own water and reduce the cost of electricity. On Tuesday, the governor announced in a press release that a number of companies agreed to his standards.
The industry's promises
AI companies are acutely aware of the souring views toward data centers, and several have made pledges to try and assure Americans that their build-outs will benefit the country.
In January, Microsoft published a blog post outlining the "concrete steps needed to be a good neighbor in the communities where we build." Days later, OpenAI made a similar pledge, promising to pay its own way on energy while minimizing water use and investing in local jobs and workforce pathways.
"We believe that AI infrastructure is vital for American competitiveness and economic opportunity, while boosting local economies by creating jobs and bringing in local revenue," OpenAI said in a release at the time.
Lawmakers are unmoved.
In July, New York Gov. Kathy Hochul signed an executive order establishing the nation's first yearlong moratorium on large data centers, effectively pausing the development of new facilities in the state. Hochul said she'll use that time to develop a regulatory framework that better protects the environment, ratepayers, the energy grid and communities in New York.
Trump attacked the moratorium in a post on Truth Social, writing that the state should change its policy "IMMEDIATELY."
Anthropic CEO Dario Amodei acknowledged the negative public sentiment around AI in a post on X on Saturday. He suggested that it stems from a fundamental "crisis of trust" toward the tech industry.
"I think that ordinary people don't trust companies, governments, or the tech industry and always suspect that we are cooking up some new way to screw them over," Amodei wrote. "The causes of this go back decades and AI is just the latest iteration of it."
WATCH: ‘Texans are mad and fed up’: Texas gubernatorial candidate Gina Hinojosa on more data centers`,
    bodyJa: `Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
「一般の人々は企業、政府、テクノロジー業界を信頼しておらず、私たちが彼らを台無しにする何か新しい方法をでっち上げているのではないかと常に疑っていると思います」とアモデイ氏は書いた。 「この原因は数十年前に遡り、AI はその最新の反復にすぎません。」
注目：「テキサス人は怒っており、うんざりしている」：テキサス州知事候補ジーナ・イノホサ氏、データセンターの増設について`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/ai-data-center-election-backlash.html",
    publishedAt: "2026-08-20T15:56:12+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "bessent-says-treasury-buyback-operation-572d09f3",
    title: "Bessent says Treasury buyback operation could be more than $4 billion",
    titleJa: "ベッセント氏、財務省の買い戻しオペは40億ドル以上になる可能性があると発言",
    summaryJa: "スコット・ベッセント財務長官は木曜日、CNBCに対し、国債買い入れの加速は発表された40億ドルを超える可能性があると語った。ベッセント氏はライブインタビューで、同部門が最近利回りが急上昇している長期証券に「市場を作る」つもりだと語った。財務省は水曜日、長期国債の買い戻し額を予定の20億ドルに倍増すると発表し、利回りは大幅に低下した。",
    bodyOriginal: `Treasury Secretary Scott Bessent told CNBC on Thursday that an accelerated buyback of government debt could be higher than the announced $4 billion.
In a live interview, Bessent said his department is going "make a market" in the longer-dated securities where yields have been surging lately. Treasury announced Wednesday that it would be doubling its scheduled $2 billion in buybacks of longer-dated government debt, sending yields sharply lower.
"We're going to increase the size of the buyback," he said. "I would note that it could be more than the 4 billion per issue."
The remarks caused a brief easing in yields, which had largely reversed the decline following Wednesday's announcement. The 30-year bond most recently was trading around 5.235%. The so-called long bond recently had been trading at levels not seen since prior to the global financial crisis in 2008.
The benchmark 10-year yield also briefly pulled back as Bessent spoke but then headed higher, most recently up about 5 basis points to 4.704%. One basis points equals 0.01%.
The Treasury chief noted that the level of yields did not factor into the buybacks decision and he wants to see fundamentals control the market.
While he said the buybacks could grow, Bessent declined to attach a figure, saying it will depend on market conditions.
"We'll see what the conditions are, and you know we will analyze them," he said. "All we're trying to do is get people to focus on the fundamentals and not trade the headlines during a quiet period in a thin market."
Bessent acknowledged the pressure at the farther reaches of the curve, saying that the current trading levels didn't reflect current economic conditions.
"We have a big toolkit, so we'll see," he said. "Part of it is signaling here and to show that we believe that the yields don't reflect the underlying fundamentals."
He also characterized liquidity for the 30-year bond as "very poor," providing another incentive for Treasury to intervene in what normally is a robust market.
Multiple factors have combined to push yields higher: Surging debt and deficits in the U.S.; competition from other areas including corporate debt issuance related to artificial intelligence and higher yields from other sovereigns such as Japan, and escalating term premiums, or the extra yield investors demand to hold government debt.
On the fiscal side, Bessent said he will be meeting with Russell Vought, head of the Office of Management and Budget, to discuss "fiscal consolidation." Figures released Wednesday from Treasury showed the national debt crossed the $40 trillion mark this week.
"There's nothing magic about the 40 trillion number, and we can grow our way out of that," Bessent said.
"Our message to our allies, our trading partners, is that global growth is the way to take care of this mountain of debt," he added.`,
    bodyJa: `スコット・ベッセント財務長官は木曜日、CNBCに対し、国債買い入れの加速は発表された40億ドルを超える可能性があると語った。
ベッセント氏はライブインタビューで、同部門が最近利回りが急上昇している長期証券に「市場を作る」つもりだと語った。財務省は水曜日、長期国債の買い戻し額を予定の20億ドルに倍増すると発表し、利回りは大幅に低下した。
同氏は「自社株買いの規模を拡大するつもりだ」と述べた。 「1号あたり40億を超える可能性があることに注意してください。」
この発言を受けて利回りは一時的に緩和したが、水曜日の発表後の下落はほぼ反転した。直近の３０年債は５．２３５％付近で取引されていた。いわゆる長期債は最近、2008年の世界金融危機以前以来見られない水準で取引されていた。
ベンチマークの１０年債利回りもベッセント氏の講演で一時は下落したが、その後上昇に向かい、直近では約５ベーシスポイント上昇して４．７０４％となった。 1 ベーシス ポイントは 0.01% に相当します。
同財務長官は、利回りの水準は自社株買いの決定に考慮されておらず、ファンダメンタルズが市場をコントロールすることを望んでいると述べた。
ベッセント氏は自社株買いが拡大する可能性があると述べたが、市場の状況次第であるとして数字の添付を拒否した。
「状況がどのようなものかを見て、分析するつもりだ」と同氏は語った。 「私たちがやろうとしているのは、人々にファンダメンタルズに集中してもらい、市場が薄い閑静な時期にヘッドラインを取引しないようにすることだけです。」
ベッセント氏は、現在の取引水準は現在の経済状況を反映していないと述べ、曲線の遠方での圧力を認めた。
「我々には大きなツールキットがあるので、様子を見てみます」と彼は言った。 「その一部はここでのシグナルであり、利回りが基礎的なファンダメンタルズを反映していないと我々が信じていることを示すためだ。」
同氏はまた、３０年債の流動性を「非常に乏しい」と特徴付け、財務省が通常なら堅調な市場に介入する新たな動機となった。
複数の要因が組み合わさって利回りが上昇している。米国の債務と財政赤字の急増。人工知能に関連した社債発行や、日本など他の主権国家による高利回り、期間プレミアム、つまり投資家が政府債務を保有するために要求する追加利回りなど、他の分野との競争。
財政面では、ベッセント氏は「財政健全化」について話し合うため管理予算局のラッセル・ヴォート長官と会談する予定だと述べた。財務省が水曜日に発表した数字によると、国家債務が今週40兆ドルの水準を超えた。
「40兆という数字には魔法など何もなく、我々はそこから抜け出す方法を成長させることができる」とベッセント氏は語った。
同氏はさらに「同盟国や貿易相手国に対するわれわれのメッセージは、世界的な成長がこの巨額の債務を処理する方法だということだ」と付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/bessent-says-treasury-buyback-operation-could-be-more-than-4-billion.html",
    publishedAt: "2026-08-20T15:35:33+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "treasury-yields-rebound-wiping-out-the-d-3b4f3190",
    title: "Treasury yields rebound, wiping out the decline following Bessent's intervention",
    titleJa: "国債利回りが回復、ベッセント介入後の下落を一掃",
    summaryJa: "財務省が長期国債への圧力緩和を目的とした介入を発表したことを受けて、木曜朝の債券利回りは上昇し、前日に見られた反動の大半を帳消しにした。買い戻し加速の主な焦点である３０年米国債利回りは５．７ベーシスポイント上昇し５．２５１％となった。",
    bodyOriginal: `Bond yields climbed Thursday morning, erasing most of the pullback they saw the previous day after the Treasury Department announced an intervention aimed at easing pressure on longer-dated government debt.
The yield on the 30-year U.S. Treasury bond — the primary focus of the accelerated buyback — was up 5.7 basis points at 5.251%.
Yields on 10-year U.S. Treasurys — the main benchmark for mortgages, auto loans and credit card debt — moved 5.1 basis points higher to 4.704%.
The 10- and 30-year yield levels were right around the level they held before the 8:30 a.m. announcement Wednesday that Treasury would be stepping up its bond buyback program.
The yield on the 2-year Treasury note, which more closely follows short-term Federal Reserve rate decisions, was last seen up 1.5 basis points to 4.1927%.
One basis point equals 0.01%, or 1/100th of 1%, and yields and prices move inversely to one another.
The moves underscored the difficulty of market interventions, particularly at a time when U.S. debt faces a slew of factors that have been pressuring yields higher.
In a move announced Wednesday morning, the Treasury Department, led by Secretary Scott Bessent, announced it would at least double the size of its government debt buybacks, starting Sept. 9 and running through Nov. 4.
Yields tumbled following the announcement, with the 30-year down about 10 basis points after previously hitting its highest in about 19 years, predating the global financial crisis in 2008.
However, the trade quickly unwound, with yields higher Thursday as the market digested the move, as well as the longer-term structural problems facing the fixed income market.
The interventions "belie the underlying structural challenges and do nothing to address them," Maia Crook, senior research analyst at JPMorgan Chase, said in a client note. "While [Wednesday's] action forced some decline in longer-dated yields, the more lasting impact is the potential for higher risk premia reflecting a Treasury Department that is intervening in the market and moving away from its 'regular and predictable' tenet."
The announcement came the same day that Treasury updated the national debt total, which pushed past the $40 trillion mark. At the same time, the market has faced stiff competition from record corporate debt issuance tied to the artificial intelligence buildout, all of which has contributed to rising term premiums, or the extra yield investors demand to hold U.S. government paper.
Traders were also digesting the latest Federal Open Market Committee minutes from July, released Wednesday. Officials at the meeting indicated that higher interest rates likely would be needed if there isn't more progress on inflation. Economic data released since the meeting have shown modest monthly price increases, though inflation remains above the Fed's 2% target.`,
    bodyJa: `財務省が長期国債への圧力緩和を目的とした介入を発表したことを受けて、木曜朝の債券利回りは上昇し、前日に見られた反動の大半を帳消しにした。
買い戻し加速の主な焦点である３０年米国債利回りは５．７ベーシスポイント上昇し５．２５１％となった。
住宅ローン、自動車ローン、クレジットカード債務の主要指標である10年米国債利回りは5.1ベーシスポイント上昇し4.704％となった。
１０年債と３０年債の利回り水準は、財務省が債券買い取りプログラムを強化すると水曜日午前８時半に発表される前の水準にほぼ近かった。
米連邦準備理事会（ＦＲＢ）の短期金利決定により近い２年物国債利回りは、前回は１．５ベーシスポイント上昇して４．１９２７％となった。
1 ベーシス ポイントは 0.01%、つまり 1% の 100 分の 1 に相当し、利回りと価格は相互に反比例します。
この動きは、特に米国債が利回り上昇を圧迫する多くの要因に直面している現在、市場介入の困難さを浮き彫りにした。
水曜日朝に発表された措置の中で、スコット・ベッセント長官率いる財務省は、9月9日から11月4日まで国債買い戻しの規模を少なくとも2倍に拡大すると発表した。
この発表を受けて利回りは低下し、２００８年の世界金融危機前に付けた約１９年ぶりの高値から３０年ぶりの利回りは約１０ベーシスポイント低下した。
しかし、債券市場が直面する長期的な構造的問題を市場が消化するにつれ、木曜日には利回りが上昇し、取引はすぐに巻き戻された。
ＪＰモルガン・チェースのシニア・リサーチ・アナリスト、マイア・クルック氏は顧客向けノートで、今回の介入は「根底にある構造的課題を無視しており、それに対処するために何もしていない」と述べた。 「（水曜日の）措置により長期金利のある程度の低下は余儀なくされたが、より永続的な影響は、財務省が市場に介入し『定期的かつ予測可能な』理念から遠ざかっていることを反映して、リスクプレミアムが上昇する可能性である」と述べた。
この発表は、財務省が国家債務総額を更新し、総額が40兆ドルを超えたと同日に行われた。同時に、市場は人工知能の増強に関連した記録的な社債発行による激しい競争に直面しており、これらすべてがタームプレミアム、つまり投資家が米国政府紙を保有するために要求する追加利回りの上昇に寄与している。
トレーダーらは水曜日に発表された７月の最新の連邦公開市場委員会議事録も消化していた。会合に出席した当局者らは、インフレが一段と進展しない場合には利上げが必要になる可能性が高いとの見方を示した。会合後に発表された経済指標では、インフレ率は依然FRBの目標である2％を上回っているものの、月々の物価は緩やかな上昇を示している。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/bond-yields-edge-higher-as-traders-digest-treasury-debt-buyback-plan.html",
    publishedAt: "2026-08-20T13:02:45+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "you-ve-all-heard-ai-is-remaking-the-econ-c63da1b6",
    title: "You’ve all heard AI is remaking the economy. Here’s how it’s changing lives — for better or worse.",
    titleJa: "AI が経済を作り変えていることを皆さんも聞いたことがあるでしょう。良くも悪くも、それが生活をどのように変えているかをご紹介します。",
    summaryJa: "経済を大きく動かすのはトランプ氏ではなくAIであり、その規模は今後もさらに大きくなるだろうと、このアナリストは言う。",
    bodyOriginal: `AI, not Trump, is the big mover of the economy, this analyst says — and it’s just going to get bigger.`,
    bodyJa: `経済を大きく動かすのはトランプ氏ではなくAIであり、その規模は今後もさらに大きくなるだろうと、このアナリストは言う。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/youve-all-heard-ai-is-remaking-the-economy-heres-how-its-changing-lives-for-better-or-worse-447bd086?mod=mw_rss_topstories",
    publishedAt: "2026-08-20T13:00:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-21228371",
    readTime: 2,
  },
  {
    id: "treasury-s-buyback-blitz-may-end-up-driv-5261667a",
    title: "Treasury’s buyback blitz may end up driving bond yields higher, warns JPMorgan. Here’s its advice for investors.",
    titleJa: "財務省による自社株買いの猛攻が最終的に債券利回りを上昇させる可能性があるとJPモルガンは警告している。投資家へのアドバイスは次のとおりです。",
    summaryJa: "ストラテジストのジェイ・バリー氏とジェイソン・ハンター氏は、必要性すらないと考える財​​務省の動きによる影響を予測している。",
    bodyOriginal: `Strategists Jay Barry and Jason Hunter are predicting fallout from the Treasury’s move that they see as not even needed.`,
    bodyJa: `ストラテジストのジェイ・バリー氏とジェイソン・ハンター氏は、必要性すらないと考える財​​務省の動きによる影響を予測している。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/treasurys-bond-buyback-blitz-may-end-up-driving-yields-higher-warns-jpmorgan-heres-their-investment-advice-b8f507be?mod=mw_rss_topstories",
    publishedAt: "2026-08-20T12:54:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-19641233",
    readTime: 2,
  },
  {
    id: "walmart-hikes-full-year-outlook-says-it-688cae01",
    title: "Walmart hikes full-year outlook, says it will use huge tariff refund to keep prices low",
    titleJa: "ウォルマート、通期見通し引き上げ、価格を低く抑えるために巨額の関税還付を活用すると表明",
    summaryJa: "ウォルマートは木曜日、四半期売上高がウォール街の予想を上回り、電子商取引が四半期でも堅調に成長し、関税還付の恩恵を受けたことから、今年の見通しを引き上げた。「当社のビジネスは好調です」とCFOのジョン・デイビッド・レイニー氏はCNBCに語った。 「私たちは進歩していることに本当に満足しています。」",
    bodyOriginal: `Walmart on Thursday posted quarterly sales that beat Wall Street estimates and raised its outlook for the year, as it saw another strong quarter of e-commerce growth and benefited from tariff refunds.
"Our business is strong," CFO John David Rainey told CNBC. "We feel really good about the progress we're making."
The retailer said revenue rose 5.9% in its fiscal second quarter as e-commerce sales jumped 23% globally. Walmart also said U.S. comparable sales grew 2.6%, offset in part by a 0.8% headwind in its health and wellness business as price caps on certain drugs took effect. That was less than the 3.5% increase Wall Street expected, according to FactSet.
Shares of Walmart sank roughly 6% in premarket trading Thursday.
For the third quarter, Walmart said it expects net sales to increase between 3% and 3.75% and adjusted earnings per share to be between 62 cents and 64 cents.
The retailer expects net sales to increase between 4% and 5% for the year, compared with a previous outlook of between 3.5% and 4.5% growth. Walmart also anticipates adjusted earnings will be between $2.80 and $2.87 per share, compared with the prior guidance of between $2.75 and $2.85 per share.
Rainey told CNBC the company was eligible to receive roughly $2.9 billion in tariff refunds, and it has not yet gotten back less than $100 million of that total. Rainey said the company plans to use those funds to lower prices for consumers, and that impact will be seen in the third quarter.
He added that Walmart also expects to incur just over $2 billion of "incremental cost headwinds related to higher fuel prices this year."
Programming note: Walmart CFO John David Rainey will speak to CNBC's "Squawk on the Street" at 10 a.m. ET. Watch live on CNBC and CNBC+.
Walmart's efforts to lower prices come as many shoppers have cut back on spending as they feel a strain from high fuel and food costs. The company is typically well positioned to weather pullbacks due to its value reputation and its scale as the largest U.S. retailer.
Rainey said Walmart continues to see consumers stretched thin, especially with higher gas prices. It's lowering prices across categories, including beef, he added.
"But consumers are still spending, and real wage growth is keeping pace, and so they've been very resilient in this environment," Rainey told CNBC. "But all that said, we would love to be able to bring prices down more and see less pressure on their wallets."
Here's how the company performed in its fiscal second quarter compared with what Wall Street was expecting, based on a survey of analysts by LSEG:
- Earnings per share: 81 cents adjusted, it was not immediately clear if it compared to the 74 cents expected
- Revenue: $187.94 billion vs. $186.77 billion expected
For the three-month period ending July 31, Walmart reported net income of $6.37 billion, or 80 cents per share, compared to $7.03 billion, or 88 cents per share, in the year-ago period. Excluding the impact of a loss on investments and including a benefit from what it called a tax matter, Walmart reported adjusted earnings per share of 81 cents. The company's gross profit rate grew to 25.4%, boosted by the tariff refund benefit.
Total revenue climbed to $187.94 billion from $177.40 billion in the prior-year period.
The results come as Walmart posts a stretch of solid growth, fueled by gains in segments like pickup and delivery, its third-party marketplace and advertising. The discounter has gained market share with higher-income customers in recent years as it tries to make shopping more convenient and adds perks to its Walmart+ membership, an Amazon Prime competitor.
Walmart said companywide membership fee revenue jumped 17%, with net adds for Walmart+ hitting a high for a second quarter. Sam's Club U.S. saw net sales of $25.7 billion for the quarter, up 8.8% from the previous year, as membership fees climbed 6%.
Meanwhile, Walmart said its global advertising revenue climbed 38%.
In the U.S., Walmart reported net sales of $125.2 billion compared to $120.9 billion the year prior. Internationally, the company saw $35.2 billion in net sales, compared with $31.2 billion last year. It said its global inventory was up 6.7% for the quarter.
Rainey said a significant portion of that inventory was related to more expensive and elevated brands as Walmart saw the biggest component of its market share gains coming from the high-income consumer.
While its grocery segment saw mid-single digit percentage point growth, health and wellness saw a low single-digit decline for the quarter. General merchandise revenue was up slightly due to strength in toys and fashion, furniture and private label.`,
    bodyJa: `ウォルマートは木曜日、四半期売上高がウォール街の予想を上回り、電子商取引が四半期でも堅調に成長し、関税還付の恩恵を受けたことから、今年の見通しを引き上げた。
「当社のビジネスは好調です」とCFOのジョン・デイビッド・レイニー氏はCNBCに語った。 「私たちは進歩していることに本当に満足しています。」
同社は、電子商取引の売上高が世界的に23％増加したため、会計年度第2四半期の売上高は5.9％増加したと述べた。ウォルマートはまた、米国の比較対象売上高は２．６％増加したが、特定の医薬品の価格上限が適用されたことによる健康・ウェルネス事業への０．８％の逆風によって部分的に相殺されたと述べた。ファクトセットによると、これはウォール街が予想していた3.5％増を下回った。
ウォルマートの株価は木曜日の市場前取引で約６％下落した。
ウォルマートは第３・四半期について、純売上高が３％─３．７５％増加し、調整後１株当たり利益が６２セント─６４セントになると予想していると述べた。
この小売業者は、年間の純売上高が 3.5% ～ 4.5% の成長であるという従来の見通しと比較して、4% ～ 5% 増加すると予想しています。ウォルマートはまた、調整後利益が1株当たり2.80ドルから2.87ドルになると予想しているが、これまでの見通しは1株当たり2.75ドルから2.85ドルの間だった。
レイニー氏はCNBCに対し、同社は約29億ドルの関税還付を受ける資格があるが、まだ返還されていないのはそのうち1億ドル未満だと語った。レイニー氏は、同社はこれらの資金を消費者向けの価格引き下げに活用する予定で、その影響は第３・四半期に現れるだろうと述べた。
同氏はまた、ウォルマートは「今年の燃料価格高騰に関連したコスト増の逆風」が20億ドル強発生すると予想していると付け加えた。
番組編成メモ: ウォルマート CFO のジョン・デイビッド・レイニー氏が東部時間午前 10 時から CNBC の「Squawk on the Street」で講演します。 CNBC と CNBC+ でライブをご覧ください。
ウォルマートの値下げ努力は、多くの買い物客が燃料費や食費の高さに負担を感じて支出を控えている中で行われている。同社は、その価値の評判と米国最大の小売業者としての規模により、通常、景気後退を乗り越えるのに有利な立場にあります。
レイニー氏は、特にガソリン価格の高騰により、ウォルマートは引き続き消費者が逼迫していると述べた。牛肉を含むあらゆるカテゴリーで価格を引き下げていると同氏は付け加えた。
「しかし、消費者は依然として支出を続けており、実質賃金の伸びもペースを維持しているため、消費者はこの環境において非常に回復力がある」とレイニー氏はCNBCに語った。 「とはいえ、私たちは価格をさらに引き下げて、彼らの財布への負担を軽減できることを願っています。」
LSEGによるアナリストへの調査に基づいた、ウォール街の予想と比較した同社の会計年度第2四半期の業績は次のとおりです。
- 1 株当たり利益: 調整後 81 セント、予想の 74 セントと比較するかどうかはすぐには不明
- 収益: 1,879.4億ドル対予想1,867.7億ドル
7月31日までの3カ月間、ウォルマートは純利益が63億7000万ドル（1株あたり80セント）と報告したが、前年同期は70億3000万ドル（1株あたり88セント）だった。投資損失の影響を除き、いわゆる税金問題による利益を含めると、ウォルマートは調整後の1株当たり利益を81セントと報告した。関税還付の恩恵もあり、同社の粗利率は２５．４％に増加した。
総収益は前年同期の1,774億ドルから1,879億4,000万ドルに増加しました。
この結果は、ウォルマートがピックアップ・アンド・デリバリー、サードパーティ・マーケットプレイス、広告などの分野での利益を原動力として堅調な成長を続けている中でもたらされたものである。このディスカウント業者は、ショッピングをより便利にし、Amazon Primeの競合企業であるWalmart+会員に特典を追加しようとしているため、近年、高所得層の顧客の間で市場シェアを獲得している。
ウォルマートは、全社の会費収入が17％増加し、ウォルマート＋の純増額が第2四半期としては最高を記録したと発表した。サムズクラブ US は、会費が 6% 上昇したため、同四半期の純売上高は 257 億ドルとなり、前年比 8.8% 増加しました。
一方、ウォルマートは世界の広告収入が38％増加したと発表した。
米国では、ウォルマートの純売上高は前年の 1,209 億ドルに対して 1,252 億ドルと報告されました。海外における同社の純売上高は、昨年の312億ドルに対し、352億ドルとなった。同四半期の世界在庫は6.7％増加したと発表した。
レイニー氏は、ウォルマートが市場シェア拡大の最大の要素は高所得消費者によるものだと考えているため、その在庫のかなりの部分がより高価で高級なブランドに関連していると述べた。
同四半期の食料品部門は一桁台半ばの成長率を記録したが、健康とウェルネス部門は一桁台前半の減少となった。一般商品の売上高は、玩具とファッション、家具、プライベートブランドの好調により若干増加しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/walmart-wmt-q2-2027-earnings.html",
    publishedAt: "2026-08-20T12:48:54+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "a-420-camera-for-10-china-s-young-consum-a954a305",
    title: "A $420 camera for $10: China’s young consumers would rather rent than buy. It’s a problem for the government and the economy.",
    titleJa: "420 ドルのカメラを 10 ドルで購入: 中国の若い消費者は、購入するよりもレンタルしたいと考えています。それは政府と経済にとって問題だ。",
    summaryJa: "中国人の若者はカメラ、ドローン、キャンプ用品を購入する代わりにレンタルしている。これはお金を節約する賢い方法だが、消費者に支出を促す中国政府の取り組みに対する最新の課題でもある。",
    bodyOriginal: `Young Chinese are renting cameras, drones and camping gear instead of buying them. It’s a clever way to save money — but also the latest challenge to Beijing’s effort to get consumers spending.`,
    bodyJa: `中国人の若者はカメラ、ドローン、キャンプ用品を購入する代わりにレンタルしている。これはお金を節約する賢い方法だが、消費者に支出を促す中国政府の取り組みに対する最新の課題でもある。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/test-driving-that-drone-or-just-renting-why-the-chinese-government-needs-to-know-07ca4d1b?mod=mw_rss_topstories",
    publishedAt: "2026-08-20T11:44:00+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.mktw.net/im-97422812",
    readTime: 2,
  },
  {
    id: "danone-1bn-takeover-of-huel-approved-by-5d3b644c",
    title: "Danone €1bn takeover of Huel approved by watchdog",
    titleJa: "ダノン、10億ユーロでフエル買収を監視当局が承認",
    summaryJa: "ダノン、10億ユーロでフエル買収を監視当局が承認- 公開されました",
    bodyOriginal: `Danone €1bn takeover of Huel approved by watchdog
- Published
Danone's takeover of the British meal supplement maker Huel has been cleared by the competition watchdog.
The Competition and Markets Authority (CMA) has given the €1bn (£864m) deal the green light following a review.
Huel, based in Hertfordshire, was founded by Julian Hearn in 2015 to provide nutritionally complete food products, aimed at reducing meal times and providing essential nutrients.
The French food and drink firm said the acquisition will help it grow in the nutrition sector, while for Huel it will help the brand's growth ambitions and drive its international expansion.
Danone agreed to buy Huel in March.
The company owns a portfolio of products in the UK, including baby milk brands Aptamil and Cow & Gate, yoghurt brands Activia and Actimel, and water brands Evian and Volvic.
The Huel brand has seen rapid growth over the years, expanding its range to include ready meals, nutrition bars, and health drinks, all of which are plant-based.
Dragons' Den star and podcaster Steven Bartlett was previously a director of the nutrition brand.
The company has previously got into hot water with the UK advertising watchdog, which has banned some of its adverts for making "misleading" claims.
One such advert made misleading claims about the cost savings associated with replacing a normal diet with meal replacement shakes, the watchdog said.
The CMA gave interested parties the opportunity to comment on the deal over potential concerns about whether it could lessen competition in the market.
The regulator's decision to clear the merger means it is satisfied it can go ahead in its current form.
Danone and Huel have been approached for comment.
Do you have a story suggestion for Beds, Herts or Bucks? Contact us below.
Get in touch
Your Voice
Follow Beds, Herts and Bucks news on BBC Sounds, Facebook, external, Instagram, external and X, external.
Related topics
- Published23 March
- Published25 September 2024`,
    bodyJa: `ダノン、10億ユーロでフエル買収を監視当局が承認
- 公開されました
ダノンによる英国の食事補助食品メーカー、ヒューエルの買収が、競争監視団体によって許可された。
競争・市場庁（CMA）は審査を経て、10億ユーロ（8億6,400万ポンド）の取引にゴーサインを出した。
ハートフォードシャーに拠点を置く Huel は、食事時間を短縮し、必須栄養素を提供することを目的として、栄養的に完全な食品を提供するために、2015 年にジュリアン・ハーンによって設立されました。
フランスの食品・飲料会社は、この買収が栄養分野での成長に役立つ一方、Huelにとってはブランドの成長目標を支援し、国際展開を推進するだろうと述べた。
ダノンは3月にフエルの買収に合意した。
同社は英国でベビーミルクのブランドであるアプタミルとカウ＆ゲート、ヨーグルトのブランドのアクティビアとアクティメル、水のブランドのエビアンとボルヴィックなどの製品ポートフォリオを所有しています。
Huel ブランドはここ数年で急速に成長し、すべて植物ベースの調理済みの食事、栄養バー、健康飲料を含むまで範囲を拡大しました。
ドラゴンズデンのスターでポッドキャスターのスティーブン・バートレットは、以前は栄養ブランドのディレクターを務めていました。
同社は以前、「誤解を招く」主張を行っているとして一部の広告を禁止した英国の広告監視機関と激しい衝突を起こした。
監視団体によると、そのような広告の1つは、通常の食事をミールリプレイスメントシェイクに置き換えることに伴うコスト削減に関する誤解を招くような主張をしていたという。
CMAは、市場の競争を弱める可能性があるかどうかという潜在的な懸念を理由に、利害関係者にこの取引についてコメントする機会を与えた。
規制当局が合併を承認するという決定を下したということは、現在の形で合併を進めることができると満足していることを意味する。
ダノンとフエルにはコメントを求められた。
ベッド、ハーツ、バックスのストーリーに関する提案はありますか?下記までお問い合わせください。
連絡する
あなたの声
BBC Sounds、Facebook（外部）、Instagram（外部）、X（外部）で Beds、Hearts and Bucks のニュースをフォローしてください。
関連トピック
- 3 月 23 日発行
- 2024 年 9 月 25 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/crl7y671w8go?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T11:41:01+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/460d/live/b579d640-9c7a-11f1-8413-79a38c9f8909.jpg",
    readTime: 3,
  },
  {
    id: "how-micron-s-50-billion-boise-buildout-i-04920a09",
    title: "How Micron's $50 billion Boise buildout is reshaping its hometown",
    titleJa: "マイクロンの500億ドルをかけてボイシ市を再構築することで地元をどのように再構築するか",
    summaryJa: "デイブ・ペッツォは、1980 年代からアイダホ州ボイジーで資産管理者を務めています。彼のビジネスは、度重なる不況、ドットコムバブルの崩壊、2008 年の金融危機を乗り越えてきました。ペッツォ氏の45年にわたるキャリアのほとんどにおいて、故郷のコンピュータメモリメーカーであるマイクロン社は退屈な企業向けテクノロジー企業であり、同氏の言葉を借りれば「ひどい投資」だった。",
    bodyOriginal: `Dave Petso has been a wealth manager in Boise, Idaho since the 1980s. His business has survived multiple recessions, the bursting of the dot-com bubble and the 2008 financial crisis.
For most of Petso's 45-year career, Micron, the hometown maker of computer memory, has been a boring enterprise tech company and, in his words, a "terrible investment."
But almost four years into the artificial intelligence craze, the sleepy semiconductor company is one of the hottest names on the planet, turning many of Petso's clients into sudden millionaires. A big part of Petso's job has become helping Micron employees diversify after a more than tenfold increase in the stock since the end of 2024 lifted the company's market cap past $1 trillion.
"You've got a boatload of money now, and it's all tied up in one company," Petso said in an interview. Where clients had been figuring out what to do with some $20,000 worth of stock, "now we're talking about hundreds of thousands or millions of dollars," he said.
Across Boise, a Mountain West city of about 250,000 residents that's best known for outdoor adventures and the blue turf football field at Boise State University, the Micron boom is showing up in the form of job growth, new construction projects, a bustling dining scene and an influx in new residents.
Micron has broken ground on two new chip manufacturing facilities that are expected to create more than 17,000 new jobs in the area. That includes 3,500 at Micron, which currently employs about 7,000 people in and around Boise.
With the city's rapid expansion comes plenty of annoyances. Residents complain of frequent traffic jams around town or on Interstate 84, rising housing costs and a rush of people from California and elsewhere altering the local culture and landscape. Average rental prices in Boise have climbed 4.3% in the past year, while average prices nationwide have dropped, according to Zillow.
"One of Boise's competitive advantages was our low cost of living," said Jason Crawforth, a lifelong resident of Boise who's been building tech companies in the area for almost 35 years. But Crawforth said that while he's seeing his net worth go up from an investment in Micron, "there's a large demographic of our community that doesn't have a direct benefit from that."
CNBC spoke to residents, business owners, real estate agents and others in the Boise area about the recent boom, its impact on the city and what could still be coming as Micron embarks on a $50 billion expansion plan. They collectively portray the city as an unexpected winner in the global AI buildout, one that's trying to hang onto its identity while not becoming overreliant on a technology with a long history of boom-and-bust cycles.
While the trajectory still points up and to the right, Micron shares plunged 29% in July, their worst month since 2002. Shareholders hope it was just a corrective blip, and not a sign of things to come. The stock is up 14% so far in August.
Boise and the global memory race
Micron was founded in Boise nearly 50 years ago in the basement of a dental office. By 1981 its first chip fabrication plant was up and running there, pumping out general-purpose memory chips known as DRAM. In its latest quarter, DRAM accounted for 76% of Micron's total revenue.
DRAM is also the type of chips that are stacked to make high-bandwidth memory, or HBM, which is then added to the powerful processors used for AI.
As HBM gobbles up the world's supply of DRAM, it's caused a global shortage and skyrocketing memory costs, leading to higher prices across the board, even for consumer electronics like Apple's MacBooks and iPads.
All three of the world's top HBM suppliers — market leader SK Hynix, Samsung and Micron — are building huge new plants to try and meet demand. SK Hynix and Samsung are constructing mega-fabs in their home country of South Korea.
They've all been handsomely rewarded by the stock market despite the July pullback. Micron leads the pack, up almost 670% in the past year, followed by SK Hynix at about 470% and Samsung at over 250%.
The rally turned Micron CEO Sanjay Mehrotra, a nine-year veteran of the company, into a billionaire earlier this year, though last month's selloff pushed him below that mark.
For Mehrotra, Boise represents a big opportunity to help turn his company into a hotbed for U.S. manufacturing. The first of Micron's two new Boise fabs is scheduled to come online in 2027. It will be the country's first front-end factory for manufacturing leading-edge memory. Most of Micron's top-end memory is currently produced in Taiwan, Japan and Singapore.
The site also includes utility and water-treatment buildings to support the resource-intensive process of making chips. Local utility Idaho Power told CNBC in a statement that it "does not expect large-load growth, including Micron's expansion, to increase electric bills for other customers."
Additional AI-driven growth in the area is coming from Meta, which is building an $800 million data center 20 miles southwest, in Kuna, Idaho, that it says will create about 100 operational jobs. There's a flurry of new offices from Micron suppliers like Lam Research and cleanroom builder Exyte, plus contractors coming in for lucrative jobs helping to build Micron's fabs.
With Boise, and an even bigger memory fab campus coming to Clay, New York, Micron's long-term goal is to produce 40% of its DRAM in the U.S. It plans to spend $250 billion through 2035 to get there, with the help of up to $6.2 billion of CHIPS Act funds, which were granted under the Biden administration.
Micron is part of the fabric of Boise's economy, alongside other local legends like the Albertsons grocery chain and the potato empire of J.R. Simplot, who was one of Micron's first investors.
Today, the memory maker is among Ada County's leading employers, after Boise State and the region's health system.
"It's always been something that we've been around, but of course recently, with Boise, Idaho being a very small market, it's probably one of our largest success stories that we've ever had," said JT Belnap, founder of Treasure Valley Financial Planning, which is now almost exclusively focused on managing Micron employees' wealth.
Belnap told CNBC that his firm's phones are "continuing to ring" with requests from Micron employees who are close to retirement.
Because of the stock appreciation, some are moving up their timelines to exit the workforce from three or four years to one or two, Belnap said. To take advantage of tax benefits, others are donating stock to charities. And plenty are taking some profit for a dream purchase, like one of Belnap's clients who recently bought an $80,000 truck he'd always wanted.
"What I've learned doing financial planning for as long as I have is when anyone comes into some real wealth that's kind of a sudden thing, you need to allow them to have a little bit of fun," Belnap said.
Selling stock to buy jewelry, homes
About 9 miles east of Belnap's office, a very different kind of business is noticing a similar trend. Lisa Zimowsky, owner of jewelry boutique The Diamond Girls, said her sales are up 60% for the year.
"I do know of several people that have sold some stock and bought with us," Zimowsky said. "Usually it's the people that got a quarterly bonus when the stock was $150," or less than one-sixth its current price.
"The Boise economy is super strong," Zimowsky added. "I think Micron's been a big part of that."
Then there's the real estate market.
Sheila Smith, an agent in the area, said she's seen more prospective buyers and fewer listings for homes in the southeast part of the city, near Micron's headquarters. Smith said there's so much construction that some Micron contractors involved with the new fabs are purchasing homes.
"Typically if somebody knows they're only going to be here temporarily, for an interim-type job, such as the engineers, they don't look to buy," Smith said in an interview. "They are coming here and they are buying."
Mortgage broker Gerald Robinson said that over about a month-long stretch, he consulted with four Micron clients who were looking to buy homes.
"We're seeing a lot of stock options being executed right now, and people [are] purchasing," said Robinson, CEO of 1st Choice Mortgage.
One of the two clients who ended up buying a house did so as an investment to run an Airbnb-style property, Robinson said. The other was a first-time homebuyer in her early 20s.
Two of the prospects didn't end up needing Robinson's help, as they opted to sell stock and buy properties in cash, Robinson said.
Micron told CNBC that stock offerings are a key part of the company's strategy to recruit and retain talent. Through the first three quarters of this fiscal year, Micron had recorded $954 million in stock-based compensation, up more than 100% from three years ago.
"We do lean into stock awards very heavily," said April Arnzen, Micron's chief people officer and an Idaho native who's worked at the company for 27 years. "We want our team members to be owners in the company and share in the success of the company."
It's not just employees who have gotten in on the action.
As a longtime part of the Boise tech community, Crawforth bought Micron shares when they traded around $16 each, and said he still owns north of 1,500 to this day. That's a stake worth over $1.4 million.
But the growth led to an accidental imbalance in the family.
"I made a mistake – I bought some for my niece, but not for my nephew," Crawforth said. "All of a sudden, my niece's investment to help her put a down payment on a house when she's old enough is significantly higher than my nephew."
Crawforth said he's got a "moral dilemma" as he figures out "how to rectify that situation."
His partner also bought, but at a higher price, and was able to pay off a portion of car debt after recently cashing in her position at around $1,200 a share.
A city's new chapter
With so much new wealth and with demand rising for homes, concerns are spreading that Boise is becoming unaffordable for those not boosted by the Micron effect. Median home sale prices in Boise are up 2.9% over the past year as of June, compared to a 1.2% average increase nationwide, according to Redfin.
"Now we're just seeing the lower incomes maybe getting a little bit more and more priced out, because wages may not be keeping up with home prices," Robinson said.
Ada County has swelled by around 19% since 2020, adding close to 95,000 people, according to estimates from Compass Idaho. Statewide, Idaho's growth is the fastest in the nation over a similar period. People have flocked there from California, Washington and Oregon, taking advantage of Boise's lower cost of living, relatively mild winters, and lively outdoor scene.
The demographics are noticeably changing, Zimowsky said.
"Five years ago, nobody had a designer purse here, nobody cared, nobody even knew what Louis Vuitton was," she said. "Now everybody's carrying them."
For food lovers and concert goers, Boise's growth has taken the city up a notch. Boise State's Albertsons Stadium, home to the iconic blue turf, hosted performances from Post Malone and Jelly Roll last year, while Jason Aldean and the Alabama Shakes came through town more recently.
"The amenities here have changed a lot," said Clark Krause, executive director of the Boise Valley Economic Partnership. Residents now have "access to things that someone living in a city would enjoy."
Long before he became the first Idaho chef to win a James Beard award, Kris Komori decided Boise was where he wanted to raise his growing family. When he moved to Boise from Portland, Oregon, in 2013, there weren't very many hotels and high-rise buildings dotting the landscape, and the dining scene was much quieter.
"Everyone was like, 'What are you going to do out in Idaho?'" said Komori, the co-owner and executive chef at KIN Boise, which is located downtown. Now, "you can't go a block without there being some sort of construction going on."
KIN Boise, where a seasonal prix fixe meal runs $130 per person, is one of the top dining destinations in town, and a hot spot for Micron employees, especially when they're taking out clients, Komori said.
"They just frequent us much more now," Komori said. "That's a compliment to us because they want to kind of show off Boise, and we're on the list for that."
Komori said that every month, more restaurants − small businesses and chains alike − are opening downtown, and he's increasingly seeing more outside the city center.
Scaling challenges
Petso, who moved to Boise in 1980 when the city had about one-third its current population, said he appreciates the vibrancy despite some of the drawbacks.
"It's so expensive to go out to dinner, but they're all packed," Petso said, of the restaurants. "You just walk downtown in Boise and just go, 'This is amazing.'"
Micron is well aware of the pressure created by such rapid expansion, which will only intensify with the thousands of new people the company is still planning to hire.
"When you're scaling that many people in a short amount of time, there certainly are challenges such as transportation, such as housing," Arnzen said. She added that the company has been partnering with the state and county and at the "local level on solutions to make sure we're staying a step ahead."
Arnzen said the company has made commitments around housing and is looking at "a lot of different roadway investment opportunities." The company also built a childcare center for employees in partnership with the YMCA, and is planning to spend $75 million on workforce, education and community development across the state over the next decade.
Additionally, Micron has a chip camp for middle school students, a Micron-sponsored training fab at Boise State, and an apprenticeship program at the College of Western Idaho in nearby Nampa.
"There are at least five buildings with the Micron name on those two campuses," Arnzen said. "Micron has been investing in those education institutions for years, and of course we're not going to stop. We need more talent."
Beyond the sprawl of cranes, bumper-to-bumper traffic on I-84 and Micron's community initiatives, there's growing concern about the sustainability of the memory boom.
Crawforth got a taste of the risk when the stock unwound in July.
"That's probably 600 grand for me personally in net worth that I've seen go away," Crawforth said, speaking of last month's stock drop. He was quick to note that over a three-month stretch it was up 50%, so "it's still a win."
For Petso, the moment has clear parallels to the last time Micron millionaires were showing up at his office. It was the dot-com bubble of 1999, and tech mania was everywhere. Micron shares jumped more than 50% that year after almost doubling the year prior.
Some of Petso's clients refused to sell even a portion of their holdings. The stock lost three-quarters of its value over the next three years, a crash that Petso said left "deep scars" for everyone involved.
It was a painful lesson, and one that he'd rather not have his existing client base learn the hard way.
"Trying to get people to trim and get out is really the discussions we're having now," Petso said. "You guys are killing it out there, but I've been around a long time. You were killing it in 1999 too."
WATCH: Exclusive look inside SK Hynix's $720 billion AI memory expansion`,
    bodyJa: `デイブ・ペッツォは、1980 年代からアイダホ州ボイジーで資産管理者を務めています。彼のビジネスは、度重なる不況、ドットコムバブルの崩壊、2008 年の金融危機を乗り越えてきました。
ペッツォ氏の45年にわたるキャリアのほとんどにおいて、故郷のコンピュータメモリメーカーであるマイクロン社は退屈な企業向けテクノロジー企業であり、同氏の言葉を借りれば「ひどい投資」だった。
しかし、人工知能のブームが始まってからほぼ 4 年が経ち、この眠そうな半導体会社は地球上で最も注目を集める企業の 1 つとなり、ペッツォの顧客の多くを突然億万長者に変えました。 2024年末以来株価が10倍以上に上昇し、時価総額が1兆ドルを超えたマイクロンの後、ペツォの仕事の大きな部分はマイクロン従業員の多様化を支援することだった。
ペツォ氏はインタビューで、「今では大量の資金を手に入れており、それはすべて1つの会社に結びついている」と語った。顧客らは約2万ドル相当の株式をどうするか考えていたが、「今では数十万ドル、あるいは数百万ドルの話になっている」と同氏は語った。
アウトドア アドベンチャーとボイシ州立大学の青い芝のフットボール場で最もよく知られる住民約 25 万人のマウンテン ウェストの都市ボイシでは、マイクロン ブームが雇用の増加、新しい建設プロジェクト、にぎやかな飲食シーン、新しい住民の流入という形で現れています。
マイクロンは、この地域に 17,000 人以上の新たな雇用を生み出すことが期待される 2 つの新しいチップ製造施設の着工しました。その中には、現在ボイジーとその周辺で約7,000人を雇用しているマイクロン社の3,500人も含まれる。
都市の急速な拡大に伴い、多くの煩わしさが生じています。住民らは、町周辺や州間高速道路84号線で頻繁に起こる交通渋滞、住宅費の高騰、カリフォルニアなどからの流入で地元の文化や景観が変わっていると不満を抱いている。 Zillowによると、ボイジーの平均賃貸価格は過去1年間で4.3％上昇したが、全国の平均価格は下落した。
「ボイジーの競争上の利点の一つは、生活費の安さでした」と、生涯ボイジーに居住し、ほぼ 35 年間この地域でテクノロジー企業を立ち上げてきたジェイソン・クロフォース氏は語った。しかしクロフォース氏は、マイクロンへの投資によって自身の純資産が増加しているのを実感している一方で、「我々のコミュニティにはそこから直接の恩恵を受けていない層が大勢いる」と語った。
CNBCはボイシ地域の住民、事業主、不動産業者などに最近のブーム、その都市への影響、そしてマイクロンが500億ドルの拡張計画に乗り出す中で今後何が起こるかについて話を聞いた。これらは集合的に、この都市が世界規模の AI 構築における予期せぬ勝者として描かれており、好不況サイクルの長い歴史を持つテクノロジーに過度に依存せずに、そのアイデンティティを維持しようとしている都市である。
軌道は依然として右上がりだが、マイクロン株は7月に29％急落し、2002年以来最悪の月となった。株主らは、これが単なる調整の急落であり、今後の事態の前兆ではないと期待している。株価は8月時点で14％上昇している。
ボイシと世界的な記憶力競争
マイクロンは、約 50 年前にボイシの歯科医院の地下で設立されました。 1981 年までに最初のチップ製造工場が稼働し、DRAM として知られる汎用メモリ チップを生産していました。最新四半期では、DRAMがマイクロンの総収益の76％を占めた。
DRAM は、高帯域幅メモリ (HBM) を作成するために積層され、AI に使用される強力なプロセッサに追加されるタイプのチップでもあります。
HBMが世界のDRAM供給を食い荒らしているため、世界的な不足とメモリ価格の高騰を引き起こし、AppleのMacBookやiPadなどの家庭用電化製品も含めて全体的な価格上昇につながっている。
世界トップの HBM サプライヤーである市場リーダーの SK Hynix、Samsung、Micron の 3 社はすべて、需要に応えようと大規模な新しい工場を建設しています。 SKハイニックスとサムスンは母国の韓国に巨大ファブを建設している。
彼らは皆、7月の反動にも関わらず株式市場からかなりの恩恵を受けている。 Micron が過去 1 年間で約 670% 増加して群をリードし、SK Hynix が約 470%、Samsung が 250% 以上で続きます。
この集会により、マイクロンに9年間在籍したベテランのサンジェイ・メロトラ最高経営責任者（CEO）は今年初めに億万長者になったが、先月の株価下落でその水準を下回った。
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.
マイクロンはCNBCに対し、株式募集は人材を採用し維持するための同社の戦略の重要な部分であると語った。今年度の最初の 3 四半期までに、マイクロンは株式ベースの報酬として 9 億 5,400 万ドルを記録しており、これは 3 年前と比べて 100% 以上増加しました。
「私たちは株式報酬に非常に重点を置いています」とマイクロンの最高人事責任者であり、同社に27年間勤務するアイダホ州出身のエイプリル・アーンゼン氏は語った。 「私たちはチームメンバーが会社のオーナーとなって会社の成功を分かち合いたいと考えています。」
この活動に参加したのは従業員だけではありません。
ボイシの技術コミュニティに長年携わってきたクロフォース氏は、マイクロン株が1株あたり16ドルで取引されていたときに購入し、現在に至るまで1,500株以上を保有しているという。それは140万ドル以上の価値のある賭け金です。
しかし、その成長は家族に予期せぬ不均衡をもたらしました。
「私は間違いを犯しました。姪のために購入しましたが、甥には購入しませんでした」とクロフォースさんは語った。 「突然、姪が十分な年齢になったときに家の頭金を準備するための投資額が、甥よりもかなり高額になりました。」
クロフォースさんは、「状況をどう是正するか」を模索する中で「道徳的ジレンマ」を抱えていると語った。
彼のパートナーも購入しましたが、価格は高かったため、最近1株あたり約1,200ドルのポジションを現金化し、自動車負債の一部を返済することができました。
都市の新たな章
新たな富が増え、住宅需要が高まっていることから、マイクロン効果で後押しされていない人々にとってボイシには手が届かなくなりつつあるのではないかとの懸念が広がっている。レッドフィンによると、ボイシの住宅販売価格の中央値は6月時点で過去1年間で2.9％上昇しているのに対し、全国平均は1.2％上昇している。
ロビンソン氏は、「賃金が住宅価格に追いついていない可能性があるため、低所得層が少しずつ値上がりしつつあるのではないかと考えている」と述べた。
コンパス・アイダホ州の推計によると、エイダ郡は2020年以来約19％増加し、人口が9万5000人近く増えた。州全体では、アイダホ州は同様の期間で全米で最も急速な成長を遂げています。ボイシの安い生活費、比較的穏やかな冬、活気のあるアウトドアシーンを利用して、カリフォルニア、ワシントン、オレゴン州から人々が集まってきました。
ジモフスキー氏によると、人口動態は著しく変化しているという。
「5年前、ここでは誰もブランド財布を持っていなかったし、気にする人もいなかったし、ルイ・ヴィトンが何なのかさえ誰も知りませんでした」と彼女は語った。 「今ではみんながそれを持ち歩いています。」
グルメ愛好家やコンサートファンにとって、ボイシの成長は街をワンランク上のものにしました。象徴的な青い芝生があるボイシ州のアルバートソンズ スタジアムでは、昨年ポスト マローンとジェリー ロールのパフォーマンスが開催され、最近ではジェイソン アルディーンとアラバマ シェイクスが街を訪れました。
ボイシバレー経済パートナーシップのエグゼクティブディレクター、クラーク・クラウス氏は「ここの設備は大きく変わった」と語った。住民は現在、「都市に住んでいる人が享受できるものにアクセスできる」ようになりました。
アイダホ州初のジェームス・ビアード賞を受賞したシェフになるずっと前に、クリス・コモリさんは、成長する家族を育てたい場所はボイジーだと決めていました。彼が 2013 年にオレゴン州ポートランドからボイシに移住したとき、風景に点在するホテルや高層ビルはそれほど多くなく、ダイニングシーンははるかに静かでした。
「誰もが『アイダホ州で何をするつもりだ？』という感じでした」とダウンタウンにあるKIN Boiseの共同オーナー兼エグゼクティブシェフの小森氏は語った。現在、「何らかの工事が行われていない限り、1ブロック進むことはできません。」
KIN ボイシでは、季節のプリフィクスミールが 1 人あたり 130 ドルで提供されており、市内でもトップクラスの食事場所の 1 つであり、特に顧客を連れ出すときにマイクロンの従業員にとって人気のスポットであると小森氏は語った。
「彼らは今、私たちを頻繁に訪れるようになりました」と小森さんは語った。 「これは私たちにとって褒め言葉です。なぜなら彼らはボイシを誇示したいと思っているからです。そして私たちはそのためのリストに載っています。」
小森氏は、毎月、より多くのレストランが、中小企業もチェーン店も同様に、ダウンタウンにオープンしており、市の中心部の外でもますます多くのレストランを目にするようになっていると語った。
スケーリングの課題
ボイシの人口が現在の約3分の1だった1980年にボイシに移住したペツォ氏は、いくつかの欠点はあるものの、その活気を高く評価していると語った。
ペツォさんはレストランについて「外食するととても高いのに、どこも満席だ」と語った。 「ボイシのダウンタウンを歩いていて、『これはすごい』と思うだけです。」
マイクロンは、このような急速な拡大によって生じるプレッシャーを十分に認識しており、同社がまだ数千人を新たに雇用する予定であることから、プレッシャーはさらに強まるだろう。
「短期間でこれだけの人数を拡張する場合、住宅などの交通手段などの課題が必ず存在します」とアーンゼン氏は言う。同氏は、同社が州や郡と協力し、「確実に一歩先を行くための解決策について地方レベルで」協力していると付け加えた。
アルンゼン氏は、同社は住宅関連の取り組みを行っており、「さまざまな道路への投資機会」を検討していると述べた。同社はまた、YMCAと提携して従業員向けの保育センターを建設し、今後10年間で州全体の労働力、教育、地域開発に7,500万ドルを費やす予定である。
さらに、マイクロンは中学生向けのチップキャンプ、ボイシ州にマイクロン後援のトレーニングファブ、ナンパ近くのウェスタンアイダホ大学で見習いプログラムを行っています。
「これら 2 つのキャンパスには、マイクロンの名前が付いた建物が少なくとも 5 棟あります」とアーンゼン氏は述べた。 「マイクロンはこれらの教育機関に何年も投資しており、もちろん止めるつもりはありません。私たちはより多くの人材を必要としています。」
クレーンの無秩序な配置、州間高速道路 84 号線のバンパーからバンパーへの交通、マイクロンのコミュニティーの取り組み以外にも、メモリ ブームの持続可能性に対する懸念が高まっています。
クロフォース氏は7月に株式が巻き戻されたときにリスクを味わった。
先月の株価下落についてクロフォース氏は、「これは私個人にとって、おそらく600グランドの純資産が消えていくのを目にしたことになる」と語った。同氏は、3 か月連続で 50% 増加したため、「それでも勝利だ」とすぐに指摘しました。
ペツォにとって、この瞬間は、マイクロンの億万長者たちが最後に彼のオフィスに現れたときと明らかに似ている。 1999 年のドットコム バブルの頃、テクノロジーマニアはどこにでもいました。マイクロンの株価は前年比​​ほぼ２倍となった後、同年５０％以上急騰した。
ペツォの顧客の中には、保有株の一部であっても売却を拒否した人もいた。株価はその後3年間で価値の4分の3を失い、ペツォ氏によると、この暴落は関係者全員に「深い傷跡」を残したという。
それは痛みを伴う教訓であり、彼は既存の顧客ベースにつらい思いをさせたくないと考えていました。
ペツォ氏は、「人々に髪を切って外出させようというのが、私たちが今まさに議論していることだ」と語った。 「あなたたちはそこでそれを殺していますが、私は長い間そこにいます。あなたは1999年にもそれを殺していました。」
見る: SK Hynix の 7,200 億ドルの AI メモリ拡張の内部を独占的に紹介`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/micron-boise-chip-fab-expansion.html",
    publishedAt: "2026-08-20T11:00:01+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 10,
  },
  {
    id: "travelodge-boss-steps-down-after-securit-f7560ea0",
    title: "Travelodge boss steps down after security issues in rooms",
    titleJa: "トラベロッジ社長、客室のセキュリティ問題で辞任",
    summaryJa: "トラベロッジ社長、客室のセキュリティ問題で辞任- 公開されました",
    bodyOriginal: `Travelodge boss steps down after security issues in rooms
- Published
The boss of hotel chain Travelodge, Jo Boydell, is stepping down as the group grapples with safety issues after a sexual assault at one of its hotels.
A woman staying at a Maidenhead hotel was sexually assaulted in December 2022 after a man lied to staff to get a key card to her room, triggering an independent review of security measures at the hotel giant.
Kyran Smith was jailed for seven years and six months for the attack.
Boydell is being replaced on an interim basis by Ray Reidy, who said: "We remain focused on the safety and well-being of our guests and will continue taking the actions necessary to strengthen the business."
- Published23 April`,
    bodyJa: `トラベロッジ社長、客室のセキュリティ問題で辞任
- 公開されました
ホテルチェーン、トラベロッジの社長、ジョー・ボイデル氏は、同社のホテルの1つで性的暴行を受けたことを受け、グループが安全上の問題に取り組む中、辞任することになった。
2022年12月、メイデンヘッドのホテルに宿泊していた女性が、男性がスタッフに嘘をついて部屋のキーカードを手に入れた後、性的暴行を受けたことがきっかけで、ホテル大手の安全対策に関する独立した見直しが始まった。
カイラン・スミスは襲撃の罪で7年6か月の懲役刑を受けた。
ボイデル氏の後任には暫定的にレイ・レイディ氏が就任する予定で、同氏は「我々は引き続きゲストの安全と幸福に注力しており、ビジネスを強化するために必要な措置を講じ続ける」と述べた。
- 4 月 23 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c2k7e7zwxvyo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T06:51:43+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/bd3c/live/fea18690-9c63-11f1-827b-69a6492daae1.jpg",
    readTime: 2,
  },
  {
    id: "founder-of-collapsed-chinese-property-gi-c7e07c9d",
    title: "Founder of collapsed Chinese property giant Evergrande sentenced to life in prison",
    titleJa: "経営破綻した中国不動産大手恒大の創業者に終身刑を宣告",
    summaryJa: "経営破綻した中国不動産大手恒大の創業者に終身刑を宣告- 公開されました",
    bodyOriginal: `Founder of collapsed Chinese property giant Evergrande sentenced to life in prison
- Published
The founder of Evergrande, the property giant at the centre of China's housing market slump, has been sentenced to life in prison and had all of his personal property confiscated.
Hui Ka Yan pleaded guilty in April to several charges, including embezzlement of assets and corporate bribery.
Shenzhen Intermediate People's Court also fined his former companies a total of 15.82bn yuan (£1.73bn; $2.35bn) over multiple crimes, including falsifying records and concealing debt, according to state media.
Hui's sentencing marks a key moment in the fallout from Evergrande's collapse, which shook China's property sector and hit investors and domestic banks hard.
The court heard that Hui and his businesses "seriously disrupted" the Chinese property market, resulting in significant economic losses, state-controlled Xinhua News Agency reported.
Other Evergrande executives, including Hui's two sons Xu Zhijian and Xu Tenghe, were also sentenced to jail terms ranging from 22 months to 18 years, Xinhua said.
Once ranked Asia's richest man, Hui has seen his wealth and influence dwindle as his company unravelled.
Hui, also known as Xu Jiayin, rose from humble beginnings in rural China, where he was raised by his grandmother before venturing into property development and setting up Evergrande in 1996.
He oversaw the company's rapid rise through an aggressive expansion programme funded with large amounts of borrowed money.
Evergrande became China's biggest real estate developer, with a stock market valuation of more than $50bn (£36.7bn). Hui was once estimated to be Asia's richest person.
Evergrande: Why should I care about the crisis-hit Chinese property giant?
- Published25 August 2025
Anxious Chinese home buyers reel from Evergrande crisis
- Published29 September 2023
Crisis-hit China Evergrande ordered to liquidate
- Published29 January 2024
The firm was dealt a huge blow when Beijing introduced measures in 2020 to control debt in the country's property sector.
As the company struggled to meet interest payments on its debts it sold properties at huge discounts to stay afloat before collapsing in 2021.
In April, the court heard that the company had taken millions of dollars in pre-sale funding from potential house buyers that were not used for construction.
The money had instead been channelled to new property developments, resulting in hundreds of unfinished projects.
In March 2024, Hui was fined $6.5m and banned from China's capital market for life for his company overstating its revenue by $78bn.
Evergrande's stock market valuation shrank by 99% before its shares were removed from the Hong Kong exchange in August 2025 after more than a decade and a half of trading.
Evergrande's implosion has often been blamed for triggering a broader slump in China's property market that continues to weigh heavily on the economy.
At its height, Evergrande was the biggest firm in the country's real estate industry, which made up about a third of China's gross domestic product at the time.
The property market was a significant driver of growth and an important revenue source for local governments.
The industry's ongoing problems have weighed heavily on the world's second largest economy as several other major developers faced financial woes.`,
    bodyJa: `経営破綻した中国不動産大手恒大の創業者に終身刑を宣告
- 公開されました
中国の住宅市場低迷の中心である不動産大手、恒大の創設者が終身刑を言い渡され、個人財産のすべてが没収された。
ホイ・カー・ヤン氏は4月、資産横領や企業贈収賄など複数の罪で有罪を認めた。
国営メディアによると、深セン中級人民法院はまた、記録改ざんや債務隠蔽などの複数の犯罪で、同氏の元会社に総額158億2000万元（23億5000万ドル）の罰金を言い渡した。
ホイ氏の判決は、中国の不動産セクターを震撼させ、投資家や国内銀行に大きな打撃を与えた恒大破綻の余波における重要な瞬間を示している。
国営新華社通信によると、法廷は回氏とその企業が中国の不動産市場を「深刻に混乱させ」、多大な経済的損失をもたらしたとの審理を行った。
新華社通信によると、回氏の2人の息子、徐志建氏と徐騰和氏を含む他の恒大幹部も懲役22か月から18年の刑を宣告された。
かつてアジア一の富豪にランクされていたホイ氏は、会社の経営破綻に伴い富と影響力が減少するのを目にしてきた。
Xu Jiayinとしても知られるHui氏は、中国の田舎で貧しい家庭から立ち上がり、不動産開発に乗り出し、1996年に恒大を設立するまで祖母に育てられた。
彼は、多額の借入金を資金源とした積極的な拡大プログラムを通じて会社の急速な成長を監督しました。
恒大は中国最大の不動産開発業者となり、株式市場評価額は500億ドル（367億ポンド）を超えた。ホイ氏はかつてアジアで最も裕福な人物と推定されていた。
エバーグランデ: なぜ危機に見舞われた中国の不動産大手のことを気にする必要があるのでしょうか?
- 2025 年 8 月 25 日発行
不安を抱える中国の住宅購入者、恒大危機に動揺
- 2023 年 9 月 29 日公開
危機に見舞われた中国恒大に清算命令
- 2024 年 1 月 29 日公開
中国政府が2020年に不動産セクターの債務抑制策を導入した際、同社は大きな打撃を受けた。
同社は債務の利払いに苦戦する中、2021年に倒産するまで存続するために大幅な値引きで不動産を売却した。
4月に裁判所は、同社が住宅購入希望者から建設に使用されなかった数百万ドルの販売前資金を受け取ったとの審理を行った。
その資金は代わりに新しい不動産開発に注ぎ込まれ、その結果、何百もの未完成のプロジェクトが生じました。
2024年3月、ホイ氏は自社の売上高を780億ドル水増ししたとして、650万ドルの罰金と中国資本市場からの永久追放を言い渡された。
恒大の株式市場評価は、10年半以上の取引を経て2025年8月に香港取引所から削除されるまでに99％下落した。
恒大の爆縮は、経済に重くのしかかり続けている中国の不動産市場の広範な不況を引き起こしたとしばしば非難されてきた。
最盛期には恒大は中国の不動産業界最大の会社で、当時の中国国内総生産の約3分の1を占めていた。
不動産市場は成長の重要な原動力であり、地方自治体にとって重要な収入源でした。
他の大手開発会社数社が経営危機に直面する中、業界で進行中の問題は世界第2位の経済大国に重くのしかかっている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cd0x9mjjmgjo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T06:08:02+00:00",
    category: "マクロ経済",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/576f/live/42ba6840-9c52-11f1-b275-a98fc45a1940.jpg",
    readTime: 3,
  },
  {
    id: "trump-scaling-down-u-s-south-korea-drill-5139b108",
    title: "Trump scaling down U.S.-South Korea drills risks more than just joint military readiness",
    titleJa: "トランプ大統領の米韓演習縮小は共同軍事即応態勢以上のリスクをもたらす",
    summaryJa: "米韓軍事演習を大幅に縮小するというドナルド・トランプ大統領の動きは、両国の戦闘準備に影響を与えるだけでなく、同盟に対する米国の約束の信頼性を損なうことになるだろう。元韓国特殊戦軍司令官の千仁範中将は、「北朝鮮軍がウクライナで戦闘経験を積んでいる間に、乙支フリーダムシールドのような共同演習を縮小することは、危険な作戦上の断絶を生み出す」と率直に語った。",
    bodyOriginal: `President Donald Trump's move to sharply curtail U.S.-South Korean military exercises will not only affect they countries' combat readiness, but also undermine the credibility of American commitments to its alliances.
Lieutenant General Chun In-Bum, former commander of South Korea's Special Warfare Command, was blunt: "scaling back joint exercises like Ulchi Freedom Shield while North Korean troops gain combat experience in Ukraine creates a dangerous operational disconnect."
Ukrainian President Volodymyr Zelenskyy said earlier this month that Pyongyang was dispatching up to another 50,000 troops to aid Moscow, pointing to a gradual increase in North Korean troops deployed against Kyiv.
The joint Ulchi Freedom Shield exercise began on Aug. 17 will now end on Friday, ahead of the original schedule through Aug. 27.
That revision comes after Trump ordered Defence Secetary Pete Hegseth to "substantially reduce" joint drills with Seoul so as to not "send a signal that is totally inappropriate and hostile" to North Korea, a move that is said to have caught Seoul off guard.
Chun said Pyongyang's troops were refining modern tactics, including drone warfare, electronic warfare, and artillery integration, under actual battle conditions, and the U.S.- South Korea alliance relies on major exercises to stress test its systems and adapt to these evolving threats.
"Restricting readiness testing for political gestures weakens joint counter-measures and undermines deterrence precisely as the adversary's battlefield proficiency expands," he said.
U.S. official, however, told Reuters that scaled-back drills would still preserve essential readiness and training objectives, with no degradation to American training goals.
Credibility in question
While the direct impact would be a reduction in combat readiness in the alliance's forces, the move by Trump will also start to raise questions about the credibility of Washington's commitment to alliances, experts said.
[The move] significantly undermines the credibility of the U.S. security commitment at a time when confidence in that commitment is already near one of its lowest points in recent history.Lami KimKorea Chair in Advanced Technologies, National Security and Defence, IISS
This "significantly undermines the credibility of the U.S. security commitment at a time when confidence in that commitment is already near one of its lowest points in recent history," said Lami Kim, Korea Chair in Advanced Technologies, National Security and Defence at the International Institute for Strategic Studies.
Speaking at the White House on Wednesday, Trump hardened his stance, saying the joint exercises were "very insulting to somebody that, frankly, has been, during my term at least, very well-behaved."
This is not the first time that Trump has suspended joint exercises in an effort to improve relations with North Korea. In his first term, the U.S. president had suspended exercises while carrying out negotiations with Pyongyang.
Kim's view is shared by Henry Haggard, a former U.S. diplomat in Seoul. Haggard said the move could cause concern among allies about the predictability and reliability of the U.S. alliance guarantee.
"This announced reduction appears to be a bad overall strategic move given Ukraine, Iran ... some allies, Korea among them, are struggling to understand U.S. positions vis a vis Russia, North Korea and even China," Haggard said.
However, there are some experts that see the cut in military drills as a positive gesture, suggesting that if the joint exercises are escalating tensions, then reducing them should lessen the chance of a conflict.
Jennifer Kavanagh, senior fellow and director of military analysis at Defense Priorities, told CNBC that for both the United States and South Korea, reducing the number of military exercises could create a more stable and less hostile military environment.
She said after the United States conducts military exercises in Asia, "countries like China or North Korea respond accordingly, increasing their military activity in the region, conducting their own exercises, or testing new weapons and missiles."
The cut in drills drew no immediate concession from Pyongyang, with Kim Yo Jong, the sister of North Korean leader Kim Jong Un, saying Thursday that "If the U.S. calculates that it can propagate its recent measure as the one of so-called good faith, they will not get [their] desired answer." She is also director of the central committee of North Korea's ruling party.
She added that North Korea paid more attention to the fact that the drills are already staged, not to the reduction of the drills. "We are correctly seeing through the fact that this is an obvious expression of open hostility."`,
    bodyJa: `米韓軍事演習を大幅に縮小するというドナルド・トランプ大統領の動きは、両国の戦闘準備に影響を与えるだけでなく、同盟に対する米国の約束の信頼性を損なうことになるだろう。
元韓国特殊戦軍司令官の千仁範中将は、「北朝鮮軍がウクライナで戦闘経験を積んでいる間に、乙支フリーダムシールドのような共同演習を縮小することは、危険な作戦上の断絶を生み出す」と率直に語った。
ウクライナのウォロディミル・ゼレンスキー大統領は今月初め、北朝鮮がモスクワを支援するためにさらに最大5万人の軍隊を派遣すると述べ、キエフに展開する北朝鮮軍が徐々に増加していることを指摘した。
8月17日に始まった蔚支フリーダムシールド合同演習は、当初の8月27日までの予定を前倒しして金曜日に終了する。
この修正は、トランプ大統領がピート・ヘグセス国防長官に対し、北朝鮮に「完全に不適切で敵対的な信号を送らないように」韓国との共同訓練を「大幅に縮小する」よう命令した後に行われたもので、この措置が韓国の不意を突いたと言われている。
チョン氏は、北朝鮮軍は実際の戦闘状況下で無人機戦、電子戦、砲兵の統合など現代戦術を洗練させており、米韓同盟はシステムのストレステストを行い、こうした進化する脅威に適応するために大規模な演習に依存していると述べた。
同氏は、「政治的ジェスチャーに対する即応性検査の制限は、まさに敵の戦場での熟練度が拡大する中、共同の対抗措置を弱め、抑止力を損なうことになる」と述べた。
しかし、米当局者はロイターに対し、訓練を縮小しても米国の訓練目標を損なうことなく、重要な即応性と訓練目標は維持されると語った。
信頼性が疑問視される
直接的な影響は同盟軍の戦闘即応力の低下だが、トランプ大統領の動きは同盟に対する米国の関与の信頼性についても疑問を生じ始めるだろうと専門家らは指摘する。
[この動きは]米国の安全保障への取り組みに対する信頼性がすでに最近の歴史の中で最低点の一つに近づいている現在、米国の安全保障への取り組みの信頼性を著しく損なうものである。ラミ・キム韓国国際ＩＳＳ先端技術・国家安全保障・防衛担当議長
国際戦略研究所の韓国先端技術・国家安全保障・国防担当議長ラミ・キム氏は、「米国の安全保障への取り組みに対する信頼性がすでに最近の歴史の中で最低点の一つに近づいている中で、これは米国の安全保障への取り組みの信頼性を著しく損なうものだ」と述べた。
トランプ大統領は水曜日、ホワイトハウスで演説し、共同演習は「率直に言って、少なくとも私の任期中は非常に行儀が良かった人物に対する非常に侮辱的なものだ」と態度を硬化させた。
トランプ大統領が北朝鮮との関係改善を目指して共同訓練を中止したのはこれが初めてではない。米大統領は１期目、北朝鮮との交渉中は演習を中止していた。
金氏の見解は、ソウル駐在の元米国外交官ヘンリー・ハガード氏も同様だ。ハガード氏は、この措置は米国との同盟保証の予測可能性と信頼性について同盟国に懸念を引き起こす可能性があると述べた。
ハガード氏は、「ウクライナ、イラン…一部の同盟国、その中には韓国が、ロシア、北朝鮮、さらには中国に対する米国の立場を理解するのに苦労していることを考慮すると、この発表された削減は全体的に戦略的に悪い動きであるように見える」と述べた。
しかし、一部の専門家は軍事演習の削減を前向きな姿勢と捉えており、合同演習によって緊張が高まっているのであれば、緊張を減らしれば紛争の可能性は減るはずだと示唆している。
ディフェンス・プライオリティ社のシニアフェロー兼軍事分析ディレクターのジェニファー・カバナー氏はCNBCに対し、米国と韓国の両国にとって、軍事演習の数を減らすことで、より安定した敵意の少ない軍事環境を作り出すことができると語った。
同氏は、米国がアジアで軍事演習を実施すると、「中国や北朝鮮などの国もそれに応じて、地域での軍事活動を強化したり、独自の演習を実施したり、新たな兵器やミサイルの実験を行ったりしている」と述べた。
演習削減については北朝鮮からの即時譲歩は得られず、北朝鮮の指導者金正恩氏の妹、金与正氏は木曜日、「米国が最近の措置をいわゆる誠意によるものとして広めることができると計算しているなら、（米国が）望むような答えは得られないだろう」と述べた。彼女は北朝鮮与党中央委員会の委員長でもある。
同氏は、北朝鮮は訓練の縮小ではなく、訓練がすでに実施されているという事実により注意を払っていると付け加えた。 「これが明らかな敵意の表れであるという事実を、私たちは正しく見抜いています。」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/trump-south-korea-military-drills-cuts-.html",
    publishedAt: "2026-08-20T05:56:27+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "bitcoin-ether-surge-as-trump-urges-congr-47c05655",
    title: "Bitcoin, ether surge as Trump urges Congress to pass crypto Clarity Act",
    titleJa: "トランプ大統領が議会に仮想通貨透明性法案の可決を促す中、ビットコインとイーサが急騰",
    summaryJa: "ドナルド・トランプ米大統領がこのセクターの活性化が期待される法案の可決を議会に要請したことを受け、ビットコイン、イーサ、その他の仮想通貨が急騰した。トランプ大統領はまた、「永久先物」取引の本拠地としてトレーダーの間で人気を集めている分散型取引所ハイパーリキッドを規制する可能性も示唆した。 CoinGeckoのデータによると、Hyperliquidトークンは過去24時間で約20％上昇した。",
    bodyOriginal: `Bitcoin, ether and other cryptocurrencies surged after U.S. President Donald Trump urged Congress to pass a bill expected to boost the sector.
Trump also hinted at regulating Hyperliquid, the decentralized exchange that's been garnering popularity among traders as the home base of "perpetual futures" trading. The Hyperliquid token rose about 20% over the past 24 hours, according to CoinGecko data.
A retreat in Treasury yields also helped to boost trading in the iShares Bitcoin Trust ETF (IBIT) which was more than 4.5 times the 30-day average even before the Hyperliquid headlines. Bitcoin volatility measured by Volmex Labs' BVIV Index rose to above 43.5 after hitting a year-to-date low of 35.5 Friday.
The US Treasury's announcement of a significant increase in the buyback of 20-year and 30-year bonds sent yields significantly lower. And it raises the attractiveness of higher-risk assets like Bitcoin to investors, according to Charlie Hayward, APAC regional director at RootstockCollective.
Bitcoin's move reflects an alignment of macro and policy catalysts, according to Max Stuedlein, head of Partnerships at Sygnum APAC.
"The Treasury's decision to double its buybacks of long-dated government debt is aimed at addressing long-term yield concerns, where borrowing costs have been rising on concerns over US debt levels and partial crowding out by debt issuances of hyperscalers," he said.
Geoffrey Kendrick, global head of digital assets research at Standard Chartered, noted that the announcement from the US Treasury to increase the size of back-end support "is exactly the type of thing Bitcoin loves."
"Investors should now be positioning for a move to $100,000 by year-end 2026," Kendrick added.
"The moves in crypto have been so big in the last couple of days that it's triggered the second-largest ever short liquidation in history, " said Thomas Lee, co-founder and head of research at Fundstrat, adding that the sizable moves have pushed ether to a three-month high.
Ether rose about 19% in the past seven days to $2,251, according to CoinGecko.
Bitcoin had been stuck between support around $62,000 and resistance at $66,000 in the past six weeks, which became "rather frustrating for crypto traders, as the lack of volatility, even after bitcoin has effectively halved from its all-time high hit last October," said David Morrison, a senior market analyst at Trade Nation.`,
    bodyJa: `ドナルド・トランプ米大統領がこのセクターの活性化が期待される法案の可決を議会に要請したことを受け、ビットコイン、イーサ、その他の仮想通貨が急騰した。
トランプ大統領はまた、「永久先物」取引の本拠地としてトレーダーの間で人気を集めている分散型取引所ハイパーリキッドを規制する可能性も示唆した。 CoinGeckoのデータによると、Hyperliquidトークンは過去24時間で約20％上昇した。
米国債利回りの低下もiシ​​ェアーズ・ビットコイン・トラストETF（IBIT）の取引を後押しし、ハイパーリキッドの見出しが出る前から30日間平均の4.5倍以上となっていた。 Volmex Labs の BVIV 指数によって測定されたビットコインのボラティリティは、金曜日に年初来安値の 35.5 を記録した後、43.5 以上に上昇しました。
米財務省が20年債と30年債の買い戻し額を大幅に増額すると発表したことで、利回りは大幅に低下した。ルートストック・コレクティブのアジア太平洋地域ディレクター、チャーリー・ヘイワード氏によると、投資家にとってビットコインのような高リスク資産の魅力が高まるという。
シグナムAPACのパートナーシップ部門責任者マックス・スチュードライン氏によると、ビットコインの動きはマクロと政策の触媒の連携を反映しているという。
同氏は「長期国債の買い戻しを倍増させるという財務省の決定は、米国の債務水準やハイパースケール会社の債券発行による部分的なクラウディングアウトへの懸念から借入コストが上昇している長期利回りの懸念に対処することを目的としている」と述べた。
スタンダードチャータードのデジタル資産調査グローバル責任者ジェフリー・ケンドリック氏は、バックエンドサポートの規模を拡大するという米財務省の発表は「まさにビットコインが好むタイプのものだ」と指摘した。
「投資家は現在、2026年末までに10万ドルに到達する構えをしているはずだ」とケンドリック氏は付け加えた。
ファンドストラットの共同創設者兼調査責任者であるトーマス・リー氏は、「ここ数日間の仮想通貨の動きは非常に大きく、史上2番目に大きな短期清算を引き起こした」と述べ、この大きな動きによりイーサ相場は3カ月ぶりの高値まで押し上げられたと付け加えた。
CoinGeckoによると、イーサは過去7日間で約19％上昇し、2,251ドルとなった。
トレード・ネイションのシニア市場アナリスト、デービッド・モリソン氏は、ビットコインは過去６週間、６万２０００ドル付近のサポート線と６万６０００ドルのレジスタンス線の間で板挟みになっており、「ビットコインが昨年１０月の史上最高値から事実上半分になった後でも、ボラティリティが欠如しているため、仮想通貨トレーダーにとってかなりイライラすることになった」と述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/cryptocurrencies-trump-bitcoin-ethereum.html",
    publishedAt: "2026-08-20T05:29:50+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "sk-hynix-shares-surge-over-12-in-seoul-a-f6b73868",
    title: "SK Hynix shares surge over 12% in Seoul after announcing massive stock buyback",
    titleJa: "SKハイニックス株、大規模な自社株買いを発表後、ソウル市場で12％以上急騰",
    summaryJa: "ＳＫハイニックスが大規模な自社株買いを発表したことを受け、木曜日、ソウル市場でＳＫハイニックスの株価は１２％以上急騰した。同社は、40兆ウォン（287億ドル）の自社株買い・消却プログラムを加速する一方、株主還元を2025年から2027年までに生み出される累積フリーキャッシュフローの50％以上に拡大することを追求していると述べた。",
    bodyOriginal: `Shares of SK Hynix surged over 12% in Seoul on Thursday after the company announced a massive stock buyback.
The company said it is accelerating its 40 trillion won ($28.7 billion) share repurchase and cancellation program, while pursuing a shareholder return expansion to over 50% of cumulative free cash flow generated between 2025 to 2027.
"We believe the initiative is expected to serve as a meaningful floor for the share price, providing tangible downside support in the near term," said Peter Lee, an analyst at Citi. The buyback also reflects SK Hynix's confidence in its mid- to long-term growth outlook despite current memory sector headwinds, Lee added.
The news come after the company said earlier this month it would invest 54 trillion Korean won to build new memory chip manufacturing plants, amid growing demand for components which are crucial for artificial intelligence.
Meanwhile, other tech stocks in Asia also rose, recovering from losses the day before. Market sentiment was supported by gains in U.S. stocks, which snapped a three-day losing streak after yields on longer-dated U.S. Treasurys pulled back from multi-year highs.
In South Korea, Samsung Electronics gained 8.69%, while Kakao was 4.41% higher.
In Japan, SoftBank Group advanced 3.79%, while Nintendo was over 3% higher. Rakuten added 2.39%.
Tech stocks have been seeing heightened volatility in recent sessions, with South Korea's semiconductor-heavy market whipsawing between steep losses and gains.`,
    bodyJa: `ＳＫハイニックスが大規模な自社株買いを発表したことを受け、木曜日、ソウル市場でＳＫハイニックスの株価は１２％以上急騰した。
同社は、40兆ウォン（287億ドル）の自社株買い・消却プログラムを加速する一方、株主還元を2025年から2027年までに生み出される累積フリーキャッシュフローの50％以上に拡大することを追求していると述べた。
シティのアナリスト、ピーター・リー氏は「この構想は株価の意味のある下値として機能し、短期的には目に見える下値支援となると予想される」と述べた。リー氏は、現在のメモリセクターの逆風にも関わらず、自社株買いはSKハイニックスの中長期的な成長見通しに対する自信を反映しているとも付け加えた。
このニュースは、同社が今月初め、人工知能に不可欠な部品の需要が高まる中、新たなメモリーチップ製造工場の建設に54兆韓国ウォンを投資すると発表した後に発表された。
一方、アジアの他のハイテク株も前日の下落から回復して上昇した。米長期国債利回りが数年ぶりの高水準から低下したことを受け、米国株の上昇が市場心理を支え、３日の連敗を止めた。
韓国ではサムスン電子が８．６９％上昇し、カカオは４．４１％上昇した。
日本ではソフトバンクグループが3.79％上昇し、任天堂も3％以上上昇した。楽天は２．３９％を追加した。
韓国の半導体比率の高い市場が大幅な下落と上昇の間で揺れ動いており、ハイテク株のボラティリティは最近の取引で高まっている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/sk-hynixs-south-korean-shares-surge-stock-buyback-.html",
    publishedAt: "2026-08-20T03:30:54+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "canada-and-us-say-they-are-finalising-a-96d08eb8",
    title: "Canada and US say they are finalising a trade deal",
    titleJa: "カナダと米国は貿易協定を最終決定しつつあると発表",
    summaryJa: "カナダと米国は貿易協定を最終決定しつつあると発表- 公開されました",
    bodyOriginal: `Canada and US say they are finalising a trade deal
- Published
Canada and the US are finalising a highly anticipated trade deal, with President Donald Trump and Prime Minister Mark Carney touting it as a success.
Trump said the proposed deal will be welcomed by US farmers and manufacturers, while Carney said it will secure "the best terms" for Canada's strategic sectors and provide certainty on the future of US-Canada trade.
Trade negotiators met on Wednesday for the third time in as many days after Trump paused a new wave of tariffs he had threatened to impose overnight on a range of Canadian goods.
Details on what the agreement includes have not yet been announced but reports suggest it may cover Canadian steel, aluminium and cars as well as US alcohol.
Speaking to reporters on Wednesday after a 45-minute meeting with his Canadian counterpart, US Trade Representative Jamieson Greer said the Americans are "very happy" and the deal eliminates "some of the irritants" the US had with Canada.
"We feel confident that we've reached an agreement that will not only continue to protect American workers, American jobs, American supply chains, but really strengthen the North American economy," Greer said.
He said he will soon brief Congress and US stakeholders on the deal's details.
Trump said Canada has agreed to eliminate tariffs on US farmers, though he did not specify which specific agricultural sectors would benefit.
Asked whether the US will also reduce some tariffs it has placed on Canada, Trump said by "a little bit".
In a post on X on Wednesday, Carney said "significant progress" had been made and they were moving towards an agreement that addresses "Canada's most important strategic sectors".
What could be in the deal?
Canada has been in pursuit of a deal that would have the US drop or reduce tariffs on its steel, aluminium, automobiles and lumber.
Under a deal that could be completed by Friday, US tariffs on Canadian steel and aluminum would reportedly be cut to 25% from 50%.
The US may also lower its headline tariff rate on Canadian-made vehicles from 25% to 15%, according to reports from US and Canadian media.
The prime minister met his cabinet and leaders of Canadian provinces on Wednesday afternoon to brief them.
Following Carney's meeting, Nova Scotia Premier Tim Houston said the prime minister asked provinces to return US alcohol to Canadian markets.
"It's been something that has kind of really bothered the United States for so many reasons," Houston said. "Now, whether Canadians will really buy it when it's back on the shelf, that's a whole other discussion."
Most Canadian provinces banned US alcohol sales last year in retaliation to Trump's tariffs.
The US, meanwhile, has been asking for a number of concessions from Canada, including removing its remaining retaliatory tariffs on American autos and adjusting its dairy quotas to allow greater access for US cheese producers.
Asked on Wednesday if the latest deal will include significant concessions on dairy, Minister LeBlanc said that Canada's dairy supply management programme - which oversees production quotas and sets pricing and import quotas on dairy, eggs, and poultry - will remain "entirely intact".
Polls suggest that a majority of Canadians would be unhappy if the Carney government made significant concessions to the US, with 56% surveyed by polling firm Leger, external saying they want Canada to take a hardline approach.
But business organisations from both sides of the border have lobbied for a deal to be reached, cautioning that additional tariffs between the two trading partners would be harmful for both countries.
Dennis Darby, president of Canadian Manufacturers and Exporters and a member of Carney's advisory committee on Canada-US trade, told the BBC he is optimistic a finalised deal is on the horizon.
"The committee was informed this morning that the negotiations continue and that and we're close, and that's more positive than we've seen in some time," Darby said.
He added that businesses hope this will be the first step towards a return to the terms set under the North American free trade agreement, known as USMCA, with most goods flowing tariff-free through Canada, the US and Mexico.
Additional reporting by Peter Hoskins
Related topics
- Published15 hours ago
- Published23 July`,
    bodyJa: `カナダと米国は貿易協定を最終決定しつつあると発表
- 公開されました
カナダと米国は大いに期待されていた貿易協定をまとめつつあり、ドナルド・トランプ大統領とマーク・カーニー首相はそれが成功したと宣伝している。
トランプ大統領は、合意案は米国の農家や製造業者に歓迎されるだろうと述べ、カーニー氏はカナダの戦略部門にとって「最良の条件」を確保し、米国・カナダ貿易の将来に確実性をもたらすと述べた。
通商交渉担当者らは水曜日、トランプ大統領がカナダの幅広い製品に課すと脅していた新たな関税の発動を一夜にして一時停止してから数日で３回目の会合を行った。
協定に含まれる内容の詳細はまだ発表されていないが、報道によると、米国のアルコールだけでなくカナダの鉄鋼、アルミニウム、自動車も対象となる可能性がある。
ジェイミソン・グリア米通商代表部代表は水曜日、カナダ側との45分間の会談後記者団に対し、米国側は「非常に満足」しており、今回の協定により米国とカナダが抱えていた「イライラの一部」が解消されると述べた。
グリア氏は「米国の労働者、米国の雇用、米国のサプライチェーンを守り続けるだけでなく、北米経済を真に強化する合意に達したと自信を持っている」と述べた。
同氏は近く議会と米国の関係者に協定の詳細について説明する予定だと述べた。
トランプ大統領は、カナダが米国の農家に対する関税を撤廃することに同意したと述べたが、具体的にどの農業部門が恩恵を受けるかは明らかにしなかった。
米国がカナダに課している関税の一部も引き下げるかとの質問に対し、トランプ大統領は「少しずつ」と述べた。
カーニー長官は水曜日のＸへの投稿で、「重大な進展」が見られ、「カナダの最も重要な戦略分野」に取り組む合意に向けて進んでいると述べた。
取引には何が含まれる可能性がありますか?
カナダは米国に対し、鉄鋼、アルミニウム、自動車、木材に対する関税を撤回または引き下げさせる合意を追求してきた。
金曜日までに完了する可能性のある合意の下では、カナダの鉄鋼とアルミニウムに対する米国の関税は50％から25％に引き下げられると伝えられている。
米国とカナダのメディアの報道によると、米国はカナダ製自動車に対する総合関税率を25％から15％に引き下げる可能性もある。
首相は水曜午後、閣僚やカナダ各州の指導者らと会い、説明を行った。
カーニー長官の会談後、ノバスコシア州のティム・ヒューストン首相は、首相が州に対し米国産アルコールをカナダ市場に戻すよう要請したと述べた。
「これは非常に多くの理由から米国を非常に悩ませてきたことだ」とヒューストン氏は語った。 「さて、それが棚に戻ったときにカナダ人が本当に買うかどうかは、また別の議論です。」
カナダのほとんどの州は昨年、トランプ大統領の関税への報復として米国でのアルコール販売を禁止した。
一方、米国はカナダに対し、米国製自動車に対する残りの報復関税の撤廃や、米国のチーズ生産者のアクセス拡大を可能にする乳製品割り当ての調整など、多くの譲歩を求めている。
ルブラン大臣は水曜日、最新の合意に乳製品に関する大幅な譲歩が含まれるかとの質問に対し、乳製品、卵、家禽肉の生産割当を監督し、価格設定と輸入割当を設定するカナダの乳製品供給管理プログラムは「完全にそのまま」残ると述べた。
世論調査によると、カーニー政権が米国に大幅な譲歩をした場合、カナダ人の大多数が不満を抱いており、世論調査会社レジャーの調査では56％がカナダに強硬なアプローチを取ることを望んでいると外部から回答している。
しかし、国境の両側の経済団体は、両国の貿易相手国間の追加関税は両国にとって有害で​​あると警告し、合意の成立を求めてロビー活動を行っている。
カナディアン・マニュファクチャラー・アンド・エクスポータズの社長であり、カーニー首相のカナダと米国の貿易に関する諮問委員会のメンバーでもあるデニス・ダービー氏はBBCに対し、最終的な合意が間近に迫っていると楽観的であると語った。
ダービー氏は「委員会は今朝、交渉が継続しており、交渉は近づいていると知らされた。これは我々がこれまでに見たよりも前向きな内容だ」と述べた。
同氏は、企業はこれがUSMCAとして知られる北米自由貿易協定（カナダ、米国、メキシコを経由してほとんどの商品が無関税で流れる）に基づいて設定された条件への復帰に向けた第一歩となることを期待していると付け加えた。
Peter Hoskins による追加レポート
関連トピック
- 15 時間前に公開
- 7 月 23 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3ekl74jnk5o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T03:10:48+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/cd23/live/184fdf20-9bf0-11f1-8470-d18257d2d589.jpg",
    readTime: 5,
  },
  {
    id: "us-national-debt-passes-40tn-after-doubl-93f954b0",
    title: "US national debt passes $40tn after doubling in a decade",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "米国の国債、10年で倍増、40兆ドルを突破- 公開されました",
    bodyOriginal: `US national debt passes $40tn after doubling in a decade
- Published
US national debt has more than doubled in a decade to reach a milestone $40tn (£29.4tn), Treasury figures show.
The rise reflects years of heavy spending under both the Donald Trump and Joe Biden administrations, along with higher interest payments that have steadily added to the total. In 2016, the national debt stood at just under $20tn.
The Congressional Budget Office (CBO) had projected overall borrowing would reach $39.6tn only by the end of fiscal year 2026, external.
The faster-than-expected rise has sharpened concerns about how quickly the government's borrowing needs are growing, and what that means for future interest costs.
The CBO says the US is nearing its $41.1tn debt ceiling, with debt projected to climb to about $64tn by 2036.
As the federal government spends more money to cover its budget deficits, consumers have faced higher interest rates and inflation.
The $40.05tn sum, as of 18 August,, external covers all outstanding Treasury bonds, bills and notes, and underscores the scale of US borrowing under two presidents.
The interest rate on 30-year bonds, which are a type of debt used to raise funds from investors, hit 5.34% on Tuesday - the highest level in almost 20 years.
Those rates, known as yields, influence how much the US government, companies, and consumers pay to borrow – affecting mortgages, car loans, and credit cards.
The recent surge in bond yields has been driven by rising oil prices linked to the US-Iran war, with investors worried over inflation.
There are also concerns over government debt and the huge amounts of cash being borrowed by tech firms to develop artificial intelligence (AI), with the timeline and level of returns on investment uncertain.
The Treasury Department said its intervention reflected its "desire to provide greater liquidity support" for longer-term bonds.
It announced it would increase its buyback operations by "at least double" from $2bn to $4bn and will be effective from 9 September to 4 November.
The rate on borrowing costs over 30 years eased on the back of the move to 5.18%.
John Canavan, lead analyst at Oxford Economics, said the Treasury's decision to increase purchases appeared to be an "attempt to provide relief" on long-term borrowing costs, which had been under "significant pressure from rising oil prices, inflation risks, and heavy supply due to global sovereign and corporate borrowing needs".
But he said given the size of outstanding Treasury debt, the increase in buybacks from the government was "unlikely to provide meaningful long-term relief".
Rene Albrecht, senior analyst at DZ Bank in Germany, said the US government feared the "pain of 5% or higher yields" over the long term not just because it raised borrowing costs for the government, but also the private sector.
"It's only three months until the midterm elections," Albrecht said. "They [the Treasury] have had to grab into the toolkit in order to get a hand on the recent rise in yields."
But economist Mohamed A. El-Erian said that, beyond the bond market reaction to push down longer-term borrowing costs, the move by the Trump administration was about the possibility of a broader strategy to keep control of interest rates - known as "yield curve control".
While the move can help bring down longer-end yields in the immediate and short term, and thereby help lower mortgage and other borrowing costs, "it risks collateral damage and unintended consequences", he added in a social media post., external
US inflation eases as food and fuel costs cool
- Published12 August
The amount the US owes compared to its annual economic output - known as its debt-to-gross domestic product (GDP) ratio - is 125.8%, according to the International Monetary Fund (IMF).
It is one of the highest among the world's largest economies.
In comparison, IMF figures show the UK and China's debt-to-GDP ratios are 103.6% and 106.9%, respectively.
After decades of spending to support an ageing population and weak economic growth, Japan has the highest debt burden amongst the world's major economies with a debt-to-GDP ratio of more than 200%.
The US has longer-term fixed mortgage deals than other countries such as the UK.
Currently, the average interest rate on 30-year fixed mortgages is 6.67%, according to finance firm Freddie Mac. While borrowing costs for homeowners have been rising, they remain lower than in 2023 when such deals averaged 7.7%.
Minutes released on Wednesday by the Federal Reserve, which sets US interest rates, revealed that concerns over inflation deepened among policymakers at its last meeting.
It said there were "several participants" in favour of increased rates last month. The central bank ended up holding its benchmark interest rate in the current 3.50%-3.75% range for the fifth time in a row.
Many participants also said rate hikes would "likely be necessary if inflation did not decline", with some suggesting interest rates were not high enough to see price rises fall back to the Fed's 2% target for inflation.
The Fed is expected to hold its policy rate steady again at its September meeting after recent data showed inflation eased slightly and firms unexpectedly shedding jobs in July.`,
    bodyJa: `米国の国債、10年で倍増、40兆ドルを突破
- 公開されました
財務省の統計によると、米国の国債は10年間で2倍以上に増加し、節目となる40兆ドル（約29兆4000億ポンド）に達した。
この増加は、ドナルド・トランプ、ジョー・バイデン両政権下で長年にわたる多額の支出と、利払い総額が着実に増加してきたことを反映している。 2016 年の国家債務は 20 兆ドル弱でした。
議会予算局（CBO）は、対外的には総借入額が2026年度末までに39兆6000億ドルに達すると予測していた。
予想を上回るペースでの増加を受け、政府の借り入れニーズがどれほど急速に拡大しているのか、またそれが将来の金利コストにどのような影響を与えるのかについて懸念が高まっている。
CBOは、米国は41.1兆ドルの債務上限に近づいており、債務は2036年までに約64兆ドルに増加すると予想されていると述べた。
連邦政府が財政赤字を補うために支出を増やすにつれ、消費者は金利の上昇とインフレに直面している。
8月18日時点で40.05兆ドルという金額は、発行済みの財務省債、手形および紙幣のすべてを対外的にカバーしており、2人の大統領の下での米国の借入規模を浮き彫りにしている。
投資家から資金を集めるために使われる一種の債券である30年債の金利は火曜日に5.34％に達し、約20年ぶりの高水準となった。
利回りとして知られるこれらの金利は、米国政府、企業、消費者が借りるために支払う金額に影響を与え、住宅ローン、自動車ローン、クレジット カードに影響を与えます。
最近の債券利回りの上昇は、米国とイランの戦争に関連した原油価格の上昇が原因で、投資家はインフレを懸念している。
政府債務や人工知能（AI）開発のためにハイテク企業が借りている巨額の現金に対する懸念もあり、投資収益率やスケジュールは不透明だ。
財務省は、介入は長期債に対する「より大きな流動性支援を提供したいという願望」を反映していると述べた。
自社株買いオペを２０億ドルから４０億ドルに「少なくとも２倍」増額し、９月９日から１１月４日まで実施すると発表した。
これを受けて３０年超の借入コスト金利は５．１８％に低下した。
オックスフォード・エコノミクスの主任アナリスト、ジョン・カナバン氏は、財務省の買い入れ増額決定は「原油価格の上昇、インフレリスク、世界的なソブリンや企業の借り入れ需要による供給過多による大きな圧力」にさらされていた長期借入コストを「救済する試み」のようだと述べた。
しかし同氏は、財務省債務残高の規模を考慮すると、政府による買い戻しの増加が「意味のある長期的な救済をもたらす可能性は低い」と述べた。
ドイツのＤＺ銀行のシニアアナリスト、レネ・アルブレヒト氏は、米政府が長期的に「５％以上の利回りの痛み」を懸念しているのは、政府だけでなく民間部門の借り入れコストも上昇しているためだと述べた。
アルブレヒト氏は「中間選挙まであと３カ月だ」と語った。 「彼ら（財務省）は最近の利回り上昇に手を付けるためにツールキットを利用する必要があった。」
しかし、エコノミストのモハメド・A・エラリアン氏は、トランプ政権の動きは、長期借入コストを押し下げるという債券市場の反応を超えて、「イールドカーブ・コントロール」として知られる金利制御を維持するためのより広範な戦略の可能性に関するものだった、と述べた。
同氏はソーシャルメディアへの投稿で、この措置は当面および短期的に長期金利を引き下げ、それによって住宅ローンやその他の借入コストの低下につながる可能性があるが、「付随的損害や予期せぬ結果を招くリスクがある」と付け加えた。
食料と燃料のコストが下がり、米国のインフレが緩和
- 8 月 12 日発行
国際通貨基金（IMF）によると、年間経済生産高と比較した米国の負債額（債務対国内総生産（GDP）比率として知られる）は125.8％だという。
これは世界最大の経済大国の中で最も高いものの一つです。
これに対し、IMFの統計によると、英国と中国の対GDP比債務比率はそれぞれ103.6%と106.9%となっている。
人口高齢化と経済成長の鈍化を支えるために数十年にわたり支出を続けてきた日本は、世界の主要国の中で最も債務負担が高く、債務対GDP比は2​​00％を超えている。
米国は英国などの他の国に比べて長期の固定住宅ローン契約を結んでいる。
金融会社フレディマックによると、現在、30年固定住宅ローンの平均金利は6.67％。住宅所有者の借入コストは上昇しているものの、こうした取引が平均7.7％だった2023年と比べると依然低い。
米国の金利を決定する連邦準備理事会（FRB）が水曜日に公表した議事録では、前回の会合で政策当局者の間でインフレに対する懸念が深まったことが明らかになった。
先月は利上げを支持する「数人の参加者」がいたと述べた。中銀は最終的に基準金利を現在の３．５０─３．７５％の範囲に５回連続で据え置いた。
また、多くの参加者は「インフレが低下しなければ利上げが必要になる可能性が高い」と述べ、物価上昇率がFRBのインフレ目標である2％に戻るほど金利が高くないと示唆する人もいた。
最近の統計でインフレが若干緩和し、企業が７月に予想外に雇用を削減したことが示されたことを受け、ＦＲＢは９月会合で政策金利を再び据え置くと予想されている。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c70gp8252ejo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T01:24:26+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c600/live/6b7a29d0-9bff-11f1-aed2-8d6da8d75094.jpg",
    readTime: 6,
  },
  {
    id: "trump-threatens-tremendous-economic-cons-58575e95",
    title: "Trump threatens 'tremendous economic consequences' on any country helping Iran",
    titleJa: "トランプ大統領、イランを支援する国に「甚大な経済的影響」を与えると脅す",
    summaryJa: "トランプ大統領、イランを支援する国に「甚大な経済的影響」を与えると脅す- 公開されました",
    bodyOriginal: `Trump threatens 'tremendous economic consequences' on any country helping Iran
- Published
President Donald Trump has said the US will inflict "TREMENDOUS Economic Consequences" on any country that helps or does business with Iran.
He wrote in all capital letters on Truth Social that he was launching "the most crushing economic operation ever taken against any country!" He gave no further details, and did not name any other nation.
It comes after a 60-day ceasefire with Iran expired on Monday, with no sign of a diplomatic or military off-ramp to the conflict that the US and Israel began at the end of February.
Trump's latest move appears to extend the pressure campaign of Operation Economic Fury, launched in April to sanction foreign banks or firms that do business with Tehran.
In Wednesday evening's social media post, Trump said he was launching "economic D-Day" on Iran because the Islamic Republic had failed to make a deal with the US.
"ANY country that allows its financial institutions, businesses, airports, or government entities to provide any type of lifeline to Iran will itself face TREMENDOUS Economic Consequences," Trump said.
He did not specify what punishment countries might face.
Trump continued: "Oil smuggling, swap lines, cash transfers, exchange houses, ship registries, front companies - It all needs to stop NOW. You know who you are."
It comes a day after United Arab Emirates, a US ally, announced it would be severing all financial and economic ties with Iran, following a new missile threat from the country.
The UAE's defence ministry said it had detected two ballistic missiles launched from Iran targeting maritime traffic, both of which landed in the sea.
Iranian entities have long used Dubai's financial system to transfer money through exchange houses and shell companies.
Following the UAE's decision, Iran's armed forces warned neighbouring Gulf countries against providing support to the US military, saying any assistance given to US forces would be considered collusion.
The president's comments come nearly a week after Treasury Secretary Scott Bessent said the US would impose economic isolation on Iran "like the world has never seen before".
The BBC has asked the White House and US treasury department for comment.
Earlier this week, Trump also reportedly threatened to bomb Oman - a US ally - if it "gets in the way" of his administration's own talks with Iran, during a phone interview with a Fox News reporter.
The US and Oman have been negotiating separately with Tehran to reopen the Strait of Hormuz, a waterway that is vital to the global economy.
The conflict has significantly disrupted traffic through the key Strait of Hormuz shipping route, pushing up global energy prices.
Around 20% of the world's crude oil and liquified natural gas (LNG) usually passes through the strait.
Ahead of the US midterm elections in November, Trump faces pressure over how much the war is costing American consumers.
Related topics
- Published12 August`,
    bodyJa: `トランプ大統領、イランを支援する国に「甚大な経済的影響」を与えると脅す
- 公開されました
ドナルド・トランプ大統領は、米国はイランを援助したりイランと取引したりするあらゆる国に「甚大な経済的影響」を与えると述べた。
彼はTruth Socialにすべて大文字で、「これまでにどの国に対しても行われた中で最も壊滅的な経済作戦」を開始すると書いた。同氏はそれ以上の詳細には触れず、他の国の名前も挙げなかった。
これは、イランとの60日間の停戦が月曜日に期限切れとなったことを受けてのことだが、米国とイスラエルが2月末に始めた紛争が外交的にも軍事的にも撤退する兆しは見られない。
トランプ大統領の今回の措置は、テヘランと取引のある外資系銀行や企業を制裁する目的で4月に開始された「エコノミック・フューリー作戦」の圧力キャンペーンを延長するものとみられる。
水曜日夜のソーシャルメディアへの投稿で、トランプ大統領は、イスラム共和国が米国との合意に失敗したため、イランに対して「経済的Dデー」を開始すると述べた。
トランプ大統領は「金融機関、企業、空港、政府機関がイランにあらゆる種類のライフラインを提供することを許可する国は、その国自体が甚大な経済的影響に直面するだろう」と述べた。
同氏は各国がどのような処罰を受ける可能性があるかについては明らかにしなかった。
トランプ大統領はさらに、「石油密輸、スワップライン、現金送金、両替所、船舶登録所、フロント企業、すべて今すぐやめるべきだ。自分が何者であるか分かっているはずだ」と述べた。
これは、米国の同盟国であるアラブ首長国連邦が、同国からの新たなミサイルの脅威を受けて、イランとのあらゆる金融・経済関係を断つと発表した翌日のことだ。
ＵＡＥ国防省は、イランから海上交通を狙って発射された弾道ミサイル２発を探知し、いずれも海に着弾したと発表した。
イラン企業は長年、ドバイの金融システムを利用して両替所やダミー会社を通じて送金してきた。
ＵＡＥの決定を受けて、イラン軍は近隣の湾岸諸国に対し、米軍への支援を行わないよう警告し、米軍への支援は共謀とみなされると述べた。
大統領のコメントは、スコット・ベッセント財務長官が米国が「世界がこれまで見たことのないような」経済的孤立をイランに課すだろうと述べてからほぼ1週間後に出た。
BBCはホワイトハウスと米財務省にコメントを求めた。
今週初め、トランプ大統領はFOXニュース記者との電話インタビューで、政権自身のイランとの協議を「邪魔する」のであれば、米国の同盟国であるオマーンを爆撃すると脅したとも伝えられた。
米国とオマーンは、世界経済にとって極めて重要な水路であるホルムズ海峡の再開に向けてテヘランと個別に交渉している。
この紛争により、ホルムズ海峡の主要航路を通る交通が大幅に混乱し、世界のエネルギー価格が上昇している。
通常、世界の原油と液化天然ガス（LNG）の約20％がこの海峡を通過している。
11月の米国中間選挙を前に、トランプ大統領は戦争が米国の消費者にどれほどの損害を与えているかについて圧力に直面している。
関連トピック
- 8 月 12 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c2k7e83ynj4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-20T01:02:51+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/725b/live/5ef21940-9c2a-11f1-aa8e-d328e95deb46.jpg",
    readTime: 3,
  },
  {
    id: "trump-announces-economic-warfare-on-iran-cec8f282",
    title: "Trump announces 'economic warfare' on Iran, threatens ‘tremendous’ consequences for its backers",
    titleJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    summaryJa: "ドナルド・トランプ大統領は、米国がイランに対して「これまでどの国に対しても行われた中で最も壊滅的な経済作戦」と呼ぶものを開始し、イランの制裁回避に協力した国には厳しい経済制裁を科すと脅迫したと述べた。トランプ大統領は真実ソーシャルへの投稿で、「これは前例のない規模の経済戦争と孤立になるだろう」と述べた。",
    bodyOriginal: `President Donald Trump said the U.S. will launch what he called the "most crushing economic operation ever taken against any country" against Iran, threatening severe financial penalties on any nation that helps Tehran evade sanctions.
In a Truth Social post, Trump said that "this will be Economic Warfare and Isolation on an unprecedented scale."
"No one has given the Islamic Republic of Iran a greater opportunity to make a Deal than me," and that "TRAGICALLY, for them, they have failed to take it," the president said.
Iran's navy, air force, and military production facilities have been destroyed and its currency rendered worthless, arguing the regime is "hanging by a thread," Trump claimed.
He said any country whose financial institutions, businesses, airports, or government entities offer Iran a "lifeline" will face what he described as tremendous economic consequences of their own.
The president named oil smuggling, currency swap lines, cash transfers, exchange houses, ship registries, and front companies as channels he wants shut down immediately, stressing that Iran will never be permitted to acquire a nuclear weapon.
The announcement extends a pressure campaign the Trump administration has waged since April under the banner Operation Economic Fury, aimed at cutting off what it terms the regime's global terror financing and revenue streams.
Iran's Foreign Minister Abbas Araghchi has accused Washington of escalating sanctions after previous rounds failed to force Tehran into submission, calling the approach a barrier to any negotiated exit from the conflict.
The escalation comes a day after the United Arab Emirates — one of the most important commercial partners for Iran— suspended all trade and financial dealings with Tehran, following what it said were two Iranian ballistic missiles fired at the Gulf state. Iran denied launching the missiles, calling the claim a "false flag."
Stock futures were slightly higher after Trump's announcement, with S&P 500 futures gaining less than 0.1%.`,
    bodyJa: `ドナルド・トランプ大統領は、米国がイランに対して「これまでどの国に対しても行われた中で最も壊滅的な経済作戦」と呼ぶものを開始し、イランの制裁回避に協力した国には厳しい経済制裁を科すと脅迫したと述べた。
トランプ大統領は真実ソーシャルへの投稿で、「これは前例のない規模の経済戦争と孤立になるだろう」と述べた。
大統領は「私ほどイラン・イスラム共和国に合意形成の大きな機会を与えた人はいない」とし、「悲劇的に彼らは合意に達することができなかった」と述べた。
トランプ大統領は、イランの海軍、空軍、軍事生産施設は破壊され、通貨の価値がなくなったと主張し、政権は「一網打尽」にあると主張した。
同氏は、金融機関、企業、空港、政府機関がイランに「ライフライン」を提供している国は、同氏が言うところの甚大な経済的影響に直面するだろうと述べた。
大統領は即時閉鎖を望む経路として石油密輸、通貨スワップライン、現金送金、両替所、船舶登録所、フロント企業を挙げ、イランの核兵器取得は決して許されないと強調した。
この発表は、トランプ政権が世界規模のテロ資金と収益源と呼ぶものを遮断することを目的として、「経済の怒り作戦」の旗印の下で4月以来実施してきた圧力キャンペーンを延長するものである。
イランのアッバス・アラグチ外務大臣は、これまでのラウンドでイランを服従させることができなかった後、米国が制裁をエスカレートさせていると非難し、このアプローチが紛争からの交渉による離脱への障壁になっていると主張した。
この事態のエスカレーションは、イランの最も重要な商業パートナーの一つであるアラブ首長国連邦が、イランが湾岸諸国に向けて2発の弾道ミサイルを発射したと発表したことを受け、テヘランとの貿易と金融取引をすべて停止した翌日に起こった。イランはミサイル発射を否定し、この主張は「偽旗」だと主張した。
トランプ大統領の発表を受けて株式先物相場は若干上昇し、S&P500先物指数の上昇率は0.1％未満となった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/19/us-iran-war-trump-hormuz-economic-warfare.html",
    publishedAt: "2026-08-20T01:02:50+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "japan-exports-beat-estimates-in-july-as-b86ba7ef",
    title: "Japan exports beat estimates in July as robust chip shipments power fifth straight month of gains",
    titleJa: "堅調なチップ出荷が5か月連続の増加を支え、日本の輸出は7月の予想を上回った",
    summaryJa: "半導体出荷は7月も引き続き日本の輸出を牽引し、予想を上回り2022年10月以来の高い伸びを記録した。輸出の伸びは５カ月連続で加速し、２３．２％となった。ロイターがまとめたエコノミスト予想は１９．９％だった。",
    bodyOriginal: `Semiconductor shipments continued to power Japan's exports in July, helping clock the fastest growth since October 2022, beating expectations.
Exports growth accelerated for a fifth straight month, coming in at 23.2%. Economists polled by Reuters had estimated growth at 19.9%.
Shipments of semiconductor equipment posted a massive 49.1% jump in value, reflecting continued demand, boosted by the artificial intelligence boom.
In terms of destinations, shipments to China — Japan's largest trading partner — rose 25.8%, while exports to the U.S. climbed 22%.
Despite seeing export values grow, the gains were mostly due to a weak yen and higher selling prices, with volumes only rising 5.2% in July.
The benchmark Nikkei 225 gained 0.64% after the data release, while the yen weakened 0.11% against the dollar to trade at 158.35.
Strong exports over the past few months have been instrumental in supporting Japan's GDP. On a year-on-year basis, the economy grew at 0.7% in the second quarter, compared to 0.5% in the first three months of the year.
While GDP missed expectations on a quarter-on-quarter and annualized basis, exports helped soften the impact, with the sector being the largest contributor to economic growth.
Imports to Japan in July climbed 27.8%, the highest level since November 2022, also beating analysts' estimates of a 26.5% gain. Due to the Iran war, the country saw a 87.8% surge in petroleum imports by value as oil prices climbed.
Japan meets over 87% of its energy needs via imports, according to the International Energy Agency.`,
    bodyJa: `半導体出荷は7月も引き続き日本の輸出を牽引し、予想を上回り2022年10月以来の高い伸びを記録した。
輸出の伸びは５カ月連続で加速し、２３．２％となった。ロイターがまとめたエコノミスト予想は１９．９％だった。
半導体装置の出荷額は、人工知能ブームに後押しされた継続的な需要を反映して、49.1% の大幅な増加を記録しました。
仕向地に関しては、日本の最大の貿易相手国である中国への輸出が25.8％増加し、米国への輸出が22％増加した。
輸出額が増加したにもかかわらず、その増加は主に円安と販売価格の上昇によるもので、7月の数量増加は5.2％にとどまった。
データ発表後、指標となる日経平均株価は０．６４％上昇し、円は対ドルで０．１１％安の１５８．３５円で取引された。
過去数カ月間の好調な輸出は日本のGDPを支えてきた。前年同期比では、経済成長率は第 2 四半期は 0.7% でしたが、今年の最初の 3 か月は 0.5% でした。
GDPは前期比および年率ベースで予想を下回ったものの、同セクターが経済成長に最大の貢献を果たしており、輸出が影響を和らげるのに役立った。
７月の日本への輸入は２７．８％増と、２０２２年１１月以来の高水準となり、アナリスト予想の２６．５％増も上回った。イラン戦争の影響で、原油価格の上昇に伴い、同国の石油輸入は金額ベースで87.8％増加した。
国際エネルギー機関によると、日本はエネルギー需要の87％以上を輸入でまかなっている。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/20/japan-exports-imports-july-chip-ai.html",
    publishedAt: "2026-08-20T00:30:32+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 2,
  },
  {
    id: "call-buying-bonanza-around-trump-s-hyper-1ae624fc",
    title: "Call-buying bonanza around Trump's Hyperliquid comments includes some eyebrow-raising trades",
    titleJa: "トランプ大統領のハイパーリキッド発言を巡るコール買いの大成功には、眉をひそめるような取引も含まれている",
    summaryJa: "ドナルド・トランプ大統領が業界リーダーらとの会合を予定していたために、水曜日はすでに暗号資産にとって最高の日となりつつあり、ビットコイン取引は6月以来の最高値を記録した。そこでビッグニュースが飛び込んできた。",
    bodyOriginal: `Wednesday was already shaping up to be the best for crypto assets in recent memory, with bitcoin trading the highest since June as President Donald Trump scheduled a meeting with industry leaders.
Then the big news hit.
Around 3 p.m. ET, the president hinted at regulating Hyperliquid, the decentralized exchange that's been garnering popularity among traders as the home base of "perpetual futures" trading – the swap-like derivatives contracts with high leverage and no expiration that have been a thorn in the side of incumbent exchanges this year – despite U.S. residents not being allowed on the platform.
"I understand that [Commodity Futures Trading Commission Chair] Mike [Selig] is also working to bring Hyperliquid into the United States in a fully compliant and legal fashion," Trump said in a press conference.
Shares of Hyperliquid Strategies (PURR), the publicly traded treasury company that owns HYPE tokens, surged 30% before the closing bell, bringing the stock's year-to-date gain to more than 163%. HYPE, the digital token that powers the exchange's blockchain-based settlement and operations, jumped 18% to just below record highs. Shares of Cboe Global Markets dropped 3.5%, Miami International Holdings fell 3.1% and CME Group slid 1.7%.
"We've been trying for awhile to figure out how to get into the U.S. and the CFTC has been quite responsive, but when Trump says it at a press conference, it means it's a priority," David Schamis, CEO of Hyperliquid Strategies and founding partner at Atlas Merchant Capital, said in a call after the bell on Wednesday.
"You can't do something like this and make new rules – you see how hard it is to get Clarity [Act] passed. You have to figure out how to make it work with rules existing today," he added. The Clarity Act is a bill that would establish a regulatory framework for cryptocurrencies.
Options volume in Hyperliquid was almost eight times the 30-day average, with more than 120,000 calls traded versus under 8,000 puts. Traders bought almost 45,000 calls and sold 29,000. About $10 million in premium exchanged hands, with the biggest single trades coming about a half-hour after the announcement when someone bought 2,000 8-strike calls expiring in November and December for about $510,000.
There was also a flurry of heavy call-trading activity in the hours before the announcement. Just shy of $2 million in calls of various strikes and expiries traded before 3 p.m., including some trades that carried signs of indiscriminate and rushed buying indicative of someone eager to get in on a trade.
In one case, around 11 a.m., someone spent $65,000 trading 719 of the 8-strike calls expiring in mid-October, paying 90 cents each for a contract that had just 67 open positions coming into Wednesday. Those calls are now worth $2.45 each, meaning the trader was up about $111,000 by the close.
"These by definition were opening trades so you're asking me to believe someone went out in front of this announcement and sold a bunch of upside call opening trades?" said Dennis Davitt, CNBC contributor and co-founder of Millbank Dartmoor Portsmouth, an investment firm managing more than $500 million in institutional assets. "I hope they have a robust alibi."
Trading in the iShares Bitcoin Trust ETF (IBIT) was more than 4.5 times the 30-day average even before the Hyperliquid headlines as Treasury yields retreated, and investors overall pivoted toward underperforming sectors of the past year. Bitcoin volatility measured by Volmex Labs' BVIV Index jumped 13% after hitting a year-to-date low of 35.5 Friday.
Whether Hyperliquid's success translates into a bitcoin price revival remains to be seen. Shares of Michael Saylor's Strategy rallied nearly 13% Wednesday, while Coinbase surged almost 10%. Both are down roughly 30% year-to-date after bitcoin posted the worst year relative to the S&P 500 since 2019
"We have four things on our balance sheet," said Schamis. "Two billion of HYPE token, cash, common equity, and deferred tax liability. No debt and no funky converts."
Correction: Hyperliquid Strategies does not own the Hyperliquid exchange.`,
    bodyJa: `ドナルド・トランプ大統領が業界リーダーらとの会合を予定していたために、水曜日はすでに暗号資産にとって最高の日となりつつあり、ビットコイン取引は6月以来の最高値を記録した。
そこでビッグニュースが飛び込んできた。
午後3時頃ETによれば、大統領はハイパーリキッドを規制することをほのめかした。この分散型取引所は「無期限先物」取引の本拠地としてトレーダーの間で人気を集めている分散型取引所である。高レバレッジで有効期限のないスワップのようなデリバティブ契約であり、今年既存の取引所にとって厄介な問題となっているが、米国居住者の同プラットフォームへの利用は許可されていない。
トランプ大統領は記者会見で「（商品先物取引委員会の）マイク（セリグ委員長）も、完全に準拠した合法的な方法でハイパーリキッドを米国に導入することに取り組んでいることを理解している」と述べた。
HYPEトークンを所有する上場財務会社であるハイパーリキッド・ストラテジーズ（PURR）の株価は、取引終了ベルの前に30％急騰し、年初からの株価上昇率は163％以上となった。同取引所のブロックチェーンベースの決済と運営を支えるデジタルトークンであるHYPEは18％上昇し、過去最高値をわずかに下回った。 CBOEグローバル・マーケッツの株価は3.5％下落し、マイアミ・インターナショナル・ホールディングスは3.1％下落し、CMEグループは1.7％下落した。
ハイパーリキッド・ストラテジーズの最高経営責任者（CEO）でアトラス・マーチャント・キャピタルの創設パートナーであるデビッド・シャミス氏は、水曜日の鐘後の電話で、「われわれはしばらく米国に参入する方法を模索しており、CFTCはかなり反応してきたが、トランプ大統領が記者会見でそう言うということは、それが優先事項だということだ」と語った。
「このようなことをして新しいルールを作ることはできません。Clarity [法]を通過させることがいかに難しいかがわかります。今日存在するルールでそれを機能させる方法を見つけなければなりません。」と彼は付け加えた。クラリティ法は、仮想通貨の規制枠組みを確立する法案です。
ハイパーリキッドのオプション取引高は30日平均のほぼ8倍で、プットが8,000件未満であるのに対し、コールは12万件以上取引された。トレーダーらは約４万５０００コールを買い、２万９０００コールを売った。約1,000万ドルのプレミアムな取引が行われ、最大の単独取引は発表の約30分後に行われ、誰かが11月と12月に期限切れとなる2,000の8ストライクコールを約51万ドルで購入した。
発表の数時間前には激しいコール取引活動もあった。午後3時前に取引されたさまざまなストライキや期限切れのコールは200万ドル手前で、その中には取引に参加しようとしている人物を示す無差別で急ぎの買いの兆候が見られる取引も含まれていた。
あるケースでは、午前11時ごろ、誰かが10月中旬に期限切れとなる8ストライクコールのうち719件の取引に6万5000ドルを費やし、水曜日に到着するオープンポジションがわずか67件だった契約にそれぞれ90セントを支払った。これらのコールは現在それぞれ 2.45 ドルの価値があり、トレーダーは取引終了までに約 111,000 ドル上昇したことを意味します。
「これらは定義上、オープニングトレードだったので、誰かがこの発表の前に出てきて、大量のアップサイドコールのオープニングトレードを売ったということを信じるように求めているのですか？」 CNBC寄稿者であり、5億ドル以上の機関投資家資産を管理する投資会社ミルバンク・ダートムーア・ポーツマスの共同創設者であるデニス・ダビット氏はこう語る。 「彼らにしっかりとしたアリバイがあることを願っています。」
iシェアーズ・ビットコイン・トラストETF（IBIT）の取引は、米国債利回りが後退し、投資家が全体的に過去1年間のパフォーマンスの悪いセクターに方向転換したため、ハイパーリキッドのヘッドラインが報じられる前でさえ、30日間平均の4.5倍を超えていた。 Volmex LabsのBVIV指数で測定されたビットコインのボラティリティは、金曜日に年初来安値の35.5を記録した後、13％上昇した。
Hyperliquidの成功がビットコイン価格の復活につながるかどうかはまだ分からない。水曜日、マイケル・セイラー・ストラテジーの株価は13％近く上昇し、コインベースは10％近く急騰した。ビットコインがS&P 500と比較して2019年以来最悪の年を記録したことを受け、両者は年初から約30％下落している
「バランスシートには4つの項目があります」とシャミス氏は語った。 「20億のHYPEトークン、現金、普通株式、繰延税金負債。借金もなければ、ファンキーな転向者もいない。」
訂正: Hyperliquid Strategies は Hyperliquid 取引所を所有していません。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/19/call-buying-bonanza-around-trumps-hyperliquid-comments-includes-eyebrow-raising-trades.html",
    publishedAt: "2026-08-19T23:57:47+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "india-s-gen-z-are-driving-up-a-mega-boom-fe2943ff",
    title: "India's Gen Z are driving up a mega boom in its beauty market",
    titleJa: "インドのZ世代が美容市場で大ブームを巻き起こしている",
    summaryJa: "インドのZ世代が美容市場で大ブームを巻き起こしている- 公開されました",
    bodyOriginal: `India's Gen Z are driving up a mega boom in its beauty market
- Published
India's beauty brands have been drawing a lot of interest from global capital recently.
Earlier this year in March, American luxury cosmetics maker Estée Lauder fully acquired, external the homegrown ayurvedic company Forest Essentials. France's L'Oréal Group followed in June, picking up a majority stake in digital personal care brand Innovist, external. And Unilever has made at least four beauty investments in the country through its venture capital arm in the last couple of years.
Founded at the turn of the millennium in a garage in the Himalayan foothills by entrepreneur Mira Kulkarni - a single mother of two - Forest Essentials has grown from a fledgling startup into a billion-dollar company with a global presence over the last two decades.
Its rise mirrors the explosive growth being witnessed of the country's beauty industry, which was valued at about $23bn (£17.08bn) in 2025 but is expected to nearly double in size to $40bn by the end of this decade, growing at twice the rate of the country's GDP and the broader retail market.
Rising spending power in Asia's third-largest economy is partly driving this boom, according to experts.
India's per capita income crossed $2,000 in 2019, a threshold beyond which discretionary spending tends to grow exponentially, according to Redseer, a business consultancy. And by 2030, some 155 million households are expected to earn more than $9,500 annually, providing a further tailwind to growth.
"Historically we've underspent on beauty because there was just no purchasing power for anything other than the very basic stuff - such as all-purpose soap or face powder," Kushal Bhatnagar, a partner at Redseer, told the BBC.
"But now, along with more spending power, there is improved access, distribution and product education. The internet broke these barriers, with brands leveraging the power of social media platforms and influencers to reach consumers directly."
In fact, e-commerce is expected to drive around 35% of overall beauty spending by 2030, compared with just 8% five years ago, according to Reedseer's estimates.
The pandemic also proved to be a major game-changer for the industry, according to Vaishali Gupta, whose two beauty ventures have witnessed breakneck expansion since their launches during Covid.
She co-founded the vegan skincare company Hyphen with Bollywood star Kriti Sanon in 2023 and also runs mCaffeine which makes scrubs, washes and lotions and calls itself India's first caffeinated personal care brand.
"Covid pushed people inward and toward self-care, and it coincided with a massive wave of digital penetration tier-one, tier-two and tier-three towns. Suddenly Indian consumers had access to beauty and skincare education they'd never had before - such as what was trending in Korea or Europe, or what specific ingredients could do for brightening or acne control," Gupta told the BBC.
"That knowledge base created a consumer who knew exactly what they wanted. And that's really where the boom in Indian skincare began."
In the past year Gupta's brands have grown their top line by 100% and she anticipates strong double-digit growth going forward.
Both Hyphen and mCaffeine, she says, are now among the top 10 brands across their categories in India.
"This is a structural growth story - and we're just at the beginning of what this market can become," Gupta said.
It is no surprise then, that a host of Bollywood stars - from Deepika Padukone to Katrina Kaif and Shilpa Shetty of Big Brother fame - have also jumped on the bandwagon and launched skincare companies in recent years.
The growth in customers is coming from all corners of the country and isn't restricted to big cities.
What's also striking, according to Gupta, is that the Gen Z is driving it, spending roughly double what millennials did on skincare and personal care.
Data from Wamart-backed Flipkart, India's largest e-commerce platform corroborates this. Some 56% of its beauty and personal care shoppers are Gen Z, with 70% of them discovering the products they buy through social media.
Two out of three beauty searches on Flipkart also come from non-metro areas.
According to Redseer, Gen Z and Gen Alpha's share of beauty spending will grow from 32% in 2024 to around 50% by 2030.
It's an inflection point, according to Priyanka Bhargav, who leads brand strategy at Flipkart. What was once an "aspirational category has now become a daily expression of self-care" for many young Indians, she says.
Going forward, the consumer is only likely to become more sophisticated as the market grows from here. And the next leg of growth will be driven by niche brands innovating with specific ingredients, dermatologist-backed products and a focus on skin nutrition, say experts.
While only a handful of individual brands have scaled meaningfully so far, at this pace of growth at least 10-15 beauty companies will cross $200m in revenue in the next three to five years, according to Bhatnagar.
"And when that happens, we expect many of them to tap the public markets, and for IPO (initial public offering) and M&A (mergers and acquisitions) activity to really intensify in the sector," he said.
Follow BBC News India on Instagram, external, YouTube,, external X, external and Facebook, external.`,
    bodyJa: `インドのZ世代が美容市場で大ブームを巻き起こしている
- 公開されました
インドの美容ブランドは最近、世界資本から大きな関心を集めている。
今年3月初め、アメリカの高級化粧品メーカー、エスティ・ローダーが、自社のアーユルヴェーダ企業フォレスト・エッセンシャルズを社外から完全買収した。フランスのロレアル・グループも6月に続き、デジタルパーソナルケアブランドのイノビスト（社外）の株式の過半数を取得した。そしてユニリーバは、過去数年間にベンチャーキャピタル部門を通じて国内で少なくとも4件の美容投資を行った。
2000 年代の変わり目に、2 人の子供のシングルマザーである起業家ミラ クルカルニによってヒマラヤ山麓のガレージで設立されたフォレスト エッセンシャルズは、過去 20 年にわたって、設立間もない新興企業から世界的に存在感を示す 10 億ドル規模の企業に成長しました。
この上昇は、同国の美容産業の爆発的な成長を反映しており、2025年には約230億ドル（170億8000万ポンド）と評価されていたが、この10年末までにその規模はほぼ2倍の400億ドルに拡大すると予想されており、同国のGDPやより広範な小売市場の2倍の割合で成長している。
専門家らによると、アジア第3位の経済大国の購買力の上昇がこのブームを後押ししている部分があるという。
ビジネスコンサルタント会社レッドシーアによると、インドの一人当たり所得は2019年に2000ドルを超え、これを超えると裁量的支出が急激に増加する傾向にあるという。そして、2030 年までに約 1 億 5,500 万世帯が年間 9,500 ドル以上の収入を得ると予想されており、成長へのさらなる追い風となります。
レッドシーア社のパートナー、クシャル・バトナガル氏はBBCに対し、「歴史的に私たちは美容にあまりお金をかけてこなかった。なぜなら、万能石鹸やフェイスパウダーなど、ごく基本的なもの以外には購買力がなかったからである」と語った。
「しかし今では、購買力の増加とともに、アクセス、流通、製品教育が改善されています。インターネットはこれらの障壁を打ち破り、ブランドはソーシャルメディアプラットフォームやインフルエンサーの力を活用して消費者に直接アプローチできるようになりました。」
実際、Reedseer の試算によれば、5 年前はわずか 8% でしたが、2030 年までに電子商取引が美容関連支出全体の約 35% を占めるようになると予想されています。
ヴァイシャリ・グプタ氏によれば、パンデミックは業界にとって大きな変革をもたらしたとも証明されており、同社の美容ベンチャー2社はコロナ禍での立ち上げ以来、猛烈な勢いで拡大しているという。
彼女は、2023年にボリウッドスターのクリティ・サノンとともにビーガンスキンケア会社ハイフンを共同設立し、スクラブ、ウォッシュ、ローションを製造し、インド初のカフェイン入りパーソナルケアブランドを名乗るmCaffeineも経営している。
「新型コロナウイルスは人々を内向きにセルフケアに向かわせ、それは第一級、第二級、第三級の都市へのデジタル浸透の大波と重なった。突然、インドの消費者はこれまで受けたことのない美容やスキンケアの教育にアクセスできるようになった。例えば、韓国やヨーロッパで何がトレンドになっているのか、美白やニキビ対策に特定の成分がどのような効果があるのか​​など」とグプタ氏はBBCに語った。
「その知識ベースは、自分たちが何を望んでいるのかを正確に知っている消費者を生み出しました。そして、まさにそこからインドのスキンケアブームが始まりました。」
過去 1 年間でグプタ氏のブランドは売上高を 100% 成長させており、今後は 2 桁の大幅な成長が見込まれると彼女は予想しています。
彼女によれば、Hyphen と mCaffeine は両方とも、現在ではインドの各カテゴリー全体でトップ 10 ブランドに入っています。
「これは構造的な成長物語であり、私たちはこの市場がどのようなものになり得るかの始まりにすぎません」とグプタ氏は語った。
近年、ディーピカー・パドゥコーンからカトリーナ・カイフ、ビッグ・ブラザーで有名なシルパ・シェティに至るまで、多くのボリウッドスターがこの流れに乗り、スキンケア会社を立ち上げたのも不思議ではありません。
顧客の増加は大都市に限定されず、国の隅々から来ています。
グプタ氏によると、さらに驚くべきことは、Z世代がそれを推進しており、ミレニアル世代がスキンケアやパーソナルケアに費やした金額のおよそ2倍を費やしていることだという。
Wamart が支援するインド最大の電子商取引プラットフォームである Flipkart のデータがこれを裏付けています。美容品やパーソナルケアの買い物客の約 56% が Z 世代で、そのうち 70% がソーシャル メディアを通じて商品を見つけて購入しています。
Flipkart での美容検索の 3 件のうち 2 件は、大都市圏以外からのものです。
Redseer によると、Z 世代とアルファ世代の美容支出の割合は、2024 年の 32% から 2030 年までに約 50% に増加すると予想されています。
フリップカートでブランド戦略を率いるプリヤンカ・バルガフ氏によれば、これは転換点だという。かつては「憧れのカテゴリー」だったものが、今では多くのインドの若者にとって日常的なセルフケアの表現になっている、と彼女は言う。
今後、市場が成長するにつれ、消費者はさらに洗練されていくでしょう。そして、次の成長は、特定の成分、皮膚科医の支援を受けた製品、皮膚の栄養に重点を置いた革新を行うニッチブランドによって推進されるだろうと専門家は述べています。
バトナガル氏によると、これまで有意義に規模を拡大できている個別ブランドはほんの一握りだが、このペースで成長すれば、少なくとも10～15社の美容企業が今後3～5年で収益2億ドルを超えるだろうという。
「そしてそれが実現すれば、多くの企業が公開市場に参入し、この分野でIPO（新規株式公開）やM&A（合併・買収）活動が本格化すると予想している」と同氏は述べた。
Instagram (外部)、YouTube、外部 X (外部)、および Facebook (外部) で BBC News India をフォローしてください。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgr71kv9k95o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-19T23:31:24+00:00",
    category: "金融政策",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/fbd6/live/e0b60a90-9194-11f1-9e9c-c71e84be4584.jpg",
    readTime: 7,
  },
  {
    id: "my-son-does-not-work-yet-pays-500-for-af-aaa7eab0",
    title: "My son does not work, yet pays $500 for Affordable Care Act health insurance. Is that fair?",
    titleJa: "私の息子は働いていませんが、医療費負担適正化法の健康保険に 500 ドルを払っています。それは公平ですか？",
    summaryJa: "「多額のお金を持っているにもかかわらず、課税所得がほとんど、またはまったくない人でも、ACA マーケットプレイスの補助金を受ける資格がある人を見かけます。」",
    bodyOriginal: `“I see people who have a lot of money but little or no taxable income who still qualify for ACA Marketplace subsidies.”`,
    bodyJa: `「多額のお金を持っているにもかかわらず、課税所得がほとんど、またはまったくない人でも、ACA マーケットプレイスの補助金を受ける資格がある人を見かけます。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/my-son-does-not-work-yet-he-pays-500-for-aca-health-insurance-how-is-that-fair-92f578c4?mod=mw_rss_topstories",
    publishedAt: "2026-08-19T23:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-15414148",
    readTime: 2,
  },
  {
    id: "i-quit-my-80-000-job-to-make-ice-cream-h-df234dfc",
    title: "I quit my £80,000 job to make ice cream - here's how",
    titleJa: "アイスクリームを作るために8万ポンドの仕事を辞めました - その方法は次のとおりです",
    summaryJa: "アイスクリームを作るために8万ポンドの仕事を辞めました - その方法は次のとおりです- 公開されました",
    bodyOriginal: `I quit my £80,000 job to make ice cream - here's how
- Published
At 28, Vivien Wong walked away from an £80,000-a-year accounting job to start making ice cream with her brother.
Growing up in her family's bakery, she had dreamt of one day running her own business. She says her father's cancer diagnosis made her take the leap to create Little Moons.
The mochi balls of doughy rice filled with ice-cream exploded on TikTok, but its apparent overnight success was more than a decade in the making.
Wong shares the lessons she learnt along the way and her advice for anyone thinking about starting a business of their own.
Don't wait until you're ready
One of the biggest mistakes aspiring founders make is waiting for everything to be perfect so Wong recommends following an "80-20 rule".
"Don't wait for perfection because that extra 20 is going to take you too long and you might miss the market," she says.
Instead, she recommends getting a product "80% of the way there", launching it and improving it as you go - like she did with Little Moons.
For its first five years Wong sold mochi to restaurants and cinemas before she saved enough money to invest in branding and move into supermarkets.
Be prepared to make sacrifices
Wong left a well-paid job and moved in with her brother so they could save money and reinvest any profits into the business.
She remembers swapping a polished City environment, where there was always someone else to call for help, for having to do almost everything herself.
"All roads lead to you when you run your own business so even though I wasn't great with IT, I was head of IT".
She also had to learn about machinery, product development, making ice cream and paying wages.
Wong says she even did the company accounts on Sundays rather than pay for a bookkeeper because, at the time, saving the money mattered more than getting the day back.
Know your brand
Wong's advice to people starting a business is about the importance of knowing your brand and saying no to opportunities that don't fit.
"If you know what your brand values are, you know how you can apply that to a trend, but you also know when to leave it alone," she says.
"Pick and choose what you say yes to and don't try and do everything. Stay focused, know exactly what you stand for."
She also warns against blindly taking advice from experts - but to listen and think for yourself.
"You realise that advice they're giving you was probably right for another business but not for your specific set of circumstances."
She and her brother would discuss advice they received, sometimes take it and sometimes reject it and over time, making those decisions helped build her confidence.
Set boundaries with family
Wong says working with her brother has been a huge strength but there were also "definitely a lot of arguments".
They had to learn to behave like colleagues at work rather than siblings.
When the company was considering moving from a 5,000 sq ft factory to a 30,000 sq ft site, with annual rent jumping from around £40,000 to £500,000, Wong says she was more willing to take the risk while her brother was naturally more cautious.
But that difference in opinion has helped them make better decisions as they "balance each other out".
Her advice for anyone working with family is to set boundaries for how you interact in the workplace.
"You have to be really mindful that you're being as respectful to your brother as a colleague and you see him as a colleague and not a sibling," she says.
Now that Little Moons has a chief executive and wider leadership team, the pair are less involved in the day-to-day running of the company which Wong says has allowed them to "just be brother and sister again".
'Overnight success' can take years
Little Moons became a TikTok phenomenon during the pandemic but Wong says most people don't realise it had been running for a decade already.
"Everyone says we're like an overnight success 12 years in the making," she says.
Before going viral, the company had spent years learning how to manufacture at scale, train staff, export products and supply major retailers.
That preparation proved essential when demand suddenly exploded as the business might not have survived its viral moment without the team and infrastructure already behind it.
"Business is a combination of many, many, many boring things and many boring small steps," she says.
For anyone watching founders seemingly blow up on social media overnight, she says it's important to remember that the viral moment is often the part of the story everyone sees rather than the beginning.
Related topics
- Published25 June`,
    bodyJa: `アイスクリームを作るために8万ポンドの仕事を辞めました - その方法は次のとおりです
- 公開されました
ヴィヴィアン・ウォンさんは28歳のとき、年収8万ポンドの経理の仕事を辞め、弟と一緒にアイスクリーム作りを始めた。
実家のパン屋で育った彼女は、いつか自分のビジネスを経営することを夢見ていました。彼女は、父親がガンと診断されたことが、リトル・ムーンズの創設に踏み切ったと言います。
もちもちのご飯にアイスクリームを詰めた餅団子が TikTok で爆発的に流行したが、その明らかな一夜にしての成功には 10 年以上の歳月がかかった。
ウォンは、その過程で学んだ教訓と、自分のビジネスを始めようと考えている人へのアドバイスを共有します。
準備ができるまで待たないでください
意欲的な創業者が犯す最大の間違いの 1 つは、すべてが完璧になるのを待つことであるため、ウォン氏は「80 対 20 ルール」に従うことを推奨しています。
「完璧を求めないでください。20 個追加すると時間がかかりすぎて、市場を逃してしまう可能性があります」と彼女は言います。
代わりに、彼女は、Little Moons で行ったように、「80% 完成した」製品を入手し、それを発売し、途中で改善することを推奨しています。
最初の 5 年間、ウォンさんはレストランや映画館に餅を売り、その後ブランディングに投資してスーパーマーケットに進出するのに十分なお金を貯めました。
犠牲を払う覚悟をしなさい
ウォンさんは、お金を節約し、利益を事業に再投資できるよう、高給の仕事を辞め、兄と一緒に引っ越しました。
彼女は、ほとんどすべてのことを自分で行わなければならなかったために、常に助けを求められる誰かがいた洗練されたシティの環境と入れ替わったことを覚えています。
「自分のビジネスを経営するとき、すべての道は自分に通じているので、IT が得意ではなかったにもかかわらず、IT の責任者になりました。」
彼女はまた、機械、製品開発、アイスクリームの製造、賃金の支払いについても学ばなければなりませんでした。
ウォンさんは、当時は一日を取り戻すことよりもお金を節約することが重要だったので、簿記係に支払う代わりに日曜日に会社の会計処理をしたことさえあったと語った。
自分のブランドを知る
ビジネスを始める人々へのウォン氏のアドバイスは、自分のブランドを知り、合わない機会にはノーと言う重要性についてです。
「自分のブランド価値が何であるかを知っていれば、それをトレンドにどう適用できるかがわかりますが、いつそれを放っておくべきかもわかります」と彼女は言います。
「イエスと言えるものを選んで、すべてをやろうとしないでください。集中して、自分が何を支持しているのかを正確に理解してください。」
彼女はまた、専門家のアドバイスを盲目的に受け入れるのではなく、耳を傾けて自分の頭で考えるように警告しています。
「彼らがあなたに与えているアドバイスは、別のビジネスにはおそらく正しいが、あなたの特定の状況には当てはまらないことに気づきました。」
彼女と彼女の兄弟は、受け取ったアドバイスについて話し合い、時には受け入れ、時には拒否し、時間をかけてそれらの決断を下すことが彼女の自信を育むのに役立ちました。
家族との境界線を設定する
ウォンさんは、兄と協力することが大きな力になったが、「間違いなくたくさんの口論」もあったと語る。
彼らは兄弟ではなく職場の同僚のように振る舞うことを学ばなければなりませんでした。
会社が5,000平方フィートの工場から3万平方フィートの敷地への移転を検討しており、年間賃料が約4万ポンドから50万ポンドに跳ね上がることを検討していたとき、ウォンさんは、兄は当然より慎重だったが、彼女はリスクを取ることに前向きだったと語る。
しかし、その意見の違いは、彼らが「お互いのバランスをとっている」ため、より良い決定を下すのに役立ちました。
家族と一緒に働く人への彼女のアドバイスは、職場での関わり方に境界線を設けることです。
「兄弟に対して同僚と同じように敬意を払い、兄を兄弟ではなく同僚として見るということを本当に意識しなければなりません」と彼女は言う。
現在、リトル・ムーンズには最高経営責任者と幅広い経営陣がおり、二人は日常の会社運営にはあまり関与していないため、ウォン氏は「再び兄妹に戻れる」と語った。
「一夜にして成功」するには何年もかかることがある
Little Moonsはパンデミック中にTikTok現象となったが、ほとんどの人はすでに10年も運営されていたことに気づいていないとウォン氏は言う。
「私たちは12年間かけて一夜にして成功したようなものだと誰もが言います」と彼女は言います。
急速に広まる前に、同社は大規模な製造、スタッフの訓練、製品の輸出、大手小売店への供給方法を何年もかけて学んできました。
需要が突然爆発したとき、その準備が不可欠であることが判明しました。なぜなら、すでにサポートしているチームとインフラストラクチャがなければ、ビジネスはそのバイラルな瞬間を乗り切ることができなかったかもしれないからです。
「ビジネスとは、たくさんの、たくさんの、退屈なことと、退屈な小さなステップの組み合わせです」と彼女は言います。
創業者が一夜にしてソーシャルメディア上で爆発する様子を見ている人にとって、バイラルな瞬間は多くの場合、ストーリーの始まりではなく、誰もが目にする部分であることを覚えておくことが重要だと彼女は言う。
関連トピック
- 6 月 25 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cz97148eye0o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-08-19T23:08:03+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/6b0d/live/04272360-9bd1-11f1-bb4d-1147ef2e78e5.jpg",
    readTime: 6,
  },
  {
    id: "u-s-government-debt-passes-40-trillion-m-ff3c25ca",
    title: "U.S. government debt passes $40 trillion, more than doubling in a decade",
    titleJa: "米国政府債務が40兆ドルを超え、10年で2倍以上に増加",
    summaryJa: "財務省によると、政府債務は40兆ドルを超え、赤字の驚異的な基準をさらに超えた。米国の IOU 総額は火曜日の時点で 40 兆 500 億ドルに達し、30 兆ドルを超えてから約 4 年半が経過しました。新型コロナウイルスのパンデミック（世界的大流行）中の景気刺激策によって財政赤字が何年にもわたって拡大し、公的債務の割合は100％近くになった。",
    bodyOriginal: `Government debt has eclipsed $40 trillion, passing yet another staggering benchmark for red ink, according to the Treasury Department.
The total U.S. IOU hit $40.05 trillion as of Tuesday, some four and a half years after topping $30 trillion. Years of escalating budget deficits, pushed higher by stimulus funding during the Covid pandemic, have seen the public share of the debt near 100%.
In the most recent monthly accounting of U.S. finances, Treasury reported a $432.3 billion deficit in July, the highest monthly total since March 2021. The year-to-date shortfall is nearing $1.8 trillion, higher than the same period a year ago.
Ten years ago, the debt level was at $19.4 trillion.
The U.S. fiscal situation has had market ramifications, which have played out recently and likely pushed the Treasury Department into announcing Wednesday that it is upping the size of its repurchases at the long end of the yield curve.
Treasury yields have surged since late June, hitting levels not seen since before the global financial crisis that ultimately saw the Federal Reserve take benchmark rates to near zero. The Fed also instituted an aggressive bond repurchasing program in late 2008 that helped suppress rates.
However, concerns over the debt-and-deficit situation, along with surging corporate bond issuance associated with artificial intelligence investments, rising term premia and worries over the Fed's commitment to inflation fighting, have been a tail wind for yields.
With the Fed hesitant to move on rates absent more information on inflation and the labor market, the government has seen its borrowing costs soar. Interest on the debt has totaled nearly $1.2 trillion this year and is the largest budget expenditure outside of Social Security and Medicare.
Correction: The debt total passed $40 trillion on Tuesday. An earlier version misstated the day.`,
    bodyJa: `財務省によると、政府債務は40兆ドルを超え、赤字の驚異的な基準をさらに超えた。
米国の IOU 総額は火曜日の時点で 40 兆 500 億ドルに達し、30 兆ドルを超えてから約 4 年半が経過しました。新型コロナウイルスのパンデミック（世界的大流行）中の景気刺激策によって財政赤字が何年にもわたって拡大し、公的債務の割合は100％近くになった。
米国財政の最新の月次会計で、財務省は7月に4,323億ドルの赤字を報告し、2021年3月以来最高の月間総額となった。年初からの不足額は1兆8000億ドル近くとなっており、前年同期を上回っている。
10年前の債務水準は19兆4000億ドルだった。
米国の財政状況は市場に影響を与えており、この影響が最近及んでおり、おそらく財務省は水曜日、イールドカーブの長期端での自社株買いの規模を拡大すると発表するに至ったであろう。
国債利回りは6月下旬から急上昇し、最終的に連邦準備理事会が基準金利をゼロ近くに引き下げた世界金融危機以前以来の水準に達した。 FRBはまた、2008年後半に積極的な債券買い戻しプログラムを導入し、金利の抑制に貢献した。
しかし、人工知能投資に関連した社債発行の急増、タームプレミアムの上昇、FRBのインフレ対策への取り組みに対する懸念に加え、債務赤字の状況に対する懸念が利回りの追い風となっている。
FRBがインフレや労働市場に関するさらなる情報が得られない状況で金利を決定することに躊躇しており、政府は借り入れコストが高騰していると見ている。今年の債務利息は総額1兆2000億ドル近くに上り、社会保障とメディケアを除けば最大の予算支出となっている。
訂正：火曜日に債務総額は40兆ドルを超えました。以前のバージョンではその日の記載に誤りがありました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/19/us-government-debt-passes-40-trillion-mark-for-the-first-time.html",
    publishedAt: "2026-08-19T22:34:33+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 2,
  },
  {
    id: "bessent-moves-to-curb-treasury-yields-pu-28260fc6",
    title: "Bessent moves to curb Treasury yields, putting new pressure on Warsh's Fed",
    titleJa: "ベッセント氏は米国債利回り抑制に動き、ウォーシュ氏率いるFRBに新たな圧力をかける",
    summaryJa: "Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.",
    bodyOriginal: `Treasury Secretary Scott Bessent is in the midst of a historic effort to tamp down long-term Treasury yields. He may also be complicating the work of his counterpart at the Federal Reserve, Chairman Kevin Warsh.
The Treasury Department on Wednesday said it would increase its buybacks of long-term Treasury debt, raising the maximum it will buy from $2 billion to at least $4 billion. The intervention had the effect of stemming a sell-off in the Treasury market that has pushed up yields to uncomfortable levels in recent days. The selloff had dominated global headlines as investors worried that rising Treasury yields would worsen an affordability crisis for consumers, complicate businesses' borrowing plans, threaten stock-market gains and make it more expensive for the government to finance its burgeoning debt.
While the buybacks aren't large compared to the total amount of debt outstanding, many in the markets interpreted the Treasury's new repurchase plan as a potent symbol of a long-standing effort by Bessent to bring down the yield on the 10-year Treasury and other maturities.
But doing so risks accelerating inflation while making the cost of financing the $32.2 trillion in debt held by the public more sensitive to potential interest-rate increases, bond traders and economists said. And it puts pressure on the independent Fed to back administration policies.
"We're slowly moving to the point where the logic of populism is going to insist that the central bank support fiscal objectives," said Joseph Brusuelas, principal and chief economist at RSM US.
President Donald Trump has demanded the Fed cut interest rates to lower the burden of financing the federal debt, while simultaneously adding to the debt. The federal budget deficit is on track to hit $2.1 trillion this year, according to the Congressional Budget Office.
"That will cause market distortions. And the sort of intervention that we saw this morning that will make life more difficult for Kevin Warsh," Brusuelas said.
Stated purpose: market liquidity
Treasury buybacks are formally aimed at improving market liquidity for some less-traded instruments, in other words, ensuring that there are enough buyers and sellers in a given market to establish reliable prices. In this case, Treasury aimed to take longer-term maturities, of 10 to 30 years, off the market.
Markets have long asked the Treasury to increase its buybacks. Newly issued debt tends to trade with healthy liquidity, but buyers can later become scarce for maturities that are less than the term originally issued. For instance, a 30-year Treasury bond issued in May 2020 — with 24 years left to maturity — traded on Wednesday at roughly 45 cents on the dollar. Removing these so-called off-the-run securities from the market, frees up the balance sheets of institutions to buy the more liquid issues, which could put downward pressure on rates.
The Treasury is not retiring debt, or engaging in a quantitative easing program like the Fed.
"The Fed can print money and buy what they want," said Brij Khurana, fixed-income portfolio manager at Wellington. "The Treasury doesn't have that capability. They need to fund the buybacks by issuing more bills," he said.
But that's where Bessent's actions become controversial. Instead of replacing long-term bonds with long-term bonds, Treasury is expected to replace them with short-term bills, manipulating the yield curve.
While that's the expectations among market participants, the Treasury itself didn't say in its announcement how it would fund the buybacks. The department didn't respond to requests for comment.
The announced buybacks quickly reversed the bond selloff. Bond prices move inversely to yields.
Since the outbreak of the Iran war, the 10-year yield has risen by nearly 70 basis points, topping out recently at 4.74% and pushing up 30-year mortgage rates to around 6.75%. The 10-year yield fell as low as 4.63% after news broke of the Treasury buybacks and finished the day at 4.65%.
Bessent criticized Yellen
The buybacks follow two other recent steps that have also effectively stemmed the rise in long-term Treasury yields.
Bessent in July used Treasury funds to support Japan's troubled currency, the yen, but chose to sell euros rather than dollars in the transaction. He also urged the Fed to expand a facility that would allow Japan to lend rather than sell its Treasury holdings for future interventions.
Then on Aug. 5, The Treasury Department said that it plans to continue with its recent practice of issuing relatively more short-term debt compared to the long-term trend.
That looks to be at odds with what his own Treasury Borrowing Advisory Committee has recommended. T-bills currently make up 22.2% of outstanding Treasury debt, higher than the rough 20% ceiling recommended by the TBAC, an apolitical group of market experts.
Bessent in 2024 criticized his predecessor, Treasury Secretary Janet Yellen, for adopting the same policy of issuing more T-bills. He described that as Yellen putting her thumb on the scale of markets to keep down the costs of overspending. Warsh similarly criticized the Fed for its bond purchases, saying by keeping yields down they opened the door for overspending by Congress and the administration.
TBAC has also cautioned the department not to politicize buybacks. In July 2025, TBAC said buybacks would be helpful if they were aimed at fixing market liquidity issues, but not if they changed the so-called debt profile, or changing the balance of debt between longer and shorter maturities, TBAC said.
"The Committee feels strongly that issuance is the primary tool for managing the debt profile," its minutes recorded.
How it could backfire
How the Treasury manages the profile of the vast pool of Treasury debt can have significant consequences for taxpayers. The federal government has made $963 billion in net interest payments in the first 10 months of fiscal year 2026, according to the Congressional Budget Office. Debt payments account for about 15% of fiscal spending.
When the federal debt is tipped more toward shorter maturities, those payments become more sensitive to rises and falls in interest rates. If the Fed chooses to raise interest rates, it would rapidly increase the government's interest expenses. Bessent's decision to issue more short-term debt could backfire.
Also, keeping down long-term rates could boost economic activity and the threat of inflation. "You're increasing the risk that inflation is sticky, and the Fed needs to keep rates higher," said Khurana.
Bessent's buyback prompted the dollar to fall by nearly 0.8% Wednesday against a basket of other currencies. That could increase inflation by making imports more expensive, Khurana said.
At the Fed, Warsh left investors uncertain about his future plans after his most recent press conference, on July 29. He said he was concerned about inflation that had remained above the Fed's 2% target for more than five years, but didn't raise interest rates and didn't clearly articulate what might prompt him to change his mind. He also suggested he believed the market had done his work for him in raising long-term bond yields.
Brusuelas also noted that Warsh wants an unfiltered message from bond prices to help him set policy more closely tied to a market rate. But the moves Bessent to tamp down longer-term yields through his various methods of intervention, threaten to cloud those signals.
Warsh's remarks accelerated the sell-off of long-term debt.
Warsh will have an opportunity to address these issues at an annual gathering of central banks in Jackson Hole, Wyo., next week.
But he will likely face long-term pressure to align Fed policy with the Treasury, Brusuelas said.
"I think that's a path that will lead to large policy errors over time," he said.`,
    bodyJa: `スコット・ベッセント財務長官は、長期国債利回りを押し下げる歴史的な取り組みの真っ最中だ。同氏はまた、FRBのカウンターパートであるケビン・ウォーシュ議長の仕事を複雑にしている可能性がある。
財務省は水曜日、長期国債の買い戻しを拡大し、買い入れ上限を20億ドルから少なくとも40億ドルに引き上げると発表した。この介入は、ここ数日利回りを不快な水準まで押し上げている米国債市場の売りを食い止める効果をもたらした。投資家らは、米国債利回りの上昇が消費者の手頃な価格危機を悪化させ、企業の借入計画を複雑にし、株式市場の利益を脅かし、膨れ上がる政府の債務のファイナンス費用をより高価にするのではないかと懸念しており、この株安が世界的な見出しを占めた。
債券残高に比べれば買い戻し額は大きくないものの、市場の多くの人は、財務省の新たな買い戻し計画は、10年物国債やその他の満期の利回りを引き下げようとするベッセント氏の長年にわたる取り組みの強力な象徴であると解釈していた。
しかし債券トレーダーやエコノミストらによると、そうすることでインフレが加速するリスクがあり、国民が抱える32兆2000億ドルの債務の資金調達コストが潜在的な金利上昇にさらに敏感になるという。そして、独立したFRBに対して政権政策を支持するよう圧力をかけることになる。
ＲＳＭ ＵＳのプリンシパル兼チーフエコノミスト、ジョセフ・ブルスエラス氏は「ポピュリズムの論理が中央銀行に財政目標を支持するよう要求する段階に徐々に移行しつつある」と述べた。
ドナルド・トランプ大統領は、連邦債務のファイナンス負担を軽減すると同時に債務を増加させるために利下げをFRBに要求している。議会予算局によると、今年の連邦財政赤字は２兆１０００億ドルに達する見込みだ。
「それは市場の歪みを引き起こすだろう。そして今朝我々が見たような介入は、ケビン・ウォーシュ氏の生活をさらに困難なものにするだろう」とブルスエラス氏は語った。
明示された目的: 市場の流動性
国債の買い戻しは正式には、取引の少ない商品の市場流動性を改善すること、言い換えれば、信頼できる価格を確立するために所定の市場に十分な買い手と売り手を確保することを目的としています。この場合、財務省は10年から30年の長期満期債を市場から排除することを目指した。
市場は長年、財務省に対し自社株買いの拡大を求めてきた。新しく発行された債券は健全な流動性で取引される傾向がありますが、当初の発行期間よりも短い満期では買い手が後から不足する可能性があります。例えば、2020年5月に発行された30年米国債（満期まで残り24年）は水曜日、1ドル＝約45セントで取引された。こうしたいわゆるオフ・ザ・ラン証券を市場から取り除くと、金融機関のバランスシートが解放され、より流動性の高い銘柄を購入できるようになり、金利に下押し圧力がかかる可能性がある。
財務省は債務を返済したり、FRBのような量的緩和プログラムを実施したりはしていない。
ウェリントンの債券ポートフォリオマネジャー、ブリジ・クラナ氏は「ＦＲＢは紙幣を刷って欲しいものを買うことができる」と述べた。同氏は「財務省にはそのような能力はない。財務省はさらに手形を発行して自社株買いの資金を賄う必要がある」と述べた。
しかし、ベッセント氏の行動が物議を醸すのはそこだ。財務省は長期国債を長期国債に置き換えるのではなく、短期国債に置き換えてイールドカーブを操作するとみられている。
市場参加者の間ではそれが予想されているが、財務省自体は発表の中で自社株買いの資金をどのように賄うかについては明らかにしていない。同省はコメントの要請に応じていない。
発表された自社株買いにより、債券売りはすぐに反転した。債券価格は利回りと逆に動きます。
イラン戦争勃発以来、10年債利回りは70ベーシスポイント近く上昇し、最近では4.74％で最高となり、30年住宅ローン金利は約6.75％まで上昇している。財務省の自社株買いのニュースが伝えられた後、10年債利回りは4.63％まで低下し、この日は4.65％で終了した。
ベッセント氏はイエレン氏を批判
この自社株買いは、長期国債利回りの上昇を効果的に阻止した他の2つの最近の措置に続くものだ。
ベッセント氏は7月、問題に直面している日本の通貨である円を支援するために財務省の資金を利用したが、取引ではドルではなくユーロを売ることを選択した。同氏はまた、将来の介入に備えて日本が国債保有を売却するのではなく、融資を可能にする制度を拡充するようFRBに要請した。
Error 500 (Server Error)!!1500.That’s an error.There was an error. Please try again later.That’s all we know.`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/08/19/bessent-treasury-buybacks-yields-warsh-fed.html",
    publishedAt: "2026-08-19T20:02:32+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "my-wife-can-claim-900-at-62-should-she-t-e94279ba",
    title: "My wife can claim $900 at 62. Should she take it now — or wait for her spousal benefit?",
    titleJa: "私の妻は 62 歳で 900 ドルを請求できます。今すぐ受け取るべきでしょうか、それとも配偶者手当を待つべきでしょうか?",
    summaryJa: "「彼女は学区の教師だったので、社会保障にはあまり力を入れませんでした。」",
    bodyOriginal: `“She was a teacher at a school district, so didn’t put much into Social Security.”`,
    bodyJa: `「彼女は学区の教師だったので、社会保障にはあまり力を入れませんでした。」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/i-want-her-to-choose-the-best-strategy-my-wifes-social-security-is-just-900-should-she-claim-spousal-benefit-at-62-e3ef621d?mod=mw_rss_topstories",
    publishedAt: "2026-08-19T18:39:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-70214433",
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
