// ⚚ 安徽中考高频考点补充包
(function() {
if (typeof SUBJECTS === 'undefined') return;

// ═══ 数学专项 ═══
SUBJECTS.math.questions.push(
  // 反比例函数
  { id:'m43', kp:'一次函数', type:'choice', difficulty:'medium',
    text:'反比例函数y=k/x与一次函数y=2-x图象交点的横坐标为3，则k=（  ）',
    options:['-3','-1','1','3'], answer:'A',
    explanation:'交点横坐标3→纵坐标y=2-3=-1。代入y=k/x→-1=k/3→k=-3。', source:'2024安徽中考第6题' },
  { id:'m44', kp:'一次函数', type:'fill', difficulty:'medium',
    text:'如图，O是坐标原点，Rt△OAB中∠AOB=30°,AB=2，反比例函数y=k/x过斜边OB中点C。(1)k=____；(2)D在图象上且BD∥AC，则OB²-BD²=____。', options:null,
    answer:'(1)√3;(2)4',
    explanation:'由30°-60°-90°三角形：OB=4,OA=2√3。B(2√3,2),C(√3,1)→k=√3。联立直线方程求解D点。', source:'2023安徽中考第14题' },
  // 图形变换/几何最值
  { id:'m45', kp:'规律探索', type:'choice', difficulty:'hard',
    text:'E是AB上一点，△ADE和△BCE是AB同侧两个等边三角形，P,F分别是CD,AB中点。AB=4，下列结论错误的是（  ）',
    options:['PA+PB最小值为3√3','PE+PF最小值为2√3','△CDE周长最小值为6','四边形ABCD面积最小值为3√3'], answer:'A',
    explanation:'延长AD、BE交于M，△MAB为等边三角形。当E与F重合时取最小值。A选项应取√21而非3√3。', source:'2023安徽中考第10题' },
  // 圆综合
  { id:'m46', kp:'圆', type:'solution', difficulty:'hard',
    text:'四边形ABCD内接于⊙O，对角线BD是直径。(1)如图1，OA⊥BD，求证CA平分∠BCD；(2)E为⊙O内一点满足AE⊥BC,CE⊥AB，BD=2√3,AE=3，求BC。', options:null,
    answer:'(1)见解析;(2)BC=√3',
    explanation:'(1)BD是直径→弧AD=弧AB→∠ACD=∠ACB→CA平分∠BCD。(2)证AECF为平行四边形→CF=AE=3。Rt△BCD中用勾股定理。', source:'2023安徽中考第20题' },
  // 正方形综合
  { id:'m47', kp:'四边形', type:'fill', difficulty:'hard',
    text:'正方形纸片折叠：点N在CD上且∠BEF=α，则∠C′NM=____；四边形EFGH为正方形，AE=4,EB=8，MN与GH交于P，则PH=____。', options:null,
    answer:'90°-α;3',
    explanation:'折叠对称性质+正方形判定与性质。利用对称可得∠C′NM与∠BEF互余。', source:'2024安徽中考第14题' },
  // 解直角三角形
  { id:'m48', kp:'三角形', type:'solution', difficulty:'medium',
    text:'如图，A,B是同一水平线上两点，无人机从A竖直上升到C，C到B距离40m，B俯角24.2°；继续上升到D，B俯角36.9°。求CD上升高度。(参考数据见解析)', options:null,
    answer:'约10.9m',
    explanation:'Rt△ABC中AC=40sin24.2°≈16.4m，AB=40cos24.2°≈36.4m。Rt△ABD中AD=AB·tan36.9°≈27.3m。CD=27.3-16.4=10.9m。', source:'2023安徽中考第19题' }
);

// ═══ 物理专项 ═══
SUBJECTS.physics.questions.push(
  // 电功率计算
  { id:'p41', kp:'电功率', type:'solution', difficulty:'medium',
    text:'如图电路，U=9V,R₂=45Ω,R₃=30Ω。(1)S和S₁闭合S₂断开求U₃；(2)全闭合求总电流I；(3)S闭合S₁S₂断开且U₃=6V求R₁功率。', options:null,
    answer:'(1)9V;(2)0.5A;(3)0.6W',
    explanation:'(1)R₃直接接电源两端→9V。(2)R₂∥R₃:I₂=9/45=0.2A,I₃=9/30=0.3A,I总=0.5A。(3)串联I=6/30=0.2A,U₁=3V,P₁=0.6W。', source:'2024安徽中考第22题' },
  // 压强
  { id:'p42', kp:'压强浮力', type:'fill', difficulty:'medium',
    text:'高铁站台标安全线是因列车驶过时附近空气流速____，压强变____。若人离轨道过近会被"吸"入。', options:null, answer:'大；小',
    explanation:'伯努利原理：流体流速越大的位置压强越小。列车高速驶过带动周围空气快速流动→气压减小→人两侧产生压力差→被推向轨道。', source:'2024安徽中考第3题' },
  // 电阻测量
  { id:'p43', kp:'电路基础', type:'solution', difficulty:'medium',
    text:'测量小灯泡电阻和电功率：U=3.0V时I=0.3A。(1)闭合开关前滑片应在____端；(2)R=____Ω,P=____W；(3)灯泡正常发光U=2.5V，电阻最可能为____(8.00/8.93/10)Ω。', options:null,
    answer:'(1)b(最大阻值端);(2)10Ω,0.9W;(3)8.93Ω',
    explanation:'R=U/I=10Ω,P=UI=0.9W。灯丝电阻随温度升高而增大，2.5V时应在8~10Ω之间→8.93Ω。', source:'2023安徽中考第20题' },
  // 安全用电
  { id:'p44', kp:'电路基础', type:'fill', difficulty:'easy',
    text:'测电笔试触插座插孔，指尖抵住笔尾金属体，氖管发光，此时____（有/没有）电流通过人体。人体安全是因笔内____联了大电阻。', options:null, answer:'有；串',
    explanation:'氖管发光说明电流经笔尖→氖管→大电阻→笔尾→人体→大地形成通路。有微弱电流但安全（大电阻限流）。', source:'2023安徽中考第8题' },
  // 浮力综合
  { id:'p45', kp:'压强浮力', type:'solution', difficulty:'hard',
    text:'"浮沉子"：小瓶漂浮时空气柱高h，底面积S，整体质量m，水密度ρ。(1)漂浮时浮力；(2)排开水体积；(3)悬浮与漂浮时瓶内空气密度之比。', options:null,
    answer:'(1)F浮=mg;(2)V排=m/ρ水;(3)ρ₂:ρ₃=m/(Shρ水)',
    explanation:'漂浮F浮=G=mg。V排=F浮/(ρ水g)=m/ρ水。悬浮时ρ物=ρ液→瓶内空气密度=ρ水。', source:'2023安徽中考第23题' },
  // 摩擦力
  { id:'p46', kp:'力学基础', type:'fill', difficulty:'medium',
    text:'猴子质量10kg抱住木杆，细绳断后猴子沿木杆上爬保持与地面高度不变，g=10N/kg，摩擦力大小为____N，方向____。', options:null, answer:'100；竖直向上',
    explanation:'猴子高度不变→相对地面静止→二力平衡→f=G=mg=100N。摩擦力方向与重力方向相反→竖直向上。', source:'2024安徽中考第6题' },
  // 家庭电路
  { id:'p47', kp:'电功率', type:'choice', difficulty:'medium',
    text:'关于安全用电，下列说法正确的是（  ）',
    options:['家用电器起火用水浇灭','更换灯泡不必断开开关','使用三孔插座防止触电','湿手可以操作开关'], answer:'C',
    explanation:'三孔插座有接地线可防触电。A水能导电→不能用水浇电器火；B需先断电；D湿手导电危险。', source:'2024安徽中考第11题' }
);

// ═══ 化学专项 ═══
SUBJECTS.chemistry.questions.push(
  // 溶解度
  { id:'c38', kp:'水与溶液', type:'choice', difficulty:'medium',
    text:'硝酸钾在60℃时溶解度为110g。60℃时将100g KNO₃加入100g水中充分溶解，所得溶液为____，溶质质量分数为____。',
    options:['饱和溶液 50%','不饱和溶液 50%','饱和溶液 52.4%','不饱和溶液 52.4%'], answer:'B',
    explanation:'100g<110g(最大溶解量)→全溶→不饱和。ω=100/(100+100)=50%。', source:'安徽中考经典题' },
  // 溶液pH
  { id:'c39', kp:'酸碱盐', type:'choice', difficulty:'medium',
    text:'向白醋中滴加酚酞溶液，溶液不变色。下列结论正确的是（  ）',
    options:['白醋呈酸性','白醋呈碱性','白醋呈中性','无法判断'], answer:'A',
    explanation:'酚酞遇酸不变色，遇碱变红。不变色→酸性或中性。白醋含醋酸→酸性→遇酚酞不变色。但不能由"不变色"断定一定为酸性。结合常识：白醋为酸性。', source:'2024安徽中考第11题' },
  // 元素周期
  { id:'c40', kp:'金属', type:'choice', difficulty:'medium',
    text:'"鹊桥二号"中继星使用镀金钼丝天线。钼在元素周期表中42号，下列说法错误的是（  ）',
    options:['钼元素符号是Mo','钼属于金属元素','钼相对原子质量95.96','1个Mo²⁺中含电子数44'], answer:'D',
    explanation:'钼原子42号→原子有42个电子。Mo²⁺失去2电子→电子数=42-2=40≠44。', source:'2024安徽中考第4题' },
  // 铜绿实验
  { id:'c41', kp:'实验探究', type:'choice', difficulty:'medium',
    text:'按图装置验证质量守恒定律，一段时间后部分固体变为红棕色（铁生锈）。实验过程中瓶内物质或元素质量变化与图b相符的是（  ）',
    options:['铁粉的质量','氮气的质量','氧元素的质量','固态物质的质量'], answer:'A',
    explanation:'铁粉作为反应物被消耗→质量先减少后不变→符合图b曲线。N₂不参与反应质量不变，氧元素守恒不变，固体质量先增后不变。', source:'2024安徽中考第12题' },
  // 中和反应
  { id:'c42', kp:'酸碱盐', type:'fill', difficulty:'medium',
    text:'熟石灰改良酸性土壤的化学方程式为____。该反应属于____反应（填基本反应类型）。', options:null,
    answer:'Ca(OH)₂+H₂SO₄=CaSO₄+2H₂O；复分解',
    explanation:'酸碱中和反应是复分解反应的一种。酸+碱→盐+水，两种化合物互相交换成分。', source:'2024安徽中考第13题' },
  // 甲烷实验
  { id:'c43', kp:'实验探究', type:'solution', difficulty:'medium',
    text:'甲烷制取与组成验证：(1)制O₂的化学方程式（用KClO₃和MnO₂）；(2)检查气密性现象____；(3)证明含碳、氢元素的现象：烧杯壁出现____说明含氢，澄清石灰水____说明含碳。', options:null,
    answer:'(1)2KClO₃→MnO₂Δ→2KCl+3O₂↑;(2)导管口有气泡冒出;(3)水雾；变浑浊',
    explanation:'CH₄+2O₂→CO₂+2H₂O。水雾证明含H（生成H₂O），CO₂使石灰水变浑浊证明含C。', source:'2024安徽中考第14题' },
  // 侯氏制碱法
  { id:'c44', kp:'酸碱盐', type:'solution', difficulty:'hard',
    text:'侯氏制碱法：NaCl+CO₂+NH₃+H₂O=NaHCO₃↓+NH₄Cl。20℃溶解度：NaCl 36.0g,NaHCO₃ 9.6g,NH₄Cl 37.2g。析出NaHCO₃原因是____。使NH₄Cl结晶析出的方法是____。', options:null,
    answer:'相同条件下NaHCO₃溶解度最小，以晶体形式析出；增大Cl⁻浓度（加入NaCl）',
    explanation:'四种盐中NaHCO₃溶解度(9.6g)远小于其他三种(>36g)→率先饱和析出。加NaCl增大Cl⁻浓度→同离子效应→NH₄Cl析出。', source:'2024安徽中考第16题' }
);

// ═══ 道德与法治专项 ═══
SUBJECTS.politics.questions.push(
  // 友谊
  { id:'z41', kp:'友谊与交往', type:'solution', difficulty:'easy',
    text:'评析：甲说"误解是小事没必要化解"，乙说"误解会影响情绪和友谊需要及时化解"。请评价两位同学的观点。', options:null,
    answer:'甲不正确乙正确。误解若不及时化解会加深隔阂，影响友谊和情绪。应主动沟通、坦诚交流，学会换位思考，及时化解误解。',
    explanation:'考查友谊的维护——需要用心关怀对方，正确处理冲突。', source:'2024安徽中考第13题' },
  // 网络保护
  { id:'z42', kp:'社会与规则', type:'solution', difficulty:'medium',
    text:'【守护个人信息 提高网络素养】\n(1)请从不同角度谈谈如何"织密个人信息保护防护网"？\n(2)青少年应怎样提高网络素养？', options:null,
    answer:'(1)国家完善法律法规；社会加强宣传引导；企业规范信息收集使用行为；个人增强防护意识。\n(2)不随意透露个人信息；培养正确网络价值观；合理安排上网时间；提高信息辨别能力。',
    explanation:'多角度（国家/社会/企业/个人）综合回答。考查八上网络生活+八下公民权利。', source:'2024安徽中考第15题' },
  // 生态文明
  { id:'z43', kp:'创新与发展', type:'solution', difficulty:'medium',
    text:'【建设生态文明 筑美好家园】\n"一水共护"的依据是什么？"一域共富"的依据是什么？', options:null,
    answer:'"一水共护"依据：坚持绿色发展理念，走生态文明发展道路；坚持节约资源和保护环境基本国策。\n"一域共富"依据：坚持共享发展理念；共同富裕是中国特色社会主义根本原则。',
    explanation:'九上第三单元——坚持绿色发展道路，走可持续发展之路。共享发展成果，实现共同富裕。', source:'2024安徽中考第17题' },
  // 行政机关
  { id:'z44', kp:'国家与制度', type:'choice', difficulty:'medium',
    text:'政府持续优化营商环境、简化审批流程、推行"一网通办"，体现了（  ）\n①打造服务型政府 ②优化营商环境 ③政府包办一切 ④方便群众办事',
    options:['①②③','①②④','①③④','②③④'], answer:'B',
    explanation:'③"政府包办一切"错误——政府有所为有所不为，不是包办。①②④正确。', source:'2024安徽中考第5题' },
  // 非公有制经济
  { id:'z45', kp:'国家与制度', type:'choice', difficulty:'medium',
    text:'民营企业家发扬"敢想敢拼"精神取得成功，说明（  ）\n①非公有制经济是社会主义市场经济重要组成部分\n②国家鼓励支持引导非公有制经济发展\n③民营经济控制国民经济命脉\n④企业家精神是发展动力',
    options:['①②③','①②④','①③④','②③④'], answer:'B',
    explanation:'③错误——国有经济控制国民经济命脉，非公有制经济是重要组成部分而非主导。①②④正确。', source:'2024安徽中考第6题' },
  // 文化惠民
  { id:'z46', kp:'文化与自信', type:'choice', difficulty:'medium',
    text:'公共文化服务体系建设让群众就近享受文化服务，这体现（  ）',
    options:['人民至上的价值追求','文化可以替代经济','公共服务必须免费','文化建设比经济重要'], answer:'A',
    explanation:'文化惠民工程体现党和政府坚持以人民为中心的发展思想，不断满足人民日益增长的美好生活需要。B/C/D均说法偏颇。', source:'2024安徽中考第7题' },
  // 党的领导
  { id:'z47', kp:'国家与制度', type:'choice', difficulty:'medium',
    text:'某地区实现脱贫致富得益于（  ）\n①坚持党的正确领导 ②群众辛勤奋斗 ③照搬外地经验 ④因地制宜发展产业',
    options:['①②③','①②④','①③④','②③④'], answer:'B',
    explanation:'③"照搬外地经验"错误——应根据本地实际因地制宜而非照搬。①②④正确。', source:'2024安徽中考第8题' }
);

})();

// ═══ 最后补充 ═══
SUBJECTS.math.questions.push(
  { id:'m49', kp:'方程与不等式', type:'choice', difficulty:'easy',
    text:'某几何体的三视图：主视图为三角形，另两个视图均为长方形，则该几何体为（  ）',
    options:['正方体','三棱柱','圆柱','圆锥'], answer:'B',
    explanation:'主视三角+侧视长方形→三棱柱特征。圆柱主视图为矩形，圆锥主视图为三角形但侧视图为三角形。', source:'2023安徽中考第2题' },
  { id:'m50', kp:'四边形', type:'choice', difficulty:'easy',
    text:'某几何体的三视图如图所示（上锥下柱，俯视图为圆），则该几何体为（  ）',
    options:['球','圆柱','圆锥','圆锥与圆柱组合'], answer:'D',
    explanation:'上部分圆锥+下部分圆柱的组合体。俯视图圆形是圆柱和圆锥共同俯视特征。', source:'2024安徽中考第3题' }
);
SUBJECTS.physics.questions.push(
  { id:'p48', kp:'光现象', type:'choice', difficulty:'medium',
    text:'平面镜成像特点实验：小丽看到像如乙图，小明看光屏如丙图，小亮看凸透镜在B位置成像如丁图。正确组合是（  ）',
    options:['①','②','③','④'], answer:'B',
    explanation:'平面镜成正立等大虚像(乙)；虚像光屏不能承接(丙)；B处u=v=2f成倒立等大实像(丁)。选②最佳。', source:'2023安徽中考第19题' },
  { id:'p49', kp:'物态变化', type:'fill', difficulty:'easy',
    text:'冰熔化实验：冰水混合物加热过程中，温度计的示数____（填"升高""降低"或"保持不变"），直到冰全部熔化后温度才开始上升。', options:null, answer:'保持不变',
    explanation:'冰是晶体，熔化过程中持续吸热但温度保持熔点(0℃)不变。这是晶体熔化的核心特征。', source:'2023安徽中考第18题' }
);
SUBJECTS.chemistry.questions.push(
  { id:'c45', kp:'酸碱盐', type:'choice', difficulty:'medium',
    text:'下列实验方案不能解决相应实际问题的是（  ）',
    options:['区分硬水软水：加肥皂水','检验雨水是否酸雨：滴加酚酞','区分蔗糖水生理盐水：测导电性','检验NaCl含MgCl₂：加NaOH溶液'], answer:'B',
    explanation:'酚酞遇酸不变色，不能用于检验酸雨（酸性）。应使用pH试纸检测。A硬水泡沫少软水泡沫多；C生理盐水导电蔗糖水不导电；D Mg²⁺+2OH⁻→Mg(OH)₂↓白沉淀。', source:'2023安徽中考第5题' },
  { id:'c46', kp:'空气氧气', type:'fill', difficulty:'easy',
    text:'空间站内空气属于____（填"混合物"或"纯净物"）。宇航员呼出气体中除CO₂外还含有____（填一种即可）。', options:null, answer:'混合物；氮气(或氧气/水蒸气)',
    explanation:'空气含N₂、O₂、CO₂等多种物质→混合物。呼出气体中O₂减少（部分被消耗）但仍有残余，含N₂（不参与呼吸）、水蒸气。', source:'2023安徽中考第13题' }
);
SUBJECTS.politics.questions.push(
  { id:'z48', kp:'成长与自我', type:'choice', difficulty:'easy',
    text:'重温雷锋日记："真正的青春只属于永远力争上游的人，永远热爱劳动的人。"这说明拥有真正的青春需要（  ）\n①不断战胜自我探索生命意义 ②勇敢面对未来决定社会发展 ③弘扬高尚道德提升道德境界 ④主动承担责任维护人民利益',
    options:['①②③','①②④','①③④','②③④'], answer:'C',
    explanation:'②"决定社会发展"夸大个人作用。①③④均符合雷锋精神的时代内涵。', source:'2023安徽中考第1题' },
  { id:'z49', kp:'创新与发展', type:'solution', difficulty:'medium',
    text:'安徽创新环境优化有力促进经济社会发展。请说明创新环境优化对经济社会发展的促进作用。', options:null,
    answer:'为全省经济高质量发展提供良好社会环境；促进经济结构优化升级和转型；培育新的经济增长点；提升区域竞争力。',
    explanation:'九上第一单元"创新驱动发展"——创新是引领发展的第一动力，科技创新能力是综合国力竞争的决定性因素。', source:'2023安徽中考第16题(2)' },
  { id:'z50', kp:'集体与法治', type:'solution', difficulty:'easy',
    text:'结合漫画"班级大扫除"，说说为什么集体劳动会给我们带来快乐？', options:null,
    answer:'集体生活培养负责任的态度和能力，在认真做事中体现自身价值、体验责任感；培养人际交往的基本态度和能力，在交往中学会接纳、尊重、理解和包容；劳动创造美好生活，劳动是财富和幸福的源泉。',
    explanation:'七下"在集体中成长"+八上"劳动成就今天"。', source:'2023安徽中考第13题' }
);
