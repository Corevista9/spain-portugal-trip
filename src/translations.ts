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
    city: '巴塞罗那', title: '高迪建筑与蒙特惠奇', description: '高迪住宅二选一 · 巴塞罗内塔海滩 · 城堡与魔术喷泉',
    morning: '09:00–12:30选择巴特罗之家或米拉之家参观。', midday: '在Eixample或格拉西亚大道午餐，之后前往巴塞罗内塔海滩。', evening: '17:00后上蒙特惠奇看日落、城堡与魔术喷泉，注意缆车关闭时间。', walking: '约10000–13000步',
    alternate: '雨天或大风时取消海滩或缆车，改为室内博物馆和短途出租车。', transport: '地铁至Passeig de Gràcia；再乘地铁或出租车前往海滩和蒙特惠奇',
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
    city: '马德里', title: '托莱多一日游', description: 'RENFE高铁 · 犹太区 · 主教座堂 · 河谷观景',
    morning: '乘早班Renfe Avant前往托莱多，先参观犹太区与塞法迪博物馆。', midday: '在Zocodover广场午餐，下午参观托莱多主教座堂。', evening: '选择河谷观景点或城内博物馆，约21:00前返回马德里。', walking: '约10000–15000步',
    alternate: '陡坡、炎热或行走疲累时取消河谷观景点，使用扶梯、公交和出租车。', transport: '马德里阿托查站乘RENFE到托莱多；市内扶梯、公交或出租车；指定车次返程',
  },
  {
    city: '塞维利亚', title: '马德里前往塞维利亚', description: '高铁AVE · 入住酒店 · 酒店附近塔帕斯',
    morning: '晚一点早餐，上午乘AVE前往塞维利亚。', midday: '抵达后入住，并在酒店附近午餐。', evening: '酒店附近短距离平缓散步，并早点享用家庭塔帕斯晚餐。', walking: '约5000–7000步',
    alternate: '直接在酒店休息，或乘出租车到市中心室内餐厅。', transport: '地铁至阿托查站 → AVE至塞维利亚圣胡斯塔站 → 打车到酒店',
  },
  {
    city: '塞维利亚', title: '皇家城堡与大教堂', description: '定时王宫 · 大教堂 · 吉拉达塔选择 · 圣十字区',
    morning: '09:30预订塞维利亚王宫，预留2–3小时及花园休息。', midday: '圣十字区午餐，预留14:00–15:30参观大教堂，可选吉拉达塔。', evening: '返回酒店休息，之后安排简单晚餐或室内弗拉门戈演出。', walking: '约10000–15000步',
    alternate: '楼梯、恐高或行李不便时不登吉拉达塔，改为大教堂内部和圣十字区。', transport: '电车T1至Archivo de Indias；景点间短途出租车与坐下休息',
  },
  {
    city: '塞维利亚', title: '特里亚纳与弗拉门戈', description: '特里亚纳市场 ·陶瓷中心 · 下午休息 · 预订表演',
    morning: '10:00前参观特里亚纳市场和陶瓷中心，之后在河岸休息。', midday: '特里亚纳或市中心午餐，下午返回酒店休息。', evening: '预订弗拉门戈演出，选17:00、19:00或19:30场次。', walking: '约7000–10000步',
    alternate: '圣周游行拥挤时取消市场，选择有座位的室内表演或咖啡馆。', transport: '步行过Triana桥或使用公交电车；晚间短途出租车',
  },
  {
    city: '里斯本', title: '塞维利亚飞往里斯本', description: 'TAP TP1105 · 机场行李 · 阿尔法玛日落散步',
    morning: '塞维利亚自由慢晨，退房并提前两小时到机场。', midday: 'TP1105约15:25起飞，约15:30当地时间抵达里斯本，取行李后进城。', evening: '可从Senhora do Monte下行阿尔法玛观景点，体力不足则酒店附近晚餐。', walking: '约6000–9000步',
    alternate: '飞行后石板路陡峭时改用出租车和扶梯，避免阿尔法玛爬坡。', transport: 'SVQ机场巴士或出租车；里斯本地铁红线或出租车进市区',
  },
  {
    city: '里斯本', title: '贝伦区与Chiado', description: '热罗尼穆斯修道院 · 贝伦塔 · 葡式蛋挞 · 28路电车',
    morning: '09:30预订热罗尼穆斯修道院；天气好可加贝伦塔和葡式蛋挞。', midday: '贝伦区午餐，之后返回市中心并充分休息。', evening: 'Chiado/Bairro Alto散步，约19:00后乘28路电车避开拥挤。', walking: '约10000–14000步',
    alternate: '雨天或大风时取消塔内露台，改为河滨、蛋挞店和MAAT室内参观。', transport: '火车或15E电车到贝伦；地铁或出租车返回Chiado',
  },
  {
    city: '里斯本', title: '辛特拉与罗卡角', description: '佩纳宫 · 辛特拉老城 · 欧洲大陆西端',
    morning: '08:00从Rossio火车站出发，约10:00定时参观佩纳宫；复活节周六人最多。', midday: '辛特拉午餐后乘403路或出租车前往罗卡角。', evening: '乘火车返回里斯本告别晚餐，或按时刻表经Cascais返程。', walking: '约12000–15000步',
    alternate: '雨天或大风时取消罗卡角，留在辛特拉老城和室内景点。', transport: 'Rossio火车到辛特拉；434路、出租车或403路前往罗卡角',
  },
  {
    city: '里斯本', title: '返回加拿大', description: '加拿大航空AC 811 · 里斯本13:00 → 多伦多15:55',
    morning: '早点早餐、退房并取回所有行李，约09:00–09:30前往里斯本机场。', midday: '提前3小时抵达机场，完成手续并在登机口附近休息。', evening: '13:00登机AC 811，预计15:55抵达多伦多皮尔逊机场。', walking: '少于7000步',
    alternate: '若最后机场步行距离过长，可申请轮椅或机场助行服务。', transport: '预订出租车或机场地铁；机场预留3小时',
  },
];
