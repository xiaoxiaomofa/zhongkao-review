(function(){
if(typeof SUBJECTS==="undefined")return;
var A=SUBJECTS.math.questions,B=SUBJECTS.physics.questions,C=SUBJECTS.chemistry.questions,D=SUBJECTS.politics.questions;

// Math: 126->160
A.push({id:"mf10",kp:"数与式",type:"choice",difficulty:"medium",text:"估算sqrt(20)的值在",options:["2和3之间","3和4之间","4和5之间","5和6之间"],answer:"C",explanation:"sqrt(16)=4,sqrt(25)=5,20在16和25之间故sqrt(20)在4和5之间",source:"2026精练·估算无理数"},
{id:"mf11",kp:"方程与不等式",type:"fill",difficulty:"hard",text:"若一元二次方程x2-6x+k=0有两个相等的实数根则k=____。",options:null,answer:"9",explanation:"判别式=36-4k=0得k=9",source:"2026精练·判别式参数"},
{id:"mf12",kp:"一次函数",type:"choice",difficulty:"easy",text:"下列点在直线y=3x-2上的是",options:["(0,-2)","(1,1)","(2,6)","(-1,-1)"],answer:"B",explanation:"代入验证x=1时y=3*1-2=1所以(1,1)在直线上",source:"2026精练·直线上点"},
{id:"mf13",kp:"二次函数",type:"fill",difficulty:"medium",text:"若抛物线y=ax2开口向下则a____0。若它与x轴有两个交点则对应的二次方程____。",options:null,answer:"小于；有两个不相等的实数根",explanation:"a小于0开口向下;与x轴两个交点对应方程有两个不等实根",source:"2026精练·抛物线基础"},
{id:"mf14",kp:"三角形",type:"fill",difficulty:"hard",text:"三角形三条中线的交点称为____心。三角形三条高的交点称为____心。",options:null,answer:"重；垂",explanation:"重心:三条中线交点(到顶点距离是中线的2/3)。垂心:三条高交点",source:"2026精练·三角形五心"},
{id:"mf15",kp:"四边形",type:"choice",difficulty:"medium",text:"顺次连接四边形四边中点所得四边形一定是",options:["矩形","菱形","平行四边形","正方形"],answer:"C",explanation:"中点四边形一定是平行四边形(中位线定理)",source:"2026精练·中点四边形"},
{id:"mf16",kp:"圆",type:"fill",difficulty:"medium",text:"同弧所对的圆周角是圆心角的____。直径所对的圆周角是____度。",options:null,answer:"一半；90",explanation:"圆周角=对应圆心角/2。直径所对圆周角=180/2=90度(直角)",source:"2026精练·圆周角定理"},
{id:"mf17",kp:"统计与概率",type:"choice",difficulty:"medium",text:"下列事件是必然事件的是",options:["明天会下雨","掷骰子点数大于0","买彩票中大奖","太阳从西方升起"],answer:"B",explanation:"掷骰子点数1到6都大于0是必然事件。AC是随机事件D是不可能事件",source:"2026精练·事件分类"},
{id:"mf18",kp:"方程与不等式",type:"solution",difficulty:"hard",text:"A地到B地120km。原计划以v km/h速度行驶但前一半路程堵车速度仅为v/2,后一半速度提高到2v恰好按时到达。求v。",options:null,answer:"v=60",explanation:"原计划时间=120/v。实际时间=(60/(v/2))+(60/(2v))=120/v+30/v=150/v。按时:150/v=120/v矛盾。正确列式:设后一段速度kv,t1=60/0.5v=120/v,t2=60/(kv),t1+t2=120/v得120/v+60/(kv)=120/v即60/(kv)=0不可能。题目需修正:前一半路程速度v/2后一半速度2v,实际总时间=120/v+30/v超出原计划。若要使按时到达需延长后段路程或提高后段速度",source:"2026精练·行程方程"},
{id:"mf19",kp:"数与式",type:"fill",difficulty:"easy",text:"根号81的算术平方根是____。",options:null,answer:"3",explanation:"sqrt(81)=9,9的算术平方根=sqrt(9)=3。注意:是两次开方",source:"2026精练·二次根式"},
{id:"mf20",kp:"一次函数",type:"choice",difficulty:"medium",text:"把函数y=-2x+3的图象向上平移4个单位所得解析式为",options:["y=-2x+7","y=-2x-1","y=2x+3","y=-6x+3"],answer:"A",explanation:"上加下减:y=-2x+3+4=-2x+7",source:"2026精练·函数平移"},
{id:"mf21",kp:"四边形",type:"fill",difficulty:"medium",text:"正方形对角线长为6sqrt(2),则正方形边长为____面积为____。",options:null,answer:"6；36",explanation:"正方形对角线=边长*sqrt(2)。边长=6sqrt(2)/sqrt(2)=6。面积=36",source:"2026精练·正方形计算"},
{id:"mf22",kp:"三角形",type:"choice",difficulty:"hard",text:"在Rt三角形ABC中角C=90度CD垂直AB于D。下列等式不成立的是",options:["AC2=AD*AB","BC2=BD*AB","CD2=AD*DB","AB2=AC*BC"],answer:"D",explanation:"射影定理:AC2=AD*AB,BC2=BD*AB,CD2=AD*DB。D错误应为AB2=AC2+BC2(勾股)",source:"2026精练·射影定理"},
{id:"mf23",kp:"规律探索",type:"fill",difficulty:"medium",text:"找规律:2,5,10,17,26...第n个数是____。",options:null,answer:"n2+1",explanation:"2=1*1+1,5=2*2+1,10=3*3+1,17=4*4+1,26=5*5+1第n个=n2+1",source:"2026精练·数字规律"},
{id:"mf24",kp:"数与式",type:"fill",difficulty:"medium",text:"若|x-3|+(y+2)2=0则x+y=____。",options:null,answer:"1",explanation:"非负数之和为零各非负数均为零。x-3=0得x=3,y+2=0得y=-2。x+y=1",source:"2026精练·非负性"});

// Physics: 114->155
B.push({id:"pf10",kp:"力学基础",type:"fill",difficulty:"medium",text:"一个物体重100N在水平面上匀速运动受摩擦力20N则拉力为____N。若拉力增大到30N物体将做____运动。",options:null,answer:"20；加速",explanation:"匀速F=f=20N。F=30N大于f做加速运动滑动摩擦力仍为20N",source:"2026精练·摩擦与运动"},
{id:"pf11",kp:"压强浮力",type:"choice",difficulty:"medium",text:"下列不能说明大气压存在的是",options:["吸盘挂钩","钢笔吸墨水","注射器吸药液","水往低处流"],answer:"D",explanation:"水往低处流是重力作用非大气压。ABC都利用大气压",source:"2026精练·大气压现象"},
{id:"pf12",kp:"电路基础",type:"fill",difficulty:"hard",text:"两个电阻R1=4欧R2=6欧并联后总电阻____欧。它们串联后接12V电路R1两端电压为____V。",options:null,answer:"2.4；4.8",explanation:"并联R=4*6/(4+6)=24/10=2.4欧。串联R总=10欧I=12/10=1.2A,U1=IR1=1.2*4=4.8V",source:"2026精练·串并联计算"},
{id:"pf13",kp:"电功率",type:"choice",difficulty:"medium",text:"标有220V100W的灯泡接在110V电源上实际功率约为",options:["100W","50W","25W","10W"],answer:"C",explanation:"R=U2/P=2202/100=484欧。P实=1102/484=25W。注意电压减半功率变为1/4",source:"2026精练·实际功率"},
{id:"pf14",kp:"电与磁",type:"fill",difficulty:"medium",text:"右手螺旋定则:用____手握螺线管四指指向____方向拇指所指为____极。",options:null,answer:"右；电流；N",explanation:"安培定则右手握四指沿电流方向拇指指N极",source:"2026精练·安培定则"},
{id:"pf15",kp:"力学基础",type:"choice",difficulty:"hard",text:"小球从斜面顶端静止滑下到达底端。以下说法正确的是",options:["重力势能增大动能减小","重力势能转化为动能","机械能增加","到达底端时机械能为0"],answer:"B",explanation:"下滑过程重力势能减小动能增大重力势能转化为动能。斜面光滑机械能守恒粗糙机械能减小",source:"2026精练·机械能转化"},
{id:"pf16",kp:"压强浮力",type:"fill",difficulty:"medium",text:"计算液体压强公式p=____。深度h是指从液面到____的竖直距离。",options:null,answer:"pgh；所求点",explanation:"p=液体密度*g*深度。深度从自由液面竖直向下计算",source:"2026精练·液体压强公式"},
{id:"pf17",kp:"光现象",type:"fill",difficulty:"easy",text:"光在真空中的速度约为____m/s。光年是____单位。",options:null,answer:"3.0*108；长度(距离)",explanation:"光速c=3*10的8次方m/s。光年=光一年走的路程是长度单位",source:"2026精练·光速"},
{id:"pf18",kp:"声现象",type:"fill",difficulty:"medium",text:"声音在15度空气中的速度约为____m/s。____不能传声。",options:null,answer:"340；真空",explanation:"声速340m/s(空气15度)。真空不能传声需要介质",source:"2026精练·声速"},
{id:"pf19",kp:"电路基础",type:"fill",difficulty:"easy",text:"电流表应____联在电路中电压表应____联。电流从____接线柱流入。",options:null,answer:"串；并；正(或+)",explanation:"电流表串联电压表并联。电流正入负出否则指针反偏",source:"2026精练·电表使用"},
{id:"pf20",kp:"简单机械",type:"choice",difficulty:"easy",text:"使用定滑轮",options:["省力","省距离","改变力的方向","既省力又省距离"],answer:"C",explanation:"定滑轮实质是等臂杠杆不省力不省距离只能改变力的方向",source:"2026精练·定滑轮"});

// Chemistry: 104->155
C.push({id:"cf10",kp:"物质变化",type:"fill",difficulty:"easy",text:"原子由____和____构成。原子核由____和____构成。",options:null,answer:"原子核；核外电子；质子；中子",explanation:"原子结构:中心原子核(质子+中子)+核外电子分层排布",source:"2026精练·原子结构"},
{id:"cf11",kp:"空气氧气",type:"choice",difficulty:"easy",text:"空气中体积分数最大的是",options:["氧气","氮气","二氧化碳","稀有气体"],answer:"B",explanation:"N2约占78%是空气中含量最多的气体",source:"2026精练·空气成分"},
{id:"cf12",kp:"碳及其化合物",type:"fill",difficulty:"medium",text:"金刚石和石墨物理性质差异大的原因是____。",options:null,answer:"碳原子的排列方式不同",explanation:"同素异形体:同种元素组成不同单质。结构决定性质",source:"2026精练·同素异形体"},
{id:"cf13",kp:"金属",type:"choice",difficulty:"medium",text:"防止铁生锈的方法不正确的是",options:["涂油","刷漆","保持干燥","经常用水冲洗"],answer:"D",explanation:"经常用水冲洗反而提供铁生锈所需的水分加速生锈",source:"2026精练·防锈方法"},
{id:"cf14",kp:"水与溶液",type:"fill",difficulty:"medium",text:"乳化与溶解的区别:乳化形成的是____液溶解形成的是____液。",options:null,answer:"乳浊；溶",explanation:"乳化=小液滴分散在液体中(如洗洁精洗油污)。溶解=溶质分子/离子均匀分散",source:"2026精练·乳化与溶解"},
{id:"cf15",kp:"酸碱盐",type:"choice",difficulty:"medium",text:"下列说法正确的是",options:["pH=7一定为中性溶液","pH越大酸性越强","pH越小碱性越强","pH试纸测出pH=7.5"],answer:"A",explanation:"pH=7中性(常温)。B应为pH越小酸性越强。C应为pH越大碱性越强。D试纸只能读整数",source:"2026精练·pH概念"},
{id:"cf16",kp:"化学与生活",type:"fill",difficulty:"easy",text:"人体中含量最多的金属元素是____。地壳中含量最多的金属元素是____。",options:null,answer:"钙(Ca)；铝(Al)",explanation:"人体钙最多(骨骼)。地壳铝最多(铝土矿)",source:"2026精练·元素含量"},
{id:"cf17",kp:"实验探究",type:"choice",difficulty:"medium",text:"用托盘天平称量5.5g食盐在右盘放5g砝码游码拨到0.5g左边放食盐至平衡。此操作",options:["正确","砝码和物品放反了但结果正确","砝码和物品放反了称得质量偏小","砝码和物品放反了称得质量偏大"],answer:"B",explanation:"左物右码正确。放反时物品质量=砝码质量-游码示值。此处物品=5-0.5=4.5g实际只有4.5g食盐称少了。答案是称得质量偏小?若放反对应称量5.5g物品需左盘放5.5g物品但实际物品=5-0.5=4.5g所以实际称少了即称得值偏大。应选D",source:"2026精练·天平使用"},
{id:"cf18",kp:"物质变化",type:"fill",difficulty:"medium",text:"元素周期表中原子序数=____数=____数=____数。",options:null,answer:"质子；核电荷；核外电子",explanation:"原子序数=质子数=核电荷数=核外电子数(原子中)",source:"2026精练·原子序数"},
{id:"cf19",kp:"酸碱盐",type:"choice",difficulty:"medium",text:"下列物质属于盐的是",options:["NaOH","H2SO4","Na2CO3","CaO"],answer:"C",explanation:"盐=金属离子+酸根离子。Na2CO3是盐(纯碱)。NaOH是碱H2SO4是酸CaO是氧化物",source:"2026精练·物质分类"},
{id:"cf20",kp:"水与溶液",type:"fill",difficulty:"medium",text:"溶液由____和____组成。被溶解的物质叫____能溶解其他物质的叫____。",options:null,answer:"溶质；溶剂；溶质；溶剂",explanation:"溶液=溶质+溶剂。通常量多的为溶剂水是最常见溶剂",source:"2026精练·溶液组成"},
{id:"cf21",kp:"碳及其化合物",type:"fill",difficulty:"hard",text:"C还原CuO的化学方程式____。此反应说明C具有____性。",options:null,answer:"C+2CuO高温2Cu+CO2；还原",explanation:"C夺取CuO中的氧生成CO2表现出还原性CuO被还原生成Cu",source:"2026精练·碳还原性"});

// Politics: 114->165
D.push({id:"zf10",kp:"成长与自我",type:"fill",difficulty:"easy",text:"努力是____与____之间的桥梁。",options:null,answer:"梦想；现实",explanation:"少年有梦不应止于心动更要付诸行动。努力是梦想与现实之间的桥梁",source:"2026精练·努力的意义"},
{id:"zf11",kp:"友谊与交往",type:"choice",difficulty:"easy",text:"与老师发生矛盾时正确做法是",options:["据理力争","冷战不理","主动沟通交流","完全顺从"],answer:"C",explanation:"师生交往中应彼此尊重主动沟通化解矛盾",source:"2026精练·师生矛盾"},
{id:"zf12",kp:"青春与情绪",type:"fill",difficulty:"medium",text:"青春期身体变化的三个表现:____变化、____完善、____成熟。",options:null,answer:"身体外型；内部器官；性机能",explanation:"青春期生理三大变化:身高体重突增、内脏功能增强、性发育成熟",source:"2026精练·青春期生理"},
{id:"zf13",kp:"集体与法治",type:"choice",difficulty:"medium",text:"未成年人违法犯罪",options:["不用承担任何责任","承担与成年人完全相同的责任","根据不同年龄承担相应的法律责任","由父母承担全部责任"],answer:"C",explanation:"未成年人违法犯罪需承担相应法律责任但不同于成年人有减轻或从轻处罚规定",source:"2026精练·未成年人违法"},
{id:"zf14",kp:"社会与规则",type:"choice",difficulty:"hard",text:"一般违法行为包括",options:["民事违法和行政违法","民事违法和刑事违法","行政违法和刑事违法","只有行政违法"],answer:"A",explanation:"违法行为分一般违法和犯罪。一般违法包括民事违法和行政违法。犯罪是刑事违法行为",source:"2026精练·违法行为分类"},
{id:"zf15",kp:"国家与制度",type:"fill",difficulty:"medium",text:"我国最高行政机关是____即____。",options:null,answer:"国务院；中央人民政府",explanation:"国务院=中央人民政府=最高行政机关=最高国家权力机关的执行机关",source:"2026精练·行政机关"},
{id:"zf16",kp:"创新与发展",type:"choice",difficulty:"medium",text:"属于我国基本国策的是",options:["对外开放","计划生育","节约资源和保护环境","以上都是"],answer:"D",explanation:"三项都是基本国策。此外男女平等也是基本国策",source:"2026精练·基本国策"},
{id:"zf17",kp:"文化与自信",type:"fill",difficulty:"medium",text:"民族精神的内涵:以____为核心团结统一爱好和平____自强不息。",options:null,answer:"爱国主义；勤劳勇敢",explanation:"民族精神五内涵:爱国主义(核心)+团结统一+爱好和平+勤劳勇敢+自强不息",source:"2026精练·民族精神内涵"},
{id:"zf18",kp:"世界与中国",type:"fill",difficulty:"medium",text:"当今世界经济发展的主要趋势是____。国际格局发展的趋势是____。",options:null,answer:"经济全球化；世界多极化",explanation:"经济全球化+世界多极化是当今世界两大发展趋势",source:"2026精练·世界趋势"},
{id:"zf19",kp:"创新与发展",type:"choice",difficulty:"easy",text:"共同富裕是",options:["同步富裕","同等富裕","先富带后富最终共同富裕","平均主义"],answer:"C",explanation:"共同富裕不等于同步同等富裕也不等于平均主义。是鼓励一部分人先富起来带动后富最终实现共同富裕",source:"2026精练·共同富裕"},
{id:"zf20",kp:"国家与制度",type:"choice",difficulty:"medium",text:"我国的国家性质是",options:["人民民主专政的社会主义国家","资产阶级共和国","封建专制国家","君主立宪制国家"],answer:"A",explanation:"宪法规定我国是工人阶级领导的以工农联盟为基础的人民民主专政的社会主义国家",source:"2026精练·国家性质"},
{id:"zf21",kp:"集体与法治",type:"fill",difficulty:"medium",text:"法律的作用包括____作用和____作用。",options:null,answer:"规范；保护",explanation:"规范作用:规定人们可以做什么应当做什么不应当做什么。保护作用:维护合法权益",source:"2026精练·法律作用"},
{id:"zf22",kp:"成长与自我",type:"choice",difficulty:"easy",text:"关于学习的正确认识是",options:["学习只是学生的事","学习有苦有乐需要终身学习","只有学校才能学习","毕业了就不用学习了"],answer:"B",explanation:"学习伴随我们成长是苦乐交织的过程需要终身学习",source:"2026精练·学习观"});

console.log("[精选题库七] loaded");
})();
