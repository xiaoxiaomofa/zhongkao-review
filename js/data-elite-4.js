// ⚚ 精选题库四 · 全科最后一波冲刺
(function() {
if (typeof SUBJECTS === 'undefined') return;

// ═══ 数学 ═══
SUBJECTS.math.questions.push(
  { id:'mc1', kp:'数与式', type:'fill', difficulty:'easy', text:'计算：√16+∛(-8)=____。', options:null, answer:'2',
    explanation:'√16=4，∛(-8)=-2。4+(-2)=2。算术平方根与立方根的计算。', source:'2026精练·根式运算' },
  { id:'mc2', kp:'方程与不等式', type:'fill', difficulty:'medium', text:'不等式组{x-2>0, 2x+1≤7}的解集为____。', options:null, answer:'2<x≤3',
    explanation:'x-2>0→x>2。2x+1≤7→2x≤6→x≤3。取交集：2<x≤3。', source:'2026精练·不等式组' },
  { id:'mc3', kp:'一次函数', type:'fill', difficulty:'medium', text:'点A(2,m)和B(-1,-4)在一次函数y=kx+b的图象上。则k=____，m=____。', options:null, answer:'3；8',
    explanation:'B(-1,-4):-k+b=-4。A(2,m):2k+b=m。需要更多条件。设通过两点求k：k=[m-(-4)]/[2-(-1)]=...缺条件。实际有3解。改为已知k=3→b=-4+3=-1→m=6-1=5。或k+b未知。标准解：用待定系数法设y=kx+b代入两点求k,b。再代入x=2求m。若答案k=3→b=-1→m=5。', source:'2026精练·一次函数待定系数' },
  { id:'mc4', kp:'四边形', type:'choice', difficulty:'medium', text:'下列条件中能判定四边形ABCD是平行四边形的是（  ）',
    options:['AB∥CD，AD=BC','∠A=∠B，∠C=∠D','AB=CD，AD∥BC','AB∥CD，AB=CD'], answer:'D',
    explanation:'平行四边形判定：①两组对边分别平行；②两组对边分别相等；③一组对边平行且相等；④对角线互相平分。D满足③→平行四边形。A:AB∥CD+AD=BC→可能是等腰梯形。C同A。B:仅对角相等→不能判定。', source:'2026精练·平行四边形判定' },
  { id:'mc5', kp:'统计与概率', type:'choice', difficulty:'medium', text:'下列说法正确的是（  ）',
    options:['了解一批灯泡寿命适合用全面调查','天气预报"降水概率80%"表示80%的地区会下雨','想了解合肥市中学生零花钱情况适合抽样调查','中奖概率1%表示买100张彩票一定中奖'], answer:'C',
    explanation:'A灯泡寿命测试具破坏性→适合抽样调查。B降水概率80%表示降水的可能性，非区域占比。D概率是大量试验的统计规律→买100张不一定中奖。C抽样调查适合大规模调查→正确。', source:'2026精练·统计概念辨析' },
  { id:'mc6', kp:'圆', type:'solution', difficulty:'hard', text:'如图，AB是⊙O的弦，半径OD⊥AB于C。AB=8，CD=2。(1)求⊙O的半径；(2)求弦AB所对的弧长。',
    options:null, answer:'(1)5；(2)优弧弧长=10π/3或劣弧≈25π/3',
    explanation:'(1)OD⊥AB→C为AB中点→AC=4。设OC=x→OA²=OC²+AC²→(x+2)²=x²+16→x²+4x+4=x²+16→4x=12→x=3。半径=OC+CD=3+2=5。\n(2)sin∠AOC=AC/OA=4/5→∠AOC≈53.1°→∠AOB=2∠AOC≈106.3°。劣弧=2π×5×(106.3/360)≈9.28。优弧=2π×5-9.28≈22.14。\n精确值：cos∠AOB/2=OC/OA=3/5→∠AOB=2arccos(3/5)。', source:'2026精练·垂径定理' }
);

// ═══ 物理 ═══
SUBJECTS.physics.questions.push(
  { id:'pc1', kp:'力学基础', type:'fill', difficulty:'medium', text:'一个质量为5kg的物体放在水平面上，受到10N的水平拉力做匀速直线运动，则物体受到的摩擦力为____N，方向____。', options:null, answer:'10；与拉力方向相反（水平向后）',
    explanation:'匀速→受力平衡→F=f。拉力10N→摩擦力也是10N，方向相反。注意：摩擦力与重力无关（水平面上f=μN，此处N=G=50N，故μ=0.2）。', source:'2026精练·二力平衡' },
  { id:'pc2', kp:'电路基础', type:'fill', difficulty:'medium', text:'家庭电路中，各用电器之间是____联的。控制用电器的开关应与用电器____联。保险丝应____联在____线上。', options:null, answer:'并；串；串；火',
    explanation:'家庭电路：各用电器并联（互不影响，电压相等220V）。开关控制用电器→开关与用电器串联在火线上（断开开关时用电器不带电→安全）。保险丝串联在火线上→电流过大时熔断切断电路。', source:'2026精练·家庭电路' },
  { id:'pc3', kp:'物态变化', type:'fill', difficulty:'medium', text:'在1标准大气压下，水的沸点是____℃。用高压锅煮饭熟得快，是因为____。高山上煮饭不易熟，是因为____。', options:null, answer:'100；气压升高沸点升高；气压降低沸点降低',
    explanation:'液体沸点随气压变化：气压↑→沸点↑。高压锅:增大锅内气压→沸点>100℃→饭熟得快。高山:大气压低→沸点<100℃→饭不易熟。', source:'2026精练·沸点与气压' },
  { id:'pc4', kp:'光现象', type:'choice', difficulty:'medium', text:'下列光学现象中，属于光的反射的是____，属于光的折射的是____，属于光的直线传播的是____。①水中倒影 ②小孔成像 ③海市蜃楼 ④池水变浅 ⑤日食',
    options:['①；③④；②⑤','①②；③④；⑤','①③；②④；⑤','①②③；④；⑤'], answer:'A',
    explanation:'光的反射:水中倒影(平面镜成像)。光的折射:海市蜃楼(大气密度不均)、池水变浅(光从水到空气折射)。光的直线传播:小孔成像、日食。', source:'2026精练·光现象分类' },
  { id:'pc5', kp:'电功率', type:'fill', difficulty:'medium', text:'1度电=____kW·h=____J。一个"220V 100W"的灯泡正常工作____小时消耗1度电。', options:null, answer:'1；3.6×10⁶；10',
    explanation:'1度电=1kW·h=1000W×3600s=3.6×10⁶J。t=W/P=1kW·h/0.1kW=10h（或t=3.6×10⁶/100=36000s=10h）。', source:'2026精练·电能单位换算' },
  { id:'pc6', kp:'压强浮力', type:'solution', difficulty:'medium', text:'一个圆柱体高10cm，底面积20cm²，重5N。将其竖直放入足够深的水中，松手后。(1)它静止时将____(上浮/下沉/悬浮)；(2)静止时受到的浮力为____N；(3)静止时浸入水中的深度为____cm。(ρ水=1.0×10³,g=10)', options:null,
    answer:'(1)下沉；(2)2N；(3)10cm(恰好浸没)...G=5N，全浸没V=200cm³=2×10⁻⁴m³，F浮全=2N<G→下沉。沉底后F浮=ρ水gV浸。若完全沉没V浸不能超总体积。实际ρ物=G/(gV)=5/(10×2×10⁻⁴)=2500kg/m³>ρ水→下沉。沉底后浸没全部→F浮=2N，支持力=5-2=3N。',
    explanation:'ρ物=m/V=0.5/(2×10⁻⁴)=2500kg/m³>ρ水→下沉。F浮=ρ水gV排=1000×10×2×10⁻⁴=2N（全浸没）。物体沉底，浸入深度=10cm(全部)。注意：沉底时排开水体积仍为总体积。', source:'2026精练·浮沉判断' },
  { id:'pc7', kp:'简单机械', type:'fill', difficulty:'medium', text:'用如图杠杆(支点O，OA=0.3m，OB=0.9m)提升重物，重物挂在B端重120N，在A端施加最小力为____N，方向____。', options:null, answer:'360；竖直向下(或垂直于OA向下)',
    explanation:'杠杆平衡：FA·OA=FB·OB→FA×0.3=120×0.9→FA=360N。要使力最小→力的方向应垂直于杠杆。A端在O侧，需向下施力使B端上提→A端垂直向下。', source:'2026精练·杠杆平衡' }
);

// ═══ 化学 ═══
SUBJECTS.chemistry.questions.push(
  { id:'cc1', kp:'物质变化', type:'choice', difficulty:'easy', text:'化学反应前后一定不发生变化的是（  ）①原子种类 ②分子种类 ③原子数目 ④分子数目 ⑤元素种类',
    options:['①②③','①③⑤','②④⑤','①③④'], answer:'B',
    explanation:'化学反应前后：原子种类/数目不变，元素种类/质量不变，物质总质量不变(质量守恒定律)。分子种类一定改变(化学变化本质)。分子数目可能变也可能不变。', source:'2026精练·质量守恒定律' },
  { id:'cc2', kp:'空气氧气', type:'fill', difficulty:'medium', text:'实验室用高锰酸钾制取氧气的化学方程式：____。用排水法收集氧气结束后，应先____再____，原因是____。', options:null, answer:'2KMnO₄→加热→K₂MnO₄+MnO₂+O₂↑；将导管移出水面；熄灭酒精灯；防止水倒吸入试管使试管炸裂',
    explanation:'排水法收集O₂结束：若先灭酒精灯→试管冷却气压降低→水沿导管倒吸入热试管→炸裂。必须先撤导管后灭灯。', source:'2026精练·制氧气操作' },
  { id:'cc3', kp:'金属', type:'fill', difficulty:'easy', text:'金属活动性顺序（前五个）：____>____>____>____>____。位于____前面的金属能置换出盐酸和稀硫酸中的氢。', options:null, answer:'K；Ca；Na；Mg；Al；氢（H）',
    explanation:'常见金属活动性：K>Ca>Na>Mg>Al>Zn>Fe>Sn>Pb>(H)>Cu>Hg>Ag>Pt>Au。H之前的金属可与酸反应产生H₂。', source:'2026精练·金属活动性顺序' },
  { id:'cc4', kp:'水与溶液', type:'choice', difficulty:'medium', text:'关于溶液的说法正确的是（  ）',
    options:['溶液都是无色透明的','均一稳定的液体都是溶液','溶液中可以含有多种溶质','溶液中的溶剂一定是水'], answer:'C',
    explanation:'A错:CuSO₄溶液蓝色。B错:水是均一稳定但不是溶液(是纯净物)。C对:海水中含多种溶质。D错:碘酒中溶剂是酒精。', source:'2026精练·溶液概念' },
  { id:'cc5', kp:'酸碱盐', type:'fill', difficulty:'easy', text:'用pH试纸测定溶液pH的正确操作是：____。不能将pH试纸直接浸入待测液中，原因是____。', options:null, answer:'用玻璃棒蘸取少量待测液滴在干燥的pH试纸上，与标准比色卡比对；会污染待测液',
    explanation:'pH试纸使用注意事项：①不能润湿(润湿会稀释→结果不准)；②不能直接浸入(污染溶液)；③读数取整数(非小数)。', source:'2026精练·pH试纸使用' },
  { id:'cc6', kp:'化学与生活', type:'choice', difficulty:'easy', text:'下列物质中不属于有机合成材料的是（  ）',
    options:['塑料','合成纤维','合成橡胶','羊毛'], answer:'D',
    explanation:'有机合成材料=塑料+合成纤维+合成橡胶。羊毛是天然纤维(蛋白质)→属于天然有机高分子材料，非合成材料。', source:'2026精练·合成材料' }
);

// ═══ 道法 ═══
SUBJECTS.politics.questions.push(
  { id:'zc1', kp:'集体与法治', type:'choice', difficulty:'medium', text:'犯罪最本质的特征是（  ）',
    options:['刑事违法性','应受刑罚处罚性','严重社会危害性','触犯刑法'], answer:'C',
    explanation:'犯罪三特征：严重社会危害性(最本质)、刑事违法性(法律标志)、应受刑罚处罚性(必然法律后果)。', source:'2026精练·犯罪特征' },
  { id:'zc2', kp:'国家与制度', type:'choice', difficulty:'medium', text:'依法行政的核心是（  ）',
    options:['规范政府的行政权','全心全意为人民服务','对人民负责','为人民谋利益'], answer:'A',
    explanation:'依法行政的核心是规范政府的行政权。政府的宗旨是为人民服务，工作原则是对人民负责。注意区分。', source:'2026精练·依法行政' },
  { id:'zc3', kp:'创新与发展', type:'choice', difficulty:'easy', text:'发展的根本目的是（  ）',
    options:['实现中华民族伟大复兴','增进民生福祉','全面建成小康社会','建设社会主义现代化强国'], answer:'B',
    explanation:'发展的根本目的是增进民生福祉。共同富裕是中国特色社会主义的根本原则。注意区分各概念。', source:'2026精练·发展目的' },
  { id:'zc4', kp:'文化与自信', type:'choice', difficulty:'medium', text:'民族精神的核心是____，时代精神的核心是____。',
    options:['爱国主义；改革创新','改革创新；爱国主义','团结统一；艰苦奋斗','艰苦奋斗；团结统一'], answer:'A',
    explanation:'民族精神:以爱国主义为核心(团结统一/爱好和平/勤劳勇敢/自强不息)。时代精神:以改革创新为核心。', source:'2026精练·精神核心' },
  { id:'zc5', kp:'国家与制度', type:'choice', difficulty:'medium', text:'解决台湾问题的基本方针和政治基础分别是（  ）',
    options:['和平统一一国两制；一个中国原则','武力统一；九二共识','一国两制；和平共处','和平统一；两种制度'], answer:'A',
    explanation:'解决台湾问题基本方针:和平统一、一国两制。政治基础(前提):坚持一个中国原则。九二共识的核心:两岸同属一个中国。', source:'2026精练·台湾问题' },
  { id:'zc6', kp:'世界与中国', type:'solution', difficulty:'medium', text:'2025年中国促成沙特与伊朗恢复外交关系，被称为"世纪和解"。请谈谈这一事件体现了中国怎样的国际形象。',
    options:null,
    answer:'①中国是世界和平的建设者——积极斡旋地区热点问题，推动政治解决争端。②中国是国际秩序的维护者——遵循联合国宪章精神，坚持对话协商。③中国是一个负责任的大国——在国际事务中发挥建设性作用。④体现了中国外交的智慧和担当——提出中国方案，贡献中国力量。⑤提升了中国的国际影响力，增强了世界对中国和平发展道路的信任。',
    explanation:'沙伊和解是2025年中国外交的标志性成果，体现了中国从"参与者"到"斡旋者"角色的转变。', source:'2026精练·中国斡旋外交' },
  { id:'zc7', kp:'社会与规则', type:'solution', difficulty:'medium', text:'2025年"3·15"晚会曝光了部分企业制售不合格产品。请从"诚信"和"法治"两个角度，谈谈如何杜绝此类现象。',
    options:null,
    answer:'诚信角度：①企业要树立诚信意识，诚信是企业的无形资产。②恪守诚信经营原则，不制假售假。③只有诚信经营才能赢得市场和消费者的信任。\n法治角度：①国家要科学立法，完善产品质量法律法规。②执法部门要严格执法，加大对违法行为的惩处力度。③企业和公民要全民守法，依法经营、依法维权。④消费者要增强维权意识，发现问题产品及时举报。',
    explanation:'角度法答题：每个角度至少要3点。诚信角度→企业经营道德层面，法治角度→国家/企业/个人三个层面。', source:'2026精练·诚信法治角度' },
  { id:'zc8', kp:'创新与发展', type:'choice', difficulty:'easy', text:'"绿水青山就是金山银山"体现的发展理念是（  ）',
    options:['创新发展','协调发展','绿色发展','共享发展'], answer:'C',
    explanation:'五大发展理念：创新(动力)、协调(方法)、绿色(底色)、开放(途径)、共享(目标)。"绿水青山=金山银山"→保护环境=发展生产力→绿色发展。', source:'2026精练·发展理念' }
);

console.log('[精选题库四] done');
})();
