import { createStore } from 'vuex'
export default createStore({
  state: {
    //轮播图首页
    Rotation: [
      { src: require('../assets/homebg1.jpg'), id: 1 },
      { src: require('../assets/homebg2.jpg'), id: 2 },
      { src: require('../assets/homebg3.jpg'), id: 3 },
      { src: require('../assets/homebg4.jpg'), id: 4 },
    ],
    //首页关于我们
    homeAbout: [
      { title: '8年深耕，更懂我们的客户', msg: `安大夫在传统技术服务领域已经有超过8年的经验积累，多年的深耕，让我们创新打造的安全领域的智慧互联网平台，更懂客户所需。`, id: 1 },
      { title: '8年深耕，更懂我们的客户', msg: `安大夫在传统技术服务领域已经有超过8年的经验积累，多年的深耕，让我们创新打造的安全领域的智慧互联网平台，更懂客户所需。`, id: 2 },
      { title: '8年深耕，更懂我们的客户', msg: `安大夫在传统技术服务领域已经有超过8年的经验积累，多年的深耕，让我们创新打造的安全领域的智慧互联网平台，更懂客户所需。`, id: 3 },
    ],
    homeAboutMsg: `安大夫是一家致力于打造安全领域的智慧互联网平台公司。通过搭建智慧互联网平台+共享安全资源的模式，为社会提供一站式安全技术咨询与管家服务。公司的嘀嘀安全平台（企业安全领域的滴滴出行平台）、华工搜索（行业独创的法律法规大数据搜索引擎）、安大夫教育（人力资源培训、加工、服务、共享）、安大夫saas产品（安全信息化、数字化软件产品）等多项技术和产品，将引领安全行业创新发展。`,
    homeAboutImgText: [
      {
        title: '动如脱兔、前兔似景！安大夫（上海）科技发展有限公司召开2023年度工作会议',
        msg: `2月6日，安大夫科技隆重召开“动如脱兔、前兔似景”2023年工作会议，会议总结盘点2022年工作，研究谋划2023年发展思路，以起步即冲刺、开局就决战的姿态，锚定目标加压奋进，全面开启公司高质量发展新征程。`,
        url: require('../assets/homebody1.jpg'),
        src: [
          { url: require('../assets/homebody1.jpg') },
          { url: require('../assets/homebody1.jpg') },
          { url: require('../assets/homebody1.jpg') },
        ]
      },
      {
        title: `动如脱兔、前兔似景！安大夫（上海）科技发展有限公司召开2023年度工作会议`,
        msg: `2月6日，安大夫科技隆重召开 “动如脱兔、前兔似景”2023年工作会议，会议总结盘点2022年工作， 研究谋划2023年发展思路，以起步即冲刺、开局就决战的姿态，锚定目标、加压奋进，全面开启公司高质量发展新征程。`,
        url: require('../assets/homebody2.jpg'),
        src: [
          { url: require('../assets/homebody2.jpg') },
          { url: require('../assets/homebody2.jpg') },
          { url: require('../assets/homebody2.jpg') },
        ]
      },
      {
        title: `动如脱兔、前兔似景！安大夫（上海）科技发展有限公司召开2023年度工作会议`,
        msg: `2月6日，安大夫科技隆重召开“动如脱兔、前兔似景”2023年工作会议，会议总结盘点2022年工作，加压奋进，全面开启公司高质量发展新征程。`,
        url: require('../assets/homebody3.jpg'),
        src: [
          { url: require('../assets/homebody3.jpg') },
          { url: require('../assets/homebody3.jpg') },
          { url: require('../assets/homebody3.jpg') },
        ]
      },
    ],
    // 关于我们页面
    aboutPage: {
      list: [
        { src: require('../assets/homebg1.jpg'), id: 1 },
        { src: require('../assets/homebg1.jpg'), id: 2 },
        { src: require('../assets/homebg1.jpg'), id: 3 },
      ],
      lslist: [
        { time: '2022·成立', title: '重庆川思信息技术有限公司成立', msg: '重庆川思信息技术有限公司成立啊实打实的按键手感撒谎觉得按什么的巴士' },
        { time: '2022·成立', title: '重庆川思信息技术有限公司成立', msg: '重庆川思信息技术有限公司成立啊实打实的按键手感撒谎觉得按什么的巴士' },
        { time: '2022·成立', title: '重庆川思信息技术有限公司成立', msg: '重庆川思信息技术有限公司成立啊实打实的按键手感撒谎觉得按什么的巴士' },
      ],
      title: '川思信息：致力于打造安全领域的智慧互联网平台',
      msg: `川思信息科技有限公司，成立于2019年。是一家致力于打造安全领域的智慧互联网平台公司。
                    通过搭建智慧互联网平台+共享安全资源的模式，为社会提供一站式安全技术咨询与管家服务。公司的嘀嘀安全平台（企业安全领域的滴滴出行平台）、华工搜索（行业独创的法律法规大数据搜索引擎）、安大夫教育（人力资源培训、加工、服务、共享）、安大夫saas产品（安全信息化、数字化软件产品）等多项技术和产品，将引领安全行业创新发展。
                `,
      developMsg: `川思信息科技有限公司，成立于2019年。是一家致力于打造安全领域的智慧互联网平台公司。
                    通过搭建智慧互联网平台+共享安全资源的模式，为社会提供一站式安全技术咨询与管家服务。公司的嘀嘀安全平台（企业安全领域的滴滴出行平台）、华工搜索（行业独创的法律法规大数据搜索引擎）、安大夫教育（人力资源培训、加工、服务、共享）、安大夫saas产品（安全信息化、数字化软件产品）等多项技术和产品，将引领安全行业创新发展。`,

    },
    // 行业动态
    trends: {
      list: [
        { title: '重庆川思信息技术有限公司成立', msg: '川思信息科技有限公司，成立于2019年。是一家致力于打造安全领域的智慧互联网平台公司。通过搭建智慧互联网平台+共享安全资源的模式，为社会提供一站式安全技术咨询与管家服务。公司的嘀嘀安全平台（企业安全领域的滴滴出行平台）、华工搜索（行业独创的法律法规大数据搜索引擎）、安大夫教育（人力资源培训、加工、服务、共享）、安大夫saas产品（安全信息化、数字化软件产品）等多项技术和产品，将引领安全行业创新发展。' },
        { title: '重庆川思信息技术有限公司成立', msg: '川思信息科技有限公司，成立于2019年。是一家致力于打造安全领域的智慧互联网平台公司。通过搭建智慧互联网平台+共享安全资源的模式，为社会提供一站式安全技术咨询与管家服务。公司的嘀嘀安全平台（企业安全领域的滴滴出行平台）、华工搜索（行业独创的法律法规大数据搜索引擎）、安大夫教育（人力资源培训、加工、服务、共享）、安大夫saas产品（安全信息化、数字化软件产品）等多项技术和产品，将引领安全行业创新发展。' },
        { title: '重庆川思信息技术有限公司成立', msg: '川思信息科技有限公司，成立于2019年。是一家致力于打造安全领域的智慧互联网平台公司。通过搭建智慧互联网平台+共享安全资源的模式，为社会提供一站式安全技术咨询与管家服务。公司的嘀嘀安全平台（企业安全领域的滴滴出行平台）、华工搜索（行业独创的法律法规大数据搜索引擎）、安大夫教育（人力资源培训、加工、服务、共享）、安大夫saas产品（安全信息化、数字化软件产品）等多项技术和产品，将引领安全行业创新发展。' },
        { title: '重庆川思信息技术有限公司成立', msg: '川思信息科技有限公司，成立于2019年。是一家致力于打造安全领域的智慧互联网平台公司。通过搭建智慧互联网平台+共享安全资源的模式，为社会提供一站式安全技术咨询与管家服务。公司的嘀嘀安全平台（企业安全领域的滴滴出行平台）、华工搜索（行业独创的法律法规大数据搜索引擎）、安大夫教育（人力资源培训、加工、服务、共享）、安大夫saas产品（安全信息化、数字化软件产品）等多项技术和产品，将引领安全行业创新发展。' },
        { title: '重庆川思信息技术有限公司成立', msg: '川思信息科技有限公司，成立于2019年。是一家致力于打造安全领域的智慧互联网平台公司。通过搭建智慧互联网平台+共享安全资源的模式，为社会提供一站式安全技术咨询与管家服务。公司的嘀嘀安全平台（企业安全领域的滴滴出行平台）、华工搜索（行业独创的法律法规大数据搜索引擎）、安大夫教育（人力资源培训、加工、服务、共享）、安大夫saas产品（安全信息化、数字化软件产品）等多项技术和产品，将引领安全行业创新发展。' },
      ],
    },
    //  产品服务
    product: {
      msg: `以数字化、智慧化为驱动，帮助企业数字化升级，为企业提供一站式安全技术服务。`,
      body3list: [
        { url: require('../assets/01.jpg'), src: [{ url: require('../assets/01.jpg') }], id: 1, title: '嘀嘀安全', msg: '基于滴滴出行模式，构建安全技术服务领域的第三方专家服务平台', eng: 'DIDI SECURITY' },
        { url: require('../assets/02.jpg'), src: [{ url: require('../assets/02.jpg') }], id: 2, title: '嘀嘀安全', msg: '基于滴滴出行模式，构建安全技术服务领域的第三方专家服务平台', eng: 'DIDI SECURITY' },
        { url: require('../assets/03.jpg'), src: [{ url: require('../assets/03.jpg') }], id: 3, title: '嘀嘀安全', msg: '基于滴滴出行模式，构建安全技术服务领域的第三方专家服务平台', eng: 'DIDI SECURITY' },
        { url: require('../assets/04.jpg'), src: [{ url: require('../assets/04.jpg') }], id: 4, title: '嘀嘀安全', msg: '基于滴滴出行模式，构建安全技术服务领域的第三方专家服务平台', eng: 'DIDI SECURITY' },
        { url: require('../assets/05.jpg'), src: [{ url: require('../assets/05.jpg') }], id: 5, title: '嘀嘀安全', msg: '基于滴滴出行模式，构建安全技术服务领域的第三方专家服务平台', eng: 'DIDI SECURITY' },
      ],
    },
    // 合作伙伴
    cooperate: {
      msg: `以数字化、智慧化为驱动，帮助企业数字化升级，为企业提供一站式安全技术服务。`,
      cooperateList: [
        { src: require('../assets/cooperate1.png'), id: 1 },
        { src: require('../assets/cooperate2.png'), id: 2 },
        { src: require('../assets/cooperate2.png'), id: 23 },
        { src: require('../assets/cooperate3.png'), id: 34 },
        { src: require('../assets/cooperate4.png'), id: 45 },
        { src: require('../assets/cooperate2.png'), id: 46 },
        { src: require('../assets/cooperate4.png'), id: 48 },
        { src: require('../assets/cooperate2.png'), id: 49 },
        { src: require('../assets/cooperate2.png'), id: 40 },
        { src: require('../assets/cooperate3.png'), id: 42 },
        { src: require('../assets/cooperate3.png'), id: 43 },
        { src: require('../assets/cooperate4.png'), id: 34 },
        { src: require('../assets/cooperate4.png'), id: 94 },
        { src: require('../assets/cooperate5.png'), id: 15 },

      ],
    },
    // 加入我们
    joinUs:{
      list:[
        {
          name:'产品经理',
          duty:`1.负责智慧城市IT项目的前期调研、规划和产品设计，挖掘并引导客户需求，针对需求编写需求方案；<br>
          2.负责行业分析与规划，负责项目立项咨询、投标技术方案编写工作；<br>
          3.信息化建设项目实施、进度跟踪、项目测试和交付等；
          4.部门领导安排的其他相关工作。`,
          qualification:`1.大专及以上学历，计算机科学技术类、软件工程类及电子信息工程类等相关专业或者化工专业；<br>
          2.能够面对客户进行项目解决方案思路沟通宣讲，能成功牵引客户，并有较强的抗压能力和临场应变能力；<br>
          3.具备较强的逻辑思维能力、沟通表达能力、文案能力和良好的团队合作精神。`
        },
        {
          name:'项目经理',
          duty:`1.负责智慧城市IT项目的前期调研、规划和产品设计，挖掘并引导客户需求，针对需求编写需求方案；<br>
          2.负责行业分析与规划，负责项目立项咨询、投标技术方案编写工作；<br>
          3.信息化建设项目实施、进度跟踪、项目测试和交付等；
          4.部门领导安排的其他相关工作。`,
          qualification:`1.大专及以上学历，计算机科学技术类、软件工程类及电子信息工程类等相关专业或者化工专业；<br>
          2.能够面对客户进行项目解决方案思路沟通宣讲，能成功牵引客户，并有较强的抗压能力和临场应变能力；<br>
          3.具备较强的逻辑思维能力、沟通表达能力、文案能力和良好的团队合作精神。`
        }
      ]
    },
    //页脚
    footer:{
        title:'重庆川思信息技术有限公司',
        address:'重庆市江北区星耀天地',
        phone:'0000000000000',
        email:'000000000@qq.com',
        ipAddrss:'版权所有 2023 重庆川思信息技术有限公司 渝ICP备20020614号-5'
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})