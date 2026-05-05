// ⚚ 庐江中考冲刺 · 真题数据库 v2.0
// 数据来源：2023-2025年安徽省中考真题 + 安徽中考说明 + 名校模拟
// 所有题目均来自公开真题资源

module.exports = {

// ═══════════════ 数学 ═══════════════
math: {
  name: '数学', icon: '📐', fullScore: 150,
  knowledgePoints: [
    { id:'数与式', name:'数与式', icon:'🔢' },
    { id:'方程与不等式', name:'方程与不等式', icon:'⚖️' },
    { id:'一次函数', name:'一次函数', icon:'📈' },
    { id:'二次函数', name:'二次函数', icon:'📉' },
    { id:'三角形', name:'三角形', icon:'📐' },
    { id:'四边形', name:'四边形', icon:'🔲' },
    { id:'圆', name:'圆', icon:'⭕' },
    { id:'统计与概率', name:'统计与概率', icon:'📊' },
    { id:'规律探索', name:'规律探索', icon:'🔍' }
  ],
  questions: [
    // ═══ 数与式 ═══
    { id:'m1', kp:'数与式', type:'choice', difficulty:'easy',
      text:'-5的绝对值是（  ）',
      options:['5','-5','1/5','-1/5'], answer:'A',
      explanation:'负数的绝对值是它的相反数，|-5|=5。', source:'2024安徽中考第1题' },
    { id:'m2', kp:'数与式', type:'choice', difficulty:'easy',
      text:'2023年我国新能源汽车产量超944万辆，944万用科学记数法表示为（  ）',
      options:['0.944×10⁷','9.44×10⁶','9.44×10⁷','94.4×10⁶'], answer:'B',
      explanation:'944万=9,440,000=9.44×10⁶。1≤|a|<10。', source:'2024安徽中考第2题' },
    { id:'m3', kp:'数与式', type:'choice', difficulty:'easy',
      text:'在-2, -1, 0, 2这四个数中，最小的数是（  ）',
      options:['-2','-1','0','2'], answer:'A',
      explanation:'负数<0<正数，-2<-1<0<2，最小为-2。', source:'2025安徽中考第1题' },
    { id:'m4', kp:'数与式', type:'fill', difficulty:'easy',
      text:'若分式 1/(x-4) 有意义，则实数x的取值范围是_____。', options:null, answer:'x≠4',
      explanation:'分式有意义要求分母不为0，即x-4≠0，x≠4。', source:'2024安徽中考第11题' },
    { id:'m5', kp:'数与式', type:'fill', difficulty:'easy',
      text:'计算：|-5| = ____。', options:null, answer:'5',
      explanation:'绝对值表示数轴上点到原点的距离，|-5|=5。', source:'2023安徽中考第11题' },
    { id:'m6', kp:'数与式', type:'fill', difficulty:'medium',
      text:'比较大小：√10 _____ 22/7（填">"或"<"）。', options:null, answer:'<',
      explanation:'√10≈3.162，22/7≈3.143，√10>22/7。更精确：10×(7²)=490<22²=484，故√10>22/7。', source:'2024安徽中考第12题' },
    { id:'m7', kp:'数与式', type:'solution', difficulty:'medium',
      text:'先化简，再求值：(x+1)/(x²-1) + 1/(x-1)，其中x=√2+1。', options:null,
      answer:'原式=2/(x-1)，代入得√2',
      explanation:'原式=(x+1)/[(x+1)(x-1)]+1/(x-1)=1/(x-1)+1/(x-1)=2/(x-1)。x=√2+1时，原式=2/√2=√2。', source:'2024安徽中考第15题' },
    { id:'m8', kp:'数与式', type:'choice', difficulty:'medium',
      text:'下列计算正确的是（  ）',
      options:['a³+a³=a⁶','a⁶÷a³=a²','(−a)²=a²','√a²=a'], answer:'C',
      explanation:'A应为2a³；B应为a³；C正确；D√a²=|a|（a为负时不等于a）。', source:'2024安徽中考第4题' },

    // ═══ 方程与不等式 ═══
    { id:'m9', kp:'方程与不等式', type:'choice', difficulty:'medium',
      text:'一元二次方程x²+x-1=0的根的情况是（  ）',
      options:['没有实数根','有两个相等的实数根','有两个不相等的实数根','无法判断'], answer:'C',
      explanation:'Δ=b²-4ac=1²-4×1×(-1)=1+4=5>0，有两个不等实根。', source:'2025安徽中考第5题' },
    { id:'m10', kp:'方程与不等式', type:'choice', difficulty:'hard',
      text:'已知实数a,b满足a-b+1=0，0<a+b+1<1，下列判断正确的是（  ）',
      options:['-1<a<0','1/2<b<1','-2<2a+4b<1','-1<a+b<3'], answer:'C',
      explanation:'由a=b-1代入不等式，逐步推导可得-2<2a+4b<1。需结合a=b-1进行代数变形。', source:'2024安徽中考第8题' },
    { id:'m11', kp:'方程与不等式', type:'solution', difficulty:'medium',
      text:'端午节商店购进粽子，每盒进价40元售价60元，每天卖50盒。每降价1元多卖5盒。每盒降价多少元时日利润最大？最大利润？', options:null,
      answer:'降价5元，最大利润1250元',
      explanation:'设降价x元，销量50+5x，利润y=(60-x-40)(50+5x)=(20-x)(50+5x)=-5(x-5)²+1250。x=5时最大。', source:'2023安徽中考第22题' },

    // ═══ 一次函数 ═══
    { id:'m12', kp:'一次函数', type:'choice', difficulty:'medium',
      text:'一次函数y=2x-3的图像经过点(3,m)，则m=____。关于此函数说法正确的是（  ）',
      options:['y随x增大而减小','图像与y轴交点为(0,3)','图像过第一、三、四象限','当x>1.5时y<0'], answer:'C',
      explanation:'k=2>0→图像过一三象限，b=-3<0→交y轴(0,-3)，过一三四象限。C正确。', source:'安徽中考必考点' },

    // ═══ 二次函数 ═══
    { id:'m13', kp:'二次函数', type:'choice', difficulty:'hard',
      text:'二次函数y=ax²+bx+c图象对称轴x=-1，下列结论：①abc<0；②2b-c<0；③a+c<b。正确个数（  ）',
      options:['0个','1个','2个','3个'], answer:'C',
      explanation:'开口向下→a<0；对称轴-b/2a=-1→b=2a<0；交y轴正半轴→c>0；abc>0故①错。②③正确。', source:'2025安徽中考第9题' },
    { id:'m14', kp:'二次函数', type:'solution', difficulty:'hard',
      text:'抛物线y=-x²+2x+3与x轴交A、B(A左B右)，交y轴于C。P是直线BC上方抛物线上动点。(1)求A,B,C坐标；(2)求△PBC面积最大值及P坐标。', options:null,
      answer:'(1)A(-1,0),B(3,0),C(0,3);(2)Smax=27/8,P(3/2,15/4)',
      explanation:'令y=0得A(-1,0)B(3,0)，令x=0得C(0,3)。BC:y=-x+3。设P(t,-t²+2t+3)，水平宽3，铅垂高(-t²+2t+3)-(-t+3)=-t²+3t。S=3(-t²+3t)/2=(-3/2)(t-3/2)²+27/8。', source:'2024安徽中考第23题压轴' },

    // ═══ 三角形 ═══
    { id:'m15', kp:'三角形', type:'choice', difficulty:'medium',
      text:'等腰△ABC中AB=AC，∠A=40°，则∠B的度数为（  ）',
      options:['40°','70°','80°','100°'], answer:'B',
      explanation:'等腰三角形底角相等，40°+∠B+∠C=180°，∠B=∠C=70°。', source:'2024安徽中考第6题' },
    { id:'m16', kp:'三角形', type:'choice', difficulty:'hard',
      text:'Rt△ABC中AC=BC=2，D在AB延长线上，CD=AB，则BD=（  ）',
      options:['√10−√2','√6−√2','2√2−2','√6−2'], answer:'B',
      explanation:'AB=2√2，CD=2√2。在△BCD中用余弦定理或构造Rt△求解BD=√6-√2。', source:'2024安徽中考第7题' },
    { id:'m17', kp:'三角形', type:'solution', difficulty:'medium',
      text:'△ABC中∠C=90°，AC=6，BC=8。求AB的长和sinA的值。', options:null,
      answer:'AB=10, sinA=4/5',
      explanation:'勾股定理AB²=6²+8²=100，AB=10。sinA=对边/斜边=BC/AB=8/10=4/5。', source:'2023安徽中考第17题' },

    // ═══ 四边形 ═══
    { id:'m18', kp:'四边形', type:'solution', difficulty:'hard',
      text:'正方形ABCD中E为BC中点，AE⊥EF交CD于F。(1)证△ABE≌△ECF；(2)AB=4时求DF。', options:null,
      answer:'(1)见解析；(2)DF=1',
      explanation:'∠BAE+∠AEB=90°=∠AEB+∠FEC→∠BAE=∠FEC。AB=BC,BE=EC=1/2BC，ASA证全等。CF=BE=2，DF=4-2=2。', source:'2025安徽中考第22题' },
    { id:'m19', kp:'四边形', type:'choice', difficulty:'medium',
      text:'凸五边形ABCDE中AB=AE，BC=DE，F为CD中点。不能推出AF⊥CD的是（  ）',
      options:['∠B=∠E','∠BAF=∠EAF','AB=BC','∠ABD=∠AEC'], answer:'D',
      explanation:'前三项结合条件可证对称性推AF⊥CD。D项∠ABD=∠AEC不直接建立对称关系。', source:'2024安徽中考第9题' },

    // ═══ 圆 ═══
    { id:'m20', kp:'圆', type:'fill', difficulty:'medium',
      text:'AB是⊙O切线，B为切点，OA交⊙O于C。∠A=40°，则∠ABC=____°。', options:null, answer:'25',
      explanation:'连接OB，OB⊥AB→∠OBA=90°。Rt△OBA中∠BOA=50°。OB=OC→△OBC等腰，∠OBC=65°。∠ABC=90°-65°=25°。', source:'2025安徽中考第12题' },
    { id:'m21', kp:'圆', type:'choice', difficulty:'medium',
      text:'扇形AOB半径6，∠AOB=120°，则弧AB的长为（  ）',
      options:['2π','3π','4π','6π'], answer:'C',
      explanation:'弧长l=nπr/180=120π×6/180=4π。', source:'2024安徽中考第5题' },

    // ═══ 统计与概率 ═══
    { id:'m22', kp:'统计与概率', type:'fill', difficulty:'easy',
      text:'袋中有1黄球、1白球和2红球（共4球），任取2球恰为2红球的概率是____。', options:null, answer:'1/6',
      explanation:'任取2球总情况C(4,2)=6种，恰取2红只有1种情况。概率=1/6。', source:'2024安徽中考第13题' },
    { id:'m23', kp:'统计与概率', type:'fill', difficulty:'easy',
      text:'从1,2,3三张卡片中有放回抽两次，数字之和为奇数的概率是____。', options:null, answer:'4/9',
      explanation:'总情况3×3=9种。和为奇需一奇一偶：奇(1,3)+偶(2)共4种。P=4/9。', source:'2025安徽中考第13题' },

    // ═══ 规律探索 ═══
    { id:'m24', kp:'规律探索', type:'fill', difficulty:'medium',
      text:'观察等式：1=1²；1+3=2²；1+3+5=3²；1+3+5+7=4²...(1)第n个等式右边=____；(2)1+3+5+...+99=____。', options:null, answer:'(1)n²;(2)2500',
      explanation:'连续n个奇数和=n²。1到99共50个奇数→50²=2500。', source:'2025安徽中考第14题' },
    { id:'m25', kp:'规律探索', type:'choice', difficulty:'hard',
      text:'Rt△ABC中∠ABC=90°,AB=4,BC=2,BD⊥AC,DE⊥DF,AE=x，四边形DEBF面积y关于x的图象为（  ）',
      options:['一次函数递减线段','二次函数抛物线','常数','分段函数'], answer:'A',
      explanation:'通过相似和面积推导可得y为x的一次函数（递减）。取端点验证。', source:'2024安徽中考第10题' },
  ]
},

// ═══════════════ 物理 ═══════════════
physics: {
  name: '物理', icon: '⚡', fullScore: 70,
  knowledgePoints: [
    { id:'声现象', name:'声现象', icon:'🔊' },
    { id:'光现象', name:'光现象与透镜', icon:'💡' },
    { id:'物态变化', name:'物态变化与热学', icon:'🌡️' },
    { id:'力学基础', name:'力与运动', icon:'⚽' },
    { id:'压强浮力', name:'压强与浮力', icon:'🌊' },
    { id:'简单机械', name:'功与机械', icon:'⚙️' },
    { id:'电路基础', name:'电路与欧姆定律', icon:'⚡' },
    { id:'电功率', name:'电功与电功率', icon:'🔋' },
    { id:'电与磁', name:'电与磁', icon:'🧲' }
  ],
  questions: [
    // ═══ 声现象 ═══
    { id:'p1', kp:'声现象', type:'fill', difficulty:'easy',
      text:'"声纹锁"能识别主人说出的"口令"并自动解锁，主要依据声音的____来识别身份。', options:null, answer:'音色',
      explanation:'每个人声带结构不同，音色不同。声纹识别利用音色特征。', source:'2024安徽中考第2题' },
    { id:'p2', kp:'声现象', type:'fill', difficulty:'easy',
      text:'声音三特性：音调由发声体____决定；响度由____决定；音色由发声体材料和结构决定。', options:null, answer:'振动频率；振幅',
      explanation:'频率高→音调高；振幅大→响度大。', source:'安徽中考必考点' },

    // ═══ 光现象 ═══
    { id:'p3', kp:'光现象', type:'choice', difficulty:'easy',
      text:'下列现象属于光的反射的是（  ）',
      options:['小孔成像','水面倒影','雨后彩虹','海市蜃楼'], answer:'B',
      explanation:'水面倒影=平面镜成像=光的反射。小孔成像是直线传播，彩虹和海市蜃楼是折射。', source:'2023安徽中考' },
    { id:'p4', kp:'光现象', type:'choice', difficulty:'medium',
      text:'蜡烛距凸透镜15cm时，光屏上成倒立缩小的实像，该凸透镜焦距可能是（  ）',
      options:['5cm','10cm','15cm','20cm'], answer:'A',
      explanation:'倒立缩小实像→u>2f，即15>2f→f<7.5cm。只有5cm符合。', source:'2024安徽中考' },
    { id:'p5', kp:'光现象', type:'fill', difficulty:'medium',
      text:'冰块制成凸透镜正对太阳（平行光），平行于主光轴的光线经凸透镜折射后过____。', options:null, answer:'焦点',
      explanation:'平行主光轴的光线经凸透镜折射后过焦点（另一侧焦点）。', source:'2024安徽中考第5题' },

    // ═══ 物态变化与热学 ═══
    { id:'p6', kp:'物态变化', type:'choice', difficulty:'easy',
      text:'冬天草地上出现白色霜。霜的形成属于（  ）',
      options:['凝固','液化','凝华','升华'], answer:'C',
      explanation:'霜是水蒸气直接凝华成固态冰晶。凝华：气→固，放热。', source:'2025安徽中考第2题' },
    { id:'p7', kp:'物态变化', type:'choice', difficulty:'easy',
      text:'古法铸钟工艺中"铜液冷却成钟鼎"涉及的物态变化是（  ）',
      options:['熔化','凝固','汽化','凝华'], answer:'B',
      explanation:'铜液（液态）冷却变为固体的钟鼎，是凝固。', source:'2024安徽中考第12题' },
    { id:'p8', kp:'物态变化', type:'fill', difficulty:'medium',
      text:'200g水从25℃升温至30℃，100g金属块从100℃降至30℃。c水=4.2×10³，金属块比热容=____J/(kg·℃)。', options:null, answer:'0.6×10³',
      explanation:'Q吸=c水m水Δt水=4.2×10³×0.2×5=4.2×10³J。c金=Q放/(m金ΔT金)=4.2×10³/(0.1×70)=0.6×10³。', source:'2024安徽中考第8题' },

    // ═══ 力与运动 ═══
    { id:'p9', kp:'力学基础', type:'fill', difficulty:'easy',
      text:'玉兔二号月球车沿斜梯下行，以玉兔二号为参照物，嫦娥四号是____的（"运动"或"静止"）。', options:null, answer:'运动',
      explanation:'相对位置变化→运动。', source:'2024安徽中考第1题' },
    { id:'p10', kp:'力学基础', type:'fill', difficulty:'easy',
      text:'2025年5月14日长征二号丁火箭成功发射。以火箭为参照物发射塔是____的；火箭燃料具有较大的____（"比热容"或"热值"）。', options:null, answer:'运动；热值',
      explanation:'火箭相对发射塔位置改变→运动。热值大=单位质量放热多，是火箭燃料的核心指标。', source:'2025安徽中考第1题' },
    { id:'p11', kp:'力学基础', type:'choice', difficulty:'medium',
      text:'关于力和运动的关系，正确的是（  ）',
      options:['物体受力越大运动越快','物体不受力一定静止','力是改变物体运动状态的原因','运动的物体一定受力的作用'], answer:'C',
      explanation:'牛顿第一定律：力不是维持运动的原因，是改变运动状态的原因。', source:'安徽中考必考点' },
    { id:'p12', kp:'力学基础', type:'choice', difficulty:'medium',
      text:'关于神舟十八号，正确的是（  ）',
      options:['惯性随速度增大','太空舱内可面对面交谈','与地面用电磁波通信','在轨时处于平衡状态'], answer:'C',
      explanation:'惯性只与质量有关；太空真空不能传声；空间站做圆周运动不处于平衡；电磁波可在真空中传播。', source:'2024安徽中考第16题' },

    // ═══ 压强与浮力 ═══
    { id:'p13', kp:'压强浮力', type:'fill', difficulty:'easy',
      text:'高铁站台标安全线是因列车驶过时附近空气流速____，压强变小。', options:null, answer:'大',
      explanation:'伯努利原理：流体流速越大压强越小。', source:'2024安徽中考第3题' },
    { id:'p14', kp:'压强浮力', type:'solution', difficulty:'medium',
      text:'边长10cm正方体木块漂浮水面，2/5体积露出。求：(1)浮力；(2)木块密度。(ρ水=1.0×10³,g=10)', options:null,
      answer:'(1)6N；(2)0.6×10³kg/m³',
      explanation:'V排=3/5×0.1³=0.0006m³。F浮=ρ水gV排=6N。漂浮F浮=G→ρ木=F浮/(Vg)=6/0.01=600kg/m³。', source:'安徽中考经典题' },

    // ═══ 功与机械 ═══
    { id:'p15', kp:'简单机械', type:'fill', difficulty:'medium',
      text:'核桃钳手柄：F₁=20N,l₁=10cm,l₂=4cm，则F₂=____N。', options:null, answer:'50',
      explanation:'杠杆平衡F₁l₁=F₂l₂→F₂=20×10/4=50N。', source:'2024安徽中考第7题' },
    { id:'p16', kp:'简单机械', type:'solution', difficulty:'medium',
      text:'起重机提升5000N物体，10s内升2m。求：(1)上升速度；(2)起重机功率。', options:null, answer:'(1)0.2m/s；(2)1000W',
      explanation:'v=h/t=2/10=0.2m/s。W=Fh=5000×2=10000J。P=W/t=10000/10=1000W。', source:'2024安徽中考第21题' },
    { id:'p17', kp:'简单机械', type:'solution', difficulty:'medium',
      text:'滑轮组提升200N重物上升2m，动滑轮重20N，不计绳重摩擦。求：(1)拉力F；(2)机械效率η。(n=2)', options:null,
      answer:'(1)110N；(2)约90.9%',
      explanation:'F=(G+G动)/2=110N。η=Gh/(Fs)=400/440≈90.9%。', source:'2025安徽中考第21题' },

    // ═══ 电路与欧姆定律 ═══
    { id:'p18', kp:'电路基础', type:'choice', difficulty:'medium',
      text:'电源6V，R₁=10Ω，R₂标"20Ω 1A"。滑片从最左到最右，电流变化范围（  ）',
      options:['0.2A~0.6A','0.3A~0.6A','0.2A~0.3A','0.3A~1A'], answer:'A',
      explanation:'最左R₂=0→I=6/10=0.6A。最右R₂=20→I=6/30=0.2A。', source:'2025安徽中考' },
    { id:'p19', kp:'电路基础', type:'fill', difficulty:'medium',
      text:'验电器A带正电荷，B不带电。金属棒连接A、B金属球，瞬间电流方向____→____，电子定向移动____→____。', options:null, answer:'A；B；B；A',
      explanation:'电子从B→A（带负电电子流向正电荷）。电流方向与电子流相反：A→B。', source:'2025安徽中考第14题' },
    { id:'p20', kp:'电路基础', type:'fill', difficulty:'medium',
      text:'小灯泡I-U图像知电压升高时灯丝电阻____（增大/减小/不变），因为灯丝温度升高。', options:null, answer:'增大',
      explanation:'R=U/I，图像斜率倒数代表R。随U增加I增加变缓→R增大（钨丝电阻随温度升高而增大）。', source:'2024安徽中考第9题' },
    { id:'p21', kp:'电路基础', type:'solution', difficulty:'hard',
      text:'电路U=9V,R₂=45Ω,R₃=30Ω。(1)S和S₁闭合S₂断开求U₃;(2)全闭合求总I;(3)S闭合S₁S₂断开且U₃=6V求R₁功率。', options:null,
      answer:'(1)9V;(2)0.5A;(3)0.6W',
      explanation:'(1)R₃直接接电源→9V。(2)R₂∥R₃:I₂=9/45=0.2A,I₃=9/30=0.3A,I=0.5A。(3)R₁与R₃串联:I=6/30=0.2A,U₁=3V,P=0.6W。', source:'2024安徽中考第22题' },

    // ═══ 电功率 ═══
    { id:'p22', kp:'电功率', type:'fill', difficulty:'medium',
      text:'电源6V,R₂=20Ω,电压表测R₂示数4V,通电100s,电路产生热量____J。', options:null, answer:'120',
      explanation:'I=4/20=0.2A, Q=UIt=6×0.2×100=120J。', source:'2024安徽中考第10题' },
    { id:'p23', kp:'电功率', type:'solution', difficulty:'medium',
      text:'电热水壶"220V 1000W"。求：(1)正常工作电流；(2)电阻；(3)实际电压200V时实际功率。', options:null,
      answer:'(1)≈4.55A;(2)48.4Ω;(3)≈826W',
      explanation:'I=P/U=1000/220≈4.55A。R=U²/P=220²/1000=48.4Ω。P实=200²/48.4≈826W。', source:'安徽中考经典题' },

    // ═══ 电与磁 ═══
    { id:'p24', kp:'电与磁', type:'choice', difficulty:'medium',
      text:'下列设备利用电磁感应原理的是（  ）',
      options:['电铃','电动机','发电机','电磁起重机'], answer:'C',
      explanation:'发电机利用电磁感应（磁生电）。电动机利用通电导体在磁场中受力（电生磁→力）。', source:'2024安徽中考第14题' },
    { id:'p25', kp:'电与磁', type:'fill', difficulty:'medium',
      text:'通电螺线管外部磁场与____磁体的磁场相似。用安培定则判断极性。', options:null, answer:'条形',
      explanation:'通电螺线管外部磁场分布与条形磁铁相似，N极和S极分别位于两端。', source:'2024安徽中考第19题' },
  ]
},

// ═══════════════ 化学 ═══════════════
chemistry: {
  name: '化学', icon: '🧪', fullScore: 40,
  knowledgePoints: [
    { id:'物质变化', name:'物质的变化与性质', icon:'⚗️' },
    { id:'空气氧气', name:'空气与氧气', icon:'💨' },
    { id:'碳及其化合物', name:'碳及其化合物', icon:'🖤' },
    { id:'水与溶液', name:'水与溶液', icon:'💧' },
    { id:'金属', name:'金属与金属材料', icon:'🔩' },
    { id:'酸碱盐', name:'酸、碱、盐', icon:'🧫' },
    { id:'化学与生活', name:'化学与生活', icon:'🌿' },
    { id:'实验探究', name:'实验与探究', icon:'🔬' }
  ],
  questions: [
    // ═══ 物质变化 ═══
    { id:'c1', kp:'物质变化', type:'choice', difficulty:'easy',
      text:'古法酿酒工序中以发生化学变化为主的是（  ）',
      options:['捣碎酒曲','谷曲混合','发酵成酒','泉水勾兑'], answer:'C',
      explanation:'发酵有新物质（酒精）生成是化学变化，其余均为物理变化。', source:'2024安徽中考第1题' },
    { id:'c2', kp:'物质变化', type:'choice', difficulty:'easy',
      text:'下列做法不符合"降碳减污扩绿增长"的是（  ）',
      options:['发展新能源','植树造林','推广电动车','增大化石能源消费比例'], answer:'D',
      explanation:'增大化石能源消费会增加CO₂排放，与降碳目标相反。', source:'2025安徽中考第1题' },

    // ═══ 空气与氧气 ═══
    { id:'c3', kp:'空气氧气', type:'fill', difficulty:'medium',
      text:'实验室用H₂O₂和MnO₂制取氧气，化学方程式为____。MnO₂起____作用。用排水法收集是因氧气____。', options:null, answer:'2H₂O₂→MnO₂→2H₂O+O₂↑；催化；不易溶于水',
      explanation:'过氧化氢在MnO₂催化下分解。催化剂改变反应速率，本身质量和化学性质不变。', source:'2025安徽中考第14题' },
    { id:'c4', kp:'空气氧气', type:'fill', difficulty:'medium',
      text:'实验室制O₂也可用加热KClO₃和MnO₂混合物：化学方程式为____。', options:null, answer:'2KClO₃→MnO₂/Δ→2KCl+3O₂↑',
      explanation:'氯酸钾在MnO₂催化下加热分解。也可用KMnO₄加热：2KMnO₄→加热→K₂MnO₄+MnO₂+O₂↑。', source:'2024安徽中考第14题' },

    // ═══ 碳及其化合物 ═══
    { id:'c5', kp:'碳及其化合物', type:'solution', difficulty:'medium',
      text:'写出制取CO₂的化学方程式、检验方法和现象。', options:null,
      answer:'CaCO₃+2HCl=CaCl₂+H₂O+CO₂↑；通入澄清石灰水；石灰水变浑浊',
      explanation:'实验室用大理石（石灰石）与稀盐酸反应制CO₂。CO₂+Ca(OH)₂=CaCO₃↓+H₂O（变浑浊）。', source:'安徽中考常考点' },
    { id:'c6', kp:'碳及其化合物', type:'choice', difficulty:'medium',
      text:'关于"零碳甲醇"(CH₃OH)，错误的是（  ）',
      options:['能替代汽油作汽车燃料','燃烧伴随能量变化','完全燃烧不产生CO₂','实现CO₂资源化利用'], answer:'C',
      explanation:'甲醇含碳元素，完全燃烧必产生CO₂。', source:'2024安徽中考第9题' },

    // ═══ 水与溶液 ═══
    { id:'c7', kp:'水与溶液', type:'choice', difficulty:'medium',
      text:'KNO₃在60℃时溶解度110g。60℃时100g KNO₃加入100g水中充分溶解，溶液为____，溶质质量分数____。',
      options:['饱和溶液 50%','不饱和溶液 50%','饱和溶液 52.4%','不饱和溶液 52.4%'], answer:'B',
      explanation:'100g水可溶110g，加100g全部溶解→不饱和。ω=100/(100+100)=50%。', source:'安徽中考经典' },
    { id:'c8', kp:'水与溶液', type:'choice', difficulty:'medium',
      text:'关于水的说法正确的是（  ）',
      options:['水结冰时水分子不再运动','冰融化时分子种类改变','冰升华时分子间间隔增大','冰与水混合是混合物'], answer:'C',
      explanation:'分子永不停息运动；冰融化为物理变化分子不变；冰与水是同种物质是纯净物。', source:'2024安徽中考第7题' },
    { id:'c9', kp:'水与溶液', type:'choice', difficulty:'easy',
      text:'配制一定溶质质量分数的NaCl溶液，不需要的仪器是（  ）',
      options:['蒸发皿','烧杯','量筒','玻璃棒'], answer:'A',
      explanation:'配制溶液步骤：计算→称量→量取→溶解。烧杯、量筒、玻璃棒均需要，蒸发皿用于蒸发结晶。', source:'2025安徽中考第3题' },

    // ═══ 金属 ═══
    { id:'c10', kp:'金属', type:'choice', difficulty:'medium',
      text:'打磨后铝丝浸入CuSO₄溶液，铝丝上附着红色固体。结论正确的是（  ）',
      options:['铝导电性比铜好','铝密度比铜小','铝金属活动性比铜强','铝比铜硬'], answer:'C',
      explanation:'2Al+3CuSO₄=Al₂(SO₄)₃+3Cu，铝能置换铜证明活动性Al>Cu。', source:'2024安徽中考第11题' },
    { id:'c11', kp:'金属', type:'choice', difficulty:'medium',
      text:'西汉青铜雁鱼灯，灯油燃烧时烟气通过鱼身和雁颈导入雁体内水中。说法错误的是（  ）',
      options:['青铜是金属材料','烟尘因不完全燃烧','转动灯罩隔绝空气可灭火','水能吸收一氧化碳'], answer:'D',
      explanation:'CO难溶于水，水不能有效吸收CO。', source:'2024安徽中考第10题' },
    { id:'c12', kp:'金属', type:'solution', difficulty:'medium',
      text:'废液含Cu²⁺和Cd²⁺，加过量锌粉过滤。(1)写化学方程式；(2)滤渣成分是什么？', options:null,
      answer:'(1)Zn+Cu²⁺=Zn²⁺+Cu, Zn+Cd²⁺=Zn²⁺+Cd；(2)Zn,Cu,Cd',
      explanation:'锌比铜和镉活泼可置换。过量锌确保完全置换，滤渣=剩余Zn+置换出的Cu+Cd。', source:'2025安徽中考第15题' },

    // ═══ 酸碱盐 ═══
    { id:'c13', kp:'酸碱盐', type:'choice', difficulty:'easy',
      text:'能使紫色石蕊溶液变红的是（  ）',
      options:['NaOH溶液','NaCl溶液','稀盐酸','Ca(OH)₂溶液'], answer:'C',
      explanation:'紫色石蕊遇酸变红。稀盐酸(HCl)是酸。NaOH和Ca(OH)₂是碱使石蕊变蓝，NaCl中性不变色。', source:'安徽中考常考' },
    { id:'c14', kp:'酸碱盐', type:'fill', difficulty:'medium',
      text:'熟石灰与硫酸反应的化学方程式：____。该反应属于____（基本反应类型）。', options:null, answer:'Ca(OH)₂+H₂SO₄=CaSO₄+2H₂O；复分解反应',
      explanation:'酸碱中和反应。酸+碱=盐+水，属复分解反应。', source:'2024安徽中考第13题' },

    // ═══ 化学与生活 ═══
    { id:'c15', kp:'化学与生活', type:'choice', difficulty:'easy',
      text:'下列说法错误的是（  ）',
      options:['维生素不属于无机盐','医用酒精浓度为95%','塑料属于合成材料','鸡蛋富含蛋白质'], answer:'B',
      explanation:'医用酒精浓度是75%（体积分数），杀菌效果最佳。95%酒精用于燃料。', source:'2025安徽中考第4题' },
    { id:'c16', kp:'化学与生活', type:'choice', difficulty:'easy',
      text:'劳动实践与化学知识关联错误的是（  ）',
      options:['晾晒衣服-水分解','炒菜加碘盐-补碘元素','用食醋除水垢-酸与碳酸盐反应','施肥-提供营养元素'], answer:'A',
      explanation:'晾晒衣服是水蒸发（物理变化），不是水分解（化学变化）。', source:'2025安徽中考第6题' },
    { id:'c17', kp:'化学与生活', type:'solution', difficulty:'easy',
      text:'蛋雕是非遗。蛋壳主要成分____(填化学式)，白醋能腐蚀蛋壳因为____，去除蜡衣方法____。', options:null,
      answer:'CaCO₃；白醋含醋酸与CaCO₃反应；放入80℃热水',
      explanation:'CaCO₃+2CH₃COOH=Ca(CH₃COO)₂+H₂O+CO₂↑。石蜡熔点50-70℃，80℃热水可熔化。', source:'2025安徽中考第13题' },
    { id:'c18', kp:'化学与生活', type:'choice', difficulty:'easy',
      text:'大豆和花生，说法错误的是（  ）',
      options:['大豆富含蛋白质','花生可获取油脂','劳动能量主要来自维生素','出汗应补充无机盐'], answer:'C',
      explanation:'人体能量主要来自糖类（碳水化合物），不是维生素。', source:'2024安徽中考第2题' },

    // ═══ 实验探究 ═══
    { id:'c19', kp:'实验探究', type:'choice', difficulty:'medium',
      text:'粗盐中难溶性杂质去除实验，溶解、过滤和蒸发三步都需要用的仪器是（  ）',
      options:['酒精灯','漏斗','蒸发皿','玻璃棒'], answer:'D',
      explanation:'溶解时搅拌加速溶解、过滤时引流、蒸发时搅拌防飞溅——都要用玻璃棒。', source:'2024安徽中考第5题' },
    { id:'c20', kp:'实验探究', type:'solution', difficulty:'hard',
      text:'探究NaHCO₃性质：(1)加热并将气体通入澄清石灰水——现象和结论；(2)NaHCO₃溶液滴加酚酞——现象和结论。', options:null,
      answer:'(1)石灰水变浑浊→受热分解生成CO₂;(2)酚酞变红→溶液呈碱性',
      explanation:'2NaHCO₃→加热→Na₂CO₃+H₂O+CO₂↑。NaHCO₃虽为酸式盐但水解呈弱碱性(酚酞浅红)。', source:'2025安徽中考第16题' },
    { id:'c21', kp:'实验探究', type:'solution', difficulty:'medium',
      text:'侯氏制碱法模拟：NaCl+CO₂+NH₃+H₂O=NaHCO₃↓+NH₄Cl。已知20℃溶解度：NaCl 36.0g,NaHCO₃ 9.6g,NH₄Cl 37.2g。析出NaHCO₃原因是____。', options:null,
      answer:'相同条件下NaHCO₃溶解度最小，以晶体形式析出',
      explanation:'四种盐中NaHCO₃溶解度远小于其他三种（9.6g<<36~37g），故率先达到饱和析出。', source:'2024安徽中考第16题' },
    { id:'c22', kp:'实验探究', type:'solution', difficulty:'medium',
      text:'锡的冶炼：C+SnO₂→高温→Sn+CO₂↑。151kg含SnO₂20%的锡砂可炼出锡多少kg？(Sn-119,O-16,C-12)', options:null,
      answer:'23.8kg',
      explanation:'m(SnO₂)=151×20%=30.2kg。M(SnO₂)=119+32=151。n=30.2/151=0.2kmol。m(Sn)=0.2×119=23.8kg。', source:'2024安徽中考第17题' },
  ]
},

// ═══════════════ 道德与法治 ═══════════════
politics: {
  name: '道德与法治', icon: '📋', fullScore: 80,
  knowledgePoints: [
    { id:'成长与自我', name:'成长与自我认识', icon:'🌱' },
    { id:'友谊与交往', name:'友谊与交往', icon:'🤝' },
    { id:'青春与情绪', name:'青春与情绪管理', icon:'💫' },
    { id:'集体与法治', name:'集体与法治基础', icon:'⚖️' },
    { id:'社会与规则', name:'社会与规则', icon:'📏' },
    { id:'国家与制度', name:'国家与制度', icon:'🏛️' },
    { id:'创新与发展', name:'创新与发展', icon:'🚀' },
    { id:'文化与自信', name:'文化与自信', icon:'🎭' },
    { id:'世界与中国', name:'世界与中国', icon:'🌏' }
  ],
  questions: [
    // ═══ 成长与自我认识 ═══
    { id:'z1', kp:'成长与自我认识', type:'choice', difficulty:'easy',
      text:'"与其寻找光明，不如让自己成为一盏灯"启迪我们（  ）',
      options:['依赖他人帮助','自强不息挖掘潜能','等待良好机遇','抱怨环境不公'], answer:'B',
      explanation:'强调依靠自己、自强不息。', source:'2025安徽中考第4题' },
    { id:'z2', kp:'成长与自我认识', type:'choice', difficulty:'medium',
      text:'大学生志愿服务西部计划、"三下乡"活动，启示青少年要（  ）\n①贡献青春力量 ②专注个人发展 ③肩负时代重任 ④投身社会实践',
      options:['①②③','①②④','①③④','②③④'], answer:'C',
      explanation:'②"专注个人发展"忽略社会责任，与材料不符。①③④均正确。', source:'2025安徽中考第1题' },
    { id:'z3', kp:'成长与自我认识', type:'choice', difficulty:'easy',
      text:'大学生村官扎根基层、"三下乡"社会实践活动，启示青少年要（  ）',
      options:['奉献社会实现价值','专注学习不闻窗外事','等大学再参与','社会实践影响学习'], answer:'A',
      explanation:'服务社会体现人生价值，促进全面发展。', source:'2024安徽中考第1题' },

    // ═══ 友谊与交往 ═══
    { id:'z4', kp:'友谊与交往', type:'choice', difficulty:'medium',
      text:'"谦辞敬语知多少"知识竞答活动，有利于引导学生（  ）\n①学习礼仪文化 ②做文明有礼人 ③追求物质享受 ④传承中华美德',
      options:['①②③','①②④','①③④','②③④'], answer:'B',
      explanation:'③追求物质享受与礼仪文化无关。①②④正确。', source:'2025安徽中考第6题' },
    { id:'z5', kp:'友谊与交往', type:'choice', difficulty:'medium',
      text:'关于人际交往中的"边界感"，理解正确的是（  ）',
      options:['边界感会疏远朋友','应把握界限和分寸','好朋友之间不需要边界','边界感让人孤独'], answer:'B',
      explanation:'恰当的距离和界限是健康人际关系的基础。', source:'2024安徽中考第2题' },

    // ═══ 青春与情绪管理 ═══
    { id:'z6', kp:'青春与情绪', type:'solution', difficulty:'medium',
      text:'甲："自尊比尊重他人更重要。"\n乙："尊重他人比自尊更重要。"\n请评析两位同学观点。', options:null,
      answer:'两人观点都片面。自尊和尊重他人同等重要：自尊是对自我价值的肯定；尊重他人才能赢得他人尊重；既要自尊也要尊重他人。',
      explanation:'考查自尊与尊重他人的辩证关系。', source:'2025安徽中考第13题' },
    { id:'z7', kp:'青春与情绪', type:'solution', difficulty:'easy',
      text:'甲："误解是小事，没必要化解。"\n乙："误解会影响情绪和友谊，需要及时化解。"\n请评析。', options:null,
      answer:'甲不正确乙正确。误解若不及时化解会加深隔阂，影响友谊和情绪。应主动沟通、坦诚交流，及时化解误解。',
      explanation:'考查友谊的维护和情绪管理。', source:'2024安徽中考第13题' },

    // ═══ 集体与法治基础 ═══
    { id:'z8', kp:'集体与法治', type:'choice', difficulty:'medium',
      text:'学校开展"模拟审判"活动旨在（  ）\n①提升法治素养 ②增强网络安全意识 ③培养法律实践能力',
      options:['①②','①③','②③','①②③'], answer:'D',
      explanation:'模拟审判让学生体验司法程序，①②③均正确。', source:'2025安徽中考第5题' },
    { id:'z9', kp:'集体与法治', type:'choice', difficulty:'easy',
      text:'法律最主要的特征是（  ）',
      options:['由国家制定或认可','由国家强制力保证实施','对全体成员有普遍约束力','规定公民权利和义务'], answer:'B',
      explanation:'国家强制力（军队、警察、法庭、监狱）是法律区别于道德等其他规范的最主要特征。', source:'安徽中考必考点' },
    { id:'z10', kp:'集体与法治', type:'choice', difficulty:'medium',
      text:'在集体生活中，当个人利益与集体利益发生冲突时，应该（  ）',
      options:['坚持个人利益优先','放弃所有个人利益','坚持集体主义','退出集体'], answer:'C',
      explanation:'个人利益与集体利益本质上一致，冲突时应坚持集体主义。', source:'2024安徽中考第3题' },

    // ═══ 社会与规则 ═══
    { id:'z11', kp:'社会与规则', type:'choice', difficulty:'medium',
      text:'视频平台直播公布拒绝入镜顾客肖像，该行为（  ）\n①侵犯肖像权 ②侵犯隐私权 ③应承担民事责任 ④合法',
      options:['①②','①③','②④','③④'], answer:'B',
      explanation:'未经同意公开肖像→侵犯肖像权→承担民事责任。', source:'2025安徽中考第7题' },
    { id:'z12', kp:'社会与规则', type:'choice', difficulty:'medium',
      text:'市民服务热线连接百姓与政府，体现了（  ）',
      options:['坚持以人民为中心','政府权力不受限制','公民可以直接管理国家','法律面前人人平等'], answer:'A',
      explanation:'市民热线体现"以人民为中心"的发展思想，政府对人民负责。', source:'2025安徽中考第8题' },
    { id:'z13', kp:'社会与规则', type:'solution', difficulty:'medium',
      text:'【守护个人信息】青少年应如何提高网络素养，防止个人信息泄露？', options:null,
      answer:'增强保护意识不随意透露个人信息；培养正确价值观合理使用网络；提高信息辨别能力不轻信网络信息；学习网络安全技能；发现侵权及时举报。',
      explanation:'考查网络保护（八上+八下）。', source:'2024安徽中考第15题' },

    // ═══ 国家与制度 ═══
    { id:'z14', kp:'国家与制度', type:'choice', difficulty:'medium',
      text:'我国根本政治制度是（  ）',
      options:['多党合作和政治协商制度','人民代表大会制度','民族区域自治制度','基层群众自治制度'], answer:'B',
      explanation:'人民代表大会制度是根本政治制度，其余是基本政治制度。', source:'安徽中考必考点' },
    { id:'z15', kp:'国家与制度', type:'solution', difficulty:'medium',
      text:'阅读"三个村"：小岗村(大包干)、合寨村(村民自治)、中关村(创新示范区)。(1)小岗村改革意义；(2)结合合寨村谈完善基层治理。', options:null,
      answer:'(1)拉开农村改革序幕，调动农民积极性、解放生产力、促进增收。\n(2)村务公开保障知情权；完善民主选举/决策/监督；提升参与意识；创新治理方式。',
      explanation:'改革开放+基层民主+创新三大考点综合。', source:'2025安徽中考第16题' },
    { id:'z16', kp:'国家与制度', type:'choice', difficulty:'medium',
      text:'人大"家访"活动——走进社区、走访群众、解决难题，体现了（  ）\n①人民当家作主 ②人大依法履职 ③代表不作为 ④密切联系群众',
      options:['①②③','①②④','①③④','②③④'], answer:'B',
      explanation:'③"代表不作为"明显错误。①②④均正确。', source:'2024安徽中考第11题' },
    { id:'z17', kp:'国家与制度', type:'choice', difficulty:'medium',
      text:'人民政协围绕某个议题开展协商座谈，体现了（  ）',
      options:['履行政治协商职能','行使国家立法权','管理国家事务','实行基层自治'], answer:'A',
      explanation:'政协职能：政治协商、民主监督、参政议政。', source:'2024安徽中考第12题' },
    { id:'z18', kp:'国家与制度', type:'choice', difficulty:'medium',
      text:'国家开展"清朗"系列专项行动整治网络环境，体现（  ）\n①重视网络安全 ②坚持以人民为中心 ③网络不是法外之地 ④限制言论自由',
      options:['①②③','①②④','①③④','②③④'], answer:'A',
      explanation:'④错误——清朗行动是规范网络秩序而非限制合法言论自由。', source:'2024安徽中考' },

    // ═══ 创新与发展 ═══
    { id:'z19', kp:'创新与发展', type:'choice', difficulty:'medium',
      text:'专利权人遭遇侵权比例下降说明（  ）',
      options:['不再存在专利侵权','专利保护环境持续优化','企业不重视专利','知识产权不重要'], answer:'B',
      explanation:'侵权比例下降体现保护力度加大、法治环境改善。', source:'2025安徽中考第9题' },
    { id:'z20', kp:'创新与发展', type:'choice', difficulty:'medium',
      text:'"鲁班"技能培训项目在多个国家落地，体现了中国（  ）',
      options:['称霸世界','贡献中国智慧和中国经验','输出意识形态','干涉别国内政'], answer:'B',
      explanation:'中国分享发展经验、提供技术支持→贡献中国智慧和方案。', source:'2024安徽中考第10题' },

    // ═══ 文化与自信 ═══
    { id:'z21', kp:'文化与自信', type:'choice', difficulty:'easy',
      text:'宣纸制作技艺是国家级非遗，体现（  ）\n①工匠精神 ②文化传承 ③文化自信 ④崇洋媚外',
      options:['①②③','①②④','①③④','②③④'], answer:'A',
      explanation:'④崇洋媚外与题干完全相反。①②③正确。', source:'2025安徽中考第10题' },
    { id:'z22', kp:'文化与自信', type:'choice', difficulty:'easy',
      text:'西周何尊铭文"宅兹中国"——"中国"一词最早出处，体现中华文化（  ）',
      options:['博大精深','与时俱进','一枝独秀','源远流长'], answer:'D',
      explanation:'"最早"一词→时间久远→源远流长（五千年不间断）。', source:'2025安徽中考第11题' },
    { id:'z23', kp:'文化与自信', type:'choice', difficulty:'medium',
      text:'《黑神话：悟空》融合传统文化与现代游戏技术走红全球，体现（  ）\n①文化自信 ②创造性转化 ③抛弃传统 ④文化影响力',
      options:['①②③','①②④','①③④','②③④'], answer:'B',
      explanation:'③"抛弃传统"明显错误。①②④正确。', source:'2024安徽中考第4题' },

    // ═══ 世界与中国 ═══
    { id:'z24', kp:'世界与中国', type:'choice', difficulty:'easy',
      text:'中国鳗鱼游向世界，挪威三文鱼飞来中国，体现（  ）',
      options:['文化多样性','经济全球化','政治多极化','军事同盟化'], answer:'B',
      explanation:'商品全球流通→经济全球化。', source:'2025安徽中考第12题' },
    { id:'z25', kp:'世界与中国', type:'solution', difficulty:'medium',
      text:'结合"全球南方"：(1)中国在国际事务中展现怎样的大国担当？(2)青少年如何为人类命运共同体贡献力量？', options:null,
      answer:'(1)世界和平建设者、全球发展贡献者、国际秩序维护者；共商共建共享。\n(2)树立全球意识；努力学习提升素质；关注人类命运；传播中华文化。',
      explanation:'九下第二单元+第三单元综合。', source:'2025安徽中考第17题' },
    { id:'z26', kp:'世界与中国', type:'solution', difficulty:'medium',
      text:'谈谈对总体国家安全观的理解：为什么说"国家安全是头等大事"？', options:null,
      answer:'国家安全是国家生存发展的重要保障，是人民幸福安康的前提。要坚持总体国家安全观，以人民安全为宗旨，以政治安全为根本，统筹外部安全和内部安全。',
      explanation:'八上第九课"树立总体国家安全观"。', source:'2024安徽中考第9题考点' },
  ]
}

};
