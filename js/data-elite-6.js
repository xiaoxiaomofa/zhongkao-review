(function(){
if(typeof SUBJECTS==="undefined")return;
var A=SUBJECTS.math.questions,B=SUBJECTS.physics.questions,C=SUBJECTS.chemistry.questions,D=SUBJECTS.politics.questions;

A.push({id:"me1",kp:"数与式",type:"fill",difficulty:"easy",text:"分解因式 x2-9 = ____。",options:null,answer:"(x+3)(x-3)",explanation:"平方差公式 a2-b2=(a+b)(a-b)",source:"2026精练-因式分解"},
{id:"me2",kp:"方程与不等式",type:"choice",difficulty:"medium",text:"方程x2-5x+6=0的两根为",options:["1和6","2和3","-2和-3","1和5"],answer:"B",explanation:"(x-2)(x-3)=0得x1=2,x2=3",source:"2026精练-解方程"},
{id:"me3",kp:"一次函数",type:"choice",difficulty:"easy",text:"正比例函数y=kx过点(3,-6)则k=",options:["2","-2","1/2","-1/2"],answer:"B",explanation:"代入-6=3k得k=-2",source:"2026精练-正比例函数"},
{id:"me4",kp:"三角形",type:"fill",difficulty:"medium",text:"ABC相似于DEF相似比2:3若AB=4则DE=____。",options:null,answer:"6",explanation:"AB:DE=2:3,4:DE=2:3,DE=6",source:"2026精练-相似比"},
{id:"me5",kp:"方程与不等式",type:"fill",difficulty:"medium",text:"不等式-2x+1大于5的解集为____。",options:null,answer:"x小于-2",explanation:"-2x大于4,x小于-2注意除负数不等号方向改变",source:"2026精练-解不等式"},
{id:"me6",kp:"四边形",type:"choice",difficulty:"easy",text:"矩形具有而平行四边形不一定具有的性质是",options:["对边平行且相等","对角线互相平分","四个角都是直角","对角相等"],answer:"C",explanation:"矩形=平行四边形+一个角为直角,特有性质:四个角都是直角和对角线相等",source:"2026精练-矩形性质"},
{id:"me7",kp:"数与式",type:"fill",difficulty:"medium",text:"已知a-b=3,ab=2则(a+b)2=____。",options:null,answer:"17",explanation:"(a+b)2=(a-b)2+4ab=9+8=17",source:"2026精练-完全平方"},
{id:"me8",kp:"二次函数",type:"choice",difficulty:"easy",text:"抛物线y=-(x+1)2+2的开口方向和顶点坐标是",options:["向上(-1,2)","向下(-1,-2)","向下(-1,2)","向上(1,2)"],answer:"C",explanation:"a小于0开口向下,顶点(-1,2)",source:"2026精练-抛物线性质"},
{id:"me9",kp:"圆",type:"fill",difficulty:"easy",text:"半径为6的圆中60度圆心角所对弧长为____(保留pi)。",options:null,answer:"2pi",explanation:"弧长l=n*pi*r/180=60*pi*6/180=2pi",source:"2026精练-弧长公式"},
{id:"me10",kp:"统计与概率",type:"fill",difficulty:"easy",text:"数据2,3,5,5,5,8,9的众数是____。",options:null,answer:"5",explanation:"5出现3次最多为众数",source:"2026精练-众数"},
{id:"me11",kp:"一次函数",type:"fill",difficulty:"medium",text:"若点A(a,3)在函数y=2x-1的图象上则a=____。",options:null,answer:"2",explanation:"代入3=2a-1得2a=4,a=2",source:"2026精练-函数求值"},
{id:"me12",kp:"三角形",type:"choice",difficulty:"medium",text:"能判定两个三角形全等的是",options:["三个角对应相等","两边和其中一边对角","两角及其夹边","两边和一个角"],answer:"C",explanation:"ASA判定正确,B是SSA不能判定",source:"2026精练-全等判定"});

B.push({id:"pe1",kp:"力学基础",type:"fill",difficulty:"easy",text:"力的三要素是____、____、____。",options:null,answer:"大小；方向；作用点",explanation:"力的作用效果与三要素都有关",source:"2026精练-力三要素"},
{id:"pe2",kp:"压强浮力",type:"choice",difficulty:"easy",text:"大气压随高度的增加而",options:["增大","减小","不变","先增后减"],answer:"B",explanation:"大气压随高度增加而减小海拔越高空气越稀薄气压越低",source:"2026精练-大气压"},
{id:"pe3",kp:"电路基础",type:"fill",difficulty:"easy",text:"一节干电池电压____V安全电压不高于____V家庭电路电压____V。",options:null,answer:"1.5；36；220",explanation:"常见电压值必记",source:"2026精练-常见电压"},
{id:"pe4",kp:"力学基础",type:"choice",difficulty:"easy",text:"下列工具中属于费力杠杆的是",options:["撬棒","羊角锤","镊子","瓶起子"],answer:"C",explanation:"镊子动力臂小于阻力臂为费力杠杆",source:"2026精练-杠杆分类"},
{id:"pe5",kp:"电功率",type:"fill",difficulty:"easy",text:"测电笔辨火线零线时手要接触笔尾的____体。",options:null,answer:"金属",explanation:"手触笔尾金属体氖管亮为火线",source:"2026精练-测电笔"},
{id:"pe6",kp:"光现象",type:"choice",difficulty:"medium",text:"光从空气斜射入水入射角40度折射角可能是",options:["0度","25度","40度","50度"],answer:"B",explanation:"光从空气入水折射角小于入射角故小于40度",source:"2026精练-折射角"},
{id:"pe7",kp:"力学基础",type:"fill",difficulty:"easy",text:"重力的方向总是____。g约为____N/kg。",options:null,answer:"竖直向下；10",explanation:"重力方向竖直向下非垂直向下",source:"2026精练-重力方向"},
{id:"pe8",kp:"电功率",type:"choice",difficulty:"easy",text:"利用电流热效应工作的是",options:["电视机","电冰箱","电饭锅","洗衣机"],answer:"C",explanation:"电饭锅利用焦耳定律电能转化为内能",source:"2026精练-电流热效应"},
{id:"pe9",kp:"压强浮力",type:"choice",difficulty:"medium",text:"潜水艇上浮和下沉是通过改变",options:["自身重力","自身体积","水的密度","推进器推力"],answer:"A",explanation:"潜水艇改变自身重力水舱充水重力增大下沉排水重力减小上浮",source:"2026精练-潜水艇原理"},
{id:"pe10",kp:"物态变化",type:"fill",difficulty:"easy",text:"加快蒸发方法:提高____增大____加快____。",options:null,answer:"液体温度；液体表面积；液面上方空气流速",explanation:"三因素温度越高面积越大空气流速越快蒸发越快",source:"2026精练-蒸发因素"},
{id:"pe11",kp:"力学基础",type:"fill",difficulty:"medium",text:"用20N力握5N瓶子静止空中摩擦力____N方向____。握力增到30N摩擦力____。",options:null,answer:"5；竖直向上；不变(仍为5N)",explanation:"静止受力平衡f=G=5N竖直向上,静摩擦力等于重力不变",source:"2026精练-静摩擦力"});

C.push({id:"ce1",kp:"物质变化",type:"fill",difficulty:"easy",text:"化学变化的本质特征是____。",options:null,answer:"有新物质生成",explanation:"化学变化与物理变化的根本区别是否有新物质生成",source:"2026精练-化学变化本质"},
{id:"ce2",kp:"空气氧气",type:"fill",difficulty:"medium",text:"催化剂一变两不变:____改变,____和____不变。",options:null,answer:"反应速率；质量；化学性质",explanation:"催化剂改变反应速率本身质量和化学性质不变",source:"2026精练-催化剂"},
{id:"ce3",kp:"金属",type:"fill",difficulty:"medium",text:"炼铁原理用____将铁从____中还原出来。",options:null,answer:"CO；铁的氧化物",explanation:"Fe2O3+3CO高温2Fe+3CO2",source:"2026精练-工业炼铁"},
{id:"ce4",kp:"酸碱盐",type:"choice",difficulty:"easy",text:"下列物质溶于水放热的是",options:["NaCl","NH4NO3","NaOH","蔗糖"],answer:"C",explanation:"NaOH溶于水放热NH4NO3吸热NaCl和蔗糖温度变化不明显",source:"2026精练-溶解热"},
{id:"ce5",kp:"水与溶液",type:"fill",difficulty:"easy",text:"净化水程度最高的方法是____。",options:null,answer:"蒸馏",explanation:"蒸馏可得到纯净水几乎不含杂质净化程度蒸馏大于吸附大于过滤大于沉淀",source:"2026精练-水的净化"},
{id:"ce6",kp:"化学与生活",type:"fill",difficulty:"medium",text:"三大有机合成材料:____、____、____。",options:null,answer:"塑料；合成纤维；合成橡胶",explanation:"三大合成材料区别天然高分子材料如棉花羊毛天然橡胶",source:"2026精练-合成材料"},
{id:"ce7",kp:"碳及其化合物",type:"choice",difficulty:"easy",text:"不属于碳单质的是",options:["金刚石","石墨","C60","干冰"],answer:"D",explanation:"干冰是固态CO2碳的氧化物非单质",source:"2026精练-碳单质"},
{id:"ce8",kp:"酸碱盐",type:"fill",difficulty:"easy",text:"盐酸除铁锈化学方程式____。",options:null,answer:"Fe2O3+6HCl=2FeCl3+3H2O",explanation:"铁锈主要成分Fe2O3与盐酸反应生成FeCl3黄色溶液",source:"2026精练-酸除铁锈"},
{id:"ce9",kp:"实验探究",type:"fill",difficulty:"easy",text:"取粉末状固体用____取块状固体用____。酒精灯加热用____焰。",options:null,answer:"药匙；镊子；外",explanation:"粉末用药匙块状用镊子外焰温度最高",source:"2026精练-实验操作"},
{id:"ce10",kp:"金属",type:"fill",difficulty:"easy",text:"合金硬度一般比纯金属____熔点一般比纯金属____。",options:null,answer:"大；低",explanation:"合金性能优于纯金属硬度更大熔点更低抗腐蚀更好",source:"2026精练-合金性质"},
{id:"ce11",kp:"实验探究",type:"choice",difficulty:"easy",text:"洒出酒精在桌上燃烧正确处理方法是",options:["用水浇灭","用嘴吹灭","用湿抹布盖灭","任其燃烧"],answer:"C",explanation:"湿抹布盖隔绝空气灭火不能用水酒精密度小于水",source:"2026精练-实验安全"});

D.push({id:"ze1",kp:"成长与自我",type:"choice",difficulty:"easy",text:"做更好的自己需要",options:["扬长避短","主动改正缺点","激发潜能","以上都是"],answer:"D",explanation:"七上四个方面全部包括",source:"2026精练-做更好自己"},
{id:"ze2",kp:"友谊与交往",type:"choice",difficulty:"easy",text:"网上交友应该",options:["随意约见网友","公开个人信息","提高安全防范意识","完全相信网友"],answer:"C",explanation:"网上交友需慎重提高防范意识",source:"2026精练-网上交友"},
{id:"ze3",kp:"集体与法治",type:"choice",difficulty:"medium",text:"属于司法保护的是",options:["父母教育子女","学校法治讲座","法院少年法庭","社区法治宣传"],answer:"C",explanation:"司法保护指公安检察院法院在司法活动中的特殊保护",source:"2026精练-司法保护"},
{id:"ze4",kp:"社会与规则",type:"choice",difficulty:"medium",text:"社会规则包括",options:["道德纪律法律","道德纪律风俗","法律纪律风俗","道德纪律法律风俗"],answer:"D",explanation:"社会规则种类多样法律是最刚性的规则",source:"2026精练-规则种类"},
{id:"ze5",kp:"国家与制度",type:"choice",difficulty:"easy",text:"我国经济制度的基础是",options:["国有经济","集体经济","社会主义公有制","非公有制经济"],answer:"C",explanation:"宪法规定经济制度基础是社会主义公有制",source:"2026精练-经济制度"},
{id:"ze6",kp:"创新与发展",type:"fill",difficulty:"easy",text:"发展根本目的是____。以____为中心的发展思想。",options:null,answer:"增进民生福祉；人民",explanation:"以人民为中心发展为了人民依靠人民成果由人民共享",source:"2026精练-发展思想"},
{id:"ze7",kp:"文化与自信",type:"choice",difficulty:"medium",text:"坚定文化自信需要",options:["全盘复古","全盘西化","不忘本来吸收外来面向未来","抛弃传统"],answer:"C",explanation:"文化自信三原则不忘本来吸收外来面向未来",source:"2026精练-文化自信"},
{id:"ze8",kp:"世界与中国",type:"choice",difficulty:"easy",text:"面对经济全球化应",options:["闭关锁国","置身事外","顺应潮流保持开放","抵制外来商品"],answer:"C",explanation:"经济全球化不可逆转应顺应潮流抓住机遇",source:"2026精练-全球化"},
{id:"ze9",kp:"青春与情绪",type:"choice",difficulty:"medium",text:"对止于至善理解正确的是",options:["只有伟人能达到","虽不能至心向往之的实践过程","普通人做不到","达到后无需努力"],answer:"B",explanation:"止于至善是追求更高道德境界没有终点的过程",source:"2026精练-止于至善"},
{id:"ze10",kp:"集体与法治",type:"fill",difficulty:"medium",text:"宪法是国家____法具有____的法律效力。",options:null,answer:"根本；最高",explanation:"宪法是根本法最高法律效力普通法不得与宪法抵触",source:"2026精练-宪法地位"},
{id:"ze11",kp:"社会与规则",type:"choice",difficulty:"easy",text:"公共场所吸烟被罚款属于",options:["民事违法","行政违法","刑事违法","犯罪"],answer:"B",explanation:"行政罚款是行政处罚属于行政违法行为",source:"2026精练-违法分类"});

console.log("[精选题库六] loaded");
})();
