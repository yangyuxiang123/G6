// 英雄属性
const herolist = [
    {
      date: '2020-06-22',
      pepole: '嘉文四世',
      resone: '德玛西亚皇子',
      sex: '男',
      phone: 18256037590,
      home: '德玛西亚',
      like: '上单，打野',
      winRate: '51.3%',
      head: require('../../assets/img/皇子.jpg'), 
      location: '坦克',
      attributeList: [
        {
          key: '生命',
          value: 150
        },
        {
          key: '攻击',
          value: 100
        },
        {
          key: '防御',
          value: 130
        },
        {
          key: '韧性',
          value: 200
        },
      ],
      performance: [70, 60, 56, 80, 68]
    },
    {
      date: '2020-06-23',
      pepole: '盖伦',
      resone: '德玛西亚之力',
      sex: '男',
      phone: 18256037591,
      home: '德玛西亚',
      like: '上单',
      winRate: '57.7%',
      head: require('../../assets/img/德玛.jpg'),
      location: '坦克，战士',
      attributeList: [
        {
          key: '生命',
          value: 260
        },
        {
          key: '攻击',
          value: 105
        },
        {
          key: '防御',
          value: 135
        },
        {
          key: '韧性',
          value: 170
        },
      ],
      performance: [40, 20, 56, 80, 36]
    },
    {
      date: '2020-06-23',
      pepole: '赵兴',
      resone: '德邦总管',
      sex: '男',
      phone: 18256037591,
      home: '德玛西亚',
      like: '打野',
      winRate: '50.3%',
      head: require('../../assets/img/赵兴.jpg'), 
      location: '刺客，战士',
      attributeList: [
        {
          key: '生命',
          value: 120
        },
        {
          key: '攻击',
          value: 170
        },
        {
          key: '防御',
          value: 205
        },
        {
          key: '韧性',
          value: 160
        },
      ],
      performance: [70, 60, 56, 80, 68]
    },
    {
      date: '2020-06-23',
      pepole: '泰达米尔',
      resone: '蛮族之王',
      sex: '男',
      phone: 18256037591,
      home: '弗雷尔卓德',
      like: '上单，打野',
      winRate: '52.5%',
      head: require('../../assets/img/蛮王.jpg'),
      location: '刺客，战士',
      attributeList: [
        {
          key: '生命',
          value: 140
        },
        {
          key: '攻击',
          value: 180
        },
        {
          key: '防御',
          value: 130
        },
        {
          key: '韧性',
          value: 150
        },
      ],
      performance: [40, 20, 56, 80, 36] 
    },
    {
      date: '2020-06-23',
      pepole: '易大师',
      resone: '无极剑圣',
      sex: '男',
      phone: 18256037591,
      home: '艾欧尼亚',
      like: '中单，打野',
      winRate: '55.3%',
      head: require('../../assets/img/剑圣.jpg'),
      location: '刺客，战士',
      attributeList: [
        {
          key: '生命',
          value: 250
        },
        {
          key: '攻击',
          value: 208
        },
        {
          key: '防御',
          value: 200
        },
        {
          key: '韧性',
          value: 150
        },
      ],
      performance: [70, 60, 56, 80, 68]  
    },
    {
      date: '2020-06-23',
      pepole: '德莱厄斯',
      resone: '诺克萨斯之手',
      sex: '男',
      phone: 18256037591,
      home: '诺克萨斯',
      like: '上单',
      winRate: '56.3%',
      head: require('../../assets/img/诺克.jpg'),
      location: '战士',
      attributeList: [
        {
          key: '生命',
          value: 180
        },
        {
          key: '攻击',
          value: 165
        },
        {
          key: '防御',
          value: 135
        },
        {
          key: '韧性',
          value: 150
        },
      ],
      performance: [40, 20, 56, 80, 36]   
    },
    {
      date: '2020-06-23',
      pepole: '德莱文',
      resone: '荣耀行刑官',
      sex: '男',
      phone: 18256037591,
      home: '诺克萨斯',
      like: '下路ADC',
      winRate: '60.3%',
      head: require('../../assets/img/德莱文.jpg'),
      location: '射手',
      attributeList: [
        {
          key: '生命',
          value: 150
        },
        {
          key: '攻击',
          value: 170
        },
        {
          key: '防御',
          value: 230
        },
        {
          key: '韧性',
          value: 250
        },
      ],
      performance: [70, 60, 56, 80, 68]   
    },
    {
      date: '2020-06-23',
      pepole: '泰隆',
      resone: '刀锋之影',
      sex: '男',
      phone: 18256037591,
      home: '诺克萨斯',
      like: '中单',
      winRate: '51.9%',
      head: require('../../assets/img/男刀.jpg'),
      location: '刺客',
      attributeList: [
        {
          key: '生命',
          value: 240
        },
        {
          key: '攻击',
          value: 107
        },
        {
          key: '防御',
          value: 133
        },
        {
          key: '韧性',
          value: 150
        },
      ],
      performance: [40, 20, 56, 80, 36]  
    },
    {
      date: '2020-06-23',
      pepole: '莫德凯撒',
      resone: '金属大师',
      sex: '男',
      phone: 18256037591,
      home: '暗影岛',
      like: '上单，中单',
      winRate: '51.7%',
      head: require('../../assets/img/铁男.jpg'),
      location: '法坦，战士',
      attributeList: [
        {
          key: '生命',
          value: 130
        },
        {
          key: '攻击',
          value: 160
        },
        {
          key: '防御',
          value: 135
        },
        {
          key: '韧性',
          value: 160
        },
      ],
      performance: [70, 60, 56, 80, 68]   
    },
    {
      date: '2020-06-23',
      pepole: '贾克斯',
      resone: '武器大师',
      sex: '男',
      phone: 18256037591,
      home: '艾卡西亚',
      like: '上单，打野',
      winRate: '51.3%',
      head: require('../../assets/img/武器.jpg'),
      location: '战士',
      attributeList: [
        {
          key: '生命',
          value: 190
        },
        {
          key: '攻击',
          value: 165
        },
        {
          key: '防御',
          value: 135
        },
        {
          key: '韧性',
          value: 160
        },
      ],
      performance: [40, 20, 56, 80, 36]  
    }
]

//全英雄头像
const heroAll = [
  {
    head: require('../../assets/img/allHeadImg/dazui.png'),
    name: '深渊巨口',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/guangtou.png'),
    name: '流浪法师',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/huabanxie.png'),
    name: '复仇之矛',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/juemu.png'),
    name: '掘墓者',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/laotou.png'),
    name: '时光老头',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/luxian.png'),
    name: '圣枪游侠',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/maomi.png'),
    name: '魔法猫咪',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/meinan.png'),
    name: '美男子',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/menyan.png'),
    name: '永恒梦魇',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/nazha.png'),
    name: '纳什之牙',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/qiunv.png'),
    name: '暗黑元首',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/shenv.png'),
    name: '魔蛇之拥',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/wei.png'),
    name: '皮城执法官',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/xueren.png'),
    name: '雪人努努',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/yue.png'),
    name: '猩红之月',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/dazui.png'),
    name: '深渊巨口',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/guangtou.png'),
    name: '流浪法师',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/huabanxie.png'),
    name: '复仇之矛',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/juemu.png'),
    name: '掘墓者',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/laotou.png'),
    name: '时光老头',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/luxian.png'),
    name: '圣枪游侠',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/maomi.png'),
    name: '魔法猫咪',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/meinan.png'),
    name: '美男子',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/menyan.png'),
    name: '永恒梦魇',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/nazha.png'),
    name: '纳什之牙',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/qiunv.png'),
    name: '暗黑元首',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/shenv.png'),
    name: '魔蛇之拥',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/wei.png'),
    name: '皮城执法官',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/xueren.png'),
    name: '雪人努努',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/yue.png'),
    name: '猩红之月',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/dazui.png'),
    name: '深渊巨口',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/guangtou.png'),
    name: '流浪法师',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/huabanxie.png'),
    name: '复仇之矛',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/juemu.png'),
    name: '掘墓者',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/laotou.png'),
    name: '时光老头',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/luxian.png'),
    name: '圣枪游侠',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/maomi.png'),
    name: '魔法猫咪',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/meinan.png'),
    name: '美男子',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/menyan.png'),
    name: '永恒梦魇',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/nazha.png'),
    name: '纳什之牙',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/qiunv.png'),
    name: '暗黑元首',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/shenv.png'),
    name: '魔蛇之拥',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/wei.png'),
    name: '皮城执法官',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/xueren.png'),
    name: '雪人努努',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/yue.png'),
    name: '猩红之月',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/dazui.png'),
    name: '深渊巨口',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/guangtou.png'),
    name: '流浪法师',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/huabanxie.png'),
    name: '复仇之矛',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/juemu.png'),
    name: '掘墓者',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/laotou.png'),
    name: '时光老头',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/luxian.png'),
    name: '圣枪游侠',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/maomi.png'),
    name: '魔法猫咪',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/meinan.png'),
    name: '美男子',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/menyan.png'),
    name: '永恒梦魇',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/nazha.png'),
    name: '纳什之牙',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/qiunv.png'),
    name: '暗黑元首',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/shenv.png'),
    name: '魔蛇之拥',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/wei.png'),
    name: '皮城执法官',
    changes: '削弱'
  },
  {
    head: require('../../assets/img/allHeadImg/xueren.png'),
    name: '雪人努努',
    changes: '加强'
  },
  {
    head: require('../../assets/img/allHeadImg/yue.png'),
    name: '猩红之月',
    changes: '削弱'
  },
]

export {
  herolist,
  heroAll
}