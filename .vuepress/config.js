module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: 'Java研习之路',
  description: '愿时光能缓，愿故人不散！',
  // dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ['meta', { name: 'Keywords', content: 'Java研习之路' }],
    ['meta', { name: 'description', content: 'Java研习之路' }],
  ],
  theme: 'reco',
  themeConfig: {
    author: 'Java研习之路',
    docsRepo: 'https://github.com/LubanNo-7/vuepressBlog',
    docsBranch: 'master',
    docsDir: '',
    lastUpdatedText: '上次更新时间',
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'LubanNo-7/vuepressBlog',
    // 将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接。
    // repoLabel: '查看源码',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑',

    nav: [
      { text: '面试指南', link: '/docs/theme-reco/api.html', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '工具推荐',
        icon: 'reco-message',
        items: [
          { text: 'codeSandbox', link: 'https://codesandbox.io',icon: 'reco-coding' },
          { text: '正则表达式手册', link: 'https://tool.oschina.net/uploads/apidocs/jquery/regexp.html', icon: 'reco-coding' }
        ]
      },
      { text: '关于',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/glassy-sky-lisong', icon: 'reco-github' },
          { text: '博客园', link: 'https://cnblogs.com/glassysky', icon: 'reco-bokeyuan' },
          { text: '掘金', link: 'https://juejin.im', icon: 'reco-juejin' },
          { text: '哔哩哔哩', link: 'https://space.bilibili.com/476991968', icon: 'reco-bilibili' },
          { text: '码云', link: 'https://gitee.com/glassyskyforgame', icon: 'reco-mayun' },
          { text: 'Twitter', link: 'https://twitter.com/GLASSYSKY113', icon: 'reco-twitter' }
        ]
      }
    ],
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: {
      '/docs/theme-reco/': [
        {
          title: 'Java基础知识',
          children: ['api', 'theme']
        },
        {
          title: 'Spring框架',
          children: ['api', 'plugin']
        }
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: '远方有你伴余生',
        desc: '愿时光能缓，愿故人不散！',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 作者
    author: 'Java研习之路',
    // 作者头像
    authorAvatar: '/author.jpg',
    // 备案号
    record: 'Java研习之路',
    // 项目开始时间
    startYear: '2022',
    /**
     * 密钥 (if your blog is private)
     */
    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },
    /**
     * valine 设置 (if you need valine comment )
     */
    // valineConfig 配置与 1.x 一致
    valineConfig: {
      appId: 'VJDz4LsxPCYi5SKz6NCXUhd1-gzGzoHsz',
      appKey: 'QDIPxDPKjVTWQvIcOStbAstY',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      verify: true, // 验证码服务
      // notify: true,
      recordIP: true,
      // hideComments: true // 隐藏评论
    }

  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 240,
        height: 352
      }
    ],
    [
      //先安装在配置， npm install @vuepress-plugin-meting --save
      'meting', {
        metingApi: "https://api.i-meto.com/meting/api",
        meting: {
          server: "netease",
          type: "playlist",
          mid: "621465725"
        },          // 不配置该项的话不会出现全局播放器
        aplayer: {
          lrcType: 3
        }
      }
    ],
    [
      //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    [
      //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
      '@vuepress\plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
    [
     //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
      'flowchart'
    ],
    [
      //插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save
      'sitemap', {
        hostname: 'https://www.glassysky.site'
      }
    ],
    ['@vuepress/pwa', {
      serviceWorker: true,  //vuepress插件PWA 先安装在配置 npm install @vuepress/pwa --save
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
     }
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }],
    ["@vuepress-yard/vuepress-plugin-window",{
      title: "远方有你伴余生の公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
      contentInfo: {
        title: "欢迎进来的小耳朵 ",
        needImg: true,
        imgUrl: "https://reinness.com/avatar.png",
        content: "喜欢博皮可以到博客园关注教程",
        contentStyle: ""
      },
      bottomInfo: {
        btnText: '关于',
        linkTo: 'https://cnblogs.com/glassysky'
      },
      closeOnce: false
    }]
  ]
}