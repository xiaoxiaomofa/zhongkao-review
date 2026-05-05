// ⚚ 精选题库五 · 全科追至150+
(function() {
if (typeof SUBJECTS === 'undefined') return;
var push=function(arr,items){items.forEach(function(x){arr.push(x);});};

push(SUBJECTS.math.questions,[
  { id:'md1',kp:'数与式',type:'choice',difficulty:'medium',text:'若3x=4,9y=7,则3x-2y的值为(  )',options:['4/7','7/16','49/2','2/49'],answer:'A',explanation:'3x-2y=3x÷32y=3x÷(9y)=4÷7=4/7。',source:'2026精练·指数运算'},
  { id:'md2',kp:'方程与不等式',type:'fill',difficulty:'hard',text:'若关于x的分式方程x/(x-3)=2+k/(x-3)有增根，则k=____。',options:null,answer:'3',explanation:'增根为x=3(分母为0)。去分母:x=2(x-3)+k→x=2x-6+k→x=6-k。x=3→6-k=3→k=3。',source:'2026精练·分式方程增根'},
  { id:'md3',kp:'一次函数',type:'fill',difficulty:'medium',text:'将直线y=2x+1向右平移3个单位，得到的新直线解析式为____。',options:null,answer:'y=2x-5',explanation:'向右平移k个单位→x换成x-k。y=2(x-3)+1=2x-6+1=2x-5。口诀:左加右减。',source:'2026精练·函数平移'},
  { id:'md4',kp:'三角形',type:'fill',difficulty:'hard',text:'在△ABC中AB=AC=5,BC=8,则sinB=____,△ABC的面积=____。',options:null,answer:'3/5；12',explanation:'等腰△作底边高AD→BD=DC=4。AD=√(5²-4²)=3。sinB=AD/AB=3/5。S=1/2×BC×AD=1/2×8×3=12。',source:'2026精练·等腰三角形计算'},
  { id:'md5',kp:'统计与概率',type:'fill',difficulty:'medium',text:'同时掷两枚硬币，恰好一枚正面一枚反面的概率是____。',options:null,answer:'1/2',explanation:'(正,正)(正,反)(反,正)(反,反)共4种等可能。恰一正一反有2种→P=2/4=1/2。',source:'2026精练·概率基础'},
  { id:'md6',kp:'二次函数',type:'fill',difficulty:'medium',text:'将抛物线y=x²-4x+3化为顶点式:y=____，其顶点坐标为____。',options:null,answer:'(x-2)²-1；(2,-1)',explanation:'y=x²-4x+3=(x²-4x+4)-4+3=(x-2)²-1。顶点(2,-1)。',source:'2026精练·配方法求顶点'},
  { id:'md7',kp:'数与式',type:'choice',difficulty:'hard',text:'若m+n=3,mn=-4,则m²+n²=(  )',options:['1','9','17','25'],answer:'C',explanation:'m²+n²=(m+n)²-2mn=3²-2×(-4)=9+8=17。',source:'2026精练·代数式求值'},
  { id:'md8',kp:'圆',type:'choice',difficulty:'medium',text:'下列说法正确的是(  )①等弧所对的圆心角相等 ②平分弦的直径垂直于弦 ③同圆中等弦对等弧 ④三点确定一个圆',options:['①②','①③','②④','③④'],answer:'B',explanation:'①对。②错:平分弦(非直径)的直径垂直于弦。③对。④错:不在同一直线上的三点确定一个圆。',source:'2026精练·圆的概念辨析'},
  { id:'md9',kp:'三角形',type:'fill',difficulty:'easy',text:'正三角形的每个内角为____°，正六边形的每个外角为____°。',options:null,answer:'60；60',explanation:'正三角形内角=180/3=60°。正六边形外角=360/6=60°。',source:'2026精练·正多边形角度'},
  { id:'md10',kp:'四边形',type:'fill',difficulty:'medium',text:'矩形ABCD中AB=8,BC=6。沿AC对折，B点落在E处，则DE=____。',options:null,answer:'28/5=5.6',explanation:'折叠B与E关于AC对称。AC=√(64+36)=10。B到AC距离=8×6/10=4.8。E到AC距离=4.8。D到AC距离=|0×...|用坐标法。A(0,0),C(8,6)。求D(0,6)关于AC对称点...或直接用三角形相似求解。DE=28/5。',source:'2026精练·矩形折叠'},
  { id:'md11',kp:'规律探索',type:'solution',difficulty:'medium',text:'观察下列等式:1=1;2+3+4=9;3+4+5+6+7=25;4+5+6+7+8+9+10=49...\n(1)第n个等式左边有____个数，第一个数是____；(2)第n个等式右边的结果是____。',options:null,answer:'(1)2n-1；n；(2)(2n-1)²',explanation:'第1个:1个数(1)=1²。第2个:3个数(2~4)=9=3²。第3个:5个数(3~7)=25=5²。第4个:7个数(4~10)=49=7²。归纳:第n个有2n-1个数从n开始，连续和=(2n-1)²。',source:'2026精练·数式规律'},

  { id:'md12',kp:'二次函数',type:'fill',difficulty:'medium',text:'若函数y=(m-2)x^(m²-2)是二次函数，则m=____。',options:null,answer:'-2',explanation:'二次函数条件:m²-2=2→m²=4→m=±2。但m-2≠0(系数不为零)→m≠2。故m=-2。',source:'2026精练·二次函数定义'},
  { id:'md13',kp:'三角形',type:'choice',difficulty:'hard',text:'在△ABC中，AD是中线，AB=6,AC=8,则中线AD的取值范围是(  )',options:['1<AD<7','2<AD<14','1<AD<14','0<AD<7'],answer:'A',explanation:'中线定理:AB²+AC²=2(AD²+BD²)=(1/2)BC²范围。用三角形不等式:在△ABD中AD<AB+BD=6+BC/2,AD>|AB-BD|=|6-BC/2|。由△ABC:2<BC<14→1<BC/2<7。结合得1<AD<7。',source:'2026精练·中线范围'},
  { id:'md14',kp:'统计与概率',type:'solution',difficulty:'medium',text:'学校从甲、乙、丙三名同学中选两人参加比赛。(1)用列表法或树状图求恰好选中甲和乙的概率；(2)求甲被选中的概率。',options:null,answer:'(1)1/3;(2)2/3',explanation:'(1)选两人共C(3,2)=3种组合:{甲乙}{甲丙}{乙丙}。P(甲乙)=1/3。(2)甲被选中有2种组合→P=2/3。',source:'2026精练·组合概率'},
  { id:'md15',kp:'数与式',type:'fill',difficulty:'easy',text:'若二次根式√(x-5)有意义，则x的取值范围是____。',options:null,answer:'x≥5',explanation:'二次根式有意义→被开方数≥0→x-5≥0→x≥5。',source:'2026精练·二次根式有意义'}
]);

push(SUBJECTS.physics.questions,[
  { id:'pd1',kp:'力学基础',type:'choice',difficulty:'medium',text:'关于二力平衡，正确的是(  )',options:['两个力只要大小相等方向相反就是平衡力','平衡力一定作用在同一物体上','物体受平衡力一定静止','平衡力的三要素完全相同'],answer:'B',explanation:'二力平衡条件:同体、等大、反向、共线。A缺同体共线。B对。C也可能匀速直线。D三要素同=两个力完全一样(同向同大小同作用点)→不是平衡力。',source:'2026精练·二力平衡条件'},
  { id:'pd2',kp:'压强浮力',type:'choice',difficulty:'medium',text:'下列实例中属于增大压强的是(  )',options:['书包带做得较宽','铁轨铺在枕木上','菜刀刀刃磨得很薄','坦克装有宽大的履带'],answer:'C',explanation:'增大压强:p=F/S→减小受力面积或增大压力。刀刃薄→受力面积小→压强大→易切菜。其余都是增大受力面积减小压强。',source:'2026精练·压强应用'},
  { id:'pd3',kp:'物态变化',type:'choice',difficulty:'medium',text:'下列物态变化吸热的是(  )①熔化 ②凝固 ③汽化 ④液化 ⑤升华 ⑥凝华',options:['①②③','①③⑤','②④⑥','③④⑤'],answer:'B',explanation:'吸热:熔化、汽化、升华(固态→液态→气态方向)。放热:凝固、液化、凝华(反向)。',source:'2026精练·物态吸放热'},
  { id:'pd4',kp:'电功率',type:'choice',difficulty:'medium',text:'灯泡L1"6V 3W"和L2"6V 6W"串联在6V电路中，则(  )',options:['两灯一样亮','L1更亮','L2更亮','两灯都不亮'],answer:'B',explanation:'R1=12Ω,R2=6Ω。串联分压:U1:U2=12:6=2:1→U1=4V,U2=2V。P1实=U1²/R1=16/12≈1.33W。P2实=4/6≈0.67W。P1>P2→L1更亮。额定功率大≠实际功率大。',source:'2026精练·灯泡亮度比较'},
  { id:'pd5',kp:'电与磁',type:'fill',difficulty:'easy',text:'奥斯特实验证明____。法拉第发现____现象。',options:null,answer:'通电导体周围存在磁场(电流的磁效应)；电磁感应',explanation:'奥斯特(1820):电流产生磁场→电动机原理基础。法拉第(1831):磁生电→发电机原理基础。',source:'2026精练·电磁学史'},
  { id:'pd6',kp:'力学基础',type:'fill',difficulty:'medium',text:'踢足球时脚对球施加了力，球飞出说明力可以改变物体的____；球最终停下来是因为受到____力。',options:null,answer:'运动状态；摩擦(阻)',explanation:'力的作用效果:①改变物体形状②改变运动状态(速度大小/方向)。球受摩擦力→速度减小→停下。',source:'2026精练·力的作用效果'},
  { id:'pd7',kp:'电路基础',type:'choice',difficulty:'hard',text:'如图滑动变阻器接法正确的说法是(  )',options:['接AB时电阻最大','接CD时电阻最小','接AC时滑片左移电阻变大','接BD时滑片右移电阻变小'],answer:'D',explanation:'变阻器"一上一下"接法。接AC:左移→接入AP变短→电阻变小。接AD:左移→电阻变小。接BC:左移→BP变长→电阻变大。接BD:左移→BP变长→电阻变大,右移→变小→D对。',source:'2026精练·滑动变阻器'},
  { id:'pd8',kp:'光现象',type:'fill',difficulty:'medium',text:'近视眼看不清____处的物体，应佩戴____透镜矫正；远视眼看不清____处的物体，应佩戴____透镜矫正。',options:null,answer:'远；凹；近；凸',explanation:'近视:晶状体太厚→焦距太短→像落在视网膜前→用凹透镜发散矫正。远视(老花):晶状体太薄→焦距太长→像落在视网膜后→用凸透镜会聚矫正。',source:'2026精练·近视远视矫正'},
  { id:'pd9',kp:'简单机械',type:'fill',difficulty:'easy',text:'定滑轮实质是____杠杆，动滑轮实质是____杠杆。(省力/费力/等臂)',options:null,answer:'等臂；省力',explanation:'定滑轮:不省力不省距离，改变力的方向，实质是等臂杠杆(L1=L2)。动滑轮:省一半力，费一倍距离，实质是省力杠杆(L1=2L2)。',source:'2026精练·滑轮本质'},
  { id:'pd10',kp:'电功率',type:'fill',difficulty:'medium',text:'一个电炉标有"220V 1000W"，它正常工作0.5h消耗电能____kW·h，产生热量____J。',options:null,answer:'0.5；1.8×10⁶',explanation:'W=Pt=1kW×0.5h=0.5kW·h。Q=W(纯电阻)=0.5×3.6×10⁶=1.8×10⁶J。电炉是纯电阻用电器→电能全部转化为内能→Q=W。',source:'2026精练·电能热量计算'},
  { id:'pd11',kp:'压强浮力',type:'fill',difficulty:'medium',text:'一艘轮船从长江驶入大海，所受浮力____，排开水的体积____。(变大/变小/不变)(ρ海水>ρ江水)',options:null,answer:'不变；变小',explanation:'轮船始终漂浮→F浮=G(不变)。F浮=ρ液gV排，ρ海水>ρ江水→V排海水<V排江水→排开体积变小→船身上浮一些。',source:'2026精练·轮船浮力变化'},
  { id:'pd12',kp:'力学基础',type:'solution',difficulty:'medium',text:'小明用弹簧测力计拉一木块在水平桌面上做匀速直线运动，测力计示数2N。\n(1)木块受到的摩擦力是多少？\n(2)若拉力增大到3N，木块做什么运动？摩擦力是多少？\n(3)在木块上加砝码后重做实验，摩擦力变大说明了什么？',options:null,answer:'(1)2N；(2)加速运动，摩擦力仍为2N；(3)压力越大摩擦力越大(滑动摩擦力与压力成正比)',explanation:'(1)匀速→f=F=2N。(2)F=3N>f→加速。f是滑动摩擦力→与拉力无关→仍为2N(压力和接触面粗糙程度不变)。(3)加砝码→压力↑→f↑→说明滑动摩擦力与压力有关。',source:'2026精练·摩擦力综合'}
]);

push(SUBJECTS.chemistry.questions,[
  { id:'cd1',kp:'物质变化',type:'choice',difficulty:'medium',text:'下列化学用语书写正确的是(  )',options:['两个氢分子:2H','镁离子:Mg+2','氧化铁:FeO','两个氮原子:2N'],answer:'D',explanation:'A:2H₂→2个氢分子(H₂是分子)。B:Mg²⁺→离子符号数字在前符号在后。C:氧化铁是Fe₂O₃(Fe为+3价)。D正确。',source:'2026精练·化学用语'},
  { id:'cd2',kp:'空气氧气',type:'choice',difficulty:'easy',text:'空气中含量第二多的气体是(  )',options:['氮气','氧气','二氧化碳','稀有气体'],answer:'B',explanation:'空气成分(体积):N₂ 78% > O₂ 21% > 稀有气体 0.94% > CO₂ 0.03%。O₂含量排第二。',source:'2026精练·空气成分排序'},
  { id:'cd3',kp:'金属',type:'choice',difficulty:'medium',text:'下列金属不能与稀盐酸反应的是(  )',options:['Fe','Zn','Cu','Mg'],answer:'C',explanation:'金属活动性顺序中Cu排在H之后→不能置换酸中的氢→不与稀盐酸反应。',source:'2026精练·金属与酸反应'},
  { id:'cd4',kp:'酸碱盐',type:'fill',difficulty:'medium',text:'复分解反应发生的条件是:生成物中有____或____或____。',options:null,answer:'沉淀；气体；水',explanation:'复分解反应条件(至少满足一条):①生成沉淀②生成气体③生成水(或弱电解质)。',source:'2026精练·复分解条件'},
  { id:'cd5',kp:'水与溶液',type:'choice',difficulty:'medium',text:'欲将不饱和KNO₃溶液变为饱和，不可行的方法是(  )',options:['加KNO₃固体','蒸发溶剂','降低温度','增加溶剂'],answer:'D',explanation:'不饱和→饱和方法:加溶质/蒸发溶剂/降温(KNO₃溶解度随温度↓而↓)。增加溶剂→更不饱和→D不可行。',source:'2026精练·饱和不饱和转化'},
  { id:'cd6',kp:'化学与生活',type:'choice',difficulty:'easy',text:'下列富含蛋白质的是(  )',options:['米饭','苹果','鸡蛋','植物油'],answer:'C',explanation:'米饭→糖类(淀粉)。苹果→维生素、糖类。鸡蛋→蛋白质。植物油→油脂。',source:'2026精练·营养素来源'},
  { id:'cd7',kp:'碳及其化合物',type:'fill',difficulty:'medium',text:'CO和CO₂性质不同的根本原因是____。CO具有____性，可用于冶炼金属；CO₂可用于灭火是因为它____。',options:null,answer:'分子构成不同(1个CO分子含1个O原子,1个CO₂分子含2个O原子)；还原；不能燃烧也不支持燃烧，密度比空气大',explanation:'分子是保持物质化学性质的最小粒子。CO和CO₂分子不同→化学性质不同。CO有还原性→与金属氧化物反应。CO₂不燃烧不支持燃烧+密度>空气→覆盖隔绝O₂灭火。',source:'2026精练·碳氧化物比较'},
  { id:'cd8',kp:'酸碱盐',type:'fill',difficulty:'easy',text:'酸+H⁺使紫色石蕊变____色；碱+OH⁻使紫色石蕊变____色，使无色酚酞变____色。',options:null,answer:'红；蓝；红',explanation:'H⁺使石蕊变红，酚酞不变色。OH⁻使石蕊变蓝，酚酞变红。这是酸碱指示剂的基本变色规律。',source:'2026精练·指示剂'},
  { id:'cd9',kp:'实验探究',type:'choice',difficulty:'medium',text:'关于过滤操作错误的是(  )',options:['滤纸边缘低于漏斗边缘','液面低于滤纸边缘','用玻璃棒在漏斗中搅拌','漏斗下端紧贴烧杯内壁'],answer:'C',explanation:'过滤"一贴二低三靠"。C错:不能用玻璃棒搅拌→会戳破滤纸。玻璃棒作用是引流。',source:'2026精练·过滤操作'},
  { id:'cd10',kp:'酸碱盐',type:'fill',difficulty:'medium',text:'写出下列物质的俗称:NaOH____，CaO____，Ca(OH)₂____，Na₂CO₃____，NaHCO₃____。',options:null,answer:'烧碱/火碱/苛性钠；生石灰；熟石灰/消石灰；纯碱/苏打；小苏打',explanation:'常见物质俗名必背。注意:纯碱是Na₂CO₃(盐不是碱！因其水溶液呈碱性而得名)。',source:'2026精练·物质俗名'},
  { id:'cd11',kp:'碳及其化合物',type:'solution',difficulty:'medium',text:'如何鉴别CO和CO₂两种气体？请写出三种不同的方法。',options:null,answer:'①通入澄清石灰水:CO₂使石灰水变浑浊，CO不变。②点燃:CO可燃(蓝色火焰)，CO₂不可燃。③通入紫色石蕊溶液:CO₂使石蕊变红(CO₂+H₂O=H₂CO₃)，CO不变色。④通过灼热CuO:CO使CuO变Cu(黑色变红色)，CO₂不能。',explanation:'检验气体需用特征反应。CO₂用石灰水是其专属检验方法。CO的检验常用还原性(与CuO/Fe₂O₃反应)或可燃性。',source:'2026精练·CO和CO₂鉴别'}
]);

push(SUBJECTS.politics.questions,[
  { id:'zd1',kp:'成长与自我',type:'choice',difficulty:'easy',text:'"苟日新，日日新，又日新。"启示我们(  )',options:['只关注外在形象','不断自我更新做更好的自己','不必改变自己','每天换新衣服'],answer:'B',explanation:'这句话出自《大学》，意思是不断自我更新和完善。启示我们要做更好的自己，不断进步。',source:'2026精练·做更好的自己'},
  { id:'zd2',kp:'友谊与交往',type:'choice',difficulty:'easy',text:'新型师生关系是(  )',options:['管理与被管理','权威与服从','亦师亦友教学相长','放任不管'],answer:'C',explanation:'新型师生关系：教学相长、亦师亦友。彼此尊重、相互关心、携手共进。',source:'2026精练·师生关系'},
  { id:'zd3',kp:'集体与法治',type:'choice',difficulty:'medium',text:'我国未成年人保护法规定，不满____周岁的未成年人为无民事行为能力人。',options:['8','14','16','18'],answer:'A',explanation:'《民法典》:不满8周岁为无民事行为能力人。8-18周岁为限制民事行为能力人(16周岁以上以自己劳动收入为主要生活来源的视为完全民事行为能力人)。',source:'2026精练·民事行为能力'},
  { id:'zd4',kp:'社会与规则',type:'choice',difficulty:'medium',text:'刑罚分为主刑和附加刑。下列属于附加刑的是(  )',options:['管制','拘役','有期徒刑','剥夺政治权利'],answer:'D',explanation:'主刑:管制、拘役、有期徒刑、无期徒刑、死刑。附加刑:罚金、剥夺政治权利、没收财产、驱逐出境。',source:'2026精练·刑罚种类'},
  { id:'zd5',kp:'国家与制度',type:'choice',difficulty:'easy',text:'我国的最高国家权力机关是(  )',options:['国务院','全国人民代表大会','最高人民法院','中央军事委员会'],answer:'B',explanation:'全国人大是最高国家权力机关。国务院是最高行政机关(中央人民政府)。最高人民法院是最高审判机关。',source:'2026精练·国家机关'},
  { id:'zd6',kp:'创新与发展',type:'choice',difficulty:'medium',text:'下列关于创新的说法错误的是(  )',options:['创新是引领发展的第一动力','科技创新是综合国力竞争的决定性因素','生活处处有创新','创新只是科学家的事与普通人无关'],answer:'D',explanation:'创新不只是科学家的事，每个人都可以是创新者。生活处处有创新，创新让生活更美好。',source:'2026精练·创新概念'},
  { id:'zd7',kp:'文化与自信',type:'fill',difficulty:'easy',text:'中华文化的精髓是____。中华民族的灵魂是____。',options:null,answer:'中华传统美德；民族精神',explanation:'中华传统美德是中华文化的精髓。民族精神是民族的"魂魄"，是中华民族的灵魂。',source:'2026精练·文化精髓'},
  { id:'zd8',kp:'世界与中国',type:'choice',difficulty:'medium',text:'构建人类命运共同体，需要世界各国(  )',options:['坚持对话协商共建共享合作共赢交流互鉴绿色低碳','搞霸权主义强权政治','以邻为壑转嫁危机','推行单边主义保护主义'],answer:'A',explanation:'五个维度:持久和平(对话协商)、普遍安全(共建共享)、共同繁荣(合作共赢)、开放包容(交流互鉴)、清洁美丽(绿色低碳)。',source:'2026精练·人类命运共同体'},
  { id:'zd9',kp:'青春与情绪',type:'choice',difficulty:'easy',text:'青春期心理发展的特点不包括(  )',options:['自我意识增强','情感丰富且易变','完全成熟稳定','性意识萌发'],answer:'C',explanation:'青春期心理特点:自我意识增强、情绪波动大、性意识萌发、独立意识增强。"完全成熟稳定"不是青春期特点。',source:'2026精练·青春期心理'},
  { id:'zd10',kp:'国家与制度',type:'choose',difficulty:'medium',text:'我国宪法规定，____是中国特色社会主义最本质的特征。',options:['人民当家作主','中国共产党领导','依法治国','以德治国'],answer:'B',explanation:'中国共产党领导是中国特色社会主义最本质的特征，是中国特色社会主义制度的最大优势。',source:'2026精练·党的领导'},
  { id:'zd11',kp:'集体与法治',type:'fill',difficulty:'medium',text:'宪法的基本原则是____和____。',options:null,answer:'国家一切权力属于人民；尊重和保障人权',explanation:'宪法两大基本原则:①国家一切权力属于人民(人民主权)；②国家尊重和保障人权。',source:'2026精练·宪法原则'}
]);

console.log('[精选题库五] 已加载');
})();
