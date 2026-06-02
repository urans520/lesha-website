var fs = require('fs');
var path = require('path');
var DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);

var prod = {products:[
{id:1,name:"228片三层加厚无纺布化妆棉",category:"cotton",categoryName:"化妆棉",description:"三层加厚无纺布材质，双面省水设计，不掉絮，柔软亲肤，适合日常卸妆及护肤使用。",spec:"228片/盒",image:""},
{id:2,name:"双头纯棉棉签 500支装",category:"swab",categoryName:"棉签",description:"100%纯棉双头设计，纸轴环保材质，不掉棉絮，适合化妆补妆、婴儿护理及日常清洁。",spec:"500支/盒",image:""},
{id:3,name:"干湿两用美妆蛋套装",category:"blender",categoryName:"美妆蛋",description:"亲水性聚氨酯材质，遇水膨胀柔软Q弹，上妆服帖不卡粉，多种形状满足全脸需求。",spec:"3个/套",image:""},
{id:4,name:"丝绒蜜粉扑 大号散粉扑",category:"puff",categoryName:"粉扑",description:"进口丝绒面料，绒毛细腻均匀，抓粉力强，释放均匀，定妆自然服帖，可反复清洗使用。",spec:"直径7cm",image:""},
{id:5,name:"安全防护眉刀 3把装",category:"eyebrow",categoryName:"眉刀眉剪",description:"不锈钢刀片+防护网设计，锋利耐用不伤皮肤，弯头设计贴合眉骨，轻松修出精致眉形。",spec:"3把/套",image:""},
{id:6,name:"女人传说透明喷雾瓶 100ml",category:"bottle",categoryName:"喷雾瓶",description:"PET透明瓶身，超细雾化喷头，出雾均匀细腻，密封防漏设计，适合化妆水、爽肤水分装。",spec:"50/75/100ml",image:""},
{id:7,name:"空气刘海卷发筒 3个装",category:"hair",categoryName:"卷发工具",description:"双层设计固定更牢固，自带粘扣无需额外夹子，适合空气刘海及发尾造型，懒人必备。",spec:"3个/套",image:""},
{id:8,name:"气垫粉扑圆形替换装",category:"puff",categoryName:"粉扑",description:"高密度聚氨酯材质，不吃粉底液，均匀上妆不卡纹，适合各类气垫BB霜替换使用。",spec:"直径5.5cm",image:""},
{id:9,name:"美容修眉剪刀 弯头",category:"eyebrow",categoryName:"眉刀眉剪",description:"不锈钢精密刀口，弯头设计精准修剪，手感舒适，适合眉部及面部细小毛发修剪。",spec:"单把装",image:""},
{id:10,name:"纯棉洁面巾 一次性洗脸巾",category:"cotton",categoryName:"化妆棉",description:"加厚珍珠纹纯棉材质，干湿两用不掉絮，替代毛巾更卫生，适合洁面、卸妆、宝宝护理。",spec:"60抽/包",image:""},
{id:11,name:"迷你便携旅行喷雾瓶套装",category:"bottle",categoryName:"喷雾瓶",description:"30ml迷你装，航空便携无压力，多种颜色可选，适合旅行出差分装化妆品。",spec:"30ml/个",image:""},
{id:12,name:"硅胶洗脸扑 洁面扑",category:"puff",categoryName:"粉扑",description:"食品级硅胶材质，柔软Q弹易起泡，深层清洁毛孔，不易滋生细菌，可高温消毒。",spec:"单只装",image:""}
]};

var news = {news:[
{id:1,date:"2026-05-15",title:"乐莎美容参加第29届CBE中国美容博览会",summary:"我司将于2026年5月12日至14日参加在上海新国际博览中心举办的第29届CBE中国美容博览会，届时将展出多款新品化妆工具，欢迎新老客户莅临展位洽谈合作。",link:"#"},
{id:2,date:"2026-04-20",title:"新品发布：228片三层加厚化妆棉全面升级",summary:"针对市场需求，我们对经典款化妆棉进行了全面升级，采用全新三层复合工艺，双面省水效果提升30%，现已批量生产接受订单。",link:"#"},
{id:3,date:"2026-03-08",title:"三八妇女节：致敬每一位了不起的她",summary:"三月八日国际妇女节，乐莎美容向所有女性致以节日的祝福。我们始终秉持让美丽变得更简单的品牌理念，用心做好每一款美容工具。",link:"#"},
{id:4,date:"2026-01-18",title:"2026年春节放假通知",summary:"根据国家法定节假日安排，我司将于2026年1月25日至2月5日放假，期间暂停发货。请各位客户提前做好备货安排，预祝大家新春快乐！",link:"#"},
{id:5,date:"2025-12-10",title:"欢迎新客户莅临工厂参观考察",summary:"近期多位国内外客户到访我司广州工厂进行实地考察，对我们的生产能力和品质管控体系给予了高度评价。欢迎更多合作伙伴预约参观。",link:"#"},
{id:6,date:"2025-11-01",title:"通过ISO9001质量管理体系年度审核",summary:"我司已顺利通过ISO9001质量管理体系2025年度审核认证，标志着公司在质量管理方面持续保持行业领先水平。",link:"#"}
]};

var comp = {
name:"广州市乐莎美容用具有限公司",nameEn:"Guangzhou Lesha Beauty Tools Co., Ltd.",brand:"女人传说",
description:"广州市乐莎美容用具有限公司是一家集研发、生产、销售于一体的专业美容化妆用具制造商。公司坐落于广州市白云区，拥有标准化生产车间和先进的生产设备，主营化妆棉、棉签、粉扑、美妆蛋、眉刀眉剪、喷雾瓶、卷发工具等系列产品。",
address:"广州市白云区永兴上沙井西街四巷1号",phone:"+86 20-XXXXXXXX",email:"info@leshabeauty.com",
website:"https://shop1381510538134.1688.com",
stats:[{number:"10+",label:"行业经验(年)"},{number:"500+",label:"合作客户"},{number:"200+",label:"产品种类"}],
certifications:["ISO9001","SGS","FDA"]
};

function write(name, data) {
  var fp = path.join(DIR, name);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2), 'utf-8');
  console.log('OK: ' + name + ' (' + fs.statSync(fp).size + ' bytes)');
}

write('products.json', prod);
write('news.json', news);
write('company.json', comp);
console.log('\nDone! Restart: node server.js');
