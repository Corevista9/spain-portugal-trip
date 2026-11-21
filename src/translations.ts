export type Language = 'en' | 'zh';

export const ui = {
  en: {
    passports: 'CANADIAN PASSPORTS · 3 TRAVELERS', title: 'Iberia, 14 Days', days: '14 days', nights: '12 nights',
    routeSubtitle: 'MAR 15–28, 2027', routeHero: 'Spain & Portugal, at an easy pace.', route: 'Route', viewMap: 'View map', flights: 'Flights',
    makeItYours: 'Make it yours', groupPace: 'GROUP PACE', keepWalking: 'Keep walking under 15k', indoorOption: 'Choose indoor rainy-day option',
    planSubtitle: 'MAR 15–28, 2027', dayByDay: 'Day by day', light: 'LIGHT PACE', moderate: 'MODERATE PACE', morning: 'Morning',
    lunchRest: 'Lunch & rest', evening: 'Evening', transport: 'Transport', pace: 'Pace', alternate: 'Rain / low-energy option',
    mapRoute: '14-DAY ROUTE', mapTitle: 'Spain & Portugal', tripRoom: 'TRIP ROOM', groupTitle: 'Our group', tripChoices: 'Trip choices', tapVote: 'Tap to vote',
    tripTab: 'Trip', planTab: 'Plan', mapTab: 'Map', groupTab: 'Group', members: 'Group members',
    jj: 'Adult · Organizer', qq: 'Dad · Adult', aa: 'Daughter · 13 · Canadian passport',
  },
  zh: {
    passports: '加拿大护照 · 3 位旅客', title: '伊比利亚，14天', days: '14天', nights: '12晚',
    routeSubtitle: '2027年3月15–28日', routeHero: '西班牙与葡萄牙，轻松节奏。', route: '路线', viewMap: '查看地图', flights: '航班',
    makeItYours: '一起决定', groupPace: '团体节奏', keepWalking: '每日步数控制在1.5万以内', indoorOption: '选择室内雨天方案',
    planSubtitle: '2027年3月15–28日', dayByDay: '逐日行程', light: '轻松节奏', moderate: '适中节奏', morning: '上午',
    lunchRest: '午餐与休息', evening: '傍晚', transport: '交通', pace: '步行节奏', alternate: '雨天或低体力方案',
    mapRoute: '14天路线', mapTitle: '西班牙与葡萄牙', tripRoom: '行程讨论区', groupTitle: '我们的成员', tripChoices: '行程选择', tapVote: '点按投票',
    tripTab: '概览', planTab: '行程', mapTab: '地图', groupTab: '成员', members: '行程成员',
    jj: '成人 · 行程组织者', qq: '爸爸 · 成人', aa: '女儿 · 13岁 · 加拿大护照',
  },
} as const;

export const stopsZh = ['巴塞罗那', '马德里', '塞维利亚', '里斯本'];
export const countriesZh = ['西班牙', '西班牙', '西班牙', '葡萄牙'];
export const stopDatesZh = ['3月16–19日', '3月19–22日', '3月22–24日', '3月24–28日'];

export const choiceZh = [
  '圣家族大教堂门票', '普拉多与丽池公园', '塞维利亚皇家城堡与大教堂', '贝伦区与辛特拉选择',
];

export const dayZh = [
  {
    city: '多伦多', title: '飞往巴塞罗那', description: '加拿大航空 AC 820 · 多伦多晚19:50出发 · 夜间航班',
    morning: '整理行李，把护照、药品和两个随身行李放在容易取用的位置。', midday: '在多伦多吃一顿简单午餐，确认订位、登机和酒店信息。', evening: '19:50登机AC 820。进餐、补充水分并尽量休息。', walking: '少于6000步',
    alternate: '如行走较累，可申请机场路边协助或优先轮椅/助行服务。', transport: '预订多伦多至皮尔逊机场接送或机场出租车',
  },
  {
    city: '巴塞罗那', title: '抵达与入住', description: '机场 → 市中心酒店 · 简单午餐 · 不安排主要景点',
    morning: '预计08:20抵达巴塞罗那机场，完成入境、取行李并前往酒店。', midday: '行李寄存，先在加泰罗尼亚广场附近简单午餐并熟悉环境。', evening: '可选择30分钟的扩展区散步，早点晚餐并于20:30–21:00休息。', walking: '约6000–8000步',
    alternate: '如不想散步，可直接在酒店或附近咖啡馆休息。', transport: '机场巴士或地铁；带行李时可由酒店门口直接打车',
  },
  {
    city: '巴塞罗那', title: '圣家族大教堂', description: '定时参观大教堂 · 扩展区午餐 · 酒店休息',
    morning: '09:30开始不宜过早。预订定时入场券，在教堂内停留60–90分钟。', midday: '在扩展区午餐，之后返回酒店休息90分钟。', evening: '在圣胡安大道短距离散步，或直接在酒店附近晚餐。', walking: '约8000–10000步',
    alternate: '天气不好时，可改去附近室内博物馆或咖啡馆。', transport: '地铁L2/L5到圣家族；返程短途出租车',
  },
  {
    city: '巴塞罗那', title: '哥特区与滨海区', description: '大教堂外观 · 老城区 · 可选海边休息',
    morning: '乘地铁到加泰罗尼亚广场，参观哥特区及巴塞罗那大教堂外观。', midday: '在市中心悠闲吃塔帕斯午餐，随后返回酒店休息。', evening: '选择短段海滨散步，或乘出租车到巴塞罗内塔晚餐。', walking: '约9000–11000步',
    alternate: '海滨可改为毕加索博物馆或格拉西亚大道购物。', transport: '乘地铁到Jaume I或加泰罗尼亚广场；返程打车',
  },
  {
    city: '马德里', title: '巴塞罗那前往马德里', description: '高铁AVE · 行李转运 · 中心区轻松晚间',
    morning: '早餐后办理退房，约09:30–10:30从巴塞罗那乘AVE前往马德里。', midday: '抵达后入住或寄存行李，在火车站附近简单午餐。', evening: '在太阳门广场短距离散步，并在酒店附近晚餐。', walking: '约5000–7000步',
    alternate: '如不想前往太阳门，可乘出租车到市中心室内市场。', transport: '地铁或出租车到桑斯站 → AVE至马德里阿托查站 → 打车到酒店',
  },
  {
    city: '马德里', title: '普拉多与丽池公园', description: '定时普拉多参观 · 丽池公园 · 充分休息',
    morning: '预订09:30或10:00普拉多门票，只选择一翼或精品路线。', midday: '博物馆附近午餐，随后乘出租车返回酒店休息。', evening: '可选择丽池公园主入口附近的平缓散步和咖啡。', walking: '约8000–10000步',
    alternate: '下雨时改为泰森博尔内米萨博物馆或室内商圈。', transport: '地铁与短途出租车，减少不必要换乘',
  },
  {
    city: '马德里', title: '皇家马德里', description: '王宫 · 马约尔广场 · 下午轻松休息',
    morning: '预订王宫定时门票，参观各厅时坐下休息。', midday: '在马约尔广场附近午餐，之后返回酒店。', evening: '酒店附近简单晚餐；可选巧克力油条作为分享小点。', walking: '约9000–11000步',
    alternate: '室外不适时改为索菲亚王后艺术中心或电话大楼区域。', transport: '地铁或出租车到歌剧院站；午餐后打车返回',
  },
  {
    city: '塞维利亚', title: '马德里前往塞维利亚', description: '高铁AVE · 入住酒店 · 酒店附近塔帕斯',
    morning: '晚一点早餐，上午乘AVE前往塞维利亚。', midday: '抵达后入住，并在酒店附近午餐。', evening: '酒店附近短距离平缓散步，并早点享用家庭塔帕斯晚餐。', walking: '约5000–7000步',
    alternate: '直接在酒店休息，或乘出租车到市中心室内餐厅。', transport: '地铁至阿托查站 → AVE至塞维利亚圣胡斯塔站 → 打车到酒店',
  },
  {
    city: '塞维利亚', title: '大教堂与皇家城堡', description: '两处定时门票 · 西班牙广场 · 午间充分休息',
    morning: '分别预订皇家城堡、大教堂与Giraldillo钟楼，只看主要区域。', midday: '大教堂参观后，悠闲午餐并返回酒店休息。', evening: '乘出租车到西班牙广场，平缓参观30–45分钟并拍日落照片。', walking: '约9000–12000步',
    alternate: '雨天或天气炎热时改为弗拉门戈表演或室内博物馆。', transport: '景点间乘出租车，市中心只走短距离',
  },
  {
    city: '里斯本', title: '塞维利亚前往里斯本', description: '当日转移 · 确认直达方案 · 在市中心入住',
    morning: '早餐后离开塞维利亚，以确认好的直达里斯本交通方式出发。', midday: '尽量选择一次直达行程，中途允许休息与午餐。', evening: '在Baixa或Rossio附近入住，简单晚餐并整理四晚行李。', walking: '少于6000步',
    alternate: '若公共交通换乘复杂且带有大行李，可预订直达接送。', transport: '比较直飞、ALSA长途巴士和铁路，抵达后预订出租车',
  },
  {
    city: '里斯本', title: '贝伦区与河滨', description: '热罗尼穆斯修道院外观 · 贝伦博物馆 · 葡式蛋挞',
    morning: '早餐后前往贝伦区，预订修道院或改为现代博物馆室内参观。', midday: '品尝葡式蛋挞，坐下午餐并返回酒店休息。', evening: '可选择在商业广场附近平缓散步，或在Baixa区晚餐。', walking: '约8000–10000步',
    alternate: '雨天乘出租车留在热罗尼穆斯博物馆或MAAT室内参观。', transport: '出租车或15路电车前往贝伦；午餐后打车返回',
  },
  {
    city: '里斯本', title: 'Baixa、阿尔法玛与观景点', description: '较平缓的市中心街道 · 一处观景点 · 家庭晚间',
    morning: '从商业广场和Baixa开始，再乘出租车上山只安排一处阿尔法玛观景点。', midday: '在山下午餐，下午返回酒店休息。', evening: '在波亚罗区附近短距离晚餐散步，或可选坐下欣赏弗拉门戈表演。', walking: '约9000–12000步',
    alternate: '若不去阿尔法玛，可改为时代市场与瓷砖博物馆。', transport: '地铁到Baixa-Chiado，上坡段乘出租车或电车',
  },
  {
    city: '里斯本', title: '里斯本或辛特拉自由日', description: '选择一项外出 · 下午自由 · 为返程准备',
    morning: '投票决定半日辛特拉火车游，或留在里斯本参观古尔贝基亚美术馆和购物。', midday: '午餐与休息保持灵活，不再增加第二项大型预订。', evening: '整理行李，确认AC 811，安排机场出租车并早点晚餐。', walking: '约6000–9000步',
    alternate: '雨天或体力不足时选择古尔贝基亚、LX Factory或海洋馆。', transport: '不固定跨城市行程；仅按选择乘出租车或火车',
  },
  {
    city: '里斯本', title: '返回加拿大', description: '加拿大航空AC 811 · 里斯本13:00 → 多伦多15:55',
    morning: '早点早餐、退房并取回所有行李，约09:00–09:30前往里斯本机场。', midday: '提前3小时抵达机场，完成手续并在登机口附近休息。', evening: '13:00登机AC 811，预计15:55抵达多伦多皮尔逊机场。', walking: '少于7000步',
    alternate: '若最后机场步行距离过长，可申请轮椅或机场助行服务。', transport: '预订出租车或机场地铁；机场预留3小时',
  },
];
