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
    id: "judge-says-trump-sued-irs-for-improper-p-e9d78975",
    title: "Judge says Trump sued IRS for 'improper purpose'; refers his lawyer to bar",
    titleJa: "判事はトランプ氏が「不当な目的」でIRSを訴えたと述べた。彼の弁護士を弁護士に紹介する",
    summaryJa: "フロリダ州連邦判事は月曜、痛烈な命令で、ドナルド・トランプ大統領が「不当な目的」で内国歳入庁に対して100億ドルの訴訟を起こしたと述べ、それは「法律や事実に実行可能な根拠のない『和解』に対する司法上の正当性」を見せつけるためだった、と述べた。5月に物議を醸した司法省との法廷外和解により、司法省は一時的に、司法省による検察の行き過ぎの被害者とされる人々を補償するために、それ以来放棄されていた18億ドルの「法律」基金を創設することになった。",
    bodyOriginal: `A Florida federal judge in a scathing order Monday said President Donald Trump filed a $10 billion lawsuit against the Internal Revenue Service "for an improper purpose" — to gain the appearance of "judicial legitimacy for a 'settlement' that had no viable basis in law or fact."
That controversial out-of-court settlement with the Department of Justice in May briefly led the DOJ to create a since-abandoned $1.8 billion "lawfare" fund to compensate purported victims of prosecutorial overreach by the department.
It also led to Trump, his family members and related business entities being granted effective immunity from audits, prosecution or regulatory enforcement action by the IRS for tax returns filed up to the date of the settlement in May.
Judge Kathleen Williams, in her new order in U.S. District Court in Miami, said that because Trump has control over the DOJ and the IRS, "there was never adverseness between the Parties; there was never a case or controversy; and there was never a question as to who would prevail."
"The Lead Plaintiff and the Government are one, a fully realized unitary interest," Williams wrote.
Williams referred Trump's lawyer in the suit, Alejandro Brito, to the Florida bar for consideration of whether Brito should be disciplined in light of her findings.
She also ordered a copy of the order to be sent to the New York State Bar, of which Acting Attorney General Todd Blanche is a member, as well as to the District of Columbia Bar, of which Associate Attorney General Stanley Woodward is a member.
Blanche, who is Trump's former criminal defense lawyer, was responsible for signing off on the settlement with Trump on behalf of the IRS. The settlement was not submitted to Williams or any other court for review.
Trump, his adult sons Donald Trump Jr. and Eric Trump, and the Trump Organization had sued the IRS in January over the leak of his tax records by an agency contractor, who pleaded guilty in connection with that act in 2023.
Trump has nominated Blanche to serve as attorney general. The Senate Judiciary Committee is due to hold hearings on Blanche's nomination on Wednesday and Thursday.
Williams, in her order, barred Trump, the DOJ and other parties in the case from using "the purported 'settlement agreement'" in judicial or other proceedings as evidence of a settlement of the lawsuit.
In a footnote, she pointedly wrote that the question of "whether a private agreement" between both sides is valid and enforceable "is not before this court."
"This action was never about a party seeking judicial resolution of a legal issue or a factual dispute," Williams wrote in her order.
"The nature of the suit itself and the conduct of the Parties and counsel from its filing make plain that this was an attempt to use the Court to provide some legitimacy to an agreement to confer immunity to people and entities affiliated with the President and to earmark billions of dollars from American taxpayers to redress grievances not defined in the law," the judge wrote.
Williams pointed to the specific dollar amount of the DOJ's "Anti-Weaponization Fund," which was a nod to the year 1776, the year in which the Declaration of Independence.
She said that Trump and the other plaintiffs could make no connection in their lawsuit "between the billions of dollars they sought, and the recovery authorized under the governing statute," and that they filed the suit "asserting claims that they knew, or should have known, were time-barred and for an amount of damages unsupported by facts or law.
In a footnote, Williams wrote, "Even the Fund amount — $1.776 billion — speaks of a 'branding' effort rather than a deliberate and thoughtful calculation of damages."
Williams' order came in response to a brief filed by 35 former judges calling on her to reopen the case, which Trump and the IRS settled before Williams could rule on the question of whether the parties were actually adverse to each other given Trump's position as president and head of the executive branch of government, which includes the IRS.
"The court's opinion is a resounding victory for the rule of law," said the lawyers who represented the judges, Norm Eisen and Matt Platkin, in a statement.
"We are proud to represent these former judges in presenting the arguments that the court adopted," the attorneys said.
A spokesman for Trump's legal team, which includes Brito, in a statement responding to the order, said, "The IRS wrongly allowed a rogue, politically-motivated employee to leak private and confidential information about President Trump, his family, and the Trump Organization to the New York Times, ProPublica and other left-wing news outlets, which was then illegally released to millions of people."
"President Trump continues to hold those who wrong America and Americans accountable," the spokesman said.
The White House declined to comment to MS NOW, referring questions to the Trump legal team spokesman.
CNBC has requested comment from the DOJ.`,
    bodyJa: `フロリダ州連邦判事は月曜、痛烈な命令で、ドナルド・トランプ大統領が「不当な目的」で内国歳入庁に対して100億ドルの訴訟を起こしたと述べ、それは「法律や事実に実行可能な根拠のない『和解』に対する司法上の正当性」を見せつけるためだった、と述べた。
5月に物議を醸した司法省との法廷外和解により、司法省は一時的に、司法省による検察の行き過ぎの被害者とされる人々を補償するために、それ以来放棄されていた18億ドルの「法律」基金を創設することになった。
また、これにより、トランプ氏とその家族、関連事業体は、5月の和解日までに提出された納税申告書について、IRSによる監査、訴追、規制執行措置から実質的に免責されることになった。
マイアミ連邦地方裁判所の新たな命令の中で、キャスリーン・ウィリアムズ判事は、トランプ氏が司法省と国税局を支配しているため、「両当事者間に不利益は一度もなかったし、訴訟や論争も一度もなかった。そして、どちらが勝つかという問題は一度もなかった」と述べた。
「主任原告と政府は一つであり、完全に実現された単一の利益である」とウィリアムズ氏は書いた。
ウィリアムズ氏は、調査結果を踏まえてブリト氏を懲戒処分すべきかどうか検討するため、訴訟のトランプ氏の弁護士アレハンドロ・ブリト氏をフロリダ州法廷に紹介した。
同氏はまた、命令書のコピーをトッド・ブランシュ司法長官代理が所属するニューヨーク州弁護士と、スタンリー・ウッドワード司法副長官が所属するコロンビア特別区弁護士に送付するよう命じた。
トランプ氏の元刑事弁護人であるブランシュ氏は、IRSを代表してトランプ氏との和解案に署名する責任を負っていた。和解案は審査のためにウィリアムズまたはその他の裁判所に提出されなかった。
トランプ氏、成人した息子のドナルド・トランプ・ジュニア氏とエリック・トランプ氏、トランプ・オーガニゼーションは1月、政府機関の請負業者による納税記録の漏洩をめぐってIRSを訴えていたが、同氏は2023年にその行為に関連して有罪を認めた。
トランプ大統領は司法長官にブランチ氏を指名した。上院司法委員会は水曜と木曜にブランシュ氏の指名に関する公聴会を開催する予定だ。
ウィリアムズ氏は命令の中で、トランプ氏、司法省、その他の訴訟当事者に対し、司法手続きやその他の手続きにおいて「和解合意と称するもの」を訴訟和解の証拠として使用することを禁じた。
彼女は脚注で、双方間の「個人的な合意」が有効で強制力があるかどうかという問題は「この法廷では扱われない」と鋭く書いた。
「この訴訟は、法的問題や事実上の争いの司法的解決を求める当事者に関するものでは決してない」とウィリアムズ氏は命令書に書いた。
「訴訟自体の性質と、訴訟提起時の両当事者と弁護士の行為を見れば、これが大統領と関係のある人物や団体に免責を与え、法律に規定されていない苦情を救済するために米国の納税者から数十億ドルを割り当てるという合意に何らかの正当性を与えるために裁判所を利用しようとした試みであることは明らかだ」と判事は書いた。
ウィリアムズ氏は、司法省の「反武器化基金」の具体的な金額を指摘したが、これは独立宣言が行われた1776年を彷彿とさせるものだった。
同氏は、トランプ氏と他の原告らは訴訟において「彼らが求めた数十億ドルと、統治法で認められた回収額との間に何の関連性もありえない」とし、「事実や法律で裏付けのない損害賠償額について、時効が定められていることを知っていた、あるいは知るべきだったという主張を主張して訴訟を起こした」と述べた。
ウィリアムズ氏は脚注で、「基金の金額（17億7,600万ドル）でさえ、意図的で思慮深い損害賠償額の計算ではなく、『ブランド化』の取り組みについて語っている」と書いた。
ウィリアムズ氏の命令は、元裁判官35人が彼女に事件の再開を求める準備書面に応えて出されたもので、トランプ大統領とIRSを含む政府行政府の長としてのトランプ氏の立場を考慮すると、当事者が実際に互いに不利であるかどうかという問題についてウィリアムズ氏が判決を下す前に、トランプ氏とIRSが決着した。
裁判官の代理人を務めた弁護士のノーム・アイゼン氏とマット・プラトキン氏は声明で、「裁判所の意見は法の支配に対する大勝利だ」と述べた。
「私たちは、裁判所が採用した主張を提示する際に、これらの元裁判官を代理できることを誇りに思います」と弁護士らは述べた。
ブリトー氏を含むトランプ氏の弁護団の報道官は命令に応じた声明で、「国税庁は不当にも、政治的動機を持つ不正な職員がトランプ大統領とその家族、トランプ・オーガナイゼーションに関する個人的機密情報をニューヨーク・タイムズやプロパブリカ、​​その他の左派報道機関に漏らすことを許可し、その後、その情報が何百万人もの人々に違法に公開された」と述べた。
同報道官は「トランプ大統領は米国と米国人を不当に扱った人々の責任を問い続けている」と述べた。
ホワイトハウスはMS NOWへのコメントを拒否し、質問はトランプ法務チームの報道官に委ねられた。
CNBCは司法省にコメントを求めた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/trump-irs-doj-lawsuit-blanche.html",
    publishedAt: "2026-07-13T19:35:19+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "waller-says-fed-shouldn-t-fight-the-last-c5c5c755",
    title: "Waller says Fed shouldn't 'fight the last war' on inflation but warns hikes still possible",
    titleJa: "ウォーラー氏、FRBはインフレに関して「最終戦争」をすべきではないと発言、しかし利上げはまだ可能だと警告",
    summaryJa: "米連邦準備理事会（FRB）のクリストファー・ウォーラー総裁は月曜日、インフレに対する懸念を表明する一方、「最後の戦争との戦い」には警鐘を鳴らし、中銀は利上げ前にさらなるデータを待つべきだと述べた。ウォーラー氏はニューヨークでの講演で、エネルギー価格の関税高騰などのよく言われる要因を超えてインフレが拡大していると述べた。むしろ、物価上昇率がFRBの目標である2％を頑固に上回っている根本原因として、他の要因、特に人工知能を挙げた。",
    bodyOriginal: `Federal Reserve Governor Christopher Waller on Monday expressed concern about inflation but cautioned against "fighting the last war," saying the central bank should wait for more data before raising interest rates.
In remarks delivered for a speech in New York, Waller said inflation has expanded beyond the often-cited drivers such as the energy price spike in tariffs. Rather, he cited other factors, particularly artificial intelligence, as root causes for why price increases have held stubbornly above the Fed's 2% target.
Waller warned that "the desire to avoid past mistakes is often the author of new ones."
"I am cognizant of the mistake we made in 2021 by not responding sooner to the high inflation we observed, and I am determined to avoid repeating it," he said.
However, he said that doesn't reflexively mean raising interest rates to head off the current spate of price increases.
Waller said there is still "a credible case for inflation to begin to fall back" but noted there is an "equally plausible" scenario where inflation could stay elevated or increase, "requiring tighter monetary policy in the near term."
The policymaker emphasized a deliberate approach as policymakers evaluate the root causes of inflation, which he listed as tariffs implemented in 2025, the rising energy prices associated with fighting in the Middle East – and "spillovers from demand" from artificial intelligence.
"As always, we need to avoid making the mistake of fighting the last war and reacting too soon to tighten inflation, merely because we waited too long last time," he said. "But we also must avoid repeating the same mistake we made in 2021 and 2022 by waiting too long to respond."
Waller cited two factors working in the Fed's favor this time around: a stronger labor market that isn't a meaningful source of inflation, and well-anchored inflation expectations, at least by market-based measures.
He cautioned, though, against becoming complacent.
"I often hear people say that because inflation expectations are anchored, central bankers do not have to respond to above-target inflation. This view is wrong," he said. "Sternly staring at inflation until it melts before our withering gaze is not an option."
Waller's remarks come the day before the Bureau of Labor Statistics releases its June reading on the consumer price index. Economists surveyed by Dow Jones expect the gauge to show a decline of 0.2% for the month on the all-items headline reading, owing to a sharp drop in oil, and a 0.2% core increase excluding food and energy. On an annual basis, that would take the headline reading down to 3.8%, from 4.2% in May, and core to 2.8%, from 2.9%.
"I would be very pleased to see a lower reading on core inflation, but after its escalation over the first half of this year, I will need to see several months of lower readings to feel that inflation is moving in the right direction," Waller said. "For the reasons I have laid out today, I think that is still a reasonable outcome, and I would then continue to hold the policy rate at its current target range."
The Fed meets again in late July, with markets pricing in about a 39% chance of a rate increase, according to the CME Group.`,
    bodyJa: `米連邦準備理事会（FRB）のクリストファー・ウォーラー総裁は月曜日、インフレに対する懸念を表明する一方、「最後の戦争との戦い」には警鐘を鳴らし、中銀は利上げ前にさらなるデータを待つべきだと述べた。
ウォーラー氏はニューヨークでの講演で、エネルギー価格の関税高騰などのよく言われる要因を超えてインフレが拡大していると述べた。むしろ、物価上昇率がFRBの目標である2％を頑固に上回っている根本原因として、他の要因、特に人工知能を挙げた。
ウォーラー氏は、「過去の間違いを避けたいという欲求が、しばしば新たな間違いを生み出すことになる」と警告した。
同氏は「観測された高インフレにもっと早く対応しなかったという２０２１年の過ちを認識しており、同じことを繰り返さないように決意している」と述べた。
しかし、それは現在の相次ぐ物価上昇を阻止するために反射的に金利を引き上げることを意味するものではないと述べた。
ウォラー氏は、「インフレが後退し始める信頼できる根拠」はまだあるとしながらも、インフレが高止まりまたは上昇する可能性があり、「短期的には金融引き締めが必要になる」という「同様にもっともらしい」シナリオがあると指摘した。
同政策担当者は、インフレの根本原因を2025年に実施される関税、中東での戦闘に伴うエネルギー価格の上昇、人工知能による「需要の波及」などとして挙げており、その根本原因を評価する中で、意図的なアプローチを強調した。
同氏は「いつものように、前回の戦争を戦い、前回の時間が長すぎたというだけの理由でインフレ引き締めに早すぎる対応をするという間違いを犯すことを避ける必要がある」と述べた。 「しかし、対応を待ちすぎて、2021年と2022年に犯した同じ過ちを繰り返すことも避けなければなりません。」
ウォーラー氏は、今回FRBに有利に働いている要因として、意味のあるインフレ要因ではない労働市場の強化と、少なくとも市場に基づく指標によるインフレ期待のしっかりとしたインフレ期待の2つを挙げた。
しかし、彼は現状に満足しないように警告した。
同氏は「インフレ期待が固定されているため、中央銀行当局は目標を上回るインフレに対応する必要がないという意見をよく聞くが、この見方は間違っている」と述べた。 「私たちの萎縮する視線の前に、インフレが溶けるまで厳しい目でインフレを見つめることは選択肢ではない。」
ウォーラー氏の発言は、労働統計局が６月の消費者物価指数を発表する前日に行われた。ダウ・ジョーンズが調査したエコノミストらは、石油の急落と、食品とエネルギーを除くコアの0.2％上昇により、全項目のヘッドラインで月次の指標が0.2％の下落を示すと予想している。年間ベースでは、ヘッドラインの視聴率は5月の4.2％から3.8％に低下し、コアは2.9％から2.8％に低下することになる。
ウォラー氏は「コアインフレ率が下振れするのは非常にうれしいが、今年上半期にインフレが上昇した後は、インフレが正しい方向に進んでいると感じるには、数カ月下振れするまで見る必要があるだろう」と述べた。 「本日説明した理由により、これは依然として妥当な結果であると考えており、その場合、私は政策金利を現在の目標レンジに維持し続けるだろう。」
ＣＭＥグループによると、ＦＲＢは７月下旬に再び会合を開き、市場は利上げの可能性を約３９％織り込んでいる。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/waller-says-fed-shouldnt-fight-the-last-war-on-inflation-but-warns-hikes-still-possible.html",
    publishedAt: "2026-07-13T19:15:25+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "trump-recommends-lindsey-graham-s-sister-0ed76068",
    title: "Trump recommends Lindsey Graham's sister serve as interim senator for South Carolina",
    titleJa: "トランプ大統領、リンジー・グラハム氏の妹をサウスカロライナ州の暫定上院議員に推薦",
    summaryJa: "ドナルド・トランプ大統領は月曜日、サウスカロライナ州知事に対し、共和党の故リンジー・グラハム上院議員の妹、ダーリン・グラハム・ノードーン氏を年内いっぱいの上院議席に任命するよう要請した。71歳のグラハム氏が土曜日に急逝し、任期満了まで議席に空きが残った。コロンビア特別区の検視官からの予備的所見とグラハム氏の事務所が発表したところによれば、彼の死は動脈硬化性心血管疾患による大動脈解離の結果であった。",
    bodyOriginal: `President Donald Trump on Monday urged South Carolina's governor to appoint late Republican Sen. Lindsey Graham's sister, Darline Graham Nordone, to fill his Senate seat through the rest of the year.
Graham, 71, died unexpectedly on Saturday, leaving an opening for the seat through the end of his term. His death was the result of aortic dissection due to arteriosclerotic cardiovascular disease, according to preliminary findings from the medical examiner of the District of Columbia and released by Graham's office.
"I recommended, to Governor Henry McMaster, Lindsey Graham's wonderful sister, Darline, to serve as interim Senator from the Great State of South Carolina. This would be a fabulous tribute to Lindsey, who loved her dearly!" Trump posted on TruthSocial.
In a post to X later Monday morning, Sen. Tim Scott, R-S.C., also logged his support for Graham Nordone.
"Lindsey Graham's sister, Darline Graham Nordone, would be a fantastic pick to serve out the reminder of the senate term. After speaking with Darline, there is no one better who understands Lindsey's love for family, our state, and our country," Scott wrote.
Under South Carolina law, Republican Gov. Henry McMaster has the authority to name an interim replacement to finish Graham's term. McMaster has a news conference scheduled Monday afternoon to reflect on Graham's life and announce the interim appointment.
Graham was an influential figure in the Senate for more than two decades and a key Trump ally. His death could complicate GOP priorities in the Senate, where Republicans hold a narrow majority, making an interim appointment key for leaders in the chamber and the White House.
At the time of his death, Graham was seeking another six-year term, and a crowded field of potential candidates is emerging for a special primary election that according to a state law would be held Aug. 11. The winner of that special primary would face Democrat Annie Andrews in the general election this November.
The Cook Political Report with Amy Walter has labeled the race "Solid R."
Much of South Carolina's House delegation, which includes only one Democrat, has signaled their interest. Reps. Nancy Mace and Ralph Norman, both of whom launched failed gubernatorial bids earlier this year, have said they could run. Rep. William Timmons, in a post to X on Sunday, didn't rule out a try at the Senate seat. And Reps. Russell Fry and Joe Wilson have also been floated as potential candidates.
Lt. Gov. Pamela Evette, who earned Trump's endorsement in her own failed bid for governor, could enter the fray.
And McMaster, who is termed out as governor at the end of this year, has also been floated as a potential long-term replacement for Graham in the Senate.
In an interview on Sunday with NBC's "Meet the Press," Trump heaped praise on the South Carolina governor.
"Henry's been a great governor, you know now he's termed out, but he's going to do the right thing," Trump said. "I think Henry will be fantastic."
This is breaking news. Please refresh for updates.
Correction: South Carolina Gov. Henry McMaster has a news conference scheduled for 4 p.m. ET on Monday. An earlier version misstated the day.`,
    bodyJa: `ドナルド・トランプ大統領は月曜日、サウスカロライナ州知事に対し、共和党の故リンジー・グラハム上院議員の妹、ダーリン・グラハム・ノードーン氏を年内いっぱいの上院議席に任命するよう要請した。
71歳のグラハム氏が土曜日に急逝し、任期満了まで議席に空きが残った。コロンビア特別区の検視官からの予備的所見とグラハム氏の事務所が発表したところによれば、彼の死は動脈硬化性心血管疾患による大動脈解離の結果であった。
「私はヘンリー・マクマスター知事に、リンジー・グラハムの素晴らしい妹、ダーリンをサウスカロライナ州から暫定上院議員として務めるよう勧めました。これは彼女を心から愛したリンジーへの素晴らしい賛辞となるでしょう！」トランプ氏はTruthSocialに投稿した。
月曜日の朝遅くにXに宛てた投稿の中で、ティム・スコット上院議員（共和党、サウスカロライナ州）もグラハム・ノードンへの支持を表明した。
「リンジー・グラハムの妹、ダーリン・グラハム・ノードーンは、上院任期を思い出させる人物として素晴らしい抜擢だろう。ダーリンと話した後、家族、州、そして祖国に対するリンジーの愛をこれ以上に理解できる人はいない」とスコット氏は書いた。
サウスカロライナ州法に基づき、共和党のヘンリー・マクマスター知事はグラハム氏の任期を終えるための暫定後任を指名する権限を有している。マクマスター氏は月曜午後に記者会見を予定しており、グラハム氏の人生を振り返り、暫定任命を発表する予定だ。
グラハム氏は20年以上にわたり上院で影響力のある人物であり、トランプ氏の重要な同盟者だった。同氏の死により、共和党が僅差で過半数を占める上院での共和党の優先事項が複雑になる可能性があり、暫定任命が議会とホワイトハウスの指導者にとって鍵となる。
グラハム氏が死去した当時、グラハム氏はさらに6年の任期を求めていたが、州法に従って8月11日に実施される特別予備選挙に向けて候補者がひしめき合っている。特別予備選挙の勝者は今年11月の本選挙で民主党のアニー・アンドリュース氏と対戦することになる。
エイミー・ウォルターとのクック・ポリティカル・レポートは、このレースを「ソリッドR」と名付けた。
サウスカロライナ州の下院議員団の多くは、民主党議員が1名だけ含まれているが、関心を示している。今年初めに知事選に立候補したが失敗したナンシー・メイス議員とラルフ・ノーマン議員は、出馬する可能性があると述べた。ウィリアム・ティモンズ下院議員は日曜日にX氏に宛てた投稿で、上院議席でのトライの可能性を排除しなかった。また、ラッセル・フライ下院議員とジョー・ウィルソン下院議員も候補者として浮上している。
自らの知事選に立候補して失敗したがトランプ大統領の支持を得たパメラ・エヴェット副知事がこの争いに加わる可能性がある。
そして、今年末に知事に任命されるマクマスター氏も、上院でグラハム氏の長期後任候補として浮上している。
日曜日のNBCの「ミート・ザ・プレス」とのインタビューで、トランプ大統領はサウスカロライナ州知事を称賛した。
トランプ大統領は「ヘンリーは偉大な知事だった。もう解任されたが、彼は正しいことをするつもりだ」と語った。 「ヘンリーは素晴らしい選手になると思うよ。」
これは速報です。更新を確認するには更新してください。
訂正：サウスカロライナ州知事ヘンリー・マクマスターは午後4時に記者会見を予定している。東部時間月曜日。以前のバージョンではその日の記載に誤りがありました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/trump-lindsey-graham-darline-south-carolina-senator.html",
    publishedAt: "2026-07-13T19:12:34+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 4,
  },
  {
    id: "trump-proposes-20-toll-on-cargo-through-a38e42c8",
    title: "Trump proposes 20% toll on cargo through Strait of Hormuz; restarts Iran blockade",
    titleJa: "トランプ大統領はホルムズ海峡を通過する貨物に20％の関税を課すことを提案。イラン封鎖を再開",
    summaryJa: "ドナルド・トランプ大統領は月曜日、米国が主要な石油輸送ルートの「守護者」であると宣言した後、米国はホルムズ海峡で「輸送される全貨物の20％」の料金を課すと述べた。トランプ大統領はまた、真実ソーシャルへの投稿で、米国は米国の震源地である海峡近くのイラン港の封鎖を再び課すだろうと述べた。テヘランとの戦争が急速に激化。封鎖は火曜日午後４時に再開される。 ET、米中央軍が語った。",
    bodyOriginal: `President Donald Trump on Monday said the U.S. will impose fees in the Strait of Hormuz "at the rate of 20% on all cargo shipped," after declaring America the "guardian" of the major oil shipping route.
Trump, in a Truth Social post, also said the U.S. will reimpose its blockade of Iranian ports near the strait, the epicenter of the U.S.' rapidly reescalating war with Tehran. The blockade will resume Tuesday at 4 p.m. ET, U.S. Central Command said.
The U.S. has rejected Iran's own plans to charge tolls to ships passing through the strait, which maritime experts, regulators and even top Trump administration officials have said is illegal under international law. But rather than call for the return of the strait to its prewar status as a toll-free international waterway, Trump's post asserts that commercial vessels attempting the transit must now pay protection money to the U.S.
Oil prices jumped, and stock indexes fell, following Trump's announcement.
The strait, which saw 20% of the world's oil trade before being choked off at the start of the war in late February, "is OPEN, and will remain OPEN, with or without Iran," Trump wrote in the post.
All countries other than Iran will "have fair and open use of the Strait," Trump wrote. The assertion came amid new exchanges of fire between the U.S. and Iran that have put the prospect of a peace deal further out of reach, while once again slowing tanker traffic in the strait to a trickle.
"The U.S.A. will be, from this point forward, known as 'THE GUARDIAN OF THE HORMUZ STRAIT,'" he claimed. "But as such, and as a matter of FAIRNESS, will be reimbursed, at the rate of 20% on all cargo shipped, for any and all costs necessary to do the job of providing safety and security to this very volatile section of the World."
"The process and formation will begin immediately," he added.
Much about the proposed reimbursement policy was unclear. The White House did not immediately respond to CNBC's questions about Trump's post.
Iranian foreign minister Abbas Araghchi said in an X post Monday afternoon that Iran, not the U.S., controls the strait and deserves to "be compensated for this service."
"20% is of course too much. We will be fair," Araghchi wrote.
The United Nations' International Maritime Organization, which regulates maritime transport, said after Trump's post that it "stands firmly against charging fees for passage through straits used for international navigation."
"There is no legal basis through which to introduce mandatory tolls simply to transit through a strait," the organization said in a statement to CNBC.
That stance echoes the one offered by U.S. Secretary of State Marco Rubio, who said last month, "No country is allowed to charge tolls or fees on an international waterway. That's existing international law."
It's not unprecedented for the U.S. to offer protection services to vessels in the Persian Gulf — it did so for Kuwaiti ships under fire from Iran in the 1980s, for instance.
But slapping a 20% charge on ships is "quite an extortionate level," especially since "it's unclear that the U.S. can deliver safe passage in the first place," said David Goldwyn, president of Goldwyn Global Strategies and a former U.S. State Department special envoy during the Obama administration.
"If the U.S. was able to safely escort ships and guarantee no threat from Iran, we would have seen that happen in the past few weeks," Goldwyn told CNBC in a phone interview. "So I think this is really just bluster."
Trump telegraphed the policy announcement in a Fox News interview earlier Monday morning, when he said the U.S. is "going to get paid for guarding" the strait.
"We're going to keep the strait, and we'll probably run it," Trump said.
"We'll become the guardian of the strait — maybe we'll call it the guardian angel of the strait," Trump told Fox. "And we should be reimbursed for that."
"We can't be expected to do that for nothing, unlike we had for many years," he added. "We guarded it for nothing, and now we're going to guard it, we're going to get paid for guarding it. A lot of money."
Since the conflict began, Iran has signaled plans to charge tolls or other fees for ships transiting the waterway — a scenario the U.S. has rejected.
The temporary ceasefire deal the U.S. and Iran signed in mid-June explicitly prohibited Tehran from imposing any charges on commercial ships passing through the strait.
But that deal has been so undermined by repeated attacks in the region that Trump last week declared the ceasefire was "over."
Trump has previously floated the possibility that the U.S. could charge money to transiting commercial vessels in the strait.
Days after the 60-day ceasefire deal was signed, Trump wrote on Truth Social that there will be no tolls "unless they are imposed by and for the United States of America, should the deal not be completed, for services rendered as the Guardian Angel to the countries of the Middle East for purposes of both past, present, and future reimbursement of costs."
His latest comments show him doubling down on that possibility in the wake of the ceasefire's erosion.
— CNBC's Spencer Kimball contributed to this report.`,
    bodyJa: `ドナルド・トランプ大統領は月曜日、米国が主要な石油輸送ルートの「守護者」であると宣言した後、米国はホルムズ海峡で「輸送される全貨物の20％」の料金を課すと述べた。
トランプ大統領はまた、真実ソーシャルへの投稿で、米国は米国の震源地である海峡近くのイラン港の封鎖を再び課すだろうと述べた。テヘランとの戦争が急速に激化。封鎖は火曜日午後４時に再開される。 ET、米中央軍が語った。
米国は、海峡を通過する船舶に通行料を課すというイラン自身の計画を拒否しているが、海事専門家や規制当局、さらにはトランプ政権の高官さえも、この計画は国際法上違法であると主張している。しかしトランプ氏の投稿では、この海峡を無料の国際水路として戦前の状態に戻すことを求めるのではなく、通過を試みる商船は米国にみかじめ料を支払わなければならないと主張している。
トランプ大統領の発表を受けて原油価格は急騰し、株価指数は下落した。
トランプ大統領は投稿の中で、2月下旬の戦争開始で停止されるまで世界の石油貿易の20％が行われていたこの海峡は、「イランの有無に関わらず開かれており、これからも開かれ続けるだろう」と述べた。
トランプ大統領は、イランを除くすべての国が「海峡を公正かつオープンに利用できる」と記した。この主張は、米国とイランの間で新たな銃撃戦が発生し、和平合意の見通しがさらに遠のき、同海峡のタンカー交通が再び微量にまで減速する中で発表された。
「今後、米国は『ホルムズ海峡の守護者』として知られるようになるだろう」と彼は主張した。 「しかし、そのため、そして公平性の問題として、世界のこの非常に不安定な地域に安全と安心を提供する仕事を遂行するために必要なあらゆる費用は、出荷されるすべての貨物の20％の割合で払い戻されます。」
「プロセスと形成は直ちに開始されるだろう」と彼は付け加えた。
提案されている償還方針については多くの点が不明瞭だった。ホワイトハウスはトランプ大統領の投稿に関するCNBCの質問にすぐには回答しなかった。
イランのアッバス・アラグチ外務大臣は、月曜午後のXポストで、海峡を管理しているのは米国ではなくイランであり、「この奉仕に対して補償を受ける」権利があると述べた。
「もちろん20％は多すぎる。我々は公平を期す」とアラグチ氏は書いた。
海上輸送を規制する国連の国際海事機関はトランプ氏の投稿を受け、「国際航行に使用される海峡の通過料金の徴収には断固として反対する」と表明した。
同団体はCNBCへの声明で、「単に海峡を通過するためだけに有料通行料を導入する法的根拠はない」と述べた。
この姿勢は先月、「どの国も国際水路で通行料や料金を請求することは許されない。それが現行の国際法だ」と述べたマルコ・ルビオ米国務長官の姿勢を反映している。
米国がペルシャ湾の船舶に防護サービスを提供するのは前例のないことではなく、例えば1980年代にイランからの砲撃を受けたクウェートの船舶に対しても同様のことを行った。
しかし、ゴールドウィン・グローバル・ストラテジーズ社長でオバマ政権時代に米国国務省特使を務めたデービッド・ゴールドウィン氏は、船舶に20％の課徴金を課すのは「かなり法外なレベル」だと述べ、特に「そもそも米国が安全な航行を提供できるかどうかが不透明である」と述べた。
ゴールドウィン氏はＣＮＢＣの電話インタビューで、「米国が船舶を安全に護衛し、イランの脅威がないことを保証できていれば、過去数週間以内にそうなるのを目にしていただろう」と語った。 「ですから、これは本当にただの暴言だと思います。」
トランプ大統領は月曜早朝のFOXニュースのインタビューで政策発表を電報で伝え、米国は海峡の「警備で報酬を得る」と述べた。
トランプ大統領は「われわれは海峡を維持するつもりであり、おそらくそれを実行するだろう」と語った。
トランプ大統領はFOXに対し、「われわれは海峡の守護者となる――おそらく海峡の守護天使と呼ぶことになるだろう」と語った。 「そして、私たちはそれを償還されるべきです。」
「長年そうしてきたのとは異なり、無償でそれを行うことを期待することはできない」と同氏は付け加えた。 「私たちはただでそれを守ってきましたが、今度は私たちがそれを守ることになり、それを守ることで報酬を得るつもりです。大金です。」
紛争が始まって以来、イランは水路を通過する船舶に通行料やその他の料金を課す計画を示唆してきたが、米国はこのシナリオを拒否している。
米国とイランが６月中旬に署名した一時停戦協定では、イラン政府が海峡を通過する商船にいかなる料金も課すことを明示的に禁止していた。
しかし、この地域で繰り返される攻撃によってこの合意は大きく損なわれ、トランプ大統領は先週、停戦は「終わった」と宣言した。
トランプ大統領は以前、米国が海峡を通過する商船に金銭を請求する可能性を示唆していた。
60日間の停戦協定が締結されてから数日後、トランプ大統領はトゥルース・ソーシャルに、「協定が完了しない場合、過去、現在、将来の費用償還を目的として中東諸国に守護天使として提供されたサービスに対しては、米国によって、また米国のために課せられない限り」通行料金はかからないと書いた。
同氏の最近のコメントは、停戦協定の崩壊を受けて同氏がその可能性を倍増させていることを示している。
— CNBC の Spencer Kimball がこのレポートに貢献しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/trump-iran-hormuz-strait-charge-reimburse.html",
    publishedAt: "2026-07-13T19:04:53+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "un-maritime-agency-opposes-hormuz-transi-9267d6b2",
    title: "UN maritime agency opposes Hormuz transit fees after Trump demands protection money",
    titleJa: "トランプ大統領がみかじめ料要求を受け、国連海事機関がホルムズ通過料金に反対",
    summaryJa: "国連機関である国際海事機関は月曜日、ドナルド・トランプ大統領が船舶にみかじめ料の支払いを要求したことを受け、ホルムズ海峡での通過料金に反対すると発表した。「われわれは料金に関する姿勢に常に一貫しており、IMOは国際航行に使用される海峡の通過に料金を課すことに断固として反対している」と広報担当者は述べた。",
    bodyOriginal: `The International Maritime Organization, a United Nations agency, said Monday that it opposes transit fees in the Strait of Hormuz after President Donald Trump demanded that ships pay protection money.
"We have always been consistent on our stance on fees – IMO stands firmly against charging fees for passage through straits used for international navigation," a spokesperson said.
"There is no legal basis through which to introduce mandatory tolls simply to transit through a strait," the spokesperson said.
Trump on Monday said the U.S. military will protect ship traffic through Hormuz, but demanded reimbursement equivalent to 20% of the value of all cargo that is transported through the strait. He ordered the U.S. Navy to reimpose its blockade of Iranian ships.
"The Hormuz Strait is OPEN, and will remain OPEN, with or without Iran," Trump said. "We are reinstating the THE IRANIAN BLOCKADE, so named because it is only stopping Iran's ships or customers from entering or leaving. All other countries will have fair and open use of the Strait."
Iran has demanded in the past that ships pay a toll to safely transit Hormuz. Tehran agreed it would not charge a toll for 60 days under the memorandum of understanding it signed with the U.S. on June 17.
Nordic American Tankers CEO Herbjorn Hansson told CNBC in an interview that he views Trump's 20% fee as unrealistic. Iran and the U.S. have to agree on the how the strait will be administered, Hansson said.
"Iran is suffering, America is suffering, 192 countries outside the Hormuz Strait are suffering," the CEO said.
Tolls to transit Hormuz are against international law, said James Kraska, an expert on international maritime law at the U.S. Naval War College. The world has an unimpeded right to transit Hormuz, Kraska said.
The security situation in Hormuz has deteriorated since Iran attacked multiple commercial ships transiting the strait over the past week. Tehran is demanding that all ships use a northern route through its territorial waters. The U.S. Navy has been helping ships through a southern corridor along Oman's coast.
The U.S. has launched multiple waves of airstrikes against Iran in retaliation for the ship attacks. Tehran has responded by firing on U.S. allies in the Gulf.
Iran cannot unilaterally impose a change to traffic routes through Hormuz under the Convention on the International Maritime Organization and the International Convention for the Safety of Life at Sea, Kraska said. Iran has a legal duty to comply with the traditional route through Hormuz, known as the traffic separation scheme, due to its obligations under those treaties, he said.`,
    bodyJa: `国連機関である国際海事機関は月曜日、ドナルド・トランプ大統領が船舶にみかじめ料の支払いを要求したことを受け、ホルムズ海峡での通過料金に反対すると発表した。
「われわれは料金に関する姿勢に常に一貫しており、IMOは国際航行に使用される海峡の通過に料金を課すことに断固として反対している」と広報担当者は述べた。
同報道官は「海峡を通過するためだけに通行料金を義務付ける法的根拠はない」と述べた。
トランプ大統領は月曜日、米軍はホルムズを通過する船舶の交通を保護すると述べたが、海峡を通って輸送される全貨物の価値の20％に相当する償還を要求した。同氏は米海軍に対し、イラン船舶に対する封鎖を再度課すよう命じた。
トランプ大統領は「ホルムズ海峡は開かれており、イランの有無にかかわらず、今後も開かれ続けるだろう」と語った。 「我々はイランの船舶や顧客の出入りを阻止するだけであることからこの名が付けられたイラン封鎖を復活させる。他のすべての国はこの海峡を公正かつオープンに利用することになる。」
イランは過去に、ホルムズを安全に通過するために船舶に通行料を支払うよう要求してきた。イラン政府は、6月17日に米国と署名した覚書に基づき、60日間通行料を徴収しないことに同意した。
ノルディック・アメリカン・タンカーズのハーブビョルン・ハンソン最高経営責任者（CEO）はCNBCのインタビューで、トランプ大統領の20％の手数料は非現実的だと考えていると語った。ハンソン氏は、イランと米国は海峡の管理方法について合意する必要があると述べた。
同最高経営責任者（ＣＥＯ）は「イランも米国も苦しんでおり、ホルムズ海峡の外側の１９２カ国も苦しんでいる」と述べた。
米国海軍大学の国際海事法の専門家、ジェームズ・クラスカ氏は、ホルムズ経由の通行料金は国際法に違反していると述べた。クラスカ氏は、世界にはホルムズを通過する妨げられない権利があると述べた。
ホルムズの治安状況は、イランが過去１週間にわたって海峡を通過する複数の商船を攻撃して以来、悪化している。イラン政府は、すべての船舶が領海を通る北方航路を使用することを要求している。米海軍はオマーン海岸沿いの南回廊を通過する船舶を支援している。
米国は船舶攻撃への報復としてイランに対して複数回の空爆を開始した。イラン政府は湾岸の米国同盟国に発砲することで応じた。
クラスカ外相は、「国際海事機関に関する条約および海上の人命安全に関する国際条約に基づき、イランは一方的にホルムズを通過する交通ルートの変更を強制することはできない」と述べた。同氏は、イランにはこれらの条約に基づく義務により、交通分離計画として知られるホルムズを通過する伝統的なルートを遵守する法的義務があると述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/imo-maritime-organization-strait-hormuz-tolls-trump-iran.html",
    publishedAt: "2026-07-13T18:28:04+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "paramount-and-warner-bros-sued-to-block-1d86f080",
    title: "Paramount and Warner Bros sued to block $110bn mega merger",
    titleJa: "パラマウントとワーナー・ブラザース、1100億ドル規模の巨大合併阻止を求めて訴訟",
    summaryJa: "パラマウントとワーナー・ブラザース、1100億ドル規模の巨大合併阻止を求めて訴訟- 公開されました",
    bodyOriginal: `Paramount and Warner Bros sued to block $110bn mega merger
- Published
A dozen US states have joined together to block the $110bn (£85bn) merger between Warner Bros. and Paramount, claiming the largest media consolidation in Hollywood history would stifle competition and raise consumer prices.
A group of states, led by California, have filed a lawsuit to halt the deal.
California Attorney General Rob Bonta claimed the merger would end up harming "audiences on every sofa and movie theater seat in the US".
If it goes ahead, the new company would account for over a quarter of major film releases. Together with Disney, Universal, and Sony, just four conglomerates would control 86% percent of that market.
Combining Paramount and Warner Bros would end a century of fierce rivalry between two of Hollywood's biggest hitmakers.
Between them, they own legendary franchises like Harry Potter, Batman, Mission: Impossible, and Top Gun, alongside TV giants like CNN, MTV, and Nickelodeon.
The regulatory challenge marks a significant hurdle for the entertainment giants as they attempt to merge operations.
In June, the US Department of Justice had approved the merger.
But the coalition of attorney generals has requested that the companies halt the transaction pending judicial review, threatening a temporary restraining order if they do not comply.
If approved, the combined titan would control nearly a third of the US theatrical motion picture market and basic cable programming.
Bonta claimed it "would lead to higher prices, lower quality, and less content for film and television, harming movie theaters, basic cable distributors, and ultimately, audiences on every sofa and movie theater seat in the US".
The legal challenge focuses on three main areas: major cinema releases, massive blockbusters, and cable TV channels.
The states argue that losing this competition strips movie theaters and television networks of vital bargaining power. At present, if one studio demands unfair prices, a distributor can walk away and deal with the rival.
Without that option, the lawsuit argues that theaters and TV networks will face higher fees – costs that will eventually hit consumers through pricier tickets, high cable bills, and fewer choices.
"Nothing justifies these substantial harms to competition," the lawsuit states.
However, supporters of the deal point out that the traditional media world is in crisis.
Cable TV audiences are shrinking rapidly, and cinema attendance faces intense, ongoing pressure from tech giants and streaming platforms, making scale an economic necessity.
In a statement, Paramount described the lawsuit as "fundamentally flawed" and "wrong," adding that it would "vigorously defend the transaction".
It added: "Delaying this transaction will only harm entertainment workers who have already suffered over recent years as technology has disrupted their livelihood and cost California tens of thousands of entertainment jobs."
The BBC has contacted Warner Bros for comment.`,
    bodyJa: `パラマウントとワーナー・ブラザース、1100億ドル規模の巨大合併阻止を求めて訴訟
- 公開されました
米国の十数州が連携してワーナー・ブラザースとパラマウントの1100億ドル（850億ポンド）規模の合併を阻止し、ハリウッド史上最大規模のメディア統合は競争を阻害し、消費者物価を上昇させると主張した。
カリフォルニア州を中心とする州グループは協定の差し止めを求めて訴訟を起こした。
カリフォルニア州司法長官のロブ・ボンタは、この合併は最終的に「米国内のすべてのソファや映画館の座席の観客」に損害を与えることになると主張した。
実現すれば、新会社は主要映画公開作品の4分の1以上を占めることになる。ディズニー、ユニバーサル、ソニーと合わせれば、たった 4 つの複合企業がその市場の 86% を支配することになります。
パラマウントとワーナー・ブラザースが合併すれば、ハリウッド最大のヒットメーカー２社の１世紀にわたる熾烈な競争に終止符が打たれることになる。
彼らは、CNN、MTV、ニコロデオンなどの大手テレビ局と並んで、ハリー・ポッター、バットマン、ミッション：インポッシブル、トップガンなどの伝説的なシリーズを所有しています。
規制上の課題は、エンターテイメント大手が経営統合を試みる際に大きなハードルとなっている。
米国司法省は6月に合併を承認していた。
しかし、司法長官連合は両社に対し、司法審査が行われるまで取引を停止するよう要求し、従わない場合は一時的な差し止め命令を出すと脅している。
承認されれば、統合された巨人は米国の劇場映画市場と基本的なケーブル番組の3分の1近くを支配することになる。
ボンタは、これが「映画やテレビの価格上昇、品質の低下、コンテンツの減少につながり、映画館や基本的なケーブル配信会社、そして最終的には米国内のすべてのソファや映画館の座席の観客に損害を与えるだろう」と主張した。
この法的異議申し立ては、主要な映画公開作品、大ヒット作、ケーブル TV チャンネルという 3 つの主要分野に焦点を当てています。
各州は、この競争に負ければ映画館やテレビネットワークが重要な交渉力を奪われると主張している。現時点では、あるスタジオが不当な価格を要求した場合、配給会社はその場を離れてライバルと取引することができる。
その選択肢がなければ、劇場やテレビネットワークは料金の上昇に直面することになる、と訴訟は主張している。その費用は、チケットの高価化、ケーブル料金の高額化、そして選択肢の減少を通じて、最終的には消費者に打撃を与えるだろう。
「競争に対するこうした重大な損害を正当化するものは何もない」と訴状は述べている。
しかし、この協定の支持者らは、伝統的なメディア界が危機に瀕していると指摘している。
ケーブル TV の視聴者は急速に減少しており、映画館の観客はテクノロジー大手やストリーミング プラットフォームからの継続的な激しい圧力に直面しており、規模の拡大が経済的に必要となっています。
パラマウントは声明で、この訴訟は「根本的に欠陥」があり「間違っている」と述べ、「この取引を断固として擁護する」と付け加えた。
さらに、「この取引の遅延は、テクノロジーのせいで生計が崩壊し、カリフォルニア州で数万人のエンターテインメントの仕事が失われたため、近年すでに苦しんでいるエンターテインメント従事者に悪影響を与えるだけだ」と付け加えた。
BBCはワーナー・ブラザースにコメントを求めた。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cgev34lvgp4o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-13T18:25:05+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/78bd/live/e5f7dff0-7edf-11f1-931d-ab3863ef09cd.jpg",
    readTime: 4,
  },
  {
    id: "volkswagen-planning-to-cut-up-to-100-000-ef5b7268",
    title: "Volkswagen planning to cut up to 100,000 jobs globally",
    titleJa: "フォルクスワーゲン、世界で最大10万人の人員削減を計画",
    summaryJa: "フォルクスワーゲン、世界で最大10万人の人員削減を計画- 公開されました",
    bodyOriginal: `Volkswagen planning to cut up to 100,000 jobs globally
- Published
The chief executive of the German car giant Volkswagen Group has confirmed it is looking to cut up to 100,000 jobs – twice as many as previously stated.
The group, which includes Porsche, Audi, Seat and Skoda as well as the VW brand, had previously said it would axe some 50,000 posts in Germany by 2030.
It suffered a steep decline in profits last year – the result of falling sales in key markets, as well as increasing competition from Chinese brands moving into Europe.
In a widely-reported memo to staff, chief executive Oliver Blume said the Group's costs were 20% higher compared to rival businesses, and it would need to reduce its outgoings even further.
This, he said would mean a theoretical loss of 50,000 jobs worldwide.
"We are currently assessing across all brands, companies and regions how many adjustments are actually necessary and feasible," he said.
"We need to become more efficient, more robust and simpler. We must reduce our costs."
He added the company had been "unable to confirm" alternative uses for four factories in Germany which have previously been threatened with closure.
Two of the plants, in Zwickau and Emden, are used for electric car production. But along with other factories in Hanover and Neckarsulm, they are seen as expensive to run.
VW's profits have fallen sharply in recent years. In 2023, it made an operating profit of €22.6bn ($25.8bn, £19.3bn). This dropped to €19.1bn in 2024, and then to just €8.9bn last year.
The group has been badly hit by a fall in sales in China, once one of its most lucrative markets. In the first six months of the year they were down 26% compared to last year.
In the US, sales fell more than 7%, in part due to the impact of tariffs on car imports introduced by the Trump administration.
Meanwhile Chinese brands have been moving aggressively onto international markets, introducing new technologies while benefitting from lower production costs than European rivals.
This has added to the pressure on established brands to keep their own costs under control, and slashed profit margins.
In late 2024, after threats of mass strikes, VW reached an agreement with the German trade union IG Metall to cut 35,000 jobs at its namesake brand by 2030, in a "socially responsible manner", with another 15,000 jobs to go at its other brands.
The plans now under discussion appear to go much further.
Last week saw widespread protests at Volkswagen sites across the country, ahead of a meeting of VW's supervisory board, which includes labour representatives as well as company managers.
Some industry analysts suggested to Agence France Presse that Volkswagen had deliberately publicised the number of 100,000 as a negotiating tactic, and that the final figure of cuts is likely to be lower.
Related topics
- Published12 February 2025`,
    bodyJa: `フォルクスワーゲン、世界で最大10万人の人員削減を計画
- 公開されました
ドイツの自動車大手フォルクスワーゲン・グループの最高経営責任者（CEO）は、以前発表されていた人数の2倍にあたる最大10万人の人員削減を検討していることを認めた。
このグループにはポルシェ、アウディ、セアト、シュコダのほか、VWブランドも含まれており、以前、2030年までにドイツ国内の約5万人のポストを削減すると発表していた。
同社は昨年、主要市場での売上高の減少に加え、欧州に進出する中国ブランドとの競争激化により、大幅な利益減に見舞われた。
広く報道された社員宛てのメモの中で、オリバー・ブルーム最高経営責任者（CEO）は、グループのコストは競合他社と比べて20％高く、支出をさらに削減する必要があると述べた。
これは理論的には世界中で5万人の雇用が失われることを意味すると同氏は述べた。
「私たちは現在、すべてのブランド、企業、地域にわたって、実際にどれだけの調整が必要で、実現可能であるかを評価しているところです」と同氏は語った。
「私たちはより効率的で、より堅牢で、よりシンプルになる必要があります。コストを削減する必要があります。」
同氏は、同社が以前に閉鎖の危機に瀕していたドイツの4つの工場の代替用途を「確認できていない」と付け加えた。
ツヴィッカウとエムデンの 2 つの工場は電気自動車の生産に使用されています。しかし、ハノーファーやネッカースウルムにある他の工場と同様に、これらの工場も運営コストが高いとみられている。
VWの利益は近年大幅に減少している。 2023年の営業利益は226億ユーロ（258億ドル、193億ポンド）となった。これは2024年には191億ユーロに減少し、昨年はわずか89億ユーロに減少しました。
同グループは、かつて最も収益性の高い市場の一つであった中国での売上高の減少により大きな打撃を受けている。今年の最初の 6 か月では、前年比で 26% 減少しました。
米国では、トランプ政権が導入した自動車輸入関税の影響もあり、販売が７％以上減少した。
一方、中国ブランドは国際市場に積極的に進出し、欧州のライバルよりも低い生産コストの恩恵を受けながら新技術を導入している。
これにより、確立されたブランドには自社のコストを管理するよう圧力が加わり、利益率が低下した。
大規模ストライキの脅しを受けた2024年後半、VWはドイツの労働組合IGメタルと、「社会的責任ある方法」で2030年までに同社の同名ブランドで3万5000人を削減し、他のブランドでもさらに1万5000人の人員を削減することで合意に達した。
現在議論されている計画はさらに前進するものと思われる。
先週、労働者の代表や経営者らを含むＶＷの監査役会の会合を前に、全米のフォルクスワーゲンの拠点で広範な抗議活動が起きた。
一部の業界アナリストはフランス通信に対し、フォルクスワーゲンが交渉戦術として意図的に10万台という数字を公表したのではないか、最終的な削減台数はこれを下回る可能性が高いと示唆した。
関連トピック
- 2025 年 2 月 12 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2wzpwn51lo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-13T16:19:15+00:00",
    category: "自動車",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2e86/live/076e2020-7ec9-11f1-af40-3101fe5a127d.jpg",
    readTime: 3,
  },
  {
    id: "uk-switzerland-deal-to-scrap-roaming-cha-89eceb0a",
    title: "UK-Switzerland deal to scrap roaming charges and allow Britons to use e-gates",
    titleJa: "英国とスイスがローミング料金を廃止し、英国人が電子ゲートを使用できるように合意",
    summaryJa: "英国とスイスがローミング料金を廃止し、英国人が電子ゲートを使用できるように合意- 公開されました",
    bodyOriginal: `UK-Switzerland deal to scrap roaming charges and allow Britons to use e-gates
- Published
The UK has signed a new trade deal with Switzerland that will allow British travellers faster passage through airports by using e-gates for the first time.
Described by Trade Secretary Peter Kyle as "the most significant services trade deal the UK has ever negotiated", the agreement will also scrap mobile roaming charges for tourists and professionals visiting both countries.
The government says the deal is estimated to increase UK exports to Switzerland by £5.2bn annually "in the long run".
A services mobility deal, allowing businesses to provide services for up to 90 days without a work permit, was due to expire in 2029, but the new deal puts this on a permanent footing.
The government says UK passport holders will be allowed to use e-gates at Zurich airport from as soon as the end of this year - with Geneva and Basel airports set to announce a timetable for adoption shortly.
The scheme is separate to Switzerland's implementation of the EU's new border control system - the Entry/Exit System (EES), which will allow UK citizens to use EU e-gates.
UK employees will also be permitted to transfer to work in Switzerland for up to five years without stringent economic needs tests.
Ministers say lawyers, accountants and architects are among professionals who will benefit.
Government figures show about 800,000 Britons visit Switzerland each year.
Switzerland is the UK's sixth-largest services export market, with over £30bn in services trade between the two countries in 2025. Its citizens can already use e-gates at UK airports.
The agreement comes after trade deals were struck with the US, India, the Gulf Co-operation Council, South Korea and the EU.
It also comes as Sir Keir Starmer enters his final weeks as prime minister before being replaced by Andy Burnham.
"Whether you're growing a business or travelling for work, this agreement is about making life easier and creating more opportunity for people across the UK," Sir Keir said.
"It means British firms will find it easier to sell their expertise in one of our most important markets in Europe, supporting jobs and investment here at home."
Meanwhile, the transport secretary has spoken with the European commissioner for sustainable transport and tourism about Europe's new EES border system.
Heidi Alexander and Apostolos Tzitzikostas agreed to "work together with aim for smoothest possible EES checks ahead of the busy summer period", the UK government said.
Related topics
- Published26 January 2024
- Published21 May`,
    bodyJa: `英国とスイスがローミング料金を廃止し、英国人が電子ゲートを使用できるように合意
- 公開されました
英国はスイスと新たな貿易協定を締結し、英国旅行者が初めて電子ゲートを使用して空港をより迅速に通過できるようになった。
ピーター・カイル貿易長官は「英国がこれまで交渉した中で最も重要なサービス貿易協定」と表現しており、この協定は両国を訪れる観光客や専門家向けのモバイルローミング料金も撤廃する。
政府は、この協定により英国からスイスへの輸出が「長期的には」年間52億ポンド増加すると推定されていると述べている。
企業が労働許可証なしで最大90日間サービスを提供できるようにするサービスモビリティ協定は2029年に期限切れとなる予定だったが、新たな協定によりこれは恒久的な足場となる。
政府は、早ければ今年末から英国のパスポート保持者がチューリッヒ空港で電子ゲートの使用を許可されると発表しており、ジュネーブ空港とバーゼル空港も間もなく採用スケジュールを発表する予定だ。
この計画は、スイスによるEUの新しい国境管理システムである出入国管理システム（EES）の導入とは別のもので、これにより英国国民はEUの電子ゲートを使用できるようになる。
英国の従業員も、厳格な経済的ニーズの審査なしで最長５年間、スイスで働くことが認められる。
大臣らは、弁護士、会計士、建築家なども恩恵を受ける専門家だと述べている。
政府の統計によれば、毎年約80万人の英国人がスイスを訪れている。
スイスは英国第 6 位のサービス輸出市場であり、2025 年には両国間のサービス貿易額は 300 億ポンドを超えます。スイス国民はすでに英国の空港で電子ゲートを使用できます。
この協定は、米国、インド、湾岸協力会議、韓国、EUと貿易協定が締結された後に締結された。
それはまた、サー・キア・スターマーがアンディ・バーナムに後任される前の首相としての最後の数週間を迎えている時期でもある。
「ビジネスを成長させている場合でも、仕事で旅行している場合でも、この協定は英国中の人々の生活を楽にし、より多くの機会を生み出すことを目的としています」とサー・キーア氏は述べた。
「これは英国企業がヨーロッパの最も重要な市場の一つで専門知識を売り込みやすくなり、国内の雇用と投資を支援することを意味する。」
一方、運輸長官は欧州の持続可能な交通・観光担当委員と欧州の新たなEES国境制度について協議した。
ハイジ・アレクサンダー氏とアポストロス・ツィツィコスタス氏は「夏の繁忙期に先立って、可能な限りスムーズなEES検査を目指して協力する」ことに合意したと英国政府は述べた。
関連トピック
- 2024 年 1 月 26 日公開
- 5 月 21 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c621p9yjz1zo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-13T16:05:13+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/a579/live/e797f600-7ecc-11f1-a521-db2da184cdb6.jpg",
    readTime: 3,
  },
  {
    id: "paramount-wbd-merger-expected-to-face-la-1076ca54",
    title: "Paramount-WBD merger expected to face lawsuit from multiple states, sources say",
    titleJa: "パラマウントとWBDの合併は複数の州からの訴訟に直面すると予想される、関係者が語る",
    summaryJa: "デビッド・フェイバー氏の報道によると、複数の州司法長官がパラマウント・スカイダンスとワーナー・ブラザース・ディスカバリーの合併に異議を唱え訴訟を起こす見通しだという。",
    bodyOriginal: `A group of state attorneys general is expected to file a lawsuit as soon as Monday challenging Paramount Skydance's proposed acquisition of Warner Bros. Discovery, CNBC's David Faber reported.
The lawsuit, which will be brought by a group including California Attorney General Rob Bonta, is expected to try to block the merger on antitrust grounds, Faber reported.
The deal would combine two storied film studios — Paramount and Warner Bros. — as well as streaming platforms Paramount+ and HBO Max. Paramount CEO David Ellison has previously said the streaming services would become one following the transaction.
It would also mean the formation of the largest portfolio of TV networks in the U.S., bringing together Paramount's broadcast network CBS and pay TV channels like MTV and BET with WBD's CNN, TNT and others.
The merger won approval from WBD shareholders in April, and Ellison said on a recent earnings call that it was on track to close by September.
The deal came under scrutiny from lawmakers in both the U.S. and Europe, including related to foreign funding that was part of Paramount's offer. In mid-June, the U.S. Department of Justice signed off on the tie-up, clearing it of federal antitrust concerns.
"The Division has completed its analysis of the proposed merger of Paramount and Warner Bros. and determined based on the evidence received in its investigation that the transaction is not likely to result in harm to competition or American consumers," the department said in its determination.
The merger has also won approval from several global jurisdictions as it moves toward a potential close.
However, the the European Union is still reviewing the deal for approval , with a new provisional deadline set for July 22. The European Commission said in a public filing this month that Paramount has submitted concessions in a bid to smooth over concerns regarding the deal.
Hollywood has previously expressed concerns about the combination, citing the likelihood for fewer film releases and the potential for job losses in the industry. Ellison has promised that once combined the film studios would put out a slate of 30 movies per year and has said he's committed to protecting jobs.
Ellison first set his sights on WBD last September. Just weeks after Paramount and Ellison's Skydance completed its merger, the company made its initial run for WBD, resulting in several bids and a formal sale process.
WBD ultimately signed a deal to sell its film studio and streaming assets to Netflix. However, Paramount launched a hostile takeover offer and subsequently amended its bid. Netflix ditched its deal, and Paramount walked away with an agreement to buy the entirety of WBD for $31 per share.`,
    bodyJa: `CNBCのデイビッド・フェイバー氏が報じたところによると、パラマウント・スカイダンスによるワーナー・ブラザース・ディスカバリー買収計画に異議を唱え、州司法長官のグループが月曜日にも訴訟を起こす予定だという。
フェイバー氏によると、この訴訟はカリフォルニア州司法長官ロブ・ボンタ氏を含むグループが起こす予定で、独占禁止法を理由に合併を阻止しようとするものとみられる。
この契約により、パラマウントとワーナー・ブラザースの2つの有名な映画スタジオと、ストリーミングプラットフォームのパラマウント+とHBOマックスが統合されることになる。パラマウントの最高経営責任者（CEO）デイビッド・エリソン氏は以前、この取引によりストリーミングサービスは一つになるだろうと述べていた。
それはまた、パラマウントの放送ネットワークCBSとMTVやBETなどの有料TVチャンネルとWBDのCNN、TNTなどを統合し、米国最大のテレビネットワークのポートフォリオを形成することを意味する。
この合併は4月にWBD株主の承認を得ており、エリソン氏は最近の決算会見で9月までの完了に向けて順調に進んでいると述べた。
この取引は、パラマウントの提案の一部である外国資金に関連するものも含め、米国と欧州の両国の議員から厳しい監視の対象となった。 6月中旬、米国司法省は連邦政府の独占禁止法上の懸念を解消し、提携を承認した。
同省は決定文書で「同局はパラマウントとワーナー・ブラザースの合併案の分析を完了し、調査で入手した証拠に基づき、この取引が競争や米国の消費者に損害を与える可能性は低いと判断した」と述べた。
この合併は、完了の可能性に向けて進んでおり、いくつかの世界的な管轄区域からも承認を得ています。
しかし、欧州連合はまだ承認に向けてこの協定を検討しており、新たな暫定期限は7月22日に設定されている。欧州委員会は今月の公開文書で、パラマウントが協定に関する懸念を和らげるために譲歩したと述べた。
ハリウッドは以前、映画公開数が減少する可能性や業界での雇用喪失の可能性を挙げて、この合併について懸念を表明していた。エリソン氏は、映画スタジオが統合されれば年間30本の映画を公開すると約束し、雇用を守ることに全力で取り組むと述べた。
エリソン氏は昨年9月に初めてWBDに目を向けた。パラマウントとエリソンズ・スカイダンスが合併を完了してからわずか数週間後、同社はWBDへの最初の立候補を行い、その結果、いくつかの入札と正式な売却プロセスが行われた。
WBDは最終的に、自社の映画スタジオとストリーミング資産をNetflixに売却する契約に署名した。しかし、パラマウントは敵対的買収提案を開始し、その後入札を修正した。 Netflixは契約を破棄し、パラマウントはWBD全体を1株当たり31ドルで買収するという合意を結んで立ち去った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/paramount-wbd-merger-lawsuit.html",
    publishedAt: "2026-07-13T14:40:11+00:00",
    category: "マクロ経済",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    readTime: 3,
  },
  {
    id: "u-s-oil-jumps-above-75-a-barrel-after-tr-eb714f00",
    title: "U.S. oil jumps above $75 a barrel after Trump reinstates Strait of Hormuz blockade on Iranian ships",
    titleJa: "トランプ大統領がイラン船舶に対するホルムズ海峡封鎖を復活させたことで、米国産原油は1バレルあたり75ドルを超えて高騰",
    summaryJa: "イランと米国がホルムズ海峡の制海権を巡って争う中、ドナルド・トランプ大統領がイランに対する海上封鎖を再び課すだろうと発言したことを受け、月曜日の原油価格が上昇した。国際指標であるブレント原油先物は５．３％上昇し１バレル＝８０ドルとなった。ウェスト・テキサス・インターミディエート先物は直近で5.3％高の75.18ドルとなった。",
    bodyOriginal: `Oil prices jumped Monday after President Donald Trump said the U.S. would reimpose a naval blockade against Iran as Tehran and Washington battle to control the Strait of Hormuz.
Brent crude futures, the international benchmark, advanced 5.3% to $80 per barrel. West Texas Intermediate futures were last seen 5.3% higher at $75.18.
"We are reinstating the THE IRANIAN BLOCKADE, so named because it is only stopping Iran's ships or customers from entering or leaving. All other countries will have fair and open use of the Strait," Trump said in a post on his social media platform.
The president said the U.S. will protect traffic in Hormuz but demanded reimbursement equivalent to 20% of all cargo shipped. The decision to reimpose the blockade comes after the U.S. and Iran exchanged strikes over the weekend.
The U.S. military launched another wave of strikes Sunday against Iran after hitting 140 targets on Saturday, according to U.S. Central Command. The strikes were in response to an attack by the Islamic Revolutionary Guard Corps on a container ship transiting Hormuz.
Iran responded Sunday with strikes on U.S. military facilities in Jordan, Kuwait, Bahrain and Oman, according to the state news agency Tasnim.
Iranian state media said the Revolutionary Guard had closed the Hormuz until further notice, but the U.S. military disputed that claim. Centcom said the strait was open to "all vessels seeking to lawfully transit."
"U.S. forces are positioned and prepared to ensure that freedom of navigation remains available despite unwarranted Iranian aggression, harassment, threats, and arbitrary declarations," Centcom said in a social media post Sunday. "Iran does not control the strait. Traffic is flowing."
Trump said Hormuz was open in an interview with NBC News' "Meet the Press" that aired Sunday. The maritime intelligence firm Windward tracked nine ships that transited the strait on Saturday.
The southern route through Oman's waters remains open to inbound and outbound traffic, said the Joint Maritime Information Center, a U.S.-led naval coalition in Bahrain that provides security updates to civilian ships transiting waters in the Middle East.
But the security situation in Hormuz remains severe, the center said in a notice on Sunday. Mariners should exercise "extreme vigilance," it said.
The weekend airstrikes are the fourth time the U.S. has bombed Iran over the past week in retaliation for attacks on commercial ships transiting Hormuz in the southern corridor protected by the U.S. military.
Iran is demanding ships use a northern route through its territorial waters as it claims control of the strait.
The latest outbreak of fighting stems from conflicting U.S. and Iranian interpretations of how Hormuz was supposed to reopen under an interim peace deal they signed on June 17.
About 20% of the world's oil supplies transited Hormuz before the U.S. and Israel attacked Iran on Feb. 28. Traffic plunged after Iran started attacking ships in the strait in early March, but transits had picked up after Washington and Tehran signed the interim deal.`,
    bodyJa: `イランと米国がホルムズ海峡の制海権を巡って争う中、ドナルド・トランプ大統領がイランに対する海上封鎖を再び課すだろうと発言したことを受け、月曜日の原油価格が上昇した。
国際指標であるブレント原油先物は５．３％上昇し１バレル＝８０ドルとなった。ウェスト・テキサス・インターミディエート先物は直近で5.3％高の75.18ドルとなった。
トランプ大統領は自身のソーシャルメディアプラットフォームへの投稿で、「われわれはイランの船舶や顧客の出入りを阻止するだけであることからその名がついたイラン封鎖を復活させる。他のすべての国は公正かつオープンに海峡を利用することになる」と述べた。
大統領は、米国はホルムズの交通を保護すると述べたが、出荷された全貨物の20％に相当する償還を要求した。封鎖再開の決定は、米国とイランが週末に攻撃を交わした後に下された。
米中央軍によると、土曜日に140の標的を攻撃した後、米軍は日曜日にイランに対して新たな攻撃を開始した。この空爆は、ホルムズを航行中のコンテナ船に対するイスラム革命防衛隊による攻撃への対応として行われた。
国営通信社タスニム通信によると、イランは日曜、ヨルダン、クウェート、バーレーン、オマーンの米軍施設を攻撃しこれに応じた。
イラン国営メディアは、革命防衛隊が追って通知があるまでホルムズを閉鎖したと報じたが、米軍はこの主張に異議を唱えた。セントコムは、この海峡は「合法的に通航しようとするすべての船舶」に開かれていると述べた。
セントコムは日曜、ソーシャルメディアへの投稿で、「米軍は、イランの不当な侵略、嫌がらせ、脅迫、恣意的な宣言にもかかわらず、航行の自由が確保できるよう配置され、準備ができている」と述べた。 「イランは海峡を支配していない。交通は流れている。」
トランプ大統領は、日曜日に放送されたNBCニュースの「ミート・ザ・プレス」のインタビューで、ホルムズはオープンだと述べた。海洋情報会社ウィンドワードは土曜日に海峡を通過した９隻の船舶を追跡した。
中東海域を航行する民間船舶に最新の安全情報を提供するバーレーンの米国主導の海軍連合である共同海事情報センターは、オマーン海域を通過する南の航路は依然として往来と往来に開放されていると述べた。
しかし、ホルムズの治安状況は依然厳しいと同センターは日曜日の通知で述べた。船員らは「極度の警戒」を払うべきだとした。
週末の空爆は、米軍が保護するホルムズ南部回廊を通過する商船への攻撃への報復として、米国が過去１週間でイランを爆撃したのは４回目となる。
イランは海峡の支配権を主張し、船舶に対し領海を通過する北航路を使用するよう要求している。
今回の戦闘勃発は、6月17日に署名された暫定和平協定に基づいてホルムズ島が再開されるはずだった米国とイランの解釈の矛盾に端を発している。
米国とイスラエルが2月28日にイランを攻撃するまで、世界の石油供給量の約20％がホルムズを通過していた。イランが3月初旬に海峡の船舶を攻撃し始めてから交通量は激減したが、米国とイランが暫定合意に署名した後は通過が回復した。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/oil-price-strait-hormuz-iran-trump-tanker.html",
    publishedAt: "2026-07-13T14:36:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 3,
  },
  {
    id: "i-m-a-bartender-yoga-teacher-and-freelan-a2a3ebc1",
    title: "I’m a bartender, yoga teacher and freelance consultant. How can I budget with such an unpredictable income?",
    titleJa: "私はバーテンダー、ヨガ講師、フリーランスのコンサルタントです。このような予測不可能な収入でどのように予算を立てればよいでしょうか?",
    summaryJa: "「経済的な決断をすべてギャンブルだと感じずに、不規則な収入を管理する賢い方法はないでしょうか?」",
    bodyOriginal: `‘Is there a smart way to manage irregular income without feeling like every financial decision is a gamble?’`,
    bodyJa: `「経済的な決断をすべてギャンブルだと感じずに、不規則な収入を管理する賢い方法はないでしょうか?」`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/im-a-bartender-yoga-teacher-and-freelance-consultant-how-can-i-budget-with-such-an-unpredictable-income-d5dce383?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T14:08:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-52354751",
    readTime: 2,
  },
  {
    id: "is-there-a-deadline-to-claim-the-1-000-t-dff742f3",
    title: "Is there a deadline to claim the $1,000 ‘Trump account’ contribution for my kid?",
    titleJa: "私の子供のための 1,000 ドルの「トランプ アカウント」寄付金を請求する期限はありますか?",
    summaryJa: "政府の拠出金を受ける資格のない一部の子供には、最初の 250 ドルの受給資格がある場合があります。",
    bodyOriginal: `Some children who don’t qualify for the government contribution may be eligible for an initial $250.`,
    bodyJa: `政府の拠出金を受ける資格のない一部の子供には、最初の 250 ドルの受給資格がある場合があります。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/is-there-a-deadline-to-claim-the-1-000-trump-account-contribution-for-my-kid-1b70141c?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T14:00:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-31292189",
    readTime: 2,
  },
  {
    id: "stock-pickers-know-they-can-t-outsmart-t-8a49de32",
    title: "Stock pickers know they can’t outsmart the market. That doesn’t stop them from trying.",
    titleJa: "銘柄選びは市場を出し抜くことはできないことを知っています。それは彼らの挑戦を止めるものではありません。",
    summaryJa: "長期的な投資目標を逸脱することなく、内部トレーダーを満足させる方法。",
    bodyOriginal: `How to satisfy your inner trader without derailing your long-term investment goals.`,
    bodyJa: `長期的な投資目標を逸脱することなく、内部トレーダーを満足させる方法。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/stock-pickers-know-they-cant-outsmart-the-market-that-doesnt-stop-them-from-trying-b4fddc41?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T13:53:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-91012455",
    readTime: 2,
  },
  {
    id: "big-banks-poised-to-report-booming-reven-54e5a276",
    title: "Big banks poised to report booming revenue propelled by SpaceX IPO, Iran war volatility",
    titleJa: "大手銀行、スペースXのIPOとイラン戦争の不安定化で収益が急増すると報告する構え",
    summaryJa: "JPモルガン・チェースとバンク・オブ・アメリカを筆頭に各銀行が火曜日に第2四半期決算を発表し始めると、株式や債券のトレーディング収入は今年初めに樹立した記録に近づくか、あるいはそれを上回るとの期待が高まっている。これは、ウェルズ・ファーゴのベテランアナリスト、マイク・メイヨ氏が現在の金融セクターの「スイートスポット」と呼ぶものの重要な部分だ。銀行の収益源であるウォール街とメインストリートは両方とも同時に成長モードにあります。",
    bodyOriginal: `Expectations are high that when banks start posting second-quarter results Tuesday, led by JPMorgan Chase and Bank of America, revenue from trading equities and fixed income will approach, or even exceed, the records set earlier this year.
That's a key part of what veteran analyst Mike Mayo of Wells Fargo calls the "sweet spot" in the financial sector right now. Both of banking's profit engines — Wall Street and Main Street — are in growth mode at the same time.
The largest U.S. banks are raking in rising fees from helping corporations tap the markets, punctuated by last month's giant SpaceX IPO, while risk-taking traders are also thriving as geopolitical unrest including the Iran war stokes volatility across asset classes.
"You saw the largest IPO in history, a pace of mergers that's on track to be a record year, and a broadening out of trading to include equity and fixed income across myriad geographies," Mayo told CNBC.
The quarter's big bank earnings come at an unusually favorable moment for the industry. After years of navigating higher interest rates and inflation-fueled recession fears, lenders are benefiting from a rare combination of booming Wall Street activity, resilient consumer credit and a long-awaited pickup in business lending.
"There's not much more you can ask for," Mayo said.
The trends, which coincide with the Trump administration's push to ease banking regulations, have helped financial stocks outperform the broader market for two straight years, Mayo noted. That streak also raises the stakes as investors look for signs the momentum can continue into 2027.
JPMorgan, Bank of America, Citigroup, Wells Fargo and Goldman Sachs are set to post results early Tuesday, with Morgan Stanley reporting Wednesday.
'Big money maker'
Investment banking revenue for the group could surge 26% from a year ago, while trading revenue could jump 14%, according to KBW analyst Chris McGratty.
Besides the hundreds of millions of dollars in fees that SpaceX paid banks — led by Goldman Sachs and Morgan Stanley — for the IPO itself, the firms garnered fees for raising debt for the newly public company, and also have a shot at managing the wealth of newly minted millionaires and billionaires.
On top of that, Goldman and Morgan Stanley likely reaped so-called soft dollars from the SpaceX initial public offering, according to Jay Ritter, professor emeritus of finance at the University of Florida's Warrington College of Business.
Soft dollars are essentially fees that hedge funds pay investment banks for a slice of an oversubscribed IPO, Ritter said.
"The big money maker for investment banks in IPOs is not the bankers' fee, but the ability to allocate shares to hedge funds and some active mutual funds that pay soft dollars," he said.
Meanwhile, trading gains were driven by strength in equities as stock markets climbed during the quarter, as well as heightened activity in fixed income after the Iran conflict sent oil prices, interest rates and currencies swinging, McGratty said.
"Banks are doing a good job these days of capturing the upside of volatility, whereas in previous cycles, they've been caught offsides," McGratty said.
'Demand is back'
But Mayo contended that the more important development this quarter might be happening away from Wall Street.
The less glamorous business of commercial lending could be turning the corner after years of weakness as banks look to wrest market share from private credit lenders and as the artificial intelligence-fueled spending boom spreads to the rest of the economy, he said.
"Demand is back as companies treat the uncertainty as the new normal and build that new factory, invest in plants and get on with business," Mayo said.
The trend could benefit regional lenders including Fifth Third because commercial lending represents a larger share of their business than it does for diversified giants like JPMorgan, Mayo said.
Consumer banking also appears healthy. Low unemployment has kept borrowers current on mortgages, auto loans and credit cards, limiting losses.
There are still some risks for the quarter, including potential blowups in the private credit realm, even though that concern has subsided for most banks in the absence of new "cockroaches" emerging. JPMorgan CEO Jamie Dimon warned analysts and investors last year after the collapse of subprime car lender Tricolor Holdings that "when you see one cockroach, there are probably more."
Another is whether competition over deposits is intensifying, as some players have been forced to pay higher rates to attract and keep savers' dollars, McGratty said. In an environment where interest rates are steady or rising, that could pressure lender margins.
After two years of market-beating returns, investors are becoming less interested in how strong the last quarter was than whether this unusually favorable backdrop can last.
"We know the quarter's going to be strong, so I think the question that you ask yourself is around sustainability, right?" McGratty said. "Is it all sustainable?"`,
    bodyJa: `JPモルガン・チェースとバンク・オブ・アメリカを筆頭に各銀行が火曜日に第2四半期決算を発表し始めると、株式や債券のトレーディング収入は今年初めに樹立した記録に近づくか、あるいはそれを上回るとの期待が高まっている。
これは、ウェルズ・ファーゴのベテランアナリスト、マイク・メイヨ氏が現在の金融セクターの「スイートスポット」と呼ぶものの重要な部分だ。銀行の収益源であるウォール街とメインストリートは両方とも同時に成長モードにあります。
米国の大手銀行は、先月のスペースX社の巨大IPOによって中断された企業の市場開拓支援で手数料の上昇を集めている一方、イラン戦争などの地政学的不安が資産クラス全体のボラティリティを高める中、リスクを取るトレーダーも繁盛している。
メイヨー氏はCNBCに対し、「史上最大のIPO、記録的な年になる見込みの合併ペース、そして無数の地域で株式や債券を含む取引範囲の拡大が見られた」と語った。
大手銀行の今四半期の決算は、業界にとって異例の好都合なタイミングで発表された。金利上昇とインフレによる景気後退懸念を何年にもわたって乗り越えてきた金融業者は、ウォール街の活況な活動、回復力のある消費者金融、待望の企業向け融資の回復という珍しい組み合わせの恩恵を受けている。
「これ以上望むことはあまりありません」とメイヨ氏は語った。
メイヨー氏は、こうした傾向はトランプ政権の銀行規制緩和の推進と一致しており、金融株が2年連続で市場全体をアウトパフォームするのに役立っていると指摘した。投資家がこの勢いが2027年まで続く可能性がある兆候を探しているため、この連続記録は賭け金も高めている。
JPモルガン、バンク・オブ・アメリカ、シティグループ、ウェルズ・ファーゴ、ゴールドマン・サックスは火曜日初めに決算を発表する予定で、モルガン・スタンレーは水曜日に発表する。
「大金儲け」
KBWのアナリスト、クリス・マクグラッティ氏によると、同グループの投資銀行収入は前年比26％増加する可能性があり、トレーディング収入は14％増加する可能性がある。
スペースX社がIPO自体のためにゴールドマン・サックスやモルガン・スタンレーを筆頭とする銀行に支払った数億ドルの手数料に加えて、両社は新規上場企業の借入調達手数料も得ており、また、新たに造られた億万長者や億万長者の資産の管理にもチャンスを与えている。
それに加えて、フロリダ大学ウォリントン・カレッジ・オブ・ビジネスのジェイ・リッター金融名誉教授によると、ゴールドマンとモルガン・スタンレーはスペースXの新規株式公開からいわゆるソフトドルを得た可能性が高いという。
リッター氏​​によると、ソフトドルは基本的に、募集超過のIPOの一部に対してヘッジファンドが投資銀行に支払う手数料だという。
同氏は「投資銀行にとってIPOで大きな利益をもたらすのは銀行手数料ではなく、ソフトドルを支払うヘッジファンドや一部のアクティブな投資信託に株式を割り当てる能力だ」と述べた。
一方、トレーディング利益は、四半期中に株式市場が上昇したことによる株高と、イラン紛争後の原油価格、金利、通貨の変動を受けて債券の活動が活発化したことが寄与したとマクグラティ氏は述べた。
「銀行は最近、ボラティリティーの上昇面を上手く捉えているが、これまでのサイクルではオフサイドを捕らえられていた」とマクグラッティ氏は語った。
「需要が戻ってきた」
しかしメイヨー氏は、今四半期のより重要な発展はウォール街から離れたところで起こっている可能性があると主張した。
同氏は、銀行が民間信用貸し手から市場シェアを奪おうとしているほか、人工知能を活用した消費ブームが経済全体に波及する中、商業融資というそれほど魅力のないビジネスが長年の低迷を経て曲がり角を迎えている可能性があると述べた。
メイヨー氏は「企業が不確実性を新たな常態として捉え、新しい工場を建設し、投資し、事業を再開しているため、需要は戻っている」と述べた。
メイヨー氏は、JPモルガンのような多角化した大手企業よりも商業融資が事業に占める割合が大きいため、この傾向はフィフス・サードを含む地域金融機関に利益をもたらす可能性があると述べた。
消費者銀行も健全なようだ。失業率が低いため、借り手は住宅ローン、自動車ローン、クレジットカードを利用し続けており、損失は限定されている。
新たな「ゴキブリ」の出現がなかったため、大半の銀行にとって懸念は薄れたものの、民間信用分野での爆発の可能性など、同四半期には依然としてリスクがいくつかある。 ＪＰモルガンのジェイミー・ダイモン最高経営責任者（ＣＥＯ）は昨年、サブプライムカー融資会社トリコロール・ホールディングスの破綻後、アナリストや投資家に「ゴキブリを一匹見れば、おそらくもっといるだろう」と警告した。
もう一つは、一部のプレーヤーが貯蓄者の資金を引きつけて保持するために高い金利を支払わなければならないため、預金をめぐる競争が激化しているかどうかである、とマクグラッティ氏は述べた。金利が安定または上昇している環境では、貸し手のマージンが圧迫される可能性があります。
市場を上回るリターンが 2 年間続いた後、投資家は前四半期がどれだけ好調だったかよりも、この異常に有利な状況が続くかどうかに関心を持ち始めています。
「この四半期が好調になることは分かっています。ですから、あなたが自問するのは持続可能性に関する質問だと思いますね?」マクグラティ氏は語った。 「それはすべて持続可能ですか？」`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/bank-earnings-jpmorgan-chase-goldman-sachs-bank-of-america.html",
    publishedAt: "2026-07-13T13:19:24+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "kalshi-launches-pro-product-for-users-tr-9a98765b",
    title: "Kalshi launches 'Pro' product for users trading multiple markets at same time, perpetual futures",
    titleJa: "カルシ、複数の市場を同時に取引するユーザー向けの「プロ」製品、無期限先物を発売",
    summaryJa: "予測市場プラットフォームのカルシは月曜日に、非常にアクティブなトレーダー向けの製品を発売すると同社がCNBCに語った。CNBCに提供されたメモによると、現在一般公開されているKalshi Proは、複数の市場を同時に取引したり、ライブイベント中に高速で取引したりする投機家向けに設計されているという。このプラットフォームはまた、特定の価格に達するまで執行されない取引である休止注文を実行する人をサポートするように設計されているとメモにはある。",
    bodyOriginal: `Prediction market platform Kalshi is launching a product for its highly active traders on Monday, the company told CNBC.
Kalshi Pro, now available to the public, is designed for speculators who trade multiple markets at the same time and or move with speed during live events, according to a memo provided to CNBC. The platform is also designed to support those who run resting orders, trades that don't execute until certain prices are met, the memo said.
CNBC reported in the beginning of June that Kalshi was working on a terminal for its high-end traders. Kalshi confirmed the product's development at an event later that month. While publicly available, the Pro product remains in beta testing.
The platform also allows traders to see a continuous feed of all public trades, have a better view into individual contracts' order books and provides a simpler way to examine multi-leg contract trades, the memo said.
The product is a response to the fact that many of Kalshi's most active traders have created their own software and workflows to help manage their trades and gain an edge. Kalshi Pro is a product to create a more central platform for these speculators. It's not clear whether Kalshi will seek to monetize the product at some point.
Kalshi Pro also will feature new utilities for those trading on the company's perpetual futures, colloquially known as "perps," product. That includes "terminal-grade" charting, and new ways to manage risks on traders' perps positions, according to the memo.
"Kalshi's active traders are already trading prediction markets and perpetuals like Wall Street trades equities and bonds," said Andy Chang, the Kalshi Pro product lead, in a statement. "We built Pro to give them the cockpit they deserve."
Disclosure: CNBC and Kalshi have a commercial relationship that includes customer acquisition and a minority investment.`,
    bodyJa: `予測市場プラットフォームのカルシは月曜日に、非常にアクティブなトレーダー向けの製品を発売すると同社がCNBCに語った。
CNBCに提供されたメモによると、現在一般公開されているKalshi Proは、複数の市場を同時に取引したり、ライブイベント中に高速で取引したりする投機家向けに設計されているという。このプラットフォームはまた、特定の価格に達するまで執行されない取引である休止注文を実行する人をサポートするように設計されているとメモにはある。
CNBCは6月初め、カルシがハイエンドトレーダー向けの端末の開発に取り組んでいると報じた。カルシ氏は同月後半のイベントでこの製品の開発を認めた。 Pro 製品は一般に公開されていますが、まだベータ テスト中です。
また、このプラットフォームにより、トレーダーはすべての公開取引の継続的なフィードを確認し、個々の契約のオーダーブックをよりよく確認できるようになり、マルチレッグ契約の取引を調査する簡単な方法が提供されるとメモには記載されています。
この製品は、カルシの最も活発なトレーダーの多くが、取引を管理して優位性を得るのに役立つ独自のソフトウェアとワークフローを作成しているという事実に応えたものです。 Kalshi Pro は、これらの投機家のためのより中心的なプラットフォームを作成するための製品です。カルシがある時点でこの製品を収益化しようとするかどうかは不明である。
また、Kalshi Pro には、口語的に「perps」として知られる同社の無期限先物商品を取引する人向けの新しいユーティリティも搭載されます。メモによると、これには「ターミナルグレード」チャートや、トレーダーのパープスポジションのリスクを管理する新しい方法が含まれるという。
カルシ・プロの製品責任者、アンディ・チャン氏は声明で「カルシのアクティブトレーダーはすでに予測市場やウォール街のような永久取引で株式や債券を取引している」と述べた。 「私たちは、彼らにふさわしいコックピットを提供するために Pro を構築しました。」
開示: CNBC とカルシには、顧客の獲得と少数出資を含む商業関係があります。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/kalshi-launches-pro-product-for-users-trading-multiple-markets-at-same-time-perpetual-futures.html",
    publishedAt: "2026-07-13T11:36:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "meta-s-louisiana-data-center-investment-30003a99",
    title: "Meta's Louisiana data center investment to reach $50 billion, aided by generous tax incentives",
    titleJa: "メタのルイジアナ州データセンターへの投資は寛大な税制優遇を受けて500億ドルに達する",
    summaryJa: "メタ氏によると、ルイジアナ州リッチランド教区に計画されているハイペリオン・データセンター・スーパークラスターは5GWの施設で、費用は500億ドル以上になるという。",
    bodyOriginal: `Meta's massive Hyperion data center project in rural Louisiana is getting much bigger and costlier, with a big assist from the state's government.
The company said in a blog post on Monday that the site in Richland Parish, Louisiana — home to what will be Meta's largest data center — will be a 5GW facility and cost over $50 billion. That's higher than the $27 billion figure that was revealed in October, when Meta and Blue Owl Capital formed a joint venture to help with the buildout and management of the facility, originally planned as a 2GW data center.
As Meta pursues its multi-hundred-billion-dollar buildout artificial intelligence buildout, the company and hyperscaler rivals Microsoft, Alphabet and Amazon are taking advantage of tax rebates and energy deals being offered by states that are fighting to get a piece of the AI boom.
In late 2024, Louisiana Republican Governor Jeff Landry signed into law a 20-year sales tax exemption for data centers built before 2029 as part of an effort to court Meta in the state, CNBC previously reported. Landry is set to host a press event on Monday in Baton Rouge.
"I'm a business guy," Landry told CNBC in an interview last year. "What we know is when you look at the overall comprehensive package here, it's in the black. For local government, and the state, and how you get to the bottom line is irrespective to me."
Meta is expanding the project as it seeks to build out enough AI infrastructure to meet demand. The announcement comes after Meta had its best week on the stock market since early 2024 following the release of two major AI models under the leadership of AI chief Alexandr Wang, head of Meta Superintelligence Labs. Investors have been looking for the company to start showing returns on its outsized AI investments.
Meta said in Monday's post that the company "pays the full costs of the energy, water, and related infrastructure the data center uses so consumers aren't paying the cost." Since construction of the Louisiana data center began in December 2024, local businesses have received over $1.6 billion in contracts from Meta, the company said.
"With this expansion, we will be investing over $1 billion in local infrastructure improvements, including roads, water and wastewater systems," Meta said in the post. The company didn't announce a financial partner for the expansion.
When the project began, the estimated price tag was $10 billion. CEO Mark Zuckerberg said in a Facebook post roughly six months later that the supercluster, named Hyperion, would be "able to scale up to 5GW over several years." Unlike traditional data centers, superclusters are packed with graphics processing units and related cutting-edge hardware tailored for AI workloads.
"Meta Superintelligence Labs will have industry-leading levels of compute and by far the greatest compute per researcher," Zuckerberg wrote.
A Meta spokesperson told CNBC that the Hyperion project should reach 2GW by 2030, but there's no timeline for when the full 5GW project will be completed.`,
    bodyJa: `ルイジアナ州の田舎にあるメタ社の大規模なハイペリオン・データセンター・プロジェクトは、州政府からの多大な支援を受けて、はるかに大規模かつ高価になっている。
同社は月曜日のブログ投稿で、メタ社最大のデータセンターとなるルイジアナ州リッチランド教区のサイトは5GWの施設で、費用は500億ドル以上になると述べた。これは、当初2GWのデータセンターとして計画されていた施設の建設と管理を支援するために、メタとブルー・オウル・キャピタルが合弁事業を設立した10月に明らかになった270億ドルという数字よりも高い。
メタ社が数千億ドル規模の人工知能開発を進める中、同社とハイパースケーラーのライバルであるマイクロソフト社、アルファベット社、アマゾン社は、AIブームの一部を獲得しようと争っている州が提供する税金還付やエネルギー協定を利用している。
2024年後半、ルイジアナ州の共和党知事ジェフ・ランドリーは、州内のメタに求愛する取り組みの一環として、2029年以前に建設されたデータセンターに対する20年間の売上税免除法案に署名したとCNBCが以前報じた。ランドリー氏は月曜日にバトンルージュでプレスイベントを主催する予定だ。
「私はビジネスマンだ」とランドリー氏は昨年CNBCのインタビューで語った。 「私たちが知っているのは、ここでの包括的なパッケージ全体を見ると、黒字だということです。地方自治体にとっても州にとっても、最終的にどうやって利益を得るのかは私には関係ありません。」
Meta は、需要を満たすのに十分な AI インフラストラクチャを構築するためにプロジェクトを拡大しています。この発表は、メタ・スーパーインテリジェンス・ラボ所長でAI責任者のアレクサンドル・ワン氏のリーダーシップの下、2つの主要なAIモデルのリリースを受けて、メタが株式市場で2024年初頭以来最高の週を迎えた後に行われた。投資家は同社が大規模なAI投資から利益を上げ始めることを期待していた。
メタ氏は月曜の投稿で、同社が「データセンターが使用するエネルギー、水道、関連インフラの費用を全額負担しているため、消費者はコストを支払っていない」と述べた。ルイジアナ州のデータセンターの建設が2024年12月に始まって以来、地元企業はメタ社から16億ドル以上の契約を受け取ったと同社は述べた。
「この拡張により、道路、上下水道システムを含む地域インフラの改善に10億ドル以上を投資することになる」とメタ氏は投稿の中で述べた。同社は拡張のための財務パートナーを発表しなかった。
プロジェクトが開始されたとき、推定価格は 100 億ドルでした。 CEOのマーク・ザッカーバーグ氏は約6か月後のFacebookへの投稿で、Hyperionと名付けられたスーパークラスターは「数年かけて5GWまでスケールアップできる」と述べた。従来のデータセンターとは異なり、スーパークラスターには、AI ワークロードに合わせて調整されたグラフィックス処理ユニットと関連する最先端のハードウェアが詰め込まれています。
「メタ・スーパーインテリジェンス・ラボは業界をリードするレベルのコンピューティングを備え、研究者一人当たりのコンピューティングはこれまでで最も優れたものになるだろう」とザッカーバーグ氏は書いた。
Metaの広報担当者はCNBCに対し、Hyperionプロジェクトは2030年までに2GWに達するはずだが、完全な5GWプロジェクトがいつ完了するかについてのタイムラインはないと語った。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/meta-louisiana-data-center-investment-reaches-50-billion-amid-ai-push.html",
    publishedAt: "2026-07-13T09:30:01+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "oil-prices-surge-as-much-as-5-after-iran-b38e9343",
    title: "Oil prices surge as much as 5% after Iran declares Strait of Hormuz is closed",
    titleJa: "イランがホルムズ海峡閉鎖宣言後、原油価格が最大5％上昇",
    summaryJa: "今週は米国とイランによる攻撃の応酬が続く中、原油価格が新たな急騰で始まる。",
    bodyOriginal: `The week is kicking off with fresh spikes for oil prices as the U.S. and Iran continued to exchange attacks.`,
    bodyJa: `今週は米国とイランによる攻撃の応酬が続く中、原油価格が新たな急騰で始まる。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/oil-prices-surge-as-much-as-5-after-iran-declares-strait-of-hormuz-is-closed-6905599b?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T09:27:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-94895376",
    readTime: 2,
  },
  {
    id: "geopolitical-shock-exposes-sk-hynix-leve-019238e6",
    title: "Geopolitical shock exposes SK Hynix leverage after hot ADR debut",
    titleJa: "地政学的衝撃により、活発なADRデビュー後にSKハイニックスのレバレッジが暴露される",
    summaryJa: "米国での預託証券上場が大成功を収めたわずか1取引セッション後、韓国の半導体メーカーSKハイニックスの現地株はソウルの国内取引所で15％急落した。",
    bodyOriginal: `Just one trading session after a highly successful U.S. listing for its depositary receipts, local shares in South Korean chip maker SK Hynix plummeted 15% on the domestic exchange in Seoul.`,
    bodyJa: `米国での預託証券上場が大成功を収めたわずか1取引セッション後、韓国の半導体メーカーSKハイニックスの現地株はソウルの国内取引所で15％急落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/geopolitical-shock-exposes-sk-hynix-leverage-after-hot-adr-debut-340ae8d4?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T09:12:00+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.mktw.net/im-66386191",
    readTime: 2,
  },
  {
    id: "tsmc-just-reported-a-record-month-for-re-9c2d9430",
    title: "TSMC just reported a record month for revenue ahead of critical earnings report on Thursday",
    titleJa: "TSMCは木曜日の重要な収益報告に先立ち、記録的な月収を報告したばかりだ",
    summaryJa: "台湾積体電路製造公司は、6月の純収益が67%増加して132億ドルになったと発表した",
    bodyOriginal: `Taiwan Semiconductor Manufacturing Corp. said net revenue increased by 67% in June to $13.2 billion`,
    bodyJa: `台湾積体電路製造公司は、6月の純収益が67%増加して132億ドルになったと発表した`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/tsmc-just-reported-a-record-month-for-revenue-ahead-of-critical-earnings-report-on-thursday-508195fd?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T09:01:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-72859017",
    readTime: 2,
  },
  {
    id: "u-s-and-iran-exchange-strikes-as-strait-371be56d",
    title: "U.S. and Iran exchange strikes as Strait of Hormuz standoff escalates",
    titleJa: "ホルムズ海峡の対立激化で米国とイランが攻撃を交わす",
    summaryJa: "イランは週末の米軍の新たな攻撃に対抗し、湾岸諸国の米軍基地への攻撃を開始し、戦略的に重要なホルムズ海峡を巡る対立が深まった。今回のやりとりは、先月署名された暫定和平協定の将来にさらなる疑問を投げかけている。この協定は、ホルムズ海峡を再開し、60日間の交渉を経て戦争を終結させる道筋をつけることを目的としていた。",
    bodyOriginal: `Iran responded to a fresh wave of strikes from U.S. forces over the weekend by launching an attack on American military bases in several Gulf states, deepening a standoff over the strategically vital Strait of Hormuz.
The latest exchange casts further doubt over the future of the interim peace agreement signed last month, a deal that had sought to pave the way to reopen the Strait of Hormuz and end the war after 60 days of negotiations.
Iran's strikes targeted U.S. bases in Kuwait, Bahrain, Jordan, Oman and Qatar, according to the country's state media outlets, describing them as retaliatory measures to renewed U.S. bombings.
Sirens sounded for the third time in Bahrain on Monday, Reuters reported, citing the country's interior ministry. The Islamic Revolutionary Guard Corps (IRGC) said it had targeted U.S. military facilities in Bahrain and radar systems in Oman as part of its latest retaliatory attacks.
U.S. Central Command said Sunday that American forces had successfully hit dozens of targets at multiple locations to degrade Tehran's ability to continue attacking vessels traversing the Strait of Hormuz.
American forces struck Iranian military air-defense systems, coastal radar sites, missile and drone capabilities and small boats using U.S. fighter aircraft, naval vessels, one-way attack aerial drones and one-way attack sea drones for the first time, Centcom said in a post on X.
The U.S. and Iran also issued conflicting accounts over whether the Strait of Hormuz remains open to shipping.
Located in the gulf between Oman and Iran, the Strait of Hormuz is recognized as one of the world's most critical energy choke points. The narrow waterway typically handles around 20% of the world's oil traffic.
Oil prices jumped on Monday morning as the latest cycle of attacks and counterattacks renewed fears of further disruption to flows through the Strait of Hormuz.
International benchmark Brent crude futures with September delivery advanced 2.8% to trade at $78.14 per barrel, paring gains from earlier in the session. U.S. West Texas Intermediate futures with August delivery, meanwhile, gained 2.5% to $73.24.
"The era of one-sided deals is OVER. We told you: keep your word or pay the price. Reality is knocking," Iran's parliament speaker Mohammad Bagher Ghalibaf said Sunday in a social media post.
Ghalibaf's comments were posted alongside an image of Article 5 of the U.S.-Iran memorandum of understanding, which relates to the reopening of the Strait of Hormuz.
U.S. President Donald Trump on Friday said the U.S. and Iran had agreed to continue peace talks, but said the ceasefire established in last month's peace deal had been scrapped.
Iran accuses U.S. of exerting pressure on Oman
Iran's Ministry of Foreign Affairs on Monday condemned U.S. attacks over the last 24 hours, saying the bombings represent a "serious threat to international peace and security," and have "rendered futile all efforts of the past few months to reduce tension and establish peace in the West Asian region."
Iran also accused the U.S. of exerting "overt and covert pressure" on Oman, thereby preventing a result from recent talks in Muscat for both countries to establish arrangements for managing the Strait of Hormuz and traffic routes.
Read more
A White House spokesperson was not immediately available to comment when contacted by CNBC on Monday morning.
Situated on the southeastern coast of the Arabian Peninsula, opposite Iran across the strait, Oman has been in joint talks with Iran on a new maritime security order, amid reports that the two countries could push to establish transit fees.
Analysts have told CNBC that Oman's ability to impose service fees sits within tight legal limits, given that the strait is governed by the principle of transit passage, which does not allow states to charge vessels for passing through. Service fees, however, may be one way to circumvent this.
— CNBC's Emma Graham contributed to this report.`,
    bodyJa: `イランは週末の米軍の新たな攻撃に対抗し、湾岸諸国の米軍基地への攻撃を開始し、戦略的に重要なホルムズ海峡を巡る対立が深まった。
今回のやりとりは、先月署名された暫定和平協定の将来にさらなる疑問を投げかけている。この協定は、ホルムズ海峡を再開し、60日間の交渉を経て戦争を終結させる道筋をつけることを目的としていた。
イランの国営メディアによると、イランの空爆はクウェート、バーレーン、ヨルダン、オマーン、カタールの米軍基地を標的にしており、米国による新たな爆撃に対する報復措置だと説明した。
ロイター通信が同国内務省の話として報じたところによると、月曜日、バーレーンで３回目のサイレンが鳴った。イスラム革命防衛隊（IRGC）は、最新の報復攻撃の一環としてバーレーンの米軍施設とオマーンのレーダーシステムを標的にしたと発表した。
米中央軍は日曜日、米軍がホルムズ海峡を通過する船舶を攻撃し続けるイランの能力を低下させるために、複数の場所で数十の目標を攻撃することに成功したと発表した。
セントコムはＸへの投稿で、米軍が初めて米国の戦闘機、海軍艦艇、一方向攻撃用航空無人機、一方向攻撃用海上無人機を使用して、イラン軍の防空システム、沿岸レーダーサイト、ミサイルと無人機の能力、小型船舶を攻撃したと述べた。
米国とイランはまた、ホルムズ海峡の船舶航行が引き続き可能かどうかについて矛盾した説明を発表した。
オマーンとイランの間の湾に位置するホルムズ海峡は、世界で最も重要なエネルギーのチョークポイントの一つとして認識されています。この狭い水路は通常、世界の石油輸送の約 20% を処理しています。
最近の一連の攻撃と反撃により、ホルムズ海峡を通る流れがさらに混乱するのではないかとの懸念が改めて高まり、月曜朝、原油価格が急騰した。
国際ベンチマークであるブレント原油先物（9月渡し）は2.8％上昇し、1バレル当たり78.14ドルで取引され、取引序盤からの上昇に匹敵した。一方、8月渡しの米国ウェスト・テキサス・インターミディエート先物は2.5％上昇し73.24ドルとなった。
「一方的な取引の時代は終わった。我々は言った、約束を守るか、代償を払うかだ。現実はノックしている」とイラン国会議長のモハマド・バーガー・ガリバフは日曜、ソーシャルメディアへの投稿で述べた。
ガリバフ氏のコメントは、ホルムズ海峡の再開に関する米国・イラン覚書の第５条の画像とともに掲載された。
ドナルド・トランプ米大統領は金曜日、米国とイランは和平交渉を継続することで合意したが、先月の和平合意で確立された停戦は破棄されたと述べた。
イラン、米国がオマーンに圧力をかけていると非難
イラン外務省は月曜、過去24時間にわたる米国の攻撃を非難し、今回の爆撃は「国際の平和と安全に対する深刻な脅威」であり、「西アジア地域の緊張を緩和し平和を確立するための過去数カ月のあらゆる努力が無駄になった」と述べた。
イランはまた、米国がオマーンに「公然かつ秘密の圧力」をかけ、それによってホルムズ海峡と交通路の管理に関する取り決めを確立するという最近のマスカットでの両国協議の成果を妨げていると非難した。
続きを読む
ホワイトハウス報道官は月曜日午前にCNBCから連絡を受けたが、すぐにはコメントできなかった。
アラビア半島の南東海岸に位置し、海峡を挟んでイランの反対側に位置するオマーンは、両国が通過料金の制定を推進する可能性があるとの報道のなか、新たな海洋安全保障令についてイランと共同協議を行っている。
アナリストらはCNBCに対し、この海峡は通過通航の原則が適用されており、国家が船舶の通過に対して料金を請求することを認めていないことを考慮すると、オマーンがサービス料を課す能力は厳しい法的制限の範囲内にあると語った。ただし、サービス料金はこれを回避する 1 つの方法である可能性があります。
— CNBC の Emma Graham がこのレポートに寄稿しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/us-iran-war-hormuz-oil-trump.html",
    publishedAt: "2026-07-13T09:00:32+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 4,
  },
  {
    id: "tsmc-the-world-s-largest-contract-chipma-88245b7a",
    title: "TSMC, the world's largest contract chipmaker, reports 68% surge in June revenue",
    titleJa: "世界最大の受託チップメーカーであるTSMC、6月の売上高が68%増加したと報告",
    summaryJa: "台湾積体電路製造は今週後半の第2四半期決算発表に先立ち、月曜、6月の売上高が前年同期比67.9％増加したと報告した。2026年上半期のTSMCの総収益は2兆4000億新台湾ドル(749億9000万ドル)に達し、2025年の同時期と比較して35.6%増加した。TSMCは6月の収益が4,426億8000万台湾ドルと報告し、前月比6.2%増加した。",
    bodyOriginal: `Taiwan Semiconductor Manufacturing Co. reported a 67.9% year-on-year rise in its June sales on Monday, ahead of its second-quarter earnings release later this week.
For the first half of 2026, TSMC's total revenue reached 2.4 trillion new Taiwan dollars ($74.99 billion), representing a 35.6% increase compared to the same period in 2025. TSMC reported June revenue of NT$ 442.68 billion — a 6.2% increase from the previous month.
The Taiwanese chip giant's shares rose 1% Monday.
TSMC's numbers are "quite robust," said Sravan Kundojjala, an analyst at SemiAnalysis, noting that the chipmaker's second-quarter revenue exceeded its high-end guidance of $40.2 billion. The result came whereas historically June revenue has declined month-over-month over the past four years, he added.
"The demand supply situation in AI is still quite tight and TSMC is sold out on N3, which is targeted by all leading AI GPU and CPUs this year," he added.
The world's largest contract chipmaker manufactures semiconductors for a wide range of applications, spanning from smartphones to high-performance AI computing systems, with key clients including U.S. technology leaders such as AI darling Nvidia, Apple and Advanced Micro Devices.
"We estimate TSMC is on track to over $40 billion in AI chip revenue in 2026, or close to 25% of its total revenue," Kundojjala said.
TSMC plans to add two advanced chip packaging plants in the Chiayi Science Park in southern Taiwan, Reuters reported, citing remarks made by Taiwan's National Science and Technology Council Minister Wu Cheng-wen on Sunday. Wu noted that the site's first facility is already in mass production, with the second expected to begin shortly.
TSMC, which commands a 73% share of the global pure-foundry market — chips manufactured for clients — in the first quarter of 2026, according to data from Counterpoint Research, is set to report its second-quarter earnings on Thursday, July 16.`,
    bodyJa: `台湾積体電路製造は今週後半の第2四半期決算発表に先立ち、月曜、6月の売上高が前年同期比67.9％増加したと報告した。
2026年上半期のTSMCの総収益は2兆4000億新台湾ドル(749億9000万ドル)に達し、2025年の同時期と比較して35.6%増加した。TSMCは6月の収益が4,426億8000万台湾ドルと報告し、前月比6.2%増加した。
台湾の半導体大手の株価は月曜日に1％上昇した。
セミアナリシスのアナリスト、スラバン・クンドジャラ氏は、TSMCの数字は「非常に堅調だ」と述べ、同社の第2四半期の売上高が上限予想の402億ドルを上回ったと指摘した。過去 4 年間、歴史的に 6 月の収益が前月比で減少してきた中で、この結果がもたらされたと同氏は付け加えた。
「AI分野の需要供給状況は依然かなり逼迫しており、TSMCは今年、すべての主要なAI GPUとCPUのターゲットとなっているN3で完売状態だ」と同氏は付け加えた。
世界最大の受託チップメーカーは、スマートフォンから高性能 AI コンピューティング システムに至る幅広いアプリケーション向けの半導体を製造しており、主要顧客には AI の最愛の Nvidia、Apple、Advanced Micro Devices などの米国のテクノロジー リーダーが含まれます。
Kundojjala氏は、「TSMCのAIチップ収益は2026年に400億ドル以上、つまり総収益の25％近くに達すると推定している」と述べた。
台湾の国家科学技術委員会の呉承文大臣の日曜の発言を引用してロイター通信が報じたところによると、TSMCは台湾南部の嘉義サイエンスパークに2つの先端チップパッケージング工場を追加する計画だという。ウー氏は、この施設の最初の施設はすでに量産中であり、2番目の施設も間もなく開始される予定であると述べた。
Counterpoint Researchのデータによると、TSMCは、2026年第1四半期に世界のピュアファウンドリ市場（顧客向けに製造されるチップ）で73％のシェアを獲得しており、7月16日木曜日に第2四半期決算を発表する予定だ。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/tsmc-june-revenue-rises-percent-ahead-second-quarter.html",
    publishedAt: "2026-07-13T07:29:26+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "the-spacex-ipo-made-history-one-month-on-a6b166d1",
    title: "The SpaceX IPO made history. One month on has it lost momentum?",
    titleJa: "SpaceXのIPOは歴史を作りました。 1か月経って勢いがなくなったでしょうか？",
    summaryJa: "SpaceXのIPOは歴史を作りました。 1か月経って勢いがなくなったでしょうか？- 公開されました",
    bodyOriginal: `The SpaceX IPO made history. One month on has it lost momentum?
- Published
SpaceX investors have swung from celebration to apparent concern in its first month as a publicly traded company.
When shares in the firm, co-founded and led by Elon Musk, first became available for individuals to buy on the public stock market on 12 June, there was an investor frenzy.
Although the company had decided to price its shares at $135 each, the price immediately shot up to $150 that first day, climbing to $176, before closing at $160.95.
It solidified SpaceX as the largest initial public offering (IPO) of all time.
The following week, its shares went up even further, hitting an intraday high of $225, meaning it had surpassed Amazon and Microsoft in total market value.
"With Elon Musk, any company he touches gets people excited," Keith Snyder, analyst at investment research firm CFRA, said. "But this was also the first time people felt like they were able to invest in something that was being marketed as an AI play."
Willy Lee, an investor at Neosteller, which facilitates individual investors putting money into private companies, agreed that the excitement around the IPO was very much around artificial intelligence (AI).
"Everyone saw SpaceX as an AI story," he said.
SpaceX earlier this year acquired Musk's AI start-up xAI, recently renamed SpaceXAI, external and best known for the controversial chatbot Grok, and also started leasing data centre capacity to other tech companies.
But its main business is the manufacture and launch of rockets and telecommunications satellites called Starlink. When Starlink said it was cutting prices in the Memphis, Tennessee area amid local concerns over a massive data centre project, SpaceX shares fell on the day by 8%.
As the reality of how SpaceX currently makes money has seemed to come into clearer focus, the company's shares have started to sink.
Even amid a tumultuous couple of weeks for tech stocks, SpaceX has taken a particular hit.
When it was added to the Nasdaq100 index on 7 July, for instance, although the index closed down 1.7%, SpaceX fell 4.4%. An earlier addition to the FTSE Russell index had given the shares a slight boost.
SpaceX did not respond to a request for comment.
At the end of its first trading month, shares of SpaceX were selling at around $145 each, roughly 18% less than the high on its first day of trading, and 35% less than its peak so far.
'Definitely underwater'
Such a drop in price means that retail investors who purchased SpaceX stock during its first five days of trading are looking at a potential loss on their investment.
"If you bought around the first tick you're definitely underwater," Snyder said.
"It started to look a lot like a meme stock," Snyder added, pointing to the examples of GameStop and, more recently, Wendy's, external, where retail investors drive up a stock price through little more than excited online conversation.
He expects SpaceX to dip even further, to around $115 a share, based on the company's business performance. That would value the company at around $1.5 trillion.
Samuel Kerr, who heads analysis of equity capital markets for Mergermarket, noted that the swings in the share price so far will have had a different impact on different investors.
"If you're an IPO investor, you're ok," Kerr said, referring to groups of investors who were either able to buy SpaceX at the company's proposed listing price of $135, or who were insiders with pre-IPO equity in the company.
"If you bought in the first few days, you're not very happy right now," Kerr added.
Nevertheless, Musk has expressed little but enthusiasm for the business prospects of SpaceX.
After the company's public listing made him the world's first trillionaire, Musk said that SpaceX would pull in $1tn in yearly revenue by 2030.
Musk has also shown that he is ready and willing to use SpaceX shares, and their volatility, as a currency.
When the share price spiked on 16 June, SpaceX announced it was acquiring Cursor, a start-up that created an AI bot for writing computer code, in an all-stock deal valued at $60bn.
By doing so at that time, Musk essentially bought Cursor for free, given how much value SpaceX stock had gained at that exact time.
"It showed a level of market sophistication that almost no other issuer has," Kerr said of the Cursor acquisition.
SpaceX shares have drifted down since.
All eyes on earnings
Morgan Stanley, which was a lead banker on the SpaceX IPO, seems to think the dip will be an interlude.
It last week initiated coverage by its financial analysts and put a target share price, external on the company of $300, a 33% jump from its highest trading price to date.
SpaceX currently operates at a loss and last year it made $18bn in revenue, according to financial disclosures required for it to go public.
Musk's projected $1tn in revenue is roughly 55 times that.
At the moment, anticipation is building around the company's first public earnings report. SpaceX has not yet announced a date for this, but financial analysts are expecting it to happen in early August.
The company's earnings will likely coincide with the end of what's known as a "lock-up" period, when SpaceX employees who have been prohibited from selling shares in the firm that they received as part of their compensation will be able to shift them on to the open market.
More shares for sale, plus a potentially more detailed explanation of SpaceX's business and future growth could create further dramatic swings in price.
"If SpaceX can do all the things it says it will do, yes, investors are sitting on the most valuable company ever," Kerr said.
"But it's got a lot of work to do to get there."`,
    bodyJa: `SpaceXのIPOは歴史を作りました。 1か月経って勢いがなくなったでしょうか？
- 公開されました
スペースXの投資家らは、上場企業としての最初の1カ月で祝賀ムードから明らかな懸念へと揺れ動いた。
イーロン・マスク氏が共同設立し率いていた同社の株式が6月12日に初めて公開株式市場で個人が購入できるようになったとき、投資家は熱狂した。
同社は自社株の価格を1株当たり135ドルに決定していたが、その初日に株価はすぐに150ドルまで急騰し、176ドルまで上昇し、160.95ドルで取引を終えた。
これによりSpaceXは史上最大の新規株式公開（IPO）としての地位を確立した。
翌週、同社の株価はさらに上昇し、日中最高値の225ドルを記録した。これは、時価総額でアマゾンとマイクロソフトを上回ったことを意味する。
投資調査会社CFRAのアナリスト、キース・スナイダー氏は、「イーロン・マスク氏の場合、彼が関わる企業はすべて人々を興奮させる」と語る。 「しかし、人々がAI劇として売り出されたものに投資できると感じたのもこれが初めてだった。」
個人投資家が非公開企業に資金を投入できるように支援するネオステラーの投資家ウィリー・リー氏も、IPOの興奮は人工知能（AI）に大きく寄せられていたことに同意した。
「誰もがSpaceXをAIの物語として見ていた」と彼は語った。
SpaceXは今年初めにマスク氏のAI新興企業xAI（最近社名をSpaceXAIに変更した社外）を買収し、物議を醸したチャットボットGrokで最もよく知られ、データセンター容量の他のハイテク企業へのリースも開始した。
しかし、同社の主な事業はスターリンクと呼ばれるロケットと通信衛星の製造と打ち上げだ。大規模なデータセンタープロジェクトに対する地元の懸念を受けてスターリンクがテネシー州メンフィス地域で価格を引き下げると発表すると、スペースX株はその日8％下落した。
SpaceXが現在どのようにして利益を上げているのかという現実がより明確になってきたように見えるにつれ、同社の株価は下がり始めた。
ハイテク株にとってここ数週間の激動の中でも、スペースXは特に打撃を受けている。
例えば、7月7日に同社がナスダック100指数に追加されたとき、指数は1.7％下落したにもかかわらず、スペースXは4.4％下落した。 FTSEラッセル指数への以前の追加は株価をわずかに押し上げた。
スペースXはコメント要請に応じなかった。
最初の取引月の終わり時点で、スペースXの株価は1株あたり約145ドルで販売されており、取引初日の高値より約18％安、これまでのピークより35％安となっている。
「間違いなく水中にいる」
このような価格下落は、取引開始から最初の5日間にスペースX株を購入した個人投資家が投資損失の可能性を検討していることを意味する。
「最初のティック付近で買ったとしたら、間違いなく水中にいるだろう」とスナイダー氏は言う。
「ミーム株のように見え始めた」とスナイダー氏は付け加え、ゲームストップや最近では社外のウェンディーズの例を挙げ、個人投資家がオンラインでの興奮した会話以上に株価をつり上げている。
同氏は、同社の業績に基づいてスペースXの株価がさらに下がり、1株あたり115ドル程度になると予想している。そうすれば、同社の価値は約1兆5000億ドルとなる。
マージャーマーケットの株式資本市場分析責任者であるサミュエル・カー氏は、これまでの株価の変動は投資家によって異なる影響を与えるだろうと指摘した。
カー氏は、スペースX社の提示価格135ドルでスペースX社を購入できた投資家グループ、またはIPO前の同社株式を保有していたインサイダーグループを指して、「あなたがIPO投資家なら大丈夫だ」と語った。
「最初の数日で購入した人は、今はあまり満足していないでしょう」とカー氏は付け加えた。
それにもかかわらず、マスク氏はスペースXの事業見通しについて熱意以外はほとんど表明していない。
マスク氏は、同社の上場により世界初の大富豪となった後、スペースXは2030年までに年間1兆ドルの収益を得るだろうと述べた。
マスク氏はまた、スペースX株とそのボラティリティを通貨として利用する用意があり、喜んで利用する用意があることも示した。
6月16日に株価が急騰したとき、スペースXはコンピューターコードを書くためのAIボットを開発した新興企業カーソルを600億ドル相当の全株式取引で買収すると発表した。
その時点でSpaceX株がどれだけの価値を得ていたかを考えると、マスク氏はその時点でCursorを実質的に無料で購入したことになる。
カー氏はカーサー社の買収について、「他の発行体にはほぼないレベルの市場の洗練性を示した」と述べた。
それ以来、スペースX株は下落している。
収益に注目
スペースXのIPOでリードバンカーだったモルガン・スタンレーは、今回の下落はつなぎになると考えているようだ。
同社は先週、財務アナリストらによる取材を開始し、社外目標株価をこれまでの最高値から33％上昇する300ドルに設定した。
上場に必要な財務情報開示によると、スペースXは現在赤字で運営されており、昨年は180億ドルの収益をあげた。
マスク氏の予想売上高1兆ドルはその約55倍だ。
現時点では、同社の初の公開決算報告に期待が高まっている。スペースXはまだその日程を発表していないが、金融アナリストらは8月初旬に開催されると予想している。
同社の決算は、報酬の一部として受け取った同社株の売却を禁止されていたスペースX従業員が公開市場に移行できるようになる、いわゆる「ロックアップ」期間の終了と同時となる可能性が高い。
より多くの株式が売り出され、さらにスペースXの事業と将来の成長についてより詳細な説明が行われる可能性があれば、さらに劇的な価格変動が生じる可能性がある。
「スペースXが言うことをすべて実行できるなら、そう、投資家は史上最も価値のある企業に注目していることになる」とカー​​氏は語った。
「しかし、そこに到達するにはやるべきことがたくさんあります。」`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/c3wyj6e4210o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-13T07:19:57+00:00",
    category: "テクノロジー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/2ab1/live/ee081470-7c79-11f1-b976-0b9c15b0ccfc.png",
    readTime: 6,
  },
  {
    id: "us-and-iran-trade-fire-as-tensions-rise-4645adbf",
    title: "US and Iran trade fire as tensions rise over Strait of Hormuz",
    titleJa: "ホルムズ海峡で緊張高まる米国とイランの交戦",
    summaryJa: "ホルムズ海峡で緊張高まる米国とイランの交戦- 公開されました",
    bodyOriginal: `US and Iran trade fire as tensions rise over Strait of Hormuz
- Published
The US launched a new attack on Iran on Sunday evening, continuing days of strikes between the two countries. Iranian state media reported that the strikes killed one person in southwestern Iran, while four were injured.
Within hours of the fresh US strikes, Iran's Islamic Revolutionary Guard Corps (IRGC) said it had struck US military bases in Kuwait, Jordan and Bahrain.
The escalating attacks, which cast doubt over the future of the interim US-Iran agreement signed in June, come amid conflicting claims over whether the Strait of Hormuz is open.
Iran says it has closed the key waterway until further notice, while the US insists it is open.
On Sunday evening, Centcom announced another round of strikes against Iran, which it said started at 17:00 ET (22:00 BST).
Dozens of Iranian military targets, including air-defence systems, coastal radar sites, and missile and drone capabilities were struck, it said later.
US forces were "prepared to ensure that freedom of navigation remains available to commercial shipping despite Iran's continued unwarranted aggression, harassment, threats, and arbitrary declarations," Centcom said.
Minutes before the initial Centcom announcement, Iranian state TV reported explosions in Sirik, Qeshm, Bandar Abbas and Jask.
"Following the attack of the American enemy on Monday morning... one person was martyred and four others were injured," IRNA reported, citing the deputy governor for security and law enforcement in Khuzestan province, Valiollah Hayati.
Oil prices jumped on Monday in Asia. Brent crude was up by 4.3% at $79.26 (£59.22) a barrel, while US-traded oil also rose by 4.3% to $74.50.
Energy prices on global wholesale markets have swung wildly in recent months as traders reacted to developments in the conflict.
Shortly after the US and Israel attacked Iran on 28 February Tehran effectively closed the Strait of Hormuz, through which around 20% of the world's oil and liquefied natural gas (LNG) usually passes.
Despite the latest gains, prices are well below the more than $120 a barrel mark Brent reached at the end of April.
The new wave of US strikes on Sunday evening, came after US forces hit 140 Iranian military targets, Centcom said on Saturday evening.
Iran's Islamic Revolutionary Guard Corps (IRGC) responded to those strikes with wide-ranging attacks on US bases and allies across the region, marking an escalation in the scale of hostilities.
Among those targeted by Iran were Qatar, a mediator in ceasefire talks which had not been attacked since April, and the UAE, which had not been attacked since May. The BBC has approached US Central Command (Centcom) for comment on an attack in Jordan.
The renewed fire has put in jeopardy an interim ceasefire agreement signed last month, which aimed to reopen the strait and eventually bring a permanent end to the conflict.
Earlier this week, US President Donald Trump declared the Iranian attacks meant the ceasefire was over, while Iran's Foreign Minister Abbas Araghchi accused the US of violating the deal.
However, Trump said talks would still continue and mediators were trying to revive the process.
On Sunday, US Central Command insisted the Strait was open, warning the US military was in position to make sure it stayed free-flowing.
Additional reporting by Goncheh Habibiazad.
Related topics
- Published11 hours ago
- Published18 June`,
    bodyJa: `ホルムズ海峡で緊張高まる米国とイランの交戦
- 公開されました
米国は日曜夜にイランへの新たな攻撃を開始し、両国間の攻撃は数日間続いた。イラン国営メディアは、この空爆によりイラン南西部で１人が死亡、４人が負傷したと報じた。
米国の新たな攻撃から数時間以内に、イランイスラム革命防衛隊（IRGC）はクウェート、ヨルダン、バーレーンの米軍基地を攻撃したと発表した。
6月に署名された米国とイランの暫定合意の将来に疑問を投げかける攻撃の激化は、ホルムズ海峡が開いているかどうかをめぐる主張の対立の中で起こっている。
イランは追って通知があるまで主要水路を閉鎖していると主張しているが、米国は開いていると主張している。
日曜日の夕方、セントコムはイランに対する追加攻撃を発表し、東部時間17時（BST22時）に開始したと発表した。
その後、防空システム、沿岸レーダーサイト、ミサイルや無人機の能力を含む数十のイランの軍事目標が攻撃されたと発表した。
セントコムは、米軍は「イランの不当な侵略、嫌がらせ、脅迫、恣意的な宣言が続いているにもかかわらず、商船の航行の自由を確保する準備ができていた」と述べた。
最初のセントコムの発表の数分前に、イラン国営テレビはシリク、ケシュム、バンダル・アッバス、ジャスクで爆発があったと報じた。
ＩＲＮＡはフゼスターン州の治安・法執行担当副知事ヴァリオラ・ハヤティ氏の話として、「月曜朝の米敵の攻撃を受けて…１人が殉教し、他の４人が負傷した」と報じた。
月曜日、アジアでは原油価格が急騰した。ブレント原油は4.3％上昇して1バレルあたり79.26ドル（59.22ポンド）、米国で取引される原油も4.3％上昇して74.50ドルとなった。
トレーダーらが紛争の展開に反応したため、世界の卸売市場のエネルギー価格はここ数カ月で大きく変動した。
2月28日に米国とイスラエルがイランを攻撃した直後、イランは通常、世界の石油と液化天然ガス（LNG）の約20％が通過するホルムズ海峡を事実上封鎖した。
最近の上昇にもかかわらず、価格はブレントが4月末に達した1バレル当たり120ドルを超える水準を大きく下回っている。
日曜夕方の米国の新たな攻撃の波は、米軍がイランの軍事目標140カ所を攻撃した後に起こったとセントコムは土曜夜に発表した。
イランのイスラム革命防衛隊（IRGC）はこれらの攻撃に応じて、地域全体の米軍基地と同盟国に対する広範な攻撃を行い、敵対行為の規模の拡大を示した。
イランの標的となった国の中には、停戦交渉の仲介国で4月以来攻撃されていないカタールや、5月以来攻撃されていないUAEも含まれていた。 BBCはヨルダンでの攻撃に関するコメントを求めて米中央軍（セントコム）に問い合わせた。
新たな火災により、海峡の再開と最終的に紛争の恒久的な終結を目指す先月署名された暫定停戦合意が危うくなった。
今週初め、ドナルド・トランプ米大統領はイランの攻撃は停戦の終了を意味すると宣言し、イランのアッバス・アラグチ外相は米国が協定に違反していると非難した。
しかし、トランプ大統領は、交渉はまだ継続しており、調停者はプロセスを復活させようとしていると述べた。
日曜日、米中央軍は海峡は開いていると主張し、米軍は海峡の自由な流れを確保する立場にあると警告した。
Goncheh Habibiazad による追加レポート。
関連トピック
- 11 時間前に公開
- 6 月 18 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cevlr112pmgo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-13T05:00:46+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c03f/live/5cc84d20-7e6a-11f1-bee8-53ce494e1abc.jpg",
    readTime: 4,
  },
  {
    id: "sk-hynix-shares-slide-12-in-seoul-after-b599c41c",
    title: "SK Hynix shares slide 12% in Seoul after stellar Nasdaq debut",
    titleJa: "SKハイニックス株、ナスダック市場での好調なデビュー後、ソウル市場で12％下落",
    summaryJa: "SKハイニックス株は、投資家が利益を確保し、人工知能メモリチップに対する需要の急増が株価の急騰を正当化するかどうかを検討する中、金曜の同社のナスダック市場での好調なデビュー後、月曜ソウル市場で12％以上下落した。韓国のメモリチップメーカーである同社は、AI関連の半導体株に対する米国の投資家の強い意欲を反映し、金曜日のウォール街デビューで13%急騰した。",
    bodyOriginal: `SK Hynix shares tumbled more than 12% in Seoul on Monday after the chipmaker's strong Nasdaq debut Friday, as investors locked in profits and weighed whether surging demand for artificial intelligence memory chips justified the stock's sharp gains.
The South Korean memory-chip maker had jumped 13% in its Wall Street debut on Friday, reflecting strong appetite from U.S. investors for AI-linked semiconductor stocks.
The decline on Monday reflects a mix of profit-taking and uncertainty over how the U.S.-listed shares should be valued relative to the Korean stock, with analysts saying the ADR debut has effectively created a new benchmark for investors to assess the company's valuation.
"Everybody's really confused about what's going to happen to the memory demand and where the fair price is," Daniel Yoo, global strategist at Yuanta Securities, said on "Squawk Box Asia." "It's all about how much demand is there versus how much supply is going to come in ... [and] what kind of multiple you will be getting."
Taiwan Semiconductor Manufacturing Co.'s U.S.-listed ADRs trade at a roughly 13% to 14% premium to its domestic shares, Yoo pointed out, adding that SK Hynix's sharp move has created a discount rate of more than 20% between its U.S. and Korean listings.
Yoo said the sell-off was also driven by the mechanics of the offering, calling it "additional share issuance" that increased the supply of stock available to investors. "The market is taking this as a correctional period for SK Hynix domestically."
The pullback was likely to prove temporary as structural AI demand continues to outpace supply, he said, adding that shares will likely move "in the right direction" over the next six to 12 months despite near-term volatility.
Phillip Wool, chief research officer at Rayliant Global Advisors, also downplayed the recent weakness in Asian AI hardware names, describing it as a portfolio rebalancing exercise rather than a deterioration in the industry's outlook.
"I think it's mostly risk management," Wool said, noting that many investors had accumulated outsized positions in South Korean and Taiwanese AI chipmakers after their strong gains. "Prudent risk management suggests you have to scale those back."
He added that the selling "doesn't really speak to any sort of reduction in the excitement about AI hardware." Wool said the AI investment was broadening beyond semiconductors, but that should continue to benefit memory suppliers such as SK Hynix.`,
    bodyJa: `SKハイニックス株は、投資家が利益を確保し、人工知能メモリチップに対する需要の急増が株価の急騰を正当化するかどうかを検討する中、金曜の同社のナスダック市場での好調なデビュー後、月曜ソウル市場で12％以上下落した。
韓国のメモリチップメーカーである同社は、AI関連の半導体株に対する米国の投資家の強い意欲を反映し、金曜日のウォール街デビューで13%急騰した。
月曜日の下落は利益確定売りと、韓国株と比べて米国上場株をどのように評価すべきかという不確実性が重なったことを反映しており、アナリストらは、ADRデビューが事実上、投資家にとって同社の評価を評価するための新たなベンチマークとなったと述べている。
ユアンタ証券のグローバルストラテジスト、ダニエル・ユー氏は「メモリ需要がどうなるのか、適正価格はどこなのかについて、誰もが本当に混乱している」と「Squawk Box Asia」で語った。 「重要なのは、どれだけの需要があるか、それに対してどのくらいの供給が入るか、そしてどのような倍率になるかです。」
台湾積体電路製造の米国上場ADRは国内株に対して約13～14%のプレミアムで取引されているとユ氏は指摘し、SKハイニックスの急激な動きにより米国と韓国の上場の間に20%以上の割引率が生じたと付け加えた。
ユ氏は、売り出しの仕組みも売り出しの原因となったと述べ、投資家が利用できる株式の供給を増やす「追加株式発行」と呼んだ。 「市場はこれを国内のSKハイニックスの調整期間と受け止めている。」
同氏は、AIの構造的な需要が供給を上回り続けているため、反落は一時的なものに終わる可能性が高いと述べ、短期的なボラティリティにもかかわらず、株価は今後6～12カ月で「正しい方向に」動く可能性が高いと付け加えた。
レイリアント・グローバル・アドバイザーズの首席研究責任者フィリップ・ウール氏も、最近のアジアのAIハードウェア銘柄の低迷を軽視し、これは業界の見通しの悪化ではなく、ポートフォリオのバランス調整の一環であると説明した。
ウール氏は「主にリスク管理だと思う」と述べ、多くの投資家が韓国や台湾のAIチップメーカーの大幅な上昇を受けて巨額のポジションを蓄積していると指摘した。 「慎重なリスク管理は、それらを縮小する必要があることを示唆しています。」
同氏は、この売却は「AIハードウェアに対する興奮が冷めるわけではない」と付け加えた。ウール氏は、AIへの投資は半導体を超えて拡大しているが、SKハイニックスなどのメモリサプライヤーには引き続き恩恵をもたらすだろうと述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/13/sk-hynix-shares-fall-after-stellar-nasdaq-debut.html",
    publishedAt: "2026-07-13T03:33:59+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "oil-prices-rise-stock-futures-dip-after-e1c578a9",
    title: "Oil prices rise, stock futures dip after latest flare-up of strikes between U.S. and Iran",
    titleJa: "米国とイランの間の最近のストライキ激化を受けて、原油価格は上昇、株価先物は下落",
    summaryJa: "米国とイランが週末にホルムズ海峡周辺での報復攻撃を続けたことを受け、日曜日には原油価格が上昇し、米国の株価指数先物が下落した。",
    bodyOriginal: `Oil prices rose and U.S. stock-index futures slipped on Sunday, after the U.S. and Iran continued their tit-for-tat attacks around the Strait of Hormuz over the weekend.`,
    bodyJa: `米国とイランが週末にホルムズ海峡周辺での報復攻撃を続けたことを受け、日曜日には原油価格が上昇し、米国の株価指数先物が下落した。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/oil-prices-rise-stock-futures-dip-after-latest-flare-up-of-strikes-between-u-s-and-iran-fef7f856?mod=mw_rss_topstories",
    publishedAt: "2026-07-13T03:03:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-00964245",
    readTime: 2,
  },
  {
    id: "mcconnell-provides-health-update-after-l-0394a365",
    title: "McConnell provides health update after long unexplained absence; says he suffered fall, pneumonia",
    titleJa: "マコーネル氏は、原因不明の長い不在の後、健康状態の最新情報を提供します。秋と肺炎を患ったと言う",
    summaryJa: "ケンタッキー州、共和党のミッチ・マコネル上院議員は日曜日、転倒により意識を失い病院に運ばれ、数週間の欠席に至ったと述べた。6月14日に入院して以来上院を欠席している84歳のマコーネル氏も、自身の写真と自身の状態を説明する声明を提供した。ここ数週間、特に自宅で心停止が発生し救急隊が対応したと報じられて以来、彼の不在と入院についての憶測が激しくなっている。",
    bodyOriginal: `Sen. Mitch McConnell, R-Ky., on Sunday said he suffered a fall that rendered him unconscious and landed him in the hospital, leading to a multi-week absence.
McConnell, 84 — who has been absent from the Senate since he was hospitalized on June 14 — also provided a photo of himself with a statement explaining his condition. His absence and hospitalization have been speculated on intensely in recent weeks, especially after it was reported that emergency services responded to a case of cardiac arrest at his home.
McConnell, who is a polio survivor, sought to put the speculation over his health to rest.
"[L]ast month, I took a fall which landed me in the hospital," McConnell said in the statement to his constituents. "My doctors have confirmed that I didn't break any bones or suffer a concussion. I didn't have a heart attack or a stroke. I don't have any tumors or hemorrhages. But I was briefly unconscious and was taken to the hospital."
The former Senate GOP leader said he also "had to deal with a mild case of pneumonia" while in the hospital. In a photo released with his statement, McConnell is holding a copy of the Sports section of the July 12 edition of The Washington Post.
McConnell is the longest-serving party leader in Senate history. He stepped down from the leader post at the beginning of this Congress, handing the reins to Sen. John Thune, R-S.D.
Last week, Kentucky Gov. Andy Beshear requested that McConnell provide an update on his health and fitness to serve after the senator's office provided sparse updates on his condition throughout his hospitalization, leaving questions about his condition swirling.
McConnell said in the statement that he remains fit to serve, but will not return to the Senate yet.
"As much as it frustrates me, this process takes time. And on the advice of my doctors, I won't be able to return to the Senate floor to vote quite yet," he said. "But rest assured that, in the meantime, I'm not taking a break from the Senate business that matters to you. I've been working closely with my legislative staff on current issues, and with my Kentucky team who help me provide timely constituent services across our Commonwealth."
McConnell will retire at the end of his term next year.`,
    bodyJa: `ケンタッキー州、共和党のミッチ・マコネル上院議員は日曜日、転倒により意識を失い病院に運ばれ、数週間の欠席に至ったと述べた。
6月14日に入院して以来上院を欠席している84歳のマコーネル氏も、自身の写真と自身の状態を説明する声明を提供した。ここ数週間、特に自宅で心停止が発生し救急隊が対応したと報じられて以来、彼の不在と入院についての憶測が激しくなっている。
ポリオ生存者であるマコーネル氏は、自分の健康に対する憶測を鎮めようと努めた。
マコネル氏は有権者に向けた声明で「先月、転倒して病院に入院した」と述べた。 「医師たちは、私が骨折や脳震盪を起こしていないことを確認しました。心臓発作や脳卒中も起こしていません。腫瘍や出血もありません。しかし、一時的に意識を失い、病院に運ばれました。」
元上院共和党指導者は、入院中に「軽度の肺炎に対処しなければならなかった」とも語った。声明とともに公開された写真の中で、マコネル氏はワシントン・ポスト紙7月12日号のスポーツ欄のコピーを手に持っている。
マコーネル氏は上院史上最も長く党首を務めた人物である。彼は今議会の初めに党首のポストを降り、共和党のジョン・チューン上院議員に手綱を引き渡した。
先週、ケンタッキー州のアンディ・ベシェア知事は、上院議員事務所が入院期間中のマコネル氏の病状に関する最新情報をほとんど提供せず、マコネル氏の病状についての疑問が渦巻いていることを受けて、マコネル氏に対し、自身の健康状態と就任に向けた適性に関する最新情報を提供するよう要請した。
マコーネル氏は声明の中で、自身は引き続き職務に適任だが、まだ上院に戻るつもりはないと述べた。
「私はイライラしているのですが、このプロセスには時間がかかります。そして医師のアドバイスにより、私はまだ上院議場に戻って投票することはできないでしょう」と彼は語った。 「しかし、その間、私はあなたたちにとって重要な上院の仕事を休むわけではないのでご安心ください。私は現在の問題について立法スタッフと緊密に協力しており、連邦全体でタイムリーな有権者サービスを提供するのを手伝ってくれるケンタッキー州のチームと緊密に協力しています。」
マコーネル氏は来年の任期満了で退任する。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/mcconnell-provides-health-update-after-long-unexplained-absence.html",
    publishedAt: "2026-07-13T01:25:20+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 2,
  },
  {
    id: "10-years-of-pok-mon-go-and-the-millions-53742d0f",
    title: "10 years of Pokémon Go and the millions still trying to catch 'em all",
    titleJa: "Pokémon GO が誕生して 10 年、何百万人もの人々が今もポケモン Go をすべて捕まえようとしています",
    summaryJa: "Pokémon GO が誕生して 10 年、何百万人もの人々が今もポケモン Go をすべて捕まえようとしています- 公開されました",
    bodyOriginal: `10 years of Pokémon Go and the millions still trying to catch 'em all
- Published
Pokémon fans have spent the past three decades trying to catch 'em all - and since the beginning this hunt has often taken place outside the home.
The popular series started out on Nintendo's portable Game Boy console in 1996, and has found modern success on people's phones.
The mobile app Pokémon Go, which is now celebrating its 10th anniversary, uses GPS and augmented reality to let players find and catch virtual monsters in real-world locations.
It has been downloaded more than a billion times across iOS and Android devices, with millions still logging on each day.
And Michael Steranka, vice president of product at the game's publisher Scopely, says the Pokémon Go experience has always been about bringing people together.
"Pokémon Go will always start with community - we think we're only scratching the surface here," he said.
"We often receive wedding invites from players who met through Pokémon Go... because it's been such an integral part of their relationship."
It may seem a surprising sentiment to have for a game and its studio.
But Pokémon Go's connection with its players appears to have prevailed, as hundreds of gamers gathered in New York's Times Square on Thursday to battle a giant Mewtwo - a reference to the game's original trailer published over a decade ago, external.
When it was released in 2016, Pokémon Go quickly became one of the biggest mobile game launches in history.
The technology overlays digital creatures onto a live view of the real world through a smartphone's camera, making it appear as though they're standing in front of the player.
It sparked a craze where people flocked to places like parks, waterfronts and shopping malls in the hope of catching Pokémon.
"By allowing you to take your mobile phone out into the world to discover virtual creatures, Pokémon Go helped realise the millennial dream of becoming a Pokémon Trainer," said Matthew Reynolds, editor of Pokémon news website One More Catch, external.
The game's popularity has endured. It has hosted major live events in more than 60 countries, averaging more than 400,000 attendees a year since the first Go Fest in 2017.
'Like a music festival'
Scopely estimates players have explored over 100 billion kilometres while playing Pokémon Go - roughly 334 round trips between the Earth and the Sun.
UK content creator j0beats runs one of Twitch's biggest channels dedicated to the game and regularly travels to events like the one in New York to meet fellow players.
"People always think it's crazy that you travel all over just to catch some pixels," she laughs.
"But it's not just about that. When you go to these big events, you're there for the people and for the energy of it.
"It's like a music festival - you could just stay at home and just listen to the music, or you could go out there and you could listen live and appreciate it with other people. It's the same sort of concept."
But the streamer says her fondest memory of the game is a little closer to home.
In 2025, Pokémon Go's Wild Area - one of its events - came to South Yorkshire.
"It was the only European event and it was hosted in Doncaster, which is sort of just around the corner from me," she said.
"So it was really exciting to collaborate with the community ambassadors there and help them host the event."
For some players, the game has also had an unexpected impact on their mental health.
Austin lives in Maine in the US and has been playing since 2017.
He told me before playing Pokémon Go it was "nearly impossible" to motivate himself to do anything, as he was feeling very anxious and depressed about life.
"When I went to my first raid meetup it was like a warm blanket," he said.
"As I held my phone and walked to the group of strangers in the park, I saw them look at me, and for the first time I wasn't nervous meeting this new group of people, I was actually excited and happy."
"From that day on that little voice telling me to stay in bed was put on mute."
Over the years, the game has sometimes been a victim of its own hype and global appeal.
Police and safety groups once warned players not to become so engrossed in catching the next Psyduck that they got lost or put themselves in danger.
The game's immense popularity sometimes also meant "servers buckled under the strain", said Reynolds, meaning connectivity problems were "rife for some time".
And while the pandemic was seen as a boon for many in the video game industry, Steranka says the initial strict lockdowns "impacted Pokémon Go probably more than any other game out there".
The game later bounced back as restrictions eased and people once again looked for reasons to get outside.
Then in 2025, some fans questioned how the game's future might change when Scopely - which is itself owned by Saudi Arabia's Public Investment Fund, bought developer Niantic for $3.5bn (then £2.7bn).
"My hope is that we prove to players over time that this is definitively a good thing for the game and the community," Steranka says.
Looking ahead, Steranka says the focus for the game remains on community, memories and creating experiences families can share.
"No matter where I was and what phase of my life, Pokémon Go has been there for me," he says.
"It meets people where they are, at whatever phase of life they're in."
Sign up for our Tech Decoded newsletter to follow the world's top tech stories and trends. Outside the UK? Sign up here.
Related topics
- Published17 April
- Published11 May
- Published27 February`,
    bodyJa: `Pokémon GO が誕生して 10 年、何百万人もの人々が今もポケモン Go をすべて捕まえようとしています
- 公開されました
ポケモンファンは過去 30 年間、すべてのポケモンを捕まえようと努力してきましたが、当初からこの狩りは家の外で行われることが多かったです。
この人気シリーズは 1996 年に任天堂のポータブル ゲームボーイ コンソールで始まり、人々の携帯電話でも現代的な成功を収めました。
現在 10 周年を迎えているモバイル アプリ Pokémon Go は、GPS と拡張現実を使用して、プレイヤーが現実世界の場所で仮想モンスターを見つけて捕まえることができます。
iOS および Android デバイス全体で 10 億回以上ダウンロードされており、今でも毎日数百万人がログインしています。
そして、ゲームの発売元であるスコープリー社の製品担当副社長であるマイケル・ステランカ氏は、ポケモンGOの体験は常に人々を結び付けるものであったと語る。
「Pokémon Goは常にコミュニティから始まります。私たちはここで表面をなぞっただけだと考えています」と彼は語った。
「Pokémon GO を通じて知り合ったプレイヤーから結婚式の招待状をよく受け取ります。ポケモン GO は彼らの関係にとって非常に重要な部分だからです。」
ゲームとそのスタジオに対してこのような感情を持つのは驚くべきことのように思えるかもしれません。
しかし、Pokémon Goとプレイヤーとのつながりは広まったようで、木曜日には数百人のゲーマーが巨大なミュウツーと戦うためにニューヨークのタイムズスクエアに集まった（これは10年以上前に外部で公開されたゲームのオリジナルトレーラーへの言及である）。
Pokémon Go は 2016 年にリリースされると、すぐに史上最大のモバイル ゲームのローンチの 1 つになりました。
この技術は、スマートフォンのカメラを介して現実世界のライブビューにデジタル生物を重ね合わせ、あたかもプレイヤーの前に立っているように見せます。
それはポケモンを捕まえることを期待して人々が公園、水辺、ショッピングモールなどの場所に群がる熱狂を引き起こした。
「携帯電話を世界に持ち出して仮想の生き物を発見できるようにしたことで、Pokémon GO はポケモントレーナーになるという千年の夢の実現に役立ちました」と、ポケモン ニュース ウェブサイト One More Catch の編集者であるマシュー レイノルズ氏 (社外) は述べています。
ゲームの人気は根強く残っています。 2017 年の最初の Go Fest 以来、60 か国以上で大規模なライブ イベントを主催し、年間平均 40 万人以上の参加者を集めています。
「音楽祭みたい」
Scopely は、プレイヤーが Pokémon Go をプレイ中に探検した距離は 1,000 億キロメートル以上、つまり地球と太陽をおよそ 334 往復したと推定しています。
英国のコンテンツ クリエイターである j0beats は、ゲーム専用の Twitch 最大のチャンネルの 1 つを運営しており、ニューヨークで開催されるようなイベントに定期的に出張して仲間のプレイヤーと交流しています。
「ピクセルをキャッチするためだけにあちこちを旅するなんて、みんな頭がおかしいといつも思われます」と彼女は笑います。
「しかし、それだけではありません。これらの大きなイベントに行くとき、あなたは人々とそのエネルギーのためにそこにいるのです。
「それは音楽フェスティバルのようなものです。家にいてただ音楽を聴くこともできますし、外に出て生で聴いて他の人と一緒に鑑賞することもできます。それと同じようなコンセプトですね。」
しかし、ストリーマーは、ゲームに関する彼女の最も楽しい思い出は、もう少し身近なところにあると語ります。
2025 年、Pokémon GO のイベントの 1 つであるワイルド エリアがサウス ヨークシャーにやって来ました。
「これはヨーロッパで唯一のイベントで、ドンカスターで開催されましたが、それは私からすぐ近くにあります」と彼女は言いました。
「ですから、現地のコミュニティアンバサダーと協力してイベントの主催を手伝うことができて、本当にエキサイティングでした。」
一部のプレイヤーにとって、このゲームは精神的健康に予期せぬ影響を与えました。
オースティンは米国メイン州に住んでおり、2017年からプレーしている。
彼は、Pokémon GO をプレイする前、人生に対して非常に不安と憂鬱を感じていたため、何かをする動機を自分に与えることは「ほぼ不可能」だったと私に語った。
「初めてレイド交流会に行ったときは、まるで暖かい毛布のようでした」と彼は語った。
「携帯電話を持って公園にいる見知らぬ人たちのグループに歩いていくと、彼らが私を見ているのが見えました。初めてこの新しい人々のグループに会うことに緊張しなくなり、実際に興奮していて幸せでした。」
「その日から、ベッドにいてくださいという小さな声は聞こえなくなりました。」
長年にわたり、このゲームは時として、その誇大広告や世界的な魅力の犠牲者となってきました。
警察や安全団体はかつて、次のサイダックを捕まえるのに夢中になりすぎて道に迷ったり、危険にさらされないようプレイヤーに警告したことがある。
レイノルズ氏によると、このゲームの絶大な人気により、「サーバーが過負荷で座屈」することもあり、接続の問題が「しばらくの間蔓延」していたことを意味するという。
そして、パンデミックはビデオゲーム業界の多くの人々にとって恩恵と見なされていたが、ステランカ氏は、最初の厳格なロックダウンが「おそらく他のどのゲームよりもポケモンGOに影響を与えた」と述べた。
その後、制限が緩和され、人々が再び外出する理由を探すにつれて、ゲームは回復しました。
そして2025年、サウジアラビアの公共投資基金が所有するスコープリーが開発会社ナイアンティックを35億ドル（当時27億ポンド）で買収したことで、一部のファンはゲームの将来がどう変わるのか疑問を抱いた。
「私の願いは、これがゲームとコミュニティにとって決定的に良いことであることを、時間をかけてプレイヤーに証明することです」とステランカ氏は言います。
今後を見据えて、ステランカ氏は、ゲームの焦点は引き続きコミュニティ、思い出、家族が共有できる体験の創造にあると述べています。
「私がどこにいても、人生のどの段階にいても、Pokémon GO は私にとって常にそこにありました」と彼は言います。
「人生のどの段階にいても、その人がいる場所で人々と出会います。」
Tech Decoded ニュースレターに登録して、世界のトップのテクノロジー ストーリーやトレンドをフォローしてください。英国外ですか？ここからサインアップしてください。
関連トピック
- 4 月 17 日公開
- 5 月 11 日公開
- 2 月 27 日発行`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cevlwk4nrm7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-13T00:07:00+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c312/live/88ec5440-7be6-11f1-9010-bd4e2d0a26e0.png",
    readTime: 7,
  },
  {
    id: "new-era-for-gibraltar-with-removal-of-11-effe7d8b",
    title: "New era for Gibraltar with removal of 118-year-old border controls with Spain",
    titleJa: "118年間続いたスペインとの国境管理が撤廃され、ジブラルタルに新時代が到来",
    summaryJa: "118年間続いたスペインとの国境管理が撤廃され、ジブラルタルに新時代が到来- 公開されました",
    bodyOriginal: `New era for Gibraltar with removal of 118-year-old border controls with Spain
- Published
Every weekday morning, Shilpi Chotrani rides her bicycle from her home in the Spanish town of La Línea de la Concepción to Gibraltar. It's a short journey but it means crossing an international border.
A British Overseas Territory of around 40,000 inhabitants, Gibraltar has a border control for those entering and leaving.
That means that during the morning and afternoon rush hours, when around 15,000 Spaniards who work in the territory cross the frontier, there can be long, time-consuming queues.
"The fact that there is a border between us is ridiculous," says Chotrani, who has a job in human resources in a Gibraltarian shipping and tourism company. "I don't think a fence should separate people from one place and another."
Behind her, the 1,400-foot-tall Rock of Gibraltar is shrouded in early-morning cloud. Perched at the southern tip of mainland western Europe, it is just nine miles from Morocco, at a point where the Atlantic Ocean and the Mediterranean Sea meet.
It is a place that has witnessed military battles, sovereignty disputes and a 13-year blockade imposed by Spain.
But from 15 July it is scheduled to see a new development - the removal of the border, allowing freedom of movement between Spain and Gibraltar.
This is part of a carefully negotiated agreement between the European Union and the UK following the latter's exit from the bloc. Sharing a land border with the EU meant that Gibraltar posed a unique challenge in the post-Brexit era.
"This is going to be a great step forward, both for the Spanish side and the British side," says Chotrani. "All of those of us who live [in La Línea de la Concepción] think this is a great idea. This should have been done a long time ago."
Gibraltar has one of the highest per capita incomes in the world. But La Línea de la Concepción and the nearby area is one of the most deprived parts of Spain.
Unemployment, which is high across the southern Andalusia region, is close to 30% here. The removal of the border is therefore expected to have major economic benefits, facilitating the flow of people back and forth, and possibly going some way to redress the imbalance between the two territories.
"This is something historic, we've had a border fence since 1908," says Juan Franco, the mayor of La Línea de la Concepción, who is keen to underline the local economic dependence on the British territory.
"You have to realise that for an average company in this town a third of its income is from clients in Gibraltar," he says.
After a decade of uncertainty regarding Gibraltar's future relationship with Spain following the UK's vote to leave the EU, Franco says he believes "this solution to Brexit will end up having a positive effect for us".
Spain to check Gibraltar arrivals under post-Brexit deal
- Published26 February
No threat to British sovereignty over Gibraltar deal, says Lammy
- Published12 June 2025
Gibraltarians were staunchly opposed to Brexit, with 96% of them voting to remain in the EU in the 2016 referendum on the issue. That staunchly pro-EU stance was driven partly by concerns that exiting the bloc would encourage Spanish sovereignty claims on the Rock.
But another major factor was Gibraltar's existing close trade relationship with the EU – particularly in areas such as online gaming, shipping and financial services – and fears about the logistical challenges Brexit would pose.
After years of negotiation involving Spain, the EU and the UK, the solution has been to align Gibraltar with the European customs union and the Schengen European free travel zone.
Travellers arriving from countries outside Schengen, such as the UK, will have to show their passports to Gibraltarian and Spanish officials at the territory's airport and port.
The Chief Minister of Gibraltar, Fabian Picardo, says the new arrangements, which are due to be provisionally implemented with their approval by the UK and European Parliaments still pending, represent "a huge change" for the territory.
"One of the key things which has defined the past eight generations of Gibraltarians is the restrictions at the frontier," he told the BBC in the Gibraltarian government's headquarters.
Picardo describes the agreement as introducing "complete and utter fluidity of people and goods" between Gibraltar, on the one hand, and Spain and the EU on the other.
The most obvious economic benefit for Gibraltar, Picardo says, will be an increase in arrivals.
"Business will now be able, in Gibraltar, to see a footfall increase which is not going to be restrained by a potential queue on the way in or frontier queue on the way out."
With Spain contesting the UK's sovereignty of Gibraltar, it is an issue that occasionally flares up in the political arena. In the most notorious episode of bilateral tensions in recent times, Spain's dictator, Francisco Franco, introduced a blockade of the Rock in 1969, which was only lifted in 1982, well after his death.
The chief minister casts the new arrangement as the opposite of the blockade - a logical, mutually beneficial opening up of a border.
"This will be huge for human relations, it will be huge for business, it will be huge for frontier workers, it will be a new dawn" for Gibraltar's relationship with Spain and the EU, says Picardo.
Spain's foreign minister, José Manuel Albares, has cast it in a similar light, speaking of "a new era" for the Rock.
However, the deal also means that goods sold in Gibraltar must comply with EU regulations, something that had not been the case until now.
In addition, the lack of value added tax (VAT) in Gibraltar has meant that a new transaction tax is being introduced, replacing import duty. Charged on all goods sold in Gibraltar, it will start at 15% this year, eventually rising to 17%. There will also be higher rates of excise tax on certain goods.
John Isola, managing director of Anglo Hispano Company, which runs several restaurants and bars on the Rock, says there is a sense of relief among the Gibraltarian business community that the drawn-out Brexit issue has, finally, been resolved – and without a hard border.
He sees the new arrangement as "a good compromise" that will encourage more visitors to Gibraltar and therefore more business.
However, Isola also admits to some nervousness due to the new regulations and tax regime, which he expects will have an impact on competitiveness. "For anybody importing goods the scenario changes completely in terms of the paperwork that one is going to have to present to get the goods in," he says.
He also believes that new requirements to adhere to EU standards "is a challenge for anybody who is importing goods from the UK or anywhere else outside the EU".
Gibraltarians and residents of La Línea de la Concepción have had plenty of time to get used to the idea of the new arrangement. In recent weeks, machinery has been tearing down the border fence each night, in preparation for 15 July.
Having witnessed so much drama in the past, this territory is about to discover the significance of the latest twist in its history.
Related topics
Read more global business stories
- Published4 days ago
- Published7 days ago`,
    bodyJa: `118年間続いたスペインとの国境管理が撤廃され、ジブラルタルに新時代が到来
- 公開されました
シルピ・チョトラーニさんは平日の毎朝、スペインの町ラ・リネア・デ・ラ・コンセプシオンの自宅からジブラルタルまで自転車に乗ります。短い旅ではありますが、国境を越えることになります。
人口約 40,000 人の英国海外領土であるジブラルタルには、出入国者に対する国境管理が行われています。
つまり、領土内で働く約1万5000人のスペイン人が国境を越える朝と午後のラッシュアワーには、時間のかかる長い行列ができる可能性がある。
「私たちの間に国境があるという事実はばかばかしい」と、ジブラルタルの海運・観光会社で人事の仕事をしているチョトラーニ氏は言う。 「フェンスで人々をある場所と別の場所から隔てるべきではないと思います。」
彼女の後ろには、高さ400フィートのジブラルタルの岩が早朝の雲に覆われています。西ヨーロッパ本土の南端に位置し、モロッコからわずか 9 マイル、大西洋と地中海が交わる地点にあります。
ここは軍事戦闘、主権紛争、そしてスペインによる13年間にわたる封鎖を目撃してきた場所だ。
しかし、7月15日からは国境が撤廃され、スペインとジブラルタル間の移動の自由が認められるという新たな展開が予定されている。
これは、欧州連合と英国のEU離脱後の英国との間で慎重に交渉された協定の一部である。 EUと陸路で国境を共有していることは、ジブラルタルがEU離脱後の時代に独特の課題を突きつけることを意味した。
「これはスペイン側にとってもイギリス側にとっても大きな前進となるだろう」とチョトラーニ氏は言う。 「[ラ・リネア・デ・ラ・コンセプシオンに]住んでいる私たち全員が、これは素晴らしいアイデアだと考えています。これはずっと前に行われるべきでした。」
ジブラルタルは一人当たりの所得が世界で最も高い国の一つです。しかし、ラ・リネア・デ・ラ・コンセプシオンとその近隣地域は、スペインで最も恵まれない地域の一つです。
アンダルシア南部地域全体で失業率は高く、ここでも失業率は30％近くに達している。したがって、国境の撤廃は大きな経済的利益をもたらし、人々の行き来を促進し、おそらく両国間の不均衡を是正する何らかの手段になると期待されている。
ラ・リネア・デ・ラ・コンセプシオン市長のフアン・フランコ氏は、「これは歴史的なことだ。1908年から国境フェンスが設置されてきた」と語り、英国領土への地域経済の依存度を強調したいとしている。
「この町の平均的な企業では、収入の 3 分の 1 がジブラルタルの顧客からのものであることを認識する必要があります」と彼は言います。
英国のEU離脱投票後、ジブラルタルとスペインの将来の関係については10年にわたり不確実性が続いたが、フランコ氏は「EU離脱に対するこの解決策は最終的には我が国にとってプラスの効果をもたらすだろう」と信じていると述べた。
スペイン、EU離脱後の協定に基づきジブラルタル到着者をチェックへ
- 2 月 26 日発行
ラミー氏、ジブラルタル協定を巡る英国の主権への脅威はない
- 2025 年 6 月 12 日公開
ジブラルタル国民はEU離脱に断固反対しており、この問題に関する2016年の国民投票では国民の96％がEU残留に投票した。この断固とした親EUの姿勢は、EU離脱がスペインのザ・ロックに対する主権主張を促進するのではないかという懸念によって部分的に推進された。
しかし、もう一つの大きな要因は、ジブラルタルとEUとの既存の密接な貿易関係、特にオンラインゲーム、海運、金融サービスなどの分野における関係と、Brexitがもたらす物流上の課題に対する懸念だった。
スペイン、EU、英国が関与した長年の交渉を経て、解決策はジブラルタルを欧州関税同盟およびシェンゲン欧州自由旅行圏と連携させることであった。
英国などシェンゲン協定外の国から到着する旅行者は、シェンゲン圏の空港と港でジブラルタルとスペインの当局者にパスポートを提示する必要がある。
ジブラルタル州のファビアン・ピカルド首相は、英国と欧州議会の承認をまだ保留したまま暫定的に実施される予定の新たな取り決めは、ジブラルタルにとって「大きな変化」を意味すると述べた。
同氏はジブラルタル政府本部でBBCに対し、「過去8世代のジブラルタル人を特徴づけた重要なことの一つは、辺境での制限だ」と語った。
ピカルド氏は、この協定は、一方ではジブラルタル、もう一方ではスペインとEUの間に「人や物の完全かつ完全な流動性」を導入するものであると説明している。
ジブラルタルにとって最も明白な経済的利益は到着者数の増加だ、とピカルド氏は言う。
「ジブラルタルでは、ビジネスは今後、往路の行列や退路の辺境の行列によって妨げられることなく、客足の増加を確認できるようになります。」
スペインが英国のジブラルタル主権を争っており、政治の舞台で時折激化する問題だ。最近の二国間緊張の最も悪名高いエピソードでは、スペインの独裁者フランシスコ・フランコが1969年にロック封鎖を導入したが、それが解除されたのは彼の死後かなり後の1982年だった。
首相は新たな取り決めを封鎖とは反対の、論理的で相互利益となる国境開放だと位置づけている。
ジブラルタルとスペインおよびEUの関係にとって、「これは人間関係にとっても、ビジネスにとっても、国境地帯の労働者にとっても非常に大きなものであり、新たな夜明けとなるだろう」とピカルド氏は言う。
スペインの外務大臣ホセ・マヌエル・アルバレスも同様の見方をし、ロックの「新時代」について語った。
しかし、この協定は、ジブラルタルで販売される商品がEUの規制に従わなければならないことも意味しており、これまではそうではなかった。
さらに、ジブラルタルには付加価値税 (VAT) が存在しないため、輸入税に代わって新しい取引税が導入されることになります。ジブラルタルで販売されるすべての商品に課せられる税率は、今年は15％から始まり、最終的には17％に引き上げられる。また、特定の商品に対する消費税の税率も高くなります。
オン・ザ・ロックで複数のレストランやバーを経営するアングロ・イスパノ・カンパニーのマネージング・ディレクター、ジョン・イソラ氏は、ジブラルタルのビジネス界には、長引いた英国のEU離脱問題がついに、しかも厳しい国境線もなく解決されたという安堵感が広がっていると語る。
同氏は、この新たな取り決めは、ジブラルタルへのより多くの訪問者、ひいてはビジネスの増加を促進する「良い妥協策」だと考えている。
しかし、イゾラ氏はまた、新しい規制と税制のために多少の不安を感じていることも認めており、競争力に影響を与えると予想している。 「商品を輸入する人にとって、商品を受け取るために提示しなければならない書類の点でシナリオは完全に変わります」と彼は言います。
同氏はまた、EU基準に準拠するための新たな要件は「英国やEU域外から商品を輸入する者にとっての課題である」とも考えている。
ジブラルタル人やラ・リネア・デ・ラ・コンセプシオンの住民は、新しい取り決めのアイデアに慣れるまでに十分な時間があった。ここ数週間、7月15日に備えて機械が毎晩国境フェンスの破壊を行っている。
過去に多くのドラマを目撃してきたこの地域は、その歴史における最新の展開の重要性を発見しようとしています。
関連トピック
グローバル ビジネス ストーリーをもっと読む
- 4 日前に公開
- 7 日前に公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cwydz60j3eno?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T23:29:06+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/df71/live/aad05480-7c4a-11f1-bee8-53ce494e1abc.jpg",
    readTime: 8,
  },
  {
    id: "why-switching-to-save-money-is-easier-th-340bb693",
    title: "Why switching to save money is easier than you might think",
    titleJa: "お金を節約するための切り替えが思っているよりも簡単な理由",
    summaryJa: "お金を節約するための切り替えが思っているよりも簡単な理由- 公開されました",
    bodyOriginal: `Why switching to save money is easier than you might think
- Published
Seeking out a better deal from your broadband, pay TV and energy suppliers? While you know it could save hundreds of pounds, you might be wondering if it's worth the hassle.
But often it only needs one call or a couple of clicks - and banks even pay an incentive to people who switch their main current accounts.
Regulators have made the switching process easier in recent years, encouraging people to shop around when cost of living pressures have intensified.
Which deals are the best for you still depends on your circumstances, but here are some of the ways that switching works.
'One touch' broadband switch
Virgin Media has just been fined £28m by regulator Ofcom for repeatedly preventing customers from cancelling contracts.
The communications regulator said it uncovered tactics including agents deliberately hanging up calls, and customers being put on hold "for no reason". Millions of calls from customers were likely to have been mishandled over a three-year period which prevented or delayed them from switching to a better broadband, landline or pay-TV deal.
Anyone switching now shouldn't face the same hassle. Ofcom's One Touch Switch service, launched in 2024, means you only have to contact your new provider, not negotiate with the old one.
Ofcom says you should check whether you are in or out of contract, external, as you could face exit fees.
Some people are motivated to switch because they are fed up with the service from their old supplier.
Many do so in order to save money. So, customers may still decide to call their current provider in order to negotiate a better deal, or ask them to match the offer they could get by switching.
Paid to change bank
In years gone by, most people would get a bank account early in their adult life and stick with it for decades.
Competition now sees banks try to win over new customers by offering cash to switch - but only if you use their current account as your main account.
Many people have been put off that idea owing to the perceived complication of wages being paid into that account, and direct debits and the like needing to be moved.
The Current Account Switch Service, external now does most of the hard work.
You provide the account and debit card numbers for the account you are leaving to your new bank and choose a date for the move (although it can take seven days).
Behind the scenes, the service will then automatically transfer direct debits and standing orders, move the balance, redirect incoming payments, such as benefits or salaries, and close your old account.
If anything goes wrong, you'll be refunded any interest and charges on your old and new accounts.
If you have an overdraft, you'll have to check the new bank offers to cover this, and the amount owed will then be switched automatically. If not, you'll have to pay it off.
Doing your homework on energy switch
Changing energy supplier and tariff has also been simplified by regulator Ofgem, but there are some key things to check, including:
The way you pay can make a big difference to your bill - paying every month by direct debit is typically £140 a year cheaper than getting a bill every three months
Falling behind on previous bills can prevent you from switching to a new supplier
Decide on whether to move to a fixed tariff, which sets the price per unit of gas and electricity for a period of time, or a variable one
As with broadband, you only need to contact the new supplier if you want to switch.
Ofgem says the new supplier will need, external your postcode, the name of your current energy supplier and your current tariff, the amount you pay for your energy per unit (shown in kilowatt hours - kWh - on your bill), and the amount of energy you use each year. Most of this is on bills or energy statements, and switching services can help.
The switch can take five days, and you have a 14-day cooling off period, during which you can cancel the switch without a fee.
It is important to take meter readings, so you get charged the correct amount by your old and new supplier.`,
    bodyJa: `お金を節約するための切り替えが思っているよりも簡単な理由
- 公開されました
ブロードバンド、有料テレビ、エネルギー供給業者からより有利な取引を探していますか?何百ポンドも節約できることはわかっていても、手間をかける価値があるかどうか疑問に思うかもしれません。
しかし多くの場合、1回の電話か数回のクリックだけで手続きが完了し、銀行はメインの当座預金口座を切り替える人に奨励金を支払うことさえある。
規制当局は近年、切り替えプロセスを容易にし、生活費の圧迫が高まったときに人々が買い物をするよう奨励している。
どの取引があなたにとって最適であるかは状況によって異なりますが、切り替えの方法をいくつか紹介します。
「ワンタッチ」ブロードバンドスイッチ
Virgin Mediaは顧客の契約解除を繰り返し妨害したとして、規制当局のOfcomから2,800万ポンドの罰金を課されたばかりだ。
通信規制当局は、エージェントが意図的に電話を切ったり、顧客が「理由もなく」保留にされたりするなどの手口が判明したと述べた。顧客からの数百万件の電話は、3 年間で誤って処理された可能性があり、そのため、より良いブロードバンド、固定電話、または有料テレビ契約への切り替えが妨げられたり、遅れたりしました。
これから切り替える人は同じ問題に直面する必要はありません。 2024 年に開始された Ofcom のワンタッチ スイッチ サービスでは、古いプロバイダーと交渉する必要はなく、新しいプロバイダーに連絡するだけで済みます。
Ofcom は、契約終了時に違約金が発生する可能性があるため、外部契約の有無を確認する必要があると述べています。
以前のサプライヤーのサービスにうんざりしたために、乗り換えようとする人もいます。
多くの人はお金を節約するためにそうします。したがって、顧客は、より有利な取引を交渉するために、または切り替えによって得られるオファーと一致するように依頼するために、現在のプロバイダーに電話することを決定する可能性があります。
銀行を変更するために支払われる
昔は、ほとんどの人が成人してから早い段階で銀行口座を取得し、それを何十年も使い続けていたでしょう。
現在、競争が激化しており、銀行は切り替え用の現金を提供することで新規顧客を獲得しようとしているが、それは当座預金口座をメイン口座として使用している場合に限られる。
賃金がその口座に支払われ、口座振替などを移動する必要があるという複雑な認識のせいで、多くの人がその考えを先延ばしにしてきました。
現在、外部の現在のアカウント切り替えサービスが、ほとんどのハードワークを実行します。
退職する口座の口座番号とデビット カード番号を新しい銀行に提供し、移行日を選択します (ただし、7 日かかる場合があります)。
その後、このサービスは舞台裏で自動的に口座振替や定期注文の転送、残高の移動、福利厚生や給与などの入金のリダイレクトを行い、古いアカウントを閉鎖します。
何か問題が発生した場合は、古いアカウントと新しいアカウントの利息と料金が返金されます。
当座貸越がある場合は、これをカバーするために銀行の新しいオファーを確認する必要があり、その後、未払い額が自動的に切り替えられます。そうでない場合は、返済しなければなりません。
エネルギースイッチで宿題をする
エネルギー供給者と料金の変更も規制当局 Ofgem によって簡素化されましたが、次のような重要な確認事項がいくつかあります。
支払い方法によって請求額に大きな違いが生じる可能性があります。通常、口座振替で毎月支払う方が、3 か月ごとに請求書を受け取るよりも年間 140 ポンド安くなります。
以前の請求を滞納すると、新しいサプライヤーに切り替えることができなくなる可能性があります
一定期間のガスと電気の単位あたりの価格を設定する固定料金プランに移行するか、変動料金プランに移行するかを決定します。
ブロードバンドと同様に、切り替えたい場合は新しいサプライヤーに連絡するだけで済みます。
Ofgem によれば、新しい供給業者には、郵便番号、現在のエネルギー供給業者の名前と現在の料金表、単位あたりのエネルギー料金の支払い額 (請求書にはキロワット時 (kWh) で表示)、および毎年使用するエネルギー量が必要になります。そのほとんどは請求書や電力料金明細書に記載されており、サービスの切り替えが役に立ちます。
切り替えには 5 日間かかりますが、14 日間のクーリングオフ期間があり、その間は手数料なしで切り替えをキャンセルできます。
新旧のサプライヤーから正しい金額が請求されるように、メーターの測定値を取得することが重要です。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cd7w98n2y3eo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T23:28:01+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c16a/live/a606cc70-7c74-11f1-917a-91e958a7e786.png",
    readTime: 5,
  },
  {
    id: "who-will-replace-lindsey-graham-in-the-s-a0493d94",
    title: "Who will replace Lindsey Graham in the Senate?",
    titleJa: "上院でリンジー・グラハムの後任は誰になるでしょうか?",
    summaryJa: "先週末に急死したリンジー・グラハム上院議員（共和党、サウスカロライナ州）の空席を埋めるべく、混雑する可能性のある議場で最初に名前が挙がっているのはナンシー・メイス下院議員（共和党、サウスカロライナ州）とヘンリー・マクマスター・サウスカロライナ州知事の2人である。グラハム氏は死去当時、再選を目指しており、今年11月の総選挙で民主党のアニー・アンドリュース氏と対決する予定だった。この選挙戦では、エイミー・ウォルター氏とともにクック・ポリティカル・リポートが「ソリッドR」と名付けていた。",
    bodyOriginal: `Rep. Nancy Mace, R-S.C., and South Carolina Gov. Henry McMaster are among the first two names being floated in what could be a crowded field to fill the seat vacated by Sen. Lindsey Graham, R-S.C., who died suddenly over the weekend.
Graham was seeking reelection at the time of his death and was due to square off against Democrat Annie Andrews in the general election this November, in a race the Cook Political Report with Amy Walter had labeled "Solid R."
A person familiar with Mace's thinking, who spoke on condition of anonymity, said she is "strongly considering" running for the seat and would be out with polling on Monday.
Mace, who has represented South Carolina's 1st congressional district since 2021, launched a campaign for governor but lost in the Republican primary in June.
"South Carolina lost a giant last night. For more than three decades, Lindsey Graham gave everything he had to this state and this country, from the Air Force to the United States Senate," Mace wrote on X on Sunday. "We did not always agree, but no one ever questioned his love for South Carolina or the fight he brought to every room he walked into."
In a subsequent post on X on Sunday, Mace referenced "The Godfather Part III."
"'Just when I thought I was out… they pull me back in…'" she posted.
Meanwhile, President Donald Trump, the preeminent kingmaker in Republican politics, said on NBC's "Meet the Press" Sunday morning that "I have somebody I like" to replace Graham, but declined to name who it is.
"I'm not going to tell you who now because it's too soon," the president said.
Trump, however, heaped praise on South Carolina Gov. Henry McMaster, a close ally, during the interview.
"Henry's been a great governor, you know now he's termed out, but he's going to do the right thing," Trump said. "I think Henry will be fantastic."
According to South Carolina state law, McMaster will need to hold a special primary election on Aug.11 to replace Graham on the November ballot. The filing period for that primary will open July 21.
McMaster has the authority to appoint a candidate to fill Graham's current role. Michelle LeClair, McMaster's press secretary, told CNBC: "At this time, our focus is on honoring Senator Graham's life and service. Questions regarding the process for filling the vacancy will be addressed by the Governor's Office when there are updates to share."
Punchbowl News had reported that Rep. Joe Wilson, R-S.C., is interested in the interim appointment and would run for a full term.
But Wilson, who is running for reelection in South Carolina's 2nd congressional district, on Sunday appeared to throw cold water on the claim in a post on X.
"I was grateful to speak with President Trump today reminiscing about our mutual friend, Senator Lindsey Graham. I assured him my goal is to remain in the House to keep his two-vote majority for the American people!!!" Wilson posted.
Others could also join the race.
Rep. William Timmons, who is seeking another term representing South Carolina's 4th congressional district, said in a statement to CNBC that he was "deeply saddened" by Graham's passing but didn't rule out a run.
"If and when the time comes to discuss the future, I have always been willing to serve South Carolina wherever I can make the greatest difference," Timmons said.
Rep. Ralph Norman, another member of South Carolina's House delegation who fell short in his campaign for governor earlier this year, is also expected to test the waters, multiple outlets reported.
Graham's replacement potentially could come from outside the halls of Congress. There is speculation that Lt. Gov. Pamela Evette, who earned Trump's endorsement in her campaign for governor, could enter the fray.
And Politico reported that Treasury Secretary Scott Bessent, a South Carolina native who has kept a home in the state, was fielding calls from people encouraging him to run. Bessent's spokespeople did not immediately respond to a CNBC request for comment.`,
    bodyJa: `先週末に急死したリンジー・グラハム上院議員（共和党、サウスカロライナ州）の空席を埋めるべく、混雑する可能性のある議場で最初に名前が挙がっているのはナンシー・メイス下院議員（共和党、サウスカロライナ州）とヘンリー・マクマスター・サウスカロライナ州知事の2人である。
グラハム氏は死去当時、再選を目指しており、今年11月の総選挙で民主党のアニー・アンドリュース氏と対決する予定だった。この選挙戦では、エイミー・ウォルター氏とともにクック・ポリティカル・リポートが「ソリッドR」と名付けていた。
メイス氏の考えに詳しい関係者は匿名を条件に、メイス氏は立候補を「強く検討」しており、月曜日には投票に行く予定だと語った。
2021年からサウスカロライナ州第1下院選挙区の代表を務めているメイス氏は知事選に立候補したが、6月の共和党予備選で敗れた。
「サウスカロライナ州は昨夜、巨人を失った。リンジー・グラハムは30年以上にわたり、空軍から米国上院まで、この州とこの国に持てるすべてを捧げた」とメイス氏は日曜日のXに書いた。 「私たちはいつも同意していたわけではありませんでしたが、彼のサウスカロライナへの愛や、彼がどの部屋に入っても喧嘩をしたことに疑問を抱く人は誰もいませんでした。」
日曜日のXに関するその後の投稿で、メイスは「ゴッドファーザー パートIII」に言及した。
「『外に出たと思ったら…彼らは私を引き戻した…』」と彼女は投稿した。
一方、共和党政界の傑出したキングメーカーであるドナルド・トランプ大統領は日曜朝、NBCの「ミート・ザ・プレス」でグラハム氏の後任に「好きな人がいる」と述べたが、それが誰なのかは明らかにしなかった。
大統領は「時期尚早なので今は誰とは言わない」と述べた。
しかし、トランプ大統領はインタビュー中に、親密な同盟者であるサウスカロライナ州知事ヘンリー・マクマスターを称賛した。
トランプ大統領は「ヘンリーは偉大な知事だった。もう解任されたが、彼は正しいことをするつもりだ」と語った。 「ヘンリーは素晴らしい選手になると思うよ。」
サウスカロライナ州法によれば、マクマスター氏は11月の投票でグラハム氏に代わって8月11日に特別予備選挙を実施する必要がある。その予備選挙の提出期間は7月21日に始まる。
マクマスター氏はグラハム氏の現在の役割を担う候補者を任命する権限を持っている。マクマスター氏の報道官ミシェル・ルクレア氏はCNBCに対し、「現時点では、我々はグラハム上院議員の生涯と功績に敬意を表することに重点を置いている。欠員補充のプロセスに関する質問については、最新情報があれば知事室から回答されるだろう」と語った。
パンチボウル・ニュースは、ジョー・ウィルソン下院議員（共和党、サウスカロライナ州）が暫定任命に興味を示しており、全任期に立候補するつもりだと報じていた。
しかし、サウスカロライナ州第2下院選挙区での再選を目指して立候補しているウィルソン氏は日曜日、Xへの投稿でこの主張に冷や水を浴びせたようだ。
「今日、私たちの共通の友人であるリンジー・グラハム上院議員のことを思い出しながら、トランプ大統領と話せたことに感謝しました。私の目標は下院に留まり、アメリカ国民の2票の過半数を維持することであると彼に約束しました!!!」ウィルソンが投稿しました。
他の人もレースに参加する可能性があります。
サウスカロライナ州第4選挙区を代表して再選を目指しているウィリアム・ティモンズ下院議員はCNBCへの声明で、グラハム氏の死去に「深く悲しんでいる」としながらも、出馬する可能性は否定しなかった。
ティモンズ氏は、「将​​来について話し合う時期が来たら、私は常にサウスカロライナ州で最大の変化をもたらすことができる限り喜んで奉仕するつもりだ」と語った。
今年初めの知事選での選挙戦で落選したサウスカロライナ州下院議員団のもう一人のラルフ・ノーマン下院議員も水域を試すとみられると複数の報道機関が報じた。
グラハム氏の後任は議会外から選出される可能性がある。知事選でトランプ大統領の支持を得たパメラ・エヴェット副知事がこの争いに加わる可能性があるとの憶測がある。
また、ポリティコは、サウスカロライナ州出身で州内に住居を構えているスコット・ベッセント財務長官が、出馬を促す人々からの電話に対応していると報じた。ベッセント氏の広報担当者はCNBCのコメント要請にすぐには応じなかった。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/nancy-mace-lindsey-graham-senate-seat-south-carolina-election.html",
    publishedAt: "2026-07-12T20:28:16+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 5,
  },
  {
    id: "graham-s-death-complicates-myriad-gop-go-47262358",
    title: "Graham’s death complicates myriad GOP goals in Congress",
    titleJa: "グラハム氏の死は議会における無数の共和党の目標を複雑にする",
    summaryJa: "リンジー・グラハム上院議員の死去は、議会がホワイトハウスの有力な情報提供者であり連立構築者の一人を失う中、共和党の一連の政策努力に混乱をもたらすことになる。71歳で亡くなった共和党サウスカロライナ州グラハム氏は、上院の重鎮であり、ドナルド・トランプ大統領との緊密な関係により、上院が数多くの協定を仲介し、ウクライナなどの同盟国への援助を確保することに貢献した。上院予算委員会の委員長を務めたグラハム氏は、「大きくて美しい法案」として知られるトランプ大統領の目玉和解税・支出法案の可決に不可欠な存在だった。",
    bodyOriginal: `Sen. Lindsey Graham's death stands to scramble an array of Republican policy efforts, as Congress loses one of its top White House whisperers and coalition builders.
Graham, R-S.C., who died at 71, was a titan of the Senate whose close relationship with President Donald Trump helped the upper chamber broker numerous deals and secure aid for allies such as Ukraine. Graham, who chaired the Senate Budget Committee, was integral to passing Trump's marquee reconciliation tax-and-spending law, known as the "one big, beautiful bill."
He also served on the Appropriations, Judiciary, and Environment and Public Works Committees and was known to work across the aisle on policy issues.
Graham's death comes as the Senate works to advance many of Trump's priorities before heading into a tough midterm election in November, and his passing is likely to complicate those efforts. Included in the long list of unfinished business is the SAVE America Act, Trump's sought-after voter-ID bill; a third reconciliation bill to address affordability and replenish the military; and the confirmation of Attorney General nominee Todd Blanche.
SAVE America Act
Graham was a staunch advocate for the SAVE America Act, Trump's laundry list bill to require voter ID and proof of citizenship to vote, along with several other White House priorities. Trump has been almost singularly focused on the bill, despite its steep odds of becoming law.
Trump, in a Sunday call on NBC's "Meet the Press," lamented that the SAVE America Act will be harder to pass without Graham's support.
"This is a big blow to the Save America Act, let me tell you," Trump said. "He was pushing for the SAVE America Act like crazy."
The SAVE America Act, especially the version being pushed by Trump, faced steep odds of becoming law with or without Graham. It was far short of the 60 votes needed to overcome the Senate filibuster, given strong Democratic opposition.
Graham's death, however, will make it more difficult for the Senate to communicate the steep odds of passing the SAVE America Act. Trump noted that he spoke with Graham Saturday night about the bill.
"He called, and he said we're all set for the Save America Act," Trump said. "He literally called me about the Save America Act."
Reconciliation 3.0
Graham would have been integral to any additional reconciliation packages Republicans aim to pass by the end of this year. The Budget Committee steers reconciliation bills, which must be budget-centric and comply with the Byrd Rule — an arcane Senate process that allows the upper chamber to skirt the 60-vote filibuster.
Congress has already passed two reconciliation bills this year, including the one big, beautiful bill and a bill to fund immigration enforcement agencies after federal agents from those agencies shot and killed two American citizens earlier this year.
A third package — still not entirely fleshed out and largely in flux — was expected to include military spending to replenish stockpiles depleted by the war with Iran, affordability issues and fraud.
Graham's death now throws into disarray any planning he had done for that bill and leaves the Budget Committee without a chairman.
Blanche nomination
Trump's pick for Attorney General, acting AG Todd Blanche, now faces a new hurdle to Senate confirmation.
Graham served on the Judiciary Committee and was next in line to take the gavel when the term of Chair Chuck Grassley, R-Iowa, ends. The Committee includes 12 Republicans and 10 Democrats, meaning any Republican defection, along with full Democratic opposition, would result in a deadlock. Graham's death brings that tally to 11 Republicans and 10 Democrats.
Sen. Thom Tillis, R-N.C., who is retiring at the end of his term and also serves on the Judiciary Committee, is currently undecided on Blanche's nomination, though he said he has a positive predisposition toward him and has met with Trump's former personal attorney. Should Tillis defect now, along with all Democrats, Blanche's nomination would fail 11-10.
Ukraine aid
Graham has been one of Ukraine's staunchest supporters as it repels Russia's invasion that began in 2021. He has been critical in shepherding money through Congress and greasing the wheels for Trump to support aid to Ukraine.
The senator had just returned from Ukraine immediately before his death.
Trump, who came into office pledging to end the war in Ukraine, was significantly more antagonistic to the country than his predecessor, former President Joe Biden. In the first days of his second term, Trump hosted Ukrainian President Volodymyr Zelenskyy and berated him publicly. Trump has also threatened to cut off aid to Ukraine on numerous occasions.
After much lobbying from Graham, however, the president eventually warmed to aiding Ukraine as it fights Russia. Trump recently said Ukraine would be licensed to make Patriot missile interceptors, a long-range defense system that Ukraine has long sought.
On Friday, Graham announced he and several other senators had reached a deal with the White House to advance an updated sanctions package aimed at Russia.
"As Russia intensifies its slaughter of civilians, it is imperative that the legislative and executive branches work together to create tools to exact a heavy price on those who buy Russian oil and natural gas, fueling the Putin war machine," the senators said.`,
    bodyJa: `リンジー・グラハム上院議員の死去は、議会がホワイトハウスの有力な情報提供者であり連立構築者の一人を失う中、共和党の一連の政策努力に混乱をもたらすことになる。
71歳で亡くなった共和党サウスカロライナ州グラハム氏は、上院の重鎮であり、ドナルド・トランプ大統領との緊密な関係により、上院が数多くの協定を仲介し、ウクライナなどの同盟国への援助を確保することに貢献した。上院予算委員会の委員長を務めたグラハム氏は、「大きくて美しい法案」として知られるトランプ大統領の目玉和解税・支出法案の可決に不可欠な存在だった。
彼はまた、歳出委員会、司法委員会、環境・公共事業委員会の委員も務め、通路を越えて政策問題に取り組むことで知られていました。
グラハム氏の死去は、上院が11月の厳しい中間選挙に向けてトランプ大統領の優先事項の多くを前進させようと取り組んでいる最中に起きたもので、同氏の死去によりこうした取り組みが複雑になる可能性が高い。未完の仕事の長いリストには、トランプ大統領が求めていた有権者ID法案であるSAVE America Actが含まれている。手頃な価格に対処し、軍隊を補充するための3番目の和解法案。そして司法長官候補のトッド・ブランシュ氏の承認。
セーブ・アメリカ法
グラハム氏は、SAVE America Act、投票に有権者IDと市民権証明を要求するトランプ大統領の洗濯物リスト法案、その他いくつかのホワイトハウスの優先事項の熱心な支持者だった。成立の可能性が非常に高いにもかかわらず、トランプ大統領はほぼ唯一この法案に焦点を当ててきた。
トランプ大統領は日曜日のNBC番組「ミート・ザ・プレス」に出演し、グラハム氏の支持がなければSAVEアメリカ法の可決はさらに困難になると嘆いた。
トランプ大統領は「これはセーブ・アメリカ法に対する大きな打撃だ、言わせてほしい」と述べた。 「彼は狂ったようにSAVE America Actを推進していました。」
SAVE America Act、特にトランプ大統領が推し進めている法案は、グラハム氏の有無にかかわらず成立するかどうかは極めて難しい。民主党の強い反対を考慮すると、上院議事妨害を打開するために必要な60票には遠く及ばなかった。
しかし、グラハム氏の死により、上院が「SAVE America Act」可決の極めて高い確率を伝えることはさらに困難になるだろう。トランプ大統領は土曜日の夜に法案についてグラハム氏と話したと述べた。
トランプ大統領は「彼から電話があり、『セーブ・アメリカ法』への準備は整っていると言われた」と語った。 「彼は文字通り、『アメリカ救援法』について私に電話をかけてきました。」
和解 3.0
共和党が今年末までに可決を目指す追加の和解案にはグラハム氏が不可欠だったはずだ。予算委員会は和解法案の立案を主導するが、この法案は予算中心であり、上院が60票の議事妨害を回避できるようにする難解な上院プロセスであるバード・ルールに準拠する必要がある。
議会は今年すでに2件の和解法案を可決しており、そのうちの1件は大きく美しい法案と、今年初めに移民執行機関の連邦職員が米国人2名を射殺した事件を受けて移民執行機関に資金を提供する法案である。
3番目のパッケージはまだ完全に具体化されておらず、ほぼ流動的であるが、イランとの戦争、手頃な価格の問題、詐欺によって枯渇した備蓄を補充するための軍事支出が含まれると予想されていた。
グラハム氏の死により、彼がその法案のために行った計画はすべて混乱に陥り、予算委員会は委員長不在のままとなった。
ブランシュのノミネート
トランプ大統領が司法長官に指名したトッド・ブランシュ長官代理は、上院での承認を得るために新たなハードルに直面している。
グラハム氏は司法委員会の委員を務め、チャック・グラスリー委員長（共和党、アイオワ州）の任期が終了する際に次に小槌を受け取る予定だった。同委員会には共和党員12名、民主党員10名が含まれており、民主党の全面反対とともに共和党が離党すれば膠着状態に陥ることになる。グラハム氏の死により、その数は共和党員11名、民主党員10名となった。
任期満了で退任し、司法委員会の委員も務めるトム・ティリス上院議員（共和党、ノースカロライナ州）は現在、ブランチ氏の指名について未定だが、ブランチ氏に対して好意的な傾向があり、トランプ氏の元個人弁護士と面会したと述べた。もしティリス氏が今、民主党員全員とともに離党すれば、ブランシュ氏の指名は11対10で失敗することになる。
ウクライナ援助
グラハム氏は、2021年に始まったロシアの侵略を撃退するウクライナの最も熱心な支持者の一人だ。議会を通じて資金を誘導し、トランプ大統領がウクライナ支援を支援できるようにすることに重要な役割を果たしてきた。
同上院議員は亡くなる直前にウクライナから帰国したばかりだった。
ウクライナ戦争終結を誓って就任したトランプ氏は、前任のジョー・バイデン前大統領よりもウクライナに対する敵対心が著しく強かった。 2期目の任期の最初の数日、トランプ氏はウクライナのウォロディミル・ゼレンスキー大統領を接待し、公の場で彼を非難した。トランプ大統領はまた、何度もウクライナへの援助を打ち切ると脅してきた。
しかし、グラハム氏からの多大なロビー活動の後、大統領は最終的に、ロシアと戦うウクライナを支援することに前向きになった。トランプ大統領は最近、ウクライナが長年求めてきた長距離防衛システムであるパトリオットミサイル迎撃システムの製造許可をウクライナに与えると述べた。
金曜日、グラハム氏は自身と他の数名の上院議員がロシアを対象とした最新の制裁パッケージを進めることでホワイトハウスと合意に達したと発表した。
「ロシアが民間人虐殺を強化する中、立法府と行政府が協力して、ロシアの石油や天然ガスを購入する者たちに高額の対価を課し、プーチン大統領の戦争機構を刺激する手段を作り出すことが不可欠だ」と上院議員らは述べた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/grahams-death-policy-washington-save-america-ukraine-blanche-reconciliation.html",
    publishedAt: "2026-07-12T18:22:11+00:00",
    category: "エネルギー",
    imageUrl: "https://images.unsplash.com/photo-1473172367879-2dca04a4dca4?w=800&q=80",
    readTime: 6,
  },
  {
    id: "elon-musk-and-sam-altman-spar-on-x-after-5ff7cf92",
    title: "Elon Musk and Sam Altman spar on X after Apple files OpenAI lawsuit",
    titleJa: "AppleがOpenAI訴訟を起こした後、イーロン・マスク氏とサム・アルトマン氏がXを巡って争う",
    summaryJa: "イーロン・マスク氏とサム・アルトマン氏はXに関する新しい投稿で互いを批判し、OpenAIの進化を巡る億万長者の長年にわたる争いを浮き彫りにした。マスク氏とアルトマン氏は、エンジニアや科学者の一団とともに、非営利の人工知能研究ラボとして 2015 年に OpenAI を立ち上げるのに貢献しました。",
    bodyOriginal: `Elon Musk and Sam Altman criticized each other in new posts on X, highlighting the billionaires' long-standing tussle over OpenAI's evolution.
Musk and Altman helped to start OpenAI in 2015 as a nonprofit artificial intelligence research lab alongside a band of engineers and scientists.
In 2018, Musk left OpenAI's board after donating tens of millions to the organization, although he later objected to Altman's efforts to construct "an opaque web of for-profit OpenAI affiliates" in a lawsuit that went to trial in California this year. A jury ruled in favor of Altman, and Musk said he would appeal the case.
Musk's relationship with Altman and OpenAI eroded after the Tesla and SpaceX CEO borrowed OpenAI engineering personnel to remake Tesla's Autopilot technology and poached AI researcher Andrej Karpathy from OpenAI. Musk pressured OpenAI to give him complete control and merge the lab into Tesla. Altman and other OpenAI board members rebuffed Musk, who stopped making promised contributions to OpenAI, leaving it in a difficult financial position.
Weeks after the trial, Musk's company SpaceX — which controls the X social platform, the xAI lab that challenges OpenAI and the Starlink broadband internet service — completed its landmark initial public offering. SpaceX raised a record $75 billion as it promoted plans to launch data centers into space, as well as ambitions in enterprise AI applications and interplanetary transportation. Meanwhile, OpenAI has filed confidentially for its own IPO.
This week, SpaceX released the Grok 4.5 generative AI model, while OpenAI debuted its own GPT-5.6 Sol. For days, Musk and Altman have hyped up their respective releases, but on Saturday the rivalry got personal. Earlier, Musk sued both Apple and OpenAI, alleging that they engaged in anti-competitive practices that left Grok lower in app store rankings than other AI chatbots and image generators.
SpaceX has sought to expand in AI coding through its $60 billion all-stock acquisition of Cursor, which it expects to close in the third quarter following regulatory review. The deal would help SpaceX go up against Anthropic's Claude Code and OpenAI's Codex, which quickly write source code for applications.
In response to an X post about Apple filing suit against OpenAI on Friday over alleged theft of trade secrets, Musk wrote, "Scam Altman strikes again …"
The Tesla and SpaceX CEO has used the "Scam Altman" moniker to refer to the OpenAI CEO on several occasions over the past year. Minutes after his post, Musk doubled down, writing, "He takes scamming to a whole new level."
Next, Musk published a photo of Altman that included the words, "I'm doing this because I love it."
"By 'this' he means scamming," Musk wrote, including two rolling-on-the-floor-laughing emojis.
Musk then replied to that post, writing, "He might literally love scamming more than any human alive!"
The flurry of social activity got Altman's attention.
"[H]omeboy you're the one sellling public market investors on short-term space datacenters," Altman wrote in an X post of his own that garnered over 11 million views.
"We start flying them next year. Maybe you can come see them if your parole officer approves," Musk fired back.
Separately, Altman put Musk's fresh wave of attention in the context of OpenAI's fresh model release.
"[T]here are a lot of benchmarks that suggest 5.6 sol is the best model in the world right now, but the most reliable way to tell is that elon is obsessed with me again," Altman wrote on X.
Elsewhere on X, the account @iliketeslas asserted that Altman is scared of Apple. That, too, prompted a response from Altman.
"[I] am not afraid of apple, but i have tremendous respect for them. s-tier company," Altman wrote.
Altman's post led Nikita Bier, X's head of product, to respond: "Incredible trade secrets as well, some of the best."
Musk replied with a face-with-tears-of-joy emoji.
On Friday, an OpenAI spokesperson told CNBC, "We have no interest in other companies' trade secrets."
— CNBC's Lora Kolodny contributed to this report.
WATCH: Elon Musk loses court battle against Sam Altman, OpenAI`,
    bodyJa: `イーロン・マスク氏とサム・アルトマン氏はXに関する新しい投稿で互いを批判し、OpenAIの進化を巡る億万長者の長年にわたる争いを浮き彫りにした。
マスク氏とアルトマン氏は、エンジニアや科学者の一団とともに、非営利の人工知能研究ラボとして 2015 年に OpenAI を立ち上げるのに貢献しました。
2018年、マスク氏はOpenAIに数千万ドルを寄付した後、同社の取締役を辞任したが、その後、今年カリフォルニア州で裁判になった訴訟で「営利目的のOpenAI関連会社の不透明な網」を構築しようとするアルトマン氏の取り組みに反対した。陪審はアルトマン氏に有利な判決を下し、マスク氏は控訴するつもりだと述べた。
マスク氏とアルトマンおよびOpenAIとの関係は、テスラとスペースXのCEOがテスラのオートパイロット技術を作り直すためにOpenAIのエンジニアリング人材を借りたり、AI研究者のアンドレイ・カルパシーをOpenAIから引き抜いたりしたことで悪化した。マスク氏はOpenAIに完全な管理権を与え、研究所をテスラに統合するよう圧力をかけた。アルトマン氏と他のOpenAI取締役会メンバーはマスク氏を拒否したが、マスク氏はOpenAIへの約束した貢献をやめ、同社を厳しい財務状況に陥らせた。
裁判から数週間後、マスク氏の会社スペースX（Xソーシャルプラットフォーム、OpenAIに挑戦するxAIラボ、ブロードバンドインターネットサービスStarlinkを管理する）は画期的な新規株式公開を完了した。 SpaceXは、データセンターを宇宙に打ち上げる計画や、エンタープライズAIアプリケーションや惑星間輸送の野望を推進し、過去最高となる750億ドルを調達した。一方、OpenAIは独自のIPOを極秘に申請した。
今週、SpaceX は Grok 4.5 生成 AI モデルをリリースし、OpenAI は独自の GPT-5.6 Sol をデビューさせました。ここ数日、マスク氏とアルトマン氏はそれぞれのリリースを宣伝してきたが、土曜日には対立関係が個人的なものになった。これに先立ち、マスク氏はAppleとOpenAIの両社を告訴し、両社がアプリストアのランキングでGrokを他のAIチャットボットや画像ジェネレーターよりも低くする反競争的行為を行ったと主張した。
SpaceXは、600億ドルでCursor社を全株買収することでAIコーディング分野の拡大を目指しており、規制当局の審査を経て第3四半期に買収が完了する予定だ。この契約は、SpaceXがアプリケーションのソースコードを迅速に作成するAnthropicのClaude CodeやOpenAIのCodexに対抗するのに役立つだろう。
Appleが金曜日に営業秘密の窃盗の疑いでOpenAIを相手に訴訟を起こしたことに関するX投稿に応えて、マスク氏は「詐欺師アルトマンが再び攻撃…」と書いた。
TeslaとSpaceXのCEOは、過去1年間に何度かOpenAIのCEOを指すのに「詐欺アルトマン」というあだ名を使ってきた。投稿の数分後、マスク氏は気を引き締めて、「彼は詐欺をまったく新しいレベルに引き上げた」と書いた。
次にマスク氏は「大好きだからこれをやっている」という言葉を添えたアルトマンの写真を公開した。
マスク氏は「『これ』とは詐欺を意味する」と床を転がりながら笑う絵文字を2つ添えて書いた。
するとマスク氏はその投稿に返信し、「彼は文字通り、生きているどの人間よりも詐欺が好きなのかもしれない！」と書いた。
社会活動の慌ただしさがアルトマンの注意を引いた。
「おい、あなたは短期宇宙データセンターを公開市場の投資家に売りつけているのだ」とアルトマン氏は自身のX投稿に書き、1100万回以上の閲覧を集めた。
マスク氏は「来年から運航を開始する。仮釈放官が許可すれば見に来てもいいかもしれない」と反撃した。
これとは別に、アルトマン氏はマスク氏の新たな注目の波を、OpenAIの新モデルリリースとの関連で説明した。
「5.6 sol が現時点で世界最高のモデルであることを示唆するベンチマークはたくさんありますが、最も信頼できる方法は、イーロンが再び私に夢中になっているということです」とアルトマンは X について書いた。
X の他の場所では、アカウント @iliketeslas が、アルトマンは Apple を恐れていると主張しました。これもアルトマンからの返答を促した。
アルトマン氏は「アップルを恐れてはいないが、彼らを非常に尊敬している。一流企業だ」と書いた。
アルトマン氏の投稿を受けて、Xの製品責任者であるニキータ・ビア氏は「信じられないほどの企業秘密もあり、その中には最高のものもある」と反応した。
マスク氏は喜びの涙を浮かべた顔の絵文字で返答した。
金曜日、OpenAIの広報担当者はCNBCに対し、「当社は他社の企業秘密には興味がない」と語った。
— CNBC の Lora Kolodny がこのレポートに貢献しました。
注目：イーロン・マスク氏、OpenAIのサム・アルトマン氏との法廷闘争で敗訴`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/elon-musk-and-sam-altman-spar-.html",
    publishedAt: "2026-07-12T18:16:11+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 5,
  },
  {
    id: "former-emir-of-qatar-sheikh-hamad-bin-kh-5543115b",
    title: "Former Emir of Qatar Sheikh Hamad bin Khalifa Al Thani dies aged 74",
    titleJa: "カタール元首長シェイク・ハマド・ビン・ハリファ・アール・サーニー氏が74歳で死去",
    summaryJa: "カタール元首長シェイク・ハマド・ビン・ハリファ・アール・サーニー氏が74歳で死去- 公開されました",
    bodyOriginal: `Former Emir of Qatar Sheikh Hamad bin Khalifa Al Thani dies aged 74
- Published
Sheikh Hamad bin Khalifa Al Thani, the former leader of Qatar, has died aged 74, the country's government announced on Sunday.
"The Bureau of the Emir mourns the great loss to the nation of the late, may God have mercy on him," a statement read.
Sheikh Hamad was one of the key masterminds behind modern Qatar and had taken power from his father in June 1995 in a bloodless coup.
He is credited with transforming its economy into the wealthy global powerhouse it is today, thanks to its huge gas reserves. But his reign also had controversies - including Qatar's World Cup bid in 2010.
Qatari emir hands power to son Tamim
- Published25 June 2013
Funeral prayers will be held on Sunday evening before several days of public mourning across the country to mark his death.
Flags will be flown at half mast, while government offices and public institutions will be shut as a mark of respect.
King Charles and Queen Camilla paid tribute, saying Sheikh Hamad had "dedicated many years of distinguished service to Qatar".
"His leadership, vision and commitment to the welfare of the Qatari people were widely admired, both within Qatar and around the world," they added.
India declared a day of national mourning and said that all entertainment events would cancelled during the period.
Prime Minister Shri Narendra Modi said: "A visionary leader who led Qatar to great levels of development and prosperity.
"We remember him also as a true friend whom I had the honour of meeting during my last visit to Qatar in February 2024."
When Sheikh Hamad took power 31 years ago Qatar was struggling for money with its oil reserves dwindling.
His coup - carried out while his father Sheikh Khalifa was abroad - changed the country forever.
It became a leading producer and exporter of liquefied natural gas, thanks to international partnerships and investments that had been brokered.
In 1996 Al Jazeera was launched there before becoming a big name in international broadcasting.
And Sheikh Hamad founded the Qatar Investment Authority which put money into businesses abroad, including Harrods and football team Paris Saint-Germain.
It would be football where he secured one of Qatar's biggest - and controversial - triumphs.
The country was awarded the right to host the 2022 World Cup in 2010, despite allegations of corruption it was later cleared of.
It hired 30,000 foreign labourers just to build the stadiums. In 2021 it was reported some 6,500 migrant workers from India, Pakistan, Nepal, Bangladesh and Sri Lanka had died since it won the World Cup bid.
The Qatar government said not all the deaths recorded were of people working on World Cup-related projects and many had lived there a long time.
There was also criticism over Qatar's human rights record and laws against same-sex relationships.
Sheikh Hamad voluntarily abdicated for his son in 2013.
Qatar was a British protectorate until 1971, with the Al Thani family as monarchs since 1851.`,
    bodyJa: `カタール元首長シェイク・ハマド・ビン・ハリファ・アール・サーニー氏が74歳で死去
- 公開されました
カタールの元指導者シェイク・ハマド・ビン・ハリファ・アル・サーニ氏が74歳で死去したと同国政府が日曜日に発表した。
「首長局は故国民の多大なる損失を悼みます。神が彼に慈悲を与えてくださいますように」と声明で述べた。
シェイク・ハマドは現代カタールの背後にある主要な首謀者の一人であり、1995年6月に無血クーデターで父親から権力を掌握した。
彼は、その膨大なガス埋蔵量のおかげで、その経済を今日のような裕福な世界的大国に変えたと信じられています。しかし、彼の治世には2010年のカタールのワールドカップ招致など、論争もあった。
カタール首長、息子タミムに権力を委譲
- 2013 年 6 月 25 日公開
彼の死を記念して全米で数日間の追悼が続く前に、日曜の夕方に葬儀の祈りが行われる。
国旗は半旗で掲げられ、政府機関や公共機関は敬意を表して閉鎖される。
チャールズ国王とカミラ王妃は、ハマド首長が「長年にわたる功績をカタールに捧げた」と述べ、追悼の意を表した。
「彼のリーダーシップ、ビジョン、そしてカタール国民の福祉への取り組みは、カタール国内だけでなく世界中で広く称賛された」と彼らは付け加えた。
インドは国家喪の日を宣言し、期間中のすべての娯楽イベントは中止されると発表した。
シュリ・ナレンドラ・モディ首相は「カタールを素晴らしいレベルの発展と繁栄に導いた先見の明のある指導者。
「私たちは彼を、2024年2月にカタールを最後に訪問した際にお会いできて光栄だった真の友人としても覚えています。」
31年前にハマド首長が権力を握ったとき、カタールは石油埋蔵量が減少する中、資金繰りに苦しんでいた。
彼のクーデターは、父シェイク・ハリファが海外にいる間に実行され、国を永遠に変えた。
国際的なパートナーシップと仲介された投資のおかげで、同社は液化天然ガスの主要な生産者および輸出者となった。
1996 年にアルジャジーラがこの地で創刊され、その後国際放送で有名になりました。
そしてシェイク・ハマドはカタール投資庁を設立し、ハロッズやサッカーチームのパリ・サンジェルマンなど海外のビジネスに資金を投入した。
彼がカタール最大の、そして物議を醸す勝利を収めたのはサッカーだろう。
この国は2010年に2022年ワールドカップの開催権を獲得したが、汚職疑惑は後に解消された。
スタジアム建設のためだけに3万人の外国人労働者を雇用した。 2021年には、インド、パキスタン、ネパール、バングラデシュ、スリランカからの約6,500人の出稼ぎ労働者がワールドカップ招致に勝利して以来死亡したと報告された。
カタール政府は、記録された死亡者のすべてがワールドカップ関連のプロジェクトに従事していた人々によるものではなく、多くは長年そこに住んでいたと述べた。
カタールの人権実績や同性愛を禁止する法律についても批判があった。
シェイク・ハマドは2013年に息子のために自主的に退位した。
カタールは1971年まで英国の保護領であり、1851年からアル・サーニ家が君主となった。`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cql1qdq14xro?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T16:35:50+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/d015/live/7ee2a4e0-7df8-11f1-9800-45cddfec00b9.jpg",
    readTime: 3,
  },
  {
    id: "as-five-big-u-s-banks-report-earnings-on-cc229f15",
    title: "As five big U.S. banks report earnings on the same day, Citigroup is the one to watch",
    titleJa: "米国の大手銀行5行が同日に決算を発表する中、シティグループが注目される",
    summaryJa: "米国最大手の銀行の中で、シティグループは、ある重要な指標によって最大の改善を示すと予想されている。しかし、独自のパフォーマンス目標を達成するにはまだ長い道のりがあります。",
    bodyOriginal: `Among the largest U.S. banks, Citigroup is expected to show the greatest improvement by one important measure. But it still has a long way to go to reach its own performance target.`,
    bodyJa: `米国最大手の銀行の中で、シティグループは、ある重要な指標によって最大の改善を示すと予想されている。しかし、独自のパフォーマンス目標を達成するにはまだ長い道のりがあります。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/as-five-big-u-s-banks-report-earnings-on-the-same-day-citigroup-is-the-one-to-watch-683c3707?mod=mw_rss_topstories",
    publishedAt: "2026-07-12T15:30:00+00:00",
    category: "金融政策",
    imageUrl: "https://images.mktw.net/im-74725908",
    readTime: 2,
  },
  {
    id: "earnings-estimates-have-been-following-a-db2ccd43",
    title: "Earnings estimates have been following an unusual pattern this time around",
    titleJa: "今回の利益予想は異例のパターンをたどっている",
    summaryJa: "アナリストは通常​​、決算前の数カ月に予想を引き下げる。しかし、エネルギーとテクノロジーセクターのおかげで、第 2 四半期の決算に向けて期待は実際に高まっています。",
    bodyOriginal: `Analysts generally lower their estimates in the months before earnings. But thanks to the energy and tech sectors, expectations have actually climbed heading into second-quarter results.`,
    bodyJa: `アナリストは通常​​、決算前の数カ月に予想を引き下げる。しかし、エネルギーとテクノロジーセクターのおかげで、第 2 四半期の決算に向けて期待は実際に高まっています。`,
    source: "MarketWatch",
    sourceUrl: "https://www.marketwatch.com/story/earnings-estimates-have-been-following-an-unusual-pattern-this-time-around-fbebfb62?mod=mw_rss_topstories",
    publishedAt: "2026-07-12T14:00:00+00:00",
    category: "エネルギー",
    imageUrl: "https://images.mktw.net/im-85790238",
    readTime: 2,
  },
  {
    id: "badly-burned-british-couple-rescued-from-7e9bd596",
    title: "Badly burned British couple rescued from ravine during Spain wildfires, reports say",
    titleJa: "スペインの山火事で大やけどを負った英国人夫婦が渓谷から救出されたと報道",
    summaryJa: "スペインの山火事で大やけどを負った英国人夫婦が渓谷から救出されたと報道- 公開されました",
    bodyOriginal: `Badly burned British couple rescued from ravine during Spain wildfires, reports say
- Published
A British couple have been found down a ravine, badly burned and semi-conscious, after being caught up in the deadly wildfires that tore through Spain's Almeria province, according to local media.
The pair are thought to have been out hiking when they were caught up in the blaze, which spread rapidly through the province on Thursday. They were evacuated and taken to hospital where they are in intensive care.
Hundreds of firefighters have been battling the fires, which have claimed the lives of 12 people, including four believed to be Britons, and burned through 6,600 hectares (16,300 acres), local authorities said.
The identities of those killed have not yet been officially confirmed.
The couple were discovered by Civil Guard officers searching for survivors near the worst-hit village of Bedar in the early hours of Friday morning.
One of the rescuers, Sergeant Pedro Barre, said they heard distant cries for help.
"As you gain more experience, something inside you tells you, 'Look again, try one more time,'" he told Spain's TVE state broadcaster.
The rescue team followed the sound and climbed down a hillside. They found the couple in critical condition, semi-conscious and with severe burns covering 40% of their bodies.
"Being able to call out in the condition they were in was a titanic effort," said Rafael Zea, another of the officers involved in the operation.
"We'll never forget that look of surprise and emotion on their faces," Barre added.
On Sunday, Andalusia's regional government head, Juan Manuel Moreno Bonilla, said that "the fire has been contained and its perimeter secured," adding in a social media post that the overall alert had been downgraded.
Firefighters had made significant progress in getting the fires under control on Saturday, when calmer winds and higher air humidity prevailed.
About 600 of the nearly 1,500 people evacuated from the fire zone in Almería province were told they could return, regional emergency chief Antonio Sanz said.
On Sunday, dozens of people gathered at a roundabout beneath the village of Bédar, hoping to be allowed back to their homes.
Many said they had no idea if their properties had survived the fire.
Their path was being blocked by blue police tape and traffic officers from the Civil Guard.
Among those waiting anxiously were Mike and Belinda Lithgoe from Cornwall, who have a holiday property nearby.
Since the fires, they have slept in their camper van alongside their dog, Rocket.
The couple said they would be allowed to check on their home during a one hour window later on Sunday, following a meeting attended by the village mayor and the emergency services.
"We're waiting to see if our house is still there" said Belinda.
She said she was "hopeful" because the smoke was on the other side of the mountain as they were fleeing.
"It's impossible to know," said Mike. "You hope it will have gone down the ravine and round rather than up through the village."
Also waiting nearby were Emma Mitchell and her husband.
Emma challenged an earlier statement by local authorities that some of those killed had not taken a designated evacuation route.
"We've lived here for three years full time and there has never been information that you should take this road if there is a fire, never."
And the son of a Belgian man who perished in Spanish wildfires also disputed authorities' claims that his father and other victims ignored official advice to shelter in place, telling the Reuters news agency that emergency services gave them no guidance.
Emma also condemned the decision not to send a text message to all phones in the area.
"I think they should have done the mobile alert, as they do for earthquakes. I know they said that it was too technical and complex… but the reality is, out here in Bédar, there are very few officials."
Local officials have said previously said they did not issue an alert on Thursday night because it may have reached people beyond the affected area and could have complicated evacuations.
Emma said her local policeman as well as local firefighters had been magnificent in their individual efforts, visiting dozens of people as the fire took hold.
A sustained heatwave with temperatures of around 40C (104F) has caused wildfires across Southern Europe this summer, particularly in France, Portugal and Spain.
On Friday, Los Gallardos mayor Francisco Miguel Reyes told Spanish radio station Cadena SER said "it feels like a bomb has fallen" on the area.
"This is the first time we've faced a fire as devastating as this."
Hundreds of firefighters, military and law enforcement personnel, and 30 aircraft, continued responding to the blaze.
Forensic scientists in Madrid are using samples from the bodies of the victims and DNA samples from the families of those reported missing to try to identify the dead.
The identification process has been slowed because collecting DNA samples from relatives has proved difficult, with family members traveling from other countries.
With at least 12 people dead, this is already among the deadliest wildfires in Spanish history.
In 1984, 20 people died in a fire on the Canary Island of La Gomera, while in 1979, 21 people, including nine children, died in a forest fire near Lloret de Mar in north-eastern Spain.
Climate change is driving up temperatures around the world, and Europe is the fastest warming continent, heating up twice as fast as the global average, according to the Copernicus climate service.
This is causing increased summer heatwaves, greater pressure on Europe's water supply, and more intense wildfires.
Wildfires have also plagued France over the summer months.
On Monday over 10,000 people were evacuated from their homes in the foothills of the French Pyrenees.
However, French authorities said on Saturday 32 people had been arrested on suspicion of starting the fires.
Additional reporting by Kostas Kallergis`,
    bodyJa: `スペインの山火事で大やけどを負った英国人夫婦が渓谷から救出されたと報道
- 公開されました
地元メディアによると、スペインのアルメリア県を襲った致命的な山火事に巻き込まれ、重度の火傷を負って意識不明の英国人夫婦が渓谷で発見された。
２人は木曜日に州内に急速に広がった火災に巻き込まれた際、ハイキングに出ていたとみられている。彼らは避難して病院に運ばれ、集中治療を受けています。
地元当局によると、数百人の消防士が消火活動を行っており、英国人とみられる４人を含む１２人の命が奪われ、６６００ヘクタール（１万６３００エーカー）が全焼した。
殺害された人々の身元はまだ正式に確認されていない。
夫妻は金曜日の早朝、最も被害が大きかったベダル村近くで生存者を捜索していた民間警備隊員によって発見された。
救助隊員の一人、ペドロ・バーレ軍曹は、遠くで助けを求める叫び声が聞こえたと語った。
「経験を積むにつれて、自分の中の何かが『もう一度見て、もう一度試してみろ』と言うのです」と彼はスペインの国営放送TVEに語った。
救助隊は音を追って丘の斜面を降りた。彼らは夫婦が意識不明の重体で、体の40％を覆う重度の火傷を負っているのを発見した。
「彼らが置かれていた状態で声を上げることができたのは大変な努力だった」と作戦に参加したもう一人の警察官ラファエル・ゼア氏は語った。
「彼らの驚きと感動の表情を我々は決して忘れないだろう」とバーレ氏は付け加えた。
日曜日、アンダルシア州の地方自治体長官、フアン・マヌエル・モレノ・ボニージャ氏は「火災は鎮火し、周囲の安全は確保された」と述べ、全体的な警戒態勢が引き下げられたとソーシャルメディアへの投稿で付け加えた。
風が穏やかで空気の湿度が高かった土曜日、消防士らは火災の鎮圧に大きく前進した。
アルメリア州の火災地帯から避難した約1,500人のうち約600人が帰還の可能性があると告げられたと、地域緊急事態責任者のアントニオ・サンス氏は述べた。
日曜日、数十人の人々が自宅への帰還を望んでベダル村の下にあるロータリーに集まった。
多くの人は、自分たちの財産が火災から生き残ったかどうかわからないと述べた。
彼らの道は青い警察テープと民間警備隊の交通警官によって遮断されていた。
心配そうに待っていた人々の中には、近くに別荘を持っているコーンウォール出身のマイク・リスゴーさんとベリンダ・リスゴーさんの姿もあった。
火災以来、彼らは愛犬のロケットと一緒にキャンピングカーの中で寝ています。
夫妻は、村長と救急隊が出席した会議の後、日曜後半の１時間の枠内で自宅の様子を確認することが許可されると述べた。
「私たちは家がまだそこにあるかどうかを確認するのを待っています」とベリンダさんは言いました。
彼らが逃げているときに煙が山の向こう側にあったので、彼女は「希望を持っていた」と語った。
「それを知ることは不可能だ」とマイクは言った。 「それが村を通って上がるのではなく、渓谷を下って回ってくれればよかったのに」
近くにはエマ・ミッチェルさんと夫も待っていました。
エマさんは、死亡者の中には指定された避難経路を通らなかった人もいるとする地元当局の以前の声明に異議を唱えた。
「私たちはここにフルタイムで3年間住んでいますが、火事が起きたらこの道を通るべきだという情報は一度もありませんでした。」
また、スペインの山火事で死亡したベルギー人男性の息子も、父親や他の犠牲者が避難勧告を無視したという当局の主張に異議を唱え、救急サービスは何も指導しなかったとロイター通信に語った。
エマさんはまた、地域内のすべての電話にテキストメッセージを送信しないという決定を非難した。
「地震のときと同じように、モバイル警報を行うべきだったと思います。技術的で複雑すぎると彼らが言ったことは知っています…しかし現実には、ここベダルには職員がほとんどいません。」
地元当局者らはこれまで、感染地域を超えて人々に到達し、避難が複雑になる可能性があるため、木曜夜には警報を発令しなかったと述べていた。
エマさんは、地元の警察官と地元の消防士が、火災が発生した際に数十人を訪問するなど、それぞれの活動で素晴らしい活躍をしてくれたと語った。
この夏、気温約40度（104度）の持続的な熱波により、南ヨーロッパ全域、特にフランス、ポルトガル、スペインで山火事が発生した。
金曜日、ロス・ガヤルドスのフランシスコ・ミゲル・レイエス市長はスペインのラジオ局カデナSERに対し、この地域は「爆弾が落ちたような気分だ」と語った。
「これほど壊滅的な火災に直面したのは初めてだ。」
数百人の消防士、軍および法執行機関の職員、および30機の航空機が火災への対応を続けた。
マドリッドの法医学者らは、犠牲者の遺体から採取したサンプルと、行方不明と報告された人々の家族から採取したDNAサンプルを使用して、死者の身元確認を試みている。
家族が他国から旅行しているため、親族からDNAサンプルを収集することが困難であることが判明したため、身元特定プロセスは遅れている。
少なくとも12人が死亡し、これはすでにスペインの歴史の中で最も死者数の多い山火事の一つとなっている。
1984年にはカナリア諸島のラ・ゴメラ島で火災が発生し20人が死亡し、1979年にはスペイン北東部リョレト・デ・マル近郊の山火事で9人の子供を含む21人が死亡した。
コペルニクス気候局によると、気候変動により世界中で気温が上昇しており、ヨーロッパは最も温暖化が進んでいる大陸であり、世界平均の2倍の速さで気温が上昇しているという。
これにより、夏の熱波が増大し、ヨーロッパの水供給への圧力が増大し、山火事の激化が起こっています。
夏の間、山火事もフランスを悩ませている。
月曜日、フランスのピレネー山脈の麓にある自宅から1万人以上が避難した。
しかし、フランス当局は土曜日、火災を起こした容疑で３２人を逮捕したと発表した。
Kostas Kallergis による追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cx2x7441762o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T13:35:01+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/586b/live/21e5a140-7df6-11f1-a2c7-db8990d0c651.jpg",
    readTime: 6,
  },
  {
    id: "majority-of-u-s-workers-support-an-ai-we-2eb087af",
    title: "Majority of U.S. workers support an AI wealth fund as tech layoffs surge, survey finds",
    titleJa: "技術者の解雇が急増する中、米国の労働者の大多数がAIウェルスファンドを支持していることが調査で判明",
    summaryJa: "最近の世論調査によると、米国の従業員の過半数は現在、企業全体の利益が増加しているにもかかわらずテクノロジー部門の人員削減の増加に不満を抱いており、AI政府系ファンドを通じて企業の責任をさらに追及したいと考えている。調査会社ベラサイトが成人1,690人を対象に6月に実施し、今月初めに発表した全国調査によると、現在アメリカ国民の69％がAI企業に株式の50％を公的政府系ファンドに譲渡する「強制」を支持していることが示唆された。",
    bodyOriginal: `A majority of U.S. employees now want to hold corporations more accountable via an AI sovereign wealth fund, amid dissatisfaction over a growing number of tech layoffs despite higher overall corporate profits, according to a recent poll.
The national survey of 1,690 adults by research firm Verasight, which was carried out in June and published earlier this month, suggests that 69% of Americans now support "forcing" AI firms to transfer 50% of their stock to a public sovereign wealth fund.
"In the eyes of the public, AI Sovereign funds are seen as a tool to distribute the gains from the AI industry back to broader society," said Benjamin Leff, chief executive officer of Verasight.
In June, Senator Bernie Sanders proposed the American AI Sovereign Wealth Fund Act which, if passed, would give the public a 50% stake in the largest AI companies in the U.S.
"It would guarantee that the economic benefits generated by AI are used to improve the lives of all of us — not simply to make the richest people in the world even richer," Sanders said in a statement last month.
"The future of AI and the fate of humanity must not be decided behind closed doors in Silicon Valley by billionaires seeking to maximize their power and profit," Sanders said.
The rising number of tech layoffs in the U.S. have left many workers frustrated and worried over job security, as corporations continue to ramp up capital expenditure for AI expansion.
Goldman Sachs Senior Global Economist Joseph Briggs estimates that more than 9% of the labor force, or around 15 million workers, could lose their jobs during a 10-year AI transition period, the bank said in a report published last month.
This "would be the type of automation and reallocation shock that we saw in the late '90s and early 2000s and in other periods of significant technological change," Briggs said.
"But [Briggs] believes these losses will prove temporary owing to his expectation that AI will create many new jobs over the long term even as it destroys existing ones," the Goldman Sachs report says.
Sovereign wealth funds can serve in multiple roles when it comes to AI. They can lead development of AI at a national level by funding capital-intensive AI infrastructure, take equity stakes in AI companies and capture a share of AI-driven economic gains for the public treasury, according to research firm Windfall Trust.
However, sovereign wealth funds could also face challenges in managing between the public good and the global race to build AI capabilities.
"There is also a tension between the financial mandate (maximize returns for citizens) and the strategic mandate (build national AI capacity, maintain influence over frontier systems), since these objectives can conflict when the best financial investment is a foreign AI company rather than a domestic one," Windfall Trust added.`,
    bodyJa: `最近の世論調査によると、米国の従業員の過半数は現在、企業全体の利益が増加しているにもかかわらずテクノロジー部門の人員削減の増加に不満を抱いており、AI政府系ファンドを通じて企業の責任をさらに追及したいと考えている。
調査会社ベラサイトが成人1,690人を対象に6月に実施し、今月初めに発表した全国調査によると、現在アメリカ国民の69％がAI企業に株式の50％を公的政府系ファンドに譲渡する「強制」を支持していることが示唆された。
Verasightのベンジャミン・レフ最高経営責任者（CEO）は「一般の人々の目には、AIソブリンファンドはAI産業から得た利益をより広範な社会に分配するツールとみなされている」と述べた。
6月、バーニー・サンダース上院議員は、可決されれば米国最大のAI企業の株式50％を国民に付与する米国AIソブリン・ウェルス・ファンド法を提案した。
サンダース氏は先月の声明で、「AIによって生み出される経済的利益が、単に世界で最も裕福な人々をさらに裕福にするためではなく、私たち全員の生活を向上させるために使われることが保証されるだろう」と述べた。
サンダース氏は「AIの将来と人類の運命は、権力と利益を最大化しようとする億万長者によってシリコンバレーの密室で決定されるべきではない」と述べた。
企業がAI拡張のための設備投資を増やし続ける中、米国ではハイテク部門の人員削減数が増加し、多くの労働者が雇用の確保に不満と不安を抱えている。
ゴールドマン・サックスのシニア・グローバル・エコノミスト、ジョセフ・ブリッグス氏は、10年間のAI移行期間中に労働力の9％以上、つまり約1500万人が職を失う可能性があると同銀行が先月発表した報告書で述べた。
これは「90年代後半から2000年代初頭、その他の重大な技術革新の時期に見られたタイプの自動化と再割り当てのショックだろう」とブリッグス氏は述べた。
「しかし、ブリッグス氏は、AIが既存の雇用を破壊する一方で、長期的には多くの新たな雇用を創出するとの期待から、これらの損失は一時的なものに終わると信じている」とゴールドマン・サックスの報告書は述べている。
AI に関しては、政府系ファンドは複数の役割を果たすことができます。調査会社ウィンドフォール・トラストによると、彼らは資本集約型のAIインフラに資金を提供することで国家レベルでAIの開発を主導し、AI企業の株式を取得し、AIによる経済利益の一部を国庫に納めることができるという。
しかし、政府系ファンドは、公益と AI 機能構築の世界的な競争の間での管理において課題に直面する可能性もあります。
「また、財政的使命（国民への利益の最大化）と戦略的使命（国家AI能力の構築、フロンティアシステムへの影響力の維持）の間には緊張も存在する。なぜなら、最良の財政投資が国内のAI企業ではなく外国のAI企業である場合、これらの目標は矛盾する可能性があるからである」とWindfall Trustは付け加えた。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/majority-of-us-workers-support-ai-fund-amid-tech-layoffs-survey.html",
    publishedAt: "2026-07-12T12:27:55+00:00",
    category: "金融政策",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 3,
  },
  {
    id: "us-senator-lindsey-graham-dies-after-bri-b2e44540",
    title: "US Senator Lindsey Graham dies after 'brief and sudden illness', his office says",
    titleJa: "米国上院議員リンジー・グラハム氏が「短期間の突然の病気」で死去、事務所が発表",
    summaryJa: "米国上院議員リンジー・グラハム氏が「短期間の突然の病気」で死去、事務所が発表- 公開されました",
    bodyOriginal: `US Senator Lindsey Graham dies after 'brief and sudden illness', his office says
- Published
US Republican Senator Lindsey Graham has died at the age of 71 following a brief and sudden illness.
His office has released a statement saying he died on Saturday evening, adding that Graham's family "asks for privacy during this incredibly difficult period."
Elected to the Senate in 2002, the South Carolina politician was one of Washington's most influential voices on foreign policy and a key ally of Trump.
He had just returned from Kyiv, where he met the Ukrainian President Volodymyr Zelensky on Friday. There were no known health concerns ahead of his trip.
In a social media post marking the senator's death, US President Donald Trump said Graham was a "true American Patriot".
Graham also served as Chairman of the Senate Budget Committee.
He was a strong proponent of US support for Ukraine. In his most recent trip to the country, Graham was working on a version of the Russia sanctions bill, which he said would give "tools to President Trump to end this war."
"Putin will not stop in Ukraine," he told the BBC in 2023.
"To be weak in Ukraine means that you lose in Taiwan," he said.
Over the years, Graham clashed with President Trump. After the US Capitol riots in 2021, Graham gave a speech on the Senate floor, in which he said: "Trump and I, we've had a hell of a journey. I hate it to end this way."
"All I can say is a count me out. Enough is enough."
But he later became one of his staunchest backers and supported Trump in the 2024 election.
He told the BBC in 2023: "There is a dark side to Donald Trump... and he was a very good president. But I am sticking with him because I saw what he did," citing Trump's record on the US southern border, the killing of Iran's Qasem Soleimani and the appointment of conservative judges.
Graham "consistently pushed for outcomes in the War on Terror that protect our long-term national security interests," his website said.
He was opposed to the withdrawal of US troops from Afghanistan in 2021, describing it as a "sad and dangerous event for US national security...Jihadists all over the world are celebrating. America will be seen as weak."
Graham was a staunch supporter of Israel. Israel's President Benjamin Netanyahu paid tribute to Graham, saying "Lindsey understood that the security of Israel and America are inseparable."
Israel lost "one of its greatest friends" he said.
Related topics
- Published29 May 2023
- Published28 February 2025`,
    bodyJa: `米国上院議員リンジー・グラハム氏が「短期間の突然の病気」で死去、事務所が発表
- 公開されました
米国共和党上院議員リンジー・グラハム氏が短期間の突然の病気のため71歳で死去した。
グラハム氏の事務所は声明を発表し、グラハム氏が土曜夜に亡くなったと発表し、グラハム氏の家族は「この信じられないほど困難な時期にプライバシーを守るよう求めている」と付け加えた。
2002年に上院議員に選出されたサウスカロライナ州の政治家は、外交政策に関してワシントンで最も影響力のある発言者の一人であり、トランプ大統領の重要な同盟者だった。
同氏は金曜日にウクライナのウォロディミル・ゼレンスキー大統領と会談したキエフから戻ったばかりだった。彼の旅行前に健康上の懸念は知られていなかった。
ドナルド・トランプ米大統領は上院議員の死を伝えるソーシャルメディアへの投稿で、グラハム氏は「真のアメリカの愛国者」だと述べた。
グラハム氏は上院予算委員長も務めた。
彼は米国のウクライナ支援を強く支持していた。グラハム氏は最近の同国訪問で、対ロシア制裁法案の作成に取り組んでおり、同法案は「トランプ大統領にこの戦争を終わらせるための手段」を与えるものになると述べた。
「プーチン大統領はウクライナに止まらない」と2023年にBBCに語った。
「ウクライナで弱いということは、台湾で負けるということだ」と同氏は語った。
グラハム氏は長年にわたりトランプ大統領と衝突してきた。 2021年の連邦議会議事堂暴動後、グラハム氏は上院議場で演説し、「トランプと私は、地獄のような旅をしてきた。このまま終わるのは嫌だ」と語った。
「私が言えるのは、私を除外してくださいということだけです。もう十分です。」
しかしその後、同氏はトランプ氏の最も熱心な支持者の一人となり、2024年の選挙ではトランプ氏を支持した。
同氏は2023年にBBCに対し、「ドナルド・トランプには暗い面がある…そして彼はとても良い大統領だった。しかし、私は彼に固執する。なぜなら、彼のやったことを見たからである」と述べ、米国南部国境でのトランプの記録、イランのガーセム・ソレイマニ殺害、保守派判事の任命を挙げた。
グレアム氏は「長期的な国家安全保障上の利益を守る対テロ戦争の成果を一貫して推進した」とグラハム氏のウェブサイトには記載されている。
同氏は２０２１年のアフガニスタンからの米軍撤退に反対し、「米国の国家安全保障にとって悲しく危険な出来事だ…世界中のジハード主義者が祝っている。米国は弱いとみなされるだろう」と述べた。
グラハムはイスラエルの熱心な支持者でした。イスラエルのベンヤミン・ネタニヤフ大統領は「リンゼイ氏はイスラエルと米国の安全が分かちがたいものであることを理解していた」とグラハム氏に敬意を表した。
イスラエルは「最も偉大な友人の一人」を失ったと同氏は語った。
関連トピック
- 2023 年 5 月 29 日公開
- 2025 年 2 月 28 日公開`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cvgj25j6nmeo?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T08:14:08+00:00",
    category: "貿易",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/0992/live/576e9b70-7dc2-11f1-b976-0b9c15b0ccfc.jpg",
    readTime: 3,
  },
  {
    id: "senator-lindsey-graham-has-died-after-a-d8bea833",
    title: "Senator Lindsey Graham has died after a brief illness, his office says",
    titleJa: "リンジー・グラハム上院議員が短期間の病気の末に死去したと事務所が発表",
    summaryJa: "リンジー・グラハム上院議員が死去したと彼の事務所が日曜日に発表した。グラハム氏の事務所はXに関する声明で、「7月11日土曜日の夜、米国上院議員リンジー・グラハム氏が短期間の突然の病気により亡くなった」と発表した。",
    bodyOriginal: `Senator Lindsey Graham has passed away, his office said Sunday.
"On the evening of Saturday, July 11, U.S. Senator Lindsey Graham passed away from a brief and sudden illness," Graham's office said in a statement on X.
Graham, a prominent Republican from South Carolina, was 71.
"Senator Graham's family appreciates prayers at this time and asks for privacy during this incredibly difficult period," his office added.
A spokeswoman for Graham told MS NOW that he had just returned from a trip to Ukraine. She had no additional information on the circumstances of his passing and said more information would become available in the coming days.
His Senate website described Graham as "a conservative problem-solver and one of the strongest proponents of a robust national defense."
President Donald Trump said Graham was "one of the greatest people and Senators I have ever known".
"He was always working, and was a true American Patriot. Lindsey will be greatly missed!!!," Trump said in a post on Truth Social.
Israeli Prime Minister Benjamin Netanyahu said he and his wife Sara were grieving "with the American people over the loss of our dear friend, Senator Lindsey Graham".
"Lindsey understood that the security of Israel and America are inseparable. He devoted his life to defending America, strengthening our alliance and standing up for the free world," Netanyahu said in a post on X.
Graham was elected to the U.S. Senate in 2002 and was re-elected in 2008, 2014, and 2020.
He served as Chairman of the Senate Budget Committee and as a member of the Senate Committee on Appropriations, Senate Judiciary Committee, and Senate Committee on Environment and Public Works.
Prior to serving in the Senate, Graham was elected to the House of Representatives in 1994.
Before being elected to Congress, Graham served in the U.S. Air Force, logging six-and-a-half years of service on active duty as an Air Force lawyer.
During the first Gulf War in the early 1990's, Graham was called to active duty and served as a Staff Judge Advocate where he prepared members for deployment to the Gulf region.
Graham retired from the Air Force Reserves in June 2015 having served his country in uniform for 33 years. He retired at the rank of Colonel.
A native South Carolinian, Graham grew up in a blue collar family in the small town of Central where his parents ran a restaurant and pool hall, according to his website. The first member of his family to go to college, Graham earned his undergraduate and law degrees from the University of South Carolina.`,
    bodyJa: `リンジー・グラハム上院議員が死去したと彼の事務所が日曜日に発表した。
グラハム氏の事務所はXに関する声明で、「7月11日土曜日の夜、米国上院議員リンジー・グラハム氏が短期間の突然の病気により亡くなった」と発表した。
サウスカロライナ州出身の著名な共和党員グラハム氏は71歳。
同氏の事務所は「グラハム上院議員の家族は現時点での祈りに感謝しており、この信じられないほど困難な時期にプライバシーを守ってほしいと願っている」と付け加えた。
グラハムさんの広報担当者はMS NOWに対し、グラハムさんはウクライナ旅行から戻ったばかりだと語った。彼女は彼の死の状況について追加情報を持っておらず、今後数日中にさらなる情報が入手可能になるだろうと述べた。
同氏の上院ウェブサイトでは、グラハム氏を「保守的な問題解決者であり、強固な国防の最も強力な支持者の一人」と評している。
ドナルド・トランプ大統領はグラハム氏について「私がこれまで知った中で最も偉大な人物であり上院議員の一人」と述べた。
トランプ大統領はトゥルース・ソーシャルへの投稿で、「彼は常に仕事をしており、真のアメリカ愛国者だった。リンジーがいなくなるととても寂しくなるだろう！！！」と述べた。
イスラエルのベンヤミン・ネタニヤフ首相は、自身と妻サラが「親愛なる友人リンジー・グラハム上院議員の死を米国民とともに」悲しんでいると述べた。
ネタニヤフ首相はＸへの投稿で「リンゼイ氏はイスラエルと米国の安全保障が切り離せないことを理解していた。米国を守り、同盟を強化し、自由世界のために立ち上がることに人生を捧げた」と述べた。
グラハム氏は2002年に米国上院議員に選出され、2008年、2014年、2020年に再選された。
上院予算委員会の委員長を務め、上院歳出委員会、上院司法委員会、上院環境・公共事業委員会の委員も務めた。
グラハム氏は上院議員に就任する前、1994年に下院議員に選出された。
グラハム氏は議会議員に選出される前に米国空軍に勤務し、空軍弁護士として6年半現役勤務した。
1990年代初頭の第一次湾岸戦争中、グラハムは現役に召集され、法務参謀として湾岸地域への派遣隊員の準備を務めた。
グラハム氏は33年間軍服を着て祖国に奉仕し、2015年6月に空軍予備役を退役した。彼は大佐の階級で退役した。
彼のウェブサイトによると、生来のサウスカロライナ人であるグラハムは、両親がレストランとビリヤード場を経営するセントラルの小さな町のブルーカラーの家庭で育った。家族の中で大学に進学した最初のメンバーであるグラハムは、サウスカロライナ大学で学士号と法学の学位を取得しました。`,
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/12/senator-lindsey-graham-has-died-after-a-brief-illness-his-office-says.html",
    publishedAt: "2026-07-12T08:04:37+00:00",
    category: "テクノロジー",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readTime: 3,
  },
  {
    id: "how-aldi-is-taking-on-us-supermarkets-wi-29c49c01",
    title: "How Aldi is taking on US supermarkets with its $4 almond butter",
    titleJa: "Aldi は 4 ドルのアーモンドバターで米国のスーパーマーケットにどのように対抗しているか",
    summaryJa: "ドイツのスーパーマーケットが米国で90億ドルを投じるこの計画は、マンハッタンのような都市の中心地をターゲットにしている。その割引モデルはウォルマートに匹敵するでしょうか?",
    bodyOriginal: `How Aldi is taking on US supermarkets with its $4 almond butter
- Published
When Mary Porter walked into Manhattan's newest Aldi store hunting for bargains, the long-time resident found what she considered a retail miracle in plain sight: a $4 jar of almond butter that costs $22 in her own neighbourhood.
"Aldi has the reputation for being inexpensive, so I thought I would come and check it out, and by golly, it is amazing," Porter, 79, told the BBC, marvelling at the savings alongside the fresh spinach and organic raspberries filling her basket.
To the unassuming passer-by, the storefront is completely hidden, tucked away in an underground parking lot beneath The Ellery, a luxury apartment complex where the cheapest rent starts at nearly $5,000 (£3,725) a month.
In fact, the building's own website completely omits the discount grocer from its curated online neighbourhood guide, choosing instead to highlight pricier nearby options like Whole Foods and Brooklyn Fare.
But step past the luxury façade into the basement, and the quiet disappears. Even on an early Tuesday afternoon in July, the brightly lit, bustling space hums with high energy as a lunchtime crowd of New Yorkers tightly navigates the narrow aisles with oversized canvas bags.
Porter's discovery is part of Aldi's $9bn US expansion plan to add 800 new stores over five years, specifically targeting dense urban hubs like Manhattan. It marks a massive scale-up for the German discounter, which first entered the US in 1976 and has steadily grown its footprint to nearly 2,800 storefronts.
The aggressive real estate blitz signals a bold shift for a brand traditionally associated with suburban strip malls and lower-end consumers.
Incumbent US grocers may look with some concern at the insurgency Aldi pulled off since it entered the UK market in the 1990s.
Alongside fellow German discounter Lidl, Aldi picked up huge swathes of the market by offering discount prices for high-quality goods. The traditional "big four" grocers at the time - Tesco, Sainsbury's, Asda and Morrisons - were slow to respond to the new competition, leaving the challengers to gradually pick off their shoppers.
Today, Aldi is the UK's fourth biggest grocer, commanding 10.8% of the market.
Its rapid growth is being mirrored across Europe, its rise aided by easing perceptions of it as a strictly discount grocer as shoppers became increasingly impressed by the quality of its products. The cost of living crisis of the 2020s further fuelled its ascent.
However, while Aldi is rapidly ascending the ranks of American grocery consciousness, it is not, and may never aim to be, Walmart.
Aldi currently holds just 2.9% of the US grocery pie, while Walmart controls about 20%.
Yet analysts say that staying smaller is precisely how Aldi wins.
Data from location analytics firm Placer.ai reveals Aldi is capturing middle- and higher-income shoppers with household incomes between $75,000 and $125,000.
While hard discounters traditionally rely on lower-income demographics, years of persistent inflation have flipped the script, forcing wealthier households to aggressively trade down.
"Those shoppers have started to trade off a visit to a conventional grocery store or a quick service restaurant and started to go into Aldi more frequently," RJ Hottovy, Placer.ai's head of analytical research, told the BBC. "They're looking for ways to stretch their household budget."
For some urban commuters, the new city location offers a better experience than older formats. Kelvin Dozier, who usually shops at an Aldi in Brooklyn, recently started visiting the Manhattan location right across from his office for convenience.
"The one here - it's brighter," Dozier told the BBC, noting the fresh sweet navel oranges in his basket. "The one in Brooklyn is a little smaller. It almost seems temporary, but here it looks like a permanent location."
Still, winning over city slickers accustomed to premium brands remains an uphill battle. Ralph Montenegro, visiting Aldi for the first time, remained fiercely loyal to competitors.
"It has more variety than say Target," Montenegro said, praising the prices on staples like flour and fruit, though he noted he still prefers Trader Joe's. He added that Aldi's heavy reliance on packaged, private-label processed foods was a detractor compared to the natural organic options he prefers.
This strict reliance on limited, private labels is exactly what keeps Aldi's overheads low, according to Dustin York, an associate professor of communication at Maryville University.
He says that Aldi targets a lean, highly efficient model that provides about 80% of what a traditional big-box retailer carries, but at a much lower cost.
Still, York argues it is unlikely that Aldi will take dramatic market share from Walmart, because the retail giant is simply too massive. "I call Walmart the battleship, and I call Aldi a kind of submarine."
But navigating those crowded waters can bring a distinct financial hazard.
"Their biggest kryptonite is real estate cost," York warned, pointing to a brutal Manhattan retail landscape where average asking rents are between $350 and $700 per square foot.
In addition to high rents, Manhattan's roads provide another challenge.
Speaking on Bloomberg's Odd Lots podcast, Aldi's US chief commercial officer Scott Patton detailed that supplying the Manhattan store requires trucking inventory in from South Windsor, Connecticut, using shorter, specialised trucks to navigate tight city streets.
"We come at night because of the congestion," Patton said, noting that each truck requires a two-driver team to handle the city's turning radiuses. One driver watches for blind spots while the other unloads the groceries. To keep shelves in the Manhattan location stocked, Aldi runs three to four of these trips every night, calling the operation a "logistical symphony".
Walmart becomes first retailer to hit $1tn market value
- Published3 February
Because of those structural constraints, beating America's largest retailer is nearly impossible, says Jerry Sheldon, a retail analyst at IHL Group.
"The reason Aldi cannot simply out-discount its way to the throne is that Walmart fights with a war chest and Aldi fights with a scalpel," Sheldon explained.
Walmart pours more than $20bn a year into its business, the bulk of it into technology, automation, and its supply chain, with robots moving product through its warehouses and AI setting its forecasts on delivery routes.
Furthermore, Sheldon points out that Walmart earns billions from things like advertising and membership, which Aldi does not.
"Aldi is a brilliant single-purpose machine, while Walmart is a money machine that happens to sell groceries cheaply. That gap is the whole ballgame," Sheldon said.
For shoppers like Mary Porter, the corporate chess match matters less than the immediate relief to her wallet.
"I get on the subway with my big bag and go home with my cheap groceries. I mean, I'm so happy. This is amazing," Porter said.
Additional reporting by Archie Mitchell`,
    bodyJa: `Aldi は 4 ドルのアーモンドバターで米国のスーパーマーケットにどのように対抗しているか
- 公開されました
メアリー・ポーターがバーゲン品を探してマンハッタンの最新のアルディ店に入ったとき、長年住んでいた彼女は小売業の奇跡だと思うものを目に見えて見つけた。それは、自分の近所では22ドルもする4ドルのアーモンドバターの瓶だった。
「アルディは安いという評判があるので、行ってみようと思ったのですが、なんと驚くべきことでしょう」と79歳のポーターさんはBBCに語り、カゴにいっぱいの新鮮なほうれん草や有機ラズベリーとともに節約効果に驚嘆した。
気取らない通行人にとって、店の外観は完全に隠されており、最も安い家賃で月額 5,000 ドル (3,725 ポンド) 近くから始まる高級マンション、エラリーの地下駐車場にひっそりと佇んでいます。
実際、この建物のウェブサイトでは、厳選されたオンライン近所ガイドからディスカウント食料品店を完全に除外し、代わりにホールフーズやブルックリン・フェアなど、近隣のより高価な選択肢を強調しています。
しかし、豪華なファサードを通り過ぎて地下に一歩足を踏み入れると、静けさは消えてしまいます。 7 月の火曜日の午後早くでも、ランチタイムのニューヨーカーの群衆が特大のキャンバスバッグを抱えて狭い通路をぎっしりと行き交い、明るく照らされた賑やかな空間は活気に満ちた活気にあふれています。
ポーターの発見は、特にマンハッタンのような密集した都市中心部をターゲットに、5年間で800の新しい店舗を追加するアルディの90億ドルの米国拡大計画の一環である。これは、1976 年に初めて米国に進出し、着実に店舗数を 2,800 近くまで拡大してきたドイツのディスカウント業者にとって、大規模な規模拡大を意味します。
積極的な不動産の攻勢は、伝統的に郊外のストリップモールや低価格帯の消費者と関連付けられてきたブランドの大胆な転換を示唆している。
米国の既存食料品店は、アルディが1990年代に英国市場に参入して以来、反乱を起こしていることを若干の懸念の目で見ているかもしれない。
アルディは、同じくドイツのディスカウント業者であるリドルと並んで、高品質の商品を割引価格で提供することで、市場の広大な領域を獲得した。当時の伝統的な「ビッグ 4」食料品店、テスコ、セインズベリーズ、アズダ、モリソンズは、新たな競争への対応が遅れ、挑戦者たちは徐々に買い物客を狙い撃ちしていった。
現在、アルディは英国で 4 番目に大きな食料品店であり、市場の 10.8% を占めています。
その急速な成長はヨーロッパ全土に反映されており、買い物客が同社の製品の品質にますます感銘を受けるようになり、完全なディスカウント食料品店としての認識が緩和されたことがその成長を後押ししました。 2020年代の生活費危機がその上昇にさらに拍車をかけた。
しかし、アルディはアメリカの食料品店の意識のランクを急速に上げているが、ウォルマートではないし、決してウォルマートを目指すことはないかもしれない。
アルディは現在、米国の食料品のパイのわずか2.9％を握っているが、ウォルマートは約20％を支配している。
しかしアナリストは、規模を小さくし続けることがまさにアルディの勝利だと言う。
位置分析会社Placer.aiのデータによると、アルディが世帯収入7万5000ドルから12万5000ドルの間の中所得以上の買い物客を獲得していることが明らかになった。
ハードディスカウント業者は伝統的に低所得者層に依存しているが、長年にわたるインフレが続いたため状況は反転し、裕福な世帯は積極的に値下げを余儀なくされている。
「これらの買い物客は、従来の食料品店やクイックサービスのレストランへの訪問を犠牲にし始め、より頻繁にアルディに行き始めています」とPlacer.aiの分析調査責任者RJ Hottovy氏はBBCに語った。 「彼らは家計を豊かにする方法を探しています。」
一部の都市部の通勤者にとって、都市部の新しい場所は古い形式よりも優れたエクスペリエンスを提供します。普段はブルックリンのアルディで買い物をするケルビン・ドージャーさんは、最近、便宜上、オフィスの真向かいにあるマンハッタンの店舗を訪れるようになった。
「ここのほうが明るいよ」とドージャーさんはBBCに語り、かごの中の新鮮で甘いネーブルオレンジに注目した。 「ブルックリンのものはもう少し小さいです。ほとんど一時的なもののように見えますが、ここでは恒久的な場所のように見えます。」
それでも、プレミアムブランドに慣れている都会派の人々を勝ち取るのは依然として困難な戦いである。初めてアルディを訪れたラルフ・モンテネグロは、競合他社に対する激しい忠誠心を保ち続けた。
「ターゲットよりも品揃えが豊富だ」とモンテネグロ氏は小麦粉や果物などの必需品の価格を賞賛しながらも、それでもトレーダー・ジョーズを好むと述べた。同氏は、アルディ氏が包装されたプライベートブランドの加工食品に大きく依存していることは、彼が好む自然なオーガニックの選択肢と比較すると中傷になると付け加えた。
メリービル大学コミュニケーション学部のダスティン・ヨーク准教授によると、この限定されたプライベートブランドへの厳密な依存こそが、アルディの諸経費を低く抑えているのだという。
同氏によると、アルディは従来の大型小売店が取り扱う商品の約80％を、はるかに低コストで提供する無駄のない高効率モデルをターゲットにしているという。
それでもヨーク氏は、アルディがウォルマートから劇的な市場シェアを奪う可能性は低いと主張する。なぜなら、この小売大手は単純に巨大すぎるからである。 「私はウォルマートを戦艦と呼び、アルディを一種の潜水艦と呼んでいます。」
しかし、こうした混雑した海域を航行することは、明らかな経済的危険をもたらす可能性があります。
ヨーク氏は、平均募集賃料が平方フィート当たり350ドルから700ドルの間である過酷なマンハッタンの小売業界の現状を指摘し、「彼らにとって最大の難関は不動産コストだ」と警告した。
高い家賃に加えて、マンハッタンの道路には別の課題があります。
アルディの米国最高商務責任者スコット・パットン氏は、ブルームバーグのポッドキャスト「Odd Lots」で、マンハッタンの店舗に商品を供給するには、コネチカット州サウスウィンザーから在庫を輸送する必要があり、狭い市内の通りを移動するために短い専用トラックを使用する必要があると詳述した。
「渋滞のため、私たちは夜に来ます」とパットン氏は述べ、各トラックには市内の回転半径を処理するために2人のドライバーチームが必要であると指摘した。 1 人のドライバーが死角を監視し、もう 1 人が食料品を降ろします。マンハッタンの店舗の棚に在庫を保管しておくために、アルディ氏はこうした出張を毎晩 3 ～ 4 回実施し、この業務を「ロジスティック・シンフォニー」と呼んでいます。
ウォルマートが時価総額1兆ドルに達した初の小売業者となる
- 2 月 3 日発行
IHLグループの小売アナリスト、ジェリー・シェルドン氏は、こうした構造的制約のため、米国最大の小売業者に勝つことはほぼ不可能だと語る。
「アルディが王位への道を単純に割り引くことができない理由は、ウォルマートが軍資金で戦い、アルディがメスで戦うからだ」とシェルドン氏は説明した。
ウォルマートは年間200億ドル以上を事業に注ぎ込んでおり、その大半はテクノロジー、オートメーション、サプライチェーンに投じられており、ロボットが倉庫内で商品を移動させたり、AIが配送ルートの予測を設定したりしている。
さらにシェルドン氏は、ウォルマートは広告や会員制などで何十億ドルも稼いでいるが、アルディはそうではない、と指摘する。
「アルディは素晴らしい単一目的のマシンだが、ウォルマートは食料品をたまたま安く売るマネーマシンだ。その差がすべての勝負だ」とシェルドン氏は語った。
メアリー・ポーターのような買い物客にとって、企業のチェスの試合は、自分の財布の当面の救済よりも重要である。
「大きなバッグを持って地下鉄に乗り、安い食料品を持って家に帰ります。つまり、とても幸せです。これは素晴らしいことです」とポーターさんは語った。
Archie Mitchell による追加レポート`,
    source: "BBC",
    sourceUrl: "https://www.bbc.co.uk/news/articles/cly0l5d5xn7o?at_medium=RSS&at_campaign=rss",
    publishedAt: "2026-07-12T05:00:15+00:00",
    category: "エネルギー",
    imageUrl: "https://ichef.bbci.co.uk/ace/standard/240/cpsprodpb/c5e0/live/402e3660-7c59-11f1-ad56-219c1e341d26.jpg",
    readTime: 9,
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
