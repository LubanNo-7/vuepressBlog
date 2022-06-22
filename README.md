---
home: true   #指定该文件为您的首页，改为false则不作为首页
modules:
  - BannerBrand
  - MdContent
  - Footer
bannerBrand:
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: '200px'
    width: '100%'
    display: block
    margin: '0 auto 2rem'
    borderRadius: '1rem'
  # bgImage: '/bg.svg'
  heroText: vuepress-reco    #首页居中显示的文本
  # tagline:首页显示的标语
  tagline: 一款 vuepress 主题容器，集成多种主题底层功能，快速生成主题风格。主题 2.0 的默认风格是原主题 1.0 迁移而来，更多风格正在路上，敬请期待。
  buttons:
    - { text: 快速开始, link: '/docs/theme-reco/theme.html' }
    # - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }